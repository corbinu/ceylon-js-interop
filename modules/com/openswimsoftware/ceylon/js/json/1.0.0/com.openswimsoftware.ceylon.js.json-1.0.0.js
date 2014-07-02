(function(define) { define(function(require, ex$, module) {
var $CCMM$={"$mod-version":"1.0.0","$mod-deps":[{exp:1,path:"com.openswimsoftware.ceylon.js.language\/1.8.0"},{exp:1,path:"ceylon.json\/1.1.0"},{exp:1,path:"ceylon.collection\/1.1.0"},{exp:1,path:"ceylon.language\/1.1.0"}],"$mod-bin":"7.0","com.openswimsoftware.ceylon.js.json":{jsonParse:{$t:{nm:"$U"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"prm",nm:"text"}]],mt:"m",an:{doc:["parse the given JSON string"]},nm:"jsonParse"},"$pkg-shared":1,jsonStringify:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,ps:[[{$t:{nm:"$U"},mt:"prm",nm:"val"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},{md:"ceylon.language",pk:"$",nm:"Integer"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]}]},def:1,mt:"prm",nm:"space"}]],mt:"m",an:{doc:["convert the JS object val into a JSON string using space for formating"]},nm:"jsonStringify"},jsonStringifyReplacer:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,ps:[[{$t:{nm:"$U"},mt:"prm",nm:"val"},{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"key"},{$t:{nm:"$U"},mt:"prm",nm:"val"}]],mt:"prm",$pt:"f",nm:"replacer"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},{md:"ceylon.language",pk:"$",nm:"Integer"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]}]},def:1,mt:"prm",nm:"space"}]],mt:"m",$m:{replacer$smllz9:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"key"},{$t:{nm:"$U"},mt:"prm",nm:"val"}]],mt:"m",nm:"replacer"}},an:{doc:["convert the JS object val into a JSON string using space for formating using replacer to alter key values"]},nm:"jsonStringifyReplacer"},JSJSONAbs:{super:{nm:"$U"},pa:257,mt:"c",nm:"JSJSONAbs"},JSONArray:{super:{md:"ceylon.json",pk:"ceylon.json",nm:"Array"},pa:1,mt:"c",an:{doc:["ceylon JSON Array"]},nm:"JSONArray"},jsonParseCallback:{$t:{nm:"$U"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"prm",nm:"text"},{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"key"},{$t:{nm:"$U"},mt:"prm",nm:"val"}]],mt:"prm",$pt:"f",nm:"callback"}]],mt:"m",$m:{callback$9mu7z9:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{nm:"$U"},mt:"prm",nm:"key"},{$t:{nm:"$U"},mt:"prm",nm:"val"}]],mt:"m",nm:"callback"}},an:{doc:["parse the given JSON string using a callback for manipulation the key values"]},nm:"jsonParseCallback"},JSON:{super:{md:"ceylon.json",pk:"ceylon.json",nm:"Object"},pa:1,ps:[{$t:{md:"ceylon.language",pk:"$",tp:[{mt:"tp",md:"ceylon.language",pk:"$",tp:[{mt:"tp",md:"ceylon.language",pk:"$",nm:"String"},{comp:"u",mt:"tp",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"ceylon.language",pk:"$",nm:"Boolean"},{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"ceylon.language",pk:"$",nm:"Float"},{md:"ceylon.json",pk:"ceylon.json",nm:"Object"},{md:"ceylon.json",pk:"ceylon.json",nm:"Array"},{md:"ceylon.json",pk:"ceylon.json",nm:"NullInstance"}]}],nm:"Entry"},{mt:"tp",md:"ceylon.language",pk:"$",nm:"Null"}],nm:"Iterable"},def:1,mt:"prm",nm:"values"}],mt:"c",$at:{values$1io0cl:{$t:{md:"ceylon.language",pk:"$",tp:[{mt:"tp",md:"ceylon.language",pk:"$",tp:[{mt:"tp",md:"ceylon.language",pk:"$",nm:"String"},{comp:"u",mt:"tp",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"ceylon.language",pk:"$",nm:"Boolean"},{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"ceylon.language",pk:"$",nm:"Float"},{md:"ceylon.json",pk:"ceylon.json",nm:"Object"},{md:"ceylon.json",pk:"ceylon.json",nm:"Array"},{md:"ceylon.json",pk:"ceylon.json",nm:"NullInstance"}]}],nm:"Entry"},{mt:"tp",md:"ceylon.language",pk:"$",nm:"Null"}],nm:"Iterable"},mt:"a",nm:"values"}},$m:{toJson:{$t:{pk:".",nm:"JSJSON"},pa:1,mt:"m",an:{doc:["convert to native JSON object"]},nm:"toJson"},objectToJson$pdz9dn:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSObject"},ps:[[{$t:{md:"ceylon.json",pk:"ceylon.json",nm:"Object"},mt:"prm",nm:"ceylonJSON"}]],mt:"m",an:{doc:["convert the object to a native object"]},nm:"objectToJson"},arrayToArray$yhxgdi:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSArray"},ps:[[{$t:{md:"ceylon.json",pk:"ceylon.json",nm:"Array"},mt:"prm",nm:"ceylonArray"}]],mt:"m",an:{doc:["convert the array to a natve array"]},nm:"arrayToArray"}},an:{doc:["JSON objects in Ceylon"]},nm:"JSON"},JSJSON:{super:{pk:".",nm:"JSJSONAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$8sjerc:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["native JSON object"]},nm:"JSJSON"}},"$mod-name":"com.openswimsoftware.ceylon.js.json"};
ex$.$CCMM$=function(){return $CCMM$;};
var m$3g8=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$3g8.$addmod$(m$3g8,'ceylon.language/1.1.0');
ex$.$pkg$ans$com$openswimsoftware$ceylon$js$json=function(){return[m$3g8.shared()];};
ex$.$mod$ans$=function(){return[m$3g8.doc("based on offical JSON spec")];};
ex$.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.language/1.8.0':function(){return[m$3g8.shared()];},
'ceylon.json/1.1.0':function(){return[m$3g8.shared()];},
'ceylon.collection/1.1.0':function(){return[m$3g8.shared()];}
};};
var m$3ga=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
m$3g8.$addmod$(m$3ga,'com.openswimsoftware.ceylon.js.language/1.8.0');
var m$3ir=require('ceylon/json/1.1.0/ceylon.json-1.1.0');
m$3g8.$addmod$(m$3ir,'ceylon.json/1.1.0');

//MethodDef jsonParse at json.ceylon (4:0-9:0)
function jsonParse($3is){
    /*BEG dynblock*/
    return (typeof JSON==='undefined'||JSON===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: JSON"),'7:9-7:12','json.ceylon'):JSON).parse($3is);
    /*END dynblock*/
}
ex$.jsonParse=jsonParse;
jsonParse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$3g8.Anything},ps:[{nm:'text',mt:'prm',$t:{t:m$3g8.$_String}}],pa:1,an:function(){return[m$3g8.doc("parse the given JSON string")];},d:['com.openswimsoftware.ceylon.js.json','jsonParse']};};

//MethodDef jsonParseCallback at json.ceylon (11:0-16:0)
function jsonParseCallback($3it,$3iu){
    /*BEG dynblock*/
    return (typeof JSON==='undefined'||JSON===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: JSON"),'14:9-14:12','json.ceylon'):JSON).parse($3it,$3iu);
    /*END dynblock*/
}
ex$.jsonParseCallback=jsonParseCallback;
jsonParseCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$3g8.Anything},ps:[{nm:'text',mt:'prm',$t:{t:m$3g8.$_String}},{nm:'callback',mt:'prm',$pt:'f',$t:{t:m$3g8.Anything}}],pa:1,an:function(){return[m$3g8.doc("parse the given JSON string using a callback for manipulation the key values")];},d:['com.openswimsoftware.ceylon.js.json','jsonParseCallback']};};

//ClassDef JSONArray at json.ceylon (175:0-176:42)
function JSONArray(jSONArray$){
    $init$JSONArray();
    if(jSONArray$===undefined)jSONArray$=new JSONArray.$$;
    m$3ir.$_Array(undefined,jSONArray$);
    return jSONArray$;
}
JSONArray.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3ir.$_Array},ps:[],pa:1,an:function(){return[m$3g8.doc("ceylon JSON Array")];},d:['com.openswimsoftware.ceylon.js.json','JSONArray']};};
ex$.JSONArray=JSONArray;
function $init$JSONArray(){
    if(JSONArray.$$===undefined){
        m$3g8.initTypeProto(JSONArray,'com.openswimsoftware.ceylon.js.json::JSONArray',m$3ir.$_Array);
    }
    return JSONArray;
}
ex$.$init$JSONArray=$init$JSONArray;
$init$JSONArray();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
