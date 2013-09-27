(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1"],"$mod-name":"ceylon.js.language","$mod-version":"1.8.5","ceylon.js.language":{"PropertyDescriptor":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"toNative":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"toNative"}},"$at":{"configurable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"configurable"},"descriptor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"descriptor"},"enumerable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"enumerable"}},"$nm":"PropertyDescriptor"},"defineProperties":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.language","$nm":"DataDescriptor"},{"$pk":"ceylon.js.language","$nm":"AccessorDescriptor"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"defineProperties"},"mathLog10":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"mathLog10"},"mathRoot2":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"mathRoot2"},"objectIsSealed":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectIsSealed"},"Math":{"super":{"$pk":"ceylon.js.language","$nm":"MathAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Math"},"objectIsFrozen":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectIsFrozen"},"objectDefineProperty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"prop"},{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.js.language","$nm":"DataDescriptor"},{"$pk":"ceylon.js.language","$nm":"AccessorDescriptor"}]},"$mt":"prm","$nm":"descriptor"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectDefineProperty"},"RegExp":{"super":{"$pk":"ceylon.js.language","$nm":"RegExpAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"RegExp"},"dateUTC":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"year"},{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"month"},{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"day"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"hour"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"minute"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"second"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dateUTC"},"createJSDateYMDInt":{"$t":{"$pk":"ceylon.js.language","$nm":"JSDate"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"day"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"hour"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"minute"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"second"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSDateYMDInt"},"createJSObject":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSObject"},"JSString":{"super":{"$pk":"ceylon.js.language","$nm":"JSStringAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSString"},"createJSNumber":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSNumber"},"$pkg-shared":"1","JSDateAbs":{"abstract":"1","super":{"$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"toLocaleDateString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toLocaleDateString"},"toLocaleString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toLocaleString"},"getSeconds":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getSeconds"},"getUTCSeconds":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUTCSeconds"},"getUTCMonth":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUTCMonth"},"toUTCString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toUTCString"},"setUTCFullYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUTCFullYear"},"getFullYear":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getFullYear"},"getHours":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getHours"},"setUTCHours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUTCHours"},"getTimezoneOffset":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTimezoneOffset"},"getDay":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDay"},"setMinutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMinutes"},"toISOString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toISOString"},"setMilliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMilliseconds"},"getUTCHours":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUTCHours"},"setTime":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTime"},"toLocaleTimeString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toLocaleTimeString"},"getUTCDate":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUTCDate"},"toTimeString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toTimeString"},"setUTCMilliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUTCMilliseconds"},"setSeconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setSeconds"},"setUTCMinutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUTCMinutes"},"setMonth":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMonth"},"toDateString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toDateString"},"setUTCSeconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUTCSeconds"},"getUTCMinutes":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUTCMinutes"},"setDate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"day"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDate"},"getDate":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDate"},"setFullYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setFullYear"},"getTime":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTime"},"toJSON":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJSON"},"setHours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"hour"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHours"},"getMonth":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMonth"},"getUTCFullYear":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUTCFullYear"},"getUTCDay":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUTCDay"},"getUTCMilliseconds":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUTCMilliseconds"},"setUTCMonth":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUTCMonth"},"setUTCDate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"day"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUTCDate"},"getMilliseconds":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMilliseconds"},"getMinutes":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMinutes"}},"$nm":"JSDateAbs"},"objectGetOwnPropertyDescriptor":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"prop"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectGetOwnPropertyDescriptor"},"createJSDate":{"$t":{"$pk":"ceylon.js.language","$nm":"JSDate"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSDate"},"objectKeys":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectKeys"},"objectGetOwnPropertyNames":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectGetOwnPropertyNames"},"objectSeal":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectSeal"},"objectFreeze":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectFreeze"},"arrayIsArray":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"arrayIsArray"},"numberNegativeInfinity":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"numberNegativeInfinity"},"global":{"super":{"$pk":"ceylon.js.language","$nm":"RegExpFlag"},"$mt":"obj","$an":{"shared":[]},"$nm":"global"},"eval":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"js"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"eval"},"JSArrayAbs":{"abstract":"1","super":{"$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"splice":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"howMany"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"splice"},"reverse":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"reverse"},"sort":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[]},"$nm":"sort"},"reduceRight":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"previousValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"currentValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"initialValue"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"previousValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"currentValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"reduceRight"},"forEach":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"forEach"},"lastIndexOf":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"searchElement"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"lastIndexOf"},"pop":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["return type unknown"]},"$nm":"pop"},"indexOf":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"searchElement"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"indexOf"},"join":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"separator"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"join"},"every":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"every"},"concat":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"elementsOrArrays"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"concat"},"reduce":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"previousValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"currentValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"initialValue"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"previousValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"currentValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"reduce"},"push":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"push"},"concatArrays":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSArray"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"arrays"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"concatArrays"},"map":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"map"},"slice":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"begin"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slice"},"sortCompare":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"a"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"b"}]],"$mt":"prm","$pt":"f","$nm":"compare"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"a"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"b"}]],"$mt":"mthd","$nm":"compare"}},"$nm":"sortCompare"},"getLength":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getLength"},"unshift":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"unshift"},"setLength":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"len"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setLength"},"some":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"some"},"filter":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"filter"},"shift":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["return type unknown"]},"$nm":"shift"}},"$nm":"JSArrayAbs"},"dateParse":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"dateTime"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dateParse"},"isFinite":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"num"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isFinite"},"JSArray":{"super":{"$pk":"ceylon.js.language","$nm":"JSArrayAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSArray"},"JSNumber":{"super":{"$pk":"ceylon.js.language","$nm":"JSNumberAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSNumber"},"createJSDateYMD":{"$t":{"$pk":"ceylon.js.language","$nm":"JSDate"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"year"},{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"month"},{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"day"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"hour"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"minute"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"second"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSDateYMD"},"mathLog2e":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"mathLog2e"},"RegExpAbs":{"abstract":"1","super":{"$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"source":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"source"},"test":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"str"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"test"},"multiline":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"multiline"},"global":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"global"},"exec":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"str"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"exec"},"getLastindex":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getLastindex"},"ignoreCase":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"ignoreCase"},"setLastindex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setLastindex"}},"$c":{"RegResult":{"super":{"$pk":"ceylon.js.language","$nm":"RegResultAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"RegResult"},"RegResultAbs":{"abstract":"1","super":{"$pk":"ceylon.js.language","$nm":"JSArrayAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"index":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"index"},"input":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"input"}},"$nm":"RegResultAbs"}},"$nm":"RegExpAbs"},"isNaN":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isNaN"},"objectCreate":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"proto"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.language","$nm":"DataDescriptor"},{"$pk":"ceylon.js.language","$nm":"AccessorDescriptor"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectCreate"},"numberMinValue":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"numberMinValue"},"JSObject":{"super":{"$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSObject"},"mathLog2":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"mathLog2"},"DataDescriptor":{"super":{"$pk":"ceylon.js.language","$nm":"PropertyDescriptor"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"configurable"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"descriptor"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"enumerable"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"writable"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"val"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toNative":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"toNative"}},"$at":{"val":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[]},"$nm":"val"},"configurable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"configurable"},"descriptor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"descriptor"},"writable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"writable"},"enumerable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"enumerable"}},"$nm":"DataDescriptor"},"parseFloat":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"float"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parseFloat"},"RegExpFlag":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.language","$nm":"global"},{"$pk":"ceylon.js.language","$nm":"ignore"},{"$pk":"ceylon.js.language","$nm":"multiple"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"RegExpFlag"},"parseInt":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"int"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"radix"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parseInt"},"dateUTCInt":{"$t":{"$pk":"ceylon.js.language","$nm":"JSDate"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"day"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"hour"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"minute"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"second"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dateUTCInt"},"objectIsExtensible":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectIsExtensible"},"JSNumberAbs":{"abstract":"1","super":{"$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"toFixed":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"digits"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toFixed"},"toExponential":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"fractionDigits"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toExponential"},"toPrecision":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"precision"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toPrecision"}},"$nm":"JSNumberAbs"},"JSStringAbs":{"abstract":"1","super":{"$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"lastIndexOf":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"searchValue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"lastIndexOf"},"indexOf":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"searchValue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"indexOf"},"concat":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"prm","seq":"1","$nm":"strings","$min1":"1"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"concat"},"replace":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"},{"$pk":"ceylon.js.language","$nm":"RegExp"}]},"$mt":"prm","$nm":"pattern"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"replace"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replace"},"toUpperCase":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toUpperCase"},"replaceCallback":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"},{"$pk":"ceylon.js.language","$nm":"RegExp"}]},"$mt":"prm","$nm":"pattern"},{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"match"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"psOffsetExamined"}]],"$mt":"prm","$pt":"f","$nm":"replace"}]],"$mt":"mthd","$an":{"shared":[],"doc":["replace will recived a set of substrings based on the regex then an Integer for offset, and the examined String"]},"$m":{"replace":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"match"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"psOffsetExamined"}]],"$mt":"mthd","$nm":"replace"}},"$nm":"replaceCallback"},"charCodeAt":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"charCodeAt"},"search":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"RegExp"},"$mt":"prm","$nm":"regexp"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"search"},"toLowerCase":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toLowerCase"},"substring":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"indexA"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"indexB"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"substring"},"length":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"slice":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"beginSlice"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"endSlice"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slice"},"split":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"RegExp"}]}]},"$mt":"prm","$def":"1","$nm":"separator"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"limit"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns array of strings"]},"$nm":"split"},"match":{"$t":{"$pk":"ceylon.js.language","$nm":"RegResult"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"RegExp"},"$mt":"prm","$nm":"regexp"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"match"},"trim":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"trim"},"substr":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"start"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"substr"},"charAt":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"charAt"}},"$nm":"JSStringAbs"},"JSDate":{"super":{"$pk":"ceylon.js.language","$nm":"JSDateAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSDate"},"multiple":{"super":{"$pk":"ceylon.js.language","$nm":"RegExpFlag"},"$mt":"obj","$an":{"shared":[]},"$nm":"multiple"},"numberMaxValue":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"numberMaxValue"},"objectPreventExtensions":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectPreventExtensions"},"ignore":{"super":{"$pk":"ceylon.js.language","$nm":"RegExpFlag"},"$mt":"obj","$an":{"shared":[]},"$nm":"ignore"},"mathRoot1_2":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"mathRoot1_2"},"JSFunctionAbs":{"abstract":"1","super":{"$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"isGenerator":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isGenerator"},"length":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"bind":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"thisArg"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bind"}},"$nm":"JSFunctionAbs"},"dateNow":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"dateNow"},"AccessorDescriptor":{"super":{"$pk":"ceylon.js.language","$nm":"PropertyDescriptor"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$an":{"shared":[],"actual":[]},"$nm":"configurable"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"descriptor"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"enumerable"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"get"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"set"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toNative":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"toNative"}},"$at":{"configurable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"configurable"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"get"},"descriptor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"descriptor"},"set":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"set"},"enumerable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"enumerable"}},"$nm":"AccessorDescriptor"},"createJSRegExp":{"$t":{"$pk":"ceylon.js.language","$nm":"RegExp"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"pattern"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.language","$nm":"RegExpFlag"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"flags"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSRegExp"},"numberPositiveInfinity":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"numberPositiveInfinity"},"createJSString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"string"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSString"},"JSFunction":{"super":{"$pk":"ceylon.js.language","$nm":"JSFunctionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSFunction"},"JSObjectAbs":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"isPrototypeOf":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isPrototypeOf"},"callJS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$nm":"thisArg"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"callJS"},"call":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"thisArg"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"call"},"apply":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"thisArg"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"apply"},"setConstructor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSFunction"},"$mt":"prm","$nm":"constructor"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setConstructor"},"propertyIsEnumerable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"prop"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"propertyIsEnumerable"},"toString":{"$t":{"$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toString"},"setPrototype":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"prototype"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPrototype"},"applyJS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$nm":"thisArg"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"applyJS"},"hasOwnProperty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"prop"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasOwnProperty"},"getConstructor":{"$t":{"$pk":"ceylon.js.language","$nm":"JSFunction"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getConstructor"},"getPrototype":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getPrototype"}},"$at":{"native":{"$t":{"$pk":"ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"native"}},"$nm":"JSObjectAbs"},"mathLog10e":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"mathLog10e"},"MathAbs":{"abstract":"1","super":{"$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"min":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSNumber"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"numbers"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"min"},"atan":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"atan"},"max":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSNumber"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"numbers"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"max"},"pow":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"base"},{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"exponent"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"pow"},"asin":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"asin"},"cos":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"cos"},"ceil":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ceil"},"sqrt":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"sqrt"},"random":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"random"},"round":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"round"},"log":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"log"},"exp":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"exp"},"atan2":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"y"},{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"atan2"},"abs":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"abs"},"floor":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"floor"},"sin":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"sin"},"tan":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"tan"}},"$nm":"MathAbs"},"createJSDateNow":{"$t":{"$pk":"ceylon.js.language","$nm":"JSDate"},"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSDateNow"},"objectGetPrototypeOf":{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"objectGetPrototypeOf"},"createJSArray":{"$t":{"$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSArray"},"mathPi":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"mathPi"},"mathE":{"$t":{"$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"mathE"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl32209=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl32209.$addmod$($$$cl32209,'ceylon.language/0.6.1');
exports.$pkg$ans$ceylon$js$language=function(){return[$$$cl32209.shared()];};
exports.$mod$ans$=function(){return[$$$cl32209.doc($$$cl32209.String("JavaScript 1.8.5",16))];};

//MethodDefinition createJSString at string.ceylon (3:0-7:0)
function createJSString(string$32210){
    /*Begin dynamic block*/
    return JSString((typeof String==='undefined'||String===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: String")),'5:18-5:23','string.ceylon'):String)(/*NULL PARAM!*/string$32210));
    /*End dynamic block*/
}
exports.createJSString=createJSString;
createJSString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'string',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','createJSString']};};

//ClassDefinition JSStringAbs at string.ceylon (9:0-352:0)
function JSStringAbs($$jSStringAbs){
    $init$JSStringAbs();
    if ($$jSStringAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$jSStringAbs);
    return $$jSStringAbs;
}
JSStringAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.language','JSStringAbs']};};
exports.JSStringAbs=JSStringAbs;
function $init$JSStringAbs(){
    if (JSStringAbs.$$===undefined){
        $$$cl32209.initTypeProto(JSStringAbs,'ceylon.js.language::JSStringAbs',$init$JSObjectAbs());
        (function($$jSStringAbs){
            
            //MethodDefinition length at string.ceylon (11:4-15:4)
            $$jSStringAbs.length=function length(){
                var $$jSStringAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSStringAbs.$native.length);
                /*End dynamic block*/
            };$$jSStringAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSStringAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','length']};};
            
            //MethodDefinition charAt at string.ceylon (17:4-29:4)
            $$jSStringAbs.charAt=function charAt(index$32211){
                var $$jSStringAbs=this;
                //Switch statement at string.ceylon (18:8-28:2)
                var case$32212=index$32211;
                if ($$$cl32209.isOfType(index$32211,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    return JSString($$jSStringAbs.$native.charAt(/*NULL PARAM!*/case$32212));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(index$32211,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSString($$jSStringAbs.$native.charAt(/*NULL PARAM!*/case$32212.$native));
                    /*End dynamic block*/
                }//End switch statement at string.ceylon (18:8-28:2)
            };$$jSStringAbs.charAt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','charAt']};};
            
            //MethodDefinition charCodeAt at string.ceylon (31:4-43:4)
            $$jSStringAbs.charCodeAt=function charCodeAt(index$32213){
                var $$jSStringAbs=this;
                //Switch statement at string.ceylon (32:8-42:2)
                var case$32214=index$32213;
                if ($$$cl32209.isOfType(index$32213,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    return JSNumber($$jSStringAbs.$native.charCodeAt(/*NULL PARAM!*/case$32214));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(index$32213,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber($$jSStringAbs.$native.charCodeAt(/*NULL PARAM!*/case$32214.$native));
                    /*End dynamic block*/
                }//End switch statement at string.ceylon (32:8-42:2)
            };$$jSStringAbs.charCodeAt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','charCodeAt']};};
            
            //MethodDefinition concat at string.ceylon (45:4-49:4)
            $$jSStringAbs.concat=function concat(strings$32215){
                var $$jSStringAbs=this;
                if(strings$32215===undefined){strings$32215=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JSString(JSFunction($$jSStringAbs.$native.concat).$apply(null,(tmpvar$32216=(function(){
                    //SpreadOp at 47:66-47:80
                    var lst$32217=[];
                    var it$32218=strings$32215.iterator();
                    var elem$32219;
                    while ((elem$32219=it$32218.next())!==$$$cl32209.getFinished()){
                        lst$32217.push(elem$32219.$native);
                    }
                    return $$$cl32209.ArraySequence(lst$32217);
                }()),$$$cl32209.isOfType(tmpvar$32216,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$32216:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'47:66-47:80','string.ceylon'))));
                /*End dynamic block*/
            };$$jSStringAbs.concat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'strings',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequence,a:{Element:{t:JSString}}},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','concat']};};
            
            //MethodDefinition indexOf at string.ceylon (51:4-79:4)
            $$jSStringAbs.indexOf$defs$fromIndex=function(searchValue$32220,fromIndex$32221){var $$jSStringAbs=this;
            return (0);};
            $$jSStringAbs.indexOf=function indexOf(searchValue$32220,fromIndex$32221){
                var $$jSStringAbs=this;
                if(fromIndex$32221===undefined){fromIndex$32221=$$jSStringAbs.indexOf$defs$fromIndex(searchValue$32220,fromIndex$32221);}
                //Switch statement at string.ceylon (52:8-78:8)
                var case$32222=searchValue$32220;
                if ($$$cl32209.isOfType(searchValue$32220,{t:$$$cl32209.String})) {
                    //Switch statement at string.ceylon (54:12-64:9)
                    var case$32223=fromIndex$32221;
                    if ($$$cl32209.isOfType(fromIndex$32221,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return JSNumber($$jSStringAbs.$native.indexOf(/*NULL PARAM!*/case$32222.valueOf()/*NULL PARAM!*/,case$32223));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(fromIndex$32221,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSNumber($$jSStringAbs.$native.indexOf(/*NULL PARAM!*/case$32222.valueOf()/*NULL PARAM!*/,case$32223.$native));
                        /*End dynamic block*/
                    }//End switch statement at string.ceylon (54:12-64:9)
                }else if ($$$cl32209.isOfType(searchValue$32220,{t:JSString})) {
                    //Switch statement at string.ceylon (67:12-77:9)
                    var case$32224=fromIndex$32221;
                    if ($$$cl32209.isOfType(fromIndex$32221,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return JSNumber($$jSStringAbs.$native.indexOf(/*NULL PARAM!*/case$32222.$native/*NULL PARAM!*/,case$32224));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(fromIndex$32221,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSNumber($$jSStringAbs.$native.indexOf(/*NULL PARAM!*/case$32222.$native/*NULL PARAM!*/,case$32224.$native));
                        /*End dynamic block*/
                    }//End switch statement at string.ceylon (67:12-77:9)
                }//End switch statement at string.ceylon (52:8-78:8)
            };$$jSStringAbs.indexOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'searchValue',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JSString}]},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','indexOf']};};
            
            //MethodDefinition lastIndexOf at string.ceylon (81:4-109:4)
            $$jSStringAbs.lastIndexOf$defs$fromIndex=function(searchValue$32225,fromIndex$32226){var $$jSStringAbs=this;
            return (0);};
            $$jSStringAbs.lastIndexOf=function lastIndexOf(searchValue$32225,fromIndex$32226){
                var $$jSStringAbs=this;
                if(fromIndex$32226===undefined){fromIndex$32226=$$jSStringAbs.lastIndexOf$defs$fromIndex(searchValue$32225,fromIndex$32226);}
                //Switch statement at string.ceylon (82:8-108:8)
                var case$32227=searchValue$32225;
                if ($$$cl32209.isOfType(searchValue$32225,{t:$$$cl32209.String})) {
                    //Switch statement at string.ceylon (84:12-94:9)
                    var case$32228=fromIndex$32226;
                    if ($$$cl32209.isOfType(fromIndex$32226,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return JSNumber($$jSStringAbs.$native.lastIndexOf(/*NULL PARAM!*/case$32227.valueOf()/*NULL PARAM!*/,case$32228));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(fromIndex$32226,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSNumber($$jSStringAbs.$native.lastIndexOf(/*NULL PARAM!*/case$32227.valueOf()/*NULL PARAM!*/,case$32228.$native));
                        /*End dynamic block*/
                    }//End switch statement at string.ceylon (84:12-94:9)
                }else if ($$$cl32209.isOfType(searchValue$32225,{t:JSString})) {
                    //Switch statement at string.ceylon (97:12-107:9)
                    var case$32229=fromIndex$32226;
                    if ($$$cl32209.isOfType(fromIndex$32226,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return JSNumber($$jSStringAbs.$native.lastIndexOf(/*NULL PARAM!*/case$32227.$native/*NULL PARAM!*/,case$32229));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(fromIndex$32226,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSNumber($$jSStringAbs.$native.lastIndexOf(/*NULL PARAM!*/case$32227.$native/*NULL PARAM!*/,case$32229.$native));
                        /*End dynamic block*/
                    }//End switch statement at string.ceylon (97:12-107:9)
                }//End switch statement at string.ceylon (82:8-108:8)
            };$$jSStringAbs.lastIndexOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'searchValue',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JSString}]},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','lastIndexOf']};};
            
            //MethodDefinition match at string.ceylon (111:4-115:4)
            $$jSStringAbs.match=function match(regexp$32230){
                var $$jSStringAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$32231=RegExp.RegResult$RegExpAbs(/*NULL PARAM!*/$$jSStringAbs.$native.match(/*NULL PARAM!*/regexp$32230.$native)),$$$cl32209.isOfType(tmpvar$32231,{t:$$$cl32209.Anything})?tmpvar$32231:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'113:16-113:60','string.ceylon'));
                /*End dynamic block*/
            };$$jSStringAbs.match.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:RegExpAbs.RegResult$RegExpAbs},$ps:[{$nm:'regexp',$mt:'prm',$t:{t:RegExp},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','match']};};
            
            //MethodDefinition replace at string.ceylon (117:4-145:4)
            $$jSStringAbs.replace=function replace(pattern$32232,replace$32233){
                var $$jSStringAbs=this;
                //Switch statement at string.ceylon (118:2-144:2)
                var case$32234=pattern$32232;
                if ($$$cl32209.isOfType(pattern$32232,{t:$$$cl32209.String})) {
                    //Switch statement at string.ceylon (120:12-130:3)
                    var case$32235=replace$32233;
                    if ($$$cl32209.isOfType(replace$32233,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.replace(/*NULL PARAM!*/case$32234.valueOf()/*NULL PARAM!*/,case$32235.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(replace$32233,{t:JSString})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.replace(/*NULL PARAM!*/case$32234.valueOf()/*NULL PARAM!*/,case$32235.$native));
                        /*End dynamic block*/
                    }//End switch statement at string.ceylon (120:12-130:3)
                }else if ($$$cl32209.isOfType(pattern$32232,{ t:'u', l:[{t:JSString},{t:RegExp}]})) {
                    //Switch statement at string.ceylon (133:3-143:3)
                    var case$32236=replace$32233;
                    if ($$$cl32209.isOfType(replace$32233,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.replace(/*NULL PARAM!*/case$32234.$native/*NULL PARAM!*/,case$32236.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(replace$32233,{t:JSString})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.replace(/*NULL PARAM!*/case$32234.$native/*NULL PARAM!*/,case$32236.$native));
                        /*End dynamic block*/
                    }//End switch statement at string.ceylon (133:3-143:3)
                }//End switch statement at string.ceylon (118:2-144:2)
            };$$jSStringAbs.replace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'pattern',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JSString},{t:RegExp}]},$an:function(){return[];}},{$nm:'replace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JSString}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','replace']};};
            
            //MethodDefinition replaceCallback at string.ceylon (147:4-160:4)
            $$jSStringAbs.replaceCallback=function replaceCallback(pattern$32237,replace$32238){
                var $$jSStringAbs=this;
                //Switch statement at string.ceylon (149:2-159:2)
                var case$32239=pattern$32237;
                if ($$$cl32209.isOfType(pattern$32237,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return JSString($$jSStringAbs.$native.replace(/*NULL PARAM!*/case$32239.valueOf()/*NULL PARAM!*/,replace$32238));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(pattern$32237,{ t:'u', l:[{t:JSString},{t:RegExp}]})) {
                    /*Begin dynamic block*/
                    return JSString($$jSStringAbs.$native.replace(/*NULL PARAM!*/case$32239.$native/*NULL PARAM!*/,replace$32238));
                    /*End dynamic block*/
                }//End switch statement at string.ceylon (149:2-159:2)
            };$$jSStringAbs.replaceCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'pattern',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JSString},{t:RegExp}]},$an:function(){return[];}},{$nm:'replace',$mt:'prm',$pt:'f',$t:{t:JSString},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("replace will recived a set of substrings based on the regex then an Integer for offset, and the examined String",111)),$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','replaceCallback']};};
            
            //MethodDefinition search at string.ceylon (162:4-166:4)
            $$jSStringAbs.search=function search(regexp$32240){
                var $$jSStringAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSStringAbs.$native.search(/*NULL PARAM!*/regexp$32240.$native));
                /*End dynamic block*/
            };$$jSStringAbs.search.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'regexp',$mt:'prm',$t:{t:RegExp},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','search']};};
            
            //MethodDefinition slice at string.ceylon (168:4-206:4)
            $$jSStringAbs.slice$defs$endSlice=function(beginSlice$32241,endSlice$32242){var $$jSStringAbs=this;
            return null;};
            $$jSStringAbs.slice=function slice(beginSlice$32241,endSlice$32242){
                var $$jSStringAbs=this;
                if(endSlice$32242===undefined){endSlice$32242=$$jSStringAbs.slice$defs$endSlice(beginSlice$32241,endSlice$32242);}
                //Switch statement at string.ceylon (169:2-205:2)
                var case$32243=beginSlice$32241;
                if ($$$cl32209.isOfType(beginSlice$32241,{t:$$$cl32209.Integer})) {
                    //Switch statement at string.ceylon (171:3-186:3)
                    var case$32244=endSlice$32242;
                    if ($$$cl32209.isOfType(endSlice$32242,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return (tmpvar$32245=(/*NULL PARAM!*/tmpvar$32246=$$jSStringAbs.$native.slice(/*NULL PARAM!*/case$32243/*NULL PARAM!*/,case$32244),tmpvar$32247=(typeof JString==='undefined'?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined type JString")),'174:12-174:18','string.ceylon'):JString),tmpvar$32247.$$===undefined?new tmpvar$32247(tmpvar$32246):tmpvar$32247(tmpvar$32246)),$$$cl32209.isOfType(tmpvar$32245,{t:$$$cl32209.Anything})?tmpvar$32245:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'174:12-174:54','string.ceylon'));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(endSlice$32242,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return (tmpvar$32248=(/*NULL PARAM!*/tmpvar$32249=$$jSStringAbs.$native.slice(/*NULL PARAM!*/case$32243/*NULL PARAM!*/,case$32244.$native),tmpvar$32250=(typeof JString==='undefined'?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined type JString")),'179:12-179:18','string.ceylon'):JString),tmpvar$32250.$$===undefined?new tmpvar$32250(tmpvar$32249):tmpvar$32250(tmpvar$32249)),$$$cl32209.isOfType(tmpvar$32248,{t:$$$cl32209.Anything})?tmpvar$32248:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'179:12-179:61','string.ceylon'));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(endSlice$32242,{t:$$$cl32209.Null})) {
                        /*Begin dynamic block*/
                        return (tmpvar$32251=(/*NULL PARAM!*/tmpvar$32252=$$jSStringAbs.$native.slice(/*NULL PARAM!*/case$32243),tmpvar$32253=(typeof JString==='undefined'?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined type JString")),'184:12-184:18','string.ceylon'):JString),tmpvar$32253.$$===undefined?new tmpvar$32253(tmpvar$32252):tmpvar$32253(tmpvar$32252)),$$$cl32209.isOfType(tmpvar$32251,{t:$$$cl32209.Anything})?tmpvar$32251:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'184:12-184:44','string.ceylon'));
                        /*End dynamic block*/
                    }//End switch statement at string.ceylon (171:3-186:3)
                }else if ($$$cl32209.isOfType(beginSlice$32241,{t:JSNumber})) {
                    //Switch statement at string.ceylon (189:3-204:3)
                    var case$32254=endSlice$32242;
                    if ($$$cl32209.isOfType(endSlice$32242,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return (tmpvar$32255=(/*NULL PARAM!*/tmpvar$32256=$$jSStringAbs.$native.slice(/*NULL PARAM!*/case$32243.$native/*NULL PARAM!*/,case$32254),tmpvar$32257=(typeof JString==='undefined'?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined type JString")),'192:12-192:18','string.ceylon'):JString),tmpvar$32257.$$===undefined?new tmpvar$32257(tmpvar$32256):tmpvar$32257(tmpvar$32256)),$$$cl32209.isOfType(tmpvar$32255,{t:$$$cl32209.Anything})?tmpvar$32255:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'192:12-192:61','string.ceylon'));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(endSlice$32242,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return (tmpvar$32258=(/*NULL PARAM!*/tmpvar$32259=$$jSStringAbs.$native.slice(/*NULL PARAM!*/case$32243.$native/*NULL PARAM!*/,case$32254.$native),tmpvar$32260=(typeof JString==='undefined'?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined type JString")),'197:12-197:18','string.ceylon'):JString),tmpvar$32260.$$===undefined?new tmpvar$32260(tmpvar$32259):tmpvar$32260(tmpvar$32259)),$$$cl32209.isOfType(tmpvar$32258,{t:$$$cl32209.Anything})?tmpvar$32258:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'197:12-197:68','string.ceylon'));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(endSlice$32242,{t:$$$cl32209.Null})) {
                        /*Begin dynamic block*/
                        return (tmpvar$32261=(/*NULL PARAM!*/tmpvar$32262=$$jSStringAbs.$native.slice(/*NULL PARAM!*/case$32243.$native),tmpvar$32263=(typeof JString==='undefined'?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined type JString")),'202:12-202:18','string.ceylon'):JString),tmpvar$32263.$$===undefined?new tmpvar$32263(tmpvar$32262):tmpvar$32263(tmpvar$32262)),$$$cl32209.isOfType(tmpvar$32261,{t:$$$cl32209.Anything})?tmpvar$32261:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'202:12-202:51','string.ceylon'));
                        /*End dynamic block*/
                    }//End switch statement at string.ceylon (189:3-204:3)
                }//End switch statement at string.ceylon (169:2-205:2)
            };$$jSStringAbs.slice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'beginSlice',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'endSlice',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Integer},{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','slice']};};
            
            //MethodDefinition split at string.ceylon (208:4-252:4)
            $$jSStringAbs.split$defs$separator=function(separator$32264,limit$32265){var $$jSStringAbs=this;
            return null;};
            $$jSStringAbs.split$defs$limit=function(separator$32264,limit$32265){var $$jSStringAbs=this;
            return null;};
            $$jSStringAbs.split=function split(separator$32264,limit$32265){
                var $$jSStringAbs=this;
                if(separator$32264===undefined){separator$32264=$$jSStringAbs.split$defs$separator(separator$32264,limit$32265);}
                if(limit$32265===undefined){limit$32265=$$jSStringAbs.split$defs$limit(separator$32264,limit$32265);}
                //Switch statement at string.ceylon (210:8-251:8)
                var case$32266=separator$32264;
                if ($$$cl32209.isOfType(separator$32264,{t:$$$cl32209.String})) {
                    //Switch statement at string.ceylon (212:12-227:9)
                    var case$32267=limit$32265;
                    if ($$$cl32209.isOfType(limit$32265,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSStringAbs.$native.split(/*NULL PARAM!*/case$32266.valueOf()/*NULL PARAM!*/,case$32267));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(limit$32265,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSStringAbs.$native.split(/*NULL PARAM!*/case$32266.valueOf()/*NULL PARAM!*/,case$32267.$native));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(limit$32265,{t:$$$cl32209.Null})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSStringAbs.$native.split(/*NULL PARAM!*/case$32266.valueOf()));
                        /*End dynamic block*/
                    }//End switch statement at string.ceylon (212:12-227:9)
                }else if ($$$cl32209.isOfType(separator$32264,{ t:'u', l:[{t:JSString},{t:RegExp}]})) {
                    //Switch statement at string.ceylon (230:12-245:9)
                    var case$32268=limit$32265;
                    if ($$$cl32209.isOfType(limit$32265,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSStringAbs.$native.split(/*NULL PARAM!*/case$32266.$native/*NULL PARAM!*/,case$32268));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(limit$32265,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSStringAbs.$native.split(/*NULL PARAM!*/case$32266.$native/*NULL PARAM!*/,case$32268.$native));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(limit$32265,{t:$$$cl32209.Null})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSStringAbs.$native.split(/*NULL PARAM!*/case$32266));
                        /*End dynamic block*/
                    }//End switch statement at string.ceylon (230:12-245:9)
                }else if ($$$cl32209.isOfType(separator$32264,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSArray($$jSStringAbs.$native.split());
                    /*End dynamic block*/
                }//End switch statement at string.ceylon (210:8-251:8)
            };$$jSStringAbs.split.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'separator',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JSString},{ t:'u', l:[{t:$$$cl32209.Null},{t:RegExp}]}]},$an:function(){return[];}},{$nm:'limit',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Integer},{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("returns array of strings",24)),$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','split']};};
            
            //MethodDefinition substr at string.ceylon (254:4-292:4)
            $$jSStringAbs.substr$defs$length=function(start$32269,length$32270){var $$jSStringAbs=this;
            return null;};
            $$jSStringAbs.substr=function substr(start$32269,length$32270){
                var $$jSStringAbs=this;
                if(length$32270===undefined){length$32270=$$jSStringAbs.substr$defs$length(start$32269,length$32270);}
                //Switch statement at string.ceylon (255:8-291:5)
                var case$32271=start$32269;
                if ($$$cl32209.isOfType(start$32269,{t:$$$cl32209.Integer})) {
                    //Switch statement at string.ceylon (257:12-272:6)
                    var case$32272=length$32270;
                    if ($$$cl32209.isOfType(length$32270,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substr(/*NULL PARAM!*/case$32271/*NULL PARAM!*/,case$32272));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(length$32270,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substr(/*NULL PARAM!*/case$32271/*NULL PARAM!*/,case$32272.$native));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(length$32270,{t:$$$cl32209.Null})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substr(/*NULL PARAM!*/case$32271));
                        /*End dynamic block*/
                    }//End switch statement at string.ceylon (257:12-272:6)
                }else if ($$$cl32209.isOfType(start$32269,{t:JSNumber})) {
                    //Switch statement at string.ceylon (275:6-290:6)
                    var case$32273=length$32270;
                    if ($$$cl32209.isOfType(length$32270,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substr(/*NULL PARAM!*/case$32271.$native/*NULL PARAM!*/,case$32273));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(length$32270,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substr(/*NULL PARAM!*/case$32271.$native/*NULL PARAM!*/,case$32273.$native));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(length$32270,{t:$$$cl32209.Null})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substr(/*NULL PARAM!*/case$32271.$native));
                        /*End dynamic block*/
                    }//End switch statement at string.ceylon (275:6-290:6)
                }//End switch statement at string.ceylon (255:8-291:5)
            };$$jSStringAbs.substr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'start',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'length',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Integer},{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','substr']};};
            
            //MethodDefinition substring at string.ceylon (294:4-332:1)
            $$jSStringAbs.substring$defs$indexB=function(indexA$32274,indexB$32275){var $$jSStringAbs=this;
            return null;};
            $$jSStringAbs.substring=function substring(indexA$32274,indexB$32275){
                var $$jSStringAbs=this;
                if(indexB$32275===undefined){indexB$32275=$$jSStringAbs.substring$defs$indexB(indexA$32274,indexB$32275);}
                //Switch statement at string.ceylon (295:8-331:5)
                var case$32276=indexA$32274;
                if ($$$cl32209.isOfType(indexA$32274,{t:$$$cl32209.Integer})) {
                    //Switch statement at string.ceylon (297:12-312:6)
                    var case$32277=indexB$32275;
                    if ($$$cl32209.isOfType(indexB$32275,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substring(/*NULL PARAM!*/case$32276/*NULL PARAM!*/,case$32277));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(indexB$32275,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substring(/*NULL PARAM!*/case$32276/*NULL PARAM!*/,case$32277.$native));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(indexB$32275,{t:$$$cl32209.Null})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substring(/*NULL PARAM!*/case$32276));
                        /*End dynamic block*/
                    }//End switch statement at string.ceylon (297:12-312:6)
                }else if ($$$cl32209.isOfType(indexA$32274,{t:JSNumber})) {
                    //Switch statement at string.ceylon (315:6-330:6)
                    var case$32278=indexB$32275;
                    if ($$$cl32209.isOfType(indexB$32275,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substring(/*NULL PARAM!*/case$32276.$native/*NULL PARAM!*/,case$32278));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(indexB$32275,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substring(/*NULL PARAM!*/case$32276.$native/*NULL PARAM!*/,case$32278.$native));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(indexB$32275,{t:$$$cl32209.Null})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substring(/*NULL PARAM!*/case$32276.$native));
                        /*End dynamic block*/
                    }//End switch statement at string.ceylon (315:6-330:6)
                }//End switch statement at string.ceylon (295:8-331:5)
            };$$jSStringAbs.substring.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'indexA',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'indexB',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Integer},{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','substring']};};
            
            //MethodDefinition toLowerCase at string.ceylon (334:1-338:1)
            $$jSStringAbs.toLowerCase=function toLowerCase(){
                var $$jSStringAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.toLowerCase());
                /*End dynamic block*/
            };$$jSStringAbs.toLowerCase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSStringAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','toLowerCase']};};
            
            //MethodDefinition toUpperCase at string.ceylon (340:1-344:1)
            $$jSStringAbs.toUpperCase=function toUpperCase(){
                var $$jSStringAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.toUpperCase());
                /*End dynamic block*/
            };$$jSStringAbs.toUpperCase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSStringAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','toUpperCase']};};
            
            //MethodDefinition trim at string.ceylon (346:1-350:1)
            $$jSStringAbs.trim=function trim(){
                var $$jSStringAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.trim());
                /*End dynamic block*/
            };$$jSStringAbs.trim.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSStringAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSStringAbs','$m','trim']};};
        })(JSStringAbs.$$.prototype);
    }
    return JSStringAbs;
}
exports.$init$JSStringAbs=$init$JSStringAbs;
$init$JSStringAbs();

//ClassDefinition JSString at string.ceylon (354:0-359:0)
function JSString(n$32279, $$jSString){
    $init$JSString();
    if ($$jSString===undefined)$$jSString=new JSString.$$;
    $$jSString.n$32279_=n$32279;
    JSStringAbs($$jSString);
    
    //AttributeDeclaration native at string.ceylon (355:1-355:29)
    $$jSString.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JSString,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.language','JSString','$at','native']};}};
    /*Begin dynamic block*/
    $$jSString.$native=$$jSString.n$32279;/*End dynamic block*/
    return $$jSString;
}
JSString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSStringAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSString']};};
exports.JSString=JSString;
function $init$JSString(){
    if (JSString.$$===undefined){
        $$$cl32209.initTypeProto(JSString,'ceylon.js.language::JSString',$init$JSStringAbs());
        (function($$jSString){
            
            //AttributeDeclaration native at string.ceylon (355:1-355:29)
            $$$cl32209.defineAttr($$jSString,'n$32279',function(){return this.n$32279_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JSString,d:['ceylon.js.language','JSString','$at','n']};});
        })(JSString.$$.prototype);
    }
    return JSString;
}
exports.$init$JSString=$init$JSString;
$init$JSString();

//ClassDefinition JSFunctionAbs at function.ceylon (1:0-25:0)
function JSFunctionAbs($$jSFunctionAbs){
    $init$JSFunctionAbs();
    if ($$jSFunctionAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$jSFunctionAbs);
    return $$jSFunctionAbs;
}
JSFunctionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.language','JSFunctionAbs']};};
exports.JSFunctionAbs=JSFunctionAbs;
function $init$JSFunctionAbs(){
    if (JSFunctionAbs.$$===undefined){
        $$$cl32209.initTypeProto(JSFunctionAbs,'ceylon.js.language::JSFunctionAbs',$init$JSObjectAbs());
        (function($$jSFunctionAbs){
            
            //MethodDefinition length at function.ceylon (3:1-7:1)
            $$jSFunctionAbs.length=function length(){
                var $$jSFunctionAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSFunctionAbs.$native.length);
                /*End dynamic block*/
            };$$jSFunctionAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSFunctionAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSFunctionAbs','$m','length']};};
            
            //MethodDefinition bind at function.ceylon (9:1-14:1)
            $$jSFunctionAbs.bind=function bind(thisArg$32321,args$32322){
                var $$jSFunctionAbs=this;
                if(args$32322===undefined){args$32322=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                JSFunction($$jSFunctionAbs.$native.bind).$apply(null,(tmpvar$32323=createJSArray([(tmpvar$32324=thisArg$32321.$native,$$$cl32209.isOfType(tmpvar$32324,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$32324:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'12:53-12:66','function.ceylon'))].reifyCeylonType({Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}}})).concat([(tmpvar$32325=(function(){
                    //SpreadOp at 12:76-12:87
                    var lst$32326=[];
                    var it$32327=args$32322.iterator();
                    var elem$32328;
                    while ((elem$32328=it$32327.next())!==$$$cl32209.getFinished()){
                        lst$32326.push(elem$32328.$native);
                    }
                    return $$$cl32209.ArraySequence(lst$32326);
                }()),$$$cl32209.isOfType(tmpvar$32325,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$32325:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'12:76-12:87','function.ceylon'))].reifyCeylonType({Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}}})).$native,$$$cl32209.isOfType(tmpvar$32323,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$32323:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'12:39-12:95','function.ceylon')));
                /*End dynamic block*/
            };$$jSFunctionAbs.bind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'thisArg',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:JSObject}}},$an:function(){return[];}}],$cont:JSFunctionAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSFunctionAbs','$m','bind']};};
            
            //MethodDefinition isGenerator at function.ceylon (16:1-24:1)
            $$jSFunctionAbs.isGenerator=function isGenerator(){
                var $$jSFunctionAbs=this;
                /*Begin dynamic block*/
                if($$jSFunctionAbs.$native.isGenerator()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jSFunctionAbs.isGenerator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:JSFunctionAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSFunctionAbs','$m','isGenerator']};};
        })(JSFunctionAbs.$$.prototype);
    }
    return JSFunctionAbs;
}
exports.$init$JSFunctionAbs=$init$JSFunctionAbs;
$init$JSFunctionAbs();

//ClassDefinition JSFunction at function.ceylon (27:0-32:0)
function JSFunction(n$32329, $$jSFunction){
    $init$JSFunction();
    if ($$jSFunction===undefined)$$jSFunction=new JSFunction.$$;
    $$jSFunction.n$32329_=n$32329;
    JSFunctionAbs($$jSFunction);
    
    //AttributeDeclaration native at function.ceylon (28:1-28:29)
    $$jSFunction.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JSFunction,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.language','JSFunction','$at','native']};}};
    /*Begin dynamic block*/
    $$jSFunction.$native=$$jSFunction.n$32329;/*End dynamic block*/
    return $$jSFunction;
}
JSFunction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSFunctionAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSFunction']};};
exports.JSFunction=JSFunction;
function $init$JSFunction(){
    if (JSFunction.$$===undefined){
        $$$cl32209.initTypeProto(JSFunction,'ceylon.js.language::JSFunction',$init$JSFunctionAbs());
        (function($$jSFunction){
            
            //AttributeDeclaration native at function.ceylon (28:1-28:29)
            $$$cl32209.defineAttr($$jSFunction,'n$32329',function(){return this.n$32329_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JSFunction,d:['ceylon.js.language','JSFunction','$at','n']};});
        })(JSFunction.$$.prototype);
    }
    return JSFunction;
}
exports.$init$JSFunction=$init$JSFunction;
$init$JSFunction();

//MethodDefinition createJSDateNow at date.ceylon (1:0-5:0)
function createJSDateNow(){
    /*Begin dynamic block*/
    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'3:16-3:19','date.ceylon'):Date)());
    /*End dynamic block*/
}
exports.createJSDateNow=createJSDateNow;
createJSDateNow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSDate},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','createJSDateNow']};};

//MethodDefinition createJSDate at date.ceylon (7:0-17:0)
function createJSDate(val$32477){
    /*Begin dynamic block*/
    //Switch statement at date.ceylon (9:2-15:2)
    var case$32478=val$32477;
    if ($$$cl32209.isOfType(val$32477,{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Integer}]})) {
        return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'11:17-11:20','date.ceylon'):Date)(/*NULL PARAM!*/case$32478));
    }else if ($$$cl32209.isOfType(val$32477,{t:JSNumber})) {
        return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'14:17-14:20','date.ceylon'):Date)(/*NULL PARAM!*/case$32478.$native));
    }//End switch statement at date.ceylon (9:2-15:2)
    /*End dynamic block*/
}
exports.createJSDate=createJSDate;
createJSDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSDate},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','createJSDate']};};

//MethodDefinition createJSDateYMD at date.ceylon (19:0-144:0)
function createJSDateYMD(year$32479,month$32480,day$32481,hour$32482,minute$32483,second$32484,milli$32485){
    if(hour$32482===undefined){hour$32482=null;}
    if(minute$32483===undefined){minute$32483=null;}
    if(second$32484===undefined){second$32484=null;}
    if(milli$32485===undefined){milli$32485=null;}
    //Switch statement at date.ceylon (21:1-143:1)
    var case$32486=hour$32482;
    if ($$$cl32209.isOfType(hour$32482,{t:JSNumber})) {
        //Switch statement at date.ceylon (23:2-81:2)
        var case$32487=minute$32483;
        if ($$$cl32209.isOfType(minute$32483,{t:JSNumber})) {
            //Switch statement at date.ceylon (25:3-51:3)
            var case$32488=second$32484;
            if ($$$cl32209.isOfType(second$32484,{t:JSNumber})) {
                //Switch statement at date.ceylon (27:4-37:4)
                var case$32489=milli$32485;
                if ($$$cl32209.isOfType(milli$32485,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'30:20-30:23','date.ceylon'):Date)(/*NULL PARAM!*/year$32479.$native/*NULL PARAM!*/,month$32480.$native/*NULL PARAM!*/,day$32481.$native/*NULL PARAM!*/,case$32486.$native/*NULL PARAM!*/,case$32487.$native/*NULL PARAM!*/,case$32488.$native/*NULL PARAM!*/,case$32489.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32485,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'35:20-35:23','date.ceylon'):Date)(/*NULL PARAM!*/year$32479.$native/*NULL PARAM!*/,month$32480.$native/*NULL PARAM!*/,day$32481.$native/*NULL PARAM!*/,case$32486.$native/*NULL PARAM!*/,case$32487.$native/*NULL PARAM!*/,case$32488.$native));
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (27:4-37:4)
            }else if ($$$cl32209.isOfType(second$32484,{t:$$$cl32209.Null})) {
                //Switch statement at date.ceylon (40:4-50:4)
                var case$32490=milli$32485;
                if ($$$cl32209.isOfType(milli$32485,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'43:20-43:23','date.ceylon'):Date)(/*NULL PARAM!*/year$32479.$native/*NULL PARAM!*/,month$32480.$native/*NULL PARAM!*/,day$32481.$native/*NULL PARAM!*/,case$32486.$native/*NULL PARAM!*/,case$32487.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32490.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32485,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'48:20-48:23','date.ceylon'):Date)(/*NULL PARAM!*/year$32479.$native/*NULL PARAM!*/,month$32480.$native/*NULL PARAM!*/,day$32481.$native/*NULL PARAM!*/,case$32486.$native/*NULL PARAM!*/,case$32487.$native));
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (40:4-50:4)
            }//End switch statement at date.ceylon (25:3-51:3)
        }else if ($$$cl32209.isOfType(minute$32483,{t:$$$cl32209.Null})) {
            //Switch statement at date.ceylon (54:3-80:3)
            var case$32491=second$32484;
            if ($$$cl32209.isOfType(second$32484,{t:JSNumber})) {
                //Switch statement at date.ceylon (56:4-66:4)
                var case$32492=milli$32485;
                if ($$$cl32209.isOfType(milli$32485,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'59:20-59:23','date.ceylon'):Date)(/*NULL PARAM!*/year$32479.$native/*NULL PARAM!*/,month$32480.$native/*NULL PARAM!*/,day$32481.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32491.$native/*NULL PARAM!*/,case$32492.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32485,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'64:20-64:23','date.ceylon'):Date)(/*NULL PARAM!*/year$32479.$native/*NULL PARAM!*/,month$32480.$native/*NULL PARAM!*/,day$32481.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32491.$native));
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (56:4-66:4)
            }else if ($$$cl32209.isOfType(second$32484,{t:$$$cl32209.Null})) {
                //Switch statement at date.ceylon (69:4-79:4)
                var case$32493=milli$32485;
                if ($$$cl32209.isOfType(milli$32485,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'72:20-72:23','date.ceylon'):Date)(/*NULL PARAM!*/year$32479.$native/*NULL PARAM!*/,month$32480.$native/*NULL PARAM!*/,day$32481.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32493.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32485,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'77:20-77:23','date.ceylon'):Date)(/*NULL PARAM!*/year$32479.$native/*NULL PARAM!*/,month$32480.$native/*NULL PARAM!*/,day$32481.$native));
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (69:4-79:4)
            }//End switch statement at date.ceylon (54:3-80:3)
        }//End switch statement at date.ceylon (23:2-81:2)
    }else if ($$$cl32209.isOfType(hour$32482,{t:$$$cl32209.Null})) {
        //Switch statement at date.ceylon (84:2-142:2)
        var case$32494=minute$32483;
        if ($$$cl32209.isOfType(minute$32483,{t:JSNumber})) {
            //Switch statement at date.ceylon (86:3-112:3)
            var case$32495=second$32484;
            if ($$$cl32209.isOfType(second$32484,{t:JSNumber})) {
                //Switch statement at date.ceylon (88:4-98:4)
                var case$32496=milli$32485;
                if ($$$cl32209.isOfType(milli$32485,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'91:20-91:23','date.ceylon'):Date)(/*NULL PARAM!*/year$32479.$native/*NULL PARAM!*/,month$32480.$native/*NULL PARAM!*/,day$32481.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32494.$native/*NULL PARAM!*/,case$32495.$native/*NULL PARAM!*/,case$32496.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32485,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'96:20-96:23','date.ceylon'):Date)(/*NULL PARAM!*/year$32479.$native/*NULL PARAM!*/,month$32480.$native/*NULL PARAM!*/,day$32481.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32494.$native/*NULL PARAM!*/,case$32495.$native));
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (88:4-98:4)
            }else if ($$$cl32209.isOfType(second$32484,{t:$$$cl32209.Null})) {
                //Switch statement at date.ceylon (101:4-111:4)
                var case$32497=milli$32485;
                if ($$$cl32209.isOfType(milli$32485,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'104:20-104:23','date.ceylon'):Date)(/*NULL PARAM!*/year$32479.$native/*NULL PARAM!*/,month$32480.$native/*NULL PARAM!*/,day$32481.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32494.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32497.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32485,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'109:20-109:23','date.ceylon'):Date)(/*NULL PARAM!*/year$32479.$native/*NULL PARAM!*/,month$32480.$native/*NULL PARAM!*/,day$32481.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32494.$native));
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (101:4-111:4)
            }//End switch statement at date.ceylon (86:3-112:3)
        }else if ($$$cl32209.isOfType(minute$32483,{t:$$$cl32209.Null})) {
            //Switch statement at date.ceylon (115:3-141:3)
            var case$32498=second$32484;
            if ($$$cl32209.isOfType(second$32484,{t:JSNumber})) {
                //Switch statement at date.ceylon (117:4-127:4)
                var case$32499=milli$32485;
                if ($$$cl32209.isOfType(milli$32485,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'120:20-120:23','date.ceylon'):Date)(/*NULL PARAM!*/year$32479.$native/*NULL PARAM!*/,month$32480.$native/*NULL PARAM!*/,day$32481.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32498.$native/*NULL PARAM!*/,case$32499.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32485,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'125:20-125:23','date.ceylon'):Date)(/*NULL PARAM!*/year$32479.$native/*NULL PARAM!*/,month$32480.$native/*NULL PARAM!*/,day$32481.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32498.$native));
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (117:4-127:4)
            }else if ($$$cl32209.isOfType(second$32484,{t:$$$cl32209.Null})) {
                //Switch statement at date.ceylon (130:4-140:4)
                var case$32500=milli$32485;
                if ($$$cl32209.isOfType(milli$32485,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'133:20-133:23','date.ceylon'):Date)(/*NULL PARAM!*/year$32479.$native/*NULL PARAM!*/,month$32480.$native/*NULL PARAM!*/,day$32481.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32500.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32485,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'138:20-138:23','date.ceylon'):Date)(/*NULL PARAM!*/year$32479.$native/*NULL PARAM!*/,month$32480.$native/*NULL PARAM!*/,day$32481.$native));
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (130:4-140:4)
            }//End switch statement at date.ceylon (115:3-141:3)
        }//End switch statement at date.ceylon (84:2-142:2)
    }//End switch statement at date.ceylon (21:1-143:1)
}
exports.createJSDateYMD=createJSDateYMD;
createJSDateYMD.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSDate},$ps:[{$nm:'year',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'minute',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'second',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'milli',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','createJSDateYMD']};};

//MethodDefinition createJSDateYMDInt at date.ceylon (146:0-151:0)
function createJSDateYMDInt(year$32501,month$32502,day$32503,hour$32504,minute$32505,second$32506,milli$32507){
    if(hour$32504===undefined){hour$32504=null;}
    if(minute$32505===undefined){minute$32505=null;}
    if(second$32506===undefined){second$32506=null;}
    if(milli$32507===undefined){milli$32507=null;}
    /*Begin dynamic block*/
    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'149:16-149:19','date.ceylon'):Date)(/*NULL PARAM!*/year$32501/*NULL PARAM!*/,month$32502/*NULL PARAM!*/,day$32503/*NULL PARAM!*/,hour$32504/*NULL PARAM!*/,minute$32505/*NULL PARAM!*/,second$32506/*NULL PARAM!*/,milli$32507));
    /*End dynamic block*/
}
exports.createJSDateYMDInt=createJSDateYMDInt;
createJSDateYMDInt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSDate},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl32209.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:$$$cl32209.Integer},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:$$$cl32209.Integer},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]},$an:function(){return[];}},{$nm:'minute',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]},$an:function(){return[];}},{$nm:'second',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]},$an:function(){return[];}},{$nm:'milli',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','createJSDateYMDInt']};};

//MethodDefinition dateNow at date.ceylon (153:0-157:0)
function dateNow(){
    /*Begin dynamic block*/
    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'155:18-155:21','date.ceylon'):Date).now());
    /*End dynamic block*/
}
exports.dateNow=dateNow;
dateNow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','dateNow']};};

//MethodDefinition dateParse at date.ceylon (159:0-171:0)
function dateParse(dateTime$32508){
    //Switch statement at date.ceylon (160:1-170:1)
    var case$32509=dateTime$32508;
    if ($$$cl32209.isOfType(dateTime$32508,{t:$$$cl32209.String})) {
        /*Begin dynamic block*/
        return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'163:19-163:22','date.ceylon'):Date).parse(/*NULL PARAM!*/case$32509.valueOf()));
        /*End dynamic block*/
    }else if ($$$cl32209.isOfType(dateTime$32508,{t:JSString})) {
        /*Begin dynamic block*/
        return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'168:19-168:22','date.ceylon'):Date).parse(/*NULL PARAM!*/case$32509.$native));
        /*End dynamic block*/
    }//End switch statement at date.ceylon (160:1-170:1)
}
exports.dateParse=dateParse;
dateParse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'dateTime',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JSString}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','dateParse']};};

//MethodDefinition dateUTC at date.ceylon (173:0-298:0)
function dateUTC(year$32510,month$32511,day$32512,hour$32513,minute$32514,second$32515,milli$32516){
    if(hour$32513===undefined){hour$32513=null;}
    if(minute$32514===undefined){minute$32514=null;}
    if(second$32515===undefined){second$32515=null;}
    if(milli$32516===undefined){milli$32516=null;}
    //Switch statement at date.ceylon (175:1-297:1)
    var case$32517=hour$32513;
    if ($$$cl32209.isOfType(hour$32513,{t:JSNumber})) {
        //Switch statement at date.ceylon (177:2-235:2)
        var case$32518=minute$32514;
        if ($$$cl32209.isOfType(minute$32514,{t:JSNumber})) {
            //Switch statement at date.ceylon (179:3-205:3)
            var case$32519=second$32515;
            if ($$$cl32209.isOfType(second$32515,{t:JSNumber})) {
                //Switch statement at date.ceylon (181:4-191:4)
                var case$32520=milli$32516;
                if ($$$cl32209.isOfType(milli$32516,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'184:22-184:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32510.$native/*NULL PARAM!*/,month$32511.$native/*NULL PARAM!*/,day$32512.$native/*NULL PARAM!*/,case$32517.$native/*NULL PARAM!*/,case$32518.$native/*NULL PARAM!*/,case$32519.$native/*NULL PARAM!*/,case$32520.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32516,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'189:22-189:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32510.$native/*NULL PARAM!*/,month$32511.$native/*NULL PARAM!*/,day$32512.$native/*NULL PARAM!*/,case$32517.$native/*NULL PARAM!*/,case$32518.$native/*NULL PARAM!*/,case$32519.$native));
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (181:4-191:4)
            }else if ($$$cl32209.isOfType(second$32515,{t:$$$cl32209.Null})) {
                //Switch statement at date.ceylon (194:4-204:4)
                var case$32521=milli$32516;
                if ($$$cl32209.isOfType(milli$32516,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'197:22-197:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32510.$native/*NULL PARAM!*/,month$32511.$native/*NULL PARAM!*/,day$32512.$native/*NULL PARAM!*/,case$32517.$native/*NULL PARAM!*/,case$32518.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32521.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32516,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'202:22-202:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32510.$native/*NULL PARAM!*/,month$32511.$native/*NULL PARAM!*/,day$32512.$native/*NULL PARAM!*/,case$32517.$native/*NULL PARAM!*/,case$32518.$native));
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (194:4-204:4)
            }//End switch statement at date.ceylon (179:3-205:3)
        }else if ($$$cl32209.isOfType(minute$32514,{t:$$$cl32209.Null})) {
            //Switch statement at date.ceylon (208:3-234:3)
            var case$32522=second$32515;
            if ($$$cl32209.isOfType(second$32515,{t:JSNumber})) {
                //Switch statement at date.ceylon (210:4-220:4)
                var case$32523=milli$32516;
                if ($$$cl32209.isOfType(milli$32516,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'213:22-213:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32510.$native/*NULL PARAM!*/,month$32511.$native/*NULL PARAM!*/,day$32512.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32522.$native/*NULL PARAM!*/,case$32523.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32516,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'218:22-218:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32510.$native/*NULL PARAM!*/,month$32511.$native/*NULL PARAM!*/,day$32512.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32522.$native));
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (210:4-220:4)
            }else if ($$$cl32209.isOfType(second$32515,{t:$$$cl32209.Null})) {
                //Switch statement at date.ceylon (223:4-233:4)
                var case$32524=milli$32516;
                if ($$$cl32209.isOfType(milli$32516,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'226:22-226:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32510.$native/*NULL PARAM!*/,month$32511.$native/*NULL PARAM!*/,day$32512.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32524.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32516,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'231:22-231:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32510.$native/*NULL PARAM!*/,month$32511.$native/*NULL PARAM!*/,day$32512.$native));
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (223:4-233:4)
            }//End switch statement at date.ceylon (208:3-234:3)
        }//End switch statement at date.ceylon (177:2-235:2)
    }else if ($$$cl32209.isOfType(hour$32513,{t:$$$cl32209.Null})) {
        //Switch statement at date.ceylon (238:2-296:2)
        var case$32525=minute$32514;
        if ($$$cl32209.isOfType(minute$32514,{t:JSNumber})) {
            //Switch statement at date.ceylon (240:3-266:3)
            var case$32526=second$32515;
            if ($$$cl32209.isOfType(second$32515,{t:JSNumber})) {
                //Switch statement at date.ceylon (242:4-252:4)
                var case$32527=milli$32516;
                if ($$$cl32209.isOfType(milli$32516,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'245:22-245:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32510.$native/*NULL PARAM!*/,month$32511.$native/*NULL PARAM!*/,day$32512.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32525.$native/*NULL PARAM!*/,case$32526.$native/*NULL PARAM!*/,case$32527.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32516,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'250:22-250:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32510.$native/*NULL PARAM!*/,month$32511.$native/*NULL PARAM!*/,day$32512.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32525.$native/*NULL PARAM!*/,case$32526.$native));
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (242:4-252:4)
            }else if ($$$cl32209.isOfType(second$32515,{t:$$$cl32209.Null})) {
                //Switch statement at date.ceylon (255:4-265:4)
                var case$32528=milli$32516;
                if ($$$cl32209.isOfType(milli$32516,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'258:22-258:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32510.$native/*NULL PARAM!*/,month$32511.$native/*NULL PARAM!*/,day$32512.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32525.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32528.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32516,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'263:22-263:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32510.$native/*NULL PARAM!*/,month$32511.$native/*NULL PARAM!*/,day$32512.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32525.$native));
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (255:4-265:4)
            }//End switch statement at date.ceylon (240:3-266:3)
        }else if ($$$cl32209.isOfType(minute$32514,{t:$$$cl32209.Null})) {
            //Switch statement at date.ceylon (269:3-295:3)
            var case$32529=second$32515;
            if ($$$cl32209.isOfType(second$32515,{t:JSNumber})) {
                //Switch statement at date.ceylon (271:4-281:4)
                var case$32530=milli$32516;
                if ($$$cl32209.isOfType(milli$32516,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'274:22-274:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32510.$native/*NULL PARAM!*/,month$32511.$native/*NULL PARAM!*/,day$32512.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32529.$native/*NULL PARAM!*/,case$32530.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32516,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'279:22-279:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32510.$native/*NULL PARAM!*/,month$32511.$native/*NULL PARAM!*/,day$32512.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32529.$native));
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (271:4-281:4)
            }else if ($$$cl32209.isOfType(second$32515,{t:$$$cl32209.Null})) {
                //Switch statement at date.ceylon (284:4-294:4)
                var case$32531=milli$32516;
                if ($$$cl32209.isOfType(milli$32516,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'287:22-287:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32510.$native/*NULL PARAM!*/,month$32511.$native/*NULL PARAM!*/,day$32512.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$32531.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32516,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'292:22-292:25','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32510.$native/*NULL PARAM!*/,month$32511.$native/*NULL PARAM!*/,day$32512.$native));
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (284:4-294:4)
            }//End switch statement at date.ceylon (269:3-295:3)
        }//End switch statement at date.ceylon (238:2-296:2)
    }//End switch statement at date.ceylon (175:1-297:1)
}
exports.dateUTC=dateUTC;
dateUTC.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'year',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'minute',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'second',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'milli',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','dateUTC']};};

//MethodDefinition dateUTCInt at date.ceylon (300:0-305:0)
function dateUTCInt(year$32532,month$32533,day$32534,hour$32535,minute$32536,second$32537,milli$32538){
    if(hour$32535===undefined){hour$32535=null;}
    if(minute$32536===undefined){minute$32536=null;}
    if(second$32537===undefined){second$32537=null;}
    if(milli$32538===undefined){milli$32538=null;}
    /*Begin dynamic block*/
    return JSDate((typeof Date==='undefined'||Date===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Date")),'303:16-303:19','date.ceylon'):Date).UTC(/*NULL PARAM!*/year$32532/*NULL PARAM!*/,month$32533/*NULL PARAM!*/,day$32534/*NULL PARAM!*/,hour$32535/*NULL PARAM!*/,minute$32536/*NULL PARAM!*/,second$32537/*NULL PARAM!*/,milli$32538));
    /*End dynamic block*/
}
exports.dateUTCInt=dateUTCInt;
dateUTCInt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSDate},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl32209.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:$$$cl32209.Integer},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:$$$cl32209.Integer},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]},$an:function(){return[];}},{$nm:'minute',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]},$an:function(){return[];}},{$nm:'second',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]},$an:function(){return[];}},{$nm:'milli',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Integer}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','dateUTCInt']};};

//ClassDefinition JSDateAbs at date.ceylon (307:0-674:0)
function JSDateAbs($$jSDateAbs){
    $init$JSDateAbs();
    if ($$jSDateAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$jSDateAbs);
    return $$jSDateAbs;
}
JSDateAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.language','JSDateAbs']};};
exports.JSDateAbs=JSDateAbs;
function $init$JSDateAbs(){
    if (JSDateAbs.$$===undefined){
        $$$cl32209.initTypeProto(JSDateAbs,'ceylon.js.language::JSDateAbs',$init$JSObjectAbs());
        (function($$jSDateAbs){
            
            //MethodDefinition getDate at date.ceylon (309:1-313:1)
            $$jSDateAbs.getDate=function getDate(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getDate());
                /*End dynamic block*/
            };$$jSDateAbs.getDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getDate']};};
            
            //MethodDefinition getDay at date.ceylon (315:1-319:1)
            $$jSDateAbs.getDay=function getDay(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getDay());
                /*End dynamic block*/
            };$$jSDateAbs.getDay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getDay']};};
            
            //MethodDefinition getFullYear at date.ceylon (321:1-325:1)
            $$jSDateAbs.getFullYear=function getFullYear(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getFullYear());
                /*End dynamic block*/
            };$$jSDateAbs.getFullYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getFullYear']};};
            
            //MethodDefinition getHours at date.ceylon (327:1-331:1)
            $$jSDateAbs.getHours=function getHours(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getHours());
                /*End dynamic block*/
            };$$jSDateAbs.getHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getHours']};};
            
            //MethodDefinition getMilliseconds at date.ceylon (333:1-337:1)
            $$jSDateAbs.getMilliseconds=function getMilliseconds(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getMilliseconds());
                /*End dynamic block*/
            };$$jSDateAbs.getMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getMilliseconds']};};
            
            //MethodDefinition getMinutes at date.ceylon (339:1-343:1)
            $$jSDateAbs.getMinutes=function getMinutes(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getMinutes());
                /*End dynamic block*/
            };$$jSDateAbs.getMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getMinutes']};};
            
            //MethodDefinition getMonth at date.ceylon (345:1-349:1)
            $$jSDateAbs.getMonth=function getMonth(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getMonth());
                /*End dynamic block*/
            };$$jSDateAbs.getMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getMonth']};};
            
            //MethodDefinition getSeconds at date.ceylon (351:1-355:1)
            $$jSDateAbs.getSeconds=function getSeconds(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getSeconds());
                /*End dynamic block*/
            };$$jSDateAbs.getSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getSeconds']};};
            
            //MethodDefinition getTime at date.ceylon (357:1-361:1)
            $$jSDateAbs.getTime=function getTime(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getTime());
                /*End dynamic block*/
            };$$jSDateAbs.getTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getTime']};};
            
            //MethodDefinition getTimezoneOffset at date.ceylon (363:1-367:1)
            $$jSDateAbs.getTimezoneOffset=function getTimezoneOffset(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getTimezoneOffset());
                /*End dynamic block*/
            };$$jSDateAbs.getTimezoneOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getTimezoneOffset']};};
            
            //MethodDefinition getUTCDate at date.ceylon (369:1-373:1)
            $$jSDateAbs.getUTCDate=function getUTCDate(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getUTCDate());
                /*End dynamic block*/
            };$$jSDateAbs.getUTCDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getUTCDate']};};
            
            //MethodDefinition getUTCDay at date.ceylon (375:1-379:1)
            $$jSDateAbs.getUTCDay=function getUTCDay(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getUTCDay());
                /*End dynamic block*/
            };$$jSDateAbs.getUTCDay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getUTCDay']};};
            
            //MethodDefinition getUTCFullYear at date.ceylon (381:1-385:1)
            $$jSDateAbs.getUTCFullYear=function getUTCFullYear(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getUTCFullYear());
                /*End dynamic block*/
            };$$jSDateAbs.getUTCFullYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getUTCFullYear']};};
            
            //MethodDefinition getUTCHours at date.ceylon (387:1-391:1)
            $$jSDateAbs.getUTCHours=function getUTCHours(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getUTCHours());
                /*End dynamic block*/
            };$$jSDateAbs.getUTCHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getUTCHours']};};
            
            //MethodDefinition getUTCMilliseconds at date.ceylon (393:1-397:1)
            $$jSDateAbs.getUTCMilliseconds=function getUTCMilliseconds(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getUTCMilliseconds());
                /*End dynamic block*/
            };$$jSDateAbs.getUTCMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getUTCMilliseconds']};};
            
            //MethodDefinition getUTCMinutes at date.ceylon (399:1-403:1)
            $$jSDateAbs.getUTCMinutes=function getUTCMinutes(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getUTCMinutes());
                /*End dynamic block*/
            };$$jSDateAbs.getUTCMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getUTCMinutes']};};
            
            //MethodDefinition getUTCMonth at date.ceylon (405:1-409:1)
            $$jSDateAbs.getUTCMonth=function getUTCMonth(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getUTCMonth());
                /*End dynamic block*/
            };$$jSDateAbs.getUTCMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getUTCMonth']};};
            
            //MethodDefinition getUTCSeconds at date.ceylon (411:1-415:1)
            $$jSDateAbs.getUTCSeconds=function getUTCSeconds(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getUTCSeconds());
                /*End dynamic block*/
            };$$jSDateAbs.getUTCSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','getUTCSeconds']};};
            
            //MethodDefinition setDate at date.ceylon (417:1-429:1)
            $$jSDateAbs.setDate=function setDate(day$32539){
                var $$jSDateAbs=this;
                //Switch statement at date.ceylon (418:2-428:2)
                var case$32540=day$32539;
                if ($$$cl32209.isOfType(day$32539,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setDate(/*NULL PARAM!*/case$32540);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(day$32539,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setDate(/*NULL PARAM!*/case$32540.$native);
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (418:2-428:2)
            };$$jSDateAbs.setDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'day',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setDate']};};
            
            //MethodDefinition setFullYear at date.ceylon (431:1-443:1)
            $$jSDateAbs.setFullYear=function setFullYear(year$32541){
                var $$jSDateAbs=this;
                //Switch statement at date.ceylon (432:2-442:2)
                var case$32542=year$32541;
                if ($$$cl32209.isOfType(year$32541,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setFullYear(/*NULL PARAM!*/case$32542);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(year$32541,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setFullYear(/*NULL PARAM!*/case$32542.$native);
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (432:2-442:2)
            };$$jSDateAbs.setFullYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'year',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setFullYear']};};
            
            //MethodDefinition setHours at date.ceylon (445:1-457:1)
            $$jSDateAbs.setHours=function setHours(hour$32543){
                var $$jSDateAbs=this;
                //Switch statement at date.ceylon (446:2-456:2)
                var case$32544=hour$32543;
                if ($$$cl32209.isOfType(hour$32543,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setHours(/*NULL PARAM!*/case$32544);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(hour$32543,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setHours(/*NULL PARAM!*/case$32544.$native);
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (446:2-456:2)
            };$$jSDateAbs.setHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'hour',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setHours']};};
            
            //MethodDefinition setMilliseconds at date.ceylon (459:1-471:1)
            $$jSDateAbs.setMilliseconds=function setMilliseconds(milli$32545){
                var $$jSDateAbs=this;
                //Switch statement at date.ceylon (460:2-470:2)
                var case$32546=milli$32545;
                if ($$$cl32209.isOfType(milli$32545,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setMilliseconds(/*NULL PARAM!*/case$32546);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32545,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setMilliseconds(/*NULL PARAM!*/case$32546.$native);
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (460:2-470:2)
            };$$jSDateAbs.setMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'milli',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setMilliseconds']};};
            
            //MethodDefinition setMinutes at date.ceylon (473:1-485:1)
            $$jSDateAbs.setMinutes=function setMinutes(minutes$32547){
                var $$jSDateAbs=this;
                //Switch statement at date.ceylon (474:2-484:2)
                var case$32548=minutes$32547;
                if ($$$cl32209.isOfType(minutes$32547,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setMinutes(/*NULL PARAM!*/case$32548);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(minutes$32547,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setMinutes(/*NULL PARAM!*/case$32548.$native);
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (474:2-484:2)
            };$$jSDateAbs.setMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'minutes',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setMinutes']};};
            
            //MethodDefinition setMonth at date.ceylon (487:1-499:1)
            $$jSDateAbs.setMonth=function setMonth(month$32549){
                var $$jSDateAbs=this;
                //Switch statement at date.ceylon (488:2-498:2)
                var case$32550=month$32549;
                if ($$$cl32209.isOfType(month$32549,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setMonth(/*NULL PARAM!*/case$32550);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(month$32549,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setMonth(/*NULL PARAM!*/case$32550.$native);
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (488:2-498:2)
            };$$jSDateAbs.setMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setMonth']};};
            
            //MethodDefinition setSeconds at date.ceylon (501:1-513:1)
            $$jSDateAbs.setSeconds=function setSeconds(seconds$32551){
                var $$jSDateAbs=this;
                //Switch statement at date.ceylon (502:2-512:2)
                var case$32552=seconds$32551;
                if ($$$cl32209.isOfType(seconds$32551,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setSeconds(/*NULL PARAM!*/case$32552);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(seconds$32551,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setSeconds(/*NULL PARAM!*/case$32552.$native);
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (502:2-512:2)
            };$$jSDateAbs.setSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'seconds',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setSeconds']};};
            
            //MethodDefinition setTime at date.ceylon (515:1-527:1)
            $$jSDateAbs.setTime=function setTime(milli$32553){
                var $$jSDateAbs=this;
                //Switch statement at date.ceylon (516:2-526:2)
                var case$32554=milli$32553;
                if ($$$cl32209.isOfType(milli$32553,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setTime(/*NULL PARAM!*/case$32554);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32553,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setTime(/*NULL PARAM!*/case$32554.$native);
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (516:2-526:2)
            };$$jSDateAbs.setTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'milli',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setTime']};};
            
            //MethodDefinition setUTCDate at date.ceylon (529:1-541:1)
            $$jSDateAbs.setUTCDate=function setUTCDate(day$32555){
                var $$jSDateAbs=this;
                //Switch statement at date.ceylon (530:2-540:2)
                var case$32556=day$32555;
                if ($$$cl32209.isOfType(day$32555,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCDate(/*NULL PARAM!*/case$32556);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(day$32555,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCDate(/*NULL PARAM!*/case$32556.$native);
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (530:2-540:2)
            };$$jSDateAbs.setUTCDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'day',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setUTCDate']};};
            
            //MethodDefinition setUTCFullYear at date.ceylon (543:1-555:1)
            $$jSDateAbs.setUTCFullYear=function setUTCFullYear(year$32557){
                var $$jSDateAbs=this;
                //Switch statement at date.ceylon (544:2-554:2)
                var case$32558=year$32557;
                if ($$$cl32209.isOfType(year$32557,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCFullYear(/*NULL PARAM!*/case$32558);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(year$32557,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCFullYear(/*NULL PARAM!*/case$32558.$native);
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (544:2-554:2)
            };$$jSDateAbs.setUTCFullYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'year',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setUTCFullYear']};};
            
            //MethodDefinition setUTCHours at date.ceylon (557:1-569:1)
            $$jSDateAbs.setUTCHours=function setUTCHours(hours$32559){
                var $$jSDateAbs=this;
                //Switch statement at date.ceylon (558:2-568:2)
                var case$32560=hours$32559;
                if ($$$cl32209.isOfType(hours$32559,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCHours(/*NULL PARAM!*/case$32560);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(hours$32559,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCHours(/*NULL PARAM!*/case$32560.$native);
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (558:2-568:2)
            };$$jSDateAbs.setUTCHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'hours',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setUTCHours']};};
            
            //MethodDefinition setUTCMilliseconds at date.ceylon (571:1-583:1)
            $$jSDateAbs.setUTCMilliseconds=function setUTCMilliseconds(milli$32561){
                var $$jSDateAbs=this;
                //Switch statement at date.ceylon (572:2-582:2)
                var case$32562=milli$32561;
                if ($$$cl32209.isOfType(milli$32561,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCMilliseconds(/*NULL PARAM!*/case$32562);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(milli$32561,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCMilliseconds(/*NULL PARAM!*/case$32562.$native);
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (572:2-582:2)
            };$$jSDateAbs.setUTCMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'milli',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setUTCMilliseconds']};};
            
            //MethodDefinition setUTCMinutes at date.ceylon (585:1-597:1)
            $$jSDateAbs.setUTCMinutes=function setUTCMinutes(minutes$32563){
                var $$jSDateAbs=this;
                //Switch statement at date.ceylon (586:2-596:2)
                var case$32564=minutes$32563;
                if ($$$cl32209.isOfType(minutes$32563,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCMinutes(/*NULL PARAM!*/case$32564);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(minutes$32563,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCMinutes(/*NULL PARAM!*/case$32564.$native);
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (586:2-596:2)
            };$$jSDateAbs.setUTCMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'minutes',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setUTCMinutes']};};
            
            //MethodDefinition setUTCMonth at date.ceylon (599:1-611:1)
            $$jSDateAbs.setUTCMonth=function setUTCMonth(month$32565){
                var $$jSDateAbs=this;
                //Switch statement at date.ceylon (600:2-610:2)
                var case$32566=month$32565;
                if ($$$cl32209.isOfType(month$32565,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCMonth(/*NULL PARAM!*/case$32566);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(month$32565,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCMonth(/*NULL PARAM!*/case$32566.$native);
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (600:2-610:2)
            };$$jSDateAbs.setUTCMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setUTCMonth']};};
            
            //MethodDefinition setUTCSeconds at date.ceylon (613:1-625:1)
            $$jSDateAbs.setUTCSeconds=function setUTCSeconds(seconds$32567){
                var $$jSDateAbs=this;
                //Switch statement at date.ceylon (614:2-624:2)
                var case$32568=seconds$32567;
                if ($$$cl32209.isOfType(seconds$32567,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCSeconds(/*NULL PARAM!*/case$32568);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(seconds$32567,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCSeconds(/*NULL PARAM!*/case$32568.$native);
                    /*End dynamic block*/
                }//End switch statement at date.ceylon (614:2-624:2)
            };$$jSDateAbs.setUTCSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'seconds',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','setUTCSeconds']};};
            
            //MethodDefinition toDateString at date.ceylon (627:1-631:1)
            $$jSDateAbs.toDateString=function toDateString(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSDateAbs.$native.toDateString());
                /*End dynamic block*/
            };$$jSDateAbs.toDateString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','toDateString']};};
            
            //MethodDefinition toISOString at date.ceylon (633:1-637:1)
            $$jSDateAbs.toISOString=function toISOString(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSDateAbs.$native.toISOString());
                /*End dynamic block*/
            };$$jSDateAbs.toISOString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','toISOString']};};
            
            //MethodDefinition toJSON at date.ceylon (639:1-643:1)
            $$jSDateAbs.toJSON=function toJSON(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSDateAbs.$native.toJSON());
                /*End dynamic block*/
            };$$jSDateAbs.toJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','toJSON']};};
            
            //MethodDefinition toLocaleDateString at date.ceylon (645:1-649:1)
            $$jSDateAbs.toLocaleDateString=function toLocaleDateString(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSDateAbs.$native.toLocaleDateString());
                /*End dynamic block*/
            };$$jSDateAbs.toLocaleDateString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','toLocaleDateString']};};
            
            //MethodDefinition toLocaleString at date.ceylon (651:1-655:1)
            $$jSDateAbs.toLocaleString=function toLocaleString(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSDateAbs.$native.toLocaleString());
                /*End dynamic block*/
            };$$jSDateAbs.toLocaleString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','toLocaleString']};};
            
            //MethodDefinition toLocaleTimeString at date.ceylon (657:1-661:1)
            $$jSDateAbs.toLocaleTimeString=function toLocaleTimeString(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSDateAbs.$native.toLocaleTimeString());
                /*End dynamic block*/
            };$$jSDateAbs.toLocaleTimeString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','toLocaleTimeString']};};
            
            //MethodDefinition toTimeString at date.ceylon (663:1-667:1)
            $$jSDateAbs.toTimeString=function toTimeString(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSDateAbs.$native.toTimeString());
                /*End dynamic block*/
            };$$jSDateAbs.toTimeString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','toTimeString']};};
            
            //MethodDefinition toUTCString at date.ceylon (669:1-673:1)
            $$jSDateAbs.toUTCString=function toUTCString(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSDateAbs.$native.toUTCString());
                /*End dynamic block*/
            };$$jSDateAbs.toUTCString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDateAbs','$m','toUTCString']};};
        })(JSDateAbs.$$.prototype);
    }
    return JSDateAbs;
}
exports.$init$JSDateAbs=$init$JSDateAbs;
$init$JSDateAbs();

//ClassDefinition JSDate at date.ceylon (676:0-681:0)
function JSDate(n$32569, $$jSDate){
    $init$JSDate();
    if ($$jSDate===undefined)$$jSDate=new JSDate.$$;
    $$jSDate.n$32569_=n$32569;
    JSDateAbs($$jSDate);
    
    //AttributeDeclaration native at date.ceylon (677:1-677:29)
    $$jSDate.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JSDate,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.language','JSDate','$at','native']};}};
    /*Begin dynamic block*/
    $$jSDate.$native=$$jSDate.n$32569;/*End dynamic block*/
    return $$jSDate;
}
JSDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSDateAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSDate']};};
exports.JSDate=JSDate;
function $init$JSDate(){
    if (JSDate.$$===undefined){
        $$$cl32209.initTypeProto(JSDate,'ceylon.js.language::JSDate',$init$JSDateAbs());
        (function($$jSDate){
            
            //AttributeDeclaration native at date.ceylon (677:1-677:29)
            $$$cl32209.defineAttr($$jSDate,'n$32569',function(){return this.n$32569_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JSDate,d:['ceylon.js.language','JSDate','$at','n']};});
        })(JSDate.$$.prototype);
    }
    return JSDate;
}
exports.$init$JSDate=$init$JSDate;
$init$JSDate();

//MethodDefinition createJSNumber at number.ceylon (1:0-5:0)
function createJSNumber(val$32570){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Number")),'3:18-3:23','number.ceylon'):Number)(/*NULL PARAM!*/val$32570));
    /*End dynamic block*/
}
exports.createJSNumber=createJSNumber;
createJSNumber.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.Float},{t:$$$cl32209.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','createJSNumber']};};

//MethodDefinition numberMaxValue at number.ceylon (7:0-11:0)
function numberMaxValue(){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Number")),'9:18-9:23','number.ceylon'):Number).MAX_VALUE);
    /*End dynamic block*/
}
exports.numberMaxValue=numberMaxValue;
numberMaxValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','numberMaxValue']};};

//MethodDefinition numberMinValue at number.ceylon (13:0-17:0)
function numberMinValue(){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Number")),'15:18-15:23','number.ceylon'):Number).MIN_VALUE);
    /*End dynamic block*/
}
exports.numberMinValue=numberMinValue;
numberMinValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','numberMinValue']};};

//MethodDefinition numberNegativeInfinity at number.ceylon (19:0-23:0)
function numberNegativeInfinity(){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Number")),'21:18-21:23','number.ceylon'):Number).NEGATIVE_INFINITY);
    /*End dynamic block*/
}
exports.numberNegativeInfinity=numberNegativeInfinity;
numberNegativeInfinity.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','numberNegativeInfinity']};};

//MethodDefinition numberPositiveInfinity at number.ceylon (25:0-29:0)
function numberPositiveInfinity(){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Number")),'27:18-27:23','number.ceylon'):Number).POSITIVE_INFINITY);
    /*End dynamic block*/
}
exports.numberPositiveInfinity=numberPositiveInfinity;
numberPositiveInfinity.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','numberPositiveInfinity']};};

//ClassDefinition JSNumberAbs at number.ceylon (31:0-84:0)
function JSNumberAbs($$jSNumberAbs){
    $init$JSNumberAbs();
    if ($$jSNumberAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$jSNumberAbs);
    return $$jSNumberAbs;
}
JSNumberAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.language','JSNumberAbs']};};
exports.JSNumberAbs=JSNumberAbs;
function $init$JSNumberAbs(){
    if (JSNumberAbs.$$===undefined){
        $$$cl32209.initTypeProto(JSNumberAbs,'ceylon.js.language::JSNumberAbs',$init$JSObjectAbs());
        (function($$jSNumberAbs){
            
            //MethodDefinition toExponential at number.ceylon (33:4-50:4)
            $$jSNumberAbs.toExponential$defs$fractionDigits=function(fractionDigits$32571){var $$jSNumberAbs=this;
            return null;};
            $$jSNumberAbs.toExponential=function toExponential(fractionDigits$32571){
                var $$jSNumberAbs=this;
                if(fractionDigits$32571===undefined){fractionDigits$32571=$$jSNumberAbs.toExponential$defs$fractionDigits(fractionDigits$32571);}
                //Switch statement at number.ceylon (34:8-49:5)
                var case$32572=fractionDigits$32571;
                if ($$$cl32209.isOfType(fractionDigits$32571,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    return JSString($$jSNumberAbs.$native.toExponential(/*NULL PARAM!*/case$32572));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(fractionDigits$32571,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSString($$jSNumberAbs.$native.toExponential(/*NULL PARAM!*/case$32572.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(fractionDigits$32571,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSString($$jSNumberAbs.$native.toExponential());
                    /*End dynamic block*/
                }//End switch statement at number.ceylon (34:8-49:5)
            };$$jSNumberAbs.toExponential.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'fractionDigits',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Integer},{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSNumberAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSNumberAbs','$m','toExponential']};};
            
            //MethodDefinition toFixed at number.ceylon (52:4-64:4)
            $$jSNumberAbs.toFixed$defs$digits=function(digits$32573){var $$jSNumberAbs=this;
            return (0);};
            $$jSNumberAbs.toFixed=function toFixed(digits$32573){
                var $$jSNumberAbs=this;
                if(digits$32573===undefined){digits$32573=$$jSNumberAbs.toFixed$defs$digits(digits$32573);}
                //Switch statement at number.ceylon (53:8-63:8)
                var case$32574=digits$32573;
                if ($$$cl32209.isOfType(digits$32573,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    return JSString($$jSNumberAbs.$native.toFixed(/*NULL PARAM!*/case$32574));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(digits$32573,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSString($$jSNumberAbs.$native.toFixed(/*NULL PARAM!*/case$32574.$native));
                    /*End dynamic block*/
                }//End switch statement at number.ceylon (53:8-63:8)
            };$$jSNumberAbs.toFixed.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'digits',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSNumberAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSNumberAbs','$m','toFixed']};};
            
            //MethodDefinition toPrecision at number.ceylon (66:4-83:1)
            $$jSNumberAbs.toPrecision$defs$precision=function(precision$32575){var $$jSNumberAbs=this;
            return null;};
            $$jSNumberAbs.toPrecision=function toPrecision(precision$32575){
                var $$jSNumberAbs=this;
                if(precision$32575===undefined){precision$32575=$$jSNumberAbs.toPrecision$defs$precision(precision$32575);}
                //Switch statement at number.ceylon (67:8-82:5)
                var case$32576=precision$32575;
                if ($$$cl32209.isOfType(precision$32575,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    return JSString($$jSNumberAbs.$native.toPrecision(/*NULL PARAM!*/case$32576));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(precision$32575,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSString($$jSNumberAbs.$native.toPrecision(/*NULL PARAM!*/case$32576.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(precision$32575,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSString($$jSNumberAbs.$native.toPrecision());
                    /*End dynamic block*/
                }//End switch statement at number.ceylon (67:8-82:5)
            };$$jSNumberAbs.toPrecision.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'precision',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Integer},{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSNumberAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSNumberAbs','$m','toPrecision']};};
        })(JSNumberAbs.$$.prototype);
    }
    return JSNumberAbs;
}
exports.$init$JSNumberAbs=$init$JSNumberAbs;
$init$JSNumberAbs();

//ClassDefinition JSNumber at number.ceylon (86:0-91:0)
function JSNumber(n$32577, $$jSNumber){
    $init$JSNumber();
    if ($$jSNumber===undefined)$$jSNumber=new JSNumber.$$;
    $$jSNumber.n$32577_=n$32577;
    JSNumberAbs($$jSNumber);
    
    //AttributeDeclaration native at number.ceylon (87:1-87:29)
    $$jSNumber.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JSNumber,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.language','JSNumber','$at','native']};}};
    /*Begin dynamic block*/
    $$jSNumber.$native=$$jSNumber.n$32577;/*End dynamic block*/
    return $$jSNumber;
}
JSNumber.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSNumberAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSNumber']};};
exports.JSNumber=JSNumber;
function $init$JSNumber(){
    if (JSNumber.$$===undefined){
        $$$cl32209.initTypeProto(JSNumber,'ceylon.js.language::JSNumber',$init$JSNumberAbs());
        (function($$jSNumber){
            
            //AttributeDeclaration native at number.ceylon (87:1-87:29)
            $$$cl32209.defineAttr($$jSNumber,'n$32577',function(){return this.n$32577_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JSNumber,d:['ceylon.js.language','JSNumber','$at','n']};});
        })(JSNumber.$$.prototype);
    }
    return JSNumber;
}
exports.$init$JSNumber=$init$JSNumber;
$init$JSNumber();

//MethodDefinition mathE at math.ceylon (3:0-7:0)
function mathE(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'5:18-5:21','math.ceylon'):Math).E);
    /*End dynamic block*/
}
exports.mathE=mathE;
mathE.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','mathE']};};

//MethodDefinition mathLog2 at math.ceylon (9:0-13:0)
function mathLog2(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'11:18-11:21','math.ceylon'):Math).LN2);
    /*End dynamic block*/
}
exports.mathLog2=mathLog2;
mathLog2.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','mathLog2']};};

//MethodDefinition mathLog10 at math.ceylon (15:0-19:0)
function mathLog10(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'17:18-17:21','math.ceylon'):Math).LN10);
    /*End dynamic block*/
}
exports.mathLog10=mathLog10;
mathLog10.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','mathLog10']};};

//MethodDefinition mathLog2e at math.ceylon (21:0-25:0)
function mathLog2e(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'23:18-23:21','math.ceylon'):Math).LOG2E);
    /*End dynamic block*/
}
exports.mathLog2e=mathLog2e;
mathLog2e.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','mathLog2e']};};

//MethodDefinition mathLog10e at math.ceylon (27:0-31:0)
function mathLog10e(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'29:18-29:21','math.ceylon'):Math).LOG10E);
    /*End dynamic block*/
}
exports.mathLog10e=mathLog10e;
mathLog10e.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','mathLog10e']};};

//MethodDefinition mathPi at math.ceylon (33:0-37:0)
function mathPi(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'35:18-35:21','math.ceylon'):Math).PI);
    /*End dynamic block*/
}
exports.mathPi=mathPi;
mathPi.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','mathPi']};};

//MethodDefinition mathRoot1_2 at math.ceylon (39:0-43:0)
function mathRoot1_2(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'41:18-41:21','math.ceylon'):Math).SQRT1_2);
    /*End dynamic block*/
}
exports.mathRoot1_2=mathRoot1_2;
mathRoot1_2.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','mathRoot1_2']};};

//MethodDefinition mathRoot2 at math.ceylon (45:0-49:0)
function mathRoot2(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'47:18-47:21','math.ceylon'):Math).SQRT2);
    /*End dynamic block*/
}
exports.mathRoot2=mathRoot2;
mathRoot2.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','mathRoot2']};};

//ClassDefinition MathAbs at math.ceylon (51:0-156:0)
function MathAbs($$mathAbs){
    $init$MathAbs();
    if ($$mathAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$mathAbs);
    return $$mathAbs;
}
MathAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.language','MathAbs']};};
exports.MathAbs=MathAbs;
function $init$MathAbs(){
    if (MathAbs.$$===undefined){
        $$$cl32209.initTypeProto(MathAbs,'ceylon.js.language::MathAbs',$init$JSObjectAbs());
        (function($$mathAbs){
            
            //MethodDefinition abs at math.ceylon (53:1-57:1)
            $$mathAbs.abs=function abs(x$32626){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'55:19-55:22','math.ceylon'):Math).abs(/*NULL PARAM!*/x$32626.$native));
                /*End dynamic block*/
            };$$mathAbs.abs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','abs']};};
            
            //MethodDefinition asin at math.ceylon (59:1-63:1)
            $$mathAbs.asin=function asin(x$32627){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'61:19-61:22','math.ceylon'):Math).asin(/*NULL PARAM!*/x$32627.$native));
                /*End dynamic block*/
            };$$mathAbs.asin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','asin']};};
            
            //MethodDefinition atan at math.ceylon (65:1-69:1)
            $$mathAbs.atan=function atan(x$32628){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'67:19-67:22','math.ceylon'):Math).asin(/*NULL PARAM!*/x$32628.$native));
                /*End dynamic block*/
            };$$mathAbs.atan.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','atan']};};
            
            //MethodDefinition atan2 at math.ceylon (71:1-75:1)
            $$mathAbs.atan2=function atan2(y$32629,x$32630){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'73:19-73:22','math.ceylon'):Math).atan2(/*NULL PARAM!*/y$32629.$native/*NULL PARAM!*/,x$32630.$native));
                /*End dynamic block*/
            };$$mathAbs.atan2.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'y',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','atan2']};};
            
            //MethodDefinition ceil at math.ceylon (77:1-81:1)
            $$mathAbs.ceil=function ceil(x$32631){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'79:19-79:22','math.ceylon'):Math).ceil(/*NULL PARAM!*/x$32631.$native));
                /*End dynamic block*/
            };$$mathAbs.ceil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','ceil']};};
            
            //MethodDefinition cos at math.ceylon (83:1-87:1)
            $$mathAbs.cos=function cos(x$32632){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'85:19-85:22','math.ceylon'):Math).cos(/*NULL PARAM!*/x$32632.$native));
                /*End dynamic block*/
            };$$mathAbs.cos.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','cos']};};
            
            //MethodDefinition exp at math.ceylon (89:1-93:1)
            $$mathAbs.exp=function exp(x$32633){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'91:19-91:22','math.ceylon'):Math).exp(/*NULL PARAM!*/x$32633.$native));
                /*End dynamic block*/
            };$$mathAbs.exp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','exp']};};
            
            //MethodDefinition floor at math.ceylon (95:1-99:1)
            $$mathAbs.floor=function floor(x$32634){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'97:19-97:22','math.ceylon'):Math).floor(/*NULL PARAM!*/x$32634.$native));
                /*End dynamic block*/
            };$$mathAbs.floor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','floor']};};
            
            //MethodDefinition log at math.ceylon (101:1-105:1)
            $$mathAbs.log=function log(x$32635){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'103:19-103:22','math.ceylon'):Math).log(/*NULL PARAM!*/x$32635.$native));
                /*End dynamic block*/
            };$$mathAbs.log.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','log']};};
            
            //MethodDefinition max at math.ceylon (107:1-112:1)
            $$mathAbs.max=function max(numbers$32636){
                var $$mathAbs=this;
                if(numbers$32636===undefined){numbers$32636=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JSNumber(JSFunction((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'110:30-110:33','math.ceylon'):Math).max).$apply(null,(tmpvar$32637=(function(){
                    //SpreadOp at 110:54-110:68
                    var lst$32638=[];
                    var it$32639=numbers$32636.iterator();
                    var elem$32640;
                    while ((elem$32640=it$32639.next())!==$$$cl32209.getFinished()){
                        lst$32638.push(elem$32640.$native);
                    }
                    return $$$cl32209.ArraySequence(lst$32638);
                }()),$$$cl32209.isOfType(tmpvar$32637,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$32637:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'110:54-110:68','math.ceylon'))));
                /*End dynamic block*/
            };$$mathAbs.max.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'numbers',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:JSNumber}}},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','max']};};
            
            //MethodDefinition min at math.ceylon (114:1-119:1)
            $$mathAbs.min=function min(numbers$32641){
                var $$mathAbs=this;
                if(numbers$32641===undefined){numbers$32641=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JSNumber(JSFunction((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'117:30-117:33','math.ceylon'):Math).min).$apply(null,(tmpvar$32642=(function(){
                    //SpreadOp at 117:54-117:68
                    var lst$32643=[];
                    var it$32644=numbers$32641.iterator();
                    var elem$32645;
                    while ((elem$32645=it$32644.next())!==$$$cl32209.getFinished()){
                        lst$32643.push(elem$32645.$native);
                    }
                    return $$$cl32209.ArraySequence(lst$32643);
                }()),$$$cl32209.isOfType(tmpvar$32642,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$32642:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'117:54-117:68','math.ceylon'))));
                /*End dynamic block*/
            };$$mathAbs.min.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'numbers',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:JSNumber}}},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','min']};};
            
            //MethodDefinition pow at math.ceylon (121:1-125:1)
            $$mathAbs.pow=function pow(base$32646,exponent$32647){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'123:19-123:22','math.ceylon'):Math).pow(/*NULL PARAM!*/base$32646/*NULL PARAM!*/,exponent$32647));
                /*End dynamic block*/
            };$$mathAbs.pow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'base',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'exponent',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','pow']};};
            
            //MethodDefinition random at math.ceylon (127:1-131:1)
            $$mathAbs.random=function random(){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'129:19-129:22','math.ceylon'):Math).random());
                /*End dynamic block*/
            };$$mathAbs.random.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','random']};};
            
            //MethodDefinition round at math.ceylon (133:1-137:1)
            $$mathAbs.round=function round(x$32648){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'135:19-135:22','math.ceylon'):Math).round(/*NULL PARAM!*/x$32648));
                /*End dynamic block*/
            };$$mathAbs.round.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','round']};};
            
            //MethodDefinition sin at math.ceylon (139:1-143:1)
            $$mathAbs.sin=function sin(x$32649){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'141:19-141:22','math.ceylon'):Math).sin(/*NULL PARAM!*/x$32649));
                /*End dynamic block*/
            };$$mathAbs.sin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','sin']};};
            
            //MethodDefinition sqrt at math.ceylon (145:1-149:1)
            $$mathAbs.sqrt=function sqrt(x$32650){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'147:19-147:22','math.ceylon'):Math).sqrt(/*NULL PARAM!*/x$32650));
                /*End dynamic block*/
            };$$mathAbs.sqrt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','sqrt']};};
            
            //MethodDefinition tan at math.ceylon (151:1-155:1)
            $$mathAbs.tan=function tan(x$32651){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Math")),'153:19-153:22','math.ceylon'):Math).tan(/*NULL PARAM!*/x$32651));
                /*End dynamic block*/
            };$$mathAbs.tan.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','MathAbs','$m','tan']};};
        })(MathAbs.$$.prototype);
    }
    return MathAbs;
}
exports.$init$MathAbs=$init$MathAbs;
$init$MathAbs();

//ClassDefinition Math at math.ceylon (158:0-163:0)
function Math(n$32652, $$math){
    $init$Math();
    if ($$math===undefined)$$math=new Math.$$;
    $$math.n$32652_=n$32652;
    MathAbs($$math);
    
    //AttributeDeclaration native at math.ceylon (159:1-159:29)
    $$math.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Math,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.language','Math','$at','native']};}};
    /*Begin dynamic block*/
    $$math.$native=$$math.n$32652;/*End dynamic block*/
    return $$math;
}
Math.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:MathAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','Math']};};
exports.Math=Math;
function $init$Math(){
    if (Math.$$===undefined){
        $$$cl32209.initTypeProto(Math,'ceylon.js.language::Math',$init$MathAbs());
        (function($$math){
            
            //AttributeDeclaration native at math.ceylon (159:1-159:29)
            $$$cl32209.defineAttr($$math,'n$32652',function(){return this.n$32652_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Math,d:['ceylon.js.language','Math','$at','n']};});
        })(Math.$$.prototype);
    }
    return Math;
}
exports.$init$Math=$init$Math;
$init$Math();

//ClassDefinition PropertyDescriptor at object.ceylon (1:0-9:0)
function PropertyDescriptor($$propertyDescriptor){
    $init$PropertyDescriptor();
    if ($$propertyDescriptor===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    return $$propertyDescriptor;
}
PropertyDescriptor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.language','PropertyDescriptor']};};
exports.PropertyDescriptor=PropertyDescriptor;
function $init$PropertyDescriptor(){
    if (PropertyDescriptor.$$===undefined){
        $$$cl32209.initTypeProto(PropertyDescriptor,'ceylon.js.language::PropertyDescriptor',$$$cl32209.Basic);
        (function($$propertyDescriptor){
            
            //AttributeDeclaration configurable at object.ceylon (3:1-3:35)
            $$propertyDescriptor.$prop$getConfigurable={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:PropertyDescriptor,$an:function(){return[$$$cl32209.shared(),$$$cl32209.formal()];},d:['ceylon.js.language','PropertyDescriptor','$at','configurable']};}};
            
            //AttributeDeclaration descriptor at object.ceylon (4:1-4:33)
            $$propertyDescriptor.$prop$getDescriptor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:PropertyDescriptor,$an:function(){return[$$$cl32209.shared(),$$$cl32209.formal()];},d:['ceylon.js.language','PropertyDescriptor','$at','descriptor']};}};
            
            //AttributeDeclaration enumerable at object.ceylon (5:1-5:33)
            $$propertyDescriptor.$prop$getEnumerable={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:PropertyDescriptor,$an:function(){return[$$$cl32209.shared(),$$$cl32209.formal()];},d:['ceylon.js.language','PropertyDescriptor','$at','enumerable']};}};
        })(PropertyDescriptor.$$.prototype);
    }
    return PropertyDescriptor;
}
exports.$init$PropertyDescriptor=$init$PropertyDescriptor;
$init$PropertyDescriptor();

//ClassDefinition DataDescriptor at object.ceylon (12:0-26:0)
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
    return $$dataDescriptor;
}
DataDescriptor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:PropertyDescriptor},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','DataDescriptor']};};
exports.DataDescriptor=DataDescriptor;
function $init$DataDescriptor(){
    if (DataDescriptor.$$===undefined){
        $$$cl32209.initTypeProto(DataDescriptor,'ceylon.js.language::DataDescriptor',$init$PropertyDescriptor());
        (function($$dataDescriptor){
            
            //MethodDefinition toNative at object.ceylon (15:1-25:1)
            $$dataDescriptor.toNative=function toNative(){
                var $$dataDescriptor=this;
                
                //AttributeDeclaration obj at object.ceylon (16:2-16:33)
                var obj$32661=createJSObject();
                /*Begin dynamic block*/
                obj$32661.$native.configurable=$$dataDescriptor.configurable;
                obj$32661.$native.descriptor=$$dataDescriptor.descriptor;
                obj$32661.$native.enumerable=$$dataDescriptor.enumerable;
                obj$32661.$native.writable=$$dataDescriptor.writable;
                obj$32661.$native.value=$$dataDescriptor.val;
                /*End dynamic block*/
                return obj$32661;
            };$$dataDescriptor.toNative.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[],$cont:DataDescriptor,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.language','DataDescriptor','$m','toNative']};};
            $$$cl32209.defineAttr($$dataDescriptor,'configurable',function(){return this.configurable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:DataDescriptor,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.language','DataDescriptor','$at','configurable']};});
            $$$cl32209.defineAttr($$dataDescriptor,'descriptor',function(){return this.descriptor_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:DataDescriptor,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.language','DataDescriptor','$at','descriptor']};});
            $$$cl32209.defineAttr($$dataDescriptor,'enumerable',function(){return this.enumerable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:DataDescriptor,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.language','DataDescriptor','$at','enumerable']};});
            $$$cl32209.defineAttr($$dataDescriptor,'writable',function(){return this.writable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:DataDescriptor,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','DataDescriptor','$at','writable']};});
            $$$cl32209.defineAttr($$dataDescriptor,'val',function(){return this.val_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:DataDescriptor,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','DataDescriptor','$at','val']};});
        })(DataDescriptor.$$.prototype);
    }
    return DataDescriptor;
}
exports.$init$DataDescriptor=$init$DataDescriptor;
$init$DataDescriptor();

//ClassDefinition AccessorDescriptor at object.ceylon (28:0-46:0)
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
    return $$accessorDescriptor;
}
AccessorDescriptor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:PropertyDescriptor},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','AccessorDescriptor']};};
exports.AccessorDescriptor=AccessorDescriptor;
function $init$AccessorDescriptor(){
    if (AccessorDescriptor.$$===undefined){
        $$$cl32209.initTypeProto(AccessorDescriptor,'ceylon.js.language::AccessorDescriptor',$init$PropertyDescriptor());
        (function($$accessorDescriptor){
            
            //MethodDefinition toNative at object.ceylon (31:1-45:1)
            $$accessorDescriptor.toNative=function toNative(){
                var $$accessorDescriptor=this;
                
                //AttributeDeclaration obj at object.ceylon (32:2-32:33)
                var obj$32662=createJSObject();
                /*Begin dynamic block*/
                obj$32662.$native.configurable=$$accessorDescriptor.configurable;
                obj$32662.$native.descriptor=$$accessorDescriptor.descriptor;
                obj$32662.$native.enumerable=$$accessorDescriptor.enumerable;
                var g$32663;
                if((g$32663=$$accessorDescriptor.get)!==null){
                    obj$32662.$native.get=$$$cl32209.$JsCallable(g$32663/*TODO: callable targs 6*/);
                }var s$32664;
                if((s$32664=$$accessorDescriptor.set)!==null){
                    obj$32662.$native.set=$$$cl32209.$JsCallable(s$32664/*TODO: callable targs 6*/);
                }/*End dynamic block*/
                return obj$32662;
            };$$accessorDescriptor.toNative.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[],$cont:AccessorDescriptor,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.language','AccessorDescriptor','$m','toNative']};};
            $$$cl32209.defineAttr($$accessorDescriptor,'configurable',function(){return this.configurable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:AccessorDescriptor,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.language','AccessorDescriptor','$at','configurable']};});
            $$$cl32209.defineAttr($$accessorDescriptor,'descriptor',function(){return this.descriptor_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:AccessorDescriptor,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.language','AccessorDescriptor','$at','descriptor']};});
            $$$cl32209.defineAttr($$accessorDescriptor,'enumerable',function(){return this.enumerable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:AccessorDescriptor,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.language','AccessorDescriptor','$at','enumerable']};});
            $$$cl32209.defineAttr($$accessorDescriptor,'get',function(){return this.get_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Empty},Return:{t:$$$cl32209.Anything}}}]},$cont:AccessorDescriptor,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','AccessorDescriptor','$at','get']};});
            $$$cl32209.defineAttr($$accessorDescriptor,'set',function(){return this.set_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Callable,a:{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:$$$cl32209.Anything},Element:{t:$$$cl32209.Anything}}},Return:{t:$$$cl32209.Anything}}}]},$cont:AccessorDescriptor,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','AccessorDescriptor','$at','set']};});
        })(AccessorDescriptor.$$.prototype);
    }
    return AccessorDescriptor;
}
exports.$init$AccessorDescriptor=$init$AccessorDescriptor;
$init$AccessorDescriptor();

//MethodDefinition objectCreate at object.ceylon (48:0-56:0)
function objectCreate(proto$32665,properties$32666){
    
    //AttributeDeclaration propsNative at object.ceylon (49:1-49:37)
    var propsNative$32667=createJSObject();
    /*Begin dynamic block*/
    //'for' statement at object.ceylon (51:2-53:2)
    var it$32668 = properties$32666.iterator();
    var item$32669;while ((item$32669=it$32668.next())!==$$$cl32209.getFinished()){
        var key$32670=item$32669.key;
        var val$32671=item$32669.item;
        objectDefineProperty(propsNative$32667,key$32670,val$32671);
    }return JSObject((typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'54:18-54:23','object.ceylon'):Object).create(/*NULL PARAM!*/proto$32665.$native/*NULL PARAM!*/,propsNative$32667));
    /*End dynamic block*/
}
exports.objectCreate=objectCreate;
objectCreate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'proto',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{ t:'u', l:[{t:DataDescriptor},{t:AccessorDescriptor}]}}}}},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','objectCreate']};};

//MethodDefinition objectDefineProperty at object.ceylon (58:0-70:0)
function objectDefineProperty(obj$32672,prop$32673,descriptor$32674){
    //Switch statement at object.ceylon (59:1-69:1)
    var case$32675=prop$32673;
    if ($$$cl32209.isOfType(prop$32673,{t:$$$cl32209.String})) {
        /*Begin dynamic block*/
        (typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'62:3-62:8','object.ceylon'):Object).defineProperty(/*NULL PARAM!*/obj$32672.$native/*NULL PARAM!*/,case$32675.valueOf()/*NULL PARAM!*/,descriptor$32674.toNative().$native);
        /*End dynamic block*/
    }else if ($$$cl32209.isOfType(prop$32673,{t:JSString})) {
        /*Begin dynamic block*/
        (typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'67:3-67:8','object.ceylon'):Object).defineProperty(/*NULL PARAM!*/obj$32672.$native/*NULL PARAM!*/,case$32675.$native/*NULL PARAM!*/,descriptor$32674.toNative().$native);
        /*End dynamic block*/
    }//End switch statement at object.ceylon (59:1-69:1)
}
exports.objectDefineProperty=objectDefineProperty;
objectDefineProperty.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'prop',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JSString}]},$an:function(){return[];}},{$nm:'descriptor',$mt:'prm',$t:{ t:'u', l:[{t:DataDescriptor},{t:AccessorDescriptor}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','objectDefineProperty']};};

//MethodDefinition defineProperties at object.ceylon (72:0-80:0)
function defineProperties(obj$32676,properties$32677){
    
    //AttributeDeclaration propsNative at object.ceylon (73:1-73:37)
    var propsNative$32678=createJSObject();
    /*Begin dynamic block*/
    //'for' statement at object.ceylon (75:2-77:2)
    var it$32679 = properties$32677.iterator();
    var item$32680;while ((item$32680=it$32679.next())!==$$$cl32209.getFinished()){
        var key$32681=item$32680.key;
        var val$32682=item$32680.item;
        objectDefineProperty(propsNative$32678,key$32681,val$32682);
    }return JSObject((typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'78:18-78:23','object.ceylon'):Object).defineProperties(/*NULL PARAM!*/obj$32676.$native/*NULL PARAM!*/,propsNative$32678));
    /*End dynamic block*/
}
exports.defineProperties=defineProperties;
defineProperties.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{ t:'u', l:[{t:DataDescriptor},{t:AccessorDescriptor}]}}}}},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','defineProperties']};};

//MethodDefinition objectGetOwnPropertyDescriptor at object.ceylon (82:0-96:0)
function objectGetOwnPropertyDescriptor(obj$32683,prop$32684){
    
    //AttributeDeclaration descriptor at object.ceylon (83:1-83:20)
    var descriptor$32685;
    //Switch statement at object.ceylon (84:1-94:1)
    var case$32686=prop$32684;
    if ($$$cl32209.isOfType(prop$32684,{t:$$$cl32209.String})) {
        /*Begin dynamic block*/
        descriptor$32685=JSObject((typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'87:25-87:30','object.ceylon'):Object).objectGetOwnPropertyDescriptor(/*NULL PARAM!*/obj$32683/*NULL PARAM!*/,case$32686.valueOf()));/*End dynamic block*/
    }else if ($$$cl32209.isOfType(prop$32684,{t:JSString})) {
        /*Begin dynamic block*/
        descriptor$32685=JSObject((typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'92:25-92:30','object.ceylon'):Object).objectGetOwnPropertyDescriptor(/*NULL PARAM!*/obj$32683/*NULL PARAM!*/,case$32686.$native));/*End dynamic block*/
    }//End switch statement at object.ceylon (84:1-94:1)
    return descriptor$32685;
}
exports.objectGetOwnPropertyDescriptor=objectGetOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'prop',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JSString}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','objectGetOwnPropertyDescriptor']};};

//MethodDefinition objectKeys at object.ceylon (98:0-102:0)
function objectKeys(obj$32687){
    /*Begin dynamic block*/
    return JSArray((typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'100:17-100:22','object.ceylon'):Object).keys(/*NULL PARAM!*/obj$32687));
    /*End dynamic block*/
}
exports.objectKeys=objectKeys;
objectKeys.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','objectKeys']};};

//MethodDefinition objectGetOwnPropertyNames at object.ceylon (104:0-108:0)
function objectGetOwnPropertyNames(obj$32688){
    /*Begin dynamic block*/
    return JSArray((typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'106:17-106:22','object.ceylon'):Object).getOwnPropertyNames(/*NULL PARAM!*/obj$32688.$native));
    /*End dynamic block*/
}
exports.objectGetOwnPropertyNames=objectGetOwnPropertyNames;
objectGetOwnPropertyNames.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','objectGetOwnPropertyNames']};};

//MethodDefinition objectGetPrototypeOf at object.ceylon (110:0-114:0)
function objectGetPrototypeOf(obj$32689){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'112:18-112:23','object.ceylon'):Object).getPrototypeOf(/*NULL PARAM!*/obj$32689.$native));
    /*End dynamic block*/
}
exports.objectGetPrototypeOf=objectGetPrototypeOf;
objectGetPrototypeOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','objectGetPrototypeOf']};};

//MethodDefinition objectPreventExtensions at object.ceylon (116:0-120:0)
function objectPreventExtensions(obj$32690){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'118:18-118:23','object.ceylon'):Object).preventExtensions(/*NULL PARAM!*/obj$32690.$native));
    /*End dynamic block*/
}
exports.objectPreventExtensions=objectPreventExtensions;
objectPreventExtensions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','objectPreventExtensions']};};

//MethodDefinition objectIsExtensible at object.ceylon (122:0-130:0)
function objectIsExtensible(obj$32691){
    /*Begin dynamic block*/
    if((typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'124:6-124:11','object.ceylon'):Object).isExtensible(/*NULL PARAM!*/obj$32691.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.objectIsExtensible=objectIsExtensible;
objectIsExtensible.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','objectIsExtensible']};};

//MethodDefinition objectSeal at object.ceylon (132:0-136:0)
function objectSeal(obj$32692){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'134:18-134:23','object.ceylon'):Object).seal(/*NULL PARAM!*/obj$32692.$native));
    /*End dynamic block*/
}
exports.objectSeal=objectSeal;
objectSeal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','objectSeal']};};

//MethodDefinition objectIsSealed at object.ceylon (138:0-146:0)
function objectIsSealed(obj$32693){
    /*Begin dynamic block*/
    if((typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'140:6-140:11','object.ceylon'):Object).isSealed(/*NULL PARAM!*/obj$32693.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.objectIsSealed=objectIsSealed;
objectIsSealed.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','objectIsSealed']};};

//MethodDefinition objectFreeze at object.ceylon (148:0-152:0)
function objectFreeze(obj$32694){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'150:18-150:23','object.ceylon'):Object).freeze(/*NULL PARAM!*/obj$32694.$native));
    /*End dynamic block*/
}
exports.objectFreeze=objectFreeze;
objectFreeze.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','objectFreeze']};};

//MethodDefinition objectIsFrozen at object.ceylon (154:0-162:0)
function objectIsFrozen(obj$32695){
    /*Begin dynamic block*/
    if((typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'156:6-156:11','object.ceylon'):Object).isFrozen(/*NULL PARAM!*/obj$32695.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.objectIsFrozen=objectIsFrozen;
objectIsFrozen.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','objectIsFrozen']};};

//MethodDefinition createJSObject at object.ceylon (164:0-168:0)
function createJSObject(){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'166:18-166:23','object.ceylon'):Object)());
    /*End dynamic block*/
}
exports.createJSObject=createJSObject;
createJSObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','createJSObject']};};

//ClassDefinition JSObjectAbs at object.ceylon (170:0-288:0)
function JSObjectAbs($$jSObjectAbs){
    $init$JSObjectAbs();
    if ($$jSObjectAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    return $$jSObjectAbs;
}
JSObjectAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.language','JSObjectAbs']};};
exports.JSObjectAbs=JSObjectAbs;
function $init$JSObjectAbs(){
    if (JSObjectAbs.$$===undefined){
        $$$cl32209.initTypeProto(JSObjectAbs,'ceylon.js.language::JSObjectAbs',$$$cl32209.Basic);
        (function($$jSObjectAbs){
            
            //AttributeDeclaration native at object.ceylon (171:1-171:29)
            $$jSObjectAbs.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JSObjectAbs,$an:function(){return[$$$cl32209.shared(),$$$cl32209.formal()];},d:['ceylon.js.language','JSObjectAbs','$at','native']};}};
            
            //MethodDefinition getPrototype at object.ceylon (173:1-177:1)
            $$jSObjectAbs.getPrototype=function getPrototype(){
                var $$jSObjectAbs=this;
                /*Begin dynamic block*/
                return JSObject($$jSObjectAbs.$native.prototype);
                /*End dynamic block*/
            };$$jSObjectAbs.getPrototype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[],$cont:JSObjectAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','getPrototype']};};
            
            //MethodDefinition setPrototype at object.ceylon (179:1-183:1)
            $$jSObjectAbs.setPrototype=function setPrototype(prototype$32696){
                var $$jSObjectAbs=this;
                /*Begin dynamic block*/
                $$jSObjectAbs.$native.prototype=prototype$32696.$native;
                /*End dynamic block*/
            };$$jSObjectAbs.setPrototype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'prototype',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','setPrototype']};};
            
            //MethodDefinition getConstructor at object.ceylon (185:1-189:1)
            $$jSObjectAbs.getConstructor=function getConstructor(){
                var $$jSObjectAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$32697=(/*NULL PARAM!*/tmpvar$32698=$$jSObjectAbs.$native.constructor,tmpvar$32699=(typeof Function==='undefined'?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined type Function")),'187:10-187:17','object.ceylon'):Function),tmpvar$32699.$$===undefined?new tmpvar$32699(tmpvar$32698):tmpvar$32699(tmpvar$32698)),$$$cl32209.isOfType(tmpvar$32697,{t:$$$cl32209.Anything})?tmpvar$32697:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'187:10-187:37','object.ceylon'));
                /*End dynamic block*/
            };$$jSObjectAbs.getConstructor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSFunction},$ps:[],$cont:JSObjectAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','getConstructor']};};
            
            //MethodDefinition setConstructor at object.ceylon (191:1-195:1)
            $$jSObjectAbs.setConstructor=function setConstructor(constructor$32700){
                var $$jSObjectAbs=this;
                /*Begin dynamic block*/
                $$jSObjectAbs.$native.constructor=constructor$32700.$native;
                /*End dynamic block*/
            };$$jSObjectAbs.setConstructor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'constructor',$mt:'prm',$t:{t:JSFunction},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','setConstructor']};};
            
            //MethodDefinition hasOwnProperty at object.ceylon (197:1-217:4)
            $$jSObjectAbs.hasOwnProperty=function hasOwnProperty(prop$32701){
                var $$jSObjectAbs=this;
                
                //AttributeDeclaration has at object.ceylon (198:8-198:19)
                var has$32702;
                //Switch statement at object.ceylon (199:8-209:8)
                var case$32703=prop$32701;
                if ($$$cl32209.isOfType(prop$32701,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    has$32702=$$jSObjectAbs.$native.hasOwnProperty(/*NULL PARAM!*/case$32703.valueOf());/*End dynamic block*/
                }else if ($$$cl32209.isOfType(prop$32701,{t:JSString})) {
                    /*Begin dynamic block*/
                    has$32702=$$jSObjectAbs.$native.hasOwnProperty(/*NULL PARAM!*/case$32703.$native);/*End dynamic block*/
                }//End switch statement at object.ceylon (199:8-209:8)
                /*Begin dynamic block*/
                if(has$32702){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jSObjectAbs.hasOwnProperty.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'prop',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JSString}]},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','hasOwnProperty']};};
            
            //MethodDefinition isPrototypeOf at object.ceylon (219:4-227:4)
            $$jSObjectAbs.isPrototypeOf=function isPrototypeOf(obj$32704){
                var $$jSObjectAbs=this;
                /*Begin dynamic block*/
                if($$jSObjectAbs.$native.isPrototypeOf(/*NULL PARAM!*/obj$32704)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jSObjectAbs.isPrototypeOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','isPrototypeOf']};};
            
            //MethodDefinition propertyIsEnumerable at object.ceylon (229:4-249:4)
            $$jSObjectAbs.propertyIsEnumerable=function propertyIsEnumerable(prop$32705){
                var $$jSObjectAbs=this;
                
                //AttributeDeclaration enum at object.ceylon (230:8-230:20)
                var enum$32706;
                //Switch statement at object.ceylon (231:8-241:8)
                var case$32707=prop$32705;
                if ($$$cl32209.isOfType(prop$32705,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    enum$32706=$$jSObjectAbs.$native.propertyIsEnumerable(/*NULL PARAM!*/case$32707.valueOf());/*End dynamic block*/
                }else if ($$$cl32209.isOfType(prop$32705,{t:JSString})) {
                    /*Begin dynamic block*/
                    enum$32706=$$jSObjectAbs.$native.propertyIsEnumerable(/*NULL PARAM!*/case$32707.$native);/*End dynamic block*/
                }//End switch statement at object.ceylon (231:8-241:8)
                /*Begin dynamic block*/
                if(enum$32706){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jSObjectAbs.propertyIsEnumerable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'prop',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JSString}]},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','propertyIsEnumerable']};};
            
            //MethodDefinition apply at object.ceylon (251:4-255:4)
            $$jSObjectAbs.$apply=function $apply(thisArg$32708,args$32709){
                var $$jSObjectAbs=this;
                /*Begin dynamic block*/
                $$jSObjectAbs.$native.apply(/*NULL PARAM!*/(typeof a==='undefined'||a===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: a")),'253:22-253:22','object.ceylon'):a)/*NULL PARAM!*/,args$32709);
                /*End dynamic block*/
            };$$jSObjectAbs.$apply.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'thisArg',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','apply']};};
            
            //MethodDefinition applyJS at object.ceylon (257:4-267:4)
            $$jSObjectAbs.applyJS=function applyJS(thisArg$32710,args$32711){
                var $$jSObjectAbs=this;
                var a$32712;
                if((a$32712=thisArg$32710)!==null){
                    /*Begin dynamic block*/
                    $$jSObjectAbs.$native.apply(/*NULL PARAM!*/a$32712.$native/*NULL PARAM!*/,(function(){
                        //SpreadOp at 260:39-260:50
                        var lst$32713=[];
                        var it$32714=args$32711.iterator();
                        var elem$32715;
                        while ((elem$32715=it$32714.next())!==$$$cl32209.getFinished()){
                            lst$32713.push(elem$32715.$native);
                        }
                        return $$$cl32209.ArraySequence(lst$32713);
                    }()));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    $$jSObjectAbs.$native.apply(/*NULL PARAM!*/null/*NULL PARAM!*/,(function(){
                        //SpreadOp at 264:35-264:46
                        var lst$32716=[];
                        var it$32717=args$32711.iterator();
                        var elem$32718;
                        while ((elem$32718=it$32717.next())!==$$$cl32209.getFinished()){
                            lst$32716.push(elem$32718.$native);
                        }
                        return $$$cl32209.ArraySequence(lst$32716);
                    }()));
                    /*End dynamic block*/
                }
            };$$jSObjectAbs.applyJS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'thisArg',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:JSObject}]},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:{t:$$$cl32209.Sequential,a:{Element:{t:JSObject}}},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','applyJS']};};
            
            //MethodDefinition call at object.ceylon (269:4-274:4)
            $$jSObjectAbs.$call=function $call(thisArg$32719,args$32720){
                var $$jSObjectAbs=this;
                /*Begin dynamic block*/
                JSFunction($$jSObjectAbs.$native.call).$apply(thisArg$32719,(tmpvar$32721=args$32720,$$$cl32209.isOfType(tmpvar$32721,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$32721:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'272:45-272:48','object.ceylon')));
                /*End dynamic block*/
            };$$jSObjectAbs.$call.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'thisArg',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','call']};};
            
            //MethodDefinition callJS at object.ceylon (276:4-280:4)
            $$jSObjectAbs.callJS=function callJS(thisArg$32722,args$32723){
                var $$jSObjectAbs=this;
                if(args$32723===undefined){args$32723=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                JSFunction($$jSObjectAbs.$native.call).applyJS((tmpvar$32724=(typeof a==='undefined'||a===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: a")),'278:35-278:35','object.ceylon'):a),$$$cl32209.isOfType(tmpvar$32724,{ t:'u', l:[{t:$$$cl32209.Null},{t:JSObject}]})?tmpvar$32724:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'278:35-278:35','object.ceylon')),args$32723);
                /*End dynamic block*/
            };$$jSObjectAbs.callJS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'thisArg',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:JSObject}]},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:JSObject}}},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','callJS']};};
            
            //MethodDefinition toString at object.ceylon (282:4-286:4)
            $$jSObjectAbs.toString=function toString(){
                var $$jSObjectAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSObjectAbs.$native.toString());
                /*End dynamic block*/
            };$$jSObjectAbs.toString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSObjectAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSObjectAbs','$m','toString']};};
        })(JSObjectAbs.$$.prototype);
    }
    return JSObjectAbs;
}
exports.$init$JSObjectAbs=$init$JSObjectAbs;
$init$JSObjectAbs();

//ClassDefinition JSObject at object.ceylon (290:0-295:0)
function JSObject(n$32725, $$jSObject){
    $init$JSObject();
    if ($$jSObject===undefined)$$jSObject=new JSObject.$$;
    $$jSObject.n$32725_=n$32725;
    JSObjectAbs($$jSObject);
    
    //AttributeDeclaration native at object.ceylon (291:1-291:29)
    /*Begin dynamic block*/
    $$jSObject.$native=$$jSObject.n$32725;/*End dynamic block*/
    return $$jSObject;
}
JSObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSObject']};};
exports.JSObject=JSObject;
function $init$JSObject(){
    if (JSObject.$$===undefined){
        $$$cl32209.initTypeProto(JSObject,'ceylon.js.language::JSObject',$init$JSObjectAbs());
        (function($$jSObject){
            
            //AttributeDeclaration native at object.ceylon (291:1-291:29)
            $$$cl32209.defineAttr($$jSObject,'n$32725',function(){return this.n$32725_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JSObject,d:['ceylon.js.language','JSObject','$at','n']};});
        })(JSObject.$$.prototype);
    }
    return JSObject;
}
exports.$init$JSObject=$init$JSObject;
$init$JSObject();

//MethodDefinition createJSArray at array.ceylon (2:0-6:0)
function createJSArray(elements$32785){
    if(elements$32785===undefined){elements$32785=$$$cl32209.getEmpty();}
    /*Begin dynamic block*/
    return JSArray((typeof Array==='undefined'||Array===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Array")),'4:17-4:21','array.ceylon'):Array)(/*NULL PARAM!*/elements$32785));
    /*End dynamic block*/
}
exports.createJSArray=createJSArray;
createJSArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'elements',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','createJSArray']};};

//MethodDefinition arrayIsArray at array.ceylon (8:0-16:0)
function arrayIsArray(array$32786){
    /*Begin dynamic block*/
    if((typeof Array==='undefined'||Array===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Array")),'10:6-10:10','array.ceylon'):Array).isArray(/*NULL PARAM!*/array$32786)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.arrayIsArray=arrayIsArray;
arrayIsArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'array',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','arrayIsArray']};};

//ClassDefinition JSArrayAbs at array.ceylon (18:0-253:0)
function JSArrayAbs($$jSArrayAbs){
    $init$JSArrayAbs();
    if ($$jSArrayAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$jSArrayAbs);
    return $$jSArrayAbs;
}
JSArrayAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.language','JSArrayAbs']};};
exports.JSArrayAbs=JSArrayAbs;
function $init$JSArrayAbs(){
    if (JSArrayAbs.$$===undefined){
        $$$cl32209.initTypeProto(JSArrayAbs,'ceylon.js.language::JSArrayAbs',$init$JSObjectAbs());
        (function($$jSArrayAbs){
            
            //MethodDefinition getLength at array.ceylon (20:4-24:4)
            $$jSArrayAbs.getLength=function getLength(){
                var $$jSArrayAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSArrayAbs.$native.length);
                /*End dynamic block*/
            };$$jSArrayAbs.getLength.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','getLength']};};
            
            //MethodDefinition setLength at array.ceylon (26:4-38:4)
            $$jSArrayAbs.setLength=function setLength(len$32787){
                var $$jSArrayAbs=this;
                //Switch statement at array.ceylon (27:8-37:8)
                var case$32788=len$32787;
                if ($$$cl32209.isOfType(len$32787,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$jSArrayAbs.$native.length=case$32788;
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(len$32787,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSArrayAbs.$native.length=case$32788.$native;
                    /*End dynamic block*/
                }//End switch statement at array.ceylon (27:8-37:8)
            };$$jSArrayAbs.setLength.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'len',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','setLength']};};
            
            //MethodDefinition pop at array.ceylon (40:4-45:4)
            $$jSArrayAbs.pop=function pop(){
                var $$jSArrayAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$32789=$$jSArrayAbs.$native.pop(),$$$cl32209.isOfType(tmpvar$32789,{t:$$$cl32209.Anything})?tmpvar$32789:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'43:19-43:30','array.ceylon'));
                /*End dynamic block*/
            };$$jSArrayAbs.pop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("return type unknown",19)),$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','pop']};};
            
            //MethodDefinition push at array.ceylon (48:4-52:4)
            $$jSArrayAbs.push=function push(element$32790){
                var $$jSArrayAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSArrayAbs.$native.push(/*NULL PARAM!*/element$32790));
                /*End dynamic block*/
            };$$jSArrayAbs.push.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','push']};};
            
            //MethodDefinition reverse at array.ceylon (54:4-58:4)
            $$jSArrayAbs.reverse=function reverse(){
                var $$jSArrayAbs=this;
                /*Begin dynamic block*/
                $$jSArrayAbs.$native.reverse();
                /*End dynamic block*/
            };$$jSArrayAbs.reverse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','reverse']};};
            
            //MethodDefinition shift at array.ceylon (60:4-65:4)
            $$jSArrayAbs.shift=function shift(){
                var $$jSArrayAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$32791=$$jSArrayAbs.$native.shift(),$$$cl32209.isOfType(tmpvar$32791,{t:$$$cl32209.Anything})?tmpvar$32791:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'63:19-63:32','array.ceylon'));
                /*End dynamic block*/
            };$$jSArrayAbs.shift.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("return type unknown",19)),$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','shift']};};
            
            //MethodDefinition sort at array.ceylon (67:4-71:4)
            $$jSArrayAbs.sort=function sort(){
                var $$jSArrayAbs=this;
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.sort());
                /*End dynamic block*/
            };$$jSArrayAbs.sort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','sort']};};
            
            //MethodDefinition sortCompare at array.ceylon (73:4-77:4)
            $$jSArrayAbs.sortCompare=function sortCompare(compare$32792){
                var $$jSArrayAbs=this;
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.sort(/*NULL PARAM!*/compare$32792));
                /*End dynamic block*/
            };$$jSArrayAbs.sortCompare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'compare',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','sortCompare']};};
            
            //MethodDefinition splice at array.ceylon (79:4-109:4)
            $$jSArrayAbs.splice=function splice(index$32793,howMany$32794,elements$32795){
                var $$jSArrayAbs=this;
                if(elements$32795===undefined){elements$32795=$$$cl32209.getEmpty();}
                //Switch statement at array.ceylon (80:8-107:8)
                var case$32796=index$32793;
                if ($$$cl32209.isOfType(index$32793,{t:$$$cl32209.Integer})) {
                    //Switch statement at array.ceylon (82:12-93:11)
                    var case$32797=howMany$32794;
                    if ($$$cl32209.isOfType(howMany$32794,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray(JSFunction($$jSArrayAbs.$native.splice).$apply(null,(tmpvar$32798=(typeof createArray==='undefined'||createArray===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: createArray")),'86:67-86:77','array.ceylon'):createArray)(/*NULL PARAM!*/case$32796/*NULL PARAM!*/,case$32797).concat(/*NULL PARAM!*/elements$32795).native,$$$cl32209.isOfType(tmpvar$32798,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$32798:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'86:67-86:117','array.ceylon'))));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(howMany$32794,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray(JSFunction($$jSArrayAbs.$native.splice).$apply(null,(tmpvar$32799=(typeof createArray==='undefined'||createArray===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: createArray")),'91:67-91:77','array.ceylon'):createArray)(/*NULL PARAM!*/case$32796/*NULL PARAM!*/,case$32797.$native).concat(/*NULL PARAM!*/elements$32795).native,$$$cl32209.isOfType(tmpvar$32799,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$32799:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'91:67-91:124','array.ceylon'))));
                        /*End dynamic block*/
                    }//End switch statement at array.ceylon (82:12-93:11)
                }else if ($$$cl32209.isOfType(index$32793,{t:JSNumber})) {
                    //Switch statement at array.ceylon (96:12-106:11)
                    var case$32800=howMany$32794;
                    if ($$$cl32209.isOfType(howMany$32794,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray(JSFunction($$jSArrayAbs.$native.splice).$apply(null,(tmpvar$32801=(typeof createArray==='undefined'||createArray===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: createArray")),'99:73-99:83','array.ceylon'):createArray)(/*NULL PARAM!*/case$32796.$native/*NULL PARAM!*/,case$32800).concat(/*NULL PARAM!*/elements$32795).native,$$$cl32209.isOfType(tmpvar$32801,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$32801:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'99:73-99:130','array.ceylon'))));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(howMany$32794,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray(JSFunction($$jSArrayAbs.$native.splice).$apply(null,(tmpvar$32802=(typeof createArray==='undefined'||createArray===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: createArray")),'104:67-104:77','array.ceylon'):createArray)(/*NULL PARAM!*/case$32796.$native/*NULL PARAM!*/,case$32800.$native).concat(/*NULL PARAM!*/elements$32795).native,$$$cl32209.isOfType(tmpvar$32802,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$32802:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'104:67-104:131','array.ceylon'))));
                        /*End dynamic block*/
                    }//End switch statement at array.ceylon (96:12-106:11)
                }//End switch statement at array.ceylon (80:8-107:8)
            };$$jSArrayAbs.splice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'howMany',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'elements',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','splice']};};
            
            //MethodDefinition unshift at array.ceylon (111:4-115:4)
            $$jSArrayAbs.unshift=function unshift(elements$32803){
                var $$jSArrayAbs=this;
                if(elements$32803===undefined){elements$32803=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JSNumber($$jSArrayAbs.$native.push.unshift(/*NULL PARAM!*/null/*NULL PARAM!*/,elements$32803));
                /*End dynamic block*/
            };$$jSArrayAbs.unshift.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'elements',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','unshift']};};
            
            //MethodDefinition concat at array.ceylon (117:4-121:4)
            $$jSArrayAbs.concat=function concat(elementsOrArrays$32804){
                var $$jSArrayAbs=this;
                if(elementsOrArrays$32804===undefined){elementsOrArrays$32804=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JSArray(JSFunction($$jSArrayAbs.$native.concat).$apply(null,elementsOrArrays$32804));
                /*End dynamic block*/
            };$$jSArrayAbs.concat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'elementsOrArrays',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','concat']};};
            
            //MethodDefinition concatArrays at array.ceylon (123:4-128:4)
            $$jSArrayAbs.concatArrays=function concatArrays(arrays$32805){
                var $$jSArrayAbs=this;
                if(arrays$32805===undefined){arrays$32805=$$$cl32209.getEmpty();}
                /*Begin dynamic block*/
                return JSArray(JSFunction($$jSArrayAbs.$native.concat).$apply(null,(tmpvar$32806=(function(){
                    //SpreadOp at 126:65-126:78
                    var lst$32807=[];
                    var it$32808=arrays$32805.iterator();
                    var elem$32809;
                    while ((elem$32809=it$32808.next())!==$$$cl32209.getFinished()){
                        lst$32807.push(elem$32809.$native);
                    }
                    return $$$cl32209.ArraySequence(lst$32807);
                }()),$$$cl32209.isOfType(tmpvar$32806,{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.Anything}}})?tmpvar$32806:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'126:65-126:78','array.ceylon'))));
                /*End dynamic block*/
            };$$jSArrayAbs.concatArrays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'arrays',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:JSArray}}},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','concatArrays']};};
            
            //MethodDefinition join at array.ceylon (130:4-134:4)
            $$jSArrayAbs.join$defs$separator=function(separator$32810){var $$jSArrayAbs=this;
            return $$$cl32209.String(",",1);};
            $$jSArrayAbs.join=function join(separator$32810){
                var $$jSArrayAbs=this;
                if(separator$32810===undefined){separator$32810=$$jSArrayAbs.join$defs$separator(separator$32810);}
                /*Begin dynamic block*/
                return JSString($$jSArrayAbs.$native.join(/*NULL PARAM!*/(typeof sparator==='undefined'||sparator===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: sparator")),'132:40-132:47','array.ceylon'):sparator)));
                /*End dynamic block*/
            };$$jSArrayAbs.join.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'separator',$mt:'prm',$def:1,$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','join']};};
            
            //MethodDefinition slice at array.ceylon (136:4-174:4)
            $$jSArrayAbs.slice$defs$end=function(begin$32811,end$32812){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.slice=function slice(begin$32811,end$32812){
                var $$jSArrayAbs=this;
                if(end$32812===undefined){end$32812=$$jSArrayAbs.slice$defs$end(begin$32811,end$32812);}
                //Switch statement at array.ceylon (137:8-173:5)
                var case$32813=begin$32811;
                if ($$$cl32209.isOfType(begin$32811,{t:$$$cl32209.Integer})) {
                    //Switch statement at array.ceylon (139:12-154:9)
                    var case$32814=end$32812;
                    if ($$$cl32209.isOfType(end$32812,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSArrayAbs.$native.slice(/*NULL PARAM!*/case$32813/*NULL PARAM!*/,case$32814));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(end$32812,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSArrayAbs.$native.slice(/*NULL PARAM!*/case$32813/*NULL PARAM!*/,case$32814.$native));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(end$32812,{t:$$$cl32209.Null})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSArrayAbs.$native.slice(/*NULL PARAM!*/case$32813));
                        /*End dynamic block*/
                    }//End switch statement at array.ceylon (139:12-154:9)
                }else if ($$$cl32209.isOfType(begin$32811,{t:JSNumber})) {
                    //Switch statement at array.ceylon (157:9-172:9)
                    var case$32815=end$32812;
                    if ($$$cl32209.isOfType(end$32812,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSArrayAbs.$native.slice(/*NULL PARAM!*/case$32813.$native/*NULL PARAM!*/,case$32815));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(end$32812,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSArrayAbs.$native.slice(/*NULL PARAM!*/case$32813.$native/*NULL PARAM!*/,case$32815.$native));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(end$32812,{t:$$$cl32209.Null})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSArrayAbs.$native.slice(/*NULL PARAM!*/case$32813.$native));
                        /*End dynamic block*/
                    }//End switch statement at array.ceylon (157:9-172:9)
                }//End switch statement at array.ceylon (137:8-173:5)
            };$$jSArrayAbs.slice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'begin',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'end',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Integer},{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','slice']};};
            
            //MethodDefinition indexOf at array.ceylon (176:4-180:4)
            $$jSArrayAbs.indexOf$defs$fromIndex=function(searchElement$32816,fromIndex$32817){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.indexOf=function indexOf(searchElement$32816,fromIndex$32817){
                var $$jSArrayAbs=this;
                if(fromIndex$32817===undefined){fromIndex$32817=$$jSArrayAbs.indexOf$defs$fromIndex(searchElement$32816,fromIndex$32817);}
                /*Begin dynamic block*/
                return JSNumber($$jSArrayAbs.$native.indexOf(/*NULL PARAM!*/searchElement$32816/*NULL PARAM!*/,fromIndex$32817));
                /*End dynamic block*/
            };$$jSArrayAbs.indexOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'searchElement',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Integer},{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','indexOf']};};
            
            //MethodDefinition lastIndexOf at array.ceylon (182:4-199:4)
            $$jSArrayAbs.lastIndexOf$defs$fromIndex=function(searchElement$32818,fromIndex$32819){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.lastIndexOf=function lastIndexOf(searchElement$32818,fromIndex$32819){
                var $$jSArrayAbs=this;
                if(fromIndex$32819===undefined){fromIndex$32819=$$jSArrayAbs.lastIndexOf$defs$fromIndex(searchElement$32818,fromIndex$32819);}
                //Switch statement at array.ceylon (183:8-198:5)
                var case$32820=fromIndex$32819;
                if ($$$cl32209.isOfType(fromIndex$32819,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    return JSNumber($$jSArrayAbs.$native.indexOf(/*NULL PARAM!*/searchElement$32818/*NULL PARAM!*/,case$32820));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(fromIndex$32819,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber($$jSArrayAbs.$native.indexOf(/*NULL PARAM!*/searchElement$32818/*NULL PARAM!*/,case$32820.$native));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(fromIndex$32819,{t:$$$cl32209.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber($$jSArrayAbs.$native.indexOf(/*NULL PARAM!*/searchElement$32818));
                    /*End dynamic block*/
                }//End switch statement at array.ceylon (183:8-198:5)
            };$$jSArrayAbs.lastIndexOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'searchElement',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Integer},{ t:'u', l:[{t:$$$cl32209.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','lastIndexOf']};};
            
            //MethodDefinition forEach at array.ceylon (201:4-205:4)
            $$jSArrayAbs.forEach$defs$context=function(callback$32821,context$32822){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.forEach=function forEach(callback$32821,context$32822){
                var $$jSArrayAbs=this;
                if(context$32822===undefined){context$32822=$$jSArrayAbs.forEach$defs$context(callback$32821,context$32822);}
                /*Begin dynamic block*/
                $$jSArrayAbs.$native.forEach(/*NULL PARAM!*/callback$32821/*NULL PARAM!*/,context$32822);
                /*End dynamic block*/
            };$$jSArrayAbs.forEach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','forEach']};};
            
            //MethodDefinition every at array.ceylon (207:4-215:4)
            $$jSArrayAbs.every$defs$context=function(callback$32823,context$32824){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.every=function every(callback$32823,context$32824){
                var $$jSArrayAbs=this;
                if(context$32824===undefined){context$32824=$$jSArrayAbs.every$defs$context(callback$32823,context$32824);}
                /*Begin dynamic block*/
                if($$jSArrayAbs.$native.every(/*NULL PARAM!*/callback$32823/*NULL PARAM!*/,context$32824)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jSArrayAbs.every.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','every']};};
            
            //MethodDefinition some at array.ceylon (217:4-225:4)
            $$jSArrayAbs.some$defs$context=function(callback$32825,context$32826){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.some=function some(callback$32825,context$32826){
                var $$jSArrayAbs=this;
                if(context$32826===undefined){context$32826=$$jSArrayAbs.some$defs$context(callback$32825,context$32826);}
                /*Begin dynamic block*/
                if($$jSArrayAbs.$native.some(/*NULL PARAM!*/callback$32825/*NULL PARAM!*/,context$32826)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jSArrayAbs.some.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','some']};};
            
            //MethodDefinition filter at array.ceylon (227:4-231:4)
            $$jSArrayAbs.filter$defs$context=function(callback$32827,context$32828){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.filter=function filter(callback$32827,context$32828){
                var $$jSArrayAbs=this;
                if(context$32828===undefined){context$32828=$$jSArrayAbs.filter$defs$context(callback$32827,context$32828);}
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.filter(/*NULL PARAM!*/callback$32827/*NULL PARAM!*/,context$32828));
                /*End dynamic block*/
            };$$jSArrayAbs.filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','filter']};};
            
            //MethodDefinition map at array.ceylon (234:4-238:4)
            $$jSArrayAbs.map$defs$context=function(callback$32829,context$32830){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.map=function map(callback$32829,context$32830){
                var $$jSArrayAbs=this;
                if(context$32830===undefined){context$32830=$$jSArrayAbs.map$defs$context(callback$32829,context$32830);}
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.map(/*NULL PARAM!*/callback$32829/*NULL PARAM!*/,context$32830));
                /*End dynamic block*/
            };$$jSArrayAbs.map.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','map']};};
            
            //MethodDefinition reduce at array.ceylon (241:4-245:4)
            $$jSArrayAbs.reduce$defs$initialValue=function(callback$32831,initialValue$32832){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.reduce=function reduce(callback$32831,initialValue$32832){
                var $$jSArrayAbs=this;
                if(initialValue$32832===undefined){initialValue$32832=$$jSArrayAbs.reduce$defs$initialValue(callback$32831,initialValue$32832);}
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.reduce(/*NULL PARAM!*/callback$32831/*NULL PARAM!*/,initialValue$32832));
                /*End dynamic block*/
            };$$jSArrayAbs.reduce.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'initialValue',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','reduce']};};
            
            //MethodDefinition reduceRight at array.ceylon (248:4-252:4)
            $$jSArrayAbs.reduceRight$defs$initialValue=function(callback$32833,initialValue$32834){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.reduceRight=function reduceRight(callback$32833,initialValue$32834){
                var $$jSArrayAbs=this;
                if(initialValue$32834===undefined){initialValue$32834=$$jSArrayAbs.reduceRight$defs$initialValue(callback$32833,initialValue$32834);}
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.reduceRight(/*NULL PARAM!*/callback$32833/*NULL PARAM!*/,initialValue$32834));
                /*End dynamic block*/
            };$$jSArrayAbs.reduceRight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'initialValue',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArrayAbs','$m','reduceRight']};};
        })(JSArrayAbs.$$.prototype);
    }
    return JSArrayAbs;
}
exports.$init$JSArrayAbs=$init$JSArrayAbs;
$init$JSArrayAbs();

//ClassDefinition JSArray at array.ceylon (255:0-260:0)
function JSArray(n$32835, $$jSArray){
    $init$JSArray();
    if ($$jSArray===undefined)$$jSArray=new JSArray.$$;
    $$jSArray.n$32835_=n$32835;
    JSArrayAbs($$jSArray);
    
    //AttributeDeclaration native at array.ceylon (256:1-256:29)
    $$jSArray.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JSArray,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.language','JSArray','$at','native']};}};
    /*Begin dynamic block*/
    $$jSArray.$native=$$jSArray.n$32835;/*End dynamic block*/
    return $$jSArray;
}
JSArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSArrayAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','JSArray']};};
exports.JSArray=JSArray;
function $init$JSArray(){
    if (JSArray.$$===undefined){
        $$$cl32209.initTypeProto(JSArray,'ceylon.js.language::JSArray',$init$JSArrayAbs());
        (function($$jSArray){
            
            //AttributeDeclaration native at array.ceylon (256:1-256:29)
            $$$cl32209.defineAttr($$jSArray,'n$32835',function(){return this.n$32835_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JSArray,d:['ceylon.js.language','JSArray','$at','n']};});
        })(JSArray.$$.prototype);
    }
    return JSArray;
}
exports.$init$JSArray=$init$JSArray;
$init$JSArray();

//MethodDefinition eval at main.ceylon (1:0-5:0)
function eval(js$32937){
    /*Begin dynamic block*/
    return (tmpvar$32938=eval(js$32937),$$$cl32209.isOfType(tmpvar$32938,{t:$$$cl32209.Anything})?tmpvar$32938:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'3:9-3:16','main.ceylon'));
    /*End dynamic block*/
}
exports.eval=eval;
eval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'js',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JSString}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','eval']};};

//MethodDefinition isFinite at main.ceylon (7:0-15:0)
function isFinite(num$32939){
    /*Begin dynamic block*/
    if(isFinite((tmpvar$32940=num$32939.$native,$$$cl32209.isOfType(tmpvar$32940,{t:JSNumber})?tmpvar$32940:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'9:15-9:24','main.ceylon')))){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.isFinite=isFinite;
isFinite.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'num',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','isFinite']};};

//MethodDefinition isNaN at main.ceylon (17:0-25:0)
function isNaN(val$32941){
    /*Begin dynamic block*/
    if(isNaN(val$32941)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.isNaN=isNaN;
isNaN.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','isNaN']};};

//MethodDefinition parseInt at main.ceylon (27:0-39:0)
function parseInt(int$32942,radix$32943){
    if(radix$32943===undefined){radix$32943=(10);}
    //Switch statement at main.ceylon (28:1-38:1)
    var case$32944=radix$32943;
    if ($$$cl32209.isOfType(radix$32943,{t:$$$cl32209.Integer})) {
        /*Begin dynamic block*/
        return JSNumber(parseInt(int$32942,case$32944));
        /*End dynamic block*/
    }else if ($$$cl32209.isOfType(radix$32943,{t:JSNumber})) {
        /*Begin dynamic block*/
        return JSNumber(parseInt(int$32942,(tmpvar$32945=case$32944.$native,$$$cl32209.isOfType(tmpvar$32945,{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]})?tmpvar$32945:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'36:33-36:44','main.ceylon'))));
        /*End dynamic block*/
    }//End switch statement at main.ceylon (28:1-38:1)
}
exports.parseInt=parseInt;
parseInt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'int',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JSString}]},$an:function(){return[];}},{$nm:'radix',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','parseInt']};};

//MethodDefinition parseFloat at main.ceylon (41:0-53:0)
function parseFloat(float$32946){
    //Switch statement at main.ceylon (42:1-52:1)
    var case$32947=float$32946;
    if ($$$cl32209.isOfType(float$32946,{t:$$$cl32209.String})) {
        /*Begin dynamic block*/
        return JSNumber(parseFloat(case$32947));
        /*End dynamic block*/
    }else if ($$$cl32209.isOfType(float$32946,{t:JSString})) {
        /*Begin dynamic block*/
        return JSNumber(parseFloat((tmpvar$32948=case$32947.$native,$$$cl32209.isOfType(tmpvar$32948,{ t:'u', l:[{t:$$$cl32209.String},{t:JSString}]})?tmpvar$32948:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'50:30-50:41','main.ceylon'))));
        /*End dynamic block*/
    }//End switch statement at main.ceylon (42:1-52:1)
}
exports.parseFloat=parseFloat;
parseFloat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'float',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JSString}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','parseFloat']};};

//ClassDefinition RegExpFlag at regexp.ceylon (1:0-1:77)
function RegExpFlag(name$32983, $$regExpFlag){
    $init$RegExpFlag();
    if ($$regExpFlag===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$regExpFlag.name$32983_=name$32983;
    return $$regExpFlag;
}
RegExpFlag.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.language','RegExpFlag']};};
exports.RegExpFlag=RegExpFlag;
function $init$RegExpFlag(){
    if (RegExpFlag.$$===undefined){
        $$$cl32209.initTypeProto(RegExpFlag,'ceylon.js.language::RegExpFlag',$$$cl32209.Basic);
        (function($$regExpFlag){
            $$$cl32209.defineAttr($$regExpFlag,'name$32983',function(){return this.name$32983_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$cont:RegExpFlag,d:['ceylon.js.language','RegExpFlag','$at','name']};});
        })(RegExpFlag.$$.prototype);
    }
    return RegExpFlag;
}
exports.$init$RegExpFlag=$init$RegExpFlag;
$init$RegExpFlag();

//ObjectDefinition global at regexp.ceylon (3:0-3:46)
function global$32984(){
    var $$global=new global$32984.$$;
    RegExpFlag($$$cl32209.String("g",1),$$global);
    return $$global;
}
function $init$global$32984(){
    if (global$32984.$$===undefined){
        $$$cl32209.initTypeProto(global$32984,'ceylon.js.language::global',$init$RegExpFlag());
    }
    return global$32984;
}
exports.$init$global$32984=$init$global$32984;
$init$global$32984();
var global$32985;
function getGlobal(){
    if (global$32985===undefined)global$32985=$init$global$32984()();
    return global$32985;
}
exports.getGlobal=getGlobal;
getGlobal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:global$32984},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','global']};};
$prop$getGlobal={get:getGlobal,$$metamodel$$:getGlobal.$$metamodel$$};
exports.$prop$getGlobal=$prop$getGlobal;

//ObjectDefinition ignore at regexp.ceylon (4:0-4:46)
function ignore$32986(){
    var $$ignore=new ignore$32986.$$;
    RegExpFlag($$$cl32209.String("i",1),$$ignore);
    return $$ignore;
}
function $init$ignore$32986(){
    if (ignore$32986.$$===undefined){
        $$$cl32209.initTypeProto(ignore$32986,'ceylon.js.language::ignore',$init$RegExpFlag());
    }
    return ignore$32986;
}
exports.$init$ignore$32986=$init$ignore$32986;
$init$ignore$32986();
var ignore$32987;
function getIgnore(){
    if (ignore$32987===undefined)ignore$32987=$init$ignore$32986()();
    return ignore$32987;
}
exports.getIgnore=getIgnore;
getIgnore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ignore$32986},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','ignore']};};
$prop$getIgnore={get:getIgnore,$$metamodel$$:getIgnore.$$metamodel$$};
exports.$prop$getIgnore=$prop$getIgnore;

//ObjectDefinition multiple at regexp.ceylon (5:0-5:48)
function multiple$32988(){
    var $$multiple=new multiple$32988.$$;
    RegExpFlag($$$cl32209.String("m",1),$$multiple);
    return $$multiple;
}
function $init$multiple$32988(){
    if (multiple$32988.$$===undefined){
        $$$cl32209.initTypeProto(multiple$32988,'ceylon.js.language::multiple',$init$RegExpFlag());
    }
    return multiple$32988;
}
exports.$init$multiple$32988=$init$multiple$32988;
$init$multiple$32988();
var multiple$32989;
function getMultiple(){
    if (multiple$32989===undefined)multiple$32989=$init$multiple$32988()();
    return multiple$32989;
}
exports.getMultiple=getMultiple;
getMultiple.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:multiple$32988},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','multiple']};};
$prop$getMultiple={get:getMultiple,$$metamodel$$:getMultiple.$$metamodel$$};
exports.$prop$getMultiple=$prop$getMultiple;

//MethodDefinition createJSRegExp at regexp.ceylon (7:0-19:0)
function createJSRegExp(pattern$32990,flags$32991){
    if(flags$32991===undefined){flags$32991=$$$cl32209.getEmpty();}
    //Switch statement at regexp.ceylon (8:1-18:1)
    var case$32992=pattern$32990;
    if ($$$cl32209.isOfType(pattern$32990,{t:$$$cl32209.String})) {
        /*Begin dynamic block*/
        return RegExp((typeof RegExp==='undefined'||RegExp===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: RegExp")),'11:17-11:22','regexp.ceylon'):RegExp)(/*NULL PARAM!*/case$32992.valueOf()/*NULL PARAM!*/,(function(){
            //SpreadOp at 11:35-11:47
            var lst$32993=[];
            var it$32994=flags$32991.iterator();
            var elem$32995;
            while ((elem$32995=it$32994.next())!==$$$cl32209.getFinished()){
                lst$32993.push(elem$32995.string);
            }
            return $$$cl32209.ArraySequence(lst$32993);
        }())));
        /*End dynamic block*/
    }else if ($$$cl32209.isOfType(pattern$32990,{t:JSString})) {
        /*Begin dynamic block*/
        return RegExp((typeof RegExp==='undefined'||RegExp===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: RegExp")),'16:17-16:22','regexp.ceylon'):RegExp)(/*NULL PARAM!*/case$32992.$native/*NULL PARAM!*/,(function(){
            //SpreadOp at 16:42-16:54
            var lst$32996=[];
            var it$32997=flags$32991.iterator();
            var elem$32998;
            while ((elem$32998=it$32997.next())!==$$$cl32209.getFinished()){
                lst$32996.push(elem$32998.string);
            }
            return $$$cl32209.ArraySequence(lst$32996);
        }())));
        /*End dynamic block*/
    }//End switch statement at regexp.ceylon (8:1-18:1)
}
exports.createJSRegExp=createJSRegExp;
createJSRegExp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:RegExp},$ps:[{$nm:'pattern',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JSString}]},$an:function(){return[];}},{$nm:'flags',$mt:'prm',seq:1,$t:{t:$$$cl32209.Sequential,a:{Element:{t:RegExpFlag}}},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','createJSRegExp']};};

//ClassDefinition RegExpAbs at regexp.ceylon (21:0-126:0)
function RegExpAbs($$regExpAbs){
    $init$RegExpAbs();
    if ($$regExpAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$regExpAbs);
    return $$regExpAbs;
}
RegExpAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.language','RegExpAbs']};};
exports.RegExpAbs=RegExpAbs;
function $init$RegExpAbs(){
    if (RegExpAbs.$$===undefined){
        $$$cl32209.initTypeProto(RegExpAbs,'ceylon.js.language::RegExpAbs',$init$JSObjectAbs());
        (function($$regExpAbs){
            
            //ClassDefinition RegResult at regexp.ceylon (23:1-28:1)
            function RegResult$RegExpAbs(n$32999, $$regResult$RegExpAbs){
                $init$RegResult$RegExpAbs();
                if ($$regResult$RegExpAbs===undefined)$$regResult$RegExpAbs=new this.RegResult$RegExpAbs.$$;
                $$regResult$RegExpAbs.$$outer=this;
                $$regResult$RegExpAbs.n$32999_=n$32999;
                $$regResult$RegExpAbs.$$outer.RegResultAbs$RegExpAbs($$regResult$RegExpAbs);
                
                //AttributeDeclaration native at regexp.ceylon (24:2-24:30)
                $$regResult$RegExpAbs.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:RegResult$RegExpAbs,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.language','RegExpAbs','$c','RegResult','$at','native']};}};
                /*Begin dynamic block*/
                $$regResult$RegExpAbs.$native=$$regResult$RegExpAbs.n$32999;/*End dynamic block*/
                return $$regResult$RegExpAbs;
            }
            RegResult$RegExpAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RegExpAbs.RegResultAbs$RegExpAbs},$cont:RegExpAbs,satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','RegExpAbs','$c','RegResult']};};
            function $init$RegResult$RegExpAbs(){
                if (RegResult$RegExpAbs.$$===undefined){
                    $$$cl32209.initTypeProto(RegResult$RegExpAbs,'ceylon.js.language::RegExpAbs.RegResult',$$regExpAbs.RegResultAbs$RegExpAbs);
                    RegExpAbs.RegResult$RegExpAbs=RegResult$RegExpAbs;
                    (function($$regResult$RegExpAbs){
                        
                        //AttributeDeclaration native at regexp.ceylon (24:2-24:30)
                        $$$cl32209.defineAttr($$regResult$RegExpAbs,'n$32999',function(){return this.n$32999_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:RegResult$RegExpAbs,d:['ceylon.js.language','RegExpAbs','$c','RegResult','$at','n']};});
                    })(RegResult$RegExpAbs.$$.prototype);
                }
                return RegResult$RegExpAbs;
            }
            $$regExpAbs.$init$RegResult$RegExpAbs=$init$RegResult$RegExpAbs;
            $init$RegResult$RegExpAbs();
            $$regExpAbs.RegResult$RegExpAbs=RegResult$RegExpAbs;
            
            //ClassDefinition RegResultAbs at regexp.ceylon (30:1-44:1)
            function RegResultAbs$RegExpAbs($$regResultAbs$RegExpAbs){
                $init$RegResultAbs$RegExpAbs();
                if ($$regResultAbs$RegExpAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
                $$regResultAbs$RegExpAbs.$$outer=this;
                JSArrayAbs($$regResultAbs$RegExpAbs);
                return $$regResultAbs$RegExpAbs;
            }
            RegResultAbs$RegExpAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSArrayAbs},$cont:RegExpAbs,satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.language','RegExpAbs','$c','RegResultAbs']};};
            function $init$RegResultAbs$RegExpAbs(){
                if (RegResultAbs$RegExpAbs.$$===undefined){
                    $$$cl32209.initTypeProto(RegResultAbs$RegExpAbs,'ceylon.js.language::RegExpAbs.RegResultAbs',$init$JSArrayAbs());
                    RegExpAbs.RegResultAbs$RegExpAbs=RegResultAbs$RegExpAbs;
                    (function($$regResultAbs$RegExpAbs){
                        
                        //MethodDefinition input at regexp.ceylon (32:2-36:2)
                        $$regResultAbs$RegExpAbs.input=function input(){
                            var $$regResultAbs$RegExpAbs=this;
                            /*Begin dynamic block*/
                            return JSString($$regResultAbs$RegExpAbs.$native.input);
                            /*End dynamic block*/
                        };$$regResultAbs$RegExpAbs.input.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:RegResultAbs$RegExpAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','RegExpAbs','$c','RegResultAbs','$m','input']};};
                        
                        //MethodDefinition index at regexp.ceylon (38:2-42:2)
                        $$regResultAbs$RegExpAbs.index=function index(){
                            var $$regResultAbs$RegExpAbs=this;
                            /*Begin dynamic block*/
                            return JSNumber($$regResultAbs$RegExpAbs.$native.index);
                            /*End dynamic block*/
                        };$$regResultAbs$RegExpAbs.index.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:RegResultAbs$RegExpAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','RegExpAbs','$c','RegResultAbs','$m','index']};};
                    })(RegResultAbs$RegExpAbs.$$.prototype);
                }
                return RegResultAbs$RegExpAbs;
            }
            $$regExpAbs.$init$RegResultAbs$RegExpAbs=$init$RegResultAbs$RegExpAbs;
            $init$RegResultAbs$RegExpAbs();
            $$regExpAbs.RegResultAbs$RegExpAbs=RegResultAbs$RegExpAbs;
            
            //MethodDefinition global at regexp.ceylon (46:1-54:1)
            $$regExpAbs.global=function global(){
                var $$regExpAbs=this;
                /*Begin dynamic block*/
                if($$regExpAbs.$native.global){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$regExpAbs.global.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:RegExpAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','RegExpAbs','$m','global']};};
            
            //MethodDefinition ignoreCase at regexp.ceylon (56:1-64:1)
            $$regExpAbs.ignoreCase=function ignoreCase(){
                var $$regExpAbs=this;
                /*Begin dynamic block*/
                if($$regExpAbs.$native.ignoreCase){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$regExpAbs.ignoreCase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:RegExpAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','RegExpAbs','$m','ignoreCase']};};
            
            //MethodDefinition getLastindex at regexp.ceylon (66:1-70:1)
            $$regExpAbs.getLastindex=function getLastindex(){
                var $$regExpAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$regExpAbs.$native.lastindex);
                /*End dynamic block*/
            };$$regExpAbs.getLastindex.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:RegExpAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','RegExpAbs','$m','getLastindex']};};
            
            //MethodDefinition setLastindex at regexp.ceylon (72:1-84:1)
            $$regExpAbs.setLastindex=function setLastindex(index$33000){
                var $$regExpAbs=this;
                //Switch statement at regexp.ceylon (73:2-83:2)
                var case$33001=index$33000;
                if ($$$cl32209.isOfType(index$33000,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$regExpAbs.$native.lastindex=case$33001;
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(index$33000,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$regExpAbs.$native.lastindex=case$33001.$native;
                    /*End dynamic block*/
                }//End switch statement at regexp.ceylon (73:2-83:2)
            };$$regExpAbs.setLastindex.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:RegExpAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','RegExpAbs','$m','setLastindex']};};
            
            //MethodDefinition multiline at regexp.ceylon (86:1-90:1)
            $$regExpAbs.multiline=function multiline(){
                var $$regExpAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$regExpAbs.$native.multiline);
                /*End dynamic block*/
            };$$regExpAbs.multiline.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:RegExpAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','RegExpAbs','$m','multiline']};};
            
            //MethodDefinition source at regexp.ceylon (92:1-96:1)
            $$regExpAbs.source=function source(){
                var $$regExpAbs=this;
                /*Begin dynamic block*/
                return JSString($$regExpAbs.$native.source);
                /*End dynamic block*/
            };$$regExpAbs.source.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:RegExpAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','RegExpAbs','$m','source']};};
            
            //MethodDefinition exec at regexp.ceylon (98:1-102:1)
            $$regExpAbs.exec=function exec(str$33002){
                var $$regExpAbs=this;
                /*Begin dynamic block*/
                return JSString($$regExpAbs.$native.exec(/*NULL PARAM!*/str$33002.valueOf()));
                /*End dynamic block*/
            };$$regExpAbs.exec.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'str',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$cont:RegExpAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','RegExpAbs','$m','exec']};};
            
            //MethodDefinition test at regexp.ceylon (104:1-124:1)
            $$regExpAbs.test$defs$str=function(str$33003){var $$regExpAbs=this;
            return $$$cl32209.String("undefined",9);};
            $$regExpAbs.test=function test(str$33003){
                var $$regExpAbs=this;
                if(str$33003===undefined){str$33003=$$regExpAbs.test$defs$str(str$33003);}
                
                //AttributeDeclaration result at regexp.ceylon (105:2-105:16)
                var result$33004;
                //Switch statement at regexp.ceylon (106:2-116:2)
                var case$33005=str$33003;
                if ($$$cl32209.isOfType(str$33003,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    result$33004=$$regExpAbs.$native.test(/*NULL PARAM!*/case$33005.valueOf());/*End dynamic block*/
                }else if ($$$cl32209.isOfType(str$33003,{t:JSString})) {
                    /*Begin dynamic block*/
                    result$33004=$$regExpAbs.$native.test(/*NULL PARAM!*/case$33005.$native);/*End dynamic block*/
                }//End switch statement at regexp.ceylon (106:2-116:2)
                /*Begin dynamic block*/
                if(result$33004){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$regExpAbs.test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'str',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{t:JSString}]},$an:function(){return[];}}],$cont:RegExpAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','RegExpAbs','$m','test']};};
        })(RegExpAbs.$$.prototype);
    }
    return RegExpAbs;
}
exports.$init$RegExpAbs=$init$RegExpAbs;
$init$RegExpAbs();

//ClassDefinition RegExp at regexp.ceylon (128:0-133:0)
function RegExp(n$33006, $$regExp){
    $init$RegExp();
    if ($$regExp===undefined)$$regExp=new RegExp.$$;
    $$regExp.n$33006_=n$33006;
    RegExpAbs($$regExp);
    
    //AttributeDeclaration native at regexp.ceylon (129:1-129:29)
    /*Begin dynamic block*/
    $$regExp.$native=$$regExp.n$33006;/*End dynamic block*/
    return $$regExp;
}
RegExp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RegExpAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.language','RegExp']};};
exports.RegExp=RegExp;
function $init$RegExp(){
    if (RegExp.$$===undefined){
        $$$cl32209.initTypeProto(RegExp,'ceylon.js.language::RegExp',$init$RegExpAbs());
        (function($$regExp){
            
            //AttributeDeclaration native at regexp.ceylon (129:1-129:29)
            $$$cl32209.defineAttr($$regExp,'n$33006',function(){return this.n$33006_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:RegExp,d:['ceylon.js.language','RegExp','$at','n']};});
        })(RegExp.$$.prototype);
    }
    return RegExp;
}
exports.$init$RegExp=$init$RegExp;
$init$RegExp();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
