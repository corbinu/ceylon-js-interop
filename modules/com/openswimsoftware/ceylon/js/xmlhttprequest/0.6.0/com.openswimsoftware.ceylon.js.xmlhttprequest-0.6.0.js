(function(define) { define(function(require, ex$, module) {
var $CCMM$={"$mod-deps":["ceylon.language\/1.1.0",{path:"com.openswimsoftware.ceylon.js.language\/1.8.0",exp:1},{path:"com.openswimsoftware.ceylon.js.file\/0.12.0",exp:1},{path:"com.openswimsoftware.ceylon.js.dom\/4.0.0",exp:1},{path:"com.openswimsoftware.ceylon.js.html\/5.0.0",exp:1},"com.openswimsoftware.ceylon.js.json\/1.0.0"],"$mod-name":"com.openswimsoftware.ceylon.js.xmlhttprequest","$mod-version":"0.6.0","$mod-bin":"7.0","com.openswimsoftware.ceylon.js.xmlhttprequest":{arraybuffer:{super:{$pk:".",$nm:"XMLHttpRequestResponseType"},$mt:"o",$an:{shared:[]},$nm:"arraybuffer"},readyStateHeadersReceived:{super:{$pk:".",$nm:"ReadyState"},$mt:"o",$an:{shared:[]},$nm:"readyStateHeadersReceived"},XMLHttpRequestOptions:{super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$an:{shared:[]},$nm:"anon"}],$mt:"c",$an:{shared:[],doc:["XMLHttpRequest options"]},$m:{toJson:{$t:{$md:"com.openswimsoftware.ceylon.js.json",$pk:"com.openswimsoftware.ceylon.js.json",$nm:"JSJSON"},$mt:"m",$an:{shared:[],doc:["to native json"]},$nm:"toJson"}},$at:{anon:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[]},$nm:"anon"}},$nm:"XMLHttpRequestOptions"},"$pkg-shared":1,document:{super:{$pk:".",$nm:"XMLHttpRequestResponseType"},$mt:"o",$an:{shared:[]},$nm:"document"},XMLHttpRequestUpload:{super:{$pk:".",$nm:"XMLHttpRequestUploadAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["XMLHttpRequestUpload"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$9ktoe9:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"XMLHttpRequestUpload"},XMLHttpRequest:{super:{$pk:".",$nm:"XMLHttpRequestAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["XMLHttpRequest"]},$at:{n$11q9g6:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"},native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"}},$nm:"XMLHttpRequest"},json:{super:{$pk:".",$nm:"XMLHttpRequestResponseType"},$mt:"o",$an:{shared:[]},$nm:"json"},createFormData:{$t:{$pk:".",$nm:"FormData"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.html",$pk:"com.openswimsoftware.ceylon.js.html",$nm:"HTMLFormElement"}]},$mt:"prm",$def:1,$nm:"form"}]],$mt:"m",$an:{shared:[],doc:["create form data"]},$nm:"createFormData"},XMLHttpRequestEventTarget:{super:{$pk:".",$nm:"XMLHttpRequestEventTargetAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["XMLHttpRequestEventTarget"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$og31rt:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"XMLHttpRequestEventTarget"},readyStateUnsent:{super:{$pk:".",$nm:"ReadyState"},$mt:"o",$an:{shared:[]},$nm:"readyStateUnsent"},ReadyState:{abstract:1,super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},of:[{$pk:".",$nm:"readyStateUnsent"},{$pk:".",$nm:"readyStateOpened"},{$pk:".",$nm:"readyStateHeadersReceived"},{$pk:".",$nm:"readyStateLoading"},{$pk:".",$nm:"readyStateDone"}],$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"num"}],$mt:"c",$an:{abstract:[],shared:[]},$at:{num$2aqx6k:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"a",$nm:"num"}},$nm:"ReadyState"},FormDataAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{append:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"name"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[],doc:["append the value to the form data"]},$nm:"append"},appendBlob:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"name"},{$t:{$md:"com.openswimsoftware.ceylon.js.file",$pk:"com.openswimsoftware.ceylon.js.file",$nm:"Blob"},$mt:"prm",$nm:"val"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]}]},$mt:"prm",$nm:"filename"}]],$mt:"m",$an:{shared:[],doc:["append the blob to the form data"]},$nm:"appendBlob"}},$nm:"FormDataAbs"},text:{super:{$pk:".",$nm:"XMLHttpRequestResponseType"},$mt:"o",$an:{shared:[]},$nm:"text"},blank:{super:{$pk:".",$nm:"XMLHttpRequestResponseType"},$mt:"o",$an:{shared:[]},$nm:"blank"},readyStateLoading:{super:{$pk:".",$nm:"ReadyState"},$mt:"o",$an:{shared:[]},$nm:"readyStateLoading"},readyStateOpened:{super:{$pk:".",$nm:"ReadyState"},$mt:"o",$an:{shared:[]},$nm:"readyStateOpened"},FormData:{super:{$pk:".",$nm:"FormDataAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["form data for sending over using xmlhttprequest"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$iwn18k:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"FormData"},readyStateDone:{super:{$pk:".",$nm:"ReadyState"},$mt:"o",$an:{shared:[]},$nm:"readyStateDone"},XMLHttpRequestEventTargetAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"EventTargetAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{setOnprogress:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"prm",$pt:"f",$nm:"handler"}]],$mt:"m",$an:{shared:[],doc:["sets onprogress handler"]},$m:{handler$490njr:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"m",$nm:"handler"}},$nm:"setOnprogress"},getOnload:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns a function Anything(Event event) onload handler"]},$nm:"getOnload"},setOnloadend:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"prm",$pt:"f",$nm:"handler"}]],$mt:"m",$an:{shared:[],doc:["sets onloadend handler"]},$m:{handler$gaxurx:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"m",$nm:"handler"}},$nm:"setOnloadend"},getOnloadend:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns a function Anything(Event event) returns onloadend handler"]},$nm:"getOnloadend"},setOnloadstart:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"prm",$pt:"f",$nm:"handler"}]],$mt:"m",$an:{shared:[],doc:["sets onloadstart handler"]},$m:{handler$cvvf0s:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"m",$nm:"handler"}},$nm:"setOnloadstart"},getOntimeout:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns a function Anything(Event event) ontimeout handler"]},$nm:"getOntimeout"},setOnerror:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"prm",$pt:"f",$nm:"handler"}]],$mt:"m",$an:{shared:[],doc:["sets onerror handler"]},$m:{handler$czgww8:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"m",$nm:"handler"}},$nm:"setOnerror"},setOntimeout:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"prm",$pt:"f",$nm:"handler"}]],$mt:"m",$an:{shared:[],doc:["sets ontimeout handler"]},$m:{handler$defh47:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"m",$nm:"handler"}},$nm:"setOntimeout"},getOnerror:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns a function Anything(Event event) onerror handler"]},$nm:"getOnerror"},getOnloadstart:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns a function Anything(Event event) onloadstart handler"]},$nm:"getOnloadstart"},getOnprogress:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns a function Anything(Event event) onprogress handler"]},$nm:"getOnprogress"},getOnabort:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns a function Anything(Event event) onabort handler"]},$nm:"getOnabort"},setOnabort:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"prm",$pt:"f",$nm:"handler"}]],$mt:"m",$an:{shared:[],doc:["sets onabort handler"]},$m:{handler$fgy78g:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"m",$nm:"handler"}},$nm:"setOnabort"},setOnload:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"prm",$pt:"f",$nm:"handler"}]],$mt:"m",$an:{shared:[],doc:["sets onload handler"]},$m:{handler$tp301k:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"m",$nm:"handler"}},$nm:"setOnload"}},$nm:"XMLHttpRequestEventTargetAbs"},XMLHttpRequestResponseType:{abstract:1,super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},of:[{$pk:".",$nm:"blank"},{$pk:".",$nm:"arraybuffer"},{$pk:".",$nm:"blob"},{$pk:".",$nm:"document"},{$pk:".",$nm:"json"},{$pk:".",$nm:"text"}],$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"name"}],$mt:"c",$an:{abstract:[],shared:[]},$at:{name$k5081q:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$nm:"name"}},$nm:"XMLHttpRequestResponseType"},blob:{super:{$pk:".",$nm:"XMLHttpRequestResponseType"},$mt:"o",$an:{shared:[]},$nm:"blob"},createXMLHttpRequest:{$t:{$pk:".",$nm:"XMLHttpRequest"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"XMLHttpRequestOptions"}]},$mt:"prm",$def:1,$nm:"options"}]],$mt:"m",$an:{shared:[],doc:["create a new XMLHttpRequest"]},$nm:"createXMLHttpRequest"},XMLHttpRequestUploadAbs:{abstract:1,super:{$pk:".",$nm:"XMLHttpRequestEventTargetAbs"},$mt:"c",$an:{abstract:[],shared:[]},$nm:"XMLHttpRequestUploadAbs"},XMLHttpRequestAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{setResponseType:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"XMLHttpRequestResponseType"},$mt:"prm",$nm:"responseType"}]],$mt:"m",$an:{shared:[],doc:["set the request response type"]},$nm:"setResponseType"},getWithCredentials:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["return whether request should be made with credentials"]},$nm:"getWithCredentials"},getAllResponseHeaders:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"m",$an:{shared:[],doc:["returns all response headers as a string sepreated by new lines"]},$nm:"getAllResponseHeaders"},send:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"com.openswimsoftware.ceylon.js.file",$pk:"com.openswimsoftware.ceylon.js.file",$nm:"Blob"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Document"},{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"FormData"}]}]},$mt:"prm",$def:1,$nm:"data"}]],$mt:"m",$an:{shared:[],doc:["initiate the request"]},$nm:"send"},responseXML:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Document"}]},$mt:"m",$an:{shared:[],doc:["returns the response as an XML Document"]},$nm:"responseXML"},status:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns http status code"]},$nm:"status"},getOnreadystatechange:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns a function Anything(Event event) which is on readystatechange handler"]},$nm:"getOnreadystatechange"},responseText:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the response as a string"]},$nm:"responseText"},statusText:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns http text status"]},$nm:"statusText"},readyState:{$t:{$pk:".",$nm:"ReadyState"},$mt:"m",$an:{shared:[],doc:["returns the current ready state"]},$nm:"readyState"},overrideMimeType:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"mime"}]],$mt:"m",$an:{shared:[],doc:["set the request response mime type"]},$nm:"overrideMimeType"},upload:{$t:{$pk:".",$nm:"XMLHttpRequestUpload"},$mt:"m",$an:{shared:[],doc:["returns the upload request"]},$nm:"upload"},response:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns the response as ArrayBuffer|Blob|Document|JSON"]},$nm:"response"},open:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"method"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"url"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$nm:"async"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]}]},$mt:"prm",$def:1,$nm:"user"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]}]},$mt:"prm",$def:1,$nm:"password"}]],$mt:"m",$an:{shared:[],doc:["open a new request"]},$nm:"open"},getResponseHeader:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"header"}]],$mt:"m",$an:{shared:[],doc:["returns the specified response header"]},$nm:"getResponseHeader"},setRequestHeader:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"header"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[],doc:["set a request headers value"]},$nm:"setRequestHeader"},getTimeout:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the request timeout"]},$nm:"getTimeout"},getResponseType:{$t:{$pk:".",$nm:"XMLHttpRequestResponseType"},$mt:"m",$an:{shared:[],doc:["returns the request response type"]},$nm:"getResponseType"},setTimeout:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"timeout"}]],$mt:"m",$an:{shared:[],doc:["set the request timeout"]},$nm:"setTimeout"},setOnreadystatechange:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"prm",$pt:"f",$nm:"handler"}]],$mt:"m",$an:{shared:[],doc:["sets on ready state change handler"]},$m:{handler$jpwaxv:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"com.openswimsoftware.ceylon.js.dom",$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"m",$nm:"handler"}},$nm:"setOnreadystatechange"},setWithCredentials:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$nm:"credentials"}]],$mt:"m",$an:{shared:[],doc:["set that request should be made with credentials"]},$nm:"setWithCredentials"},abort:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[],doc:["cancels network activity"]},$nm:"abort"}},$nm:"XMLHttpRequestAbs"}}};
ex$.$CCMM$=function(){return $CCMM$;};
var m$1=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$1.$addmod$(m$1,'ceylon.language/1.1.0');
var m$9f=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
m$1.$addmod$(m$9f,'com.openswimsoftware.ceylon.js.language/1.8.0');
var m$q8=require('com/openswimsoftware/ceylon/js/file/0.12.0/com.openswimsoftware.ceylon.js.file-0.12.0');
m$1.$addmod$(m$q8,'com.openswimsoftware.ceylon.js.file/0.12.0');
var m$bx=require('com/openswimsoftware/ceylon/js/html/5.0.0/com.openswimsoftware.ceylon.js.html-5.0.0');
m$1.$addmod$(m$bx,'com.openswimsoftware.ceylon.js.html/5.0.0');
function createFormData($q9){
    if($q9===undefined){$q9=null;}
    /*Begin dynamic block*/
    return FormData((typeof FormData==='undefined'||FormData===null?m$1.throwexc(m$1.Exception("Undefined or null reference: FormData"),'8:18-8:25','formdata.ceylon'):FormData)((typeof f==='undefined'||f===null?m$1.throwexc(m$1.Exception("Undefined or null reference: f"),'8:29-8:29','formdata.ceylon'):f)));
    /*End dynamic block*/
}
ex$.createFormData=createFormData;
createFormData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:FormData},$ps:[{$nm:'form',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$bx.HTMLFormElement}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("create form data"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','createFormData']};};
function FormDataAbs(formDataAbs$){
    $init$FormDataAbs();
    if(formDataAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(formDataAbs$);
    return formDataAbs$;
}
FormDataAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','FormDataAbs']};};
ex$.FormDataAbs=FormDataAbs;
function $init$FormDataAbs(){
    if(FormDataAbs.$$===undefined){
        m$1.initTypeProto(FormDataAbs,'com.openswimsoftware.ceylon.js.xmlhttprequest::FormDataAbs',m$9f.JSObjectAbs);
        (function(formDataAbs$){
            formDataAbs$.append=function append($qa,$qb){
                var formDataAbs$=this;
                var $qc=$qa;
                if(m$1.is$($qa,{t:m$1.String})) {
                    var $qd=$qb;
                    if(m$1.is$($qb,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        formDataAbs$.$_native.append($qc.valueOf(),$qd.valueOf());
                        /*End dynamic block*/
                    }else if(m$1.is$($qb,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        formDataAbs$.$_native.append($qc.valueOf(),$qd.$_native);
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($qa,{t:m$9f.JSString})) {
                    var $qe=$qb;
                    if(m$1.is$($qb,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        formDataAbs$.$_native.append($qc.$_native,$qe.valueOf());
                        /*End dynamic block*/
                    }else if(m$1.is$($qb,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        formDataAbs$.$_native.append($qc.$_native,$qe.$_native);
                        /*End dynamic block*/
                    }
                }
            };formDataAbs$.append.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:FormDataAbs,$an:function(){return[m$1.doc("append the value to the form data"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','FormDataAbs','$m','append']};};
            formDataAbs$.appendBlob=function appendBlob($qf,$qg,$qh){
                var formDataAbs$=this;
                var $qi=$qf;
                if(m$1.is$($qf,{t:m$1.String})) {
                    var $qj=$qh;
                    if(m$1.is$($qh,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        formDataAbs$.$_native.append($qi.valueOf(),$qg.$_native,$qj.valueOf());
                        /*End dynamic block*/
                    }else if(m$1.is$($qh,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        formDataAbs$.$_native.append($qi.valueOf(),$qg.$_native,$qj.$_native);
                        /*End dynamic block*/
                    }else if(m$1.is$($qh,{t:m$1.Null})) {
                        /*Begin dynamic block*/
                        formDataAbs$.$_native.append($qi.valueOf(),$qg.$_native);
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($qf,{t:m$9f.JSString})) {
                    var $qk=$qh;
                    if(m$1.is$($qh,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        formDataAbs$.$_native.append($qi.$_native,$qg.$_native,$qk.valueOf());
                        /*End dynamic block*/
                    }else if(m$1.is$($qh,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        formDataAbs$.$_native.append($qi.$_native,$qg.$_native,$qk.$_native);
                        /*End dynamic block*/
                    }else if(m$1.is$($qh,{t:m$1.Null})) {
                        /*Begin dynamic block*/
                        formDataAbs$.$_native.append($qi.$_native,$qg.$_native);
                        /*End dynamic block*/
                    }
                }
            };formDataAbs$.appendBlob.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:m$q8.Blob},$an:function(){return[];}},{$nm:'filename',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]}]},$an:function(){return[];}}],$cont:FormDataAbs,$an:function(){return[m$1.doc("append the blob to the form data"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','FormDataAbs','$m','appendBlob']};};
        })(FormDataAbs.$$.prototype);
    }
    return FormDataAbs;
}
ex$.$init$FormDataAbs=$init$FormDataAbs;
$init$FormDataAbs();
function FormData($ql,formData$){
    $init$FormData();
    if(formData$===undefined)formData$=new FormData.$$;
    formData$.$ql_=$ql;
    FormDataAbs(formData$);
    formData$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:FormData,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','FormData','$at','native']};}};
    /*Begin dynamic block*/
    formData$.$_native=formData$.$ql;/*End dynamic block*/
    return formData$;
}
FormData.$crtmm$=function(){return{mod:$CCMM$,'super':{t:FormDataAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("form data for sending over using xmlhttprequest"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','FormData']};};
ex$.FormData=FormData;
function $init$FormData(){
    if(FormData.$$===undefined){
        m$1.initTypeProto(FormData,'com.openswimsoftware.ceylon.js.xmlhttprequest::FormData',$init$FormDataAbs());
        (function(formData$){
            m$1.atr$(formData$,'$ql',function(){return this.$ql_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:FormData,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','FormData','$at','n$iwn18k']};});
        })(FormData.$$.prototype);
    }
    return FormData;
}
ex$.$init$FormData=$init$FormData;
$init$FormData();
ex$.$mod$ans$=function(){return[m$1.doc("based on XMLHttpRequest working draft 6")];};
ex$.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.language/1.8.0':function(){return[m$1.shared()];},
'com.openswimsoftware.ceylon.js.file/0.12.0':function(){return[m$1.shared()];},
'com.openswimsoftware.ceylon.js.dom/4.0.0':function(){return[m$1.shared()];},
'com.openswimsoftware.ceylon.js.html/5.0.0':function(){return[m$1.shared()];},
'com.openswimsoftware.ceylon.js.json/1.0.0':[]
};};
ex$.$pkg$ans$com$openswimsoftware$ceylon$js$xmlhttprequest=function(){return[m$1.shared()];};
var m$qm=require('com/openswimsoftware/ceylon/js/dom/4.0.0/com.openswimsoftware.ceylon.js.dom-4.0.0');
m$1.$addmod$(m$qm,'com.openswimsoftware.ceylon.js.dom/4.0.0');
var m$hr=require('com/openswimsoftware/ceylon/js/json/1.0.0/com.openswimsoftware.ceylon.js.json-1.0.0');
m$1.$addmod$(m$hr,'com.openswimsoftware.ceylon.js.json/1.0.0');
function XMLHttpRequestResponseType($qn,xMLHttpRequestResponseType$){
    $init$XMLHttpRequestResponseType();
    if(xMLHttpRequestResponseType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    xMLHttpRequestResponseType$.$qn_=$qn;
    return xMLHttpRequestResponseType$;
}
XMLHttpRequestResponseType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],of:[$prop$get$qo,$prop$get$qp,$prop$get$qq,$prop$get$qr,$prop$get$qs,$prop$get$qt],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestResponseType']};};
ex$.XMLHttpRequestResponseType=XMLHttpRequestResponseType;
function $init$XMLHttpRequestResponseType(){
    if(XMLHttpRequestResponseType.$$===undefined){
        m$1.initTypeProto(XMLHttpRequestResponseType,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestResponseType',m$1.Basic);
        (function(xMLHttpRequestResponseType$){
            m$1.atr$(xMLHttpRequestResponseType$,'$qn',function(){return this.$qn_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:XMLHttpRequestResponseType,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestResponseType','$at','name$k5081q']};});
        })(XMLHttpRequestResponseType.$$.prototype);
    }
    return XMLHttpRequestResponseType;
}
ex$.$init$XMLHttpRequestResponseType=$init$XMLHttpRequestResponseType;
$init$XMLHttpRequestResponseType();
function $qo(){
    var blank$=new $qo.$$;
    XMLHttpRequestResponseType("",blank$);
    return blank$;
};$qo.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestResponseType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','blank']};};
function $init$$qo(){
    if($qo.$$===undefined){
        m$1.initTypeProto($qo,'com.openswimsoftware.ceylon.js.xmlhttprequest::blank',$init$XMLHttpRequestResponseType());
    }
    return $qo;
}
ex$.$init$$qo=$init$$qo;
$init$$qo();
var $qu;
function getBlank(){
    if($qu===undefined){$qu=$init$$qo()();$qu.$crtmm$=getBlank.$crtmm$;}
    return $qu;
}
ex$.getBlank=getBlank;
getBlank.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$qo},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','blank']};};
$prop$getBlank={get:getBlank,$crtmm$:getBlank.$crtmm$};
get$qo=getBlank;$prop$get$qo=getBlank;
ex$.$prop$getBlank=$prop$getBlank;
function $qp(){
    var arraybuffer$=new $qp.$$;
    XMLHttpRequestResponseType("arraybuffer",arraybuffer$);
    return arraybuffer$;
};$qp.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestResponseType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','arraybuffer']};};
function $init$$qp(){
    if($qp.$$===undefined){
        m$1.initTypeProto($qp,'com.openswimsoftware.ceylon.js.xmlhttprequest::arraybuffer',$init$XMLHttpRequestResponseType());
    }
    return $qp;
}
ex$.$init$$qp=$init$$qp;
$init$$qp();
var $qv;
function getArraybuffer(){
    if($qv===undefined){$qv=$init$$qp()();$qv.$crtmm$=getArraybuffer.$crtmm$;}
    return $qv;
}
ex$.getArraybuffer=getArraybuffer;
getArraybuffer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$qp},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','arraybuffer']};};
$prop$getArraybuffer={get:getArraybuffer,$crtmm$:getArraybuffer.$crtmm$};
get$qp=getArraybuffer;$prop$get$qp=getArraybuffer;
ex$.$prop$getArraybuffer=$prop$getArraybuffer;
function $qq(){
    var blob$=new $qq.$$;
    XMLHttpRequestResponseType("blob",blob$);
    return blob$;
};$qq.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestResponseType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','blob']};};
function $init$$qq(){
    if($qq.$$===undefined){
        m$1.initTypeProto($qq,'com.openswimsoftware.ceylon.js.xmlhttprequest::blob',$init$XMLHttpRequestResponseType());
    }
    return $qq;
}
ex$.$init$$qq=$init$$qq;
$init$$qq();
var $qw;
function getBlob(){
    if($qw===undefined){$qw=$init$$qq()();$qw.$crtmm$=getBlob.$crtmm$;}
    return $qw;
}
ex$.getBlob=getBlob;
getBlob.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$qq},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','blob']};};
$prop$getBlob={get:getBlob,$crtmm$:getBlob.$crtmm$};
get$qq=getBlob;$prop$get$qq=getBlob;
ex$.$prop$getBlob=$prop$getBlob;
function $qr(){
    var document$=new $qr.$$;
    XMLHttpRequestResponseType("document",document$);
    return document$;
};$qr.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestResponseType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','document']};};
function $init$$qr(){
    if($qr.$$===undefined){
        m$1.initTypeProto($qr,'com.openswimsoftware.ceylon.js.xmlhttprequest::document',$init$XMLHttpRequestResponseType());
    }
    return $qr;
}
ex$.$init$$qr=$init$$qr;
$init$$qr();
var $qx;
function getDocument(){
    if($qx===undefined){$qx=$init$$qr()();$qx.$crtmm$=getDocument.$crtmm$;}
    return $qx;
}
ex$.getDocument=getDocument;
getDocument.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$qr},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','document']};};
$prop$getDocument={get:getDocument,$crtmm$:getDocument.$crtmm$};
get$qr=getDocument;$prop$get$qr=getDocument;
ex$.$prop$getDocument=$prop$getDocument;
function $qs(){
    var json$=new $qs.$$;
    XMLHttpRequestResponseType("json",json$);
    return json$;
};$qs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestResponseType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','json']};};
function $init$$qs(){
    if($qs.$$===undefined){
        m$1.initTypeProto($qs,'com.openswimsoftware.ceylon.js.xmlhttprequest::json',$init$XMLHttpRequestResponseType());
    }
    return $qs;
}
ex$.$init$$qs=$init$$qs;
$init$$qs();
var $qy;
function getJson(){
    if($qy===undefined){$qy=$init$$qs()();$qy.$crtmm$=getJson.$crtmm$;}
    return $qy;
}
ex$.getJson=getJson;
getJson.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$qs},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','json']};};
$prop$getJson={get:getJson,$crtmm$:getJson.$crtmm$};
get$qs=getJson;$prop$get$qs=getJson;
ex$.$prop$getJson=$prop$getJson;
function $qt(){
    var text$=new $qt.$$;
    XMLHttpRequestResponseType("text",text$);
    return text$;
};$qt.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestResponseType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','text']};};
function $init$$qt(){
    if($qt.$$===undefined){
        m$1.initTypeProto($qt,'com.openswimsoftware.ceylon.js.xmlhttprequest::text',$init$XMLHttpRequestResponseType());
    }
    return $qt;
}
ex$.$init$$qt=$init$$qt;
$init$$qt();
var $qz;
function getText(){
    if($qz===undefined){$qz=$init$$qt()();$qz.$crtmm$=getText.$crtmm$;}
    return $qz;
}
ex$.getText=getText;
getText.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$qt},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','text']};};
$prop$getText={get:getText,$crtmm$:getText.$crtmm$};
get$qt=getText;$prop$get$qt=getText;
ex$.$prop$getText=$prop$getText;
function ReadyState($r0,readyState$){
    $init$ReadyState();
    if(readyState$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    readyState$.$r0_=$r0;
    return readyState$;
}
ReadyState.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'num',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}}],of:[$prop$get$r1,$prop$get$r2,$prop$get$r3,$prop$get$r4,$prop$get$r5],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','ReadyState']};};
ex$.ReadyState=ReadyState;
function $init$ReadyState(){
    if(ReadyState.$$===undefined){
        m$1.initTypeProto(ReadyState,'com.openswimsoftware.ceylon.js.xmlhttprequest::ReadyState',m$1.Basic);
        (function(readyState$){
            m$1.atr$(readyState$,'$r0',function(){return this.$r0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadyState,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','ReadyState','$at','num$2aqx6k']};});
        })(ReadyState.$$.prototype);
    }
    return ReadyState;
}
ex$.$init$ReadyState=$init$ReadyState;
$init$ReadyState();
function $r1(){
    var readyStateUnsent$=new $r1.$$;
    ReadyState(0,readyStateUnsent$);
    return readyStateUnsent$;
};$r1.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ReadyState},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateUnsent']};};
function $init$$r1(){
    if($r1.$$===undefined){
        m$1.initTypeProto($r1,'com.openswimsoftware.ceylon.js.xmlhttprequest::readyStateUnsent',$init$ReadyState());
    }
    return $r1;
}
ex$.$init$$r1=$init$$r1;
$init$$r1();
var $r6;
function getReadyStateUnsent(){
    if($r6===undefined){$r6=$init$$r1()();$r6.$crtmm$=getReadyStateUnsent.$crtmm$;}
    return $r6;
}
ex$.getReadyStateUnsent=getReadyStateUnsent;
getReadyStateUnsent.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$r1},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateUnsent']};};
$prop$getReadyStateUnsent={get:getReadyStateUnsent,$crtmm$:getReadyStateUnsent.$crtmm$};
get$r1=getReadyStateUnsent;$prop$get$r1=getReadyStateUnsent;
ex$.$prop$getReadyStateUnsent=$prop$getReadyStateUnsent;
function $r2(){
    var readyStateOpened$=new $r2.$$;
    ReadyState(1,readyStateOpened$);
    return readyStateOpened$;
};$r2.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ReadyState},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateOpened']};};
function $init$$r2(){
    if($r2.$$===undefined){
        m$1.initTypeProto($r2,'com.openswimsoftware.ceylon.js.xmlhttprequest::readyStateOpened',$init$ReadyState());
    }
    return $r2;
}
ex$.$init$$r2=$init$$r2;
$init$$r2();
var $r7;
function getReadyStateOpened(){
    if($r7===undefined){$r7=$init$$r2()();$r7.$crtmm$=getReadyStateOpened.$crtmm$;}
    return $r7;
}
ex$.getReadyStateOpened=getReadyStateOpened;
getReadyStateOpened.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$r2},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateOpened']};};
$prop$getReadyStateOpened={get:getReadyStateOpened,$crtmm$:getReadyStateOpened.$crtmm$};
get$r2=getReadyStateOpened;$prop$get$r2=getReadyStateOpened;
ex$.$prop$getReadyStateOpened=$prop$getReadyStateOpened;
function $r3(){
    var readyStateHeadersReceived$=new $r3.$$;
    ReadyState(2,readyStateHeadersReceived$);
    return readyStateHeadersReceived$;
};$r3.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ReadyState},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateHeadersReceived']};};
function $init$$r3(){
    if($r3.$$===undefined){
        m$1.initTypeProto($r3,'com.openswimsoftware.ceylon.js.xmlhttprequest::readyStateHeadersReceived',$init$ReadyState());
    }
    return $r3;
}
ex$.$init$$r3=$init$$r3;
$init$$r3();
var $r8;
function getReadyStateHeadersReceived(){
    if($r8===undefined){$r8=$init$$r3()();$r8.$crtmm$=getReadyStateHeadersReceived.$crtmm$;}
    return $r8;
}
ex$.getReadyStateHeadersReceived=getReadyStateHeadersReceived;
getReadyStateHeadersReceived.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$r3},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateHeadersReceived']};};
$prop$getReadyStateHeadersReceived={get:getReadyStateHeadersReceived,$crtmm$:getReadyStateHeadersReceived.$crtmm$};
get$r3=getReadyStateHeadersReceived;$prop$get$r3=getReadyStateHeadersReceived;
ex$.$prop$getReadyStateHeadersReceived=$prop$getReadyStateHeadersReceived;
function $r4(){
    var readyStateLoading$=new $r4.$$;
    ReadyState(3,readyStateLoading$);
    return readyStateLoading$;
};$r4.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ReadyState},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateLoading']};};
function $init$$r4(){
    if($r4.$$===undefined){
        m$1.initTypeProto($r4,'com.openswimsoftware.ceylon.js.xmlhttprequest::readyStateLoading',$init$ReadyState());
    }
    return $r4;
}
ex$.$init$$r4=$init$$r4;
$init$$r4();
var $r9;
function getReadyStateLoading(){
    if($r9===undefined){$r9=$init$$r4()();$r9.$crtmm$=getReadyStateLoading.$crtmm$;}
    return $r9;
}
ex$.getReadyStateLoading=getReadyStateLoading;
getReadyStateLoading.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$r4},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateLoading']};};
$prop$getReadyStateLoading={get:getReadyStateLoading,$crtmm$:getReadyStateLoading.$crtmm$};
get$r4=getReadyStateLoading;$prop$get$r4=getReadyStateLoading;
ex$.$prop$getReadyStateLoading=$prop$getReadyStateLoading;
function $r5(){
    var readyStateDone$=new $r5.$$;
    ReadyState(4,readyStateDone$);
    return readyStateDone$;
};$r5.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ReadyState},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateDone']};};
function $init$$r5(){
    if($r5.$$===undefined){
        m$1.initTypeProto($r5,'com.openswimsoftware.ceylon.js.xmlhttprequest::readyStateDone',$init$ReadyState());
    }
    return $r5;
}
ex$.$init$$r5=$init$$r5;
$init$$r5();
var $ra;
function getReadyStateDone(){
    if($ra===undefined){$ra=$init$$r5()();$ra.$crtmm$=getReadyStateDone.$crtmm$;}
    return $ra;
}
ex$.getReadyStateDone=getReadyStateDone;
getReadyStateDone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$r5},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateDone']};};
$prop$getReadyStateDone={get:getReadyStateDone,$crtmm$:getReadyStateDone.$crtmm$};
get$r5=getReadyStateDone;$prop$get$r5=getReadyStateDone;
ex$.$prop$getReadyStateDone=$prop$getReadyStateDone;
function XMLHttpRequestOptions(anon,xMLHttpRequestOptions$){
    $init$XMLHttpRequestOptions();
    if(xMLHttpRequestOptions$===undefined)xMLHttpRequestOptions$=new XMLHttpRequestOptions.$$;
    if(anon===undefined){anon=false;}
    xMLHttpRequestOptions$.anon_=anon;
    return xMLHttpRequestOptions$;
}
XMLHttpRequestOptions.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'anon',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.doc("XMLHttpRequest options"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestOptions']};};
ex$.XMLHttpRequestOptions=XMLHttpRequestOptions;
function $init$XMLHttpRequestOptions(){
    if(XMLHttpRequestOptions.$$===undefined){
        m$1.initTypeProto(XMLHttpRequestOptions,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestOptions',m$1.Basic);
        (function(xMLHttpRequestOptions$){
            xMLHttpRequestOptions$.toJson=function toJson(){
                var xMLHttpRequestOptions$=this;
                var $rb=($rc=[m$1.Entry("anon",xMLHttpRequestOptions$.anon,{Item$Entry:{t:m$1.$_Boolean},Key$Entry:{t:m$1.String}})].reifyCeylonType({t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Boolean},Key$Entry:{t:m$1.String}}}),m$hr.JSON($rc));
                var $rc;
                return $rb.toJson();
            };xMLHttpRequestOptions$.toJson.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hr.JSJSON},$ps:[],$cont:XMLHttpRequestOptions,$an:function(){return[m$1.doc("to native json"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestOptions','$m','toJson']};};
            m$1.atr$(xMLHttpRequestOptions$,'anon',function(){return this.anon_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:XMLHttpRequestOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestOptions','$at','anon']};});
        })(XMLHttpRequestOptions.$$.prototype);
    }
    return XMLHttpRequestOptions;
}
ex$.$init$XMLHttpRequestOptions=$init$XMLHttpRequestOptions;
$init$XMLHttpRequestOptions();
function createXMLHttpRequest($rd){
    if($rd===undefined){$rd=null;}
    var $re;
    if(($re=$rd)!==null){
        /*Begin dynamic block*/
        return XMLHttpRequest((typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?m$1.throwexc(m$1.Exception("Undefined or null reference: XMLHttpRequest"),'37:25-37:38','xmlhttprequest.ceylon'):XMLHttpRequest)(m$1.$JsCallable(($rf=$re,m$1.JsCallable($rf,$rf!==null?$rf.toJson:null)),[],{Return$Callable:{t:m$hr.JSJSON},Arguments$Callable:{t:m$1.Empty}})));
        /*End dynamic block*/
        var $rf;
    }else {
        /*Begin dynamic block*/
        return XMLHttpRequest((typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?m$1.throwexc(m$1.Exception("Undefined or null reference: XMLHttpRequest"),'41:25-41:38','xmlhttprequest.ceylon'):XMLHttpRequest)());
        /*End dynamic block*/
    }
}
ex$.createXMLHttpRequest=createXMLHttpRequest;
createXMLHttpRequest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:XMLHttpRequest},$ps:[{$nm:'options',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:XMLHttpRequestOptions}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("create a new XMLHttpRequest"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','createXMLHttpRequest']};};
function XMLHttpRequestAbs(xMLHttpRequestAbs$){
    $init$XMLHttpRequestAbs();
    if(xMLHttpRequestAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(xMLHttpRequestAbs$);
    return xMLHttpRequestAbs$;
}
XMLHttpRequestAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs']};};
ex$.XMLHttpRequestAbs=XMLHttpRequestAbs;
function $init$XMLHttpRequestAbs(){
    if(XMLHttpRequestAbs.$$===undefined){
        m$1.initTypeProto(XMLHttpRequestAbs,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestAbs',m$9f.JSObjectAbs);
        (function(xMLHttpRequestAbs$){
            xMLHttpRequestAbs$.getOnreadystatechange=function getOnreadystatechange(){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                return ($rg=xMLHttpRequestAbs$.$_native.onreadystatechange,m$1.is$($rg,{t:m$1.Anything})?$rg:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'51:10-51:34','xmlhttprequest.ceylon'));
                /*End dynamic block*/
            };xMLHttpRequestAbs$.getOnreadystatechange.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("returns a function Anything(Event event) which is on readystatechange handler"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getOnreadystatechange']};};
            xMLHttpRequestAbs$.setOnreadystatechange=function setOnreadystatechange($rh){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                xMLHttpRequestAbs$.$_native.onreadystatechange=$rh;
                /*End dynamic block*/
            };xMLHttpRequestAbs$.setOnreadystatechange.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("sets on ready state change handler"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setOnreadystatechange']};};
            xMLHttpRequestAbs$.readyState=function readyState(){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                var $ri=xMLHttpRequestAbs$.$_native.readyState;
                if(($rj=$ri,$rk=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?m$1.throwexc(m$1.Exception("Undefined or null reference: XMLHttpRequest"),'66:21-66:34','xmlhttprequest.ceylon'):XMLHttpRequest).UNSENT,($rj.equals&&$rj.equals($rk))||$rj===$rk)){
                    return getReadyStateUnsent();
                }else {
                    if(($rl=$ri,$rm=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?m$1.throwexc(m$1.Exception("Undefined or null reference: XMLHttpRequest"),'68:28-68:41','xmlhttprequest.ceylon'):XMLHttpRequest).OPENED,($rl.equals&&$rl.equals($rm))||$rl===$rm)){
                        return getReadyStateOpened();
                    }else {
                        if(($rn=$ri,$ro=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?m$1.throwexc(m$1.Exception("Undefined or null reference: XMLHttpRequest"),'70:28-70:41','xmlhttprequest.ceylon'):XMLHttpRequest).HEADERS_RECEIVED,($rn.equals&&$rn.equals($ro))||$rn===$ro)){
                            return getReadyStateHeadersReceived();
                        }else {
                            if(($rp=$ri,$rq=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?m$1.throwexc(m$1.Exception("Undefined or null reference: XMLHttpRequest"),'72:28-72:41','xmlhttprequest.ceylon'):XMLHttpRequest).LOADING,($rp.equals&&$rp.equals($rq))||$rp===$rq)){
                                return getReadyStateLoading();
                            }else {
                                return getReadyStateDone();
                            }
                        }
                    }
                }/*End dynamic block*/
            };xMLHttpRequestAbs$.readyState.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ReadyState},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("returns the current ready state"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','readyState']};};
            xMLHttpRequestAbs$.open$defs$async=function($rr,$rs,$rt,$ru,$rv){return true;};
            xMLHttpRequestAbs$.open$defs$user=function($rr,$rs,$rt,$ru,$rv){return null;};
            xMLHttpRequestAbs$.open$defs$password=function($rr,$rs,$rt,$ru,$rv){return null;};
            xMLHttpRequestAbs$.open=function open($rr,$rs,$rt,$ru,$rv){
                var xMLHttpRequestAbs$=this;
                if($rt===undefined){$rt=xMLHttpRequestAbs$.open$defs$async($rr,$rs,$rt,$ru,$rv);}
                if($ru===undefined){$ru=xMLHttpRequestAbs$.open$defs$user($rr,$rs,$rt,$ru,$rv);}
                if($rv===undefined){$rv=xMLHttpRequestAbs$.open$defs$password($rr,$rs,$rt,$ru,$rv);}
                var $rw=$rr;
                if(m$1.is$($rr,{t:m$1.String})) {
                    var $rx=$rs;
                    if(m$1.is$($rs,{t:m$1.String})) {
                        var $ry=$ru;
                        if(m$1.is$($ru,{t:m$1.String})) {
                            var $rz=$rv;
                            if(m$1.is$($rv,{t:m$1.String})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.valueOf(),$rt,$ry.valueOf(),$rz.valueOf());
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$9f.JSString})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.valueOf(),$rt,$ry.valueOf(),$rz.$_native);
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$1.Null})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.valueOf(),$rt,$ry.valueOf());
                                /*End dynamic block*/
                            }
                        }else if(m$1.is$($ru,{t:m$9f.JSString})) {
                            var $s0=$rv;
                            if(m$1.is$($rv,{t:m$1.String})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.valueOf(),$rt,$ry.$_native,$s0.valueOf());
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$9f.JSString})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.valueOf(),$rt,$ry.$_native,$s0.$_native);
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$1.Null})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.valueOf(),$rt,$ry.$_native);
                                /*End dynamic block*/
                            }
                        }else if(m$1.is$($ru,{t:m$1.Null})) {
                            var $s1=$rv;
                            if(m$1.is$($rv,{t:m$1.String})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.valueOf(),$rt,null,$s1.valueOf());
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$9f.JSString})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.valueOf(),$rt,null,$s1.$_native);
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$1.Null})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.valueOf(),$rt);
                                /*End dynamic block*/
                            }
                        }
                    }else if(m$1.is$($rs,{t:m$9f.JSString})) {
                        var $s2=$ru;
                        if(m$1.is$($ru,{t:m$1.String})) {
                            var $s3=$rv;
                            if(m$1.is$($rv,{t:m$1.String})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.$_native,$rt,$s2.valueOf(),$s3.valueOf());
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$9f.JSString})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.$_native,$rt,$s2.valueOf(),$s3.$_native);
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$1.Null})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.$_native,$rt,$s2.valueOf());
                                /*End dynamic block*/
                            }
                        }else if(m$1.is$($ru,{t:m$9f.JSString})) {
                            var $s4=$rv;
                            if(m$1.is$($rv,{t:m$1.String})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.$_native,$rt,$s2.$_native,$s4.valueOf());
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$9f.JSString})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.$_native,$rt,$s2.$_native,$s4.$_native);
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$1.Null})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.$_native,$rt,$s2.$_native);
                                /*End dynamic block*/
                            }
                        }else if(m$1.is$($ru,{t:m$1.Null})) {
                            var $s5=$rv;
                            if(m$1.is$($rv,{t:m$1.String})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.$_native,$rt,null,$s5.valueOf());
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$9f.JSString})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.$_native,$rt,null,$s5.$_native);
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$1.Null})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.valueOf(),$rx.$_native,$rt);
                                /*End dynamic block*/
                            }
                        }
                    }
                }else if(m$1.is$($rr,{t:m$9f.JSString})) {
                    var $s6=$rs;
                    if(m$1.is$($rs,{t:m$1.String})) {
                        var $s7=$ru;
                        if(m$1.is$($ru,{t:m$1.String})) {
                            var $s8=$rv;
                            if(m$1.is$($rv,{t:m$1.String})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.valueOf(),$rt,$s7.valueOf(),$s8.valueOf());
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$9f.JSString})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.valueOf(),$rt,$s7.valueOf(),$s8.$_native);
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$1.Null})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.valueOf(),$rt,$s7.valueOf());
                                /*End dynamic block*/
                            }
                        }else if(m$1.is$($ru,{t:m$9f.JSString})) {
                            var $s9=$rv;
                            if(m$1.is$($rv,{t:m$1.String})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.valueOf(),$rt,$s7.$_native,$s9.valueOf());
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$9f.JSString})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.valueOf(),$rt,$s7.$_native,$s9.$_native);
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$1.Null})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.valueOf(),$rt,$s7.$_native);
                                /*End dynamic block*/
                            }
                        }else if(m$1.is$($ru,{t:m$1.Null})) {
                            var $sa=$rv;
                            if(m$1.is$($rv,{t:m$1.String})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.valueOf(),$rt,null,$sa.valueOf());
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$9f.JSString})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.valueOf(),$rt,null,$sa.$_native);
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$1.Null})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.valueOf(),$rt);
                                /*End dynamic block*/
                            }
                        }
                    }else if(m$1.is$($rs,{t:m$9f.JSString})) {
                        var $sb=$ru;
                        if(m$1.is$($ru,{t:m$1.String})) {
                            var $sc=$rv;
                            if(m$1.is$($rv,{t:m$1.String})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.$_native,$rt,$sb.valueOf(),$sc.valueOf());
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$9f.JSString})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.$_native,$rt,$sb.valueOf(),$sc.$_native);
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$1.Null})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.$_native,$rt,$sb.valueOf());
                                /*End dynamic block*/
                            }
                        }else if(m$1.is$($ru,{t:m$9f.JSString})) {
                            var $sd=$rv;
                            if(m$1.is$($rv,{t:m$1.String})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.$_native,$rt,$sb.$_native,$sd.valueOf());
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$9f.JSString})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.$_native,$rt,$sb.$_native,$sd.$_native);
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$1.Null})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.$_native,$rt,$sb.$_native);
                                /*End dynamic block*/
                            }
                        }else if(m$1.is$($ru,{t:m$1.Null})) {
                            var $se=$rv;
                            if(m$1.is$($rv,{t:m$1.String})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.$_native,$rt,null,$se.valueOf());
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$9f.JSString})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.$_native,$rt,null,$se.$_native);
                                /*End dynamic block*/
                            }else if(m$1.is$($rv,{t:m$1.Null})) {
                                /*Begin dynamic block*/
                                xMLHttpRequestAbs$.$_native.open($rw.$_native,$s6.$_native,$rt);
                                /*End dynamic block*/
                            }
                        }
                    }
                }
            };xMLHttpRequestAbs$.open.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'method',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'url',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'async',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[];}},{$nm:'user',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]}]},$an:function(){return[];}},{$nm:'password',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("open a new request"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','open']};};
            xMLHttpRequestAbs$.setRequestHeader=function setRequestHeader($sf,$sg){
                var xMLHttpRequestAbs$=this;
                var $sh=$sf;
                if(m$1.is$($sf,{t:m$1.String})) {
                    var $si=$sg;
                    if(m$1.is$($sg,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        xMLHttpRequestAbs$.$_native.setRequestHeader($sh.valueOf(),$si.valueOf());
                        /*End dynamic block*/
                    }else if(m$1.is$($sg,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        xMLHttpRequestAbs$.$_native.setRequestHeader($sh.valueOf(),$si.$_native);
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($sf,{t:m$9f.JSString})) {
                    var $sj=$sg;
                    if(m$1.is$($sg,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        xMLHttpRequestAbs$.$_native.setRequestHeader($sh.$_native,$sj.valueOf());
                        /*End dynamic block*/
                    }else if(m$1.is$($sg,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        xMLHttpRequestAbs$.$_native.setRequestHeader($sh.$_native,$sj.$_native);
                        /*End dynamic block*/
                    }
                }
            };xMLHttpRequestAbs$.setRequestHeader.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'header',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("set a request headers value"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setRequestHeader']};};
            xMLHttpRequestAbs$.getTimeout=function getTimeout(){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(xMLHttpRequestAbs$.$_native.timeout);
                /*End dynamic block*/
            };xMLHttpRequestAbs$.getTimeout.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("returns the request timeout"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getTimeout']};};
            xMLHttpRequestAbs$.setTimeout=function setTimeout($sk){
                var xMLHttpRequestAbs$=this;
                var $sl=$sk;
                if(m$1.is$($sk,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    xMLHttpRequestAbs$.$_native.timeout=$sl;
                    /*End dynamic block*/
                }else if(m$1.is$($sk,{t:m$9f.JSNumber})) {
                    /*Begin dynamic block*/
                    xMLHttpRequestAbs$.$_native.timeout=$sl.$_native;
                    /*End dynamic block*/
                }
            };xMLHttpRequestAbs$.setTimeout.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'timeout',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("set the request timeout"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setTimeout']};};
            xMLHttpRequestAbs$.getWithCredentials=function getWithCredentials(){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                if(xMLHttpRequestAbs$.$_native.withCredentials){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };xMLHttpRequestAbs$.getWithCredentials.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("return whether request should be made with credentials"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getWithCredentials']};};
            xMLHttpRequestAbs$.setWithCredentials=function setWithCredentials($sm){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                xMLHttpRequestAbs$.$_native.withCredentials=$sm;
                /*End dynamic block*/
            };xMLHttpRequestAbs$.setWithCredentials.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'credentials',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("set that request should be made with credentials"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setWithCredentials']};};
            xMLHttpRequestAbs$.upload=function upload(){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                return XMLHttpRequestUpload(xMLHttpRequestAbs$.$_native.upload);
                /*End dynamic block*/
            };xMLHttpRequestAbs$.upload.$crtmm$=function(){return{mod:$CCMM$,$t:{t:XMLHttpRequestUpload},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("returns the upload request"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','upload']};};
            xMLHttpRequestAbs$.send$defs$data=function($sn){return null;};
            xMLHttpRequestAbs$.send=function send($sn){
                var xMLHttpRequestAbs$=this;
                if($sn===undefined){$sn=xMLHttpRequestAbs$.send$defs$data($sn);}
                var $so=$sn;
                if(m$1.is$($sn,{t:m$q8.Blob})) {
                    /*Begin dynamic block*/
                    xMLHttpRequestAbs$.$_native.send($so.$_native);
                    /*End dynamic block*/
                }else if(m$1.is$($sn,{t:m$qm.Document})) {
                    /*Begin dynamic block*/
                    xMLHttpRequestAbs$.$_native.send($so.$_native);
                    /*End dynamic block*/
                }else if(m$1.is$($sn,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    xMLHttpRequestAbs$.$_native.send($so.valueOf());
                    /*End dynamic block*/
                }else if(m$1.is$($sn,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    xMLHttpRequestAbs$.$_native.send($so.$_native);
                    /*End dynamic block*/
                }else if(m$1.is$($sn,{t:FormData})) {
                    /*Begin dynamic block*/
                    xMLHttpRequestAbs$.$_native.send($so.$_native);
                    /*End dynamic block*/
                }else if(m$1.is$($sn,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    xMLHttpRequestAbs$.$_native.send();
                    /*End dynamic block*/
                }
            };xMLHttpRequestAbs$.send.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'data',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$q8.Blob},{t:m$qm.Document},{t:m$1.String},{t:m$9f.JSString},{t:'u',l:[{t:m$1.Null},{t:FormData}]}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("initiate the request"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','send']};};
            xMLHttpRequestAbs$.abort=function abort(){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                xMLHttpRequestAbs$.$_native.abort();
                /*End dynamic block*/
            };xMLHttpRequestAbs$.abort.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("cancels network activity"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','abort']};};
            xMLHttpRequestAbs$.status=function status(){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(xMLHttpRequestAbs$.$_native.status);
                /*End dynamic block*/
            };xMLHttpRequestAbs$.status.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("returns http status code"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','status']};};
            xMLHttpRequestAbs$.statusText=function statusText(){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(xMLHttpRequestAbs$.$_native.statusText);
                /*End dynamic block*/
            };xMLHttpRequestAbs$.statusText.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("returns http text status"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','statusText']};};
            xMLHttpRequestAbs$.getResponseHeader=function getResponseHeader($sp){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                var $sq;
                var $sr=$sp;
                if(m$1.is$($sp,{t:m$1.String})) {
                    $sq=xMLHttpRequestAbs$.$_native.getResponseHeader($sr.valueOf());
                }else if(m$1.is$($sp,{t:m$9f.JSString})) {
                    $sq=xMLHttpRequestAbs$.$_native.getResponseHeader($sr.$_native);
                }if(($ss=$sq,$st=null,($ss.equals&&!$ss.equals($st))||$ss!==$st)){
                    return m$9f.JSString($sq);
                }else {
                    return null;
                }/*End dynamic block*/
            };xMLHttpRequestAbs$.getResponseHeader.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[{$nm:'header',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("returns the specified response header"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getResponseHeader']};};
            xMLHttpRequestAbs$.getAllResponseHeaders=function getAllResponseHeaders(){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                var $su=xMLHttpRequestAbs$.$_native.getAllResponseHeaders();
                if(($sv=$su,$sw=null,($sv.equals&&!$sv.equals($sw))||$sv!==$sw)){
                    return m$9f.JSString($su);
                }else {
                    return null;
                }/*End dynamic block*/
            };xMLHttpRequestAbs$.getAllResponseHeaders.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("returns all response headers as a string sepreated by new lines"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getAllResponseHeaders']};};
            xMLHttpRequestAbs$.overrideMimeType=function overrideMimeType($sx){
                var xMLHttpRequestAbs$=this;
                var $sy=$sx;
                if(m$1.is$($sx,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    xMLHttpRequestAbs$.$_native.overrideMimeType($sy.valueOf());
                    /*End dynamic block*/
                }else if(m$1.is$($sx,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    xMLHttpRequestAbs$.$_native.overrideMimeType($sy.$_native);
                    /*End dynamic block*/
                }
            };xMLHttpRequestAbs$.overrideMimeType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'mime',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("set the request response mime type"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','overrideMimeType']};};
            xMLHttpRequestAbs$.getResponseType=function getResponseType(){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                if(($sz=xMLHttpRequestAbs$.$_native.responseType,$t0="",($sz.equals&&$sz.equals($t0))||$sz===$t0)){
                    return getBlank();
                }else {
                    if(($t1=xMLHttpRequestAbs$.$_native.responseType,$t2="arraybuffer",($t1.equals&&$t1.equals($t2))||$t1===$t2)){
                        return getArraybuffer();
                    }else {
                        if(($t3=xMLHttpRequestAbs$.$_native.responseType,$t4="blob",($t3.equals&&$t3.equals($t4))||$t3===$t4)){
                            return getBlob();
                        }else {
                            if(($t5=xMLHttpRequestAbs$.$_native.responseType,$t6="document",($t5.equals&&$t5.equals($t6))||$t5===$t6)){
                                return getDocument();
                            }else {
                                if(($t7=xMLHttpRequestAbs$.$_native.responseType,$t8="json",($t7.equals&&$t7.equals($t8))||$t7===$t8)){
                                    return getJson();
                                }else {
                                    return getText();
                                }
                            }
                        }
                    }
                }/*End dynamic block*/
            };xMLHttpRequestAbs$.getResponseType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:XMLHttpRequestResponseType},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("returns the request response type"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getResponseType']};};
            xMLHttpRequestAbs$.setResponseType=function setResponseType($t9){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                xMLHttpRequestAbs$.$_native.responseType=$t9.string.valueOf();
                /*End dynamic block*/
            };xMLHttpRequestAbs$.setResponseType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'responseType',$mt:'prm',$t:{t:XMLHttpRequestResponseType},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("set the request response type"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setResponseType']};};
            xMLHttpRequestAbs$.response=function response(){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                return ($ta=xMLHttpRequestAbs$.$_native.response,m$1.is$($ta,{t:m$1.Anything})?$ta:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'528:10-528:24','xmlhttprequest.ceylon'));
                /*End dynamic block*/
            };xMLHttpRequestAbs$.response.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("returns the response as ArrayBuffer|Blob|Document|JSON"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','response']};};
            xMLHttpRequestAbs$.responseText=function responseText(){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(xMLHttpRequestAbs$.$_native.responseText);
                /*End dynamic block*/
            };xMLHttpRequestAbs$.responseText.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("returns the response as a string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','responseText']};};
            xMLHttpRequestAbs$.responseXML=function responseXML(){
                var xMLHttpRequestAbs$=this;
                /*Begin dynamic block*/
                var $tb=xMLHttpRequestAbs$.$_native.responseXML;
                if(($tc=$tb,$td=null,($tc.equals&&!$tc.equals($td))||$tc!==$td)){
                    return m$qm.Document($tb);
                }else {
                    return null;
                }/*End dynamic block*/
            };xMLHttpRequestAbs$.responseXML.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$qm.Document}]},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[m$1.doc("returns the response as an XML Document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','responseXML']};};
        })(XMLHttpRequestAbs.$$.prototype);
    }
    return XMLHttpRequestAbs;
}
ex$.$init$XMLHttpRequestAbs=$init$XMLHttpRequestAbs;
$init$XMLHttpRequestAbs();
function XMLHttpRequest($te,xMLHttpRequest$){
    $init$XMLHttpRequest();
    if(xMLHttpRequest$===undefined)xMLHttpRequest$=new XMLHttpRequest.$$;
    xMLHttpRequest$.$te_=$te;
    XMLHttpRequestAbs(xMLHttpRequest$);
    xMLHttpRequest$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:XMLHttpRequest,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequest','$at','native']};}};
    /*Begin dynamic block*/
    xMLHttpRequest$.$_native=xMLHttpRequest$.$te;/*End dynamic block*/
    return xMLHttpRequest$;
}
XMLHttpRequest.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("XMLHttpRequest"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequest']};};
ex$.XMLHttpRequest=XMLHttpRequest;
function $init$XMLHttpRequest(){
    if(XMLHttpRequest.$$===undefined){
        m$1.initTypeProto(XMLHttpRequest,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequest',$init$XMLHttpRequestAbs());
        (function(xMLHttpRequest$){
            m$1.atr$(xMLHttpRequest$,'$te',function(){return this.$te_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:XMLHttpRequest,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequest','$at','n$11q9g6']};});
        })(XMLHttpRequest.$$.prototype);
    }
    return XMLHttpRequest;
}
ex$.$init$XMLHttpRequest=$init$XMLHttpRequest;
$init$XMLHttpRequest();
function XMLHttpRequestEventTargetAbs(xMLHttpRequestEventTargetAbs$){
    $init$XMLHttpRequestEventTargetAbs();
    if(xMLHttpRequestEventTargetAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$qm.EventTargetAbs(xMLHttpRequestEventTargetAbs$);
    return xMLHttpRequestEventTargetAbs$;
}
XMLHttpRequestEventTargetAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$qm.EventTargetAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs']};};
ex$.XMLHttpRequestEventTargetAbs=XMLHttpRequestEventTargetAbs;
function $init$XMLHttpRequestEventTargetAbs(){
    if(XMLHttpRequestEventTargetAbs.$$===undefined){
        m$1.initTypeProto(XMLHttpRequestEventTargetAbs,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestEventTargetAbs',m$qm.EventTargetAbs);
        (function(xMLHttpRequestEventTargetAbs$){
            xMLHttpRequestEventTargetAbs$.getOnloadstart=function getOnloadstart(){
                var xMLHttpRequestEventTargetAbs$=this;
                /*Begin dynamic block*/
                return ($tf=xMLHttpRequestEventTargetAbs$.$_native.onloadstart,m$1.is$($tf,{t:m$1.Anything})?$tf:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'8:10-8:27','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };xMLHttpRequestEventTargetAbs$.getOnloadstart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[m$1.doc("returns a function Anything(Event event) onloadstart handler"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnloadstart']};};
            xMLHttpRequestEventTargetAbs$.setOnloadstart=function setOnloadstart($tg){
                var xMLHttpRequestEventTargetAbs$=this;
                /*Begin dynamic block*/
                xMLHttpRequestEventTargetAbs$.$_native.onloadstart=$tg;
                /*End dynamic block*/
            };xMLHttpRequestEventTargetAbs$.setOnloadstart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[m$1.doc("sets onloadstart handler"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnloadstart']};};
            xMLHttpRequestEventTargetAbs$.getOnprogress=function getOnprogress(){
                var xMLHttpRequestEventTargetAbs$=this;
                /*Begin dynamic block*/
                return ($th=xMLHttpRequestEventTargetAbs$.$_native.onprogress,m$1.is$($th,{t:m$1.Anything})?$th:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'22:10-22:26','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };xMLHttpRequestEventTargetAbs$.getOnprogress.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[m$1.doc("returns a function Anything(Event event) onprogress handler"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnprogress']};};
            xMLHttpRequestEventTargetAbs$.setOnprogress=function setOnprogress($ti){
                var xMLHttpRequestEventTargetAbs$=this;
                /*Begin dynamic block*/
                xMLHttpRequestEventTargetAbs$.$_native.onprogress=$ti;
                /*End dynamic block*/
            };xMLHttpRequestEventTargetAbs$.setOnprogress.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[m$1.doc("sets onprogress handler"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnprogress']};};
            xMLHttpRequestEventTargetAbs$.getOnabort=function getOnabort(){
                var xMLHttpRequestEventTargetAbs$=this;
                /*Begin dynamic block*/
                return ($tj=xMLHttpRequestEventTargetAbs$.$_native.onabort,m$1.is$($tj,{t:m$1.Anything})?$tj:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'36:10-36:23','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };xMLHttpRequestEventTargetAbs$.getOnabort.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[m$1.doc("returns a function Anything(Event event) onabort handler"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnabort']};};
            xMLHttpRequestEventTargetAbs$.setOnabort=function setOnabort($tk){
                var xMLHttpRequestEventTargetAbs$=this;
                /*Begin dynamic block*/
                xMLHttpRequestEventTargetAbs$.$_native.onabort=$tk;
                /*End dynamic block*/
            };xMLHttpRequestEventTargetAbs$.setOnabort.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[m$1.doc("sets onabort handler"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnabort']};};
            xMLHttpRequestEventTargetAbs$.getOnerror=function getOnerror(){
                var xMLHttpRequestEventTargetAbs$=this;
                /*Begin dynamic block*/
                return ($tl=xMLHttpRequestEventTargetAbs$.$_native.onerror,m$1.is$($tl,{t:m$1.Anything})?$tl:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'50:10-50:23','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };xMLHttpRequestEventTargetAbs$.getOnerror.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[m$1.doc("returns a function Anything(Event event) onerror handler"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnerror']};};
            xMLHttpRequestEventTargetAbs$.setOnerror=function setOnerror($tm){
                var xMLHttpRequestEventTargetAbs$=this;
                /*Begin dynamic block*/
                xMLHttpRequestEventTargetAbs$.$_native.onerror=$tm;
                /*End dynamic block*/
            };xMLHttpRequestEventTargetAbs$.setOnerror.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[m$1.doc("sets onerror handler"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnerror']};};
            xMLHttpRequestEventTargetAbs$.getOnload=function getOnload(){
                var xMLHttpRequestEventTargetAbs$=this;
                /*Begin dynamic block*/
                return ($tn=xMLHttpRequestEventTargetAbs$.$_native.onload,m$1.is$($tn,{t:m$1.Anything})?$tn:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'64:10-64:22','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };xMLHttpRequestEventTargetAbs$.getOnload.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[m$1.doc("returns a function Anything(Event event) onload handler"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnload']};};
            xMLHttpRequestEventTargetAbs$.setOnload=function setOnload($to){
                var xMLHttpRequestEventTargetAbs$=this;
                /*Begin dynamic block*/
                xMLHttpRequestEventTargetAbs$.$_native.onload=$to;
                /*End dynamic block*/
            };xMLHttpRequestEventTargetAbs$.setOnload.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[m$1.doc("sets onload handler"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnload']};};
            xMLHttpRequestEventTargetAbs$.getOntimeout=function getOntimeout(){
                var xMLHttpRequestEventTargetAbs$=this;
                /*Begin dynamic block*/
                return ($tp=xMLHttpRequestEventTargetAbs$.$_native.ontimeout,m$1.is$($tp,{t:m$1.Anything})?$tp:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'78:10-78:25','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };xMLHttpRequestEventTargetAbs$.getOntimeout.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[m$1.doc("returns a function Anything(Event event) ontimeout handler"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOntimeout']};};
            xMLHttpRequestEventTargetAbs$.setOntimeout=function setOntimeout($tq){
                var xMLHttpRequestEventTargetAbs$=this;
                /*Begin dynamic block*/
                xMLHttpRequestEventTargetAbs$.$_native.ontimeout=$tq;
                /*End dynamic block*/
            };xMLHttpRequestEventTargetAbs$.setOntimeout.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[m$1.doc("sets ontimeout handler"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOntimeout']};};
            xMLHttpRequestEventTargetAbs$.getOnloadend=function getOnloadend(){
                var xMLHttpRequestEventTargetAbs$=this;
                /*Begin dynamic block*/
                return ($tr=xMLHttpRequestEventTargetAbs$.$_native.onloadend,m$1.is$($tr,{t:m$1.Anything})?$tr:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'92:10-92:25','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };xMLHttpRequestEventTargetAbs$.getOnloadend.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[m$1.doc("returns a function Anything(Event event) returns onloadend handler"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnloadend']};};
            xMLHttpRequestEventTargetAbs$.setOnloadend=function setOnloadend($ts){
                var xMLHttpRequestEventTargetAbs$=this;
                /*Begin dynamic block*/
                xMLHttpRequestEventTargetAbs$.$_native.onloadend=$ts;
                /*End dynamic block*/
            };xMLHttpRequestEventTargetAbs$.setOnloadend.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[m$1.doc("sets onloadend handler"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnloadend']};};
        })(XMLHttpRequestEventTargetAbs.$$.prototype);
    }
    return XMLHttpRequestEventTargetAbs;
}
ex$.$init$XMLHttpRequestEventTargetAbs=$init$XMLHttpRequestEventTargetAbs;
$init$XMLHttpRequestEventTargetAbs();
function XMLHttpRequestEventTarget($tt,xMLHttpRequestEventTarget$){
    $init$XMLHttpRequestEventTarget();
    if(xMLHttpRequestEventTarget$===undefined)xMLHttpRequestEventTarget$=new XMLHttpRequestEventTarget.$$;
    xMLHttpRequestEventTarget$.$tt_=$tt;
    XMLHttpRequestEventTargetAbs(xMLHttpRequestEventTarget$);
    xMLHttpRequestEventTarget$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:XMLHttpRequestEventTarget,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTarget','$at','native']};}};
    /*Begin dynamic block*/
    xMLHttpRequestEventTarget$.$_native=xMLHttpRequestEventTarget$.$tt;/*End dynamic block*/
    return xMLHttpRequestEventTarget$;
}
XMLHttpRequestEventTarget.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestEventTargetAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("XMLHttpRequestEventTarget"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTarget']};};
ex$.XMLHttpRequestEventTarget=XMLHttpRequestEventTarget;
function $init$XMLHttpRequestEventTarget(){
    if(XMLHttpRequestEventTarget.$$===undefined){
        m$1.initTypeProto(XMLHttpRequestEventTarget,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestEventTarget',$init$XMLHttpRequestEventTargetAbs());
        (function(xMLHttpRequestEventTarget$){
            m$1.atr$(xMLHttpRequestEventTarget$,'$tt',function(){return this.$tt_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:XMLHttpRequestEventTarget,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTarget','$at','n$og31rt']};});
        })(XMLHttpRequestEventTarget.$$.prototype);
    }
    return XMLHttpRequestEventTarget;
}
ex$.$init$XMLHttpRequestEventTarget=$init$XMLHttpRequestEventTarget;
$init$XMLHttpRequestEventTarget();
function XMLHttpRequestUploadAbs(xMLHttpRequestUploadAbs$){
    $init$XMLHttpRequestUploadAbs();
    if(xMLHttpRequestUploadAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    XMLHttpRequestEventTargetAbs(xMLHttpRequestUploadAbs$);
    return xMLHttpRequestUploadAbs$;
}
XMLHttpRequestUploadAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestEventTargetAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestUploadAbs']};};
ex$.XMLHttpRequestUploadAbs=XMLHttpRequestUploadAbs;
function $init$XMLHttpRequestUploadAbs(){
    if(XMLHttpRequestUploadAbs.$$===undefined){
        m$1.initTypeProto(XMLHttpRequestUploadAbs,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestUploadAbs',$init$XMLHttpRequestEventTargetAbs());
    }
    return XMLHttpRequestUploadAbs;
}
ex$.$init$XMLHttpRequestUploadAbs=$init$XMLHttpRequestUploadAbs;
$init$XMLHttpRequestUploadAbs();
function XMLHttpRequestUpload($tu,xMLHttpRequestUpload$){
    $init$XMLHttpRequestUpload();
    if(xMLHttpRequestUpload$===undefined)xMLHttpRequestUpload$=new XMLHttpRequestUpload.$$;
    xMLHttpRequestUpload$.$tu_=$tu;
    XMLHttpRequestUploadAbs(xMLHttpRequestUpload$);
    xMLHttpRequestUpload$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:XMLHttpRequestUpload,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestUpload','$at','native']};}};
    /*Begin dynamic block*/
    xMLHttpRequestUpload$.$_native=xMLHttpRequestUpload$.$tu;/*End dynamic block*/
    return xMLHttpRequestUpload$;
}
XMLHttpRequestUpload.$crtmm$=function(){return{mod:$CCMM$,'super':{t:XMLHttpRequestUploadAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("XMLHttpRequestUpload"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestUpload']};};
ex$.XMLHttpRequestUpload=XMLHttpRequestUpload;
function $init$XMLHttpRequestUpload(){
    if(XMLHttpRequestUpload.$$===undefined){
        m$1.initTypeProto(XMLHttpRequestUpload,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestUpload',$init$XMLHttpRequestUploadAbs());
        (function(xMLHttpRequestUpload$){
            m$1.atr$(xMLHttpRequestUpload$,'$tu',function(){return this.$tu_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:XMLHttpRequestUpload,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestUpload','$at','n$9ktoe9']};});
        })(XMLHttpRequestUpload.$$.prototype);
    }
    return XMLHttpRequestUpload;
}
ex$.$init$XMLHttpRequestUpload=$init$XMLHttpRequestUpload;
$init$XMLHttpRequestUpload();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
