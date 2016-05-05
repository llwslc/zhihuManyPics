function simulate(element, eventName) {
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers) {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent) {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents') {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        } else {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
            options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
            options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    } else {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
}

var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
}

var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.word == "zhihu") {

        var edit = document.getElementsByClassName("zm-editable-editor-field-element editable")[0];
        var draftStyle = document.getElementsByClassName("draft-saved-info")[0].style;
        if (draftStyle.display == "none") {
            simulate(edit, "focus");
        } else {
            simulate(edit, "focus");
            simulate(edit, "select");


        var r = edit.selection.createRange()
        r.moveStart('character', edit.innerText.length);
        r.collapse(true);
        r.select();

            simulate(edit.lastChild, "mousedown");
            simulate(edit.lastChild, "mouseup");
            simulate(edit.lastChild, "click");
        }


        document.execCommand('paste');
    }
  });


window.onload = function(){
  var edit = document.getElementsByClassName("zm-editable-editor-field-element editable")[0];
  var pEle = document.getElementsByClassName("zm-editable-editor-field-element editable")[0].lastChild;
  edit.addEventListener("beforecut",        function(){ console.log("edit beforecut",             1 ) });
  edit.addEventListener("beforepaste",      function(){ console.log("edit beforepaste",           1 ) });
  edit.addEventListener("beforeunload",     function(){ console.log("edit beforeunload",          1 ) });
  edit.addEventListener("blur",             function(){ console.log("edit blur",                  1 ) });
  edit.addEventListener("click",            function(){ console.log("edit click",                 1 ) });
  edit.addEventListener("cut",              function(){ console.log("edit cut",                   1 ) });
  edit.addEventListener("dblclick",         function(){ console.log("edit dblclick",              1 ) });
  edit.addEventListener("dragend",          function(){ console.log("edit dragend",               1 ) });
  edit.addEventListener("dragenter",        function(){ console.log("edit dragenter",             1 ) });
  edit.addEventListener("draghoverend",     function(){ console.log("edit draghoverend",          1 ) });
  edit.addEventListener("draghoverstart",   function(){ console.log("edit draghoverstart",        1 ) });
  edit.addEventListener("dragleave",        function(){ console.log("edit dragleave",             1 ) });
  edit.addEventListener("dragover",         function(){ console.log("edit dragover",              1 ) });
  edit.addEventListener("dragstart",        function(){ console.log("edit dragstart",             1 ) });
  edit.addEventListener("drop",             function(){ console.log("edit drop",                  1 ) });
  edit.addEventListener("focus",            function(){ console.log("edit focus",                 1 ) });
  edit.addEventListener("hanhchange",       function(){ console.log("edit hanhchange",            1 ) });
  edit.addEventListener("input",            function(){ console.log("edit input",                 1 ) });
  edit.addEventListener("keydown",          function(){ console.log("edit keydown",               1 ) });
  edit.addEventListener("keypress",         function(){ console.log("edit keypress",              1 ) });
  edit.addEventListener("keyup",            function(){ console.log("edit keyup",                 1 ) });
  edit.addEventListener("mousedown",        function(){ console.log("edit mousedown",             1 ) });
  //edit.addEventListener("mouseover",        function(){ console.log("edit mouseover",             1 ) });
  edit.addEventListener("mouseup",          function(){ console.log("edit mouseup",               1 ) });
  edit.addEventListener("paste",            function(){ console.log("edit paste",                 1 ) });
  edit.addEventListener("resize",           function(){ console.log("edit resize",                1 ) });
  edit.addEventListener("scroll",           function(){ console.log("edit scroll",                1 ) });
  edit.addEventListener("touchstart",       function(){ console.log("edit touchstart",            1 ) });
  edit.addEventListener("updatelazy",       function(){ console.log("edit updatelazy",            1 ) });
  edit.addEventListener("select",           function(){ console.log("edit select",                1 ) });
  edit.addEventListener("change",           function(){ console.log("edit change",                1 ) });


  pEle.addEventListener("beforecut",        function(){ console.log("pEle beforecut",             2 ) });
  pEle.addEventListener("beforepaste",      function(){ console.log("pEle beforepaste",           2 ) });
  pEle.addEventListener("beforeunload",     function(){ console.log("pEle beforeunload",          2 ) });
  pEle.addEventListener("blur",             function(){ console.log("pEle blur",                  2 ) });
  pEle.addEventListener("click",            function(){ console.log("pEle click",                 2 ) });
  pEle.addEventListener("cut",              function(){ console.log("pEle cut",                   2 ) });
  pEle.addEventListener("dblclick",         function(){ console.log("pEle dblclick",              2 ) });
  pEle.addEventListener("dragend",          function(){ console.log("pEle dragend",               2 ) });
  pEle.addEventListener("dragenter",        function(){ console.log("pEle dragenter",             2 ) });
  pEle.addEventListener("draghoverend",     function(){ console.log("pEle draghoverend",          2 ) });
  pEle.addEventListener("draghoverstart",   function(){ console.log("pEle draghoverstart",        2 ) });
  pEle.addEventListener("dragleave",        function(){ console.log("pEle dragleave",             2 ) });
  pEle.addEventListener("dragover",         function(){ console.log("pEle dragover",              2 ) });
  pEle.addEventListener("dragstart",        function(){ console.log("pEle dragstart",             2 ) });
  pEle.addEventListener("drop",             function(){ console.log("pEle drop",                  2 ) });
  pEle.addEventListener("focus",            function(){ console.log("pEle focus",                 2 ) });
  pEle.addEventListener("hanhchange",       function(){ console.log("pEle hanhchange",            2 ) });
  pEle.addEventListener("input",            function(){ console.log("pEle input",                 2 ) });
  pEle.addEventListener("keydown",          function(){ console.log("pEle keydown",               2 ) });
  pEle.addEventListener("keypress",         function(){ console.log("pEle keypress",              2 ) });
  pEle.addEventListener("keyup",            function(){ console.log("pEle keyup",                 2 ) });
  pEle.addEventListener("mousedown",        function(){ console.log("pEle mousedown",             2 ) });
  //pEle.addEventListener("mouseover",        function(){ console.log("pEle mouseover",             2 ) });
  pEle.addEventListener("mouseup",          function(){ console.log("pEle mouseup",               2 ) });
  pEle.addEventListener("paste",            function(){ console.log("pEle paste",                 2 ) });
  pEle.addEventListener("resize",           function(){ console.log("pEle resize",                2 ) });
  pEle.addEventListener("scroll",           function(){ console.log("pEle scroll",                2 ) });
  pEle.addEventListener("touchstart",       function(){ console.log("pEle touchstart",            2 ) });
  pEle.addEventListener("updatelazy",       function(){ console.log("pEle updatelazy",            2 ) });
  pEle.addEventListener("select",           function(){ console.log("pEle select",                1 ) });
  pEle.addEventListener("change",           function(){ console.log("pEle change",                1 ) });
}


