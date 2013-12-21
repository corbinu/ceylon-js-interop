(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/1.0.0","com.openswimsoftware.ceylon.js.language\/1.8.0","com.openswimsoftware.ceylon.js.dom\/4.0.0","com.openswimsoftware.ceylon.js.json\/1.0.0","com.openswimsoftware.ceylon.js.xmlhttprequest\/0.6.0"],"$mod-name":"com.openswimsoftware.ceylon.js.jquery","$mod-version":"1.10.0","$mod-bin":"6.0","com.openswimsoftware.ceylon.js.jquery":{"TweenAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getOff":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["returns if the tween is off"]},"$nm":"getOff"},"setOff":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"off"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets if the tween is off"]},"$nm":"setOff"},"getInterval":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the tween interval"]},"$nm":"getInterval"},"setInterval":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"interval"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the tween interval"]},"$nm":"setInterval"}},"$nm":"TweenAbs"},"DataType":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"dataTypeXML"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"dataTypeHtml"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"dataTypeScript"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"dataTypeJson"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"dataTypeJsonp"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"dataTypeText"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["the ajax request data type"]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DataType"},"JQueryEventAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"EventAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"metaKey":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["was the meta key pressed while the event was fired"]},"$nm":"metaKey"},"result":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["last value returned by an event handler that was triggered by this event, unless the value was undefined"]},"$nm":"result"},"which":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["the specific key or mouse button that triggered the event if any"]},"$nm":"which"},"isPropagationStopped":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["was event.isPropagationStopped() was ever called on this event object."]},"$nm":"isPropagationStopped"},"isDefaultPrevented":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["was event.preventDefault() was ever called on this event object."]},"$nm":"isDefaultPrevented"},"delegateTarget":{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[],"doc":["the elment on which the jQuery event handler was attached"]},"$nm":"delegateTarget"},"data":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["optional data attached to the event method"]},"$nm":"data"},"relatedTarget":{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[],"doc":["the other element involved in the event, if any."]},"$nm":"relatedTarget"},"isImmediatePropogationStopped":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["was event.stopImmediatePropagation() was ever called on this event object."]},"$nm":"isImmediatePropogationStopped"},"pageX":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["the mouse position relative to the left edge of the document"]},"$nm":"pageX"},"pageY":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["the mouse position relative to the top edge of the document"]},"$nm":"pageY"},"namespace":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["namespace specified when the event was triggered"]},"$nm":"namespace"}},"$nm":"JQueryEventAbs"},"visibleSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"visibleSelector"},"dataTypeXML":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeXML"},"targetSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"targetSelector"},"enabledSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"enabledSelector"},"fileSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"fileSelector"},"jQueryType":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryType"},"onlyChildSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"onlyChildSelector"},"jQueryError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryError"},"jQueryAjaxPrefilter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"}]},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"}]},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"dataTypes"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjaxPrefilter"},"jQueryHasData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryHasData"},"passwordSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"passwordSelector"},"jQueryParseHTML":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$def":"1","$nm":"context"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"keepScripts"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParseHTML"},"lastChildSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"lastChildSelector"},"jQueryUnique":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"arr"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryUnique"},"Callbacks":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"CallbacksAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a collection of callbacks"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Callbacks"},"JQXHR":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHRAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a jQuery abstraction of XMLHttpRequest across browsers"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQXHR"},"lastSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"lastSelector"},"jQueryInArray":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"array"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryInArray"},"lastOfTypeSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"lastOfTypeSelector"},"CallbacksAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"fired":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["have the callbacks been fired at least once"]},"$nm":"fired"},"remove":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"callbacks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["remove a callback or collection of callbacks"]},"$nm":"remove"},"fireWith":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[],"doc":["fire all the backs with the given arguments and the given context"]},"$nm":"fireWith"},"lock":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Callbacks"},"$mt":"mthd","$an":{"shared":[],"doc":["lock the callback list in its current state"]},"$nm":"lock"},"empty":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Callbacks"},"$mt":"mthd","$an":{"shared":[],"doc":["remove all the callbacks from the list"]},"$nm":"empty"},"disable":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Callbacks"},"$mt":"mthd","$an":{"shared":[],"doc":["disable the callback list from doing anything"]},"$nm":"disable"},"locked":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["is the callback list locked"]},"$nm":"locked"},"add":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"callbacks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["add a callback or collection of callbacks"]},"$nm":"add"},"has":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[],"doc":["does the collection contain the given callback"]},"$nm":"has"},"fire":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[],"doc":["fire all the backs with the given arguments"]},"$nm":"fire"},"disabled":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["is the callback list disabled"]},"$nm":"disabled"}},"$nm":"CallbacksAbs"},"jQueryExtendDeep":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"deep"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"target"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"objects"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryExtendDeep"},"jQueryMerge":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"first"},{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"second"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryMerge"},"jQueryAjax":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"url"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryAjaxSettingsBuilder"}]},"$mt":"prm","$def":"1","$nm":"settings"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjax"},"submitSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"submitSelector"},"jQuerySetData":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQuerySetData"},"dataTypeHtml":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeHtml"},"AnimateOptions":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"queue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"specialEasing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Tween"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Tween"},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Tween"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"step"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"progress"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"complete"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"done"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"fail"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"always"}],"$mt":"cls","$an":{"shared":[],"doc":["options for creating an jQuery animations"]},"$m":{"toNative":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[],"doc":["convert the options to a native object"]},"$nm":"toNative"}},"$at":{"progress":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"progress"},"queue":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]}]},"$mt":"attr","$an":{"shared":[]},"$nm":"queue"},"duration":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"attr","$an":{"shared":[]},"$nm":"duration"},"easing":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"easing"},"fail":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"fail"},"specialEasing":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"specialEasing"},"complete":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"complete"},"done":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"done"},"always":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"always"},"step":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Tween"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Tween"},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Tween"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"step"}},"$nm":"AnimateOptions"},"JSONPSettings":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JSONPSettingsAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["settings for JSONP request"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSONPSettings"},"JQueryAjaxSettings":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryAjaxSettingsAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["settings for a JQuery AJAX request"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQueryAjaxSettings"},"JQuery":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQuery"},"jqThis":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jqThis"},"focusSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"focusSelector"},"emptySelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"emptySelector"},"createJSONPSettings":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JSONPSettings"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"jsonp"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"jsonpCallback"}]],"$mt":"mthd","$an":{"shared":[],"doc":["create a new JSONP settings object"]},"$nm":"createJSONPSettings"},"inputSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"inputSelector"},"jQueryIsArray":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsArray"},"jQuerySetQueue":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"callbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQuerySetQueue"},"jQueryIsNumeric":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsNumeric"},"jQueryGrep":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"array"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"invert"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGrep"},"JQueryAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"nextAll":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"nextAll"},"setPropEntries":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPropEntries"},"animate":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"properties"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"animate"},"appendHTML":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendHTML"},"ready":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ready"},"undelegateEvents":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"undelegateEvents"},"hide":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hide"},"prevAll":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prevAll"},"wrapInnerCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapInnerCallback"},"setOffsetCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Coordinates"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Coordinates"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Coordinates"},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Coordinates"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setOffsetCallback"},"showOptions":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"showOptions"},"clone":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"withDataAndEvents"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"deepWithDataAndEvents"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"clone"},"removeProp":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"propertyName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeProp"},"prependHTML":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prependHTML"},"contents":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"contents"},"serialize":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"serialize"},"parent":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parent"},"outerWidth":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"includeMargin"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"outerWidth"},"prev":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prev"},"wrapInner":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"wrappingElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapInner"},"removeAttr":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeAttr"},"setOffset":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Coordinates"}]},"$mt":"prm","$def":"1","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setOffset"},"addBack":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addBack"},"mouseenter":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseenter"},"load":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"data"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"load"},"each":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"each"},"replaceAll":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceAll"},"toggleClassName":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"swit"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleClassName"},"getVal":{"$t":{"comp":"u","$ts":[{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getVal"},"setCss":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"property"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Number"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCss"},"before":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"}]}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"before"},"next":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"next"},"fadeOut":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeOut"},"setCssJson":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"property"},{"$t":{"$md":"com.openswimsoftware.ceylon.js.json","$pk":"com.openswimsoftware.ceylon.js.json","$nm":"JSJSON"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCssJson"},"ajaxError":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxError"},"isSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isSelector"},"getAttr":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getAttr"},"mousemove":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mousemove"},"prependTo":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prependTo"},"map":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"com.openswimsoftware.ceylon.js.dom","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"$md":"com.openswimsoftware.ceylon.js.dom","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"map"},"getHtml":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getHtml"},"outerHeight":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"includeMargin"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"outerHeight"},"fadeTo":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"duration"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"prm","$nm":"opacity"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeTo"},"ajaxStart":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxStart"},"stopName":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"queue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"clearQueue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"jumpToEnd"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"stopName"},"closestjQuery":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$mt":"prm","$nm":"jq"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"closestjQuery"},"slice":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"start"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slice"},"ajaxComplete":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxComplete"},"eq":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"eq"},"focusout":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"focusout"},"keyup":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"keyup"},"change":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"change"},"setVal":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setVal"},"has":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"has"},"after":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"after"},"removeClassCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeClassCallback"},"slideUp":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideUp"},"fadeIn":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeIn"},"closest":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"closest"},"setValCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setValCallback"},"getProp":{"$t":{"comp":"u","$ts":[{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getProp"},"append":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"}]}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"append"},"index":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"index"},"mousedown":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mousedown"},"get":{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"get"},"submit":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"submit"},"select":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"select"},"keydown":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"keydown"},"toggleOptions":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleOptions"},"ajaxSend":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxSend"},"finish":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"queue"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"finish"},"dblclick":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dblclick"},"afterJQuery":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"afterJQuery"},"pushStack":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"com.openswimsoftware.ceylon.js.dom","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"elements"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"name"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"arguments"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"pushStack"},"bindEvents":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bindEvents"},"mouseup":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseup"},"setWidthCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setWidthCallback"},"wrapAll":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"wrappingElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapAll"},"setQueue":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"newQueue"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setQueue"},"children":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"children"},"closestElement":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"closestElement"},"mouseleave":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseleave"},"dequeue":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dequeue"},"setScrollTop":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setScrollTop"},"getHeight":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getHeight"},"animateOptions":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"properties"},{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"animateOptions"},"setCssCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"property"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"val"}]],"$mt":"prm","$pt":"f","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"setCssCallback"},"prepend":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"}]}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prepend"},"promise":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"type"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$def":"1","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"promise"},"setAttr":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttr"},"siblings":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"siblings"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"siblings"},"removeClass":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeClass"},"off":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"events"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"off"},"bind":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"preventBubble"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bind"},"toggleShowOrHide":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"showOrHide"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleShowOrHide"},"addElements":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"com.openswimsoftware.ceylon.js.dom","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"prm","seq":"1","$nm":"elements","$min1":"1"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addElements"},"clearQueue":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"clearQueue"},"toggleClassCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"swit"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleClassCallback"},"setPropCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"propertyName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPropCallback"},"slideToggle":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideToggle"},"empty":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"empty"},"setAttrEntries":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttrEntries"},"setProp":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"propertyName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setProp"},"on":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"events"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"on"},"focus":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"focus"},"focusin":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"focusin"},"setDataEntries":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDataEntries"},"resizeTrigger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"resizeTrigger"},"setHtml":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"html"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHtml"},"hoverSingle":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handlerInOut"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hoverSingle"},"removeData":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"names"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeData"},"not":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"not"},"innerWidth":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"innerWidth"},"delegateEvents":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"delegateEvents"},"delay":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"duration"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"delay"},"afterElements":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"com.openswimsoftware.ceylon.js.dom","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"afterElements"},"isCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isCallback"},"addClass":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addClass"},"position":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Coordinates"},"$mt":"mthd","$an":{"shared":[]},"$nm":"position"},"remove":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"remove"},"click":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"click"},"nextUntil":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"nextUntil"},"delegate":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"delegate"},"appendCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendCallback"},"setAttrCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttrCallback"},"length":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"slideUpOptions":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideUpOptions"},"end":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"end"},"serializeArray":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[]},"$nm":"serializeArray"},"trigger":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryEvent"}]},"$mt":"prm","$nm":"event"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"extraParameters"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"trigger"},"toArray":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toArray"},"insertBefore":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertBefore"},"mouseout":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseout"},"slideToggleOptions":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideToggleOptions"},"filterCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"filterCallback"},"innerHeight":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"innerHeight"},"ajaxStop":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxStop"},"setTextCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTextCallback"},"prevUntil":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prevUntil"},"mouseover":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseover"},"setHeightCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHeightCallback"},"slideDownOptions":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideDownOptions"},"unwrap":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"unwrap"},"last":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"last"},"show":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"show"},"setText":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"textString"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setText"},"jquery":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jquery"},"toggleClass":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"swit"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleClass"},"resize":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"resize"},"fadeToggleOptions":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeToggleOptions"},"getScrollLeft":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getScrollLeft"},"getWidth":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getWidth"},"fadeOutOptions":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeOutOptions"},"ajaxSuccess":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxSuccess"},"getQueue":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns an array of functions"]},"$nm":"getQueue"},"replaceWithCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.language","$tp":[{"$md":"com.openswimsoftware.ceylon.js.dom","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceWithCallback"},"wrap":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"wrappingElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrap"},"detach":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"detach"},"wrapCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapCallback"},"scroll":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"scroll"},"unbind":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryEvent"}]},"$mt":"prm","$nm":"eventType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"unbind"},"fadeToggle":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeToggle"},"getData":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"keypress":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"keypress"},"setHeight":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHeight"},"bindCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"eventData"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bindCallback"},"replaceWith":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"newContent"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceWith"},"filter":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"filter"},"undelegateCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"undelegateCallback"},"stop":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"clearQueue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"jumpToEnd"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"stop"},"beforeCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"beforeCallback"},"parents":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parents"},"slideDown":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideDown"},"unbindCallaback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"eventType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"unbindCallaback"},"getCss":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"prm","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getCss"},"one":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"events"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"one"},"setScrollLeft":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setScrollLeft"},"blur":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"blur"},"add":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"append"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"add"},"getText":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getText"},"toggle":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggle"},"parentsUntil":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parentsUntil"},"getScrollTop":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getScrollTop"},"die":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"die"},"setWidth":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"width"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setWidth"},"setHtmlCallback":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHtmlCallback"},"undelegate":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"namespace"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"undelegate"},"find":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"find"},"error":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"error"},"appendTo":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendTo"},"insertAfter":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertAfter"},"hideOptions":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hideOptions"},"hover":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handlerIn"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handlerOut"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hover"},"fadeInOptions":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeInOptions"},"setData":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"},"hasClass":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasClass"},"addSelector":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addSelector"},"beforeHTML":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"beforeHTML"},"offsetParent":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"offsetParent"},"addClassCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"currentClass"}]],"$mt":"prm","$pt":"f","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"currentClass"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"addClassCallback"},"getOffset":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Coordinates"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getOffset"},"setQueueCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"next"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setQueueCallback"},"first":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"first"},"prependCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prependCallback"}},"$nm":"JQueryAbs"},"textSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"textSelector"},"jQueryProxyName":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSFunction"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"additionalArguments"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryProxyName"},"evenSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"evenSelector"},"jQueryPost":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"dataType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryPost"},"jQueryGetQueue":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns JSFunctions[]"]},"$nm":"jQueryGetQueue"},"jQueryEach":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"collection"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryEach"},"jQueryDeferred":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"beforeStart"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryDeferred"},"parentSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"parentSelector"},"JQueryAjaxSettingsAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getXhr":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the underlying XHR function"]},"$nm":"getXhr"},"setCache":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"cache"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets if the reqest should be cached by the browser"]},"$nm":"setCache"},"setContext":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the context object in which the request is being made"]},"$nm":"setContext"},"getContents":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"RegExp"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[],"doc":["gets a set of content types paired with regular expression pairs that determine how jQuery will parse the response"]},"$nm":"getContents"},"getJsonp":{"$t":{"comp":"u","$ts":[{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JSONPSettings"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the request JSONP settings"]},"$nm":"getJsonp"},"setDataFilter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"datafilter"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the data fiter"]},"$nm":"setDataFilter"},"getContext":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the context object in which the request is being made"]},"$nm":"getContext"},"setIsLocal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"local"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets if the request is being made agains the local filesystem"]},"$nm":"setIsLocal"},"setContentType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"contentType"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the content type of the data being sent in the request"]},"$nm":"setContentType"},"getProcessData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["returns if the data will be processed before being sent to the server"]},"$nm":"getProcessData"},"setAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"async"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets if the AJAX request is exectuted asynchronously"]},"$nm":"setAsync"},"setError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"datafilter"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets an array of error handlers Anything(JQXHR, String?, String?)"]},"$nm":"setError"},"getComplete":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns array of handers Anything(JQXHR, String) for when the request is complete"]},"$nm":"getComplete"},"getDataType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the data type"]},"$nm":"getDataType"},"setHeaders":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"headers"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the request headers"]},"$nm":"setHeaders"},"setScriptCharset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"scriptCharset"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the script charset (only if getting a script or making a JSONP request)"]},"$nm":"setScriptCharset"},"setContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"RegExp"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"contents"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets a set of content types paired with regular expression pairs that determine how jQuery will parse the response"]},"$nm":"setContents"},"setCrossDomain":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"crossDomain"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets if the request is cross domain"]},"$nm":"setCrossDomain"},"setType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"type"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the request type usually GET or POST"]},"$nm":"setType"},"getAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["returns if the AJAX request is exectuted asynchronously"]},"$nm":"getAsync"},"setStatusCode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"statusCodes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets a set of callbacks JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code"]},"$nm":"setStatusCode"},"getPassword":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the request password"]},"$nm":"getPassword"},"getIfModified":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["returns if the request should only be successful if the response if diffrent then the last time the request was made"]},"$nm":"getIfModified"},"setDataType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dataType"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the data type"]},"$nm":"setDataType"},"getJsonpCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the JSONP callback String|String()?"]},"$nm":"getJsonpCallback"},"setMimeType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"mimeType"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the request result mime type"]},"$nm":"setMimeType"},"setXhrFields":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"xhrFields"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the base XHR settings"]},"$nm":"setXhrFields"},"getData":{"$t":{"comp":"u","$ts":[{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"}]}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the data to be sent to the server"]},"$nm":"getData"},"getBeforeSend":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Boolean(JQXHR, JQueryAjaxSettings)? which is a handler called before the request is sent"]},"$nm":"getBeforeSend"},"setBeforeSend":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"beforeSend"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns set a handler Boolean(JQXHR, JQueryAjaxSettings) before the request is sent"]},"$nm":"setBeforeSend"},"getTraditional":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["returns if the request will use the traditional style of param serialization"]},"$nm":"getTraditional"},"getUsername":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the request username"]},"$nm":"getUsername"},"getXhrFields":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the base XHR settings"]},"$nm":"getXhrFields"},"getStatusCode":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a object JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code"]},"$nm":"getStatusCode"},"getMimeType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the request result mime type"]},"$nm":"getMimeType"},"getContentType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the content type of the data being sent in the request"]},"$nm":"getContentType"},"getDataFilter":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns data filter Anything(String, String)?"]},"$nm":"getDataFilter"},"setUsername":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"username"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the request username"]},"$nm":"setUsername"},"getSuccess":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns array of handers called Anything(Anything, String, JQXHR) upon a successful request"]},"$nm":"getSuccess"},"getType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns if the request will use the traditional style of param serialization"]},"$nm":"getType"},"getError":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns an array of error handlers Anything(JQXHR, String?, String?)"]},"$nm":"getError"},"setUrl":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the request URL"]},"$nm":"setUrl"},"getHeaders":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the request headers"]},"$nm":"getHeaders"},"setIfModified":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"modified"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets if the request should only be successful if the response if diffrent then the last time the request was made"]},"$nm":"setIfModified"},"getAccepts":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the data types the request accepts"]},"$nm":"getAccepts"},"setComplete":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets array of handers Anything(JQXHR, String) for when the request is complete"]},"$nm":"setComplete"},"setPassword":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"password"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the request password"]},"$nm":"setPassword"},"getCache":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["returns if the reqest will be cached by the browser"]},"$nm":"getCache"},"setConverters":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"converters"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets data type converters"]},"$nm":"setConverters"},"setSuccess":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"success"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets array of handers called Anything(Anything, String, JQXHR) upon a successful request"]},"$nm":"setSuccess"},"getCrossDomain":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["is the request cross domain"]},"$nm":"getCrossDomain"},"getIsLocal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["returns if the request is being made agains the local filesystem"]},"$nm":"getIsLocal"},"setXhr":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"xhr"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the underlying XHR function"]},"$nm":"setXhr"},"getConverters":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[],"doc":["returns data type converters"]},"$nm":"getConverters"},"setJsonpCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the JSONP callback String|String()?"]},"$nm":"setJsonpCallback"},"setData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the data to be sent to the server"]},"$nm":"setData"},"getScriptCharset":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the script charset (only if getting a script or making a JSONP request)"]},"$nm":"getScriptCharset"},"setGlobal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"global"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets if global ajax events will be triggered for this class"]},"$nm":"setGlobal"},"getUrl":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the request URL"]},"$nm":"getUrl"},"setTraditional":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"traditional"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets if the request will use the traditional style of param serialization"]},"$nm":"setTraditional"},"getTimeout":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the timeout for the request in milliseconds"]},"$nm":"getTimeout"},"setAccepts":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"accepts"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the data types the request accepts"]},"$nm":"setAccepts"},"setTimeout":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"timeout"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the timeout for the request in milliseconds"]},"$nm":"setTimeout"},"getGlobal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["returns if global ajax events will be triggered for this class"]},"$nm":"getGlobal"},"setJsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JSONPSettings"},"$mt":"prm","$nm":"jsonp"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the request JSONP settings"]},"$nm":"setJsonp"},"setProcessData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"processData"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets if the data will be processed before being sent to the server"]},"$nm":"setProcessData"}},"$nm":"JQueryAjaxSettingsAbs"},"dataTypeJson":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeJson"},"rootSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"rootSelector"},"jQueryGetData":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGetData"},"jQueryGetJSON":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGetJSON"},"JQueryEvent":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryEventAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a jQuery Event"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQueryEvent"},"Promise":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"PromiseAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a subset of Deferred which is used for managing a set of callbacks"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Promise"},"radioSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"radioSelector"},"jQueryIsPlainObject":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsPlainObject"},"disabledSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"disabledSelector"},"selectedSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"selectedSelector"},"jQueryWhen":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Deferred"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"deferreds"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryWhen"},"jq":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"}]}]},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jq"},"jQueryIsFunction":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsFunction"},"jQueryNoConflict":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"removeAll"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryNoConflict"},"JQueryAjaxSettingsBuilder":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"async"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"cache"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"contentType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"context"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"crossDomain"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"data"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"DataType"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"dataType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"global"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"ifModified"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"isLocal"},{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JSONPOptions"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonp"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonpCallback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"mimeType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"password"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"processData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"scriptCharset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"timeout"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"traditional"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"type"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"url"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"username"}],"$mt":"cls","$an":{"shared":[],"doc":["settings for a JQuery AJAX request"]},"$m":{"toNative":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryAjaxSettings"},"$mt":"mthd","$an":{"shared":[],"doc":["convert to native AJAX settings"]},"$nm":"toNative"}},"$at":{"headers":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["the request headers"],"variable":[]},"$nm":"headers"},"data":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"data"},"xhrFields":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["the base XHR settings"],"variable":[]},"$nm":"xhrFields"},"contentType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"contentType"},"type":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"type"},"password":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"password"},"statusCode":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["sets a set of callbacks JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code"],"variable":[]},"$nm":"statusCode"},"username":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"username"},"complete":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["array of handers Anything(JQXHR, String) for when the request is complete"],"variable":[]},"$nm":"complete"},"dataFilter":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["data filter Anything(String, String)?"],"variable":[]},"$nm":"dataFilter"},"processData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"processData"},"crossDomain":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"crossDomain"},"accepts":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["the data types the request accepts"],"variable":[]},"$nm":"accepts"},"mimeType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"mimeType"},"jsonpCallback":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]}]},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonpCallback"},"error":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["array of error handlers Anything(JQXHR, String?, String?)"],"variable":[]},"$nm":"error"},"cache":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"cache"},"contents":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"RegExp"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["a set of content types paired with regular expression pairs that determine how jQuery will parse the response"],"variable":[]},"$nm":"contents"},"global":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"global"},"scriptCharset":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"scriptCharset"},"traditional":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"traditional"},"converters":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["data type converters"],"variable":[]},"$nm":"converters"},"async":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"async"},"url":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"url"},"ifModified":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"ifModified"},"dataType":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"DataType"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[]},"$nm":"dataType"},"jsonp":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JSONPOptions"},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonp"},"context":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"context"},"beforeSend":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["Boolean(JQXHR, JQueryAjaxSettings)? which is a handler called before the request is sent"],"variable":[]},"$nm":"beforeSend"},"xhr":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["the underlying XHR function"],"variable":[]},"$nm":"xhr"},"isLocal":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"isLocal"},"success":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["array of handers called Anything(Anything, String, JQXHR) upon a successful request"],"variable":[]},"$nm":"success"},"timeout":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"timeout"}},"$nm":"JQueryAjaxSettingsBuilder"},"DeferredAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"progress":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"progressCallbacks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["add handlers to be called when the deferred objects progress is updated"]},"$nm":"progress"},"thenFilter":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"doneFilter"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"failFilter"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"progressFilter"}]],"$mt":"mthd","$an":{"shared":[],"doc":["add handlers to be called when the deferred object is either resolved, rejected or are still in progress"]},"$nm":"thenFilter"},"resolve":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[],"doc":["resolve the deferred object and call the done callbacks on deferred with the given args"]},"$nm":"resolve"},"rejectWith":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[],"doc":["call the fail callbacks on deferred with the given args and the given context"]},"$nm":"rejectWith"},"reject":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[],"doc":["call the fail callbacks on deferred with the given args"]},"$nm":"reject"},"notifyWith":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[],"doc":["call the progress callbacks on deferred with the given args with the given context"]},"$nm":"notifyWith"},"fail":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"failCallbacks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["add handlers to be called when the deferred object is rejected"]},"$nm":"fail"},"resolveWith":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[],"doc":["resolve the deferred object and call the done callbacks on deferred with the given args and the given context"]},"$nm":"resolveWith"},"notify":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[],"doc":["call the progress callbacks on deferred with the given args"]},"$nm":"notify"},"done":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"doneCallbacks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["add handlers to be called when the deferred object is resolved"]},"$nm":"done"},"state":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"DeferredState"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the current state of the deferred object"]},"$nm":"state"},"promise":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[],"doc":["convert the deferred to a promise on the given target"]},"$nm":"promise"},"always":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"alwaysCallbacks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["add handlers to be called when the deferred object is either resolved or rejected"]},"$nm":"always"}},"$nm":"DeferredAbs"},"animatedSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"animatedSelector"},"Coordinates":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"CoordinatesAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["coordinates on the page"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Coordinates"},"$pkg-shared":"1","jQueryFxOff":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryFxOff"},"jQueryDequeue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryDequeue"},"jQueryProxy":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSFunction"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"func"},{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"additionalArguments"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryProxy"},"checkedSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"checkedSelector"},"firstOfTypeSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"firstOfTypeSelector"},"jQueryTrim":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"prm","$nm":"str"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryTrim"},"resetSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"resetSelector"},"jQueryNow":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryNow"},"oddSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"oddSelector"},"Deferred":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"DeferredAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["used for callback queues"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Deferred"},"hiddenSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"hiddenSelector"},"jQueryGlobalEval":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"code"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGlobalEval"},"jQueryHoldReady":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"hold"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryHoldReady"},"JSONPSettingsAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setIsJsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"jsonp"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set that the request is JSONP"]},"$nm":"setIsJsonp"},"getCallback":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns JSONP callback"]},"$nm":"getCallback"},"getIsJsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["is this the request JSONP"]},"$nm":"getIsJsonp"},"setCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets JSONP callback"]},"$nm":"setCallback"}},"$nm":"JSONPSettingsAbs"},"jQueryExtend":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"target"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"objects"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryExtend"},"jQueryMapObject":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryMapObject"},"jQueryCallbacks":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"flags"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryCallbacks"},"JQXHRAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getAllResponseHeaders":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns all of the request headers as a string"]},"$nm":"getAllResponseHeaders"},"status":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["the request HTTP status code"]},"$nm":"status"},"responseXML":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Document"}]},"$mt":"mthd","$an":{"shared":[],"doc":["the request response as a XML Document"]},"$nm":"responseXML"},"done":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"done"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Anything(Anything, String, JQXHR) handler when the request is done"]},"$nm":"done"},"doThen":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"done"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"fail"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Anything(Anything(Anything, String, JQXHR), Anything(JQXHR, String?, String?) handler when the request is done or fails"]},"$nm":"doThen"},"readyState":{"$t":{"$md":"com.openswimsoftware.ceylon.js.xmlhttprequest","$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"mthd","$an":{"shared":[],"doc":["the current ready state of the request"]},"$nm":"readyState"},"statusText":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["the request HTTP status text code"]},"$nm":"statusText"},"responseText":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["the request response as a string"]},"$nm":"responseText"},"overrideMimeType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"mime"}]],"$mt":"mthd","$an":{"shared":[],"doc":["override the request mime type"]},"$nm":"overrideMimeType"},"always":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"always"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Anything(JSObject|JQXHR, String, JXHR|Error) handler when the request completes"]},"$nm":"always"},"statusCode":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["the request status code"]},"$nm":"statusCode"},"fail":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"fail"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Anything(JQXHR, String?, String?) handler when the request fails"]},"$nm":"fail"},"getResponseHeader":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a specific response header"]},"$nm":"getResponseHeader"},"setRequestHeader":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the value of a request header"]},"$nm":"setRequestHeader"},"abort":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["abort the request"]},"$nm":"abort"}},"$nm":"JQXHRAbs"},"jQueryAjaxSetup":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQueryAjaxSettingsBuilder"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjaxSetup"},"createCoordinates":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Coordinates"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]}]},"$mt":"prm","$nm":"top"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]}]},"$mt":"prm","$nm":"left"}]],"$mt":"mthd","$an":{"shared":[],"doc":["create a new coordinate"]},"$nm":"createCoordinates"},"buttonSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"buttonSelector"},"jQueryContains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"container"},{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"contained"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryContains"},"jQueryMapArray":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"array"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryMapArray"},"jQueryNoop":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryNoop"},"allSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"allSelector"},"jQueryAjaxTransport":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dataType"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjaxTransport"},"JSONPOptions":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonp"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonpCallback"}],"$mt":"cls","$an":{"shared":[],"doc":["settings for JSONP in request builder"]},"$at":{"jsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonp"},"jsonpCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonpCallback"}},"$nm":"JSONPOptions"},"deferredStateResolved":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"DeferredState"},"$mt":"obj","$an":{"shared":[]},"$nm":"deferredStateResolved"},"deferredStatePending":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"DeferredState"},"$mt":"obj","$an":{"shared":[]},"$nm":"deferredStatePending"},"jQueryFxInterval":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryFxInterval"},"deferredStateRejected":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"DeferredState"},"$mt":"obj","$an":{"shared":[]},"$nm":"deferredStateRejected"},"checkboxSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"checkboxSelector"},"jQueryIsXMLDoc":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsXMLDoc"},"jQueryParam":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$nm":"obj"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"traditional"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParam"},"jQueryIsWindow":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsWindow"},"dataTypeText":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeText"},"firstSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"firstSelector"},"jQueryParseJSON":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"json"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParseJSON"},"jQueryGet":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"dataType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGet"},"jQueryCssHooks":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryCssHooks"},"jQueryRemoveData":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryRemoveData"},"jQueryParseXML":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParseXML"},"jQueryFnExtend":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryFnExtend"},"CoordinatesAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setTop":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$mt":"prm","$nm":"top"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the top coordinate"]},"$nm":"setTop"},"getLeft":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the left coordinate"]},"$nm":"getLeft"},"setLeft":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$mt":"prm","$nm":"left"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the left coordinate"]},"$nm":"setLeft"},"getTop":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the top coordinate"]},"$nm":"getTop"}},"$nm":"CoordinatesAbs"},"onlyOfTypeSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"onlyOfTypeSelector"},"DeferredState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"deferredStatePending"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"deferredStateResolved"},{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"deferredStateRejected"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["the current state of the deferred object"]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DeferredState"},"dataTypeJsonp":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeJsonp"},"PromiseAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"thenFilter":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"doneFilter"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"failFilter"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"progressFilter"}]],"$mt":"mthd","$an":{"shared":[],"doc":["add handlers to be called when the deferred object is either resolved, rejected or are still in progress"]},"$nm":"thenFilter"},"fail":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"failCallbacks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["add handlers to be called when the deferred object is rejected"]},"$nm":"fail"},"done":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"doneCallbacks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["add handlers to be called when the deferred object is resolved"]},"$nm":"done"},"always":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"alwaysCallbacks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["add handlers to be called when the deferred object is either resolved or rejected"]},"$nm":"always"}},"$nm":"PromiseAbs"},"Tween":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"TweenAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a jQuery animation tween"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Tween"},"imageSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"imageSelector"},"jqElems":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"com.openswimsoftware.ceylon.js.dom","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"prm","seq":"1","$nm":"elems","$min1":"1"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jqElems"},"firstChildSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"firstChildSelector"},"jQueryIsEmptyObject":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsEmptyObject"},"dataTypeScript":{"super":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeScript"},"jQueryGetScript":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGetScript"},"headerSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"headerSelector"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl1.$addmod$($$$cl1,'ceylon.language/1.0.0');
var $$$cocjl339=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
$$$cl1.$addmod$($$$cocjl339,'com.openswimsoftware.ceylon.js.language/1.8.0');
function AnimateOptions(duration, easing, queue, specialEasing, step, progress, complete, done, fail, always, $$animateOptions){
    $init$AnimateOptions();
    if ($$animateOptions===undefined)$$animateOptions=new AnimateOptions.$$;
    if(duration===undefined){duration=null;}
    $$animateOptions.duration_=duration;
    if(easing===undefined){easing=null;}
    $$animateOptions.easing_=easing;
    if(queue===undefined){queue=null;}
    $$animateOptions.queue_=queue;
    if(specialEasing===undefined){specialEasing=null;}
    $$animateOptions.specialEasing_=specialEasing;
    if(step===undefined){step=null;}
    $$animateOptions.step_=step;
    if(progress===undefined){progress=null;}
    $$animateOptions.progress_=progress;
    if(complete===undefined){complete=null;}
    $$animateOptions.complete_=complete;
    if(done===undefined){done=null;}
    $$animateOptions.done_=done;
    if(fail===undefined){fail=null;}
    $$animateOptions.fail_=fail;
    if(always===undefined){always=null;}
    $$animateOptions.always_=always;
    return $$animateOptions;
}
AnimateOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'queue',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Boolean},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'specialEasing',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'step',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:Tween}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'progress',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:Promise}},{$t:{t:$$$cl1.Integer}},{$t:{t:$$$cl1.Integer}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'done',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:Promise}},{$t:{t:$$$cl1.Boolean}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'fail',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:Promise}},{$t:{t:$$$cl1.Boolean}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'always',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:Promise}},{$t:{t:$$$cl1.Boolean}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[$$$cl1.shared()];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("options for creating an jQuery animations",41)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions']};};
exports.AnimateOptions=AnimateOptions;
function $init$AnimateOptions(){
    if (AnimateOptions.$$===undefined){
        $$$cl1.initTypeProto(AnimateOptions,'com.openswimsoftware.ceylon.js.jquery::AnimateOptions',$$$cl1.Basic);
        (function($$animateOptions){
            $$animateOptions.toNative=function toNative(){
                var $$animateOptions=this;
                var native$1075;
                /*Begin dynamic block*/
                native$1075=(typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'15:12-15:17','animateoptions.ceylon'):Object)();var d$1076;
                if((d$1076=$$animateOptions.duration)!==null){
                    native$1075.duration=d$1076;
                }var e$1077;
                if((e$1077=$$animateOptions.easing)!==null){
                    native$1075.easing=e$1077.valueOf();
                }var q$1078;
                if((q$1078=$$animateOptions.queue)!==null){
                    native$1075.queue=(typeof e==='undefined'||e===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: e")),'23:19-23:19','animateoptions.ceylon'):e);
                }var sE$1079;
                if((sE$1079=$$animateOptions.specialEasing)!==null){
                    var specialEasingNative$1080=$$$cocjl339.createJSObject();
                    $prop$getSpecialEasingNative$1080={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSObject},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$m','toNative','$at','specialEasingNative']};}};
                    $prop$getSpecialEasingNative$1080.get=function(){return specialEasingNative$1080};
                    var it$1081 = sE$1079.iterator();
                    var item$1082;while ((item$1082=it$1081.next())!==$$$cl1.getFinished()){
                        var key$1083=item$1082.key;
                        var val$1084=item$1082.item;
                        $$$cocjl339.objectDefineProperty(specialEasingNative$1080,(tmpvar$1085=$$$cocjl339.createJSString(key$1083),$$$cl1.isOfType(tmpvar$1085,{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]})?tmpvar$1085:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'29:48-29:66','animateoptions.ceylon')),$$$cocjl339.DataDescriptor(true,false,true,true,val$1084));
                    }
                    native$1075.specialEasing=specialEasingNative$1080;
                }var s$1086;
                if((s$1086=$$animateOptions.step)!==null){
                    native$1075.step=$$$cl1.$JsCallable(s$1086/*TODO: callable targs 6*/);
                }var p$1087;
                if((p$1087=$$animateOptions.progress)!==null){
                    native$1075.progress=$$$cl1.$JsCallable(p$1087/*TODO: callable targs 6*/);
                }var c$1088;
                if((c$1088=$$animateOptions.complete)!==null){
                    native$1075.complete=$$$cl1.$JsCallable(c$1088/*TODO: callable targs 6*/);
                }var d$1089;
                if((d$1089=$$animateOptions.done)!==null){
                    native$1075.done=$$$cl1.$JsCallable(d$1089/*TODO: callable targs 6*/);
                }var f$1090;
                if((f$1090=$$animateOptions.fail)!==null){
                    native$1075.fail=$$$cl1.$JsCallable(f$1090/*TODO: callable targs 6*/);
                }var a$1091;
                if((a$1091=$$animateOptions.always)!==null){
                    native$1075.always=$$$cl1.$JsCallable(a$1091/*TODO: callable targs 6*/);
                }return $$$cocjl339.JSObject(native$1075);
                /*End dynamic block*/
            };$$animateOptions.toNative.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSObject},$ps:[],$cont:AnimateOptions,$an:function(){return[$$$cl1.doc($$$cl1.String("convert the options to a native object",38)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$m','toNative']};};
            $$$cl1.defineAttr($$animateOptions,'duration',function(){return this.duration_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','duration']};});
            $$$cl1.defineAttr($$animateOptions,'easing',function(){return this.easing_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','easing']};});
            $$$cl1.defineAttr($$animateOptions,'queue',function(){return this.queue_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Boolean},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','queue']};});
            $$$cl1.defineAttr($$animateOptions,'specialEasing',function(){return this.specialEasing_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','specialEasing']};});
            $$$cl1.defineAttr($$animateOptions,'step',function(){return this.step_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:Tween}}]},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','step']};});
            $$$cl1.defineAttr($$animateOptions,'progress',function(){return this.progress_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:Promise}},{$t:{t:$$$cl1.Integer}},{$t:{t:$$$cl1.Integer}}]},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','progress']};});
            $$$cl1.defineAttr($$animateOptions,'complete',function(){return this.complete_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','complete']};});
            $$$cl1.defineAttr($$animateOptions,'done',function(){return this.done_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:Promise}},{$t:{t:$$$cl1.Boolean}}]},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','done']};});
            $$$cl1.defineAttr($$animateOptions,'fail',function(){return this.fail_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:Promise}},{$t:{t:$$$cl1.Boolean}}]},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','fail']};});
            $$$cl1.defineAttr($$animateOptions,'always',function(){return this.always_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:Promise}},{$t:{t:$$$cl1.Boolean}}]},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','always']};});
        })(AnimateOptions.$$.prototype);
    }
    return AnimateOptions;
}
exports.$init$AnimateOptions=$init$AnimateOptions;
$init$AnimateOptions();
function CallbacksAbs($$callbacksAbs){
    $init$CallbacksAbs();
    if ($$callbacksAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$callbacksAbs);
    return $$callbacksAbs;
}
CallbacksAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs']};};
exports.CallbacksAbs=CallbacksAbs;
function $init$CallbacksAbs(){
    if (CallbacksAbs.$$===undefined){
        $$$cl1.initTypeProto(CallbacksAbs,'com.openswimsoftware.ceylon.js.jquery::CallbacksAbs',$$$cocjl339.JSObjectAbs);
        (function($$callbacksAbs){
            $$callbacksAbs.add=function add(callbacks$1092){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                return Callbacks($$callbacksAbs.$native.add(callbacks$1092));
                /*End dynamic block*/
            };$$callbacksAbs.add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'callbacks',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("add a callback or collection of callbacks",41)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','add']};};
            $$callbacksAbs.disable=function disable(){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                return Callbacks($$callbacksAbs.$native.disable());
                /*End dynamic block*/
            };$$callbacksAbs.disable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("disable the callback list from doing anything",45)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','disable']};};
            $$callbacksAbs.disabled=function disabled(){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                if($$callbacksAbs.$native.disabled()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$callbacksAbs.disabled.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("is the callback list disabled",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','disabled']};};
            $$callbacksAbs.empty=function empty(){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                return Callbacks($$callbacksAbs.$native.empty());
                /*End dynamic block*/
            };$$callbacksAbs.empty.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("remove all the callbacks from the list",38)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','empty']};};
            $$callbacksAbs.fire=function fire(args$1093){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                return Callbacks($$callbacksAbs.$native.fire(args$1093));
                /*End dynamic block*/
            };$$callbacksAbs.fire.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'args',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("fire all the backs with the given arguments",43)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','fire']};};
            $$callbacksAbs.fired=function fired(){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                if($$callbacksAbs.$native.fired()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$callbacksAbs.fired.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("have the callbacks been fired at least once",43)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','fired']};};
            $$callbacksAbs.fireWith=function fireWith(context$1094,args$1095){
                var $$callbacksAbs=this;
                if(args$1095===undefined){args$1095=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return Callbacks($$callbacksAbs.$native.fireWith(context$1094,args$1095));
                /*End dynamic block*/
            };$$callbacksAbs.fireWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("fire all the backs with the given arguments and the given context",65)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','fireWith']};};
            $$callbacksAbs.has=function has(callback$1096){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                if($$callbacksAbs.$native.has(callback$1096)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$callbacksAbs.has.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("does the collection contain the given callback",46)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','has']};};
            $$callbacksAbs.lock=function lock(){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                return Callbacks($$callbacksAbs.$native.lock());
                /*End dynamic block*/
            };$$callbacksAbs.lock.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("lock the callback list in its current state",43)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','lock']};};
            $$callbacksAbs.locked=function locked(){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                if($$callbacksAbs.$native.locked()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$callbacksAbs.locked.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("is the callback list locked",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','locked']};};
            $$callbacksAbs.remove=function remove(callbacks$1097){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                return Callbacks($$callbacksAbs.$native.remove(callbacks$1097));
                /*End dynamic block*/
            };$$callbacksAbs.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'callbacks',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("remove a callback or collection of callbacks",44)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','remove']};};
        })(CallbacksAbs.$$.prototype);
    }
    return CallbacksAbs;
}
exports.$init$CallbacksAbs=$init$CallbacksAbs;
$init$CallbacksAbs();
function Callbacks(n$1098, $$callbacks){
    $init$Callbacks();
    if ($$callbacks===undefined)$$callbacks=new Callbacks.$$;
    $$callbacks.n$1098_=n$1098;
    CallbacksAbs($$callbacks);
    $$callbacks.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Callbacks,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','Callbacks','$at','native']};}};
    /*Begin dynamic block*/
    $$callbacks.$native=$$callbacks.n$1098;/*End dynamic block*/
    return $$callbacks;
}
Callbacks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CallbacksAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a collection of callbacks",25)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','Callbacks']};};
exports.Callbacks=Callbacks;
function $init$Callbacks(){
    if (Callbacks.$$===undefined){
        $$$cl1.initTypeProto(Callbacks,'com.openswimsoftware.ceylon.js.jquery::Callbacks',$init$CallbacksAbs());
        (function($$callbacks){
            $$$cl1.defineAttr($$callbacks,'n$1098',function(){return this.n$1098_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Callbacks,d:['com.openswimsoftware.ceylon.js.jquery','Callbacks','$at','n']};});
        })(Callbacks.$$.prototype);
    }
    return Callbacks;
}
exports.$init$Callbacks=$init$Callbacks;
$init$Callbacks();
function createCoordinates(top$1099,left$1100){
    /*Begin dynamic block*/
    var coor$1101=(typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'6:17-6:22','coordinates.ceylon'):Object)();
    $prop$getCoor$1101={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.jquery','createCoordinates','$at','coor']};}};
    $prop$getCoor$1101.get=function(){return coor$1101};
    var t$1102;
    if((t$1102=top$1099)!==null){
        coor$1101.top=t$1102;
    }var l$1103;
    if((l$1103=left$1100)!==null){
        coor$1101.left=l$1103;
    }return Coordinates(coor$1101);
    /*End dynamic block*/
}
exports.createCoordinates=createCoordinates;
createCoordinates.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Coordinates},$ps:[{$nm:'top',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Float}]}]},$an:function(){return[];}},{$nm:'left',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Float}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("create a new coordinate",23)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','createCoordinates']};};
function CoordinatesAbs($$coordinatesAbs){
    $init$CoordinatesAbs();
    if ($$coordinatesAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$coordinatesAbs);
    return $$coordinatesAbs;
}
CoordinatesAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','CoordinatesAbs']};};
exports.CoordinatesAbs=CoordinatesAbs;
function $init$CoordinatesAbs(){
    if (CoordinatesAbs.$$===undefined){
        $$$cl1.initTypeProto(CoordinatesAbs,'com.openswimsoftware.ceylon.js.jquery::CoordinatesAbs',$$$cocjl339.JSObjectAbs);
        (function($$coordinatesAbs){
            $$coordinatesAbs.getTop=function getTop(){
                var $$coordinatesAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$coordinatesAbs.$native.top);
                /*End dynamic block*/
            };$$coordinatesAbs.getTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:CoordinatesAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the top coordinate",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CoordinatesAbs','$m','getTop']};};
            $$coordinatesAbs.setTop=function setTop(top$1104){
                var $$coordinatesAbs=this;
                /*Begin dynamic block*/
                $$coordinatesAbs.$native.top=top$1104;
                /*End dynamic block*/
            };$$coordinatesAbs.setTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'top',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]},$an:function(){return[];}}],$cont:CoordinatesAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the top coordinate",22)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CoordinatesAbs','$m','setTop']};};
            $$coordinatesAbs.getLeft=function getLeft(){
                var $$coordinatesAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$coordinatesAbs.$native.left);
                /*End dynamic block*/
            };$$coordinatesAbs.getLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:CoordinatesAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the left coordinate",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CoordinatesAbs','$m','getLeft']};};
            $$coordinatesAbs.setLeft=function setLeft(left$1105){
                var $$coordinatesAbs=this;
                /*Begin dynamic block*/
                $$coordinatesAbs.$native.left=left$1105;
                /*End dynamic block*/
            };$$coordinatesAbs.setLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'left',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]},$an:function(){return[];}}],$cont:CoordinatesAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the left coordinate",23)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CoordinatesAbs','$m','setLeft']};};
        })(CoordinatesAbs.$$.prototype);
    }
    return CoordinatesAbs;
}
exports.$init$CoordinatesAbs=$init$CoordinatesAbs;
$init$CoordinatesAbs();
function Coordinates(n$1106, $$coordinates){
    $init$Coordinates();
    if ($$coordinates===undefined)$$coordinates=new Coordinates.$$;
    $$coordinates.n$1106_=n$1106;
    CoordinatesAbs($$coordinates);
    $$coordinates.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Coordinates,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','Coordinates','$at','native']};}};
    /*Begin dynamic block*/
    $$coordinates.$native=$$coordinates.n$1106;/*End dynamic block*/
    return $$coordinates;
}
Coordinates.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CoordinatesAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("coordinates on the page",23)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','Coordinates']};};
exports.Coordinates=Coordinates;
function $init$Coordinates(){
    if (Coordinates.$$===undefined){
        $$$cl1.initTypeProto(Coordinates,'com.openswimsoftware.ceylon.js.jquery::Coordinates',$init$CoordinatesAbs());
        (function($$coordinates){
            $$$cl1.defineAttr($$coordinates,'n$1106',function(){return this.n$1106_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Coordinates,d:['com.openswimsoftware.ceylon.js.jquery','Coordinates','$at','n']};});
        })(Coordinates.$$.prototype);
    }
    return Coordinates;
}
exports.$init$Coordinates=$init$Coordinates;
$init$Coordinates();
function DeferredState(name$1107, $$deferredState){
    $init$DeferredState();
    if ($$deferredState===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$deferredState.name$1107_=name$1107;
    return $$deferredState;
}
DeferredState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],of:[{t:deferredStatePending$1108},{t:deferredStateResolved$1109},{t:deferredStateRejected$1110}],$an:function(){return[$$$cl1.doc($$$cl1.String("the current state of the deferred object",40)),$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredState']};};
exports.DeferredState=DeferredState;
function $init$DeferredState(){
    if (DeferredState.$$===undefined){
        $$$cl1.initTypeProto(DeferredState,'com.openswimsoftware.ceylon.js.jquery::DeferredState',$$$cl1.Basic);
        (function($$deferredState){
            $$$cl1.defineAttr($$deferredState,'name$1107',function(){return this.name$1107_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DeferredState,d:['com.openswimsoftware.ceylon.js.jquery','DeferredState','$at','name']};});
        })(DeferredState.$$.prototype);
    }
    return DeferredState;
}
exports.$init$DeferredState=$init$DeferredState;
$init$DeferredState();
function deferredStatePending$1108(){
    var $$deferredStatePending=new deferredStatePending$1108.$$;
    DeferredState($$$cl1.String("pending",7),$$deferredStatePending);
    return $$deferredStatePending;
};deferredStatePending$1108.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DeferredState},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','deferredStatePending']};};
function $init$deferredStatePending$1108(){
    if (deferredStatePending$1108.$$===undefined){
        $$$cl1.initTypeProto(deferredStatePending$1108,'com.openswimsoftware.ceylon.js.jquery::deferredStatePending',$init$DeferredState());
    }
    return deferredStatePending$1108;
}
exports.$init$deferredStatePending$1108=$init$deferredStatePending$1108;
$init$deferredStatePending$1108();
var deferredStatePending$1111;
function getDeferredStatePending(){
    if (deferredStatePending$1111===undefined){deferredStatePending$1111=$init$deferredStatePending$1108()();deferredStatePending$1111.$$metamodel$$=getDeferredStatePending.$$metamodel$$;}
    return deferredStatePending$1111;
}
exports.getDeferredStatePending=getDeferredStatePending;
getDeferredStatePending.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:deferredStatePending$1108},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','deferredStatePending']};};
$prop$getDeferredStatePending={get:getDeferredStatePending,$$metamodel$$:getDeferredStatePending.$$metamodel$$};
exports.$prop$getDeferredStatePending=$prop$getDeferredStatePending;
function deferredStateResolved$1109(){
    var $$deferredStateResolved=new deferredStateResolved$1109.$$;
    DeferredState($$$cl1.String("resolved",8),$$deferredStateResolved);
    return $$deferredStateResolved;
};deferredStateResolved$1109.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DeferredState},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','deferredStateResolved']};};
function $init$deferredStateResolved$1109(){
    if (deferredStateResolved$1109.$$===undefined){
        $$$cl1.initTypeProto(deferredStateResolved$1109,'com.openswimsoftware.ceylon.js.jquery::deferredStateResolved',$init$DeferredState());
    }
    return deferredStateResolved$1109;
}
exports.$init$deferredStateResolved$1109=$init$deferredStateResolved$1109;
$init$deferredStateResolved$1109();
var deferredStateResolved$1112;
function getDeferredStateResolved(){
    if (deferredStateResolved$1112===undefined){deferredStateResolved$1112=$init$deferredStateResolved$1109()();deferredStateResolved$1112.$$metamodel$$=getDeferredStateResolved.$$metamodel$$;}
    return deferredStateResolved$1112;
}
exports.getDeferredStateResolved=getDeferredStateResolved;
getDeferredStateResolved.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:deferredStateResolved$1109},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','deferredStateResolved']};};
$prop$getDeferredStateResolved={get:getDeferredStateResolved,$$metamodel$$:getDeferredStateResolved.$$metamodel$$};
exports.$prop$getDeferredStateResolved=$prop$getDeferredStateResolved;
function deferredStateRejected$1110(){
    var $$deferredStateRejected=new deferredStateRejected$1110.$$;
    DeferredState($$$cl1.String("rejected",8),$$deferredStateRejected);
    return $$deferredStateRejected;
};deferredStateRejected$1110.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DeferredState},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','deferredStateRejected']};};
function $init$deferredStateRejected$1110(){
    if (deferredStateRejected$1110.$$===undefined){
        $$$cl1.initTypeProto(deferredStateRejected$1110,'com.openswimsoftware.ceylon.js.jquery::deferredStateRejected',$init$DeferredState());
    }
    return deferredStateRejected$1110;
}
exports.$init$deferredStateRejected$1110=$init$deferredStateRejected$1110;
$init$deferredStateRejected$1110();
var deferredStateRejected$1113;
function getDeferredStateRejected(){
    if (deferredStateRejected$1113===undefined){deferredStateRejected$1113=$init$deferredStateRejected$1110()();deferredStateRejected$1113.$$metamodel$$=getDeferredStateRejected.$$metamodel$$;}
    return deferredStateRejected$1113;
}
exports.getDeferredStateRejected=getDeferredStateRejected;
getDeferredStateRejected.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:deferredStateRejected$1110},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','deferredStateRejected']};};
$prop$getDeferredStateRejected={get:getDeferredStateRejected,$$metamodel$$:getDeferredStateRejected.$$metamodel$$};
exports.$prop$getDeferredStateRejected=$prop$getDeferredStateRejected;
function DeferredAbs($$deferredAbs){
    $init$DeferredAbs();
    if ($$deferredAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$deferredAbs);
    return $$deferredAbs;
}
DeferredAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs']};};
exports.DeferredAbs=DeferredAbs;
function $init$DeferredAbs(){
    if (DeferredAbs.$$===undefined){
        $$$cl1.initTypeProto(DeferredAbs,'com.openswimsoftware.ceylon.js.jquery::DeferredAbs',$$$cocjl339.JSObjectAbs);
        (function($$deferredAbs){
            $$deferredAbs.always=function always(alwaysCallbacks$1114){
                var $$deferredAbs=this;
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.always(alwaysCallbacks$1114));
                /*End dynamic block*/
            };$$deferredAbs.always.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'alwaysCallbacks',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("add handlers to be called when the deferred object is either resolved or rejected",81)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','always']};};
            $$deferredAbs.done=function done(doneCallbacks$1115){
                var $$deferredAbs=this;
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.done(doneCallbacks$1115));
                /*End dynamic block*/
            };$$deferredAbs.done.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'doneCallbacks',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("add handlers to be called when the deferred object is resolved",62)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','done']};};
            $$deferredAbs.fail=function fail(failCallbacks$1116){
                var $$deferredAbs=this;
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.fail(failCallbacks$1116));
                /*End dynamic block*/
            };$$deferredAbs.fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'failCallbacks',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("add handlers to be called when the deferred object is rejected",62)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','fail']};};
            $$deferredAbs.thenFilter=function thenFilter(doneFilter$1117,failFilter$1118,progressFilter$1119){
                var $$deferredAbs=this;
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.then(doneFilter$1117,failFilter$1118,progressFilter$1119));
                /*End dynamic block*/
            };$$deferredAbs.thenFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'doneFilter',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'failFilter',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'progressFilter',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("add handlers to be called when the deferred object is either resolved, rejected or are still in progress",104)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','thenFilter']};};
            $$deferredAbs.notify=function notify(args$1120){
                var $$deferredAbs=this;
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.notify(args$1120.$native));
                /*End dynamic block*/
            };$$deferredAbs.notify.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("call the progress callbacks on deferred with the given args",59)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','notify']};};
            $$deferredAbs.notifyWith=function notifyWith(context$1121,args$1122){
                var $$deferredAbs=this;
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.notifyWith(context$1121.$native,args$1122.$native));
                /*End dynamic block*/
            };$$deferredAbs.notifyWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("call the progress callbacks on deferred with the given args with the given context",82)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','notifyWith']};};
            $$deferredAbs.progress=function progress(progressCallbacks$1123){
                var $$deferredAbs=this;
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.progress(progressCallbacks$1123));
                /*End dynamic block*/
            };$$deferredAbs.progress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'progressCallbacks',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("add handlers to be called when the deferred objects progress is updated",71)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','progress']};};
            $$deferredAbs.promise=function promise(target$1124){
                var $$deferredAbs=this;
                /*Begin dynamic block*/
                return Promise($$deferredAbs.$native.promise(target$1124));
                /*End dynamic block*/
            };$$deferredAbs.promise.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'target',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("convert the deferred to a promise on the given target",53)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','promise']};};
            $$deferredAbs.reject=function reject(args$1125){
                var $$deferredAbs=this;
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.reject(args$1125.$native));
                /*End dynamic block*/
            };$$deferredAbs.reject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("call the fail callbacks on deferred with the given args",55)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','reject']};};
            $$deferredAbs.rejectWith=function rejectWith(context$1126,args$1127){
                var $$deferredAbs=this;
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.rejectWith(context$1126.$native,args$1127.$native));
                /*End dynamic block*/
            };$$deferredAbs.rejectWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("call the fail callbacks on deferred with the given args and the given context",77)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','rejectWith']};};
            $$deferredAbs.resolve=function resolve(args$1128){
                var $$deferredAbs=this;
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.resolve(args$1128.$native));
                /*End dynamic block*/
            };$$deferredAbs.resolve.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("resolve the deferred object and call the done callbacks on deferred with the given args",87)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','resolve']};};
            $$deferredAbs.resolveWith=function resolveWith(context$1129,args$1130){
                var $$deferredAbs=this;
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.resolveWith(context$1129.$native,args$1130.$native));
                /*End dynamic block*/
            };$$deferredAbs.resolveWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("resolve the deferred object and call the done callbacks on deferred with the given args and the given context",109)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','resolveWith']};};
            $$deferredAbs.state=function state(){
                var $$deferredAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$1131=$$deferredAbs.$native.state,tmpvar$1132=$$$cl1.String("pending",7),(tmpvar$1131.equals&&tmpvar$1131.equals(tmpvar$1132))||tmpvar$1131===tmpvar$1132)){
                    return getDeferredStatePending();
                }else {
                    if((tmpvar$1133=$$deferredAbs.$native.state,tmpvar$1134=$$$cl1.String("resolved",8),(tmpvar$1133.equals&&tmpvar$1133.equals(tmpvar$1134))||tmpvar$1133===tmpvar$1134)){
                        return getDeferredStateResolved();
                    }else {
                        return getDeferredStateResolved();
                    }
                }/*End dynamic block*/
            };$$deferredAbs.state.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DeferredState},$ps:[],$cont:DeferredAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the current state of the deferred object",48)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','state']};};
        })(DeferredAbs.$$.prototype);
    }
    return DeferredAbs;
}
exports.$init$DeferredAbs=$init$DeferredAbs;
$init$DeferredAbs();
function Deferred(n$1135, $$deferred){
    $init$Deferred();
    if ($$deferred===undefined)$$deferred=new Deferred.$$;
    $$deferred.n$1135_=n$1135;
    DeferredAbs($$deferred);
    $$deferred.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Deferred,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','Deferred','$at','native']};}};
    /*Begin dynamic block*/
    $$deferred.$native=$$deferred.n$1135;/*End dynamic block*/
    return $$deferred;
}
Deferred.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DeferredAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("used for callback queues",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','Deferred']};};
exports.Deferred=Deferred;
function $init$Deferred(){
    if (Deferred.$$===undefined){
        $$$cl1.initTypeProto(Deferred,'com.openswimsoftware.ceylon.js.jquery::Deferred',$init$DeferredAbs());
        (function($$deferred){
            $$$cl1.defineAttr($$deferred,'n$1135',function(){return this.n$1135_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Deferred,d:['com.openswimsoftware.ceylon.js.jquery','Deferred','$at','n']};});
        })(Deferred.$$.prototype);
    }
    return Deferred;
}
exports.$init$Deferred=$init$Deferred;
$init$Deferred();
var $$$cocjd958=require('com/openswimsoftware/ceylon/js/dom/4.0.0/com.openswimsoftware.ceylon.js.dom-4.0.0');
$$$cl1.$addmod$($$$cocjd958,'com.openswimsoftware.ceylon.js.dom/4.0.0');
var $$$cocjj639=require('com/openswimsoftware/ceylon/js/json/1.0.0/com.openswimsoftware.ceylon.js.json-1.0.0');
$$$cl1.$addmod$($$$cocjj639,'com.openswimsoftware.ceylon.js.json/1.0.0');
var allSelector$1136;function $valinit$allSelector$1136(){if (allSelector$1136===undefined)allSelector$1136=$$$cl1.String("*",1);return allSelector$1136;};$valinit$allSelector$1136();
function getAllSelector(){return $valinit$allSelector$1136();}
exports.getAllSelector=getAllSelector;
var $prop$getAllSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','allSelector']};}};
exports.$prop$getAllSelector=$prop$getAllSelector;
$prop$getAllSelector.get=getAllSelector;
getAllSelector.$$metamodel$$=$prop$getAllSelector.$$metamodel$$;
var animatedSelector$1137;function $valinit$animatedSelector$1137(){if (animatedSelector$1137===undefined)animatedSelector$1137=$$$cl1.String(":animated",9);return animatedSelector$1137;};$valinit$animatedSelector$1137();
function getAnimatedSelector(){return $valinit$animatedSelector$1137();}
exports.getAnimatedSelector=getAnimatedSelector;
var $prop$getAnimatedSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','animatedSelector']};}};
exports.$prop$getAnimatedSelector=$prop$getAnimatedSelector;
$prop$getAnimatedSelector.get=getAnimatedSelector;
getAnimatedSelector.$$metamodel$$=$prop$getAnimatedSelector.$$metamodel$$;
var buttonSelector$1138;function $valinit$buttonSelector$1138(){if (buttonSelector$1138===undefined)buttonSelector$1138=$$$cl1.String(":button",7);return buttonSelector$1138;};$valinit$buttonSelector$1138();
function getButtonSelector(){return $valinit$buttonSelector$1138();}
exports.getButtonSelector=getButtonSelector;
var $prop$getButtonSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','buttonSelector']};}};
exports.$prop$getButtonSelector=$prop$getButtonSelector;
$prop$getButtonSelector.get=getButtonSelector;
getButtonSelector.$$metamodel$$=$prop$getButtonSelector.$$metamodel$$;
var checkboxSelector$1139;function $valinit$checkboxSelector$1139(){if (checkboxSelector$1139===undefined)checkboxSelector$1139=$$$cl1.String(":checkbox",9);return checkboxSelector$1139;};$valinit$checkboxSelector$1139();
function getCheckboxSelector(){return $valinit$checkboxSelector$1139();}
exports.getCheckboxSelector=getCheckboxSelector;
var $prop$getCheckboxSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','checkboxSelector']};}};
exports.$prop$getCheckboxSelector=$prop$getCheckboxSelector;
$prop$getCheckboxSelector.get=getCheckboxSelector;
getCheckboxSelector.$$metamodel$$=$prop$getCheckboxSelector.$$metamodel$$;
var checkedSelector$1140;function $valinit$checkedSelector$1140(){if (checkedSelector$1140===undefined)checkedSelector$1140=$$$cl1.String(":checked",8);return checkedSelector$1140;};$valinit$checkedSelector$1140();
function getCheckedSelector(){return $valinit$checkedSelector$1140();}
exports.getCheckedSelector=getCheckedSelector;
var $prop$getCheckedSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','checkedSelector']};}};
exports.$prop$getCheckedSelector=$prop$getCheckedSelector;
$prop$getCheckedSelector.get=getCheckedSelector;
getCheckedSelector.$$metamodel$$=$prop$getCheckedSelector.$$metamodel$$;
var disabledSelector$1141;function $valinit$disabledSelector$1141(){if (disabledSelector$1141===undefined)disabledSelector$1141=$$$cl1.String(":disabled",9);return disabledSelector$1141;};$valinit$disabledSelector$1141();
function getDisabledSelector(){return $valinit$disabledSelector$1141();}
exports.getDisabledSelector=getDisabledSelector;
var $prop$getDisabledSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','disabledSelector']};}};
exports.$prop$getDisabledSelector=$prop$getDisabledSelector;
$prop$getDisabledSelector.get=getDisabledSelector;
getDisabledSelector.$$metamodel$$=$prop$getDisabledSelector.$$metamodel$$;
var emptySelector$1142;function $valinit$emptySelector$1142(){if (emptySelector$1142===undefined)emptySelector$1142=$$$cl1.String(":empty",6);return emptySelector$1142;};$valinit$emptySelector$1142();
function getEmptySelector(){return $valinit$emptySelector$1142();}
exports.getEmptySelector=getEmptySelector;
var $prop$getEmptySelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','emptySelector']};}};
exports.$prop$getEmptySelector=$prop$getEmptySelector;
$prop$getEmptySelector.get=getEmptySelector;
getEmptySelector.$$metamodel$$=$prop$getEmptySelector.$$metamodel$$;
var enabledSelector$1143;function $valinit$enabledSelector$1143(){if (enabledSelector$1143===undefined)enabledSelector$1143=$$$cl1.String(":enabled",8);return enabledSelector$1143;};$valinit$enabledSelector$1143();
function getEnabledSelector(){return $valinit$enabledSelector$1143();}
exports.getEnabledSelector=getEnabledSelector;
var $prop$getEnabledSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','enabledSelector']};}};
exports.$prop$getEnabledSelector=$prop$getEnabledSelector;
$prop$getEnabledSelector.get=getEnabledSelector;
getEnabledSelector.$$metamodel$$=$prop$getEnabledSelector.$$metamodel$$;
var evenSelector$1144;function $valinit$evenSelector$1144(){if (evenSelector$1144===undefined)evenSelector$1144=$$$cl1.String(":even",5);return evenSelector$1144;};$valinit$evenSelector$1144();
function getEvenSelector(){return $valinit$evenSelector$1144();}
exports.getEvenSelector=getEvenSelector;
var $prop$getEvenSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','evenSelector']};}};
exports.$prop$getEvenSelector=$prop$getEvenSelector;
$prop$getEvenSelector.get=getEvenSelector;
getEvenSelector.$$metamodel$$=$prop$getEvenSelector.$$metamodel$$;
var fileSelector$1145;function $valinit$fileSelector$1145(){if (fileSelector$1145===undefined)fileSelector$1145=$$$cl1.String(":file",5);return fileSelector$1145;};$valinit$fileSelector$1145();
function getFileSelector(){return $valinit$fileSelector$1145();}
exports.getFileSelector=getFileSelector;
var $prop$getFileSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','fileSelector']};}};
exports.$prop$getFileSelector=$prop$getFileSelector;
$prop$getFileSelector.get=getFileSelector;
getFileSelector.$$metamodel$$=$prop$getFileSelector.$$metamodel$$;
var firstChildSelector$1146;function $valinit$firstChildSelector$1146(){if (firstChildSelector$1146===undefined)firstChildSelector$1146=$$$cl1.String(":first-child",12);return firstChildSelector$1146;};$valinit$firstChildSelector$1146();
function getFirstChildSelector(){return $valinit$firstChildSelector$1146();}
exports.getFirstChildSelector=getFirstChildSelector;
var $prop$getFirstChildSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','firstChildSelector']};}};
exports.$prop$getFirstChildSelector=$prop$getFirstChildSelector;
$prop$getFirstChildSelector.get=getFirstChildSelector;
getFirstChildSelector.$$metamodel$$=$prop$getFirstChildSelector.$$metamodel$$;
var firstOfTypeSelector$1147;function $valinit$firstOfTypeSelector$1147(){if (firstOfTypeSelector$1147===undefined)firstOfTypeSelector$1147=$$$cl1.String(":first-of-type",14);return firstOfTypeSelector$1147;};$valinit$firstOfTypeSelector$1147();
function getFirstOfTypeSelector(){return $valinit$firstOfTypeSelector$1147();}
exports.getFirstOfTypeSelector=getFirstOfTypeSelector;
var $prop$getFirstOfTypeSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','firstOfTypeSelector']};}};
exports.$prop$getFirstOfTypeSelector=$prop$getFirstOfTypeSelector;
$prop$getFirstOfTypeSelector.get=getFirstOfTypeSelector;
getFirstOfTypeSelector.$$metamodel$$=$prop$getFirstOfTypeSelector.$$metamodel$$;
var firstSelector$1148;function $valinit$firstSelector$1148(){if (firstSelector$1148===undefined)firstSelector$1148=$$$cl1.String(":first",6);return firstSelector$1148;};$valinit$firstSelector$1148();
function getFirstSelector(){return $valinit$firstSelector$1148();}
exports.getFirstSelector=getFirstSelector;
var $prop$getFirstSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','firstSelector']};}};
exports.$prop$getFirstSelector=$prop$getFirstSelector;
$prop$getFirstSelector.get=getFirstSelector;
getFirstSelector.$$metamodel$$=$prop$getFirstSelector.$$metamodel$$;
var focusSelector$1149;function $valinit$focusSelector$1149(){if (focusSelector$1149===undefined)focusSelector$1149=$$$cl1.String(":focus",6);return focusSelector$1149;};$valinit$focusSelector$1149();
function getFocusSelector(){return $valinit$focusSelector$1149();}
exports.getFocusSelector=getFocusSelector;
var $prop$getFocusSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','focusSelector']};}};
exports.$prop$getFocusSelector=$prop$getFocusSelector;
$prop$getFocusSelector.get=getFocusSelector;
getFocusSelector.$$metamodel$$=$prop$getFocusSelector.$$metamodel$$;
var headerSelector$1150;function $valinit$headerSelector$1150(){if (headerSelector$1150===undefined)headerSelector$1150=$$$cl1.String(":header",7);return headerSelector$1150;};$valinit$headerSelector$1150();
function getHeaderSelector(){return $valinit$headerSelector$1150();}
exports.getHeaderSelector=getHeaderSelector;
var $prop$getHeaderSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','headerSelector']};}};
exports.$prop$getHeaderSelector=$prop$getHeaderSelector;
$prop$getHeaderSelector.get=getHeaderSelector;
getHeaderSelector.$$metamodel$$=$prop$getHeaderSelector.$$metamodel$$;
var hiddenSelector$1151;function $valinit$hiddenSelector$1151(){if (hiddenSelector$1151===undefined)hiddenSelector$1151=$$$cl1.String(":hidden",7);return hiddenSelector$1151;};$valinit$hiddenSelector$1151();
function getHiddenSelector(){return $valinit$hiddenSelector$1151();}
exports.getHiddenSelector=getHiddenSelector;
var $prop$getHiddenSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','hiddenSelector']};}};
exports.$prop$getHiddenSelector=$prop$getHiddenSelector;
$prop$getHiddenSelector.get=getHiddenSelector;
getHiddenSelector.$$metamodel$$=$prop$getHiddenSelector.$$metamodel$$;
var imageSelector$1152;function $valinit$imageSelector$1152(){if (imageSelector$1152===undefined)imageSelector$1152=$$$cl1.String(":image",6);return imageSelector$1152;};$valinit$imageSelector$1152();
function getImageSelector(){return $valinit$imageSelector$1152();}
exports.getImageSelector=getImageSelector;
var $prop$getImageSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','imageSelector']};}};
exports.$prop$getImageSelector=$prop$getImageSelector;
$prop$getImageSelector.get=getImageSelector;
getImageSelector.$$metamodel$$=$prop$getImageSelector.$$metamodel$$;
var inputSelector$1153;function $valinit$inputSelector$1153(){if (inputSelector$1153===undefined)inputSelector$1153=$$$cl1.String(":input",6);return inputSelector$1153;};$valinit$inputSelector$1153();
function getInputSelector(){return $valinit$inputSelector$1153();}
exports.getInputSelector=getInputSelector;
var $prop$getInputSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','inputSelector']};}};
exports.$prop$getInputSelector=$prop$getInputSelector;
$prop$getInputSelector.get=getInputSelector;
getInputSelector.$$metamodel$$=$prop$getInputSelector.$$metamodel$$;
var lastChildSelector$1154;function $valinit$lastChildSelector$1154(){if (lastChildSelector$1154===undefined)lastChildSelector$1154=$$$cl1.String(":last-child",11);return lastChildSelector$1154;};$valinit$lastChildSelector$1154();
function getLastChildSelector(){return $valinit$lastChildSelector$1154();}
exports.getLastChildSelector=getLastChildSelector;
var $prop$getLastChildSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','lastChildSelector']};}};
exports.$prop$getLastChildSelector=$prop$getLastChildSelector;
$prop$getLastChildSelector.get=getLastChildSelector;
getLastChildSelector.$$metamodel$$=$prop$getLastChildSelector.$$metamodel$$;
var lastOfTypeSelector$1155;function $valinit$lastOfTypeSelector$1155(){if (lastOfTypeSelector$1155===undefined)lastOfTypeSelector$1155=$$$cl1.String(":last-of-type",13);return lastOfTypeSelector$1155;};$valinit$lastOfTypeSelector$1155();
function getLastOfTypeSelector(){return $valinit$lastOfTypeSelector$1155();}
exports.getLastOfTypeSelector=getLastOfTypeSelector;
var $prop$getLastOfTypeSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','lastOfTypeSelector']};}};
exports.$prop$getLastOfTypeSelector=$prop$getLastOfTypeSelector;
$prop$getLastOfTypeSelector.get=getLastOfTypeSelector;
getLastOfTypeSelector.$$metamodel$$=$prop$getLastOfTypeSelector.$$metamodel$$;
var lastSelector$1156;function $valinit$lastSelector$1156(){if (lastSelector$1156===undefined)lastSelector$1156=$$$cl1.String(":last",5);return lastSelector$1156;};$valinit$lastSelector$1156();
function getLastSelector(){return $valinit$lastSelector$1156();}
exports.getLastSelector=getLastSelector;
var $prop$getLastSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','lastSelector']};}};
exports.$prop$getLastSelector=$prop$getLastSelector;
$prop$getLastSelector.get=getLastSelector;
getLastSelector.$$metamodel$$=$prop$getLastSelector.$$metamodel$$;
var oddSelector$1157;function $valinit$oddSelector$1157(){if (oddSelector$1157===undefined)oddSelector$1157=$$$cl1.String(":odd",4);return oddSelector$1157;};$valinit$oddSelector$1157();
function getOddSelector(){return $valinit$oddSelector$1157();}
exports.getOddSelector=getOddSelector;
var $prop$getOddSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','oddSelector']};}};
exports.$prop$getOddSelector=$prop$getOddSelector;
$prop$getOddSelector.get=getOddSelector;
getOddSelector.$$metamodel$$=$prop$getOddSelector.$$metamodel$$;
var onlyChildSelector$1158;function $valinit$onlyChildSelector$1158(){if (onlyChildSelector$1158===undefined)onlyChildSelector$1158=$$$cl1.String(":only-child",11);return onlyChildSelector$1158;};$valinit$onlyChildSelector$1158();
function getOnlyChildSelector(){return $valinit$onlyChildSelector$1158();}
exports.getOnlyChildSelector=getOnlyChildSelector;
var $prop$getOnlyChildSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','onlyChildSelector']};}};
exports.$prop$getOnlyChildSelector=$prop$getOnlyChildSelector;
$prop$getOnlyChildSelector.get=getOnlyChildSelector;
getOnlyChildSelector.$$metamodel$$=$prop$getOnlyChildSelector.$$metamodel$$;
var onlyOfTypeSelector$1159;function $valinit$onlyOfTypeSelector$1159(){if (onlyOfTypeSelector$1159===undefined)onlyOfTypeSelector$1159=$$$cl1.String(":only-of-type",13);return onlyOfTypeSelector$1159;};$valinit$onlyOfTypeSelector$1159();
function getOnlyOfTypeSelector(){return $valinit$onlyOfTypeSelector$1159();}
exports.getOnlyOfTypeSelector=getOnlyOfTypeSelector;
var $prop$getOnlyOfTypeSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','onlyOfTypeSelector']};}};
exports.$prop$getOnlyOfTypeSelector=$prop$getOnlyOfTypeSelector;
$prop$getOnlyOfTypeSelector.get=getOnlyOfTypeSelector;
getOnlyOfTypeSelector.$$metamodel$$=$prop$getOnlyOfTypeSelector.$$metamodel$$;
var parentSelector$1160;function $valinit$parentSelector$1160(){if (parentSelector$1160===undefined)parentSelector$1160=$$$cl1.String(":parent",7);return parentSelector$1160;};$valinit$parentSelector$1160();
function getParentSelector(){return $valinit$parentSelector$1160();}
exports.getParentSelector=getParentSelector;
var $prop$getParentSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','parentSelector']};}};
exports.$prop$getParentSelector=$prop$getParentSelector;
$prop$getParentSelector.get=getParentSelector;
getParentSelector.$$metamodel$$=$prop$getParentSelector.$$metamodel$$;
var passwordSelector$1161;function $valinit$passwordSelector$1161(){if (passwordSelector$1161===undefined)passwordSelector$1161=$$$cl1.String(":password",9);return passwordSelector$1161;};$valinit$passwordSelector$1161();
function getPasswordSelector(){return $valinit$passwordSelector$1161();}
exports.getPasswordSelector=getPasswordSelector;
var $prop$getPasswordSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','passwordSelector']};}};
exports.$prop$getPasswordSelector=$prop$getPasswordSelector;
$prop$getPasswordSelector.get=getPasswordSelector;
getPasswordSelector.$$metamodel$$=$prop$getPasswordSelector.$$metamodel$$;
var radioSelector$1162;function $valinit$radioSelector$1162(){if (radioSelector$1162===undefined)radioSelector$1162=$$$cl1.String(":radio",6);return radioSelector$1162;};$valinit$radioSelector$1162();
function getRadioSelector(){return $valinit$radioSelector$1162();}
exports.getRadioSelector=getRadioSelector;
var $prop$getRadioSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','radioSelector']};}};
exports.$prop$getRadioSelector=$prop$getRadioSelector;
$prop$getRadioSelector.get=getRadioSelector;
getRadioSelector.$$metamodel$$=$prop$getRadioSelector.$$metamodel$$;
var resetSelector$1163;function $valinit$resetSelector$1163(){if (resetSelector$1163===undefined)resetSelector$1163=$$$cl1.String(":reset",6);return resetSelector$1163;};$valinit$resetSelector$1163();
function getResetSelector(){return $valinit$resetSelector$1163();}
exports.getResetSelector=getResetSelector;
var $prop$getResetSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','resetSelector']};}};
exports.$prop$getResetSelector=$prop$getResetSelector;
$prop$getResetSelector.get=getResetSelector;
getResetSelector.$$metamodel$$=$prop$getResetSelector.$$metamodel$$;
var rootSelector$1164;function $valinit$rootSelector$1164(){if (rootSelector$1164===undefined)rootSelector$1164=$$$cl1.String(":root",5);return rootSelector$1164;};$valinit$rootSelector$1164();
function getRootSelector(){return $valinit$rootSelector$1164();}
exports.getRootSelector=getRootSelector;
var $prop$getRootSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','rootSelector']};}};
exports.$prop$getRootSelector=$prop$getRootSelector;
$prop$getRootSelector.get=getRootSelector;
getRootSelector.$$metamodel$$=$prop$getRootSelector.$$metamodel$$;
var selectedSelector$1165;function $valinit$selectedSelector$1165(){if (selectedSelector$1165===undefined)selectedSelector$1165=$$$cl1.String(":selected",9);return selectedSelector$1165;};$valinit$selectedSelector$1165();
function getSelectedSelector(){return $valinit$selectedSelector$1165();}
exports.getSelectedSelector=getSelectedSelector;
var $prop$getSelectedSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','selectedSelector']};}};
exports.$prop$getSelectedSelector=$prop$getSelectedSelector;
$prop$getSelectedSelector.get=getSelectedSelector;
getSelectedSelector.$$metamodel$$=$prop$getSelectedSelector.$$metamodel$$;
var submitSelector$1166;function $valinit$submitSelector$1166(){if (submitSelector$1166===undefined)submitSelector$1166=$$$cl1.String(":submit",7);return submitSelector$1166;};$valinit$submitSelector$1166();
function getSubmitSelector(){return $valinit$submitSelector$1166();}
exports.getSubmitSelector=getSubmitSelector;
var $prop$getSubmitSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','submitSelector']};}};
exports.$prop$getSubmitSelector=$prop$getSubmitSelector;
$prop$getSubmitSelector.get=getSubmitSelector;
getSubmitSelector.$$metamodel$$=$prop$getSubmitSelector.$$metamodel$$;
var targetSelector$1167;function $valinit$targetSelector$1167(){if (targetSelector$1167===undefined)targetSelector$1167=$$$cl1.String(":target",7);return targetSelector$1167;};$valinit$targetSelector$1167();
function getTargetSelector(){return $valinit$targetSelector$1167();}
exports.getTargetSelector=getTargetSelector;
var $prop$getTargetSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','targetSelector']};}};
exports.$prop$getTargetSelector=$prop$getTargetSelector;
$prop$getTargetSelector.get=getTargetSelector;
getTargetSelector.$$metamodel$$=$prop$getTargetSelector.$$metamodel$$;
var textSelector$1168;function $valinit$textSelector$1168(){if (textSelector$1168===undefined)textSelector$1168=$$$cl1.String(":text",5);return textSelector$1168;};$valinit$textSelector$1168();
function getTextSelector(){return $valinit$textSelector$1168();}
exports.getTextSelector=getTextSelector;
var $prop$getTextSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','textSelector']};}};
exports.$prop$getTextSelector=$prop$getTextSelector;
$prop$getTextSelector.get=getTextSelector;
getTextSelector.$$metamodel$$=$prop$getTextSelector.$$metamodel$$;
var visibleSelector$1169;function $valinit$visibleSelector$1169(){if (visibleSelector$1169===undefined)visibleSelector$1169=$$$cl1.String(":visible",8);return visibleSelector$1169;};$valinit$visibleSelector$1169();
function getVisibleSelector(){return $valinit$visibleSelector$1169();}
exports.getVisibleSelector=getVisibleSelector;
var $prop$getVisibleSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','visibleSelector']};}};
exports.$prop$getVisibleSelector=$prop$getVisibleSelector;
$prop$getVisibleSelector.get=getVisibleSelector;
getVisibleSelector.$$metamodel$$=$prop$getVisibleSelector.$$metamodel$$;
function jQueryAjax(url$1170,settings$1171){
    if(url$1170===undefined){url$1170=null;}
    if(settings$1171===undefined){settings$1171=null;}
    /*Begin dynamic block*/
    var u$1172;
    if((u$1172=url$1170)!==null){
        var s$1173;
        if((s$1173=settings$1171)!==null){
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'44:17-44:22','jquery.ceylon'):jQuery).ajax(u$1172.valueOf(),s$1173.toNative()));
        }else {
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'46:17-46:22','jquery.ceylon'):jQuery).ajax(u$1172.valueOf()));
        }
    }else {
        var s$1174;
        if((s$1174=settings$1171)!==null){
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'50:17-50:22','jquery.ceylon'):jQuery).ajax(s$1174.toNative()));
        }else {
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'52:17-52:22','jquery.ceylon'):jQuery).ajax());
        }
    }/*End dynamic block*/
}
exports.jQueryAjax=jQueryAjax;
jQueryAjax.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'settings',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:JQueryAjaxSettingsBuilder}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryAjax']};};
function jQueryAjaxPrefilter(callback$1175,dataTypes$1176){
    if(dataTypes$1176===undefined){dataTypes$1176=null;}
    /*Begin dynamic block*/
    var dT$1177;
    if((dT$1177=dataTypes$1176)!==null){
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'61:3-61:8','jquery.ceylon'):jQuery).ajaxPrefilter(dT$1177.valueOf(),$$$cl1.$JsCallable(callback$1175,[],{Arguments:{t:'T', l:[{t:JQueryAjaxSettings},{t:JQueryAjaxSettings},{t:JQXHR}]},Return:{t:$$$cl1.Anything}}));
    }else {
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'63:3-63:8','jquery.ceylon'):jQuery).ajaxPrefilter($$$cl1.$JsCallable(callback$1175,[],{Arguments:{t:'T', l:[{t:JQueryAjaxSettings},{t:JQueryAjaxSettings},{t:JQXHR}]},Return:{t:$$$cl1.Anything}}));
    }/*End dynamic block*/
}
exports.jQueryAjaxPrefilter=jQueryAjaxPrefilter;
jQueryAjaxPrefilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:JQueryAjaxSettings}},{$t:{t:JQueryAjaxSettings}},{$t:{t:JQXHR}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'dataTypes',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryAjaxPrefilter']};};
function jQueryAjaxSetup(options$1178){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'70:2-70:7','jquery.ceylon'):jQuery).ajaxSetup(options$1178.toNative());
    /*End dynamic block*/
}
exports.jQueryAjaxSetup=jQueryAjaxSetup;
jQueryAjaxSetup.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'options',$mt:'prm',$t:{t:JQueryAjaxSettingsBuilder},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryAjaxSetup']};};
function jQueryAjaxTransport(dataType$1179,callback$1180){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'77:2-77:7','jquery.ceylon'):jQuery).ajaxTransport(dataType$1179.valueOf(),$$$cl1.$JsCallable(callback$1180,[],{Arguments:{t:'T', l:[{t:$$$cl1.Anything},{t:$$$cl1.Anything},{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}}));
    /*End dynamic block*/
}
exports.jQueryAjaxTransport=jQueryAjaxTransport;
jQueryAjaxTransport.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'dataType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryAjaxTransport']};};
function jQueryCallbacks(flags$1181){
    if(flags$1181===undefined){flags$1181=$$$cl1.String("",0);}
    /*Begin dynamic block*/
    return Callbacks((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'83:19-83:24','jquery.ceylon'):jQuery).Callbacks(flags$1181.valueOf()));
    /*End dynamic block*/
}
exports.jQueryCallbacks=jQueryCallbacks;
jQueryCallbacks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'flags',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryCallbacks']};};
function jQueryContains(container$1182,contained$1183){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'89:6-89:11','jquery.ceylon'):jQuery).contains(container$1182,contained$1183)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryContains=jQueryContains;
jQueryContains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'container',$mt:'prm',$t:{t:$$$cocjd958.Element},$an:function(){return[];}},{$nm:'contained',$mt:'prm',$t:{t:$$$cocjd958.Element},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryContains']};};
function jQueryCssHooks(){
    /*Begin dynamic block*/
    return $$$cocjl339.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'99:18-99:23','jquery.ceylon'):jQuery).cssHooks);
    /*End dynamic block*/
}
exports.jQueryCssHooks=jQueryCssHooks;
jQueryCssHooks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSObject},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryCssHooks']};};
function jQuerySetData(element$1184,key$1185,data$1186){
    /*Begin dynamic block*/
    return $$$cocjl339.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'105:18-105:23','jquery.ceylon'):jQuery).data(element$1184,key$1185.valueOf(),data$1186));
    /*End dynamic block*/
}
exports.jQuerySetData=jQuerySetData;
jQuerySetData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSObject},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cocjd958.Element},$an:function(){return[];}},{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQuerySetData']};};
function jQueryGetData(element$1187,key$1188){
    if(key$1188===undefined){key$1188=null;}
    /*Begin dynamic block*/
    return $$$cocjl339.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'111:18-111:23','jquery.ceylon'):jQuery).data(element$1187,key$1188));
    /*End dynamic block*/
}
exports.jQueryGetData=jQueryGetData;
jQueryGetData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSObject},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cocjd958.Element},$an:function(){return[];}},{$nm:'key',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryGetData']};};
function jQueryDeferred(beforeStart$1189){
    if(beforeStart$1189===undefined){beforeStart$1189=null;}
    /*Begin dynamic block*/
    return Deferred((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'118:18-118:23','jquery.ceylon'):jQuery).Deferred(beforeStart$1189));
    /*End dynamic block*/
}
exports.jQueryDeferred=jQueryDeferred;
jQueryDeferred.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'beforeStart',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryDeferred']};};
function jQueryDequeue(element$1190,queueName$1191){
    if(queueName$1191===undefined){queueName$1191=null;}
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'124:2-124:7','jquery.ceylon'):jQuery).dequeue(element$1190,queueName$1191);
    /*End dynamic block*/
}
exports.jQueryDequeue=jQueryDequeue;
jQueryDequeue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cocjd958.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryDequeue']};};
function jQueryEach(collection$1192,callback$1193){
    /*Begin dynamic block*/
    return $$$cocjl339.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'130:18-130:23','jquery.ceylon'):jQuery).each(collection$1192,$$$cl1.$JsCallable(callback$1193,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer},{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}})));
    /*End dynamic block*/
}
exports.jQueryEach=jQueryEach;
jQueryEach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSObject},$ps:[{$nm:'collection',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryEach']};};
function jQueryError(message$1194){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'136:2-136:7','jquery.ceylon'):jQuery).error(message$1194.valueOf());
    /*End dynamic block*/
}
exports.jQueryError=jQueryError;
jQueryError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'message',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryError']};};
function jQueryExtend(target$1195,objects$1196){
    if(objects$1196===undefined){objects$1196=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'142:2-142:7','jquery.ceylon'):jQuery).extend(target$1195,objects$1196);
    /*End dynamic block*/
}
exports.jQueryExtend=jQueryExtend;
jQueryExtend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'target',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'objects',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryExtend']};};
function jQueryExtendDeep(deep$1197,target$1198,objects$1199){
    if(objects$1199===undefined){objects$1199=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'148:2-148:7','jquery.ceylon'):jQuery).extend(target$1198,objects$1199);
    /*End dynamic block*/
}
exports.jQueryExtendDeep=jQueryExtendDeep;
jQueryExtendDeep.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'deep',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'target',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'objects',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryExtendDeep']};};
function jQueryFnExtend(obj$1200){
    /*Begin dynamic block*/
    return $$$cocjl339.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'154:18-154:23','jquery.ceylon'):jQuery).fn.extend(obj$1200));
    /*End dynamic block*/
}
exports.jQueryFnExtend=jQueryFnExtend;
jQueryFnExtend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryFnExtend']};};
function jQueryFxInterval(){
    /*Begin dynamic block*/
    return $$$cocjl339.JSNumber((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'160:18-160:23','jquery.ceylon'):jQuery).fx.interval);
    /*End dynamic block*/
}
exports.jQueryFxInterval=jQueryFxInterval;
jQueryFxInterval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryFxInterval']};};
function jQueryFxOff(){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'166:6-166:11','jquery.ceylon'):jQuery).fx.off){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryFxOff=jQueryFxOff;
jQueryFxOff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryFxOff']};};
function jQueryGet(url$1201,data$1202,success$1203,dataType$1204){
    if(data$1202===undefined){data$1202=null;}
    if(success$1203===undefined){success$1203=null;}
    if(dataType$1204===undefined){dataType$1204=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'177:15-177:20','jquery.ceylon'):jQuery).get(url$1201.valueOf(),data$1202,success$1203,dataType$1204));
    /*End dynamic block*/
}
exports.jQueryGet=jQueryGet;
jQueryGet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.String}},{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}},{$nm:'dataType',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryGet']};};
function jQueryGetJSON(url$1205,data$1206,success$1207){
    if(data$1206===undefined){data$1206=null;}
    if(success$1207===undefined){success$1207=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'184:15-184:20','jquery.ceylon'):jQuery).getJSON(url$1205.valueOf(),data$1206,success$1207));
    /*End dynamic block*/
}
exports.jQueryGetJSON=jQueryGetJSON;
jQueryGetJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.String}},{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryGetJSON']};};
function jQueryGetScript(url$1208,success$1209){
    if(success$1209===undefined){success$1209=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'191:15-191:20','jquery.ceylon'):jQuery).getScript(url$1208.valueOf(),success$1209));
    /*End dynamic block*/
}
exports.jQueryGetScript=jQueryGetScript;
jQueryGetScript.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.String}},{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryGetScript']};};
function jQueryGlobalEval(code$1210){
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'197:15-197:20','jquery.ceylon'):jQuery).globalEval(code$1210.valueOf()));
    /*End dynamic block*/
}
exports.jQueryGlobalEval=jQueryGlobalEval;
jQueryGlobalEval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'code',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryGlobalEval']};};
function jQueryGrep(array$1211,callback$1212,invert$1213){
    if(invert$1213===undefined){invert$1213=null;}
    /*Begin dynamic block*/
    return $$$cocjl339.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'203:17-203:22','jquery.ceylon'):jQuery).grep(array$1211.$native,$$$cl1.$JsCallable(callback$1212,[],{Arguments:{t:'T', l:[{t:$$$cl1.Anything},{t:$$$cl1.Integer}]},Return:{t:$$$cl1.Anything}}),invert$1213));
    /*End dynamic block*/
}
exports.jQueryGrep=jQueryGrep;
jQueryGrep.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSArray},$ps:[{$nm:'array',$mt:'prm',$t:{t:$$$cocjl339.JSArray},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.Integer}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'invert',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryGrep']};};
function jQueryHasData(element$1214){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'209:6-209:11','jquery.ceylon'):jQuery).hasData(element$1214)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryHasData=jQueryHasData;
jQueryHasData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cocjd958.Element},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryHasData']};};
function jQueryHoldReady(hold$1215){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'219:2-219:7','jquery.ceylon'):jQuery).holdReady(hold$1215);
    /*End dynamic block*/
}
exports.jQueryHoldReady=jQueryHoldReady;
jQueryHoldReady.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'hold',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryHoldReady']};};
function jQueryInArray(val$1216,array$1217,fromIndex$1218){
    if(fromIndex$1218===undefined){fromIndex$1218=null;}
    /*Begin dynamic block*/
    return $$$cocjl339.JSNumber((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'225:18-225:23','jquery.ceylon'):jQuery).inArray(val$1216.$native,array$1217.$native,fromIndex$1218));
    /*End dynamic block*/
}
exports.jQueryInArray=jQueryInArray;
jQueryInArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}},{$nm:'array',$mt:'prm',$t:{t:$$$cocjl339.JSArray},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryInArray']};};
function jQueryIsArray(obj$1219){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'231:6-231:11','jquery.ceylon'):jQuery).isArray(obj$1219.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsArray=jQueryIsArray;
jQueryIsArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryIsArray']};};
function jQueryIsEmptyObject(obj$1220){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'241:6-241:11','jquery.ceylon'):jQuery).isEmptyObject(obj$1220.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsEmptyObject=jQueryIsEmptyObject;
jQueryIsEmptyObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryIsEmptyObject']};};
function jQueryIsFunction(obj$1221){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'251:6-251:11','jquery.ceylon'):jQuery).isFunction(obj$1221.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsFunction=jQueryIsFunction;
jQueryIsFunction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryIsFunction']};};
function jQueryIsNumeric(obj$1222){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'261:6-261:11','jquery.ceylon'):jQuery).isNumeric(obj$1222.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsNumeric=jQueryIsNumeric;
jQueryIsNumeric.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryIsNumeric']};};
function jQueryIsPlainObject(obj$1223){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'271:6-271:11','jquery.ceylon'):jQuery).isPlainObject(obj$1223.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsPlainObject=jQueryIsPlainObject;
jQueryIsPlainObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryIsPlainObject']};};
function jQueryIsWindow(obj$1224){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'281:6-281:11','jquery.ceylon'):jQuery).isWindow(obj$1224.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsWindow=jQueryIsWindow;
jQueryIsWindow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryIsWindow']};};
function jQueryIsXMLDoc(node$1225){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'291:6-291:11','jquery.ceylon'):jQuery).isXMLDoc(node$1225.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsXMLDoc=jQueryIsXMLDoc;
jQueryIsXMLDoc.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:$$$cocjd958.Element},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryIsXMLDoc']};};
function jQueryMapArray(array$1226,callback$1227){
    /*Begin dynamic block*/
    return $$$cocjl339.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'301:17-301:22','jquery.ceylon'):jQuery).mapArray(array$1226.$native,$$$cl1.$JsCallable(callback$1227,[],{Arguments:{t:'T', l:[{t:$$$cl1.Anything},{t:$$$cl1.Integer}]},Return:{t:$$$cl1.Anything}})));
    /*End dynamic block*/
}
exports.jQueryMapArray=jQueryMapArray;
jQueryMapArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSArray},$ps:[{$nm:'array',$mt:'prm',$t:{t:$$$cocjl339.JSArray},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.Integer}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryMapArray']};};
function jQueryMapObject(obj$1228,callback$1229){
    /*Begin dynamic block*/
    return $$$cocjl339.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'307:17-307:22','jquery.ceylon'):jQuery).mapArray(obj$1228.$native,$$$cl1.$JsCallable(callback$1229,[],{Arguments:{t:'T', l:[{t:$$$cl1.Anything},{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}})));
    /*End dynamic block*/
}
exports.jQueryMapObject=jQueryMapObject;
jQueryMapObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSArray},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryMapObject']};};
function jQueryMerge(first$1230,second$1231){
    /*Begin dynamic block*/
    return $$$cocjl339.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'313:17-313:22','jquery.ceylon'):jQuery).merge(first$1230,second$1231));
    /*End dynamic block*/
}
exports.jQueryMerge=jQueryMerge;
jQueryMerge.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSArray},$ps:[{$nm:'first',$mt:'prm',$t:{t:$$$cocjl339.JSArray},$an:function(){return[];}},{$nm:'second',$mt:'prm',$t:{t:$$$cocjl339.JSArray},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryMerge']};};
function jQueryNoConflict(removeAll$1232){
    if(removeAll$1232===undefined){removeAll$1232=null;}
    /*Begin dynamic block*/
    return $$$cocjl339.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'319:17-319:22','jquery.ceylon'):jQuery).noConflict(removeAll$1232));
    /*End dynamic block*/
}
exports.jQueryNoConflict=jQueryNoConflict;
jQueryNoConflict.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSArray},$ps:[{$nm:'removeAll',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryNoConflict']};};
function jQueryNoop(){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'325:2-325:7','jquery.ceylon'):jQuery).noop();
    /*End dynamic block*/
}
exports.jQueryNoop=jQueryNoop;
jQueryNoop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryNoop']};};
function jQueryNow(){
    /*Begin dynamic block*/
    return $$$cocjl339.JSNumber((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'331:18-331:23','jquery.ceylon'):jQuery).now());
    /*End dynamic block*/
}
exports.jQueryNow=jQueryNow;
jQueryNow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryNow']};};
function jQueryParam(obj$1233,traditional$1234){
    if(traditional$1234===undefined){traditional$1234=false;}
    /*Begin dynamic block*/
    return $$$cocjl339.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'337:18-337:23','jquery.ceylon'):jQuery).param(obj$1233,traditional$1234));
    /*End dynamic block*/
}
exports.jQueryParam=jQueryParam;
jQueryParam.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[{$nm:'obj',$mt:'prm',$t:{t:'u', l:[{t:$$$cocjl339.JSArray},{t:$$$cocjl339.JSObject}]},$an:function(){return[];}},{$nm:'traditional',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryParam']};};
function jQueryParseHTML(data$1235,context$1236,keepScripts$1237){
    if(context$1236===undefined){context$1236=null;}
    if(keepScripts$1237===undefined){keepScripts$1237=false;}
    /*Begin dynamic block*/
    return $$$cocjl339.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'343:18-343:23','jquery.ceylon'):jQuery).parseHTML(data$1235.valueOf(),context$1236,keepScripts$1237));
    /*End dynamic block*/
}
exports.jQueryParseHTML=jQueryParseHTML;
jQueryParseHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[{$nm:'data',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjd958.Element}]},$an:function(){return[];}},{$nm:'keepScripts',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryParseHTML']};};
function jQueryParseJSON(json$1238){
    /*Begin dynamic block*/
    return $$$cocjl339.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'349:18-349:23','jquery.ceylon'):jQuery).parseJSON((typeof data==='undefined'||data===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: data")),'349:35-349:38','jquery.ceylon'):data),(typeof context==='undefined'||context===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: context")),'349:41-349:47','jquery.ceylon'):context),(typeof keepScripts==='undefined'||keepScripts===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: keepScripts")),'349:50-349:60','jquery.ceylon'):keepScripts)));
    /*End dynamic block*/
}
exports.jQueryParseJSON=jQueryParseJSON;
jQueryParseJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSObject},$ps:[{$nm:'json',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryParseJSON']};};
function jQueryParseXML(data$1239){
    /*Begin dynamic block*/
    return $$$cocjl339.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'355:18-355:23','jquery.ceylon'):jQuery).parseXML(data$1239.valueOf()));
    /*End dynamic block*/
}
exports.jQueryParseXML=jQueryParseXML;
jQueryParseXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSObject},$ps:[{$nm:'data',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryParseXML']};};
function jQueryPost(url$1240,data$1241,success$1242,dataType$1243){
    if(data$1241===undefined){data$1241=null;}
    if(success$1242===undefined){success$1242=null;}
    if(dataType$1243===undefined){dataType$1243=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'362:15-362:20','jquery.ceylon'):jQuery).post(url$1240.valueOf(),data$1241,success$1242,dataType$1243));
    /*End dynamic block*/
}
exports.jQueryPost=jQueryPost;
jQueryPost.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.String}},{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}},{$nm:'dataType',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryPost']};};
function jQueryProxy(func$1244,context$1245,additionalArguments$1246){
    if(additionalArguments$1246===undefined){additionalArguments$1246=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return $$$cocjl339.JSFunction((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'368:20-368:25','jquery.ceylon'):jQuery).proxy($$$cl1.$JsCallable(func$1244,[],{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}),context$1245,additionalArguments$1246));
    /*End dynamic block*/
}
exports.jQueryProxy=jQueryProxy;
jQueryProxy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSFunction},$ps:[{$nm:'func',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}},{$nm:'additionalArguments',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryProxy']};};
function jQueryProxyName(context$1247,name$1248,additionalArguments$1249){
    if(additionalArguments$1249===undefined){additionalArguments$1249=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return $$$cocjl339.JSFunction((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'374:20-374:25','jquery.ceylon'):jQuery).proxy(context$1247,(typeof func==='undefined'||func===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: func")),'374:42-374:45','jquery.ceylon'):func),additionalArguments$1249));
    /*End dynamic block*/
}
exports.jQueryProxyName=jQueryProxyName;
jQueryProxyName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSFunction},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'additionalArguments',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryProxyName']};};
function jQueryGetQueue(element$1250,queueName$1251){
    if(queueName$1251===undefined){queueName$1251=$$$cl1.String("fx",2);}
    /*Begin dynamic block*/
    return $$$cocjl339.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'381:17-381:22','jquery.ceylon'):jQuery).queue(element$1250,queueName$1251.valueOf()));
    /*End dynamic block*/
}
exports.jQueryGetQueue=jQueryGetQueue;
jQueryGetQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSArray},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cocjd958.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("returns JSFunctions[]",21)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryGetQueue']};};
function jQuerySetQueue(element$1252,queueName$1253,callbacks$1254){
    if(queueName$1253===undefined){queueName$1253=$$$cl1.String("fx",2);}
    if(callbacks$1254===undefined){callbacks$1254=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'387:16-387:21','jquery.ceylon'):jQuery).queue(element$1252,queueName$1253.valueOf(),callbacks$1254));
    /*End dynamic block*/
}
exports.jQuerySetQueue=jQuerySetQueue;
jQuerySetQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cocjd958.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQuerySetQueue']};};
function jQueryRemoveData(element$1255,name$1256){
    if(name$1256===undefined){name$1256=null;}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'393:16-393:21','jquery.ceylon'):jQuery).removeData(element$1255,name$1256));
    /*End dynamic block*/
}
exports.jQueryRemoveData=jQueryRemoveData;
jQueryRemoveData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cocjd958.Element},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryRemoveData']};};
function jQueryTrim(str$1257){
    /*Begin dynamic block*/
    return $$$cocjl339.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'399:18-399:23','jquery.ceylon'):jQuery).trim(str$1257.$native));
    /*End dynamic block*/
}
exports.jQueryTrim=jQueryTrim;
jQueryTrim.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[{$nm:'str',$mt:'prm',$t:{t:$$$cocjl339.JSString},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryTrim']};};
function jQueryType(obj$1258){
    /*Begin dynamic block*/
    return $$$cocjl339.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'405:18-405:23','jquery.ceylon'):jQuery).type(obj$1258.$native));
    /*End dynamic block*/
}
exports.jQueryType=jQueryType;
jQueryType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryType']};};
function jQueryUnique(arr$1259){
    /*Begin dynamic block*/
    return $$$cocjl339.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'411:17-411:22','jquery.ceylon'):jQuery).unique(arr$1259.$native));
    /*End dynamic block*/
}
exports.jQueryUnique=jQueryUnique;
jQueryUnique.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSArray},$ps:[{$nm:'arr',$mt:'prm',$t:{t:$$$cocjl339.JSArray},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryUnique']};};
function jQueryWhen(deferreds$1260){
    if(deferreds$1260===undefined){deferreds$1260=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return Promise((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'417:17-417:22','jquery.ceylon'):jQuery).when((function(){
        var lst$1261=[];
        var it$1262=deferreds$1260.iterator();
        var elem$1263;
        while ((elem$1263=it$1262.next())!==$$$cl1.getFinished()){
            lst$1261.push(elem$1263.$native);
        }
        return $$$cl1.ArraySequence(lst$1261);
    }())));
    /*End dynamic block*/
}
exports.jQueryWhen=jQueryWhen;
jQueryWhen.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'deferreds',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:Deferred}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryWhen']};};
function jq(selector$1264,context$1265){
    if(selector$1264===undefined){selector$1264=null;}
    if(context$1265===undefined){context$1265=null;}
    /*Begin dynamic block*/
    
    var case$1266=selector$1264;
    if ($$$cl1.isOfType(selector$1264,{t:$$$cl1.String})) {
        
        var case$1267=context$1265;
        if ($$$cl1.isOfType(context$1265,{t:'u', l:[{t:$$$cocjd958.Element},{t:JQuery}]})) {
            return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'427:18-427:23','jquery.ceylon'):jQuery)(case$1266.valueOf(),case$1267.$native));
        }else if ($$$cl1.isOfType(context$1265,{t:$$$cl1.Null})) {
            return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'430:18-430:23','jquery.ceylon'):jQuery)(case$1266.valueOf()));
        }
    }else if ($$$cl1.isOfType(selector$1264,{t:'u', l:[{t:JQuery},{t:$$$cocjl339.JSObject},{t:$$$cocjd958.Element}]})) {
        return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'434:17-434:22','jquery.ceylon'):jQuery)(case$1266.$native));
    }else if ($$$cl1.isOfType(selector$1264,{t:$$$cl1.Null})) {
        return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'437:17-437:22','jquery.ceylon'):jQuery)());
    }/*End dynamic block*/
}
exports.jq=jq;
jq.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cocjl339.JSObject},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjd958.Element}]}]},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cocjd958.Element},{t:'u', l:[{t:$$$cl1.Null},{t:JQuery}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jq']};};
function jqThis(){
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'444:16-444:21','jquery.ceylon'):jQuery)((typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'444:23-444:26','jquery.ceylon'):this)));
    /*End dynamic block*/
}
exports.jqThis=jqThis;
jqThis.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jqThis']};};
function jqElems(elems$1268){
    if(elems$1268===undefined){elems$1268=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'450:16-450:21','jquery.ceylon'):jQuery)((function(){
        var lst$1269=[];
        var it$1270=elems$1268.iterator();
        var elem$1271;
        while ((elem$1271=it$1270.next())!==$$$cl1.getFinished()){
            lst$1269.push(elem$1271.$native);
        }
        return $$$cl1.ArraySequence(lst$1269);
    }())));
    /*End dynamic block*/
}
exports.jqElems=jqElems;
jqElems.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elems',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequence,a:{Element:{t:$$$cocjd958.Element}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jqElems']};};
function JQueryAbs($$jQueryAbs){
    $init$JQueryAbs();
    if ($$jQueryAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$jQueryAbs);
    return $$jQueryAbs;
}
JQueryAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs']};};
exports.JQueryAbs=JQueryAbs;
function $init$JQueryAbs(){
    if (JQueryAbs.$$===undefined){
        $$$cl1.initTypeProto(JQueryAbs,'com.openswimsoftware.ceylon.js.jquery::JQueryAbs',$$$cocjl339.JSObjectAbs);
        (function($$jQueryAbs){
            $$jQueryAbs.add=function add(append$1272){
                var $$jQueryAbs=this;
                
                var case$1273=append$1272;
                if ($$$cl1.isOfType(append$1272,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.add(case$1273.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(append$1272,{t:JQuery})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.add(case$1273.$native));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'append',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','add']};};
            $$jQueryAbs.addElements=function addElements(elements$1274){
                var $$jQueryAbs=this;
                if(elements$1274===undefined){elements$1274=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.add((function(){
                    var lst$1275=[];
                    var it$1276=elements$1274.iterator();
                    var elem$1277;
                    while ((elem$1277=it$1276.next())!==$$$cl1.getFinished()){
                        lst$1275.push(elem$1277.$native);
                    }
                    return $$$cl1.ArraySequence(lst$1275);
                }())));
                /*End dynamic block*/
            };$$jQueryAbs.addElements.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elements',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequence,a:{Element:{t:$$$cocjd958.Element}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','addElements']};};
            $$jQueryAbs.addSelector$defs$context=function(selector$1278,context$1279){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.addSelector=function addSelector(selector$1278,context$1279){
                var $$jQueryAbs=this;
                if(context$1279===undefined){context$1279=$$jQueryAbs.addSelector$defs$context(selector$1278,context$1279);}
                /*Begin dynamic block*/
                var c$1280;
                if((c$1280=context$1279)!==null){
                    return JQuery($$jQueryAbs.$native.add(selector$1278.valueOf(),c$1280));
                }else {
                    return JQuery($$jQueryAbs.$native.add(selector$1278.valueOf()));
                }/*End dynamic block*/
            };$$jQueryAbs.addSelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjd958.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','addSelector']};};
            $$jQueryAbs.addBack$defs$selector=function(selector$1281){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.addBack=function addBack(selector$1281){
                var $$jQueryAbs=this;
                if(selector$1281===undefined){selector$1281=$$jQueryAbs.addBack$defs$selector(selector$1281);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.addBack(selector$1281));
                /*End dynamic block*/
            };$$jQueryAbs.addBack.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','addBack']};};
            $$jQueryAbs.addClass=function addClass(className$1282){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.addClass(className$1282.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.addClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','addClass']};};
            $$jQueryAbs.addClassCallback=function addClassCallback(callback$1283){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.addClass($$$cl1.$JsCallable(callback$1283,[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'currentClass',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]},Return:{t:$$$cl1.String}})));
                /*End dynamic block*/
            };$$jQueryAbs.addClassCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','addClassCallback']};};
            $$jQueryAbs.after=function after(content$1284){
                var $$jQueryAbs=this;
                if(content$1284===undefined){content$1284=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$$cocjl339.JSFunction($$jQueryAbs.$native.after).$apply(null,content$1284));
                /*End dynamic block*/
            };$$jQueryAbs.after.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','after']};};
            $$jQueryAbs.afterElements=function afterElements(content$1285){
                var $$jQueryAbs=this;
                if(content$1285===undefined){content$1285=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$$cocjl339.JSFunction($$jQueryAbs.$native.after).$apply(null,(function(){
                    var lst$1286=[];
                    var it$1287=content$1285.iterator();
                    var elem$1288;
                    while ((elem$1288=it$1287.next())!==$$$cl1.getFinished()){
                        lst$1286.push(elem$1288.$native);
                    }
                    return $$$cl1.ArraySequence(lst$1286);
                }())));
                /*End dynamic block*/
            };$$jQueryAbs.afterElements.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cocjd958.Element}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','afterElements']};};
            $$jQueryAbs.afterJQuery=function afterJQuery(content$1289){
                var $$jQueryAbs=this;
                if(content$1289===undefined){content$1289=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$$cocjl339.JSFunction($$jQueryAbs.$native.after).$apply(null,(function(){
                    var lst$1290=[];
                    var it$1291=content$1289.iterator();
                    var elem$1292;
                    while ((elem$1292=it$1291.next())!==$$$cl1.getFinished()){
                        lst$1290.push(elem$1292.$native);
                    }
                    return $$$cl1.ArraySequence(lst$1290);
                }())));
                /*End dynamic block*/
            };$$jQueryAbs.afterJQuery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:JQuery}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','afterJQuery']};};
            $$jQueryAbs.ajaxComplete=function ajaxComplete(handler$1293){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.ajaxComplete($$$cl1.$JsCallable(handler$1293,[],{Arguments:{t:'T', l:[{t:$$$cl1.Anything},{t:$$$cl1.Anything},{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.ajaxComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','ajaxComplete']};};
            $$jQueryAbs.ajaxError=function ajaxError(handler$1294){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.ajaxError($$$cl1.$JsCallable(handler$1294,[],{Arguments:{t:'T', l:[{t:$$$cl1.Anything},{t:$$$cl1.Anything},{t:$$$cl1.Anything},{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.ajaxError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','ajaxError']};};
            $$jQueryAbs.ajaxSend=function ajaxSend(handler$1295){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.ajaxSend($$$cl1.$JsCallable(handler$1295,[],{Arguments:{t:'T', l:[{t:$$$cl1.Anything},{t:$$$cl1.Anything},{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.ajaxSend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','ajaxSend']};};
            $$jQueryAbs.ajaxStart=function ajaxStart(handler$1296){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.ajaxStart($$$cl1.$JsCallable(handler$1296,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.ajaxStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','ajaxStart']};};
            $$jQueryAbs.ajaxStop=function ajaxStop(handler$1297){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.ajaxStop($$$cl1.$JsCallable(handler$1297,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.ajaxStop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','ajaxStop']};};
            $$jQueryAbs.ajaxSuccess=function ajaxSuccess(handler$1298){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.ajaxSuccess($$$cl1.$JsCallable(handler$1298,[],{Arguments:{t:'T', l:[{t:$$$cl1.Anything},{t:$$$cl1.Anything},{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.ajaxSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','ajaxSuccess']};};
            $$jQueryAbs.animate$defs$duration=function(properties$1299,duration$1300,easing$1301,complete$1302){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.animate$defs$easing=function(properties$1299,duration$1300,easing$1301,complete$1302){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.animate$defs$complete=function(properties$1299,duration$1300,easing$1301,complete$1302){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.animate=function animate(properties$1299,duration$1300,easing$1301,complete$1302){
                var $$jQueryAbs=this;
                if(duration$1300===undefined){duration$1300=$$jQueryAbs.animate$defs$duration(properties$1299,duration$1300,easing$1301,complete$1302);}
                if(easing$1301===undefined){easing$1301=$$jQueryAbs.animate$defs$easing(properties$1299,duration$1300,easing$1301,complete$1302);}
                if(complete$1302===undefined){complete$1302=$$jQueryAbs.animate$defs$complete(properties$1299,duration$1300,easing$1301,complete$1302);}
                var propertiesNative$1303=$$$cocjl339.createJSObject();
                var it$1304 = properties$1299.iterator();
                var item$1305;while ((item$1305=it$1304.next())!==$$$cl1.getFinished()){
                    var key$1306=item$1305.key;
                    var val$1307=item$1305.item;
                    /*Begin dynamic block*/
                    $$$cocjl339.objectDefineProperty(propertiesNative$1303,(tmpvar$1308=$$$cocjl339.createJSString(key$1306),$$$cl1.isOfType(tmpvar$1308,{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]})?tmpvar$1308:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'569:43-569:61','jquery.ceylon')),$$$cocjl339.DataDescriptor(true,false,true,true,val$1307));
                    /*End dynamic block*/
                }
                
                var case$1309=duration$1300;
                if ($$$cl1.isOfType(duration$1300,{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]})) {
                    
                    var case$1310=easing$1301;
                    if ($$$cl1.isOfType(easing$1301,{t:$$$cl1.String})) {
                        var c$1311;
                        if((c$1311=complete$1302)!==null){
                            /*Begin dynamic block*/
                            return JQuery($$jQueryAbs.$native.animate(propertiesNative$1303.$native,case$1309,case$1310.valueOf(),complete$1302));
                            /*End dynamic block*/
                        }else {
                            /*Begin dynamic block*/
                            return JQuery($$jQueryAbs.$native.animate(propertiesNative$1303.$native,case$1309,case$1310.valueOf()));
                            /*End dynamic block*/
                        }
                    }else if ($$$cl1.isOfType(easing$1301,{t:$$$cl1.Null})) {
                        var c$1312;
                        if((c$1312=complete$1302)!==null){
                            /*Begin dynamic block*/
                            return JQuery($$jQueryAbs.$native.animate(propertiesNative$1303.$native,case$1309,null,complete$1302));
                            /*End dynamic block*/
                        }else {
                            /*Begin dynamic block*/
                            return JQuery($$jQueryAbs.$native.animate(propertiesNative$1303.$native,case$1309));
                            /*End dynamic block*/
                        }
                    }
                }else if ($$$cl1.isOfType(duration$1300,{t:$$$cl1.Null})) {
                    
                    var case$1313=easing$1301;
                    if ($$$cl1.isOfType(easing$1301,{t:$$$cl1.String})) {
                        var c$1314;
                        if((c$1314=complete$1302)!==null){
                            /*Begin dynamic block*/
                            return JQuery($$jQueryAbs.$native.animate(propertiesNative$1303.$native,null,case$1313.valueOf(),complete$1302));
                            /*End dynamic block*/
                        }else {
                            /*Begin dynamic block*/
                            return JQuery($$jQueryAbs.$native.animate(propertiesNative$1303.$native,null,case$1313.valueOf()));
                            /*End dynamic block*/
                        }
                    }else if ($$$cl1.isOfType(easing$1301,{t:$$$cl1.Null})) {
                        var c$1315;
                        if((c$1315=complete$1302)!==null){
                            /*Begin dynamic block*/
                            return JQuery($$jQueryAbs.$native.animate(propertiesNative$1303.$native,null,null,complete$1302));
                            /*End dynamic block*/
                        }else {
                            /*Begin dynamic block*/
                            return JQuery($$jQueryAbs.$native.animate(propertiesNative$1303.$native));
                            /*End dynamic block*/
                        }
                    }
                }
            };$$jQueryAbs.animate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$an:function(){return[];}},{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','animate']};};
            $$jQueryAbs.animateOptions=function animateOptions(properties$1316,options$1317){
                var $$jQueryAbs=this;
                var propertiesNative$1318=$$$cocjl339.createJSObject();
                var it$1319 = properties$1316.iterator();
                var item$1320;while ((item$1320=it$1319.next())!==$$$cl1.getFinished()){
                    var key$1321=item$1320.key;
                    var val$1322=item$1320.item;
                    /*Begin dynamic block*/
                    $$$cocjl339.objectDefineProperty(propertiesNative$1318,(tmpvar$1323=$$$cocjl339.createJSString(key$1321),$$$cl1.isOfType(tmpvar$1323,{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]})?tmpvar$1323:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'629:43-629:61','jquery.ceylon')),$$$cocjl339.DataDescriptor(true,false,true,true,val$1322));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.animate(propertiesNative$1318.$native,options$1317.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.animateOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$an:function(){return[];}},{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','animateOptions']};};
            $$jQueryAbs.append=function append(content$1324){
                var $$jQueryAbs=this;
                if(content$1324===undefined){content$1324=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$$cocjl339.JSFunction($$jQueryAbs.$native.append).$apply(null,(function(){
                    var lst$1325=[];
                    var it$1326=content$1324.iterator();
                    var elem$1327;
                    while ((elem$1327=it$1326.next())!==$$$cl1.getFinished()){
                        lst$1325.push(elem$1327.$native);
                    }
                    return $$$cl1.ArraySequence(lst$1325);
                }())));
                /*End dynamic block*/
            };$$jQueryAbs.append.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:'u', l:[{t:$$$cocjd958.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','append']};};
            $$jQueryAbs.appendHTML=function appendHTML(content$1328){
                var $$jQueryAbs=this;
                if(content$1328===undefined){content$1328=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.append(content$1328));
                /*End dynamic block*/
            };$$jQueryAbs.appendHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','appendHTML']};};
            $$jQueryAbs.appendCallback=function appendCallback(callback$1329){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.append($$$cl1.$JsCallable(callback$1329,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.appendCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:$$$cl1.String}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','appendCallback']};};
            $$jQueryAbs.appendTo=function appendTo(target$1330){
                var $$jQueryAbs=this;
                
                var case$1331=target$1330;
                if ($$$cl1.isOfType(target$1330,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.appendTo(case$1331.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(target$1330,{t:'u', l:[{t:$$$cocjd958.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.appendTo(case$1331.$native));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.appendTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjd958.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','appendTo']};};
            $$jQueryAbs.getAttr=function getAttr(attributeName$1332){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$jQueryAbs.$native.attr(attributeName$1332.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.getAttr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getAttr']};};
            $$jQueryAbs.setAttr=function setAttr(attributeName$1333,val$1334){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.attr(attributeName$1333.valueOf(),val$1334));
                /*End dynamic block*/
            };$$jQueryAbs.setAttr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setAttr']};};
            $$jQueryAbs.setAttrEntries=function setAttrEntries(entries$1335){
                var $$jQueryAbs=this;
                if(entries$1335===undefined){entries$1335=$$$cl1.getEmpty();}
                var entriesNative$1336=$$$cocjl339.createJSObject();
                var it$1337 = entries$1335.iterator();
                var item$1338;while ((item$1338=it$1337.next())!==$$$cl1.getFinished()){
                    var key$1339=item$1338.key;
                    var val$1340=item$1338.item;
                    /*Begin dynamic block*/
                    $$$cocjl339.objectDefineProperty(entriesNative$1336,(tmpvar$1341=$$$cocjl339.createJSString(key$1339),$$$cl1.isOfType(tmpvar$1341,{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]})?tmpvar$1341:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'685:40-685:58','jquery.ceylon')),$$$cocjl339.DataDescriptor(true,false,true,true,val$1340));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.attr(entriesNative$1336));
                /*End dynamic block*/
            };$$jQueryAbs.setAttrEntries.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'entries',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setAttrEntries']};};
            $$jQueryAbs.setAttrCallback=function setAttrCallback(attributeName$1342,callback$1343){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.attr((typeof entriesNative==='undefined'||entriesNative===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: entriesNative")),'695:29-695:41','jquery.ceylon'):entriesNative),$$$cl1.$JsCallable(callback$1343,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.setAttrCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:$$$cl1.String}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setAttrCallback']};};
            $$jQueryAbs.before=function before(content$1344){
                var $$jQueryAbs=this;
                if(content$1344===undefined){content$1344=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$$cocjl339.JSFunction($$jQueryAbs.$native.before).$apply(null,(function(){
                    var lst$1345=[];
                    var it$1346=content$1344.iterator();
                    var elem$1347;
                    while ((elem$1347=it$1346.next())!==$$$cl1.getFinished()){
                        lst$1345.push(elem$1347.$native);
                    }
                    return $$$cl1.ArraySequence(lst$1345);
                }())));
                /*End dynamic block*/
            };$$jQueryAbs.before.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:'u', l:[{t:$$$cocjd958.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','before']};};
            $$jQueryAbs.beforeHTML=function beforeHTML(content$1348){
                var $$jQueryAbs=this;
                if(content$1348===undefined){content$1348=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.before(content$1348));
                /*End dynamic block*/
            };$$jQueryAbs.beforeHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','beforeHTML']};};
            $$jQueryAbs.beforeCallback=function beforeCallback(callback$1349){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.before($$$cl1.$JsCallable(callback$1349,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.beforeCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','beforeCallback']};};
            $$jQueryAbs.$bind$defs$eventData=function(eventType$1350,eventData$1351,preventBubble$1352){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.$bind$defs$preventBubble=function(eventType$1350,eventData$1351,preventBubble$1352){var $$jQueryAbs=this;
            return true;};
            $$jQueryAbs.$bind=function $bind(eventType$1350,eventData$1351,preventBubble$1352){
                var $$jQueryAbs=this;
                if(eventData$1351===undefined){eventData$1351=$$jQueryAbs.$bind$defs$eventData(eventType$1350,eventData$1351,preventBubble$1352);}
                if(preventBubble$1352===undefined){preventBubble$1352=$$jQueryAbs.$bind$defs$preventBubble(eventType$1350,eventData$1351,preventBubble$1352);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.bind(eventType$1350.valueOf(),eventData$1351,preventBubble$1352));
                /*End dynamic block*/
            };$$jQueryAbs.$bind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'preventBubble',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','bind']};};
            $$jQueryAbs.bindCallback=function bindCallback(eventType$1353,eventData$1354,handler$1355){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.bind(eventType$1353.valueOf(),eventData$1354,$$$cl1.$JsCallable(handler$1355,[],{Arguments:{t:'T', l:[{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.bindCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','bindCallback']};};
            $$jQueryAbs.bindEvents=function bindEvents(events$1356){
                var $$jQueryAbs=this;
                if(events$1356===undefined){events$1356=$$$cl1.getEmpty();}
                var eventsNative$1357=$$$cocjl339.createJSObject();
                var it$1358 = events$1356.iterator();
                var item$1359;while ((item$1359=it$1358.next())!==$$$cl1.getFinished()){
                    var key$1360=item$1359.key;
                    var val$1361=item$1359.item;
                    /*Begin dynamic block*/
                    $$$cocjl339.objectDefineProperty(eventsNative$1357,(tmpvar$1362=$$$cocjl339.createJSString(key$1360),$$$cl1.isOfType(tmpvar$1362,{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]})?tmpvar$1362:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'733:39-733:57','jquery.ceylon')),$$$cocjl339.DataDescriptor(true,false,true,true,$$$cl1.$JsCallable(val$1361,[],{Arguments:{t:'T', l:[{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}})));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.bind(eventsNative$1357));
                /*End dynamic block*/
            };$$jQueryAbs.bindEvents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','bindEvents']};};
            $$jQueryAbs.blur$defs$eventData=function(eventData$1363,handler$1364){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.blur$defs$handler=function(eventData$1363,handler$1364){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.blur=function blur(eventData$1363,handler$1364){
                var $$jQueryAbs=this;
                if(eventData$1363===undefined){eventData$1363=$$jQueryAbs.blur$defs$eventData(eventData$1363,handler$1364);}
                if(handler$1364===undefined){handler$1364=$$jQueryAbs.blur$defs$handler(eventData$1363,handler$1364);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.blur(eventData$1363,handler$1364));
                /*End dynamic block*/
            };$$jQueryAbs.blur.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','blur']};};
            $$jQueryAbs.change$defs$eventData=function(eventData$1365,handler$1366){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.change$defs$handler=function(eventData$1365,handler$1366){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.change=function change(eventData$1365,handler$1366){
                var $$jQueryAbs=this;
                if(eventData$1365===undefined){eventData$1365=$$jQueryAbs.change$defs$eventData(eventData$1365,handler$1366);}
                if(handler$1366===undefined){handler$1366=$$jQueryAbs.change$defs$handler(eventData$1365,handler$1366);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.blur(eventData$1365,handler$1366));
                /*End dynamic block*/
            };$$jQueryAbs.change.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','change']};};
            $$jQueryAbs.children$defs$selector=function(selector$1367){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.children=function children(selector$1367){
                var $$jQueryAbs=this;
                if(selector$1367===undefined){selector$1367=$$jQueryAbs.children$defs$selector(selector$1367);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.children(selector$1367));
                /*End dynamic block*/
            };$$jQueryAbs.children.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','children']};};
            $$jQueryAbs.clearQueue$defs$queueName=function(queueName$1368){var $$jQueryAbs=this;
            return $$$cl1.String("fx",2);};
            $$jQueryAbs.clearQueue=function clearQueue(queueName$1368){
                var $$jQueryAbs=this;
                if(queueName$1368===undefined){queueName$1368=$$jQueryAbs.clearQueue$defs$queueName(queueName$1368);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.clearQueue(queueName$1368.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.clearQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','clearQueue']};};
            $$jQueryAbs.click$defs$eventData=function(eventData$1369,handler$1370){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.click$defs$handler=function(eventData$1369,handler$1370){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.click=function click(eventData$1369,handler$1370){
                var $$jQueryAbs=this;
                if(eventData$1369===undefined){eventData$1369=$$jQueryAbs.click$defs$eventData(eventData$1369,handler$1370);}
                if(handler$1370===undefined){handler$1370=$$jQueryAbs.click$defs$handler(eventData$1369,handler$1370);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.click(eventData$1369,handler$1370));
                /*End dynamic block*/
            };$$jQueryAbs.click.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','click']};};
            $$jQueryAbs.clone$defs$withDataAndEvents=function(withDataAndEvents$1371,deepWithDataAndEvents$1372){var $$jQueryAbs=this;
            return false;};
            $$jQueryAbs.clone$defs$deepWithDataAndEvents=function(withDataAndEvents$1371,deepWithDataAndEvents$1372){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.clone=function clone(withDataAndEvents$1371,deepWithDataAndEvents$1372){
                var $$jQueryAbs=this;
                if(withDataAndEvents$1371===undefined){withDataAndEvents$1371=$$jQueryAbs.clone$defs$withDataAndEvents(withDataAndEvents$1371,deepWithDataAndEvents$1372);}
                if(deepWithDataAndEvents$1372===undefined){deepWithDataAndEvents$1372=$$jQueryAbs.clone$defs$deepWithDataAndEvents(withDataAndEvents$1371,deepWithDataAndEvents$1372);}
                var deep$1373;
                if((deep$1373=deepWithDataAndEvents$1372)!==null){
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.clone(withDataAndEvents$1371,deep$1373));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.clone(withDataAndEvents$1371));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.clone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'withDataAndEvents',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'deepWithDataAndEvents',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','clone']};};
            $$jQueryAbs.closest$defs$context=function(selector$1374,context$1375){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.closest=function closest(selector$1374,context$1375){
                var $$jQueryAbs=this;
                if(context$1375===undefined){context$1375=$$jQueryAbs.closest$defs$context(selector$1374,context$1375);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.closest(selector$1374.valueOf(),context$1375));
                /*End dynamic block*/
            };$$jQueryAbs.closest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjd958.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','closest']};};
            $$jQueryAbs.closestElement=function closestElement(elem$1376){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.closest(elem$1376.$native));
                /*End dynamic block*/
            };$$jQueryAbs.closestElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elem',$mt:'prm',$t:{t:$$$cocjd958.Element},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','closestElement']};};
            $$jQueryAbs.closestjQuery=function closestjQuery(jq$1377){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.closest(jq$1377.$native));
                /*End dynamic block*/
            };$$jQueryAbs.closestjQuery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'jq',$mt:'prm',$t:{t:JQuery},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','closestjQuery']};};
            $$jQueryAbs.contents=function contents(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.contents());
                /*End dynamic block*/
            };$$jQueryAbs.contents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','contents']};};
            $$jQueryAbs.getCss=function getCss(properties$1378){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$jQueryAbs.$native.css(properties$1378));
                /*End dynamic block*/
            };$$jQueryAbs.getCss.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[{$nm:'properties',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getCss']};};
            $$jQueryAbs.setCss=function setCss(property$1379,val$1380){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.css(property$1379.valueOf(),val$1380));
                /*End dynamic block*/
            };$$jQueryAbs.setCss.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Number}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setCss']};};
            $$jQueryAbs.setCssCallback=function setCssCallback(property$1381,callback$1382){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.css(property$1381.valueOf(),$$$cl1.$JsCallable(callback$1382,[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]},Return:{t:$$$cl1.String}})));
                /*End dynamic block*/
            };$$jQueryAbs.setCssCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setCssCallback']};};
            $$jQueryAbs.setCssJson=function setCssJson(property$1383,val$1384){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.css(property$1383.valueOf(),val$1384.$native));
                /*End dynamic block*/
            };$$jQueryAbs.setCssJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cocjj639.JSJSON},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setCssJson']};};
            $$jQueryAbs.setData=function setData(key$1385,data$1386){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.data(key$1385.valueOf(),data$1386.$native));
                /*End dynamic block*/
            };$$jQueryAbs.setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setData']};};
            $$jQueryAbs.setDataEntries=function setDataEntries(events$1387){
                var $$jQueryAbs=this;
                if(events$1387===undefined){events$1387=$$$cl1.getEmpty();}
                var dataNative$1388=$$$cocjl339.createJSObject();
                var it$1389 = events$1387.iterator();
                var item$1390;while ((item$1390=it$1389.next())!==$$$cl1.getFinished()){
                    var key$1391=item$1390.key;
                    var val$1392=item$1390.item;
                    /*Begin dynamic block*/
                    $$$cocjl339.objectDefineProperty(dataNative$1388,(tmpvar$1393=$$$cocjl339.createJSString(key$1391),$$$cl1.isOfType(tmpvar$1393,{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]})?tmpvar$1393:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'841:37-841:55','jquery.ceylon')),$$$cocjl339.DataDescriptor(true,false,true,true,val$1392.$native));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.data(dataNative$1388));
                /*End dynamic block*/
            };$$jQueryAbs.setDataEntries.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cocjl339.JSObject}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setDataEntries']};};
            $$jQueryAbs.getData$defs$key=function(key$1394){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.getData=function getData(key$1394){
                var $$jQueryAbs=this;
                if(key$1394===undefined){key$1394=$$jQueryAbs.getData$defs$key(key$1394);}
                var k$1395;
                if((k$1395=key$1394)!==null){
                    /*Begin dynamic block*/
                    return $$$cocjl339.JSObject($$jQueryAbs.$native.data(key$1394));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return $$$cocjl339.JSObject($$jQueryAbs.$native.data());
                    /*End dynamic block*/
                }
            };$$jQueryAbs.getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSObject},$ps:[{$nm:'key',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getData']};};
            $$jQueryAbs.dblclick$defs$eventData=function(eventData$1396,handler$1397){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.dblclick$defs$handler=function(eventData$1396,handler$1397){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.dblclick=function dblclick(eventData$1396,handler$1397){
                var $$jQueryAbs=this;
                if(eventData$1396===undefined){eventData$1396=$$jQueryAbs.dblclick$defs$eventData(eventData$1396,handler$1397);}
                if(handler$1397===undefined){handler$1397=$$jQueryAbs.dblclick$defs$handler(eventData$1396,handler$1397);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.blur(eventData$1396,handler$1397));
                /*End dynamic block*/
            };$$jQueryAbs.dblclick.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','dblclick']};};
            $$jQueryAbs.delay$defs$queueName=function(duration$1398,queueName$1399){var $$jQueryAbs=this;
            return $$$cl1.String("fx",2);};
            $$jQueryAbs.delay=function delay(duration$1398,queueName$1399){
                var $$jQueryAbs=this;
                if(queueName$1399===undefined){queueName$1399=$$jQueryAbs.delay$defs$queueName(duration$1398,queueName$1399);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.delay(duration$1398,queueName$1399.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.delay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','delay']};};
            $$jQueryAbs.delegate$defs$eventData=function(selector$1400,eventType$1401,eventData$1402,handler$1403){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.delegate$defs$handler=function(selector$1400,eventType$1401,eventData$1402,handler$1403){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.delegate=function delegate(selector$1400,eventType$1401,eventData$1402,handler$1403){
                var $$jQueryAbs=this;
                if(eventData$1402===undefined){eventData$1402=$$jQueryAbs.delegate$defs$eventData(selector$1400,eventType$1401,eventData$1402,handler$1403);}
                if(handler$1403===undefined){handler$1403=$$jQueryAbs.delegate$defs$handler(selector$1400,eventType$1401,eventData$1402,handler$1403);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.delegate(selector$1400.valueOf(),eventType$1401.valueOf(),eventData$1402,handler$1403));
                /*End dynamic block*/
            };$$jQueryAbs.delegate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','delegate']};};
            $$jQueryAbs.delegateEvents=function delegateEvents(selector$1404,events$1405){
                var $$jQueryAbs=this;
                if(events$1405===undefined){events$1405=$$$cl1.getEmpty();}
                var eventsNative$1406=$$$cocjl339.createJSObject();
                var it$1407 = events$1405.iterator();
                var item$1408;while ((item$1408=it$1407.next())!==$$$cl1.getFinished()){
                    var key$1409=item$1408.key;
                    var val$1410=item$1408.item;
                    /*Begin dynamic block*/
                    $$$cocjl339.objectDefineProperty(eventsNative$1406,(tmpvar$1411=$$$cocjl339.createJSString(key$1409),$$$cl1.isOfType(tmpvar$1411,{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]})?tmpvar$1411:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'883:39-883:57','jquery.ceylon')),$$$cocjl339.DataDescriptor(true,false,true,true,$$$cl1.$JsCallable(val$1410,[],{Arguments:{t:'T', l:[{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}})));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.delegate(selector$1404.valueOf(),eventsNative$1406));
                /*End dynamic block*/
            };$$jQueryAbs.delegateEvents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'events',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','delegateEvents']};};
            $$jQueryAbs.dequeue$defs$queueName=function(queueName$1412){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.dequeue=function dequeue(queueName$1412){
                var $$jQueryAbs=this;
                if(queueName$1412===undefined){queueName$1412=$$jQueryAbs.dequeue$defs$queueName(queueName$1412);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.dequeue(queueName$1412));
                /*End dynamic block*/
            };$$jQueryAbs.dequeue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','dequeue']};};
            $$jQueryAbs.detach$defs$selector=function(selector$1413){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.detach=function detach(selector$1413){
                var $$jQueryAbs=this;
                if(selector$1413===undefined){selector$1413=$$jQueryAbs.detach$defs$selector(selector$1413);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.detach(selector$1413));
                /*End dynamic block*/
            };$$jQueryAbs.detach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','detach']};};
            $$jQueryAbs.die$defs$eventData=function(eventData$1414,handler$1415){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.die$defs$handler=function(eventData$1414,handler$1415){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.die=function die(eventData$1414,handler$1415){
                var $$jQueryAbs=this;
                if(eventData$1414===undefined){eventData$1414=$$jQueryAbs.die$defs$eventData(eventData$1414,handler$1415);}
                if(handler$1415===undefined){handler$1415=$$jQueryAbs.die$defs$handler(eventData$1414,handler$1415);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.die(eventData$1414,handler$1415));
                /*End dynamic block*/
            };$$jQueryAbs.die.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','die']};};
            $$jQueryAbs.each=function each(handler$1416){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.each($$$cl1.$JsCallable(handler$1416,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer},{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.each.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','each']};};
            $$jQueryAbs.empty=function empty(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.empty());
                /*End dynamic block*/
            };$$jQueryAbs.empty.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','empty']};};
            $$jQueryAbs.end=function end(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.end());
                /*End dynamic block*/
            };$$jQueryAbs.end.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','end']};};
            $$jQueryAbs.eq=function eq(index$1417){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.eq(index$1417));
                /*End dynamic block*/
            };$$jQueryAbs.eq.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','eq']};};
            $$jQueryAbs.error$defs$eventData=function(eventData$1418,handler$1419){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.error$defs$handler=function(eventData$1418,handler$1419){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.error=function error(eventData$1418,handler$1419){
                var $$jQueryAbs=this;
                if(eventData$1418===undefined){eventData$1418=$$jQueryAbs.error$defs$eventData(eventData$1418,handler$1419);}
                if(handler$1419===undefined){handler$1419=$$jQueryAbs.error$defs$handler(eventData$1418,handler$1419);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.error(eventData$1418,handler$1419));
                /*End dynamic block*/
            };$$jQueryAbs.error.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','error']};};
            $$jQueryAbs.fadeIn$defs$duration=function(duration$1420,easing$1421,complete$1422){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeIn$defs$easing=function(duration$1420,easing$1421,complete$1422){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeIn$defs$complete=function(duration$1420,easing$1421,complete$1422){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeIn=function fadeIn(duration$1420,easing$1421,complete$1422){
                var $$jQueryAbs=this;
                if(duration$1420===undefined){duration$1420=$$jQueryAbs.fadeIn$defs$duration(duration$1420,easing$1421,complete$1422);}
                if(easing$1421===undefined){easing$1421=$$jQueryAbs.fadeIn$defs$easing(duration$1420,easing$1421,complete$1422);}
                if(complete$1422===undefined){complete$1422=$$jQueryAbs.fadeIn$defs$complete(duration$1420,easing$1421,complete$1422);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.fadeIn(duration$1420,easing$1421,complete$1422));
                /*End dynamic block*/
            };$$jQueryAbs.fadeIn.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','fadeIn']};};
            $$jQueryAbs.fadeInOptions=function fadeInOptions(options$1423){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.fadeOut(options$1423.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.fadeInOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','fadeInOptions']};};
            $$jQueryAbs.fadeOut$defs$duration=function(duration$1424,easing$1425,complete$1426){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeOut$defs$easing=function(duration$1424,easing$1425,complete$1426){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeOut$defs$complete=function(duration$1424,easing$1425,complete$1426){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeOut=function fadeOut(duration$1424,easing$1425,complete$1426){
                var $$jQueryAbs=this;
                if(duration$1424===undefined){duration$1424=$$jQueryAbs.fadeOut$defs$duration(duration$1424,easing$1425,complete$1426);}
                if(easing$1425===undefined){easing$1425=$$jQueryAbs.fadeOut$defs$easing(duration$1424,easing$1425,complete$1426);}
                if(complete$1426===undefined){complete$1426=$$jQueryAbs.fadeOut$defs$complete(duration$1424,easing$1425,complete$1426);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.fadeOut(duration$1424,easing$1425,complete$1426));
                /*End dynamic block*/
            };$$jQueryAbs.fadeOut.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','fadeOut']};};
            $$jQueryAbs.fadeOutOptions=function fadeOutOptions(options$1427){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.fadeOut(options$1427.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.fadeOutOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','fadeOutOptions']};};
            $$jQueryAbs.fadeTo$defs$easing=function(duration$1428,opacity$1429,easing$1430,complete$1431){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeTo$defs$complete=function(duration$1428,opacity$1429,easing$1430,complete$1431){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeTo=function fadeTo(duration$1428,opacity$1429,easing$1430,complete$1431){
                var $$jQueryAbs=this;
                if(easing$1430===undefined){easing$1430=$$jQueryAbs.fadeTo$defs$easing(duration$1428,opacity$1429,easing$1430,complete$1431);}
                if(complete$1431===undefined){complete$1431=$$jQueryAbs.fadeTo$defs$complete(duration$1428,opacity$1429,easing$1430,complete$1431);}
                /*Begin dynamic block*/
                $$jQueryAbs.$native.fadeTo(duration$1428,opacity$1429.valueOf(),easing$1430,complete$1431);
                /*End dynamic block*/
            };$$jQueryAbs.fadeTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'duration',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]},$an:function(){return[];}},{$nm:'opacity',$mt:'prm',$t:{t:$$$cl1.Float},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','fadeTo']};};
            $$jQueryAbs.fadeToggle$defs$duration=function(duration$1432,easing$1433,complete$1434){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeToggle$defs$easing=function(duration$1432,easing$1433,complete$1434){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeToggle$defs$complete=function(duration$1432,easing$1433,complete$1434){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeToggle=function fadeToggle(duration$1432,easing$1433,complete$1434){
                var $$jQueryAbs=this;
                if(duration$1432===undefined){duration$1432=$$jQueryAbs.fadeToggle$defs$duration(duration$1432,easing$1433,complete$1434);}
                if(easing$1433===undefined){easing$1433=$$jQueryAbs.fadeToggle$defs$easing(duration$1432,easing$1433,complete$1434);}
                if(complete$1434===undefined){complete$1434=$$jQueryAbs.fadeToggle$defs$complete(duration$1432,easing$1433,complete$1434);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.fadeOut(duration$1432,easing$1433,complete$1434));
                /*End dynamic block*/
            };$$jQueryAbs.fadeToggle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','fadeToggle']};};
            $$jQueryAbs.fadeToggleOptions=function fadeToggleOptions(options$1435){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.fadeOut(options$1435.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.fadeToggleOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','fadeToggleOptions']};};
            $$jQueryAbs.filter=function filter(selector$1436){
                var $$jQueryAbs=this;
                
                var case$1437=selector$1436;
                if ($$$cl1.isOfType(selector$1436,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.filter(case$1437.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(selector$1436,{t:'u', l:[{t:$$$cocjd958.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.filter(case$1437.$native));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjd958.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','filter']};};
            $$jQueryAbs.filterCallback=function filterCallback(callback$1438){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.filter($$$cl1.$JsCallable(callback$1438,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.filterCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','filterCallback']};};
            $$jQueryAbs.find=function find(selector$1439){
                var $$jQueryAbs=this;
                
                var case$1440=selector$1439;
                if ($$$cl1.isOfType(selector$1439,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.find(case$1440.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(selector$1439,{t:'u', l:[{t:$$$cocjd958.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.find(case$1440.$native));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.find.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjd958.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','find']};};
            $$jQueryAbs.finish=function finish(queue$1441){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.finish((typeof ueue==='undefined'||ueue===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: ueue")),'1017:31-1017:34','jquery.ceylon'):ueue)));
                /*End dynamic block*/
            };$$jQueryAbs.finish.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queue',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','finish']};};
            $$jQueryAbs.first=function first(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.first());
                /*End dynamic block*/
            };$$jQueryAbs.first.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','first']};};
            $$jQueryAbs.focus$defs$eventData=function(eventData$1442,handler$1443){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.focus$defs$handler=function(eventData$1442,handler$1443){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.focus=function focus(eventData$1442,handler$1443){
                var $$jQueryAbs=this;
                if(eventData$1442===undefined){eventData$1442=$$jQueryAbs.focus$defs$eventData(eventData$1442,handler$1443);}
                if(handler$1443===undefined){handler$1443=$$jQueryAbs.focus$defs$handler(eventData$1442,handler$1443);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.focus(eventData$1442,handler$1443));
                /*End dynamic block*/
            };$$jQueryAbs.focus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','focus']};};
            $$jQueryAbs.focusin$defs$eventData=function(eventData$1444,handler$1445){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.focusin$defs$handler=function(eventData$1444,handler$1445){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.focusin=function focusin(eventData$1444,handler$1445){
                var $$jQueryAbs=this;
                if(eventData$1444===undefined){eventData$1444=$$jQueryAbs.focusin$defs$eventData(eventData$1444,handler$1445);}
                if(handler$1445===undefined){handler$1445=$$jQueryAbs.focusin$defs$handler(eventData$1444,handler$1445);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.focusin(eventData$1444,handler$1445));
                /*End dynamic block*/
            };$$jQueryAbs.focusin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','focusin']};};
            $$jQueryAbs.focusout$defs$eventData=function(eventData$1446,handler$1447){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.focusout$defs$handler=function(eventData$1446,handler$1447){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.focusout=function focusout(eventData$1446,handler$1447){
                var $$jQueryAbs=this;
                if(eventData$1446===undefined){eventData$1446=$$jQueryAbs.focusout$defs$eventData(eventData$1446,handler$1447);}
                if(handler$1447===undefined){handler$1447=$$jQueryAbs.focusout$defs$handler(eventData$1446,handler$1447);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.focusout(eventData$1446,handler$1447));
                /*End dynamic block*/
            };$$jQueryAbs.focusout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','focusout']};};
            $$jQueryAbs.$get$defs$index=function(index$1448){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.$get=function $get(index$1448){
                var $$jQueryAbs=this;
                if(index$1448===undefined){index$1448=$$jQueryAbs.$get$defs$index(index$1448);}
                /*Begin dynamic block*/
                return $$$cocjd958.Element($$jQueryAbs.$native.get(index$1448));
                /*End dynamic block*/
            };$$jQueryAbs.$get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjd958.Element},$ps:[{$nm:'index',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','get']};};
            $$jQueryAbs.has=function has(selector$1449){
                var $$jQueryAbs=this;
                
                var case$1450=selector$1449;
                if ($$$cl1.isOfType(selector$1449,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.has(case$1450.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(selector$1449,{t:$$$cocjd958.Element})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.has(case$1450.$native));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.has.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjd958.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','has']};};
            $$jQueryAbs.hasClass=function hasClass(className$1451){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAbs.$native.hasClass(className$1451.valueOf())){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAbs.hasClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','hasClass']};};
            $$jQueryAbs.getHeight=function getHeight(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$jQueryAbs.$native.height());
                /*End dynamic block*/
            };$$jQueryAbs.getHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getHeight']};};
            $$jQueryAbs.setHeight=function setHeight(val$1452){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.height(val$1452));
                /*End dynamic block*/
            };$$jQueryAbs.setHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setHeight']};};
            $$jQueryAbs.setHeightCallback=function setHeightCallback(callback$1453){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.height($$$cl1.$JsCallable(callback$1453,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer},{t:$$$cl1.Integer}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.setHeightCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:$$$cl1.Integer}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setHeightCallback']};};
            $$jQueryAbs.hide$defs$duration=function(duration$1454,easing$1455,complete$1456){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.hide$defs$easing=function(duration$1454,easing$1455,complete$1456){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.hide$defs$complete=function(duration$1454,easing$1455,complete$1456){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.hide=function hide(duration$1454,easing$1455,complete$1456){
                var $$jQueryAbs=this;
                if(duration$1454===undefined){duration$1454=$$jQueryAbs.hide$defs$duration(duration$1454,easing$1455,complete$1456);}
                if(easing$1455===undefined){easing$1455=$$jQueryAbs.hide$defs$easing(duration$1454,easing$1455,complete$1456);}
                if(complete$1456===undefined){complete$1456=$$jQueryAbs.hide$defs$complete(duration$1454,easing$1455,complete$1456);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.hide(duration$1454,easing$1455,complete$1456));
                /*End dynamic block*/
            };$$jQueryAbs.hide.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','hide']};};
            $$jQueryAbs.hideOptions=function hideOptions(options$1457){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.hide(options$1457.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.hideOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','hideOptions']};};
            $$jQueryAbs.hover=function hover(handlerIn$1458,handlerOut$1459){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.hover($$$cl1.$JsCallable(handlerIn$1458,[],{Arguments:{t:'T', l:[{t:JQueryEvent}]},Return:{t:$$$cl1.Anything}}),$$$cl1.$JsCallable(handlerOut$1459,[],{Arguments:{t:'T', l:[{t:JQueryEvent}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.hover.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handlerIn',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:JQueryEvent}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'handlerOut',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:JQueryEvent}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','hover']};};
            $$jQueryAbs.hoverSingle=function hoverSingle(handlerInOut$1460){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.hover($$$cl1.$JsCallable(handlerInOut$1460,[],{Arguments:{t:'T', l:[{t:JQueryEvent}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.hoverSingle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handlerInOut',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:JQueryEvent}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','hoverSingle']};};
            $$jQueryAbs.getHtml=function getHtml(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$jQueryAbs.$native.html());
                /*End dynamic block*/
            };$$jQueryAbs.getHtml.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getHtml']};};
            $$jQueryAbs.setHtml=function setHtml(html$1461){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$jQueryAbs.$native.html(html$1461.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.setHtml.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[{$nm:'html',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setHtml']};};
            $$jQueryAbs.setHtmlCallback=function setHtmlCallback(callback$1462){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$jQueryAbs.$native.html($$$cl1.$JsCallable(callback$1462,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]},Return:{t:$$$cl1.String}})));
                /*End dynamic block*/
            };$$jQueryAbs.setHtmlCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:$$$cl1.String}}]},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setHtmlCallback']};};
            $$jQueryAbs.index=function index(selector$1463){
                var $$jQueryAbs=this;
                
                var case$1464=selector$1463;
                if ($$$cl1.isOfType(selector$1463,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return $$$cocjl339.JSNumber($$jQueryAbs.$native.index(case$1464.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(selector$1463,{t:'u', l:[{t:$$$cocjd958.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return $$$cocjl339.JSNumber($$jQueryAbs.$native.index(case$1464.$native));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.index.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[{$nm:'selector',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjd958.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','index']};};
            $$jQueryAbs.innerHeight=function innerHeight(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$jQueryAbs.$native.innerHeight());
                /*End dynamic block*/
            };$$jQueryAbs.innerHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','innerHeight']};};
            $$jQueryAbs.innerWidth=function innerWidth(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$jQueryAbs.$native.innerWidth());
                /*End dynamic block*/
            };$$jQueryAbs.innerWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','innerWidth']};};
            $$jQueryAbs.insertAfter=function insertAfter(target$1465){
                var $$jQueryAbs=this;
                
                var case$1466=target$1465;
                if ($$$cl1.isOfType(target$1465,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.insertAfter(case$1466.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(target$1465,{t:'u', l:[{t:$$$cocjd958.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.insertAfter(case$1466.$native));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.insertAfter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjd958.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','insertAfter']};};
            $$jQueryAbs.insertBefore=function insertBefore(target$1467){
                var $$jQueryAbs=this;
                
                var case$1468=target$1467;
                if ($$$cl1.isOfType(target$1467,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.insertBefore(case$1468.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(target$1467,{t:'u', l:[{t:$$$cocjd958.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.insertBefore(case$1468.$native));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.insertBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjd958.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','insertBefore']};};
            $$jQueryAbs.isSelector=function isSelector(selector$1469){
                var $$jQueryAbs=this;
                
                var case$1470=selector$1469;
                if ($$$cl1.isOfType(selector$1469,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    if($$jQueryAbs.$native.is(case$1470.valueOf())){
                        return true;
                    }else {
                        return false;
                    }/*End dynamic block*/
                }else if ($$$cl1.isOfType(selector$1469,{t:'u', l:[{t:$$$cocjd958.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    if($$jQueryAbs.$native.is(case$1470.$native)){
                        return true;
                    }else {
                        return false;
                    }/*End dynamic block*/
                }
            };$$jQueryAbs.isSelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'selector',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjd958.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','isSelector']};};
            $$jQueryAbs.isCallback=function isCallback(callback$1471){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAbs.$native.is($$$cl1.$JsCallable(callback$1471,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer}]},Return:{t:$$$cl1.Boolean}}))){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAbs.isCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}}]},Return:{t:$$$cl1.Boolean}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','isCallback']};};
            $$jQueryAbs.jquery=function jquery(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$jQueryAbs.$native.jquery);
                /*End dynamic block*/
            };$$jQueryAbs.jquery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','jquery']};};
            $$jQueryAbs.keydown$defs$eventData=function(eventData$1472,handler$1473){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.keydown$defs$handler=function(eventData$1472,handler$1473){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.keydown=function keydown(eventData$1472,handler$1473){
                var $$jQueryAbs=this;
                if(eventData$1472===undefined){eventData$1472=$$jQueryAbs.keydown$defs$eventData(eventData$1472,handler$1473);}
                if(handler$1473===undefined){handler$1473=$$jQueryAbs.keydown$defs$handler(eventData$1472,handler$1473);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.keydown(eventData$1472,handler$1473));
                /*End dynamic block*/
            };$$jQueryAbs.keydown.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','keydown']};};
            $$jQueryAbs.keypress$defs$eventData=function(eventData$1474,handler$1475){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.keypress$defs$handler=function(eventData$1474,handler$1475){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.keypress=function keypress(eventData$1474,handler$1475){
                var $$jQueryAbs=this;
                if(eventData$1474===undefined){eventData$1474=$$jQueryAbs.keypress$defs$eventData(eventData$1474,handler$1475);}
                if(handler$1475===undefined){handler$1475=$$jQueryAbs.keypress$defs$handler(eventData$1474,handler$1475);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.keypress(eventData$1474,handler$1475));
                /*End dynamic block*/
            };$$jQueryAbs.keypress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','keypress']};};
            $$jQueryAbs.keyup$defs$eventData=function(eventData$1476,handler$1477){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.keyup$defs$handler=function(eventData$1476,handler$1477){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.keyup=function keyup(eventData$1476,handler$1477){
                var $$jQueryAbs=this;
                if(eventData$1476===undefined){eventData$1476=$$jQueryAbs.keyup$defs$eventData(eventData$1476,handler$1477);}
                if(handler$1477===undefined){handler$1477=$$jQueryAbs.keyup$defs$handler(eventData$1476,handler$1477);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.keyup(eventData$1476,handler$1477));
                /*End dynamic block*/
            };$$jQueryAbs.keyup.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','keyup']};};
            $$jQueryAbs.last=function last(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.last());
                /*End dynamic block*/
            };$$jQueryAbs.last.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','last']};};
            $$jQueryAbs.resizeTrigger=function resizeTrigger(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                $$jQueryAbs.$native.resize();
                /*End dynamic block*/
            };$$jQueryAbs.resizeTrigger.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','resizeTrigger']};};
            $$jQueryAbs.length=function length(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$jQueryAbs.$native.length);
                /*End dynamic block*/
            };$$jQueryAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','length']};};
            $$jQueryAbs.load=function load(url$1478,data$1479,complete$1480){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.load(url$1478.valueOf(),data$1479,$$$cl1.$JsCallable(complete$1480,[],{Arguments:{t:'T', l:[{t:$$$cl1.String},{t:$$$cl1.String},{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.load.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.String}},{$t:{t:$$$cl1.String}},{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','load']};};
            $$jQueryAbs.map=function map(callback$1481){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.map($$$cl1.$JsCallable(callback$1481,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer},{t:$$$cocjd958.Element}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.map.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:$$$cocjd958.Element}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','map']};};
            $$jQueryAbs.mousedown$defs$eventData=function(eventData$1482,handler$1483){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mousedown$defs$handler=function(eventData$1482,handler$1483){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mousedown=function mousedown(eventData$1482,handler$1483){
                var $$jQueryAbs=this;
                if(eventData$1482===undefined){eventData$1482=$$jQueryAbs.mousedown$defs$eventData(eventData$1482,handler$1483);}
                if(handler$1483===undefined){handler$1483=$$jQueryAbs.mousedown$defs$handler(eventData$1482,handler$1483);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.mousedown(eventData$1482,handler$1483));
                /*End dynamic block*/
            };$$jQueryAbs.mousedown.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','mousedown']};};
            $$jQueryAbs.mouseenter$defs$eventData=function(eventData$1484,handler$1485){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseenter$defs$handler=function(eventData$1484,handler$1485){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseenter=function mouseenter(eventData$1484,handler$1485){
                var $$jQueryAbs=this;
                if(eventData$1484===undefined){eventData$1484=$$jQueryAbs.mouseenter$defs$eventData(eventData$1484,handler$1485);}
                if(handler$1485===undefined){handler$1485=$$jQueryAbs.mouseenter$defs$handler(eventData$1484,handler$1485);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.mouseenter(eventData$1484,handler$1485));
                /*End dynamic block*/
            };$$jQueryAbs.mouseenter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','mouseenter']};};
            $$jQueryAbs.mouseleave$defs$eventData=function(eventData$1486,handler$1487){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseleave$defs$handler=function(eventData$1486,handler$1487){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseleave=function mouseleave(eventData$1486,handler$1487){
                var $$jQueryAbs=this;
                if(eventData$1486===undefined){eventData$1486=$$jQueryAbs.mouseleave$defs$eventData(eventData$1486,handler$1487);}
                if(handler$1487===undefined){handler$1487=$$jQueryAbs.mouseleave$defs$handler(eventData$1486,handler$1487);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.mouseleave(eventData$1486,handler$1487));
                /*End dynamic block*/
            };$$jQueryAbs.mouseleave.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','mouseleave']};};
            $$jQueryAbs.mousemove$defs$eventData=function(eventData$1488,handler$1489){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mousemove$defs$handler=function(eventData$1488,handler$1489){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mousemove=function mousemove(eventData$1488,handler$1489){
                var $$jQueryAbs=this;
                if(eventData$1488===undefined){eventData$1488=$$jQueryAbs.mousemove$defs$eventData(eventData$1488,handler$1489);}
                if(handler$1489===undefined){handler$1489=$$jQueryAbs.mousemove$defs$handler(eventData$1488,handler$1489);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.mousemove(eventData$1488,handler$1489));
                /*End dynamic block*/
            };$$jQueryAbs.mousemove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','mousemove']};};
            $$jQueryAbs.mouseout$defs$eventData=function(eventData$1490,handler$1491){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseout$defs$handler=function(eventData$1490,handler$1491){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseout=function mouseout(eventData$1490,handler$1491){
                var $$jQueryAbs=this;
                if(eventData$1490===undefined){eventData$1490=$$jQueryAbs.mouseout$defs$eventData(eventData$1490,handler$1491);}
                if(handler$1491===undefined){handler$1491=$$jQueryAbs.mouseout$defs$handler(eventData$1490,handler$1491);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.mouseout(eventData$1490,handler$1491));
                /*End dynamic block*/
            };$$jQueryAbs.mouseout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','mouseout']};};
            $$jQueryAbs.mouseover$defs$eventData=function(eventData$1492,handler$1493){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseover$defs$handler=function(eventData$1492,handler$1493){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseover=function mouseover(eventData$1492,handler$1493){
                var $$jQueryAbs=this;
                if(eventData$1492===undefined){eventData$1492=$$jQueryAbs.mouseover$defs$eventData(eventData$1492,handler$1493);}
                if(handler$1493===undefined){handler$1493=$$jQueryAbs.mouseover$defs$handler(eventData$1492,handler$1493);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.mouseover(eventData$1492,handler$1493));
                /*End dynamic block*/
            };$$jQueryAbs.mouseover.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','mouseover']};};
            $$jQueryAbs.mouseup$defs$eventData=function(eventData$1494,handler$1495){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseup$defs$handler=function(eventData$1494,handler$1495){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseup=function mouseup(eventData$1494,handler$1495){
                var $$jQueryAbs=this;
                if(eventData$1494===undefined){eventData$1494=$$jQueryAbs.mouseup$defs$eventData(eventData$1494,handler$1495);}
                if(handler$1495===undefined){handler$1495=$$jQueryAbs.mouseup$defs$handler(eventData$1494,handler$1495);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.mouseup(eventData$1494,handler$1495));
                /*End dynamic block*/
            };$$jQueryAbs.mouseup.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','mouseup']};};
            $$jQueryAbs.next$defs$selector=function(selector$1496){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.next=function next(selector$1496){
                var $$jQueryAbs=this;
                if(selector$1496===undefined){selector$1496=$$jQueryAbs.next$defs$selector(selector$1496);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.next(selector$1496));
                /*End dynamic block*/
            };$$jQueryAbs.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','next']};};
            $$jQueryAbs.nextAll$defs$selector=function(selector$1497){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.nextAll=function nextAll(selector$1497){
                var $$jQueryAbs=this;
                if(selector$1497===undefined){selector$1497=$$jQueryAbs.nextAll$defs$selector(selector$1497);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.nextAll(selector$1497));
                /*End dynamic block*/
            };$$jQueryAbs.nextAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','nextAll']};};
            $$jQueryAbs.nextUntil$defs$selector=function(selector$1498,filter$1499){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.nextUntil$defs$filter=function(selector$1498,filter$1499){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.nextUntil=function nextUntil(selector$1498,filter$1499){
                var $$jQueryAbs=this;
                if(selector$1498===undefined){selector$1498=$$jQueryAbs.nextUntil$defs$selector(selector$1498,filter$1499);}
                if(filter$1499===undefined){filter$1499=$$jQueryAbs.nextUntil$defs$filter(selector$1498,filter$1499);}
                
                var case$1500=selector$1498;
                if ($$$cl1.isOfType(selector$1498,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.nextUntil(case$1500.valueOf(),(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1334:45-1334:45','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(selector$1498,{t:$$$cocjd958.Element})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.nextUntil(case$1500.$native,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1339:52-1339:52','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(selector$1498,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.nextUntil(null,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1344:41-1344:41','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.nextUntil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjd958.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','nextUntil']};};
            $$jQueryAbs.not=function not(selector$1501){
                var $$jQueryAbs=this;
                
                var case$1502=selector$1501;
                if ($$$cl1.isOfType(selector$1501,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.not(case$1502.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(selector$1501,{t:'u', l:[{t:JQuery},{t:$$$cocjd958.Element}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.not(case$1502.$native));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.not.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cocjd958.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','not']};};
            $$jQueryAbs.off$defs$handler=function(events$1503,selector$1504,handler$1505){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.off=function off(events$1503,selector$1504,handler$1505){
                var $$jQueryAbs=this;
                if(handler$1505===undefined){handler$1505=$$jQueryAbs.off$defs$handler(events$1503,selector$1504,handler$1505);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.mouseover((typeof eventData==='undefined'||eventData===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: eventData")),'1366:34-1366:42','jquery.ceylon'):eventData),handler$1505));
                /*End dynamic block*/
            };$$jQueryAbs.off.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','off']};};
            $$jQueryAbs.getOffset=function getOffset(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$1506=(tmpvar$1507=$$jQueryAbs.$native.offset(),tmpvar$1508=(typeof Offset==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type Offset")),'1372:10-1372:15','jquery.ceylon'):Offset),tmpvar$1508.$$===undefined?new tmpvar$1508(tmpvar$1507):tmpvar$1508(tmpvar$1507)),$$$cl1.isOfType(tmpvar$1506,{t:$$$cl1.Anything})?tmpvar$1506:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'1372:10-1372:32','jquery.ceylon'));
                /*End dynamic block*/
            };$$jQueryAbs.getOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Coordinates},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getOffset']};};
            $$jQueryAbs.setOffset$defs$offset=function(offset$1509){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.setOffset=function setOffset(offset$1509){
                var $$jQueryAbs=this;
                if(offset$1509===undefined){offset$1509=$$jQueryAbs.setOffset$defs$offset(offset$1509);}
                var o$1510;
                if((o$1510=offset$1509)!==null){
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.offset(o$1510));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.offset());
                    /*End dynamic block*/
                }
            };$$jQueryAbs.setOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'offset',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Coordinates}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setOffset']};};
            $$jQueryAbs.setOffsetCallback=function setOffsetCallback(offset$1511){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.offset($$$cl1.$JsCallable(offset$1511,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer},{t:Coordinates}]},Return:{t:Coordinates}})));
                /*End dynamic block*/
            };$$jQueryAbs.setOffsetCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'offset',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:Coordinates}}]},Return:{t:Coordinates}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setOffsetCallback']};};
            $$jQueryAbs.offsetParent=function offsetParent(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.offsetParent());
                /*End dynamic block*/
            };$$jQueryAbs.offsetParent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','offsetParent']};};
            $$jQueryAbs.on$defs$selector=function(events$1512,selector$1513,data$1514,handler$1515){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.on$defs$data=function(events$1512,selector$1513,data$1514,handler$1515){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.on$defs$handler=function(events$1512,selector$1513,data$1514,handler$1515){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.on=function on(events$1512,selector$1513,data$1514,handler$1515){
                var $$jQueryAbs=this;
                if(selector$1513===undefined){selector$1513=$$jQueryAbs.on$defs$selector(events$1512,selector$1513,data$1514,handler$1515);}
                if(data$1514===undefined){data$1514=$$jQueryAbs.on$defs$data(events$1512,selector$1513,data$1514,handler$1515);}
                if(handler$1515===undefined){handler$1515=$$jQueryAbs.on$defs$handler(events$1512,selector$1513,data$1514,handler$1515);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.on(events$1512.valueOf(),selector$1513,data$1514,handler$1515));
                /*End dynamic block*/
            };$$jQueryAbs.on.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','on']};};
            $$jQueryAbs.one$defs$selector=function(events$1516,selector$1517,data$1518,handler$1519){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.one$defs$data=function(events$1516,selector$1517,data$1518,handler$1519){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.one$defs$handler=function(events$1516,selector$1517,data$1518,handler$1519){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.one=function one(events$1516,selector$1517,data$1518,handler$1519){
                var $$jQueryAbs=this;
                if(selector$1517===undefined){selector$1517=$$jQueryAbs.one$defs$selector(events$1516,selector$1517,data$1518,handler$1519);}
                if(data$1518===undefined){data$1518=$$jQueryAbs.one$defs$data(events$1516,selector$1517,data$1518,handler$1519);}
                if(handler$1519===undefined){handler$1519=$$jQueryAbs.one$defs$handler(events$1516,selector$1517,data$1518,handler$1519);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.one(events$1516.valueOf(),selector$1517,data$1518,handler$1519));
                /*End dynamic block*/
            };$$jQueryAbs.one.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','one']};};
            $$jQueryAbs.outerHeight$defs$includeMargin=function(includeMargin$1520){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.outerHeight=function outerHeight(includeMargin$1520){
                var $$jQueryAbs=this;
                if(includeMargin$1520===undefined){includeMargin$1520=$$jQueryAbs.outerHeight$defs$includeMargin(includeMargin$1520);}
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$jQueryAbs.$native.outerHeight(includeMargin$1520));
                /*End dynamic block*/
            };$$jQueryAbs.outerHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[{$nm:'includeMargin',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','outerHeight']};};
            $$jQueryAbs.outerWidth$defs$includeMargin=function(includeMargin$1521){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.outerWidth=function outerWidth(includeMargin$1521){
                var $$jQueryAbs=this;
                if(includeMargin$1521===undefined){includeMargin$1521=$$jQueryAbs.outerWidth$defs$includeMargin(includeMargin$1521);}
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$jQueryAbs.$native.outerWidth(includeMargin$1521));
                /*End dynamic block*/
            };$$jQueryAbs.outerWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[{$nm:'includeMargin',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','outerWidth']};};
            $$jQueryAbs.parent$defs$selector=function(selector$1522){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.parent=function parent(selector$1522){
                var $$jQueryAbs=this;
                if(selector$1522===undefined){selector$1522=$$jQueryAbs.parent$defs$selector(selector$1522);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.parent(selector$1522));
                /*End dynamic block*/
            };$$jQueryAbs.parent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','parent']};};
            $$jQueryAbs.parents$defs$selector=function(selector$1523){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.parents=function parents(selector$1523){
                var $$jQueryAbs=this;
                if(selector$1523===undefined){selector$1523=$$jQueryAbs.parents$defs$selector(selector$1523);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.parents(selector$1523));
                /*End dynamic block*/
            };$$jQueryAbs.parents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','parents']};};
            $$jQueryAbs.parentsUntil$defs$selector=function(selector$1524,filter$1525){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.parentsUntil$defs$filter=function(selector$1524,filter$1525){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.parentsUntil=function parentsUntil(selector$1524,filter$1525){
                var $$jQueryAbs=this;
                if(selector$1524===undefined){selector$1524=$$jQueryAbs.parentsUntil$defs$selector(selector$1524,filter$1525);}
                if(filter$1525===undefined){filter$1525=$$jQueryAbs.parentsUntil$defs$filter(selector$1524,filter$1525);}
                
                var case$1526=selector$1524;
                if ($$$cl1.isOfType(selector$1524,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.parents(case$1526.valueOf(),filter$1525));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(selector$1524,{t:$$$cocjd958.Element})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.parents(case$1526.$native,filter$1525));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(selector$1524,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.parents(null,filter$1525));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.parentsUntil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjd958.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','parentsUntil']};};
            $$jQueryAbs.position=function position(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return Coordinates($$jQueryAbs.$native.position());
                /*End dynamic block*/
            };$$jQueryAbs.position.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Coordinates},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','position']};};
            $$jQueryAbs.prepend=function prepend(content$1527){
                var $$jQueryAbs=this;
                if(content$1527===undefined){content$1527=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$$cocjl339.JSFunction($$jQueryAbs.$native.prepend).$apply(null,(function(){
                    var lst$1528=[];
                    var it$1529=content$1527.iterator();
                    var elem$1530;
                    while ((elem$1530=it$1529.next())!==$$$cl1.getFinished()){
                        lst$1528.push(elem$1530.$native);
                    }
                    return $$$cl1.ArraySequence(lst$1528);
                }())));
                /*End dynamic block*/
            };$$jQueryAbs.prepend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:'u', l:[{t:$$$cocjd958.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','prepend']};};
            $$jQueryAbs.prependHTML=function prependHTML(content$1531){
                var $$jQueryAbs=this;
                if(content$1531===undefined){content$1531=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.prepend(content$1531));
                /*End dynamic block*/
            };$$jQueryAbs.prependHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','prependHTML']};};
            $$jQueryAbs.prependCallback=function prependCallback(callback$1532){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.prepend($$$cl1.$JsCallable(callback$1532,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.prependCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:$$$cl1.String}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','prependCallback']};};
            $$jQueryAbs.prependTo=function prependTo(target$1533){
                var $$jQueryAbs=this;
                
                var case$1534=target$1533;
                if ($$$cl1.isOfType(target$1533,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.prependTo(case$1534.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(target$1533,{t:'u', l:[{t:$$$cocjd958.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.prependTo(case$1534.$native));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.prependTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjd958.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','prependTo']};};
            $$jQueryAbs.prev$defs$selector=function(selector$1535){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.prev=function prev(selector$1535){
                var $$jQueryAbs=this;
                if(selector$1535===undefined){selector$1535=$$jQueryAbs.prev$defs$selector(selector$1535);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.prev(selector$1535));
                /*End dynamic block*/
            };$$jQueryAbs.prev.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','prev']};};
            $$jQueryAbs.prevAll$defs$selector=function(selector$1536){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.prevAll=function prevAll(selector$1536){
                var $$jQueryAbs=this;
                if(selector$1536===undefined){selector$1536=$$jQueryAbs.prevAll$defs$selector(selector$1536);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.prevAll(selector$1536));
                /*End dynamic block*/
            };$$jQueryAbs.prevAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','prevAll']};};
            $$jQueryAbs.prevUntil$defs$selector=function(selector$1537,filter$1538){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.prevUntil$defs$filter=function(selector$1537,filter$1538){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.prevUntil=function prevUntil(selector$1537,filter$1538){
                var $$jQueryAbs=this;
                if(selector$1537===undefined){selector$1537=$$jQueryAbs.prevUntil$defs$selector(selector$1537,filter$1538);}
                if(filter$1538===undefined){filter$1538=$$jQueryAbs.prevUntil$defs$filter(selector$1537,filter$1538);}
                
                var case$1539=selector$1537;
                if ($$$cl1.isOfType(selector$1537,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.prevUntil(case$1539.valueOf(),(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1509:45-1509:45','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(selector$1537,{t:$$$cocjd958.Element})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.prevUntil(case$1539.$native,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1514:52-1514:52','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(selector$1537,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.prevUntil(null,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1519:41-1519:41','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.prevUntil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjd958.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','prevUntil']};};
            $$jQueryAbs.promise$defs$type=function(type$1540,target$1541){var $$jQueryAbs=this;
            return $$$cl1.String("fx",2);};
            $$jQueryAbs.promise$defs$target=function(type$1540,target$1541){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.promise=function promise(type$1540,target$1541){
                var $$jQueryAbs=this;
                if(type$1540===undefined){type$1540=$$jQueryAbs.promise$defs$type(type$1540,target$1541);}
                if(target$1541===undefined){target$1541=$$jQueryAbs.promise$defs$target(type$1540,target$1541);}
                var t$1542;
                if((t$1542=target$1541)!==null){
                    /*Begin dynamic block*/
                    return Promise($$jQueryAbs.$native.promise(type$1540.valueOf(),t$1542.$native));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return Promise($$jQueryAbs.$native.promise(type$1540.valueOf()));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.promise.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'type',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'target',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSObject}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','promise']};};
            $$jQueryAbs.getProp=function getProp(name$1543){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                var prop$1544=$$jQueryAbs.$native.prop(name$1543.valueOf());
                $prop$getProp$1544={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getProp','$at','prop']};}};
                $prop$getProp$1544.get=function(){return prop$1544};
                if(prop$1544.instanceof((typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'1539:25-1539:30','jquery.ceylon'):String))){
                    return $$$cocjl339.JSString(prop$1544);
                }else {
                    if(prop$1544){
                        return true;
                    }else {
                        return false;
                    }
                }/*End dynamic block*/
            };$$jQueryAbs.getProp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cocjl339.JSString},{t:$$$cl1.Boolean}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getProp']};};
            $$jQueryAbs.setProp=function setProp(propertyName$1545,val$1546){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.prop(propertyName$1545.valueOf(),val$1546));
                /*End dynamic block*/
            };$$jQueryAbs.setProp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setProp']};};
            $$jQueryAbs.setPropEntries=function setPropEntries(properties$1547){
                var $$jQueryAbs=this;
                if(properties$1547===undefined){properties$1547=$$$cl1.getEmpty();}
                var propertiesNative$1548=$$$cocjl339.createJSObject();
                var it$1549 = properties$1547.iterator();
                var item$1550;while ((item$1550=it$1549.next())!==$$$cl1.getFinished()){
                    var key$1551=item$1550.key;
                    var val$1552=item$1550.item;
                    /*Begin dynamic block*/
                    $$$cocjl339.objectDefineProperty(propertiesNative$1548,(tmpvar$1553=$$$cocjl339.createJSString(key$1551),$$$cl1.isOfType(tmpvar$1553,{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]})?tmpvar$1553:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'1559:43-1559:61','jquery.ceylon')),$$$cocjl339.DataDescriptor(true,false,true,true,val$1552));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.prop(propertiesNative$1548));
                /*End dynamic block*/
            };$$jQueryAbs.setPropEntries.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer},{t:$$$cl1.Boolean}]}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setPropEntries']};};
            $$jQueryAbs.setPropCallback=function setPropCallback(propertyName$1554,callback$1555){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.prop(propertyName$1554.valueOf(),$$$cl1.$JsCallable(callback$1555,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer},{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.setPropCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setPropCallback']};};
            $$jQueryAbs.pushStack$defs$name=function(elements$1556,name$1557,arguments$1558){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.pushStack$defs$arguments=function(elements$1556,name$1557,arguments$1558){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.pushStack=function pushStack(elements$1556,name$1557,arguments$1558){
                var $$jQueryAbs=this;
                if(name$1557===undefined){name$1557=$$jQueryAbs.pushStack$defs$name(elements$1556,name$1557,arguments$1558);}
                if(arguments$1558===undefined){arguments$1558=$$jQueryAbs.pushStack$defs$arguments(elements$1556,name$1557,arguments$1558);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.pushStack((function(){
                    var lst$1559=[];
                    var it$1560=elements$1556.iterator();
                    var elem$1561;
                    while ((elem$1561=it$1560.next())!==$$$cl1.getFinished()){
                        lst$1559.push(elem$1561.$native);
                    }
                    return $$$cl1.ArraySequence(lst$1559);
                }()),name$1557,arguments$1558));
                /*End dynamic block*/
            };$$jQueryAbs.pushStack.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cocjd958.Element}}},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'arguments',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','pushStack']};};
            $$jQueryAbs.getQueue$defs$queueName=function(queueName$1562){var $$jQueryAbs=this;
            return $$$cl1.String("fx",2);};
            $$jQueryAbs.getQueue=function getQueue(queueName$1562){
                var $$jQueryAbs=this;
                if(queueName$1562===undefined){queueName$1562=$$jQueryAbs.getQueue$defs$queueName(queueName$1562);}
                /*Begin dynamic block*/
                return $$$cocjl339.JSArray($$jQueryAbs.$native.queue(queueName$1562.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.getQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSArray},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns an array of functions",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getQueue']};};
            $$jQueryAbs.setQueue$defs$queueName=function(queueName$1563,newQueue$1564){var $$jQueryAbs=this;
            return $$$cl1.String("fx",2);};
            $$jQueryAbs.setQueue=function setQueue(queueName$1563,newQueue$1564){
                var $$jQueryAbs=this;
                if(queueName$1563===undefined){queueName$1563=$$jQueryAbs.setQueue$defs$queueName(queueName$1563,newQueue$1564);}
                if(newQueue$1564===undefined){newQueue$1564=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.queue(queueName$1563.valueOf(),newQueue$1564));
                /*End dynamic block*/
            };$$jQueryAbs.setQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'newQueue',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setQueue']};};
            $$jQueryAbs.setQueueCallback$defs$queueName=function(next$1565,queueName$1566){var $$jQueryAbs=this;
            return $$$cl1.String("fx",2);};
            $$jQueryAbs.setQueueCallback=function setQueueCallback(next$1565,queueName$1566){
                var $$jQueryAbs=this;
                if(queueName$1566===undefined){queueName$1566=$$jQueryAbs.setQueueCallback$defs$queueName(next$1565,queueName$1566);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.queue(queueName$1566.valueOf(),$$$cl1.$JsCallable(next$1565,[],{Arguments:{t:'T', l:[{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.setQueueCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'next',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setQueueCallback']};};
            $$jQueryAbs.ready=function ready(handler$1567){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.ready($$$cl1.$JsCallable(handler$1567,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.ready.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','ready']};};
            $$jQueryAbs.remove$defs$selector=function(selector$1568){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.remove=function remove(selector$1568){
                var $$jQueryAbs=this;
                if(selector$1568===undefined){selector$1568=$$jQueryAbs.remove$defs$selector(selector$1568);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.remove(selector$1568));
                /*End dynamic block*/
            };$$jQueryAbs.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','remove']};};
            $$jQueryAbs.removeAttr=function removeAttr(attributeName$1569){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.removeAttr(attributeName$1569.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.removeAttr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','removeAttr']};};
            $$jQueryAbs.removeClass=function removeClass(className$1570){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.removeClass(className$1570.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.removeClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','removeClass']};};
            $$jQueryAbs.removeClassCallback=function removeClassCallback(callback$1571){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.removeClass($$$cl1.$JsCallable(callback$1571,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]},Return:{t:$$$cl1.String}})));
                /*End dynamic block*/
            };$$jQueryAbs.removeClassCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:$$$cl1.String}}]},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','removeClassCallback']};};
            $$jQueryAbs.removeData=function removeData(names$1572){
                var $$jQueryAbs=this;
                if(names$1572===undefined){names$1572=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.removeData(names$1572));
                /*End dynamic block*/
            };$$jQueryAbs.removeData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'names',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','removeData']};};
            $$jQueryAbs.removeProp=function removeProp(propertyName$1573){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.removeProp(propertyName$1573.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.removeProp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','removeProp']};};
            $$jQueryAbs.replaceAll=function replaceAll(target$1574){
                var $$jQueryAbs=this;
                
                var case$1575=target$1574;
                if ($$$cl1.isOfType(target$1574,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.replaceAll(case$1575.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(target$1574,{t:'u', l:[{t:JQuery},{t:$$$cocjd958.Element}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.replaceAll(case$1575.$native));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.replaceAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cocjd958.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','replaceAll']};};
            $$jQueryAbs.replaceWith=function replaceWith(newContent$1576){
                var $$jQueryAbs=this;
                
                var case$1577=newContent$1576;
                if ($$$cl1.isOfType(newContent$1576,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.replaceWith(case$1577.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(newContent$1576,{t:'u', l:[{t:JQuery},{t:$$$cocjd958.Element}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.replaceWith(case$1577.$native));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.replaceWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'newContent',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cocjd958.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','replaceWith']};};
            $$jQueryAbs.replaceWithCallback=function replaceWithCallback(callback$1578){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.replaceWith(callback$1578));
                /*End dynamic block*/
            };$$jQueryAbs.replaceWithCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cocjd958.Element}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','replaceWithCallback']};};
            $$jQueryAbs.resize$defs$eventData=function(handler$1579,eventData$1580){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.resize=function resize(handler$1579,eventData$1580){
                var $$jQueryAbs=this;
                if(eventData$1580===undefined){eventData$1580=$$jQueryAbs.resize$defs$eventData(handler$1579,eventData$1580);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.resize(eventData$1580,$$$cl1.$JsCallable(handler$1579,[],{Arguments:{t:'T', l:[{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.resize.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','resize']};};
            $$jQueryAbs.scroll$defs$eventData=function(handler$1581,eventData$1582){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.scroll=function scroll(handler$1581,eventData$1582){
                var $$jQueryAbs=this;
                if(eventData$1582===undefined){eventData$1582=$$jQueryAbs.scroll$defs$eventData(handler$1581,eventData$1582);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.scroll(eventData$1582,$$$cl1.$JsCallable(handler$1581,[],{Arguments:{t:'T', l:[{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.scroll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','scroll']};};
            $$jQueryAbs.getScrollLeft=function getScrollLeft(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$jQueryAbs.$native.scrollLeft());
                /*End dynamic block*/
            };$$jQueryAbs.getScrollLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getScrollLeft']};};
            $$jQueryAbs.setScrollLeft=function setScrollLeft(val$1583){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.scrollLeft(val$1583));
                /*End dynamic block*/
            };$$jQueryAbs.setScrollLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setScrollLeft']};};
            $$jQueryAbs.getScrollTop=function getScrollTop(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$jQueryAbs.$native.scrollTop());
                /*End dynamic block*/
            };$$jQueryAbs.getScrollTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getScrollTop']};};
            $$jQueryAbs.setScrollTop=function setScrollTop(val$1584){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.scrollTop(val$1584));
                /*End dynamic block*/
            };$$jQueryAbs.setScrollTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setScrollTop']};};
            $$jQueryAbs.select$defs$eventData=function(handler$1585,eventData$1586){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.select=function select(handler$1585,eventData$1586){
                var $$jQueryAbs=this;
                if(eventData$1586===undefined){eventData$1586=$$jQueryAbs.select$defs$eventData(handler$1585,eventData$1586);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.select(eventData$1586,$$$cl1.$JsCallable(handler$1585,[],{Arguments:{t:'T', l:[{t:$$$cl1.Anything}]},Return:{t:$$$cl1.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.select.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','select']};};
            $$jQueryAbs.serialize=function serialize(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$jQueryAbs.$native.serialize());
                /*End dynamic block*/
            };$$jQueryAbs.serialize.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','serialize']};};
            $$jQueryAbs.serializeArray=function serializeArray(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSArray($$jQueryAbs.$native.serializeArray());
                /*End dynamic block*/
            };$$jQueryAbs.serializeArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSArray},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','serializeArray']};};
            $$jQueryAbs.show$defs$duration=function(duration$1587,easing$1588,complete$1589){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.show$defs$easing=function(duration$1587,easing$1588,complete$1589){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.show$defs$complete=function(duration$1587,easing$1588,complete$1589){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.show=function show(duration$1587,easing$1588,complete$1589){
                var $$jQueryAbs=this;
                if(duration$1587===undefined){duration$1587=$$jQueryAbs.show$defs$duration(duration$1587,easing$1588,complete$1589);}
                if(easing$1588===undefined){easing$1588=$$jQueryAbs.show$defs$easing(duration$1587,easing$1588,complete$1589);}
                if(complete$1589===undefined){complete$1589=$$jQueryAbs.show$defs$complete(duration$1587,easing$1588,complete$1589);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.show(duration$1587,easing$1588,complete$1589));
                /*End dynamic block*/
            };$$jQueryAbs.show.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','show']};};
            $$jQueryAbs.showOptions=function showOptions(options$1590){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.show(options$1590.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.showOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','showOptions']};};
            $$jQueryAbs.siblings$defs$siblings=function(siblings$1591){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.siblings=function siblings(siblings$1591){
                var $$jQueryAbs=this;
                if(siblings$1591===undefined){siblings$1591=$$jQueryAbs.siblings$defs$siblings(siblings$1591);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.siblings(siblings$1591));
                /*End dynamic block*/
            };$$jQueryAbs.siblings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'siblings',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','siblings']};};
            $$jQueryAbs.slice$defs$end=function(start$1592,end$1593){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slice=function slice(start$1592,end$1593){
                var $$jQueryAbs=this;
                if(end$1593===undefined){end$1593=$$jQueryAbs.slice$defs$end(start$1592,end$1593);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.slice(start$1592,end$1593));
                /*End dynamic block*/
            };$$jQueryAbs.slice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'start',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'end',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','slice']};};
            $$jQueryAbs.slideDown$defs$duration=function(duration$1594,easing$1595,complete$1596){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideDown$defs$easing=function(duration$1594,easing$1595,complete$1596){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideDown$defs$complete=function(duration$1594,easing$1595,complete$1596){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideDown=function slideDown(duration$1594,easing$1595,complete$1596){
                var $$jQueryAbs=this;
                if(duration$1594===undefined){duration$1594=$$jQueryAbs.slideDown$defs$duration(duration$1594,easing$1595,complete$1596);}
                if(easing$1595===undefined){easing$1595=$$jQueryAbs.slideDown$defs$easing(duration$1594,easing$1595,complete$1596);}
                if(complete$1596===undefined){complete$1596=$$jQueryAbs.slideDown$defs$complete(duration$1594,easing$1595,complete$1596);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.slideDown(duration$1594,easing$1595,complete$1596));
                /*End dynamic block*/
            };$$jQueryAbs.slideDown.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','slideDown']};};
            $$jQueryAbs.slideDownOptions=function slideDownOptions(options$1597){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.slideDown(options$1597.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.slideDownOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','slideDownOptions']};};
            $$jQueryAbs.slideToggle$defs$duration=function(duration$1598,easing$1599,complete$1600){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideToggle$defs$easing=function(duration$1598,easing$1599,complete$1600){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideToggle$defs$complete=function(duration$1598,easing$1599,complete$1600){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideToggle=function slideToggle(duration$1598,easing$1599,complete$1600){
                var $$jQueryAbs=this;
                if(duration$1598===undefined){duration$1598=$$jQueryAbs.slideToggle$defs$duration(duration$1598,easing$1599,complete$1600);}
                if(easing$1599===undefined){easing$1599=$$jQueryAbs.slideToggle$defs$easing(duration$1598,easing$1599,complete$1600);}
                if(complete$1600===undefined){complete$1600=$$jQueryAbs.slideToggle$defs$complete(duration$1598,easing$1599,complete$1600);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.slideToggle(duration$1598,easing$1599,complete$1600));
                /*End dynamic block*/
            };$$jQueryAbs.slideToggle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','slideToggle']};};
            $$jQueryAbs.slideToggleOptions=function slideToggleOptions(options$1601){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.slideToggle(options$1601.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.slideToggleOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','slideToggleOptions']};};
            $$jQueryAbs.slideUp$defs$duration=function(duration$1602,easing$1603,complete$1604){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideUp$defs$easing=function(duration$1602,easing$1603,complete$1604){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideUp$defs$complete=function(duration$1602,easing$1603,complete$1604){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideUp=function slideUp(duration$1602,easing$1603,complete$1604){
                var $$jQueryAbs=this;
                if(duration$1602===undefined){duration$1602=$$jQueryAbs.slideUp$defs$duration(duration$1602,easing$1603,complete$1604);}
                if(easing$1603===undefined){easing$1603=$$jQueryAbs.slideUp$defs$easing(duration$1602,easing$1603,complete$1604);}
                if(complete$1604===undefined){complete$1604=$$jQueryAbs.slideUp$defs$complete(duration$1602,easing$1603,complete$1604);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.slideUp(duration$1602,easing$1603,complete$1604));
                /*End dynamic block*/
            };$$jQueryAbs.slideUp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','slideUp']};};
            $$jQueryAbs.slideUpOptions=function slideUpOptions(options$1605){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.slideUp(options$1605.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.slideUpOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','slideUpOptions']};};
            $$jQueryAbs.stop$defs$clearQueue=function(clearQueue$1606,jumpToEnd$1607){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.stop$defs$jumpToEnd=function(clearQueue$1606,jumpToEnd$1607){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.stop=function stop(clearQueue$1606,jumpToEnd$1607){
                var $$jQueryAbs=this;
                if(clearQueue$1606===undefined){clearQueue$1606=$$jQueryAbs.stop$defs$clearQueue(clearQueue$1606,jumpToEnd$1607);}
                if(jumpToEnd$1607===undefined){jumpToEnd$1607=$$jQueryAbs.stop$defs$jumpToEnd(clearQueue$1606,jumpToEnd$1607);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.stop(clearQueue$1606,jumpToEnd$1607));
                /*End dynamic block*/
            };$$jQueryAbs.stop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'clearQueue',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}},{$nm:'jumpToEnd',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','stop']};};
            $$jQueryAbs.stopName$defs$clearQueue=function(queue$1608,clearQueue$1609,jumpToEnd$1610){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.stopName$defs$jumpToEnd=function(queue$1608,clearQueue$1609,jumpToEnd$1610){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.stopName=function stopName(queue$1608,clearQueue$1609,jumpToEnd$1610){
                var $$jQueryAbs=this;
                if(clearQueue$1609===undefined){clearQueue$1609=$$jQueryAbs.stopName$defs$clearQueue(queue$1608,clearQueue$1609,jumpToEnd$1610);}
                if(jumpToEnd$1610===undefined){jumpToEnd$1610=$$jQueryAbs.stopName$defs$jumpToEnd(queue$1608,clearQueue$1609,jumpToEnd$1610);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.stop(queue$1608.valueOf(),clearQueue$1609,jumpToEnd$1610));
                /*End dynamic block*/
            };$$jQueryAbs.stopName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queue',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'clearQueue',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}},{$nm:'jumpToEnd',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','stopName']};};
            $$jQueryAbs.submit$defs$eventData=function(eventData$1611,handler$1612){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.submit$defs$handler=function(eventData$1611,handler$1612){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.submit=function submit(eventData$1611,handler$1612){
                var $$jQueryAbs=this;
                if(eventData$1611===undefined){eventData$1611=$$jQueryAbs.submit$defs$eventData(eventData$1611,handler$1612);}
                if(handler$1612===undefined){handler$1612=$$jQueryAbs.submit$defs$handler(eventData$1611,handler$1612);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.submit(eventData$1611,handler$1612));
                /*End dynamic block*/
            };$$jQueryAbs.submit.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','submit']};};
            $$jQueryAbs.getText=function getText(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$jQueryAbs.$native.text());
                /*End dynamic block*/
            };$$jQueryAbs.getText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getText']};};
            $$jQueryAbs.setText=function setText(textString$1613){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.text(textString$1613.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.setText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'textString',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setText']};};
            $$jQueryAbs.setTextCallback=function setTextCallback(callback$1614){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.text($$$cl1.$JsCallable(callback$1614,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]},Return:{t:$$$cl1.String}})));
                /*End dynamic block*/
            };$$jQueryAbs.setTextCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:$$$cl1.String}}]},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setTextCallback']};};
            $$jQueryAbs.toArray=function toArray(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSArray($$jQueryAbs.$native.toArray());
                /*End dynamic block*/
            };$$jQueryAbs.toArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSArray},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','toArray']};};
            $$jQueryAbs.toggle$defs$duration=function(duration$1615,easing$1616,complete$1617){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.toggle$defs$easing=function(duration$1615,easing$1616,complete$1617){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.toggle$defs$complete=function(duration$1615,easing$1616,complete$1617){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.toggle=function toggle(duration$1615,easing$1616,complete$1617){
                var $$jQueryAbs=this;
                if(duration$1615===undefined){duration$1615=$$jQueryAbs.toggle$defs$duration(duration$1615,easing$1616,complete$1617);}
                if(easing$1616===undefined){easing$1616=$$jQueryAbs.toggle$defs$easing(duration$1615,easing$1616,complete$1617);}
                if(complete$1617===undefined){complete$1617=$$jQueryAbs.toggle$defs$complete(duration$1615,easing$1616,complete$1617);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.toggle(duration$1615,easing$1616,complete$1617));
                /*End dynamic block*/
            };$$jQueryAbs.toggle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','toggle']};};
            $$jQueryAbs.toggleOptions=function toggleOptions(options$1618){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.toggle(options$1618.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.toggleOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','toggleOptions']};};
            $$jQueryAbs.toggleShowOrHide=function toggleShowOrHide(showOrHide$1619){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.toggle(showOrHide$1619));
                /*End dynamic block*/
            };$$jQueryAbs.toggleShowOrHide.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'showOrHide',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','toggleShowOrHide']};};
            $$jQueryAbs.toggleClass$defs$swit=function(swit$1620){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.toggleClass=function toggleClass(swit$1620){
                var $$jQueryAbs=this;
                if(swit$1620===undefined){swit$1620=$$jQueryAbs.toggleClass$defs$swit(swit$1620);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.toggleClass(swit$1620));
                /*End dynamic block*/
            };$$jQueryAbs.toggleClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'swit',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','toggleClass']};};
            $$jQueryAbs.toggleClassName$defs$swit=function(className$1621,swit$1622){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.toggleClassName=function toggleClassName(className$1621,swit$1622){
                var $$jQueryAbs=this;
                if(swit$1622===undefined){swit$1622=$$jQueryAbs.toggleClassName$defs$swit(className$1621,swit$1622);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.toggleClass(className$1621.valueOf(),swit$1622));
                /*End dynamic block*/
            };$$jQueryAbs.toggleClassName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'swit',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','toggleClassName']};};
            $$jQueryAbs.toggleClassCallback$defs$swit=function(callback$1623,swit$1624){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.toggleClassCallback=function toggleClassCallback(callback$1623,swit$1624){
                var $$jQueryAbs=this;
                if(swit$1624===undefined){swit$1624=$$jQueryAbs.toggleClassCallback$defs$swit(callback$1623,swit$1624);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.toggleClass($$$cl1.$JsCallable(callback$1623,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer},{t:$$$cl1.String},{t:$$$cl1.Boolean}]},Return:{t:$$$cl1.String}}),swit$1624));
                /*End dynamic block*/
            };$$jQueryAbs.toggleClassCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:$$$cl1.String}},{$t:{t:$$$cl1.Boolean}}]},Return:{t:$$$cl1.String}}},$an:function(){return[];}},{$nm:'swit',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','toggleClassCallback']};};
            $$jQueryAbs.trigger=function trigger(event$1625,extraParameters$1626){
                var $$jQueryAbs=this;
                if(extraParameters$1626===undefined){extraParameters$1626=$$$cl1.getEmpty();}
                
                var case$1627=event$1625;
                if ($$$cl1.isOfType(event$1625,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.trigger(case$1627.valueOf(),extraParameters$1626));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(event$1625,{t:JQueryEvent})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.trigger(case$1627.$native,extraParameters$1626));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.trigger.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'event',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JQueryEvent}]},$an:function(){return[];}},{$nm:'extraParameters',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','trigger']};};
            $$jQueryAbs.unbind=function unbind(eventType$1628){
                var $$jQueryAbs=this;
                
                var case$1629=eventType$1628;
                if ($$$cl1.isOfType(eventType$1628,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.unbind(case$1629.valueOf(),false));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(eventType$1628,{t:'u', l:[{t:$$$cocjd958.Event},{t:JQueryEvent}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.unbind(case$1629));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.unbind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjd958.Event},{t:JQueryEvent}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','unbind']};};
            $$jQueryAbs.unbindCallaback$defs$eventType=function(eventType$1630,callback$1631){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.unbindCallaback$defs$callback=function(eventType$1630,callback$1631){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.unbindCallaback=function unbindCallaback(eventType$1630,callback$1631){
                var $$jQueryAbs=this;
                if(eventType$1630===undefined){eventType$1630=$$jQueryAbs.unbindCallaback$defs$eventType(eventType$1630,callback$1631);}
                if(callback$1631===undefined){callback$1631=$$jQueryAbs.unbindCallaback$defs$callback(eventType$1630,callback$1631);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.unbind(eventType$1630,callback$1631));
                /*End dynamic block*/
            };$$jQueryAbs.unbindCallaback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','unbindCallaback']};};
            $$jQueryAbs.undelegate$defs$namespace=function(namespace$1632){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.undelegate=function undelegate(namespace$1632){
                var $$jQueryAbs=this;
                if(namespace$1632===undefined){namespace$1632=$$jQueryAbs.undelegate$defs$namespace(namespace$1632);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.undelegate(namespace$1632));
                /*End dynamic block*/
            };$$jQueryAbs.undelegate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'namespace',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','undelegate']};};
            $$jQueryAbs.undelegateCallback$defs$callback=function(selector$1633,eventType$1634,callback$1635){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.undelegateCallback=function undelegateCallback(selector$1633,eventType$1634,callback$1635){
                var $$jQueryAbs=this;
                if(callback$1635===undefined){callback$1635=$$jQueryAbs.undelegateCallback$defs$callback(selector$1633,eventType$1634,callback$1635);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.undelegate(selector$1633.valueOf(),eventType$1634.valueOf(),callback$1635));
                /*End dynamic block*/
            };$$jQueryAbs.undelegateCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','undelegateCallback']};};
            $$jQueryAbs.undelegateEvents=function undelegateEvents(selector$1636,events$1637){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.undelegate());
                /*End dynamic block*/
            };$$jQueryAbs.undelegateEvents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'events',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','undelegateEvents']};};
            $$jQueryAbs.unwrap=function unwrap(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.unwrap());
                /*End dynamic block*/
            };$$jQueryAbs.unwrap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','unwrap']};};
            $$jQueryAbs.getVal=function getVal(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                var val$1638=$$jQueryAbs.$native.val();
                $prop$getVal$1638={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getVal','$at','val']};}};
                $prop$getVal$1638.get=function(){return val$1638};
                if(val$1638.nstanceof((typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'1928:23-1928:28','jquery.ceylon'):String))){
                    return $$$cocjl339.JSString(val$1638);
                }else {
                    if((typeof arrayIsArray==='undefined'||arrayIsArray===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: arrayIsArray")),'1930:14-1930:25','jquery.ceylon'):arrayIsArray)(val$1638)){
                        return $$$cocjl339.JSArray(val$1638);
                    }else {
                        return $$$cocjl339.JSNumber(val$1638);
                    }
                }/*End dynamic block*/
            };$$jQueryAbs.getVal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cocjl339.JSString},{t:$$$cocjl339.JSNumber},{t:$$$cocjl339.JSArray}]},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getVal']};};
            $$jQueryAbs.setVal=function setVal(val$1639){
                var $$jQueryAbs=this;
                if(val$1639===undefined){val$1639=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.val(val$1639));
                /*End dynamic block*/
            };$$jQueryAbs.setVal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setVal']};};
            $$jQueryAbs.setValCallback=function setValCallback(callback$1640){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.val($$$cl1.$JsCallable(callback$1640,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]},Return:{t:$$$cl1.String}})));
                /*End dynamic block*/
            };$$jQueryAbs.setValCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:$$$cl1.String}}]},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setValCallback']};};
            $$jQueryAbs.getWidth=function getWidth(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$jQueryAbs.$native.width());
                /*End dynamic block*/
            };$$jQueryAbs.getWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getWidth']};};
            $$jQueryAbs.setWidth=function setWidth(width$1641){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.width(width$1641));
                /*End dynamic block*/
            };$$jQueryAbs.setWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'width',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setWidth']};};
            $$jQueryAbs.setWidthCallback=function setWidthCallback(callback$1642){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.width(callback$1642));
                /*End dynamic block*/
            };$$jQueryAbs.setWidthCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}},{$t:{t:$$$cl1.Integer}}]},Return:{t:$$$cl1.Integer}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setWidthCallback']};};
            $$jQueryAbs.wrap=function wrap(wrappingElement$1643){
                var $$jQueryAbs=this;
                
                var case$1644=wrappingElement$1643;
                if ($$$cl1.isOfType(wrappingElement$1643,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.wrap(case$1644.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(wrappingElement$1643,{t:'u', l:[{t:$$$cocjd958.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.wrap(case$1644.$native));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.wrap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjd958.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','wrap']};};
            $$jQueryAbs.wrapCallback=function wrapCallback(callback$1645){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.wrap(callback$1645));
                /*End dynamic block*/
            };$$jQueryAbs.wrapCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}}]},Return:{t:JQuery}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','wrapCallback']};};
            $$jQueryAbs.wrapAll=function wrapAll(wrappingElement$1646){
                var $$jQueryAbs=this;
                
                var case$1647=wrappingElement$1646;
                if ($$$cl1.isOfType(wrappingElement$1646,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.wrapAll(case$1647.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(wrappingElement$1646,{t:'u', l:[{t:$$$cocjd958.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.wrapAll(case$1647.$native));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.wrapAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjd958.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','wrapAll']};};
            $$jQueryAbs.wrapInner=function wrapInner(wrappingElement$1648){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.wrapInner(wrappingElement$1648.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.wrapInner.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','wrapInner']};};
            $$jQueryAbs.wrapInnerCallback=function wrapInnerCallback(callback$1649){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.wrapInner($$$cl1.$JsCallable(callback$1649,[],{Arguments:{t:'T', l:[{t:$$$cl1.Integer}]},Return:{t:$$$cl1.String}})));
                /*End dynamic block*/
            };$$jQueryAbs.wrapInnerCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Integer}}]},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','wrapInnerCallback']};};
        })(JQueryAbs.$$.prototype);
    }
    return JQueryAbs;
}
exports.$init$JQueryAbs=$init$JQueryAbs;
$init$JQueryAbs();
function JQuery(n$1650, $$jQuery){
    $init$JQuery();
    if ($$jQuery===undefined)$$jQuery=new JQuery.$$;
    $$jQuery.n$1650_=n$1650;
    JQueryAbs($$jQuery);
    $$jQuery.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQuery,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','JQuery','$at','native']};}};
    /*Begin dynamic block*/
    $$jQuery.$native=$$jQuery.n$1650;/*End dynamic block*/
    return $$jQuery;
}
JQuery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQueryAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQuery']};};
exports.JQuery=JQuery;
function $init$JQuery(){
    if (JQuery.$$===undefined){
        $$$cl1.initTypeProto(JQuery,'com.openswimsoftware.ceylon.js.jquery::JQuery',$init$JQueryAbs());
        (function($$jQuery){
            $$$cl1.defineAttr($$jQuery,'n$1650',function(){return this.n$1650_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQuery,d:['com.openswimsoftware.ceylon.js.jquery','JQuery','$at','n']};});
        })(JQuery.$$.prototype);
    }
    return JQuery;
}
exports.$init$JQuery=$init$JQuery;
$init$JQuery();
function DataType(name$1651, $$dataType){
    $init$DataType();
    if ($$dataType===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$dataType.name$1651_=name$1651;
    return $$dataType;
}
DataType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],of:[{t:dataTypeXML$1652},{t:dataTypeHtml$1653},{t:dataTypeScript$1654},{t:dataTypeJson$1655},{t:dataTypeJsonp$1656},{t:dataTypeText$1657}],$an:function(){return[$$$cl1.doc($$$cl1.String("the ajax request data type",26)),$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','DataType']};};
exports.DataType=DataType;
function $init$DataType(){
    if (DataType.$$===undefined){
        $$$cl1.initTypeProto(DataType,'com.openswimsoftware.ceylon.js.jquery::DataType',$$$cl1.Basic);
        (function($$dataType){
            $$$cl1.defineAttr($$dataType,'name$1651',function(){return this.name$1651_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DataType,d:['com.openswimsoftware.ceylon.js.jquery','DataType','$at','name']};});
        })(DataType.$$.prototype);
    }
    return DataType;
}
exports.$init$DataType=$init$DataType;
$init$DataType();
function dataTypeXML$1652(){
    var $$dataTypeXML=new dataTypeXML$1652.$$;
    DataType($$$cl1.String("dataTypeXML",11),$$dataTypeXML);
    return $$dataTypeXML;
};dataTypeXML$1652.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DataType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeXML']};};
function $init$dataTypeXML$1652(){
    if (dataTypeXML$1652.$$===undefined){
        $$$cl1.initTypeProto(dataTypeXML$1652,'com.openswimsoftware.ceylon.js.jquery::dataTypeXML',$init$DataType());
    }
    return dataTypeXML$1652;
}
exports.$init$dataTypeXML$1652=$init$dataTypeXML$1652;
$init$dataTypeXML$1652();
var dataTypeXML$1658;
function getDataTypeXML(){
    if (dataTypeXML$1658===undefined){dataTypeXML$1658=$init$dataTypeXML$1652()();dataTypeXML$1658.$$metamodel$$=getDataTypeXML.$$metamodel$$;}
    return dataTypeXML$1658;
}
exports.getDataTypeXML=getDataTypeXML;
getDataTypeXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeXML$1652},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeXML']};};
$prop$getDataTypeXML={get:getDataTypeXML,$$metamodel$$:getDataTypeXML.$$metamodel$$};
exports.$prop$getDataTypeXML=$prop$getDataTypeXML;
function dataTypeHtml$1653(){
    var $$dataTypeHtml=new dataTypeHtml$1653.$$;
    DataType($$$cl1.String("dataTypeHtml",12),$$dataTypeHtml);
    return $$dataTypeHtml;
};dataTypeHtml$1653.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DataType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeHtml']};};
function $init$dataTypeHtml$1653(){
    if (dataTypeHtml$1653.$$===undefined){
        $$$cl1.initTypeProto(dataTypeHtml$1653,'com.openswimsoftware.ceylon.js.jquery::dataTypeHtml',$init$DataType());
    }
    return dataTypeHtml$1653;
}
exports.$init$dataTypeHtml$1653=$init$dataTypeHtml$1653;
$init$dataTypeHtml$1653();
var dataTypeHtml$1659;
function getDataTypeHtml(){
    if (dataTypeHtml$1659===undefined){dataTypeHtml$1659=$init$dataTypeHtml$1653()();dataTypeHtml$1659.$$metamodel$$=getDataTypeHtml.$$metamodel$$;}
    return dataTypeHtml$1659;
}
exports.getDataTypeHtml=getDataTypeHtml;
getDataTypeHtml.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeHtml$1653},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeHtml']};};
$prop$getDataTypeHtml={get:getDataTypeHtml,$$metamodel$$:getDataTypeHtml.$$metamodel$$};
exports.$prop$getDataTypeHtml=$prop$getDataTypeHtml;
function dataTypeScript$1654(){
    var $$dataTypeScript=new dataTypeScript$1654.$$;
    DataType($$$cl1.String("dataTypeScript",14),$$dataTypeScript);
    return $$dataTypeScript;
};dataTypeScript$1654.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DataType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeScript']};};
function $init$dataTypeScript$1654(){
    if (dataTypeScript$1654.$$===undefined){
        $$$cl1.initTypeProto(dataTypeScript$1654,'com.openswimsoftware.ceylon.js.jquery::dataTypeScript',$init$DataType());
    }
    return dataTypeScript$1654;
}
exports.$init$dataTypeScript$1654=$init$dataTypeScript$1654;
$init$dataTypeScript$1654();
var dataTypeScript$1660;
function getDataTypeScript(){
    if (dataTypeScript$1660===undefined){dataTypeScript$1660=$init$dataTypeScript$1654()();dataTypeScript$1660.$$metamodel$$=getDataTypeScript.$$metamodel$$;}
    return dataTypeScript$1660;
}
exports.getDataTypeScript=getDataTypeScript;
getDataTypeScript.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeScript$1654},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeScript']};};
$prop$getDataTypeScript={get:getDataTypeScript,$$metamodel$$:getDataTypeScript.$$metamodel$$};
exports.$prop$getDataTypeScript=$prop$getDataTypeScript;
function dataTypeJson$1655(){
    var $$dataTypeJson=new dataTypeJson$1655.$$;
    DataType($$$cl1.String("dataTypeJson",12),$$dataTypeJson);
    return $$dataTypeJson;
};dataTypeJson$1655.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DataType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeJson']};};
function $init$dataTypeJson$1655(){
    if (dataTypeJson$1655.$$===undefined){
        $$$cl1.initTypeProto(dataTypeJson$1655,'com.openswimsoftware.ceylon.js.jquery::dataTypeJson',$init$DataType());
    }
    return dataTypeJson$1655;
}
exports.$init$dataTypeJson$1655=$init$dataTypeJson$1655;
$init$dataTypeJson$1655();
var dataTypeJson$1661;
function getDataTypeJson(){
    if (dataTypeJson$1661===undefined){dataTypeJson$1661=$init$dataTypeJson$1655()();dataTypeJson$1661.$$metamodel$$=getDataTypeJson.$$metamodel$$;}
    return dataTypeJson$1661;
}
exports.getDataTypeJson=getDataTypeJson;
getDataTypeJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeJson$1655},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeJson']};};
$prop$getDataTypeJson={get:getDataTypeJson,$$metamodel$$:getDataTypeJson.$$metamodel$$};
exports.$prop$getDataTypeJson=$prop$getDataTypeJson;
function dataTypeJsonp$1656(){
    var $$dataTypeJsonp=new dataTypeJsonp$1656.$$;
    DataType($$$cl1.String("dataTypeJsonp",13),$$dataTypeJsonp);
    return $$dataTypeJsonp;
};dataTypeJsonp$1656.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DataType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeJsonp']};};
function $init$dataTypeJsonp$1656(){
    if (dataTypeJsonp$1656.$$===undefined){
        $$$cl1.initTypeProto(dataTypeJsonp$1656,'com.openswimsoftware.ceylon.js.jquery::dataTypeJsonp',$init$DataType());
    }
    return dataTypeJsonp$1656;
}
exports.$init$dataTypeJsonp$1656=$init$dataTypeJsonp$1656;
$init$dataTypeJsonp$1656();
var dataTypeJsonp$1662;
function getDataTypeJsonp(){
    if (dataTypeJsonp$1662===undefined){dataTypeJsonp$1662=$init$dataTypeJsonp$1656()();dataTypeJsonp$1662.$$metamodel$$=getDataTypeJsonp.$$metamodel$$;}
    return dataTypeJsonp$1662;
}
exports.getDataTypeJsonp=getDataTypeJsonp;
getDataTypeJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeJsonp$1656},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeJsonp']};};
$prop$getDataTypeJsonp={get:getDataTypeJsonp,$$metamodel$$:getDataTypeJsonp.$$metamodel$$};
exports.$prop$getDataTypeJsonp=$prop$getDataTypeJsonp;
function dataTypeText$1657(){
    var $$dataTypeText=new dataTypeText$1657.$$;
    DataType($$$cl1.String("dataTypeText",12),$$dataTypeText);
    return $$dataTypeText;
};dataTypeText$1657.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DataType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeText']};};
function $init$dataTypeText$1657(){
    if (dataTypeText$1657.$$===undefined){
        $$$cl1.initTypeProto(dataTypeText$1657,'com.openswimsoftware.ceylon.js.jquery::dataTypeText',$init$DataType());
    }
    return dataTypeText$1657;
}
exports.$init$dataTypeText$1657=$init$dataTypeText$1657;
$init$dataTypeText$1657();
var dataTypeText$1663;
function getDataTypeText(){
    if (dataTypeText$1663===undefined){dataTypeText$1663=$init$dataTypeText$1657()();dataTypeText$1663.$$metamodel$$=getDataTypeText.$$metamodel$$;}
    return dataTypeText$1663;
}
exports.getDataTypeText=getDataTypeText;
getDataTypeText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeText$1657},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeText']};};
$prop$getDataTypeText={get:getDataTypeText,$$metamodel$$:getDataTypeText.$$metamodel$$};
exports.$prop$getDataTypeText=$prop$getDataTypeText;
function createJSONPSettings(jsonp$1664,jsonpCallback$1665){
    if(jsonp$1664===undefined){jsonp$1664=true;}
    if(jsonpCallback$1665===undefined){jsonpCallback$1665=$$$cl1.String("callback",8);}
    /*Begin dynamic block*/
    if(jsonp$1664.equals(true)){
        if(jsonpCallback$1665.equals($$$cl1.String("callback",8))){
            return null;
        }else {
            return JSONPSettings(jsonpCallback$1665);
        }
    }else {
        if(jsonpCallback$1665.equals($$$cl1.String("callback",8))){
            return JSONPSettings(false);
        }else {
            var json$1666=(values$1667=[$$$cl1.Entry($$$cl1.String("jsonp",5),false,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.false$1668}}),$$$cl1.Entry($$$cl1.String("jsonpCallback",13),jsonpCallback$1665,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:'u', l:[{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.false$1668}}},{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}]}}),$$$cocjj639.JSON(values$1667));
            $prop$getJson$1666={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjj639.JSON},d:['com.openswimsoftware.ceylon.js.jquery','createJSONPSettings','$at','json']};}};
            $prop$getJson$1666.get=function(){return json$1666};
            var values$1667;
            return JSONPSettings(json$1666.toJson());
        }
    }/*End dynamic block*/
}
exports.createJSONPSettings=createJSONPSettings;
createJSONPSettings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:JSONPSettings}]},$ps:[{$nm:'jsonp',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'jsonpCallback',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("create a new JSONP settings object",34)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','createJSONPSettings']};};
function JSONPSettingsAbs($$jSONPSettingsAbs){
    $init$JSONPSettingsAbs();
    if ($$jSONPSettingsAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$jSONPSettingsAbs);
    return $$jSONPSettingsAbs;
}
JSONPSettingsAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettingsAbs']};};
exports.JSONPSettingsAbs=JSONPSettingsAbs;
function $init$JSONPSettingsAbs(){
    if (JSONPSettingsAbs.$$===undefined){
        $$$cl1.initTypeProto(JSONPSettingsAbs,'com.openswimsoftware.ceylon.js.jquery::JSONPSettingsAbs',$$$cocjl339.JSObjectAbs);
        (function($$jSONPSettingsAbs){
            $$jSONPSettingsAbs.getIsJsonp=function getIsJsonp(){
                var $$jSONPSettingsAbs=this;
                /*Begin dynamic block*/
                if(((tmpvar$1669=$$jSONPSettingsAbs.$native.jsonp,tmpvar$1670=true,(tmpvar$1669.equals&&tmpvar$1669.equals(tmpvar$1670))||tmpvar$1669===tmpvar$1670)||(tmpvar$1671=$$jSONPSettingsAbs.$native.jsonp,tmpvar$1672=null,(tmpvar$1671.equals&&!tmpvar$1671.equals(tmpvar$1672))||tmpvar$1671!==tmpvar$1672))){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jSONPSettingsAbs.getIsJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("is this the request JSONP",25)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettingsAbs','$m','getIsJsonp']};};
            $$jSONPSettingsAbs.setIsJsonp=function setIsJsonp(jsonp$1673){
                var $$jSONPSettingsAbs=this;
                /*Begin dynamic block*/
                $$jSONPSettingsAbs.$native.jsonp=jsonp$1673;
                /*End dynamic block*/
            };$$jSONPSettingsAbs.setIsJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'jsonp',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set that the request is JSONP",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettingsAbs','$m','setIsJsonp']};};
            $$jSONPSettingsAbs.getCallback=function getCallback(){
                var $$jSONPSettingsAbs=this;
                /*Begin dynamic block*/
                var callback$1674=$$jSONPSettingsAbs.$native.callback;
                $prop$getCallback$1674={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettingsAbs','$m','getCallback','$at','callback']};}};
                $prop$getCallback$1674.get=function(){return callback$1674};
                if((tmpvar$1675=callback$1674,tmpvar$1676=null,(tmpvar$1675.equals&&!tmpvar$1675.equals(tmpvar$1676))||tmpvar$1675!==tmpvar$1676)){
                    return $$$cocjl339.JSString($$jSONPSettingsAbs.$native.callback);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jSONPSettingsAbs.getCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns JSONP callback",22)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettingsAbs','$m','getCallback']};};
            $$jSONPSettingsAbs.setCallback=function setCallback(callback$1677){
                var $$jSONPSettingsAbs=this;
                /*Begin dynamic block*/
                $$jSONPSettingsAbs.$native.callback=callback$1677.valueOf();
                /*End dynamic block*/
            };$$jSONPSettingsAbs.setCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets JSONP callback",19)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettingsAbs','$m','setCallback']};};
        })(JSONPSettingsAbs.$$.prototype);
    }
    return JSONPSettingsAbs;
}
exports.$init$JSONPSettingsAbs=$init$JSONPSettingsAbs;
$init$JSONPSettingsAbs();
function JSONPSettings(n$1678, $$jSONPSettings){
    $init$JSONPSettings();
    if ($$jSONPSettings===undefined)$$jSONPSettings=new JSONPSettings.$$;
    $$jSONPSettings.n$1678_=n$1678;
    JSONPSettingsAbs($$jSONPSettings);
    $$jSONPSettings.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSONPSettings,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettings','$at','native']};}};
    /*Begin dynamic block*/
    $$jSONPSettings.$native=$$jSONPSettings.n$1678;/*End dynamic block*/
    return $$jSONPSettings;
}
JSONPSettings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSONPSettingsAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("settings for JSONP request",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettings']};};
exports.JSONPSettings=JSONPSettings;
function $init$JSONPSettings(){
    if (JSONPSettings.$$===undefined){
        $$$cl1.initTypeProto(JSONPSettings,'com.openswimsoftware.ceylon.js.jquery::JSONPSettings',$init$JSONPSettingsAbs());
        (function($$jSONPSettings){
            $$$cl1.defineAttr($$jSONPSettings,'n$1678',function(){return this.n$1678_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSONPSettings,d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettings','$at','n']};});
        })(JSONPSettings.$$.prototype);
    }
    return JSONPSettings;
}
exports.$init$JSONPSettings=$init$JSONPSettings;
$init$JSONPSettings();
function JQueryAjaxSettingsAbs($$jQueryAjaxSettingsAbs){
    $init$JQueryAjaxSettingsAbs();
    if ($$jQueryAjaxSettingsAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$jQueryAjaxSettingsAbs);
    return $$jQueryAjaxSettingsAbs;
}
JQueryAjaxSettingsAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs']};};
exports.JQueryAjaxSettingsAbs=JQueryAjaxSettingsAbs;
function $init$JQueryAjaxSettingsAbs(){
    if (JQueryAjaxSettingsAbs.$$===undefined){
        $$$cl1.initTypeProto(JQueryAjaxSettingsAbs,'com.openswimsoftware.ceylon.js.jquery::JQueryAjaxSettingsAbs',$$$cocjl339.JSObjectAbs);
        (function($$jQueryAjaxSettingsAbs){
            $$jQueryAjaxSettingsAbs.getAccepts=function getAccepts(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return $$$cl1.Comprehension(function(){
                    var it$1679=$$jQueryAjaxSettingsAbs.$native.accepts.iterator();
                    var key$1680,val$1681;
                    var next$val$1681=function(){
                        var entry$1682;
                        if((entry$1682=it$1679.next())!==$$$cl1.getFinished()){
                            key$1680=entry$1682.key;
                            val$1681=entry$1682.item;
                            return entry$1682;
                        }
                        val$1681=undefined;
                        return $$$cl1.getFinished();
                    }
                    next$val$1681();
                    return function(){
                        if(val$1681!==undefined){
                            var key$1680$1683=key$1680;
                            var val$1681$1684=val$1681;
                            var tmpvar$1685=$$$cl1.Entry($$$cocjl339.JSString(key$1680$1683),$$$cocjl339.JSString(val$1681$1684),{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSString}});
                            next$val$1681();
                            return tmpvar$1685;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSString}}}}).sequence;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getAccepts.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSString}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the data types the request accepts",42)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getAccepts']};};
            $$jQueryAjaxSettingsAbs.setAccepts=function setAccepts(accepts$1686){
                var $$jQueryAjaxSettingsAbs=this;
                if(accepts$1686===undefined){accepts$1686=$$$cl1.getEmpty();}
                var acceptNative$1687=$$$cocjl339.createJSObject();
                var it$1688 = accepts$1686.iterator();
                var item$1689;while ((item$1689=it$1688.next())!==$$$cl1.getFinished()){
                    var key$1690=item$1689.key;
                    var val$1691=item$1689.item;
                    /*Begin dynamic block*/
                    $$$cocjl339.objectDefineProperty(acceptNative$1687,key$1690,$$$cocjl339.DataDescriptor(true,false,true,true,val$1691.$native));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.accepts=acceptNative$1687.$native;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setAccepts.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'accepts',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSString}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the data types the request accepts",39)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setAccepts']};};
            $$jQueryAjaxSettingsAbs.getAsync=function getAsync(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.async){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns if the AJAX request is exectuted asynchronously",55)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getAsync']};};
            $$jQueryAjaxSettingsAbs.setAsync=function setAsync(async$1692){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.async=async$1692;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'async',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets if the AJAX request is exectuted asynchronously",52)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setAsync']};};
            $$jQueryAjaxSettingsAbs.getBeforeSend=function getBeforeSend(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$1693=$$jQueryAjaxSettingsAbs.$native.beforeSend=(typeof beforeSend==='undefined'||beforeSend===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: beforeSend")),'129:30-129:39','jqueryajaxsettings.ceylon'):beforeSend),$$$cl1.isOfType(tmpvar$1693,{t:$$$cl1.Anything})?tmpvar$1693:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'129:10-129:39','jqueryajaxsettings.ceylon'));
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getBeforeSend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Boolean(JQXHR, JQueryAjaxSettings)? which is a handler called before the request is sent",96)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getBeforeSend']};};
            $$jQueryAjaxSettingsAbs.setBeforeSend=function setBeforeSend(beforeSend$1694){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.beforeSend=beforeSend$1694;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setBeforeSend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'beforeSend',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns set a handler Boolean(JQXHR, JQueryAjaxSettings) before the request is sent",83)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setBeforeSend']};};
            $$jQueryAjaxSettingsAbs.getCache=function getCache(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.cache){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getCache.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns if the reqest will be cached by the browser",51)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getCache']};};
            $$jQueryAjaxSettingsAbs.setCache=function setCache(cache$1695){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.cache=cache$1695;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setCache.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'cache',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets if the reqest should be cached by the browser",50)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setCache']};};
            $$jQueryAjaxSettingsAbs.getComplete=function getComplete(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                var complete$1696=$$jQueryAjaxSettingsAbs.$native.complete;
                $prop$getComplete$1696={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getComplete','$at','complete']};}};
                $prop$getComplete$1696.get=function(){return complete$1696};
                if((tmpvar$1697=complete$1696,tmpvar$1698=null,(tmpvar$1697.equals&&tmpvar$1697.equals(tmpvar$1698))||tmpvar$1697===tmpvar$1698)){
                    return null;
                }else {
                    if($$$cocjl339.arrayIsArray(complete$1696)){
                        return $$$cocjl339.JSArray(complete$1696);
                    }else {
                        return (tmpvar$1699=$$$cocjl339.createJSArray(complete$1696),$$$cl1.isOfType(tmpvar$1699,{t:$$$cl1.Anything})?tmpvar$1699:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'167:11-167:33','jqueryajaxsettings.ceylon'));
                    }
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns array of handers Anything(JQXHR, String) for when the request is complete",81)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getComplete']};};
            $$jQueryAjaxSettingsAbs.setComplete=function setComplete(complete$1700){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.complete=complete$1700;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'complete',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets array of handers Anything(JQXHR, String) for when the request is complete",78)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setComplete']};};
            $$jQueryAjaxSettingsAbs.getContents=function getContents(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return $$$cl1.Comprehension(function(){
                    var it$1701=$$jQueryAjaxSettingsAbs.$native.contents.iterator();
                    var key$1702,val$1703;
                    var next$val$1703=function(){
                        var entry$1704;
                        if((entry$1704=it$1701.next())!==$$$cl1.getFinished()){
                            key$1702=entry$1704.key;
                            val$1703=entry$1704.item;
                            return entry$1704;
                        }
                        val$1703=undefined;
                        return $$$cl1.getFinished();
                    }
                    next$val$1703();
                    return function(){
                        if(val$1703!==undefined){
                            var key$1702$1705=key$1702;
                            var val$1703$1706=val$1703;
                            var tmpvar$1707=$$$cl1.Entry($$$cocjl339.JSString(key$1702$1705),$$$cocjl339.RegExp(val$1703$1706),{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.RegExp}});
                            next$val$1703();
                            return tmpvar$1707;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.RegExp}}}}).sequence;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.RegExp}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("gets a set of content types paired with regular expression pairs that determine how jQuery will parse the response",114)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContents']};};
            $$jQueryAjaxSettingsAbs.setContents=function setContents(contents$1708){
                var $$jQueryAjaxSettingsAbs=this;
                if(contents$1708===undefined){contents$1708=$$$cl1.getEmpty();}
                var contNative$1709=$$$cocjl339.createJSObject();
                var it$1710 = contents$1708.iterator();
                var item$1711;while ((item$1711=it$1710.next())!==$$$cl1.getFinished()){
                    var key$1712=item$1711.key;
                    var val$1713=item$1711.item;
                    /*Begin dynamic block*/
                    $$$cocjl339.objectDefineProperty(contNative$1709,key$1712,$$$cocjl339.DataDescriptor(true,false,true,true,val$1713.$native));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.contents=contNative$1709;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'contents',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.RegExp}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets a set of content types paired with regular expression pairs that determine how jQuery will parse the response",114)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContents']};};
            $$jQueryAjaxSettingsAbs.getContentType=function getContentType(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$1714=$$jQueryAjaxSettingsAbs.$native.contentType,tmpvar$1715=null,(tmpvar$1714.equals&&!tmpvar$1714.equals(tmpvar$1715))||tmpvar$1714!==tmpvar$1715)){
                    return $$$cocjl339.JSString($$jQueryAjaxSettingsAbs.$native.contentType);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getContentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the content type of the data being sent in the request",62)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContentType']};};
            $$jQueryAjaxSettingsAbs.setContentType=function setContentType(contentType$1716){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.contentType=contentType$1716.valueOf();
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setContentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'contentType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the content type of the data being sent in the request",59)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContentType']};};
            $$jQueryAjaxSettingsAbs.getContext=function getContext(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$1717=$$jQueryAjaxSettingsAbs.$native.context,tmpvar$1718=null,(tmpvar$1717.equals&&!tmpvar$1717.equals(tmpvar$1718))||tmpvar$1717!==tmpvar$1718)){
                    return $$$cocjl339.JSObject($$jQueryAjaxSettingsAbs.$native.context);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getContext.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSObject}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the context object in which the request is being made",61)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContext']};};
            $$jQueryAjaxSettingsAbs.setContext=function setContext(context$1719){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.context=context$1719.$native;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setContext.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the context object in which the request is being made",58)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContext']};};
            $$jQueryAjaxSettingsAbs.getConverters=function getConverters(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return $$$cl1.Comprehension(function(){
                    var it$1720=$$jQueryAjaxSettingsAbs.$native.converters.iterator();
                    var key$1721,val$1722;
                    var next$val$1722=function(){
                        var entry$1723;
                        if((entry$1723=it$1720.next())!==$$$cl1.getFinished()){
                            key$1721=entry$1723.key;
                            val$1722=entry$1723.item;
                            return entry$1723;
                        }
                        val$1722=undefined;
                        return $$$cl1.getFinished();
                    }
                    next$val$1722();
                    return function(){
                        if(val$1722!==undefined){
                            var key$1721$1724=key$1721;
                            var val$1722$1725=val$1722;
                            var tmpvar$1726=$$$cl1.Entry($$$cocjl339.JSString(key$1721$1724),$$$cocjl339.JSObject(val$1722$1725),{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSObject}});
                            next$val$1722();
                            return tmpvar$1726;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSObject}}}}).sequence;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getConverters.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSObject}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns data type converters",28)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getConverters']};};
            $$jQueryAjaxSettingsAbs.setConverters=function setConverters(converters$1727){
                var $$jQueryAjaxSettingsAbs=this;
                if(converters$1727===undefined){converters$1727=$$$cl1.getEmpty();}
                var convNative$1728=$$$cocjl339.createJSObject();
                var it$1729 = converters$1727.iterator();
                var item$1730;while ((item$1730=it$1729.next())!==$$$cl1.getFinished()){
                    var key$1731=item$1730.key;
                    var val$1732=item$1730.item;
                    /*Begin dynamic block*/
                    $$$cocjl339.objectDefineProperty(convNative$1728,key$1731,$$$cocjl339.DataDescriptor(true,false,true,true,val$1732.$native));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.converters=convNative$1728.$native;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setConverters.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'converters',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSObject}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets data type converters",25)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setConverters']};};
            $$jQueryAjaxSettingsAbs.getCrossDomain=function getCrossDomain(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.crossDomain){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getCrossDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("is the request cross domain",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getCrossDomain']};};
            $$jQueryAjaxSettingsAbs.setCrossDomain=function setCrossDomain(crossDomain$1733){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.crossDomain=crossDomain$1733;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setCrossDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'crossDomain',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets if the request is cross domain",35)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setCrossDomain']};};
            $$jQueryAjaxSettingsAbs.getData=function getData(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.data.instanceof((typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'276:32-276:37','jqueryajaxsettings.ceylon'):String))){
                    return $$$cocjl339.JSString($$jQueryAjaxSettingsAbs.$native.data);
                }else {
                    if((tmpvar$1734=$$jQueryAjaxSettingsAbs.$native.data,tmpvar$1735=null,(tmpvar$1734.equals&&!tmpvar$1734.equals(tmpvar$1735))||tmpvar$1734!==tmpvar$1735)){
                        return $$$cocjl339.JSObject($$jQueryAjaxSettingsAbs.$native.data);
                    }else {
                        return null;
                    }
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cocjl339.JSString},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSObject}]}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the data to be sent to the server",41)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getData']};};
            $$jQueryAjaxSettingsAbs.setData=function setData(data$1736){
                var $$jQueryAjaxSettingsAbs=this;
                
                var case$1737=data$1736;
                if ($$$cl1.isOfType(data$1736,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$jQueryAjaxSettingsAbs.$native.data=case$1737.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$1736,{t:$$$cocjl339.JSObject})) {
                    /*Begin dynamic block*/
                    $$jQueryAjaxSettingsAbs.$native.data=case$1737.$native;
                    /*End dynamic block*/
                }
            };$$jQueryAjaxSettingsAbs.setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSObject}]},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the data to be sent to the server",38)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setData']};};
            $$jQueryAjaxSettingsAbs.getDataFilter=function getDataFilter(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$1738=$$jQueryAjaxSettingsAbs.$native.dataFilter,$$$cl1.isOfType(tmpvar$1738,{t:$$$cl1.Anything})?tmpvar$1738:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'304:10-304:26','jqueryajaxsettings.ceylon'));
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getDataFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns data filter Anything(String, String)?",45)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getDataFilter']};};
            $$jQueryAjaxSettingsAbs.setDataFilter=function setDataFilter(datafilter$1739){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.dataFilter=$$$cl1.$JsCallable(datafilter$1739/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setDataFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'datafilter',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.String}},{$t:{t:$$$cl1.String}}]},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the data fiter",19)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setDataFilter']};};
            $$jQueryAjaxSettingsAbs.getDataType=function getDataType(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$1740=$$jQueryAjaxSettingsAbs.$native.dataType,tmpvar$1741=null,(tmpvar$1740.equals&&!tmpvar$1740.equals(tmpvar$1741))||tmpvar$1740!==tmpvar$1741)){
                    return $$$cocjl339.JSString($$jQueryAjaxSettingsAbs.$native.dataType);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getDataType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the data type",21)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getDataType']};};
            $$jQueryAjaxSettingsAbs.setDataType=function setDataType(dataType$1742){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.dataType=dataType$1742.valueOf();
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setDataType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'dataType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the data type",18)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setDataType']};};
            $$jQueryAjaxSettingsAbs.getError=function getError(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$$cocjl339.arrayIsArray($$jQueryAjaxSettingsAbs.$native.error)){
                    return $$$cocjl339.JSArray($$jQueryAjaxSettingsAbs.$native.error);
                }else {
                    if((tmpvar$1743=$$jQueryAjaxSettingsAbs.$native.error,tmpvar$1744=null,(tmpvar$1743.equals&&!tmpvar$1743.equals(tmpvar$1744))||tmpvar$1743!==tmpvar$1744)){
                        return (tmpvar$1745=$$$cocjl339.createJSArray($$jQueryAjaxSettingsAbs.$native.error),$$$cl1.isOfType(tmpvar$1745,{t:$$$cl1.Anything})?tmpvar$1745:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'339:11-339:37','jqueryajaxsettings.ceylon'));
                    }else {
                        return null;
                    }
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns an array of error handlers Anything(JQXHR, String?, String?)",68)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getError']};};
            $$jQueryAjaxSettingsAbs.setError=function setError(datafilter$1746){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.dataFilter=datafilter$1746;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'datafilter',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets an array of error handlers Anything(JQXHR, String?, String?)",65)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setError']};};
            $$jQueryAjaxSettingsAbs.getGlobal=function getGlobal(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.global){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getGlobal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns if global ajax events will be triggered for this class",62)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getGlobal']};};
            $$jQueryAjaxSettingsAbs.setGlobal=function setGlobal(global$1747){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.global=global$1747;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setGlobal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'global',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets if global ajax events will be triggered for this class",59)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setGlobal']};};
            $$jQueryAjaxSettingsAbs.getHeaders=function getHeaders(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return $$$cl1.Comprehension(function(){
                    var it$1748=$$jQueryAjaxSettingsAbs.$native.headers.iterator();
                    var key$1749,val$1750;
                    var next$val$1750=function(){
                        var entry$1751;
                        if((entry$1751=it$1748.next())!==$$$cl1.getFinished()){
                            key$1749=entry$1751.key;
                            val$1750=entry$1751.item;
                            return entry$1751;
                        }
                        val$1750=undefined;
                        return $$$cl1.getFinished();
                    }
                    next$val$1750();
                    return function(){
                        if(val$1750!==undefined){
                            var key$1749$1752=key$1749;
                            var val$1750$1753=val$1750;
                            var tmpvar$1754=$$$cl1.Entry($$$cocjl339.JSString(key$1749$1752),$$$cocjl339.JSString(val$1750$1753),{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSString}});
                            next$val$1750();
                            return tmpvar$1754;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSString}}}}).sequence;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSString}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the request headers",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getHeaders']};};
            $$jQueryAjaxSettingsAbs.setHeaders=function setHeaders(headers$1755){
                var $$jQueryAjaxSettingsAbs=this;
                var headNative$1756=$$$cocjl339.createJSObject();
                var it$1757 = headers$1755.iterator();
                var item$1758;while ((item$1758=it$1757.next())!==$$$cl1.getFinished()){
                    var key$1759=item$1758.key;
                    var val$1760=item$1758.item;
                    /*Begin dynamic block*/
                    $$$cocjl339.objectDefineProperty(headNative$1756,key$1759,$$$cocjl339.DataDescriptor(true,false,true,true,val$1760.$native));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.headers=headNative$1756.$native;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'headers',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSString}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the request headers",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setHeaders']};};
            $$jQueryAjaxSettingsAbs.getIfModified=function getIfModified(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.ifModified){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getIfModified.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns if the request should only be successful if the response if diffrent then the last time the request was made",116)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getIfModified']};};
            $$jQueryAjaxSettingsAbs.setIfModified=function setIfModified(modified$1761){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.ifModified=modified$1761;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setIfModified.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'modified',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets if the request should only be successful if the response if diffrent then the last time the request was made",113)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setIfModified']};};
            $$jQueryAjaxSettingsAbs.getIsLocal=function getIsLocal(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.isLocal){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getIsLocal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns if the request is being made agains the local filesystem",64)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getIsLocal']};};
            $$jQueryAjaxSettingsAbs.setIsLocal=function setIsLocal(local$1762){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.isLocal=local$1762;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setIsLocal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'local',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets if the request is being made agains the local filesystem",61)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setIsLocal']};};
            $$jQueryAjaxSettingsAbs.getJsonp=function getJsonp(){
                var $$jQueryAjaxSettingsAbs=this;
                var jsonp$1763;
                /*Begin dynamic block*/
                jsonp$1763=$$$cocjl339.JSObject($$jQueryAjaxSettingsAbs.$native.jsonp);if((tmpvar$1764=$$jQueryAjaxSettingsAbs.$native.jsonp,tmpvar$1765=null,(tmpvar$1764.equals&&tmpvar$1764.equals(tmpvar$1765))||tmpvar$1764===tmpvar$1765)){
                    return null;
                }else {
                    if((jsonp$1763.hasOwnProperty($$$cl1.String("jsonp",5))||jsonp$1763.hasOwnProperty($$$cl1.String("jsonpCallback",13)))){
                        return JSONPSettings(jsonp$1763.$native);
                    }else {
                        if(jsonp$1763.$native.instanceof((typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'436:40-436:45','jqueryajaxsettings.ceylon'):String))){
                            return $$$cocjl339.JSString(jsonp$1763.$native);
                        }else {
                            if(jsonp$1763.$native){
                                return true;
                            }else {
                                return false;
                            }
                        }
                    }
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:JSONPSettings},{t:$$$cocjl339.JSString},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the request JSONP settings",34)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getJsonp']};};
            $$jQueryAjaxSettingsAbs.setJsonp=function setJsonp(jsonp$1766){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.jsonp=jsonp$1766.$native;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'jsonp',$mt:'prm',$t:{t:JSONPSettings},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the request JSONP settings",31)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setJsonp']};};
            $$jQueryAjaxSettingsAbs.getJsonpCallback=function getJsonpCallback(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$1767=$$jQueryAjaxSettingsAbs.$native.jsonpCallback,$$$cl1.isOfType(tmpvar$1767,{t:$$$cl1.Anything})?tmpvar$1767:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'458:10-458:29','jqueryajaxsettings.ceylon'));
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getJsonpCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the JSONP callback String|String()?",43)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getJsonpCallback']};};
            $$jQueryAjaxSettingsAbs.setJsonpCallback=function setJsonpCallback(callback$1768){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.jsonpCallback=callback$1768;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setJsonpCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.String}}}]},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the JSONP callback String|String()?",40)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setJsonpCallback']};};
            $$jQueryAjaxSettingsAbs.getMimeType=function getMimeType(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$1769=$$jQueryAjaxSettingsAbs.$native.mimeType,tmpvar$1770=null,(tmpvar$1769.equals&&!tmpvar$1769.equals(tmpvar$1770))||tmpvar$1769!==tmpvar$1770)){
                    return $$$cocjl339.JSString($$jQueryAjaxSettingsAbs.$native.mimeType);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the request result mime type",36)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getMimeType']};};
            $$jQueryAjaxSettingsAbs.setMimeType=function setMimeType(mimeType$1771){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.mimeType=mimeType$1771.valueOf();
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'mimeType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the request result mime type",33)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setMimeType']};};
            $$jQueryAjaxSettingsAbs.getPassword=function getPassword(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$1772=$$jQueryAjaxSettingsAbs.$native.password,tmpvar$1773=null,(tmpvar$1772.equals&&!tmpvar$1772.equals(tmpvar$1773))||tmpvar$1772!==tmpvar$1773)){
                    return $$$cocjl339.JSString($$jQueryAjaxSettingsAbs.$native.password);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getPassword.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the request password",28)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getPassword']};};
            $$jQueryAjaxSettingsAbs.setPassword=function setPassword(password$1774){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.password=password$1774.valueOf();
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setPassword.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'password',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the request password",25)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setPassword']};};
            $$jQueryAjaxSettingsAbs.getProcessData=function getProcessData(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.processData){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getProcessData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns if the data will be processed before being sent to the server",69)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getProcessData']};};
            $$jQueryAjaxSettingsAbs.setProcessData=function setProcessData(processData$1775){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.processData=processData$1775;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setProcessData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'processData',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets if the data will be processed before being sent to the server",66)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setProcessData']};};
            $$jQueryAjaxSettingsAbs.getScriptCharset=function getScriptCharset(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$1776=$$jQueryAjaxSettingsAbs.$native.scriptCharset,tmpvar$1777=null,(tmpvar$1776.equals&&!tmpvar$1776.equals(tmpvar$1777))||tmpvar$1776!==tmpvar$1777)){
                    return $$$cocjl339.JSString($$jQueryAjaxSettingsAbs.$native.scriptCharset);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getScriptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the script charset (only if getting a script or making a JSONP request)",79)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getScriptCharset']};};
            $$jQueryAjaxSettingsAbs.setScriptCharset=function setScriptCharset(scriptCharset$1778){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.scriptCharset=scriptCharset$1778.valueOf();
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setScriptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'scriptCharset',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the script charset (only if getting a script or making a JSONP request)",76)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setScriptCharset']};};
            $$jQueryAjaxSettingsAbs.getStatusCode=function getStatusCode(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$1779=(typeof statusNative==='undefined'||statusNative===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: statusNative")),'544:10-544:21','jqueryajaxsettings.ceylon'):statusNative),$$$cl1.isOfType(tmpvar$1779,{t:$$$cl1.Anything})?tmpvar$1779:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'544:10-544:21','jqueryajaxsettings.ceylon'));
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getStatusCode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a object JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code",157)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getStatusCode']};};
            $$jQueryAjaxSettingsAbs.setStatusCode=function setStatusCode(statusCodes$1780){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.statusCode=statusCodes$1780;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setStatusCode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'statusCodes',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets a set of callbacks JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code",164)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setStatusCode']};};
            $$jQueryAjaxSettingsAbs.getSuccess=function getSuccess(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$1781=$$jQueryAjaxSettingsAbs.$native.success,tmpvar$1782=null,(tmpvar$1781.equals&&!tmpvar$1781.equals(tmpvar$1782))||tmpvar$1781!==tmpvar$1782)){
                    return $$$cocjl339.JSArray($$jQueryAjaxSettingsAbs.$native.success);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns array of handers called Anything(Anything, String, JQXHR) upon a successful request",91)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getSuccess']};};
            $$jQueryAjaxSettingsAbs.setSuccess=function setSuccess(success$1783){
                var $$jQueryAjaxSettingsAbs=this;
                if(success$1783===undefined){success$1783=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.success=success$1783;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'success',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}},{$t:{t:$$$cl1.String}},{$t:{t:JQXHR}}]},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets array of handers called Anything(Anything, String, JQXHR) upon a successful request",88)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setSuccess']};};
            $$jQueryAjaxSettingsAbs.getTimeout=function getTimeout(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$1784=$$jQueryAjaxSettingsAbs.$native.timeout,tmpvar$1785=null,(tmpvar$1784.equals&&!tmpvar$1784.equals(tmpvar$1785))||tmpvar$1784!==tmpvar$1785)){
                    return $$$cocjl339.JSNumber($$jQueryAjaxSettingsAbs.$native.timeout);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSNumber}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the timeout for the request in milliseconds",51)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getTimeout']};};
            $$jQueryAjaxSettingsAbs.setTimeout=function setTimeout(timeout$1786){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.timeout=timeout$1786;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'timeout',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the timeout for the request in milliseconds",48)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setTimeout']};};
            $$jQueryAjaxSettingsAbs.getTraditional=function getTraditional(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.traditional){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getTraditional.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns if the request will use the traditional style of param serialization",76)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getTraditional']};};
            $$jQueryAjaxSettingsAbs.setTraditional=function setTraditional(traditional$1787){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.traditional=traditional$1787;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setTraditional.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'traditional',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets if the request will use the traditional style of param serialization",73)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setTraditional']};};
            $$jQueryAjaxSettingsAbs.getType=function getType(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$1788=$$jQueryAjaxSettingsAbs.$native.type,tmpvar$1789=null,(tmpvar$1788.equals&&!tmpvar$1788.equals(tmpvar$1789))||tmpvar$1788!==tmpvar$1789)){
                    return $$$cocjl339.JSString($$jQueryAjaxSettingsAbs.$native.type);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns if the request will use the traditional style of param serialization",76)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getType']};};
            $$jQueryAjaxSettingsAbs.setType=function setType(type$1790){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.type=type$1790.valueOf();
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the request type usually GET or POST",41)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setType']};};
            $$jQueryAjaxSettingsAbs.getUrl=function getUrl(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$1791=$$jQueryAjaxSettingsAbs.$native.url,tmpvar$1792=null,(tmpvar$1791.equals&&!tmpvar$1791.equals(tmpvar$1792))||tmpvar$1791!==tmpvar$1792)){
                    return $$$cocjl339.JSString($$jQueryAjaxSettingsAbs.$native.url);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getUrl.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the request URL",23)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getUrl']};};
            $$jQueryAjaxSettingsAbs.setUrl=function setUrl(url$1793){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.url=url$1793.valueOf();
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setUrl.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the request URL",20)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setUrl']};};
            $$jQueryAjaxSettingsAbs.getUsername=function getUsername(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$1794=$$jQueryAjaxSettingsAbs.$native.username,tmpvar$1795=null,(tmpvar$1794.equals&&!tmpvar$1794.equals(tmpvar$1795))||tmpvar$1794!==tmpvar$1795)){
                    return $$$cocjl339.JSString($$jQueryAjaxSettingsAbs.$native.username);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getUsername.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the request username",28)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getUsername']};};
            $$jQueryAjaxSettingsAbs.setUsername=function setUsername(username$1796){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.username=username$1796.valueOf();
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setUsername.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'username',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the request username",28)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setUsername']};};
            $$jQueryAjaxSettingsAbs.getXhr=function getXhr(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$1797=$$jQueryAjaxSettingsAbs.$native.xhr,$$$cl1.isOfType(tmpvar$1797,{t:$$$cl1.Anything})?tmpvar$1797:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'666:10-666:19','jqueryajaxsettings.ceylon'));
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getXhr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the underlying XHR function",35)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getXhr']};};
            $$jQueryAjaxSettingsAbs.setXhr=function setXhr(xhr$1798){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.xhr=$$$cl1.$JsCallable(xhr$1798/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setXhr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'xhr',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the underlying XHR function",32)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setXhr']};};
            $$jQueryAjaxSettingsAbs.getXhrFields=function getXhrFields(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSObject($$jQueryAjaxSettingsAbs.$native.xhrFields);
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getXhrFields.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSObject},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the base XHR settings",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getXhrFields']};};
            $$jQueryAjaxSettingsAbs.setXhrFields=function setXhrFields(xhrFields$1799){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.xhrFields=(typeof xhrNative==='undefined'||xhrNative===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: xhrNative")),'687:22-687:30','jqueryajaxsettings.ceylon'):xhrNative).native;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setXhrFields.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'xhrFields',$mt:'prm',$t:{t:$$$cocjl339.JSObject},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the base XHR settings",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setXhrFields']};};
        })(JQueryAjaxSettingsAbs.$$.prototype);
    }
    return JQueryAjaxSettingsAbs;
}
exports.$init$JQueryAjaxSettingsAbs=$init$JQueryAjaxSettingsAbs;
$init$JQueryAjaxSettingsAbs();
function JQueryAjaxSettings(n$1800, $$jQueryAjaxSettings){
    $init$JQueryAjaxSettings();
    if ($$jQueryAjaxSettings===undefined)$$jQueryAjaxSettings=new JQueryAjaxSettings.$$;
    $$jQueryAjaxSettings.n$1800_=n$1800;
    JQueryAjaxSettingsAbs($$jQueryAjaxSettings);
    /*Begin dynamic block*/
    $$jQueryAjaxSettings.$native=$$jQueryAjaxSettings.n$1800;/*End dynamic block*/
    return $$jQueryAjaxSettings;
}
JQueryAjaxSettings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQueryAjaxSettingsAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("settings for a JQuery AJAX request",34)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettings']};};
exports.JQueryAjaxSettings=JQueryAjaxSettings;
function $init$JQueryAjaxSettings(){
    if (JQueryAjaxSettings.$$===undefined){
        $$$cl1.initTypeProto(JQueryAjaxSettings,'com.openswimsoftware.ceylon.js.jquery::JQueryAjaxSettings',$init$JQueryAjaxSettingsAbs());
        (function($$jQueryAjaxSettings){
            $$$cl1.defineAttr($$jQueryAjaxSettings,'n$1800',function(){return this.n$1800_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettings,d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettings','$at','n']};});
        })(JQueryAjaxSettings.$$.prototype);
    }
    return JQueryAjaxSettings;
}
exports.$init$JQueryAjaxSettings=$init$JQueryAjaxSettings;
$init$JQueryAjaxSettings();
function JSONPOptions(jsonp, jsonpCallback, $$jSONPOptions){
    $init$JSONPOptions();
    if ($$jSONPOptions===undefined)$$jSONPOptions=new JSONPOptions.$$;
    if(jsonp===undefined){jsonp=true;}
    $$jSONPOptions.jsonp_=jsonp;
    if(jsonpCallback===undefined){jsonpCallback=$$$cl1.String("callback",8);}
    $$jSONPOptions.jsonpCallback_=jsonpCallback;
    return $$jSONPOptions;
}
JSONPOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'jsonp',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.shared()];}},{$nm:'jsonpCallback',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("settings for JSONP in request builder",37)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPOptions']};};
exports.JSONPOptions=JSONPOptions;
function $init$JSONPOptions(){
    if (JSONPOptions.$$===undefined){
        $$$cl1.initTypeProto(JSONPOptions,'com.openswimsoftware.ceylon.js.jquery::JSONPOptions',$$$cl1.Basic);
        (function($$jSONPOptions){
            $$$cl1.defineAttr($$jSONPOptions,'jsonp',function(){return this.jsonp_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JSONPOptions,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPOptions','$at','jsonp']};});
            $$$cl1.defineAttr($$jSONPOptions,'jsonpCallback',function(){return this.jsonpCallback_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:JSONPOptions,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPOptions','$at','jsonpCallback']};});
        })(JSONPOptions.$$.prototype);
    }
    return JSONPOptions;
}
exports.$init$JSONPOptions=$init$JSONPOptions;
$init$JSONPOptions();
function JQueryAjaxSettingsBuilder(async, cache, contentType, context, crossDomain, data, dataType, global, ifModified, isLocal, jsonp, jsonpCallback, mimeType, password, processData, scriptCharset, timeout, traditional, type, url, username, $$jQueryAjaxSettingsBuilder){
    $init$JQueryAjaxSettingsBuilder();
    if ($$jQueryAjaxSettingsBuilder===undefined)$$jQueryAjaxSettingsBuilder=new JQueryAjaxSettingsBuilder.$$;
    if(async===undefined){async=true;}
    $$jQueryAjaxSettingsBuilder.async_=async;
    if(cache===undefined){cache=null;}
    $$jQueryAjaxSettingsBuilder.cache_=cache;
    if(contentType===undefined){contentType=$$$cl1.String("application/x-www-form-urlencoded; charset=UTF-8",48);}
    $$jQueryAjaxSettingsBuilder.contentType_=contentType;
    if(context===undefined){context=null;}
    $$jQueryAjaxSettingsBuilder.context_=context;
    if(crossDomain===undefined){crossDomain=null;}
    $$jQueryAjaxSettingsBuilder.crossDomain_=crossDomain;
    if(data===undefined){data=$$$cl1.String("",0);}
    $$jQueryAjaxSettingsBuilder.data_=data;
    if(dataType===undefined){dataType=$$$cl1.getEmpty();}
    $$jQueryAjaxSettingsBuilder.dataType_=dataType;
    if(global===undefined){global=true;}
    $$jQueryAjaxSettingsBuilder.global_=global;
    if(ifModified===undefined){ifModified=true;}
    $$jQueryAjaxSettingsBuilder.ifModified_=ifModified;
    if(isLocal===undefined){isLocal=null;}
    $$jQueryAjaxSettingsBuilder.isLocal_=isLocal;
    if(jsonp===undefined){jsonp=JSONPOptions();}
    $$jQueryAjaxSettingsBuilder.jsonp_=jsonp;
    if(jsonpCallback===undefined){jsonpCallback=null;}
    $$jQueryAjaxSettingsBuilder.jsonpCallback_=jsonpCallback;
    if(mimeType===undefined){mimeType=null;}
    $$jQueryAjaxSettingsBuilder.mimeType_=mimeType;
    if(password===undefined){password=null;}
    $$jQueryAjaxSettingsBuilder.password_=password;
    if(processData===undefined){processData=true;}
    $$jQueryAjaxSettingsBuilder.processData_=processData;
    if(scriptCharset===undefined){scriptCharset=null;}
    $$jQueryAjaxSettingsBuilder.scriptCharset_=scriptCharset;
    if(timeout===undefined){timeout=null;}
    $$jQueryAjaxSettingsBuilder.timeout_=timeout;
    if(traditional===undefined){traditional=false;}
    $$jQueryAjaxSettingsBuilder.traditional_=traditional;
    if(type===undefined){type=$$$cl1.String("GET",3);}
    $$jQueryAjaxSettingsBuilder.type_=type;
    if(url===undefined){url=null;}
    $$jQueryAjaxSettingsBuilder.url_=url;
    if(username===undefined){username=null;}
    $$jQueryAjaxSettingsBuilder.username_=username;
    $$jQueryAjaxSettingsBuilder.beforeSend$1801_=null;
    $$jQueryAjaxSettingsBuilder.$prop$getBeforeSend={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("Boolean(JQXHR, JQueryAjaxSettings)? which is a handler called before the request is sent",88)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','beforeSend']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getBeforeSend.get=function(){return beforeSend};
    $$jQueryAjaxSettingsBuilder.dataFilter$1802_=null;
    $$jQueryAjaxSettingsBuilder.$prop$getDataFilter={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("data filter Anything(String, String)?",37)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataFilter']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getDataFilter.get=function(){return dataFilter};
    $$jQueryAjaxSettingsBuilder.xhr$1803_=null;
    $$jQueryAjaxSettingsBuilder.$prop$getXhr={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("the underlying XHR function",27)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhr']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getXhr.get=function(){return xhr};
    $$jQueryAjaxSettingsBuilder.complete$1804_=null;
    $$jQueryAjaxSettingsBuilder.$prop$getComplete={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("array of handers Anything(JQXHR, String) for when the request is complete",73)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','complete']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getComplete.get=function(){return complete};
    $$jQueryAjaxSettingsBuilder.error$1805_=null;
    $$jQueryAjaxSettingsBuilder.$prop$getError={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("array of error handlers Anything(JQXHR, String?, String?)",57)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','error']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getError.get=function(){return error};
    $$jQueryAjaxSettingsBuilder.success$1806_=null;
    $$jQueryAjaxSettingsBuilder.$prop$getSuccess={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("array of handers called Anything(Anything, String, JQXHR) upon a successful request",83)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','success']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getSuccess.get=function(){return success};
    $$jQueryAjaxSettingsBuilder.accepts$1807_=$$$cl1.getEmpty();
    $$jQueryAjaxSettingsBuilder.$prop$getAccepts={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("the data types the request accepts",34)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','accepts']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getAccepts.get=function(){return accepts};
    $$jQueryAjaxSettingsBuilder.contents$1808_=$$$cl1.getEmpty();
    $$jQueryAjaxSettingsBuilder.$prop$getContents={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cocjl339.RegExp}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("a set of content types paired with regular expression pairs that determine how jQuery will parse the response",109)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contents']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getContents.get=function(){return contents};
    $$jQueryAjaxSettingsBuilder.headers$1809_=$$$cl1.getEmpty();
    $$jQueryAjaxSettingsBuilder.$prop$getHeaders={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("the request headers",19)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','headers']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getHeaders.get=function(){return headers};
    $$jQueryAjaxSettingsBuilder.converters$1810_=$$$cl1.getEmpty();
    $$jQueryAjaxSettingsBuilder.$prop$getConverters={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cocjl339.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("data type converters",20)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','converters']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getConverters.get=function(){return converters};
    $$jQueryAjaxSettingsBuilder.xhrFields$1811_=null;
    $$jQueryAjaxSettingsBuilder.$prop$getXhrFields={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("the base XHR settings",21)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhrFields']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getXhrFields.get=function(){return xhrFields};
    $$jQueryAjaxSettingsBuilder.statusCode$1812_=$$$cl1.getEmpty();
    $$jQueryAjaxSettingsBuilder.$prop$getStatusCode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("sets a set of callbacks JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code",164)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','statusCode']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getStatusCode.get=function(){return statusCode};
    return $$jQueryAjaxSettingsBuilder;
}
JQueryAjaxSettingsBuilder.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'async',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.shared()];}},{$nm:'cache',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'contentType',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSObject}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'crossDomain',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSObject}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'dataType',$mt:'prm',$def:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:DataType}}},$an:function(){return[$$$cl1.shared()];}},{$nm:'global',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.shared()];}},{$nm:'ifModified',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.shared()];}},{$nm:'isLocal',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'jsonp',$mt:'prm',$def:1,$t:{t:JSONPOptions},$an:function(){return[$$$cl1.shared()];}},{$nm:'jsonpCallback',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.String}}}]}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'mimeType',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'password',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'processData',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.shared()];}},{$nm:'scriptCharset',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'timeout',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'traditional',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.shared()];}},{$nm:'type',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];}},{$nm:'url',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'username',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[$$$cl1.shared()];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("settings for a JQuery AJAX request",34)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder']};};
exports.JQueryAjaxSettingsBuilder=JQueryAjaxSettingsBuilder;
function $init$JQueryAjaxSettingsBuilder(){
    if (JQueryAjaxSettingsBuilder.$$===undefined){
        $$$cl1.initTypeProto(JQueryAjaxSettingsBuilder,'com.openswimsoftware.ceylon.js.jquery::JQueryAjaxSettingsBuilder',$$$cl1.Basic);
        (function($$jQueryAjaxSettingsBuilder){
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'beforeSend',function(){return this.beforeSend$1801_;},function(beforeSend$1813){return this.beforeSend$1801_=beforeSend$1813;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("Boolean(JQXHR, JQueryAjaxSettings)? which is a handler called before the request is sent",88)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','beforeSend']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'dataFilter',function(){return this.dataFilter$1802_;},function(dataFilter$1814){return this.dataFilter$1802_=dataFilter$1814;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("data filter Anything(String, String)?",37)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataFilter']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'xhr',function(){return this.xhr$1803_;},function(xhr$1815){return this.xhr$1803_=xhr$1815;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("the underlying XHR function",27)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhr']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'complete',function(){return this.complete$1804_;},function(complete$1816){return this.complete$1804_=complete$1816;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("array of handers Anything(JQXHR, String) for when the request is complete",73)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','complete']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'error',function(){return this.error$1805_;},function(error$1817){return this.error$1805_=error$1817;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("array of error handlers Anything(JQXHR, String?, String?)",57)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','error']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'success',function(){return this.success$1806_;},function(success$1818){return this.success$1806_=success$1818;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("array of handers called Anything(Anything, String, JQXHR) upon a successful request",83)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','success']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'accepts',function(){return this.accepts$1807_;},function(accepts$1819){return this.accepts$1807_=accepts$1819;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("the data types the request accepts",34)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','accepts']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'contents',function(){return this.contents$1808_;},function(contents$1820){return this.contents$1808_=contents$1820;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cocjl339.RegExp}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("a set of content types paired with regular expression pairs that determine how jQuery will parse the response",109)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contents']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'headers',function(){return this.headers$1809_;},function(headers$1821){return this.headers$1809_=headers$1821;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("the request headers",19)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','headers']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'converters',function(){return this.converters$1810_;},function(converters$1822){return this.converters$1810_=converters$1822;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cocjl339.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("data type converters",20)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','converters']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'xhrFields',function(){return this.xhrFields$1811_;},function(xhrFields$1823){return this.xhrFields$1811_=xhrFields$1823;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("the base XHR settings",21)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhrFields']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'statusCode',function(){return this.statusCode$1812_;},function(statusCode$1824){return this.statusCode$1812_=statusCode$1824;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("sets a set of callbacks JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code",164)),$$$cl1.shared(),$$$cl1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','statusCode']};});
            $$jQueryAjaxSettingsBuilder.toNative=function toNative(){
                var $$jQueryAjaxSettingsBuilder=this;
                var settings$1825;
                /*Begin dynamic block*/
                settings$1825=JQueryAjaxSettings((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'53:33-53:38','jqueryajaxsettingsbuilder.ceylon'):Object));/*End dynamic block*/
                var acceptsNative$1826;
                /*Begin dynamic block*/
                acceptsNative$1826=$$$cl1.Comprehension(function(){
                    var it$1827=$$jQueryAjaxSettingsBuilder.accepts.iterator();
                    var key$1828,val$1829;
                    var next$val$1829=function(){
                        var entry$1830;
                        if((entry$1830=it$1827.next())!==$$$cl1.getFinished()){
                            key$1828=entry$1830.key;
                            val$1829=entry$1830.item;
                            return entry$1830;
                        }
                        val$1829=undefined;
                        return $$$cl1.getFinished();
                    }
                    next$val$1829();
                    return function(){
                        if(val$1829!==undefined){
                            var key$1828$1831=key$1828;
                            var val$1829$1832=val$1829;
                            var tmpvar$1833=$$$cl1.Entry((tmpvar$1834=$$$cocjl339.createJSString(key$1828$1831),$$$cl1.isOfType(tmpvar$1834,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1834:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'57:74-57:92','jqueryajaxsettingsbuilder.ceylon')),(tmpvar$1835=$$$cocjl339.createJSString(val$1829$1832),$$$cl1.isOfType(tmpvar$1835,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1835:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'57:95-57:113','jqueryajaxsettingsbuilder.ceylon')),{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSString}});
                            next$val$1829();
                            return tmpvar$1833;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSString}}}}).sequence;/*End dynamic block*/
                settings$1825.setAccepts(acceptsNative$1826);
                settings$1825.setAsync($$jQueryAjaxSettingsBuilder.async);
                /*Begin dynamic block*/
                settings$1825.setBeforeSend($$jQueryAjaxSettingsBuilder.beforeSend);
                /*End dynamic block*/
                var c$1836;
                if((c$1836=$$jQueryAjaxSettingsBuilder.cache)!==null){
                    settings$1825.setCache(c$1836);
                }
                /*Begin dynamic block*/
                settings$1825.setComplete($$jQueryAjaxSettingsBuilder.complete);
                /*End dynamic block*/
                var contentsNative$1837;
                /*Begin dynamic block*/
                contentsNative$1837=$$$cl1.Comprehension(function(){
                    var it$1838=$$jQueryAjaxSettingsBuilder.contents.iterator();
                    var key$1839,val$1840;
                    var next$val$1840=function(){
                        var entry$1841;
                        if((entry$1841=it$1838.next())!==$$$cl1.getFinished()){
                            key$1839=entry$1841.key;
                            val$1840=entry$1841.item;
                            return entry$1841;
                        }
                        val$1840=undefined;
                        return $$$cl1.getFinished();
                    }
                    next$val$1840();
                    return function(){
                        if(val$1840!==undefined){
                            var key$1839$1842=key$1839;
                            var val$1840$1843=val$1840;
                            var tmpvar$1844=$$$cl1.Entry((tmpvar$1845=$$$cocjl339.createJSString(key$1839$1842),$$$cl1.isOfType(tmpvar$1845,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1845:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'72:74-72:92','jqueryajaxsettingsbuilder.ceylon')),val$1840$1843,{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.RegExp}});
                            next$val$1840();
                            return tmpvar$1844;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.RegExp}}}}).sequence;/*End dynamic block*/
                settings$1825.setContents(contentsNative$1837);
                settings$1825.setContentType($$jQueryAjaxSettingsBuilder.contentType);
                var c$1846;
                if((c$1846=$$jQueryAjaxSettingsBuilder.context)!==null){
                    settings$1825.setContext(c$1846);
                }
                var convertersNative$1847;
                /*Begin dynamic block*/
                convertersNative$1847=$$$cl1.Comprehension(function(){
                    var it$1848=$$jQueryAjaxSettingsBuilder.converters.iterator();
                    var key$1849,val$1850;
                    var next$val$1850=function(){
                        var entry$1851;
                        if((entry$1851=it$1848.next())!==$$$cl1.getFinished()){
                            key$1849=entry$1851.key;
                            val$1850=entry$1851.item;
                            return entry$1851;
                        }
                        val$1850=undefined;
                        return $$$cl1.getFinished();
                    }
                    next$val$1850();
                    return function(){
                        if(val$1850!==undefined){
                            var key$1849$1852=key$1849;
                            var val$1850$1853=val$1850;
                            var tmpvar$1854=$$$cl1.Entry((tmpvar$1855=$$$cocjl339.createJSString(key$1849$1852),$$$cl1.isOfType(tmpvar$1855,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1855:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'81:80-81:98','jqueryajaxsettingsbuilder.ceylon')),val$1850$1853,{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSObject}});
                            next$val$1850();
                            return tmpvar$1854;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSObject}}}}).sequence;/*End dynamic block*/
                settings$1825.setConverters(convertersNative$1847);
                var cD$1856;
                if((cD$1856=$$jQueryAjaxSettingsBuilder.crossDomain)!==null){
                    settings$1825.setCrossDomain(cD$1856);
                }
                settings$1825.setData($$jQueryAjaxSettingsBuilder.data);
                /*Begin dynamic block*/
                settings$1825.setDataFilter((tmpvar$1857=$$jQueryAjaxSettingsBuilder.dataFilter,$$$cl1.isOfType(tmpvar$1857,{t:$$$cl1.Callable,a:{Arguments:{t:'T', l:[{t:$$$cl1.String},{t:$$$cl1.String}]},Return:{t:$$$cl1.Anything}}})?tmpvar$1857:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'89:26-89:35','jqueryajaxsettingsbuilder.ceylon')));
                /*End dynamic block*/
                var dataTypeS$1858=$$$cl1.String("",0);
                function setDataTypeS$1858(dataTypeS$1859){return dataTypeS$1858=dataTypeS$1859;};
                var it$1860 = $$jQueryAjaxSettingsBuilder.dataType.iterator();
                var dT$1861;while ((dT$1861=it$1860.next())!==$$$cl1.getFinished()){
                    (dataTypeS$1858=dataTypeS$1858.plus($$$cl1.String(" ",1).plus(dT$1861.string)));
                }
                settings$1825.setDataType(dataTypeS$1858);
                /*Begin dynamic block*/
                settings$1825.setError($$jQueryAjaxSettingsBuilder.error);
                /*End dynamic block*/
                settings$1825.setGlobal($$jQueryAjaxSettingsBuilder.global);
                var headersNative$1862;
                /*Begin dynamic block*/
                headersNative$1862=$$$cl1.Comprehension(function(){
                    var it$1863=$$jQueryAjaxSettingsBuilder.headers.iterator();
                    var key$1864,val$1865;
                    var next$val$1865=function(){
                        var entry$1866;
                        if((entry$1866=it$1863.next())!==$$$cl1.getFinished()){
                            key$1864=entry$1866.key;
                            val$1865=entry$1866.item;
                            return entry$1866;
                        }
                        val$1865=undefined;
                        return $$$cl1.getFinished();
                    }
                    next$val$1865();
                    return function(){
                        if(val$1865!==undefined){
                            var key$1864$1867=key$1864;
                            var val$1865$1868=val$1865;
                            var tmpvar$1869=$$$cl1.Entry((tmpvar$1870=$$$cocjl339.createJSString(key$1864$1867),$$$cl1.isOfType(tmpvar$1870,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1870:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'102:74-102:92','jqueryajaxsettingsbuilder.ceylon')),(tmpvar$1871=$$$cocjl339.createJSString(val$1865$1868),$$$cl1.isOfType(tmpvar$1871,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1871:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'102:95-102:113','jqueryajaxsettingsbuilder.ceylon')),{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSString}});
                            next$val$1865();
                            return tmpvar$1869;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cocjl339.JSString},Item:{t:$$$cocjl339.JSString}}}}).sequence;/*End dynamic block*/
                settings$1825.setHeaders(headersNative$1862);
                settings$1825.setIfModified($$jQueryAjaxSettingsBuilder.ifModified);
                var iL$1872;
                if((iL$1872=$$jQueryAjaxSettingsBuilder.isLocal)!==null){
                    settings$1825.setIsLocal(iL$1872);
                }
                var settingsNative$1873=createJSONPSettings($$jQueryAjaxSettingsBuilder.jsonp.jsonp,$$jQueryAjaxSettingsBuilder.jsonp.jsonpCallback);
                var sN$1874;
                if((sN$1874=settingsNative$1873)!==null){
                    settings$1825.setJsonp(sN$1874);
                }
                var jC$1875;
                if((jC$1875=$$jQueryAjaxSettingsBuilder.jsonpCallback)!==null){
                    settings$1825.setJsonpCallback(jC$1875);
                }
                var mT$1876;
                if((mT$1876=$$jQueryAjaxSettingsBuilder.mimeType)!==null){
                    settings$1825.setMimeType(mT$1876);
                }
                var p$1877;
                if((p$1877=$$jQueryAjaxSettingsBuilder.password)!==null){
                    settings$1825.setPassword(p$1877);
                }
                settings$1825.setProcessData($$jQueryAjaxSettingsBuilder.processData);
                var sC$1878;
                if((sC$1878=$$jQueryAjaxSettingsBuilder.scriptCharset)!==null){
                    settings$1825.setScriptCharset(sC$1878);
                }
                /*Begin dynamic block*/
                settings$1825.setStatusCode($$jQueryAjaxSettingsBuilder.statusCode);
                settings$1825.setSuccess([(tmpvar$1879=$$jQueryAjaxSettingsBuilder.success,$$$cl1.isOfType(tmpvar$1879,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:'T', l:[{t:$$$cl1.Anything},{t:$$$cl1.String},{t:JQXHR}]},Return:{t:$$$cl1.Anything}}}}})?tmpvar$1879:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'128:23-128:29','jqueryajaxsettingsbuilder.ceylon'))].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:'T', l:[{t:$$$cl1.Anything},{t:$$$cl1.String},{t:JQXHR}]},Return:{t:$$$cl1.Anything}}}}}}));
                /*End dynamic block*/
                var t$1880;
                if((t$1880=$$jQueryAjaxSettingsBuilder.timeout)!==null){
                    settings$1825.setTimeout(t$1880);
                }
                settings$1825.setTraditional($$jQueryAjaxSettingsBuilder.traditional);
                settings$1825.setType($$jQueryAjaxSettingsBuilder.type);
                settings$1825.setTraditional($$jQueryAjaxSettingsBuilder.traditional);
                settings$1825.setType($$jQueryAjaxSettingsBuilder.type);
                var u$1881;
                if((u$1881=$$jQueryAjaxSettingsBuilder.url)!==null){
                    settings$1825.setUrl(u$1881);
                }
                var user$1882;
                if((user$1882=$$jQueryAjaxSettingsBuilder.username)!==null){
                    settings$1825.setUsername(user$1882);
                }
                /*Begin dynamic block*/
                settings$1825.setXhr((tmpvar$1883=$$jQueryAjaxSettingsBuilder.xhr,$$$cl1.isOfType(tmpvar$1883,{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}})?tmpvar$1883:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'144:19-144:21','jqueryajaxsettingsbuilder.ceylon')));
                settings$1825.setXhrFields((tmpvar$1884=$$jQueryAjaxSettingsBuilder.xhrFields,$$$cl1.isOfType(tmpvar$1884,{t:$$$cocjl339.JSObject})?tmpvar$1884:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'145:25-145:33','jqueryajaxsettingsbuilder.ceylon')));
                /*End dynamic block*/
                return settings$1825;
            };$$jQueryAjaxSettingsBuilder.toNative.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQueryAjaxSettings},$ps:[],$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.doc($$$cl1.String("convert to native AJAX settings",31)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$m','toNative']};};
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'async',function(){return this.async_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','async']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'cache',function(){return this.cache_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','cache']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'contentType',function(){return this.contentType_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contentType']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'context',function(){return this.context_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSObject}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','context']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'crossDomain',function(){return this.crossDomain_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','crossDomain']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'data',function(){return this.data_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSObject}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','data']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'dataType',function(){return this.dataType_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:DataType}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataType']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'global',function(){return this.global_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','global']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'ifModified',function(){return this.ifModified_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','ifModified']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'isLocal',function(){return this.isLocal_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','isLocal']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'jsonp',function(){return this.jsonp_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:JSONPOptions},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','jsonp']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'jsonpCallback',function(){return this.jsonpCallback_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.String}}}]}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','jsonpCallback']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'mimeType',function(){return this.mimeType_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','mimeType']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'password',function(){return this.password_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','password']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'processData',function(){return this.processData_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','processData']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'scriptCharset',function(){return this.scriptCharset_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','scriptCharset']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'timeout',function(){return this.timeout_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','timeout']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'traditional',function(){return this.traditional_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','traditional']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'type',function(){return this.type_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','type']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'url',function(){return this.url_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','url']};});
            $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'username',function(){return this.username_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','username']};});
        })(JQueryAjaxSettingsBuilder.$$.prototype);
    }
    return JQueryAjaxSettingsBuilder;
}
exports.$init$JQueryAjaxSettingsBuilder=$init$JQueryAjaxSettingsBuilder;
$init$JQueryAjaxSettingsBuilder();
function JQueryEventAbs($$jQueryEventAbs){
    $init$JQueryEventAbs();
    if ($$jQueryEventAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjd958.EventAbs($$jQueryEventAbs);
    return $$jQueryEventAbs;
}
JQueryEventAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjd958.EventAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs']};};
exports.JQueryEventAbs=JQueryEventAbs;
function $init$JQueryEventAbs(){
    if (JQueryEventAbs.$$===undefined){
        $$$cl1.initTypeProto(JQueryEventAbs,'com.openswimsoftware.ceylon.js.jquery::JQueryEventAbs',$$$cocjd958.EventAbs);
        (function($$jQueryEventAbs){
            $$jQueryEventAbs.data=function data(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$1885=$$jQueryEventAbs.$native.data,$$$cl1.isOfType(tmpvar$1885,{t:$$$cl1.Anything})?tmpvar$1885:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'9:10-9:20','jqueryevent.ceylon'));
                /*End dynamic block*/
            };$$jQueryEventAbs.data.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("optional data attached to the event method",42)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','data']};};
            $$jQueryEventAbs.delegateTarget=function delegateTarget(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                return $$$cocjd958.Element($$jQueryEventAbs.$native.delegateTarget);
                /*End dynamic block*/
            };$$jQueryEventAbs.delegateTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjd958.Element},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("the elment on which the jQuery event handler was attached",57)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','delegateTarget']};};
            $$jQueryEventAbs.isDefaultPrevented=function isDefaultPrevented(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                if($$jQueryEventAbs.$native.isDefaultPrevented()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryEventAbs.isDefaultPrevented.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("was event.preventDefault() was ever called on this event object.",64)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','isDefaultPrevented']};};
            $$jQueryEventAbs.isImmediatePropogationStopped=function isImmediatePropogationStopped(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                if($$jQueryEventAbs.$native.isImmediatePropogationStopped()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryEventAbs.isImmediatePropogationStopped.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("was event.stopImmediatePropagation() was ever called on this event object.",74)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','isImmediatePropogationStopped']};};
            $$jQueryEventAbs.isPropagationStopped=function isPropagationStopped(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                if($$jQueryEventAbs.$native.isPropagationStopped()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryEventAbs.isPropagationStopped.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("was event.isPropagationStopped() was ever called on this event object.",70)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','isPropagationStopped']};};
            $$jQueryEventAbs.namespace=function namespace(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$jQueryEventAbs.$native.namespace);
                /*End dynamic block*/
            };$$jQueryEventAbs.namespace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("namespace specified when the event was triggered",48)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','namespace']};};
            $$jQueryEventAbs.relatedTarget=function relatedTarget(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                return $$$cocjd958.Element($$jQueryEventAbs.$native.relatedTarget);
                /*End dynamic block*/
            };$$jQueryEventAbs.relatedTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjd958.Element},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("the other element involved in the event, if any.",48)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','relatedTarget']};};
            $$jQueryEventAbs.result=function result(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$1886=$$jQueryEventAbs.$native.result,$$$cl1.isOfType(tmpvar$1886,{t:$$$cl1.Anything})?tmpvar$1886:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'70:10-70:22','jqueryevent.ceylon'));
                /*End dynamic block*/
            };$$jQueryEventAbs.result.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("last value returned by an event handler that was triggered by this event, unless the value was undefined",104)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','result']};};
            $$jQueryEventAbs.pageX=function pageX(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$jQueryEventAbs.$native.pageX);
                /*End dynamic block*/
            };$$jQueryEventAbs.pageX.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("the mouse position relative to the left edge of the document",60)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','pageX']};};
            $$jQueryEventAbs.pageY=function pageY(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$jQueryEventAbs.$native.pageY);
                /*End dynamic block*/
            };$$jQueryEventAbs.pageY.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("the mouse position relative to the top edge of the document",59)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','pageY']};};
            $$jQueryEventAbs.metaKey=function metaKey(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                if($$jQueryEventAbs.$native.metaKey){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryEventAbs.metaKey.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("was the meta key pressed while the event was fired",50)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','metaKey']};};
            $$jQueryEventAbs.which=function which(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$jQueryEventAbs.$native.which);
                /*End dynamic block*/
            };$$jQueryEventAbs.which.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("the specific key or mouse button that triggered the event if any",64)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','which']};};
        })(JQueryEventAbs.$$.prototype);
    }
    return JQueryEventAbs;
}
exports.$init$JQueryEventAbs=$init$JQueryEventAbs;
$init$JQueryEventAbs();
function JQueryEvent(n$1887, $$jQueryEvent){
    $init$JQueryEvent();
    if ($$jQueryEvent===undefined)$$jQueryEvent=new JQueryEvent.$$;
    $$jQueryEvent.n$1887_=n$1887;
    JQueryEventAbs($$jQueryEvent);
    $$jQueryEvent.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryEvent,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEvent','$at','native']};}};
    /*Begin dynamic block*/
    $$jQueryEvent.$native=$$jQueryEvent.n$1887;/*End dynamic block*/
    return $$jQueryEvent;
}
JQueryEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQueryEventAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a jQuery Event",14)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEvent']};};
exports.JQueryEvent=JQueryEvent;
function $init$JQueryEvent(){
    if (JQueryEvent.$$===undefined){
        $$$cl1.initTypeProto(JQueryEvent,'com.openswimsoftware.ceylon.js.jquery::JQueryEvent',$init$JQueryEventAbs());
        (function($$jQueryEvent){
            $$$cl1.defineAttr($$jQueryEvent,'n$1887',function(){return this.n$1887_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryEvent,d:['com.openswimsoftware.ceylon.js.jquery','JQueryEvent','$at','n']};});
        })(JQueryEvent.$$.prototype);
    }
    return JQueryEvent;
}
exports.$init$JQueryEvent=$init$JQueryEvent;
$init$JQueryEvent();
var $$$cocjx1888=require('com/openswimsoftware/ceylon/js/xmlhttprequest/0.6.0/com.openswimsoftware.ceylon.js.xmlhttprequest-0.6.0');
$$$cl1.$addmod$($$$cocjx1888,'com.openswimsoftware.ceylon.js.xmlhttprequest/0.6.0');
function JQXHRAbs($$jQXHRAbs){
    $init$JQXHRAbs();
    if ($$jQXHRAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$jQXHRAbs);
    return $$jQXHRAbs;
}
JQXHRAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs']};};
exports.JQXHRAbs=JQXHRAbs;
function $init$JQXHRAbs(){
    if (JQXHRAbs.$$===undefined){
        $$$cl1.initTypeProto(JQXHRAbs,'com.openswimsoftware.ceylon.js.jquery::JQXHRAbs',$$$cocjl339.JSObjectAbs);
        (function($$jQXHRAbs){
            $$jQXHRAbs.done=function done(done$1889){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                return JQXHR($$jQXHRAbs.$native.done(done$1889));
                /*End dynamic block*/
            };$$jQXHRAbs.done.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'done',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("Anything(Anything, String, JQXHR) handler when the request is done",66)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','done']};};
            $$jQXHRAbs.fail=function fail(fail$1890){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                return JQXHR($$jQXHRAbs.$native.fail(fail$1890));
                /*End dynamic block*/
            };$$jQXHRAbs.fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'fail',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("Anything(JQXHR, String?, String?) handler when the request fails",64)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','fail']};};
            $$jQXHRAbs.always=function always(always$1891){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                return JQXHR($$jQXHRAbs.$native.always(always$1891));
                /*End dynamic block*/
            };$$jQXHRAbs.always.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'always',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("Anything(JSObject|JQXHR, String, JXHR|Error) handler when the request completes",79)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','always']};};
            $$jQXHRAbs.doThen=function doThen(done$1892,fail$1893){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                return JQXHR($$jQXHRAbs.$native.then(done$1892,fail$1893));
                /*End dynamic block*/
            };$$jQXHRAbs.doThen.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'done',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'fail',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("Anything(Anything(Anything, String, JQXHR), Anything(JQXHR, String?, String?) handler when the request is done or fails",119)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','doThen']};};
            $$jQXHRAbs.overrideMimeType=function overrideMimeType(mime$1894){
                var $$jQXHRAbs=this;
                
                var case$1895=mime$1894;
                if ($$$cl1.isOfType(mime$1894,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$jQXHRAbs.$native.overrideMimeType(case$1895.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(mime$1894,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$jQXHRAbs.$native.overrideMimeType(case$1895.$native);
                    /*End dynamic block*/
                }
            };$$jQXHRAbs.overrideMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'mime',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("override the request mime type",30)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','overrideMimeType']};};
            $$jQXHRAbs.readyState=function readyState(){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                var readyState$1896=$$jQXHRAbs.$native.readyState;
                $prop$getReadyState$1896={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','readyState','$at','readyState']};}};
                $prop$getReadyState$1896.get=function(){return readyState$1896};
                if((tmpvar$1897=readyState$1896,tmpvar$1898=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'54:21-54:34','jqxhr.ceylon'):XMLHttpRequest).UNSENT,(tmpvar$1897.equals&&tmpvar$1897.equals(tmpvar$1898))||tmpvar$1897===tmpvar$1898)){
                    return $$$cocjx1888.getReadyStateUnsent();
                }else {
                    if((tmpvar$1899=readyState$1896,tmpvar$1900=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'56:28-56:41','jqxhr.ceylon'):XMLHttpRequest).OPENED,(tmpvar$1899.equals&&tmpvar$1899.equals(tmpvar$1900))||tmpvar$1899===tmpvar$1900)){
                        return $$$cocjx1888.getReadyStateOpened();
                    }else {
                        if((tmpvar$1901=readyState$1896,tmpvar$1902=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'58:28-58:41','jqxhr.ceylon'):XMLHttpRequest).HEADERS_RECEIVED,(tmpvar$1901.equals&&tmpvar$1901.equals(tmpvar$1902))||tmpvar$1901===tmpvar$1902)){
                            return $$$cocjx1888.getReadyStateHeadersReceived();
                        }else {
                            if((tmpvar$1903=readyState$1896,tmpvar$1904=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'60:28-60:41','jqxhr.ceylon'):XMLHttpRequest).LOADING,(tmpvar$1903.equals&&tmpvar$1903.equals(tmpvar$1904))||tmpvar$1903===tmpvar$1904)){
                                return $$$cocjx1888.getReadyStateLoading();
                            }else {
                                return (tmpvar$1905=(typeof readyStateDone==='undefined'||readyStateDone===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: readyStateDone")),'63:11-63:24','jqxhr.ceylon'):readyStateDone),$$$cl1.isOfType(tmpvar$1905,{t:$$$cl1.Anything})?tmpvar$1905:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'63:11-63:24','jqxhr.ceylon'));
                            }
                        }
                    }
                }/*End dynamic block*/
            };$$jQXHRAbs.readyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjx1888.ReadyState},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("the current ready state of the request",38)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','readyState']};};
            $$jQXHRAbs.status=function status(){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$jQXHRAbs.$native.status);
                /*End dynamic block*/
            };$$jQXHRAbs.status.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("the request HTTP status code",28)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','status']};};
            $$jQXHRAbs.statusText=function statusText(){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$jQXHRAbs.$native.statusText);
                /*End dynamic block*/
            };$$jQXHRAbs.statusText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("the request HTTP status text code",33)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','statusText']};};
            $$jQXHRAbs.responseText=function responseText(){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$jQXHRAbs.$native.responseText);
                /*End dynamic block*/
            };$$jQXHRAbs.responseText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("the request response as a string",32)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','responseText']};};
            $$jQXHRAbs.responseXML=function responseXML(){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                var responseXML$1906=$$jQXHRAbs.$native.responseXML;
                $prop$getResponseXML$1906={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','responseXML','$at','responseXML']};}};
                $prop$getResponseXML$1906.get=function(){return responseXML$1906};
                if((tmpvar$1907=responseXML$1906,tmpvar$1908=null,(tmpvar$1907.equals&&!tmpvar$1907.equals(tmpvar$1908))||tmpvar$1907!==tmpvar$1908)){
                    return $$$cocjd958.Document(responseXML$1906);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQXHRAbs.responseXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjd958.Document}]},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("the request response as a XML Document",38)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','responseXML']};};
            $$jQXHRAbs.setRequestHeader=function setRequestHeader(header$1909,val$1910){
                var $$jQXHRAbs=this;
                
                var case$1911=header$1909;
                if ($$$cl1.isOfType(header$1909,{t:$$$cl1.String})) {
                    
                    var case$1912=val$1910;
                    if ($$$cl1.isOfType(val$1910,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$jQXHRAbs.$native.setRequestHeader(case$1911.valueOf(),case$1912.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(val$1910,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        $$jQXHRAbs.$native.setRequestHeader(case$1911.valueOf(),case$1912.$native);
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(header$1909,{t:$$$cocjl339.JSString})) {
                    
                    var case$1913=val$1910;
                    if ($$$cl1.isOfType(val$1910,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$jQXHRAbs.$native.setRequestHeader(case$1911.$native,case$1913.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(val$1910,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        $$jQXHRAbs.$native.setRequestHeader(case$1911.$native,case$1913.$native);
                        /*End dynamic block*/
                    }
                }
            };$$jQXHRAbs.setRequestHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'header',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the value of a request header",33)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','setRequestHeader']};};
            $$jQXHRAbs.getAllResponseHeaders=function getAllResponseHeaders(){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                var rheaders$1914=$$jQXHRAbs.$native.getAllResponseHeaders();
                $prop$getRheaders$1914={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','getAllResponseHeaders','$at','rheaders']};}};
                $prop$getRheaders$1914.get=function(){return rheaders$1914};
                if((tmpvar$1915=rheaders$1914,tmpvar$1916=null,(tmpvar$1915.equals&&!tmpvar$1915.equals(tmpvar$1916))||tmpvar$1915!==tmpvar$1916)){
                    return $$$cocjl339.JSString(rheaders$1914);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQXHRAbs.getAllResponseHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns all of the request headers as a string",46)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','getAllResponseHeaders']};};
            $$jQXHRAbs.getResponseHeader=function getResponseHeader(header$1917){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                var rheader$1918;
                $prop$getRheader$1918={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','getResponseHeader','$at','rheader']};}};
                $prop$getRheader$1918.get=function(){return rheader$1918};
                
                var case$1919=header$1917;
                if ($$$cl1.isOfType(header$1917,{t:$$$cl1.String})) {
                    rheader$1918=$$jQXHRAbs.$native.getResponseHeader(case$1919.valueOf());
                }else if ($$$cl1.isOfType(header$1917,{t:$$$cocjl339.JSString})) {
                    rheader$1918=$$jQXHRAbs.$native.getResponseHeader(case$1919.$native);
                }if((tmpvar$1920=rheader$1918,tmpvar$1921=null,(tmpvar$1920.equals&&!tmpvar$1920.equals(tmpvar$1921))||tmpvar$1920!==tmpvar$1921)){
                    return $$$cocjl339.JSString(rheader$1918);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQXHRAbs.getResponseHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[{$nm:'header',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a specific response header",34)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','getResponseHeader']};};
            $$jQXHRAbs.abort=function abort(){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                $$jQXHRAbs.$native.abort();
                /*End dynamic block*/
            };$$jQXHRAbs.abort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("abort the request",17)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','abort']};};
            $$jQXHRAbs.statusCode=function statusCode(){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$jQXHRAbs.$native.statusCode());
                /*End dynamic block*/
            };$$jQXHRAbs.statusCode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("the request status code",23)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','statusCode']};};
        })(JQXHRAbs.$$.prototype);
    }
    return JQXHRAbs;
}
exports.$init$JQXHRAbs=$init$JQXHRAbs;
$init$JQXHRAbs();
function JQXHR(n$1922, $$jQXHR){
    $init$JQXHR();
    if ($$jQXHR===undefined)$$jQXHR=new JQXHR.$$;
    $$jQXHR.n$1922_=n$1922;
    JQXHRAbs($$jQXHR);
    $$jQXHR.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQXHR,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHR','$at','native']};}};
    /*Begin dynamic block*/
    $$jQXHR.$native=$$jQXHR.n$1922;/*End dynamic block*/
    return $$jQXHR;
}
JQXHR.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQXHRAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a jQuery abstraction of XMLHttpRequest across browsers",54)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHR']};};
exports.JQXHR=JQXHR;
function $init$JQXHR(){
    if (JQXHR.$$===undefined){
        $$$cl1.initTypeProto(JQXHR,'com.openswimsoftware.ceylon.js.jquery::JQXHR',$init$JQXHRAbs());
        (function($$jQXHR){
            $$$cl1.defineAttr($$jQXHR,'n$1922',function(){return this.n$1922_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQXHR,d:['com.openswimsoftware.ceylon.js.jquery','JQXHR','$at','n']};});
        })(JQXHR.$$.prototype);
    }
    return JQXHR;
}
exports.$init$JQXHR=$init$JQXHR;
$init$JQXHR();
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("based on jQuery 1.10.X and 2.0.X",32))];};
exports.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.language/1.8.0':[],
'com.openswimsoftware.ceylon.js.dom/4.0.0':function(){return[$$$cl1.shared()];},
'com.openswimsoftware.ceylon.js.json/1.0.0':function(){return[$$$cl1.shared()];},
'com.openswimsoftware.ceylon.js.xmlhttprequest/0.6.0':function(){return[$$$cl1.shared()];}
};};
exports.$pkg$ans$com$openswimsoftware$ceylon$js$jquery=function(){return[$$$cl1.shared()];};
function PromiseAbs($$promiseAbs){
    $init$PromiseAbs();
    if ($$promiseAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$promiseAbs);
    return $$promiseAbs;
}
PromiseAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','PromiseAbs']};};
exports.PromiseAbs=PromiseAbs;
function $init$PromiseAbs(){
    if (PromiseAbs.$$===undefined){
        $$$cl1.initTypeProto(PromiseAbs,'com.openswimsoftware.ceylon.js.jquery::PromiseAbs',$$$cocjl339.JSObjectAbs);
        (function($$promiseAbs){
            $$promiseAbs.always=function always(alwaysCallbacks$1923){
                var $$promiseAbs=this;
                /*Begin dynamic block*/
                return Promise($$promiseAbs.$native.always(alwaysCallbacks$1923));
                /*End dynamic block*/
            };$$promiseAbs.always.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'alwaysCallbacks',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("add handlers to be called when the deferred object is either resolved or rejected",81)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','PromiseAbs','$m','always']};};
            $$promiseAbs.done=function done(doneCallbacks$1924){
                var $$promiseAbs=this;
                /*Begin dynamic block*/
                return Promise($$promiseAbs.$native.done(doneCallbacks$1924));
                /*End dynamic block*/
            };$$promiseAbs.done.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'doneCallbacks',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("add handlers to be called when the deferred object is resolved",62)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','PromiseAbs','$m','done']};};
            $$promiseAbs.fail=function fail(failCallbacks$1925){
                var $$promiseAbs=this;
                /*Begin dynamic block*/
                return Promise($$promiseAbs.$native.fail(failCallbacks$1925));
                /*End dynamic block*/
            };$$promiseAbs.fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'failCallbacks',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("add handlers to be called when the deferred object is rejected",62)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','PromiseAbs','$m','fail']};};
            $$promiseAbs.thenFilter=function thenFilter(doneFilter$1926,failFilter$1927,progressFilter$1928){
                var $$promiseAbs=this;
                /*Begin dynamic block*/
                return Promise($$promiseAbs.$native.then(doneFilter$1926,failFilter$1927,progressFilter$1928));
                /*End dynamic block*/
            };$$promiseAbs.thenFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'doneFilter',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'failFilter',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'progressFilter',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("add handlers to be called when the deferred object is either resolved, rejected or are still in progress",104)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','PromiseAbs','$m','thenFilter']};};
        })(PromiseAbs.$$.prototype);
    }
    return PromiseAbs;
}
exports.$init$PromiseAbs=$init$PromiseAbs;
$init$PromiseAbs();
function Promise(n$1929, $$promise){
    $init$Promise();
    if ($$promise===undefined)$$promise=new Promise.$$;
    $$promise.n$1929_=n$1929;
    PromiseAbs($$promise);
    $$promise.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Promise,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','Promise','$at','native']};}};
    /*Begin dynamic block*/
    $$promise.$native=$$promise.n$1929;/*End dynamic block*/
    return $$promise;
}
Promise.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:PromiseAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a subset of Deferred which is used for managing a set of callbacks",66)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','Promise']};};
exports.Promise=Promise;
function $init$Promise(){
    if (Promise.$$===undefined){
        $$$cl1.initTypeProto(Promise,'com.openswimsoftware.ceylon.js.jquery::Promise',$init$PromiseAbs());
        (function($$promise){
            $$$cl1.defineAttr($$promise,'n$1929',function(){return this.n$1929_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Promise,d:['com.openswimsoftware.ceylon.js.jquery','Promise','$at','n']};});
        })(Promise.$$.prototype);
    }
    return Promise;
}
exports.$init$Promise=$init$Promise;
$init$Promise();
function TweenAbs($$tweenAbs){
    $init$TweenAbs();
    if ($$tweenAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$tweenAbs);
    return $$tweenAbs;
}
TweenAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','TweenAbs']};};
exports.TweenAbs=TweenAbs;
function $init$TweenAbs(){
    if (TweenAbs.$$===undefined){
        $$$cl1.initTypeProto(TweenAbs,'com.openswimsoftware.ceylon.js.jquery::TweenAbs',$$$cocjl339.JSObjectAbs);
        (function($$tweenAbs){
            $$tweenAbs.getInterval=function getInterval(){
                var $$tweenAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$tweenAbs.$native.interval);
                /*End dynamic block*/
            };$$tweenAbs.getInterval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:TweenAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the tween interval",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','TweenAbs','$m','getInterval']};};
            $$tweenAbs.setInterval=function setInterval(interval$1930){
                var $$tweenAbs=this;
                /*Begin dynamic block*/
                $$tweenAbs.$native.interval=interval$1930;
                /*End dynamic block*/
            };$$tweenAbs.setInterval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'interval',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TweenAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the tween interval",23)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','TweenAbs','$m','setInterval']};};
            $$tweenAbs.getOff=function getOff(){
                var $$tweenAbs=this;
                /*Begin dynamic block*/
                if($$tweenAbs.$native.off){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$tweenAbs.getOff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:TweenAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns if the tween is off",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','TweenAbs','$m','getOff']};};
            $$tweenAbs.setOff=function setOff(off$1931){
                var $$tweenAbs=this;
                /*Begin dynamic block*/
                $$tweenAbs.$native.interval=(typeof interval==='undefined'||interval===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: interval")),'33:21-33:28','tween.ceylon'):interval);
                /*End dynamic block*/
            };$$tweenAbs.setOff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'off',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:TweenAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets if the tween is off",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','TweenAbs','$m','setOff']};};
        })(TweenAbs.$$.prototype);
    }
    return TweenAbs;
}
exports.$init$TweenAbs=$init$TweenAbs;
$init$TweenAbs();
function Tween(n$1932, $$tween){
    $init$Tween();
    if ($$tween===undefined)$$tween=new Tween.$$;
    $$tween.n$1932_=n$1932;
    TweenAbs($$tween);
    $$tween.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Tween,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','Tween','$at','native']};}};
    /*Begin dynamic block*/
    $$tween.$native=$$tween.n$1932;/*End dynamic block*/
    return $$tween;
}
Tween.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TweenAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a jQuery animation tween",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','Tween']};};
exports.Tween=Tween;
function $init$Tween(){
    if (Tween.$$===undefined){
        $$$cl1.initTypeProto(Tween,'com.openswimsoftware.ceylon.js.jquery::Tween',$init$TweenAbs());
        (function($$tween){
            $$$cl1.defineAttr($$tween,'n$1932',function(){return this.n$1932_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Tween,d:['com.openswimsoftware.ceylon.js.jquery','Tween','$at','n']};});
        })(Tween.$$.prototype);
    }
    return Tween;
}
exports.$init$Tween=$init$Tween;
$init$Tween();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
