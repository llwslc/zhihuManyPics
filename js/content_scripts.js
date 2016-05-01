



chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "hello") {


        var edit = document.getElementsByClassName("zm-editable-editor-field-element editable")[0];
        edit.focus();

        // var xsrf = document.getElementsByName("anno-checkbox")[0];
        // xsrf.focus();

        //document.execCommand('paste');

        // var edit = document.getElementsByClassName('zm-editable-editor-field-element editable')[0];
        // edit.focus();
        // console.log(edit)
        // var br = edit.childNodes[0];
        // console.log(br)
        // if(br.nodeName == 'BR') { edit.removeChild(br); };
        // var temp = document.createElement('p');
        // temp.innerHTML = 0;
        // edit.appendChild(temp);
       // edit.innerHTML = '<p>正常</p><p><br></p><p><br></p><p><br></p><p><br></p><p><b>粗的</b></p><p><br></p><p>正常</p>';

    }
  });
