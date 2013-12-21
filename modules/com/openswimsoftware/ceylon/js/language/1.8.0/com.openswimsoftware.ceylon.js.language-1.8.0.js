(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/1.0.0"],"$mod-name":"com.openswimsoftware.ceylon.js.language","$mod-version":"1.8.0","com.openswimsoftware.ceylon.js.language":{"PropertyDescriptor":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["describes a new object property"]},"$m":{"toNative":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"toNative"}},"$at":{"configurable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"configurable"},"descriptor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"descriptor"},"enumerable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"enumerable"}},"$nm":"PropertyDescriptor"},"defineProperties":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"DataDescriptor"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"AccessorDescriptor"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[],"doc":["define properties on a native object"]},"$nm":"defineProperties"},"mathLog10":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns log of 10"]},"$nm":"mathLog10"},"objectIsSealed":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[],"doc":["can properties be added to or removed from the object"]},"$nm":"objectIsSealed"},"mathRoot2":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns square root of 2"]},"$nm":"mathRoot2"},"Math":{"super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"MathAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["native Math"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Math"},"objectIsFrozen":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[],"doc":["can the object being altered in any way"]},"$nm":"objectIsFrozen"},"objectDefineProperty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"prop"},{"$t":{"comp":"u","$ts":[{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"DataDescriptor"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"AccessorDescriptor"}]},"$mt":"prm","$nm":"descriptor"}]],"$mt":"mthd","$an":{"shared":[],"doc":["define a property on a native object"]},"$nm":"objectDefineProperty"},"RegExp":{"super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"RegExpAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["native RegExp"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"RegExp"},"dateUTC":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"year"},{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"month"},{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"day"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"hour"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"minute"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"second"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the given date string as a unix timestamp"]},"$nm":"dateUTC"},"createJSDateYMDInt":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSDate"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"day"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"hour"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"minute"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"second"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[],"doc":["create a native date at the given date time"]},"$nm":"createJSDateYMDInt"},"JSString":{"super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSStringAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["native String"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSString"},"createJSObject":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[],"doc":["create a new native object"]},"$nm":"createJSObject"},"createJSNumber":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["creates a new native number"]},"$nm":"createJSNumber"},"$pkg-shared":"1","JSDateAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"toLocaleDateString":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the date as a language sensitive string"]},"$nm":"toLocaleDateString"},"toLocaleString":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the date as a language sensitive string"]},"$nm":"toLocaleString"},"getSeconds":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the seconds"]},"$nm":"getSeconds"},"getUTCSeconds":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the seconds in UTC"]},"$nm":"getUTCSeconds"},"getUTCMonth":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the month in UTC"]},"$nm":"getUTCMonth"},"toUTCString":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the time a UTC string"]},"$nm":"toUTCString"},"setUTCFullYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the year UTC"]},"$nm":"setUTCFullYear"},"getFullYear":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the year"]},"$nm":"getFullYear"},"getHours":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the hour"]},"$nm":"getHours"},"setUTCHours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the hours UTC"]},"$nm":"setUTCHours"},"getTimezoneOffset":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the timezone offset"]},"$nm":"getTimezoneOffset"},"getDay":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the day of the week"]},"$nm":"getDay"},"setMinutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the minutes"]},"$nm":"setMinutes"},"toISOString":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the date as a ISO string"]},"$nm":"toISOString"},"setMilliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the milliseconds"]},"$nm":"setMilliseconds"},"getUTCHours":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the hour in UTC"]},"$nm":"getUTCHours"},"setTime":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the time as unix timestamp"]},"$nm":"setTime"},"toLocaleTimeString":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the time as a language sensitive string"]},"$nm":"toLocaleTimeString"},"getUTCDate":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the day of the month in UTC"]},"$nm":"getUTCDate"},"toTimeString":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the time a string"]},"$nm":"toTimeString"},"setUTCMilliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the milliseconds UTC"]},"$nm":"setUTCMilliseconds"},"setSeconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the seconds"]},"$nm":"setSeconds"},"setUTCMinutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the minutes UTC"]},"$nm":"setUTCMinutes"},"setMonth":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the month"]},"$nm":"setMonth"},"toDateString":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the date as a string"]},"$nm":"toDateString"},"setUTCSeconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the seconds UTC"]},"$nm":"setUTCSeconds"},"getUTCMinutes":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the minutes in UTC"]},"$nm":"getUTCMinutes"},"setDate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"day"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the day of the month"]},"$nm":"setDate"},"getDate":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the day of the month"]},"$nm":"getDate"},"setFullYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the year"]},"$nm":"setFullYear"},"getTime":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns unix timestamp"]},"$nm":"getTime"},"toJSON":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the date as a JSON string"]},"$nm":"toJSON"},"setHours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"hour"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the hour"]},"$nm":"setHours"},"getMonth":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the month"]},"$nm":"getMonth"},"getUTCFullYear":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the year in UTC"]},"$nm":"getUTCFullYear"},"getUTCDay":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the day of the week in UTC"]},"$nm":"getUTCDay"},"getUTCMilliseconds":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the milliseconds in UTC"]},"$nm":"getUTCMilliseconds"},"setUTCMonth":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the month UTC"]},"$nm":"setUTCMonth"},"setUTCDate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"day"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the day of the month UTC"]},"$nm":"setUTCDate"},"getMilliseconds":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the milliseconds"]},"$nm":"getMilliseconds"},"getMinutes":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the minutes"]},"$nm":"getMinutes"}},"$nm":"JSDateAbs"},"objectGetOwnPropertyDescriptor":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"prop"}]],"$mt":"mthd","$an":{"shared":[],"doc":["get the discriptor of a object property"]},"$nm":"objectGetOwnPropertyDescriptor"},"createJSDate":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSDate"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["create a native Date set to now"]},"$nm":"createJSDate"},"objectKeys":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns an array of object enumerable properties"]},"$nm":"objectKeys"},"objectGetOwnPropertyNames":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns an array of object properties"]},"$nm":"objectGetOwnPropertyNames"},"objectSeal":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[],"doc":["prevents properties from being added to or removed from the object"]},"$nm":"objectSeal"},"objectFreeze":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[],"doc":["stops the object being altered in any way"]},"$nm":"objectFreeze"},"arrayIsArray":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$an":{"shared":[],"doc":["is the passed value a native array"]},"$nm":"arrayIsArray"},"numberNegativeInfinity":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns negative infinity"]},"$nm":"numberNegativeInfinity"},"global":{"super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"RegExpFlag"},"$mt":"obj","$an":{"shared":[]},"$nm":"global"},"eval":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"js"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"eval"},"JSArrayAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"splice":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"howMany"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns an array of removed elements after it adds new elements while removing old ones"]},"$nm":"splice"},"reverse":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["reverse the order of the elements in the array"]},"$nm":"reverse"},"sort":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[],"doc":["sort the items in lexicographic order"]},"$nm":"sort"},"reduceRight":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"previousValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"currentValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"initialValue"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a single value after looping over the array right to left combining two values each time"]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"previousValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"currentValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"reduceRight"},"forEach":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[],"doc":["executes the callback for each element in the array"]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"forEach"},"lastIndexOf":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"searchElement"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the last index of the element in the array or -1"]},"$nm":"lastIndexOf"},"pop":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns and remove the last element in the array"]},"$nm":"pop"},"indexOf":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"searchElement"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the first index of the element in the array or -1"]},"$nm":"indexOf"},"join":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"separator"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a string after joining all elements with separator"]},"$nm":"join"},"every":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[],"doc":["tests if all elements in the array pass the callback test"]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"every"},"concat":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns array after appending the elements"]},"$nm":"concat"},"reduce":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"previousValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"currentValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"initialValue"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a single value after looping over the array left to right combining two values each time"]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"previousValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"currentValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"reduce"},"push":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns length after adding one or more elements to the array"]},"$nm":"push"},"concatArrays":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"arrays"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns array after combining it with the passed arrays"]},"$nm":"concatArrays"},"map":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns an array of the elements returned from the callback"]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"map"},"slice":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"begin"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns shallow copy of portion of the array"]},"$nm":"slice"},"sortCompare":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"a"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"b"}]],"$mt":"prm","$pt":"f","$nm":"compare"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sort the items using the compare function"]},"$m":{"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"a"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"b"}]],"$mt":"mthd","$nm":"compare"}},"$nm":"sortCompare"},"getLength":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the length of the array"]},"$nm":"getLength"},"unshift":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns length after adding elements to the front of the array"]},"$nm":"unshift"},"setLength":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"len"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the length of the array"]},"$nm":"setLength"},"some":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[],"doc":["tests if some elements in the array pass the callback test"]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"some"},"filter":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns an array of elements which pass the callback test"]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"array"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"filter"},"shift":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns and remove the first element in the array"]},"$nm":"shift"}},"$nm":"JSArrayAbs"},"dateParse":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"dateTime"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the given date string as a unix timestamp"]},"$nm":"dateParse"},"isFinite":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"num"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isFinite"},"JSArray":{"super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArrayAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["native Array"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSArray"},"createJSDateYMD":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSDate"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"year"},{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"month"},{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"day"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"hour"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"minute"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"second"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[],"doc":["create a native date at the given date time"]},"$nm":"createJSDateYMD"},"JSNumber":{"super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumberAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["native Number"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSNumber"},"mathLog2e":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns natural log of 2"]},"$nm":"mathLog2e"},"RegExpAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"source":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"source"},"test":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"str"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"test"},"multiline":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"multiline"},"global":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"global"},"exec":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"str"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"exec"},"getLastindex":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getLastindex"},"ignoreCase":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"ignoreCase"},"setLastindex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setLastindex"}},"$c":{"RegResult":{"super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"RegResultAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"RegResult"},"RegResultAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArrayAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"index":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"index"},"input":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"input"}},"$nm":"RegResultAbs"}},"$nm":"RegExpAbs"},"isNaN":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isNaN"},"objectCreate":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"proto"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"DataDescriptor"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"AccessorDescriptor"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[],"doc":["create a new native object"]},"$nm":"objectCreate"},"numberMinValue":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the min possible number"]},"$nm":"numberMinValue"},"JSObject":{"super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["native Object"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSObject"},"mathLog2":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns log of 2"]},"$nm":"mathLog2"},"DataDescriptor":{"super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"PropertyDescriptor"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"configurable"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"descriptor"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"enumerable"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"writable"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"val"}],"$mt":"cls","$an":{"shared":[],"doc":["describes a new object data property"]},"$m":{"toNative":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[],"doc":["converts the options to native JSON"],"actual":[]},"$nm":"toNative"}},"$at":{"val":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[]},"$nm":"val"},"configurable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"configurable"},"descriptor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"descriptor"},"writable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"writable"},"enumerable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"enumerable"}},"$nm":"DataDescriptor"},"parseFloat":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"float"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parseFloat"},"RegExpFlag":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"global"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"ignore"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"multiple"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"RegExpFlag"},"parseInt":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"int"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"radix"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parseInt"},"dateUTCInt":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSDate"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"day"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"hour"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"minute"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"second"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"milli"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the given date string as a native Date"]},"$nm":"dateUTCInt"},"objectIsExtensible":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[],"doc":["can new properties be added to the object"]},"$nm":"objectIsExtensible"},"JSNumberAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"toFixed":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"digits"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a string representing the number in fixed-point notation"]},"$nm":"toFixed"},"toExponential":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"fractionDigits"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a string representing the number in exponential notation"]},"$nm":"toExponential"},"toPrecision":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"precision"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a string representing the number in a specified precision in fixed-point or exponential notation"]},"$nm":"toPrecision"}},"$nm":"JSNumberAbs"},"JSStringAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"lastIndexOf":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"searchValue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"lastIndexOf"},"indexOf":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"searchValue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"indexOf"},"concat":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"prm","seq":"1","$nm":"strings","$min1":"1"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"concat"},"replace":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"RegExp"}]},"$mt":"prm","$nm":"pattern"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"replace"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replace"},"toUpperCase":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toUpperCase"},"replaceCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"RegExp"}]},"$mt":"prm","$nm":"pattern"},{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"match"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"psOffsetExamined"}]],"$mt":"prm","$pt":"f","$nm":"replace"}]],"$mt":"mthd","$an":{"shared":[],"doc":["replace will recived a set of substrings based on the regex then an Integer for offset, and the examined String"]},"$m":{"replace":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"match"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"psOffsetExamined"}]],"$mt":"mthd","$nm":"replace"}},"$nm":"replaceCallback"},"charCodeAt":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"charCodeAt"},"search":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"RegExp"},"$mt":"prm","$nm":"regexp"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"search"},"toLowerCase":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toLowerCase"},"substring":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"indexA"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"indexB"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"substring"},"length":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"slice":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"beginSlice"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"endSlice"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slice"},"split":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"RegExp"}]}]},"$mt":"prm","$def":"1","$nm":"separator"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"limit"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns array of strings"]},"$nm":"split"},"match":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"RegResult"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"RegExp"},"$mt":"prm","$nm":"regexp"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"match"},"trim":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"trim"},"substr":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"start"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"substr"},"charAt":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"charAt"}},"$nm":"JSStringAbs"},"JSDate":{"super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSDateAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["native Date"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSDate"},"multiple":{"super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"RegExpFlag"},"$mt":"obj","$an":{"shared":[]},"$nm":"multiple"},"numberMaxValue":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the max possible number"]},"$nm":"numberMaxValue"},"objectPreventExtensions":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[],"doc":["prevents new properties from being added to the object"]},"$nm":"objectPreventExtensions"},"ignore":{"super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"RegExpFlag"},"$mt":"obj","$an":{"shared":[]},"$nm":"ignore"},"mathRoot1_2":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns square root of 1\/2"]},"$nm":"mathRoot1_2"},"JSFunctionAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"isGenerator":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["is the function a generator"]},"$nm":"isGenerator"},"length":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns number of arguments exepcted buy the function"]},"$nm":"length"},"bind":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSFunction"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"thisArg"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a new function with thisArg as the this element and a set of args to prepend when the target function is called"]},"$nm":"bind"}},"$nm":"JSFunctionAbs"},"dateNow":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns now as a unix timestamp"]},"$nm":"dateNow"},"AccessorDescriptor":{"super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"PropertyDescriptor"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$an":{"shared":[],"actual":[]},"$nm":"configurable"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"descriptor"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[],"actual":[]},"$nm":"enumerable"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"get"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"set"}],"$mt":"cls","$an":{"shared":[],"doc":["describes a new object accessor property"]},"$m":{"toNative":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[],"doc":["converts the options to native JSON"],"actual":[]},"$nm":"toNative"}},"$at":{"configurable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"configurable"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"get"},"descriptor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"descriptor"},"set":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"set"},"enumerable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"enumerable"}},"$nm":"AccessorDescriptor"},"createJSRegExp":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"RegExp"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"pattern"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"RegExpFlag"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"flags"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSRegExp"},"createJSString":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"string"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSString"},"JSFunction":{"super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSFunctionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["native Function"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSFunction"},"numberPositiveInfinity":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns positive infinity"]},"$nm":"numberPositiveInfinity"},"JSObjectAbs":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"isPrototypeOf":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[],"doc":["is the object in the passed objects prototype chain"]},"$nm":"isPrototypeOf"},"call":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"thisArg"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[],"doc":["calls a function with thisArg as this and an argument list"]},"$nm":"call"},"apply":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"thisArg"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[],"doc":["calls a function with thisArg as this and an array of args"]},"$nm":"apply"},"setConstructor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSFunction"},"$mt":"prm","$nm":"constructor"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the objects contructor"]},"$nm":"setConstructor"},"propertyIsEnumerable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"prop"}]],"$mt":"mthd","$an":{"shared":[],"doc":["is the property enumerable by a for in loop"]},"$nm":"propertyIsEnumerable"},"toString":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["convert the object to a string"]},"$nm":"toString"},"setPrototype":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"prototype"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the objects prototype"]},"$nm":"setPrototype"},"hasOwnProperty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"prop"}]],"$mt":"mthd","$an":{"shared":[],"doc":["does the object have the propery"]},"$nm":"hasOwnProperty"},"getConstructor":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSFunction"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the objects contructor"]},"$nm":"getConstructor"},"getPrototype":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the objects prototype"]},"$nm":"getPrototype"}},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"native"}},"$nm":"JSObjectAbs"},"mathLog10e":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns natural log of 10"]},"$nm":"mathLog10e"},"MathAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"min":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"numbers"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the min of the passed numbers"]},"$nm":"min"},"atan":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the arctangent value of a number"]},"$nm":"atan"},"pow":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"base"},{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"exponent"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the base^exponent"]},"$nm":"pow"},"max":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"numbers"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the max of the passed numbers"]},"$nm":"max"},"asin":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the arcsine value of a number"]},"$nm":"asin"},"cos":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the cosine of a number"]},"$nm":"cos"},"ceil":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns ceiling of the passed number"]},"$nm":"ceil"},"sqrt":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the square root of a number"]},"$nm":"sqrt"},"random":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a pseudo-random number between 0 and 1"]},"$nm":"random"},"round":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a number rounded to the nearest integer"]},"$nm":"round"},"log":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns log of the number"]},"$nm":"log"},"exp":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the E^x"]},"$nm":"exp"},"atan2":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"y"},{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the arctangent of the quotient of y\/x"]},"$nm":"atan2"},"abs":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the absolute value of a number"]},"$nm":"abs"},"floor":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns floor of the passed number"]},"$nm":"floor"},"sin":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the sine of a number"]},"$nm":"sin"},"tan":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the tangent a number"]},"$nm":"tan"},"acos":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the arccosine value of a number"]},"$nm":"acos"}},"$nm":"MathAbs"},"objectGetPrototypeOf":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSFunction"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the objects prototype"]},"$nm":"objectGetPrototypeOf"},"createJSDateNow":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSDate"},"$mt":"mthd","$an":{"shared":[],"doc":["create a native Date set to now"]},"$nm":"createJSDateNow"},"createJSArray":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"arg"}]],"$mt":"mthd","$an":{"shared":[],"doc":["crate a new native array"]},"$nm":"createJSArray"},"mathPi":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns pi"]},"$nm":"mathPi"},"mathE":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns natural log"]},"$nm":"mathE"}},"$mod-bin":"6.0"};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl1.$addmod$($$$cl1,'ceylon.language/1.0.0');
function createJSArray(arg$2){
    /*Begin dynamic block*/
    return JSArray((typeof Array==='undefined'||Array===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Array")),'4:17-4:21','array.ceylon'):Array)(arg$2));
    /*End dynamic block*/
}
exports.createJSArray=createJSArray;
createJSArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'arg',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("crate a new native array",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSArray']};};
function arrayIsArray(array$3){
    /*Begin dynamic block*/
    if((typeof Array==='undefined'||Array===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Array")),'11:6-11:10','array.ceylon'):Array).isArray(array$3)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.arrayIsArray=arrayIsArray;
arrayIsArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'array',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("is the passed value a native array",34)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','arrayIsArray']};};
function JSArrayAbs($$jSArrayAbs){
    $init$JSArrayAbs();
    if ($$jSArrayAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$jSArrayAbs);
    return $$jSArrayAbs;
}
JSArrayAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs']};};
exports.JSArrayAbs=JSArrayAbs;
function $init$JSArrayAbs(){
    if (JSArrayAbs.$$===undefined){
        $$$cl1.initTypeProto(JSArrayAbs,'com.openswimsoftware.ceylon.js.language::JSArrayAbs',$init$JSObjectAbs());
        (function($$jSArrayAbs){
            $$jSArrayAbs.getLength=function getLength(){
                var $$jSArrayAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSArrayAbs.$native.length);
                /*End dynamic block*/
            };$$jSArrayAbs.getLength.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the length of the array",31)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','getLength']};};
            $$jSArrayAbs.setLength=function setLength(len$4){
                var $$jSArrayAbs=this;
                
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
            };$$jSArrayAbs.setLength.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'len',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the length of the array",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','setLength']};};
            $$jSArrayAbs.pop=function pop(){
                var $$jSArrayAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$6=$$jSArrayAbs.$native.pop(),$$$cl1.isOfType(tmpvar$6,{t:$$$cl1.Anything})?tmpvar$6:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'46:19-46:30','array.ceylon'));
                /*End dynamic block*/
            };$$jSArrayAbs.pop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns and remove the last element in the array",48)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','pop']};};
            $$jSArrayAbs.push=function push(elements$7){
                var $$jSArrayAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSArrayAbs.$native.push(elements$7));
                /*End dynamic block*/
            };$$jSArrayAbs.push.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns length after adding one or more elements to the array",61)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','push']};};
            $$jSArrayAbs.reverse=function reverse(){
                var $$jSArrayAbs=this;
                /*Begin dynamic block*/
                $$jSArrayAbs.$native.reverse();
                /*End dynamic block*/
            };$$jSArrayAbs.reverse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("reverse the order of the elements in the array",46)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','reverse']};};
            $$jSArrayAbs.shift=function shift(){
                var $$jSArrayAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$8=$$jSArrayAbs.$native.shift(),$$$cl1.isOfType(tmpvar$8,{t:$$$cl1.Anything})?tmpvar$8:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'68:19-68:32','array.ceylon'));
                /*End dynamic block*/
            };$$jSArrayAbs.shift.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns and remove the first element in the array",49)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','shift']};};
            $$jSArrayAbs.sort=function sort(){
                var $$jSArrayAbs=this;
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.sort());
                /*End dynamic block*/
            };$$jSArrayAbs.sort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sort the items in lexicographic order",37)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','sort']};};
            $$jSArrayAbs.sortCompare=function sortCompare(compare$9){
                var $$jSArrayAbs=this;
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.sort(compare$9));
                /*End dynamic block*/
            };$$jSArrayAbs.sortCompare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'compare',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sort the items using the compare function",41)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','sortCompare']};};
            $$jSArrayAbs.splice=function splice(index$10,howMany$11,elements$12){
                var $$jSArrayAbs=this;
                if(elements$12===undefined){elements$12=$$$cl1.getEmpty();}
                
                var case$13=index$10;
                if ($$$cl1.isOfType(index$10,{t:$$$cl1.Integer})) {
                    
                    var case$14=howMany$11;
                    if ($$$cl1.isOfType(howMany$11,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray(JSFunction($$jSArrayAbs.$native.splice).$apply(null,(typeof createArray==='undefined'||createArray===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: createArray")),'94:67-94:77','array.ceylon'):createArray)(case$13,case$14).concat(elements$12).native));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(howMany$11,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray(JSFunction($$jSArrayAbs.$native.splice).$apply(null,(typeof createArray==='undefined'||createArray===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: createArray")),'99:67-99:77','array.ceylon'):createArray)(case$13,case$14.$native).concat(elements$12).native));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(index$10,{t:JSNumber})) {
                    
                    var case$15=howMany$11;
                    if ($$$cl1.isOfType(howMany$11,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray(JSFunction($$jSArrayAbs.$native.splice).$apply(null,(typeof createArray==='undefined'||createArray===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: createArray")),'107:73-107:83','array.ceylon'):createArray)(case$13.$native,case$15).concat(elements$12).native));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(howMany$11,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray(JSFunction($$jSArrayAbs.$native.splice).$apply(null,(typeof createArray==='undefined'||createArray===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: createArray")),'112:67-112:77','array.ceylon'):createArray)(case$13.$native,case$15.$native).concat(elements$12).native));
                        /*End dynamic block*/
                    }
                }
            };$$jSArrayAbs.splice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'index',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'howMany',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'elements',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns an array of removed elements after it adds new elements while removing old ones",87)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','splice']};};
            $$jSArrayAbs.unshift=function unshift(elements$16){
                var $$jSArrayAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSArrayAbs.$native.push.unshift(null,elements$16));
                /*End dynamic block*/
            };$$jSArrayAbs.unshift.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns length after adding elements to the front of the array",62)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','unshift']};};
            $$jSArrayAbs.concat=function concat(elements$17){
                var $$jSArrayAbs=this;
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.concat(elements$17));
                /*End dynamic block*/
            };$$jSArrayAbs.concat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns array after appending the elements",42)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','concat']};};
            $$jSArrayAbs.concatArrays=function concatArrays(arrays$18){
                var $$jSArrayAbs=this;
                if(arrays$18===undefined){arrays$18=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.concat((function(){
                    var lst$19=[];
                    var it$20=arrays$18.iterator();
                    var elem$21;
                    while ((elem$21=it$20.next())!==$$$cl1.getFinished()){
                        lst$19.push(elem$21.$native);
                    }
                    return $$$cl1.ArraySequence(lst$19);
                }())));
                /*End dynamic block*/
            };$$jSArrayAbs.concatArrays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'arrays',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:JSArray}}},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns array after combining it with the passed arrays",55)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','concatArrays']};};
            $$jSArrayAbs.join$defs$separator=function(separator$22){var $$jSArrayAbs=this;
            return $$$cl1.String(",",1);};
            $$jSArrayAbs.join=function join(separator$22){
                var $$jSArrayAbs=this;
                if(separator$22===undefined){separator$22=$$jSArrayAbs.join$defs$separator(separator$22);}
                /*Begin dynamic block*/
                return JSString($$jSArrayAbs.$native.join((typeof sparator==='undefined'||sparator===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: sparator")),'146:40-146:47','array.ceylon'):sparator)));
                /*End dynamic block*/
            };$$jSArrayAbs.join.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'separator',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a string after joining all elements with separator",58)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','join']};};
            $$jSArrayAbs.slice$defs$end=function(begin$23,end$24){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.slice=function slice(begin$23,end$24){
                var $$jSArrayAbs=this;
                if(end$24===undefined){end$24=$$jSArrayAbs.slice$defs$end(begin$23,end$24);}
                
                var case$25=begin$23;
                if ($$$cl1.isOfType(begin$23,{t:$$$cl1.Integer})) {
                    
                    var case$26=end$24;
                    if ($$$cl1.isOfType(end$24,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSArrayAbs.$native.slice(case$25,case$26));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(end$24,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSArrayAbs.$native.slice(case$25,case$26.$native));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(end$24,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSArrayAbs.$native.slice(case$25));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(begin$23,{t:JSNumber})) {
                    
                    var case$27=end$24;
                    if ($$$cl1.isOfType(end$24,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSArrayAbs.$native.slice(case$25.$native,case$27));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(end$24,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSArrayAbs.$native.slice(case$25.$native,case$27.$native));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(end$24,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSArrayAbs.$native.slice(case$25.$native));
                        /*End dynamic block*/
                    }
                }
            };$$jSArrayAbs.slice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'begin',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'end',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Integer},{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns shallow copy of portion of the array",44)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','slice']};};
            $$jSArrayAbs.indexOf$defs$fromIndex=function(searchElement$28,fromIndex$29){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.indexOf=function indexOf(searchElement$28,fromIndex$29){
                var $$jSArrayAbs=this;
                if(fromIndex$29===undefined){fromIndex$29=$$jSArrayAbs.indexOf$defs$fromIndex(searchElement$28,fromIndex$29);}
                /*Begin dynamic block*/
                return JSNumber($$jSArrayAbs.$native.indexOf(searchElement$28,fromIndex$29));
                /*End dynamic block*/
            };$$jSArrayAbs.indexOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'searchElement',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Integer},{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the first index of the element in the array or -1",57)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','indexOf']};};
            $$jSArrayAbs.lastIndexOf$defs$fromIndex=function(searchElement$30,fromIndex$31){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.lastIndexOf=function lastIndexOf(searchElement$30,fromIndex$31){
                var $$jSArrayAbs=this;
                if(fromIndex$31===undefined){fromIndex$31=$$jSArrayAbs.lastIndexOf$defs$fromIndex(searchElement$30,fromIndex$31);}
                
                var case$32=fromIndex$31;
                if ($$$cl1.isOfType(fromIndex$31,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    return JSNumber($$jSArrayAbs.$native.indexOf(searchElement$30,case$32));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(fromIndex$31,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber($$jSArrayAbs.$native.indexOf(searchElement$30,case$32.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(fromIndex$31,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber($$jSArrayAbs.$native.indexOf(searchElement$30));
                    /*End dynamic block*/
                }
            };$$jSArrayAbs.lastIndexOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'searchElement',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Integer},{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the last index of the element in the array or -1",56)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','lastIndexOf']};};
            $$jSArrayAbs.forEach$defs$context=function(callback$33,context$34){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.forEach=function forEach(callback$33,context$34){
                var $$jSArrayAbs=this;
                if(context$34===undefined){context$34=$$jSArrayAbs.forEach$defs$context(callback$33,context$34);}
                /*Begin dynamic block*/
                $$jSArrayAbs.$native.forEach(callback$33,context$34);
                /*End dynamic block*/
            };$$jSArrayAbs.forEach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("executes the callback for each element in the array",51)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','forEach']};};
            $$jSArrayAbs.every$defs$context=function(callback$35,context$36){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.every=function every(callback$35,context$36){
                var $$jSArrayAbs=this;
                if(context$36===undefined){context$36=$$jSArrayAbs.every$defs$context(callback$35,context$36);}
                /*Begin dynamic block*/
                if($$jSArrayAbs.$native.every(callback$35,context$36)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jSArrayAbs.every.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("tests if all elements in the array pass the callback test",57)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','every']};};
            $$jSArrayAbs.some$defs$context=function(callback$37,context$38){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.some=function some(callback$37,context$38){
                var $$jSArrayAbs=this;
                if(context$38===undefined){context$38=$$jSArrayAbs.some$defs$context(callback$37,context$38);}
                /*Begin dynamic block*/
                if($$jSArrayAbs.$native.some(callback$37,context$38)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jSArrayAbs.some.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("tests if some elements in the array pass the callback test",58)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','some']};};
            $$jSArrayAbs.filter$defs$context=function(callback$39,context$40){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.filter=function filter(callback$39,context$40){
                var $$jSArrayAbs=this;
                if(context$40===undefined){context$40=$$jSArrayAbs.filter$defs$context(callback$39,context$40);}
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.filter(callback$39,context$40));
                /*End dynamic block*/
            };$$jSArrayAbs.filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns an array of elements which pass the callback test",57)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','filter']};};
            $$jSArrayAbs.map$defs$context=function(callback$41,context$42){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.map=function map(callback$41,context$42){
                var $$jSArrayAbs=this;
                if(context$42===undefined){context$42=$$jSArrayAbs.map$defs$context(callback$41,context$42);}
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.map(callback$41,context$42));
                /*End dynamic block*/
            };$$jSArrayAbs.map.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns an array of the elements returned from the callback",59)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','map']};};
            $$jSArrayAbs.reduce$defs$initialValue=function(callback$43,initialValue$44){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.reduce=function reduce(callback$43,initialValue$44){
                var $$jSArrayAbs=this;
                if(initialValue$44===undefined){initialValue$44=$$jSArrayAbs.reduce$defs$initialValue(callback$43,initialValue$44);}
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.reduce(callback$43,initialValue$44));
                /*End dynamic block*/
            };$$jSArrayAbs.reduce.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'initialValue',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a single value after looping over the array left to right combining two values each time",96)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','reduce']};};
            $$jSArrayAbs.reduceRight$defs$initialValue=function(callback$45,initialValue$46){var $$jSArrayAbs=this;
            return null;};
            $$jSArrayAbs.reduceRight=function reduceRight(callback$45,initialValue$46){
                var $$jSArrayAbs=this;
                if(initialValue$46===undefined){initialValue$46=$$jSArrayAbs.reduceRight$defs$initialValue(callback$45,initialValue$46);}
                /*Begin dynamic block*/
                return JSArray($$jSArrayAbs.$native.reduceRight(callback$45,initialValue$46));
                /*End dynamic block*/
            };$$jSArrayAbs.reduceRight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'initialValue',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a single value after looping over the array right to left combining two values each time",96)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','reduceRight']};};
        })(JSArrayAbs.$$.prototype);
    }
    return JSArrayAbs;
}
exports.$init$JSArrayAbs=$init$JSArrayAbs;
$init$JSArrayAbs();
function JSArray(n$47, $$jSArray){
    $init$JSArray();
    if ($$jSArray===undefined)$$jSArray=new JSArray.$$;
    $$jSArray.n$47_=n$47;
    JSArrayAbs($$jSArray);
    $$jSArray.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSArray,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.language','JSArray','$at','native']};}};
    /*Begin dynamic block*/
    $$jSArray.$native=$$jSArray.n$47;/*End dynamic block*/
    return $$jSArray;
}
JSArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSArrayAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("native Array",12)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArray']};};
exports.JSArray=JSArray;
function $init$JSArray(){
    if (JSArray.$$===undefined){
        $$$cl1.initTypeProto(JSArray,'com.openswimsoftware.ceylon.js.language::JSArray',$init$JSArrayAbs());
        (function($$jSArray){
            $$$cl1.defineAttr($$jSArray,'n$47',function(){return this.n$47_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSArray,d:['com.openswimsoftware.ceylon.js.language','JSArray','$at','n']};});
        })(JSArray.$$.prototype);
    }
    return JSArray;
}
exports.$init$JSArray=$init$JSArray;
$init$JSArray();
function createJSDateNow(){
    /*Begin dynamic block*/
    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'4:16-4:19','date.ceylon'):Date)());
    /*End dynamic block*/
}
exports.createJSDateNow=createJSDateNow;
createJSDateNow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSDate},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("create a native Date set to now",31)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSDateNow']};};
function createJSDate(val$48){
    /*Begin dynamic block*/
    
    var case$49=val$48;
    if ($$$cl1.isOfType(val$48,{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]})) {
        return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'13:17-13:20','date.ceylon'):Date)(case$49));
    }else if ($$$cl1.isOfType(val$48,{t:JSNumber})) {
        return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'16:17-16:20','date.ceylon'):Date)(case$49.$native));
    }/*End dynamic block*/
}
exports.createJSDate=createJSDate;
createJSDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSDate},$ps:[{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("create a native Date set to now",31)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSDate']};};
function createJSDateYMD(year$50,month$51,day$52,hour$53,minute$54,second$55,milli$56){
    if(hour$53===undefined){hour$53=null;}
    if(minute$54===undefined){minute$54=null;}
    if(second$55===undefined){second$55=null;}
    if(milli$56===undefined){milli$56=null;}
    
    var case$57=hour$53;
    if ($$$cl1.isOfType(hour$53,{t:JSNumber})) {
        
        var case$58=minute$54;
        if ($$$cl1.isOfType(minute$54,{t:JSNumber})) {
            
            var case$59=second$55;
            if ($$$cl1.isOfType(second$55,{t:JSNumber})) {
                
                var case$60=milli$56;
                if ($$$cl1.isOfType(milli$56,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'33:20-33:23','date.ceylon'):Date)(year$50.$native,month$51.$native,day$52.$native,case$57.$native,case$58.$native,case$59.$native,case$60.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$56,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'38:20-38:23','date.ceylon'):Date)(year$50.$native,month$51.$native,day$52.$native,case$57.$native,case$58.$native,case$59.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(second$55,{t:$$$cl1.Null})) {
                
                var case$61=milli$56;
                if ($$$cl1.isOfType(milli$56,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'46:20-46:23','date.ceylon'):Date)(year$50.$native,month$51.$native,day$52.$native,case$57.$native,case$58.$native,null,case$61.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$56,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'51:20-51:23','date.ceylon'):Date)(year$50.$native,month$51.$native,day$52.$native,case$57.$native,case$58.$native));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(minute$54,{t:$$$cl1.Null})) {
            
            var case$62=second$55;
            if ($$$cl1.isOfType(second$55,{t:JSNumber})) {
                
                var case$63=milli$56;
                if ($$$cl1.isOfType(milli$56,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'62:20-62:23','date.ceylon'):Date)(year$50.$native,month$51.$native,day$52.$native,null,null,case$62.$native,case$63.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$56,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'67:20-67:23','date.ceylon'):Date)(year$50.$native,month$51.$native,day$52.$native,null,null,case$62.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(second$55,{t:$$$cl1.Null})) {
                
                var case$64=milli$56;
                if ($$$cl1.isOfType(milli$56,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'75:20-75:23','date.ceylon'):Date)(year$50.$native,month$51.$native,day$52.$native,null,null,null,case$64.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$56,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'80:20-80:23','date.ceylon'):Date)(year$50.$native,month$51.$native,day$52.$native));
                    /*End dynamic block*/
                }
            }
        }
    }else if ($$$cl1.isOfType(hour$53,{t:$$$cl1.Null})) {
        
        var case$65=minute$54;
        if ($$$cl1.isOfType(minute$54,{t:JSNumber})) {
            
            var case$66=second$55;
            if ($$$cl1.isOfType(second$55,{t:JSNumber})) {
                
                var case$67=milli$56;
                if ($$$cl1.isOfType(milli$56,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'94:20-94:23','date.ceylon'):Date)(year$50.$native,month$51.$native,day$52.$native,null,case$65.$native,case$66.$native,case$67.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$56,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'99:20-99:23','date.ceylon'):Date)(year$50.$native,month$51.$native,day$52.$native,null,case$65.$native,case$66.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(second$55,{t:$$$cl1.Null})) {
                
                var case$68=milli$56;
                if ($$$cl1.isOfType(milli$56,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'107:20-107:23','date.ceylon'):Date)(year$50.$native,month$51.$native,day$52.$native,null,case$65.$native,null,case$68.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$56,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'112:20-112:23','date.ceylon'):Date)(year$50.$native,month$51.$native,day$52.$native,null,case$65.$native));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(minute$54,{t:$$$cl1.Null})) {
            
            var case$69=second$55;
            if ($$$cl1.isOfType(second$55,{t:JSNumber})) {
                
                var case$70=milli$56;
                if ($$$cl1.isOfType(milli$56,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'123:20-123:23','date.ceylon'):Date)(year$50.$native,month$51.$native,day$52.$native,null,null,case$69.$native,case$70.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$56,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'128:20-128:23','date.ceylon'):Date)(year$50.$native,month$51.$native,day$52.$native,null,null,case$69.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(second$55,{t:$$$cl1.Null})) {
                
                var case$71=milli$56;
                if ($$$cl1.isOfType(milli$56,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'136:20-136:23','date.ceylon'):Date)(year$50.$native,month$51.$native,day$52.$native,null,null,null,case$71.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$56,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'141:20-141:23','date.ceylon'):Date)(year$50.$native,month$51.$native,day$52.$native));
                    /*End dynamic block*/
                }
            }
        }
    }
}
exports.createJSDateYMD=createJSDateYMD;
createJSDateYMD.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSDate},$ps:[{$nm:'year',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'minute',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'second',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'milli',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("create a native date at the given date time",43)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSDateYMD']};};
function createJSDateYMDInt(year$72,month$73,day$74,hour$75,minute$76,second$77,milli$78){
    if(hour$75===undefined){hour$75=null;}
    if(minute$76===undefined){minute$76=null;}
    if(second$77===undefined){second$77=null;}
    if(milli$78===undefined){milli$78=null;}
    /*Begin dynamic block*/
    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'153:16-153:19','date.ceylon'):Date)(year$72,month$73,day$74,hour$75,minute$76,second$77,milli$78));
    /*End dynamic block*/
}
exports.createJSDateYMDInt=createJSDateYMDInt;
createJSDateYMDInt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSDate},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}},{$nm:'minute',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}},{$nm:'second',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}},{$nm:'milli',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("create a native date at the given date time",43)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSDateYMDInt']};};
function dateNow(){
    /*Begin dynamic block*/
    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'160:18-160:21','date.ceylon'):Date).now());
    /*End dynamic block*/
}
exports.dateNow=dateNow;
dateNow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("returns now as a unix timestamp",31)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','dateNow']};};
function dateParse(dateTime$79){
    
    var case$80=dateTime$79;
    if ($$$cl1.isOfType(dateTime$79,{t:$$$cl1.String})) {
        /*Begin dynamic block*/
        return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'169:19-169:22','date.ceylon'):Date).parse(case$80.valueOf()));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(dateTime$79,{t:JSString})) {
        /*Begin dynamic block*/
        return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'174:19-174:22','date.ceylon'):Date).parse(case$80.$native));
        /*End dynamic block*/
    }
}
exports.dateParse=dateParse;
dateParse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'dateTime',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("returns the given date string as a unix timestamp",49)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','dateParse']};};
function dateUTC(year$81,month$82,day$83,hour$84,minute$85,second$86,milli$87){
    if(hour$84===undefined){hour$84=null;}
    if(minute$85===undefined){minute$85=null;}
    if(second$86===undefined){second$86=null;}
    if(milli$87===undefined){milli$87=null;}
    
    var case$88=hour$84;
    if ($$$cl1.isOfType(hour$84,{t:JSNumber})) {
        
        var case$89=minute$85;
        if ($$$cl1.isOfType(minute$85,{t:JSNumber})) {
            
            var case$90=second$86;
            if ($$$cl1.isOfType(second$86,{t:JSNumber})) {
                
                var case$91=milli$87;
                if ($$$cl1.isOfType(milli$87,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'191:22-191:25','date.ceylon'):Date).UTC(year$81.$native,month$82.$native,day$83.$native,case$88.$native,case$89.$native,case$90.$native,case$91.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$87,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'196:22-196:25','date.ceylon'):Date).UTC(year$81.$native,month$82.$native,day$83.$native,case$88.$native,case$89.$native,case$90.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(second$86,{t:$$$cl1.Null})) {
                
                var case$92=milli$87;
                if ($$$cl1.isOfType(milli$87,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'204:22-204:25','date.ceylon'):Date).UTC(year$81.$native,month$82.$native,day$83.$native,case$88.$native,case$89.$native,null,case$92.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$87,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'209:22-209:25','date.ceylon'):Date).UTC(year$81.$native,month$82.$native,day$83.$native,case$88.$native,case$89.$native));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(minute$85,{t:$$$cl1.Null})) {
            
            var case$93=second$86;
            if ($$$cl1.isOfType(second$86,{t:JSNumber})) {
                
                var case$94=milli$87;
                if ($$$cl1.isOfType(milli$87,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'220:22-220:25','date.ceylon'):Date).UTC(year$81.$native,month$82.$native,day$83.$native,null,null,case$93.$native,case$94.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$87,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'225:22-225:25','date.ceylon'):Date).UTC(year$81.$native,month$82.$native,day$83.$native,null,null,case$93.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(second$86,{t:$$$cl1.Null})) {
                
                var case$95=milli$87;
                if ($$$cl1.isOfType(milli$87,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'233:22-233:25','date.ceylon'):Date).UTC(year$81.$native,month$82.$native,day$83.$native,null,null,null,case$95.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$87,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'238:22-238:25','date.ceylon'):Date).UTC(year$81.$native,month$82.$native,day$83.$native));
                    /*End dynamic block*/
                }
            }
        }
    }else if ($$$cl1.isOfType(hour$84,{t:$$$cl1.Null})) {
        
        var case$96=minute$85;
        if ($$$cl1.isOfType(minute$85,{t:JSNumber})) {
            
            var case$97=second$86;
            if ($$$cl1.isOfType(second$86,{t:JSNumber})) {
                
                var case$98=milli$87;
                if ($$$cl1.isOfType(milli$87,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'252:22-252:25','date.ceylon'):Date).UTC(year$81.$native,month$82.$native,day$83.$native,null,case$96.$native,case$97.$native,case$98.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$87,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'257:22-257:25','date.ceylon'):Date).UTC(year$81.$native,month$82.$native,day$83.$native,null,case$96.$native,case$97.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(second$86,{t:$$$cl1.Null})) {
                
                var case$99=milli$87;
                if ($$$cl1.isOfType(milli$87,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'265:22-265:25','date.ceylon'):Date).UTC(year$81.$native,month$82.$native,day$83.$native,null,case$96.$native,null,case$99.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$87,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'270:22-270:25','date.ceylon'):Date).UTC(year$81.$native,month$82.$native,day$83.$native,null,case$96.$native));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(minute$85,{t:$$$cl1.Null})) {
            
            var case$100=second$86;
            if ($$$cl1.isOfType(second$86,{t:JSNumber})) {
                
                var case$101=milli$87;
                if ($$$cl1.isOfType(milli$87,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'281:22-281:25','date.ceylon'):Date).UTC(year$81.$native,month$82.$native,day$83.$native,null,null,case$100.$native,case$101.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$87,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'286:22-286:25','date.ceylon'):Date).UTC(year$81.$native,month$82.$native,day$83.$native,null,null,case$100.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(second$86,{t:$$$cl1.Null})) {
                
                var case$102=milli$87;
                if ($$$cl1.isOfType(milli$87,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'294:22-294:25','date.ceylon'):Date).UTC(year$81.$native,month$82.$native,day$83.$native,null,null,null,case$102.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$87,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'299:22-299:25','date.ceylon'):Date).UTC(year$81.$native,month$82.$native,day$83.$native));
                    /*End dynamic block*/
                }
            }
        }
    }
}
exports.dateUTC=dateUTC;
dateUTC.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'year',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'minute',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'second',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'milli',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("returns the given date string as a unix timestamp",49)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','dateUTC']};};
function dateUTCInt(year$103,month$104,day$105,hour$106,minute$107,second$108,milli$109){
    if(hour$106===undefined){hour$106=null;}
    if(minute$107===undefined){minute$107=null;}
    if(second$108===undefined){second$108=null;}
    if(milli$109===undefined){milli$109=null;}
    /*Begin dynamic block*/
    return JSDate((typeof Date==='undefined'||Date===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Date")),'311:16-311:19','date.ceylon'):Date).UTC(year$103,month$104,day$105,hour$106,minute$107,second$108,milli$109));
    /*End dynamic block*/
}
exports.dateUTCInt=dateUTCInt;
dateUTCInt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSDate},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}},{$nm:'minute',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}},{$nm:'second',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}},{$nm:'milli',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("returns the given date string as a native Date",46)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','dateUTCInt']};};
function JSDateAbs($$jSDateAbs){
    $init$JSDateAbs();
    if ($$jSDateAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$jSDateAbs);
    return $$jSDateAbs;
}
JSDateAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs']};};
exports.JSDateAbs=JSDateAbs;
function $init$JSDateAbs(){
    if (JSDateAbs.$$===undefined){
        $$$cl1.initTypeProto(JSDateAbs,'com.openswimsoftware.ceylon.js.language::JSDateAbs',$init$JSObjectAbs());
        (function($$jSDateAbs){
            $$jSDateAbs.getDate=function getDate(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getDate());
                /*End dynamic block*/
            };$$jSDateAbs.getDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the day of the month",28)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getDate']};};
            $$jSDateAbs.getDay=function getDay(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getDay());
                /*End dynamic block*/
            };$$jSDateAbs.getDay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the day of the week",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getDay']};};
            $$jSDateAbs.getFullYear=function getFullYear(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getFullYear());
                /*End dynamic block*/
            };$$jSDateAbs.getFullYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the year",16)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getFullYear']};};
            $$jSDateAbs.getHours=function getHours(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getHours());
                /*End dynamic block*/
            };$$jSDateAbs.getHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the hour",16)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getHours']};};
            $$jSDateAbs.getMilliseconds=function getMilliseconds(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getMilliseconds());
                /*End dynamic block*/
            };$$jSDateAbs.getMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the milliseconds",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getMilliseconds']};};
            $$jSDateAbs.getMinutes=function getMinutes(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getMinutes());
                /*End dynamic block*/
            };$$jSDateAbs.getMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the minutes",19)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getMinutes']};};
            $$jSDateAbs.getMonth=function getMonth(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getMonth());
                /*End dynamic block*/
            };$$jSDateAbs.getMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the month",17)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getMonth']};};
            $$jSDateAbs.getSeconds=function getSeconds(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getSeconds());
                /*End dynamic block*/
            };$$jSDateAbs.getSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the seconds",19)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getSeconds']};};
            $$jSDateAbs.getTime=function getTime(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getTime());
                /*End dynamic block*/
            };$$jSDateAbs.getTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns unix timestamp",22)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getTime']};};
            $$jSDateAbs.getTimezoneOffset=function getTimezoneOffset(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getTimezoneOffset());
                /*End dynamic block*/
            };$$jSDateAbs.getTimezoneOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the timezone offset",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getTimezoneOffset']};};
            $$jSDateAbs.getUTCDate=function getUTCDate(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getUTCDate());
                /*End dynamic block*/
            };$$jSDateAbs.getUTCDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the day of the month in UTC",35)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getUTCDate']};};
            $$jSDateAbs.getUTCDay=function getUTCDay(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getUTCDay());
                /*End dynamic block*/
            };$$jSDateAbs.getUTCDay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the day of the week in UTC",34)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getUTCDay']};};
            $$jSDateAbs.getUTCFullYear=function getUTCFullYear(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getUTCFullYear());
                /*End dynamic block*/
            };$$jSDateAbs.getUTCFullYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the year in UTC",23)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getUTCFullYear']};};
            $$jSDateAbs.getUTCHours=function getUTCHours(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getUTCHours());
                /*End dynamic block*/
            };$$jSDateAbs.getUTCHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the hour in UTC",23)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getUTCHours']};};
            $$jSDateAbs.getUTCMilliseconds=function getUTCMilliseconds(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getUTCMilliseconds());
                /*End dynamic block*/
            };$$jSDateAbs.getUTCMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the milliseconds in UTC",31)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getUTCMilliseconds']};};
            $$jSDateAbs.getUTCMinutes=function getUTCMinutes(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getUTCMinutes());
                /*End dynamic block*/
            };$$jSDateAbs.getUTCMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the minutes in UTC",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getUTCMinutes']};};
            $$jSDateAbs.getUTCMonth=function getUTCMonth(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getUTCMonth());
                /*End dynamic block*/
            };$$jSDateAbs.getUTCMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the month in UTC",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getUTCMonth']};};
            $$jSDateAbs.getUTCSeconds=function getUTCSeconds(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSDateAbs.$native.getUTCSeconds());
                /*End dynamic block*/
            };$$jSDateAbs.getUTCSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the seconds in UTC",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getUTCSeconds']};};
            $$jSDateAbs.setDate=function setDate(day$110){
                var $$jSDateAbs=this;
                
                var case$111=day$110;
                if ($$$cl1.isOfType(day$110,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setDate(case$111);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(day$110,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setDate(case$111.$native);
                    /*End dynamic block*/
                }
            };$$jSDateAbs.setDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'day',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the day of the month",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setDate']};};
            $$jSDateAbs.setFullYear=function setFullYear(year$112){
                var $$jSDateAbs=this;
                
                var case$113=year$112;
                if ($$$cl1.isOfType(year$112,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setFullYear(case$113);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(year$112,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setFullYear(case$113.$native);
                    /*End dynamic block*/
                }
            };$$jSDateAbs.setFullYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'year',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the year",12)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setFullYear']};};
            $$jSDateAbs.setHours=function setHours(hour$114){
                var $$jSDateAbs=this;
                
                var case$115=hour$114;
                if ($$$cl1.isOfType(hour$114,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setHours(case$115);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(hour$114,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setHours(case$115.$native);
                    /*End dynamic block*/
                }
            };$$jSDateAbs.setHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'hour',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the hour",12)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setHours']};};
            $$jSDateAbs.setMilliseconds=function setMilliseconds(milli$116){
                var $$jSDateAbs=this;
                
                var case$117=milli$116;
                if ($$$cl1.isOfType(milli$116,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setMilliseconds(case$117);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$116,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setMilliseconds(case$117.$native);
                    /*End dynamic block*/
                }
            };$$jSDateAbs.setMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'milli',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the milliseconds",20)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setMilliseconds']};};
            $$jSDateAbs.setMinutes=function setMinutes(minutes$118){
                var $$jSDateAbs=this;
                
                var case$119=minutes$118;
                if ($$$cl1.isOfType(minutes$118,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setMinutes(case$119);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(minutes$118,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setMinutes(case$119.$native);
                    /*End dynamic block*/
                }
            };$$jSDateAbs.setMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the minutes",15)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setMinutes']};};
            $$jSDateAbs.setMonth=function setMonth(month$120){
                var $$jSDateAbs=this;
                
                var case$121=month$120;
                if ($$$cl1.isOfType(month$120,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setMonth(case$121);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(month$120,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setMonth(case$121.$native);
                    /*End dynamic block*/
                }
            };$$jSDateAbs.setMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'month',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the month",13)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setMonth']};};
            $$jSDateAbs.setSeconds=function setSeconds(seconds$122){
                var $$jSDateAbs=this;
                
                var case$123=seconds$122;
                if ($$$cl1.isOfType(seconds$122,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setSeconds(case$123);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(seconds$122,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setSeconds(case$123.$native);
                    /*End dynamic block*/
                }
            };$$jSDateAbs.setSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the seconds",15)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setSeconds']};};
            $$jSDateAbs.setTime=function setTime(milli$124){
                var $$jSDateAbs=this;
                
                var case$125=milli$124;
                if ($$$cl1.isOfType(milli$124,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setTime(case$125);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$124,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setTime(case$125.$native);
                    /*End dynamic block*/
                }
            };$$jSDateAbs.setTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'milli',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the time as unix timestamp",30)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setTime']};};
            $$jSDateAbs.setUTCDate=function setUTCDate(day$126){
                var $$jSDateAbs=this;
                
                var case$127=day$126;
                if ($$$cl1.isOfType(day$126,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCDate(case$127);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(day$126,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCDate(case$127.$native);
                    /*End dynamic block*/
                }
            };$$jSDateAbs.setUTCDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'day',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the day of the month UTC",28)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setUTCDate']};};
            $$jSDateAbs.setUTCFullYear=function setUTCFullYear(year$128){
                var $$jSDateAbs=this;
                
                var case$129=year$128;
                if ($$$cl1.isOfType(year$128,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCFullYear(case$129);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(year$128,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCFullYear(case$129.$native);
                    /*End dynamic block*/
                }
            };$$jSDateAbs.setUTCFullYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'year',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the year UTC",16)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setUTCFullYear']};};
            $$jSDateAbs.setUTCHours=function setUTCHours(hours$130){
                var $$jSDateAbs=this;
                
                var case$131=hours$130;
                if ($$$cl1.isOfType(hours$130,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCHours(case$131);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(hours$130,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCHours(case$131.$native);
                    /*End dynamic block*/
                }
            };$$jSDateAbs.setUTCHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'hours',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the hours UTC",17)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setUTCHours']};};
            $$jSDateAbs.setUTCMilliseconds=function setUTCMilliseconds(milli$132){
                var $$jSDateAbs=this;
                
                var case$133=milli$132;
                if ($$$cl1.isOfType(milli$132,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCMilliseconds(case$133);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(milli$132,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCMilliseconds(case$133.$native);
                    /*End dynamic block*/
                }
            };$$jSDateAbs.setUTCMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'milli',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the milliseconds UTC",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setUTCMilliseconds']};};
            $$jSDateAbs.setUTCMinutes=function setUTCMinutes(minutes$134){
                var $$jSDateAbs=this;
                
                var case$135=minutes$134;
                if ($$$cl1.isOfType(minutes$134,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCMinutes(case$135);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(minutes$134,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCMinutes(case$135.$native);
                    /*End dynamic block*/
                }
            };$$jSDateAbs.setUTCMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the minutes UTC",19)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setUTCMinutes']};};
            $$jSDateAbs.setUTCMonth=function setUTCMonth(month$136){
                var $$jSDateAbs=this;
                
                var case$137=month$136;
                if ($$$cl1.isOfType(month$136,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCMonth(case$137);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(month$136,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCMonth(case$137.$native);
                    /*End dynamic block*/
                }
            };$$jSDateAbs.setUTCMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'month',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the month UTC",17)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setUTCMonth']};};
            $$jSDateAbs.setUTCSeconds=function setUTCSeconds(seconds$138){
                var $$jSDateAbs=this;
                
                var case$139=seconds$138;
                if ($$$cl1.isOfType(seconds$138,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCSeconds(case$139);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(seconds$138,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$jSDateAbs.$native.setUTCSeconds(case$139.$native);
                    /*End dynamic block*/
                }
            };$$jSDateAbs.setUTCSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the seconds UTC",19)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setUTCSeconds']};};
            $$jSDateAbs.toDateString=function toDateString(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSDateAbs.$native.toDateString());
                /*End dynamic block*/
            };$$jSDateAbs.toDateString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the date as a string",28)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','toDateString']};};
            $$jSDateAbs.toISOString=function toISOString(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSDateAbs.$native.toISOString());
                /*End dynamic block*/
            };$$jSDateAbs.toISOString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the date as a ISO string",32)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','toISOString']};};
            $$jSDateAbs.toJSON=function toJSON(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSDateAbs.$native.toJSON());
                /*End dynamic block*/
            };$$jSDateAbs.toJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the date as a JSON string",33)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','toJSON']};};
            $$jSDateAbs.toLocaleDateString=function toLocaleDateString(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSDateAbs.$native.toLocaleDateString());
                /*End dynamic block*/
            };$$jSDateAbs.toLocaleDateString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the date as a language sensitive string",47)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','toLocaleDateString']};};
            $$jSDateAbs.toLocaleString=function toLocaleString(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSDateAbs.$native.toLocaleString());
                /*End dynamic block*/
            };$$jSDateAbs.toLocaleString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the date as a language sensitive string",47)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','toLocaleString']};};
            $$jSDateAbs.toLocaleTimeString=function toLocaleTimeString(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSDateAbs.$native.toLocaleTimeString());
                /*End dynamic block*/
            };$$jSDateAbs.toLocaleTimeString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the time as a language sensitive string",47)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','toLocaleTimeString']};};
            $$jSDateAbs.toTimeString=function toTimeString(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSDateAbs.$native.toTimeString());
                /*End dynamic block*/
            };$$jSDateAbs.toTimeString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the time a string",25)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','toTimeString']};};
            $$jSDateAbs.toUTCString=function toUTCString(){
                var $$jSDateAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSDateAbs.$native.toUTCString());
                /*End dynamic block*/
            };$$jSDateAbs.toUTCString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the time a UTC string",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','toUTCString']};};
        })(JSDateAbs.$$.prototype);
    }
    return JSDateAbs;
}
exports.$init$JSDateAbs=$init$JSDateAbs;
$init$JSDateAbs();
function JSDate(n$140, $$jSDate){
    $init$JSDate();
    if ($$jSDate===undefined)$$jSDate=new JSDate.$$;
    $$jSDate.n$140_=n$140;
    JSDateAbs($$jSDate);
    $$jSDate.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSDate,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.language','JSDate','$at','native']};}};
    /*Begin dynamic block*/
    $$jSDate.$native=$$jSDate.n$140;/*End dynamic block*/
    return $$jSDate;
}
JSDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSDateAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("native Date",11)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDate']};};
exports.JSDate=JSDate;
function $init$JSDate(){
    if (JSDate.$$===undefined){
        $$$cl1.initTypeProto(JSDate,'com.openswimsoftware.ceylon.js.language::JSDate',$init$JSDateAbs());
        (function($$jSDate){
            $$$cl1.defineAttr($$jSDate,'n$140',function(){return this.n$140_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSDate,d:['com.openswimsoftware.ceylon.js.language','JSDate','$at','n']};});
        })(JSDate.$$.prototype);
    }
    return JSDate;
}
exports.$init$JSDate=$init$JSDate;
$init$JSDate();
function JSFunctionAbs($$jSFunctionAbs){
    $init$JSFunctionAbs();
    if ($$jSFunctionAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$jSFunctionAbs);
    return $$jSFunctionAbs;
}
JSFunctionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','JSFunctionAbs']};};
exports.JSFunctionAbs=JSFunctionAbs;
function $init$JSFunctionAbs(){
    if (JSFunctionAbs.$$===undefined){
        $$$cl1.initTypeProto(JSFunctionAbs,'com.openswimsoftware.ceylon.js.language::JSFunctionAbs',$init$JSObjectAbs());
        (function($$jSFunctionAbs){
            $$jSFunctionAbs.length=function length(){
                var $$jSFunctionAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSFunctionAbs.$native.length);
                /*End dynamic block*/
            };$$jSFunctionAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSFunctionAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns number of arguments exepcted buy the function",53)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSFunctionAbs','$m','length']};};
            $$jSFunctionAbs.$bind=function $bind(thisArg$141,args$142){
                var $$jSFunctionAbs=this;
                if(args$142===undefined){args$142=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JSFunction($$jSFunctionAbs.$native.bind.apply(null,createJSArray(thisArg$141.$native).concat((function(){
                    var lst$143=[];
                    var it$144=args$142.iterator();
                    var elem$145;
                    while ((elem$145=it$144.next())!==$$$cl1.getFinished()){
                        lst$143.push(elem$145.$native);
                    }
                    return $$$cl1.ArraySequence(lst$143);
                }())).native));
                /*End dynamic block*/
            };$$jSFunctionAbs.$bind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSFunction},$ps:[{$nm:'thisArg',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:JSObject}}},$an:function(){return[];}}],$cont:JSFunctionAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a new function with thisArg as the this element and a set of args to prepend when the target function is called",119)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSFunctionAbs','$m','bind']};};
            $$jSFunctionAbs.isGenerator=function isGenerator(){
                var $$jSFunctionAbs=this;
                /*Begin dynamic block*/
                if($$jSFunctionAbs.$native.isGenerator()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jSFunctionAbs.isGenerator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JSFunctionAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("is the function a generator",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSFunctionAbs','$m','isGenerator']};};
        })(JSFunctionAbs.$$.prototype);
    }
    return JSFunctionAbs;
}
exports.$init$JSFunctionAbs=$init$JSFunctionAbs;
$init$JSFunctionAbs();
function JSFunction(n$146, $$jSFunction){
    $init$JSFunction();
    if ($$jSFunction===undefined)$$jSFunction=new JSFunction.$$;
    $$jSFunction.n$146_=n$146;
    JSFunctionAbs($$jSFunction);
    $$jSFunction.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSFunction,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.language','JSFunction','$at','native']};}};
    /*Begin dynamic block*/
    $$jSFunction.$native=$$jSFunction.n$146;/*End dynamic block*/
    return $$jSFunction;
}
JSFunction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSFunctionAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("native Function",15)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSFunction']};};
exports.JSFunction=JSFunction;
function $init$JSFunction(){
    if (JSFunction.$$===undefined){
        $$$cl1.initTypeProto(JSFunction,'com.openswimsoftware.ceylon.js.language::JSFunction',$init$JSFunctionAbs());
        (function($$jSFunction){
            $$$cl1.defineAttr($$jSFunction,'n$146',function(){return this.n$146_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSFunction,d:['com.openswimsoftware.ceylon.js.language','JSFunction','$at','n']};});
        })(JSFunction.$$.prototype);
    }
    return JSFunction;
}
exports.$init$JSFunction=$init$JSFunction;
$init$JSFunction();
function eval(js$147){
    /*Begin dynamic block*/
    return (tmpvar$148=eval(js$147),$$$cl1.isOfType(tmpvar$148,{t:$$$cl1.Anything})?tmpvar$148:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'3:9-3:16','main.ceylon'));
    /*End dynamic block*/
}
exports.eval=eval;
eval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'js',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','eval']};};
function isFinite(num$149){
    /*Begin dynamic block*/
    if(isFinite((tmpvar$150=num$149.$native,$$$cl1.isOfType(tmpvar$150,{t:JSNumber})?tmpvar$150:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'9:15-9:24','main.ceylon')))){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.isFinite=isFinite;
isFinite.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'num',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','isFinite']};};
function isNaN(val$151){
    /*Begin dynamic block*/
    if(isNaN(val$151)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.isNaN=isNaN;
isNaN.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','isNaN']};};
function parseInt(int$152,radix$153){
    if(radix$153===undefined){radix$153=(10);}
    
    var case$154=radix$153;
    if ($$$cl1.isOfType(radix$153,{t:$$$cl1.Integer})) {
        /*Begin dynamic block*/
        return JSNumber(parseInt(int$152,case$154));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(radix$153,{t:JSNumber})) {
        /*Begin dynamic block*/
        return JSNumber(parseInt(int$152,(tmpvar$155=case$154.$native,$$$cl1.isOfType(tmpvar$155,{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]})?tmpvar$155:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'36:33-36:44','main.ceylon'))));
        /*End dynamic block*/
    }
}
exports.parseInt=parseInt;
parseInt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'int',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}},{$nm:'radix',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','parseInt']};};
function parseFloat(float$156){
    
    var case$157=float$156;
    if ($$$cl1.isOfType(float$156,{t:$$$cl1.String})) {
        /*Begin dynamic block*/
        return JSNumber(parseFloat(case$157));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(float$156,{t:JSString})) {
        /*Begin dynamic block*/
        return JSNumber(parseFloat((tmpvar$158=case$157.$native,$$$cl1.isOfType(tmpvar$158,{t:'u', l:[{t:$$$cl1.String},{t:JSString}]})?tmpvar$158:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'50:30-50:41','main.ceylon'))));
        /*End dynamic block*/
    }
}
exports.parseFloat=parseFloat;
parseFloat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'float',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','parseFloat']};};
function mathE(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'6:18-6:21','math.ceylon'):Math).E);
    /*End dynamic block*/
}
exports.mathE=mathE;
mathE.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("returns natural log",19)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','mathE']};};
function mathLog2(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'13:18-13:21','math.ceylon'):Math).LN2);
    /*End dynamic block*/
}
exports.mathLog2=mathLog2;
mathLog2.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("returns log of 2",16)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','mathLog2']};};
function mathLog10(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'20:18-20:21','math.ceylon'):Math).LN10);
    /*End dynamic block*/
}
exports.mathLog10=mathLog10;
mathLog10.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("returns log of 10",17)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','mathLog10']};};
function mathLog2e(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'27:18-27:21','math.ceylon'):Math).LOG2E);
    /*End dynamic block*/
}
exports.mathLog2e=mathLog2e;
mathLog2e.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("returns natural log of 2",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','mathLog2e']};};
function mathLog10e(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'34:18-34:21','math.ceylon'):Math).LOG10E);
    /*End dynamic block*/
}
exports.mathLog10e=mathLog10e;
mathLog10e.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("returns natural log of 10",25)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','mathLog10e']};};
function mathPi(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'41:18-41:21','math.ceylon'):Math).PI);
    /*End dynamic block*/
}
exports.mathPi=mathPi;
mathPi.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("returns pi",10)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','mathPi']};};
function mathRoot1_2(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'48:18-48:21','math.ceylon'):Math).SQRT1_2);
    /*End dynamic block*/
}
exports.mathRoot1_2=mathRoot1_2;
mathRoot1_2.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("returns square root of 1/2",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','mathRoot1_2']};};
function mathRoot2(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'55:18-55:21','math.ceylon'):Math).SQRT2);
    /*End dynamic block*/
}
exports.mathRoot2=mathRoot2;
mathRoot2.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("returns square root of 2",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','mathRoot2']};};
function MathAbs($$mathAbs){
    $init$MathAbs();
    if ($$mathAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$mathAbs);
    return $$mathAbs;
}
MathAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs']};};
exports.MathAbs=MathAbs;
function $init$MathAbs(){
    if (MathAbs.$$===undefined){
        $$$cl1.initTypeProto(MathAbs,'com.openswimsoftware.ceylon.js.language::MathAbs',$init$JSObjectAbs());
        (function($$mathAbs){
            $$mathAbs.abs=function abs(x$159){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'64:19-64:22','math.ceylon'):Math).abs(x$159.$native));
                /*End dynamic block*/
            };$$mathAbs.abs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the absolute value of a number",38)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','abs']};};
            $$mathAbs.acos=function acos(x$160){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'71:19-71:22','math.ceylon'):Math).acos(x$160.$native));
                /*End dynamic block*/
            };$$mathAbs.acos.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the arccosine value of a number",39)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','acos']};};
            $$mathAbs.asin=function asin(x$161){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'78:19-78:22','math.ceylon'):Math).asin(x$161.$native));
                /*End dynamic block*/
            };$$mathAbs.asin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the arcsine value of a number",37)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','asin']};};
            $$mathAbs.atan=function atan(x$162){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'85:19-85:22','math.ceylon'):Math).asin(x$162.$native));
                /*End dynamic block*/
            };$$mathAbs.atan.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the arctangent value of a number",40)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','atan']};};
            $$mathAbs.atan2=function atan2(y$163,x$164){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'92:19-92:22','math.ceylon'):Math).atan2(y$163.$native,x$164.$native));
                /*End dynamic block*/
            };$$mathAbs.atan2.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'y',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the arctangent of the quotient of y/x",45)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','atan2']};};
            $$mathAbs.ceil=function ceil(x$165){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'99:19-99:22','math.ceylon'):Math).ceil(x$165.$native));
                /*End dynamic block*/
            };$$mathAbs.ceil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns ceiling of the passed number",36)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','ceil']};};
            $$mathAbs.cos=function cos(x$166){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'106:19-106:22','math.ceylon'):Math).cos(x$166.$native));
                /*End dynamic block*/
            };$$mathAbs.cos.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the cosine of a number",30)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','cos']};};
            $$mathAbs.exp=function exp(x$167){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'113:19-113:22','math.ceylon'):Math).exp(x$167.$native));
                /*End dynamic block*/
            };$$mathAbs.exp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the E^x",15)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','exp']};};
            $$mathAbs.floor=function floor(x$168){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'120:19-120:22','math.ceylon'):Math).floor(x$168.$native));
                /*End dynamic block*/
            };$$mathAbs.floor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns floor of the passed number",34)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','floor']};};
            $$mathAbs.log=function log(x$169){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'127:19-127:22','math.ceylon'):Math).log(x$169.$native));
                /*End dynamic block*/
            };$$mathAbs.log.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns log of the number",25)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','log']};};
            $$mathAbs.max=function max(numbers$170){
                var $$mathAbs=this;
                if(numbers$170===undefined){numbers$170=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JSNumber(JSFunction((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'135:30-135:33','math.ceylon'):Math).max).$apply(null,(function(){
                    var lst$171=[];
                    var it$172=numbers$170.iterator();
                    var elem$173;
                    while ((elem$173=it$172.next())!==$$$cl1.getFinished()){
                        lst$171.push(elem$173.$native);
                    }
                    return $$$cl1.ArraySequence(lst$171);
                }())));
                /*End dynamic block*/
            };$$mathAbs.max.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'numbers',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:JSNumber}}},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the max of the passed numbers",37)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','max']};};
            $$mathAbs.min=function min(numbers$174){
                var $$mathAbs=this;
                if(numbers$174===undefined){numbers$174=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JSNumber(JSFunction((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'143:30-143:33','math.ceylon'):Math).min).$apply(null,(function(){
                    var lst$175=[];
                    var it$176=numbers$174.iterator();
                    var elem$177;
                    while ((elem$177=it$176.next())!==$$$cl1.getFinished()){
                        lst$175.push(elem$177.$native);
                    }
                    return $$$cl1.ArraySequence(lst$175);
                }())));
                /*End dynamic block*/
            };$$mathAbs.min.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'numbers',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:JSNumber}}},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the min of the passed numbers",37)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','min']};};
            $$mathAbs.pow=function pow(base$178,exponent$179){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'150:19-150:22','math.ceylon'):Math).pow(base$178,exponent$179));
                /*End dynamic block*/
            };$$mathAbs.pow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'base',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'exponent',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the base^exponent",25)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','pow']};};
            $$mathAbs.random=function random(){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'157:19-157:22','math.ceylon'):Math).random());
                /*End dynamic block*/
            };$$mathAbs.random.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a pseudo-random number between 0 and 1",46)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','random']};};
            $$mathAbs.round=function round(x$180){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'164:19-164:22','math.ceylon'):Math).round(x$180));
                /*End dynamic block*/
            };$$mathAbs.round.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a number rounded to the nearest integer",47)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','round']};};
            $$mathAbs.sin=function sin(x$181){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'171:19-171:22','math.ceylon'):Math).sin(x$181));
                /*End dynamic block*/
            };$$mathAbs.sin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the sine of a number",28)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','sin']};};
            $$mathAbs.sqrt=function sqrt(x$182){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'178:19-178:22','math.ceylon'):Math).sqrt(x$182));
                /*End dynamic block*/
            };$$mathAbs.sqrt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the square root of a number",35)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','sqrt']};};
            $$mathAbs.tan=function tan(x$183){
                var $$mathAbs=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Math")),'185:19-185:22','math.ceylon'):Math).tan(x$183));
                /*End dynamic block*/
            };$$mathAbs.tan.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the tangent a number",28)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','tan']};};
        })(MathAbs.$$.prototype);
    }
    return MathAbs;
}
exports.$init$MathAbs=$init$MathAbs;
$init$MathAbs();
function Math(n$184, $$math){
    $init$Math();
    if ($$math===undefined)$$math=new Math.$$;
    $$math.n$184_=n$184;
    MathAbs($$math);
    $$math.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Math,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.language','Math','$at','native']};}};
    /*Begin dynamic block*/
    $$math.$native=$$math.n$184;/*End dynamic block*/
    return $$math;
}
Math.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:MathAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("native Math",11)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','Math']};};
exports.Math=Math;
function $init$Math(){
    if (Math.$$===undefined){
        $$$cl1.initTypeProto(Math,'com.openswimsoftware.ceylon.js.language::Math',$init$MathAbs());
        (function($$math){
            $$$cl1.defineAttr($$math,'n$184',function(){return this.n$184_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Math,d:['com.openswimsoftware.ceylon.js.language','Math','$at','n']};});
        })(Math.$$.prototype);
    }
    return Math;
}
exports.$init$Math=$init$Math;
$init$Math();
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("JavaScript 1.8.5",16))];};
function createJSNumber(val$185){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Number")),'4:18-4:23','number.ceylon'):Number)(val$185));
    /*End dynamic block*/
}
exports.createJSNumber=createJSNumber;
createJSNumber.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("creates a new native number",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSNumber']};};
function numberMaxValue(){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Number")),'11:18-11:23','number.ceylon'):Number).MAX_VALUE);
    /*End dynamic block*/
}
exports.numberMaxValue=numberMaxValue;
numberMaxValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("returns the max possible number",31)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','numberMaxValue']};};
function numberMinValue(){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Number")),'18:18-18:23','number.ceylon'):Number).MIN_VALUE);
    /*End dynamic block*/
}
exports.numberMinValue=numberMinValue;
numberMinValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("returns the min possible number",31)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','numberMinValue']};};
function numberNegativeInfinity(){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Number")),'25:18-25:23','number.ceylon'):Number).NEGATIVE_INFINITY);
    /*End dynamic block*/
}
exports.numberNegativeInfinity=numberNegativeInfinity;
numberNegativeInfinity.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("returns negative infinity",25)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','numberNegativeInfinity']};};
function numberPositiveInfinity(){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Number")),'32:18-32:23','number.ceylon'):Number).POSITIVE_INFINITY);
    /*End dynamic block*/
}
exports.numberPositiveInfinity=numberPositiveInfinity;
numberPositiveInfinity.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("returns positive infinity",25)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','numberPositiveInfinity']};};
function JSNumberAbs($$jSNumberAbs){
    $init$JSNumberAbs();
    if ($$jSNumberAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$jSNumberAbs);
    return $$jSNumberAbs;
}
JSNumberAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','JSNumberAbs']};};
exports.JSNumberAbs=JSNumberAbs;
function $init$JSNumberAbs(){
    if (JSNumberAbs.$$===undefined){
        $$$cl1.initTypeProto(JSNumberAbs,'com.openswimsoftware.ceylon.js.language::JSNumberAbs',$init$JSObjectAbs());
        (function($$jSNumberAbs){
            $$jSNumberAbs.toExponential$defs$fractionDigits=function(fractionDigits$186){var $$jSNumberAbs=this;
            return null;};
            $$jSNumberAbs.toExponential=function toExponential(fractionDigits$186){
                var $$jSNumberAbs=this;
                if(fractionDigits$186===undefined){fractionDigits$186=$$jSNumberAbs.toExponential$defs$fractionDigits(fractionDigits$186);}
                
                var case$187=fractionDigits$186;
                if ($$$cl1.isOfType(fractionDigits$186,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    return JSString($$jSNumberAbs.$native.toExponential(case$187));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(fractionDigits$186,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSString($$jSNumberAbs.$native.toExponential(case$187.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(fractionDigits$186,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSString($$jSNumberAbs.$native.toExponential());
                    /*End dynamic block*/
                }
            };$$jSNumberAbs.toExponential.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'fractionDigits',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Integer},{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSNumberAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a string representing the number in exponential notation",64)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSNumberAbs','$m','toExponential']};};
            $$jSNumberAbs.toFixed$defs$digits=function(digits$188){var $$jSNumberAbs=this;
            return (0);};
            $$jSNumberAbs.toFixed=function toFixed(digits$188){
                var $$jSNumberAbs=this;
                if(digits$188===undefined){digits$188=$$jSNumberAbs.toFixed$defs$digits(digits$188);}
                
                var case$189=digits$188;
                if ($$$cl1.isOfType(digits$188,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    return JSString($$jSNumberAbs.$native.toFixed(case$189));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(digits$188,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSString($$jSNumberAbs.$native.toFixed(case$189.$native));
                    /*End dynamic block*/
                }
            };$$jSNumberAbs.toFixed.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'digits',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSNumberAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a string representing the number in fixed-point notation",64)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSNumberAbs','$m','toFixed']};};
            $$jSNumberAbs.toPrecision$defs$precision=function(precision$190){var $$jSNumberAbs=this;
            return null;};
            $$jSNumberAbs.toPrecision=function toPrecision(precision$190){
                var $$jSNumberAbs=this;
                if(precision$190===undefined){precision$190=$$jSNumberAbs.toPrecision$defs$precision(precision$190);}
                
                var case$191=precision$190;
                if ($$$cl1.isOfType(precision$190,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    return JSString($$jSNumberAbs.$native.toPrecision(case$191));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(precision$190,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSString($$jSNumberAbs.$native.toPrecision(case$191.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(precision$190,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSString($$jSNumberAbs.$native.toPrecision());
                    /*End dynamic block*/
                }
            };$$jSNumberAbs.toPrecision.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'precision',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Integer},{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSNumberAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a string representing the number in a specified precision in fixed-point or exponential notation",104)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSNumberAbs','$m','toPrecision']};};
        })(JSNumberAbs.$$.prototype);
    }
    return JSNumberAbs;
}
exports.$init$JSNumberAbs=$init$JSNumberAbs;
$init$JSNumberAbs();
function JSNumber(n$192, $$jSNumber){
    $init$JSNumber();
    if ($$jSNumber===undefined)$$jSNumber=new JSNumber.$$;
    $$jSNumber.n$192_=n$192;
    JSNumberAbs($$jSNumber);
    $$jSNumber.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSNumber,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.language','JSNumber','$at','native']};}};
    /*Begin dynamic block*/
    $$jSNumber.$native=$$jSNumber.n$192;/*End dynamic block*/
    return $$jSNumber;
}
JSNumber.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSNumberAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("native Number",13)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSNumber']};};
exports.JSNumber=JSNumber;
function $init$JSNumber(){
    if (JSNumber.$$===undefined){
        $$$cl1.initTypeProto(JSNumber,'com.openswimsoftware.ceylon.js.language::JSNumber',$init$JSNumberAbs());
        (function($$jSNumber){
            $$$cl1.defineAttr($$jSNumber,'n$192',function(){return this.n$192_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSNumber,d:['com.openswimsoftware.ceylon.js.language','JSNumber','$at','n']};});
        })(JSNumber.$$.prototype);
    }
    return JSNumber;
}
exports.$init$JSNumber=$init$JSNumber;
$init$JSNumber();
function PropertyDescriptor($$propertyDescriptor){
    $init$PropertyDescriptor();
    if ($$propertyDescriptor===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    return $$propertyDescriptor;
}
PropertyDescriptor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("describes a new object property",31)),$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','PropertyDescriptor']};};
exports.PropertyDescriptor=PropertyDescriptor;
function $init$PropertyDescriptor(){
    if (PropertyDescriptor.$$===undefined){
        $$$cl1.initTypeProto(PropertyDescriptor,'com.openswimsoftware.ceylon.js.language::PropertyDescriptor',$$$cl1.Basic);
        (function($$propertyDescriptor){
            $$propertyDescriptor.$prop$getConfigurable={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:PropertyDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.formal()];},d:['com.openswimsoftware.ceylon.js.language','PropertyDescriptor','$at','configurable']};}};
            $$propertyDescriptor.$prop$getDescriptor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:PropertyDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.formal()];},d:['com.openswimsoftware.ceylon.js.language','PropertyDescriptor','$at','descriptor']};}};
            $$propertyDescriptor.$prop$getEnumerable={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:PropertyDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.formal()];},d:['com.openswimsoftware.ceylon.js.language','PropertyDescriptor','$at','enumerable']};}};
            $$propertyDescriptor.toNative={$fml:1,$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[],$cont:PropertyDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.formal()];},d:['com.openswimsoftware.ceylon.js.language','PropertyDescriptor','$m','toNative']};}};
        })(PropertyDescriptor.$$.prototype);
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
    return $$dataDescriptor;
}
DataDescriptor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:PropertyDescriptor},$ps:[{$nm:'configurable',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];}},{$nm:'descriptor',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];}},{$nm:'enumerable',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];}},{$nm:'writable',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.shared()];}},{$nm:'val',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[$$$cl1.shared()];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("describes a new object data property",36)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','DataDescriptor']};};
exports.DataDescriptor=DataDescriptor;
function $init$DataDescriptor(){
    if (DataDescriptor.$$===undefined){
        $$$cl1.initTypeProto(DataDescriptor,'com.openswimsoftware.ceylon.js.language::DataDescriptor',$init$PropertyDescriptor());
        (function($$dataDescriptor){
            $$dataDescriptor.toNative=function toNative(){
                var $$dataDescriptor=this;
                var obj$193=createJSObject();
                /*Begin dynamic block*/
                obj$193.$native.configurable=$$dataDescriptor.configurable;
                obj$193.$native.descriptor=$$dataDescriptor.descriptor;
                obj$193.$native.enumerable=$$dataDescriptor.enumerable;
                obj$193.$native.writable=$$dataDescriptor.writable;
                obj$193.$native.value=$$dataDescriptor.val;
                /*End dynamic block*/
                return obj$193;
            };$$dataDescriptor.toNative.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[],$cont:DataDescriptor,$an:function(){return[$$$cl1.doc($$$cl1.String("converts the options to native JSON",35)),$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.language','DataDescriptor','$m','toNative']};};
            $$$cl1.defineAttr($$dataDescriptor,'configurable',function(){return this.configurable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:DataDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.language','DataDescriptor','$at','configurable']};});
            $$$cl1.defineAttr($$dataDescriptor,'descriptor',function(){return this.descriptor_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:DataDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.language','DataDescriptor','$at','descriptor']};});
            $$$cl1.defineAttr($$dataDescriptor,'enumerable',function(){return this.enumerable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:DataDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.language','DataDescriptor','$at','enumerable']};});
            $$$cl1.defineAttr($$dataDescriptor,'writable',function(){return this.writable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:DataDescriptor,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','DataDescriptor','$at','writable']};});
            $$$cl1.defineAttr($$dataDescriptor,'val',function(){return this.val_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DataDescriptor,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','DataDescriptor','$at','val']};});
        })(DataDescriptor.$$.prototype);
    }
    return DataDescriptor;
}
exports.$init$DataDescriptor=$init$DataDescriptor;
$init$DataDescriptor();
function AccessorDescriptor(configurable, descriptor, enumerable, $get, set, $$accessorDescriptor){
    $init$AccessorDescriptor();
    if ($$accessorDescriptor===undefined)$$accessorDescriptor=new AccessorDescriptor.$$;
    $$accessorDescriptor.configurable_=configurable;
    if(descriptor===undefined){descriptor=false;}
    $$accessorDescriptor.descriptor_=descriptor;
    if(enumerable===undefined){enumerable=false;}
    $$accessorDescriptor.enumerable_=enumerable;
    if($get===undefined){$get=null;}
    $$accessorDescriptor.$get_=$get;
    if(set===undefined){set=null;}
    $$accessorDescriptor.set_=set;
    PropertyDescriptor($$accessorDescriptor);
    return $$accessorDescriptor;
}
AccessorDescriptor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:PropertyDescriptor},$ps:[{$nm:'configurable',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];}},{$nm:'descriptor',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];}},{$nm:'enumerable',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];}},{$nm:'get',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[$$$cl1.shared()];}},{$nm:'set',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[$$$cl1.shared()];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("describes a new object accessor property",40)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','AccessorDescriptor']};};
exports.AccessorDescriptor=AccessorDescriptor;
function $init$AccessorDescriptor(){
    if (AccessorDescriptor.$$===undefined){
        $$$cl1.initTypeProto(AccessorDescriptor,'com.openswimsoftware.ceylon.js.language::AccessorDescriptor',$init$PropertyDescriptor());
        (function($$accessorDescriptor){
            $$accessorDescriptor.toNative=function toNative(){
                var $$accessorDescriptor=this;
                var obj$194=createJSObject();
                /*Begin dynamic block*/
                obj$194.$native.configurable=$$accessorDescriptor.configurable;
                obj$194.$native.descriptor=$$accessorDescriptor.descriptor;
                obj$194.$native.enumerable=$$accessorDescriptor.enumerable;
                var g$195;
                if((g$195=$$accessorDescriptor.$get)!==null){
                    obj$194.$native.get=$$$cl1.$JsCallable(g$195/*TODO: callable targs 6*/);
                }var s$196;
                if((s$196=$$accessorDescriptor.set)!==null){
                    obj$194.$native.set=$$$cl1.$JsCallable(s$196/*TODO: callable targs 6*/);
                }/*End dynamic block*/
                return obj$194;
            };$$accessorDescriptor.toNative.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[],$cont:AccessorDescriptor,$an:function(){return[$$$cl1.doc($$$cl1.String("converts the options to native JSON",35)),$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.language','AccessorDescriptor','$m','toNative']};};
            $$$cl1.defineAttr($$accessorDescriptor,'configurable',function(){return this.configurable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:AccessorDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.language','AccessorDescriptor','$at','configurable']};});
            $$$cl1.defineAttr($$accessorDescriptor,'descriptor',function(){return this.descriptor_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:AccessorDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.language','AccessorDescriptor','$at','descriptor']};});
            $$$cl1.defineAttr($$accessorDescriptor,'enumerable',function(){return this.enumerable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:AccessorDescriptor,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.language','AccessorDescriptor','$at','enumerable']};});
            $$$cl1.defineAttr($$accessorDescriptor,'$get',function(){return this.$get_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$cont:AccessorDescriptor,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','AccessorDescriptor','$at','get']};});
            $$$cl1.defineAttr($$accessorDescriptor,'set',function(){return this.set_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:'T',l:[{$t:{t:$$$cl1.Anything}}]},Return:{t:$$$cl1.Anything}}}]},$cont:AccessorDescriptor,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','AccessorDescriptor','$at','set']};});
        })(AccessorDescriptor.$$.prototype);
    }
    return AccessorDescriptor;
}
exports.$init$AccessorDescriptor=$init$AccessorDescriptor;
$init$AccessorDescriptor();
function objectCreate(proto$197,properties$198){
    var propsNative$199=createJSObject();
    /*Begin dynamic block*/
    var it$200 = properties$198.iterator();
    var item$201;while ((item$201=it$200.next())!==$$$cl1.getFinished()){
        var key$202=item$201.key;
        var val$203=item$201.item;
        objectDefineProperty(propsNative$199,key$202,val$203);
    }return JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'61:18-61:23','object.ceylon'):Object).create(proto$197.$native,propsNative$199));
    /*End dynamic block*/
}
exports.objectCreate=objectCreate;
objectCreate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'proto',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:'u', l:[{t:DataDescriptor},{t:AccessorDescriptor}]}}}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("create a new native object",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectCreate']};};
function objectDefineProperty(obj$204,prop$205,descriptor$206){
    
    var case$207=prop$205;
    if ($$$cl1.isOfType(prop$205,{t:$$$cl1.String})) {
        /*Begin dynamic block*/
        (typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'70:3-70:8','object.ceylon'):Object).defineProperty(obj$204.$native,case$207.valueOf(),descriptor$206.toNative().$native);
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(prop$205,{t:JSString})) {
        /*Begin dynamic block*/
        (typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'75:3-75:8','object.ceylon'):Object).defineProperty(obj$204.$native,case$207.$native,descriptor$206.toNative().$native);
        /*End dynamic block*/
    }
}
exports.objectDefineProperty=objectDefineProperty;
objectDefineProperty.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'prop',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}},{$nm:'descriptor',$mt:'prm',$t:{t:'u', l:[{t:DataDescriptor},{t:AccessorDescriptor}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("define a property on a native object",36)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectDefineProperty']};};
function defineProperties(obj$208,properties$209){
    var propsNative$210=createJSObject();
    /*Begin dynamic block*/
    var it$211 = properties$209.iterator();
    var item$212;while ((item$212=it$211.next())!==$$$cl1.getFinished()){
        var key$213=item$212.key;
        var val$214=item$212.item;
        objectDefineProperty(propsNative$210,key$213,val$214);
    }return JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'87:18-87:23','object.ceylon'):Object).defineProperties(obj$208.$native,propsNative$210));
    /*End dynamic block*/
}
exports.defineProperties=defineProperties;
defineProperties.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:'u', l:[{t:DataDescriptor},{t:AccessorDescriptor}]}}}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("define properties on a native object",36)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','defineProperties']};};
function objectGetOwnPropertyDescriptor(obj$215,prop$216){
    var descriptor$217;
    
    var case$218=prop$216;
    if ($$$cl1.isOfType(prop$216,{t:$$$cl1.String})) {
        /*Begin dynamic block*/
        descriptor$217=JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'97:25-97:30','object.ceylon'):Object).objectGetOwnPropertyDescriptor(obj$215,case$218.valueOf()));/*End dynamic block*/
    }else if ($$$cl1.isOfType(prop$216,{t:JSString})) {
        /*Begin dynamic block*/
        descriptor$217=JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'102:25-102:30','object.ceylon'):Object).objectGetOwnPropertyDescriptor(obj$215,case$218.$native));/*End dynamic block*/
    }
    return descriptor$217;
}
exports.objectGetOwnPropertyDescriptor=objectGetOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'prop',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("get the discriptor of a object property",39)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectGetOwnPropertyDescriptor']};};
function objectKeys(obj$219){
    /*Begin dynamic block*/
    return JSArray((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'111:17-111:22','object.ceylon'):Object).keys(obj$219));
    /*End dynamic block*/
}
exports.objectKeys=objectKeys;
objectKeys.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("returns an array of object enumerable properties",48)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectKeys']};};
function objectGetOwnPropertyNames(obj$220){
    /*Begin dynamic block*/
    return JSArray((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'118:17-118:22','object.ceylon'):Object).getOwnPropertyNames(obj$220.$native));
    /*End dynamic block*/
}
exports.objectGetOwnPropertyNames=objectGetOwnPropertyNames;
objectGetOwnPropertyNames.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("returns an array of object properties",37)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectGetOwnPropertyNames']};};
function objectGetPrototypeOf(obj$221){
    /*Begin dynamic block*/
    return JSFunction((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'125:20-125:25','object.ceylon'):Object).getPrototypeOf(obj$221.$native));
    /*End dynamic block*/
}
exports.objectGetPrototypeOf=objectGetPrototypeOf;
objectGetPrototypeOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSFunction},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("returns the objects prototype",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectGetPrototypeOf']};};
function objectPreventExtensions(obj$222){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'132:18-132:23','object.ceylon'):Object).preventExtensions(obj$222.$native));
    /*End dynamic block*/
}
exports.objectPreventExtensions=objectPreventExtensions;
objectPreventExtensions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("prevents new properties from being added to the object",54)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectPreventExtensions']};};
function objectIsExtensible(obj$223){
    /*Begin dynamic block*/
    if((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'139:6-139:11','object.ceylon'):Object).isExtensible(obj$223.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.objectIsExtensible=objectIsExtensible;
objectIsExtensible.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("can new properties be added to the object",41)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectIsExtensible']};};
function objectSeal(obj$224){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'150:18-150:23','object.ceylon'):Object).seal(obj$224.$native));
    /*End dynamic block*/
}
exports.objectSeal=objectSeal;
objectSeal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("prevents properties from being added to or removed from the object",66)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectSeal']};};
function objectIsSealed(obj$225){
    /*Begin dynamic block*/
    if((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'157:6-157:11','object.ceylon'):Object).isSealed(obj$225.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.objectIsSealed=objectIsSealed;
objectIsSealed.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("can properties be added to or removed from the object",53)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectIsSealed']};};
function objectFreeze(obj$226){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'168:18-168:23','object.ceylon'):Object).freeze(obj$226.$native));
    /*End dynamic block*/
}
exports.objectFreeze=objectFreeze;
objectFreeze.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("stops the object being altered in any way",41)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectFreeze']};};
function objectIsFrozen(obj$227){
    /*Begin dynamic block*/
    if((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'175:6-175:11','object.ceylon'):Object).isFrozen(obj$227.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.objectIsFrozen=objectIsFrozen;
objectIsFrozen.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("can the object being altered in any way",39)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectIsFrozen']};};
function createJSObject(){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'186:18-186:23','object.ceylon'):Object)());
    /*End dynamic block*/
}
exports.createJSObject=createJSObject;
createJSObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("create a new native object",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSObject']};};
function JSObjectAbs($$jSObjectAbs){
    $init$JSObjectAbs();
    if ($$jSObjectAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    return $$jSObjectAbs;
}
JSObjectAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs']};};
exports.JSObjectAbs=JSObjectAbs;
function $init$JSObjectAbs(){
    if (JSObjectAbs.$$===undefined){
        $$$cl1.initTypeProto(JSObjectAbs,'com.openswimsoftware.ceylon.js.language::JSObjectAbs',$$$cl1.Basic);
        (function($$jSObjectAbs){
            $$jSObjectAbs.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSObjectAbs,$an:function(){return[$$$cl1.shared(),$$$cl1.formal()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$at','native']};}};
            $$jSObjectAbs.getPrototype=function getPrototype(){
                var $$jSObjectAbs=this;
                /*Begin dynamic block*/
                return JSObject($$jSObjectAbs.$native.prototype);
                /*End dynamic block*/
            };$$jSObjectAbs.getPrototype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSObject},$ps:[],$cont:JSObjectAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the objects prototype",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','getPrototype']};};
            $$jSObjectAbs.setPrototype=function setPrototype(prototype$228){
                var $$jSObjectAbs=this;
                /*Begin dynamic block*/
                $$jSObjectAbs.$native.prototype=prototype$228.$native;
                /*End dynamic block*/
            };$$jSObjectAbs.setPrototype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'prototype',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the objects prototype",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','setPrototype']};};
            $$jSObjectAbs.getConstructor=function getConstructor(){
                var $$jSObjectAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$229=(tmpvar$230=$$jSObjectAbs.$native.constructor,tmpvar$231=(typeof Function==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type Function")),'210:10-210:17','object.ceylon'):Function),tmpvar$231.$$===undefined?new tmpvar$231(tmpvar$230):tmpvar$231(tmpvar$230)),$$$cl1.isOfType(tmpvar$229,{t:$$$cl1.Anything})?tmpvar$229:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'210:10-210:37','object.ceylon'));
                /*End dynamic block*/
            };$$jSObjectAbs.getConstructor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSFunction},$ps:[],$cont:JSObjectAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the objects contructor",30)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','getConstructor']};};
            $$jSObjectAbs.setConstructor=function setConstructor(constructor$232){
                var $$jSObjectAbs=this;
                /*Begin dynamic block*/
                $$jSObjectAbs.$native.constructor=constructor$232.$native;
                /*End dynamic block*/
            };$$jSObjectAbs.setConstructor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'constructor',$mt:'prm',$t:{t:JSFunction},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the objects contructor",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','setConstructor']};};
            $$jSObjectAbs.hasOwnProperty=function hasOwnProperty(prop$233){
                var $$jSObjectAbs=this;
                var has$234;
                
                var case$235=prop$233;
                if ($$$cl1.isOfType(prop$233,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    has$234=$$jSObjectAbs.$native.hasOwnProperty(case$235.valueOf());/*End dynamic block*/
                }else if ($$$cl1.isOfType(prop$233,{t:JSString})) {
                    /*Begin dynamic block*/
                    has$234=$$jSObjectAbs.$native.hasOwnProperty(case$235.$native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if(has$234){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jSObjectAbs.hasOwnProperty.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'prop',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("does the object have the propery",32)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','hasOwnProperty']};};
            $$jSObjectAbs.isPrototypeOf=function isPrototypeOf(obj$236){
                var $$jSObjectAbs=this;
                /*Begin dynamic block*/
                if($$jSObjectAbs.$native.isPrototypeOf(obj$236.$native)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jSObjectAbs.isPrototypeOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("is the object in the passed objects prototype chain",51)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','isPrototypeOf']};};
            $$jSObjectAbs.propertyIsEnumerable=function propertyIsEnumerable(prop$237){
                var $$jSObjectAbs=this;
                var enum$238;
                
                var case$239=prop$237;
                if ($$$cl1.isOfType(prop$237,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    enum$238=$$jSObjectAbs.$native.propertyIsEnumerable(case$239.valueOf());/*End dynamic block*/
                }else if ($$$cl1.isOfType(prop$237,{t:JSString})) {
                    /*Begin dynamic block*/
                    enum$238=$$jSObjectAbs.$native.propertyIsEnumerable(case$239.$native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if(enum$238){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$jSObjectAbs.propertyIsEnumerable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'prop',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("is the property enumerable by a for in loop",43)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','propertyIsEnumerable']};};
            $$jSObjectAbs.$apply=function $apply(thisArg$240,args$241){
                var $$jSObjectAbs=this;
                /*Begin dynamic block*/
                $$jSObjectAbs.$native.apply((typeof a==='undefined'||a===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: a")),'281:22-281:22','object.ceylon'):a),args$241);
                /*End dynamic block*/
            };$$jSObjectAbs.$apply.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'thisArg',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("calls a function with thisArg as this and an array of args",58)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','apply']};};
            $$jSObjectAbs.$call=function $call(thisArg$242,args$243){
                var $$jSObjectAbs=this;
                /*Begin dynamic block*/
                $$jSObjectAbs.$native.call(thisArg$242,args$243);
                /*End dynamic block*/
            };$$jSObjectAbs.$call.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'thisArg',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("calls a function with thisArg as this and an argument list",58)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','call']};};
            $$jSObjectAbs.toString=function toString(){
                var $$jSObjectAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSObjectAbs.$native.toString());
                /*End dynamic block*/
            };$$jSObjectAbs.toString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSObjectAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("convert the object to a string",30)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','toString']};};
        })(JSObjectAbs.$$.prototype);
    }
    return JSObjectAbs;
}
exports.$init$JSObjectAbs=$init$JSObjectAbs;
$init$JSObjectAbs();
function JSObject(n$244, $$jSObject){
    $init$JSObject();
    if ($$jSObject===undefined)$$jSObject=new JSObject.$$;
    $$jSObject.n$244_=n$244;
    JSObjectAbs($$jSObject);
    /*Begin dynamic block*/
    $$jSObject.$native=$$jSObject.n$244;/*End dynamic block*/
    return $$jSObject;
}
JSObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("native Object",13)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObject']};};
exports.JSObject=JSObject;
function $init$JSObject(){
    if (JSObject.$$===undefined){
        $$$cl1.initTypeProto(JSObject,'com.openswimsoftware.ceylon.js.language::JSObject',$init$JSObjectAbs());
        (function($$jSObject){
            $$$cl1.defineAttr($$jSObject,'n$244',function(){return this.n$244_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSObject,d:['com.openswimsoftware.ceylon.js.language','JSObject','$at','n']};});
        })(JSObject.$$.prototype);
    }
    return JSObject;
}
exports.$init$JSObject=$init$JSObject;
$init$JSObject();
exports.$pkg$ans$com$openswimsoftware$ceylon$js$language=function(){return[$$$cl1.shared()];};
function RegExpFlag(name$245, $$regExpFlag){
    $init$RegExpFlag();
    if ($$regExpFlag===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$regExpFlag.name$245_=name$245;
    return $$regExpFlag;
}
RegExpFlag.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],of:[{t:global$246},{t:ignore$247},{t:multiple$248}],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','RegExpFlag']};};
exports.RegExpFlag=RegExpFlag;
function $init$RegExpFlag(){
    if (RegExpFlag.$$===undefined){
        $$$cl1.initTypeProto(RegExpFlag,'com.openswimsoftware.ceylon.js.language::RegExpFlag',$$$cl1.Basic);
        (function($$regExpFlag){
            $$$cl1.defineAttr($$regExpFlag,'name$245',function(){return this.name$245_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:RegExpFlag,d:['com.openswimsoftware.ceylon.js.language','RegExpFlag','$at','name']};});
        })(RegExpFlag.$$.prototype);
    }
    return RegExpFlag;
}
exports.$init$RegExpFlag=$init$RegExpFlag;
$init$RegExpFlag();
function global$246(){
    var $$global=new global$246.$$;
    RegExpFlag($$$cl1.String("g",1),$$global);
    return $$global;
};global$246.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RegExpFlag},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','global']};};
function $init$global$246(){
    if (global$246.$$===undefined){
        $$$cl1.initTypeProto(global$246,'com.openswimsoftware.ceylon.js.language::global',$init$RegExpFlag());
    }
    return global$246;
}
exports.$init$global$246=$init$global$246;
$init$global$246();
var global$249;
function getGlobal(){
    if (global$249===undefined){global$249=$init$global$246()();global$249.$$metamodel$$=getGlobal.$$metamodel$$;}
    return global$249;
}
exports.getGlobal=getGlobal;
getGlobal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:global$246},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','global']};};
$prop$getGlobal={get:getGlobal,$$metamodel$$:getGlobal.$$metamodel$$};
exports.$prop$getGlobal=$prop$getGlobal;
function ignore$247(){
    var $$ignore=new ignore$247.$$;
    RegExpFlag($$$cl1.String("i",1),$$ignore);
    return $$ignore;
};ignore$247.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RegExpFlag},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','ignore']};};
function $init$ignore$247(){
    if (ignore$247.$$===undefined){
        $$$cl1.initTypeProto(ignore$247,'com.openswimsoftware.ceylon.js.language::ignore',$init$RegExpFlag());
    }
    return ignore$247;
}
exports.$init$ignore$247=$init$ignore$247;
$init$ignore$247();
var ignore$250;
function getIgnore(){
    if (ignore$250===undefined){ignore$250=$init$ignore$247()();ignore$250.$$metamodel$$=getIgnore.$$metamodel$$;}
    return ignore$250;
}
exports.getIgnore=getIgnore;
getIgnore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ignore$247},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','ignore']};};
$prop$getIgnore={get:getIgnore,$$metamodel$$:getIgnore.$$metamodel$$};
exports.$prop$getIgnore=$prop$getIgnore;
function multiple$248(){
    var $$multiple=new multiple$248.$$;
    RegExpFlag($$$cl1.String("m",1),$$multiple);
    return $$multiple;
};multiple$248.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RegExpFlag},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','multiple']};};
function $init$multiple$248(){
    if (multiple$248.$$===undefined){
        $$$cl1.initTypeProto(multiple$248,'com.openswimsoftware.ceylon.js.language::multiple',$init$RegExpFlag());
    }
    return multiple$248;
}
exports.$init$multiple$248=$init$multiple$248;
$init$multiple$248();
var multiple$251;
function getMultiple(){
    if (multiple$251===undefined){multiple$251=$init$multiple$248()();multiple$251.$$metamodel$$=getMultiple.$$metamodel$$;}
    return multiple$251;
}
exports.getMultiple=getMultiple;
getMultiple.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:multiple$248},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','multiple']};};
$prop$getMultiple={get:getMultiple,$$metamodel$$:getMultiple.$$metamodel$$};
exports.$prop$getMultiple=$prop$getMultiple;
function createJSRegExp(pattern$252,flags$253){
    if(flags$253===undefined){flags$253=$$$cl1.getEmpty();}
    
    var case$254=pattern$252;
    if ($$$cl1.isOfType(pattern$252,{t:$$$cl1.String})) {
        /*Begin dynamic block*/
        return RegExp((typeof RegExp==='undefined'||RegExp===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: RegExp")),'11:17-11:22','regexp.ceylon'):RegExp)(case$254.valueOf(),(function(){
            var lst$255=[];
            var it$256=flags$253.iterator();
            var elem$257;
            while ((elem$257=it$256.next())!==$$$cl1.getFinished()){
                lst$255.push(elem$257.string);
            }
            return $$$cl1.ArraySequence(lst$255);
        }())));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(pattern$252,{t:JSString})) {
        /*Begin dynamic block*/
        return RegExp((typeof RegExp==='undefined'||RegExp===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: RegExp")),'16:17-16:22','regexp.ceylon'):RegExp)(case$254.$native,(function(){
            var lst$258=[];
            var it$259=flags$253.iterator();
            var elem$260;
            while ((elem$260=it$259.next())!==$$$cl1.getFinished()){
                lst$258.push(elem$260.string);
            }
            return $$$cl1.ArraySequence(lst$258);
        }())));
        /*End dynamic block*/
    }
}
exports.createJSRegExp=createJSRegExp;
createJSRegExp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:RegExp},$ps:[{$nm:'pattern',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}},{$nm:'flags',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:RegExpFlag}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSRegExp']};};
function RegExpAbs($$regExpAbs){
    $init$RegExpAbs();
    if ($$regExpAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$regExpAbs);
    return $$regExpAbs;
}
RegExpAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs']};};
exports.RegExpAbs=RegExpAbs;
function $init$RegExpAbs(){
    if (RegExpAbs.$$===undefined){
        $$$cl1.initTypeProto(RegExpAbs,'com.openswimsoftware.ceylon.js.language::RegExpAbs',$init$JSObjectAbs());
        (function($$regExpAbs){
            function RegResult$RegExpAbs(n$261, $$regResult$RegExpAbs){
                $init$RegResult$RegExpAbs();
                if ($$regResult$RegExpAbs===undefined)$$regResult$RegExpAbs=new this.RegResult$RegExpAbs.$$;
                $$regResult$RegExpAbs.$$outer=this;
                $$regResult$RegExpAbs.n$261_=n$261;
                $$regResult$RegExpAbs.$$outer.RegResultAbs$RegExpAbs($$regResult$RegExpAbs);
                $$regResult$RegExpAbs.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:RegResult$RegExpAbs,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$c','RegResult','$at','native']};}};
                /*Begin dynamic block*/
                $$regResult$RegExpAbs.$native=$$regResult$RegExpAbs.n$261;/*End dynamic block*/
                return $$regResult$RegExpAbs;
            }
            RegResult$RegExpAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RegExpAbs.RegResultAbs$RegExpAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$c','RegResult']};};
            function $init$RegResult$RegExpAbs(){
                if (RegResult$RegExpAbs.$$===undefined){
                    $$$cl1.initTypeProto(RegResult$RegExpAbs,'com.openswimsoftware.ceylon.js.language::RegExpAbs.RegResult',$$regExpAbs.RegResultAbs$RegExpAbs);
                    RegExpAbs.RegResult$RegExpAbs=RegResult$RegExpAbs;
                    (function($$regResult$RegExpAbs){
                        $$$cl1.defineAttr($$regResult$RegExpAbs,'n$261',function(){return this.n$261_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:RegResult$RegExpAbs,d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$c','RegResult','$at','n']};});
                    })(RegResult$RegExpAbs.$$.prototype);
                }
                return RegResult$RegExpAbs;
            }
            $$regExpAbs.$init$RegResult$RegExpAbs=$init$RegResult$RegExpAbs;
            $init$RegResult$RegExpAbs();
            $$regExpAbs.RegResult$RegExpAbs=RegResult$RegExpAbs;
            function RegResultAbs$RegExpAbs($$regResultAbs$RegExpAbs){
                $init$RegResultAbs$RegExpAbs();
                if ($$regResultAbs$RegExpAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
                $$regResultAbs$RegExpAbs.$$outer=this;
                JSArrayAbs($$regResultAbs$RegExpAbs);
                return $$regResultAbs$RegExpAbs;
            }
            RegResultAbs$RegExpAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSArrayAbs},$ps:[],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$c','RegResultAbs']};};
            function $init$RegResultAbs$RegExpAbs(){
                if (RegResultAbs$RegExpAbs.$$===undefined){
                    $$$cl1.initTypeProto(RegResultAbs$RegExpAbs,'com.openswimsoftware.ceylon.js.language::RegExpAbs.RegResultAbs',$init$JSArrayAbs());
                    RegExpAbs.RegResultAbs$RegExpAbs=RegResultAbs$RegExpAbs;
                    (function($$regResultAbs$RegExpAbs){
                        $$regResultAbs$RegExpAbs.input=function input(){
                            var $$regResultAbs$RegExpAbs=this;
                            /*Begin dynamic block*/
                            return JSString($$regResultAbs$RegExpAbs.$native.input);
                            /*End dynamic block*/
                        };$$regResultAbs$RegExpAbs.input.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:RegResultAbs$RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$c','RegResultAbs','$m','input']};};
                        $$regResultAbs$RegExpAbs.index=function index(){
                            var $$regResultAbs$RegExpAbs=this;
                            /*Begin dynamic block*/
                            return JSNumber($$regResultAbs$RegExpAbs.$native.index);
                            /*End dynamic block*/
                        };$$regResultAbs$RegExpAbs.index.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:RegResultAbs$RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$c','RegResultAbs','$m','index']};};
                    })(RegResultAbs$RegExpAbs.$$.prototype);
                }
                return RegResultAbs$RegExpAbs;
            }
            $$regExpAbs.$init$RegResultAbs$RegExpAbs=$init$RegResultAbs$RegExpAbs;
            $init$RegResultAbs$RegExpAbs();
            $$regExpAbs.RegResultAbs$RegExpAbs=RegResultAbs$RegExpAbs;
            $$regExpAbs.global=function global(){
                var $$regExpAbs=this;
                /*Begin dynamic block*/
                if($$regExpAbs.$native.global){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$regExpAbs.global.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$m','global']};};
            $$regExpAbs.ignoreCase=function ignoreCase(){
                var $$regExpAbs=this;
                /*Begin dynamic block*/
                if($$regExpAbs.$native.ignoreCase){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$regExpAbs.ignoreCase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$m','ignoreCase']};};
            $$regExpAbs.getLastindex=function getLastindex(){
                var $$regExpAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$regExpAbs.$native.lastindex);
                /*End dynamic block*/
            };$$regExpAbs.getLastindex.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$m','getLastindex']};};
            $$regExpAbs.setLastindex=function setLastindex(index$262){
                var $$regExpAbs=this;
                
                var case$263=index$262;
                if ($$$cl1.isOfType(index$262,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$regExpAbs.$native.lastindex=case$263;
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(index$262,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    $$regExpAbs.$native.lastindex=case$263.$native;
                    /*End dynamic block*/
                }
            };$$regExpAbs.setLastindex.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$m','setLastindex']};};
            $$regExpAbs.multiline=function multiline(){
                var $$regExpAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$regExpAbs.$native.multiline);
                /*End dynamic block*/
            };$$regExpAbs.multiline.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$m','multiline']};};
            $$regExpAbs.source=function source(){
                var $$regExpAbs=this;
                /*Begin dynamic block*/
                return JSString($$regExpAbs.$native.source);
                /*End dynamic block*/
            };$$regExpAbs.source.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$m','source']};};
            $$regExpAbs.exec=function exec(str$264){
                var $$regExpAbs=this;
                /*Begin dynamic block*/
                return JSString($$regExpAbs.$native.exec(str$264.valueOf()));
                /*End dynamic block*/
            };$$regExpAbs.exec.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'str',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$m','exec']};};
            $$regExpAbs.test$defs$str=function(str$265){var $$regExpAbs=this;
            return $$$cl1.String("undefined",9);};
            $$regExpAbs.test=function test(str$265){
                var $$regExpAbs=this;
                if(str$265===undefined){str$265=$$regExpAbs.test$defs$str(str$265);}
                var result$266;
                
                var case$267=str$265;
                if ($$$cl1.isOfType(str$265,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    result$266=$$regExpAbs.$native.test(case$267.valueOf());/*End dynamic block*/
                }else if ($$$cl1.isOfType(str$265,{t:JSString})) {
                    /*Begin dynamic block*/
                    result$266=$$regExpAbs.$native.test(case$267.$native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if(result$266){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$regExpAbs.test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'str',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}}],$cont:RegExpAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$m','test']};};
        })(RegExpAbs.$$.prototype);
    }
    return RegExpAbs;
}
exports.$init$RegExpAbs=$init$RegExpAbs;
$init$RegExpAbs();
function RegExp(n$268, $$regExp){
    $init$RegExp();
    if ($$regExp===undefined)$$regExp=new RegExp.$$;
    $$regExp.n$268_=n$268;
    RegExpAbs($$regExp);
    /*Begin dynamic block*/
    $$regExp.$native=$$regExp.n$268;/*End dynamic block*/
    return $$regExp;
}
RegExp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RegExpAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("native RegExp",13)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExp']};};
exports.RegExp=RegExp;
function $init$RegExp(){
    if (RegExp.$$===undefined){
        $$$cl1.initTypeProto(RegExp,'com.openswimsoftware.ceylon.js.language::RegExp',$init$RegExpAbs());
        (function($$regExp){
            $$$cl1.defineAttr($$regExp,'n$268',function(){return this.n$268_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:RegExp,d:['com.openswimsoftware.ceylon.js.language','RegExp','$at','n']};});
        })(RegExp.$$.prototype);
    }
    return RegExp;
}
exports.$init$RegExp=$init$RegExp;
$init$RegExp();
function createJSString(string$269){
    /*Begin dynamic block*/
    return JSString((typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'5:18-5:23','string.ceylon'):String)(string$269));
    /*End dynamic block*/
}
exports.createJSString=createJSString;
createJSString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'string',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSString']};};
function JSStringAbs($$jSStringAbs){
    $init$JSStringAbs();
    if ($$jSStringAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    JSObjectAbs($$jSStringAbs);
    return $$jSStringAbs;
}
JSStringAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs']};};
exports.JSStringAbs=JSStringAbs;
function $init$JSStringAbs(){
    if (JSStringAbs.$$===undefined){
        $$$cl1.initTypeProto(JSStringAbs,'com.openswimsoftware.ceylon.js.language::JSStringAbs',$init$JSObjectAbs());
        (function($$jSStringAbs){
            $$jSStringAbs.length=function length(){
                var $$jSStringAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSStringAbs.$native.length);
                /*End dynamic block*/
            };$$jSStringAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','length']};};
            $$jSStringAbs.charAt=function charAt(index$270){
                var $$jSStringAbs=this;
                
                var case$271=index$270;
                if ($$$cl1.isOfType(index$270,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    return JSString($$jSStringAbs.$native.charAt(case$271));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(index$270,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSString($$jSStringAbs.$native.charAt(case$271.$native));
                    /*End dynamic block*/
                }
            };$$jSStringAbs.charAt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'index',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','charAt']};};
            $$jSStringAbs.charCodeAt=function charCodeAt(index$272){
                var $$jSStringAbs=this;
                
                var case$273=index$272;
                if ($$$cl1.isOfType(index$272,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    return JSNumber($$jSStringAbs.$native.charCodeAt(case$273));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(index$272,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber($$jSStringAbs.$native.charCodeAt(case$273.$native));
                    /*End dynamic block*/
                }
            };$$jSStringAbs.charCodeAt.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'index',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','charCodeAt']};};
            $$jSStringAbs.concat=function concat(strings$274){
                var $$jSStringAbs=this;
                if(strings$274===undefined){strings$274=$$$cl1.getEmpty();}
                /*Begin dynamic block*/
                return JSString(JSFunction($$jSStringAbs.$native.concat).$apply(null,(function(){
                    var lst$275=[];
                    var it$276=strings$274.iterator();
                    var elem$277;
                    while ((elem$277=it$276.next())!==$$$cl1.getFinished()){
                        lst$275.push(elem$277.$native);
                    }
                    return $$$cl1.ArraySequence(lst$275);
                }())));
                /*End dynamic block*/
            };$$jSStringAbs.concat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'strings',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequence,a:{Element:{t:JSString}}},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','concat']};};
            $$jSStringAbs.indexOf$defs$fromIndex=function(searchValue$278,fromIndex$279){var $$jSStringAbs=this;
            return (0);};
            $$jSStringAbs.indexOf=function indexOf(searchValue$278,fromIndex$279){
                var $$jSStringAbs=this;
                if(fromIndex$279===undefined){fromIndex$279=$$jSStringAbs.indexOf$defs$fromIndex(searchValue$278,fromIndex$279);}
                
                var case$280=searchValue$278;
                if ($$$cl1.isOfType(searchValue$278,{t:$$$cl1.String})) {
                    
                    var case$281=fromIndex$279;
                    if ($$$cl1.isOfType(fromIndex$279,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return JSNumber($$jSStringAbs.$native.indexOf(case$280.valueOf(),case$281));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(fromIndex$279,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSNumber($$jSStringAbs.$native.indexOf(case$280.valueOf(),case$281.$native));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(searchValue$278,{t:JSString})) {
                    
                    var case$282=fromIndex$279;
                    if ($$$cl1.isOfType(fromIndex$279,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return JSNumber($$jSStringAbs.$native.indexOf(case$280.$native,case$282));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(fromIndex$279,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSNumber($$jSStringAbs.$native.indexOf(case$280.$native,case$282.$native));
                        /*End dynamic block*/
                    }
                }
            };$$jSStringAbs.indexOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'searchValue',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','indexOf']};};
            $$jSStringAbs.lastIndexOf$defs$fromIndex=function(searchValue$283,fromIndex$284){var $$jSStringAbs=this;
            return (0);};
            $$jSStringAbs.lastIndexOf=function lastIndexOf(searchValue$283,fromIndex$284){
                var $$jSStringAbs=this;
                if(fromIndex$284===undefined){fromIndex$284=$$jSStringAbs.lastIndexOf$defs$fromIndex(searchValue$283,fromIndex$284);}
                
                var case$285=searchValue$283;
                if ($$$cl1.isOfType(searchValue$283,{t:$$$cl1.String})) {
                    
                    var case$286=fromIndex$284;
                    if ($$$cl1.isOfType(fromIndex$284,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return JSNumber($$jSStringAbs.$native.lastIndexOf(case$285.valueOf(),case$286));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(fromIndex$284,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSNumber($$jSStringAbs.$native.lastIndexOf(case$285.valueOf(),case$286.$native));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(searchValue$283,{t:JSString})) {
                    
                    var case$287=fromIndex$284;
                    if ($$$cl1.isOfType(fromIndex$284,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return JSNumber($$jSStringAbs.$native.lastIndexOf(case$285.$native,case$287));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(fromIndex$284,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSNumber($$jSStringAbs.$native.lastIndexOf(case$285.$native,case$287.$native));
                        /*End dynamic block*/
                    }
                }
            };$$jSStringAbs.lastIndexOf.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'searchValue',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','lastIndexOf']};};
            $$jSStringAbs.match=function match(regexp$288){
                var $$jSStringAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$289=RegExp.RegResult$RegExpAbs((tmpvar$290=$$jSStringAbs.$native.match(regexp$288.$native),$$$cl1.isOfType(tmpvar$290,{t:RegExp})?tmpvar$290:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'113:33-113:59','string.ceylon'))),$$$cl1.isOfType(tmpvar$289,{t:$$$cl1.Anything})?tmpvar$289:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'113:16-113:60','string.ceylon'));
                /*End dynamic block*/
            };$$jSStringAbs.match.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:RegExpAbs.RegResult$RegExpAbs},$ps:[{$nm:'regexp',$mt:'prm',$t:{t:RegExp},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','match']};};
            $$jSStringAbs.replace=function replace(pattern$291,replace$292){
                var $$jSStringAbs=this;
                
                var case$293=pattern$291;
                if ($$$cl1.isOfType(pattern$291,{t:$$$cl1.String})) {
                    
                    var case$294=replace$292;
                    if ($$$cl1.isOfType(replace$292,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.replace(case$293.valueOf(),case$294.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(replace$292,{t:JSString})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.replace(case$293.valueOf(),case$294.$native));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(pattern$291,{t:'u', l:[{t:JSString},{t:RegExp}]})) {
                    
                    var case$295=replace$292;
                    if ($$$cl1.isOfType(replace$292,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.replace(case$293.$native,case$295.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(replace$292,{t:JSString})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.replace(case$293.$native,case$295.$native));
                        /*End dynamic block*/
                    }
                }
            };$$jSStringAbs.replace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'pattern',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JSString},{t:RegExp}]},$an:function(){return[];}},{$nm:'replace',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JSString}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','replace']};};
            $$jSStringAbs.replaceCallback=function replaceCallback(pattern$296,replace$297){
                var $$jSStringAbs=this;
                
                var case$298=pattern$296;
                if ($$$cl1.isOfType(pattern$296,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return JSString($$jSStringAbs.$native.replace(case$298.valueOf(),replace$297));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(pattern$296,{t:'u', l:[{t:JSString},{t:RegExp}]})) {
                    /*Begin dynamic block*/
                    return JSString($$jSStringAbs.$native.replace(case$298.$native,replace$297));
                    /*End dynamic block*/
                }
            };$$jSStringAbs.replaceCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'pattern',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:JSString},{t:RegExp}]},$an:function(){return[];}},{$nm:'replace',$mt:'prm',$pt:'f',$t:{t:JSString},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("replace will recived a set of substrings based on the regex then an Integer for offset, and the examined String",111)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','replaceCallback']};};
            $$jSStringAbs.search=function search(regexp$299){
                var $$jSStringAbs=this;
                /*Begin dynamic block*/
                return JSNumber($$jSStringAbs.$native.search(regexp$299.$native));
                /*End dynamic block*/
            };$$jSStringAbs.search.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSNumber},$ps:[{$nm:'regexp',$mt:'prm',$t:{t:RegExp},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','search']};};
            $$jSStringAbs.slice$defs$endSlice=function(beginSlice$300,endSlice$301){var $$jSStringAbs=this;
            return null;};
            $$jSStringAbs.slice=function slice(beginSlice$300,endSlice$301){
                var $$jSStringAbs=this;
                if(endSlice$301===undefined){endSlice$301=$$jSStringAbs.slice$defs$endSlice(beginSlice$300,endSlice$301);}
                
                var case$302=beginSlice$300;
                if ($$$cl1.isOfType(beginSlice$300,{t:$$$cl1.Integer})) {
                    
                    var case$303=endSlice$301;
                    if ($$$cl1.isOfType(endSlice$301,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return (tmpvar$304=(tmpvar$305=$$jSStringAbs.$native.slice(case$302,case$303),tmpvar$306=(typeof JString==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type JString")),'174:12-174:18','string.ceylon'):JString),tmpvar$306.$$===undefined?new tmpvar$306(tmpvar$305):tmpvar$306(tmpvar$305)),$$$cl1.isOfType(tmpvar$304,{t:$$$cl1.Anything})?tmpvar$304:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'174:12-174:54','string.ceylon'));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(endSlice$301,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return (tmpvar$307=(tmpvar$308=$$jSStringAbs.$native.slice(case$302,case$303.$native),tmpvar$309=(typeof JString==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type JString")),'179:12-179:18','string.ceylon'):JString),tmpvar$309.$$===undefined?new tmpvar$309(tmpvar$308):tmpvar$309(tmpvar$308)),$$$cl1.isOfType(tmpvar$307,{t:$$$cl1.Anything})?tmpvar$307:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'179:12-179:61','string.ceylon'));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(endSlice$301,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        return (tmpvar$310=(tmpvar$311=$$jSStringAbs.$native.slice(case$302),tmpvar$312=(typeof JString==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type JString")),'184:12-184:18','string.ceylon'):JString),tmpvar$312.$$===undefined?new tmpvar$312(tmpvar$311):tmpvar$312(tmpvar$311)),$$$cl1.isOfType(tmpvar$310,{t:$$$cl1.Anything})?tmpvar$310:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'184:12-184:44','string.ceylon'));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(beginSlice$300,{t:JSNumber})) {
                    
                    var case$313=endSlice$301;
                    if ($$$cl1.isOfType(endSlice$301,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return (tmpvar$314=(tmpvar$315=$$jSStringAbs.$native.slice(case$302.$native,case$313),tmpvar$316=(typeof JString==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type JString")),'192:12-192:18','string.ceylon'):JString),tmpvar$316.$$===undefined?new tmpvar$316(tmpvar$315):tmpvar$316(tmpvar$315)),$$$cl1.isOfType(tmpvar$314,{t:$$$cl1.Anything})?tmpvar$314:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'192:12-192:61','string.ceylon'));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(endSlice$301,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return (tmpvar$317=(tmpvar$318=$$jSStringAbs.$native.slice(case$302.$native,case$313.$native),tmpvar$319=(typeof JString==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type JString")),'197:12-197:18','string.ceylon'):JString),tmpvar$319.$$===undefined?new tmpvar$319(tmpvar$318):tmpvar$319(tmpvar$318)),$$$cl1.isOfType(tmpvar$317,{t:$$$cl1.Anything})?tmpvar$317:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'197:12-197:68','string.ceylon'));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(endSlice$301,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        return (tmpvar$320=(tmpvar$321=$$jSStringAbs.$native.slice(case$302.$native),tmpvar$322=(typeof JString==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type JString")),'202:12-202:18','string.ceylon'):JString),tmpvar$322.$$===undefined?new tmpvar$322(tmpvar$321):tmpvar$322(tmpvar$321)),$$$cl1.isOfType(tmpvar$320,{t:$$$cl1.Anything})?tmpvar$320:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'202:12-202:51','string.ceylon'));
                        /*End dynamic block*/
                    }
                }
            };$$jSStringAbs.slice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'beginSlice',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'endSlice',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Integer},{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','slice']};};
            $$jSStringAbs.split$defs$separator=function(separator$323,limit$324){var $$jSStringAbs=this;
            return null;};
            $$jSStringAbs.split$defs$limit=function(separator$323,limit$324){var $$jSStringAbs=this;
            return null;};
            $$jSStringAbs.split=function split(separator$323,limit$324){
                var $$jSStringAbs=this;
                if(separator$323===undefined){separator$323=$$jSStringAbs.split$defs$separator(separator$323,limit$324);}
                if(limit$324===undefined){limit$324=$$jSStringAbs.split$defs$limit(separator$323,limit$324);}
                
                var case$325=separator$323;
                if ($$$cl1.isOfType(separator$323,{t:$$$cl1.String})) {
                    
                    var case$326=limit$324;
                    if ($$$cl1.isOfType(limit$324,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSStringAbs.$native.split(case$325.valueOf(),case$326));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(limit$324,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSStringAbs.$native.split(case$325.valueOf(),case$326.$native));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(limit$324,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSStringAbs.$native.split(case$325.valueOf()));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(separator$323,{t:'u', l:[{t:JSString},{t:RegExp}]})) {
                    
                    var case$327=limit$324;
                    if ($$$cl1.isOfType(limit$324,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSStringAbs.$native.split(case$325.$native,case$327));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(limit$324,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSStringAbs.$native.split(case$325.$native,case$327.$native));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(limit$324,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        return JSArray($$jSStringAbs.$native.split(case$325));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(separator$323,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return JSArray($$jSStringAbs.$native.split());
                    /*End dynamic block*/
                }
            };$$jSStringAbs.split.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'separator',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:JSString},{t:'u', l:[{t:$$$cl1.Null},{t:RegExp}]}]},$an:function(){return[];}},{$nm:'limit',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Integer},{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns array of strings",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','split']};};
            $$jSStringAbs.substr$defs$length=function(start$328,length$329){var $$jSStringAbs=this;
            return null;};
            $$jSStringAbs.substr=function substr(start$328,length$329){
                var $$jSStringAbs=this;
                if(length$329===undefined){length$329=$$jSStringAbs.substr$defs$length(start$328,length$329);}
                
                var case$330=start$328;
                if ($$$cl1.isOfType(start$328,{t:$$$cl1.Integer})) {
                    
                    var case$331=length$329;
                    if ($$$cl1.isOfType(length$329,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substr(case$330,case$331));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(length$329,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substr(case$330,case$331.$native));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(length$329,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substr(case$330));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(start$328,{t:JSNumber})) {
                    
                    var case$332=length$329;
                    if ($$$cl1.isOfType(length$329,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substr(case$330.$native,case$332));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(length$329,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substr(case$330.$native,case$332.$native));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(length$329,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substr(case$330.$native));
                        /*End dynamic block*/
                    }
                }
            };$$jSStringAbs.substr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'start',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'length',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Integer},{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','substr']};};
            $$jSStringAbs.substring$defs$indexB=function(indexA$333,indexB$334){var $$jSStringAbs=this;
            return null;};
            $$jSStringAbs.substring=function substring(indexA$333,indexB$334){
                var $$jSStringAbs=this;
                if(indexB$334===undefined){indexB$334=$$jSStringAbs.substring$defs$indexB(indexA$333,indexB$334);}
                
                var case$335=indexA$333;
                if ($$$cl1.isOfType(indexA$333,{t:$$$cl1.Integer})) {
                    
                    var case$336=indexB$334;
                    if ($$$cl1.isOfType(indexB$334,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substring(case$335,case$336));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(indexB$334,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substring(case$335,case$336.$native));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(indexB$334,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substring(case$335));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(indexA$333,{t:JSNumber})) {
                    
                    var case$337=indexB$334;
                    if ($$$cl1.isOfType(indexB$334,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substring(case$335.$native,case$337));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(indexB$334,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substring(case$335.$native,case$337.$native));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(indexB$334,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        return JSString($$jSStringAbs.$native.substring(case$335.$native));
                        /*End dynamic block*/
                    }
                }
            };$$jSStringAbs.substring.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[{$nm:'indexA',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'indexB',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Integer},{t:'u', l:[{t:$$$cl1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','substring']};};
            $$jSStringAbs.toLowerCase=function toLowerCase(){
                var $$jSStringAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.toLowerCase());
                /*End dynamic block*/
            };$$jSStringAbs.toLowerCase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','toLowerCase']};};
            $$jSStringAbs.toUpperCase=function toUpperCase(){
                var $$jSStringAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.toUpperCase());
                /*End dynamic block*/
            };$$jSStringAbs.toUpperCase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','toUpperCase']};};
            $$jSStringAbs.trim=function trim(){
                var $$jSStringAbs=this;
                /*Begin dynamic block*/
                return JSString($$jSStringAbs.$native.trim());
                /*End dynamic block*/
            };$$jSStringAbs.trim.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSString},$ps:[],$cont:JSStringAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','trim']};};
        })(JSStringAbs.$$.prototype);
    }
    return JSStringAbs;
}
exports.$init$JSStringAbs=$init$JSStringAbs;
$init$JSStringAbs();
function JSString(n$338, $$jSString){
    $init$JSString();
    if ($$jSString===undefined)$$jSString=new JSString.$$;
    $$jSString.n$338_=n$338;
    JSStringAbs($$jSString);
    $$jSString.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSString,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.language','JSString','$at','native']};}};
    /*Begin dynamic block*/
    $$jSString.$native=$$jSString.n$338;/*End dynamic block*/
    return $$jSString;
}
JSString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSStringAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("native String",13)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSString']};};
exports.JSString=JSString;
function $init$JSString(){
    if (JSString.$$===undefined){
        $$$cl1.initTypeProto(JSString,'com.openswimsoftware.ceylon.js.language::JSString',$init$JSStringAbs());
        (function($$jSString){
            $$$cl1.defineAttr($$jSString,'n$338',function(){return this.n$338_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSString,d:['com.openswimsoftware.ceylon.js.language','JSString','$at','n']};});
        })(JSString.$$.prototype);
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
