(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.js.language\/1.8.5","ceylon.js.dom\/4.0.0","ceylon.js.json\/1.0.0","ceylon.js.xmlhttprequest\/0.6.0","ceylon.language\/0.6.1"],"$mod-name":"ceylon.js.jquery","$mod-version":"1.10.0","ceylon.js.jquery":{"TweenAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getOff":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getOff"},"setOff":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"off"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setOff"},"test":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"test"},"getInterval":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getInterval"},"setInterval":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"interval"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setInterval"}},"$nm":"TweenAbs"},"DataType":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.jquery","$nm":"dataTypeXML"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeHtml"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeScript"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeJson"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeJsonp"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeText"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DataType"},"JQueryEventAbs":{"abstract":"1","super":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"EventAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"metaKey":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"metaKey"},"result":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"result"},"which":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"which"},"isPropagationStopped":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isPropagationStopped"},"isDefaultPrevented":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isDefaultPrevented"},"delegateTarget":{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[]},"$nm":"delegateTarget"},"data":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"data"},"relatedTarget":{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[]},"$nm":"relatedTarget"},"isImmediatePropogationStopped":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isImmediatePropogationStopped"},"pageX":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"pageX"},"pageY":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"pageY"},"namespace":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"namespace"}},"$nm":"JQueryEventAbs"},"visibleSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"visibleSelector"},"dataTypeXML":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeXML"},"enabledSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"enabledSelector"},"targetSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"targetSelector"},"fileSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"fileSelector"},"jQueryType":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryType"},"onlyChildSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"onlyChildSelector"},"jQueryError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryError"},"jQueryAjaxPrefilter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"dataTypes"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjaxPrefilter"},"jQueryHasData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryHasData"},"passwordSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"passwordSelector"},"jQueryParseHTML":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$def":"1","$nm":"context"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"keepScripts"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParseHTML"},"lastChildSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"lastChildSelector"},"jQueryUnique":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"arr"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryUnique"},"Callbacks":{"super":{"$pk":"ceylon.js.jquery","$nm":"CallbacksAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Callbacks"},"JQXHR":{"super":{"$pk":"ceylon.js.jquery","$nm":"JQXHRAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQXHR"},"lastSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"lastSelector"},"jQueryInArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"array"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryInArray"},"lastOfTypeSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"lastOfTypeSelector"},"CallbacksAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"fired":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"fired"},"remove":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"callbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"remove"},"fireWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"}]},"$mt":"prm","$def":"1","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fireWith"},"lock":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$mt":"mthd","$an":{"shared":[]},"$nm":"lock"},"empty":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$mt":"mthd","$an":{"shared":[]},"$nm":"empty"},"disable":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$mt":"mthd","$an":{"shared":[]},"$nm":"disable"},"locked":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"locked"},"add":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"callbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"add"},"has":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"has"},"fire":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fire"},"disabled":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"disabled"}},"$nm":"CallbacksAbs"},"jQueryExtendDeep":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"deep"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"target"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"objects"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryExtendDeep"},"jQueryMerge":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"first"},{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"second"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryMerge"},"jQueryAjax":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"url"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettingsBuilder"}]},"$mt":"prm","$def":"1","$nm":"settings"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjax"},"submitSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"submitSelector"},"jQuerySetData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQuerySetData"},"dataTypeHtml":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeHtml"},"AnimateOptions":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"queue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"specialEasing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.jquery","$nm":"Tween"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Tween"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Tween"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"step"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"progress"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"complete"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"done"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"fail"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"always"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toNative":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toNative"}},"$at":{"progress":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"progress"},"queue":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]}]},"$mt":"attr","$an":{"shared":[]},"$nm":"queue"},"duration":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"attr","$an":{"shared":[]},"$nm":"duration"},"easing":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"easing"},"fail":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"fail"},"specialEasing":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"specialEasing"},"complete":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"complete"},"done":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"done"},"always":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"always"},"step":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.jquery","$nm":"Tween"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Tween"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Tween"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"step"}},"$nm":"AnimateOptions"},"JSONPSettings":{"super":{"$pk":"ceylon.js.jquery","$nm":"JSONPSettingsAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSONPSettings"},"JQueryAjaxSettings":{"super":{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettingsAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQueryAjaxSettings"},"JQuery":{"super":{"$pk":"ceylon.js.jquery","$nm":"JQueryAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQuery"},"jqThis":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jqThis"},"focusSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"focusSelector"},"emptySelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"emptySelector"},"createJSONPSettings":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.jquery","$nm":"JSONPSettings"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"jsonp"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"jsonpCallback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSONPSettings"},"jQuerySetQueue":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"callbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQuerySetQueue"},"inputSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"inputSelector"},"jQueryIsArray":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsArray"},"jQueryIsNumeric":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsNumeric"},"jQueryGrep":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"array"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"invert"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGrep"},"JQueryAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"nextAll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"nextAll"},"setPropEntries":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPropEntries"},"animate":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"properties"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"animate"},"appendHTML":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendHTML"},"ready":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ready"},"undelegateEvents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"undelegateEvents"},"hide":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hide"},"prevAll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prevAll"},"wrapInnerCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapInnerCallback"},"setOffsetCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Coordinates"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.jquery","$nm":"Coordinates"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Coordinates"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Coordinates"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setOffsetCallback"},"showOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"showOptions"},"clone":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"withDataAndEvents"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"deepWithDataAndEvents"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"clone"},"removeProp":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"propertyName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeProp"},"prependHTML":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prependHTML"},"contents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"contents"},"serialize":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"serialize"},"parent":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parent"},"outerWidth":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"includeMargin"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"outerWidth"},"prev":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prev"},"wrapInner":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"wrappingElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapInner"},"removeAttr":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeAttr"},"setOffset":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.jquery","$nm":"Coordinates"}]},"$mt":"prm","$def":"1","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setOffset"},"addBack":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addBack"},"mouseenter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseenter"},"load":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"data"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"load"},"each":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"each"},"replaceAll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceAll"},"toggleClassName":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"swit"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleClassName"},"getVal":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getVal"},"setCss":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"property"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Number"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCss"},"before":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"before"},"next":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"next"},"fadeOut":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeOut"},"setCssJson":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"property"},{"$t":{"$md":"ceylon.js.json","$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCssJson"},"ajaxError":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxError"},"isSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isSelector"},"getAttr":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getAttr"},"mousemove":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mousemove"},"prependTo":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prependTo"},"map":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"},{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"map"},"getHtml":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getHtml"},"outerHeight":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"includeMargin"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"outerHeight"},"fadeTo":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"duration"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"prm","$nm":"opacity"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeTo"},"ajaxStart":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxStart"},"stopName":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"queue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"clearQueue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"jumpToEnd"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"stopName"},"closestjQuery":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"prm","$nm":"jq"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"closestjQuery"},"slice":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"start"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slice"},"ajaxComplete":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxComplete"},"eq":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"eq"},"focusout":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"focusout"},"keyup":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"keyup"},"change":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"change"},"setVal":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setVal"},"has":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"has"},"after":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"after"},"removeClassCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeClassCallback"},"slideUp":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideUp"},"fadeIn":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeIn"},"closest":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"closest"},"setValCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setValCallback"},"getProp":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getProp"},"append":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"append"},"index":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"index"},"mousedown":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mousedown"},"get":{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"get"},"submit":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"submit"},"select":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"select"},"keydown":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"keydown"},"toggleOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleOptions"},"ajaxSend":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxSend"},"finish":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"queue"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"finish"},"dblclick":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dblclick"},"afterJQuery":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQuery"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"afterJQuery"},"pushStack":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"elements"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"name"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"arguments"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"pushStack"},"bindEvents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bindEvents"},"mouseup":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseup"},"setWidthCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setWidthCallback"},"wrapAll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"wrappingElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapAll"},"setQueue":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"newQueue"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setQueue"},"children":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"children"},"closestElement":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"closestElement"},"mouseleave":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseleave"},"dequeue":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dequeue"},"setScrollTop":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setScrollTop"},"getHeight":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getHeight"},"animateOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"properties"},{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"animateOptions"},"setCssCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"property"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"val"}]],"$mt":"prm","$pt":"f","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"setCssCallback"},"prepend":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prepend"},"promise":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"type"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$def":"1","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"promise"},"setAttr":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttr"},"siblings":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"siblings"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"siblings"},"removeClass":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeClass"},"off":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"events"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"off"},"bind":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"preventBubble"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bind"},"toggleShowOrHide":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"showOrHide"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleShowOrHide"},"addElements":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"prm","seq":"1","$nm":"elements","$min1":"1"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addElements"},"clearQueue":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"clearQueue"},"toggleClassCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"swit"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleClassCallback"},"setPropCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"propertyName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPropCallback"},"slideToggle":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideToggle"},"empty":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"empty"},"setAttrEntries":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttrEntries"},"setProp":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"propertyName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setProp"},"on":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"events"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"on"},"focus":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"focus"},"focusin":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"focusin"},"setDataEntries":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDataEntries"},"resizeTrigger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"resizeTrigger"},"setHtml":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"html"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHtml"},"hoverSingle":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handlerInOut"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hoverSingle"},"removeData":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"names"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeData"},"not":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"not"},"innerWidth":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"innerWidth"},"delegateEvents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"delegateEvents"},"delay":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"duration"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"delay"},"afterElements":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"afterElements"},"isCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isCallback"},"addClass":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addClass"},"position":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Coordinates"},"$mt":"mthd","$an":{"shared":[]},"$nm":"position"},"remove":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"remove"},"click":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"click"},"nextUntil":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"nextUntil"},"delegate":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"delegate"},"appendCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendCallback"},"setAttrCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttrCallback"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"slideUpOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideUpOptions"},"end":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"end"},"serializeArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[]},"$nm":"serializeArray"},"trigger":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQueryEvent"}]},"$mt":"prm","$nm":"event"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"extraParameters"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"trigger"},"toArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toArray"},"insertBefore":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertBefore"},"mouseout":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseout"},"slideToggleOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideToggleOptions"},"filterCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"filterCallback"},"innerHeight":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"innerHeight"},"ajaxStop":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxStop"},"setTextCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTextCallback"},"prevUntil":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prevUntil"},"mouseover":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseover"},"setHeightCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHeightCallback"},"slideDownOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideDownOptions"},"unwrap":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"unwrap"},"last":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"last"},"show":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"show"},"setText":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"textString"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setText"},"jquery":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jquery"},"toggleClass":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"swit"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleClass"},"resize":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"resize"},"fadeToggleOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeToggleOptions"},"getScrollLeft":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getScrollLeft"},"getWidth":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getWidth"},"fadeOutOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeOutOptions"},"ajaxSuccess":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxSuccess"},"getQueue":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns an array of functions"]},"$nm":"getQueue"},"replaceWithCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceWithCallback"},"wrap":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"wrappingElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrap"},"detach":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"detach"},"wrapCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapCallback"},"scroll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"scroll"},"unbind":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},{"$pk":"ceylon.js.jquery","$nm":"JQueryEvent"}]},"$mt":"prm","$nm":"eventType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"unbind"},"fadeToggle":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeToggle"},"getData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"keypress":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"keypress"},"setHeight":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHeight"},"bindCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"eventData"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bindCallback"},"replaceWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"newContent"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceWith"},"filter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"filter"},"undelegateCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"undelegateCallback"},"stop":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"clearQueue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"jumpToEnd"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"stop"},"beforeCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"beforeCallback"},"parents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parents"},"slideDown":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideDown"},"unbindCallaback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"eventType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"unbindCallaback"},"getCss":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"prm","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getCss"},"one":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"events"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"one"},"setScrollLeft":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setScrollLeft"},"blur":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"blur"},"add":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"append"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"add"},"getText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getText"},"toggle":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggle"},"parentsUntil":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parentsUntil"},"getScrollTop":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getScrollTop"},"die":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"die"},"setWidth":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"width"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setWidth"},"setHtmlCallback":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHtmlCallback"},"undelegate":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"namespace"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"undelegate"},"find":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"find"},"error":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"error"},"appendTo":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendTo"},"insertAfter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertAfter"},"hideOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hideOptions"},"hover":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handlerIn"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handlerOut"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hover"},"fadeInOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeInOptions"},"setData":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"},"hasClass":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasClass"},"addSelector":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addSelector"},"beforeHTML":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"beforeHTML"},"offsetParent":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"offsetParent"},"addClassCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"currentClass"}]],"$mt":"prm","$pt":"f","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"currentClass"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"addClassCallback"},"getOffset":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Coordinates"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getOffset"},"setQueueCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"next"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setQueueCallback"},"first":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"first"},"prependCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prependCallback"}},"$nm":"JQueryAbs"},"textSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"textSelector"},"jQueryProxyName":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSFunction"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"additionalArguments"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryProxyName"},"jQueryPost":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"dataType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryPost"},"evenSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"evenSelector"},"jQueryGetQueue":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns JSFunctions[]"]},"$nm":"jQueryGetQueue"},"jQueryEach":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"collection"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryEach"},"jQueryDeferred":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"beforeStart"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryDeferred"},"parentSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"parentSelector"},"JQueryAjaxSettingsAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getXhr":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Anything()?"]},"$nm":"getXhr"},"setCache":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"cache"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCache"},"setContext":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setContext"},"getContents":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"RegExp"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getContents"},"getJsonp":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JSONPSettings"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getJsonp"},"setDataFilter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"datafilter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDataFilter"},"getContext":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getContext"},"setIsLocal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"local"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setIsLocal"},"setContentType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"contentType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setContentType"},"getProcessData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getProcessData"},"setAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"async"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAsync"},"setError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"datafilter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setError"},"getComplete":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns array of Anything(JQXHR, String) or null"]},"$nm":"getComplete"},"getDataType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDataType"},"setHeaders":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"headers"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHeaders"},"setScriptCharset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"scriptCharset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setScriptCharset"},"setContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"RegExp"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"contents"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setContents"},"setCrossDomain":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"crossDomain"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCrossDomain"},"setType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"type"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setType"},"getAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAsync"},"setStatusCode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSNumber"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"statusCodes"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setStatusCode"},"getPassword":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getPassword"},"getIfModified":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getIfModified"},"setDataType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dataType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDataType"},"getJsonpCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns String|String()?"]},"$nm":"getJsonpCallback"},"setMimeType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"mimeType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMimeType"},"setXhrFields":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"xhrFields"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setXhrFields"},"getData":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"getBeforeSend":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Boolean(JQXHR, JQueryAjaxSettings)?"]},"$nm":"getBeforeSend"},"setBeforeSend":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"beforeSend"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setBeforeSend"},"getTraditional":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTraditional"},"getUsername":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUsername"},"getXhrFields":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getXhrFields"},"getStatusCode":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Object: JSNumber -> Anything(JQXHR, String?, String?)|Anything(JQXHR, String?, String?)"]},"$nm":"getStatusCode"},"getMimeType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMimeType"},"getContentType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getContentType"},"getDataFilter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Anything(String, String)?"]},"$nm":"getDataFilter"},"setUsername":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"username"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUsername"},"getSuccess":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns Anything(Anything, String, JQXHR)[]"]},"$nm":"getSuccess"},"getType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getType"},"getError":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns Anything(JQXHR, String?, String?)[]"]},"$nm":"getError"},"setUrl":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUrl"},"getHeaders":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getHeaders"},"setIfModified":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"modified"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setIfModified"},"getAccepts":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAccepts"},"setComplete":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setComplete"},"setPassword":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"password"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPassword"},"getCache":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getCache"},"setConverters":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"converters"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setConverters"},"setSuccess":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"success"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setSuccess"},"getCrossDomain":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getCrossDomain"},"getIsLocal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getIsLocal"},"setXhr":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"xhr"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setXhr"},"getConverters":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getConverters"},"setJsonpCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setJsonpCallback"},"setData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"},"getScriptCharset":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getScriptCharset"},"setGlobal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"global"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setGlobal"},"getUrl":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUrl"},"setTraditional":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"traditional"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTraditional"},"getTimeout":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTimeout"},"setAccepts":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"accepts"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAccepts"},"setTimeout":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"timeout"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTimeout"},"getGlobal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getGlobal"},"setJsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"JSONPSettings"},"$mt":"prm","$nm":"jsonp"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setJsonp"},"setProcessData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"processData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setProcessData"}},"$nm":"JQueryAjaxSettingsAbs"},"dataTypeJson":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeJson"},"rootSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"rootSelector"},"jQueryGetData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGetData"},"jQueryGetJSON":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGetJSON"},"JQueryEvent":{"super":{"$pk":"ceylon.js.jquery","$nm":"JQueryEventAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQueryEvent"},"Promise":{"super":{"$pk":"ceylon.js.jquery","$nm":"PromiseAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Promise"},"radioSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"radioSelector"},"jQueryIsPlainObject":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsPlainObject"},"disabledSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"disabledSelector"},"selectedSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"selectedSelector"},"jQueryWhen":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Deferred"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"deferreds"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryWhen"},"jq":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]}]},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jq"},"jQueryIsFunction":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsFunction"},"jQueryNoConflict":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"removeAll"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryNoConflict"},"JQueryAjaxSettingsBuilder":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"async"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"cache"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"contentType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"context"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"crossDomain"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"data"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"DataType"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"dataType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"global"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"ifModified"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"isLocal"},{"$t":{"$pk":"ceylon.js.jquery","$nm":"JSONPOptions"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonp"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonpCallback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"mimeType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"password"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"processData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"scriptCharset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"timeout"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"traditional"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"type"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"url"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"username"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toNative":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toNative"}},"$at":{"headers":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"headers"},"data":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"data"},"xhrFields":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"xhrFields"},"contentType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"contentType"},"type":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"type"},"password":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"password"},"statusCode":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"statusCode"},"username":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"username"},"complete":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"complete"},"dataFilter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"dataFilter"},"processData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"processData"},"crossDomain":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"crossDomain"},"accepts":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"accepts"},"mimeType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"mimeType"},"jsonpCallback":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]}]},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonpCallback"},"error":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"error"},"cache":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"cache"},"contents":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"RegExp"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"contents"},"global":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"global"},"scriptCharset":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"scriptCharset"},"traditional":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"traditional"},"converters":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"converters"},"async":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"async"},"url":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"url"},"ifModified":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"ifModified"},"dataType":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"DataType"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[]},"$nm":"dataType"},"jsonp":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JSONPOptions"},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonp"},"context":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"context"},"beforeSend":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"beforeSend"},"xhr":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"xhr"},"isLocal":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"isLocal"},"success":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"success"},"timeout":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"timeout"}},"$nm":"JQueryAjaxSettingsBuilder"},"DeferredAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"progress":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"progressCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"progress"},"thenFilter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"doneFilter"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"failFilter"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"progressFilter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"thenFilter"},"resolve":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"resolve"},"rejectWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"rejectWith"},"reject":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"reject"},"notifyWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"notifyWith"},"fail":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"failCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fail"},"resolveWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"resolveWith"},"notify":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"notify"},"done":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"doneCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"done"},"state":{"$t":{"$pk":"ceylon.js.jquery","$nm":"DeferredState"},"$mt":"mthd","$an":{"shared":[]},"$nm":"state"},"promise":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"}]},"$mt":"prm","$def":"1","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"promise"},"always":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"alwaysCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"always"}},"$nm":"DeferredAbs"},"animatedSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"animatedSelector"},"Coordinates":{"super":{"$pk":"ceylon.js.jquery","$nm":"CoordinatesAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Coordinates"},"$pkg-shared":"1","jQueryFxOff":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryFxOff"},"jQueryDequeue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryDequeue"},"jQueryProxy":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSFunction"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"func"},{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"additionalArguments"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryProxy"},"checkedSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"checkedSelector"},"firstOfTypeSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"firstOfTypeSelector"},"jQueryTrim":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"prm","$nm":"str"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryTrim"},"resetSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"resetSelector"},"jQueryNow":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryNow"},"oddSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"oddSelector"},"Deferred":{"super":{"$pk":"ceylon.js.jquery","$nm":"DeferredAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Deferred"},"hiddenSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"hiddenSelector"},"jQueryGlobalEval":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"code"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGlobalEval"},"jQueryHoldReady":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"hold"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryHoldReady"},"JSONPSettingsAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setIsJsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"jsonp"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setIsJsonp"},"getCallback":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getCallback"},"getIsJsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getIsJsonp"},"setCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCallback"}},"$nm":"JSONPSettingsAbs"},"jQueryExtend":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"target"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"objects"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryExtend"},"jQueryMapObject":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryMapObject"},"jQueryCallbacks":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"flags"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryCallbacks"},"JQXHRAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getAllResponseHeaders":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAllResponseHeaders"},"status":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"status"},"responseXML":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Document"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"responseXML"},"done":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"done"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"done"},"doThen":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"done"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"fail"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"doThen"},"readyState":{"$t":{"$md":"ceylon.js.xmlhttprequest","$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"mthd","$an":{"shared":[]},"$nm":"readyState"},"statusText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"statusText"},"responseText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"responseText"},"overrideMimeType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"mime"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"overrideMimeType"},"always":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"always"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"always"},"statusCode":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"statusCode"},"fail":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"fail"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fail"},"getResponseHeader":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getResponseHeader"},"setRequestHeader":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setRequestHeader"},"abort":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"abort"}},"$nm":"JQXHRAbs"},"jQueryAjaxSetup":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettingsBuilder"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjaxSetup"},"createCoordinates":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Coordinates"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]}]},"$mt":"prm","$nm":"top"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]}]},"$mt":"prm","$nm":"left"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createCoordinates"},"buttonSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"buttonSelector"},"jQueryContains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"container"},{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"contained"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryContains"},"jQueryMapArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"array"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryMapArray"},"jQueryNoop":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryNoop"},"allSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"allSelector"},"jQueryAjaxTransport":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dataType"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjaxTransport"},"JSONPOptions":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonp"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonpCallback"}],"$mt":"cls","$an":{"shared":[]},"$at":{"jsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonp"},"jsonpCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonpCallback"}},"$nm":"JSONPOptions"},"deferredStateResolved":{"super":{"$pk":"ceylon.js.jquery","$nm":"DeferredState"},"$mt":"obj","$an":{"shared":[]},"$nm":"deferredStateResolved"},"deferredStatePending":{"super":{"$pk":"ceylon.js.jquery","$nm":"DeferredState"},"$mt":"obj","$an":{"shared":[]},"$nm":"deferredStatePending"},"jQueryFxInterval":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryFxInterval"},"deferredStateRejected":{"super":{"$pk":"ceylon.js.jquery","$nm":"DeferredState"},"$mt":"obj","$an":{"shared":[]},"$nm":"deferredStateRejected"},"checkboxSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"checkboxSelector"},"jQueryIsXMLDoc":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsXMLDoc"},"jQueryParam":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$nm":"obj"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"traditional"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParam"},"jQueryIsWindow":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsWindow"},"dataTypeText":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeText"},"firstSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"firstSelector"},"jQueryParseJSON":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"json"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParseJSON"},"jQueryGet":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"dataType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGet"},"jQueryCssHooks":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryCssHooks"},"jQueryRemoveData":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryRemoveData"},"jQueryParseXML":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParseXML"},"jQueryFnExtend":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryFnExtend"},"CoordinatesAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setTop":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$mt":"prm","$nm":"top"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTop"},"getLeft":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getLeft"},"setLeft":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$mt":"prm","$nm":"left"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setLeft"},"getTop":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTop"}},"$nm":"CoordinatesAbs"},"onlyOfTypeSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"onlyOfTypeSelector"},"DeferredState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.jquery","$nm":"deferredStatePending"},{"$pk":"ceylon.js.jquery","$nm":"deferredStateResolved"},{"$pk":"ceylon.js.jquery","$nm":"deferredStateRejected"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DeferredState"},"dataTypeJsonp":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeJsonp"},"PromiseAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"thenFilter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"doneFilter"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"failFilter"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"progressFilter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"thenFilter"},"fail":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"failCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fail"},"done":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"doneCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"done"},"always":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"alwaysCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"always"}},"$nm":"PromiseAbs"},"Tween":{"super":{"$pk":"ceylon.js.jquery","$nm":"TweenAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Tween"},"imageSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"imageSelector"},"jqElems":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"prm","seq":"1","$nm":"elems","$min1":"1"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jqElems"},"firstChildSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"firstChildSelector"},"jQueryIsEmptyObject":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsEmptyObject"},"dataTypeScript":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeScript"},"jQueryGetScript":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGetScript"},"headerSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"headerSelector"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl32209=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl32209.$addmod$($$$cl32209,'ceylon.language/0.6.1');
exports.$pkg$ans$ceylon$js$jquery=function(){return[$$$cl32209.shared()];};
exports.$mod$ans$=function(){return[$$$cl32209.doc($$$cl32209.String("based on jQuery 1.10.X and 2.0.X",32))];};
var $$$cjl32280=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl32209.$addmod$($$$cjl32280,'ceylon.js.language/1.8.5');

//ClassDefinition DeferredState at deferred.ceylon (3:0-3:122)
function DeferredState(name$32284, $$deferredState){
    $init$DeferredState();
    if ($$deferredState===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$deferredState.name$32284_=name$32284;
    return $$deferredState;
}
DeferredState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.jquery','DeferredState']};};
exports.DeferredState=DeferredState;
function $init$DeferredState(){
    if (DeferredState.$$===undefined){
        $$$cl32209.initTypeProto(DeferredState,'ceylon.js.jquery::DeferredState',$$$cl32209.Basic);
        (function($$deferredState){
            $$$cl32209.defineAttr($$deferredState,'name$32284',function(){return this.name$32284_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$cont:DeferredState,d:['ceylon.js.jquery','DeferredState','$at','name']};});
        })(DeferredState.$$.prototype);
    }
    return DeferredState;
}
exports.$init$DeferredState=$init$DeferredState;
$init$DeferredState();

//ObjectDefinition deferredStatePending at deferred.ceylon (5:0-5:69)
function deferredStatePending$32285(){
    var $$deferredStatePending=new deferredStatePending$32285.$$;
    DeferredState($$$cl32209.String("pending",7),$$deferredStatePending);
    return $$deferredStatePending;
}
function $init$deferredStatePending$32285(){
    if (deferredStatePending$32285.$$===undefined){
        $$$cl32209.initTypeProto(deferredStatePending$32285,'ceylon.js.jquery::deferredStatePending',$init$DeferredState());
    }
    return deferredStatePending$32285;
}
exports.$init$deferredStatePending$32285=$init$deferredStatePending$32285;
$init$deferredStatePending$32285();
var deferredStatePending$32286;
function getDeferredStatePending(){
    if (deferredStatePending$32286===undefined)deferredStatePending$32286=$init$deferredStatePending$32285()();
    return deferredStatePending$32286;
}
exports.getDeferredStatePending=getDeferredStatePending;
getDeferredStatePending.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:deferredStatePending$32285},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','deferredStatePending']};};
$prop$getDeferredStatePending={get:getDeferredStatePending,$$metamodel$$:getDeferredStatePending.$$metamodel$$};
exports.$prop$getDeferredStatePending=$prop$getDeferredStatePending;

//ObjectDefinition deferredStateResolved at deferred.ceylon (6:0-6:71)
function deferredStateResolved$32287(){
    var $$deferredStateResolved=new deferredStateResolved$32287.$$;
    DeferredState($$$cl32209.String("resolved",8),$$deferredStateResolved);
    return $$deferredStateResolved;
}
function $init$deferredStateResolved$32287(){
    if (deferredStateResolved$32287.$$===undefined){
        $$$cl32209.initTypeProto(deferredStateResolved$32287,'ceylon.js.jquery::deferredStateResolved',$init$DeferredState());
    }
    return deferredStateResolved$32287;
}
exports.$init$deferredStateResolved$32287=$init$deferredStateResolved$32287;
$init$deferredStateResolved$32287();
var deferredStateResolved$32288;
function getDeferredStateResolved(){
    if (deferredStateResolved$32288===undefined)deferredStateResolved$32288=$init$deferredStateResolved$32287()();
    return deferredStateResolved$32288;
}
exports.getDeferredStateResolved=getDeferredStateResolved;
getDeferredStateResolved.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:deferredStateResolved$32287},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','deferredStateResolved']};};
$prop$getDeferredStateResolved={get:getDeferredStateResolved,$$metamodel$$:getDeferredStateResolved.$$metamodel$$};
exports.$prop$getDeferredStateResolved=$prop$getDeferredStateResolved;

//ObjectDefinition deferredStateRejected at deferred.ceylon (7:0-7:71)
function deferredStateRejected$32289(){
    var $$deferredStateRejected=new deferredStateRejected$32289.$$;
    DeferredState($$$cl32209.String("rejected",8),$$deferredStateRejected);
    return $$deferredStateRejected;
}
function $init$deferredStateRejected$32289(){
    if (deferredStateRejected$32289.$$===undefined){
        $$$cl32209.initTypeProto(deferredStateRejected$32289,'ceylon.js.jquery::deferredStateRejected',$init$DeferredState());
    }
    return deferredStateRejected$32289;
}
exports.$init$deferredStateRejected$32289=$init$deferredStateRejected$32289;
$init$deferredStateRejected$32289();
var deferredStateRejected$32290;
function getDeferredStateRejected(){
    if (deferredStateRejected$32290===undefined)deferredStateRejected$32290=$init$deferredStateRejected$32289()();
    return deferredStateRejected$32290;
}
exports.getDeferredStateRejected=getDeferredStateRejected;
getDeferredStateRejected.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:deferredStateRejected$32289},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','deferredStateRejected']};};
$prop$getDeferredStateRejected={get:getDeferredStateRejected,$$metamodel$$:getDeferredStateRejected.$$metamodel$$};
exports.$prop$getDeferredStateRejected=$prop$getDeferredStateRejected;

//ClassDefinition DeferredAbs at deferred.ceylon (9:0-94:0)
function DeferredAbs($$deferredAbs){
    $init$DeferredAbs();
    if ($$deferredAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$deferredAbs);
    return $$deferredAbs;
}
DeferredAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.jquery','DeferredAbs']};};
exports.DeferredAbs=DeferredAbs;
function $init$DeferredAbs(){
    if (DeferredAbs.$$===undefined){
        $$$cl32209.initTypeProto(DeferredAbs,'ceylon.js.jquery::DeferredAbs',$$$cjl32280.JSObjectAbs);
        (function($$deferredAbs){
            
            //MethodDefinition always at deferred.ceylon (11:1-15:1)
            $$deferredAbs.always=function always(alwaysCallbacks$32291){
                var $$deferredAbs=this;
                if(alwaysCallbacks$32291===undefined){alwaysCallbacks$32291=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.always(/*NULL PARAM!*/alwaysCallbacks$32291));
                /*End dynamic block*/
            };$$deferredAbs.always.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'alwaysCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','always']};};
            
            //MethodDefinition done at deferred.ceylon (17:1-21:1)
            $$deferredAbs.done=function done(doneCallbacks$32292){
                var $$deferredAbs=this;
                if(doneCallbacks$32292===undefined){doneCallbacks$32292=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.done(/*NULL PARAM!*/doneCallbacks$32292));
                /*End dynamic block*/
            };$$deferredAbs.done.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'doneCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','done']};};
            
            //MethodDefinition fail at deferred.ceylon (23:1-27:1)
            $$deferredAbs.fail=function fail(failCallbacks$32293){
                var $$deferredAbs=this;
                if(failCallbacks$32293===undefined){failCallbacks$32293=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.fail(/*NULL PARAM!*/failCallbacks$32293));
                /*End dynamic block*/
            };$$deferredAbs.fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'failCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','fail']};};
            
            //MethodDefinition thenFilter at deferred.ceylon (29:1-33:1)
            $$deferredAbs.thenFilter$defs$failFilter=function(doneFilter$32294,failFilter$32295,progressFilter$32296){var $$deferredAbs=this;
            return null;};
            $$deferredAbs.thenFilter$defs$progressFilter=function(doneFilter$32294,failFilter$32295,progressFilter$32296){var $$deferredAbs=this;
            return null;};
            $$deferredAbs.thenFilter=function thenFilter(doneFilter$32294,failFilter$32295,progressFilter$32296){
                var $$deferredAbs=this;
                if(failFilter$32295===undefined){failFilter$32295=$$deferredAbs.thenFilter$defs$failFilter(doneFilter$32294,failFilter$32295,progressFilter$32296);}
                if(progressFilter$32296===undefined){progressFilter$32296=$$deferredAbs.thenFilter$defs$progressFilter(doneFilter$32294,failFilter$32295,progressFilter$32296);}
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.then(/*NULL PARAM!*/$$$cl32209.$JsCallable(doneFilter$32294,[],{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})/*NULL PARAM!*/,failFilter$32295/*NULL PARAM!*/,progressFilter$32296));
                /*End dynamic block*/
            };$$deferredAbs.thenFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'doneFilter',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}},{$nm:'failFilter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}},{$nm:'progressFilter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','thenFilter']};};
            
            //MethodDefinition notify at deferred.ceylon (35:1-39:1)
            $$deferredAbs.notify=function notify(args$32297){
                var $$deferredAbs=this;
                if(args$32297===undefined){args$32297=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.notify(/*NULL PARAM!*/args$32297));
                /*End dynamic block*/
            };$$deferredAbs.notify.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','notify']};};
            
            //MethodDefinition notifyWith at deferred.ceylon (41:1-45:1)
            $$deferredAbs.notifyWith=function notifyWith(context$32298,args$32299){
                var $$deferredAbs=this;
                if(args$32299===undefined){args$32299=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.notifyWith(/*NULL PARAM!*/context$32298/*NULL PARAM!*/,args$32299));
                /*End dynamic block*/
            };$$deferredAbs.notifyWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','notifyWith']};};
            
            //MethodDefinition progress at deferred.ceylon (47:1-51:1)
            $$deferredAbs.progress=function progress(progressCallbacks$32300){
                var $$deferredAbs=this;
                if(progressCallbacks$32300===undefined){progressCallbacks$32300=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.progress(/*NULL PARAM!*/progressCallbacks$32300));
                /*End dynamic block*/
            };$$deferredAbs.progress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'progressCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','progress']};};
            
            //MethodDefinition promise at deferred.ceylon (53:1-57:1)
            $$deferredAbs.promise$defs$target=function(target$32301){var $$deferredAbs=this;
            return null;};
            $$deferredAbs.promise=function promise(target$32301){
                var $$deferredAbs=this;
                if(target$32301===undefined){target$32301=$$deferredAbs.promise$defs$target(target$32301);}
                /*Begin dynamic block*/
                return Promise($$deferredAbs.$native.promise(/*NULL PARAM!*/target$32301));
                /*End dynamic block*/
            };$$deferredAbs.promise.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'target',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Anything}]},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','promise']};};
            
            //MethodDefinition reject at deferred.ceylon (59:1-63:1)
            $$deferredAbs.reject=function reject(args$32302){
                var $$deferredAbs=this;
                if(args$32302===undefined){args$32302=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.reject(/*NULL PARAM!*/args$32302));
                /*End dynamic block*/
            };$$deferredAbs.reject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','reject']};};
            
            //MethodDefinition rejectWith at deferred.ceylon (65:1-69:1)
            $$deferredAbs.rejectWith=function rejectWith(context$32303,args$32304){
                var $$deferredAbs=this;
                if(args$32304===undefined){args$32304=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.rejectWith(/*NULL PARAM!*/context$32303/*NULL PARAM!*/,args$32304));
                /*End dynamic block*/
            };$$deferredAbs.rejectWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','rejectWith']};};
            
            //MethodDefinition resolve at deferred.ceylon (71:1-75:1)
            $$deferredAbs.resolve=function resolve(args$32305){
                var $$deferredAbs=this;
                if(args$32305===undefined){args$32305=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.resolve(/*NULL PARAM!*/args$32305));
                /*End dynamic block*/
            };$$deferredAbs.resolve.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','resolve']};};
            
            //MethodDefinition resolveWith at deferred.ceylon (77:1-81:1)
            $$deferredAbs.resolveWith=function resolveWith(context$32306,args$32307){
                var $$deferredAbs=this;
                if(args$32307===undefined){args$32307=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Deferred($$deferredAbs.$native.resolveWith(/*NULL PARAM!*/context$32306/*NULL PARAM!*/,args$32307));
                /*End dynamic block*/
            };$$deferredAbs.resolveWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','resolveWith']};};
            
            //MethodDefinition state at deferred.ceylon (83:1-93:1)
            $$deferredAbs.state=function state(){
                var $$deferredAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$32308=$$deferredAbs.$native.state,tmpvar$32309=$$$cl32209.String("pending",7),(tmpvar$32308.equals&&tmpvar$32308.equals(tmpvar$32309))||tmpvar$32308===tmpvar$32309)){
                    return getDeferredStatePending();
                }else {
                    if((tmpvar$32310=$$deferredAbs.$native.state,tmpvar$32311=$$$cl32209.String("resolved",8),(tmpvar$32310.equals&&tmpvar$32310.equals(tmpvar$32311))||tmpvar$32310===tmpvar$32311)){
                        return getDeferredStateResolved();
                    }else {
                        return getDeferredStateResolved();
                    }
                }/*End dynamic block*/
            };$$deferredAbs.state.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DeferredState},$ps:[],$cont:DeferredAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','state']};};
        })(DeferredAbs.$$.prototype);
    }
    return DeferredAbs;
}
exports.$init$DeferredAbs=$init$DeferredAbs;
$init$DeferredAbs();

//ClassDefinition Deferred at deferred.ceylon (96:0-101:0)
function Deferred(n$32312, $$deferred){
    $init$Deferred();
    if ($$deferred===undefined)$$deferred=new Deferred.$$;
    $$deferred.n$32312_=n$32312;
    DeferredAbs($$deferred);
    
    //AttributeDeclaration native at deferred.ceylon (97:1-97:29)
    $$deferred.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Deferred,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.jquery','Deferred','$at','native']};}};
    /*Begin dynamic block*/
    $$deferred.$native=$$deferred.n$32312;/*End dynamic block*/
    return $$deferred;
}
Deferred.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DeferredAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','Deferred']};};
exports.Deferred=Deferred;
function $init$Deferred(){
    if (Deferred.$$===undefined){
        $$$cl32209.initTypeProto(Deferred,'ceylon.js.jquery::Deferred',$init$DeferredAbs());
        (function($$deferred){
            
            //AttributeDeclaration native at deferred.ceylon (97:1-97:29)
            $$$cl32209.defineAttr($$deferred,'n$32312',function(){return this.n$32312_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Deferred,d:['ceylon.js.jquery','Deferred','$at','n']};});
        })(Deferred.$$.prototype);
    }
    return Deferred;
}
exports.$init$Deferred=$init$Deferred;
$init$Deferred();

//ClassDefinition AnimateOptions at animateoptions.ceylon (3:0-53:0)
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
AnimateOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','AnimateOptions']};};
exports.AnimateOptions=AnimateOptions;
function $init$AnimateOptions(){
    if (AnimateOptions.$$===undefined){
        $$$cl32209.initTypeProto(AnimateOptions,'ceylon.js.jquery::AnimateOptions',$$$cl32209.Basic);
        (function($$animateOptions){
            
            //MethodDefinition toNative at animateoptions.ceylon (9:1-52:1)
            $$animateOptions.toNative=function toNative(){
                var $$animateOptions=this;
                
                //AttributeDeclaration native at animateoptions.ceylon (11:2-11:16)
                var native$32459;
                /*Begin dynamic block*/
                native$32459=(typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'13:12-13:17','animateoptions.ceylon'):Object)();var d$32460;
                if((d$32460=$$animateOptions.duration)!==null){
                    native$32459.duration=d$32460;
                }var e$32461;
                if((e$32461=$$animateOptions.easing)!==null){
                    native$32459.easing=e$32461.valueOf();
                }var q$32462;
                if((q$32462=$$animateOptions.queue)!==null){
                    native$32459.queue=(typeof e==='undefined'||e===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: e")),'21:19-21:19','animateoptions.ceylon'):e);
                }var sE$32463;
                if((sE$32463=$$animateOptions.specialEasing)!==null){
                    
                    //AttributeDeclaration specialEasingNative at animateoptions.ceylon (24:4-24:51)
                    var specialEasingNative$32464=$$$cjl32280.createJSObject();
                    $prop$getSpecialEasingNative$32464={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSObject},d:['ceylon.js.jquery','AnimateOptions','$m','toNative','$at','specialEasingNative']};}};
                    $prop$getSpecialEasingNative$32464.get=function(){return specialEasingNative$32464};
                    //'for' statement at animateoptions.ceylon (25:4-29:4)
                    var it$32465 = sE$32463.iterator();
                    var item$32466;while ((item$32466=it$32465.next())!==$$$cl32209.getFinished()){
                        var key$32467=item$32466.key;
                        var val$32468=item$32466.item;
                        $$$cjl32280.objectDefineProperty(specialEasingNative$32464,(tmpvar$32469=$$$cjl32280.createJSString(key$32467),$$$cl32209.isOfType(tmpvar$32469,{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]})?tmpvar$32469:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'27:48-27:66','animateoptions.ceylon')),$$$cjl32280.DataDescriptor(true,false,true,true,val$32468));
                    }
                    native$32459.specialEasing=specialEasingNative$32464;
                }var s$32470;
                if((s$32470=$$animateOptions.step)!==null){
                    native$32459.step=$$$cl32209.$JsCallable(s$32470/*TODO: callable targs 6*/);
                }var p$32471;
                if((p$32471=$$animateOptions.progress)!==null){
                    native$32459.progress=$$$cl32209.$JsCallable(p$32471/*TODO: callable targs 6*/);
                }var c$32472;
                if((c$32472=$$animateOptions.complete)!==null){
                    native$32459.complete=$$$cl32209.$JsCallable(c$32472/*TODO: callable targs 6*/);
                }var d$32473;
                if((d$32473=$$animateOptions.done)!==null){
                    native$32459.done=$$$cl32209.$JsCallable(d$32473/*TODO: callable targs 6*/);
                }var f$32474;
                if((f$32474=$$animateOptions.fail)!==null){
                    native$32459.fail=$$$cl32209.$JsCallable(f$32474/*TODO: callable targs 6*/);
                }var a$32475;
                if((a$32475=$$animateOptions.always)!==null){
                    native$32459.always=$$$cl32209.$JsCallable(a$32475/*TODO: callable targs 6*/);
                }return $$$cjl32280.JSObject(native$32459);
                /*End dynamic block*/
            };$$animateOptions.toNative.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSObject},$ps:[],$cont:AnimateOptions,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','AnimateOptions','$m','toNative']};};
            $$$cl32209.defineAttr($$animateOptions,'duration',function(){return this.duration_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]}]},$cont:AnimateOptions,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','duration']};});
            $$$cl32209.defineAttr($$animateOptions,'easing',function(){return this.easing_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$cont:AnimateOptions,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','easing']};});
            $$$cl32209.defineAttr($$animateOptions,'queue',function(){return this.queue_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Boolean},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}]},$cont:AnimateOptions,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','queue']};});
            $$$cl32209.defineAttr($$animateOptions,'specialEasing',function(){return this.specialEasing_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.String}}}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','specialEasing']};});
            $$$cl32209.defineAttr($$animateOptions,'step',function(){return this.step_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:Tween},Element:{t:Tween}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:Tween}]}}},Return:{t:$$$cl32209.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','step']};});
            $$$cl32209.defineAttr($$animateOptions,'progress',function(){return this.progress_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},First:{t:Promise},Element:{ t:'u', l:[{t:Promise},{t:$$$cl32209.Integer}]}}},Return:{t:$$$cl32209.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','progress']};});
            $$$cl32209.defineAttr($$animateOptions,'complete',function(){return this.complete_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','complete']};});
            $$$cl32209.defineAttr($$animateOptions,'done',function(){return this.done_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Boolean},Element:{t:$$$cl32209.Boolean}}},First:{t:Promise},Element:{ t:'u', l:[{t:Promise},{t:$$$cl32209.Boolean}]}}},Return:{t:$$$cl32209.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','done']};});
            $$$cl32209.defineAttr($$animateOptions,'fail',function(){return this.fail_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Boolean},Element:{t:$$$cl32209.Boolean}}},First:{t:Promise},Element:{ t:'u', l:[{t:Promise},{t:$$$cl32209.Boolean}]}}},Return:{t:$$$cl32209.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','fail']};});
            $$$cl32209.defineAttr($$animateOptions,'always',function(){return this.always_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Boolean},Element:{t:$$$cl32209.Boolean}}},First:{t:Promise},Element:{ t:'u', l:[{t:Promise},{t:$$$cl32209.Boolean}]}}},Return:{t:$$$cl32209.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','always']};});
        })(AnimateOptions.$$.prototype);
    }
    return AnimateOptions;
}
exports.$init$AnimateOptions=$init$AnimateOptions;
$init$AnimateOptions();

//ClassDefinition PromiseAbs at promise.ceylon (3:0-28:0)
function PromiseAbs($$promiseAbs){
    $init$PromiseAbs();
    if ($$promiseAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$promiseAbs);
    return $$promiseAbs;
}
PromiseAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.jquery','PromiseAbs']};};
exports.PromiseAbs=PromiseAbs;
function $init$PromiseAbs(){
    if (PromiseAbs.$$===undefined){
        $$$cl32209.initTypeProto(PromiseAbs,'ceylon.js.jquery::PromiseAbs',$$$cjl32280.JSObjectAbs);
        (function($$promiseAbs){
            
            //MethodDefinition always at promise.ceylon (5:1-9:1)
            $$promiseAbs.always=function always(alwaysCallbacks$32619){
                var $$promiseAbs=this;
                if(alwaysCallbacks$32619===undefined){alwaysCallbacks$32619=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Promise($$promiseAbs.$native.always(/*NULL PARAM!*/alwaysCallbacks$32619));
                /*End dynamic block*/
            };$$promiseAbs.always.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'alwaysCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','PromiseAbs','$m','always']};};
            
            //MethodDefinition done at promise.ceylon (11:1-15:1)
            $$promiseAbs.done=function done(doneCallbacks$32620){
                var $$promiseAbs=this;
                if(doneCallbacks$32620===undefined){doneCallbacks$32620=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Promise($$promiseAbs.$native.done(/*NULL PARAM!*/doneCallbacks$32620));
                /*End dynamic block*/
            };$$promiseAbs.done.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'doneCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','PromiseAbs','$m','done']};};
            
            //MethodDefinition fail at promise.ceylon (17:1-21:1)
            $$promiseAbs.fail=function fail(failCallbacks$32621){
                var $$promiseAbs=this;
                if(failCallbacks$32621===undefined){failCallbacks$32621=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Promise($$promiseAbs.$native.fail(/*NULL PARAM!*/failCallbacks$32621));
                /*End dynamic block*/
            };$$promiseAbs.fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'failCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','PromiseAbs','$m','fail']};};
            
            //MethodDefinition thenFilter at promise.ceylon (23:1-27:1)
            $$promiseAbs.thenFilter$defs$failFilter=function(doneFilter$32622,failFilter$32623,progressFilter$32624){var $$promiseAbs=this;
            return null;};
            $$promiseAbs.thenFilter$defs$progressFilter=function(doneFilter$32622,failFilter$32623,progressFilter$32624){var $$promiseAbs=this;
            return null;};
            $$promiseAbs.thenFilter=function thenFilter(doneFilter$32622,failFilter$32623,progressFilter$32624){
                var $$promiseAbs=this;
                if(failFilter$32623===undefined){failFilter$32623=$$promiseAbs.thenFilter$defs$failFilter(doneFilter$32622,failFilter$32623,progressFilter$32624);}
                if(progressFilter$32624===undefined){progressFilter$32624=$$promiseAbs.thenFilter$defs$progressFilter(doneFilter$32622,failFilter$32623,progressFilter$32624);}
                /*Begin dynamic block*/
                return Promise($$promiseAbs.$native.then(/*NULL PARAM!*/$$$cl32209.$JsCallable(doneFilter$32622,[],{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})/*NULL PARAM!*/,failFilter$32623/*NULL PARAM!*/,progressFilter$32624));
                /*End dynamic block*/
            };$$promiseAbs.thenFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'doneFilter',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}},{$nm:'failFilter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}},{$nm:'progressFilter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','PromiseAbs','$m','thenFilter']};};
        })(PromiseAbs.$$.prototype);
    }
    return PromiseAbs;
}
exports.$init$PromiseAbs=$init$PromiseAbs;
$init$PromiseAbs();

//ClassDefinition Promise at promise.ceylon (30:0-35:0)
function Promise(n$32625, $$promise){
    $init$Promise();
    if ($$promise===undefined)$$promise=new Promise.$$;
    $$promise.n$32625_=n$32625;
    PromiseAbs($$promise);
    
    //AttributeDeclaration native at promise.ceylon (31:1-31:29)
    $$promise.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Promise,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.jquery','Promise','$at','native']};}};
    /*Begin dynamic block*/
    $$promise.$native=$$promise.n$32625;/*End dynamic block*/
    return $$promise;
}
Promise.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:PromiseAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','Promise']};};
exports.Promise=Promise;
function $init$Promise(){
    if (Promise.$$===undefined){
        $$$cl32209.initTypeProto(Promise,'ceylon.js.jquery::Promise',$init$PromiseAbs());
        (function($$promise){
            
            //AttributeDeclaration native at promise.ceylon (31:1-31:29)
            $$$cl32209.defineAttr($$promise,'n$32625',function(){return this.n$32625_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Promise,d:['ceylon.js.jquery','Promise','$at','n']};});
        })(Promise.$$.prototype);
    }
    return Promise;
}
exports.$init$Promise=$init$Promise;
$init$Promise();

//MethodDefinition createCoordinates at coordinates.ceylon (3:0-14:0)
function createCoordinates(top$32653,left$32654){
    /*Begin dynamic block*/
    
    //AttributeDeclaration coor at coordinates.ceylon (5:2-5:27)
    var coor$32655=(typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'5:17-5:22','coordinates.ceylon'):Object)();
    $prop$getCoor$32655={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.jquery','createCoordinates','$at','coor']};}};
    $prop$getCoor$32655.get=function(){return coor$32655};
    var t$32656;
    if((t$32656=top$32653)!==null){
        coor$32655.top=t$32656;
    }var l$32657;
    if((l$32657=left$32654)!==null){
        coor$32655.left=l$32657;
    }return Coordinates(coor$32655);
    /*End dynamic block*/
}
exports.createCoordinates=createCoordinates;
createCoordinates.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Coordinates},$ps:[{$nm:'top',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Float}]}]},$an:function(){return[];}},{$nm:'left',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Float}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','createCoordinates']};};

//ClassDefinition CoordinatesAbs at coordinates.ceylon (16:0-41:0)
function CoordinatesAbs($$coordinatesAbs){
    $init$CoordinatesAbs();
    if ($$coordinatesAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$coordinatesAbs);
    return $$coordinatesAbs;
}
CoordinatesAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.jquery','CoordinatesAbs']};};
exports.CoordinatesAbs=CoordinatesAbs;
function $init$CoordinatesAbs(){
    if (CoordinatesAbs.$$===undefined){
        $$$cl32209.initTypeProto(CoordinatesAbs,'ceylon.js.jquery::CoordinatesAbs',$$$cjl32280.JSObjectAbs);
        (function($$coordinatesAbs){
            
            //MethodDefinition getTop at coordinates.ceylon (18:1-22:1)
            $$coordinatesAbs.getTop=function getTop(){
                var $$coordinatesAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$coordinatesAbs.$native.top);
                /*End dynamic block*/
            };$$coordinatesAbs.getTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:CoordinatesAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','CoordinatesAbs','$m','getTop']};};
            
            //MethodDefinition setTop at coordinates.ceylon (24:1-28:1)
            $$coordinatesAbs.setTop=function setTop(top$32658){
                var $$coordinatesAbs=this;
                /*Begin dynamic block*/
                $$coordinatesAbs.$native.top=top$32658;
                /*End dynamic block*/
            };$$coordinatesAbs.setTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'top',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.Float}]},$an:function(){return[];}}],$cont:CoordinatesAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','CoordinatesAbs','$m','setTop']};};
            
            //MethodDefinition getLeft at coordinates.ceylon (30:1-34:1)
            $$coordinatesAbs.getLeft=function getLeft(){
                var $$coordinatesAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$coordinatesAbs.$native.left);
                /*End dynamic block*/
            };$$coordinatesAbs.getLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:CoordinatesAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','CoordinatesAbs','$m','getLeft']};};
            
            //MethodDefinition setLeft at coordinates.ceylon (36:1-40:1)
            $$coordinatesAbs.setLeft=function setLeft(left$32659){
                var $$coordinatesAbs=this;
                /*Begin dynamic block*/
                $$coordinatesAbs.$native.left=left$32659;
                /*End dynamic block*/
            };$$coordinatesAbs.setLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'left',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.Float}]},$an:function(){return[];}}],$cont:CoordinatesAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','CoordinatesAbs','$m','setLeft']};};
        })(CoordinatesAbs.$$.prototype);
    }
    return CoordinatesAbs;
}
exports.$init$CoordinatesAbs=$init$CoordinatesAbs;
$init$CoordinatesAbs();

//ClassDefinition Coordinates at coordinates.ceylon (43:0-48:0)
function Coordinates(n$32660, $$coordinates){
    $init$Coordinates();
    if ($$coordinates===undefined)$$coordinates=new Coordinates.$$;
    $$coordinates.n$32660_=n$32660;
    CoordinatesAbs($$coordinates);
    
    //AttributeDeclaration native at coordinates.ceylon (44:1-44:29)
    $$coordinates.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Coordinates,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.jquery','Coordinates','$at','native']};}};
    /*Begin dynamic block*/
    $$coordinates.$native=$$coordinates.n$32660;/*End dynamic block*/
    return $$coordinates;
}
Coordinates.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CoordinatesAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','Coordinates']};};
exports.Coordinates=Coordinates;
function $init$Coordinates(){
    if (Coordinates.$$===undefined){
        $$$cl32209.initTypeProto(Coordinates,'ceylon.js.jquery::Coordinates',$init$CoordinatesAbs());
        (function($$coordinates){
            
            //AttributeDeclaration native at coordinates.ceylon (44:1-44:29)
            $$$cl32209.defineAttr($$coordinates,'n$32660',function(){return this.n$32660_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Coordinates,d:['ceylon.js.jquery','Coordinates','$at','n']};});
        })(Coordinates.$$.prototype);
    }
    return Coordinates;
}
exports.$init$Coordinates=$init$Coordinates;
$init$Coordinates();

//ClassDefinition CallbacksAbs at callbacks.ceylon (3:0-86:0)
function CallbacksAbs($$callbacksAbs){
    $init$CallbacksAbs();
    if ($$callbacksAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$callbacksAbs);
    return $$callbacksAbs;
}
CallbacksAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.jquery','CallbacksAbs']};};
exports.CallbacksAbs=CallbacksAbs;
function $init$CallbacksAbs(){
    if (CallbacksAbs.$$===undefined){
        $$$cl32209.initTypeProto(CallbacksAbs,'ceylon.js.jquery::CallbacksAbs',$$$cjl32280.JSObjectAbs);
        (function($$callbacksAbs){
            
            //MethodDefinition add at callbacks.ceylon (5:1-9:1)
            $$callbacksAbs.add=function add(callbacks$32774){
                var $$callbacksAbs=this;
                if(callbacks$32774===undefined){callbacks$32774=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Callbacks($$callbacksAbs.$native.add(/*NULL PARAM!*/callbacks$32774));
                /*End dynamic block*/
            };$$callbacksAbs.add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'callbacks',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','add']};};
            
            //MethodDefinition disable at callbacks.ceylon (11:1-15:1)
            $$callbacksAbs.disable=function disable(){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                return Callbacks($$callbacksAbs.$native.disable());
                /*End dynamic block*/
            };$$callbacksAbs.disable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','disable']};};
            
            //MethodDefinition disabled at callbacks.ceylon (17:1-25:1)
            $$callbacksAbs.disabled=function disabled(){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                if($$callbacksAbs.$native.disabled()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$callbacksAbs.disabled.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','disabled']};};
            
            //MethodDefinition empty at callbacks.ceylon (27:1-31:1)
            $$callbacksAbs.empty=function empty(){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                return Callbacks($$callbacksAbs.$native.empty());
                /*End dynamic block*/
            };$$callbacksAbs.empty.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','empty']};};
            
            //MethodDefinition fire at callbacks.ceylon (33:1-37:1)
            $$callbacksAbs.fire=function fire(args$32775){
                var $$callbacksAbs=this;
                if(args$32775===undefined){args$32775=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Callbacks($$callbacksAbs.$native.fire(/*NULL PARAM!*/args$32775));
                /*End dynamic block*/
            };$$callbacksAbs.fire.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','fire']};};
            
            //MethodDefinition fired at callbacks.ceylon (39:1-47:1)
            $$callbacksAbs.fired=function fired(){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                if($$callbacksAbs.$native.fired()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$callbacksAbs.fired.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','fired']};};
            
            //MethodDefinition fireWith at callbacks.ceylon (49:1-53:1)
            $$callbacksAbs.fireWith$defs$context=function(context$32776,args$32777){var $$callbacksAbs=this;
            return null;};
            $$callbacksAbs.fireWith=function fireWith(context$32776,args$32777){
                var $$callbacksAbs=this;
                if(context$32776===undefined){context$32776=$$callbacksAbs.fireWith$defs$context(context$32776,args$32777);}
                if(args$32777===undefined){args$32777=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Callbacks($$callbacksAbs.$native.fireWith(/*NULL PARAM!*/context$32776/*NULL PARAM!*/,args$32777));
                /*End dynamic block*/
            };$$callbacksAbs.fireWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Anything}]},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','fireWith']};};
            
            //MethodDefinition has at callbacks.ceylon (55:1-63:1)
            $$callbacksAbs.has=function has(callback$32778){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                if($$callbacksAbs.$native.has(/*NULL PARAM!*/$$$cl32209.$JsCallable(callback$32778,[],{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}))){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$callbacksAbs.has.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','has']};};
            
            //MethodDefinition lock at callbacks.ceylon (65:1-69:1)
            $$callbacksAbs.lock=function lock(){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                return Callbacks($$callbacksAbs.$native.lock());
                /*End dynamic block*/
            };$$callbacksAbs.lock.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','lock']};};
            
            //MethodDefinition locked at callbacks.ceylon (71:1-79:1)
            $$callbacksAbs.locked=function locked(){
                var $$callbacksAbs=this;
                /*Begin dynamic block*/
                if($$callbacksAbs.$native.locked()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$callbacksAbs.locked.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','locked']};};
            
            //MethodDefinition remove at callbacks.ceylon (81:1-85:1)
            $$callbacksAbs.remove=function remove(callbacks$32779){
                var $$callbacksAbs=this;
                if(callbacks$32779===undefined){callbacks$32779=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return Callbacks($$callbacksAbs.$native.remove(/*NULL PARAM!*/callbacks$32779));
                /*End dynamic block*/
            };$$callbacksAbs.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'callbacks',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','remove']};};
        })(CallbacksAbs.$$.prototype);
    }
    return CallbacksAbs;
}
exports.$init$CallbacksAbs=$init$CallbacksAbs;
$init$CallbacksAbs();

//ClassDefinition Callbacks at callbacks.ceylon (88:0-93:0)
function Callbacks(n$32780, $$callbacks){
    $init$Callbacks();
    if ($$callbacks===undefined)$$callbacks=new Callbacks.$$;
    $$callbacks.n$32780_=n$32780;
    CallbacksAbs($$callbacks);
    
    //AttributeDeclaration native at callbacks.ceylon (89:1-89:29)
    $$callbacks.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Callbacks,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.jquery','Callbacks','$at','native']};}};
    /*Begin dynamic block*/
    $$callbacks.$native=$$callbacks.n$32780;/*End dynamic block*/
    return $$callbacks;
}
Callbacks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CallbacksAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','Callbacks']};};
exports.Callbacks=Callbacks;
function $init$Callbacks(){
    if (Callbacks.$$===undefined){
        $$$cl32209.initTypeProto(Callbacks,'ceylon.js.jquery::Callbacks',$init$CallbacksAbs());
        (function($$callbacks){
            
            //AttributeDeclaration native at callbacks.ceylon (89:1-89:29)
            $$$cl32209.defineAttr($$callbacks,'n$32780',function(){return this.n$32780_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Callbacks,d:['ceylon.js.jquery','Callbacks','$at','n']};});
        })(Callbacks.$$.prototype);
    }
    return Callbacks;
}
exports.$init$Callbacks=$init$Callbacks;
$init$Callbacks();

//ClassDefinition TweenAbs at tween.ceylon (3:0-36:0)
function TweenAbs($$tweenAbs){
    $init$TweenAbs();
    if ($$tweenAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$tweenAbs);
    return $$tweenAbs;
}
TweenAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.jquery','TweenAbs']};};
exports.TweenAbs=TweenAbs;
function $init$TweenAbs(){
    if (TweenAbs.$$===undefined){
        $$$cl32209.initTypeProto(TweenAbs,'ceylon.js.jquery::TweenAbs',$$$cjl32280.JSObjectAbs);
        (function($$tweenAbs){
            
            //MethodDefinition getInterval at tween.ceylon (5:1-9:1)
            $$tweenAbs.getInterval=function getInterval(){
                var $$tweenAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$tweenAbs.$native.interval);
                /*End dynamic block*/
            };$$tweenAbs.getInterval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:TweenAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','getInterval']};};
            
            //MethodDefinition test at tween.ceylon (11:1-13:1)
            $$tweenAbs.test=function test(test$32781){
                var $$tweenAbs=this;
                if(test$32781===undefined){test$32781=$$$cl32209.getEmpty();}
            };$$tweenAbs.test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'test',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:TweenAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','test']};};
            
            //MethodDefinition setInterval at tween.ceylon (15:1-19:1)
            $$tweenAbs.setInterval=function setInterval(interval$32782){
                var $$tweenAbs=this;
                /*Begin dynamic block*/
                $$tweenAbs.$native.interval=interval$32782;
                /*End dynamic block*/
            };$$tweenAbs.setInterval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'interval',$mt:'prm',$t:{t:$$$cl32209.Integer},$an:function(){return[];}}],$cont:TweenAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','setInterval']};};
            
            //MethodDefinition getOff at tween.ceylon (21:1-29:1)
            $$tweenAbs.getOff=function getOff(){
                var $$tweenAbs=this;
                /*Begin dynamic block*/
                if($$tweenAbs.$native.off){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$tweenAbs.getOff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:TweenAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','getOff']};};
            
            //MethodDefinition setOff at tween.ceylon (31:1-35:1)
            $$tweenAbs.setOff=function setOff(off$32783){
                var $$tweenAbs=this;
                /*Begin dynamic block*/
                $$tweenAbs.$native.interval=(typeof interval==='undefined'||interval===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: interval")),'33:21-33:28','tween.ceylon'):interval);
                /*End dynamic block*/
            };$$tweenAbs.setOff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'off',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:TweenAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','setOff']};};
        })(TweenAbs.$$.prototype);
    }
    return TweenAbs;
}
exports.$init$TweenAbs=$init$TweenAbs;
$init$TweenAbs();

//ClassDefinition Tween at tween.ceylon (38:0-43:0)
function Tween(n$32784, $$tween){
    $init$Tween();
    if ($$tween===undefined)$$tween=new Tween.$$;
    $$tween.n$32784_=n$32784;
    TweenAbs($$tween);
    
    //AttributeDeclaration native at tween.ceylon (39:1-39:29)
    $$tween.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Tween,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.jquery','Tween','$at','native']};}};
    /*Begin dynamic block*/
    $$tween.$native=$$tween.n$32784;/*End dynamic block*/
    return $$tween;
}
Tween.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TweenAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','Tween']};};
exports.Tween=Tween;
function $init$Tween(){
    if (Tween.$$===undefined){
        $$$cl32209.initTypeProto(Tween,'ceylon.js.jquery::Tween',$init$TweenAbs());
        (function($$tween){
            
            //AttributeDeclaration native at tween.ceylon (39:1-39:29)
            $$$cl32209.defineAttr($$tween,'n$32784',function(){return this.n$32784_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Tween,d:['ceylon.js.jquery','Tween','$at','n']};});
        })(Tween.$$.prototype);
    }
    return Tween;
}
exports.$init$Tween=$init$Tween;
$init$Tween();
var $$$cjd33135=require('ceylon/js/dom/4.0.0/ceylon.js.dom-4.0.0');
$$$cl32209.$addmod$($$$cjd33135,'ceylon.js.dom/4.0.0');

//ClassDefinition JQueryEventAbs at jqueryevent.ceylon (4:0-93:0)
function JQueryEventAbs($$jQueryEventAbs){
    $init$JQueryEventAbs();
    if ($$jQueryEventAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjd33135.EventAbs($$jQueryEventAbs);
    return $$jQueryEventAbs;
}
JQueryEventAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjd33135.EventAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.jquery','JQueryEventAbs']};};
exports.JQueryEventAbs=JQueryEventAbs;
function $init$JQueryEventAbs(){
    if (JQueryEventAbs.$$===undefined){
        $$$cl32209.initTypeProto(JQueryEventAbs,'ceylon.js.jquery::JQueryEventAbs',$$$cjd33135.EventAbs);
        (function($$jQueryEventAbs){
            
            //MethodDefinition data at jqueryevent.ceylon (6:1-10:1)
            $$jQueryEventAbs.data=function data(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$33136=$$jQueryEventAbs.$native.data,$$$cl32209.isOfType(tmpvar$33136,{t:$$$cl32209.Anything})?tmpvar$33136:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'8:10-8:20','jqueryevent.ceylon'));
                /*End dynamic block*/
            };$$jQueryEventAbs.data.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','data']};};
            
            //MethodDefinition delegateTarget at jqueryevent.ceylon (12:1-16:1)
            $$jQueryEventAbs.delegateTarget=function delegateTarget(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                return $$$cjd33135.Element($$jQueryEventAbs.$native.delegateTarget);
                /*End dynamic block*/
            };$$jQueryEventAbs.delegateTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjd33135.Element},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','delegateTarget']};};
            
            //MethodDefinition isDefaultPrevented at jqueryevent.ceylon (18:4-26:4)
            $$jQueryEventAbs.isDefaultPrevented=function isDefaultPrevented(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                if($$jQueryEventAbs.$native.isDefaultPrevented()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryEventAbs.isDefaultPrevented.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','isDefaultPrevented']};};
            
            //MethodDefinition isImmediatePropogationStopped at jqueryevent.ceylon (28:4-36:4)
            $$jQueryEventAbs.isImmediatePropogationStopped=function isImmediatePropogationStopped(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                if($$jQueryEventAbs.$native.isImmediatePropogationStopped()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryEventAbs.isImmediatePropogationStopped.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','isImmediatePropogationStopped']};};
            
            //MethodDefinition isPropagationStopped at jqueryevent.ceylon (38:4-46:4)
            $$jQueryEventAbs.isPropagationStopped=function isPropagationStopped(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                if($$jQueryEventAbs.$native.isPropagationStopped()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryEventAbs.isPropagationStopped.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','isPropagationStopped']};};
            
            //MethodDefinition namespace at jqueryevent.ceylon (48:4-52:4)
            $$jQueryEventAbs.namespace=function namespace(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$jQueryEventAbs.$native.namespace);
                /*End dynamic block*/
            };$$jQueryEventAbs.namespace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','namespace']};};
            
            //MethodDefinition relatedTarget at jqueryevent.ceylon (54:4-58:1)
            $$jQueryEventAbs.relatedTarget=function relatedTarget(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                return $$$cjd33135.Element($$jQueryEventAbs.$native.relatedTarget);
                /*End dynamic block*/
            };$$jQueryEventAbs.relatedTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjd33135.Element},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','relatedTarget']};};
            
            //MethodDefinition result at jqueryevent.ceylon (60:1-64:1)
            $$jQueryEventAbs.result=function result(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$33137=$$jQueryEventAbs.$native.result,$$$cl32209.isOfType(tmpvar$33137,{t:$$$cl32209.Anything})?tmpvar$33137:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'62:10-62:22','jqueryevent.ceylon'));
                /*End dynamic block*/
            };$$jQueryEventAbs.result.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','result']};};
            
            //MethodDefinition pageX at jqueryevent.ceylon (66:4-70:1)
            $$jQueryEventAbs.pageX=function pageX(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$jQueryEventAbs.$native.pageX);
                /*End dynamic block*/
            };$$jQueryEventAbs.pageX.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','pageX']};};
            
            //MethodDefinition pageY at jqueryevent.ceylon (72:4-76:1)
            $$jQueryEventAbs.pageY=function pageY(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$jQueryEventAbs.$native.pageY);
                /*End dynamic block*/
            };$$jQueryEventAbs.pageY.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','pageY']};};
            
            //MethodDefinition metaKey at jqueryevent.ceylon (78:4-86:1)
            $$jQueryEventAbs.metaKey=function metaKey(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                if($$jQueryEventAbs.$native.metaKey){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryEventAbs.metaKey.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','metaKey']};};
            
            //MethodDefinition which at jqueryevent.ceylon (88:4-92:1)
            $$jQueryEventAbs.which=function which(){
                var $$jQueryEventAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$jQueryEventAbs.$native.which);
                /*End dynamic block*/
            };$$jQueryEventAbs.which.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','which']};};
        })(JQueryEventAbs.$$.prototype);
    }
    return JQueryEventAbs;
}
exports.$init$JQueryEventAbs=$init$JQueryEventAbs;
$init$JQueryEventAbs();

//ClassDefinition JQueryEvent at jqueryevent.ceylon (95:0-100:0)
function JQueryEvent(n$33138, $$jQueryEvent){
    $init$JQueryEvent();
    if ($$jQueryEvent===undefined)$$jQueryEvent=new JQueryEvent.$$;
    $$jQueryEvent.n$33138_=n$33138;
    JQueryEventAbs($$jQueryEvent);
    
    //AttributeDeclaration native at jqueryevent.ceylon (96:1-96:29)
    $$jQueryEvent.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JQueryEvent,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.jquery','JQueryEvent','$at','native']};}};
    /*Begin dynamic block*/
    $$jQueryEvent.$native=$$jQueryEvent.n$33138;/*End dynamic block*/
    return $$jQueryEvent;
}
JQueryEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQueryEventAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryEvent']};};
exports.JQueryEvent=JQueryEvent;
function $init$JQueryEvent(){
    if (JQueryEvent.$$===undefined){
        $$$cl32209.initTypeProto(JQueryEvent,'ceylon.js.jquery::JQueryEvent',$init$JQueryEventAbs());
        (function($$jQueryEvent){
            
            //AttributeDeclaration native at jqueryevent.ceylon (96:1-96:29)
            $$$cl32209.defineAttr($$jQueryEvent,'n$33138',function(){return this.n$33138_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JQueryEvent,d:['ceylon.js.jquery','JQueryEvent','$at','n']};});
        })(JQueryEvent.$$.prototype);
    }
    return JQueryEvent;
}
exports.$init$JQueryEvent=$init$JQueryEvent;
$init$JQueryEvent();
var $$$cjj33169=require('ceylon/js/json/1.0.0/ceylon.js.json-1.0.0');
$$$cl32209.$addmod$($$$cjj33169,'ceylon.js.json/1.0.0');

//AttributeDeclaration allSelector at jquery.ceylon (5:0-5:31)
var allSelector$33170;function $valinit$allSelector$33170(){if (allSelector$33170===undefined)allSelector$33170=$$$cl32209.String("*",1);return allSelector$33170;};$valinit$allSelector$33170();
function getAllSelector(){return $valinit$allSelector$33170();}
exports.getAllSelector=getAllSelector;
var $prop$getAllSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','allSelector']};}};
exports.$prop$getAllSelector=$prop$getAllSelector;
$prop$getAllSelector.get=getAllSelector;
getAllSelector.$$metamodel$$=$prop$getAllSelector.$$metamodel$$;

//AttributeDeclaration animatedSelector at jquery.ceylon (6:0-6:44)
var animatedSelector$33171;function $valinit$animatedSelector$33171(){if (animatedSelector$33171===undefined)animatedSelector$33171=$$$cl32209.String(":animated",9);return animatedSelector$33171;};$valinit$animatedSelector$33171();
function getAnimatedSelector(){return $valinit$animatedSelector$33171();}
exports.getAnimatedSelector=getAnimatedSelector;
var $prop$getAnimatedSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','animatedSelector']};}};
exports.$prop$getAnimatedSelector=$prop$getAnimatedSelector;
$prop$getAnimatedSelector.get=getAnimatedSelector;
getAnimatedSelector.$$metamodel$$=$prop$getAnimatedSelector.$$metamodel$$;

//AttributeDeclaration buttonSelector at jquery.ceylon (7:0-7:40)
var buttonSelector$33172;function $valinit$buttonSelector$33172(){if (buttonSelector$33172===undefined)buttonSelector$33172=$$$cl32209.String(":button",7);return buttonSelector$33172;};$valinit$buttonSelector$33172();
function getButtonSelector(){return $valinit$buttonSelector$33172();}
exports.getButtonSelector=getButtonSelector;
var $prop$getButtonSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','buttonSelector']};}};
exports.$prop$getButtonSelector=$prop$getButtonSelector;
$prop$getButtonSelector.get=getButtonSelector;
getButtonSelector.$$metamodel$$=$prop$getButtonSelector.$$metamodel$$;

//AttributeDeclaration checkboxSelector at jquery.ceylon (8:0-8:44)
var checkboxSelector$33173;function $valinit$checkboxSelector$33173(){if (checkboxSelector$33173===undefined)checkboxSelector$33173=$$$cl32209.String(":checkbox",9);return checkboxSelector$33173;};$valinit$checkboxSelector$33173();
function getCheckboxSelector(){return $valinit$checkboxSelector$33173();}
exports.getCheckboxSelector=getCheckboxSelector;
var $prop$getCheckboxSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','checkboxSelector']};}};
exports.$prop$getCheckboxSelector=$prop$getCheckboxSelector;
$prop$getCheckboxSelector.get=getCheckboxSelector;
getCheckboxSelector.$$metamodel$$=$prop$getCheckboxSelector.$$metamodel$$;

//AttributeDeclaration checkedSelector at jquery.ceylon (9:0-9:42)
var checkedSelector$33174;function $valinit$checkedSelector$33174(){if (checkedSelector$33174===undefined)checkedSelector$33174=$$$cl32209.String(":checked",8);return checkedSelector$33174;};$valinit$checkedSelector$33174();
function getCheckedSelector(){return $valinit$checkedSelector$33174();}
exports.getCheckedSelector=getCheckedSelector;
var $prop$getCheckedSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','checkedSelector']};}};
exports.$prop$getCheckedSelector=$prop$getCheckedSelector;
$prop$getCheckedSelector.get=getCheckedSelector;
getCheckedSelector.$$metamodel$$=$prop$getCheckedSelector.$$metamodel$$;

//AttributeDeclaration disabledSelector at jquery.ceylon (10:0-10:44)
var disabledSelector$33175;function $valinit$disabledSelector$33175(){if (disabledSelector$33175===undefined)disabledSelector$33175=$$$cl32209.String(":disabled",9);return disabledSelector$33175;};$valinit$disabledSelector$33175();
function getDisabledSelector(){return $valinit$disabledSelector$33175();}
exports.getDisabledSelector=getDisabledSelector;
var $prop$getDisabledSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','disabledSelector']};}};
exports.$prop$getDisabledSelector=$prop$getDisabledSelector;
$prop$getDisabledSelector.get=getDisabledSelector;
getDisabledSelector.$$metamodel$$=$prop$getDisabledSelector.$$metamodel$$;

//AttributeDeclaration emptySelector at jquery.ceylon (11:0-11:38)
var emptySelector$33176;function $valinit$emptySelector$33176(){if (emptySelector$33176===undefined)emptySelector$33176=$$$cl32209.String(":empty",6);return emptySelector$33176;};$valinit$emptySelector$33176();
function getEmptySelector(){return $valinit$emptySelector$33176();}
exports.getEmptySelector=getEmptySelector;
var $prop$getEmptySelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','emptySelector']};}};
exports.$prop$getEmptySelector=$prop$getEmptySelector;
$prop$getEmptySelector.get=getEmptySelector;
getEmptySelector.$$metamodel$$=$prop$getEmptySelector.$$metamodel$$;

//AttributeDeclaration enabledSelector at jquery.ceylon (12:0-12:42)
var enabledSelector$33177;function $valinit$enabledSelector$33177(){if (enabledSelector$33177===undefined)enabledSelector$33177=$$$cl32209.String(":enabled",8);return enabledSelector$33177;};$valinit$enabledSelector$33177();
function getEnabledSelector(){return $valinit$enabledSelector$33177();}
exports.getEnabledSelector=getEnabledSelector;
var $prop$getEnabledSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','enabledSelector']};}};
exports.$prop$getEnabledSelector=$prop$getEnabledSelector;
$prop$getEnabledSelector.get=getEnabledSelector;
getEnabledSelector.$$metamodel$$=$prop$getEnabledSelector.$$metamodel$$;

//AttributeDeclaration evenSelector at jquery.ceylon (13:0-13:36)
var evenSelector$33178;function $valinit$evenSelector$33178(){if (evenSelector$33178===undefined)evenSelector$33178=$$$cl32209.String(":even",5);return evenSelector$33178;};$valinit$evenSelector$33178();
function getEvenSelector(){return $valinit$evenSelector$33178();}
exports.getEvenSelector=getEvenSelector;
var $prop$getEvenSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','evenSelector']};}};
exports.$prop$getEvenSelector=$prop$getEvenSelector;
$prop$getEvenSelector.get=getEvenSelector;
getEvenSelector.$$metamodel$$=$prop$getEvenSelector.$$metamodel$$;

//AttributeDeclaration fileSelector at jquery.ceylon (14:0-14:36)
var fileSelector$33179;function $valinit$fileSelector$33179(){if (fileSelector$33179===undefined)fileSelector$33179=$$$cl32209.String(":file",5);return fileSelector$33179;};$valinit$fileSelector$33179();
function getFileSelector(){return $valinit$fileSelector$33179();}
exports.getFileSelector=getFileSelector;
var $prop$getFileSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','fileSelector']};}};
exports.$prop$getFileSelector=$prop$getFileSelector;
$prop$getFileSelector.get=getFileSelector;
getFileSelector.$$metamodel$$=$prop$getFileSelector.$$metamodel$$;

//AttributeDeclaration firstChildSelector at jquery.ceylon (15:0-15:49)
var firstChildSelector$33180;function $valinit$firstChildSelector$33180(){if (firstChildSelector$33180===undefined)firstChildSelector$33180=$$$cl32209.String(":first-child",12);return firstChildSelector$33180;};$valinit$firstChildSelector$33180();
function getFirstChildSelector(){return $valinit$firstChildSelector$33180();}
exports.getFirstChildSelector=getFirstChildSelector;
var $prop$getFirstChildSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','firstChildSelector']};}};
exports.$prop$getFirstChildSelector=$prop$getFirstChildSelector;
$prop$getFirstChildSelector.get=getFirstChildSelector;
getFirstChildSelector.$$metamodel$$=$prop$getFirstChildSelector.$$metamodel$$;

//AttributeDeclaration firstOfTypeSelector at jquery.ceylon (16:0-16:52)
var firstOfTypeSelector$33181;function $valinit$firstOfTypeSelector$33181(){if (firstOfTypeSelector$33181===undefined)firstOfTypeSelector$33181=$$$cl32209.String(":first-of-type",14);return firstOfTypeSelector$33181;};$valinit$firstOfTypeSelector$33181();
function getFirstOfTypeSelector(){return $valinit$firstOfTypeSelector$33181();}
exports.getFirstOfTypeSelector=getFirstOfTypeSelector;
var $prop$getFirstOfTypeSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','firstOfTypeSelector']};}};
exports.$prop$getFirstOfTypeSelector=$prop$getFirstOfTypeSelector;
$prop$getFirstOfTypeSelector.get=getFirstOfTypeSelector;
getFirstOfTypeSelector.$$metamodel$$=$prop$getFirstOfTypeSelector.$$metamodel$$;

//AttributeDeclaration firstSelector at jquery.ceylon (17:0-17:38)
var firstSelector$33182;function $valinit$firstSelector$33182(){if (firstSelector$33182===undefined)firstSelector$33182=$$$cl32209.String(":first",6);return firstSelector$33182;};$valinit$firstSelector$33182();
function getFirstSelector(){return $valinit$firstSelector$33182();}
exports.getFirstSelector=getFirstSelector;
var $prop$getFirstSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','firstSelector']};}};
exports.$prop$getFirstSelector=$prop$getFirstSelector;
$prop$getFirstSelector.get=getFirstSelector;
getFirstSelector.$$metamodel$$=$prop$getFirstSelector.$$metamodel$$;

//AttributeDeclaration focusSelector at jquery.ceylon (18:0-18:38)
var focusSelector$33183;function $valinit$focusSelector$33183(){if (focusSelector$33183===undefined)focusSelector$33183=$$$cl32209.String(":focus",6);return focusSelector$33183;};$valinit$focusSelector$33183();
function getFocusSelector(){return $valinit$focusSelector$33183();}
exports.getFocusSelector=getFocusSelector;
var $prop$getFocusSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','focusSelector']};}};
exports.$prop$getFocusSelector=$prop$getFocusSelector;
$prop$getFocusSelector.get=getFocusSelector;
getFocusSelector.$$metamodel$$=$prop$getFocusSelector.$$metamodel$$;

//AttributeDeclaration headerSelector at jquery.ceylon (19:0-19:40)
var headerSelector$33184;function $valinit$headerSelector$33184(){if (headerSelector$33184===undefined)headerSelector$33184=$$$cl32209.String(":header",7);return headerSelector$33184;};$valinit$headerSelector$33184();
function getHeaderSelector(){return $valinit$headerSelector$33184();}
exports.getHeaderSelector=getHeaderSelector;
var $prop$getHeaderSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','headerSelector']};}};
exports.$prop$getHeaderSelector=$prop$getHeaderSelector;
$prop$getHeaderSelector.get=getHeaderSelector;
getHeaderSelector.$$metamodel$$=$prop$getHeaderSelector.$$metamodel$$;

//AttributeDeclaration hiddenSelector at jquery.ceylon (20:0-20:40)
var hiddenSelector$33185;function $valinit$hiddenSelector$33185(){if (hiddenSelector$33185===undefined)hiddenSelector$33185=$$$cl32209.String(":hidden",7);return hiddenSelector$33185;};$valinit$hiddenSelector$33185();
function getHiddenSelector(){return $valinit$hiddenSelector$33185();}
exports.getHiddenSelector=getHiddenSelector;
var $prop$getHiddenSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','hiddenSelector']};}};
exports.$prop$getHiddenSelector=$prop$getHiddenSelector;
$prop$getHiddenSelector.get=getHiddenSelector;
getHiddenSelector.$$metamodel$$=$prop$getHiddenSelector.$$metamodel$$;

//AttributeDeclaration imageSelector at jquery.ceylon (21:0-21:38)
var imageSelector$33186;function $valinit$imageSelector$33186(){if (imageSelector$33186===undefined)imageSelector$33186=$$$cl32209.String(":image",6);return imageSelector$33186;};$valinit$imageSelector$33186();
function getImageSelector(){return $valinit$imageSelector$33186();}
exports.getImageSelector=getImageSelector;
var $prop$getImageSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','imageSelector']};}};
exports.$prop$getImageSelector=$prop$getImageSelector;
$prop$getImageSelector.get=getImageSelector;
getImageSelector.$$metamodel$$=$prop$getImageSelector.$$metamodel$$;

//AttributeDeclaration inputSelector at jquery.ceylon (22:0-22:38)
var inputSelector$33187;function $valinit$inputSelector$33187(){if (inputSelector$33187===undefined)inputSelector$33187=$$$cl32209.String(":input",6);return inputSelector$33187;};$valinit$inputSelector$33187();
function getInputSelector(){return $valinit$inputSelector$33187();}
exports.getInputSelector=getInputSelector;
var $prop$getInputSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','inputSelector']};}};
exports.$prop$getInputSelector=$prop$getInputSelector;
$prop$getInputSelector.get=getInputSelector;
getInputSelector.$$metamodel$$=$prop$getInputSelector.$$metamodel$$;

//AttributeDeclaration lastChildSelector at jquery.ceylon (23:0-23:47)
var lastChildSelector$33188;function $valinit$lastChildSelector$33188(){if (lastChildSelector$33188===undefined)lastChildSelector$33188=$$$cl32209.String(":last-child",11);return lastChildSelector$33188;};$valinit$lastChildSelector$33188();
function getLastChildSelector(){return $valinit$lastChildSelector$33188();}
exports.getLastChildSelector=getLastChildSelector;
var $prop$getLastChildSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','lastChildSelector']};}};
exports.$prop$getLastChildSelector=$prop$getLastChildSelector;
$prop$getLastChildSelector.get=getLastChildSelector;
getLastChildSelector.$$metamodel$$=$prop$getLastChildSelector.$$metamodel$$;

//AttributeDeclaration lastOfTypeSelector at jquery.ceylon (24:0-24:50)
var lastOfTypeSelector$33189;function $valinit$lastOfTypeSelector$33189(){if (lastOfTypeSelector$33189===undefined)lastOfTypeSelector$33189=$$$cl32209.String(":last-of-type",13);return lastOfTypeSelector$33189;};$valinit$lastOfTypeSelector$33189();
function getLastOfTypeSelector(){return $valinit$lastOfTypeSelector$33189();}
exports.getLastOfTypeSelector=getLastOfTypeSelector;
var $prop$getLastOfTypeSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','lastOfTypeSelector']};}};
exports.$prop$getLastOfTypeSelector=$prop$getLastOfTypeSelector;
$prop$getLastOfTypeSelector.get=getLastOfTypeSelector;
getLastOfTypeSelector.$$metamodel$$=$prop$getLastOfTypeSelector.$$metamodel$$;

//AttributeDeclaration lastSelector at jquery.ceylon (25:0-25:36)
var lastSelector$33190;function $valinit$lastSelector$33190(){if (lastSelector$33190===undefined)lastSelector$33190=$$$cl32209.String(":last",5);return lastSelector$33190;};$valinit$lastSelector$33190();
function getLastSelector(){return $valinit$lastSelector$33190();}
exports.getLastSelector=getLastSelector;
var $prop$getLastSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','lastSelector']};}};
exports.$prop$getLastSelector=$prop$getLastSelector;
$prop$getLastSelector.get=getLastSelector;
getLastSelector.$$metamodel$$=$prop$getLastSelector.$$metamodel$$;

//AttributeDeclaration oddSelector at jquery.ceylon (26:0-26:34)
var oddSelector$33191;function $valinit$oddSelector$33191(){if (oddSelector$33191===undefined)oddSelector$33191=$$$cl32209.String(":odd",4);return oddSelector$33191;};$valinit$oddSelector$33191();
function getOddSelector(){return $valinit$oddSelector$33191();}
exports.getOddSelector=getOddSelector;
var $prop$getOddSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','oddSelector']};}};
exports.$prop$getOddSelector=$prop$getOddSelector;
$prop$getOddSelector.get=getOddSelector;
getOddSelector.$$metamodel$$=$prop$getOddSelector.$$metamodel$$;

//AttributeDeclaration onlyChildSelector at jquery.ceylon (27:0-27:47)
var onlyChildSelector$33192;function $valinit$onlyChildSelector$33192(){if (onlyChildSelector$33192===undefined)onlyChildSelector$33192=$$$cl32209.String(":only-child",11);return onlyChildSelector$33192;};$valinit$onlyChildSelector$33192();
function getOnlyChildSelector(){return $valinit$onlyChildSelector$33192();}
exports.getOnlyChildSelector=getOnlyChildSelector;
var $prop$getOnlyChildSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','onlyChildSelector']};}};
exports.$prop$getOnlyChildSelector=$prop$getOnlyChildSelector;
$prop$getOnlyChildSelector.get=getOnlyChildSelector;
getOnlyChildSelector.$$metamodel$$=$prop$getOnlyChildSelector.$$metamodel$$;

//AttributeDeclaration onlyOfTypeSelector at jquery.ceylon (28:0-28:50)
var onlyOfTypeSelector$33193;function $valinit$onlyOfTypeSelector$33193(){if (onlyOfTypeSelector$33193===undefined)onlyOfTypeSelector$33193=$$$cl32209.String(":only-of-type",13);return onlyOfTypeSelector$33193;};$valinit$onlyOfTypeSelector$33193();
function getOnlyOfTypeSelector(){return $valinit$onlyOfTypeSelector$33193();}
exports.getOnlyOfTypeSelector=getOnlyOfTypeSelector;
var $prop$getOnlyOfTypeSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','onlyOfTypeSelector']};}};
exports.$prop$getOnlyOfTypeSelector=$prop$getOnlyOfTypeSelector;
$prop$getOnlyOfTypeSelector.get=getOnlyOfTypeSelector;
getOnlyOfTypeSelector.$$metamodel$$=$prop$getOnlyOfTypeSelector.$$metamodel$$;

//AttributeDeclaration parentSelector at jquery.ceylon (29:0-29:40)
var parentSelector$33194;function $valinit$parentSelector$33194(){if (parentSelector$33194===undefined)parentSelector$33194=$$$cl32209.String(":parent",7);return parentSelector$33194;};$valinit$parentSelector$33194();
function getParentSelector(){return $valinit$parentSelector$33194();}
exports.getParentSelector=getParentSelector;
var $prop$getParentSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','parentSelector']};}};
exports.$prop$getParentSelector=$prop$getParentSelector;
$prop$getParentSelector.get=getParentSelector;
getParentSelector.$$metamodel$$=$prop$getParentSelector.$$metamodel$$;

//AttributeDeclaration passwordSelector at jquery.ceylon (30:0-30:44)
var passwordSelector$33195;function $valinit$passwordSelector$33195(){if (passwordSelector$33195===undefined)passwordSelector$33195=$$$cl32209.String(":password",9);return passwordSelector$33195;};$valinit$passwordSelector$33195();
function getPasswordSelector(){return $valinit$passwordSelector$33195();}
exports.getPasswordSelector=getPasswordSelector;
var $prop$getPasswordSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','passwordSelector']};}};
exports.$prop$getPasswordSelector=$prop$getPasswordSelector;
$prop$getPasswordSelector.get=getPasswordSelector;
getPasswordSelector.$$metamodel$$=$prop$getPasswordSelector.$$metamodel$$;

//AttributeDeclaration radioSelector at jquery.ceylon (31:0-31:38)
var radioSelector$33196;function $valinit$radioSelector$33196(){if (radioSelector$33196===undefined)radioSelector$33196=$$$cl32209.String(":radio",6);return radioSelector$33196;};$valinit$radioSelector$33196();
function getRadioSelector(){return $valinit$radioSelector$33196();}
exports.getRadioSelector=getRadioSelector;
var $prop$getRadioSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','radioSelector']};}};
exports.$prop$getRadioSelector=$prop$getRadioSelector;
$prop$getRadioSelector.get=getRadioSelector;
getRadioSelector.$$metamodel$$=$prop$getRadioSelector.$$metamodel$$;

//AttributeDeclaration resetSelector at jquery.ceylon (32:0-32:38)
var resetSelector$33197;function $valinit$resetSelector$33197(){if (resetSelector$33197===undefined)resetSelector$33197=$$$cl32209.String(":reset",6);return resetSelector$33197;};$valinit$resetSelector$33197();
function getResetSelector(){return $valinit$resetSelector$33197();}
exports.getResetSelector=getResetSelector;
var $prop$getResetSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','resetSelector']};}};
exports.$prop$getResetSelector=$prop$getResetSelector;
$prop$getResetSelector.get=getResetSelector;
getResetSelector.$$metamodel$$=$prop$getResetSelector.$$metamodel$$;

//AttributeDeclaration rootSelector at jquery.ceylon (33:0-33:36)
var rootSelector$33198;function $valinit$rootSelector$33198(){if (rootSelector$33198===undefined)rootSelector$33198=$$$cl32209.String(":root",5);return rootSelector$33198;};$valinit$rootSelector$33198();
function getRootSelector(){return $valinit$rootSelector$33198();}
exports.getRootSelector=getRootSelector;
var $prop$getRootSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','rootSelector']};}};
exports.$prop$getRootSelector=$prop$getRootSelector;
$prop$getRootSelector.get=getRootSelector;
getRootSelector.$$metamodel$$=$prop$getRootSelector.$$metamodel$$;

//AttributeDeclaration selectedSelector at jquery.ceylon (34:0-34:44)
var selectedSelector$33199;function $valinit$selectedSelector$33199(){if (selectedSelector$33199===undefined)selectedSelector$33199=$$$cl32209.String(":selected",9);return selectedSelector$33199;};$valinit$selectedSelector$33199();
function getSelectedSelector(){return $valinit$selectedSelector$33199();}
exports.getSelectedSelector=getSelectedSelector;
var $prop$getSelectedSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','selectedSelector']};}};
exports.$prop$getSelectedSelector=$prop$getSelectedSelector;
$prop$getSelectedSelector.get=getSelectedSelector;
getSelectedSelector.$$metamodel$$=$prop$getSelectedSelector.$$metamodel$$;

//AttributeDeclaration submitSelector at jquery.ceylon (35:0-35:40)
var submitSelector$33200;function $valinit$submitSelector$33200(){if (submitSelector$33200===undefined)submitSelector$33200=$$$cl32209.String(":submit",7);return submitSelector$33200;};$valinit$submitSelector$33200();
function getSubmitSelector(){return $valinit$submitSelector$33200();}
exports.getSubmitSelector=getSubmitSelector;
var $prop$getSubmitSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','submitSelector']};}};
exports.$prop$getSubmitSelector=$prop$getSubmitSelector;
$prop$getSubmitSelector.get=getSubmitSelector;
getSubmitSelector.$$metamodel$$=$prop$getSubmitSelector.$$metamodel$$;

//AttributeDeclaration targetSelector at jquery.ceylon (36:0-36:40)
var targetSelector$33201;function $valinit$targetSelector$33201(){if (targetSelector$33201===undefined)targetSelector$33201=$$$cl32209.String(":target",7);return targetSelector$33201;};$valinit$targetSelector$33201();
function getTargetSelector(){return $valinit$targetSelector$33201();}
exports.getTargetSelector=getTargetSelector;
var $prop$getTargetSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','targetSelector']};}};
exports.$prop$getTargetSelector=$prop$getTargetSelector;
$prop$getTargetSelector.get=getTargetSelector;
getTargetSelector.$$metamodel$$=$prop$getTargetSelector.$$metamodel$$;

//AttributeDeclaration textSelector at jquery.ceylon (37:0-37:36)
var textSelector$33202;function $valinit$textSelector$33202(){if (textSelector$33202===undefined)textSelector$33202=$$$cl32209.String(":text",5);return textSelector$33202;};$valinit$textSelector$33202();
function getTextSelector(){return $valinit$textSelector$33202();}
exports.getTextSelector=getTextSelector;
var $prop$getTextSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','textSelector']};}};
exports.$prop$getTextSelector=$prop$getTextSelector;
$prop$getTextSelector.get=getTextSelector;
getTextSelector.$$metamodel$$=$prop$getTextSelector.$$metamodel$$;

//AttributeDeclaration visibleSelector at jquery.ceylon (38:0-38:42)
var visibleSelector$33203;function $valinit$visibleSelector$33203(){if (visibleSelector$33203===undefined)visibleSelector$33203=$$$cl32209.String(":visible",8);return visibleSelector$33203;};$valinit$visibleSelector$33203();
function getVisibleSelector(){return $valinit$visibleSelector$33203();}
exports.getVisibleSelector=getVisibleSelector;
var $prop$getVisibleSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','visibleSelector']};}};
exports.$prop$getVisibleSelector=$prop$getVisibleSelector;
$prop$getVisibleSelector.get=getVisibleSelector;
getVisibleSelector.$$metamodel$$=$prop$getVisibleSelector.$$metamodel$$;

//MethodDefinition jQueryAjax at jquery.ceylon (40:0-56:0)
function jQueryAjax(url$33204,settings$33205){
    if(url$33204===undefined){url$33204=null;}
    if(settings$33205===undefined){settings$33205=null;}
    /*Begin dynamic block*/
    var u$33206;
    if((u$33206=url$33204)!==null){
        var s$33207;
        if((s$33207=settings$33205)!==null){
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'44:17-44:22','jquery.ceylon'):jQuery).ajax(/*NULL PARAM!*/u$33206.valueOf()/*NULL PARAM!*/,s$33207.toNative()));
        }else {
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'46:17-46:22','jquery.ceylon'):jQuery).ajax(/*NULL PARAM!*/u$33206.valueOf()));
        }
    }else {
        var s$33208;
        if((s$33208=settings$33205)!==null){
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'50:17-50:22','jquery.ceylon'):jQuery).ajax(/*NULL PARAM!*/s$33208.toNative()));
        }else {
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'52:17-52:22','jquery.ceylon'):jQuery).ajax());
        }
    }/*End dynamic block*/
}
exports.jQueryAjax=jQueryAjax;
jQueryAjax.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}},{$nm:'settings',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:JQueryAjaxSettingsBuilder}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryAjax']};};

//MethodDefinition jQueryAjaxPrefilter at jquery.ceylon (58:0-66:0)
function jQueryAjaxPrefilter(callback$33209,dataTypes$33210){
    if(dataTypes$33210===undefined){dataTypes$33210=null;}
    /*Begin dynamic block*/
    var dT$33211;
    if((dT$33211=dataTypes$33210)!==null){
        (typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'61:3-61:8','jquery.ceylon'):jQuery).ajaxPrefilter(/*NULL PARAM!*/dT$33211.valueOf()/*NULL PARAM!*/,$$$cl32209.$JsCallable(callback$33209,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},Return:{t:$$$cl32209.Anything}}));
    }else {
        (typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'63:3-63:8','jquery.ceylon'):jQuery).ajaxPrefilter(/*NULL PARAM!*/$$$cl32209.$JsCallable(callback$33209,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},Return:{t:$$$cl32209.Anything}}));
    }/*End dynamic block*/
}
exports.jQueryAjaxPrefilter=jQueryAjaxPrefilter;
jQueryAjaxPrefilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}},{$nm:'dataTypes',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryAjaxPrefilter']};};

//MethodDefinition jQueryAjaxSetup at jquery.ceylon (68:0-72:0)
function jQueryAjaxSetup(options$33212){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'70:2-70:7','jquery.ceylon'):jQuery).ajaxSetup(/*NULL PARAM!*/options$33212.toNative());
    /*End dynamic block*/
}
exports.jQueryAjaxSetup=jQueryAjaxSetup;
jQueryAjaxSetup.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'options',$mt:'prm',$t:{t:JQueryAjaxSettingsBuilder},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryAjaxSetup']};};

//MethodDefinition jQueryAjaxTransport at jquery.ceylon (75:0-79:0)
function jQueryAjaxTransport(dataType$33213,callback$33214){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'77:2-77:7','jquery.ceylon'):jQuery).ajaxTransport(/*NULL PARAM!*/dataType$33213.valueOf()/*NULL PARAM!*/,$$$cl32209.$JsCallable(callback$33214,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}));
    /*End dynamic block*/
}
exports.jQueryAjaxTransport=jQueryAjaxTransport;
jQueryAjaxTransport.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'dataType',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryAjaxTransport']};};

//MethodDefinition jQueryCallbacks at jquery.ceylon (81:0-85:0)
function jQueryCallbacks(flags$33215){
    if(flags$33215===undefined){flags$33215=$$$cl32209.String("",0);}
    /*Begin dynamic block*/
    return Callbacks((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'83:19-83:24','jquery.ceylon'):jQuery).Callbacks(/*NULL PARAM!*/flags$33215.valueOf()));
    /*End dynamic block*/
}
exports.jQueryCallbacks=jQueryCallbacks;
jQueryCallbacks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'flags',$mt:'prm',$def:1,$t:{t:$$$cl32209.String},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryCallbacks']};};

//MethodDefinition jQueryContains at jquery.ceylon (87:0-95:0)
function jQueryContains(container$33216,contained$33217){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'89:6-89:11','jquery.ceylon'):jQuery).contains(/*NULL PARAM!*/container$33216/*NULL PARAM!*/,contained$33217)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryContains=jQueryContains;
jQueryContains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'container',$mt:'prm',$t:{t:$$$cjd33135.Element},$an:function(){return[];}},{$nm:'contained',$mt:'prm',$t:{t:$$$cjd33135.Element},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryContains']};};

//MethodDefinition jQueryCssHooks at jquery.ceylon (97:0-101:0)
function jQueryCssHooks(){
    /*Begin dynamic block*/
    return $$$cjl32280.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'99:18-99:23','jquery.ceylon'):jQuery).cssHooks);
    /*End dynamic block*/
}
exports.jQueryCssHooks=jQueryCssHooks;
jQueryCssHooks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSObject},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryCssHooks']};};

//MethodDefinition jQuerySetData at jquery.ceylon (103:0-107:0)
function jQuerySetData(element$33218,key$33219,data$33220){
    /*Begin dynamic block*/
    return $$$cjl32280.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'105:18-105:23','jquery.ceylon'):jQuery).data(/*NULL PARAM!*/element$33218/*NULL PARAM!*/,key$33219.valueOf()/*NULL PARAM!*/,data$33220));
    /*End dynamic block*/
}
exports.jQuerySetData=jQuerySetData;
jQuerySetData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSObject},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd33135.Element},$an:function(){return[];}},{$nm:'key',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQuerySetData']};};

//MethodDefinition jQueryGetData at jquery.ceylon (109:0-113:0)
function jQueryGetData(element$33221,key$33222){
    if(key$33222===undefined){key$33222=null;}
    /*Begin dynamic block*/
    return $$$cjl32280.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'111:18-111:23','jquery.ceylon'):jQuery).data(/*NULL PARAM!*/element$33221/*NULL PARAM!*/,key$33222));
    /*End dynamic block*/
}
exports.jQueryGetData=jQueryGetData;
jQueryGetData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSObject},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd33135.Element},$an:function(){return[];}},{$nm:'key',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryGetData']};};

//MethodDefinition jQueryDeferred at jquery.ceylon (116:0-120:0)
function jQueryDeferred(beforeStart$33223){
    if(beforeStart$33223===undefined){beforeStart$33223=null;}
    /*Begin dynamic block*/
    return Deferred((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'118:18-118:23','jquery.ceylon'):jQuery).Deferred(/*NULL PARAM!*/beforeStart$33223));
    /*End dynamic block*/
}
exports.jQueryDeferred=jQueryDeferred;
jQueryDeferred.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'beforeStart',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryDeferred']};};

//MethodDefinition jQueryDequeue at jquery.ceylon (122:0-126:0)
function jQueryDequeue(element$33224,queueName$33225){
    if(queueName$33225===undefined){queueName$33225=null;}
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'124:2-124:7','jquery.ceylon'):jQuery).dequeue(/*NULL PARAM!*/element$33224/*NULL PARAM!*/,queueName$33225);
    /*End dynamic block*/
}
exports.jQueryDequeue=jQueryDequeue;
jQueryDequeue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd33135.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryDequeue']};};

//MethodDefinition jQueryEach at jquery.ceylon (128:0-132:0)
function jQueryEach(collection$33226,callback$33227){
    /*Begin dynamic block*/
    return $$$cjl32280.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'130:18-130:23','jquery.ceylon'):jQuery).each(/*NULL PARAM!*/collection$33226/*NULL PARAM!*/,$$$cl32209.$JsCallable(callback$33227,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
    /*End dynamic block*/
}
exports.jQueryEach=jQueryEach;
jQueryEach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSObject},$ps:[{$nm:'collection',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryEach']};};

//MethodDefinition jQueryError at jquery.ceylon (134:0-138:0)
function jQueryError(message$33228){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'136:2-136:7','jquery.ceylon'):jQuery).error(/*NULL PARAM!*/message$33228.valueOf());
    /*End dynamic block*/
}
exports.jQueryError=jQueryError;
jQueryError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'message',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryError']};};

//MethodDefinition jQueryExtend at jquery.ceylon (140:0-144:0)
function jQueryExtend(target$33229,objects$33230){
    if(objects$33230===undefined){objects$33230=$$$cl32209.getEmpty();}
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'142:2-142:7','jquery.ceylon'):jQuery).extend(/*NULL PARAM!*/target$33229/*NULL PARAM!*/,objects$33230);
    /*End dynamic block*/
}
exports.jQueryExtend=jQueryExtend;
jQueryExtend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'target',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'objects',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryExtend']};};

//MethodDefinition jQueryExtendDeep at jquery.ceylon (146:0-150:0)
function jQueryExtendDeep(deep$33231,target$33232,objects$33233){
    if(objects$33233===undefined){objects$33233=$$$cl32209.getEmpty();}
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'148:2-148:7','jquery.ceylon'):jQuery).extend(/*NULL PARAM!*/target$33232/*NULL PARAM!*/,objects$33233);
    /*End dynamic block*/
}
exports.jQueryExtendDeep=jQueryExtendDeep;
jQueryExtendDeep.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'deep',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}},{$nm:'target',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'objects',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryExtendDeep']};};

//MethodDefinition jQueryFnExtend at jquery.ceylon (152:0-156:0)
function jQueryFnExtend(obj$33234){
    /*Begin dynamic block*/
    return $$$cjl32280.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'154:18-154:23','jquery.ceylon'):jQuery).fn.extend(/*NULL PARAM!*/obj$33234));
    /*End dynamic block*/
}
exports.jQueryFnExtend=jQueryFnExtend;
jQueryFnExtend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryFnExtend']};};

//MethodDefinition jQueryFxInterval at jquery.ceylon (158:0-162:0)
function jQueryFxInterval(){
    /*Begin dynamic block*/
    return $$$cjl32280.JSNumber((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'160:18-160:23','jquery.ceylon'):jQuery).fx.interval);
    /*End dynamic block*/
}
exports.jQueryFxInterval=jQueryFxInterval;
jQueryFxInterval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryFxInterval']};};

//MethodDefinition jQueryFxOff at jquery.ceylon (164:0-172:0)
function jQueryFxOff(){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'166:6-166:11','jquery.ceylon'):jQuery).fx.off){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryFxOff=jQueryFxOff;
jQueryFxOff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryFxOff']};};

//MethodDefinition jQueryGet at jquery.ceylon (175:0-179:0)
function jQueryGet(url$33235,data$33236,success$33237,dataType$33238){
    if(data$33236===undefined){data$33236=null;}
    if(success$33237===undefined){success$33237=null;}
    if(dataType$33238===undefined){dataType$33238=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'177:15-177:20','jquery.ceylon'):jQuery).get(/*NULL PARAM!*/url$33235.valueOf()/*NULL PARAM!*/,data$33236/*NULL PARAM!*/,success$33237/*NULL PARAM!*/,dataType$33238));
    /*End dynamic block*/
}
exports.jQueryGet=jQueryGet;
jQueryGet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}},{$nm:'dataType',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryGet']};};

//MethodDefinition jQueryGetJSON at jquery.ceylon (182:0-186:0)
function jQueryGetJSON(url$33239,data$33240,success$33241){
    if(data$33240===undefined){data$33240=null;}
    if(success$33241===undefined){success$33241=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'184:15-184:20','jquery.ceylon'):jQuery).getJSON(/*NULL PARAM!*/url$33239.valueOf()/*NULL PARAM!*/,data$33240/*NULL PARAM!*/,success$33241));
    /*End dynamic block*/
}
exports.jQueryGetJSON=jQueryGetJSON;
jQueryGetJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryGetJSON']};};

//MethodDefinition jQueryGetScript at jquery.ceylon (189:0-193:0)
function jQueryGetScript(url$33242,success$33243){
    if(success$33243===undefined){success$33243=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'191:15-191:20','jquery.ceylon'):jQuery).getScript(/*NULL PARAM!*/url$33242.valueOf()/*NULL PARAM!*/,success$33243));
    /*End dynamic block*/
}
exports.jQueryGetScript=jQueryGetScript;
jQueryGetScript.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryGetScript']};};

//MethodDefinition jQueryGlobalEval at jquery.ceylon (195:0-199:0)
function jQueryGlobalEval(code$33244){
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'197:15-197:20','jquery.ceylon'):jQuery).globalEval(/*NULL PARAM!*/code$33244.valueOf()));
    /*End dynamic block*/
}
exports.jQueryGlobalEval=jQueryGlobalEval;
jQueryGlobalEval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'code',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryGlobalEval']};};

//MethodDefinition jQueryGrep at jquery.ceylon (201:0-205:0)
function jQueryGrep(array$33245,callback$33246,invert$33247){
    if(invert$33247===undefined){invert$33247=null;}
    /*Begin dynamic block*/
    return $$$cjl32280.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'203:17-203:22','jquery.ceylon'):jQuery).grep(/*NULL PARAM!*/array$33245.$native/*NULL PARAM!*/,$$$cl32209.$JsCallable(callback$33246,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})/*NULL PARAM!*/,invert$33247));
    /*End dynamic block*/
}
exports.jQueryGrep=jQueryGrep;
jQueryGrep.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSArray},$ps:[{$nm:'array',$mt:'prm',$t:{t:$$$cjl32280.JSArray},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}},{$nm:'invert',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryGrep']};};

//MethodDefinition jQueryHasData at jquery.ceylon (207:0-215:0)
function jQueryHasData(element$33248){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'209:6-209:11','jquery.ceylon'):jQuery).hasData(/*NULL PARAM!*/element$33248)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryHasData=jQueryHasData;
jQueryHasData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd33135.Element},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryHasData']};};

//MethodDefinition jQueryHoldReady at jquery.ceylon (217:0-221:0)
function jQueryHoldReady(hold$33249){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'219:2-219:7','jquery.ceylon'):jQuery).holdReady(/*NULL PARAM!*/hold$33249);
    /*End dynamic block*/
}
exports.jQueryHoldReady=jQueryHoldReady;
jQueryHoldReady.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'hold',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryHoldReady']};};

//MethodDefinition jQueryInArray at jquery.ceylon (223:0-227:0)
function jQueryInArray(val$33250,array$33251,fromIndex$33252){
    if(fromIndex$33252===undefined){fromIndex$33252=null;}
    /*Begin dynamic block*/
    return $$$cjl32280.JSNumber((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'225:18-225:23','jquery.ceylon'):jQuery).inArray(/*NULL PARAM!*/val$33250.$native/*NULL PARAM!*/,array$33251.$native/*NULL PARAM!*/,fromIndex$33252));
    /*End dynamic block*/
}
exports.jQueryInArray=jQueryInArray;
jQueryInArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cjl32280.JSObject},$an:function(){return[];}},{$nm:'array',$mt:'prm',$t:{t:$$$cjl32280.JSArray},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryInArray']};};

//MethodDefinition jQueryIsArray at jquery.ceylon (229:0-237:0)
function jQueryIsArray(obj$33253){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'231:6-231:11','jquery.ceylon'):jQuery).isArray(/*NULL PARAM!*/obj$33253.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsArray=jQueryIsArray;
jQueryIsArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl32280.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryIsArray']};};

//MethodDefinition jQueryIsEmptyObject at jquery.ceylon (239:0-247:0)
function jQueryIsEmptyObject(obj$33254){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'241:6-241:11','jquery.ceylon'):jQuery).isEmptyObject(/*NULL PARAM!*/obj$33254.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsEmptyObject=jQueryIsEmptyObject;
jQueryIsEmptyObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl32280.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryIsEmptyObject']};};

//MethodDefinition jQueryIsFunction at jquery.ceylon (249:0-257:0)
function jQueryIsFunction(obj$33255){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'251:6-251:11','jquery.ceylon'):jQuery).isFunction(/*NULL PARAM!*/obj$33255.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsFunction=jQueryIsFunction;
jQueryIsFunction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl32280.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryIsFunction']};};

//MethodDefinition jQueryIsNumeric at jquery.ceylon (259:0-267:0)
function jQueryIsNumeric(obj$33256){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'261:6-261:11','jquery.ceylon'):jQuery).isNumeric(/*NULL PARAM!*/obj$33256.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsNumeric=jQueryIsNumeric;
jQueryIsNumeric.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl32280.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryIsNumeric']};};

//MethodDefinition jQueryIsPlainObject at jquery.ceylon (269:0-277:0)
function jQueryIsPlainObject(obj$33257){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'271:6-271:11','jquery.ceylon'):jQuery).isPlainObject(/*NULL PARAM!*/obj$33257.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsPlainObject=jQueryIsPlainObject;
jQueryIsPlainObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl32280.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryIsPlainObject']};};

//MethodDefinition jQueryIsWindow at jquery.ceylon (279:0-287:0)
function jQueryIsWindow(obj$33258){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'281:6-281:11','jquery.ceylon'):jQuery).isWindow(/*NULL PARAM!*/obj$33258.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsWindow=jQueryIsWindow;
jQueryIsWindow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl32280.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryIsWindow']};};

//MethodDefinition jQueryIsXMLDoc at jquery.ceylon (289:0-297:0)
function jQueryIsXMLDoc(node$33259){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'291:6-291:11','jquery.ceylon'):jQuery).isXMLDoc(/*NULL PARAM!*/node$33259.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsXMLDoc=jQueryIsXMLDoc;
jQueryIsXMLDoc.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:$$$cjd33135.Element},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryIsXMLDoc']};};

//MethodDefinition jQueryMapArray at jquery.ceylon (299:0-303:0)
function jQueryMapArray(array$33260,callback$33261){
    /*Begin dynamic block*/
    return $$$cjl32280.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'301:17-301:22','jquery.ceylon'):jQuery).mapArray(/*NULL PARAM!*/array$33260.$native/*NULL PARAM!*/,$$$cl32209.$JsCallable(callback$33261,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
    /*End dynamic block*/
}
exports.jQueryMapArray=jQueryMapArray;
jQueryMapArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSArray},$ps:[{$nm:'array',$mt:'prm',$t:{t:$$$cjl32280.JSArray},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryMapArray']};};

//MethodDefinition jQueryMapObject at jquery.ceylon (305:0-309:0)
function jQueryMapObject(obj$33262,callback$33263){
    /*Begin dynamic block*/
    return $$$cjl32280.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'307:17-307:22','jquery.ceylon'):jQuery).mapArray(/*NULL PARAM!*/obj$33262.$native/*NULL PARAM!*/,$$$cl32209.$JsCallable(callback$33263,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
    /*End dynamic block*/
}
exports.jQueryMapObject=jQueryMapObject;
jQueryMapObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSArray},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl32280.JSObject},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryMapObject']};};

//MethodDefinition jQueryMerge at jquery.ceylon (311:0-315:0)
function jQueryMerge(first$33264,second$33265){
    /*Begin dynamic block*/
    return $$$cjl32280.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'313:17-313:22','jquery.ceylon'):jQuery).merge(/*NULL PARAM!*/first$33264/*NULL PARAM!*/,second$33265));
    /*End dynamic block*/
}
exports.jQueryMerge=jQueryMerge;
jQueryMerge.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSArray},$ps:[{$nm:'first',$mt:'prm',$t:{t:$$$cjl32280.JSArray},$an:function(){return[];}},{$nm:'second',$mt:'prm',$t:{t:$$$cjl32280.JSArray},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryMerge']};};

//MethodDefinition jQueryNoConflict at jquery.ceylon (317:0-321:0)
function jQueryNoConflict(removeAll$33266){
    if(removeAll$33266===undefined){removeAll$33266=null;}
    /*Begin dynamic block*/
    return $$$cjl32280.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'319:17-319:22','jquery.ceylon'):jQuery).noConflict(/*NULL PARAM!*/removeAll$33266));
    /*End dynamic block*/
}
exports.jQueryNoConflict=jQueryNoConflict;
jQueryNoConflict.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSArray},$ps:[{$nm:'removeAll',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryNoConflict']};};

//MethodDefinition jQueryNoop at jquery.ceylon (323:0-327:0)
function jQueryNoop(){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'325:2-325:7','jquery.ceylon'):jQuery).noop();
    /*End dynamic block*/
}
exports.jQueryNoop=jQueryNoop;
jQueryNoop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryNoop']};};

//MethodDefinition jQueryNow at jquery.ceylon (329:0-333:0)
function jQueryNow(){
    /*Begin dynamic block*/
    return $$$cjl32280.JSNumber((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'331:18-331:23','jquery.ceylon'):jQuery).now());
    /*End dynamic block*/
}
exports.jQueryNow=jQueryNow;
jQueryNow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryNow']};};

//MethodDefinition jQueryParam at jquery.ceylon (335:0-339:0)
function jQueryParam(obj$33267,traditional$33268){
    if(traditional$33268===undefined){traditional$33268=false;}
    /*Begin dynamic block*/
    return $$$cjl32280.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'337:18-337:23','jquery.ceylon'):jQuery).param(/*NULL PARAM!*/obj$33267/*NULL PARAM!*/,traditional$33268));
    /*End dynamic block*/
}
exports.jQueryParam=jQueryParam;
jQueryParam.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[{$nm:'obj',$mt:'prm',$t:{ t:'u', l:[{t:$$$cjl32280.JSArray},{t:$$$cjl32280.JSObject}]},$an:function(){return[];}},{$nm:'traditional',$mt:'prm',$def:1,$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryParam']};};

//MethodDefinition jQueryParseHTML at jquery.ceylon (341:0-345:0)
function jQueryParseHTML(data$33269,context$33270,keepScripts$33271){
    if(context$33270===undefined){context$33270=null;}
    if(keepScripts$33271===undefined){keepScripts$33271=false;}
    /*Begin dynamic block*/
    return $$$cjl32280.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'343:18-343:23','jquery.ceylon'):jQuery).parseHTML(/*NULL PARAM!*/data$33269.valueOf()/*NULL PARAM!*/,context$33270/*NULL PARAM!*/,keepScripts$33271));
    /*End dynamic block*/
}
exports.jQueryParseHTML=jQueryParseHTML;
jQueryParseHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[{$nm:'data',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjd33135.Element}]},$an:function(){return[];}},{$nm:'keepScripts',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryParseHTML']};};

//MethodDefinition jQueryParseJSON at jquery.ceylon (347:0-351:0)
function jQueryParseJSON(json$33272){
    /*Begin dynamic block*/
    return $$$cjl32280.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'349:18-349:23','jquery.ceylon'):jQuery).parseJSON(/*NULL PARAM!*/(typeof data==='undefined'||data===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: data")),'349:35-349:38','jquery.ceylon'):data)/*NULL PARAM!*/,(typeof context==='undefined'||context===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: context")),'349:41-349:47','jquery.ceylon'):context)/*NULL PARAM!*/,(typeof keepScripts==='undefined'||keepScripts===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: keepScripts")),'349:50-349:60','jquery.ceylon'):keepScripts)));
    /*End dynamic block*/
}
exports.jQueryParseJSON=jQueryParseJSON;
jQueryParseJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSObject},$ps:[{$nm:'json',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryParseJSON']};};

//MethodDefinition jQueryParseXML at jquery.ceylon (353:0-357:0)
function jQueryParseXML(data$33273){
    /*Begin dynamic block*/
    return $$$cjl32280.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'355:18-355:23','jquery.ceylon'):jQuery).parseXML(/*NULL PARAM!*/data$33273.valueOf()));
    /*End dynamic block*/
}
exports.jQueryParseXML=jQueryParseXML;
jQueryParseXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSObject},$ps:[{$nm:'data',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryParseXML']};};

//MethodDefinition jQueryPost at jquery.ceylon (360:0-364:0)
function jQueryPost(url$33274,data$33275,success$33276,dataType$33277){
    if(data$33275===undefined){data$33275=null;}
    if(success$33276===undefined){success$33276=null;}
    if(dataType$33277===undefined){dataType$33277=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'362:15-362:20','jquery.ceylon'):jQuery).post(/*NULL PARAM!*/url$33274.valueOf()/*NULL PARAM!*/,data$33275/*NULL PARAM!*/,success$33276/*NULL PARAM!*/,dataType$33277));
    /*End dynamic block*/
}
exports.jQueryPost=jQueryPost;
jQueryPost.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}},{$nm:'dataType',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryPost']};};

//MethodDefinition jQueryProxy at jquery.ceylon (366:0-370:0)
function jQueryProxy(func$33278,context$33279,additionalArguments$33280){
    if(additionalArguments$33280===undefined){additionalArguments$33280=$$$cl32209.getEmpty();}
    /*Begin dynamic block*/
    return $$$cjl32280.JSFunction((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'368:20-368:25','jquery.ceylon'):jQuery).proxy(/*NULL PARAM!*/$$$cl32209.$JsCallable(func$33278,[],{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})/*NULL PARAM!*/,context$33279/*NULL PARAM!*/,additionalArguments$33280));
    /*End dynamic block*/
}
exports.jQueryProxy=jQueryProxy;
jQueryProxy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSFunction},$ps:[{$nm:'func',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:$$$cjl32280.JSObject},$an:function(){return[];}},{$nm:'additionalArguments',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryProxy']};};

//MethodDefinition jQueryProxyName at jquery.ceylon (372:0-376:0)
function jQueryProxyName(context$33281,name$33282,additionalArguments$33283){
    if(additionalArguments$33283===undefined){additionalArguments$33283=$$$cl32209.getEmpty();}
    /*Begin dynamic block*/
    return $$$cjl32280.JSFunction((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'374:20-374:25','jquery.ceylon'):jQuery).proxy(/*NULL PARAM!*/context$33281/*NULL PARAM!*/,(typeof func==='undefined'||func===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: func")),'374:42-374:45','jquery.ceylon'):func)/*NULL PARAM!*/,additionalArguments$33283));
    /*End dynamic block*/
}
exports.jQueryProxyName=jQueryProxyName;
jQueryProxyName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSFunction},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cjl32280.JSObject},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'additionalArguments',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryProxyName']};};

//MethodDefinition jQueryGetQueue at jquery.ceylon (378:0-383:0)
function jQueryGetQueue(element$33284,queueName$33285){
    if(queueName$33285===undefined){queueName$33285=$$$cl32209.String("fx",2);}
    /*Begin dynamic block*/
    return $$$cjl32280.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'381:17-381:22','jquery.ceylon'):jQuery).queue(/*NULL PARAM!*/element$33284/*NULL PARAM!*/,queueName$33285.valueOf()));
    /*End dynamic block*/
}
exports.jQueryGetQueue=jQueryGetQueue;
jQueryGetQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSArray},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd33135.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl32209.String},$an:function(){return[];}}],$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns JSFunctions[]",21)),$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryGetQueue']};};

//MethodDefinition jQuerySetQueue at jquery.ceylon (385:0-389:0)
function jQuerySetQueue(element$33286,queueName$33287,callbacks$33288){
    if(queueName$33287===undefined){queueName$33287=$$$cl32209.String("fx",2);}
    if(callbacks$33288===undefined){callbacks$33288=$$$cl32209.getEmpty();}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'387:16-387:21','jquery.ceylon'):jQuery).queue(/*NULL PARAM!*/element$33286/*NULL PARAM!*/,queueName$33287.valueOf()/*NULL PARAM!*/,callbacks$33288));
    /*End dynamic block*/
}
exports.jQuerySetQueue=jQuerySetQueue;
jQuerySetQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd33135.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'callbacks',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQuerySetQueue']};};

//MethodDefinition jQueryRemoveData at jquery.ceylon (391:0-395:0)
function jQueryRemoveData(element$33289,name$33290){
    if(name$33290===undefined){name$33290=null;}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'393:16-393:21','jquery.ceylon'):jQuery).removeData(/*NULL PARAM!*/element$33289/*NULL PARAM!*/,name$33290));
    /*End dynamic block*/
}
exports.jQueryRemoveData=jQueryRemoveData;
jQueryRemoveData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd33135.Element},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryRemoveData']};};

//MethodDefinition jQueryTrim at jquery.ceylon (397:0-401:0)
function jQueryTrim(str$33291){
    /*Begin dynamic block*/
    return $$$cjl32280.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'399:18-399:23','jquery.ceylon'):jQuery).trim(/*NULL PARAM!*/str$33291.$native));
    /*End dynamic block*/
}
exports.jQueryTrim=jQueryTrim;
jQueryTrim.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[{$nm:'str',$mt:'prm',$t:{t:$$$cjl32280.JSString},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryTrim']};};

//MethodDefinition jQueryType at jquery.ceylon (403:0-407:0)
function jQueryType(obj$33292){
    /*Begin dynamic block*/
    return $$$cjl32280.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'405:18-405:23','jquery.ceylon'):jQuery).type(/*NULL PARAM!*/obj$33292.$native));
    /*End dynamic block*/
}
exports.jQueryType=jQueryType;
jQueryType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl32280.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryType']};};

//MethodDefinition jQueryUnique at jquery.ceylon (409:0-413:0)
function jQueryUnique(arr$33293){
    /*Begin dynamic block*/
    return $$$cjl32280.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'411:17-411:22','jquery.ceylon'):jQuery).unique(/*NULL PARAM!*/arr$33293.$native));
    /*End dynamic block*/
}
exports.jQueryUnique=jQueryUnique;
jQueryUnique.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSArray},$ps:[{$nm:'arr',$mt:'prm',$t:{t:$$$cjl32280.JSArray},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryUnique']};};

//MethodDefinition jQueryWhen at jquery.ceylon (415:0-419:0)
function jQueryWhen(deferreds$33294){
    if(deferreds$33294===undefined){deferreds$33294=$$$cl32209.getEmpty();}
    /*Begin dynamic block*/
    return Promise((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'417:17-417:22','jquery.ceylon'):jQuery).when(/*NULL PARAM!*/(function(){
        //SpreadOp at 417:29-417:45
        var lst$33295=[];
        var it$33296=deferreds$33294.iterator();
        var elem$33297;
        while ((elem$33297=it$33296.next())!==$$$cl32209.getFinished()){
            lst$33295.push(elem$33297.$native);
        }
        return $$$cl32209.ArraySequence(lst$33295);
    }())));
    /*End dynamic block*/
}
exports.jQueryWhen=jQueryWhen;
jQueryWhen.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'deferreds',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:Deferred}}},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jQueryWhen']};};

//MethodDefinition jq at jquery.ceylon (421:0-440:0)
function jq(selector$33298,context$33299){
    if(selector$33298===undefined){selector$33298=null;}
    if(context$33299===undefined){context$33299=null;}
    /*Begin dynamic block*/
    //Switch statement at jquery.ceylon (423:2-438:2)
    var case$33300=selector$33298;
    if ($$$cl32209.isOfType(selector$33298,{t:$$$cl32209.String})) {
        //Switch statement at jquery.ceylon (425:3-431:3)
        var case$33301=context$33299;
        if ($$$cl32209.isOfType(context$33299,{ t:'u', l:[{t:$$$cjd33135.Element},{t:JQuery}]})) {
            return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'427:18-427:23','jquery.ceylon'):jQuery)(/*NULL PARAM!*/case$33300.valueOf()/*NULL PARAM!*/,case$33301.$native));
        }else if ($$$cl32209.isOfType(context$33299,{t:$$$cl32209.Null})) {
            return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'430:18-430:23','jquery.ceylon'):jQuery)(/*NULL PARAM!*/case$33300.valueOf()));
        }//End switch statement at jquery.ceylon (425:3-431:3)
    }else if ($$$cl32209.isOfType(selector$33298,{ t:'u', l:[{t:JQuery},{t:$$$cjl32280.JSObject},{t:$$$cjd33135.Element}]})) {
        return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'434:17-434:22','jquery.ceylon'):jQuery)(/*NULL PARAM!*/case$33300.$native));
    }else if ($$$cl32209.isOfType(selector$33298,{t:$$$cl32209.Null})) {
        return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'437:17-437:22','jquery.ceylon'):jQuery)());
    }//End switch statement at jquery.ceylon (423:2-438:2)
    /*End dynamic block*/
}
exports.jq=jq;
jq.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JQuery},{t:$$$cjl32280.JSObject},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjd33135.Element}]}]},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cjd33135.Element},{ t:'u', l:[{t:$$$cl32209.Null},{t:JQuery}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jq']};};

//MethodDefinition jqThis at jquery.ceylon (442:0-446:0)
function jqThis(){
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'444:16-444:21','jquery.ceylon'):jQuery)(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: this")),'444:23-444:26','jquery.ceylon'):this)));
    /*End dynamic block*/
}
exports.jqThis=jqThis;
jqThis.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jqThis']};};

//MethodDefinition jqElems at jquery.ceylon (448:0-452:0)
function jqElems(elems$33302){
    if(elems$33302===undefined){elems$33302=$$$cl32209.getEmpty();}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: jQuery")),'450:16-450:21','jquery.ceylon'):jQuery)(/*NULL PARAM!*/(function(){
        //SpreadOp at 450:23-450:35
        var lst$33303=[];
        var it$33304=elems$33302.iterator();
        var elem$33305;
        while ((elem$33305=it$33304.next())!==$$$cl32209.getFinished()){
            lst$33303.push(elem$33305.$native);
        }
        return $$$cl32209.ArraySequence(lst$33303);
    }())));
    /*End dynamic block*/
}
exports.jqElems=jqElems;
jqElems.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elems',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequence,a:{Element:{t:$$$cjd33135.Element}}},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','jqElems']};};

//ClassDefinition JQueryAbs at jquery.ceylon (454:0-2015:0)
function JQueryAbs($$jQueryAbs){
    $init$JQueryAbs();
    if ($$jQueryAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$jQueryAbs);
    return $$jQueryAbs;
}
JQueryAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.jquery','JQueryAbs']};};
exports.JQueryAbs=JQueryAbs;
function $init$JQueryAbs(){
    if (JQueryAbs.$$===undefined){
        $$$cl32209.initTypeProto(JQueryAbs,'ceylon.js.jquery::JQueryAbs',$$$cjl32280.JSObjectAbs);
        (function($$jQueryAbs){
            
            //MethodDefinition add at jquery.ceylon (456:1-468:1)
            $$jQueryAbs.add=function add(append$33306){
                var $$jQueryAbs=this;
                //Switch statement at jquery.ceylon (457:2-467:2)
                var case$33307=append$33306;
                if ($$$cl32209.isOfType(append$33306,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/case$33307.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(append$33306,{t:JQuery})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/case$33307.$native));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (457:2-467:2)
            };$$jQueryAbs.add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'append',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','add']};};
            
            //MethodDefinition addElements at jquery.ceylon (470:1-474:1)
            $$jQueryAbs.addElements=function addElements(elements$33308){
                var $$jQueryAbs=this;
                if(elements$33308===undefined){elements$33308=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/(function(){
                    //SpreadOp at 472:28-472:43
                    var lst$33309=[];
                    var it$33310=elements$33308.iterator();
                    var elem$33311;
                    while ((elem$33311=it$33310.next())!==$$$cl32209.getFinished()){
                        lst$33309.push(elem$33311.$native);
                    }
                    return $$$cl32209.ArraySequence(lst$33309);
                }())));
                /*End dynamic block*/
            };$$jQueryAbs.addElements.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elements',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequence,a:{Element:{t:$$$cjd33135.Element}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addElements']};};
            
            //MethodDefinition addSelector at jquery.ceylon (476:1-484:1)
            $$jQueryAbs.addSelector$defs$context=function(selector$33312,context$33313){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.addSelector=function addSelector(selector$33312,context$33313){
                var $$jQueryAbs=this;
                if(context$33313===undefined){context$33313=$$jQueryAbs.addSelector$defs$context(selector$33312,context$33313);}
                /*Begin dynamic block*/
                var c$33314;
                if((c$33314=context$33313)!==null){
                    return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/selector$33312.valueOf()/*NULL PARAM!*/,c$33314));
                }else {
                    return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/selector$33312.valueOf()));
                }/*End dynamic block*/
            };$$jQueryAbs.addSelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjd33135.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addSelector']};};
            
            //MethodDefinition addBack at jquery.ceylon (486:1-490:1)
            $$jQueryAbs.addBack$defs$selector=function(selector$33315){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.addBack=function addBack(selector$33315){
                var $$jQueryAbs=this;
                if(selector$33315===undefined){selector$33315=$$jQueryAbs.addBack$defs$selector(selector$33315);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.addBack(/*NULL PARAM!*/selector$33315));
                /*End dynamic block*/
            };$$jQueryAbs.addBack.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addBack']};};
            
            //MethodDefinition addClass at jquery.ceylon (492:1-496:1)
            $$jQueryAbs.addClass=function addClass(className$33316){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.addClass(/*NULL PARAM!*/className$33316.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.addClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addClass']};};
            
            //MethodDefinition addClassCallback at jquery.ceylon (498:1-502:1)
            $$jQueryAbs.addClassCallback=function addClassCallback(callback$33317){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.addClass(/*NULL PARAM!*/$$$cl32209.$JsCallable(callback$33317,[{$nm:'index',$mt:'prm',$t:{t:$$$cl32209.Integer},$an:function(){return[];}},{$nm:'currentClass',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.String}})));
                /*End dynamic block*/
            };$$jQueryAbs.addClassCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addClassCallback']};};
            
            //MethodDefinition after at jquery.ceylon (504:1-508:1)
            $$jQueryAbs.after=function after(content$33318){
                var $$jQueryAbs=this;
                if(content$33318===undefined){content$33318=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$$cjl32280.JSFunction($$jQueryAbs.$native.after).$apply(null,content$33318));
                /*End dynamic block*/
            };$$jQueryAbs.after.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','after']};};
            
            //MethodDefinition afterElements at jquery.ceylon (510:1-515:1)
            $$jQueryAbs.afterElements=function afterElements(content$33319){
                var $$jQueryAbs=this;
                if(content$33319===undefined){content$33319=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$$cjl32280.JSFunction($$jQueryAbs.$native.after).$apply(null,(tmpvar$33320=(function(){
                    //SpreadOp at 513:54-513:68
                    var lst$33321=[];
                    var it$33322=content$33319.iterator();
                    var elem$33323;
                    while ((elem$33323=it$33322.next())!==$$$cl32209.getFinished()){
                        lst$33321.push(elem$33323.$native);
                    }
                    return $$$cl32209.ArraySequence(lst$33321);
                }()),$$$cl32209.isOfType(tmpvar$33320,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$33320:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'513:54-513:68','jquery.ceylon'))));
                /*End dynamic block*/
            };$$jQueryAbs.afterElements.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cjd33135.Element}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','afterElements']};};
            
            //MethodDefinition afterJQuery at jquery.ceylon (517:1-522:1)
            $$jQueryAbs.afterJQuery=function afterJQuery(content$33324){
                var $$jQueryAbs=this;
                if(content$33324===undefined){content$33324=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$$cjl32280.JSFunction($$jQueryAbs.$native.after).$apply(null,(tmpvar$33325=(function(){
                    //SpreadOp at 520:54-520:68
                    var lst$33326=[];
                    var it$33327=content$33324.iterator();
                    var elem$33328;
                    while ((elem$33328=it$33327.next())!==$$$cl32209.getFinished()){
                        lst$33326.push(elem$33328.$native);
                    }
                    return $$$cl32209.ArraySequence(lst$33326);
                }()),$$$cl32209.isOfType(tmpvar$33325,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$33325:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'520:54-520:68','jquery.ceylon'))));
                /*End dynamic block*/
            };$$jQueryAbs.afterJQuery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:JQuery}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','afterJQuery']};};
            
            //MethodDefinition ajaxComplete at jquery.ceylon (525:1-529:1)
            $$jQueryAbs.ajaxComplete=function ajaxComplete(handler$33329){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.ajaxComplete(/*NULL PARAM!*/$$$cl32209.$JsCallable(handler$33329,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.ajaxComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxComplete']};};
            
            //MethodDefinition ajaxError at jquery.ceylon (532:1-536:1)
            $$jQueryAbs.ajaxError=function ajaxError(handler$33330){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.ajaxError(/*NULL PARAM!*/$$$cl32209.$JsCallable(handler$33330,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.ajaxError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxError']};};
            
            //MethodDefinition ajaxSend at jquery.ceylon (539:1-543:1)
            $$jQueryAbs.ajaxSend=function ajaxSend(handler$33331){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.ajaxSend(/*NULL PARAM!*/$$$cl32209.$JsCallable(handler$33331,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.ajaxSend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxSend']};};
            
            //MethodDefinition ajaxStart at jquery.ceylon (545:1-549:1)
            $$jQueryAbs.ajaxStart=function ajaxStart(handler$33332){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.ajaxStart(/*NULL PARAM!*/$$$cl32209.$JsCallable(handler$33332,[],{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.ajaxStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxStart']};};
            
            //MethodDefinition ajaxStop at jquery.ceylon (551:1-555:1)
            $$jQueryAbs.ajaxStop=function ajaxStop(handler$33333){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.ajaxStop(/*NULL PARAM!*/$$$cl32209.$JsCallable(handler$33333,[],{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.ajaxStop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxStop']};};
            
            //MethodDefinition ajaxSuccess at jquery.ceylon (558:1-562:1)
            $$jQueryAbs.ajaxSuccess=function ajaxSuccess(handler$33334){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.ajaxSuccess(/*NULL PARAM!*/$$$cl32209.$JsCallable(handler$33334,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.ajaxSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxSuccess']};};
            
            //MethodDefinition animate at jquery.ceylon (565:1-623:1)
            $$jQueryAbs.animate$defs$duration=function(properties$33335,duration$33336,easing$33337,complete$33338){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.animate$defs$easing=function(properties$33335,duration$33336,easing$33337,complete$33338){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.animate$defs$complete=function(properties$33335,duration$33336,easing$33337,complete$33338){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.animate=function animate(properties$33335,duration$33336,easing$33337,complete$33338){
                var $$jQueryAbs=this;
                if(duration$33336===undefined){duration$33336=$$jQueryAbs.animate$defs$duration(properties$33335,duration$33336,easing$33337,complete$33338);}
                if(easing$33337===undefined){easing$33337=$$jQueryAbs.animate$defs$easing(properties$33335,duration$33336,easing$33337,complete$33338);}
                if(complete$33338===undefined){complete$33338=$$jQueryAbs.animate$defs$complete(properties$33335,duration$33336,easing$33337,complete$33338);}
                
                //AttributeDeclaration propertiesNative at jquery.ceylon (566:2-566:46)
                var propertiesNative$33339=$$$cjl32280.createJSObject();
                //'for' statement at jquery.ceylon (567:2-571:2)
                var it$33340 = properties$33335.iterator();
                var item$33341;while ((item$33341=it$33340.next())!==$$$cl32209.getFinished()){
                    var key$33342=item$33341.key;
                    var val$33343=item$33341.item;
                    /*Begin dynamic block*/
                    $$$cjl32280.objectDefineProperty(propertiesNative$33339,(tmpvar$33344=$$$cjl32280.createJSString(key$33342),$$$cl32209.isOfType(tmpvar$33344,{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]})?tmpvar$33344:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'569:43-569:61','jquery.ceylon')),$$$cjl32280.DataDescriptor(true,false,true,true,val$33343));
                    /*End dynamic block*/
                }
                //Switch statement at jquery.ceylon (572:2-622:2)
                var case$33345=duration$33336;
                if ($$$cl32209.isOfType(duration$33336,{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Integer}]})) {
                    //Switch statement at jquery.ceylon (574:3-596:3)
                    var case$33346=easing$33337;
                    if ($$$cl32209.isOfType(easing$33337,{t:$$$cl32209.String})) {
                        var c$33347;
                        if((c$33347=complete$33338)!==null){
                            /*Begin dynamic block*/
                            return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$33339.$native/*NULL PARAM!*/,case$33345/*NULL PARAM!*/,case$33346.valueOf()/*NULL PARAM!*/,complete$33338));
                            /*End dynamic block*/
                        }else {
                            /*Begin dynamic block*/
                            return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$33339.$native/*NULL PARAM!*/,case$33345/*NULL PARAM!*/,case$33346.valueOf()));
                            /*End dynamic block*/
                        }
                    }else if ($$$cl32209.isOfType(easing$33337,{t:$$$cl32209.Null})) {
                        var c$33348;
                        if((c$33348=complete$33338)!==null){
                            /*Begin dynamic block*/
                            return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$33339.$native/*NULL PARAM!*/,case$33345/*NULL PARAM!*/,null/*NULL PARAM!*/,complete$33338));
                            /*End dynamic block*/
                        }else {
                            /*Begin dynamic block*/
                            return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$33339.$native/*NULL PARAM!*/,case$33345));
                            /*End dynamic block*/
                        }
                    }//End switch statement at jquery.ceylon (574:3-596:3)
                }else if ($$$cl32209.isOfType(duration$33336,{t:$$$cl32209.Null})) {
                    //Switch statement at jquery.ceylon (599:3-621:3)
                    var case$33349=easing$33337;
                    if ($$$cl32209.isOfType(easing$33337,{t:$$$cl32209.String})) {
                        var c$33350;
                        if((c$33350=complete$33338)!==null){
                            /*Begin dynamic block*/
                            return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$33339.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$33349.valueOf()/*NULL PARAM!*/,complete$33338));
                            /*End dynamic block*/
                        }else {
                            /*Begin dynamic block*/
                            return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$33339.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$33349.valueOf()));
                            /*End dynamic block*/
                        }
                    }else if ($$$cl32209.isOfType(easing$33337,{t:$$$cl32209.Null})) {
                        var c$33351;
                        if((c$33351=complete$33338)!==null){
                            /*Begin dynamic block*/
                            return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$33339.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,complete$33338));
                            /*End dynamic block*/
                        }else {
                            /*Begin dynamic block*/
                            return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$33339.$native));
                            /*End dynamic block*/
                        }
                    }//End switch statement at jquery.ceylon (599:3-621:3)
                }//End switch statement at jquery.ceylon (572:2-622:2)
            };$$jQueryAbs.animate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.String}}}}},$an:function(){return[];}},{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','animate']};};
            
            //MethodDefinition animateOptions at jquery.ceylon (625:1-635:1)
            $$jQueryAbs.animateOptions=function animateOptions(properties$33352,options$33353){
                var $$jQueryAbs=this;
                
                //AttributeDeclaration propertiesNative at jquery.ceylon (626:2-626:46)
                var propertiesNative$33354=$$$cjl32280.createJSObject();
                //'for' statement at jquery.ceylon (627:2-631:2)
                var it$33355 = properties$33352.iterator();
                var item$33356;while ((item$33356=it$33355.next())!==$$$cl32209.getFinished()){
                    var key$33357=item$33356.key;
                    var val$33358=item$33356.item;
                    /*Begin dynamic block*/
                    $$$cjl32280.objectDefineProperty(propertiesNative$33354,(tmpvar$33359=$$$cjl32280.createJSString(key$33357),$$$cl32209.isOfType(tmpvar$33359,{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]})?tmpvar$33359:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'629:43-629:61','jquery.ceylon')),$$$cjl32280.DataDescriptor(true,false,true,true,val$33358));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$33354.$native/*NULL PARAM!*/,options$33353.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.animateOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.String}}}}},$an:function(){return[];}},{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','animateOptions']};};
            
            //MethodDefinition append at jquery.ceylon (637:1-641:1)
            $$jQueryAbs.append=function append(content$33360){
                var $$jQueryAbs=this;
                if(content$33360===undefined){content$33360=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$$cjl32280.JSFunction($$jQueryAbs.$native.append).$apply(null,(tmpvar$33361=(function(){
                    //SpreadOp at 639:55-639:69
                    var lst$33362=[];
                    var it$33363=content$33360.iterator();
                    var elem$33364;
                    while ((elem$33364=it$33363.next())!==$$$cl32209.getFinished()){
                        lst$33362.push(elem$33364.$native);
                    }
                    return $$$cl32209.ArraySequence(lst$33362);
                }()),$$$cl32209.isOfType(tmpvar$33361,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$33361:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'639:55-639:69','jquery.ceylon'))));
                /*End dynamic block*/
            };$$jQueryAbs.append.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{ t:'u', l:[{t:$$$cjd33135.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','append']};};
            
            //MethodDefinition appendHTML at jquery.ceylon (643:1-647:1)
            $$jQueryAbs.appendHTML=function appendHTML(content$33365){
                var $$jQueryAbs=this;
                if(content$33365===undefined){content$33365=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.append(/*NULL PARAM!*/content$33365));
                /*End dynamic block*/
            };$$jQueryAbs.appendHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','appendHTML']};};
            
            //MethodDefinition appendCallback at jquery.ceylon (649:1-653:1)
            $$jQueryAbs.appendCallback=function appendCallback(callback$33366){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.append(/*NULL PARAM!*/$$$cl32209.$JsCallable(callback$33366,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.appendCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','appendCallback']};};
            
            //MethodDefinition appendTo at jquery.ceylon (655:1-667:1)
            $$jQueryAbs.appendTo=function appendTo(target$33367){
                var $$jQueryAbs=this;
                //Switch statement at jquery.ceylon (656:2-666:2)
                var case$33368=target$33367;
                if ($$$cl32209.isOfType(target$33367,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.appendTo(/*NULL PARAM!*/case$33368.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(target$33367,{ t:'u', l:[{t:$$$cjd33135.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.appendTo(/*NULL PARAM!*/case$33368.$native));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (656:2-666:2)
            };$$jQueryAbs.appendTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjd33135.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','appendTo']};};
            
            //MethodDefinition getAttr at jquery.ceylon (669:1-673:1)
            $$jQueryAbs.getAttr=function getAttr(attributeName$33369){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$jQueryAbs.$native.attr(/*NULL PARAM!*/attributeName$33369.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.getAttr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getAttr']};};
            
            //MethodDefinition setAttr at jquery.ceylon (675:1-679:1)
            $$jQueryAbs.setAttr=function setAttr(attributeName$33370,val$33371){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.attr(/*NULL PARAM!*/attributeName$33370.valueOf()/*NULL PARAM!*/,val$33371));
                /*End dynamic block*/
            };$$jQueryAbs.setAttr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setAttr']};};
            
            //MethodDefinition setAttrEntries at jquery.ceylon (681:1-691:1)
            $$jQueryAbs.setAttrEntries=function setAttrEntries(entries$33372){
                var $$jQueryAbs=this;
                if(entries$33372===undefined){entries$33372=$$$cl32209.getEmpty();}
                
                //AttributeDeclaration entriesNative at jquery.ceylon (682:2-682:43)
                var entriesNative$33373=$$$cjl32280.createJSObject();
                //'for' statement at jquery.ceylon (683:2-687:2)
                var it$33374 = entries$33372.iterator();
                var item$33375;while ((item$33375=it$33374.next())!==$$$cl32209.getFinished()){
                    var key$33376=item$33375.key;
                    var val$33377=item$33375.item;
                    /*Begin dynamic block*/
                    $$$cjl32280.objectDefineProperty(entriesNative$33373,(tmpvar$33378=$$$cjl32280.createJSString(key$33376),$$$cl32209.isOfType(tmpvar$33378,{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]})?tmpvar$33378:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'685:40-685:58','jquery.ceylon')),$$$cjl32280.DataDescriptor(true,false,true,true,val$33377));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.attr(/*NULL PARAM!*/entriesNative$33373));
                /*End dynamic block*/
            };$$jQueryAbs.setAttrEntries.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'entries',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Integer}]}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setAttrEntries']};};
            
            //MethodDefinition setAttrCallback at jquery.ceylon (693:1-697:1)
            $$jQueryAbs.setAttrCallback=function setAttrCallback(attributeName$33379,callback$33380){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.attr(/*NULL PARAM!*/(typeof entriesNative==='undefined'||entriesNative===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: entriesNative")),'695:29-695:41','jquery.ceylon'):entriesNative)/*NULL PARAM!*/,$$$cl32209.$JsCallable(callback$33380,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.setAttrCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setAttrCallback']};};
            
            //MethodDefinition before at jquery.ceylon (699:1-703:1)
            $$jQueryAbs.before=function before(content$33381){
                var $$jQueryAbs=this;
                if(content$33381===undefined){content$33381=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$$cjl32280.JSFunction($$jQueryAbs.$native.before).$apply(null,(tmpvar$33382=(function(){
                    //SpreadOp at 701:55-701:69
                    var lst$33383=[];
                    var it$33384=content$33381.iterator();
                    var elem$33385;
                    while ((elem$33385=it$33384.next())!==$$$cl32209.getFinished()){
                        lst$33383.push(elem$33385.$native);
                    }
                    return $$$cl32209.ArraySequence(lst$33383);
                }()),$$$cl32209.isOfType(tmpvar$33382,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$33382:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'701:55-701:69','jquery.ceylon'))));
                /*End dynamic block*/
            };$$jQueryAbs.before.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{ t:'u', l:[{t:$$$cjd33135.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','before']};};
            
            //MethodDefinition beforeHTML at jquery.ceylon (705:1-709:1)
            $$jQueryAbs.beforeHTML=function beforeHTML(content$33386){
                var $$jQueryAbs=this;
                if(content$33386===undefined){content$33386=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.before(/*NULL PARAM!*/content$33386));
                /*End dynamic block*/
            };$$jQueryAbs.beforeHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','beforeHTML']};};
            
            //MethodDefinition beforeCallback at jquery.ceylon (711:1-715:1)
            $$jQueryAbs.beforeCallback=function beforeCallback(callback$33387){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.before(/*NULL PARAM!*/$$$cl32209.$JsCallable(callback$33387,[],{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.beforeCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','beforeCallback']};};
            
            //MethodDefinition bind at jquery.ceylon (717:1-721:1)
            $$jQueryAbs.bind$defs$eventData=function(eventType$33388,eventData$33389,preventBubble$33390){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.bind$defs$preventBubble=function(eventType$33388,eventData$33389,preventBubble$33390){var $$jQueryAbs=this;
            return true;};
            $$jQueryAbs.bind=function bind(eventType$33388,eventData$33389,preventBubble$33390){
                var $$jQueryAbs=this;
                if(eventData$33389===undefined){eventData$33389=$$jQueryAbs.bind$defs$eventData(eventType$33388,eventData$33389,preventBubble$33390);}
                if(preventBubble$33390===undefined){preventBubble$33390=$$jQueryAbs.bind$defs$preventBubble(eventType$33388,eventData$33389,preventBubble$33390);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.bind(/*NULL PARAM!*/eventType$33388.valueOf()/*NULL PARAM!*/,eventData$33389/*NULL PARAM!*/,preventBubble$33390));
                /*End dynamic block*/
            };$$jQueryAbs.bind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'preventBubble',$mt:'prm',$def:1,$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','bind']};};
            
            //MethodDefinition bindCallback at jquery.ceylon (723:1-727:1)
            $$jQueryAbs.bindCallback=function bindCallback(eventType$33391,eventData$33392,handler$33393){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.bind(/*NULL PARAM!*/eventType$33391.valueOf()/*NULL PARAM!*/,eventData$33392/*NULL PARAM!*/,$$$cl32209.$JsCallable(handler$33393,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.bindCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','bindCallback']};};
            
            //MethodDefinition bindEvents at jquery.ceylon (729:1-739:1)
            $$jQueryAbs.bindEvents=function bindEvents(events$33394){
                var $$jQueryAbs=this;
                if(events$33394===undefined){events$33394=$$$cl32209.getEmpty();}
                
                //AttributeDeclaration eventsNative at jquery.ceylon (730:2-730:42)
                var eventsNative$33395=$$$cjl32280.createJSObject();
                //'for' statement at jquery.ceylon (731:2-735:2)
                var it$33396 = events$33394.iterator();
                var item$33397;while ((item$33397=it$33396.next())!==$$$cl32209.getFinished()){
                    var key$33398=item$33397.key;
                    var val$33399=item$33397.item;
                    /*Begin dynamic block*/
                    $$$cjl32280.objectDefineProperty(eventsNative$33395,(tmpvar$33400=$$$cjl32280.createJSString(key$33398),$$$cl32209.isOfType(tmpvar$33400,{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]})?tmpvar$33400:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'733:39-733:57','jquery.ceylon')),$$$cjl32280.DataDescriptor(true,false,true,true,$$$cl32209.$JsCallable(val$33399,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.bind(/*NULL PARAM!*/eventsNative$33395));
                /*End dynamic block*/
            };$$jQueryAbs.bindEvents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','bindEvents']};};
            
            //MethodDefinition blur at jquery.ceylon (741:1-745:1)
            $$jQueryAbs.blur$defs$eventData=function(eventData$33401,handler$33402){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.blur$defs$handler=function(eventData$33401,handler$33402){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.blur=function blur(eventData$33401,handler$33402){
                var $$jQueryAbs=this;
                if(eventData$33401===undefined){eventData$33401=$$jQueryAbs.blur$defs$eventData(eventData$33401,handler$33402);}
                if(handler$33402===undefined){handler$33402=$$jQueryAbs.blur$defs$handler(eventData$33401,handler$33402);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.blur(/*NULL PARAM!*/eventData$33401/*NULL PARAM!*/,handler$33402));
                /*End dynamic block*/
            };$$jQueryAbs.blur.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','blur']};};
            
            //MethodDefinition change at jquery.ceylon (747:1-751:1)
            $$jQueryAbs.change$defs$eventData=function(eventData$33403,handler$33404){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.change$defs$handler=function(eventData$33403,handler$33404){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.change=function change(eventData$33403,handler$33404){
                var $$jQueryAbs=this;
                if(eventData$33403===undefined){eventData$33403=$$jQueryAbs.change$defs$eventData(eventData$33403,handler$33404);}
                if(handler$33404===undefined){handler$33404=$$jQueryAbs.change$defs$handler(eventData$33403,handler$33404);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.blur(/*NULL PARAM!*/eventData$33403/*NULL PARAM!*/,handler$33404));
                /*End dynamic block*/
            };$$jQueryAbs.change.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','change']};};
            
            //MethodDefinition children at jquery.ceylon (753:1-757:1)
            $$jQueryAbs.children$defs$selector=function(selector$33405){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.children=function children(selector$33405){
                var $$jQueryAbs=this;
                if(selector$33405===undefined){selector$33405=$$jQueryAbs.children$defs$selector(selector$33405);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.children(/*NULL PARAM!*/selector$33405));
                /*End dynamic block*/
            };$$jQueryAbs.children.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','children']};};
            
            //MethodDefinition clearQueue at jquery.ceylon (759:1-763:1)
            $$jQueryAbs.clearQueue$defs$queueName=function(queueName$33406){var $$jQueryAbs=this;
            return $$$cl32209.String("fx",2);};
            $$jQueryAbs.clearQueue=function clearQueue(queueName$33406){
                var $$jQueryAbs=this;
                if(queueName$33406===undefined){queueName$33406=$$jQueryAbs.clearQueue$defs$queueName(queueName$33406);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.clearQueue(/*NULL PARAM!*/queueName$33406.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.clearQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','clearQueue']};};
            
            //MethodDefinition click at jquery.ceylon (765:1-769:1)
            $$jQueryAbs.click$defs$eventData=function(eventData$33407,handler$33408){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.click$defs$handler=function(eventData$33407,handler$33408){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.click=function click(eventData$33407,handler$33408){
                var $$jQueryAbs=this;
                if(eventData$33407===undefined){eventData$33407=$$jQueryAbs.click$defs$eventData(eventData$33407,handler$33408);}
                if(handler$33408===undefined){handler$33408=$$jQueryAbs.click$defs$handler(eventData$33407,handler$33408);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.click(/*NULL PARAM!*/eventData$33407/*NULL PARAM!*/,handler$33408));
                /*End dynamic block*/
            };$$jQueryAbs.click.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','click']};};
            
            //MethodDefinition clone at jquery.ceylon (771:1-781:1)
            $$jQueryAbs.clone$defs$withDataAndEvents=function(withDataAndEvents$33409,deepWithDataAndEvents$33410){var $$jQueryAbs=this;
            return false;};
            $$jQueryAbs.clone$defs$deepWithDataAndEvents=function(withDataAndEvents$33409,deepWithDataAndEvents$33410){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.clone=function clone(withDataAndEvents$33409,deepWithDataAndEvents$33410){
                var $$jQueryAbs=this;
                if(withDataAndEvents$33409===undefined){withDataAndEvents$33409=$$jQueryAbs.clone$defs$withDataAndEvents(withDataAndEvents$33409,deepWithDataAndEvents$33410);}
                if(deepWithDataAndEvents$33410===undefined){deepWithDataAndEvents$33410=$$jQueryAbs.clone$defs$deepWithDataAndEvents(withDataAndEvents$33409,deepWithDataAndEvents$33410);}
                var deep$33411;
                if((deep$33411=deepWithDataAndEvents$33410)!==null){
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.clone(/*NULL PARAM!*/withDataAndEvents$33409/*NULL PARAM!*/,deep$33411));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.clone(/*NULL PARAM!*/withDataAndEvents$33409));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.clone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'withDataAndEvents',$mt:'prm',$def:1,$t:{t:$$$cl32209.Boolean},$an:function(){return[];}},{$nm:'deepWithDataAndEvents',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','clone']};};
            
            //MethodDefinition closest at jquery.ceylon (783:1-787:1)
            $$jQueryAbs.closest$defs$context=function(selector$33412,context$33413){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.closest=function closest(selector$33412,context$33413){
                var $$jQueryAbs=this;
                if(context$33413===undefined){context$33413=$$jQueryAbs.closest$defs$context(selector$33412,context$33413);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.closest(/*NULL PARAM!*/selector$33412.valueOf()/*NULL PARAM!*/,context$33413));
                /*End dynamic block*/
            };$$jQueryAbs.closest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjd33135.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','closest']};};
            
            //MethodDefinition closestElement at jquery.ceylon (789:1-793:1)
            $$jQueryAbs.closestElement=function closestElement(elem$33414){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.closest(/*NULL PARAM!*/elem$33414.$native));
                /*End dynamic block*/
            };$$jQueryAbs.closestElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elem',$mt:'prm',$t:{t:$$$cjd33135.Element},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','closestElement']};};
            
            //MethodDefinition closestjQuery at jquery.ceylon (795:1-799:1)
            $$jQueryAbs.closestjQuery=function closestjQuery(jq$33415){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.closest(/*NULL PARAM!*/jq$33415.$native));
                /*End dynamic block*/
            };$$jQueryAbs.closestjQuery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'jq',$mt:'prm',$t:{t:JQuery},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','closestjQuery']};};
            
            //MethodDefinition contents at jquery.ceylon (801:1-805:1)
            $$jQueryAbs.contents=function contents(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.contents());
                /*End dynamic block*/
            };$$jQueryAbs.contents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','contents']};};
            
            //MethodDefinition getCss at jquery.ceylon (807:1-811:1)
            $$jQueryAbs.getCss=function getCss(properties$33416){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$jQueryAbs.$native.css(/*NULL PARAM!*/properties$33416));
                /*End dynamic block*/
            };$$jQueryAbs.getCss.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[{$nm:'properties',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.String}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getCss']};};
            
            //MethodDefinition setCss at jquery.ceylon (813:1-817:1)
            $$jQueryAbs.setCss=function setCss(property$33417,val$33418){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.css(/*NULL PARAM!*/property$33417.valueOf()/*NULL PARAM!*/,val$33418));
                /*End dynamic block*/
            };$$jQueryAbs.setCss.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Number}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setCss']};};
            
            //MethodDefinition setCssCallback at jquery.ceylon (819:1-823:1)
            $$jQueryAbs.setCssCallback=function setCssCallback(property$33419,callback$33420){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.css(/*NULL PARAM!*/property$33419.valueOf()/*NULL PARAM!*/,$$$cl32209.$JsCallable(callback$33420,[{$nm:'index',$mt:'prm',$t:{t:$$$cl32209.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.String}})));
                /*End dynamic block*/
            };$$jQueryAbs.setCssCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setCssCallback']};};
            
            //MethodDefinition setCssJson at jquery.ceylon (825:1-829:1)
            $$jQueryAbs.setCssJson=function setCssJson(property$33421,val$33422){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.css(/*NULL PARAM!*/property$33421.valueOf()/*NULL PARAM!*/,val$33422.$native));
                /*End dynamic block*/
            };$$jQueryAbs.setCssJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cjj33169.JSJSON},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setCssJson']};};
            
            //MethodDefinition setData at jquery.ceylon (831:1-835:1)
            $$jQueryAbs.setData=function setData(key$33423,data$33424){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.data(/*NULL PARAM!*/key$33423.valueOf()/*NULL PARAM!*/,data$33424.$native));
                /*End dynamic block*/
            };$$jQueryAbs.setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:$$$cjl32280.JSObject},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setData']};};
            
            //MethodDefinition setDataEntries at jquery.ceylon (837:1-847:1)
            $$jQueryAbs.setDataEntries=function setDataEntries(events$33425){
                var $$jQueryAbs=this;
                if(events$33425===undefined){events$33425=$$$cl32209.getEmpty();}
                
                //AttributeDeclaration dataNative at jquery.ceylon (838:2-838:40)
                var dataNative$33426=$$$cjl32280.createJSObject();
                //'for' statement at jquery.ceylon (839:2-843:2)
                var it$33427 = events$33425.iterator();
                var item$33428;while ((item$33428=it$33427.next())!==$$$cl32209.getFinished()){
                    var key$33429=item$33428.key;
                    var val$33430=item$33428.item;
                    /*Begin dynamic block*/
                    $$$cjl32280.objectDefineProperty(dataNative$33426,(tmpvar$33431=$$$cjl32280.createJSString(key$33429),$$$cl32209.isOfType(tmpvar$33431,{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]})?tmpvar$33431:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'841:37-841:55','jquery.ceylon')),$$$cjl32280.DataDescriptor(true,false,true,true,val$33430.$native));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.data(/*NULL PARAM!*/dataNative$33426));
                /*End dynamic block*/
            };$$jQueryAbs.setDataEntries.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cjl32280.JSObject}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setDataEntries']};};
            
            //MethodDefinition getData at jquery.ceylon (849:1-859:1)
            $$jQueryAbs.getData$defs$key=function(key$33432){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.getData=function getData(key$33432){
                var $$jQueryAbs=this;
                if(key$33432===undefined){key$33432=$$jQueryAbs.getData$defs$key(key$33432);}
                var k$33433;
                if((k$33433=key$33432)!==null){
                    /*Begin dynamic block*/
                    return $$$cjl32280.JSObject($$jQueryAbs.$native.data(/*NULL PARAM!*/key$33432));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return $$$cjl32280.JSObject($$jQueryAbs.$native.data());
                    /*End dynamic block*/
                }
            };$$jQueryAbs.getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSObject},$ps:[{$nm:'key',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getData']};};
            
            //MethodDefinition dblclick at jquery.ceylon (861:1-865:1)
            $$jQueryAbs.dblclick$defs$eventData=function(eventData$33434,handler$33435){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.dblclick$defs$handler=function(eventData$33434,handler$33435){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.dblclick=function dblclick(eventData$33434,handler$33435){
                var $$jQueryAbs=this;
                if(eventData$33434===undefined){eventData$33434=$$jQueryAbs.dblclick$defs$eventData(eventData$33434,handler$33435);}
                if(handler$33435===undefined){handler$33435=$$jQueryAbs.dblclick$defs$handler(eventData$33434,handler$33435);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.blur(/*NULL PARAM!*/eventData$33434/*NULL PARAM!*/,handler$33435));
                /*End dynamic block*/
            };$$jQueryAbs.dblclick.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','dblclick']};};
            
            //MethodDefinition delay at jquery.ceylon (867:1-871:1)
            $$jQueryAbs.delay$defs$queueName=function(duration$33436,queueName$33437){var $$jQueryAbs=this;
            return $$$cl32209.String("fx",2);};
            $$jQueryAbs.delay=function delay(duration$33436,queueName$33437){
                var $$jQueryAbs=this;
                if(queueName$33437===undefined){queueName$33437=$$jQueryAbs.delay$defs$queueName(duration$33436,queueName$33437);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.delay(/*NULL PARAM!*/duration$33436/*NULL PARAM!*/,queueName$33437.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.delay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$t:{t:$$$cl32209.Integer},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','delay']};};
            
            //MethodDefinition delegate at jquery.ceylon (873:1-877:1)
            $$jQueryAbs.delegate$defs$eventData=function(selector$33438,eventType$33439,eventData$33440,handler$33441){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.delegate$defs$handler=function(selector$33438,eventType$33439,eventData$33440,handler$33441){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.delegate=function delegate(selector$33438,eventType$33439,eventData$33440,handler$33441){
                var $$jQueryAbs=this;
                if(eventData$33440===undefined){eventData$33440=$$jQueryAbs.delegate$defs$eventData(selector$33438,eventType$33439,eventData$33440,handler$33441);}
                if(handler$33441===undefined){handler$33441=$$jQueryAbs.delegate$defs$handler(selector$33438,eventType$33439,eventData$33440,handler$33441);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.delegate(/*NULL PARAM!*/selector$33438.valueOf()/*NULL PARAM!*/,eventType$33439.valueOf()/*NULL PARAM!*/,eventData$33440/*NULL PARAM!*/,handler$33441));
                /*End dynamic block*/
            };$$jQueryAbs.delegate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'eventType',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','delegate']};};
            
            //MethodDefinition delegateEvents at jquery.ceylon (879:1-889:1)
            $$jQueryAbs.delegateEvents=function delegateEvents(selector$33442,events$33443){
                var $$jQueryAbs=this;
                if(events$33443===undefined){events$33443=$$$cl32209.getEmpty();}
                
                //AttributeDeclaration eventsNative at jquery.ceylon (880:2-880:42)
                var eventsNative$33444=$$$cjl32280.createJSObject();
                //'for' statement at jquery.ceylon (881:2-885:2)
                var it$33445 = events$33443.iterator();
                var item$33446;while ((item$33446=it$33445.next())!==$$$cl32209.getFinished()){
                    var key$33447=item$33446.key;
                    var val$33448=item$33446.item;
                    /*Begin dynamic block*/
                    $$$cjl32280.objectDefineProperty(eventsNative$33444,(tmpvar$33449=$$$cjl32280.createJSString(key$33447),$$$cl32209.isOfType(tmpvar$33449,{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]})?tmpvar$33449:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'883:39-883:57','jquery.ceylon')),$$$cjl32280.DataDescriptor(true,false,true,true,$$$cl32209.$JsCallable(val$33448,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.delegate(/*NULL PARAM!*/selector$33442.valueOf()/*NULL PARAM!*/,eventsNative$33444));
                /*End dynamic block*/
            };$$jQueryAbs.delegateEvents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'events',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','delegateEvents']};};
            
            //MethodDefinition dequeue at jquery.ceylon (891:1-895:1)
            $$jQueryAbs.dequeue$defs$queueName=function(queueName$33450){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.dequeue=function dequeue(queueName$33450){
                var $$jQueryAbs=this;
                if(queueName$33450===undefined){queueName$33450=$$jQueryAbs.dequeue$defs$queueName(queueName$33450);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.dequeue(/*NULL PARAM!*/queueName$33450));
                /*End dynamic block*/
            };$$jQueryAbs.dequeue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','dequeue']};};
            
            //MethodDefinition detach at jquery.ceylon (897:1-901:1)
            $$jQueryAbs.detach$defs$selector=function(selector$33451){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.detach=function detach(selector$33451){
                var $$jQueryAbs=this;
                if(selector$33451===undefined){selector$33451=$$jQueryAbs.detach$defs$selector(selector$33451);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.detach(/*NULL PARAM!*/selector$33451));
                /*End dynamic block*/
            };$$jQueryAbs.detach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','detach']};};
            
            //MethodDefinition die at jquery.ceylon (903:1-907:1)
            $$jQueryAbs.die$defs$eventData=function(eventData$33452,handler$33453){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.die$defs$handler=function(eventData$33452,handler$33453){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.die=function die(eventData$33452,handler$33453){
                var $$jQueryAbs=this;
                if(eventData$33452===undefined){eventData$33452=$$jQueryAbs.die$defs$eventData(eventData$33452,handler$33453);}
                if(handler$33453===undefined){handler$33453=$$jQueryAbs.die$defs$handler(eventData$33452,handler$33453);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.die(/*NULL PARAM!*/eventData$33452/*NULL PARAM!*/,handler$33453));
                /*End dynamic block*/
            };$$jQueryAbs.die.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','die']};};
            
            //MethodDefinition each at jquery.ceylon (909:1-913:1)
            $$jQueryAbs.each=function each(handler$33454){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.each(/*NULL PARAM!*/$$$cl32209.$JsCallable(handler$33454,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.each.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','each']};};
            
            //MethodDefinition empty at jquery.ceylon (915:1-919:1)
            $$jQueryAbs.empty=function empty(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.empty());
                /*End dynamic block*/
            };$$jQueryAbs.empty.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','empty']};};
            
            //MethodDefinition end at jquery.ceylon (921:1-925:1)
            $$jQueryAbs.end=function end(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.end());
                /*End dynamic block*/
            };$$jQueryAbs.end.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','end']};};
            
            //MethodDefinition eq at jquery.ceylon (927:1-931:1)
            $$jQueryAbs.eq=function eq(index$33455){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.eq(/*NULL PARAM!*/index$33455));
                /*End dynamic block*/
            };$$jQueryAbs.eq.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl32209.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','eq']};};
            
            //MethodDefinition error at jquery.ceylon (933:1-937:1)
            $$jQueryAbs.error$defs$eventData=function(eventData$33456,handler$33457){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.error$defs$handler=function(eventData$33456,handler$33457){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.error=function error(eventData$33456,handler$33457){
                var $$jQueryAbs=this;
                if(eventData$33456===undefined){eventData$33456=$$jQueryAbs.error$defs$eventData(eventData$33456,handler$33457);}
                if(handler$33457===undefined){handler$33457=$$jQueryAbs.error$defs$handler(eventData$33456,handler$33457);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.error(/*NULL PARAM!*/eventData$33456/*NULL PARAM!*/,handler$33457));
                /*End dynamic block*/
            };$$jQueryAbs.error.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','error']};};
            
            //MethodDefinition fadeIn at jquery.ceylon (939:1-943:1)
            $$jQueryAbs.fadeIn$defs$duration=function(duration$33458,easing$33459,complete$33460){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeIn$defs$easing=function(duration$33458,easing$33459,complete$33460){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeIn$defs$complete=function(duration$33458,easing$33459,complete$33460){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeIn=function fadeIn(duration$33458,easing$33459,complete$33460){
                var $$jQueryAbs=this;
                if(duration$33458===undefined){duration$33458=$$jQueryAbs.fadeIn$defs$duration(duration$33458,easing$33459,complete$33460);}
                if(easing$33459===undefined){easing$33459=$$jQueryAbs.fadeIn$defs$easing(duration$33458,easing$33459,complete$33460);}
                if(complete$33460===undefined){complete$33460=$$jQueryAbs.fadeIn$defs$complete(duration$33458,easing$33459,complete$33460);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.fadeIn(/*NULL PARAM!*/duration$33458/*NULL PARAM!*/,easing$33459/*NULL PARAM!*/,complete$33460));
                /*End dynamic block*/
            };$$jQueryAbs.fadeIn.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeIn']};};
            
            //MethodDefinition fadeInOptions at jquery.ceylon (945:1-949:1)
            $$jQueryAbs.fadeInOptions=function fadeInOptions(options$33461){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/options$33461.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.fadeInOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeInOptions']};};
            
            //MethodDefinition fadeOut at jquery.ceylon (951:1-955:1)
            $$jQueryAbs.fadeOut$defs$duration=function(duration$33462,easing$33463,complete$33464){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeOut$defs$easing=function(duration$33462,easing$33463,complete$33464){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeOut$defs$complete=function(duration$33462,easing$33463,complete$33464){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeOut=function fadeOut(duration$33462,easing$33463,complete$33464){
                var $$jQueryAbs=this;
                if(duration$33462===undefined){duration$33462=$$jQueryAbs.fadeOut$defs$duration(duration$33462,easing$33463,complete$33464);}
                if(easing$33463===undefined){easing$33463=$$jQueryAbs.fadeOut$defs$easing(duration$33462,easing$33463,complete$33464);}
                if(complete$33464===undefined){complete$33464=$$jQueryAbs.fadeOut$defs$complete(duration$33462,easing$33463,complete$33464);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/duration$33462/*NULL PARAM!*/,easing$33463/*NULL PARAM!*/,complete$33464));
                /*End dynamic block*/
            };$$jQueryAbs.fadeOut.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeOut']};};
            
            //MethodDefinition fadeOutOptions at jquery.ceylon (957:1-961:1)
            $$jQueryAbs.fadeOutOptions=function fadeOutOptions(options$33465){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/options$33465.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.fadeOutOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeOutOptions']};};
            
            //MethodDefinition fadeTo at jquery.ceylon (963:1-967:1)
            $$jQueryAbs.fadeTo$defs$easing=function(duration$33466,opacity$33467,easing$33468,complete$33469){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeTo$defs$complete=function(duration$33466,opacity$33467,easing$33468,complete$33469){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeTo=function fadeTo(duration$33466,opacity$33467,easing$33468,complete$33469){
                var $$jQueryAbs=this;
                if(easing$33468===undefined){easing$33468=$$jQueryAbs.fadeTo$defs$easing(duration$33466,opacity$33467,easing$33468,complete$33469);}
                if(complete$33469===undefined){complete$33469=$$jQueryAbs.fadeTo$defs$complete(duration$33466,opacity$33467,easing$33468,complete$33469);}
                /*Begin dynamic block*/
                $$jQueryAbs.$native.fadeTo(/*NULL PARAM!*/duration$33466/*NULL PARAM!*/,opacity$33467.valueOf()/*NULL PARAM!*/,easing$33468/*NULL PARAM!*/,complete$33469);
                /*End dynamic block*/
            };$$jQueryAbs.fadeTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'duration',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Integer}]},$an:function(){return[];}},{$nm:'opacity',$mt:'prm',$t:{t:$$$cl32209.Float},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeTo']};};
            
            //MethodDefinition fadeToggle at jquery.ceylon (969:1-973:1)
            $$jQueryAbs.fadeToggle$defs$duration=function(duration$33470,easing$33471,complete$33472){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeToggle$defs$easing=function(duration$33470,easing$33471,complete$33472){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeToggle$defs$complete=function(duration$33470,easing$33471,complete$33472){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.fadeToggle=function fadeToggle(duration$33470,easing$33471,complete$33472){
                var $$jQueryAbs=this;
                if(duration$33470===undefined){duration$33470=$$jQueryAbs.fadeToggle$defs$duration(duration$33470,easing$33471,complete$33472);}
                if(easing$33471===undefined){easing$33471=$$jQueryAbs.fadeToggle$defs$easing(duration$33470,easing$33471,complete$33472);}
                if(complete$33472===undefined){complete$33472=$$jQueryAbs.fadeToggle$defs$complete(duration$33470,easing$33471,complete$33472);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/duration$33470/*NULL PARAM!*/,easing$33471/*NULL PARAM!*/,complete$33472));
                /*End dynamic block*/
            };$$jQueryAbs.fadeToggle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeToggle']};};
            
            //MethodDefinition fadeToggleOptions at jquery.ceylon (975:1-979:1)
            $$jQueryAbs.fadeToggleOptions=function fadeToggleOptions(options$33473){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/options$33473.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.fadeToggleOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeToggleOptions']};};
            
            //MethodDefinition filter at jquery.ceylon (981:1-993:1)
            $$jQueryAbs.filter=function filter(selector$33474){
                var $$jQueryAbs=this;
                //Switch statement at jquery.ceylon (982:2-992:2)
                var case$33475=selector$33474;
                if ($$$cl32209.isOfType(selector$33474,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.filter(/*NULL PARAM!*/case$33475.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(selector$33474,{ t:'u', l:[{t:$$$cjd33135.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.filter(/*NULL PARAM!*/case$33475.$native));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (982:2-992:2)
            };$$jQueryAbs.filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjd33135.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','filter']};};
            
            //MethodDefinition filterCallback at jquery.ceylon (995:1-999:1)
            $$jQueryAbs.filterCallback=function filterCallback(callback$33476){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.filter(/*NULL PARAM!*/$$$cl32209.$JsCallable(callback$33476,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.filterCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','filterCallback']};};
            
            //MethodDefinition find at jquery.ceylon (1001:1-1013:1)
            $$jQueryAbs.find=function find(selector$33477){
                var $$jQueryAbs=this;
                //Switch statement at jquery.ceylon (1002:2-1012:2)
                var case$33478=selector$33477;
                if ($$$cl32209.isOfType(selector$33477,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.find(/*NULL PARAM!*/case$33478.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(selector$33477,{ t:'u', l:[{t:$$$cjd33135.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.find(/*NULL PARAM!*/case$33478.$native));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (1002:2-1012:2)
            };$$jQueryAbs.find.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjd33135.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','find']};};
            
            //MethodDefinition finish at jquery.ceylon (1015:1-1019:1)
            $$jQueryAbs.finish=function finish(queue$33479){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.finish(/*NULL PARAM!*/(typeof ueue==='undefined'||ueue===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: ueue")),'1017:31-1017:34','jquery.ceylon'):ueue)));
                /*End dynamic block*/
            };$$jQueryAbs.finish.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queue',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','finish']};};
            
            //MethodDefinition first at jquery.ceylon (1021:1-1025:1)
            $$jQueryAbs.first=function first(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.first());
                /*End dynamic block*/
            };$$jQueryAbs.first.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','first']};};
            
            //MethodDefinition focus at jquery.ceylon (1027:1-1031:1)
            $$jQueryAbs.focus$defs$eventData=function(eventData$33480,handler$33481){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.focus$defs$handler=function(eventData$33480,handler$33481){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.focus=function focus(eventData$33480,handler$33481){
                var $$jQueryAbs=this;
                if(eventData$33480===undefined){eventData$33480=$$jQueryAbs.focus$defs$eventData(eventData$33480,handler$33481);}
                if(handler$33481===undefined){handler$33481=$$jQueryAbs.focus$defs$handler(eventData$33480,handler$33481);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.focus(/*NULL PARAM!*/eventData$33480/*NULL PARAM!*/,handler$33481));
                /*End dynamic block*/
            };$$jQueryAbs.focus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','focus']};};
            
            //MethodDefinition focusin at jquery.ceylon (1033:1-1037:1)
            $$jQueryAbs.focusin$defs$eventData=function(eventData$33482,handler$33483){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.focusin$defs$handler=function(eventData$33482,handler$33483){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.focusin=function focusin(eventData$33482,handler$33483){
                var $$jQueryAbs=this;
                if(eventData$33482===undefined){eventData$33482=$$jQueryAbs.focusin$defs$eventData(eventData$33482,handler$33483);}
                if(handler$33483===undefined){handler$33483=$$jQueryAbs.focusin$defs$handler(eventData$33482,handler$33483);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.focusin(/*NULL PARAM!*/eventData$33482/*NULL PARAM!*/,handler$33483));
                /*End dynamic block*/
            };$$jQueryAbs.focusin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','focusin']};};
            
            //MethodDefinition focusout at jquery.ceylon (1039:1-1043:1)
            $$jQueryAbs.focusout$defs$eventData=function(eventData$33484,handler$33485){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.focusout$defs$handler=function(eventData$33484,handler$33485){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.focusout=function focusout(eventData$33484,handler$33485){
                var $$jQueryAbs=this;
                if(eventData$33484===undefined){eventData$33484=$$jQueryAbs.focusout$defs$eventData(eventData$33484,handler$33485);}
                if(handler$33485===undefined){handler$33485=$$jQueryAbs.focusout$defs$handler(eventData$33484,handler$33485);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.focusout(/*NULL PARAM!*/eventData$33484/*NULL PARAM!*/,handler$33485));
                /*End dynamic block*/
            };$$jQueryAbs.focusout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','focusout']};};
            
            //MethodDefinition get at jquery.ceylon (1045:1-1049:1)
            $$jQueryAbs.get$defs$index=function(index$33486){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.get=function get(index$33486){
                var $$jQueryAbs=this;
                if(index$33486===undefined){index$33486=$$jQueryAbs.get$defs$index(index$33486);}
                /*Begin dynamic block*/
                return $$$cjd33135.Element($$jQueryAbs.$native.get(/*NULL PARAM!*/index$33486));
                /*End dynamic block*/
            };$$jQueryAbs.get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjd33135.Element},$ps:[{$nm:'index',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','get']};};
            
            //MethodDefinition has at jquery.ceylon (1051:1-1063:1)
            $$jQueryAbs.has=function has(selector$33487){
                var $$jQueryAbs=this;
                //Switch statement at jquery.ceylon (1052:2-1062:2)
                var case$33488=selector$33487;
                if ($$$cl32209.isOfType(selector$33487,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.has(/*NULL PARAM!*/case$33488.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(selector$33487,{t:$$$cjd33135.Element})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.has(/*NULL PARAM!*/case$33488.$native));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (1052:2-1062:2)
            };$$jQueryAbs.has.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjd33135.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','has']};};
            
            //MethodDefinition hasClass at jquery.ceylon (1065:1-1073:1)
            $$jQueryAbs.hasClass=function hasClass(className$33489){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAbs.$native.hasClass(/*NULL PARAM!*/className$33489.valueOf())){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAbs.hasClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hasClass']};};
            
            //MethodDefinition getHeight at jquery.ceylon (1075:1-1079:1)
            $$jQueryAbs.getHeight=function getHeight(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$jQueryAbs.$native.height());
                /*End dynamic block*/
            };$$jQueryAbs.getHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getHeight']};};
            
            //MethodDefinition setHeight at jquery.ceylon (1081:1-1085:1)
            $$jQueryAbs.setHeight=function setHeight(val$33490){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.height(/*NULL PARAM!*/val$33490));
                /*End dynamic block*/
            };$$jQueryAbs.setHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setHeight']};};
            
            //MethodDefinition setHeightCallback at jquery.ceylon (1087:1-1091:1)
            $$jQueryAbs.setHeightCallback=function setHeightCallback(callback$33491){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.height(/*NULL PARAM!*/$$$cl32209.$JsCallable(callback$33491,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.setHeightCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setHeightCallback']};};
            
            //MethodDefinition hide at jquery.ceylon (1093:1-1097:1)
            $$jQueryAbs.hide$defs$duration=function(duration$33492,easing$33493,complete$33494){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.hide$defs$easing=function(duration$33492,easing$33493,complete$33494){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.hide$defs$complete=function(duration$33492,easing$33493,complete$33494){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.hide=function hide(duration$33492,easing$33493,complete$33494){
                var $$jQueryAbs=this;
                if(duration$33492===undefined){duration$33492=$$jQueryAbs.hide$defs$duration(duration$33492,easing$33493,complete$33494);}
                if(easing$33493===undefined){easing$33493=$$jQueryAbs.hide$defs$easing(duration$33492,easing$33493,complete$33494);}
                if(complete$33494===undefined){complete$33494=$$jQueryAbs.hide$defs$complete(duration$33492,easing$33493,complete$33494);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.hide(/*NULL PARAM!*/duration$33492/*NULL PARAM!*/,easing$33493/*NULL PARAM!*/,complete$33494));
                /*End dynamic block*/
            };$$jQueryAbs.hide.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hide']};};
            
            //MethodDefinition hideOptions at jquery.ceylon (1099:1-1103:1)
            $$jQueryAbs.hideOptions=function hideOptions(options$33495){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.hide(/*NULL PARAM!*/options$33495.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.hideOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hideOptions']};};
            
            //MethodDefinition hover at jquery.ceylon (1105:1-1109:1)
            $$jQueryAbs.hover=function hover(handlerIn$33496,handlerOut$33497){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.hover(/*NULL PARAM!*/$$$cl32209.$JsCallable(handlerIn$33496,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl32209.Anything}})/*NULL PARAM!*/,$$$cl32209.$JsCallable(handlerOut$33497,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.hover.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handlerIn',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}},{$nm:'handlerOut',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hover']};};
            
            //MethodDefinition hoverSingle at jquery.ceylon (1111:1-1115:1)
            $$jQueryAbs.hoverSingle=function hoverSingle(handlerInOut$33498){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.hover(/*NULL PARAM!*/$$$cl32209.$JsCallable(handlerInOut$33498,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.hoverSingle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handlerInOut',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hoverSingle']};};
            
            //MethodDefinition getHtml at jquery.ceylon (1117:1-1121:1)
            $$jQueryAbs.getHtml=function getHtml(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$jQueryAbs.$native.html());
                /*End dynamic block*/
            };$$jQueryAbs.getHtml.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getHtml']};};
            
            //MethodDefinition setHtml at jquery.ceylon (1123:1-1127:1)
            $$jQueryAbs.setHtml=function setHtml(html$33499){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$jQueryAbs.$native.html(/*NULL PARAM!*/html$33499.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.setHtml.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[{$nm:'html',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setHtml']};};
            
            //MethodDefinition setHtmlCallback at jquery.ceylon (1129:1-1133:1)
            $$jQueryAbs.setHtmlCallback=function setHtmlCallback(callback$33500){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$jQueryAbs.$native.html(/*NULL PARAM!*/$$$cl32209.$JsCallable(callback$33500,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.String}})));
                /*End dynamic block*/
            };$$jQueryAbs.setHtmlCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setHtmlCallback']};};
            
            //MethodDefinition index at jquery.ceylon (1135:1-1147:1)
            $$jQueryAbs.index=function index(selector$33501){
                var $$jQueryAbs=this;
                //Switch statement at jquery.ceylon (1136:2-1146:2)
                var case$33502=selector$33501;
                if ($$$cl32209.isOfType(selector$33501,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return $$$cjl32280.JSNumber($$jQueryAbs.$native.index(/*NULL PARAM!*/case$33502.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(selector$33501,{ t:'u', l:[{t:$$$cjd33135.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return $$$cjl32280.JSNumber($$jQueryAbs.$native.index(/*NULL PARAM!*/case$33502.$native));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (1136:2-1146:2)
            };$$jQueryAbs.index.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjd33135.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','index']};};
            
            //MethodDefinition innerHeight at jquery.ceylon (1149:1-1153:1)
            $$jQueryAbs.innerHeight=function innerHeight(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$jQueryAbs.$native.innerHeight());
                /*End dynamic block*/
            };$$jQueryAbs.innerHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','innerHeight']};};
            
            //MethodDefinition innerWidth at jquery.ceylon (1155:1-1159:1)
            $$jQueryAbs.innerWidth=function innerWidth(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$jQueryAbs.$native.innerWidth());
                /*End dynamic block*/
            };$$jQueryAbs.innerWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','innerWidth']};};
            
            //MethodDefinition insertAfter at jquery.ceylon (1161:1-1173:1)
            $$jQueryAbs.insertAfter=function insertAfter(target$33503){
                var $$jQueryAbs=this;
                //Switch statement at jquery.ceylon (1162:2-1172:2)
                var case$33504=target$33503;
                if ($$$cl32209.isOfType(target$33503,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.insertAfter(/*NULL PARAM!*/case$33504.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(target$33503,{ t:'u', l:[{t:$$$cjd33135.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.insertAfter(/*NULL PARAM!*/case$33504.$native));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (1162:2-1172:2)
            };$$jQueryAbs.insertAfter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjd33135.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','insertAfter']};};
            
            //MethodDefinition insertBefore at jquery.ceylon (1175:1-1187:1)
            $$jQueryAbs.insertBefore=function insertBefore(target$33505){
                var $$jQueryAbs=this;
                //Switch statement at jquery.ceylon (1176:2-1186:2)
                var case$33506=target$33505;
                if ($$$cl32209.isOfType(target$33505,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.insertBefore(/*NULL PARAM!*/case$33506.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(target$33505,{ t:'u', l:[{t:$$$cjd33135.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.insertBefore(/*NULL PARAM!*/case$33506.$native));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (1176:2-1186:2)
            };$$jQueryAbs.insertBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjd33135.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','insertBefore']};};
            
            //MethodDefinition isSelector at jquery.ceylon (1189:1-1209:1)
            $$jQueryAbs.isSelector=function isSelector(selector$33507){
                var $$jQueryAbs=this;
                //Switch statement at jquery.ceylon (1190:2-1208:2)
                var case$33508=selector$33507;
                if ($$$cl32209.isOfType(selector$33507,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    if($$jQueryAbs.$native.is(/*NULL PARAM!*/case$33508.valueOf())){
                        return true;
                    }else {
                        return false;
                    }/*End dynamic block*/
                }else if ($$$cl32209.isOfType(selector$33507,{ t:'u', l:[{t:$$$cjd33135.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    if($$jQueryAbs.$native.is(/*NULL PARAM!*/case$33508.$native)){
                        return true;
                    }else {
                        return false;
                    }/*End dynamic block*/
                }//End switch statement at jquery.ceylon (1190:2-1208:2)
            };$$jQueryAbs.isSelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjd33135.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','isSelector']};};
            
            //MethodDefinition isCallback at jquery.ceylon (1211:1-1219:1)
            $$jQueryAbs.isCallback=function isCallback(callback$33509){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAbs.$native.is(/*NULL PARAM!*/$$$cl32209.$JsCallable(callback$33509,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},Return:{t:$$$cl32209.Boolean}}))){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAbs.isCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},Return:{t:$$$cl32209.Boolean}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','isCallback']};};
            
            //MethodDefinition jquery at jquery.ceylon (1221:1-1225:1)
            $$jQueryAbs.jquery=function jquery(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$jQueryAbs.$native.jquery);
                /*End dynamic block*/
            };$$jQueryAbs.jquery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','jquery']};};
            
            //MethodDefinition keydown at jquery.ceylon (1227:1-1231:1)
            $$jQueryAbs.keydown$defs$eventData=function(eventData$33510,handler$33511){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.keydown$defs$handler=function(eventData$33510,handler$33511){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.keydown=function keydown(eventData$33510,handler$33511){
                var $$jQueryAbs=this;
                if(eventData$33510===undefined){eventData$33510=$$jQueryAbs.keydown$defs$eventData(eventData$33510,handler$33511);}
                if(handler$33511===undefined){handler$33511=$$jQueryAbs.keydown$defs$handler(eventData$33510,handler$33511);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.keydown(/*NULL PARAM!*/eventData$33510/*NULL PARAM!*/,handler$33511));
                /*End dynamic block*/
            };$$jQueryAbs.keydown.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','keydown']};};
            
            //MethodDefinition keypress at jquery.ceylon (1233:1-1237:1)
            $$jQueryAbs.keypress$defs$eventData=function(eventData$33512,handler$33513){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.keypress$defs$handler=function(eventData$33512,handler$33513){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.keypress=function keypress(eventData$33512,handler$33513){
                var $$jQueryAbs=this;
                if(eventData$33512===undefined){eventData$33512=$$jQueryAbs.keypress$defs$eventData(eventData$33512,handler$33513);}
                if(handler$33513===undefined){handler$33513=$$jQueryAbs.keypress$defs$handler(eventData$33512,handler$33513);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.keypress(/*NULL PARAM!*/eventData$33512/*NULL PARAM!*/,handler$33513));
                /*End dynamic block*/
            };$$jQueryAbs.keypress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','keypress']};};
            
            //MethodDefinition keyup at jquery.ceylon (1239:1-1243:1)
            $$jQueryAbs.keyup$defs$eventData=function(eventData$33514,handler$33515){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.keyup$defs$handler=function(eventData$33514,handler$33515){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.keyup=function keyup(eventData$33514,handler$33515){
                var $$jQueryAbs=this;
                if(eventData$33514===undefined){eventData$33514=$$jQueryAbs.keyup$defs$eventData(eventData$33514,handler$33515);}
                if(handler$33515===undefined){handler$33515=$$jQueryAbs.keyup$defs$handler(eventData$33514,handler$33515);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.keyup(/*NULL PARAM!*/eventData$33514/*NULL PARAM!*/,handler$33515));
                /*End dynamic block*/
            };$$jQueryAbs.keyup.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','keyup']};};
            
            //MethodDefinition last at jquery.ceylon (1245:1-1249:1)
            $$jQueryAbs.last=function last(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.last());
                /*End dynamic block*/
            };$$jQueryAbs.last.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','last']};};
            
            //MethodDefinition resizeTrigger at jquery.ceylon (1251:1-1255:1)
            $$jQueryAbs.resizeTrigger=function resizeTrigger(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                $$jQueryAbs.$native.resize();
                /*End dynamic block*/
            };$$jQueryAbs.resizeTrigger.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','resizeTrigger']};};
            
            //MethodDefinition length at jquery.ceylon (1257:1-1261:1)
            $$jQueryAbs.length=function length(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$jQueryAbs.$native.length);
                /*End dynamic block*/
            };$$jQueryAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','length']};};
            
            //MethodDefinition load at jquery.ceylon (1264:1-1268:1)
            $$jQueryAbs.load=function load(url$33516,data$33517,complete$33518){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.load(/*NULL PARAM!*/url$33516.valueOf()/*NULL PARAM!*/,data$33517/*NULL PARAM!*/,$$$cl32209.$JsCallable(complete$33518,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.load.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','load']};};
            
            //MethodDefinition map at jquery.ceylon (1270:1-1274:1)
            $$jQueryAbs.map=function map(callback$33519){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.map(/*NULL PARAM!*/$$$cl32209.$JsCallable(callback$33519,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cjd33135.Element},Element:{t:$$$cjd33135.Element}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjd33135.Element}]}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.map.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cjd33135.Element},Element:{t:$$$cjd33135.Element}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjd33135.Element}]}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','map']};};
            
            //MethodDefinition mousedown at jquery.ceylon (1276:1-1280:1)
            $$jQueryAbs.mousedown$defs$eventData=function(eventData$33520,handler$33521){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mousedown$defs$handler=function(eventData$33520,handler$33521){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mousedown=function mousedown(eventData$33520,handler$33521){
                var $$jQueryAbs=this;
                if(eventData$33520===undefined){eventData$33520=$$jQueryAbs.mousedown$defs$eventData(eventData$33520,handler$33521);}
                if(handler$33521===undefined){handler$33521=$$jQueryAbs.mousedown$defs$handler(eventData$33520,handler$33521);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.mousedown(/*NULL PARAM!*/eventData$33520/*NULL PARAM!*/,handler$33521));
                /*End dynamic block*/
            };$$jQueryAbs.mousedown.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mousedown']};};
            
            //MethodDefinition mouseenter at jquery.ceylon (1282:1-1286:1)
            $$jQueryAbs.mouseenter$defs$eventData=function(eventData$33522,handler$33523){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseenter$defs$handler=function(eventData$33522,handler$33523){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseenter=function mouseenter(eventData$33522,handler$33523){
                var $$jQueryAbs=this;
                if(eventData$33522===undefined){eventData$33522=$$jQueryAbs.mouseenter$defs$eventData(eventData$33522,handler$33523);}
                if(handler$33523===undefined){handler$33523=$$jQueryAbs.mouseenter$defs$handler(eventData$33522,handler$33523);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.mouseenter(/*NULL PARAM!*/eventData$33522/*NULL PARAM!*/,handler$33523));
                /*End dynamic block*/
            };$$jQueryAbs.mouseenter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseenter']};};
            
            //MethodDefinition mouseleave at jquery.ceylon (1288:1-1292:1)
            $$jQueryAbs.mouseleave$defs$eventData=function(eventData$33524,handler$33525){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseleave$defs$handler=function(eventData$33524,handler$33525){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseleave=function mouseleave(eventData$33524,handler$33525){
                var $$jQueryAbs=this;
                if(eventData$33524===undefined){eventData$33524=$$jQueryAbs.mouseleave$defs$eventData(eventData$33524,handler$33525);}
                if(handler$33525===undefined){handler$33525=$$jQueryAbs.mouseleave$defs$handler(eventData$33524,handler$33525);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.mouseleave(/*NULL PARAM!*/eventData$33524/*NULL PARAM!*/,handler$33525));
                /*End dynamic block*/
            };$$jQueryAbs.mouseleave.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseleave']};};
            
            //MethodDefinition mousemove at jquery.ceylon (1294:1-1298:1)
            $$jQueryAbs.mousemove$defs$eventData=function(eventData$33526,handler$33527){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mousemove$defs$handler=function(eventData$33526,handler$33527){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mousemove=function mousemove(eventData$33526,handler$33527){
                var $$jQueryAbs=this;
                if(eventData$33526===undefined){eventData$33526=$$jQueryAbs.mousemove$defs$eventData(eventData$33526,handler$33527);}
                if(handler$33527===undefined){handler$33527=$$jQueryAbs.mousemove$defs$handler(eventData$33526,handler$33527);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.mousemove(/*NULL PARAM!*/eventData$33526/*NULL PARAM!*/,handler$33527));
                /*End dynamic block*/
            };$$jQueryAbs.mousemove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mousemove']};};
            
            //MethodDefinition mouseout at jquery.ceylon (1300:1-1304:1)
            $$jQueryAbs.mouseout$defs$eventData=function(eventData$33528,handler$33529){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseout$defs$handler=function(eventData$33528,handler$33529){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseout=function mouseout(eventData$33528,handler$33529){
                var $$jQueryAbs=this;
                if(eventData$33528===undefined){eventData$33528=$$jQueryAbs.mouseout$defs$eventData(eventData$33528,handler$33529);}
                if(handler$33529===undefined){handler$33529=$$jQueryAbs.mouseout$defs$handler(eventData$33528,handler$33529);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.mouseout(/*NULL PARAM!*/eventData$33528/*NULL PARAM!*/,handler$33529));
                /*End dynamic block*/
            };$$jQueryAbs.mouseout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseout']};};
            
            //MethodDefinition mouseover at jquery.ceylon (1306:1-1310:1)
            $$jQueryAbs.mouseover$defs$eventData=function(eventData$33530,handler$33531){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseover$defs$handler=function(eventData$33530,handler$33531){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseover=function mouseover(eventData$33530,handler$33531){
                var $$jQueryAbs=this;
                if(eventData$33530===undefined){eventData$33530=$$jQueryAbs.mouseover$defs$eventData(eventData$33530,handler$33531);}
                if(handler$33531===undefined){handler$33531=$$jQueryAbs.mouseover$defs$handler(eventData$33530,handler$33531);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.mouseover(/*NULL PARAM!*/eventData$33530/*NULL PARAM!*/,handler$33531));
                /*End dynamic block*/
            };$$jQueryAbs.mouseover.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseover']};};
            
            //MethodDefinition mouseup at jquery.ceylon (1312:1-1316:1)
            $$jQueryAbs.mouseup$defs$eventData=function(eventData$33532,handler$33533){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseup$defs$handler=function(eventData$33532,handler$33533){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.mouseup=function mouseup(eventData$33532,handler$33533){
                var $$jQueryAbs=this;
                if(eventData$33532===undefined){eventData$33532=$$jQueryAbs.mouseup$defs$eventData(eventData$33532,handler$33533);}
                if(handler$33533===undefined){handler$33533=$$jQueryAbs.mouseup$defs$handler(eventData$33532,handler$33533);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.mouseup(/*NULL PARAM!*/eventData$33532/*NULL PARAM!*/,handler$33533));
                /*End dynamic block*/
            };$$jQueryAbs.mouseup.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseup']};};
            
            //MethodDefinition next at jquery.ceylon (1318:1-1322:1)
            $$jQueryAbs.next$defs$selector=function(selector$33534){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.next=function next(selector$33534){
                var $$jQueryAbs=this;
                if(selector$33534===undefined){selector$33534=$$jQueryAbs.next$defs$selector(selector$33534);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.next(/*NULL PARAM!*/selector$33534));
                /*End dynamic block*/
            };$$jQueryAbs.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','next']};};
            
            //MethodDefinition nextAll at jquery.ceylon (1324:1-1328:1)
            $$jQueryAbs.nextAll$defs$selector=function(selector$33535){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.nextAll=function nextAll(selector$33535){
                var $$jQueryAbs=this;
                if(selector$33535===undefined){selector$33535=$$jQueryAbs.nextAll$defs$selector(selector$33535);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.nextAll(/*NULL PARAM!*/selector$33535));
                /*End dynamic block*/
            };$$jQueryAbs.nextAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','nextAll']};};
            
            //MethodDefinition nextUntil at jquery.ceylon (1330:1-1347:1)
            $$jQueryAbs.nextUntil$defs$selector=function(selector$33536,filter$33537){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.nextUntil$defs$filter=function(selector$33536,filter$33537){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.nextUntil=function nextUntil(selector$33536,filter$33537){
                var $$jQueryAbs=this;
                if(selector$33536===undefined){selector$33536=$$jQueryAbs.nextUntil$defs$selector(selector$33536,filter$33537);}
                if(filter$33537===undefined){filter$33537=$$jQueryAbs.nextUntil$defs$filter(selector$33536,filter$33537);}
                //Switch statement at jquery.ceylon (1331:2-1346:2)
                var case$33538=selector$33536;
                if ($$$cl32209.isOfType(selector$33536,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.nextUntil(/*NULL PARAM!*/case$33538.valueOf()/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: f")),'1334:45-1334:45','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(selector$33536,{t:$$$cjd33135.Element})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.nextUntil(/*NULL PARAM!*/case$33538.$native/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: f")),'1339:52-1339:52','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(selector$33536,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.nextUntil(/*NULL PARAM!*/null/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: f")),'1344:41-1344:41','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (1331:2-1346:2)
            };$$jQueryAbs.nextUntil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjd33135.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','nextUntil']};};
            
            //MethodDefinition not at jquery.ceylon (1349:1-1361:1)
            $$jQueryAbs.not=function not(selector$33539){
                var $$jQueryAbs=this;
                //Switch statement at jquery.ceylon (1350:2-1360:2)
                var case$33540=selector$33539;
                if ($$$cl32209.isOfType(selector$33539,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.not(/*NULL PARAM!*/case$33540.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(selector$33539,{ t:'u', l:[{t:JQuery},{t:$$$cjd33135.Element}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.not(/*NULL PARAM!*/case$33540.$native));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (1350:2-1360:2)
            };$$jQueryAbs.not.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JQuery},{t:$$$cjd33135.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','not']};};
            
            //MethodDefinition off at jquery.ceylon (1364:1-1368:1)
            $$jQueryAbs.off$defs$handler=function(events$33541,selector$33542,handler$33543){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.off=function off(events$33541,selector$33542,handler$33543){
                var $$jQueryAbs=this;
                if(handler$33543===undefined){handler$33543=$$jQueryAbs.off$defs$handler(events$33541,selector$33542,handler$33543);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.mouseover(/*NULL PARAM!*/(typeof eventData==='undefined'||eventData===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: eventData")),'1366:34-1366:42','jquery.ceylon'):eventData)/*NULL PARAM!*/,handler$33543));
                /*End dynamic block*/
            };$$jQueryAbs.off.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','off']};};
            
            //MethodDefinition getOffset at jquery.ceylon (1370:1-1374:1)
            $$jQueryAbs.getOffset=function getOffset(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$33544=(/*NULL PARAM!*/tmpvar$33545=$$jQueryAbs.$native.offset(),tmpvar$33546=(typeof Offset==='undefined'?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined type Offset")),'1372:10-1372:15','jquery.ceylon'):Offset),tmpvar$33546.$$===undefined?new tmpvar$33546(tmpvar$33545):tmpvar$33546(tmpvar$33545)),$$$cl32209.isOfType(tmpvar$33544,{t:$$$cl32209.Anything})?tmpvar$33544:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'1372:10-1372:32','jquery.ceylon'));
                /*End dynamic block*/
            };$$jQueryAbs.getOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Coordinates},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getOffset']};};
            
            //MethodDefinition setOffset at jquery.ceylon (1376:1-1386:1)
            $$jQueryAbs.setOffset$defs$offset=function(offset$33547){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.setOffset=function setOffset(offset$33547){
                var $$jQueryAbs=this;
                if(offset$33547===undefined){offset$33547=$$jQueryAbs.setOffset$defs$offset(offset$33547);}
                var o$33548;
                if((o$33548=offset$33547)!==null){
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.offset(/*NULL PARAM!*/o$33548));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.offset());
                    /*End dynamic block*/
                }
            };$$jQueryAbs.setOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'offset',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Coordinates}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setOffset']};};
            
            //MethodDefinition setOffsetCallback at jquery.ceylon (1388:1-1392:1)
            $$jQueryAbs.setOffsetCallback=function setOffsetCallback(offset$33549){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.offset(/*NULL PARAM!*/$$$cl32209.$JsCallable(offset$33549,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:Coordinates},Element:{t:Coordinates}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:Coordinates}]}}},Return:{t:Coordinates}})));
                /*End dynamic block*/
            };$$jQueryAbs.setOffsetCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'offset',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:Coordinates},Element:{t:Coordinates}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:Coordinates}]}}},Return:{t:Coordinates}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setOffsetCallback']};};
            
            //MethodDefinition offsetParent at jquery.ceylon (1394:1-1398:1)
            $$jQueryAbs.offsetParent=function offsetParent(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.offsetParent());
                /*End dynamic block*/
            };$$jQueryAbs.offsetParent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','offsetParent']};};
            
            //MethodDefinition on at jquery.ceylon (1400:1-1404:1)
            $$jQueryAbs.on$defs$selector=function(events$33550,selector$33551,data$33552,handler$33553){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.on$defs$data=function(events$33550,selector$33551,data$33552,handler$33553){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.on$defs$handler=function(events$33550,selector$33551,data$33552,handler$33553){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.on=function on(events$33550,selector$33551,data$33552,handler$33553){
                var $$jQueryAbs=this;
                if(selector$33551===undefined){selector$33551=$$jQueryAbs.on$defs$selector(events$33550,selector$33551,data$33552,handler$33553);}
                if(data$33552===undefined){data$33552=$$jQueryAbs.on$defs$data(events$33550,selector$33551,data$33552,handler$33553);}
                if(handler$33553===undefined){handler$33553=$$jQueryAbs.on$defs$handler(events$33550,selector$33551,data$33552,handler$33553);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.on(/*NULL PARAM!*/events$33550.valueOf()/*NULL PARAM!*/,selector$33551/*NULL PARAM!*/,data$33552/*NULL PARAM!*/,handler$33553));
                /*End dynamic block*/
            };$$jQueryAbs.on.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','on']};};
            
            //MethodDefinition one at jquery.ceylon (1406:1-1410:1)
            $$jQueryAbs.one$defs$selector=function(events$33554,selector$33555,data$33556,handler$33557){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.one$defs$data=function(events$33554,selector$33555,data$33556,handler$33557){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.one$defs$handler=function(events$33554,selector$33555,data$33556,handler$33557){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.one=function one(events$33554,selector$33555,data$33556,handler$33557){
                var $$jQueryAbs=this;
                if(selector$33555===undefined){selector$33555=$$jQueryAbs.one$defs$selector(events$33554,selector$33555,data$33556,handler$33557);}
                if(data$33556===undefined){data$33556=$$jQueryAbs.one$defs$data(events$33554,selector$33555,data$33556,handler$33557);}
                if(handler$33557===undefined){handler$33557=$$jQueryAbs.one$defs$handler(events$33554,selector$33555,data$33556,handler$33557);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.one(/*NULL PARAM!*/events$33554.valueOf()/*NULL PARAM!*/,selector$33555/*NULL PARAM!*/,data$33556/*NULL PARAM!*/,handler$33557));
                /*End dynamic block*/
            };$$jQueryAbs.one.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','one']};};
            
            //MethodDefinition outerHeight at jquery.ceylon (1412:1-1416:1)
            $$jQueryAbs.outerHeight$defs$includeMargin=function(includeMargin$33558){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.outerHeight=function outerHeight(includeMargin$33558){
                var $$jQueryAbs=this;
                if(includeMargin$33558===undefined){includeMargin$33558=$$jQueryAbs.outerHeight$defs$includeMargin(includeMargin$33558);}
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$jQueryAbs.$native.outerHeight(/*NULL PARAM!*/includeMargin$33558));
                /*End dynamic block*/
            };$$jQueryAbs.outerHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[{$nm:'includeMargin',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','outerHeight']};};
            
            //MethodDefinition outerWidth at jquery.ceylon (1418:1-1422:1)
            $$jQueryAbs.outerWidth$defs$includeMargin=function(includeMargin$33559){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.outerWidth=function outerWidth(includeMargin$33559){
                var $$jQueryAbs=this;
                if(includeMargin$33559===undefined){includeMargin$33559=$$jQueryAbs.outerWidth$defs$includeMargin(includeMargin$33559);}
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$jQueryAbs.$native.outerWidth(/*NULL PARAM!*/includeMargin$33559));
                /*End dynamic block*/
            };$$jQueryAbs.outerWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[{$nm:'includeMargin',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','outerWidth']};};
            
            //MethodDefinition parent at jquery.ceylon (1424:1-1428:1)
            $$jQueryAbs.parent$defs$selector=function(selector$33560){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.parent=function parent(selector$33560){
                var $$jQueryAbs=this;
                if(selector$33560===undefined){selector$33560=$$jQueryAbs.parent$defs$selector(selector$33560);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.parent(/*NULL PARAM!*/selector$33560));
                /*End dynamic block*/
            };$$jQueryAbs.parent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','parent']};};
            
            //MethodDefinition parents at jquery.ceylon (1430:1-1434:1)
            $$jQueryAbs.parents$defs$selector=function(selector$33561){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.parents=function parents(selector$33561){
                var $$jQueryAbs=this;
                if(selector$33561===undefined){selector$33561=$$jQueryAbs.parents$defs$selector(selector$33561);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.parents(/*NULL PARAM!*/selector$33561));
                /*End dynamic block*/
            };$$jQueryAbs.parents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','parents']};};
            
            //MethodDefinition parentsUntil at jquery.ceylon (1436:1-1453:1)
            $$jQueryAbs.parentsUntil$defs$selector=function(selector$33562,filter$33563){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.parentsUntil$defs$filter=function(selector$33562,filter$33563){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.parentsUntil=function parentsUntil(selector$33562,filter$33563){
                var $$jQueryAbs=this;
                if(selector$33562===undefined){selector$33562=$$jQueryAbs.parentsUntil$defs$selector(selector$33562,filter$33563);}
                if(filter$33563===undefined){filter$33563=$$jQueryAbs.parentsUntil$defs$filter(selector$33562,filter$33563);}
                //Switch statement at jquery.ceylon (1437:2-1452:2)
                var case$33564=selector$33562;
                if ($$$cl32209.isOfType(selector$33562,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.parents(/*NULL PARAM!*/case$33564.valueOf()/*NULL PARAM!*/,filter$33563));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(selector$33562,{t:$$$cjd33135.Element})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.parents(/*NULL PARAM!*/case$33564.$native/*NULL PARAM!*/,filter$33563));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(selector$33562,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.parents(/*NULL PARAM!*/null/*NULL PARAM!*/,filter$33563));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (1437:2-1452:2)
            };$$jQueryAbs.parentsUntil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjd33135.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','parentsUntil']};};
            
            //MethodDefinition position at jquery.ceylon (1455:1-1459:1)
            $$jQueryAbs.position=function position(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return Coordinates($$jQueryAbs.$native.position());
                /*End dynamic block*/
            };$$jQueryAbs.position.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Coordinates},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','position']};};
            
            //MethodDefinition prepend at jquery.ceylon (1461:1-1465:1)
            $$jQueryAbs.prepend=function prepend(content$33565){
                var $$jQueryAbs=this;
                if(content$33565===undefined){content$33565=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$$cjl32280.JSFunction($$jQueryAbs.$native.prepend).$apply(null,(tmpvar$33566=(function(){
                    //SpreadOp at 1463:56-1463:70
                    var lst$33567=[];
                    var it$33568=content$33565.iterator();
                    var elem$33569;
                    while ((elem$33569=it$33568.next())!==$$$cl32209.getFinished()){
                        lst$33567.push(elem$33569.$native);
                    }
                    return $$$cl32209.ArraySequence(lst$33567);
                }()),$$$cl32209.isOfType(tmpvar$33566,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$33566:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'1463:56-1463:70','jquery.ceylon'))));
                /*End dynamic block*/
            };$$jQueryAbs.prepend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{ t:'u', l:[{t:$$$cjd33135.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prepend']};};
            
            //MethodDefinition prependHTML at jquery.ceylon (1467:1-1471:1)
            $$jQueryAbs.prependHTML=function prependHTML(content$33570){
                var $$jQueryAbs=this;
                if(content$33570===undefined){content$33570=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.prepend(/*NULL PARAM!*/content$33570));
                /*End dynamic block*/
            };$$jQueryAbs.prependHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prependHTML']};};
            
            //MethodDefinition prependCallback at jquery.ceylon (1473:1-1477:1)
            $$jQueryAbs.prependCallback=function prependCallback(callback$33571){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.prepend(/*NULL PARAM!*/$$$cl32209.$JsCallable(callback$33571,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.prependCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prependCallback']};};
            
            //MethodDefinition prependTo at jquery.ceylon (1479:1-1491:1)
            $$jQueryAbs.prependTo=function prependTo(target$33572){
                var $$jQueryAbs=this;
                //Switch statement at jquery.ceylon (1480:2-1490:2)
                var case$33573=target$33572;
                if ($$$cl32209.isOfType(target$33572,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.prependTo(/*NULL PARAM!*/case$33573.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(target$33572,{ t:'u', l:[{t:$$$cjd33135.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.prependTo(/*NULL PARAM!*/case$33573.$native));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (1480:2-1490:2)
            };$$jQueryAbs.prependTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjd33135.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prependTo']};};
            
            //MethodDefinition prev at jquery.ceylon (1493:1-1497:1)
            $$jQueryAbs.prev$defs$selector=function(selector$33574){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.prev=function prev(selector$33574){
                var $$jQueryAbs=this;
                if(selector$33574===undefined){selector$33574=$$jQueryAbs.prev$defs$selector(selector$33574);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.prev(/*NULL PARAM!*/selector$33574));
                /*End dynamic block*/
            };$$jQueryAbs.prev.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prev']};};
            
            //MethodDefinition prevAll at jquery.ceylon (1499:1-1503:1)
            $$jQueryAbs.prevAll$defs$selector=function(selector$33575){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.prevAll=function prevAll(selector$33575){
                var $$jQueryAbs=this;
                if(selector$33575===undefined){selector$33575=$$jQueryAbs.prevAll$defs$selector(selector$33575);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.prevAll(/*NULL PARAM!*/selector$33575));
                /*End dynamic block*/
            };$$jQueryAbs.prevAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prevAll']};};
            
            //MethodDefinition prevUntil at jquery.ceylon (1505:1-1522:1)
            $$jQueryAbs.prevUntil$defs$selector=function(selector$33576,filter$33577){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.prevUntil$defs$filter=function(selector$33576,filter$33577){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.prevUntil=function prevUntil(selector$33576,filter$33577){
                var $$jQueryAbs=this;
                if(selector$33576===undefined){selector$33576=$$jQueryAbs.prevUntil$defs$selector(selector$33576,filter$33577);}
                if(filter$33577===undefined){filter$33577=$$jQueryAbs.prevUntil$defs$filter(selector$33576,filter$33577);}
                //Switch statement at jquery.ceylon (1506:2-1521:2)
                var case$33578=selector$33576;
                if ($$$cl32209.isOfType(selector$33576,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.prevUntil(/*NULL PARAM!*/case$33578.valueOf()/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: f")),'1509:45-1509:45','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(selector$33576,{t:$$$cjd33135.Element})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.prevUntil(/*NULL PARAM!*/case$33578.$native/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: f")),'1514:52-1514:52','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(selector$33576,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.prevUntil(/*NULL PARAM!*/null/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: f")),'1519:41-1519:41','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (1506:2-1521:2)
            };$$jQueryAbs.prevUntil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjd33135.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prevUntil']};};
            
            //MethodDefinition promise at jquery.ceylon (1524:1-1534:1)
            $$jQueryAbs.promise$defs$type=function(type$33579,target$33580){var $$jQueryAbs=this;
            return $$$cl32209.String("fx",2);};
            $$jQueryAbs.promise$defs$target=function(type$33579,target$33580){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.promise=function promise(type$33579,target$33580){
                var $$jQueryAbs=this;
                if(type$33579===undefined){type$33579=$$jQueryAbs.promise$defs$type(type$33579,target$33580);}
                if(target$33580===undefined){target$33580=$$jQueryAbs.promise$defs$target(type$33579,target$33580);}
                var t$33581;
                if((t$33581=target$33580)!==null){
                    /*Begin dynamic block*/
                    return Promise($$jQueryAbs.$native.promise(/*NULL PARAM!*/type$33579.valueOf()/*NULL PARAM!*/,t$33581.$native));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return Promise($$jQueryAbs.$native.promise(/*NULL PARAM!*/type$33579.valueOf()));
                    /*End dynamic block*/
                }
            };$$jQueryAbs.promise.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'type',$mt:'prm',$def:1,$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'target',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSObject}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','promise']};};
            
            //MethodDefinition getProp at jquery.ceylon (1536:1-1547:1)
            $$jQueryAbs.getProp=function getProp(name$33582){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration prop at jquery.ceylon (1538:3-1538:35)
                var prop$33583=$$jQueryAbs.$native.prop(/*NULL PARAM!*/name$33582.valueOf());
                $prop$getProp$33583={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.jquery','JQueryAbs','$m','getProp','$at','prop']};}};
                $prop$getProp$33583.get=function(){return prop$33583};
                if(prop$33583.instanceof(/*NULL PARAM!*/(typeof String==='undefined'||String===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: String")),'1539:25-1539:30','jquery.ceylon'):String))){
                    return $$$cjl32280.JSString(prop$33583);
                }else {
                    if(prop$33583){
                        return true;
                    }else {
                        return false;
                    }
                }/*End dynamic block*/
            };$$jQueryAbs.getProp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cjl32280.JSString},{t:$$$cl32209.Boolean}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getProp']};};
            
            //MethodDefinition setProp at jquery.ceylon (1549:1-1553:1)
            $$jQueryAbs.setProp=function setProp(propertyName$33584,val$33585){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.prop(/*NULL PARAM!*/propertyName$33584.valueOf()/*NULL PARAM!*/,val$33585));
                /*End dynamic block*/
            };$$jQueryAbs.setProp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Integer},{t:$$$cl32209.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setProp']};};
            
            //MethodDefinition setPropEntries at jquery.ceylon (1555:1-1565:1)
            $$jQueryAbs.setPropEntries=function setPropEntries(properties$33586){
                var $$jQueryAbs=this;
                if(properties$33586===undefined){properties$33586=$$$cl32209.getEmpty();}
                
                //AttributeDeclaration propertiesNative at jquery.ceylon (1556:2-1556:46)
                var propertiesNative$33587=$$$cjl32280.createJSObject();
                //'for' statement at jquery.ceylon (1557:2-1561:2)
                var it$33588 = properties$33586.iterator();
                var item$33589;while ((item$33589=it$33588.next())!==$$$cl32209.getFinished()){
                    var key$33590=item$33589.key;
                    var val$33591=item$33589.item;
                    /*Begin dynamic block*/
                    $$$cjl32280.objectDefineProperty(propertiesNative$33587,(tmpvar$33592=$$$cjl32280.createJSString(key$33590),$$$cl32209.isOfType(tmpvar$33592,{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]})?tmpvar$33592:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'1559:43-1559:61','jquery.ceylon')),$$$cjl32280.DataDescriptor(true,false,true,true,val$33591));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.prop(/*NULL PARAM!*/propertiesNative$33587));
                /*End dynamic block*/
            };$$jQueryAbs.setPropEntries.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Integer},{t:$$$cl32209.Boolean}]}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setPropEntries']};};
            
            //MethodDefinition setPropCallback at jquery.ceylon (1567:1-1571:1)
            $$jQueryAbs.setPropCallback=function setPropCallback(propertyName$33593,callback$33594){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.prop(/*NULL PARAM!*/propertyName$33593.valueOf()/*NULL PARAM!*/,$$$cl32209.$JsCallable(callback$33594,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.setPropCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setPropCallback']};};
            
            //MethodDefinition pushStack at jquery.ceylon (1573:1-1577:1)
            $$jQueryAbs.pushStack$defs$name=function(elements$33595,name$33596,arguments$33597){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.pushStack$defs$arguments=function(elements$33595,name$33596,arguments$33597){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.pushStack=function pushStack(elements$33595,name$33596,arguments$33597){
                var $$jQueryAbs=this;
                if(name$33596===undefined){name$33596=$$jQueryAbs.pushStack$defs$name(elements$33595,name$33596,arguments$33597);}
                if(arguments$33597===undefined){arguments$33597=$$jQueryAbs.pushStack$defs$arguments(elements$33595,name$33596,arguments$33597);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.pushStack(/*NULL PARAM!*/(function(){
                    //SpreadOp at 1575:34-1575:49
                    var lst$33598=[];
                    var it$33599=elements$33595.iterator();
                    var elem$33600;
                    while ((elem$33600=it$33599.next())!==$$$cl32209.getFinished()){
                        lst$33598.push(elem$33600.$native);
                    }
                    return $$$cl32209.ArraySequence(lst$33598);
                }())/*NULL PARAM!*/,name$33596/*NULL PARAM!*/,arguments$33597));
                /*End dynamic block*/
            };$$jQueryAbs.pushStack.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cjd33135.Element}}},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}},{$nm:'arguments',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','pushStack']};};
            
            //MethodDefinition getQueue at jquery.ceylon (1579:1-1584:1)
            $$jQueryAbs.getQueue$defs$queueName=function(queueName$33601){var $$jQueryAbs=this;
            return $$$cl32209.String("fx",2);};
            $$jQueryAbs.getQueue=function getQueue(queueName$33601){
                var $$jQueryAbs=this;
                if(queueName$33601===undefined){queueName$33601=$$jQueryAbs.getQueue$defs$queueName(queueName$33601);}
                /*Begin dynamic block*/
                return $$$cjl32280.JSArray($$jQueryAbs.$native.queue(/*NULL PARAM!*/queueName$33601.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.getQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSArray},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns an array of functions",29)),$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getQueue']};};
            
            //MethodDefinition setQueue at jquery.ceylon (1586:1-1590:1)
            $$jQueryAbs.setQueue$defs$queueName=function(queueName$33602,newQueue$33603){var $$jQueryAbs=this;
            return $$$cl32209.String("fx",2);};
            $$jQueryAbs.setQueue=function setQueue(queueName$33602,newQueue$33603){
                var $$jQueryAbs=this;
                if(queueName$33602===undefined){queueName$33602=$$jQueryAbs.setQueue$defs$queueName(queueName$33602,newQueue$33603);}
                if(newQueue$33603===undefined){newQueue$33603=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.queue(/*NULL PARAM!*/queueName$33602.valueOf()/*NULL PARAM!*/,newQueue$33603));
                /*End dynamic block*/
            };$$jQueryAbs.setQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'newQueue',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setQueue']};};
            
            //MethodDefinition setQueueCallback at jquery.ceylon (1592:1-1596:1)
            $$jQueryAbs.setQueueCallback$defs$queueName=function(next$33604,queueName$33605){var $$jQueryAbs=this;
            return $$$cl32209.String("fx",2);};
            $$jQueryAbs.setQueueCallback=function setQueueCallback(next$33604,queueName$33605){
                var $$jQueryAbs=this;
                if(queueName$33605===undefined){queueName$33605=$$jQueryAbs.setQueueCallback$defs$queueName(next$33604,queueName$33605);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.queue(/*NULL PARAM!*/queueName$33605.valueOf()/*NULL PARAM!*/,$$$cl32209.$JsCallable(next$33604,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.setQueueCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'next',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setQueueCallback']};};
            
            //MethodDefinition ready at jquery.ceylon (1598:1-1602:1)
            $$jQueryAbs.ready=function ready(handler$33606){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.ready(/*NULL PARAM!*/$$$cl32209.$JsCallable(handler$33606,[],{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.ready.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ready']};};
            
            //MethodDefinition remove at jquery.ceylon (1604:1-1608:1)
            $$jQueryAbs.remove$defs$selector=function(selector$33607){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.remove=function remove(selector$33607){
                var $$jQueryAbs=this;
                if(selector$33607===undefined){selector$33607=$$jQueryAbs.remove$defs$selector(selector$33607);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.remove(/*NULL PARAM!*/selector$33607));
                /*End dynamic block*/
            };$$jQueryAbs.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','remove']};};
            
            //MethodDefinition removeAttr at jquery.ceylon (1610:1-1614:1)
            $$jQueryAbs.removeAttr=function removeAttr(attributeName$33608){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.removeAttr(/*NULL PARAM!*/attributeName$33608.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.removeAttr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeAttr']};};
            
            //MethodDefinition removeClass at jquery.ceylon (1616:1-1620:1)
            $$jQueryAbs.removeClass=function removeClass(className$33609){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.removeClass(/*NULL PARAM!*/(typeof clasName==='undefined'||clasName===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: clasName")),'1618:36-1618:43','jquery.ceylon'):clasName)));
                /*End dynamic block*/
            };$$jQueryAbs.removeClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeClass']};};
            
            //MethodDefinition removeClassCallback at jquery.ceylon (1622:1-1626:1)
            $$jQueryAbs.removeClassCallback=function removeClassCallback(callback$33610){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.removeClass(/*NULL PARAM!*/$$$cl32209.$JsCallable(callback$33610,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.String}})));
                /*End dynamic block*/
            };$$jQueryAbs.removeClassCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeClassCallback']};};
            
            //MethodDefinition removeData at jquery.ceylon (1628:1-1632:1)
            $$jQueryAbs.removeData=function removeData(names$33611){
                var $$jQueryAbs=this;
                if(names$33611===undefined){names$33611=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.removeData(/*NULL PARAM!*/names$33611));
                /*End dynamic block*/
            };$$jQueryAbs.removeData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'names',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeData']};};
            
            //MethodDefinition removeProp at jquery.ceylon (1634:1-1638:1)
            $$jQueryAbs.removeProp=function removeProp(propertyName$33612){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.removeProp(/*NULL PARAM!*/propertyName$33612.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.removeProp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeProp']};};
            
            //MethodDefinition replaceAll at jquery.ceylon (1640:1-1652:1)
            $$jQueryAbs.replaceAll=function replaceAll(target$33613){
                var $$jQueryAbs=this;
                //Switch statement at jquery.ceylon (1641:2-1651:2)
                var case$33614=target$33613;
                if ($$$cl32209.isOfType(target$33613,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.replaceAll(/*NULL PARAM!*/case$33614.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(target$33613,{ t:'u', l:[{t:JQuery},{t:$$$cjd33135.Element}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.replaceAll(/*NULL PARAM!*/case$33614.$native));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (1641:2-1651:2)
            };$$jQueryAbs.replaceAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JQuery},{t:$$$cjd33135.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','replaceAll']};};
            
            //MethodDefinition replaceWith at jquery.ceylon (1654:1-1666:1)
            $$jQueryAbs.replaceWith=function replaceWith(newContent$33615){
                var $$jQueryAbs=this;
                //Switch statement at jquery.ceylon (1655:2-1665:2)
                var case$33616=newContent$33615;
                if ($$$cl32209.isOfType(newContent$33615,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.replaceWith(/*NULL PARAM!*/case$33616.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(newContent$33615,{ t:'u', l:[{t:JQuery},{t:$$$cjd33135.Element}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.replaceWith(/*NULL PARAM!*/case$33616.$native));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (1655:2-1665:2)
            };$$jQueryAbs.replaceWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'newContent',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JQuery},{t:$$$cjd33135.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','replaceWith']};};
            
            //MethodDefinition replaceWithCallback at jquery.ceylon (1668:1-1672:1)
            $$jQueryAbs.replaceWithCallback=function replaceWithCallback(callback$33617){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.replaceWith(/*NULL PARAM!*/callback$33617));
                /*End dynamic block*/
            };$$jQueryAbs.replaceWithCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JQuery},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cjd33135.Element}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','replaceWithCallback']};};
            
            //MethodDefinition resize at jquery.ceylon (1674:1-1678:1)
            $$jQueryAbs.resize$defs$eventData=function(handler$33618,eventData$33619){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.resize=function resize(handler$33618,eventData$33619){
                var $$jQueryAbs=this;
                if(eventData$33619===undefined){eventData$33619=$$jQueryAbs.resize$defs$eventData(handler$33618,eventData$33619);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.resize(/*NULL PARAM!*/eventData$33619/*NULL PARAM!*/,$$$cl32209.$JsCallable(handler$33618,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.resize.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','resize']};};
            
            //MethodDefinition scroll at jquery.ceylon (1680:1-1684:1)
            $$jQueryAbs.scroll$defs$eventData=function(handler$33620,eventData$33621){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.scroll=function scroll(handler$33620,eventData$33621){
                var $$jQueryAbs=this;
                if(eventData$33621===undefined){eventData$33621=$$jQueryAbs.scroll$defs$eventData(handler$33620,eventData$33621);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.scroll(/*NULL PARAM!*/eventData$33621/*NULL PARAM!*/,$$$cl32209.$JsCallable(handler$33620,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.scroll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','scroll']};};
            
            //MethodDefinition getScrollLeft at jquery.ceylon (1686:1-1690:1)
            $$jQueryAbs.getScrollLeft=function getScrollLeft(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$jQueryAbs.$native.scrollLeft());
                /*End dynamic block*/
            };$$jQueryAbs.getScrollLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getScrollLeft']};};
            
            //MethodDefinition setScrollLeft at jquery.ceylon (1692:1-1696:1)
            $$jQueryAbs.setScrollLeft=function setScrollLeft(val$33622){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.scrollLeft(/*NULL PARAM!*/val$33622));
                /*End dynamic block*/
            };$$jQueryAbs.setScrollLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl32209.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setScrollLeft']};};
            
            //MethodDefinition getScrollTop at jquery.ceylon (1698:1-1702:1)
            $$jQueryAbs.getScrollTop=function getScrollTop(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$jQueryAbs.$native.scrollTop());
                /*End dynamic block*/
            };$$jQueryAbs.getScrollTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getScrollTop']};};
            
            //MethodDefinition setScrollTop at jquery.ceylon (1704:1-1708:1)
            $$jQueryAbs.setScrollTop=function setScrollTop(val$33623){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.scrollTop(/*NULL PARAM!*/val$33623));
                /*End dynamic block*/
            };$$jQueryAbs.setScrollTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl32209.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setScrollTop']};};
            
            //MethodDefinition select at jquery.ceylon (1710:1-1714:1)
            $$jQueryAbs.select$defs$eventData=function(handler$33624,eventData$33625){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.select=function select(handler$33624,eventData$33625){
                var $$jQueryAbs=this;
                if(eventData$33625===undefined){eventData$33625=$$jQueryAbs.select$defs$eventData(handler$33624,eventData$33625);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.select(/*NULL PARAM!*/eventData$33625/*NULL PARAM!*/,$$$cl32209.$JsCallable(handler$33624,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}})));
                /*End dynamic block*/
            };$$jQueryAbs.select.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','select']};};
            
            //MethodDefinition serialize at jquery.ceylon (1716:1-1720:1)
            $$jQueryAbs.serialize=function serialize(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$jQueryAbs.$native.serialize());
                /*End dynamic block*/
            };$$jQueryAbs.serialize.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','serialize']};};
            
            //MethodDefinition serializeArray at jquery.ceylon (1722:1-1726:1)
            $$jQueryAbs.serializeArray=function serializeArray(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSArray($$jQueryAbs.$native.serializeArray());
                /*End dynamic block*/
            };$$jQueryAbs.serializeArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSArray},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','serializeArray']};};
            
            //MethodDefinition show at jquery.ceylon (1728:1-1732:1)
            $$jQueryAbs.show$defs$duration=function(duration$33626,easing$33627,complete$33628){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.show$defs$easing=function(duration$33626,easing$33627,complete$33628){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.show$defs$complete=function(duration$33626,easing$33627,complete$33628){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.show=function show(duration$33626,easing$33627,complete$33628){
                var $$jQueryAbs=this;
                if(duration$33626===undefined){duration$33626=$$jQueryAbs.show$defs$duration(duration$33626,easing$33627,complete$33628);}
                if(easing$33627===undefined){easing$33627=$$jQueryAbs.show$defs$easing(duration$33626,easing$33627,complete$33628);}
                if(complete$33628===undefined){complete$33628=$$jQueryAbs.show$defs$complete(duration$33626,easing$33627,complete$33628);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.show(/*NULL PARAM!*/duration$33626/*NULL PARAM!*/,easing$33627/*NULL PARAM!*/,complete$33628));
                /*End dynamic block*/
            };$$jQueryAbs.show.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','show']};};
            
            //MethodDefinition showOptions at jquery.ceylon (1734:1-1738:1)
            $$jQueryAbs.showOptions=function showOptions(options$33629){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.show(/*NULL PARAM!*/options$33629.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.showOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','showOptions']};};
            
            //MethodDefinition siblings at jquery.ceylon (1740:1-1744:1)
            $$jQueryAbs.siblings$defs$siblings=function(siblings$33630){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.siblings=function siblings(siblings$33630){
                var $$jQueryAbs=this;
                if(siblings$33630===undefined){siblings$33630=$$jQueryAbs.siblings$defs$siblings(siblings$33630);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.siblings(/*NULL PARAM!*/siblings$33630));
                /*End dynamic block*/
            };$$jQueryAbs.siblings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'siblings',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','siblings']};};
            
            //MethodDefinition slice at jquery.ceylon (1746:1-1750:1)
            $$jQueryAbs.slice$defs$end=function(start$33631,end$33632){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slice=function slice(start$33631,end$33632){
                var $$jQueryAbs=this;
                if(end$33632===undefined){end$33632=$$jQueryAbs.slice$defs$end(start$33631,end$33632);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.slice(/*NULL PARAM!*/start$33631/*NULL PARAM!*/,end$33632));
                /*End dynamic block*/
            };$$jQueryAbs.slice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'start',$mt:'prm',$t:{t:$$$cl32209.Integer},$an:function(){return[];}},{$nm:'end',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slice']};};
            
            //MethodDefinition slideDown at jquery.ceylon (1752:1-1756:1)
            $$jQueryAbs.slideDown$defs$duration=function(duration$33633,easing$33634,complete$33635){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideDown$defs$easing=function(duration$33633,easing$33634,complete$33635){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideDown$defs$complete=function(duration$33633,easing$33634,complete$33635){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideDown=function slideDown(duration$33633,easing$33634,complete$33635){
                var $$jQueryAbs=this;
                if(duration$33633===undefined){duration$33633=$$jQueryAbs.slideDown$defs$duration(duration$33633,easing$33634,complete$33635);}
                if(easing$33634===undefined){easing$33634=$$jQueryAbs.slideDown$defs$easing(duration$33633,easing$33634,complete$33635);}
                if(complete$33635===undefined){complete$33635=$$jQueryAbs.slideDown$defs$complete(duration$33633,easing$33634,complete$33635);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.slideDown(/*NULL PARAM!*/duration$33633/*NULL PARAM!*/,easing$33634/*NULL PARAM!*/,complete$33635));
                /*End dynamic block*/
            };$$jQueryAbs.slideDown.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideDown']};};
            
            //MethodDefinition slideDownOptions at jquery.ceylon (1758:1-1762:1)
            $$jQueryAbs.slideDownOptions=function slideDownOptions(options$33636){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.slideDown(/*NULL PARAM!*/options$33636.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.slideDownOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideDownOptions']};};
            
            //MethodDefinition slideToggle at jquery.ceylon (1764:1-1768:1)
            $$jQueryAbs.slideToggle$defs$duration=function(duration$33637,easing$33638,complete$33639){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideToggle$defs$easing=function(duration$33637,easing$33638,complete$33639){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideToggle$defs$complete=function(duration$33637,easing$33638,complete$33639){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideToggle=function slideToggle(duration$33637,easing$33638,complete$33639){
                var $$jQueryAbs=this;
                if(duration$33637===undefined){duration$33637=$$jQueryAbs.slideToggle$defs$duration(duration$33637,easing$33638,complete$33639);}
                if(easing$33638===undefined){easing$33638=$$jQueryAbs.slideToggle$defs$easing(duration$33637,easing$33638,complete$33639);}
                if(complete$33639===undefined){complete$33639=$$jQueryAbs.slideToggle$defs$complete(duration$33637,easing$33638,complete$33639);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.slideToggle(/*NULL PARAM!*/duration$33637/*NULL PARAM!*/,easing$33638/*NULL PARAM!*/,complete$33639));
                /*End dynamic block*/
            };$$jQueryAbs.slideToggle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideToggle']};};
            
            //MethodDefinition slideToggleOptions at jquery.ceylon (1770:1-1774:1)
            $$jQueryAbs.slideToggleOptions=function slideToggleOptions(options$33640){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.slideToggle(/*NULL PARAM!*/options$33640.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.slideToggleOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideToggleOptions']};};
            
            //MethodDefinition slideUp at jquery.ceylon (1776:1-1780:1)
            $$jQueryAbs.slideUp$defs$duration=function(duration$33641,easing$33642,complete$33643){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideUp$defs$easing=function(duration$33641,easing$33642,complete$33643){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideUp$defs$complete=function(duration$33641,easing$33642,complete$33643){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.slideUp=function slideUp(duration$33641,easing$33642,complete$33643){
                var $$jQueryAbs=this;
                if(duration$33641===undefined){duration$33641=$$jQueryAbs.slideUp$defs$duration(duration$33641,easing$33642,complete$33643);}
                if(easing$33642===undefined){easing$33642=$$jQueryAbs.slideUp$defs$easing(duration$33641,easing$33642,complete$33643);}
                if(complete$33643===undefined){complete$33643=$$jQueryAbs.slideUp$defs$complete(duration$33641,easing$33642,complete$33643);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.slideUp(/*NULL PARAM!*/duration$33641/*NULL PARAM!*/,easing$33642/*NULL PARAM!*/,complete$33643));
                /*End dynamic block*/
            };$$jQueryAbs.slideUp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideUp']};};
            
            //MethodDefinition slideUpOptions at jquery.ceylon (1782:1-1786:1)
            $$jQueryAbs.slideUpOptions=function slideUpOptions(options$33644){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.slideUp(/*NULL PARAM!*/options$33644.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.slideUpOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideUpOptions']};};
            
            //MethodDefinition stop at jquery.ceylon (1788:1-1792:1)
            $$jQueryAbs.stop$defs$clearQueue=function(clearQueue$33645,jumpToEnd$33646){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.stop$defs$jumpToEnd=function(clearQueue$33645,jumpToEnd$33646){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.stop=function stop(clearQueue$33645,jumpToEnd$33646){
                var $$jQueryAbs=this;
                if(clearQueue$33645===undefined){clearQueue$33645=$$jQueryAbs.stop$defs$clearQueue(clearQueue$33645,jumpToEnd$33646);}
                if(jumpToEnd$33646===undefined){jumpToEnd$33646=$$jQueryAbs.stop$defs$jumpToEnd(clearQueue$33645,jumpToEnd$33646);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.stop(/*NULL PARAM!*/clearQueue$33645/*NULL PARAM!*/,jumpToEnd$33646));
                /*End dynamic block*/
            };$$jQueryAbs.stop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'clearQueue',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$an:function(){return[];}},{$nm:'jumpToEnd',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','stop']};};
            
            //MethodDefinition stopName at jquery.ceylon (1794:1-1798:1)
            $$jQueryAbs.stopName$defs$clearQueue=function(queue$33647,clearQueue$33648,jumpToEnd$33649){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.stopName$defs$jumpToEnd=function(queue$33647,clearQueue$33648,jumpToEnd$33649){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.stopName=function stopName(queue$33647,clearQueue$33648,jumpToEnd$33649){
                var $$jQueryAbs=this;
                if(clearQueue$33648===undefined){clearQueue$33648=$$jQueryAbs.stopName$defs$clearQueue(queue$33647,clearQueue$33648,jumpToEnd$33649);}
                if(jumpToEnd$33649===undefined){jumpToEnd$33649=$$jQueryAbs.stopName$defs$jumpToEnd(queue$33647,clearQueue$33648,jumpToEnd$33649);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.stop(/*NULL PARAM!*/queue$33647.valueOf()/*NULL PARAM!*/,clearQueue$33648/*NULL PARAM!*/,jumpToEnd$33649));
                /*End dynamic block*/
            };$$jQueryAbs.stopName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queue',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'clearQueue',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$an:function(){return[];}},{$nm:'jumpToEnd',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','stopName']};};
            
            //MethodDefinition submit at jquery.ceylon (1800:1-1804:1)
            $$jQueryAbs.submit$defs$eventData=function(eventData$33650,handler$33651){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.submit$defs$handler=function(eventData$33650,handler$33651){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.submit=function submit(eventData$33650,handler$33651){
                var $$jQueryAbs=this;
                if(eventData$33650===undefined){eventData$33650=$$jQueryAbs.submit$defs$eventData(eventData$33650,handler$33651);}
                if(handler$33651===undefined){handler$33651=$$jQueryAbs.submit$defs$handler(eventData$33650,handler$33651);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.submit(/*NULL PARAM!*/eventData$33650/*NULL PARAM!*/,handler$33651));
                /*End dynamic block*/
            };$$jQueryAbs.submit.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','submit']};};
            
            //MethodDefinition getText at jquery.ceylon (1806:1-1810:1)
            $$jQueryAbs.getText=function getText(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$jQueryAbs.$native.text());
                /*End dynamic block*/
            };$$jQueryAbs.getText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getText']};};
            
            //MethodDefinition setText at jquery.ceylon (1812:1-1816:1)
            $$jQueryAbs.setText=function setText(textString$33652){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.text(/*NULL PARAM!*/textString$33652.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.setText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'textString',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setText']};};
            
            //MethodDefinition setTextCallback at jquery.ceylon (1818:1-1822:1)
            $$jQueryAbs.setTextCallback=function setTextCallback(callback$33653){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.text(/*NULL PARAM!*/$$$cl32209.$JsCallable(callback$33653,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.String}})));
                /*End dynamic block*/
            };$$jQueryAbs.setTextCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setTextCallback']};};
            
            //MethodDefinition toArray at jquery.ceylon (1824:1-1828:1)
            $$jQueryAbs.toArray=function toArray(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSArray($$jQueryAbs.$native.toArray());
                /*End dynamic block*/
            };$$jQueryAbs.toArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSArray},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toArray']};};
            
            //MethodDefinition toggle at jquery.ceylon (1830:1-1834:1)
            $$jQueryAbs.toggle$defs$duration=function(duration$33654,easing$33655,complete$33656){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.toggle$defs$easing=function(duration$33654,easing$33655,complete$33656){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.toggle$defs$complete=function(duration$33654,easing$33655,complete$33656){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.toggle=function toggle(duration$33654,easing$33655,complete$33656){
                var $$jQueryAbs=this;
                if(duration$33654===undefined){duration$33654=$$jQueryAbs.toggle$defs$duration(duration$33654,easing$33655,complete$33656);}
                if(easing$33655===undefined){easing$33655=$$jQueryAbs.toggle$defs$easing(duration$33654,easing$33655,complete$33656);}
                if(complete$33656===undefined){complete$33656=$$jQueryAbs.toggle$defs$complete(duration$33654,easing$33655,complete$33656);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.toggle(/*NULL PARAM!*/duration$33654/*NULL PARAM!*/,easing$33655/*NULL PARAM!*/,complete$33656));
                /*End dynamic block*/
            };$$jQueryAbs.toggle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggle']};};
            
            //MethodDefinition toggleOptions at jquery.ceylon (1836:1-1840:1)
            $$jQueryAbs.toggleOptions=function toggleOptions(options$33657){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.toggle(/*NULL PARAM!*/options$33657.toNative()));
                /*End dynamic block*/
            };$$jQueryAbs.toggleOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleOptions']};};
            
            //MethodDefinition toggleShowOrHide at jquery.ceylon (1842:1-1846:1)
            $$jQueryAbs.toggleShowOrHide=function toggleShowOrHide(showOrHide$33658){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.toggle(/*NULL PARAM!*/showOrHide$33658));
                /*End dynamic block*/
            };$$jQueryAbs.toggleShowOrHide.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'showOrHide',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleShowOrHide']};};
            
            //MethodDefinition toggleClass at jquery.ceylon (1848:1-1852:1)
            $$jQueryAbs.toggleClass$defs$swit=function(swit$33659){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.toggleClass=function toggleClass(swit$33659){
                var $$jQueryAbs=this;
                if(swit$33659===undefined){swit$33659=$$jQueryAbs.toggleClass$defs$swit(swit$33659);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.toggleClass(/*NULL PARAM!*/swit$33659));
                /*End dynamic block*/
            };$$jQueryAbs.toggleClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'swit',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleClass']};};
            
            //MethodDefinition toggleClassName at jquery.ceylon (1854:1-1858:1)
            $$jQueryAbs.toggleClassName$defs$swit=function(className$33660,swit$33661){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.toggleClassName=function toggleClassName(className$33660,swit$33661){
                var $$jQueryAbs=this;
                if(swit$33661===undefined){swit$33661=$$jQueryAbs.toggleClassName$defs$swit(className$33660,swit$33661);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.toggleClass(/*NULL PARAM!*/className$33660.valueOf()/*NULL PARAM!*/,swit$33661));
                /*End dynamic block*/
            };$$jQueryAbs.toggleClassName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'swit',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleClassName']};};
            
            //MethodDefinition toggleClassCallback at jquery.ceylon (1860:1-1864:1)
            $$jQueryAbs.toggleClassCallback$defs$swit=function(callback$33662,swit$33663){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.toggleClassCallback=function toggleClassCallback(callback$33662,swit$33663){
                var $$jQueryAbs=this;
                if(swit$33663===undefined){swit$33663=$$jQueryAbs.toggleClassCallback$defs$swit(callback$33662,swit$33663);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.toggleClass(/*NULL PARAM!*/$$$cl32209.$JsCallable(callback$33662,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Boolean},Element:{t:$$$cl32209.Boolean}}},First:{t:$$$cl32209.String},Element:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Boolean}]}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String},{t:$$$cl32209.Boolean}]}}},Return:{t:$$$cl32209.String}})/*NULL PARAM!*/,swit$33663));
                /*End dynamic block*/
            };$$jQueryAbs.toggleClassCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Boolean},Element:{t:$$$cl32209.Boolean}}},First:{t:$$$cl32209.String},Element:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Boolean}]}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String},{t:$$$cl32209.Boolean}]}}},Return:{t:$$$cl32209.String}}},$an:function(){return[];}},{$nm:'swit',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleClassCallback']};};
            
            //MethodDefinition trigger at jquery.ceylon (1866:1-1878:1)
            $$jQueryAbs.trigger=function trigger(event$33664,extraParameters$33665){
                var $$jQueryAbs=this;
                if(extraParameters$33665===undefined){extraParameters$33665=$$$cl32209.getEmpty();}
                //Switch statement at jquery.ceylon (1867:2-1877:2)
                var case$33666=event$33664;
                if ($$$cl32209.isOfType(event$33664,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.trigger(/*NULL PARAM!*/case$33666.valueOf()/*NULL PARAM!*/,extraParameters$33665));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(event$33664,{t:JQueryEvent})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.trigger(/*NULL PARAM!*/case$33666.$native/*NULL PARAM!*/,extraParameters$33665));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (1867:2-1877:2)
            };$$jQueryAbs.trigger.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'event',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JQueryEvent}]},$an:function(){return[];}},{$nm:'extraParameters',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','trigger']};};
            
            //MethodDefinition unbind at jquery.ceylon (1880:1-1892:1)
            $$jQueryAbs.unbind=function unbind(eventType$33667){
                var $$jQueryAbs=this;
                //Switch statement at jquery.ceylon (1881:2-1891:2)
                var case$33668=eventType$33667;
                if ($$$cl32209.isOfType(eventType$33667,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.unbind(/*NULL PARAM!*/case$33668.valueOf()/*NULL PARAM!*/,false));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(eventType$33667,{ t:'u', l:[{t:$$$cjd33135.Event},{t:JQueryEvent}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.unbind(/*NULL PARAM!*/case$33668));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (1881:2-1891:2)
            };$$jQueryAbs.unbind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjd33135.Event},{t:JQueryEvent}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','unbind']};};
            
            //MethodDefinition unbindCallaback at jquery.ceylon (1894:1-1898:1)
            $$jQueryAbs.unbindCallaback$defs$eventType=function(eventType$33669,callback$33670){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.unbindCallaback$defs$callback=function(eventType$33669,callback$33670){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.unbindCallaback=function unbindCallaback(eventType$33669,callback$33670){
                var $$jQueryAbs=this;
                if(eventType$33669===undefined){eventType$33669=$$jQueryAbs.unbindCallaback$defs$eventType(eventType$33669,callback$33670);}
                if(callback$33670===undefined){callback$33670=$$jQueryAbs.unbindCallaback$defs$callback(eventType$33669,callback$33670);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.unbind(/*NULL PARAM!*/eventType$33669/*NULL PARAM!*/,callback$33670));
                /*End dynamic block*/
            };$$jQueryAbs.unbindCallaback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','unbindCallaback']};};
            
            //MethodDefinition undelegate at jquery.ceylon (1900:1-1904:1)
            $$jQueryAbs.undelegate$defs$namespace=function(namespace$33671){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.undelegate=function undelegate(namespace$33671){
                var $$jQueryAbs=this;
                if(namespace$33671===undefined){namespace$33671=$$jQueryAbs.undelegate$defs$namespace(namespace$33671);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.undelegate(/*NULL PARAM!*/namespace$33671));
                /*End dynamic block*/
            };$$jQueryAbs.undelegate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'namespace',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','undelegate']};};
            
            //MethodDefinition undelegateCallback at jquery.ceylon (1906:1-1910:1)
            $$jQueryAbs.undelegateCallback$defs$callback=function(selector$33672,eventType$33673,callback$33674){var $$jQueryAbs=this;
            return null;};
            $$jQueryAbs.undelegateCallback=function undelegateCallback(selector$33672,eventType$33673,callback$33674){
                var $$jQueryAbs=this;
                if(callback$33674===undefined){callback$33674=$$jQueryAbs.undelegateCallback$defs$callback(selector$33672,eventType$33673,callback$33674);}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.undelegate(/*NULL PARAM!*/selector$33672.valueOf()/*NULL PARAM!*/,eventType$33673.valueOf()/*NULL PARAM!*/,callback$33674));
                /*End dynamic block*/
            };$$jQueryAbs.undelegateCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'eventType',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','undelegateCallback']};};
            
            //MethodDefinition undelegateEvents at jquery.ceylon (1913:1-1917:1)
            $$jQueryAbs.undelegateEvents=function undelegateEvents(selector$33675,events$33676){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.undelegate());
                /*End dynamic block*/
            };$$jQueryAbs.undelegateEvents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'events',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','undelegateEvents']};};
            
            //MethodDefinition unwrap at jquery.ceylon (1919:1-1923:1)
            $$jQueryAbs.unwrap=function unwrap(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.unwrap());
                /*End dynamic block*/
            };$$jQueryAbs.unwrap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','unwrap']};};
            
            //MethodDefinition getVal at jquery.ceylon (1925:1-1937:1)
            $$jQueryAbs.getVal=function getVal(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration val at jquery.ceylon (1927:3-1927:29)
                var val$33677=$$jQueryAbs.$native.val();
                $prop$getVal$33677={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.jquery','JQueryAbs','$m','getVal','$at','val']};}};
                $prop$getVal$33677.get=function(){return val$33677};
                if(val$33677.nstanceof(/*NULL PARAM!*/(typeof String==='undefined'||String===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: String")),'1928:23-1928:28','jquery.ceylon'):String))){
                    return $$$cjl32280.JSString(val$33677);
                }else {
                    if((typeof arrayIsArray==='undefined'||arrayIsArray===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: arrayIsArray")),'1930:14-1930:25','jquery.ceylon'):arrayIsArray)(/*NULL PARAM!*/val$33677)){
                        return $$$cjl32280.JSArray(val$33677);
                    }else {
                        return $$$cjl32280.JSNumber(val$33677);
                    }
                }/*End dynamic block*/
            };$$jQueryAbs.getVal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cjl32280.JSString},{t:$$$cjl32280.JSNumber},{t:$$$cjl32280.JSArray}]},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getVal']};};
            
            //MethodDefinition setVal at jquery.ceylon (1939:1-1943:1)
            $$jQueryAbs.setVal=function setVal(val$33678){
                var $$jQueryAbs=this;
                if(val$33678===undefined){val$33678=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.val(/*NULL PARAM!*/val$33678));
                /*End dynamic block*/
            };$$jQueryAbs.setVal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setVal']};};
            
            //MethodDefinition setValCallback at jquery.ceylon (1945:1-1949:1)
            $$jQueryAbs.setValCallback=function setValCallback(callback$33679){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.val(/*NULL PARAM!*/$$$cl32209.$JsCallable(callback$33679,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.String}})));
                /*End dynamic block*/
            };$$jQueryAbs.setValCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Integer},Element:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setValCallback']};};
            
            //MethodDefinition getWidth at jquery.ceylon (1951:1-1955:1)
            $$jQueryAbs.getWidth=function getWidth(){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$jQueryAbs.$native.width());
                /*End dynamic block*/
            };$$jQueryAbs.getWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getWidth']};};
            
            //MethodDefinition setWidth at jquery.ceylon (1957:1-1961:1)
            $$jQueryAbs.setWidth=function setWidth(width$33680){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.width(/*NULL PARAM!*/width$33680));
                /*End dynamic block*/
            };$$jQueryAbs.setWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'width',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setWidth']};};
            
            //MethodDefinition setWidthCallback at jquery.ceylon (1963:1-1967:1)
            $$jQueryAbs.setWidthCallback=function setWidthCallback(callback$33681){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.width(/*NULL PARAM!*/callback$33681));
                /*End dynamic block*/
            };$$jQueryAbs.setWidthCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},Return:{t:$$$cl32209.Integer}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setWidthCallback']};};
            
            //MethodDefinition wrap at jquery.ceylon (1969:1-1981:1)
            $$jQueryAbs.wrap=function wrap(wrappingElement$33682){
                var $$jQueryAbs=this;
                //Switch statement at jquery.ceylon (1970:2-1980:2)
                var case$33683=wrappingElement$33682;
                if ($$$cl32209.isOfType(wrappingElement$33682,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.wrap(/*NULL PARAM!*/case$33683.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(wrappingElement$33682,{ t:'u', l:[{t:$$$cjd33135.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.wrap(/*NULL PARAM!*/case$33683.$native));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (1970:2-1980:2)
            };$$jQueryAbs.wrap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjd33135.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrap']};};
            
            //MethodDefinition wrapCallback at jquery.ceylon (1983:1-1987:1)
            $$jQueryAbs.wrapCallback=function wrapCallback(callback$33684){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.wrap(/*NULL PARAM!*/callback$33684));
                /*End dynamic block*/
            };$$jQueryAbs.wrapCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},Return:{t:JQuery}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrapCallback']};};
            
            //MethodDefinition wrapAll at jquery.ceylon (1989:1-2001:1)
            $$jQueryAbs.wrapAll=function wrapAll(wrappingElement$33685){
                var $$jQueryAbs=this;
                //Switch statement at jquery.ceylon (1990:2-2000:2)
                var case$33686=wrappingElement$33685;
                if ($$$cl32209.isOfType(wrappingElement$33685,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.wrapAll(/*NULL PARAM!*/case$33686.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(wrappingElement$33685,{ t:'u', l:[{t:$$$cjd33135.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.wrapAll(/*NULL PARAM!*/case$33686.$native));
                    /*End dynamic block*/
                }//End switch statement at jquery.ceylon (1990:2-2000:2)
            };$$jQueryAbs.wrapAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjd33135.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrapAll']};};
            
            //MethodDefinition wrapInner at jquery.ceylon (2003:1-2007:1)
            $$jQueryAbs.wrapInner=function wrapInner(wrappingElement$33687){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.wrapInner(/*NULL PARAM!*/wrappingElement$33687.valueOf()));
                /*End dynamic block*/
            };$$jQueryAbs.wrapInner.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrapInner']};};
            
            //MethodDefinition wrapInnerCallback at jquery.ceylon (2009:1-2013:1)
            $$jQueryAbs.wrapInnerCallback=function wrapInnerCallback(callback$33688){
                var $$jQueryAbs=this;
                /*Begin dynamic block*/
                return JQuery($$jQueryAbs.$native.wrapInner(/*NULL PARAM!*/$$$cl32209.$JsCallable(callback$33688,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},Return:{t:$$$cl32209.String}})));
                /*End dynamic block*/
            };$$jQueryAbs.wrapInnerCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Integer},Element:{t:$$$cl32209.Integer}}},Return:{t:$$$cl32209.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrapInnerCallback']};};
        })(JQueryAbs.$$.prototype);
    }
    return JQueryAbs;
}
exports.$init$JQueryAbs=$init$JQueryAbs;
$init$JQueryAbs();

//ClassDefinition JQuery at jquery.ceylon (2017:0-2022:0)
function JQuery(n$33689, $$jQuery){
    $init$JQuery();
    if ($$jQuery===undefined)$$jQuery=new JQuery.$$;
    $$jQuery.n$33689_=n$33689;
    JQueryAbs($$jQuery);
    
    //AttributeDeclaration native at jquery.ceylon (2018:1-2018:29)
    $$jQuery.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JQuery,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.jquery','JQuery','$at','native']};}};
    /*Begin dynamic block*/
    $$jQuery.$native=$$jQuery.n$33689;/*End dynamic block*/
    return $$jQuery;
}
JQuery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQueryAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQuery']};};
exports.JQuery=JQuery;
function $init$JQuery(){
    if (JQuery.$$===undefined){
        $$$cl32209.initTypeProto(JQuery,'ceylon.js.jquery::JQuery',$init$JQueryAbs());
        (function($$jQuery){
            
            //AttributeDeclaration native at jquery.ceylon (2018:1-2018:29)
            $$$cl32209.defineAttr($$jQuery,'n$33689',function(){return this.n$33689_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JQuery,d:['ceylon.js.jquery','JQuery','$at','n']};});
        })(JQuery.$$.prototype);
    }
    return JQuery;
}
exports.$init$JQuery=$init$JQuery;
$init$JQuery();

//ClassDefinition JSONPOptions at jqueryajaxsettingsbuilder.ceylon (3:0-3:98)
function JSONPOptions(jsonp, jsonpCallback, $$jSONPOptions){
    $init$JSONPOptions();
    if ($$jSONPOptions===undefined)$$jSONPOptions=new JSONPOptions.$$;
    if(jsonp===undefined){jsonp=true;}
    $$jSONPOptions.jsonp_=jsonp;
    if(jsonpCallback===undefined){jsonpCallback=$$$cl32209.String("callback",8);}
    $$jSONPOptions.jsonpCallback_=jsonpCallback;
    return $$jSONPOptions;
}
JSONPOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JSONPOptions']};};
exports.JSONPOptions=JSONPOptions;
function $init$JSONPOptions(){
    if (JSONPOptions.$$===undefined){
        $$$cl32209.initTypeProto(JSONPOptions,'ceylon.js.jquery::JSONPOptions',$$$cl32209.Basic);
        (function($$jSONPOptions){
            $$$cl32209.defineAttr($$jSONPOptions,'jsonp',function(){return this.jsonp_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:JSONPOptions,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JSONPOptions','$at','jsonp']};});
            $$$cl32209.defineAttr($$jSONPOptions,'jsonpCallback',function(){return this.jsonpCallback_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$cont:JSONPOptions,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JSONPOptions','$at','jsonpCallback']};});
        })(JSONPOptions.$$.prototype);
    }
    return JSONPOptions;
}
exports.$init$JSONPOptions=$init$JSONPOptions;
$init$JSONPOptions();

//ClassDefinition JQueryAjaxSettingsBuilder at jqueryajaxsettingsbuilder.ceylon (5:0-142:0)
function JQueryAjaxSettingsBuilder(async, cache, contentType, context, crossDomain, data, dataType, global, ifModified, isLocal, jsonp, jsonpCallback, mimeType, password, processData, scriptCharset, timeout, traditional, type, url, username, $$jQueryAjaxSettingsBuilder){
    $init$JQueryAjaxSettingsBuilder();
    if ($$jQueryAjaxSettingsBuilder===undefined)$$jQueryAjaxSettingsBuilder=new JQueryAjaxSettingsBuilder.$$;
    if(async===undefined){async=true;}
    $$jQueryAjaxSettingsBuilder.async_=async;
    if(cache===undefined){cache=null;}
    $$jQueryAjaxSettingsBuilder.cache_=cache;
    if(contentType===undefined){contentType=$$$cl32209.String("application/x-www-form-urlencoded; charset=UTF-8",48);}
    $$jQueryAjaxSettingsBuilder.contentType_=contentType;
    if(context===undefined){context=null;}
    $$jQueryAjaxSettingsBuilder.context_=context;
    if(crossDomain===undefined){crossDomain=null;}
    $$jQueryAjaxSettingsBuilder.crossDomain_=crossDomain;
    if(data===undefined){data=$$$cl32209.String("",0);}
    $$jQueryAjaxSettingsBuilder.data_=data;
    if(dataType===undefined){dataType=$$$cl32209.getEmpty();}
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
    if(type===undefined){type=$$$cl32209.String("GET",3);}
    $$jQueryAjaxSettingsBuilder.type_=type;
    if(url===undefined){url=null;}
    $$jQueryAjaxSettingsBuilder.url_=url;
    if(username===undefined){username=null;}
    $$jQueryAjaxSettingsBuilder.username_=username;
    
    //AttributeDeclaration beforeSend at jqueryajaxsettingsbuilder.ceylon (18:1-18:63)
    $$jQueryAjaxSettingsBuilder.beforeSend$33820_=null;
    $$jQueryAjaxSettingsBuilder.$prop$getBeforeSend={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Boolean}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','beforeSend']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getBeforeSend.get=function(){return beforeSend};
    
    //AttributeDeclaration dataFilter at jqueryajaxsettingsbuilder.ceylon (19:1-19:60)
    $$jQueryAjaxSettingsBuilder.dataFilter$33821_=null;
    $$jQueryAjaxSettingsBuilder.$prop$getDataFilter={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},Return:{t:$$$cl32209.Anything}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataFilter']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getDataFilter.get=function(){return dataFilter};
    
    //AttributeDeclaration xhr at jqueryajaxsettingsbuilder.ceylon (20:1-20:39)
    $$jQueryAjaxSettingsBuilder.xhr$33822_=null;
    $$jQueryAjaxSettingsBuilder.$prop$getXhr={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhr']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getXhr.get=function(){return xhr};
    
    //AttributeDeclaration complete at jqueryajaxsettingsbuilder.ceylon (23:1-23:59)
    $$jQueryAjaxSettingsBuilder.complete$33823_=$$$cl32209.getEmpty();
    $$jQueryAjaxSettingsBuilder.$prop$getComplete={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','complete']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getComplete.get=function(){return complete};
    
    //AttributeDeclaration error at jqueryajaxsettingsbuilder.ceylon (25:1-25:66)
    $$jQueryAjaxSettingsBuilder.error$33824_=$$$cl32209.getEmpty();
    $$jQueryAjaxSettingsBuilder.$prop$getError={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','error']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getError.get=function(){return error};
    
    //AttributeDeclaration success at jqueryajaxsettingsbuilder.ceylon (27:1-27:68)
    $$jQueryAjaxSettingsBuilder.success$33825_=$$$cl32209.getEmpty();
    $$jQueryAjaxSettingsBuilder.$prop$getSuccess={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','success']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getSuccess.get=function(){return success};
    
    //AttributeDeclaration accepts at jqueryajaxsettingsbuilder.ceylon (29:1-29:53)
    $$jQueryAjaxSettingsBuilder.accepts$33826_=$$$cl32209.getEmpty();
    $$jQueryAjaxSettingsBuilder.$prop$getAccepts={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','accepts']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getAccepts.get=function(){return accepts};
    
    //AttributeDeclaration contents at jqueryajaxsettingsbuilder.ceylon (31:1-31:54)
    $$jQueryAjaxSettingsBuilder.contents$33827_=$$$cl32209.getEmpty();
    $$jQueryAjaxSettingsBuilder.$prop$getContents={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cjl32280.RegExp}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contents']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getContents.get=function(){return contents};
    
    //AttributeDeclaration headers at jqueryajaxsettingsbuilder.ceylon (32:1-32:53)
    $$jQueryAjaxSettingsBuilder.headers$33828_=$$$cl32209.getEmpty();
    $$jQueryAjaxSettingsBuilder.$prop$getHeaders={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','headers']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getHeaders.get=function(){return headers};
    
    //AttributeDeclaration converters at jqueryajaxsettingsbuilder.ceylon (34:1-34:58)
    $$jQueryAjaxSettingsBuilder.converters$33829_=$$$cl32209.getEmpty();
    $$jQueryAjaxSettingsBuilder.$prop$getConverters={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cjl32280.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','converters']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getConverters.get=function(){return converters};
    
    //AttributeDeclaration xhrFields at jqueryajaxsettingsbuilder.ceylon (35:1-35:57)
    $$jQueryAjaxSettingsBuilder.xhrFields$33830_=$$$cl32209.getEmpty();
    $$jQueryAjaxSettingsBuilder.$prop$getXhrFields={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cjl32280.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhrFields']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getXhrFields.get=function(){return xhrFields};
    
    //AttributeDeclaration statusCode at jqueryajaxsettingsbuilder.ceylon (38:1-38:124)
    $$jQueryAjaxSettingsBuilder.statusCode$33831_=$$$cl32209.getEmpty();
    $$jQueryAjaxSettingsBuilder.$prop$getStatusCode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.Integer},Item:{ t:'u', l:[{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','statusCode']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getStatusCode.get=function(){return statusCode};
    return $$jQueryAjaxSettingsBuilder;
}
JQueryAjaxSettingsBuilder.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder']};};
exports.JQueryAjaxSettingsBuilder=JQueryAjaxSettingsBuilder;
function $init$JQueryAjaxSettingsBuilder(){
    if (JQueryAjaxSettingsBuilder.$$===undefined){
        $$$cl32209.initTypeProto(JQueryAjaxSettingsBuilder,'ceylon.js.jquery::JQueryAjaxSettingsBuilder',$$$cl32209.Basic);
        (function($$jQueryAjaxSettingsBuilder){
            
            //AttributeDeclaration beforeSend at jqueryajaxsettingsbuilder.ceylon (18:1-18:63)
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'beforeSend',function(){return this.beforeSend$33820_;},function(beforeSend$33832){return this.beforeSend$33820_=beforeSend$33832;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Boolean}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','beforeSend']};});
            
            //AttributeDeclaration dataFilter at jqueryajaxsettingsbuilder.ceylon (19:1-19:60)
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'dataFilter',function(){return this.dataFilter$33821_;},function(dataFilter$33833){return this.dataFilter$33821_=dataFilter$33833;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},Return:{t:$$$cl32209.Anything}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataFilter']};});
            
            //AttributeDeclaration xhr at jqueryajaxsettingsbuilder.ceylon (20:1-20:39)
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'xhr',function(){return this.xhr$33822_;},function(xhr$33834){return this.xhr$33822_=xhr$33834;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhr']};});
            
            //AttributeDeclaration complete at jqueryajaxsettingsbuilder.ceylon (23:1-23:59)
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'complete',function(){return this.complete$33823_;},function(complete$33835){return this.complete$33823_=complete$33835;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','complete']};});
            
            //AttributeDeclaration error at jqueryajaxsettingsbuilder.ceylon (25:1-25:66)
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'error',function(){return this.error$33824_;},function(error$33836){return this.error$33824_=error$33836;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','error']};});
            
            //AttributeDeclaration success at jqueryajaxsettingsbuilder.ceylon (27:1-27:68)
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'success',function(){return this.success$33825_;},function(success$33837){return this.success$33825_=success$33837;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','success']};});
            
            //AttributeDeclaration accepts at jqueryajaxsettingsbuilder.ceylon (29:1-29:53)
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'accepts',function(){return this.accepts$33826_;},function(accepts$33838){return this.accepts$33826_=accepts$33838;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','accepts']};});
            
            //AttributeDeclaration contents at jqueryajaxsettingsbuilder.ceylon (31:1-31:54)
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'contents',function(){return this.contents$33827_;},function(contents$33839){return this.contents$33827_=contents$33839;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cjl32280.RegExp}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contents']};});
            
            //AttributeDeclaration headers at jqueryajaxsettingsbuilder.ceylon (32:1-32:53)
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'headers',function(){return this.headers$33828_;},function(headers$33840){return this.headers$33828_=headers$33840;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','headers']};});
            
            //AttributeDeclaration converters at jqueryajaxsettingsbuilder.ceylon (34:1-34:58)
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'converters',function(){return this.converters$33829_;},function(converters$33841){return this.converters$33829_=converters$33841;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cjl32280.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','converters']};});
            
            //AttributeDeclaration xhrFields at jqueryajaxsettingsbuilder.ceylon (35:1-35:57)
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'xhrFields',function(){return this.xhrFields$33830_;},function(xhrFields$33842){return this.xhrFields$33830_=xhrFields$33842;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cjl32280.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhrFields']};});
            
            //AttributeDeclaration statusCode at jqueryajaxsettingsbuilder.ceylon (38:1-38:124)
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'statusCode',function(){return this.statusCode$33831_;},function(statusCode$33843){return this.statusCode$33831_=statusCode$33843;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.Integer},Item:{ t:'u', l:[{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared(),$$$cl32209.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','statusCode']};});
            
            //MethodDefinition toNative at jqueryajaxsettingsbuilder.ceylon (40:1-141:1)
            $$jQueryAjaxSettingsBuilder.toNative=function toNative(){
                var $$jQueryAjaxSettingsBuilder=this;
                
                //AttributeDeclaration settings at jqueryajaxsettingsbuilder.ceylon (41:2-41:29)
                var settings$33844;
                /*Begin dynamic block*/
                settings$33844=JQueryAjaxSettings((typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'43:33-43:38','jqueryajaxsettingsbuilder.ceylon'):Object));/*End dynamic block*/
                
                //AttributeDeclaration acceptsNative at jqueryajaxsettingsbuilder.ceylon (45:2-45:43)
                var acceptsNative$33845;
                /*Begin dynamic block*/
                acceptsNative$33845=$$$cl32209.Comprehension(function(){
                    //Comprehension at jqueryajaxsettingsbuilder.ceylon (47:20-47:114)
                    var it$33846=$$jQueryAjaxSettingsBuilder.accepts.iterator();
                    var key$33847,val$33848;
                    var next$val$33848=function(){
                        var entry$33849;
                        if((entry$33849=it$33846.next())!==$$$cl32209.getFinished()){
                            key$33847=entry$33849.key;
                            val$33848=entry$33849.item;
                            return entry$33849;
                        }
                        val$33848=undefined;
                        return $$$cl32209.getFinished();
                    }
                    next$val$33848();
                    return function(){
                        if(val$33848!==undefined){
                            var key$33847$33850=key$33847;
                            var val$33848$33851=val$33848;
                            var tmpvar$33852=$$$cl32209.Entry((tmpvar$33853=$$$cjl32280.createJSString(key$33847$33850),$$$cl32209.isOfType(tmpvar$33853,{/*NO PARENT*/t:$$$cl32209.Anything})?tmpvar$33853:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'47:74-47:92','jqueryajaxsettingsbuilder.ceylon')),(tmpvar$33854=$$$cjl32280.createJSString(val$33848$33851),$$$cl32209.isOfType(tmpvar$33854,{/*NO PARENT*/t:$$$cl32209.Anything})?tmpvar$33854:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'47:95-47:113','jqueryajaxsettingsbuilder.ceylon')),{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSString}});
                            next$val$33848();
                            return tmpvar$33852;
                        }
                        return $$$cl32209.getFinished();
                    }
                },{Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSString}}}}).sequence;/*End dynamic block*/
                settings$33844.setAccepts(acceptsNative$33845);
                settings$33844.setAsync($$jQueryAjaxSettingsBuilder.async);
                var bS$33855;
                if((bS$33855=$$jQueryAjaxSettingsBuilder.beforeSend)!==null){
                    settings$33844.setBeforeSend($$$cl32209.$JsCallable(bS$33855,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Boolean}}));
                }
                var c$33856;
                if((c$33856=$$jQueryAjaxSettingsBuilder.cache)!==null){
                    settings$33844.setCache(c$33856);
                }
                settings$33844.setComplete($$jQueryAjaxSettingsBuilder.complete);
                
                //AttributeDeclaration contentsNative at jqueryajaxsettingsbuilder.ceylon (58:2-58:42)
                var contentsNative$33857;
                /*Begin dynamic block*/
                contentsNative$33857=$$$cl32209.Comprehension(function(){
                    //Comprehension at jqueryajaxsettingsbuilder.ceylon (60:21-60:98)
                    var it$33858=$$jQueryAjaxSettingsBuilder.contents.iterator();
                    var key$33859,val$33860;
                    var next$val$33860=function(){
                        var entry$33861;
                        if((entry$33861=it$33858.next())!==$$$cl32209.getFinished()){
                            key$33859=entry$33861.key;
                            val$33860=entry$33861.item;
                            return entry$33861;
                        }
                        val$33860=undefined;
                        return $$$cl32209.getFinished();
                    }
                    next$val$33860();
                    return function(){
                        if(val$33860!==undefined){
                            var key$33859$33862=key$33859;
                            var val$33860$33863=val$33860;
                            var tmpvar$33864=$$$cl32209.Entry((tmpvar$33865=$$$cjl32280.createJSString(key$33859$33862),$$$cl32209.isOfType(tmpvar$33865,{/*NO PARENT*/t:$$$cl32209.Anything})?tmpvar$33865:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'60:74-60:92','jqueryajaxsettingsbuilder.ceylon')),val$33860$33863,{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.RegExp}});
                            next$val$33860();
                            return tmpvar$33864;
                        }
                        return $$$cl32209.getFinished();
                    }
                },{Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.RegExp}}}}).sequence;/*End dynamic block*/
                settings$33844.setContents(contentsNative$33857);
                settings$33844.setContentType($$jQueryAjaxSettingsBuilder.contentType);
                var c$33866;
                if((c$33866=$$jQueryAjaxSettingsBuilder.context)!==null){
                    settings$33844.setContext(c$33866);
                }
                
                //AttributeDeclaration convertersNative at jqueryajaxsettingsbuilder.ceylon (67:2-67:46)
                var convertersNative$33867;
                /*Begin dynamic block*/
                convertersNative$33867=$$$cl32209.Comprehension(function(){
                    //Comprehension at jqueryajaxsettingsbuilder.ceylon (69:23-69:104)
                    var it$33868=$$jQueryAjaxSettingsBuilder.converters.iterator();
                    var key$33869,val$33870;
                    var next$val$33870=function(){
                        var entry$33871;
                        if((entry$33871=it$33868.next())!==$$$cl32209.getFinished()){
                            key$33869=entry$33871.key;
                            val$33870=entry$33871.item;
                            return entry$33871;
                        }
                        val$33870=undefined;
                        return $$$cl32209.getFinished();
                    }
                    next$val$33870();
                    return function(){
                        if(val$33870!==undefined){
                            var key$33869$33872=key$33869;
                            var val$33870$33873=val$33870;
                            var tmpvar$33874=$$$cl32209.Entry((tmpvar$33875=$$$cjl32280.createJSString(key$33869$33872),$$$cl32209.isOfType(tmpvar$33875,{/*NO PARENT*/t:$$$cl32209.Anything})?tmpvar$33875:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'69:80-69:98','jqueryajaxsettingsbuilder.ceylon')),val$33870$33873,{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSObject}});
                            next$val$33870();
                            return tmpvar$33874;
                        }
                        return $$$cl32209.getFinished();
                    }
                },{Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSObject}}}}).sequence;/*End dynamic block*/
                settings$33844.setConverters(convertersNative$33867);
                var cD$33876;
                if((cD$33876=$$jQueryAjaxSettingsBuilder.crossDomain)!==null){
                    settings$33844.setCrossDomain(cD$33876);
                }
                settings$33844.setData($$jQueryAjaxSettingsBuilder.data);
                var dF$33877;
                if((dF$33877=$$jQueryAjaxSettingsBuilder.dataFilter)!==null){
                    settings$33844.setDataFilter($$$cl32209.$JsCallable(dF$33877,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},Return:{t:$$$cl32209.Anything}}));
                }
                
                //AttributeDeclaration dataTypeS at jqueryajaxsettingsbuilder.ceylon (79:2-79:32)
                var dataTypeS$33878=$$$cl32209.String("",0);
                function setDataTypeS$33878(dataTypeS$33879){return dataTypeS$33878=dataTypeS$33879;};
                //'for' statement at jqueryajaxsettingsbuilder.ceylon (80:2-82:2)
                var it$33880 = $$jQueryAjaxSettingsBuilder.dataType.iterator();
                var dT$33881;while ((dT$33881=it$33880.next())!==$$$cl32209.getFinished()){
                    (dataTypeS$33878=dataTypeS$33878.plus($$$cl32209.String(" ",1).plus(dT$33881.string)));
                }
                settings$33844.setDataType(dataTypeS$33878);
                settings$33844.setError($$jQueryAjaxSettingsBuilder.error);
                settings$33844.setGlobal($$jQueryAjaxSettingsBuilder.global);
                
                //AttributeDeclaration headersNative at jqueryajaxsettingsbuilder.ceylon (86:2-86:43)
                var headersNative$33882;
                /*Begin dynamic block*/
                headersNative$33882=$$$cl32209.Comprehension(function(){
                    //Comprehension at jqueryajaxsettingsbuilder.ceylon (88:20-88:114)
                    var it$33883=$$jQueryAjaxSettingsBuilder.headers.iterator();
                    var key$33884,val$33885;
                    var next$val$33885=function(){
                        var entry$33886;
                        if((entry$33886=it$33883.next())!==$$$cl32209.getFinished()){
                            key$33884=entry$33886.key;
                            val$33885=entry$33886.item;
                            return entry$33886;
                        }
                        val$33885=undefined;
                        return $$$cl32209.getFinished();
                    }
                    next$val$33885();
                    return function(){
                        if(val$33885!==undefined){
                            var key$33884$33887=key$33884;
                            var val$33885$33888=val$33885;
                            var tmpvar$33889=$$$cl32209.Entry((tmpvar$33890=$$$cjl32280.createJSString(key$33884$33887),$$$cl32209.isOfType(tmpvar$33890,{/*NO PARENT*/t:$$$cl32209.Anything})?tmpvar$33890:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'88:74-88:92','jqueryajaxsettingsbuilder.ceylon')),(tmpvar$33891=$$$cjl32280.createJSString(val$33885$33888),$$$cl32209.isOfType(tmpvar$33891,{/*NO PARENT*/t:$$$cl32209.Anything})?tmpvar$33891:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'88:95-88:113','jqueryajaxsettingsbuilder.ceylon')),{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSString}});
                            next$val$33885();
                            return tmpvar$33889;
                        }
                        return $$$cl32209.getFinished();
                    }
                },{Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSString}}}}).sequence;/*End dynamic block*/
                settings$33844.setHeaders(headersNative$33882);
                settings$33844.setIfModified($$jQueryAjaxSettingsBuilder.ifModified);
                var iL$33892;
                if((iL$33892=$$jQueryAjaxSettingsBuilder.isLocal)!==null){
                    settings$33844.setIsLocal(iL$33892);
                }
                
                //AttributeDeclaration settingsNative at jqueryajaxsettingsbuilder.ceylon (95:2-95:87)
                var settingsNative$33893=createJSONPSettings($$jQueryAjaxSettingsBuilder.jsonp.jsonp,$$jQueryAjaxSettingsBuilder.jsonp.jsonpCallback);
                var sN$33894;
                if((sN$33894=settingsNative$33893)!==null){
                    settings$33844.setJsonp(sN$33894);
                }
                var jC$33895;
                if((jC$33895=$$jQueryAjaxSettingsBuilder.jsonpCallback)!==null){
                    settings$33844.setJsonpCallback(jC$33895);
                }
                var mT$33896;
                if((mT$33896=$$jQueryAjaxSettingsBuilder.mimeType)!==null){
                    settings$33844.setMimeType(mT$33896);
                }
                var p$33897;
                if((p$33897=$$jQueryAjaxSettingsBuilder.password)!==null){
                    settings$33844.setPassword(p$33897);
                }
                settings$33844.setProcessData($$jQueryAjaxSettingsBuilder.processData);
                var sC$33898;
                if((sC$33898=$$jQueryAjaxSettingsBuilder.scriptCharset)!==null){
                    settings$33844.setScriptCharset(sC$33898);
                }
                
                //AttributeDeclaration statusCodeNative at jqueryajaxsettingsbuilder.ceylon (112:2-112:108)
                var statusCodeNative$33899;
                /*Begin dynamic block*/
                statusCodeNative$33899=$$$cl32209.Comprehension(function(){
                    //Comprehension at jqueryajaxsettingsbuilder.ceylon (114:23-114:169)
                    var it$33900=$$jQueryAjaxSettingsBuilder.statusCode.iterator();
                    var key$33901,val$33902;
                    var next$val$33902=function(){
                        var entry$33903;
                        if((entry$33903=it$33900.next())!==$$$cl32209.getFinished()){
                            key$33901=entry$33903.key;
                            val$33902=entry$33903.item;
                            return entry$33903;
                        }
                        val$33902=undefined;
                        return $$$cl32209.getFinished();
                    }
                    next$val$33902();
                    return function(){
                        if(val$33902!==undefined){
                            var key$33901$33904=key$33901;
                            var val$33902$33905=val$33902;
                            var tmpvar$33906=$$$cl32209.Entry((tmpvar$33907=$$$cjl32280.createJSString(key$33901$33904),$$$cl32209.isOfType(tmpvar$33907,{/*NO PARENT*/t:$$$cl32209.Anything})?tmpvar$33907:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'114:145-114:163','jqueryajaxsettingsbuilder.ceylon')),$$$cl32209.$JsCallable(val$33902$33905,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}),{Key:{t:$$$cjl32280.JSNumber},Item:{ t:'u', l:[{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]}});
                            next$val$33902();
                            return tmpvar$33906;
                        }
                        return $$$cl32209.getFinished();
                    }
                },{Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSNumber},Item:{ t:'u', l:[{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]}}}}).sequence;/*End dynamic block*/
                settings$33844.setStatusCode(statusCodeNative$33899);
                settings$33844.setSuccess($$jQueryAjaxSettingsBuilder.success);
                var t$33908;
                if((t$33908=$$jQueryAjaxSettingsBuilder.timeout)!==null){
                    settings$33844.setTimeout(t$33908);
                }
                settings$33844.setTraditional($$jQueryAjaxSettingsBuilder.traditional);
                settings$33844.setType($$jQueryAjaxSettingsBuilder.type);
                settings$33844.setTraditional($$jQueryAjaxSettingsBuilder.traditional);
                settings$33844.setType($$jQueryAjaxSettingsBuilder.type);
                var u$33909;
                if((u$33909=$$jQueryAjaxSettingsBuilder.url)!==null){
                    settings$33844.setUrl(u$33909);
                }
                var user$33910;
                if((user$33910=$$jQueryAjaxSettingsBuilder.username)!==null){
                    settings$33844.setUsername(user$33910);
                }
                var x$33911;
                if((x$33911=$$jQueryAjaxSettingsBuilder.xhr)!==null){
                    settings$33844.setXhr($$$cl32209.$JsCallable(x$33911,[],{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}));
                }
                
                //AttributeDeclaration xhrFieldsNative at jqueryajaxsettingsbuilder.ceylon (134:2-134:45)
                var xhrFieldsNative$33912;
                /*Begin dynamic block*/
                xhrFieldsNative$33912=$$$cl32209.Comprehension(function(){
                    //Comprehension at jqueryajaxsettingsbuilder.ceylon (136:22-136:118)
                    var it$33913=$$jQueryAjaxSettingsBuilder.xhrFields.iterator();
                    var key$33914,val$33915;
                    var next$val$33915=function(){
                        var entry$33916;
                        if((entry$33916=it$33913.next())!==$$$cl32209.getFinished()){
                            key$33914=entry$33916.key;
                            val$33915=entry$33916.item;
                            return entry$33916;
                        }
                        val$33915=undefined;
                        return $$$cl32209.getFinished();
                    }
                    next$val$33915();
                    return function(){
                        if(val$33915!==undefined){
                            var key$33914$33917=key$33914;
                            var val$33915$33918=val$33915;
                            var tmpvar$33919=$$$cl32209.Entry((tmpvar$33920=$$$cjl32280.createJSString(key$33914$33917),$$$cl32209.isOfType(tmpvar$33920,{/*NO PARENT*/t:$$$cl32209.Anything})?tmpvar$33920:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'136:78-136:96','jqueryajaxsettingsbuilder.ceylon')),(tmpvar$33921=$$$cjl32280.createJSString(val$33915$33918),$$$cl32209.isOfType(tmpvar$33921,{/*NO PARENT*/t:$$$cl32209.Anything})?tmpvar$33921:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'136:99-136:117','jqueryajaxsettingsbuilder.ceylon')),{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSObject}});
                            next$val$33915();
                            return tmpvar$33919;
                        }
                        return $$$cl32209.getFinished();
                    }
                },{Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSObject}}}}).sequence;/*End dynamic block*/
                settings$33844.setXhrFields(xhrFieldsNative$33912);
                return settings$33844;
            };$$jQueryAjaxSettingsBuilder.toNative.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQueryAjaxSettings},$ps:[],$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$m','toNative']};};
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'async',function(){return this.async_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','async']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'cache',function(){return this.cache_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','cache']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'contentType',function(){return this.contentType_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contentType']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'context',function(){return this.context_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSObject}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','context']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'crossDomain',function(){return this.crossDomain_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','crossDomain']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'data',function(){return this.data_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSObject}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','data']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'dataType',function(){return this.dataType_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:DataType}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataType']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'global',function(){return this.global_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','global']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'ifModified',function(){return this.ifModified_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','ifModified']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'isLocal',function(){return this.isLocal_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','isLocal']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'jsonp',function(){return this.jsonp_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:JSONPOptions},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','jsonp']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'jsonpCallback',function(){return this.jsonpCallback_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.String}}}]}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','jsonpCallback']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'mimeType',function(){return this.mimeType_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','mimeType']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'password',function(){return this.password_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','password']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'processData',function(){return this.processData_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','processData']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'scriptCharset',function(){return this.scriptCharset_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','scriptCharset']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'timeout',function(){return this.timeout_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','timeout']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'traditional',function(){return this.traditional_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','traditional']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'type',function(){return this.type_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','type']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'url',function(){return this.url_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','url']};});
            $$$cl32209.defineAttr($$jQueryAjaxSettingsBuilder,'username',function(){return this.username_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','username']};});
        })(JQueryAjaxSettingsBuilder.$$.prototype);
    }
    return JQueryAjaxSettingsBuilder;
}
exports.$init$JQueryAjaxSettingsBuilder=$init$JQueryAjaxSettingsBuilder;
$init$JQueryAjaxSettingsBuilder();
var $$$cjx33922=require('ceylon/js/xmlhttprequest/0.6.0/ceylon.js.xmlhttprequest-0.6.0');
$$$cl32209.$addmod$($$$cjx33922,'ceylon.js.xmlhttprequest/0.6.0');

//ClassDefinition JQXHRAbs at jqxhr.ceylon (5:0-165:0)
function JQXHRAbs($$jQXHRAbs){
    $init$JQXHRAbs();
    if ($$jQXHRAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$jQXHRAbs);
    return $$jQXHRAbs;
}
JQXHRAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.jquery','JQXHRAbs']};};
exports.JQXHRAbs=JQXHRAbs;
function $init$JQXHRAbs(){
    if (JQXHRAbs.$$===undefined){
        $$$cl32209.initTypeProto(JQXHRAbs,'ceylon.js.jquery::JQXHRAbs',$$$cjl32280.JSObjectAbs);
        (function($$jQXHRAbs){
            
            //MethodDefinition done at jqxhr.ceylon (8:1-12:1)
            $$jQXHRAbs.done=function done(done$33923){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                return JQXHR($$jQXHRAbs.$native.done(/*NULL PARAM!*/done$33923));
                /*End dynamic block*/
            };$$jQXHRAbs.done.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'done',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','done']};};
            
            //MethodDefinition fail at jqxhr.ceylon (15:1-19:1)
            $$jQXHRAbs.fail=function fail(fail$33924){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                return JQXHR($$jQXHRAbs.$native.fail(/*NULL PARAM!*/fail$33924));
                /*End dynamic block*/
            };$$jQXHRAbs.fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'fail',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','fail']};};
            
            //MethodDefinition always at jqxhr.ceylon (22:1-26:1)
            $$jQXHRAbs.always=function always(always$33925){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                return JQXHR($$jQXHRAbs.$native.always(/*NULL PARAM!*/always$33925));
                /*End dynamic block*/
            };$$jQXHRAbs.always.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'always',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','always']};};
            
            //MethodDefinition doThen at jqxhr.ceylon (29:1-33:1)
            $$jQXHRAbs.doThen=function doThen(done$33926,fail$33927){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                return JQXHR($$jQXHRAbs.$native.then(/*NULL PARAM!*/done$33926/*NULL PARAM!*/,fail$33927));
                /*End dynamic block*/
            };$$jQXHRAbs.doThen.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'done',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'fail',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','doThen']};};
            
            //MethodDefinition overrideMimeType at jqxhr.ceylon (35:1-47:1)
            $$jQXHRAbs.overrideMimeType=function overrideMimeType(mime$33928){
                var $$jQXHRAbs=this;
                //Switch statement at jqxhr.ceylon (36:2-46:2)
                var case$33929=mime$33928;
                if ($$$cl32209.isOfType(mime$33928,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$jQXHRAbs.$native.overrideMimeType(/*NULL PARAM!*/case$33929.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(mime$33928,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$jQXHRAbs.$native.overrideMimeType(/*NULL PARAM!*/case$33929.$native);
                    /*End dynamic block*/
                }//End switch statement at jqxhr.ceylon (36:2-46:2)
            };$$jQXHRAbs.overrideMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'mime',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','overrideMimeType']};};
            
            //MethodDefinition readyState at jqxhr.ceylon (49:1-64:1)
            $$jQXHRAbs.readyState=function readyState(){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration readyState at jqxhr.ceylon (51:3-51:41)
                var readyState$33930=$$jQXHRAbs.$native.readyState;
                $prop$getReadyState$33930={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.jquery','JQXHRAbs','$m','readyState','$at','readyState']};}};
                $prop$getReadyState$33930.get=function(){return readyState$33930};
                if((tmpvar$33931=readyState$33930,tmpvar$33932=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: XMLHttpRequest")),'52:21-52:34','jqxhr.ceylon'):XMLHttpRequest).UNSENT,(tmpvar$33931.equals&&tmpvar$33931.equals(tmpvar$33932))||tmpvar$33931===tmpvar$33932)){
                    return $$$cjx33922.getReadyStateUnsent();
                }else {
                    if((tmpvar$33933=readyState$33930,tmpvar$33934=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: XMLHttpRequest")),'54:28-54:41','jqxhr.ceylon'):XMLHttpRequest).OPENED,(tmpvar$33933.equals&&tmpvar$33933.equals(tmpvar$33934))||tmpvar$33933===tmpvar$33934)){
                        return $$$cjx33922.getReadyStateOpened();
                    }else {
                        if((tmpvar$33935=readyState$33930,tmpvar$33936=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: XMLHttpRequest")),'56:28-56:41','jqxhr.ceylon'):XMLHttpRequest).HEADERS_RECEIVED,(tmpvar$33935.equals&&tmpvar$33935.equals(tmpvar$33936))||tmpvar$33935===tmpvar$33936)){
                            return $$$cjx33922.getReadyStateHeadersReceived();
                        }else {
                            if((tmpvar$33937=readyState$33930,tmpvar$33938=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: XMLHttpRequest")),'58:28-58:41','jqxhr.ceylon'):XMLHttpRequest).LOADING,(tmpvar$33937.equals&&tmpvar$33937.equals(tmpvar$33938))||tmpvar$33937===tmpvar$33938)){
                                return $$$cjx33922.getReadyStateLoading();
                            }else {
                                return (tmpvar$33939=(typeof readyStateDone==='undefined'||readyStateDone===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: readyStateDone")),'61:11-61:24','jqxhr.ceylon'):readyStateDone),$$$cl32209.isOfType(tmpvar$33939,{t:$$$cl32209.Anything})?tmpvar$33939:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'61:11-61:24','jqxhr.ceylon'));
                            }
                        }
                    }
                }/*End dynamic block*/
            };$$jQXHRAbs.readyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjx33922.ReadyState},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','readyState']};};
            
            //MethodDefinition status at jqxhr.ceylon (66:1-70:1)
            $$jQXHRAbs.status=function status(){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$jQXHRAbs.$native.status);
                /*End dynamic block*/
            };$$jQXHRAbs.status.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','status']};};
            
            //MethodDefinition statusText at jqxhr.ceylon (72:1-76:1)
            $$jQXHRAbs.statusText=function statusText(){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$jQXHRAbs.$native.statusText);
                /*End dynamic block*/
            };$$jQXHRAbs.statusText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','statusText']};};
            
            //MethodDefinition responseText at jqxhr.ceylon (78:1-82:1)
            $$jQXHRAbs.responseText=function responseText(){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$jQXHRAbs.$native.responseText);
                /*End dynamic block*/
            };$$jQXHRAbs.responseText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','responseText']};};
            
            //MethodDefinition responseXML at jqxhr.ceylon (84:1-93:1)
            $$jQXHRAbs.responseXML=function responseXML(){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration responseXML at jqxhr.ceylon (86:3-86:43)
                var responseXML$33940=$$jQXHRAbs.$native.responseXML;
                $prop$getResponseXML$33940={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.jquery','JQXHRAbs','$m','responseXML','$at','responseXML']};}};
                $prop$getResponseXML$33940.get=function(){return responseXML$33940};
                if((tmpvar$33941=responseXML$33940,tmpvar$33942=null,(tmpvar$33941.equals&&!tmpvar$33941.equals(tmpvar$33942))||tmpvar$33941!==tmpvar$33942)){
                    return $$$cjd33135.Document(responseXML$33940);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQXHRAbs.responseXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjd33135.Document}]},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','responseXML']};};
            
            //MethodDefinition setRequestHeader at jqxhr.ceylon (95:1-123:1)
            $$jQXHRAbs.setRequestHeader=function setRequestHeader(header$33943,val$33944){
                var $$jQXHRAbs=this;
                //Switch statement at jqxhr.ceylon (96:2-122:2)
                var case$33945=header$33943;
                if ($$$cl32209.isOfType(header$33943,{t:$$$cl32209.String})) {
                    //Switch statement at jqxhr.ceylon (98:3-108:3)
                    var case$33946=val$33944;
                    if ($$$cl32209.isOfType(val$33944,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        $$jQXHRAbs.$native.setRequestHeader(/*NULL PARAM!*/case$33945.valueOf()/*NULL PARAM!*/,case$33946.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(val$33944,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        $$jQXHRAbs.$native.setRequestHeader(/*NULL PARAM!*/case$33945.valueOf()/*NULL PARAM!*/,case$33946.$native);
                        /*End dynamic block*/
                    }//End switch statement at jqxhr.ceylon (98:3-108:3)
                }else if ($$$cl32209.isOfType(header$33943,{t:$$$cjl32280.JSString})) {
                    //Switch statement at jqxhr.ceylon (111:3-121:3)
                    var case$33947=val$33944;
                    if ($$$cl32209.isOfType(val$33944,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        $$jQXHRAbs.$native.setRequestHeader(/*NULL PARAM!*/case$33945.$native/*NULL PARAM!*/,case$33947.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(val$33944,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        $$jQXHRAbs.$native.setRequestHeader(/*NULL PARAM!*/case$33945.$native/*NULL PARAM!*/,case$33947.$native);
                        /*End dynamic block*/
                    }//End switch statement at jqxhr.ceylon (111:3-121:3)
                }//End switch statement at jqxhr.ceylon (96:2-122:2)
            };$$jQXHRAbs.setRequestHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'header',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','setRequestHeader']};};
            
            //MethodDefinition getAllResponseHeaders at jqxhr.ceylon (125:1-134:1)
            $$jQXHRAbs.getAllResponseHeaders=function getAllResponseHeaders(){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration rheaders at jqxhr.ceylon (127:3-127:52)
                var rheaders$33948=$$jQXHRAbs.$native.getAllResponseHeaders();
                $prop$getRheaders$33948={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.jquery','JQXHRAbs','$m','getAllResponseHeaders','$at','rheaders']};}};
                $prop$getRheaders$33948.get=function(){return rheaders$33948};
                if((tmpvar$33949=rheaders$33948,tmpvar$33950=null,(tmpvar$33949.equals&&!tmpvar$33949.equals(tmpvar$33950))||tmpvar$33949!==tmpvar$33950)){
                    return $$$cjl32280.JSString(rheaders$33948);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQXHRAbs.getAllResponseHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','getAllResponseHeaders']};};
            
            //MethodDefinition getResponseHeader at jqxhr.ceylon (136:1-152:1)
            $$jQXHRAbs.getResponseHeader=function getResponseHeader(header$33951){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration rheader at jqxhr.ceylon (138:3-138:18)
                var rheader$33952;
                $prop$getRheader$33952={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.jquery','JQXHRAbs','$m','getResponseHeader','$at','rheader']};}};
                $prop$getRheader$33952.get=function(){return rheader$33952};
                //Switch statement at jqxhr.ceylon (139:3-145:3)
                var case$33953=header$33951;
                if ($$$cl32209.isOfType(header$33951,{t:$$$cl32209.String})) {
                    rheader$33952=$$jQXHRAbs.$native.getResponseHeader(/*NULL PARAM!*/case$33953.valueOf());
                }else if ($$$cl32209.isOfType(header$33951,{t:$$$cjl32280.JSString})) {
                    rheader$33952=$$jQXHRAbs.$native.getResponseHeader(/*NULL PARAM!*/case$33953.$native);
                }//End switch statement at jqxhr.ceylon (139:3-145:3)
                if((tmpvar$33954=rheader$33952,tmpvar$33955=null,(tmpvar$33954.equals&&!tmpvar$33954.equals(tmpvar$33955))||tmpvar$33954!==tmpvar$33955)){
                    return $$$cjl32280.JSString(rheader$33952);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQXHRAbs.getResponseHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[{$nm:'header',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','getResponseHeader']};};
            
            //MethodDefinition abort at jqxhr.ceylon (154:1-158:1)
            $$jQXHRAbs.abort=function abort(){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                $$jQXHRAbs.$native.abort();
                /*End dynamic block*/
            };$$jQXHRAbs.abort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','abort']};};
            
            //MethodDefinition statusCode at jqxhr.ceylon (160:1-164:1)
            $$jQXHRAbs.statusCode=function statusCode(){
                var $$jQXHRAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$jQXHRAbs.$native.statusCode());
                /*End dynamic block*/
            };$$jQXHRAbs.statusCode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','statusCode']};};
        })(JQXHRAbs.$$.prototype);
    }
    return JQXHRAbs;
}
exports.$init$JQXHRAbs=$init$JQXHRAbs;
$init$JQXHRAbs();

//ClassDefinition JQXHR at jqxhr.ceylon (167:0-172:0)
function JQXHR(n$33956, $$jQXHR){
    $init$JQXHR();
    if ($$jQXHR===undefined)$$jQXHR=new JQXHR.$$;
    $$jQXHR.n$33956_=n$33956;
    JQXHRAbs($$jQXHR);
    
    //AttributeDeclaration native at jqxhr.ceylon (168:1-168:29)
    $$jQXHR.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JQXHR,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.jquery','JQXHR','$at','native']};}};
    /*Begin dynamic block*/
    $$jQXHR.$native=$$jQXHR.n$33956;/*End dynamic block*/
    return $$jQXHR;
}
JQXHR.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQXHRAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQXHR']};};
exports.JQXHR=JQXHR;
function $init$JQXHR(){
    if (JQXHR.$$===undefined){
        $$$cl32209.initTypeProto(JQXHR,'ceylon.js.jquery::JQXHR',$init$JQXHRAbs());
        (function($$jQXHR){
            
            //AttributeDeclaration native at jqxhr.ceylon (168:1-168:29)
            $$$cl32209.defineAttr($$jQXHR,'n$33956',function(){return this.n$33956_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JQXHR,d:['ceylon.js.jquery','JQXHR','$at','n']};});
        })(JQXHR.$$.prototype);
    }
    return JQXHR;
}
exports.$init$JQXHR=$init$JQXHR;
$init$JQXHR();

//ClassDefinition DataType at jqueryajaxsettings.ceylon (4:0-4:138)
function DataType(name$33957, $$dataType){
    $init$DataType();
    if ($$dataType===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$dataType.name$33957_=name$33957;
    return $$dataType;
}
DataType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.jquery','DataType']};};
exports.DataType=DataType;
function $init$DataType(){
    if (DataType.$$===undefined){
        $$$cl32209.initTypeProto(DataType,'ceylon.js.jquery::DataType',$$$cl32209.Basic);
        (function($$dataType){
            $$$cl32209.defineAttr($$dataType,'name$33957',function(){return this.name$33957_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$cont:DataType,d:['ceylon.js.jquery','DataType','$at','name']};});
        })(DataType.$$.prototype);
    }
    return DataType;
}
exports.$init$DataType=$init$DataType;
$init$DataType();

//ObjectDefinition dataTypeXML at jqueryajaxsettings.ceylon (6:0-6:59)
function dataTypeXML$33958(){
    var $$dataTypeXML=new dataTypeXML$33958.$$;
    DataType($$$cl32209.String("dataTypeXML",11),$$dataTypeXML);
    return $$dataTypeXML;
}
function $init$dataTypeXML$33958(){
    if (dataTypeXML$33958.$$===undefined){
        $$$cl32209.initTypeProto(dataTypeXML$33958,'ceylon.js.jquery::dataTypeXML',$init$DataType());
    }
    return dataTypeXML$33958;
}
exports.$init$dataTypeXML$33958=$init$dataTypeXML$33958;
$init$dataTypeXML$33958();
var dataTypeXML$33959;
function getDataTypeXML(){
    if (dataTypeXML$33959===undefined)dataTypeXML$33959=$init$dataTypeXML$33958()();
    return dataTypeXML$33959;
}
exports.getDataTypeXML=getDataTypeXML;
getDataTypeXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeXML$33958},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','dataTypeXML']};};
$prop$getDataTypeXML={get:getDataTypeXML,$$metamodel$$:getDataTypeXML.$$metamodel$$};
exports.$prop$getDataTypeXML=$prop$getDataTypeXML;

//ObjectDefinition dataTypeHtml at jqueryajaxsettings.ceylon (7:0-7:61)
function dataTypeHtml$33960(){
    var $$dataTypeHtml=new dataTypeHtml$33960.$$;
    DataType($$$cl32209.String("dataTypeHtml",12),$$dataTypeHtml);
    return $$dataTypeHtml;
}
function $init$dataTypeHtml$33960(){
    if (dataTypeHtml$33960.$$===undefined){
        $$$cl32209.initTypeProto(dataTypeHtml$33960,'ceylon.js.jquery::dataTypeHtml',$init$DataType());
    }
    return dataTypeHtml$33960;
}
exports.$init$dataTypeHtml$33960=$init$dataTypeHtml$33960;
$init$dataTypeHtml$33960();
var dataTypeHtml$33961;
function getDataTypeHtml(){
    if (dataTypeHtml$33961===undefined)dataTypeHtml$33961=$init$dataTypeHtml$33960()();
    return dataTypeHtml$33961;
}
exports.getDataTypeHtml=getDataTypeHtml;
getDataTypeHtml.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeHtml$33960},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','dataTypeHtml']};};
$prop$getDataTypeHtml={get:getDataTypeHtml,$$metamodel$$:getDataTypeHtml.$$metamodel$$};
exports.$prop$getDataTypeHtml=$prop$getDataTypeHtml;

//ObjectDefinition dataTypeScript at jqueryajaxsettings.ceylon (8:0-8:65)
function dataTypeScript$33962(){
    var $$dataTypeScript=new dataTypeScript$33962.$$;
    DataType($$$cl32209.String("dataTypeScript",14),$$dataTypeScript);
    return $$dataTypeScript;
}
function $init$dataTypeScript$33962(){
    if (dataTypeScript$33962.$$===undefined){
        $$$cl32209.initTypeProto(dataTypeScript$33962,'ceylon.js.jquery::dataTypeScript',$init$DataType());
    }
    return dataTypeScript$33962;
}
exports.$init$dataTypeScript$33962=$init$dataTypeScript$33962;
$init$dataTypeScript$33962();
var dataTypeScript$33963;
function getDataTypeScript(){
    if (dataTypeScript$33963===undefined)dataTypeScript$33963=$init$dataTypeScript$33962()();
    return dataTypeScript$33963;
}
exports.getDataTypeScript=getDataTypeScript;
getDataTypeScript.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeScript$33962},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','dataTypeScript']};};
$prop$getDataTypeScript={get:getDataTypeScript,$$metamodel$$:getDataTypeScript.$$metamodel$$};
exports.$prop$getDataTypeScript=$prop$getDataTypeScript;

//ObjectDefinition dataTypeJson at jqueryajaxsettings.ceylon (9:0-9:61)
function dataTypeJson$33964(){
    var $$dataTypeJson=new dataTypeJson$33964.$$;
    DataType($$$cl32209.String("dataTypeJson",12),$$dataTypeJson);
    return $$dataTypeJson;
}
function $init$dataTypeJson$33964(){
    if (dataTypeJson$33964.$$===undefined){
        $$$cl32209.initTypeProto(dataTypeJson$33964,'ceylon.js.jquery::dataTypeJson',$init$DataType());
    }
    return dataTypeJson$33964;
}
exports.$init$dataTypeJson$33964=$init$dataTypeJson$33964;
$init$dataTypeJson$33964();
var dataTypeJson$33965;
function getDataTypeJson(){
    if (dataTypeJson$33965===undefined)dataTypeJson$33965=$init$dataTypeJson$33964()();
    return dataTypeJson$33965;
}
exports.getDataTypeJson=getDataTypeJson;
getDataTypeJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeJson$33964},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','dataTypeJson']};};
$prop$getDataTypeJson={get:getDataTypeJson,$$metamodel$$:getDataTypeJson.$$metamodel$$};
exports.$prop$getDataTypeJson=$prop$getDataTypeJson;

//ObjectDefinition dataTypeJsonp at jqueryajaxsettings.ceylon (10:0-10:63)
function dataTypeJsonp$33966(){
    var $$dataTypeJsonp=new dataTypeJsonp$33966.$$;
    DataType($$$cl32209.String("dataTypeJsonp",13),$$dataTypeJsonp);
    return $$dataTypeJsonp;
}
function $init$dataTypeJsonp$33966(){
    if (dataTypeJsonp$33966.$$===undefined){
        $$$cl32209.initTypeProto(dataTypeJsonp$33966,'ceylon.js.jquery::dataTypeJsonp',$init$DataType());
    }
    return dataTypeJsonp$33966;
}
exports.$init$dataTypeJsonp$33966=$init$dataTypeJsonp$33966;
$init$dataTypeJsonp$33966();
var dataTypeJsonp$33967;
function getDataTypeJsonp(){
    if (dataTypeJsonp$33967===undefined)dataTypeJsonp$33967=$init$dataTypeJsonp$33966()();
    return dataTypeJsonp$33967;
}
exports.getDataTypeJsonp=getDataTypeJsonp;
getDataTypeJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeJsonp$33966},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','dataTypeJsonp']};};
$prop$getDataTypeJsonp={get:getDataTypeJsonp,$$metamodel$$:getDataTypeJsonp.$$metamodel$$};
exports.$prop$getDataTypeJsonp=$prop$getDataTypeJsonp;

//ObjectDefinition dataTypeText at jqueryajaxsettings.ceylon (11:0-11:61)
function dataTypeText$33968(){
    var $$dataTypeText=new dataTypeText$33968.$$;
    DataType($$$cl32209.String("dataTypeText",12),$$dataTypeText);
    return $$dataTypeText;
}
function $init$dataTypeText$33968(){
    if (dataTypeText$33968.$$===undefined){
        $$$cl32209.initTypeProto(dataTypeText$33968,'ceylon.js.jquery::dataTypeText',$init$DataType());
    }
    return dataTypeText$33968;
}
exports.$init$dataTypeText$33968=$init$dataTypeText$33968;
$init$dataTypeText$33968();
var dataTypeText$33969;
function getDataTypeText(){
    if (dataTypeText$33969===undefined)dataTypeText$33969=$init$dataTypeText$33968()();
    return dataTypeText$33969;
}
exports.getDataTypeText=getDataTypeText;
getDataTypeText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeText$33968},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','dataTypeText']};};
$prop$getDataTypeText={get:getDataTypeText,$$metamodel$$:getDataTypeText.$$metamodel$$};
exports.$prop$getDataTypeText=$prop$getDataTypeText;

//MethodDefinition createJSONPSettings at jqueryajaxsettings.ceylon (13:0-33:0)
function createJSONPSettings(jsonp$33970,jsonpCallback$33971){
    if(jsonp$33970===undefined){jsonp$33970=true;}
    if(jsonpCallback$33971===undefined){jsonpCallback$33971=$$$cl32209.String("callback",8);}
    /*Begin dynamic block*/
    if(jsonp$33970.equals(true)){
        if(jsonpCallback$33971.equals($$$cl32209.String("callback",8))){
            return null;
        }else {
            return JSONPSettings(jsonpCallback$33971);
        }
    }else {
        if(jsonpCallback$33971.equals($$$cl32209.String("callback",8))){
            return JSONPSettings(false);
        }else {
            
            //AttributeDeclaration json at jqueryajaxsettings.ceylon (25:4-28:5)
            var json$33972=(values$33973=/*NULL PARAM!*/[$$$cl32209.Entry($$$cl32209.String("jsonp",5),false,{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.false$33974}})/*NULL PARAM!*/,$$$cl32209.Entry($$$cl32209.String("jsonpCallback",13),jsonpCallback$33971,{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.String}})].reifyCeylonType({Absent:{t:$$$cl32209.Null},Element:{ t:'u', l:[{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.false$33974}}},{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.String}}}]}}),$$$cjj33169.JSON(values$33973));
            $prop$getJson$33972={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj33169.JSON},d:['ceylon.js.jquery','createJSONPSettings','$at','json']};}};
            $prop$getJson$33972.get=function(){return json$33972};
            var values$33973;
            return JSONPSettings(json$33972.toJson());
        }
    }/*End dynamic block*/
}
exports.createJSONPSettings=createJSONPSettings;
createJSONPSettings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:JSONPSettings}]},$ps:[{$nm:'jsonp',$mt:'prm',$def:1,$t:{t:$$$cl32209.Boolean},$an:function(){return[];}},{$nm:'jsonpCallback',$mt:'prm',$def:1,$t:{t:$$$cl32209.String},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','createJSONPSettings']};};

//ClassDefinition JSONPSettingsAbs at jqueryajaxsettings.ceylon (35:0-69:0)
function JSONPSettingsAbs($$jSONPSettingsAbs){
    $init$JSONPSettingsAbs();
    if ($$jSONPSettingsAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$jSONPSettingsAbs);
    return $$jSONPSettingsAbs;
}
JSONPSettingsAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.jquery','JSONPSettingsAbs']};};
exports.JSONPSettingsAbs=JSONPSettingsAbs;
function $init$JSONPSettingsAbs(){
    if (JSONPSettingsAbs.$$===undefined){
        $$$cl32209.initTypeProto(JSONPSettingsAbs,'ceylon.js.jquery::JSONPSettingsAbs',$$$cjl32280.JSObjectAbs);
        (function($$jSONPSettingsAbs){
            
            //MethodDefinition getIsJsonp at jqueryajaxsettings.ceylon (37:1-45:1)
            $$jSONPSettingsAbs.getIsJsonp=function getIsJsonp(){
                var $$jSONPSettingsAbs=this;
                /*Begin dynamic block*/
                if(((tmpvar$33975=$$jSONPSettingsAbs.$native.jsonp,tmpvar$33976=true,(tmpvar$33975.equals&&tmpvar$33975.equals(tmpvar$33976))||tmpvar$33975===tmpvar$33976)||(tmpvar$33977=$$jSONPSettingsAbs.$native.jsonp,tmpvar$33978=null,(tmpvar$33977.equals&&!tmpvar$33977.equals(tmpvar$33978))||tmpvar$33977!==tmpvar$33978))){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jSONPSettingsAbs.getIsJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','getIsJsonp']};};
            
            //MethodDefinition setIsJsonp at jqueryajaxsettings.ceylon (47:1-51:1)
            $$jSONPSettingsAbs.setIsJsonp=function setIsJsonp(jsonp$33979){
                var $$jSONPSettingsAbs=this;
                /*Begin dynamic block*/
                $$jSONPSettingsAbs.$native.jsonp=jsonp$33979;
                /*End dynamic block*/
            };$$jSONPSettingsAbs.setIsJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'jsonp',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','setIsJsonp']};};
            
            //MethodDefinition getCallback at jqueryajaxsettings.ceylon (53:1-62:1)
            $$jSONPSettingsAbs.getCallback=function getCallback(){
                var $$jSONPSettingsAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration callback at jqueryajaxsettings.ceylon (55:3-55:37)
                var callback$33980=$$jSONPSettingsAbs.$native.callback;
                $prop$getCallback$33980={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','getCallback','$at','callback']};}};
                $prop$getCallback$33980.get=function(){return callback$33980};
                if((tmpvar$33981=callback$33980,tmpvar$33982=null,(tmpvar$33981.equals&&!tmpvar$33981.equals(tmpvar$33982))||tmpvar$33981!==tmpvar$33982)){
                    return $$$cjl32280.JSString($$jSONPSettingsAbs.$native.callback);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jSONPSettingsAbs.getCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','getCallback']};};
            
            //MethodDefinition setCallback at jqueryajaxsettings.ceylon (64:1-68:1)
            $$jSONPSettingsAbs.setCallback=function setCallback(callback$33983){
                var $$jSONPSettingsAbs=this;
                /*Begin dynamic block*/
                $$jSONPSettingsAbs.$native.callback=callback$33983.valueOf();
                /*End dynamic block*/
            };$$jSONPSettingsAbs.setCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','setCallback']};};
        })(JSONPSettingsAbs.$$.prototype);
    }
    return JSONPSettingsAbs;
}
exports.$init$JSONPSettingsAbs=$init$JSONPSettingsAbs;
$init$JSONPSettingsAbs();

//ClassDefinition JSONPSettings at jqueryajaxsettings.ceylon (71:0-76:0)
function JSONPSettings(n$33984, $$jSONPSettings){
    $init$JSONPSettings();
    if ($$jSONPSettings===undefined)$$jSONPSettings=new JSONPSettings.$$;
    $$jSONPSettings.n$33984_=n$33984;
    JSONPSettingsAbs($$jSONPSettings);
    
    //AttributeDeclaration native at jqueryajaxsettings.ceylon (72:1-72:29)
    $$jSONPSettings.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JSONPSettings,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.jquery','JSONPSettings','$at','native']};}};
    /*Begin dynamic block*/
    $$jSONPSettings.$native=$$jSONPSettings.n$33984;/*End dynamic block*/
    return $$jSONPSettings;
}
JSONPSettings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSONPSettingsAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JSONPSettings']};};
exports.JSONPSettings=JSONPSettings;
function $init$JSONPSettings(){
    if (JSONPSettings.$$===undefined){
        $$$cl32209.initTypeProto(JSONPSettings,'ceylon.js.jquery::JSONPSettings',$init$JSONPSettingsAbs());
        (function($$jSONPSettings){
            
            //AttributeDeclaration native at jqueryajaxsettings.ceylon (72:1-72:29)
            $$$cl32209.defineAttr($$jSONPSettings,'n$33984',function(){return this.n$33984_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JSONPSettings,d:['ceylon.js.jquery','JSONPSettings','$at','n']};});
        })(JSONPSettings.$$.prototype);
    }
    return JSONPSettings;
}
exports.$init$JSONPSettings=$init$JSONPSettings;
$init$JSONPSettings();

//ClassDefinition JQueryAjaxSettingsAbs at jqueryajaxsettings.ceylon (78:0-638:0)
function JQueryAjaxSettingsAbs($$jQueryAjaxSettingsAbs){
    $init$JQueryAjaxSettingsAbs();
    if ($$jQueryAjaxSettingsAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$jQueryAjaxSettingsAbs);
    return $$jQueryAjaxSettingsAbs;
}
JQueryAjaxSettingsAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs']};};
exports.JQueryAjaxSettingsAbs=JQueryAjaxSettingsAbs;
function $init$JQueryAjaxSettingsAbs(){
    if (JQueryAjaxSettingsAbs.$$===undefined){
        $$$cl32209.initTypeProto(JQueryAjaxSettingsAbs,'ceylon.js.jquery::JQueryAjaxSettingsAbs',$$$cjl32280.JSObjectAbs);
        (function($$jQueryAjaxSettingsAbs){
            
            //MethodDefinition getAccepts at jqueryajaxsettings.ceylon (80:1-84:1)
            $$jQueryAjaxSettingsAbs.getAccepts=function getAccepts(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return $$$cl32209.Comprehension(function(){
                    //Comprehension at jqueryajaxsettings.ceylon (82:11-82:100)
                    var it$33985=$$jQueryAjaxSettingsAbs.$native.accepts.iterator();
                    var key$33986,val$33987;
                    var next$val$33987=function(){
                        var entry$33988;
                        if((entry$33988=it$33985.next())!==$$$cl32209.getFinished()){
                            key$33986=entry$33988.key;
                            val$33987=entry$33988.item;
                            return entry$33988;
                        }
                        val$33987=undefined;
                        return $$$cl32209.getFinished();
                    }
                    next$val$33987();
                    return function(){
                        if(val$33987!==undefined){
                            var key$33986$33989=key$33986;
                            var val$33987$33990=val$33987;
                            var tmpvar$33991=$$$cl32209.Entry($$$cjl32280.JSString(key$33986$33989),$$$cjl32280.JSString(val$33987$33990),{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSString}});
                            next$val$33987();
                            return tmpvar$33991;
                        }
                        return $$$cl32209.getFinished();
                    }
                },{Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSString}}}}).sequence;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getAccepts.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSString}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getAccepts']};};
            
            //MethodDefinition setAccepts at jqueryajaxsettings.ceylon (86:1-96:1)
            $$jQueryAjaxSettingsAbs.setAccepts=function setAccepts(accepts$33992){
                var $$jQueryAjaxSettingsAbs=this;
                if(accepts$33992===undefined){accepts$33992=$$$cl32209.getEmpty();}
                
                //AttributeDeclaration acceptNative at jqueryajaxsettings.ceylon (87:2-87:42)
                var acceptNative$33993=$$$cjl32280.createJSObject();
                //'for' statement at jqueryajaxsettings.ceylon (88:2-92:2)
                var it$33994 = accepts$33992.iterator();
                var item$33995;while ((item$33995=it$33994.next())!==$$$cl32209.getFinished()){
                    var key$33996=item$33995.key;
                    var val$33997=item$33995.item;
                    /*Begin dynamic block*/
                    $$$cjl32280.objectDefineProperty(acceptNative$33993,key$33996,$$$cjl32280.DataDescriptor(true,false,true,true,val$33997.$native));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.accepts=acceptNative$33993.$native;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setAccepts.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'accepts',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSString}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setAccepts']};};
            
            //MethodDefinition getAsync at jqueryajaxsettings.ceylon (98:1-106:1)
            $$jQueryAjaxSettingsAbs.getAsync=function getAsync(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.async){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getAsync']};};
            
            //MethodDefinition setAsync at jqueryajaxsettings.ceylon (108:1-112:1)
            $$jQueryAjaxSettingsAbs.setAsync=function setAsync(async$33998){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.async=async$33998;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'async',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setAsync']};};
            
            //MethodDefinition getBeforeSend at jqueryajaxsettings.ceylon (114:1-119:1)
            $$jQueryAjaxSettingsAbs.getBeforeSend=function getBeforeSend(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$33999=$$jQueryAjaxSettingsAbs.$native.beforeSend=(typeof beforeSend==='undefined'||beforeSend===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: beforeSend")),'117:30-117:39','jqueryajaxsettings.ceylon'):beforeSend),$$$cl32209.isOfType(tmpvar$33999,{t:$$$cl32209.Anything})?tmpvar$33999:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'117:10-117:39','jqueryajaxsettings.ceylon'));
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getBeforeSend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns Boolean(JQXHR, JQueryAjaxSettings)?",43)),$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getBeforeSend']};};
            
            //MethodDefinition setBeforeSend at jqueryajaxsettings.ceylon (121:1-125:1)
            $$jQueryAjaxSettingsAbs.setBeforeSend=function setBeforeSend(beforeSend$34000){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.beforeSend=$$$cl32209.$JsCallable(beforeSend$34000/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setBeforeSend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'beforeSend',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:JQueryAjaxSettings},Element:{t:JQueryAjaxSettings}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:JQueryAjaxSettings}]}}},Return:{t:$$$cl32209.Boolean}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setBeforeSend']};};
            
            //MethodDefinition getCache at jqueryajaxsettings.ceylon (127:1-135:1)
            $$jQueryAjaxSettingsAbs.getCache=function getCache(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.cache){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getCache.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getCache']};};
            
            //MethodDefinition setCache at jqueryajaxsettings.ceylon (137:1-141:1)
            $$jQueryAjaxSettingsAbs.setCache=function setCache(cache$34001){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.cache=cache$34001;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setCache.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'cache',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setCache']};};
            
            //MethodDefinition getComplete at jqueryajaxsettings.ceylon (143:1-155:1)
            $$jQueryAjaxSettingsAbs.getComplete=function getComplete(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration complete at jqueryajaxsettings.ceylon (146:3-146:37)
                var complete$34002=$$jQueryAjaxSettingsAbs.$native.complete;
                $prop$getComplete$34002={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getComplete','$at','complete']};}};
                $prop$getComplete$34002.get=function(){return complete$34002};
                if((tmpvar$34003=complete$34002,tmpvar$34004=null,(tmpvar$34003.equals&&tmpvar$34003.equals(tmpvar$34004))||tmpvar$34003===tmpvar$34004)){
                    return null;
                }else {
                    if($$$cjl32280.arrayIsArray(complete$34002)){
                        return $$$cjl32280.JSArray(complete$34002);
                    }else {
                        return $$$cjl32280.createJSArray([(tmpvar$34005=complete$34002,$$$cl32209.isOfType(tmpvar$34005,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$34005:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'152:25-152:32','jqueryajaxsettings.ceylon'))].reifyCeylonType({Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}}}));
                    }
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns array of Anything(JQXHR, String) or null",48)),$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getComplete']};};
            
            //MethodDefinition setComplete at jqueryajaxsettings.ceylon (157:1-161:1)
            $$jQueryAjaxSettingsAbs.setComplete=function setComplete(complete$34006){
                var $$jQueryAjaxSettingsAbs=this;
                if(complete$34006===undefined){complete$34006=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.complete=complete$34006;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'complete',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setComplete']};};
            
            //MethodDefinition getContents at jqueryajaxsettings.ceylon (164:1-168:1)
            $$jQueryAjaxSettingsAbs.getContents=function getContents(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return $$$cl32209.Comprehension(function(){
                    //Comprehension at jqueryajaxsettings.ceylon (166:11-166:97)
                    var it$34007=$$jQueryAjaxSettingsAbs.$native.contents.iterator();
                    var key$34008,val$34009;
                    var next$val$34009=function(){
                        var entry$34010;
                        if((entry$34010=it$34007.next())!==$$$cl32209.getFinished()){
                            key$34008=entry$34010.key;
                            val$34009=entry$34010.item;
                            return entry$34010;
                        }
                        val$34009=undefined;
                        return $$$cl32209.getFinished();
                    }
                    next$val$34009();
                    return function(){
                        if(val$34009!==undefined){
                            var key$34008$34011=key$34008;
                            var val$34009$34012=val$34009;
                            var tmpvar$34013=$$$cl32209.Entry($$$cjl32280.JSString(key$34008$34011),$$$cjl32280.RegExp(val$34009$34012),{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.RegExp}});
                            next$val$34009();
                            return tmpvar$34013;
                        }
                        return $$$cl32209.getFinished();
                    }
                },{Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.RegExp}}}}).sequence;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.RegExp}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContents']};};
            
            //MethodDefinition setContents at jqueryajaxsettings.ceylon (170:1-180:1)
            $$jQueryAjaxSettingsAbs.setContents=function setContents(contents$34014){
                var $$jQueryAjaxSettingsAbs=this;
                if(contents$34014===undefined){contents$34014=$$$cl32209.getEmpty();}
                
                //AttributeDeclaration contNative at jqueryajaxsettings.ceylon (171:2-171:40)
                var contNative$34015=$$$cjl32280.createJSObject();
                //'for' statement at jqueryajaxsettings.ceylon (172:2-176:2)
                var it$34016 = contents$34014.iterator();
                var item$34017;while ((item$34017=it$34016.next())!==$$$cl32209.getFinished()){
                    var key$34018=item$34017.key;
                    var val$34019=item$34017.item;
                    /*Begin dynamic block*/
                    $$$cjl32280.objectDefineProperty(contNative$34015,key$34018,$$$cjl32280.DataDescriptor(true,false,true,true,val$34019.$native));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.contents=contNative$34015;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'contents',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.RegExp}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContents']};};
            
            //MethodDefinition getContentType at jqueryajaxsettings.ceylon (182:1-190:1)
            $$jQueryAjaxSettingsAbs.getContentType=function getContentType(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$34020=$$jQueryAjaxSettingsAbs.$native.contentType,tmpvar$34021=null,(tmpvar$34020.equals&&!tmpvar$34020.equals(tmpvar$34021))||tmpvar$34020!==tmpvar$34021)){
                    return $$$cjl32280.JSString($$jQueryAjaxSettingsAbs.$native.contentType);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getContentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContentType']};};
            
            //MethodDefinition setContentType at jqueryajaxsettings.ceylon (192:1-196:1)
            $$jQueryAjaxSettingsAbs.setContentType=function setContentType(contentType$34022){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.contentType=contentType$34022.valueOf();
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setContentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'contentType',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContentType']};};
            
            //MethodDefinition getContext at jqueryajaxsettings.ceylon (198:1-206:1)
            $$jQueryAjaxSettingsAbs.getContext=function getContext(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$34023=$$jQueryAjaxSettingsAbs.$native.context,tmpvar$34024=null,(tmpvar$34023.equals&&!tmpvar$34023.equals(tmpvar$34024))||tmpvar$34023!==tmpvar$34024)){
                    return $$$cjl32280.JSObject($$jQueryAjaxSettingsAbs.$native.context);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getContext.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSObject}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContext']};};
            
            //MethodDefinition setContext at jqueryajaxsettings.ceylon (208:1-212:1)
            $$jQueryAjaxSettingsAbs.setContext=function setContext(context$34025){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.context=context$34025.$native;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setContext.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cjl32280.JSObject},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContext']};};
            
            //MethodDefinition getConverters at jqueryajaxsettings.ceylon (214:1-218:1)
            $$jQueryAjaxSettingsAbs.getConverters=function getConverters(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return $$$cl32209.Comprehension(function(){
                    //Comprehension at jqueryajaxsettings.ceylon (216:11-216:103)
                    var it$34026=$$jQueryAjaxSettingsAbs.$native.converters.iterator();
                    var key$34027,val$34028;
                    var next$val$34028=function(){
                        var entry$34029;
                        if((entry$34029=it$34026.next())!==$$$cl32209.getFinished()){
                            key$34027=entry$34029.key;
                            val$34028=entry$34029.item;
                            return entry$34029;
                        }
                        val$34028=undefined;
                        return $$$cl32209.getFinished();
                    }
                    next$val$34028();
                    return function(){
                        if(val$34028!==undefined){
                            var key$34027$34030=key$34027;
                            var val$34028$34031=val$34028;
                            var tmpvar$34032=$$$cl32209.Entry($$$cjl32280.JSString(key$34027$34030),$$$cjl32280.JSObject(val$34028$34031),{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSObject}});
                            next$val$34028();
                            return tmpvar$34032;
                        }
                        return $$$cl32209.getFinished();
                    }
                },{Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSObject}}}}).sequence;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getConverters.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSObject}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getConverters']};};
            
            //MethodDefinition setConverters at jqueryajaxsettings.ceylon (220:1-230:1)
            $$jQueryAjaxSettingsAbs.setConverters=function setConverters(converters$34033){
                var $$jQueryAjaxSettingsAbs=this;
                if(converters$34033===undefined){converters$34033=$$$cl32209.getEmpty();}
                
                //AttributeDeclaration convNative at jqueryajaxsettings.ceylon (221:2-221:40)
                var convNative$34034=$$$cjl32280.createJSObject();
                //'for' statement at jqueryajaxsettings.ceylon (222:2-226:2)
                var it$34035 = converters$34033.iterator();
                var item$34036;while ((item$34036=it$34035.next())!==$$$cl32209.getFinished()){
                    var key$34037=item$34036.key;
                    var val$34038=item$34036.item;
                    /*Begin dynamic block*/
                    $$$cjl32280.objectDefineProperty(convNative$34034,key$34037,$$$cjl32280.DataDescriptor(true,false,true,true,val$34038.$native));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.converters=convNative$34034.$native;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setConverters.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'converters',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSObject}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setConverters']};};
            
            //MethodDefinition getCrossDomain at jqueryajaxsettings.ceylon (232:1-240:1)
            $$jQueryAjaxSettingsAbs.getCrossDomain=function getCrossDomain(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.crossDomain){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getCrossDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getCrossDomain']};};
            
            //MethodDefinition setCrossDomain at jqueryajaxsettings.ceylon (242:1-246:1)
            $$jQueryAjaxSettingsAbs.setCrossDomain=function setCrossDomain(crossDomain$34039){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.crossDomain=crossDomain$34039;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setCrossDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'crossDomain',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setCrossDomain']};};
            
            //MethodDefinition getData at jqueryajaxsettings.ceylon (248:1-258:1)
            $$jQueryAjaxSettingsAbs.getData=function getData(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.data.instanceof(/*NULL PARAM!*/(typeof String==='undefined'||String===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: String")),'250:32-250:37','jqueryajaxsettings.ceylon'):String))){
                    return $$$cjl32280.JSString($$jQueryAjaxSettingsAbs.$native.data);
                }else {
                    if((tmpvar$34040=$$jQueryAjaxSettingsAbs.$native.data,tmpvar$34041=null,(tmpvar$34040.equals&&!tmpvar$34040.equals(tmpvar$34041))||tmpvar$34040!==tmpvar$34041)){
                        return $$$cjl32280.JSObject($$jQueryAjaxSettingsAbs.$native.data);
                    }else {
                        return null;
                    }
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cjl32280.JSString},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSObject}]}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getData']};};
            
            //MethodDefinition setData at jqueryajaxsettings.ceylon (260:1-272:1)
            $$jQueryAjaxSettingsAbs.setData=function setData(data$34042){
                var $$jQueryAjaxSettingsAbs=this;
                //Switch statement at jqueryajaxsettings.ceylon (261:2-271:2)
                var case$34043=data$34042;
                if ($$$cl32209.isOfType(data$34042,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$jQueryAjaxSettingsAbs.$native.data=case$34043.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(data$34042,{t:$$$cjl32280.JSObject})) {
                    /*Begin dynamic block*/
                    $$jQueryAjaxSettingsAbs.$native.data=case$34043.$native;
                    /*End dynamic block*/
                }//End switch statement at jqueryajaxsettings.ceylon (261:2-271:2)
            };$$jQueryAjaxSettingsAbs.setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSObject}]},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setData']};};
            
            //MethodDefinition getDataFilter at jqueryajaxsettings.ceylon (274:1-279:1)
            $$jQueryAjaxSettingsAbs.getDataFilter=function getDataFilter(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$34044=$$jQueryAjaxSettingsAbs.$native.dataFilter,$$$cl32209.isOfType(tmpvar$34044,{t:$$$cl32209.Anything})?tmpvar$34044:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'277:10-277:26','jqueryajaxsettings.ceylon'));
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getDataFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns Anything(String, String)?",33)),$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getDataFilter']};};
            
            //MethodDefinition setDataFilter at jqueryajaxsettings.ceylon (281:1-285:1)
            $$jQueryAjaxSettingsAbs.setDataFilter=function setDataFilter(datafilter$34045){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.dataFilter=$$$cl32209.$JsCallable(datafilter$34045/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setDataFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'datafilter',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},First:{t:$$$cl32209.String},Element:{t:$$$cl32209.String}}},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setDataFilter']};};
            
            //MethodDefinition getDataType at jqueryajaxsettings.ceylon (287:1-295:1)
            $$jQueryAjaxSettingsAbs.getDataType=function getDataType(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$34046=$$jQueryAjaxSettingsAbs.$native.dataType,tmpvar$34047=null,(tmpvar$34046.equals&&!tmpvar$34046.equals(tmpvar$34047))||tmpvar$34046!==tmpvar$34047)){
                    return $$$cjl32280.JSString($$jQueryAjaxSettingsAbs.$native.dataType);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getDataType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getDataType']};};
            
            //MethodDefinition setDataType at jqueryajaxsettings.ceylon (297:1-301:1)
            $$jQueryAjaxSettingsAbs.setDataType=function setDataType(dataType$34048){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.dataType=dataType$34048.valueOf();
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setDataType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'dataType',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setDataType']};};
            
            //MethodDefinition getError at jqueryajaxsettings.ceylon (303:1-314:1)
            $$jQueryAjaxSettingsAbs.getError=function getError(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$$cjl32280.arrayIsArray($$jQueryAjaxSettingsAbs.$native.error)){
                    return $$$cjl32280.JSArray($$jQueryAjaxSettingsAbs.$native.error);
                }else {
                    if((tmpvar$34049=$$jQueryAjaxSettingsAbs.$native.error,tmpvar$34050=null,(tmpvar$34049.equals&&!tmpvar$34049.equals(tmpvar$34050))||tmpvar$34049!==tmpvar$34050)){
                        return $$$cjl32280.createJSArray([(tmpvar$34051=$$jQueryAjaxSettingsAbs.$native.error,$$$cl32209.isOfType(tmpvar$34051,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$34051:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'309:25-309:36','jqueryajaxsettings.ceylon'))].reifyCeylonType({Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}}}));
                    }else {
                        return null;
                    }
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns Anything(JQXHR, String?, String?)[]",43)),$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getError']};};
            
            //MethodDefinition setError at jqueryajaxsettings.ceylon (316:1-320:1)
            $$jQueryAjaxSettingsAbs.setError=function setError(datafilter$34052){
                var $$jQueryAjaxSettingsAbs=this;
                if(datafilter$34052===undefined){datafilter$34052=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.dataFilter=datafilter$34052;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'datafilter',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setError']};};
            
            //MethodDefinition getGlobal at jqueryajaxsettings.ceylon (322:1-330:1)
            $$jQueryAjaxSettingsAbs.getGlobal=function getGlobal(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.global){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getGlobal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getGlobal']};};
            
            //MethodDefinition setGlobal at jqueryajaxsettings.ceylon (332:1-336:1)
            $$jQueryAjaxSettingsAbs.setGlobal=function setGlobal(global$34053){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.global=global$34053;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setGlobal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'global',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setGlobal']};};
            
            //MethodDefinition getHeaders at jqueryajaxsettings.ceylon (338:1-342:1)
            $$jQueryAjaxSettingsAbs.getHeaders=function getHeaders(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return $$$cl32209.Comprehension(function(){
                    //Comprehension at jqueryajaxsettings.ceylon (340:11-340:100)
                    var it$34054=$$jQueryAjaxSettingsAbs.$native.headers.iterator();
                    var key$34055,val$34056;
                    var next$val$34056=function(){
                        var entry$34057;
                        if((entry$34057=it$34054.next())!==$$$cl32209.getFinished()){
                            key$34055=entry$34057.key;
                            val$34056=entry$34057.item;
                            return entry$34057;
                        }
                        val$34056=undefined;
                        return $$$cl32209.getFinished();
                    }
                    next$val$34056();
                    return function(){
                        if(val$34056!==undefined){
                            var key$34055$34058=key$34055;
                            var val$34056$34059=val$34056;
                            var tmpvar$34060=$$$cl32209.Entry($$$cjl32280.JSString(key$34055$34058),$$$cjl32280.JSString(val$34056$34059),{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSString}});
                            next$val$34056();
                            return tmpvar$34060;
                        }
                        return $$$cl32209.getFinished();
                    }
                },{Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSString}}}}).sequence;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSString}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getHeaders']};};
            
            //MethodDefinition setHeaders at jqueryajaxsettings.ceylon (344:1-354:1)
            $$jQueryAjaxSettingsAbs.setHeaders=function setHeaders(headers$34061){
                var $$jQueryAjaxSettingsAbs=this;
                
                //AttributeDeclaration headNative at jqueryajaxsettings.ceylon (345:2-345:40)
                var headNative$34062=$$$cjl32280.createJSObject();
                //'for' statement at jqueryajaxsettings.ceylon (346:2-350:2)
                var it$34063 = headers$34061.iterator();
                var item$34064;while ((item$34064=it$34063.next())!==$$$cl32209.getFinished()){
                    var key$34065=item$34064.key;
                    var val$34066=item$34064.item;
                    /*Begin dynamic block*/
                    $$$cjl32280.objectDefineProperty(headNative$34062,key$34065,$$$cjl32280.DataDescriptor(true,false,true,true,val$34066.$native));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.headers=headNative$34062.$native;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'headers',$mt:'prm',$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSString}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setHeaders']};};
            
            //MethodDefinition getIfModified at jqueryajaxsettings.ceylon (356:1-364:1)
            $$jQueryAjaxSettingsAbs.getIfModified=function getIfModified(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.ifModified){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getIfModified.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getIfModified']};};
            
            //MethodDefinition setIfModified at jqueryajaxsettings.ceylon (366:1-370:1)
            $$jQueryAjaxSettingsAbs.setIfModified=function setIfModified(modified$34067){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.ifModified=modified$34067;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setIfModified.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'modified',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setIfModified']};};
            
            //MethodDefinition getIsLocal at jqueryajaxsettings.ceylon (372:1-380:1)
            $$jQueryAjaxSettingsAbs.getIsLocal=function getIsLocal(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.isLocal){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getIsLocal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getIsLocal']};};
            
            //MethodDefinition setIsLocal at jqueryajaxsettings.ceylon (382:1-386:1)
            $$jQueryAjaxSettingsAbs.setIsLocal=function setIsLocal(local$34068){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.isLocal=local$34068;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setIsLocal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'local',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setIsLocal']};};
            
            //MethodDefinition getJsonp at jqueryajaxsettings.ceylon (388:1-406:1)
            $$jQueryAjaxSettingsAbs.getJsonp=function getJsonp(){
                var $$jQueryAjaxSettingsAbs=this;
                
                //AttributeDeclaration jsonp at jqueryajaxsettings.ceylon (389:2-389:16)
                var jsonp$34069;
                /*Begin dynamic block*/
                jsonp$34069=$$$cjl32280.JSObject($$jQueryAjaxSettingsAbs.$native.jsonp);if((tmpvar$34070=$$jQueryAjaxSettingsAbs.$native.jsonp,tmpvar$34071=null,(tmpvar$34070.equals&&tmpvar$34070.equals(tmpvar$34071))||tmpvar$34070===tmpvar$34071)){
                    return null;
                }else {
                    if((jsonp$34069.hasOwnProperty($$$cl32209.String("jsonp",5))||jsonp$34069.hasOwnProperty($$$cl32209.String("jsonpCallback",13)))){
                        return JSONPSettings(jsonp$34069.$native);
                    }else {
                        if(jsonp$34069.$native.instanceof(/*NULL PARAM!*/(typeof String==='undefined'||String===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: String")),'396:40-396:45','jqueryajaxsettings.ceylon'):String))){
                            return $$$cjl32280.JSString(jsonp$34069.$native);
                        }else {
                            if(jsonp$34069.$native){
                                return true;
                            }else {
                                return false;
                            }
                        }
                    }
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:JSONPSettings},{t:$$$cjl32280.JSString},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getJsonp']};};
            
            //MethodDefinition setJsonp at jqueryajaxsettings.ceylon (408:1-412:1)
            $$jQueryAjaxSettingsAbs.setJsonp=function setJsonp(jsonp$34072){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.jsonp=jsonp$34072.$native;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'jsonp',$mt:'prm',$t:{t:JSONPSettings},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setJsonp']};};
            
            //MethodDefinition getJsonpCallback at jqueryajaxsettings.ceylon (414:1-419:1)
            $$jQueryAjaxSettingsAbs.getJsonpCallback=function getJsonpCallback(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$34073=$$jQueryAjaxSettingsAbs.$native.jsonpCallback,$$$cl32209.isOfType(tmpvar$34073,{t:$$$cl32209.Anything})?tmpvar$34073:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'417:10-417:29','jqueryajaxsettings.ceylon'));
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getJsonpCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns String|String()?",24)),$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getJsonpCallback']};};
            
            //MethodDefinition setJsonpCallback at jqueryajaxsettings.ceylon (421:1-425:1)
            $$jQueryAjaxSettingsAbs.setJsonpCallback=function setJsonpCallback(callback$34074){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.jsonpCallback=callback$34074;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setJsonpCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.String}}}]},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setJsonpCallback']};};
            
            //MethodDefinition getMimeType at jqueryajaxsettings.ceylon (427:1-435:1)
            $$jQueryAjaxSettingsAbs.getMimeType=function getMimeType(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$34075=$$jQueryAjaxSettingsAbs.$native.mimeType,tmpvar$34076=null,(tmpvar$34075.equals&&!tmpvar$34075.equals(tmpvar$34076))||tmpvar$34075!==tmpvar$34076)){
                    return $$$cjl32280.JSString($$jQueryAjaxSettingsAbs.$native.mimeType);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getMimeType']};};
            
            //MethodDefinition setMimeType at jqueryajaxsettings.ceylon (437:1-441:1)
            $$jQueryAjaxSettingsAbs.setMimeType=function setMimeType(mimeType$34077){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.mimeType=mimeType$34077.valueOf();
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'mimeType',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setMimeType']};};
            
            //MethodDefinition getPassword at jqueryajaxsettings.ceylon (443:1-451:1)
            $$jQueryAjaxSettingsAbs.getPassword=function getPassword(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$34078=$$jQueryAjaxSettingsAbs.$native.password,tmpvar$34079=null,(tmpvar$34078.equals&&!tmpvar$34078.equals(tmpvar$34079))||tmpvar$34078!==tmpvar$34079)){
                    return $$$cjl32280.JSString($$jQueryAjaxSettingsAbs.$native.password);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getPassword.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getPassword']};};
            
            //MethodDefinition setPassword at jqueryajaxsettings.ceylon (453:1-457:1)
            $$jQueryAjaxSettingsAbs.setPassword=function setPassword(password$34080){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.password=password$34080.valueOf();
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setPassword.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'password',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setPassword']};};
            
            //MethodDefinition getProcessData at jqueryajaxsettings.ceylon (459:1-467:1)
            $$jQueryAjaxSettingsAbs.getProcessData=function getProcessData(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.password){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getProcessData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getProcessData']};};
            
            //MethodDefinition setProcessData at jqueryajaxsettings.ceylon (469:1-473:1)
            $$jQueryAjaxSettingsAbs.setProcessData=function setProcessData(processData$34081){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.processData=processData$34081;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setProcessData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'processData',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setProcessData']};};
            
            //MethodDefinition getScriptCharset at jqueryajaxsettings.ceylon (475:1-483:1)
            $$jQueryAjaxSettingsAbs.getScriptCharset=function getScriptCharset(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$34082=$$jQueryAjaxSettingsAbs.$native.scriptCharset,tmpvar$34083=null,(tmpvar$34082.equals&&!tmpvar$34082.equals(tmpvar$34083))||tmpvar$34082!==tmpvar$34083)){
                    return $$$cjl32280.JSString($$jQueryAjaxSettingsAbs.$native.scriptCharset);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getScriptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getScriptCharset']};};
            
            //MethodDefinition setScriptCharset at jqueryajaxsettings.ceylon (485:1-489:1)
            $$jQueryAjaxSettingsAbs.setScriptCharset=function setScriptCharset(scriptCharset$34084){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.scriptCharset=scriptCharset$34084.valueOf();
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setScriptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'scriptCharset',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setScriptCharset']};};
            
            //MethodDefinition getStatusCode at jqueryajaxsettings.ceylon (491:1-496:1)
            $$jQueryAjaxSettingsAbs.getStatusCode=function getStatusCode(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$34085=(typeof statusNative==='undefined'||statusNative===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: statusNative")),'494:10-494:21','jqueryajaxsettings.ceylon'):statusNative),$$$cl32209.isOfType(tmpvar$34085,{t:$$$cl32209.Anything})?tmpvar$34085:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'494:10-494:21','jqueryajaxsettings.ceylon'));
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getStatusCode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns Object: JSNumber -> Anything(JQXHR, String?, String?)|Anything(JQXHR, String?, String?)",95)),$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getStatusCode']};};
            
            //MethodDefinition setStatusCode at jqueryajaxsettings.ceylon (498:1-508:1)
            $$jQueryAjaxSettingsAbs.setStatusCode=function setStatusCode(statusCodes$34086){
                var $$jQueryAjaxSettingsAbs=this;
                if(statusCodes$34086===undefined){statusCodes$34086=$$$cl32209.getEmpty();}
                
                //AttributeDeclaration statusNative at jqueryajaxsettings.ceylon (499:2-499:42)
                var statusNative$34087=$$$cjl32280.createJSObject();
                //'for' statement at jqueryajaxsettings.ceylon (500:2-504:2)
                var it$34088 = statusCodes$34086.iterator();
                var item$34089;while ((item$34089=it$34088.next())!==$$$cl32209.getFinished()){
                    var key$34090=item$34089.key;
                    var val$34091=item$34089.item;
                    /*Begin dynamic block*/
                    $$$cjl32280.objectDefineProperty(statusNative$34087,key$34090.string,$$$cjl32280.DataDescriptor(true,false,true,true,$$$cl32209.$JsCallable(val$34091,[],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.Anything}})));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.statusNative=statusNative$34087.$native;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setStatusCode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'statusCodes',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSNumber},Item:{ t:'u', l:[{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.Anything}}},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]},Element:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl32209.Null},{t:$$$cl32209.String}]}}},Return:{t:$$$cl32209.Anything}}}]}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setStatusCode']};};
            
            //MethodDefinition getSuccess at jqueryajaxsettings.ceylon (510:1-519:1)
            $$jQueryAjaxSettingsAbs.getSuccess=function getSuccess(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$34092=$$jQueryAjaxSettingsAbs.$native.success,tmpvar$34093=null,(tmpvar$34092.equals&&!tmpvar$34092.equals(tmpvar$34093))||tmpvar$34092!==tmpvar$34093)){
                    return $$$cjl32280.JSArray($$jQueryAjaxSettingsAbs.$native.success);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns Anything(Anything, String, JQXHR)[]",43)),$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getSuccess']};};
            
            //MethodDefinition setSuccess at jqueryajaxsettings.ceylon (521:1-525:1)
            $$jQueryAjaxSettingsAbs.setSuccess=function setSuccess(success$34094){
                var $$jQueryAjaxSettingsAbs=this;
                if(success$34094===undefined){success$34094=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.success=success$34094;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'success',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:$$$cl32209.String},Element:{ t:'u', l:[{t:$$$cl32209.String},{t:JQXHR}]}}},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setSuccess']};};
            
            //MethodDefinition getTimeout at jqueryajaxsettings.ceylon (527:1-535:1)
            $$jQueryAjaxSettingsAbs.getTimeout=function getTimeout(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$34095=$$jQueryAjaxSettingsAbs.$native.timeout,tmpvar$34096=null,(tmpvar$34095.equals&&!tmpvar$34095.equals(tmpvar$34096))||tmpvar$34095!==tmpvar$34096)){
                    return $$$cjl32280.JSNumber($$jQueryAjaxSettingsAbs.$native.timeout);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSNumber}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getTimeout']};};
            
            //MethodDefinition setTimeout at jqueryajaxsettings.ceylon (537:1-541:1)
            $$jQueryAjaxSettingsAbs.setTimeout=function setTimeout(timeout$34097){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.timeout=timeout$34097;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'timeout',$mt:'prm',$t:{t:$$$cl32209.Integer},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setTimeout']};};
            
            //MethodDefinition getTraditional at jqueryajaxsettings.ceylon (543:1-551:1)
            $$jQueryAjaxSettingsAbs.getTraditional=function getTraditional(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if($$jQueryAjaxSettingsAbs.$native.traditional){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getTraditional.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getTraditional']};};
            
            //MethodDefinition setTraditional at jqueryajaxsettings.ceylon (553:1-557:1)
            $$jQueryAjaxSettingsAbs.setTraditional=function setTraditional(traditional$34098){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.traditional=traditional$34098;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setTraditional.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'traditional',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setTraditional']};};
            
            //MethodDefinition getType at jqueryajaxsettings.ceylon (559:1-567:1)
            $$jQueryAjaxSettingsAbs.getType=function getType(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$34099=$$jQueryAjaxSettingsAbs.$native.type,tmpvar$34100=null,(tmpvar$34099.equals&&!tmpvar$34099.equals(tmpvar$34100))||tmpvar$34099!==tmpvar$34100)){
                    return $$$cjl32280.JSString($$jQueryAjaxSettingsAbs.$native.type);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getType']};};
            
            //MethodDefinition setType at jqueryajaxsettings.ceylon (569:1-573:1)
            $$jQueryAjaxSettingsAbs.setType=function setType(type$34101){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.type=type$34101.valueOf();
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setType']};};
            
            //MethodDefinition getUrl at jqueryajaxsettings.ceylon (575:1-583:1)
            $$jQueryAjaxSettingsAbs.getUrl=function getUrl(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$34102=$$jQueryAjaxSettingsAbs.$native.url,tmpvar$34103=null,(tmpvar$34102.equals&&!tmpvar$34102.equals(tmpvar$34103))||tmpvar$34102!==tmpvar$34103)){
                    return $$$cjl32280.JSString($$jQueryAjaxSettingsAbs.$native.url);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getUrl.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getUrl']};};
            
            //MethodDefinition setUrl at jqueryajaxsettings.ceylon (585:1-589:1)
            $$jQueryAjaxSettingsAbs.setUrl=function setUrl(url$34104){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.url=url$34104.valueOf();
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setUrl.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setUrl']};};
            
            //MethodDefinition getUsername at jqueryajaxsettings.ceylon (591:1-599:1)
            $$jQueryAjaxSettingsAbs.getUsername=function getUsername(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$34105=$$jQueryAjaxSettingsAbs.$native.username,tmpvar$34106=null,(tmpvar$34105.equals&&!tmpvar$34105.equals(tmpvar$34106))||tmpvar$34105!==tmpvar$34106)){
                    return $$$cjl32280.JSString($$jQueryAjaxSettingsAbs.$native.username);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getUsername.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getUsername']};};
            
            //MethodDefinition setUsername at jqueryajaxsettings.ceylon (601:1-605:1)
            $$jQueryAjaxSettingsAbs.setUsername=function setUsername(username$34107){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.username=username$34107.valueOf();
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setUsername.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'username',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setUsername']};};
            
            //MethodDefinition getXhr at jqueryajaxsettings.ceylon (607:1-612:1)
            $$jQueryAjaxSettingsAbs.getXhr=function getXhr(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$34108=$$jQueryAjaxSettingsAbs.$native.xhr,$$$cl32209.isOfType(tmpvar$34108,{t:$$$cl32209.Anything})?tmpvar$34108:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'610:10-610:19','jqueryajaxsettings.ceylon'));
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getXhr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns Anything()?",19)),$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getXhr']};};
            
            //MethodDefinition setXhr at jqueryajaxsettings.ceylon (614:1-618:1)
            $$jQueryAjaxSettingsAbs.setXhr=function setXhr(xhr$34109){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.xhr=$$$cl32209.$JsCallable(xhr$34109/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setXhr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'xhr',$mt:'prm',$t:{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setXhr']};};
            
            //MethodDefinition getXhrFields at jqueryajaxsettings.ceylon (620:1-624:1)
            $$jQueryAjaxSettingsAbs.getXhrFields=function getXhrFields(){
                var $$jQueryAjaxSettingsAbs=this;
                /*Begin dynamic block*/
                return $$$cl32209.Comprehension(function(){
                    //Comprehension at jqueryajaxsettings.ceylon (622:11-622:102)
                    var it$34110=$$jQueryAjaxSettingsAbs.$native.xhrFields.iterator();
                    var key$34111,val$34112;
                    var next$val$34112=function(){
                        var entry$34113;
                        if((entry$34113=it$34110.next())!==$$$cl32209.getFinished()){
                            key$34111=entry$34113.key;
                            val$34112=entry$34113.item;
                            return entry$34113;
                        }
                        val$34112=undefined;
                        return $$$cl32209.getFinished();
                    }
                    next$val$34112();
                    return function(){
                        if(val$34112!==undefined){
                            var key$34111$34114=key$34111;
                            var val$34112$34115=val$34112;
                            var tmpvar$34116=$$$cl32209.Entry($$$cjl32280.JSString(key$34111$34114),$$$cjl32280.JSObject(val$34112$34115),{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSObject}});
                            next$val$34112();
                            return tmpvar$34116;
                        }
                        return $$$cl32209.getFinished();
                    }
                },{Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSObject}}}}).sequence;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.getXhrFields.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSObject}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getXhrFields']};};
            
            //MethodDefinition setXhrFields at jqueryajaxsettings.ceylon (626:1-636:1)
            $$jQueryAjaxSettingsAbs.setXhrFields=function setXhrFields(xhrFields$34117){
                var $$jQueryAjaxSettingsAbs=this;
                if(xhrFields$34117===undefined){xhrFields$34117=$$$cl32209.getEmpty();}
                
                //AttributeDeclaration xhrNative at jqueryajaxsettings.ceylon (627:2-627:39)
                var xhrNative$34118=$$$cjl32280.createJSObject();
                //'for' statement at jqueryajaxsettings.ceylon (628:2-632:2)
                var it$34119 = xhrFields$34117.iterator();
                var item$34120;while ((item$34120=it$34119.next())!==$$$cl32209.getFinished()){
                    var key$34121=item$34120.key;
                    var val$34122=item$34120.item;
                    /*Begin dynamic block*/
                    $$$cjl32280.objectDefineProperty(xhrNative$34118,key$34121,$$$cjl32280.DataDescriptor(true,false,true,true,val$34122.$native));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                $$jQueryAjaxSettingsAbs.$native.xhrFields=xhrNative$34118.$native;
                /*End dynamic block*/
            };$$jQueryAjaxSettingsAbs.setXhrFields.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'xhrFields',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cjl32280.JSString},Item:{t:$$$cjl32280.JSObject}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setXhrFields']};};
        })(JQueryAjaxSettingsAbs.$$.prototype);
    }
    return JQueryAjaxSettingsAbs;
}
exports.$init$JQueryAjaxSettingsAbs=$init$JQueryAjaxSettingsAbs;
$init$JQueryAjaxSettingsAbs();

//ClassDefinition JQueryAjaxSettings at jqueryajaxsettings.ceylon (640:0-645:0)
function JQueryAjaxSettings(n$34123, $$jQueryAjaxSettings){
    $init$JQueryAjaxSettings();
    if ($$jQueryAjaxSettings===undefined)$$jQueryAjaxSettings=new JQueryAjaxSettings.$$;
    $$jQueryAjaxSettings.n$34123_=n$34123;
    JQueryAjaxSettingsAbs($$jQueryAjaxSettings);
    
    //AttributeDeclaration native at jqueryajaxsettings.ceylon (641:1-641:29)
    /*Begin dynamic block*/
    $$jQueryAjaxSettings.$native=$$jQueryAjaxSettings.n$34123;/*End dynamic block*/
    return $$jQueryAjaxSettings;
}
JQueryAjaxSettings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQueryAjaxSettingsAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettings']};};
exports.JQueryAjaxSettings=JQueryAjaxSettings;
function $init$JQueryAjaxSettings(){
    if (JQueryAjaxSettings.$$===undefined){
        $$$cl32209.initTypeProto(JQueryAjaxSettings,'ceylon.js.jquery::JQueryAjaxSettings',$init$JQueryAjaxSettingsAbs());
        (function($$jQueryAjaxSettings){
            
            //AttributeDeclaration native at jqueryajaxsettings.ceylon (641:1-641:29)
            $$$cl32209.defineAttr($$jQueryAjaxSettings,'n$34123',function(){return this.n$34123_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JQueryAjaxSettings,d:['ceylon.js.jquery','JQueryAjaxSettings','$at','n']};});
        })(JQueryAjaxSettings.$$.prototype);
    }
    return JQueryAjaxSettings;
}
exports.$init$JQueryAjaxSettings=$init$JQueryAjaxSettings;
$init$JQueryAjaxSettings();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
