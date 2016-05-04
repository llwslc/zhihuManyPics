(function() {

    chrome.tabs.getSelected(null, function(tab){
        var urlReg = new RegExp("(http|https)://www.zhihu.com/question/[0-9]+")
        if (!urlReg.test(tab.url)) {
            alert("当前页面不是答题页面...");
            window.close();
        }
    })

    var pStrArr = [];
    var pStrIndex = 0;
    var resString = "";
    var htmlFuncArr = [];
    var emptyFunc = function(cb) {
      cb(null, null)
    }
    htmlFuncArr.push(emptyFunc)

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
                url: "https://upload.zhihu.com/upload",
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
            window.close();
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
        var pStr = escapeHtml(result.value);
        pStrArr = pStr.split("</p>");

        pStrArr.pop()
        for (var i = 0; i < pStrArr.length; i++) {
            var htmlFunc = function(cbRes, cb) {
                var curStr = pStrArr[pStrIndex];
                pStrIndex++;
                if (curStr.indexOf("<p><img src=") === 0) {
                    var imgHtmlArr = curStr.split('"');
                    var blobData = baseToBlob(imgHtmlArr[1]);
                    uploadFunc(blobData, cb)
                } else {
                    cb(null, null)
                }
            }
            htmlFuncArr.push(htmlFunc)
        };
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
            .replace(new RegExp("<p></p>", "g"), "<p><br></p>")
            .replace(new RegExp("(<strong>)([^\n]+)(</strong>)", "g"), "<b>$2</b>")
            .replace(new RegExp(" alt=\"[^\n]+\" ", "g"), "");
    }

    sendMsgToContent()
})();


// zm-editable-editor-field-wrap-active

// https://upload.zhihu.com/upload

// <div id="mock:g" class="zm-editable-editor-field-element editable" g_editable="true" role="textbox" contenteditable="true">
//     <p><b>重大更新预警...</b></p>
//     <p><img src="https://pic2.zhimg.com/da623a98152f4f0188745f64ad355a89_s.jpg"></p>
//     <p><br></p>
//     <p><br></p>
// </div>

// word:
// <p>正常</p>
// <p></p>
// <p></p>
// <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA5CAIAAAAJJrqAAAAABmJLR…GkwTpgI3Xv32iauTt4R9D4lWiKCrGDLyY+Ji8yn09p6v8Ah/PS0eeYe1AAAAAASUVORK5CYII=" alt="C:\Users\linux\Desktop\1.png" /></p>
// <p></p>
// <p></p>
// <p><strong>粗的</strong></p>
// <p></p>
// <p>正常</p>

//a= {"msg": ["https://pic2.zhimg.com/35d86ba3193209dce4024b69835c0327_b.png", 32, 38, "35d86ba3193209dce4024b69835c0327"], "code": 0}