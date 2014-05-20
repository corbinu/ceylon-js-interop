(function(define) { define(function(require, ex$, module) {
var $CCMM$={"$mod-deps":["ceylon.language\/1.1.0"],"$mod-name":"com.openswimsoftware.ceylon.js.language","$mod-version":"1.8.0","com.openswimsoftware.ceylon.js.language":{PropertyDescriptor:{abstract:1,super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},$mt:"c",$an:{abstract:[],shared:[],doc:["describes a new object property"]},$m:{toNative:{$t:{$pk:".",$nm:"JSObject"},$mt:"m",$an:{shared:[],formal:[]},$nm:"toNative"}},$at:{configurable:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[],formal:[]},$nm:"configurable"},descriptor:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[],formal:[]},$nm:"descriptor"},enumerable:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[],formal:[]},$nm:"enumerable"}},$nm:"PropertyDescriptor"},defineProperties:{$t:{$pk:".",$nm:"JSObject"},$ps:[[{$t:{$pk:".",$nm:"JSObject"},$mt:"prm",$nm:"obj"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"DataDescriptor"},{$pk:".",$nm:"AccessorDescriptor"}]}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"prm",$nm:"properties"}]],$mt:"m",$an:{shared:[],doc:["define properties on a native object"]},$nm:"defineProperties"},mathLog10:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns log of 10"]},$nm:"mathLog10"},objectIsSealed:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$pk:".",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[],doc:["can properties be added to or removed from the object"]},$nm:"objectIsSealed"},mathRoot2:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns square root of 2"]},$nm:"mathRoot2"},Math:{super:{$pk:".",$nm:"MathAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["native Math"]},$at:{n$rs7cru:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"},native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"}},$nm:"Math"},objectIsFrozen:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$pk:".",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[],doc:["can the object being altered in any way"]},$nm:"objectIsFrozen"},objectDefineProperty:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"JSObject"},$mt:"prm",$nm:"obj"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JSString"}]},$mt:"prm",$nm:"prop"},{$t:{comp:"u",$ts:[{$pk:".",$nm:"DataDescriptor"},{$pk:".",$nm:"AccessorDescriptor"}]},$mt:"prm",$nm:"descriptor"}]],$mt:"m",$an:{shared:[],doc:["define a property on a native object"]},$nm:"objectDefineProperty"},RegExp:{super:{$pk:".",$nm:"RegExpAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["native RegExp"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$5q8qbj:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"RegExp"},dateUTC:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"year"},{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"month"},{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"day"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$def:1,$nm:"hour"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$def:1,$nm:"minute"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$def:1,$nm:"second"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$def:1,$nm:"milli"}]],$mt:"m",$an:{shared:[],doc:["returns the given date string as a unix timestamp"]},$nm:"dateUTC"},createJSDateYMDInt:{$t:{$pk:".",$nm:"JSDate"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"year"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"month"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"day"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"prm",$def:1,$nm:"hour"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"prm",$def:1,$nm:"minute"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"prm",$def:1,$nm:"second"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"prm",$def:1,$nm:"milli"}]],$mt:"m",$an:{shared:[],doc:["create a native date at the given date time"]},$nm:"createJSDateYMDInt"},JSString:{super:{$pk:".",$nm:"JSStringAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["native String"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$cc4wqw:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"JSString"},createJSObject:{$t:{$pk:".",$nm:"JSObject"},$mt:"m",$an:{shared:[],doc:["create a new native object"]},$nm:"createJSObject"},createJSNumber:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$pk:"$",$nm:"Float"},{$md:"ceylon.language",$pk:"$",$nm:"String"}]},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[],doc:["creates a new native number"]},$nm:"createJSNumber"},"$pkg-shared":1,JSDateAbs:{abstract:1,super:{$pk:".",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{toLocaleDateString:{$t:{$pk:".",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the date as a language sensitive string"]},$nm:"toLocaleDateString"},toLocaleString:{$t:{$pk:".",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the date as a language sensitive string"]},$nm:"toLocaleString"},getSeconds:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the seconds"]},$nm:"getSeconds"},getUTCSeconds:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the seconds in UTC"]},$nm:"getUTCSeconds"},getUTCMonth:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the month in UTC"]},$nm:"getUTCMonth"},toUTCString:{$t:{$pk:".",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the time a UTC string"]},$nm:"toUTCString"},setUTCFullYear:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"year"}]],$mt:"m",$an:{shared:[],doc:["set the year UTC"]},$nm:"setUTCFullYear"},getFullYear:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the year"]},$nm:"getFullYear"},getHours:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the hour"]},$nm:"getHours"},setUTCHours:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"hours"}]],$mt:"m",$an:{shared:[],doc:["set the hours UTC"]},$nm:"setUTCHours"},getTimezoneOffset:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the timezone offset"]},$nm:"getTimezoneOffset"},getDay:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the day of the week"]},$nm:"getDay"},setMinutes:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"minutes"}]],$mt:"m",$an:{shared:[],doc:["set the minutes"]},$nm:"setMinutes"},toISOString:{$t:{$pk:".",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the date as a ISO string"]},$nm:"toISOString"},setMilliseconds:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"milli"}]],$mt:"m",$an:{shared:[],doc:["set the milliseconds"]},$nm:"setMilliseconds"},getUTCHours:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the hour in UTC"]},$nm:"getUTCHours"},setTime:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"milli"}]],$mt:"m",$an:{shared:[],doc:["set the time as unix timestamp"]},$nm:"setTime"},toLocaleTimeString:{$t:{$pk:".",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the time as a language sensitive string"]},$nm:"toLocaleTimeString"},getUTCDate:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the day of the month in UTC"]},$nm:"getUTCDate"},toTimeString:{$t:{$pk:".",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the time a string"]},$nm:"toTimeString"},setUTCMilliseconds:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"milli"}]],$mt:"m",$an:{shared:[],doc:["set the milliseconds UTC"]},$nm:"setUTCMilliseconds"},setSeconds:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"seconds"}]],$mt:"m",$an:{shared:[],doc:["set the seconds"]},$nm:"setSeconds"},setUTCMinutes:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"minutes"}]],$mt:"m",$an:{shared:[],doc:["set the minutes UTC"]},$nm:"setUTCMinutes"},setMonth:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"month"}]],$mt:"m",$an:{shared:[],doc:["set the month"]},$nm:"setMonth"},toDateString:{$t:{$pk:".",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the date as a string"]},$nm:"toDateString"},setUTCSeconds:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"seconds"}]],$mt:"m",$an:{shared:[],doc:["set the seconds UTC"]},$nm:"setUTCSeconds"},getUTCMinutes:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the minutes in UTC"]},$nm:"getUTCMinutes"},setDate:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"day"}]],$mt:"m",$an:{shared:[],doc:["set the day of the month"]},$nm:"setDate"},getDate:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the day of the month"]},$nm:"getDate"},setFullYear:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"year"}]],$mt:"m",$an:{shared:[],doc:["set the year"]},$nm:"setFullYear"},getTime:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns unix timestamp"]},$nm:"getTime"},toJSON:{$t:{$pk:".",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the date as a JSON string"]},$nm:"toJSON"},setHours:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"hour"}]],$mt:"m",$an:{shared:[],doc:["set the hour"]},$nm:"setHours"},getMonth:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the month"]},$nm:"getMonth"},getUTCFullYear:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the year in UTC"]},$nm:"getUTCFullYear"},getUTCDay:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the day of the week in UTC"]},$nm:"getUTCDay"},getUTCMilliseconds:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the milliseconds in UTC"]},$nm:"getUTCMilliseconds"},setUTCMonth:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"month"}]],$mt:"m",$an:{shared:[],doc:["set the month UTC"]},$nm:"setUTCMonth"},setUTCDate:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"day"}]],$mt:"m",$an:{shared:[],doc:["set the day of the month UTC"]},$nm:"setUTCDate"},getMilliseconds:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the milliseconds"]},$nm:"getMilliseconds"},getMinutes:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the minutes"]},$nm:"getMinutes"}},$nm:"JSDateAbs"},objectGetOwnPropertyDescriptor:{$t:{$pk:".",$nm:"JSObject"},$ps:[[{$t:{$pk:".",$nm:"JSObject"},$mt:"prm",$nm:"obj"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JSString"}]},$mt:"prm",$nm:"prop"}]],$mt:"m",$an:{shared:[],doc:["get the discriptor of a object property"]},$nm:"objectGetOwnPropertyDescriptor"},createJSDate:{$t:{$pk:".",$nm:"JSDate"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[],doc:["create a native Date set to now"]},$nm:"createJSDate"},objectKeys:{$t:{$pk:".",$nm:"JSArray"},$ps:[[{$t:{$pk:".",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[],doc:["returns an array of object enumerable properties"]},$nm:"objectKeys"},objectGetOwnPropertyNames:{$t:{$pk:".",$nm:"JSArray"},$ps:[[{$t:{$pk:".",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[],doc:["returns an array of object properties"]},$nm:"objectGetOwnPropertyNames"},objectSeal:{$t:{$pk:".",$nm:"JSObject"},$ps:[[{$t:{$pk:".",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[],doc:["prevents properties from being added to or removed from the object"]},$nm:"objectSeal"},objectFreeze:{$t:{$pk:".",$nm:"JSObject"},$ps:[[{$t:{$pk:".",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[],doc:["stops the object being altered in any way"]},$nm:"objectFreeze"},arrayIsArray:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"array"}]],$mt:"m",$an:{shared:[],doc:["is the passed value a native array"]},$nm:"arrayIsArray"},numberNegativeInfinity:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns negative infinity"]},$nm:"numberNegativeInfinity"},global:{super:{$pk:".",$nm:"RegExpFlag"},$mt:"o",$an:{shared:[]},$nm:"global"},eval:{$t:{$pk:".",$nm:"unknown"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JSString"}]},$mt:"prm",$nm:"js"}]],$mt:"m",$an:{shared:[]},$nm:"eval"},JSArrayAbs:{abstract:1,super:{$pk:".",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{splice:{$t:{$pk:".",$nm:"JSArray"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"index"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"howMany"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"elements"}]],$mt:"m",$an:{shared:[],doc:["returns an array of removed elements after it adds new elements while removing old ones"]},$nm:"splice"},reverse:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[],doc:["reverse the order of the elements in the array"]},$nm:"reverse"},sort:{$t:{$pk:".",$nm:"JSArray"},$mt:"m",$an:{shared:[],doc:["sort the items in lexicographic order"]},$nm:"sort"},reduceRight:{$t:{$pk:".",$nm:"unknown"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"previousValue"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"currentValue"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"array"}]],$mt:"prm",$pt:"f",$nm:"callback"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"initialValue"}]],$mt:"m",$an:{shared:[],doc:["returns a single value after looping over the array right to left combining two values each time"]},$m:{callback$14g2t9:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"previousValue"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"currentValue"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"array"}]],$mt:"m",$nm:"callback"}},$nm:"reduceRight"},forEach:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"array"}]],$mt:"prm",$pt:"f",$nm:"callback"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"context"}]],$mt:"m",$an:{shared:[],doc:["executes the callback for each element in the array"]},$m:{callback$qd569d:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"array"}]],$mt:"m",$nm:"callback"}},$nm:"forEach"},lastIndexOf:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"searchElement"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]}]},$mt:"prm",$def:1,$nm:"fromIndex"}]],$mt:"m",$an:{shared:[],doc:["returns the last index of the element in the array or -1"]},$nm:"lastIndexOf"},pop:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns and remove the last element in the array"]},$nm:"pop"},indexOf:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"searchElement"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]}]},$mt:"prm",$def:1,$nm:"fromIndex"}]],$mt:"m",$an:{shared:[],doc:["returns the first index of the element in the array or -1"]},$nm:"indexOf"},join:{$t:{$pk:".",$nm:"JSString"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$def:1,$nm:"separator"}]],$mt:"m",$an:{shared:[],doc:["returns a string after joining all elements with separator"]},$nm:"join"},every:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"array"}]],$mt:"prm",$pt:"f",$nm:"callback"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"context"}]],$mt:"m",$an:{shared:[],doc:["tests if all elements in the array pass the callback test"]},$m:{callback$gfkp2i:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"array"}]],$mt:"m",$nm:"callback"}},$nm:"every"},concat:{$t:{$pk:".",$nm:"JSArray"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"elements"}]],$mt:"m",$an:{shared:[],doc:["returns array after appending the elements"]},$nm:"concat"},reduce:{$t:{$pk:".",$nm:"unknown"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"previousValue"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"currentValue"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"array"}]],$mt:"prm",$pt:"f",$nm:"callback"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"initialValue"}]],$mt:"m",$an:{shared:[],doc:["returns a single value after looping over the array left to right combining two values each time"]},$m:{callback$wb1qnn:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"previousValue"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"currentValue"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"array"}]],$mt:"m",$nm:"callback"}},$nm:"reduce"},push:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"elements"}]],$mt:"m",$an:{shared:[],doc:["returns length after adding one or more elements to the array"]},$nm:"push"},concatArrays:{$t:{$pk:".",$nm:"JSArray"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$mt:"tp",$pk:".",$nm:"JSArray"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"arrays"}]],$mt:"m",$an:{shared:[],doc:["returns array after combining it with the passed arrays"]},$nm:"concatArrays"},map:{$t:{$pk:".",$nm:"JSArray"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"array"}]],$mt:"prm",$pt:"f",$nm:"callback"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"context"}]],$mt:"m",$an:{shared:[],doc:["returns an array of the elements returned from the callback"]},$m:{callback$r8dxql:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"array"}]],$mt:"m",$nm:"callback"}},$nm:"map"},slice:{$t:{$pk:".",$nm:"JSArray"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"begin"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]}]},$mt:"prm",$def:1,$nm:"end"}]],$mt:"m",$an:{shared:[],doc:["returns shallow copy of portion of the array"]},$nm:"slice"},sortCompare:{$t:{$pk:".",$nm:"JSArray"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"a"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"b"}]],$mt:"prm",$pt:"f",$nm:"compare"}]],$mt:"m",$an:{shared:[],doc:["sort the items using the compare function"]},$m:{compare$175c5m:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"a"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"b"}]],$mt:"m",$nm:"compare"}},$nm:"sortCompare"},getLength:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the length of the array"]},$nm:"getLength"},unshift:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"elements"}]],$mt:"m",$an:{shared:[],doc:["returns length after adding elements to the front of the array"]},$nm:"unshift"},setLength:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"len"}]],$mt:"m",$an:{shared:[],doc:["set the length of the array"]},$nm:"setLength"},some:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"array"}]],$mt:"prm",$pt:"f",$nm:"callback"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"context"}]],$mt:"m",$an:{shared:[],doc:["tests if some elements in the array pass the callback test"]},$m:{callback$yhgj7v:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"array"}]],$mt:"m",$nm:"callback"}},$nm:"some"},filter:{$t:{$pk:".",$nm:"JSArray"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"array"}]],$mt:"prm",$pt:"f",$nm:"callback"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"context"}]],$mt:"m",$an:{shared:[],doc:["returns an array of elements which pass the callback test"]},$m:{callback$92xx4f:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"index"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"array"}]],$mt:"m",$nm:"callback"}},$nm:"filter"},shift:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns and remove the first element in the array"]},$nm:"shift"}},$nm:"JSArrayAbs"},dateParse:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JSString"}]},$mt:"prm",$nm:"dateTime"}]],$mt:"m",$an:{shared:[],doc:["returns the given date string as a unix timestamp"]},$nm:"dateParse"},isFinite:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"num"}]],$mt:"m",$an:{shared:[]},$nm:"isFinite"},JSArray:{super:{$pk:".",$nm:"JSArrayAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["native Array"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$c8n002:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"JSArray"},createJSDateYMD:{$t:{$pk:".",$nm:"JSDate"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"year"},{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"month"},{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"day"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$def:1,$nm:"hour"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$def:1,$nm:"minute"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$def:1,$nm:"second"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$def:1,$nm:"milli"}]],$mt:"m",$an:{shared:[],doc:["create a native date at the given date time"]},$nm:"createJSDateYMD"},JSNumber:{super:{$pk:".",$nm:"JSNumberAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["native Number"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$x6cqmo:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"JSNumber"},mathLog2e:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns natural log of 2"]},$nm:"mathLog2e"},RegExpAbs:{abstract:1,super:{$pk:".",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{source:{$t:{$pk:".",$nm:"JSString"},$mt:"m",$an:{shared:[]},$nm:"source"},test:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JSString"}]},$mt:"prm",$def:1,$nm:"str"}]],$mt:"m",$an:{shared:[]},$nm:"test"},multiline:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[]},$nm:"multiline"},global:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[]},$nm:"global"},exec:{$t:{$pk:".",$nm:"JSString"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"str"}]],$mt:"m",$an:{shared:[]},$nm:"exec"},getLastindex:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[]},$nm:"getLastindex"},ignoreCase:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[]},$nm:"ignoreCase"},setLastindex:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"index"}]],$mt:"m",$an:{shared:[]},$nm:"setLastindex"}},$c:{RegResult:{super:{$pk:".",$nm:"RegExpAbs.RegResultAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$v0xast:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"RegResult"},RegResultAbs:{abstract:1,super:{$pk:".",$nm:"JSArrayAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{index:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[]},$nm:"index"},input:{$t:{$pk:".",$nm:"JSString"},$mt:"m",$an:{shared:[]},$nm:"input"}},$nm:"RegResultAbs"}},$nm:"RegExpAbs"},isNaN:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[]},$nm:"isNaN"},objectCreate:{$t:{$pk:".",$nm:"JSObject"},$ps:[[{$t:{$pk:".",$nm:"JSObject"},$mt:"prm",$nm:"proto"},{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{comp:"u",$mt:"tp",$ts:[{$pk:".",$nm:"DataDescriptor"},{$pk:".",$nm:"AccessorDescriptor"}]}],$pk:"$",$nm:"Entry"}],$pk:"$",$nm:"Sequential"},$mt:"prm",$nm:"properties"}]],$mt:"m",$an:{shared:[],doc:["create a new native object"]},$nm:"objectCreate"},numberMinValue:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the min possible number"]},$nm:"numberMinValue"},JSObject:{super:{$pk:".",$nm:"JSObjectAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["native Object"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$2qlyl2:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"JSObject"},mathLog2:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns log of 2"]},$nm:"mathLog2"},DataDescriptor:{super:{$pk:".",$nm:"PropertyDescriptor"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$an:{shared:[],actual:[]},$nm:"configurable"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$an:{shared:[],actual:[]},$nm:"descriptor"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$an:{shared:[],actual:[]},$nm:"enumerable"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$an:{shared:[]},$nm:"writable"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$an:{shared:[]},$nm:"val"}],$mt:"c",$an:{shared:[],doc:["describes a new object data property"]},$m:{toNative:{$t:{$pk:".",$nm:"JSObject"},$mt:"m",$an:{shared:[],doc:["converts the options to native JSON"],actual:[]},$nm:"toNative"}},$at:{val:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[]},$nm:"val"},configurable:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[],actual:[]},$nm:"configurable"},descriptor:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[],actual:[]},$nm:"descriptor"},writable:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[]},$nm:"writable"},enumerable:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[],actual:[]},$nm:"enumerable"}},$nm:"DataDescriptor"},parseFloat:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JSString"}]},$mt:"prm",$nm:"float"}]],$mt:"m",$an:{shared:[]},$nm:"parseFloat"},RegExpFlag:{abstract:1,super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},of:[{$pk:".",$nm:"global"},{$pk:".",$nm:"ignore"},{$pk:".",$nm:"multiple"}],$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"name"}],$mt:"c",$an:{abstract:[],shared:[]},$at:{name$gqp1ds:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$nm:"name"}},$nm:"RegExpFlag"},parseInt:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JSString"}]},$mt:"prm",$nm:"int"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$def:1,$nm:"radix"}]],$mt:"m",$an:{shared:[]},$nm:"parseInt"},dateUTCInt:{$t:{$pk:".",$nm:"JSDate"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"year"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"month"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$nm:"day"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"prm",$def:1,$nm:"hour"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"prm",$def:1,$nm:"minute"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"prm",$def:1,$nm:"second"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"}]},$mt:"prm",$def:1,$nm:"milli"}]],$mt:"m",$an:{shared:[],doc:["returns the given date string as a native Date"]},$nm:"dateUTCInt"},objectIsExtensible:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$pk:".",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[],doc:["can new properties be added to the object"]},$nm:"objectIsExtensible"},JSNumberAbs:{abstract:1,super:{$pk:".",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{toFixed:{$t:{$pk:".",$nm:"JSString"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$def:1,$nm:"digits"}]],$mt:"m",$an:{shared:[],doc:["returns a string representing the number in fixed-point notation"]},$nm:"toFixed"},toExponential:{$t:{$pk:".",$nm:"JSString"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]}]},$mt:"prm",$def:1,$nm:"fractionDigits"}]],$mt:"m",$an:{shared:[],doc:["returns a string representing the number in exponential notation"]},$nm:"toExponential"},toPrecision:{$t:{$pk:".",$nm:"JSString"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]}]},$mt:"prm",$def:1,$nm:"precision"}]],$mt:"m",$an:{shared:[],doc:["returns a string representing the number in a specified precision in fixed-point or exponential notation"]},$nm:"toPrecision"}},$nm:"JSNumberAbs"},JSStringAbs:{abstract:1,super:{$pk:".",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{lastIndexOf:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JSString"}]},$mt:"prm",$nm:"searchValue"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$def:1,$nm:"fromIndex"}]],$mt:"m",$an:{shared:[]},$nm:"lastIndexOf"},indexOf:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JSString"}]},$mt:"prm",$nm:"searchValue"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$def:1,$nm:"fromIndex"}]],$mt:"m",$an:{shared:[]},$nm:"indexOf"},concat:{$t:{$pk:".",$nm:"JSString"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$mt:"tp",$pk:".",$nm:"JSString"}],$pk:"$",$nm:"Sequence"},$mt:"prm",seq:1,$nm:"strings",$min1:1}]],$mt:"m",$an:{shared:[]},$nm:"concat"},replace:{$t:{$pk:".",$nm:"JSString"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JSString"},{$pk:".",$nm:"RegExp"}]},$mt:"prm",$nm:"pattern"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JSString"}]},$mt:"prm",$nm:"replace"}]],$mt:"m",$an:{shared:[]},$nm:"replace"},toUpperCase:{$t:{$pk:".",$nm:"JSString"},$mt:"m",$an:{shared:[]},$nm:"toUpperCase"},replaceCallback:{$t:{$pk:".",$nm:"JSString"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JSString"},{$pk:".",$nm:"RegExp"}]},$mt:"prm",$nm:"pattern"},{$t:{$pk:".",$nm:"JSString"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"match"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"psOffsetExamined"}]],$mt:"prm",$pt:"f",$nm:"replace"}]],$mt:"m",$an:{shared:[],doc:["replace will recived a set of substrings based on the regex then an Integer for offset, and the examined String"]},$m:{replace$34zdjp:{$t:{$pk:".",$nm:"JSString"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"match"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"psOffsetExamined"}]],$mt:"m",$nm:"replace"}},$nm:"replaceCallback"},charCodeAt:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"index"}]],$mt:"m",$an:{shared:[]},$nm:"charCodeAt"},search:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"RegExp"},$mt:"prm",$nm:"regexp"}]],$mt:"m",$an:{shared:[]},$nm:"search"},toLowerCase:{$t:{$pk:".",$nm:"JSString"},$mt:"m",$an:{shared:[]},$nm:"toLowerCase"},substring:{$t:{$pk:".",$nm:"JSString"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"indexA"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]}]},$mt:"prm",$def:1,$nm:"indexB"}]],$mt:"m",$an:{shared:[]},$nm:"substring"},length:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[]},$nm:"length"},slice:{$t:{$pk:".",$nm:"JSString"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"beginSlice"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]}]},$mt:"prm",$def:1,$nm:"endSlice"}]],$mt:"m",$an:{shared:[]},$nm:"slice"},split:{$t:{$pk:".",$nm:"JSArray"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JSString"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"RegExp"}]}]},$mt:"prm",$def:1,$nm:"separator"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]}]},$mt:"prm",$def:1,$nm:"limit"}]],$mt:"m",$an:{shared:[],doc:["returns array of strings"]},$nm:"split"},match:{$t:{$pk:".",$nm:"RegExpAbs.RegResult"},$ps:[[{$t:{$pk:".",$nm:"RegExp"},$mt:"prm",$nm:"regexp"}]],$mt:"m",$an:{shared:[]},$nm:"match"},trim:{$t:{$pk:".",$nm:"JSString"},$mt:"m",$an:{shared:[]},$nm:"trim"},substr:{$t:{$pk:".",$nm:"JSString"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"start"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"JSNumber"}]}]},$mt:"prm",$def:1,$nm:"length"}]],$mt:"m",$an:{shared:[]},$nm:"substr"},charAt:{$t:{$pk:".",$nm:"JSString"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$pk:".",$nm:"JSNumber"}]},$mt:"prm",$nm:"index"}]],$mt:"m",$an:{shared:[]},$nm:"charAt"}},$nm:"JSStringAbs"},JSDate:{super:{$pk:".",$nm:"JSDateAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["native Date"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$y53sjn:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"JSDate"},multiple:{super:{$pk:".",$nm:"RegExpFlag"},$mt:"o",$an:{shared:[]},$nm:"multiple"},numberMaxValue:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the max possible number"]},$nm:"numberMaxValue"},objectPreventExtensions:{$t:{$pk:".",$nm:"JSObject"},$ps:[[{$t:{$pk:".",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[],doc:["prevents new properties from being added to the object"]},$nm:"objectPreventExtensions"},ignore:{super:{$pk:".",$nm:"RegExpFlag"},$mt:"o",$an:{shared:[]},$nm:"ignore"},mathRoot1_2:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns square root of 1\/2"]},$nm:"mathRoot1_2"},JSFunctionAbs:{abstract:1,super:{$pk:".",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{isGenerator:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["is the function a generator"]},$nm:"isGenerator"},length:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns number of arguments exepcted buy the function"]},$nm:"length"},bind:{$t:{$pk:".",$nm:"JSFunction"},$ps:[[{$t:{$pk:".",$nm:"JSObject"},$mt:"prm",$nm:"thisArg"},{$t:{$md:"ceylon.language",$tp:[{$mt:"tp",$pk:".",$nm:"JSObject"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"args"}]],$mt:"m",$an:{shared:[],doc:["returns a new function with thisArg as the this element and a set of args to prepend when the target function is called"]},$nm:"bind"}},$nm:"JSFunctionAbs"},dateNow:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns now as a unix timestamp"]},$nm:"dateNow"},AccessorDescriptor:{super:{$pk:".",$nm:"PropertyDescriptor"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$an:{shared:[],actual:[]},$nm:"configurable"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$an:{shared:[],actual:[]},$nm:"descriptor"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$an:{shared:[],actual:[]},$nm:"enumerable"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"get"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"set"}],$mt:"c",$an:{shared:[],doc:["describes a new object accessor property"]},$m:{toNative:{$t:{$pk:".",$nm:"JSObject"},$mt:"m",$an:{shared:[],doc:["converts the options to native JSON"],actual:[]},$nm:"toNative"}},$at:{configurable:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[],actual:[]},$nm:"configurable"},get:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Callable"}]},$mt:"a",$an:{shared:[]},$nm:"get"},descriptor:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[],actual:[]},$nm:"descriptor"},set:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$tp:[{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Anything"},{$pk:".",$nm:"Nothing"}]},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Anything"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Empty"}],$pk:"$",$nm:"Tuple"}],$pk:"$",$nm:"Callable"}]},$mt:"a",$an:{shared:[]},$nm:"set"},enumerable:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[],actual:[]},$nm:"enumerable"}},$nm:"AccessorDescriptor"},createJSRegExp:{$t:{$pk:".",$nm:"RegExp"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JSString"}]},$mt:"prm",$nm:"pattern"},{$t:{$md:"ceylon.language",$tp:[{$mt:"tp",$pk:".",$nm:"RegExpFlag"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"flags"}]],$mt:"m",$an:{shared:[]},$nm:"createJSRegExp"},createJSString:{$t:{$pk:".",$nm:"JSString"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"string"}]],$mt:"m",$an:{shared:[]},$nm:"createJSString"},JSFunction:{super:{$pk:".",$nm:"JSFunctionAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["native Function"]},$at:{n$7n72kp:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"},native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"}},$nm:"JSFunction"},numberPositiveInfinity:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns positive infinity"]},$nm:"numberPositiveInfinity"},JSObjectAbs:{abstract:1,super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},$mt:"c",$an:{abstract:[],shared:[]},$m:{isPrototypeOf:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$pk:".",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[],doc:["is the object in the passed objects prototype chain"]},$nm:"isPrototypeOf"},call:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"thisArg"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"args"}]],$mt:"m",$an:{shared:[],doc:["calls a function with thisArg as this and an argument list"]},$nm:"call"},apply:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"thisArg"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"args"}]],$mt:"m",$an:{shared:[],doc:["calls a function with thisArg as this and an array of args"]},$nm:"apply"},setConstructor:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"JSFunction"},$mt:"prm",$nm:"constructor"}]],$mt:"m",$an:{shared:[],doc:["sets the objects contructor"]},$nm:"setConstructor"},propertyIsEnumerable:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JSString"}]},$mt:"prm",$nm:"prop"}]],$mt:"m",$an:{shared:[],doc:["is the property enumerable by a for in loop"]},$nm:"propertyIsEnumerable"},toString:{$t:{$pk:".",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["convert the object to a string"]},$nm:"toString"},setPrototype:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"JSObject"},$mt:"prm",$nm:"prototype"}]],$mt:"m",$an:{shared:[],doc:["sets the objects prototype"]},$nm:"setPrototype"},hasOwnProperty:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$pk:".",$nm:"JSString"}]},$mt:"prm",$nm:"prop"}]],$mt:"m",$an:{shared:[],doc:["does the object have the propery"]},$nm:"hasOwnProperty"},getConstructor:{$t:{$pk:".",$nm:"JSFunction"},$mt:"m",$an:{shared:[],doc:["returns the objects contructor"]},$nm:"getConstructor"},getPrototype:{$t:{$pk:".",$nm:"JSObject"},$mt:"m",$an:{shared:[],doc:["returns the objects prototype"]},$nm:"getPrototype"}},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],formal:[]},$nm:"native"}},$nm:"JSObjectAbs"},mathLog10e:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns natural log of 10"]},$nm:"mathLog10e"},MathAbs:{abstract:1,super:{$pk:".",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{min:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$mt:"tp",$pk:".",$nm:"JSNumber"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"numbers"}]],$mt:"m",$an:{shared:[],doc:["returns the min of the passed numbers"]},$nm:"min"},atan:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"x"}]],$mt:"m",$an:{shared:[],doc:["returns the arctangent value of a number"]},$nm:"atan"},pow:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"base"},{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"exponent"}]],$mt:"m",$an:{shared:[],doc:["returns the base^exponent"]},$nm:"pow"},max:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$mt:"tp",$pk:".",$nm:"JSNumber"}],$pk:"$",$nm:"Sequential"},$mt:"prm",seq:1,$nm:"numbers"}]],$mt:"m",$an:{shared:[],doc:["returns the max of the passed numbers"]},$nm:"max"},asin:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"x"}]],$mt:"m",$an:{shared:[],doc:["returns the arcsine value of a number"]},$nm:"asin"},cos:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"x"}]],$mt:"m",$an:{shared:[],doc:["returns the cosine of a number"]},$nm:"cos"},ceil:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"x"}]],$mt:"m",$an:{shared:[],doc:["returns ceiling of the passed number"]},$nm:"ceil"},sqrt:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"x"}]],$mt:"m",$an:{shared:[],doc:["returns the square root of a number"]},$nm:"sqrt"},random:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns a pseudo-random number between 0 and 1"]},$nm:"random"},round:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"x"}]],$mt:"m",$an:{shared:[],doc:["returns a number rounded to the nearest integer"]},$nm:"round"},log:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"x"}]],$mt:"m",$an:{shared:[],doc:["returns log of the number"]},$nm:"log"},exp:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"x"}]],$mt:"m",$an:{shared:[],doc:["returns the E^x"]},$nm:"exp"},atan2:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"y"},{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"x"}]],$mt:"m",$an:{shared:[],doc:["returns the arctangent of the quotient of y\/x"]},$nm:"atan2"},abs:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"x"}]],$mt:"m",$an:{shared:[],doc:["returns the absolute value of a number"]},$nm:"abs"},floor:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"x"}]],$mt:"m",$an:{shared:[],doc:["returns floor of the passed number"]},$nm:"floor"},sin:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"x"}]],$mt:"m",$an:{shared:[],doc:["returns the sine of a number"]},$nm:"sin"},tan:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"x"}]],$mt:"m",$an:{shared:[],doc:["returns the tangent a number"]},$nm:"tan"},acos:{$t:{$pk:".",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"JSNumber"},$mt:"prm",$nm:"x"}]],$mt:"m",$an:{shared:[],doc:["returns the arccosine value of a number"]},$nm:"acos"}},$nm:"MathAbs"},objectGetPrototypeOf:{$t:{$pk:".",$nm:"JSFunction"},$ps:[[{$t:{$pk:".",$nm:"JSObject"},$mt:"prm",$nm:"obj"}]],$mt:"m",$an:{shared:[],doc:["returns the objects prototype"]},$nm:"objectGetPrototypeOf"},createJSDateNow:{$t:{$pk:".",$nm:"JSDate"},$mt:"m",$an:{shared:[],doc:["create a native Date set to now"]},$nm:"createJSDateNow"},createJSArray:{$t:{$pk:".",$nm:"JSArray"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"arg"}]],$mt:"m",$an:{shared:[],doc:["crate a new native array"]},$nm:"createJSArray"},mathPi:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns pi"]},$nm:"mathPi"},mathE:{$t:{$pk:".",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns natural log"]},$nm:"mathE"}},"$mod-bin":"7.0"};
ex$.$CCMM$=function(){return $CCMM$;};
var m$1=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$1.$addmod$(m$1,'ceylon.language/1.1.0');
function createJSArray($2){
    /*Begin dynamic block*/
    return JSArray((typeof Array==='undefined'||Array===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Array"),'4:17-4:21','array.ceylon'):Array)($2));
    /*End dynamic block*/
}
ex$.createJSArray=createJSArray;
createJSArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSArray},$ps:[{$nm:'arg',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("crate a new native array"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSArray']};};
function arrayIsArray($3){
    /*Begin dynamic block*/
    if((typeof Array==='undefined'||Array===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Array"),'11:6-11:10','array.ceylon'):Array).isArray($3)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
ex$.arrayIsArray=arrayIsArray;
arrayIsArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'array',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("is the passed value a native array"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','arrayIsArray']};};
function JSArrayAbs(jSArrayAbs$){
    $init$JSArrayAbs();
    if(jSArrayAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    JSObjectAbs(jSArrayAbs$);
    return jSArrayAbs$;
}
JSArrayAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs']};};
ex$.JSArrayAbs=JSArrayAbs;
function $init$JSArrayAbs(){
    if(JSArrayAbs.$$===undefined){
        m$1.initTypeProto(JSArrayAbs,'com.openswimsoftware.ceylon.js.language::JSArrayAbs',$init$JSObjectAbs());
        (function(jSArrayAbs$){
            jSArrayAbs$.getLength=function getLength(){
                var jSArrayAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSArrayAbs$.$_native.length);
                /*End dynamic block*/
            };jSArrayAbs$.getLength.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSArrayAbs,$an:function(){return[m$1.doc("returns the length of the array"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','getLength']};};
            jSArrayAbs$.setLength=function setLength($4){
                var jSArrayAbs$=this;
                var $5=$4;
                if(m$1.is$($4,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    jSArrayAbs$.$_native.length=$5;
                    /*End dynamic block*/
                }else if(m$1.is$($4,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    jSArrayAbs$.$_native.length=$5.$_native;
                    /*End dynamic block*/
                }
            };jSArrayAbs$.setLength.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'len',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("set the length of the array"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','setLength']};};
            jSArrayAbs$.pop=function pop(){
                var jSArrayAbs$=this;
                /*Begin dynamic block*/
                return ($6=jSArrayAbs$.$_native.pop(),m$1.is$($6,{t:m$1.Anything})?$6:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'46:19-46:30','array.ceylon'));
                /*End dynamic block*/
            };jSArrayAbs$.pop.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:JSArrayAbs,$an:function(){return[m$1.doc("returns and remove the last element in the array"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','pop']};};
            jSArrayAbs$.$_push=function $_push($7){
                var jSArrayAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSArrayAbs$.$_native.push($7));
                /*End dynamic block*/
            };jSArrayAbs$.$_push.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'elements',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("returns length after adding one or more elements to the array"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','push']};};
            jSArrayAbs$.reverse=function reverse(){
                var jSArrayAbs$=this;
                /*Begin dynamic block*/
                jSArrayAbs$.$_native.reverse();
                /*End dynamic block*/
            };jSArrayAbs$.reverse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:JSArrayAbs,$an:function(){return[m$1.doc("reverse the order of the elements in the array"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','reverse']};};
            jSArrayAbs$.shift=function shift(){
                var jSArrayAbs$=this;
                /*Begin dynamic block*/
                return ($8=jSArrayAbs$.$_native.shift(),m$1.is$($8,{t:m$1.Anything})?$8:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'68:19-68:32','array.ceylon'));
                /*End dynamic block*/
            };jSArrayAbs$.shift.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:JSArrayAbs,$an:function(){return[m$1.doc("returns and remove the first element in the array"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','shift']};};
            jSArrayAbs$.sort=function sort(){
                var jSArrayAbs$=this;
                /*Begin dynamic block*/
                return JSArray(jSArrayAbs$.$_native.sort());
                /*End dynamic block*/
            };jSArrayAbs$.sort.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSArray},$ps:[],$cont:JSArrayAbs,$an:function(){return[m$1.doc("sort the items in lexicographic order"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','sort']};};
            jSArrayAbs$.sortCompare=function sortCompare($9){
                var jSArrayAbs$=this;
                /*Begin dynamic block*/
                return JSArray(jSArrayAbs$.$_native.sort($9));
                /*End dynamic block*/
            };jSArrayAbs$.sortCompare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSArray},$ps:[{$nm:'compare',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("sort the items using the compare function"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','sortCompare']};};
            jSArrayAbs$.splice=function splice($a,$b,$c){
                var jSArrayAbs$=this;
                if($c===undefined){$c=m$1.getEmpty();}
                var $d=$a;
                if(m$1.is$($a,{t:m$1.Integer})) {
                    var $e=$b;
                    if(m$1.is$($b,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray(JSFunction(jSArrayAbs$.$_native.splice).$_apply(null,(typeof createArray==='undefined'||createArray===null?m$1.throwexc(m$1.Exception("Undefined or null reference: createArray"),'94:67-94:77','array.ceylon'):createArray)($d,$e).concat($c).native));
                        /*End dynamic block*/
                    }else if(m$1.is$($b,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray(JSFunction(jSArrayAbs$.$_native.splice).$_apply(null,(typeof createArray==='undefined'||createArray===null?m$1.throwexc(m$1.Exception("Undefined or null reference: createArray"),'99:67-99:77','array.ceylon'):createArray)($d,$e.$_native).concat($c).native));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($a,{t:JSNumber})) {
                    var $f=$b;
                    if(m$1.is$($b,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray(JSFunction(jSArrayAbs$.$_native.splice).$_apply(null,(typeof createArray==='undefined'||createArray===null?m$1.throwexc(m$1.Exception("Undefined or null reference: createArray"),'107:73-107:83','array.ceylon'):createArray)($d.$_native,$f).concat($c).native));
                        /*End dynamic block*/
                    }else if(m$1.is$($b,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray(JSFunction(jSArrayAbs$.$_native.splice).$_apply(null,(typeof createArray==='undefined'||createArray===null?m$1.throwexc(m$1.Exception("Undefined or null reference: createArray"),'112:67-112:77','array.ceylon'):createArray)($d.$_native,$f.$_native).concat($c).native));
                        /*End dynamic block*/
                    }
                }
            };jSArrayAbs$.splice.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSArray},$ps:[{$nm:'index',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'howMany',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'elements',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("returns an array of removed elements after it adds new elements while removing old ones"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','splice']};};
            jSArrayAbs$.unshift=function unshift($g){
                var jSArrayAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSArrayAbs$.$_native.push.unshift(null,$g));
                /*End dynamic block*/
            };jSArrayAbs$.unshift.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'elements',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("returns length after adding elements to the front of the array"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','unshift']};};
            jSArrayAbs$.concat=function concat($h){
                var jSArrayAbs$=this;
                /*Begin dynamic block*/
                return JSArray(jSArrayAbs$.$_native.concat($h));
                /*End dynamic block*/
            };jSArrayAbs$.concat.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSArray},$ps:[{$nm:'elements',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("returns array after appending the elements"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','concat']};};
            jSArrayAbs$.concatArrays=function concatArrays($i){
                var jSArrayAbs$=this;
                if($i===undefined){$i=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JSArray(jSArrayAbs$.$_native.concat((function(){
                    var $j=[];
                    var $k=$i.iterator();
                    var $l;
                    while(($l=$k.next())!==m$1.getFinished()){
                        $j.push($l.$_native);
                    }
                    return m$1.ArraySequence($j,{Element$Sequential:'Element'});
                }())));
                /*End dynamic block*/
            };jSArrayAbs$.concatArrays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSArray},$ps:[{$nm:'arrays',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:JSArray}}},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("returns array after combining it with the passed arrays"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','concatArrays']};};
            jSArrayAbs$.join$defs$separator=function($m){return ",";};
            jSArrayAbs$.join=function join($m){
                var jSArrayAbs$=this;
                if($m===undefined){$m=jSArrayAbs$.join$defs$separator($m);}
                /*Begin dynamic block*/
                return JSString(jSArrayAbs$.$_native.join((typeof sparator==='undefined'||sparator===null?m$1.throwexc(m$1.Exception("Undefined or null reference: sparator"),'146:40-146:47','array.ceylon'):sparator)));
                /*End dynamic block*/
            };jSArrayAbs$.join.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[{$nm:'separator',$mt:'prm',$def:1,$t:{t:m$1.String},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("returns a string after joining all elements with separator"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','join']};};
            jSArrayAbs$.slice$defs$end=function($n,$o){return null;};
            jSArrayAbs$.slice=function slice($n,$o){
                var jSArrayAbs$=this;
                if($o===undefined){$o=jSArrayAbs$.slice$defs$end($n,$o);}
                var $p=$n;
                if(m$1.is$($n,{t:m$1.Integer})) {
                    var $q=$o;
                    if(m$1.is$($o,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray(jSArrayAbs$.$_native.slice($p,$q));
                        /*End dynamic block*/
                    }else if(m$1.is$($o,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray(jSArrayAbs$.$_native.slice($p,$q.$_native));
                        /*End dynamic block*/
                    }else if(m$1.is$($o,{t:m$1.Null})) {
                        /*Begin dynamic block*/
                        return JSArray(jSArrayAbs$.$_native.slice($p));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($n,{t:JSNumber})) {
                    var $r=$o;
                    if(m$1.is$($o,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray(jSArrayAbs$.$_native.slice($p.$_native,$r));
                        /*End dynamic block*/
                    }else if(m$1.is$($o,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray(jSArrayAbs$.$_native.slice($p.$_native,$r.$_native));
                        /*End dynamic block*/
                    }else if(m$1.is$($o,{t:m$1.Null})) {
                        /*Begin dynamic block*/
                        return JSArray(jSArrayAbs$.$_native.slice($p.$_native));
                        /*End dynamic block*/
                    }
                }
            };jSArrayAbs$.slice.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSArray},$ps:[{$nm:'begin',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'end',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("returns shallow copy of portion of the array"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','slice']};};
            jSArrayAbs$.indexOf$defs$fromIndex=function($s,$t){return null;};
            jSArrayAbs$.indexOf=function indexOf($s,$t){
                var jSArrayAbs$=this;
                if($t===undefined){$t=jSArrayAbs$.indexOf$defs$fromIndex($s,$t);}
                /*Begin dynamic block*/
                return JSNumber(jSArrayAbs$.$_native.indexOf($s,$t));
                /*End dynamic block*/
            };jSArrayAbs$.indexOf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'searchElement',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("returns the first index of the element in the array or -1"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','indexOf']};};
            jSArrayAbs$.lastIndexOf$defs$fromIndex=function($u,$v){return null;};
            jSArrayAbs$.lastIndexOf=function lastIndexOf($u,$v){
                var jSArrayAbs$=this;
                if($v===undefined){$v=jSArrayAbs$.lastIndexOf$defs$fromIndex($u,$v);}
                var $w=$v;
                if(m$1.is$($v,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    return JSNumber(jSArrayAbs$.$_native.indexOf($u,$w));
                    /*End dynamic block*/
                }else if(m$1.is$($v,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber(jSArrayAbs$.$_native.indexOf($u,$w.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($v,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber(jSArrayAbs$.$_native.indexOf($u));
                    /*End dynamic block*/
                }
            };jSArrayAbs$.lastIndexOf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'searchElement',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("returns the last index of the element in the array or -1"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','lastIndexOf']};};
            jSArrayAbs$.forEach$defs$context=function($x,$y){return null;};
            jSArrayAbs$.forEach=function forEach($x,$y){
                var jSArrayAbs$=this;
                if($y===undefined){$y=jSArrayAbs$.forEach$defs$context($x,$y);}
                /*Begin dynamic block*/
                jSArrayAbs$.$_native.forEach($x,$y);
                /*End dynamic block*/
            };jSArrayAbs$.forEach.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("executes the callback for each element in the array"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','forEach']};};
            jSArrayAbs$.every$defs$context=function($z,$10){return null;};
            jSArrayAbs$.every=function every($z,$10){
                var jSArrayAbs$=this;
                if($10===undefined){$10=jSArrayAbs$.every$defs$context($z,$10);}
                /*Begin dynamic block*/
                if(jSArrayAbs$.$_native.every($z,$10)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jSArrayAbs$.every.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("tests if all elements in the array pass the callback test"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','every']};};
            jSArrayAbs$.some$defs$context=function($11,$12){return null;};
            jSArrayAbs$.some=function some($11,$12){
                var jSArrayAbs$=this;
                if($12===undefined){$12=jSArrayAbs$.some$defs$context($11,$12);}
                /*Begin dynamic block*/
                if(jSArrayAbs$.$_native.some($11,$12)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jSArrayAbs$.some.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("tests if some elements in the array pass the callback test"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','some']};};
            jSArrayAbs$.filter$defs$context=function($13,$14){return null;};
            jSArrayAbs$.filter=function filter($13,$14){
                var jSArrayAbs$=this;
                if($14===undefined){$14=jSArrayAbs$.filter$defs$context($13,$14);}
                /*Begin dynamic block*/
                return JSArray(jSArrayAbs$.$_native.filter($13,$14));
                /*End dynamic block*/
            };jSArrayAbs$.filter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSArray},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("returns an array of elements which pass the callback test"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','filter']};};
            jSArrayAbs$.map$defs$context=function($15,$16){return null;};
            jSArrayAbs$.map=function map($15,$16){
                var jSArrayAbs$=this;
                if($16===undefined){$16=jSArrayAbs$.map$defs$context($15,$16);}
                /*Begin dynamic block*/
                return JSArray(jSArrayAbs$.$_native.map($15,$16));
                /*End dynamic block*/
            };jSArrayAbs$.map.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSArray},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("returns an array of the elements returned from the callback"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','map']};};
            jSArrayAbs$.reduce$defs$initialValue=function($17,$18){return null;};
            jSArrayAbs$.reduce=function reduce($17,$18){
                var jSArrayAbs$=this;
                if($18===undefined){$18=jSArrayAbs$.reduce$defs$initialValue($17,$18);}
                /*Begin dynamic block*/
                return JSArray(jSArrayAbs$.$_native.reduce($17,$18));
                /*End dynamic block*/
            };jSArrayAbs$.reduce.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'initialValue',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("returns a single value after looping over the array left to right combining two values each time"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','reduce']};};
            jSArrayAbs$.reduceRight$defs$initialValue=function($19,$1a){return null;};
            jSArrayAbs$.reduceRight=function reduceRight($19,$1a){
                var jSArrayAbs$=this;
                if($1a===undefined){$1a=jSArrayAbs$.reduceRight$defs$initialValue($19,$1a);}
                /*Begin dynamic block*/
                return JSArray(jSArrayAbs$.$_native.reduceRight($19,$1a));
                /*End dynamic block*/
            };jSArrayAbs$.reduceRight.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'initialValue',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JSArrayAbs,$an:function(){return[m$1.doc("returns a single value after looping over the array right to left combining two values each time"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArrayAbs','$m','reduceRight']};};
        })(JSArrayAbs.$$.prototype);
    }
    return JSArrayAbs;
}
ex$.$init$JSArrayAbs=$init$JSArrayAbs;
$init$JSArrayAbs();
function JSArray($1b,jSArray$){
    $init$JSArray();
    if(jSArray$===undefined)jSArray$=new JSArray.$$;
    jSArray$.$1b_=$1b;
    JSArrayAbs(jSArray$);
    jSArray$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSArray,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','JSArray','$at','native']};}};
    /*Begin dynamic block*/
    jSArray$.$_native=jSArray$.$1b;/*End dynamic block*/
    return jSArray$;
}
JSArray.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JSArrayAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("native Array"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSArray']};};
ex$.JSArray=JSArray;
function $init$JSArray(){
    if(JSArray.$$===undefined){
        m$1.initTypeProto(JSArray,'com.openswimsoftware.ceylon.js.language::JSArray',$init$JSArrayAbs());
        (function(jSArray$){
            m$1.atr$(jSArray$,'$1b',function(){return this.$1b_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSArray,d:['com.openswimsoftware.ceylon.js.language','JSArray','$at','n$c8n002']};});
        })(JSArray.$$.prototype);
    }
    return JSArray;
}
ex$.$init$JSArray=$init$JSArray;
$init$JSArray();
function createJSDateNow(){
    /*Begin dynamic block*/
    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'4:16-4:19','date.ceylon'):Date)());
    /*End dynamic block*/
}
ex$.createJSDateNow=createJSDateNow;
createJSDateNow.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSDate},$ps:[],$an:function(){return[m$1.doc("create a native Date set to now"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSDateNow']};};
function createJSDate($1c){
    /*Begin dynamic block*/
    var $1d=$1c;
    if(m$1.is$($1c,{t:'u',l:[{t:m$1.String},{t:m$1.Integer}]})) {
        return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'13:17-13:20','date.ceylon'):Date)($1d));
    }else if(m$1.is$($1c,{t:JSNumber})) {
        return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'16:17-16:20','date.ceylon'):Date)($1d.$_native));
    }/*End dynamic block*/
}
ex$.createJSDate=createJSDate;
createJSDate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSDate},$ps:[{$nm:'val',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("create a native Date set to now"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSDate']};};
function createJSDateYMD($1e,$1f,$1g,$1h,$1i,$1j,$1k){
    if($1h===undefined){$1h=null;}
    if($1i===undefined){$1i=null;}
    if($1j===undefined){$1j=null;}
    if($1k===undefined){$1k=null;}
    var $1l=$1h;
    if(m$1.is$($1h,{t:JSNumber})) {
        var $1m=$1i;
        if(m$1.is$($1i,{t:JSNumber})) {
            var $1n=$1j;
            if(m$1.is$($1j,{t:JSNumber})) {
                var $1o=$1k;
                if(m$1.is$($1k,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'33:20-33:23','date.ceylon'):Date)($1e.$_native,$1f.$_native,$1g.$_native,$1l.$_native,$1m.$_native,$1n.$_native,$1o.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($1k,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'38:20-38:23','date.ceylon'):Date)($1e.$_native,$1f.$_native,$1g.$_native,$1l.$_native,$1m.$_native,$1n.$_native));
                    /*End dynamic block*/
                }
            }else if(m$1.is$($1j,{t:m$1.Null})) {
                var $1p=$1k;
                if(m$1.is$($1k,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'46:20-46:23','date.ceylon'):Date)($1e.$_native,$1f.$_native,$1g.$_native,$1l.$_native,$1m.$_native,null,$1p.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($1k,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'51:20-51:23','date.ceylon'):Date)($1e.$_native,$1f.$_native,$1g.$_native,$1l.$_native,$1m.$_native));
                    /*End dynamic block*/
                }
            }
        }else if(m$1.is$($1i,{t:m$1.Null})) {
            var $1q=$1j;
            if(m$1.is$($1j,{t:JSNumber})) {
                var $1r=$1k;
                if(m$1.is$($1k,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'62:20-62:23','date.ceylon'):Date)($1e.$_native,$1f.$_native,$1g.$_native,null,null,$1q.$_native,$1r.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($1k,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'67:20-67:23','date.ceylon'):Date)($1e.$_native,$1f.$_native,$1g.$_native,null,null,$1q.$_native));
                    /*End dynamic block*/
                }
            }else if(m$1.is$($1j,{t:m$1.Null})) {
                var $1s=$1k;
                if(m$1.is$($1k,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'75:20-75:23','date.ceylon'):Date)($1e.$_native,$1f.$_native,$1g.$_native,null,null,null,$1s.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($1k,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'80:20-80:23','date.ceylon'):Date)($1e.$_native,$1f.$_native,$1g.$_native));
                    /*End dynamic block*/
                }
            }
        }
    }else if(m$1.is$($1h,{t:m$1.Null})) {
        var $1t=$1i;
        if(m$1.is$($1i,{t:JSNumber})) {
            var $1u=$1j;
            if(m$1.is$($1j,{t:JSNumber})) {
                var $1v=$1k;
                if(m$1.is$($1k,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'94:20-94:23','date.ceylon'):Date)($1e.$_native,$1f.$_native,$1g.$_native,null,$1t.$_native,$1u.$_native,$1v.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($1k,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'99:20-99:23','date.ceylon'):Date)($1e.$_native,$1f.$_native,$1g.$_native,null,$1t.$_native,$1u.$_native));
                    /*End dynamic block*/
                }
            }else if(m$1.is$($1j,{t:m$1.Null})) {
                var $1w=$1k;
                if(m$1.is$($1k,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'107:20-107:23','date.ceylon'):Date)($1e.$_native,$1f.$_native,$1g.$_native,null,$1t.$_native,null,$1w.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($1k,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'112:20-112:23','date.ceylon'):Date)($1e.$_native,$1f.$_native,$1g.$_native,null,$1t.$_native));
                    /*End dynamic block*/
                }
            }
        }else if(m$1.is$($1i,{t:m$1.Null})) {
            var $1x=$1j;
            if(m$1.is$($1j,{t:JSNumber})) {
                var $1y=$1k;
                if(m$1.is$($1k,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'123:20-123:23','date.ceylon'):Date)($1e.$_native,$1f.$_native,$1g.$_native,null,null,$1x.$_native,$1y.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($1k,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'128:20-128:23','date.ceylon'):Date)($1e.$_native,$1f.$_native,$1g.$_native,null,null,$1x.$_native));
                    /*End dynamic block*/
                }
            }else if(m$1.is$($1j,{t:m$1.Null})) {
                var $1z=$1k;
                if(m$1.is$($1k,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'136:20-136:23','date.ceylon'):Date)($1e.$_native,$1f.$_native,$1g.$_native,null,null,null,$1z.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($1k,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'141:20-141:23','date.ceylon'):Date)($1e.$_native,$1f.$_native,$1g.$_native));
                    /*End dynamic block*/
                }
            }
        }
    }
}
ex$.createJSDateYMD=createJSDateYMD;
createJSDateYMD.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSDate},$ps:[{$nm:'year',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'minute',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'second',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'milli',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:JSNumber}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("create a native date at the given date time"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSDateYMD']};};
function createJSDateYMDInt($20,$21,$22,$23,$24,$25,$26){
    if($23===undefined){$23=null;}
    if($24===undefined){$24=null;}
    if($25===undefined){$25=null;}
    if($26===undefined){$26=null;}
    /*Begin dynamic block*/
    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'153:16-153:19','date.ceylon'):Date)($20,$21,$22,$23,$24,$25,$26));
    /*End dynamic block*/
}
ex$.createJSDateYMDInt=createJSDateYMDInt;
createJSDateYMDInt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSDate},$ps:[{$nm:'year',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$an:function(){return[];}},{$nm:'minute',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$an:function(){return[];}},{$nm:'second',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$an:function(){return[];}},{$nm:'milli',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("create a native date at the given date time"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSDateYMDInt']};};
function dateNow(){
    /*Begin dynamic block*/
    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'160:18-160:21','date.ceylon'):Date).now());
    /*End dynamic block*/
}
ex$.dateNow=dateNow;
dateNow.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$an:function(){return[m$1.doc("returns now as a unix timestamp"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','dateNow']};};
function dateParse($27){
    var $28=$27;
    if(m$1.is$($27,{t:m$1.String})) {
        /*Begin dynamic block*/
        return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'169:19-169:22','date.ceylon'):Date).parse($28.valueOf()));
        /*End dynamic block*/
    }else if(m$1.is$($27,{t:JSString})) {
        /*Begin dynamic block*/
        return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'174:19-174:22','date.ceylon'):Date).parse($28.$_native));
        /*End dynamic block*/
    }
}
ex$.dateParse=dateParse;
dateParse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'dateTime',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JSString}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("returns the given date string as a unix timestamp"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','dateParse']};};
function dateUTC($29,$2a,$2b,$2c,$2d,$2e,$2f){
    if($2c===undefined){$2c=null;}
    if($2d===undefined){$2d=null;}
    if($2e===undefined){$2e=null;}
    if($2f===undefined){$2f=null;}
    var $2g=$2c;
    if(m$1.is$($2c,{t:JSNumber})) {
        var $2h=$2d;
        if(m$1.is$($2d,{t:JSNumber})) {
            var $2i=$2e;
            if(m$1.is$($2e,{t:JSNumber})) {
                var $2j=$2f;
                if(m$1.is$($2f,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'191:22-191:25','date.ceylon'):Date).UTC($29.$_native,$2a.$_native,$2b.$_native,$2g.$_native,$2h.$_native,$2i.$_native,$2j.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($2f,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'196:22-196:25','date.ceylon'):Date).UTC($29.$_native,$2a.$_native,$2b.$_native,$2g.$_native,$2h.$_native,$2i.$_native));
                    /*End dynamic block*/
                }
            }else if(m$1.is$($2e,{t:m$1.Null})) {
                var $2k=$2f;
                if(m$1.is$($2f,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'204:22-204:25','date.ceylon'):Date).UTC($29.$_native,$2a.$_native,$2b.$_native,$2g.$_native,$2h.$_native,null,$2k.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($2f,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'209:22-209:25','date.ceylon'):Date).UTC($29.$_native,$2a.$_native,$2b.$_native,$2g.$_native,$2h.$_native));
                    /*End dynamic block*/
                }
            }
        }else if(m$1.is$($2d,{t:m$1.Null})) {
            var $2l=$2e;
            if(m$1.is$($2e,{t:JSNumber})) {
                var $2m=$2f;
                if(m$1.is$($2f,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'220:22-220:25','date.ceylon'):Date).UTC($29.$_native,$2a.$_native,$2b.$_native,null,null,$2l.$_native,$2m.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($2f,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'225:22-225:25','date.ceylon'):Date).UTC($29.$_native,$2a.$_native,$2b.$_native,null,null,$2l.$_native));
                    /*End dynamic block*/
                }
            }else if(m$1.is$($2e,{t:m$1.Null})) {
                var $2n=$2f;
                if(m$1.is$($2f,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'233:22-233:25','date.ceylon'):Date).UTC($29.$_native,$2a.$_native,$2b.$_native,null,null,null,$2n.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($2f,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'238:22-238:25','date.ceylon'):Date).UTC($29.$_native,$2a.$_native,$2b.$_native));
                    /*End dynamic block*/
                }
            }
        }
    }else if(m$1.is$($2c,{t:m$1.Null})) {
        var $2o=$2d;
        if(m$1.is$($2d,{t:JSNumber})) {
            var $2p=$2e;
            if(m$1.is$($2e,{t:JSNumber})) {
                var $2q=$2f;
                if(m$1.is$($2f,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'252:22-252:25','date.ceylon'):Date).UTC($29.$_native,$2a.$_native,$2b.$_native,null,$2o.$_native,$2p.$_native,$2q.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($2f,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'257:22-257:25','date.ceylon'):Date).UTC($29.$_native,$2a.$_native,$2b.$_native,null,$2o.$_native,$2p.$_native));
                    /*End dynamic block*/
                }
            }else if(m$1.is$($2e,{t:m$1.Null})) {
                var $2r=$2f;
                if(m$1.is$($2f,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'265:22-265:25','date.ceylon'):Date).UTC($29.$_native,$2a.$_native,$2b.$_native,null,$2o.$_native,null,$2r.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($2f,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'270:22-270:25','date.ceylon'):Date).UTC($29.$_native,$2a.$_native,$2b.$_native,null,$2o.$_native));
                    /*End dynamic block*/
                }
            }
        }else if(m$1.is$($2d,{t:m$1.Null})) {
            var $2s=$2e;
            if(m$1.is$($2e,{t:JSNumber})) {
                var $2t=$2f;
                if(m$1.is$($2f,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'281:22-281:25','date.ceylon'):Date).UTC($29.$_native,$2a.$_native,$2b.$_native,null,null,$2s.$_native,$2t.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($2f,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'286:22-286:25','date.ceylon'):Date).UTC($29.$_native,$2a.$_native,$2b.$_native,null,null,$2s.$_native));
                    /*End dynamic block*/
                }
            }else if(m$1.is$($2e,{t:m$1.Null})) {
                var $2u=$2f;
                if(m$1.is$($2f,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'294:22-294:25','date.ceylon'):Date).UTC($29.$_native,$2a.$_native,$2b.$_native,null,null,null,$2u.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($2f,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'299:22-299:25','date.ceylon'):Date).UTC($29.$_native,$2a.$_native,$2b.$_native));
                    /*End dynamic block*/
                }
            }
        }
    }
}
ex$.dateUTC=dateUTC;
dateUTC.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'year',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'minute',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'second',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:JSNumber}]},$an:function(){return[];}},{$nm:'milli',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:JSNumber}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("returns the given date string as a unix timestamp"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','dateUTC']};};
function dateUTCInt($2v,$2w,$2x,$2y,$2z,$30,$31){
    if($2y===undefined){$2y=null;}
    if($2z===undefined){$2z=null;}
    if($30===undefined){$30=null;}
    if($31===undefined){$31=null;}
    /*Begin dynamic block*/
    return JSDate((typeof Date==='undefined'||Date===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Date"),'311:16-311:19','date.ceylon'):Date).UTC($2v,$2w,$2x,$2y,$2z,$30,$31));
    /*End dynamic block*/
}
ex$.dateUTCInt=dateUTCInt;
dateUTCInt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSDate},$ps:[{$nm:'year',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$an:function(){return[];}},{$nm:'minute',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$an:function(){return[];}},{$nm:'second',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$an:function(){return[];}},{$nm:'milli',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("returns the given date string as a native Date"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','dateUTCInt']};};
function JSDateAbs(jSDateAbs$){
    $init$JSDateAbs();
    if(jSDateAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    JSObjectAbs(jSDateAbs$);
    return jSDateAbs$;
}
JSDateAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs']};};
ex$.JSDateAbs=JSDateAbs;
function $init$JSDateAbs(){
    if(JSDateAbs.$$===undefined){
        m$1.initTypeProto(JSDateAbs,'com.openswimsoftware.ceylon.js.language::JSDateAbs',$init$JSObjectAbs());
        (function(jSDateAbs$){
            jSDateAbs$.getDate=function getDate(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getDate());
                /*End dynamic block*/
            };jSDateAbs$.getDate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the day of the month"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getDate']};};
            jSDateAbs$.getDay=function getDay(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getDay());
                /*End dynamic block*/
            };jSDateAbs$.getDay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the day of the week"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getDay']};};
            jSDateAbs$.getFullYear=function getFullYear(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getFullYear());
                /*End dynamic block*/
            };jSDateAbs$.getFullYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the year"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getFullYear']};};
            jSDateAbs$.getHours=function getHours(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getHours());
                /*End dynamic block*/
            };jSDateAbs$.getHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the hour"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getHours']};};
            jSDateAbs$.getMilliseconds=function getMilliseconds(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getMilliseconds());
                /*End dynamic block*/
            };jSDateAbs$.getMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the milliseconds"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getMilliseconds']};};
            jSDateAbs$.getMinutes=function getMinutes(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getMinutes());
                /*End dynamic block*/
            };jSDateAbs$.getMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the minutes"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getMinutes']};};
            jSDateAbs$.getMonth=function getMonth(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getMonth());
                /*End dynamic block*/
            };jSDateAbs$.getMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the month"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getMonth']};};
            jSDateAbs$.getSeconds=function getSeconds(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getSeconds());
                /*End dynamic block*/
            };jSDateAbs$.getSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the seconds"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getSeconds']};};
            jSDateAbs$.getTime=function getTime(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getTime());
                /*End dynamic block*/
            };jSDateAbs$.getTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns unix timestamp"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getTime']};};
            jSDateAbs$.getTimezoneOffset=function getTimezoneOffset(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getTimezoneOffset());
                /*End dynamic block*/
            };jSDateAbs$.getTimezoneOffset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the timezone offset"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getTimezoneOffset']};};
            jSDateAbs$.getUTCDate=function getUTCDate(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getUTCDate());
                /*End dynamic block*/
            };jSDateAbs$.getUTCDate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the day of the month in UTC"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getUTCDate']};};
            jSDateAbs$.getUTCDay=function getUTCDay(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getUTCDay());
                /*End dynamic block*/
            };jSDateAbs$.getUTCDay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the day of the week in UTC"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getUTCDay']};};
            jSDateAbs$.getUTCFullYear=function getUTCFullYear(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getUTCFullYear());
                /*End dynamic block*/
            };jSDateAbs$.getUTCFullYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the year in UTC"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getUTCFullYear']};};
            jSDateAbs$.getUTCHours=function getUTCHours(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getUTCHours());
                /*End dynamic block*/
            };jSDateAbs$.getUTCHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the hour in UTC"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getUTCHours']};};
            jSDateAbs$.getUTCMilliseconds=function getUTCMilliseconds(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getUTCMilliseconds());
                /*End dynamic block*/
            };jSDateAbs$.getUTCMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the milliseconds in UTC"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getUTCMilliseconds']};};
            jSDateAbs$.getUTCMinutes=function getUTCMinutes(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getUTCMinutes());
                /*End dynamic block*/
            };jSDateAbs$.getUTCMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the minutes in UTC"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getUTCMinutes']};};
            jSDateAbs$.getUTCMonth=function getUTCMonth(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getUTCMonth());
                /*End dynamic block*/
            };jSDateAbs$.getUTCMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the month in UTC"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getUTCMonth']};};
            jSDateAbs$.getUTCSeconds=function getUTCSeconds(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSDateAbs$.$_native.getUTCSeconds());
                /*End dynamic block*/
            };jSDateAbs$.getUTCSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the seconds in UTC"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','getUTCSeconds']};};
            jSDateAbs$.setDate=function setDate($32){
                var jSDateAbs$=this;
                var $33=$32;
                if(m$1.is$($32,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setDate($33);
                    /*End dynamic block*/
                }else if(m$1.is$($32,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setDate($33.$_native);
                    /*End dynamic block*/
                }
            };jSDateAbs$.setDate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'day',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[m$1.doc("set the day of the month"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setDate']};};
            jSDateAbs$.setFullYear=function setFullYear($34){
                var jSDateAbs$=this;
                var $35=$34;
                if(m$1.is$($34,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setFullYear($35);
                    /*End dynamic block*/
                }else if(m$1.is$($34,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setFullYear($35.$_native);
                    /*End dynamic block*/
                }
            };jSDateAbs$.setFullYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'year',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[m$1.doc("set the year"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setFullYear']};};
            jSDateAbs$.setHours=function setHours($36){
                var jSDateAbs$=this;
                var $37=$36;
                if(m$1.is$($36,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setHours($37);
                    /*End dynamic block*/
                }else if(m$1.is$($36,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setHours($37.$_native);
                    /*End dynamic block*/
                }
            };jSDateAbs$.setHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'hour',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[m$1.doc("set the hour"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setHours']};};
            jSDateAbs$.setMilliseconds=function setMilliseconds($38){
                var jSDateAbs$=this;
                var $39=$38;
                if(m$1.is$($38,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setMilliseconds($39);
                    /*End dynamic block*/
                }else if(m$1.is$($38,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setMilliseconds($39.$_native);
                    /*End dynamic block*/
                }
            };jSDateAbs$.setMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'milli',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[m$1.doc("set the milliseconds"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setMilliseconds']};};
            jSDateAbs$.setMinutes=function setMinutes($3a){
                var jSDateAbs$=this;
                var $3b=$3a;
                if(m$1.is$($3a,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setMinutes($3b);
                    /*End dynamic block*/
                }else if(m$1.is$($3a,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setMinutes($3b.$_native);
                    /*End dynamic block*/
                }
            };jSDateAbs$.setMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[m$1.doc("set the minutes"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setMinutes']};};
            jSDateAbs$.setMonth=function setMonth($3c){
                var jSDateAbs$=this;
                var $3d=$3c;
                if(m$1.is$($3c,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setMonth($3d);
                    /*End dynamic block*/
                }else if(m$1.is$($3c,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setMonth($3d.$_native);
                    /*End dynamic block*/
                }
            };jSDateAbs$.setMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'month',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[m$1.doc("set the month"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setMonth']};};
            jSDateAbs$.setSeconds=function setSeconds($3e){
                var jSDateAbs$=this;
                var $3f=$3e;
                if(m$1.is$($3e,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setSeconds($3f);
                    /*End dynamic block*/
                }else if(m$1.is$($3e,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setSeconds($3f.$_native);
                    /*End dynamic block*/
                }
            };jSDateAbs$.setSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[m$1.doc("set the seconds"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setSeconds']};};
            jSDateAbs$.setTime=function setTime($3g){
                var jSDateAbs$=this;
                var $3h=$3g;
                if(m$1.is$($3g,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setTime($3h);
                    /*End dynamic block*/
                }else if(m$1.is$($3g,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setTime($3h.$_native);
                    /*End dynamic block*/
                }
            };jSDateAbs$.setTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'milli',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[m$1.doc("set the time as unix timestamp"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setTime']};};
            jSDateAbs$.setUTCDate=function setUTCDate($3i){
                var jSDateAbs$=this;
                var $3j=$3i;
                if(m$1.is$($3i,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setUTCDate($3j);
                    /*End dynamic block*/
                }else if(m$1.is$($3i,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setUTCDate($3j.$_native);
                    /*End dynamic block*/
                }
            };jSDateAbs$.setUTCDate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'day',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[m$1.doc("set the day of the month UTC"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setUTCDate']};};
            jSDateAbs$.setUTCFullYear=function setUTCFullYear($3k){
                var jSDateAbs$=this;
                var $3l=$3k;
                if(m$1.is$($3k,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setUTCFullYear($3l);
                    /*End dynamic block*/
                }else if(m$1.is$($3k,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setUTCFullYear($3l.$_native);
                    /*End dynamic block*/
                }
            };jSDateAbs$.setUTCFullYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'year',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[m$1.doc("set the year UTC"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setUTCFullYear']};};
            jSDateAbs$.setUTCHours=function setUTCHours($3m){
                var jSDateAbs$=this;
                var $3n=$3m;
                if(m$1.is$($3m,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setUTCHours($3n);
                    /*End dynamic block*/
                }else if(m$1.is$($3m,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setUTCHours($3n.$_native);
                    /*End dynamic block*/
                }
            };jSDateAbs$.setUTCHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'hours',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[m$1.doc("set the hours UTC"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setUTCHours']};};
            jSDateAbs$.setUTCMilliseconds=function setUTCMilliseconds($3o){
                var jSDateAbs$=this;
                var $3p=$3o;
                if(m$1.is$($3o,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setUTCMilliseconds($3p);
                    /*End dynamic block*/
                }else if(m$1.is$($3o,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setUTCMilliseconds($3p.$_native);
                    /*End dynamic block*/
                }
            };jSDateAbs$.setUTCMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'milli',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[m$1.doc("set the milliseconds UTC"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setUTCMilliseconds']};};
            jSDateAbs$.setUTCMinutes=function setUTCMinutes($3q){
                var jSDateAbs$=this;
                var $3r=$3q;
                if(m$1.is$($3q,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setUTCMinutes($3r);
                    /*End dynamic block*/
                }else if(m$1.is$($3q,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setUTCMinutes($3r.$_native);
                    /*End dynamic block*/
                }
            };jSDateAbs$.setUTCMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[m$1.doc("set the minutes UTC"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setUTCMinutes']};};
            jSDateAbs$.setUTCMonth=function setUTCMonth($3s){
                var jSDateAbs$=this;
                var $3t=$3s;
                if(m$1.is$($3s,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setUTCMonth($3t);
                    /*End dynamic block*/
                }else if(m$1.is$($3s,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setUTCMonth($3t.$_native);
                    /*End dynamic block*/
                }
            };jSDateAbs$.setUTCMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'month',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[m$1.doc("set the month UTC"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setUTCMonth']};};
            jSDateAbs$.setUTCSeconds=function setUTCSeconds($3u){
                var jSDateAbs$=this;
                var $3v=$3u;
                if(m$1.is$($3u,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setUTCSeconds($3v);
                    /*End dynamic block*/
                }else if(m$1.is$($3u,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    jSDateAbs$.$_native.setUTCSeconds($3v.$_native);
                    /*End dynamic block*/
                }
            };jSDateAbs$.setUTCSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSDateAbs,$an:function(){return[m$1.doc("set the seconds UTC"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','setUTCSeconds']};};
            jSDateAbs$.toDateString=function toDateString(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSString(jSDateAbs$.$_native.toDateString());
                /*End dynamic block*/
            };jSDateAbs$.toDateString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the date as a string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','toDateString']};};
            jSDateAbs$.toISOString=function toISOString(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSString(jSDateAbs$.$_native.toISOString());
                /*End dynamic block*/
            };jSDateAbs$.toISOString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the date as a ISO string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','toISOString']};};
            jSDateAbs$.toJSON=function toJSON(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSString(jSDateAbs$.$_native.toJSON());
                /*End dynamic block*/
            };jSDateAbs$.toJSON.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the date as a JSON string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','toJSON']};};
            jSDateAbs$.toLocaleDateString=function toLocaleDateString(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSString(jSDateAbs$.$_native.toLocaleDateString());
                /*End dynamic block*/
            };jSDateAbs$.toLocaleDateString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the date as a language sensitive string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','toLocaleDateString']};};
            jSDateAbs$.toLocaleString=function toLocaleString(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSString(jSDateAbs$.$_native.toLocaleString());
                /*End dynamic block*/
            };jSDateAbs$.toLocaleString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the date as a language sensitive string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','toLocaleString']};};
            jSDateAbs$.toLocaleTimeString=function toLocaleTimeString(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSString(jSDateAbs$.$_native.toLocaleTimeString());
                /*End dynamic block*/
            };jSDateAbs$.toLocaleTimeString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the time as a language sensitive string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','toLocaleTimeString']};};
            jSDateAbs$.toTimeString=function toTimeString(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSString(jSDateAbs$.$_native.toTimeString());
                /*End dynamic block*/
            };jSDateAbs$.toTimeString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the time a string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','toTimeString']};};
            jSDateAbs$.toUTCString=function toUTCString(){
                var jSDateAbs$=this;
                /*Begin dynamic block*/
                return JSString(jSDateAbs$.$_native.toUTCString());
                /*End dynamic block*/
            };jSDateAbs$.toUTCString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[],$cont:JSDateAbs,$an:function(){return[m$1.doc("returns the time a UTC string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDateAbs','$m','toUTCString']};};
        })(JSDateAbs.$$.prototype);
    }
    return JSDateAbs;
}
ex$.$init$JSDateAbs=$init$JSDateAbs;
$init$JSDateAbs();
function JSDate($3w,jSDate$){
    $init$JSDate();
    if(jSDate$===undefined)jSDate$=new JSDate.$$;
    jSDate$.$3w_=$3w;
    JSDateAbs(jSDate$);
    jSDate$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSDate,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','JSDate','$at','native']};}};
    /*Begin dynamic block*/
    jSDate$.$_native=jSDate$.$3w;/*End dynamic block*/
    return jSDate$;
}
JSDate.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JSDateAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("native Date"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSDate']};};
ex$.JSDate=JSDate;
function $init$JSDate(){
    if(JSDate.$$===undefined){
        m$1.initTypeProto(JSDate,'com.openswimsoftware.ceylon.js.language::JSDate',$init$JSDateAbs());
        (function(jSDate$){
            m$1.atr$(jSDate$,'$3w',function(){return this.$3w_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSDate,d:['com.openswimsoftware.ceylon.js.language','JSDate','$at','n$y53sjn']};});
        })(JSDate.$$.prototype);
    }
    return JSDate;
}
ex$.$init$JSDate=$init$JSDate;
$init$JSDate();
function JSFunctionAbs(jSFunctionAbs$){
    $init$JSFunctionAbs();
    if(jSFunctionAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    JSObjectAbs(jSFunctionAbs$);
    return jSFunctionAbs$;
}
JSFunctionAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','JSFunctionAbs']};};
ex$.JSFunctionAbs=JSFunctionAbs;
function $init$JSFunctionAbs(){
    if(JSFunctionAbs.$$===undefined){
        m$1.initTypeProto(JSFunctionAbs,'com.openswimsoftware.ceylon.js.language::JSFunctionAbs',$init$JSObjectAbs());
        (function(jSFunctionAbs$){
            jSFunctionAbs$.length=function length(){
                var jSFunctionAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSFunctionAbs$.$_native.length);
                /*End dynamic block*/
            };jSFunctionAbs$.length.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSFunctionAbs,$an:function(){return[m$1.doc("returns number of arguments exepcted buy the function"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSFunctionAbs','$m','length']};};
            jSFunctionAbs$.$_bind=function $_bind($3x,$3y){
                var jSFunctionAbs$=this;
                if($3y===undefined){$3y=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JSFunction(jSFunctionAbs$.$_native.bind.apply(null,createJSArray($3x.$_native).concat((function(){
                    var $3z=[];
                    var $40=$3y.iterator();
                    var $41;
                    while(($41=$40.next())!==m$1.getFinished()){
                        $3z.push($41.$_native);
                    }
                    return m$1.ArraySequence($3z,{Element$Sequential:'Element'});
                }())).native));
                /*End dynamic block*/
            };jSFunctionAbs$.$_bind.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSFunction},$ps:[{$nm:'thisArg',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:JSObject}}},$an:function(){return[];}}],$cont:JSFunctionAbs,$an:function(){return[m$1.doc("returns a new function with thisArg as the this element and a set of args to prepend when the target function is called"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSFunctionAbs','$m','bind']};};
            jSFunctionAbs$.isGenerator=function isGenerator(){
                var jSFunctionAbs$=this;
                /*Begin dynamic block*/
                if(jSFunctionAbs$.$_native.isGenerator()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jSFunctionAbs$.isGenerator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:JSFunctionAbs,$an:function(){return[m$1.doc("is the function a generator"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSFunctionAbs','$m','isGenerator']};};
        })(JSFunctionAbs.$$.prototype);
    }
    return JSFunctionAbs;
}
ex$.$init$JSFunctionAbs=$init$JSFunctionAbs;
$init$JSFunctionAbs();
function JSFunction($42,jSFunction$){
    $init$JSFunction();
    if(jSFunction$===undefined)jSFunction$=new JSFunction.$$;
    jSFunction$.$42_=$42;
    JSFunctionAbs(jSFunction$);
    jSFunction$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSFunction,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','JSFunction','$at','native']};}};
    /*Begin dynamic block*/
    jSFunction$.$_native=jSFunction$.$42;/*End dynamic block*/
    return jSFunction$;
}
JSFunction.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JSFunctionAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("native Function"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSFunction']};};
ex$.JSFunction=JSFunction;
function $init$JSFunction(){
    if(JSFunction.$$===undefined){
        m$1.initTypeProto(JSFunction,'com.openswimsoftware.ceylon.js.language::JSFunction',$init$JSFunctionAbs());
        (function(jSFunction$){
            m$1.atr$(jSFunction$,'$42',function(){return this.$42_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSFunction,d:['com.openswimsoftware.ceylon.js.language','JSFunction','$at','n$7n72kp']};});
        })(JSFunction.$$.prototype);
    }
    return JSFunction;
}
ex$.$init$JSFunction=$init$JSFunction;
$init$JSFunction();
function eval($43){
    /*Begin dynamic block*/
    return ($44=eval($43),m$1.is$($44,{t:m$1.Anything})?$44:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'3:9-3:16','main.ceylon'));
    /*End dynamic block*/
}
ex$.eval=eval;
eval.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'js',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JSString}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','eval']};};
function isFinite($45){
    /*Begin dynamic block*/
    if(isFinite(($46=$45.$_native,m$1.is$($46,{t:JSNumber})?$46:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'9:15-9:24','main.ceylon')))){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
ex$.isFinite=isFinite;
isFinite.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'num',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','isFinite']};};
function isNaN($47){
    /*Begin dynamic block*/
    if(isNaN($47)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
ex$.isNaN=isNaN;
isNaN.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'val',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','isNaN']};};
function parseInt($48,$49){
    if($49===undefined){$49=(10);}
    var $4a=$49;
    if(m$1.is$($49,{t:m$1.Integer})) {
        /*Begin dynamic block*/
        return JSNumber(parseInt($48,$4a));
        /*End dynamic block*/
    }else if(m$1.is$($49,{t:JSNumber})) {
        /*Begin dynamic block*/
        return JSNumber(parseInt($48,($4b=$4a.$_native,m$1.is$($4b,{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]})?$4b:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'36:33-36:44','main.ceylon'))));
        /*End dynamic block*/
    }
}
ex$.parseInt=parseInt;
parseInt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'int',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JSString}]},$an:function(){return[];}},{$nm:'radix',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','parseInt']};};
function parseFloat($4c){
    var $4d=$4c;
    if(m$1.is$($4c,{t:m$1.String})) {
        /*Begin dynamic block*/
        return JSNumber(parseFloat($4d));
        /*End dynamic block*/
    }else if(m$1.is$($4c,{t:JSString})) {
        /*Begin dynamic block*/
        return JSNumber(parseFloat(($4e=$4d.$_native,m$1.is$($4e,{t:'u',l:[{t:m$1.String},{t:JSString}]})?$4e:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'50:30-50:41','main.ceylon'))));
        /*End dynamic block*/
    }
}
ex$.parseFloat=parseFloat;
parseFloat.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'float',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JSString}]},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','parseFloat']};};
function mathE(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'6:18-6:21','math.ceylon'):Math).E);
    /*End dynamic block*/
}
ex$.mathE=mathE;
mathE.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$an:function(){return[m$1.doc("returns natural log"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','mathE']};};
function mathLog2(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'13:18-13:21','math.ceylon'):Math).LN2);
    /*End dynamic block*/
}
ex$.mathLog2=mathLog2;
mathLog2.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$an:function(){return[m$1.doc("returns log of 2"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','mathLog2']};};
function mathLog10(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'20:18-20:21','math.ceylon'):Math).LN10);
    /*End dynamic block*/
}
ex$.mathLog10=mathLog10;
mathLog10.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$an:function(){return[m$1.doc("returns log of 10"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','mathLog10']};};
function mathLog2e(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'27:18-27:21','math.ceylon'):Math).LOG2E);
    /*End dynamic block*/
}
ex$.mathLog2e=mathLog2e;
mathLog2e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$an:function(){return[m$1.doc("returns natural log of 2"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','mathLog2e']};};
function mathLog10e(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'34:18-34:21','math.ceylon'):Math).LOG10E);
    /*End dynamic block*/
}
ex$.mathLog10e=mathLog10e;
mathLog10e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$an:function(){return[m$1.doc("returns natural log of 10"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','mathLog10e']};};
function mathPi(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'41:18-41:21','math.ceylon'):Math).PI);
    /*End dynamic block*/
}
ex$.mathPi=mathPi;
mathPi.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$an:function(){return[m$1.doc("returns pi"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','mathPi']};};
function mathRoot1_2(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'48:18-48:21','math.ceylon'):Math).SQRT1_2);
    /*End dynamic block*/
}
ex$.mathRoot1_2=mathRoot1_2;
mathRoot1_2.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$an:function(){return[m$1.doc("returns square root of 1/2"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','mathRoot1_2']};};
function mathRoot2(){
    /*Begin dynamic block*/
    return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'55:18-55:21','math.ceylon'):Math).SQRT2);
    /*End dynamic block*/
}
ex$.mathRoot2=mathRoot2;
mathRoot2.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$an:function(){return[m$1.doc("returns square root of 2"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','mathRoot2']};};
function MathAbs(mathAbs$){
    $init$MathAbs();
    if(mathAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    JSObjectAbs(mathAbs$);
    return mathAbs$;
}
MathAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs']};};
ex$.MathAbs=MathAbs;
function $init$MathAbs(){
    if(MathAbs.$$===undefined){
        m$1.initTypeProto(MathAbs,'com.openswimsoftware.ceylon.js.language::MathAbs',$init$JSObjectAbs());
        (function(mathAbs$){
            mathAbs$.abs=function abs($4f){
                var mathAbs$=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'64:19-64:22','math.ceylon'):Math).abs($4f.$_native));
                /*End dynamic block*/
            };mathAbs$.abs.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns the absolute value of a number"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','abs']};};
            mathAbs$.acos=function acos($4g){
                var mathAbs$=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'71:19-71:22','math.ceylon'):Math).acos($4g.$_native));
                /*End dynamic block*/
            };mathAbs$.acos.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns the arccosine value of a number"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','acos']};};
            mathAbs$.asin=function asin($4h){
                var mathAbs$=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'78:19-78:22','math.ceylon'):Math).asin($4h.$_native));
                /*End dynamic block*/
            };mathAbs$.asin.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns the arcsine value of a number"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','asin']};};
            mathAbs$.atan=function atan($4i){
                var mathAbs$=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'85:19-85:22','math.ceylon'):Math).asin($4i.$_native));
                /*End dynamic block*/
            };mathAbs$.atan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns the arctangent value of a number"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','atan']};};
            mathAbs$.atan2=function atan2($4j,$4k){
                var mathAbs$=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'92:19-92:22','math.ceylon'):Math).atan2($4j.$_native,$4k.$_native));
                /*End dynamic block*/
            };mathAbs$.atan2.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'y',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns the arctangent of the quotient of y/x"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','atan2']};};
            mathAbs$.ceil=function ceil($4l){
                var mathAbs$=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'99:19-99:22','math.ceylon'):Math).ceil($4l.$_native));
                /*End dynamic block*/
            };mathAbs$.ceil.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns ceiling of the passed number"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','ceil']};};
            mathAbs$.cos=function cos($4m){
                var mathAbs$=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'106:19-106:22','math.ceylon'):Math).cos($4m.$_native));
                /*End dynamic block*/
            };mathAbs$.cos.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns the cosine of a number"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','cos']};};
            mathAbs$.exp=function exp($4n){
                var mathAbs$=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'113:19-113:22','math.ceylon'):Math).exp($4n.$_native));
                /*End dynamic block*/
            };mathAbs$.exp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns the E^x"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','exp']};};
            mathAbs$.floor=function floor($4o){
                var mathAbs$=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'120:19-120:22','math.ceylon'):Math).floor($4o.$_native));
                /*End dynamic block*/
            };mathAbs$.floor.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns floor of the passed number"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','floor']};};
            mathAbs$.log=function log($4p){
                var mathAbs$=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'127:19-127:22','math.ceylon'):Math).log($4p.$_native));
                /*End dynamic block*/
            };mathAbs$.log.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns log of the number"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','log']};};
            mathAbs$.max=function max($4q){
                var mathAbs$=this;
                if($4q===undefined){$4q=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JSNumber(JSFunction((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'135:30-135:33','math.ceylon'):Math).max).$_apply(null,(function(){
                    var $4r=[];
                    var $4s=$4q.iterator();
                    var $4t;
                    while(($4t=$4s.next())!==m$1.getFinished()){
                        $4r.push($4t.$_native);
                    }
                    return m$1.ArraySequence($4r,{Element$Sequential:'Element'});
                }())));
                /*End dynamic block*/
            };mathAbs$.max.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'numbers',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:JSNumber}}},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns the max of the passed numbers"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','max']};};
            mathAbs$.min=function min($4u){
                var mathAbs$=this;
                if($4u===undefined){$4u=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JSNumber(JSFunction((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'143:30-143:33','math.ceylon'):Math).min).$_apply(null,(function(){
                    var $4v=[];
                    var $4w=$4u.iterator();
                    var $4x;
                    while(($4x=$4w.next())!==m$1.getFinished()){
                        $4v.push($4x.$_native);
                    }
                    return m$1.ArraySequence($4v,{Element$Sequential:'Element'});
                }())));
                /*End dynamic block*/
            };mathAbs$.min.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'numbers',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:JSNumber}}},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns the min of the passed numbers"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','min']};};
            mathAbs$.pow=function pow($4y,$4z){
                var mathAbs$=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'150:19-150:22','math.ceylon'):Math).pow($4y,$4z));
                /*End dynamic block*/
            };mathAbs$.pow.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'base',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}},{$nm:'exponent',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns the base^exponent"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','pow']};};
            mathAbs$.random=function random(){
                var mathAbs$=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'157:19-157:22','math.ceylon'):Math).random());
                /*End dynamic block*/
            };mathAbs$.random.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:MathAbs,$an:function(){return[m$1.doc("returns a pseudo-random number between 0 and 1"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','random']};};
            mathAbs$.round=function round($50){
                var mathAbs$=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'164:19-164:22','math.ceylon'):Math).round($50));
                /*End dynamic block*/
            };mathAbs$.round.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns a number rounded to the nearest integer"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','round']};};
            mathAbs$.sin=function sin($51){
                var mathAbs$=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'171:19-171:22','math.ceylon'):Math).sin($51));
                /*End dynamic block*/
            };mathAbs$.sin.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns the sine of a number"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','sin']};};
            mathAbs$.sqrt=function sqrt($52){
                var mathAbs$=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'178:19-178:22','math.ceylon'):Math).sqrt($52));
                /*End dynamic block*/
            };mathAbs$.sqrt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns the square root of a number"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','sqrt']};};
            mathAbs$.tan=function tan($53){
                var mathAbs$=this;
                /*Begin dynamic block*/
                return JSNumber((typeof Math==='undefined'||Math===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Math"),'185:19-185:22','math.ceylon'):Math).tan($53));
                /*End dynamic block*/
            };mathAbs$.tan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'x',$mt:'prm',$t:{t:JSNumber},$an:function(){return[];}}],$cont:MathAbs,$an:function(){return[m$1.doc("returns the tangent a number"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','MathAbs','$m','tan']};};
        })(MathAbs.$$.prototype);
    }
    return MathAbs;
}
ex$.$init$MathAbs=$init$MathAbs;
$init$MathAbs();
function Math($54,math$){
    $init$Math();
    if(math$===undefined)math$=new Math.$$;
    math$.$54_=$54;
    MathAbs(math$);
    math$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Math,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','Math','$at','native']};}};
    /*Begin dynamic block*/
    math$.$_native=math$.$54;/*End dynamic block*/
    return math$;
}
Math.$crtmm$=function(){return{mod:$CCMM$,'super':{t:MathAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("native Math"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','Math']};};
ex$.Math=Math;
function $init$Math(){
    if(Math.$$===undefined){
        m$1.initTypeProto(Math,'com.openswimsoftware.ceylon.js.language::Math',$init$MathAbs());
        (function(math$){
            m$1.atr$(math$,'$54',function(){return this.$54_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Math,d:['com.openswimsoftware.ceylon.js.language','Math','$at','n$rs7cru']};});
        })(Math.$$.prototype);
    }
    return Math;
}
ex$.$init$Math=$init$Math;
$init$Math();
ex$.$mod$ans$=function(){return[m$1.doc("JavaScript 1.8.5")];};
function createJSNumber($55){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Number"),'4:18-4:23','number.ceylon'):Number)($55));
    /*End dynamic block*/
}
ex$.createJSNumber=createJSNumber;
createJSNumber.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'val',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Float},{t:m$1.String}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("creates a new native number"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSNumber']};};
function numberMaxValue(){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Number"),'11:18-11:23','number.ceylon'):Number).MAX_VALUE);
    /*End dynamic block*/
}
ex$.numberMaxValue=numberMaxValue;
numberMaxValue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$an:function(){return[m$1.doc("returns the max possible number"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','numberMaxValue']};};
function numberMinValue(){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Number"),'18:18-18:23','number.ceylon'):Number).MIN_VALUE);
    /*End dynamic block*/
}
ex$.numberMinValue=numberMinValue;
numberMinValue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$an:function(){return[m$1.doc("returns the min possible number"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','numberMinValue']};};
function numberNegativeInfinity(){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Number"),'25:18-25:23','number.ceylon'):Number).NEGATIVE_INFINITY);
    /*End dynamic block*/
}
ex$.numberNegativeInfinity=numberNegativeInfinity;
numberNegativeInfinity.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$an:function(){return[m$1.doc("returns negative infinity"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','numberNegativeInfinity']};};
function numberPositiveInfinity(){
    /*Begin dynamic block*/
    return JSNumber((typeof Number==='undefined'||Number===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Number"),'32:18-32:23','number.ceylon'):Number).POSITIVE_INFINITY);
    /*End dynamic block*/
}
ex$.numberPositiveInfinity=numberPositiveInfinity;
numberPositiveInfinity.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$an:function(){return[m$1.doc("returns positive infinity"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','numberPositiveInfinity']};};
function JSNumberAbs(jSNumberAbs$){
    $init$JSNumberAbs();
    if(jSNumberAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    JSObjectAbs(jSNumberAbs$);
    return jSNumberAbs$;
}
JSNumberAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','JSNumberAbs']};};
ex$.JSNumberAbs=JSNumberAbs;
function $init$JSNumberAbs(){
    if(JSNumberAbs.$$===undefined){
        m$1.initTypeProto(JSNumberAbs,'com.openswimsoftware.ceylon.js.language::JSNumberAbs',$init$JSObjectAbs());
        (function(jSNumberAbs$){
            jSNumberAbs$.toExponential$defs$fractionDigits=function($56){return null;};
            jSNumberAbs$.toExponential=function toExponential($56){
                var jSNumberAbs$=this;
                if($56===undefined){$56=jSNumberAbs$.toExponential$defs$fractionDigits($56);}
                var $57=$56;
                if(m$1.is$($56,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    return JSString(jSNumberAbs$.$_native.toExponential($57));
                    /*End dynamic block*/
                }else if(m$1.is$($56,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSString(jSNumberAbs$.$_native.toExponential($57.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($56,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSString(jSNumberAbs$.$_native.toExponential());
                    /*End dynamic block*/
                }
            };jSNumberAbs$.toExponential.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[{$nm:'fractionDigits',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSNumberAbs,$an:function(){return[m$1.doc("returns a string representing the number in exponential notation"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSNumberAbs','$m','toExponential']};};
            jSNumberAbs$.toFixed$defs$digits=function($58){return 0;};
            jSNumberAbs$.toFixed=function toFixed($58){
                var jSNumberAbs$=this;
                if($58===undefined){$58=jSNumberAbs$.toFixed$defs$digits($58);}
                var $59=$58;
                if(m$1.is$($58,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    return JSString(jSNumberAbs$.$_native.toFixed($59));
                    /*End dynamic block*/
                }else if(m$1.is$($58,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSString(jSNumberAbs$.$_native.toFixed($59.$_native));
                    /*End dynamic block*/
                }
            };jSNumberAbs$.toFixed.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[{$nm:'digits',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSNumberAbs,$an:function(){return[m$1.doc("returns a string representing the number in fixed-point notation"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSNumberAbs','$m','toFixed']};};
            jSNumberAbs$.toPrecision$defs$precision=function($5a){return null;};
            jSNumberAbs$.toPrecision=function toPrecision($5a){
                var jSNumberAbs$=this;
                if($5a===undefined){$5a=jSNumberAbs$.toPrecision$defs$precision($5a);}
                var $5b=$5a;
                if(m$1.is$($5a,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    return JSString(jSNumberAbs$.$_native.toPrecision($5b));
                    /*End dynamic block*/
                }else if(m$1.is$($5a,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSString(jSNumberAbs$.$_native.toPrecision($5b.$_native));
                    /*End dynamic block*/
                }else if(m$1.is$($5a,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSString(jSNumberAbs$.$_native.toPrecision());
                    /*End dynamic block*/
                }
            };jSNumberAbs$.toPrecision.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[{$nm:'precision',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSNumberAbs,$an:function(){return[m$1.doc("returns a string representing the number in a specified precision in fixed-point or exponential notation"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSNumberAbs','$m','toPrecision']};};
        })(JSNumberAbs.$$.prototype);
    }
    return JSNumberAbs;
}
ex$.$init$JSNumberAbs=$init$JSNumberAbs;
$init$JSNumberAbs();
function JSNumber($5c,jSNumber$){
    $init$JSNumber();
    if(jSNumber$===undefined)jSNumber$=new JSNumber.$$;
    jSNumber$.$5c_=$5c;
    JSNumberAbs(jSNumber$);
    jSNumber$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSNumber,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','JSNumber','$at','native']};}};
    /*Begin dynamic block*/
    jSNumber$.$_native=jSNumber$.$5c;/*End dynamic block*/
    return jSNumber$;
}
JSNumber.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JSNumberAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("native Number"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSNumber']};};
ex$.JSNumber=JSNumber;
function $init$JSNumber(){
    if(JSNumber.$$===undefined){
        m$1.initTypeProto(JSNumber,'com.openswimsoftware.ceylon.js.language::JSNumber',$init$JSNumberAbs());
        (function(jSNumber$){
            m$1.atr$(jSNumber$,'$5c',function(){return this.$5c_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSNumber,d:['com.openswimsoftware.ceylon.js.language','JSNumber','$at','n$x6cqmo']};});
        })(JSNumber.$$.prototype);
    }
    return JSNumber;
}
ex$.$init$JSNumber=$init$JSNumber;
$init$JSNumber();
function PropertyDescriptor(propertyDescriptor$){
    $init$PropertyDescriptor();
    if(propertyDescriptor$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    return propertyDescriptor$;
}
PropertyDescriptor.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[],$an:function(){return[m$1.doc("describes a new object property"),m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','PropertyDescriptor']};};
ex$.PropertyDescriptor=PropertyDescriptor;
function $init$PropertyDescriptor(){
    if(PropertyDescriptor.$$===undefined){
        m$1.initTypeProto(PropertyDescriptor,'com.openswimsoftware.ceylon.js.language::PropertyDescriptor',m$1.Basic);
        (function(propertyDescriptor$){
            propertyDescriptor$.$prop$getConfigurable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:PropertyDescriptor,$an:function(){return[m$1.shared(),m$1.formal()];},d:['com.openswimsoftware.ceylon.js.language','PropertyDescriptor','$at','configurable']};}};
            propertyDescriptor$.$prop$getDescriptor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:PropertyDescriptor,$an:function(){return[m$1.shared(),m$1.formal()];},d:['com.openswimsoftware.ceylon.js.language','PropertyDescriptor','$at','descriptor']};}};
            propertyDescriptor$.$prop$getEnumerable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:PropertyDescriptor,$an:function(){return[m$1.shared(),m$1.formal()];},d:['com.openswimsoftware.ceylon.js.language','PropertyDescriptor','$at','enumerable']};}};
            propertyDescriptor$.toNative={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:JSObject},$ps:[],$cont:PropertyDescriptor,$an:function(){return[m$1.shared(),m$1.formal()];},d:['com.openswimsoftware.ceylon.js.language','PropertyDescriptor','$m','toNative']};}};
        })(PropertyDescriptor.$$.prototype);
    }
    return PropertyDescriptor;
}
ex$.$init$PropertyDescriptor=$init$PropertyDescriptor;
$init$PropertyDescriptor();
function DataDescriptor(configurable,descriptor,enumerable,writable,val,dataDescriptor$){
    $init$DataDescriptor();
    if(dataDescriptor$===undefined)dataDescriptor$=new DataDescriptor.$$;
    if(configurable===undefined){configurable=false;}
    dataDescriptor$.configurable_=configurable;
    if(descriptor===undefined){descriptor=false;}
    dataDescriptor$.descriptor_=descriptor;
    if(enumerable===undefined){enumerable=false;}
    dataDescriptor$.enumerable_=enumerable;
    if(writable===undefined){writable=false;}
    dataDescriptor$.writable_=writable;
    if(val===undefined){val=null;}
    dataDescriptor$.val_=val;
    PropertyDescriptor(dataDescriptor$);
    return dataDescriptor$;
}
DataDescriptor.$crtmm$=function(){return{mod:$CCMM$,'super':{t:PropertyDescriptor},$ps:[{$nm:'configurable',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared(),m$1.actual()];}},{$nm:'descriptor',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared(),m$1.actual()];}},{$nm:'enumerable',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared(),m$1.actual()];}},{$nm:'writable',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared()];}},{$nm:'val',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.doc("describes a new object data property"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','DataDescriptor']};};
ex$.DataDescriptor=DataDescriptor;
function $init$DataDescriptor(){
    if(DataDescriptor.$$===undefined){
        m$1.initTypeProto(DataDescriptor,'com.openswimsoftware.ceylon.js.language::DataDescriptor',$init$PropertyDescriptor());
        (function(dataDescriptor$){
            dataDescriptor$.toNative=function toNative(){
                var dataDescriptor$=this;
                var $5d=createJSObject();
                /*Begin dynamic block*/
                $5d.$_native.configurable=dataDescriptor$.configurable;
                $5d.$_native.descriptor=dataDescriptor$.descriptor;
                $5d.$_native.enumerable=dataDescriptor$.enumerable;
                $5d.$_native.writable=dataDescriptor$.writable;
                $5d.$_native.value=dataDescriptor$.val;
                /*End dynamic block*/
                return $5d;
            };dataDescriptor$.toNative.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSObject},$ps:[],$cont:DataDescriptor,$an:function(){return[m$1.doc("converts the options to native JSON"),m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','DataDescriptor','$m','toNative']};};
            m$1.atr$(dataDescriptor$,'configurable',function(){return this.configurable_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:DataDescriptor,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','DataDescriptor','$at','configurable']};});
            m$1.atr$(dataDescriptor$,'descriptor',function(){return this.descriptor_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:DataDescriptor,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','DataDescriptor','$at','descriptor']};});
            m$1.atr$(dataDescriptor$,'enumerable',function(){return this.enumerable_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:DataDescriptor,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','DataDescriptor','$at','enumerable']};});
            m$1.atr$(dataDescriptor$,'writable',function(){return this.writable_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:DataDescriptor,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','DataDescriptor','$at','writable']};});
            m$1.atr$(dataDescriptor$,'val',function(){return this.val_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:DataDescriptor,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','DataDescriptor','$at','val']};});
        })(DataDescriptor.$$.prototype);
    }
    return DataDescriptor;
}
ex$.$init$DataDescriptor=$init$DataDescriptor;
$init$DataDescriptor();
function AccessorDescriptor(configurable,descriptor,enumerable,$_get,set,accessorDescriptor$){
    $init$AccessorDescriptor();
    if(accessorDescriptor$===undefined)accessorDescriptor$=new AccessorDescriptor.$$;
    accessorDescriptor$.configurable_=configurable;
    if(descriptor===undefined){descriptor=false;}
    accessorDescriptor$.descriptor_=descriptor;
    if(enumerable===undefined){enumerable=false;}
    accessorDescriptor$.enumerable_=enumerable;
    if($_get===undefined){$_get=null;}
    accessorDescriptor$.$_get_=$_get;
    if(set===undefined){set=null;}
    accessorDescriptor$.set_=set;
    PropertyDescriptor(accessorDescriptor$);
    return accessorDescriptor$;
}
AccessorDescriptor.$crtmm$=function(){return{mod:$CCMM$,'super':{t:PropertyDescriptor},$ps:[{$nm:'configurable',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared(),m$1.actual()];}},{$nm:'descriptor',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared(),m$1.actual()];}},{$nm:'enumerable',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared(),m$1.actual()];}},{$nm:'get',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]},$an:function(){return[m$1.shared()];}},{$nm:'set',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.doc("describes a new object accessor property"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','AccessorDescriptor']};};
ex$.AccessorDescriptor=AccessorDescriptor;
function $init$AccessorDescriptor(){
    if(AccessorDescriptor.$$===undefined){
        m$1.initTypeProto(AccessorDescriptor,'com.openswimsoftware.ceylon.js.language::AccessorDescriptor',$init$PropertyDescriptor());
        (function(accessorDescriptor$){
            accessorDescriptor$.toNative=function toNative(){
                var accessorDescriptor$=this;
                var $5e=createJSObject();
                /*Begin dynamic block*/
                $5e.$_native.configurable=accessorDescriptor$.configurable;
                $5e.$_native.descriptor=accessorDescriptor$.descriptor;
                $5e.$_native.enumerable=accessorDescriptor$.enumerable;
                var $5f;
                if(($5f=accessorDescriptor$.$_get)!==null&&$5f!==undefined){
                    $5e.$_native.get=$5f;
                }var $5g;
                if(($5g=accessorDescriptor$.set)!==null&&$5g!==undefined){
                    $5e.$_native.set=$5g;
                }/*End dynamic block*/
                return $5e;
            };accessorDescriptor$.toNative.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSObject},$ps:[],$cont:AccessorDescriptor,$an:function(){return[m$1.doc("converts the options to native JSON"),m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','AccessorDescriptor','$m','toNative']};};
            m$1.atr$(accessorDescriptor$,'configurable',function(){return this.configurable_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:AccessorDescriptor,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','AccessorDescriptor','$at','configurable']};});
            m$1.atr$(accessorDescriptor$,'descriptor',function(){return this.descriptor_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:AccessorDescriptor,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','AccessorDescriptor','$at','descriptor']};});
            m$1.atr$(accessorDescriptor$,'enumerable',function(){return this.enumerable_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:AccessorDescriptor,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','AccessorDescriptor','$at','enumerable']};});
            m$1.atr$(accessorDescriptor$,'$_get',function(){return this.$_get_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}]},$cont:AccessorDescriptor,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','AccessorDescriptor','$at','get']};});
            m$1.atr$(accessorDescriptor$,'set',function(){return this.set_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{$t:{t:m$1.Anything}}]}}}]},$cont:AccessorDescriptor,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','AccessorDescriptor','$at','set']};});
        })(AccessorDescriptor.$$.prototype);
    }
    return AccessorDescriptor;
}
ex$.$init$AccessorDescriptor=$init$AccessorDescriptor;
$init$AccessorDescriptor();
function objectCreate($5h,$5i){
    var $5j=createJSObject();
    /*Begin dynamic block*/
    var $5l;for(var $5k=$5i.iterator();($5l=$5k.next())!==m$1.getFinished();){
        var $5m=$5l.key,$5n=$5l.item;
        objectDefineProperty($5j,$5m,$5n);
    }return JSObject((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'61:18-61:23','object.ceylon'):Object).create($5h.$_native,$5j));
    /*End dynamic block*/
}
ex$.objectCreate=objectCreate;
objectCreate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSObject},$ps:[{$nm:'proto',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:'u',l:[{t:DataDescriptor},{t:AccessorDescriptor}]},Key$Entry:{t:m$1.String}}}}},$an:function(){return[];}}],$an:function(){return[m$1.doc("create a new native object"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectCreate']};};
function objectDefineProperty($5o,$5p,$5q){
    var $5r=$5p;
    if(m$1.is$($5p,{t:m$1.String})) {
        /*Begin dynamic block*/
        (typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'70:3-70:8','object.ceylon'):Object).defineProperty($5o.$_native,$5r.valueOf(),$5q.toNative().$_native);
        /*End dynamic block*/
    }else if(m$1.is$($5p,{t:JSString})) {
        /*Begin dynamic block*/
        (typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'75:3-75:8','object.ceylon'):Object).defineProperty($5o.$_native,$5r.$_native,$5q.toNative().$_native);
        /*End dynamic block*/
    }
}
ex$.objectDefineProperty=objectDefineProperty;
objectDefineProperty.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'prop',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JSString}]},$an:function(){return[];}},{$nm:'descriptor',$mt:'prm',$t:{t:'u',l:[{t:DataDescriptor},{t:AccessorDescriptor}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("define a property on a native object"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectDefineProperty']};};
function defineProperties($5s,$5t){
    var $5u=createJSObject();
    /*Begin dynamic block*/
    var $5w;for(var $5v=$5t.iterator();($5w=$5v.next())!==m$1.getFinished();){
        var $5x=$5w.key,$5y=$5w.item;
        objectDefineProperty($5u,$5x,$5y);
    }return JSObject((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'87:18-87:23','object.ceylon'):Object).defineProperties($5s.$_native,$5u));
    /*End dynamic block*/
}
ex$.defineProperties=defineProperties;
defineProperties.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Entry,a:{Item$Entry:{t:'u',l:[{t:DataDescriptor},{t:AccessorDescriptor}]},Key$Entry:{t:m$1.String}}}}},$an:function(){return[];}}],$an:function(){return[m$1.doc("define properties on a native object"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','defineProperties']};};
function objectGetOwnPropertyDescriptor($5z,$60){
    var $61;
    var $62=$60;
    if(m$1.is$($60,{t:m$1.String})) {
        /*Begin dynamic block*/
        $61=JSObject((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'97:25-97:30','object.ceylon'):Object).objectGetOwnPropertyDescriptor($5z,$62.valueOf()));/*End dynamic block*/
    }else if(m$1.is$($60,{t:JSString})) {
        /*Begin dynamic block*/
        $61=JSObject((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'102:25-102:30','object.ceylon'):Object).objectGetOwnPropertyDescriptor($5z,$62.$_native));/*End dynamic block*/
    }
    return $61;
}
ex$.objectGetOwnPropertyDescriptor=objectGetOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}},{$nm:'prop',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JSString}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("get the discriptor of a object property"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectGetOwnPropertyDescriptor']};};
function objectKeys($63){
    /*Begin dynamic block*/
    return JSArray((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'111:17-111:22','object.ceylon'):Object).keys($63));
    /*End dynamic block*/
}
ex$.objectKeys=objectKeys;
objectKeys.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSArray},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[m$1.doc("returns an array of object enumerable properties"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectKeys']};};
function objectGetOwnPropertyNames($64){
    /*Begin dynamic block*/
    return JSArray((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'118:17-118:22','object.ceylon'):Object).getOwnPropertyNames($64.$_native));
    /*End dynamic block*/
}
ex$.objectGetOwnPropertyNames=objectGetOwnPropertyNames;
objectGetOwnPropertyNames.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSArray},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[m$1.doc("returns an array of object properties"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectGetOwnPropertyNames']};};
function objectGetPrototypeOf($65){
    /*Begin dynamic block*/
    return JSFunction((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'125:20-125:25','object.ceylon'):Object).getPrototypeOf($65.$_native));
    /*End dynamic block*/
}
ex$.objectGetPrototypeOf=objectGetPrototypeOf;
objectGetPrototypeOf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSFunction},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[m$1.doc("returns the objects prototype"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectGetPrototypeOf']};};
function objectPreventExtensions($66){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'132:18-132:23','object.ceylon'):Object).preventExtensions($66.$_native));
    /*End dynamic block*/
}
ex$.objectPreventExtensions=objectPreventExtensions;
objectPreventExtensions.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[m$1.doc("prevents new properties from being added to the object"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectPreventExtensions']};};
function objectIsExtensible($67){
    /*Begin dynamic block*/
    if((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'139:6-139:11','object.ceylon'):Object).isExtensible($67.$_native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
ex$.objectIsExtensible=objectIsExtensible;
objectIsExtensible.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[m$1.doc("can new properties be added to the object"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectIsExtensible']};};
function objectSeal($68){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'150:18-150:23','object.ceylon'):Object).seal($68.$_native));
    /*End dynamic block*/
}
ex$.objectSeal=objectSeal;
objectSeal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[m$1.doc("prevents properties from being added to or removed from the object"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectSeal']};};
function objectIsSealed($69){
    /*Begin dynamic block*/
    if((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'157:6-157:11','object.ceylon'):Object).isSealed($69.$_native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
ex$.objectIsSealed=objectIsSealed;
objectIsSealed.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[m$1.doc("can properties be added to or removed from the object"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectIsSealed']};};
function objectFreeze($6a){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'168:18-168:23','object.ceylon'):Object).freeze($6a.$_native));
    /*End dynamic block*/
}
ex$.objectFreeze=objectFreeze;
objectFreeze.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[m$1.doc("stops the object being altered in any way"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectFreeze']};};
function objectIsFrozen($6b){
    /*Begin dynamic block*/
    if((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'175:6-175:11','object.ceylon'):Object).isFrozen($6b.$_native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
ex$.objectIsFrozen=objectIsFrozen;
objectIsFrozen.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$an:function(){return[m$1.doc("can the object being altered in any way"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','objectIsFrozen']};};
function createJSObject(){
    /*Begin dynamic block*/
    return JSObject((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'186:18-186:23','object.ceylon'):Object)());
    /*End dynamic block*/
}
ex$.createJSObject=createJSObject;
createJSObject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSObject},$ps:[],$an:function(){return[m$1.doc("create a new native object"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSObject']};};
function JSObjectAbs(jSObjectAbs$){
    $init$JSObjectAbs();
    if(jSObjectAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    return jSObjectAbs$;
}
JSObjectAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs']};};
ex$.JSObjectAbs=JSObjectAbs;
function $init$JSObjectAbs(){
    if(JSObjectAbs.$$===undefined){
        m$1.initTypeProto(JSObjectAbs,'com.openswimsoftware.ceylon.js.language::JSObjectAbs',m$1.Basic);
        (function(jSObjectAbs$){
            jSObjectAbs$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSObjectAbs,$an:function(){return[m$1.shared(),m$1.formal()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$at','native']};}};
            jSObjectAbs$.getPrototype=function getPrototype(){
                var jSObjectAbs$=this;
                /*Begin dynamic block*/
                return JSObject(jSObjectAbs$.$_native.prototype);
                /*End dynamic block*/
            };jSObjectAbs$.getPrototype.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSObject},$ps:[],$cont:JSObjectAbs,$an:function(){return[m$1.doc("returns the objects prototype"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','getPrototype']};};
            jSObjectAbs$.setPrototype=function setPrototype($6c){
                var jSObjectAbs$=this;
                /*Begin dynamic block*/
                jSObjectAbs$.$_native.prototype=$6c.$_native;
                /*End dynamic block*/
            };jSObjectAbs$.setPrototype.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'prototype',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[m$1.doc("sets the objects prototype"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','setPrototype']};};
            jSObjectAbs$.getConstructor=function getConstructor(){
                var jSObjectAbs$=this;
                /*Begin dynamic block*/
                return ($6d=($6e=jSObjectAbs$.$_native.constructor,$6f=(typeof Function==='undefined'?m$1.throwexc(m$1.Exception("Undefined type Function"),'210:10-210:17','object.ceylon'):Function),$6f.$$===undefined?new $6f($6e):$6f($6e)),m$1.is$($6d,{t:m$1.Anything})?$6d:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'210:10-210:37','object.ceylon'));
                /*End dynamic block*/
            };jSObjectAbs$.getConstructor.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSFunction},$ps:[],$cont:JSObjectAbs,$an:function(){return[m$1.doc("returns the objects contructor"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','getConstructor']};};
            jSObjectAbs$.setConstructor=function setConstructor($6g){
                var jSObjectAbs$=this;
                /*Begin dynamic block*/
                jSObjectAbs$.$_native.constructor=$6g.$_native;
                /*End dynamic block*/
            };jSObjectAbs$.setConstructor.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'constructor',$mt:'prm',$t:{t:JSFunction},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[m$1.doc("sets the objects contructor"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','setConstructor']};};
            jSObjectAbs$.hasOwnProperty=function hasOwnProperty($6h){
                var jSObjectAbs$=this;
                var $6i;
                var $6j=$6h;
                if(m$1.is$($6h,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    $6i=jSObjectAbs$.$_native.hasOwnProperty($6j.valueOf());/*End dynamic block*/
                }else if(m$1.is$($6h,{t:JSString})) {
                    /*Begin dynamic block*/
                    $6i=jSObjectAbs$.$_native.hasOwnProperty($6j.$_native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if($6i){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jSObjectAbs$.hasOwnProperty.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'prop',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JSString}]},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[m$1.doc("does the object have the propery"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','hasOwnProperty']};};
            jSObjectAbs$.isPrototypeOf=function isPrototypeOf($6k){
                var jSObjectAbs$=this;
                /*Begin dynamic block*/
                if(jSObjectAbs$.$_native.isPrototypeOf($6k.$_native)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jSObjectAbs$.isPrototypeOf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:JSObject},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[m$1.doc("is the object in the passed objects prototype chain"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','isPrototypeOf']};};
            jSObjectAbs$.propertyIsEnumerable=function propertyIsEnumerable($6l){
                var jSObjectAbs$=this;
                var $6m;
                var $6n=$6l;
                if(m$1.is$($6l,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    $6m=jSObjectAbs$.$_native.propertyIsEnumerable($6n.valueOf());/*End dynamic block*/
                }else if(m$1.is$($6l,{t:JSString})) {
                    /*Begin dynamic block*/
                    $6m=jSObjectAbs$.$_native.propertyIsEnumerable($6n.$_native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if($6m){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };jSObjectAbs$.propertyIsEnumerable.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'prop',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JSString}]},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[m$1.doc("is the property enumerable by a for in loop"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','propertyIsEnumerable']};};
            jSObjectAbs$.$_apply=function $_apply($6o,$6p){
                var jSObjectAbs$=this;
                /*Begin dynamic block*/
                jSObjectAbs$.$_native.apply((typeof a==='undefined'||a===null?m$1.throwexc(m$1.Exception("Undefined or null reference: a"),'281:22-281:22','object.ceylon'):a),$6p);
                /*End dynamic block*/
            };jSObjectAbs$.$_apply.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'thisArg',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[m$1.doc("calls a function with thisArg as this and an array of args"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','apply']};};
            jSObjectAbs$.$_call=function $_call($6q,$6r){
                var jSObjectAbs$=this;
                /*Begin dynamic block*/
                jSObjectAbs$.$_native.call($6q,$6r);
                /*End dynamic block*/
            };jSObjectAbs$.$_call.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'thisArg',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:JSObjectAbs,$an:function(){return[m$1.doc("calls a function with thisArg as this and an argument list"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','call']};};
            jSObjectAbs$.toString=function toString(){
                var jSObjectAbs$=this;
                /*Begin dynamic block*/
                return JSString(jSObjectAbs$.$_native.toString());
                /*End dynamic block*/
            };jSObjectAbs$.toString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[],$cont:JSObjectAbs,$an:function(){return[m$1.doc("convert the object to a string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObjectAbs','$m','toString']};};
        })(JSObjectAbs.$$.prototype);
    }
    return JSObjectAbs;
}
ex$.$init$JSObjectAbs=$init$JSObjectAbs;
$init$JSObjectAbs();
function JSObject($6s,jSObject$){
    $init$JSObject();
    if(jSObject$===undefined)jSObject$=new JSObject.$$;
    jSObject$.$6s_=$6s;
    JSObjectAbs(jSObject$);
    jSObject$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSObject,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','JSObject','$at','native']};}};
    /*Begin dynamic block*/
    jSObject$.$_native=jSObject$.$6s;/*End dynamic block*/
    return jSObject$;
}
JSObject.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JSObjectAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("native Object"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSObject']};};
ex$.JSObject=JSObject;
function $init$JSObject(){
    if(JSObject.$$===undefined){
        m$1.initTypeProto(JSObject,'com.openswimsoftware.ceylon.js.language::JSObject',$init$JSObjectAbs());
        (function(jSObject$){
            m$1.atr$(jSObject$,'$6s',function(){return this.$6s_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSObject,d:['com.openswimsoftware.ceylon.js.language','JSObject','$at','n$2qlyl2']};});
        })(JSObject.$$.prototype);
    }
    return JSObject;
}
ex$.$init$JSObject=$init$JSObject;
$init$JSObject();
ex$.$pkg$ans$com$openswimsoftware$ceylon$js$language=function(){return[m$1.shared()];};
function RegExpFlag($6t,regExpFlag$){
    $init$RegExpFlag();
    if(regExpFlag$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    regExpFlag$.$6t_=$6t;
    return regExpFlag$;
}
RegExpFlag.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],of:[$prop$get$6u,$prop$get$6v,$prop$get$6w],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','RegExpFlag']};};
ex$.RegExpFlag=RegExpFlag;
function $init$RegExpFlag(){
    if(RegExpFlag.$$===undefined){
        m$1.initTypeProto(RegExpFlag,'com.openswimsoftware.ceylon.js.language::RegExpFlag',m$1.Basic);
        (function(regExpFlag$){
            m$1.atr$(regExpFlag$,'$6t',function(){return this.$6t_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:RegExpFlag,d:['com.openswimsoftware.ceylon.js.language','RegExpFlag','$at','name$gqp1ds']};});
        })(RegExpFlag.$$.prototype);
    }
    return RegExpFlag;
}
ex$.$init$RegExpFlag=$init$RegExpFlag;
$init$RegExpFlag();
function $6u(){
    var global$=new $6u.$$;
    RegExpFlag("g",global$);
    return global$;
};$6u.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RegExpFlag},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','global']};};
function $init$$6u(){
    if($6u.$$===undefined){
        m$1.initTypeProto($6u,'com.openswimsoftware.ceylon.js.language::global',$init$RegExpFlag());
    }
    return $6u;
}
ex$.$init$$6u=$init$$6u;
$init$$6u();
var $6x;
function getGlobal(){
    if($6x===undefined){$6x=$init$$6u()();$6x.$crtmm$=getGlobal.$crtmm$;}
    return $6x;
}
ex$.getGlobal=getGlobal;
getGlobal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6u},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','global']};};
$prop$getGlobal={get:getGlobal,$crtmm$:getGlobal.$crtmm$};
get$6u=getGlobal;$prop$get$6u=getGlobal;
ex$.$prop$getGlobal=$prop$getGlobal;
function $6v(){
    var ignore$=new $6v.$$;
    RegExpFlag("i",ignore$);
    return ignore$;
};$6v.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RegExpFlag},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','ignore']};};
function $init$$6v(){
    if($6v.$$===undefined){
        m$1.initTypeProto($6v,'com.openswimsoftware.ceylon.js.language::ignore',$init$RegExpFlag());
    }
    return $6v;
}
ex$.$init$$6v=$init$$6v;
$init$$6v();
var $6y;
function getIgnore(){
    if($6y===undefined){$6y=$init$$6v()();$6y.$crtmm$=getIgnore.$crtmm$;}
    return $6y;
}
ex$.getIgnore=getIgnore;
getIgnore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6v},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','ignore']};};
$prop$getIgnore={get:getIgnore,$crtmm$:getIgnore.$crtmm$};
get$6v=getIgnore;$prop$get$6v=getIgnore;
ex$.$prop$getIgnore=$prop$getIgnore;
function $6w(){
    var multiple$=new $6w.$$;
    RegExpFlag("m",multiple$);
    return multiple$;
};$6w.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RegExpFlag},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','multiple']};};
function $init$$6w(){
    if($6w.$$===undefined){
        m$1.initTypeProto($6w,'com.openswimsoftware.ceylon.js.language::multiple',$init$RegExpFlag());
    }
    return $6w;
}
ex$.$init$$6w=$init$$6w;
$init$$6w();
var $6z;
function getMultiple(){
    if($6z===undefined){$6z=$init$$6w()();$6z.$crtmm$=getMultiple.$crtmm$;}
    return $6z;
}
ex$.getMultiple=getMultiple;
getMultiple.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6w},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','multiple']};};
$prop$getMultiple={get:getMultiple,$crtmm$:getMultiple.$crtmm$};
get$6w=getMultiple;$prop$get$6w=getMultiple;
ex$.$prop$getMultiple=$prop$getMultiple;
function createJSRegExp($70,$71){
    if($71===undefined){$71=m$1.getEmpty();}
    var $72=$70;
    if(m$1.is$($70,{t:m$1.String})) {
        /*Begin dynamic block*/
        return RegExp((typeof RegExp==='undefined'||RegExp===null?m$1.throwexc(m$1.Exception("Undefined or null reference: RegExp"),'11:17-11:22','regexp.ceylon'):RegExp)($72.valueOf(),(function(){
            var $73=[];
            var $74=$71.iterator();
            var $75;
            while(($75=$74.next())!==m$1.getFinished()){
                $73.push($75.string);
            }
            return m$1.ArraySequence($73,{Element$Sequential:{t:m$1.String}});
        }())));
        /*End dynamic block*/
    }else if(m$1.is$($70,{t:JSString})) {
        /*Begin dynamic block*/
        return RegExp((typeof RegExp==='undefined'||RegExp===null?m$1.throwexc(m$1.Exception("Undefined or null reference: RegExp"),'16:17-16:22','regexp.ceylon'):RegExp)($72.$_native,(function(){
            var $76=[];
            var $77=$71.iterator();
            var $78;
            while(($78=$77.next())!==m$1.getFinished()){
                $76.push($78.string);
            }
            return m$1.ArraySequence($76,{Element$Sequential:{t:m$1.String}});
        }())));
        /*End dynamic block*/
    }
}
ex$.createJSRegExp=createJSRegExp;
createJSRegExp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:RegExp},$ps:[{$nm:'pattern',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JSString}]},$an:function(){return[];}},{$nm:'flags',$mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:RegExpFlag}}},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSRegExp']};};
function RegExpAbs(regExpAbs$){
    $init$RegExpAbs();
    if(regExpAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    JSObjectAbs(regExpAbs$);
    return regExpAbs$;
}
RegExpAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs']};};
ex$.RegExpAbs=RegExpAbs;
function $init$RegExpAbs(){
    if(RegExpAbs.$$===undefined){
        m$1.initTypeProto(RegExpAbs,'com.openswimsoftware.ceylon.js.language::RegExpAbs',$init$JSObjectAbs());
        (function(regExpAbs$){
            function RegResult$RegExpAbs($79,regResult$RegExpAbs$){
                $init$RegResult$RegExpAbs();
                if(regResult$RegExpAbs$===undefined)regResult$RegExpAbs$=new this.RegResult$RegExpAbs.$$;
                regResult$RegExpAbs$.$$outer=this;
                regResult$RegExpAbs$.$79_=$79;
                regResult$RegExpAbs$.$$outer.RegResultAbs$RegExpAbs(regResult$RegExpAbs$);
                regResult$RegExpAbs$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:RegResult$RegExpAbs,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$c','RegResult','$at','native']};}};
                /*Begin dynamic block*/
                regResult$RegExpAbs$.$_native=regResult$RegExpAbs$.$79;/*End dynamic block*/
                return regResult$RegExpAbs$;
            }
            RegResult$RegExpAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RegExpAbs.RegResultAbs$RegExpAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:RegExpAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$c','RegResult']};};
            function $init$RegResult$RegExpAbs(){
                if(RegResult$RegExpAbs.$$===undefined){
                    m$1.initTypeProto(RegResult$RegExpAbs,'com.openswimsoftware.ceylon.js.language::RegExpAbs.RegResult',regExpAbs$.RegResultAbs$RegExpAbs);
                    RegExpAbs.RegResult$RegExpAbs=RegResult$RegExpAbs;
                    (function(regResult$RegExpAbs$){
                        m$1.atr$(regResult$RegExpAbs$,'$79',function(){return this.$79_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:RegResult$RegExpAbs,d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$c','RegResult','$at','n$v0xast']};});
                    })(RegResult$RegExpAbs.$$.prototype);
                }
                return RegResult$RegExpAbs;
            }
            regExpAbs$.$init$RegResult$RegExpAbs=$init$RegResult$RegExpAbs;
            $init$RegResult$RegExpAbs();
            regExpAbs$.RegResult$RegExpAbs=RegResult$RegExpAbs;
            function RegResultAbs$RegExpAbs(regResultAbs$RegExpAbs$){
                $init$RegResultAbs$RegExpAbs();
                if(regResultAbs$RegExpAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
                regResultAbs$RegExpAbs$.$$outer=this;
                JSArrayAbs(regResultAbs$RegExpAbs$);
                return regResultAbs$RegExpAbs$;
            }
            RegResultAbs$RegExpAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JSArrayAbs},$ps:[],$cont:RegExpAbs,$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$c','RegResultAbs']};};
            function $init$RegResultAbs$RegExpAbs(){
                if(RegResultAbs$RegExpAbs.$$===undefined){
                    m$1.initTypeProto(RegResultAbs$RegExpAbs,'com.openswimsoftware.ceylon.js.language::RegExpAbs.RegResultAbs',$init$JSArrayAbs());
                    RegExpAbs.RegResultAbs$RegExpAbs=RegResultAbs$RegExpAbs;
                    (function(regResultAbs$RegExpAbs$){
                        regResultAbs$RegExpAbs$.input=function input(){
                            var regResultAbs$RegExpAbs$=this;
                            /*Begin dynamic block*/
                            return JSString(regResultAbs$RegExpAbs$.$_native.input);
                            /*End dynamic block*/
                        };regResultAbs$RegExpAbs$.input.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[],$cont:RegResultAbs$RegExpAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$c','RegResultAbs','$m','input']};};
                        regResultAbs$RegExpAbs$.index=function index(){
                            var regResultAbs$RegExpAbs$=this;
                            /*Begin dynamic block*/
                            return JSNumber(regResultAbs$RegExpAbs$.$_native.index);
                            /*End dynamic block*/
                        };regResultAbs$RegExpAbs$.index.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:RegResultAbs$RegExpAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$c','RegResultAbs','$m','index']};};
                    })(RegResultAbs$RegExpAbs.$$.prototype);
                }
                return RegResultAbs$RegExpAbs;
            }
            regExpAbs$.$init$RegResultAbs$RegExpAbs=$init$RegResultAbs$RegExpAbs;
            $init$RegResultAbs$RegExpAbs();
            regExpAbs$.RegResultAbs$RegExpAbs=RegResultAbs$RegExpAbs;
            regExpAbs$.global=function global(){
                var regExpAbs$=this;
                /*Begin dynamic block*/
                if(regExpAbs$.$_native.global){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };regExpAbs$.global.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:RegExpAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$m','global']};};
            regExpAbs$.ignoreCase=function ignoreCase(){
                var regExpAbs$=this;
                /*Begin dynamic block*/
                if(regExpAbs$.$_native.ignoreCase){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };regExpAbs$.ignoreCase.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:RegExpAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$m','ignoreCase']};};
            regExpAbs$.getLastindex=function getLastindex(){
                var regExpAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(regExpAbs$.$_native.lastindex);
                /*End dynamic block*/
            };regExpAbs$.getLastindex.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:RegExpAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$m','getLastindex']};};
            regExpAbs$.setLastindex=function setLastindex($7a){
                var regExpAbs$=this;
                var $7b=$7a;
                if(m$1.is$($7a,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    regExpAbs$.$_native.lastindex=$7b;
                    /*End dynamic block*/
                }else if(m$1.is$($7a,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    regExpAbs$.$_native.lastindex=$7b.$_native;
                    /*End dynamic block*/
                }
            };regExpAbs$.setLastindex.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:RegExpAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$m','setLastindex']};};
            regExpAbs$.multiline=function multiline(){
                var regExpAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(regExpAbs$.$_native.multiline);
                /*End dynamic block*/
            };regExpAbs$.multiline.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:RegExpAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$m','multiline']};};
            regExpAbs$.source=function source(){
                var regExpAbs$=this;
                /*Begin dynamic block*/
                return JSString(regExpAbs$.$_native.source);
                /*End dynamic block*/
            };regExpAbs$.source.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[],$cont:RegExpAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$m','source']};};
            regExpAbs$.exec=function exec($7c){
                var regExpAbs$=this;
                /*Begin dynamic block*/
                return JSString(regExpAbs$.$_native.exec($7c.valueOf()));
                /*End dynamic block*/
            };regExpAbs$.exec.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[{$nm:'str',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:RegExpAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$m','exec']};};
            regExpAbs$.test$defs$str=function($7d){return "undefined";};
            regExpAbs$.test=function test($7d){
                var regExpAbs$=this;
                if($7d===undefined){$7d=regExpAbs$.test$defs$str($7d);}
                var $7e;
                var $7f=$7d;
                if(m$1.is$($7d,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    $7e=regExpAbs$.$_native.test($7f.valueOf());/*End dynamic block*/
                }else if(m$1.is$($7d,{t:JSString})) {
                    /*Begin dynamic block*/
                    $7e=regExpAbs$.$_native.test($7f.$_native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if($7e){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };regExpAbs$.test.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'str',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:JSString}]},$an:function(){return[];}}],$cont:RegExpAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExpAbs','$m','test']};};
        })(RegExpAbs.$$.prototype);
    }
    return RegExpAbs;
}
ex$.$init$RegExpAbs=$init$RegExpAbs;
$init$RegExpAbs();
function RegExp($7g,regExp$){
    $init$RegExp();
    if(regExp$===undefined)regExp$=new RegExp.$$;
    regExp$.$7g_=$7g;
    RegExpAbs(regExp$);
    regExp$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:RegExp,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','RegExp','$at','native']};}};
    /*Begin dynamic block*/
    regExp$.$_native=regExp$.$7g;/*End dynamic block*/
    return regExp$;
}
RegExp.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RegExpAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("native RegExp"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','RegExp']};};
ex$.RegExp=RegExp;
function $init$RegExp(){
    if(RegExp.$$===undefined){
        m$1.initTypeProto(RegExp,'com.openswimsoftware.ceylon.js.language::RegExp',$init$RegExpAbs());
        (function(regExp$){
            m$1.atr$(regExp$,'$7g',function(){return this.$7g_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:RegExp,d:['com.openswimsoftware.ceylon.js.language','RegExp','$at','n$5q8qbj']};});
        })(RegExp.$$.prototype);
    }
    return RegExp;
}
ex$.$init$RegExp=$init$RegExp;
$init$RegExp();
function createJSString($7h){
    /*Begin dynamic block*/
    return JSString((typeof String==='undefined'||String===null?m$1.throwexc(m$1.Exception("Undefined or null reference: String"),'5:18-5:23','string.ceylon'):String)($7h));
    /*End dynamic block*/
}
ex$.createJSString=createJSString;
createJSString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[{$nm:'string',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','createJSString']};};
function JSStringAbs(jSStringAbs$){
    $init$JSStringAbs();
    if(jSStringAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    JSObjectAbs(jSStringAbs$);
    return jSStringAbs$;
}
JSStringAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs']};};
ex$.JSStringAbs=JSStringAbs;
function $init$JSStringAbs(){
    if(JSStringAbs.$$===undefined){
        m$1.initTypeProto(JSStringAbs,'com.openswimsoftware.ceylon.js.language::JSStringAbs',$init$JSObjectAbs());
        (function(jSStringAbs$){
            jSStringAbs$.length=function length(){
                var jSStringAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSStringAbs$.$_native.length);
                /*End dynamic block*/
            };jSStringAbs$.length.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[],$cont:JSStringAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','length']};};
            jSStringAbs$.charAt=function charAt($7i){
                var jSStringAbs$=this;
                var $7j=$7i;
                if(m$1.is$($7i,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    return JSString(jSStringAbs$.$_native.charAt($7j));
                    /*End dynamic block*/
                }else if(m$1.is$($7i,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSString(jSStringAbs$.$_native.charAt($7j.$_native));
                    /*End dynamic block*/
                }
            };jSStringAbs$.charAt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[{$nm:'index',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','charAt']};};
            jSStringAbs$.charCodeAt=function charCodeAt($7k){
                var jSStringAbs$=this;
                var $7l=$7k;
                if(m$1.is$($7k,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    return JSNumber(jSStringAbs$.$_native.charCodeAt($7l));
                    /*End dynamic block*/
                }else if(m$1.is$($7k,{t:JSNumber})) {
                    /*Begin dynamic block*/
                    return JSNumber(jSStringAbs$.$_native.charCodeAt($7l.$_native));
                    /*End dynamic block*/
                }
            };jSStringAbs$.charCodeAt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'index',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','charCodeAt']};};
            jSStringAbs$.concat=function concat($7m){
                var jSStringAbs$=this;
                if($7m===undefined){$7m=m$1.getEmpty();}
                /*Begin dynamic block*/
                return JSString(JSFunction(jSStringAbs$.$_native.concat).$_apply(null,(function(){
                    var $7n=[];
                    var $7o=$7m.iterator();
                    var $7p;
                    while(($7p=$7o.next())!==m$1.getFinished()){
                        $7n.push($7p.$_native);
                    }
                    return m$1.ArraySequence($7n,{Element$Sequence:'Element'});
                }())));
                /*End dynamic block*/
            };jSStringAbs$.concat.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[{$nm:'strings',$mt:'prm',seq:1,$t:{t:m$1.Sequence,a:{Element$Sequence:{t:JSString}}},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','concat']};};
            jSStringAbs$.indexOf$defs$fromIndex=function($7q,$7r){return 0;};
            jSStringAbs$.indexOf=function indexOf($7q,$7r){
                var jSStringAbs$=this;
                if($7r===undefined){$7r=jSStringAbs$.indexOf$defs$fromIndex($7q,$7r);}
                var $7s=$7q;
                if(m$1.is$($7q,{t:m$1.String})) {
                    var $7t=$7r;
                    if(m$1.is$($7r,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return JSNumber(jSStringAbs$.$_native.indexOf($7s.valueOf(),$7t));
                        /*End dynamic block*/
                    }else if(m$1.is$($7r,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSNumber(jSStringAbs$.$_native.indexOf($7s.valueOf(),$7t.$_native));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($7q,{t:JSString})) {
                    var $7u=$7r;
                    if(m$1.is$($7r,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return JSNumber(jSStringAbs$.$_native.indexOf($7s.$_native,$7u));
                        /*End dynamic block*/
                    }else if(m$1.is$($7r,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSNumber(jSStringAbs$.$_native.indexOf($7s.$_native,$7u.$_native));
                        /*End dynamic block*/
                    }
                }
            };jSStringAbs$.indexOf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'searchValue',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JSString}]},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','indexOf']};};
            jSStringAbs$.lastIndexOf$defs$fromIndex=function($7v,$7w){return 0;};
            jSStringAbs$.lastIndexOf=function lastIndexOf($7v,$7w){
                var jSStringAbs$=this;
                if($7w===undefined){$7w=jSStringAbs$.lastIndexOf$defs$fromIndex($7v,$7w);}
                var $7x=$7v;
                if(m$1.is$($7v,{t:m$1.String})) {
                    var $7y=$7w;
                    if(m$1.is$($7w,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return JSNumber(jSStringAbs$.$_native.lastIndexOf($7x.valueOf(),$7y));
                        /*End dynamic block*/
                    }else if(m$1.is$($7w,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSNumber(jSStringAbs$.$_native.lastIndexOf($7x.valueOf(),$7y.$_native));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($7v,{t:JSString})) {
                    var $7z=$7w;
                    if(m$1.is$($7w,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return JSNumber(jSStringAbs$.$_native.lastIndexOf($7x.$_native,$7z));
                        /*End dynamic block*/
                    }else if(m$1.is$($7w,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSNumber(jSStringAbs$.$_native.lastIndexOf($7x.$_native,$7z.$_native));
                        /*End dynamic block*/
                    }
                }
            };jSStringAbs$.lastIndexOf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'searchValue',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JSString}]},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','lastIndexOf']};};
            jSStringAbs$.match=function match($80){
                var jSStringAbs$=this;
                /*Begin dynamic block*/
                return ($81=RegExp.RegResult$RegExpAbs(($82=jSStringAbs$.$_native.match($80.$_native),m$1.is$($82,{t:RegExp})?$82:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'113:33-113:59','string.ceylon'))),m$1.is$($81,{t:m$1.Anything})?$81:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'113:16-113:60','string.ceylon'));
                /*End dynamic block*/
            };jSStringAbs$.match.$crtmm$=function(){return{mod:$CCMM$,$t:{t:RegExpAbs.RegResult$RegExpAbs},$ps:[{$nm:'regexp',$mt:'prm',$t:{t:RegExp},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','match']};};
            jSStringAbs$.replace=function replace($83,$84){
                var jSStringAbs$=this;
                var $85=$83;
                if(m$1.is$($83,{t:m$1.String})) {
                    var $86=$84;
                    if(m$1.is$($84,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        return JSString(jSStringAbs$.$_native.replace($85.valueOf(),$86.valueOf()));
                        /*End dynamic block*/
                    }else if(m$1.is$($84,{t:JSString})) {
                        /*Begin dynamic block*/
                        return JSString(jSStringAbs$.$_native.replace($85.valueOf(),$86.$_native));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($83,{t:'u',l:[{t:JSString},{t:RegExp}]})) {
                    var $87=$84;
                    if(m$1.is$($84,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        return JSString(jSStringAbs$.$_native.replace($85.$_native,$87.valueOf()));
                        /*End dynamic block*/
                    }else if(m$1.is$($84,{t:JSString})) {
                        /*Begin dynamic block*/
                        return JSString(jSStringAbs$.$_native.replace($85.$_native,$87.$_native));
                        /*End dynamic block*/
                    }
                }
            };jSStringAbs$.replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[{$nm:'pattern',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JSString},{t:RegExp}]},$an:function(){return[];}},{$nm:'replace',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JSString}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','replace']};};
            jSStringAbs$.replaceCallback=function replaceCallback($88,$89){
                var jSStringAbs$=this;
                var $8a=$88;
                if(m$1.is$($88,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return JSString(jSStringAbs$.$_native.replace($8a.valueOf(),$89));
                    /*End dynamic block*/
                }else if(m$1.is$($88,{t:'u',l:[{t:JSString},{t:RegExp}]})) {
                    /*Begin dynamic block*/
                    return JSString(jSStringAbs$.$_native.replace($8a.$_native,$89));
                    /*End dynamic block*/
                }
            };jSStringAbs$.replaceCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[{$nm:'pattern',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:JSString},{t:RegExp}]},$an:function(){return[];}},{$nm:'replace',$mt:'prm',$pt:'f',$t:{t:JSString},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[m$1.doc("replace will recived a set of substrings based on the regex then an Integer for offset, and the examined String"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','replaceCallback']};};
            jSStringAbs$.search=function search($8b){
                var jSStringAbs$=this;
                /*Begin dynamic block*/
                return JSNumber(jSStringAbs$.$_native.search($8b.$_native));
                /*End dynamic block*/
            };jSStringAbs$.search.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},$ps:[{$nm:'regexp',$mt:'prm',$t:{t:RegExp},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','search']};};
            jSStringAbs$.slice$defs$endSlice=function($8c,$8d){return null;};
            jSStringAbs$.slice=function slice($8c,$8d){
                var jSStringAbs$=this;
                if($8d===undefined){$8d=jSStringAbs$.slice$defs$endSlice($8c,$8d);}
                var $8e=$8c;
                if(m$1.is$($8c,{t:m$1.Integer})) {
                    var $8f=$8d;
                    if(m$1.is$($8d,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return ($8g=($8h=jSStringAbs$.$_native.slice($8e,$8f),$8i=(typeof JString==='undefined'?m$1.throwexc(m$1.Exception("Undefined type JString"),'174:12-174:18','string.ceylon'):JString),$8i.$$===undefined?new $8i($8h):$8i($8h)),m$1.is$($8g,{t:m$1.Anything})?$8g:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'174:12-174:54','string.ceylon'));
                        /*End dynamic block*/
                    }else if(m$1.is$($8d,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return ($8j=($8k=jSStringAbs$.$_native.slice($8e,$8f.$_native),$8l=(typeof JString==='undefined'?m$1.throwexc(m$1.Exception("Undefined type JString"),'179:12-179:18','string.ceylon'):JString),$8l.$$===undefined?new $8l($8k):$8l($8k)),m$1.is$($8j,{t:m$1.Anything})?$8j:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'179:12-179:61','string.ceylon'));
                        /*End dynamic block*/
                    }else if(m$1.is$($8d,{t:m$1.Null})) {
                        /*Begin dynamic block*/
                        return ($8m=($8n=jSStringAbs$.$_native.slice($8e),$8o=(typeof JString==='undefined'?m$1.throwexc(m$1.Exception("Undefined type JString"),'184:12-184:18','string.ceylon'):JString),$8o.$$===undefined?new $8o($8n):$8o($8n)),m$1.is$($8m,{t:m$1.Anything})?$8m:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'184:12-184:44','string.ceylon'));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($8c,{t:JSNumber})) {
                    var $8p=$8d;
                    if(m$1.is$($8d,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return ($8q=($8r=jSStringAbs$.$_native.slice($8e.$_native,$8p),$8s=(typeof JString==='undefined'?m$1.throwexc(m$1.Exception("Undefined type JString"),'192:12-192:18','string.ceylon'):JString),$8s.$$===undefined?new $8s($8r):$8s($8r)),m$1.is$($8q,{t:m$1.Anything})?$8q:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'192:12-192:61','string.ceylon'));
                        /*End dynamic block*/
                    }else if(m$1.is$($8d,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return ($8t=($8u=jSStringAbs$.$_native.slice($8e.$_native,$8p.$_native),$8v=(typeof JString==='undefined'?m$1.throwexc(m$1.Exception("Undefined type JString"),'197:12-197:18','string.ceylon'):JString),$8v.$$===undefined?new $8v($8u):$8v($8u)),m$1.is$($8t,{t:m$1.Anything})?$8t:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'197:12-197:68','string.ceylon'));
                        /*End dynamic block*/
                    }else if(m$1.is$($8d,{t:m$1.Null})) {
                        /*Begin dynamic block*/
                        return ($8w=($8x=jSStringAbs$.$_native.slice($8e.$_native),$8y=(typeof JString==='undefined'?m$1.throwexc(m$1.Exception("Undefined type JString"),'202:12-202:18','string.ceylon'):JString),$8y.$$===undefined?new $8y($8x):$8y($8x)),m$1.is$($8w,{t:m$1.Anything})?$8w:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'202:12-202:51','string.ceylon'));
                        /*End dynamic block*/
                    }
                }
            };jSStringAbs$.slice.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[{$nm:'beginSlice',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'endSlice',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','slice']};};
            jSStringAbs$.split$defs$separator=function($8z,$90){return null;};
            jSStringAbs$.split$defs$limit=function($8z,$90){return null;};
            jSStringAbs$.split=function split($8z,$90){
                var jSStringAbs$=this;
                if($8z===undefined){$8z=jSStringAbs$.split$defs$separator($8z,$90);}
                if($90===undefined){$90=jSStringAbs$.split$defs$limit($8z,$90);}
                var $91=$8z;
                if(m$1.is$($8z,{t:m$1.String})) {
                    var $92=$90;
                    if(m$1.is$($90,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray(jSStringAbs$.$_native.split($91.valueOf(),$92));
                        /*End dynamic block*/
                    }else if(m$1.is$($90,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray(jSStringAbs$.$_native.split($91.valueOf(),$92.$_native));
                        /*End dynamic block*/
                    }else if(m$1.is$($90,{t:m$1.Null})) {
                        /*Begin dynamic block*/
                        return JSArray(jSStringAbs$.$_native.split($91.valueOf()));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($8z,{t:'u',l:[{t:JSString},{t:RegExp}]})) {
                    var $93=$90;
                    if(m$1.is$($90,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return JSArray(jSStringAbs$.$_native.split($91.$_native,$93));
                        /*End dynamic block*/
                    }else if(m$1.is$($90,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSArray(jSStringAbs$.$_native.split($91.$_native,$93.$_native));
                        /*End dynamic block*/
                    }else if(m$1.is$($90,{t:m$1.Null})) {
                        /*Begin dynamic block*/
                        return JSArray(jSStringAbs$.$_native.split($91));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($8z,{t:m$1.Null})) {
                    /*Begin dynamic block*/
                    return JSArray(jSStringAbs$.$_native.split());
                    /*End dynamic block*/
                }
            };jSStringAbs$.split.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSArray},$ps:[{$nm:'separator',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:JSString},{t:'u',l:[{t:m$1.Null},{t:RegExp}]}]},$an:function(){return[];}},{$nm:'limit',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[m$1.doc("returns array of strings"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','split']};};
            jSStringAbs$.substr$defs$length=function($94,$95){return null;};
            jSStringAbs$.substr=function substr($94,$95){
                var jSStringAbs$=this;
                if($95===undefined){$95=jSStringAbs$.substr$defs$length($94,$95);}
                var $96=$94;
                if(m$1.is$($94,{t:m$1.Integer})) {
                    var $97=$95;
                    if(m$1.is$($95,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return JSString(jSStringAbs$.$_native.substr($96,$97));
                        /*End dynamic block*/
                    }else if(m$1.is$($95,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSString(jSStringAbs$.$_native.substr($96,$97.$_native));
                        /*End dynamic block*/
                    }else if(m$1.is$($95,{t:m$1.Null})) {
                        /*Begin dynamic block*/
                        return JSString(jSStringAbs$.$_native.substr($96));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($94,{t:JSNumber})) {
                    var $98=$95;
                    if(m$1.is$($95,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return JSString(jSStringAbs$.$_native.substr($96.$_native,$98));
                        /*End dynamic block*/
                    }else if(m$1.is$($95,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSString(jSStringAbs$.$_native.substr($96.$_native,$98.$_native));
                        /*End dynamic block*/
                    }else if(m$1.is$($95,{t:m$1.Null})) {
                        /*Begin dynamic block*/
                        return JSString(jSStringAbs$.$_native.substr($96.$_native));
                        /*End dynamic block*/
                    }
                }
            };jSStringAbs$.substr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[{$nm:'start',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'length',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','substr']};};
            jSStringAbs$.substring$defs$indexB=function($99,$9a){return null;};
            jSStringAbs$.substring=function substring($99,$9a){
                var jSStringAbs$=this;
                if($9a===undefined){$9a=jSStringAbs$.substring$defs$indexB($99,$9a);}
                var $9b=$99;
                if(m$1.is$($99,{t:m$1.Integer})) {
                    var $9c=$9a;
                    if(m$1.is$($9a,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return JSString(jSStringAbs$.$_native.substring($9b,$9c));
                        /*End dynamic block*/
                    }else if(m$1.is$($9a,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSString(jSStringAbs$.$_native.substring($9b,$9c.$_native));
                        /*End dynamic block*/
                    }else if(m$1.is$($9a,{t:m$1.Null})) {
                        /*Begin dynamic block*/
                        return JSString(jSStringAbs$.$_native.substring($9b));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($99,{t:JSNumber})) {
                    var $9d=$9a;
                    if(m$1.is$($9a,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return JSString(jSStringAbs$.$_native.substring($9b.$_native,$9d));
                        /*End dynamic block*/
                    }else if(m$1.is$($9a,{t:JSNumber})) {
                        /*Begin dynamic block*/
                        return JSString(jSStringAbs$.$_native.substring($9b.$_native,$9d.$_native));
                        /*End dynamic block*/
                    }else if(m$1.is$($9a,{t:m$1.Null})) {
                        /*Begin dynamic block*/
                        return JSString(jSStringAbs$.$_native.substring($9b.$_native));
                        /*End dynamic block*/
                    }
                }
            };jSStringAbs$.substring.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[{$nm:'indexA',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:JSNumber}]},$an:function(){return[];}},{$nm:'indexB',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:JSNumber}]}]},$an:function(){return[];}}],$cont:JSStringAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','substring']};};
            jSStringAbs$.toLowerCase=function toLowerCase(){
                var jSStringAbs$=this;
                /*Begin dynamic block*/
                return JSString(jSStringAbs$.$_native.toLowerCase());
                /*End dynamic block*/
            };jSStringAbs$.toLowerCase.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[],$cont:JSStringAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','toLowerCase']};};
            jSStringAbs$.toUpperCase=function toUpperCase(){
                var jSStringAbs$=this;
                /*Begin dynamic block*/
                return JSString(jSStringAbs$.$_native.toUpperCase());
                /*End dynamic block*/
            };jSStringAbs$.toUpperCase.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[],$cont:JSStringAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','toUpperCase']};};
            jSStringAbs$.trim=function trim(){
                var jSStringAbs$=this;
                /*Begin dynamic block*/
                return JSString(jSStringAbs$.$_native.trim());
                /*End dynamic block*/
            };jSStringAbs$.trim.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},$ps:[],$cont:JSStringAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSStringAbs','$m','trim']};};
        })(JSStringAbs.$$.prototype);
    }
    return JSStringAbs;
}
ex$.$init$JSStringAbs=$init$JSStringAbs;
$init$JSStringAbs();
function JSString($9e,jSString$){
    $init$JSString();
    if(jSString$===undefined)jSString$=new JSString.$$;
    jSString$.$9e_=$9e;
    JSStringAbs(jSString$);
    jSString$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSString,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.language','JSString','$at','native']};}};
    /*Begin dynamic block*/
    jSString$.$_native=jSString$.$9e;/*End dynamic block*/
    return jSString$;
}
JSString.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JSStringAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("native String"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.language','JSString']};};
ex$.JSString=JSString;
function $init$JSString(){
    if(JSString.$$===undefined){
        m$1.initTypeProto(JSString,'com.openswimsoftware.ceylon.js.language::JSString',$init$JSStringAbs());
        (function(jSString$){
            m$1.atr$(jSString$,'$9e',function(){return this.$9e_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSString,d:['com.openswimsoftware.ceylon.js.language','JSString','$at','n$cc4wqw']};});
        })(JSString.$$.prototype);
    }
    return JSString;
}
ex$.$init$JSString=$init$JSString;
$init$JSString();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
