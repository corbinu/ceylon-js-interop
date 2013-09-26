(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1"],"$mod-name":"ceylon.js.language","$mod-version":"1.8.5","ceylon.js.language":{"PropertyDescriptor":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"toNative":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"toNative"}},"$at":{"configurable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"configurable"},"descriptor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"descriptor"},"enumerable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"enumerable"}},"$nm":"PropertyDescriptor"},"defineProperties":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.language","$nm":"DataDescriptor"},{"$pk":"ceylon.js.language","$nm":"AccessorDescriptor"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"defineProperties"},"mathLog10":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"mathLog10"},"objectIsSealed":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectIsSealed"},"mathRoot2":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"mathRoot2"},"Math":{"super":{"$pk":"ceylon.js.language","$nm":"MathAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Math"},"objectIsFrozen":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectIsFrozen"},"objectDefineProperty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"prop"},{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.js.language","$nm":"DataDescriptor"},{"$pk":"ceylon.js.language","$nm":"AccessorDescriptor"}]},"$mt":"prm","$nm":"descriptor"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectDefineProperty"},"RegExp":{"super":{"$pk":"ceylon.js.language","$nm":"RegExpAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"RegExp"},"dateUTC":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"year"},{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"month"},{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"day"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"hour"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"minute"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"second"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dateUTC"},"createJSDateYMDInt":{"$t":{"$pk":"ceylon.js.language","$nm":"JSDate"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"day"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"hour"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"minute"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"second"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSDateYMDInt"},"JSString":{"super":{"$pk":"ceylon.js.language","$nm":"JSStringAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSString"},"createJSObject":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSObject"},"createJSNumber":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSNumber"},"$pkg-shared":"1","JSDateAbs":{"abstract":"1","super":{"$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"toLocaleDateString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toLocaleDateString"},"toLocaleString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toLocaleString"},"getSeconds":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getSeconds"},"getUTCSeconds":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUTCSeconds"},"getUTCMonth":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUTCMonth"},"toUTCString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toUTCString"},"setUTCFullYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUTCFullYear"},"getFullYear":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getFullYear"},"getHours":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getHours"},"setUTCHours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUTCHours"},"getTimezoneOffset":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTimezoneOffset"},"getDay":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDay"},"setMinutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMinutes"},"toISOString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toISOString"},"setMilliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMilliseconds"},"getUTCHours":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUTCHours"},"setTime":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTime"},"toLocaleTimeString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toLocaleTimeString"},"getUTCDate":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUTCDate"},"toTimeString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toTimeString"},"setUTCMilliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUTCMilliseconds"},"setSeconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setSeconds"},"setUTCMinutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUTCMinutes"},"setMonth":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMonth"},"toDateString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toDateString"},"setUTCSeconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUTCSeconds"},"getUTCMinutes":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUTCMinutes"},"setDate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"day"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDate"},"getDate":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDate"},"setFullYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setFullYear"},"getTime":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTime"},"toJSON":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJSON"},"setHours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"hour"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHours"},"getMonth":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMonth"},"getUTCFullYear":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUTCFullYear"},"getUTCDay":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUTCDay"},"getUTCMilliseconds":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUTCMilliseconds"},"setUTCMonth":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUTCMonth"},"setUTCDate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"day"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUTCDate"},"getMilliseconds":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMilliseconds"},"getMinutes":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMinutes"}},"$nm":"JSDateAbs"},"objectGetOwnPropertyDescriptor":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"prop"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectGetOwnPropertyDescriptor"},"createJSDate":{"$t":{"$pk":"ceylon.js.language","$nm":"JSDate"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSDate"},"objectKeys":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectKeys"},"objectGetOwnPropertyNames":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectGetOwnPropertyNames"},"objectSeal":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectSeal"},"objectFreeze":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectFreeze"},"arrayIsArray":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"arrayIsArray"},"numberNegativeInfinity":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"numberNegativeInfinity"},"global":{"super":{"$pk":"ceylon.js.language","$nm":"RegExpFlag"},"$mt":"obj","$an":{"shared":[]},"$nm":"global"},"eval":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"js"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"eval"},"JSArrayAbs":{"abstract":"1","super":{"$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"splice":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"howMany"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"splice"},"reverse":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"reverse"},"sort":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[]},"$nm":"sort"},"reduceRight":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"previousValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"currentValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"initialValue"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"previousValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"currentValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"reduceRight"},"forEach":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"forEach"},"lastIndexOf":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"searchElement"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"lastIndexOf"},"pop":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["return type unknown"]},"$nm":"pop"},"indexOf":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"searchElement"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"indexOf"},"join":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"separator"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"join"},"every":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"every"},"concat":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"elementsOrArrays"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"concat"},"reduce":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"previousValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"currentValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"initialValue"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"previousValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"currentValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"reduce"},"push":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"push"},"concatArrays":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSArray"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"arrays"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"concatArrays"},"map":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"map"},"slice":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"begin"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slice"},"sortCompare":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"a"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"b"}]],"$mt":"prm","$pt":"f","$nm":"compare"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"a"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"b"}]],"$mt":"mthd","$nm":"compare"}},"$nm":"sortCompare"},"getLength":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getLength"},"unshift":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"unshift"},"setLength":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"len"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setLength"},"some":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"some"},"filter":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"filter"},"shift":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["return type unknown"]},"$nm":"shift"}},"$nm":"JSArrayAbs"},"dateParse":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"dateTime"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dateParse"},"isFinite":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"num"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isFinite"},"JSArray":{"super":{"$pk":"ceylon.js.language","$nm":"JSArrayAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSArray"},"createJSDateYMD":{"$t":{"$pk":"ceylon.js.language","$nm":"JSDate"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"year"},{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"month"},{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"day"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"hour"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"minute"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"second"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSDateYMD"},"JSNumber":{"super":{"$pk":"ceylon.js.language","$nm":"JSNumberAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSNumber"},"mathLog2e":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"mathLog2e"},"RegExpAbs":{"abstract":"1","super":{"$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"source":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"source"},"test":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"str"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"test"},"multiline":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"multiline"},"global":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"global"},"exec":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"str"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"exec"},"getLastindex":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getLastindex"},"ignoreCase":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"ignoreCase"},"setLastindex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setLastindex"}},"$c":{"RegResult":{"super":{"$pk":"ceylon.js.language","$nm":"RegResultAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"RegResult"},"RegResultAbs":{"abstract":"1","super":{"$pk":"ceylon.js.language","$nm":"JSArrayAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"index":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"index"},"input":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"input"}},"$nm":"RegResultAbs"}},"$nm":"RegExpAbs"},"isNaN":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isNaN"},"objectCreate":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"proto"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.language","$nm":"DataDescriptor"},{"$pk":"ceylon.js.language","$nm":"AccessorDescriptor"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectCreate"},"numberMinValue":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"numberMinValue"},"JSObject":{"super":{"$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSObject"},"mathLog2":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"mathLog2"},"DataDescriptor":{"super":{"$pk":"ceylon.js.language","$nm":"PropertyDescriptor"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"configurable"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"descriptor"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"enumerable"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"writable"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"val"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toNative":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"toNative"}},"$at":{"val":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[]},"$nm":"val"},"configurable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"configurable"},"descriptor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"descriptor"},"writable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"writable"},"enumerable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"enumerable"}},"$nm":"DataDescriptor"},"parseFloat":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"float"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parseFloat"},"RegExpFlag":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.language","$nm":"global"},{"$pk":"ceylon.js.language","$nm":"ignore"},{"$pk":"ceylon.js.language","$nm":"multiple"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"RegExpFlag"},"parseInt":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"int"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"radix"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parseInt"},"dateUTCInt":{"$t":{"$pk":"ceylon.js.language","$nm":"JSDate"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"day"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"hour"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"minute"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"second"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dateUTCInt"},"objectIsExtensible":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectIsExtensible"},"JSNumberAbs":{"abstract":"1","super":{"$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"toFixed":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"digits"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toFixed"},"toExponential":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"fractionDigits"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toExponential"},"toPrecision":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"precision"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toPrecision"}},"$nm":"JSNumberAbs"},"JSStringAbs":{"abstract":"1","super":{"$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"lastIndexOf":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"searchValue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"lastIndexOf"},"indexOf":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"searchValue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"indexOf"},"concat":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"prm","seq":"1","$nm":"strings","$min1":"1"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"concat"},"replace":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"},{"$pk":"ceylon.js.language","$nm":"RegExp"}]},"$mt":"prm","$nm":"pattern"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"replace"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replace"},"toUpperCase":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toUpperCase"},"replaceCallback":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"},{"$pk":"ceylon.js.language","$nm":"RegExp"}]},"$mt":"prm","$nm":"pattern"},{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"match"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"psOffsetExamined"}]],"$mt":"prm","$pt":"f","$nm":"replace"}]],"$mt":"mthd","$an":{"shared":[],"doc":["replace will recived a set of substrings based on the regex then an Integer for offset, and the examined String"]},"$m":{"replace":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"match"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"psOffsetExamined"}]],"$mt":"mthd","$nm":"replace"}},"$nm":"replaceCallback"},"charCodeAt":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"charCodeAt"},"search":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"RegExp"},"$mt":"prm","$nm":"regexp"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"search"},"toLowerCase":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toLowerCase"},"substring":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"indexA"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"indexB"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"substring"},"length":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"slice":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"beginSlice"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"endSlice"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slice"},"split":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"RegExp"}]}]},"$mt":"prm","$def":"1","$nm":"separator"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"limit"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns array of strings"]},"$nm":"split"},"match":{"$t":{"$pk":"ceylon.js.language","$nm":"RegResult"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"RegExp"},"$mt":"prm","$nm":"regexp"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"match"},"trim":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"trim"},"substr":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"start"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"substr"},"charAt":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"charAt"}},"$nm":"JSStringAbs"},"JSDate":{"super":{"$pk":"ceylon.js.language","$nm":"JSDateAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSDate"},"multiple":{"super":{"$pk":"ceylon.js.language","$nm":"RegExpFlag"},"$mt":"obj","$an":{"shared":[]},"$nm":"multiple"},"numberMaxValue":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"numberMaxValue"},"objectPreventExtensions":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectPreventExtensions"},"ignore":{"super":{"$pk":"ceylon.js.language","$nm":"RegExpFlag"},"$mt":"obj","$an":{"shared":[]},"$nm":"ignore"},"mathRoot1_2":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"mathRoot1_2"},"JSFunctionAbs":{"abstract":"1","super":{"$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"isGenerator":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isGenerator"},"length":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"bind":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"thisArg"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bind"}},"$nm":"JSFunctionAbs"},"dateNow":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"dateNow"},"AccessorDescriptor":{"super":{"$pk":"ceylon.js.language","$nm":"PropertyDescriptor"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$an":{"shared":[],"actual":[]},"$nm":"configurable"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"descriptor"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"enumerable"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"get"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"set"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toNative":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"toNative"}},"$at":{"configurable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"configurable"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"get"},"descriptor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"descriptor"},"set":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"set"},"enumerable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"enumerable"}},"$nm":"AccessorDescriptor"},"createJSRegExp":{"$t":{"$pk":"ceylon.js.language","$nm":"RegExp"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"pattern"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.language","$nm":"RegExpFlag"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"flags"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSRegExp"},"createJSString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"string"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSString"},"JSFunction":{"super":{"$pk":"ceylon.js.language","$nm":"JSFunctionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSFunction"},"numberPositiveInfinity":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"numberPositiveInfinity"},"JSObjectAbs":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"isPrototypeOf":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isPrototypeOf"},"callJS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$nm":"thisArg"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"callJS"},"call":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"thisArg"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"call"},"apply":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"thisArg"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"apply"},"setConstructor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSFunction"},"$mt":"prm","$nm":"constructor"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setConstructor"},"propertyIsEnumerable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"prop"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"propertyIsEnumerable"},"toString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toString"},"setPrototype":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"prototype"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPrototype"},"applyJS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$nm":"thisArg"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"applyJS"},"hasOwnProperty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"prop"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasOwnProperty"},"getConstructor":{"$t":{"$pk":"ceylon.js.language","$nm":"JSFunction"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getConstructor"},"getPrototype":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getPrototype"}},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"native"}},"$nm":"JSObjectAbs"},"mathLog10e":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"mathLog10e"},"MathAbs":{"abstract":"1","super":{"$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"min":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSNumber"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"numbers"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"min"},"atan":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"atan"},"max":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSNumber"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"numbers"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"max"},"pow":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"base"},{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"exponent"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"pow"},"asin":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"asin"},"cos":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"cos"},"ceil":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ceil"},"sqrt":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"sqrt"},"random":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"random"},"round":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"round"},"log":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"log"},"exp":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"exp"},"atan2":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"y"},{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"atan2"},"abs":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"abs"},"floor":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"floor"},"sin":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"sin"},"tan":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"tan"}},"$nm":"MathAbs"},"objectGetPrototypeOf":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectGetPrototypeOf"},"createJSDateNow":{"$t":{"$pk":"ceylon.js.language","$nm":"JSDate"},"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSDateNow"},"createJSArray":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSArray"},"mathPi":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"mathPi"},"mathE":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"mathE"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6.1');
function createJSArray(elements$2){
    if(elements$2===undefined){elements$2=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return JSArray((typeof Array==='undefined'||Array===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Array")),'4:17-4:21','array.ceylon'):Array)(/*NULL PARAM!*/elements$2));
    /*End dynamic block*/
}
exports.createJSArray=createJSArray;
createJSArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'elements',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','createJSArray']};};
function arrayIsArray(array$3){
    /*Begin dynamic block*/
    if((typeof Array==='undefined'||Array===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Array")),'10:6-10:10','array.ceylon'):Array).isArray(/*NULL PARAM!*/array$3)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.arrayIsArray=arrayIsArray;
arrayIsArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'array',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','arrayIsArray']};};
function JSArrayAbs($$jSArrayAbs){
    $init$JSArrayAbs();
    if ($$jSArrayAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$jSArrayAbs);
    function getLength(){
        /*Begin dynamic block*/
        return JSNumber($$jSArrayAbs.$native.length);
        /*End dynamic block*/
    }
    $$jSArrayAbs.getLength=getLength;
    getLength.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','getLength']};};
    function setLength(len$4){
        
        var case$5=len$4;
        if ($$$cl1.isOfType(len$4,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$jSArrayAbs.$native.length=case$5;
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(len$4,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$jSArrayAbs.$native.length=case$5.$native;
            /*End dynamic block*/
        }
    }
    $$jSArrayAbs.setLength=setLength;
    setLength.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'len',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','setLength']};};
    function pop(){
        /*Begin dynamic block*/
        return (tmpvar$6=$$jSArrayAbs.$native.pop(),$$$cl1.isOfType(tmpvar$6,{t:$$$cl1.Anything})?tmpvar$6:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'43:19-43:30','array.ceylon'));
        /*End dynamic block*/
    }
    $$jSArrayAbs.pop=pop;
    pop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("return type unknown",19)),$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','pop']};};
    function push(element$7){
        /*Begin dynamic block*/
        return JSNumber($$jSArrayAbs.$native.push(/*NULL PARAM!*/element$7));
        /*End dynamic block*/
    }
    $$jSArrayAbs.push=push;
    push.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','push']};};
    function reverse(){
        /*Begin dynamic block*/
        $$jSArrayAbs.$native.reverse();
        /*End dynamic block*/
    }
    $$jSArrayAbs.reverse=reverse;
    reverse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','reverse']};};
    function shift(){
        /*Begin dynamic block*/
        return (tmpvar$8=$$jSArrayAbs.$native.shift(),$$$cl1.isOfType(tmpvar$8,{t:$$$cl1.Anything})?tmpvar$8:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'63:19-63:32','array.ceylon'));
        /*End dynamic block*/
    }
    $$jSArrayAbs.shift=shift;
    shift.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("return type unknown",19)),$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','shift']};};
    function sort(){
        /*Begin dynamic block*/
        return JSArray($$jSArrayAbs.$native.sort());
        /*End dynamic block*/
    }
    $$jSArrayAbs.sort=sort;
    sort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','sort']};};
    function sortCompare(compare$9){
        /*Begin dynamic block*/
        return JSArray($$jSArrayAbs.$native.sort(/*NULL PARAM!*/compare$9));
        /*End dynamic block*/
    }
    $$jSArrayAbs.sortCompare=sortCompare;
    sortCompare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'compare',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','sortCompare']};};
    function splice(index$10,howMany$11,elements$12){
        if(elements$12===undefined){elements$12=$$$cl1.getEmpty();}
        
        var case$13=index$10;
        if ($$$cl1.isOfType(index$10,{t:$$$cl1.Integer})) {
            
            var case$14=howMany$11;
            if ($$$cl1.isOfType(howMany$11,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return JSArray(JSFunction($$jSArrayAbs.$native.splice).$apply(null,(tmpvar$15=(typeof createArray==='undefined'||createArray===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: createArray")),'86:67-86:77','array.ceylon'):createArray)(/*NULL PARAM!*/case$13/*NULL PARAM!*/,case$14).concat(/*NULL PARAM!*/elements$12).native,$$$cl1.isOfType(tmpvar$15,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$15:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'86:67-86:117','array.ceylon'))));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(howMany$11,{t:JSNumber})) {
                /*Begin dynamic block*/
                return JSArray(JSFunction($$jSArrayAbs.$native.splice).$apply(null,(tmpvar$16=(typeof createArray==='undefined'||createArray===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: createArray")),'91:67-91:77','array.ceylon'):createArray)(/*NULL PARAM!*/case$13/*NULL PARAM!*/,case$14.$native).concat(/*NULL PARAM!*/elements$12).native,$$$cl1.isOfType(tmpvar$16,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$16:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'91:67-91:124','array.ceylon'))));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(index$10,{t:JSNumber})) {
            
            var case$17=howMany$11;
            if ($$$cl1.isOfType(howMany$11,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return JSArray(JSFunction($$jSArrayAbs.$native.splice).$apply(null,(tmpvar$18=(typeof createArray==='undefined'||createArray===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: createArray")),'99:73-99:83','array.ceylon'):createArray)(/*NULL PARAM!*/case$13.$native/*NULL PARAM!*/,case$17).concat(/*NULL PARAM!*/elements$12).native,$$$cl1.isOfType(tmpvar$18,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$18:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'99:73-99:130','array.ceylon'))));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(howMany$11,{t:JSNumber})) {
                /*Begin dynamic block*/
                return JSArray(JSFunction($$jSArrayAbs.$native.splice).$apply(null,(tmpvar$19=(typeof createArray==='undefined'||createArray===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: createArray")),'104:67-104:77','array.ceylon'):createArray)(/*NULL PARAM!*/case$13.$native/*NULL PARAM!*/,case$17.$native).concat(/*NULL PARAM!*/elements$12).native,$$$cl1.isOfType(tmpvar$19,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$19:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'104:67-104:131','array.ceylon'))));
                /*End dynamic block*/
            }
        }
    }
    $$jSArrayAbs.splice=splice;
    splice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'howMany',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'elements',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','splice']};};
    function unshift(elements$20){
        if(elements$20===undefined){elements$20=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JSNumber($$jSArrayAbs.$native.push.unshift(/*NULL PARAM!*/null/*NULL PARAM!*/,elements$20));
        /*End dynamic block*/
    }
    $$jSArrayAbs.unshift=unshift;
    unshift.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'elements',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','unshift']};};
    function concat(elementsOrArrays$21){
        if(elementsOrArrays$21===undefined){elementsOrArrays$21=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JSArray(JSFunction($$jSArrayAbs.$native.concat).$apply(null,elementsOrArrays$21));
        /*End dynamic block*/
    }
    $$jSArrayAbs.concat=concat;
    concat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'elementsOrArrays',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','concat']};};
    function concatArrays(arrays$22){
        if(arrays$22===undefined){arrays$22=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JSArray(JSFunction($$jSArrayAbs.$native.concat).$apply(null,(tmpvar$23=(function(){
            var lst$24=[];
            var it$25=arrays$22.iterator();
            var elem$26;
            while ((elem$26=it$25.next())!==$$$cl1.getFinished()){
                lst$24.push(elem$26.$native);
            }
            return $$$cl1.ArraySequence(lst$24);
        }()),$$$cl1.isOfType(tmpvar$23,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$23:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'126:65-126:78','array.ceylon'))));
        /*End dynamic block*/
    }
    $$jSArrayAbs.concatArrays=concatArrays;
    concatArrays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'arrays',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:JSArray}}},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','concatArrays']};};
    $$jSArrayAbs.join$defs$separator=function(separator$27){return $$$cl1.String(",",1);};
    function join(separator$27){
        if(separator$27===undefined){separator$27=$$jSArrayAbs.join$defs$separator(separator$27);}
        /*Begin dynamic block*/
        return JSString($$jSArrayAbs.$native.join(/*NULL PARAM!*/(typeof sparator==='undefined'||sparator===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: sparator")),'132:40-132:47','array.ceylon'):sparator)));
        /*End dynamic block*/
    }
    $$jSArrayAbs.join=join;
    join.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'separator',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','join']};};
    $$jSArrayAbs.slice$defs$end=function(begin$28,end$29){return null;};
    function slice(begin$28,end$29){
        if(end$29===undefined){end$29=$$jSArrayAbs.slice$defs$end(begin$28,end$29);}
        
        var case$30=begin$28;
        if ($$$cl1.isOfType(begin$28,{t:$$$cl1.Integer})) {
            
            var case$31=end$29;
            if ($$$cl1.isOfType(end$29,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.slice(/*NULL PARAM!*/case$30/*NULL PARAM!*/,case$31));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(end$29,{t:JSNumber})) {
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.slice(/*NULL PARAM!*/case$30/*NULL PARAM!*/,case$31.$native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(end$29,{t:$$$cl1.Null})) {
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.slice(/*NULL PARAM!*/case$30));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(begin$28,{t:JSNumber})) {
            
            var case$32=end$29;
            if ($$$cl1.isOfType(end$29,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.slice(/*NULL PARAM!*/case$30.$native/*NULL PARAM!*/,case$32));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(end$29,{t:JSNumber})) {
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.slice(/*NULL PARAM!*/case$30.$native/*NULL PARAM!*/,case$32.$native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(end$29,{t:$$$cl1.Null})) {
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.slice(/*NULL PARAM!*/case$30.$native));
                /*End dynamic block*/
            }
        }
    }
    $$jSArrayAbs.slice=slice;
    slice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'begin',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'end',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','slice']};};
    $$jSArrayAbs.indexOf$defs$fromIndex=function(searchElement$33,fromIndex$34){return null;};
    function indexOf(searchElement$33,fromIndex$34){
        if(fromIndex$34===undefined){fromIndex$34=$$jSArrayAbs.indexOf$defs$fromIndex(searchElement$33,fromIndex$34);}
        /*Begin dynamic block*/
        return JSNumber($$jSArrayAbs.$native.indexOf(/*NULL PARAM!*/searchElement$33/*NULL PARAM!*/,fromIndex$34));
        /*End dynamic block*/
    }
    $$jSArrayAbs.indexOf=indexOf;
    indexOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'searchElement',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','indexOf']};};
    $$jSArrayAbs.lastIndexOf$defs$fromIndex=function(searchElement$35,fromIndex$36){return null;};
    function lastIndexOf(searchElement$35,fromIndex$36){
        if(fromIndex$36===undefined){fromIndex$36=$$jSArrayAbs.lastIndexOf$defs$fromIndex(searchElement$35,fromIndex$36);}
        
        var case$37=fromIndex$36;
        if ($$$cl1.isOfType(fromIndex$36,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            return JSNumber($$jSArrayAbs.$native.indexOf(/*NULL PARAM!*/searchElement$35/*NULL PARAM!*/,case$37));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(fromIndex$36,{t:JSNumber})) {
            /*Begin dynamic block*/
            return JSNumber($$jSArrayAbs.$native.indexOf(/*NULL PARAM!*/searchElement$35/*NULL PARAM!*/,case$37.$native));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(fromIndex$36,{t:$$$cl1.Null})) {
            /*Begin dynamic block*/
            return JSNumber($$jSArrayAbs.$native.indexOf(/*NULL PARAM!*/searchElement$35));
            /*End dynamic block*/
        }
    }
    $$jSArrayAbs.lastIndexOf=lastIndexOf;
    lastIndexOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'searchElement',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','lastIndexOf']};};
    $$jSArrayAbs.forEach$defs$context=function(callback$38,context$39){return null;};
    function forEach(callback$38,context$39){
        if(context$39===undefined){context$39=$$jSArrayAbs.forEach$defs$context(callback$38,context$39);}
        /*Begin dynamic block*/
        $$jSArrayAbs.$native.forEach(/*NULL PARAM!*/callback$38/*NULL PARAM!*/,context$39);
        /*End dynamic block*/
    }
    $$jSArrayAbs.forEach=forEach;
    forEach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','forEach']};};
    $$jSArrayAbs.every$defs$context=function(callback$40,context$41){return null;};
    function every(callback$40,context$41){
        if(context$41===undefined){context$41=$$jSArrayAbs.every$defs$context(callback$40,context$41);}
        /*Begin dynamic block*/
        if($$jSArrayAbs.$native.every(/*NULL PARAM!*/callback$40/*NULL PARAM!*/,context$41)){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jSArrayAbs.every=every;
    every.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','every']};};
    $$jSArrayAbs.some$defs$context=function(callback$42,context$43){return null;};
    function some(callback$42,context$43){
        if(context$43===undefined){context$43=$$jSArrayAbs.some$defs$context(callback$42,context$43);}
        /*Begin dynamic block*/
        if($$jSArrayAbs.$native.some(/*NULL PARAM!*/callback$42/*NULL PARAM!*/,context$43)){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jSArrayAbs.some=some;
    some.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','some']};};
    $$jSArrayAbs.filter$defs$context=function(callback$44,context$45){return null;};
    function filter(callback$44,context$45){
        if(context$45===undefined){context$45=$$jSArrayAbs.filter$defs$context(callback$44,context$45);}
        /*Begin dynamic block*/
        return JSArray($$jSArrayAbs.$native.filter(/*NULL PARAM!*/callback$44/*NULL PARAM!*/,context$45));
        /*End dynamic block*/
    }
    $$jSArrayAbs.filter=filter;
    filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','filter']};};
    $$jSArrayAbs.map$defs$context=function(callback$46,context$47){return null;};
    function map(callback$46,context$47){
        if(context$47===undefined){context$47=$$jSArrayAbs.map$defs$context(callback$46,context$47);}
        /*Begin dynamic block*/
        return JSArray($$jSArrayAbs.$native.map(/*NULL PARAM!*/callback$46/*NULL PARAM!*/,context$47));
        /*End dynamic block*/
    }
    $$jSArrayAbs.map=map;
    map.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','map']};};
    $$jSArrayAbs.reduce$defs$initialValue=function(callback$48,initialValue$49){return null;};
    function reduce(callback$48,initialValue$49){
        if(initialValue$49===undefined){initialValue$49=$$jSArrayAbs.reduce$defs$initialValue(callback$48,initialValue$49);}
        /*Begin dynamic block*/
        return JSArray($$jSArrayAbs.$native.reduce(/*NULL PARAM!*/callback$48/*NULL PARAM!*/,initialValue$49));
        /*End dynamic block*/
    }
    $$jSArrayAbs.reduce=reduce;
    reduce.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'initialValue',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','reduce']};};
    $$jSArrayAbs.reduceRight$defs$initialValue=function(callback$50,initialValue$51){return null;};
    function reduceRight(callback$50,initialValue$51){
        if(initialValue$51===undefined){initialValue$51=$$jSArrayAbs.reduceRight$defs$initialValue(callback$50,initialValue$51);}
        /*Begin dynamic block*/
        return JSArray($$jSArrayAbs.$native.reduceRight(/*NULL PARAM!*/callback$50/*NULL PARAM!*/,initialValue$51));
        /*End dynamic block*/
    }
    $$jSArrayAbs.reduceRight=reduceRight;
    reduceRight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'initialValue',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','reduceRight']};};
    return $$jSArrayAbs;
}
JSArrayAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.language','JSArrayAbs']};};
exports.JSArrayAbs=JSArrayAbs;
function $init$JSArrayAbs(){
    if (JSArrayAbs.$$===undefined){
        $$$cl1.initTypeProto(JSArrayAbs,'ceylon.js.language::JSArrayAbs',$init$JSObjectAbs());
    }
    return JSArrayAbs;
}
exports.$init$JSArrayAbs=$init$JSArrayAbs;
$init$JSArrayAbs();
function JSArray(n$52, $$jSArray){
    $init$JSArray();
    if ($$jSArray===undefined)$$jSArray=new JSArray.$$;
    $$jSArray.n$52_=n$52;
    JSArrayAbs($$jSArray);
    $$$cl1.defineAttr($$jSArray,'n$52',function(){return this.n$52_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSArray,d:['ceylon.js.language','JSArray','$at','n']};});
    $$jSArray.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSArray,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.language','JSArray','$at','native']};}};
    /*Begin dynamic block*/
    $$jSArray.$native=n$52;/*End dynamic block*/
    return $$jSArray;
}
JSArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSArrayAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSArray']};};
exports.JSArray=JSArray;
function $init$JSArray(){
    if (JSArray.$$===undefined){
        $$$cl1.initTypeProto(JSArray,'ceylon.js.language::JSArray',$init$JSArrayAbs());
    }
    return JSArray;
}
exports.$init$JSArray=$init$JSArray;
$init$JSArray();
function createJSDateNow(){
    /*Begin dynamic block*/
    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'3:16-3:19','date.ceylon'):Date)());
    /*End dynamic block*/
}
exports.createJSDateNow=createJSDateNow;
createJSDateNow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSDate},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','createJSDateNow']};};
function createJSDate(val$53){
    /*Begin dynamic block*/
    
    var case$54=val$53;
    if ($$$cl1.isOfType(val$53,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]})) {
        return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'11:17-11:20','date.ceylon'):Date)(/*NULL PARAM!*/case$54));
    }else if ($$$cl1.isOfType(val$53,{t:JSNumber})) {
        return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'14:17-14:20','date.ceylon'):Date)(/*NULL PARAM!*/case$54.$native));
    }/*End dynamic block*/
}
exports.createJSDate=createJSDate;
createJSDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSDate},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','createJSDate']};};
function createJSDateYMD(year$55,month$56,day$57,hour$58,minute$59,second$60,milli$61){
    if(hour$58===undefined){hour$58=null;}
    if(minute$59===undefined){minute$59=null;}
    if(second$60===undefined){second$60=null;}
    if(milli$61===undefined){milli$61=null;}
    
    var case$62=hour$58;
    if ($$$cl1.isOfType(hour$58,{t:JSNumber})) {
        
        var case$63=minute$59;
        if ($$$cl1.isOfType(minute$59,{t:JSNumber})) {
            
            var case$64=second$60;
            if ($$$cl1.isOfType(second$60,{t:JSNumber})) {
                
                var case$65=milli$61;
                if ($$$cl1.isOfType(milli$61,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'30:20-30:23','date.ceylon'):Date)(/*NULL PARAM!*/year$55.$native/*NULL PARAM!*/,month$56.$native/*NULL PARAM!*/,day$57.$native/*NULL PARAM!*/,case$62.$native/*NULL PARAM!*/,case$63.$native/*NULL PARAM!*/,case$64.$native/*NULL PARAM!*/,case$65.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$61,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'35:20-35:23','date.ceylon'):Date)(/*NULL PARAM!*/year$55.$native/*NULL PARAM!*/,month$56.$native/*NULL PARAM!*/,day$57.$native/*NULL PARAM!*/,case$62.$native/*NULL PARAM!*/,case$63.$native/*NULL PARAM!*/,case$64.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(second$60,{t:$$$cl1.Null})) {
                
                var case$66=milli$61;
                if ($$$cl1.isOfType(milli$61,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'43:20-43:23','date.ceylon'):Date)(/*NULL PARAM!*/year$55.$native/*NULL PARAM!*/,month$56.$native/*NULL PARAM!*/,day$57.$native/*NULL PARAM!*/,case$62.$native/*NULL PARAM!*/,case$63.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$66.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$61,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'48:20-48:23','date.ceylon'):Date)(/*NULL PARAM!*/year$55.$native/*NULL PARAM!*/,month$56.$native/*NULL PARAM!*/,day$57.$native/*NULL PARAM!*/,case$62.$native/*NULL PARAM!*/,case$63.$native));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(minute$59,{t:$$$cl1.Null})) {
            
            var case$67=second$60;
            if ($$$cl1.isOfType(second$60,{t:JSNumber})) {
                
                var case$68=milli$61;
                if ($$$cl1.isOfType(milli$61,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'59:20-59:23','date.ceylon'):Date)(/*NULL PARAM!*/year$55.$native/*NULL PARAM!*/,month$56.$native/*NULL PARAM!*/,day$57.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$67.$native/*NULL PARAM!*/,case$68.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$61,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'64:20-64:23','date.ceylon'):Date)(/*NULL PARAM!*/year$55.$native/*NULL PARAM!*/,month$56.$native/*NULL PARAM!*/,day$57.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$67.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(second$60,{t:$$$cl1.Null})) {
                
                var case$69=milli$61;
                if ($$$cl1.isOfType(milli$61,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'72:20-72:23','date.ceylon'):Date)(/*NULL PARAM!*/year$55.$native/*NULL PARAM!*/,month$56.$native/*NULL PARAM!*/,day$57.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$69.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$61,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'77:20-77:23','date.ceylon'):Date)(/*NULL PARAM!*/year$55.$native/*NULL PARAM!*/,month$56.$native/*NULL PARAM!*/,day$57.$native));
                    /*End dynamic block*/
                }
            }
        }
    }else if ($$$cl1.isOfType(hour$58,{t:$$$cl1.Null})) {
        
        var case$70=minute$59;
        if ($$$cl1.isOfType(minute$59,{t:JSNumber})) {
            
            var case$71=second$60;
            if ($$$cl1.isOfType(second$60,{t:JSNumber})) {
                
                var case$72=milli$61;
                if ($$$cl1.isOfType(milli$61,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'91:20-91:23','date.ceylon'):Date)(/*NULL PARAM!*/year$55.$native/*NULL PARAM!*/,month$56.$native/*NULL PARAM!*/,day$57.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$70.$native/*NULL PARAM!*/,case$71.$native/*NULL PARAM!*/,case$72.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$61,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'96:20-96:23','date.ceylon'):Date)(/*NULL PARAM!*/year$55.$native/*NULL PARAM!*/,month$56.$native/*NULL PARAM!*/,day$57.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$70.$native/*NULL PARAM!*/,case$71.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(second$60,{t:$$$cl1.Null})) {
                
                var case$73=milli$61;
                if ($$$cl1.isOfType(milli$61,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'104:20-104:23','date.ceylon'):Date)(/*NULL PARAM!*/year$55.$native/*NULL PARAM!*/,month$56.$native/*NULL PARAM!*/,day$57.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$70.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$73.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$61,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'109:20-109:23','date.ceylon'):Date)(/*NULL PARAM!*/year$55.$native/*NULL PARAM!*/,month$56.$native/*NULL PARAM!*/,day$57.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$70.$native));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(minute$59,{t:$$$cl1.Null})) {
            
            var case$74=second$60;
            if ($$$cl1.isOfType(second$60,{t:JSNumber})) {
                
                var case$75=milli$61;
                if ($$$cl1.isOfType(milli$61,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'120:20-120:23','date.ceylon'):Date)(/*NULL PARAM!*/year$55.$native/*NULL PARAM!*/,month$56.$native/*NULL PARAM!*/,day$57.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$74.$native/*NULL PARAM!*/,case$75.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$61,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'125:20-125:23','date.ceylon'):Date)(/*NULL PARAM!*/year$55.$native/*NULL PARAM!*/,month$56.$native/*NULL PARAM!*/,day$57.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$74.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(second$60,{t:$$$cl1.Null})) {
                
                var case$76=milli$61;
                if ($$$cl1.isOfType(milli$61,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'133:20-133:23','date.ceylon'):Date)(/*NULL PARAM!*/year$55.$native/*NULL PARAM!*/,month$56.$native/*NULL PARAM!*/,day$57.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$76.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$61,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'138:20-138:23','date.ceylon'):Date)(/*NULL PARAM!*/year$55.$native/*NULL PARAM!*/,month$56.$native/*NULL PARAM!*/,day$57.$native));
                    /*End dynamic block*/
                }
            }
        }
    }
}
exports.createJSDateYMD=createJSDateYMD;
createJSDateYMD.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSDate},$ps:[{$nm:'year',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'minute',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'second',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'milli',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','createJSDateYMD']};};
function createJSDateYMDInt(year$77,month$78,day$79,hour$80,minute$81,second$82,milli$83){
    if(hour$80===undefined){hour$80=null;}
    if(minute$81===undefined){minute$81=null;}
    if(second$82===undefined){second$82=null;}
    if(milli$83===undefined){milli$83=null;}
    /*Begin dynamic block*/
    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'149:16-149:19','date.ceylon'):Date)(/*NULL PARAM!*/year$77/*NULL PARAM!*/,month$78/*NULL PARAM!*/,day$79/*NULL PARAM!*/,hour$80/*NULL PARAM!*/,minute$81/*NULL PARAM!*/,second$82/*NULL PARAM!*/,milli$83));
    /*End dynamic block*/
}
exports.createJSDateYMDInt=createJSDateYMDInt;
createJSDateYMDInt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSDate},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}},{$nm:'minute',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}},{$nm:'second',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}},{$nm:'milli',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','createJSDateYMDInt']};};
function dateNow(){
    /*Begin dynamic block*/
    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'155:18-155:21','date.ceylon'):Date).now());
    /*End dynamic block*/
}
exports.dateNow=dateNow;
dateNow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','dateNow']};};
function dateParse(dateTime$84){
    
    var case$85=dateTime$84;
    if ($$$cl1.isOfType(dateTime$84,{t:$$$cl1.String})) {
        /*Begin dynamic block*/
        return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'163:19-163:22','date.ceylon'):Date).parse(/*NULL PARAM!*/case$85.valueOf()));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(dateTime$84,{t:JSString})) {
        /*Begin dynamic block*/
        return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'168:19-168:22','date.ceylon'):Date).parse(/*NULL PARAM!*/case$85.$native));
        /*End dynamic block*/
    }
}
exports.dateParse=dateParse;
dateParse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'dateTime',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','dateParse']};};
function dateUTC(year$86,month$87,day$88,hour$89,minute$90,second$91,milli$92){
    if(hour$89===undefined){hour$89=null;}
    if(minute$90===undefined){minute$90=null;}
    if(second$91===undefined){second$91=null;}
    if(milli$92===undefined){milli$92=null;}
    
    var case$93=hour$89;
    if ($$$cl1.isOfType(hour$89,{t:JSNumber})) {
        
        var case$94=minute$90;
        if ($$$cl1.isOfType(minute$90,{t:JSNumber})) {
            
            var case$95=second$91;
            if ($$$cl1.isOfType(second$91,{t:JSNumber})) {
                
                var case$96=milli$92;
                if ($$$cl1.isOfType(milli$92,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'184:22-184:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$86.$native/*NULL PARAM!*/,month$87.$native/*NULL PARAM!*/,day$88.$native/*NULL PARAM!*/,case$93.$native/*NULL PARAM!*/,case$94.$native/*NULL PARAM!*/,case$95.$native/*NULL PARAM!*/,case$96.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$92,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'189:22-189:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$86.$native/*NULL PARAM!*/,month$87.$native/*NULL PARAM!*/,day$88.$native/*NULL PARAM!*/,case$93.$native/*NULL PARAM!*/,case$94.$native/*NULL PARAM!*/,case$95.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(second$91,{t:$$$cl1.Null})) {
                
                var case$97=milli$92;
                if ($$$cl1.isOfType(milli$92,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'197:22-197:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$86.$native/*NULL PARAM!*/,month$87.$native/*NULL PARAM!*/,day$88.$native/*NULL PARAM!*/,case$93.$native/*NULL PARAM!*/,case$94.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$97.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$92,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'202:22-202:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$86.$native/*NULL PARAM!*/,month$87.$native/*NULL PARAM!*/,day$88.$native/*NULL PARAM!*/,case$93.$native/*NULL PARAM!*/,case$94.$native));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(minute$90,{t:$$$cl1.Null})) {
            
            var case$98=second$91;
            if ($$$cl1.isOfType(second$91,{t:JSNumber})) {
                
                var case$99=milli$92;
                if ($$$cl1.isOfType(milli$92,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'213:22-213:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$86.$native/*NULL PARAM!*/,month$87.$native/*NULL PARAM!*/,day$88.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$98.$native/*NULL PARAM!*/,case$99.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$92,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'218:22-218:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$86.$native/*NULL PARAM!*/,month$87.$native/*NULL PARAM!*/,day$88.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$98.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(second$91,{t:$$$cl1.Null})) {
                
                var case$100=milli$92;
                if ($$$cl1.isOfType(milli$92,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'226:22-226:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$86.$native/*NULL PARAM!*/,month$87.$native/*NULL PARAM!*/,day$88.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$100.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$92,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'231:22-231:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$86.$native/*NULL PARAM!*/,month$87.$native/*NULL PARAM!*/,day$88.$native));
                    /*End dynamic block*/
                }
            }
        }
    }else if ($$$cl1.isOfType(hour$89,{t:$$$cl1.Null})) {
        
        var case$101=minute$90;
        if ($$$cl1.isOfType(minute$90,{t:JSNumber})) {
            
            var case$102=second$91;
            if ($$$cl1.isOfType(second$91,{t:JSNumber})) {
                
                var case$103=milli$92;
                if ($$$cl1.isOfType(milli$92,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'245:22-245:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$86.$native/*NULL PARAM!*/,month$87.$native/*NULL PARAM!*/,day$88.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$101.$native/*NULL PARAM!*/,case$102.$native/*NULL PARAM!*/,case$103.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$92,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'250:22-250:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$86.$native/*NULL PARAM!*/,month$87.$native/*NULL PARAM!*/,day$88.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$101.$native/*NULL PARAM!*/,case$102.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(second$91,{t:$$$cl1.Null})) {
                
                var case$104=milli$92;
                if ($$$cl1.isOfType(milli$92,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'258:22-258:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$86.$native/*NULL PARAM!*/,month$87.$native/*NULL PARAM!*/,day$88.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$101.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$104.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$92,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'263:22-263:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$86.$native/*NULL PARAM!*/,month$87.$native/*NULL PARAM!*/,day$88.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$101.$native));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(minute$90,{t:$$$cl1.Null})) {
            
            var case$105=second$91;
            if ($$$cl1.isOfType(second$91,{t:JSNumber})) {
                
                var case$106=milli$92;
                if ($$$cl1.isOfType(milli$92,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'274:22-274:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$86.$native/*NULL PARAM!*/,month$87.$native/*NULL PARAM!*/,day$88.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$105.$native/*NULL PARAM!*/,case$106.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$92,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'279:22-279:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$86.$native/*NULL PARAM!*/,month$87.$native/*NULL PARAM!*/,day$88.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$105.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(second$91,{t:$$$cl1.Null})) {
                
                var case$107=milli$92;
                if ($$$cl1.isOfType(milli$92,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'287:22-287:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$86.$native/*NULL PARAM!*/,month$87.$native/*NULL PARAM!*/,day$88.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$107.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$92,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'292:22-292:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$86.$native/*NULL PARAM!*/,month$87.$native/*NULL PARAM!*/,day$88.$native));
                    /*End dynamic block*/
                }
            }
        }
    }
}
exports.dateUTC=dateUTC;
dateUTC.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'year',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'minute',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'second',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'milli',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','dateUTC']};};
function dateUTCInt(year$108,month$109,day$110,hour$111,minute$112,second$113,milli$114){
    if(hour$111===undefined){hour$111=null;}
    if(minute$112===undefined){minute$112=null;}
    if(second$113===undefined){second$113=null;}
    if(milli$114===undefined){milli$114=null;}
    /*Begin dynamic block*/
    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'303:16-303:19','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$108/*NULL PARAM!*/,month$109/*NULL PARAM!*/,day$110/*NULL PARAM!*/,hour$111/*NULL PARAM!*/,minute$112/*NULL PARAM!*/,second$113/*NULL PARAM!*/,milli$114));
    /*End dynamic block*/
}
exports.dateUTCInt=dateUTCInt;
dateUTCInt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSDate},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}},{$nm:'minute',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}},{$nm:'second',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}},{$nm:'milli',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','dateUTCInt']};};
function JSDateAbs($$jSDateAbs){
    $init$JSDateAbs();
    if ($$jSDateAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$jSDateAbs);
    function getDate(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getDate());
        /*End dynamic block*/
    }
    $$jSDateAbs.getDate=getDate;
    getDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getDate']};};
    function getDay(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getDay());
        /*End dynamic block*/
    }
    $$jSDateAbs.getDay=getDay;
    getDay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getDay']};};
    function getFullYear(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getFullYear());
        /*End dynamic block*/
    }
    $$jSDateAbs.getFullYear=getFullYear;
    getFullYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getFullYear']};};
    function getHours(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getHours());
        /*End dynamic block*/
    }
    $$jSDateAbs.getHours=getHours;
    getHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getHours']};};
    function getMilliseconds(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getMilliseconds());
        /*End dynamic block*/
    }
    $$jSDateAbs.getMilliseconds=getMilliseconds;
    getMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getMilliseconds']};};
    function getMinutes(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getMinutes());
        /*End dynamic block*/
    }
    $$jSDateAbs.getMinutes=getMinutes;
    getMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getMinutes']};};
    function getMonth(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getMonth());
        /*End dynamic block*/
    }
    $$jSDateAbs.getMonth=getMonth;
    getMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getMonth']};};
    function getSeconds(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getSeconds());
        /*End dynamic block*/
    }
    $$jSDateAbs.getSeconds=getSeconds;
    getSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getSeconds']};};
    function getTime(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getTime());
        /*End dynamic block*/
    }
    $$jSDateAbs.getTime=getTime;
    getTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getTime']};};
    function getTimezoneOffset(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getTimezoneOffset());
        /*End dynamic block*/
    }
    $$jSDateAbs.getTimezoneOffset=getTimezoneOffset;
    getTimezoneOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getTimezoneOffset']};};
    function getUTCDate(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getUTCDate());
        /*End dynamic block*/
    }
    $$jSDateAbs.getUTCDate=getUTCDate;
    getUTCDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getUTCDate']};};
    function getUTCDay(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getUTCDay());
        /*End dynamic block*/
    }
    $$jSDateAbs.getUTCDay=getUTCDay;
    getUTCDay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getUTCDay']};};
    function getUTCFullYear(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getUTCFullYear());
        /*End dynamic block*/
    }
    $$jSDateAbs.getUTCFullYear=getUTCFullYear;
    getUTCFullYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getUTCFullYear']};};
    function getUTCHours(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getUTCHours());
        /*End dynamic block*/
    }
    $$jSDateAbs.getUTCHours=getUTCHours;
    getUTCHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getUTCHours']};};
    function getUTCMilliseconds(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getUTCMilliseconds());
        /*End dynamic block*/
    }
    $$jSDateAbs.getUTCMilliseconds=getUTCMilliseconds;
    getUTCMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getUTCMilliseconds']};};
    function getUTCMinutes(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getUTCMinutes());
        /*End dynamic block*/
    }
    $$jSDateAbs.getUTCMinutes=getUTCMinutes;
    getUTCMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getUTCMinutes']};};
    function getUTCMonth(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getUTCMonth());
        /*End dynamic block*/
    }
    $$jSDateAbs.getUTCMonth=getUTCMonth;
    getUTCMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getUTCMonth']};};
    function getUTCSeconds(){
        /*Begin dynamic block*/
        return JSNumber($$jSDateAbs.$native.getUTCSeconds());
        /*End dynamic block*/
    }
    $$jSDateAbs.getUTCSeconds=getUTCSeconds;
    getUTCSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getUTCSeconds']};};
    function setDate(day$115){
        
        var case$116=day$115;
        if ($$$cl1.isOfType(day$115,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setDate(/*NULL PARAM!*/case$116);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(day$115,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setDate(/*NULL PARAM!*/case$116.$native);
            /*End dynamic block*/
        }
    }
    $$jSDateAbs.setDate=setDate;
    setDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'day',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setDate']};};
    function setFullYear(year$117){
        
        var case$118=year$117;
        if ($$$cl1.isOfType(year$117,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setFullYear(/*NULL PARAM!*/case$118);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(year$117,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setFullYear(/*NULL PARAM!*/case$118.$native);
            /*End dynamic block*/
        }
    }
    $$jSDateAbs.setFullYear=setFullYear;
    setFullYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'year',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setFullYear']};};
    function setHours(hour$119){
        
        var case$120=hour$119;
        if ($$$cl1.isOfType(hour$119,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setHours(/*NULL PARAM!*/case$120);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(hour$119,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setHours(/*NULL PARAM!*/case$120.$native);
            /*End dynamic block*/
        }
    }
    $$jSDateAbs.setHours=setHours;
    setHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'hour',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setHours']};};
    function setMilliseconds(milli$121){
        
        var case$122=milli$121;
        if ($$$cl1.isOfType(milli$121,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setMilliseconds(/*NULL PARAM!*/case$122);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(milli$121,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setMilliseconds(/*NULL PARAM!*/case$122.$native);
            /*End dynamic block*/
        }
    }
    $$jSDateAbs.setMilliseconds=setMilliseconds;
    setMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'milli',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setMilliseconds']};};
    function setMinutes(minutes$123){
        
        var case$124=minutes$123;
        if ($$$cl1.isOfType(minutes$123,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setMinutes(/*NULL PARAM!*/case$124);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(minutes$123,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setMinutes(/*NULL PARAM!*/case$124.$native);
            /*End dynamic block*/
        }
    }
    $$jSDateAbs.setMinutes=setMinutes;
    setMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'minutes',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setMinutes']};};
    function setMonth(month$125){
        
        var case$126=month$125;
        if ($$$cl1.isOfType(month$125,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setMonth(/*NULL PARAM!*/case$126);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(month$125,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setMonth(/*NULL PARAM!*/case$126.$native);
            /*End dynamic block*/
        }
    }
    $$jSDateAbs.setMonth=setMonth;
    setMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setMonth']};};
    function setSeconds(seconds$127){
        
        var case$128=seconds$127;
        if ($$$cl1.isOfType(seconds$127,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setSeconds(/*NULL PARAM!*/case$128);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(seconds$127,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setSeconds(/*NULL PARAM!*/case$128.$native);
            /*End dynamic block*/
        }
    }
    $$jSDateAbs.setSeconds=setSeconds;
    setSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'seconds',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setSeconds']};};
    function setTime(milli$129){
        
        var case$130=milli$129;
        if ($$$cl1.isOfType(milli$129,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setTime(/*NULL PARAM!*/case$130);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(milli$129,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setTime(/*NULL PARAM!*/case$130.$native);
            /*End dynamic block*/
        }
    }
    $$jSDateAbs.setTime=setTime;
    setTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'milli',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setTime']};};
    function setUTCDate(day$131){
        
        var case$132=day$131;
        if ($$$cl1.isOfType(day$131,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setUTCDate(/*NULL PARAM!*/case$132);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(day$131,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setUTCDate(/*NULL PARAM!*/case$132.$native);
            /*End dynamic block*/
        }
    }
    $$jSDateAbs.setUTCDate=setUTCDate;
    setUTCDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'day',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setUTCDate']};};
    function setUTCFullYear(year$133){
        
        var case$134=year$133;
        if ($$$cl1.isOfType(year$133,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setUTCFullYear(/*NULL PARAM!*/case$134);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(year$133,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setUTCFullYear(/*NULL PARAM!*/case$134.$native);
            /*End dynamic block*/
        }
    }
    $$jSDateAbs.setUTCFullYear=setUTCFullYear;
    setUTCFullYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'year',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setUTCFullYear']};};
    function setUTCHours(hours$135){
        
        var case$136=hours$135;
        if ($$$cl1.isOfType(hours$135,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setUTCHours(/*NULL PARAM!*/case$136);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(hours$135,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setUTCHours(/*NULL PARAM!*/case$136.$native);
            /*End dynamic block*/
        }
    }
    $$jSDateAbs.setUTCHours=setUTCHours;
    setUTCHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'hours',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setUTCHours']};};
    function setUTCMilliseconds(milli$137){
        
        var case$138=milli$137;
        if ($$$cl1.isOfType(milli$137,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setUTCMilliseconds(/*NULL PARAM!*/case$138);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(milli$137,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setUTCMilliseconds(/*NULL PARAM!*/case$138.$native);
            /*End dynamic block*/
        }
    }
    $$jSDateAbs.setUTCMilliseconds=setUTCMilliseconds;
    setUTCMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'milli',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setUTCMilliseconds']};};
    function setUTCMinutes(minutes$139){
        
        var case$140=minutes$139;
        if ($$$cl1.isOfType(minutes$139,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setUTCMinutes(/*NULL PARAM!*/case$140);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(minutes$139,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setUTCMinutes(/*NULL PARAM!*/case$140.$native);
            /*End dynamic block*/
        }
    }
    $$jSDateAbs.setUTCMinutes=setUTCMinutes;
    setUTCMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'minutes',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setUTCMinutes']};};
    function setUTCMonth(month$141){
        
        var case$142=month$141;
        if ($$$cl1.isOfType(month$141,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setUTCMonth(/*NULL PARAM!*/case$142);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(month$141,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setUTCMonth(/*NULL PARAM!*/case$142.$native);
            /*End dynamic block*/
        }
    }
    $$jSDateAbs.setUTCMonth=setUTCMonth;
    setUTCMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setUTCMonth']};};
    function setUTCSeconds(seconds$143){
        
        var case$144=seconds$143;
        if ($$$cl1.isOfType(seconds$143,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setUTCSeconds(/*NULL PARAM!*/case$144);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(seconds$143,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$jSDateAbs.$native.setUTCSeconds(/*NULL PARAM!*/case$144.$native);
            /*End dynamic block*/
        }
    }
    $$jSDateAbs.setUTCSeconds=setUTCSeconds;
    setUTCSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'seconds',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setUTCSeconds']};};
    function toDateString(){
        /*Begin dynamic block*/
        return JSString($$jSDateAbs.$native.toDateString());
        /*End dynamic block*/
    }
    $$jSDateAbs.toDateString=toDateString;
    toDateString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','toDateString']};};
    function toISOString(){
        /*Begin dynamic block*/
        return JSString($$jSDateAbs.$native.toISOString());
        /*End dynamic block*/
    }
    $$jSDateAbs.toISOString=toISOString;
    toISOString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','toISOString']};};
    function toJSON(){
        /*Begin dynamic block*/
        return JSString($$jSDateAbs.$native.toJSON());
        /*End dynamic block*/
    }
    $$jSDateAbs.toJSON=toJSON;
    toJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','toJSON']};};
    function toLocaleDateString(){
        /*Begin dynamic block*/
        return JSString($$jSDateAbs.$native.toLocaleDateString());
        /*End dynamic block*/
    }
    $$jSDateAbs.toLocaleDateString=toLocaleDateString;
    toLocaleDateString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','toLocaleDateString']};};
    function toLocaleString(){
        /*Begin dynamic block*/
        return JSString($$jSDateAbs.$native.toLocaleString());
        /*End dynamic block*/
    }
    $$jSDateAbs.toLocaleString=toLocaleString;
    toLocaleString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','toLocaleString']};};
    function toLocaleTimeString(){
        /*Begin dynamic block*/
        return JSString($$jSDateAbs.$native.toLocaleTimeString());
        /*End dynamic block*/
    }
    $$jSDateAbs.toLocaleTimeString=toLocaleTimeString;
    toLocaleTimeString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','toLocaleTimeString']};};
    function toTimeString(){
        /*Begin dynamic block*/
        return JSString($$jSDateAbs.$native.toTimeString());
        /*End dynamic block*/
    }
    $$jSDateAbs.toTimeString=toTimeString;
    toTimeString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','toTimeString']};};
    function toUTCString(){
        /*Begin dynamic block*/
        return JSString($$jSDateAbs.$native.toUTCString());
        /*End dynamic block*/
    }
    $$jSDateAbs.toUTCString=toUTCString;
    toUTCString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDateAbs','$m','toUTCString']};};
    return $$jSDateAbs;
}
JSDateAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.language','JSDateAbs']};};
exports.JSDateAbs=JSDateAbs;
function $init$JSDateAbs(){
    if (JSDateAbs.$$===undefined){
        $$$cl1.initTypeProto(JSDateAbs,'ceylon.js.language::JSDateAbs',$init$JSObjectAbs());
    }
    return JSDateAbs;
}
exports.$init$JSDateAbs=$init$JSDateAbs;
$init$JSDateAbs();
function JSDate(n$145, $$jSDate){
    $init$JSDate();
    if ($$jSDate===undefined)$$jSDate=new JSDate.$$;
    $$jSDate.n$145_=n$145;
    JSDateAbs($$jSDate);
    $$$cl1.defineAttr($$jSDate,'n$145',function(){return this.n$145_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSDate,d:['ceylon.js.language','JSDate','$at','n']};});
    $$jSDate.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSDate,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.language','JSDate','$at','native']};}};
    /*Begin dynamic block*/
    $$jSDate.$native=n$145;/*End dynamic block*/
    return $$jSDate;
}
JSDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSDateAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSDate']};};
exports.JSDate=JSDate;
function $init$JSDate(){
    if (JSDate.$$===undefined){
        $$$cl1.initTypeProto(JSDate,'ceylon.js.language::JSDate',$init$JSDateAbs());
    }
    return JSDate;
}
exports.$init$JSDate=$init$JSDate;
$init$JSDate();
function JSFunctionAbs($$jSFunctionAbs){
    $init$JSFunctionAbs();
    if ($$jSFunctionAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$jSFunctionAbs);
    function length(){
        /*Begin dynamic block*/
        return JSNumber($$jSFunctionAbs.$native.length);
        /*End dynamic block*/
    }
    $$jSFunctionAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSFunctionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSFunctionAbs','$m','length']};};
    function bind(thisArg$146,args$147){
        if(args$147===undefined){args$147=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        JSFunction($$jSFunctionAbs.$native.bind).$apply(null,(tmpvar$148=createJSArray([(tmpvar$149=thisArg$146.$native,$$$cl1.isOfType(tmpvar$149,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$149:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'12:53-12:66','function.ceylon'))].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}}})).concat([(tmpvar$150=(function(){
            var lst$151=[];
            var it$152=args$147.iterator();
            var elem$153;
            while ((elem$153=it$152.next())!==$$$cl1.getFinished()){
                lst$151.push(elem$153.$native);
            }
            return $$$cl1.ArraySequence(lst$151);
        }()),$$$cl1.isOfType(tmpvar$150,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$150:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'12:76-12:87','function.ceylon'))].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}}})).$native,$$$cl1.isOfType(tmpvar$148,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$148:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'12:39-12:95','function.ceylon')));
        /*End dynamic block*/
    }
    $$jSFunctionAbs.bind=bind;
    bind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'thisArg',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:JSObject}}},$an:function(){return[];}}],$cont:JSFunctionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSFunctionAbs','$m','bind']};};
    function isGenerator(){
        /*Begin dynamic block*/
        if($$jSFunctionAbs.$native.isGenerator()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jSFunctionAbs.isGenerator=isGenerator;
    isGenerator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JSFunctionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSFunctionAbs','$m','isGenerator']};};
    return $$jSFunctionAbs;
}
JSFunctionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.language','JSFunctionAbs']};};
exports.JSFunctionAbs=JSFunctionAbs;
function $init$JSFunctionAbs(){
    if (JSFunctionAbs.$$===undefined){
        $$$cl1.initTypeProto(JSFunctionAbs,'ceylon.js.language::JSFunctionAbs',$init$JSObjectAbs());
    }
    return JSFunctionAbs;
}
exports.$init$JSFunctionAbs=$init$JSFunctionAbs;
$init$JSFunctionAbs();
function JSFunction(n$154, $$jSFunction){
    $init$JSFunction();
    if ($$jSFunction===undefined)$$jSFunction=new JSFunction.$$;
    $$jSFunction.n$154_=n$154;
    JSFunctionAbs($$jSFunction);
    $$$cl1.defineAttr($$jSFunction,'n$154',function(){return this.n$154_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSFunction,d:['ceylon.js.language','JSFunction','$at','n']};});
    $$jSFunction.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSFunction,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.language','JSFunction','$at','native']};}};
    /*Begin dynamic block*/
    $$jSFunction.$native=n$154;/*End dynamic block*/
    return $$jSFunction;
}
JSFunction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSFunctionAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSFunction']};};
exports.JSFunction=JSFunction;
function $init$JSFunction(){
    if (JSFunction.$$===undefined){
        $$$cl1.initTypeProto(JSFunction,'ceylon.js.language::JSFunction',$init$JSFunctionAbs());
    }
    return JSFunction;
}
exports.$init$JSFunction=$init$JSFunction;
$init$JSFunction();
function eval(js$155){
    /*Begin dynamic block*/
    return (tmpvar$156=eval(js$155),$$$cl1.isOfType(tmpvar$156,{t:$$$cl1.Anything})?tmpvar$156:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'3:9-3:16','main.ceylon'));
    /*End dynamic block*/
}
exports.eval=eval;
eval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'js',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','eval']};};
function isFinite(num$157){
    /*Begin dynamic block*/
    if(isFinite((tmpvar$158=num$157.$native,$$$cl1.isOfType(tmpvar$158,{t:JSNumber})?tmpvar$158:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'9:15-9:24','main.ceylon')))){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.isFinite=isFinite;
isFinite.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'num',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','isFinite']};};
function isNaN(val$159){
    /*Begin dynamic block*/
    if(isNaN(val$159)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.isNaN=isNaN;
isNaN.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','isNaN']};};
function parseInt(int$160,radix$161){
    if(radix$161===undefined){radix$161=(10);}
    
    var case$162=radix$161;
    if ($$$cl1.isOfType(radix$161,{t:$$$cl1.Integer})) {
        /*Begin dynamic block*/
        return JSNumber(parseInt(int$160,case$162));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(radix$161,{t:JSNumber})) {
        /*Begin dynamic block*/
        return JSNumber(parseInt(int$160,(tmpvar$163=case$162.$native,$$$cl1.isOfType(tmpvar$163,{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]})?tmpvar$163:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'36:33-36:44','main.ceylon'))));
        /*End dynamic block*/
    }
}
exports.parseInt=parseInt;
parseInt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'int',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}},{$nm:'radix',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','parseInt']};};
function parseFloat(float$164){
    
    var case$165=float$164;
    if ($$$cl1.isOfType(float$164,{t:$$$cl1.String})) {
        /*Begin dynamic block*/
        return JSNumber(parseFloat(case$165));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(float$164,{t:JSString})) {
        /*Begin dynamic block*/
        return JSNumber(parseFloat((tmpvar$166=case$165.$native,$$$cl1.isOfType(tmpvar$166,{ t:'u', l:[{t:$$$cl1.String},{t:JSString}]})?tmpvar$166:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'50:30-50:41','main.ceylon'))));
        /*End dynamic block*/
    }
}
exports.parseFloat=parseFloat;
parseFloat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'float',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','parseFloat']};};
function mathE(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'5:18-5:21','math.ceylon'):Math).E);
    /*End dynamic block*/
}
exports.mathE=mathE;
mathE.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','mathE']};};
function mathLog2(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'11:18-11:21','math.ceylon'):Math).LN2);
    /*End dynamic block*/
}
exports.mathLog2=mathLog2;
mathLog2.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','mathLog2']};};
function mathLog10(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'17:18-17:21','math.ceylon'):Math).LN10);
    /*End dynamic block*/
}
exports.mathLog10=mathLog10;
mathLog10.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','mathLog10']};};
function mathLog2e(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'23:18-23:21','math.ceylon'):Math).LOG2E);
    /*End dynamic block*/
}
exports.mathLog2e=mathLog2e;
mathLog2e.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','mathLog2e']};};
function mathLog10e(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'29:18-29:21','math.ceylon'):Math).LOG10E);
    /*End dynamic block*/
}
exports.mathLog10e=mathLog10e;
mathLog10e.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','mathLog10e']};};
function mathPi(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'35:18-35:21','math.ceylon'):Math).PI);
    /*End dynamic block*/
}
exports.mathPi=mathPi;
mathPi.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','mathPi']};};
function mathRoot1_2(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'41:18-41:21','math.ceylon'):Math).SQRT1_2);
    /*End dynamic block*/
}
exports.mathRoot1_2=mathRoot1_2;
mathRoot1_2.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','mathRoot1_2']};};
function mathRoot2(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'47:18-47:21','math.ceylon'):Math).SQRT2);
    /*End dynamic block*/
}
exports.mathRoot2=mathRoot2;
mathRoot2.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','mathRoot2']};};
function MathAbs($$mathAbs){
    $init$MathAbs();
    if ($$mathAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$mathAbs);
    function abs(x$167){
        /*Begin dynamic block*/
        return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'55:19-55:22','math.ceylon'):Math).abs(/*NULL PARAM!*/x$167.$native));
        /*End dynamic block*/
    }
    $$mathAbs.abs=abs;
    abs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','abs']};};
    function asin(x$168){
        /*Begin dynamic block*/
        return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'61:19-61:22','math.ceylon'):Math).asin(/*NULL PARAM!*/x$168.$native));
        /*End dynamic block*/
    }
    $$mathAbs.asin=asin;
    asin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','asin']};};
    function atan(x$169){
        /*Begin dynamic block*/
        return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'67:19-67:22','math.ceylon'):Math).asin(/*NULL PARAM!*/x$169.$native));
        /*End dynamic block*/
    }
    $$mathAbs.atan=atan;
    atan.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','atan']};};
    function atan2(y$170,x$171){
        /*Begin dynamic block*/
        return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'73:19-73:22','math.ceylon'):Math).atan2(/*NULL PARAM!*/y$170.$native/*NULL PARAM!*/,x$171.$native));
        /*End dynamic block*/
    }
    $$mathAbs.atan2=atan2;
    atan2.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'y',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','atan2']};};
    function ceil(x$172){
        /*Begin dynamic block*/
        return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'79:19-79:22','math.ceylon'):Math).ceil(/*NULL PARAM!*/x$172.$native));
        /*End dynamic block*/
    }
    $$mathAbs.ceil=ceil;
    ceil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','ceil']};};
    function cos(x$173){
        /*Begin dynamic block*/
        return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'85:19-85:22','math.ceylon'):Math).cos(/*NULL PARAM!*/x$173.$native));
        /*End dynamic block*/
    }
    $$mathAbs.cos=cos;
    cos.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','cos']};};
    function exp(x$174){
        /*Begin dynamic block*/
        return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'91:19-91:22','math.ceylon'):Math).exp(/*NULL PARAM!*/x$174.$native));
        /*End dynamic block*/
    }
    $$mathAbs.exp=exp;
    exp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','exp']};};
    function floor(x$175){
        /*Begin dynamic block*/
        return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'97:19-97:22','math.ceylon'):Math).floor(/*NULL PARAM!*/x$175.$native));
        /*End dynamic block*/
    }
    $$mathAbs.floor=floor;
    floor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','floor']};};
    function log(x$176){
        /*Begin dynamic block*/
        return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'103:19-103:22','math.ceylon'):Math).log(/*NULL PARAM!*/x$176.$native));
        /*End dynamic block*/
    }
    $$mathAbs.log=log;
    log.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','log']};};
    function max(numbers$177){
        if(numbers$177===undefined){numbers$177=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JSNumber(JSFunction((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'110:30-110:33','math.ceylon'):Math).max).$apply(null,(tmpvar$178=(function(){
            var lst$179=[];
            var it$180=numbers$177.iterator();
            var elem$181;
            while ((elem$181=it$180.next())!==$$$cl1.getFinished()){
                lst$179.push(elem$181.$native);
            }
            return $$$cl1.ArraySequence(lst$179);
        }()),$$$cl1.isOfType(tmpvar$178,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$178:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'110:54-110:68','math.ceylon'))));
        /*End dynamic block*/
    }
    $$mathAbs.max=max;
    max.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'numbers',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:JSNumber}}},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','max']};};
    function min(numbers$182){
        if(numbers$182===undefined){numbers$182=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JSNumber(JSFunction((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'117:30-117:33','math.ceylon'):Math).min).$apply(null,(tmpvar$183=(function(){
            var lst$184=[];
            var it$185=numbers$182.iterator();
            var elem$186;
            while ((elem$186=it$185.next())!==$$$cl1.getFinished()){
                lst$184.push(elem$186.$native);
            }
            return $$$cl1.ArraySequence(lst$184);
        }()),$$$cl1.isOfType(tmpvar$183,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$183:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'117:54-117:68','math.ceylon'))));
        /*End dynamic block*/
    }
    $$mathAbs.min=min;
    min.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'numbers',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:JSNumber}}},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','min']};};
    function pow(base$187,exponent$188){
        /*Begin dynamic block*/
        return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'123:19-123:22','math.ceylon'):Math).pow(/*NULL PARAM!*/base$187/*NULL PARAM!*/,exponent$188));
        /*End dynamic block*/
    }
    $$mathAbs.pow=pow;
    pow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'base',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'exponent',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','pow']};};
    function random(){
        /*Begin dynamic block*/
        return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'129:19-129:22','math.ceylon'):Math).random());
        /*End dynamic block*/
    }
    $$mathAbs.random=random;
    random.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','random']};};
    function round(x$189){
        /*Begin dynamic block*/
        return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'135:19-135:22','math.ceylon'):Math).round(/*NULL PARAM!*/x$189));
        /*End dynamic block*/
    }
    $$mathAbs.round=round;
    round.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','round']};};
    function sin(x$190){
        /*Begin dynamic block*/
        return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'141:19-141:22','math.ceylon'):Math).sin(/*NULL PARAM!*/x$190));
        /*End dynamic block*/
    }
    $$mathAbs.sin=sin;
    sin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','sin']};};
    function sqrt(x$191){
        /*Begin dynamic block*/
        return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'147:19-147:22','math.ceylon'):Math).sqrt(/*NULL PARAM!*/x$191));
        /*End dynamic block*/
    }
    $$mathAbs.sqrt=sqrt;
    sqrt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','sqrt']};};
    function tan(x$192){
        /*Begin dynamic block*/
        return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'153:19-153:22','math.ceylon'):Math).tan(/*NULL PARAM!*/x$192));
        /*End dynamic block*/
    }
    $$mathAbs.tan=tan;
    tan.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','MathAbs','$m','tan']};};
    return $$mathAbs;
}
MathAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.language','MathAbs']};};
exports.MathAbs=MathAbs;
function $init$MathAbs(){
    if (MathAbs.$$===undefined){
        $$$cl1.initTypeProto(MathAbs,'ceylon.js.language::MathAbs',$init$JSObjectAbs());
    }
    return MathAbs;
}
exports.$init$MathAbs=$init$MathAbs;
$init$MathAbs();
function Math(n$193, $$math){
    $init$Math();
    if ($$math===undefined)$$math=new Math.$$;
    $$math.n$193_=n$193;
    MathAbs($$math);
    $$$cl1.defineAttr($$math,'n$193',function(){return this.n$193_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Math,d:['ceylon.js.language','Math','$at','n']};});
    $$math.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Math,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.language','Math','$at','native']};}};
    /*Begin dynamic block*/
    $$math.$native=n$193;/*End dynamic block*/
    return $$math;
}
Math.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:MathAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','Math']};};
exports.Math=Math;
function $init$Math(){
    if (Math.$$===undefined){
        $$$cl1.initTypeProto(Math,'ceylon.js.language::Math',$init$MathAbs());
    }
    return Math;
}
exports.$init$Math=$init$Math;
$init$Math();
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("JavaScript 1.8.5",16))];};
function createJSNumber(val$194){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Number")),'3:18-3:23','number.ceylon'):Number)(/*NULL PARAM!*/val$194));
    /*End dynamic block*/
}
exports.createJSNumber=createJSNumber;
createJSNumber.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','createJSNumber']};};
function numberMaxValue(){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Number")),'9:18-9:23','number.ceylon'):Number).MAX_VALUE);
    /*End dynamic block*/
}
exports.numberMaxValue=numberMaxValue;
numberMaxValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','numberMaxValue']};};
function numberMinValue(){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Number")),'15:18-15:23','number.ceylon'):Number).MIN_VALUE);
    /*End dynamic block*/
}
exports.numberMinValue=numberMinValue;
numberMinValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','numberMinValue']};};
function numberNegativeInfinity(){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Number")),'21:18-21:23','number.ceylon'):Number).NEGATIVE_INFINITY);
    /*End dynamic block*/
}
exports.numberNegativeInfinity=numberNegativeInfinity;
numberNegativeInfinity.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','numberNegativeInfinity']};};
function numberPositiveInfinity(){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Number")),'27:18-27:23','number.ceylon'):Number).POSITIVE_INFINITY);
    /*End dynamic block*/
}
exports.numberPositiveInfinity=numberPositiveInfinity;
numberPositiveInfinity.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','numberPositiveInfinity']};};
function JSNumberAbs($$jSNumberAbs){
    $init$JSNumberAbs();
    if ($$jSNumberAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$jSNumberAbs);
    $$jSNumberAbs.toExponential$defs$fractionDigits=function(fractionDigits$195){return null;};
    function toExponential(fractionDigits$195){
        if(fractionDigits$195===undefined){fractionDigits$195=$$jSNumberAbs.toExponential$defs$fractionDigits(fractionDigits$195);}
        
        var case$196=fractionDigits$195;
        if ($$$cl1.isOfType(fractionDigits$195,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            return JSString($$jSNumberAbs.$native.toExponential(/*NULL PARAM!*/case$196));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(fractionDigits$195,{t:JSNumber})) {
            /*Begin dynamic block*/
            return JSString($$jSNumberAbs.$native.toExponential(/*NULL PARAM!*/case$196.$native));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(fractionDigits$195,{t:$$$cl1.Null})) {
            /*Begin dynamic block*/
            return JSString($$jSNumberAbs.$native.toExponential());
            /*End dynamic block*/
        }
    }
    $$jSNumberAbs.toExponential=toExponential;
    toExponential.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'fractionDigits',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSNumberAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSNumberAbs','$m','toExponential']};};
    $$jSNumberAbs.toFixed$defs$digits=function(digits$197){return (0);};
    function toFixed(digits$197){
        if(digits$197===undefined){digits$197=$$jSNumberAbs.toFixed$defs$digits(digits$197);}
        
        var case$198=digits$197;
        if ($$$cl1.isOfType(digits$197,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            return JSString($$jSNumberAbs.$native.toFixed(/*NULL PARAM!*/case$198));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(digits$197,{t:JSNumber})) {
            /*Begin dynamic block*/
            return JSString($$jSNumberAbs.$native.toFixed(/*NULL PARAM!*/case$198.$native));
            /*End dynamic block*/
        }
    }
    $$jSNumberAbs.toFixed=toFixed;
    toFixed.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'digits',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSNumberAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSNumberAbs','$m','toFixed']};};
    $$jSNumberAbs.toPrecision$defs$precision=function(precision$199){return null;};
    function toPrecision(precision$199){
        if(precision$199===undefined){precision$199=$$jSNumberAbs.toPrecision$defs$precision(precision$199);}
        
        var case$200=precision$199;
        if ($$$cl1.isOfType(precision$199,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            return JSString($$jSNumberAbs.$native.toPrecision(/*NULL PARAM!*/case$200));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(precision$199,{t:JSNumber})) {
            /*Begin dynamic block*/
            return JSString($$jSNumberAbs.$native.toPrecision(/*NULL PARAM!*/case$200.$native));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(precision$199,{t:$$$cl1.Null})) {
            /*Begin dynamic block*/
            return JSString($$jSNumberAbs.$native.toPrecision());
            /*End dynamic block*/
        }
    }
    $$jSNumberAbs.toPrecision=toPrecision;
    toPrecision.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'precision',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSNumberAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSNumberAbs','$m','toPrecision']};};
    return $$jSNumberAbs;
}
JSNumberAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.language','JSNumberAbs']};};
exports.JSNumberAbs=JSNumberAbs;
function $init$JSNumberAbs(){
    if (JSNumberAbs.$$===undefined){
        $$$cl1.initTypeProto(JSNumberAbs,'ceylon.js.language::JSNumberAbs',$init$JSObjectAbs());
    }
    return JSNumberAbs;
}
exports.$init$JSNumberAbs=$init$JSNumberAbs;
$init$JSNumberAbs();
function JSNumber(n$201, $$jSNumber){
    $init$JSNumber();
    if ($$jSNumber===undefined)$$jSNumber=new JSNumber.$$;
    $$jSNumber.n$201_=n$201;
    JSNumberAbs($$jSNumber);
    $$$cl1.defineAttr($$jSNumber,'n$201',function(){return this.n$201_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSNumber,d:['ceylon.js.language','JSNumber','$at','n']};});
    $$jSNumber.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSNumber,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.language','JSNumber','$at','native']};}};
    /*Begin dynamic block*/
    $$jSNumber.$native=n$201;/*End dynamic block*/
    return $$jSNumber;
}
JSNumber.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSNumberAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSNumber']};};
exports.JSNumber=JSNumber;
function $init$JSNumber(){
    if (JSNumber.$$===undefined){
        $$$cl1.initTypeProto(JSNumber,'ceylon.js.language::JSNumber',$init$JSNumberAbs());
    }
    return JSNumber;
}
exports.$init$JSNumber=$init$JSNumber;
$init$JSNumber();
function PropertyDescriptor($$propertyDescriptor){
    $init$PropertyDescriptor();
    if ($$propertyDescriptor===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$propertyDescriptor.$prop$getConfigurable={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:PropertyDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.js.language','PropertyDescriptor','$at','configurable']};}};
    $$propertyDescriptor.$prop$getDescriptor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:PropertyDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.js.language','PropertyDescriptor','$at','descriptor']};}};
    $$propertyDescriptor.$prop$getEnumerable={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:PropertyDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.js.language','PropertyDescriptor','$at','enumerable']};}};
    return $$propertyDescriptor;
}
PropertyDescriptor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.language','PropertyDescriptor']};};
exports.PropertyDescriptor=PropertyDescriptor;
function $init$PropertyDescriptor(){
    if (PropertyDescriptor.$$===undefined){
        $$$cl1.initTypeProto(PropertyDescriptor,'ceylon.js.language::PropertyDescriptor',$$$cl1.Basic);
    }
    return PropertyDescriptor;
}
exports.$init$PropertyDescriptor=$init$PropertyDescriptor;
$init$PropertyDescriptor();
function DataDescriptor(configurable, descriptor, enumerable, writable, val, $$dataDescriptor){
    $init$DataDescriptor();
    if ($$dataDescriptor===undefined)$$dataDescriptor=new DataDescriptor.$$;
    if(configurable===undefined){configurable=false;}
    $$dataDescriptor.configurable_=configurable;
    if(descriptor===undefined){descriptor=false;}
    $$dataDescriptor.descriptor_=descriptor;
    if(enumerable===undefined){enumerable=false;}
    $$dataDescriptor.enumerable_=enumerable;
    if(writable===undefined){writable=false;}
    $$dataDescriptor.writable_=writable;
    if(val===undefined){val=null;}
    $$dataDescriptor.val_=val;
    PropertyDescriptor($$dataDescriptor);
    $$$cl1.defineAttr($$dataDescriptor,'configurable',function(){return this.configurable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:DataDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.language','DataDescriptor','$at','configurable']};});
    $$$cl1.defineAttr($$dataDescriptor,'descriptor',function(){return this.descriptor_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:DataDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.language','DataDescriptor','$at','descriptor']};});
    $$$cl1.defineAttr($$dataDescriptor,'enumerable',function(){return this.enumerable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:DataDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.language','DataDescriptor','$at','enumerable']};});
    $$$cl1.defineAttr($$dataDescriptor,'writable',function(){return this.writable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:DataDescriptor,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','DataDescriptor','$at','writable']};});
    $$$cl1.defineAttr($$dataDescriptor,'val',function(){return this.val_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DataDescriptor,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','DataDescriptor','$at','val']};});
    function toNative(){
        var obj$202=createJSObject();
        /*Begin dynamic block*/
        obj$202.$native.configurable=$$dataDescriptor.configurable;
        obj$202.$native.descriptor=$$dataDescriptor.descriptor;
        obj$202.$native.enumerable=$$dataDescriptor.enumerable;
        obj$202.$native.writable=$$dataDescriptor.writable;
        obj$202.$native.value=$$dataDescriptor.val;
        /*End dynamic block*/
        return obj$202;
    }
    $$dataDescriptor.toNative=toNative;
    toNative.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[],$cont:DataDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.language','DataDescriptor','$m','toNative']};};
    return $$dataDescriptor;
}
DataDescriptor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:PropertyDescriptor},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','DataDescriptor']};};
exports.DataDescriptor=DataDescriptor;
function $init$DataDescriptor(){
    if (DataDescriptor.$$===undefined){
        $$$cl1.initTypeProto(DataDescriptor,'ceylon.js.language::DataDescriptor',$init$PropertyDescriptor());
    }
    return DataDescriptor;
}
exports.$init$DataDescriptor=$init$DataDescriptor;
$init$DataDescriptor();
function AccessorDescriptor(configurable, descriptor, enumerable, get, set, $$accessorDescriptor){
    $init$AccessorDescriptor();
    if ($$accessorDescriptor===undefined)$$accessorDescriptor=new AccessorDescriptor.$$;
    $$accessorDescriptor.configurable_=configurable;
    if(descriptor===undefined){descriptor=false;}
    $$accessorDescriptor.descriptor_=descriptor;
    if(enumerable===undefined){enumerable=false;}
    $$accessorDescriptor.enumerable_=enumerable;
    if(get===undefined){get=null;}
    $$accessorDescriptor.get_=get;
    if(set===undefined){set=null;}
    $$accessorDescriptor.set_=set;
    PropertyDescriptor($$accessorDescriptor);
    $$$cl1.defineAttr($$accessorDescriptor,'configurable',function(){return this.configurable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:AccessorDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.language','AccessorDescriptor','$at','configurable']};});
    $$$cl1.defineAttr($$accessorDescriptor,'descriptor',function(){return this.descriptor_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:AccessorDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.language','AccessorDescriptor','$at','descriptor']};});
    $$$cl1.defineAttr($$accessorDescriptor,'enumerable',function(){return this.enumerable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:AccessorDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.language','AccessorDescriptor','$at','enumerable']};});
    $$$cl1.defineAttr($$accessorDescriptor,'get',function(){return this.get_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$cont:AccessorDescriptor,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','AccessorDescriptor','$at','get']};});
    $$$cl1.defineAttr($$accessorDescriptor,'set',function(){return this.set_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$cont:AccessorDescriptor,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','AccessorDescriptor','$at','set']};});
    function toNative(){
        var obj$203=createJSObject();
        /*Begin dynamic block*/
        obj$203.$native.configurable=$$accessorDescriptor.configurable;
        obj$203.$native.descriptor=$$accessorDescriptor.descriptor;
        obj$203.$native.enumerable=$$accessorDescriptor.enumerable;
        var g$204;
        if((g$204=$$accessorDescriptor.get)!==null){
            obj$203.$native.get=$$$cl1.$JsCallable(g$204/*TODO: callable targs 6*/);
        }var s$205;
        if((s$205=$$accessorDescriptor.set)!==null){
            obj$203.$native.set=$$$cl1.$JsCallable(s$205/*TODO: callable targs 6*/);
        }/*End dynamic block*/
        return obj$203;
    }
    $$accessorDescriptor.toNative=toNative;
    toNative.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[],$cont:AccessorDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.language','AccessorDescriptor','$m','toNative']};};
    return $$accessorDescriptor;
}
AccessorDescriptor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:PropertyDescriptor},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','AccessorDescriptor']};};
exports.AccessorDescriptor=AccessorDescriptor;
function $init$AccessorDescriptor(){
    if (AccessorDescriptor.$$===undefined){
        $$$cl1.initTypeProto(AccessorDescriptor,'ceylon.js.language::AccessorDescriptor',$init$PropertyDescriptor());
    }
    return AccessorDescriptor;
}
exports.$init$AccessorDescriptor=$init$AccessorDescriptor;
$init$AccessorDescriptor();
function objectCreate(proto$206,properties$207){
    var propsNative$208=createJSObject();
    /*Begin dynamic block*/
    var it$209 = properties$207.iterator();
    var item$210;while ((item$210=it$209.next())!==$$$cl1.getFinished()){
        var key$211=item$210.key;
        var val$212=item$210.item;
        objectDefineProperty(propsNative$208,key$211,val$212);
    }return JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'54:18-54:23','object.ceylon'):Object).create(/*NULL PARAM!*/proto$206.$native/*NULL PARAM!*/,propsNative$208));
    /*End dynamic block*/
}
exports.objectCreate=objectCreate;
objectCreate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'proto',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:DataDescriptor},{t:AccessorDescriptor}]}}}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','objectCreate']};};
function objectDefineProperty(obj$213,prop$214,descriptor$215){
    
    var case$216=prop$214;
    if ($$$cl1.isOfType(prop$214,{t:$$$cl1.String})) {
        /*Begin dynamic block*/
        (typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'62:3-62:8','object.ceylon'):Object).defineProperty(/*NULL PARAM!*/obj$213.$native/*NULL PARAM!*/,case$216.valueOf()/*NULL PARAM!*/,descriptor$215.toNative());
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(prop$214,{t:JSString})) {
        /*Begin dynamic block*/
        (typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'67:3-67:8','object.ceylon'):Object).defineProperty(/*NULL PARAM!*/obj$213.$native/*NULL PARAM!*/,case$216.$native/*NULL PARAM!*/,descriptor$215.toNative());
        /*End dynamic block*/
    }
}
exports.objectDefineProperty=objectDefineProperty;
objectDefineProperty.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'prop',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}},{$nm:'descriptor',$mt:'prm',$t:{ t:'u', l:[{t:DataDescriptor},{t:AccessorDescriptor}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','objectDefineProperty']};};
function defineProperties(obj$217,properties$218){
    var propsNative$219=createJSObject();
    /*Begin dynamic block*/
    var it$220 = properties$218.iterator();
    var item$221;while ((item$221=it$220.next())!==$$$cl1.getFinished()){
        var key$222=item$221.key;
        var val$223=item$221.item;
        objectDefineProperty(propsNative$219,key$222,val$223);
    }return JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'78:18-78:23','object.ceylon'):Object).defineProperties(/*NULL PARAM!*/obj$217.$native/*NULL PARAM!*/,propsNative$219));
    /*End dynamic block*/
}
exports.defineProperties=defineProperties;
defineProperties.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:DataDescriptor},{t:AccessorDescriptor}]}}}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','defineProperties']};};
function objectGetOwnPropertyDescriptor(obj$224,prop$225){
    var descriptor$226;
    
    var case$227=prop$225;
    if ($$$cl1.isOfType(prop$225,{t:$$$cl1.String})) {
        /*Begin dynamic block*/
        descriptor$226=JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'87:25-87:30','object.ceylon'):Object).objectGetOwnPropertyDescriptor(/*NULL PARAM!*/obj$224/*NULL PARAM!*/,case$227.valueOf()));/*End dynamic block*/
    }else if ($$$cl1.isOfType(prop$225,{t:JSString})) {
        /*Begin dynamic block*/
        descriptor$226=JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'92:25-92:30','object.ceylon'):Object).objectGetOwnPropertyDescriptor(/*NULL PARAM!*/obj$224/*NULL PARAM!*/,case$227.$native));/*End dynamic block*/
    }
    return descriptor$226;
}
exports.objectGetOwnPropertyDescriptor=objectGetOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'prop',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','objectGetOwnPropertyDescriptor']};};
function objectKeys(obj$228){
    /*Begin dynamic block*/
    return JSArray((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'100:17-100:22','object.ceylon'):Object).keys(/*NULL PARAM!*/obj$228));
    /*End dynamic block*/
}
exports.objectKeys=objectKeys;
objectKeys.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','objectKeys']};};
function objectGetOwnPropertyNames(obj$229){
    /*Begin dynamic block*/
    return JSArray((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'106:17-106:22','object.ceylon'):Object).getOwnPropertyNames(/*NULL PARAM!*/obj$229.$native));
    /*End dynamic block*/
}
exports.objectGetOwnPropertyNames=objectGetOwnPropertyNames;
objectGetOwnPropertyNames.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','objectGetOwnPropertyNames']};};
function objectGetPrototypeOf(obj$230){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'112:18-112:23','object.ceylon'):Object).getPrototypeOf(/*NULL PARAM!*/obj$230.$native));
    /*End dynamic block*/
}
exports.objectGetPrototypeOf=objectGetPrototypeOf;
objectGetPrototypeOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','objectGetPrototypeOf']};};
function objectPreventExtensions(obj$231){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'118:18-118:23','object.ceylon'):Object).preventExtensions(/*NULL PARAM!*/obj$231.$native));
    /*End dynamic block*/
}
exports.objectPreventExtensions=objectPreventExtensions;
objectPreventExtensions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','objectPreventExtensions']};};
function objectIsExtensible(obj$232){
    /*Begin dynamic block*/
    if((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'124:6-124:11','object.ceylon'):Object).isExtensible(/*NULL PARAM!*/obj$232.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.objectIsExtensible=objectIsExtensible;
objectIsExtensible.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','objectIsExtensible']};};
function objectSeal(obj$233){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'134:18-134:23','object.ceylon'):Object).seal(/*NULL PARAM!*/obj$233.$native));
    /*End dynamic block*/
}
exports.objectSeal=objectSeal;
objectSeal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','objectSeal']};};
function objectIsSealed(obj$234){
    /*Begin dynamic block*/
    if((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'140:6-140:11','object.ceylon'):Object).isSealed(/*NULL PARAM!*/obj$234.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.objectIsSealed=objectIsSealed;
objectIsSealed.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','objectIsSealed']};};
function objectFreeze(obj$235){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'150:18-150:23','object.ceylon'):Object).freeze(/*NULL PARAM!*/obj$235.$native));
    /*End dynamic block*/
}
exports.objectFreeze=objectFreeze;
objectFreeze.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','objectFreeze']};};
function objectIsFrozen(obj$236){
    /*Begin dynamic block*/
    if((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'156:6-156:11','object.ceylon'):Object).isFrozen(/*NULL PARAM!*/obj$236.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.objectIsFrozen=objectIsFrozen;
objectIsFrozen.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','objectIsFrozen']};};
function createJSObject(){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'166:18-166:23','object.ceylon'):Object)());
    /*End dynamic block*/
}
exports.createJSObject=createJSObject;
createJSObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','createJSObject']};};
function JSObjectAbs($$jSObjectAbs){
    $init$JSObjectAbs();
    if ($$jSObjectAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$jSObjectAbs.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSObjectAbs,$an:function(){return[$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.js.language','JSObjectAbs','$at','native']};}};
    function getPrototype(){
        /*Begin dynamic block*/
        return JSObject($$jSObjectAbs.$native.prototype);
        /*End dynamic block*/
    }
    $$jSObjectAbs.getPrototype=getPrototype;
    getPrototype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[],$cont:JSObjectAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','getPrototype']};};
    function setPrototype(prototype$237){
        /*Begin dynamic block*/
        $$jSObjectAbs.$native.prototype=prototype$237.$native;
        /*End dynamic block*/
    }
    $$jSObjectAbs.setPrototype=setPrototype;
    setPrototype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'prototype',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','setPrototype']};};
    function getConstructor(){
        /*Begin dynamic block*/
        return (tmpvar$238=(/*NULL PARAM!*/tmpvar$239=$$jSObjectAbs.$native.constructor,tmpvar$240=(typeof Function==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type Function")),'187:10-187:17','object.ceylon'):Function),tmpvar$240.$$===undefined?new tmpvar$240(tmpvar$239):tmpvar$240(tmpvar$239)),$$$cl1.isOfType(tmpvar$238,{t:$$$cl1.Anything})?tmpvar$238:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'187:10-187:37','object.ceylon'));
        /*End dynamic block*/
    }
    $$jSObjectAbs.getConstructor=getConstructor;
    getConstructor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSFunction},$ps:[],$cont:JSObjectAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','getConstructor']};};
    function setConstructor(constructor$241){
        /*Begin dynamic block*/
        $$jSObjectAbs.$native.constructor=constructor$241.$native;
        /*End dynamic block*/
    }
    $$jSObjectAbs.setConstructor=setConstructor;
    setConstructor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'constructor',$mt:'prm',$t:{t:JSFunction},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','setConstructor']};};
    function hasOwnProperty(prop$242){
        var has$243;
        
        var case$244=prop$242;
        if ($$$cl1.isOfType(prop$242,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            has$243=$$jSObjectAbs.$native.hasOwnProperty(/*NULL PARAM!*/case$244.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(prop$242,{t:JSString})) {
            /*Begin dynamic block*/
            has$243=$$jSObjectAbs.$native.hasOwnProperty(/*NULL PARAM!*/case$244.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(has$243){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jSObjectAbs.hasOwnProperty=hasOwnProperty;
    hasOwnProperty.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'prop',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','hasOwnProperty']};};
    function isPrototypeOf(obj$245){
        /*Begin dynamic block*/
        if($$jSObjectAbs.$native.isPrototypeOf(/*NULL PARAM!*/obj$245)){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jSObjectAbs.isPrototypeOf=isPrototypeOf;
    isPrototypeOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','isPrototypeOf']};};
    function propertyIsEnumerable(prop$246){
        var enum$247;
        
        var case$248=prop$246;
        if ($$$cl1.isOfType(prop$246,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            enum$247=$$jSObjectAbs.$native.propertyIsEnumerable(/*NULL PARAM!*/case$248.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(prop$246,{t:JSString})) {
            /*Begin dynamic block*/
            enum$247=$$jSObjectAbs.$native.propertyIsEnumerable(/*NULL PARAM!*/case$248.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(enum$247){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jSObjectAbs.propertyIsEnumerable=propertyIsEnumerable;
    propertyIsEnumerable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'prop',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','propertyIsEnumerable']};};
    function $apply(thisArg$249,args$250){
        /*Begin dynamic block*/
        $$jSObjectAbs.$native.apply(/*NULL PARAM!*/(typeof a==='undefined'||a===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: a")),'253:22-253:22','object.ceylon'):a)/*NULL PARAM!*/,args$250);
        /*End dynamic block*/
    }
    $$jSObjectAbs.$apply=$apply;
    $apply.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'thisArg',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','apply']};};
    function applyJS(thisArg$251,args$252){
        var a$253;
        if((a$253=thisArg$251)!==null){
            /*Begin dynamic block*/
            $$jSObjectAbs.$native.apply(/*NULL PARAM!*/a$253.$native/*NULL PARAM!*/,(function(){
                var lst$254=[];
                var it$255=args$252.iterator();
                var elem$256;
                while ((elem$256=it$255.next())!==$$$cl1.getFinished()){
                    lst$254.push(elem$256.$native);
                }
                return $$$cl1.ArraySequence(lst$254);
            }()));
            /*End dynamic block*/
        }else {
            /*Begin dynamic block*/
            $$jSObjectAbs.$native.apply(/*NULL PARAM!*/null/*NULL PARAM!*/,(function(){
                var lst$257=[];
                var it$258=args$252.iterator();
                var elem$259;
                while ((elem$259=it$258.next())!==$$$cl1.getFinished()){
                    lst$257.push(elem$259.$native);
                }
                return $$$cl1.ArraySequence(lst$257);
            }()));
            /*End dynamic block*/
        }
    }
    $$jSObjectAbs.applyJS=applyJS;
    applyJS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'thisArg',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JSObject}]},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:JSObject}}},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','applyJS']};};
    function $call(thisArg$260,args$261){
        /*Begin dynamic block*/
        JSFunction($$jSObjectAbs.$native.call).$apply(thisArg$260,(tmpvar$262=args$261,$$$cl1.isOfType(tmpvar$262,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$262:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'272:45-272:48','object.ceylon')));
        /*End dynamic block*/
    }
    $$jSObjectAbs.$call=$call;
    $call.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'thisArg',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','call']};};
    function callJS(thisArg$263,args$264){
        if(args$264===undefined){args$264=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        JSFunction($$jSObjectAbs.$native.call).applyJS((tmpvar$265=(typeof a==='undefined'||a===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: a")),'278:35-278:35','object.ceylon'):a),$$$cl1.isOfType(tmpvar$265,{ t:'u', l:[{t:$$$cl1.Null},{t:JSObject}]})?tmpvar$265:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'278:35-278:35','object.ceylon')),args$264);
        /*End dynamic block*/
    }
    $$jSObjectAbs.callJS=callJS;
    callJS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'thisArg',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JSObject}]},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:JSObject}}},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','callJS']};};
    function toString(){
        /*Begin dynamic block*/
        return JSString($$jSObjectAbs.$native.toString());
        /*End dynamic block*/
    }
    $$jSObjectAbs.toString=toString;
    toString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSObjectAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','toString']};};
    return $$jSObjectAbs;
}
JSObjectAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.language','JSObjectAbs']};};
exports.JSObjectAbs=JSObjectAbs;
function $init$JSObjectAbs(){
    if (JSObjectAbs.$$===undefined){
        $$$cl1.initTypeProto(JSObjectAbs,'ceylon.js.language::JSObjectAbs',$$$cl1.Basic);
    }
    return JSObjectAbs;
}
exports.$init$JSObjectAbs=$init$JSObjectAbs;
$init$JSObjectAbs();
function JSObject(n$266, $$jSObject){
    $init$JSObject();
    if ($$jSObject===undefined)$$jSObject=new JSObject.$$;
    $$jSObject.n$266_=n$266;
    JSObjectAbs($$jSObject);
    $$$cl1.defineAttr($$jSObject,'n$266',function(){return this.n$266_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSObject,d:['ceylon.js.language','JSObject','$at','n']};});
    /*Begin dynamic block*/
    $$jSObject.$native=n$266;/*End dynamic block*/
    return $$jSObject;
}
JSObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSObject']};};
exports.JSObject=JSObject;
function $init$JSObject(){
    if (JSObject.$$===undefined){
        $$$cl1.initTypeProto(JSObject,'ceylon.js.language::JSObject',$init$JSObjectAbs());
    }
    return JSObject;
}
exports.$init$JSObject=$init$JSObject;
$init$JSObject();
exports.$pkg$ans$ceylon$js$language=function(){return[$$$cl1.shared()];};
function RegExpFlag(name$267, $$regExpFlag){
    $init$RegExpFlag();
    if ($$regExpFlag===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$regExpFlag.name$267_=name$267;
    $$$cl1.defineAttr($$regExpFlag,'name$267',function(){return this.name$267_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:RegExpFlag,d:['ceylon.js.language','RegExpFlag','$at','name']};});
    return $$regExpFlag;
}
RegExpFlag.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.language','RegExpFlag']};};
exports.RegExpFlag=RegExpFlag;
function $init$RegExpFlag(){
    if (RegExpFlag.$$===undefined){
        $$$cl1.initTypeProto(RegExpFlag,'ceylon.js.language::RegExpFlag',$$$cl1.Basic);
    }
    return RegExpFlag;
}
exports.$init$RegExpFlag=$init$RegExpFlag;
$init$RegExpFlag();
function global$268(){
    var $$global=new global$268.$$;
    RegExpFlag($$$cl1.String("g",1),$$global);
    return $$global;
}
function $init$global$268(){
    if (global$268.$$===undefined){
        $$$cl1.initTypeProto(global$268,'ceylon.js.language::global',$init$RegExpFlag());
    }
    return global$268;
}
exports.$init$global$268=$init$global$268;
$init$global$268();
var global$269;
function getGlobal(){
    if (global$269===undefined)global$269=$init$global$268()();
    return global$269;
}
exports.getGlobal=getGlobal;
getGlobal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:global$268},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','global']};};
$prop$getGlobal={get:getGlobal,$$metamodel$$:getGlobal.$$metamodel$$};
exports.$prop$getGlobal=$prop$getGlobal;
function ignore$270(){
    var $$ignore=new ignore$270.$$;
    RegExpFlag($$$cl1.String("i",1),$$ignore);
    return $$ignore;
}
function $init$ignore$270(){
    if (ignore$270.$$===undefined){
        $$$cl1.initTypeProto(ignore$270,'ceylon.js.language::ignore',$init$RegExpFlag());
    }
    return ignore$270;
}
exports.$init$ignore$270=$init$ignore$270;
$init$ignore$270();
var ignore$271;
function getIgnore(){
    if (ignore$271===undefined)ignore$271=$init$ignore$270()();
    return ignore$271;
}
exports.getIgnore=getIgnore;
getIgnore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ignore$270},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','ignore']};};
$prop$getIgnore={get:getIgnore,$$metamodel$$:getIgnore.$$metamodel$$};
exports.$prop$getIgnore=$prop$getIgnore;
function multiple$272(){
    var $$multiple=new multiple$272.$$;
    RegExpFlag($$$cl1.String("m",1),$$multiple);
    return $$multiple;
}
function $init$multiple$272(){
    if (multiple$272.$$===undefined){
        $$$cl1.initTypeProto(multiple$272,'ceylon.js.language::multiple',$init$RegExpFlag());
    }
    return multiple$272;
}
exports.$init$multiple$272=$init$multiple$272;
$init$multiple$272();
var multiple$273;
function getMultiple(){
    if (multiple$273===undefined)multiple$273=$init$multiple$272()();
    return multiple$273;
}
exports.getMultiple=getMultiple;
getMultiple.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:multiple$272},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','multiple']};};
$prop$getMultiple={get:getMultiple,$$metamodel$$:getMultiple.$$metamodel$$};
exports.$prop$getMultiple=$prop$getMultiple;
function createJSRegExp(pattern$274,flags$275){
    if(flags$275===undefined){flags$275=$$$cl1.getEmpty();}
    
    var case$276=pattern$274;
    if ($$$cl1.isOfType(pattern$274,{t:$$$cl1.String})) {
        /*Begin dynamic block*/
        return RegExp((typeof RegExp==='undefined'||RegExp===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: RegExp")),'11:17-11:22','regexp.ceylon'):RegExp)(/*NULL PARAM!*/case$276.valueOf()/*NULL PARAM!*/,(function(){
            var lst$277=[];
            var it$278=flags$275.iterator();
            var elem$279;
            while ((elem$279=it$278.next())!==$$$cl1.getFinished()){
                lst$277.push(elem$279.string);
            }
            return $$$cl1.ArraySequence(lst$277);
        }())));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(pattern$274,{t:JSString})) {
        /*Begin dynamic block*/
        return RegExp((typeof RegExp==='undefined'||RegExp===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: RegExp")),'16:17-16:22','regexp.ceylon'):RegExp)(/*NULL PARAM!*/case$276.$native/*NULL PARAM!*/,(function(){
            var lst$280=[];
            var it$281=flags$275.iterator();
            var elem$282;
            while ((elem$282=it$281.next())!==$$$cl1.getFinished()){
                lst$280.push(elem$282.string);
            }
            return $$$cl1.ArraySequence(lst$280);
        }())));
        /*End dynamic block*/
    }
}
exports.createJSRegExp=createJSRegExp;
createJSRegExp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:RegExp},$ps:[{$nm:'pattern',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}},{$nm:'flags',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:RegExpFlag}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','createJSRegExp']};};
function RegExpAbs($$regExpAbs){
    $init$RegExpAbs();
    if ($$regExpAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$regExpAbs);
    function RegResult$RegExpAbs(n$283, $$regResult$RegExpAbs){
        $init$RegResult$RegExpAbs();
        if ($$regResult$RegExpAbs===undefined)$$regResult$RegExpAbs=new RegResult$RegExpAbs.$$;
        $$regResult$RegExpAbs.$$outer=this;
        $$regResult$RegExpAbs.n$283_=n$283;
        $$regExpAbs.RegResultAbs$RegExpAbs($$regResult$RegExpAbs);
        $$$cl1.defineAttr($$regResult$RegExpAbs,'n$283',function(){return this.n$283_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:RegResult$RegExpAbs,d:['ceylon.js.language','RegExpAbs','$c','RegResult','$at','n']};});
        $$regResult$RegExpAbs.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:RegResult$RegExpAbs,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.language','RegExpAbs','$c','RegResult','$at','native']};}};
        /*Begin dynamic block*/
        $$regResult$RegExpAbs.$native=n$283;/*End dynamic block*/
        return $$regResult$RegExpAbs;
    }
    RegResult$RegExpAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RegExpAbs.RegResultAbs$RegExpAbs},$cont:RegExpAbs,satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','RegExpAbs','$c','RegResult']};};
    $$regExpAbs.RegResult$RegExpAbs=RegResult$RegExpAbs;
    function $init$RegResult$RegExpAbs(){
        if (RegResult$RegExpAbs.$$===undefined){
            $$$cl1.initTypeProto(RegResult$RegExpAbs,'ceylon.js.language::RegExpAbs.RegResult',$$regExpAbs.RegResultAbs$RegExpAbs);
            RegExpAbs.RegResult$RegExpAbs=RegResult$RegExpAbs;
        }
        return RegResult$RegExpAbs;
    }
    $$regExpAbs.$init$RegResult$RegExpAbs=$init$RegResult$RegExpAbs;
    $init$RegResult$RegExpAbs();
    function RegResultAbs$RegExpAbs($$regResultAbs$RegExpAbs){
        $init$RegResultAbs$RegExpAbs();
        if ($$regResultAbs$RegExpAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
        $$regResultAbs$RegExpAbs.$$outer=this;
        JSArrayAbs($$regResultAbs$RegExpAbs);
        function input(){
            /*Begin dynamic block*/
            return JSString($$regResultAbs$RegExpAbs.$native.input);
            /*End dynamic block*/
        }
        $$regResultAbs$RegExpAbs.input=input;
        input.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:RegResultAbs$RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','RegExpAbs','$c','RegResultAbs','$m','input']};};
        function index(){
            /*Begin dynamic block*/
            return JSNumber($$regResultAbs$RegExpAbs.$native.index);
            /*End dynamic block*/
        }
        $$regResultAbs$RegExpAbs.index=index;
        index.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:RegResultAbs$RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','RegExpAbs','$c','RegResultAbs','$m','index']};};
        return $$regResultAbs$RegExpAbs;
    }
    RegResultAbs$RegExpAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSArrayAbs},$cont:RegExpAbs,satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.language','RegExpAbs','$c','RegResultAbs']};};
    $$regExpAbs.RegResultAbs$RegExpAbs=RegResultAbs$RegExpAbs;
    function $init$RegResultAbs$RegExpAbs(){
        if (RegResultAbs$RegExpAbs.$$===undefined){
            $$$cl1.initTypeProto(RegResultAbs$RegExpAbs,'ceylon.js.language::RegExpAbs.RegResultAbs',$init$JSArrayAbs());
            RegExpAbs.RegResultAbs$RegExpAbs=RegResultAbs$RegExpAbs;
        }
        return RegResultAbs$RegExpAbs;
    }
    $$regExpAbs.$init$RegResultAbs$RegExpAbs=$init$RegResultAbs$RegExpAbs;
    $init$RegResultAbs$RegExpAbs();
    function global(){
        /*Begin dynamic block*/
        if($$regExpAbs.$native.global){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$regExpAbs.global=global;
    global.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','RegExpAbs','$m','global']};};
    function ignoreCase(){
        /*Begin dynamic block*/
        if($$regExpAbs.$native.ignoreCase){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$regExpAbs.ignoreCase=ignoreCase;
    ignoreCase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','RegExpAbs','$m','ignoreCase']};};
    function getLastindex(){
        /*Begin dynamic block*/
        return JSNumber($$regExpAbs.$native.lastindex);
        /*End dynamic block*/
    }
    $$regExpAbs.getLastindex=getLastindex;
    getLastindex.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','RegExpAbs','$m','getLastindex']};};
    function setLastindex(index$284){
        
        var case$285=index$284;
        if ($$$cl1.isOfType(index$284,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$regExpAbs.$native.lastindex=case$285;
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(index$284,{t:JSNumber})) {
            /*Begin dynamic block*/
            $$regExpAbs.$native.lastindex=case$285.$native;
            /*End dynamic block*/
        }
    }
    $$regExpAbs.setLastindex=setLastindex;
    setLastindex.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','RegExpAbs','$m','setLastindex']};};
    function multiline(){
        /*Begin dynamic block*/
        return JSNumber($$regExpAbs.$native.multiline);
        /*End dynamic block*/
    }
    $$regExpAbs.multiline=multiline;
    multiline.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','RegExpAbs','$m','multiline']};};
    function source(){
        /*Begin dynamic block*/
        return JSString($$regExpAbs.$native.source);
        /*End dynamic block*/
    }
    $$regExpAbs.source=source;
    source.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','RegExpAbs','$m','source']};};
    function exec(str$286){
        /*Begin dynamic block*/
        return JSString($$regExpAbs.$native.exec(/*NULL PARAM!*/str$286.valueOf()));
        /*End dynamic block*/
    }
    $$regExpAbs.exec=exec;
    exec.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'str',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','RegExpAbs','$m','exec']};};
    $$regExpAbs.test$defs$str=function(str$287){return $$$cl1.String("undefined",9);};
    function test(str$287){
        if(str$287===undefined){str$287=$$regExpAbs.test$defs$str(str$287);}
        var result$288;
        
        var case$289=str$287;
        if ($$$cl1.isOfType(str$287,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            result$288=$$regExpAbs.$native.test(/*NULL PARAM!*/case$289.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(str$287,{t:JSString})) {
            /*Begin dynamic block*/
            result$288=$$regExpAbs.$native.test(/*NULL PARAM!*/case$289.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(result$288){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$regExpAbs.test=test;
    test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'str',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}}],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','RegExpAbs','$m','test']};};
    return $$regExpAbs;
}
RegExpAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.language','RegExpAbs']};};
exports.RegExpAbs=RegExpAbs;
function $init$RegExpAbs(){
    if (RegExpAbs.$$===undefined){
        $$$cl1.initTypeProto(RegExpAbs,'ceylon.js.language::RegExpAbs',$init$JSObjectAbs());
    }
    return RegExpAbs;
}
exports.$init$RegExpAbs=$init$RegExpAbs;
$init$RegExpAbs();
function RegExp(n$290, $$regExp){
    $init$RegExp();
    if ($$regExp===undefined)$$regExp=new RegExp.$$;
    $$regExp.n$290_=n$290;
    RegExpAbs($$regExp);
    $$$cl1.defineAttr($$regExp,'n$290',function(){return this.n$290_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:RegExp,d:['ceylon.js.language','RegExp','$at','n']};});
    /*Begin dynamic block*/
    $$regExp.$native=n$290;/*End dynamic block*/
    return $$regExp;
}
RegExp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RegExpAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','RegExp']};};
exports.RegExp=RegExp;
function $init$RegExp(){
    if (RegExp.$$===undefined){
        $$$cl1.initTypeProto(RegExp,'ceylon.js.language::RegExp',$init$RegExpAbs());
    }
    return RegExp;
}
exports.$init$RegExp=$init$RegExp;
$init$RegExp();
function createJSString(string$291){
    /*Begin dynamic block*/
    return JSString((typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'5:18-5:23','string.ceylon'):String)(/*NULL PARAM!*/string$291));
    /*End dynamic block*/
}
exports.createJSString=createJSString;
createJSString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'string',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','createJSString']};};
function JSStringAbs($$jSStringAbs){
    $init$JSStringAbs();
    if ($$jSStringAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$jSStringAbs);
    function length(){
        /*Begin dynamic block*/
        return JSNumber($$jSStringAbs.$native.length);
        /*End dynamic block*/
    }
    $$jSStringAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','length']};};
    function charAt(index$292){
        
        var case$293=index$292;
        if ($$$cl1.isOfType(index$292,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            return JSString($$jSStringAbs.$native.charAt(/*NULL PARAM!*/case$293));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(index$292,{t:JSNumber})) {
            /*Begin dynamic block*/
            return JSString($$jSStringAbs.$native.charAt(/*NULL PARAM!*/case$293.$native));
            /*End dynamic block*/
        }
    }
    $$jSStringAbs.charAt=charAt;
    charAt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','charAt']};};
    function charCodeAt(index$294){
        
        var case$295=index$294;
        if ($$$cl1.isOfType(index$294,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            return JSNumber($$jSStringAbs.$native.charCodeAt(/*NULL PARAM!*/case$295));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(index$294,{t:JSNumber})) {
            /*Begin dynamic block*/
            return JSNumber($$jSStringAbs.$native.charCodeAt(/*NULL PARAM!*/case$295.$native));
            /*End dynamic block*/
        }
    }
    $$jSStringAbs.charCodeAt=charCodeAt;
    charCodeAt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','charCodeAt']};};
    function concat(strings$296){
        if(strings$296===undefined){strings$296=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JSString(JSFunction($$jSStringAbs.$native.concat).$apply(null,(tmpvar$297=(function(){
            var lst$298=[];
            var it$299=strings$296.iterator();
            var elem$300;
            while ((elem$300=it$299.next())!==$$$cl1.getFinished()){
                lst$298.push(elem$300.$native);
            }
            return $$$cl1.ArraySequence(lst$298);
        }()),$$$cl1.isOfType(tmpvar$297,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$297:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'47:66-47:80','string.ceylon'))));
        /*End dynamic block*/
    }
    $$jSStringAbs.concat=concat;
    concat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'strings',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequence,a:{Element:{t:JSString}}},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','concat']};};
    $$jSStringAbs.indexOf$defs$fromIndex=function(searchValue$301,fromIndex$302){return (0);};
    function indexOf(searchValue$301,fromIndex$302){
        if(fromIndex$302===undefined){fromIndex$302=$$jSStringAbs.indexOf$defs$fromIndex(searchValue$301,fromIndex$302);}
        
        var case$303=searchValue$301;
        if ($$$cl1.isOfType(searchValue$301,{t:$$$cl1.String})) {
            
            var case$304=fromIndex$302;
            if ($$$cl1.isOfType(fromIndex$302,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return JSNumber($$jSStringAbs.$native.indexOf(/*NULL PARAM!*/case$303.valueOf()/*NULL PARAM!*/,case$304));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(fromIndex$302,{t:JSNumber})) {
                /*Begin dynamic block*/
                return JSNumber($$jSStringAbs.$native.indexOf(/*NULL PARAM!*/case$303.valueOf()/*NULL PARAM!*/,case$304.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(searchValue$301,{t:JSString})) {
            
            var case$305=fromIndex$302;
            if ($$$cl1.isOfType(fromIndex$302,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return JSNumber($$jSStringAbs.$native.indexOf(/*NULL PARAM!*/case$303.$native/*NULL PARAM!*/,case$305));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(fromIndex$302,{t:JSNumber})) {
                /*Begin dynamic block*/
                return JSNumber($$jSStringAbs.$native.indexOf(/*NULL PARAM!*/case$303.$native/*NULL PARAM!*/,case$305.$native));
                /*End dynamic block*/
            }
        }
    }
    $$jSStringAbs.indexOf=indexOf;
    indexOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'searchValue',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','indexOf']};};
    $$jSStringAbs.lastIndexOf$defs$fromIndex=function(searchValue$306,fromIndex$307){return (0);};
    function lastIndexOf(searchValue$306,fromIndex$307){
        if(fromIndex$307===undefined){fromIndex$307=$$jSStringAbs.lastIndexOf$defs$fromIndex(searchValue$306,fromIndex$307);}
        
        var case$308=searchValue$306;
        if ($$$cl1.isOfType(searchValue$306,{t:$$$cl1.String})) {
            
            var case$309=fromIndex$307;
            if ($$$cl1.isOfType(fromIndex$307,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return JSNumber($$jSStringAbs.$native.lastIndexOf(/*NULL PARAM!*/case$308.valueOf()/*NULL PARAM!*/,case$309));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(fromIndex$307,{t:JSNumber})) {
                /*Begin dynamic block*/
                return JSNumber($$jSStringAbs.$native.lastIndexOf(/*NULL PARAM!*/case$308.valueOf()/*NULL PARAM!*/,case$309.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(searchValue$306,{t:JSString})) {
            
            var case$310=fromIndex$307;
            if ($$$cl1.isOfType(fromIndex$307,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return JSNumber($$jSStringAbs.$native.lastIndexOf(/*NULL PARAM!*/case$308.$native/*NULL PARAM!*/,case$310));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(fromIndex$307,{t:JSNumber})) {
                /*Begin dynamic block*/
                return JSNumber($$jSStringAbs.$native.lastIndexOf(/*NULL PARAM!*/case$308.$native/*NULL PARAM!*/,case$310.$native));
                /*End dynamic block*/
            }
        }
    }
    $$jSStringAbs.lastIndexOf=lastIndexOf;
    lastIndexOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'searchValue',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','lastIndexOf']};};
    function match(regexp$311){
        /*Begin dynamic block*/
        return (tmpvar$312=RegExp.RegResult$RegExpAbs(/*NULL PARAM!*/$$jSStringAbs.$native.match(/*NULL PARAM!*/regexp$311.$native)),$$$cl1.isOfType(tmpvar$312,{t:$$$cl1.Anything})?tmpvar$312:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'113:16-113:60','string.ceylon'));
        /*End dynamic block*/
    }
    $$jSStringAbs.match=match;
    match.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:RegExpAbs.RegResult$RegExpAbs},$ps:[{$nm:'regexp',$mt:'prm',$t:{t:RegExp},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','match']};};
    function replace(pattern$313,replace$314){
        
        var case$315=pattern$313;
        if ($$$cl1.isOfType(pattern$313,{t:$$$cl1.String})) {
            
            var case$316=replace$314;
            if ($$$cl1.isOfType(replace$314,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.replace(/*NULL PARAM!*/case$315.valueOf()/*NULL PARAM!*/,case$316.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(replace$314,{t:JSString})) {
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.replace(/*NULL PARAM!*/case$315.valueOf()/*NULL PARAM!*/,case$316.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(pattern$313,{ t:'u', l:[{t:JSString},{t:RegExp}]})) {
            
            var case$317=replace$314;
            if ($$$cl1.isOfType(replace$314,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.replace(/*NULL PARAM!*/case$315.$native/*NULL PARAM!*/,case$317.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(replace$314,{t:JSString})) {
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.replace(/*NULL PARAM!*/case$315.$native/*NULL PARAM!*/,case$317.$native));
                /*End dynamic block*/
            }
        }
    }
    $$jSStringAbs.replace=replace;
    replace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'pattern',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JSString},{t:RegExp}]},$an:function(){return[];}},{$nm:'replace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','replace']};};
    function replaceCallback(pattern$318,replace$319){
        
        var case$320=pattern$318;
        if ($$$cl1.isOfType(pattern$318,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JSString($$jSStringAbs.$native.replace(/*NULL PARAM!*/case$320.valueOf()/*NULL PARAM!*/,replace$319));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(pattern$318,{ t:'u', l:[{t:JSString},{t:RegExp}]})) {
            /*Begin dynamic block*/
            return JSString($$jSStringAbs.$native.replace(/*NULL PARAM!*/case$320.$native/*NULL PARAM!*/,replace$319));
            /*End dynamic block*/
        }
    }
    $$jSStringAbs.replaceCallback=replaceCallback;
    replaceCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'pattern',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JSString},{t:RegExp}]},$an:function(){return[];}},{$nm:'replace',$mt:'prm',$pt:'f',$t:{t:JSString},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("replace will recived a set of substrings based on the regex then an Integer for offset, and the examined String",111)),$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','replaceCallback']};};
    function search(regexp$321){
        /*Begin dynamic block*/
        return JSNumber($$jSStringAbs.$native.search(/*NULL PARAM!*/regexp$321.$native));
        /*End dynamic block*/
    }
    $$jSStringAbs.search=search;
    search.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'regexp',$mt:'prm',$t:{t:RegExp},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','search']};};
    $$jSStringAbs.slice$defs$endSlice=function(beginSlice$322,endSlice$323){return null;};
    function slice(beginSlice$322,endSlice$323){
        if(endSlice$323===undefined){endSlice$323=$$jSStringAbs.slice$defs$endSlice(beginSlice$322,endSlice$323);}
        
        var case$324=beginSlice$322;
        if ($$$cl1.isOfType(beginSlice$322,{t:$$$cl1.Integer})) {
            
            var case$325=endSlice$323;
            if ($$$cl1.isOfType(endSlice$323,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return (tmpvar$326=(/*NULL PARAM!*/tmpvar$327=$$jSStringAbs.$native.slice(/*NULL PARAM!*/case$324/*NULL PARAM!*/,case$325),tmpvar$328=(typeof JString==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type JString")),'174:12-174:18','string.ceylon'):JString),tmpvar$328.$$===undefined?new tmpvar$328(tmpvar$327):tmpvar$328(tmpvar$327)),$$$cl1.isOfType(tmpvar$326,{t:$$$cl1.Anything})?tmpvar$326:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'174:12-174:54','string.ceylon'));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(endSlice$323,{t:JSNumber})) {
                /*Begin dynamic block*/
                return (tmpvar$329=(/*NULL PARAM!*/tmpvar$330=$$jSStringAbs.$native.slice(/*NULL PARAM!*/case$324/*NULL PARAM!*/,case$325.$native),tmpvar$331=(typeof JString==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type JString")),'179:12-179:18','string.ceylon'):JString),tmpvar$331.$$===undefined?new tmpvar$331(tmpvar$330):tmpvar$331(tmpvar$330)),$$$cl1.isOfType(tmpvar$329,{t:$$$cl1.Anything})?tmpvar$329:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'179:12-179:61','string.ceylon'));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(endSlice$323,{t:$$$cl1.Null})) {
                /*Begin dynamic block*/
                return (tmpvar$332=(/*NULL PARAM!*/tmpvar$333=$$jSStringAbs.$native.slice(/*NULL PARAM!*/case$324),tmpvar$334=(typeof JString==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type JString")),'184:12-184:18','string.ceylon'):JString),tmpvar$334.$$===undefined?new tmpvar$334(tmpvar$333):tmpvar$334(tmpvar$333)),$$$cl1.isOfType(tmpvar$332,{t:$$$cl1.Anything})?tmpvar$332:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'184:12-184:44','string.ceylon'));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(beginSlice$322,{t:JSNumber})) {
            
            var case$335=endSlice$323;
            if ($$$cl1.isOfType(endSlice$323,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return (tmpvar$336=(/*NULL PARAM!*/tmpvar$337=$$jSStringAbs.$native.slice(/*NULL PARAM!*/case$324.$native/*NULL PARAM!*/,case$335),tmpvar$338=(typeof JString==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type JString")),'192:12-192:18','string.ceylon'):JString),tmpvar$338.$$===undefined?new tmpvar$338(tmpvar$337):tmpvar$338(tmpvar$337)),$$$cl1.isOfType(tmpvar$336,{t:$$$cl1.Anything})?tmpvar$336:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'192:12-192:61','string.ceylon'));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(endSlice$323,{t:JSNumber})) {
                /*Begin dynamic block*/
                return (tmpvar$339=(/*NULL PARAM!*/tmpvar$340=$$jSStringAbs.$native.slice(/*NULL PARAM!*/case$324.$native/*NULL PARAM!*/,case$335.$native),tmpvar$341=(typeof JString==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type JString")),'197:12-197:18','string.ceylon'):JString),tmpvar$341.$$===undefined?new tmpvar$341(tmpvar$340):tmpvar$341(tmpvar$340)),$$$cl1.isOfType(tmpvar$339,{t:$$$cl1.Anything})?tmpvar$339:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'197:12-197:68','string.ceylon'));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(endSlice$323,{t:$$$cl1.Null})) {
                /*Begin dynamic block*/
                return (tmpvar$342=(/*NULL PARAM!*/tmpvar$343=$$jSStringAbs.$native.slice(/*NULL PARAM!*/case$324.$native),tmpvar$344=(typeof JString==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type JString")),'202:12-202:18','string.ceylon'):JString),tmpvar$344.$$===undefined?new tmpvar$344(tmpvar$343):tmpvar$344(tmpvar$343)),$$$cl1.isOfType(tmpvar$342,{t:$$$cl1.Anything})?tmpvar$342:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'202:12-202:51','string.ceylon'));
                /*End dynamic block*/
            }
        }
    }
    $$jSStringAbs.slice=slice;
    slice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'beginSlice',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'endSlice',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','slice']};};
    $$jSStringAbs.split$defs$separator=function(separator$345,limit$346){return null;};
    $$jSStringAbs.split$defs$limit=function(separator$345,limit$346){return null;};
    function split(separator$345,limit$346){
        if(separator$345===undefined){separator$345=$$jSStringAbs.split$defs$separator(separator$345,limit$346);}
        if(limit$346===undefined){limit$346=$$jSStringAbs.split$defs$limit(separator$345,limit$346);}
        
        var case$347=separator$345;
        if ($$$cl1.isOfType(separator$345,{t:$$$cl1.String})) {
            
            var case$348=limit$346;
            if ($$$cl1.isOfType(limit$346,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return JSArray($$jSStringAbs.$native.split(/*NULL PARAM!*/case$347.valueOf()/*NULL PARAM!*/,case$348));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(limit$346,{t:JSNumber})) {
                /*Begin dynamic block*/
                return JSArray($$jSStringAbs.$native.split(/*NULL PARAM!*/case$347.valueOf()/*NULL PARAM!*/,case$348.$native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(limit$346,{t:$$$cl1.Null})) {
                /*Begin dynamic block*/
                return JSArray($$jSStringAbs.$native.split(/*NULL PARAM!*/case$347.valueOf()));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(separator$345,{ t:'u', l:[{t:JSString},{t:RegExp}]})) {
            
            var case$349=limit$346;
            if ($$$cl1.isOfType(limit$346,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return JSArray($$jSStringAbs.$native.split(/*NULL PARAM!*/case$347.$native/*NULL PARAM!*/,case$349));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(limit$346,{t:JSNumber})) {
                /*Begin dynamic block*/
                return JSArray($$jSStringAbs.$native.split(/*NULL PARAM!*/case$347.$native/*NULL PARAM!*/,case$349.$native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(limit$346,{t:$$$cl1.Null})) {
                /*Begin dynamic block*/
                return JSArray($$jSStringAbs.$native.split(/*NULL PARAM!*/case$347));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(separator$345,{t:$$$cl1.Null})) {
            /*Begin dynamic block*/
            return JSArray($$jSStringAbs.$native.split());
            /*End dynamic block*/
        }
    }
    $$jSStringAbs.split=split;
    split.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'separator',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:JSString},{ t:'u', l:[{t:$$$cl1.Null},{t:RegExp}]}]},$an:function(){return[];}},{$nm:'limit',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns array of strings",24)),$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','split']};};
    $$jSStringAbs.substr$defs$length=function(start$350,length$351){return null;};
    function substr(start$350,length$351){
        if(length$351===undefined){length$351=$$jSStringAbs.substr$defs$length(start$350,length$351);}
        
        var case$352=start$350;
        if ($$$cl1.isOfType(start$350,{t:$$$cl1.Integer})) {
            
            var case$353=length$351;
            if ($$$cl1.isOfType(length$351,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.substr(/*NULL PARAM!*/case$352/*NULL PARAM!*/,case$353));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(length$351,{t:JSNumber})) {
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.substr(/*NULL PARAM!*/case$352/*NULL PARAM!*/,case$353.$native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(length$351,{t:$$$cl1.Null})) {
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.substr(/*NULL PARAM!*/case$352));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(start$350,{t:JSNumber})) {
            
            var case$354=length$351;
            if ($$$cl1.isOfType(length$351,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.substr(/*NULL PARAM!*/case$352.$native/*NULL PARAM!*/,case$354));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(length$351,{t:JSNumber})) {
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.substr(/*NULL PARAM!*/case$352.$native/*NULL PARAM!*/,case$354.$native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(length$351,{t:$$$cl1.Null})) {
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.substr(/*NULL PARAM!*/case$352.$native));
                /*End dynamic block*/
            }
        }
    }
    $$jSStringAbs.substr=substr;
    substr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'start',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'length',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','substr']};};
    $$jSStringAbs.substring$defs$indexB=function(indexA$355,indexB$356){return null;};
    function substring(indexA$355,indexB$356){
        if(indexB$356===undefined){indexB$356=$$jSStringAbs.substring$defs$indexB(indexA$355,indexB$356);}
        
        var case$357=indexA$355;
        if ($$$cl1.isOfType(indexA$355,{t:$$$cl1.Integer})) {
            
            var case$358=indexB$356;
            if ($$$cl1.isOfType(indexB$356,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.substring(/*NULL PARAM!*/case$357/*NULL PARAM!*/,case$358));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(indexB$356,{t:JSNumber})) {
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.substring(/*NULL PARAM!*/case$357/*NULL PARAM!*/,case$358.$native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(indexB$356,{t:$$$cl1.Null})) {
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.substring(/*NULL PARAM!*/case$357));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(indexA$355,{t:JSNumber})) {
            
            var case$359=indexB$356;
            if ($$$cl1.isOfType(indexB$356,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.substring(/*NULL PARAM!*/case$357.$native/*NULL PARAM!*/,case$359));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(indexB$356,{t:JSNumber})) {
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.substring(/*NULL PARAM!*/case$357.$native/*NULL PARAM!*/,case$359.$native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(indexB$356,{t:$$$cl1.Null})) {
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.substring(/*NULL PARAM!*/case$357.$native));
                /*End dynamic block*/
            }
        }
    }
    $$jSStringAbs.substring=substring;
    substring.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'indexA',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'indexB',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','substring']};};
    function toLowerCase(){
        /*Begin dynamic block*/
        return JSString($$jSStringAbs.$native.toLowerCase());
        /*End dynamic block*/
    }
    $$jSStringAbs.toLowerCase=toLowerCase;
    toLowerCase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','toLowerCase']};};
    function toUpperCase(){
        /*Begin dynamic block*/
        return JSString($$jSStringAbs.$native.toUpperCase());
        /*End dynamic block*/
    }
    $$jSStringAbs.toUpperCase=toUpperCase;
    toUpperCase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','toUpperCase']};};
    function trim(){
        /*Begin dynamic block*/
        return JSString($$jSStringAbs.$native.trim());
        /*End dynamic block*/
    }
    $$jSStringAbs.trim=trim;
    trim.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSStringAbs','$m','trim']};};
    return $$jSStringAbs;
}
JSStringAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.language','JSStringAbs']};};
exports.JSStringAbs=JSStringAbs;
function $init$JSStringAbs(){
    if (JSStringAbs.$$===undefined){
        $$$cl1.initTypeProto(JSStringAbs,'ceylon.js.language::JSStringAbs',$init$JSObjectAbs());
    }
    return JSStringAbs;
}
exports.$init$JSStringAbs=$init$JSStringAbs;
$init$JSStringAbs();
function JSString(n$360, $$jSString){
    $init$JSString();
    if ($$jSString===undefined)$$jSString=new JSString.$$;
    $$jSString.n$360_=n$360;
    JSStringAbs($$jSString);
    $$$cl1.defineAttr($$jSString,'n$360',function(){return this.n$360_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSString,d:['ceylon.js.language','JSString','$at','n']};});
    $$jSString.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSString,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.language','JSString','$at','native']};}};
    /*Begin dynamic block*/
    $$jSString.$native=n$360;/*End dynamic block*/
    return $$jSString;
}
JSString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSStringAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.language','JSString']};};
exports.JSString=JSString;
function $init$JSString(){
    if (JSString.$$===undefined){
        $$$cl1.initTypeProto(JSString,'ceylon.js.language::JSString',$init$JSStringAbs());
    }
    return JSString;
}
exports.$init$JSString=$init$JSString;
$init$JSString();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
