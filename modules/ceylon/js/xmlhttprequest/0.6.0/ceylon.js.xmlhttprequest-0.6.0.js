(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1","ceylon.js.language\/1.8.5","ceylon.js.file\/1.0.0","ceylon.js.dom\/4.0.0","ceylon.js.html\/5.0.0","ceylon.js.json\/1.0.0"],"$mod-name":"ceylon.js.xmlhttprequest","$mod-version":"0.6.0","ceylon.js.xmlhttprequest":{"arraybuffer":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"arraybuffer"},"readyStateHeadersReceived":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateHeadersReceived"},"XMLHttpRequestOptions":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"anon"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toJson":{"$t":{"$md":"ceylon.js.json","$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"}},"$at":{"anon":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"anon"}},"$nm":"XMLHttpRequestOptions"},"$pkg-shared":"1","document":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"document"},"XMLHttpRequestUpload":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestUploadAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"XMLHttpRequestUpload"},"XMLHttpRequest":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"XMLHttpRequest"},"json":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"json"},"createFormData":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"FormData"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.html","$pk":"ceylon.js.html","$nm":"HTMLFormElement"}]},"$mt":"prm","$def":"1","$nm":"form"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createFormData"},"XMLHttpRequestEventTarget":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestEventTargetAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"XMLHttpRequestEventTarget"},"readyStateUnsent":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateUnsent"},"ReadyState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.xmlhttprequest","$nm":"readyStateUnsent"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"readyStateOpened"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"readyStateHeadersReceived"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"readyStateLoading"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"readyStateDone"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"num"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"num":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"num"}},"$nm":"ReadyState"},"FormDataAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"append":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"append"},"appendBlob":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"$md":"ceylon.js.file","$pk":"ceylon.js.file","$nm":"Blob"},"$mt":"prm","$nm":"val"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"filename"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendBlob"}},"$nm":"FormDataAbs"},"text":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"text"},"blank":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"blank"},"readyStateLoading":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateLoading"},"readyStateOpened":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateOpened"},"FormData":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"FormDataAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"FormData"},"readyStateDone":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateDone"},"XMLHttpRequestEventTargetAbs":{"abstract":"1","super":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"EventTargetAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setOnprogress":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnprogress"},"getOnload":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnload"},"setOnloadend":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnloadend"},"getOnloadend":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnloadend"},"setOnloadstart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnloadstart"},"getOntimeout":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOntimeout"},"setOnerror":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnerror"},"setOntimeout":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOntimeout"},"getOnerror":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnerror"},"getOnloadstart":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnloadstart"},"getOnprogress":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnprogress"},"getOnabort":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnabort"},"setOnabort":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnabort"},"setOnload":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnload"}},"$nm":"XMLHttpRequestEventTargetAbs"},"XMLHttpRequestResponseType":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.xmlhttprequest","$nm":"blank"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"arraybuffer"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"blob"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"document"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"json"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"text"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"XMLHttpRequestResponseType"},"blob":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"blob"},"createXMLHttpRequest":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequest"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestOptions"}]},"$mt":"prm","$def":"1","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createXMLHttpRequest"},"XMLHttpRequestUploadAbs":{"abstract":"1","super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestEventTargetAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"XMLHttpRequestUploadAbs"},"XMLHttpRequestAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setResponseType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"prm","$nm":"responseType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setResponseType"},"getWithCredentials":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getWithCredentials"},"getAllResponseHeaders":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAllResponseHeaders"},"send":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.file","$pk":"ceylon.js.file","$nm":"Blob"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Document"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"FormData"}]}]},"$mt":"prm","$def":"1","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"send"},"responseXML":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Document"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"responseXML"},"status":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"status"},"getOnreadystatechange":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnreadystatechange"},"responseText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"responseText"},"statusText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"statusText"},"readyState":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"mthd","$an":{"shared":[]},"$nm":"readyState"},"overrideMimeType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"mime"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"overrideMimeType"},"upload":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestUpload"},"$mt":"mthd","$an":{"shared":[]},"$nm":"upload"},"response":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"response"},"open":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"method"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"async"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$def":"1","$nm":"user"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$def":"1","$nm":"password"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"open"},"getResponseHeader":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getResponseHeader"},"setRequestHeader":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setRequestHeader"},"getTimeout":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTimeout"},"getResponseType":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getResponseType"},"setTimeout":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"timeout"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTimeout"},"setOnreadystatechange":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnreadystatechange"},"setWithCredentials":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"credentials"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setWithCredentials"},"abort":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"abort"}},"$nm":"XMLHttpRequestAbs"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6.1');
var $$$cjl359=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl1.$addmod$($$$cjl359,'ceylon.js.language/1.8.5');
var $$$cjf961=require('ceylon/js/file/1.0.0/ceylon.js.file-1.0.0');
$$$cl1.$addmod$($$$cjf961,'ceylon.js.file/1.0.0');
var $$$cjh449=require('ceylon/js/html/5.0.0/ceylon.js.html-5.0.0');
$$$cl1.$addmod$($$$cjh449,'ceylon.js.html/5.0.0');
function createFormData(form$962){
    if(form$962===undefined){form$962=null;}
    /*Begin dynamic block*/
    return FormData((typeof FormData==='undefined'||FormData===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: FormData")),'7:18-7:25','formdata.ceylon'):FormData)(/*NULL PARAM!*/(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'7:29-7:29','formdata.ceylon'):f)));
    /*End dynamic block*/
}
exports.createFormData=createFormData;
createFormData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:FormData},$ps:[{$nm:'form',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjh449.HTMLFormElement}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','createFormData']};};
function FormDataAbs($$formDataAbs){
    $init$FormDataAbs();
    if ($$formDataAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl359.JSObjectAbs($$formDataAbs);
    function append(name$963,val$964){
        
        var case$965=name$963;
        if ($$$cl1.isOfType(name$963,{t:$$$cl1.String})) {
            
            var case$966=val$964;
            if ($$$cl1.isOfType(val$964,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$965.valueOf()/*NULL PARAM!*/,case$966.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$964,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$965.valueOf()/*NULL PARAM!*/,case$966.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(name$963,{t:$$$cjl359.JSString})) {
            
            var case$967=val$964;
            if ($$$cl1.isOfType(val$964,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$965.$native/*NULL PARAM!*/,case$967.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$964,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$965.$native/*NULL PARAM!*/,case$967.$native);
                /*End dynamic block*/
            }
        }
    }
    $$formDataAbs.append=append;
    append.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:FormDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','FormDataAbs','$m','append']};};
    function appendBlob(name$968,val$969,filename$970){
        
        var case$971=name$968;
        if ($$$cl1.isOfType(name$968,{t:$$$cl1.String})) {
            
            var case$972=filename$970;
            if ($$$cl1.isOfType(filename$970,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$971.valueOf()/*NULL PARAM!*/,val$969.$native/*NULL PARAM!*/,case$972.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(filename$970,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$971.valueOf()/*NULL PARAM!*/,val$969.$native/*NULL PARAM!*/,case$972.$native);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(filename$970,{t:$$$cl1.Null})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$971.valueOf()/*NULL PARAM!*/,val$969.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(name$968,{t:$$$cjl359.JSString})) {
            
            var case$973=filename$970;
            if ($$$cl1.isOfType(filename$970,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$971.$native/*NULL PARAM!*/,val$969.$native/*NULL PARAM!*/,case$973.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(filename$970,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$971.$native/*NULL PARAM!*/,val$969.$native/*NULL PARAM!*/,case$973.$native);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(filename$970,{t:$$$cl1.Null})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$971.$native/*NULL PARAM!*/,val$969.$native);
                /*End dynamic block*/
            }
        }
    }
    $$formDataAbs.appendBlob=appendBlob;
    appendBlob.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cjf961.Blob},$an:function(){return[];}},{$nm:'filename',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]}]},$an:function(){return[];}}],$cont:FormDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','FormDataAbs','$m','appendBlob']};};
    return $$formDataAbs;
}
FormDataAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.xmlhttprequest','FormDataAbs']};};
exports.FormDataAbs=FormDataAbs;
function $init$FormDataAbs(){
    if (FormDataAbs.$$===undefined){
        $$$cl1.initTypeProto(FormDataAbs,'ceylon.js.xmlhttprequest::FormDataAbs',$$$cjl359.JSObjectAbs);
    }
    return FormDataAbs;
}
exports.$init$FormDataAbs=$init$FormDataAbs;
$init$FormDataAbs();
function FormData(n$974, $$formData){
    $init$FormData();
    if ($$formData===undefined)$$formData=new FormData.$$;
    $$formData.n$974_=n$974;
    FormDataAbs($$formData);
    $$$cl1.defineAttr($$formData,'n$974',function(){return this.n$974_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:FormData,d:['ceylon.js.xmlhttprequest','FormData','$at','n']};});
    $$formData.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:FormData,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.xmlhttprequest','FormData','$at','native']};}};
    /*Begin dynamic block*/
    $$formData.$native=n$974;/*End dynamic block*/
    return $$formData;
}
FormData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:FormDataAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','FormData']};};
exports.FormData=FormData;
function $init$FormData(){
    if (FormData.$$===undefined){
        $$$cl1.initTypeProto(FormData,'ceylon.js.xmlhttprequest::FormData',$init$FormDataAbs());
    }
    return FormData;
}
exports.$init$FormData=$init$FormData;
$init$FormData();
exports.$mod$ans$=[];
exports.$pkg$ans$ceylon$js$xmlhttprequest=function(){return[$$$cl1.shared()];};
var $$$cjd975=require('ceylon/js/dom/4.0.0/ceylon.js.dom-4.0.0');
$$$cl1.$addmod$($$$cjd975,'ceylon.js.dom/4.0.0');
var $$$cjj659=require('ceylon/js/json/1.0.0/ceylon.js.json-1.0.0');
$$$cl1.$addmod$($$$cjj659,'ceylon.js.json/1.0.0');
function XMLHttpRequestResponseType(name$976, $$xMLHttpRequestResponseType){
    $init$XMLHttpRequestResponseType();
    if ($$xMLHttpRequestResponseType===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$xMLHttpRequestResponseType.name$976_=name$976;
    $$$cl1.defineAttr($$xMLHttpRequestResponseType,'name$976',function(){return this.name$976_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:XMLHttpRequestResponseType,d:['ceylon.js.xmlhttprequest','XMLHttpRequestResponseType','$at','name']};});
    return $$xMLHttpRequestResponseType;
}
XMLHttpRequestResponseType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestResponseType']};};
exports.XMLHttpRequestResponseType=XMLHttpRequestResponseType;
function $init$XMLHttpRequestResponseType(){
    if (XMLHttpRequestResponseType.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestResponseType,'ceylon.js.xmlhttprequest::XMLHttpRequestResponseType',$$$cl1.Basic);
    }
    return XMLHttpRequestResponseType;
}
exports.$init$XMLHttpRequestResponseType=$init$XMLHttpRequestResponseType;
$init$XMLHttpRequestResponseType();
function blank$977(){
    var $$blank=new blank$977.$$;
    XMLHttpRequestResponseType($$$cl1.String("",0),$$blank);
    return $$blank;
}
function $init$blank$977(){
    if (blank$977.$$===undefined){
        $$$cl1.initTypeProto(blank$977,'ceylon.js.xmlhttprequest::blank',$init$XMLHttpRequestResponseType());
    }
    return blank$977;
}
exports.$init$blank$977=$init$blank$977;
$init$blank$977();
var blank$978;
function getBlank(){
    if (blank$978===undefined)blank$978=$init$blank$977()();
    return blank$978;
}
exports.getBlank=getBlank;
getBlank.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:blank$977},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','blank']};};
$prop$getBlank={get:getBlank,$$metamodel$$:getBlank.$$metamodel$$};
exports.$prop$getBlank=$prop$getBlank;
function arraybuffer$979(){
    var $$arraybuffer=new arraybuffer$979.$$;
    XMLHttpRequestResponseType($$$cl1.String("arraybuffer",11),$$arraybuffer);
    return $$arraybuffer;
}
function $init$arraybuffer$979(){
    if (arraybuffer$979.$$===undefined){
        $$$cl1.initTypeProto(arraybuffer$979,'ceylon.js.xmlhttprequest::arraybuffer',$init$XMLHttpRequestResponseType());
    }
    return arraybuffer$979;
}
exports.$init$arraybuffer$979=$init$arraybuffer$979;
$init$arraybuffer$979();
var arraybuffer$980;
function getArraybuffer(){
    if (arraybuffer$980===undefined)arraybuffer$980=$init$arraybuffer$979()();
    return arraybuffer$980;
}
exports.getArraybuffer=getArraybuffer;
getArraybuffer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:arraybuffer$979},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','arraybuffer']};};
$prop$getArraybuffer={get:getArraybuffer,$$metamodel$$:getArraybuffer.$$metamodel$$};
exports.$prop$getArraybuffer=$prop$getArraybuffer;
function blob$981(){
    var $$blob=new blob$981.$$;
    XMLHttpRequestResponseType($$$cl1.String("blob",4),$$blob);
    return $$blob;
}
function $init$blob$981(){
    if (blob$981.$$===undefined){
        $$$cl1.initTypeProto(blob$981,'ceylon.js.xmlhttprequest::blob',$init$XMLHttpRequestResponseType());
    }
    return blob$981;
}
exports.$init$blob$981=$init$blob$981;
$init$blob$981();
var blob$982;
function getBlob(){
    if (blob$982===undefined)blob$982=$init$blob$981()();
    return blob$982;
}
exports.getBlob=getBlob;
getBlob.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:blob$981},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','blob']};};
$prop$getBlob={get:getBlob,$$metamodel$$:getBlob.$$metamodel$$};
exports.$prop$getBlob=$prop$getBlob;
function document$983(){
    var $$document=new document$983.$$;
    XMLHttpRequestResponseType($$$cl1.String("document",8),$$document);
    return $$document;
}
function $init$document$983(){
    if (document$983.$$===undefined){
        $$$cl1.initTypeProto(document$983,'ceylon.js.xmlhttprequest::document',$init$XMLHttpRequestResponseType());
    }
    return document$983;
}
exports.$init$document$983=$init$document$983;
$init$document$983();
var document$984;
function getDocument(){
    if (document$984===undefined)document$984=$init$document$983()();
    return document$984;
}
exports.getDocument=getDocument;
getDocument.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:document$983},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','document']};};
$prop$getDocument={get:getDocument,$$metamodel$$:getDocument.$$metamodel$$};
exports.$prop$getDocument=$prop$getDocument;
function json$985(){
    var $$json=new json$985.$$;
    XMLHttpRequestResponseType($$$cl1.String("json",4),$$json);
    return $$json;
}
function $init$json$985(){
    if (json$985.$$===undefined){
        $$$cl1.initTypeProto(json$985,'ceylon.js.xmlhttprequest::json',$init$XMLHttpRequestResponseType());
    }
    return json$985;
}
exports.$init$json$985=$init$json$985;
$init$json$985();
var json$986;
function getJson(){
    if (json$986===undefined)json$986=$init$json$985()();
    return json$986;
}
exports.getJson=getJson;
getJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:json$985},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','json']};};
$prop$getJson={get:getJson,$$metamodel$$:getJson.$$metamodel$$};
exports.$prop$getJson=$prop$getJson;
function text$987(){
    var $$text=new text$987.$$;
    XMLHttpRequestResponseType($$$cl1.String("text",4),$$text);
    return $$text;
}
function $init$text$987(){
    if (text$987.$$===undefined){
        $$$cl1.initTypeProto(text$987,'ceylon.js.xmlhttprequest::text',$init$XMLHttpRequestResponseType());
    }
    return text$987;
}
exports.$init$text$987=$init$text$987;
$init$text$987();
var text$988;
function getText(){
    if (text$988===undefined)text$988=$init$text$987()();
    return text$988;
}
exports.getText=getText;
getText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:text$987},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','text']};};
$prop$getText={get:getText,$$metamodel$$:getText.$$metamodel$$};
exports.$prop$getText=$prop$getText;
function ReadyState(num$989, $$readyState){
    $init$ReadyState();
    if ($$readyState===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$readyState.num$989_=num$989;
    $$$cl1.defineAttr($$readyState,'num$989',function(){return this.num$989_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadyState,d:['ceylon.js.xmlhttprequest','ReadyState','$at','num']};});
    return $$readyState;
}
ReadyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.xmlhttprequest','ReadyState']};};
exports.ReadyState=ReadyState;
function $init$ReadyState(){
    if (ReadyState.$$===undefined){
        $$$cl1.initTypeProto(ReadyState,'ceylon.js.xmlhttprequest::ReadyState',$$$cl1.Basic);
    }
    return ReadyState;
}
exports.$init$ReadyState=$init$ReadyState;
$init$ReadyState();
function readyStateUnsent$990(){
    var $$readyStateUnsent=new readyStateUnsent$990.$$;
    ReadyState((0),$$readyStateUnsent);
    return $$readyStateUnsent;
}
function $init$readyStateUnsent$990(){
    if (readyStateUnsent$990.$$===undefined){
        $$$cl1.initTypeProto(readyStateUnsent$990,'ceylon.js.xmlhttprequest::readyStateUnsent',$init$ReadyState());
    }
    return readyStateUnsent$990;
}
exports.$init$readyStateUnsent$990=$init$readyStateUnsent$990;
$init$readyStateUnsent$990();
var readyStateUnsent$991;
function getReadyStateUnsent(){
    if (readyStateUnsent$991===undefined)readyStateUnsent$991=$init$readyStateUnsent$990()();
    return readyStateUnsent$991;
}
exports.getReadyStateUnsent=getReadyStateUnsent;
getReadyStateUnsent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateUnsent$990},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','readyStateUnsent']};};
$prop$getReadyStateUnsent={get:getReadyStateUnsent,$$metamodel$$:getReadyStateUnsent.$$metamodel$$};
exports.$prop$getReadyStateUnsent=$prop$getReadyStateUnsent;
function readyStateOpened$992(){
    var $$readyStateOpened=new readyStateOpened$992.$$;
    ReadyState((1),$$readyStateOpened);
    return $$readyStateOpened;
}
function $init$readyStateOpened$992(){
    if (readyStateOpened$992.$$===undefined){
        $$$cl1.initTypeProto(readyStateOpened$992,'ceylon.js.xmlhttprequest::readyStateOpened',$init$ReadyState());
    }
    return readyStateOpened$992;
}
exports.$init$readyStateOpened$992=$init$readyStateOpened$992;
$init$readyStateOpened$992();
var readyStateOpened$993;
function getReadyStateOpened(){
    if (readyStateOpened$993===undefined)readyStateOpened$993=$init$readyStateOpened$992()();
    return readyStateOpened$993;
}
exports.getReadyStateOpened=getReadyStateOpened;
getReadyStateOpened.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateOpened$992},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','readyStateOpened']};};
$prop$getReadyStateOpened={get:getReadyStateOpened,$$metamodel$$:getReadyStateOpened.$$metamodel$$};
exports.$prop$getReadyStateOpened=$prop$getReadyStateOpened;
function readyStateHeadersReceived$994(){
    var $$readyStateHeadersReceived=new readyStateHeadersReceived$994.$$;
    ReadyState((2),$$readyStateHeadersReceived);
    return $$readyStateHeadersReceived;
}
function $init$readyStateHeadersReceived$994(){
    if (readyStateHeadersReceived$994.$$===undefined){
        $$$cl1.initTypeProto(readyStateHeadersReceived$994,'ceylon.js.xmlhttprequest::readyStateHeadersReceived',$init$ReadyState());
    }
    return readyStateHeadersReceived$994;
}
exports.$init$readyStateHeadersReceived$994=$init$readyStateHeadersReceived$994;
$init$readyStateHeadersReceived$994();
var readyStateHeadersReceived$995;
function getReadyStateHeadersReceived(){
    if (readyStateHeadersReceived$995===undefined)readyStateHeadersReceived$995=$init$readyStateHeadersReceived$994()();
    return readyStateHeadersReceived$995;
}
exports.getReadyStateHeadersReceived=getReadyStateHeadersReceived;
getReadyStateHeadersReceived.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateHeadersReceived$994},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','readyStateHeadersReceived']};};
$prop$getReadyStateHeadersReceived={get:getReadyStateHeadersReceived,$$metamodel$$:getReadyStateHeadersReceived.$$metamodel$$};
exports.$prop$getReadyStateHeadersReceived=$prop$getReadyStateHeadersReceived;
function readyStateLoading$996(){
    var $$readyStateLoading=new readyStateLoading$996.$$;
    ReadyState((3),$$readyStateLoading);
    return $$readyStateLoading;
}
function $init$readyStateLoading$996(){
    if (readyStateLoading$996.$$===undefined){
        $$$cl1.initTypeProto(readyStateLoading$996,'ceylon.js.xmlhttprequest::readyStateLoading',$init$ReadyState());
    }
    return readyStateLoading$996;
}
exports.$init$readyStateLoading$996=$init$readyStateLoading$996;
$init$readyStateLoading$996();
var readyStateLoading$997;
function getReadyStateLoading(){
    if (readyStateLoading$997===undefined)readyStateLoading$997=$init$readyStateLoading$996()();
    return readyStateLoading$997;
}
exports.getReadyStateLoading=getReadyStateLoading;
getReadyStateLoading.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateLoading$996},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','readyStateLoading']};};
$prop$getReadyStateLoading={get:getReadyStateLoading,$$metamodel$$:getReadyStateLoading.$$metamodel$$};
exports.$prop$getReadyStateLoading=$prop$getReadyStateLoading;
function readyStateDone$998(){
    var $$readyStateDone=new readyStateDone$998.$$;
    ReadyState((4),$$readyStateDone);
    return $$readyStateDone;
}
function $init$readyStateDone$998(){
    if (readyStateDone$998.$$===undefined){
        $$$cl1.initTypeProto(readyStateDone$998,'ceylon.js.xmlhttprequest::readyStateDone',$init$ReadyState());
    }
    return readyStateDone$998;
}
exports.$init$readyStateDone$998=$init$readyStateDone$998;
$init$readyStateDone$998();
var readyStateDone$999;
function getReadyStateDone(){
    if (readyStateDone$999===undefined)readyStateDone$999=$init$readyStateDone$998()();
    return readyStateDone$999;
}
exports.getReadyStateDone=getReadyStateDone;
getReadyStateDone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateDone$998},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','readyStateDone']};};
$prop$getReadyStateDone={get:getReadyStateDone,$$metamodel$$:getReadyStateDone.$$metamodel$$};
exports.$prop$getReadyStateDone=$prop$getReadyStateDone;
function XMLHttpRequestOptions(anon, $$xMLHttpRequestOptions){
    $init$XMLHttpRequestOptions();
    if ($$xMLHttpRequestOptions===undefined)$$xMLHttpRequestOptions=new XMLHttpRequestOptions.$$;
    if(anon===undefined){anon=false;}
    $$xMLHttpRequestOptions.anon_=anon;
    $$$cl1.defineAttr($$xMLHttpRequestOptions,'anon',function(){return this.anon_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:XMLHttpRequestOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestOptions','$at','anon']};});
    function toJson(){
        var json$1000=(values$1001=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("anon",4),$$xMLHttpRequestOptions.anon,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}}}}),$$$cjj659.JSON(values$1001));
        var values$1001;
        return json$1000.toJson();
    }
    $$xMLHttpRequestOptions.toJson=toJson;
    toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj659.JSJSON},$ps:[],$cont:XMLHttpRequestOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestOptions','$m','toJson']};};
    return $$xMLHttpRequestOptions;
}
XMLHttpRequestOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestOptions']};};
exports.XMLHttpRequestOptions=XMLHttpRequestOptions;
function $init$XMLHttpRequestOptions(){
    if (XMLHttpRequestOptions.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestOptions,'ceylon.js.xmlhttprequest::XMLHttpRequestOptions',$$$cl1.Basic);
    }
    return XMLHttpRequestOptions;
}
exports.$init$XMLHttpRequestOptions=$init$XMLHttpRequestOptions;
$init$XMLHttpRequestOptions();
function createXMLHttpRequest(options$1002){
    if(options$1002===undefined){options$1002=null;}
    var o$1003;
    if((o$1003=options$1002)!==null){
        /*Begin dynamic block*/
        return XMLHttpRequest((typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'34:25-34:38','xmlhttprequest.ceylon'):XMLHttpRequest)(/*NULL PARAM!*/$$$cl1.$JsCallable((opt$1004=o$1003,$$$cl1.JsCallable(opt$1004,opt$1004!==null?opt$1004.toJson:null)),[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cjj659.JSJSON}})));
        /*End dynamic block*/
        var opt$1004;
    }else {
        /*Begin dynamic block*/
        return XMLHttpRequest((typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'38:25-38:38','xmlhttprequest.ceylon'):XMLHttpRequest)());
        /*End dynamic block*/
    }
}
exports.createXMLHttpRequest=createXMLHttpRequest;
createXMLHttpRequest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:XMLHttpRequest},$ps:[{$nm:'options',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:XMLHttpRequestOptions}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','createXMLHttpRequest']};};
function XMLHttpRequestAbs($$xMLHttpRequestAbs){
    $init$XMLHttpRequestAbs();
    if ($$xMLHttpRequestAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl359.JSObjectAbs($$xMLHttpRequestAbs);
    function getOnreadystatechange(){
        /*Begin dynamic block*/
        return (tmpvar$1005=$$xMLHttpRequestAbs.$native.onreadystatechange,$$$cl1.isOfType(tmpvar$1005,{t:$$$cl1.Anything})?tmpvar$1005:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'48:10-48:34','xmlhttprequest.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.getOnreadystatechange=getOnreadystatechange;
    getOnreadystatechange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event)",40)),$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getOnreadystatechange']};};
    function setOnreadystatechange(handler$1006){
        /*Begin dynamic block*/
        $$xMLHttpRequestAbs.$native.onreadystatechange=$$$cl1.$JsCallable(handler$1006/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.setOnreadystatechange=setOnreadystatechange;
    setOnreadystatechange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setOnreadystatechange']};};
    function readyState(){
        /*Begin dynamic block*/
        var readyState$1007=$$xMLHttpRequestAbs.$native.readyState;
        $prop$getReadyState$1007={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','readyState','$at','readyState']};}};
        $prop$getReadyState$1007.get=function(){return readyState$1007};
        if((tmpvar$1008=readyState$1007,tmpvar$1009=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'61:21-61:34','xmlhttprequest.ceylon'):XMLHttpRequest).UNSENT,(tmpvar$1008.equals&&tmpvar$1008.equals(tmpvar$1009))||tmpvar$1008===tmpvar$1009)){
            return getReadyStateUnsent();
        }else {
            if((tmpvar$1010=readyState$1007,tmpvar$1011=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'63:28-63:41','xmlhttprequest.ceylon'):XMLHttpRequest).OPENED,(tmpvar$1010.equals&&tmpvar$1010.equals(tmpvar$1011))||tmpvar$1010===tmpvar$1011)){
                return getReadyStateOpened();
            }else {
                if((tmpvar$1012=readyState$1007,tmpvar$1013=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'65:28-65:41','xmlhttprequest.ceylon'):XMLHttpRequest).HEADERS_RECEIVED,(tmpvar$1012.equals&&tmpvar$1012.equals(tmpvar$1013))||tmpvar$1012===tmpvar$1013)){
                    return getReadyStateHeadersReceived();
                }else {
                    if((tmpvar$1014=readyState$1007,tmpvar$1015=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'67:28-67:41','xmlhttprequest.ceylon'):XMLHttpRequest).LOADING,(tmpvar$1014.equals&&tmpvar$1014.equals(tmpvar$1015))||tmpvar$1014===tmpvar$1015)){
                        return getReadyStateLoading();
                    }else {
                        return getReadyStateDone();
                    }
                }
            }
        }/*End dynamic block*/
    }
    $$xMLHttpRequestAbs.readyState=readyState;
    readyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ReadyState},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','readyState']};};
    $$xMLHttpRequestAbs.open$defs$async=function(method$1016,url$1017,async$1018,user$1019,password$1020){return true;};
    $$xMLHttpRequestAbs.open$defs$user=function(method$1016,url$1017,async$1018,user$1019,password$1020){return null;};
    $$xMLHttpRequestAbs.open$defs$password=function(method$1016,url$1017,async$1018,user$1019,password$1020){return null;};
    function open(method$1016,url$1017,async$1018,user$1019,password$1020){
        if(async$1018===undefined){async$1018=$$xMLHttpRequestAbs.open$defs$async(method$1016,url$1017,async$1018,user$1019,password$1020);}
        if(user$1019===undefined){user$1019=$$xMLHttpRequestAbs.open$defs$user(method$1016,url$1017,async$1018,user$1019,password$1020);}
        if(password$1020===undefined){password$1020=$$xMLHttpRequestAbs.open$defs$password(method$1016,url$1017,async$1018,user$1019,password$1020);}
        
        var case$1021=method$1016;
        if ($$$cl1.isOfType(method$1016,{t:$$$cl1.String})) {
            
            var case$1022=url$1017;
            if ($$$cl1.isOfType(url$1017,{t:$$$cl1.String})) {
                
                var case$1023=user$1019;
                if ($$$cl1.isOfType(user$1019,{t:$$$cl1.String})) {
                    
                    var case$1024=password$1020;
                    if ($$$cl1.isOfType(password$1020,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.valueOf()/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1023.valueOf()/*NULL PARAM!*/,case$1024.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cjl359.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.valueOf()/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1023.valueOf()/*NULL PARAM!*/,case$1024.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.valueOf()/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1023.valueOf());
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(user$1019,{t:$$$cjl359.JSString})) {
                    
                    var case$1025=password$1020;
                    if ($$$cl1.isOfType(password$1020,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.valueOf()/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1023.$native/*NULL PARAM!*/,case$1025.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cjl359.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.valueOf()/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1023.$native/*NULL PARAM!*/,case$1025.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.valueOf()/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1023.$native);
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(user$1019,{t:$$$cl1.Null})) {
                    
                    var case$1026=password$1020;
                    if ($$$cl1.isOfType(password$1020,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.valueOf()/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1026.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cjl359.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.valueOf()/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1026.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.valueOf()/*NULL PARAM!*/,async$1018);
                        /*End dynamic block*/
                    }
                }
            }else if ($$$cl1.isOfType(url$1017,{t:$$$cjl359.JSString})) {
                
                var case$1027=user$1019;
                if ($$$cl1.isOfType(user$1019,{t:$$$cl1.String})) {
                    
                    var case$1028=password$1020;
                    if ($$$cl1.isOfType(password$1020,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.$native/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1027.valueOf()/*NULL PARAM!*/,case$1028.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cjl359.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.$native/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1027.valueOf()/*NULL PARAM!*/,case$1028.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.$native/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1027.valueOf());
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(user$1019,{t:$$$cjl359.JSString})) {
                    
                    var case$1029=password$1020;
                    if ($$$cl1.isOfType(password$1020,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.$native/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1027.$native/*NULL PARAM!*/,case$1029.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cjl359.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.$native/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1027.$native/*NULL PARAM!*/,case$1029.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.$native/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1027.$native);
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(user$1019,{t:$$$cl1.Null})) {
                    
                    var case$1030=password$1020;
                    if ($$$cl1.isOfType(password$1020,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.$native/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1030.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cjl359.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.$native/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1030.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.valueOf()/*NULL PARAM!*/,case$1022.$native/*NULL PARAM!*/,async$1018);
                        /*End dynamic block*/
                    }
                }
            }
        }else if ($$$cl1.isOfType(method$1016,{t:$$$cjl359.JSString})) {
            
            var case$1031=url$1017;
            if ($$$cl1.isOfType(url$1017,{t:$$$cl1.String})) {
                
                var case$1032=user$1019;
                if ($$$cl1.isOfType(user$1019,{t:$$$cl1.String})) {
                    
                    var case$1033=password$1020;
                    if ($$$cl1.isOfType(password$1020,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.valueOf()/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1032.valueOf()/*NULL PARAM!*/,case$1033.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cjl359.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.valueOf()/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1032.valueOf()/*NULL PARAM!*/,case$1033.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.valueOf()/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1032.valueOf());
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(user$1019,{t:$$$cjl359.JSString})) {
                    
                    var case$1034=password$1020;
                    if ($$$cl1.isOfType(password$1020,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.valueOf()/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1032.$native/*NULL PARAM!*/,case$1034.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cjl359.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.valueOf()/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1032.$native/*NULL PARAM!*/,case$1034.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.valueOf()/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1032.$native);
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(user$1019,{t:$$$cl1.Null})) {
                    
                    var case$1035=password$1020;
                    if ($$$cl1.isOfType(password$1020,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.valueOf()/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1035.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cjl359.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.valueOf()/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1035.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.valueOf()/*NULL PARAM!*/,async$1018);
                        /*End dynamic block*/
                    }
                }
            }else if ($$$cl1.isOfType(url$1017,{t:$$$cjl359.JSString})) {
                
                var case$1036=user$1019;
                if ($$$cl1.isOfType(user$1019,{t:$$$cl1.String})) {
                    
                    var case$1037=password$1020;
                    if ($$$cl1.isOfType(password$1020,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.$native/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1036.valueOf()/*NULL PARAM!*/,case$1037.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cjl359.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.$native/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1036.valueOf()/*NULL PARAM!*/,case$1037.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.$native/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1036.valueOf());
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(user$1019,{t:$$$cjl359.JSString})) {
                    
                    var case$1038=password$1020;
                    if ($$$cl1.isOfType(password$1020,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.$native/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1036.$native/*NULL PARAM!*/,case$1038.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cjl359.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.$native/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1036.$native/*NULL PARAM!*/,case$1038.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.$native/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,case$1036.$native);
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(user$1019,{t:$$$cl1.Null})) {
                    
                    var case$1039=password$1020;
                    if ($$$cl1.isOfType(password$1020,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.$native/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1039.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cjl359.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.$native/*NULL PARAM!*/,async$1018/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1039.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1020,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1021.$native/*NULL PARAM!*/,case$1031.$native/*NULL PARAM!*/,async$1018);
                        /*End dynamic block*/
                    }
                }
            }
        }
    }
    $$xMLHttpRequestAbs.open=open;
    open.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'method',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'url',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'async',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'user',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]}]},$an:function(){return[];}},{$nm:'password',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','open']};};
    function setRequestHeader(header$1040,val$1041){
        
        var case$1042=header$1040;
        if ($$$cl1.isOfType(header$1040,{t:$$$cl1.String})) {
            
            var case$1043=val$1041;
            if ($$$cl1.isOfType(val$1041,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$xMLHttpRequestAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1042.valueOf()/*NULL PARAM!*/,case$1043.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$1041,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                $$xMLHttpRequestAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1042.valueOf()/*NULL PARAM!*/,case$1043.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(header$1040,{t:$$$cjl359.JSString})) {
            
            var case$1044=val$1041;
            if ($$$cl1.isOfType(val$1041,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$xMLHttpRequestAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1042.$native/*NULL PARAM!*/,case$1044.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$1041,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                $$xMLHttpRequestAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1042.$native/*NULL PARAM!*/,case$1044.$native);
                /*End dynamic block*/
            }
        }
    }
    $$xMLHttpRequestAbs.setRequestHeader=setRequestHeader;
    setRequestHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'header',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setRequestHeader']};};
    function getTimeout(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$xMLHttpRequestAbs.$native.timeout);
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.getTimeout=getTimeout;
    getTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getTimeout']};};
    function setTimeout(timeout$1045){
        
        var case$1046=timeout$1045;
        if ($$$cl1.isOfType(timeout$1045,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.timeout=case$1046;
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(timeout$1045,{t:$$$cjl359.JSNumber})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.timeout=case$1046.$native;
            /*End dynamic block*/
        }
    }
    $$xMLHttpRequestAbs.setTimeout=setTimeout;
    setTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'timeout',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setTimeout']};};
    function getWithCredentials(){
        /*Begin dynamic block*/
        if($$xMLHttpRequestAbs.$native.withCredentials){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$xMLHttpRequestAbs.getWithCredentials=getWithCredentials;
    getWithCredentials.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getWithCredentials']};};
    function setWithCredentials(credentials$1047){
        /*Begin dynamic block*/
        $$xMLHttpRequestAbs.$native.withCredentials=credentials$1047;
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.setWithCredentials=setWithCredentials;
    setWithCredentials.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'credentials',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setWithCredentials']};};
    function upload(){
        /*Begin dynamic block*/
        return XMLHttpRequestUpload($$xMLHttpRequestAbs.$native.upload);
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.upload=upload;
    upload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:XMLHttpRequestUpload},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','upload']};};
    $$xMLHttpRequestAbs.send$defs$data=function(data$1048){return null;};
    function send(data$1048){
        if(data$1048===undefined){data$1048=$$xMLHttpRequestAbs.send$defs$data(data$1048);}
        
        var case$1049=data$1048;
        if ($$$cl1.isOfType(data$1048,{t:$$$cjf961.Blob})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.send(/*NULL PARAM!*/case$1049.$native);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$1048,{t:$$$cjd975.Document})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.send(/*NULL PARAM!*/case$1049.$native);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$1048,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.send(/*NULL PARAM!*/case$1049.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$1048,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.send(/*NULL PARAM!*/case$1049.$native);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$1048,{t:FormData})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.send(/*NULL PARAM!*/case$1049.$native);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$1048,{t:$$$cl1.Null})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.send();
            /*End dynamic block*/
        }
    }
    $$xMLHttpRequestAbs.send=send;
    send.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cjf961.Blob},{t:$$$cjd975.Document},{t:$$$cl1.String},{t:$$$cjl359.JSString},{ t:'u', l:[{t:$$$cl1.Null},{t:FormData}]}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','send']};};
    function abort(){
        /*Begin dynamic block*/
        $$xMLHttpRequestAbs.$native.abort();
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.abort=abort;
    abort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','abort']};};
    function status(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$xMLHttpRequestAbs.$native.status);
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.status=status;
    status.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','status']};};
    function statusText(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$xMLHttpRequestAbs.$native.statusText);
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.statusText=statusText;
    statusText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','statusText']};};
    function getResponseHeader(header$1050){
        /*Begin dynamic block*/
        var rheader$1051;
        $prop$getRheader$1051={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getResponseHeader','$at','rheader']};}};
        $prop$getRheader$1051.get=function(){return rheader$1051};
        
        var case$1052=header$1050;
        if ($$$cl1.isOfType(header$1050,{t:$$$cl1.String})) {
            rheader$1051=$$xMLHttpRequestAbs.$native.getResponseHeader(/*NULL PARAM!*/case$1052.valueOf());
        }else if ($$$cl1.isOfType(header$1050,{t:$$$cjl359.JSString})) {
            rheader$1051=$$xMLHttpRequestAbs.$native.getResponseHeader(/*NULL PARAM!*/case$1052.$native);
        }if((tmpvar$1053=rheader$1051,tmpvar$1054=null,(tmpvar$1053.equals&&!tmpvar$1053.equals(tmpvar$1054))||tmpvar$1053!==tmpvar$1054)){
            return $$$cjl359.JSString(rheader$1051);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$xMLHttpRequestAbs.getResponseHeader=getResponseHeader;
    getResponseHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[{$nm:'header',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getResponseHeader']};};
    function getAllResponseHeaders(){
        /*Begin dynamic block*/
        var rheaders$1055=$$xMLHttpRequestAbs.$native.getAllResponseHeaders();
        $prop$getRheaders$1055={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getAllResponseHeaders','$at','rheaders']};}};
        $prop$getRheaders$1055.get=function(){return rheaders$1055};
        if((tmpvar$1056=rheaders$1055,tmpvar$1057=null,(tmpvar$1056.equals&&!tmpvar$1056.equals(tmpvar$1057))||tmpvar$1056!==tmpvar$1057)){
            return $$$cjl359.JSString(rheaders$1055);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$xMLHttpRequestAbs.getAllResponseHeaders=getAllResponseHeaders;
    getAllResponseHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getAllResponseHeaders']};};
    function overrideMimeType(mime$1058){
        
        var case$1059=mime$1058;
        if ($$$cl1.isOfType(mime$1058,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.overrideMimeType(/*NULL PARAM!*/case$1059.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(mime$1058,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.overrideMimeType(/*NULL PARAM!*/case$1059.$native);
            /*End dynamic block*/
        }
    }
    $$xMLHttpRequestAbs.overrideMimeType=overrideMimeType;
    overrideMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'mime',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','overrideMimeType']};};
    function getResponseType(){
        /*Begin dynamic block*/
        if((tmpvar$1060=$$xMLHttpRequestAbs.$native.responseType,tmpvar$1061=$$$cl1.String("",0),(tmpvar$1060.equals&&tmpvar$1060.equals(tmpvar$1061))||tmpvar$1060===tmpvar$1061)){
            return getBlank();
        }else {
            if((tmpvar$1062=$$xMLHttpRequestAbs.$native.responseType,tmpvar$1063=$$$cl1.String("arraybuffer",11),(tmpvar$1062.equals&&tmpvar$1062.equals(tmpvar$1063))||tmpvar$1062===tmpvar$1063)){
                return getArraybuffer();
            }else {
                if((tmpvar$1064=$$xMLHttpRequestAbs.$native.responseType,tmpvar$1065=$$$cl1.String("blob",4),(tmpvar$1064.equals&&tmpvar$1064.equals(tmpvar$1065))||tmpvar$1064===tmpvar$1065)){
                    return getBlob();
                }else {
                    if((tmpvar$1066=$$xMLHttpRequestAbs.$native.responseType,tmpvar$1067=$$$cl1.String("document",8),(tmpvar$1066.equals&&tmpvar$1066.equals(tmpvar$1067))||tmpvar$1066===tmpvar$1067)){
                        return getDocument();
                    }else {
                        if((tmpvar$1068=$$xMLHttpRequestAbs.$native.responseType,tmpvar$1069=$$$cl1.String("json",4),(tmpvar$1068.equals&&tmpvar$1068.equals(tmpvar$1069))||tmpvar$1068===tmpvar$1069)){
                            return getJson();
                        }else {
                            return getText();
                        }
                    }
                }
            }
        }/*End dynamic block*/
    }
    $$xMLHttpRequestAbs.getResponseType=getResponseType;
    getResponseType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:XMLHttpRequestResponseType},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getResponseType']};};
    function setResponseType(responseType$1070){
        /*Begin dynamic block*/
        $$xMLHttpRequestAbs.$native.responseType=responseType$1070.string.valueOf();
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.setResponseType=setResponseType;
    setResponseType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'responseType',$mt:'prm',$t:{t:XMLHttpRequestResponseType},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setResponseType']};};
    function response(){
        /*Begin dynamic block*/
        return (tmpvar$1071=$$xMLHttpRequestAbs.$native.response,$$$cl1.isOfType(tmpvar$1071,{t:$$$cl1.Anything})?tmpvar$1071:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'506:10-506:24','xmlhttprequest.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.response=response;
    response.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','response']};};
    function responseText(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$xMLHttpRequestAbs.$native.responseText);
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.responseText=responseText;
    responseText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','responseText']};};
    function responseXML(){
        /*Begin dynamic block*/
        var responseXML$1072=$$xMLHttpRequestAbs.$native.responseXML;
        $prop$getResponseXML$1072={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','responseXML','$at','responseXML']};}};
        $prop$getResponseXML$1072.get=function(){return responseXML$1072};
        if((tmpvar$1073=responseXML$1072,tmpvar$1074=null,(tmpvar$1073.equals&&!tmpvar$1073.equals(tmpvar$1074))||tmpvar$1073!==tmpvar$1074)){
            return $$$cjd975.Document(responseXML$1072);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$xMLHttpRequestAbs.responseXML=responseXML;
    responseXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd975.Document}]},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','responseXML']};};
    return $$xMLHttpRequestAbs;
}
XMLHttpRequestAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs']};};
exports.XMLHttpRequestAbs=XMLHttpRequestAbs;
function $init$XMLHttpRequestAbs(){
    if (XMLHttpRequestAbs.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestAbs,'ceylon.js.xmlhttprequest::XMLHttpRequestAbs',$$$cjl359.JSObjectAbs);
    }
    return XMLHttpRequestAbs;
}
exports.$init$XMLHttpRequestAbs=$init$XMLHttpRequestAbs;
$init$XMLHttpRequestAbs();
function XMLHttpRequest(n$1075, $$xMLHttpRequest){
    $init$XMLHttpRequest();
    if ($$xMLHttpRequest===undefined)$$xMLHttpRequest=new XMLHttpRequest.$$;
    $$xMLHttpRequest.n$1075_=n$1075;
    XMLHttpRequestAbs($$xMLHttpRequest);
    $$$cl1.defineAttr($$xMLHttpRequest,'n$1075',function(){return this.n$1075_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:XMLHttpRequest,d:['ceylon.js.xmlhttprequest','XMLHttpRequest','$at','n']};});
    $$xMLHttpRequest.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:XMLHttpRequest,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequest','$at','native']};}};
    /*Begin dynamic block*/
    $$xMLHttpRequest.$native=n$1075;/*End dynamic block*/
    return $$xMLHttpRequest;
}
XMLHttpRequest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequest']};};
exports.XMLHttpRequest=XMLHttpRequest;
function $init$XMLHttpRequest(){
    if (XMLHttpRequest.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequest,'ceylon.js.xmlhttprequest::XMLHttpRequest',$init$XMLHttpRequestAbs());
    }
    return XMLHttpRequest;
}
exports.$init$XMLHttpRequest=$init$XMLHttpRequest;
$init$XMLHttpRequest();
function XMLHttpRequestEventTargetAbs($$xMLHttpRequestEventTargetAbs){
    $init$XMLHttpRequestEventTargetAbs();
    if ($$xMLHttpRequestEventTargetAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjd975.EventTargetAbs($$xMLHttpRequestEventTargetAbs);
    function getOnloadstart(){
        /*Begin dynamic block*/
        return (tmpvar$1076=$$xMLHttpRequestEventTargetAbs.$native.onloadstart,$$$cl1.isOfType(tmpvar$1076,{t:$$$cl1.Anything})?tmpvar$1076:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'8:10-8:27','xmlhttprequestevent.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.getOnloadstart=getOnloadstart;
    getOnloadstart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event)",40)),$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnloadstart']};};
    function setOnloadstart(handler$1077){
        /*Begin dynamic block*/
        $$xMLHttpRequestEventTargetAbs.$native.onloadstart=$$$cl1.$JsCallable(handler$1077/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.setOnloadstart=setOnloadstart;
    setOnloadstart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnloadstart']};};
    function getOnprogress(){
        /*Begin dynamic block*/
        return (tmpvar$1078=$$xMLHttpRequestEventTargetAbs.$native.onprogress,$$$cl1.isOfType(tmpvar$1078,{t:$$$cl1.Anything})?tmpvar$1078:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'21:10-21:26','xmlhttprequestevent.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.getOnprogress=getOnprogress;
    getOnprogress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event)",40)),$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnprogress']};};
    function setOnprogress(handler$1079){
        /*Begin dynamic block*/
        $$xMLHttpRequestEventTargetAbs.$native.onprogress=$$$cl1.$JsCallable(handler$1079/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.setOnprogress=setOnprogress;
    setOnprogress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnprogress']};};
    function getOnabort(){
        /*Begin dynamic block*/
        return (tmpvar$1080=$$xMLHttpRequestEventTargetAbs.$native.onabort,$$$cl1.isOfType(tmpvar$1080,{t:$$$cl1.Anything})?tmpvar$1080:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'34:10-34:23','xmlhttprequestevent.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.getOnabort=getOnabort;
    getOnabort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event)",40)),$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnabort']};};
    function setOnabort(handler$1081){
        /*Begin dynamic block*/
        $$xMLHttpRequestEventTargetAbs.$native.onabort=$$$cl1.$JsCallable(handler$1081/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.setOnabort=setOnabort;
    setOnabort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnabort']};};
    function getOnerror(){
        /*Begin dynamic block*/
        return (tmpvar$1082=$$xMLHttpRequestEventTargetAbs.$native.onerror,$$$cl1.isOfType(tmpvar$1082,{t:$$$cl1.Anything})?tmpvar$1082:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'47:10-47:23','xmlhttprequestevent.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.getOnerror=getOnerror;
    getOnerror.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event)",40)),$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnerror']};};
    function setOnerror(handler$1083){
        /*Begin dynamic block*/
        $$xMLHttpRequestEventTargetAbs.$native.onerror=$$$cl1.$JsCallable(handler$1083/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.setOnerror=setOnerror;
    setOnerror.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnerror']};};
    function getOnload(){
        /*Begin dynamic block*/
        return (tmpvar$1084=$$xMLHttpRequestEventTargetAbs.$native.onload,$$$cl1.isOfType(tmpvar$1084,{t:$$$cl1.Anything})?tmpvar$1084:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'60:10-60:22','xmlhttprequestevent.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.getOnload=getOnload;
    getOnload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event)",40)),$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnload']};};
    function setOnload(handler$1085){
        /*Begin dynamic block*/
        $$xMLHttpRequestEventTargetAbs.$native.onload=$$$cl1.$JsCallable(handler$1085/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.setOnload=setOnload;
    setOnload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnload']};};
    function getOntimeout(){
        /*Begin dynamic block*/
        return (tmpvar$1086=$$xMLHttpRequestEventTargetAbs.$native.ontimeout,$$$cl1.isOfType(tmpvar$1086,{t:$$$cl1.Anything})?tmpvar$1086:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'73:10-73:25','xmlhttprequestevent.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.getOntimeout=getOntimeout;
    getOntimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event)",40)),$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOntimeout']};};
    function setOntimeout(handler$1087){
        /*Begin dynamic block*/
        $$xMLHttpRequestEventTargetAbs.$native.ontimeout=$$$cl1.$JsCallable(handler$1087/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.setOntimeout=setOntimeout;
    setOntimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOntimeout']};};
    function getOnloadend(){
        /*Begin dynamic block*/
        return (tmpvar$1088=$$xMLHttpRequestEventTargetAbs.$native.onloadend,$$$cl1.isOfType(tmpvar$1088,{t:$$$cl1.Anything})?tmpvar$1088:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'86:10-86:25','xmlhttprequestevent.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.getOnloadend=getOnloadend;
    getOnloadend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event)",40)),$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnloadend']};};
    function setOnloadend(handler$1089){
        /*Begin dynamic block*/
        $$xMLHttpRequestEventTargetAbs.$native.onloadend=$$$cl1.$JsCallable(handler$1089/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.setOnloadend=setOnloadend;
    setOnloadend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnloadend']};};
    return $$xMLHttpRequestEventTargetAbs;
}
XMLHttpRequestEventTargetAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjd975.EventTargetAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs']};};
exports.XMLHttpRequestEventTargetAbs=XMLHttpRequestEventTargetAbs;
function $init$XMLHttpRequestEventTargetAbs(){
    if (XMLHttpRequestEventTargetAbs.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestEventTargetAbs,'ceylon.js.xmlhttprequest::XMLHttpRequestEventTargetAbs',$$$cjd975.EventTargetAbs);
    }
    return XMLHttpRequestEventTargetAbs;
}
exports.$init$XMLHttpRequestEventTargetAbs=$init$XMLHttpRequestEventTargetAbs;
$init$XMLHttpRequestEventTargetAbs();
function XMLHttpRequestEventTarget(n$1090, $$xMLHttpRequestEventTarget){
    $init$XMLHttpRequestEventTarget();
    if ($$xMLHttpRequestEventTarget===undefined)$$xMLHttpRequestEventTarget=new XMLHttpRequestEventTarget.$$;
    $$xMLHttpRequestEventTarget.n$1090_=n$1090;
    XMLHttpRequestEventTargetAbs($$xMLHttpRequestEventTarget);
    $$$cl1.defineAttr($$xMLHttpRequestEventTarget,'n$1090',function(){return this.n$1090_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:XMLHttpRequestEventTarget,d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTarget','$at','n']};});
    $$xMLHttpRequestEventTarget.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:XMLHttpRequestEventTarget,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTarget','$at','native']};}};
    /*Begin dynamic block*/
    $$xMLHttpRequestEventTarget.$native=n$1090;/*End dynamic block*/
    return $$xMLHttpRequestEventTarget;
}
XMLHttpRequestEventTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestEventTargetAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTarget']};};
exports.XMLHttpRequestEventTarget=XMLHttpRequestEventTarget;
function $init$XMLHttpRequestEventTarget(){
    if (XMLHttpRequestEventTarget.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestEventTarget,'ceylon.js.xmlhttprequest::XMLHttpRequestEventTarget',$init$XMLHttpRequestEventTargetAbs());
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
XMLHttpRequestUploadAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestEventTargetAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestUploadAbs']};};
exports.XMLHttpRequestUploadAbs=XMLHttpRequestUploadAbs;
function $init$XMLHttpRequestUploadAbs(){
    if (XMLHttpRequestUploadAbs.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestUploadAbs,'ceylon.js.xmlhttprequest::XMLHttpRequestUploadAbs',$init$XMLHttpRequestEventTargetAbs());
    }
    return XMLHttpRequestUploadAbs;
}
exports.$init$XMLHttpRequestUploadAbs=$init$XMLHttpRequestUploadAbs;
$init$XMLHttpRequestUploadAbs();
function XMLHttpRequestUpload(n$1091, $$xMLHttpRequestUpload){
    $init$XMLHttpRequestUpload();
    if ($$xMLHttpRequestUpload===undefined)$$xMLHttpRequestUpload=new XMLHttpRequestUpload.$$;
    $$xMLHttpRequestUpload.n$1091_=n$1091;
    XMLHttpRequestUploadAbs($$xMLHttpRequestUpload);
    $$$cl1.defineAttr($$xMLHttpRequestUpload,'n$1091',function(){return this.n$1091_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:XMLHttpRequestUpload,d:['ceylon.js.xmlhttprequest','XMLHttpRequestUpload','$at','n']};});
    /*Begin dynamic block*/
    $$xMLHttpRequestUpload.$native=n$1091;/*End dynamic block*/
    return $$xMLHttpRequestUpload;
}
XMLHttpRequestUpload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestUploadAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestUpload']};};
exports.XMLHttpRequestUpload=XMLHttpRequestUpload;
function $init$XMLHttpRequestUpload(){
    if (XMLHttpRequestUpload.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestUpload,'ceylon.js.xmlhttprequest::XMLHttpRequestUpload',$init$XMLHttpRequestUploadAbs());
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
