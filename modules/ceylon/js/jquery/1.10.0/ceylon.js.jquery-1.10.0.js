(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1","ceylon.js.language\/1.8.5","ceylon.js.dom\/4.0.0","ceylon.js.json\/1.0.0","ceylon.js.xmlhttprequest\/0.6.0"],"$mod-name":"ceylon.js.jquery","$mod-version":"1.10.0","ceylon.js.jquery":{"TweenAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getOff":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getOff"},"setOff":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"off"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setOff"},"test":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"test"},"getInterval":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getInterval"},"setInterval":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"interval"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setInterval"}},"$nm":"TweenAbs"},"DataType":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.jquery","$nm":"dataTypeXML"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeHtml"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeScript"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeJson"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeJsonp"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeText"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DataType"},"JQueryEventAbs":{"abstract":"1","super":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"EventAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"metaKey":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"metaKey"},"result":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"result"},"which":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"which"},"isPropagationStopped":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isPropagationStopped"},"isDefaultPrevented":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isDefaultPrevented"},"delegateTarget":{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[]},"$nm":"delegateTarget"},"data":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"data"},"relatedTarget":{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[]},"$nm":"relatedTarget"},"isImmediatePropogationStopped":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isImmediatePropogationStopped"},"pageX":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"pageX"},"pageY":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"pageY"},"namespace":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"namespace"}},"$nm":"JQueryEventAbs"},"visibleSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"visibleSelector"},"dataTypeXML":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeXML"},"targetSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"targetSelector"},"enabledSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"enabledSelector"},"fileSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"fileSelector"},"jQueryType":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryType"},"onlyChildSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"onlyChildSelector"},"jQueryError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryError"},"jQueryAjaxPrefilter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"dataTypes"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjaxPrefilter"},"jQueryHasData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryHasData"},"passwordSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"passwordSelector"},"jQueryParseHTML":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$def":"1","$nm":"context"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"keepScripts"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParseHTML"},"lastChildSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"lastChildSelector"},"jQueryUnique":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"arr"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryUnique"},"Callbacks":{"super":{"$pk":"ceylon.js.jquery","$nm":"CallbacksAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Callbacks"},"JQXHR":{"super":{"$pk":"ceylon.js.jquery","$nm":"JQXHRAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQXHR"},"lastSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"lastSelector"},"jQueryInArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"array"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryInArray"},"lastOfTypeSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"lastOfTypeSelector"},"CallbacksAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"fired":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"fired"},"remove":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"callbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"remove"},"fireWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"}]},"$mt":"prm","$def":"1","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fireWith"},"lock":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$mt":"mthd","$an":{"shared":[]},"$nm":"lock"},"empty":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$mt":"mthd","$an":{"shared":[]},"$nm":"empty"},"disable":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$mt":"mthd","$an":{"shared":[]},"$nm":"disable"},"locked":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"locked"},"add":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"callbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"add"},"has":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"has"},"fire":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fire"},"disabled":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"disabled"}},"$nm":"CallbacksAbs"},"jQueryExtendDeep":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"deep"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"target"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"objects"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryExtendDeep"},"jQueryMerge":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"first"},{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"second"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryMerge"},"jQueryAjax":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"url"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettingsBuilder"}]},"$mt":"prm","$def":"1","$nm":"settings"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjax"},"submitSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"submitSelector"},"jQuerySetData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQuerySetData"},"dataTypeHtml":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeHtml"},"AnimateOptions":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"queue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"specialEasing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.jquery","$nm":"Tween"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Tween"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Tween"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"step"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"progress"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"complete"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"done"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"fail"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"always"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toNative":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toNative"}},"$at":{"progress":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"progress"},"queue":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]}]},"$mt":"attr","$an":{"shared":[]},"$nm":"queue"},"duration":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"attr","$an":{"shared":[]},"$nm":"duration"},"easing":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"easing"},"fail":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"fail"},"specialEasing":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"specialEasing"},"complete":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"complete"},"done":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"done"},"always":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"always"},"step":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.jquery","$nm":"Tween"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Tween"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Tween"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"step"}},"$nm":"AnimateOptions"},"JSONPSettings":{"super":{"$pk":"ceylon.js.jquery","$nm":"JSONPSettingsAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSONPSettings"},"JQueryAjaxSettings":{"super":{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettingsAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQueryAjaxSettings"},"JQuery":{"super":{"$pk":"ceylon.js.jquery","$nm":"JQueryAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQuery"},"jqThis":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jqThis"},"focusSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"focusSelector"},"emptySelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"emptySelector"},"createJSONPSettings":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.jquery","$nm":"JSONPSettings"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"jsonp"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"jsonpCallback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSONPSettings"},"inputSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"inputSelector"},"jQueryIsArray":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsArray"},"jQuerySetQueue":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"callbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQuerySetQueue"},"jQueryIsNumeric":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsNumeric"},"jQueryGrep":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"array"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"invert"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGrep"},"JQueryAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"nextAll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"nextAll"},"setPropEntries":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPropEntries"},"animate":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"properties"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"animate"},"appendHTML":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendHTML"},"ready":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ready"},"undelegateEvents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"undelegateEvents"},"hide":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hide"},"prevAll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prevAll"},"wrapInnerCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapInnerCallback"},"setOffsetCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Coordinates"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.jquery","$nm":"Coordinates"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Coordinates"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Coordinates"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setOffsetCallback"},"showOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"showOptions"},"clone":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"withDataAndEvents"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"deepWithDataAndEvents"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"clone"},"removeProp":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"propertyName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeProp"},"prependHTML":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prependHTML"},"contents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"contents"},"serialize":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"serialize"},"parent":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parent"},"outerWidth":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"includeMargin"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"outerWidth"},"prev":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prev"},"wrapInner":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"wrappingElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapInner"},"removeAttr":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeAttr"},"setOffset":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.jquery","$nm":"Coordinates"}]},"$mt":"prm","$def":"1","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setOffset"},"addBack":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addBack"},"mouseenter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseenter"},"load":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"data"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"load"},"each":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"each"},"replaceAll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceAll"},"toggleClassName":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"swit"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleClassName"},"getVal":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getVal"},"setCss":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"property"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Number"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCss"},"before":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"before"},"next":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"next"},"fadeOut":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeOut"},"setCssJson":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"property"},{"$t":{"$md":"ceylon.js.json","$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCssJson"},"ajaxError":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxError"},"isSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isSelector"},"getAttr":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getAttr"},"mousemove":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mousemove"},"prependTo":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prependTo"},"map":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"},{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"map"},"getHtml":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getHtml"},"outerHeight":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"includeMargin"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"outerHeight"},"fadeTo":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"duration"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"prm","$nm":"opacity"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeTo"},"ajaxStart":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxStart"},"stopName":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"queue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"clearQueue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"jumpToEnd"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"stopName"},"closestjQuery":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"prm","$nm":"jq"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"closestjQuery"},"slice":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"start"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slice"},"ajaxComplete":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxComplete"},"eq":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"eq"},"focusout":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"focusout"},"keyup":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"keyup"},"change":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"change"},"setVal":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setVal"},"has":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"has"},"after":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"after"},"removeClassCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeClassCallback"},"slideUp":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideUp"},"fadeIn":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeIn"},"closest":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"closest"},"setValCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setValCallback"},"getProp":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getProp"},"append":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"append"},"index":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"index"},"mousedown":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mousedown"},"get":{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"get"},"submit":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"submit"},"select":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"select"},"keydown":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"keydown"},"toggleOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleOptions"},"ajaxSend":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxSend"},"finish":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"queue"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"finish"},"dblclick":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dblclick"},"afterJQuery":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQuery"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"afterJQuery"},"pushStack":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"elements"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"name"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"arguments"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"pushStack"},"bindEvents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bindEvents"},"mouseup":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseup"},"setWidthCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setWidthCallback"},"wrapAll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"wrappingElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapAll"},"setQueue":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"newQueue"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setQueue"},"children":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"children"},"closestElement":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"closestElement"},"mouseleave":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseleave"},"dequeue":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dequeue"},"setScrollTop":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setScrollTop"},"getHeight":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getHeight"},"animateOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"properties"},{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"animateOptions"},"setCssCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"property"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"val"}]],"$mt":"prm","$pt":"f","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"setCssCallback"},"prepend":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prepend"},"promise":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"type"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$def":"1","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"promise"},"setAttr":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttr"},"siblings":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"siblings"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"siblings"},"removeClass":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeClass"},"off":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"events"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"off"},"bind":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"preventBubble"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bind"},"toggleShowOrHide":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"showOrHide"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleShowOrHide"},"addElements":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"prm","seq":"1","$nm":"elements","$min1":"1"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addElements"},"clearQueue":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"clearQueue"},"toggleClassCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"swit"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleClassCallback"},"setPropCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"propertyName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPropCallback"},"slideToggle":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideToggle"},"empty":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"empty"},"setAttrEntries":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttrEntries"},"setProp":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"propertyName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setProp"},"on":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"events"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"on"},"focus":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"focus"},"focusin":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"focusin"},"setDataEntries":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDataEntries"},"resizeTrigger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"resizeTrigger"},"setHtml":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"html"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHtml"},"hoverSingle":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handlerInOut"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hoverSingle"},"removeData":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"names"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeData"},"not":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"not"},"innerWidth":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"innerWidth"},"delegateEvents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"delegateEvents"},"delay":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"duration"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"delay"},"afterElements":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"afterElements"},"isCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isCallback"},"addClass":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addClass"},"position":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Coordinates"},"$mt":"mthd","$an":{"shared":[]},"$nm":"position"},"remove":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"remove"},"click":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"click"},"nextUntil":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"nextUntil"},"delegate":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"delegate"},"appendCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendCallback"},"setAttrCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttrCallback"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"slideUpOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideUpOptions"},"end":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"end"},"serializeArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[]},"$nm":"serializeArray"},"trigger":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQueryEvent"}]},"$mt":"prm","$nm":"event"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"extraParameters"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"trigger"},"toArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toArray"},"insertBefore":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertBefore"},"mouseout":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseout"},"slideToggleOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideToggleOptions"},"filterCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"filterCallback"},"innerHeight":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"innerHeight"},"ajaxStop":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxStop"},"setTextCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTextCallback"},"prevUntil":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prevUntil"},"mouseover":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseover"},"setHeightCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHeightCallback"},"slideDownOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideDownOptions"},"unwrap":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"unwrap"},"last":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"last"},"show":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"show"},"setText":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"textString"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setText"},"jquery":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jquery"},"toggleClass":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"swit"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleClass"},"resize":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"resize"},"fadeToggleOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeToggleOptions"},"getScrollLeft":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getScrollLeft"},"getWidth":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getWidth"},"fadeOutOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeOutOptions"},"ajaxSuccess":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxSuccess"},"getQueue":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns an array of functions"]},"$nm":"getQueue"},"replaceWithCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceWithCallback"},"wrap":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"wrappingElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrap"},"detach":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"detach"},"wrapCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapCallback"},"scroll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"scroll"},"unbind":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},{"$pk":"ceylon.js.jquery","$nm":"JQueryEvent"}]},"$mt":"prm","$nm":"eventType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"unbind"},"fadeToggle":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeToggle"},"getData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"keypress":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"keypress"},"setHeight":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHeight"},"bindCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"eventData"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bindCallback"},"replaceWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"newContent"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceWith"},"filter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"filter"},"undelegateCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"undelegateCallback"},"stop":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"clearQueue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"jumpToEnd"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"stop"},"beforeCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"beforeCallback"},"parents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parents"},"slideDown":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideDown"},"unbindCallaback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"eventType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"unbindCallaback"},"getCss":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"prm","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getCss"},"one":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"events"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"one"},"setScrollLeft":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setScrollLeft"},"blur":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"blur"},"add":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"append"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"add"},"getText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getText"},"toggle":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggle"},"parentsUntil":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parentsUntil"},"getScrollTop":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getScrollTop"},"die":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"die"},"setWidth":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"width"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setWidth"},"setHtmlCallback":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHtmlCallback"},"undelegate":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"namespace"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"undelegate"},"find":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"find"},"error":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"error"},"appendTo":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendTo"},"insertAfter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertAfter"},"hideOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hideOptions"},"hover":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handlerIn"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handlerOut"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hover"},"fadeInOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeInOptions"},"setData":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"},"hasClass":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasClass"},"addSelector":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addSelector"},"beforeHTML":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"beforeHTML"},"offsetParent":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"offsetParent"},"addClassCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"currentClass"}]],"$mt":"prm","$pt":"f","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"currentClass"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"addClassCallback"},"getOffset":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Coordinates"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getOffset"},"setQueueCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"next"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setQueueCallback"},"first":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"first"},"prependCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prependCallback"}},"$nm":"JQueryAbs"},"textSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"textSelector"},"jQueryProxyName":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSFunction"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"additionalArguments"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryProxyName"},"evenSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"evenSelector"},"jQueryPost":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"dataType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryPost"},"jQueryGetQueue":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns JSFunctions[]"]},"$nm":"jQueryGetQueue"},"jQueryEach":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"collection"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryEach"},"jQueryDeferred":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"beforeStart"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryDeferred"},"parentSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"parentSelector"},"JQueryAjaxSettingsAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getXhr":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Anything()?"]},"$nm":"getXhr"},"setCache":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"cache"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCache"},"setContext":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setContext"},"getContents":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"RegExp"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getContents"},"getJsonp":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JSONPSettings"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getJsonp"},"setDataFilter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"datafilter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDataFilter"},"getContext":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getContext"},"setIsLocal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"local"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setIsLocal"},"setContentType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"contentType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setContentType"},"getProcessData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getProcessData"},"setAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"async"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAsync"},"setError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"datafilter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setError"},"getComplete":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns array of Anything(JQXHR, String) or null"]},"$nm":"getComplete"},"getDataType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDataType"},"setHeaders":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"headers"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHeaders"},"setScriptCharset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"scriptCharset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setScriptCharset"},"setContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"RegExp"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"contents"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setContents"},"setCrossDomain":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"crossDomain"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCrossDomain"},"setType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"type"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setType"},"getAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAsync"},"setStatusCode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSNumber"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"statusCodes"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setStatusCode"},"getPassword":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getPassword"},"getIfModified":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getIfModified"},"setDataType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dataType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDataType"},"getJsonpCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns String|String()?"]},"$nm":"getJsonpCallback"},"setMimeType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"mimeType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMimeType"},"setXhrFields":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"xhrFields"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setXhrFields"},"getData":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"getBeforeSend":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Boolean(JQXHR, JQueryAjaxSettings)?"]},"$nm":"getBeforeSend"},"setBeforeSend":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"beforeSend"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setBeforeSend"},"getTraditional":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTraditional"},"getUsername":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUsername"},"getXhrFields":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getXhrFields"},"getStatusCode":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Object: JSNumber -> Anything(JQXHR, String?, String?)|Anything(JQXHR, String?, String?)"]},"$nm":"getStatusCode"},"getMimeType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMimeType"},"getContentType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getContentType"},"getDataFilter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Anything(String, String)?"]},"$nm":"getDataFilter"},"setUsername":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"username"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUsername"},"getSuccess":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns Anything(Anything, String, JQXHR)[]"]},"$nm":"getSuccess"},"getType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getType"},"getError":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns Anything(JQXHR, String?, String?)[]"]},"$nm":"getError"},"setUrl":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUrl"},"getHeaders":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getHeaders"},"setIfModified":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"modified"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setIfModified"},"getAccepts":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAccepts"},"setComplete":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setComplete"},"setPassword":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"password"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPassword"},"getCache":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getCache"},"setConverters":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"converters"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setConverters"},"setSuccess":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"success"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setSuccess"},"getCrossDomain":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getCrossDomain"},"getIsLocal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getIsLocal"},"setXhr":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"xhr"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setXhr"},"getConverters":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getConverters"},"setJsonpCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setJsonpCallback"},"setData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"},"getScriptCharset":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getScriptCharset"},"setGlobal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"global"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setGlobal"},"getUrl":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUrl"},"setTraditional":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"traditional"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTraditional"},"getTimeout":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTimeout"},"setAccepts":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"accepts"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAccepts"},"setTimeout":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"timeout"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTimeout"},"getGlobal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getGlobal"},"setJsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"JSONPSettings"},"$mt":"prm","$nm":"jsonp"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setJsonp"},"setProcessData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"processData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setProcessData"}},"$nm":"JQueryAjaxSettingsAbs"},"dataTypeJson":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeJson"},"rootSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"rootSelector"},"jQueryGetData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGetData"},"jQueryGetJSON":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGetJSON"},"JQueryEvent":{"super":{"$pk":"ceylon.js.jquery","$nm":"JQueryEventAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQueryEvent"},"Promise":{"super":{"$pk":"ceylon.js.jquery","$nm":"PromiseAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Promise"},"radioSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"radioSelector"},"jQueryIsPlainObject":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsPlainObject"},"disabledSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"disabledSelector"},"selectedSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"selectedSelector"},"jQueryWhen":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Deferred"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"deferreds"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryWhen"},"jq":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]}]},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jq"},"jQueryIsFunction":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsFunction"},"jQueryNoConflict":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"removeAll"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryNoConflict"},"JQueryAjaxSettingsBuilder":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"async"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"cache"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"contentType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"context"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"crossDomain"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"data"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"DataType"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"dataType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"global"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"ifModified"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"isLocal"},{"$t":{"$pk":"ceylon.js.jquery","$nm":"JSONPOptions"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonp"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonpCallback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"mimeType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"password"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"processData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"scriptCharset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"timeout"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"traditional"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"type"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"url"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"username"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toNative":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toNative"}},"$at":{"headers":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"headers"},"data":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"data"},"xhrFields":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"xhrFields"},"contentType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"contentType"},"type":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"type"},"password":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"password"},"statusCode":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"statusCode"},"username":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"username"},"complete":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"complete"},"dataFilter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"dataFilter"},"processData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"processData"},"crossDomain":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"crossDomain"},"accepts":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"accepts"},"mimeType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"mimeType"},"jsonpCallback":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]}]},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonpCallback"},"error":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"error"},"cache":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"cache"},"contents":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"RegExp"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"contents"},"global":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"global"},"scriptCharset":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"scriptCharset"},"traditional":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"traditional"},"converters":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"converters"},"async":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"async"},"url":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"url"},"ifModified":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"ifModified"},"dataType":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"DataType"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[]},"$nm":"dataType"},"jsonp":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JSONPOptions"},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonp"},"context":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"context"},"beforeSend":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"beforeSend"},"xhr":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"xhr"},"isLocal":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"isLocal"},"success":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"success"},"timeout":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"timeout"}},"$nm":"JQueryAjaxSettingsBuilder"},"DeferredAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"progress":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"progressCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"progress"},"thenFilter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"doneFilter"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"failFilter"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"progressFilter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"thenFilter"},"resolve":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"resolve"},"rejectWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"rejectWith"},"reject":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"reject"},"notifyWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"notifyWith"},"fail":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"failCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fail"},"resolveWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"resolveWith"},"notify":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"notify"},"done":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"doneCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"done"},"state":{"$t":{"$pk":"ceylon.js.jquery","$nm":"DeferredState"},"$mt":"mthd","$an":{"shared":[]},"$nm":"state"},"promise":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"}]},"$mt":"prm","$def":"1","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"promise"},"always":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"alwaysCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"always"}},"$nm":"DeferredAbs"},"animatedSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"animatedSelector"},"Coordinates":{"super":{"$pk":"ceylon.js.jquery","$nm":"CoordinatesAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Coordinates"},"$pkg-shared":"1","jQueryFxOff":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryFxOff"},"jQueryDequeue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryDequeue"},"jQueryProxy":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSFunction"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"func"},{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"additionalArguments"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryProxy"},"checkedSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"checkedSelector"},"firstOfTypeSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"firstOfTypeSelector"},"jQueryTrim":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"prm","$nm":"str"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryTrim"},"resetSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"resetSelector"},"jQueryNow":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryNow"},"oddSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"oddSelector"},"Deferred":{"super":{"$pk":"ceylon.js.jquery","$nm":"DeferredAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Deferred"},"hiddenSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"hiddenSelector"},"jQueryGlobalEval":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"code"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGlobalEval"},"jQueryHoldReady":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"hold"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryHoldReady"},"JSONPSettingsAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setIsJsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"jsonp"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setIsJsonp"},"getCallback":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getCallback"},"getIsJsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getIsJsonp"},"setCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCallback"}},"$nm":"JSONPSettingsAbs"},"jQueryExtend":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"target"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"objects"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryExtend"},"jQueryMapObject":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryMapObject"},"jQueryCallbacks":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"flags"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryCallbacks"},"JQXHRAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getAllResponseHeaders":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAllResponseHeaders"},"status":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"status"},"responseXML":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Document"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"responseXML"},"done":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"done"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"done"},"doThen":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"done"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"fail"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"doThen"},"readyState":{"$t":{"$md":"ceylon.js.xmlhttprequest","$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"mthd","$an":{"shared":[]},"$nm":"readyState"},"statusText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"statusText"},"responseText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"responseText"},"overrideMimeType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"mime"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"overrideMimeType"},"always":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"always"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"always"},"statusCode":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"statusCode"},"fail":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"fail"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fail"},"getResponseHeader":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getResponseHeader"},"setRequestHeader":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setRequestHeader"},"abort":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"abort"}},"$nm":"JQXHRAbs"},"jQueryAjaxSetup":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettingsBuilder"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjaxSetup"},"createCoordinates":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Coordinates"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]}]},"$mt":"prm","$nm":"top"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]}]},"$mt":"prm","$nm":"left"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createCoordinates"},"buttonSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"buttonSelector"},"jQueryContains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"container"},{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"contained"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryContains"},"jQueryMapArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"array"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryMapArray"},"jQueryNoop":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryNoop"},"allSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"allSelector"},"jQueryAjaxTransport":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dataType"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjaxTransport"},"JSONPOptions":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonp"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonpCallback"}],"$mt":"cls","$an":{"shared":[]},"$at":{"jsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonp"},"jsonpCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonpCallback"}},"$nm":"JSONPOptions"},"deferredStateResolved":{"super":{"$pk":"ceylon.js.jquery","$nm":"DeferredState"},"$mt":"obj","$an":{"shared":[]},"$nm":"deferredStateResolved"},"deferredStatePending":{"super":{"$pk":"ceylon.js.jquery","$nm":"DeferredState"},"$mt":"obj","$an":{"shared":[]},"$nm":"deferredStatePending"},"jQueryFxInterval":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryFxInterval"},"deferredStateRejected":{"super":{"$pk":"ceylon.js.jquery","$nm":"DeferredState"},"$mt":"obj","$an":{"shared":[]},"$nm":"deferredStateRejected"},"checkboxSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"checkboxSelector"},"jQueryIsXMLDoc":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsXMLDoc"},"jQueryParam":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$nm":"obj"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"traditional"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParam"},"jQueryIsWindow":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsWindow"},"dataTypeText":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeText"},"firstSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"firstSelector"},"jQueryParseJSON":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"json"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParseJSON"},"jQueryGet":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"dataType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGet"},"jQueryCssHooks":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryCssHooks"},"jQueryRemoveData":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryRemoveData"},"jQueryParseXML":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParseXML"},"jQueryFnExtend":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryFnExtend"},"CoordinatesAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setTop":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$mt":"prm","$nm":"top"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTop"},"getLeft":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getLeft"},"setLeft":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$mt":"prm","$nm":"left"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setLeft"},"getTop":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTop"}},"$nm":"CoordinatesAbs"},"onlyOfTypeSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"onlyOfTypeSelector"},"DeferredState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.jquery","$nm":"deferredStatePending"},{"$pk":"ceylon.js.jquery","$nm":"deferredStateResolved"},{"$pk":"ceylon.js.jquery","$nm":"deferredStateRejected"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DeferredState"},"dataTypeJsonp":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeJsonp"},"PromiseAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"thenFilter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"doneFilter"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"failFilter"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"progressFilter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"thenFilter"},"fail":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"failCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fail"},"done":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"doneCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"done"},"always":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"alwaysCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"always"}},"$nm":"PromiseAbs"},"Tween":{"super":{"$pk":"ceylon.js.jquery","$nm":"TweenAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Tween"},"imageSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"imageSelector"},"jqElems":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"prm","seq":"1","$nm":"elems","$min1":"1"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jqElems"},"firstChildSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"firstChildSelector"},"jQueryIsEmptyObject":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsEmptyObject"},"dataTypeScript":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeScript"},"jQueryGetScript":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGetScript"},"headerSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"headerSelector"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6.1');
var $$$cjl359=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl1.$addmod$($$$cjl359,'ceylon.js.language/1.8.5');
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
        var native$1092;
        /*Begin dynamic block*/
        native$1092=(typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'13:12-13:17','animateoptions.ceylon'):Object)();var d$1093;
        if((d$1093=$$animateOptions.duration)!==null){
            native$1092.duration=d$1093;
        }var e$1094;
        if((e$1094=$$animateOptions.easing)!==null){
            native$1092.easing=e$1094.valueOf();
        }var q$1095;
        if((q$1095=$$animateOptions.queue)!==null){
            native$1092.queue=(typeof e==='undefined'||e===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: e")),'21:19-21:19','animateoptions.ceylon'):e);
        }var sE$1096;
        if((sE$1096=$$animateOptions.specialEasing)!==null){
            var specialEasingNative$1097=$$$cjl359.createJSObject();
            $prop$getSpecialEasingNative$1097={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSObject},d:['ceylon.js.jquery','AnimateOptions','$m','toNative','$at','specialEasingNative']};}};
            $prop$getSpecialEasingNative$1097.get=function(){return specialEasingNative$1097};
            var it$1098 = sE$1096.iterator();
            var item$1099;while ((item$1099=it$1098.next())!==$$$cl1.getFinished()){
                var key$1100=item$1099.key;
                var val$1101=item$1099.item;
                $$$cjl359.objectDefineProperty(specialEasingNative$1097,(tmpvar$1102=$$$cjl359.createJSString(key$1100),$$$cl1.isOfType(tmpvar$1102,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]})?tmpvar$1102:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'27:48-27:66','animateoptions.ceylon')),$$$cjl359.DataDescriptor(true,false,true,true,val$1101));
            }
            native$1092.specialEasing=specialEasingNative$1097;
        }var s$1103;
        if((s$1103=$$animateOptions.step)!==null){
            native$1092.step=$$$cl1.$JsCallable(s$1103/*TODO: callable targs 6*/);
        }var p$1104;
        if((p$1104=$$animateOptions.progress)!==null){
            native$1092.progress=$$$cl1.$JsCallable(p$1104/*TODO: callable targs 6*/);
        }var c$1105;
        if((c$1105=$$animateOptions.complete)!==null){
            native$1092.complete=$$$cl1.$JsCallable(c$1105/*TODO: callable targs 6*/);
        }var d$1106;
        if((d$1106=$$animateOptions.done)!==null){
            native$1092.done=$$$cl1.$JsCallable(d$1106/*TODO: callable targs 6*/);
        }var f$1107;
        if((f$1107=$$animateOptions.fail)!==null){
            native$1092.fail=$$$cl1.$JsCallable(f$1107/*TODO: callable targs 6*/);
        }var a$1108;
        if((a$1108=$$animateOptions.always)!==null){
            native$1092.always=$$$cl1.$JsCallable(a$1108/*TODO: callable targs 6*/);
        }return $$$cjl359.JSObject(native$1092);
        /*End dynamic block*/
    }
    $$animateOptions.toNative=toNative;
    toNative.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSObject},$ps:[],$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$m','toNative']};};
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
    $$$cjl359.JSObjectAbs($$callbacksAbs);
    function add(callbacks$1109){
        if(callbacks$1109===undefined){callbacks$1109=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.add(/*NULL PARAM!*/callbacks$1109));
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
    function fire(args$1110){
        if(args$1110===undefined){args$1110=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.fire(/*NULL PARAM!*/args$1110));
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
    $$callbacksAbs.fireWith$defs$context=function(context$1111,args$1112){return null;};
    function fireWith(context$1111,args$1112){
        if(context$1111===undefined){context$1111=$$callbacksAbs.fireWith$defs$context(context$1111,args$1112);}
        if(args$1112===undefined){args$1112=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.fireWith(/*NULL PARAM!*/context$1111/*NULL PARAM!*/,args$1112));
        /*End dynamic block*/
    }
    $$callbacksAbs.fireWith=fireWith;
    fireWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Anything}]},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','fireWith']};};
    function has(callback$1113){
        /*Begin dynamic block*/
        if($$callbacksAbs.$native.has(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1113,[],{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}))){
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
    function remove(callbacks$1114){
        if(callbacks$1114===undefined){callbacks$1114=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.remove(/*NULL PARAM!*/callbacks$1114));
        /*End dynamic block*/
    }
    $$callbacksAbs.remove=remove;
    remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'callbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','remove']};};
    return $$callbacksAbs;
}
CallbacksAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','CallbacksAbs']};};
exports.CallbacksAbs=CallbacksAbs;
function $init$CallbacksAbs(){
    if (CallbacksAbs.$$===undefined){
        $$$cl1.initTypeProto(CallbacksAbs,'ceylon.js.jquery::CallbacksAbs',$$$cjl359.JSObjectAbs);
    }
    return CallbacksAbs;
}
exports.$init$CallbacksAbs=$init$CallbacksAbs;
$init$CallbacksAbs();
function Callbacks(n$1115, $$callbacks){
    $init$Callbacks();
    if ($$callbacks===undefined)$$callbacks=new Callbacks.$$;
    $$callbacks.n$1115_=n$1115;
    CallbacksAbs($$callbacks);
    $$$cl1.defineAttr($$callbacks,'n$1115',function(){return this.n$1115_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Callbacks,d:['ceylon.js.jquery','Callbacks','$at','n']};});
    $$callbacks.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Callbacks,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','Callbacks','$at','native']};}};
    /*Begin dynamic block*/
    $$callbacks.$native=n$1115;/*End dynamic block*/
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
function createCoordinates(top$1116,left$1117){
    /*Begin dynamic block*/
    var coor$1118=(typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'5:17-5:22','coordinates.ceylon'):Object)();
    $prop$getCoor$1118={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','createCoordinates','$at','coor']};}};
    $prop$getCoor$1118.get=function(){return coor$1118};
    var t$1119;
    if((t$1119=top$1116)!==null){
        coor$1118.top=t$1119;
    }var l$1120;
    if((l$1120=left$1117)!==null){
        coor$1118.left=l$1120;
    }return Coordinates(coor$1118);
    /*End dynamic block*/
}
exports.createCoordinates=createCoordinates;
createCoordinates.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Coordinates},$ps:[{$nm:'top',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Float}]}]},$an:function(){return[];}},{$nm:'left',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Float}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','createCoordinates']};};
function CoordinatesAbs($$coordinatesAbs){
    $init$CoordinatesAbs();
    if ($$coordinatesAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl359.JSObjectAbs($$coordinatesAbs);
    function getTop(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$coordinatesAbs.$native.top);
        /*End dynamic block*/
    }
    $$coordinatesAbs.getTop=getTop;
    getTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:CoordinatesAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CoordinatesAbs','$m','getTop']};};
    function setTop(top$1121){
        /*Begin dynamic block*/
        $$coordinatesAbs.$native.top=top$1121;
        /*End dynamic block*/
    }
    $$coordinatesAbs.setTop=setTop;
    setTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'top',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]},$an:function(){return[];}}],$cont:CoordinatesAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CoordinatesAbs','$m','setTop']};};
    function getLeft(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$coordinatesAbs.$native.left);
        /*End dynamic block*/
    }
    $$coordinatesAbs.getLeft=getLeft;
    getLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:CoordinatesAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CoordinatesAbs','$m','getLeft']};};
    function setLeft(left$1122){
        /*Begin dynamic block*/
        $$coordinatesAbs.$native.left=left$1122;
        /*End dynamic block*/
    }
    $$coordinatesAbs.setLeft=setLeft;
    setLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'left',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]},$an:function(){return[];}}],$cont:CoordinatesAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CoordinatesAbs','$m','setLeft']};};
    return $$coordinatesAbs;
}
CoordinatesAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','CoordinatesAbs']};};
exports.CoordinatesAbs=CoordinatesAbs;
function $init$CoordinatesAbs(){
    if (CoordinatesAbs.$$===undefined){
        $$$cl1.initTypeProto(CoordinatesAbs,'ceylon.js.jquery::CoordinatesAbs',$$$cjl359.JSObjectAbs);
    }
    return CoordinatesAbs;
}
exports.$init$CoordinatesAbs=$init$CoordinatesAbs;
$init$CoordinatesAbs();
function Coordinates(n$1123, $$coordinates){
    $init$Coordinates();
    if ($$coordinates===undefined)$$coordinates=new Coordinates.$$;
    $$coordinates.n$1123_=n$1123;
    CoordinatesAbs($$coordinates);
    $$$cl1.defineAttr($$coordinates,'n$1123',function(){return this.n$1123_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Coordinates,d:['ceylon.js.jquery','Coordinates','$at','n']};});
    $$coordinates.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Coordinates,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','Coordinates','$at','native']};}};
    /*Begin dynamic block*/
    $$coordinates.$native=n$1123;/*End dynamic block*/
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
function DeferredState(name$1124, $$deferredState){
    $init$DeferredState();
    if ($$deferredState===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$deferredState.name$1124_=name$1124;
    $$$cl1.defineAttr($$deferredState,'name$1124',function(){return this.name$1124_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DeferredState,d:['ceylon.js.jquery','DeferredState','$at','name']};});
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
function deferredStatePending$1125(){
    var $$deferredStatePending=new deferredStatePending$1125.$$;
    DeferredState($$$cl1.String("pending",7),$$deferredStatePending);
    return $$deferredStatePending;
}
function $init$deferredStatePending$1125(){
    if (deferredStatePending$1125.$$===undefined){
        $$$cl1.initTypeProto(deferredStatePending$1125,'ceylon.js.jquery::deferredStatePending',$init$DeferredState());
    }
    return deferredStatePending$1125;
}
exports.$init$deferredStatePending$1125=$init$deferredStatePending$1125;
$init$deferredStatePending$1125();
var deferredStatePending$1126;
function getDeferredStatePending(){
    if (deferredStatePending$1126===undefined)deferredStatePending$1126=$init$deferredStatePending$1125()();
    return deferredStatePending$1126;
}
exports.getDeferredStatePending=getDeferredStatePending;
getDeferredStatePending.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:deferredStatePending$1125},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','deferredStatePending']};};
$prop$getDeferredStatePending={get:getDeferredStatePending,$$metamodel$$:getDeferredStatePending.$$metamodel$$};
exports.$prop$getDeferredStatePending=$prop$getDeferredStatePending;
function deferredStateResolved$1127(){
    var $$deferredStateResolved=new deferredStateResolved$1127.$$;
    DeferredState($$$cl1.String("resolved",8),$$deferredStateResolved);
    return $$deferredStateResolved;
}
function $init$deferredStateResolved$1127(){
    if (deferredStateResolved$1127.$$===undefined){
        $$$cl1.initTypeProto(deferredStateResolved$1127,'ceylon.js.jquery::deferredStateResolved',$init$DeferredState());
    }
    return deferredStateResolved$1127;
}
exports.$init$deferredStateResolved$1127=$init$deferredStateResolved$1127;
$init$deferredStateResolved$1127();
var deferredStateResolved$1128;
function getDeferredStateResolved(){
    if (deferredStateResolved$1128===undefined)deferredStateResolved$1128=$init$deferredStateResolved$1127()();
    return deferredStateResolved$1128;
}
exports.getDeferredStateResolved=getDeferredStateResolved;
getDeferredStateResolved.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:deferredStateResolved$1127},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','deferredStateResolved']};};
$prop$getDeferredStateResolved={get:getDeferredStateResolved,$$metamodel$$:getDeferredStateResolved.$$metamodel$$};
exports.$prop$getDeferredStateResolved=$prop$getDeferredStateResolved;
function deferredStateRejected$1129(){
    var $$deferredStateRejected=new deferredStateRejected$1129.$$;
    DeferredState($$$cl1.String("rejected",8),$$deferredStateRejected);
    return $$deferredStateRejected;
}
function $init$deferredStateRejected$1129(){
    if (deferredStateRejected$1129.$$===undefined){
        $$$cl1.initTypeProto(deferredStateRejected$1129,'ceylon.js.jquery::deferredStateRejected',$init$DeferredState());
    }
    return deferredStateRejected$1129;
}
exports.$init$deferredStateRejected$1129=$init$deferredStateRejected$1129;
$init$deferredStateRejected$1129();
var deferredStateRejected$1130;
function getDeferredStateRejected(){
    if (deferredStateRejected$1130===undefined)deferredStateRejected$1130=$init$deferredStateRejected$1129()();
    return deferredStateRejected$1130;
}
exports.getDeferredStateRejected=getDeferredStateRejected;
getDeferredStateRejected.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:deferredStateRejected$1129},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','deferredStateRejected']};};
$prop$getDeferredStateRejected={get:getDeferredStateRejected,$$metamodel$$:getDeferredStateRejected.$$metamodel$$};
exports.$prop$getDeferredStateRejected=$prop$getDeferredStateRejected;
function DeferredAbs($$deferredAbs){
    $init$DeferredAbs();
    if ($$deferredAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl359.JSObjectAbs($$deferredAbs);
    function always(alwaysCallbacks$1131){
        if(alwaysCallbacks$1131===undefined){alwaysCallbacks$1131=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.always(/*NULL PARAM!*/alwaysCallbacks$1131));
        /*End dynamic block*/
    }
    $$deferredAbs.always=always;
    always.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'alwaysCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','always']};};
    function done(doneCallbacks$1132){
        if(doneCallbacks$1132===undefined){doneCallbacks$1132=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.done(/*NULL PARAM!*/doneCallbacks$1132));
        /*End dynamic block*/
    }
    $$deferredAbs.done=done;
    done.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'doneCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','done']};};
    function fail(failCallbacks$1133){
        if(failCallbacks$1133===undefined){failCallbacks$1133=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.fail(/*NULL PARAM!*/failCallbacks$1133));
        /*End dynamic block*/
    }
    $$deferredAbs.fail=fail;
    fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'failCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','fail']};};
    $$deferredAbs.thenFilter$defs$failFilter=function(doneFilter$1134,failFilter$1135,progressFilter$1136){return null;};
    $$deferredAbs.thenFilter$defs$progressFilter=function(doneFilter$1134,failFilter$1135,progressFilter$1136){return null;};
    function thenFilter(doneFilter$1134,failFilter$1135,progressFilter$1136){
        if(failFilter$1135===undefined){failFilter$1135=$$deferredAbs.thenFilter$defs$failFilter(doneFilter$1134,failFilter$1135,progressFilter$1136);}
        if(progressFilter$1136===undefined){progressFilter$1136=$$deferredAbs.thenFilter$defs$progressFilter(doneFilter$1134,failFilter$1135,progressFilter$1136);}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.then(/*NULL PARAM!*/$$$cl1.$JsCallable(doneFilter$1134,[],{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,failFilter$1135/*NULL PARAM!*/,progressFilter$1136));
        /*End dynamic block*/
    }
    $$deferredAbs.thenFilter=thenFilter;
    thenFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'doneFilter',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'failFilter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}},{$nm:'progressFilter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','thenFilter']};};
    function notify(args$1137){
        if(args$1137===undefined){args$1137=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.notify(/*NULL PARAM!*/args$1137));
        /*End dynamic block*/
    }
    $$deferredAbs.notify=notify;
    notify.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','notify']};};
    function notifyWith(context$1138,args$1139){
        if(args$1139===undefined){args$1139=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.notifyWith(/*NULL PARAM!*/context$1138/*NULL PARAM!*/,args$1139));
        /*End dynamic block*/
    }
    $$deferredAbs.notifyWith=notifyWith;
    notifyWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','notifyWith']};};
    function progress(progressCallbacks$1140){
        if(progressCallbacks$1140===undefined){progressCallbacks$1140=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.progress(/*NULL PARAM!*/progressCallbacks$1140));
        /*End dynamic block*/
    }
    $$deferredAbs.progress=progress;
    progress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'progressCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','progress']};};
    $$deferredAbs.promise$defs$target=function(target$1141){return null;};
    function promise(target$1141){
        if(target$1141===undefined){target$1141=$$deferredAbs.promise$defs$target(target$1141);}
        /*Begin dynamic block*/
        return Promise($$deferredAbs.$native.promise(/*NULL PARAM!*/target$1141));
        /*End dynamic block*/
    }
    $$deferredAbs.promise=promise;
    promise.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'target',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Anything}]},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','promise']};};
    function reject(args$1142){
        if(args$1142===undefined){args$1142=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.reject(/*NULL PARAM!*/args$1142));
        /*End dynamic block*/
    }
    $$deferredAbs.reject=reject;
    reject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','reject']};};
    function rejectWith(context$1143,args$1144){
        if(args$1144===undefined){args$1144=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.rejectWith(/*NULL PARAM!*/context$1143/*NULL PARAM!*/,args$1144));
        /*End dynamic block*/
    }
    $$deferredAbs.rejectWith=rejectWith;
    rejectWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','rejectWith']};};
    function resolve(args$1145){
        if(args$1145===undefined){args$1145=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.resolve(/*NULL PARAM!*/args$1145));
        /*End dynamic block*/
    }
    $$deferredAbs.resolve=resolve;
    resolve.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','resolve']};};
    function resolveWith(context$1146,args$1147){
        if(args$1147===undefined){args$1147=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.resolveWith(/*NULL PARAM!*/context$1146/*NULL PARAM!*/,args$1147));
        /*End dynamic block*/
    }
    $$deferredAbs.resolveWith=resolveWith;
    resolveWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','resolveWith']};};
    function state(){
        /*Begin dynamic block*/
        if((tmpvar$1148=$$deferredAbs.$native.state,tmpvar$1149=$$$cl1.String("pending",7),(tmpvar$1148.equals&&tmpvar$1148.equals(tmpvar$1149))||tmpvar$1148===tmpvar$1149)){
            return getDeferredStatePending();
        }else {
            if((tmpvar$1150=$$deferredAbs.$native.state,tmpvar$1151=$$$cl1.String("resolved",8),(tmpvar$1150.equals&&tmpvar$1150.equals(tmpvar$1151))||tmpvar$1150===tmpvar$1151)){
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
DeferredAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','DeferredAbs']};};
exports.DeferredAbs=DeferredAbs;
function $init$DeferredAbs(){
    if (DeferredAbs.$$===undefined){
        $$$cl1.initTypeProto(DeferredAbs,'ceylon.js.jquery::DeferredAbs',$$$cjl359.JSObjectAbs);
    }
    return DeferredAbs;
}
exports.$init$DeferredAbs=$init$DeferredAbs;
$init$DeferredAbs();
function Deferred(n$1152, $$deferred){
    $init$Deferred();
    if ($$deferred===undefined)$$deferred=new Deferred.$$;
    $$deferred.n$1152_=n$1152;
    DeferredAbs($$deferred);
    $$$cl1.defineAttr($$deferred,'n$1152',function(){return this.n$1152_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Deferred,d:['ceylon.js.jquery','Deferred','$at','n']};});
    $$deferred.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Deferred,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','Deferred','$at','native']};}};
    /*Begin dynamic block*/
    $$deferred.$native=n$1152;/*End dynamic block*/
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
var $$$cjd975=require('ceylon/js/dom/4.0.0/ceylon.js.dom-4.0.0');
$$$cl1.$addmod$($$$cjd975,'ceylon.js.dom/4.0.0');
var $$$cjj659=require('ceylon/js/json/1.0.0/ceylon.js.json-1.0.0');
$$$cl1.$addmod$($$$cjj659,'ceylon.js.json/1.0.0');
var allSelector$1153;function $valinit$allSelector$1153(){if (allSelector$1153===undefined)allSelector$1153=$$$cl1.String("*",1);return allSelector$1153;};$valinit$allSelector$1153();
function getAllSelector(){return $valinit$allSelector$1153();}
exports.getAllSelector=getAllSelector;
var $prop$getAllSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','allSelector']};}};
exports.$prop$getAllSelector=$prop$getAllSelector;
$prop$getAllSelector.get=getAllSelector;
getAllSelector.$$metamodel$$=$prop$getAllSelector.$$metamodel$$;
var animatedSelector$1154;function $valinit$animatedSelector$1154(){if (animatedSelector$1154===undefined)animatedSelector$1154=$$$cl1.String(":animated",9);return animatedSelector$1154;};$valinit$animatedSelector$1154();
function getAnimatedSelector(){return $valinit$animatedSelector$1154();}
exports.getAnimatedSelector=getAnimatedSelector;
var $prop$getAnimatedSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','animatedSelector']};}};
exports.$prop$getAnimatedSelector=$prop$getAnimatedSelector;
$prop$getAnimatedSelector.get=getAnimatedSelector;
getAnimatedSelector.$$metamodel$$=$prop$getAnimatedSelector.$$metamodel$$;
var buttonSelector$1155;function $valinit$buttonSelector$1155(){if (buttonSelector$1155===undefined)buttonSelector$1155=$$$cl1.String(":button",7);return buttonSelector$1155;};$valinit$buttonSelector$1155();
function getButtonSelector(){return $valinit$buttonSelector$1155();}
exports.getButtonSelector=getButtonSelector;
var $prop$getButtonSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','buttonSelector']};}};
exports.$prop$getButtonSelector=$prop$getButtonSelector;
$prop$getButtonSelector.get=getButtonSelector;
getButtonSelector.$$metamodel$$=$prop$getButtonSelector.$$metamodel$$;
var checkboxSelector$1156;function $valinit$checkboxSelector$1156(){if (checkboxSelector$1156===undefined)checkboxSelector$1156=$$$cl1.String(":checkbox",9);return checkboxSelector$1156;};$valinit$checkboxSelector$1156();
function getCheckboxSelector(){return $valinit$checkboxSelector$1156();}
exports.getCheckboxSelector=getCheckboxSelector;
var $prop$getCheckboxSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','checkboxSelector']};}};
exports.$prop$getCheckboxSelector=$prop$getCheckboxSelector;
$prop$getCheckboxSelector.get=getCheckboxSelector;
getCheckboxSelector.$$metamodel$$=$prop$getCheckboxSelector.$$metamodel$$;
var checkedSelector$1157;function $valinit$checkedSelector$1157(){if (checkedSelector$1157===undefined)checkedSelector$1157=$$$cl1.String(":checked",8);return checkedSelector$1157;};$valinit$checkedSelector$1157();
function getCheckedSelector(){return $valinit$checkedSelector$1157();}
exports.getCheckedSelector=getCheckedSelector;
var $prop$getCheckedSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','checkedSelector']};}};
exports.$prop$getCheckedSelector=$prop$getCheckedSelector;
$prop$getCheckedSelector.get=getCheckedSelector;
getCheckedSelector.$$metamodel$$=$prop$getCheckedSelector.$$metamodel$$;
var disabledSelector$1158;function $valinit$disabledSelector$1158(){if (disabledSelector$1158===undefined)disabledSelector$1158=$$$cl1.String(":disabled",9);return disabledSelector$1158;};$valinit$disabledSelector$1158();
function getDisabledSelector(){return $valinit$disabledSelector$1158();}
exports.getDisabledSelector=getDisabledSelector;
var $prop$getDisabledSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','disabledSelector']};}};
exports.$prop$getDisabledSelector=$prop$getDisabledSelector;
$prop$getDisabledSelector.get=getDisabledSelector;
getDisabledSelector.$$metamodel$$=$prop$getDisabledSelector.$$metamodel$$;
var emptySelector$1159;function $valinit$emptySelector$1159(){if (emptySelector$1159===undefined)emptySelector$1159=$$$cl1.String(":empty",6);return emptySelector$1159;};$valinit$emptySelector$1159();
function getEmptySelector(){return $valinit$emptySelector$1159();}
exports.getEmptySelector=getEmptySelector;
var $prop$getEmptySelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','emptySelector']};}};
exports.$prop$getEmptySelector=$prop$getEmptySelector;
$prop$getEmptySelector.get=getEmptySelector;
getEmptySelector.$$metamodel$$=$prop$getEmptySelector.$$metamodel$$;
var enabledSelector$1160;function $valinit$enabledSelector$1160(){if (enabledSelector$1160===undefined)enabledSelector$1160=$$$cl1.String(":enabled",8);return enabledSelector$1160;};$valinit$enabledSelector$1160();
function getEnabledSelector(){return $valinit$enabledSelector$1160();}
exports.getEnabledSelector=getEnabledSelector;
var $prop$getEnabledSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','enabledSelector']};}};
exports.$prop$getEnabledSelector=$prop$getEnabledSelector;
$prop$getEnabledSelector.get=getEnabledSelector;
getEnabledSelector.$$metamodel$$=$prop$getEnabledSelector.$$metamodel$$;
var evenSelector$1161;function $valinit$evenSelector$1161(){if (evenSelector$1161===undefined)evenSelector$1161=$$$cl1.String(":even",5);return evenSelector$1161;};$valinit$evenSelector$1161();
function getEvenSelector(){return $valinit$evenSelector$1161();}
exports.getEvenSelector=getEvenSelector;
var $prop$getEvenSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','evenSelector']};}};
exports.$prop$getEvenSelector=$prop$getEvenSelector;
$prop$getEvenSelector.get=getEvenSelector;
getEvenSelector.$$metamodel$$=$prop$getEvenSelector.$$metamodel$$;
var fileSelector$1162;function $valinit$fileSelector$1162(){if (fileSelector$1162===undefined)fileSelector$1162=$$$cl1.String(":file",5);return fileSelector$1162;};$valinit$fileSelector$1162();
function getFileSelector(){return $valinit$fileSelector$1162();}
exports.getFileSelector=getFileSelector;
var $prop$getFileSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','fileSelector']};}};
exports.$prop$getFileSelector=$prop$getFileSelector;
$prop$getFileSelector.get=getFileSelector;
getFileSelector.$$metamodel$$=$prop$getFileSelector.$$metamodel$$;
var firstChildSelector$1163;function $valinit$firstChildSelector$1163(){if (firstChildSelector$1163===undefined)firstChildSelector$1163=$$$cl1.String(":first-child",12);return firstChildSelector$1163;};$valinit$firstChildSelector$1163();
function getFirstChildSelector(){return $valinit$firstChildSelector$1163();}
exports.getFirstChildSelector=getFirstChildSelector;
var $prop$getFirstChildSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','firstChildSelector']};}};
exports.$prop$getFirstChildSelector=$prop$getFirstChildSelector;
$prop$getFirstChildSelector.get=getFirstChildSelector;
getFirstChildSelector.$$metamodel$$=$prop$getFirstChildSelector.$$metamodel$$;
var firstOfTypeSelector$1164;function $valinit$firstOfTypeSelector$1164(){if (firstOfTypeSelector$1164===undefined)firstOfTypeSelector$1164=$$$cl1.String(":first-of-type",14);return firstOfTypeSelector$1164;};$valinit$firstOfTypeSelector$1164();
function getFirstOfTypeSelector(){return $valinit$firstOfTypeSelector$1164();}
exports.getFirstOfTypeSelector=getFirstOfTypeSelector;
var $prop$getFirstOfTypeSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','firstOfTypeSelector']};}};
exports.$prop$getFirstOfTypeSelector=$prop$getFirstOfTypeSelector;
$prop$getFirstOfTypeSelector.get=getFirstOfTypeSelector;
getFirstOfTypeSelector.$$metamodel$$=$prop$getFirstOfTypeSelector.$$metamodel$$;
var firstSelector$1165;function $valinit$firstSelector$1165(){if (firstSelector$1165===undefined)firstSelector$1165=$$$cl1.String(":first",6);return firstSelector$1165;};$valinit$firstSelector$1165();
function getFirstSelector(){return $valinit$firstSelector$1165();}
exports.getFirstSelector=getFirstSelector;
var $prop$getFirstSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','firstSelector']};}};
exports.$prop$getFirstSelector=$prop$getFirstSelector;
$prop$getFirstSelector.get=getFirstSelector;
getFirstSelector.$$metamodel$$=$prop$getFirstSelector.$$metamodel$$;
var focusSelector$1166;function $valinit$focusSelector$1166(){if (focusSelector$1166===undefined)focusSelector$1166=$$$cl1.String(":focus",6);return focusSelector$1166;};$valinit$focusSelector$1166();
function getFocusSelector(){return $valinit$focusSelector$1166();}
exports.getFocusSelector=getFocusSelector;
var $prop$getFocusSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','focusSelector']};}};
exports.$prop$getFocusSelector=$prop$getFocusSelector;
$prop$getFocusSelector.get=getFocusSelector;
getFocusSelector.$$metamodel$$=$prop$getFocusSelector.$$metamodel$$;
var headerSelector$1167;function $valinit$headerSelector$1167(){if (headerSelector$1167===undefined)headerSelector$1167=$$$cl1.String(":header",7);return headerSelector$1167;};$valinit$headerSelector$1167();
function getHeaderSelector(){return $valinit$headerSelector$1167();}
exports.getHeaderSelector=getHeaderSelector;
var $prop$getHeaderSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','headerSelector']};}};
exports.$prop$getHeaderSelector=$prop$getHeaderSelector;
$prop$getHeaderSelector.get=getHeaderSelector;
getHeaderSelector.$$metamodel$$=$prop$getHeaderSelector.$$metamodel$$;
var hiddenSelector$1168;function $valinit$hiddenSelector$1168(){if (hiddenSelector$1168===undefined)hiddenSelector$1168=$$$cl1.String(":hidden",7);return hiddenSelector$1168;};$valinit$hiddenSelector$1168();
function getHiddenSelector(){return $valinit$hiddenSelector$1168();}
exports.getHiddenSelector=getHiddenSelector;
var $prop$getHiddenSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','hiddenSelector']};}};
exports.$prop$getHiddenSelector=$prop$getHiddenSelector;
$prop$getHiddenSelector.get=getHiddenSelector;
getHiddenSelector.$$metamodel$$=$prop$getHiddenSelector.$$metamodel$$;
var imageSelector$1169;function $valinit$imageSelector$1169(){if (imageSelector$1169===undefined)imageSelector$1169=$$$cl1.String(":image",6);return imageSelector$1169;};$valinit$imageSelector$1169();
function getImageSelector(){return $valinit$imageSelector$1169();}
exports.getImageSelector=getImageSelector;
var $prop$getImageSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','imageSelector']};}};
exports.$prop$getImageSelector=$prop$getImageSelector;
$prop$getImageSelector.get=getImageSelector;
getImageSelector.$$metamodel$$=$prop$getImageSelector.$$metamodel$$;
var inputSelector$1170;function $valinit$inputSelector$1170(){if (inputSelector$1170===undefined)inputSelector$1170=$$$cl1.String(":input",6);return inputSelector$1170;};$valinit$inputSelector$1170();
function getInputSelector(){return $valinit$inputSelector$1170();}
exports.getInputSelector=getInputSelector;
var $prop$getInputSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','inputSelector']};}};
exports.$prop$getInputSelector=$prop$getInputSelector;
$prop$getInputSelector.get=getInputSelector;
getInputSelector.$$metamodel$$=$prop$getInputSelector.$$metamodel$$;
var lastChildSelector$1171;function $valinit$lastChildSelector$1171(){if (lastChildSelector$1171===undefined)lastChildSelector$1171=$$$cl1.String(":last-child",11);return lastChildSelector$1171;};$valinit$lastChildSelector$1171();
function getLastChildSelector(){return $valinit$lastChildSelector$1171();}
exports.getLastChildSelector=getLastChildSelector;
var $prop$getLastChildSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','lastChildSelector']};}};
exports.$prop$getLastChildSelector=$prop$getLastChildSelector;
$prop$getLastChildSelector.get=getLastChildSelector;
getLastChildSelector.$$metamodel$$=$prop$getLastChildSelector.$$metamodel$$;
var lastOfTypeSelector$1172;function $valinit$lastOfTypeSelector$1172(){if (lastOfTypeSelector$1172===undefined)lastOfTypeSelector$1172=$$$cl1.String(":last-of-type",13);return lastOfTypeSelector$1172;};$valinit$lastOfTypeSelector$1172();
function getLastOfTypeSelector(){return $valinit$lastOfTypeSelector$1172();}
exports.getLastOfTypeSelector=getLastOfTypeSelector;
var $prop$getLastOfTypeSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','lastOfTypeSelector']};}};
exports.$prop$getLastOfTypeSelector=$prop$getLastOfTypeSelector;
$prop$getLastOfTypeSelector.get=getLastOfTypeSelector;
getLastOfTypeSelector.$$metamodel$$=$prop$getLastOfTypeSelector.$$metamodel$$;
var lastSelector$1173;function $valinit$lastSelector$1173(){if (lastSelector$1173===undefined)lastSelector$1173=$$$cl1.String(":last",5);return lastSelector$1173;};$valinit$lastSelector$1173();
function getLastSelector(){return $valinit$lastSelector$1173();}
exports.getLastSelector=getLastSelector;
var $prop$getLastSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','lastSelector']};}};
exports.$prop$getLastSelector=$prop$getLastSelector;
$prop$getLastSelector.get=getLastSelector;
getLastSelector.$$metamodel$$=$prop$getLastSelector.$$metamodel$$;
var oddSelector$1174;function $valinit$oddSelector$1174(){if (oddSelector$1174===undefined)oddSelector$1174=$$$cl1.String(":odd",4);return oddSelector$1174;};$valinit$oddSelector$1174();
function getOddSelector(){return $valinit$oddSelector$1174();}
exports.getOddSelector=getOddSelector;
var $prop$getOddSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','oddSelector']};}};
exports.$prop$getOddSelector=$prop$getOddSelector;
$prop$getOddSelector.get=getOddSelector;
getOddSelector.$$metamodel$$=$prop$getOddSelector.$$metamodel$$;
var onlyChildSelector$1175;function $valinit$onlyChildSelector$1175(){if (onlyChildSelector$1175===undefined)onlyChildSelector$1175=$$$cl1.String(":only-child",11);return onlyChildSelector$1175;};$valinit$onlyChildSelector$1175();
function getOnlyChildSelector(){return $valinit$onlyChildSelector$1175();}
exports.getOnlyChildSelector=getOnlyChildSelector;
var $prop$getOnlyChildSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','onlyChildSelector']};}};
exports.$prop$getOnlyChildSelector=$prop$getOnlyChildSelector;
$prop$getOnlyChildSelector.get=getOnlyChildSelector;
getOnlyChildSelector.$$metamodel$$=$prop$getOnlyChildSelector.$$metamodel$$;
var onlyOfTypeSelector$1176;function $valinit$onlyOfTypeSelector$1176(){if (onlyOfTypeSelector$1176===undefined)onlyOfTypeSelector$1176=$$$cl1.String(":only-of-type",13);return onlyOfTypeSelector$1176;};$valinit$onlyOfTypeSelector$1176();
function getOnlyOfTypeSelector(){return $valinit$onlyOfTypeSelector$1176();}
exports.getOnlyOfTypeSelector=getOnlyOfTypeSelector;
var $prop$getOnlyOfTypeSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','onlyOfTypeSelector']};}};
exports.$prop$getOnlyOfTypeSelector=$prop$getOnlyOfTypeSelector;
$prop$getOnlyOfTypeSelector.get=getOnlyOfTypeSelector;
getOnlyOfTypeSelector.$$metamodel$$=$prop$getOnlyOfTypeSelector.$$metamodel$$;
var parentSelector$1177;function $valinit$parentSelector$1177(){if (parentSelector$1177===undefined)parentSelector$1177=$$$cl1.String(":parent",7);return parentSelector$1177;};$valinit$parentSelector$1177();
function getParentSelector(){return $valinit$parentSelector$1177();}
exports.getParentSelector=getParentSelector;
var $prop$getParentSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','parentSelector']};}};
exports.$prop$getParentSelector=$prop$getParentSelector;
$prop$getParentSelector.get=getParentSelector;
getParentSelector.$$metamodel$$=$prop$getParentSelector.$$metamodel$$;
var passwordSelector$1178;function $valinit$passwordSelector$1178(){if (passwordSelector$1178===undefined)passwordSelector$1178=$$$cl1.String(":password",9);return passwordSelector$1178;};$valinit$passwordSelector$1178();
function getPasswordSelector(){return $valinit$passwordSelector$1178();}
exports.getPasswordSelector=getPasswordSelector;
var $prop$getPasswordSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','passwordSelector']};}};
exports.$prop$getPasswordSelector=$prop$getPasswordSelector;
$prop$getPasswordSelector.get=getPasswordSelector;
getPasswordSelector.$$metamodel$$=$prop$getPasswordSelector.$$metamodel$$;
var radioSelector$1179;function $valinit$radioSelector$1179(){if (radioSelector$1179===undefined)radioSelector$1179=$$$cl1.String(":radio",6);return radioSelector$1179;};$valinit$radioSelector$1179();
function getRadioSelector(){return $valinit$radioSelector$1179();}
exports.getRadioSelector=getRadioSelector;
var $prop$getRadioSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','radioSelector']};}};
exports.$prop$getRadioSelector=$prop$getRadioSelector;
$prop$getRadioSelector.get=getRadioSelector;
getRadioSelector.$$metamodel$$=$prop$getRadioSelector.$$metamodel$$;
var resetSelector$1180;function $valinit$resetSelector$1180(){if (resetSelector$1180===undefined)resetSelector$1180=$$$cl1.String(":reset",6);return resetSelector$1180;};$valinit$resetSelector$1180();
function getResetSelector(){return $valinit$resetSelector$1180();}
exports.getResetSelector=getResetSelector;
var $prop$getResetSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','resetSelector']};}};
exports.$prop$getResetSelector=$prop$getResetSelector;
$prop$getResetSelector.get=getResetSelector;
getResetSelector.$$metamodel$$=$prop$getResetSelector.$$metamodel$$;
var rootSelector$1181;function $valinit$rootSelector$1181(){if (rootSelector$1181===undefined)rootSelector$1181=$$$cl1.String(":root",5);return rootSelector$1181;};$valinit$rootSelector$1181();
function getRootSelector(){return $valinit$rootSelector$1181();}
exports.getRootSelector=getRootSelector;
var $prop$getRootSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','rootSelector']};}};
exports.$prop$getRootSelector=$prop$getRootSelector;
$prop$getRootSelector.get=getRootSelector;
getRootSelector.$$metamodel$$=$prop$getRootSelector.$$metamodel$$;
var selectedSelector$1182;function $valinit$selectedSelector$1182(){if (selectedSelector$1182===undefined)selectedSelector$1182=$$$cl1.String(":selected",9);return selectedSelector$1182;};$valinit$selectedSelector$1182();
function getSelectedSelector(){return $valinit$selectedSelector$1182();}
exports.getSelectedSelector=getSelectedSelector;
var $prop$getSelectedSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','selectedSelector']};}};
exports.$prop$getSelectedSelector=$prop$getSelectedSelector;
$prop$getSelectedSelector.get=getSelectedSelector;
getSelectedSelector.$$metamodel$$=$prop$getSelectedSelector.$$metamodel$$;
var submitSelector$1183;function $valinit$submitSelector$1183(){if (submitSelector$1183===undefined)submitSelector$1183=$$$cl1.String(":submit",7);return submitSelector$1183;};$valinit$submitSelector$1183();
function getSubmitSelector(){return $valinit$submitSelector$1183();}
exports.getSubmitSelector=getSubmitSelector;
var $prop$getSubmitSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','submitSelector']};}};
exports.$prop$getSubmitSelector=$prop$getSubmitSelector;
$prop$getSubmitSelector.get=getSubmitSelector;
getSubmitSelector.$$metamodel$$=$prop$getSubmitSelector.$$metamodel$$;
var targetSelector$1184;function $valinit$targetSelector$1184(){if (targetSelector$1184===undefined)targetSelector$1184=$$$cl1.String(":target",7);return targetSelector$1184;};$valinit$targetSelector$1184();
function getTargetSelector(){return $valinit$targetSelector$1184();}
exports.getTargetSelector=getTargetSelector;
var $prop$getTargetSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','targetSelector']};}};
exports.$prop$getTargetSelector=$prop$getTargetSelector;
$prop$getTargetSelector.get=getTargetSelector;
getTargetSelector.$$metamodel$$=$prop$getTargetSelector.$$metamodel$$;
var textSelector$1185;function $valinit$textSelector$1185(){if (textSelector$1185===undefined)textSelector$1185=$$$cl1.String(":text",5);return textSelector$1185;};$valinit$textSelector$1185();
function getTextSelector(){return $valinit$textSelector$1185();}
exports.getTextSelector=getTextSelector;
var $prop$getTextSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','textSelector']};}};
exports.$prop$getTextSelector=$prop$getTextSelector;
$prop$getTextSelector.get=getTextSelector;
getTextSelector.$$metamodel$$=$prop$getTextSelector.$$metamodel$$;
var visibleSelector$1186;function $valinit$visibleSelector$1186(){if (visibleSelector$1186===undefined)visibleSelector$1186=$$$cl1.String(":visible",8);return visibleSelector$1186;};$valinit$visibleSelector$1186();
function getVisibleSelector(){return $valinit$visibleSelector$1186();}
exports.getVisibleSelector=getVisibleSelector;
var $prop$getVisibleSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','visibleSelector']};}};
exports.$prop$getVisibleSelector=$prop$getVisibleSelector;
$prop$getVisibleSelector.get=getVisibleSelector;
getVisibleSelector.$$metamodel$$=$prop$getVisibleSelector.$$metamodel$$;
function jQueryAjax(url$1187,settings$1188){
    if(url$1187===undefined){url$1187=null;}
    if(settings$1188===undefined){settings$1188=null;}
    /*Begin dynamic block*/
    var u$1189;
    if((u$1189=url$1187)!==null){
        var s$1190;
        if((s$1190=settings$1188)!==null){
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'44:17-44:22','jquery.ceylon'):jQuery).ajax(/*NULL PARAM!*/u$1189.valueOf()/*NULL PARAM!*/,s$1190.toNative()));
        }else {
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'46:17-46:22','jquery.ceylon'):jQuery).ajax(/*NULL PARAM!*/u$1189.valueOf()));
        }
    }else {
        var s$1191;
        if((s$1191=settings$1188)!==null){
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'50:17-50:22','jquery.ceylon'):jQuery).ajax(/*NULL PARAM!*/s$1191.toNative()));
        }else {
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'52:17-52:22','jquery.ceylon'):jQuery).ajax());
        }
    }/*End dynamic block*/
}
exports.jQueryAjax=jQueryAjax;
jQueryAjax.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'settings',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JQueryAjaxSettingsBuilder}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryAjax']};};
function jQueryAjaxPrefilter(callback$1192,dataTypes$1193){
    if(dataTypes$1193===undefined){dataTypes$1193=null;}
    /*Begin dynamic block*/
    var dT$1194;
    if((dT$1194=dataTypes$1193)!==null){
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'61:3-61:8','jquery.ceylon'):jQuery).ajaxPrefilter(/*NULL PARAM!*/dT$1194.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1192,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}));
    }else {
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'63:3-63:8','jquery.ceylon'):jQuery).ajaxPrefilter(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1192,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}));
    }/*End dynamic block*/
}
exports.jQueryAjaxPrefilter=jQueryAjaxPrefilter;
jQueryAjaxPrefilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'dataTypes',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryAjaxPrefilter']};};
function jQueryAjaxSetup(options$1195){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'70:2-70:7','jquery.ceylon'):jQuery).ajaxSetup(/*NULL PARAM!*/options$1195.toNative());
    /*End dynamic block*/
}
exports.jQueryAjaxSetup=jQueryAjaxSetup;
jQueryAjaxSetup.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'options',$mt:'prm',$t:{t:JQueryAjaxSettingsBuilder},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryAjaxSetup']};};
function jQueryAjaxTransport(dataType$1196,callback$1197){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'77:2-77:7','jquery.ceylon'):jQuery).ajaxTransport(/*NULL PARAM!*/dataType$1196.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1197,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}));
    /*End dynamic block*/
}
exports.jQueryAjaxTransport=jQueryAjaxTransport;
jQueryAjaxTransport.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'dataType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryAjaxTransport']};};
function jQueryCallbacks(flags$1198){
    if(flags$1198===undefined){flags$1198=$$$cl1.String("",0);}
    /*Begin dynamic block*/
    return Callbacks((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'83:19-83:24','jquery.ceylon'):jQuery).Callbacks(/*NULL PARAM!*/flags$1198.valueOf()));
    /*End dynamic block*/
}
exports.jQueryCallbacks=jQueryCallbacks;
jQueryCallbacks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'flags',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryCallbacks']};};
function jQueryContains(container$1199,contained$1200){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'89:6-89:11','jquery.ceylon'):jQuery).contains(/*NULL PARAM!*/container$1199/*NULL PARAM!*/,contained$1200)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryContains=jQueryContains;
jQueryContains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'container',$mt:'prm',$t:{t:$$$cjd975.Element},$an:function(){return[];}},{$nm:'contained',$mt:'prm',$t:{t:$$$cjd975.Element},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryContains']};};
function jQueryCssHooks(){
    /*Begin dynamic block*/
    return $$$cjl359.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'99:18-99:23','jquery.ceylon'):jQuery).cssHooks);
    /*End dynamic block*/
}
exports.jQueryCssHooks=jQueryCssHooks;
jQueryCssHooks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSObject},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryCssHooks']};};
function jQuerySetData(element$1201,key$1202,data$1203){
    /*Begin dynamic block*/
    return $$$cjl359.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'105:18-105:23','jquery.ceylon'):jQuery).data(/*NULL PARAM!*/element$1201/*NULL PARAM!*/,key$1202.valueOf()/*NULL PARAM!*/,data$1203));
    /*End dynamic block*/
}
exports.jQuerySetData=jQuerySetData;
jQuerySetData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSObject},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd975.Element},$an:function(){return[];}},{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQuerySetData']};};
function jQueryGetData(element$1204,key$1205){
    if(key$1205===undefined){key$1205=null;}
    /*Begin dynamic block*/
    return $$$cjl359.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'111:18-111:23','jquery.ceylon'):jQuery).data(/*NULL PARAM!*/element$1204/*NULL PARAM!*/,key$1205));
    /*End dynamic block*/
}
exports.jQueryGetData=jQueryGetData;
jQueryGetData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSObject},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd975.Element},$an:function(){return[];}},{$nm:'key',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGetData']};};
function jQueryDeferred(beforeStart$1206){
    if(beforeStart$1206===undefined){beforeStart$1206=null;}
    /*Begin dynamic block*/
    return Deferred((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'118:18-118:23','jquery.ceylon'):jQuery).Deferred(/*NULL PARAM!*/beforeStart$1206));
    /*End dynamic block*/
}
exports.jQueryDeferred=jQueryDeferred;
jQueryDeferred.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'beforeStart',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryDeferred']};};
function jQueryDequeue(element$1207,queueName$1208){
    if(queueName$1208===undefined){queueName$1208=null;}
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'124:2-124:7','jquery.ceylon'):jQuery).dequeue(/*NULL PARAM!*/element$1207/*NULL PARAM!*/,queueName$1208);
    /*End dynamic block*/
}
exports.jQueryDequeue=jQueryDequeue;
jQueryDequeue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd975.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryDequeue']};};
function jQueryEach(collection$1209,callback$1210){
    /*Begin dynamic block*/
    return $$$cjl359.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'130:18-130:23','jquery.ceylon'):jQuery).each(/*NULL PARAM!*/collection$1209/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1210,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
    /*End dynamic block*/
}
exports.jQueryEach=jQueryEach;
jQueryEach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSObject},$ps:[{$nm:'collection',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryEach']};};
function jQueryError(message$1211){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'136:2-136:7','jquery.ceylon'):jQuery).error(/*NULL PARAM!*/message$1211.valueOf());
    /*End dynamic block*/
}
exports.jQueryError=jQueryError;
jQueryError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'message',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryError']};};
function jQueryExtend(target$1212,objects$1213){
    if(objects$1213===undefined){objects$1213=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'142:2-142:7','jquery.ceylon'):jQuery).extend(/*NULL PARAM!*/target$1212/*NULL PARAM!*/,objects$1213);
    /*End dynamic block*/
}
exports.jQueryExtend=jQueryExtend;
jQueryExtend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'target',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'objects',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryExtend']};};
function jQueryExtendDeep(deep$1214,target$1215,objects$1216){
    if(objects$1216===undefined){objects$1216=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'148:2-148:7','jquery.ceylon'):jQuery).extend(/*NULL PARAM!*/target$1215/*NULL PARAM!*/,objects$1216);
    /*End dynamic block*/
}
exports.jQueryExtendDeep=jQueryExtendDeep;
jQueryExtendDeep.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'deep',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'target',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'objects',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryExtendDeep']};};
function jQueryFnExtend(obj$1217){
    /*Begin dynamic block*/
    return $$$cjl359.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'154:18-154:23','jquery.ceylon'):jQuery).fn.extend(/*NULL PARAM!*/obj$1217));
    /*End dynamic block*/
}
exports.jQueryFnExtend=jQueryFnExtend;
jQueryFnExtend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryFnExtend']};};
function jQueryFxInterval(){
    /*Begin dynamic block*/
    return $$$cjl359.JSNumber((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'160:18-160:23','jquery.ceylon'):jQuery).fx.interval);
    /*End dynamic block*/
}
exports.jQueryFxInterval=jQueryFxInterval;
jQueryFxInterval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryFxInterval']};};
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
function jQueryGet(url$1218,data$1219,success$1220,dataType$1221){
    if(data$1219===undefined){data$1219=null;}
    if(success$1220===undefined){success$1220=null;}
    if(dataType$1221===undefined){dataType$1221=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'177:15-177:20','jquery.ceylon'):jQuery).get(/*NULL PARAM!*/url$1218.valueOf()/*NULL PARAM!*/,data$1219/*NULL PARAM!*/,success$1220/*NULL PARAM!*/,dataType$1221));
    /*End dynamic block*/
}
exports.jQueryGet=jQueryGet;
jQueryGet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}},{$nm:'dataType',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGet']};};
function jQueryGetJSON(url$1222,data$1223,success$1224){
    if(data$1223===undefined){data$1223=null;}
    if(success$1224===undefined){success$1224=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'184:15-184:20','jquery.ceylon'):jQuery).getJSON(/*NULL PARAM!*/url$1222.valueOf()/*NULL PARAM!*/,data$1223/*NULL PARAM!*/,success$1224));
    /*End dynamic block*/
}
exports.jQueryGetJSON=jQueryGetJSON;
jQueryGetJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGetJSON']};};
function jQueryGetScript(url$1225,success$1226){
    if(success$1226===undefined){success$1226=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'191:15-191:20','jquery.ceylon'):jQuery).getScript(/*NULL PARAM!*/url$1225.valueOf()/*NULL PARAM!*/,success$1226));
    /*End dynamic block*/
}
exports.jQueryGetScript=jQueryGetScript;
jQueryGetScript.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGetScript']};};
function jQueryGlobalEval(code$1227){
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'197:15-197:20','jquery.ceylon'):jQuery).globalEval(/*NULL PARAM!*/code$1227.valueOf()));
    /*End dynamic block*/
}
exports.jQueryGlobalEval=jQueryGlobalEval;
jQueryGlobalEval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'code',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGlobalEval']};};
function jQueryGrep(array$1228,callback$1229,invert$1230){
    if(invert$1230===undefined){invert$1230=null;}
    /*Begin dynamic block*/
    return $$$cjl359.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'203:17-203:22','jquery.ceylon'):jQuery).grep(/*NULL PARAM!*/array$1228.$native/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1229,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,invert$1230));
    /*End dynamic block*/
}
exports.jQueryGrep=jQueryGrep;
jQueryGrep.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSArray},$ps:[{$nm:'array',$mt:'prm',$t:{t:$$$cjl359.JSArray},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'invert',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGrep']};};
function jQueryHasData(element$1231){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'209:6-209:11','jquery.ceylon'):jQuery).hasData(/*NULL PARAM!*/element$1231)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryHasData=jQueryHasData;
jQueryHasData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd975.Element},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryHasData']};};
function jQueryHoldReady(hold$1232){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'219:2-219:7','jquery.ceylon'):jQuery).holdReady(/*NULL PARAM!*/hold$1232);
    /*End dynamic block*/
}
exports.jQueryHoldReady=jQueryHoldReady;
jQueryHoldReady.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'hold',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryHoldReady']};};
function jQueryInArray(val$1233,array$1234,fromIndex$1235){
    if(fromIndex$1235===undefined){fromIndex$1235=null;}
    /*Begin dynamic block*/
    return $$$cjl359.JSNumber((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'225:18-225:23','jquery.ceylon'):jQuery).inArray(/*NULL PARAM!*/val$1233.$native/*NULL PARAM!*/,array$1234.$native/*NULL PARAM!*/,fromIndex$1235));
    /*End dynamic block*/
}
exports.jQueryInArray=jQueryInArray;
jQueryInArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cjl359.JSObject},$an:function(){return[];}},{$nm:'array',$mt:'prm',$t:{t:$$$cjl359.JSArray},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryInArray']};};
function jQueryIsArray(obj$1236){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'231:6-231:11','jquery.ceylon'):jQuery).isArray(/*NULL PARAM!*/obj$1236.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsArray=jQueryIsArray;
jQueryIsArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl359.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsArray']};};
function jQueryIsEmptyObject(obj$1237){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'241:6-241:11','jquery.ceylon'):jQuery).isEmptyObject(/*NULL PARAM!*/obj$1237.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsEmptyObject=jQueryIsEmptyObject;
jQueryIsEmptyObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl359.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsEmptyObject']};};
function jQueryIsFunction(obj$1238){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'251:6-251:11','jquery.ceylon'):jQuery).isFunction(/*NULL PARAM!*/obj$1238.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsFunction=jQueryIsFunction;
jQueryIsFunction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl359.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsFunction']};};
function jQueryIsNumeric(obj$1239){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'261:6-261:11','jquery.ceylon'):jQuery).isNumeric(/*NULL PARAM!*/obj$1239.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsNumeric=jQueryIsNumeric;
jQueryIsNumeric.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl359.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsNumeric']};};
function jQueryIsPlainObject(obj$1240){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'271:6-271:11','jquery.ceylon'):jQuery).isPlainObject(/*NULL PARAM!*/obj$1240.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsPlainObject=jQueryIsPlainObject;
jQueryIsPlainObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl359.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsPlainObject']};};
function jQueryIsWindow(obj$1241){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'281:6-281:11','jquery.ceylon'):jQuery).isWindow(/*NULL PARAM!*/obj$1241.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsWindow=jQueryIsWindow;
jQueryIsWindow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl359.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsWindow']};};
function jQueryIsXMLDoc(node$1242){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'291:6-291:11','jquery.ceylon'):jQuery).isXMLDoc(/*NULL PARAM!*/node$1242.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsXMLDoc=jQueryIsXMLDoc;
jQueryIsXMLDoc.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:$$$cjd975.Element},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsXMLDoc']};};
function jQueryMapArray(array$1243,callback$1244){
    /*Begin dynamic block*/
    return $$$cjl359.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'301:17-301:22','jquery.ceylon'):jQuery).mapArray(/*NULL PARAM!*/array$1243.$native/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1244,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
    /*End dynamic block*/
}
exports.jQueryMapArray=jQueryMapArray;
jQueryMapArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSArray},$ps:[{$nm:'array',$mt:'prm',$t:{t:$$$cjl359.JSArray},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryMapArray']};};
function jQueryMapObject(obj$1245,callback$1246){
    /*Begin dynamic block*/
    return $$$cjl359.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'307:17-307:22','jquery.ceylon'):jQuery).mapArray(/*NULL PARAM!*/obj$1245.$native/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1246,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
    /*End dynamic block*/
}
exports.jQueryMapObject=jQueryMapObject;
jQueryMapObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSArray},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl359.JSObject},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryMapObject']};};
function jQueryMerge(first$1247,second$1248){
    /*Begin dynamic block*/
    return $$$cjl359.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'313:17-313:22','jquery.ceylon'):jQuery).merge(/*NULL PARAM!*/first$1247/*NULL PARAM!*/,second$1248));
    /*End dynamic block*/
}
exports.jQueryMerge=jQueryMerge;
jQueryMerge.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSArray},$ps:[{$nm:'first',$mt:'prm',$t:{t:$$$cjl359.JSArray},$an:function(){return[];}},{$nm:'second',$mt:'prm',$t:{t:$$$cjl359.JSArray},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryMerge']};};
function jQueryNoConflict(removeAll$1249){
    if(removeAll$1249===undefined){removeAll$1249=null;}
    /*Begin dynamic block*/
    return $$$cjl359.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'319:17-319:22','jquery.ceylon'):jQuery).noConflict(/*NULL PARAM!*/removeAll$1249));
    /*End dynamic block*/
}
exports.jQueryNoConflict=jQueryNoConflict;
jQueryNoConflict.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSArray},$ps:[{$nm:'removeAll',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryNoConflict']};};
function jQueryNoop(){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'325:2-325:7','jquery.ceylon'):jQuery).noop();
    /*End dynamic block*/
}
exports.jQueryNoop=jQueryNoop;
jQueryNoop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryNoop']};};
function jQueryNow(){
    /*Begin dynamic block*/
    return $$$cjl359.JSNumber((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'331:18-331:23','jquery.ceylon'):jQuery).now());
    /*End dynamic block*/
}
exports.jQueryNow=jQueryNow;
jQueryNow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryNow']};};
function jQueryParam(obj$1250,traditional$1251){
    if(traditional$1251===undefined){traditional$1251=false;}
    /*Begin dynamic block*/
    return $$$cjl359.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'337:18-337:23','jquery.ceylon'):jQuery).param(/*NULL PARAM!*/obj$1250/*NULL PARAM!*/,traditional$1251));
    /*End dynamic block*/
}
exports.jQueryParam=jQueryParam;
jQueryParam.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[{$nm:'obj',$mt:'prm',$t:{ t:'u', l:[{t:$$$cjl359.JSArray},{t:$$$cjl359.JSObject}]},$an:function(){return[];}},{$nm:'traditional',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryParam']};};
function jQueryParseHTML(data$1252,context$1253,keepScripts$1254){
    if(context$1253===undefined){context$1253=null;}
    if(keepScripts$1254===undefined){keepScripts$1254=false;}
    /*Begin dynamic block*/
    return $$$cjl359.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'343:18-343:23','jquery.ceylon'):jQuery).parseHTML(/*NULL PARAM!*/data$1252.valueOf()/*NULL PARAM!*/,context$1253/*NULL PARAM!*/,keepScripts$1254));
    /*End dynamic block*/
}
exports.jQueryParseHTML=jQueryParseHTML;
jQueryParseHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[{$nm:'data',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd975.Element}]},$an:function(){return[];}},{$nm:'keepScripts',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryParseHTML']};};
function jQueryParseJSON(json$1255){
    /*Begin dynamic block*/
    return $$$cjl359.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'349:18-349:23','jquery.ceylon'):jQuery).parseJSON(/*NULL PARAM!*/(typeof data==='undefined'||data===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: data")),'349:35-349:38','jquery.ceylon'):data)/*NULL PARAM!*/,(typeof context==='undefined'||context===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: context")),'349:41-349:47','jquery.ceylon'):context)/*NULL PARAM!*/,(typeof keepScripts==='undefined'||keepScripts===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: keepScripts")),'349:50-349:60','jquery.ceylon'):keepScripts)));
    /*End dynamic block*/
}
exports.jQueryParseJSON=jQueryParseJSON;
jQueryParseJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSObject},$ps:[{$nm:'json',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryParseJSON']};};
function jQueryParseXML(data$1256){
    /*Begin dynamic block*/
    return $$$cjl359.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'355:18-355:23','jquery.ceylon'):jQuery).parseXML(/*NULL PARAM!*/data$1256.valueOf()));
    /*End dynamic block*/
}
exports.jQueryParseXML=jQueryParseXML;
jQueryParseXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSObject},$ps:[{$nm:'data',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryParseXML']};};
function jQueryPost(url$1257,data$1258,success$1259,dataType$1260){
    if(data$1258===undefined){data$1258=null;}
    if(success$1259===undefined){success$1259=null;}
    if(dataType$1260===undefined){dataType$1260=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'362:15-362:20','jquery.ceylon'):jQuery).post(/*NULL PARAM!*/url$1257.valueOf()/*NULL PARAM!*/,data$1258/*NULL PARAM!*/,success$1259/*NULL PARAM!*/,dataType$1260));
    /*End dynamic block*/
}
exports.jQueryPost=jQueryPost;
jQueryPost.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}},{$nm:'dataType',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryPost']};};
function jQueryProxy(func$1261,context$1262,additionalArguments$1263){
    if(additionalArguments$1263===undefined){additionalArguments$1263=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return $$$cjl359.JSFunction((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'368:20-368:25','jquery.ceylon'):jQuery).proxy(/*NULL PARAM!*/$$$cl1.$JsCallable(func$1261,[],{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,context$1262/*NULL PARAM!*/,additionalArguments$1263));
    /*End dynamic block*/
}
exports.jQueryProxy=jQueryProxy;
jQueryProxy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSFunction},$ps:[{$nm:'func',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:$$$cjl359.JSObject},$an:function(){return[];}},{$nm:'additionalArguments',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryProxy']};};
function jQueryProxyName(context$1264,name$1265,additionalArguments$1266){
    if(additionalArguments$1266===undefined){additionalArguments$1266=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return $$$cjl359.JSFunction((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'374:20-374:25','jquery.ceylon'):jQuery).proxy(/*NULL PARAM!*/context$1264/*NULL PARAM!*/,(typeof func==='undefined'||func===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: func")),'374:42-374:45','jquery.ceylon'):func)/*NULL PARAM!*/,additionalArguments$1266));
    /*End dynamic block*/
}
exports.jQueryProxyName=jQueryProxyName;
jQueryProxyName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSFunction},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cjl359.JSObject},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'additionalArguments',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryProxyName']};};
function jQueryGetQueue(element$1267,queueName$1268){
    if(queueName$1268===undefined){queueName$1268=$$$cl1.String("fx",2);}
    /*Begin dynamic block*/
    return $$$cjl359.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'381:17-381:22','jquery.ceylon'):jQuery).queue(/*NULL PARAM!*/element$1267/*NULL PARAM!*/,queueName$1268.valueOf()));
    /*End dynamic block*/
}
exports.jQueryGetQueue=jQueryGetQueue;
jQueryGetQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSArray},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd975.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("returns JSFunctions[]",21)),$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGetQueue']};};
function jQuerySetQueue(element$1269,queueName$1270,callbacks$1271){
    if(queueName$1270===undefined){queueName$1270=$$$cl1.String("fx",2);}
    if(callbacks$1271===undefined){callbacks$1271=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'387:16-387:21','jquery.ceylon'):jQuery).queue(/*NULL PARAM!*/element$1269/*NULL PARAM!*/,queueName$1270.valueOf()/*NULL PARAM!*/,callbacks$1271));
    /*End dynamic block*/
}
exports.jQuerySetQueue=jQuerySetQueue;
jQuerySetQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd975.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQuerySetQueue']};};
function jQueryRemoveData(element$1272,name$1273){
    if(name$1273===undefined){name$1273=null;}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'393:16-393:21','jquery.ceylon'):jQuery).removeData(/*NULL PARAM!*/element$1272/*NULL PARAM!*/,name$1273));
    /*End dynamic block*/
}
exports.jQueryRemoveData=jQueryRemoveData;
jQueryRemoveData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd975.Element},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryRemoveData']};};
function jQueryTrim(str$1274){
    /*Begin dynamic block*/
    return $$$cjl359.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'399:18-399:23','jquery.ceylon'):jQuery).trim(/*NULL PARAM!*/str$1274.$native));
    /*End dynamic block*/
}
exports.jQueryTrim=jQueryTrim;
jQueryTrim.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[{$nm:'str',$mt:'prm',$t:{t:$$$cjl359.JSString},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryTrim']};};
function jQueryType(obj$1275){
    /*Begin dynamic block*/
    return $$$cjl359.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'405:18-405:23','jquery.ceylon'):jQuery).type(/*NULL PARAM!*/obj$1275.$native));
    /*End dynamic block*/
}
exports.jQueryType=jQueryType;
jQueryType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl359.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryType']};};
function jQueryUnique(arr$1276){
    /*Begin dynamic block*/
    return $$$cjl359.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'411:17-411:22','jquery.ceylon'):jQuery).unique(/*NULL PARAM!*/arr$1276.$native));
    /*End dynamic block*/
}
exports.jQueryUnique=jQueryUnique;
jQueryUnique.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSArray},$ps:[{$nm:'arr',$mt:'prm',$t:{t:$$$cjl359.JSArray},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryUnique']};};
function jQueryWhen(deferreds$1277){
    if(deferreds$1277===undefined){deferreds$1277=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return Promise((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'417:17-417:22','jquery.ceylon'):jQuery).when(/*NULL PARAM!*/(function(){
        var lst$1278=[];
        var it$1279=deferreds$1277.iterator();
        var elem$1280;
        while ((elem$1280=it$1279.next())!==$$$cl1.getFinished()){
            lst$1278.push(elem$1280.$native);
        }
        return $$$cl1.ArraySequence(lst$1278);
    }())));
    /*End dynamic block*/
}
exports.jQueryWhen=jQueryWhen;
jQueryWhen.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'deferreds',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:Deferred}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryWhen']};};
function jq(selector$1281,context$1282){
    if(selector$1281===undefined){selector$1281=null;}
    if(context$1282===undefined){context$1282=null;}
    /*Begin dynamic block*/
    
    var case$1283=selector$1281;
    if ($$$cl1.isOfType(selector$1281,{t:$$$cl1.String})) {
        
        var case$1284=context$1282;
        if ($$$cl1.isOfType(context$1282,{ t:'u', l:[{t:$$$cjd975.Element},{t:JQuery}]})) {
            return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'427:18-427:23','jquery.ceylon'):jQuery)(/*NULL PARAM!*/case$1283.valueOf()/*NULL PARAM!*/,case$1284.$native));
        }else if ($$$cl1.isOfType(context$1282,{t:$$$cl1.Null})) {
            return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'430:18-430:23','jquery.ceylon'):jQuery)(/*NULL PARAM!*/case$1283.valueOf()));
        }
    }else if ($$$cl1.isOfType(selector$1281,{ t:'u', l:[{t:JQuery},{t:$$$cjl359.JSObject},{t:$$$cjd975.Element}]})) {
        return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'434:17-434:22','jquery.ceylon'):jQuery)(/*NULL PARAM!*/case$1283.$native));
    }else if ($$$cl1.isOfType(selector$1281,{t:$$$cl1.Null})) {
        return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'437:17-437:22','jquery.ceylon'):jQuery)());
    }/*End dynamic block*/
}
exports.jq=jq;
jq.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cjl359.JSObject},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd975.Element}]}]},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cjd975.Element},{ t:'u', l:[{t:$$$cl1.Null},{t:JQuery}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jq']};};
function jqThis(){
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'444:16-444:21','jquery.ceylon'):jQuery)(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'444:23-444:26','jquery.ceylon'):this)));
    /*End dynamic block*/
}
exports.jqThis=jqThis;
jqThis.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jqThis']};};
function jqElems(elems$1285){
    if(elems$1285===undefined){elems$1285=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'450:16-450:21','jquery.ceylon'):jQuery)(/*NULL PARAM!*/(function(){
        var lst$1286=[];
        var it$1287=elems$1285.iterator();
        var elem$1288;
        while ((elem$1288=it$1287.next())!==$$$cl1.getFinished()){
            lst$1286.push(elem$1288.$native);
        }
        return $$$cl1.ArraySequence(lst$1286);
    }())));
    /*End dynamic block*/
}
exports.jqElems=jqElems;
jqElems.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elems',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequence,a:{Element:{t:$$$cjd975.Element}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jqElems']};};
function JQueryAbs($$jQueryAbs){
    $init$JQueryAbs();
    if ($$jQueryAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl359.JSObjectAbs($$jQueryAbs);
    function add(append$1289){
        
        var case$1290=append$1289;
        if ($$$cl1.isOfType(append$1289,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/case$1290.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(append$1289,{t:JQuery})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/case$1290.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.add=add;
    add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'append',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','add']};};
    function addElements(elements$1291){
        if(elements$1291===undefined){elements$1291=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/(function(){
            var lst$1292=[];
            var it$1293=elements$1291.iterator();
            var elem$1294;
            while ((elem$1294=it$1293.next())!==$$$cl1.getFinished()){
                lst$1292.push(elem$1294.$native);
            }
            return $$$cl1.ArraySequence(lst$1292);
        }())));
        /*End dynamic block*/
    }
    $$jQueryAbs.addElements=addElements;
    addElements.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elements',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequence,a:{Element:{t:$$$cjd975.Element}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addElements']};};
    $$jQueryAbs.addSelector$defs$context=function(selector$1295,context$1296){return null;};
    function addSelector(selector$1295,context$1296){
        if(context$1296===undefined){context$1296=$$jQueryAbs.addSelector$defs$context(selector$1295,context$1296);}
        /*Begin dynamic block*/
        var c$1297;
        if((c$1297=context$1296)!==null){
            return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/selector$1295.valueOf()/*NULL PARAM!*/,c$1297));
        }else {
            return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/selector$1295.valueOf()));
        }/*End dynamic block*/
    }
    $$jQueryAbs.addSelector=addSelector;
    addSelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd975.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addSelector']};};
    $$jQueryAbs.addBack$defs$selector=function(selector$1298){return null;};
    function addBack(selector$1298){
        if(selector$1298===undefined){selector$1298=$$jQueryAbs.addBack$defs$selector(selector$1298);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.addBack(/*NULL PARAM!*/selector$1298));
        /*End dynamic block*/
    }
    $$jQueryAbs.addBack=addBack;
    addBack.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addBack']};};
    function addClass(className$1299){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.addClass(/*NULL PARAM!*/className$1299.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.addClass=addClass;
    addClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addClass']};};
    function addClassCallback(callback$1300){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.addClass(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1300,[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'currentClass',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.addClassCallback=addClassCallback;
    addClassCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addClassCallback']};};
    function after(content$1301){
        if(content$1301===undefined){content$1301=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl359.JSFunction($$jQueryAbs.$native.after).$apply(null,content$1301));
        /*End dynamic block*/
    }
    $$jQueryAbs.after=after;
    after.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','after']};};
    function afterElements(content$1302){
        if(content$1302===undefined){content$1302=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl359.JSFunction($$jQueryAbs.$native.after).$apply(null,(tmpvar$1303=(function(){
            var lst$1304=[];
            var it$1305=content$1302.iterator();
            var elem$1306;
            while ((elem$1306=it$1305.next())!==$$$cl1.getFinished()){
                lst$1304.push(elem$1306.$native);
            }
            return $$$cl1.ArraySequence(lst$1304);
        }()),$$$cl1.isOfType(tmpvar$1303,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1303:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'513:54-513:68','jquery.ceylon'))));
        /*End dynamic block*/
    }
    $$jQueryAbs.afterElements=afterElements;
    afterElements.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cjd975.Element}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','afterElements']};};
    function afterJQuery(content$1307){
        if(content$1307===undefined){content$1307=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl359.JSFunction($$jQueryAbs.$native.after).$apply(null,(tmpvar$1308=(function(){
            var lst$1309=[];
            var it$1310=content$1307.iterator();
            var elem$1311;
            while ((elem$1311=it$1310.next())!==$$$cl1.getFinished()){
                lst$1309.push(elem$1311.$native);
            }
            return $$$cl1.ArraySequence(lst$1309);
        }()),$$$cl1.isOfType(tmpvar$1308,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1308:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'520:54-520:68','jquery.ceylon'))));
        /*End dynamic block*/
    }
    $$jQueryAbs.afterJQuery=afterJQuery;
    afterJQuery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:JQuery}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','afterJQuery']};};
    function ajaxComplete(handler$1312){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxComplete(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1312,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxComplete=ajaxComplete;
    ajaxComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxComplete']};};
    function ajaxError(handler$1313){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxError(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1313,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxError=ajaxError;
    ajaxError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxError']};};
    function ajaxSend(handler$1314){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxSend(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1314,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxSend=ajaxSend;
    ajaxSend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxSend']};};
    function ajaxStart(handler$1315){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxStart(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1315,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxStart=ajaxStart;
    ajaxStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxStart']};};
    function ajaxStop(handler$1316){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxStop(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1316,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxStop=ajaxStop;
    ajaxStop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxStop']};};
    function ajaxSuccess(handler$1317){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxSuccess(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1317,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxSuccess=ajaxSuccess;
    ajaxSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxSuccess']};};
    $$jQueryAbs.animate$defs$duration=function(properties$1318,duration$1319,easing$1320,complete$1321){return null;};
    $$jQueryAbs.animate$defs$easing=function(properties$1318,duration$1319,easing$1320,complete$1321){return null;};
    $$jQueryAbs.animate$defs$complete=function(properties$1318,duration$1319,easing$1320,complete$1321){return null;};
    function animate(properties$1318,duration$1319,easing$1320,complete$1321){
        if(duration$1319===undefined){duration$1319=$$jQueryAbs.animate$defs$duration(properties$1318,duration$1319,easing$1320,complete$1321);}
        if(easing$1320===undefined){easing$1320=$$jQueryAbs.animate$defs$easing(properties$1318,duration$1319,easing$1320,complete$1321);}
        if(complete$1321===undefined){complete$1321=$$jQueryAbs.animate$defs$complete(properties$1318,duration$1319,easing$1320,complete$1321);}
        var propertiesNative$1322=$$$cjl359.createJSObject();
        var it$1323 = properties$1318.iterator();
        var item$1324;while ((item$1324=it$1323.next())!==$$$cl1.getFinished()){
            var key$1325=item$1324.key;
            var val$1326=item$1324.item;
            /*Begin dynamic block*/
            $$$cjl359.objectDefineProperty(propertiesNative$1322,(tmpvar$1327=$$$cjl359.createJSString(key$1325),$$$cl1.isOfType(tmpvar$1327,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]})?tmpvar$1327:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'569:43-569:61','jquery.ceylon')),$$$cjl359.DataDescriptor(true,false,true,true,val$1326));
            /*End dynamic block*/
        }
        
        var case$1328=duration$1319;
        if ($$$cl1.isOfType(duration$1319,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]})) {
            
            var case$1329=easing$1320;
            if ($$$cl1.isOfType(easing$1320,{t:$$$cl1.String})) {
                var c$1330;
                if((c$1330=complete$1321)!==null){
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1322.$native/*NULL PARAM!*/,case$1328/*NULL PARAM!*/,case$1329.valueOf()/*NULL PARAM!*/,complete$1321));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1322.$native/*NULL PARAM!*/,case$1328/*NULL PARAM!*/,case$1329.valueOf()));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(easing$1320,{t:$$$cl1.Null})) {
                var c$1331;
                if((c$1331=complete$1321)!==null){
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1322.$native/*NULL PARAM!*/,case$1328/*NULL PARAM!*/,null/*NULL PARAM!*/,complete$1321));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1322.$native/*NULL PARAM!*/,case$1328));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(duration$1319,{t:$$$cl1.Null})) {
            
            var case$1332=easing$1320;
            if ($$$cl1.isOfType(easing$1320,{t:$$$cl1.String})) {
                var c$1333;
                if((c$1333=complete$1321)!==null){
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1322.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1332.valueOf()/*NULL PARAM!*/,complete$1321));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1322.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1332.valueOf()));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(easing$1320,{t:$$$cl1.Null})) {
                var c$1334;
                if((c$1334=complete$1321)!==null){
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1322.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,complete$1321));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1322.$native));
                    /*End dynamic block*/
                }
            }
        }
    }
    $$jQueryAbs.animate=animate;
    animate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$an:function(){return[];}},{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','animate']};};
    function animateOptions(properties$1335,options$1336){
        var propertiesNative$1337=$$$cjl359.createJSObject();
        var it$1338 = properties$1335.iterator();
        var item$1339;while ((item$1339=it$1338.next())!==$$$cl1.getFinished()){
            var key$1340=item$1339.key;
            var val$1341=item$1339.item;
            /*Begin dynamic block*/
            $$$cjl359.objectDefineProperty(propertiesNative$1337,(tmpvar$1342=$$$cjl359.createJSString(key$1340),$$$cl1.isOfType(tmpvar$1342,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]})?tmpvar$1342:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'629:43-629:61','jquery.ceylon')),$$$cjl359.DataDescriptor(true,false,true,true,val$1341));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1337.$native/*NULL PARAM!*/,options$1336.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.animateOptions=animateOptions;
    animateOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$an:function(){return[];}},{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','animateOptions']};};
    function append(content$1343){
        if(content$1343===undefined){content$1343=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl359.JSFunction($$jQueryAbs.$native.append).$apply(null,(tmpvar$1344=(function(){
            var lst$1345=[];
            var it$1346=content$1343.iterator();
            var elem$1347;
            while ((elem$1347=it$1346.next())!==$$$cl1.getFinished()){
                lst$1345.push(elem$1347.$native);
            }
            return $$$cl1.ArraySequence(lst$1345);
        }()),$$$cl1.isOfType(tmpvar$1344,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1344:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'639:55-639:69','jquery.ceylon'))));
        /*End dynamic block*/
    }
    $$jQueryAbs.append=append;
    append.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{ t:'u', l:[{t:$$$cjd975.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','append']};};
    function appendHTML(content$1348){
        if(content$1348===undefined){content$1348=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.append(/*NULL PARAM!*/content$1348));
        /*End dynamic block*/
    }
    $$jQueryAbs.appendHTML=appendHTML;
    appendHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','appendHTML']};};
    function appendCallback(callback$1349){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.append(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1349,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.appendCallback=appendCallback;
    appendCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','appendCallback']};};
    function appendTo(target$1350){
        
        var case$1351=target$1350;
        if ($$$cl1.isOfType(target$1350,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.appendTo(/*NULL PARAM!*/case$1351.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$1350,{ t:'u', l:[{t:$$$cjd975.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.appendTo(/*NULL PARAM!*/case$1351.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.appendTo=appendTo;
    appendTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd975.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','appendTo']};};
    function getAttr(attributeName$1352){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$jQueryAbs.$native.attr(/*NULL PARAM!*/attributeName$1352.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.getAttr=getAttr;
    getAttr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getAttr']};};
    function setAttr(attributeName$1353,val$1354){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.attr(/*NULL PARAM!*/attributeName$1353.valueOf()/*NULL PARAM!*/,val$1354));
        /*End dynamic block*/
    }
    $$jQueryAbs.setAttr=setAttr;
    setAttr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setAttr']};};
    function setAttrEntries(entries$1355){
        if(entries$1355===undefined){entries$1355=$$$cl1.getEmpty();}
        var entriesNative$1356=$$$cjl359.createJSObject();
        var it$1357 = entries$1355.iterator();
        var item$1358;while ((item$1358=it$1357.next())!==$$$cl1.getFinished()){
            var key$1359=item$1358.key;
            var val$1360=item$1358.item;
            /*Begin dynamic block*/
            $$$cjl359.objectDefineProperty(entriesNative$1356,(tmpvar$1361=$$$cjl359.createJSString(key$1359),$$$cl1.isOfType(tmpvar$1361,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]})?tmpvar$1361:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'685:40-685:58','jquery.ceylon')),$$$cjl359.DataDescriptor(true,false,true,true,val$1360));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.attr(/*NULL PARAM!*/entriesNative$1356));
        /*End dynamic block*/
    }
    $$jQueryAbs.setAttrEntries=setAttrEntries;
    setAttrEntries.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'entries',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setAttrEntries']};};
    function setAttrCallback(attributeName$1362,callback$1363){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.attr(/*NULL PARAM!*/(typeof entriesNative==='undefined'||entriesNative===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: entriesNative")),'695:29-695:41','jquery.ceylon'):entriesNative)/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1363,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setAttrCallback=setAttrCallback;
    setAttrCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setAttrCallback']};};
    function before(content$1364){
        if(content$1364===undefined){content$1364=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl359.JSFunction($$jQueryAbs.$native.before).$apply(null,(tmpvar$1365=(function(){
            var lst$1366=[];
            var it$1367=content$1364.iterator();
            var elem$1368;
            while ((elem$1368=it$1367.next())!==$$$cl1.getFinished()){
                lst$1366.push(elem$1368.$native);
            }
            return $$$cl1.ArraySequence(lst$1366);
        }()),$$$cl1.isOfType(tmpvar$1365,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1365:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'701:55-701:69','jquery.ceylon'))));
        /*End dynamic block*/
    }
    $$jQueryAbs.before=before;
    before.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{ t:'u', l:[{t:$$$cjd975.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','before']};};
    function beforeHTML(content$1369){
        if(content$1369===undefined){content$1369=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.before(/*NULL PARAM!*/content$1369));
        /*End dynamic block*/
    }
    $$jQueryAbs.beforeHTML=beforeHTML;
    beforeHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','beforeHTML']};};
    function beforeCallback(callback$1370){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.before(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1370,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.beforeCallback=beforeCallback;
    beforeCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','beforeCallback']};};
    $$jQueryAbs.bind$defs$eventData=function(eventType$1371,eventData$1372,preventBubble$1373){return null;};
    $$jQueryAbs.bind$defs$preventBubble=function(eventType$1371,eventData$1372,preventBubble$1373){return true;};
    function bind(eventType$1371,eventData$1372,preventBubble$1373){
        if(eventData$1372===undefined){eventData$1372=$$jQueryAbs.bind$defs$eventData(eventType$1371,eventData$1372,preventBubble$1373);}
        if(preventBubble$1373===undefined){preventBubble$1373=$$jQueryAbs.bind$defs$preventBubble(eventType$1371,eventData$1372,preventBubble$1373);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.bind(/*NULL PARAM!*/eventType$1371.valueOf()/*NULL PARAM!*/,eventData$1372/*NULL PARAM!*/,preventBubble$1373));
        /*End dynamic block*/
    }
    $$jQueryAbs.bind=bind;
    bind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'preventBubble',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','bind']};};
    function bindCallback(eventType$1374,eventData$1375,handler$1376){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.bind(/*NULL PARAM!*/eventType$1374.valueOf()/*NULL PARAM!*/,eventData$1375/*NULL PARAM!*/,$$$cl1.$JsCallable(handler$1376,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.bindCallback=bindCallback;
    bindCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','bindCallback']};};
    function bindEvents(events$1377){
        if(events$1377===undefined){events$1377=$$$cl1.getEmpty();}
        var eventsNative$1378=$$$cjl359.createJSObject();
        var it$1379 = events$1377.iterator();
        var item$1380;while ((item$1380=it$1379.next())!==$$$cl1.getFinished()){
            var key$1381=item$1380.key;
            var val$1382=item$1380.item;
            /*Begin dynamic block*/
            $$$cjl359.objectDefineProperty(eventsNative$1378,(tmpvar$1383=$$$cjl359.createJSString(key$1381),$$$cl1.isOfType(tmpvar$1383,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]})?tmpvar$1383:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'733:39-733:57','jquery.ceylon')),$$$cjl359.DataDescriptor(true,false,true,true,$$$cl1.$JsCallable(val$1382,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.bind(/*NULL PARAM!*/eventsNative$1378));
        /*End dynamic block*/
    }
    $$jQueryAbs.bindEvents=bindEvents;
    bindEvents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','bindEvents']};};
    $$jQueryAbs.blur$defs$eventData=function(eventData$1384,handler$1385){return null;};
    $$jQueryAbs.blur$defs$handler=function(eventData$1384,handler$1385){return null;};
    function blur(eventData$1384,handler$1385){
        if(eventData$1384===undefined){eventData$1384=$$jQueryAbs.blur$defs$eventData(eventData$1384,handler$1385);}
        if(handler$1385===undefined){handler$1385=$$jQueryAbs.blur$defs$handler(eventData$1384,handler$1385);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.blur(/*NULL PARAM!*/eventData$1384/*NULL PARAM!*/,handler$1385));
        /*End dynamic block*/
    }
    $$jQueryAbs.blur=blur;
    blur.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','blur']};};
    $$jQueryAbs.change$defs$eventData=function(eventData$1386,handler$1387){return null;};
    $$jQueryAbs.change$defs$handler=function(eventData$1386,handler$1387){return null;};
    function change(eventData$1386,handler$1387){
        if(eventData$1386===undefined){eventData$1386=$$jQueryAbs.change$defs$eventData(eventData$1386,handler$1387);}
        if(handler$1387===undefined){handler$1387=$$jQueryAbs.change$defs$handler(eventData$1386,handler$1387);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.blur(/*NULL PARAM!*/eventData$1386/*NULL PARAM!*/,handler$1387));
        /*End dynamic block*/
    }
    $$jQueryAbs.change=change;
    change.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','change']};};
    $$jQueryAbs.children$defs$selector=function(selector$1388){return null;};
    function children(selector$1388){
        if(selector$1388===undefined){selector$1388=$$jQueryAbs.children$defs$selector(selector$1388);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.children(/*NULL PARAM!*/selector$1388));
        /*End dynamic block*/
    }
    $$jQueryAbs.children=children;
    children.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','children']};};
    $$jQueryAbs.clearQueue$defs$queueName=function(queueName$1389){return $$$cl1.String("fx",2);};
    function clearQueue(queueName$1389){
        if(queueName$1389===undefined){queueName$1389=$$jQueryAbs.clearQueue$defs$queueName(queueName$1389);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.clearQueue(/*NULL PARAM!*/queueName$1389.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.clearQueue=clearQueue;
    clearQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','clearQueue']};};
    $$jQueryAbs.click$defs$eventData=function(eventData$1390,handler$1391){return null;};
    $$jQueryAbs.click$defs$handler=function(eventData$1390,handler$1391){return null;};
    function click(eventData$1390,handler$1391){
        if(eventData$1390===undefined){eventData$1390=$$jQueryAbs.click$defs$eventData(eventData$1390,handler$1391);}
        if(handler$1391===undefined){handler$1391=$$jQueryAbs.click$defs$handler(eventData$1390,handler$1391);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.click(/*NULL PARAM!*/eventData$1390/*NULL PARAM!*/,handler$1391));
        /*End dynamic block*/
    }
    $$jQueryAbs.click=click;
    click.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','click']};};
    $$jQueryAbs.clone$defs$withDataAndEvents=function(withDataAndEvents$1392,deepWithDataAndEvents$1393){return false;};
    $$jQueryAbs.clone$defs$deepWithDataAndEvents=function(withDataAndEvents$1392,deepWithDataAndEvents$1393){return null;};
    function clone(withDataAndEvents$1392,deepWithDataAndEvents$1393){
        if(withDataAndEvents$1392===undefined){withDataAndEvents$1392=$$jQueryAbs.clone$defs$withDataAndEvents(withDataAndEvents$1392,deepWithDataAndEvents$1393);}
        if(deepWithDataAndEvents$1393===undefined){deepWithDataAndEvents$1393=$$jQueryAbs.clone$defs$deepWithDataAndEvents(withDataAndEvents$1392,deepWithDataAndEvents$1393);}
        var deep$1394;
        if((deep$1394=deepWithDataAndEvents$1393)!==null){
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.clone(/*NULL PARAM!*/withDataAndEvents$1392/*NULL PARAM!*/,deep$1394));
            /*End dynamic block*/
        }else {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.clone(/*NULL PARAM!*/withDataAndEvents$1392));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.clone=clone;
    clone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'withDataAndEvents',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'deepWithDataAndEvents',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','clone']};};
    $$jQueryAbs.closest$defs$context=function(selector$1395,context$1396){return null;};
    function closest(selector$1395,context$1396){
        if(context$1396===undefined){context$1396=$$jQueryAbs.closest$defs$context(selector$1395,context$1396);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.closest(/*NULL PARAM!*/selector$1395.valueOf()/*NULL PARAM!*/,context$1396));
        /*End dynamic block*/
    }
    $$jQueryAbs.closest=closest;
    closest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd975.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','closest']};};
    function closestElement(elem$1397){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.closest(/*NULL PARAM!*/elem$1397.$native));
        /*End dynamic block*/
    }
    $$jQueryAbs.closestElement=closestElement;
    closestElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elem',$mt:'prm',$t:{t:$$$cjd975.Element},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','closestElement']};};
    function closestjQuery(jq$1398){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.closest(/*NULL PARAM!*/jq$1398.$native));
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
    function getCss(properties$1399){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$jQueryAbs.$native.css(/*NULL PARAM!*/properties$1399));
        /*End dynamic block*/
    }
    $$jQueryAbs.getCss=getCss;
    getCss.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[{$nm:'properties',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getCss']};};
    function setCss(property$1400,val$1401){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.css(/*NULL PARAM!*/property$1400.valueOf()/*NULL PARAM!*/,val$1401));
        /*End dynamic block*/
    }
    $$jQueryAbs.setCss=setCss;
    setCss.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Number}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setCss']};};
    function setCssCallback(property$1402,callback$1403){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.css(/*NULL PARAM!*/property$1402.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1403,[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setCssCallback=setCssCallback;
    setCssCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setCssCallback']};};
    function setCssJson(property$1404,val$1405){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.css(/*NULL PARAM!*/property$1404.valueOf()/*NULL PARAM!*/,val$1405.$native));
        /*End dynamic block*/
    }
    $$jQueryAbs.setCssJson=setCssJson;
    setCssJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cjj659.JSJSON},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setCssJson']};};
    function setData(key$1406,data$1407){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.data(/*NULL PARAM!*/key$1406.valueOf()/*NULL PARAM!*/,data$1407.$native));
        /*End dynamic block*/
    }
    $$jQueryAbs.setData=setData;
    setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:$$$cjl359.JSObject},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setData']};};
    function setDataEntries(events$1408){
        if(events$1408===undefined){events$1408=$$$cl1.getEmpty();}
        var dataNative$1409=$$$cjl359.createJSObject();
        var it$1410 = events$1408.iterator();
        var item$1411;while ((item$1411=it$1410.next())!==$$$cl1.getFinished()){
            var key$1412=item$1411.key;
            var val$1413=item$1411.item;
            /*Begin dynamic block*/
            $$$cjl359.objectDefineProperty(dataNative$1409,(tmpvar$1414=$$$cjl359.createJSString(key$1412),$$$cl1.isOfType(tmpvar$1414,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]})?tmpvar$1414:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'841:37-841:55','jquery.ceylon')),$$$cjl359.DataDescriptor(true,false,true,true,val$1413.$native));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.data(/*NULL PARAM!*/dataNative$1409));
        /*End dynamic block*/
    }
    $$jQueryAbs.setDataEntries=setDataEntries;
    setDataEntries.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl359.JSObject}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setDataEntries']};};
    $$jQueryAbs.getData$defs$key=function(key$1415){return null;};
    function getData(key$1415){
        if(key$1415===undefined){key$1415=$$jQueryAbs.getData$defs$key(key$1415);}
        var k$1416;
        if((k$1416=key$1415)!==null){
            /*Begin dynamic block*/
            return $$$cjl359.JSObject($$jQueryAbs.$native.data(/*NULL PARAM!*/key$1415));
            /*End dynamic block*/
        }else {
            /*Begin dynamic block*/
            return $$$cjl359.JSObject($$jQueryAbs.$native.data());
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.getData=getData;
    getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSObject},$ps:[{$nm:'key',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getData']};};
    $$jQueryAbs.dblclick$defs$eventData=function(eventData$1417,handler$1418){return null;};
    $$jQueryAbs.dblclick$defs$handler=function(eventData$1417,handler$1418){return null;};
    function dblclick(eventData$1417,handler$1418){
        if(eventData$1417===undefined){eventData$1417=$$jQueryAbs.dblclick$defs$eventData(eventData$1417,handler$1418);}
        if(handler$1418===undefined){handler$1418=$$jQueryAbs.dblclick$defs$handler(eventData$1417,handler$1418);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.blur(/*NULL PARAM!*/eventData$1417/*NULL PARAM!*/,handler$1418));
        /*End dynamic block*/
    }
    $$jQueryAbs.dblclick=dblclick;
    dblclick.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','dblclick']};};
    $$jQueryAbs.delay$defs$queueName=function(duration$1419,queueName$1420){return $$$cl1.String("fx",2);};
    function delay(duration$1419,queueName$1420){
        if(queueName$1420===undefined){queueName$1420=$$jQueryAbs.delay$defs$queueName(duration$1419,queueName$1420);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.delay(/*NULL PARAM!*/duration$1419/*NULL PARAM!*/,queueName$1420.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.delay=delay;
    delay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','delay']};};
    $$jQueryAbs.delegate$defs$eventData=function(selector$1421,eventType$1422,eventData$1423,handler$1424){return null;};
    $$jQueryAbs.delegate$defs$handler=function(selector$1421,eventType$1422,eventData$1423,handler$1424){return null;};
    function delegate(selector$1421,eventType$1422,eventData$1423,handler$1424){
        if(eventData$1423===undefined){eventData$1423=$$jQueryAbs.delegate$defs$eventData(selector$1421,eventType$1422,eventData$1423,handler$1424);}
        if(handler$1424===undefined){handler$1424=$$jQueryAbs.delegate$defs$handler(selector$1421,eventType$1422,eventData$1423,handler$1424);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.delegate(/*NULL PARAM!*/selector$1421.valueOf()/*NULL PARAM!*/,eventType$1422.valueOf()/*NULL PARAM!*/,eventData$1423/*NULL PARAM!*/,handler$1424));
        /*End dynamic block*/
    }
    $$jQueryAbs.delegate=delegate;
    delegate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','delegate']};};
    function delegateEvents(selector$1425,events$1426){
        if(events$1426===undefined){events$1426=$$$cl1.getEmpty();}
        var eventsNative$1427=$$$cjl359.createJSObject();
        var it$1428 = events$1426.iterator();
        var item$1429;while ((item$1429=it$1428.next())!==$$$cl1.getFinished()){
            var key$1430=item$1429.key;
            var val$1431=item$1429.item;
            /*Begin dynamic block*/
            $$$cjl359.objectDefineProperty(eventsNative$1427,(tmpvar$1432=$$$cjl359.createJSString(key$1430),$$$cl1.isOfType(tmpvar$1432,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]})?tmpvar$1432:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'883:39-883:57','jquery.ceylon')),$$$cjl359.DataDescriptor(true,false,true,true,$$$cl1.$JsCallable(val$1431,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.delegate(/*NULL PARAM!*/selector$1425.valueOf()/*NULL PARAM!*/,eventsNative$1427));
        /*End dynamic block*/
    }
    $$jQueryAbs.delegateEvents=delegateEvents;
    delegateEvents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'events',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','delegateEvents']};};
    $$jQueryAbs.dequeue$defs$queueName=function(queueName$1433){return null;};
    function dequeue(queueName$1433){
        if(queueName$1433===undefined){queueName$1433=$$jQueryAbs.dequeue$defs$queueName(queueName$1433);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.dequeue(/*NULL PARAM!*/queueName$1433));
        /*End dynamic block*/
    }
    $$jQueryAbs.dequeue=dequeue;
    dequeue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','dequeue']};};
    $$jQueryAbs.detach$defs$selector=function(selector$1434){return null;};
    function detach(selector$1434){
        if(selector$1434===undefined){selector$1434=$$jQueryAbs.detach$defs$selector(selector$1434);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.detach(/*NULL PARAM!*/selector$1434));
        /*End dynamic block*/
    }
    $$jQueryAbs.detach=detach;
    detach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','detach']};};
    $$jQueryAbs.die$defs$eventData=function(eventData$1435,handler$1436){return null;};
    $$jQueryAbs.die$defs$handler=function(eventData$1435,handler$1436){return null;};
    function die(eventData$1435,handler$1436){
        if(eventData$1435===undefined){eventData$1435=$$jQueryAbs.die$defs$eventData(eventData$1435,handler$1436);}
        if(handler$1436===undefined){handler$1436=$$jQueryAbs.die$defs$handler(eventData$1435,handler$1436);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.die(/*NULL PARAM!*/eventData$1435/*NULL PARAM!*/,handler$1436));
        /*End dynamic block*/
    }
    $$jQueryAbs.die=die;
    die.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','die']};};
    function each(handler$1437){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.each(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1437,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
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
    function eq(index$1438){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.eq(/*NULL PARAM!*/index$1438));
        /*End dynamic block*/
    }
    $$jQueryAbs.eq=eq;
    eq.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','eq']};};
    $$jQueryAbs.error$defs$eventData=function(eventData$1439,handler$1440){return null;};
    $$jQueryAbs.error$defs$handler=function(eventData$1439,handler$1440){return null;};
    function error(eventData$1439,handler$1440){
        if(eventData$1439===undefined){eventData$1439=$$jQueryAbs.error$defs$eventData(eventData$1439,handler$1440);}
        if(handler$1440===undefined){handler$1440=$$jQueryAbs.error$defs$handler(eventData$1439,handler$1440);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.error(/*NULL PARAM!*/eventData$1439/*NULL PARAM!*/,handler$1440));
        /*End dynamic block*/
    }
    $$jQueryAbs.error=error;
    error.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','error']};};
    $$jQueryAbs.fadeIn$defs$duration=function(duration$1441,easing$1442,complete$1443){return null;};
    $$jQueryAbs.fadeIn$defs$easing=function(duration$1441,easing$1442,complete$1443){return null;};
    $$jQueryAbs.fadeIn$defs$complete=function(duration$1441,easing$1442,complete$1443){return null;};
    function fadeIn(duration$1441,easing$1442,complete$1443){
        if(duration$1441===undefined){duration$1441=$$jQueryAbs.fadeIn$defs$duration(duration$1441,easing$1442,complete$1443);}
        if(easing$1442===undefined){easing$1442=$$jQueryAbs.fadeIn$defs$easing(duration$1441,easing$1442,complete$1443);}
        if(complete$1443===undefined){complete$1443=$$jQueryAbs.fadeIn$defs$complete(duration$1441,easing$1442,complete$1443);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeIn(/*NULL PARAM!*/duration$1441/*NULL PARAM!*/,easing$1442/*NULL PARAM!*/,complete$1443));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeIn=fadeIn;
    fadeIn.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeIn']};};
    function fadeInOptions(options$1444){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/options$1444.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeInOptions=fadeInOptions;
    fadeInOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeInOptions']};};
    $$jQueryAbs.fadeOut$defs$duration=function(duration$1445,easing$1446,complete$1447){return null;};
    $$jQueryAbs.fadeOut$defs$easing=function(duration$1445,easing$1446,complete$1447){return null;};
    $$jQueryAbs.fadeOut$defs$complete=function(duration$1445,easing$1446,complete$1447){return null;};
    function fadeOut(duration$1445,easing$1446,complete$1447){
        if(duration$1445===undefined){duration$1445=$$jQueryAbs.fadeOut$defs$duration(duration$1445,easing$1446,complete$1447);}
        if(easing$1446===undefined){easing$1446=$$jQueryAbs.fadeOut$defs$easing(duration$1445,easing$1446,complete$1447);}
        if(complete$1447===undefined){complete$1447=$$jQueryAbs.fadeOut$defs$complete(duration$1445,easing$1446,complete$1447);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/duration$1445/*NULL PARAM!*/,easing$1446/*NULL PARAM!*/,complete$1447));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeOut=fadeOut;
    fadeOut.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeOut']};};
    function fadeOutOptions(options$1448){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/options$1448.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeOutOptions=fadeOutOptions;
    fadeOutOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeOutOptions']};};
    $$jQueryAbs.fadeTo$defs$easing=function(duration$1449,opacity$1450,easing$1451,complete$1452){return null;};
    $$jQueryAbs.fadeTo$defs$complete=function(duration$1449,opacity$1450,easing$1451,complete$1452){return null;};
    function fadeTo(duration$1449,opacity$1450,easing$1451,complete$1452){
        if(easing$1451===undefined){easing$1451=$$jQueryAbs.fadeTo$defs$easing(duration$1449,opacity$1450,easing$1451,complete$1452);}
        if(complete$1452===undefined){complete$1452=$$jQueryAbs.fadeTo$defs$complete(duration$1449,opacity$1450,easing$1451,complete$1452);}
        /*Begin dynamic block*/
        $$jQueryAbs.$native.fadeTo(/*NULL PARAM!*/duration$1449/*NULL PARAM!*/,opacity$1450.valueOf()/*NULL PARAM!*/,easing$1451/*NULL PARAM!*/,complete$1452);
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeTo=fadeTo;
    fadeTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'duration',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]},$an:function(){return[];}},{$nm:'opacity',$mt:'prm',$t:{t:$$$cl1.Float},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeTo']};};
    $$jQueryAbs.fadeToggle$defs$duration=function(duration$1453,easing$1454,complete$1455){return null;};
    $$jQueryAbs.fadeToggle$defs$easing=function(duration$1453,easing$1454,complete$1455){return null;};
    $$jQueryAbs.fadeToggle$defs$complete=function(duration$1453,easing$1454,complete$1455){return null;};
    function fadeToggle(duration$1453,easing$1454,complete$1455){
        if(duration$1453===undefined){duration$1453=$$jQueryAbs.fadeToggle$defs$duration(duration$1453,easing$1454,complete$1455);}
        if(easing$1454===undefined){easing$1454=$$jQueryAbs.fadeToggle$defs$easing(duration$1453,easing$1454,complete$1455);}
        if(complete$1455===undefined){complete$1455=$$jQueryAbs.fadeToggle$defs$complete(duration$1453,easing$1454,complete$1455);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/duration$1453/*NULL PARAM!*/,easing$1454/*NULL PARAM!*/,complete$1455));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeToggle=fadeToggle;
    fadeToggle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeToggle']};};
    function fadeToggleOptions(options$1456){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/options$1456.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeToggleOptions=fadeToggleOptions;
    fadeToggleOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeToggleOptions']};};
    function filter(selector$1457){
        
        var case$1458=selector$1457;
        if ($$$cl1.isOfType(selector$1457,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.filter(/*NULL PARAM!*/case$1458.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1457,{ t:'u', l:[{t:$$$cjd975.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.filter(/*NULL PARAM!*/case$1458.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.filter=filter;
    filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd975.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','filter']};};
    function filterCallback(callback$1459){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.filter(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1459,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.filterCallback=filterCallback;
    filterCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','filterCallback']};};
    function find(selector$1460){
        
        var case$1461=selector$1460;
        if ($$$cl1.isOfType(selector$1460,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.find(/*NULL PARAM!*/case$1461.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1460,{ t:'u', l:[{t:$$$cjd975.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.find(/*NULL PARAM!*/case$1461.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.find=find;
    find.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd975.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','find']};};
    function finish(queue$1462){
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
    $$jQueryAbs.focus$defs$eventData=function(eventData$1463,handler$1464){return null;};
    $$jQueryAbs.focus$defs$handler=function(eventData$1463,handler$1464){return null;};
    function focus(eventData$1463,handler$1464){
        if(eventData$1463===undefined){eventData$1463=$$jQueryAbs.focus$defs$eventData(eventData$1463,handler$1464);}
        if(handler$1464===undefined){handler$1464=$$jQueryAbs.focus$defs$handler(eventData$1463,handler$1464);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.focus(/*NULL PARAM!*/eventData$1463/*NULL PARAM!*/,handler$1464));
        /*End dynamic block*/
    }
    $$jQueryAbs.focus=focus;
    focus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','focus']};};
    $$jQueryAbs.focusin$defs$eventData=function(eventData$1465,handler$1466){return null;};
    $$jQueryAbs.focusin$defs$handler=function(eventData$1465,handler$1466){return null;};
    function focusin(eventData$1465,handler$1466){
        if(eventData$1465===undefined){eventData$1465=$$jQueryAbs.focusin$defs$eventData(eventData$1465,handler$1466);}
        if(handler$1466===undefined){handler$1466=$$jQueryAbs.focusin$defs$handler(eventData$1465,handler$1466);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.focusin(/*NULL PARAM!*/eventData$1465/*NULL PARAM!*/,handler$1466));
        /*End dynamic block*/
    }
    $$jQueryAbs.focusin=focusin;
    focusin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','focusin']};};
    $$jQueryAbs.focusout$defs$eventData=function(eventData$1467,handler$1468){return null;};
    $$jQueryAbs.focusout$defs$handler=function(eventData$1467,handler$1468){return null;};
    function focusout(eventData$1467,handler$1468){
        if(eventData$1467===undefined){eventData$1467=$$jQueryAbs.focusout$defs$eventData(eventData$1467,handler$1468);}
        if(handler$1468===undefined){handler$1468=$$jQueryAbs.focusout$defs$handler(eventData$1467,handler$1468);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.focusout(/*NULL PARAM!*/eventData$1467/*NULL PARAM!*/,handler$1468));
        /*End dynamic block*/
    }
    $$jQueryAbs.focusout=focusout;
    focusout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','focusout']};};
    $$jQueryAbs.get$defs$index=function(index$1469){return null;};
    function get(index$1469){
        if(index$1469===undefined){index$1469=$$jQueryAbs.get$defs$index(index$1469);}
        /*Begin dynamic block*/
        return $$$cjd975.Element($$jQueryAbs.$native.get(/*NULL PARAM!*/index$1469));
        /*End dynamic block*/
    }
    $$jQueryAbs.get=get;
    get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjd975.Element},$ps:[{$nm:'index',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','get']};};
    function has(selector$1470){
        
        var case$1471=selector$1470;
        if ($$$cl1.isOfType(selector$1470,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.has(/*NULL PARAM!*/case$1471.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1470,{t:$$$cjd975.Element})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.has(/*NULL PARAM!*/case$1471.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.has=has;
    has.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd975.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','has']};};
    function hasClass(className$1472){
        /*Begin dynamic block*/
        if($$jQueryAbs.$native.hasClass(/*NULL PARAM!*/className$1472.valueOf())){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAbs.hasClass=hasClass;
    hasClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hasClass']};};
    function getHeight(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$jQueryAbs.$native.height());
        /*End dynamic block*/
    }
    $$jQueryAbs.getHeight=getHeight;
    getHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getHeight']};};
    function setHeight(val$1473){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.height(/*NULL PARAM!*/val$1473));
        /*End dynamic block*/
    }
    $$jQueryAbs.setHeight=setHeight;
    setHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setHeight']};};
    function setHeightCallback(callback$1474){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.height(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1474,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setHeightCallback=setHeightCallback;
    setHeightCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setHeightCallback']};};
    $$jQueryAbs.hide$defs$duration=function(duration$1475,easing$1476,complete$1477){return null;};
    $$jQueryAbs.hide$defs$easing=function(duration$1475,easing$1476,complete$1477){return null;};
    $$jQueryAbs.hide$defs$complete=function(duration$1475,easing$1476,complete$1477){return null;};
    function hide(duration$1475,easing$1476,complete$1477){
        if(duration$1475===undefined){duration$1475=$$jQueryAbs.hide$defs$duration(duration$1475,easing$1476,complete$1477);}
        if(easing$1476===undefined){easing$1476=$$jQueryAbs.hide$defs$easing(duration$1475,easing$1476,complete$1477);}
        if(complete$1477===undefined){complete$1477=$$jQueryAbs.hide$defs$complete(duration$1475,easing$1476,complete$1477);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.hide(/*NULL PARAM!*/duration$1475/*NULL PARAM!*/,easing$1476/*NULL PARAM!*/,complete$1477));
        /*End dynamic block*/
    }
    $$jQueryAbs.hide=hide;
    hide.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hide']};};
    function hideOptions(options$1478){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.hide(/*NULL PARAM!*/options$1478.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.hideOptions=hideOptions;
    hideOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hideOptions']};};
    function hover(handlerIn$1479,handlerOut$1480){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.hover(/*NULL PARAM!*/$$$cl1.$JsCallable(handlerIn$1479,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,$$$cl1.$JsCallable(handlerOut$1480,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.hover=hover;
    hover.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handlerIn',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'handlerOut',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hover']};};
    function hoverSingle(handlerInOut$1481){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.hover(/*NULL PARAM!*/$$$cl1.$JsCallable(handlerInOut$1481,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.hoverSingle=hoverSingle;
    hoverSingle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handlerInOut',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hoverSingle']};};
    function getHtml(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$jQueryAbs.$native.html());
        /*End dynamic block*/
    }
    $$jQueryAbs.getHtml=getHtml;
    getHtml.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getHtml']};};
    function setHtml(html$1482){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$jQueryAbs.$native.html(/*NULL PARAM!*/html$1482.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.setHtml=setHtml;
    setHtml.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[{$nm:'html',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setHtml']};};
    function setHtmlCallback(callback$1483){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$jQueryAbs.$native.html(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1483,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setHtmlCallback=setHtmlCallback;
    setHtmlCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setHtmlCallback']};};
    function index(selector$1484){
        
        var case$1485=selector$1484;
        if ($$$cl1.isOfType(selector$1484,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return $$$cjl359.JSNumber($$jQueryAbs.$native.index(/*NULL PARAM!*/case$1485.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1484,{ t:'u', l:[{t:$$$cjd975.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return $$$cjl359.JSNumber($$jQueryAbs.$native.index(/*NULL PARAM!*/case$1485.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.index=index;
    index.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd975.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','index']};};
    function innerHeight(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$jQueryAbs.$native.innerHeight());
        /*End dynamic block*/
    }
    $$jQueryAbs.innerHeight=innerHeight;
    innerHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','innerHeight']};};
    function innerWidth(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$jQueryAbs.$native.innerWidth());
        /*End dynamic block*/
    }
    $$jQueryAbs.innerWidth=innerWidth;
    innerWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','innerWidth']};};
    function insertAfter(target$1486){
        
        var case$1487=target$1486;
        if ($$$cl1.isOfType(target$1486,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.insertAfter(/*NULL PARAM!*/case$1487.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$1486,{ t:'u', l:[{t:$$$cjd975.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.insertAfter(/*NULL PARAM!*/case$1487.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.insertAfter=insertAfter;
    insertAfter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd975.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','insertAfter']};};
    function insertBefore(target$1488){
        
        var case$1489=target$1488;
        if ($$$cl1.isOfType(target$1488,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.insertBefore(/*NULL PARAM!*/case$1489.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$1488,{ t:'u', l:[{t:$$$cjd975.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.insertBefore(/*NULL PARAM!*/case$1489.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.insertBefore=insertBefore;
    insertBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd975.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','insertBefore']};};
    function isSelector(selector$1490){
        
        var case$1491=selector$1490;
        if ($$$cl1.isOfType(selector$1490,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            if($$jQueryAbs.$native.is(/*NULL PARAM!*/case$1491.valueOf())){
                return true;
            }else {
                return false;
            }/*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1490,{ t:'u', l:[{t:$$$cjd975.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            if($$jQueryAbs.$native.is(/*NULL PARAM!*/case$1491.$native)){
                return true;
            }else {
                return false;
            }/*End dynamic block*/
        }
    }
    $$jQueryAbs.isSelector=isSelector;
    isSelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd975.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','isSelector']};};
    function isCallback(callback$1492){
        /*Begin dynamic block*/
        if($$jQueryAbs.$native.is(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1492,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Boolean}}))){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAbs.isCallback=isCallback;
    isCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Boolean}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','isCallback']};};
    function jquery(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$jQueryAbs.$native.jquery);
        /*End dynamic block*/
    }
    $$jQueryAbs.jquery=jquery;
    jquery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','jquery']};};
    $$jQueryAbs.keydown$defs$eventData=function(eventData$1493,handler$1494){return null;};
    $$jQueryAbs.keydown$defs$handler=function(eventData$1493,handler$1494){return null;};
    function keydown(eventData$1493,handler$1494){
        if(eventData$1493===undefined){eventData$1493=$$jQueryAbs.keydown$defs$eventData(eventData$1493,handler$1494);}
        if(handler$1494===undefined){handler$1494=$$jQueryAbs.keydown$defs$handler(eventData$1493,handler$1494);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.keydown(/*NULL PARAM!*/eventData$1493/*NULL PARAM!*/,handler$1494));
        /*End dynamic block*/
    }
    $$jQueryAbs.keydown=keydown;
    keydown.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','keydown']};};
    $$jQueryAbs.keypress$defs$eventData=function(eventData$1495,handler$1496){return null;};
    $$jQueryAbs.keypress$defs$handler=function(eventData$1495,handler$1496){return null;};
    function keypress(eventData$1495,handler$1496){
        if(eventData$1495===undefined){eventData$1495=$$jQueryAbs.keypress$defs$eventData(eventData$1495,handler$1496);}
        if(handler$1496===undefined){handler$1496=$$jQueryAbs.keypress$defs$handler(eventData$1495,handler$1496);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.keypress(/*NULL PARAM!*/eventData$1495/*NULL PARAM!*/,handler$1496));
        /*End dynamic block*/
    }
    $$jQueryAbs.keypress=keypress;
    keypress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','keypress']};};
    $$jQueryAbs.keyup$defs$eventData=function(eventData$1497,handler$1498){return null;};
    $$jQueryAbs.keyup$defs$handler=function(eventData$1497,handler$1498){return null;};
    function keyup(eventData$1497,handler$1498){
        if(eventData$1497===undefined){eventData$1497=$$jQueryAbs.keyup$defs$eventData(eventData$1497,handler$1498);}
        if(handler$1498===undefined){handler$1498=$$jQueryAbs.keyup$defs$handler(eventData$1497,handler$1498);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.keyup(/*NULL PARAM!*/eventData$1497/*NULL PARAM!*/,handler$1498));
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
        return $$$cjl359.JSNumber($$jQueryAbs.$native.length);
        /*End dynamic block*/
    }
    $$jQueryAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','length']};};
    function load(url$1499,data$1500,complete$1501){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.load(/*NULL PARAM!*/url$1499.valueOf()/*NULL PARAM!*/,data$1500/*NULL PARAM!*/,$$$cl1.$JsCallable(complete$1501,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.load=load;
    load.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','load']};};
    function map(callback$1502){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.map(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1502,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cjd975.Element},Element:{t:$$$cjd975.Element}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjd975.Element}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.map=map;
    map.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cjd975.Element},Element:{t:$$$cjd975.Element}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjd975.Element}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','map']};};
    $$jQueryAbs.mousedown$defs$eventData=function(eventData$1503,handler$1504){return null;};
    $$jQueryAbs.mousedown$defs$handler=function(eventData$1503,handler$1504){return null;};
    function mousedown(eventData$1503,handler$1504){
        if(eventData$1503===undefined){eventData$1503=$$jQueryAbs.mousedown$defs$eventData(eventData$1503,handler$1504);}
        if(handler$1504===undefined){handler$1504=$$jQueryAbs.mousedown$defs$handler(eventData$1503,handler$1504);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mousedown(/*NULL PARAM!*/eventData$1503/*NULL PARAM!*/,handler$1504));
        /*End dynamic block*/
    }
    $$jQueryAbs.mousedown=mousedown;
    mousedown.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mousedown']};};
    $$jQueryAbs.mouseenter$defs$eventData=function(eventData$1505,handler$1506){return null;};
    $$jQueryAbs.mouseenter$defs$handler=function(eventData$1505,handler$1506){return null;};
    function mouseenter(eventData$1505,handler$1506){
        if(eventData$1505===undefined){eventData$1505=$$jQueryAbs.mouseenter$defs$eventData(eventData$1505,handler$1506);}
        if(handler$1506===undefined){handler$1506=$$jQueryAbs.mouseenter$defs$handler(eventData$1505,handler$1506);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseenter(/*NULL PARAM!*/eventData$1505/*NULL PARAM!*/,handler$1506));
        /*End dynamic block*/
    }
    $$jQueryAbs.mouseenter=mouseenter;
    mouseenter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseenter']};};
    $$jQueryAbs.mouseleave$defs$eventData=function(eventData$1507,handler$1508){return null;};
    $$jQueryAbs.mouseleave$defs$handler=function(eventData$1507,handler$1508){return null;};
    function mouseleave(eventData$1507,handler$1508){
        if(eventData$1507===undefined){eventData$1507=$$jQueryAbs.mouseleave$defs$eventData(eventData$1507,handler$1508);}
        if(handler$1508===undefined){handler$1508=$$jQueryAbs.mouseleave$defs$handler(eventData$1507,handler$1508);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseleave(/*NULL PARAM!*/eventData$1507/*NULL PARAM!*/,handler$1508));
        /*End dynamic block*/
    }
    $$jQueryAbs.mouseleave=mouseleave;
    mouseleave.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseleave']};};
    $$jQueryAbs.mousemove$defs$eventData=function(eventData$1509,handler$1510){return null;};
    $$jQueryAbs.mousemove$defs$handler=function(eventData$1509,handler$1510){return null;};
    function mousemove(eventData$1509,handler$1510){
        if(eventData$1509===undefined){eventData$1509=$$jQueryAbs.mousemove$defs$eventData(eventData$1509,handler$1510);}
        if(handler$1510===undefined){handler$1510=$$jQueryAbs.mousemove$defs$handler(eventData$1509,handler$1510);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mousemove(/*NULL PARAM!*/eventData$1509/*NULL PARAM!*/,handler$1510));
        /*End dynamic block*/
    }
    $$jQueryAbs.mousemove=mousemove;
    mousemove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mousemove']};};
    $$jQueryAbs.mouseout$defs$eventData=function(eventData$1511,handler$1512){return null;};
    $$jQueryAbs.mouseout$defs$handler=function(eventData$1511,handler$1512){return null;};
    function mouseout(eventData$1511,handler$1512){
        if(eventData$1511===undefined){eventData$1511=$$jQueryAbs.mouseout$defs$eventData(eventData$1511,handler$1512);}
        if(handler$1512===undefined){handler$1512=$$jQueryAbs.mouseout$defs$handler(eventData$1511,handler$1512);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseout(/*NULL PARAM!*/eventData$1511/*NULL PARAM!*/,handler$1512));
        /*End dynamic block*/
    }
    $$jQueryAbs.mouseout=mouseout;
    mouseout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseout']};};
    $$jQueryAbs.mouseover$defs$eventData=function(eventData$1513,handler$1514){return null;};
    $$jQueryAbs.mouseover$defs$handler=function(eventData$1513,handler$1514){return null;};
    function mouseover(eventData$1513,handler$1514){
        if(eventData$1513===undefined){eventData$1513=$$jQueryAbs.mouseover$defs$eventData(eventData$1513,handler$1514);}
        if(handler$1514===undefined){handler$1514=$$jQueryAbs.mouseover$defs$handler(eventData$1513,handler$1514);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseover(/*NULL PARAM!*/eventData$1513/*NULL PARAM!*/,handler$1514));
        /*End dynamic block*/
    }
    $$jQueryAbs.mouseover=mouseover;
    mouseover.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseover']};};
    $$jQueryAbs.mouseup$defs$eventData=function(eventData$1515,handler$1516){return null;};
    $$jQueryAbs.mouseup$defs$handler=function(eventData$1515,handler$1516){return null;};
    function mouseup(eventData$1515,handler$1516){
        if(eventData$1515===undefined){eventData$1515=$$jQueryAbs.mouseup$defs$eventData(eventData$1515,handler$1516);}
        if(handler$1516===undefined){handler$1516=$$jQueryAbs.mouseup$defs$handler(eventData$1515,handler$1516);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseup(/*NULL PARAM!*/eventData$1515/*NULL PARAM!*/,handler$1516));
        /*End dynamic block*/
    }
    $$jQueryAbs.mouseup=mouseup;
    mouseup.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseup']};};
    $$jQueryAbs.next$defs$selector=function(selector$1517){return null;};
    function next(selector$1517){
        if(selector$1517===undefined){selector$1517=$$jQueryAbs.next$defs$selector(selector$1517);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.next(/*NULL PARAM!*/selector$1517));
        /*End dynamic block*/
    }
    $$jQueryAbs.next=next;
    next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','next']};};
    $$jQueryAbs.nextAll$defs$selector=function(selector$1518){return null;};
    function nextAll(selector$1518){
        if(selector$1518===undefined){selector$1518=$$jQueryAbs.nextAll$defs$selector(selector$1518);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.nextAll(/*NULL PARAM!*/selector$1518));
        /*End dynamic block*/
    }
    $$jQueryAbs.nextAll=nextAll;
    nextAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','nextAll']};};
    $$jQueryAbs.nextUntil$defs$selector=function(selector$1519,filter$1520){return null;};
    $$jQueryAbs.nextUntil$defs$filter=function(selector$1519,filter$1520){return null;};
    function nextUntil(selector$1519,filter$1520){
        if(selector$1519===undefined){selector$1519=$$jQueryAbs.nextUntil$defs$selector(selector$1519,filter$1520);}
        if(filter$1520===undefined){filter$1520=$$jQueryAbs.nextUntil$defs$filter(selector$1519,filter$1520);}
        
        var case$1521=selector$1519;
        if ($$$cl1.isOfType(selector$1519,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.nextUntil(/*NULL PARAM!*/case$1521.valueOf()/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1334:45-1334:45','jquery.ceylon'):f)));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1519,{t:$$$cjd975.Element})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.nextUntil(/*NULL PARAM!*/case$1521.$native/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1339:52-1339:52','jquery.ceylon'):f)));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1519,{t:$$$cl1.Null})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.nextUntil(/*NULL PARAM!*/null/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1344:41-1344:41','jquery.ceylon'):f)));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.nextUntil=nextUntil;
    nextUntil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd975.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','nextUntil']};};
    function not(selector$1522){
        
        var case$1523=selector$1522;
        if ($$$cl1.isOfType(selector$1522,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.not(/*NULL PARAM!*/case$1523.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1522,{ t:'u', l:[{t:JQuery},{t:$$$cjd975.Element}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.not(/*NULL PARAM!*/case$1523.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.not=not;
    not.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cjd975.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','not']};};
    $$jQueryAbs.off$defs$handler=function(events$1524,selector$1525,handler$1526){return null;};
    function off(events$1524,selector$1525,handler$1526){
        if(handler$1526===undefined){handler$1526=$$jQueryAbs.off$defs$handler(events$1524,selector$1525,handler$1526);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseover(/*NULL PARAM!*/(typeof eventData==='undefined'||eventData===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: eventData")),'1366:34-1366:42','jquery.ceylon'):eventData)/*NULL PARAM!*/,handler$1526));
        /*End dynamic block*/
    }
    $$jQueryAbs.off=off;
    off.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','off']};};
    function getOffset(){
        /*Begin dynamic block*/
        return (tmpvar$1527=(/*NULL PARAM!*/tmpvar$1528=$$jQueryAbs.$native.offset(),tmpvar$1529=(typeof Offset==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type Offset")),'1372:10-1372:15','jquery.ceylon'):Offset),tmpvar$1529.$$===undefined?new tmpvar$1529(tmpvar$1528):tmpvar$1529(tmpvar$1528)),$$$cl1.isOfType(tmpvar$1527,{t:$$$cl1.Anything})?tmpvar$1527:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'1372:10-1372:32','jquery.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAbs.getOffset=getOffset;
    getOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Coordinates},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getOffset']};};
    $$jQueryAbs.setOffset$defs$offset=function(offset$1530){return null;};
    function setOffset(offset$1530){
        if(offset$1530===undefined){offset$1530=$$jQueryAbs.setOffset$defs$offset(offset$1530);}
        var o$1531;
        if((o$1531=offset$1530)!==null){
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.offset(/*NULL PARAM!*/o$1531));
            /*End dynamic block*/
        }else {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.offset());
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.setOffset=setOffset;
    setOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'offset',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Coordinates}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setOffset']};};
    function setOffsetCallback(offset$1532){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.offset(/*NULL PARAM!*/$$$cl1.$JsCallable(offset$1532,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Coordinates},Element:{t:Coordinates}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:Coordinates}]}}},Return:{t:Coordinates}})));
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
    $$jQueryAbs.on$defs$selector=function(events$1533,selector$1534,data$1535,handler$1536){return null;};
    $$jQueryAbs.on$defs$data=function(events$1533,selector$1534,data$1535,handler$1536){return null;};
    $$jQueryAbs.on$defs$handler=function(events$1533,selector$1534,data$1535,handler$1536){return null;};
    function on(events$1533,selector$1534,data$1535,handler$1536){
        if(selector$1534===undefined){selector$1534=$$jQueryAbs.on$defs$selector(events$1533,selector$1534,data$1535,handler$1536);}
        if(data$1535===undefined){data$1535=$$jQueryAbs.on$defs$data(events$1533,selector$1534,data$1535,handler$1536);}
        if(handler$1536===undefined){handler$1536=$$jQueryAbs.on$defs$handler(events$1533,selector$1534,data$1535,handler$1536);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.on(/*NULL PARAM!*/events$1533.valueOf()/*NULL PARAM!*/,selector$1534/*NULL PARAM!*/,data$1535/*NULL PARAM!*/,handler$1536));
        /*End dynamic block*/
    }
    $$jQueryAbs.on=on;
    on.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','on']};};
    $$jQueryAbs.one$defs$selector=function(events$1537,selector$1538,data$1539,handler$1540){return null;};
    $$jQueryAbs.one$defs$data=function(events$1537,selector$1538,data$1539,handler$1540){return null;};
    $$jQueryAbs.one$defs$handler=function(events$1537,selector$1538,data$1539,handler$1540){return null;};
    function one(events$1537,selector$1538,data$1539,handler$1540){
        if(selector$1538===undefined){selector$1538=$$jQueryAbs.one$defs$selector(events$1537,selector$1538,data$1539,handler$1540);}
        if(data$1539===undefined){data$1539=$$jQueryAbs.one$defs$data(events$1537,selector$1538,data$1539,handler$1540);}
        if(handler$1540===undefined){handler$1540=$$jQueryAbs.one$defs$handler(events$1537,selector$1538,data$1539,handler$1540);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.one(/*NULL PARAM!*/events$1537.valueOf()/*NULL PARAM!*/,selector$1538/*NULL PARAM!*/,data$1539/*NULL PARAM!*/,handler$1540));
        /*End dynamic block*/
    }
    $$jQueryAbs.one=one;
    one.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','one']};};
    $$jQueryAbs.outerHeight$defs$includeMargin=function(includeMargin$1541){return null;};
    function outerHeight(includeMargin$1541){
        if(includeMargin$1541===undefined){includeMargin$1541=$$jQueryAbs.outerHeight$defs$includeMargin(includeMargin$1541);}
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$jQueryAbs.$native.outerHeight(/*NULL PARAM!*/includeMargin$1541));
        /*End dynamic block*/
    }
    $$jQueryAbs.outerHeight=outerHeight;
    outerHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[{$nm:'includeMargin',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','outerHeight']};};
    $$jQueryAbs.outerWidth$defs$includeMargin=function(includeMargin$1542){return null;};
    function outerWidth(includeMargin$1542){
        if(includeMargin$1542===undefined){includeMargin$1542=$$jQueryAbs.outerWidth$defs$includeMargin(includeMargin$1542);}
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$jQueryAbs.$native.outerWidth(/*NULL PARAM!*/includeMargin$1542));
        /*End dynamic block*/
    }
    $$jQueryAbs.outerWidth=outerWidth;
    outerWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[{$nm:'includeMargin',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','outerWidth']};};
    $$jQueryAbs.parent$defs$selector=function(selector$1543){return null;};
    function parent(selector$1543){
        if(selector$1543===undefined){selector$1543=$$jQueryAbs.parent$defs$selector(selector$1543);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.parent(/*NULL PARAM!*/selector$1543));
        /*End dynamic block*/
    }
    $$jQueryAbs.parent=parent;
    parent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','parent']};};
    $$jQueryAbs.parents$defs$selector=function(selector$1544){return null;};
    function parents(selector$1544){
        if(selector$1544===undefined){selector$1544=$$jQueryAbs.parents$defs$selector(selector$1544);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.parents(/*NULL PARAM!*/selector$1544));
        /*End dynamic block*/
    }
    $$jQueryAbs.parents=parents;
    parents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','parents']};};
    $$jQueryAbs.parentsUntil$defs$selector=function(selector$1545,filter$1546){return null;};
    $$jQueryAbs.parentsUntil$defs$filter=function(selector$1545,filter$1546){return null;};
    function parentsUntil(selector$1545,filter$1546){
        if(selector$1545===undefined){selector$1545=$$jQueryAbs.parentsUntil$defs$selector(selector$1545,filter$1546);}
        if(filter$1546===undefined){filter$1546=$$jQueryAbs.parentsUntil$defs$filter(selector$1545,filter$1546);}
        
        var case$1547=selector$1545;
        if ($$$cl1.isOfType(selector$1545,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.parents(/*NULL PARAM!*/case$1547.valueOf()/*NULL PARAM!*/,filter$1546));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1545,{t:$$$cjd975.Element})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.parents(/*NULL PARAM!*/case$1547.$native/*NULL PARAM!*/,filter$1546));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1545,{t:$$$cl1.Null})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.parents(/*NULL PARAM!*/null/*NULL PARAM!*/,filter$1546));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.parentsUntil=parentsUntil;
    parentsUntil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd975.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','parentsUntil']};};
    function position(){
        /*Begin dynamic block*/
        return Coordinates($$jQueryAbs.$native.position());
        /*End dynamic block*/
    }
    $$jQueryAbs.position=position;
    position.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Coordinates},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','position']};};
    function prepend(content$1548){
        if(content$1548===undefined){content$1548=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl359.JSFunction($$jQueryAbs.$native.prepend).$apply(null,(tmpvar$1549=(function(){
            var lst$1550=[];
            var it$1551=content$1548.iterator();
            var elem$1552;
            while ((elem$1552=it$1551.next())!==$$$cl1.getFinished()){
                lst$1550.push(elem$1552.$native);
            }
            return $$$cl1.ArraySequence(lst$1550);
        }()),$$$cl1.isOfType(tmpvar$1549,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1549:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'1463:56-1463:70','jquery.ceylon'))));
        /*End dynamic block*/
    }
    $$jQueryAbs.prepend=prepend;
    prepend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{ t:'u', l:[{t:$$$cjd975.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prepend']};};
    function prependHTML(content$1553){
        if(content$1553===undefined){content$1553=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prepend(/*NULL PARAM!*/content$1553));
        /*End dynamic block*/
    }
    $$jQueryAbs.prependHTML=prependHTML;
    prependHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prependHTML']};};
    function prependCallback(callback$1554){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prepend(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1554,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.prependCallback=prependCallback;
    prependCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prependCallback']};};
    function prependTo(target$1555){
        
        var case$1556=target$1555;
        if ($$$cl1.isOfType(target$1555,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.prependTo(/*NULL PARAM!*/case$1556.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$1555,{ t:'u', l:[{t:$$$cjd975.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.prependTo(/*NULL PARAM!*/case$1556.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.prependTo=prependTo;
    prependTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd975.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prependTo']};};
    $$jQueryAbs.prev$defs$selector=function(selector$1557){return null;};
    function prev(selector$1557){
        if(selector$1557===undefined){selector$1557=$$jQueryAbs.prev$defs$selector(selector$1557);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prev(/*NULL PARAM!*/selector$1557));
        /*End dynamic block*/
    }
    $$jQueryAbs.prev=prev;
    prev.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prev']};};
    $$jQueryAbs.prevAll$defs$selector=function(selector$1558){return null;};
    function prevAll(selector$1558){
        if(selector$1558===undefined){selector$1558=$$jQueryAbs.prevAll$defs$selector(selector$1558);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prevAll(/*NULL PARAM!*/selector$1558));
        /*End dynamic block*/
    }
    $$jQueryAbs.prevAll=prevAll;
    prevAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prevAll']};};
    $$jQueryAbs.prevUntil$defs$selector=function(selector$1559,filter$1560){return null;};
    $$jQueryAbs.prevUntil$defs$filter=function(selector$1559,filter$1560){return null;};
    function prevUntil(selector$1559,filter$1560){
        if(selector$1559===undefined){selector$1559=$$jQueryAbs.prevUntil$defs$selector(selector$1559,filter$1560);}
        if(filter$1560===undefined){filter$1560=$$jQueryAbs.prevUntil$defs$filter(selector$1559,filter$1560);}
        
        var case$1561=selector$1559;
        if ($$$cl1.isOfType(selector$1559,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.prevUntil(/*NULL PARAM!*/case$1561.valueOf()/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1509:45-1509:45','jquery.ceylon'):f)));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1559,{t:$$$cjd975.Element})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.prevUntil(/*NULL PARAM!*/case$1561.$native/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1514:52-1514:52','jquery.ceylon'):f)));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1559,{t:$$$cl1.Null})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.prevUntil(/*NULL PARAM!*/null/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1519:41-1519:41','jquery.ceylon'):f)));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.prevUntil=prevUntil;
    prevUntil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd975.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prevUntil']};};
    $$jQueryAbs.promise$defs$type=function(type$1562,target$1563){return $$$cl1.String("fx",2);};
    $$jQueryAbs.promise$defs$target=function(type$1562,target$1563){return null;};
    function promise(type$1562,target$1563){
        if(type$1562===undefined){type$1562=$$jQueryAbs.promise$defs$type(type$1562,target$1563);}
        if(target$1563===undefined){target$1563=$$jQueryAbs.promise$defs$target(type$1562,target$1563);}
        var t$1564;
        if((t$1564=target$1563)!==null){
            /*Begin dynamic block*/
            return Promise($$jQueryAbs.$native.promise(/*NULL PARAM!*/type$1562.valueOf()/*NULL PARAM!*/,t$1564.$native));
            /*End dynamic block*/
        }else {
            /*Begin dynamic block*/
            return Promise($$jQueryAbs.$native.promise(/*NULL PARAM!*/type$1562.valueOf()));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.promise=promise;
    promise.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'type',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'target',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSObject}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','promise']};};
    function getProp(name$1565){
        /*Begin dynamic block*/
        var prop$1566=$$jQueryAbs.$native.prop(/*NULL PARAM!*/name$1565.valueOf());
        $prop$getProp$1566={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQueryAbs','$m','getProp','$at','prop']};}};
        $prop$getProp$1566.get=function(){return prop$1566};
        if(prop$1566.instanceof(/*NULL PARAM!*/(typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'1539:25-1539:30','jquery.ceylon'):String))){
            return $$$cjl359.JSString(prop$1566);
        }else {
            if(prop$1566){
                return true;
            }else {
                return false;
            }
        }/*End dynamic block*/
    }
    $$jQueryAbs.getProp=getProp;
    getProp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cjl359.JSString},{t:$$$cl1.Boolean}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getProp']};};
    function setProp(propertyName$1567,val$1568){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prop(/*NULL PARAM!*/propertyName$1567.valueOf()/*NULL PARAM!*/,val$1568));
        /*End dynamic block*/
    }
    $$jQueryAbs.setProp=setProp;
    setProp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setProp']};};
    function setPropEntries(properties$1569){
        if(properties$1569===undefined){properties$1569=$$$cl1.getEmpty();}
        var propertiesNative$1570=$$$cjl359.createJSObject();
        var it$1571 = properties$1569.iterator();
        var item$1572;while ((item$1572=it$1571.next())!==$$$cl1.getFinished()){
            var key$1573=item$1572.key;
            var val$1574=item$1572.item;
            /*Begin dynamic block*/
            $$$cjl359.objectDefineProperty(propertiesNative$1570,(tmpvar$1575=$$$cjl359.createJSString(key$1573),$$$cl1.isOfType(tmpvar$1575,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]})?tmpvar$1575:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'1559:43-1559:61','jquery.ceylon')),$$$cjl359.DataDescriptor(true,false,true,true,val$1574));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prop(/*NULL PARAM!*/propertiesNative$1570));
        /*End dynamic block*/
    }
    $$jQueryAbs.setPropEntries=setPropEntries;
    setPropEntries.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer},{t:$$$cl1.Boolean}]}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setPropEntries']};};
    function setPropCallback(propertyName$1576,callback$1577){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prop(/*NULL PARAM!*/propertyName$1576.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1577,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setPropCallback=setPropCallback;
    setPropCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setPropCallback']};};
    $$jQueryAbs.pushStack$defs$name=function(elements$1578,name$1579,arguments$1580){return null;};
    $$jQueryAbs.pushStack$defs$arguments=function(elements$1578,name$1579,arguments$1580){return null;};
    function pushStack(elements$1578,name$1579,arguments$1580){
        if(name$1579===undefined){name$1579=$$jQueryAbs.pushStack$defs$name(elements$1578,name$1579,arguments$1580);}
        if(arguments$1580===undefined){arguments$1580=$$jQueryAbs.pushStack$defs$arguments(elements$1578,name$1579,arguments$1580);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.pushStack(/*NULL PARAM!*/(function(){
            var lst$1581=[];
            var it$1582=elements$1578.iterator();
            var elem$1583;
            while ((elem$1583=it$1582.next())!==$$$cl1.getFinished()){
                lst$1581.push(elem$1583.$native);
            }
            return $$$cl1.ArraySequence(lst$1581);
        }())/*NULL PARAM!*/,name$1579/*NULL PARAM!*/,arguments$1580));
        /*End dynamic block*/
    }
    $$jQueryAbs.pushStack=pushStack;
    pushStack.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cjd975.Element}}},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'arguments',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','pushStack']};};
    $$jQueryAbs.getQueue$defs$queueName=function(queueName$1584){return $$$cl1.String("fx",2);};
    function getQueue(queueName$1584){
        if(queueName$1584===undefined){queueName$1584=$$jQueryAbs.getQueue$defs$queueName(queueName$1584);}
        /*Begin dynamic block*/
        return $$$cjl359.JSArray($$jQueryAbs.$native.queue(/*NULL PARAM!*/queueName$1584.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.getQueue=getQueue;
    getQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSArray},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns an array of functions",29)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getQueue']};};
    $$jQueryAbs.setQueue$defs$queueName=function(queueName$1585,newQueue$1586){return $$$cl1.String("fx",2);};
    function setQueue(queueName$1585,newQueue$1586){
        if(queueName$1585===undefined){queueName$1585=$$jQueryAbs.setQueue$defs$queueName(queueName$1585,newQueue$1586);}
        if(newQueue$1586===undefined){newQueue$1586=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.queue(/*NULL PARAM!*/queueName$1585.valueOf()/*NULL PARAM!*/,newQueue$1586));
        /*End dynamic block*/
    }
    $$jQueryAbs.setQueue=setQueue;
    setQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'newQueue',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setQueue']};};
    $$jQueryAbs.setQueueCallback$defs$queueName=function(next$1587,queueName$1588){return $$$cl1.String("fx",2);};
    function setQueueCallback(next$1587,queueName$1588){
        if(queueName$1588===undefined){queueName$1588=$$jQueryAbs.setQueueCallback$defs$queueName(next$1587,queueName$1588);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.queue(/*NULL PARAM!*/queueName$1588.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(next$1587,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setQueueCallback=setQueueCallback;
    setQueueCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'next',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setQueueCallback']};};
    function ready(handler$1589){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ready(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1589,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ready=ready;
    ready.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ready']};};
    $$jQueryAbs.remove$defs$selector=function(selector$1590){return null;};
    function remove(selector$1590){
        if(selector$1590===undefined){selector$1590=$$jQueryAbs.remove$defs$selector(selector$1590);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.remove(/*NULL PARAM!*/selector$1590));
        /*End dynamic block*/
    }
    $$jQueryAbs.remove=remove;
    remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','remove']};};
    function removeAttr(attributeName$1591){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.removeAttr(/*NULL PARAM!*/attributeName$1591.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.removeAttr=removeAttr;
    removeAttr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeAttr']};};
    function removeClass(className$1592){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.removeClass(/*NULL PARAM!*/className$1592.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.removeClass=removeClass;
    removeClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeClass']};};
    function removeClassCallback(callback$1593){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.removeClass(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1593,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.removeClassCallback=removeClassCallback;
    removeClassCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeClassCallback']};};
    function removeData(names$1594){
        if(names$1594===undefined){names$1594=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.removeData(/*NULL PARAM!*/names$1594));
        /*End dynamic block*/
    }
    $$jQueryAbs.removeData=removeData;
    removeData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'names',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeData']};};
    function removeProp(propertyName$1595){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.removeProp(/*NULL PARAM!*/propertyName$1595.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.removeProp=removeProp;
    removeProp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeProp']};};
    function replaceAll(target$1596){
        
        var case$1597=target$1596;
        if ($$$cl1.isOfType(target$1596,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.replaceAll(/*NULL PARAM!*/case$1597.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$1596,{ t:'u', l:[{t:JQuery},{t:$$$cjd975.Element}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.replaceAll(/*NULL PARAM!*/case$1597.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.replaceAll=replaceAll;
    replaceAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cjd975.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','replaceAll']};};
    function replaceWith(newContent$1598){
        
        var case$1599=newContent$1598;
        if ($$$cl1.isOfType(newContent$1598,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.replaceWith(/*NULL PARAM!*/case$1599.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(newContent$1598,{ t:'u', l:[{t:JQuery},{t:$$$cjd975.Element}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.replaceWith(/*NULL PARAM!*/case$1599.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.replaceWith=replaceWith;
    replaceWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'newContent',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cjd975.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','replaceWith']};};
    function replaceWithCallback(callback$1600){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.replaceWith(/*NULL PARAM!*/callback$1600));
        /*End dynamic block*/
    }
    $$jQueryAbs.replaceWithCallback=replaceWithCallback;
    replaceWithCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cjd975.Element}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','replaceWithCallback']};};
    $$jQueryAbs.resize$defs$eventData=function(handler$1601,eventData$1602){return null;};
    function resize(handler$1601,eventData$1602){
        if(eventData$1602===undefined){eventData$1602=$$jQueryAbs.resize$defs$eventData(handler$1601,eventData$1602);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.resize(/*NULL PARAM!*/eventData$1602/*NULL PARAM!*/,$$$cl1.$JsCallable(handler$1601,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.resize=resize;
    resize.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','resize']};};
    $$jQueryAbs.scroll$defs$eventData=function(handler$1603,eventData$1604){return null;};
    function scroll(handler$1603,eventData$1604){
        if(eventData$1604===undefined){eventData$1604=$$jQueryAbs.scroll$defs$eventData(handler$1603,eventData$1604);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.scroll(/*NULL PARAM!*/eventData$1604/*NULL PARAM!*/,$$$cl1.$JsCallable(handler$1603,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.scroll=scroll;
    scroll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','scroll']};};
    function getScrollLeft(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$jQueryAbs.$native.scrollLeft());
        /*End dynamic block*/
    }
    $$jQueryAbs.getScrollLeft=getScrollLeft;
    getScrollLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getScrollLeft']};};
    function setScrollLeft(val$1605){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.scrollLeft(/*NULL PARAM!*/val$1605));
        /*End dynamic block*/
    }
    $$jQueryAbs.setScrollLeft=setScrollLeft;
    setScrollLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setScrollLeft']};};
    function getScrollTop(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$jQueryAbs.$native.scrollTop());
        /*End dynamic block*/
    }
    $$jQueryAbs.getScrollTop=getScrollTop;
    getScrollTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getScrollTop']};};
    function setScrollTop(val$1606){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.scrollTop(/*NULL PARAM!*/val$1606));
        /*End dynamic block*/
    }
    $$jQueryAbs.setScrollTop=setScrollTop;
    setScrollTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setScrollTop']};};
    $$jQueryAbs.select$defs$eventData=function(handler$1607,eventData$1608){return null;};
    function select(handler$1607,eventData$1608){
        if(eventData$1608===undefined){eventData$1608=$$jQueryAbs.select$defs$eventData(handler$1607,eventData$1608);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.select(/*NULL PARAM!*/eventData$1608/*NULL PARAM!*/,$$$cl1.$JsCallable(handler$1607,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.select=select;
    select.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','select']};};
    function serialize(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$jQueryAbs.$native.serialize());
        /*End dynamic block*/
    }
    $$jQueryAbs.serialize=serialize;
    serialize.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','serialize']};};
    function serializeArray(){
        /*Begin dynamic block*/
        return $$$cjl359.JSArray($$jQueryAbs.$native.serializeArray());
        /*End dynamic block*/
    }
    $$jQueryAbs.serializeArray=serializeArray;
    serializeArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSArray},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','serializeArray']};};
    $$jQueryAbs.show$defs$duration=function(duration$1609,easing$1610,complete$1611){return null;};
    $$jQueryAbs.show$defs$easing=function(duration$1609,easing$1610,complete$1611){return null;};
    $$jQueryAbs.show$defs$complete=function(duration$1609,easing$1610,complete$1611){return null;};
    function show(duration$1609,easing$1610,complete$1611){
        if(duration$1609===undefined){duration$1609=$$jQueryAbs.show$defs$duration(duration$1609,easing$1610,complete$1611);}
        if(easing$1610===undefined){easing$1610=$$jQueryAbs.show$defs$easing(duration$1609,easing$1610,complete$1611);}
        if(complete$1611===undefined){complete$1611=$$jQueryAbs.show$defs$complete(duration$1609,easing$1610,complete$1611);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.show(/*NULL PARAM!*/duration$1609/*NULL PARAM!*/,easing$1610/*NULL PARAM!*/,complete$1611));
        /*End dynamic block*/
    }
    $$jQueryAbs.show=show;
    show.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','show']};};
    function showOptions(options$1612){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.show(/*NULL PARAM!*/options$1612.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.showOptions=showOptions;
    showOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','showOptions']};};
    $$jQueryAbs.siblings$defs$siblings=function(siblings$1613){return null;};
    function siblings(siblings$1613){
        if(siblings$1613===undefined){siblings$1613=$$jQueryAbs.siblings$defs$siblings(siblings$1613);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.siblings(/*NULL PARAM!*/siblings$1613));
        /*End dynamic block*/
    }
    $$jQueryAbs.siblings=siblings;
    siblings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'siblings',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','siblings']};};
    $$jQueryAbs.slice$defs$end=function(start$1614,end$1615){return null;};
    function slice(start$1614,end$1615){
        if(end$1615===undefined){end$1615=$$jQueryAbs.slice$defs$end(start$1614,end$1615);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slice(/*NULL PARAM!*/start$1614/*NULL PARAM!*/,end$1615));
        /*End dynamic block*/
    }
    $$jQueryAbs.slice=slice;
    slice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'start',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'end',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slice']};};
    $$jQueryAbs.slideDown$defs$duration=function(duration$1616,easing$1617,complete$1618){return null;};
    $$jQueryAbs.slideDown$defs$easing=function(duration$1616,easing$1617,complete$1618){return null;};
    $$jQueryAbs.slideDown$defs$complete=function(duration$1616,easing$1617,complete$1618){return null;};
    function slideDown(duration$1616,easing$1617,complete$1618){
        if(duration$1616===undefined){duration$1616=$$jQueryAbs.slideDown$defs$duration(duration$1616,easing$1617,complete$1618);}
        if(easing$1617===undefined){easing$1617=$$jQueryAbs.slideDown$defs$easing(duration$1616,easing$1617,complete$1618);}
        if(complete$1618===undefined){complete$1618=$$jQueryAbs.slideDown$defs$complete(duration$1616,easing$1617,complete$1618);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideDown(/*NULL PARAM!*/duration$1616/*NULL PARAM!*/,easing$1617/*NULL PARAM!*/,complete$1618));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideDown=slideDown;
    slideDown.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideDown']};};
    function slideDownOptions(options$1619){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideDown(/*NULL PARAM!*/options$1619.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideDownOptions=slideDownOptions;
    slideDownOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideDownOptions']};};
    $$jQueryAbs.slideToggle$defs$duration=function(duration$1620,easing$1621,complete$1622){return null;};
    $$jQueryAbs.slideToggle$defs$easing=function(duration$1620,easing$1621,complete$1622){return null;};
    $$jQueryAbs.slideToggle$defs$complete=function(duration$1620,easing$1621,complete$1622){return null;};
    function slideToggle(duration$1620,easing$1621,complete$1622){
        if(duration$1620===undefined){duration$1620=$$jQueryAbs.slideToggle$defs$duration(duration$1620,easing$1621,complete$1622);}
        if(easing$1621===undefined){easing$1621=$$jQueryAbs.slideToggle$defs$easing(duration$1620,easing$1621,complete$1622);}
        if(complete$1622===undefined){complete$1622=$$jQueryAbs.slideToggle$defs$complete(duration$1620,easing$1621,complete$1622);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideToggle(/*NULL PARAM!*/duration$1620/*NULL PARAM!*/,easing$1621/*NULL PARAM!*/,complete$1622));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideToggle=slideToggle;
    slideToggle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideToggle']};};
    function slideToggleOptions(options$1623){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideToggle(/*NULL PARAM!*/options$1623.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideToggleOptions=slideToggleOptions;
    slideToggleOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideToggleOptions']};};
    $$jQueryAbs.slideUp$defs$duration=function(duration$1624,easing$1625,complete$1626){return null;};
    $$jQueryAbs.slideUp$defs$easing=function(duration$1624,easing$1625,complete$1626){return null;};
    $$jQueryAbs.slideUp$defs$complete=function(duration$1624,easing$1625,complete$1626){return null;};
    function slideUp(duration$1624,easing$1625,complete$1626){
        if(duration$1624===undefined){duration$1624=$$jQueryAbs.slideUp$defs$duration(duration$1624,easing$1625,complete$1626);}
        if(easing$1625===undefined){easing$1625=$$jQueryAbs.slideUp$defs$easing(duration$1624,easing$1625,complete$1626);}
        if(complete$1626===undefined){complete$1626=$$jQueryAbs.slideUp$defs$complete(duration$1624,easing$1625,complete$1626);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideUp(/*NULL PARAM!*/duration$1624/*NULL PARAM!*/,easing$1625/*NULL PARAM!*/,complete$1626));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideUp=slideUp;
    slideUp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideUp']};};
    function slideUpOptions(options$1627){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideUp(/*NULL PARAM!*/options$1627.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideUpOptions=slideUpOptions;
    slideUpOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideUpOptions']};};
    $$jQueryAbs.stop$defs$clearQueue=function(clearQueue$1628,jumpToEnd$1629){return null;};
    $$jQueryAbs.stop$defs$jumpToEnd=function(clearQueue$1628,jumpToEnd$1629){return null;};
    function stop(clearQueue$1628,jumpToEnd$1629){
        if(clearQueue$1628===undefined){clearQueue$1628=$$jQueryAbs.stop$defs$clearQueue(clearQueue$1628,jumpToEnd$1629);}
        if(jumpToEnd$1629===undefined){jumpToEnd$1629=$$jQueryAbs.stop$defs$jumpToEnd(clearQueue$1628,jumpToEnd$1629);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.stop(/*NULL PARAM!*/clearQueue$1628/*NULL PARAM!*/,jumpToEnd$1629));
        /*End dynamic block*/
    }
    $$jQueryAbs.stop=stop;
    stop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'clearQueue',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}},{$nm:'jumpToEnd',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','stop']};};
    $$jQueryAbs.stopName$defs$clearQueue=function(queue$1630,clearQueue$1631,jumpToEnd$1632){return null;};
    $$jQueryAbs.stopName$defs$jumpToEnd=function(queue$1630,clearQueue$1631,jumpToEnd$1632){return null;};
    function stopName(queue$1630,clearQueue$1631,jumpToEnd$1632){
        if(clearQueue$1631===undefined){clearQueue$1631=$$jQueryAbs.stopName$defs$clearQueue(queue$1630,clearQueue$1631,jumpToEnd$1632);}
        if(jumpToEnd$1632===undefined){jumpToEnd$1632=$$jQueryAbs.stopName$defs$jumpToEnd(queue$1630,clearQueue$1631,jumpToEnd$1632);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.stop(/*NULL PARAM!*/queue$1630.valueOf()/*NULL PARAM!*/,clearQueue$1631/*NULL PARAM!*/,jumpToEnd$1632));
        /*End dynamic block*/
    }
    $$jQueryAbs.stopName=stopName;
    stopName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queue',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'clearQueue',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}},{$nm:'jumpToEnd',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','stopName']};};
    $$jQueryAbs.submit$defs$eventData=function(eventData$1633,handler$1634){return null;};
    $$jQueryAbs.submit$defs$handler=function(eventData$1633,handler$1634){return null;};
    function submit(eventData$1633,handler$1634){
        if(eventData$1633===undefined){eventData$1633=$$jQueryAbs.submit$defs$eventData(eventData$1633,handler$1634);}
        if(handler$1634===undefined){handler$1634=$$jQueryAbs.submit$defs$handler(eventData$1633,handler$1634);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.submit(/*NULL PARAM!*/eventData$1633/*NULL PARAM!*/,handler$1634));
        /*End dynamic block*/
    }
    $$jQueryAbs.submit=submit;
    submit.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','submit']};};
    function getText(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$jQueryAbs.$native.text());
        /*End dynamic block*/
    }
    $$jQueryAbs.getText=getText;
    getText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getText']};};
    function setText(textString$1635){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.text(/*NULL PARAM!*/textString$1635.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.setText=setText;
    setText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'textString',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setText']};};
    function setTextCallback(callback$1636){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.text(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1636,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setTextCallback=setTextCallback;
    setTextCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setTextCallback']};};
    function toArray(){
        /*Begin dynamic block*/
        return $$$cjl359.JSArray($$jQueryAbs.$native.toArray());
        /*End dynamic block*/
    }
    $$jQueryAbs.toArray=toArray;
    toArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSArray},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toArray']};};
    $$jQueryAbs.toggle$defs$duration=function(duration$1637,easing$1638,complete$1639){return null;};
    $$jQueryAbs.toggle$defs$easing=function(duration$1637,easing$1638,complete$1639){return null;};
    $$jQueryAbs.toggle$defs$complete=function(duration$1637,easing$1638,complete$1639){return null;};
    function toggle(duration$1637,easing$1638,complete$1639){
        if(duration$1637===undefined){duration$1637=$$jQueryAbs.toggle$defs$duration(duration$1637,easing$1638,complete$1639);}
        if(easing$1638===undefined){easing$1638=$$jQueryAbs.toggle$defs$easing(duration$1637,easing$1638,complete$1639);}
        if(complete$1639===undefined){complete$1639=$$jQueryAbs.toggle$defs$complete(duration$1637,easing$1638,complete$1639);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggle(/*NULL PARAM!*/duration$1637/*NULL PARAM!*/,easing$1638/*NULL PARAM!*/,complete$1639));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggle=toggle;
    toggle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggle']};};
    function toggleOptions(options$1640){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggle(/*NULL PARAM!*/options$1640.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggleOptions=toggleOptions;
    toggleOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleOptions']};};
    function toggleShowOrHide(showOrHide$1641){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggle(/*NULL PARAM!*/showOrHide$1641));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggleShowOrHide=toggleShowOrHide;
    toggleShowOrHide.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'showOrHide',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleShowOrHide']};};
    $$jQueryAbs.toggleClass$defs$swit=function(swit$1642){return null;};
    function toggleClass(swit$1642){
        if(swit$1642===undefined){swit$1642=$$jQueryAbs.toggleClass$defs$swit(swit$1642);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggleClass(/*NULL PARAM!*/swit$1642));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggleClass=toggleClass;
    toggleClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'swit',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleClass']};};
    $$jQueryAbs.toggleClassName$defs$swit=function(className$1643,swit$1644){return null;};
    function toggleClassName(className$1643,swit$1644){
        if(swit$1644===undefined){swit$1644=$$jQueryAbs.toggleClassName$defs$swit(className$1643,swit$1644);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggleClass(/*NULL PARAM!*/className$1643.valueOf()/*NULL PARAM!*/,swit$1644));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggleClassName=toggleClassName;
    toggleClassName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'swit',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleClassName']};};
    $$jQueryAbs.toggleClassCallback$defs$swit=function(callback$1645,swit$1646){return null;};
    function toggleClassCallback(callback$1645,swit$1646){
        if(swit$1646===undefined){swit$1646=$$jQueryAbs.toggleClassCallback$defs$swit(callback$1645,swit$1646);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggleClass(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1645,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean}]}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String},{t:$$$cl1.Boolean}]}}},Return:{t:$$$cl1.String}})/*NULL PARAM!*/,swit$1646));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggleClassCallback=toggleClassCallback;
    toggleClassCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean}]}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String},{t:$$$cl1.Boolean}]}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}},{$nm:'swit',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleClassCallback']};};
    function trigger(event$1647,extraParameters$1648){
        if(extraParameters$1648===undefined){extraParameters$1648=$$$cl1.getEmpty();}
        
        var case$1649=event$1647;
        if ($$$cl1.isOfType(event$1647,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.trigger(/*NULL PARAM!*/case$1649.valueOf()/*NULL PARAM!*/,extraParameters$1648));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(event$1647,{t:JQueryEvent})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.trigger(/*NULL PARAM!*/case$1649.$native/*NULL PARAM!*/,extraParameters$1648));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.trigger=trigger;
    trigger.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'event',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQueryEvent}]},$an:function(){return[];}},{$nm:'extraParameters',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','trigger']};};
    function unbind(eventType$1650){
        
        var case$1651=eventType$1650;
        if ($$$cl1.isOfType(eventType$1650,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.unbind(/*NULL PARAM!*/case$1651.valueOf()/*NULL PARAM!*/,false));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(eventType$1650,{ t:'u', l:[{t:$$$cjd975.Event},{t:JQueryEvent}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.unbind(/*NULL PARAM!*/case$1651));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.unbind=unbind;
    unbind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd975.Event},{t:JQueryEvent}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','unbind']};};
    $$jQueryAbs.unbindCallaback$defs$eventType=function(eventType$1652,callback$1653){return null;};
    $$jQueryAbs.unbindCallaback$defs$callback=function(eventType$1652,callback$1653){return null;};
    function unbindCallaback(eventType$1652,callback$1653){
        if(eventType$1652===undefined){eventType$1652=$$jQueryAbs.unbindCallaback$defs$eventType(eventType$1652,callback$1653);}
        if(callback$1653===undefined){callback$1653=$$jQueryAbs.unbindCallaback$defs$callback(eventType$1652,callback$1653);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.unbind(/*NULL PARAM!*/eventType$1652/*NULL PARAM!*/,callback$1653));
        /*End dynamic block*/
    }
    $$jQueryAbs.unbindCallaback=unbindCallaback;
    unbindCallaback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','unbindCallaback']};};
    $$jQueryAbs.undelegate$defs$namespace=function(namespace$1654){return null;};
    function undelegate(namespace$1654){
        if(namespace$1654===undefined){namespace$1654=$$jQueryAbs.undelegate$defs$namespace(namespace$1654);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.undelegate(/*NULL PARAM!*/namespace$1654));
        /*End dynamic block*/
    }
    $$jQueryAbs.undelegate=undelegate;
    undelegate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'namespace',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','undelegate']};};
    $$jQueryAbs.undelegateCallback$defs$callback=function(selector$1655,eventType$1656,callback$1657){return null;};
    function undelegateCallback(selector$1655,eventType$1656,callback$1657){
        if(callback$1657===undefined){callback$1657=$$jQueryAbs.undelegateCallback$defs$callback(selector$1655,eventType$1656,callback$1657);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.undelegate(/*NULL PARAM!*/selector$1655.valueOf()/*NULL PARAM!*/,eventType$1656.valueOf()/*NULL PARAM!*/,callback$1657));
        /*End dynamic block*/
    }
    $$jQueryAbs.undelegateCallback=undelegateCallback;
    undelegateCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','undelegateCallback']};};
    function undelegateEvents(selector$1658,events$1659){
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
        var val$1660=$$jQueryAbs.$native.val();
        $prop$getVal$1660={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQueryAbs','$m','getVal','$at','val']};}};
        $prop$getVal$1660.get=function(){return val$1660};
        if(val$1660.nstanceof(/*NULL PARAM!*/(typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'1928:23-1928:28','jquery.ceylon'):String))){
            return $$$cjl359.JSString(val$1660);
        }else {
            if((typeof arrayIsArray==='undefined'||arrayIsArray===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: arrayIsArray")),'1930:14-1930:25','jquery.ceylon'):arrayIsArray)(/*NULL PARAM!*/val$1660)){
                return $$$cjl359.JSArray(val$1660);
            }else {
                return $$$cjl359.JSNumber(val$1660);
            }
        }/*End dynamic block*/
    }
    $$jQueryAbs.getVal=getVal;
    getVal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cjl359.JSString},{t:$$$cjl359.JSNumber},{t:$$$cjl359.JSArray}]},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getVal']};};
    function setVal(val$1661){
        if(val$1661===undefined){val$1661=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.val(/*NULL PARAM!*/val$1661));
        /*End dynamic block*/
    }
    $$jQueryAbs.setVal=setVal;
    setVal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setVal']};};
    function setValCallback(callback$1662){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.val(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1662,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setValCallback=setValCallback;
    setValCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setValCallback']};};
    function getWidth(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$jQueryAbs.$native.width());
        /*End dynamic block*/
    }
    $$jQueryAbs.getWidth=getWidth;
    getWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getWidth']};};
    function setWidth(width$1663){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.width(/*NULL PARAM!*/width$1663));
        /*End dynamic block*/
    }
    $$jQueryAbs.setWidth=setWidth;
    setWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'width',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setWidth']};};
    function setWidthCallback(callback$1664){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.width(/*NULL PARAM!*/callback$1664));
        /*End dynamic block*/
    }
    $$jQueryAbs.setWidthCallback=setWidthCallback;
    setWidthCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setWidthCallback']};};
    function wrap(wrappingElement$1665){
        
        var case$1666=wrappingElement$1665;
        if ($$$cl1.isOfType(wrappingElement$1665,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.wrap(/*NULL PARAM!*/case$1666.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(wrappingElement$1665,{ t:'u', l:[{t:$$$cjd975.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.wrap(/*NULL PARAM!*/case$1666.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.wrap=wrap;
    wrap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd975.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrap']};};
    function wrapCallback(callback$1667){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.wrap(/*NULL PARAM!*/callback$1667));
        /*End dynamic block*/
    }
    $$jQueryAbs.wrapCallback=wrapCallback;
    wrapCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:JQuery}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrapCallback']};};
    function wrapAll(wrappingElement$1668){
        
        var case$1669=wrappingElement$1668;
        if ($$$cl1.isOfType(wrappingElement$1668,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.wrapAll(/*NULL PARAM!*/case$1669.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(wrappingElement$1668,{ t:'u', l:[{t:$$$cjd975.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.wrapAll(/*NULL PARAM!*/case$1669.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.wrapAll=wrapAll;
    wrapAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd975.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrapAll']};};
    function wrapInner(wrappingElement$1670){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.wrapInner(/*NULL PARAM!*/wrappingElement$1670.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.wrapInner=wrapInner;
    wrapInner.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrapInner']};};
    function wrapInnerCallback(callback$1671){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.wrapInner(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1671,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.wrapInnerCallback=wrapInnerCallback;
    wrapInnerCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrapInnerCallback']};};
    return $$jQueryAbs;
}
JQueryAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','JQueryAbs']};};
exports.JQueryAbs=JQueryAbs;
function $init$JQueryAbs(){
    if (JQueryAbs.$$===undefined){
        $$$cl1.initTypeProto(JQueryAbs,'ceylon.js.jquery::JQueryAbs',$$$cjl359.JSObjectAbs);
    }
    return JQueryAbs;
}
exports.$init$JQueryAbs=$init$JQueryAbs;
$init$JQueryAbs();
function JQuery(n$1672, $$jQuery){
    $init$JQuery();
    if ($$jQuery===undefined)$$jQuery=new JQuery.$$;
    $$jQuery.n$1672_=n$1672;
    JQueryAbs($$jQuery);
    $$$cl1.defineAttr($$jQuery,'n$1672',function(){return this.n$1672_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQuery,d:['ceylon.js.jquery','JQuery','$at','n']};});
    $$jQuery.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQuery,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','JQuery','$at','native']};}};
    /*Begin dynamic block*/
    $$jQuery.$native=n$1672;/*End dynamic block*/
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
function DataType(name$1673, $$dataType){
    $init$DataType();
    if ($$dataType===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$dataType.name$1673_=name$1673;
    $$$cl1.defineAttr($$dataType,'name$1673',function(){return this.name$1673_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DataType,d:['ceylon.js.jquery','DataType','$at','name']};});
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
function dataTypeXML$1674(){
    var $$dataTypeXML=new dataTypeXML$1674.$$;
    DataType($$$cl1.String("dataTypeXML",11),$$dataTypeXML);
    return $$dataTypeXML;
}
function $init$dataTypeXML$1674(){
    if (dataTypeXML$1674.$$===undefined){
        $$$cl1.initTypeProto(dataTypeXML$1674,'ceylon.js.jquery::dataTypeXML',$init$DataType());
    }
    return dataTypeXML$1674;
}
exports.$init$dataTypeXML$1674=$init$dataTypeXML$1674;
$init$dataTypeXML$1674();
var dataTypeXML$1675;
function getDataTypeXML(){
    if (dataTypeXML$1675===undefined)dataTypeXML$1675=$init$dataTypeXML$1674()();
    return dataTypeXML$1675;
}
exports.getDataTypeXML=getDataTypeXML;
getDataTypeXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeXML$1674},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeXML']};};
$prop$getDataTypeXML={get:getDataTypeXML,$$metamodel$$:getDataTypeXML.$$metamodel$$};
exports.$prop$getDataTypeXML=$prop$getDataTypeXML;
function dataTypeHtml$1676(){
    var $$dataTypeHtml=new dataTypeHtml$1676.$$;
    DataType($$$cl1.String("dataTypeHtml",12),$$dataTypeHtml);
    return $$dataTypeHtml;
}
function $init$dataTypeHtml$1676(){
    if (dataTypeHtml$1676.$$===undefined){
        $$$cl1.initTypeProto(dataTypeHtml$1676,'ceylon.js.jquery::dataTypeHtml',$init$DataType());
    }
    return dataTypeHtml$1676;
}
exports.$init$dataTypeHtml$1676=$init$dataTypeHtml$1676;
$init$dataTypeHtml$1676();
var dataTypeHtml$1677;
function getDataTypeHtml(){
    if (dataTypeHtml$1677===undefined)dataTypeHtml$1677=$init$dataTypeHtml$1676()();
    return dataTypeHtml$1677;
}
exports.getDataTypeHtml=getDataTypeHtml;
getDataTypeHtml.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeHtml$1676},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeHtml']};};
$prop$getDataTypeHtml={get:getDataTypeHtml,$$metamodel$$:getDataTypeHtml.$$metamodel$$};
exports.$prop$getDataTypeHtml=$prop$getDataTypeHtml;
function dataTypeScript$1678(){
    var $$dataTypeScript=new dataTypeScript$1678.$$;
    DataType($$$cl1.String("dataTypeScript",14),$$dataTypeScript);
    return $$dataTypeScript;
}
function $init$dataTypeScript$1678(){
    if (dataTypeScript$1678.$$===undefined){
        $$$cl1.initTypeProto(dataTypeScript$1678,'ceylon.js.jquery::dataTypeScript',$init$DataType());
    }
    return dataTypeScript$1678;
}
exports.$init$dataTypeScript$1678=$init$dataTypeScript$1678;
$init$dataTypeScript$1678();
var dataTypeScript$1679;
function getDataTypeScript(){
    if (dataTypeScript$1679===undefined)dataTypeScript$1679=$init$dataTypeScript$1678()();
    return dataTypeScript$1679;
}
exports.getDataTypeScript=getDataTypeScript;
getDataTypeScript.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeScript$1678},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeScript']};};
$prop$getDataTypeScript={get:getDataTypeScript,$$metamodel$$:getDataTypeScript.$$metamodel$$};
exports.$prop$getDataTypeScript=$prop$getDataTypeScript;
function dataTypeJson$1680(){
    var $$dataTypeJson=new dataTypeJson$1680.$$;
    DataType($$$cl1.String("dataTypeJson",12),$$dataTypeJson);
    return $$dataTypeJson;
}
function $init$dataTypeJson$1680(){
    if (dataTypeJson$1680.$$===undefined){
        $$$cl1.initTypeProto(dataTypeJson$1680,'ceylon.js.jquery::dataTypeJson',$init$DataType());
    }
    return dataTypeJson$1680;
}
exports.$init$dataTypeJson$1680=$init$dataTypeJson$1680;
$init$dataTypeJson$1680();
var dataTypeJson$1681;
function getDataTypeJson(){
    if (dataTypeJson$1681===undefined)dataTypeJson$1681=$init$dataTypeJson$1680()();
    return dataTypeJson$1681;
}
exports.getDataTypeJson=getDataTypeJson;
getDataTypeJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeJson$1680},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeJson']};};
$prop$getDataTypeJson={get:getDataTypeJson,$$metamodel$$:getDataTypeJson.$$metamodel$$};
exports.$prop$getDataTypeJson=$prop$getDataTypeJson;
function dataTypeJsonp$1682(){
    var $$dataTypeJsonp=new dataTypeJsonp$1682.$$;
    DataType($$$cl1.String("dataTypeJsonp",13),$$dataTypeJsonp);
    return $$dataTypeJsonp;
}
function $init$dataTypeJsonp$1682(){
    if (dataTypeJsonp$1682.$$===undefined){
        $$$cl1.initTypeProto(dataTypeJsonp$1682,'ceylon.js.jquery::dataTypeJsonp',$init$DataType());
    }
    return dataTypeJsonp$1682;
}
exports.$init$dataTypeJsonp$1682=$init$dataTypeJsonp$1682;
$init$dataTypeJsonp$1682();
var dataTypeJsonp$1683;
function getDataTypeJsonp(){
    if (dataTypeJsonp$1683===undefined)dataTypeJsonp$1683=$init$dataTypeJsonp$1682()();
    return dataTypeJsonp$1683;
}
exports.getDataTypeJsonp=getDataTypeJsonp;
getDataTypeJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeJsonp$1682},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeJsonp']};};
$prop$getDataTypeJsonp={get:getDataTypeJsonp,$$metamodel$$:getDataTypeJsonp.$$metamodel$$};
exports.$prop$getDataTypeJsonp=$prop$getDataTypeJsonp;
function dataTypeText$1684(){
    var $$dataTypeText=new dataTypeText$1684.$$;
    DataType($$$cl1.String("dataTypeText",12),$$dataTypeText);
    return $$dataTypeText;
}
function $init$dataTypeText$1684(){
    if (dataTypeText$1684.$$===undefined){
        $$$cl1.initTypeProto(dataTypeText$1684,'ceylon.js.jquery::dataTypeText',$init$DataType());
    }
    return dataTypeText$1684;
}
exports.$init$dataTypeText$1684=$init$dataTypeText$1684;
$init$dataTypeText$1684();
var dataTypeText$1685;
function getDataTypeText(){
    if (dataTypeText$1685===undefined)dataTypeText$1685=$init$dataTypeText$1684()();
    return dataTypeText$1685;
}
exports.getDataTypeText=getDataTypeText;
getDataTypeText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeText$1684},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeText']};};
$prop$getDataTypeText={get:getDataTypeText,$$metamodel$$:getDataTypeText.$$metamodel$$};
exports.$prop$getDataTypeText=$prop$getDataTypeText;
function createJSONPSettings(jsonp$1686,jsonpCallback$1687){
    if(jsonp$1686===undefined){jsonp$1686=true;}
    if(jsonpCallback$1687===undefined){jsonpCallback$1687=$$$cl1.String("callback",8);}
    /*Begin dynamic block*/
    if(jsonp$1686.equals(true)){
        if(jsonpCallback$1687.equals($$$cl1.String("callback",8))){
            return null;
        }else {
            return JSONPSettings(jsonpCallback$1687);
        }
    }else {
        if(jsonpCallback$1687.equals($$$cl1.String("callback",8))){
            return JSONPSettings(false);
        }else {
            var json$1688=(values$1689=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("jsonp",5),false,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.false$1690}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("jsonpCallback",13),jsonpCallback$1687,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{ t:'u', l:[{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.false$1690}}},{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}]}}),$$$cjj659.JSON(values$1689));
            $prop$getJson$1688={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj659.JSON},d:['ceylon.js.jquery','createJSONPSettings','$at','json']};}};
            $prop$getJson$1688.get=function(){return json$1688};
            var values$1689;
            return JSONPSettings(json$1688.toJson());
        }
    }/*End dynamic block*/
}
exports.createJSONPSettings=createJSONPSettings;
createJSONPSettings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JSONPSettings}]},$ps:[{$nm:'jsonp',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'jsonpCallback',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','createJSONPSettings']};};
function JSONPSettingsAbs($$jSONPSettingsAbs){
    $init$JSONPSettingsAbs();
    if ($$jSONPSettingsAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl359.JSObjectAbs($$jSONPSettingsAbs);
    function getIsJsonp(){
        /*Begin dynamic block*/
        if(((tmpvar$1691=$$jSONPSettingsAbs.$native.jsonp,tmpvar$1692=true,(tmpvar$1691.equals&&tmpvar$1691.equals(tmpvar$1692))||tmpvar$1691===tmpvar$1692)||(tmpvar$1693=$$jSONPSettingsAbs.$native.jsonp,tmpvar$1694=null,(tmpvar$1693.equals&&!tmpvar$1693.equals(tmpvar$1694))||tmpvar$1693!==tmpvar$1694))){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jSONPSettingsAbs.getIsJsonp=getIsJsonp;
    getIsJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','getIsJsonp']};};
    function setIsJsonp(jsonp$1695){
        /*Begin dynamic block*/
        $$jSONPSettingsAbs.$native.jsonp=jsonp$1695;
        /*End dynamic block*/
    }
    $$jSONPSettingsAbs.setIsJsonp=setIsJsonp;
    setIsJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'jsonp',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','setIsJsonp']};};
    function getCallback(){
        /*Begin dynamic block*/
        var callback$1696=$$jSONPSettingsAbs.$native.callback;
        $prop$getCallback$1696={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','getCallback','$at','callback']};}};
        $prop$getCallback$1696.get=function(){return callback$1696};
        if((tmpvar$1697=callback$1696,tmpvar$1698=null,(tmpvar$1697.equals&&!tmpvar$1697.equals(tmpvar$1698))||tmpvar$1697!==tmpvar$1698)){
            return $$$cjl359.JSString($$jSONPSettingsAbs.$native.callback);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jSONPSettingsAbs.getCallback=getCallback;
    getCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','getCallback']};};
    function setCallback(callback$1699){
        /*Begin dynamic block*/
        $$jSONPSettingsAbs.$native.callback=callback$1699.valueOf();
        /*End dynamic block*/
    }
    $$jSONPSettingsAbs.setCallback=setCallback;
    setCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','setCallback']};};
    return $$jSONPSettingsAbs;
}
JSONPSettingsAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','JSONPSettingsAbs']};};
exports.JSONPSettingsAbs=JSONPSettingsAbs;
function $init$JSONPSettingsAbs(){
    if (JSONPSettingsAbs.$$===undefined){
        $$$cl1.initTypeProto(JSONPSettingsAbs,'ceylon.js.jquery::JSONPSettingsAbs',$$$cjl359.JSObjectAbs);
    }
    return JSONPSettingsAbs;
}
exports.$init$JSONPSettingsAbs=$init$JSONPSettingsAbs;
$init$JSONPSettingsAbs();
function JSONPSettings(n$1700, $$jSONPSettings){
    $init$JSONPSettings();
    if ($$jSONPSettings===undefined)$$jSONPSettings=new JSONPSettings.$$;
    $$jSONPSettings.n$1700_=n$1700;
    JSONPSettingsAbs($$jSONPSettings);
    $$$cl1.defineAttr($$jSONPSettings,'n$1700',function(){return this.n$1700_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSONPSettings,d:['ceylon.js.jquery','JSONPSettings','$at','n']};});
    $$jSONPSettings.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSONPSettings,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','JSONPSettings','$at','native']};}};
    /*Begin dynamic block*/
    $$jSONPSettings.$native=n$1700;/*End dynamic block*/
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
    $$$cjl359.JSObjectAbs($$jQueryAjaxSettingsAbs);
    function getAccepts(){
        /*Begin dynamic block*/
        return $$$cl1.Comprehension(function(){
            var it$1701=$$jQueryAjaxSettingsAbs.$native.accepts.iterator();
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
                    var tmpvar$1707=$$$cl1.Entry($$$cjl359.JSString(key$1702$1705),$$$cjl359.JSString(val$1703$1706),{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSString}});
                    next$val$1703();
                    return tmpvar$1707;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSString}}}}).sequence;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getAccepts=getAccepts;
    getAccepts.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSString}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getAccepts']};};
    function setAccepts(accepts$1708){
        if(accepts$1708===undefined){accepts$1708=$$$cl1.getEmpty();}
        var acceptNative$1709=$$$cjl359.createJSObject();
        var it$1710 = accepts$1708.iterator();
        var item$1711;while ((item$1711=it$1710.next())!==$$$cl1.getFinished()){
            var key$1712=item$1711.key;
            var val$1713=item$1711.item;
            /*Begin dynamic block*/
            $$$cjl359.objectDefineProperty(acceptNative$1709,key$1712,$$$cjl359.DataDescriptor(true,false,true,true,val$1713.$native));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.accepts=acceptNative$1709.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setAccepts=setAccepts;
    setAccepts.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'accepts',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSString}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setAccepts']};};
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
    function setAsync(async$1714){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.async=async$1714;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setAsync=setAsync;
    setAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'async',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setAsync']};};
    function getBeforeSend(){
        /*Begin dynamic block*/
        return (tmpvar$1715=$$jQueryAjaxSettingsAbs.$native.beforeSend=(typeof beforeSend==='undefined'||beforeSend===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: beforeSend")),'117:30-117:39','jqueryajaxsettings.ceylon'):beforeSend),$$$cl1.isOfType(tmpvar$1715,{t:$$$cl1.Anything})?tmpvar$1715:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'117:10-117:39','jqueryajaxsettings.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getBeforeSend=getBeforeSend;
    getBeforeSend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Boolean(JQXHR, JQueryAjaxSettings)?",43)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getBeforeSend']};};
    function setBeforeSend(beforeSend$1716){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.beforeSend=$$$cl1.$JsCallable(beforeSend$1716/*TODO: callable targs 6*/);
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
    function setCache(cache$1717){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.cache=cache$1717;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setCache=setCache;
    setCache.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'cache',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setCache']};};
    function getComplete(){
        /*Begin dynamic block*/
        var complete$1718=$$jQueryAjaxSettingsAbs.$native.complete;
        $prop$getComplete$1718={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getComplete','$at','complete']};}};
        $prop$getComplete$1718.get=function(){return complete$1718};
        if((tmpvar$1719=complete$1718,tmpvar$1720=null,(tmpvar$1719.equals&&tmpvar$1719.equals(tmpvar$1720))||tmpvar$1719===tmpvar$1720)){
            return null;
        }else {
            if($$$cjl359.arrayIsArray(complete$1718)){
                return $$$cjl359.JSArray(complete$1718);
            }else {
                return (tmpvar$1721=$$$cjl359.createJSArray(complete$1718),$$$cl1.isOfType(tmpvar$1721,{t:$$$cl1.Anything})?tmpvar$1721:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'152:11-152:33','jqueryajaxsettings.ceylon'));
            }
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getComplete=getComplete;
    getComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns array of Anything(JQXHR, String) or null",48)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getComplete']};};
    function setComplete(complete$1722){
        if(complete$1722===undefined){complete$1722=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.complete=complete$1722;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setComplete=setComplete;
    setComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'complete',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setComplete']};};
    function getContents(){
        /*Begin dynamic block*/
        return $$$cl1.Comprehension(function(){
            var it$1723=$$jQueryAjaxSettingsAbs.$native.contents.iterator();
            var key$1724,val$1725;
            var next$val$1725=function(){
                var entry$1726;
                if((entry$1726=it$1723.next())!==$$$cl1.getFinished()){
                    key$1724=entry$1726.key;
                    val$1725=entry$1726.item;
                    return entry$1726;
                }
                val$1725=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1725();
            return function(){
                if(val$1725!==undefined){
                    var key$1724$1727=key$1724;
                    var val$1725$1728=val$1725;
                    var tmpvar$1729=$$$cl1.Entry($$$cjl359.JSString(key$1724$1727),$$$cjl359.RegExp(val$1725$1728),{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.RegExp}});
                    next$val$1725();
                    return tmpvar$1729;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.RegExp}}}}).sequence;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getContents=getContents;
    getContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.RegExp}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContents']};};
    function setContents(contents$1730){
        if(contents$1730===undefined){contents$1730=$$$cl1.getEmpty();}
        var contNative$1731=$$$cjl359.createJSObject();
        var it$1732 = contents$1730.iterator();
        var item$1733;while ((item$1733=it$1732.next())!==$$$cl1.getFinished()){
            var key$1734=item$1733.key;
            var val$1735=item$1733.item;
            /*Begin dynamic block*/
            $$$cjl359.objectDefineProperty(contNative$1731,key$1734,$$$cjl359.DataDescriptor(true,false,true,true,val$1735.$native));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.contents=contNative$1731;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setContents=setContents;
    setContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'contents',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.RegExp}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContents']};};
    function getContentType(){
        /*Begin dynamic block*/
        if((tmpvar$1736=$$jQueryAjaxSettingsAbs.$native.contentType,tmpvar$1737=null,(tmpvar$1736.equals&&!tmpvar$1736.equals(tmpvar$1737))||tmpvar$1736!==tmpvar$1737)){
            return $$$cjl359.JSString($$jQueryAjaxSettingsAbs.$native.contentType);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getContentType=getContentType;
    getContentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContentType']};};
    function setContentType(contentType$1738){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.contentType=contentType$1738.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setContentType=setContentType;
    setContentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'contentType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContentType']};};
    function getContext(){
        /*Begin dynamic block*/
        if((tmpvar$1739=$$jQueryAjaxSettingsAbs.$native.context,tmpvar$1740=null,(tmpvar$1739.equals&&!tmpvar$1739.equals(tmpvar$1740))||tmpvar$1739!==tmpvar$1740)){
            return $$$cjl359.JSObject($$jQueryAjaxSettingsAbs.$native.context);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getContext=getContext;
    getContext.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSObject}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContext']};};
    function setContext(context$1741){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.context=context$1741.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setContext=setContext;
    setContext.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cjl359.JSObject},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContext']};};
    function getConverters(){
        /*Begin dynamic block*/
        return $$$cl1.Comprehension(function(){
            var it$1742=$$jQueryAjaxSettingsAbs.$native.converters.iterator();
            var key$1743,val$1744;
            var next$val$1744=function(){
                var entry$1745;
                if((entry$1745=it$1742.next())!==$$$cl1.getFinished()){
                    key$1743=entry$1745.key;
                    val$1744=entry$1745.item;
                    return entry$1745;
                }
                val$1744=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1744();
            return function(){
                if(val$1744!==undefined){
                    var key$1743$1746=key$1743;
                    var val$1744$1747=val$1744;
                    var tmpvar$1748=$$$cl1.Entry($$$cjl359.JSString(key$1743$1746),$$$cjl359.JSObject(val$1744$1747),{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSObject}});
                    next$val$1744();
                    return tmpvar$1748;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSObject}}}}).sequence;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getConverters=getConverters;
    getConverters.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSObject}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getConverters']};};
    function setConverters(converters$1749){
        if(converters$1749===undefined){converters$1749=$$$cl1.getEmpty();}
        var convNative$1750=$$$cjl359.createJSObject();
        var it$1751 = converters$1749.iterator();
        var item$1752;while ((item$1752=it$1751.next())!==$$$cl1.getFinished()){
            var key$1753=item$1752.key;
            var val$1754=item$1752.item;
            /*Begin dynamic block*/
            $$$cjl359.objectDefineProperty(convNative$1750,key$1753,$$$cjl359.DataDescriptor(true,false,true,true,val$1754.$native));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.converters=convNative$1750.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setConverters=setConverters;
    setConverters.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'converters',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSObject}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setConverters']};};
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
    function setCrossDomain(crossDomain$1755){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.crossDomain=crossDomain$1755;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setCrossDomain=setCrossDomain;
    setCrossDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'crossDomain',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setCrossDomain']};};
    function getData(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.data.instanceof(/*NULL PARAM!*/(typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'250:32-250:37','jqueryajaxsettings.ceylon'):String))){
            return $$$cjl359.JSString($$jQueryAjaxSettingsAbs.$native.data);
        }else {
            if((tmpvar$1756=$$jQueryAjaxSettingsAbs.$native.data,tmpvar$1757=null,(tmpvar$1756.equals&&!tmpvar$1756.equals(tmpvar$1757))||tmpvar$1756!==tmpvar$1757)){
                return $$$cjl359.JSObject($$jQueryAjaxSettingsAbs.$native.data);
            }else {
                return null;
            }
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getData=getData;
    getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cjl359.JSString},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSObject}]}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getData']};};
    function setData(data$1758){
        
        var case$1759=data$1758;
        if ($$$cl1.isOfType(data$1758,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$jQueryAjaxSettingsAbs.$native.data=case$1759.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$1758,{t:$$$cjl359.JSObject})) {
            /*Begin dynamic block*/
            $$jQueryAjaxSettingsAbs.$native.data=case$1759.$native;
            /*End dynamic block*/
        }
    }
    $$jQueryAjaxSettingsAbs.setData=setData;
    setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSObject}]},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setData']};};
    function getDataFilter(){
        /*Begin dynamic block*/
        return (tmpvar$1760=$$jQueryAjaxSettingsAbs.$native.dataFilter,$$$cl1.isOfType(tmpvar$1760,{t:$$$cl1.Anything})?tmpvar$1760:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'277:10-277:26','jqueryajaxsettings.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getDataFilter=getDataFilter;
    getDataFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Anything(String, String)?",33)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getDataFilter']};};
    function setDataFilter(datafilter$1761){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.dataFilter=$$$cl1.$JsCallable(datafilter$1761/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setDataFilter=setDataFilter;
    setDataFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'datafilter',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setDataFilter']};};
    function getDataType(){
        /*Begin dynamic block*/
        if((tmpvar$1762=$$jQueryAjaxSettingsAbs.$native.dataType,tmpvar$1763=null,(tmpvar$1762.equals&&!tmpvar$1762.equals(tmpvar$1763))||tmpvar$1762!==tmpvar$1763)){
            return $$$cjl359.JSString($$jQueryAjaxSettingsAbs.$native.dataType);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getDataType=getDataType;
    getDataType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getDataType']};};
    function setDataType(dataType$1764){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.dataType=dataType$1764.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setDataType=setDataType;
    setDataType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'dataType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setDataType']};};
    function getError(){
        /*Begin dynamic block*/
        if($$$cjl359.arrayIsArray($$jQueryAjaxSettingsAbs.$native.error)){
            return $$$cjl359.JSArray($$jQueryAjaxSettingsAbs.$native.error);
        }else {
            if((tmpvar$1765=$$jQueryAjaxSettingsAbs.$native.error,tmpvar$1766=null,(tmpvar$1765.equals&&!tmpvar$1765.equals(tmpvar$1766))||tmpvar$1765!==tmpvar$1766)){
                return (tmpvar$1767=$$$cjl359.createJSArray($$jQueryAjaxSettingsAbs.$native.error),$$$cl1.isOfType(tmpvar$1767,{t:$$$cl1.Anything})?tmpvar$1767:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'309:11-309:37','jqueryajaxsettings.ceylon'));
            }else {
                return null;
            }
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getError=getError;
    getError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Anything(JQXHR, String?, String?)[]",43)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getError']};};
    function setError(datafilter$1768){
        if(datafilter$1768===undefined){datafilter$1768=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.dataFilter=datafilter$1768;
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
    function setGlobal(global$1769){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.global=global$1769;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setGlobal=setGlobal;
    setGlobal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'global',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setGlobal']};};
    function getHeaders(){
        /*Begin dynamic block*/
        return $$$cl1.Comprehension(function(){
            var it$1770=$$jQueryAjaxSettingsAbs.$native.headers.iterator();
            var key$1771,val$1772;
            var next$val$1772=function(){
                var entry$1773;
                if((entry$1773=it$1770.next())!==$$$cl1.getFinished()){
                    key$1771=entry$1773.key;
                    val$1772=entry$1773.item;
                    return entry$1773;
                }
                val$1772=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1772();
            return function(){
                if(val$1772!==undefined){
                    var key$1771$1774=key$1771;
                    var val$1772$1775=val$1772;
                    var tmpvar$1776=$$$cl1.Entry($$$cjl359.JSString(key$1771$1774),$$$cjl359.JSString(val$1772$1775),{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSString}});
                    next$val$1772();
                    return tmpvar$1776;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSString}}}}).sequence;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getHeaders=getHeaders;
    getHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSString}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getHeaders']};};
    function setHeaders(headers$1777){
        var headNative$1778=$$$cjl359.createJSObject();
        var it$1779 = headers$1777.iterator();
        var item$1780;while ((item$1780=it$1779.next())!==$$$cl1.getFinished()){
            var key$1781=item$1780.key;
            var val$1782=item$1780.item;
            /*Begin dynamic block*/
            $$$cjl359.objectDefineProperty(headNative$1778,key$1781,$$$cjl359.DataDescriptor(true,false,true,true,val$1782.$native));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.headers=headNative$1778.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setHeaders=setHeaders;
    setHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'headers',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSString}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setHeaders']};};
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
    function setIfModified(modified$1783){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.ifModified=modified$1783;
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
    function setIsLocal(local$1784){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.isLocal=local$1784;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setIsLocal=setIsLocal;
    setIsLocal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'local',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setIsLocal']};};
    function getJsonp(){
        var jsonp$1785;
        /*Begin dynamic block*/
        jsonp$1785=$$$cjl359.JSObject($$jQueryAjaxSettingsAbs.$native.jsonp);if((tmpvar$1786=$$jQueryAjaxSettingsAbs.$native.jsonp,tmpvar$1787=null,(tmpvar$1786.equals&&tmpvar$1786.equals(tmpvar$1787))||tmpvar$1786===tmpvar$1787)){
            return null;
        }else {
            if((jsonp$1785.hasOwnProperty($$$cl1.String("jsonp",5))||jsonp$1785.hasOwnProperty($$$cl1.String("jsonpCallback",13)))){
                return JSONPSettings(jsonp$1785.$native);
            }else {
                if(jsonp$1785.$native.instanceof(/*NULL PARAM!*/(typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'396:40-396:45','jqueryajaxsettings.ceylon'):String))){
                    return $$$cjl359.JSString(jsonp$1785.$native);
                }else {
                    if(jsonp$1785.$native){
                        return true;
                    }else {
                        return false;
                    }
                }
            }
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getJsonp=getJsonp;
    getJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:JSONPSettings},{t:$$$cjl359.JSString},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getJsonp']};};
    function setJsonp(jsonp$1788){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.jsonp=jsonp$1788.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setJsonp=setJsonp;
    setJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'jsonp',$mt:'prm',$t:{t:JSONPSettings},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setJsonp']};};
    function getJsonpCallback(){
        /*Begin dynamic block*/
        return (tmpvar$1789=$$jQueryAjaxSettingsAbs.$native.jsonpCallback,$$$cl1.isOfType(tmpvar$1789,{t:$$$cl1.Anything})?tmpvar$1789:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'417:10-417:29','jqueryajaxsettings.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getJsonpCallback=getJsonpCallback;
    getJsonpCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns String|String()?",24)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getJsonpCallback']};};
    function setJsonpCallback(callback$1790){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.jsonpCallback=callback$1790;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setJsonpCallback=setJsonpCallback;
    setJsonpCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.String}}}]},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setJsonpCallback']};};
    function getMimeType(){
        /*Begin dynamic block*/
        if((tmpvar$1791=$$jQueryAjaxSettingsAbs.$native.mimeType,tmpvar$1792=null,(tmpvar$1791.equals&&!tmpvar$1791.equals(tmpvar$1792))||tmpvar$1791!==tmpvar$1792)){
            return $$$cjl359.JSString($$jQueryAjaxSettingsAbs.$native.mimeType);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getMimeType=getMimeType;
    getMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getMimeType']};};
    function setMimeType(mimeType$1793){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.mimeType=mimeType$1793.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setMimeType=setMimeType;
    setMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'mimeType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setMimeType']};};
    function getPassword(){
        /*Begin dynamic block*/
        if((tmpvar$1794=$$jQueryAjaxSettingsAbs.$native.password,tmpvar$1795=null,(tmpvar$1794.equals&&!tmpvar$1794.equals(tmpvar$1795))||tmpvar$1794!==tmpvar$1795)){
            return $$$cjl359.JSString($$jQueryAjaxSettingsAbs.$native.password);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getPassword=getPassword;
    getPassword.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getPassword']};};
    function setPassword(password$1796){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.password=password$1796.valueOf();
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
    function setProcessData(processData$1797){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.processData=processData$1797;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setProcessData=setProcessData;
    setProcessData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'processData',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setProcessData']};};
    function getScriptCharset(){
        /*Begin dynamic block*/
        if((tmpvar$1798=$$jQueryAjaxSettingsAbs.$native.scriptCharset,tmpvar$1799=null,(tmpvar$1798.equals&&!tmpvar$1798.equals(tmpvar$1799))||tmpvar$1798!==tmpvar$1799)){
            return $$$cjl359.JSString($$jQueryAjaxSettingsAbs.$native.scriptCharset);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getScriptCharset=getScriptCharset;
    getScriptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getScriptCharset']};};
    function setScriptCharset(scriptCharset$1800){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.scriptCharset=scriptCharset$1800.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setScriptCharset=setScriptCharset;
    setScriptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'scriptCharset',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setScriptCharset']};};
    function getStatusCode(){
        /*Begin dynamic block*/
        return (tmpvar$1801=(typeof statusNative==='undefined'||statusNative===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: statusNative")),'494:10-494:21','jqueryajaxsettings.ceylon'):statusNative),$$$cl1.isOfType(tmpvar$1801,{t:$$$cl1.Anything})?tmpvar$1801:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'494:10-494:21','jqueryajaxsettings.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getStatusCode=getStatusCode;
    getStatusCode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Object: JSNumber -> Anything(JQXHR, String?, String?)|Anything(JQXHR, String?, String?)",95)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getStatusCode']};};
    function setStatusCode(statusCodes$1802){
        if(statusCodes$1802===undefined){statusCodes$1802=$$$cl1.getEmpty();}
        var statusNative$1803=$$$cjl359.createJSObject();
        var it$1804 = statusCodes$1802.iterator();
        var item$1805;while ((item$1805=it$1804.next())!==$$$cl1.getFinished()){
            var key$1806=item$1805.key;
            var val$1807=item$1805.item;
            /*Begin dynamic block*/
            $$$cjl359.objectDefineProperty(statusNative$1803,key$1806.string,$$$cjl359.DataDescriptor(true,false,true,true,$$$cl1.$JsCallable(val$1807,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}})));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.statusNative=statusNative$1803.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setStatusCode=setStatusCode;
    setStatusCode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'statusCodes',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSNumber},Item:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}]}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setStatusCode']};};
    function getSuccess(){
        /*Begin dynamic block*/
        if((tmpvar$1808=$$jQueryAjaxSettingsAbs.$native.success,tmpvar$1809=null,(tmpvar$1808.equals&&!tmpvar$1808.equals(tmpvar$1809))||tmpvar$1808!==tmpvar$1809)){
            return $$$cjl359.JSArray($$jQueryAjaxSettingsAbs.$native.success);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getSuccess=getSuccess;
    getSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Anything(Anything, String, JQXHR)[]",43)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getSuccess']};};
    function setSuccess(success$1810){
        if(success$1810===undefined){success$1810=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.success=success$1810;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setSuccess=setSuccess;
    setSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'success',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:JQXHR}]}}},First:{t:$$$cl1.Anything},Element:{ t:'u', l:[{t:$$$cl1.Anything},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setSuccess']};};
    function getTimeout(){
        /*Begin dynamic block*/
        if((tmpvar$1811=$$jQueryAjaxSettingsAbs.$native.timeout,tmpvar$1812=null,(tmpvar$1811.equals&&!tmpvar$1811.equals(tmpvar$1812))||tmpvar$1811!==tmpvar$1812)){
            return $$$cjl359.JSNumber($$jQueryAjaxSettingsAbs.$native.timeout);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getTimeout=getTimeout;
    getTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSNumber}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getTimeout']};};
    function setTimeout(timeout$1813){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.timeout=timeout$1813;
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
    function setTraditional(traditional$1814){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.traditional=traditional$1814;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setTraditional=setTraditional;
    setTraditional.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'traditional',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setTraditional']};};
    function getType(){
        /*Begin dynamic block*/
        if((tmpvar$1815=$$jQueryAjaxSettingsAbs.$native.type,tmpvar$1816=null,(tmpvar$1815.equals&&!tmpvar$1815.equals(tmpvar$1816))||tmpvar$1815!==tmpvar$1816)){
            return $$$cjl359.JSString($$jQueryAjaxSettingsAbs.$native.type);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getType=getType;
    getType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getType']};};
    function setType(type$1817){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.type=type$1817.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setType=setType;
    setType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setType']};};
    function getUrl(){
        /*Begin dynamic block*/
        if((tmpvar$1818=$$jQueryAjaxSettingsAbs.$native.url,tmpvar$1819=null,(tmpvar$1818.equals&&!tmpvar$1818.equals(tmpvar$1819))||tmpvar$1818!==tmpvar$1819)){
            return $$$cjl359.JSString($$jQueryAjaxSettingsAbs.$native.url);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getUrl=getUrl;
    getUrl.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getUrl']};};
    function setUrl(url$1820){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.url=url$1820.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setUrl=setUrl;
    setUrl.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setUrl']};};
    function getUsername(){
        /*Begin dynamic block*/
        if((tmpvar$1821=$$jQueryAjaxSettingsAbs.$native.username,tmpvar$1822=null,(tmpvar$1821.equals&&!tmpvar$1821.equals(tmpvar$1822))||tmpvar$1821!==tmpvar$1822)){
            return $$$cjl359.JSString($$jQueryAjaxSettingsAbs.$native.username);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getUsername=getUsername;
    getUsername.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getUsername']};};
    function setUsername(username$1823){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.username=username$1823.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setUsername=setUsername;
    setUsername.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'username',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setUsername']};};
    function getXhr(){
        /*Begin dynamic block*/
        return (tmpvar$1824=$$jQueryAjaxSettingsAbs.$native.xhr,$$$cl1.isOfType(tmpvar$1824,{t:$$$cl1.Anything})?tmpvar$1824:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'610:10-610:19','jqueryajaxsettings.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getXhr=getXhr;
    getXhr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Anything()?",19)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getXhr']};};
    function setXhr(xhr$1825){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.xhr=$$$cl1.$JsCallable(xhr$1825/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setXhr=setXhr;
    setXhr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'xhr',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setXhr']};};
    function getXhrFields(){
        /*Begin dynamic block*/
        return $$$cl1.Comprehension(function(){
            var it$1826=$$jQueryAjaxSettingsAbs.$native.xhrFields.iterator();
            var key$1827,val$1828;
            var next$val$1828=function(){
                var entry$1829;
                if((entry$1829=it$1826.next())!==$$$cl1.getFinished()){
                    key$1827=entry$1829.key;
                    val$1828=entry$1829.item;
                    return entry$1829;
                }
                val$1828=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1828();
            return function(){
                if(val$1828!==undefined){
                    var key$1827$1830=key$1827;
                    var val$1828$1831=val$1828;
                    var tmpvar$1832=$$$cl1.Entry($$$cjl359.JSString(key$1827$1830),$$$cjl359.JSObject(val$1828$1831),{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSObject}});
                    next$val$1828();
                    return tmpvar$1832;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSObject}}}}).sequence;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getXhrFields=getXhrFields;
    getXhrFields.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSObject}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getXhrFields']};};
    function setXhrFields(xhrFields$1833){
        if(xhrFields$1833===undefined){xhrFields$1833=$$$cl1.getEmpty();}
        var xhrNative$1834=$$$cjl359.createJSObject();
        var it$1835 = xhrFields$1833.iterator();
        var item$1836;while ((item$1836=it$1835.next())!==$$$cl1.getFinished()){
            var key$1837=item$1836.key;
            var val$1838=item$1836.item;
            /*Begin dynamic block*/
            $$$cjl359.objectDefineProperty(xhrNative$1834,key$1837,$$$cjl359.DataDescriptor(true,false,true,true,val$1838.$native));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.xhrFields=xhrNative$1834.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setXhrFields=setXhrFields;
    setXhrFields.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'xhrFields',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSObject}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setXhrFields']};};
    return $$jQueryAjaxSettingsAbs;
}
JQueryAjaxSettingsAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs']};};
exports.JQueryAjaxSettingsAbs=JQueryAjaxSettingsAbs;
function $init$JQueryAjaxSettingsAbs(){
    if (JQueryAjaxSettingsAbs.$$===undefined){
        $$$cl1.initTypeProto(JQueryAjaxSettingsAbs,'ceylon.js.jquery::JQueryAjaxSettingsAbs',$$$cjl359.JSObjectAbs);
    }
    return JQueryAjaxSettingsAbs;
}
exports.$init$JQueryAjaxSettingsAbs=$init$JQueryAjaxSettingsAbs;
$init$JQueryAjaxSettingsAbs();
function JQueryAjaxSettings(n$1839, $$jQueryAjaxSettings){
    $init$JQueryAjaxSettings();
    if ($$jQueryAjaxSettings===undefined)$$jQueryAjaxSettings=new JQueryAjaxSettings.$$;
    $$jQueryAjaxSettings.n$1839_=n$1839;
    JQueryAjaxSettingsAbs($$jQueryAjaxSettings);
    $$$cl1.defineAttr($$jQueryAjaxSettings,'n$1839',function(){return this.n$1839_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettings,d:['ceylon.js.jquery','JQueryAjaxSettings','$at','n']};});
    /*Begin dynamic block*/
    $$jQueryAjaxSettings.$native=n$1839;/*End dynamic block*/
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
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'context',function(){return this.context_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSObject}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','context']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'crossDomain',function(){return this.crossDomain_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','crossDomain']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'data',function(){return this.data_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSObject}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','data']};});
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
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'beforeSend',function(){return beforeSend;},function(beforeSend$1840){return beforeSend=beforeSend$1840;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Boolean}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','beforeSend']};});
    $$jQueryAjaxSettingsBuilder.$prop$getBeforeSend={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Boolean}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','beforeSend']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getBeforeSend.get=function(){return beforeSend};
    var dataFilter=null;
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'dataFilter',function(){return dataFilter;},function(dataFilter$1841){return dataFilter=dataFilter$1841;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataFilter']};});
    $$jQueryAjaxSettingsBuilder.$prop$getDataFilter={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataFilter']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getDataFilter.get=function(){return dataFilter};
    var xhr=null;
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'xhr',function(){return xhr;},function(xhr$1842){return xhr=xhr$1842;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhr']};});
    $$jQueryAjaxSettingsBuilder.$prop$getXhr={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhr']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getXhr.get=function(){return xhr};
    var complete=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'complete',function(){return complete;},function(complete$1843){return complete=complete$1843;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','complete']};});
    $$jQueryAjaxSettingsBuilder.$prop$getComplete={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','complete']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getComplete.get=function(){return complete};
    var error=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'error',function(){return error;},function(error$1844){return error=error$1844;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','error']};});
    $$jQueryAjaxSettingsBuilder.$prop$getError={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','error']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getError.get=function(){return error};
    var success=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'success',function(){return success;},function(success$1845){return success=success$1845;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','success']};});
    $$jQueryAjaxSettingsBuilder.$prop$getSuccess={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','success']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getSuccess.get=function(){return success};
    var accepts=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'accepts',function(){return accepts;},function(accepts$1846){return accepts=accepts$1846;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','accepts']};});
    $$jQueryAjaxSettingsBuilder.$prop$getAccepts={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','accepts']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getAccepts.get=function(){return accepts};
    var contents=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'contents',function(){return contents;},function(contents$1847){return contents=contents$1847;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl359.RegExp}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contents']};});
    $$jQueryAjaxSettingsBuilder.$prop$getContents={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl359.RegExp}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contents']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getContents.get=function(){return contents};
    var headers=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'headers',function(){return headers;},function(headers$1848){return headers=headers$1848;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','headers']};});
    $$jQueryAjaxSettingsBuilder.$prop$getHeaders={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','headers']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getHeaders.get=function(){return headers};
    var converters=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'converters',function(){return converters;},function(converters$1849){return converters=converters$1849;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl359.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','converters']};});
    $$jQueryAjaxSettingsBuilder.$prop$getConverters={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl359.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','converters']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getConverters.get=function(){return converters};
    var xhrFields=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'xhrFields',function(){return xhrFields;},function(xhrFields$1850){return xhrFields=xhrFields$1850;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl359.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhrFields']};});
    $$jQueryAjaxSettingsBuilder.$prop$getXhrFields={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl359.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhrFields']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getXhrFields.get=function(){return xhrFields};
    var statusCode=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'statusCode',function(){return statusCode;},function(statusCode$1851){return statusCode=statusCode$1851;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.Integer},Item:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','statusCode']};});
    $$jQueryAjaxSettingsBuilder.$prop$getStatusCode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.Integer},Item:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','statusCode']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getStatusCode.get=function(){return statusCode};
    function toNative(){
        var settings$1852;
        /*Begin dynamic block*/
        settings$1852=JQueryAjaxSettings((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'43:33-43:38','jqueryajaxsettingsbuilder.ceylon'):Object));/*End dynamic block*/
        var acceptsNative$1853;
        /*Begin dynamic block*/
        acceptsNative$1853=$$$cl1.Comprehension(function(){
            var it$1854=$$jQueryAjaxSettingsBuilder.accepts.iterator();
            var key$1855,val$1856;
            var next$val$1856=function(){
                var entry$1857;
                if((entry$1857=it$1854.next())!==$$$cl1.getFinished()){
                    key$1855=entry$1857.key;
                    val$1856=entry$1857.item;
                    return entry$1857;
                }
                val$1856=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1856();
            return function(){
                if(val$1856!==undefined){
                    var key$1855$1858=key$1855;
                    var val$1856$1859=val$1856;
                    var tmpvar$1860=$$$cl1.Entry((tmpvar$1861=$$$cjl359.createJSString(key$1855$1858),$$$cl1.isOfType(tmpvar$1861,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1861:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'47:74-47:92','jqueryajaxsettingsbuilder.ceylon')),(tmpvar$1862=$$$cjl359.createJSString(val$1856$1859),$$$cl1.isOfType(tmpvar$1862,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1862:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'47:95-47:113','jqueryajaxsettingsbuilder.ceylon')),{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSString}});
                    next$val$1856();
                    return tmpvar$1860;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSString}}}}).sequence;/*End dynamic block*/
        settings$1852.setAccepts(acceptsNative$1853);
        settings$1852.setAsync($$jQueryAjaxSettingsBuilder.async);
        var bS$1863;
        if((bS$1863=$$jQueryAjaxSettingsBuilder.beforeSend)!==null){
            settings$1852.setBeforeSend($$$cl1.$JsCallable(bS$1863,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Boolean}}));
        }
        var c$1864;
        if((c$1864=$$jQueryAjaxSettingsBuilder.cache)!==null){
            settings$1852.setCache(c$1864);
        }
        settings$1852.setComplete($$jQueryAjaxSettingsBuilder.complete);
        var contentsNative$1865;
        /*Begin dynamic block*/
        contentsNative$1865=$$$cl1.Comprehension(function(){
            var it$1866=$$jQueryAjaxSettingsBuilder.contents.iterator();
            var key$1867,val$1868;
            var next$val$1868=function(){
                var entry$1869;
                if((entry$1869=it$1866.next())!==$$$cl1.getFinished()){
                    key$1867=entry$1869.key;
                    val$1868=entry$1869.item;
                    return entry$1869;
                }
                val$1868=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1868();
            return function(){
                if(val$1868!==undefined){
                    var key$1867$1870=key$1867;
                    var val$1868$1871=val$1868;
                    var tmpvar$1872=$$$cl1.Entry((tmpvar$1873=$$$cjl359.createJSString(key$1867$1870),$$$cl1.isOfType(tmpvar$1873,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1873:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'60:74-60:92','jqueryajaxsettingsbuilder.ceylon')),val$1868$1871,{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.RegExp}});
                    next$val$1868();
                    return tmpvar$1872;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.RegExp}}}}).sequence;/*End dynamic block*/
        settings$1852.setContents(contentsNative$1865);
        settings$1852.setContentType($$jQueryAjaxSettingsBuilder.contentType);
        var c$1874;
        if((c$1874=$$jQueryAjaxSettingsBuilder.context)!==null){
            settings$1852.setContext(c$1874);
        }
        var convertersNative$1875;
        /*Begin dynamic block*/
        convertersNative$1875=$$$cl1.Comprehension(function(){
            var it$1876=$$jQueryAjaxSettingsBuilder.converters.iterator();
            var key$1877,val$1878;
            var next$val$1878=function(){
                var entry$1879;
                if((entry$1879=it$1876.next())!==$$$cl1.getFinished()){
                    key$1877=entry$1879.key;
                    val$1878=entry$1879.item;
                    return entry$1879;
                }
                val$1878=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1878();
            return function(){
                if(val$1878!==undefined){
                    var key$1877$1880=key$1877;
                    var val$1878$1881=val$1878;
                    var tmpvar$1882=$$$cl1.Entry((tmpvar$1883=$$$cjl359.createJSString(key$1877$1880),$$$cl1.isOfType(tmpvar$1883,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1883:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'69:80-69:98','jqueryajaxsettingsbuilder.ceylon')),val$1878$1881,{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSObject}});
                    next$val$1878();
                    return tmpvar$1882;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSObject}}}}).sequence;/*End dynamic block*/
        settings$1852.setConverters(convertersNative$1875);
        var cD$1884;
        if((cD$1884=$$jQueryAjaxSettingsBuilder.crossDomain)!==null){
            settings$1852.setCrossDomain(cD$1884);
        }
        settings$1852.setData($$jQueryAjaxSettingsBuilder.data);
        var dF$1885;
        if((dF$1885=$$jQueryAjaxSettingsBuilder.dataFilter)!==null){
            settings$1852.setDataFilter($$$cl1.$JsCallable(dF$1885,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}));
        }
        var dataTypeS$1886=$$$cl1.String("",0);
        function setDataTypeS$1886(dataTypeS$1887){return dataTypeS$1886=dataTypeS$1887;};
        var it$1888 = $$jQueryAjaxSettingsBuilder.dataType.iterator();
        var dT$1889;while ((dT$1889=it$1888.next())!==$$$cl1.getFinished()){
            (dataTypeS$1886=dataTypeS$1886.plus($$$cl1.String(" ",1).plus(dT$1889.string)));
        }
        settings$1852.setDataType(dataTypeS$1886);
        settings$1852.setError($$jQueryAjaxSettingsBuilder.error);
        settings$1852.setGlobal($$jQueryAjaxSettingsBuilder.global);
        var headersNative$1890;
        /*Begin dynamic block*/
        headersNative$1890=$$$cl1.Comprehension(function(){
            var it$1891=$$jQueryAjaxSettingsBuilder.headers.iterator();
            var key$1892,val$1893;
            var next$val$1893=function(){
                var entry$1894;
                if((entry$1894=it$1891.next())!==$$$cl1.getFinished()){
                    key$1892=entry$1894.key;
                    val$1893=entry$1894.item;
                    return entry$1894;
                }
                val$1893=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1893();
            return function(){
                if(val$1893!==undefined){
                    var key$1892$1895=key$1892;
                    var val$1893$1896=val$1893;
                    var tmpvar$1897=$$$cl1.Entry((tmpvar$1898=$$$cjl359.createJSString(key$1892$1895),$$$cl1.isOfType(tmpvar$1898,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1898:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'88:74-88:92','jqueryajaxsettingsbuilder.ceylon')),(tmpvar$1899=$$$cjl359.createJSString(val$1893$1896),$$$cl1.isOfType(tmpvar$1899,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1899:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'88:95-88:113','jqueryajaxsettingsbuilder.ceylon')),{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSString}});
                    next$val$1893();
                    return tmpvar$1897;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSString}}}}).sequence;/*End dynamic block*/
        settings$1852.setHeaders(headersNative$1890);
        settings$1852.setIfModified($$jQueryAjaxSettingsBuilder.ifModified);
        var iL$1900;
        if((iL$1900=$$jQueryAjaxSettingsBuilder.isLocal)!==null){
            settings$1852.setIsLocal(iL$1900);
        }
        var settingsNative$1901=createJSONPSettings($$jQueryAjaxSettingsBuilder.jsonp.jsonp,$$jQueryAjaxSettingsBuilder.jsonp.jsonpCallback);
        var sN$1902;
        if((sN$1902=settingsNative$1901)!==null){
            settings$1852.setJsonp(sN$1902);
        }
        var jC$1903;
        if((jC$1903=$$jQueryAjaxSettingsBuilder.jsonpCallback)!==null){
            settings$1852.setJsonpCallback(jC$1903);
        }
        var mT$1904;
        if((mT$1904=$$jQueryAjaxSettingsBuilder.mimeType)!==null){
            settings$1852.setMimeType(mT$1904);
        }
        var p$1905;
        if((p$1905=$$jQueryAjaxSettingsBuilder.password)!==null){
            settings$1852.setPassword(p$1905);
        }
        settings$1852.setProcessData($$jQueryAjaxSettingsBuilder.processData);
        var sC$1906;
        if((sC$1906=$$jQueryAjaxSettingsBuilder.scriptCharset)!==null){
            settings$1852.setScriptCharset(sC$1906);
        }
        var statusCodeNative$1907;
        /*Begin dynamic block*/
        statusCodeNative$1907=$$$cl1.Comprehension(function(){
            var it$1908=$$jQueryAjaxSettingsBuilder.statusCode.iterator();
            var key$1909,val$1910;
            var next$val$1910=function(){
                var entry$1911;
                if((entry$1911=it$1908.next())!==$$$cl1.getFinished()){
                    key$1909=entry$1911.key;
                    val$1910=entry$1911.item;
                    return entry$1911;
                }
                val$1910=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1910();
            return function(){
                if(val$1910!==undefined){
                    var key$1909$1912=key$1909;
                    var val$1910$1913=val$1910;
                    var tmpvar$1914=$$$cl1.Entry((tmpvar$1915=$$$cjl359.createJSString(key$1909$1912),$$$cl1.isOfType(tmpvar$1915,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1915:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'114:145-114:163','jqueryajaxsettingsbuilder.ceylon')),$$$cl1.$JsCallable(val$1910$1913,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}),{Key:{t:$$$cjl359.JSNumber},Item:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]}});
                    next$val$1910();
                    return tmpvar$1914;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSNumber},Item:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]}}}}).sequence;/*End dynamic block*/
        settings$1852.setStatusCode(statusCodeNative$1907);
        settings$1852.setSuccess($$jQueryAjaxSettingsBuilder.success);
        var t$1916;
        if((t$1916=$$jQueryAjaxSettingsBuilder.timeout)!==null){
            settings$1852.setTimeout(t$1916);
        }
        settings$1852.setTraditional($$jQueryAjaxSettingsBuilder.traditional);
        settings$1852.setType($$jQueryAjaxSettingsBuilder.type);
        settings$1852.setTraditional($$jQueryAjaxSettingsBuilder.traditional);
        settings$1852.setType($$jQueryAjaxSettingsBuilder.type);
        var u$1917;
        if((u$1917=$$jQueryAjaxSettingsBuilder.url)!==null){
            settings$1852.setUrl(u$1917);
        }
        var user$1918;
        if((user$1918=$$jQueryAjaxSettingsBuilder.username)!==null){
            settings$1852.setUsername(user$1918);
        }
        var x$1919;
        if((x$1919=$$jQueryAjaxSettingsBuilder.xhr)!==null){
            settings$1852.setXhr($$$cl1.$JsCallable(x$1919,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
        }
        var xhrFieldsNative$1920;
        /*Begin dynamic block*/
        xhrFieldsNative$1920=$$$cl1.Comprehension(function(){
            var it$1921=$$jQueryAjaxSettingsBuilder.xhrFields.iterator();
            var key$1922,val$1923;
            var next$val$1923=function(){
                var entry$1924;
                if((entry$1924=it$1921.next())!==$$$cl1.getFinished()){
                    key$1922=entry$1924.key;
                    val$1923=entry$1924.item;
                    return entry$1924;
                }
                val$1923=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1923();
            return function(){
                if(val$1923!==undefined){
                    var key$1922$1925=key$1922;
                    var val$1923$1926=val$1923;
                    var tmpvar$1927=$$$cl1.Entry((tmpvar$1928=$$$cjl359.createJSString(key$1922$1925),$$$cl1.isOfType(tmpvar$1928,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1928:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'136:78-136:96','jqueryajaxsettingsbuilder.ceylon')),(tmpvar$1929=$$$cjl359.createJSString(val$1923$1926),$$$cl1.isOfType(tmpvar$1929,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1929:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'136:99-136:117','jqueryajaxsettingsbuilder.ceylon')),{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSObject}});
                    next$val$1923();
                    return tmpvar$1927;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl359.JSString},Item:{t:$$$cjl359.JSObject}}}}).sequence;/*End dynamic block*/
        settings$1852.setXhrFields(xhrFieldsNative$1920);
        return settings$1852;
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
    $$$cjd975.EventAbs($$jQueryEventAbs);
    function data(){
        /*Begin dynamic block*/
        return (tmpvar$1930=$$jQueryEventAbs.$native.data,$$$cl1.isOfType(tmpvar$1930,{t:$$$cl1.Anything})?tmpvar$1930:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'8:10-8:20','jqueryevent.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryEventAbs.data=data;
    data.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','data']};};
    function delegateTarget(){
        /*Begin dynamic block*/
        return $$$cjd975.Element($$jQueryEventAbs.$native.delegateTarget);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.delegateTarget=delegateTarget;
    delegateTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjd975.Element},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','delegateTarget']};};
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
        return $$$cjl359.JSString($$jQueryEventAbs.$native.namespace);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.namespace=namespace;
    namespace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','namespace']};};
    function relatedTarget(){
        /*Begin dynamic block*/
        return $$$cjd975.Element($$jQueryEventAbs.$native.relatedTarget);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.relatedTarget=relatedTarget;
    relatedTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjd975.Element},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','relatedTarget']};};
    function result(){
        /*Begin dynamic block*/
        return (tmpvar$1931=$$jQueryEventAbs.$native.result,$$$cl1.isOfType(tmpvar$1931,{t:$$$cl1.Anything})?tmpvar$1931:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'62:10-62:22','jqueryevent.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryEventAbs.result=result;
    result.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','result']};};
    function pageX(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$jQueryEventAbs.$native.pageX);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.pageX=pageX;
    pageX.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','pageX']};};
    function pageY(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$jQueryEventAbs.$native.pageY);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.pageY=pageY;
    pageY.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','pageY']};};
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
        return $$$cjl359.JSNumber($$jQueryEventAbs.$native.which);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.which=which;
    which.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','which']};};
    return $$jQueryEventAbs;
}
JQueryEventAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjd975.EventAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','JQueryEventAbs']};};
exports.JQueryEventAbs=JQueryEventAbs;
function $init$JQueryEventAbs(){
    if (JQueryEventAbs.$$===undefined){
        $$$cl1.initTypeProto(JQueryEventAbs,'ceylon.js.jquery::JQueryEventAbs',$$$cjd975.EventAbs);
    }
    return JQueryEventAbs;
}
exports.$init$JQueryEventAbs=$init$JQueryEventAbs;
$init$JQueryEventAbs();
function JQueryEvent(n$1932, $$jQueryEvent){
    $init$JQueryEvent();
    if ($$jQueryEvent===undefined)$$jQueryEvent=new JQueryEvent.$$;
    $$jQueryEvent.n$1932_=n$1932;
    JQueryEventAbs($$jQueryEvent);
    $$$cl1.defineAttr($$jQueryEvent,'n$1932',function(){return this.n$1932_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryEvent,d:['ceylon.js.jquery','JQueryEvent','$at','n']};});
    $$jQueryEvent.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryEvent,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','JQueryEvent','$at','native']};}};
    /*Begin dynamic block*/
    $$jQueryEvent.$native=n$1932;/*End dynamic block*/
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
var $$$cjx1933=require('ceylon/js/xmlhttprequest/0.6.0/ceylon.js.xmlhttprequest-0.6.0');
$$$cl1.$addmod$($$$cjx1933,'ceylon.js.xmlhttprequest/0.6.0');
function JQXHRAbs($$jQXHRAbs){
    $init$JQXHRAbs();
    if ($$jQXHRAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl359.JSObjectAbs($$jQXHRAbs);
    function done(done$1934){
        /*Begin dynamic block*/
        return JQXHR($$jQXHRAbs.$native.done(/*NULL PARAM!*/done$1934));
        /*End dynamic block*/
    }
    $$jQXHRAbs.done=done;
    done.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'done',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','done']};};
    function fail(fail$1935){
        /*Begin dynamic block*/
        return JQXHR($$jQXHRAbs.$native.fail(/*NULL PARAM!*/fail$1935));
        /*End dynamic block*/
    }
    $$jQXHRAbs.fail=fail;
    fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'fail',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','fail']};};
    function always(always$1936){
        /*Begin dynamic block*/
        return JQXHR($$jQXHRAbs.$native.always(/*NULL PARAM!*/always$1936));
        /*End dynamic block*/
    }
    $$jQXHRAbs.always=always;
    always.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'always',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','always']};};
    function doThen(done$1937,fail$1938){
        /*Begin dynamic block*/
        return JQXHR($$jQXHRAbs.$native.then(/*NULL PARAM!*/done$1937/*NULL PARAM!*/,fail$1938));
        /*End dynamic block*/
    }
    $$jQXHRAbs.doThen=doThen;
    doThen.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'done',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'fail',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','doThen']};};
    function overrideMimeType(mime$1939){
        
        var case$1940=mime$1939;
        if ($$$cl1.isOfType(mime$1939,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$jQXHRAbs.$native.overrideMimeType(/*NULL PARAM!*/case$1940.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(mime$1939,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$jQXHRAbs.$native.overrideMimeType(/*NULL PARAM!*/case$1940.$native);
            /*End dynamic block*/
        }
    }
    $$jQXHRAbs.overrideMimeType=overrideMimeType;
    overrideMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'mime',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','overrideMimeType']};};
    function readyState(){
        /*Begin dynamic block*/
        var readyState$1941=$$jQXHRAbs.$native.readyState;
        $prop$getReadyState$1941={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQXHRAbs','$m','readyState','$at','readyState']};}};
        $prop$getReadyState$1941.get=function(){return readyState$1941};
        if((tmpvar$1942=readyState$1941,tmpvar$1943=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'52:21-52:34','jqxhr.ceylon'):XMLHttpRequest).UNSENT,(tmpvar$1942.equals&&tmpvar$1942.equals(tmpvar$1943))||tmpvar$1942===tmpvar$1943)){
            return $$$cjx1933.getReadyStateUnsent();
        }else {
            if((tmpvar$1944=readyState$1941,tmpvar$1945=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'54:28-54:41','jqxhr.ceylon'):XMLHttpRequest).OPENED,(tmpvar$1944.equals&&tmpvar$1944.equals(tmpvar$1945))||tmpvar$1944===tmpvar$1945)){
                return $$$cjx1933.getReadyStateOpened();
            }else {
                if((tmpvar$1946=readyState$1941,tmpvar$1947=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'56:28-56:41','jqxhr.ceylon'):XMLHttpRequest).HEADERS_RECEIVED,(tmpvar$1946.equals&&tmpvar$1946.equals(tmpvar$1947))||tmpvar$1946===tmpvar$1947)){
                    return $$$cjx1933.getReadyStateHeadersReceived();
                }else {
                    if((tmpvar$1948=readyState$1941,tmpvar$1949=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'58:28-58:41','jqxhr.ceylon'):XMLHttpRequest).LOADING,(tmpvar$1948.equals&&tmpvar$1948.equals(tmpvar$1949))||tmpvar$1948===tmpvar$1949)){
                        return $$$cjx1933.getReadyStateLoading();
                    }else {
                        return (tmpvar$1950=(typeof readyStateDone==='undefined'||readyStateDone===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: readyStateDone")),'61:11-61:24','jqxhr.ceylon'):readyStateDone),$$$cl1.isOfType(tmpvar$1950,{t:$$$cl1.Anything})?tmpvar$1950:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'61:11-61:24','jqxhr.ceylon'));
                    }
                }
            }
        }/*End dynamic block*/
    }
    $$jQXHRAbs.readyState=readyState;
    readyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjx1933.ReadyState},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','readyState']};};
    function status(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$jQXHRAbs.$native.status);
        /*End dynamic block*/
    }
    $$jQXHRAbs.status=status;
    status.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','status']};};
    function statusText(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$jQXHRAbs.$native.statusText);
        /*End dynamic block*/
    }
    $$jQXHRAbs.statusText=statusText;
    statusText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','statusText']};};
    function responseText(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$jQXHRAbs.$native.responseText);
        /*End dynamic block*/
    }
    $$jQXHRAbs.responseText=responseText;
    responseText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','responseText']};};
    function responseXML(){
        /*Begin dynamic block*/
        var responseXML$1951=$$jQXHRAbs.$native.responseXML;
        $prop$getResponseXML$1951={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQXHRAbs','$m','responseXML','$at','responseXML']};}};
        $prop$getResponseXML$1951.get=function(){return responseXML$1951};
        if((tmpvar$1952=responseXML$1951,tmpvar$1953=null,(tmpvar$1952.equals&&!tmpvar$1952.equals(tmpvar$1953))||tmpvar$1952!==tmpvar$1953)){
            return $$$cjd975.Document(responseXML$1951);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQXHRAbs.responseXML=responseXML;
    responseXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd975.Document}]},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','responseXML']};};
    function setRequestHeader(header$1954,val$1955){
        
        var case$1956=header$1954;
        if ($$$cl1.isOfType(header$1954,{t:$$$cl1.String})) {
            
            var case$1957=val$1955;
            if ($$$cl1.isOfType(val$1955,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$jQXHRAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1956.valueOf()/*NULL PARAM!*/,case$1957.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$1955,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                $$jQXHRAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1956.valueOf()/*NULL PARAM!*/,case$1957.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(header$1954,{t:$$$cjl359.JSString})) {
            
            var case$1958=val$1955;
            if ($$$cl1.isOfType(val$1955,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$jQXHRAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1956.$native/*NULL PARAM!*/,case$1958.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$1955,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                $$jQXHRAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1956.$native/*NULL PARAM!*/,case$1958.$native);
                /*End dynamic block*/
            }
        }
    }
    $$jQXHRAbs.setRequestHeader=setRequestHeader;
    setRequestHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'header',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','setRequestHeader']};};
    function getAllResponseHeaders(){
        /*Begin dynamic block*/
        var rheaders$1959=$$jQXHRAbs.$native.getAllResponseHeaders();
        $prop$getRheaders$1959={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQXHRAbs','$m','getAllResponseHeaders','$at','rheaders']};}};
        $prop$getRheaders$1959.get=function(){return rheaders$1959};
        if((tmpvar$1960=rheaders$1959,tmpvar$1961=null,(tmpvar$1960.equals&&!tmpvar$1960.equals(tmpvar$1961))||tmpvar$1960!==tmpvar$1961)){
            return $$$cjl359.JSString(rheaders$1959);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQXHRAbs.getAllResponseHeaders=getAllResponseHeaders;
    getAllResponseHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','getAllResponseHeaders']};};
    function getResponseHeader(header$1962){
        /*Begin dynamic block*/
        var rheader$1963;
        $prop$getRheader$1963={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQXHRAbs','$m','getResponseHeader','$at','rheader']};}};
        $prop$getRheader$1963.get=function(){return rheader$1963};
        
        var case$1964=header$1962;
        if ($$$cl1.isOfType(header$1962,{t:$$$cl1.String})) {
            rheader$1963=$$jQXHRAbs.$native.getResponseHeader(/*NULL PARAM!*/case$1964.valueOf());
        }else if ($$$cl1.isOfType(header$1962,{t:$$$cjl359.JSString})) {
            rheader$1963=$$jQXHRAbs.$native.getResponseHeader(/*NULL PARAM!*/case$1964.$native);
        }if((tmpvar$1965=rheader$1963,tmpvar$1966=null,(tmpvar$1965.equals&&!tmpvar$1965.equals(tmpvar$1966))||tmpvar$1965!==tmpvar$1966)){
            return $$$cjl359.JSString(rheader$1963);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQXHRAbs.getResponseHeader=getResponseHeader;
    getResponseHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[{$nm:'header',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','getResponseHeader']};};
    function abort(){
        /*Begin dynamic block*/
        $$jQXHRAbs.$native.abort();
        /*End dynamic block*/
    }
    $$jQXHRAbs.abort=abort;
    abort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','abort']};};
    function statusCode(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$jQXHRAbs.$native.statusCode());
        /*End dynamic block*/
    }
    $$jQXHRAbs.statusCode=statusCode;
    statusCode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','statusCode']};};
    return $$jQXHRAbs;
}
JQXHRAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','JQXHRAbs']};};
exports.JQXHRAbs=JQXHRAbs;
function $init$JQXHRAbs(){
    if (JQXHRAbs.$$===undefined){
        $$$cl1.initTypeProto(JQXHRAbs,'ceylon.js.jquery::JQXHRAbs',$$$cjl359.JSObjectAbs);
    }
    return JQXHRAbs;
}
exports.$init$JQXHRAbs=$init$JQXHRAbs;
$init$JQXHRAbs();
function JQXHR(n$1967, $$jQXHR){
    $init$JQXHR();
    if ($$jQXHR===undefined)$$jQXHR=new JQXHR.$$;
    $$jQXHR.n$1967_=n$1967;
    JQXHRAbs($$jQXHR);
    $$$cl1.defineAttr($$jQXHR,'n$1967',function(){return this.n$1967_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQXHR,d:['ceylon.js.jquery','JQXHR','$at','n']};});
    $$jQXHR.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQXHR,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','JQXHR','$at','native']};}};
    /*Begin dynamic block*/
    $$jQXHR.$native=n$1967;/*End dynamic block*/
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
    $$$cjl359.JSObjectAbs($$promiseAbs);
    function always(alwaysCallbacks$1968){
        if(alwaysCallbacks$1968===undefined){alwaysCallbacks$1968=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Promise($$promiseAbs.$native.always(/*NULL PARAM!*/alwaysCallbacks$1968));
        /*End dynamic block*/
    }
    $$promiseAbs.always=always;
    always.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'alwaysCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','PromiseAbs','$m','always']};};
    function done(doneCallbacks$1969){
        if(doneCallbacks$1969===undefined){doneCallbacks$1969=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Promise($$promiseAbs.$native.done(/*NULL PARAM!*/doneCallbacks$1969));
        /*End dynamic block*/
    }
    $$promiseAbs.done=done;
    done.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'doneCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','PromiseAbs','$m','done']};};
    function fail(failCallbacks$1970){
        if(failCallbacks$1970===undefined){failCallbacks$1970=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Promise($$promiseAbs.$native.fail(/*NULL PARAM!*/failCallbacks$1970));
        /*End dynamic block*/
    }
    $$promiseAbs.fail=fail;
    fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'failCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','PromiseAbs','$m','fail']};};
    $$promiseAbs.thenFilter$defs$failFilter=function(doneFilter$1971,failFilter$1972,progressFilter$1973){return null;};
    $$promiseAbs.thenFilter$defs$progressFilter=function(doneFilter$1971,failFilter$1972,progressFilter$1973){return null;};
    function thenFilter(doneFilter$1971,failFilter$1972,progressFilter$1973){
        if(failFilter$1972===undefined){failFilter$1972=$$promiseAbs.thenFilter$defs$failFilter(doneFilter$1971,failFilter$1972,progressFilter$1973);}
        if(progressFilter$1973===undefined){progressFilter$1973=$$promiseAbs.thenFilter$defs$progressFilter(doneFilter$1971,failFilter$1972,progressFilter$1973);}
        /*Begin dynamic block*/
        return Promise($$promiseAbs.$native.then(/*NULL PARAM!*/$$$cl1.$JsCallable(doneFilter$1971,[],{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,failFilter$1972/*NULL PARAM!*/,progressFilter$1973));
        /*End dynamic block*/
    }
    $$promiseAbs.thenFilter=thenFilter;
    thenFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'doneFilter',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'failFilter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}},{$nm:'progressFilter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','PromiseAbs','$m','thenFilter']};};
    return $$promiseAbs;
}
PromiseAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','PromiseAbs']};};
exports.PromiseAbs=PromiseAbs;
function $init$PromiseAbs(){
    if (PromiseAbs.$$===undefined){
        $$$cl1.initTypeProto(PromiseAbs,'ceylon.js.jquery::PromiseAbs',$$$cjl359.JSObjectAbs);
    }
    return PromiseAbs;
}
exports.$init$PromiseAbs=$init$PromiseAbs;
$init$PromiseAbs();
function Promise(n$1974, $$promise){
    $init$Promise();
    if ($$promise===undefined)$$promise=new Promise.$$;
    $$promise.n$1974_=n$1974;
    PromiseAbs($$promise);
    $$$cl1.defineAttr($$promise,'n$1974',function(){return this.n$1974_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Promise,d:['ceylon.js.jquery','Promise','$at','n']};});
    $$promise.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Promise,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','Promise','$at','native']};}};
    /*Begin dynamic block*/
    $$promise.$native=n$1974;/*End dynamic block*/
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
    $$$cjl359.JSObjectAbs($$tweenAbs);
    function getInterval(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$tweenAbs.$native.interval);
        /*End dynamic block*/
    }
    $$tweenAbs.getInterval=getInterval;
    getInterval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:TweenAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','getInterval']};};
    function test(test$1975){
        if(test$1975===undefined){test$1975=$$$cl1.getEmpty();}
    }
    $$tweenAbs.test=test;
    test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:TweenAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','test']};};
    function setInterval(interval$1976){
        /*Begin dynamic block*/
        $$tweenAbs.$native.interval=interval$1976;
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
    function setOff(off$1977){
        /*Begin dynamic block*/
        $$tweenAbs.$native.interval=(typeof interval==='undefined'||interval===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: interval")),'33:21-33:28','tween.ceylon'):interval);
        /*End dynamic block*/
    }
    $$tweenAbs.setOff=setOff;
    setOff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'off',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:TweenAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','setOff']};};
    return $$tweenAbs;
}
TweenAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','TweenAbs']};};
exports.TweenAbs=TweenAbs;
function $init$TweenAbs(){
    if (TweenAbs.$$===undefined){
        $$$cl1.initTypeProto(TweenAbs,'ceylon.js.jquery::TweenAbs',$$$cjl359.JSObjectAbs);
    }
    return TweenAbs;
}
exports.$init$TweenAbs=$init$TweenAbs;
$init$TweenAbs();
function Tween(n$1978, $$tween){
    $init$Tween();
    if ($$tween===undefined)$$tween=new Tween.$$;
    $$tween.n$1978_=n$1978;
    TweenAbs($$tween);
    $$$cl1.defineAttr($$tween,'n$1978',function(){return this.n$1978_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Tween,d:['ceylon.js.jquery','Tween','$at','n']};});
    $$tween.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Tween,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','Tween','$at','native']};}};
    /*Begin dynamic block*/
    $$tween.$native=n$1978;/*End dynamic block*/
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
