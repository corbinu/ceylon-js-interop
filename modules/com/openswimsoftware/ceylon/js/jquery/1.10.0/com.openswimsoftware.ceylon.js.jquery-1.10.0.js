(function(define) { define(function(require, ex$, module) {
var $CCMM$={"$mod-deps":["ceylon.language\/1.1.0","com.openswimsoftware.ceylon.js.language\/1.8.0",{path:"com.openswimsoftware.ceylon.js.dom\/4.0.0",exp:1},{path:"com.openswimsoftware.ceylon.js.json\/1.0.0",exp:1},{path:"com.openswimsoftware.ceylon.js.xmlhttprequest\/0.6.0",exp:1}],"$mod-name":"com.openswimsoftware.ceylon.js.jquery","$mod-version":"1.10.0","$mod-bin":"7.0","com.openswimsoftware.ceylon.js.jquery":{TweenAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{getOff:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["returns if the tween is off"]},$nm:"getOff"},setOff:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$nm:"off"}]],$mt:"m",$an:{shared:[],doc:["sets if the tween is off"]},$nm:"setOff"},getInterval:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the tween interval"]},$nm:"getInterval"},setInterval:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"interval"}]],$mt:"m",$an:{shared:[],doc:["sets the tween interval"]},$nm:"setInterval"}},$nm:"TweenAbs"},DataType:{abstract:1,super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},of:[{$pk:".",$nm:"dataTypeXML"},{$pk:".",$nm:"dataTypeHtml"},{$pk:".",$nm:"dataTypeScript"},{$pk:".",$nm:"dataTypeJson"},{$pk:".",$nm:"dataTypeJsonp"},{$pk:".",$nm:"dataTypeText"}],$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"name"}],$mt:"c",$an:{abstract:[],shared:[],doc:["the ajax request data type"]},$at:{name$n67fnx:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$nm:"name"}},$nm:"DataType"},JQueryEventAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"EventAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{metaKey:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["was the meta key pressed while the event was fired"]},$nm:"metaKey"},result:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["last value returned by an event handler that was triggered by this event, unless the value was undefined"]},$nm:"result"},which:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["the specific key or mouse button that triggered the event if any"]},$nm:"which"},isPropagationStopped:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["was event.isPropagationStopped() was ever called on this event object."]},$nm:"isPropagationStopped"},isDefaultPrevented:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["was event.preventDefault() was ever called on this event object."]},$nm:"isDefaultPrevented"},delegateTarget:{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},$mt:"m",$an:{shared:[],doc:["the elment on which the jQuery event handler was attached"]},$nm:"delegateTarget"},data:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["optional data attached to the event method"]},$nm:"data"},relatedTarget:{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},$mt:"m",$an:{shared:[],doc:["the other element involved in the event, if any."]},$nm:"relatedTarget"},isImmediatePropogationStopped:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["was event.stopImmediatePropagation() was ever called on this event object."]},$nm:"isImmediatePropogationStopped"},pageX:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["the mouse position relative to the left edge of the document"]},$nm:"pageX"},pageY:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["the mouse position relative to the top edge of the document"]},$nm:"pageY"},namespace:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["namespace specified when the event was triggered"]},$nm:"namespace"}},$nm:"JQueryEventAbs"},visibleSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"visibleSelector"},dataTypeXML:{super:{$pk:".",$nm:"DataType"},$mt:"o",$an:{shared:[]},$nm:"dataTypeXML"},targetSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"targetSelector"},enabledSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"enabledSelector"},fileSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"fileSelector"},jQueryType:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryType"},onlyChildSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"onlyChildSelector"},jQueryError:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"message"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryError"},jQueryAjaxPrefilter:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"JQueryAjaxSettings"},{comp:"u",$ts:[{$pk:".",$nm:"JQueryAjaxSettings"},{comp:"u",$ts:[{$pk:".",$nm:"JQXHR"},{$pk:".",$nm:"Nothing"}]}]}]},{$mt:"tp",$pk:".",$nm:"JQueryAjaxSettings"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"JQueryAjaxSettings"},{comp:"u",$ts:[{$pk:".",$nm:"JQXHR"},{$pk:".",$nm:"Nothing"}]}]},{$mt:"tp",$pk:".",$nm:"JQueryAjaxSettings"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"JQXHR"},{$pk:".",$nm:"Nothing"}]},{$mt:"tp",$pk:".",$nm:"JQXHR"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"dataTypes"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryAjaxPrefilter"},jQueryHasData:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},$mt:"prm",$nm:"element"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryHasData"},passwordSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"passwordSelector"},jQueryParseHTML:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"data"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"}]},$mt:"prm",$def:1,$nm:"context"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$nm:"keepScripts"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryParseHTML"},lastChildSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"lastChildSelector"},jQueryUnique:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$mt:"prm",$nm:"arr"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryUnique"},Callbacks:{super:{$pk:".",$nm:"CallbacksAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a collection of callbacks"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$htfnhq:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"Callbacks"},JQXHR:{super:{$pk:".",$nm:"JQXHRAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a jQuery abstraction of XMLHttpRequest across browsers"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$jp5chl:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"JQXHR"},lastSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"lastSelector"},jQueryInArray:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"val"},{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$mt:"prm",$nm:"array"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"prm",$def:1,$nm:"fromIndex"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryInArray"},lastOfTypeSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"lastOfTypeSelector"},CallbacksAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{fired:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["have the callbacks been fired at least once"]},$nm:"fired"},remove:{$t:{$pk:".",$nm:"Callbacks"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"callbacks"}]],$mt:"m",$an:{shared:[],doc:["remove a callback or collection of callbacks"]},$nm:"remove"},fireWith:{$t:{$pk:".",$nm:"Callbacks"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"context"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"args"}]],$mt:"m",$an:{shared:[],doc:["fire all the backs with the given arguments and the given context"]},$nm:"fireWith"},lock:{$t:{$pk:".",$nm:"Callbacks"},$mt:"m",$an:{shared:[],doc:["lock the callback list in its current state"]},$nm:"lock"},empty:{$t:{$pk:".",$nm:"Callbacks"},$mt:"m",$an:{shared:[],doc:["remove all the callbacks from the list"]},$nm:"empty"},disable:{$t:{$pk:".",$nm:"Callbacks"},$mt:"m",$an:{shared:[],doc:["disable the callback list from doing anything"]},$nm:"disable"},locked:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["is the callback list locked"]},$nm:"locked"},add:{$t:{$pk:".",$nm:"Callbacks"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"callbacks"}]],$mt:"m",$an:{shared:[],doc:["add a callback or collection of callbacks"]},$nm:"add"},has:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[],doc:["does the collection contain the given callback"]},$nm:"has"},fire:{$t:{$pk:".",$nm:"Callbacks"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"args"}]],$mt:"m",$an:{shared:[],doc:["fire all the backs with the given arguments"]},$nm:"fire"},disabled:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["is the callback list disabled"]},$nm:"disabled"}},$nm:"CallbacksAbs"},jQueryExtendDeep:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$nm:"deep"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"target"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"objects"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryExtendDeep"},jQueryMerge:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$mt:"prm",$nm:"first"},{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$mt:"prm",$nm:"second"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryMerge"},jQueryAjax:{$t:{$pk:".",$nm:"JQXHR"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"url"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JQueryAjaxSettingsBuilder"}]},$mt:"prm",$def:1,$nm:"settings"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryAjax"},submitSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"submitSelector"},jQuerySetData:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},$mt:"prm",$nm:"element"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"key"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"data"}]],$mt:"m",$an:{shared:[]},$nm:"jQuerySetData"},dataTypeHtml:{super:{$pk:".",$nm:"DataType"},$mt:"o",$an:{shared:[]},$nm:"dataTypeHtml"},AnimateOptions:{super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},$ps:[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"duration"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"easing"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"queue"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"specialEasing"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$pk:".",$nm:"Tween"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"Tween"},{$pk:".",$nm:"Nothing"}]},{$mt:"tp",$pk:".",$nm:"Tween"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"step"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"Promise"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]}]}]},{$mt:"tp",$pk:".",$nm:"Promise"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"progress"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"complete"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"Promise"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$pk:".",$nm:"Nothing"}]}]},{$mt:"tp",$pk:".",$nm:"Promise"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Boolean"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"done"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"Promise"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$pk:".",$nm:"Nothing"}]}]},{$mt:"tp",$pk:".",$nm:"Promise"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Boolean"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"fail"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"Promise"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$pk:".",$nm:"Nothing"}]}]},{$mt:"tp",$pk:".",$nm:"Promise"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Boolean"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"always"}],$mt:"c",$an:{shared:[],doc:["options for creating an jQuery animations"]},$m:{toNative:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"m",$an:{shared:[],doc:["convert the options to a native object"]},$nm:"toNative"}},$at:{progress:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"Promise"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]}]}]},{$mt:"tp",$pk:".",$nm:"Promise"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"a",$an:{shared:[]},$nm:"progress"},queue:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]}]},$mt:"a",$an:{shared:[]},$nm:"queue"},duration:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]}]},$mt:"a",$an:{shared:[]},$nm:"duration"},easing:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"a",$an:{shared:[]},$nm:"easing"},fail:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"Promise"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$pk:".",$nm:"Nothing"}]}]},{$mt:"tp",$pk:".",$nm:"Promise"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Boolean"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"a",$an:{shared:[]},$nm:"fail"},specialEasing:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"}]},$mt:"a",$an:{shared:[]},$nm:"specialEasing"},complete:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"a",$an:{shared:[]},$nm:"complete"},done:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"Promise"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$pk:".",$nm:"Nothing"}]}]},{$mt:"tp",$pk:".",$nm:"Promise"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Boolean"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"a",$an:{shared:[]},$nm:"done"},always:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"Promise"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$pk:".",$nm:"Nothing"}]}]},{$mt:"tp",$pk:".",$nm:"Promise"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Boolean"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"a",$an:{shared:[]},$nm:"always"},step:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$pk:".",$nm:"Tween"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"Tween"},{$pk:".",$nm:"Nothing"}]},{$mt:"tp",$pk:".",$nm:"Tween"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"a",$an:{shared:[]},$nm:"step"}},$nm:"AnimateOptions"},JSONPSettings:{super:{$pk:".",$nm:"JSONPSettingsAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["settings for JSONP request"]},$at:{n$7qzp4n:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"},native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"}},$nm:"JSONPSettings"},JQueryAjaxSettings:{super:{$pk:".",$nm:"JQueryAjaxSettingsAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["settings for a JQuery AJAX request"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$w4i659:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"JQueryAjaxSettings"},JQuery:{super:{$pk:".",$nm:"JQueryAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$quq5ha:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"JQuery"},jqThis:{$t:{$pk:".",$nm:"JQuery"},$mt:"m",$an:{shared:[]},$nm:"jqThis"},focusSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"focusSelector"},emptySelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"emptySelector"},createJSONPSettings:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSONPSettings"}]},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$nm:"jsonp"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$def:1,$nm:"jsonpCallback"}]],$mt:"m",$an:{shared:[],doc:["create a new JSONP settings object"]},$nm:"createJSONPSettings"},inputSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"inputSelector"},jQueryIsArray:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryIsArray"},jQuerySetQueue:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},$mt:"prm",$nm:"element"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$def:1,$nm:"queueName"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"}],$pk:"$",$nm:"Sequential"}],$pk:"$",$nm:"Callable"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"callbacks"}]],$mt:"m",$an:{shared:[]},$nm:"jQuerySetQueue"},jQueryIsNumeric:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryIsNumeric"},jQueryGrep:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$mt:"prm",$nm:"array"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$nm:"invert"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryGrep"},JQueryAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{nextAll:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"selector"}]],$mt:"m",$an:{shared:[]},$nm:"nextAll"},setPropEntries:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"properties"}]],$mt:"m",$an:{shared:[]},$nm:"setPropEntries"},animate:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"prm",$nm:"properties"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]}]},$mt:"prm",$def:1,$nm:"duration"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"easing"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"complete"}]],$mt:"m",$an:{shared:[]},$nm:"animate"},appendHTML:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"content"}]],$mt:"m",$an:{shared:[]},$nm:"appendHTML"},ready:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"ready"},undelegateEvents:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"selector"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"events"}]],$mt:"m",$an:{shared:[]},$nm:"undelegateEvents"},hide:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]}]},$mt:"prm",$def:1,$nm:"duration"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"easing"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"complete"}]],$mt:"m",$an:{shared:[]},$nm:"hide"},prevAll:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"selector"}]],$mt:"m",$an:{shared:[]},$nm:"prevAll"},wrapInnerCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"wrapInnerCallback"},setOffsetCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$mt:"tp",$pk:".",$nm:"Coordinates"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$pk:".",$nm:"Coordinates"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"Coordinates"},{$pk:".",$nm:"Nothing"}]},{$mt:"tp",$pk:".",$nm:"Coordinates"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"offset"}]],$mt:"m",$an:{shared:[]},$nm:"setOffsetCallback"},showOptions:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$pk:".",$nm:"AnimateOptions"},$mt:"prm",$nm:"options"}]],$mt:"m",$an:{shared:[]},$nm:"showOptions"},clone:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$nm:"withDataAndEvents"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$nm:"deepWithDataAndEvents"}]],$mt:"m",$an:{shared:[]},$nm:"clone"},removeProp:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"propertyName"}]],$mt:"m",$an:{shared:[]},$nm:"removeProp"},prependHTML:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"content"}]],$mt:"m",$an:{shared:[]},$nm:"prependHTML"},contents:{$t:{$pk:".",$nm:"JQuery"},$mt:"m",$an:{shared:[]},$nm:"contents"},serialize:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[]},$nm:"serialize"},parent:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"selector"}]],$mt:"m",$an:{shared:[]},$nm:"parent"},outerWidth:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$nm:"includeMargin"}]],$mt:"m",$an:{shared:[]},$nm:"outerWidth"},prev:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"selector"}]],$mt:"m",$an:{shared:[]},$nm:"prev"},wrapInner:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"wrappingElement"}]],$mt:"m",$an:{shared:[]},$nm:"wrapInner"},removeAttr:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"attributeName"}]],$mt:"m",$an:{shared:[]},$nm:"removeAttr"},setOffset:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Coordinates"}]},$mt:"prm",$def:1,$nm:"offset"}]],$mt:"m",$an:{shared:[]},$nm:"setOffset"},addBack:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"selector"}]],$mt:"m",$an:{shared:[]},$nm:"addBack"},mouseenter:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"mouseenter"},load:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"url"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"data"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"complete"}]],$mt:"m",$an:{shared:[]},$nm:"load"},each:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"each"},replaceAll:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JQuery"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"}]},$mt:"prm",$nm:"target"}]],$mt:"m",$an:{shared:[]},$nm:"replaceAll"},toggleClassName:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"className"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$nm:"swit"}]],$mt:"m",$an:{shared:[]},$nm:"toggleClassName"},getVal:{$t:{comp:"u",$ts:[{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"}]},$mt:"m",$an:{shared:[]},$nm:"getVal"},setCss:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"property"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"}],$pk:"$",$nm:"Number"}]},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[]},$nm:"setCss"},before:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$pk:".",$nm:"JQuery"}]}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"content"}]],$mt:"m",$an:{shared:[]},$nm:"before"},next:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"selector"}]],$mt:"m",$an:{shared:[]},$nm:"next"},fadeOut:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]}]},$mt:"prm",$def:1,$nm:"duration"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"easing"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"complete"}]],$mt:"m",$an:{shared:[]},$nm:"fadeOut"},setCssJson:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"property"},{$t:{$md:"com.openswimsoftware.ceylon.js.json",$pk:"com.openswimsoftware.ceylon.js.json",$nm:"JSJSON"},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[]},$nm:"setCssJson"},ajaxError:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"ajaxError"},isSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$pk:".",$nm:"JQuery"}]},$mt:"prm",$nm:"selector"}]],$mt:"m",$an:{shared:[]},$nm:"isSelector"},getAttr:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"attributeName"}]],$mt:"m",$an:{shared:[]},$nm:"getAttr"},mousemove:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"mousemove"},prependTo:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$pk:".",$nm:"JQuery"}]},$mt:"prm",$nm:"target"}]],$mt:"m",$an:{shared:[]},$nm:"prependTo"},map:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$pk:".",$nm:"Nothing"}]},{$md:"com.openswimsoftware.ceylon.js.dom",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"map"},getHtml:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[]},$nm:"getHtml"},outerHeight:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$nm:"includeMargin"}]],$mt:"m",$an:{shared:[]},$nm:"outerHeight"},fadeTo:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"prm",$nm:"duration"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Float"},$mt:"prm",$nm:"opacity"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"easing"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"complete"}]],$mt:"m",$an:{shared:[]},$nm:"fadeTo"},ajaxStart:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"ajaxStart"},stopName:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"queue"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$nm:"clearQueue"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$nm:"jumpToEnd"}]],$mt:"m",$an:{shared:[]},$nm:"stopName"},closestjQuery:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$pk:".",$nm:"JQuery"},$mt:"prm",$nm:"jq"}]],$mt:"m",$an:{shared:[]},$nm:"closestjQuery"},slice:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"start"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"prm",$def:1,$nm:"end"}]],$mt:"m",$an:{shared:[]},$nm:"slice"},ajaxComplete:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"ajaxComplete"},eq:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"}]],$mt:"m",$an:{shared:[]},$nm:"eq"},focusout:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"focusout"},keyup:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"keyup"},change:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"change"},setVal:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"val"}]],$mt:"m",$an:{shared:[]},$nm:"setVal"},has:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"}]},$mt:"prm",$nm:"selector"}]],$mt:"m",$an:{shared:[]},$nm:"has"},after:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"content"}]],$mt:"m",$an:{shared:[]},$nm:"after"},removeClassCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"removeClassCallback"},slideUp:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]}]},$mt:"prm",$def:1,$nm:"duration"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"easing"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"complete"}]],$mt:"m",$an:{shared:[]},$nm:"slideUp"},fadeIn:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]}]},$mt:"prm",$def:1,$nm:"duration"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"easing"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"complete"}]],$mt:"m",$an:{shared:[]},$nm:"fadeIn"},closest:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"selector"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"}]},$mt:"prm",$def:1,$nm:"context"}]],$mt:"m",$an:{shared:[]},$nm:"closest"},setValCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"setValCallback"},getProp:{$t:{comp:"u",$ts:[{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"name"}]],$mt:"m",$an:{shared:[]},$nm:"getProp"},append:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$pk:".",$nm:"JQuery"}]}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"content"}]],$mt:"m",$an:{shared:[]},$nm:"append"},index:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$pk:".",$nm:"JQuery"}]},$mt:"prm",$nm:"selector"}]],$mt:"m",$an:{shared:[]},$nm:"index"},mousedown:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"mousedown"},get:{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"prm",$def:1,$nm:"index"}]],$mt:"m",$an:{shared:[]},$nm:"get"},submit:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"submit"},select:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"handler"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"}]],$mt:"m",$an:{shared:[]},$nm:"select"},keydown:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"keydown"},toggleOptions:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$pk:".",$nm:"AnimateOptions"},$mt:"prm",$nm:"options"}]],$mt:"m",$an:{shared:[]},$nm:"toggleOptions"},ajaxSend:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"ajaxSend"},finish:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"queue"}]],$mt:"m",$an:{shared:[]},$nm:"finish"},dblclick:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"dblclick"},afterJQuery:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$mt:"tp",$pk:".",$nm:"JQuery"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"content"}]],$mt:"m",$an:{shared:[]},$nm:"afterJQuery"},pushStack:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"com.openswimsoftware.ceylon.js.dom",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"}],$pk:"$",$nm:"Sequential"},$mt:"prm",$nm:"elements"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"name"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"arguments"}]],$mt:"m",$an:{shared:[]},$nm:"pushStack"},bindEvents:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"events"}]],$mt:"m",$an:{shared:[]},$nm:"bindEvents"},mouseup:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"mouseup"},setWidthCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"setWidthCallback"},wrapAll:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$pk:".",$nm:"JQuery"}]},$mt:"prm",$nm:"wrappingElement"}]],$mt:"m",$an:{shared:[]},$nm:"wrapAll"},setQueue:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$def:1,$nm:"queueName"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"}],$pk:"$",$nm:"Sequential"}],$pk:"$",$nm:"Callable"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"newQueue"}]],$mt:"m",$an:{shared:[]},$nm:"setQueue"},children:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"selector"}]],$mt:"m",$an:{shared:[]},$nm:"children"},closestElement:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},$mt:"prm",$nm:"elem"}]],$mt:"m",$an:{shared:[]},$nm:"closestElement"},mouseleave:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"mouseleave"},dequeue:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"queueName"}]],$mt:"m",$an:{shared:[]},$nm:"dequeue"},setScrollTop:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[]},$nm:"setScrollTop"},getHeight:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[]},$nm:"getHeight"},animateOptions:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"prm",$nm:"properties"},{$t:{$pk:".",$nm:"AnimateOptions"},$mt:"prm",$nm:"options"}]],$mt:"m",$an:{shared:[]},$nm:"animateOptions"},setCssCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"property"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"val"}]],$mt:"prm",$pt:"f",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$m:{callback$9tv25n:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"val"}]],$mt:"m",$nm:"callback"}},$nm:"setCssCallback"},prepend:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$pk:".",$nm:"JQuery"}]}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"content"}]],$mt:"m",$an:{shared:[]},$nm:"prepend"},promise:{$t:{$pk:".",$nm:"Promise"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$def:1,$nm:"type"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"}]},$mt:"prm",$def:1,$nm:"target"}]],$mt:"m",$an:{shared:[]},$nm:"promise"},setAttr:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"attributeName"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[]},$nm:"setAttr"},siblings:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"siblings"}]],$mt:"m",$an:{shared:[]},$nm:"siblings"},removeClass:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"className"}]],$mt:"m",$an:{shared:[]},$nm:"removeClass"},off:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"events"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"selector"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"off"},bind:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"eventType"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$nm:"preventBubble"}]],$mt:"m",$an:{shared:[]},$nm:"bind"},toggleShowOrHide:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$nm:"showOrHide"}]],$mt:"m",$an:{shared:[]},$nm:"toggleShowOrHide"},addElements:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"com.openswimsoftware.ceylon.js.dom",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"}],$pk:"$",$nm:"Sequence"},$mt:"prm",seq:1,$nm:"elements",$min1:1}]],$mt:"m",$an:{shared:[]},$nm:"addElements"},clearQueue:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$def:1,$nm:"queueName"}]],$mt:"m",$an:{shared:[]},$nm:"clearQueue"},toggleClassCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$pk:".",$nm:"Nothing"}]}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Boolean"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$nm:"swit"}]],$mt:"m",$an:{shared:[]},$nm:"toggleClassCallback"},setPropCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"propertyName"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"setPropCallback"},slideToggle:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]}]},$mt:"prm",$def:1,$nm:"duration"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"easing"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"complete"}]],$mt:"m",$an:{shared:[]},$nm:"slideToggle"},empty:{$t:{$pk:".",$nm:"JQuery"},$mt:"m",$an:{shared:[]},$nm:"empty"},setAttrEntries:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"entries"}]],$mt:"m",$an:{shared:[]},$nm:"setAttrEntries"},setProp:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"propertyName"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[]},$nm:"setProp"},on:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"events"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"selector"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"data"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"on"},focus:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"focus"},focusin:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"focusin"},setDataEntries:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"events"}]],$mt:"m",$an:{shared:[]},$nm:"setDataEntries"},resizeTrigger:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[]},$nm:"resizeTrigger"},setHtml:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"html"}]],$mt:"m",$an:{shared:[]},$nm:"setHtml"},hoverSingle:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"JQueryEvent"},{$pk:".",$nm:"Nothing"}]},{$mt:"tp",$pk:".",$nm:"JQueryEvent"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"handlerInOut"}]],$mt:"m",$an:{shared:[]},$nm:"hoverSingle"},removeData:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"names"}]],$mt:"m",$an:{shared:[]},$nm:"removeData"},not:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JQuery"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"}]},$mt:"prm",$nm:"selector"}]],$mt:"m",$an:{shared:[]},$nm:"not"},innerWidth:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[]},$nm:"innerWidth"},delegateEvents:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"selector"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"events"}]],$mt:"m",$an:{shared:[]},$nm:"delegateEvents"},delay:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"duration"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$def:1,$nm:"queueName"}]],$mt:"m",$an:{shared:[]},$nm:"delay"},afterElements:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"com.openswimsoftware.ceylon.js.dom",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"content"}]],$mt:"m",$an:{shared:[]},$nm:"afterElements"},isCallback:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Boolean"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"isCallback"},addClass:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"className"}]],$mt:"m",$an:{shared:[]},$nm:"addClass"},position:{$t:{$pk:".",$nm:"Coordinates"},$mt:"m",$an:{shared:[]},$nm:"position"},remove:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"selector"}]],$mt:"m",$an:{shared:[]},$nm:"remove"},click:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"click"},nextUntil:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"}]}]},$mt:"prm",$def:1,$nm:"selector"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"filter"}]],$mt:"m",$an:{shared:[]},$nm:"nextUntil"},delegate:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"selector"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"eventType"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"delegate"},appendCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"appendCallback"},setAttrCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"attributeName"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"setAttrCallback"},length:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[]},$nm:"length"},slideUpOptions:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$pk:".",$nm:"AnimateOptions"},$mt:"prm",$nm:"options"}]],$mt:"m",$an:{shared:[]},$nm:"slideUpOptions"},end:{$t:{$pk:".",$nm:"JQuery"},$mt:"m",$an:{shared:[]},$nm:"end"},serializeArray:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$mt:"m",$an:{shared:[]},$nm:"serializeArray"},trigger:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JQueryEvent"}]},$mt:"prm",$nm:"event"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"extraParameters"}]],$mt:"m",$an:{shared:[]},$nm:"trigger"},toArray:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$mt:"m",$an:{shared:[]},$nm:"toArray"},insertBefore:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$pk:".",$nm:"JQuery"}]},$mt:"prm",$nm:"target"}]],$mt:"m",$an:{shared:[]},$nm:"insertBefore"},mouseout:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"mouseout"},slideToggleOptions:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$pk:".",$nm:"AnimateOptions"},$mt:"prm",$nm:"options"}]],$mt:"m",$an:{shared:[]},$nm:"slideToggleOptions"},filterCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"filterCallback"},innerHeight:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[]},$nm:"innerHeight"},ajaxStop:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"ajaxStop"},setTextCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"setTextCallback"},prevUntil:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"}]}]},$mt:"prm",$def:1,$nm:"selector"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"filter"}]],$mt:"m",$an:{shared:[]},$nm:"prevUntil"},mouseover:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"mouseover"},setHeightCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"setHeightCallback"},slideDownOptions:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$pk:".",$nm:"AnimateOptions"},$mt:"prm",$nm:"options"}]],$mt:"m",$an:{shared:[]},$nm:"slideDownOptions"},unwrap:{$t:{$pk:".",$nm:"JQuery"},$mt:"m",$an:{shared:[]},$nm:"unwrap"},last:{$t:{$pk:".",$nm:"JQuery"},$mt:"m",$an:{shared:[]},$nm:"last"},show:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]}]},$mt:"prm",$def:1,$nm:"duration"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"easing"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"complete"}]],$mt:"m",$an:{shared:[]},$nm:"show"},setText:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"textString"}]],$mt:"m",$an:{shared:[]},$nm:"setText"},jquery:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[]},$nm:"jquery"},toggleClass:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$nm:"swit"}]],$mt:"m",$an:{shared:[]},$nm:"toggleClass"},resize:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"handler"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"}]],$mt:"m",$an:{shared:[]},$nm:"resize"},fadeToggleOptions:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$pk:".",$nm:"AnimateOptions"},$mt:"prm",$nm:"options"}]],$mt:"m",$an:{shared:[]},$nm:"fadeToggleOptions"},getScrollLeft:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[]},$nm:"getScrollLeft"},getWidth:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[]},$nm:"getWidth"},fadeOutOptions:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$pk:".",$nm:"AnimateOptions"},$mt:"prm",$nm:"options"}]],$mt:"m",$an:{shared:[]},$nm:"fadeOutOptions"},ajaxSuccess:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"ajaxSuccess"},getQueue:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$def:1,$nm:"queueName"}]],$mt:"m",$an:{shared:[],doc:["returns an array of functions"]},$nm:"getQueue"},replaceWithCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JQuery"},{$md:"ceylon.language",$tp:[{$md:"com.openswimsoftware.ceylon.js.dom",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"replaceWithCallback"},wrap:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$pk:".",$nm:"JQuery"}]},$mt:"prm",$nm:"wrappingElement"}]],$mt:"m",$an:{shared:[]},$nm:"wrap"},detach:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"selector"}]],$mt:"m",$an:{shared:[]},$nm:"detach"},wrapCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"ceylon.language",$tp:[{$mt:"tp",$pk:".",$nm:"JQuery"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"wrapCallback"},scroll:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"handler"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"}]],$mt:"m",$an:{shared:[]},$nm:"scroll"},unbind:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},{$pk:".",$nm:"JQueryEvent"}]},$mt:"prm",$nm:"eventType"}]],$mt:"m",$an:{shared:[]},$nm:"unbind"},fadeToggle:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]}]},$mt:"prm",$def:1,$nm:"duration"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"easing"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"complete"}]],$mt:"m",$an:{shared:[]},$nm:"fadeToggle"},getData:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"key"}]],$mt:"m",$an:{shared:[]},$nm:"getData"},keypress:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"keypress"},setHeight:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[]},$nm:"setHeight"},bindCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"eventType"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"eventData"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"bindCallback"},replaceWith:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JQuery"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"}]},$mt:"prm",$nm:"newContent"}]],$mt:"m",$an:{shared:[]},$nm:"replaceWith"},filter:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$pk:".",$nm:"JQuery"}]},$mt:"prm",$nm:"selector"}]],$mt:"m",$an:{shared:[]},$nm:"filter"},undelegateCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"selector"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"eventType"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"undelegateCallback"},stop:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$nm:"clearQueue"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$nm:"jumpToEnd"}]],$mt:"m",$an:{shared:[]},$nm:"stop"},beforeCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"beforeCallback"},parents:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"selector"}]],$mt:"m",$an:{shared:[]},$nm:"parents"},slideDown:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]}]},$mt:"prm",$def:1,$nm:"duration"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"easing"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"complete"}]],$mt:"m",$an:{shared:[]},$nm:"slideDown"},unbindCallaback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"eventType"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"unbindCallaback"},getCss:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"}],$pk:"$",$nm:"Sequential"}]},$mt:"prm",$nm:"properties"}]],$mt:"m",$an:{shared:[]},$nm:"getCss"},one:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"events"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"selector"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"data"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"one"},setScrollLeft:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[]},$nm:"setScrollLeft"},blur:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"blur"},add:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JQuery"}]},$mt:"prm",$nm:"append"}]],$mt:"m",$an:{shared:[]},$nm:"add"},getText:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[]},$nm:"getText"},toggle:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]}]},$mt:"prm",$def:1,$nm:"duration"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"easing"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"complete"}]],$mt:"m",$an:{shared:[]},$nm:"toggle"},parentsUntil:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"}]}]},$mt:"prm",$def:1,$nm:"selector"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"filter"}]],$mt:"m",$an:{shared:[]},$nm:"parentsUntil"},getScrollTop:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[]},$nm:"getScrollTop"},die:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"die"},setWidth:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"prm",$nm:"width"}]],$mt:"m",$an:{shared:[]},$nm:"setWidth"},setHtmlCallback:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"setHtmlCallback"},undelegate:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"namespace"}]],$mt:"m",$an:{shared:[]},$nm:"undelegate"},find:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$pk:".",$nm:"JQuery"}]},$mt:"prm",$nm:"selector"}]],$mt:"m",$an:{shared:[]},$nm:"find"},error:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"eventData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"handler"}]],$mt:"m",$an:{shared:[]},$nm:"error"},appendTo:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$pk:".",$nm:"JQuery"}]},$mt:"prm",$nm:"target"}]],$mt:"m",$an:{shared:[]},$nm:"appendTo"},insertAfter:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{$pk:".",$nm:"JQuery"}]},$mt:"prm",$nm:"target"}]],$mt:"m",$an:{shared:[]},$nm:"insertAfter"},hideOptions:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$pk:".",$nm:"AnimateOptions"},$mt:"prm",$nm:"options"}]],$mt:"m",$an:{shared:[]},$nm:"hideOptions"},hover:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"JQueryEvent"},{$pk:".",$nm:"Nothing"}]},{$mt:"tp",$pk:".",$nm:"JQueryEvent"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"handlerIn"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"JQueryEvent"},{$pk:".",$nm:"Nothing"}]},{$mt:"tp",$pk:".",$nm:"JQueryEvent"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"handlerOut"}]],$mt:"m",$an:{shared:[]},$nm:"hover"},fadeInOptions:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$pk:".",$nm:"AnimateOptions"},$mt:"prm",$nm:"options"}]],$mt:"m",$an:{shared:[]},$nm:"fadeInOptions"},setData:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"key"},{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"data"}]],$mt:"m",$an:{shared:[]},$nm:"setData"},hasClass:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"className"}]],$mt:"m",$an:{shared:[]},$nm:"hasClass"},addSelector:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"selector"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"}]},$mt:"prm",$def:1,$nm:"context"}]],$mt:"m",$an:{shared:[]},$nm:"addSelector"},beforeHTML:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"content"}]],$mt:"m",$an:{shared:[]},$nm:"beforeHTML"},offsetParent:{$t:{$pk:".",$nm:"JQuery"},$mt:"m",$an:{shared:[]},$nm:"offsetParent"},addClassCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"currentClass"}]],$mt:"prm",$pt:"f",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$m:{callback$ucimxn:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"currentClass"}]],$mt:"m",$nm:"callback"}},$nm:"addClassCallback"},getOffset:{$t:{$pk:".",$nm:"Coordinates"},$mt:"m",$an:{shared:[]},$nm:"getOffset"},setQueueCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"next"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$def:1,$nm:"queueName"}]],$mt:"m",$an:{shared:[]},$nm:"setQueueCallback"},first:{$t:{$pk:".",$nm:"JQuery"},$mt:"m",$an:{shared:[]},$nm:"first"},prependCallback:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"prependCallback"}},$nm:"JQueryAbs"},textSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"textSelector"},jQueryProxyName:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSFunction"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"context"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"name"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"additionalArguments"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryProxyName"},evenSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"evenSelector"},jQueryPost:{$t:{$pk:".",$nm:"JQXHR"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"url"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"data"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"success"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"dataType"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryPost"},jQueryGetQueue:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},$mt:"prm",$nm:"element"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$def:1,$nm:"queueName"}]],$mt:"m",$an:{shared:[],doc:["returns JSFunctions[]"]},$nm:"jQueryGetQueue"},jQueryEach:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"collection"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryEach"},jQueryDeferred:{$t:{$pk:".",$nm:"Deferred"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"beforeStart"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryDeferred"},parentSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"parentSelector"},JQueryAjaxSettingsAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{getXhr:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns the underlying XHR function"]},$nm:"getXhr"},setCache:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$nm:"cache"}]],$mt:"m",$an:{shared:[],doc:["sets if the reqest should be cached by the browser"]},$nm:"setCache"},setContext:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"context"}]],$mt:"m",$an:{shared:[],doc:["sets the context object in which the request is being made"]},$nm:"setContext"},getContents:{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"RegExp"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"m",$an:{shared:[],doc:["gets a set of content types paired with regular expression pairs that determine how jQuery will parse the response"]},$nm:"getContents"},getJsonp:{$t:{comp:"u",$ts:[{$pk:".",$nm:"JSONPSettings"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]}]},$mt:"m",$an:{shared:[],doc:["returns the request JSONP settings"]},$nm:"getJsonp"},setDataFilter:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"datafilter"}]],$mt:"m",$an:{shared:[],doc:["sets the data fiter"]},$nm:"setDataFilter"},getContext:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"}]},$mt:"m",$an:{shared:[],doc:["returns the context object in which the request is being made"]},$nm:"getContext"},setIsLocal:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$nm:"local"}]],$mt:"m",$an:{shared:[],doc:["sets if the request is being made agains the local filesystem"]},$nm:"setIsLocal"},setContentType:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"contentType"}]],$mt:"m",$an:{shared:[],doc:["sets the content type of the data being sent in the request"]},$nm:"setContentType"},getProcessData:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["returns if the data will be processed before being sent to the server"]},$nm:"getProcessData"},setAsync:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$nm:"async"}]],$mt:"m",$an:{shared:[],doc:["sets if the AJAX request is exectuted asynchronously"]},$nm:"setAsync"},setError:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"datafilter"}]],$mt:"m",$an:{shared:[],doc:["sets an array of error handlers Anything(JQXHR, String?, String?)"]},$nm:"setError"},getComplete:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"}]},$mt:"m",$an:{shared:[],doc:["returns array of handers Anything(JQXHR, String) for when the request is complete"]},$nm:"getComplete"},getDataType:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"m",$an:{shared:[],doc:["returns the data type"]},$nm:"getDataType"},setHeaders:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"prm",$nm:"headers"}]],$mt:"m",$an:{shared:[],doc:["sets the request headers"]},$nm:"setHeaders"},setScriptCharset:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"scriptCharset"}]],$mt:"m",$an:{shared:[],doc:["sets the script charset (only if getting a script or making a JSONP request)"]},$nm:"setScriptCharset"},setContents:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"RegExp"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"contents"}]],$mt:"m",$an:{shared:[],doc:["sets a set of content types paired with regular expression pairs that determine how jQuery will parse the response"]},$nm:"setContents"},setCrossDomain:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$nm:"crossDomain"}]],$mt:"m",$an:{shared:[],doc:["sets if the request is cross domain"]},$nm:"setCrossDomain"},setType:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"type"}]],$mt:"m",$an:{shared:[],doc:["sets the request type usually GET or POST"]},$nm:"setType"},getAsync:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["returns if the AJAX request is exectuted asynchronously"]},$nm:"getAsync"},setStatusCode:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"statusCodes"}]],$mt:"m",$an:{shared:[],doc:["sets a set of callbacks JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code"]},$nm:"setStatusCode"},getPassword:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"m",$an:{shared:[],doc:["returns the request password"]},$nm:"getPassword"},getIfModified:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["returns if the request should only be successful if the response if diffrent then the last time the request was made"]},$nm:"getIfModified"},setDataType:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"dataType"}]],$mt:"m",$an:{shared:[],doc:["sets the data type"]},$nm:"setDataType"},getJsonpCallback:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns the JSONP callback String|String()?"]},$nm:"getJsonpCallback"},setMimeType:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"mimeType"}]],$mt:"m",$an:{shared:[],doc:["sets the request result mime type"]},$nm:"setMimeType"},setXhrFields:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"xhrFields"}]],$mt:"m",$an:{shared:[],doc:["sets the base XHR settings"]},$nm:"setXhrFields"},getData:{$t:{comp:"u",$ts:[{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"}]}]},$mt:"m",$an:{shared:[],doc:["returns the data to be sent to the server"]},$nm:"getData"},getBeforeSend:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns Boolean(JQXHR, JQueryAjaxSettings)? which is a handler called before the request is sent"]},$nm:"getBeforeSend"},setBeforeSend:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"beforeSend"}]],$mt:"m",$an:{shared:[],doc:["returns set a handler Boolean(JQXHR, JQueryAjaxSettings) before the request is sent"]},$nm:"setBeforeSend"},getTraditional:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["returns if the request will use the traditional style of param serialization"]},$nm:"getTraditional"},getUsername:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"m",$an:{shared:[],doc:["returns the request username"]},$nm:"getUsername"},getXhrFields:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"m",$an:{shared:[],doc:["returns the base XHR settings"]},$nm:"getXhrFields"},getStatusCode:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns a object JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code"]},$nm:"getStatusCode"},getMimeType:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"m",$an:{shared:[],doc:["returns the request result mime type"]},$nm:"getMimeType"},getContentType:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"m",$an:{shared:[],doc:["returns the content type of the data being sent in the request"]},$nm:"getContentType"},getDataFilter:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns data filter Anything(String, String)?"]},$nm:"getDataFilter"},setUsername:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"username"}]],$mt:"m",$an:{shared:[],doc:["returns the request username"]},$nm:"setUsername"},getSuccess:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"}]},$mt:"m",$an:{shared:[],doc:["returns array of handers called Anything(Anything, String, JQXHR) upon a successful request"]},$nm:"getSuccess"},getType:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"m",$an:{shared:[],doc:["returns if the request will use the traditional style of param serialization"]},$nm:"getType"},getError:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"}]},$mt:"m",$an:{shared:[],doc:["returns an array of error handlers Anything(JQXHR, String?, String?)"]},$nm:"getError"},setUrl:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"url"}]],$mt:"m",$an:{shared:[],doc:["sets the request URL"]},$nm:"setUrl"},getHeaders:{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"m",$an:{shared:[],doc:["returns the request headers"]},$nm:"getHeaders"},setIfModified:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$nm:"modified"}]],$mt:"m",$an:{shared:[],doc:["sets if the request should only be successful if the response if diffrent then the last time the request was made"]},$nm:"setIfModified"},getAccepts:{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"m",$an:{shared:[],doc:["returns the data types the request accepts"]},$nm:"getAccepts"},setComplete:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"complete"}]],$mt:"m",$an:{shared:[],doc:["sets array of handers Anything(JQXHR, String) for when the request is complete"]},$nm:"setComplete"},setPassword:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"password"}]],$mt:"m",$an:{shared:[],doc:["sets the request password"]},$nm:"setPassword"},getCache:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["returns if the reqest will be cached by the browser"]},$nm:"getCache"},setConverters:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"converters"}]],$mt:"m",$an:{shared:[],doc:["sets data type converters"]},$nm:"setConverters"},setSuccess:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$pk:".",$nm:"JQXHR"},{$pk:".",$nm:"Nothing"}]}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$pk:".",$nm:"JQXHR"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"JQXHR"},{$pk:".",$nm:"Nothing"}]},{$mt:"tp",$pk:".",$nm:"JQXHR"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"success"}]],$mt:"m",$an:{shared:[],doc:["sets array of handers called Anything(Anything, String, JQXHR) upon a successful request"]},$nm:"setSuccess"},getCrossDomain:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["is the request cross domain"]},$nm:"getCrossDomain"},getIsLocal:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["returns if the request is being made agains the local filesystem"]},$nm:"getIsLocal"},setXhr:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"xhr"}]],$mt:"m",$an:{shared:[],doc:["sets the underlying XHR function"]},$nm:"setXhr"},getConverters:{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"m",$an:{shared:[],doc:["returns data type converters"]},$nm:"getConverters"},setJsonpCallback:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[],doc:["sets the JSONP callback String|String()?"]},$nm:"setJsonpCallback"},setData:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"}]},$mt:"prm",$nm:"data"}]],$mt:"m",$an:{shared:[],doc:["sets the data to be sent to the server"]},$nm:"setData"},getScriptCharset:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"m",$an:{shared:[],doc:["returns the script charset (only if getting a script or making a JSONP request)"]},$nm:"getScriptCharset"},setGlobal:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$nm:"global"}]],$mt:"m",$an:{shared:[],doc:["sets if global ajax events will be triggered for this class"]},$nm:"setGlobal"},getUrl:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"m",$an:{shared:[],doc:["returns the request URL"]},$nm:"getUrl"},setTraditional:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$nm:"traditional"}]],$mt:"m",$an:{shared:[],doc:["sets if the request will use the traditional style of param serialization"]},$nm:"setTraditional"},getTimeout:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"m",$an:{shared:[],doc:["returns the timeout for the request in milliseconds"]},$nm:"getTimeout"},setAccepts:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"accepts"}]],$mt:"m",$an:{shared:[],doc:["sets the data types the request accepts"]},$nm:"setAccepts"},setTimeout:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"timeout"}]],$mt:"m",$an:{shared:[],doc:["sets the timeout for the request in milliseconds"]},$nm:"setTimeout"},getGlobal:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["returns if global ajax events will be triggered for this class"]},$nm:"getGlobal"},setJsonp:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"JSONPSettings"},$mt:"prm",$nm:"jsonp"}]],$mt:"m",$an:{shared:[],doc:["sets the request JSONP settings"]},$nm:"setJsonp"},setProcessData:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$nm:"processData"}]],$mt:"m",$an:{shared:[],doc:["sets if the data will be processed before being sent to the server"]},$nm:"setProcessData"}},$nm:"JQueryAjaxSettingsAbs"},dataTypeJson:{super:{$pk:".",$nm:"DataType"},$mt:"o",$an:{shared:[]},$nm:"dataTypeJson"},rootSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"rootSelector"},jQueryGetData:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},$mt:"prm",$nm:"element"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"key"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryGetData"},jQueryGetJSON:{$t:{$pk:".",$nm:"JQXHR"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"url"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"data"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"success"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryGetJSON"},JQueryEvent:{super:{$pk:".",$nm:"JQueryEventAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a jQuery Event"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$rk4q8g:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"JQueryEvent"},Promise:{super:{$pk:".",$nm:"PromiseAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a subset of Deferred which is used for managing a set of callbacks"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$apqbpj:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"Promise"},radioSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"radioSelector"},jQueryIsPlainObject:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryIsPlainObject"},disabledSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"disabledSelector"},selectedSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"selectedSelector"},jQueryWhen:{$t:{$pk:".",$nm:"Promise"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$mt:"tp",$pk:".",$nm:"Deferred"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"deferreds"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryWhen"},jq:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JQuery"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"}]}]},$mt:"prm",$def:1,$nm:"selector"},{$t:{comp:"u",$ts:[{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JQuery"}]}]},$mt:"prm",$def:1,$nm:"context"}]],$mt:"m",$an:{shared:[]},$nm:"jq"},jQueryIsFunction:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryIsFunction"},jQueryNoConflict:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$nm:"removeAll"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryNoConflict"},JQueryAjaxSettingsBuilder:{super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$an:{shared:[]},$nm:"async"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"cache"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$def:1,$an:{shared:[]},$nm:"contentType"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"context"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"crossDomain"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"data"},{$t:{$md:"ceylon.language",$tp:[{$mt:"tp",$pk:".",$nm:"DataType"}],$pk:"$",$nm:"Sequential"},$mt:"prm",$def:1,$an:{shared:[]},$nm:"dataType"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$an:{shared:[]},$nm:"global"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$an:{shared:[]},$nm:"ifModified"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"isLocal"},{$t:{$pk:".",$nm:"JSONPOptions"},$mt:"prm",$def:1,$an:{shared:[]},$nm:"jsonp"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"jsonpCallback"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"mimeType"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"password"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$an:{shared:[]},$nm:"processData"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"scriptCharset"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"timeout"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$an:{shared:[]},$nm:"traditional"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$def:1,$an:{shared:[]},$nm:"type"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"url"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"username"}],$mt:"c",$an:{shared:[],doc:["settings for a JQuery AJAX request"]},$m:{toNative:{$t:{$pk:".",$nm:"JQueryAjaxSettings"},$mt:"m",$an:{shared:[],doc:["convert to native AJAX settings"]},$nm:"toNative"}},$at:{headers:{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},var:1,$mt:"a",$an:{shared:[],doc:["the request headers"],variable:[]},$nm:"headers"},data:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"}]},$mt:"a",$an:{shared:[]},$nm:"data"},xhrFields:{$t:{$pk:".",$nm:"unknown"},var:1,$mt:"a",$an:{shared:[],doc:["the base XHR settings"],variable:[]},$nm:"xhrFields"},contentType:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"contentType"},type:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"type"},password:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"a",$an:{shared:[]},$nm:"password"},statusCode:{$t:{$pk:".",$nm:"unknown"},var:1,$mt:"a",$an:{shared:[],doc:["sets a set of callbacks JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code"],variable:[]},$nm:"statusCode"},username:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"a",$an:{shared:[]},$nm:"username"},complete:{$t:{$pk:".",$nm:"unknown"},var:1,$mt:"a",$an:{shared:[],doc:["array of handers Anything(JQXHR, String) for when the request is complete"],variable:[]},$nm:"complete"},dataFilter:{$t:{$pk:".",$nm:"unknown"},var:1,$mt:"a",$an:{shared:[],doc:["data filter Anything(String, String)?"],variable:[]},$nm:"dataFilter"},processData:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[]},$nm:"processData"},crossDomain:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"a",$an:{shared:[]},$nm:"crossDomain"},accepts:{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},var:1,$mt:"a",$an:{shared:[],doc:["the data types the request accepts"],variable:[]},$nm:"accepts"},mimeType:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"a",$an:{shared:[]},$nm:"mimeType"},jsonpCallback:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]}]},$mt:"a",$an:{shared:[]},$nm:"jsonpCallback"},error:{$t:{$pk:".",$nm:"unknown"},var:1,$mt:"a",$an:{shared:[],doc:["array of error handlers Anything(JQXHR, String?, String?)"],variable:[]},$nm:"error"},cache:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"a",$an:{shared:[]},$nm:"cache"},contents:{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"RegExp"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},var:1,$mt:"a",$an:{shared:[],doc:["a set of content types paired with regular expression pairs that determine how jQuery will parse the response"],variable:[]},$nm:"contents"},global:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[]},$nm:"global"},scriptCharset:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"a",$an:{shared:[]},$nm:"scriptCharset"},traditional:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[]},$nm:"traditional"},converters:{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},var:1,$mt:"a",$an:{shared:[],doc:["data type converters"],variable:[]},$nm:"converters"},async:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[]},$nm:"async"},url:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"a",$an:{shared:[]},$nm:"url"},ifModified:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[]},$nm:"ifModified"},dataType:{$t:{$md:"ceylon.language",$tp:[{$mt:"tp",$pk:".",$nm:"DataType"}],$pk:"$",$nm:"Sequential"},$mt:"a",$an:{shared:[]},$nm:"dataType"},jsonp:{$t:{$pk:".",$nm:"JSONPOptions"},$mt:"a",$an:{shared:[]},$nm:"jsonp"},context:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"}]},$mt:"a",$an:{shared:[]},$nm:"context"},beforeSend:{$t:{$pk:".",$nm:"unknown"},var:1,$mt:"a",$an:{shared:[],doc:["Boolean(JQXHR, JQueryAjaxSettings)? which is a handler called before the request is sent"],variable:[]},$nm:"beforeSend"},xhr:{$t:{$pk:".",$nm:"unknown"},var:1,$mt:"a",$an:{shared:[],doc:["the underlying XHR function"],variable:[]},$nm:"xhr"},isLocal:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"a",$an:{shared:[]},$nm:"isLocal"},success:{$t:{$pk:".",$nm:"unknown"},var:1,$mt:"a",$an:{shared:[],doc:["array of handers called Anything(Anything, String, JQXHR) upon a successful request"],variable:[]},$nm:"success"},timeout:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"a",$an:{shared:[]},$nm:"timeout"}},$nm:"JQueryAjaxSettingsBuilder"},DeferredAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{progress:{$t:{$pk:".",$nm:"Deferred"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"progressCallbacks"}]],$mt:"m",$an:{shared:[],doc:["add handlers to be called when the deferred objects progress is updated"]},$nm:"progress"},thenFilter:{$t:{$pk:".",$nm:"Deferred"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"doneFilter"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"failFilter"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"progressFilter"}]],$mt:"m",$an:{shared:[],doc:["add handlers to be called when the deferred object is either resolved, rejected or are still in progress"]},$nm:"thenFilter"},resolve:{$t:{$pk:".",$nm:"Deferred"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"args"}]],$mt:"m",$an:{shared:[],doc:["resolve the deferred object and call the done callbacks on deferred with the given args"]},$nm:"resolve"},rejectWith:{$t:{$pk:".",$nm:"Deferred"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"context"},{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"args"}]],$mt:"m",$an:{shared:[],doc:["call the fail callbacks on deferred with the given args and the given context"]},$nm:"rejectWith"},reject:{$t:{$pk:".",$nm:"Deferred"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"args"}]],$mt:"m",$an:{shared:[],doc:["call the fail callbacks on deferred with the given args"]},$nm:"reject"},notifyWith:{$t:{$pk:".",$nm:"Deferred"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"context"},{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"args"}]],$mt:"m",$an:{shared:[],doc:["call the progress callbacks on deferred with the given args with the given context"]},$nm:"notifyWith"},fail:{$t:{$pk:".",$nm:"Deferred"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"failCallbacks"}]],$mt:"m",$an:{shared:[],doc:["add handlers to be called when the deferred object is rejected"]},$nm:"fail"},resolveWith:{$t:{$pk:".",$nm:"Deferred"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"context"},{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"args"}]],$mt:"m",$an:{shared:[],doc:["resolve the deferred object and call the done callbacks on deferred with the given args and the given context"]},$nm:"resolveWith"},notify:{$t:{$pk:".",$nm:"Deferred"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"args"}]],$mt:"m",$an:{shared:[],doc:["call the progress callbacks on deferred with the given args"]},$nm:"notify"},done:{$t:{$pk:".",$nm:"Deferred"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"doneCallbacks"}]],$mt:"m",$an:{shared:[],doc:["add handlers to be called when the deferred object is resolved"]},$nm:"done"},state:{$t:{$pk:".",$nm:"DeferredState"},$mt:"m",$an:{shared:[],doc:["returns the current state of the deferred object"]},$nm:"state"},promise:{$t:{$pk:".",$nm:"Promise"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"target"}]],$mt:"m",$an:{shared:[],doc:["convert the deferred to a promise on the given target"]},$nm:"promise"},always:{$t:{$pk:".",$nm:"Deferred"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"alwaysCallbacks"}]],$mt:"m",$an:{shared:[],doc:["add handlers to be called when the deferred object is either resolved or rejected"]},$nm:"always"}},$nm:"DeferredAbs"},animatedSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"animatedSelector"},Coordinates:{super:{$pk:".",$nm:"CoordinatesAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["coordinates on the page"]},$at:{n$i6nzh5:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"},native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"}},$nm:"Coordinates"},"$pkg-shared":1,jQueryFxOff:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[]},$nm:"jQueryFxOff"},jQueryDequeue:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},$mt:"prm",$nm:"element"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"queueName"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryDequeue"},jQueryProxy:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSFunction"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"}],$pk:"$",$nm:"Sequential"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"func"},{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"context"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"additionalArguments"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryProxy"},checkedSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"checkedSelector"},firstOfTypeSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"firstOfTypeSelector"},jQueryTrim:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"prm",$nm:"str"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryTrim"},resetSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"resetSelector"},jQueryNow:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[]},$nm:"jQueryNow"},oddSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"oddSelector"},Deferred:{super:{$pk:".",$nm:"DeferredAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["used for callback queues"]},$at:{n$est9ud:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"},native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"}},$nm:"Deferred"},hiddenSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"hiddenSelector"},jQueryGlobalEval:{$t:{$pk:".",$nm:"JQXHR"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"code"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryGlobalEval"},jQueryHoldReady:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$nm:"hold"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryHoldReady"},JSONPSettingsAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{setIsJsonp:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$nm:"jsonp"}]],$mt:"m",$an:{shared:[],doc:["set that the request is JSONP"]},$nm:"setIsJsonp"},getCallback:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"m",$an:{shared:[],doc:["returns JSONP callback"]},$nm:"getCallback"},getIsJsonp:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["is this the request JSONP"]},$nm:"getIsJsonp"},setCallback:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[],doc:["sets JSONP callback"]},$nm:"setCallback"}},$nm:"JSONPSettingsAbs"},jQueryExtend:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"target"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"objects"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryExtend"},jQueryMapObject:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"obj"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryMapObject"},jQueryCallbacks:{$t:{$pk:".",$nm:"Callbacks"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$def:1,$nm:"flags"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryCallbacks"},JQXHRAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{getAllResponseHeaders:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"m",$an:{shared:[],doc:["returns all of the request headers as a string"]},$nm:"getAllResponseHeaders"},status:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["the request HTTP status code"]},$nm:"status"},responseXML:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Document"}]},$mt:"m",$an:{shared:[],doc:["the request response as a XML Document"]},$nm:"responseXML"},done:{$t:{$pk:".",$nm:"JQXHR"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"done"}]],$mt:"m",$an:{shared:[],doc:["Anything(Anything, String, JQXHR) handler when the request is done"]},$nm:"done"},doThen:{$t:{$pk:".",$nm:"JQXHR"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"done"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"fail"}]],$mt:"m",$an:{shared:[],doc:["Anything(Anything(Anything, String, JQXHR), Anything(JQXHR, String?, String?) handler when the request is done or fails"]},$nm:"doThen"},readyState:{$t:{$md:"com.openswimsoftware.ceylon.js.xmlhttprequest",$pk:"com.openswimsoftware.ceylon.js.xmlhttprequest",$nm:"ReadyState"},$mt:"m",$an:{shared:[],doc:["the current ready state of the request"]},$nm:"readyState"},statusText:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["the request HTTP status text code"]},$nm:"statusText"},responseText:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["the request response as a string"]},$nm:"responseText"},overrideMimeType:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"mime"}]],$mt:"m",$an:{shared:[],doc:["override the request mime type"]},$nm:"overrideMimeType"},always:{$t:{$pk:".",$nm:"JQXHR"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"always"}]],$mt:"m",$an:{shared:[],doc:["Anything(JSObject|JQXHR, String, JXHR|Error) handler when the request completes"]},$nm:"always"},statusCode:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["the request status code"]},$nm:"statusCode"},fail:{$t:{$pk:".",$nm:"JQXHR"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"fail"}]],$mt:"m",$an:{shared:[],doc:["Anything(JQXHR, String?, String?) handler when the request fails"]},$nm:"fail"},getResponseHeader:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"header"}]],$mt:"m",$an:{shared:[],doc:["returns a specific response header"]},$nm:"getResponseHeader"},setRequestHeader:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"header"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[],doc:["set the value of a request header"]},$nm:"setRequestHeader"},abort:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[],doc:["abort the request"]},$nm:"abort"}},$nm:"JQXHRAbs"},jQueryAjaxSetup:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"JQueryAjaxSettingsBuilder"},$mt:"prm",$nm:"options"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryAjaxSetup"},createCoordinates:{$t:{$pk:".",$nm:"Coordinates"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Float"}]}]},$mt:"prm",$nm:"top"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Float"}]}]},$mt:"prm",$nm:"left"}]],$mt:"m",$an:{shared:[],doc:["create a new coordinate"]},$nm:"createCoordinates"},buttonSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"buttonSelector"},jQueryContains:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},$mt:"prm",$nm:"container"},{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},$mt:"prm",$nm:"contained"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryContains"},jQueryMapArray:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$mt:"prm",$nm:"array"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryMapArray"},jQueryNoop:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[]},$nm:"jQueryNoop"},allSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"allSelector"},jQueryAjaxTransport:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"dataType"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"},$mt:"prm",$nm:"callback"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryAjaxTransport"},JSONPOptions:{super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$an:{shared:[]},$nm:"jsonp"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$def:1,$an:{shared:[]},$nm:"jsonpCallback"}],$mt:"c",$an:{shared:[],doc:["settings for JSONP in request builder"]},$at:{jsonp:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[]},$nm:"jsonp"},jsonpCallback:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"jsonpCallback"}},$nm:"JSONPOptions"},deferredStateResolved:{super:{$pk:".",$nm:"DeferredState"},$mt:"o",$an:{shared:[]},$nm:"deferredStateResolved"},deferredStatePending:{super:{$pk:".",$nm:"DeferredState"},$mt:"o",$an:{shared:[]},$nm:"deferredStatePending"},jQueryFxInterval:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[]},$nm:"jQueryFxInterval"},deferredStateRejected:{super:{$pk:".",$nm:"DeferredState"},$mt:"o",$an:{shared:[]},$nm:"deferredStateRejected"},checkboxSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"checkboxSelector"},jQueryIsXMLDoc:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},$mt:"prm",$nm:"node"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryIsXMLDoc"},jQueryParam:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$ps:[[{$t:{comp:"u",$ts:[{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"}]},$mt:"prm",$nm:"obj"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$nm:"traditional"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryParam"},jQueryIsWindow:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryIsWindow"},dataTypeText:{super:{$pk:".",$nm:"DataType"},$mt:"o",$an:{shared:[]},$nm:"dataTypeText"},firstSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"firstSelector"},jQueryParseJSON:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"json"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryParseJSON"},jQueryGet:{$t:{$pk:".",$nm:"JQXHR"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"url"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"data"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"success"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"dataType"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryGet"},jQueryCssHooks:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"m",$an:{shared:[]},$nm:"jQueryCssHooks"},jQueryRemoveData:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"},$mt:"prm",$nm:"element"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$def:1,$nm:"name"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryRemoveData"},jQueryParseXML:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"data"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryParseXML"},jQueryFnExtend:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryFnExtend"},CoordinatesAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{setTop:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$pk:"$",$nm:"Float"}]},$mt:"prm",$nm:"top"}]],$mt:"m",$an:{shared:[],doc:["set the top coordinate"]},$nm:"setTop"},getLeft:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the left coordinate"]},$nm:"getLeft"},setLeft:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$pk:"$",$nm:"Float"}]},$mt:"prm",$nm:"left"}]],$mt:"m",$an:{shared:[],doc:["set the left coordinate"]},$nm:"setLeft"},getTop:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the top coordinate"]},$nm:"getTop"}},$nm:"CoordinatesAbs"},onlyOfTypeSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"onlyOfTypeSelector"},DeferredState:{abstract:1,super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},of:[{$pk:".",$nm:"deferredStatePending"},{$pk:".",$nm:"deferredStateResolved"},{$pk:".",$nm:"deferredStateRejected"}],$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"name"}],$mt:"c",$an:{abstract:[],shared:[],doc:["the current state of the deferred object"]},$at:{name$3heduz:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$nm:"name"}},$nm:"DeferredState"},dataTypeJsonp:{super:{$pk:".",$nm:"DataType"},$mt:"o",$an:{shared:[]},$nm:"dataTypeJsonp"},PromiseAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{thenFilter:{$t:{$pk:".",$nm:"Promise"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"doneFilter"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"failFilter"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"progressFilter"}]],$mt:"m",$an:{shared:[],doc:["add handlers to be called when the deferred object is either resolved, rejected or are still in progress"]},$nm:"thenFilter"},fail:{$t:{$pk:".",$nm:"Promise"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"failCallbacks"}]],$mt:"m",$an:{shared:[],doc:["add handlers to be called when the deferred object is rejected"]},$nm:"fail"},done:{$t:{$pk:".",$nm:"Promise"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"doneCallbacks"}]],$mt:"m",$an:{shared:[],doc:["add handlers to be called when the deferred object is resolved"]},$nm:"done"},always:{$t:{$pk:".",$nm:"Promise"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"alwaysCallbacks"}]],$mt:"m",$an:{shared:[],doc:["add handlers to be called when the deferred object is either resolved or rejected"]},$nm:"always"}},$nm:"PromiseAbs"},Tween:{super:{$pk:".",$nm:"TweenAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a jQuery animation tween"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$ngk0bb:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"Tween"},imageSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"imageSelector"},jqElems:{$t:{$pk:".",$nm:"JQuery"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"com.openswimsoftware.ceylon.js.dom",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Element"}],$pk:"$",$nm:"Sequence"},$mt:"prm",seq:1,$nm:"elems",$min1:1}]],$mt:"m",$an:{shared:[]},$nm:"jqElems"},firstChildSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"firstChildSelector"},jQueryIsEmptyObject:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryIsEmptyObject"},dataTypeScript:{super:{$pk:".",$nm:"DataType"},$mt:"o",$an:{shared:[]},$nm:"dataTypeScript"},jQueryGetScript:{$t:{$pk:".",$nm:"JQXHR"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"url"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$nm:"success"}]],$mt:"m",$an:{shared:[]},$nm:"jQueryGetScript"},headerSelector:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$an:{shared:[]},$nm:"headerSelector"}}};
ex$.$CCMM$=function(){return $CCMM$;};
var m$1=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$1.$addmod$(m$1,'ceylon.language/1.1.0');
var m$9f=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
m$1.$addmod$(m$9f,'com.openswimsoftware.ceylon.js.language/1.8.0');
function AnimateOptions(duration,easing,queue,specialEasing,step,progress,complete,done,fail,always,animateOptions$){
    $init$AnimateOptions();
    if(animateOptions$===undefined)animateOptions$=new AnimateOptions.$$;
    if(duration===undefined){duration=null;}
    animateOptions$.duration_=duration;
    if(easing===undefined){easing=null;}
    animateOptions$.easing_=easing;
    if(queue===undefined){queue=null;}
    animateOptions$.queue_=queue;
    if(specialEasing===undefined){specialEasing=null;}
    animateOptions$.specialEasing_=specialEasing;
    if(step===undefined){step=null;}
    animateOptions$.step_=step;
    if(progress===undefined){progress=null;}
    animateOptions$.progress_=progress;
    if(complete===undefined){complete=null;}
    animateOptions$.complete_=complete;
    if(done===undefined){done=null;}
    animateOptions$.done_=done;
    if(fail===undefined){fail=null;}
    animateOptions$.fail_=fail;
    if(always===undefined){always=null;}
    animateOptions$.always_=always;
    return animateOptions$;
}
AnimateOptions.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}]},$an:function(){return[m$1.shared()];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[m$1.shared()];}},{$nm:'queue',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.$_Boolean},{t:'u',l:[{t:m$1.Null},{t:m$1.String}]}]},$an:function(){return[m$1.shared()];}},{$nm:'specialEasing',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}}}}]},$an:function(){return[m$1.shared()];}},{$nm:'step',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:Tween}}]}}}]},$an:function(){return[m$1.shared()];}},{$nm:'progress',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:Promise}},{$t:{t:m$1.Integer}},{$t:{t:m$1.Integer}}]}}}]},$an:function(){return[m$1.shared()];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]},$an:function(){return[m$1.shared()];}},{$nm:'done',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:Promise}},{$t:{t:m$1.$_Boolean}}]}}}]},$an:function(){return[m$1.shared()];}},{$nm:'fail',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:Promise}},{$t:{t:m$1.$_Boolean}}]}}}]},$an:function(){return[m$1.shared()];}},{$nm:'always',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:Promise}},{$t:{t:m$1.$_Boolean}}]}}}]},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.doc("options for creating an jQuery animations"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions']};};
ex$.AnimateOptions=AnimateOptions;
function $init$AnimateOptions(){
    if(AnimateOptions.$$===undefined){
        m$1.initTypeProto(AnimateOptions,'com.openswimsoftware.ceylon.js.jquery::AnimateOptions',m$1.Basic);
        (function(animateOptions$){
            animateOptions$.toNative=function toNative(){
                var animateOptions$=this;
                var $tv;
                /*Begin dynamic block*/
                $tv=(typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'15:12-15:17','animateoptions.ceylon'):Object)();var $tw;
                if(($tw=animateOptions$.duration)!==null&&$tw!==undefined){
                    $tv.duration=$tw;
                }var $tx;
                if(($tx=animateOptions$.easing)!==null&&$tx!==undefined){
                    $tv.easing=$tx.valueOf();
                }var $ty;
                if(($ty=animateOptions$.queue)!==null&&$ty!==undefined){
                    $tv.queue=(typeof e==='undefined'||e===null?m$1.throwexc(m$1.Exception("Undefined or null reference: e"),'23:19-23:19','animateoptions.ceylon'):e);
                }var $tz;
                if(($tz=animateOptions$.specialEasing)!==null&&$tz!==undefined){
                    var $u0=m$9f.createJSObject();
                    var $u2;for(var $u1=$tz.iterator();($u2=$u1.next())!==m$1.getFinished();){
                        var $u3=$u2.key,$u4=$u2.item;
                        m$9f.objectDefineProperty($u0,($u5=m$9f.createJSString($u3),m$1.is$($u5,{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]})?$u5:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'29:48-29:66','animateoptions.ceylon')),m$9f.DataDescriptor(true,false,true,true,$u4));
                    }
                    $tv.specialEasing=$u0;
                }var $u6;
                if(($u6=animateOptions$.step)!==null&&$u6!==undefined){
                    $tv.step=$u6;
                }var $u7;
                if(($u7=animateOptions$.progress)!==null&&$u7!==undefined){
                    $tv.progress=$u7;
                }var $u8;
                if(($u8=animateOptions$.complete)!==null&&$u8!==undefined){
                    $tv.complete=$u8;
                }var $u9;
                if(($u9=animateOptions$.done)!==null&&$u9!==undefined){
                    $tv.done=$u9;
                }var $ua;
                if(($ua=animateOptions$.fail)!==null&&$ua!==undefined){
                    $tv.fail=$ua;
                }var $ub;
                if(($ub=animateOptions$.always)!==null&&$ub!==undefined){
                    $tv.always=$ub;
                }return m$9f.JSObject($tv);
                /*End dynamic block*/
            };animateOptions$.toNative.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSObject},$ps:[],$cont:AnimateOptions,$an:function(){return[m$1.doc("convert the options to a native object"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$m','toNative']};};
            m$1.atr$(animateOptions$,'duration',function(){return this.duration_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}]},$cont:AnimateOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','duration']};});
            m$1.atr$(animateOptions$,'easing',function(){return this.easing_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$cont:AnimateOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','easing']};});
            m$1.atr$(animateOptions$,'queue',function(){return this.queue_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.$_Boolean},{t:'u',l:[{t:m$1.Null},{t:m$1.String}]}]},$cont:AnimateOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','queue']};});
            m$1.atr$(animateOptions$,'specialEasing',function(){return this.specialEasing_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}}}}]},$cont:AnimateOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','specialEasing']};});
            m$1.atr$(animateOptions$,'step',function(){return this.step_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:Tween}}]}}}]},$cont:AnimateOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','step']};});
            m$1.atr$(animateOptions$,'progress',function(){return this.progress_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:Promise}},{$t:{t:m$1.Integer}},{$t:{t:m$1.Integer}}]}}}]},$cont:AnimateOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','progress']};});
            m$1.atr$(animateOptions$,'complete',function(){return this.complete_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]},$cont:AnimateOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','complete']};});
            m$1.atr$(animateOptions$,'done',function(){return this.done_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:Promise}},{$t:{t:m$1.$_Boolean}}]}}}]},$cont:AnimateOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','done']};});
            m$1.atr$(animateOptions$,'fail',function(){return this.fail_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:Promise}},{$t:{t:m$1.$_Boolean}}]}}}]},$cont:AnimateOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','fail']};});
            m$1.atr$(animateOptions$,'always',function(){return this.always_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:Promise}},{$t:{t:m$1.$_Boolean}}]}}}]},$cont:AnimateOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','AnimateOptions','$at','always']};});
        })(AnimateOptions.$$.prototype);
    }
    return AnimateOptions;
}
ex$.$init$AnimateOptions=$init$AnimateOptions;
$init$AnimateOptions();
function CallbacksAbs(callbacksAbs$){
    $init$CallbacksAbs();
    if(callbacksAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(callbacksAbs$);
    return callbacksAbs$;
}
CallbacksAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs']};};
ex$.CallbacksAbs=CallbacksAbs;
function $init$CallbacksAbs(){
    if(CallbacksAbs.$$===undefined){
        m$1.initTypeProto(CallbacksAbs,'com.openswimsoftware.ceylon.js.jquery::CallbacksAbs',m$9f.JSObjectAbs);
        (function(callbacksAbs$){
            callbacksAbs$.add=function add($uc){
                var callbacksAbs$=this;
                /*Begin dynamic block*/
                return Callbacks(callbacksAbs$.$_native.add($uc));
                /*End dynamic block*/
            };callbacksAbs$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Callbacks},$ps:[{$nm:'callbacks',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[m$1.doc("add a callback or collection of callbacks"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','add']};};
            callbacksAbs$.disable=function disable(){
                var callbacksAbs$=this;
                /*Begin dynamic block*/
                return Callbacks(callbacksAbs$.$_native.disable());
                /*End dynamic block*/
            };callbacksAbs$.disable.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Callbacks},$ps:[],$cont:CallbacksAbs,$an:function(){return[m$1.doc("disable the callback list from doing anything"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','disable']};};
            callbacksAbs$.disabled=function disabled(){
                var callbacksAbs$=this;
                /*Begin dynamic block*/
                if(callbacksAbs$.$_native.disabled()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };callbacksAbs$.disabled.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:CallbacksAbs,$an:function(){return[m$1.doc("is the callback list disabled"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','disabled']};};
            callbacksAbs$.empty=function empty(){
                var callbacksAbs$=this;
                /*Begin dynamic block*/
                return Callbacks(callbacksAbs$.$_native.empty());
                /*End dynamic block*/
            };callbacksAbs$.empty.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Callbacks},$ps:[],$cont:CallbacksAbs,$an:function(){return[m$1.doc("remove all the callbacks from the list"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','empty']};};
            callbacksAbs$.fire=function fire($ud){
                var callbacksAbs$=this;
                /*Begin dynamic block*/
                return Callbacks(callbacksAbs$.$_native.fire($ud));
                /*End dynamic block*/
            };callbacksAbs$.fire.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Callbacks},$ps:[{$nm:'args',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[m$1.doc("fire all the backs with the given arguments"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','fire']};};
            callbacksAbs$.fired=function fired(){
                var callbacksAbs$=this;
                /*Begin dynamic block*/
                if(callbacksAbs$.$_native.fired()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };callbacksAbs$.fired.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:CallbacksAbs,$an:function(){return[m$1.doc("have the callbacks been fired at least once"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','fired']};};
            callbacksAbs$.fireWith=function fireWith($ue,$uf){
                var callbacksAbs$=this;
                if($uf===undefined){$uf=m$1.getEmpty();}
                /*Begin dynamic block*/
                return Callbacks(callbacksAbs$.$_native.fireWith($ue,$uf));
                /*End dynamic block*/
            };callbacksAbs$.fireWith.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Callbacks},$ps:[{$nm:'context',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[m$1.doc("fire all the backs with the given arguments and the given context"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','fireWith']};};
            callbacksAbs$.has=function has($ug){
                var callbacksAbs$=this;
                /*Begin dynamic block*/
                if(callbacksAbs$.$_native.has($ug)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };callbacksAbs$.has.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'callback',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[m$1.doc("does the collection contain the given callback"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','has']};};
            callbacksAbs$.lock=function lock(){
                var callbacksAbs$=this;
                /*Begin dynamic block*/
                return Callbacks(callbacksAbs$.$_native.lock());
                /*End dynamic block*/
            };callbacksAbs$.lock.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Callbacks},$ps:[],$cont:CallbacksAbs,$an:function(){return[m$1.doc("lock the callback list in its current state"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','lock']};};
            callbacksAbs$.locked=function locked(){
                var callbacksAbs$=this;
                /*Begin dynamic block*/
                if(callbacksAbs$.$_native.locked()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };callbacksAbs$.locked.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:CallbacksAbs,$an:function(){return[m$1.doc("is the callback list locked"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','locked']};};
            callbacksAbs$.remove=function remove($uh){
                var callbacksAbs$=this;
                /*Begin dynamic block*/
                return Callbacks(callbacksAbs$.$_native.remove($uh));
                /*End dynamic block*/
            };callbacksAbs$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Callbacks},$ps:[{$nm:'callbacks',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[m$1.doc("remove a callback or collection of callbacks"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CallbacksAbs','$m','remove']};};
        })(CallbacksAbs.$$.prototype);
    }
    return CallbacksAbs;
}
ex$.$init$CallbacksAbs=$init$CallbacksAbs;
$init$CallbacksAbs();
function Callbacks($ui,callbacks$){
    $init$Callbacks();
    if(callbacks$===undefined)callbacks$=new Callbacks.$$;
    callbacks$.$ui_=$ui;
    CallbacksAbs(callbacks$);
    callbacks$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Callbacks,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','Callbacks','$at','native']};}};
    /*Begin dynamic block*/
    callbacks$.$_native=callbacks$.$ui;/*End dynamic block*/
    return callbacks$;
}
Callbacks.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CallbacksAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a collection of callbacks"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','Callbacks']};};
ex$.Callbacks=Callbacks;
function $init$Callbacks(){
    if(Callbacks.$$===undefined){
        m$1.initTypeProto(Callbacks,'com.openswimsoftware.ceylon.js.jquery::Callbacks',$init$CallbacksAbs());
        (function(callbacks$){
            m$1.atr$(callbacks$,'$ui',function(){return this.$ui_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Callbacks,d:['com.openswimsoftware.ceylon.js.jquery','Callbacks','$at','n$htfnhq']};});
        })(Callbacks.$$.prototype);
    }
    return Callbacks;
}
ex$.$init$Callbacks=$init$Callbacks;
$init$Callbacks();
function createCoordinates($uj,$uk){
    /*Begin dynamic block*/
    var $ul=(typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'6:17-6:22','coordinates.ceylon'):Object)();
    var $um;
    if(($um=$uj)!==null&&$um!==undefined){
        $ul.top=$um;
    }var $un;
    if(($un=$uk)!==null&&$un!==undefined){
        $ul.left=$un;
    }return Coordinates($ul);
    /*End dynamic block*/
}
ex$.createCoordinates=createCoordinates;
createCoordinates.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Coordinates},$ps:[{$nm:'top',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:m$1.Float}]}]},$an:function(){return[];}},{$nm:'left',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:m$1.Float}]}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("create a new coordinate"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','createCoordinates']};};
function CoordinatesAbs(coordinatesAbs$){
    $init$CoordinatesAbs();
    if(coordinatesAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(coordinatesAbs$);
    return coordinatesAbs$;
}
CoordinatesAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','CoordinatesAbs']};};
ex$.CoordinatesAbs=CoordinatesAbs;
function $init$CoordinatesAbs(){
    if(CoordinatesAbs.$$===undefined){
        m$1.initTypeProto(CoordinatesAbs,'com.openswimsoftware.ceylon.js.jquery::CoordinatesAbs',m$9f.JSObjectAbs);
        (function(coordinatesAbs$){
            coordinatesAbs$.getTop=function getTop(){
                var coordinatesAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(coordinatesAbs$.$_native.top);
                /*End dynamic block*/
            };coordinatesAbs$.getTop.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:CoordinatesAbs,$an:function(){return[m$1.doc("returns the top coordinate"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CoordinatesAbs','$m','getTop']};};
            coordinatesAbs$.setTop=function setTop($uo){
                var coordinatesAbs$=this;
                /*Begin dynamic block*/
                coordinatesAbs$.$_native.top=$uo;
                /*End dynamic block*/
            };coordinatesAbs$.setTop.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'top',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]},$an:function(){return[];}}],$cont:CoordinatesAbs,$an:function(){return[m$1.doc("set the top coordinate"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CoordinatesAbs','$m','setTop']};};
            coordinatesAbs$.getLeft=function getLeft(){
                var coordinatesAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(coordinatesAbs$.$_native.left);
                /*End dynamic block*/
            };coordinatesAbs$.getLeft.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:CoordinatesAbs,$an:function(){return[m$1.doc("returns the left coordinate"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CoordinatesAbs','$m','getLeft']};};
            coordinatesAbs$.setLeft=function setLeft($up){
                var coordinatesAbs$=this;
                /*Begin dynamic block*/
                coordinatesAbs$.$_native.left=$up;
                /*End dynamic block*/
            };coordinatesAbs$.setLeft.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'left',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]},$an:function(){return[];}}],$cont:CoordinatesAbs,$an:function(){return[m$1.doc("set the left coordinate"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','CoordinatesAbs','$m','setLeft']};};
        })(CoordinatesAbs.$$.prototype);
    }
    return CoordinatesAbs;
}
ex$.$init$CoordinatesAbs=$init$CoordinatesAbs;
$init$CoordinatesAbs();
function Coordinates($uq,coordinates$){
    $init$Coordinates();
    if(coordinates$===undefined)coordinates$=new Coordinates.$$;
    coordinates$.$uq_=$uq;
    CoordinatesAbs(coordinates$);
    coordinates$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Coordinates,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','Coordinates','$at','native']};}};
    /*Begin dynamic block*/
    coordinates$.$_native=coordinates$.$uq;/*End dynamic block*/
    return coordinates$;
}
Coordinates.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CoordinatesAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("coordinates on the page"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','Coordinates']};};
ex$.Coordinates=Coordinates;
function $init$Coordinates(){
    if(Coordinates.$$===undefined){
        m$1.initTypeProto(Coordinates,'com.openswimsoftware.ceylon.js.jquery::Coordinates',$init$CoordinatesAbs());
        (function(coordinates$){
            m$1.atr$(coordinates$,'$uq',function(){return this.$uq_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Coordinates,d:['com.openswimsoftware.ceylon.js.jquery','Coordinates','$at','n$i6nzh5']};});
        })(Coordinates.$$.prototype);
    }
    return Coordinates;
}
ex$.$init$Coordinates=$init$Coordinates;
$init$Coordinates();
function DeferredState($ur,deferredState$){
    $init$DeferredState();
    if(deferredState$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    deferredState$.$ur_=$ur;
    return deferredState$;
}
DeferredState.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],of:[$prop$get$us,$prop$get$ut,$prop$get$uu],$an:function(){return[m$1.doc("the current state of the deferred object"),m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredState']};};
ex$.DeferredState=DeferredState;
function $init$DeferredState(){
    if(DeferredState.$$===undefined){
        m$1.initTypeProto(DeferredState,'com.openswimsoftware.ceylon.js.jquery::DeferredState',m$1.Basic);
        (function(deferredState$){
            m$1.atr$(deferredState$,'$ur',function(){return this.$ur_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:DeferredState,d:['com.openswimsoftware.ceylon.js.jquery','DeferredState','$at','name$3heduz']};});
        })(DeferredState.$$.prototype);
    }
    return DeferredState;
}
ex$.$init$DeferredState=$init$DeferredState;
$init$DeferredState();
function $us(){
    var deferredStatePending$=new $us.$$;
    DeferredState("pending",deferredStatePending$);
    return deferredStatePending$;
};$us.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DeferredState},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','deferredStatePending']};};
function $init$$us(){
    if($us.$$===undefined){
        m$1.initTypeProto($us,'com.openswimsoftware.ceylon.js.jquery::deferredStatePending',$init$DeferredState());
    }
    return $us;
}
ex$.$init$$us=$init$$us;
$init$$us();
var $uv;
function getDeferredStatePending(){
    if($uv===undefined){$uv=$init$$us()();$uv.$crtmm$=getDeferredStatePending.$crtmm$;}
    return $uv;
}
ex$.getDeferredStatePending=getDeferredStatePending;
getDeferredStatePending.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$us},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','deferredStatePending']};};
$prop$getDeferredStatePending={get:getDeferredStatePending,$crtmm$:getDeferredStatePending.$crtmm$};
get$us=getDeferredStatePending;$prop$get$us=getDeferredStatePending;
ex$.$prop$getDeferredStatePending=$prop$getDeferredStatePending;
function $ut(){
    var deferredStateResolved$=new $ut.$$;
    DeferredState("resolved",deferredStateResolved$);
    return deferredStateResolved$;
};$ut.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DeferredState},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','deferredStateResolved']};};
function $init$$ut(){
    if($ut.$$===undefined){
        m$1.initTypeProto($ut,'com.openswimsoftware.ceylon.js.jquery::deferredStateResolved',$init$DeferredState());
    }
    return $ut;
}
ex$.$init$$ut=$init$$ut;
$init$$ut();
var $uw;
function getDeferredStateResolved(){
    if($uw===undefined){$uw=$init$$ut()();$uw.$crtmm$=getDeferredStateResolved.$crtmm$;}
    return $uw;
}
ex$.getDeferredStateResolved=getDeferredStateResolved;
getDeferredStateResolved.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$ut},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','deferredStateResolved']};};
$prop$getDeferredStateResolved={get:getDeferredStateResolved,$crtmm$:getDeferredStateResolved.$crtmm$};
get$ut=getDeferredStateResolved;$prop$get$ut=getDeferredStateResolved;
ex$.$prop$getDeferredStateResolved=$prop$getDeferredStateResolved;
function $uu(){
    var deferredStateRejected$=new $uu.$$;
    DeferredState("rejected",deferredStateRejected$);
    return deferredStateRejected$;
};$uu.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DeferredState},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','deferredStateRejected']};};
function $init$$uu(){
    if($uu.$$===undefined){
        m$1.initTypeProto($uu,'com.openswimsoftware.ceylon.js.jquery::deferredStateRejected',$init$DeferredState());
    }
    return $uu;
}
ex$.$init$$uu=$init$$uu;
$init$$uu();
var $ux;
function getDeferredStateRejected(){
    if($ux===undefined){$ux=$init$$uu()();$ux.$crtmm$=getDeferredStateRejected.$crtmm$;}
    return $ux;
}
ex$.getDeferredStateRejected=getDeferredStateRejected;
getDeferredStateRejected.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$uu},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','deferredStateRejected']};};
$prop$getDeferredStateRejected={get:getDeferredStateRejected,$crtmm$:getDeferredStateRejected.$crtmm$};
get$uu=getDeferredStateRejected;$prop$get$uu=getDeferredStateRejected;
ex$.$prop$getDeferredStateRejected=$prop$getDeferredStateRejected;
function DeferredAbs(deferredAbs$){
    $init$DeferredAbs();
    if(deferredAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(deferredAbs$);
    return deferredAbs$;
}
DeferredAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs']};};
ex$.DeferredAbs=DeferredAbs;
function $init$DeferredAbs(){
    if(DeferredAbs.$$===undefined){
        m$1.initTypeProto(DeferredAbs,'com.openswimsoftware.ceylon.js.jquery::DeferredAbs',m$9f.JSObjectAbs);
        (function(deferredAbs$){
            deferredAbs$.always=function always($uy){
                var deferredAbs$=this;
                /*Begin dynamic block*/
                return Deferred(deferredAbs$.$_native.always($uy));
                /*End dynamic block*/
            };deferredAbs$.always.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Deferred},$ps:[{$nm:'alwaysCallbacks',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[m$1.doc("add handlers to be called when the deferred object is either resolved or rejected"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','always']};};
            deferredAbs$.done=function done($uz){
                var deferredAbs$=this;
                /*Begin dynamic block*/
                return Deferred(deferredAbs$.$_native.done($uz));
                /*End dynamic block*/
            };deferredAbs$.done.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Deferred},$ps:[{$nm:'doneCallbacks',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[m$1.doc("add handlers to be called when the deferred object is resolved"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','done']};};
            deferredAbs$.fail=function fail($v0){
                var deferredAbs$=this;
                /*Begin dynamic block*/
                return Deferred(deferredAbs$.$_native.fail($v0));
                /*End dynamic block*/
            };deferredAbs$.fail.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Deferred},$ps:[{$nm:'failCallbacks',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[m$1.doc("add handlers to be called when the deferred object is rejected"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','fail']};};
            deferredAbs$.thenFilter=function thenFilter($v1,$v2,$v3){
                var deferredAbs$=this;
                /*Begin dynamic block*/
                return Deferred(deferredAbs$.$_native.then($v1,$v2,$v3));
                /*End dynamic block*/
            };deferredAbs$.thenFilter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Deferred},$ps:[{$nm:'doneFilter',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'failFilter',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'progressFilter',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[m$1.doc("add handlers to be called when the deferred object is either resolved, rejected or are still in progress"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','thenFilter']};};
            deferredAbs$.notify=function notify($v4){
                var deferredAbs$=this;
                /*Begin dynamic block*/
                return Deferred(deferredAbs$.$_native.notify($v4.$_native));
                /*End dynamic block*/
            };deferredAbs$.notify.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[m$1.doc("call the progress callbacks on deferred with the given args"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','notify']};};
            deferredAbs$.notifyWith=function notifyWith($v5,$v6){
                var deferredAbs$=this;
                /*Begin dynamic block*/
                return Deferred(deferredAbs$.$_native.notifyWith($v5.$_native,$v6.$_native));
                /*End dynamic block*/
            };deferredAbs$.notifyWith.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[m$1.doc("call the progress callbacks on deferred with the given args with the given context"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','notifyWith']};};
            deferredAbs$.progress=function progress($v7){
                var deferredAbs$=this;
                /*Begin dynamic block*/
                return Deferred(deferredAbs$.$_native.progress($v7));
                /*End dynamic block*/
            };deferredAbs$.progress.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Deferred},$ps:[{$nm:'progressCallbacks',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[m$1.doc("add handlers to be called when the deferred objects progress is updated"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','progress']};};
            deferredAbs$.promise=function promise($v8){
                var deferredAbs$=this;
                /*Begin dynamic block*/
                return Promise(deferredAbs$.$_native.promise($v8));
                /*End dynamic block*/
            };deferredAbs$.promise.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise},$ps:[{$nm:'target',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[m$1.doc("convert the deferred to a promise on the given target"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','promise']};};
            deferredAbs$.reject=function reject($v9){
                var deferredAbs$=this;
                /*Begin dynamic block*/
                return Deferred(deferredAbs$.$_native.reject($v9.$_native));
                /*End dynamic block*/
            };deferredAbs$.reject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[m$1.doc("call the fail callbacks on deferred with the given args"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','reject']};};
            deferredAbs$.rejectWith=function rejectWith($va,$vb){
                var deferredAbs$=this;
                /*Begin dynamic block*/
                return Deferred(deferredAbs$.$_native.rejectWith($va.$_native,$vb.$_native));
                /*End dynamic block*/
            };deferredAbs$.rejectWith.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[m$1.doc("call the fail callbacks on deferred with the given args and the given context"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','rejectWith']};};
            deferredAbs$.resolve=function resolve($vc){
                var deferredAbs$=this;
                /*Begin dynamic block*/
                return Deferred(deferredAbs$.$_native.resolve($vc.$_native));
                /*End dynamic block*/
            };deferredAbs$.resolve.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[m$1.doc("resolve the deferred object and call the done callbacks on deferred with the given args"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','resolve']};};
            deferredAbs$.resolveWith=function resolveWith($vd,$ve){
                var deferredAbs$=this;
                /*Begin dynamic block*/
                return Deferred(deferredAbs$.$_native.resolveWith($vd.$_native,$ve.$_native));
                /*End dynamic block*/
            };deferredAbs$.resolveWith.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[m$1.doc("resolve the deferred object and call the done callbacks on deferred with the given args and the given context"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','resolveWith']};};
            deferredAbs$.state=function state(){
                var deferredAbs$=this;
                /*Begin dynamic block*/
                if(($vf=deferredAbs$.$_native.state,$vg="pending",($vf.equals&&$vf.equals($vg))||$vf===$vg)){
                    return getDeferredStatePending();
                }else {
                    if(($vh=deferredAbs$.$_native.state,$vi="resolved",($vh.equals&&$vh.equals($vi))||$vh===$vi)){
                        return getDeferredStateResolved();
                    }else {
                        return getDeferredStateResolved();
                    }
                }/*End dynamic block*/
            };deferredAbs$.state.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DeferredState},$ps:[],$cont:DeferredAbs,$an:function(){return[m$1.doc("returns the current state of the deferred object"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','DeferredAbs','$m','state']};};
        })(DeferredAbs.$$.prototype);
    }
    return DeferredAbs;
}
ex$.$init$DeferredAbs=$init$DeferredAbs;
$init$DeferredAbs();
function Deferred($vj,deferred$){
    $init$Deferred();
    if(deferred$===undefined)deferred$=new Deferred.$$;
    deferred$.$vj_=$vj;
    DeferredAbs(deferred$);
    deferred$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Deferred,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','Deferred','$at','native']};}};
    /*Begin dynamic block*/
    deferred$.$_native=deferred$.$vj;/*End dynamic block*/
    return deferred$;
}
Deferred.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DeferredAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("used for callback queues"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','Deferred']};};
ex$.Deferred=Deferred;
function $init$Deferred(){
    if(Deferred.$$===undefined){
        m$1.initTypeProto(Deferred,'com.openswimsoftware.ceylon.js.jquery::Deferred',$init$DeferredAbs());
        (function(deferred$){
            m$1.atr$(deferred$,'$vj',function(){return this.$vj_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Deferred,d:['com.openswimsoftware.ceylon.js.jquery','Deferred','$at','n$est9ud']};});
        })(Deferred.$$.prototype);
    }
    return Deferred;
}
ex$.$init$Deferred=$init$Deferred;
$init$Deferred();
var m$qm=require('com/openswimsoftware/ceylon/js/dom/4.0.0/com.openswimsoftware.ceylon.js.dom-4.0.0');
m$1.$addmod$(m$qm,'com.openswimsoftware.ceylon.js.dom/4.0.0');
var m$hr=require('com/openswimsoftware/ceylon/js/json/1.0.0/com.openswimsoftware.ceylon.js.json-1.0.0');
m$1.$addmod$(m$hr,'com.openswimsoftware.ceylon.js.json/1.0.0');
var $vk;function $valinit$$vk(){if($vk===undefined)$vk="*";return $vk;};$valinit$$vk();
function getAllSelector(){return $valinit$$vk();}
ex$.getAllSelector=getAllSelector;
var $prop$getAllSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','allSelector']};}};
ex$.$prop$getAllSelector=$prop$getAllSelector;
$prop$getAllSelector.get=getAllSelector;
getAllSelector.$crtmm$=$prop$getAllSelector.$crtmm$;
var $vl;function $valinit$$vl(){if($vl===undefined)$vl=":animated";return $vl;};$valinit$$vl();
function getAnimatedSelector(){return $valinit$$vl();}
ex$.getAnimatedSelector=getAnimatedSelector;
var $prop$getAnimatedSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','animatedSelector']};}};
ex$.$prop$getAnimatedSelector=$prop$getAnimatedSelector;
$prop$getAnimatedSelector.get=getAnimatedSelector;
getAnimatedSelector.$crtmm$=$prop$getAnimatedSelector.$crtmm$;
var $vm;function $valinit$$vm(){if($vm===undefined)$vm=":button";return $vm;};$valinit$$vm();
function getButtonSelector(){return $valinit$$vm();}
ex$.getButtonSelector=getButtonSelector;
var $prop$getButtonSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','buttonSelector']};}};
ex$.$prop$getButtonSelector=$prop$getButtonSelector;
$prop$getButtonSelector.get=getButtonSelector;
getButtonSelector.$crtmm$=$prop$getButtonSelector.$crtmm$;
var $vn;function $valinit$$vn(){if($vn===undefined)$vn=":checkbox";return $vn;};$valinit$$vn();
function getCheckboxSelector(){return $valinit$$vn();}
ex$.getCheckboxSelector=getCheckboxSelector;
var $prop$getCheckboxSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','checkboxSelector']};}};
ex$.$prop$getCheckboxSelector=$prop$getCheckboxSelector;
$prop$getCheckboxSelector.get=getCheckboxSelector;
getCheckboxSelector.$crtmm$=$prop$getCheckboxSelector.$crtmm$;
var $vo;function $valinit$$vo(){if($vo===undefined)$vo=":checked";return $vo;};$valinit$$vo();
function getCheckedSelector(){return $valinit$$vo();}
ex$.getCheckedSelector=getCheckedSelector;
var $prop$getCheckedSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','checkedSelector']};}};
ex$.$prop$getCheckedSelector=$prop$getCheckedSelector;
$prop$getCheckedSelector.get=getCheckedSelector;
getCheckedSelector.$crtmm$=$prop$getCheckedSelector.$crtmm$;
var $vp;function $valinit$$vp(){if($vp===undefined)$vp=":disabled";return $vp;};$valinit$$vp();
function getDisabledSelector(){return $valinit$$vp();}
ex$.getDisabledSelector=getDisabledSelector;
var $prop$getDisabledSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','disabledSelector']};}};
ex$.$prop$getDisabledSelector=$prop$getDisabledSelector;
$prop$getDisabledSelector.get=getDisabledSelector;
getDisabledSelector.$crtmm$=$prop$getDisabledSelector.$crtmm$;
var $vq;function $valinit$$vq(){if($vq===undefined)$vq=":empty";return $vq;};$valinit$$vq();
function getEmptySelector(){return $valinit$$vq();}
ex$.getEmptySelector=getEmptySelector;
var $prop$getEmptySelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','emptySelector']};}};
ex$.$prop$getEmptySelector=$prop$getEmptySelector;
$prop$getEmptySelector.get=getEmptySelector;
getEmptySelector.$crtmm$=$prop$getEmptySelector.$crtmm$;
var $vr;function $valinit$$vr(){if($vr===undefined)$vr=":enabled";return $vr;};$valinit$$vr();
function getEnabledSelector(){return $valinit$$vr();}
ex$.getEnabledSelector=getEnabledSelector;
var $prop$getEnabledSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','enabledSelector']};}};
ex$.$prop$getEnabledSelector=$prop$getEnabledSelector;
$prop$getEnabledSelector.get=getEnabledSelector;
getEnabledSelector.$crtmm$=$prop$getEnabledSelector.$crtmm$;
var $vs;function $valinit$$vs(){if($vs===undefined)$vs=":even";return $vs;};$valinit$$vs();
function getEvenSelector(){return $valinit$$vs();}
ex$.getEvenSelector=getEvenSelector;
var $prop$getEvenSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','evenSelector']};}};
ex$.$prop$getEvenSelector=$prop$getEvenSelector;
$prop$getEvenSelector.get=getEvenSelector;
getEvenSelector.$crtmm$=$prop$getEvenSelector.$crtmm$;
var $vt;function $valinit$$vt(){if($vt===undefined)$vt=":file";return $vt;};$valinit$$vt();
function getFileSelector(){return $valinit$$vt();}
ex$.getFileSelector=getFileSelector;
var $prop$getFileSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','fileSelector']};}};
ex$.$prop$getFileSelector=$prop$getFileSelector;
$prop$getFileSelector.get=getFileSelector;
getFileSelector.$crtmm$=$prop$getFileSelector.$crtmm$;
var $vu;function $valinit$$vu(){if($vu===undefined)$vu=":first-child";return $vu;};$valinit$$vu();
function getFirstChildSelector(){return $valinit$$vu();}
ex$.getFirstChildSelector=getFirstChildSelector;
var $prop$getFirstChildSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','firstChildSelector']};}};
ex$.$prop$getFirstChildSelector=$prop$getFirstChildSelector;
$prop$getFirstChildSelector.get=getFirstChildSelector;
getFirstChildSelector.$crtmm$=$prop$getFirstChildSelector.$crtmm$;
var $vv;function $valinit$$vv(){if($vv===undefined)$vv=":first-of-type";return $vv;};$valinit$$vv();
function getFirstOfTypeSelector(){return $valinit$$vv();}
ex$.getFirstOfTypeSelector=getFirstOfTypeSelector;
var $prop$getFirstOfTypeSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','firstOfTypeSelector']};}};
ex$.$prop$getFirstOfTypeSelector=$prop$getFirstOfTypeSelector;
$prop$getFirstOfTypeSelector.get=getFirstOfTypeSelector;
getFirstOfTypeSelector.$crtmm$=$prop$getFirstOfTypeSelector.$crtmm$;
var $vw;function $valinit$$vw(){if($vw===undefined)$vw=":first";return $vw;};$valinit$$vw();
function getFirstSelector(){return $valinit$$vw();}
ex$.getFirstSelector=getFirstSelector;
var $prop$getFirstSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','firstSelector']};}};
ex$.$prop$getFirstSelector=$prop$getFirstSelector;
$prop$getFirstSelector.get=getFirstSelector;
getFirstSelector.$crtmm$=$prop$getFirstSelector.$crtmm$;
var $vx;function $valinit$$vx(){if($vx===undefined)$vx=":focus";return $vx;};$valinit$$vx();
function getFocusSelector(){return $valinit$$vx();}
ex$.getFocusSelector=getFocusSelector;
var $prop$getFocusSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','focusSelector']};}};
ex$.$prop$getFocusSelector=$prop$getFocusSelector;
$prop$getFocusSelector.get=getFocusSelector;
getFocusSelector.$crtmm$=$prop$getFocusSelector.$crtmm$;
var $vy;function $valinit$$vy(){if($vy===undefined)$vy=":header";return $vy;};$valinit$$vy();
function getHeaderSelector(){return $valinit$$vy();}
ex$.getHeaderSelector=getHeaderSelector;
var $prop$getHeaderSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','headerSelector']};}};
ex$.$prop$getHeaderSelector=$prop$getHeaderSelector;
$prop$getHeaderSelector.get=getHeaderSelector;
getHeaderSelector.$crtmm$=$prop$getHeaderSelector.$crtmm$;
var $vz;function $valinit$$vz(){if($vz===undefined)$vz=":hidden";return $vz;};$valinit$$vz();
function getHiddenSelector(){return $valinit$$vz();}
ex$.getHiddenSelector=getHiddenSelector;
var $prop$getHiddenSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','hiddenSelector']};}};
ex$.$prop$getHiddenSelector=$prop$getHiddenSelector;
$prop$getHiddenSelector.get=getHiddenSelector;
getHiddenSelector.$crtmm$=$prop$getHiddenSelector.$crtmm$;
var $w0;function $valinit$$w0(){if($w0===undefined)$w0=":image";return $w0;};$valinit$$w0();
function getImageSelector(){return $valinit$$w0();}
ex$.getImageSelector=getImageSelector;
var $prop$getImageSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','imageSelector']};}};
ex$.$prop$getImageSelector=$prop$getImageSelector;
$prop$getImageSelector.get=getImageSelector;
getImageSelector.$crtmm$=$prop$getImageSelector.$crtmm$;
var $w1;function $valinit$$w1(){if($w1===undefined)$w1=":input";return $w1;};$valinit$$w1();
function getInputSelector(){return $valinit$$w1();}
ex$.getInputSelector=getInputSelector;
var $prop$getInputSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','inputSelector']};}};
ex$.$prop$getInputSelector=$prop$getInputSelector;
$prop$getInputSelector.get=getInputSelector;
getInputSelector.$crtmm$=$prop$getInputSelector.$crtmm$;
var $w2;function $valinit$$w2(){if($w2===undefined)$w2=":last-child";return $w2;};$valinit$$w2();
function getLastChildSelector(){return $valinit$$w2();}
ex$.getLastChildSelector=getLastChildSelector;
var $prop$getLastChildSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','lastChildSelector']};}};
ex$.$prop$getLastChildSelector=$prop$getLastChildSelector;
$prop$getLastChildSelector.get=getLastChildSelector;
getLastChildSelector.$crtmm$=$prop$getLastChildSelector.$crtmm$;
var $w3;function $valinit$$w3(){if($w3===undefined)$w3=":last-of-type";return $w3;};$valinit$$w3();
function getLastOfTypeSelector(){return $valinit$$w3();}
ex$.getLastOfTypeSelector=getLastOfTypeSelector;
var $prop$getLastOfTypeSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','lastOfTypeSelector']};}};
ex$.$prop$getLastOfTypeSelector=$prop$getLastOfTypeSelector;
$prop$getLastOfTypeSelector.get=getLastOfTypeSelector;
getLastOfTypeSelector.$crtmm$=$prop$getLastOfTypeSelector.$crtmm$;
var $w4;function $valinit$$w4(){if($w4===undefined)$w4=":last";return $w4;};$valinit$$w4();
function getLastSelector(){return $valinit$$w4();}
ex$.getLastSelector=getLastSelector;
var $prop$getLastSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','lastSelector']};}};
ex$.$prop$getLastSelector=$prop$getLastSelector;
$prop$getLastSelector.get=getLastSelector;
getLastSelector.$crtmm$=$prop$getLastSelector.$crtmm$;
var $w5;function $valinit$$w5(){if($w5===undefined)$w5=":odd";return $w5;};$valinit$$w5();
function getOddSelector(){return $valinit$$w5();}
ex$.getOddSelector=getOddSelector;
var $prop$getOddSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','oddSelector']};}};
ex$.$prop$getOddSelector=$prop$getOddSelector;
$prop$getOddSelector.get=getOddSelector;
getOddSelector.$crtmm$=$prop$getOddSelector.$crtmm$;
var $w6;function $valinit$$w6(){if($w6===undefined)$w6=":only-child";return $w6;};$valinit$$w6();
function getOnlyChildSelector(){return $valinit$$w6();}
ex$.getOnlyChildSelector=getOnlyChildSelector;
var $prop$getOnlyChildSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','onlyChildSelector']};}};
ex$.$prop$getOnlyChildSelector=$prop$getOnlyChildSelector;
$prop$getOnlyChildSelector.get=getOnlyChildSelector;
getOnlyChildSelector.$crtmm$=$prop$getOnlyChildSelector.$crtmm$;
var $w7;function $valinit$$w7(){if($w7===undefined)$w7=":only-of-type";return $w7;};$valinit$$w7();
function getOnlyOfTypeSelector(){return $valinit$$w7();}
ex$.getOnlyOfTypeSelector=getOnlyOfTypeSelector;
var $prop$getOnlyOfTypeSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','onlyOfTypeSelector']};}};
ex$.$prop$getOnlyOfTypeSelector=$prop$getOnlyOfTypeSelector;
$prop$getOnlyOfTypeSelector.get=getOnlyOfTypeSelector;
getOnlyOfTypeSelector.$crtmm$=$prop$getOnlyOfTypeSelector.$crtmm$;
var $w8;function $valinit$$w8(){if($w8===undefined)$w8=":parent";return $w8;};$valinit$$w8();
function getParentSelector(){return $valinit$$w8();}
ex$.getParentSelector=getParentSelector;
var $prop$getParentSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','parentSelector']};}};
ex$.$prop$getParentSelector=$prop$getParentSelector;
$prop$getParentSelector.get=getParentSelector;
getParentSelector.$crtmm$=$prop$getParentSelector.$crtmm$;
var $w9;function $valinit$$w9(){if($w9===undefined)$w9=":password";return $w9;};$valinit$$w9();
function getPasswordSelector(){return $valinit$$w9();}
ex$.getPasswordSelector=getPasswordSelector;
var $prop$getPasswordSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','passwordSelector']};}};
ex$.$prop$getPasswordSelector=$prop$getPasswordSelector;
$prop$getPasswordSelector.get=getPasswordSelector;
getPasswordSelector.$crtmm$=$prop$getPasswordSelector.$crtmm$;
var $wa;function $valinit$$wa(){if($wa===undefined)$wa=":radio";return $wa;};$valinit$$wa();
function getRadioSelector(){return $valinit$$wa();}
ex$.getRadioSelector=getRadioSelector;
var $prop$getRadioSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','radioSelector']};}};
ex$.$prop$getRadioSelector=$prop$getRadioSelector;
$prop$getRadioSelector.get=getRadioSelector;
getRadioSelector.$crtmm$=$prop$getRadioSelector.$crtmm$;
var $wb;function $valinit$$wb(){if($wb===undefined)$wb=":reset";return $wb;};$valinit$$wb();
function getResetSelector(){return $valinit$$wb();}
ex$.getResetSelector=getResetSelector;
var $prop$getResetSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','resetSelector']};}};
ex$.$prop$getResetSelector=$prop$getResetSelector;
$prop$getResetSelector.get=getResetSelector;
getResetSelector.$crtmm$=$prop$getResetSelector.$crtmm$;
var $wc;function $valinit$$wc(){if($wc===undefined)$wc=":root";return $wc;};$valinit$$wc();
function getRootSelector(){return $valinit$$wc();}
ex$.getRootSelector=getRootSelector;
var $prop$getRootSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','rootSelector']};}};
ex$.$prop$getRootSelector=$prop$getRootSelector;
$prop$getRootSelector.get=getRootSelector;
getRootSelector.$crtmm$=$prop$getRootSelector.$crtmm$;
var $wd;function $valinit$$wd(){if($wd===undefined)$wd=":selected";return $wd;};$valinit$$wd();
function getSelectedSelector(){return $valinit$$wd();}
ex$.getSelectedSelector=getSelectedSelector;
var $prop$getSelectedSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','selectedSelector']};}};
ex$.$prop$getSelectedSelector=$prop$getSelectedSelector;
$prop$getSelectedSelector.get=getSelectedSelector;
getSelectedSelector.$crtmm$=$prop$getSelectedSelector.$crtmm$;
var $we;function $valinit$$we(){if($we===undefined)$we=":submit";return $we;};$valinit$$we();
function getSubmitSelector(){return $valinit$$we();}
ex$.getSubmitSelector=getSubmitSelector;
var $prop$getSubmitSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','submitSelector']};}};
ex$.$prop$getSubmitSelector=$prop$getSubmitSelector;
$prop$getSubmitSelector.get=getSubmitSelector;
getSubmitSelector.$crtmm$=$prop$getSubmitSelector.$crtmm$;
var $wf;function $valinit$$wf(){if($wf===undefined)$wf=":target";return $wf;};$valinit$$wf();
function getTargetSelector(){return $valinit$$wf();}
ex$.getTargetSelector=getTargetSelector;
var $prop$getTargetSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','targetSelector']};}};
ex$.$prop$getTargetSelector=$prop$getTargetSelector;
$prop$getTargetSelector.get=getTargetSelector;
getTargetSelector.$crtmm$=$prop$getTargetSelector.$crtmm$;
var $wg;function $valinit$$wg(){if($wg===undefined)$wg=":text";return $wg;};$valinit$$wg();
function getTextSelector(){return $valinit$$wg();}
ex$.getTextSelector=getTextSelector;
var $prop$getTextSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','textSelector']};}};
ex$.$prop$getTextSelector=$prop$getTextSelector;
$prop$getTextSelector.get=getTextSelector;
getTextSelector.$crtmm$=$prop$getTextSelector.$crtmm$;
var $wh;function $valinit$$wh(){if($wh===undefined)$wh=":visible";return $wh;};$valinit$$wh();
function getVisibleSelector(){return $valinit$$wh();}
ex$.getVisibleSelector=getVisibleSelector;
var $prop$getVisibleSelector={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','visibleSelector']};}};
ex$.$prop$getVisibleSelector=$prop$getVisibleSelector;
$prop$getVisibleSelector.get=getVisibleSelector;
getVisibleSelector.$crtmm$=$prop$getVisibleSelector.$crtmm$;
function jQueryAjax($wi,$wj){
    if($wi===undefined){$wi=null;}
    if($wj===undefined){$wj=null;}
    /*Begin dynamic block*/
    var $wk;
    if(($wk=$wi)!==null&&$wk!==undefined){
        var $wl;
        if(($wl=$wj)!==null&&$wl!==undefined){
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'44:17-44:22','jquery.ceylon'):jQuery).ajax($wk.valueOf(),$wl.toNative()));
        }else {
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'46:17-46:22','jquery.ceylon'):jQuery).ajax($wk.valueOf()));
        }
    }else {
        var $wm;
        if(($wm=$wj)!==null&&$wm!==undefined){
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'50:17-50:22','jquery.ceylon'):jQuery).ajax($wm.toNative()));
        }else {
            return JQXHR((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'52:17-52:22','jquery.ceylon'):jQuery).ajax());
        }
    }/*End dynamic block*/
}
ex$.jQueryAjax=jQueryAjax;
jQueryAjax.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}},{$nm:'settings',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:JQueryAjaxSettingsBuilder}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryAjax']};};
function jQueryAjaxPrefilter($wn,$wo){
    if($wo===undefined){$wo=null;}
    /*Begin dynamic block*/
    var $wp;
    if(($wp=$wo)!==null&&$wp!==undefined){
        (typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'61:3-61:8','jquery.ceylon'):jQuery).ajaxPrefilter($wp.valueOf(),$wn);
    }else {
        (typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'63:3-63:8','jquery.ceylon'):jQuery).ajaxPrefilter($wn);
    }/*End dynamic block*/
}
ex$.jQueryAjaxPrefilter=jQueryAjaxPrefilter;
jQueryAjaxPrefilter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:JQueryAjaxSettings}},{$t:{t:JQueryAjaxSettings}},{$t:{t:JQXHR}}]}}},$an:function(){return[];}},{$nm:'dataTypes',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryAjaxPrefilter']};};
function jQueryAjaxSetup($wq){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'70:2-70:7','jquery.ceylon'):jQuery).ajaxSetup($wq.toNative());
    /*End dynamic block*/
}
ex$.jQueryAjaxSetup=jQueryAjaxSetup;
jQueryAjaxSetup.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'options',$mt:'prm',$t:{t:JQueryAjaxSettingsBuilder},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryAjaxSetup']};};
function jQueryAjaxTransport($wr,$ws){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'77:2-77:7','jquery.ceylon'):jQuery).ajaxTransport($wr.valueOf(),$ws);
    /*End dynamic block*/
}
ex$.jQueryAjaxTransport=jQueryAjaxTransport;
jQueryAjaxTransport.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'dataType',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}},{$t:{t:m$1.Anything}},{$t:{t:m$1.Anything}}]}}},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryAjaxTransport']};};
function jQueryCallbacks($wt){
    if($wt===undefined){$wt="";}
    /*Begin dynamic block*/
    return Callbacks((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'83:19-83:24','jquery.ceylon'):jQuery).Callbacks($wt.valueOf()));
    /*End dynamic block*/
}
ex$.jQueryCallbacks=jQueryCallbacks;
jQueryCallbacks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Callbacks},$ps:[{$nm:'flags',$mt:'prm',$def:1,$t:{t:m$1.String},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryCallbacks']};};
function jQueryContains($wu,$wv){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'89:6-89:11','jquery.ceylon'):jQuery).contains($wu,$wv)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
ex$.jQueryContains=jQueryContains;
jQueryContains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'container',$mt:'prm',$t:{t:m$qm.Element},$an:function(){return[];}},{$nm:'contained',$mt:'prm',$t:{t:m$qm.Element},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryContains']};};
function jQueryCssHooks(){
    /*Begin dynamic block*/
    return m$9f.JSObject((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'99:18-99:23','jquery.ceylon'):jQuery).cssHooks);
    /*End dynamic block*/
}
ex$.jQueryCssHooks=jQueryCssHooks;
jQueryCssHooks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSObject},$ps:[],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryCssHooks']};};
function jQuerySetData($ww,$wx,$wy){
    /*Begin dynamic block*/
    return m$9f.JSObject((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'105:18-105:23','jquery.ceylon'):jQuery).data($ww,$wx.valueOf(),$wy));
    /*End dynamic block*/
}
ex$.jQuerySetData=jQuerySetData;
jQuerySetData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSObject},$ps:[{$nm:'element',$mt:'prm',$t:{t:m$qm.Element},$an:function(){return[];}},{$nm:'key',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQuerySetData']};};
function jQueryGetData($wz,$x0){
    if($x0===undefined){$x0=null;}
    /*Begin dynamic block*/
    return m$9f.JSObject((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'111:18-111:23','jquery.ceylon'):jQuery).data($wz,$x0));
    /*End dynamic block*/
}
ex$.jQueryGetData=jQueryGetData;
jQueryGetData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSObject},$ps:[{$nm:'element',$mt:'prm',$t:{t:m$qm.Element},$an:function(){return[];}},{$nm:'key',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryGetData']};};
function jQueryDeferred($x1){
    if($x1===undefined){$x1=null;}
    /*Begin dynamic block*/
    return Deferred((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'118:18-118:23','jquery.ceylon'):jQuery).Deferred($x1));
    /*End dynamic block*/
}
ex$.jQueryDeferred=jQueryDeferred;
jQueryDeferred.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Deferred},$ps:[{$nm:'beforeStart',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryDeferred']};};
function jQueryDequeue($x2,$x3){
    if($x3===undefined){$x3=null;}
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'124:2-124:7','jquery.ceylon'):jQuery).dequeue($x2,$x3);
    /*End dynamic block*/
}
ex$.jQueryDequeue=jQueryDequeue;
jQueryDequeue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'element',$mt:'prm',$t:{t:m$qm.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryDequeue']};};
function jQueryEach($x4,$x5){
    /*Begin dynamic block*/
    return m$9f.JSObject((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'130:18-130:23','jquery.ceylon'):jQuery).each($x4,$x5));
    /*End dynamic block*/
}
ex$.jQueryEach=jQueryEach;
jQueryEach.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSObject},$ps:[{$nm:'collection',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.Anything}}]}}},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryEach']};};
function jQueryError($x6){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'136:2-136:7','jquery.ceylon'):jQuery).error($x6.valueOf());
    /*End dynamic block*/
}
ex$.jQueryError=jQueryError;
jQueryError.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'message',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryError']};};
function jQueryExtend($x7,$x8){
    if($x8===undefined){$x8=m$1.getEmpty();}
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'142:2-142:7','jquery.ceylon'):jQuery).extend($x7,$x8);
    /*End dynamic block*/
}
ex$.jQueryExtend=jQueryExtend;
jQueryExtend.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'target',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'objects',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryExtend']};};
function jQueryExtendDeep($x9,$xa,$xb){
    if($xb===undefined){$xb=m$1.getEmpty();}
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'148:2-148:7','jquery.ceylon'):jQuery).extend($xa,$xb);
    /*End dynamic block*/
}
ex$.jQueryExtendDeep=jQueryExtendDeep;
jQueryExtendDeep.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'deep',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[];}},{$nm:'target',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'objects',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryExtendDeep']};};
function jQueryFnExtend($xc){
    /*Begin dynamic block*/
    return m$9f.JSObject((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'154:18-154:23','jquery.ceylon'):jQuery).fn.extend($xc));
    /*End dynamic block*/
}
ex$.jQueryFnExtend=jQueryFnExtend;
jQueryFnExtend.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryFnExtend']};};
function jQueryFxInterval(){
    /*Begin dynamic block*/
    return m$9f.JSNumber((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'160:18-160:23','jquery.ceylon'):jQuery).fx.interval);
    /*End dynamic block*/
}
ex$.jQueryFxInterval=jQueryFxInterval;
jQueryFxInterval.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryFxInterval']};};
function jQueryFxOff(){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'166:6-166:11','jquery.ceylon'):jQuery).fx.off){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
ex$.jQueryFxOff=jQueryFxOff;
jQueryFxOff.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryFxOff']};};
function jQueryGet($xd,$xe,$xf,$xg){
    if($xe===undefined){$xe=null;}
    if($xf===undefined){$xf=null;}
    if($xg===undefined){$xg=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'177:15-177:20','jquery.ceylon'):jQuery).get($xd.valueOf(),$xe,$xf,$xg));
    /*End dynamic block*/
}
ex$.jQueryGet=jQueryGet;
jQueryGet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}},{$t:{t:m$1.String}},{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}},{$nm:'dataType',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryGet']};};
function jQueryGetJSON($xh,$xi,$xj){
    if($xi===undefined){$xi=null;}
    if($xj===undefined){$xj=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'184:15-184:20','jquery.ceylon'):jQuery).getJSON($xh.valueOf(),$xi,$xj));
    /*End dynamic block*/
}
ex$.jQueryGetJSON=jQueryGetJSON;
jQueryGetJSON.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}},{$t:{t:m$1.String}},{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryGetJSON']};};
function jQueryGetScript($xk,$xl){
    if($xl===undefined){$xl=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'191:15-191:20','jquery.ceylon'):jQuery).getScript($xk.valueOf(),$xl));
    /*End dynamic block*/
}
ex$.jQueryGetScript=jQueryGetScript;
jQueryGetScript.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}},{$t:{t:m$1.String}},{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryGetScript']};};
function jQueryGlobalEval($xm){
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'197:15-197:20','jquery.ceylon'):jQuery).globalEval($xm.valueOf()));
    /*End dynamic block*/
}
ex$.jQueryGlobalEval=jQueryGlobalEval;
jQueryGlobalEval.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQXHR},$ps:[{$nm:'code',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryGlobalEval']};};
function jQueryGrep($xn,$xo,$xp){
    if($xp===undefined){$xp=null;}
    /*Begin dynamic block*/
    return m$9f.JSArray((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'203:17-203:22','jquery.ceylon'):jQuery).grep($xn.$_native,$xo,$xp));
    /*End dynamic block*/
}
ex$.jQueryGrep=jQueryGrep;
jQueryGrep.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSArray},$ps:[{$nm:'array',$mt:'prm',$t:{t:m$9f.JSArray},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}},{$t:{t:m$1.Integer}}]}}},$an:function(){return[];}},{$nm:'invert',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryGrep']};};
function jQueryHasData($xq){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'209:6-209:11','jquery.ceylon'):jQuery).hasData($xq)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
ex$.jQueryHasData=jQueryHasData;
jQueryHasData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:m$qm.Element},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryHasData']};};
function jQueryHoldReady($xr){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'219:2-219:7','jquery.ceylon'):jQuery).holdReady($xr);
    /*End dynamic block*/
}
ex$.jQueryHoldReady=jQueryHoldReady;
jQueryHoldReady.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'hold',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryHoldReady']};};
function jQueryInArray($xs,$xt,$xu){
    if($xu===undefined){$xu=null;}
    /*Begin dynamic block*/
    return m$9f.JSNumber((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'225:18-225:23','jquery.ceylon'):jQuery).inArray($xs.$_native,$xt.$_native,$xu));
    /*End dynamic block*/
}
ex$.jQueryInArray=jQueryInArray;
jQueryInArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[{$nm:'val',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}},{$nm:'array',$mt:'prm',$t:{t:m$9f.JSArray},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryInArray']};};
function jQueryIsArray($xv){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'231:6-231:11','jquery.ceylon'):jQuery).isArray($xv.$_native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
ex$.jQueryIsArray=jQueryIsArray;
jQueryIsArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryIsArray']};};
function jQueryIsEmptyObject($xw){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'241:6-241:11','jquery.ceylon'):jQuery).isEmptyObject($xw.$_native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
ex$.jQueryIsEmptyObject=jQueryIsEmptyObject;
jQueryIsEmptyObject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryIsEmptyObject']};};
function jQueryIsFunction($xx){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'251:6-251:11','jquery.ceylon'):jQuery).isFunction($xx.$_native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
ex$.jQueryIsFunction=jQueryIsFunction;
jQueryIsFunction.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryIsFunction']};};
function jQueryIsNumeric($xy){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'261:6-261:11','jquery.ceylon'):jQuery).isNumeric($xy.$_native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
ex$.jQueryIsNumeric=jQueryIsNumeric;
jQueryIsNumeric.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryIsNumeric']};};
function jQueryIsPlainObject($xz){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'271:6-271:11','jquery.ceylon'):jQuery).isPlainObject($xz.$_native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
ex$.jQueryIsPlainObject=jQueryIsPlainObject;
jQueryIsPlainObject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryIsPlainObject']};};
function jQueryIsWindow($y0){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'281:6-281:11','jquery.ceylon'):jQuery).isWindow($y0.$_native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
ex$.jQueryIsWindow=jQueryIsWindow;
jQueryIsWindow.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryIsWindow']};};
function jQueryIsXMLDoc($y1){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'291:6-291:11','jquery.ceylon'):jQuery).isXMLDoc($y1.$_native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
ex$.jQueryIsXMLDoc=jQueryIsXMLDoc;
jQueryIsXMLDoc.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:m$qm.Element},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryIsXMLDoc']};};
function jQueryMapArray($y2,$y3){
    /*Begin dynamic block*/
    return m$9f.JSArray((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'301:17-301:22','jquery.ceylon'):jQuery).mapArray($y2.$_native,$y3));
    /*End dynamic block*/
}
ex$.jQueryMapArray=jQueryMapArray;
jQueryMapArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSArray},$ps:[{$nm:'array',$mt:'prm',$t:{t:m$9f.JSArray},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}},{$t:{t:m$1.Integer}}]}}},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryMapArray']};};
function jQueryMapObject($y4,$y5){
    /*Begin dynamic block*/
    return m$9f.JSArray((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'307:17-307:22','jquery.ceylon'):jQuery).mapArray($y4.$_native,$y5));
    /*End dynamic block*/
}
ex$.jQueryMapObject=jQueryMapObject;
jQueryMapObject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSArray},$ps:[{$nm:'obj',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}},{$t:{t:m$1.Anything}}]}}},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryMapObject']};};
function jQueryMerge($y6,$y7){
    /*Begin dynamic block*/
    return m$9f.JSArray((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'313:17-313:22','jquery.ceylon'):jQuery).merge($y6,$y7));
    /*End dynamic block*/
}
ex$.jQueryMerge=jQueryMerge;
jQueryMerge.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSArray},$ps:[{$nm:'first',$mt:'prm',$t:{t:m$9f.JSArray},$an:function(){return[];}},{$nm:'second',$mt:'prm',$t:{t:m$9f.JSArray},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryMerge']};};
function jQueryNoConflict($y8){
    if($y8===undefined){$y8=null;}
    /*Begin dynamic block*/
    return m$9f.JSArray((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'319:17-319:22','jquery.ceylon'):jQuery).noConflict($y8));
    /*End dynamic block*/
}
ex$.jQueryNoConflict=jQueryNoConflict;
jQueryNoConflict.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSArray},$ps:[{$nm:'removeAll',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryNoConflict']};};
function jQueryNoop(){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'325:2-325:7','jquery.ceylon'):jQuery).noop();
    /*End dynamic block*/
}
ex$.jQueryNoop=jQueryNoop;
jQueryNoop.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryNoop']};};
function jQueryNow(){
    /*Begin dynamic block*/
    return m$9f.JSNumber((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'331:18-331:23','jquery.ceylon'):jQuery).now());
    /*End dynamic block*/
}
ex$.jQueryNow=jQueryNow;
jQueryNow.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryNow']};};
function jQueryParam($y9,$ya){
    if($ya===undefined){$ya=false;}
    /*Begin dynamic block*/
    return m$9f.JSString((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'337:18-337:23','jquery.ceylon'):jQuery).param($y9,$ya));
    /*End dynamic block*/
}
ex$.jQueryParam=jQueryParam;
jQueryParam.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[{$nm:'obj',$mt:'prm',$t:{t:'u',l:[{t:m$9f.JSArray},{t:m$9f.JSObject}]},$an:function(){return[];}},{$nm:'traditional',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryParam']};};
function jQueryParseHTML($yb,$yc,$yd){
    if($yc===undefined){$yc=null;}
    if($yd===undefined){$yd=false;}
    /*Begin dynamic block*/
    return m$9f.JSString((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'343:18-343:23','jquery.ceylon'):jQuery).parseHTML($yb.valueOf(),$yc,$yd));
    /*End dynamic block*/
}
ex$.jQueryParseHTML=jQueryParseHTML;
jQueryParseHTML.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[{$nm:'data',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$qm.Element}]},$an:function(){return[];}},{$nm:'keepScripts',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryParseHTML']};};
function jQueryParseJSON($ye){
    /*Begin dynamic block*/
    return m$9f.JSObject((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'349:18-349:23','jquery.ceylon'):jQuery).parseJSON((typeof data==='undefined'||data===null?m$1.throwexc(m$1.Exception("Undefined or null reference: data"),'349:35-349:38','jquery.ceylon'):data),(typeof context==='undefined'||context===null?m$1.throwexc(m$1.Exception("Undefined or null reference: context"),'349:41-349:47','jquery.ceylon'):context),(typeof keepScripts==='undefined'||keepScripts===null?m$1.throwexc(m$1.Exception("Undefined or null reference: keepScripts"),'349:50-349:60','jquery.ceylon'):keepScripts)));
    /*End dynamic block*/
}
ex$.jQueryParseJSON=jQueryParseJSON;
jQueryParseJSON.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSObject},$ps:[{$nm:'json',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryParseJSON']};};
function jQueryParseXML($yf){
    /*Begin dynamic block*/
    return m$9f.JSObject((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'355:18-355:23','jquery.ceylon'):jQuery).parseXML($yf.valueOf()));
    /*End dynamic block*/
}
ex$.jQueryParseXML=jQueryParseXML;
jQueryParseXML.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSObject},$ps:[{$nm:'data',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryParseXML']};};
function jQueryPost($yg,$yh,$yi,$yj){
    if($yh===undefined){$yh=null;}
    if($yi===undefined){$yi=null;}
    if($yj===undefined){$yj=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'362:15-362:20','jquery.ceylon'):jQuery).post($yg.valueOf(),$yh,$yi,$yj));
    /*End dynamic block*/
}
ex$.jQueryPost=jQueryPost;
jQueryPost.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}},{$t:{t:m$1.String}},{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}},{$nm:'dataType',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryPost']};};
function jQueryProxy($yk,$yl,$ym){
    if($ym===undefined){$ym=m$1.getEmpty();}
    /*Begin dynamic block*/
    return m$9f.JSFunction((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'368:20-368:25','jquery.ceylon'):jQuery).proxy($yk,$yl,$ym));
    /*End dynamic block*/
}
ex$.jQueryProxy=jQueryProxy;
jQueryProxy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSFunction},$ps:[{$nm:'func',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}},{$nm:'additionalArguments',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryProxy']};};
function jQueryProxyName($yn,$yo,$yp){
    if($yp===undefined){$yp=m$1.getEmpty();}
    /*Begin dynamic block*/
    return m$9f.JSFunction((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'374:20-374:25','jquery.ceylon'):jQuery).proxy($yn,(typeof func==='undefined'||func===null?m$1.throwexc(m$1.Exception("Undefined or null reference: func"),'374:42-374:45','jquery.ceylon'):func),$yp));
    /*End dynamic block*/
}
ex$.jQueryProxyName=jQueryProxyName;
jQueryProxyName.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSFunction},$ps:[{$nm:'context',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'additionalArguments',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryProxyName']};};
function jQueryGetQueue($yq,$yr){
    if($yr===undefined){$yr="fx";}
    /*Begin dynamic block*/
    return m$9f.JSArray((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'381:17-381:22','jquery.ceylon'):jQuery).queue($yq,$yr.valueOf()));
    /*End dynamic block*/
}
ex$.jQueryGetQueue=jQueryGetQueue;
jQueryGetQueue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSArray},$ps:[{$nm:'element',$mt:'prm',$t:{t:m$qm.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:m$1.String},$an:function(){return[];}}],$an:function(){return[m$1.doc("returns JSFunctions[]"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryGetQueue']};};
function jQuerySetQueue($ys,$yt,$yu){
    if($yt===undefined){$yt="fx";}
    if($yu===undefined){$yu=m$1.getEmpty();}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'387:16-387:21','jquery.ceylon'):jQuery).queue($ys,$yt.valueOf(),$yu));
    /*End dynamic block*/
}
ex$.jQuerySetQueue=jQuerySetQueue;
jQuerySetQueue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'element',$mt:'prm',$t:{t:m$qm.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:m$1.String},$an:function(){return[];}},{$nm:'callbacks',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}}}}}},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQuerySetQueue']};};
function jQueryRemoveData($yv,$yw){
    if($yw===undefined){$yw=null;}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'393:16-393:21','jquery.ceylon'):jQuery).removeData($yv,$yw));
    /*End dynamic block*/
}
ex$.jQueryRemoveData=jQueryRemoveData;
jQueryRemoveData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'element',$mt:'prm',$t:{t:m$qm.Element},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryRemoveData']};};
function jQueryTrim($yx){
    /*Begin dynamic block*/
    return m$9f.JSString((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'399:18-399:23','jquery.ceylon'):jQuery).trim($yx.$_native));
    /*End dynamic block*/
}
ex$.jQueryTrim=jQueryTrim;
jQueryTrim.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[{$nm:'str',$mt:'prm',$t:{t:m$9f.JSString},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryTrim']};};
function jQueryType($yy){
    /*Begin dynamic block*/
    return m$9f.JSString((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'405:18-405:23','jquery.ceylon'):jQuery).type($yy.$_native));
    /*End dynamic block*/
}
ex$.jQueryType=jQueryType;
jQueryType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[{$nm:'obj',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryType']};};
function jQueryUnique($yz){
    /*Begin dynamic block*/
    return m$9f.JSArray((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'411:17-411:22','jquery.ceylon'):jQuery).unique($yz.$_native));
    /*End dynamic block*/
}
ex$.jQueryUnique=jQueryUnique;
jQueryUnique.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSArray},$ps:[{$nm:'arr',$mt:'prm',$t:{t:m$9f.JSArray},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryUnique']};};
function jQueryWhen($z0){
    if($z0===undefined){$z0=m$1.getEmpty();}
    /*Begin dynamic block*/
    return Promise((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'417:17-417:22','jquery.ceylon'):jQuery).when((function(){
        var $z1=[];
        var $z2=$z0.iterator();
        var $z3;
        while(($z3=$z2.next())!==m$1.getFinished()){
            $z1.push($z3.$_native);
        }
        return m$1.ArraySequence($z1,{Element$Sequential:'Element'});
    }())));
    /*End dynamic block*/
}
ex$.jQueryWhen=jQueryWhen;
jQueryWhen.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise},$ps:[{$nm:'deferreds',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Deferred}}},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jQueryWhen']};};
function jq($z4,$z5){
    if($z4===undefined){$z4=null;}
    if($z5===undefined){$z5=null;}
    /*Begin dynamic block*/
    var $z6=$z4;
    if(m$1.is$($z4,{t:m$1.String})) {
        var $z7=$z5;
        if(m$1.is$($z5,{t:'u',l:[{t:m$qm.Element},{t:JQuery}]})) {
            return JQuery((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'427:18-427:23','jquery.ceylon'):jQuery)($z6.valueOf(),$z7.$_native));
        }else if(m$1.is$($z5,{t:m$1.Null})) {
            return JQuery((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'430:18-430:23','jquery.ceylon'):jQuery)($z6.valueOf()));
        }
    }else if(m$1.is$($z4,{t:'u',l:[{t:JQuery},{t:m$9f.JSObject},{t:m$qm.Element}]})) {
        return JQuery((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'434:17-434:22','jquery.ceylon'):jQuery)($z6.$_native));
    }else if(m$1.is$($z4,{t:m$1.Null})) {
        return JQuery((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'437:17-437:22','jquery.ceylon'):jQuery)());
    }/*End dynamic block*/
}
ex$.jq=jq;
jq.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:JQuery},{t:m$9f.JSObject},{t:'u',l:[{t:m$1.Null},{t:m$qm.Element}]}]},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$qm.Element},{t:'u',l:[{t:m$1.Null},{t:JQuery}]}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jq']};};
function jqThis(){
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'444:16-444:21','jquery.ceylon'):jQuery)((typeof this==='undefined'||this===null?m$1.throwexc(m$1.Exception("Undefined or null reference: this"),'444:23-444:26','jquery.ceylon'):this)));
    /*End dynamic block*/
}
ex$.jqThis=jqThis;
jqThis.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jqThis']};};
function jqElems($z8){
    if($z8===undefined){$z8=m$1.getEmpty();}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'450:16-450:21','jquery.ceylon'):jQuery)((function(){
        var $z9=[];
        var $za=$z8.iterator();
        var $zb;
        while(($zb=$za.next())!==m$1.getFinished()){
            $z9.push($zb.$_native);
        }
        return m$1.ArraySequence($z9,{Element$Sequence:'Element'});
    }())));
    /*End dynamic block*/
}
ex$.jqElems=jqElems;
jqElems.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'elems',$mt:'prm',seq:1,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$qm.Element}}},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','jqElems']};};
function JQueryAbs(jQueryAbs$){
    $init$JQueryAbs();
    if(jQueryAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(jQueryAbs$);
    return jQueryAbs$;
}
JQueryAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs']};};
ex$.JQueryAbs=JQueryAbs;
function $init$JQueryAbs(){
    if(JQueryAbs.$$===undefined){
        m$1.initTypeProto(JQueryAbs,'com.openswimsoftware.ceylon.js.jquery::JQueryAbs',m$9f.JSObjectAbs);
        (function(jQueryAbs$){
            jQueryAbs$.add=function add($zc){
                var jQueryAbs$=this;
                var $zd=$zc;
                if(m$1.is$($zc,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.add($zd.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($zc,{t:JQuery})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.add($zd.$_native));
                    /*End dynamic block*/
                }
            };jQueryAbs$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'append',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','add']};};
            jQueryAbs$.addElements=function addElements($ze){
                var jQueryAbs$=this;
                if($ze===undefined){$ze=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.add((function(){
                    var $zf=[];
                    var $zg=$ze.iterator();
                    var $zh;
                    while(($zh=$zg.next())!==m$1.getFinished()){
                        $zf.push($zh.$_native);
                    }
                    return m$1.ArraySequence($zf,{Element$Sequence:'Element'});
                }())));
                /*End dynamic block*/
            };jQueryAbs$.addElements.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'elements',$mt:'prm',seq:1,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:m$qm.Element}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','addElements']};};
            jQueryAbs$.addSelector$defs$context=function($zi,$zj){return null;};
            jQueryAbs$.addSelector=function addSelector($zi,$zj){
                var jQueryAbs$=this;
                if($zj===undefined){$zj=jQueryAbs$.addSelector$defs$context($zi,$zj);}
                /*Begin dynamic block*/
                var $zk;
                if(($zk=$zj)!==null&&$zk!==undefined){
                    return JQuery(jQueryAbs$.$_native.add($zi.valueOf(),$zk));
                }else {
                    return JQuery(jQueryAbs$.$_native.add($zi.valueOf()));
                }/*End dynamic block*/
            };jQueryAbs$.addSelector.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$qm.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','addSelector']};};
            jQueryAbs$.addBack$defs$selector=function($zl){return null;};
            jQueryAbs$.addBack=function addBack($zl){
                var jQueryAbs$=this;
                if($zl===undefined){$zl=jQueryAbs$.addBack$defs$selector($zl);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.addBack($zl));
                /*End dynamic block*/
            };jQueryAbs$.addBack.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','addBack']};};
            jQueryAbs$.addClass=function addClass($zm){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.addClass($zm.valueOf()));
                /*End dynamic block*/
            };jQueryAbs$.addClass.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','addClass']};};
            jQueryAbs$.addClassCallback=function addClassCallback($zn){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.addClass($zn));
                /*End dynamic block*/
            };jQueryAbs$.addClassCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','addClassCallback']};};
            jQueryAbs$.after=function after($zo){
                var jQueryAbs$=this;
                if($zo===undefined){$zo=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery(m$9f.JSFunction(jQueryAbs$.$_native.after).$_apply(null,$zo));
                /*End dynamic block*/
            };jQueryAbs$.after.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','after']};};
            jQueryAbs$.afterElements=function afterElements($zp){
                var jQueryAbs$=this;
                if($zp===undefined){$zp=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery(m$9f.JSFunction(jQueryAbs$.$_native.after).$_apply(null,(function(){
                    var $zq=[];
                    var $zr=$zp.iterator();
                    var $zs;
                    while(($zs=$zr.next())!==m$1.getFinished()){
                        $zq.push($zs.$_native);
                    }
                    return m$1.ArraySequence($zq,{Element$Sequential:'Element'});
                }())));
                /*End dynamic block*/
            };jQueryAbs$.afterElements.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$qm.Element}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','afterElements']};};
            jQueryAbs$.afterJQuery=function afterJQuery($zt){
                var jQueryAbs$=this;
                if($zt===undefined){$zt=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery(m$9f.JSFunction(jQueryAbs$.$_native.after).$_apply(null,(function(){
                    var $zu=[];
                    var $zv=$zt.iterator();
                    var $zw;
                    while(($zw=$zv.next())!==m$1.getFinished()){
                        $zu.push($zw.$_native);
                    }
                    return m$1.ArraySequence($zu,{Element$Sequential:'Element'});
                }())));
                /*End dynamic block*/
            };jQueryAbs$.afterJQuery.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:JQuery}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','afterJQuery']};};
            jQueryAbs$.ajaxComplete=function ajaxComplete($zx){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.ajaxComplete($zx));
                /*End dynamic block*/
            };jQueryAbs$.ajaxComplete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}},{$t:{t:m$1.Anything}},{$t:{t:m$1.Anything}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','ajaxComplete']};};
            jQueryAbs$.ajaxError=function ajaxError($zy){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.ajaxError($zy));
                /*End dynamic block*/
            };jQueryAbs$.ajaxError.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}},{$t:{t:m$1.Anything}},{$t:{t:m$1.Anything}},{$t:{t:m$1.Anything}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','ajaxError']};};
            jQueryAbs$.ajaxSend=function ajaxSend($zz){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.ajaxSend($zz));
                /*End dynamic block*/
            };jQueryAbs$.ajaxSend.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}},{$t:{t:m$1.Anything}},{$t:{t:m$1.Anything}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','ajaxSend']};};
            jQueryAbs$.ajaxStart=function ajaxStart($100){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.ajaxStart($100));
                /*End dynamic block*/
            };jQueryAbs$.ajaxStart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','ajaxStart']};};
            jQueryAbs$.ajaxStop=function ajaxStop($101){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.ajaxStop($101));
                /*End dynamic block*/
            };jQueryAbs$.ajaxStop.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','ajaxStop']};};
            jQueryAbs$.ajaxSuccess=function ajaxSuccess($102){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.ajaxSuccess($102));
                /*End dynamic block*/
            };jQueryAbs$.ajaxSuccess.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}},{$t:{t:m$1.Anything}},{$t:{t:m$1.Anything}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','ajaxSuccess']};};
            jQueryAbs$.animate$defs$duration=function($103,$104,$105,$106){return null;};
            jQueryAbs$.animate$defs$easing=function($103,$104,$105,$106){return null;};
            jQueryAbs$.animate$defs$complete=function($103,$104,$105,$106){return null;};
            jQueryAbs$.animate=function animate($103,$104,$105,$106){
                var jQueryAbs$=this;
                if($104===undefined){$104=jQueryAbs$.animate$defs$duration($103,$104,$105,$106);}
                if($105===undefined){$105=jQueryAbs$.animate$defs$easing($103,$104,$105,$106);}
                if($106===undefined){$106=jQueryAbs$.animate$defs$complete($103,$104,$105,$106);}
                var $107=m$9f.createJSObject();
                var $109;for(var $108=$103.iterator();($109=$108.next())!==m$1.getFinished();){
                    var $10a=$109.key,$10b=$109.item;
                    /*Begin dynamic block*/
                    m$9f.objectDefineProperty($107,($10c=m$9f.createJSString($10a),m$1.is$($10c,{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]})?$10c:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'569:43-569:61','jquery.ceylon')),m$9f.DataDescriptor(true,false,true,true,$10b));
                    /*End dynamic block*/
                }
                var $10d=$104;
                if(m$1.is$($104,{t:'u',l:[{t:m$1.String},{t:m$1.Integer}]})) {
                    var $10e=$105;
                    if(m$1.is$($105,{t:m$1.String})) {
                        var $10f;
                        if(($10f=$106)!==null){
                            /*Begin dynamic block*/
                            return JQuery(jQueryAbs$.$_native.animate($107.$_native,$10d,$10e.valueOf(),$106));
                            /*End dynamic block*/
                        }else {
                            /*Begin dynamic block*/
                            return JQuery(jQueryAbs$.$_native.animate($107.$_native,$10d,$10e.valueOf()));
                            /*End dynamic block*/
                        }
                    }else if(m$1.is$($105,{t:m$1.Null})) {
                        var $10g;
                        if(($10g=$106)!==null){
                            /*Begin dynamic block*/
                            return JQuery(jQueryAbs$.$_native.animate($107.$_native,$10d,null,$106));
                            /*End dynamic block*/
                        }else {
                            /*Begin dynamic block*/
                            return JQuery(jQueryAbs$.$_native.animate($107.$_native,$10d));
                            /*End dynamic block*/
                        }
                    }
                }else if(m$1.is$($104,{t:m$1.Null})) {
                    var $10h=$105;
                    if(m$1.is$($105,{t:m$1.String})) {
                        var $10i;
                        if(($10i=$106)!==null){
                            /*Begin dynamic block*/
                            return JQuery(jQueryAbs$.$_native.animate($107.$_native,null,$10h.valueOf(),$106));
                            /*End dynamic block*/
                        }else {
                            /*Begin dynamic block*/
                            return JQuery(jQueryAbs$.$_native.animate($107.$_native,null,$10h.valueOf()));
                            /*End dynamic block*/
                        }
                    }else if(m$1.is$($105,{t:m$1.Null})) {
                        var $10j;
                        if(($10j=$106)!==null){
                            /*Begin dynamic block*/
                            return JQuery(jQueryAbs$.$_native.animate($107.$_native,null,null,$106));
                            /*End dynamic block*/
                        }else {
                            /*Begin dynamic block*/
                            return JQuery(jQueryAbs$.$_native.animate($107.$_native));
                            /*End dynamic block*/
                        }
                    }
                }
            };jQueryAbs$.animate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}}}},$an:function(){return[];}},{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','animate']};};
            jQueryAbs$.animateOptions=function animateOptions($10k,$10l){
                var jQueryAbs$=this;
                var $10m=m$9f.createJSObject();
                var $10o;for(var $10n=$10k.iterator();($10o=$10n.next())!==m$1.getFinished();){
                    var $10p=$10o.key,$10q=$10o.item;
                    /*Begin dynamic block*/
                    m$9f.objectDefineProperty($10m,($10r=m$9f.createJSString($10p),m$1.is$($10r,{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]})?$10r:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'629:43-629:61','jquery.ceylon')),m$9f.DataDescriptor(true,false,true,true,$10q));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.animate($10m.$_native,$10l.toNative()));
                /*End dynamic block*/
            };jQueryAbs$.animateOptions.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}}}},$an:function(){return[];}},{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','animateOptions']};};
            jQueryAbs$.append=function append($10s){
                var jQueryAbs$=this;
                if($10s===undefined){$10s=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery(m$9f.JSFunction(jQueryAbs$.$_native.append).$_apply(null,(function(){
                    var $10t=[];
                    var $10u=$10s.iterator();
                    var $10v;
                    while(($10v=$10u.next())!==m$1.getFinished()){
                        $10t.push($10v.$_native);
                    }
                    return m$1.ArraySequence($10t,{Element$Sequential:'Element'});
                }())));
                /*End dynamic block*/
            };jQueryAbs$.append.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:'u',l:[{t:m$qm.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','append']};};
            jQueryAbs$.appendHTML=function appendHTML($10w){
                var jQueryAbs$=this;
                if($10w===undefined){$10w=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.append($10w));
                /*End dynamic block*/
            };jQueryAbs$.appendHTML.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','appendHTML']};};
            jQueryAbs$.appendCallback=function appendCallback($10x){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.append($10x));
                /*End dynamic block*/
            };jQueryAbs$.appendCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.String}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','appendCallback']};};
            jQueryAbs$.appendTo=function appendTo($10y){
                var jQueryAbs$=this;
                var $10z=$10y;
                if(m$1.is$($10y,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.appendTo($10z.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($10y,{t:'u',l:[{t:m$qm.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.appendTo($10z.$_native));
                    /*End dynamic block*/
                }
            };jQueryAbs$.appendTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$qm.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','appendTo']};};
            jQueryAbs$.getAttr=function getAttr($110){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(jQueryAbs$.$_native.attr($110.valueOf()));
                /*End dynamic block*/
            };jQueryAbs$.getAttr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getAttr']};};
            jQueryAbs$.setAttr=function setAttr($111,$112){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.attr($111.valueOf(),$112));
                /*End dynamic block*/
            };jQueryAbs$.setAttr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setAttr']};};
            jQueryAbs$.setAttrEntries=function setAttrEntries($113){
                var jQueryAbs$=this;
                if($113===undefined){$113=m$1.getEmpty();}
                var $114=m$9f.createJSObject();
                var $116;for(var $115=$113.iterator();($116=$115.next())!==m$1.getFinished();){
                    var $117=$116.key,$118=$116.item;
                    /*Begin dynamic block*/
                    m$9f.objectDefineProperty($114,($119=m$9f.createJSString($117),m$1.is$($119,{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]})?$119:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'685:40-685:58','jquery.ceylon')),m$9f.DataDescriptor(true,false,true,true,$118));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.attr($114));
                /*End dynamic block*/
            };jQueryAbs$.setAttrEntries.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'entries',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:'u',l:[{t:m$1.String},{t:m$1.Integer}]},Key$Entry:{t:m$1.String}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setAttrEntries']};};
            jQueryAbs$.setAttrCallback=function setAttrCallback($11a,$11b){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.attr((typeof entriesNative==='undefined'||entriesNative===null?m$1.throwexc(m$1.Exception("Undefined or null reference: entriesNative"),'695:29-695:41','jquery.ceylon'):entriesNative),$11b));
                /*End dynamic block*/
            };jQueryAbs$.setAttrCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.String}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setAttrCallback']};};
            jQueryAbs$.before=function before($11c){
                var jQueryAbs$=this;
                if($11c===undefined){$11c=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery(m$9f.JSFunction(jQueryAbs$.$_native.before).$_apply(null,(function(){
                    var $11d=[];
                    var $11e=$11c.iterator();
                    var $11f;
                    while(($11f=$11e.next())!==m$1.getFinished()){
                        $11d.push($11f.$_native);
                    }
                    return m$1.ArraySequence($11d,{Element$Sequential:'Element'});
                }())));
                /*End dynamic block*/
            };jQueryAbs$.before.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:'u',l:[{t:m$qm.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','before']};};
            jQueryAbs$.beforeHTML=function beforeHTML($11g){
                var jQueryAbs$=this;
                if($11g===undefined){$11g=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.before($11g));
                /*End dynamic block*/
            };jQueryAbs$.beforeHTML.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','beforeHTML']};};
            jQueryAbs$.beforeCallback=function beforeCallback($11h){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.before($11h));
                /*End dynamic block*/
            };jQueryAbs$.beforeCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','beforeCallback']};};
            jQueryAbs$.$_bind$defs$eventData=function($11i,$11j,$11k){return null;};
            jQueryAbs$.$_bind$defs$preventBubble=function($11i,$11j,$11k){return true;};
            jQueryAbs$.$_bind=function $_bind($11i,$11j,$11k){
                var jQueryAbs$=this;
                if($11j===undefined){$11j=jQueryAbs$.$_bind$defs$eventData($11i,$11j,$11k);}
                if($11k===undefined){$11k=jQueryAbs$.$_bind$defs$preventBubble($11i,$11j,$11k);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.bind($11i.valueOf(),$11j,$11k));
                /*End dynamic block*/
            };jQueryAbs$.$_bind.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'preventBubble',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','bind']};};
            jQueryAbs$.bindCallback=function bindCallback($11l,$11m,$11n){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.bind($11l.valueOf(),$11m,$11n));
                /*End dynamic block*/
            };jQueryAbs$.bindCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','bindCallback']};};
            jQueryAbs$.bindEvents=function bindEvents($11o){
                var jQueryAbs$=this;
                if($11o===undefined){$11o=m$1.getEmpty();}
                var $11p=m$9f.createJSObject();
                var $11r;for(var $11q=$11o.iterator();($11r=$11q.next())!==m$1.getFinished();){
                    var $11s=$11r.key,$11t=$11r.item;
                    /*Begin dynamic block*/
                    m$9f.objectDefineProperty($11p,($11u=m$9f.createJSString($11s),m$1.is$($11u,{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]})?$11u:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'733:39-733:57','jquery.ceylon')),m$9f.DataDescriptor(true,false,true,true,$11t));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.bind($11p));
                /*End dynamic block*/
            };jQueryAbs$.bindEvents.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}},Key$Entry:{t:m$1.String}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','bindEvents']};};
            jQueryAbs$.blur$defs$eventData=function($11v,$11w){return null;};
            jQueryAbs$.blur$defs$handler=function($11v,$11w){return null;};
            jQueryAbs$.blur=function blur($11v,$11w){
                var jQueryAbs$=this;
                if($11v===undefined){$11v=jQueryAbs$.blur$defs$eventData($11v,$11w);}
                if($11w===undefined){$11w=jQueryAbs$.blur$defs$handler($11v,$11w);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.blur($11v,$11w));
                /*End dynamic block*/
            };jQueryAbs$.blur.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','blur']};};
            jQueryAbs$.change$defs$eventData=function($11x,$11y){return null;};
            jQueryAbs$.change$defs$handler=function($11x,$11y){return null;};
            jQueryAbs$.change=function change($11x,$11y){
                var jQueryAbs$=this;
                if($11x===undefined){$11x=jQueryAbs$.change$defs$eventData($11x,$11y);}
                if($11y===undefined){$11y=jQueryAbs$.change$defs$handler($11x,$11y);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.blur($11x,$11y));
                /*End dynamic block*/
            };jQueryAbs$.change.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','change']};};
            jQueryAbs$.children$defs$selector=function($11z){return null;};
            jQueryAbs$.children=function children($11z){
                var jQueryAbs$=this;
                if($11z===undefined){$11z=jQueryAbs$.children$defs$selector($11z);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.children($11z));
                /*End dynamic block*/
            };jQueryAbs$.children.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','children']};};
            jQueryAbs$.clearQueue$defs$queueName=function($120){return "fx";};
            jQueryAbs$.clearQueue=function clearQueue($120){
                var jQueryAbs$=this;
                if($120===undefined){$120=jQueryAbs$.clearQueue$defs$queueName($120);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.clearQueue($120.valueOf()));
                /*End dynamic block*/
            };jQueryAbs$.clearQueue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','clearQueue']};};
            jQueryAbs$.click$defs$eventData=function($121,$122){return null;};
            jQueryAbs$.click$defs$handler=function($121,$122){return null;};
            jQueryAbs$.click=function click($121,$122){
                var jQueryAbs$=this;
                if($121===undefined){$121=jQueryAbs$.click$defs$eventData($121,$122);}
                if($122===undefined){$122=jQueryAbs$.click$defs$handler($121,$122);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.click($121,$122));
                /*End dynamic block*/
            };jQueryAbs$.click.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','click']};};
            jQueryAbs$.clone$defs$withDataAndEvents=function($123,$124){return false;};
            jQueryAbs$.clone$defs$deepWithDataAndEvents=function($123,$124){return null;};
            jQueryAbs$.clone=function clone($123,$124){
                var jQueryAbs$=this;
                if($123===undefined){$123=jQueryAbs$.clone$defs$withDataAndEvents($123,$124);}
                if($124===undefined){$124=jQueryAbs$.clone$defs$deepWithDataAndEvents($123,$124);}
                var $125;
                if(($125=$124)!==null){
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.clone($123,$125));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.clone($123));
                    /*End dynamic block*/
                }
            };jQueryAbs$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'withDataAndEvents',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[];}},{$nm:'deepWithDataAndEvents',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','clone']};};
            jQueryAbs$.closest$defs$context=function($126,$127){return null;};
            jQueryAbs$.closest=function closest($126,$127){
                var jQueryAbs$=this;
                if($127===undefined){$127=jQueryAbs$.closest$defs$context($126,$127);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.closest($126.valueOf(),$127));
                /*End dynamic block*/
            };jQueryAbs$.closest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$qm.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','closest']};};
            jQueryAbs$.closestElement=function closestElement($128){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.closest($128.$_native));
                /*End dynamic block*/
            };jQueryAbs$.closestElement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'elem',$mt:'prm',$t:{t:m$qm.Element},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','closestElement']};};
            jQueryAbs$.closestjQuery=function closestjQuery($129){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.closest($129.$_native));
                /*End dynamic block*/
            };jQueryAbs$.closestjQuery.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'jq',$mt:'prm',$t:{t:JQuery},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','closestjQuery']};};
            jQueryAbs$.contents=function contents(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.contents());
                /*End dynamic block*/
            };jQueryAbs$.contents.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','contents']};};
            jQueryAbs$.getCss=function getCss($12a){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(jQueryAbs$.$_native.css($12a));
                /*End dynamic block*/
            };jQueryAbs$.getCss.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[{$nm:'properties',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.String}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getCss']};};
            jQueryAbs$.setCss=function setCss($12b,$12c){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.css($12b.valueOf(),$12c));
                /*End dynamic block*/
            };jQueryAbs$.setCss.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$1.Number,a:{Other$Number:{t:m$1.Integer}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setCss']};};
            jQueryAbs$.setCssCallback=function setCssCallback($12d,$12e){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.css($12d.valueOf(),$12e));
                /*End dynamic block*/
            };jQueryAbs$.setCssCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setCssCallback']};};
            jQueryAbs$.setCssJson=function setCssJson($12f,$12g){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.css($12f.valueOf(),$12g.$_native));
                /*End dynamic block*/
            };jQueryAbs$.setCssJson.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:m$hr.JSJSON},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setCssJson']};};
            jQueryAbs$.setData=function setData($12h,$12i){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.data($12h.valueOf(),$12i.$_native));
                /*End dynamic block*/
            };jQueryAbs$.setData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'key',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setData']};};
            jQueryAbs$.setDataEntries=function setDataEntries($12j){
                var jQueryAbs$=this;
                if($12j===undefined){$12j=m$1.getEmpty();}
                var $12k=m$9f.createJSObject();
                var $12m;for(var $12l=$12j.iterator();($12m=$12l.next())!==m$1.getFinished();){
                    var $12n=$12m.key,$12o=$12m.item;
                    /*Begin dynamic block*/
                    m$9f.objectDefineProperty($12k,($12p=m$9f.createJSString($12n),m$1.is$($12p,{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]})?$12p:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'841:37-841:55','jquery.ceylon')),m$9f.DataDescriptor(true,false,true,true,$12o.$_native));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.data($12k));
                /*End dynamic block*/
            };jQueryAbs$.setDataEntries.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.JSObject},Key$Entry:{t:m$1.String}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setDataEntries']};};
            jQueryAbs$.getData$defs$key=function($12q){return null;};
            jQueryAbs$.getData=function getData($12q){
                var jQueryAbs$=this;
                if($12q===undefined){$12q=jQueryAbs$.getData$defs$key($12q);}
                var $12r;
                if(($12r=$12q)!==null){
                    /*Begin dynamic block*/
                    return m$9f.JSObject(jQueryAbs$.$_native.data($12q));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return m$9f.JSObject(jQueryAbs$.$_native.data());
                    /*End dynamic block*/
                }
            };jQueryAbs$.getData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSObject},$ps:[{$nm:'key',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getData']};};
            jQueryAbs$.dblclick$defs$eventData=function($12s,$12t){return null;};
            jQueryAbs$.dblclick$defs$handler=function($12s,$12t){return null;};
            jQueryAbs$.dblclick=function dblclick($12s,$12t){
                var jQueryAbs$=this;
                if($12s===undefined){$12s=jQueryAbs$.dblclick$defs$eventData($12s,$12t);}
                if($12t===undefined){$12t=jQueryAbs$.dblclick$defs$handler($12s,$12t);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.blur($12s,$12t));
                /*End dynamic block*/
            };jQueryAbs$.dblclick.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','dblclick']};};
            jQueryAbs$.delay$defs$queueName=function($12u,$12v){return "fx";};
            jQueryAbs$.delay=function delay($12u,$12v){
                var jQueryAbs$=this;
                if($12v===undefined){$12v=jQueryAbs$.delay$defs$queueName($12u,$12v);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.delay($12u,$12v.valueOf()));
                /*End dynamic block*/
            };jQueryAbs$.delay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','delay']};};
            jQueryAbs$.delegate$defs$eventData=function($12w,$12x,$12y,$12z){return null;};
            jQueryAbs$.delegate$defs$handler=function($12w,$12x,$12y,$12z){return null;};
            jQueryAbs$.delegate=function delegate($12w,$12x,$12y,$12z){
                var jQueryAbs$=this;
                if($12y===undefined){$12y=jQueryAbs$.delegate$defs$eventData($12w,$12x,$12y,$12z);}
                if($12z===undefined){$12z=jQueryAbs$.delegate$defs$handler($12w,$12x,$12y,$12z);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.delegate($12w.valueOf(),$12x.valueOf(),$12y,$12z));
                /*End dynamic block*/
            };jQueryAbs$.delegate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'eventType',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','delegate']};};
            jQueryAbs$.delegateEvents=function delegateEvents($130,$131){
                var jQueryAbs$=this;
                if($131===undefined){$131=m$1.getEmpty();}
                var $132=m$9f.createJSObject();
                var $134;for(var $133=$131.iterator();($134=$133.next())!==m$1.getFinished();){
                    var $135=$134.key,$136=$134.item;
                    /*Begin dynamic block*/
                    m$9f.objectDefineProperty($132,($137=m$9f.createJSString($135),m$1.is$($137,{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]})?$137:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'883:39-883:57','jquery.ceylon')),m$9f.DataDescriptor(true,false,true,true,$136));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.delegate($130.valueOf(),$132));
                /*End dynamic block*/
            };jQueryAbs$.delegateEvents.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'events',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}},Key$Entry:{t:m$1.String}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','delegateEvents']};};
            jQueryAbs$.dequeue$defs$queueName=function($138){return null;};
            jQueryAbs$.dequeue=function dequeue($138){
                var jQueryAbs$=this;
                if($138===undefined){$138=jQueryAbs$.dequeue$defs$queueName($138);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.dequeue($138));
                /*End dynamic block*/
            };jQueryAbs$.dequeue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','dequeue']};};
            jQueryAbs$.detach$defs$selector=function($139){return null;};
            jQueryAbs$.detach=function detach($139){
                var jQueryAbs$=this;
                if($139===undefined){$139=jQueryAbs$.detach$defs$selector($139);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.detach($139));
                /*End dynamic block*/
            };jQueryAbs$.detach.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','detach']};};
            jQueryAbs$.die$defs$eventData=function($13a,$13b){return null;};
            jQueryAbs$.die$defs$handler=function($13a,$13b){return null;};
            jQueryAbs$.die=function die($13a,$13b){
                var jQueryAbs$=this;
                if($13a===undefined){$13a=jQueryAbs$.die$defs$eventData($13a,$13b);}
                if($13b===undefined){$13b=jQueryAbs$.die$defs$handler($13a,$13b);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.die($13a,$13b));
                /*End dynamic block*/
            };jQueryAbs$.die.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','die']};};
            jQueryAbs$.each=function each($13c){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.each($13c));
                /*End dynamic block*/
            };jQueryAbs$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.Anything}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','each']};};
            jQueryAbs$.empty=function empty(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.empty());
                /*End dynamic block*/
            };jQueryAbs$.empty.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','empty']};};
            jQueryAbs$.end=function end(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.end());
                /*End dynamic block*/
            };jQueryAbs$.end.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','end']};};
            jQueryAbs$.eq=function eq($13d){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.eq($13d));
                /*End dynamic block*/
            };jQueryAbs$.eq.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'index',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','eq']};};
            jQueryAbs$.error$defs$eventData=function($13e,$13f){return null;};
            jQueryAbs$.error$defs$handler=function($13e,$13f){return null;};
            jQueryAbs$.error=function error($13e,$13f){
                var jQueryAbs$=this;
                if($13e===undefined){$13e=jQueryAbs$.error$defs$eventData($13e,$13f);}
                if($13f===undefined){$13f=jQueryAbs$.error$defs$handler($13e,$13f);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.error($13e,$13f));
                /*End dynamic block*/
            };jQueryAbs$.error.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','error']};};
            jQueryAbs$.fadeIn$defs$duration=function($13g,$13h,$13i){return null;};
            jQueryAbs$.fadeIn$defs$easing=function($13g,$13h,$13i){return null;};
            jQueryAbs$.fadeIn$defs$complete=function($13g,$13h,$13i){return null;};
            jQueryAbs$.fadeIn=function fadeIn($13g,$13h,$13i){
                var jQueryAbs$=this;
                if($13g===undefined){$13g=jQueryAbs$.fadeIn$defs$duration($13g,$13h,$13i);}
                if($13h===undefined){$13h=jQueryAbs$.fadeIn$defs$easing($13g,$13h,$13i);}
                if($13i===undefined){$13i=jQueryAbs$.fadeIn$defs$complete($13g,$13h,$13i);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.fadeIn($13g,$13h,$13i));
                /*End dynamic block*/
            };jQueryAbs$.fadeIn.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','fadeIn']};};
            jQueryAbs$.fadeInOptions=function fadeInOptions($13j){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.fadeOut($13j.toNative()));
                /*End dynamic block*/
            };jQueryAbs$.fadeInOptions.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','fadeInOptions']};};
            jQueryAbs$.fadeOut$defs$duration=function($13k,$13l,$13m){return null;};
            jQueryAbs$.fadeOut$defs$easing=function($13k,$13l,$13m){return null;};
            jQueryAbs$.fadeOut$defs$complete=function($13k,$13l,$13m){return null;};
            jQueryAbs$.fadeOut=function fadeOut($13k,$13l,$13m){
                var jQueryAbs$=this;
                if($13k===undefined){$13k=jQueryAbs$.fadeOut$defs$duration($13k,$13l,$13m);}
                if($13l===undefined){$13l=jQueryAbs$.fadeOut$defs$easing($13k,$13l,$13m);}
                if($13m===undefined){$13m=jQueryAbs$.fadeOut$defs$complete($13k,$13l,$13m);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.fadeOut($13k,$13l,$13m));
                /*End dynamic block*/
            };jQueryAbs$.fadeOut.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','fadeOut']};};
            jQueryAbs$.fadeOutOptions=function fadeOutOptions($13n){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.fadeOut($13n.toNative()));
                /*End dynamic block*/
            };jQueryAbs$.fadeOutOptions.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','fadeOutOptions']};};
            jQueryAbs$.fadeTo$defs$easing=function($13o,$13p,$13q,$13r){return null;};
            jQueryAbs$.fadeTo$defs$complete=function($13o,$13p,$13q,$13r){return null;};
            jQueryAbs$.fadeTo=function fadeTo($13o,$13p,$13q,$13r){
                var jQueryAbs$=this;
                if($13q===undefined){$13q=jQueryAbs$.fadeTo$defs$easing($13o,$13p,$13q,$13r);}
                if($13r===undefined){$13r=jQueryAbs$.fadeTo$defs$complete($13o,$13p,$13q,$13r);}
                /*Begin dynamic block*/
                jQueryAbs$.$_native.fadeTo($13o,$13p.valueOf(),$13q,$13r);
                /*End dynamic block*/
            };jQueryAbs$.fadeTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'duration',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$1.Integer}]},$an:function(){return[];}},{$nm:'opacity',$mt:'prm',$t:{t:m$1.Float},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','fadeTo']};};
            jQueryAbs$.fadeToggle$defs$duration=function($13s,$13t,$13u){return null;};
            jQueryAbs$.fadeToggle$defs$easing=function($13s,$13t,$13u){return null;};
            jQueryAbs$.fadeToggle$defs$complete=function($13s,$13t,$13u){return null;};
            jQueryAbs$.fadeToggle=function fadeToggle($13s,$13t,$13u){
                var jQueryAbs$=this;
                if($13s===undefined){$13s=jQueryAbs$.fadeToggle$defs$duration($13s,$13t,$13u);}
                if($13t===undefined){$13t=jQueryAbs$.fadeToggle$defs$easing($13s,$13t,$13u);}
                if($13u===undefined){$13u=jQueryAbs$.fadeToggle$defs$complete($13s,$13t,$13u);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.fadeOut($13s,$13t,$13u));
                /*End dynamic block*/
            };jQueryAbs$.fadeToggle.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','fadeToggle']};};
            jQueryAbs$.fadeToggleOptions=function fadeToggleOptions($13v){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.fadeOut($13v.toNative()));
                /*End dynamic block*/
            };jQueryAbs$.fadeToggleOptions.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','fadeToggleOptions']};};
            jQueryAbs$.filter=function filter($13w){
                var jQueryAbs$=this;
                var $13x=$13w;
                if(m$1.is$($13w,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.filter($13x.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($13w,{t:'u',l:[{t:m$qm.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.filter($13x.$_native));
                    /*End dynamic block*/
                }
            };jQueryAbs$.filter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$qm.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','filter']};};
            jQueryAbs$.filterCallback=function filterCallback($13y){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.filter($13y));
                /*End dynamic block*/
            };jQueryAbs$.filterCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','filterCallback']};};
            jQueryAbs$.find=function find($13z){
                var jQueryAbs$=this;
                var $140=$13z;
                if(m$1.is$($13z,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.find($140.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($13z,{t:'u',l:[{t:m$qm.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.find($140.$_native));
                    /*End dynamic block*/
                }
            };jQueryAbs$.find.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$qm.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','find']};};
            jQueryAbs$.finish=function finish($141){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.finish((typeof ueue==='undefined'||ueue===null?m$1.throwexc(m$1.Exception("Undefined or null reference: ueue"),'1017:31-1017:34','jquery.ceylon'):ueue)));
                /*End dynamic block*/
            };jQueryAbs$.finish.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'queue',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','finish']};};
            jQueryAbs$.first=function first(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.first());
                /*End dynamic block*/
            };jQueryAbs$.first.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','first']};};
            jQueryAbs$.focus$defs$eventData=function($142,$143){return null;};
            jQueryAbs$.focus$defs$handler=function($142,$143){return null;};
            jQueryAbs$.focus=function focus($142,$143){
                var jQueryAbs$=this;
                if($142===undefined){$142=jQueryAbs$.focus$defs$eventData($142,$143);}
                if($143===undefined){$143=jQueryAbs$.focus$defs$handler($142,$143);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.focus($142,$143));
                /*End dynamic block*/
            };jQueryAbs$.focus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','focus']};};
            jQueryAbs$.focusin$defs$eventData=function($144,$145){return null;};
            jQueryAbs$.focusin$defs$handler=function($144,$145){return null;};
            jQueryAbs$.focusin=function focusin($144,$145){
                var jQueryAbs$=this;
                if($144===undefined){$144=jQueryAbs$.focusin$defs$eventData($144,$145);}
                if($145===undefined){$145=jQueryAbs$.focusin$defs$handler($144,$145);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.focusin($144,$145));
                /*End dynamic block*/
            };jQueryAbs$.focusin.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','focusin']};};
            jQueryAbs$.focusout$defs$eventData=function($146,$147){return null;};
            jQueryAbs$.focusout$defs$handler=function($146,$147){return null;};
            jQueryAbs$.focusout=function focusout($146,$147){
                var jQueryAbs$=this;
                if($146===undefined){$146=jQueryAbs$.focusout$defs$eventData($146,$147);}
                if($147===undefined){$147=jQueryAbs$.focusout$defs$handler($146,$147);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.focusout($146,$147));
                /*End dynamic block*/
            };jQueryAbs$.focusout.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','focusout']};};
            jQueryAbs$.$_get$defs$index=function($148){return null;};
            jQueryAbs$.$_get=function $_get($148){
                var jQueryAbs$=this;
                if($148===undefined){$148=jQueryAbs$.$_get$defs$index($148);}
                /*Begin dynamic block*/
                return m$qm.Element(jQueryAbs$.$_native.get($148));
                /*End dynamic block*/
            };jQueryAbs$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$qm.Element},$ps:[{$nm:'index',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','get']};};
            jQueryAbs$.has=function has($149){
                var jQueryAbs$=this;
                var $14a=$149;
                if(m$1.is$($149,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.has($14a.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($149,{t:m$qm.Element})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.has($14a.$_native));
                    /*End dynamic block*/
                }
            };jQueryAbs$.has.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$qm.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','has']};};
            jQueryAbs$.hasClass=function hasClass($14b){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                if(jQueryAbs$.$_native.hasClass($14b.valueOf())){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jQueryAbs$.hasClass.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'className',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','hasClass']};};
            jQueryAbs$.getHeight=function getHeight(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(jQueryAbs$.$_native.height());
                /*End dynamic block*/
            };jQueryAbs$.getHeight.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getHeight']};};
            jQueryAbs$.setHeight=function setHeight($14c){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.height($14c));
                /*End dynamic block*/
            };jQueryAbs$.setHeight.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setHeight']};};
            jQueryAbs$.setHeightCallback=function setHeightCallback($14d){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.height($14d));
                /*End dynamic block*/
            };jQueryAbs$.setHeightCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.Integer}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setHeightCallback']};};
            jQueryAbs$.hide$defs$duration=function($14e,$14f,$14g){return null;};
            jQueryAbs$.hide$defs$easing=function($14e,$14f,$14g){return null;};
            jQueryAbs$.hide$defs$complete=function($14e,$14f,$14g){return null;};
            jQueryAbs$.hide=function hide($14e,$14f,$14g){
                var jQueryAbs$=this;
                if($14e===undefined){$14e=jQueryAbs$.hide$defs$duration($14e,$14f,$14g);}
                if($14f===undefined){$14f=jQueryAbs$.hide$defs$easing($14e,$14f,$14g);}
                if($14g===undefined){$14g=jQueryAbs$.hide$defs$complete($14e,$14f,$14g);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.hide($14e,$14f,$14g));
                /*End dynamic block*/
            };jQueryAbs$.hide.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','hide']};};
            jQueryAbs$.hideOptions=function hideOptions($14h){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.hide($14h.toNative()));
                /*End dynamic block*/
            };jQueryAbs$.hideOptions.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','hideOptions']};};
            jQueryAbs$.hover=function hover($14i,$14j){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.hover($14i,$14j));
                /*End dynamic block*/
            };jQueryAbs$.hover.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'handlerIn',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:JQueryEvent}}]}}},$an:function(){return[];}},{$nm:'handlerOut',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:JQueryEvent}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','hover']};};
            jQueryAbs$.hoverSingle=function hoverSingle($14k){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.hover($14k));
                /*End dynamic block*/
            };jQueryAbs$.hoverSingle.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'handlerInOut',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:JQueryEvent}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','hoverSingle']};};
            jQueryAbs$.getHtml=function getHtml(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(jQueryAbs$.$_native.html());
                /*End dynamic block*/
            };jQueryAbs$.getHtml.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getHtml']};};
            jQueryAbs$.setHtml=function setHtml($14l){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(jQueryAbs$.$_native.html($14l.valueOf()));
                /*End dynamic block*/
            };jQueryAbs$.setHtml.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[{$nm:'html',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setHtml']};};
            jQueryAbs$.setHtmlCallback=function setHtmlCallback($14m){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(jQueryAbs$.$_native.html($14m));
                /*End dynamic block*/
            };jQueryAbs$.setHtmlCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.String},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.String}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setHtmlCallback']};};
            jQueryAbs$.index=function index($14n){
                var jQueryAbs$=this;
                var $14o=$14n;
                if(m$1.is$($14n,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return m$9f.JSNumber(jQueryAbs$.$_native.index($14o.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($14n,{t:'u',l:[{t:m$qm.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return m$9f.JSNumber(jQueryAbs$.$_native.index($14o.$_native));
                    /*End dynamic block*/
                }
            };jQueryAbs$.index.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[{$nm:'selector',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$qm.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','index']};};
            jQueryAbs$.innerHeight=function innerHeight(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(jQueryAbs$.$_native.innerHeight());
                /*End dynamic block*/
            };jQueryAbs$.innerHeight.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','innerHeight']};};
            jQueryAbs$.innerWidth=function innerWidth(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(jQueryAbs$.$_native.innerWidth());
                /*End dynamic block*/
            };jQueryAbs$.innerWidth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','innerWidth']};};
            jQueryAbs$.insertAfter=function insertAfter($14p){
                var jQueryAbs$=this;
                var $14q=$14p;
                if(m$1.is$($14p,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.insertAfter($14q.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($14p,{t:'u',l:[{t:m$qm.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.insertAfter($14q.$_native));
                    /*End dynamic block*/
                }
            };jQueryAbs$.insertAfter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$qm.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','insertAfter']};};
            jQueryAbs$.insertBefore=function insertBefore($14r){
                var jQueryAbs$=this;
                var $14s=$14r;
                if(m$1.is$($14r,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.insertBefore($14s.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($14r,{t:'u',l:[{t:m$qm.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.insertBefore($14s.$_native));
                    /*End dynamic block*/
                }
            };jQueryAbs$.insertBefore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$qm.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','insertBefore']};};
            jQueryAbs$.isSelector=function isSelector($14t){
                var jQueryAbs$=this;
                var $14u=$14t;
                if(m$1.is$($14t,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    if(jQueryAbs$.$_native.is($14u.valueOf())){
                        return true;
                    }else {
                        return false;
                    }/*End dynamic block*/
                }else if(m$1.is$($14t,{t:'u',l:[{t:m$qm.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    if(jQueryAbs$.$_native.is($14u.$_native)){
                        return true;
                    }else {
                        return false;
                    }/*End dynamic block*/
                }
            };jQueryAbs$.isSelector.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'selector',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$qm.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','isSelector']};};
            jQueryAbs$.isCallback=function isCallback($14v){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                if(jQueryAbs$.$_native.is($14v)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jQueryAbs$.isCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','isCallback']};};
            jQueryAbs$.jquery=function jquery(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(jQueryAbs$.$_native.jquery);
                /*End dynamic block*/
            };jQueryAbs$.jquery.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','jquery']};};
            jQueryAbs$.keydown$defs$eventData=function($14w,$14x){return null;};
            jQueryAbs$.keydown$defs$handler=function($14w,$14x){return null;};
            jQueryAbs$.keydown=function keydown($14w,$14x){
                var jQueryAbs$=this;
                if($14w===undefined){$14w=jQueryAbs$.keydown$defs$eventData($14w,$14x);}
                if($14x===undefined){$14x=jQueryAbs$.keydown$defs$handler($14w,$14x);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.keydown($14w,$14x));
                /*End dynamic block*/
            };jQueryAbs$.keydown.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','keydown']};};
            jQueryAbs$.keypress$defs$eventData=function($14y,$14z){return null;};
            jQueryAbs$.keypress$defs$handler=function($14y,$14z){return null;};
            jQueryAbs$.keypress=function keypress($14y,$14z){
                var jQueryAbs$=this;
                if($14y===undefined){$14y=jQueryAbs$.keypress$defs$eventData($14y,$14z);}
                if($14z===undefined){$14z=jQueryAbs$.keypress$defs$handler($14y,$14z);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.keypress($14y,$14z));
                /*End dynamic block*/
            };jQueryAbs$.keypress.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','keypress']};};
            jQueryAbs$.keyup$defs$eventData=function($150,$151){return null;};
            jQueryAbs$.keyup$defs$handler=function($150,$151){return null;};
            jQueryAbs$.keyup=function keyup($150,$151){
                var jQueryAbs$=this;
                if($150===undefined){$150=jQueryAbs$.keyup$defs$eventData($150,$151);}
                if($151===undefined){$151=jQueryAbs$.keyup$defs$handler($150,$151);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.keyup($150,$151));
                /*End dynamic block*/
            };jQueryAbs$.keyup.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','keyup']};};
            jQueryAbs$.last=function last(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.last());
                /*End dynamic block*/
            };jQueryAbs$.last.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','last']};};
            jQueryAbs$.resizeTrigger=function resizeTrigger(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                jQueryAbs$.$_native.resize();
                /*End dynamic block*/
            };jQueryAbs$.resizeTrigger.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','resizeTrigger']};};
            jQueryAbs$.length=function length(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(jQueryAbs$.$_native.length);
                /*End dynamic block*/
            };jQueryAbs$.length.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','length']};};
            jQueryAbs$.load=function load($152,$153,$154){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.load($152.valueOf(),$153,$154));
                /*End dynamic block*/
            };jQueryAbs$.load.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'url',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.String}},{$t:{t:m$1.String}},{$t:{t:m$1.Anything}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','load']};};
            jQueryAbs$.map=function map($155){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.map($155));
                /*End dynamic block*/
            };jQueryAbs$.map.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$qm.Element}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','map']};};
            jQueryAbs$.mousedown$defs$eventData=function($156,$157){return null;};
            jQueryAbs$.mousedown$defs$handler=function($156,$157){return null;};
            jQueryAbs$.mousedown=function mousedown($156,$157){
                var jQueryAbs$=this;
                if($156===undefined){$156=jQueryAbs$.mousedown$defs$eventData($156,$157);}
                if($157===undefined){$157=jQueryAbs$.mousedown$defs$handler($156,$157);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.mousedown($156,$157));
                /*End dynamic block*/
            };jQueryAbs$.mousedown.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','mousedown']};};
            jQueryAbs$.mouseenter$defs$eventData=function($158,$159){return null;};
            jQueryAbs$.mouseenter$defs$handler=function($158,$159){return null;};
            jQueryAbs$.mouseenter=function mouseenter($158,$159){
                var jQueryAbs$=this;
                if($158===undefined){$158=jQueryAbs$.mouseenter$defs$eventData($158,$159);}
                if($159===undefined){$159=jQueryAbs$.mouseenter$defs$handler($158,$159);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.mouseenter($158,$159));
                /*End dynamic block*/
            };jQueryAbs$.mouseenter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','mouseenter']};};
            jQueryAbs$.mouseleave$defs$eventData=function($15a,$15b){return null;};
            jQueryAbs$.mouseleave$defs$handler=function($15a,$15b){return null;};
            jQueryAbs$.mouseleave=function mouseleave($15a,$15b){
                var jQueryAbs$=this;
                if($15a===undefined){$15a=jQueryAbs$.mouseleave$defs$eventData($15a,$15b);}
                if($15b===undefined){$15b=jQueryAbs$.mouseleave$defs$handler($15a,$15b);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.mouseleave($15a,$15b));
                /*End dynamic block*/
            };jQueryAbs$.mouseleave.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','mouseleave']};};
            jQueryAbs$.mousemove$defs$eventData=function($15c,$15d){return null;};
            jQueryAbs$.mousemove$defs$handler=function($15c,$15d){return null;};
            jQueryAbs$.mousemove=function mousemove($15c,$15d){
                var jQueryAbs$=this;
                if($15c===undefined){$15c=jQueryAbs$.mousemove$defs$eventData($15c,$15d);}
                if($15d===undefined){$15d=jQueryAbs$.mousemove$defs$handler($15c,$15d);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.mousemove($15c,$15d));
                /*End dynamic block*/
            };jQueryAbs$.mousemove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','mousemove']};};
            jQueryAbs$.mouseout$defs$eventData=function($15e,$15f){return null;};
            jQueryAbs$.mouseout$defs$handler=function($15e,$15f){return null;};
            jQueryAbs$.mouseout=function mouseout($15e,$15f){
                var jQueryAbs$=this;
                if($15e===undefined){$15e=jQueryAbs$.mouseout$defs$eventData($15e,$15f);}
                if($15f===undefined){$15f=jQueryAbs$.mouseout$defs$handler($15e,$15f);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.mouseout($15e,$15f));
                /*End dynamic block*/
            };jQueryAbs$.mouseout.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','mouseout']};};
            jQueryAbs$.mouseover$defs$eventData=function($15g,$15h){return null;};
            jQueryAbs$.mouseover$defs$handler=function($15g,$15h){return null;};
            jQueryAbs$.mouseover=function mouseover($15g,$15h){
                var jQueryAbs$=this;
                if($15g===undefined){$15g=jQueryAbs$.mouseover$defs$eventData($15g,$15h);}
                if($15h===undefined){$15h=jQueryAbs$.mouseover$defs$handler($15g,$15h);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.mouseover($15g,$15h));
                /*End dynamic block*/
            };jQueryAbs$.mouseover.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','mouseover']};};
            jQueryAbs$.mouseup$defs$eventData=function($15i,$15j){return null;};
            jQueryAbs$.mouseup$defs$handler=function($15i,$15j){return null;};
            jQueryAbs$.mouseup=function mouseup($15i,$15j){
                var jQueryAbs$=this;
                if($15i===undefined){$15i=jQueryAbs$.mouseup$defs$eventData($15i,$15j);}
                if($15j===undefined){$15j=jQueryAbs$.mouseup$defs$handler($15i,$15j);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.mouseup($15i,$15j));
                /*End dynamic block*/
            };jQueryAbs$.mouseup.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','mouseup']};};
            jQueryAbs$.next$defs$selector=function($15k){return null;};
            jQueryAbs$.next=function next($15k){
                var jQueryAbs$=this;
                if($15k===undefined){$15k=jQueryAbs$.next$defs$selector($15k);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.next($15k));
                /*End dynamic block*/
            };jQueryAbs$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','next']};};
            jQueryAbs$.nextAll$defs$selector=function($15l){return null;};
            jQueryAbs$.nextAll=function nextAll($15l){
                var jQueryAbs$=this;
                if($15l===undefined){$15l=jQueryAbs$.nextAll$defs$selector($15l);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.nextAll($15l));
                /*End dynamic block*/
            };jQueryAbs$.nextAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','nextAll']};};
            jQueryAbs$.nextUntil$defs$selector=function($15m,$15n){return null;};
            jQueryAbs$.nextUntil$defs$filter=function($15m,$15n){return null;};
            jQueryAbs$.nextUntil=function nextUntil($15m,$15n){
                var jQueryAbs$=this;
                if($15m===undefined){$15m=jQueryAbs$.nextUntil$defs$selector($15m,$15n);}
                if($15n===undefined){$15n=jQueryAbs$.nextUntil$defs$filter($15m,$15n);}
                var $15o=$15m;
                if(m$1.is$($15m,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.nextUntil($15o.valueOf(),(typeof f==='undefined'||f===null?m$1.throwexc(m$1.Exception("Undefined or null reference: f"),'1334:45-1334:45','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }else if(m$1.is$($15m,{t:m$qm.Element})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.nextUntil($15o.$_native,(typeof f==='undefined'||f===null?m$1.throwexc(m$1.Exception("Undefined or null reference: f"),'1339:52-1339:52','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }else if(m$1.is$($15m,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.nextUntil(null,(typeof f==='undefined'||f===null?m$1.throwexc(m$1.Exception("Undefined or null reference: f"),'1344:41-1344:41','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }
            };jQueryAbs$.nextUntil.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$qm.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','nextUntil']};};
            jQueryAbs$.not=function not($15p){
                var jQueryAbs$=this;
                var $15q=$15p;
                if(m$1.is$($15p,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.not($15q.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($15p,{t:'u',l:[{t:JQuery},{t:m$qm.Element}]})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.not($15q.$_native));
                    /*End dynamic block*/
                }
            };jQueryAbs$.not.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JQuery},{t:m$qm.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','not']};};
            jQueryAbs$.off$defs$handler=function($15r,$15s,$15t){return null;};
            jQueryAbs$.off=function off($15r,$15s,$15t){
                var jQueryAbs$=this;
                if($15t===undefined){$15t=jQueryAbs$.off$defs$handler($15r,$15s,$15t);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.mouseover((typeof eventData==='undefined'||eventData===null?m$1.throwexc(m$1.Exception("Undefined or null reference: eventData"),'1366:34-1366:42','jquery.ceylon'):eventData),$15t));
                /*End dynamic block*/
            };jQueryAbs$.off.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','off']};};
            jQueryAbs$.getOffset=function getOffset(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return ($15u=($15v=jQueryAbs$.$_native.offset(),$15w=(typeof Offset==='undefined'?m$1.throwexc(m$1.Exception("Undefined type Offset"),'1372:10-1372:15','jquery.ceylon'):Offset),$15w.$$===undefined?new $15w($15v):$15w($15v)),m$1.is$($15u,{t:m$1.Anything})?$15u:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'1372:10-1372:32','jquery.ceylon'));
                /*End dynamic block*/
            };jQueryAbs$.getOffset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Coordinates},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getOffset']};};
            jQueryAbs$.setOffset$defs$offset=function($15x){return null;};
            jQueryAbs$.setOffset=function setOffset($15x){
                var jQueryAbs$=this;
                if($15x===undefined){$15x=jQueryAbs$.setOffset$defs$offset($15x);}
                var $15y;
                if(($15y=$15x)!==null){
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.offset($15y));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.offset());
                    /*End dynamic block*/
                }
            };jQueryAbs$.setOffset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'offset',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Coordinates}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setOffset']};};
            jQueryAbs$.setOffsetCallback=function setOffsetCallback($15z){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.offset($15z));
                /*End dynamic block*/
            };jQueryAbs$.setOffsetCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'offset',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:Coordinates},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:Coordinates}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setOffsetCallback']};};
            jQueryAbs$.offsetParent=function offsetParent(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.offsetParent());
                /*End dynamic block*/
            };jQueryAbs$.offsetParent.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','offsetParent']};};
            jQueryAbs$.on$defs$selector=function($160,$161,$162,$163){return null;};
            jQueryAbs$.on$defs$data=function($160,$161,$162,$163){return null;};
            jQueryAbs$.on$defs$handler=function($160,$161,$162,$163){return null;};
            jQueryAbs$.on=function on($160,$161,$162,$163){
                var jQueryAbs$=this;
                if($161===undefined){$161=jQueryAbs$.on$defs$selector($160,$161,$162,$163);}
                if($162===undefined){$162=jQueryAbs$.on$defs$data($160,$161,$162,$163);}
                if($163===undefined){$163=jQueryAbs$.on$defs$handler($160,$161,$162,$163);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.on($160.valueOf(),$161,$162,$163));
                /*End dynamic block*/
            };jQueryAbs$.on.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','on']};};
            jQueryAbs$.one$defs$selector=function($164,$165,$166,$167){return null;};
            jQueryAbs$.one$defs$data=function($164,$165,$166,$167){return null;};
            jQueryAbs$.one$defs$handler=function($164,$165,$166,$167){return null;};
            jQueryAbs$.one=function one($164,$165,$166,$167){
                var jQueryAbs$=this;
                if($165===undefined){$165=jQueryAbs$.one$defs$selector($164,$165,$166,$167);}
                if($166===undefined){$166=jQueryAbs$.one$defs$data($164,$165,$166,$167);}
                if($167===undefined){$167=jQueryAbs$.one$defs$handler($164,$165,$166,$167);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.one($164.valueOf(),$165,$166,$167));
                /*End dynamic block*/
            };jQueryAbs$.one.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','one']};};
            jQueryAbs$.outerHeight$defs$includeMargin=function($168){return null;};
            jQueryAbs$.outerHeight=function outerHeight($168){
                var jQueryAbs$=this;
                if($168===undefined){$168=jQueryAbs$.outerHeight$defs$includeMargin($168);}
                /*Begin dynamic block*/
                return m$9f.JSNumber(jQueryAbs$.$_native.outerHeight($168));
                /*End dynamic block*/
            };jQueryAbs$.outerHeight.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[{$nm:'includeMargin',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','outerHeight']};};
            jQueryAbs$.outerWidth$defs$includeMargin=function($169){return null;};
            jQueryAbs$.outerWidth=function outerWidth($169){
                var jQueryAbs$=this;
                if($169===undefined){$169=jQueryAbs$.outerWidth$defs$includeMargin($169);}
                /*Begin dynamic block*/
                return m$9f.JSNumber(jQueryAbs$.$_native.outerWidth($169));
                /*End dynamic block*/
            };jQueryAbs$.outerWidth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[{$nm:'includeMargin',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','outerWidth']};};
            jQueryAbs$.parent$defs$selector=function($16a){return null;};
            jQueryAbs$.parent=function parent($16a){
                var jQueryAbs$=this;
                if($16a===undefined){$16a=jQueryAbs$.parent$defs$selector($16a);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.parent($16a));
                /*End dynamic block*/
            };jQueryAbs$.parent.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','parent']};};
            jQueryAbs$.parents$defs$selector=function($16b){return null;};
            jQueryAbs$.parents=function parents($16b){
                var jQueryAbs$=this;
                if($16b===undefined){$16b=jQueryAbs$.parents$defs$selector($16b);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.parents($16b));
                /*End dynamic block*/
            };jQueryAbs$.parents.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','parents']};};
            jQueryAbs$.parentsUntil$defs$selector=function($16c,$16d){return null;};
            jQueryAbs$.parentsUntil$defs$filter=function($16c,$16d){return null;};
            jQueryAbs$.parentsUntil=function parentsUntil($16c,$16d){
                var jQueryAbs$=this;
                if($16c===undefined){$16c=jQueryAbs$.parentsUntil$defs$selector($16c,$16d);}
                if($16d===undefined){$16d=jQueryAbs$.parentsUntil$defs$filter($16c,$16d);}
                var $16e=$16c;
                if(m$1.is$($16c,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.parents($16e.valueOf(),$16d));
                    /*End dynamic block*/
                }else if(m$1.is$($16c,{t:m$qm.Element})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.parents($16e.$_native,$16d));
                    /*End dynamic block*/
                }else if(m$1.is$($16c,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.parents(null,$16d));
                    /*End dynamic block*/
                }
            };jQueryAbs$.parentsUntil.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$qm.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','parentsUntil']};};
            jQueryAbs$.position=function position(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return Coordinates(jQueryAbs$.$_native.position());
                /*End dynamic block*/
            };jQueryAbs$.position.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Coordinates},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','position']};};
            jQueryAbs$.prepend=function prepend($16f){
                var jQueryAbs$=this;
                if($16f===undefined){$16f=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery(m$9f.JSFunction(jQueryAbs$.$_native.prepend).$_apply(null,(function(){
                    var $16g=[];
                    var $16h=$16f.iterator();
                    var $16i;
                    while(($16i=$16h.next())!==m$1.getFinished()){
                        $16g.push($16i.$_native);
                    }
                    return m$1.ArraySequence($16g,{Element$Sequential:'Element'});
                }())));
                /*End dynamic block*/
            };jQueryAbs$.prepend.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:'u',l:[{t:m$qm.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','prepend']};};
            jQueryAbs$.prependHTML=function prependHTML($16j){
                var jQueryAbs$=this;
                if($16j===undefined){$16j=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.prepend($16j));
                /*End dynamic block*/
            };jQueryAbs$.prependHTML.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','prependHTML']};};
            jQueryAbs$.prependCallback=function prependCallback($16k){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.prepend($16k));
                /*End dynamic block*/
            };jQueryAbs$.prependCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.String}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','prependCallback']};};
            jQueryAbs$.prependTo=function prependTo($16l){
                var jQueryAbs$=this;
                var $16m=$16l;
                if(m$1.is$($16l,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.prependTo($16m.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($16l,{t:'u',l:[{t:m$qm.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.prependTo($16m.$_native));
                    /*End dynamic block*/
                }
            };jQueryAbs$.prependTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$qm.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','prependTo']};};
            jQueryAbs$.prev$defs$selector=function($16n){return null;};
            jQueryAbs$.prev=function prev($16n){
                var jQueryAbs$=this;
                if($16n===undefined){$16n=jQueryAbs$.prev$defs$selector($16n);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.prev($16n));
                /*End dynamic block*/
            };jQueryAbs$.prev.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','prev']};};
            jQueryAbs$.prevAll$defs$selector=function($16o){return null;};
            jQueryAbs$.prevAll=function prevAll($16o){
                var jQueryAbs$=this;
                if($16o===undefined){$16o=jQueryAbs$.prevAll$defs$selector($16o);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.prevAll($16o));
                /*End dynamic block*/
            };jQueryAbs$.prevAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','prevAll']};};
            jQueryAbs$.prevUntil$defs$selector=function($16p,$16q){return null;};
            jQueryAbs$.prevUntil$defs$filter=function($16p,$16q){return null;};
            jQueryAbs$.prevUntil=function prevUntil($16p,$16q){
                var jQueryAbs$=this;
                if($16p===undefined){$16p=jQueryAbs$.prevUntil$defs$selector($16p,$16q);}
                if($16q===undefined){$16q=jQueryAbs$.prevUntil$defs$filter($16p,$16q);}
                var $16r=$16p;
                if(m$1.is$($16p,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.prevUntil($16r.valueOf(),(typeof f==='undefined'||f===null?m$1.throwexc(m$1.Exception("Undefined or null reference: f"),'1509:45-1509:45','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }else if(m$1.is$($16p,{t:m$qm.Element})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.prevUntil($16r.$_native,(typeof f==='undefined'||f===null?m$1.throwexc(m$1.Exception("Undefined or null reference: f"),'1514:52-1514:52','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }else if(m$1.is$($16p,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.prevUntil(null,(typeof f==='undefined'||f===null?m$1.throwexc(m$1.Exception("Undefined or null reference: f"),'1519:41-1519:41','jquery.ceylon'):f)));
                    /*End dynamic block*/
                }
            };jQueryAbs$.prevUntil.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$qm.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','prevUntil']};};
            jQueryAbs$.promise$defs$type=function($16s,$16t){return "fx";};
            jQueryAbs$.promise$defs$target=function($16s,$16t){return null;};
            jQueryAbs$.promise=function promise($16s,$16t){
                var jQueryAbs$=this;
                if($16s===undefined){$16s=jQueryAbs$.promise$defs$type($16s,$16t);}
                if($16t===undefined){$16t=jQueryAbs$.promise$defs$target($16s,$16t);}
                var $16u;
                if(($16u=$16t)!==null){
                    /*Begin dynamic block*/
                    return Promise(jQueryAbs$.$_native.promise($16s.valueOf(),$16u.$_native));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return Promise(jQueryAbs$.$_native.promise($16s.valueOf()));
                    /*End dynamic block*/
                }
            };jQueryAbs$.promise.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise},$ps:[{$nm:'type',$mt:'prm',$def:1,$t:{t:m$1.String},$an:function(){return[];}},{$nm:'target',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSObject}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','promise']};};
            jQueryAbs$.getProp=function getProp($16v){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                var $16w=jQueryAbs$.$_native.prop($16v.valueOf());
                if($16w.instanceof((typeof String==='undefined'||String===null?m$1.throwexc(m$1.Exception("Undefined or null reference: String"),'1539:25-1539:30','jquery.ceylon'):String))){
                    return m$9f.JSString($16w);
                }else {
                    if($16w){
                        return true;
                    }else {
                        return false;
                    }
                }/*End dynamic block*/
            };jQueryAbs$.getProp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$9f.JSString},{t:m$1.$_Boolean}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getProp']};};
            jQueryAbs$.setProp=function setProp($16x,$16y){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.prop($16x.valueOf(),$16y));
                /*End dynamic block*/
            };jQueryAbs$.setProp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$1.Integer},{t:m$1.$_Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setProp']};};
            jQueryAbs$.setPropEntries=function setPropEntries($16z){
                var jQueryAbs$=this;
                if($16z===undefined){$16z=m$1.getEmpty();}
                var $170=m$9f.createJSObject();
                var $172;for(var $171=$16z.iterator();($172=$171.next())!==m$1.getFinished();){
                    var $173=$172.key,$174=$172.item;
                    /*Begin dynamic block*/
                    m$9f.objectDefineProperty($170,($175=m$9f.createJSString($173),m$1.is$($175,{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]})?$175:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'1559:43-1559:61','jquery.ceylon')),m$9f.DataDescriptor(true,false,true,true,$174));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.prop($170));
                /*End dynamic block*/
            };jQueryAbs$.setPropEntries.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:'u',l:[{t:m$1.String},{t:m$1.Integer},{t:m$1.$_Boolean}]},Key$Entry:{t:m$1.String}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setPropEntries']};};
            jQueryAbs$.setPropCallback=function setPropCallback($176,$177){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.prop($176.valueOf(),$177));
                /*End dynamic block*/
            };jQueryAbs$.setPropCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.Anything}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setPropCallback']};};
            jQueryAbs$.pushStack$defs$name=function($178,$179,$17a){return null;};
            jQueryAbs$.pushStack$defs$arguments=function($178,$179,$17a){return null;};
            jQueryAbs$.pushStack=function pushStack($178,$179,$17a){
                var jQueryAbs$=this;
                if($179===undefined){$179=jQueryAbs$.pushStack$defs$name($178,$179,$17a);}
                if($17a===undefined){$17a=jQueryAbs$.pushStack$defs$arguments($178,$179,$17a);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.pushStack((function(){
                    var $17b=[];
                    var $17c=$178.iterator();
                    var $17d;
                    while(($17d=$17c.next())!==m$1.getFinished()){
                        $17b.push($17d.$_native);
                    }
                    return m$1.ArraySequence($17b,{Element$Sequential:'Element'});
                }()),$179,$17a));
                /*End dynamic block*/
            };jQueryAbs$.pushStack.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'elements',$mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$qm.Element}}},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}},{$nm:'arguments',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','pushStack']};};
            jQueryAbs$.getQueue$defs$queueName=function($17e){return "fx";};
            jQueryAbs$.getQueue=function getQueue($17e){
                var jQueryAbs$=this;
                if($17e===undefined){$17e=jQueryAbs$.getQueue$defs$queueName($17e);}
                /*Begin dynamic block*/
                return m$9f.JSArray(jQueryAbs$.$_native.queue($17e.valueOf()));
                /*End dynamic block*/
            };jQueryAbs$.getQueue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSArray},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.doc("returns an array of functions"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getQueue']};};
            jQueryAbs$.setQueue$defs$queueName=function($17f,$17g){return "fx";};
            jQueryAbs$.setQueue=function setQueue($17f,$17g){
                var jQueryAbs$=this;
                if($17f===undefined){$17f=jQueryAbs$.setQueue$defs$queueName($17f,$17g);}
                if($17g===undefined){$17g=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.queue($17f.valueOf(),$17g));
                /*End dynamic block*/
            };jQueryAbs$.setQueue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:m$1.String},$an:function(){return[];}},{$nm:'newQueue',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setQueue']};};
            jQueryAbs$.setQueueCallback$defs$queueName=function($17h,$17i){return "fx";};
            jQueryAbs$.setQueueCallback=function setQueueCallback($17h,$17i){
                var jQueryAbs$=this;
                if($17i===undefined){$17i=jQueryAbs$.setQueueCallback$defs$queueName($17h,$17i);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.queue($17i.valueOf(),$17h));
                /*End dynamic block*/
            };jQueryAbs$.setQueueCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'next',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setQueueCallback']};};
            jQueryAbs$.ready=function ready($17j){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.ready($17j));
                /*End dynamic block*/
            };jQueryAbs$.ready.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','ready']};};
            jQueryAbs$.remove$defs$selector=function($17k){return null;};
            jQueryAbs$.remove=function remove($17k){
                var jQueryAbs$=this;
                if($17k===undefined){$17k=jQueryAbs$.remove$defs$selector($17k);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.remove($17k));
                /*End dynamic block*/
            };jQueryAbs$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','remove']};};
            jQueryAbs$.removeAttr=function removeAttr($17l){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.removeAttr($17l.valueOf()));
                /*End dynamic block*/
            };jQueryAbs$.removeAttr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','removeAttr']};};
            jQueryAbs$.removeClass=function removeClass($17m){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.removeClass($17m.valueOf()));
                /*End dynamic block*/
            };jQueryAbs$.removeClass.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','removeClass']};};
            jQueryAbs$.removeClassCallback=function removeClassCallback($17n){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.removeClass($17n));
                /*End dynamic block*/
            };jQueryAbs$.removeClassCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.String},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.String}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','removeClassCallback']};};
            jQueryAbs$.removeData=function removeData($17o){
                var jQueryAbs$=this;
                if($17o===undefined){$17o=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.removeData($17o));
                /*End dynamic block*/
            };jQueryAbs$.removeData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'names',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','removeData']};};
            jQueryAbs$.removeProp=function removeProp($17p){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.removeProp($17p.valueOf()));
                /*End dynamic block*/
            };jQueryAbs$.removeProp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','removeProp']};};
            jQueryAbs$.replaceAll=function replaceAll($17q){
                var jQueryAbs$=this;
                var $17r=$17q;
                if(m$1.is$($17q,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.replaceAll($17r.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($17q,{t:'u',l:[{t:JQuery},{t:m$qm.Element}]})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.replaceAll($17r.$_native));
                    /*End dynamic block*/
                }
            };jQueryAbs$.replaceAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JQuery},{t:m$qm.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','replaceAll']};};
            jQueryAbs$.replaceWith=function replaceWith($17s){
                var jQueryAbs$=this;
                var $17t=$17s;
                if(m$1.is$($17s,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.replaceWith($17t.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($17s,{t:'u',l:[{t:JQuery},{t:m$qm.Element}]})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.replaceWith($17t.$_native));
                    /*End dynamic block*/
                }
            };jQueryAbs$.replaceWith.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'newContent',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JQuery},{t:m$qm.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','replaceWith']};};
            jQueryAbs$.replaceWithCallback=function replaceWithCallback($17u){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.replaceWith($17u));
                /*End dynamic block*/
            };jQueryAbs$.replaceWithCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JQuery},{t:m$1.Callable,a:{Return$Callable:{t:m$qm.Element},Arguments$Callable:{t:m$1.Empty}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','replaceWithCallback']};};
            jQueryAbs$.resize$defs$eventData=function($17v,$17w){return null;};
            jQueryAbs$.resize=function resize($17v,$17w){
                var jQueryAbs$=this;
                if($17w===undefined){$17w=jQueryAbs$.resize$defs$eventData($17v,$17w);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.resize($17w,$17v));
                /*End dynamic block*/
            };jQueryAbs$.resize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','resize']};};
            jQueryAbs$.scroll$defs$eventData=function($17x,$17y){return null;};
            jQueryAbs$.scroll=function scroll($17x,$17y){
                var jQueryAbs$=this;
                if($17y===undefined){$17y=jQueryAbs$.scroll$defs$eventData($17x,$17y);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.scroll($17y,$17x));
                /*End dynamic block*/
            };jQueryAbs$.scroll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','scroll']};};
            jQueryAbs$.getScrollLeft=function getScrollLeft(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(jQueryAbs$.$_native.scrollLeft());
                /*End dynamic block*/
            };jQueryAbs$.getScrollLeft.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getScrollLeft']};};
            jQueryAbs$.setScrollLeft=function setScrollLeft($17z){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.scrollLeft($17z));
                /*End dynamic block*/
            };jQueryAbs$.setScrollLeft.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setScrollLeft']};};
            jQueryAbs$.getScrollTop=function getScrollTop(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(jQueryAbs$.$_native.scrollTop());
                /*End dynamic block*/
            };jQueryAbs$.getScrollTop.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getScrollTop']};};
            jQueryAbs$.setScrollTop=function setScrollTop($180){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.scrollTop($180));
                /*End dynamic block*/
            };jQueryAbs$.setScrollTop.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setScrollTop']};};
            jQueryAbs$.select$defs$eventData=function($181,$182){return null;};
            jQueryAbs$.select=function select($181,$182){
                var jQueryAbs$=this;
                if($182===undefined){$182=jQueryAbs$.select$defs$eventData($181,$182);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.select($182,$181));
                /*End dynamic block*/
            };jQueryAbs$.select.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','select']};};
            jQueryAbs$.serialize=function serialize(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(jQueryAbs$.$_native.serialize());
                /*End dynamic block*/
            };jQueryAbs$.serialize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','serialize']};};
            jQueryAbs$.serializeArray=function serializeArray(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSArray(jQueryAbs$.$_native.serializeArray());
                /*End dynamic block*/
            };jQueryAbs$.serializeArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSArray},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','serializeArray']};};
            jQueryAbs$.show$defs$duration=function($183,$184,$185){return null;};
            jQueryAbs$.show$defs$easing=function($183,$184,$185){return null;};
            jQueryAbs$.show$defs$complete=function($183,$184,$185){return null;};
            jQueryAbs$.show=function show($183,$184,$185){
                var jQueryAbs$=this;
                if($183===undefined){$183=jQueryAbs$.show$defs$duration($183,$184,$185);}
                if($184===undefined){$184=jQueryAbs$.show$defs$easing($183,$184,$185);}
                if($185===undefined){$185=jQueryAbs$.show$defs$complete($183,$184,$185);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.show($183,$184,$185));
                /*End dynamic block*/
            };jQueryAbs$.show.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','show']};};
            jQueryAbs$.showOptions=function showOptions($186){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.show($186.toNative()));
                /*End dynamic block*/
            };jQueryAbs$.showOptions.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','showOptions']};};
            jQueryAbs$.siblings$defs$siblings=function($187){return null;};
            jQueryAbs$.siblings=function siblings($187){
                var jQueryAbs$=this;
                if($187===undefined){$187=jQueryAbs$.siblings$defs$siblings($187);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.siblings($187));
                /*End dynamic block*/
            };jQueryAbs$.siblings.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'siblings',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','siblings']};};
            jQueryAbs$.slice$defs$end=function($188,$189){return null;};
            jQueryAbs$.slice=function slice($188,$189){
                var jQueryAbs$=this;
                if($189===undefined){$189=jQueryAbs$.slice$defs$end($188,$189);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.slice($188,$189));
                /*End dynamic block*/
            };jQueryAbs$.slice.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'start',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'end',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','slice']};};
            jQueryAbs$.slideDown$defs$duration=function($18a,$18b,$18c){return null;};
            jQueryAbs$.slideDown$defs$easing=function($18a,$18b,$18c){return null;};
            jQueryAbs$.slideDown$defs$complete=function($18a,$18b,$18c){return null;};
            jQueryAbs$.slideDown=function slideDown($18a,$18b,$18c){
                var jQueryAbs$=this;
                if($18a===undefined){$18a=jQueryAbs$.slideDown$defs$duration($18a,$18b,$18c);}
                if($18b===undefined){$18b=jQueryAbs$.slideDown$defs$easing($18a,$18b,$18c);}
                if($18c===undefined){$18c=jQueryAbs$.slideDown$defs$complete($18a,$18b,$18c);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.slideDown($18a,$18b,$18c));
                /*End dynamic block*/
            };jQueryAbs$.slideDown.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','slideDown']};};
            jQueryAbs$.slideDownOptions=function slideDownOptions($18d){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.slideDown($18d.toNative()));
                /*End dynamic block*/
            };jQueryAbs$.slideDownOptions.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','slideDownOptions']};};
            jQueryAbs$.slideToggle$defs$duration=function($18e,$18f,$18g){return null;};
            jQueryAbs$.slideToggle$defs$easing=function($18e,$18f,$18g){return null;};
            jQueryAbs$.slideToggle$defs$complete=function($18e,$18f,$18g){return null;};
            jQueryAbs$.slideToggle=function slideToggle($18e,$18f,$18g){
                var jQueryAbs$=this;
                if($18e===undefined){$18e=jQueryAbs$.slideToggle$defs$duration($18e,$18f,$18g);}
                if($18f===undefined){$18f=jQueryAbs$.slideToggle$defs$easing($18e,$18f,$18g);}
                if($18g===undefined){$18g=jQueryAbs$.slideToggle$defs$complete($18e,$18f,$18g);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.slideToggle($18e,$18f,$18g));
                /*End dynamic block*/
            };jQueryAbs$.slideToggle.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','slideToggle']};};
            jQueryAbs$.slideToggleOptions=function slideToggleOptions($18h){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.slideToggle($18h.toNative()));
                /*End dynamic block*/
            };jQueryAbs$.slideToggleOptions.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','slideToggleOptions']};};
            jQueryAbs$.slideUp$defs$duration=function($18i,$18j,$18k){return null;};
            jQueryAbs$.slideUp$defs$easing=function($18i,$18j,$18k){return null;};
            jQueryAbs$.slideUp$defs$complete=function($18i,$18j,$18k){return null;};
            jQueryAbs$.slideUp=function slideUp($18i,$18j,$18k){
                var jQueryAbs$=this;
                if($18i===undefined){$18i=jQueryAbs$.slideUp$defs$duration($18i,$18j,$18k);}
                if($18j===undefined){$18j=jQueryAbs$.slideUp$defs$easing($18i,$18j,$18k);}
                if($18k===undefined){$18k=jQueryAbs$.slideUp$defs$complete($18i,$18j,$18k);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.slideUp($18i,$18j,$18k));
                /*End dynamic block*/
            };jQueryAbs$.slideUp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','slideUp']};};
            jQueryAbs$.slideUpOptions=function slideUpOptions($18l){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.slideUp($18l.toNative()));
                /*End dynamic block*/
            };jQueryAbs$.slideUpOptions.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','slideUpOptions']};};
            jQueryAbs$.stop$defs$clearQueue=function($18m,$18n){return null;};
            jQueryAbs$.stop$defs$jumpToEnd=function($18m,$18n){return null;};
            jQueryAbs$.stop=function stop($18m,$18n){
                var jQueryAbs$=this;
                if($18m===undefined){$18m=jQueryAbs$.stop$defs$clearQueue($18m,$18n);}
                if($18n===undefined){$18n=jQueryAbs$.stop$defs$jumpToEnd($18m,$18n);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.stop($18m,$18n));
                /*End dynamic block*/
            };jQueryAbs$.stop.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'clearQueue',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[];}},{$nm:'jumpToEnd',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','stop']};};
            jQueryAbs$.stopName$defs$clearQueue=function($18o,$18p,$18q){return null;};
            jQueryAbs$.stopName$defs$jumpToEnd=function($18o,$18p,$18q){return null;};
            jQueryAbs$.stopName=function stopName($18o,$18p,$18q){
                var jQueryAbs$=this;
                if($18p===undefined){$18p=jQueryAbs$.stopName$defs$clearQueue($18o,$18p,$18q);}
                if($18q===undefined){$18q=jQueryAbs$.stopName$defs$jumpToEnd($18o,$18p,$18q);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.stop($18o.valueOf(),$18p,$18q));
                /*End dynamic block*/
            };jQueryAbs$.stopName.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'queue',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'clearQueue',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[];}},{$nm:'jumpToEnd',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','stopName']};};
            jQueryAbs$.submit$defs$eventData=function($18r,$18s){return null;};
            jQueryAbs$.submit$defs$handler=function($18r,$18s){return null;};
            jQueryAbs$.submit=function submit($18r,$18s){
                var jQueryAbs$=this;
                if($18r===undefined){$18r=jQueryAbs$.submit$defs$eventData($18r,$18s);}
                if($18s===undefined){$18s=jQueryAbs$.submit$defs$handler($18r,$18s);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.submit($18r,$18s));
                /*End dynamic block*/
            };jQueryAbs$.submit.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','submit']};};
            jQueryAbs$.getText=function getText(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(jQueryAbs$.$_native.text());
                /*End dynamic block*/
            };jQueryAbs$.getText.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getText']};};
            jQueryAbs$.setText=function setText($18t){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.text($18t.valueOf()));
                /*End dynamic block*/
            };jQueryAbs$.setText.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'textString',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setText']};};
            jQueryAbs$.setTextCallback=function setTextCallback($18u){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.text($18u));
                /*End dynamic block*/
            };jQueryAbs$.setTextCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.String},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.String}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setTextCallback']};};
            jQueryAbs$.toArray=function toArray(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSArray(jQueryAbs$.$_native.toArray());
                /*End dynamic block*/
            };jQueryAbs$.toArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSArray},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','toArray']};};
            jQueryAbs$.toggle$defs$duration=function($18v,$18w,$18x){return null;};
            jQueryAbs$.toggle$defs$easing=function($18v,$18w,$18x){return null;};
            jQueryAbs$.toggle$defs$complete=function($18v,$18w,$18x){return null;};
            jQueryAbs$.toggle=function toggle($18v,$18w,$18x){
                var jQueryAbs$=this;
                if($18v===undefined){$18v=jQueryAbs$.toggle$defs$duration($18v,$18w,$18x);}
                if($18w===undefined){$18w=jQueryAbs$.toggle$defs$easing($18v,$18w,$18x);}
                if($18x===undefined){$18x=jQueryAbs$.toggle$defs$complete($18v,$18w,$18x);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.toggle($18v,$18w,$18x));
                /*End dynamic block*/
            };jQueryAbs$.toggle.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','toggle']};};
            jQueryAbs$.toggleOptions=function toggleOptions($18y){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.toggle($18y.toNative()));
                /*End dynamic block*/
            };jQueryAbs$.toggleOptions.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','toggleOptions']};};
            jQueryAbs$.toggleShowOrHide=function toggleShowOrHide($18z){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.toggle($18z));
                /*End dynamic block*/
            };jQueryAbs$.toggleShowOrHide.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'showOrHide',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','toggleShowOrHide']};};
            jQueryAbs$.toggleClass$defs$swit=function($190){return null;};
            jQueryAbs$.toggleClass=function toggleClass($190){
                var jQueryAbs$=this;
                if($190===undefined){$190=jQueryAbs$.toggleClass$defs$swit($190);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.toggleClass($190));
                /*End dynamic block*/
            };jQueryAbs$.toggleClass.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'swit',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','toggleClass']};};
            jQueryAbs$.toggleClassName$defs$swit=function($191,$192){return null;};
            jQueryAbs$.toggleClassName=function toggleClassName($191,$192){
                var jQueryAbs$=this;
                if($192===undefined){$192=jQueryAbs$.toggleClassName$defs$swit($191,$192);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.toggleClass($191.valueOf(),$192));
                /*End dynamic block*/
            };jQueryAbs$.toggleClassName.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'swit',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','toggleClassName']};};
            jQueryAbs$.toggleClassCallback$defs$swit=function($193,$194){return null;};
            jQueryAbs$.toggleClassCallback=function toggleClassCallback($193,$194){
                var jQueryAbs$=this;
                if($194===undefined){$194=jQueryAbs$.toggleClassCallback$defs$swit($193,$194);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.toggleClass($193,$194));
                /*End dynamic block*/
            };jQueryAbs$.toggleClassCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.String},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.String}},{$t:{t:m$1.$_Boolean}}]}}},$an:function(){return[];}},{$nm:'swit',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','toggleClassCallback']};};
            jQueryAbs$.trigger=function trigger($195,$196){
                var jQueryAbs$=this;
                if($196===undefined){$196=m$1.getEmpty();}
                var $197=$195;
                if(m$1.is$($195,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.trigger($197.valueOf(),$196));
                    /*End dynamic block*/
                }else if(m$1.is$($195,{t:JQueryEvent})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.trigger($197.$_native,$196));
                    /*End dynamic block*/
                }
            };jQueryAbs$.trigger.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'event',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JQueryEvent}]},$an:function(){return[];}},{$nm:'extraParameters',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','trigger']};};
            jQueryAbs$.unbind=function unbind($198){
                var jQueryAbs$=this;
                var $199=$198;
                if(m$1.is$($198,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.unbind($199.valueOf(),false));
                    /*End dynamic block*/
                }else if(m$1.is$($198,{t:'u',l:[{t:m$qm.Event},{t:JQueryEvent}]})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.unbind($199));
                    /*End dynamic block*/
                }
            };jQueryAbs$.unbind.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$qm.Event},{t:JQueryEvent}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','unbind']};};
            jQueryAbs$.unbindCallaback$defs$eventType=function($19a,$19b){return null;};
            jQueryAbs$.unbindCallaback$defs$callback=function($19a,$19b){return null;};
            jQueryAbs$.unbindCallaback=function unbindCallaback($19a,$19b){
                var jQueryAbs$=this;
                if($19a===undefined){$19a=jQueryAbs$.unbindCallaback$defs$eventType($19a,$19b);}
                if($19b===undefined){$19b=jQueryAbs$.unbindCallaback$defs$callback($19a,$19b);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.unbind($19a,$19b));
                /*End dynamic block*/
            };jQueryAbs$.unbindCallaback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','unbindCallaback']};};
            jQueryAbs$.undelegate$defs$namespace=function($19c){return null;};
            jQueryAbs$.undelegate=function undelegate($19c){
                var jQueryAbs$=this;
                if($19c===undefined){$19c=jQueryAbs$.undelegate$defs$namespace($19c);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.undelegate($19c));
                /*End dynamic block*/
            };jQueryAbs$.undelegate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'namespace',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','undelegate']};};
            jQueryAbs$.undelegateCallback$defs$callback=function($19d,$19e,$19f){return null;};
            jQueryAbs$.undelegateCallback=function undelegateCallback($19d,$19e,$19f){
                var jQueryAbs$=this;
                if($19f===undefined){$19f=jQueryAbs$.undelegateCallback$defs$callback($19d,$19e,$19f);}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.undelegate($19d.valueOf(),$19e.valueOf(),$19f));
                /*End dynamic block*/
            };jQueryAbs$.undelegateCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'eventType',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','undelegateCallback']};};
            jQueryAbs$.undelegateEvents=function undelegateEvents($19g,$19h){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.undelegate());
                /*End dynamic block*/
            };jQueryAbs$.undelegateEvents.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'events',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','undelegateEvents']};};
            jQueryAbs$.unwrap=function unwrap(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.unwrap());
                /*End dynamic block*/
            };jQueryAbs$.unwrap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','unwrap']};};
            jQueryAbs$.getVal=function getVal(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                var $19i=jQueryAbs$.$_native.val();
                if($19i.nstanceof((typeof String==='undefined'||String===null?m$1.throwexc(m$1.Exception("Undefined or null reference: String"),'1928:23-1928:28','jquery.ceylon'):String))){
                    return m$9f.JSString($19i);
                }else {
                    if((typeof arrayIsArray==='undefined'||arrayIsArray===null?m$1.throwexc(m$1.Exception("Undefined or null reference: arrayIsArray"),'1930:14-1930:25','jquery.ceylon'):arrayIsArray)($19i)){
                        return m$9f.JSArray($19i);
                    }else {
                        return m$9f.JSNumber($19i);
                    }
                }/*End dynamic block*/
            };jQueryAbs$.getVal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$9f.JSString},{t:m$9f.JSNumber},{t:m$9f.JSArray}]},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getVal']};};
            jQueryAbs$.setVal=function setVal($19j){
                var jQueryAbs$=this;
                if($19j===undefined){$19j=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.val($19j));
                /*End dynamic block*/
            };jQueryAbs$.setVal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setVal']};};
            jQueryAbs$.setValCallback=function setValCallback($19k){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.val($19k));
                /*End dynamic block*/
            };jQueryAbs$.setValCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.String},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.String}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setValCallback']};};
            jQueryAbs$.getWidth=function getWidth(){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(jQueryAbs$.$_native.width());
                /*End dynamic block*/
            };jQueryAbs$.getWidth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','getWidth']};};
            jQueryAbs$.setWidth=function setWidth($19l){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.width($19l));
                /*End dynamic block*/
            };jQueryAbs$.setWidth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'width',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setWidth']};};
            jQueryAbs$.setWidthCallback=function setWidthCallback($19m){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.width($19m));
                /*End dynamic block*/
            };jQueryAbs$.setWidthCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Integer},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.Integer}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','setWidthCallback']};};
            jQueryAbs$.wrap=function wrap($19n){
                var jQueryAbs$=this;
                var $19o=$19n;
                if(m$1.is$($19n,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.wrap($19o.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($19n,{t:'u',l:[{t:m$qm.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.wrap($19o.$_native));
                    /*End dynamic block*/
                }
            };jQueryAbs$.wrap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$qm.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','wrap']};};
            jQueryAbs$.wrapCallback=function wrapCallback($19p){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.wrap($19p));
                /*End dynamic block*/
            };jQueryAbs$.wrapCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$1.Callable,a:{Return$Callable:{t:JQuery},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}}]}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','wrapCallback']};};
            jQueryAbs$.wrapAll=function wrapAll($19q){
                var jQueryAbs$=this;
                var $19r=$19q;
                if(m$1.is$($19q,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.wrapAll($19r.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($19q,{t:'u',l:[{t:m$qm.Element},{t:JQuery}]})) {
                    /*Begin dynamic block*/
                    return JQuery(jQueryAbs$.$_native.wrapAll($19r.$_native));
                    /*End dynamic block*/
                }
            };jQueryAbs$.wrapAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$qm.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','wrapAll']};};
            jQueryAbs$.wrapInner=function wrapInner($19s){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.wrapInner($19s.valueOf()));
                /*End dynamic block*/
            };jQueryAbs$.wrapInner.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','wrapInner']};};
            jQueryAbs$.wrapInnerCallback=function wrapInnerCallback($19t){
                var jQueryAbs$=this;
                /*Begin dynamic block*/
                return JQuery(jQueryAbs$.$_native.wrapInner($19t));
                /*End dynamic block*/
            };jQueryAbs$.wrapInnerCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.String},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Integer}}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAbs','$m','wrapInnerCallback']};};
        })(JQueryAbs.$$.prototype);
    }
    return JQueryAbs;
}
ex$.$init$JQueryAbs=$init$JQueryAbs;
$init$JQueryAbs();
function JQuery($19u,jQuery$){
    $init$JQuery();
    if(jQuery$===undefined)jQuery$=new JQuery.$$;
    jQuery$.$19u_=$19u;
    JQueryAbs(jQuery$);
    jQuery$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQuery,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','JQuery','$at','native']};}};
    /*Begin dynamic block*/
    jQuery$.$_native=jQuery$.$19u;/*End dynamic block*/
    return jQuery$;
}
JQuery.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JQueryAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQuery']};};
ex$.JQuery=JQuery;
function $init$JQuery(){
    if(JQuery.$$===undefined){
        m$1.initTypeProto(JQuery,'com.openswimsoftware.ceylon.js.jquery::JQuery',$init$JQueryAbs());
        (function(jQuery$){
            m$1.atr$(jQuery$,'$19u',function(){return this.$19u_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQuery,d:['com.openswimsoftware.ceylon.js.jquery','JQuery','$at','n$quq5ha']};});
        })(JQuery.$$.prototype);
    }
    return JQuery;
}
ex$.$init$JQuery=$init$JQuery;
$init$JQuery();
function DataType($19v,dataType$){
    $init$DataType();
    if(dataType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    dataType$.$19v_=$19v;
    return dataType$;
}
DataType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],of:[$prop$get$19w,$prop$get$19x,$prop$get$19y,$prop$get$19z,$prop$get$1a0,$prop$get$1a1],$an:function(){return[m$1.doc("the ajax request data type"),m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','DataType']};};
ex$.DataType=DataType;
function $init$DataType(){
    if(DataType.$$===undefined){
        m$1.initTypeProto(DataType,'com.openswimsoftware.ceylon.js.jquery::DataType',m$1.Basic);
        (function(dataType$){
            m$1.atr$(dataType$,'$19v',function(){return this.$19v_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:DataType,d:['com.openswimsoftware.ceylon.js.jquery','DataType','$at','name$n67fnx']};});
        })(DataType.$$.prototype);
    }
    return DataType;
}
ex$.$init$DataType=$init$DataType;
$init$DataType();
function $19w(){
    var dataTypeXML$=new $19w.$$;
    DataType("dataTypeXML",dataTypeXML$);
    return dataTypeXML$;
};$19w.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DataType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeXML']};};
function $init$$19w(){
    if($19w.$$===undefined){
        m$1.initTypeProto($19w,'com.openswimsoftware.ceylon.js.jquery::dataTypeXML',$init$DataType());
    }
    return $19w;
}
ex$.$init$$19w=$init$$19w;
$init$$19w();
var $1a2;
function getDataTypeXML(){
    if($1a2===undefined){$1a2=$init$$19w()();$1a2.$crtmm$=getDataTypeXML.$crtmm$;}
    return $1a2;
}
ex$.getDataTypeXML=getDataTypeXML;
getDataTypeXML.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$19w},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeXML']};};
$prop$getDataTypeXML={get:getDataTypeXML,$crtmm$:getDataTypeXML.$crtmm$};
get$19w=getDataTypeXML;$prop$get$19w=getDataTypeXML;
ex$.$prop$getDataTypeXML=$prop$getDataTypeXML;
function $19x(){
    var dataTypeHtml$=new $19x.$$;
    DataType("dataTypeHtml",dataTypeHtml$);
    return dataTypeHtml$;
};$19x.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DataType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeHtml']};};
function $init$$19x(){
    if($19x.$$===undefined){
        m$1.initTypeProto($19x,'com.openswimsoftware.ceylon.js.jquery::dataTypeHtml',$init$DataType());
    }
    return $19x;
}
ex$.$init$$19x=$init$$19x;
$init$$19x();
var $1a3;
function getDataTypeHtml(){
    if($1a3===undefined){$1a3=$init$$19x()();$1a3.$crtmm$=getDataTypeHtml.$crtmm$;}
    return $1a3;
}
ex$.getDataTypeHtml=getDataTypeHtml;
getDataTypeHtml.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$19x},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeHtml']};};
$prop$getDataTypeHtml={get:getDataTypeHtml,$crtmm$:getDataTypeHtml.$crtmm$};
get$19x=getDataTypeHtml;$prop$get$19x=getDataTypeHtml;
ex$.$prop$getDataTypeHtml=$prop$getDataTypeHtml;
function $19y(){
    var dataTypeScript$=new $19y.$$;
    DataType("dataTypeScript",dataTypeScript$);
    return dataTypeScript$;
};$19y.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DataType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeScript']};};
function $init$$19y(){
    if($19y.$$===undefined){
        m$1.initTypeProto($19y,'com.openswimsoftware.ceylon.js.jquery::dataTypeScript',$init$DataType());
    }
    return $19y;
}
ex$.$init$$19y=$init$$19y;
$init$$19y();
var $1a4;
function getDataTypeScript(){
    if($1a4===undefined){$1a4=$init$$19y()();$1a4.$crtmm$=getDataTypeScript.$crtmm$;}
    return $1a4;
}
ex$.getDataTypeScript=getDataTypeScript;
getDataTypeScript.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$19y},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeScript']};};
$prop$getDataTypeScript={get:getDataTypeScript,$crtmm$:getDataTypeScript.$crtmm$};
get$19y=getDataTypeScript;$prop$get$19y=getDataTypeScript;
ex$.$prop$getDataTypeScript=$prop$getDataTypeScript;
function $19z(){
    var dataTypeJson$=new $19z.$$;
    DataType("dataTypeJson",dataTypeJson$);
    return dataTypeJson$;
};$19z.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DataType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeJson']};};
function $init$$19z(){
    if($19z.$$===undefined){
        m$1.initTypeProto($19z,'com.openswimsoftware.ceylon.js.jquery::dataTypeJson',$init$DataType());
    }
    return $19z;
}
ex$.$init$$19z=$init$$19z;
$init$$19z();
var $1a5;
function getDataTypeJson(){
    if($1a5===undefined){$1a5=$init$$19z()();$1a5.$crtmm$=getDataTypeJson.$crtmm$;}
    return $1a5;
}
ex$.getDataTypeJson=getDataTypeJson;
getDataTypeJson.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$19z},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeJson']};};
$prop$getDataTypeJson={get:getDataTypeJson,$crtmm$:getDataTypeJson.$crtmm$};
get$19z=getDataTypeJson;$prop$get$19z=getDataTypeJson;
ex$.$prop$getDataTypeJson=$prop$getDataTypeJson;
function $1a0(){
    var dataTypeJsonp$=new $1a0.$$;
    DataType("dataTypeJsonp",dataTypeJsonp$);
    return dataTypeJsonp$;
};$1a0.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DataType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeJsonp']};};
function $init$$1a0(){
    if($1a0.$$===undefined){
        m$1.initTypeProto($1a0,'com.openswimsoftware.ceylon.js.jquery::dataTypeJsonp',$init$DataType());
    }
    return $1a0;
}
ex$.$init$$1a0=$init$$1a0;
$init$$1a0();
var $1a6;
function getDataTypeJsonp(){
    if($1a6===undefined){$1a6=$init$$1a0()();$1a6.$crtmm$=getDataTypeJsonp.$crtmm$;}
    return $1a6;
}
ex$.getDataTypeJsonp=getDataTypeJsonp;
getDataTypeJsonp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1a0},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeJsonp']};};
$prop$getDataTypeJsonp={get:getDataTypeJsonp,$crtmm$:getDataTypeJsonp.$crtmm$};
get$1a0=getDataTypeJsonp;$prop$get$1a0=getDataTypeJsonp;
ex$.$prop$getDataTypeJsonp=$prop$getDataTypeJsonp;
function $1a1(){
    var dataTypeText$=new $1a1.$$;
    DataType("dataTypeText",dataTypeText$);
    return dataTypeText$;
};$1a1.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DataType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeText']};};
function $init$$1a1(){
    if($1a1.$$===undefined){
        m$1.initTypeProto($1a1,'com.openswimsoftware.ceylon.js.jquery::dataTypeText',$init$DataType());
    }
    return $1a1;
}
ex$.$init$$1a1=$init$$1a1;
$init$$1a1();
var $1a7;
function getDataTypeText(){
    if($1a7===undefined){$1a7=$init$$1a1()();$1a7.$crtmm$=getDataTypeText.$crtmm$;}
    return $1a7;
}
ex$.getDataTypeText=getDataTypeText;
getDataTypeText.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$1a1},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','dataTypeText']};};
$prop$getDataTypeText={get:getDataTypeText,$crtmm$:getDataTypeText.$crtmm$};
get$1a1=getDataTypeText;$prop$get$1a1=getDataTypeText;
ex$.$prop$getDataTypeText=$prop$getDataTypeText;
function createJSONPSettings($1a8,$1a9){
    if($1a8===undefined){$1a8=true;}
    if($1a9===undefined){$1a9="callback";}
    /*Begin dynamic block*/
    if($1a8.equals(true)){
        if($1a9.equals("callback")){
            return null;
        }else {
            return JSONPSettings($1a9);
        }
    }else {
        if($1a9.equals("callback")){
            return JSONPSettings(false);
        }else {
            var $1aa=($1ab=[m$1.Entry("jsonp",false,{Item$Entry:{t:m$1.$_Boolean},Key$Entry:{t:m$1.String}}),m$1.Entry("jsonpCallback",$1a9,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}})].reifyCeylonType({t:'u',l:[{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Boolean},Key$Entry:{t:m$1.String}}},{t:m$1.Entry,a:{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}}]}),m$hr.JSON($1ab));
            var $1ab;
            return JSONPSettings($1aa.toJson());
        }
    }/*End dynamic block*/
}
ex$.createJSONPSettings=createJSONPSettings;
createJSONPSettings.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:JSONPSettings}]},$ps:[{$nm:'jsonp',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[];}},{$nm:'jsonpCallback',$mt:'prm',$def:1,$t:{t:m$1.String},$an:function(){return[];}}],$an:function(){return[m$1.doc("create a new JSONP settings object"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','createJSONPSettings']};};
function JSONPSettingsAbs(jSONPSettingsAbs$){
    $init$JSONPSettingsAbs();
    if(jSONPSettingsAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(jSONPSettingsAbs$);
    return jSONPSettingsAbs$;
}
JSONPSettingsAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettingsAbs']};};
ex$.JSONPSettingsAbs=JSONPSettingsAbs;
function $init$JSONPSettingsAbs(){
    if(JSONPSettingsAbs.$$===undefined){
        m$1.initTypeProto(JSONPSettingsAbs,'com.openswimsoftware.ceylon.js.jquery::JSONPSettingsAbs',m$9f.JSObjectAbs);
        (function(jSONPSettingsAbs$){
            jSONPSettingsAbs$.getIsJsonp=function getIsJsonp(){
                var jSONPSettingsAbs$=this;
                /*Begin dynamic block*/
                if((($1ac=jSONPSettingsAbs$.$_native.jsonp,$1ad=true,($1ac.equals&&$1ac.equals($1ad))||$1ac===$1ad)||($1ae=jSONPSettingsAbs$.$_native.jsonp,$1af=null,($1ae.equals&&!$1ae.equals($1af))||$1ae!==$1af))){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jSONPSettingsAbs$.getIsJsonp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:JSONPSettingsAbs,$an:function(){return[m$1.doc("is this the request JSONP"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettingsAbs','$m','getIsJsonp']};};
            jSONPSettingsAbs$.setIsJsonp=function setIsJsonp($1ag){
                var jSONPSettingsAbs$=this;
                /*Begin dynamic block*/
                jSONPSettingsAbs$.$_native.jsonp=$1ag;
                /*End dynamic block*/
            };jSONPSettingsAbs$.setIsJsonp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'jsonp',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:JSONPSettingsAbs,$an:function(){return[m$1.doc("set that the request is JSONP"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettingsAbs','$m','setIsJsonp']};};
            jSONPSettingsAbs$.getCallback=function getCallback(){
                var jSONPSettingsAbs$=this;
                /*Begin dynamic block*/
                var $1ah=jSONPSettingsAbs$.$_native.callback;
                if(($1ai=$1ah,$1aj=null,($1ai.equals&&!$1ai.equals($1aj))||$1ai!==$1aj)){
                    return m$9f.JSString(jSONPSettingsAbs$.$_native.callback);
                }else {
                    return null;
                }/*End dynamic block*/
            };jSONPSettingsAbs$.getCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[],$cont:JSONPSettingsAbs,$an:function(){return[m$1.doc("returns JSONP callback"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettingsAbs','$m','getCallback']};};
            jSONPSettingsAbs$.setCallback=function setCallback($1ak){
                var jSONPSettingsAbs$=this;
                /*Begin dynamic block*/
                jSONPSettingsAbs$.$_native.callback=$1ak.valueOf();
                /*End dynamic block*/
            };jSONPSettingsAbs$.setCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JSONPSettingsAbs,$an:function(){return[m$1.doc("sets JSONP callback"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettingsAbs','$m','setCallback']};};
        })(JSONPSettingsAbs.$$.prototype);
    }
    return JSONPSettingsAbs;
}
ex$.$init$JSONPSettingsAbs=$init$JSONPSettingsAbs;
$init$JSONPSettingsAbs();
function JSONPSettings($1al,jSONPSettings$){
    $init$JSONPSettings();
    if(jSONPSettings$===undefined)jSONPSettings$=new JSONPSettings.$$;
    jSONPSettings$.$1al_=$1al;
    JSONPSettingsAbs(jSONPSettings$);
    jSONPSettings$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSONPSettings,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettings','$at','native']};}};
    /*Begin dynamic block*/
    jSONPSettings$.$_native=jSONPSettings$.$1al;/*End dynamic block*/
    return jSONPSettings$;
}
JSONPSettings.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JSONPSettingsAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("settings for JSONP request"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettings']};};
ex$.JSONPSettings=JSONPSettings;
function $init$JSONPSettings(){
    if(JSONPSettings.$$===undefined){
        m$1.initTypeProto(JSONPSettings,'com.openswimsoftware.ceylon.js.jquery::JSONPSettings',$init$JSONPSettingsAbs());
        (function(jSONPSettings$){
            m$1.atr$(jSONPSettings$,'$1al',function(){return this.$1al_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSONPSettings,d:['com.openswimsoftware.ceylon.js.jquery','JSONPSettings','$at','n$7qzp4n']};});
        })(JSONPSettings.$$.prototype);
    }
    return JSONPSettings;
}
ex$.$init$JSONPSettings=$init$JSONPSettings;
$init$JSONPSettings();
function JQueryAjaxSettingsAbs(jQueryAjaxSettingsAbs$){
    $init$JQueryAjaxSettingsAbs();
    if(jQueryAjaxSettingsAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(jQueryAjaxSettingsAbs$);
    return jQueryAjaxSettingsAbs$;
}
JQueryAjaxSettingsAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs']};};
ex$.JQueryAjaxSettingsAbs=JQueryAjaxSettingsAbs;
function $init$JQueryAjaxSettingsAbs(){
    if(JQueryAjaxSettingsAbs.$$===undefined){
        m$1.initTypeProto(JQueryAjaxSettingsAbs,'com.openswimsoftware.ceylon.js.jquery::JQueryAjaxSettingsAbs',m$9f.JSObjectAbs);
        (function(jQueryAjaxSettingsAbs$){
            jQueryAjaxSettingsAbs$.getAccepts=function getAccepts(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                return m$1.tpl$([],undefined,m$1.Comprehension(function(){
                    var $1am=jQueryAjaxSettingsAbs$.$_native.accepts.iterator();
                    var $1an,$1ao;
                    var next$1ao=function(){
                        var $1ap;
                        if(($1ap=$1am.next())!==m$1.getFinished()){
                            $1an=$1ap.key;
                            $1ao=$1ap.item;
                            return $1ap;
                        }
                        $1ao=undefined;
                        return m$1.getFinished();
                    }
                    next$1ao();
                    return function(){
                        if($1ao!==undefined){
                            var $1aq=$1an;
                            var $1ar=$1ao;
                            var $1as=m$1.Entry(m$9f.JSString($1aq),m$9f.JSString($1ar),{Item$Entry:{t:m$9f.JSString},Key$Entry:{t:m$9f.JSString}});
                            next$1ao();
                            return $1as;
                        }
                        return m$1.getFinished();
                    }
                },{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.JSString},Key$Entry:{t:m$9f.JSString}}},Absent$Iterable:{t:m$1.Null}}));
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getAccepts.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.JSString},Key$Entry:{t:m$9f.JSString}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the data types the request accepts"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getAccepts']};};
            jQueryAjaxSettingsAbs$.setAccepts=function setAccepts($1at){
                var jQueryAjaxSettingsAbs$=this;
                if($1at===undefined){$1at=m$1.getEmpty();}
                var $1au=m$9f.createJSObject();
                var $1aw;for(var $1av=$1at.iterator();($1aw=$1av.next())!==m$1.getFinished();){
                    var $1ax=$1aw.key,$1ay=$1aw.item;
                    /*Begin dynamic block*/
                    m$9f.objectDefineProperty($1au,$1ax,m$9f.DataDescriptor(true,false,true,true,$1ay.$_native));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.accepts=$1au.$_native;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setAccepts.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'accepts',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.JSString},Key$Entry:{t:m$9f.JSString}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the data types the request accepts"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setAccepts']};};
            jQueryAjaxSettingsAbs$.getAsync=function getAsync(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(jQueryAjaxSettingsAbs$.$_native.async){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getAsync.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns if the AJAX request is exectuted asynchronously"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getAsync']};};
            jQueryAjaxSettingsAbs$.setAsync=function setAsync($1az){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.async=$1az;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setAsync.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'async',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets if the AJAX request is exectuted asynchronously"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setAsync']};};
            jQueryAjaxSettingsAbs$.getBeforeSend=function getBeforeSend(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                return ($1b0=jQueryAjaxSettingsAbs$.$_native.beforeSend=(typeof beforeSend==='undefined'||beforeSend===null?m$1.throwexc(m$1.Exception("Undefined or null reference: beforeSend"),'129:30-129:39','jqueryajaxsettings.ceylon'):beforeSend),m$1.is$($1b0,{t:m$1.Anything})?$1b0:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'129:10-129:39','jqueryajaxsettings.ceylon'));
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getBeforeSend.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns Boolean(JQXHR, JQueryAjaxSettings)? which is a handler called before the request is sent"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getBeforeSend']};};
            jQueryAjaxSettingsAbs$.setBeforeSend=function setBeforeSend($1b1){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.beforeSend=$1b1;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setBeforeSend.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'beforeSend',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns set a handler Boolean(JQXHR, JQueryAjaxSettings) before the request is sent"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setBeforeSend']};};
            jQueryAjaxSettingsAbs$.getCache=function getCache(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(jQueryAjaxSettingsAbs$.$_native.cache){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getCache.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns if the reqest will be cached by the browser"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getCache']};};
            jQueryAjaxSettingsAbs$.setCache=function setCache($1b2){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.cache=$1b2;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setCache.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'cache',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets if the reqest should be cached by the browser"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setCache']};};
            jQueryAjaxSettingsAbs$.getComplete=function getComplete(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                var $1b3=jQueryAjaxSettingsAbs$.$_native.complete;
                if(($1b4=$1b3,$1b5=null,($1b4.equals&&$1b4.equals($1b5))||$1b4===$1b5)){
                    return null;
                }else {
                    if(m$9f.arrayIsArray($1b3)){
                        return m$9f.JSArray($1b3);
                    }else {
                        return ($1b6=m$9f.createJSArray($1b3),m$1.is$($1b6,{t:m$1.Anything})?$1b6:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'167:11-167:33','jqueryajaxsettings.ceylon'));
                    }
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getComplete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns array of handers Anything(JQXHR, String) for when the request is complete"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getComplete']};};
            jQueryAjaxSettingsAbs$.setComplete=function setComplete($1b7){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.complete=$1b7;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setComplete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'complete',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets array of handers Anything(JQXHR, String) for when the request is complete"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setComplete']};};
            jQueryAjaxSettingsAbs$.getContents=function getContents(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                return m$1.tpl$([],undefined,m$1.Comprehension(function(){
                    var $1b8=jQueryAjaxSettingsAbs$.$_native.contents.iterator();
                    var $1b9,$1ba;
                    var next$1ba=function(){
                        var $1bb;
                        if(($1bb=$1b8.next())!==m$1.getFinished()){
                            $1b9=$1bb.key;
                            $1ba=$1bb.item;
                            return $1bb;
                        }
                        $1ba=undefined;
                        return m$1.getFinished();
                    }
                    next$1ba();
                    return function(){
                        if($1ba!==undefined){
                            var $1bc=$1b9;
                            var $1bd=$1ba;
                            var $1be=m$1.Entry(m$9f.JSString($1bc),m$9f.RegExp($1bd),{Item$Entry:{t:m$9f.RegExp},Key$Entry:{t:m$9f.JSString}});
                            next$1ba();
                            return $1be;
                        }
                        return m$1.getFinished();
                    }
                },{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.RegExp},Key$Entry:{t:m$9f.JSString}}},Absent$Iterable:{t:m$1.Null}}));
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getContents.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.RegExp},Key$Entry:{t:m$9f.JSString}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("gets a set of content types paired with regular expression pairs that determine how jQuery will parse the response"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContents']};};
            jQueryAjaxSettingsAbs$.setContents=function setContents($1bf){
                var jQueryAjaxSettingsAbs$=this;
                if($1bf===undefined){$1bf=m$1.getEmpty();}
                var $1bg=m$9f.createJSObject();
                var $1bi;for(var $1bh=$1bf.iterator();($1bi=$1bh.next())!==m$1.getFinished();){
                    var $1bj=$1bi.key,$1bk=$1bi.item;
                    /*Begin dynamic block*/
                    m$9f.objectDefineProperty($1bg,$1bj,m$9f.DataDescriptor(true,false,true,true,$1bk.$_native));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.contents=$1bg;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setContents.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'contents',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.RegExp},Key$Entry:{t:m$9f.JSString}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets a set of content types paired with regular expression pairs that determine how jQuery will parse the response"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContents']};};
            jQueryAjaxSettingsAbs$.getContentType=function getContentType(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(($1bl=jQueryAjaxSettingsAbs$.$_native.contentType,$1bm=null,($1bl.equals&&!$1bl.equals($1bm))||$1bl!==$1bm)){
                    return m$9f.JSString(jQueryAjaxSettingsAbs$.$_native.contentType);
                }else {
                    return null;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getContentType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the content type of the data being sent in the request"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContentType']};};
            jQueryAjaxSettingsAbs$.setContentType=function setContentType($1bn){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.contentType=$1bn.valueOf();
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setContentType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'contentType',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the content type of the data being sent in the request"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContentType']};};
            jQueryAjaxSettingsAbs$.getContext=function getContext(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(($1bo=jQueryAjaxSettingsAbs$.$_native.context,$1bp=null,($1bo.equals&&!$1bo.equals($1bp))||$1bo!==$1bp)){
                    return m$9f.JSObject(jQueryAjaxSettingsAbs$.$_native.context);
                }else {
                    return null;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getContext.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSObject}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the context object in which the request is being made"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContext']};};
            jQueryAjaxSettingsAbs$.setContext=function setContext($1bq){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.context=$1bq.$_native;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setContext.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'context',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the context object in which the request is being made"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContext']};};
            jQueryAjaxSettingsAbs$.getConverters=function getConverters(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                return m$1.tpl$([],undefined,m$1.Comprehension(function(){
                    var $1br=jQueryAjaxSettingsAbs$.$_native.converters.iterator();
                    var $1bs,$1bt;
                    var next$1bt=function(){
                        var $1bu;
                        if(($1bu=$1br.next())!==m$1.getFinished()){
                            $1bs=$1bu.key;
                            $1bt=$1bu.item;
                            return $1bu;
                        }
                        $1bt=undefined;
                        return m$1.getFinished();
                    }
                    next$1bt();
                    return function(){
                        if($1bt!==undefined){
                            var $1bv=$1bs;
                            var $1bw=$1bt;
                            var $1bx=m$1.Entry(m$9f.JSString($1bv),m$9f.JSObject($1bw),{Item$Entry:{t:m$9f.JSObject},Key$Entry:{t:m$9f.JSString}});
                            next$1bt();
                            return $1bx;
                        }
                        return m$1.getFinished();
                    }
                },{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.JSObject},Key$Entry:{t:m$9f.JSString}}},Absent$Iterable:{t:m$1.Null}}));
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getConverters.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.JSObject},Key$Entry:{t:m$9f.JSString}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns data type converters"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getConverters']};};
            jQueryAjaxSettingsAbs$.setConverters=function setConverters($1by){
                var jQueryAjaxSettingsAbs$=this;
                if($1by===undefined){$1by=m$1.getEmpty();}
                var $1bz=m$9f.createJSObject();
                var $1c1;for(var $1c0=$1by.iterator();($1c1=$1c0.next())!==m$1.getFinished();){
                    var $1c2=$1c1.key,$1c3=$1c1.item;
                    /*Begin dynamic block*/
                    m$9f.objectDefineProperty($1bz,$1c2,m$9f.DataDescriptor(true,false,true,true,$1c3.$_native));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.converters=$1bz.$_native;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setConverters.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'converters',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.JSObject},Key$Entry:{t:m$9f.JSString}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets data type converters"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setConverters']};};
            jQueryAjaxSettingsAbs$.getCrossDomain=function getCrossDomain(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(jQueryAjaxSettingsAbs$.$_native.crossDomain){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getCrossDomain.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("is the request cross domain"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getCrossDomain']};};
            jQueryAjaxSettingsAbs$.setCrossDomain=function setCrossDomain($1c4){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.crossDomain=$1c4;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setCrossDomain.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'crossDomain',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets if the request is cross domain"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setCrossDomain']};};
            jQueryAjaxSettingsAbs$.getData=function getData(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(jQueryAjaxSettingsAbs$.$_native.data.instanceof((typeof String==='undefined'||String===null?m$1.throwexc(m$1.Exception("Undefined or null reference: String"),'276:32-276:37','jqueryajaxsettings.ceylon'):String))){
                    return m$9f.JSString(jQueryAjaxSettingsAbs$.$_native.data);
                }else {
                    if(($1c5=jQueryAjaxSettingsAbs$.$_native.data,$1c6=null,($1c5.equals&&!$1c5.equals($1c6))||$1c5!==$1c6)){
                        return m$9f.JSObject(jQueryAjaxSettingsAbs$.$_native.data);
                    }else {
                        return null;
                    }
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$9f.JSString},{t:'u',l:[{t:m$1.Null},{t:m$9f.JSObject}]}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the data to be sent to the server"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getData']};};
            jQueryAjaxSettingsAbs$.setData=function setData($1c7){
                var jQueryAjaxSettingsAbs$=this;
                var $1c8=$1c7;
                if(m$1.is$($1c7,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    jQueryAjaxSettingsAbs$.$_native.data=$1c8.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($1c7,{t:m$9f.JSObject})) {
                    /*Begin dynamic block*/
                    jQueryAjaxSettingsAbs$.$_native.data=$1c8.$_native;
                    /*End dynamic block*/
                }
            };jQueryAjaxSettingsAbs$.setData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSObject}]},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the data to be sent to the server"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setData']};};
            jQueryAjaxSettingsAbs$.getDataFilter=function getDataFilter(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                return ($1c9=jQueryAjaxSettingsAbs$.$_native.dataFilter,m$1.is$($1c9,{t:m$1.Anything})?$1c9:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'304:10-304:26','jqueryajaxsettings.ceylon'));
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getDataFilter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns data filter Anything(String, String)?"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getDataFilter']};};
            jQueryAjaxSettingsAbs$.setDataFilter=function setDataFilter($1ca){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.dataFilter=$1ca;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setDataFilter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'datafilter',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.String}},{$t:{t:m$1.String}}]}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the data fiter"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setDataFilter']};};
            jQueryAjaxSettingsAbs$.getDataType=function getDataType(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(($1cb=jQueryAjaxSettingsAbs$.$_native.dataType,$1cc=null,($1cb.equals&&!$1cb.equals($1cc))||$1cb!==$1cc)){
                    return m$9f.JSString(jQueryAjaxSettingsAbs$.$_native.dataType);
                }else {
                    return null;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getDataType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the data type"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getDataType']};};
            jQueryAjaxSettingsAbs$.setDataType=function setDataType($1cd){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.dataType=$1cd.valueOf();
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setDataType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'dataType',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the data type"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setDataType']};};
            jQueryAjaxSettingsAbs$.getError=function getError(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(m$9f.arrayIsArray(jQueryAjaxSettingsAbs$.$_native.error)){
                    return m$9f.JSArray(jQueryAjaxSettingsAbs$.$_native.error);
                }else {
                    if(($1ce=jQueryAjaxSettingsAbs$.$_native.error,$1cf=null,($1ce.equals&&!$1ce.equals($1cf))||$1ce!==$1cf)){
                        return ($1cg=m$9f.createJSArray(jQueryAjaxSettingsAbs$.$_native.error),m$1.is$($1cg,{t:m$1.Anything})?$1cg:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'339:11-339:37','jqueryajaxsettings.ceylon'));
                    }else {
                        return null;
                    }
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getError.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns an array of error handlers Anything(JQXHR, String?, String?)"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getError']};};
            jQueryAjaxSettingsAbs$.setError=function setError($1ch){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.dataFilter=$1ch;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setError.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'datafilter',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets an array of error handlers Anything(JQXHR, String?, String?)"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setError']};};
            jQueryAjaxSettingsAbs$.getGlobal=function getGlobal(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(jQueryAjaxSettingsAbs$.$_native.global){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getGlobal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns if global ajax events will be triggered for this class"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getGlobal']};};
            jQueryAjaxSettingsAbs$.setGlobal=function setGlobal($1ci){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.global=$1ci;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setGlobal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'global',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets if global ajax events will be triggered for this class"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setGlobal']};};
            jQueryAjaxSettingsAbs$.getHeaders=function getHeaders(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                return m$1.tpl$([],undefined,m$1.Comprehension(function(){
                    var $1cj=jQueryAjaxSettingsAbs$.$_native.headers.iterator();
                    var $1ck,$1cl;
                    var next$1cl=function(){
                        var $1cm;
                        if(($1cm=$1cj.next())!==m$1.getFinished()){
                            $1ck=$1cm.key;
                            $1cl=$1cm.item;
                            return $1cm;
                        }
                        $1cl=undefined;
                        return m$1.getFinished();
                    }
                    next$1cl();
                    return function(){
                        if($1cl!==undefined){
                            var $1cn=$1ck;
                            var $1co=$1cl;
                            var $1cp=m$1.Entry(m$9f.JSString($1cn),m$9f.JSString($1co),{Item$Entry:{t:m$9f.JSString},Key$Entry:{t:m$9f.JSString}});
                            next$1cl();
                            return $1cp;
                        }
                        return m$1.getFinished();
                    }
                },{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.JSString},Key$Entry:{t:m$9f.JSString}}},Absent$Iterable:{t:m$1.Null}}));
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getHeaders.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.JSString},Key$Entry:{t:m$9f.JSString}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the request headers"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getHeaders']};};
            jQueryAjaxSettingsAbs$.setHeaders=function setHeaders($1cq){
                var jQueryAjaxSettingsAbs$=this;
                var $1cr=m$9f.createJSObject();
                var $1ct;for(var $1cs=$1cq.iterator();($1ct=$1cs.next())!==m$1.getFinished();){
                    var $1cu=$1ct.key,$1cv=$1ct.item;
                    /*Begin dynamic block*/
                    m$9f.objectDefineProperty($1cr,$1cu,m$9f.DataDescriptor(true,false,true,true,$1cv.$_native));
                    /*End dynamic block*/
                }
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.headers=$1cr.$_native;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setHeaders.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'headers',$mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.JSString},Key$Entry:{t:m$9f.JSString}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the request headers"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setHeaders']};};
            jQueryAjaxSettingsAbs$.getIfModified=function getIfModified(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(jQueryAjaxSettingsAbs$.$_native.ifModified){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getIfModified.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns if the request should only be successful if the response if diffrent then the last time the request was made"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getIfModified']};};
            jQueryAjaxSettingsAbs$.setIfModified=function setIfModified($1cw){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.ifModified=$1cw;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setIfModified.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'modified',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets if the request should only be successful if the response if diffrent then the last time the request was made"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setIfModified']};};
            jQueryAjaxSettingsAbs$.getIsLocal=function getIsLocal(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(jQueryAjaxSettingsAbs$.$_native.isLocal){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getIsLocal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns if the request is being made agains the local filesystem"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getIsLocal']};};
            jQueryAjaxSettingsAbs$.setIsLocal=function setIsLocal($1cx){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.isLocal=$1cx;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setIsLocal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'local',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets if the request is being made agains the local filesystem"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setIsLocal']};};
            jQueryAjaxSettingsAbs$.getJsonp=function getJsonp(){
                var jQueryAjaxSettingsAbs$=this;
                var $1cy;
                /*Begin dynamic block*/
                $1cy=m$9f.JSObject(jQueryAjaxSettingsAbs$.$_native.jsonp);if(($1cz=jQueryAjaxSettingsAbs$.$_native.jsonp,$1d0=null,($1cz.equals&&$1cz.equals($1d0))||$1cz===$1d0)){
                    return null;
                }else {
                    if(($1cy.hasOwnProperty("jsonp")||$1cy.hasOwnProperty("jsonpCallback"))){
                        return JSONPSettings($1cy.$_native);
                    }else {
                        if($1cy.$_native.instanceof((typeof String==='undefined'||String===null?m$1.throwexc(m$1.Exception("Undefined or null reference: String"),'436:40-436:45','jqueryajaxsettings.ceylon'):String))){
                            return m$9f.JSString($1cy.$_native);
                        }else {
                            if($1cy.$_native){
                                return true;
                            }else {
                                return false;
                            }
                        }
                    }
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getJsonp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:JSONPSettings},{t:m$9f.JSString},{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the request JSONP settings"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getJsonp']};};
            jQueryAjaxSettingsAbs$.setJsonp=function setJsonp($1d1){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.jsonp=$1d1.$_native;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setJsonp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'jsonp',$mt:'prm',$t:{t:JSONPSettings},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the request JSONP settings"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setJsonp']};};
            jQueryAjaxSettingsAbs$.getJsonpCallback=function getJsonpCallback(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                return ($1d2=jQueryAjaxSettingsAbs$.$_native.jsonpCallback,m$1.is$($1d2,{t:m$1.Anything})?$1d2:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'458:10-458:29','jqueryajaxsettings.ceylon'));
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getJsonpCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the JSONP callback String|String()?"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getJsonpCallback']};};
            jQueryAjaxSettingsAbs$.setJsonpCallback=function setJsonpCallback($1d3){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.jsonpCallback=$1d3;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setJsonpCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$1.Callable,a:{Return$Callable:{t:m$1.String},Arguments$Callable:{t:m$1.Empty}}}]},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the JSONP callback String|String()?"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setJsonpCallback']};};
            jQueryAjaxSettingsAbs$.getMimeType=function getMimeType(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(($1d4=jQueryAjaxSettingsAbs$.$_native.mimeType,$1d5=null,($1d4.equals&&!$1d4.equals($1d5))||$1d4!==$1d5)){
                    return m$9f.JSString(jQueryAjaxSettingsAbs$.$_native.mimeType);
                }else {
                    return null;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getMimeType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the request result mime type"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getMimeType']};};
            jQueryAjaxSettingsAbs$.setMimeType=function setMimeType($1d6){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.mimeType=$1d6.valueOf();
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setMimeType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'mimeType',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the request result mime type"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setMimeType']};};
            jQueryAjaxSettingsAbs$.getPassword=function getPassword(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(($1d7=jQueryAjaxSettingsAbs$.$_native.password,$1d8=null,($1d7.equals&&!$1d7.equals($1d8))||$1d7!==$1d8)){
                    return m$9f.JSString(jQueryAjaxSettingsAbs$.$_native.password);
                }else {
                    return null;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getPassword.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the request password"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getPassword']};};
            jQueryAjaxSettingsAbs$.setPassword=function setPassword($1d9){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.password=$1d9.valueOf();
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setPassword.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'password',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the request password"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setPassword']};};
            jQueryAjaxSettingsAbs$.getProcessData=function getProcessData(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(jQueryAjaxSettingsAbs$.$_native.processData){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getProcessData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns if the data will be processed before being sent to the server"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getProcessData']};};
            jQueryAjaxSettingsAbs$.setProcessData=function setProcessData($1da){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.processData=$1da;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setProcessData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'processData',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets if the data will be processed before being sent to the server"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setProcessData']};};
            jQueryAjaxSettingsAbs$.getScriptCharset=function getScriptCharset(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(($1db=jQueryAjaxSettingsAbs$.$_native.scriptCharset,$1dc=null,($1db.equals&&!$1db.equals($1dc))||$1db!==$1dc)){
                    return m$9f.JSString(jQueryAjaxSettingsAbs$.$_native.scriptCharset);
                }else {
                    return null;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getScriptCharset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the script charset (only if getting a script or making a JSONP request)"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getScriptCharset']};};
            jQueryAjaxSettingsAbs$.setScriptCharset=function setScriptCharset($1dd){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.scriptCharset=$1dd.valueOf();
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setScriptCharset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'scriptCharset',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the script charset (only if getting a script or making a JSONP request)"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setScriptCharset']};};
            jQueryAjaxSettingsAbs$.getStatusCode=function getStatusCode(){
                /*Begin dynamic block*/
                return ($1de=(typeof statusNative==='undefined'||statusNative===null?m$1.throwexc(m$1.Exception("Undefined or null reference: statusNative"),'544:10-544:21','jqueryajaxsettings.ceylon'):statusNative),m$1.is$($1de,{t:m$1.Anything})?$1de:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'544:10-544:21','jqueryajaxsettings.ceylon'));
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getStatusCode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns a object JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getStatusCode']};};
            jQueryAjaxSettingsAbs$.setStatusCode=function setStatusCode($1df){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.statusCode=$1df;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setStatusCode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'statusCodes',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets a set of callbacks JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setStatusCode']};};
            jQueryAjaxSettingsAbs$.getSuccess=function getSuccess(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(($1dg=jQueryAjaxSettingsAbs$.$_native.success,$1dh=null,($1dg.equals&&!$1dg.equals($1dh))||$1dg!==$1dh)){
                    return m$9f.JSArray(jQueryAjaxSettingsAbs$.$_native.success);
                }else {
                    return null;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getSuccess.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns array of handers called Anything(Anything, String, JQXHR) upon a successful request"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getSuccess']};};
            jQueryAjaxSettingsAbs$.setSuccess=function setSuccess($1di){
                var jQueryAjaxSettingsAbs$=this;
                if($1di===undefined){$1di=m$1.getEmpty();}
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.success=$1di;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setSuccess.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'success',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}},{$t:{t:m$1.String}},{$t:{t:JQXHR}}]}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets array of handers called Anything(Anything, String, JQXHR) upon a successful request"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setSuccess']};};
            jQueryAjaxSettingsAbs$.getTimeout=function getTimeout(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(($1dj=jQueryAjaxSettingsAbs$.$_native.timeout,$1dk=null,($1dj.equals&&!$1dj.equals($1dk))||$1dj!==$1dk)){
                    return m$9f.JSNumber(jQueryAjaxSettingsAbs$.$_native.timeout);
                }else {
                    return null;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getTimeout.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSNumber}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the timeout for the request in milliseconds"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getTimeout']};};
            jQueryAjaxSettingsAbs$.setTimeout=function setTimeout($1dl){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.timeout=$1dl;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setTimeout.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'timeout',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the timeout for the request in milliseconds"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setTimeout']};};
            jQueryAjaxSettingsAbs$.getTraditional=function getTraditional(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(jQueryAjaxSettingsAbs$.$_native.traditional){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getTraditional.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns if the request will use the traditional style of param serialization"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getTraditional']};};
            jQueryAjaxSettingsAbs$.setTraditional=function setTraditional($1dm){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.traditional=$1dm;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setTraditional.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'traditional',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets if the request will use the traditional style of param serialization"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setTraditional']};};
            jQueryAjaxSettingsAbs$.getType=function getType(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(($1dn=jQueryAjaxSettingsAbs$.$_native.type,$1do=null,($1dn.equals&&!$1dn.equals($1do))||$1dn!==$1do)){
                    return m$9f.JSString(jQueryAjaxSettingsAbs$.$_native.type);
                }else {
                    return null;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns if the request will use the traditional style of param serialization"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getType']};};
            jQueryAjaxSettingsAbs$.setType=function setType($1dp){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.type=$1dp.valueOf();
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the request type usually GET or POST"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setType']};};
            jQueryAjaxSettingsAbs$.getUrl=function getUrl(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(($1dq=jQueryAjaxSettingsAbs$.$_native.url,$1dr=null,($1dq.equals&&!$1dq.equals($1dr))||$1dq!==$1dr)){
                    return m$9f.JSString(jQueryAjaxSettingsAbs$.$_native.url);
                }else {
                    return null;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getUrl.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the request URL"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getUrl']};};
            jQueryAjaxSettingsAbs$.setUrl=function setUrl($1ds){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.url=$1ds.valueOf();
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setUrl.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'url',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the request URL"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setUrl']};};
            jQueryAjaxSettingsAbs$.getUsername=function getUsername(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                if(($1dt=jQueryAjaxSettingsAbs$.$_native.username,$1du=null,($1dt.equals&&!$1dt.equals($1du))||$1dt!==$1du)){
                    return m$9f.JSString(jQueryAjaxSettingsAbs$.$_native.username);
                }else {
                    return null;
                }/*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getUsername.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the request username"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getUsername']};};
            jQueryAjaxSettingsAbs$.setUsername=function setUsername($1dv){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.username=$1dv.valueOf();
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setUsername.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'username',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the request username"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setUsername']};};
            jQueryAjaxSettingsAbs$.getXhr=function getXhr(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                return ($1dw=jQueryAjaxSettingsAbs$.$_native.xhr,m$1.is$($1dw,{t:m$1.Anything})?$1dw:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'666:10-666:19','jqueryajaxsettings.ceylon'));
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getXhr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the underlying XHR function"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getXhr']};};
            jQueryAjaxSettingsAbs$.setXhr=function setXhr($1dx){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.xhr=$1dx;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setXhr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'xhr',$mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the underlying XHR function"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setXhr']};};
            jQueryAjaxSettingsAbs$.getXhrFields=function getXhrFields(){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSObject(jQueryAjaxSettingsAbs$.$_native.xhrFields);
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.getXhrFields.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSObject},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("returns the base XHR settings"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getXhrFields']};};
            jQueryAjaxSettingsAbs$.setXhrFields=function setXhrFields($1dy){
                var jQueryAjaxSettingsAbs$=this;
                /*Begin dynamic block*/
                jQueryAjaxSettingsAbs$.$_native.xhrFields=(typeof xhrNative==='undefined'||xhrNative===null?m$1.throwexc(m$1.Exception("Undefined or null reference: xhrNative"),'687:22-687:30','jqueryajaxsettings.ceylon'):xhrNative).native;
                /*End dynamic block*/
            };jQueryAjaxSettingsAbs$.setXhrFields.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'xhrFields',$mt:'prm',$t:{t:m$9f.JSObject},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[m$1.doc("sets the base XHR settings"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setXhrFields']};};
        })(JQueryAjaxSettingsAbs.$$.prototype);
    }
    return JQueryAjaxSettingsAbs;
}
ex$.$init$JQueryAjaxSettingsAbs=$init$JQueryAjaxSettingsAbs;
$init$JQueryAjaxSettingsAbs();
function JQueryAjaxSettings($1dz,jQueryAjaxSettings$){
    $init$JQueryAjaxSettings();
    if(jQueryAjaxSettings$===undefined)jQueryAjaxSettings$=new JQueryAjaxSettings.$$;
    jQueryAjaxSettings$.$1dz_=$1dz;
    JQueryAjaxSettingsAbs(jQueryAjaxSettings$);
    jQueryAjaxSettings$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettings,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettings','$at','native']};}};
    /*Begin dynamic block*/
    jQueryAjaxSettings$.$_native=jQueryAjaxSettings$.$1dz;/*End dynamic block*/
    return jQueryAjaxSettings$;
}
JQueryAjaxSettings.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JQueryAjaxSettingsAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("settings for a JQuery AJAX request"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettings']};};
ex$.JQueryAjaxSettings=JQueryAjaxSettings;
function $init$JQueryAjaxSettings(){
    if(JQueryAjaxSettings.$$===undefined){
        m$1.initTypeProto(JQueryAjaxSettings,'com.openswimsoftware.ceylon.js.jquery::JQueryAjaxSettings',$init$JQueryAjaxSettingsAbs());
        (function(jQueryAjaxSettings$){
            m$1.atr$(jQueryAjaxSettings$,'$1dz',function(){return this.$1dz_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettings,d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettings','$at','n$w4i659']};});
        })(JQueryAjaxSettings.$$.prototype);
    }
    return JQueryAjaxSettings;
}
ex$.$init$JQueryAjaxSettings=$init$JQueryAjaxSettings;
$init$JQueryAjaxSettings();
function JSONPOptions(jsonp,jsonpCallback,jSONPOptions$){
    $init$JSONPOptions();
    if(jSONPOptions$===undefined)jSONPOptions$=new JSONPOptions.$$;
    if(jsonp===undefined){jsonp=true;}
    jSONPOptions$.jsonp_=jsonp;
    if(jsonpCallback===undefined){jsonpCallback="callback";}
    jSONPOptions$.jsonpCallback_=jsonpCallback;
    return jSONPOptions$;
}
JSONPOptions.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'jsonp',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared()];}},{$nm:'jsonpCallback',$mt:'prm',$def:1,$t:{t:m$1.String},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.doc("settings for JSONP in request builder"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPOptions']};};
ex$.JSONPOptions=JSONPOptions;
function $init$JSONPOptions(){
    if(JSONPOptions.$$===undefined){
        m$1.initTypeProto(JSONPOptions,'com.openswimsoftware.ceylon.js.jquery::JSONPOptions',m$1.Basic);
        (function(jSONPOptions$){
            m$1.atr$(jSONPOptions$,'jsonp',function(){return this.jsonp_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:JSONPOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPOptions','$at','jsonp']};});
            m$1.atr$(jSONPOptions$,'jsonpCallback',function(){return this.jsonpCallback_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:JSONPOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JSONPOptions','$at','jsonpCallback']};});
        })(JSONPOptions.$$.prototype);
    }
    return JSONPOptions;
}
ex$.$init$JSONPOptions=$init$JSONPOptions;
$init$JSONPOptions();
function JQueryAjaxSettingsBuilder(async,cache,contentType,context,crossDomain,data,dataType,global,ifModified,isLocal,jsonp,jsonpCallback,mimeType,password,processData,scriptCharset,timeout,traditional,type,url,username,jQueryAjaxSettingsBuilder$){
    $init$JQueryAjaxSettingsBuilder();
    if(jQueryAjaxSettingsBuilder$===undefined)jQueryAjaxSettingsBuilder$=new JQueryAjaxSettingsBuilder.$$;
    if(async===undefined){async=true;}
    jQueryAjaxSettingsBuilder$.async_=async;
    if(cache===undefined){cache=null;}
    jQueryAjaxSettingsBuilder$.cache_=cache;
    if(contentType===undefined){contentType="application/x-www-form-urlencoded; charset=UTF-8";}
    jQueryAjaxSettingsBuilder$.contentType_=contentType;
    if(context===undefined){context=null;}
    jQueryAjaxSettingsBuilder$.context_=context;
    if(crossDomain===undefined){crossDomain=null;}
    jQueryAjaxSettingsBuilder$.crossDomain_=crossDomain;
    if(data===undefined){data="";}
    jQueryAjaxSettingsBuilder$.data_=data;
    if(dataType===undefined){dataType=m$1.getEmpty();}
    jQueryAjaxSettingsBuilder$.dataType_=dataType;
    if(global===undefined){global=true;}
    jQueryAjaxSettingsBuilder$.global_=global;
    if(ifModified===undefined){ifModified=true;}
    jQueryAjaxSettingsBuilder$.ifModified_=ifModified;
    if(isLocal===undefined){isLocal=null;}
    jQueryAjaxSettingsBuilder$.isLocal_=isLocal;
    if(jsonp===undefined){jsonp=JSONPOptions();}
    jQueryAjaxSettingsBuilder$.jsonp_=jsonp;
    if(jsonpCallback===undefined){jsonpCallback=null;}
    jQueryAjaxSettingsBuilder$.jsonpCallback_=jsonpCallback;
    if(mimeType===undefined){mimeType=null;}
    jQueryAjaxSettingsBuilder$.mimeType_=mimeType;
    if(password===undefined){password=null;}
    jQueryAjaxSettingsBuilder$.password_=password;
    if(processData===undefined){processData=true;}
    jQueryAjaxSettingsBuilder$.processData_=processData;
    if(scriptCharset===undefined){scriptCharset=null;}
    jQueryAjaxSettingsBuilder$.scriptCharset_=scriptCharset;
    if(timeout===undefined){timeout=null;}
    jQueryAjaxSettingsBuilder$.timeout_=timeout;
    if(traditional===undefined){traditional=false;}
    jQueryAjaxSettingsBuilder$.traditional_=traditional;
    if(type===undefined){type="GET";}
    jQueryAjaxSettingsBuilder$.type_=type;
    if(url===undefined){url=null;}
    jQueryAjaxSettingsBuilder$.url_=url;
    if(username===undefined){username=null;}
    jQueryAjaxSettingsBuilder$.username_=username;
    jQueryAjaxSettingsBuilder$.$1e0_=null;
    jQueryAjaxSettingsBuilder$.$prop$getBeforeSend={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("Boolean(JQXHR, JQueryAjaxSettings)? which is a handler called before the request is sent"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','beforeSend']};}};
    jQueryAjaxSettingsBuilder$.$prop$getBeforeSend.get=function(){return beforeSend};
    jQueryAjaxSettingsBuilder$.$1e1_=null;
    jQueryAjaxSettingsBuilder$.$prop$getDataFilter={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("data filter Anything(String, String)?"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataFilter']};}};
    jQueryAjaxSettingsBuilder$.$prop$getDataFilter.get=function(){return dataFilter};
    jQueryAjaxSettingsBuilder$.$1e2_=null;
    jQueryAjaxSettingsBuilder$.$prop$getXhr={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("the underlying XHR function"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhr']};}};
    jQueryAjaxSettingsBuilder$.$prop$getXhr.get=function(){return xhr};
    jQueryAjaxSettingsBuilder$.$1e3_=null;
    jQueryAjaxSettingsBuilder$.$prop$getComplete={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("array of handers Anything(JQXHR, String) for when the request is complete"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','complete']};}};
    jQueryAjaxSettingsBuilder$.$prop$getComplete.get=function(){return complete};
    jQueryAjaxSettingsBuilder$.$1e4_=null;
    jQueryAjaxSettingsBuilder$.$prop$getError={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("array of error handlers Anything(JQXHR, String?, String?)"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','error']};}};
    jQueryAjaxSettingsBuilder$.$prop$getError.get=function(){return error};
    jQueryAjaxSettingsBuilder$.$1e5_=null;
    jQueryAjaxSettingsBuilder$.$prop$getSuccess={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("array of handers called Anything(Anything, String, JQXHR) upon a successful request"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','success']};}};
    jQueryAjaxSettingsBuilder$.$prop$getSuccess.get=function(){return success};
    jQueryAjaxSettingsBuilder$.$1e6_=m$1.getEmpty();
    jQueryAjaxSettingsBuilder$.$prop$getAccepts={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("the data types the request accepts"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','accepts']};}};
    jQueryAjaxSettingsBuilder$.$prop$getAccepts.get=function(){return accepts};
    jQueryAjaxSettingsBuilder$.$1e7_=m$1.getEmpty();
    jQueryAjaxSettingsBuilder$.$prop$getContents={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.RegExp},Key$Entry:{t:m$1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("a set of content types paired with regular expression pairs that determine how jQuery will parse the response"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contents']};}};
    jQueryAjaxSettingsBuilder$.$prop$getContents.get=function(){return contents};
    jQueryAjaxSettingsBuilder$.$1e8_=m$1.getEmpty();
    jQueryAjaxSettingsBuilder$.$prop$getHeaders={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("the request headers"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','headers']};}};
    jQueryAjaxSettingsBuilder$.$prop$getHeaders.get=function(){return headers};
    jQueryAjaxSettingsBuilder$.$1e9_=m$1.getEmpty();
    jQueryAjaxSettingsBuilder$.$prop$getConverters={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.JSObject},Key$Entry:{t:m$1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("data type converters"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','converters']};}};
    jQueryAjaxSettingsBuilder$.$prop$getConverters.get=function(){return converters};
    jQueryAjaxSettingsBuilder$.$1ea_=null;
    jQueryAjaxSettingsBuilder$.$prop$getXhrFields={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("the base XHR settings"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhrFields']};}};
    jQueryAjaxSettingsBuilder$.$prop$getXhrFields.get=function(){return xhrFields};
    jQueryAjaxSettingsBuilder$.$1eb_=m$1.getEmpty();
    jQueryAjaxSettingsBuilder$.$prop$getStatusCode={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("sets a set of callbacks JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','statusCode']};}};
    jQueryAjaxSettingsBuilder$.$prop$getStatusCode.get=function(){return statusCode};
    return jQueryAjaxSettingsBuilder$;
}
JQueryAjaxSettingsBuilder.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'async',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared()];}},{$nm:'cache',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[m$1.shared()];}},{$nm:'contentType',$mt:'prm',$def:1,$t:{t:m$1.String},$an:function(){return[m$1.shared()];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSObject}]},$an:function(){return[m$1.shared()];}},{$nm:'crossDomain',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[m$1.shared()];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSObject}]},$an:function(){return[m$1.shared()];}},{$nm:'dataType',$mt:'prm',$def:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:DataType}}},$an:function(){return[m$1.shared()];}},{$nm:'global',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared()];}},{$nm:'ifModified',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared()];}},{$nm:'isLocal',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[m$1.shared()];}},{$nm:'jsonp',$mt:'prm',$def:1,$t:{t:JSONPOptions},$an:function(){return[m$1.shared()];}},{$nm:'jsonpCallback',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.String},Arguments$Callable:{t:m$1.Empty}}}]}]},$an:function(){return[m$1.shared()];}},{$nm:'mimeType',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[m$1.shared()];}},{$nm:'password',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[m$1.shared()];}},{$nm:'processData',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared()];}},{$nm:'scriptCharset',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[m$1.shared()];}},{$nm:'timeout',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$an:function(){return[m$1.shared()];}},{$nm:'traditional',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared()];}},{$nm:'type',$mt:'prm',$def:1,$t:{t:m$1.String},$an:function(){return[m$1.shared()];}},{$nm:'url',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[m$1.shared()];}},{$nm:'username',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.doc("settings for a JQuery AJAX request"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder']};};
ex$.JQueryAjaxSettingsBuilder=JQueryAjaxSettingsBuilder;
function $init$JQueryAjaxSettingsBuilder(){
    if(JQueryAjaxSettingsBuilder.$$===undefined){
        m$1.initTypeProto(JQueryAjaxSettingsBuilder,'com.openswimsoftware.ceylon.js.jquery::JQueryAjaxSettingsBuilder',m$1.Basic);
        (function(jQueryAjaxSettingsBuilder$){
            m$1.atr$(jQueryAjaxSettingsBuilder$,'beforeSend',function(){return this.$1e0_;},function($1ec){return this.$1e0_=$1ec;},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("Boolean(JQXHR, JQueryAjaxSettings)? which is a handler called before the request is sent"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','beforeSend']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'dataFilter',function(){return this.$1e1_;},function($1ed){return this.$1e1_=$1ed;},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("data filter Anything(String, String)?"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataFilter']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'xhr',function(){return this.$1e2_;},function($1ee){return this.$1e2_=$1ee;},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("the underlying XHR function"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhr']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'complete',function(){return this.$1e3_;},function($1ef){return this.$1e3_=$1ef;},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("array of handers Anything(JQXHR, String) for when the request is complete"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','complete']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'error',function(){return this.$1e4_;},function($1eg){return this.$1e4_=$1eg;},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("array of error handlers Anything(JQXHR, String?, String?)"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','error']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'success',function(){return this.$1e5_;},function($1eh){return this.$1e5_=$1eh;},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("array of handers called Anything(Anything, String, JQXHR) upon a successful request"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','success']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'accepts',function(){return this.$1e6_;},function($1ei){return this.$1e6_=$1ei;},function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("the data types the request accepts"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','accepts']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'contents',function(){return this.$1e7_;},function($1ej){return this.$1e7_=$1ej;},function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.RegExp},Key$Entry:{t:m$1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("a set of content types paired with regular expression pairs that determine how jQuery will parse the response"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contents']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'headers',function(){return this.$1e8_;},function($1ek){return this.$1e8_=$1ek;},function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("the request headers"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','headers']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'converters',function(){return this.$1e9_;},function($1el){return this.$1e9_=$1el;},function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.JSObject},Key$Entry:{t:m$1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("data type converters"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','converters']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'xhrFields',function(){return this.$1ea_;},function($1em){return this.$1ea_=$1em;},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("the base XHR settings"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhrFields']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'statusCode',function(){return this.$1eb_;},function($1en){return this.$1eb_=$1en;},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("sets a set of callbacks JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code"),m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','statusCode']};});
            jQueryAjaxSettingsBuilder$.toNative=function toNative(){
                var jQueryAjaxSettingsBuilder$=this;
                var $1eo;
                /*Begin dynamic block*/
                $1eo=JQueryAjaxSettings((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'53:33-53:38','jqueryajaxsettingsbuilder.ceylon'):Object));/*End dynamic block*/
                var $1ep;
                /*Begin dynamic block*/
                $1ep=m$1.tpl$([],undefined,m$1.Comprehension(function(){
                    var $1eq=jQueryAjaxSettingsBuilder$.accepts.iterator();
                    var $1er,$1es;
                    var next$1es=function(){
                        var $1et;
                        if(($1et=$1eq.next())!==m$1.getFinished()){
                            $1er=$1et.key;
                            $1es=$1et.item;
                            return $1et;
                        }
                        $1es=undefined;
                        return m$1.getFinished();
                    }
                    next$1es();
                    return function(){
                        if($1es!==undefined){
                            var $1eu=$1er;
                            var $1ev=$1es;
                            var $1ew=m$1.Entry(($1ex=m$9f.createJSString($1eu),m$1.is$($1ex,{/*NO PARENT*/t:m$1.Anything})?$1ex:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'57:74-57:92','jqueryajaxsettingsbuilder.ceylon')),($1ey=m$9f.createJSString($1ev),m$1.is$($1ey,{/*NO PARENT*/t:m$1.Anything})?$1ey:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'57:95-57:113','jqueryajaxsettingsbuilder.ceylon')),{Item$Entry:{t:m$9f.JSString},Key$Entry:{t:m$9f.JSString}});
                            next$1es();
                            return $1ew;
                        }
                        return m$1.getFinished();
                    }
                },{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.JSString},Key$Entry:{t:m$9f.JSString}}},Absent$Iterable:{t:m$1.Null}}));/*End dynamic block*/
                $1eo.setAccepts($1ep);
                $1eo.setAsync(jQueryAjaxSettingsBuilder$.async);
                /*Begin dynamic block*/
                $1eo.setBeforeSend(jQueryAjaxSettingsBuilder$.beforeSend);
                /*End dynamic block*/
                var $1ez;
                if(($1ez=jQueryAjaxSettingsBuilder$.cache)!==null){
                    $1eo.setCache($1ez);
                }
                /*Begin dynamic block*/
                $1eo.setComplete(jQueryAjaxSettingsBuilder$.complete);
                /*End dynamic block*/
                var $1f0;
                /*Begin dynamic block*/
                $1f0=m$1.tpl$([],undefined,m$1.Comprehension(function(){
                    var $1f1=jQueryAjaxSettingsBuilder$.contents.iterator();
                    var $1f2,$1f3;
                    var next$1f3=function(){
                        var $1f4;
                        if(($1f4=$1f1.next())!==m$1.getFinished()){
                            $1f2=$1f4.key;
                            $1f3=$1f4.item;
                            return $1f4;
                        }
                        $1f3=undefined;
                        return m$1.getFinished();
                    }
                    next$1f3();
                    return function(){
                        if($1f3!==undefined){
                            var $1f5=$1f2;
                            var $1f6=$1f3;
                            var $1f7=m$1.Entry(($1f8=m$9f.createJSString($1f5),m$1.is$($1f8,{/*NO PARENT*/t:m$1.Anything})?$1f8:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'72:74-72:92','jqueryajaxsettingsbuilder.ceylon')),$1f6,{Item$Entry:{t:m$9f.RegExp},Key$Entry:{t:m$9f.JSString}});
                            next$1f3();
                            return $1f7;
                        }
                        return m$1.getFinished();
                    }
                },{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.RegExp},Key$Entry:{t:m$9f.JSString}}},Absent$Iterable:{t:m$1.Null}}));/*End dynamic block*/
                $1eo.setContents($1f0);
                $1eo.setContentType(jQueryAjaxSettingsBuilder$.contentType);
                var $1f9;
                if(($1f9=jQueryAjaxSettingsBuilder$.context)!==null){
                    $1eo.setContext($1f9);
                }
                var $1fa;
                /*Begin dynamic block*/
                $1fa=m$1.tpl$([],undefined,m$1.Comprehension(function(){
                    var $1fb=jQueryAjaxSettingsBuilder$.converters.iterator();
                    var $1fc,$1fd;
                    var next$1fd=function(){
                        var $1fe;
                        if(($1fe=$1fb.next())!==m$1.getFinished()){
                            $1fc=$1fe.key;
                            $1fd=$1fe.item;
                            return $1fe;
                        }
                        $1fd=undefined;
                        return m$1.getFinished();
                    }
                    next$1fd();
                    return function(){
                        if($1fd!==undefined){
                            var $1ff=$1fc;
                            var $1fg=$1fd;
                            var $1fh=m$1.Entry(($1fi=m$9f.createJSString($1ff),m$1.is$($1fi,{/*NO PARENT*/t:m$1.Anything})?$1fi:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'81:80-81:98','jqueryajaxsettingsbuilder.ceylon')),$1fg,{Item$Entry:{t:m$9f.JSObject},Key$Entry:{t:m$9f.JSString}});
                            next$1fd();
                            return $1fh;
                        }
                        return m$1.getFinished();
                    }
                },{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.JSObject},Key$Entry:{t:m$9f.JSString}}},Absent$Iterable:{t:m$1.Null}}));/*End dynamic block*/
                $1eo.setConverters($1fa);
                var $1fj;
                if(($1fj=jQueryAjaxSettingsBuilder$.crossDomain)!==null){
                    $1eo.setCrossDomain($1fj);
                }
                $1eo.setData(jQueryAjaxSettingsBuilder$.data);
                /*Begin dynamic block*/
                $1eo.setDataFilter(($1fk=jQueryAjaxSettingsBuilder$.dataFilter,m$1.is$($1fk,{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.String},{t:m$1.String}]}}})?$1fk:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'89:26-89:35','jqueryajaxsettingsbuilder.ceylon')));
                /*End dynamic block*/
                var $1fl="";
                function set$1fl($1fm){return $1fl=$1fm;};
                var $1fo;for(var $1fn=jQueryAjaxSettingsBuilder$.dataType.iterator();($1fo=$1fn.next())!==m$1.getFinished();){
                    ($1fl=$1fl.plus(" ".plus($1fo.string)));
                }
                $1eo.setDataType($1fl);
                /*Begin dynamic block*/
                $1eo.setError(jQueryAjaxSettingsBuilder$.error);
                /*End dynamic block*/
                $1eo.setGlobal(jQueryAjaxSettingsBuilder$.global);
                var $1fp;
                /*Begin dynamic block*/
                $1fp=m$1.tpl$([],undefined,m$1.Comprehension(function(){
                    var $1fq=jQueryAjaxSettingsBuilder$.headers.iterator();
                    var $1fr,$1fs;
                    var next$1fs=function(){
                        var $1ft;
                        if(($1ft=$1fq.next())!==m$1.getFinished()){
                            $1fr=$1ft.key;
                            $1fs=$1ft.item;
                            return $1ft;
                        }
                        $1fs=undefined;
                        return m$1.getFinished();
                    }
                    next$1fs();
                    return function(){
                        if($1fs!==undefined){
                            var $1fu=$1fr;
                            var $1fv=$1fs;
                            var $1fw=m$1.Entry(($1fx=m$9f.createJSString($1fu),m$1.is$($1fx,{/*NO PARENT*/t:m$1.Anything})?$1fx:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'102:74-102:92','jqueryajaxsettingsbuilder.ceylon')),($1fy=m$9f.createJSString($1fv),m$1.is$($1fy,{/*NO PARENT*/t:m$1.Anything})?$1fy:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'102:95-102:113','jqueryajaxsettingsbuilder.ceylon')),{Item$Entry:{t:m$9f.JSString},Key$Entry:{t:m$9f.JSString}});
                            next$1fs();
                            return $1fw;
                        }
                        return m$1.getFinished();
                    }
                },{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$9f.JSString},Key$Entry:{t:m$9f.JSString}}},Absent$Iterable:{t:m$1.Null}}));/*End dynamic block*/
                $1eo.setHeaders($1fp);
                $1eo.setIfModified(jQueryAjaxSettingsBuilder$.ifModified);
                var $1fz;
                if(($1fz=jQueryAjaxSettingsBuilder$.isLocal)!==null){
                    $1eo.setIsLocal($1fz);
                }
                var $1g0=createJSONPSettings(jQueryAjaxSettingsBuilder$.jsonp.jsonp,jQueryAjaxSettingsBuilder$.jsonp.jsonpCallback);
                var $1g1;
                if(($1g1=$1g0)!==null){
                    $1eo.setJsonp($1g1);
                }
                var $1g2;
                if(($1g2=jQueryAjaxSettingsBuilder$.jsonpCallback)!==null){
                    $1eo.setJsonpCallback($1g2);
                }
                var $1g3;
                if(($1g3=jQueryAjaxSettingsBuilder$.mimeType)!==null){
                    $1eo.setMimeType($1g3);
                }
                var $1g4;
                if(($1g4=jQueryAjaxSettingsBuilder$.password)!==null){
                    $1eo.setPassword($1g4);
                }
                $1eo.setProcessData(jQueryAjaxSettingsBuilder$.processData);
                var $1g5;
                if(($1g5=jQueryAjaxSettingsBuilder$.scriptCharset)!==null){
                    $1eo.setScriptCharset($1g5);
                }
                /*Begin dynamic block*/
                $1eo.setStatusCode(jQueryAjaxSettingsBuilder$.statusCode);
                $1eo.setSuccess([($1g6=jQueryAjaxSettingsBuilder$.success,m$1.is$($1g6,{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.Anything},{t:m$1.String},{t:JQXHR}]}}}}})?$1g6:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'128:23-128:29','jqueryajaxsettingsbuilder.ceylon'))].reifyCeylonType({t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.Anything},{t:m$1.String},{t:JQXHR}]}}}}}));
                /*End dynamic block*/
                var $1g7;
                if(($1g7=jQueryAjaxSettingsBuilder$.timeout)!==null){
                    $1eo.setTimeout($1g7);
                }
                $1eo.setTraditional(jQueryAjaxSettingsBuilder$.traditional);
                $1eo.setType(jQueryAjaxSettingsBuilder$.type);
                $1eo.setTraditional(jQueryAjaxSettingsBuilder$.traditional);
                $1eo.setType(jQueryAjaxSettingsBuilder$.type);
                var $1g8;
                if(($1g8=jQueryAjaxSettingsBuilder$.url)!==null){
                    $1eo.setUrl($1g8);
                }
                var $1g9;
                if(($1g9=jQueryAjaxSettingsBuilder$.username)!==null){
                    $1eo.setUsername($1g9);
                }
                /*Begin dynamic block*/
                $1eo.setXhr(($1ga=jQueryAjaxSettingsBuilder$.xhr,m$1.is$($1ga,{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}})?$1ga:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'144:19-144:21','jqueryajaxsettingsbuilder.ceylon')));
                $1eo.setXhrFields(($1gb=jQueryAjaxSettingsBuilder$.xhrFields,m$1.is$($1gb,{t:m$9f.JSObject})?$1gb:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'145:25-145:33','jqueryajaxsettingsbuilder.ceylon')));
                /*End dynamic block*/
                return $1eo;
            };jQueryAjaxSettingsBuilder$.toNative.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQueryAjaxSettings},$ps:[],$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.doc("convert to native AJAX settings"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$m','toNative']};};
            m$1.atr$(jQueryAjaxSettingsBuilder$,'async',function(){return this.async_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','async']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'cache',function(){return this.cache_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','cache']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'contentType',function(){return this.contentType_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contentType']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'context',function(){return this.context_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSObject}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','context']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'crossDomain',function(){return this.crossDomain_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','crossDomain']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'data',function(){return this.data_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSObject}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','data']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'dataType',function(){return this.dataType_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:DataType}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataType']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'global',function(){return this.global_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','global']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'ifModified',function(){return this.ifModified_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','ifModified']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'isLocal',function(){return this.isLocal_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','isLocal']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'jsonp',function(){return this.jsonp_;},undefined,function(){return{mod:$CCMM$,$t:{t:JSONPOptions},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','jsonp']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'jsonpCallback',function(){return this.jsonpCallback_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.String},Arguments$Callable:{t:m$1.Empty}}}]}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','jsonpCallback']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'mimeType',function(){return this.mimeType_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','mimeType']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'password',function(){return this.password_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','password']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'processData',function(){return this.processData_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','processData']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'scriptCharset',function(){return this.scriptCharset_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','scriptCharset']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'timeout',function(){return this.timeout_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','timeout']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'traditional',function(){return this.traditional_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','traditional']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'type',function(){return this.type_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','type']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'url',function(){return this.url_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','url']};});
            m$1.atr$(jQueryAjaxSettingsBuilder$,'username',function(){return this.username_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','username']};});
        })(JQueryAjaxSettingsBuilder.$$.prototype);
    }
    return JQueryAjaxSettingsBuilder;
}
ex$.$init$JQueryAjaxSettingsBuilder=$init$JQueryAjaxSettingsBuilder;
$init$JQueryAjaxSettingsBuilder();
function JQueryEventAbs(jQueryEventAbs$){
    $init$JQueryEventAbs();
    if(jQueryEventAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$qm.EventAbs(jQueryEventAbs$);
    return jQueryEventAbs$;
}
JQueryEventAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$qm.EventAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs']};};
ex$.JQueryEventAbs=JQueryEventAbs;
function $init$JQueryEventAbs(){
    if(JQueryEventAbs.$$===undefined){
        m$1.initTypeProto(JQueryEventAbs,'com.openswimsoftware.ceylon.js.jquery::JQueryEventAbs',m$qm.EventAbs);
        (function(jQueryEventAbs$){
            jQueryEventAbs$.data=function data(){
                var jQueryEventAbs$=this;
                /*Begin dynamic block*/
                return ($1gc=jQueryEventAbs$.$_native.data,m$1.is$($1gc,{t:m$1.Anything})?$1gc:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'9:10-9:20','jqueryevent.ceylon'));
                /*End dynamic block*/
            };jQueryEventAbs$.data.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:JQueryEventAbs,$an:function(){return[m$1.doc("optional data attached to the event method"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','data']};};
            jQueryEventAbs$.delegateTarget=function delegateTarget(){
                var jQueryEventAbs$=this;
                /*Begin dynamic block*/
                return m$qm.Element(jQueryEventAbs$.$_native.delegateTarget);
                /*End dynamic block*/
            };jQueryEventAbs$.delegateTarget.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$qm.Element},$ps:[],$cont:JQueryEventAbs,$an:function(){return[m$1.doc("the elment on which the jQuery event handler was attached"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','delegateTarget']};};
            jQueryEventAbs$.isDefaultPrevented=function isDefaultPrevented(){
                var jQueryEventAbs$=this;
                /*Begin dynamic block*/
                if(jQueryEventAbs$.$_native.isDefaultPrevented()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jQueryEventAbs$.isDefaultPrevented.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[m$1.doc("was event.preventDefault() was ever called on this event object."),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','isDefaultPrevented']};};
            jQueryEventAbs$.isImmediatePropogationStopped=function isImmediatePropogationStopped(){
                var jQueryEventAbs$=this;
                /*Begin dynamic block*/
                if(jQueryEventAbs$.$_native.isImmediatePropogationStopped()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jQueryEventAbs$.isImmediatePropogationStopped.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[m$1.doc("was event.stopImmediatePropagation() was ever called on this event object."),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','isImmediatePropogationStopped']};};
            jQueryEventAbs$.isPropagationStopped=function isPropagationStopped(){
                var jQueryEventAbs$=this;
                /*Begin dynamic block*/
                if(jQueryEventAbs$.$_native.isPropagationStopped()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jQueryEventAbs$.isPropagationStopped.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[m$1.doc("was event.isPropagationStopped() was ever called on this event object."),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','isPropagationStopped']};};
            jQueryEventAbs$.namespace=function namespace(){
                var jQueryEventAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(jQueryEventAbs$.$_native.namespace);
                /*End dynamic block*/
            };jQueryEventAbs$.namespace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:JQueryEventAbs,$an:function(){return[m$1.doc("namespace specified when the event was triggered"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','namespace']};};
            jQueryEventAbs$.relatedTarget=function relatedTarget(){
                var jQueryEventAbs$=this;
                /*Begin dynamic block*/
                return m$qm.Element(jQueryEventAbs$.$_native.relatedTarget);
                /*End dynamic block*/
            };jQueryEventAbs$.relatedTarget.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$qm.Element},$ps:[],$cont:JQueryEventAbs,$an:function(){return[m$1.doc("the other element involved in the event, if any."),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','relatedTarget']};};
            jQueryEventAbs$.result=function result(){
                var jQueryEventAbs$=this;
                /*Begin dynamic block*/
                return ($1gd=jQueryEventAbs$.$_native.result,m$1.is$($1gd,{t:m$1.Anything})?$1gd:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'70:10-70:22','jqueryevent.ceylon'));
                /*End dynamic block*/
            };jQueryEventAbs$.result.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:JQueryEventAbs,$an:function(){return[m$1.doc("last value returned by an event handler that was triggered by this event, unless the value was undefined"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','result']};};
            jQueryEventAbs$.pageX=function pageX(){
                var jQueryEventAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(jQueryEventAbs$.$_native.pageX);
                /*End dynamic block*/
            };jQueryEventAbs$.pageX.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[m$1.doc("the mouse position relative to the left edge of the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','pageX']};};
            jQueryEventAbs$.pageY=function pageY(){
                var jQueryEventAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(jQueryEventAbs$.$_native.pageY);
                /*End dynamic block*/
            };jQueryEventAbs$.pageY.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[m$1.doc("the mouse position relative to the top edge of the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','pageY']};};
            jQueryEventAbs$.metaKey=function metaKey(){
                var jQueryEventAbs$=this;
                /*Begin dynamic block*/
                if(jQueryEventAbs$.$_native.metaKey){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jQueryEventAbs$.metaKey.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[m$1.doc("was the meta key pressed while the event was fired"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','metaKey']};};
            jQueryEventAbs$.which=function which(){
                var jQueryEventAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(jQueryEventAbs$.$_native.which);
                /*End dynamic block*/
            };jQueryEventAbs$.which.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[m$1.doc("the specific key or mouse button that triggered the event if any"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEventAbs','$m','which']};};
        })(JQueryEventAbs.$$.prototype);
    }
    return JQueryEventAbs;
}
ex$.$init$JQueryEventAbs=$init$JQueryEventAbs;
$init$JQueryEventAbs();
function JQueryEvent($1ge,jQueryEvent$){
    $init$JQueryEvent();
    if(jQueryEvent$===undefined)jQueryEvent$=new JQueryEvent.$$;
    jQueryEvent$.$1ge_=$1ge;
    JQueryEventAbs(jQueryEvent$);
    jQueryEvent$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryEvent,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEvent','$at','native']};}};
    /*Begin dynamic block*/
    jQueryEvent$.$_native=jQueryEvent$.$1ge;/*End dynamic block*/
    return jQueryEvent$;
}
JQueryEvent.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JQueryEventAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a jQuery Event"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQueryEvent']};};
ex$.JQueryEvent=JQueryEvent;
function $init$JQueryEvent(){
    if(JQueryEvent.$$===undefined){
        m$1.initTypeProto(JQueryEvent,'com.openswimsoftware.ceylon.js.jquery::JQueryEvent',$init$JQueryEventAbs());
        (function(jQueryEvent$){
            m$1.atr$(jQueryEvent$,'$1ge',function(){return this.$1ge_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQueryEvent,d:['com.openswimsoftware.ceylon.js.jquery','JQueryEvent','$at','n$rk4q8g']};});
        })(JQueryEvent.$$.prototype);
    }
    return JQueryEvent;
}
ex$.$init$JQueryEvent=$init$JQueryEvent;
$init$JQueryEvent();
var m$1gf=require('com/openswimsoftware/ceylon/js/xmlhttprequest/0.6.0/com.openswimsoftware.ceylon.js.xmlhttprequest-0.6.0');
m$1.$addmod$(m$1gf,'com.openswimsoftware.ceylon.js.xmlhttprequest/0.6.0');
function JQXHRAbs(jQXHRAbs$){
    $init$JQXHRAbs();
    if(jQXHRAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(jQXHRAbs$);
    return jQXHRAbs$;
}
JQXHRAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs']};};
ex$.JQXHRAbs=JQXHRAbs;
function $init$JQXHRAbs(){
    if(JQXHRAbs.$$===undefined){
        m$1.initTypeProto(JQXHRAbs,'com.openswimsoftware.ceylon.js.jquery::JQXHRAbs',m$9f.JSObjectAbs);
        (function(jQXHRAbs$){
            jQXHRAbs$.done=function done($1gg){
                var jQXHRAbs$=this;
                /*Begin dynamic block*/
                return JQXHR(jQXHRAbs$.$_native.done($1gg));
                /*End dynamic block*/
            };jQXHRAbs$.done.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQXHR},$ps:[{$nm:'done',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[m$1.doc("Anything(Anything, String, JQXHR) handler when the request is done"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','done']};};
            jQXHRAbs$.fail=function fail($1gh){
                var jQXHRAbs$=this;
                /*Begin dynamic block*/
                return JQXHR(jQXHRAbs$.$_native.fail($1gh));
                /*End dynamic block*/
            };jQXHRAbs$.fail.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQXHR},$ps:[{$nm:'fail',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[m$1.doc("Anything(JQXHR, String?, String?) handler when the request fails"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','fail']};};
            jQXHRAbs$.always=function always($1gi){
                var jQXHRAbs$=this;
                /*Begin dynamic block*/
                return JQXHR(jQXHRAbs$.$_native.always($1gi));
                /*End dynamic block*/
            };jQXHRAbs$.always.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQXHR},$ps:[{$nm:'always',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[m$1.doc("Anything(JSObject|JQXHR, String, JXHR|Error) handler when the request completes"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','always']};};
            jQXHRAbs$.doThen=function doThen($1gj,$1gk){
                var jQXHRAbs$=this;
                /*Begin dynamic block*/
                return JQXHR(jQXHRAbs$.$_native.then($1gj,$1gk));
                /*End dynamic block*/
            };jQXHRAbs$.doThen.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQXHR},$ps:[{$nm:'done',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'fail',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[m$1.doc("Anything(Anything(Anything, String, JQXHR), Anything(JQXHR, String?, String?) handler when the request is done or fails"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','doThen']};};
            jQXHRAbs$.overrideMimeType=function overrideMimeType($1gl){
                var jQXHRAbs$=this;
                var $1gm=$1gl;
                if(m$1.is$($1gl,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    jQXHRAbs$.$_native.overrideMimeType($1gm.valueOf());
                    /*End dynamic block*/
                }else if(m$1.is$($1gl,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    jQXHRAbs$.$_native.overrideMimeType($1gm.$_native);
                    /*End dynamic block*/
                }
            };jQXHRAbs$.overrideMimeType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'mime',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[m$1.doc("override the request mime type"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','overrideMimeType']};};
            jQXHRAbs$.readyState=function readyState(){
                var jQXHRAbs$=this;
                /*Begin dynamic block*/
                var $1gn=jQXHRAbs$.$_native.readyState;
                if(($1go=$1gn,$1gp=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?m$1.throwexc(m$1.Exception("Undefined or null reference: XMLHttpRequest"),'54:21-54:34','jqxhr.ceylon'):XMLHttpRequest).UNSENT,($1go.equals&&$1go.equals($1gp))||$1go===$1gp)){
                    return m$1gf.getReadyStateUnsent();
                }else {
                    if(($1gq=$1gn,$1gr=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?m$1.throwexc(m$1.Exception("Undefined or null reference: XMLHttpRequest"),'56:28-56:41','jqxhr.ceylon'):XMLHttpRequest).OPENED,($1gq.equals&&$1gq.equals($1gr))||$1gq===$1gr)){
                        return m$1gf.getReadyStateOpened();
                    }else {
                        if(($1gs=$1gn,$1gt=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?m$1.throwexc(m$1.Exception("Undefined or null reference: XMLHttpRequest"),'58:28-58:41','jqxhr.ceylon'):XMLHttpRequest).HEADERS_RECEIVED,($1gs.equals&&$1gs.equals($1gt))||$1gs===$1gt)){
                            return m$1gf.getReadyStateHeadersReceived();
                        }else {
                            if(($1gu=$1gn,$1gv=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?m$1.throwexc(m$1.Exception("Undefined or null reference: XMLHttpRequest"),'60:28-60:41','jqxhr.ceylon'):XMLHttpRequest).LOADING,($1gu.equals&&$1gu.equals($1gv))||$1gu===$1gv)){
                                return m$1gf.getReadyStateLoading();
                            }else {
                                return ($1gw=(typeof readyStateDone==='undefined'||readyStateDone===null?m$1.throwexc(m$1.Exception("Undefined or null reference: readyStateDone"),'63:11-63:24','jqxhr.ceylon'):readyStateDone),m$1.is$($1gw,{t:m$1.Anything})?$1gw:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'63:11-63:24','jqxhr.ceylon'));
                            }
                        }
                    }
                }/*End dynamic block*/
            };jQXHRAbs$.readyState.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1gf.ReadyState},$ps:[],$cont:JQXHRAbs,$an:function(){return[m$1.doc("the current ready state of the request"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','readyState']};};
            jQXHRAbs$.status=function status(){
                var jQXHRAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(jQXHRAbs$.$_native.status);
                /*End dynamic block*/
            };jQXHRAbs$.status.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:JQXHRAbs,$an:function(){return[m$1.doc("the request HTTP status code"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','status']};};
            jQXHRAbs$.statusText=function statusText(){
                var jQXHRAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(jQXHRAbs$.$_native.statusText);
                /*End dynamic block*/
            };jQXHRAbs$.statusText.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:JQXHRAbs,$an:function(){return[m$1.doc("the request HTTP status text code"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','statusText']};};
            jQXHRAbs$.responseText=function responseText(){
                var jQXHRAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(jQXHRAbs$.$_native.responseText);
                /*End dynamic block*/
            };jQXHRAbs$.responseText.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:JQXHRAbs,$an:function(){return[m$1.doc("the request response as a string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','responseText']};};
            jQXHRAbs$.responseXML=function responseXML(){
                var jQXHRAbs$=this;
                /*Begin dynamic block*/
                var $1gx=jQXHRAbs$.$_native.responseXML;
                if(($1gy=$1gx,$1gz=null,($1gy.equals&&!$1gy.equals($1gz))||$1gy!==$1gz)){
                    return m$qm.Document($1gx);
                }else {
                    return null;
                }/*End dynamic block*/
            };jQXHRAbs$.responseXML.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$qm.Document}]},$ps:[],$cont:JQXHRAbs,$an:function(){return[m$1.doc("the request response as a XML Document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','responseXML']};};
            jQXHRAbs$.setRequestHeader=function setRequestHeader($1h0,$1h1){
                var jQXHRAbs$=this;
                var $1h2=$1h0;
                if(m$1.is$($1h0,{t:m$1.String})) {
                    var $1h3=$1h1;
                    if(m$1.is$($1h1,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        jQXHRAbs$.$_native.setRequestHeader($1h2.valueOf(),$1h3.valueOf());
                        /*End dynamic block*/
                    }else if(m$1.is$($1h1,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        jQXHRAbs$.$_native.setRequestHeader($1h2.valueOf(),$1h3.$_native);
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($1h0,{t:m$9f.JSString})) {
                    var $1h4=$1h1;
                    if(m$1.is$($1h1,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        jQXHRAbs$.$_native.setRequestHeader($1h2.$_native,$1h4.valueOf());
                        /*End dynamic block*/
                    }else if(m$1.is$($1h1,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        jQXHRAbs$.$_native.setRequestHeader($1h2.$_native,$1h4.$_native);
                        /*End dynamic block*/
                    }
                }
            };jQXHRAbs$.setRequestHeader.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'header',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[m$1.doc("set the value of a request header"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','setRequestHeader']};};
            jQXHRAbs$.getAllResponseHeaders=function getAllResponseHeaders(){
                var jQXHRAbs$=this;
                /*Begin dynamic block*/
                var $1h5=jQXHRAbs$.$_native.getAllResponseHeaders();
                if(($1h6=$1h5,$1h7=null,($1h6.equals&&!$1h6.equals($1h7))||$1h6!==$1h7)){
                    return m$9f.JSString($1h5);
                }else {
                    return null;
                }/*End dynamic block*/
            };jQXHRAbs$.getAllResponseHeaders.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[],$cont:JQXHRAbs,$an:function(){return[m$1.doc("returns all of the request headers as a string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','getAllResponseHeaders']};};
            jQXHRAbs$.getResponseHeader=function getResponseHeader($1h8){
                var jQXHRAbs$=this;
                /*Begin dynamic block*/
                var $1h9;
                var $1ha=$1h8;
                if(m$1.is$($1h8,{t:m$1.String})) {
                    $1h9=jQXHRAbs$.$_native.getResponseHeader($1ha.valueOf());
                }else if(m$1.is$($1h8,{t:m$9f.JSString})) {
                    $1h9=jQXHRAbs$.$_native.getResponseHeader($1ha.$_native);
                }if(($1hb=$1h9,$1hc=null,($1hb.equals&&!$1hb.equals($1hc))||$1hb!==$1hc)){
                    return m$9f.JSString($1h9);
                }else {
                    return null;
                }/*End dynamic block*/
            };jQXHRAbs$.getResponseHeader.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[{$nm:'header',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[m$1.doc("returns a specific response header"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','getResponseHeader']};};
            jQXHRAbs$.abort=function abort(){
                var jQXHRAbs$=this;
                /*Begin dynamic block*/
                jQXHRAbs$.$_native.abort();
                /*End dynamic block*/
            };jQXHRAbs$.abort.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:JQXHRAbs,$an:function(){return[m$1.doc("abort the request"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','abort']};};
            jQXHRAbs$.statusCode=function statusCode(){
                var jQXHRAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(jQXHRAbs$.$_native.statusCode());
                /*End dynamic block*/
            };jQXHRAbs$.statusCode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:JQXHRAbs,$an:function(){return[m$1.doc("the request status code"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHRAbs','$m','statusCode']};};
        })(JQXHRAbs.$$.prototype);
    }
    return JQXHRAbs;
}
ex$.$init$JQXHRAbs=$init$JQXHRAbs;
$init$JQXHRAbs();
function JQXHR($1hd,jQXHR$){
    $init$JQXHR();
    if(jQXHR$===undefined)jQXHR$=new JQXHR.$$;
    jQXHR$.$1hd_=$1hd;
    JQXHRAbs(jQXHR$);
    jQXHR$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQXHR,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHR','$at','native']};}};
    /*Begin dynamic block*/
    jQXHR$.$_native=jQXHR$.$1hd;/*End dynamic block*/
    return jQXHR$;
}
JQXHR.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JQXHRAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a jQuery abstraction of XMLHttpRequest across browsers"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','JQXHR']};};
ex$.JQXHR=JQXHR;
function $init$JQXHR(){
    if(JQXHR.$$===undefined){
        m$1.initTypeProto(JQXHR,'com.openswimsoftware.ceylon.js.jquery::JQXHR',$init$JQXHRAbs());
        (function(jQXHR$){
            m$1.atr$(jQXHR$,'$1hd',function(){return this.$1hd_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQXHR,d:['com.openswimsoftware.ceylon.js.jquery','JQXHR','$at','n$jp5chl']};});
        })(JQXHR.$$.prototype);
    }
    return JQXHR;
}
ex$.$init$JQXHR=$init$JQXHR;
$init$JQXHR();
ex$.$mod$ans$=function(){return[m$1.doc("based on jQuery 1.10.X and 2.0.X")];};
ex$.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.language/1.8.0':[],
'com.openswimsoftware.ceylon.js.dom/4.0.0':function(){return[m$1.shared()];},
'com.openswimsoftware.ceylon.js.json/1.0.0':function(){return[m$1.shared()];},
'com.openswimsoftware.ceylon.js.xmlhttprequest/0.6.0':function(){return[m$1.shared()];}
};};
ex$.$pkg$ans$com$openswimsoftware$ceylon$js$jquery=function(){return[m$1.shared()];};
function PromiseAbs(promiseAbs$){
    $init$PromiseAbs();
    if(promiseAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(promiseAbs$);
    return promiseAbs$;
}
PromiseAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','PromiseAbs']};};
ex$.PromiseAbs=PromiseAbs;
function $init$PromiseAbs(){
    if(PromiseAbs.$$===undefined){
        m$1.initTypeProto(PromiseAbs,'com.openswimsoftware.ceylon.js.jquery::PromiseAbs',m$9f.JSObjectAbs);
        (function(promiseAbs$){
            promiseAbs$.always=function always($1he){
                var promiseAbs$=this;
                /*Begin dynamic block*/
                return Promise(promiseAbs$.$_native.always($1he));
                /*End dynamic block*/
            };promiseAbs$.always.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise},$ps:[{$nm:'alwaysCallbacks',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[m$1.doc("add handlers to be called when the deferred object is either resolved or rejected"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','PromiseAbs','$m','always']};};
            promiseAbs$.done=function done($1hf){
                var promiseAbs$=this;
                /*Begin dynamic block*/
                return Promise(promiseAbs$.$_native.done($1hf));
                /*End dynamic block*/
            };promiseAbs$.done.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise},$ps:[{$nm:'doneCallbacks',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[m$1.doc("add handlers to be called when the deferred object is resolved"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','PromiseAbs','$m','done']};};
            promiseAbs$.fail=function fail($1hg){
                var promiseAbs$=this;
                /*Begin dynamic block*/
                return Promise(promiseAbs$.$_native.fail($1hg));
                /*End dynamic block*/
            };promiseAbs$.fail.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise},$ps:[{$nm:'failCallbacks',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[m$1.doc("add handlers to be called when the deferred object is rejected"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','PromiseAbs','$m','fail']};};
            promiseAbs$.thenFilter=function thenFilter($1hh,$1hi,$1hj){
                var promiseAbs$=this;
                /*Begin dynamic block*/
                return Promise(promiseAbs$.$_native.then($1hh,$1hi,$1hj));
                /*End dynamic block*/
            };promiseAbs$.thenFilter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Promise},$ps:[{$nm:'doneFilter',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'failFilter',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'progressFilter',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[m$1.doc("add handlers to be called when the deferred object is either resolved, rejected or are still in progress"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','PromiseAbs','$m','thenFilter']};};
        })(PromiseAbs.$$.prototype);
    }
    return PromiseAbs;
}
ex$.$init$PromiseAbs=$init$PromiseAbs;
$init$PromiseAbs();
function Promise($1hk,promise$){
    $init$Promise();
    if(promise$===undefined)promise$=new Promise.$$;
    promise$.$1hk_=$1hk;
    PromiseAbs(promise$);
    promise$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Promise,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','Promise','$at','native']};}};
    /*Begin dynamic block*/
    promise$.$_native=promise$.$1hk;/*End dynamic block*/
    return promise$;
}
Promise.$crtmm$=function(){return{mod:$CCMM$,'super':{t:PromiseAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a subset of Deferred which is used for managing a set of callbacks"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','Promise']};};
ex$.Promise=Promise;
function $init$Promise(){
    if(Promise.$$===undefined){
        m$1.initTypeProto(Promise,'com.openswimsoftware.ceylon.js.jquery::Promise',$init$PromiseAbs());
        (function(promise$){
            m$1.atr$(promise$,'$1hk',function(){return this.$1hk_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Promise,d:['com.openswimsoftware.ceylon.js.jquery','Promise','$at','n$apqbpj']};});
        })(Promise.$$.prototype);
    }
    return Promise;
}
ex$.$init$Promise=$init$Promise;
$init$Promise();
function TweenAbs(tweenAbs$){
    $init$TweenAbs();
    if(tweenAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(tweenAbs$);
    return tweenAbs$;
}
TweenAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.jquery','TweenAbs']};};
ex$.TweenAbs=TweenAbs;
function $init$TweenAbs(){
    if(TweenAbs.$$===undefined){
        m$1.initTypeProto(TweenAbs,'com.openswimsoftware.ceylon.js.jquery::TweenAbs',m$9f.JSObjectAbs);
        (function(tweenAbs$){
            tweenAbs$.getInterval=function getInterval(){
                var tweenAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(tweenAbs$.$_native.interval);
                /*End dynamic block*/
            };tweenAbs$.getInterval.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:TweenAbs,$an:function(){return[m$1.doc("returns the tween interval"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','TweenAbs','$m','getInterval']};};
            tweenAbs$.setInterval=function setInterval($1hl){
                var tweenAbs$=this;
                /*Begin dynamic block*/
                tweenAbs$.$_native.interval=$1hl;
                /*End dynamic block*/
            };tweenAbs$.setInterval.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'interval',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}}],$cont:TweenAbs,$an:function(){return[m$1.doc("sets the tween interval"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','TweenAbs','$m','setInterval']};};
            tweenAbs$.getOff=function getOff(){
                var tweenAbs$=this;
                /*Begin dynamic block*/
                if(tweenAbs$.$_native.off){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };tweenAbs$.getOff.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:TweenAbs,$an:function(){return[m$1.doc("returns if the tween is off"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','TweenAbs','$m','getOff']};};
            tweenAbs$.setOff=function setOff($1hm){
                var tweenAbs$=this;
                /*Begin dynamic block*/
                tweenAbs$.$_native.interval=(typeof interval==='undefined'||interval===null?m$1.throwexc(m$1.Exception("Undefined or null reference: interval"),'33:21-33:28','tween.ceylon'):interval);
                /*End dynamic block*/
            };tweenAbs$.setOff.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'off',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:TweenAbs,$an:function(){return[m$1.doc("sets if the tween is off"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','TweenAbs','$m','setOff']};};
        })(TweenAbs.$$.prototype);
    }
    return TweenAbs;
}
ex$.$init$TweenAbs=$init$TweenAbs;
$init$TweenAbs();
function Tween($1hn,tween$){
    $init$Tween();
    if(tween$===undefined)tween$=new Tween.$$;
    tween$.$1hn_=$1hn;
    TweenAbs(tween$);
    tween$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Tween,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.jquery','Tween','$at','native']};}};
    /*Begin dynamic block*/
    tween$.$_native=tween$.$1hn;/*End dynamic block*/
    return tween$;
}
Tween.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TweenAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a jQuery animation tween"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.jquery','Tween']};};
ex$.Tween=Tween;
function $init$Tween(){
    if(Tween.$$===undefined){
        m$1.initTypeProto(Tween,'com.openswimsoftware.ceylon.js.jquery::Tween',$init$TweenAbs());
        (function(tween$){
            m$1.atr$(tween$,'$1hn',function(){return this.$1hn_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Tween,d:['com.openswimsoftware.ceylon.js.jquery','Tween','$at','n$ngk0bb']};});
        })(Tween.$$.prototype);
    }
    return Tween;
}
ex$.$init$Tween=$init$Tween;
$init$Tween();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
