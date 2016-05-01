(function() {

    chrome.tabs.getSelected(null, function(tab){
        var urlReg = new RegExp("(http|https)://www.zhihu.com/question/[0-9]+")
        if (!urlReg.test(tab.url)) {
            alert("当前页面不是答题页面...");
            window.close();
        }
    })

    document.getElementById("selectFileBtn")
        .addEventListener("change", handleFileSelect, false);

    document.getElementById("xbt")
        .addEventListener("click", function(e){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"});
            window.close();
    });

        }, false);

    function handleFileSelect(event) {
        readFileInputEventAsArrayBuffer(event, function(arrayBuffer) {
            mammoth.convertToHtml({arrayBuffer: arrayBuffer}, {ignoreEmptyParagraphs: false})
                .then(displayResult)
                .done(clearFileSelect);
        });
    }

    function clearFileSelect() {
        document.getElementById("selectFileBtn").value = ""
    }

    function displayResult(result) {
        //var pStr = escapeHtml(result.value);

        var executeScriptStr = "var edit = document.getElementsByClassName('zm-editable-editor-field-element editable')[0];";
        executeScriptStr += "edit.focus();";
        executeScriptStr += "var br = edit.childNodes[0];";
        executeScriptStr += "if(br.nodeName == 'BR') { edit.removeChild(br); };";
        executeScriptStr += "var temp = document.createElement('p');";
        executeScriptStr += "temp.innerHTML = 0;";
        executeScriptStr += "edit.appendChild(temp);";
        //executeScriptStr += `edit.innerHTML = '${pStr}';`;

        chrome.tabs.executeScript(null,{code: executeScriptStr})
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


    var imgx = new Image();
    imgx.src = 'data:image/png;base64,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';


    function baseToBlob(base64Data) {
        var format = "image/png";
        var base64 = base64Data;
        var code = window.atob(base64.split(",")[1]);
        var aBuffer = new window.ArrayBuffer(code.length);
        var uBuffer = new window.Uint8Array(aBuffer);
        for(var i = 0; i < code.length; i++) {
            uBuffer[i] = code.charCodeAt(i) & 0xff;
        }
        console.log(base64.length)
        console.log(code.length)
        console.info([aBuffer]);
        console.info(uBuffer);
        console.info(uBuffer.buffer);
        console.info(uBuffer.buffer==aBuffer); //true

        var blob = null;
        try {
            blob = new Blob([uBuffer], {type : format});
        } catch(e) {
            window.BlobBuilder = window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder ||
            window.MSBlobBuilder;
            if(e.name == 'TypeError' && window.BlobBuilder) {
                var bb = new window.BlobBuilder();
                bb.append(uBuffer.buffer);
                blob = bb.getBlob("image/jpeg");
            } else if(e.name == "InvalidStateError") {
                blob = new Blob([aBuffer], {type : format});
            } else {
                // null
            }
        }
        return blob;
    };

    // var xxx = baseToBlob(imgx.src);
    // console.log(xxx)


        //     var reader = new FileReader();
        //     reader.onload = function(e) {
        //         console.log("reader", reader)

        //         var img = document.createElement('img');
        //         img.src = e.target.result;
        //         document.body.appendChild(img);
        //     }
        //     reader.readAsDataURL(xxx);


        // document.addEventListener('copy', function(e){
        //     console.log(123)

        //    //e.clipboardData.setData('text/html', '<p>正常</p><p><img src="data:image/png;base64,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" /></p><p><strong>粗的</strong></p><p>正常</p>');
        //     //e.clipboardData.setData('image/png', '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');
        //  var a =  e.clipboardData.setData('image/png', imgx);

        //  console.log(a)

        // //   e.preventDefault();
        // });

        // var temp = document.createElement("textarea");
        // temp.hidden = true;
        // temp.value = "temp"
        // document.body.appendChild(temp);
        // temp.select();
        // document.execCommand('copy');
        // temp.remove()


        // var uploadFunc = function(b) {
        //     var c = new window.FormData;
        //     c.append("via", "xhr2");
        //     c.append("upload_file", b);
        //     var d;
        //     d = window.$.ajaxSettings.xhr();
        //     d.withCredentials = !0;
        //         var f = window.$.ajax({
        //             url: "https://upload.zhihu.com/upload",
        //             data: c,
        //             processData: !1,
        //             contentType: !1,
        //             xhr: function() {
        //             return d
        //         },
        //         type: "POST"
        //     }).done(function(a) {
        //         "string" === window.$.type(a) && (a = JSON.parse(a));
        //             console.log(a)

        //         if (1 === a.code) {
        //             console.log(a.msg)
        //         }
        //         else {
        //             var b = new window.Image;
        //             b.src = a.msg[0];
        //             b.setAttribute("originImgSrc", b.src.replace("_m.jpg", "_r.jpg"));
        //             b.setAttribute("data-rawWidth", a.msg[1]);
        //             b.setAttribute("data-rawHeight", a.msg[2]);
        //         }
        //     }).fail(function() {
        //         console.log("上传失败！\x3e_\x3c")
        //     }).always(function() {
        //         console.log('always')
        //     });
        // }

        // uploadFunc(xxx)

        // console.log(123)


        //console.log($(".zm-editable-editor-field-element.editable"))

        // var executeScriptStr = "var edit = document.getElementsByClassName('zm-editable-editor-field-element editable')[0];";
        // executeScriptStr += "edit.focus();";
        // executeScriptStr += "var br = edit.childNodes[0];";
        // executeScriptStr += "if(br.nodeName == 'BR') { edit.removeChild(br); };";
        // executeScriptStr += "var temp = document.createElement('p');";
        // executeScriptStr += "temp.innerHTML = 0;";
        // executeScriptStr += "edit.appendChild(temp);";
        // executeScriptStr += "edit.innerHTML = '<p>正常</p><p><br></p><p><br></p><p><br></p><p><br></p><p><b>粗的</b></p><p><br></p><p>正常</p>';";

        // chrome.tabs.executeScript(null,{code: executeScriptStr})
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