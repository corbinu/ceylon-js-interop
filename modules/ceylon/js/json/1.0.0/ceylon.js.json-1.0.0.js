(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1","ceylon.js.language\/1.8.0","ceylon.json\/0.6.1","ceylon.collection\/0.6.1"],"$mod-name":"ceylon.js.json","$mod-version":"1.0.0","ceylon.js.json":{"$pkg-shared":"1","jsonParseCallback":{"$t":{"$pk":"ceylon.js.json","$nm":"unknown"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"text"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"prm","$pt":"f","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"jsonParseCallback"},"JSONArray":{"super":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},"$mt":"cls","$an":{"shared":[]},"$nm":"JSONArray"},"JSJSON":{"super":{"$pk":"ceylon.js.json","$nm":"JSJSONAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.json","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.json","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSJSON"},"jsonParse":{"$t":{"$pk":"ceylon.js.json","$nm":"unknown"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"text"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jsonParse"},"JSJSONAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"JSJSONAbs"},"JSON":{"super":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"$mt":"cls","$an":{"shared":[]},"$m":{"arrayToArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},"$mt":"prm","$nm":"ceylonArray"}]],"$mt":"mthd","$nm":"arrayToArray"},"toJson":{"$t":{"$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"},"objectToJson":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$mt":"prm","$nm":"ceylonJSON"}]],"$mt":"mthd","$nm":"objectToJson"}},"$at":{"values":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"}},"$nm":"JSON"},"jsonStringify":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"space"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jsonStringify"},"jsonStringifyReplacer":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"prm","$pt":"f","$nm":"replacer"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"space"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"replacer":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"replacer"}},"$nm":"jsonStringifyReplacer"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6.1');
var $$$cjl359=require('ceylon/js/language/1.8.0/ceylon.js.language-1.8.0');
$$$cl1.$addmod$($$$cjl359,'ceylon.js.language/1.8.0');
var $$$cj360=require('ceylon/json/0.6.1/ceylon.json-0.6.1');
$$$cl1.$addmod$($$$cj360,'ceylon.json/0.6.1');
function jsonParse(text$361){
    /*Begin dynamic block*/
    return (tmpvar$362=(typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'6:9-6:12','json.ceylon'):JSON).parse(/*NULL PARAM!*/text$361.valueOf()),$$$cl1.isOfType(tmpvar$362,{t:$$$cl1.Anything})?tmpvar$362:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'6:9-6:26','json.ceylon'));
    /*End dynamic block*/
}
exports.jsonParse=jsonParse;
jsonParse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','jsonParse']};};
function jsonParseCallback(text$363,callback$364){
    /*Begin dynamic block*/
    return (tmpvar$365=(typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'12:9-12:12','json.ceylon'):JSON).parse(/*NULL PARAM!*/text$363.valueOf()/*NULL PARAM!*/,callback$364),$$$cl1.isOfType(tmpvar$365,{t:$$$cl1.Anything})?tmpvar$365:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'12:9-12:36','json.ceylon'));
    /*End dynamic block*/
}
exports.jsonParseCallback=jsonParseCallback;
jsonParseCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','jsonParseCallback']};};
function jsonStringify(val$366,space$367){
    if(space$367===undefined){space$367=null;}
    
    var case$368=space$367;
    if ($$$cl1.isOfType(space$367,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]})) {
        /*Begin dynamic block*/
        return $$$cjl359.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'20:19-20:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$366/*NULL PARAM!*/,null/*NULL PARAM!*/,case$368));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(space$367,{ t:'u', l:[{t:$$$cjl359.JSString},{t:$$$cjl359.JSNumber}]})) {
        /*Begin dynamic block*/
        return $$$cjl359.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'25:19-25:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$366/*NULL PARAM!*/,null/*NULL PARAM!*/,case$368.$native));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(space$367,{t:$$$cl1.Null})) {
        /*Begin dynamic block*/
        return $$$cjl359.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'30:19-30:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$366));
        /*End dynamic block*/
    }
}
exports.jsonStringify=jsonStringify;
jsonStringify.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'space',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString},{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSNumber}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','jsonStringify']};};
function jsonStringifyReplacer(val$369,replacer$370,space$371){
    if(space$371===undefined){space$371=null;}
    
    var case$372=space$371;
    if ($$$cl1.isOfType(space$371,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]})) {
        /*Begin dynamic block*/
        return $$$cjl359.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'40:19-40:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$369/*NULL PARAM!*/,replacer$370/*NULL PARAM!*/,case$372));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(space$371,{ t:'u', l:[{t:$$$cjl359.JSString},{t:$$$cjl359.JSNumber}]})) {
        /*Begin dynamic block*/
        return $$$cjl359.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'45:19-45:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$369/*NULL PARAM!*/,replacer$370/*NULL PARAM!*/,case$372.$native));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(space$371,{t:$$$cl1.Null})) {
        /*Begin dynamic block*/
        return $$$cjl359.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'50:19-50:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$369));
        /*End dynamic block*/
    }
}
exports.jsonStringifyReplacer=jsonStringifyReplacer;
jsonStringifyReplacer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'replacer',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'space',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString},{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSNumber}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','jsonStringifyReplacer']};};
function JSON(values$373, $$jSON){
    $init$JSON();
    if ($$jSON===undefined)$$jSON=new JSON.$$;
    if(values$373===undefined){values$373=$$$cl1.getEmpty();}
    $$jSON.values$373_=values$373;
    $$$cj360.Object(values$373,$$jSON);
    $$$cl1.defineAttr($$jSON,'values$373',function(){return this.values$373_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:$$$cj360.Object},{t:$$$cj360.Array},{t:$$$cj360.NullInstance}]}}}}},$cont:JSON,d:['ceylon.js.json','JSON','$at','values']};});
    function toJson(){
        /*Begin dynamic block*/
        return JSJSON(objectToJson$374($$jSON).$native);
        /*End dynamic block*/
    }
    $$jSON.toJson=toJson;
    toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSJSON},$ps:[],$cont:JSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','JSON','$m','toJson']};};
    function objectToJson$374(ceylonJSON$375){
        var json$376=$$$cjl359.createJSObject();
        var it$377 = ceylonJSON$375.iterator();
        var item$378;while ((item$378=it$377.next())!==$$$cl1.getFinished()){
            var name$379=item$378.key;
            var entry$380=item$378.item;
            var val$381;
            $prop$getVal$381={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.json','JSON','$m','objectToJson','$at','val']};}};
            $prop$getVal$381.get=function(){return val$381};
            
            var case$382=entry$380;
            if ($$$cl1.isOfType(entry$380,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                val$381=case$382;/*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$380,{t:$$$cl1.Boolean})) {
                /*Begin dynamic block*/
                if(case$382){
                    val$381=true;
                }else {
                    val$381=false;
                }/*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$380,{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]})) {
                /*Begin dynamic block*/
                val$381=$$$cjl359.createJSNumber(case$382).$native;/*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$380,{t:$$$cj360.Object})) {
                /*Begin dynamic block*/
                val$381=objectToJson$374(case$382).$native;/*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$380,{t:$$$cj360.Array})) {
                $$$cl1.print($$$cl1.String("adding value Array",18));
                /*Begin dynamic block*/
                val$381=arrayToArray$383(case$382).$native;/*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$380,{t:$$$cj360.NullInstance})) {
                /*Begin dynamic block*/
                val$381=null;/*End dynamic block*/
            }
            /*Begin dynamic block*/
            $$$cjl359.objectDefineProperty(json$376,name$379,$$$cjl359.DataDescriptor(true,false,true,true,val$381));
            /*End dynamic block*/
        }
        return json$376;
    };objectToJson$374.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSObject},$ps:[{$nm:'ceylonJSON',$mt:'prm',$t:{t:$$$cj360.Object},$an:function(){return[];}}],$cont:JSON,d:['ceylon.js.json','JSON','$m','objectToJson']};};
    function arrayToArray$383(ceylonArray$384){
        var array$385;
        /*Begin dynamic block*/
        array$385=$$$cjl359.JSArray((typeof Array==='undefined'||Array===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Array")),'114:19-114:23','json.ceylon'):Array)());/*End dynamic block*/
        var it$386 = ceylonArray$384.iterator();
        var entry$387;while ((entry$387=it$386.next())!==$$$cl1.getFinished()){
            
            var case$388=entry$387;
            if ($$$cl1.isOfType(entry$387,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                array$385.push(case$388);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$387,{t:$$$cl1.Boolean})) {
                /*Begin dynamic block*/
                if(case$388){
                    array$385.push(true);
                }else {
                    array$385.push(false);
                }/*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$387,{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]})) {
                /*Begin dynamic block*/
                array$385.push($$$cjl359.createJSNumber(case$388).$native);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$387,{t:$$$cj360.Object})) {
                /*Begin dynamic block*/
                array$385.push(objectToJson$374(case$388).$native);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$387,{t:$$$cj360.Array})) {
                /*Begin dynamic block*/
                array$385.push(arrayToArray$383(case$388).$native);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(entry$387,{t:$$$cj360.NullInstance})) {
                /*Begin dynamic block*/
                array$385.push(null);
                /*End dynamic block*/
            }
        }
        return array$385;
    };arrayToArray$383.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSArray},$ps:[{$nm:'ceylonArray',$mt:'prm',$t:{t:$$$cj360.Array},$an:function(){return[];}}],$cont:JSON,d:['ceylon.js.json','JSON','$m','arrayToArray']};};
    return $$jSON;
}
JSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cj360.Object},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','JSON']};};
exports.JSON=JSON;
function $init$JSON(){
    if (JSON.$$===undefined){
        $$$cl1.initTypeProto(JSON,'ceylon.js.json::JSON',$$$cj360.Object);
    }
    return JSON;
}
exports.$init$JSON=$init$JSON;
$init$JSON();
function JSJSONAbs($$jSJSONAbs){
    $init$JSJSONAbs();
    if ($$jSJSONAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl359.JSObjectAbs($$jSJSONAbs);
    return $$jSJSONAbs;
}
JSJSONAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.json','JSJSONAbs']};};
exports.JSJSONAbs=JSJSONAbs;
function $init$JSJSONAbs(){
    if (JSJSONAbs.$$===undefined){
        $$$cl1.initTypeProto(JSJSONAbs,'ceylon.js.json::JSJSONAbs',$$$cjl359.JSObjectAbs);
    }
    return JSJSONAbs;
}
exports.$init$JSJSONAbs=$init$JSJSONAbs;
$init$JSJSONAbs();
function JSJSON(n$389, $$jSJSON){
    $init$JSJSON();
    if ($$jSJSON===undefined)$$jSJSON=new JSJSON.$$;
    $$jSJSON.n$389_=n$389;
    JSJSONAbs($$jSJSON);
    $$$cl1.defineAttr($$jSJSON,'n$389',function(){return this.n$389_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSJSON,d:['ceylon.js.json','JSJSON','$at','n']};});
    $$jSJSON.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSJSON,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.json','JSJSON','$at','native']};}};
    /*Begin dynamic block*/
    $$jSJSON.$native=n$389;/*End dynamic block*/
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
    $$$cj360.Array(undefined,$$jSONArray);
    return $$jSONArray;
}
JSONArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cj360.Array},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','JSONArray']};};
exports.JSONArray=JSONArray;
function $init$JSONArray(){
    if (JSONArray.$$===undefined){
        $$$cl1.initTypeProto(JSONArray,'ceylon.js.json::JSONArray',$$$cj360.Array);
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
