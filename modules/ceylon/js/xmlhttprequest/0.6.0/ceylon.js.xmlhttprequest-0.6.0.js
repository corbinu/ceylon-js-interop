(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.js.language\/1.8.5","ceylon.js.file\/1.0.0","ceylon.js.dom\/4.0.0","ceylon.js.html\/5.0.0","ceylon.js.json\/1.0.0","ceylon.language\/0.6.1"],"$mod-name":"ceylon.js.xmlhttprequest","$mod-version":"0.6.0","ceylon.js.xmlhttprequest":{"arraybuffer":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"arraybuffer"},"readyStateHeadersReceived":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateHeadersReceived"},"XMLHttpRequestOptions":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"anon"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toJson":{"$t":{"$md":"ceylon.js.json","$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"}},"$at":{"anon":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"anon"}},"$nm":"XMLHttpRequestOptions"},"$pkg-shared":"1","document":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"document"},"XMLHttpRequest":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"XMLHttpRequest"},"XMLHttpRequestUpload":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestUploadAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"XMLHttpRequestUpload"},"json":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"json"},"createFormData":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"FormData"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.html","$pk":"ceylon.js.html","$nm":"HTMLFormElement"}]},"$mt":"prm","$def":"1","$nm":"form"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createFormData"},"XMLHttpRequestEventTarget":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestEventTargetAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"XMLHttpRequestEventTarget"},"readyStateUnsent":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateUnsent"},"ReadyState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.xmlhttprequest","$nm":"readyStateUnsent"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"readyStateOpened"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"readyStateHeadersReceived"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"readyStateLoading"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"readyStateDone"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"num"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"num":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"num"}},"$nm":"ReadyState"},"FormDataAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"append":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"append"},"appendBlob":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"$md":"ceylon.js.file","$pk":"ceylon.js.file","$nm":"Blob"},"$mt":"prm","$nm":"val"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"filename"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendBlob"}},"$nm":"FormDataAbs"},"text":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"text"},"blank":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"blank"},"readyStateLoading":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateLoading"},"readyStateOpened":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateOpened"},"FormData":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"FormDataAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"FormData"},"readyStateDone":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateDone"},"XMLHttpRequestEventTargetAbs":{"abstract":"1","super":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"EventTargetAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setOnprogress":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnprogress"},"getOnload":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnload"},"setOnloadend":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnloadend"},"getOnloadend":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnloadend"},"setOnloadstart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnloadstart"},"getOntimeout":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOntimeout"},"setOnerror":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnerror"},"setOntimeout":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOntimeout"},"getOnerror":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnerror"},"getOnloadstart":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnloadstart"},"getOnprogress":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnprogress"},"getOnabort":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnabort"},"setOnabort":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnabort"},"setOnload":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnload"}},"$nm":"XMLHttpRequestEventTargetAbs"},"XMLHttpRequestResponseType":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.xmlhttprequest","$nm":"blank"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"arraybuffer"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"blob"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"document"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"json"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"text"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"XMLHttpRequestResponseType"},"blob":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"blob"},"createXMLHttpRequest":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequest"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestOptions"}]},"$mt":"prm","$def":"1","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createXMLHttpRequest"},"XMLHttpRequestUploadAbs":{"abstract":"1","super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestEventTargetAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"XMLHttpRequestUploadAbs"},"XMLHttpRequestAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setResponseType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"prm","$nm":"responseType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setResponseType"},"getWithCredentials":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getWithCredentials"},"getAllResponseHeaders":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAllResponseHeaders"},"send":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.file","$pk":"ceylon.js.file","$nm":"Blob"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Document"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"FormData"}]}]},"$mt":"prm","$def":"1","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"send"},"responseXML":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Document"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"responseXML"},"status":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"status"},"getOnreadystatechange":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnreadystatechange"},"responseText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"responseText"},"statusText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"statusText"},"readyState":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"mthd","$an":{"shared":[]},"$nm":"readyState"},"overrideMimeType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"mime"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"overrideMimeType"},"upload":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestUpload"},"$mt":"mthd","$an":{"shared":[]},"$nm":"upload"},"response":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"response"},"open":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"method"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"async"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$def":"1","$nm":"user"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$def":"1","$nm":"password"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"open"},"getResponseHeader":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getResponseHeader"},"setRequestHeader":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setRequestHeader"},"getTimeout":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTimeout"},"getResponseType":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getResponseType"},"setTimeout":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"timeout"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTimeout"},"setOnreadystatechange":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnreadystatechange"},"setWithCredentials":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"credentials"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setWithCredentials"},"abort":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"abort"}},"$nm":"XMLHttpRequestAbs"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl32209=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl32209.$addmod$($$$cl32209,'ceylon.language/0.6.1');
exports.$pkg$ans$ceylon$js$xmlhttprequest=function(){return[$$$cl32209.shared()];};
exports.$mod$ans$=[];
var $$$cjd33135=require('ceylon/js/dom/4.0.0/ceylon.js.dom-4.0.0');
$$$cl32209.$addmod$($$$cjd33135,'ceylon.js.dom/4.0.0');

//ClassDefinition XMLHttpRequestEventTargetAbs at xmlhttprequestevent.ceylon (3:0-96:0)
function XMLHttpRequestEventTargetAbs($$xMLHttpRequestEventTargetAbs){
    $init$XMLHttpRequestEventTargetAbs();
    if ($$xMLHttpRequestEventTargetAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjd33135.EventTargetAbs($$xMLHttpRequestEventTargetAbs);
    return $$xMLHttpRequestEventTargetAbs;
}
XMLHttpRequestEventTargetAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjd33135.EventTargetAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs']};};
exports.XMLHttpRequestEventTargetAbs=XMLHttpRequestEventTargetAbs;
function $init$XMLHttpRequestEventTargetAbs(){
    if (XMLHttpRequestEventTargetAbs.$$===undefined){
        $$$cl32209.initTypeProto(XMLHttpRequestEventTargetAbs,'ceylon.js.xmlhttprequest::XMLHttpRequestEventTargetAbs',$$$cjd33135.EventTargetAbs);
        (function($$xMLHttpRequestEventTargetAbs){
            
            //MethodDefinition getOnloadstart at xmlhttprequestevent.ceylon (5:1-10:1)
            $$xMLHttpRequestEventTargetAbs.getOnloadstart=function getOnloadstart(){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$33139=$$xMLHttpRequestEventTargetAbs.$native.onloadstart,$$$cl32209.isOfType(tmpvar$33139,{t:$$$cl32209.Anything})?tmpvar$33139:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'8:10-8:27','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.getOnloadstart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns a function Anything(Event event)",40)),$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnloadstart']};};
            
            //MethodDefinition setOnloadstart at xmlhttprequestevent.ceylon (12:1-16:1)
            $$xMLHttpRequestEventTargetAbs.setOnloadstart=function setOnloadstart(handler$33140){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestEventTargetAbs.$native.onloadstart=$$$cl32209.$JsCallable(handler$33140/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.setOnloadstart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnloadstart']};};
            
            //MethodDefinition getOnprogress at xmlhttprequestevent.ceylon (18:1-23:1)
            $$xMLHttpRequestEventTargetAbs.getOnprogress=function getOnprogress(){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$33141=$$xMLHttpRequestEventTargetAbs.$native.onprogress,$$$cl32209.isOfType(tmpvar$33141,{t:$$$cl32209.Anything})?tmpvar$33141:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'21:10-21:26','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.getOnprogress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns a function Anything(Event event)",40)),$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnprogress']};};
            
            //MethodDefinition setOnprogress at xmlhttprequestevent.ceylon (25:1-29:1)
            $$xMLHttpRequestEventTargetAbs.setOnprogress=function setOnprogress(handler$33142){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestEventTargetAbs.$native.onprogress=$$$cl32209.$JsCallable(handler$33142/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.setOnprogress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnprogress']};};
            
            //MethodDefinition getOnabort at xmlhttprequestevent.ceylon (31:1-36:1)
            $$xMLHttpRequestEventTargetAbs.getOnabort=function getOnabort(){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$33143=$$xMLHttpRequestEventTargetAbs.$native.onabort,$$$cl32209.isOfType(tmpvar$33143,{t:$$$cl32209.Anything})?tmpvar$33143:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'34:10-34:23','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.getOnabort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns a function Anything(Event event)",40)),$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnabort']};};
            
            //MethodDefinition setOnabort at xmlhttprequestevent.ceylon (38:1-42:1)
            $$xMLHttpRequestEventTargetAbs.setOnabort=function setOnabort(handler$33144){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestEventTargetAbs.$native.onabort=$$$cl32209.$JsCallable(handler$33144/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.setOnabort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnabort']};};
            
            //MethodDefinition getOnerror at xmlhttprequestevent.ceylon (44:1-49:1)
            $$xMLHttpRequestEventTargetAbs.getOnerror=function getOnerror(){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$33145=$$xMLHttpRequestEventTargetAbs.$native.onerror,$$$cl32209.isOfType(tmpvar$33145,{t:$$$cl32209.Anything})?tmpvar$33145:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'47:10-47:23','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.getOnerror.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns a function Anything(Event event)",40)),$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnerror']};};
            
            //MethodDefinition setOnerror at xmlhttprequestevent.ceylon (51:1-55:1)
            $$xMLHttpRequestEventTargetAbs.setOnerror=function setOnerror(handler$33146){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestEventTargetAbs.$native.onerror=$$$cl32209.$JsCallable(handler$33146/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.setOnerror.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnerror']};};
            
            //MethodDefinition getOnload at xmlhttprequestevent.ceylon (57:1-62:1)
            $$xMLHttpRequestEventTargetAbs.getOnload=function getOnload(){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$33147=$$xMLHttpRequestEventTargetAbs.$native.onload,$$$cl32209.isOfType(tmpvar$33147,{t:$$$cl32209.Anything})?tmpvar$33147:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'60:10-60:22','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.getOnload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns a function Anything(Event event)",40)),$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnload']};};
            
            //MethodDefinition setOnload at xmlhttprequestevent.ceylon (64:1-68:1)
            $$xMLHttpRequestEventTargetAbs.setOnload=function setOnload(handler$33148){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestEventTargetAbs.$native.onload=$$$cl32209.$JsCallable(handler$33148/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.setOnload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnload']};};
            
            //MethodDefinition getOntimeout at xmlhttprequestevent.ceylon (70:1-75:1)
            $$xMLHttpRequestEventTargetAbs.getOntimeout=function getOntimeout(){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$33149=$$xMLHttpRequestEventTargetAbs.$native.ontimeout,$$$cl32209.isOfType(tmpvar$33149,{t:$$$cl32209.Anything})?tmpvar$33149:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'73:10-73:25','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.getOntimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns a function Anything(Event event)",40)),$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOntimeout']};};
            
            //MethodDefinition setOntimeout at xmlhttprequestevent.ceylon (77:1-81:1)
            $$xMLHttpRequestEventTargetAbs.setOntimeout=function setOntimeout(handler$33150){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestEventTargetAbs.$native.ontimeout=$$$cl32209.$JsCallable(handler$33150/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.setOntimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOntimeout']};};
            
            //MethodDefinition getOnloadend at xmlhttprequestevent.ceylon (83:1-88:1)
            $$xMLHttpRequestEventTargetAbs.getOnloadend=function getOnloadend(){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$33151=$$xMLHttpRequestEventTargetAbs.$native.onloadend,$$$cl32209.isOfType(tmpvar$33151,{t:$$$cl32209.Anything})?tmpvar$33151:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'86:10-86:25','xmlhttprequestevent.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.getOnloadend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns a function Anything(Event event)",40)),$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnloadend']};};
            
            //MethodDefinition setOnloadend at xmlhttprequestevent.ceylon (90:1-94:1)
            $$xMLHttpRequestEventTargetAbs.setOnloadend=function setOnloadend(handler$33152){
                var $$xMLHttpRequestEventTargetAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestEventTargetAbs.$native.onloadend=$$$cl32209.$JsCallable(handler$33152/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$xMLHttpRequestEventTargetAbs.setOnloadend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnloadend']};};
        })(XMLHttpRequestEventTargetAbs.$$.prototype);
    }
    return XMLHttpRequestEventTargetAbs;
}
exports.$init$XMLHttpRequestEventTargetAbs=$init$XMLHttpRequestEventTargetAbs;
$init$XMLHttpRequestEventTargetAbs();

//ClassDefinition XMLHttpRequestEventTarget at xmlhttprequestevent.ceylon (98:0-103:0)
function XMLHttpRequestEventTarget(n$33153, $$xMLHttpRequestEventTarget){
    $init$XMLHttpRequestEventTarget();
    if ($$xMLHttpRequestEventTarget===undefined)$$xMLHttpRequestEventTarget=new XMLHttpRequestEventTarget.$$;
    $$xMLHttpRequestEventTarget.n$33153_=n$33153;
    XMLHttpRequestEventTargetAbs($$xMLHttpRequestEventTarget);
    
    //AttributeDeclaration native at xmlhttprequestevent.ceylon (99:1-99:29)
    $$xMLHttpRequestEventTarget.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:XMLHttpRequestEventTarget,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTarget','$at','native']};}};
    /*Begin dynamic block*/
    $$xMLHttpRequestEventTarget.$native=$$xMLHttpRequestEventTarget.n$33153;/*End dynamic block*/
    return $$xMLHttpRequestEventTarget;
}
XMLHttpRequestEventTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestEventTargetAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTarget']};};
exports.XMLHttpRequestEventTarget=XMLHttpRequestEventTarget;
function $init$XMLHttpRequestEventTarget(){
    if (XMLHttpRequestEventTarget.$$===undefined){
        $$$cl32209.initTypeProto(XMLHttpRequestEventTarget,'ceylon.js.xmlhttprequest::XMLHttpRequestEventTarget',$init$XMLHttpRequestEventTargetAbs());
        (function($$xMLHttpRequestEventTarget){
            
            //AttributeDeclaration native at xmlhttprequestevent.ceylon (99:1-99:29)
            $$$cl32209.defineAttr($$xMLHttpRequestEventTarget,'n$33153',function(){return this.n$33153_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:XMLHttpRequestEventTarget,d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTarget','$at','n']};});
        })(XMLHttpRequestEventTarget.$$.prototype);
    }
    return XMLHttpRequestEventTarget;
}
exports.$init$XMLHttpRequestEventTarget=$init$XMLHttpRequestEventTarget;
$init$XMLHttpRequestEventTarget();

//ClassDefinition XMLHttpRequestUploadAbs at xmlhttprequestevent.ceylon (105:0-105:88)
function XMLHttpRequestUploadAbs($$xMLHttpRequestUploadAbs){
    $init$XMLHttpRequestUploadAbs();
    if ($$xMLHttpRequestUploadAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    XMLHttpRequestEventTargetAbs($$xMLHttpRequestUploadAbs);
    return $$xMLHttpRequestUploadAbs;
}
XMLHttpRequestUploadAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestEventTargetAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestUploadAbs']};};
exports.XMLHttpRequestUploadAbs=XMLHttpRequestUploadAbs;
function $init$XMLHttpRequestUploadAbs(){
    if (XMLHttpRequestUploadAbs.$$===undefined){
        $$$cl32209.initTypeProto(XMLHttpRequestUploadAbs,'ceylon.js.xmlhttprequest::XMLHttpRequestUploadAbs',$init$XMLHttpRequestEventTargetAbs());
    }
    return XMLHttpRequestUploadAbs;
}
exports.$init$XMLHttpRequestUploadAbs=$init$XMLHttpRequestUploadAbs;
$init$XMLHttpRequestUploadAbs();

//ClassDefinition XMLHttpRequestUpload at xmlhttprequestevent.ceylon (107:0-112:0)
function XMLHttpRequestUpload(n$33154, $$xMLHttpRequestUpload){
    $init$XMLHttpRequestUpload();
    if ($$xMLHttpRequestUpload===undefined)$$xMLHttpRequestUpload=new XMLHttpRequestUpload.$$;
    $$xMLHttpRequestUpload.n$33154_=n$33154;
    XMLHttpRequestUploadAbs($$xMLHttpRequestUpload);
    
    //AttributeDeclaration native at xmlhttprequestevent.ceylon (108:1-108:29)
    /*Begin dynamic block*/
    $$xMLHttpRequestUpload.$native=$$xMLHttpRequestUpload.n$33154;/*End dynamic block*/
    return $$xMLHttpRequestUpload;
}
XMLHttpRequestUpload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestUploadAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestUpload']};};
exports.XMLHttpRequestUpload=XMLHttpRequestUpload;
function $init$XMLHttpRequestUpload(){
    if (XMLHttpRequestUpload.$$===undefined){
        $$$cl32209.initTypeProto(XMLHttpRequestUpload,'ceylon.js.xmlhttprequest::XMLHttpRequestUpload',$init$XMLHttpRequestUploadAbs());
        (function($$xMLHttpRequestUpload){
            
            //AttributeDeclaration native at xmlhttprequestevent.ceylon (108:1-108:29)
            $$$cl32209.defineAttr($$xMLHttpRequestUpload,'n$33154',function(){return this.n$33154_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:XMLHttpRequestUpload,d:['ceylon.js.xmlhttprequest','XMLHttpRequestUpload','$at','n']};});
        })(XMLHttpRequestUpload.$$.prototype);
    }
    return XMLHttpRequestUpload;
}
exports.$init$XMLHttpRequestUpload=$init$XMLHttpRequestUpload;
$init$XMLHttpRequestUpload();
var $$$cjl32280=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl32209.$addmod$($$$cjl32280,'ceylon.js.language/1.8.5');
var $$$cjf33155=require('ceylon/js/file/1.0.0/ceylon.js.file-1.0.0');
$$$cl32209.$addmod$($$$cjf33155,'ceylon.js.file/1.0.0');
var $$$cjh32330=require('ceylon/js/html/5.0.0/ceylon.js.html-5.0.0');
$$$cl32209.$addmod$($$$cjh32330,'ceylon.js.html/5.0.0');

//MethodDefinition createFormData at formdata.ceylon (5:0-9:0)
function createFormData(form$33156){
    if(form$33156===undefined){form$33156=null;}
    /*Begin dynamic block*/
    return FormData((typeof FormData==='undefined'||FormData===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: FormData")),'7:18-7:25','formdata.ceylon'):FormData)(/*NULL PARAM!*/(typeof f==='undefined'||f===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: f")),'7:29-7:29','formdata.ceylon'):f)));
    /*End dynamic block*/
}
exports.createFormData=createFormData;
createFormData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:FormData},$ps:[{$nm:'form',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjh32330.HTMLFormElement}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','createFormData']};};

//ClassDefinition FormDataAbs at formdata.ceylon (11:0-82:0)
function FormDataAbs($$formDataAbs){
    $init$FormDataAbs();
    if ($$formDataAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$formDataAbs);
    return $$formDataAbs;
}
FormDataAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.xmlhttprequest','FormDataAbs']};};
exports.FormDataAbs=FormDataAbs;
function $init$FormDataAbs(){
    if (FormDataAbs.$$===undefined){
        $$$cl32209.initTypeProto(FormDataAbs,'ceylon.js.xmlhttprequest::FormDataAbs',$$$cjl32280.JSObjectAbs);
        (function($$formDataAbs){
            
            //MethodDefinition append at formdata.ceylon (13:4-41:4)
            $$formDataAbs.append=function append(name$33157,val$33158){
                var $$formDataAbs=this;
                //Switch statement at formdata.ceylon (14:8-40:8)
                var case$33159=name$33157;
                if ($$$cl32209.isOfType(name$33157,{t:$$$cl32209.String})) {
                    //Switch statement at formdata.ceylon (16:12-26:9)
                    var case$33160=val$33158;
                    if ($$$cl32209.isOfType(val$33158,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(/*NULL PARAM!*/case$33159.valueOf()/*NULL PARAM!*/,case$33160.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(val$33158,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(/*NULL PARAM!*/case$33159.valueOf()/*NULL PARAM!*/,case$33160.$native);
                        /*End dynamic block*/
                    }//End switch statement at formdata.ceylon (16:12-26:9)
                }else if ($$$cl32209.isOfType(name$33157,{t:$$$cjl32280.JSString})) {
                    //Switch statement at formdata.ceylon (29:12-39:9)
                    var case$33161=val$33158;
                    if ($$$cl32209.isOfType(val$33158,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(/*NULL PARAM!*/case$33159.$native/*NULL PARAM!*/,case$33161.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(val$33158,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(/*NULL PARAM!*/case$33159.$native/*NULL PARAM!*/,case$33161.$native);
                        /*End dynamic block*/
                    }//End switch statement at formdata.ceylon (29:12-39:9)
                }//End switch statement at formdata.ceylon (14:8-40:8)
            };$$formDataAbs.append.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:FormDataAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','FormDataAbs','$m','append']};};
            
            //MethodDefinition appendBlob at formdata.ceylon (43:4-81:4)
            $$formDataAbs.appendBlob=function appendBlob(name$33162,val$33163,filename$33164){
                var $$formDataAbs=this;
                //Switch statement at formdata.ceylon (44:8-80:8)
                var case$33165=name$33162;
                if ($$$cl32209.isOfType(name$33162,{t:$$$cl32209.String})) {
                    //Switch statement at formdata.ceylon (46:12-61:9)
                    var case$33166=filename$33164;
                    if ($$$cl32209.isOfType(filename$33164,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(/*NULL PARAM!*/case$33165.valueOf()/*NULL PARAM!*/,val$33163.$native/*NULL PARAM!*/,case$33166.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(filename$33164,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(/*NULL PARAM!*/case$33165.valueOf()/*NULL PARAM!*/,val$33163.$native/*NULL PARAM!*/,case$33166.$native);
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(filename$33164,{t:$$$cl32209.Null})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(/*NULL PARAM!*/case$33165.valueOf()/*NULL PARAM!*/,val$33163.$native);
                        /*End dynamic block*/
                    }//End switch statement at formdata.ceylon (46:12-61:9)
                }else if ($$$cl32209.isOfType(name$33162,{t:$$$cjl32280.JSString})) {
                    //Switch statement at formdata.ceylon (64:12-79:9)
                    var case$33167=filename$33164;
                    if ($$$cl32209.isOfType(filename$33164,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(/*NULL PARAM!*/case$33165.$native/*NULL PARAM!*/,val$33163.$native/*NULL PARAM!*/,case$33167.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(filename$33164,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(/*NULL PARAM!*/case$33165.$native/*NULL PARAM!*/,val$33163.$native/*NULL PARAM!*/,case$33167.$native);
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(filename$33164,{t:$$$cl32209.Null})) {
                        /*Begin dynamic block*/
                        $$formDataAbs.$native.append(/*NULL PARAM!*/case$33165.$native/*NULL PARAM!*/,val$33163.$native);
                        /*End dynamic block*/
                    }//End switch statement at formdata.ceylon (64:12-79:9)
                }//End switch statement at formdata.ceylon (44:8-80:8)
            };$$formDataAbs.appendBlob.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cjf33155.Blob},$an:function(){return[];}},{$nm:'filename',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]}]},$an:function(){return[];}}],$cont:FormDataAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','FormDataAbs','$m','appendBlob']};};
        })(FormDataAbs.$$.prototype);
    }
    return FormDataAbs;
}
exports.$init$FormDataAbs=$init$FormDataAbs;
$init$FormDataAbs();

//ClassDefinition FormData at formdata.ceylon (84:0-89:0)
function FormData(n$33168, $$formData){
    $init$FormData();
    if ($$formData===undefined)$$formData=new FormData.$$;
    $$formData.n$33168_=n$33168;
    FormDataAbs($$formData);
    
    //AttributeDeclaration native at formdata.ceylon (85:1-85:29)
    $$formData.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:FormData,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.xmlhttprequest','FormData','$at','native']};}};
    /*Begin dynamic block*/
    $$formData.$native=$$formData.n$33168;/*End dynamic block*/
    return $$formData;
}
FormData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:FormDataAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','FormData']};};
exports.FormData=FormData;
function $init$FormData(){
    if (FormData.$$===undefined){
        $$$cl32209.initTypeProto(FormData,'ceylon.js.xmlhttprequest::FormData',$init$FormDataAbs());
        (function($$formData){
            
            //AttributeDeclaration native at formdata.ceylon (85:1-85:29)
            $$$cl32209.defineAttr($$formData,'n$33168',function(){return this.n$33168_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:FormData,d:['ceylon.js.xmlhttprequest','FormData','$at','n']};});
        })(FormData.$$.prototype);
    }
    return FormData;
}
exports.$init$FormData=$init$FormData;
$init$FormData();
var $$$cjj33169=require('ceylon/js/json/1.0.0/ceylon.js.json-1.0.0');
$$$cl32209.$addmod$($$$cjj33169,'ceylon.js.json/1.0.0');

//ClassDefinition XMLHttpRequestResponseType at xmlhttprequest.ceylon (6:0-6:119)
function XMLHttpRequestResponseType(name$33720, $$xMLHttpRequestResponseType){
    $init$XMLHttpRequestResponseType();
    if ($$xMLHttpRequestResponseType===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$xMLHttpRequestResponseType.name$33720_=name$33720;
    return $$xMLHttpRequestResponseType;
}
XMLHttpRequestResponseType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestResponseType']};};
exports.XMLHttpRequestResponseType=XMLHttpRequestResponseType;
function $init$XMLHttpRequestResponseType(){
    if (XMLHttpRequestResponseType.$$===undefined){
        $$$cl32209.initTypeProto(XMLHttpRequestResponseType,'ceylon.js.xmlhttprequest::XMLHttpRequestResponseType',$$$cl32209.Basic);
        (function($$xMLHttpRequestResponseType){
            $$$cl32209.defineAttr($$xMLHttpRequestResponseType,'name$33720',function(){return this.name$33720_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$cont:XMLHttpRequestResponseType,d:['ceylon.js.xmlhttprequest','XMLHttpRequestResponseType','$at','name']};});
        })(XMLHttpRequestResponseType.$$.prototype);
    }
    return XMLHttpRequestResponseType;
}
exports.$init$XMLHttpRequestResponseType=$init$XMLHttpRequestResponseType;
$init$XMLHttpRequestResponseType();

//ObjectDefinition blank at xmlhttprequest.ceylon (8:0-8:60)
function blank$33721(){
    var $$blank=new blank$33721.$$;
    XMLHttpRequestResponseType($$$cl32209.String("",0),$$blank);
    return $$blank;
}
function $init$blank$33721(){
    if (blank$33721.$$===undefined){
        $$$cl32209.initTypeProto(blank$33721,'ceylon.js.xmlhttprequest::blank',$init$XMLHttpRequestResponseType());
    }
    return blank$33721;
}
exports.$init$blank$33721=$init$blank$33721;
$init$blank$33721();
var blank$33722;
function getBlank(){
    if (blank$33722===undefined)blank$33722=$init$blank$33721()();
    return blank$33722;
}
exports.getBlank=getBlank;
getBlank.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:blank$33721},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','blank']};};
$prop$getBlank={get:getBlank,$$metamodel$$:getBlank.$$metamodel$$};
exports.$prop$getBlank=$prop$getBlank;

//ObjectDefinition arraybuffer at xmlhttprequest.ceylon (9:0-9:77)
function arraybuffer$33723(){
    var $$arraybuffer=new arraybuffer$33723.$$;
    XMLHttpRequestResponseType($$$cl32209.String("arraybuffer",11),$$arraybuffer);
    return $$arraybuffer;
}
function $init$arraybuffer$33723(){
    if (arraybuffer$33723.$$===undefined){
        $$$cl32209.initTypeProto(arraybuffer$33723,'ceylon.js.xmlhttprequest::arraybuffer',$init$XMLHttpRequestResponseType());
    }
    return arraybuffer$33723;
}
exports.$init$arraybuffer$33723=$init$arraybuffer$33723;
$init$arraybuffer$33723();
var arraybuffer$33724;
function getArraybuffer(){
    if (arraybuffer$33724===undefined)arraybuffer$33724=$init$arraybuffer$33723()();
    return arraybuffer$33724;
}
exports.getArraybuffer=getArraybuffer;
getArraybuffer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:arraybuffer$33723},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','arraybuffer']};};
$prop$getArraybuffer={get:getArraybuffer,$$metamodel$$:getArraybuffer.$$metamodel$$};
exports.$prop$getArraybuffer=$prop$getArraybuffer;

//ObjectDefinition blob at xmlhttprequest.ceylon (10:0-10:63)
function blob$33725(){
    var $$blob=new blob$33725.$$;
    XMLHttpRequestResponseType($$$cl32209.String("blob",4),$$blob);
    return $$blob;
}
function $init$blob$33725(){
    if (blob$33725.$$===undefined){
        $$$cl32209.initTypeProto(blob$33725,'ceylon.js.xmlhttprequest::blob',$init$XMLHttpRequestResponseType());
    }
    return blob$33725;
}
exports.$init$blob$33725=$init$blob$33725;
$init$blob$33725();
var blob$33726;
function getBlob(){
    if (blob$33726===undefined)blob$33726=$init$blob$33725()();
    return blob$33726;
}
exports.getBlob=getBlob;
getBlob.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:blob$33725},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','blob']};};
$prop$getBlob={get:getBlob,$$metamodel$$:getBlob.$$metamodel$$};
exports.$prop$getBlob=$prop$getBlob;

//ObjectDefinition document at xmlhttprequest.ceylon (11:0-11:71)
function document$33727(){
    var $$document=new document$33727.$$;
    XMLHttpRequestResponseType($$$cl32209.String("document",8),$$document);
    return $$document;
}
function $init$document$33727(){
    if (document$33727.$$===undefined){
        $$$cl32209.initTypeProto(document$33727,'ceylon.js.xmlhttprequest::document',$init$XMLHttpRequestResponseType());
    }
    return document$33727;
}
exports.$init$document$33727=$init$document$33727;
$init$document$33727();
var document$33728;
function getDocument(){
    if (document$33728===undefined)document$33728=$init$document$33727()();
    return document$33728;
}
exports.getDocument=getDocument;
getDocument.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:document$33727},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','document']};};
$prop$getDocument={get:getDocument,$$metamodel$$:getDocument.$$metamodel$$};
exports.$prop$getDocument=$prop$getDocument;

//ObjectDefinition json at xmlhttprequest.ceylon (12:0-12:63)
function json$33729(){
    var $$json=new json$33729.$$;
    XMLHttpRequestResponseType($$$cl32209.String("json",4),$$json);
    return $$json;
}
function $init$json$33729(){
    if (json$33729.$$===undefined){
        $$$cl32209.initTypeProto(json$33729,'ceylon.js.xmlhttprequest::json',$init$XMLHttpRequestResponseType());
    }
    return json$33729;
}
exports.$init$json$33729=$init$json$33729;
$init$json$33729();
var json$33730;
function getJson(){
    if (json$33730===undefined)json$33730=$init$json$33729()();
    return json$33730;
}
exports.getJson=getJson;
getJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:json$33729},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','json']};};
$prop$getJson={get:getJson,$$metamodel$$:getJson.$$metamodel$$};
exports.$prop$getJson=$prop$getJson;

//ObjectDefinition text at xmlhttprequest.ceylon (13:0-13:63)
function text$33731(){
    var $$text=new text$33731.$$;
    XMLHttpRequestResponseType($$$cl32209.String("text",4),$$text);
    return $$text;
}
function $init$text$33731(){
    if (text$33731.$$===undefined){
        $$$cl32209.initTypeProto(text$33731,'ceylon.js.xmlhttprequest::text',$init$XMLHttpRequestResponseType());
    }
    return text$33731;
}
exports.$init$text$33731=$init$text$33731;
$init$text$33731();
var text$33732;
function getText(){
    if (text$33732===undefined)text$33732=$init$text$33731()();
    return text$33732;
}
exports.getText=getText;
getText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:text$33731},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','text']};};
$prop$getText={get:getText,$$metamodel$$:getText.$$metamodel$$};
exports.$prop$getText=$prop$getText;

//ClassDefinition ReadyState at xmlhttprequest.ceylon (15:0-15:152)
function ReadyState(num$33733, $$readyState){
    $init$ReadyState();
    if ($$readyState===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$readyState.num$33733_=num$33733;
    return $$readyState;
}
ReadyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.xmlhttprequest','ReadyState']};};
exports.ReadyState=ReadyState;
function $init$ReadyState(){
    if (ReadyState.$$===undefined){
        $$$cl32209.initTypeProto(ReadyState,'ceylon.js.xmlhttprequest::ReadyState',$$$cl32209.Basic);
        (function($$readyState){
            $$$cl32209.defineAttr($$readyState,'num$33733',function(){return this.num$33733_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Integer},$cont:ReadyState,d:['ceylon.js.xmlhttprequest','ReadyState','$at','num']};});
        })(ReadyState.$$.prototype);
    }
    return ReadyState;
}
exports.$init$ReadyState=$init$ReadyState;
$init$ReadyState();

//ObjectDefinition readyStateUnsent at xmlhttprequest.ceylon (17:0-17:54)
function readyStateUnsent$33734(){
    var $$readyStateUnsent=new readyStateUnsent$33734.$$;
    ReadyState((0),$$readyStateUnsent);
    return $$readyStateUnsent;
}
function $init$readyStateUnsent$33734(){
    if (readyStateUnsent$33734.$$===undefined){
        $$$cl32209.initTypeProto(readyStateUnsent$33734,'ceylon.js.xmlhttprequest::readyStateUnsent',$init$ReadyState());
    }
    return readyStateUnsent$33734;
}
exports.$init$readyStateUnsent$33734=$init$readyStateUnsent$33734;
$init$readyStateUnsent$33734();
var readyStateUnsent$33735;
function getReadyStateUnsent(){
    if (readyStateUnsent$33735===undefined)readyStateUnsent$33735=$init$readyStateUnsent$33734()();
    return readyStateUnsent$33735;
}
exports.getReadyStateUnsent=getReadyStateUnsent;
getReadyStateUnsent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateUnsent$33734},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','readyStateUnsent']};};
$prop$getReadyStateUnsent={get:getReadyStateUnsent,$$metamodel$$:getReadyStateUnsent.$$metamodel$$};
exports.$prop$getReadyStateUnsent=$prop$getReadyStateUnsent;

//ObjectDefinition readyStateOpened at xmlhttprequest.ceylon (18:0-18:54)
function readyStateOpened$33736(){
    var $$readyStateOpened=new readyStateOpened$33736.$$;
    ReadyState((1),$$readyStateOpened);
    return $$readyStateOpened;
}
function $init$readyStateOpened$33736(){
    if (readyStateOpened$33736.$$===undefined){
        $$$cl32209.initTypeProto(readyStateOpened$33736,'ceylon.js.xmlhttprequest::readyStateOpened',$init$ReadyState());
    }
    return readyStateOpened$33736;
}
exports.$init$readyStateOpened$33736=$init$readyStateOpened$33736;
$init$readyStateOpened$33736();
var readyStateOpened$33737;
function getReadyStateOpened(){
    if (readyStateOpened$33737===undefined)readyStateOpened$33737=$init$readyStateOpened$33736()();
    return readyStateOpened$33737;
}
exports.getReadyStateOpened=getReadyStateOpened;
getReadyStateOpened.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateOpened$33736},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','readyStateOpened']};};
$prop$getReadyStateOpened={get:getReadyStateOpened,$$metamodel$$:getReadyStateOpened.$$metamodel$$};
exports.$prop$getReadyStateOpened=$prop$getReadyStateOpened;

//ObjectDefinition readyStateHeadersReceived at xmlhttprequest.ceylon (19:0-19:63)
function readyStateHeadersReceived$33738(){
    var $$readyStateHeadersReceived=new readyStateHeadersReceived$33738.$$;
    ReadyState((2),$$readyStateHeadersReceived);
    return $$readyStateHeadersReceived;
}
function $init$readyStateHeadersReceived$33738(){
    if (readyStateHeadersReceived$33738.$$===undefined){
        $$$cl32209.initTypeProto(readyStateHeadersReceived$33738,'ceylon.js.xmlhttprequest::readyStateHeadersReceived',$init$ReadyState());
    }
    return readyStateHeadersReceived$33738;
}
exports.$init$readyStateHeadersReceived$33738=$init$readyStateHeadersReceived$33738;
$init$readyStateHeadersReceived$33738();
var readyStateHeadersReceived$33739;
function getReadyStateHeadersReceived(){
    if (readyStateHeadersReceived$33739===undefined)readyStateHeadersReceived$33739=$init$readyStateHeadersReceived$33738()();
    return readyStateHeadersReceived$33739;
}
exports.getReadyStateHeadersReceived=getReadyStateHeadersReceived;
getReadyStateHeadersReceived.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateHeadersReceived$33738},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','readyStateHeadersReceived']};};
$prop$getReadyStateHeadersReceived={get:getReadyStateHeadersReceived,$$metamodel$$:getReadyStateHeadersReceived.$$metamodel$$};
exports.$prop$getReadyStateHeadersReceived=$prop$getReadyStateHeadersReceived;

//ObjectDefinition readyStateLoading at xmlhttprequest.ceylon (20:0-20:55)
function readyStateLoading$33740(){
    var $$readyStateLoading=new readyStateLoading$33740.$$;
    ReadyState((3),$$readyStateLoading);
    return $$readyStateLoading;
}
function $init$readyStateLoading$33740(){
    if (readyStateLoading$33740.$$===undefined){
        $$$cl32209.initTypeProto(readyStateLoading$33740,'ceylon.js.xmlhttprequest::readyStateLoading',$init$ReadyState());
    }
    return readyStateLoading$33740;
}
exports.$init$readyStateLoading$33740=$init$readyStateLoading$33740;
$init$readyStateLoading$33740();
var readyStateLoading$33741;
function getReadyStateLoading(){
    if (readyStateLoading$33741===undefined)readyStateLoading$33741=$init$readyStateLoading$33740()();
    return readyStateLoading$33741;
}
exports.getReadyStateLoading=getReadyStateLoading;
getReadyStateLoading.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateLoading$33740},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','readyStateLoading']};};
$prop$getReadyStateLoading={get:getReadyStateLoading,$$metamodel$$:getReadyStateLoading.$$metamodel$$};
exports.$prop$getReadyStateLoading=$prop$getReadyStateLoading;

//ObjectDefinition readyStateDone at xmlhttprequest.ceylon (21:0-21:52)
function readyStateDone$33742(){
    var $$readyStateDone=new readyStateDone$33742.$$;
    ReadyState((4),$$readyStateDone);
    return $$readyStateDone;
}
function $init$readyStateDone$33742(){
    if (readyStateDone$33742.$$===undefined){
        $$$cl32209.initTypeProto(readyStateDone$33742,'ceylon.js.xmlhttprequest::readyStateDone',$init$ReadyState());
    }
    return readyStateDone$33742;
}
exports.$init$readyStateDone$33742=$init$readyStateDone$33742;
$init$readyStateDone$33742();
var readyStateDone$33743;
function getReadyStateDone(){
    if (readyStateDone$33743===undefined)readyStateDone$33743=$init$readyStateDone$33742()();
    return readyStateDone$33743;
}
exports.getReadyStateDone=getReadyStateDone;
getReadyStateDone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateDone$33742},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','readyStateDone']};};
$prop$getReadyStateDone={get:getReadyStateDone,$$metamodel$$:getReadyStateDone.$$metamodel$$};
exports.$prop$getReadyStateDone=$prop$getReadyStateDone;

//ClassDefinition XMLHttpRequestOptions at xmlhttprequest.ceylon (23:0-29:0)
function XMLHttpRequestOptions(anon, $$xMLHttpRequestOptions){
    $init$XMLHttpRequestOptions();
    if ($$xMLHttpRequestOptions===undefined)$$xMLHttpRequestOptions=new XMLHttpRequestOptions.$$;
    if(anon===undefined){anon=false;}
    $$xMLHttpRequestOptions.anon_=anon;
    return $$xMLHttpRequestOptions;
}
XMLHttpRequestOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestOptions']};};
exports.XMLHttpRequestOptions=XMLHttpRequestOptions;
function $init$XMLHttpRequestOptions(){
    if (XMLHttpRequestOptions.$$===undefined){
        $$$cl32209.initTypeProto(XMLHttpRequestOptions,'ceylon.js.xmlhttprequest::XMLHttpRequestOptions',$$$cl32209.Basic);
        (function($$xMLHttpRequestOptions){
            
            //MethodDefinition toJson at xmlhttprequest.ceylon (25:1-28:1)
            $$xMLHttpRequestOptions.toJson=function toJson(){
                var $$xMLHttpRequestOptions=this;
                
                //AttributeDeclaration json at xmlhttprequest.ceylon (26:2-26:38)
                var json$33744=(values$33745=/*NULL PARAM!*/[$$$cl32209.Entry($$$cl32209.String("anon",4),$$xMLHttpRequestOptions.anon,{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.Boolean}})].reifyCeylonType({Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.Boolean}}}}),$$$cjj33169.JSON(values$33745));
                var values$33745;
                return json$33744.toJson();
            };$$xMLHttpRequestOptions.toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj33169.JSJSON},$ps:[],$cont:XMLHttpRequestOptions,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestOptions','$m','toJson']};};
            $$$cl32209.defineAttr($$xMLHttpRequestOptions,'anon',function(){return this.anon_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:XMLHttpRequestOptions,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestOptions','$at','anon']};});
        })(XMLHttpRequestOptions.$$.prototype);
    }
    return XMLHttpRequestOptions;
}
exports.$init$XMLHttpRequestOptions=$init$XMLHttpRequestOptions;
$init$XMLHttpRequestOptions();

//MethodDefinition createXMLHttpRequest at xmlhttprequest.ceylon (31:0-41:0)
function createXMLHttpRequest(options$33746){
    if(options$33746===undefined){options$33746=null;}
    var o$33747;
    if((o$33747=options$33746)!==null){
        /*Begin dynamic block*/
        return XMLHttpRequest((typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: XMLHttpRequest")),'34:25-34:38','xmlhttprequest.ceylon'):XMLHttpRequest)(/*NULL PARAM!*/$$$cl32209.$JsCallable((opt$33748=o$33747,$$$cl32209.JsCallable(opt$33748,opt$33748!==null?opt$33748.toJson:null)),[],{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cjj33169.JSJSON}})));
        /*End dynamic block*/
        var opt$33748;
    }else {
        /*Begin dynamic block*/
        return XMLHttpRequest((typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: XMLHttpRequest")),'38:25-38:38','xmlhttprequest.ceylon'):XMLHttpRequest)());
        /*End dynamic block*/
    }
}
exports.createXMLHttpRequest=createXMLHttpRequest;
createXMLHttpRequest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:XMLHttpRequest},$ps:[{$nm:'options',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:XMLHttpRequestOptions}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','createXMLHttpRequest']};};

//ClassDefinition XMLHttpRequestAbs at xmlhttprequest.ceylon (43:0-527:0)
function XMLHttpRequestAbs($$xMLHttpRequestAbs){
    $init$XMLHttpRequestAbs();
    if ($$xMLHttpRequestAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$xMLHttpRequestAbs);
    return $$xMLHttpRequestAbs;
}
XMLHttpRequestAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs']};};
exports.XMLHttpRequestAbs=XMLHttpRequestAbs;
function $init$XMLHttpRequestAbs(){
    if (XMLHttpRequestAbs.$$===undefined){
        $$$cl32209.initTypeProto(XMLHttpRequestAbs,'ceylon.js.xmlhttprequest::XMLHttpRequestAbs',$$$cjl32280.JSObjectAbs);
        (function($$xMLHttpRequestAbs){
            
            //MethodDefinition getOnreadystatechange at xmlhttprequest.ceylon (45:1-50:1)
            $$xMLHttpRequestAbs.getOnreadystatechange=function getOnreadystatechange(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$33749=$$xMLHttpRequestAbs.$native.onreadystatechange,$$$cl32209.isOfType(tmpvar$33749,{t:$$$cl32209.Anything})?tmpvar$33749:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'48:10-48:34','xmlhttprequest.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.getOnreadystatechange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns a function Anything(Event event)",40)),$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getOnreadystatechange']};};
            
            //MethodDefinition setOnreadystatechange at xmlhttprequest.ceylon (52:1-56:1)
            $$xMLHttpRequestAbs.setOnreadystatechange=function setOnreadystatechange(handler$33750){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestAbs.$native.onreadystatechange=$$$cl32209.$JsCallable(handler$33750/*TODO: callable targs 6*/);
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.setOnreadystatechange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setOnreadystatechange']};};
            
            //MethodDefinition readyState at xmlhttprequest.ceylon (58:1-73:1)
            $$xMLHttpRequestAbs.readyState=function readyState(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration readyState at xmlhttprequest.ceylon (60:3-60:41)
                var readyState$33751=$$xMLHttpRequestAbs.$native.readyState;
                $prop$getReadyState$33751={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','readyState','$at','readyState']};}};
                $prop$getReadyState$33751.get=function(){return readyState$33751};
                if((tmpvar$33752=readyState$33751,tmpvar$33753=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: XMLHttpRequest")),'61:21-61:34','xmlhttprequest.ceylon'):XMLHttpRequest).UNSENT,(tmpvar$33752.equals&&tmpvar$33752.equals(tmpvar$33753))||tmpvar$33752===tmpvar$33753)){
                    return getReadyStateUnsent();
                }else {
                    if((tmpvar$33754=readyState$33751,tmpvar$33755=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: XMLHttpRequest")),'63:28-63:41','xmlhttprequest.ceylon'):XMLHttpRequest).OPENED,(tmpvar$33754.equals&&tmpvar$33754.equals(tmpvar$33755))||tmpvar$33754===tmpvar$33755)){
                        return getReadyStateOpened();
                    }else {
                        if((tmpvar$33756=readyState$33751,tmpvar$33757=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: XMLHttpRequest")),'65:28-65:41','xmlhttprequest.ceylon'):XMLHttpRequest).HEADERS_RECEIVED,(tmpvar$33756.equals&&tmpvar$33756.equals(tmpvar$33757))||tmpvar$33756===tmpvar$33757)){
                            return getReadyStateHeadersReceived();
                        }else {
                            if((tmpvar$33758=readyState$33751,tmpvar$33759=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: XMLHttpRequest")),'67:28-67:41','xmlhttprequest.ceylon'):XMLHttpRequest).LOADING,(tmpvar$33758.equals&&tmpvar$33758.equals(tmpvar$33759))||tmpvar$33758===tmpvar$33759)){
                                return getReadyStateLoading();
                            }else {
                                return getReadyStateDone();
                            }
                        }
                    }
                }/*End dynamic block*/
            };$$xMLHttpRequestAbs.readyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ReadyState},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','readyState']};};
            
            //MethodDefinition open at xmlhttprequest.ceylon (75:1-311:1)
            $$xMLHttpRequestAbs.open$defs$async=function(method$33760,url$33761,async$33762,user$33763,password$33764){var $$xMLHttpRequestAbs=this;
            return true;};
            $$xMLHttpRequestAbs.open$defs$user=function(method$33760,url$33761,async$33762,user$33763,password$33764){var $$xMLHttpRequestAbs=this;
            return null;};
            $$xMLHttpRequestAbs.open$defs$password=function(method$33760,url$33761,async$33762,user$33763,password$33764){var $$xMLHttpRequestAbs=this;
            return null;};
            $$xMLHttpRequestAbs.open=function open(method$33760,url$33761,async$33762,user$33763,password$33764){
                var $$xMLHttpRequestAbs=this;
                if(async$33762===undefined){async$33762=$$xMLHttpRequestAbs.open$defs$async(method$33760,url$33761,async$33762,user$33763,password$33764);}
                if(user$33763===undefined){user$33763=$$xMLHttpRequestAbs.open$defs$user(method$33760,url$33761,async$33762,user$33763,password$33764);}
                if(password$33764===undefined){password$33764=$$xMLHttpRequestAbs.open$defs$password(method$33760,url$33761,async$33762,user$33763,password$33764);}
                //Switch statement at xmlhttprequest.ceylon (76:2-310:2)
                var case$33765=method$33760;
                if ($$$cl32209.isOfType(method$33760,{t:$$$cl32209.String})) {
                    //Switch statement at xmlhttprequest.ceylon (78:3-192:3)
                    var case$33766=url$33761;
                    if ($$$cl32209.isOfType(url$33761,{t:$$$cl32209.String})) {
                        //Switch statement at xmlhttprequest.ceylon (80:4-134:4)
                        var case$33767=user$33763;
                        if ($$$cl32209.isOfType(user$33763,{t:$$$cl32209.String})) {
                            //Switch statement at xmlhttprequest.ceylon (82:5-97:5)
                            var case$33768=password$33764;
                            if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.valueOf()/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33767.valueOf()/*NULL PARAM!*/,case$33768.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cjl32280.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.valueOf()/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33767.valueOf()/*NULL PARAM!*/,case$33768.$native);
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.valueOf()/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33767.valueOf());
                                /*End dynamic block*/
                            }//End switch statement at xmlhttprequest.ceylon (82:5-97:5)
                        }else if ($$$cl32209.isOfType(user$33763,{t:$$$cjl32280.JSString})) {
                            //Switch statement at xmlhttprequest.ceylon (100:5-115:5)
                            var case$33769=password$33764;
                            if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.valueOf()/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33767.$native/*NULL PARAM!*/,case$33769.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cjl32280.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.valueOf()/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33767.$native/*NULL PARAM!*/,case$33769.$native);
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.valueOf()/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33767.$native);
                                /*End dynamic block*/
                            }//End switch statement at xmlhttprequest.ceylon (100:5-115:5)
                        }else if ($$$cl32209.isOfType(user$33763,{t:$$$cl32209.Null})) {
                            //Switch statement at xmlhttprequest.ceylon (118:5-133:5)
                            var case$33770=password$33764;
                            if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.valueOf()/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,null/*NULL PARAM!*/,case$33770.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cjl32280.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.valueOf()/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,null/*NULL PARAM!*/,case$33770.$native);
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.valueOf()/*NULL PARAM!*/,async$33762);
                                /*End dynamic block*/
                            }//End switch statement at xmlhttprequest.ceylon (118:5-133:5)
                        }//End switch statement at xmlhttprequest.ceylon (80:4-134:4)
                    }else if ($$$cl32209.isOfType(url$33761,{t:$$$cjl32280.JSString})) {
                        //Switch statement at xmlhttprequest.ceylon (137:4-191:4)
                        var case$33771=user$33763;
                        if ($$$cl32209.isOfType(user$33763,{t:$$$cl32209.String})) {
                            //Switch statement at xmlhttprequest.ceylon (139:5-154:5)
                            var case$33772=password$33764;
                            if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.$native/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33771.valueOf()/*NULL PARAM!*/,case$33772.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cjl32280.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.$native/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33771.valueOf()/*NULL PARAM!*/,case$33772.$native);
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.$native/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33771.valueOf());
                                /*End dynamic block*/
                            }//End switch statement at xmlhttprequest.ceylon (139:5-154:5)
                        }else if ($$$cl32209.isOfType(user$33763,{t:$$$cjl32280.JSString})) {
                            //Switch statement at xmlhttprequest.ceylon (157:5-172:5)
                            var case$33773=password$33764;
                            if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.$native/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33771.$native/*NULL PARAM!*/,case$33773.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cjl32280.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.$native/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33771.$native/*NULL PARAM!*/,case$33773.$native);
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.$native/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33771.$native);
                                /*End dynamic block*/
                            }//End switch statement at xmlhttprequest.ceylon (157:5-172:5)
                        }else if ($$$cl32209.isOfType(user$33763,{t:$$$cl32209.Null})) {
                            //Switch statement at xmlhttprequest.ceylon (175:5-190:5)
                            var case$33774=password$33764;
                            if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.$native/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,null/*NULL PARAM!*/,case$33774.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cjl32280.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.$native/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,null/*NULL PARAM!*/,case$33774.$native);
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.valueOf()/*NULL PARAM!*/,case$33766.$native/*NULL PARAM!*/,async$33762);
                                /*End dynamic block*/
                            }//End switch statement at xmlhttprequest.ceylon (175:5-190:5)
                        }//End switch statement at xmlhttprequest.ceylon (137:4-191:4)
                    }//End switch statement at xmlhttprequest.ceylon (78:3-192:3)
                }else if ($$$cl32209.isOfType(method$33760,{t:$$$cjl32280.JSString})) {
                    //Switch statement at xmlhttprequest.ceylon (195:3-309:3)
                    var case$33775=url$33761;
                    if ($$$cl32209.isOfType(url$33761,{t:$$$cl32209.String})) {
                        //Switch statement at xmlhttprequest.ceylon (197:4-251:4)
                        var case$33776=user$33763;
                        if ($$$cl32209.isOfType(user$33763,{t:$$$cl32209.String})) {
                            //Switch statement at xmlhttprequest.ceylon (199:5-214:5)
                            var case$33777=password$33764;
                            if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.valueOf()/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33776.valueOf()/*NULL PARAM!*/,case$33777.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cjl32280.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.valueOf()/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33776.valueOf()/*NULL PARAM!*/,case$33777.$native);
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.valueOf()/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33776.valueOf());
                                /*End dynamic block*/
                            }//End switch statement at xmlhttprequest.ceylon (199:5-214:5)
                        }else if ($$$cl32209.isOfType(user$33763,{t:$$$cjl32280.JSString})) {
                            //Switch statement at xmlhttprequest.ceylon (217:5-232:5)
                            var case$33778=password$33764;
                            if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.valueOf()/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33776.$native/*NULL PARAM!*/,case$33778.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cjl32280.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.valueOf()/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33776.$native/*NULL PARAM!*/,case$33778.$native);
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.valueOf()/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33776.$native);
                                /*End dynamic block*/
                            }//End switch statement at xmlhttprequest.ceylon (217:5-232:5)
                        }else if ($$$cl32209.isOfType(user$33763,{t:$$$cl32209.Null})) {
                            //Switch statement at xmlhttprequest.ceylon (235:5-250:5)
                            var case$33779=password$33764;
                            if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.valueOf()/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,null/*NULL PARAM!*/,case$33779.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cjl32280.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.valueOf()/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,null/*NULL PARAM!*/,case$33779.$native);
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.valueOf()/*NULL PARAM!*/,async$33762);
                                /*End dynamic block*/
                            }//End switch statement at xmlhttprequest.ceylon (235:5-250:5)
                        }//End switch statement at xmlhttprequest.ceylon (197:4-251:4)
                    }else if ($$$cl32209.isOfType(url$33761,{t:$$$cjl32280.JSString})) {
                        //Switch statement at xmlhttprequest.ceylon (254:4-308:4)
                        var case$33780=user$33763;
                        if ($$$cl32209.isOfType(user$33763,{t:$$$cl32209.String})) {
                            //Switch statement at xmlhttprequest.ceylon (256:5-271:5)
                            var case$33781=password$33764;
                            if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.$native/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33780.valueOf()/*NULL PARAM!*/,case$33781.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cjl32280.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.$native/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33780.valueOf()/*NULL PARAM!*/,case$33781.$native);
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.$native/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33780.valueOf());
                                /*End dynamic block*/
                            }//End switch statement at xmlhttprequest.ceylon (256:5-271:5)
                        }else if ($$$cl32209.isOfType(user$33763,{t:$$$cjl32280.JSString})) {
                            //Switch statement at xmlhttprequest.ceylon (274:5-289:5)
                            var case$33782=password$33764;
                            if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.$native/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33780.$native/*NULL PARAM!*/,case$33782.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cjl32280.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.$native/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33780.$native/*NULL PARAM!*/,case$33782.$native);
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.$native/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,case$33780.$native);
                                /*End dynamic block*/
                            }//End switch statement at xmlhttprequest.ceylon (274:5-289:5)
                        }else if ($$$cl32209.isOfType(user$33763,{t:$$$cl32209.Null})) {
                            //Switch statement at xmlhttprequest.ceylon (292:5-307:5)
                            var case$33783=password$33764;
                            if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.String})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.$native/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,null/*NULL PARAM!*/,case$33783.valueOf());
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cjl32280.JSString})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.$native/*NULL PARAM!*/,async$33762/*NULL PARAM!*/,null/*NULL PARAM!*/,case$33783.$native);
                                /*End dynamic block*/
                            }else if ($$$cl32209.isOfType(password$33764,{t:$$$cl32209.Null})) {
                                /*Begin dynamic block*/
                                $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$33765.$native/*NULL PARAM!*/,case$33775.$native/*NULL PARAM!*/,async$33762);
                                /*End dynamic block*/
                            }//End switch statement at xmlhttprequest.ceylon (292:5-307:5)
                        }//End switch statement at xmlhttprequest.ceylon (254:4-308:4)
                    }//End switch statement at xmlhttprequest.ceylon (195:3-309:3)
                }//End switch statement at xmlhttprequest.ceylon (76:2-310:2)
            };$$xMLHttpRequestAbs.open.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'method',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'url',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'async',$mt:'prm',$def:1,$t:{t:$$$cl32209.Boolean},$an:function(){return[];}},{$nm:'user',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]}]},$an:function(){return[];}},{$nm:'password',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','open']};};
            
            //MethodDefinition setRequestHeader at xmlhttprequest.ceylon (313:1-341:1)
            $$xMLHttpRequestAbs.setRequestHeader=function setRequestHeader(header$33784,val$33785){
                var $$xMLHttpRequestAbs=this;
                //Switch statement at xmlhttprequest.ceylon (314:2-340:2)
                var case$33786=header$33784;
                if ($$$cl32209.isOfType(header$33784,{t:$$$cl32209.String})) {
                    //Switch statement at xmlhttprequest.ceylon (316:3-326:3)
                    var case$33787=val$33785;
                    if ($$$cl32209.isOfType(val$33785,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.setRequestHeader(/*NULL PARAM!*/case$33786.valueOf()/*NULL PARAM!*/,case$33787.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(val$33785,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.setRequestHeader(/*NULL PARAM!*/case$33786.valueOf()/*NULL PARAM!*/,case$33787.$native);
                        /*End dynamic block*/
                    }//End switch statement at xmlhttprequest.ceylon (316:3-326:3)
                }else if ($$$cl32209.isOfType(header$33784,{t:$$$cjl32280.JSString})) {
                    //Switch statement at xmlhttprequest.ceylon (329:3-339:3)
                    var case$33788=val$33785;
                    if ($$$cl32209.isOfType(val$33785,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.setRequestHeader(/*NULL PARAM!*/case$33786.$native/*NULL PARAM!*/,case$33788.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(val$33785,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.setRequestHeader(/*NULL PARAM!*/case$33786.$native/*NULL PARAM!*/,case$33788.$native);
                        /*End dynamic block*/
                    }//End switch statement at xmlhttprequest.ceylon (329:3-339:3)
                }//End switch statement at xmlhttprequest.ceylon (314:2-340:2)
            };$$xMLHttpRequestAbs.setRequestHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'header',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setRequestHeader']};};
            
            //MethodDefinition getTimeout at xmlhttprequest.ceylon (343:1-347:1)
            $$xMLHttpRequestAbs.getTimeout=function getTimeout(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$xMLHttpRequestAbs.$native.timeout);
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.getTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getTimeout']};};
            
            //MethodDefinition setTimeout at xmlhttprequest.ceylon (349:1-361:1)
            $$xMLHttpRequestAbs.setTimeout=function setTimeout(timeout$33789){
                var $$xMLHttpRequestAbs=this;
                //Switch statement at xmlhttprequest.ceylon (350:2-360:2)
                var case$33790=timeout$33789;
                if ($$$cl32209.isOfType(timeout$33789,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.timeout=case$33790;
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(timeout$33789,{t:$$$cjl32280.JSNumber})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.timeout=case$33790.$native;
                    /*End dynamic block*/
                }//End switch statement at xmlhttprequest.ceylon (350:2-360:2)
            };$$xMLHttpRequestAbs.setTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'timeout',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setTimeout']};};
            
            //MethodDefinition getWithCredentials at xmlhttprequest.ceylon (363:1-371:1)
            $$xMLHttpRequestAbs.getWithCredentials=function getWithCredentials(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                if($$xMLHttpRequestAbs.$native.withCredentials){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$xMLHttpRequestAbs.getWithCredentials.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getWithCredentials']};};
            
            //MethodDefinition setWithCredentials at xmlhttprequest.ceylon (373:1-377:1)
            $$xMLHttpRequestAbs.setWithCredentials=function setWithCredentials(credentials$33791){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestAbs.$native.withCredentials=credentials$33791;
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.setWithCredentials.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'credentials',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setWithCredentials']};};
            
            //MethodDefinition upload at xmlhttprequest.ceylon (379:1-383:1)
            $$xMLHttpRequestAbs.upload=function upload(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                return XMLHttpRequestUpload($$xMLHttpRequestAbs.$native.upload);
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.upload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:XMLHttpRequestUpload},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','upload']};};
            
            //MethodDefinition send at xmlhttprequest.ceylon (385:1-417:1)
            $$xMLHttpRequestAbs.send$defs$data=function(data$33792){var $$xMLHttpRequestAbs=this;
            return null;};
            $$xMLHttpRequestAbs.send=function send(data$33792){
                var $$xMLHttpRequestAbs=this;
                if(data$33792===undefined){data$33792=$$xMLHttpRequestAbs.send$defs$data(data$33792);}
                //Switch statement at xmlhttprequest.ceylon (386:2-416:2)
                var case$33793=data$33792;
                if ($$$cl32209.isOfType(data$33792,{t:$$$cjf33155.Blob})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.send(/*NULL PARAM!*/case$33793.$native);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(data$33792,{t:$$$cjd33135.Document})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.send(/*NULL PARAM!*/case$33793.$native);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(data$33792,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.send(/*NULL PARAM!*/case$33793.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(data$33792,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.send(/*NULL PARAM!*/case$33793.$native);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(data$33792,{t:FormData})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.send(/*NULL PARAM!*/case$33793.$native);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(data$33792,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.send();
                    /*End dynamic block*/
                }//End switch statement at xmlhttprequest.ceylon (386:2-416:2)
            };$$xMLHttpRequestAbs.send.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'data',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cjf33155.Blob},{t:$$$cjd33135.Document},{t:$$$cl32209.String},{t:$$$cjl32280.JSString},{ t:'u', l:[{t:$$$cl32209.Null},{t:FormData}]}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','send']};};
            
            //MethodDefinition abort at xmlhttprequest.ceylon (419:1-423:1)
            $$xMLHttpRequestAbs.abort=function abort(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestAbs.$native.abort();
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.abort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','abort']};};
            
            //MethodDefinition status at xmlhttprequest.ceylon (425:1-429:1)
            $$xMLHttpRequestAbs.status=function status(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$xMLHttpRequestAbs.$native.status);
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.status.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','status']};};
            
            //MethodDefinition statusText at xmlhttprequest.ceylon (431:1-435:1)
            $$xMLHttpRequestAbs.statusText=function statusText(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$xMLHttpRequestAbs.$native.statusText);
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.statusText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','statusText']};};
            
            //MethodDefinition getResponseHeader at xmlhttprequest.ceylon (437:1-453:1)
            $$xMLHttpRequestAbs.getResponseHeader=function getResponseHeader(header$33794){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration rheader at xmlhttprequest.ceylon (439:3-439:18)
                var rheader$33795;
                $prop$getRheader$33795={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getResponseHeader','$at','rheader']};}};
                $prop$getRheader$33795.get=function(){return rheader$33795};
                //Switch statement at xmlhttprequest.ceylon (440:3-446:3)
                var case$33796=header$33794;
                if ($$$cl32209.isOfType(header$33794,{t:$$$cl32209.String})) {
                    rheader$33795=$$xMLHttpRequestAbs.$native.getResponseHeader(/*NULL PARAM!*/case$33796.valueOf());
                }else if ($$$cl32209.isOfType(header$33794,{t:$$$cjl32280.JSString})) {
                    rheader$33795=$$xMLHttpRequestAbs.$native.getResponseHeader(/*NULL PARAM!*/case$33796.$native);
                }//End switch statement at xmlhttprequest.ceylon (440:3-446:3)
                if((tmpvar$33797=rheader$33795,tmpvar$33798=null,(tmpvar$33797.equals&&!tmpvar$33797.equals(tmpvar$33798))||tmpvar$33797!==tmpvar$33798)){
                    return $$$cjl32280.JSString(rheader$33795);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$xMLHttpRequestAbs.getResponseHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[{$nm:'header',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getResponseHeader']};};
            
            //MethodDefinition getAllResponseHeaders at xmlhttprequest.ceylon (455:1-464:1)
            $$xMLHttpRequestAbs.getAllResponseHeaders=function getAllResponseHeaders(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration rheaders at xmlhttprequest.ceylon (457:3-457:52)
                var rheaders$33799=$$xMLHttpRequestAbs.$native.getAllResponseHeaders();
                $prop$getRheaders$33799={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getAllResponseHeaders','$at','rheaders']};}};
                $prop$getRheaders$33799.get=function(){return rheaders$33799};
                if((tmpvar$33800=rheaders$33799,tmpvar$33801=null,(tmpvar$33800.equals&&!tmpvar$33800.equals(tmpvar$33801))||tmpvar$33800!==tmpvar$33801)){
                    return $$$cjl32280.JSString(rheaders$33799);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$xMLHttpRequestAbs.getAllResponseHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getAllResponseHeaders']};};
            
            //MethodDefinition overrideMimeType at xmlhttprequest.ceylon (466:1-478:1)
            $$xMLHttpRequestAbs.overrideMimeType=function overrideMimeType(mime$33802){
                var $$xMLHttpRequestAbs=this;
                //Switch statement at xmlhttprequest.ceylon (467:2-477:2)
                var case$33803=mime$33802;
                if ($$$cl32209.isOfType(mime$33802,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.overrideMimeType(/*NULL PARAM!*/case$33803.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(mime$33802,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$xMLHttpRequestAbs.$native.overrideMimeType(/*NULL PARAM!*/case$33803.$native);
                    /*End dynamic block*/
                }//End switch statement at xmlhttprequest.ceylon (467:2-477:2)
            };$$xMLHttpRequestAbs.overrideMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'mime',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','overrideMimeType']};};
            
            //MethodDefinition getResponseType at xmlhttprequest.ceylon (480:1-496:1)
            $$xMLHttpRequestAbs.getResponseType=function getResponseType(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$33804=$$xMLHttpRequestAbs.$native.responseType,tmpvar$33805=$$$cl32209.String("",0),(tmpvar$33804.equals&&tmpvar$33804.equals(tmpvar$33805))||tmpvar$33804===tmpvar$33805)){
                    return getBlank();
                }else {
                    if((tmpvar$33806=$$xMLHttpRequestAbs.$native.responseType,tmpvar$33807=$$$cl32209.String("arraybuffer",11),(tmpvar$33806.equals&&tmpvar$33806.equals(tmpvar$33807))||tmpvar$33806===tmpvar$33807)){
                        return getArraybuffer();
                    }else {
                        if((tmpvar$33808=$$xMLHttpRequestAbs.$native.responseType,tmpvar$33809=$$$cl32209.String("blob",4),(tmpvar$33808.equals&&tmpvar$33808.equals(tmpvar$33809))||tmpvar$33808===tmpvar$33809)){
                            return getBlob();
                        }else {
                            if((tmpvar$33810=$$xMLHttpRequestAbs.$native.responseType,tmpvar$33811=$$$cl32209.String("document",8),(tmpvar$33810.equals&&tmpvar$33810.equals(tmpvar$33811))||tmpvar$33810===tmpvar$33811)){
                                return getDocument();
                            }else {
                                if((tmpvar$33812=$$xMLHttpRequestAbs.$native.responseType,tmpvar$33813=$$$cl32209.String("json",4),(tmpvar$33812.equals&&tmpvar$33812.equals(tmpvar$33813))||tmpvar$33812===tmpvar$33813)){
                                    return getJson();
                                }else {
                                    return getText();
                                }
                            }
                        }
                    }
                }/*End dynamic block*/
            };$$xMLHttpRequestAbs.getResponseType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:XMLHttpRequestResponseType},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getResponseType']};};
            
            //MethodDefinition setResponseType at xmlhttprequest.ceylon (498:1-502:1)
            $$xMLHttpRequestAbs.setResponseType=function setResponseType(responseType$33814){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                $$xMLHttpRequestAbs.$native.responseType=responseType$33814.string.valueOf();
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.setResponseType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'responseType',$mt:'prm',$t:{t:XMLHttpRequestResponseType},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setResponseType']};};
            
            //MethodDefinition response at xmlhttprequest.ceylon (504:1-508:1)
            $$xMLHttpRequestAbs.response=function response(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$33815=$$xMLHttpRequestAbs.$native.response,$$$cl32209.isOfType(tmpvar$33815,{t:$$$cl32209.Anything})?tmpvar$33815:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'506:10-506:24','xmlhttprequest.ceylon'));
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.response.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','response']};};
            
            //MethodDefinition responseText at xmlhttprequest.ceylon (510:1-514:1)
            $$xMLHttpRequestAbs.responseText=function responseText(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$xMLHttpRequestAbs.$native.responseText);
                /*End dynamic block*/
            };$$xMLHttpRequestAbs.responseText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','responseText']};};
            
            //MethodDefinition responseXML at xmlhttprequest.ceylon (516:1-525:1)
            $$xMLHttpRequestAbs.responseXML=function responseXML(){
                var $$xMLHttpRequestAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration responseXML at xmlhttprequest.ceylon (518:3-518:43)
                var responseXML$33816=$$xMLHttpRequestAbs.$native.responseXML;
                $prop$getResponseXML$33816={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','responseXML','$at','responseXML']};}};
                $prop$getResponseXML$33816.get=function(){return responseXML$33816};
                if((tmpvar$33817=responseXML$33816,tmpvar$33818=null,(tmpvar$33817.equals&&!tmpvar$33817.equals(tmpvar$33818))||tmpvar$33817!==tmpvar$33818)){
                    return $$$cjd33135.Document(responseXML$33816);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$xMLHttpRequestAbs.responseXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjd33135.Document}]},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','responseXML']};};
        })(XMLHttpRequestAbs.$$.prototype);
    }
    return XMLHttpRequestAbs;
}
exports.$init$XMLHttpRequestAbs=$init$XMLHttpRequestAbs;
$init$XMLHttpRequestAbs();

//ClassDefinition XMLHttpRequest at xmlhttprequest.ceylon (529:0-534:0)
function XMLHttpRequest(n$33819, $$xMLHttpRequest){
    $init$XMLHttpRequest();
    if ($$xMLHttpRequest===undefined)$$xMLHttpRequest=new XMLHttpRequest.$$;
    $$xMLHttpRequest.n$33819_=n$33819;
    XMLHttpRequestAbs($$xMLHttpRequest);
    
    //AttributeDeclaration native at xmlhttprequest.ceylon (530:1-530:29)
    $$xMLHttpRequest.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:XMLHttpRequest,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequest','$at','native']};}};
    /*Begin dynamic block*/
    $$xMLHttpRequest.$native=$$xMLHttpRequest.n$33819;/*End dynamic block*/
    return $$xMLHttpRequest;
}
XMLHttpRequest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequest']};};
exports.XMLHttpRequest=XMLHttpRequest;
function $init$XMLHttpRequest(){
    if (XMLHttpRequest.$$===undefined){
        $$$cl32209.initTypeProto(XMLHttpRequest,'ceylon.js.xmlhttprequest::XMLHttpRequest',$init$XMLHttpRequestAbs());
        (function($$xMLHttpRequest){
            
            //AttributeDeclaration native at xmlhttprequest.ceylon (530:1-530:29)
            $$$cl32209.defineAttr($$xMLHttpRequest,'n$33819',function(){return this.n$33819_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:XMLHttpRequest,d:['ceylon.js.xmlhttprequest','XMLHttpRequest','$at','n']};});
        })(XMLHttpRequest.$$.prototype);
    }
    return XMLHttpRequest;
}
exports.$init$XMLHttpRequest=$init$XMLHttpRequest;
$init$XMLHttpRequest();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
