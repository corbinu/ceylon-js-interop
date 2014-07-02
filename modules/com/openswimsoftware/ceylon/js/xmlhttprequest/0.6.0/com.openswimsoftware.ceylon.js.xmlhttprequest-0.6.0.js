(function(define) { define(function(require, ex$, module) {
var $CCMM$={"$mod-version":"0.6.0","$mod-deps":[{exp:1,path:"com.openswimsoftware.ceylon.js.language\/1.8.0"},{exp:1,path:"com.openswimsoftware.ceylon.js.file\/0.12.0"},{exp:1,path:"com.openswimsoftware.ceylon.js.dom\/4.0.0"},{exp:1,path:"com.openswimsoftware.ceylon.js.html\/5.0.0"},"com.openswimsoftware.ceylon.js.json\/1.0.0",{exp:1,path:"ceylon.language\/1.1.0"}],"com.openswimsoftware.ceylon.js.xmlhttprequest":{readyStateUnsent:{super:{pk:".",nm:"ReadyState"},pa:1,mt:"o",nm:"readyStateUnsent"},blank:{super:{pk:".",nm:"XMLHttpRequestResponseType"},pa:1,mt:"o",nm:"blank"},readyStateHeadersReceived:{super:{pk:".",nm:"ReadyState"},pa:1,mt:"o",nm:"readyStateHeadersReceived"},document:{super:{pk:".",nm:"XMLHttpRequestResponseType"},pa:1,mt:"o",nm:"document"},ReadyState:{super:{md:"ceylon.language",pk:"$",nm:"Basic"},pa:257,ps:[{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"num"}],mt:"c",of:[{pk:".",nm:"readyStateUnsent"},{pk:".",nm:"readyStateOpened"},{pk:".",nm:"readyStateHeadersReceived"},{pk:".",nm:"readyStateLoading"},{pk:".",nm:"readyStateDone"}],$at:{num$yj95dv:{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"a",nm:"num"}},nm:"ReadyState"},arraybuffer:{super:{pk:".",nm:"XMLHttpRequestResponseType"},pa:1,mt:"o",nm:"arraybuffer"},XMLHttpRequestOptions:{super:{md:"ceylon.language",pk:"$",nm:"Basic"},pa:1,ps:[{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,def:1,mt:"prm",nm:"anon"}],mt:"c",$at:{anon:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"a",nm:"anon"}},$m:{toJson:{$t:{md:"com.openswimsoftware.ceylon.js.json",pk:"com.openswimsoftware.ceylon.js.json",nm:"JSJSON"},pa:1,mt:"m",an:{doc:["to native json"]},nm:"toJson"}},an:{doc:["XMLHttpRequest options"]},nm:"XMLHttpRequestOptions"},json:{super:{pk:".",nm:"XMLHttpRequestResponseType"},pa:1,mt:"o",nm:"json"},text:{super:{pk:".",nm:"XMLHttpRequestResponseType"},pa:1,mt:"o",nm:"text"},createFormData:{$t:{pk:".",nm:"FormData"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.html",pk:"com.openswimsoftware.ceylon.js.html",nm:"HTMLFormElement"}]},def:1,mt:"prm",nm:"form"}]],mt:"m",an:{doc:["create form data"]},nm:"createFormData"},FormDataAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{appendBlob:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"name"},{$t:{md:"com.openswimsoftware.ceylon.js.file",pk:"com.openswimsoftware.ceylon.js.file",nm:"Blob"},mt:"prm",nm:"val"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]}]},mt:"prm",nm:"filename"}]],mt:"m",an:{doc:["append the blob to the form data"]},nm:"appendBlob"},append:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"name"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"val"}]],mt:"m",an:{doc:["append the value to the form data"]},nm:"append"}},nm:"FormDataAbs"},XMLHttpRequestAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{getWithCredentials:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"m",an:{doc:["return whether request should be made with credentials"]},nm:"getWithCredentials"},getOnreadystatechange:{$t:{nm:"$U"},pa:1,mt:"m",an:{doc:["returns a function Anything(Event event) which is on readystatechange handler"]},nm:"getOnreadystatechange"},upload:{$t:{pk:".",nm:"XMLHttpRequestUpload"},pa:1,mt:"m",an:{doc:["returns the upload request"]},nm:"upload"},getAllResponseHeaders:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},pa:1,mt:"m",an:{doc:["returns all response headers as a string sepreated by new lines"]},nm:"getAllResponseHeaders"},setRequestHeader:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"header"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"val"}]],mt:"m",an:{doc:["set a request headers value"]},nm:"setRequestHeader"},responseText:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the response as a string"]},nm:"responseText"},responseXML:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Document"}]},pa:1,mt:"m",an:{doc:["returns the response as an XML Document"]},nm:"responseXML"},getResponseType:{$t:{pk:".",nm:"XMLHttpRequestResponseType"},pa:1,mt:"m",an:{doc:["returns the request response type"]},nm:"getResponseType"},overrideMimeType:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"mime"}]],mt:"m",an:{doc:["set the request response mime type"]},nm:"overrideMimeType"},setWithCredentials:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},mt:"prm",nm:"credentials"}]],mt:"m",an:{doc:["set that request should be made with credentials"]},nm:"setWithCredentials"},setTimeout:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"timeout"}]],mt:"m",an:{doc:["set the request timeout"]},nm:"setTimeout"},abort:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,mt:"m",an:{doc:["cancels network activity"]},nm:"abort"},response:{$t:{nm:"$U"},pa:1,mt:"m",an:{doc:["returns the response as ArrayBuffer|Blob|Document|JSON"]},nm:"response"},getTimeout:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the request timeout"]},nm:"getTimeout"},statusText:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns http text status"]},nm:"statusText"},readyState:{$t:{pk:".",nm:"ReadyState"},pa:1,mt:"m",an:{doc:["returns the current ready state"]},nm:"readyState"},setResponseType:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{pk:".",nm:"XMLHttpRequestResponseType"},mt:"prm",nm:"responseType"}]],mt:"m",an:{doc:["set the request response type"]},nm:"setResponseType"},getResponseHeader:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"header"}]],mt:"m",an:{doc:["returns the specified response header"]},nm:"getResponseHeader"},send:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"com.openswimsoftware.ceylon.js.file",pk:"com.openswimsoftware.ceylon.js.file",nm:"Blob"},{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Document"},{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"FormData"}]}]},def:1,mt:"prm",nm:"data"}]],mt:"m",an:{doc:["initiate the request"]},nm:"send"},setOnreadystatechange:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Event"},mt:"prm",nm:"event"}]],mt:"prm",$pt:"f",nm:"handler"}]],mt:"m",$m:{handler$9lf7os:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Event"},mt:"prm",nm:"event"}]],mt:"m",nm:"handler"}},an:{doc:["sets on ready state change handler"]},nm:"setOnreadystatechange"},open:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"method"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"url"},{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},def:1,mt:"prm",nm:"async"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]}]},def:1,mt:"prm",nm:"user"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]}]},def:1,mt:"prm",nm:"password"}]],mt:"m",an:{doc:["open a new request"]},nm:"open"},status:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns http status code"]},nm:"status"}},nm:"XMLHttpRequestAbs"},FormData:{super:{pk:".",nm:"FormDataAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$hxd1bv:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["form data for sending over using xmlhttprequest"]},nm:"FormData"},readyStateOpened:{super:{pk:".",nm:"ReadyState"},pa:1,mt:"o",nm:"readyStateOpened"},XMLHttpRequestEventTarget:{super:{pk:".",nm:"XMLHttpRequestEventTargetAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$cdx0sm:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["XMLHttpRequestEventTarget"]},nm:"XMLHttpRequestEventTarget"},XMLHttpRequestUpload:{super:{pk:".",nm:"XMLHttpRequestUploadAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$omab0g:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["XMLHttpRequestUpload"]},nm:"XMLHttpRequestUpload"},XMLHttpRequestUploadAbs:{super:{pk:".",nm:"XMLHttpRequestEventTargetAbs"},pa:257,mt:"c",nm:"XMLHttpRequestUploadAbs"},XMLHttpRequestResponseType:{super:{md:"ceylon.language",pk:"$",nm:"Basic"},pa:257,ps:[{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"prm",nm:"name"}],mt:"c",of:[{pk:".",nm:"blank"},{pk:".",nm:"arraybuffer"},{pk:".",nm:"blob"},{pk:".",nm:"document"},{pk:".",nm:"json"},{pk:".",nm:"text"}],$at:{name$gozuip:{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"a",nm:"name"}},nm:"XMLHttpRequestResponseType"},XMLHttpRequestEventTargetAbs:{super:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"EventTargetAbs"},pa:257,mt:"c",$m:{getOnabort:{$t:{nm:"$U"},pa:1,mt:"m",an:{doc:["returns a function Anything(Event event) onabort handler"]},nm:"getOnabort"},setOnabort:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Event"},mt:"prm",nm:"event"}]],mt:"prm",$pt:"f",nm:"handler"}]],mt:"m",$m:{handler$q8uc41:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Event"},mt:"prm",nm:"event"}]],mt:"m",nm:"handler"}},an:{doc:["sets onabort handler"]},nm:"setOnabort"},getOntimeout:{$t:{nm:"$U"},pa:1,mt:"m",an:{doc:["returns a function Anything(Event event) ontimeout handler"]},nm:"getOntimeout"},getOnerror:{$t:{nm:"$U"},pa:1,mt:"m",an:{doc:["returns a function Anything(Event event) onerror handler"]},nm:"getOnerror"},setOnerror:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Event"},mt:"prm",nm:"event"}]],mt:"prm",$pt:"f",nm:"handler"}]],mt:"m",$m:{handler$sqbmg9:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Event"},mt:"prm",nm:"event"}]],mt:"m",nm:"handler"}},an:{doc:["sets onerror handler"]},nm:"setOnerror"},getOnloadend:{$t:{nm:"$U"},pa:1,mt:"m",an:{doc:["returns a function Anything(Event event) returns onloadend handler"]},nm:"getOnloadend"},setOnloadend:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Event"},mt:"prm",nm:"event"}]],mt:"prm",$pt:"f",nm:"handler"}]],mt:"m",$m:{handler$d0dnuq:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Event"},mt:"prm",nm:"event"}]],mt:"m",nm:"handler"}},an:{doc:["sets onloadend handler"]},nm:"setOnloadend"},setOnload:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Event"},mt:"prm",nm:"event"}]],mt:"prm",$pt:"f",nm:"handler"}]],mt:"m",$m:{handler$drhex:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Event"},mt:"prm",nm:"event"}]],mt:"m",nm:"handler"}},an:{doc:["sets onload handler"]},nm:"setOnload"},getOnprogress:{$t:{nm:"$U"},pa:1,mt:"m",an:{doc:["returns a function Anything(Event event) onprogress handler"]},nm:"getOnprogress"},setOnprogress:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Event"},mt:"prm",nm:"event"}]],mt:"prm",$pt:"f",nm:"handler"}]],mt:"m",$m:{handler$p2av2w:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Event"},mt:"prm",nm:"event"}]],mt:"m",nm:"handler"}},an:{doc:["sets onprogress handler"]},nm:"setOnprogress"},getOnload:{$t:{nm:"$U"},pa:1,mt:"m",an:{doc:["returns a function Anything(Event event) onload handler"]},nm:"getOnload"},setOnloadstart:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Event"},mt:"prm",nm:"event"}]],mt:"prm",$pt:"f",nm:"handler"}]],mt:"m",$m:{handler$gfg3lv:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Event"},mt:"prm",nm:"event"}]],mt:"m",nm:"handler"}},an:{doc:["sets onloadstart handler"]},nm:"setOnloadstart"},getOnloadstart:{$t:{nm:"$U"},pa:1,mt:"m",an:{doc:["returns a function Anything(Event event) onloadstart handler"]},nm:"getOnloadstart"},setOntimeout:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Event"},mt:"prm",nm:"event"}]],mt:"prm",$pt:"f",nm:"handler"}]],mt:"m",$m:{handler$sbd28a:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{md:"com.openswimsoftware.ceylon.js.dom",pk:"com.openswimsoftware.ceylon.js.dom",nm:"Event"},mt:"prm",nm:"event"}]],mt:"m",nm:"handler"}},an:{doc:["sets ontimeout handler"]},nm:"setOntimeout"}},nm:"XMLHttpRequestEventTargetAbs"},"$pkg-shared":1,blob:{super:{pk:".",nm:"XMLHttpRequestResponseType"},pa:1,mt:"o",nm:"blob"},readyStateDone:{super:{pk:".",nm:"ReadyState"},pa:1,mt:"o",nm:"readyStateDone"},createXMLHttpRequest:{$t:{pk:".",nm:"XMLHttpRequest"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"XMLHttpRequestOptions"}]},def:1,mt:"prm",nm:"options"}]],mt:"m",an:{doc:["create a new XMLHttpRequest"]},nm:"createXMLHttpRequest"},XMLHttpRequest:{super:{pk:".",nm:"XMLHttpRequestAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$z8u8uv:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["XMLHttpRequest"]},nm:"XMLHttpRequest"},readyStateLoading:{super:{pk:".",nm:"ReadyState"},pa:1,mt:"o",nm:"readyStateLoading"}},"$mod-bin":"7.0","$mod-name":"com.openswimsoftware.ceylon.js.xmlhttprequest"};
ex$.$CCMM$=function(){return $CCMM$;};
var m$3g8=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$3g8.$addmod$(m$3g8,'ceylon.language/1.1.0');
ex$.$pkg$ans$com$openswimsoftware$ceylon$js$xmlhttprequest=function(){return[m$3g8.shared()];};
ex$.$mod$ans$=function(){return[m$3g8.doc("based on XMLHttpRequest working draft 6")];};
ex$.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.language/1.8.0':function(){return[m$3g8.shared()];},
'com.openswimsoftware.ceylon.js.file/0.12.0':function(){return[m$3g8.shared()];},
'com.openswimsoftware.ceylon.js.dom/4.0.0':function(){return[m$3g8.shared()];},
'com.openswimsoftware.ceylon.js.html/5.0.0':function(){return[m$3g8.shared()];},
'com.openswimsoftware.ceylon.js.json/1.0.0':[]
};};
var m$3g9=require('com/openswimsoftware/ceylon/js/dom/4.0.0/com.openswimsoftware.ceylon.js.dom-4.0.0');
m$3g8.$addmod$(m$3g9,'com.openswimsoftware.ceylon.js.dom/4.0.0');
var m$3ga=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
m$3g8.$addmod$(m$3ga,'com.openswimsoftware.ceylon.js.language/1.8.0');
var m$3gb=require('com/openswimsoftware/ceylon/js/file/0.12.0/com.openswimsoftware.ceylon.js.file-0.12.0');
m$3g8.$addmod$(m$3gb,'com.openswimsoftware.ceylon.js.file/0.12.0');
var m$3gc=require('com/openswimsoftware/ceylon/js/json/1.0.0/com.openswimsoftware.ceylon.js.json-1.0.0');
m$3g8.$addmod$(m$3gc,'com.openswimsoftware.ceylon.js.json/1.0.0');

//ClassDef XMLHttpRequestResponseType at xmlhttprequest.ceylon (6:0-6:119)
function XMLHttpRequestResponseType($3gd,xMLHttpRequestResponseType$){
    $init$XMLHttpRequestResponseType();
    if(xMLHttpRequestResponseType$===undefined)m$3g8.throwexc(m$3g8.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    xMLHttpRequestResponseType$.$3gd_=$3gd;
    return xMLHttpRequestResponseType$;
}
XMLHttpRequestResponseType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3g8.Basic},ps:[{nm:'name',mt:'prm',$t:{t:m$3g8.$_String}}],of:[$prop$get$3ge,$prop$get$3gf,$prop$get$3gg,$prop$get$3gh,$prop$get$3gi,$prop$get$3gj],pa:257,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestResponseType']};};
ex$.XMLHttpRequestResponseType=XMLHttpRequestResponseType;
function $init$XMLHttpRequestResponseType(){
    if(XMLHttpRequestResponseType.$$===undefined){
        m$3g8.initTypeProto(XMLHttpRequestResponseType,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestResponseType',m$3g8.Basic);
        (function(xMLHttpRequestResponseType$){
            m$3g8.atr$(xMLHttpRequestResponseType$,'$3gd',function(){return this.$3gd_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3g8.$_String},$cont:XMLHttpRequestResponseType,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestResponseType','$at','name$gozuip']};});
        })(XMLHttpRequestResponseType.$$.prototype);
    }
    return XMLHttpRequestResponseType;
}
ex$.$init$XMLHttpRequestResponseType=$init$XMLHttpRequestResponseType;
$init$XMLHttpRequestResponseType();

//ObjectDef blank at xmlhttprequest.ceylon (8:0-8:60)
function $3ge(){
    var blank$=new $3ge.$$;XMLHttpRequestResponseType("",blank$);
    return blank$;
};$3ge.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestResponseType},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','blank']};};
function $init$$3ge(){
    if($3ge.$$===undefined){
        m$3g8.initTypeProto($3ge,'com.openswimsoftware.ceylon.js.xmlhttprequest::blank',$init$XMLHttpRequestResponseType());
    }
    return $3ge;
}
ex$.$init$$3ge=$init$$3ge;
$init$$3ge();
var $3gk;
function getBlank(){
    if($3gk===undefined){$3gk=$init$$3ge()();$3gk.$crtmm$=getBlank.$crtmm$;}
    return $3gk;
}
ex$.getBlank=getBlank;
getBlank.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3ge},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','blank']};};
$prop$getBlank={get:getBlank,$crtmm$:getBlank.$crtmm$};
get$3ge=getBlank;$prop$get$3ge=getBlank;
ex$.$prop$getBlank=$prop$getBlank;

//ObjectDef arraybuffer at xmlhttprequest.ceylon (9:0-9:77)
function $3gf(){
    var arraybuffer$=new $3gf.$$;XMLHttpRequestResponseType("arraybuffer",arraybuffer$);
    return arraybuffer$;
};$3gf.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestResponseType},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','arraybuffer']};};
function $init$$3gf(){
    if($3gf.$$===undefined){
        m$3g8.initTypeProto($3gf,'com.openswimsoftware.ceylon.js.xmlhttprequest::arraybuffer',$init$XMLHttpRequestResponseType());
    }
    return $3gf;
}
ex$.$init$$3gf=$init$$3gf;
$init$$3gf();
var $3gl;
function getArraybuffer(){
    if($3gl===undefined){$3gl=$init$$3gf()();$3gl.$crtmm$=getArraybuffer.$crtmm$;}
    return $3gl;
}
ex$.getArraybuffer=getArraybuffer;
getArraybuffer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3gf},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','arraybuffer']};};
$prop$getArraybuffer={get:getArraybuffer,$crtmm$:getArraybuffer.$crtmm$};
get$3gf=getArraybuffer;$prop$get$3gf=getArraybuffer;
ex$.$prop$getArraybuffer=$prop$getArraybuffer;

//ObjectDef blob at xmlhttprequest.ceylon (10:0-10:63)
function $3gg(){
    var blob$=new $3gg.$$;XMLHttpRequestResponseType("blob",blob$);
    return blob$;
};$3gg.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestResponseType},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','blob']};};
function $init$$3gg(){
    if($3gg.$$===undefined){
        m$3g8.initTypeProto($3gg,'com.openswimsoftware.ceylon.js.xmlhttprequest::blob',$init$XMLHttpRequestResponseType());
    }
    return $3gg;
}
ex$.$init$$3gg=$init$$3gg;
$init$$3gg();
var $3gm;
function getBlob(){
    if($3gm===undefined){$3gm=$init$$3gg()();$3gm.$crtmm$=getBlob.$crtmm$;}
    return $3gm;
}
ex$.getBlob=getBlob;
getBlob.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3gg},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','blob']};};
$prop$getBlob={get:getBlob,$crtmm$:getBlob.$crtmm$};
get$3gg=getBlob;$prop$get$3gg=getBlob;
ex$.$prop$getBlob=$prop$getBlob;

//ObjectDef document at xmlhttprequest.ceylon (11:0-11:71)
function $3gh(){
    var document$=new $3gh.$$;XMLHttpRequestResponseType("document",document$);
    return document$;
};$3gh.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestResponseType},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','document']};};
function $init$$3gh(){
    if($3gh.$$===undefined){
        m$3g8.initTypeProto($3gh,'com.openswimsoftware.ceylon.js.xmlhttprequest::document',$init$XMLHttpRequestResponseType());
    }
    return $3gh;
}
ex$.$init$$3gh=$init$$3gh;
$init$$3gh();
var $3gn;
function getDocument(){
    if($3gn===undefined){$3gn=$init$$3gh()();$3gn.$crtmm$=getDocument.$crtmm$;}
    return $3gn;
}
ex$.getDocument=getDocument;
getDocument.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3gh},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','document']};};
$prop$getDocument={get:getDocument,$crtmm$:getDocument.$crtmm$};
get$3gh=getDocument;$prop$get$3gh=getDocument;
ex$.$prop$getDocument=$prop$getDocument;

//ObjectDef json at xmlhttprequest.ceylon (12:0-12:63)
function $3gi(){
    var json$=new $3gi.$$;XMLHttpRequestResponseType("json",json$);
    return json$;
};$3gi.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestResponseType},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','json']};};
function $init$$3gi(){
    if($3gi.$$===undefined){
        m$3g8.initTypeProto($3gi,'com.openswimsoftware.ceylon.js.xmlhttprequest::json',$init$XMLHttpRequestResponseType());
    }
    return $3gi;
}
ex$.$init$$3gi=$init$$3gi;
$init$$3gi();
var $3go;
function getJson(){
    if($3go===undefined){$3go=$init$$3gi()();$3go.$crtmm$=getJson.$crtmm$;}
    return $3go;
}
ex$.getJson=getJson;
getJson.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3gi},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','json']};};
$prop$getJson={get:getJson,$crtmm$:getJson.$crtmm$};
get$3gi=getJson;$prop$get$3gi=getJson;
ex$.$prop$getJson=$prop$getJson;

//ObjectDef text at xmlhttprequest.ceylon (13:0-13:63)
function $3gj(){
    var text$=new $3gj.$$;XMLHttpRequestResponseType("text",text$);
    return text$;
};$3gj.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestResponseType},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','text']};};
function $init$$3gj(){
    if($3gj.$$===undefined){
        m$3g8.initTypeProto($3gj,'com.openswimsoftware.ceylon.js.xmlhttprequest::text',$init$XMLHttpRequestResponseType());
    }
    return $3gj;
}
ex$.$init$$3gj=$init$$3gj;
$init$$3gj();
var $3gp;
function getText(){
    if($3gp===undefined){$3gp=$init$$3gj()();$3gp.$crtmm$=getText.$crtmm$;}
    return $3gp;
}
ex$.getText=getText;
getText.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3gj},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','text']};};
$prop$getText={get:getText,$crtmm$:getText.$crtmm$};
get$3gj=getText;$prop$get$3gj=getText;
ex$.$prop$getText=$prop$getText;

//ClassDef ReadyState at xmlhttprequest.ceylon (15:0-15:152)
function ReadyState($3gq,readyState$){
    $init$ReadyState();
    if(readyState$===undefined)m$3g8.throwexc(m$3g8.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    readyState$.$3gq_=$3gq;
    return readyState$;
}
ReadyState.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3g8.Basic},ps:[{nm:'num',mt:'prm',$t:{t:m$3g8.Integer}}],of:[$prop$get$3gr,$prop$get$3gs,$prop$get$3gt,$prop$get$3gu,$prop$get$3gv],pa:257,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','ReadyState']};};
ex$.ReadyState=ReadyState;
function $init$ReadyState(){
    if(ReadyState.$$===undefined){
        m$3g8.initTypeProto(ReadyState,'com.openswimsoftware.ceylon.js.xmlhttprequest::ReadyState',m$3g8.Basic);
        (function(readyState$){
            m$3g8.atr$(readyState$,'$3gq',function(){return this.$3gq_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3g8.Integer},$cont:ReadyState,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','ReadyState','$at','num$yj95dv']};});
        })(ReadyState.$$.prototype);
    }
    return ReadyState;
}
ex$.$init$ReadyState=$init$ReadyState;
$init$ReadyState();

//ObjectDef readyStateUnsent at xmlhttprequest.ceylon (17:0-17:54)
function $3gr(){
    var readyStateUnsent$=new $3gr.$$;ReadyState(0,readyStateUnsent$);
    return readyStateUnsent$;
};$3gr.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ReadyState},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateUnsent']};};
function $init$$3gr(){
    if($3gr.$$===undefined){
        m$3g8.initTypeProto($3gr,'com.openswimsoftware.ceylon.js.xmlhttprequest::readyStateUnsent',$init$ReadyState());
    }
    return $3gr;
}
ex$.$init$$3gr=$init$$3gr;
$init$$3gr();
var $3gw;
function getReadyStateUnsent(){
    if($3gw===undefined){$3gw=$init$$3gr()();$3gw.$crtmm$=getReadyStateUnsent.$crtmm$;}
    return $3gw;
}
ex$.getReadyStateUnsent=getReadyStateUnsent;
getReadyStateUnsent.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3gr},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateUnsent']};};
$prop$getReadyStateUnsent={get:getReadyStateUnsent,$crtmm$:getReadyStateUnsent.$crtmm$};
get$3gr=getReadyStateUnsent;$prop$get$3gr=getReadyStateUnsent;
ex$.$prop$getReadyStateUnsent=$prop$getReadyStateUnsent;

//ObjectDef readyStateOpened at xmlhttprequest.ceylon (18:0-18:54)
function $3gs(){
    var readyStateOpened$=new $3gs.$$;ReadyState(1,readyStateOpened$);
    return readyStateOpened$;
};$3gs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ReadyState},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateOpened']};};
function $init$$3gs(){
    if($3gs.$$===undefined){
        m$3g8.initTypeProto($3gs,'com.openswimsoftware.ceylon.js.xmlhttprequest::readyStateOpened',$init$ReadyState());
    }
    return $3gs;
}
ex$.$init$$3gs=$init$$3gs;
$init$$3gs();
var $3gx;
function getReadyStateOpened(){
    if($3gx===undefined){$3gx=$init$$3gs()();$3gx.$crtmm$=getReadyStateOpened.$crtmm$;}
    return $3gx;
}
ex$.getReadyStateOpened=getReadyStateOpened;
getReadyStateOpened.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3gs},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateOpened']};};
$prop$getReadyStateOpened={get:getReadyStateOpened,$crtmm$:getReadyStateOpened.$crtmm$};
get$3gs=getReadyStateOpened;$prop$get$3gs=getReadyStateOpened;
ex$.$prop$getReadyStateOpened=$prop$getReadyStateOpened;

//ObjectDef readyStateHeadersReceived at xmlhttprequest.ceylon (19:0-19:63)
function $3gt(){
    var readyStateHeadersReceived$=new $3gt.$$;ReadyState(2,readyStateHeadersReceived$);
    return readyStateHeadersReceived$;
};$3gt.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ReadyState},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateHeadersReceived']};};
function $init$$3gt(){
    if($3gt.$$===undefined){
        m$3g8.initTypeProto($3gt,'com.openswimsoftware.ceylon.js.xmlhttprequest::readyStateHeadersReceived',$init$ReadyState());
    }
    return $3gt;
}
ex$.$init$$3gt=$init$$3gt;
$init$$3gt();
var $3gy;
function getReadyStateHeadersReceived(){
    if($3gy===undefined){$3gy=$init$$3gt()();$3gy.$crtmm$=getReadyStateHeadersReceived.$crtmm$;}
    return $3gy;
}
ex$.getReadyStateHeadersReceived=getReadyStateHeadersReceived;
getReadyStateHeadersReceived.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3gt},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateHeadersReceived']};};
$prop$getReadyStateHeadersReceived={get:getReadyStateHeadersReceived,$crtmm$:getReadyStateHeadersReceived.$crtmm$};
get$3gt=getReadyStateHeadersReceived;$prop$get$3gt=getReadyStateHeadersReceived;
ex$.$prop$getReadyStateHeadersReceived=$prop$getReadyStateHeadersReceived;

//ObjectDef readyStateLoading at xmlhttprequest.ceylon (20:0-20:55)
function $3gu(){
    var readyStateLoading$=new $3gu.$$;ReadyState(3,readyStateLoading$);
    return readyStateLoading$;
};$3gu.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ReadyState},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateLoading']};};
function $init$$3gu(){
    if($3gu.$$===undefined){
        m$3g8.initTypeProto($3gu,'com.openswimsoftware.ceylon.js.xmlhttprequest::readyStateLoading',$init$ReadyState());
    }
    return $3gu;
}
ex$.$init$$3gu=$init$$3gu;
$init$$3gu();
var $3gz;
function getReadyStateLoading(){
    if($3gz===undefined){$3gz=$init$$3gu()();$3gz.$crtmm$=getReadyStateLoading.$crtmm$;}
    return $3gz;
}
ex$.getReadyStateLoading=getReadyStateLoading;
getReadyStateLoading.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3gu},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateLoading']};};
$prop$getReadyStateLoading={get:getReadyStateLoading,$crtmm$:getReadyStateLoading.$crtmm$};
get$3gu=getReadyStateLoading;$prop$get$3gu=getReadyStateLoading;
ex$.$prop$getReadyStateLoading=$prop$getReadyStateLoading;

//ObjectDef readyStateDone at xmlhttprequest.ceylon (21:0-21:52)
function $3gv(){
    var readyStateDone$=new $3gv.$$;ReadyState(4,readyStateDone$);
    return readyStateDone$;
};$3gv.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ReadyState},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateDone']};};
function $init$$3gv(){
    if($3gv.$$===undefined){
        m$3g8.initTypeProto($3gv,'com.openswimsoftware.ceylon.js.xmlhttprequest::readyStateDone',$init$ReadyState());
    }
    return $3gv;
}
ex$.$init$$3gv=$init$$3gv;
$init$$3gv();
var $3h0;
function getReadyStateDone(){
    if($3h0===undefined){$3h0=$init$$3gv()();$3h0.$crtmm$=getReadyStateDone.$crtmm$;}
    return $3h0;
}
ex$.getReadyStateDone=getReadyStateDone;
getReadyStateDone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3gv},pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateDone']};};
$prop$getReadyStateDone={get:getReadyStateDone,$crtmm$:getReadyStateDone.$crtmm$};
get$3gv=getReadyStateDone;$prop$get$3gv=getReadyStateDone;
ex$.$prop$getReadyStateDone=$prop$getReadyStateDone;

//ClassDef XMLHttpRequestOptions at xmlhttprequest.ceylon (23:0-31:0)
function XMLHttpRequestOptions(anon,xMLHttpRequestOptions$){
    $init$XMLHttpRequestOptions();
    if(xMLHttpRequestOptions$===undefined)xMLHttpRequestOptions$=new XMLHttpRequestOptions.$$;
    if(anon===undefined){anon=false;}
    xMLHttpRequestOptions$.anon_=anon;
    return xMLHttpRequestOptions$;
}
XMLHttpRequestOptions.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3g8.Basic},ps:[{nm:'anon',mt:'prm',def:1,$t:{t:m$3g8.$_Boolean},pa:1}],pa:1,an:function(){return[m$3g8.doc("XMLHttpRequest options")];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestOptions']};};
ex$.XMLHttpRequestOptions=XMLHttpRequestOptions;
function $init$XMLHttpRequestOptions(){
    if(XMLHttpRequestOptions.$$===undefined){
        m$3g8.initTypeProto(XMLHttpRequestOptions,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestOptions',m$3g8.Basic);
        (function(xMLHttpRequestOptions$){
            
            //MethodDef toJson at xmlhttprequest.ceylon (26:1-30:1)
            xMLHttpRequestOptions$.toJson=function(){
                var xMLHttpRequestOptions$=this;
                
                //AttributeDecl json at xmlhttprequest.ceylon (28:2-28:38)
                var $3h1=($3h2=[m$3g8.Entry("anon",xMLHttpRequestOptions$.anon,{Item$Entry:{t:m$3g8.$_Boolean},Key$Entry:{t:m$3g8.$_String}})].reifyCeylonType({t:m$3g8.Entry,a:{Item$Entry:{t:m$3g8.$_Boolean},Key$Entry:{t:m$3g8.$_String}}}),m$3gc.JSON($3h2));
                var $3h2;
                return $3h1.toJson();
            };xMLHttpRequestOptions$.toJson.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$3gc.JSJSON},ps:[],$cont:XMLHttpRequestOptions,pa:1,an:function(){return[m$3g8.doc("to native json")];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestOptions','$m','toJson']};};
            m$3g8.atr$(xMLHttpRequestOptions$,'anon',function(){return this.anon_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3g8.$_Boolean},$cont:XMLHttpRequestOptions,pa:1,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestOptions','$at','anon']};});
        })(XMLHttpRequestOptions.$$.prototype);
    }
    return XMLHttpRequestOptions;
}
ex$.$init$XMLHttpRequestOptions=$init$XMLHttpRequestOptions;
$init$XMLHttpRequestOptions();

//MethodDef createXMLHttpRequest at xmlhttprequest.ceylon (33:0-44:0)
function createXMLHttpRequest($3h3){
    if($3h3===undefined){$3h3=null;}
    var $3h4;
    if(m$3g8.nn$(($3h4=$3h3))){
        /*BEG dynblock*/
        return XMLHttpRequest((typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: XMLHttpRequest"),'37:25-37:38','xmlhttprequest.ceylon'):XMLHttpRequest)(($3h5=$3h4,m$3g8.JsCallable($3h5,m$3g8.nn$($3h5)?$3h5.toJson:null))));
        /*END dynblock*/
        var $3h5;
    }else {
        /*BEG dynblock*/
        return XMLHttpRequest((typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: XMLHttpRequest"),'41:25-41:38','xmlhttprequest.ceylon'):XMLHttpRequest)());
        /*END dynblock*/
    }
}
ex$.createXMLHttpRequest=createXMLHttpRequest;
createXMLHttpRequest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:XMLHttpRequest},ps:[{nm:'options',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:XMLHttpRequestOptions}]}}],pa:1,an:function(){return[m$3g8.doc("create a new XMLHttpRequest")];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','createXMLHttpRequest']};};

//ClassDef XMLHttpRequestUploadAbs at xmlhttprequestevent.ceylon (113:0-113:88)
function XMLHttpRequestUploadAbs(xMLHttpRequestUploadAbs$){
    $init$XMLHttpRequestUploadAbs();
    if(xMLHttpRequestUploadAbs$===undefined)m$3g8.throwexc(m$3g8.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    XMLHttpRequestEventTargetAbs(xMLHttpRequestUploadAbs$);
    return xMLHttpRequestUploadAbs$;
}
XMLHttpRequestUploadAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestEventTargetAbs},ps:[],pa:257,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestUploadAbs']};};
ex$.XMLHttpRequestUploadAbs=XMLHttpRequestUploadAbs;
function $init$XMLHttpRequestUploadAbs(){
    if(XMLHttpRequestUploadAbs.$$===undefined){
        m$3g8.initTypeProto(XMLHttpRequestUploadAbs,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestUploadAbs',$init$XMLHttpRequestEventTargetAbs());
    }
    return XMLHttpRequestUploadAbs;
}
ex$.$init$XMLHttpRequestUploadAbs=$init$XMLHttpRequestUploadAbs;
$init$XMLHttpRequestUploadAbs();
var m$3h7=require('com/openswimsoftware/ceylon/js/html/5.0.0/com.openswimsoftware.ceylon.js.html-5.0.0');
m$3g8.$addmod$(m$3h7,'com.openswimsoftware.ceylon.js.html/5.0.0');

//MethodDef createFormData at formdata.ceylon (5:0-10:0)
function createFormData($3lt){
    if($3lt===undefined){$3lt=null;}
    /*BEG dynblock*/
    return FormData((typeof FormData==='undefined'||FormData===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: FormData"),'8:18-8:25','formdata.ceylon'):FormData)((typeof f==='undefined'||f===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: f"),'8:29-8:29','formdata.ceylon'):f)));
    /*END dynblock*/
}
ex$.createFormData=createFormData;
createFormData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:FormData},ps:[{nm:'form',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:m$3h7.HTMLFormElement}]}}],pa:1,an:function(){return[m$3g8.doc("create form data")];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','createFormData']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
