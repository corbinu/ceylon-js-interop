(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/1.0.0","com.openswimsoftware.ceylon.js.language\/1.8.0","com.openswimsoftware.ceylon.js.file\/0.12.0","com.openswimsoftware.ceylon.js.dom\/4.0.0","com.openswimsoftware.ceylon.js.html\/5.0.0","com.openswimsoftware.ceylon.js.json\/1.0.0"],"$mod-name":"com.openswimsoftware.ceylon.js.xmlhttprequest","$mod-version":"0.6.0","$mod-bin":"6.0","com.openswimsoftware.ceylon.js.xmlhttprequest":{"arraybuffer":{"super":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"arraybuffer"},"readyStateHeadersReceived":{"super":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateHeadersReceived"},"XMLHttpRequestOptions":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"anon"}],"$mt":"cls","$an":{"shared":[],"doc":["XMLHttpRequest options"]},"$m":{"toJson":{"$t":{"$md":"com.openswimsoftware.ceylon.js.json","$pk":"com.openswimsoftware.ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[],"doc":["to native json"]},"$nm":"toJson"}},"$at":{"anon":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"anon"}},"$nm":"XMLHttpRequestOptions"},"$pkg-shared":"1","document":{"super":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"document"},"XMLHttpRequestUpload":{"super":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestUploadAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["XMLHttpRequestUpload"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"XMLHttpRequestUpload"},"XMLHttpRequest":{"super":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["XMLHttpRequest"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"XMLHttpRequest"},"json":{"super":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"json"},"createFormData":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"FormData"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.html","$pk":"com.openswimsoftware.ceylon.js.html","$nm":"HTMLFormElement"}]},"$mt":"prm","$def":"1","$nm":"form"}]],"$mt":"mthd","$an":{"shared":[],"doc":["create form data"]},"$nm":"createFormData"},"XMLHttpRequestEventTarget":{"super":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestEventTargetAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["XMLHttpRequestEventTarget"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"XMLHttpRequestEventTarget"},"readyStateUnsent":{"super":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateUnsent"},"ReadyState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"readyStateUnsent"},{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"readyStateOpened"},{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"readyStateHeadersReceived"},{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"readyStateLoading"},{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"readyStateDone"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"num"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"num":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"num"}},"$nm":"ReadyState"},"FormDataAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"append":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["append the value to the form data"]},"$nm":"append"},"appendBlob":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"$md":"com.openswimsoftware.ceylon.js.file","$pk":"com.openswimsoftware.ceylon.js.file","$nm":"Blob"},"$mt":"prm","$nm":"val"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"filename"}]],"$mt":"mthd","$an":{"shared":[],"doc":["append the blob to the form data"]},"$nm":"appendBlob"}},"$nm":"FormDataAbs"},"text":{"super":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"text"},"blank":{"super":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"blank"},"readyStateLoading":{"super":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateLoading"},"readyStateOpened":{"super":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateOpened"},"FormData":{"super":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"FormDataAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["form data for sending over using xmlhttprequest"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"FormData"},"readyStateDone":{"super":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateDone"},"XMLHttpRequestEventTargetAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"EventTargetAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setOnprogress":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets onprogress handler"]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnprogress"},"getOnload":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event) onload handler"]},"$nm":"getOnload"},"setOnloadend":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets onloadend handler"]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnloadend"},"getOnloadend":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event) returns onloadend handler"]},"$nm":"getOnloadend"},"setOnloadstart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets onloadstart handler"]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnloadstart"},"getOntimeout":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event) ontimeout handler"]},"$nm":"getOntimeout"},"setOnerror":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets onerror handler"]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnerror"},"setOntimeout":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets ontimeout handler"]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOntimeout"},"getOnerror":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event) onerror handler"]},"$nm":"getOnerror"},"getOnloadstart":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event) onloadstart handler"]},"$nm":"getOnloadstart"},"getOnprogress":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event) onprogress handler"]},"$nm":"getOnprogress"},"getOnabort":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event) onabort handler"]},"$nm":"getOnabort"},"setOnabort":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets onabort handler"]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnabort"},"setOnload":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets onload handler"]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnload"}},"$nm":"XMLHttpRequestEventTargetAbs"},"XMLHttpRequestResponseType":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"blank"},{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"arraybuffer"},{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"blob"},{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"document"},{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"json"},{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"text"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"XMLHttpRequestResponseType"},"blob":{"super":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"blob"},"createXMLHttpRequest":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"XMLHttpRequest"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestOptions"}]},"$mt":"prm","$def":"1","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[],"doc":["create a new XMLHttpRequest"]},"$nm":"createXMLHttpRequest"},"XMLHttpRequestUploadAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestEventTargetAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"XMLHttpRequestUploadAbs"},"XMLHttpRequestAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setResponseType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"prm","$nm":"responseType"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the request response type"]},"$nm":"setResponseType"},"getWithCredentials":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["return whether request should be made with credentials"]},"$nm":"getWithCredentials"},"getAllResponseHeaders":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns all response headers as a string sepreated by new lines"]},"$nm":"getAllResponseHeaders"},"send":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"com.openswimsoftware.ceylon.js.file","$pk":"com.openswimsoftware.ceylon.js.file","$nm":"Blob"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Document"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"FormData"}]}]},"$mt":"prm","$def":"1","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[],"doc":["initiate the request"]},"$nm":"send"},"responseXML":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Document"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the response as an XML Document"]},"$nm":"responseXML"},"status":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns http status code"]},"$nm":"status"},"getOnreadystatechange":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event) which is on readystatechange handler"]},"$nm":"getOnreadystatechange"},"responseText":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the response as a string"]},"$nm":"responseText"},"statusText":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns http text status"]},"$nm":"statusText"},"readyState":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the current ready state"]},"$nm":"readyState"},"overrideMimeType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"mime"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the request response mime type"]},"$nm":"overrideMimeType"},"upload":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestUpload"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the upload request"]},"$nm":"upload"},"response":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the response as ArrayBuffer|Blob|Document|JSON"]},"$nm":"response"},"open":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"method"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"async"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$def":"1","$nm":"user"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$def":"1","$nm":"password"}]],"$mt":"mthd","$an":{"shared":[],"doc":["open a new request"]},"$nm":"open"},"getResponseHeader":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the specified response header"]},"$nm":"getResponseHeader"},"setRequestHeader":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set a request headers value"]},"$nm":"setRequestHeader"},"getTimeout":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the request timeout"]},"$nm":"getTimeout"},"getResponseType":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the request response type"]},"$nm":"getResponseType"},"setTimeout":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"timeout"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the request timeout"]},"$nm":"setTimeout"},"setOnreadystatechange":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets on ready state change handler"]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"com.openswimsoftware.ceylon.js.dom","$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnreadystatechange"},"setWithCredentials":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"credentials"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set that request should be made with credentials"]},"$nm":"setWithCredentials"},"abort":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["cancels network activity"]},"$nm":"abort"}},"$nm":"XMLHttpRequestAbs"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl1.$addmod$($$$cl1,'ceylon.language/1.0.0');
var $$$cocjl339=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
$$$cl1.$addmod$($$$cocjl339,'com.openswimsoftware.ceylon.js.language/1.8.0');
var $$$cocjf944=require('com/openswimsoftware/ceylon/js/file/0.12.0/com.openswimsoftware.ceylon.js.file-0.12.0');
$$$cl1.$addmod$($$$cocjf944,'com.openswimsoftware.ceylon.js.file/0.12.0');
var $$$cocjh429=require('com/openswimsoftware/ceylon/js/html/5.0.0/com.openswimsoftware.ceylon.js.html-5.0.0');
$$$cl1.$addmod$($$$cocjh429,'com.openswimsoftware.ceylon.js.html/5.0.0');
function createFormData(form$945){
    if(form$945===undefined){form$945=null;}
    /*Begin dynamic block*/
    return FormData((typeof FormData==='undefined'||FormData===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: FormData")),'8:18-8:25','formdata.ceylon'):FormData)((typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'8:29-8:29','formdata.ceylon'):f)));
    /*End dynamic block*/
}
exports.createFormData=createFormData;
createFormData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:FormData},$ps:[{$nm:'form',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjh429.HTMLFormElement}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("create form data",16)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','createFormData']};};
function FormDataAbs($$formDataAbs){
    $init$FormDataAbs();
    if ($$formDataAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$formDataAbs);
    return $$formDataAbs;
}
FormDataAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','FormDataAbs']};};
exports.FormDataAbs=FormDataAbs;
function $init$FormDataAbs(){
    if (FormDataAbs.$$===undefined){
        $$$cl1.initTypeProto(FormDataAbs,'com.openswimsoftware.ceylon.js.xmlhttprequest::FormDataAbs',$$$cocjl339.JSObjectAbs);
        (function($$formDataAbs){
            $$formDataAbs.append=function append(name$946,val$947){
                var $$formDataAbs=this;
                
                var case$948=name$946;
                if ($$$cl1.isOfType(name$946,{t:$$$cl1.String})) {
                    
                    var case$949=val$947;
                    if ($$$cl1.isOfType(val$947,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(case$948.valueOf(),case$949.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(val$947,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(case$948.valueOf(),case$949.$native);
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(name$946,{t:$$$cocjl339.JSString})) {
                    
                    var case$950=val$947;
                    if ($$$cl1.isOfType(val$947,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(case$948.$native,case$950.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(val$947,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(case$948.$native,case$950.$native);
                        /*End dynamic block*/
                    }
                }
            };$$formDataAbs.append.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:FormDataAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("append the value to the form data",33)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','FormDataAbs','$m','append']};};
            $$formDataAbs.appendBlob=function appendBlob(name$951,val$952,filename$953){
                var $$formDataAbs=this;
                
                var case$954=name$951;
                if ($$$cl1.isOfType(name$951,{t:$$$cl1.String})) {
                    
                    var case$955=filename$953;
                    if ($$$cl1.isOfType(filename$953,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(case$954.valueOf(),val$952.$native,case$955.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(filename$953,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(case$954.valueOf(),val$952.$native,case$955.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(filename$953,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(case$954.valueOf(),val$952.$native);
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(name$951,{t:$$$cocjl339.JSString})) {
                    
                    var case$956=filename$953;
                    if ($$$cl1.isOfType(filename$953,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(case$954.$native,val$952.$native,case$956.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(filename$953,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(case$954.$native,val$952.$native,case$956.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(filename$953,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(case$954.$native,val$952.$native);
                        /*End dynamic block*/
                    }
                }
            };$$formDataAbs.appendBlob.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cocjf944.Blob},$an:function(){return[];}},{$nm:'filename',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]}]},$an:function(){return[];}}],$cont:FormDataAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("append the blob to the form data",32)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','FormDataAbs','$m','appendBlob']};};
        })(FormDataAbs.$$.prototype);
    }
    return FormDataAbs;
}
exports.$init$FormDataAbs=$init$FormDataAbs;
$init$FormDataAbs();
function FormData(n$957, $$formData){
    $init$FormData();
    if ($$formData===undefined)$$formData=new FormData.$$;
    $$formData.n$957_=n$957;
    FormDataAbs($$formData);
    $$formData.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:FormData,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','FormData','$at','native']};}};
    /*Begin dynamic block*/
    $$formData.$native=$$formData.n$957;/*End dynamic block*/
    return $$formData;
}
FormData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:FormDataAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("form data for sending over using xmlhttprequest",47)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','FormData']};};
exports.FormData=FormData;
function $init$FormData(){
    if (FormData.$$===undefined){
        $$$cl1.initTypeProto(FormData,'com.openswimsoftware.ceylon.js.xmlhttprequest::FormData',$init$FormDataAbs());
        (function($$formData){
            $$$cl1.defineAttr($$formData,'n$957',function(){return this.n$957_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:FormData,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','FormData','$at','n']};});
        })(FormData.$$.prototype);
    }
    return FormData;
}
exports.$init$FormData=$init$FormData;
$init$FormData();
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("based on XMLHttpRequest working draft 6",39))];};
exports.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.language/1.8.0':function(){return[$$$cl1.shared()];},
'com.openswimsoftware.ceylon.js.file/0.12.0':function(){return[$$$cl1.shared()];},
'com.openswimsoftware.ceylon.js.dom/4.0.0':function(){return[$$$cl1.shared()];},
'com.openswimsoftware.ceylon.js.html/5.0.0':function(){return[$$$cl1.shared()];},
'com.openswimsoftware.ceylon.js.json/1.0.0':[]
};};
exports.$pkg$ans$com$openswimsoftware$ceylon$js$xmlhttprequest=function(){return[$$$cl1.shared()];};
var $$$cocjd958=require('com/openswimsoftware/ceylon/js/dom/4.0.0/com.openswimsoftware.ceylon.js.dom-4.0.0');
$$$cl1.$addmod$($$$cocjd958,'com.openswimsoftware.ceylon.js.dom/4.0.0');
var $$$cocjj639=require('com/openswimsoftware/ceylon/js/json/1.0.0/com.openswimsoftware.ceylon.js.json-1.0.0');
$$$cl1.$addmod$($$$cocjj639,'com.openswimsoftware.ceylon.js.json/1.0.0');
function XMLHttpRequestResponseType(name$959, $$xMLHttpRequestResponseType){
    $init$XMLHttpRequestResponseType();
    if ($$xMLHttpRequestResponseType===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$xMLHttpRequestResponseType.name$959_=name$959;
    return $$xMLHttpRequestResponseType;
}
XMLHttpRequestResponseType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],of:[{t:blank$960},{t:arraybuffer$961},{t:blob$962},{t:document$963},{t:json$964},{t:text$965}],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestResponseType']};};
exports.XMLHttpRequestResponseType=XMLHttpRequestResponseType;
function $init$XMLHttpRequestResponseType(){
    if (XMLHttpRequestResponseType.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestResponseType,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestResponseType',$$$cl1.Basic);
        (function($$xMLHttpRequestResponseType){
            $$$cl1.defineAttr($$xMLHttpRequestResponseType,'name$959',function(){return this.name$959_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:XMLHttpRequestResponseType,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestResponseType','$at','name']};});
        })(XMLHttpRequestResponseType.$$.prototype);
    }
    return XMLHttpRequestResponseType;
}
exports.$init$XMLHttpRequestResponseType=$init$XMLHttpRequestResponseType;
$init$XMLHttpRequestResponseType();
function blank$960(){
    var $$blank=new blank$960.$$;
    XMLHttpRequestResponseType($$$cl1.String("",0),$$blank);
    return $$blank;
};blank$960.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestResponseType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','blank']};};
function $init$blank$960(){
    if (blank$960.$$===undefined){
        $$$cl1.initTypeProto(blank$960,'com.openswimsoftware.ceylon.js.xmlhttprequest::blank',$init$XMLHttpRequestResponseType());
    }
    return blank$960;
}
exports.$init$blank$960=$init$blank$960;
$init$blank$960();
var blank$966;
function getBlank(){
    if (blank$966===undefined){blank$966=$init$blank$960()();blank$966.$$metamodel$$=getBlank.$$metamodel$$;}
    return blank$966;
}
exports.getBlank=getBlank;
getBlank.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:blank$960},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','blank']};};
$prop$getBlank={get:getBlank,$$metamodel$$:getBlank.$$metamodel$$};
exports.$prop$getBlank=$prop$getBlank;
function arraybuffer$961(){
    var $$arraybuffer=new arraybuffer$961.$$;
    XMLHttpRequestResponseType($$$cl1.String("arraybuffer",11),$$arraybuffer);
    return $$arraybuffer;
};arraybuffer$961.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestResponseType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','arraybuffer']};};
function $init$arraybuffer$961(){
    if (arraybuffer$961.$$===undefined){
        $$$cl1.initTypeProto(arraybuffer$961,'com.openswimsoftware.ceylon.js.xmlhttprequest::arraybuffer',$init$XMLHttpRequestResponseType());
    }
    return arraybuffer$961;
}
exports.$init$arraybuffer$961=$init$arraybuffer$961;
$init$arraybuffer$961();
var arraybuffer$967;
function getArraybuffer(){
    if (arraybuffer$967===undefined){arraybuffer$967=$init$arraybuffer$961()();arraybuffer$967.$$metamodel$$=getArraybuffer.$$metamodel$$;}
    return arraybuffer$967;
}
exports.getArraybuffer=getArraybuffer;
getArraybuffer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:arraybuffer$961},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','arraybuffer']};};
$prop$getArraybuffer={get:getArraybuffer,$$metamodel$$:getArraybuffer.$$metamodel$$};
exports.$prop$getArraybuffer=$prop$getArraybuffer;
function blob$962(){
    var $$blob=new blob$962.$$;
    XMLHttpRequestResponseType($$$cl1.String("blob",4),$$blob);
    return $$blob;
};blob$962.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestResponseType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','blob']};};
function $init$blob$962(){
    if (blob$962.$$===undefined){
        $$$cl1.initTypeProto(blob$962,'com.openswimsoftware.ceylon.js.xmlhttprequest::blob',$init$XMLHttpRequestResponseType());
    }
    return blob$962;
}
exports.$init$blob$962=$init$blob$962;
$init$blob$962();
var blob$968;
function getBlob(){
    if (blob$968===undefined){blob$968=$init$blob$962()();blob$968.$$metamodel$$=getBlob.$$metamodel$$;}
    return blob$968;
}
exports.getBlob=getBlob;
getBlob.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:blob$962},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','blob']};};
$prop$getBlob={get:getBlob,$$metamodel$$:getBlob.$$metamodel$$};
exports.$prop$getBlob=$prop$getBlob;
function document$963(){
    var $$document=new document$963.$$;
    XMLHttpRequestResponseType($$$cl1.String("document",8),$$document);
    return $$document;
};document$963.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestResponseType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','document']};};
function $init$document$963(){
    if (document$963.$$===undefined){
        $$$cl1.initTypeProto(document$963,'com.openswimsoftware.ceylon.js.xmlhttprequest::document',$init$XMLHttpRequestResponseType());
    }
    return document$963;
}
exports.$init$document$963=$init$document$963;
$init$document$963();
var document$969;
function getDocument(){
    if (document$969===undefined){document$969=$init$document$963()();document$969.$$metamodel$$=getDocument.$$metamodel$$;}
    return document$969;
}
exports.getDocument=getDocument;
getDocument.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:document$963},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','document']};};
$prop$getDocument={get:getDocument,$$metamodel$$:getDocument.$$metamodel$$};
exports.$prop$getDocument=$prop$getDocument;
function json$964(){
    var $$json=new json$964.$$;
    XMLHttpRequestResponseType($$$cl1.String("json",4),$$json);
    return $$json;
};json$964.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestResponseType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','json']};};
function $init$json$964(){
    if (json$964.$$===undefined){
        $$$cl1.initTypeProto(json$964,'com.openswimsoftware.ceylon.js.xmlhttprequest::json',$init$XMLHttpRequestResponseType());
    }
    return json$964;
}
exports.$init$json$964=$init$json$964;
$init$json$964();
var json$970;
function getJson(){
    if (json$970===undefined){json$970=$init$json$964()();json$970.$$metamodel$$=getJson.$$metamodel$$;}
    return json$970;
}
exports.getJson=getJson;
getJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:json$964},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','json']};};
$prop$getJson={get:getJson,$$metamodel$$:getJson.$$metamodel$$};
exports.$prop$getJson=$prop$getJson;
function text$965(){
    var $$text=new text$965.$$;
    XMLHttpRequestResponseType($$$cl1.String("text",4),$$text);
    return $$text;
};text$965.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestResponseType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','text']};};
function $init$text$965(){
    if (text$965.$$===undefined){
        $$$cl1.initTypeProto(text$965,'com.openswimsoftware.ceylon.js.xmlhttprequest::text',$init$XMLHttpRequestResponseType());
    }
    return text$965;
}
exports.$init$text$965=$init$text$965;
$init$text$965();
var text$971;
function getText(){
    if (text$971===undefined){text$971=$init$text$965()();text$971.$$metamodel$$=getText.$$metamodel$$;}
    return text$971;
}
exports.getText=getText;
getText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:text$965},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','text']};};
$prop$getText={get:getText,$$metamodel$$:getText.$$metamodel$$};
exports.$prop$getText=$prop$getText;
function ReadyState(num$972, $$readyState){
    $init$ReadyState();
    if ($$readyState===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$readyState.num$972_=num$972;
    return $$readyState;
}
ReadyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'num',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],of:[{t:readyStateUnsent$973},{t:readyStateOpened$974},{t:readyStateHeadersReceived$975},{t:readyStateLoading$976},{t:readyStateDone$977}],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','ReadyState']};};
exports.ReadyState=ReadyState;
function $init$ReadyState(){
    if (ReadyState.$$===undefined){
        $$$cl1.initTypeProto(ReadyState,'com.openswimsoftware.ceylon.js.xmlhttprequest::ReadyState',$$$cl1.Basic);
        (function($$readyState){
            $$$cl1.defineAttr($$readyState,'num$972',function(){return this.num$972_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadyState,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','ReadyState','$at','num']};});
        })(ReadyState.$$.prototype);
    }
    return ReadyState;
}
exports.$init$ReadyState=$init$ReadyState;
$init$ReadyState();
function readyStateUnsent$973(){
    var $$readyStateUnsent=new readyStateUnsent$973.$$;
    ReadyState((0),$$readyStateUnsent);
    return $$readyStateUnsent;
};readyStateUnsent$973.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:ReadyState},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateUnsent']};};
function $init$readyStateUnsent$973(){
    if (readyStateUnsent$973.$$===undefined){
        $$$cl1.initTypeProto(readyStateUnsent$973,'com.openswimsoftware.ceylon.js.xmlhttprequest::readyStateUnsent',$init$ReadyState());
    }
    return readyStateUnsent$973;
}
exports.$init$readyStateUnsent$973=$init$readyStateUnsent$973;
$init$readyStateUnsent$973();
var readyStateUnsent$978;
function getReadyStateUnsent(){
    if (readyStateUnsent$978===undefined){readyStateUnsent$978=$init$readyStateUnsent$973()();readyStateUnsent$978.$$metamodel$$=getReadyStateUnsent.$$metamodel$$;}
    return readyStateUnsent$978;
}
exports.getReadyStateUnsent=getReadyStateUnsent;
getReadyStateUnsent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateUnsent$973},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateUnsent']};};
$prop$getReadyStateUnsent={get:getReadyStateUnsent,$$metamodel$$:getReadyStateUnsent.$$metamodel$$};
exports.$prop$getReadyStateUnsent=$prop$getReadyStateUnsent;
function readyStateOpened$974(){
    var $$readyStateOpened=new readyStateOpened$974.$$;
    ReadyState((1),$$readyStateOpened);
    return $$readyStateOpened;
};readyStateOpened$974.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:ReadyState},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateOpened']};};
function $init$readyStateOpened$974(){
    if (readyStateOpened$974.$$===undefined){
        $$$cl1.initTypeProto(readyStateOpened$974,'com.openswimsoftware.ceylon.js.xmlhttprequest::readyStateOpened',$init$ReadyState());
    }
    return readyStateOpened$974;
}
exports.$init$readyStateOpened$974=$init$readyStateOpened$974;
$init$readyStateOpened$974();
var readyStateOpened$979;
function getReadyStateOpened(){
    if (readyStateOpened$979===undefined){readyStateOpened$979=$init$readyStateOpened$974()();readyStateOpened$979.$$metamodel$$=getReadyStateOpened.$$metamodel$$;}
    return readyStateOpened$979;
}
exports.getReadyStateOpened=getReadyStateOpened;
getReadyStateOpened.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateOpened$974},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateOpened']};};
$prop$getReadyStateOpened={get:getReadyStateOpened,$$metamodel$$:getReadyStateOpened.$$metamodel$$};
exports.$prop$getReadyStateOpened=$prop$getReadyStateOpened;
function readyStateHeadersReceived$975(){
    var $$readyStateHeadersReceived=new readyStateHeadersReceived$975.$$;
    ReadyState((2),$$readyStateHeadersReceived);
    return $$readyStateHeadersReceived;
};readyStateHeadersReceived$975.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:ReadyState},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateHeadersReceived']};};
function $init$readyStateHeadersReceived$975(){
    if (readyStateHeadersReceived$975.$$===undefined){
        $$$cl1.initTypeProto(readyStateHeadersReceived$975,'com.openswimsoftware.ceylon.js.xmlhttprequest::readyStateHeadersReceived',$init$ReadyState());
    }
    return readyStateHeadersReceived$975;
}
exports.$init$readyStateHeadersReceived$975=$init$readyStateHeadersReceived$975;
$init$readyStateHeadersReceived$975();
var readyStateHeadersReceived$980;
function getReadyStateHeadersReceived(){
    if (readyStateHeadersReceived$980===undefined){readyStateHeadersReceived$980=$init$readyStateHeadersReceived$975()();readyStateHeadersReceived$980.$$metamodel$$=getReadyStateHeadersReceived.$$metamodel$$;}
    return readyStateHeadersReceived$980;
}
exports.getReadyStateHeadersReceived=getReadyStateHeadersReceived;
getReadyStateHeadersReceived.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateHeadersReceived$975},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateHeadersReceived']};};
$prop$getReadyStateHeadersReceived={get:getReadyStateHeadersReceived,$$metamodel$$:getReadyStateHeadersReceived.$$metamodel$$};
exports.$prop$getReadyStateHeadersReceived=$prop$getReadyStateHeadersReceived;
function readyStateLoading$976(){
    var $$readyStateLoading=new readyStateLoading$976.$$;
    ReadyState((3),$$readyStateLoading);
    return $$readyStateLoading;
};readyStateLoading$976.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:ReadyState},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateLoading']};};
function $init$readyStateLoading$976(){
    if (readyStateLoading$976.$$===undefined){
        $$$cl1.initTypeProto(readyStateLoading$976,'com.openswimsoftware.ceylon.js.xmlhttprequest::readyStateLoading',$init$ReadyState());
    }
    return readyStateLoading$976;
}
exports.$init$readyStateLoading$976=$init$readyStateLoading$976;
$init$readyStateLoading$976();
var readyStateLoading$981;
function getReadyStateLoading(){
    if (readyStateLoading$981===undefined){readyStateLoading$981=$init$readyStateLoading$976()();readyStateLoading$981.$$metamodel$$=getReadyStateLoading.$$metamodel$$;}
    return readyStateLoading$981;
}
exports.getReadyStateLoading=getReadyStateLoading;
getReadyStateLoading.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateLoading$976},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateLoading']};};
$prop$getReadyStateLoading={get:getReadyStateLoading,$$metamodel$$:getReadyStateLoading.$$metamodel$$};
exports.$prop$getReadyStateLoading=$prop$getReadyStateLoading;
function readyStateDone$977(){
    var $$readyStateDone=new readyStateDone$977.$$;
    ReadyState((4),$$readyStateDone);
    return $$readyStateDone;
};readyStateDone$977.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:ReadyState},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateDone']};};
function $init$readyStateDone$977(){
    if (readyStateDone$977.$$===undefined){
        $$$cl1.initTypeProto(readyStateDone$977,'com.openswimsoftware.ceylon.js.xmlhttprequest::readyStateDone',$init$ReadyState());
    }
    return readyStateDone$977;
}
exports.$init$readyStateDone$977=$init$readyStateDone$977;
$init$readyStateDone$977();
var readyStateDone$982;
function getReadyStateDone(){
    if (readyStateDone$982===undefined){readyStateDone$982=$init$readyStateDone$977()();readyStateDone$982.$$metamodel$$=getReadyStateDone.$$metamodel$$;}
    return readyStateDone$982;
}
exports.getReadyStateDone=getReadyStateDone;
getReadyStateDone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateDone$977},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','readyStateDone']};};
$prop$getReadyStateDone={get:getReadyStateDone,$$metamodel$$:getReadyStateDone.$$metamodel$$};
exports.$prop$getReadyStateDone=$prop$getReadyStateDone;
function XMLHttpRequestOptions(anon, $$xMLHttpRequestOptions){
    $init$XMLHttpRequestOptions();
    if ($$xMLHttpRequestOptions===undefined)$$xMLHttpRequestOptions=new XMLHttpRequestOptions.$$;
    if(anon===undefined){anon=false;}
    $$xMLHttpRequestOptions.anon_=anon;
    return $$xMLHttpRequestOptions;
}
XMLHttpRequestOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'anon',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.shared()];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("XMLHttpRequest options",22)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestOptions']};};
exports.XMLHttpRequestOptions=XMLHttpRequestOptions;
function $init$XMLHttpRequestOptions(){
    if (XMLHttpRequestOptions.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestOptions,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestOptions',$$$cl1.Basic);
        (function($$xMLHttpRequestOptions){
            $$xMLHttpRequestOptions.toJson=function toJson(){
                var $$xMLHttpRequestOptions=this;
                var json$983=(values$984=[$$$cl1.Entry($$$cl1.String("anon",4),$$xMLHttpRequestOptions.anon,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}}}}),$$$cocjj639.JSON(values$984));
                var values$984;
                return json$983.toJson();
            };$$xMLHttpRequestOptions.toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjj639.JSJSON},$ps:[],$cont:XMLHttpRequestOptions,$an:function(){return[$$$cl1.doc($$$cl1.String("to native json",14)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestOptions','$m','toJson']};};
            $$$cl1.defineAttr($$xMLHttpRequestOptions,'anon',function(){return this.anon_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:XMLHttpRequestOptions,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestOptions','$at','anon']};});
        })(XMLHttpRequestOptions.$$.prototype);
    }
    return XMLHttpRequestOptions;
}
exports.$init$XMLHttpRequestOptions=$init$XMLHttpRequestOptions;
$init$XMLHttpRequestOptions();
function createXMLHttpRequest(options$985){
    if(options$985===undefined){options$985=null;}
    var o$986;
    if((o$986=options$985)!==null){
        /*Begin dynamic block*/
        return XMLHttpRequest((typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'37:25-37:38','xmlhttprequest.ceylon'):XMLHttpRequest)($$$cl1.$JsCallable((opt$987=o$986,$$$cl1.JsCallable(opt$987,opt$987!==null?opt$987.toJson:null)),[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cocjj639.JSJSON}})));
        /*End dynamic block*/
        var opt$987;
    }else {
        /*Begin dynamic block*/
        return XMLHttpRequest((typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'41:25-41:38','xmlhttprequest.ceylon'):XMLHttpRequest)());
        /*End dynamic block*/
    }
}
exports.createXMLHttpRequest=createXMLHttpRequest;
createXMLHttpRequest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:XMLHttpRequest},$ps:[{$nm:'options',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:XMLHttpRequestOptions}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("create a new XMLHttpRequest",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','createXMLHttpRequest']};};
function XMLHttpRequestAbs($$xMLHttpRequestAbs){
    $init$XMLHttpRequestAbs();
    if ($$xMLHttpRequestAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$xMLHttpRequestAbs);
    return $$xMLHttpRequestAbs;
}
XMLHttpRequestAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs']};};
exports.XMLHttpRequestAbs=XMLHttpRequestAbs;
function $init$XMLHttpRequestAbs(){
    if (XMLHttpRequestAbs.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestAbs,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestAbs',$$$cocjl339.JSObjectAbs);
        (function($$xMLHttpRequestAbs){
            $$xMLHttpRequestAbs.getOnreadystatechange=function getOnreadystatechange(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$988=$$xMLHttpRequestAbs.$native.onreadystatechange,$$$cl1.isOfType(tmpvar$988,{t:$$$cl1.Anything})?tmpvar$988:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'51:10-51:34','xmlhttprequest.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.getOnreadystatechange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event) which is on readystatechange handler",77)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getOnreadystatechange']};};
            $$xMLHttpRequestAbs.setOnreadystatechange=function setOnreadystatechange(handler$989){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestAbs.$native.onreadystatechange=$$$cl1.$JsCallable(handler$989/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.setOnreadystatechange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets on ready state change handler",34)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setOnreadystatechange']};};
            $$xMLHttpRequestAbs.readyState=function readyState(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                var readyState$990=$$xMLHttpRequestAbs.$native.readyState;
                $prop$getReadyState$990={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','readyState','$at','readyState']};}};
                $prop$getReadyState$990.get=function(){return readyState$990};
                if((tmpvar$991=readyState$990,tmpvar$992=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'66:21-66:34','xmlhttprequest.ceylon'):XMLHttpRequest).UNSENT,(tmpvar$991.equals&&tmpvar$991.equals(tmpvar$992))||tmpvar$991===tmpvar$992)){
                    return getReadyStateUnsent();
                }else {
                    if((tmpvar$993=readyState$990,tmpvar$994=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'68:28-68:41','xmlhttprequest.ceylon'):XMLHttpRequest).OPENED,(tmpvar$993.equals&&tmpvar$993.equals(tmpvar$994))||tmpvar$993===tmpvar$994)){
                        return getReadyStateOpened();
                    }else {
                        if((tmpvar$995=readyState$990,tmpvar$996=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'70:28-70:41','xmlhttprequest.ceylon'):XMLHttpRequest).HEADERS_RECEIVED,(tmpvar$995.equals&&tmpvar$995.equals(tmpvar$996))||tmpvar$995===tmpvar$996)){
                            return getReadyStateHeadersReceived();
                        }else {
                            if((tmpvar$997=readyState$990,tmpvar$998=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'72:28-72:41','xmlhttprequest.ceylon'):XMLHttpRequest).LOADING,(tmpvar$997.equals&&tmpvar$997.equals(tmpvar$998))||tmpvar$997===tmpvar$998)){
                                return getReadyStateLoading();
                            }else {
                                return getReadyStateDone();
                            }
                        }
                    }
                }/*End dynamic block*/
            };$$xMLHttpRequestAbs.readyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ReadyState},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the current ready state",31)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','readyState']};};
            $$xMLHttpRequestAbs.open$defs$async=function(method$999,url$1000,async$1001,user$1002,password$1003){var $$xMLHttpRequestAbs=this;
            return true;};
            $$xMLHttpRequestAbs.open$defs$user=function(method$999,url$1000,async$1001,user$1002,password$1003){var $$xMLHttpRequestAbs=this;
            return null;};
            $$xMLHttpRequestAbs.open$defs$password=function(method$999,url$1000,async$1001,user$1002,password$1003){var $$xMLHttpRequestAbs=this;
            return null;};
            $$xMLHttpRequestAbs.open=function open(method$999,url$1000,async$1001,user$1002,password$1003){
                var $$xMLHttpRequestAbs=this;
                if(async$1001===undefined){async$1001=$$xMLHttpRequestAbs.open$defs$async(method$999,url$1000,async$1001,user$1002,password$1003);}
                if(user$1002===undefined){user$1002=$$xMLHttpRequestAbs.open$defs$user(method$999,url$1000,async$1001,user$1002,password$1003);}
                if(password$1003===undefined){password$1003=$$xMLHttpRequestAbs.open$defs$password(method$999,url$1000,async$1001,user$1002,password$1003);}
                
                var case$1004=method$999;
                if ($$$cl1.isOfType(method$999,{t:$$$cl1.String})) {
                    
                    var case$1005=url$1000;
                    if ($$$cl1.isOfType(url$1000,{t:$$$cl1.String})) {
                        
                        var case$1006=user$1002;
                        if ($$$cl1.isOfType(user$1002,{t:$$$cl1.String})) {
                            
                            var case$1007=password$1003;
                            if ($$$cl1.isOfType(password$1003,{t:$$$cl1.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.valueOf(),async$1001,case$1006.valueOf(),case$1007.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cocjl339.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.valueOf(),async$1001,case$1006.valueOf(),case$1007.$native);
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cl1.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.valueOf(),async$1001,case$1006.valueOf());
                                /*End dynamic block*/
                            }
                        }else if ($$$cl1.isOfType(user$1002,{t:$$$cocjl339.JSString})) {
                            
                            var case$1008=password$1003;
                            if ($$$cl1.isOfType(password$1003,{t:$$$cl1.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.valueOf(),async$1001,case$1006.$native,case$1008.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cocjl339.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.valueOf(),async$1001,case$1006.$native,case$1008.$native);
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cl1.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.valueOf(),async$1001,case$1006.$native);
                                /*End dynamic block*/
                            }
                        }else if ($$$cl1.isOfType(user$1002,{t:$$$cl1.Null})) {
                            
                            var case$1009=password$1003;
                            if ($$$cl1.isOfType(password$1003,{t:$$$cl1.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.valueOf(),async$1001,null,case$1009.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cocjl339.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.valueOf(),async$1001,null,case$1009.$native);
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cl1.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.valueOf(),async$1001);
                                /*End dynamic block*/
                            }
                        }
                    }else if ($$$cl1.isOfType(url$1000,{t:$$$cocjl339.JSString})) {
                        
                        var case$1010=user$1002;
                        if ($$$cl1.isOfType(user$1002,{t:$$$cl1.String})) {
                            
                            var case$1011=password$1003;
                            if ($$$cl1.isOfType(password$1003,{t:$$$cl1.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.$native,async$1001,case$1010.valueOf(),case$1011.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cocjl339.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.$native,async$1001,case$1010.valueOf(),case$1011.$native);
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cl1.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.$native,async$1001,case$1010.valueOf());
                                /*End dynamic block*/
                            }
                        }else if ($$$cl1.isOfType(user$1002,{t:$$$cocjl339.JSString})) {
                            
                            var case$1012=password$1003;
                            if ($$$cl1.isOfType(password$1003,{t:$$$cl1.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.$native,async$1001,case$1010.$native,case$1012.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cocjl339.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.$native,async$1001,case$1010.$native,case$1012.$native);
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cl1.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.$native,async$1001,case$1010.$native);
                                /*End dynamic block*/
                            }
                        }else if ($$$cl1.isOfType(user$1002,{t:$$$cl1.Null})) {
                            
                            var case$1013=password$1003;
                            if ($$$cl1.isOfType(password$1003,{t:$$$cl1.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.$native,async$1001,null,case$1013.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cocjl339.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.$native,async$1001,null,case$1013.$native);
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cl1.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.valueOf(),case$1005.$native,async$1001);
                                /*End dynamic block*/
                            }
                        }
                    }
                }else if ($$$cl1.isOfType(method$999,{t:$$$cocjl339.JSString})) {
                    
                    var case$1014=url$1000;
                    if ($$$cl1.isOfType(url$1000,{t:$$$cl1.String})) {
                        
                        var case$1015=user$1002;
                        if ($$$cl1.isOfType(user$1002,{t:$$$cl1.String})) {
                            
                            var case$1016=password$1003;
                            if ($$$cl1.isOfType(password$1003,{t:$$$cl1.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.valueOf(),async$1001,case$1015.valueOf(),case$1016.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cocjl339.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.valueOf(),async$1001,case$1015.valueOf(),case$1016.$native);
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cl1.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.valueOf(),async$1001,case$1015.valueOf());
                                /*End dynamic block*/
                            }
                        }else if ($$$cl1.isOfType(user$1002,{t:$$$cocjl339.JSString})) {
                            
                            var case$1017=password$1003;
                            if ($$$cl1.isOfType(password$1003,{t:$$$cl1.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.valueOf(),async$1001,case$1015.$native,case$1017.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cocjl339.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.valueOf(),async$1001,case$1015.$native,case$1017.$native);
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cl1.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.valueOf(),async$1001,case$1015.$native);
                                /*End dynamic block*/
                            }
                        }else if ($$$cl1.isOfType(user$1002,{t:$$$cl1.Null})) {
                            
                            var case$1018=password$1003;
                            if ($$$cl1.isOfType(password$1003,{t:$$$cl1.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.valueOf(),async$1001,null,case$1018.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cocjl339.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.valueOf(),async$1001,null,case$1018.$native);
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cl1.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.valueOf(),async$1001);
                                /*End dynamic block*/
                            }
                        }
                    }else if ($$$cl1.isOfType(url$1000,{t:$$$cocjl339.JSString})) {
                        
                        var case$1019=user$1002;
                        if ($$$cl1.isOfType(user$1002,{t:$$$cl1.String})) {
                            
                            var case$1020=password$1003;
                            if ($$$cl1.isOfType(password$1003,{t:$$$cl1.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.$native,async$1001,case$1019.valueOf(),case$1020.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cocjl339.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.$native,async$1001,case$1019.valueOf(),case$1020.$native);
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cl1.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.$native,async$1001,case$1019.valueOf());
                                /*End dynamic block*/
                            }
                        }else if ($$$cl1.isOfType(user$1002,{t:$$$cocjl339.JSString})) {
                            
                            var case$1021=password$1003;
                            if ($$$cl1.isOfType(password$1003,{t:$$$cl1.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.$native,async$1001,case$1019.$native,case$1021.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cocjl339.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.$native,async$1001,case$1019.$native,case$1021.$native);
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cl1.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.$native,async$1001,case$1019.$native);
                                /*End dynamic block*/
                            }
                        }else if ($$$cl1.isOfType(user$1002,{t:$$$cl1.Null})) {
                            
                            var case$1022=password$1003;
                            if ($$$cl1.isOfType(password$1003,{t:$$$cl1.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.$native,async$1001,null,case$1022.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cocjl339.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.$native,async$1001,null,case$1022.$native);
                                /*End dynamic block*/
                            }else if ($$$cl1.isOfType(password$1003,{t:$$$cl1.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(case$1004.$native,case$1014.$native,async$1001);
                                /*End dynamic block*/
                            }
                        }
                    }
                }
            };$$xMLHttpRequestAbs.open.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'method',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'url',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'async',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'user',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]}]},$an:function(){return[];}},{$nm:'password',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("open a new request",18)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','open']};};
            $$xMLHttpRequestAbs.setRequestHeader=function setRequestHeader(header$1023,val$1024){
                var $$xMLHttpRequestAbs=this;
                
                var case$1025=header$1023;
                if ($$$cl1.isOfType(header$1023,{t:$$$cl1.String})) {
                    
                    var case$1026=val$1024;
                    if ($$$cl1.isOfType(val$1024,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.setRequestHeader(case$1025.valueOf(),case$1026.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(val$1024,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.setRequestHeader(case$1025.valueOf(),case$1026.$native);
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(header$1023,{t:$$$cocjl339.JSString})) {
                    
                    var case$1027=val$1024;
                    if ($$$cl1.isOfType(val$1024,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.setRequestHeader(case$1025.$native,case$1027.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(val$1024,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.setRequestHeader(case$1025.$native,case$1027.$native);
                        /*End dynamic block*/
                    }
                }
            };$$xMLHttpRequestAbs.setRequestHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'header',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set a request headers value",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setRequestHeader']};};
            $$xMLHttpRequestAbs.getTimeout=function getTimeout(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$xMLHttpRequestAbs.$native.timeout);
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.getTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the request timeout",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getTimeout']};};
            $$xMLHttpRequestAbs.setTimeout=function setTimeout(timeout$1028){
                var $$xMLHttpRequestAbs=this;
                
                var case$1029=timeout$1028;
                if ($$$cl1.isOfType(timeout$1028,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.timeout=case$1029;
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(timeout$1028,{t:$$$cocjl339.JSNumber})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.timeout=case$1029.$native;
                    /*End dynamic block*/
                }
            };$$xMLHttpRequestAbs.setTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'timeout',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the request timeout",23)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setTimeout']};};
            $$xMLHttpRequestAbs.getWithCredentials=function getWithCredentials(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                if($$xMLHttpRequestAbs.$native.withCredentials){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$xMLHttpRequestAbs.getWithCredentials.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("return whether request should be made with credentials",54)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getWithCredentials']};};
            $$xMLHttpRequestAbs.setWithCredentials=function setWithCredentials(credentials$1030){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestAbs.$native.withCredentials=credentials$1030;
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.setWithCredentials.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'credentials',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set that request should be made with credentials",48)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setWithCredentials']};};
            $$xMLHttpRequestAbs.upload=function upload(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                return XMLHttpRequestUpload($$xMLHttpRequestAbs.$native.upload);
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.upload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:XMLHttpRequestUpload},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the upload request",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','upload']};};
            $$xMLHttpRequestAbs.send$defs$data=function(data$1031){var $$xMLHttpRequestAbs=this;
            return null;};
            $$xMLHttpRequestAbs.send=function send(data$1031){
                var $$xMLHttpRequestAbs=this;
                if(data$1031===undefined){data$1031=$$xMLHttpRequestAbs.send$defs$data(data$1031);}
                
                var case$1032=data$1031;
                if ($$$cl1.isOfType(data$1031,{t:$$$cocjf944.Blob})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.send(case$1032.$native);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$1031,{t:$$$cocjd958.Document})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.send(case$1032.$native);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$1031,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.send(case$1032.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$1031,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.send(case$1032.$native);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$1031,{t:FormData})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.send(case$1032.$native);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$1031,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.send();
                    /*End dynamic block*/
                }
            };$$xMLHttpRequestAbs.send.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cocjf944.Blob},{t:$$$cocjd958.Document},{t:$$$cl1.String},{t:$$$cocjl339.JSString},{t:'u', l:[{t:$$$cl1.Null},{t:FormData}]}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("initiate the request",20)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','send']};};
            $$xMLHttpRequestAbs.abort=function abort(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestAbs.$native.abort();
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.abort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("cancels network activity",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','abort']};};
            $$xMLHttpRequestAbs.status=function status(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$xMLHttpRequestAbs.$native.status);
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.status.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns http status code",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','status']};};
            $$xMLHttpRequestAbs.statusText=function statusText(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$xMLHttpRequestAbs.$native.statusText);
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.statusText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns http text status",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','statusText']};};
            $$xMLHttpRequestAbs.getResponseHeader=function getResponseHeader(header$1033){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                var rheader$1034;
                $prop$getRheader$1034={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getResponseHeader','$at','rheader']};}};
                $prop$getRheader$1034.get=function(){return rheader$1034};
                
                var case$1035=header$1033;
                if ($$$cl1.isOfType(header$1033,{t:$$$cl1.String})) {
                    rheader$1034=$$xMLHttpRequestAbs.$native.getResponseHeader(case$1035.valueOf());
                }else if ($$$cl1.isOfType(header$1033,{t:$$$cocjl339.JSString})) {
                    rheader$1034=$$xMLHttpRequestAbs.$native.getResponseHeader(case$1035.$native);
                }if((tmpvar$1036=rheader$1034,tmpvar$1037=null,(tmpvar$1036.equals&&!tmpvar$1036.equals(tmpvar$1037))||tmpvar$1036!==tmpvar$1037)){
                    return $$$cocjl339.JSString(rheader$1034);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$xMLHttpRequestAbs.getResponseHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[{$nm:'header',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the specified response header",37)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getResponseHeader']};};
            $$xMLHttpRequestAbs.getAllResponseHeaders=function getAllResponseHeaders(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                var rheaders$1038=$$xMLHttpRequestAbs.$native.getAllResponseHeaders();
                $prop$getRheaders$1038={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getAllResponseHeaders','$at','rheaders']};}};
                $prop$getRheaders$1038.get=function(){return rheaders$1038};
                if((tmpvar$1039=rheaders$1038,tmpvar$1040=null,(tmpvar$1039.equals&&!tmpvar$1039.equals(tmpvar$1040))||tmpvar$1039!==tmpvar$1040)){
                    return $$$cocjl339.JSString(rheaders$1038);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$xMLHttpRequestAbs.getAllResponseHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns all response headers as a string sepreated by new lines",63)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getAllResponseHeaders']};};
            $$xMLHttpRequestAbs.overrideMimeType=function overrideMimeType(mime$1041){
                var $$xMLHttpRequestAbs=this;
                
                var case$1042=mime$1041;
                if ($$$cl1.isOfType(mime$1041,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.overrideMimeType(case$1042.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(mime$1041,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.overrideMimeType(case$1042.$native);
                    /*End dynamic block*/
                }
            };$$xMLHttpRequestAbs.overrideMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'mime',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the request response mime type",34)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','overrideMimeType']};};
            $$xMLHttpRequestAbs.getResponseType=function getResponseType(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$1043=$$xMLHttpRequestAbs.$native.responseType,tmpvar$1044=$$$cl1.String("",0),(tmpvar$1043.equals&&tmpvar$1043.equals(tmpvar$1044))||tmpvar$1043===tmpvar$1044)){
                    return getBlank();
                }else {
                    if((tmpvar$1045=$$xMLHttpRequestAbs.$native.responseType,tmpvar$1046=$$$cl1.String("arraybuffer",11),(tmpvar$1045.equals&&tmpvar$1045.equals(tmpvar$1046))||tmpvar$1045===tmpvar$1046)){
                        return getArraybuffer();
                    }else {
                        if((tmpvar$1047=$$xMLHttpRequestAbs.$native.responseType,tmpvar$1048=$$$cl1.String("blob",4),(tmpvar$1047.equals&&tmpvar$1047.equals(tmpvar$1048))||tmpvar$1047===tmpvar$1048)){
                            return getBlob();
                        }else {
                            if((tmpvar$1049=$$xMLHttpRequestAbs.$native.responseType,tmpvar$1050=$$$cl1.String("document",8),(tmpvar$1049.equals&&tmpvar$1049.equals(tmpvar$1050))||tmpvar$1049===tmpvar$1050)){
                                return getDocument();
                            }else {
                                if((tmpvar$1051=$$xMLHttpRequestAbs.$native.responseType,tmpvar$1052=$$$cl1.String("json",4),(tmpvar$1051.equals&&tmpvar$1051.equals(tmpvar$1052))||tmpvar$1051===tmpvar$1052)){
                                    return getJson();
                                }else {
                                    return getText();
                                }
                            }
                        }
                    }
                }/*End dynamic block*/
            };$$xMLHttpRequestAbs.getResponseType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:XMLHttpRequestResponseType},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the request response type",33)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getResponseType']};};
            $$xMLHttpRequestAbs.setResponseType=function setResponseType(responseType$1053){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestAbs.$native.responseType=responseType$1053.string.valueOf();
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.setResponseType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'responseType',$mt:'prm',$t:{t:XMLHttpRequestResponseType},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the request response type",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setResponseType']};};
            $$xMLHttpRequestAbs.response=function response(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$1054=$$xMLHttpRequestAbs.$native.response,$$$cl1.isOfType(tmpvar$1054,{t:$$$cl1.Anything})?tmpvar$1054:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'528:10-528:24','xmlhttprequest.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.response.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the response as ArrayBuffer|Blob|Document|JSON",54)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','response']};};
            $$xMLHttpRequestAbs.responseText=function responseText(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$xMLHttpRequestAbs.$native.responseText);
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.responseText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the response as a string",32)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','responseText']};};
            $$xMLHttpRequestAbs.responseXML=function responseXML(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                var responseXML$1055=$$xMLHttpRequestAbs.$native.responseXML;
                $prop$getResponseXML$1055={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','responseXML','$at','responseXML']};}};
                $prop$getResponseXML$1055.get=function(){return responseXML$1055};
                if((tmpvar$1056=responseXML$1055,tmpvar$1057=null,(tmpvar$1056.equals&&!tmpvar$1056.equals(tmpvar$1057))||tmpvar$1056!==tmpvar$1057)){
                    return $$$cocjd958.Document(responseXML$1055);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$xMLHttpRequestAbs.responseXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjd958.Document}]},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the response as an XML Document",39)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','responseXML']};};
        })(XMLHttpRequestAbs.$$.prototype);
    }
    return XMLHttpRequestAbs;
}
exports.$init$XMLHttpRequestAbs=$init$XMLHttpRequestAbs;
$init$XMLHttpRequestAbs();
function XMLHttpRequest(n$1058, $$xMLHttpRequest){
    $init$XMLHttpRequest();
    if ($$xMLHttpRequest===undefined)$$xMLHttpRequest=new XMLHttpRequest.$$;
    $$xMLHttpRequest.n$1058_=n$1058;
    XMLHttpRequestAbs($$xMLHttpRequest);
    $$xMLHttpRequest.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:XMLHttpRequest,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequest','$at','native']};}};
    /*Begin dynamic block*/
    $$xMLHttpRequest.$native=$$xMLHttpRequest.n$1058;/*End dynamic block*/
    return $$xMLHttpRequest;
}
XMLHttpRequest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("XMLHttpRequest",14)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequest']};};
exports.XMLHttpRequest=XMLHttpRequest;
function $init$XMLHttpRequest(){
    if (XMLHttpRequest.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequest,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequest',$init$XMLHttpRequestAbs());
        (function($$xMLHttpRequest){
            $$$cl1.defineAttr($$xMLHttpRequest,'n$1058',function(){return this.n$1058_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:XMLHttpRequest,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequest','$at','n']};});
        })(XMLHttpRequest.$$.prototype);
    }
    return XMLHttpRequest;
}
exports.$init$XMLHttpRequest=$init$XMLHttpRequest;
$init$XMLHttpRequest();
function XMLHttpRequestEventTargetAbs($$xMLHttpRequestEventTargetAbs){
    $init$XMLHttpRequestEventTargetAbs();
    if ($$xMLHttpRequestEventTargetAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjd958.EventTargetAbs($$xMLHttpRequestEventTargetAbs);
    return $$xMLHttpRequestEventTargetAbs;
}
XMLHttpRequestEventTargetAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjd958.EventTargetAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs']};};
exports.XMLHttpRequestEventTargetAbs=XMLHttpRequestEventTargetAbs;
function $init$XMLHttpRequestEventTargetAbs(){
    if (XMLHttpRequestEventTargetAbs.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestEventTargetAbs,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestEventTargetAbs',$$$cocjd958.EventTargetAbs);
        (function($$xMLHttpRequestEventTargetAbs){
            $$xMLHttpRequestEventTargetAbs.getOnloadstart=function getOnloadstart(){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$1059=$$xMLHttpRequestEventTargetAbs.$native.onloadstart,$$$cl1.isOfType(tmpvar$1059,{t:$$$cl1.Anything})?tmpvar$1059:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'8:10-8:27','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.getOnloadstart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event) onloadstart handler",60)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnloadstart']};};
            $$xMLHttpRequestEventTargetAbs.setOnloadstart=function setOnloadstart(handler$1060){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestEventTargetAbs.$native.onloadstart=$$$cl1.$JsCallable(handler$1060/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.setOnloadstart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets onloadstart handler",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnloadstart']};};
            $$xMLHttpRequestEventTargetAbs.getOnprogress=function getOnprogress(){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$1061=$$xMLHttpRequestEventTargetAbs.$native.onprogress,$$$cl1.isOfType(tmpvar$1061,{t:$$$cl1.Anything})?tmpvar$1061:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'22:10-22:26','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.getOnprogress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event) onprogress handler",59)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnprogress']};};
            $$xMLHttpRequestEventTargetAbs.setOnprogress=function setOnprogress(handler$1062){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestEventTargetAbs.$native.onprogress=$$$cl1.$JsCallable(handler$1062/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.setOnprogress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets onprogress handler",23)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnprogress']};};
            $$xMLHttpRequestEventTargetAbs.getOnabort=function getOnabort(){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$1063=$$xMLHttpRequestEventTargetAbs.$native.onabort,$$$cl1.isOfType(tmpvar$1063,{t:$$$cl1.Anything})?tmpvar$1063:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'36:10-36:23','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.getOnabort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event) onabort handler",56)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnabort']};};
            $$xMLHttpRequestEventTargetAbs.setOnabort=function setOnabort(handler$1064){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestEventTargetAbs.$native.onabort=$$$cl1.$JsCallable(handler$1064/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.setOnabort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets onabort handler",20)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnabort']};};
            $$xMLHttpRequestEventTargetAbs.getOnerror=function getOnerror(){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$1065=$$xMLHttpRequestEventTargetAbs.$native.onerror,$$$cl1.isOfType(tmpvar$1065,{t:$$$cl1.Anything})?tmpvar$1065:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'50:10-50:23','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.getOnerror.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event) onerror handler",56)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnerror']};};
            $$xMLHttpRequestEventTargetAbs.setOnerror=function setOnerror(handler$1066){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestEventTargetAbs.$native.onerror=$$$cl1.$JsCallable(handler$1066/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.setOnerror.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets onerror handler",20)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnerror']};};
            $$xMLHttpRequestEventTargetAbs.getOnload=function getOnload(){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$1067=$$xMLHttpRequestEventTargetAbs.$native.onload,$$$cl1.isOfType(tmpvar$1067,{t:$$$cl1.Anything})?tmpvar$1067:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'64:10-64:22','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.getOnload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event) onload handler",55)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnload']};};
            $$xMLHttpRequestEventTargetAbs.setOnload=function setOnload(handler$1068){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestEventTargetAbs.$native.onload=$$$cl1.$JsCallable(handler$1068/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.setOnload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets onload handler",19)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnload']};};
            $$xMLHttpRequestEventTargetAbs.getOntimeout=function getOntimeout(){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$1069=$$xMLHttpRequestEventTargetAbs.$native.ontimeout,$$$cl1.isOfType(tmpvar$1069,{t:$$$cl1.Anything})?tmpvar$1069:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'78:10-78:25','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.getOntimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event) ontimeout handler",58)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOntimeout']};};
            $$xMLHttpRequestEventTargetAbs.setOntimeout=function setOntimeout(handler$1070){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestEventTargetAbs.$native.ontimeout=$$$cl1.$JsCallable(handler$1070/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.setOntimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets ontimeout handler",22)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOntimeout']};};
            $$xMLHttpRequestEventTargetAbs.getOnloadend=function getOnloadend(){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$1071=$$xMLHttpRequestEventTargetAbs.$native.onloadend,$$$cl1.isOfType(tmpvar$1071,{t:$$$cl1.Anything})?tmpvar$1071:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'92:10-92:25','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.getOnloadend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event) returns onloadend handler",66)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnloadend']};};
            $$xMLHttpRequestEventTargetAbs.setOnloadend=function setOnloadend(handler$1072){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestEventTargetAbs.$native.onloadend=$$$cl1.$JsCallable(handler$1072/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.setOnloadend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets onloadend handler",22)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnloadend']};};
        })(XMLHttpRequestEventTargetAbs.$$.prototype);
    }
    return XMLHttpRequestEventTargetAbs;
}
exports.$init$XMLHttpRequestEventTargetAbs=$init$XMLHttpRequestEventTargetAbs;
$init$XMLHttpRequestEventTargetAbs();
function XMLHttpRequestEventTarget(n$1073, $$xMLHttpRequestEventTarget){
    $init$XMLHttpRequestEventTarget();
    if ($$xMLHttpRequestEventTarget===undefined)$$xMLHttpRequestEventTarget=new XMLHttpRequestEventTarget.$$;
    $$xMLHttpRequestEventTarget.n$1073_=n$1073;
    XMLHttpRequestEventTargetAbs($$xMLHttpRequestEventTarget);
    $$xMLHttpRequestEventTarget.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:XMLHttpRequestEventTarget,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTarget','$at','native']};}};
    /*Begin dynamic block*/
    $$xMLHttpRequestEventTarget.$native=$$xMLHttpRequestEventTarget.n$1073;/*End dynamic block*/
    return $$xMLHttpRequestEventTarget;
}
XMLHttpRequestEventTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestEventTargetAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("XMLHttpRequestEventTarget",25)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTarget']};};
exports.XMLHttpRequestEventTarget=XMLHttpRequestEventTarget;
function $init$XMLHttpRequestEventTarget(){
    if (XMLHttpRequestEventTarget.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestEventTarget,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestEventTarget',$init$XMLHttpRequestEventTargetAbs());
        (function($$xMLHttpRequestEventTarget){
            $$$cl1.defineAttr($$xMLHttpRequestEventTarget,'n$1073',function(){return this.n$1073_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:XMLHttpRequestEventTarget,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestEventTarget','$at','n']};});
        })(XMLHttpRequestEventTarget.$$.prototype);
    }
    return XMLHttpRequestEventTarget;
}
exports.$init$XMLHttpRequestEventTarget=$init$XMLHttpRequestEventTarget;
$init$XMLHttpRequestEventTarget();
function XMLHttpRequestUploadAbs($$xMLHttpRequestUploadAbs){
    $init$XMLHttpRequestUploadAbs();
    if ($$xMLHttpRequestUploadAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    XMLHttpRequestEventTargetAbs($$xMLHttpRequestUploadAbs);
    return $$xMLHttpRequestUploadAbs;
}
XMLHttpRequestUploadAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestEventTargetAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestUploadAbs']};};
exports.XMLHttpRequestUploadAbs=XMLHttpRequestUploadAbs;
function $init$XMLHttpRequestUploadAbs(){
    if (XMLHttpRequestUploadAbs.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestUploadAbs,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestUploadAbs',$init$XMLHttpRequestEventTargetAbs());
    }
    return XMLHttpRequestUploadAbs;
}
exports.$init$XMLHttpRequestUploadAbs=$init$XMLHttpRequestUploadAbs;
$init$XMLHttpRequestUploadAbs();
function XMLHttpRequestUpload(n$1074, $$xMLHttpRequestUpload){
    $init$XMLHttpRequestUpload();
    if ($$xMLHttpRequestUpload===undefined)$$xMLHttpRequestUpload=new XMLHttpRequestUpload.$$;
    $$xMLHttpRequestUpload.n$1074_=n$1074;
    XMLHttpRequestUploadAbs($$xMLHttpRequestUpload);
    /*Begin dynamic block*/
    $$xMLHttpRequestUpload.$native=$$xMLHttpRequestUpload.n$1074;/*End dynamic block*/
    return $$xMLHttpRequestUpload;
}
XMLHttpRequestUpload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestUploadAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("XMLHttpRequestUpload",20)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestUpload']};};
exports.XMLHttpRequestUpload=XMLHttpRequestUpload;
function $init$XMLHttpRequestUpload(){
    if (XMLHttpRequestUpload.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestUpload,'com.openswimsoftware.ceylon.js.xmlhttprequest::XMLHttpRequestUpload',$init$XMLHttpRequestUploadAbs());
        (function($$xMLHttpRequestUpload){
            $$$cl1.defineAttr($$xMLHttpRequestUpload,'n$1074',function(){return this.n$1074_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:XMLHttpRequestUpload,d:['com.openswimsoftware.ceylon.js.xmlhttprequest','XMLHttpRequestUpload','$at','n']};});
        })(XMLHttpRequestUpload.$$.prototype);
    }
    return XMLHttpRequestUpload;
}
exports.$init$XMLHttpRequestUpload=$init$XMLHttpRequestUpload;
$init$XMLHttpRequestUpload();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
