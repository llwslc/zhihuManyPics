(function() {

    var debugFlag = false;

    var chromeExtensions = true;

    if (chromeExtensions) {
        var bg = chrome.extension.getBackgroundPage();
    }

    var urlHeader = "https";
    var pStrArr = [];
    var pStrIndex = 0;
    var resString = "";
    var htmlFuncArr = [];
    var emptyFunc = function(cb) {
      cb(null, null)
    }
    htmlFuncArr.push(emptyFunc)

    if (chromeExtensions) {
        chrome.tabs.getSelected(null, function(tab){
            var urlReg = new RegExp("(http|https)://www.zhihu.com/question/[0-9]+");
            if (!urlReg.test(tab.url)) {
                bg.bgAlert()

                // 注释代码 mac 系统闪退
                // alert("当前页面不是答题页面...");
                // window.close();
            } else {
                urlHeader = tab.url.split(":")[0];
            }
        })
    }

    function baseToBlob(imgScr) {
        var imgScrArr = imgScr.split(",");
        var format = imgScrArr[0].split(":")[1].split(";")[0];
        var base64 = imgScrArr[1];
        var code = window.atob(base64);
        var aBuffer = new window.ArrayBuffer(code.length);
        var uBuffer = new window.Uint8Array(aBuffer);
        for(var i = 0; i < code.length; i++) {
            uBuffer[i] = code.charCodeAt(i) & 0xff;
        }

        var blob = new Blob([uBuffer], {type : format});
        return blob;
    };

    var uploadFunc = function(blob, cb) {
        var c = new window.FormData;
        c.append("via", "xhr2");
        c.append("upload_file", blob);
        var d;
        d = window.$.ajaxSettings.xhr();
        d.withCredentials = !0;
            var f = window.$.ajax({
                url: urlHeader + "://upload.zhihu.com/upload",
                data: c,
                processData: !1,
                contentType: !1,
                xhr: function() {
                return d
            },
            type: "POST"
        }).done(function(a) {
            "string" === window.$.type(a) && (a = JSON.parse(a));
            if (1 === a.code) {
                cb({msg: a.msg}, null);
            }
            else {
                pStrArr[pStrIndex - 1] = "<p><img src=\"" + a.msg[0] + "\" />";
                cb(null, null);
            }
        }).fail(function() {
            cb({msg:"上传失败"}, null);
        }).always(function() {
        });
    }

    function sendMsgToContent() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {word: "zhihu"});
            if (!debugFlag) {
                window.close();
            };
        });
    }

    function fireCopyEvent() {
        var temp = document.createElement("textarea");
        temp.hidden = true;
        temp.value = "temp"
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        temp.remove()
    }

    document.addEventListener("copy", function(e){
        e.clipboardData.setData("text/html", resString);
        e.preventDefault();

        sendMsgToContent();
    });

    document.getElementById("selectFileBtn")
        .addEventListener("change", handleFileSelect, false);

    function handleFileSelect(event) {
        readFileInputEventAsArrayBuffer(event, function(arrayBuffer) {
            mammoth.convertToHtml({arrayBuffer: arrayBuffer}, {ignoreEmptyParagraphs: false})
                .then(displayResult)
                .done(clearFileSelect);
        });
    }

    function clearFileSelect() {
        document.getElementById("selectFileBtn").value = "";

        async.waterfall(htmlFuncArr,
        function(err, res) {
            if (!!err) {
                alert("err:", err.msg)
            } else {
                for (var i = 0; i < pStrArr.length; i++)
                {
                    resString += (pStrArr[i] + "</p>");
                };
                fireCopyEvent()
            }
        });
    }

    function displayResult(result) {
        if (debugFlag) {
            console.log(result)
        };

        pStrArr = result.value.split("</p>");
        for (var i = 0; i < pStrArr.length; i++) {
            pStrArr[i] = escapeHtml(pStrArr[i]);
        }

        pStrArr.pop()
        if (chromeExtensions) {
            for (var i = 0; i < pStrArr.length; i++) {
                var htmlFunc = function(cbRes, cb) {
                    var curStr = pStrArr[pStrIndex];
                    pStrIndex++;
                    if (curStr.indexOf("<img src=") === -1) {
                        cb(null, null);
                    } else {
                        var imgHtmlArr = curStr.split('"');
                        var blobData = baseToBlob(imgHtmlArr[1]);
                        uploadFunc(blobData, cb);
                    }
                }
                htmlFuncArr.push(htmlFunc)
            };
        }
    }

    function readFileInputEventAsArrayBuffer(event, callback) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function(loadEvent) {
            var arrayBuffer = loadEvent.target.result;
            callback(arrayBuffer);
        };

        reader.readAsArrayBuffer(file);
    }

    function escapeHtml(value) {
        return value
            .replace(new RegExp("<p>$", "g"), "<p><br>")
            .replace(new RegExp("<strong>([^\n]+)</strong>", "g"), "<b>$1</b>")
            .replace(new RegExp(" alt=\"[^\n]+\" ", "g"), "");
    }
})();

