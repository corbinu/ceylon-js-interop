(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1","ceylon.js.language\/1.8.5","ceylon.json\/0.6.1","ceylon.collection\/0.6.1"],"$mod-name":"ceylon.js.json","$mod-version":"1.0.0","ceylon.js.json":{"$pkg-shared":"1","jsonParseCallback":{"$t":{"$pk":"ceylon.js.json","$nm":"unknown"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"text"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"prm","$pt":"f","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"jsonParseCallback"},"JSONArray":{"super":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},"$mt":"cls","$an":{"shared":[]},"$nm":"JSONArray"},"JSJSON":{"super":{"$pk":"ceylon.js.json","$nm":"JSJSONAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.json","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.json","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSJSON"},"jsonParse":{"$t":{"$pk":"ceylon.js.json","$nm":"unknown"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"text"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jsonParse"},"JSJSONAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"JSJSONAbs"},"JSON":{"super":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"$mt":"cls","$an":{"shared":[]},"$m":{"arrayToArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},"$mt":"prm","$nm":"ceylonArray"}]],"$mt":"mthd","$nm":"arrayToArray"},"toJson":{"$t":{"$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"},"objectToJson":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$mt":"prm","$nm":"ceylonJSON"}]],"$mt":"mthd","$nm":"objectToJson"}},"$at":{"values":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"}},"$nm":"JSON"},"jsonStringify":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"space"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jsonStringify"},"jsonStringifyReplacer":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"prm","$pt":"f","$nm":"replacer"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"space"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"replacer":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"replacer"}},"$nm":"jsonStringifyReplacer"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6.1');
var $$$cjl361=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl1.$addmod$($$$cjl361,'ceylon.js.language/1.8.5');
var $$$cj362=require('ceylon/json/0.6.1/ceylon.json-0.6.1');
$$$cl1.$addmod$($$$cj362,'ceylon.json/0.6.1');
function jsonParse(text$363){
    /*Begin dynamic block*/
    return (tmpvar$364=(typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'6:9-6:12','json.ceylon'):JSON).parse(/*NULL PARAM!*/text$363.valueOf()),$$$cl1.isOfType(tmpvar$364,{t:$$$cl1.Anything})?tmpvar$364:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'6:9-6:26','json.ceylon'));
    /*End dynamic block*/
}
exports.jsonParse=jsonParse;
jsonParse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','jsonParse']};};
function jsonParseCallback(text$365,callback$366){
    /*Begin dynamic block*/
    return (tmpvar$367=(typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'12:9-12:12','json.ceylon'):JSON).parse(/*NULL PARAM!*/text$365.valueOf()/*NULL PARAM!*/,callback$366),$$$cl1.isOfType(tmpvar$367,{t:$$$cl1.Anything})?tmpvar$367:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'12:9-12:36','json.ceylon'));
    /*End dynamic block*/
}
exports.jsonParseCallback=jsonParseCallback;
jsonParseCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','jsonParseCallback']};};
function jsonStringify(val$368,space$369){
    if(space$369===undefined){space$369=null;}
    
    var case$370=space$369;
    if ($$$cl1.isOfType(space$369,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]})) {
        /*Begin dynamic block*/
        return $$$cjl361.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'20:19-20:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$368/*NULL PARAM!*/,null/*NULL PARAM!*/,case$370));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(space$369,{ t:'u', l:[{t:$$$cjl361.JSString},{t:$$$cjl361.JSNumber}]})) {
        /*Begin dynamic block*/
        return $$$cjl361.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'25:19-25:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$368/*NULL PARAM!*/,null/*NULL PARAM!*/,case$370.$native));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(space$369,{t:$$$cl1.Null})) {
        /*Begin dynamic block*/
        return $$$cjl361.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'30:19-30:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$368));
        /*End dynamic block*/
    }
}
exports.jsonStringify=jsonStringify;
jsonStringify.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'space',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString},{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSNumber}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','jsonStringify']};};
function jsonStringifyReplacer(val$371,replacer$372,space$373){
    if(space$373===undefined){space$373=null;}
    
    var case$374=space$373;
    if ($$$cl1.isOfType(space$373,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]})) {
        /*Begin dynamic block*/
        return $$$cjl361.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'40:19-40:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$371/*NULL PARAM!*/,replacer$372/*NULL PARAM!*/,case$374));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(space$373,{ t:'u', l:[{t:$$$cjl361.JSString},{t:$$$cjl361.JSNumber}]})) {
        /*Begin dynamic block*/
        return $$$cjl361.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'45:19-45:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$371/*NULL PARAM!*/,replacer$372/*NULL PARAM!*/,case$374.$native));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(space$373,{t:$$$cl1.Null})) {
        /*Begin dynamic block*/
        return $$$cjl361.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'50:19-50:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$371));
        /*End dynamic block*/
    }
}
exports.jsonStringifyReplacer=jsonStringifyReplacer;
jsonStringifyReplacer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'replacer',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'space',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString},{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSNumber}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','jsonStringifyReplacer']};};
function JSON(values$375, $$jSON){
    $init$JSON();
    if ($$jSON===undefined)$$jSON=new JSON.$$;
    if(values$375===undefined){values$375=$$$cl1.getEmpty();}
    $$jSON.values$375_=values$375;
    $$$cj362.Object(values$375,$$jSON);
    $$$cl1.defineAttr($$jSON,'values$375',function(){return this.values$375_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:$$$cj362.Object},{t:$$$cj362.Array},{t:$$$cj362.NullInstance}]}}}}},$cont:JSON,d:['ceylon.js.json','JSON','$at','values']};});
    function toJson(){
        /*Begin dynamic block*/
        return JSJSON(objectToJson$376($$jSON).$native);
        /*End dynamic block*/
    }
    $$jSON.toJson=toJson;
    toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSJSON},$ps:[],$cont:JSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','JSON','$m','toJson']};};
    function objectToJson$376(ceylonJSON$377){
        var json$378=$$$cjl361.createJSObject();
        var it$379 = ceylonJSON$377.iterator();
        var item$380;while ((item$380=it$379.next())!==$$$cl1.getFinished()){
            var name$381=item$380.key;
            var entry$382=item$380.item;
            var val$383;
            $prop$getVal$383={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.json','JSON','$m','objectToJson','$at','val']};}};
            $prop$getVal$383.get=function(){return val$383};
            
            var case$384=entry$382;
            if ($$$cl1.isOfType(entry$382,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                val$383=case$384.string;/*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$382,{t:$$$cl1.Boolean})) {
                /*Begin dynamic block*/
                if(case$384){
                    val$383=true;
                }else {
                    val$383=false;
                }/*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$382,{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]})) {
                /*Begin dynamic block*/
                val$383=$$$cjl361.createJSNumber(case$384).$native;/*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$382,{t:$$$cj362.Object})) {
                /*Begin dynamic block*/
                val$383=objectToJson$376(case$384).$native;/*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$382,{t:$$$cj362.Array})) {
                /*Begin dynamic block*/
                val$383=arrayToArray$385(case$384).$native;/*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$382,{t:$$$cj362.NullInstance})) {
                /*Begin dynamic block*/
                val$383=null;/*End dynamic block*/
            }
            /*Begin dynamic block*/
            $$$cjl361.objectDefineProperty(json$378,name$381,$$$cjl361.DataDescriptor(true,false,true,true,val$383));
            /*End dynamic block*/
        }
        return json$378;
    };objectToJson$376.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSObject},$ps:[{$nm:'ceylonJSON',$mt:'prm',$t:{t:$$$cj362.Object},$an:function(){return[];}}],$cont:JSON,d:['ceylon.js.json','JSON','$m','objectToJson']};};
    function arrayToArray$385(ceylonArray$386){
        var array$387=$$$cjl361.createJSArray();
        var it$388 = ceylonArray$386.iterator();
        var entry$389;while ((entry$389=it$388.next())!==$$$cl1.getFinished()){
            
            var case$390=entry$389;
            if ($$$cl1.isOfType(entry$389,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                array$387.push(case$390);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$389,{t:$$$cl1.Boolean})) {
                /*Begin dynamic block*/
                if(case$390){
                    array$387.push(true);
                }else {
                    array$387.push(false);
                }/*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$389,{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]})) {
                /*Begin dynamic block*/
                array$387.push($$$cjl361.createJSNumber(case$390).$native);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$389,{t:$$$cj362.Object})) {
                /*Begin dynamic block*/
                array$387.push(objectToJson$376(case$390).$native);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$389,{t:$$$cj362.Array})) {
                /*Begin dynamic block*/
                array$387.push(arrayToArray$385(case$390).$native);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$389,{t:$$$cj362.NullInstance})) {
                /*Begin dynamic block*/
                array$387.push(null);
                /*End dynamic block*/
            }
        }
        return array$387;
    };arrayToArray$385.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSArray},$ps:[{$nm:'ceylonArray',$mt:'prm',$t:{t:$$$cj362.Array},$an:function(){return[];}}],$cont:JSON,d:['ceylon.js.json','JSON','$m','arrayToArray']};};
    return $$jSON;
}
JSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cj362.Object},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','JSON']};};
exports.JSON=JSON;
function $init$JSON(){
    if (JSON.$$===undefined){
        $$$cl1.initTypeProto(JSON,'ceylon.js.json::JSON',$$$cj362.Object);
    }
    return JSON;
}
exports.$init$JSON=$init$JSON;
$init$JSON();
function JSJSONAbs($$jSJSONAbs){
    $init$JSJSONAbs();
    if ($$jSJSONAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$jSJSONAbs);
    return $$jSJSONAbs;
}
JSJSONAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.json','JSJSONAbs']};};
exports.JSJSONAbs=JSJSONAbs;
function $init$JSJSONAbs(){
    if (JSJSONAbs.$$===undefined){
        $$$cl1.initTypeProto(JSJSONAbs,'ceylon.js.json::JSJSONAbs',$$$cjl361.JSObjectAbs);
    }
    return JSJSONAbs;
}
exports.$init$JSJSONAbs=$init$JSJSONAbs;
$init$JSJSONAbs();
function JSJSON(n$391, $$jSJSON){
    $init$JSJSON();
    if ($$jSJSON===undefined)$$jSJSON=new JSJSON.$$;
    $$jSJSON.n$391_=n$391;
    JSJSONAbs($$jSJSON);
    $$$cl1.defineAttr($$jSJSON,'n$391',function(){return this.n$391_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSJSON,d:['ceylon.js.json','JSJSON','$at','n']};});
    $$jSJSON.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSJSON,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.json','JSJSON','$at','native']};}};
    /*Begin dynamic block*/
    $$jSJSON.$native=n$391;/*End dynamic block*/
    return $$jSJSON;
}
JSJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSJSONAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','JSJSON']};};
exports.JSJSON=JSJSON;
function $init$JSJSON(){
    if (JSJSON.$$===undefined){
        $$$cl1.initTypeProto(JSJSON,'ceylon.js.json::JSJSON',$init$JSJSONAbs());
    }
    return JSJSON;
}
exports.$init$JSJSON=$init$JSJSON;
$init$JSJSON();
function JSONArray($$jSONArray){
    $init$JSONArray();
    if ($$jSONArray===undefined)$$jSONArray=new JSONArray.$$;
    $$$cj362.Array(undefined,$$jSONArray);
    return $$jSONArray;
}
JSONArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cj362.Array},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','JSONArray']};};
exports.JSONArray=JSONArray;
function $init$JSONArray(){
    if (JSONArray.$$===undefined){
        $$$cl1.initTypeProto(JSONArray,'ceylon.js.json::JSONArray',$$$cj362.Array);
    }
    return JSONArray;
}
exports.$init$JSONArray=$init$JSONArray;
$init$JSONArray();
exports.$mod$ans$=[];
exports.$pkg$ans$ceylon$js$json=function(){return[$$$cl1.shared()];};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
