(function(define) { define(function(require, ex$, module) {
var $CCMM$={"$mod-version":"1.8.0","$mod-deps":[{exp:1,path:"ceylon.language\/1.1.0"}],"$mod-bin":"7.0","com.openswimsoftware.ceylon.js.language":{createJSDateNow:{$t:{pk:".",nm:"JSDate"},pa:1,mt:"m",an:{doc:["create a native Date set to now"]},nm:"createJSDateNow"},objectIsSealed:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{pk:".",nm:"JSObject"},mt:"prm",nm:"obj"}]],mt:"m",an:{doc:["can properties be added to or removed from the object"]},nm:"objectIsSealed"},createJSRegExp:{$t:{pk:".",nm:"RegExp"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{pk:".",nm:"JSString"}]},mt:"prm",nm:"pattern"},{$t:{md:"ceylon.language",pk:"$",tp:[{mt:"tp",pk:".",nm:"RegExpFlag"}],nm:"Sequential"},mt:"prm",seq:1,nm:"flags"}]],mt:"m",nm:"createJSRegExp"},createJSDateYMDInt:{$t:{pk:".",nm:"JSDate"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"year"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"month"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"day"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"ceylon.language",pk:"$",nm:"Integer"}]},def:1,mt:"prm",nm:"hour"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"ceylon.language",pk:"$",nm:"Integer"}]},def:1,mt:"prm",nm:"minute"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"ceylon.language",pk:"$",nm:"Integer"}]},def:1,mt:"prm",nm:"second"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"ceylon.language",pk:"$",nm:"Integer"}]},def:1,mt:"prm",nm:"milli"}]],mt:"m",an:{doc:["create a native date at the given date time"]},nm:"createJSDateYMDInt"},objectGetOwnPropertyNames:{$t:{pk:".",nm:"JSArray"},pa:1,ps:[[{$t:{pk:".",nm:"JSObject"},mt:"prm",nm:"obj"}]],mt:"m",an:{doc:["returns an array of object properties"]},nm:"objectGetOwnPropertyNames"},JSNumber:{super:{pk:".",nm:"JSNumberAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$5h61zj:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["native Number"]},nm:"JSNumber"},numberNegativeInfinity:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns negative infinity"]},nm:"numberNegativeInfinity"},Math:{super:{pk:".",nm:"MathAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$30o4p:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["native Math"]},nm:"Math"},isNaN:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{nm:"$U"},mt:"prm",nm:"val"}]],mt:"m",nm:"isNaN"},mathE:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns natural log"]},nm:"mathE"},dateUTC:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"year"},{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"month"},{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"day"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]},def:1,mt:"prm",nm:"hour"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]},def:1,mt:"prm",nm:"minute"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]},def:1,mt:"prm",nm:"second"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]},def:1,mt:"prm",nm:"milli"}]],mt:"m",an:{doc:["returns the given date string as a unix timestamp"]},nm:"dateUTC"},JSNumberAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{toFixed:{$t:{pk:".",nm:"JSString"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},def:1,mt:"prm",nm:"digits"}]],mt:"m",an:{doc:["returns a string representing the number in fixed-point notation"]},nm:"toFixed"},toPrecision:{$t:{pk:".",nm:"JSString"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]}]},def:1,mt:"prm",nm:"precision"}]],mt:"m",an:{doc:["returns a string representing the number in a specified precision in fixed-point or exponential notation"]},nm:"toPrecision"},toExponential:{$t:{pk:".",nm:"JSString"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]}]},def:1,mt:"prm",nm:"fractionDigits"}]],mt:"m",an:{doc:["returns a string representing the number in exponential notation"]},nm:"toExponential"}},nm:"JSNumberAbs"},mathLog10:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns log of 10"]},nm:"mathLog10"},defineProperties:{$t:{pk:".",nm:"JSObject"},pa:1,ps:[[{$t:{pk:".",nm:"JSObject"},mt:"prm",nm:"obj"},{$t:{md:"ceylon.language",pk:"$",tp:[{mt:"tp",md:"ceylon.language",pk:"$",tp:[{mt:"tp",md:"ceylon.language",pk:"$",nm:"String"},{comp:"u",mt:"tp",l:[{pk:".",nm:"DataDescriptor"},{pk:".",nm:"AccessorDescriptor"}]}],nm:"Entry"}],nm:"Sequential"},mt:"prm",nm:"properties"}]],mt:"m",an:{doc:["define properties on a native object"]},nm:"defineProperties"},objectIsExtensible:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{pk:".",nm:"JSObject"},mt:"prm",nm:"obj"}]],mt:"m",an:{doc:["can new properties be added to the object"]},nm:"objectIsExtensible"},mathRoot2:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns square root of 2"]},nm:"mathRoot2"},createJSObject:{$t:{pk:".",nm:"JSObject"},pa:1,mt:"m",an:{doc:["create a new native object"]},nm:"createJSObject"},numberMaxValue:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the max possible number"]},nm:"numberMaxValue"},RegExp:{super:{pk:".",nm:"RegExpAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$xffeyo:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["native RegExp"]},nm:"RegExp"},RegExpFlag:{super:{md:"ceylon.language",pk:"$",nm:"Basic"},pa:257,ps:[{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"prm",nm:"name"}],mt:"c",of:[{pk:".",nm:"global"},{pk:".",nm:"ignore"},{pk:".",nm:"multiple"}],$at:{name$ayhn9d:{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"a",nm:"name"}},nm:"RegExpFlag"},mathLog2e:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns natural log of 2"]},nm:"mathLog2e"},mathPi:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns pi"]},nm:"mathPi"},JSFunctionAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{bind:{$t:{pk:".",nm:"JSFunction"},pa:1,ps:[[{$t:{pk:".",nm:"JSObject"},mt:"prm",nm:"thisArg"},{$t:{md:"ceylon.language",pk:"$",tp:[{mt:"tp",pk:".",nm:"JSObject"}],nm:"Sequential"},mt:"prm",seq:1,nm:"args"}]],mt:"m",an:{doc:["returns a new function with thisArg as the this element and a set of args to prepend when the target function is called"]},nm:"bind"},length:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns number of arguments exepcted buy the function"]},nm:"length"},isGenerator:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"m",an:{doc:["is the function a generator"]},nm:"isGenerator"}},nm:"JSFunctionAbs"},createJSString:{$t:{pk:".",nm:"JSString"},pa:1,ps:[[{$t:{nm:"$U"},mt:"prm",nm:"string"}]],mt:"m",nm:"createJSString"},"$pkg-shared":1,numberMinValue:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the min possible number"]},nm:"numberMinValue"},eval:{$t:{nm:"$U"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{pk:".",nm:"JSString"}]},mt:"prm",nm:"js"}]],mt:"m",nm:"eval"},createJSArray:{$t:{pk:".",nm:"JSArray"},pa:1,ps:[[{$t:{nm:"$U"},mt:"prm",nm:"arg"}]],mt:"m",an:{doc:["crate a new native array"]},nm:"createJSArray"},mathLog10e:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns natural log of 10"]},nm:"mathLog10e"},DataDescriptor:{super:{pk:".",nm:"PropertyDescriptor"},pa:1,ps:[{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:3,def:1,mt:"prm",nm:"configurable"},{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:3,def:1,mt:"prm",nm:"descriptor"},{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:3,def:1,mt:"prm",nm:"enumerable"},{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,def:1,mt:"prm",nm:"writable"},{$t:{nm:"$U"},pa:1,def:1,mt:"prm",nm:"val"}],mt:"c",$at:{val:{$t:{nm:"$U"},pa:1,mt:"a",nm:"val"},enumerable:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:3,mt:"a",nm:"enumerable"},descriptor:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:3,mt:"a",nm:"descriptor"},configurable:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:3,mt:"a",nm:"configurable"},writable:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"a",nm:"writable"}},$m:{toNative:{$t:{pk:".",nm:"JSObject"},pa:3,mt:"m",an:{doc:["converts the options to native JSON"]},nm:"toNative"}},an:{doc:["describes a new object data property"]},nm:"DataDescriptor"},objectCreate:{$t:{pk:".",nm:"JSObject"},pa:1,ps:[[{$t:{pk:".",nm:"JSObject"},mt:"prm",nm:"proto"},{$t:{md:"ceylon.language",pk:"$",tp:[{mt:"tp",md:"ceylon.language",pk:"$",tp:[{mt:"tp",md:"ceylon.language",pk:"$",nm:"String"},{comp:"u",mt:"tp",l:[{pk:".",nm:"DataDescriptor"},{pk:".",nm:"AccessorDescriptor"}]}],nm:"Entry"}],nm:"Sequential"},mt:"prm",nm:"properties"}]],mt:"m",an:{doc:["create a new native object"]},nm:"objectCreate"},numberPositiveInfinity:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns positive infinity"]},nm:"numberPositiveInfinity"},objectGetOwnPropertyDescriptor:{$t:{pk:".",nm:"JSObject"},pa:1,ps:[[{$t:{pk:".",nm:"JSObject"},mt:"prm",nm:"obj"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{pk:".",nm:"JSString"}]},mt:"prm",nm:"prop"}]],mt:"m",an:{doc:["get the discriptor of a object property"]},nm:"objectGetOwnPropertyDescriptor"},dateUTCInt:{$t:{pk:".",nm:"JSDate"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"year"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"month"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"day"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"ceylon.language",pk:"$",nm:"Integer"}]},def:1,mt:"prm",nm:"hour"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"ceylon.language",pk:"$",nm:"Integer"}]},def:1,mt:"prm",nm:"minute"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"ceylon.language",pk:"$",nm:"Integer"}]},def:1,mt:"prm",nm:"second"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"ceylon.language",pk:"$",nm:"Integer"}]},def:1,mt:"prm",nm:"milli"}]],mt:"m",an:{doc:["returns the given date string as a native Date"]},nm:"dateUTCInt"},objectKeys:{$t:{pk:".",nm:"JSArray"},pa:1,ps:[[{$t:{pk:".",nm:"JSObject"},mt:"prm",nm:"obj"}]],mt:"m",an:{doc:["returns an array of object enumerable properties"]},nm:"objectKeys"},parseFloat:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{pk:".",nm:"JSString"}]},mt:"prm",nm:"float"}]],mt:"m",nm:"parseFloat"},objectDefineProperty:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{pk:".",nm:"JSObject"},mt:"prm",nm:"obj"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{pk:".",nm:"JSString"}]},mt:"prm",nm:"prop"},{$t:{comp:"u",l:[{pk:".",nm:"DataDescriptor"},{pk:".",nm:"AccessorDescriptor"}]},mt:"prm",nm:"descriptor"}]],mt:"m",an:{doc:["define a property on a native object"]},nm:"objectDefineProperty"},JSObject:{mt:"i",dyn:1,$m:{getPrototype:{$t:{pk:".",nm:"JSObject"},pa:1,mt:"m",an:{doc:["returns the objects prototype"]},nm:"getPrototype"},setPrototype:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{pk:".",nm:"JSObject"},mt:"prm",nm:"prototype"}]],mt:"m",an:{doc:["sets the objects prototype"]},nm:"setPrototype"},isPrototypeOf:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{pk:".",nm:"JSObject"},mt:"prm",nm:"obj"}]],mt:"m",an:{doc:["is the object in the passed objects prototype chain"]},nm:"isPrototypeOf"},call:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{nm:"$U"},mt:"prm",nm:"thisArg"},{$t:{nm:"$U"},mt:"prm",nm:"args"}]],mt:"m",an:{doc:["calls a function with thisArg as this and an argument list"]},nm:"call"},hasOwnProperty:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{pk:".",nm:"JSString"}]},mt:"prm",nm:"prop"}]],mt:"m",an:{doc:["does the object have the propery"]},nm:"hasOwnProperty"},propertyIsEnumerable:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{pk:".",nm:"JSString"}]},mt:"prm",nm:"prop"}]],mt:"m",an:{doc:["is the property enumerable by a for in loop"]},nm:"propertyIsEnumerable"},apply:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{nm:"$U"},mt:"prm",nm:"thisArg"},{$t:{nm:"$U"},mt:"prm",nm:"args"}]],mt:"m",an:{doc:["calls a function with thisArg as this and an array of args"]},nm:"apply"},setConstructor:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{pk:".",nm:"JSFunction"},mt:"prm",nm:"constructor"}]],mt:"m",an:{doc:["sets the objects contructor"]},nm:"setConstructor"},toString:{$t:{pk:".",nm:"JSString"},pa:1,mt:"m",an:{doc:["convert the object to a string"]},nm:"toString"},getConstructor:{$t:{pk:".",nm:"JSFunction"},pa:1,mt:"m",an:{doc:["returns the objects contructor"]},nm:"getConstructor"}},an:{doc:["native Object"]},nm:"JSObject"},objectSeal:{$t:{pk:".",nm:"JSObject"},pa:1,ps:[[{$t:{pk:".",nm:"JSObject"},mt:"prm",nm:"obj"}]],mt:"m",an:{doc:["prevents properties from being added to or removed from the object"]},nm:"objectSeal"},global:{super:{pk:".",nm:"RegExpFlag"},pa:1,mt:"o",nm:"global"},JSStringAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{replaceCallback:{$t:{pk:".",nm:"JSString"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{pk:".",nm:"JSString"},{pk:".",nm:"RegExp"}]},mt:"prm",nm:"pattern"},{$t:{pk:".",nm:"JSString"},ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"prm",nm:"match"},{$t:{nm:"$U"},mt:"prm",nm:"psOffsetExamined"}]],mt:"prm",$pt:"f",nm:"replace"}]],mt:"m",$m:{replace$b3xime:{$t:{pk:".",nm:"JSString"},ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"prm",nm:"match"},{$t:{nm:"$U"},mt:"prm",nm:"psOffsetExamined"}]],mt:"m",nm:"replace"}},an:{doc:["replace will recived a set of substrings based on the regex then an Integer for offset, and the examined String"]},nm:"replaceCallback"},toLowerCase:{$t:{pk:".",nm:"JSString"},pa:1,mt:"m",nm:"toLowerCase"},length:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",nm:"length"},match:{$t:{pk:".",nm:"RegExpAbs.RegResult"},pa:1,ps:[[{$t:{pk:".",nm:"RegExp"},mt:"prm",nm:"regexp"}]],mt:"m",nm:"match"},replace:{$t:{pk:".",nm:"JSString"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{pk:".",nm:"JSString"},{pk:".",nm:"RegExp"}]},mt:"prm",nm:"pattern"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{pk:".",nm:"JSString"}]},mt:"prm",nm:"replace"}]],mt:"m",nm:"replace"},concat:{$t:{pk:".",nm:"JSString"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",tp:[{mt:"tp",pk:".",nm:"JSString"}],nm:"Sequence"},mt:"prm",$min1:1,seq:1,nm:"strings"}]],mt:"m",nm:"concat"},substr:{$t:{pk:".",nm:"JSString"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"start"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]}]},def:1,mt:"prm",nm:"length"}]],mt:"m",nm:"substr"},substring:{$t:{pk:".",nm:"JSString"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"indexA"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]}]},def:1,mt:"prm",nm:"indexB"}]],mt:"m",nm:"substring"},lastIndexOf:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{pk:".",nm:"JSString"}]},mt:"prm",nm:"searchValue"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},def:1,mt:"prm",nm:"fromIndex"}]],mt:"m",nm:"lastIndexOf"},search:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"RegExp"},mt:"prm",nm:"regexp"}]],mt:"m",nm:"search"},split:{$t:{pk:".",nm:"JSArray"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{pk:".",nm:"JSString"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"RegExp"}]}]},def:1,mt:"prm",nm:"separator"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]}]},def:1,mt:"prm",nm:"limit"}]],mt:"m",an:{doc:["returns array of strings"]},nm:"split"},trim:{$t:{pk:".",nm:"JSString"},pa:1,mt:"m",nm:"trim"},slice:{$t:{pk:".",nm:"JSString"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"beginSlice"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]}]},def:1,mt:"prm",nm:"endSlice"}]],mt:"m",nm:"slice"},toUpperCase:{$t:{pk:".",nm:"JSString"},pa:1,mt:"m",nm:"toUpperCase"},charCodeAt:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"index"}]],mt:"m",nm:"charCodeAt"},indexOf:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{pk:".",nm:"JSString"}]},mt:"prm",nm:"searchValue"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},def:1,mt:"prm",nm:"fromIndex"}]],mt:"m",nm:"indexOf"},charAt:{$t:{pk:".",nm:"JSString"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"index"}]],mt:"m",nm:"charAt"}},nm:"JSStringAbs"},JSString:{super:{pk:".",nm:"JSStringAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$fd1rw9:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["native String"]},nm:"JSString"},dateNow:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns now as a unix timestamp"]},nm:"dateNow"},isFinite:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"num"}]],mt:"m",nm:"isFinite"},JSDateAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{setUTCSeconds:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"seconds"}]],mt:"m",an:{doc:["set the seconds UTC"]},nm:"setUTCSeconds"},setFullYear:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"year"}]],mt:"m",an:{doc:["set the year"]},nm:"setFullYear"},getTime:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns unix timestamp"]},nm:"getTime"},setUTCHours:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"hours"}]],mt:"m",an:{doc:["set the hours UTC"]},nm:"setUTCHours"},toDateString:{$t:{pk:".",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the date as a string"]},nm:"toDateString"},toUTCString:{$t:{pk:".",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the time a UTC string"]},nm:"toUTCString"},getMilliseconds:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the milliseconds"]},nm:"getMilliseconds"},getUTCHours:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the hour in UTC"]},nm:"getUTCHours"},getFullYear:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the year"]},nm:"getFullYear"},getUTCDate:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the day of the month in UTC"]},nm:"getUTCDate"},getHours:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the hour"]},nm:"getHours"},toJSON:{$t:{pk:".",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the date as a JSON string"]},nm:"toJSON"},setHours:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"hour"}]],mt:"m",an:{doc:["set the hour"]},nm:"setHours"},setSeconds:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"seconds"}]],mt:"m",an:{doc:["set the seconds"]},nm:"setSeconds"},setUTCMinutes:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"minutes"}]],mt:"m",an:{doc:["set the minutes UTC"]},nm:"setUTCMinutes"},setUTCFullYear:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"year"}]],mt:"m",an:{doc:["set the year UTC"]},nm:"setUTCFullYear"},getDate:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the day of the month"]},nm:"getDate"},getMonth:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the month"]},nm:"getMonth"},setMilliseconds:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"milli"}]],mt:"m",an:{doc:["set the milliseconds"]},nm:"setMilliseconds"},toTimeString:{$t:{pk:".",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the time a string"]},nm:"toTimeString"},setTime:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"milli"}]],mt:"m",an:{doc:["set the time as unix timestamp"]},nm:"setTime"},setMonth:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"month"}]],mt:"m",an:{doc:["set the month"]},nm:"setMonth"},setUTCMilliseconds:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"milli"}]],mt:"m",an:{doc:["set the milliseconds UTC"]},nm:"setUTCMilliseconds"},toLocaleDateString:{$t:{pk:".",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the date as a language sensitive string"]},nm:"toLocaleDateString"},getUTCMonth:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the month in UTC"]},nm:"getUTCMonth"},getUTCFullYear:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the year in UTC"]},nm:"getUTCFullYear"},setMinutes:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"minutes"}]],mt:"m",an:{doc:["set the minutes"]},nm:"setMinutes"},getUTCSeconds:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the seconds in UTC"]},nm:"getUTCSeconds"},getDay:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the day of the week"]},nm:"getDay"},getMinutes:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the minutes"]},nm:"getMinutes"},setUTCDate:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"day"}]],mt:"m",an:{doc:["set the day of the month UTC"]},nm:"setUTCDate"},toLocaleTimeString:{$t:{pk:".",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the time as a language sensitive string"]},nm:"toLocaleTimeString"},getSeconds:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the seconds"]},nm:"getSeconds"},getTimezoneOffset:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the timezone offset"]},nm:"getTimezoneOffset"},getUTCDay:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the day of the week in UTC"]},nm:"getUTCDay"},setUTCMonth:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"month"}]],mt:"m",an:{doc:["set the month UTC"]},nm:"setUTCMonth"},getUTCMinutes:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the minutes in UTC"]},nm:"getUTCMinutes"},getUTCMilliseconds:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the milliseconds in UTC"]},nm:"getUTCMilliseconds"},setDate:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"day"}]],mt:"m",an:{doc:["set the day of the month"]},nm:"setDate"},toISOString:{$t:{pk:".",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the date as a ISO string"]},nm:"toISOString"},toLocaleString:{$t:{pk:".",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the date as a language sensitive string"]},nm:"toLocaleString"}},nm:"JSDateAbs"},arrayIsArray:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{nm:"$U"},mt:"prm",nm:"array"}]],mt:"m",an:{doc:["is the passed value a native array"]},nm:"arrayIsArray"},JSFunction:{super:{pk:".",nm:"JSFunctionAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$k1zm2g:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["native Function"]},nm:"JSFunction"},RegExpAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{setLastindex:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"index"}]],mt:"m",nm:"setLastindex"},test:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{pk:".",nm:"JSString"}]},def:1,mt:"prm",nm:"str"}]],mt:"m",nm:"test"},ignoreCase:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"m",nm:"ignoreCase"},multiline:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",nm:"multiline"},global:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"m",nm:"global"},source:{$t:{pk:".",nm:"JSString"},pa:1,mt:"m",nm:"source"},getLastindex:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",nm:"getLastindex"},exec:{$t:{pk:".",nm:"JSString"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"prm",nm:"str"}]],mt:"m",nm:"exec"}},nm:"RegExpAbs",$c:{RegResult:{super:{pk:".",nm:"RegExpAbs.RegResultAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$n1z5q4:{$t:{nm:"$U"},mt:"a",nm:"n"}},nm:"RegResult"},RegResultAbs:{super:{pk:".",nm:"JSArrayAbs"},pa:257,mt:"c",$m:{input:{$t:{pk:".",nm:"JSString"},pa:1,mt:"m",nm:"input"},index:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",nm:"index"}},nm:"RegResultAbs"}}},ignore:{super:{pk:".",nm:"RegExpFlag"},pa:1,mt:"o",nm:"ignore"},objectPreventExtensions:{$t:{pk:".",nm:"JSObject"},pa:1,ps:[[{$t:{pk:".",nm:"JSObject"},mt:"prm",nm:"obj"}]],mt:"m",an:{doc:["prevents new properties from being added to the object"]},nm:"objectPreventExtensions"},createJSDate:{$t:{pk:".",nm:"JSDate"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"val"}]],mt:"m",an:{doc:["create a native Date set to now"]},nm:"createJSDate"},objectGetPrototypeOf:{$t:{pk:".",nm:"JSFunction"},pa:1,ps:[[{$t:{pk:".",nm:"JSObject"},mt:"prm",nm:"obj"}]],mt:"m",an:{doc:["returns the objects prototype"]},nm:"objectGetPrototypeOf"},objectIsFrozen:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{pk:".",nm:"JSObject"},mt:"prm",nm:"obj"}]],mt:"m",an:{doc:["can the object being altered in any way"]},nm:"objectIsFrozen"},PropertyDescriptor:{super:{md:"ceylon.language",pk:"$",nm:"Basic"},pa:257,mt:"c",$at:{enumerable:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:5,mt:"a",nm:"enumerable"},descriptor:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:5,mt:"a",nm:"descriptor"},configurable:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:5,mt:"a",nm:"configurable"}},$m:{toNative:{$t:{pk:".",nm:"JSObject"},pa:5,mt:"m",nm:"toNative"}},an:{doc:["describes a new object property"]},nm:"PropertyDescriptor"},multiple:{super:{pk:".",nm:"RegExpFlag"},pa:1,mt:"o",nm:"multiple"},JSArray:{super:{pk:".",nm:"JSArrayAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$fgjon3:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["native Array"]},nm:"JSArray"},dateParse:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{pk:".",nm:"JSString"}]},mt:"prm",nm:"dateTime"}]],mt:"m",an:{doc:["returns the given date string as a unix timestamp"]},nm:"dateParse"},JSDate:{super:{pk:".",nm:"JSDateAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$6fx3wi:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["native Date"]},nm:"JSDate"},parseInt:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{pk:".",nm:"JSString"}]},mt:"prm",nm:"int"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},def:1,mt:"prm",nm:"radix"}]],mt:"m",nm:"parseInt"},mathRoot1_2:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns square root of 1\/2"]},nm:"mathRoot1_2"},AccessorDescriptor:{super:{pk:".",nm:"PropertyDescriptor"},pa:1,ps:[{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:3,mt:"prm",nm:"configurable"},{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:3,def:1,mt:"prm",nm:"descriptor"},{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:3,def:1,mt:"prm",nm:"enumerable"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"ceylon.language",pk:"$",tp:[{mt:"tp",md:"ceylon.language",pk:"$",nm:"Anything"},{mt:"tp",md:"ceylon.language",pk:"$",nm:"Empty"}],nm:"Callable"}]},pa:1,def:1,mt:"prm",nm:"get"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"ceylon.language",pk:"$",tp:[{mt:"tp",md:"ceylon.language",pk:"$",nm:"Anything"},{mt:"tp",md:"ceylon.language",pk:"$",tp:[{comp:"u",mt:"tp",l:[{md:"ceylon.language",pk:"$",nm:"Anything"},{pk:".",nm:"Nothing"}]},{mt:"tp",md:"ceylon.language",pk:"$",nm:"Anything"},{mt:"tp",md:"ceylon.language",pk:"$",nm:"Empty"}],nm:"Tuple"}],nm:"Callable"}]},pa:1,def:1,mt:"prm",nm:"set"}],mt:"c",$at:{set:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"ceylon.language",pk:"$",tp:[{mt:"tp",md:"ceylon.language",pk:"$",nm:"Anything"},{mt:"tp",md:"ceylon.language",pk:"$",tp:[{comp:"u",mt:"tp",l:[{md:"ceylon.language",pk:"$",nm:"Anything"},{pk:".",nm:"Nothing"}]},{mt:"tp",md:"ceylon.language",pk:"$",nm:"Anything"},{mt:"tp",md:"ceylon.language",pk:"$",nm:"Empty"}],nm:"Tuple"}],nm:"Callable"}]},pa:1,mt:"a",nm:"set"},enumerable:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:3,mt:"a",nm:"enumerable"},get:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"ceylon.language",pk:"$",tp:[{mt:"tp",md:"ceylon.language",pk:"$",nm:"Anything"},{mt:"tp",md:"ceylon.language",pk:"$",nm:"Empty"}],nm:"Callable"}]},pa:1,mt:"a",nm:"get"},descriptor:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:3,mt:"a",nm:"descriptor"},configurable:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:3,mt:"a",nm:"configurable"}},$m:{toNative:{$t:{pk:".",nm:"JSObject"},pa:3,mt:"m",an:{doc:["converts the options to native JSON"]},nm:"toNative"}},an:{doc:["describes a new object accessor property"]},nm:"AccessorDescriptor"},createJSNumber:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"ceylon.language",pk:"$",nm:"Float"},{md:"ceylon.language",pk:"$",nm:"String"}]},mt:"prm",nm:"val"}]],mt:"m",an:{doc:["creates a new native number"]},nm:"createJSNumber"},MathAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{tan:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"x"}]],mt:"m",an:{doc:["returns the tangent a number"]},nm:"tan"},log:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"x"}]],mt:"m",an:{doc:["returns log of the number"]},nm:"log"},max:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",tp:[{mt:"tp",pk:".",nm:"JSNumber"}],nm:"Sequential"},mt:"prm",seq:1,nm:"numbers"}]],mt:"m",an:{doc:["returns the max of the passed numbers"]},nm:"max"},cos:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"x"}]],mt:"m",an:{doc:["returns the cosine of a number"]},nm:"cos"},acos:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"x"}]],mt:"m",an:{doc:["returns the arccosine value of a number"]},nm:"acos"},ceil:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"x"}]],mt:"m",an:{doc:["returns ceiling of the passed number"]},nm:"ceil"},atan:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"x"}]],mt:"m",an:{doc:["returns the arctangent value of a number"]},nm:"atan"},random:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns a pseudo-random number between 0 and 1"]},nm:"random"},abs:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"x"}]],mt:"m",an:{doc:["returns the absolute value of a number"]},nm:"abs"},min:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",tp:[{mt:"tp",pk:".",nm:"JSNumber"}],nm:"Sequential"},mt:"prm",seq:1,nm:"numbers"}]],mt:"m",an:{doc:["returns the min of the passed numbers"]},nm:"min"},round:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"x"}]],mt:"m",an:{doc:["returns a number rounded to the nearest integer"]},nm:"round"},sqrt:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"x"}]],mt:"m",an:{doc:["returns the square root of a number"]},nm:"sqrt"},pow:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"base"},{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"exponent"}]],mt:"m",an:{doc:["returns the base^exponent"]},nm:"pow"},sin:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"x"}]],mt:"m",an:{doc:["returns the sine of a number"]},nm:"sin"},asin:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"x"}]],mt:"m",an:{doc:["returns the arcsine value of a number"]},nm:"asin"},exp:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"x"}]],mt:"m",an:{doc:["returns the E^x"]},nm:"exp"},floor:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"x"}]],mt:"m",an:{doc:["returns floor of the passed number"]},nm:"floor"},atan2:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"y"},{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"x"}]],mt:"m",an:{doc:["returns the arctangent of the quotient of y\/x"]},nm:"atan2"}},nm:"MathAbs"},JSArrayAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{reduce:{$t:{nm:"$U"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"previousValue"},{$t:{nm:"$U"},mt:"prm",nm:"currentValue"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"index"},{$t:{nm:"$U"},mt:"prm",nm:"array"}]],mt:"prm",$pt:"f",nm:"callback"},{$t:{nm:"$U"},def:1,mt:"prm",nm:"initialValue"}]],mt:"m",$m:{callback$oc3lky:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"previousValue"},{$t:{nm:"$U"},mt:"prm",nm:"currentValue"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"index"},{$t:{nm:"$U"},mt:"prm",nm:"array"}]],mt:"m",nm:"callback"}},an:{doc:["returns a single value after looping over the array left to right combining two values each time"]},nm:"reduce"},some:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"val"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"index"},{$t:{nm:"$U"},mt:"prm",nm:"array"}]],mt:"prm",$pt:"f",nm:"callback"},{$t:{nm:"$U"},def:1,mt:"prm",nm:"context"}]],mt:"m",$m:{callback$skpdok:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"val"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"index"},{$t:{nm:"$U"},mt:"prm",nm:"array"}]],mt:"m",nm:"callback"}},an:{doc:["tests if some elements in the array pass the callback test"]},nm:"some"},concatArrays:{$t:{pk:".",nm:"JSArray"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",tp:[{mt:"tp",pk:".",nm:"JSArray"}],nm:"Sequential"},mt:"prm",seq:1,nm:"arrays"}]],mt:"m",an:{doc:["returns array after combining it with the passed arrays"]},nm:"concatArrays"},splice:{$t:{pk:".",nm:"JSArray"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"index"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"howMany"},{$t:{md:"ceylon.language",pk:"$",tp:[{mt:"tp",md:"ceylon.language",pk:"$",nm:"Anything"}],nm:"Sequential"},mt:"prm",seq:1,nm:"elements"}]],mt:"m",an:{doc:["returns an array of removed elements after it adds new elements while removing old ones"]},nm:"splice"},forEach:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"val"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"index"},{$t:{nm:"$U"},mt:"prm",nm:"array"}]],mt:"prm",$pt:"f",nm:"callback"},{$t:{nm:"$U"},def:1,mt:"prm",nm:"context"}]],mt:"m",$m:{callback$yc3bc2:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"val"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"index"},{$t:{nm:"$U"},mt:"prm",nm:"array"}]],mt:"m",nm:"callback"}},an:{doc:["executes the callback for each element in the array"]},nm:"forEach"},shift:{$t:{nm:"$U"},pa:1,mt:"m",an:{doc:["returns and remove the first element in the array"]},nm:"shift"},sort:{$t:{pk:".",nm:"JSArray"},pa:1,mt:"m",an:{doc:["sort the items in lexicographic order"]},nm:"sort"},concat:{$t:{pk:".",nm:"JSArray"},pa:1,ps:[[{$t:{nm:"$U"},mt:"prm",nm:"elements"}]],mt:"m",an:{doc:["returns array after appending the elements"]},nm:"concat"},reverse:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,mt:"m",an:{doc:["reverse the order of the elements in the array"]},nm:"reverse"},push:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{nm:"$U"},mt:"prm",nm:"elements"}]],mt:"m",an:{doc:["returns length after adding one or more elements to the array"]},nm:"push"},pop:{$t:{nm:"$U"},pa:1,mt:"m",an:{doc:["returns and remove the last element in the array"]},nm:"pop"},filter:{$t:{pk:".",nm:"JSArray"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"val"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"index"},{$t:{nm:"$U"},mt:"prm",nm:"array"}]],mt:"prm",$pt:"f",nm:"callback"},{$t:{nm:"$U"},def:1,mt:"prm",nm:"context"}]],mt:"m",$m:{callback$h1w274:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"val"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"index"},{$t:{nm:"$U"},mt:"prm",nm:"array"}]],mt:"m",nm:"callback"}},an:{doc:["returns an array of elements which pass the callback test"]},nm:"filter"},lastIndexOf:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{nm:"$U"},mt:"prm",nm:"searchElement"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]}]},def:1,mt:"prm",nm:"fromIndex"}]],mt:"m",an:{doc:["returns the last index of the element in the array or -1"]},nm:"lastIndexOf"},setLength:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"len"}]],mt:"m",an:{doc:["set the length of the array"]},nm:"setLength"},sortCompare:{$t:{pk:".",nm:"JSArray"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"a"},{$t:{nm:"$U"},mt:"prm",nm:"b"}]],mt:"prm",$pt:"f",nm:"compare"}]],mt:"m",$m:{compare$6rssx3:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"a"},{$t:{nm:"$U"},mt:"prm",nm:"b"}]],mt:"m",nm:"compare"}},an:{doc:["sort the items using the compare function"]},nm:"sortCompare"},slice:{$t:{pk:".",nm:"JSArray"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{pk:".",nm:"JSNumber"}]},mt:"prm",nm:"begin"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]}]},def:1,mt:"prm",nm:"end"}]],mt:"m",an:{doc:["returns shallow copy of portion of the array"]},nm:"slice"},getLength:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the length of the array"]},nm:"getLength"},unshift:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{nm:"$U"},mt:"prm",nm:"elements"}]],mt:"m",an:{doc:["returns length after adding elements to the front of the array"]},nm:"unshift"},join:{$t:{pk:".",nm:"JSString"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"String"},def:1,mt:"prm",nm:"separator"}]],mt:"m",an:{doc:["returns a string after joining all elements with separator"]},nm:"join"},reduceRight:{$t:{nm:"$U"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"previousValue"},{$t:{nm:"$U"},mt:"prm",nm:"currentValue"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"index"},{$t:{nm:"$U"},mt:"prm",nm:"array"}]],mt:"prm",$pt:"f",nm:"callback"},{$t:{nm:"$U"},def:1,mt:"prm",nm:"initialValue"}]],mt:"m",$m:{callback$93e7vy:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"previousValue"},{$t:{nm:"$U"},mt:"prm",nm:"currentValue"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"index"},{$t:{nm:"$U"},mt:"prm",nm:"array"}]],mt:"m",nm:"callback"}},an:{doc:["returns a single value after looping over the array right to left combining two values each time"]},nm:"reduceRight"},indexOf:{$t:{pk:".",nm:"JSNumber"},pa:1,ps:[[{$t:{nm:"$U"},mt:"prm",nm:"searchElement"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]}]},def:1,mt:"prm",nm:"fromIndex"}]],mt:"m",an:{doc:["returns the first index of the element in the array or -1"]},nm:"indexOf"},every:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"val"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"index"},{$t:{nm:"$U"},mt:"prm",nm:"array"}]],mt:"prm",$pt:"f",nm:"callback"},{$t:{nm:"$U"},def:1,mt:"prm",nm:"context"}]],mt:"m",$m:{callback$oeiu57:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"val"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"index"},{$t:{nm:"$U"},mt:"prm",nm:"array"}]],mt:"m",nm:"callback"}},an:{doc:["tests if all elements in the array pass the callback test"]},nm:"every"},map:{$t:{pk:".",nm:"JSArray"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"val"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"index"},{$t:{nm:"$U"},mt:"prm",nm:"array"}]],mt:"prm",$pt:"f",nm:"callback"},{$t:{nm:"$U"},def:1,mt:"prm",nm:"context"}]],mt:"m",$m:{callback$j9fsnw:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"val"},{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},mt:"prm",nm:"index"},{$t:{nm:"$U"},mt:"prm",nm:"array"}]],mt:"m",nm:"callback"}},an:{doc:["returns an array of the elements returned from the callback"]},nm:"map"}},nm:"JSArrayAbs"},mathLog2:{$t:{pk:".",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns log of 2"]},nm:"mathLog2"},objectFreeze:{$t:{pk:".",nm:"JSObject"},pa:1,ps:[[{$t:{pk:".",nm:"JSObject"},mt:"prm",nm:"obj"}]],mt:"m",an:{doc:["stops the object being altered in any way"]},nm:"objectFreeze"},createJSDateYMD:{$t:{pk:".",nm:"JSDate"},pa:1,ps:[[{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"year"},{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"month"},{$t:{pk:".",nm:"JSNumber"},mt:"prm",nm:"day"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]},def:1,mt:"prm",nm:"hour"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]},def:1,mt:"prm",nm:"minute"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]},def:1,mt:"prm",nm:"second"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"JSNumber"}]},def:1,mt:"prm",nm:"milli"}]],mt:"m",an:{doc:["create a native date at the given date time"]},nm:"createJSDateYMD"}},"$mod-name":"com.openswimsoftware.ceylon.js.language"};
ex$.$CCMM$=function(){return $CCMM$;};
var m$3g8=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$3g8.$addmod$(m$3g8,'ceylon.language/1.1.0');
ex$.$pkg$ans$com$openswimsoftware$ceylon$js$language=function(){return[m$3g8.shared()];};
ex$.$mod$ans$=function(){return[m$3g8.doc("JavaScript 1.8.5")];};

//MethodDef createJSNumber at number.ceylon (1:0-6:0)
function createJSNumber($3h6){
    /*BEG dynblock*/
    return JSNumber((typeof Number==='undefined'||Number===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Number"),'4:18-4:23','number.ceylon'):Number)($3h6));
    /*END dynblock*/
}
ex$.createJSNumber=createJSNumber;
createJSNumber.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[{nm:'val',mt:'prm',$t:{t:'u',l:[{t:m$3g8.Integer},{t:m$3g8.Float},{t:m$3g8.$_String}]}}],pa:1,an:function(){return[m$3g8.doc("creates a new native number")];},d:['com.openswimsoftware.ceylon.js.language','createJSNumber']};};

//MethodDef numberMaxValue at number.ceylon (8:0-13:0)
function numberMaxValue(){
    /*BEG dynblock*/
    return JSNumber((typeof Number==='undefined'||Number===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Number"),'11:18-11:23','number.ceylon'):Number).MAX_VALUE);
    /*END dynblock*/
}
ex$.numberMaxValue=numberMaxValue;
numberMaxValue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[],pa:1,an:function(){return[m$3g8.doc("returns the max possible number")];},d:['com.openswimsoftware.ceylon.js.language','numberMaxValue']};};

//MethodDef numberMinValue at number.ceylon (15:0-20:0)
function numberMinValue(){
    /*BEG dynblock*/
    return JSNumber((typeof Number==='undefined'||Number===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Number"),'18:18-18:23','number.ceylon'):Number).MIN_VALUE);
    /*END dynblock*/
}
ex$.numberMinValue=numberMinValue;
numberMinValue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[],pa:1,an:function(){return[m$3g8.doc("returns the min possible number")];},d:['com.openswimsoftware.ceylon.js.language','numberMinValue']};};

//MethodDef numberNegativeInfinity at number.ceylon (22:0-27:0)
function numberNegativeInfinity(){
    /*BEG dynblock*/
    return JSNumber((typeof Number==='undefined'||Number===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Number"),'25:18-25:23','number.ceylon'):Number).NEGATIVE_INFINITY);
    /*END dynblock*/
}
ex$.numberNegativeInfinity=numberNegativeInfinity;
numberNegativeInfinity.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[],pa:1,an:function(){return[m$3g8.doc("returns negative infinity")];},d:['com.openswimsoftware.ceylon.js.language','numberNegativeInfinity']};};

//MethodDef numberPositiveInfinity at number.ceylon (29:0-34:0)
function numberPositiveInfinity(){
    /*BEG dynblock*/
    return JSNumber((typeof Number==='undefined'||Number===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Number"),'32:18-32:23','number.ceylon'):Number).POSITIVE_INFINITY);
    /*END dynblock*/
}
ex$.numberPositiveInfinity=numberPositiveInfinity;
numberPositiveInfinity.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[],pa:1,an:function(){return[m$3g8.doc("returns positive infinity")];},d:['com.openswimsoftware.ceylon.js.language','numberPositiveInfinity']};};

//MethodDef mathE at math.ceylon (3:0-8:0)
function mathE(){
    /*BEG dynblock*/
    return JSNumber((typeof Math==='undefined'||Math===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Math"),'6:18-6:21','math.ceylon'):Math).E);
    /*END dynblock*/
}
ex$.mathE=mathE;
mathE.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[],pa:1,an:function(){return[m$3g8.doc("returns natural log")];},d:['com.openswimsoftware.ceylon.js.language','mathE']};};

//MethodDef mathLog2 at math.ceylon (10:0-15:0)
function mathLog2(){
    /*BEG dynblock*/
    return JSNumber((typeof Math==='undefined'||Math===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Math"),'13:18-13:21','math.ceylon'):Math).LN2);
    /*END dynblock*/
}
ex$.mathLog2=mathLog2;
mathLog2.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[],pa:1,an:function(){return[m$3g8.doc("returns log of 2")];},d:['com.openswimsoftware.ceylon.js.language','mathLog2']};};

//MethodDef mathLog10 at math.ceylon (17:0-22:0)
function mathLog10(){
    /*BEG dynblock*/
    return JSNumber((typeof Math==='undefined'||Math===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Math"),'20:18-20:21','math.ceylon'):Math).LN10);
    /*END dynblock*/
}
ex$.mathLog10=mathLog10;
mathLog10.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[],pa:1,an:function(){return[m$3g8.doc("returns log of 10")];},d:['com.openswimsoftware.ceylon.js.language','mathLog10']};};

//MethodDef mathLog2e at math.ceylon (24:0-29:0)
function mathLog2e(){
    /*BEG dynblock*/
    return JSNumber((typeof Math==='undefined'||Math===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Math"),'27:18-27:21','math.ceylon'):Math).LOG2E);
    /*END dynblock*/
}
ex$.mathLog2e=mathLog2e;
mathLog2e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[],pa:1,an:function(){return[m$3g8.doc("returns natural log of 2")];},d:['com.openswimsoftware.ceylon.js.language','mathLog2e']};};

//MethodDef mathLog10e at math.ceylon (31:0-36:0)
function mathLog10e(){
    /*BEG dynblock*/
    return JSNumber((typeof Math==='undefined'||Math===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Math"),'34:18-34:21','math.ceylon'):Math).LOG10E);
    /*END dynblock*/
}
ex$.mathLog10e=mathLog10e;
mathLog10e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[],pa:1,an:function(){return[m$3g8.doc("returns natural log of 10")];},d:['com.openswimsoftware.ceylon.js.language','mathLog10e']};};

//MethodDef mathPi at math.ceylon (38:0-43:0)
function mathPi(){
    /*BEG dynblock*/
    return JSNumber((typeof Math==='undefined'||Math===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Math"),'41:18-41:21','math.ceylon'):Math).PI);
    /*END dynblock*/
}
ex$.mathPi=mathPi;
mathPi.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[],pa:1,an:function(){return[m$3g8.doc("returns pi")];},d:['com.openswimsoftware.ceylon.js.language','mathPi']};};

//MethodDef mathRoot1_2 at math.ceylon (45:0-50:0)
function mathRoot1_2(){
    /*BEG dynblock*/
    return JSNumber((typeof Math==='undefined'||Math===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Math"),'48:18-48:21','math.ceylon'):Math).SQRT1_2);
    /*END dynblock*/
}
ex$.mathRoot1_2=mathRoot1_2;
mathRoot1_2.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[],pa:1,an:function(){return[m$3g8.doc("returns square root of 1/2")];},d:['com.openswimsoftware.ceylon.js.language','mathRoot1_2']};};

//MethodDef mathRoot2 at math.ceylon (52:0-57:0)
function mathRoot2(){
    /*BEG dynblock*/
    return JSNumber((typeof Math==='undefined'||Math===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Math"),'55:18-55:21','math.ceylon'):Math).SQRT2);
    /*END dynblock*/
}
ex$.mathRoot2=mathRoot2;
mathRoot2.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[],pa:1,an:function(){return[m$3g8.doc("returns square root of 2")];},d:['com.openswimsoftware.ceylon.js.language','mathRoot2']};};

//ClassDef RegExpFlag at regexp.ceylon (1:0-1:77)
function RegExpFlag($3j3,regExpFlag$){
    $init$RegExpFlag();
    if(regExpFlag$===undefined)m$3g8.throwexc(m$3g8.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    regExpFlag$.$3j3_=$3j3;
    return regExpFlag$;
}
RegExpFlag.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3g8.Basic},ps:[{nm:'name',mt:'prm',$t:{t:m$3g8.$_String}}],of:[$prop$get$3j4,$prop$get$3j5,$prop$get$3j6],pa:257,d:['com.openswimsoftware.ceylon.js.language','RegExpFlag']};};
ex$.RegExpFlag=RegExpFlag;
function $init$RegExpFlag(){
    if(RegExpFlag.$$===undefined){
        m$3g8.initTypeProto(RegExpFlag,'com.openswimsoftware.ceylon.js.language::RegExpFlag',m$3g8.Basic);
        (function(regExpFlag$){
            m$3g8.atr$(regExpFlag$,'$3j3',function(){return this.$3j3_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3g8.$_String},$cont:RegExpFlag,d:['com.openswimsoftware.ceylon.js.language','RegExpFlag','$at','name$ayhn9d']};});
        })(RegExpFlag.$$.prototype);
    }
    return RegExpFlag;
}
ex$.$init$RegExpFlag=$init$RegExpFlag;
$init$RegExpFlag();

//ObjectDef global at regexp.ceylon (3:0-3:46)
function $3j4(){
    var global$=new $3j4.$$;RegExpFlag("g",global$);
    return global$;
};$3j4.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RegExpFlag},pa:1,d:['com.openswimsoftware.ceylon.js.language','global']};};
function $init$$3j4(){
    if($3j4.$$===undefined){
        m$3g8.initTypeProto($3j4,'com.openswimsoftware.ceylon.js.language::global',$init$RegExpFlag());
    }
    return $3j4;
}
ex$.$init$$3j4=$init$$3j4;
$init$$3j4();
var $3j7;
function getGlobal(){
    if($3j7===undefined){$3j7=$init$$3j4()();$3j7.$crtmm$=getGlobal.$crtmm$;}
    return $3j7;
}
ex$.getGlobal=getGlobal;
getGlobal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3j4},pa:1,d:['com.openswimsoftware.ceylon.js.language','global']};};
$prop$getGlobal={get:getGlobal,$crtmm$:getGlobal.$crtmm$};
get$3j4=getGlobal;$prop$get$3j4=getGlobal;
ex$.$prop$getGlobal=$prop$getGlobal;

//ObjectDef ignore at regexp.ceylon (4:0-4:46)
function $3j5(){
    var ignore$=new $3j5.$$;RegExpFlag("i",ignore$);
    return ignore$;
};$3j5.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RegExpFlag},pa:1,d:['com.openswimsoftware.ceylon.js.language','ignore']};};
function $init$$3j5(){
    if($3j5.$$===undefined){
        m$3g8.initTypeProto($3j5,'com.openswimsoftware.ceylon.js.language::ignore',$init$RegExpFlag());
    }
    return $3j5;
}
ex$.$init$$3j5=$init$$3j5;
$init$$3j5();
var $3j8;
function getIgnore(){
    if($3j8===undefined){$3j8=$init$$3j5()();$3j8.$crtmm$=getIgnore.$crtmm$;}
    return $3j8;
}
ex$.getIgnore=getIgnore;
getIgnore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3j5},pa:1,d:['com.openswimsoftware.ceylon.js.language','ignore']};};
$prop$getIgnore={get:getIgnore,$crtmm$:getIgnore.$crtmm$};
get$3j5=getIgnore;$prop$get$3j5=getIgnore;
ex$.$prop$getIgnore=$prop$getIgnore;

//ObjectDef multiple at regexp.ceylon (5:0-5:48)
function $3j6(){
    var multiple$=new $3j6.$$;RegExpFlag("m",multiple$);
    return multiple$;
};$3j6.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RegExpFlag},pa:1,d:['com.openswimsoftware.ceylon.js.language','multiple']};};
function $init$$3j6(){
    if($3j6.$$===undefined){
        m$3g8.initTypeProto($3j6,'com.openswimsoftware.ceylon.js.language::multiple',$init$RegExpFlag());
    }
    return $3j6;
}
ex$.$init$$3j6=$init$$3j6;
$init$$3j6();
var $3j9;
function getMultiple(){
    if($3j9===undefined){$3j9=$init$$3j6()();$3j9.$crtmm$=getMultiple.$crtmm$;}
    return $3j9;
}
ex$.getMultiple=getMultiple;
getMultiple.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3j6},pa:1,d:['com.openswimsoftware.ceylon.js.language','multiple']};};
$prop$getMultiple={get:getMultiple,$crtmm$:getMultiple.$crtmm$};
get$3j6=getMultiple;$prop$get$3j6=getMultiple;
ex$.$prop$getMultiple=$prop$getMultiple;

//MethodDef createJSRegExp at regexp.ceylon (7:0-19:0)
function createJSRegExp($3ja,$3jb){
    if($3jb===undefined){$3jb=m$3g8.getEmpty();}
    //Switch statement at regexp.ceylon (8:1-18:1)
    var $3jc=$3ja;
    if(m$3g8.is$($3ja,{t:m$3g8.$_String})) {
        /*BEG dynblock*/
        return RegExp((typeof RegExp==='undefined'||RegExp===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: RegExp"),'11:17-11:22','regexp.ceylon'):RegExp)($3jc,(function(){
            //SpreadOp at regexp.ceylon (11:35-11:47)
            var $3jd=[];
            var $3je=$3jb.iterator();
            var $3jf;
            while(($3jf=$3je.next())!==m$3g8.getFinished()){
                $3jd.push($3jf.string);
            }
            return m$3g8.sequence($3jd,{Element$sequence:{t:m$3g8.$_String},Absent$sequence:{t:m$3g8.Null}})||m$3g8.getEmpty();
        }())));
        /*END dynblock*/
    }else if(m$3g8.is$($3ja,{t:JSString})) {
        /*BEG dynblock*/
        return RegExp((typeof RegExp==='undefined'||RegExp===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: RegExp"),'16:17-16:22','regexp.ceylon'):RegExp)($3jc.$_native,(function(){
            //SpreadOp at regexp.ceylon (16:42-16:54)
            var $3jg=[];
            var $3jh=$3jb.iterator();
            var $3ji;
            while(($3ji=$3jh.next())!==m$3g8.getFinished()){
                $3jg.push($3ji.string);
            }
            return m$3g8.sequence($3jg,{Element$sequence:{t:m$3g8.$_String},Absent$sequence:{t:m$3g8.Null}})||m$3g8.getEmpty();
        }())));
        /*END dynblock*/
    }//End switch statement at regexp.ceylon (8:1-18:1)
}
ex$.createJSRegExp=createJSRegExp;
createJSRegExp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:RegExp},ps:[{nm:'pattern',mt:'prm',$t:{t:'u',l:[{t:m$3g8.$_String},{t:JSString}]}},{nm:'flags',mt:'prm',seq:1,$t:{t:m$3g8.Sequential,a:{Element$Sequential:{t:RegExpFlag}}}}],pa:1,d:['com.openswimsoftware.ceylon.js.language','createJSRegExp']};};

//MethodDef createJSDateNow at date.ceylon (1:0-6:0)
function createJSDateNow(){
    /*BEG dynblock*/
    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'4:16-4:19','date.ceylon'):Date)());
    /*END dynblock*/
}
ex$.createJSDateNow=createJSDateNow;
createJSDateNow.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSDate},ps:[],pa:1,an:function(){return[m$3g8.doc("create a native Date set to now")];},d:['com.openswimsoftware.ceylon.js.language','createJSDateNow']};};

//MethodDef createJSDate at date.ceylon (8:0-19:0)
function createJSDate($3k3){
    /*BEG dynblock*/
    //Switch statement at date.ceylon (11:2-17:2)
    var $3k4=$3k3;
    if(m$3g8.is$($3k3,{t:'u',l:[{t:m$3g8.$_String},{t:m$3g8.Integer}]})) {
        return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'13:17-13:20','date.ceylon'):Date)($3k4));
    }else if(m$3g8.is$($3k3,{t:JSNumber})) {
        return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'16:17-16:20','date.ceylon'):Date)($3k4.$_native));
    }//End switch statement at date.ceylon (11:2-17:2)
    /*END dynblock*/
}
ex$.createJSDate=createJSDate;
createJSDate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSDate},ps:[{nm:'val',mt:'prm',$t:{t:'u',l:[{t:m$3g8.$_String},{t:m$3g8.Integer},{t:JSNumber}]}}],pa:1,an:function(){return[m$3g8.doc("create a native Date set to now")];},d:['com.openswimsoftware.ceylon.js.language','createJSDate']};};

//MethodDef createJSDateYMD at date.ceylon (21:0-147:0)
function createJSDateYMD($3k5,$3k6,$3k7,$3k8,$3k9,$3ka,$3kb){
    if($3k8===undefined){$3k8=null;}
    if($3k9===undefined){$3k9=null;}
    if($3ka===undefined){$3ka=null;}
    if($3kb===undefined){$3kb=null;}
    //Switch statement at date.ceylon (24:1-146:1)
    var $3kc=$3k8;
    if(m$3g8.is$($3k8,{t:JSNumber})) {
        //Switch statement at date.ceylon (26:2-84:2)
        var $3kd=$3k9;
        if(m$3g8.is$($3k9,{t:JSNumber})) {
            //Switch statement at date.ceylon (28:3-54:3)
            var $3ke=$3ka;
            if(m$3g8.is$($3ka,{t:JSNumber})) {
                //Switch statement at date.ceylon (30:4-40:4)
                var $3kf=$3kb;
                if(m$3g8.is$($3kb,{t:JSNumber})) {
                    /*BEG dynblock*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'33:20-33:23','date.ceylon'):Date)($3k5.$_native,$3k6.$_native,$3k7.$_native,$3kc.$_native,$3kd.$_native,$3ke.$_native,$3kf.$_native));
                    /*END dynblock*/
                }else if(m$3g8.is$($3kb,{t:m$3g8.Null})) {
                    /*BEG dynblock*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'38:20-38:23','date.ceylon'):Date)($3k5.$_native,$3k6.$_native,$3k7.$_native,$3kc.$_native,$3kd.$_native,$3ke.$_native));
                    /*END dynblock*/
                }//End switch statement at date.ceylon (30:4-40:4)
            }else if(m$3g8.is$($3ka,{t:m$3g8.Null})) {
                //Switch statement at date.ceylon (43:4-53:4)
                var $3kg=$3kb;
                if(m$3g8.is$($3kb,{t:JSNumber})) {
                    /*BEG dynblock*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'46:20-46:23','date.ceylon'):Date)($3k5.$_native,$3k6.$_native,$3k7.$_native,$3kc.$_native,$3kd.$_native,null,$3kg.$_native));
                    /*END dynblock*/
                }else if(m$3g8.is$($3kb,{t:m$3g8.Null})) {
                    /*BEG dynblock*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'51:20-51:23','date.ceylon'):Date)($3k5.$_native,$3k6.$_native,$3k7.$_native,$3kc.$_native,$3kd.$_native));
                    /*END dynblock*/
                }//End switch statement at date.ceylon (43:4-53:4)
            }//End switch statement at date.ceylon (28:3-54:3)
        }else if(m$3g8.is$($3k9,{t:m$3g8.Null})) {
            //Switch statement at date.ceylon (57:3-83:3)
            var $3kh=$3ka;
            if(m$3g8.is$($3ka,{t:JSNumber})) {
                //Switch statement at date.ceylon (59:4-69:4)
                var $3ki=$3kb;
                if(m$3g8.is$($3kb,{t:JSNumber})) {
                    /*BEG dynblock*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'62:20-62:23','date.ceylon'):Date)($3k5.$_native,$3k6.$_native,$3k7.$_native,null,null,$3kh.$_native,$3ki.$_native));
                    /*END dynblock*/
                }else if(m$3g8.is$($3kb,{t:m$3g8.Null})) {
                    /*BEG dynblock*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'67:20-67:23','date.ceylon'):Date)($3k5.$_native,$3k6.$_native,$3k7.$_native,null,null,$3kh.$_native));
                    /*END dynblock*/
                }//End switch statement at date.ceylon (59:4-69:4)
            }else if(m$3g8.is$($3ka,{t:m$3g8.Null})) {
                //Switch statement at date.ceylon (72:4-82:4)
                var $3kj=$3kb;
                if(m$3g8.is$($3kb,{t:JSNumber})) {
                    /*BEG dynblock*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'75:20-75:23','date.ceylon'):Date)($3k5.$_native,$3k6.$_native,$3k7.$_native,null,null,null,$3kj.$_native));
                    /*END dynblock*/
                }else if(m$3g8.is$($3kb,{t:m$3g8.Null})) {
                    /*BEG dynblock*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'80:20-80:23','date.ceylon'):Date)($3k5.$_native,$3k6.$_native,$3k7.$_native));
                    /*END dynblock*/
                }//End switch statement at date.ceylon (72:4-82:4)
            }//End switch statement at date.ceylon (57:3-83:3)
        }//End switch statement at date.ceylon (26:2-84:2)
    }else if(m$3g8.is$($3k8,{t:m$3g8.Null})) {
        //Switch statement at date.ceylon (87:2-145:2)
        var $3kk=$3k9;
        if(m$3g8.is$($3k9,{t:JSNumber})) {
            //Switch statement at date.ceylon (89:3-115:3)
            var $3kl=$3ka;
            if(m$3g8.is$($3ka,{t:JSNumber})) {
                //Switch statement at date.ceylon (91:4-101:4)
                var $3km=$3kb;
                if(m$3g8.is$($3kb,{t:JSNumber})) {
                    /*BEG dynblock*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'94:20-94:23','date.ceylon'):Date)($3k5.$_native,$3k6.$_native,$3k7.$_native,null,$3kk.$_native,$3kl.$_native,$3km.$_native));
                    /*END dynblock*/
                }else if(m$3g8.is$($3kb,{t:m$3g8.Null})) {
                    /*BEG dynblock*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'99:20-99:23','date.ceylon'):Date)($3k5.$_native,$3k6.$_native,$3k7.$_native,null,$3kk.$_native,$3kl.$_native));
                    /*END dynblock*/
                }//End switch statement at date.ceylon (91:4-101:4)
            }else if(m$3g8.is$($3ka,{t:m$3g8.Null})) {
                //Switch statement at date.ceylon (104:4-114:4)
                var $3kn=$3kb;
                if(m$3g8.is$($3kb,{t:JSNumber})) {
                    /*BEG dynblock*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'107:20-107:23','date.ceylon'):Date)($3k5.$_native,$3k6.$_native,$3k7.$_native,null,$3kk.$_native,null,$3kn.$_native));
                    /*END dynblock*/
                }else if(m$3g8.is$($3kb,{t:m$3g8.Null})) {
                    /*BEG dynblock*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'112:20-112:23','date.ceylon'):Date)($3k5.$_native,$3k6.$_native,$3k7.$_native,null,$3kk.$_native));
                    /*END dynblock*/
                }//End switch statement at date.ceylon (104:4-114:4)
            }//End switch statement at date.ceylon (89:3-115:3)
        }else if(m$3g8.is$($3k9,{t:m$3g8.Null})) {
            //Switch statement at date.ceylon (118:3-144:3)
            var $3ko=$3ka;
            if(m$3g8.is$($3ka,{t:JSNumber})) {
                //Switch statement at date.ceylon (120:4-130:4)
                var $3kp=$3kb;
                if(m$3g8.is$($3kb,{t:JSNumber})) {
                    /*BEG dynblock*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'123:20-123:23','date.ceylon'):Date)($3k5.$_native,$3k6.$_native,$3k7.$_native,null,null,$3ko.$_native,$3kp.$_native));
                    /*END dynblock*/
                }else if(m$3g8.is$($3kb,{t:m$3g8.Null})) {
                    /*BEG dynblock*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'128:20-128:23','date.ceylon'):Date)($3k5.$_native,$3k6.$_native,$3k7.$_native,null,null,$3ko.$_native));
                    /*END dynblock*/
                }//End switch statement at date.ceylon (120:4-130:4)
            }else if(m$3g8.is$($3ka,{t:m$3g8.Null})) {
                //Switch statement at date.ceylon (133:4-143:4)
                var $3kq=$3kb;
                if(m$3g8.is$($3kb,{t:JSNumber})) {
                    /*BEG dynblock*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'136:20-136:23','date.ceylon'):Date)($3k5.$_native,$3k6.$_native,$3k7.$_native,null,null,null,$3kq.$_native));
                    /*END dynblock*/
                }else if(m$3g8.is$($3kb,{t:m$3g8.Null})) {
                    /*BEG dynblock*/
                    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'141:20-141:23','date.ceylon'):Date)($3k5.$_native,$3k6.$_native,$3k7.$_native));
                    /*END dynblock*/
                }//End switch statement at date.ceylon (133:4-143:4)
            }//End switch statement at date.ceylon (118:3-144:3)
        }//End switch statement at date.ceylon (87:2-145:2)
    }//End switch statement at date.ceylon (24:1-146:1)
}
ex$.createJSDateYMD=createJSDateYMD;
createJSDateYMD.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSDate},ps:[{nm:'year',mt:'prm',$t:{t:JSNumber}},{nm:'month',mt:'prm',$t:{t:JSNumber}},{nm:'day',mt:'prm',$t:{t:JSNumber}},{nm:'hour',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:JSNumber}]}},{nm:'minute',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:JSNumber}]}},{nm:'second',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:JSNumber}]}},{nm:'milli',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:JSNumber}]}}],pa:1,an:function(){return[m$3g8.doc("create a native date at the given date time")];},d:['com.openswimsoftware.ceylon.js.language','createJSDateYMD']};};

//MethodDef createJSDateYMDInt at date.ceylon (149:0-155:0)
function createJSDateYMDInt($3kr,$3ks,$3kt,$3ku,$3kv,$3kw,$3kx){
    if($3ku===undefined){$3ku=null;}
    if($3kv===undefined){$3kv=null;}
    if($3kw===undefined){$3kw=null;}
    if($3kx===undefined){$3kx=null;}
    /*BEG dynblock*/
    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'153:16-153:19','date.ceylon'):Date)($3kr,$3ks,$3kt,$3ku,$3kv,$3kw,$3kx));
    /*END dynblock*/
}
ex$.createJSDateYMDInt=createJSDateYMDInt;
createJSDateYMDInt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSDate},ps:[{nm:'year',mt:'prm',$t:{t:m$3g8.Integer}},{nm:'month',mt:'prm',$t:{t:m$3g8.Integer}},{nm:'day',mt:'prm',$t:{t:m$3g8.Integer}},{nm:'hour',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:m$3g8.Integer}]}},{nm:'minute',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:m$3g8.Integer}]}},{nm:'second',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:m$3g8.Integer}]}},{nm:'milli',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:m$3g8.Integer}]}}],pa:1,an:function(){return[m$3g8.doc("create a native date at the given date time")];},d:['com.openswimsoftware.ceylon.js.language','createJSDateYMDInt']};};

//MethodDef dateNow at date.ceylon (157:0-162:0)
function dateNow(){
    /*BEG dynblock*/
    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'160:18-160:21','date.ceylon'):Date).now());
    /*END dynblock*/
}
ex$.dateNow=dateNow;
dateNow.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[],pa:1,an:function(){return[m$3g8.doc("returns now as a unix timestamp")];},d:['com.openswimsoftware.ceylon.js.language','dateNow']};};

//MethodDef dateParse at date.ceylon (164:0-177:0)
function dateParse($3ky){
    //Switch statement at date.ceylon (166:1-176:1)
    var $3kz=$3ky;
    if(m$3g8.is$($3ky,{t:m$3g8.$_String})) {
        /*BEG dynblock*/
        return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'169:19-169:22','date.ceylon'):Date).parse($3kz));
        /*END dynblock*/
    }else if(m$3g8.is$($3ky,{t:JSString})) {
        /*BEG dynblock*/
        return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'174:19-174:22','date.ceylon'):Date).parse($3kz.$_native));
        /*END dynblock*/
    }//End switch statement at date.ceylon (166:1-176:1)
}
ex$.dateParse=dateParse;
dateParse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[{nm:'dateTime',mt:'prm',$t:{t:'u',l:[{t:m$3g8.$_String},{t:JSString}]}}],pa:1,an:function(){return[m$3g8.doc("returns the given date string as a unix timestamp")];},d:['com.openswimsoftware.ceylon.js.language','dateParse']};};

//MethodDef dateUTC at date.ceylon (179:0-305:0)
function dateUTC($3l0,$3l1,$3l2,$3l3,$3l4,$3l5,$3l6){
    if($3l3===undefined){$3l3=null;}
    if($3l4===undefined){$3l4=null;}
    if($3l5===undefined){$3l5=null;}
    if($3l6===undefined){$3l6=null;}
    //Switch statement at date.ceylon (182:1-304:1)
    var $3l7=$3l3;
    if(m$3g8.is$($3l3,{t:JSNumber})) {
        //Switch statement at date.ceylon (184:2-242:2)
        var $3l8=$3l4;
        if(m$3g8.is$($3l4,{t:JSNumber})) {
            //Switch statement at date.ceylon (186:3-212:3)
            var $3l9=$3l5;
            if(m$3g8.is$($3l5,{t:JSNumber})) {
                //Switch statement at date.ceylon (188:4-198:4)
                var $3la=$3l6;
                if(m$3g8.is$($3l6,{t:JSNumber})) {
                    /*BEG dynblock*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'191:22-191:25','date.ceylon'):Date).UTC($3l0.$_native,$3l1.$_native,$3l2.$_native,$3l7.$_native,$3l8.$_native,$3l9.$_native,$3la.$_native));
                    /*END dynblock*/
                }else if(m$3g8.is$($3l6,{t:m$3g8.Null})) {
                    /*BEG dynblock*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'196:22-196:25','date.ceylon'):Date).UTC($3l0.$_native,$3l1.$_native,$3l2.$_native,$3l7.$_native,$3l8.$_native,$3l9.$_native));
                    /*END dynblock*/
                }//End switch statement at date.ceylon (188:4-198:4)
            }else if(m$3g8.is$($3l5,{t:m$3g8.Null})) {
                //Switch statement at date.ceylon (201:4-211:4)
                var $3lb=$3l6;
                if(m$3g8.is$($3l6,{t:JSNumber})) {
                    /*BEG dynblock*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'204:22-204:25','date.ceylon'):Date).UTC($3l0.$_native,$3l1.$_native,$3l2.$_native,$3l7.$_native,$3l8.$_native,null,$3lb.$_native));
                    /*END dynblock*/
                }else if(m$3g8.is$($3l6,{t:m$3g8.Null})) {
                    /*BEG dynblock*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'209:22-209:25','date.ceylon'):Date).UTC($3l0.$_native,$3l1.$_native,$3l2.$_native,$3l7.$_native,$3l8.$_native));
                    /*END dynblock*/
                }//End switch statement at date.ceylon (201:4-211:4)
            }//End switch statement at date.ceylon (186:3-212:3)
        }else if(m$3g8.is$($3l4,{t:m$3g8.Null})) {
            //Switch statement at date.ceylon (215:3-241:3)
            var $3lc=$3l5;
            if(m$3g8.is$($3l5,{t:JSNumber})) {
                //Switch statement at date.ceylon (217:4-227:4)
                var $3ld=$3l6;
                if(m$3g8.is$($3l6,{t:JSNumber})) {
                    /*BEG dynblock*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'220:22-220:25','date.ceylon'):Date).UTC($3l0.$_native,$3l1.$_native,$3l2.$_native,null,null,$3lc.$_native,$3ld.$_native));
                    /*END dynblock*/
                }else if(m$3g8.is$($3l6,{t:m$3g8.Null})) {
                    /*BEG dynblock*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'225:22-225:25','date.ceylon'):Date).UTC($3l0.$_native,$3l1.$_native,$3l2.$_native,null,null,$3lc.$_native));
                    /*END dynblock*/
                }//End switch statement at date.ceylon (217:4-227:4)
            }else if(m$3g8.is$($3l5,{t:m$3g8.Null})) {
                //Switch statement at date.ceylon (230:4-240:4)
                var $3le=$3l6;
                if(m$3g8.is$($3l6,{t:JSNumber})) {
                    /*BEG dynblock*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'233:22-233:25','date.ceylon'):Date).UTC($3l0.$_native,$3l1.$_native,$3l2.$_native,null,null,null,$3le.$_native));
                    /*END dynblock*/
                }else if(m$3g8.is$($3l6,{t:m$3g8.Null})) {
                    /*BEG dynblock*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'238:22-238:25','date.ceylon'):Date).UTC($3l0.$_native,$3l1.$_native,$3l2.$_native));
                    /*END dynblock*/
                }//End switch statement at date.ceylon (230:4-240:4)
            }//End switch statement at date.ceylon (215:3-241:3)
        }//End switch statement at date.ceylon (184:2-242:2)
    }else if(m$3g8.is$($3l3,{t:m$3g8.Null})) {
        //Switch statement at date.ceylon (245:2-303:2)
        var $3lf=$3l4;
        if(m$3g8.is$($3l4,{t:JSNumber})) {
            //Switch statement at date.ceylon (247:3-273:3)
            var $3lg=$3l5;
            if(m$3g8.is$($3l5,{t:JSNumber})) {
                //Switch statement at date.ceylon (249:4-259:4)
                var $3lh=$3l6;
                if(m$3g8.is$($3l6,{t:JSNumber})) {
                    /*BEG dynblock*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'252:22-252:25','date.ceylon'):Date).UTC($3l0.$_native,$3l1.$_native,$3l2.$_native,null,$3lf.$_native,$3lg.$_native,$3lh.$_native));
                    /*END dynblock*/
                }else if(m$3g8.is$($3l6,{t:m$3g8.Null})) {
                    /*BEG dynblock*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'257:22-257:25','date.ceylon'):Date).UTC($3l0.$_native,$3l1.$_native,$3l2.$_native,null,$3lf.$_native,$3lg.$_native));
                    /*END dynblock*/
                }//End switch statement at date.ceylon (249:4-259:4)
            }else if(m$3g8.is$($3l5,{t:m$3g8.Null})) {
                //Switch statement at date.ceylon (262:4-272:4)
                var $3li=$3l6;
                if(m$3g8.is$($3l6,{t:JSNumber})) {
                    /*BEG dynblock*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'265:22-265:25','date.ceylon'):Date).UTC($3l0.$_native,$3l1.$_native,$3l2.$_native,null,$3lf.$_native,null,$3li.$_native));
                    /*END dynblock*/
                }else if(m$3g8.is$($3l6,{t:m$3g8.Null})) {
                    /*BEG dynblock*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'270:22-270:25','date.ceylon'):Date).UTC($3l0.$_native,$3l1.$_native,$3l2.$_native,null,$3lf.$_native));
                    /*END dynblock*/
                }//End switch statement at date.ceylon (262:4-272:4)
            }//End switch statement at date.ceylon (247:3-273:3)
        }else if(m$3g8.is$($3l4,{t:m$3g8.Null})) {
            //Switch statement at date.ceylon (276:3-302:3)
            var $3lj=$3l5;
            if(m$3g8.is$($3l5,{t:JSNumber})) {
                //Switch statement at date.ceylon (278:4-288:4)
                var $3lk=$3l6;
                if(m$3g8.is$($3l6,{t:JSNumber})) {
                    /*BEG dynblock*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'281:22-281:25','date.ceylon'):Date).UTC($3l0.$_native,$3l1.$_native,$3l2.$_native,null,null,$3lj.$_native,$3lk.$_native));
                    /*END dynblock*/
                }else if(m$3g8.is$($3l6,{t:m$3g8.Null})) {
                    /*BEG dynblock*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'286:22-286:25','date.ceylon'):Date).UTC($3l0.$_native,$3l1.$_native,$3l2.$_native,null,null,$3lj.$_native));
                    /*END dynblock*/
                }//End switch statement at date.ceylon (278:4-288:4)
            }else if(m$3g8.is$($3l5,{t:m$3g8.Null})) {
                //Switch statement at date.ceylon (291:4-301:4)
                var $3ll=$3l6;
                if(m$3g8.is$($3l6,{t:JSNumber})) {
                    /*BEG dynblock*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'294:22-294:25','date.ceylon'):Date).UTC($3l0.$_native,$3l1.$_native,$3l2.$_native,null,null,null,$3ll.$_native));
                    /*END dynblock*/
                }else if(m$3g8.is$($3l6,{t:m$3g8.Null})) {
                    /*BEG dynblock*/
                    return JSNumber((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'299:22-299:25','date.ceylon'):Date).UTC($3l0.$_native,$3l1.$_native,$3l2.$_native));
                    /*END dynblock*/
                }//End switch statement at date.ceylon (291:4-301:4)
            }//End switch statement at date.ceylon (276:3-302:3)
        }//End switch statement at date.ceylon (245:2-303:2)
    }//End switch statement at date.ceylon (182:1-304:1)
}
ex$.dateUTC=dateUTC;
dateUTC.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[{nm:'year',mt:'prm',$t:{t:JSNumber}},{nm:'month',mt:'prm',$t:{t:JSNumber}},{nm:'day',mt:'prm',$t:{t:JSNumber}},{nm:'hour',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:JSNumber}]}},{nm:'minute',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:JSNumber}]}},{nm:'second',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:JSNumber}]}},{nm:'milli',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:JSNumber}]}}],pa:1,an:function(){return[m$3g8.doc("returns the given date string as a unix timestamp")];},d:['com.openswimsoftware.ceylon.js.language','dateUTC']};};

//MethodDef dateUTCInt at date.ceylon (307:0-313:0)
function dateUTCInt($3lm,$3ln,$3lo,$3lp,$3lq,$3lr,$3ls){
    if($3lp===undefined){$3lp=null;}
    if($3lq===undefined){$3lq=null;}
    if($3lr===undefined){$3lr=null;}
    if($3ls===undefined){$3ls=null;}
    /*BEG dynblock*/
    return JSDate((typeof Date==='undefined'||Date===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Date"),'311:16-311:19','date.ceylon'):Date).UTC($3lm,$3ln,$3lo,$3lp,$3lq,$3lr,$3ls));
    /*END dynblock*/
}
ex$.dateUTCInt=dateUTCInt;
dateUTCInt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSDate},ps:[{nm:'year',mt:'prm',$t:{t:m$3g8.Integer}},{nm:'month',mt:'prm',$t:{t:m$3g8.Integer}},{nm:'day',mt:'prm',$t:{t:m$3g8.Integer}},{nm:'hour',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:m$3g8.Integer}]}},{nm:'minute',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:m$3g8.Integer}]}},{nm:'second',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:m$3g8.Integer}]}},{nm:'milli',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:m$3g8.Integer}]}}],pa:1,an:function(){return[m$3g8.doc("returns the given date string as a native Date")];},d:['com.openswimsoftware.ceylon.js.language','dateUTCInt']};};

//MethodDef eval at main.ceylon (1:0-5:0)
function eval($3lu){
    /*BEG dynblock*/
    return eval($3lu);
    /*END dynblock*/
}
ex$.eval=eval;
eval.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$3g8.Anything},ps:[{nm:'js',mt:'prm',$t:{t:'u',l:[{t:m$3g8.$_String},{t:JSString}]}}],pa:1,d:['com.openswimsoftware.ceylon.js.language','eval']};};

//MethodDef isFinite at main.ceylon (7:0-15:0)
function isFinite($3lv){
    /*BEG dynblock*/
    if(isFinite(($3lw=$3lv.$_native,m$3g8.is$($3lw,{t:JSNumber})?$3lw:function(){throw new Error('dynamic objects cannot be used here (main.ceylon 9:15-9:24)')}()))){
        return true;
    }else {
        return false;
    }/*END dynblock*/
}
ex$.isFinite=isFinite;
isFinite.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$3g8.$_Boolean},ps:[{nm:'num',mt:'prm',$t:{t:JSNumber}}],pa:1,d:['com.openswimsoftware.ceylon.js.language','isFinite']};};

//MethodDef isNaN at main.ceylon (17:0-25:0)
function isNaN($3lx){
    /*BEG dynblock*/
    if(isNaN($3lx)){
        return true;
    }else {
        return false;
    }/*END dynblock*/
}
ex$.isNaN=isNaN;
isNaN.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$3g8.$_Boolean},ps:[{nm:'val',mt:'prm',$t:{t:m$3g8.Anything}}],pa:1,d:['com.openswimsoftware.ceylon.js.language','isNaN']};};

//MethodDef parseInt at main.ceylon (27:0-39:0)
function parseInt($3ly,$3lz){
    if($3lz===undefined){$3lz=(10);}
    //Switch statement at main.ceylon (28:1-38:1)
    var $3m0=$3lz;
    if(m$3g8.is$($3lz,{t:m$3g8.Integer})) {
        /*BEG dynblock*/
        return JSNumber(parseInt($3ly,$3m0));
        /*END dynblock*/
    }else if(m$3g8.is$($3lz,{t:JSNumber})) {
        /*BEG dynblock*/
        return JSNumber(parseInt($3ly,($3m1=$3m0.$_native,m$3g8.is$($3m1,{t:'u',l:[{t:m$3g8.Integer},{t:JSNumber}]})?$3m1:function(){throw new Error('dynamic objects cannot be used here (main.ceylon 36:33-36:44)')}())));
        /*END dynblock*/
    }//End switch statement at main.ceylon (28:1-38:1)
}
ex$.parseInt=parseInt;
parseInt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[{nm:'int',mt:'prm',$t:{t:'u',l:[{t:m$3g8.$_String},{t:JSString}]}},{nm:'radix',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Integer},{t:JSNumber}]}}],pa:1,d:['com.openswimsoftware.ceylon.js.language','parseInt']};};

//MethodDef parseFloat at main.ceylon (41:0-53:0)
function parseFloat($3m2){
    //Switch statement at main.ceylon (42:1-52:1)
    var $3m3=$3m2;
    if(m$3g8.is$($3m2,{t:m$3g8.$_String})) {
        /*BEG dynblock*/
        return JSNumber(parseFloat($3m3));
        /*END dynblock*/
    }else if(m$3g8.is$($3m2,{t:JSString})) {
        /*BEG dynblock*/
        return JSNumber(parseFloat(($3m4=$3m3.$_native,m$3g8.is$($3m4,{t:'u',l:[{t:m$3g8.$_String},{t:JSString}]})?$3m4:function(){throw new Error('dynamic objects cannot be used here (main.ceylon 50:30-50:41)')}())));
        /*END dynblock*/
    }//End switch statement at main.ceylon (42:1-52:1)
}
ex$.parseFloat=parseFloat;
parseFloat.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSNumber},ps:[{nm:'float',mt:'prm',$t:{t:'u',l:[{t:m$3g8.$_String},{t:JSString}]}}],pa:1,d:['com.openswimsoftware.ceylon.js.language','parseFloat']};};

//MethodDef createJSArray at array.ceylon (2:0-7:0)
function createJSArray($3pq){
    /*BEG dynblock*/
    return JSArray((typeof Array==='undefined'||Array===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Array"),'5:17-5:21','array.ceylon'):Array)($3pq));
    /*END dynblock*/
}
ex$.createJSArray=createJSArray;
createJSArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSArray},ps:[{nm:'arg',mt:'prm',$t:{t:m$3g8.Anything}}],pa:1,an:function(){return[m$3g8.doc("crate a new native array")];},d:['com.openswimsoftware.ceylon.js.language','createJSArray']};};

//MethodDef arrayIsArray at array.ceylon (9:0-18:0)
function arrayIsArray($3pr){
    /*BEG dynblock*/
    if((typeof Array==='undefined'||Array===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Array"),'12:6-12:10','array.ceylon'):Array).isArray($3pr)){
        return true;
    }else {
        return false;
    }/*END dynblock*/
}
ex$.arrayIsArray=arrayIsArray;
arrayIsArray.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$3g8.$_Boolean},ps:[{nm:'array',mt:'prm',$t:{t:m$3g8.Anything}}],pa:1,an:function(){return[m$3g8.doc("is the passed value a native array")];},d:['com.openswimsoftware.ceylon.js.language','arrayIsArray']};};

//MethodDef createJSString at string.ceylon (3:0-7:0)
function createJSString($3q1){
    /*BEG dynblock*/
    return JSString((typeof String==='undefined'||String===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: String"),'5:18-5:23','string.ceylon'):String)($3q1));
    /*END dynblock*/
}
ex$.createJSString=createJSString;
createJSString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSString},ps:[{nm:'string',mt:'prm',$t:{t:m$3g8.Anything}}],pa:1,d:['com.openswimsoftware.ceylon.js.language','createJSString']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
