(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1","ceylon.js.language\/1.8.5","ceylon.js.dom\/4.0.0","ceylon.js.json\/1.0.0","ceylon.js.xmlhttprequest\/0.6.0"],"$mod-name":"ceylon.js.jquery","$mod-version":"1.10.0","ceylon.js.jquery":{"TweenAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getOff":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getOff"},"setOff":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"off"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setOff"},"test":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"test"},"getInterval":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getInterval"},"setInterval":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"interval"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setInterval"}},"$nm":"TweenAbs"},"DataType":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.jquery","$nm":"dataTypeXML"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeHtml"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeScript"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeJson"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeJsonp"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeText"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DataType"},"JQueryEventAbs":{"abstract":"1","super":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"EventAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"metaKey":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"metaKey"},"result":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"result"},"which":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"which"},"isPropagationStopped":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isPropagationStopped"},"isDefaultPrevented":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isDefaultPrevented"},"delegateTarget":{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[]},"$nm":"delegateTarget"},"data":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"data"},"relatedTarget":{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[]},"$nm":"relatedTarget"},"isImmediatePropogationStopped":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isImmediatePropogationStopped"},"pageX":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"pageX"},"pageY":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"pageY"},"namespace":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"namespace"}},"$nm":"JQueryEventAbs"},"visibleSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"visibleSelector"},"dataTypeXML":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeXML"},"targetSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"targetSelector"},"enabledSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"enabledSelector"},"fileSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"fileSelector"},"jQueryType":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryType"},"onlyChildSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"onlyChildSelector"},"jQueryError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryError"},"jQueryAjaxPrefilter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"dataTypes"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjaxPrefilter"},"jQueryHasData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryHasData"},"passwordSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"passwordSelector"},"jQueryParseHTML":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$def":"1","$nm":"context"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"keepScripts"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParseHTML"},"lastChildSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"lastChildSelector"},"jQueryUnique":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"arr"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryUnique"},"Callbacks":{"super":{"$pk":"ceylon.js.jquery","$nm":"CallbacksAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Callbacks"},"JQXHR":{"super":{"$pk":"ceylon.js.jquery","$nm":"JQXHRAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQXHR"},"lastSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"lastSelector"},"jQueryInArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"array"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryInArray"},"lastOfTypeSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"lastOfTypeSelector"},"CallbacksAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"fired":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"fired"},"remove":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"callbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"remove"},"fireWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"}]},"$mt":"prm","$def":"1","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fireWith"},"lock":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$mt":"mthd","$an":{"shared":[]},"$nm":"lock"},"empty":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$mt":"mthd","$an":{"shared":[]},"$nm":"empty"},"disable":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$mt":"mthd","$an":{"shared":[]},"$nm":"disable"},"locked":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"locked"},"add":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"callbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"add"},"has":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"has"},"fire":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fire"},"disabled":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"disabled"}},"$nm":"CallbacksAbs"},"jQueryExtendDeep":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"deep"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"target"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"objects"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryExtendDeep"},"jQueryMerge":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"first"},{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"second"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryMerge"},"jQueryAjax":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"url"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettingsBuilder"}]},"$mt":"prm","$def":"1","$nm":"settings"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjax"},"submitSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"submitSelector"},"jQuerySetData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQuerySetData"},"dataTypeHtml":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeHtml"},"AnimateOptions":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"queue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"specialEasing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.jquery","$nm":"Tween"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Tween"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Tween"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"step"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"progress"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"complete"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"done"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"fail"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"always"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toNative":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toNative"}},"$at":{"progress":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"progress"},"queue":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]}]},"$mt":"attr","$an":{"shared":[]},"$nm":"queue"},"duration":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"attr","$an":{"shared":[]},"$nm":"duration"},"easing":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"easing"},"fail":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"fail"},"specialEasing":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"specialEasing"},"complete":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"complete"},"done":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"done"},"always":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"always"},"step":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.jquery","$nm":"Tween"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Tween"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Tween"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"step"}},"$nm":"AnimateOptions"},"JSONPSettings":{"super":{"$pk":"ceylon.js.jquery","$nm":"JSONPSettingsAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSONPSettings"},"JQueryAjaxSettings":{"super":{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettingsAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQueryAjaxSettings"},"JQuery":{"super":{"$pk":"ceylon.js.jquery","$nm":"JQueryAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQuery"},"jqThis":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jqThis"},"focusSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"focusSelector"},"emptySelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"emptySelector"},"createJSONPSettings":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.jquery","$nm":"JSONPSettings"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"jsonp"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"jsonpCallback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSONPSettings"},"inputSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"inputSelector"},"jQueryIsArray":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsArray"},"jQuerySetQueue":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"callbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQuerySetQueue"},"jQueryIsNumeric":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsNumeric"},"jQueryGrep":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"array"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"invert"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGrep"},"JQueryAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"nextAll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"nextAll"},"setPropEntries":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPropEntries"},"animate":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"properties"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"animate"},"appendHTML":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendHTML"},"ready":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ready"},"undelegateEvents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"undelegateEvents"},"hide":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hide"},"prevAll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prevAll"},"wrapInnerCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapInnerCallback"},"setOffsetCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Coordinates"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.jquery","$nm":"Coordinates"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Coordinates"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Coordinates"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setOffsetCallback"},"showOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"showOptions"},"clone":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"withDataAndEvents"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"deepWithDataAndEvents"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"clone"},"removeProp":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"propertyName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeProp"},"prependHTML":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prependHTML"},"contents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"contents"},"serialize":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"serialize"},"parent":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parent"},"outerWidth":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"includeMargin"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"outerWidth"},"prev":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prev"},"wrapInner":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"wrappingElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapInner"},"removeAttr":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeAttr"},"setOffset":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.jquery","$nm":"Coordinates"}]},"$mt":"prm","$def":"1","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setOffset"},"addBack":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addBack"},"mouseenter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseenter"},"load":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"data"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"load"},"each":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"each"},"replaceAll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceAll"},"toggleClassName":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"swit"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleClassName"},"getVal":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getVal"},"setCss":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"property"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Number"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCss"},"before":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"before"},"next":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"next"},"fadeOut":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeOut"},"setCssJson":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"property"},{"$t":{"$md":"ceylon.js.json","$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCssJson"},"ajaxError":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxError"},"isSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isSelector"},"getAttr":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getAttr"},"mousemove":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mousemove"},"prependTo":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prependTo"},"map":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"},{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"map"},"getHtml":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getHtml"},"outerHeight":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"includeMargin"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"outerHeight"},"fadeTo":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"duration"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"prm","$nm":"opacity"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeTo"},"ajaxStart":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxStart"},"stopName":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"queue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"clearQueue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"jumpToEnd"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"stopName"},"closestjQuery":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"prm","$nm":"jq"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"closestjQuery"},"slice":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"start"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slice"},"ajaxComplete":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxComplete"},"eq":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"eq"},"focusout":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"focusout"},"keyup":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"keyup"},"change":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"change"},"setVal":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setVal"},"has":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"has"},"after":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"after"},"removeClassCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeClassCallback"},"slideUp":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideUp"},"fadeIn":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeIn"},"closest":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"closest"},"setValCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setValCallback"},"getProp":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getProp"},"append":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"append"},"index":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"index"},"mousedown":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mousedown"},"get":{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"get"},"submit":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"submit"},"select":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"select"},"keydown":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"keydown"},"toggleOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleOptions"},"ajaxSend":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxSend"},"finish":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"queue"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"finish"},"dblclick":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dblclick"},"afterJQuery":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQuery"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"afterJQuery"},"pushStack":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"elements"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"name"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"arguments"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"pushStack"},"bindEvents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bindEvents"},"mouseup":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseup"},"setWidthCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setWidthCallback"},"wrapAll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"wrappingElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapAll"},"setQueue":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"newQueue"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setQueue"},"children":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"children"},"closestElement":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"closestElement"},"mouseleave":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseleave"},"dequeue":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dequeue"},"setScrollTop":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setScrollTop"},"getHeight":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getHeight"},"animateOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"properties"},{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"animateOptions"},"setCssCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"property"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"val"}]],"$mt":"prm","$pt":"f","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"setCssCallback"},"prepend":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prepend"},"promise":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"type"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$def":"1","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"promise"},"setAttr":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttr"},"siblings":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"siblings"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"siblings"},"removeClass":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeClass"},"off":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"events"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"off"},"bind":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"preventBubble"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bind"},"toggleShowOrHide":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"showOrHide"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleShowOrHide"},"addElements":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"prm","seq":"1","$nm":"elements","$min1":"1"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addElements"},"clearQueue":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"clearQueue"},"toggleClassCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"swit"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleClassCallback"},"setPropCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"propertyName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPropCallback"},"slideToggle":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideToggle"},"empty":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"empty"},"setAttrEntries":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttrEntries"},"setProp":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"propertyName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setProp"},"on":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"events"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"on"},"focus":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"focus"},"focusin":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"focusin"},"setDataEntries":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDataEntries"},"resizeTrigger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"resizeTrigger"},"setHtml":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"html"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHtml"},"hoverSingle":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handlerInOut"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hoverSingle"},"removeData":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"names"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeData"},"not":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"not"},"innerWidth":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"innerWidth"},"delegateEvents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"delegateEvents"},"delay":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"duration"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"delay"},"afterElements":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"afterElements"},"isCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isCallback"},"addClass":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addClass"},"position":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Coordinates"},"$mt":"mthd","$an":{"shared":[]},"$nm":"position"},"remove":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"remove"},"click":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"click"},"nextUntil":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"nextUntil"},"delegate":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"delegate"},"appendCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendCallback"},"setAttrCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttrCallback"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"slideUpOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideUpOptions"},"end":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"end"},"serializeArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[]},"$nm":"serializeArray"},"trigger":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQueryEvent"}]},"$mt":"prm","$nm":"event"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"extraParameters"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"trigger"},"toArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toArray"},"insertBefore":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertBefore"},"mouseout":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseout"},"slideToggleOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideToggleOptions"},"filterCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"filterCallback"},"innerHeight":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"innerHeight"},"ajaxStop":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxStop"},"setTextCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTextCallback"},"prevUntil":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prevUntil"},"mouseover":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseover"},"setHeightCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHeightCallback"},"slideDownOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideDownOptions"},"unwrap":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"unwrap"},"last":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"last"},"show":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"show"},"setText":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"textString"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setText"},"jquery":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jquery"},"toggleClass":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"swit"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleClass"},"resize":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"resize"},"fadeToggleOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeToggleOptions"},"getScrollLeft":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getScrollLeft"},"getWidth":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getWidth"},"fadeOutOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeOutOptions"},"ajaxSuccess":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxSuccess"},"getQueue":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns an array of functions"]},"$nm":"getQueue"},"replaceWithCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceWithCallback"},"wrap":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"wrappingElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrap"},"detach":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"detach"},"wrapCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapCallback"},"scroll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"scroll"},"unbind":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},{"$pk":"ceylon.js.jquery","$nm":"JQueryEvent"}]},"$mt":"prm","$nm":"eventType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"unbind"},"fadeToggle":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeToggle"},"getData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"keypress":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"keypress"},"setHeight":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHeight"},"bindCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"eventData"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bindCallback"},"replaceWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"newContent"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceWith"},"filter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"filter"},"undelegateCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"undelegateCallback"},"stop":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"clearQueue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"jumpToEnd"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"stop"},"beforeCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"beforeCallback"},"parents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parents"},"slideDown":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideDown"},"unbindCallaback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"eventType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"unbindCallaback"},"getCss":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"prm","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getCss"},"one":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"events"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"one"},"setScrollLeft":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setScrollLeft"},"blur":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"blur"},"add":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"append"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"add"},"getText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getText"},"toggle":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggle"},"parentsUntil":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parentsUntil"},"getScrollTop":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getScrollTop"},"die":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"die"},"setWidth":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"width"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setWidth"},"setHtmlCallback":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHtmlCallback"},"undelegate":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"namespace"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"undelegate"},"find":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"find"},"error":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"error"},"appendTo":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendTo"},"insertAfter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertAfter"},"hideOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hideOptions"},"hover":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handlerIn"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handlerOut"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hover"},"fadeInOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeInOptions"},"setData":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"},"hasClass":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasClass"},"addSelector":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addSelector"},"beforeHTML":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"beforeHTML"},"offsetParent":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"offsetParent"},"addClassCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"currentClass"}]],"$mt":"prm","$pt":"f","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"currentClass"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"addClassCallback"},"getOffset":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Coordinates"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getOffset"},"setQueueCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"next"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setQueueCallback"},"first":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"first"},"prependCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prependCallback"}},"$nm":"JQueryAbs"},"textSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"textSelector"},"jQueryProxyName":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSFunction"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"additionalArguments"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryProxyName"},"evenSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"evenSelector"},"jQueryPost":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"dataType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryPost"},"jQueryGetQueue":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns JSFunctions[]"]},"$nm":"jQueryGetQueue"},"jQueryEach":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"collection"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryEach"},"jQueryDeferred":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"beforeStart"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryDeferred"},"parentSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"parentSelector"},"JQueryAjaxSettingsAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getXhr":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Anything()?"]},"$nm":"getXhr"},"setCache":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"cache"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCache"},"setContext":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setContext"},"getContents":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"RegExp"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getContents"},"getJsonp":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JSONPSettings"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getJsonp"},"setDataFilter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"datafilter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDataFilter"},"getContext":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getContext"},"setIsLocal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"local"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setIsLocal"},"setContentType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"contentType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setContentType"},"getProcessData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getProcessData"},"setAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"async"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAsync"},"setError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"datafilter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setError"},"getComplete":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns array of Anything(JQXHR, String) or null"]},"$nm":"getComplete"},"getDataType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDataType"},"setHeaders":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"headers"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHeaders"},"setScriptCharset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"scriptCharset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setScriptCharset"},"setContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"RegExp"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"contents"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setContents"},"setCrossDomain":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"crossDomain"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCrossDomain"},"setType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"type"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setType"},"getAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAsync"},"setStatusCode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSNumber"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"statusCodes"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setStatusCode"},"getPassword":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getPassword"},"getIfModified":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getIfModified"},"setDataType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dataType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDataType"},"getJsonpCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns String|String()?"]},"$nm":"getJsonpCallback"},"setMimeType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"mimeType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMimeType"},"setXhrFields":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"xhrFields"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setXhrFields"},"getData":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"getBeforeSend":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Boolean(JQXHR, JQueryAjaxSettings)?"]},"$nm":"getBeforeSend"},"setBeforeSend":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"beforeSend"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setBeforeSend"},"getTraditional":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTraditional"},"getUsername":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUsername"},"getXhrFields":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getXhrFields"},"getStatusCode":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Object: JSNumber -> Anything(JQXHR, String?, String?)|Anything(JQXHR, String?, String?)"]},"$nm":"getStatusCode"},"getMimeType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMimeType"},"getContentType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getContentType"},"getDataFilter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Anything(String, String)?"]},"$nm":"getDataFilter"},"setUsername":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"username"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUsername"},"getSuccess":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns Anything(Anything, String, JQXHR)[]"]},"$nm":"getSuccess"},"getType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getType"},"getError":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns Anything(JQXHR, String?, String?)[]"]},"$nm":"getError"},"setUrl":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUrl"},"getHeaders":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getHeaders"},"setIfModified":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"modified"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setIfModified"},"getAccepts":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAccepts"},"setComplete":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setComplete"},"setPassword":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"password"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPassword"},"getCache":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getCache"},"setConverters":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"converters"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setConverters"},"setSuccess":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"success"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setSuccess"},"getCrossDomain":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getCrossDomain"},"getIsLocal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getIsLocal"},"setXhr":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"xhr"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setXhr"},"getConverters":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getConverters"},"setJsonpCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setJsonpCallback"},"setData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"},"getScriptCharset":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getScriptCharset"},"setGlobal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"global"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setGlobal"},"getUrl":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUrl"},"setTraditional":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"traditional"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTraditional"},"getTimeout":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTimeout"},"setAccepts":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"accepts"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAccepts"},"setTimeout":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"timeout"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTimeout"},"getGlobal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getGlobal"},"setJsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"JSONPSettings"},"$mt":"prm","$nm":"jsonp"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setJsonp"},"setProcessData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"processData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setProcessData"}},"$nm":"JQueryAjaxSettingsAbs"},"dataTypeJson":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeJson"},"rootSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"rootSelector"},"jQueryGetData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGetData"},"jQueryGetJSON":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGetJSON"},"JQueryEvent":{"super":{"$pk":"ceylon.js.jquery","$nm":"JQueryEventAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQueryEvent"},"Promise":{"super":{"$pk":"ceylon.js.jquery","$nm":"PromiseAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Promise"},"radioSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"radioSelector"},"jQueryIsPlainObject":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsPlainObject"},"disabledSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"disabledSelector"},"selectedSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"selectedSelector"},"jQueryWhen":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Deferred"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"deferreds"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryWhen"},"jq":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]}]},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jq"},"jQueryIsFunction":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsFunction"},"jQueryNoConflict":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"removeAll"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryNoConflict"},"JQueryAjaxSettingsBuilder":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"async"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"cache"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"contentType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"context"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"crossDomain"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"data"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"DataType"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"dataType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"global"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"ifModified"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"isLocal"},{"$t":{"$pk":"ceylon.js.jquery","$nm":"JSONPOptions"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonp"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonpCallback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"mimeType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"password"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"processData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"scriptCharset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"timeout"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"traditional"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"type"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"url"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"username"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toNative":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toNative"}},"$at":{"headers":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"headers"},"data":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"data"},"xhrFields":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"xhrFields"},"contentType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"contentType"},"type":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"type"},"password":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"password"},"statusCode":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"statusCode"},"username":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"username"},"complete":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"complete"},"dataFilter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"dataFilter"},"processData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"processData"},"crossDomain":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"crossDomain"},"accepts":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"accepts"},"mimeType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"mimeType"},"jsonpCallback":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]}]},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonpCallback"},"error":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"error"},"cache":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"cache"},"contents":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"RegExp"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"contents"},"global":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"global"},"scriptCharset":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"scriptCharset"},"traditional":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"traditional"},"converters":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"converters"},"async":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"async"},"url":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"url"},"ifModified":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"ifModified"},"dataType":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"DataType"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[]},"$nm":"dataType"},"jsonp":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JSONPOptions"},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonp"},"context":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"context"},"beforeSend":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"beforeSend"},"xhr":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"xhr"},"isLocal":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"isLocal"},"success":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"success"},"timeout":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"timeout"}},"$nm":"JQueryAjaxSettingsBuilder"},"DeferredAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"progress":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"progressCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"progress"},"thenFilter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"doneFilter"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"failFilter"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"progressFilter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"thenFilter"},"resolve":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"resolve"},"rejectWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"rejectWith"},"reject":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"reject"},"notifyWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"notifyWith"},"fail":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"failCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fail"},"resolveWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"resolveWith"},"notify":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"notify"},"done":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"doneCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"done"},"state":{"$t":{"$pk":"ceylon.js.jquery","$nm":"DeferredState"},"$mt":"mthd","$an":{"shared":[]},"$nm":"state"},"promise":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"}]},"$mt":"prm","$def":"1","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"promise"},"always":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"alwaysCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"always"}},"$nm":"DeferredAbs"},"animatedSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"animatedSelector"},"Coordinates":{"super":{"$pk":"ceylon.js.jquery","$nm":"CoordinatesAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Coordinates"},"$pkg-shared":"1","jQueryFxOff":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryFxOff"},"jQueryDequeue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryDequeue"},"jQueryProxy":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSFunction"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"func"},{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"additionalArguments"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryProxy"},"checkedSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"checkedSelector"},"firstOfTypeSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"firstOfTypeSelector"},"jQueryTrim":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"prm","$nm":"str"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryTrim"},"resetSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"resetSelector"},"jQueryNow":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryNow"},"oddSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"oddSelector"},"Deferred":{"super":{"$pk":"ceylon.js.jquery","$nm":"DeferredAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Deferred"},"hiddenSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"hiddenSelector"},"jQueryGlobalEval":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"code"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGlobalEval"},"jQueryHoldReady":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"hold"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryHoldReady"},"JSONPSettingsAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setIsJsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"jsonp"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setIsJsonp"},"getCallback":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getCallback"},"getIsJsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getIsJsonp"},"setCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCallback"}},"$nm":"JSONPSettingsAbs"},"jQueryExtend":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"target"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"objects"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryExtend"},"jQueryMapObject":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryMapObject"},"jQueryCallbacks":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"flags"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryCallbacks"},"JQXHRAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getAllResponseHeaders":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAllResponseHeaders"},"status":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"status"},"responseXML":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Document"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"responseXML"},"done":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"done"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"done"},"doThen":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"done"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"fail"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"doThen"},"readyState":{"$t":{"$md":"ceylon.js.xmlhttprequest","$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"mthd","$an":{"shared":[]},"$nm":"readyState"},"statusText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"statusText"},"responseText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"responseText"},"overrideMimeType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"mime"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"overrideMimeType"},"always":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"always"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"always"},"statusCode":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"statusCode"},"fail":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"fail"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fail"},"getResponseHeader":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getResponseHeader"},"setRequestHeader":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setRequestHeader"},"abort":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"abort"}},"$nm":"JQXHRAbs"},"jQueryAjaxSetup":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettingsBuilder"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjaxSetup"},"createCoordinates":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Coordinates"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]}]},"$mt":"prm","$nm":"top"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]}]},"$mt":"prm","$nm":"left"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createCoordinates"},"buttonSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"buttonSelector"},"jQueryContains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"container"},{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"contained"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryContains"},"jQueryMapArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"array"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryMapArray"},"jQueryNoop":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryNoop"},"allSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"allSelector"},"jQueryAjaxTransport":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dataType"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjaxTransport"},"JSONPOptions":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonp"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonpCallback"}],"$mt":"cls","$an":{"shared":[]},"$at":{"jsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonp"},"jsonpCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonpCallback"}},"$nm":"JSONPOptions"},"deferredStateResolved":{"super":{"$pk":"ceylon.js.jquery","$nm":"DeferredState"},"$mt":"obj","$an":{"shared":[]},"$nm":"deferredStateResolved"},"deferredStatePending":{"super":{"$pk":"ceylon.js.jquery","$nm":"DeferredState"},"$mt":"obj","$an":{"shared":[]},"$nm":"deferredStatePending"},"jQueryFxInterval":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryFxInterval"},"deferredStateRejected":{"super":{"$pk":"ceylon.js.jquery","$nm":"DeferredState"},"$mt":"obj","$an":{"shared":[]},"$nm":"deferredStateRejected"},"checkboxSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"checkboxSelector"},"jQueryIsXMLDoc":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsXMLDoc"},"jQueryParam":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$nm":"obj"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"traditional"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParam"},"jQueryIsWindow":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsWindow"},"dataTypeText":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeText"},"firstSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"firstSelector"},"jQueryParseJSON":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"json"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParseJSON"},"jQueryGet":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"dataType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGet"},"jQueryCssHooks":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryCssHooks"},"jQueryRemoveData":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryRemoveData"},"jQueryParseXML":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParseXML"},"jQueryFnExtend":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryFnExtend"},"CoordinatesAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setTop":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$mt":"prm","$nm":"top"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTop"},"getLeft":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getLeft"},"setLeft":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$mt":"prm","$nm":"left"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setLeft"},"getTop":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTop"}},"$nm":"CoordinatesAbs"},"onlyOfTypeSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"onlyOfTypeSelector"},"DeferredState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.jquery","$nm":"deferredStatePending"},{"$pk":"ceylon.js.jquery","$nm":"deferredStateResolved"},{"$pk":"ceylon.js.jquery","$nm":"deferredStateRejected"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DeferredState"},"dataTypeJsonp":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeJsonp"},"PromiseAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"thenFilter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"doneFilter"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"failFilter"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"progressFilter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"thenFilter"},"fail":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"failCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fail"},"done":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"doneCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"done"},"always":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"alwaysCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"always"}},"$nm":"PromiseAbs"},"Tween":{"super":{"$pk":"ceylon.js.jquery","$nm":"TweenAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Tween"},"imageSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"imageSelector"},"jqElems":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"prm","seq":"1","$nm":"elems","$min1":"1"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jqElems"},"firstChildSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"firstChildSelector"},"jQueryIsEmptyObject":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsEmptyObject"},"dataTypeScript":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeScript"},"jQueryGetScript":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGetScript"},"headerSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"headerSelector"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6.1');
var $$$cjl361=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl1.$addmod$($$$cjl361,'ceylon.js.language/1.8.5');
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
    $$$cl1.defineAttr($$animateOptions,'duration',function(){return this.duration_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','duration']};});
    $$$cl1.defineAttr($$animateOptions,'easing',function(){return this.easing_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','easing']};});
    $$$cl1.defineAttr($$animateOptions,'queue',function(){return this.queue_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Boolean},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','queue']};});
    $$$cl1.defineAttr($$animateOptions,'specialEasing',function(){return this.specialEasing_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','specialEasing']};});
    $$$cl1.defineAttr($$animateOptions,'step',function(){return this.step_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Tween},Element:{t:Tween}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:Tween}]}}},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','step']};});
    $$$cl1.defineAttr($$animateOptions,'progress',function(){return this.progress_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:Promise},Element:{ t:'u', l:[{t:Promise},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','progress']};});
    $$$cl1.defineAttr($$animateOptions,'complete',function(){return this.complete_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','complete']};});
    $$$cl1.defineAttr($$animateOptions,'done',function(){return this.done_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},First:{t:Promise},Element:{ t:'u', l:[{t:Promise},{t:$$$cl1.Boolean}]}}},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','done']};});
    $$$cl1.defineAttr($$animateOptions,'fail',function(){return this.fail_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},First:{t:Promise},Element:{ t:'u', l:[{t:Promise},{t:$$$cl1.Boolean}]}}},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','fail']};});
    $$$cl1.defineAttr($$animateOptions,'always',function(){return this.always_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},First:{t:Promise},Element:{ t:'u', l:[{t:Promise},{t:$$$cl1.Boolean}]}}},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','always']};});
    function toNative(){
        var native$1094;
        /*Begin dynamic block*/
        native$1094=(typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'13:12-13:17','animateoptions.ceylon'):Object)();var d$1095;
        if((d$1095=$$animateOptions.duration)!==null){
            native$1094.duration=d$1095;
        }var e$1096;
        if((e$1096=$$animateOptions.easing)!==null){
            native$1094.easing=e$1096.valueOf();
        }var q$1097;
        if((q$1097=$$animateOptions.queue)!==null){
            native$1094.queue=(typeof e==='undefined'||e===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: e")),'21:19-21:19','animateoptions.ceylon'):e);
        }var sE$1098;
        if((sE$1098=$$animateOptions.specialEasing)!==null){
            var specialEasingNative$1099=$$$cjl361.createJSObject();
            $prop$getSpecialEasingNative$1099={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSObject},d:['ceylon.js.jquery','AnimateOptions','$m','toNative','$at','specialEasingNative']};}};
            $prop$getSpecialEasingNative$1099.get=function(){return specialEasingNative$1099};
            var it$1100 = sE$1098.iterator();
            var item$1101;while ((item$1101=it$1100.next())!==$$$cl1.getFinished()){
                var key$1102=item$1101.key;
                var val$1103=item$1101.item;
                $$$cjl361.objectDefineProperty(specialEasingNative$1099,(tmpvar$1104=$$$cjl361.createJSString(key$1102),$$$cl1.isOfType(tmpvar$1104,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]})?tmpvar$1104:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'27:48-27:66','animateoptions.ceylon')),$$$cjl361.DataDescriptor(true,false,true,true,val$1103));
            }
            native$1094.specialEasing=specialEasingNative$1099;
        }var s$1105;
        if((s$1105=$$animateOptions.step)!==null){
            native$1094.step=$$$cl1.$JsCallable(s$1105/*TODO: callable targs 6*/);
        }var p$1106;
        if((p$1106=$$animateOptions.progress)!==null){
            native$1094.progress=$$$cl1.$JsCallable(p$1106/*TODO: callable targs 6*/);
        }var c$1107;
        if((c$1107=$$animateOptions.complete)!==null){
            native$1094.complete=$$$cl1.$JsCallable(c$1107/*TODO: callable targs 6*/);
        }var d$1108;
        if((d$1108=$$animateOptions.done)!==null){
            native$1094.done=$$$cl1.$JsCallable(d$1108/*TODO: callable targs 6*/);
        }var f$1109;
        if((f$1109=$$animateOptions.fail)!==null){
            native$1094.fail=$$$cl1.$JsCallable(f$1109/*TODO: callable targs 6*/);
        }var a$1110;
        if((a$1110=$$animateOptions.always)!==null){
            native$1094.always=$$$cl1.$JsCallable(a$1110/*TODO: callable targs 6*/);
        }return $$$cjl361.JSObject(native$1094);
        /*End dynamic block*/
    }
    $$animateOptions.toNative=toNative;
    toNative.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSObject},$ps:[],$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$m','toNative']};};
    return $$animateOptions;
}
AnimateOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions']};};
exports.AnimateOptions=AnimateOptions;
function $init$AnimateOptions(){
    if (AnimateOptions.$$===undefined){
        $$$cl1.initTypeProto(AnimateOptions,'ceylon.js.jquery::AnimateOptions',$$$cl1.Basic);
    }
    return AnimateOptions;
}
exports.$init$AnimateOptions=$init$AnimateOptions;
$init$AnimateOptions();
function CallbacksAbs($$callbacksAbs){
    $init$CallbacksAbs();
    if ($$callbacksAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$callbacksAbs);
    function add(callbacks$1111){
        if(callbacks$1111===undefined){callbacks$1111=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.add(/*NULL PARAM!*/callbacks$1111));
        /*End dynamic block*/
    }
    $$callbacksAbs.add=add;
    add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'callbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','add']};};
    function disable(){
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.disable());
        /*End dynamic block*/
    }
    $$callbacksAbs.disable=disable;
    disable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','disable']};};
    function disabled(){
        /*Begin dynamic block*/
        if($$callbacksAbs.$native.disabled()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$callbacksAbs.disabled=disabled;
    disabled.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','disabled']};};
    function empty(){
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.empty());
        /*End dynamic block*/
    }
    $$callbacksAbs.empty=empty;
    empty.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','empty']};};
    function fire(args$1112){
        if(args$1112===undefined){args$1112=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.fire(/*NULL PARAM!*/args$1112));
        /*End dynamic block*/
    }
    $$callbacksAbs.fire=fire;
    fire.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','fire']};};
    function fired(){
        /*Begin dynamic block*/
        if($$callbacksAbs.$native.fired()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$callbacksAbs.fired=fired;
    fired.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','fired']};};
    $$callbacksAbs.fireWith$defs$context=function(context$1113,args$1114){return null;};
    function fireWith(context$1113,args$1114){
        if(context$1113===undefined){context$1113=$$callbacksAbs.fireWith$defs$context(context$1113,args$1114);}
        if(args$1114===undefined){args$1114=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.fireWith(/*NULL PARAM!*/context$1113/*NULL PARAM!*/,args$1114));
        /*End dynamic block*/
    }
    $$callbacksAbs.fireWith=fireWith;
    fireWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Anything}]},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','fireWith']};};
    function has(callback$1115){
        /*Begin dynamic block*/
        if($$callbacksAbs.$native.has(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1115,[],{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}))){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$callbacksAbs.has=has;
    has.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','has']};};
    function lock(){
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.lock());
        /*End dynamic block*/
    }
    $$callbacksAbs.lock=lock;
    lock.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','lock']};};
    function locked(){
        /*Begin dynamic block*/
        if($$callbacksAbs.$native.locked()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$callbacksAbs.locked=locked;
    locked.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','locked']};};
    function remove(callbacks$1116){
        if(callbacks$1116===undefined){callbacks$1116=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.remove(/*NULL PARAM!*/callbacks$1116));
        /*End dynamic block*/
    }
    $$callbacksAbs.remove=remove;
    remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'callbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','remove']};};
    return $$callbacksAbs;
}
CallbacksAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','CallbacksAbs']};};
exports.CallbacksAbs=CallbacksAbs;
function $init$CallbacksAbs(){
    if (CallbacksAbs.$$===undefined){
        $$$cl1.initTypeProto(CallbacksAbs,'ceylon.js.jquery::CallbacksAbs',$$$cjl361.JSObjectAbs);
    }
    return CallbacksAbs;
}
exports.$init$CallbacksAbs=$init$CallbacksAbs;
$init$CallbacksAbs();
function Callbacks(n$1117, $$callbacks){
    $init$Callbacks();
    if ($$callbacks===undefined)$$callbacks=new Callbacks.$$;
    $$callbacks.n$1117_=n$1117;
    CallbacksAbs($$callbacks);
    $$$cl1.defineAttr($$callbacks,'n$1117',function(){return this.n$1117_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Callbacks,d:['ceylon.js.jquery','Callbacks','$at','n']};});
    $$callbacks.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Callbacks,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','Callbacks','$at','native']};}};
    /*Begin dynamic block*/
    $$callbacks.$native=n$1117;/*End dynamic block*/
    return $$callbacks;
}
Callbacks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CallbacksAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','Callbacks']};};
exports.Callbacks=Callbacks;
function $init$Callbacks(){
    if (Callbacks.$$===undefined){
        $$$cl1.initTypeProto(Callbacks,'ceylon.js.jquery::Callbacks',$init$CallbacksAbs());
    }
    return Callbacks;
}
exports.$init$Callbacks=$init$Callbacks;
$init$Callbacks();
function createCoordinates(top$1118,left$1119){
    /*Begin dynamic block*/
    var coor$1120=(typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'5:17-5:22','coordinates.ceylon'):Object)();
    $prop$getCoor$1120={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','createCoordinates','$at','coor']};}};
    $prop$getCoor$1120.get=function(){return coor$1120};
    var t$1121;
    if((t$1121=top$1118)!==null){
        coor$1120.top=t$1121;
    }var l$1122;
    if((l$1122=left$1119)!==null){
        coor$1120.left=l$1122;
    }return Coordinates(coor$1120);
    /*End dynamic block*/
}
exports.createCoordinates=createCoordinates;
createCoordinates.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Coordinates},$ps:[{$nm:'top',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Float}]}]},$an:function(){return[];}},{$nm:'left',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Float}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','createCoordinates']};};
function CoordinatesAbs($$coordinatesAbs){
    $init$CoordinatesAbs();
    if ($$coordinatesAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$coordinatesAbs);
    function getTop(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$coordinatesAbs.$native.top);
        /*End dynamic block*/
    }
    $$coordinatesAbs.getTop=getTop;
    getTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:CoordinatesAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CoordinatesAbs','$m','getTop']};};
    function setTop(top$1123){
        /*Begin dynamic block*/
        $$coordinatesAbs.$native.top=top$1123;
        /*End dynamic block*/
    }
    $$coordinatesAbs.setTop=setTop;
    setTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'top',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]},$an:function(){return[];}}],$cont:CoordinatesAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CoordinatesAbs','$m','setTop']};};
    function getLeft(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$coordinatesAbs.$native.left);
        /*End dynamic block*/
    }
    $$coordinatesAbs.getLeft=getLeft;
    getLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:CoordinatesAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CoordinatesAbs','$m','getLeft']};};
    function setLeft(left$1124){
        /*Begin dynamic block*/
        $$coordinatesAbs.$native.left=left$1124;
        /*End dynamic block*/
    }
    $$coordinatesAbs.setLeft=setLeft;
    setLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'left',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]},$an:function(){return[];}}],$cont:CoordinatesAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CoordinatesAbs','$m','setLeft']};};
    return $$coordinatesAbs;
}
CoordinatesAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','CoordinatesAbs']};};
exports.CoordinatesAbs=CoordinatesAbs;
function $init$CoordinatesAbs(){
    if (CoordinatesAbs.$$===undefined){
        $$$cl1.initTypeProto(CoordinatesAbs,'ceylon.js.jquery::CoordinatesAbs',$$$cjl361.JSObjectAbs);
    }
    return CoordinatesAbs;
}
exports.$init$CoordinatesAbs=$init$CoordinatesAbs;
$init$CoordinatesAbs();
function Coordinates(n$1125, $$coordinates){
    $init$Coordinates();
    if ($$coordinates===undefined)$$coordinates=new Coordinates.$$;
    $$coordinates.n$1125_=n$1125;
    CoordinatesAbs($$coordinates);
    $$$cl1.defineAttr($$coordinates,'n$1125',function(){return this.n$1125_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Coordinates,d:['ceylon.js.jquery','Coordinates','$at','n']};});
    $$coordinates.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Coordinates,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','Coordinates','$at','native']};}};
    /*Begin dynamic block*/
    $$coordinates.$native=n$1125;/*End dynamic block*/
    return $$coordinates;
}
Coordinates.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CoordinatesAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','Coordinates']};};
exports.Coordinates=Coordinates;
function $init$Coordinates(){
    if (Coordinates.$$===undefined){
        $$$cl1.initTypeProto(Coordinates,'ceylon.js.jquery::Coordinates',$init$CoordinatesAbs());
    }
    return Coordinates;
}
exports.$init$Coordinates=$init$Coordinates;
$init$Coordinates();
function DeferredState(name$1126, $$deferredState){
    $init$DeferredState();
    if ($$deferredState===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$deferredState.name$1126_=name$1126;
    $$$cl1.defineAttr($$deferredState,'name$1126',function(){return this.name$1126_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DeferredState,d:['ceylon.js.jquery','DeferredState','$at','name']};});
    return $$deferredState;
}
DeferredState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','DeferredState']};};
exports.DeferredState=DeferredState;
function $init$DeferredState(){
    if (DeferredState.$$===undefined){
        $$$cl1.initTypeProto(DeferredState,'ceylon.js.jquery::DeferredState',$$$cl1.Basic);
    }
    return DeferredState;
}
exports.$init$DeferredState=$init$DeferredState;
$init$DeferredState();
function deferredStatePending$1127(){
    var $$deferredStatePending=new deferredStatePending$1127.$$;
    DeferredState($$$cl1.String("pending",7),$$deferredStatePending);
    return $$deferredStatePending;
}
function $init$deferredStatePending$1127(){
    if (deferredStatePending$1127.$$===undefined){
        $$$cl1.initTypeProto(deferredStatePending$1127,'ceylon.js.jquery::deferredStatePending',$init$DeferredState());
    }
    return deferredStatePending$1127;
}
exports.$init$deferredStatePending$1127=$init$deferredStatePending$1127;
$init$deferredStatePending$1127();
var deferredStatePending$1128;
function getDeferredStatePending(){
    if (deferredStatePending$1128===undefined)deferredStatePending$1128=$init$deferredStatePending$1127()();
    return deferredStatePending$1128;
}
exports.getDeferredStatePending=getDeferredStatePending;
getDeferredStatePending.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:deferredStatePending$1127},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','deferredStatePending']};};
$prop$getDeferredStatePending={get:getDeferredStatePending,$$metamodel$$:getDeferredStatePending.$$metamodel$$};
exports.$prop$getDeferredStatePending=$prop$getDeferredStatePending;
function deferredStateResolved$1129(){
    var $$deferredStateResolved=new deferredStateResolved$1129.$$;
    DeferredState($$$cl1.String("resolved",8),$$deferredStateResolved);
    return $$deferredStateResolved;
}
function $init$deferredStateResolved$1129(){
    if (deferredStateResolved$1129.$$===undefined){
        $$$cl1.initTypeProto(deferredStateResolved$1129,'ceylon.js.jquery::deferredStateResolved',$init$DeferredState());
    }
    return deferredStateResolved$1129;
}
exports.$init$deferredStateResolved$1129=$init$deferredStateResolved$1129;
$init$deferredStateResolved$1129();
var deferredStateResolved$1130;
function getDeferredStateResolved(){
    if (deferredStateResolved$1130===undefined)deferredStateResolved$1130=$init$deferredStateResolved$1129()();
    return deferredStateResolved$1130;
}
exports.getDeferredStateResolved=getDeferredStateResolved;
getDeferredStateResolved.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:deferredStateResolved$1129},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','deferredStateResolved']};};
$prop$getDeferredStateResolved={get:getDeferredStateResolved,$$metamodel$$:getDeferredStateResolved.$$metamodel$$};
exports.$prop$getDeferredStateResolved=$prop$getDeferredStateResolved;
function deferredStateRejected$1131(){
    var $$deferredStateRejected=new deferredStateRejected$1131.$$;
    DeferredState($$$cl1.String("rejected",8),$$deferredStateRejected);
    return $$deferredStateRejected;
}
function $init$deferredStateRejected$1131(){
    if (deferredStateRejected$1131.$$===undefined){
        $$$cl1.initTypeProto(deferredStateRejected$1131,'ceylon.js.jquery::deferredStateRejected',$init$DeferredState());
    }
    return deferredStateRejected$1131;
}
exports.$init$deferredStateRejected$1131=$init$deferredStateRejected$1131;
$init$deferredStateRejected$1131();
var deferredStateRejected$1132;
function getDeferredStateRejected(){
    if (deferredStateRejected$1132===undefined)deferredStateRejected$1132=$init$deferredStateRejected$1131()();
    return deferredStateRejected$1132;
}
exports.getDeferredStateRejected=getDeferredStateRejected;
getDeferredStateRejected.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:deferredStateRejected$1131},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','deferredStateRejected']};};
$prop$getDeferredStateRejected={get:getDeferredStateRejected,$$metamodel$$:getDeferredStateRejected.$$metamodel$$};
exports.$prop$getDeferredStateRejected=$prop$getDeferredStateRejected;
function DeferredAbs($$deferredAbs){
    $init$DeferredAbs();
    if ($$deferredAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$deferredAbs);
    function always(alwaysCallbacks$1133){
        if(alwaysCallbacks$1133===undefined){alwaysCallbacks$1133=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.always(/*NULL PARAM!*/alwaysCallbacks$1133));
        /*End dynamic block*/
    }
    $$deferredAbs.always=always;
    always.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'alwaysCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','always']};};
    function done(doneCallbacks$1134){
        if(doneCallbacks$1134===undefined){doneCallbacks$1134=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.done(/*NULL PARAM!*/doneCallbacks$1134));
        /*End dynamic block*/
    }
    $$deferredAbs.done=done;
    done.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'doneCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','done']};};
    function fail(failCallbacks$1135){
        if(failCallbacks$1135===undefined){failCallbacks$1135=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.fail(/*NULL PARAM!*/failCallbacks$1135));
        /*End dynamic block*/
    }
    $$deferredAbs.fail=fail;
    fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'failCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','fail']};};
    $$deferredAbs.thenFilter$defs$failFilter=function(doneFilter$1136,failFilter$1137,progressFilter$1138){return null;};
    $$deferredAbs.thenFilter$defs$progressFilter=function(doneFilter$1136,failFilter$1137,progressFilter$1138){return null;};
    function thenFilter(doneFilter$1136,failFilter$1137,progressFilter$1138){
        if(failFilter$1137===undefined){failFilter$1137=$$deferredAbs.thenFilter$defs$failFilter(doneFilter$1136,failFilter$1137,progressFilter$1138);}
        if(progressFilter$1138===undefined){progressFilter$1138=$$deferredAbs.thenFilter$defs$progressFilter(doneFilter$1136,failFilter$1137,progressFilter$1138);}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.then(/*NULL PARAM!*/$$$cl1.$JsCallable(doneFilter$1136,[],{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,failFilter$1137/*NULL PARAM!*/,progressFilter$1138));
        /*End dynamic block*/
    }
    $$deferredAbs.thenFilter=thenFilter;
    thenFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'doneFilter',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'failFilter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}},{$nm:'progressFilter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','thenFilter']};};
    function notify(args$1139){
        if(args$1139===undefined){args$1139=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.notify(/*NULL PARAM!*/args$1139));
        /*End dynamic block*/
    }
    $$deferredAbs.notify=notify;
    notify.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','notify']};};
    function notifyWith(context$1140,args$1141){
        if(args$1141===undefined){args$1141=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.notifyWith(/*NULL PARAM!*/context$1140/*NULL PARAM!*/,args$1141));
        /*End dynamic block*/
    }
    $$deferredAbs.notifyWith=notifyWith;
    notifyWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','notifyWith']};};
    function progress(progressCallbacks$1142){
        if(progressCallbacks$1142===undefined){progressCallbacks$1142=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.progress(/*NULL PARAM!*/progressCallbacks$1142));
        /*End dynamic block*/
    }
    $$deferredAbs.progress=progress;
    progress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'progressCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','progress']};};
    $$deferredAbs.promise$defs$target=function(target$1143){return null;};
    function promise(target$1143){
        if(target$1143===undefined){target$1143=$$deferredAbs.promise$defs$target(target$1143);}
        /*Begin dynamic block*/
        return Promise($$deferredAbs.$native.promise(/*NULL PARAM!*/target$1143));
        /*End dynamic block*/
    }
    $$deferredAbs.promise=promise;
    promise.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'target',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Anything}]},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','promise']};};
    function reject(args$1144){
        if(args$1144===undefined){args$1144=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.reject(/*NULL PARAM!*/args$1144));
        /*End dynamic block*/
    }
    $$deferredAbs.reject=reject;
    reject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','reject']};};
    function rejectWith(context$1145,args$1146){
        if(args$1146===undefined){args$1146=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.rejectWith(/*NULL PARAM!*/context$1145/*NULL PARAM!*/,args$1146));
        /*End dynamic block*/
    }
    $$deferredAbs.rejectWith=rejectWith;
    rejectWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','rejectWith']};};
    function resolve(args$1147){
        if(args$1147===undefined){args$1147=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.resolve(/*NULL PARAM!*/args$1147));
        /*End dynamic block*/
    }
    $$deferredAbs.resolve=resolve;
    resolve.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','resolve']};};
    function resolveWith(context$1148,args$1149){
        if(args$1149===undefined){args$1149=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.resolveWith(/*NULL PARAM!*/context$1148/*NULL PARAM!*/,args$1149));
        /*End dynamic block*/
    }
    $$deferredAbs.resolveWith=resolveWith;
    resolveWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','resolveWith']};};
    function state(){
        /*Begin dynamic block*/
        if((tmpvar$1150=$$deferredAbs.$native.state,tmpvar$1151=$$$cl1.String("pending",7),(tmpvar$1150.equals&&tmpvar$1150.equals(tmpvar$1151))||tmpvar$1150===tmpvar$1151)){
            return getDeferredStatePending();
        }else {
            if((tmpvar$1152=$$deferredAbs.$native.state,tmpvar$1153=$$$cl1.String("resolved",8),(tmpvar$1152.equals&&tmpvar$1152.equals(tmpvar$1153))||tmpvar$1152===tmpvar$1153)){
                return getDeferredStateResolved();
            }else {
                return getDeferredStateResolved();
            }
        }/*End dynamic block*/
    }
    $$deferredAbs.state=state;
    state.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DeferredState},$ps:[],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','state']};};
    return $$deferredAbs;
}
DeferredAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','DeferredAbs']};};
exports.DeferredAbs=DeferredAbs;
function $init$DeferredAbs(){
    if (DeferredAbs.$$===undefined){
        $$$cl1.initTypeProto(DeferredAbs,'ceylon.js.jquery::DeferredAbs',$$$cjl361.JSObjectAbs);
    }
    return DeferredAbs;
}
exports.$init$DeferredAbs=$init$DeferredAbs;
$init$DeferredAbs();
function Deferred(n$1154, $$deferred){
    $init$Deferred();
    if ($$deferred===undefined)$$deferred=new Deferred.$$;
    $$deferred.n$1154_=n$1154;
    DeferredAbs($$deferred);
    $$$cl1.defineAttr($$deferred,'n$1154',function(){return this.n$1154_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Deferred,d:['ceylon.js.jquery','Deferred','$at','n']};});
    $$deferred.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Deferred,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','Deferred','$at','native']};}};
    /*Begin dynamic block*/
    $$deferred.$native=n$1154;/*End dynamic block*/
    return $$deferred;
}
Deferred.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DeferredAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','Deferred']};};
exports.Deferred=Deferred;
function $init$Deferred(){
    if (Deferred.$$===undefined){
        $$$cl1.initTypeProto(Deferred,'ceylon.js.jquery::Deferred',$init$DeferredAbs());
    }
    return Deferred;
}
exports.$init$Deferred=$init$Deferred;
$init$Deferred();
var $$$cjd977=require('ceylon/js/dom/4.0.0/ceylon.js.dom-4.0.0');
$$$cl1.$addmod$($$$cjd977,'ceylon.js.dom/4.0.0');
var $$$cjj661=require('ceylon/js/json/1.0.0/ceylon.js.json-1.0.0');
$$$cl1.$addmod$($$$cjj661,'ceylon.js.json/1.0.0');
var allSelector$1155;function $valinit$allSelector$1155(){if (allSelector$1155===undefined)allSelector$1155=$$$cl1.String("*",1);return allSelector$1155;};$valinit$allSelector$1155();
function getAllSelector(){return $valinit$allSelector$1155();}
exports.getAllSelector=getAllSelector;
var $prop$getAllSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','allSelector']};}};
exports.$prop$getAllSelector=$prop$getAllSelector;
$prop$getAllSelector.get=getAllSelector;
getAllSelector.$$metamodel$$=$prop$getAllSelector.$$metamodel$$;
var animatedSelector$1156;function $valinit$animatedSelector$1156(){if (animatedSelector$1156===undefined)animatedSelector$1156=$$$cl1.String(":animated",9);return animatedSelector$1156;};$valinit$animatedSelector$1156();
function getAnimatedSelector(){return $valinit$animatedSelector$1156();}
exports.getAnimatedSelector=getAnimatedSelector;
var $prop$getAnimatedSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','animatedSelector']};}};
exports.$prop$getAnimatedSelector=$prop$getAnimatedSelector;
$prop$getAnimatedSelector.get=getAnimatedSelector;
getAnimatedSelector.$$metamodel$$=$prop$getAnimatedSelector.$$metamodel$$;
var buttonSelector$1157;function $valinit$buttonSelector$1157(){if (buttonSelector$1157===undefined)buttonSelector$1157=$$$cl1.String(":button",7);return buttonSelector$1157;};$valinit$buttonSelector$1157();
function getButtonSelector(){return $valinit$buttonSelector$1157();}
exports.getButtonSelector=getButtonSelector;
var $prop$getButtonSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','buttonSelector']};}};
exports.$prop$getButtonSelector=$prop$getButtonSelector;
$prop$getButtonSelector.get=getButtonSelector;
getButtonSelector.$$metamodel$$=$prop$getButtonSelector.$$metamodel$$;
var checkboxSelector$1158;function $valinit$checkboxSelector$1158(){if (checkboxSelector$1158===undefined)checkboxSelector$1158=$$$cl1.String(":checkbox",9);return checkboxSelector$1158;};$valinit$checkboxSelector$1158();
function getCheckboxSelector(){return $valinit$checkboxSelector$1158();}
exports.getCheckboxSelector=getCheckboxSelector;
var $prop$getCheckboxSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','checkboxSelector']};}};
exports.$prop$getCheckboxSelector=$prop$getCheckboxSelector;
$prop$getCheckboxSelector.get=getCheckboxSelector;
getCheckboxSelector.$$metamodel$$=$prop$getCheckboxSelector.$$metamodel$$;
var checkedSelector$1159;function $valinit$checkedSelector$1159(){if (checkedSelector$1159===undefined)checkedSelector$1159=$$$cl1.String(":checked",8);return checkedSelector$1159;};$valinit$checkedSelector$1159();
function getCheckedSelector(){return $valinit$checkedSelector$1159();}
exports.getCheckedSelector=getCheckedSelector;
var $prop$getCheckedSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','checkedSelector']};}};
exports.$prop$getCheckedSelector=$prop$getCheckedSelector;
$prop$getCheckedSelector.get=getCheckedSelector;
getCheckedSelector.$$metamodel$$=$prop$getCheckedSelector.$$metamodel$$;
var disabledSelector$1160;function $valinit$disabledSelector$1160(){if (disabledSelector$1160===undefined)disabledSelector$1160=$$$cl1.String(":disabled",9);return disabledSelector$1160;};$valinit$disabledSelector$1160();
function getDisabledSelector(){return $valinit$disabledSelector$1160();}
exports.getDisabledSelector=getDisabledSelector;
var $prop$getDisabledSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','disabledSelector']};}};
exports.$prop$getDisabledSelector=$prop$getDisabledSelector;
$prop$getDisabledSelector.get=getDisabledSelector;
getDisabledSelector.$$metamodel$$=$prop$getDisabledSelector.$$metamodel$$;
var emptySelector$1161;function $valinit$emptySelector$1161(){if (emptySelector$1161===undefined)emptySelector$1161=$$$cl1.String(":empty",6);return emptySelector$1161;};$valinit$emptySelector$1161();
function getEmptySelector(){return $valinit$emptySelector$1161();}
exports.getEmptySelector=getEmptySelector;
var $prop$getEmptySelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','emptySelector']};}};
exports.$prop$getEmptySelector=$prop$getEmptySelector;
$prop$getEmptySelector.get=getEmptySelector;
getEmptySelector.$$metamodel$$=$prop$getEmptySelector.$$metamodel$$;
var enabledSelector$1162;function $valinit$enabledSelector$1162(){if (enabledSelector$1162===undefined)enabledSelector$1162=$$$cl1.String(":enabled",8);return enabledSelector$1162;};$valinit$enabledSelector$1162();
function getEnabledSelector(){return $valinit$enabledSelector$1162();}
exports.getEnabledSelector=getEnabledSelector;
var $prop$getEnabledSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','enabledSelector']};}};
exports.$prop$getEnabledSelector=$prop$getEnabledSelector;
$prop$getEnabledSelector.get=getEnabledSelector;
getEnabledSelector.$$metamodel$$=$prop$getEnabledSelector.$$metamodel$$;
var evenSelector$1163;function $valinit$evenSelector$1163(){if (evenSelector$1163===undefined)evenSelector$1163=$$$cl1.String(":even",5);return evenSelector$1163;};$valinit$evenSelector$1163();
function getEvenSelector(){return $valinit$evenSelector$1163();}
exports.getEvenSelector=getEvenSelector;
var $prop$getEvenSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','evenSelector']};}};
exports.$prop$getEvenSelector=$prop$getEvenSelector;
$prop$getEvenSelector.get=getEvenSelector;
getEvenSelector.$$metamodel$$=$prop$getEvenSelector.$$metamodel$$;
var fileSelector$1164;function $valinit$fileSelector$1164(){if (fileSelector$1164===undefined)fileSelector$1164=$$$cl1.String(":file",5);return fileSelector$1164;};$valinit$fileSelector$1164();
function getFileSelector(){return $valinit$fileSelector$1164();}
exports.getFileSelector=getFileSelector;
var $prop$getFileSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','fileSelector']};}};
exports.$prop$getFileSelector=$prop$getFileSelector;
$prop$getFileSelector.get=getFileSelector;
getFileSelector.$$metamodel$$=$prop$getFileSelector.$$metamodel$$;
var firstChildSelector$1165;function $valinit$firstChildSelector$1165(){if (firstChildSelector$1165===undefined)firstChildSelector$1165=$$$cl1.String(":first-child",12);return firstChildSelector$1165;};$valinit$firstChildSelector$1165();
function getFirstChildSelector(){return $valinit$firstChildSelector$1165();}
exports.getFirstChildSelector=getFirstChildSelector;
var $prop$getFirstChildSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','firstChildSelector']};}};
exports.$prop$getFirstChildSelector=$prop$getFirstChildSelector;
$prop$getFirstChildSelector.get=getFirstChildSelector;
getFirstChildSelector.$$metamodel$$=$prop$getFirstChildSelector.$$metamodel$$;
var firstOfTypeSelector$1166;function $valinit$firstOfTypeSelector$1166(){if (firstOfTypeSelector$1166===undefined)firstOfTypeSelector$1166=$$$cl1.String(":first-of-type",14);return firstOfTypeSelector$1166;};$valinit$firstOfTypeSelector$1166();
function getFirstOfTypeSelector(){return $valinit$firstOfTypeSelector$1166();}
exports.getFirstOfTypeSelector=getFirstOfTypeSelector;
var $prop$getFirstOfTypeSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','firstOfTypeSelector']};}};
exports.$prop$getFirstOfTypeSelector=$prop$getFirstOfTypeSelector;
$prop$getFirstOfTypeSelector.get=getFirstOfTypeSelector;
getFirstOfTypeSelector.$$metamodel$$=$prop$getFirstOfTypeSelector.$$metamodel$$;
var firstSelector$1167;function $valinit$firstSelector$1167(){if (firstSelector$1167===undefined)firstSelector$1167=$$$cl1.String(":first",6);return firstSelector$1167;};$valinit$firstSelector$1167();
function getFirstSelector(){return $valinit$firstSelector$1167();}
exports.getFirstSelector=getFirstSelector;
var $prop$getFirstSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','firstSelector']};}};
exports.$prop$getFirstSelector=$prop$getFirstSelector;
$prop$getFirstSelector.get=getFirstSelector;
getFirstSelector.$$metamodel$$=$prop$getFirstSelector.$$metamodel$$;
var focusSelector$1168;function $valinit$focusSelector$1168(){if (focusSelector$1168===undefined)focusSelector$1168=$$$cl1.String(":focus",6);return focusSelector$1168;};$valinit$focusSelector$1168();
function getFocusSelector(){return $valinit$focusSelector$1168();}
exports.getFocusSelector=getFocusSelector;
var $prop$getFocusSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','focusSelector']};}};
exports.$prop$getFocusSelector=$prop$getFocusSelector;
$prop$getFocusSelector.get=getFocusSelector;
getFocusSelector.$$metamodel$$=$prop$getFocusSelector.$$metamodel$$;
var headerSelector$1169;function $valinit$headerSelector$1169(){if (headerSelector$1169===undefined)headerSelector$1169=$$$cl1.String(":header",7);return headerSelector$1169;};$valinit$headerSelector$1169();
function getHeaderSelector(){return $valinit$headerSelector$1169();}
exports.getHeaderSelector=getHeaderSelector;
var $prop$getHeaderSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','headerSelector']};}};
exports.$prop$getHeaderSelector=$prop$getHeaderSelector;
$prop$getHeaderSelector.get=getHeaderSelector;
getHeaderSelector.$$metamodel$$=$prop$getHeaderSelector.$$metamodel$$;
var hiddenSelector$1170;function $valinit$hiddenSelector$1170(){if (hiddenSelector$1170===undefined)hiddenSelector$1170=$$$cl1.String(":hidden",7);return hiddenSelector$1170;};$valinit$hiddenSelector$1170();
function getHiddenSelector(){return $valinit$hiddenSelector$1170();}
exports.getHiddenSelector=getHiddenSelector;
var $prop$getHiddenSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','hiddenSelector']};}};
exports.$prop$getHiddenSelector=$prop$getHiddenSelector;
$prop$getHiddenSelector.get=getHiddenSelector;
getHiddenSelector.$$metamodel$$=$prop$getHiddenSelector.$$metamodel$$;
var imageSelector$1171;function $valinit$imageSelector$1171(){if (imageSelector$1171===undefined)imageSelector$1171=$$$cl1.String(":image",6);return imageSelector$1171;};$valinit$imageSelector$1171();
function getImageSelector(){return $valinit$imageSelector$1171();}
exports.getImageSelector=getImageSelector;
var $prop$getImageSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','imageSelector']};}};
exports.$prop$getImageSelector=$prop$getImageSelector;
$prop$getImageSelector.get=getImageSelector;
getImageSelector.$$metamodel$$=$prop$getImageSelector.$$metamodel$$;
var inputSelector$1172;function $valinit$inputSelector$1172(){if (inputSelector$1172===undefined)inputSelector$1172=$$$cl1.String(":input",6);return inputSelector$1172;};$valinit$inputSelector$1172();
function getInputSelector(){return $valinit$inputSelector$1172();}
exports.getInputSelector=getInputSelector;
var $prop$getInputSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','inputSelector']};}};
exports.$prop$getInputSelector=$prop$getInputSelector;
$prop$getInputSelector.get=getInputSelector;
getInputSelector.$$metamodel$$=$prop$getInputSelector.$$metamodel$$;
var lastChildSelector$1173;function $valinit$lastChildSelector$1173(){if (lastChildSelector$1173===undefined)lastChildSelector$1173=$$$cl1.String(":last-child",11);return lastChildSelector$1173;};$valinit$lastChildSelector$1173();
function getLastChildSelector(){return $valinit$lastChildSelector$1173();}
exports.getLastChildSelector=getLastChildSelector;
var $prop$getLastChildSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','lastChildSelector']};}};
exports.$prop$getLastChildSelector=$prop$getLastChildSelector;
$prop$getLastChildSelector.get=getLastChildSelector;
getLastChildSelector.$$metamodel$$=$prop$getLastChildSelector.$$metamodel$$;
var lastOfTypeSelector$1174;function $valinit$lastOfTypeSelector$1174(){if (lastOfTypeSelector$1174===undefined)lastOfTypeSelector$1174=$$$cl1.String(":last-of-type",13);return lastOfTypeSelector$1174;};$valinit$lastOfTypeSelector$1174();
function getLastOfTypeSelector(){return $valinit$lastOfTypeSelector$1174();}
exports.getLastOfTypeSelector=getLastOfTypeSelector;
var $prop$getLastOfTypeSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','lastOfTypeSelector']};}};
exports.$prop$getLastOfTypeSelector=$prop$getLastOfTypeSelector;
$prop$getLastOfTypeSelector.get=getLastOfTypeSelector;
getLastOfTypeSelector.$$metamodel$$=$prop$getLastOfTypeSelector.$$metamodel$$;
var lastSelector$1175;function $valinit$lastSelector$1175(){if (lastSelector$1175===undefined)lastSelector$1175=$$$cl1.String(":last",5);return lastSelector$1175;};$valinit$lastSelector$1175();
function getLastSelector(){return $valinit$lastSelector$1175();}
exports.getLastSelector=getLastSelector;
var $prop$getLastSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','lastSelector']};}};
exports.$prop$getLastSelector=$prop$getLastSelector;
$prop$getLastSelector.get=getLastSelector;
getLastSelector.$$metamodel$$=$prop$getLastSelector.$$metamodel$$;
var oddSelector$1176;function $valinit$oddSelector$1176(){if (oddSelector$1176===undefined)oddSelector$1176=$$$cl1.String(":odd",4);return oddSelector$1176;};$valinit$oddSelector$1176();
function getOddSelector(){return $valinit$oddSelector$1176();}
exports.getOddSelector=getOddSelector;
var $prop$getOddSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','oddSelector']};}};
exports.$prop$getOddSelector=$prop$getOddSelector;
$prop$getOddSelector.get=getOddSelector;
getOddSelector.$$metamodel$$=$prop$getOddSelector.$$metamodel$$;
var onlyChildSelector$1177;function $valinit$onlyChildSelector$1177(){if (onlyChildSelector$1177===undefined)onlyChildSelector$1177=$$$cl1.String(":only-child",11);return onlyChildSelector$1177;};$valinit$onlyChildSelector$1177();
function getOnlyChildSelector(){return $valinit$onlyChildSelector$1177();}
exports.getOnlyChildSelector=getOnlyChildSelector;
var $prop$getOnlyChildSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','onlyChildSelector']};}};
exports.$prop$getOnlyChildSelector=$prop$getOnlyChildSelector;
$prop$getOnlyChildSelector.get=getOnlyChildSelector;
getOnlyChildSelector.$$metamodel$$=$prop$getOnlyChildSelector.$$metamodel$$;
var onlyOfTypeSelector$1178;function $valinit$onlyOfTypeSelector$1178(){if (onlyOfTypeSelector$1178===undefined)onlyOfTypeSelector$1178=$$$cl1.String(":only-of-type",13);return onlyOfTypeSelector$1178;};$valinit$onlyOfTypeSelector$1178();
function getOnlyOfTypeSelector(){return $valinit$onlyOfTypeSelector$1178();}
exports.getOnlyOfTypeSelector=getOnlyOfTypeSelector;
var $prop$getOnlyOfTypeSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','onlyOfTypeSelector']};}};
exports.$prop$getOnlyOfTypeSelector=$prop$getOnlyOfTypeSelector;
$prop$getOnlyOfTypeSelector.get=getOnlyOfTypeSelector;
getOnlyOfTypeSelector.$$metamodel$$=$prop$getOnlyOfTypeSelector.$$metamodel$$;
var parentSelector$1179;function $valinit$parentSelector$1179(){if (parentSelector$1179===undefined)parentSelector$1179=$$$cl1.String(":parent",7);return parentSelector$1179;};$valinit$parentSelector$1179();
function getParentSelector(){return $valinit$parentSelector$1179();}
exports.getParentSelector=getParentSelector;
var $prop$getParentSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','parentSelector']};}};
exports.$prop$getParentSelector=$prop$getParentSelector;
$prop$getParentSelector.get=getParentSelector;
getParentSelector.$$metamodel$$=$prop$getParentSelector.$$metamodel$$;
var passwordSelector$1180;function $valinit$passwordSelector$1180(){if (passwordSelector$1180===undefined)passwordSelector$1180=$$$cl1.String(":password",9);return passwordSelector$1180;};$valinit$passwordSelector$1180();
function getPasswordSelector(){return $valinit$passwordSelector$1180();}
exports.getPasswordSelector=getPasswordSelector;
var $prop$getPasswordSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','passwordSelector']};}};
exports.$prop$getPasswordSelector=$prop$getPasswordSelector;
$prop$getPasswordSelector.get=getPasswordSelector;
getPasswordSelector.$$metamodel$$=$prop$getPasswordSelector.$$metamodel$$;
var radioSelector$1181;function $valinit$radioSelector$1181(){if (radioSelector$1181===undefined)radioSelector$1181=$$$cl1.String(":radio",6);return radioSelector$1181;};$valinit$radioSelector$1181();
function getRadioSelector(){return $valinit$radioSelector$1181();}
exports.getRadioSelector=getRadioSelector;
var $prop$getRadioSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','radioSelector']};}};
exports.$prop$getRadioSelector=$prop$getRadioSelector;
$prop$getRadioSelector.get=getRadioSelector;
getRadioSelector.$$metamodel$$=$prop$getRadioSelector.$$metamodel$$;
var resetSelector$1182;function $valinit$resetSelector$1182(){if (resetSelector$1182===undefined)resetSelector$1182=$$$cl1.String(":reset",6);return resetSelector$1182;};$valinit$resetSelector$1182();
function getResetSelector(){return $valinit$resetSelector$1182();}
exports.getResetSelector=getResetSelector;
var $prop$getResetSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','resetSelector']};}};
exports.$prop$getResetSelector=$prop$getResetSelector;
$prop$getResetSelector.get=getResetSelector;
getResetSelector.$$metamodel$$=$prop$getResetSelector.$$metamodel$$;
var rootSelector$1183;function $valinit$rootSelector$1183(){if (rootSelector$1183===undefined)rootSelector$1183=$$$cl1.String(":root",5);return rootSelector$1183;};$valinit$rootSelector$1183();
function getRootSelector(){return $valinit$rootSelector$1183();}
exports.getRootSelector=getRootSelector;
var $prop$getRootSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','rootSelector']};}};
exports.$prop$getRootSelector=$prop$getRootSelector;
$prop$getRootSelector.get=getRootSelector;
getRootSelector.$$metamodel$$=$prop$getRootSelector.$$metamodel$$;
var selectedSelector$1184;function $valinit$selectedSelector$1184(){if (selectedSelector$1184===undefined)selectedSelector$1184=$$$cl1.String(":selected",9);return selectedSelector$1184;};$valinit$selectedSelector$1184();
function getSelectedSelector(){return $valinit$selectedSelector$1184();}
exports.getSelectedSelector=getSelectedSelector;
var $prop$getSelectedSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','selectedSelector']};}};
exports.$prop$getSelectedSelector=$prop$getSelectedSelector;
$prop$getSelectedSelector.get=getSelectedSelector;
getSelectedSelector.$$metamodel$$=$prop$getSelectedSelector.$$metamodel$$;
var submitSelector$1185;function $valinit$submitSelector$1185(){if (submitSelector$1185===undefined)submitSelector$1185=$$$cl1.String(":submit",7);return submitSelector$1185;};$valinit$submitSelector$1185();
function getSubmitSelector(){return $valinit$submitSelector$1185();}
exports.getSubmitSelector=getSubmitSelector;
var $prop$getSubmitSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','submitSelector']};}};
exports.$prop$getSubmitSelector=$prop$getSubmitSelector;
$prop$getSubmitSelector.get=getSubmitSelector;
getSubmitSelector.$$metamodel$$=$prop$getSubmitSelector.$$metamodel$$;
var targetSelector$1186;function $valinit$targetSelector$1186(){if (targetSelector$1186===undefined)targetSelector$1186=$$$cl1.String(":target",7);return targetSelector$1186;};$valinit$targetSelector$1186();
function getTargetSelector(){return $valinit$targetSelector$1186();}
exports.getTargetSelector=getTargetSelector;
var $prop$getTargetSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','targetSelector']};}};
exports.$prop$getTargetSelector=$prop$getTargetSelector;
$prop$getTargetSelector.get=getTargetSelector;
getTargetSelector.$$metamodel$$=$prop$getTargetSelector.$$metamodel$$;
var textSelector$1187;function $valinit$textSelector$1187(){if (textSelector$1187===undefined)textSelector$1187=$$$cl1.String(":text",5);return textSelector$1187;};$valinit$textSelector$1187();
function getTextSelector(){return $valinit$textSelector$1187();}
exports.getTextSelector=getTextSelector;
var $prop$getTextSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','textSelector']};}};
exports.$prop$getTextSelector=$prop$getTextSelector;
$prop$getTextSelector.get=getTextSelector;
getTextSelector.$$metamodel$$=$prop$getTextSelector.$$metamodel$$;
var visibleSelector$1188;function $valinit$visibleSelector$1188(){if (visibleSelector$1188===undefined)visibleSelector$1188=$$$cl1.String(":visible",8);return visibleSelector$1188;};$valinit$visibleSelector$1188();
function getVisibleSelector(){return $valinit$visibleSelector$1188();}
exports.getVisibleSelector=getVisibleSelector;
var $prop$getVisibleSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','visibleSelector']};}};
exports.$prop$getVisibleSelector=$prop$getVisibleSelector;
$prop$getVisibleSelector.get=getVisibleSelector;
getVisibleSelector.$$metamodel$$=$prop$getVisibleSelector.$$metamodel$$;
function jQueryAjax(url$1189,settings$1190){
    if(url$1189===undefined){url$1189=null;}
    if(settings$1190===undefined){settings$1190=null;}
    /*Begin dynamic block*/
    var u$1191;
    if((u$1191=url$1189)!==null){
        var s$1192;
        if((s$1192=settings$1190)!==null){
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'44:17-44:22','jquery.ceylon'):jQuery).ajax(/*NULL PARAM!*/u$1191.valueOf()/*NULL PARAM!*/,s$1192.toNative()));
        }else {
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'46:17-46:22','jquery.ceylon'):jQuery).ajax(/*NULL PARAM!*/u$1191.valueOf()));
        }
    }else {
        var s$1193;
        if((s$1193=settings$1190)!==null){
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'50:17-50:22','jquery.ceylon'):jQuery).ajax(/*NULL PARAM!*/s$1193.toNative()));
        }else {
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'52:17-52:22','jquery.ceylon'):jQuery).ajax());
        }
    }/*End dynamic block*/
}
exports.jQueryAjax=jQueryAjax;
jQueryAjax.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'settings',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JQueryAjaxSettingsBuilder}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryAjax']};};
function jQueryAjaxPrefilter(callback$1194,dataTypes$1195){
    if(dataTypes$1195===undefined){dataTypes$1195=null;}
    /*Begin dynamic block*/
    var dT$1196;
    if((dT$1196=dataTypes$1195)!==null){
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'61:3-61:8','jquery.ceylon'):jQuery).ajaxPrefilter(/*NULL PARAM!*/dT$1196.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1194,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}));
    }else {
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'63:3-63:8','jquery.ceylon'):jQuery).ajaxPrefilter(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1194,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}));
    }/*End dynamic block*/
}
exports.jQueryAjaxPrefilter=jQueryAjaxPrefilter;
jQueryAjaxPrefilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'dataTypes',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryAjaxPrefilter']};};
function jQueryAjaxSetup(options$1197){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'70:2-70:7','jquery.ceylon'):jQuery).ajaxSetup(/*NULL PARAM!*/options$1197.toNative());
    /*End dynamic block*/
}
exports.jQueryAjaxSetup=jQueryAjaxSetup;
jQueryAjaxSetup.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'options',$mt:'prm',$t:{t:JQueryAjaxSettingsBuilder},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryAjaxSetup']};};
function jQueryAjaxTransport(dataType$1198,callback$1199){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'77:2-77:7','jquery.ceylon'):jQuery).ajaxTransport(/*NULL PARAM!*/dataType$1198.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1199,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}));
    /*End dynamic block*/
}
exports.jQueryAjaxTransport=jQueryAjaxTransport;
jQueryAjaxTransport.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'dataType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryAjaxTransport']};};
function jQueryCallbacks(flags$1200){
    if(flags$1200===undefined){flags$1200=$$$cl1.String("",0);}
    /*Begin dynamic block*/
    return Callbacks((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'83:19-83:24','jquery.ceylon'):jQuery).Callbacks(/*NULL PARAM!*/flags$1200.valueOf()));
    /*End dynamic block*/
}
exports.jQueryCallbacks=jQueryCallbacks;
jQueryCallbacks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'flags',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryCallbacks']};};
function jQueryContains(container$1201,contained$1202){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'89:6-89:11','jquery.ceylon'):jQuery).contains(/*NULL PARAM!*/container$1201/*NULL PARAM!*/,contained$1202)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryContains=jQueryContains;
jQueryContains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'container',$mt:'prm',$t:{t:$$$cjd977.Element},$an:function(){return[];}},{$nm:'contained',$mt:'prm',$t:{t:$$$cjd977.Element},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryContains']};};
function jQueryCssHooks(){
    /*Begin dynamic block*/
    return $$$cjl361.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'99:18-99:23','jquery.ceylon'):jQuery).cssHooks);
    /*End dynamic block*/
}
exports.jQueryCssHooks=jQueryCssHooks;
jQueryCssHooks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSObject},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryCssHooks']};};
function jQuerySetData(element$1203,key$1204,data$1205){
    /*Begin dynamic block*/
    return $$$cjl361.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'105:18-105:23','jquery.ceylon'):jQuery).data(/*NULL PARAM!*/element$1203/*NULL PARAM!*/,key$1204.valueOf()/*NULL PARAM!*/,data$1205));
    /*End dynamic block*/
}
exports.jQuerySetData=jQuerySetData;
jQuerySetData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSObject},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd977.Element},$an:function(){return[];}},{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQuerySetData']};};
function jQueryGetData(element$1206,key$1207){
    if(key$1207===undefined){key$1207=null;}
    /*Begin dynamic block*/
    return $$$cjl361.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'111:18-111:23','jquery.ceylon'):jQuery).data(/*NULL PARAM!*/element$1206/*NULL PARAM!*/,key$1207));
    /*End dynamic block*/
}
exports.jQueryGetData=jQueryGetData;
jQueryGetData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSObject},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd977.Element},$an:function(){return[];}},{$nm:'key',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGetData']};};
function jQueryDeferred(beforeStart$1208){
    if(beforeStart$1208===undefined){beforeStart$1208=null;}
    /*Begin dynamic block*/
    return Deferred((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'118:18-118:23','jquery.ceylon'):jQuery).Deferred(/*NULL PARAM!*/beforeStart$1208));
    /*End dynamic block*/
}
exports.jQueryDeferred=jQueryDeferred;
jQueryDeferred.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'beforeStart',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryDeferred']};};
function jQueryDequeue(element$1209,queueName$1210){
    if(queueName$1210===undefined){queueName$1210=null;}
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'124:2-124:7','jquery.ceylon'):jQuery).dequeue(/*NULL PARAM!*/element$1209/*NULL PARAM!*/,queueName$1210);
    /*End dynamic block*/
}
exports.jQueryDequeue=jQueryDequeue;
jQueryDequeue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd977.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryDequeue']};};
function jQueryEach(collection$1211,callback$1212){
    /*Begin dynamic block*/
    return $$$cjl361.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'130:18-130:23','jquery.ceylon'):jQuery).each(/*NULL PARAM!*/collection$1211/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1212,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
    /*End dynamic block*/
}
exports.jQueryEach=jQueryEach;
jQueryEach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSObject},$ps:[{$nm:'collection',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryEach']};};
function jQueryError(message$1213){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'136:2-136:7','jquery.ceylon'):jQuery).error(/*NULL PARAM!*/message$1213.valueOf());
    /*End dynamic block*/
}
exports.jQueryError=jQueryError;
jQueryError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'message',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryError']};};
function jQueryExtend(target$1214,objects$1215){
    if(objects$1215===undefined){objects$1215=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'142:2-142:7','jquery.ceylon'):jQuery).extend(/*NULL PARAM!*/target$1214/*NULL PARAM!*/,objects$1215);
    /*End dynamic block*/
}
exports.jQueryExtend=jQueryExtend;
jQueryExtend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'target',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'objects',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryExtend']};};
function jQueryExtendDeep(deep$1216,target$1217,objects$1218){
    if(objects$1218===undefined){objects$1218=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'148:2-148:7','jquery.ceylon'):jQuery).extend(/*NULL PARAM!*/target$1217/*NULL PARAM!*/,objects$1218);
    /*End dynamic block*/
}
exports.jQueryExtendDeep=jQueryExtendDeep;
jQueryExtendDeep.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'deep',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'target',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'objects',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryExtendDeep']};};
function jQueryFnExtend(obj$1219){
    /*Begin dynamic block*/
    return $$$cjl361.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'154:18-154:23','jquery.ceylon'):jQuery).fn.extend(/*NULL PARAM!*/obj$1219));
    /*End dynamic block*/
}
exports.jQueryFnExtend=jQueryFnExtend;
jQueryFnExtend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryFnExtend']};};
function jQueryFxInterval(){
    /*Begin dynamic block*/
    return $$$cjl361.JSNumber((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'160:18-160:23','jquery.ceylon'):jQuery).fx.interval);
    /*End dynamic block*/
}
exports.jQueryFxInterval=jQueryFxInterval;
jQueryFxInterval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryFxInterval']};};
function jQueryFxOff(){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'166:6-166:11','jquery.ceylon'):jQuery).fx.off){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryFxOff=jQueryFxOff;
jQueryFxOff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryFxOff']};};
function jQueryGet(url$1220,data$1221,success$1222,dataType$1223){
    if(data$1221===undefined){data$1221=null;}
    if(success$1222===undefined){success$1222=null;}
    if(dataType$1223===undefined){dataType$1223=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'177:15-177:20','jquery.ceylon'):jQuery).get(/*NULL PARAM!*/url$1220.valueOf()/*NULL PARAM!*/,data$1221/*NULL PARAM!*/,success$1222/*NULL PARAM!*/,dataType$1223));
    /*End dynamic block*/
}
exports.jQueryGet=jQueryGet;
jQueryGet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}},{$nm:'dataType',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGet']};};
function jQueryGetJSON(url$1224,data$1225,success$1226){
    if(data$1225===undefined){data$1225=null;}
    if(success$1226===undefined){success$1226=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'184:15-184:20','jquery.ceylon'):jQuery).getJSON(/*NULL PARAM!*/url$1224.valueOf()/*NULL PARAM!*/,data$1225/*NULL PARAM!*/,success$1226));
    /*End dynamic block*/
}
exports.jQueryGetJSON=jQueryGetJSON;
jQueryGetJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGetJSON']};};
function jQueryGetScript(url$1227,success$1228){
    if(success$1228===undefined){success$1228=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'191:15-191:20','jquery.ceylon'):jQuery).getScript(/*NULL PARAM!*/url$1227.valueOf()/*NULL PARAM!*/,success$1228));
    /*End dynamic block*/
}
exports.jQueryGetScript=jQueryGetScript;
jQueryGetScript.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGetScript']};};
function jQueryGlobalEval(code$1229){
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'197:15-197:20','jquery.ceylon'):jQuery).globalEval(/*NULL PARAM!*/code$1229.valueOf()));
    /*End dynamic block*/
}
exports.jQueryGlobalEval=jQueryGlobalEval;
jQueryGlobalEval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'code',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGlobalEval']};};
function jQueryGrep(array$1230,callback$1231,invert$1232){
    if(invert$1232===undefined){invert$1232=null;}
    /*Begin dynamic block*/
    return $$$cjl361.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'203:17-203:22','jquery.ceylon'):jQuery).grep(/*NULL PARAM!*/array$1230.$native/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1231,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,invert$1232));
    /*End dynamic block*/
}
exports.jQueryGrep=jQueryGrep;
jQueryGrep.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSArray},$ps:[{$nm:'array',$mt:'prm',$t:{t:$$$cjl361.JSArray},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'invert',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGrep']};};
function jQueryHasData(element$1233){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'209:6-209:11','jquery.ceylon'):jQuery).hasData(/*NULL PARAM!*/element$1233)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryHasData=jQueryHasData;
jQueryHasData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd977.Element},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryHasData']};};
function jQueryHoldReady(hold$1234){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'219:2-219:7','jquery.ceylon'):jQuery).holdReady(/*NULL PARAM!*/hold$1234);
    /*End dynamic block*/
}
exports.jQueryHoldReady=jQueryHoldReady;
jQueryHoldReady.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'hold',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryHoldReady']};};
function jQueryInArray(val$1235,array$1236,fromIndex$1237){
    if(fromIndex$1237===undefined){fromIndex$1237=null;}
    /*Begin dynamic block*/
    return $$$cjl361.JSNumber((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'225:18-225:23','jquery.ceylon'):jQuery).inArray(/*NULL PARAM!*/val$1235.$native/*NULL PARAM!*/,array$1236.$native/*NULL PARAM!*/,fromIndex$1237));
    /*End dynamic block*/
}
exports.jQueryInArray=jQueryInArray;
jQueryInArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cjl361.JSObject},$an:function(){return[];}},{$nm:'array',$mt:'prm',$t:{t:$$$cjl361.JSArray},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryInArray']};};
function jQueryIsArray(obj$1238){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'231:6-231:11','jquery.ceylon'):jQuery).isArray(/*NULL PARAM!*/obj$1238.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsArray=jQueryIsArray;
jQueryIsArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl361.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsArray']};};
function jQueryIsEmptyObject(obj$1239){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'241:6-241:11','jquery.ceylon'):jQuery).isEmptyObject(/*NULL PARAM!*/obj$1239.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsEmptyObject=jQueryIsEmptyObject;
jQueryIsEmptyObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl361.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsEmptyObject']};};
function jQueryIsFunction(obj$1240){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'251:6-251:11','jquery.ceylon'):jQuery).isFunction(/*NULL PARAM!*/obj$1240.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsFunction=jQueryIsFunction;
jQueryIsFunction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl361.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsFunction']};};
function jQueryIsNumeric(obj$1241){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'261:6-261:11','jquery.ceylon'):jQuery).isNumeric(/*NULL PARAM!*/obj$1241.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsNumeric=jQueryIsNumeric;
jQueryIsNumeric.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl361.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsNumeric']};};
function jQueryIsPlainObject(obj$1242){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'271:6-271:11','jquery.ceylon'):jQuery).isPlainObject(/*NULL PARAM!*/obj$1242.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsPlainObject=jQueryIsPlainObject;
jQueryIsPlainObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl361.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsPlainObject']};};
function jQueryIsWindow(obj$1243){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'281:6-281:11','jquery.ceylon'):jQuery).isWindow(/*NULL PARAM!*/obj$1243.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsWindow=jQueryIsWindow;
jQueryIsWindow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl361.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsWindow']};};
function jQueryIsXMLDoc(node$1244){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'291:6-291:11','jquery.ceylon'):jQuery).isXMLDoc(/*NULL PARAM!*/node$1244.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsXMLDoc=jQueryIsXMLDoc;
jQueryIsXMLDoc.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:$$$cjd977.Element},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsXMLDoc']};};
function jQueryMapArray(array$1245,callback$1246){
    /*Begin dynamic block*/
    return $$$cjl361.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'301:17-301:22','jquery.ceylon'):jQuery).mapArray(/*NULL PARAM!*/array$1245.$native/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1246,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
    /*End dynamic block*/
}
exports.jQueryMapArray=jQueryMapArray;
jQueryMapArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSArray},$ps:[{$nm:'array',$mt:'prm',$t:{t:$$$cjl361.JSArray},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryMapArray']};};
function jQueryMapObject(obj$1247,callback$1248){
    /*Begin dynamic block*/
    return $$$cjl361.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'307:17-307:22','jquery.ceylon'):jQuery).mapArray(/*NULL PARAM!*/obj$1247.$native/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1248,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
    /*End dynamic block*/
}
exports.jQueryMapObject=jQueryMapObject;
jQueryMapObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSArray},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl361.JSObject},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryMapObject']};};
function jQueryMerge(first$1249,second$1250){
    /*Begin dynamic block*/
    return $$$cjl361.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'313:17-313:22','jquery.ceylon'):jQuery).merge(/*NULL PARAM!*/first$1249/*NULL PARAM!*/,second$1250));
    /*End dynamic block*/
}
exports.jQueryMerge=jQueryMerge;
jQueryMerge.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSArray},$ps:[{$nm:'first',$mt:'prm',$t:{t:$$$cjl361.JSArray},$an:function(){return[];}},{$nm:'second',$mt:'prm',$t:{t:$$$cjl361.JSArray},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryMerge']};};
function jQueryNoConflict(removeAll$1251){
    if(removeAll$1251===undefined){removeAll$1251=null;}
    /*Begin dynamic block*/
    return $$$cjl361.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'319:17-319:22','jquery.ceylon'):jQuery).noConflict(/*NULL PARAM!*/removeAll$1251));
    /*End dynamic block*/
}
exports.jQueryNoConflict=jQueryNoConflict;
jQueryNoConflict.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSArray},$ps:[{$nm:'removeAll',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryNoConflict']};};
function jQueryNoop(){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'325:2-325:7','jquery.ceylon'):jQuery).noop();
    /*End dynamic block*/
}
exports.jQueryNoop=jQueryNoop;
jQueryNoop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryNoop']};};
function jQueryNow(){
    /*Begin dynamic block*/
    return $$$cjl361.JSNumber((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'331:18-331:23','jquery.ceylon'):jQuery).now());
    /*End dynamic block*/
}
exports.jQueryNow=jQueryNow;
jQueryNow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryNow']};};
function jQueryParam(obj$1252,traditional$1253){
    if(traditional$1253===undefined){traditional$1253=false;}
    /*Begin dynamic block*/
    return $$$cjl361.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'337:18-337:23','jquery.ceylon'):jQuery).param(/*NULL PARAM!*/obj$1252/*NULL PARAM!*/,traditional$1253));
    /*End dynamic block*/
}
exports.jQueryParam=jQueryParam;
jQueryParam.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[{$nm:'obj',$mt:'prm',$t:{ t:'u', l:[{t:$$$cjl361.JSArray},{t:$$$cjl361.JSObject}]},$an:function(){return[];}},{$nm:'traditional',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryParam']};};
function jQueryParseHTML(data$1254,context$1255,keepScripts$1256){
    if(context$1255===undefined){context$1255=null;}
    if(keepScripts$1256===undefined){keepScripts$1256=false;}
    /*Begin dynamic block*/
    return $$$cjl361.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'343:18-343:23','jquery.ceylon'):jQuery).parseHTML(/*NULL PARAM!*/data$1254.valueOf()/*NULL PARAM!*/,context$1255/*NULL PARAM!*/,keepScripts$1256));
    /*End dynamic block*/
}
exports.jQueryParseHTML=jQueryParseHTML;
jQueryParseHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[{$nm:'data',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd977.Element}]},$an:function(){return[];}},{$nm:'keepScripts',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryParseHTML']};};
function jQueryParseJSON(json$1257){
    /*Begin dynamic block*/
    return $$$cjl361.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'349:18-349:23','jquery.ceylon'):jQuery).parseJSON(/*NULL PARAM!*/(typeof data==='undefined'||data===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: data")),'349:35-349:38','jquery.ceylon'):data)/*NULL PARAM!*/,(typeof context==='undefined'||context===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: context")),'349:41-349:47','jquery.ceylon'):context)/*NULL PARAM!*/,(typeof keepScripts==='undefined'||keepScripts===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: keepScripts")),'349:50-349:60','jquery.ceylon'):keepScripts)));
    /*End dynamic block*/
}
exports.jQueryParseJSON=jQueryParseJSON;
jQueryParseJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSObject},$ps:[{$nm:'json',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryParseJSON']};};
function jQueryParseXML(data$1258){
    /*Begin dynamic block*/
    return $$$cjl361.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'355:18-355:23','jquery.ceylon'):jQuery).parseXML(/*NULL PARAM!*/data$1258.valueOf()));
    /*End dynamic block*/
}
exports.jQueryParseXML=jQueryParseXML;
jQueryParseXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSObject},$ps:[{$nm:'data',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryParseXML']};};
function jQueryPost(url$1259,data$1260,success$1261,dataType$1262){
    if(data$1260===undefined){data$1260=null;}
    if(success$1261===undefined){success$1261=null;}
    if(dataType$1262===undefined){dataType$1262=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'362:15-362:20','jquery.ceylon'):jQuery).post(/*NULL PARAM!*/url$1259.valueOf()/*NULL PARAM!*/,data$1260/*NULL PARAM!*/,success$1261/*NULL PARAM!*/,dataType$1262));
    /*End dynamic block*/
}
exports.jQueryPost=jQueryPost;
jQueryPost.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}},{$nm:'dataType',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryPost']};};
function jQueryProxy(func$1263,context$1264,additionalArguments$1265){
    if(additionalArguments$1265===undefined){additionalArguments$1265=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return $$$cjl361.JSFunction((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'368:20-368:25','jquery.ceylon'):jQuery).proxy(/*NULL PARAM!*/$$$cl1.$JsCallable(func$1263,[],{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,context$1264/*NULL PARAM!*/,additionalArguments$1265));
    /*End dynamic block*/
}
exports.jQueryProxy=jQueryProxy;
jQueryProxy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSFunction},$ps:[{$nm:'func',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:$$$cjl361.JSObject},$an:function(){return[];}},{$nm:'additionalArguments',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryProxy']};};
function jQueryProxyName(context$1266,name$1267,additionalArguments$1268){
    if(additionalArguments$1268===undefined){additionalArguments$1268=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return $$$cjl361.JSFunction((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'374:20-374:25','jquery.ceylon'):jQuery).proxy(/*NULL PARAM!*/context$1266/*NULL PARAM!*/,(typeof func==='undefined'||func===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: func")),'374:42-374:45','jquery.ceylon'):func)/*NULL PARAM!*/,additionalArguments$1268));
    /*End dynamic block*/
}
exports.jQueryProxyName=jQueryProxyName;
jQueryProxyName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSFunction},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cjl361.JSObject},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'additionalArguments',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryProxyName']};};
function jQueryGetQueue(element$1269,queueName$1270){
    if(queueName$1270===undefined){queueName$1270=$$$cl1.String("fx",2);}
    /*Begin dynamic block*/
    return $$$cjl361.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'381:17-381:22','jquery.ceylon'):jQuery).queue(/*NULL PARAM!*/element$1269/*NULL PARAM!*/,queueName$1270.valueOf()));
    /*End dynamic block*/
}
exports.jQueryGetQueue=jQueryGetQueue;
jQueryGetQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSArray},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd977.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("returns JSFunctions[]",21)),$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGetQueue']};};
function jQuerySetQueue(element$1271,queueName$1272,callbacks$1273){
    if(queueName$1272===undefined){queueName$1272=$$$cl1.String("fx",2);}
    if(callbacks$1273===undefined){callbacks$1273=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'387:16-387:21','jquery.ceylon'):jQuery).queue(/*NULL PARAM!*/element$1271/*NULL PARAM!*/,queueName$1272.valueOf()/*NULL PARAM!*/,callbacks$1273));
    /*End dynamic block*/
}
exports.jQuerySetQueue=jQuerySetQueue;
jQuerySetQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd977.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQuerySetQueue']};};
function jQueryRemoveData(element$1274,name$1275){
    if(name$1275===undefined){name$1275=null;}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'393:16-393:21','jquery.ceylon'):jQuery).removeData(/*NULL PARAM!*/element$1274/*NULL PARAM!*/,name$1275));
    /*End dynamic block*/
}
exports.jQueryRemoveData=jQueryRemoveData;
jQueryRemoveData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd977.Element},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryRemoveData']};};
function jQueryTrim(str$1276){
    /*Begin dynamic block*/
    return $$$cjl361.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'399:18-399:23','jquery.ceylon'):jQuery).trim(/*NULL PARAM!*/str$1276.$native));
    /*End dynamic block*/
}
exports.jQueryTrim=jQueryTrim;
jQueryTrim.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[{$nm:'str',$mt:'prm',$t:{t:$$$cjl361.JSString},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryTrim']};};
function jQueryType(obj$1277){
    /*Begin dynamic block*/
    return $$$cjl361.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'405:18-405:23','jquery.ceylon'):jQuery).type(/*NULL PARAM!*/obj$1277.$native));
    /*End dynamic block*/
}
exports.jQueryType=jQueryType;
jQueryType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl361.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryType']};};
function jQueryUnique(arr$1278){
    /*Begin dynamic block*/
    return $$$cjl361.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'411:17-411:22','jquery.ceylon'):jQuery).unique(/*NULL PARAM!*/arr$1278.$native));
    /*End dynamic block*/
}
exports.jQueryUnique=jQueryUnique;
jQueryUnique.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSArray},$ps:[{$nm:'arr',$mt:'prm',$t:{t:$$$cjl361.JSArray},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryUnique']};};
function jQueryWhen(deferreds$1279){
    if(deferreds$1279===undefined){deferreds$1279=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return Promise((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'417:17-417:22','jquery.ceylon'):jQuery).when(/*NULL PARAM!*/(function(){
        var lst$1280=[];
        var it$1281=deferreds$1279.iterator();
        var elem$1282;
        while ((elem$1282=it$1281.next())!==$$$cl1.getFinished()){
            lst$1280.push(elem$1282.$native);
        }
        return $$$cl1.ArraySequence(lst$1280);
    }())));
    /*End dynamic block*/
}
exports.jQueryWhen=jQueryWhen;
jQueryWhen.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'deferreds',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:Deferred}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryWhen']};};
function jq(selector$1283,context$1284){
    if(selector$1283===undefined){selector$1283=null;}
    if(context$1284===undefined){context$1284=null;}
    /*Begin dynamic block*/
    
    var case$1285=selector$1283;
    if ($$$cl1.isOfType(selector$1283,{t:$$$cl1.String})) {
        
        var case$1286=context$1284;
        if ($$$cl1.isOfType(context$1284,{ t:'u', l:[{t:$$$cjd977.Element},{t:JQuery}]})) {
            return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'427:18-427:23','jquery.ceylon'):jQuery)(/*NULL PARAM!*/case$1285.valueOf()/*NULL PARAM!*/,case$1286.$native));
        }else if ($$$cl1.isOfType(context$1284,{t:$$$cl1.Null})) {
            return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'430:18-430:23','jquery.ceylon'):jQuery)(/*NULL PARAM!*/case$1285.valueOf()));
        }
    }else if ($$$cl1.isOfType(selector$1283,{ t:'u', l:[{t:JQuery},{t:$$$cjl361.JSObject},{t:$$$cjd977.Element}]})) {
        return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'434:17-434:22','jquery.ceylon'):jQuery)(/*NULL PARAM!*/case$1285.$native));
    }else if ($$$cl1.isOfType(selector$1283,{t:$$$cl1.Null})) {
        return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'437:17-437:22','jquery.ceylon'):jQuery)());
    }/*End dynamic block*/
}
exports.jq=jq;
jq.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cjl361.JSObject},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd977.Element}]}]},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cjd977.Element},{ t:'u', l:[{t:$$$cl1.Null},{t:JQuery}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jq']};};
function jqThis(){
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'444:16-444:21','jquery.ceylon'):jQuery)(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'444:23-444:26','jquery.ceylon'):this)));
    /*End dynamic block*/
}
exports.jqThis=jqThis;
jqThis.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jqThis']};};
function jqElems(elems$1287){
    if(elems$1287===undefined){elems$1287=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'450:16-450:21','jquery.ceylon'):jQuery)(/*NULL PARAM!*/(function(){
        var lst$1288=[];
        var it$1289=elems$1287.iterator();
        var elem$1290;
        while ((elem$1290=it$1289.next())!==$$$cl1.getFinished()){
            lst$1288.push(elem$1290.$native);
        }
        return $$$cl1.ArraySequence(lst$1288);
    }())));
    /*End dynamic block*/
}
exports.jqElems=jqElems;
jqElems.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elems',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequence,a:{Element:{t:$$$cjd977.Element}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jqElems']};};
function JQueryAbs($$jQueryAbs){
    $init$JQueryAbs();
    if ($$jQueryAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$jQueryAbs);
    function add(append$1291){
        
        var case$1292=append$1291;
        if ($$$cl1.isOfType(append$1291,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/case$1292.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(append$1291,{t:JQuery})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/case$1292.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.add=add;
    add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'append',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','add']};};
    function addElements(elements$1293){
        if(elements$1293===undefined){elements$1293=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/(function(){
            var lst$1294=[];
            var it$1295=elements$1293.iterator();
            var elem$1296;
            while ((elem$1296=it$1295.next())!==$$$cl1.getFinished()){
                lst$1294.push(elem$1296.$native);
            }
            return $$$cl1.ArraySequence(lst$1294);
        }())));
        /*End dynamic block*/
    }
    $$jQueryAbs.addElements=addElements;
    addElements.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elements',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequence,a:{Element:{t:$$$cjd977.Element}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addElements']};};
    $$jQueryAbs.addSelector$defs$context=function(selector$1297,context$1298){return null;};
    function addSelector(selector$1297,context$1298){
        if(context$1298===undefined){context$1298=$$jQueryAbs.addSelector$defs$context(selector$1297,context$1298);}
        /*Begin dynamic block*/
        var c$1299;
        if((c$1299=context$1298)!==null){
            return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/selector$1297.valueOf()/*NULL PARAM!*/,c$1299));
        }else {
            return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/selector$1297.valueOf()));
        }/*End dynamic block*/
    }
    $$jQueryAbs.addSelector=addSelector;
    addSelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd977.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addSelector']};};
    $$jQueryAbs.addBack$defs$selector=function(selector$1300){return null;};
    function addBack(selector$1300){
        if(selector$1300===undefined){selector$1300=$$jQueryAbs.addBack$defs$selector(selector$1300);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.addBack(/*NULL PARAM!*/selector$1300));
        /*End dynamic block*/
    }
    $$jQueryAbs.addBack=addBack;
    addBack.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addBack']};};
    function addClass(className$1301){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.addClass(/*NULL PARAM!*/className$1301.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.addClass=addClass;
    addClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addClass']};};
    function addClassCallback(callback$1302){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.addClass(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1302,[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'currentClass',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.addClassCallback=addClassCallback;
    addClassCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addClassCallback']};};
    function after(content$1303){
        if(content$1303===undefined){content$1303=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl361.JSFunction($$jQueryAbs.$native.after).$apply(null,content$1303));
        /*End dynamic block*/
    }
    $$jQueryAbs.after=after;
    after.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','after']};};
    function afterElements(content$1304){
        if(content$1304===undefined){content$1304=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl361.JSFunction($$jQueryAbs.$native.after).$apply(null,(tmpvar$1305=(function(){
            var lst$1306=[];
            var it$1307=content$1304.iterator();
            var elem$1308;
            while ((elem$1308=it$1307.next())!==$$$cl1.getFinished()){
                lst$1306.push(elem$1308.$native);
            }
            return $$$cl1.ArraySequence(lst$1306);
        }()),$$$cl1.isOfType(tmpvar$1305,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1305:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'513:54-513:68','jquery.ceylon'))));
        /*End dynamic block*/
    }
    $$jQueryAbs.afterElements=afterElements;
    afterElements.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cjd977.Element}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','afterElements']};};
    function afterJQuery(content$1309){
        if(content$1309===undefined){content$1309=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl361.JSFunction($$jQueryAbs.$native.after).$apply(null,(tmpvar$1310=(function(){
            var lst$1311=[];
            var it$1312=content$1309.iterator();
            var elem$1313;
            while ((elem$1313=it$1312.next())!==$$$cl1.getFinished()){
                lst$1311.push(elem$1313.$native);
            }
            return $$$cl1.ArraySequence(lst$1311);
        }()),$$$cl1.isOfType(tmpvar$1310,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1310:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'520:54-520:68','jquery.ceylon'))));
        /*End dynamic block*/
    }
    $$jQueryAbs.afterJQuery=afterJQuery;
    afterJQuery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:JQuery}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','afterJQuery']};};
    function ajaxComplete(handler$1314){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxComplete(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1314,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxComplete=ajaxComplete;
    ajaxComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxComplete']};};
    function ajaxError(handler$1315){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxError(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1315,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxError=ajaxError;
    ajaxError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxError']};};
    function ajaxSend(handler$1316){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxSend(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1316,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxSend=ajaxSend;
    ajaxSend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxSend']};};
    function ajaxStart(handler$1317){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxStart(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1317,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxStart=ajaxStart;
    ajaxStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxStart']};};
    function ajaxStop(handler$1318){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxStop(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1318,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxStop=ajaxStop;
    ajaxStop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxStop']};};
    function ajaxSuccess(handler$1319){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxSuccess(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1319,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxSuccess=ajaxSuccess;
    ajaxSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxSuccess']};};
    $$jQueryAbs.animate$defs$duration=function(properties$1320,duration$1321,easing$1322,complete$1323){return null;};
    $$jQueryAbs.animate$defs$easing=function(properties$1320,duration$1321,easing$1322,complete$1323){return null;};
    $$jQueryAbs.animate$defs$complete=function(properties$1320,duration$1321,easing$1322,complete$1323){return null;};
    function animate(properties$1320,duration$1321,easing$1322,complete$1323){
        if(duration$1321===undefined){duration$1321=$$jQueryAbs.animate$defs$duration(properties$1320,duration$1321,easing$1322,complete$1323);}
        if(easing$1322===undefined){easing$1322=$$jQueryAbs.animate$defs$easing(properties$1320,duration$1321,easing$1322,complete$1323);}
        if(complete$1323===undefined){complete$1323=$$jQueryAbs.animate$defs$complete(properties$1320,duration$1321,easing$1322,complete$1323);}
        var propertiesNative$1324=$$$cjl361.createJSObject();
        var it$1325 = properties$1320.iterator();
        var item$1326;while ((item$1326=it$1325.next())!==$$$cl1.getFinished()){
            var key$1327=item$1326.key;
            var val$1328=item$1326.item;
            /*Begin dynamic block*/
            $$$cjl361.objectDefineProperty(propertiesNative$1324,(tmpvar$1329=$$$cjl361.createJSString(key$1327),$$$cl1.isOfType(tmpvar$1329,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]})?tmpvar$1329:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'569:43-569:61','jquery.ceylon')),$$$cjl361.DataDescriptor(true,false,true,true,val$1328));
            /*End dynamic block*/
        }
        
        var case$1330=duration$1321;
        if ($$$cl1.isOfType(duration$1321,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]})) {
            
            var case$1331=easing$1322;
            if ($$$cl1.isOfType(easing$1322,{t:$$$cl1.String})) {
                var c$1332;
                if((c$1332=complete$1323)!==null){
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1324.$native/*NULL PARAM!*/,case$1330/*NULL PARAM!*/,case$1331.valueOf()/*NULL PARAM!*/,complete$1323));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1324.$native/*NULL PARAM!*/,case$1330/*NULL PARAM!*/,case$1331.valueOf()));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(easing$1322,{t:$$$cl1.Null})) {
                var c$1333;
                if((c$1333=complete$1323)!==null){
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1324.$native/*NULL PARAM!*/,case$1330/*NULL PARAM!*/,null/*NULL PARAM!*/,complete$1323));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1324.$native/*NULL PARAM!*/,case$1330));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(duration$1321,{t:$$$cl1.Null})) {
            
            var case$1334=easing$1322;
            if ($$$cl1.isOfType(easing$1322,{t:$$$cl1.String})) {
                var c$1335;
                if((c$1335=complete$1323)!==null){
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1324.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1334.valueOf()/*NULL PARAM!*/,complete$1323));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1324.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1334.valueOf()));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(easing$1322,{t:$$$cl1.Null})) {
                var c$1336;
                if((c$1336=complete$1323)!==null){
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1324.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,complete$1323));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1324.$native));
                    /*End dynamic block*/
                }
            }
        }
    }
    $$jQueryAbs.animate=animate;
    animate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$an:function(){return[];}},{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','animate']};};
    function animateOptions(properties$1337,options$1338){
        var propertiesNative$1339=$$$cjl361.createJSObject();
        var it$1340 = properties$1337.iterator();
        var item$1341;while ((item$1341=it$1340.next())!==$$$cl1.getFinished()){
            var key$1342=item$1341.key;
            var val$1343=item$1341.item;
            /*Begin dynamic block*/
            $$$cjl361.objectDefineProperty(propertiesNative$1339,(tmpvar$1344=$$$cjl361.createJSString(key$1342),$$$cl1.isOfType(tmpvar$1344,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]})?tmpvar$1344:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'629:43-629:61','jquery.ceylon')),$$$cjl361.DataDescriptor(true,false,true,true,val$1343));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1339.$native/*NULL PARAM!*/,options$1338.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.animateOptions=animateOptions;
    animateOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$an:function(){return[];}},{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','animateOptions']};};
    function append(content$1345){
        if(content$1345===undefined){content$1345=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl361.JSFunction($$jQueryAbs.$native.append).$apply(null,(tmpvar$1346=(function(){
            var lst$1347=[];
            var it$1348=content$1345.iterator();
            var elem$1349;
            while ((elem$1349=it$1348.next())!==$$$cl1.getFinished()){
                lst$1347.push(elem$1349.$native);
            }
            return $$$cl1.ArraySequence(lst$1347);
        }()),$$$cl1.isOfType(tmpvar$1346,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1346:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'639:55-639:69','jquery.ceylon'))));
        /*End dynamic block*/
    }
    $$jQueryAbs.append=append;
    append.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{ t:'u', l:[{t:$$$cjd977.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','append']};};
    function appendHTML(content$1350){
        if(content$1350===undefined){content$1350=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.append(/*NULL PARAM!*/content$1350));
        /*End dynamic block*/
    }
    $$jQueryAbs.appendHTML=appendHTML;
    appendHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','appendHTML']};};
    function appendCallback(callback$1351){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.append(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1351,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.appendCallback=appendCallback;
    appendCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','appendCallback']};};
    function appendTo(target$1352){
        
        var case$1353=target$1352;
        if ($$$cl1.isOfType(target$1352,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.appendTo(/*NULL PARAM!*/case$1353.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$1352,{ t:'u', l:[{t:$$$cjd977.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.appendTo(/*NULL PARAM!*/case$1353.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.appendTo=appendTo;
    appendTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd977.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','appendTo']};};
    function getAttr(attributeName$1354){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$jQueryAbs.$native.attr(/*NULL PARAM!*/attributeName$1354.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.getAttr=getAttr;
    getAttr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getAttr']};};
    function setAttr(attributeName$1355,val$1356){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.attr(/*NULL PARAM!*/attributeName$1355.valueOf()/*NULL PARAM!*/,val$1356));
        /*End dynamic block*/
    }
    $$jQueryAbs.setAttr=setAttr;
    setAttr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setAttr']};};
    function setAttrEntries(entries$1357){
        if(entries$1357===undefined){entries$1357=$$$cl1.getEmpty();}
        var entriesNative$1358=$$$cjl361.createJSObject();
        var it$1359 = entries$1357.iterator();
        var item$1360;while ((item$1360=it$1359.next())!==$$$cl1.getFinished()){
            var key$1361=item$1360.key;
            var val$1362=item$1360.item;
            /*Begin dynamic block*/
            $$$cjl361.objectDefineProperty(entriesNative$1358,(tmpvar$1363=$$$cjl361.createJSString(key$1361),$$$cl1.isOfType(tmpvar$1363,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]})?tmpvar$1363:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'685:40-685:58','jquery.ceylon')),$$$cjl361.DataDescriptor(true,false,true,true,val$1362));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.attr(/*NULL PARAM!*/entriesNative$1358));
        /*End dynamic block*/
    }
    $$jQueryAbs.setAttrEntries=setAttrEntries;
    setAttrEntries.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'entries',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setAttrEntries']};};
    function setAttrCallback(attributeName$1364,callback$1365){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.attr(/*NULL PARAM!*/(typeof entriesNative==='undefined'||entriesNative===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: entriesNative")),'695:29-695:41','jquery.ceylon'):entriesNative)/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1365,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setAttrCallback=setAttrCallback;
    setAttrCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setAttrCallback']};};
    function before(content$1366){
        if(content$1366===undefined){content$1366=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl361.JSFunction($$jQueryAbs.$native.before).$apply(null,(tmpvar$1367=(function(){
            var lst$1368=[];
            var it$1369=content$1366.iterator();
            var elem$1370;
            while ((elem$1370=it$1369.next())!==$$$cl1.getFinished()){
                lst$1368.push(elem$1370.$native);
            }
            return $$$cl1.ArraySequence(lst$1368);
        }()),$$$cl1.isOfType(tmpvar$1367,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1367:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'701:55-701:69','jquery.ceylon'))));
        /*End dynamic block*/
    }
    $$jQueryAbs.before=before;
    before.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{ t:'u', l:[{t:$$$cjd977.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','before']};};
    function beforeHTML(content$1371){
        if(content$1371===undefined){content$1371=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.before(/*NULL PARAM!*/content$1371));
        /*End dynamic block*/
    }
    $$jQueryAbs.beforeHTML=beforeHTML;
    beforeHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','beforeHTML']};};
    function beforeCallback(callback$1372){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.before(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1372,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.beforeCallback=beforeCallback;
    beforeCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','beforeCallback']};};
    $$jQueryAbs.bind$defs$eventData=function(eventType$1373,eventData$1374,preventBubble$1375){return null;};
    $$jQueryAbs.bind$defs$preventBubble=function(eventType$1373,eventData$1374,preventBubble$1375){return true;};
    function bind(eventType$1373,eventData$1374,preventBubble$1375){
        if(eventData$1374===undefined){eventData$1374=$$jQueryAbs.bind$defs$eventData(eventType$1373,eventData$1374,preventBubble$1375);}
        if(preventBubble$1375===undefined){preventBubble$1375=$$jQueryAbs.bind$defs$preventBubble(eventType$1373,eventData$1374,preventBubble$1375);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.bind(/*NULL PARAM!*/eventType$1373.valueOf()/*NULL PARAM!*/,eventData$1374/*NULL PARAM!*/,preventBubble$1375));
        /*End dynamic block*/
    }
    $$jQueryAbs.bind=bind;
    bind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'preventBubble',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','bind']};};
    function bindCallback(eventType$1376,eventData$1377,handler$1378){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.bind(/*NULL PARAM!*/eventType$1376.valueOf()/*NULL PARAM!*/,eventData$1377/*NULL PARAM!*/,$$$cl1.$JsCallable(handler$1378,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.bindCallback=bindCallback;
    bindCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','bindCallback']};};
    function bindEvents(events$1379){
        if(events$1379===undefined){events$1379=$$$cl1.getEmpty();}
        var eventsNative$1380=$$$cjl361.createJSObject();
        var it$1381 = events$1379.iterator();
        var item$1382;while ((item$1382=it$1381.next())!==$$$cl1.getFinished()){
            var key$1383=item$1382.key;
            var val$1384=item$1382.item;
            /*Begin dynamic block*/
            $$$cjl361.objectDefineProperty(eventsNative$1380,(tmpvar$1385=$$$cjl361.createJSString(key$1383),$$$cl1.isOfType(tmpvar$1385,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]})?tmpvar$1385:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'733:39-733:57','jquery.ceylon')),$$$cjl361.DataDescriptor(true,false,true,true,$$$cl1.$JsCallable(val$1384,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.bind(/*NULL PARAM!*/eventsNative$1380));
        /*End dynamic block*/
    }
    $$jQueryAbs.bindEvents=bindEvents;
    bindEvents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','bindEvents']};};
    $$jQueryAbs.blur$defs$eventData=function(eventData$1386,handler$1387){return null;};
    $$jQueryAbs.blur$defs$handler=function(eventData$1386,handler$1387){return null;};
    function blur(eventData$1386,handler$1387){
        if(eventData$1386===undefined){eventData$1386=$$jQueryAbs.blur$defs$eventData(eventData$1386,handler$1387);}
        if(handler$1387===undefined){handler$1387=$$jQueryAbs.blur$defs$handler(eventData$1386,handler$1387);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.blur(/*NULL PARAM!*/eventData$1386/*NULL PARAM!*/,handler$1387));
        /*End dynamic block*/
    }
    $$jQueryAbs.blur=blur;
    blur.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','blur']};};
    $$jQueryAbs.change$defs$eventData=function(eventData$1388,handler$1389){return null;};
    $$jQueryAbs.change$defs$handler=function(eventData$1388,handler$1389){return null;};
    function change(eventData$1388,handler$1389){
        if(eventData$1388===undefined){eventData$1388=$$jQueryAbs.change$defs$eventData(eventData$1388,handler$1389);}
        if(handler$1389===undefined){handler$1389=$$jQueryAbs.change$defs$handler(eventData$1388,handler$1389);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.blur(/*NULL PARAM!*/eventData$1388/*NULL PARAM!*/,handler$1389));
        /*End dynamic block*/
    }
    $$jQueryAbs.change=change;
    change.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','change']};};
    $$jQueryAbs.children$defs$selector=function(selector$1390){return null;};
    function children(selector$1390){
        if(selector$1390===undefined){selector$1390=$$jQueryAbs.children$defs$selector(selector$1390);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.children(/*NULL PARAM!*/selector$1390));
        /*End dynamic block*/
    }
    $$jQueryAbs.children=children;
    children.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','children']};};
    $$jQueryAbs.clearQueue$defs$queueName=function(queueName$1391){return $$$cl1.String("fx",2);};
    function clearQueue(queueName$1391){
        if(queueName$1391===undefined){queueName$1391=$$jQueryAbs.clearQueue$defs$queueName(queueName$1391);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.clearQueue(/*NULL PARAM!*/queueName$1391.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.clearQueue=clearQueue;
    clearQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','clearQueue']};};
    $$jQueryAbs.click$defs$eventData=function(eventData$1392,handler$1393){return null;};
    $$jQueryAbs.click$defs$handler=function(eventData$1392,handler$1393){return null;};
    function click(eventData$1392,handler$1393){
        if(eventData$1392===undefined){eventData$1392=$$jQueryAbs.click$defs$eventData(eventData$1392,handler$1393);}
        if(handler$1393===undefined){handler$1393=$$jQueryAbs.click$defs$handler(eventData$1392,handler$1393);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.click(/*NULL PARAM!*/eventData$1392/*NULL PARAM!*/,handler$1393));
        /*End dynamic block*/
    }
    $$jQueryAbs.click=click;
    click.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','click']};};
    $$jQueryAbs.clone$defs$withDataAndEvents=function(withDataAndEvents$1394,deepWithDataAndEvents$1395){return false;};
    $$jQueryAbs.clone$defs$deepWithDataAndEvents=function(withDataAndEvents$1394,deepWithDataAndEvents$1395){return null;};
    function clone(withDataAndEvents$1394,deepWithDataAndEvents$1395){
        if(withDataAndEvents$1394===undefined){withDataAndEvents$1394=$$jQueryAbs.clone$defs$withDataAndEvents(withDataAndEvents$1394,deepWithDataAndEvents$1395);}
        if(deepWithDataAndEvents$1395===undefined){deepWithDataAndEvents$1395=$$jQueryAbs.clone$defs$deepWithDataAndEvents(withDataAndEvents$1394,deepWithDataAndEvents$1395);}
        var deep$1396;
        if((deep$1396=deepWithDataAndEvents$1395)!==null){
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.clone(/*NULL PARAM!*/withDataAndEvents$1394/*NULL PARAM!*/,deep$1396));
            /*End dynamic block*/
        }else {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.clone(/*NULL PARAM!*/withDataAndEvents$1394));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.clone=clone;
    clone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'withDataAndEvents',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'deepWithDataAndEvents',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','clone']};};
    $$jQueryAbs.closest$defs$context=function(selector$1397,context$1398){return null;};
    function closest(selector$1397,context$1398){
        if(context$1398===undefined){context$1398=$$jQueryAbs.closest$defs$context(selector$1397,context$1398);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.closest(/*NULL PARAM!*/selector$1397.valueOf()/*NULL PARAM!*/,context$1398));
        /*End dynamic block*/
    }
    $$jQueryAbs.closest=closest;
    closest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd977.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','closest']};};
    function closestElement(elem$1399){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.closest(/*NULL PARAM!*/elem$1399.$native));
        /*End dynamic block*/
    }
    $$jQueryAbs.closestElement=closestElement;
    closestElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elem',$mt:'prm',$t:{t:$$$cjd977.Element},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','closestElement']};};
    function closestjQuery(jq$1400){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.closest(/*NULL PARAM!*/jq$1400.$native));
        /*End dynamic block*/
    }
    $$jQueryAbs.closestjQuery=closestjQuery;
    closestjQuery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'jq',$mt:'prm',$t:{t:JQuery},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','closestjQuery']};};
    function contents(){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.contents());
        /*End dynamic block*/
    }
    $$jQueryAbs.contents=contents;
    contents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','contents']};};
    function getCss(properties$1401){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$jQueryAbs.$native.css(/*NULL PARAM!*/properties$1401));
        /*End dynamic block*/
    }
    $$jQueryAbs.getCss=getCss;
    getCss.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[{$nm:'properties',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getCss']};};
    function setCss(property$1402,val$1403){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.css(/*NULL PARAM!*/property$1402.valueOf()/*NULL PARAM!*/,val$1403));
        /*End dynamic block*/
    }
    $$jQueryAbs.setCss=setCss;
    setCss.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Number}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setCss']};};
    function setCssCallback(property$1404,callback$1405){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.css(/*NULL PARAM!*/property$1404.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1405,[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setCssCallback=setCssCallback;
    setCssCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setCssCallback']};};
    function setCssJson(property$1406,val$1407){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.css(/*NULL PARAM!*/property$1406.valueOf()/*NULL PARAM!*/,val$1407.$native));
        /*End dynamic block*/
    }
    $$jQueryAbs.setCssJson=setCssJson;
    setCssJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cjj661.JSJSON},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setCssJson']};};
    function setData(key$1408,data$1409){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.data(/*NULL PARAM!*/key$1408.valueOf()/*NULL PARAM!*/,data$1409.$native));
        /*End dynamic block*/
    }
    $$jQueryAbs.setData=setData;
    setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:$$$cjl361.JSObject},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setData']};};
    function setDataEntries(events$1410){
        if(events$1410===undefined){events$1410=$$$cl1.getEmpty();}
        var dataNative$1411=$$$cjl361.createJSObject();
        var it$1412 = events$1410.iterator();
        var item$1413;while ((item$1413=it$1412.next())!==$$$cl1.getFinished()){
            var key$1414=item$1413.key;
            var val$1415=item$1413.item;
            /*Begin dynamic block*/
            $$$cjl361.objectDefineProperty(dataNative$1411,(tmpvar$1416=$$$cjl361.createJSString(key$1414),$$$cl1.isOfType(tmpvar$1416,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]})?tmpvar$1416:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'841:37-841:55','jquery.ceylon')),$$$cjl361.DataDescriptor(true,false,true,true,val$1415.$native));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.data(/*NULL PARAM!*/dataNative$1411));
        /*End dynamic block*/
    }
    $$jQueryAbs.setDataEntries=setDataEntries;
    setDataEntries.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl361.JSObject}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setDataEntries']};};
    $$jQueryAbs.getData$defs$key=function(key$1417){return null;};
    function getData(key$1417){
        if(key$1417===undefined){key$1417=$$jQueryAbs.getData$defs$key(key$1417);}
        var k$1418;
        if((k$1418=key$1417)!==null){
            /*Begin dynamic block*/
            return $$$cjl361.JSObject($$jQueryAbs.$native.data(/*NULL PARAM!*/key$1417));
            /*End dynamic block*/
        }else {
            /*Begin dynamic block*/
            return $$$cjl361.JSObject($$jQueryAbs.$native.data());
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.getData=getData;
    getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSObject},$ps:[{$nm:'key',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getData']};};
    $$jQueryAbs.dblclick$defs$eventData=function(eventData$1419,handler$1420){return null;};
    $$jQueryAbs.dblclick$defs$handler=function(eventData$1419,handler$1420){return null;};
    function dblclick(eventData$1419,handler$1420){
        if(eventData$1419===undefined){eventData$1419=$$jQueryAbs.dblclick$defs$eventData(eventData$1419,handler$1420);}
        if(handler$1420===undefined){handler$1420=$$jQueryAbs.dblclick$defs$handler(eventData$1419,handler$1420);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.blur(/*NULL PARAM!*/eventData$1419/*NULL PARAM!*/,handler$1420));
        /*End dynamic block*/
    }
    $$jQueryAbs.dblclick=dblclick;
    dblclick.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','dblclick']};};
    $$jQueryAbs.delay$defs$queueName=function(duration$1421,queueName$1422){return $$$cl1.String("fx",2);};
    function delay(duration$1421,queueName$1422){
        if(queueName$1422===undefined){queueName$1422=$$jQueryAbs.delay$defs$queueName(duration$1421,queueName$1422);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.delay(/*NULL PARAM!*/duration$1421/*NULL PARAM!*/,queueName$1422.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.delay=delay;
    delay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','delay']};};
    $$jQueryAbs.delegate$defs$eventData=function(selector$1423,eventType$1424,eventData$1425,handler$1426){return null;};
    $$jQueryAbs.delegate$defs$handler=function(selector$1423,eventType$1424,eventData$1425,handler$1426){return null;};
    function delegate(selector$1423,eventType$1424,eventData$1425,handler$1426){
        if(eventData$1425===undefined){eventData$1425=$$jQueryAbs.delegate$defs$eventData(selector$1423,eventType$1424,eventData$1425,handler$1426);}
        if(handler$1426===undefined){handler$1426=$$jQueryAbs.delegate$defs$handler(selector$1423,eventType$1424,eventData$1425,handler$1426);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.delegate(/*NULL PARAM!*/selector$1423.valueOf()/*NULL PARAM!*/,eventType$1424.valueOf()/*NULL PARAM!*/,eventData$1425/*NULL PARAM!*/,handler$1426));
        /*End dynamic block*/
    }
    $$jQueryAbs.delegate=delegate;
    delegate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','delegate']};};
    function delegateEvents(selector$1427,events$1428){
        if(events$1428===undefined){events$1428=$$$cl1.getEmpty();}
        var eventsNative$1429=$$$cjl361.createJSObject();
        var it$1430 = events$1428.iterator();
        var item$1431;while ((item$1431=it$1430.next())!==$$$cl1.getFinished()){
            var key$1432=item$1431.key;
            var val$1433=item$1431.item;
            /*Begin dynamic block*/
            $$$cjl361.objectDefineProperty(eventsNative$1429,(tmpvar$1434=$$$cjl361.createJSString(key$1432),$$$cl1.isOfType(tmpvar$1434,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]})?tmpvar$1434:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'883:39-883:57','jquery.ceylon')),$$$cjl361.DataDescriptor(true,false,true,true,$$$cl1.$JsCallable(val$1433,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.delegate(/*NULL PARAM!*/selector$1427.valueOf()/*NULL PARAM!*/,eventsNative$1429));
        /*End dynamic block*/
    }
    $$jQueryAbs.delegateEvents=delegateEvents;
    delegateEvents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'events',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','delegateEvents']};};
    $$jQueryAbs.dequeue$defs$queueName=function(queueName$1435){return null;};
    function dequeue(queueName$1435){
        if(queueName$1435===undefined){queueName$1435=$$jQueryAbs.dequeue$defs$queueName(queueName$1435);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.dequeue(/*NULL PARAM!*/queueName$1435));
        /*End dynamic block*/
    }
    $$jQueryAbs.dequeue=dequeue;
    dequeue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','dequeue']};};
    $$jQueryAbs.detach$defs$selector=function(selector$1436){return null;};
    function detach(selector$1436){
        if(selector$1436===undefined){selector$1436=$$jQueryAbs.detach$defs$selector(selector$1436);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.detach(/*NULL PARAM!*/selector$1436));
        /*End dynamic block*/
    }
    $$jQueryAbs.detach=detach;
    detach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','detach']};};
    $$jQueryAbs.die$defs$eventData=function(eventData$1437,handler$1438){return null;};
    $$jQueryAbs.die$defs$handler=function(eventData$1437,handler$1438){return null;};
    function die(eventData$1437,handler$1438){
        if(eventData$1437===undefined){eventData$1437=$$jQueryAbs.die$defs$eventData(eventData$1437,handler$1438);}
        if(handler$1438===undefined){handler$1438=$$jQueryAbs.die$defs$handler(eventData$1437,handler$1438);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.die(/*NULL PARAM!*/eventData$1437/*NULL PARAM!*/,handler$1438));
        /*End dynamic block*/
    }
    $$jQueryAbs.die=die;
    die.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','die']};};
    function each(handler$1439){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.each(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1439,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.each=each;
    each.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','each']};};
    function empty(){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.empty());
        /*End dynamic block*/
    }
    $$jQueryAbs.empty=empty;
    empty.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','empty']};};
    function end(){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.end());
        /*End dynamic block*/
    }
    $$jQueryAbs.end=end;
    end.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','end']};};
    function eq(index$1440){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.eq(/*NULL PARAM!*/index$1440));
        /*End dynamic block*/
    }
    $$jQueryAbs.eq=eq;
    eq.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','eq']};};
    $$jQueryAbs.error$defs$eventData=function(eventData$1441,handler$1442){return null;};
    $$jQueryAbs.error$defs$handler=function(eventData$1441,handler$1442){return null;};
    function error(eventData$1441,handler$1442){
        if(eventData$1441===undefined){eventData$1441=$$jQueryAbs.error$defs$eventData(eventData$1441,handler$1442);}
        if(handler$1442===undefined){handler$1442=$$jQueryAbs.error$defs$handler(eventData$1441,handler$1442);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.error(/*NULL PARAM!*/eventData$1441/*NULL PARAM!*/,handler$1442));
        /*End dynamic block*/
    }
    $$jQueryAbs.error=error;
    error.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','error']};};
    $$jQueryAbs.fadeIn$defs$duration=function(duration$1443,easing$1444,complete$1445){return null;};
    $$jQueryAbs.fadeIn$defs$easing=function(duration$1443,easing$1444,complete$1445){return null;};
    $$jQueryAbs.fadeIn$defs$complete=function(duration$1443,easing$1444,complete$1445){return null;};
    function fadeIn(duration$1443,easing$1444,complete$1445){
        if(duration$1443===undefined){duration$1443=$$jQueryAbs.fadeIn$defs$duration(duration$1443,easing$1444,complete$1445);}
        if(easing$1444===undefined){easing$1444=$$jQueryAbs.fadeIn$defs$easing(duration$1443,easing$1444,complete$1445);}
        if(complete$1445===undefined){complete$1445=$$jQueryAbs.fadeIn$defs$complete(duration$1443,easing$1444,complete$1445);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeIn(/*NULL PARAM!*/duration$1443/*NULL PARAM!*/,easing$1444/*NULL PARAM!*/,complete$1445));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeIn=fadeIn;
    fadeIn.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeIn']};};
    function fadeInOptions(options$1446){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/options$1446.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeInOptions=fadeInOptions;
    fadeInOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeInOptions']};};
    $$jQueryAbs.fadeOut$defs$duration=function(duration$1447,easing$1448,complete$1449){return null;};
    $$jQueryAbs.fadeOut$defs$easing=function(duration$1447,easing$1448,complete$1449){return null;};
    $$jQueryAbs.fadeOut$defs$complete=function(duration$1447,easing$1448,complete$1449){return null;};
    function fadeOut(duration$1447,easing$1448,complete$1449){
        if(duration$1447===undefined){duration$1447=$$jQueryAbs.fadeOut$defs$duration(duration$1447,easing$1448,complete$1449);}
        if(easing$1448===undefined){easing$1448=$$jQueryAbs.fadeOut$defs$easing(duration$1447,easing$1448,complete$1449);}
        if(complete$1449===undefined){complete$1449=$$jQueryAbs.fadeOut$defs$complete(duration$1447,easing$1448,complete$1449);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/duration$1447/*NULL PARAM!*/,easing$1448/*NULL PARAM!*/,complete$1449));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeOut=fadeOut;
    fadeOut.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeOut']};};
    function fadeOutOptions(options$1450){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/options$1450.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeOutOptions=fadeOutOptions;
    fadeOutOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeOutOptions']};};
    $$jQueryAbs.fadeTo$defs$easing=function(duration$1451,opacity$1452,easing$1453,complete$1454){return null;};
    $$jQueryAbs.fadeTo$defs$complete=function(duration$1451,opacity$1452,easing$1453,complete$1454){return null;};
    function fadeTo(duration$1451,opacity$1452,easing$1453,complete$1454){
        if(easing$1453===undefined){easing$1453=$$jQueryAbs.fadeTo$defs$easing(duration$1451,opacity$1452,easing$1453,complete$1454);}
        if(complete$1454===undefined){complete$1454=$$jQueryAbs.fadeTo$defs$complete(duration$1451,opacity$1452,easing$1453,complete$1454);}
        /*Begin dynamic block*/
        $$jQueryAbs.$native.fadeTo(/*NULL PARAM!*/duration$1451/*NULL PARAM!*/,opacity$1452.valueOf()/*NULL PARAM!*/,easing$1453/*NULL PARAM!*/,complete$1454);
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeTo=fadeTo;
    fadeTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'duration',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]},$an:function(){return[];}},{$nm:'opacity',$mt:'prm',$t:{t:$$$cl1.Float},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeTo']};};
    $$jQueryAbs.fadeToggle$defs$duration=function(duration$1455,easing$1456,complete$1457){return null;};
    $$jQueryAbs.fadeToggle$defs$easing=function(duration$1455,easing$1456,complete$1457){return null;};
    $$jQueryAbs.fadeToggle$defs$complete=function(duration$1455,easing$1456,complete$1457){return null;};
    function fadeToggle(duration$1455,easing$1456,complete$1457){
        if(duration$1455===undefined){duration$1455=$$jQueryAbs.fadeToggle$defs$duration(duration$1455,easing$1456,complete$1457);}
        if(easing$1456===undefined){easing$1456=$$jQueryAbs.fadeToggle$defs$easing(duration$1455,easing$1456,complete$1457);}
        if(complete$1457===undefined){complete$1457=$$jQueryAbs.fadeToggle$defs$complete(duration$1455,easing$1456,complete$1457);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/duration$1455/*NULL PARAM!*/,easing$1456/*NULL PARAM!*/,complete$1457));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeToggle=fadeToggle;
    fadeToggle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeToggle']};};
    function fadeToggleOptions(options$1458){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/options$1458.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeToggleOptions=fadeToggleOptions;
    fadeToggleOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeToggleOptions']};};
    function filter(selector$1459){
        
        var case$1460=selector$1459;
        if ($$$cl1.isOfType(selector$1459,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.filter(/*NULL PARAM!*/case$1460.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1459,{ t:'u', l:[{t:$$$cjd977.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.filter(/*NULL PARAM!*/case$1460.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.filter=filter;
    filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd977.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','filter']};};
    function filterCallback(callback$1461){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.filter(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1461,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.filterCallback=filterCallback;
    filterCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','filterCallback']};};
    function find(selector$1462){
        
        var case$1463=selector$1462;
        if ($$$cl1.isOfType(selector$1462,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.find(/*NULL PARAM!*/case$1463.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1462,{ t:'u', l:[{t:$$$cjd977.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.find(/*NULL PARAM!*/case$1463.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.find=find;
    find.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd977.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','find']};};
    function finish(queue$1464){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.finish(/*NULL PARAM!*/(typeof ueue==='undefined'||ueue===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: ueue")),'1017:31-1017:34','jquery.ceylon'):ueue)));
        /*End dynamic block*/
    }
    $$jQueryAbs.finish=finish;
    finish.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queue',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','finish']};};
    function first(){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.first());
        /*End dynamic block*/
    }
    $$jQueryAbs.first=first;
    first.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','first']};};
    $$jQueryAbs.focus$defs$eventData=function(eventData$1465,handler$1466){return null;};
    $$jQueryAbs.focus$defs$handler=function(eventData$1465,handler$1466){return null;};
    function focus(eventData$1465,handler$1466){
        if(eventData$1465===undefined){eventData$1465=$$jQueryAbs.focus$defs$eventData(eventData$1465,handler$1466);}
        if(handler$1466===undefined){handler$1466=$$jQueryAbs.focus$defs$handler(eventData$1465,handler$1466);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.focus(/*NULL PARAM!*/eventData$1465/*NULL PARAM!*/,handler$1466));
        /*End dynamic block*/
    }
    $$jQueryAbs.focus=focus;
    focus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','focus']};};
    $$jQueryAbs.focusin$defs$eventData=function(eventData$1467,handler$1468){return null;};
    $$jQueryAbs.focusin$defs$handler=function(eventData$1467,handler$1468){return null;};
    function focusin(eventData$1467,handler$1468){
        if(eventData$1467===undefined){eventData$1467=$$jQueryAbs.focusin$defs$eventData(eventData$1467,handler$1468);}
        if(handler$1468===undefined){handler$1468=$$jQueryAbs.focusin$defs$handler(eventData$1467,handler$1468);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.focusin(/*NULL PARAM!*/eventData$1467/*NULL PARAM!*/,handler$1468));
        /*End dynamic block*/
    }
    $$jQueryAbs.focusin=focusin;
    focusin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','focusin']};};
    $$jQueryAbs.focusout$defs$eventData=function(eventData$1469,handler$1470){return null;};
    $$jQueryAbs.focusout$defs$handler=function(eventData$1469,handler$1470){return null;};
    function focusout(eventData$1469,handler$1470){
        if(eventData$1469===undefined){eventData$1469=$$jQueryAbs.focusout$defs$eventData(eventData$1469,handler$1470);}
        if(handler$1470===undefined){handler$1470=$$jQueryAbs.focusout$defs$handler(eventData$1469,handler$1470);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.focusout(/*NULL PARAM!*/eventData$1469/*NULL PARAM!*/,handler$1470));
        /*End dynamic block*/
    }
    $$jQueryAbs.focusout=focusout;
    focusout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','focusout']};};
    $$jQueryAbs.get$defs$index=function(index$1471){return null;};
    function get(index$1471){
        if(index$1471===undefined){index$1471=$$jQueryAbs.get$defs$index(index$1471);}
        /*Begin dynamic block*/
        return $$$cjd977.Element($$jQueryAbs.$native.get(/*NULL PARAM!*/index$1471));
        /*End dynamic block*/
    }
    $$jQueryAbs.get=get;
    get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjd977.Element},$ps:[{$nm:'index',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','get']};};
    function has(selector$1472){
        
        var case$1473=selector$1472;
        if ($$$cl1.isOfType(selector$1472,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.has(/*NULL PARAM!*/case$1473.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1472,{t:$$$cjd977.Element})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.has(/*NULL PARAM!*/case$1473.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.has=has;
    has.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd977.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','has']};};
    function hasClass(className$1474){
        /*Begin dynamic block*/
        if($$jQueryAbs.$native.hasClass(/*NULL PARAM!*/className$1474.valueOf())){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAbs.hasClass=hasClass;
    hasClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hasClass']};};
    function getHeight(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$jQueryAbs.$native.height());
        /*End dynamic block*/
    }
    $$jQueryAbs.getHeight=getHeight;
    getHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getHeight']};};
    function setHeight(val$1475){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.height(/*NULL PARAM!*/val$1475));
        /*End dynamic block*/
    }
    $$jQueryAbs.setHeight=setHeight;
    setHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setHeight']};};
    function setHeightCallback(callback$1476){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.height(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1476,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setHeightCallback=setHeightCallback;
    setHeightCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setHeightCallback']};};
    $$jQueryAbs.hide$defs$duration=function(duration$1477,easing$1478,complete$1479){return null;};
    $$jQueryAbs.hide$defs$easing=function(duration$1477,easing$1478,complete$1479){return null;};
    $$jQueryAbs.hide$defs$complete=function(duration$1477,easing$1478,complete$1479){return null;};
    function hide(duration$1477,easing$1478,complete$1479){
        if(duration$1477===undefined){duration$1477=$$jQueryAbs.hide$defs$duration(duration$1477,easing$1478,complete$1479);}
        if(easing$1478===undefined){easing$1478=$$jQueryAbs.hide$defs$easing(duration$1477,easing$1478,complete$1479);}
        if(complete$1479===undefined){complete$1479=$$jQueryAbs.hide$defs$complete(duration$1477,easing$1478,complete$1479);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.hide(/*NULL PARAM!*/duration$1477/*NULL PARAM!*/,easing$1478/*NULL PARAM!*/,complete$1479));
        /*End dynamic block*/
    }
    $$jQueryAbs.hide=hide;
    hide.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hide']};};
    function hideOptions(options$1480){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.hide(/*NULL PARAM!*/options$1480.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.hideOptions=hideOptions;
    hideOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hideOptions']};};
    function hover(handlerIn$1481,handlerOut$1482){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.hover(/*NULL PARAM!*/$$$cl1.$JsCallable(handlerIn$1481,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,$$$cl1.$JsCallable(handlerOut$1482,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.hover=hover;
    hover.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handlerIn',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'handlerOut',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hover']};};
    function hoverSingle(handlerInOut$1483){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.hover(/*NULL PARAM!*/$$$cl1.$JsCallable(handlerInOut$1483,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.hoverSingle=hoverSingle;
    hoverSingle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handlerInOut',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hoverSingle']};};
    function getHtml(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$jQueryAbs.$native.html());
        /*End dynamic block*/
    }
    $$jQueryAbs.getHtml=getHtml;
    getHtml.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getHtml']};};
    function setHtml(html$1484){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$jQueryAbs.$native.html(/*NULL PARAM!*/html$1484.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.setHtml=setHtml;
    setHtml.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[{$nm:'html',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setHtml']};};
    function setHtmlCallback(callback$1485){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$jQueryAbs.$native.html(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1485,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setHtmlCallback=setHtmlCallback;
    setHtmlCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setHtmlCallback']};};
    function index(selector$1486){
        
        var case$1487=selector$1486;
        if ($$$cl1.isOfType(selector$1486,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return $$$cjl361.JSNumber($$jQueryAbs.$native.index(/*NULL PARAM!*/case$1487.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1486,{ t:'u', l:[{t:$$$cjd977.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return $$$cjl361.JSNumber($$jQueryAbs.$native.index(/*NULL PARAM!*/case$1487.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.index=index;
    index.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd977.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','index']};};
    function innerHeight(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$jQueryAbs.$native.innerHeight());
        /*End dynamic block*/
    }
    $$jQueryAbs.innerHeight=innerHeight;
    innerHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','innerHeight']};};
    function innerWidth(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$jQueryAbs.$native.innerWidth());
        /*End dynamic block*/
    }
    $$jQueryAbs.innerWidth=innerWidth;
    innerWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','innerWidth']};};
    function insertAfter(target$1488){
        
        var case$1489=target$1488;
        if ($$$cl1.isOfType(target$1488,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.insertAfter(/*NULL PARAM!*/case$1489.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$1488,{ t:'u', l:[{t:$$$cjd977.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.insertAfter(/*NULL PARAM!*/case$1489.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.insertAfter=insertAfter;
    insertAfter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd977.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','insertAfter']};};
    function insertBefore(target$1490){
        
        var case$1491=target$1490;
        if ($$$cl1.isOfType(target$1490,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.insertBefore(/*NULL PARAM!*/case$1491.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$1490,{ t:'u', l:[{t:$$$cjd977.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.insertBefore(/*NULL PARAM!*/case$1491.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.insertBefore=insertBefore;
    insertBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd977.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','insertBefore']};};
    function isSelector(selector$1492){
        
        var case$1493=selector$1492;
        if ($$$cl1.isOfType(selector$1492,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            if($$jQueryAbs.$native.is(/*NULL PARAM!*/case$1493.valueOf())){
                return true;
            }else {
                return false;
            }/*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1492,{ t:'u', l:[{t:$$$cjd977.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            if($$jQueryAbs.$native.is(/*NULL PARAM!*/case$1493.$native)){
                return true;
            }else {
                return false;
            }/*End dynamic block*/
        }
    }
    $$jQueryAbs.isSelector=isSelector;
    isSelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd977.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','isSelector']};};
    function isCallback(callback$1494){
        /*Begin dynamic block*/
        if($$jQueryAbs.$native.is(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1494,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Boolean}}))){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAbs.isCallback=isCallback;
    isCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Boolean}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','isCallback']};};
    function jquery(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$jQueryAbs.$native.jquery);
        /*End dynamic block*/
    }
    $$jQueryAbs.jquery=jquery;
    jquery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','jquery']};};
    $$jQueryAbs.keydown$defs$eventData=function(eventData$1495,handler$1496){return null;};
    $$jQueryAbs.keydown$defs$handler=function(eventData$1495,handler$1496){return null;};
    function keydown(eventData$1495,handler$1496){
        if(eventData$1495===undefined){eventData$1495=$$jQueryAbs.keydown$defs$eventData(eventData$1495,handler$1496);}
        if(handler$1496===undefined){handler$1496=$$jQueryAbs.keydown$defs$handler(eventData$1495,handler$1496);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.keydown(/*NULL PARAM!*/eventData$1495/*NULL PARAM!*/,handler$1496));
        /*End dynamic block*/
    }
    $$jQueryAbs.keydown=keydown;
    keydown.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','keydown']};};
    $$jQueryAbs.keypress$defs$eventData=function(eventData$1497,handler$1498){return null;};
    $$jQueryAbs.keypress$defs$handler=function(eventData$1497,handler$1498){return null;};
    function keypress(eventData$1497,handler$1498){
        if(eventData$1497===undefined){eventData$1497=$$jQueryAbs.keypress$defs$eventData(eventData$1497,handler$1498);}
        if(handler$1498===undefined){handler$1498=$$jQueryAbs.keypress$defs$handler(eventData$1497,handler$1498);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.keypress(/*NULL PARAM!*/eventData$1497/*NULL PARAM!*/,handler$1498));
        /*End dynamic block*/
    }
    $$jQueryAbs.keypress=keypress;
    keypress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','keypress']};};
    $$jQueryAbs.keyup$defs$eventData=function(eventData$1499,handler$1500){return null;};
    $$jQueryAbs.keyup$defs$handler=function(eventData$1499,handler$1500){return null;};
    function keyup(eventData$1499,handler$1500){
        if(eventData$1499===undefined){eventData$1499=$$jQueryAbs.keyup$defs$eventData(eventData$1499,handler$1500);}
        if(handler$1500===undefined){handler$1500=$$jQueryAbs.keyup$defs$handler(eventData$1499,handler$1500);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.keyup(/*NULL PARAM!*/eventData$1499/*NULL PARAM!*/,handler$1500));
        /*End dynamic block*/
    }
    $$jQueryAbs.keyup=keyup;
    keyup.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','keyup']};};
    function last(){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.last());
        /*End dynamic block*/
    }
    $$jQueryAbs.last=last;
    last.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','last']};};
    function resizeTrigger(){
        /*Begin dynamic block*/
        $$jQueryAbs.$native.resize();
        /*End dynamic block*/
    }
    $$jQueryAbs.resizeTrigger=resizeTrigger;
    resizeTrigger.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','resizeTrigger']};};
    function length(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$jQueryAbs.$native.length);
        /*End dynamic block*/
    }
    $$jQueryAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','length']};};
    function load(url$1501,data$1502,complete$1503){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.load(/*NULL PARAM!*/url$1501.valueOf()/*NULL PARAM!*/,data$1502/*NULL PARAM!*/,$$$cl1.$JsCallable(complete$1503,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.load=load;
    load.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','load']};};
    function map(callback$1504){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.map(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1504,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cjd977.Element},Element:{t:$$$cjd977.Element}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjd977.Element}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.map=map;
    map.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cjd977.Element},Element:{t:$$$cjd977.Element}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjd977.Element}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','map']};};
    $$jQueryAbs.mousedown$defs$eventData=function(eventData$1505,handler$1506){return null;};
    $$jQueryAbs.mousedown$defs$handler=function(eventData$1505,handler$1506){return null;};
    function mousedown(eventData$1505,handler$1506){
        if(eventData$1505===undefined){eventData$1505=$$jQueryAbs.mousedown$defs$eventData(eventData$1505,handler$1506);}
        if(handler$1506===undefined){handler$1506=$$jQueryAbs.mousedown$defs$handler(eventData$1505,handler$1506);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mousedown(/*NULL PARAM!*/eventData$1505/*NULL PARAM!*/,handler$1506));
        /*End dynamic block*/
    }
    $$jQueryAbs.mousedown=mousedown;
    mousedown.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mousedown']};};
    $$jQueryAbs.mouseenter$defs$eventData=function(eventData$1507,handler$1508){return null;};
    $$jQueryAbs.mouseenter$defs$handler=function(eventData$1507,handler$1508){return null;};
    function mouseenter(eventData$1507,handler$1508){
        if(eventData$1507===undefined){eventData$1507=$$jQueryAbs.mouseenter$defs$eventData(eventData$1507,handler$1508);}
        if(handler$1508===undefined){handler$1508=$$jQueryAbs.mouseenter$defs$handler(eventData$1507,handler$1508);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseenter(/*NULL PARAM!*/eventData$1507/*NULL PARAM!*/,handler$1508));
        /*End dynamic block*/
    }
    $$jQueryAbs.mouseenter=mouseenter;
    mouseenter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseenter']};};
    $$jQueryAbs.mouseleave$defs$eventData=function(eventData$1509,handler$1510){return null;};
    $$jQueryAbs.mouseleave$defs$handler=function(eventData$1509,handler$1510){return null;};
    function mouseleave(eventData$1509,handler$1510){
        if(eventData$1509===undefined){eventData$1509=$$jQueryAbs.mouseleave$defs$eventData(eventData$1509,handler$1510);}
        if(handler$1510===undefined){handler$1510=$$jQueryAbs.mouseleave$defs$handler(eventData$1509,handler$1510);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseleave(/*NULL PARAM!*/eventData$1509/*NULL PARAM!*/,handler$1510));
        /*End dynamic block*/
    }
    $$jQueryAbs.mouseleave=mouseleave;
    mouseleave.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseleave']};};
    $$jQueryAbs.mousemove$defs$eventData=function(eventData$1511,handler$1512){return null;};
    $$jQueryAbs.mousemove$defs$handler=function(eventData$1511,handler$1512){return null;};
    function mousemove(eventData$1511,handler$1512){
        if(eventData$1511===undefined){eventData$1511=$$jQueryAbs.mousemove$defs$eventData(eventData$1511,handler$1512);}
        if(handler$1512===undefined){handler$1512=$$jQueryAbs.mousemove$defs$handler(eventData$1511,handler$1512);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mousemove(/*NULL PARAM!*/eventData$1511/*NULL PARAM!*/,handler$1512));
        /*End dynamic block*/
    }
    $$jQueryAbs.mousemove=mousemove;
    mousemove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mousemove']};};
    $$jQueryAbs.mouseout$defs$eventData=function(eventData$1513,handler$1514){return null;};
    $$jQueryAbs.mouseout$defs$handler=function(eventData$1513,handler$1514){return null;};
    function mouseout(eventData$1513,handler$1514){
        if(eventData$1513===undefined){eventData$1513=$$jQueryAbs.mouseout$defs$eventData(eventData$1513,handler$1514);}
        if(handler$1514===undefined){handler$1514=$$jQueryAbs.mouseout$defs$handler(eventData$1513,handler$1514);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseout(/*NULL PARAM!*/eventData$1513/*NULL PARAM!*/,handler$1514));
        /*End dynamic block*/
    }
    $$jQueryAbs.mouseout=mouseout;
    mouseout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseout']};};
    $$jQueryAbs.mouseover$defs$eventData=function(eventData$1515,handler$1516){return null;};
    $$jQueryAbs.mouseover$defs$handler=function(eventData$1515,handler$1516){return null;};
    function mouseover(eventData$1515,handler$1516){
        if(eventData$1515===undefined){eventData$1515=$$jQueryAbs.mouseover$defs$eventData(eventData$1515,handler$1516);}
        if(handler$1516===undefined){handler$1516=$$jQueryAbs.mouseover$defs$handler(eventData$1515,handler$1516);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseover(/*NULL PARAM!*/eventData$1515/*NULL PARAM!*/,handler$1516));
        /*End dynamic block*/
    }
    $$jQueryAbs.mouseover=mouseover;
    mouseover.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseover']};};
    $$jQueryAbs.mouseup$defs$eventData=function(eventData$1517,handler$1518){return null;};
    $$jQueryAbs.mouseup$defs$handler=function(eventData$1517,handler$1518){return null;};
    function mouseup(eventData$1517,handler$1518){
        if(eventData$1517===undefined){eventData$1517=$$jQueryAbs.mouseup$defs$eventData(eventData$1517,handler$1518);}
        if(handler$1518===undefined){handler$1518=$$jQueryAbs.mouseup$defs$handler(eventData$1517,handler$1518);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseup(/*NULL PARAM!*/eventData$1517/*NULL PARAM!*/,handler$1518));
        /*End dynamic block*/
    }
    $$jQueryAbs.mouseup=mouseup;
    mouseup.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseup']};};
    $$jQueryAbs.next$defs$selector=function(selector$1519){return null;};
    function next(selector$1519){
        if(selector$1519===undefined){selector$1519=$$jQueryAbs.next$defs$selector(selector$1519);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.next(/*NULL PARAM!*/selector$1519));
        /*End dynamic block*/
    }
    $$jQueryAbs.next=next;
    next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','next']};};
    $$jQueryAbs.nextAll$defs$selector=function(selector$1520){return null;};
    function nextAll(selector$1520){
        if(selector$1520===undefined){selector$1520=$$jQueryAbs.nextAll$defs$selector(selector$1520);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.nextAll(/*NULL PARAM!*/selector$1520));
        /*End dynamic block*/
    }
    $$jQueryAbs.nextAll=nextAll;
    nextAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','nextAll']};};
    $$jQueryAbs.nextUntil$defs$selector=function(selector$1521,filter$1522){return null;};
    $$jQueryAbs.nextUntil$defs$filter=function(selector$1521,filter$1522){return null;};
    function nextUntil(selector$1521,filter$1522){
        if(selector$1521===undefined){selector$1521=$$jQueryAbs.nextUntil$defs$selector(selector$1521,filter$1522);}
        if(filter$1522===undefined){filter$1522=$$jQueryAbs.nextUntil$defs$filter(selector$1521,filter$1522);}
        
        var case$1523=selector$1521;
        if ($$$cl1.isOfType(selector$1521,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.nextUntil(/*NULL PARAM!*/case$1523.valueOf()/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1334:45-1334:45','jquery.ceylon'):f)));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1521,{t:$$$cjd977.Element})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.nextUntil(/*NULL PARAM!*/case$1523.$native/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1339:52-1339:52','jquery.ceylon'):f)));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1521,{t:$$$cl1.Null})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.nextUntil(/*NULL PARAM!*/null/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1344:41-1344:41','jquery.ceylon'):f)));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.nextUntil=nextUntil;
    nextUntil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd977.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','nextUntil']};};
    function not(selector$1524){
        
        var case$1525=selector$1524;
        if ($$$cl1.isOfType(selector$1524,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.not(/*NULL PARAM!*/case$1525.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1524,{ t:'u', l:[{t:JQuery},{t:$$$cjd977.Element}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.not(/*NULL PARAM!*/case$1525.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.not=not;
    not.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cjd977.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','not']};};
    $$jQueryAbs.off$defs$handler=function(events$1526,selector$1527,handler$1528){return null;};
    function off(events$1526,selector$1527,handler$1528){
        if(handler$1528===undefined){handler$1528=$$jQueryAbs.off$defs$handler(events$1526,selector$1527,handler$1528);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseover(/*NULL PARAM!*/(typeof eventData==='undefined'||eventData===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: eventData")),'1366:34-1366:42','jquery.ceylon'):eventData)/*NULL PARAM!*/,handler$1528));
        /*End dynamic block*/
    }
    $$jQueryAbs.off=off;
    off.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','off']};};
    function getOffset(){
        /*Begin dynamic block*/
        return (tmpvar$1529=(/*NULL PARAM!*/tmpvar$1530=$$jQueryAbs.$native.offset(),tmpvar$1531=(typeof Offset==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type Offset")),'1372:10-1372:15','jquery.ceylon'):Offset),tmpvar$1531.$$===undefined?new tmpvar$1531(tmpvar$1530):tmpvar$1531(tmpvar$1530)),$$$cl1.isOfType(tmpvar$1529,{t:$$$cl1.Anything})?tmpvar$1529:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'1372:10-1372:32','jquery.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAbs.getOffset=getOffset;
    getOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Coordinates},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getOffset']};};
    $$jQueryAbs.setOffset$defs$offset=function(offset$1532){return null;};
    function setOffset(offset$1532){
        if(offset$1532===undefined){offset$1532=$$jQueryAbs.setOffset$defs$offset(offset$1532);}
        var o$1533;
        if((o$1533=offset$1532)!==null){
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.offset(/*NULL PARAM!*/o$1533));
            /*End dynamic block*/
        }else {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.offset());
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.setOffset=setOffset;
    setOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'offset',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Coordinates}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setOffset']};};
    function setOffsetCallback(offset$1534){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.offset(/*NULL PARAM!*/$$$cl1.$JsCallable(offset$1534,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Coordinates},Element:{t:Coordinates}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:Coordinates}]}}},Return:{t:Coordinates}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setOffsetCallback=setOffsetCallback;
    setOffsetCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'offset',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Coordinates},Element:{t:Coordinates}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:Coordinates}]}}},Return:{t:Coordinates}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setOffsetCallback']};};
    function offsetParent(){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.offsetParent());
        /*End dynamic block*/
    }
    $$jQueryAbs.offsetParent=offsetParent;
    offsetParent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','offsetParent']};};
    $$jQueryAbs.on$defs$selector=function(events$1535,selector$1536,data$1537,handler$1538){return null;};
    $$jQueryAbs.on$defs$data=function(events$1535,selector$1536,data$1537,handler$1538){return null;};
    $$jQueryAbs.on$defs$handler=function(events$1535,selector$1536,data$1537,handler$1538){return null;};
    function on(events$1535,selector$1536,data$1537,handler$1538){
        if(selector$1536===undefined){selector$1536=$$jQueryAbs.on$defs$selector(events$1535,selector$1536,data$1537,handler$1538);}
        if(data$1537===undefined){data$1537=$$jQueryAbs.on$defs$data(events$1535,selector$1536,data$1537,handler$1538);}
        if(handler$1538===undefined){handler$1538=$$jQueryAbs.on$defs$handler(events$1535,selector$1536,data$1537,handler$1538);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.on(/*NULL PARAM!*/events$1535.valueOf()/*NULL PARAM!*/,selector$1536/*NULL PARAM!*/,data$1537/*NULL PARAM!*/,handler$1538));
        /*End dynamic block*/
    }
    $$jQueryAbs.on=on;
    on.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','on']};};
    $$jQueryAbs.one$defs$selector=function(events$1539,selector$1540,data$1541,handler$1542){return null;};
    $$jQueryAbs.one$defs$data=function(events$1539,selector$1540,data$1541,handler$1542){return null;};
    $$jQueryAbs.one$defs$handler=function(events$1539,selector$1540,data$1541,handler$1542){return null;};
    function one(events$1539,selector$1540,data$1541,handler$1542){
        if(selector$1540===undefined){selector$1540=$$jQueryAbs.one$defs$selector(events$1539,selector$1540,data$1541,handler$1542);}
        if(data$1541===undefined){data$1541=$$jQueryAbs.one$defs$data(events$1539,selector$1540,data$1541,handler$1542);}
        if(handler$1542===undefined){handler$1542=$$jQueryAbs.one$defs$handler(events$1539,selector$1540,data$1541,handler$1542);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.one(/*NULL PARAM!*/events$1539.valueOf()/*NULL PARAM!*/,selector$1540/*NULL PARAM!*/,data$1541/*NULL PARAM!*/,handler$1542));
        /*End dynamic block*/
    }
    $$jQueryAbs.one=one;
    one.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','one']};};
    $$jQueryAbs.outerHeight$defs$includeMargin=function(includeMargin$1543){return null;};
    function outerHeight(includeMargin$1543){
        if(includeMargin$1543===undefined){includeMargin$1543=$$jQueryAbs.outerHeight$defs$includeMargin(includeMargin$1543);}
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$jQueryAbs.$native.outerHeight(/*NULL PARAM!*/includeMargin$1543));
        /*End dynamic block*/
    }
    $$jQueryAbs.outerHeight=outerHeight;
    outerHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[{$nm:'includeMargin',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','outerHeight']};};
    $$jQueryAbs.outerWidth$defs$includeMargin=function(includeMargin$1544){return null;};
    function outerWidth(includeMargin$1544){
        if(includeMargin$1544===undefined){includeMargin$1544=$$jQueryAbs.outerWidth$defs$includeMargin(includeMargin$1544);}
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$jQueryAbs.$native.outerWidth(/*NULL PARAM!*/includeMargin$1544));
        /*End dynamic block*/
    }
    $$jQueryAbs.outerWidth=outerWidth;
    outerWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[{$nm:'includeMargin',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','outerWidth']};};
    $$jQueryAbs.parent$defs$selector=function(selector$1545){return null;};
    function parent(selector$1545){
        if(selector$1545===undefined){selector$1545=$$jQueryAbs.parent$defs$selector(selector$1545);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.parent(/*NULL PARAM!*/selector$1545));
        /*End dynamic block*/
    }
    $$jQueryAbs.parent=parent;
    parent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','parent']};};
    $$jQueryAbs.parents$defs$selector=function(selector$1546){return null;};
    function parents(selector$1546){
        if(selector$1546===undefined){selector$1546=$$jQueryAbs.parents$defs$selector(selector$1546);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.parents(/*NULL PARAM!*/selector$1546));
        /*End dynamic block*/
    }
    $$jQueryAbs.parents=parents;
    parents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','parents']};};
    $$jQueryAbs.parentsUntil$defs$selector=function(selector$1547,filter$1548){return null;};
    $$jQueryAbs.parentsUntil$defs$filter=function(selector$1547,filter$1548){return null;};
    function parentsUntil(selector$1547,filter$1548){
        if(selector$1547===undefined){selector$1547=$$jQueryAbs.parentsUntil$defs$selector(selector$1547,filter$1548);}
        if(filter$1548===undefined){filter$1548=$$jQueryAbs.parentsUntil$defs$filter(selector$1547,filter$1548);}
        
        var case$1549=selector$1547;
        if ($$$cl1.isOfType(selector$1547,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.parents(/*NULL PARAM!*/case$1549.valueOf()/*NULL PARAM!*/,filter$1548));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1547,{t:$$$cjd977.Element})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.parents(/*NULL PARAM!*/case$1549.$native/*NULL PARAM!*/,filter$1548));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1547,{t:$$$cl1.Null})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.parents(/*NULL PARAM!*/null/*NULL PARAM!*/,filter$1548));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.parentsUntil=parentsUntil;
    parentsUntil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd977.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','parentsUntil']};};
    function position(){
        /*Begin dynamic block*/
        return Coordinates($$jQueryAbs.$native.position());
        /*End dynamic block*/
    }
    $$jQueryAbs.position=position;
    position.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Coordinates},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','position']};};
    function prepend(content$1550){
        if(content$1550===undefined){content$1550=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl361.JSFunction($$jQueryAbs.$native.prepend).$apply(null,(tmpvar$1551=(function(){
            var lst$1552=[];
            var it$1553=content$1550.iterator();
            var elem$1554;
            while ((elem$1554=it$1553.next())!==$$$cl1.getFinished()){
                lst$1552.push(elem$1554.$native);
            }
            return $$$cl1.ArraySequence(lst$1552);
        }()),$$$cl1.isOfType(tmpvar$1551,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1551:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'1463:56-1463:70','jquery.ceylon'))));
        /*End dynamic block*/
    }
    $$jQueryAbs.prepend=prepend;
    prepend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{ t:'u', l:[{t:$$$cjd977.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prepend']};};
    function prependHTML(content$1555){
        if(content$1555===undefined){content$1555=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prepend(/*NULL PARAM!*/content$1555));
        /*End dynamic block*/
    }
    $$jQueryAbs.prependHTML=prependHTML;
    prependHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prependHTML']};};
    function prependCallback(callback$1556){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prepend(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1556,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.prependCallback=prependCallback;
    prependCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prependCallback']};};
    function prependTo(target$1557){
        
        var case$1558=target$1557;
        if ($$$cl1.isOfType(target$1557,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.prependTo(/*NULL PARAM!*/case$1558.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$1557,{ t:'u', l:[{t:$$$cjd977.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.prependTo(/*NULL PARAM!*/case$1558.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.prependTo=prependTo;
    prependTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd977.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prependTo']};};
    $$jQueryAbs.prev$defs$selector=function(selector$1559){return null;};
    function prev(selector$1559){
        if(selector$1559===undefined){selector$1559=$$jQueryAbs.prev$defs$selector(selector$1559);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prev(/*NULL PARAM!*/selector$1559));
        /*End dynamic block*/
    }
    $$jQueryAbs.prev=prev;
    prev.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prev']};};
    $$jQueryAbs.prevAll$defs$selector=function(selector$1560){return null;};
    function prevAll(selector$1560){
        if(selector$1560===undefined){selector$1560=$$jQueryAbs.prevAll$defs$selector(selector$1560);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prevAll(/*NULL PARAM!*/selector$1560));
        /*End dynamic block*/
    }
    $$jQueryAbs.prevAll=prevAll;
    prevAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prevAll']};};
    $$jQueryAbs.prevUntil$defs$selector=function(selector$1561,filter$1562){return null;};
    $$jQueryAbs.prevUntil$defs$filter=function(selector$1561,filter$1562){return null;};
    function prevUntil(selector$1561,filter$1562){
        if(selector$1561===undefined){selector$1561=$$jQueryAbs.prevUntil$defs$selector(selector$1561,filter$1562);}
        if(filter$1562===undefined){filter$1562=$$jQueryAbs.prevUntil$defs$filter(selector$1561,filter$1562);}
        
        var case$1563=selector$1561;
        if ($$$cl1.isOfType(selector$1561,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.prevUntil(/*NULL PARAM!*/case$1563.valueOf()/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1509:45-1509:45','jquery.ceylon'):f)));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1561,{t:$$$cjd977.Element})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.prevUntil(/*NULL PARAM!*/case$1563.$native/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1514:52-1514:52','jquery.ceylon'):f)));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1561,{t:$$$cl1.Null})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.prevUntil(/*NULL PARAM!*/null/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1519:41-1519:41','jquery.ceylon'):f)));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.prevUntil=prevUntil;
    prevUntil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd977.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prevUntil']};};
    $$jQueryAbs.promise$defs$type=function(type$1564,target$1565){return $$$cl1.String("fx",2);};
    $$jQueryAbs.promise$defs$target=function(type$1564,target$1565){return null;};
    function promise(type$1564,target$1565){
        if(type$1564===undefined){type$1564=$$jQueryAbs.promise$defs$type(type$1564,target$1565);}
        if(target$1565===undefined){target$1565=$$jQueryAbs.promise$defs$target(type$1564,target$1565);}
        var t$1566;
        if((t$1566=target$1565)!==null){
            /*Begin dynamic block*/
            return Promise($$jQueryAbs.$native.promise(/*NULL PARAM!*/type$1564.valueOf()/*NULL PARAM!*/,t$1566.$native));
            /*End dynamic block*/
        }else {
            /*Begin dynamic block*/
            return Promise($$jQueryAbs.$native.promise(/*NULL PARAM!*/type$1564.valueOf()));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.promise=promise;
    promise.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'type',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'target',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSObject}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','promise']};};
    function getProp(name$1567){
        /*Begin dynamic block*/
        var prop$1568=$$jQueryAbs.$native.prop(/*NULL PARAM!*/name$1567.valueOf());
        $prop$getProp$1568={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQueryAbs','$m','getProp','$at','prop']};}};
        $prop$getProp$1568.get=function(){return prop$1568};
        if(prop$1568.instanceof(/*NULL PARAM!*/(typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'1539:25-1539:30','jquery.ceylon'):String))){
            return $$$cjl361.JSString(prop$1568);
        }else {
            if(prop$1568){
                return true;
            }else {
                return false;
            }
        }/*End dynamic block*/
    }
    $$jQueryAbs.getProp=getProp;
    getProp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cjl361.JSString},{t:$$$cl1.Boolean}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getProp']};};
    function setProp(propertyName$1569,val$1570){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prop(/*NULL PARAM!*/propertyName$1569.valueOf()/*NULL PARAM!*/,val$1570));
        /*End dynamic block*/
    }
    $$jQueryAbs.setProp=setProp;
    setProp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setProp']};};
    function setPropEntries(properties$1571){
        if(properties$1571===undefined){properties$1571=$$$cl1.getEmpty();}
        var propertiesNative$1572=$$$cjl361.createJSObject();
        var it$1573 = properties$1571.iterator();
        var item$1574;while ((item$1574=it$1573.next())!==$$$cl1.getFinished()){
            var key$1575=item$1574.key;
            var val$1576=item$1574.item;
            /*Begin dynamic block*/
            $$$cjl361.objectDefineProperty(propertiesNative$1572,(tmpvar$1577=$$$cjl361.createJSString(key$1575),$$$cl1.isOfType(tmpvar$1577,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]})?tmpvar$1577:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'1559:43-1559:61','jquery.ceylon')),$$$cjl361.DataDescriptor(true,false,true,true,val$1576));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prop(/*NULL PARAM!*/propertiesNative$1572));
        /*End dynamic block*/
    }
    $$jQueryAbs.setPropEntries=setPropEntries;
    setPropEntries.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer},{t:$$$cl1.Boolean}]}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setPropEntries']};};
    function setPropCallback(propertyName$1578,callback$1579){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prop(/*NULL PARAM!*/propertyName$1578.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1579,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setPropCallback=setPropCallback;
    setPropCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setPropCallback']};};
    $$jQueryAbs.pushStack$defs$name=function(elements$1580,name$1581,arguments$1582){return null;};
    $$jQueryAbs.pushStack$defs$arguments=function(elements$1580,name$1581,arguments$1582){return null;};
    function pushStack(elements$1580,name$1581,arguments$1582){
        if(name$1581===undefined){name$1581=$$jQueryAbs.pushStack$defs$name(elements$1580,name$1581,arguments$1582);}
        if(arguments$1582===undefined){arguments$1582=$$jQueryAbs.pushStack$defs$arguments(elements$1580,name$1581,arguments$1582);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.pushStack(/*NULL PARAM!*/(function(){
            var lst$1583=[];
            var it$1584=elements$1580.iterator();
            var elem$1585;
            while ((elem$1585=it$1584.next())!==$$$cl1.getFinished()){
                lst$1583.push(elem$1585.$native);
            }
            return $$$cl1.ArraySequence(lst$1583);
        }())/*NULL PARAM!*/,name$1581/*NULL PARAM!*/,arguments$1582));
        /*End dynamic block*/
    }
    $$jQueryAbs.pushStack=pushStack;
    pushStack.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cjd977.Element}}},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'arguments',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','pushStack']};};
    $$jQueryAbs.getQueue$defs$queueName=function(queueName$1586){return $$$cl1.String("fx",2);};
    function getQueue(queueName$1586){
        if(queueName$1586===undefined){queueName$1586=$$jQueryAbs.getQueue$defs$queueName(queueName$1586);}
        /*Begin dynamic block*/
        return $$$cjl361.JSArray($$jQueryAbs.$native.queue(/*NULL PARAM!*/queueName$1586.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.getQueue=getQueue;
    getQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSArray},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns an array of functions",29)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getQueue']};};
    $$jQueryAbs.setQueue$defs$queueName=function(queueName$1587,newQueue$1588){return $$$cl1.String("fx",2);};
    function setQueue(queueName$1587,newQueue$1588){
        if(queueName$1587===undefined){queueName$1587=$$jQueryAbs.setQueue$defs$queueName(queueName$1587,newQueue$1588);}
        if(newQueue$1588===undefined){newQueue$1588=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.queue(/*NULL PARAM!*/queueName$1587.valueOf()/*NULL PARAM!*/,newQueue$1588));
        /*End dynamic block*/
    }
    $$jQueryAbs.setQueue=setQueue;
    setQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'newQueue',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setQueue']};};
    $$jQueryAbs.setQueueCallback$defs$queueName=function(next$1589,queueName$1590){return $$$cl1.String("fx",2);};
    function setQueueCallback(next$1589,queueName$1590){
        if(queueName$1590===undefined){queueName$1590=$$jQueryAbs.setQueueCallback$defs$queueName(next$1589,queueName$1590);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.queue(/*NULL PARAM!*/queueName$1590.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(next$1589,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setQueueCallback=setQueueCallback;
    setQueueCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'next',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setQueueCallback']};};
    function ready(handler$1591){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ready(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1591,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ready=ready;
    ready.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ready']};};
    $$jQueryAbs.remove$defs$selector=function(selector$1592){return null;};
    function remove(selector$1592){
        if(selector$1592===undefined){selector$1592=$$jQueryAbs.remove$defs$selector(selector$1592);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.remove(/*NULL PARAM!*/selector$1592));
        /*End dynamic block*/
    }
    $$jQueryAbs.remove=remove;
    remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','remove']};};
    function removeAttr(attributeName$1593){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.removeAttr(/*NULL PARAM!*/attributeName$1593.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.removeAttr=removeAttr;
    removeAttr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeAttr']};};
    function removeClass(className$1594){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.removeClass(/*NULL PARAM!*/(typeof clasName==='undefined'||clasName===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: clasName")),'1618:36-1618:43','jquery.ceylon'):clasName)));
        /*End dynamic block*/
    }
    $$jQueryAbs.removeClass=removeClass;
    removeClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeClass']};};
    function removeClassCallback(callback$1595){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.removeClass(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1595,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.removeClassCallback=removeClassCallback;
    removeClassCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeClassCallback']};};
    function removeData(names$1596){
        if(names$1596===undefined){names$1596=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.removeData(/*NULL PARAM!*/names$1596));
        /*End dynamic block*/
    }
    $$jQueryAbs.removeData=removeData;
    removeData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'names',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeData']};};
    function removeProp(propertyName$1597){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.removeProp(/*NULL PARAM!*/propertyName$1597.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.removeProp=removeProp;
    removeProp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeProp']};};
    function replaceAll(target$1598){
        
        var case$1599=target$1598;
        if ($$$cl1.isOfType(target$1598,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.replaceAll(/*NULL PARAM!*/case$1599.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$1598,{ t:'u', l:[{t:JQuery},{t:$$$cjd977.Element}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.replaceAll(/*NULL PARAM!*/case$1599.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.replaceAll=replaceAll;
    replaceAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cjd977.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','replaceAll']};};
    function replaceWith(newContent$1600){
        
        var case$1601=newContent$1600;
        if ($$$cl1.isOfType(newContent$1600,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.replaceWith(/*NULL PARAM!*/case$1601.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(newContent$1600,{ t:'u', l:[{t:JQuery},{t:$$$cjd977.Element}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.replaceWith(/*NULL PARAM!*/case$1601.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.replaceWith=replaceWith;
    replaceWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'newContent',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cjd977.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','replaceWith']};};
    function replaceWithCallback(callback$1602){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.replaceWith(/*NULL PARAM!*/callback$1602));
        /*End dynamic block*/
    }
    $$jQueryAbs.replaceWithCallback=replaceWithCallback;
    replaceWithCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cjd977.Element}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','replaceWithCallback']};};
    $$jQueryAbs.resize$defs$eventData=function(handler$1603,eventData$1604){return null;};
    function resize(handler$1603,eventData$1604){
        if(eventData$1604===undefined){eventData$1604=$$jQueryAbs.resize$defs$eventData(handler$1603,eventData$1604);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.resize(/*NULL PARAM!*/eventData$1604/*NULL PARAM!*/,$$$cl1.$JsCallable(handler$1603,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.resize=resize;
    resize.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','resize']};};
    $$jQueryAbs.scroll$defs$eventData=function(handler$1605,eventData$1606){return null;};
    function scroll(handler$1605,eventData$1606){
        if(eventData$1606===undefined){eventData$1606=$$jQueryAbs.scroll$defs$eventData(handler$1605,eventData$1606);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.scroll(/*NULL PARAM!*/eventData$1606/*NULL PARAM!*/,$$$cl1.$JsCallable(handler$1605,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.scroll=scroll;
    scroll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','scroll']};};
    function getScrollLeft(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$jQueryAbs.$native.scrollLeft());
        /*End dynamic block*/
    }
    $$jQueryAbs.getScrollLeft=getScrollLeft;
    getScrollLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getScrollLeft']};};
    function setScrollLeft(val$1607){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.scrollLeft(/*NULL PARAM!*/val$1607));
        /*End dynamic block*/
    }
    $$jQueryAbs.setScrollLeft=setScrollLeft;
    setScrollLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setScrollLeft']};};
    function getScrollTop(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$jQueryAbs.$native.scrollTop());
        /*End dynamic block*/
    }
    $$jQueryAbs.getScrollTop=getScrollTop;
    getScrollTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getScrollTop']};};
    function setScrollTop(val$1608){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.scrollTop(/*NULL PARAM!*/val$1608));
        /*End dynamic block*/
    }
    $$jQueryAbs.setScrollTop=setScrollTop;
    setScrollTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setScrollTop']};};
    $$jQueryAbs.select$defs$eventData=function(handler$1609,eventData$1610){return null;};
    function select(handler$1609,eventData$1610){
        if(eventData$1610===undefined){eventData$1610=$$jQueryAbs.select$defs$eventData(handler$1609,eventData$1610);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.select(/*NULL PARAM!*/eventData$1610/*NULL PARAM!*/,$$$cl1.$JsCallable(handler$1609,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.select=select;
    select.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','select']};};
    function serialize(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$jQueryAbs.$native.serialize());
        /*End dynamic block*/
    }
    $$jQueryAbs.serialize=serialize;
    serialize.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','serialize']};};
    function serializeArray(){
        /*Begin dynamic block*/
        return $$$cjl361.JSArray($$jQueryAbs.$native.serializeArray());
        /*End dynamic block*/
    }
    $$jQueryAbs.serializeArray=serializeArray;
    serializeArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSArray},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','serializeArray']};};
    $$jQueryAbs.show$defs$duration=function(duration$1611,easing$1612,complete$1613){return null;};
    $$jQueryAbs.show$defs$easing=function(duration$1611,easing$1612,complete$1613){return null;};
    $$jQueryAbs.show$defs$complete=function(duration$1611,easing$1612,complete$1613){return null;};
    function show(duration$1611,easing$1612,complete$1613){
        if(duration$1611===undefined){duration$1611=$$jQueryAbs.show$defs$duration(duration$1611,easing$1612,complete$1613);}
        if(easing$1612===undefined){easing$1612=$$jQueryAbs.show$defs$easing(duration$1611,easing$1612,complete$1613);}
        if(complete$1613===undefined){complete$1613=$$jQueryAbs.show$defs$complete(duration$1611,easing$1612,complete$1613);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.show(/*NULL PARAM!*/duration$1611/*NULL PARAM!*/,easing$1612/*NULL PARAM!*/,complete$1613));
        /*End dynamic block*/
    }
    $$jQueryAbs.show=show;
    show.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','show']};};
    function showOptions(options$1614){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.show(/*NULL PARAM!*/options$1614.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.showOptions=showOptions;
    showOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','showOptions']};};
    $$jQueryAbs.siblings$defs$siblings=function(siblings$1615){return null;};
    function siblings(siblings$1615){
        if(siblings$1615===undefined){siblings$1615=$$jQueryAbs.siblings$defs$siblings(siblings$1615);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.siblings(/*NULL PARAM!*/siblings$1615));
        /*End dynamic block*/
    }
    $$jQueryAbs.siblings=siblings;
    siblings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'siblings',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','siblings']};};
    $$jQueryAbs.slice$defs$end=function(start$1616,end$1617){return null;};
    function slice(start$1616,end$1617){
        if(end$1617===undefined){end$1617=$$jQueryAbs.slice$defs$end(start$1616,end$1617);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slice(/*NULL PARAM!*/start$1616/*NULL PARAM!*/,end$1617));
        /*End dynamic block*/
    }
    $$jQueryAbs.slice=slice;
    slice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'start',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'end',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slice']};};
    $$jQueryAbs.slideDown$defs$duration=function(duration$1618,easing$1619,complete$1620){return null;};
    $$jQueryAbs.slideDown$defs$easing=function(duration$1618,easing$1619,complete$1620){return null;};
    $$jQueryAbs.slideDown$defs$complete=function(duration$1618,easing$1619,complete$1620){return null;};
    function slideDown(duration$1618,easing$1619,complete$1620){
        if(duration$1618===undefined){duration$1618=$$jQueryAbs.slideDown$defs$duration(duration$1618,easing$1619,complete$1620);}
        if(easing$1619===undefined){easing$1619=$$jQueryAbs.slideDown$defs$easing(duration$1618,easing$1619,complete$1620);}
        if(complete$1620===undefined){complete$1620=$$jQueryAbs.slideDown$defs$complete(duration$1618,easing$1619,complete$1620);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideDown(/*NULL PARAM!*/duration$1618/*NULL PARAM!*/,easing$1619/*NULL PARAM!*/,complete$1620));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideDown=slideDown;
    slideDown.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideDown']};};
    function slideDownOptions(options$1621){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideDown(/*NULL PARAM!*/options$1621.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideDownOptions=slideDownOptions;
    slideDownOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideDownOptions']};};
    $$jQueryAbs.slideToggle$defs$duration=function(duration$1622,easing$1623,complete$1624){return null;};
    $$jQueryAbs.slideToggle$defs$easing=function(duration$1622,easing$1623,complete$1624){return null;};
    $$jQueryAbs.slideToggle$defs$complete=function(duration$1622,easing$1623,complete$1624){return null;};
    function slideToggle(duration$1622,easing$1623,complete$1624){
        if(duration$1622===undefined){duration$1622=$$jQueryAbs.slideToggle$defs$duration(duration$1622,easing$1623,complete$1624);}
        if(easing$1623===undefined){easing$1623=$$jQueryAbs.slideToggle$defs$easing(duration$1622,easing$1623,complete$1624);}
        if(complete$1624===undefined){complete$1624=$$jQueryAbs.slideToggle$defs$complete(duration$1622,easing$1623,complete$1624);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideToggle(/*NULL PARAM!*/duration$1622/*NULL PARAM!*/,easing$1623/*NULL PARAM!*/,complete$1624));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideToggle=slideToggle;
    slideToggle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideToggle']};};
    function slideToggleOptions(options$1625){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideToggle(/*NULL PARAM!*/options$1625.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideToggleOptions=slideToggleOptions;
    slideToggleOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideToggleOptions']};};
    $$jQueryAbs.slideUp$defs$duration=function(duration$1626,easing$1627,complete$1628){return null;};
    $$jQueryAbs.slideUp$defs$easing=function(duration$1626,easing$1627,complete$1628){return null;};
    $$jQueryAbs.slideUp$defs$complete=function(duration$1626,easing$1627,complete$1628){return null;};
    function slideUp(duration$1626,easing$1627,complete$1628){
        if(duration$1626===undefined){duration$1626=$$jQueryAbs.slideUp$defs$duration(duration$1626,easing$1627,complete$1628);}
        if(easing$1627===undefined){easing$1627=$$jQueryAbs.slideUp$defs$easing(duration$1626,easing$1627,complete$1628);}
        if(complete$1628===undefined){complete$1628=$$jQueryAbs.slideUp$defs$complete(duration$1626,easing$1627,complete$1628);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideUp(/*NULL PARAM!*/duration$1626/*NULL PARAM!*/,easing$1627/*NULL PARAM!*/,complete$1628));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideUp=slideUp;
    slideUp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideUp']};};
    function slideUpOptions(options$1629){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideUp(/*NULL PARAM!*/options$1629.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideUpOptions=slideUpOptions;
    slideUpOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideUpOptions']};};
    $$jQueryAbs.stop$defs$clearQueue=function(clearQueue$1630,jumpToEnd$1631){return null;};
    $$jQueryAbs.stop$defs$jumpToEnd=function(clearQueue$1630,jumpToEnd$1631){return null;};
    function stop(clearQueue$1630,jumpToEnd$1631){
        if(clearQueue$1630===undefined){clearQueue$1630=$$jQueryAbs.stop$defs$clearQueue(clearQueue$1630,jumpToEnd$1631);}
        if(jumpToEnd$1631===undefined){jumpToEnd$1631=$$jQueryAbs.stop$defs$jumpToEnd(clearQueue$1630,jumpToEnd$1631);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.stop(/*NULL PARAM!*/clearQueue$1630/*NULL PARAM!*/,jumpToEnd$1631));
        /*End dynamic block*/
    }
    $$jQueryAbs.stop=stop;
    stop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'clearQueue',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}},{$nm:'jumpToEnd',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','stop']};};
    $$jQueryAbs.stopName$defs$clearQueue=function(queue$1632,clearQueue$1633,jumpToEnd$1634){return null;};
    $$jQueryAbs.stopName$defs$jumpToEnd=function(queue$1632,clearQueue$1633,jumpToEnd$1634){return null;};
    function stopName(queue$1632,clearQueue$1633,jumpToEnd$1634){
        if(clearQueue$1633===undefined){clearQueue$1633=$$jQueryAbs.stopName$defs$clearQueue(queue$1632,clearQueue$1633,jumpToEnd$1634);}
        if(jumpToEnd$1634===undefined){jumpToEnd$1634=$$jQueryAbs.stopName$defs$jumpToEnd(queue$1632,clearQueue$1633,jumpToEnd$1634);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.stop(/*NULL PARAM!*/queue$1632.valueOf()/*NULL PARAM!*/,clearQueue$1633/*NULL PARAM!*/,jumpToEnd$1634));
        /*End dynamic block*/
    }
    $$jQueryAbs.stopName=stopName;
    stopName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queue',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'clearQueue',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}},{$nm:'jumpToEnd',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','stopName']};};
    $$jQueryAbs.submit$defs$eventData=function(eventData$1635,handler$1636){return null;};
    $$jQueryAbs.submit$defs$handler=function(eventData$1635,handler$1636){return null;};
    function submit(eventData$1635,handler$1636){
        if(eventData$1635===undefined){eventData$1635=$$jQueryAbs.submit$defs$eventData(eventData$1635,handler$1636);}
        if(handler$1636===undefined){handler$1636=$$jQueryAbs.submit$defs$handler(eventData$1635,handler$1636);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.submit(/*NULL PARAM!*/eventData$1635/*NULL PARAM!*/,handler$1636));
        /*End dynamic block*/
    }
    $$jQueryAbs.submit=submit;
    submit.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','submit']};};
    function getText(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$jQueryAbs.$native.text());
        /*End dynamic block*/
    }
    $$jQueryAbs.getText=getText;
    getText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getText']};};
    function setText(textString$1637){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.text(/*NULL PARAM!*/textString$1637.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.setText=setText;
    setText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'textString',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setText']};};
    function setTextCallback(callback$1638){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.text(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1638,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setTextCallback=setTextCallback;
    setTextCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setTextCallback']};};
    function toArray(){
        /*Begin dynamic block*/
        return $$$cjl361.JSArray($$jQueryAbs.$native.toArray());
        /*End dynamic block*/
    }
    $$jQueryAbs.toArray=toArray;
    toArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSArray},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toArray']};};
    $$jQueryAbs.toggle$defs$duration=function(duration$1639,easing$1640,complete$1641){return null;};
    $$jQueryAbs.toggle$defs$easing=function(duration$1639,easing$1640,complete$1641){return null;};
    $$jQueryAbs.toggle$defs$complete=function(duration$1639,easing$1640,complete$1641){return null;};
    function toggle(duration$1639,easing$1640,complete$1641){
        if(duration$1639===undefined){duration$1639=$$jQueryAbs.toggle$defs$duration(duration$1639,easing$1640,complete$1641);}
        if(easing$1640===undefined){easing$1640=$$jQueryAbs.toggle$defs$easing(duration$1639,easing$1640,complete$1641);}
        if(complete$1641===undefined){complete$1641=$$jQueryAbs.toggle$defs$complete(duration$1639,easing$1640,complete$1641);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggle(/*NULL PARAM!*/duration$1639/*NULL PARAM!*/,easing$1640/*NULL PARAM!*/,complete$1641));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggle=toggle;
    toggle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggle']};};
    function toggleOptions(options$1642){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggle(/*NULL PARAM!*/options$1642.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggleOptions=toggleOptions;
    toggleOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleOptions']};};
    function toggleShowOrHide(showOrHide$1643){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggle(/*NULL PARAM!*/showOrHide$1643));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggleShowOrHide=toggleShowOrHide;
    toggleShowOrHide.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'showOrHide',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleShowOrHide']};};
    $$jQueryAbs.toggleClass$defs$swit=function(swit$1644){return null;};
    function toggleClass(swit$1644){
        if(swit$1644===undefined){swit$1644=$$jQueryAbs.toggleClass$defs$swit(swit$1644);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggleClass(/*NULL PARAM!*/swit$1644));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggleClass=toggleClass;
    toggleClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'swit',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleClass']};};
    $$jQueryAbs.toggleClassName$defs$swit=function(className$1645,swit$1646){return null;};
    function toggleClassName(className$1645,swit$1646){
        if(swit$1646===undefined){swit$1646=$$jQueryAbs.toggleClassName$defs$swit(className$1645,swit$1646);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggleClass(/*NULL PARAM!*/className$1645.valueOf()/*NULL PARAM!*/,swit$1646));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggleClassName=toggleClassName;
    toggleClassName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'swit',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleClassName']};};
    $$jQueryAbs.toggleClassCallback$defs$swit=function(callback$1647,swit$1648){return null;};
    function toggleClassCallback(callback$1647,swit$1648){
        if(swit$1648===undefined){swit$1648=$$jQueryAbs.toggleClassCallback$defs$swit(callback$1647,swit$1648);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggleClass(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1647,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean}]}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String},{t:$$$cl1.Boolean}]}}},Return:{t:$$$cl1.String}})/*NULL PARAM!*/,swit$1648));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggleClassCallback=toggleClassCallback;
    toggleClassCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean}]}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String},{t:$$$cl1.Boolean}]}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}},{$nm:'swit',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleClassCallback']};};
    function trigger(event$1649,extraParameters$1650){
        if(extraParameters$1650===undefined){extraParameters$1650=$$$cl1.getEmpty();}
        
        var case$1651=event$1649;
        if ($$$cl1.isOfType(event$1649,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.trigger(/*NULL PARAM!*/case$1651.valueOf()/*NULL PARAM!*/,extraParameters$1650));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(event$1649,{t:JQueryEvent})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.trigger(/*NULL PARAM!*/case$1651.$native/*NULL PARAM!*/,extraParameters$1650));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.trigger=trigger;
    trigger.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'event',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQueryEvent}]},$an:function(){return[];}},{$nm:'extraParameters',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','trigger']};};
    function unbind(eventType$1652){
        
        var case$1653=eventType$1652;
        if ($$$cl1.isOfType(eventType$1652,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.unbind(/*NULL PARAM!*/case$1653.valueOf()/*NULL PARAM!*/,false));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(eventType$1652,{ t:'u', l:[{t:$$$cjd977.Event},{t:JQueryEvent}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.unbind(/*NULL PARAM!*/case$1653));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.unbind=unbind;
    unbind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd977.Event},{t:JQueryEvent}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','unbind']};};
    $$jQueryAbs.unbindCallaback$defs$eventType=function(eventType$1654,callback$1655){return null;};
    $$jQueryAbs.unbindCallaback$defs$callback=function(eventType$1654,callback$1655){return null;};
    function unbindCallaback(eventType$1654,callback$1655){
        if(eventType$1654===undefined){eventType$1654=$$jQueryAbs.unbindCallaback$defs$eventType(eventType$1654,callback$1655);}
        if(callback$1655===undefined){callback$1655=$$jQueryAbs.unbindCallaback$defs$callback(eventType$1654,callback$1655);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.unbind(/*NULL PARAM!*/eventType$1654/*NULL PARAM!*/,callback$1655));
        /*End dynamic block*/
    }
    $$jQueryAbs.unbindCallaback=unbindCallaback;
    unbindCallaback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','unbindCallaback']};};
    $$jQueryAbs.undelegate$defs$namespace=function(namespace$1656){return null;};
    function undelegate(namespace$1656){
        if(namespace$1656===undefined){namespace$1656=$$jQueryAbs.undelegate$defs$namespace(namespace$1656);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.undelegate(/*NULL PARAM!*/namespace$1656));
        /*End dynamic block*/
    }
    $$jQueryAbs.undelegate=undelegate;
    undelegate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'namespace',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','undelegate']};};
    $$jQueryAbs.undelegateCallback$defs$callback=function(selector$1657,eventType$1658,callback$1659){return null;};
    function undelegateCallback(selector$1657,eventType$1658,callback$1659){
        if(callback$1659===undefined){callback$1659=$$jQueryAbs.undelegateCallback$defs$callback(selector$1657,eventType$1658,callback$1659);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.undelegate(/*NULL PARAM!*/selector$1657.valueOf()/*NULL PARAM!*/,eventType$1658.valueOf()/*NULL PARAM!*/,callback$1659));
        /*End dynamic block*/
    }
    $$jQueryAbs.undelegateCallback=undelegateCallback;
    undelegateCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','undelegateCallback']};};
    function undelegateEvents(selector$1660,events$1661){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.undelegate());
        /*End dynamic block*/
    }
    $$jQueryAbs.undelegateEvents=undelegateEvents;
    undelegateEvents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'events',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','undelegateEvents']};};
    function unwrap(){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.unwrap());
        /*End dynamic block*/
    }
    $$jQueryAbs.unwrap=unwrap;
    unwrap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','unwrap']};};
    function getVal(){
        /*Begin dynamic block*/
        var val$1662=$$jQueryAbs.$native.val();
        $prop$getVal$1662={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQueryAbs','$m','getVal','$at','val']};}};
        $prop$getVal$1662.get=function(){return val$1662};
        if(val$1662.nstanceof(/*NULL PARAM!*/(typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'1928:23-1928:28','jquery.ceylon'):String))){
            return $$$cjl361.JSString(val$1662);
        }else {
            if((typeof arrayIsArray==='undefined'||arrayIsArray===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: arrayIsArray")),'1930:14-1930:25','jquery.ceylon'):arrayIsArray)(/*NULL PARAM!*/val$1662)){
                return $$$cjl361.JSArray(val$1662);
            }else {
                return $$$cjl361.JSNumber(val$1662);
            }
        }/*End dynamic block*/
    }
    $$jQueryAbs.getVal=getVal;
    getVal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cjl361.JSString},{t:$$$cjl361.JSNumber},{t:$$$cjl361.JSArray}]},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getVal']};};
    function setVal(val$1663){
        if(val$1663===undefined){val$1663=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.val(/*NULL PARAM!*/val$1663));
        /*End dynamic block*/
    }
    $$jQueryAbs.setVal=setVal;
    setVal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setVal']};};
    function setValCallback(callback$1664){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.val(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1664,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setValCallback=setValCallback;
    setValCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setValCallback']};};
    function getWidth(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$jQueryAbs.$native.width());
        /*End dynamic block*/
    }
    $$jQueryAbs.getWidth=getWidth;
    getWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getWidth']};};
    function setWidth(width$1665){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.width(/*NULL PARAM!*/width$1665));
        /*End dynamic block*/
    }
    $$jQueryAbs.setWidth=setWidth;
    setWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'width',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setWidth']};};
    function setWidthCallback(callback$1666){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.width(/*NULL PARAM!*/callback$1666));
        /*End dynamic block*/
    }
    $$jQueryAbs.setWidthCallback=setWidthCallback;
    setWidthCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setWidthCallback']};};
    function wrap(wrappingElement$1667){
        
        var case$1668=wrappingElement$1667;
        if ($$$cl1.isOfType(wrappingElement$1667,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.wrap(/*NULL PARAM!*/case$1668.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(wrappingElement$1667,{ t:'u', l:[{t:$$$cjd977.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.wrap(/*NULL PARAM!*/case$1668.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.wrap=wrap;
    wrap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd977.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrap']};};
    function wrapCallback(callback$1669){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.wrap(/*NULL PARAM!*/callback$1669));
        /*End dynamic block*/
    }
    $$jQueryAbs.wrapCallback=wrapCallback;
    wrapCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:JQuery}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrapCallback']};};
    function wrapAll(wrappingElement$1670){
        
        var case$1671=wrappingElement$1670;
        if ($$$cl1.isOfType(wrappingElement$1670,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.wrapAll(/*NULL PARAM!*/case$1671.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(wrappingElement$1670,{ t:'u', l:[{t:$$$cjd977.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.wrapAll(/*NULL PARAM!*/case$1671.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.wrapAll=wrapAll;
    wrapAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd977.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrapAll']};};
    function wrapInner(wrappingElement$1672){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.wrapInner(/*NULL PARAM!*/wrappingElement$1672.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.wrapInner=wrapInner;
    wrapInner.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrapInner']};};
    function wrapInnerCallback(callback$1673){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.wrapInner(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1673,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.wrapInnerCallback=wrapInnerCallback;
    wrapInnerCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrapInnerCallback']};};
    return $$jQueryAbs;
}
JQueryAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','JQueryAbs']};};
exports.JQueryAbs=JQueryAbs;
function $init$JQueryAbs(){
    if (JQueryAbs.$$===undefined){
        $$$cl1.initTypeProto(JQueryAbs,'ceylon.js.jquery::JQueryAbs',$$$cjl361.JSObjectAbs);
    }
    return JQueryAbs;
}
exports.$init$JQueryAbs=$init$JQueryAbs;
$init$JQueryAbs();
function JQuery(n$1674, $$jQuery){
    $init$JQuery();
    if ($$jQuery===undefined)$$jQuery=new JQuery.$$;
    $$jQuery.n$1674_=n$1674;
    JQueryAbs($$jQuery);
    $$$cl1.defineAttr($$jQuery,'n$1674',function(){return this.n$1674_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQuery,d:['ceylon.js.jquery','JQuery','$at','n']};});
    $$jQuery.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQuery,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','JQuery','$at','native']};}};
    /*Begin dynamic block*/
    $$jQuery.$native=n$1674;/*End dynamic block*/
    return $$jQuery;
}
JQuery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQueryAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQuery']};};
exports.JQuery=JQuery;
function $init$JQuery(){
    if (JQuery.$$===undefined){
        $$$cl1.initTypeProto(JQuery,'ceylon.js.jquery::JQuery',$init$JQueryAbs());
    }
    return JQuery;
}
exports.$init$JQuery=$init$JQuery;
$init$JQuery();
function DataType(name$1675, $$dataType){
    $init$DataType();
    if ($$dataType===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$dataType.name$1675_=name$1675;
    $$$cl1.defineAttr($$dataType,'name$1675',function(){return this.name$1675_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DataType,d:['ceylon.js.jquery','DataType','$at','name']};});
    return $$dataType;
}
DataType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','DataType']};};
exports.DataType=DataType;
function $init$DataType(){
    if (DataType.$$===undefined){
        $$$cl1.initTypeProto(DataType,'ceylon.js.jquery::DataType',$$$cl1.Basic);
    }
    return DataType;
}
exports.$init$DataType=$init$DataType;
$init$DataType();
function dataTypeXML$1676(){
    var $$dataTypeXML=new dataTypeXML$1676.$$;
    DataType($$$cl1.String("dataTypeXML",11),$$dataTypeXML);
    return $$dataTypeXML;
}
function $init$dataTypeXML$1676(){
    if (dataTypeXML$1676.$$===undefined){
        $$$cl1.initTypeProto(dataTypeXML$1676,'ceylon.js.jquery::dataTypeXML',$init$DataType());
    }
    return dataTypeXML$1676;
}
exports.$init$dataTypeXML$1676=$init$dataTypeXML$1676;
$init$dataTypeXML$1676();
var dataTypeXML$1677;
function getDataTypeXML(){
    if (dataTypeXML$1677===undefined)dataTypeXML$1677=$init$dataTypeXML$1676()();
    return dataTypeXML$1677;
}
exports.getDataTypeXML=getDataTypeXML;
getDataTypeXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeXML$1676},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeXML']};};
$prop$getDataTypeXML={get:getDataTypeXML,$$metamodel$$:getDataTypeXML.$$metamodel$$};
exports.$prop$getDataTypeXML=$prop$getDataTypeXML;
function dataTypeHtml$1678(){
    var $$dataTypeHtml=new dataTypeHtml$1678.$$;
    DataType($$$cl1.String("dataTypeHtml",12),$$dataTypeHtml);
    return $$dataTypeHtml;
}
function $init$dataTypeHtml$1678(){
    if (dataTypeHtml$1678.$$===undefined){
        $$$cl1.initTypeProto(dataTypeHtml$1678,'ceylon.js.jquery::dataTypeHtml',$init$DataType());
    }
    return dataTypeHtml$1678;
}
exports.$init$dataTypeHtml$1678=$init$dataTypeHtml$1678;
$init$dataTypeHtml$1678();
var dataTypeHtml$1679;
function getDataTypeHtml(){
    if (dataTypeHtml$1679===undefined)dataTypeHtml$1679=$init$dataTypeHtml$1678()();
    return dataTypeHtml$1679;
}
exports.getDataTypeHtml=getDataTypeHtml;
getDataTypeHtml.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeHtml$1678},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeHtml']};};
$prop$getDataTypeHtml={get:getDataTypeHtml,$$metamodel$$:getDataTypeHtml.$$metamodel$$};
exports.$prop$getDataTypeHtml=$prop$getDataTypeHtml;
function dataTypeScript$1680(){
    var $$dataTypeScript=new dataTypeScript$1680.$$;
    DataType($$$cl1.String("dataTypeScript",14),$$dataTypeScript);
    return $$dataTypeScript;
}
function $init$dataTypeScript$1680(){
    if (dataTypeScript$1680.$$===undefined){
        $$$cl1.initTypeProto(dataTypeScript$1680,'ceylon.js.jquery::dataTypeScript',$init$DataType());
    }
    return dataTypeScript$1680;
}
exports.$init$dataTypeScript$1680=$init$dataTypeScript$1680;
$init$dataTypeScript$1680();
var dataTypeScript$1681;
function getDataTypeScript(){
    if (dataTypeScript$1681===undefined)dataTypeScript$1681=$init$dataTypeScript$1680()();
    return dataTypeScript$1681;
}
exports.getDataTypeScript=getDataTypeScript;
getDataTypeScript.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeScript$1680},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeScript']};};
$prop$getDataTypeScript={get:getDataTypeScript,$$metamodel$$:getDataTypeScript.$$metamodel$$};
exports.$prop$getDataTypeScript=$prop$getDataTypeScript;
function dataTypeJson$1682(){
    var $$dataTypeJson=new dataTypeJson$1682.$$;
    DataType($$$cl1.String("dataTypeJson",12),$$dataTypeJson);
    return $$dataTypeJson;
}
function $init$dataTypeJson$1682(){
    if (dataTypeJson$1682.$$===undefined){
        $$$cl1.initTypeProto(dataTypeJson$1682,'ceylon.js.jquery::dataTypeJson',$init$DataType());
    }
    return dataTypeJson$1682;
}
exports.$init$dataTypeJson$1682=$init$dataTypeJson$1682;
$init$dataTypeJson$1682();
var dataTypeJson$1683;
function getDataTypeJson(){
    if (dataTypeJson$1683===undefined)dataTypeJson$1683=$init$dataTypeJson$1682()();
    return dataTypeJson$1683;
}
exports.getDataTypeJson=getDataTypeJson;
getDataTypeJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeJson$1682},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeJson']};};
$prop$getDataTypeJson={get:getDataTypeJson,$$metamodel$$:getDataTypeJson.$$metamodel$$};
exports.$prop$getDataTypeJson=$prop$getDataTypeJson;
function dataTypeJsonp$1684(){
    var $$dataTypeJsonp=new dataTypeJsonp$1684.$$;
    DataType($$$cl1.String("dataTypeJsonp",13),$$dataTypeJsonp);
    return $$dataTypeJsonp;
}
function $init$dataTypeJsonp$1684(){
    if (dataTypeJsonp$1684.$$===undefined){
        $$$cl1.initTypeProto(dataTypeJsonp$1684,'ceylon.js.jquery::dataTypeJsonp',$init$DataType());
    }
    return dataTypeJsonp$1684;
}
exports.$init$dataTypeJsonp$1684=$init$dataTypeJsonp$1684;
$init$dataTypeJsonp$1684();
var dataTypeJsonp$1685;
function getDataTypeJsonp(){
    if (dataTypeJsonp$1685===undefined)dataTypeJsonp$1685=$init$dataTypeJsonp$1684()();
    return dataTypeJsonp$1685;
}
exports.getDataTypeJsonp=getDataTypeJsonp;
getDataTypeJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeJsonp$1684},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeJsonp']};};
$prop$getDataTypeJsonp={get:getDataTypeJsonp,$$metamodel$$:getDataTypeJsonp.$$metamodel$$};
exports.$prop$getDataTypeJsonp=$prop$getDataTypeJsonp;
function dataTypeText$1686(){
    var $$dataTypeText=new dataTypeText$1686.$$;
    DataType($$$cl1.String("dataTypeText",12),$$dataTypeText);
    return $$dataTypeText;
}
function $init$dataTypeText$1686(){
    if (dataTypeText$1686.$$===undefined){
        $$$cl1.initTypeProto(dataTypeText$1686,'ceylon.js.jquery::dataTypeText',$init$DataType());
    }
    return dataTypeText$1686;
}
exports.$init$dataTypeText$1686=$init$dataTypeText$1686;
$init$dataTypeText$1686();
var dataTypeText$1687;
function getDataTypeText(){
    if (dataTypeText$1687===undefined)dataTypeText$1687=$init$dataTypeText$1686()();
    return dataTypeText$1687;
}
exports.getDataTypeText=getDataTypeText;
getDataTypeText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeText$1686},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeText']};};
$prop$getDataTypeText={get:getDataTypeText,$$metamodel$$:getDataTypeText.$$metamodel$$};
exports.$prop$getDataTypeText=$prop$getDataTypeText;
function createJSONPSettings(jsonp$1688,jsonpCallback$1689){
    if(jsonp$1688===undefined){jsonp$1688=true;}
    if(jsonpCallback$1689===undefined){jsonpCallback$1689=$$$cl1.String("callback",8);}
    /*Begin dynamic block*/
    if(jsonp$1688.equals(true)){
        if(jsonpCallback$1689.equals($$$cl1.String("callback",8))){
            return null;
        }else {
            return JSONPSettings(jsonpCallback$1689);
        }
    }else {
        if(jsonpCallback$1689.equals($$$cl1.String("callback",8))){
            return JSONPSettings(false);
        }else {
            var json$1690=(values$1691=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("jsonp",5),false,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.false$1692}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("jsonpCallback",13),jsonpCallback$1689,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{ t:'u', l:[{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.false$1692}}},{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}]}}),$$$cjj661.JSON(values$1691));
            $prop$getJson$1690={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj661.JSON},d:['ceylon.js.jquery','createJSONPSettings','$at','json']};}};
            $prop$getJson$1690.get=function(){return json$1690};
            var values$1691;
            return JSONPSettings(json$1690.toJson());
        }
    }/*End dynamic block*/
}
exports.createJSONPSettings=createJSONPSettings;
createJSONPSettings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JSONPSettings}]},$ps:[{$nm:'jsonp',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'jsonpCallback',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','createJSONPSettings']};};
function JSONPSettingsAbs($$jSONPSettingsAbs){
    $init$JSONPSettingsAbs();
    if ($$jSONPSettingsAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$jSONPSettingsAbs);
    function getIsJsonp(){
        /*Begin dynamic block*/
        if(((tmpvar$1693=$$jSONPSettingsAbs.$native.jsonp,tmpvar$1694=true,(tmpvar$1693.equals&&tmpvar$1693.equals(tmpvar$1694))||tmpvar$1693===tmpvar$1694)||(tmpvar$1695=$$jSONPSettingsAbs.$native.jsonp,tmpvar$1696=null,(tmpvar$1695.equals&&!tmpvar$1695.equals(tmpvar$1696))||tmpvar$1695!==tmpvar$1696))){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jSONPSettingsAbs.getIsJsonp=getIsJsonp;
    getIsJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','getIsJsonp']};};
    function setIsJsonp(jsonp$1697){
        /*Begin dynamic block*/
        $$jSONPSettingsAbs.$native.jsonp=jsonp$1697;
        /*End dynamic block*/
    }
    $$jSONPSettingsAbs.setIsJsonp=setIsJsonp;
    setIsJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'jsonp',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','setIsJsonp']};};
    function getCallback(){
        /*Begin dynamic block*/
        var callback$1698=$$jSONPSettingsAbs.$native.callback;
        $prop$getCallback$1698={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','getCallback','$at','callback']};}};
        $prop$getCallback$1698.get=function(){return callback$1698};
        if((tmpvar$1699=callback$1698,tmpvar$1700=null,(tmpvar$1699.equals&&!tmpvar$1699.equals(tmpvar$1700))||tmpvar$1699!==tmpvar$1700)){
            return $$$cjl361.JSString($$jSONPSettingsAbs.$native.callback);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jSONPSettingsAbs.getCallback=getCallback;
    getCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','getCallback']};};
    function setCallback(callback$1701){
        /*Begin dynamic block*/
        $$jSONPSettingsAbs.$native.callback=callback$1701.valueOf();
        /*End dynamic block*/
    }
    $$jSONPSettingsAbs.setCallback=setCallback;
    setCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','setCallback']};};
    return $$jSONPSettingsAbs;
}
JSONPSettingsAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','JSONPSettingsAbs']};};
exports.JSONPSettingsAbs=JSONPSettingsAbs;
function $init$JSONPSettingsAbs(){
    if (JSONPSettingsAbs.$$===undefined){
        $$$cl1.initTypeProto(JSONPSettingsAbs,'ceylon.js.jquery::JSONPSettingsAbs',$$$cjl361.JSObjectAbs);
    }
    return JSONPSettingsAbs;
}
exports.$init$JSONPSettingsAbs=$init$JSONPSettingsAbs;
$init$JSONPSettingsAbs();
function JSONPSettings(n$1702, $$jSONPSettings){
    $init$JSONPSettings();
    if ($$jSONPSettings===undefined)$$jSONPSettings=new JSONPSettings.$$;
    $$jSONPSettings.n$1702_=n$1702;
    JSONPSettingsAbs($$jSONPSettings);
    $$$cl1.defineAttr($$jSONPSettings,'n$1702',function(){return this.n$1702_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSONPSettings,d:['ceylon.js.jquery','JSONPSettings','$at','n']};});
    $$jSONPSettings.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSONPSettings,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','JSONPSettings','$at','native']};}};
    /*Begin dynamic block*/
    $$jSONPSettings.$native=n$1702;/*End dynamic block*/
    return $$jSONPSettings;
}
JSONPSettings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSONPSettingsAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPSettings']};};
exports.JSONPSettings=JSONPSettings;
function $init$JSONPSettings(){
    if (JSONPSettings.$$===undefined){
        $$$cl1.initTypeProto(JSONPSettings,'ceylon.js.jquery::JSONPSettings',$init$JSONPSettingsAbs());
    }
    return JSONPSettings;
}
exports.$init$JSONPSettings=$init$JSONPSettings;
$init$JSONPSettings();
function JQueryAjaxSettingsAbs($$jQueryAjaxSettingsAbs){
    $init$JQueryAjaxSettingsAbs();
    if ($$jQueryAjaxSettingsAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$jQueryAjaxSettingsAbs);
    function getAccepts(){
        /*Begin dynamic block*/
        return $$$cl1.Comprehension(function(){
            var it$1703=$$jQueryAjaxSettingsAbs.$native.accepts.iterator();
            var key$1704,val$1705;
            var next$val$1705=function(){
                var entry$1706;
                if((entry$1706=it$1703.next())!==$$$cl1.getFinished()){
                    key$1704=entry$1706.key;
                    val$1705=entry$1706.item;
                    return entry$1706;
                }
                val$1705=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1705();
            return function(){
                if(val$1705!==undefined){
                    var key$1704$1707=key$1704;
                    var val$1705$1708=val$1705;
                    var tmpvar$1709=$$$cl1.Entry($$$cjl361.JSString(key$1704$1707),$$$cjl361.JSString(val$1705$1708),{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSString}});
                    next$val$1705();
                    return tmpvar$1709;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSString}}}}).sequence;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getAccepts=getAccepts;
    getAccepts.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSString}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getAccepts']};};
    function setAccepts(accepts$1710){
        if(accepts$1710===undefined){accepts$1710=$$$cl1.getEmpty();}
        var acceptNative$1711=$$$cjl361.createJSObject();
        var it$1712 = accepts$1710.iterator();
        var item$1713;while ((item$1713=it$1712.next())!==$$$cl1.getFinished()){
            var key$1714=item$1713.key;
            var val$1715=item$1713.item;
            /*Begin dynamic block*/
            $$$cjl361.objectDefineProperty(acceptNative$1711,key$1714,$$$cjl361.DataDescriptor(true,false,true,true,val$1715.$native));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.accepts=acceptNative$1711.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setAccepts=setAccepts;
    setAccepts.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'accepts',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSString}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setAccepts']};};
    function getAsync(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.async){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getAsync=getAsync;
    getAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getAsync']};};
    function setAsync(async$1716){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.async=async$1716;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setAsync=setAsync;
    setAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'async',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setAsync']};};
    function getBeforeSend(){
        /*Begin dynamic block*/
        return (tmpvar$1717=$$jQueryAjaxSettingsAbs.$native.beforeSend=(typeof beforeSend==='undefined'||beforeSend===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: beforeSend")),'117:30-117:39','jqueryajaxsettings.ceylon'):beforeSend),$$$cl1.isOfType(tmpvar$1717,{t:$$$cl1.Anything})?tmpvar$1717:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'117:10-117:39','jqueryajaxsettings.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getBeforeSend=getBeforeSend;
    getBeforeSend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Boolean(JQXHR, JQueryAjaxSettings)?",43)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getBeforeSend']};};
    function setBeforeSend(beforeSend$1718){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.beforeSend=$$$cl1.$JsCallable(beforeSend$1718/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setBeforeSend=setBeforeSend;
    setBeforeSend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'beforeSend',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryAjaxSettings},Element:{t:JQueryAjaxSettings}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:JQueryAjaxSettings}]}}},Return:{t:$$$cl1.Boolean}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setBeforeSend']};};
    function getCache(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.cache){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getCache=getCache;
    getCache.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getCache']};};
    function setCache(cache$1719){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.cache=cache$1719;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setCache=setCache;
    setCache.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'cache',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setCache']};};
    function getComplete(){
        /*Begin dynamic block*/
        var complete$1720=$$jQueryAjaxSettingsAbs.$native.complete;
        $prop$getComplete$1720={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getComplete','$at','complete']};}};
        $prop$getComplete$1720.get=function(){return complete$1720};
        if((tmpvar$1721=complete$1720,tmpvar$1722=null,(tmpvar$1721.equals&&tmpvar$1721.equals(tmpvar$1722))||tmpvar$1721===tmpvar$1722)){
            return null;
        }else {
            if($$$cjl361.arrayIsArray(complete$1720)){
                return $$$cjl361.JSArray(complete$1720);
            }else {
                return $$$cjl361.createJSArray([(tmpvar$1723=complete$1720,$$$cl1.isOfType(tmpvar$1723,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1723:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'152:25-152:32','jqueryajaxsettings.ceylon'))].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}}}));
            }
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getComplete=getComplete;
    getComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns array of Anything(JQXHR, String) or null",48)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getComplete']};};
    function setComplete(complete$1724){
        if(complete$1724===undefined){complete$1724=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.complete=complete$1724;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setComplete=setComplete;
    setComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'complete',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setComplete']};};
    function getContents(){
        /*Begin dynamic block*/
        return $$$cl1.Comprehension(function(){
            var it$1725=$$jQueryAjaxSettingsAbs.$native.contents.iterator();
            var key$1726,val$1727;
            var next$val$1727=function(){
                var entry$1728;
                if((entry$1728=it$1725.next())!==$$$cl1.getFinished()){
                    key$1726=entry$1728.key;
                    val$1727=entry$1728.item;
                    return entry$1728;
                }
                val$1727=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1727();
            return function(){
                if(val$1727!==undefined){
                    var key$1726$1729=key$1726;
                    var val$1727$1730=val$1727;
                    var tmpvar$1731=$$$cl1.Entry($$$cjl361.JSString(key$1726$1729),$$$cjl361.RegExp(val$1727$1730),{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.RegExp}});
                    next$val$1727();
                    return tmpvar$1731;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.RegExp}}}}).sequence;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getContents=getContents;
    getContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.RegExp}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContents']};};
    function setContents(contents$1732){
        if(contents$1732===undefined){contents$1732=$$$cl1.getEmpty();}
        var contNative$1733=$$$cjl361.createJSObject();
        var it$1734 = contents$1732.iterator();
        var item$1735;while ((item$1735=it$1734.next())!==$$$cl1.getFinished()){
            var key$1736=item$1735.key;
            var val$1737=item$1735.item;
            /*Begin dynamic block*/
            $$$cjl361.objectDefineProperty(contNative$1733,key$1736,$$$cjl361.DataDescriptor(true,false,true,true,val$1737.$native));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.contents=contNative$1733;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setContents=setContents;
    setContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'contents',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.RegExp}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContents']};};
    function getContentType(){
        /*Begin dynamic block*/
        if((tmpvar$1738=$$jQueryAjaxSettingsAbs.$native.contentType,tmpvar$1739=null,(tmpvar$1738.equals&&!tmpvar$1738.equals(tmpvar$1739))||tmpvar$1738!==tmpvar$1739)){
            return $$$cjl361.JSString($$jQueryAjaxSettingsAbs.$native.contentType);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getContentType=getContentType;
    getContentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContentType']};};
    function setContentType(contentType$1740){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.contentType=contentType$1740.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setContentType=setContentType;
    setContentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'contentType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContentType']};};
    function getContext(){
        /*Begin dynamic block*/
        if((tmpvar$1741=$$jQueryAjaxSettingsAbs.$native.context,tmpvar$1742=null,(tmpvar$1741.equals&&!tmpvar$1741.equals(tmpvar$1742))||tmpvar$1741!==tmpvar$1742)){
            return $$$cjl361.JSObject($$jQueryAjaxSettingsAbs.$native.context);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getContext=getContext;
    getContext.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSObject}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContext']};};
    function setContext(context$1743){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.context=context$1743.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setContext=setContext;
    setContext.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cjl361.JSObject},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContext']};};
    function getConverters(){
        /*Begin dynamic block*/
        return $$$cl1.Comprehension(function(){
            var it$1744=$$jQueryAjaxSettingsAbs.$native.converters.iterator();
            var key$1745,val$1746;
            var next$val$1746=function(){
                var entry$1747;
                if((entry$1747=it$1744.next())!==$$$cl1.getFinished()){
                    key$1745=entry$1747.key;
                    val$1746=entry$1747.item;
                    return entry$1747;
                }
                val$1746=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1746();
            return function(){
                if(val$1746!==undefined){
                    var key$1745$1748=key$1745;
                    var val$1746$1749=val$1746;
                    var tmpvar$1750=$$$cl1.Entry($$$cjl361.JSString(key$1745$1748),$$$cjl361.JSObject(val$1746$1749),{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSObject}});
                    next$val$1746();
                    return tmpvar$1750;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSObject}}}}).sequence;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getConverters=getConverters;
    getConverters.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSObject}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getConverters']};};
    function setConverters(converters$1751){
        if(converters$1751===undefined){converters$1751=$$$cl1.getEmpty();}
        var convNative$1752=$$$cjl361.createJSObject();
        var it$1753 = converters$1751.iterator();
        var item$1754;while ((item$1754=it$1753.next())!==$$$cl1.getFinished()){
            var key$1755=item$1754.key;
            var val$1756=item$1754.item;
            /*Begin dynamic block*/
            $$$cjl361.objectDefineProperty(convNative$1752,key$1755,$$$cjl361.DataDescriptor(true,false,true,true,val$1756.$native));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.converters=convNative$1752.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setConverters=setConverters;
    setConverters.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'converters',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSObject}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setConverters']};};
    function getCrossDomain(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.crossDomain){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getCrossDomain=getCrossDomain;
    getCrossDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getCrossDomain']};};
    function setCrossDomain(crossDomain$1757){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.crossDomain=crossDomain$1757;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setCrossDomain=setCrossDomain;
    setCrossDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'crossDomain',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setCrossDomain']};};
    function getData(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.data.instanceof(/*NULL PARAM!*/(typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'250:32-250:37','jqueryajaxsettings.ceylon'):String))){
            return $$$cjl361.JSString($$jQueryAjaxSettingsAbs.$native.data);
        }else {
            if((tmpvar$1758=$$jQueryAjaxSettingsAbs.$native.data,tmpvar$1759=null,(tmpvar$1758.equals&&!tmpvar$1758.equals(tmpvar$1759))||tmpvar$1758!==tmpvar$1759)){
                return $$$cjl361.JSObject($$jQueryAjaxSettingsAbs.$native.data);
            }else {
                return null;
            }
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getData=getData;
    getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cjl361.JSString},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSObject}]}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getData']};};
    function setData(data$1760){
        
        var case$1761=data$1760;
        if ($$$cl1.isOfType(data$1760,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$jQueryAjaxSettingsAbs.$native.data=case$1761.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$1760,{t:$$$cjl361.JSObject})) {
            /*Begin dynamic block*/
            $$jQueryAjaxSettingsAbs.$native.data=case$1761.$native;
            /*End dynamic block*/
        }
    }
    $$jQueryAjaxSettingsAbs.setData=setData;
    setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSObject}]},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setData']};};
    function getDataFilter(){
        /*Begin dynamic block*/
        return (tmpvar$1762=$$jQueryAjaxSettingsAbs.$native.dataFilter,$$$cl1.isOfType(tmpvar$1762,{t:$$$cl1.Anything})?tmpvar$1762:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'277:10-277:26','jqueryajaxsettings.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getDataFilter=getDataFilter;
    getDataFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Anything(String, String)?",33)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getDataFilter']};};
    function setDataFilter(datafilter$1763){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.dataFilter=$$$cl1.$JsCallable(datafilter$1763/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setDataFilter=setDataFilter;
    setDataFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'datafilter',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setDataFilter']};};
    function getDataType(){
        /*Begin dynamic block*/
        if((tmpvar$1764=$$jQueryAjaxSettingsAbs.$native.dataType,tmpvar$1765=null,(tmpvar$1764.equals&&!tmpvar$1764.equals(tmpvar$1765))||tmpvar$1764!==tmpvar$1765)){
            return $$$cjl361.JSString($$jQueryAjaxSettingsAbs.$native.dataType);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getDataType=getDataType;
    getDataType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getDataType']};};
    function setDataType(dataType$1766){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.dataType=dataType$1766.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setDataType=setDataType;
    setDataType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'dataType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setDataType']};};
    function getError(){
        /*Begin dynamic block*/
        if($$$cjl361.arrayIsArray($$jQueryAjaxSettingsAbs.$native.error)){
            return $$$cjl361.JSArray($$jQueryAjaxSettingsAbs.$native.error);
        }else {
            if((tmpvar$1767=$$jQueryAjaxSettingsAbs.$native.error,tmpvar$1768=null,(tmpvar$1767.equals&&!tmpvar$1767.equals(tmpvar$1768))||tmpvar$1767!==tmpvar$1768)){
                return $$$cjl361.createJSArray([(tmpvar$1769=$$jQueryAjaxSettingsAbs.$native.error,$$$cl1.isOfType(tmpvar$1769,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1769:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'309:25-309:36','jqueryajaxsettings.ceylon'))].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}}}));
            }else {
                return null;
            }
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getError=getError;
    getError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Anything(JQXHR, String?, String?)[]",43)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getError']};};
    function setError(datafilter$1770){
        if(datafilter$1770===undefined){datafilter$1770=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.dataFilter=datafilter$1770;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setError=setError;
    setError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'datafilter',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setError']};};
    function getGlobal(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.global){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getGlobal=getGlobal;
    getGlobal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getGlobal']};};
    function setGlobal(global$1771){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.global=global$1771;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setGlobal=setGlobal;
    setGlobal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'global',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setGlobal']};};
    function getHeaders(){
        /*Begin dynamic block*/
        return $$$cl1.Comprehension(function(){
            var it$1772=$$jQueryAjaxSettingsAbs.$native.headers.iterator();
            var key$1773,val$1774;
            var next$val$1774=function(){
                var entry$1775;
                if((entry$1775=it$1772.next())!==$$$cl1.getFinished()){
                    key$1773=entry$1775.key;
                    val$1774=entry$1775.item;
                    return entry$1775;
                }
                val$1774=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1774();
            return function(){
                if(val$1774!==undefined){
                    var key$1773$1776=key$1773;
                    var val$1774$1777=val$1774;
                    var tmpvar$1778=$$$cl1.Entry($$$cjl361.JSString(key$1773$1776),$$$cjl361.JSString(val$1774$1777),{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSString}});
                    next$val$1774();
                    return tmpvar$1778;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSString}}}}).sequence;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getHeaders=getHeaders;
    getHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSString}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getHeaders']};};
    function setHeaders(headers$1779){
        var headNative$1780=$$$cjl361.createJSObject();
        var it$1781 = headers$1779.iterator();
        var item$1782;while ((item$1782=it$1781.next())!==$$$cl1.getFinished()){
            var key$1783=item$1782.key;
            var val$1784=item$1782.item;
            /*Begin dynamic block*/
            $$$cjl361.objectDefineProperty(headNative$1780,key$1783,$$$cjl361.DataDescriptor(true,false,true,true,val$1784.$native));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.headers=headNative$1780.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setHeaders=setHeaders;
    setHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'headers',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSString}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setHeaders']};};
    function getIfModified(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.ifModified){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getIfModified=getIfModified;
    getIfModified.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getIfModified']};};
    function setIfModified(modified$1785){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.ifModified=modified$1785;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setIfModified=setIfModified;
    setIfModified.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'modified',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setIfModified']};};
    function getIsLocal(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.isLocal){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getIsLocal=getIsLocal;
    getIsLocal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getIsLocal']};};
    function setIsLocal(local$1786){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.isLocal=local$1786;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setIsLocal=setIsLocal;
    setIsLocal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'local',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setIsLocal']};};
    function getJsonp(){
        var jsonp$1787;
        /*Begin dynamic block*/
        jsonp$1787=$$$cjl361.JSObject($$jQueryAjaxSettingsAbs.$native.jsonp);if((tmpvar$1788=$$jQueryAjaxSettingsAbs.$native.jsonp,tmpvar$1789=null,(tmpvar$1788.equals&&tmpvar$1788.equals(tmpvar$1789))||tmpvar$1788===tmpvar$1789)){
            return null;
        }else {
            if((jsonp$1787.hasOwnProperty($$$cl1.String("jsonp",5))||jsonp$1787.hasOwnProperty($$$cl1.String("jsonpCallback",13)))){
                return JSONPSettings(jsonp$1787.$native);
            }else {
                if(jsonp$1787.$native.instanceof(/*NULL PARAM!*/(typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'396:40-396:45','jqueryajaxsettings.ceylon'):String))){
                    return $$$cjl361.JSString(jsonp$1787.$native);
                }else {
                    if(jsonp$1787.$native){
                        return true;
                    }else {
                        return false;
                    }
                }
            }
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getJsonp=getJsonp;
    getJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:JSONPSettings},{t:$$$cjl361.JSString},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getJsonp']};};
    function setJsonp(jsonp$1790){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.jsonp=jsonp$1790.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setJsonp=setJsonp;
    setJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'jsonp',$mt:'prm',$t:{t:JSONPSettings},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setJsonp']};};
    function getJsonpCallback(){
        /*Begin dynamic block*/
        return (tmpvar$1791=$$jQueryAjaxSettingsAbs.$native.jsonpCallback,$$$cl1.isOfType(tmpvar$1791,{t:$$$cl1.Anything})?tmpvar$1791:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'417:10-417:29','jqueryajaxsettings.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getJsonpCallback=getJsonpCallback;
    getJsonpCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns String|String()?",24)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getJsonpCallback']};};
    function setJsonpCallback(callback$1792){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.jsonpCallback=callback$1792;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setJsonpCallback=setJsonpCallback;
    setJsonpCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.String}}}]},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setJsonpCallback']};};
    function getMimeType(){
        /*Begin dynamic block*/
        if((tmpvar$1793=$$jQueryAjaxSettingsAbs.$native.mimeType,tmpvar$1794=null,(tmpvar$1793.equals&&!tmpvar$1793.equals(tmpvar$1794))||tmpvar$1793!==tmpvar$1794)){
            return $$$cjl361.JSString($$jQueryAjaxSettingsAbs.$native.mimeType);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getMimeType=getMimeType;
    getMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getMimeType']};};
    function setMimeType(mimeType$1795){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.mimeType=mimeType$1795.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setMimeType=setMimeType;
    setMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'mimeType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setMimeType']};};
    function getPassword(){
        /*Begin dynamic block*/
        if((tmpvar$1796=$$jQueryAjaxSettingsAbs.$native.password,tmpvar$1797=null,(tmpvar$1796.equals&&!tmpvar$1796.equals(tmpvar$1797))||tmpvar$1796!==tmpvar$1797)){
            return $$$cjl361.JSString($$jQueryAjaxSettingsAbs.$native.password);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getPassword=getPassword;
    getPassword.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getPassword']};};
    function setPassword(password$1798){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.password=password$1798.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setPassword=setPassword;
    setPassword.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'password',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setPassword']};};
    function getProcessData(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.password){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getProcessData=getProcessData;
    getProcessData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getProcessData']};};
    function setProcessData(processData$1799){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.processData=processData$1799;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setProcessData=setProcessData;
    setProcessData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'processData',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setProcessData']};};
    function getScriptCharset(){
        /*Begin dynamic block*/
        if((tmpvar$1800=$$jQueryAjaxSettingsAbs.$native.scriptCharset,tmpvar$1801=null,(tmpvar$1800.equals&&!tmpvar$1800.equals(tmpvar$1801))||tmpvar$1800!==tmpvar$1801)){
            return $$$cjl361.JSString($$jQueryAjaxSettingsAbs.$native.scriptCharset);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getScriptCharset=getScriptCharset;
    getScriptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getScriptCharset']};};
    function setScriptCharset(scriptCharset$1802){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.scriptCharset=scriptCharset$1802.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setScriptCharset=setScriptCharset;
    setScriptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'scriptCharset',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setScriptCharset']};};
    function getStatusCode(){
        /*Begin dynamic block*/
        return (tmpvar$1803=(typeof statusNative==='undefined'||statusNative===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: statusNative")),'494:10-494:21','jqueryajaxsettings.ceylon'):statusNative),$$$cl1.isOfType(tmpvar$1803,{t:$$$cl1.Anything})?tmpvar$1803:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'494:10-494:21','jqueryajaxsettings.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getStatusCode=getStatusCode;
    getStatusCode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Object: JSNumber -> Anything(JQXHR, String?, String?)|Anything(JQXHR, String?, String?)",95)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getStatusCode']};};
    function setStatusCode(statusCodes$1804){
        if(statusCodes$1804===undefined){statusCodes$1804=$$$cl1.getEmpty();}
        var statusNative$1805=$$$cjl361.createJSObject();
        var it$1806 = statusCodes$1804.iterator();
        var item$1807;while ((item$1807=it$1806.next())!==$$$cl1.getFinished()){
            var key$1808=item$1807.key;
            var val$1809=item$1807.item;
            /*Begin dynamic block*/
            $$$cjl361.objectDefineProperty(statusNative$1805,key$1808.string,$$$cjl361.DataDescriptor(true,false,true,true,$$$cl1.$JsCallable(val$1809,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}})));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.statusNative=statusNative$1805.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setStatusCode=setStatusCode;
    setStatusCode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'statusCodes',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSNumber},Item:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}]}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setStatusCode']};};
    function getSuccess(){
        /*Begin dynamic block*/
        if((tmpvar$1810=$$jQueryAjaxSettingsAbs.$native.success,tmpvar$1811=null,(tmpvar$1810.equals&&!tmpvar$1810.equals(tmpvar$1811))||tmpvar$1810!==tmpvar$1811)){
            return $$$cjl361.JSArray($$jQueryAjaxSettingsAbs.$native.success);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getSuccess=getSuccess;
    getSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Anything(Anything, String, JQXHR)[]",43)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getSuccess']};};
    function setSuccess(success$1812){
        if(success$1812===undefined){success$1812=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.success=success$1812;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setSuccess=setSuccess;
    setSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'success',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:JQXHR}]}}},First:{t:$$$cl1.Anything},Element:{ t:'u', l:[{t:$$$cl1.Anything},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setSuccess']};};
    function getTimeout(){
        /*Begin dynamic block*/
        if((tmpvar$1813=$$jQueryAjaxSettingsAbs.$native.timeout,tmpvar$1814=null,(tmpvar$1813.equals&&!tmpvar$1813.equals(tmpvar$1814))||tmpvar$1813!==tmpvar$1814)){
            return $$$cjl361.JSNumber($$jQueryAjaxSettingsAbs.$native.timeout);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getTimeout=getTimeout;
    getTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSNumber}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getTimeout']};};
    function setTimeout(timeout$1815){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.timeout=timeout$1815;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setTimeout=setTimeout;
    setTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'timeout',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setTimeout']};};
    function getTraditional(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.traditional){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getTraditional=getTraditional;
    getTraditional.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getTraditional']};};
    function setTraditional(traditional$1816){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.traditional=traditional$1816;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setTraditional=setTraditional;
    setTraditional.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'traditional',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setTraditional']};};
    function getType(){
        /*Begin dynamic block*/
        if((tmpvar$1817=$$jQueryAjaxSettingsAbs.$native.type,tmpvar$1818=null,(tmpvar$1817.equals&&!tmpvar$1817.equals(tmpvar$1818))||tmpvar$1817!==tmpvar$1818)){
            return $$$cjl361.JSString($$jQueryAjaxSettingsAbs.$native.type);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getType=getType;
    getType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getType']};};
    function setType(type$1819){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.type=type$1819.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setType=setType;
    setType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setType']};};
    function getUrl(){
        /*Begin dynamic block*/
        if((tmpvar$1820=$$jQueryAjaxSettingsAbs.$native.url,tmpvar$1821=null,(tmpvar$1820.equals&&!tmpvar$1820.equals(tmpvar$1821))||tmpvar$1820!==tmpvar$1821)){
            return $$$cjl361.JSString($$jQueryAjaxSettingsAbs.$native.url);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getUrl=getUrl;
    getUrl.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getUrl']};};
    function setUrl(url$1822){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.url=url$1822.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setUrl=setUrl;
    setUrl.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setUrl']};};
    function getUsername(){
        /*Begin dynamic block*/
        if((tmpvar$1823=$$jQueryAjaxSettingsAbs.$native.username,tmpvar$1824=null,(tmpvar$1823.equals&&!tmpvar$1823.equals(tmpvar$1824))||tmpvar$1823!==tmpvar$1824)){
            return $$$cjl361.JSString($$jQueryAjaxSettingsAbs.$native.username);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getUsername=getUsername;
    getUsername.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getUsername']};};
    function setUsername(username$1825){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.username=username$1825.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setUsername=setUsername;
    setUsername.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'username',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setUsername']};};
    function getXhr(){
        /*Begin dynamic block*/
        return (tmpvar$1826=$$jQueryAjaxSettingsAbs.$native.xhr,$$$cl1.isOfType(tmpvar$1826,{t:$$$cl1.Anything})?tmpvar$1826:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'610:10-610:19','jqueryajaxsettings.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getXhr=getXhr;
    getXhr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Anything()?",19)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getXhr']};};
    function setXhr(xhr$1827){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.xhr=$$$cl1.$JsCallable(xhr$1827/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setXhr=setXhr;
    setXhr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'xhr',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setXhr']};};
    function getXhrFields(){
        /*Begin dynamic block*/
        return $$$cl1.Comprehension(function(){
            var it$1828=$$jQueryAjaxSettingsAbs.$native.xhrFields.iterator();
            var key$1829,val$1830;
            var next$val$1830=function(){
                var entry$1831;
                if((entry$1831=it$1828.next())!==$$$cl1.getFinished()){
                    key$1829=entry$1831.key;
                    val$1830=entry$1831.item;
                    return entry$1831;
                }
                val$1830=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1830();
            return function(){
                if(val$1830!==undefined){
                    var key$1829$1832=key$1829;
                    var val$1830$1833=val$1830;
                    var tmpvar$1834=$$$cl1.Entry($$$cjl361.JSString(key$1829$1832),$$$cjl361.JSObject(val$1830$1833),{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSObject}});
                    next$val$1830();
                    return tmpvar$1834;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSObject}}}}).sequence;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getXhrFields=getXhrFields;
    getXhrFields.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSObject}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getXhrFields']};};
    function setXhrFields(xhrFields$1835){
        if(xhrFields$1835===undefined){xhrFields$1835=$$$cl1.getEmpty();}
        var xhrNative$1836=$$$cjl361.createJSObject();
        var it$1837 = xhrFields$1835.iterator();
        var item$1838;while ((item$1838=it$1837.next())!==$$$cl1.getFinished()){
            var key$1839=item$1838.key;
            var val$1840=item$1838.item;
            /*Begin dynamic block*/
            $$$cjl361.objectDefineProperty(xhrNative$1836,key$1839,$$$cjl361.DataDescriptor(true,false,true,true,val$1840.$native));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.xhrFields=xhrNative$1836.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setXhrFields=setXhrFields;
    setXhrFields.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'xhrFields',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSObject}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setXhrFields']};};
    return $$jQueryAjaxSettingsAbs;
}
JQueryAjaxSettingsAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs']};};
exports.JQueryAjaxSettingsAbs=JQueryAjaxSettingsAbs;
function $init$JQueryAjaxSettingsAbs(){
    if (JQueryAjaxSettingsAbs.$$===undefined){
        $$$cl1.initTypeProto(JQueryAjaxSettingsAbs,'ceylon.js.jquery::JQueryAjaxSettingsAbs',$$$cjl361.JSObjectAbs);
    }
    return JQueryAjaxSettingsAbs;
}
exports.$init$JQueryAjaxSettingsAbs=$init$JQueryAjaxSettingsAbs;
$init$JQueryAjaxSettingsAbs();
function JQueryAjaxSettings(n$1841, $$jQueryAjaxSettings){
    $init$JQueryAjaxSettings();
    if ($$jQueryAjaxSettings===undefined)$$jQueryAjaxSettings=new JQueryAjaxSettings.$$;
    $$jQueryAjaxSettings.n$1841_=n$1841;
    JQueryAjaxSettingsAbs($$jQueryAjaxSettings);
    $$$cl1.defineAttr($$jQueryAjaxSettings,'n$1841',function(){return this.n$1841_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettings,d:['ceylon.js.jquery','JQueryAjaxSettings','$at','n']};});
    /*Begin dynamic block*/
    $$jQueryAjaxSettings.$native=n$1841;/*End dynamic block*/
    return $$jQueryAjaxSettings;
}
JQueryAjaxSettings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQueryAjaxSettingsAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettings']};};
exports.JQueryAjaxSettings=JQueryAjaxSettings;
function $init$JQueryAjaxSettings(){
    if (JQueryAjaxSettings.$$===undefined){
        $$$cl1.initTypeProto(JQueryAjaxSettings,'ceylon.js.jquery::JQueryAjaxSettings',$init$JQueryAjaxSettingsAbs());
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
    $$$cl1.defineAttr($$jSONPOptions,'jsonp',function(){return this.jsonp_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JSONPOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPOptions','$at','jsonp']};});
    $$$cl1.defineAttr($$jSONPOptions,'jsonpCallback',function(){return this.jsonpCallback_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:JSONPOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPOptions','$at','jsonpCallback']};});
    return $$jSONPOptions;
}
JSONPOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPOptions']};};
exports.JSONPOptions=JSONPOptions;
function $init$JSONPOptions(){
    if (JSONPOptions.$$===undefined){
        $$$cl1.initTypeProto(JSONPOptions,'ceylon.js.jquery::JSONPOptions',$$$cl1.Basic);
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
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'async',function(){return this.async_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','async']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'cache',function(){return this.cache_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','cache']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'contentType',function(){return this.contentType_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contentType']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'context',function(){return this.context_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSObject}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','context']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'crossDomain',function(){return this.crossDomain_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','crossDomain']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'data',function(){return this.data_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSObject}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','data']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'dataType',function(){return this.dataType_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:DataType}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataType']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'global',function(){return this.global_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','global']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'ifModified',function(){return this.ifModified_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','ifModified']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'isLocal',function(){return this.isLocal_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','isLocal']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'jsonp',function(){return this.jsonp_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:JSONPOptions},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','jsonp']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'jsonpCallback',function(){return this.jsonpCallback_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.String}}}]}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','jsonpCallback']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'mimeType',function(){return this.mimeType_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','mimeType']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'password',function(){return this.password_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','password']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'processData',function(){return this.processData_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','processData']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'scriptCharset',function(){return this.scriptCharset_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','scriptCharset']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'timeout',function(){return this.timeout_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','timeout']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'traditional',function(){return this.traditional_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','traditional']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'type',function(){return this.type_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','type']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'url',function(){return this.url_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','url']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'username',function(){return this.username_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','username']};});
    var beforeSend=null;
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'beforeSend',function(){return beforeSend;},function(beforeSend$1842){return beforeSend=beforeSend$1842;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Boolean}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','beforeSend']};});
    $$jQueryAjaxSettingsBuilder.$prop$getBeforeSend={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Boolean}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','beforeSend']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getBeforeSend.get=function(){return beforeSend};
    var dataFilter=null;
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'dataFilter',function(){return dataFilter;},function(dataFilter$1843){return dataFilter=dataFilter$1843;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataFilter']};});
    $$jQueryAjaxSettingsBuilder.$prop$getDataFilter={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataFilter']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getDataFilter.get=function(){return dataFilter};
    var xhr=null;
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'xhr',function(){return xhr;},function(xhr$1844){return xhr=xhr$1844;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhr']};});
    $$jQueryAjaxSettingsBuilder.$prop$getXhr={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhr']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getXhr.get=function(){return xhr};
    var complete=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'complete',function(){return complete;},function(complete$1845){return complete=complete$1845;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','complete']};});
    $$jQueryAjaxSettingsBuilder.$prop$getComplete={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','complete']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getComplete.get=function(){return complete};
    var error=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'error',function(){return error;},function(error$1846){return error=error$1846;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','error']};});
    $$jQueryAjaxSettingsBuilder.$prop$getError={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','error']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getError.get=function(){return error};
    var success=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'success',function(){return success;},function(success$1847){return success=success$1847;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','success']};});
    $$jQueryAjaxSettingsBuilder.$prop$getSuccess={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','success']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getSuccess.get=function(){return success};
    var accepts=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'accepts',function(){return accepts;},function(accepts$1848){return accepts=accepts$1848;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','accepts']};});
    $$jQueryAjaxSettingsBuilder.$prop$getAccepts={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','accepts']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getAccepts.get=function(){return accepts};
    var contents=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'contents',function(){return contents;},function(contents$1849){return contents=contents$1849;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl361.RegExp}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contents']};});
    $$jQueryAjaxSettingsBuilder.$prop$getContents={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl361.RegExp}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contents']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getContents.get=function(){return contents};
    var headers=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'headers',function(){return headers;},function(headers$1850){return headers=headers$1850;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','headers']};});
    $$jQueryAjaxSettingsBuilder.$prop$getHeaders={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','headers']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getHeaders.get=function(){return headers};
    var converters=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'converters',function(){return converters;},function(converters$1851){return converters=converters$1851;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl361.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','converters']};});
    $$jQueryAjaxSettingsBuilder.$prop$getConverters={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl361.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','converters']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getConverters.get=function(){return converters};
    var xhrFields=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'xhrFields',function(){return xhrFields;},function(xhrFields$1852){return xhrFields=xhrFields$1852;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl361.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhrFields']};});
    $$jQueryAjaxSettingsBuilder.$prop$getXhrFields={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl361.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhrFields']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getXhrFields.get=function(){return xhrFields};
    var statusCode=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'statusCode',function(){return statusCode;},function(statusCode$1853){return statusCode=statusCode$1853;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.Integer},Item:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','statusCode']};});
    $$jQueryAjaxSettingsBuilder.$prop$getStatusCode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.Integer},Item:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','statusCode']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getStatusCode.get=function(){return statusCode};
    function toNative(){
        var settings$1854;
        /*Begin dynamic block*/
        settings$1854=JQueryAjaxSettings((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'43:33-43:38','jqueryajaxsettingsbuilder.ceylon'):Object));/*End dynamic block*/
        var acceptsNative$1855;
        /*Begin dynamic block*/
        acceptsNative$1855=$$$cl1.Comprehension(function(){
            var it$1856=$$jQueryAjaxSettingsBuilder.accepts.iterator();
            var key$1857,val$1858;
            var next$val$1858=function(){
                var entry$1859;
                if((entry$1859=it$1856.next())!==$$$cl1.getFinished()){
                    key$1857=entry$1859.key;
                    val$1858=entry$1859.item;
                    return entry$1859;
                }
                val$1858=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1858();
            return function(){
                if(val$1858!==undefined){
                    var key$1857$1860=key$1857;
                    var val$1858$1861=val$1858;
                    var tmpvar$1862=$$$cl1.Entry((tmpvar$1863=$$$cjl361.createJSString(key$1857$1860),$$$cl1.isOfType(tmpvar$1863,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1863:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'47:74-47:92','jqueryajaxsettingsbuilder.ceylon')),(tmpvar$1864=$$$cjl361.createJSString(val$1858$1861),$$$cl1.isOfType(tmpvar$1864,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1864:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'47:95-47:113','jqueryajaxsettingsbuilder.ceylon')),{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSString}});
                    next$val$1858();
                    return tmpvar$1862;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSString}}}}).sequence;/*End dynamic block*/
        settings$1854.setAccepts(acceptsNative$1855);
        settings$1854.setAsync($$jQueryAjaxSettingsBuilder.async);
        var bS$1865;
        if((bS$1865=$$jQueryAjaxSettingsBuilder.beforeSend)!==null){
            settings$1854.setBeforeSend($$$cl1.$JsCallable(bS$1865,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Boolean}}));
        }
        var c$1866;
        if((c$1866=$$jQueryAjaxSettingsBuilder.cache)!==null){
            settings$1854.setCache(c$1866);
        }
        settings$1854.setComplete($$jQueryAjaxSettingsBuilder.complete);
        var contentsNative$1867;
        /*Begin dynamic block*/
        contentsNative$1867=$$$cl1.Comprehension(function(){
            var it$1868=$$jQueryAjaxSettingsBuilder.contents.iterator();
            var key$1869,val$1870;
            var next$val$1870=function(){
                var entry$1871;
                if((entry$1871=it$1868.next())!==$$$cl1.getFinished()){
                    key$1869=entry$1871.key;
                    val$1870=entry$1871.item;
                    return entry$1871;
                }
                val$1870=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1870();
            return function(){
                if(val$1870!==undefined){
                    var key$1869$1872=key$1869;
                    var val$1870$1873=val$1870;
                    var tmpvar$1874=$$$cl1.Entry((tmpvar$1875=$$$cjl361.createJSString(key$1869$1872),$$$cl1.isOfType(tmpvar$1875,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1875:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'60:74-60:92','jqueryajaxsettingsbuilder.ceylon')),val$1870$1873,{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.RegExp}});
                    next$val$1870();
                    return tmpvar$1874;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.RegExp}}}}).sequence;/*End dynamic block*/
        settings$1854.setContents(contentsNative$1867);
        settings$1854.setContentType($$jQueryAjaxSettingsBuilder.contentType);
        var c$1876;
        if((c$1876=$$jQueryAjaxSettingsBuilder.context)!==null){
            settings$1854.setContext(c$1876);
        }
        var convertersNative$1877;
        /*Begin dynamic block*/
        convertersNative$1877=$$$cl1.Comprehension(function(){
            var it$1878=$$jQueryAjaxSettingsBuilder.converters.iterator();
            var key$1879,val$1880;
            var next$val$1880=function(){
                var entry$1881;
                if((entry$1881=it$1878.next())!==$$$cl1.getFinished()){
                    key$1879=entry$1881.key;
                    val$1880=entry$1881.item;
                    return entry$1881;
                }
                val$1880=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1880();
            return function(){
                if(val$1880!==undefined){
                    var key$1879$1882=key$1879;
                    var val$1880$1883=val$1880;
                    var tmpvar$1884=$$$cl1.Entry((tmpvar$1885=$$$cjl361.createJSString(key$1879$1882),$$$cl1.isOfType(tmpvar$1885,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1885:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'69:80-69:98','jqueryajaxsettingsbuilder.ceylon')),val$1880$1883,{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSObject}});
                    next$val$1880();
                    return tmpvar$1884;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSObject}}}}).sequence;/*End dynamic block*/
        settings$1854.setConverters(convertersNative$1877);
        var cD$1886;
        if((cD$1886=$$jQueryAjaxSettingsBuilder.crossDomain)!==null){
            settings$1854.setCrossDomain(cD$1886);
        }
        settings$1854.setData($$jQueryAjaxSettingsBuilder.data);
        var dF$1887;
        if((dF$1887=$$jQueryAjaxSettingsBuilder.dataFilter)!==null){
            settings$1854.setDataFilter($$$cl1.$JsCallable(dF$1887,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}));
        }
        var dataTypeS$1888=$$$cl1.String("",0);
        function setDataTypeS$1888(dataTypeS$1889){return dataTypeS$1888=dataTypeS$1889;};
        var it$1890 = $$jQueryAjaxSettingsBuilder.dataType.iterator();
        var dT$1891;while ((dT$1891=it$1890.next())!==$$$cl1.getFinished()){
            (dataTypeS$1888=dataTypeS$1888.plus($$$cl1.String(" ",1).plus(dT$1891.string)));
        }
        settings$1854.setDataType(dataTypeS$1888);
        settings$1854.setError($$jQueryAjaxSettingsBuilder.error);
        settings$1854.setGlobal($$jQueryAjaxSettingsBuilder.global);
        var headersNative$1892;
        /*Begin dynamic block*/
        headersNative$1892=$$$cl1.Comprehension(function(){
            var it$1893=$$jQueryAjaxSettingsBuilder.headers.iterator();
            var key$1894,val$1895;
            var next$val$1895=function(){
                var entry$1896;
                if((entry$1896=it$1893.next())!==$$$cl1.getFinished()){
                    key$1894=entry$1896.key;
                    val$1895=entry$1896.item;
                    return entry$1896;
                }
                val$1895=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1895();
            return function(){
                if(val$1895!==undefined){
                    var key$1894$1897=key$1894;
                    var val$1895$1898=val$1895;
                    var tmpvar$1899=$$$cl1.Entry((tmpvar$1900=$$$cjl361.createJSString(key$1894$1897),$$$cl1.isOfType(tmpvar$1900,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1900:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'88:74-88:92','jqueryajaxsettingsbuilder.ceylon')),(tmpvar$1901=$$$cjl361.createJSString(val$1895$1898),$$$cl1.isOfType(tmpvar$1901,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1901:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'88:95-88:113','jqueryajaxsettingsbuilder.ceylon')),{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSString}});
                    next$val$1895();
                    return tmpvar$1899;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSString}}}}).sequence;/*End dynamic block*/
        settings$1854.setHeaders(headersNative$1892);
        settings$1854.setIfModified($$jQueryAjaxSettingsBuilder.ifModified);
        var iL$1902;
        if((iL$1902=$$jQueryAjaxSettingsBuilder.isLocal)!==null){
            settings$1854.setIsLocal(iL$1902);
        }
        var settingsNative$1903=createJSONPSettings($$jQueryAjaxSettingsBuilder.jsonp.jsonp,$$jQueryAjaxSettingsBuilder.jsonp.jsonpCallback);
        var sN$1904;
        if((sN$1904=settingsNative$1903)!==null){
            settings$1854.setJsonp(sN$1904);
        }
        var jC$1905;
        if((jC$1905=$$jQueryAjaxSettingsBuilder.jsonpCallback)!==null){
            settings$1854.setJsonpCallback(jC$1905);
        }
        var mT$1906;
        if((mT$1906=$$jQueryAjaxSettingsBuilder.mimeType)!==null){
            settings$1854.setMimeType(mT$1906);
        }
        var p$1907;
        if((p$1907=$$jQueryAjaxSettingsBuilder.password)!==null){
            settings$1854.setPassword(p$1907);
        }
        settings$1854.setProcessData($$jQueryAjaxSettingsBuilder.processData);
        var sC$1908;
        if((sC$1908=$$jQueryAjaxSettingsBuilder.scriptCharset)!==null){
            settings$1854.setScriptCharset(sC$1908);
        }
        var statusCodeNative$1909;
        /*Begin dynamic block*/
        statusCodeNative$1909=$$$cl1.Comprehension(function(){
            var it$1910=$$jQueryAjaxSettingsBuilder.statusCode.iterator();
            var key$1911,val$1912;
            var next$val$1912=function(){
                var entry$1913;
                if((entry$1913=it$1910.next())!==$$$cl1.getFinished()){
                    key$1911=entry$1913.key;
                    val$1912=entry$1913.item;
                    return entry$1913;
                }
                val$1912=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1912();
            return function(){
                if(val$1912!==undefined){
                    var key$1911$1914=key$1911;
                    var val$1912$1915=val$1912;
                    var tmpvar$1916=$$$cl1.Entry((tmpvar$1917=$$$cjl361.createJSString(key$1911$1914),$$$cl1.isOfType(tmpvar$1917,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1917:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'114:145-114:163','jqueryajaxsettingsbuilder.ceylon')),$$$cl1.$JsCallable(val$1912$1915,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}),{Key:{t:$$$cjl361.JSNumber},Item:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]}});
                    next$val$1912();
                    return tmpvar$1916;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSNumber},Item:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]}}}}).sequence;/*End dynamic block*/
        settings$1854.setStatusCode(statusCodeNative$1909);
        settings$1854.setSuccess($$jQueryAjaxSettingsBuilder.success);
        var t$1918;
        if((t$1918=$$jQueryAjaxSettingsBuilder.timeout)!==null){
            settings$1854.setTimeout(t$1918);
        }
        settings$1854.setTraditional($$jQueryAjaxSettingsBuilder.traditional);
        settings$1854.setType($$jQueryAjaxSettingsBuilder.type);
        settings$1854.setTraditional($$jQueryAjaxSettingsBuilder.traditional);
        settings$1854.setType($$jQueryAjaxSettingsBuilder.type);
        var u$1919;
        if((u$1919=$$jQueryAjaxSettingsBuilder.url)!==null){
            settings$1854.setUrl(u$1919);
        }
        var user$1920;
        if((user$1920=$$jQueryAjaxSettingsBuilder.username)!==null){
            settings$1854.setUsername(user$1920);
        }
        var x$1921;
        if((x$1921=$$jQueryAjaxSettingsBuilder.xhr)!==null){
            settings$1854.setXhr($$$cl1.$JsCallable(x$1921,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
        }
        var xhrFieldsNative$1922;
        /*Begin dynamic block*/
        xhrFieldsNative$1922=$$$cl1.Comprehension(function(){
            var it$1923=$$jQueryAjaxSettingsBuilder.xhrFields.iterator();
            var key$1924,val$1925;
            var next$val$1925=function(){
                var entry$1926;
                if((entry$1926=it$1923.next())!==$$$cl1.getFinished()){
                    key$1924=entry$1926.key;
                    val$1925=entry$1926.item;
                    return entry$1926;
                }
                val$1925=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1925();
            return function(){
                if(val$1925!==undefined){
                    var key$1924$1927=key$1924;
                    var val$1925$1928=val$1925;
                    var tmpvar$1929=$$$cl1.Entry((tmpvar$1930=$$$cjl361.createJSString(key$1924$1927),$$$cl1.isOfType(tmpvar$1930,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1930:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'136:78-136:96','jqueryajaxsettingsbuilder.ceylon')),(tmpvar$1931=$$$cjl361.createJSString(val$1925$1928),$$$cl1.isOfType(tmpvar$1931,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1931:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'136:99-136:117','jqueryajaxsettingsbuilder.ceylon')),{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSObject}});
                    next$val$1925();
                    return tmpvar$1929;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl361.JSString},Item:{t:$$$cjl361.JSObject}}}}).sequence;/*End dynamic block*/
        settings$1854.setXhrFields(xhrFieldsNative$1922);
        return settings$1854;
    }
    $$jQueryAjaxSettingsBuilder.toNative=toNative;
    toNative.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQueryAjaxSettings},$ps:[],$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$m','toNative']};};
    return $$jQueryAjaxSettingsBuilder;
}
JQueryAjaxSettingsBuilder.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder']};};
exports.JQueryAjaxSettingsBuilder=JQueryAjaxSettingsBuilder;
function $init$JQueryAjaxSettingsBuilder(){
    if (JQueryAjaxSettingsBuilder.$$===undefined){
        $$$cl1.initTypeProto(JQueryAjaxSettingsBuilder,'ceylon.js.jquery::JQueryAjaxSettingsBuilder',$$$cl1.Basic);
    }
    return JQueryAjaxSettingsBuilder;
}
exports.$init$JQueryAjaxSettingsBuilder=$init$JQueryAjaxSettingsBuilder;
$init$JQueryAjaxSettingsBuilder();
function JQueryEventAbs($$jQueryEventAbs){
    $init$JQueryEventAbs();
    if ($$jQueryEventAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjd977.EventAbs($$jQueryEventAbs);
    function data(){
        /*Begin dynamic block*/
        return (tmpvar$1932=$$jQueryEventAbs.$native.data,$$$cl1.isOfType(tmpvar$1932,{t:$$$cl1.Anything})?tmpvar$1932:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'8:10-8:20','jqueryevent.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryEventAbs.data=data;
    data.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','data']};};
    function delegateTarget(){
        /*Begin dynamic block*/
        return $$$cjd977.Element($$jQueryEventAbs.$native.delegateTarget);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.delegateTarget=delegateTarget;
    delegateTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjd977.Element},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','delegateTarget']};};
    function isDefaultPrevented(){
        /*Begin dynamic block*/
        if($$jQueryEventAbs.$native.isDefaultPrevented()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryEventAbs.isDefaultPrevented=isDefaultPrevented;
    isDefaultPrevented.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','isDefaultPrevented']};};
    function isImmediatePropogationStopped(){
        /*Begin dynamic block*/
        if($$jQueryEventAbs.$native.isImmediatePropogationStopped()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryEventAbs.isImmediatePropogationStopped=isImmediatePropogationStopped;
    isImmediatePropogationStopped.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','isImmediatePropogationStopped']};};
    function isPropagationStopped(){
        /*Begin dynamic block*/
        if($$jQueryEventAbs.$native.isPropagationStopped()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryEventAbs.isPropagationStopped=isPropagationStopped;
    isPropagationStopped.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','isPropagationStopped']};};
    function namespace(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$jQueryEventAbs.$native.namespace);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.namespace=namespace;
    namespace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','namespace']};};
    function relatedTarget(){
        /*Begin dynamic block*/
        return $$$cjd977.Element($$jQueryEventAbs.$native.relatedTarget);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.relatedTarget=relatedTarget;
    relatedTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjd977.Element},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','relatedTarget']};};
    function result(){
        /*Begin dynamic block*/
        return (tmpvar$1933=$$jQueryEventAbs.$native.result,$$$cl1.isOfType(tmpvar$1933,{t:$$$cl1.Anything})?tmpvar$1933:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'62:10-62:22','jqueryevent.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryEventAbs.result=result;
    result.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','result']};};
    function pageX(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$jQueryEventAbs.$native.pageX);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.pageX=pageX;
    pageX.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','pageX']};};
    function pageY(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$jQueryEventAbs.$native.pageY);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.pageY=pageY;
    pageY.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','pageY']};};
    function metaKey(){
        /*Begin dynamic block*/
        if($$jQueryEventAbs.$native.metaKey){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryEventAbs.metaKey=metaKey;
    metaKey.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','metaKey']};};
    function which(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$jQueryEventAbs.$native.which);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.which=which;
    which.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','which']};};
    return $$jQueryEventAbs;
}
JQueryEventAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjd977.EventAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','JQueryEventAbs']};};
exports.JQueryEventAbs=JQueryEventAbs;
function $init$JQueryEventAbs(){
    if (JQueryEventAbs.$$===undefined){
        $$$cl1.initTypeProto(JQueryEventAbs,'ceylon.js.jquery::JQueryEventAbs',$$$cjd977.EventAbs);
    }
    return JQueryEventAbs;
}
exports.$init$JQueryEventAbs=$init$JQueryEventAbs;
$init$JQueryEventAbs();
function JQueryEvent(n$1934, $$jQueryEvent){
    $init$JQueryEvent();
    if ($$jQueryEvent===undefined)$$jQueryEvent=new JQueryEvent.$$;
    $$jQueryEvent.n$1934_=n$1934;
    JQueryEventAbs($$jQueryEvent);
    $$$cl1.defineAttr($$jQueryEvent,'n$1934',function(){return this.n$1934_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryEvent,d:['ceylon.js.jquery','JQueryEvent','$at','n']};});
    $$jQueryEvent.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryEvent,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','JQueryEvent','$at','native']};}};
    /*Begin dynamic block*/
    $$jQueryEvent.$native=n$1934;/*End dynamic block*/
    return $$jQueryEvent;
}
JQueryEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQueryEventAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEvent']};};
exports.JQueryEvent=JQueryEvent;
function $init$JQueryEvent(){
    if (JQueryEvent.$$===undefined){
        $$$cl1.initTypeProto(JQueryEvent,'ceylon.js.jquery::JQueryEvent',$init$JQueryEventAbs());
    }
    return JQueryEvent;
}
exports.$init$JQueryEvent=$init$JQueryEvent;
$init$JQueryEvent();
var $$$cjx1935=require('ceylon/js/xmlhttprequest/0.6.0/ceylon.js.xmlhttprequest-0.6.0');
$$$cl1.$addmod$($$$cjx1935,'ceylon.js.xmlhttprequest/0.6.0');
function JQXHRAbs($$jQXHRAbs){
    $init$JQXHRAbs();
    if ($$jQXHRAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$jQXHRAbs);
    function done(done$1936){
        /*Begin dynamic block*/
        return JQXHR($$jQXHRAbs.$native.done(/*NULL PARAM!*/done$1936));
        /*End dynamic block*/
    }
    $$jQXHRAbs.done=done;
    done.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'done',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','done']};};
    function fail(fail$1937){
        /*Begin dynamic block*/
        return JQXHR($$jQXHRAbs.$native.fail(/*NULL PARAM!*/fail$1937));
        /*End dynamic block*/
    }
    $$jQXHRAbs.fail=fail;
    fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'fail',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','fail']};};
    function always(always$1938){
        /*Begin dynamic block*/
        return JQXHR($$jQXHRAbs.$native.always(/*NULL PARAM!*/always$1938));
        /*End dynamic block*/
    }
    $$jQXHRAbs.always=always;
    always.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'always',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','always']};};
    function doThen(done$1939,fail$1940){
        /*Begin dynamic block*/
        return JQXHR($$jQXHRAbs.$native.then(/*NULL PARAM!*/done$1939/*NULL PARAM!*/,fail$1940));
        /*End dynamic block*/
    }
    $$jQXHRAbs.doThen=doThen;
    doThen.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'done',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'fail',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','doThen']};};
    function overrideMimeType(mime$1941){
        
        var case$1942=mime$1941;
        if ($$$cl1.isOfType(mime$1941,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$jQXHRAbs.$native.overrideMimeType(/*NULL PARAM!*/case$1942.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(mime$1941,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$jQXHRAbs.$native.overrideMimeType(/*NULL PARAM!*/case$1942.$native);
            /*End dynamic block*/
        }
    }
    $$jQXHRAbs.overrideMimeType=overrideMimeType;
    overrideMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'mime',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','overrideMimeType']};};
    function readyState(){
        /*Begin dynamic block*/
        var readyState$1943=$$jQXHRAbs.$native.readyState;
        $prop$getReadyState$1943={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQXHRAbs','$m','readyState','$at','readyState']};}};
        $prop$getReadyState$1943.get=function(){return readyState$1943};
        if((tmpvar$1944=readyState$1943,tmpvar$1945=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'52:21-52:34','jqxhr.ceylon'):XMLHttpRequest).UNSENT,(tmpvar$1944.equals&&tmpvar$1944.equals(tmpvar$1945))||tmpvar$1944===tmpvar$1945)){
            return $$$cjx1935.getReadyStateUnsent();
        }else {
            if((tmpvar$1946=readyState$1943,tmpvar$1947=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'54:28-54:41','jqxhr.ceylon'):XMLHttpRequest).OPENED,(tmpvar$1946.equals&&tmpvar$1946.equals(tmpvar$1947))||tmpvar$1946===tmpvar$1947)){
                return $$$cjx1935.getReadyStateOpened();
            }else {
                if((tmpvar$1948=readyState$1943,tmpvar$1949=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'56:28-56:41','jqxhr.ceylon'):XMLHttpRequest).HEADERS_RECEIVED,(tmpvar$1948.equals&&tmpvar$1948.equals(tmpvar$1949))||tmpvar$1948===tmpvar$1949)){
                    return $$$cjx1935.getReadyStateHeadersReceived();
                }else {
                    if((tmpvar$1950=readyState$1943,tmpvar$1951=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'58:28-58:41','jqxhr.ceylon'):XMLHttpRequest).LOADING,(tmpvar$1950.equals&&tmpvar$1950.equals(tmpvar$1951))||tmpvar$1950===tmpvar$1951)){
                        return $$$cjx1935.getReadyStateLoading();
                    }else {
                        return (tmpvar$1952=(typeof readyStateDone==='undefined'||readyStateDone===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: readyStateDone")),'61:11-61:24','jqxhr.ceylon'):readyStateDone),$$$cl1.isOfType(tmpvar$1952,{t:$$$cl1.Anything})?tmpvar$1952:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'61:11-61:24','jqxhr.ceylon'));
                    }
                }
            }
        }/*End dynamic block*/
    }
    $$jQXHRAbs.readyState=readyState;
    readyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjx1935.ReadyState},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','readyState']};};
    function status(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$jQXHRAbs.$native.status);
        /*End dynamic block*/
    }
    $$jQXHRAbs.status=status;
    status.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','status']};};
    function statusText(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$jQXHRAbs.$native.statusText);
        /*End dynamic block*/
    }
    $$jQXHRAbs.statusText=statusText;
    statusText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','statusText']};};
    function responseText(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$jQXHRAbs.$native.responseText);
        /*End dynamic block*/
    }
    $$jQXHRAbs.responseText=responseText;
    responseText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','responseText']};};
    function responseXML(){
        /*Begin dynamic block*/
        var responseXML$1953=$$jQXHRAbs.$native.responseXML;
        $prop$getResponseXML$1953={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQXHRAbs','$m','responseXML','$at','responseXML']};}};
        $prop$getResponseXML$1953.get=function(){return responseXML$1953};
        if((tmpvar$1954=responseXML$1953,tmpvar$1955=null,(tmpvar$1954.equals&&!tmpvar$1954.equals(tmpvar$1955))||tmpvar$1954!==tmpvar$1955)){
            return $$$cjd977.Document(responseXML$1953);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQXHRAbs.responseXML=responseXML;
    responseXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd977.Document}]},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','responseXML']};};
    function setRequestHeader(header$1956,val$1957){
        
        var case$1958=header$1956;
        if ($$$cl1.isOfType(header$1956,{t:$$$cl1.String})) {
            
            var case$1959=val$1957;
            if ($$$cl1.isOfType(val$1957,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$jQXHRAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1958.valueOf()/*NULL PARAM!*/,case$1959.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$1957,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                $$jQXHRAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1958.valueOf()/*NULL PARAM!*/,case$1959.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(header$1956,{t:$$$cjl361.JSString})) {
            
            var case$1960=val$1957;
            if ($$$cl1.isOfType(val$1957,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$jQXHRAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1958.$native/*NULL PARAM!*/,case$1960.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$1957,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                $$jQXHRAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1958.$native/*NULL PARAM!*/,case$1960.$native);
                /*End dynamic block*/
            }
        }
    }
    $$jQXHRAbs.setRequestHeader=setRequestHeader;
    setRequestHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'header',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','setRequestHeader']};};
    function getAllResponseHeaders(){
        /*Begin dynamic block*/
        var rheaders$1961=$$jQXHRAbs.$native.getAllResponseHeaders();
        $prop$getRheaders$1961={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQXHRAbs','$m','getAllResponseHeaders','$at','rheaders']};}};
        $prop$getRheaders$1961.get=function(){return rheaders$1961};
        if((tmpvar$1962=rheaders$1961,tmpvar$1963=null,(tmpvar$1962.equals&&!tmpvar$1962.equals(tmpvar$1963))||tmpvar$1962!==tmpvar$1963)){
            return $$$cjl361.JSString(rheaders$1961);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQXHRAbs.getAllResponseHeaders=getAllResponseHeaders;
    getAllResponseHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','getAllResponseHeaders']};};
    function getResponseHeader(header$1964){
        /*Begin dynamic block*/
        var rheader$1965;
        $prop$getRheader$1965={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQXHRAbs','$m','getResponseHeader','$at','rheader']};}};
        $prop$getRheader$1965.get=function(){return rheader$1965};
        
        var case$1966=header$1964;
        if ($$$cl1.isOfType(header$1964,{t:$$$cl1.String})) {
            rheader$1965=$$jQXHRAbs.$native.getResponseHeader(/*NULL PARAM!*/case$1966.valueOf());
        }else if ($$$cl1.isOfType(header$1964,{t:$$$cjl361.JSString})) {
            rheader$1965=$$jQXHRAbs.$native.getResponseHeader(/*NULL PARAM!*/case$1966.$native);
        }if((tmpvar$1967=rheader$1965,tmpvar$1968=null,(tmpvar$1967.equals&&!tmpvar$1967.equals(tmpvar$1968))||tmpvar$1967!==tmpvar$1968)){
            return $$$cjl361.JSString(rheader$1965);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQXHRAbs.getResponseHeader=getResponseHeader;
    getResponseHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[{$nm:'header',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','getResponseHeader']};};
    function abort(){
        /*Begin dynamic block*/
        $$jQXHRAbs.$native.abort();
        /*End dynamic block*/
    }
    $$jQXHRAbs.abort=abort;
    abort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','abort']};};
    function statusCode(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$jQXHRAbs.$native.statusCode());
        /*End dynamic block*/
    }
    $$jQXHRAbs.statusCode=statusCode;
    statusCode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','statusCode']};};
    return $$jQXHRAbs;
}
JQXHRAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','JQXHRAbs']};};
exports.JQXHRAbs=JQXHRAbs;
function $init$JQXHRAbs(){
    if (JQXHRAbs.$$===undefined){
        $$$cl1.initTypeProto(JQXHRAbs,'ceylon.js.jquery::JQXHRAbs',$$$cjl361.JSObjectAbs);
    }
    return JQXHRAbs;
}
exports.$init$JQXHRAbs=$init$JQXHRAbs;
$init$JQXHRAbs();
function JQXHR(n$1969, $$jQXHR){
    $init$JQXHR();
    if ($$jQXHR===undefined)$$jQXHR=new JQXHR.$$;
    $$jQXHR.n$1969_=n$1969;
    JQXHRAbs($$jQXHR);
    $$$cl1.defineAttr($$jQXHR,'n$1969',function(){return this.n$1969_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQXHR,d:['ceylon.js.jquery','JQXHR','$at','n']};});
    $$jQXHR.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQXHR,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','JQXHR','$at','native']};}};
    /*Begin dynamic block*/
    $$jQXHR.$native=n$1969;/*End dynamic block*/
    return $$jQXHR;
}
JQXHR.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQXHRAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHR']};};
exports.JQXHR=JQXHR;
function $init$JQXHR(){
    if (JQXHR.$$===undefined){
        $$$cl1.initTypeProto(JQXHR,'ceylon.js.jquery::JQXHR',$init$JQXHRAbs());
    }
    return JQXHR;
}
exports.$init$JQXHR=$init$JQXHR;
$init$JQXHR();
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("based on jQuery 1.10.X and 2.0.X",32))];};
exports.$pkg$ans$ceylon$js$jquery=function(){return[$$$cl1.shared()];};
function PromiseAbs($$promiseAbs){
    $init$PromiseAbs();
    if ($$promiseAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$promiseAbs);
    function always(alwaysCallbacks$1970){
        if(alwaysCallbacks$1970===undefined){alwaysCallbacks$1970=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Promise($$promiseAbs.$native.always(/*NULL PARAM!*/alwaysCallbacks$1970));
        /*End dynamic block*/
    }
    $$promiseAbs.always=always;
    always.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'alwaysCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','PromiseAbs','$m','always']};};
    function done(doneCallbacks$1971){
        if(doneCallbacks$1971===undefined){doneCallbacks$1971=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Promise($$promiseAbs.$native.done(/*NULL PARAM!*/doneCallbacks$1971));
        /*End dynamic block*/
    }
    $$promiseAbs.done=done;
    done.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'doneCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','PromiseAbs','$m','done']};};
    function fail(failCallbacks$1972){
        if(failCallbacks$1972===undefined){failCallbacks$1972=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Promise($$promiseAbs.$native.fail(/*NULL PARAM!*/failCallbacks$1972));
        /*End dynamic block*/
    }
    $$promiseAbs.fail=fail;
    fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'failCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','PromiseAbs','$m','fail']};};
    $$promiseAbs.thenFilter$defs$failFilter=function(doneFilter$1973,failFilter$1974,progressFilter$1975){return null;};
    $$promiseAbs.thenFilter$defs$progressFilter=function(doneFilter$1973,failFilter$1974,progressFilter$1975){return null;};
    function thenFilter(doneFilter$1973,failFilter$1974,progressFilter$1975){
        if(failFilter$1974===undefined){failFilter$1974=$$promiseAbs.thenFilter$defs$failFilter(doneFilter$1973,failFilter$1974,progressFilter$1975);}
        if(progressFilter$1975===undefined){progressFilter$1975=$$promiseAbs.thenFilter$defs$progressFilter(doneFilter$1973,failFilter$1974,progressFilter$1975);}
        /*Begin dynamic block*/
        return Promise($$promiseAbs.$native.then(/*NULL PARAM!*/$$$cl1.$JsCallable(doneFilter$1973,[],{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,failFilter$1974/*NULL PARAM!*/,progressFilter$1975));
        /*End dynamic block*/
    }
    $$promiseAbs.thenFilter=thenFilter;
    thenFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'doneFilter',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'failFilter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}},{$nm:'progressFilter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','PromiseAbs','$m','thenFilter']};};
    return $$promiseAbs;
}
PromiseAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','PromiseAbs']};};
exports.PromiseAbs=PromiseAbs;
function $init$PromiseAbs(){
    if (PromiseAbs.$$===undefined){
        $$$cl1.initTypeProto(PromiseAbs,'ceylon.js.jquery::PromiseAbs',$$$cjl361.JSObjectAbs);
    }
    return PromiseAbs;
}
exports.$init$PromiseAbs=$init$PromiseAbs;
$init$PromiseAbs();
function Promise(n$1976, $$promise){
    $init$Promise();
    if ($$promise===undefined)$$promise=new Promise.$$;
    $$promise.n$1976_=n$1976;
    PromiseAbs($$promise);
    $$$cl1.defineAttr($$promise,'n$1976',function(){return this.n$1976_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Promise,d:['ceylon.js.jquery','Promise','$at','n']};});
    $$promise.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Promise,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','Promise','$at','native']};}};
    /*Begin dynamic block*/
    $$promise.$native=n$1976;/*End dynamic block*/
    return $$promise;
}
Promise.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:PromiseAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','Promise']};};
exports.Promise=Promise;
function $init$Promise(){
    if (Promise.$$===undefined){
        $$$cl1.initTypeProto(Promise,'ceylon.js.jquery::Promise',$init$PromiseAbs());
    }
    return Promise;
}
exports.$init$Promise=$init$Promise;
$init$Promise();
function TweenAbs($$tweenAbs){
    $init$TweenAbs();
    if ($$tweenAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$tweenAbs);
    function getInterval(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$tweenAbs.$native.interval);
        /*End dynamic block*/
    }
    $$tweenAbs.getInterval=getInterval;
    getInterval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:TweenAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','getInterval']};};
    function test(test$1977){
        if(test$1977===undefined){test$1977=$$$cl1.getEmpty();}
    }
    $$tweenAbs.test=test;
    test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:TweenAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','test']};};
    function setInterval(interval$1978){
        /*Begin dynamic block*/
        $$tweenAbs.$native.interval=interval$1978;
        /*End dynamic block*/
    }
    $$tweenAbs.setInterval=setInterval;
    setInterval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'interval',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TweenAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','setInterval']};};
    function getOff(){
        /*Begin dynamic block*/
        if($$tweenAbs.$native.off){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$tweenAbs.getOff=getOff;
    getOff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:TweenAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','getOff']};};
    function setOff(off$1979){
        /*Begin dynamic block*/
        $$tweenAbs.$native.interval=(typeof interval==='undefined'||interval===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: interval")),'33:21-33:28','tween.ceylon'):interval);
        /*End dynamic block*/
    }
    $$tweenAbs.setOff=setOff;
    setOff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'off',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:TweenAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','setOff']};};
    return $$tweenAbs;
}
TweenAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','TweenAbs']};};
exports.TweenAbs=TweenAbs;
function $init$TweenAbs(){
    if (TweenAbs.$$===undefined){
        $$$cl1.initTypeProto(TweenAbs,'ceylon.js.jquery::TweenAbs',$$$cjl361.JSObjectAbs);
    }
    return TweenAbs;
}
exports.$init$TweenAbs=$init$TweenAbs;
$init$TweenAbs();
function Tween(n$1980, $$tween){
    $init$Tween();
    if ($$tween===undefined)$$tween=new Tween.$$;
    $$tween.n$1980_=n$1980;
    TweenAbs($$tween);
    $$$cl1.defineAttr($$tween,'n$1980',function(){return this.n$1980_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Tween,d:['ceylon.js.jquery','Tween','$at','n']};});
    $$tween.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Tween,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','Tween','$at','native']};}};
    /*Begin dynamic block*/
    $$tween.$native=n$1980;/*End dynamic block*/
    return $$tween;
}
Tween.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TweenAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','Tween']};};
exports.Tween=Tween;
function $init$Tween(){
    if (Tween.$$===undefined){
        $$$cl1.initTypeProto(Tween,'ceylon.js.jquery::Tween',$init$TweenAbs());
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
