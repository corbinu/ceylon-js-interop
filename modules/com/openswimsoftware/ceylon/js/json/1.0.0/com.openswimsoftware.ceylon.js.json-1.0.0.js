(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"com.openswimsoftware.ceylon.js.json":{"$pkg-shared":"1","jsonParseCallback":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.json","$nm":"unknown"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"text"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"prm","$pt":"f","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[],"doc":["parse the given JSON string using a callback for manipulation the key values"]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"jsonParseCallback"},"JSONArray":{"super":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},"$mt":"cls","$an":{"shared":[],"doc":["ceylon JSON Array"]},"$nm":"JSONArray"},"JSJSON":{"super":{"$pk":"com.openswimsoftware.ceylon.js.json","$nm":"JSJSONAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["native JSON object"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.json","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.json","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSJSON"},"jsonParse":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.json","$nm":"unknown"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"text"}]],"$mt":"mthd","$an":{"shared":[],"doc":["parse the given JSON string"]},"$nm":"jsonParse"},"JSJSONAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"JSJSONAbs"},"JSON":{"super":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"$mt":"cls","$an":{"shared":[],"doc":["JSON objects in Ceylon"]},"$m":{"arrayToArray":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},"$mt":"prm","$nm":"ceylonArray"}]],"$mt":"mthd","$an":{"doc":["convert the array to a natve array"]},"$nm":"arrayToArray"},"toJson":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[],"doc":["convert to native JSON object"]},"$nm":"toJson"},"objectToJson":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$mt":"prm","$nm":"ceylonJSON"}]],"$mt":"mthd","$an":{"doc":["convert the object to a native object"]},"$nm":"objectToJson"}},"$at":{"values":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"}},"$nm":"JSON"},"jsonStringify":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"space"}]],"$mt":"mthd","$an":{"shared":[],"doc":["convert the JS object val into a JSON string using space for formating"]},"$nm":"jsonStringify"},"jsonStringifyReplacer":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"prm","$pt":"f","$nm":"replacer"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"space"}]],"$mt":"mthd","$an":{"shared":[],"doc":["convert the JS object val into a JSON string using space for formating using replacer to alter key values"]},"$m":{"replacer":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"replacer"}},"$nm":"jsonStringifyReplacer"}},"$mod-deps":["ceylon.language\/1.0.0","com.openswimsoftware.ceylon.js.language\/1.8.0","ceylon.json\/1.0.1","ceylon.collection\/1.0.0"],"$mod-name":"com.openswimsoftware.ceylon.js.json","$mod-version":"1.0.0","$mod-bin":"6.0"};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl1.$addmod$($$$cl1,'ceylon.language/1.0.0');
var $$$cocjl339=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
$$$cl1.$addmod$($$$cocjl339,'com.openswimsoftware.ceylon.js.language/1.8.0');
var $$$cj340=require('ceylon/json/1.0.1/ceylon.json-1.0.1');
$$$cl1.$addmod$($$$cj340,'ceylon.json/1.0.1');
function jsonParse(text$341){
    /*Begin dynamic block*/
    return (tmpvar$342=(typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'7:9-7:12','json.ceylon'):JSON).parse(text$341.valueOf()),$$$cl1.isOfType(tmpvar$342,{t:$$$cl1.Anything})?tmpvar$342:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'7:9-7:26','json.ceylon'));
    /*End dynamic block*/
}
exports.jsonParse=jsonParse;
jsonParse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("parse the given JSON string",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.json','jsonParse']};};
function jsonParseCallback(text$343,callback$344){
    /*Begin dynamic block*/
    return (tmpvar$345=(typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'14:9-14:12','json.ceylon'):JSON).parse(text$343.valueOf(),callback$344),$$$cl1.isOfType(tmpvar$345,{t:$$$cl1.Anything})?tmpvar$345:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'14:9-14:36','json.ceylon'));
    /*End dynamic block*/
}
exports.jsonParseCallback=jsonParseCallback;
jsonParseCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("parse the given JSON string using a callback for manipulation the key values",76)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.json','jsonParseCallback']};};
function jsonStringify(val$346,space$347){
    if(space$347===undefined){space$347=null;}
    
    var case$348=space$347;
    if ($$$cl1.isOfType(space$347,{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]})) {
        /*Begin dynamic block*/
        return $$$cocjl339.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'23:19-23:22','json.ceylon'):JSON).stringify(val$346,null,case$348));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(space$347,{t:'u', l:[{t:$$$cocjl339.JSString},{t:$$$cocjl339.JSNumber}]})) {
        /*Begin dynamic block*/
        return $$$cocjl339.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'28:19-28:22','json.ceylon'):JSON).stringify(val$346,null,case$348.$native));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(space$347,{t:$$$cl1.Null})) {
        /*Begin dynamic block*/
        return $$$cocjl339.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'33:19-33:22','json.ceylon'):JSON).stringify(val$346));
        /*End dynamic block*/
    }
}
exports.jsonStringify=jsonStringify;
jsonStringify.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'space',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString},{t:$$$cl1.Integer},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSNumber}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("convert the JS object val into a JSON string using space for formating",70)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.json','jsonStringify']};};
function jsonStringifyReplacer(val$349,replacer$350,space$351){
    if(space$351===undefined){space$351=null;}
    
    var case$352=space$351;
    if ($$$cl1.isOfType(space$351,{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]})) {
        /*Begin dynamic block*/
        return $$$cocjl339.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'44:19-44:22','json.ceylon'):JSON).stringify(val$349,replacer$350,case$352));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(space$351,{t:'u', l:[{t:$$$cocjl339.JSString},{t:$$$cocjl339.JSNumber}]})) {
        /*Begin dynamic block*/
        return $$$cocjl339.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'49:19-49:22','json.ceylon'):JSON).stringify(val$349,replacer$350,case$352.$native));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(space$351,{t:$$$cl1.Null})) {
        /*Begin dynamic block*/
        return $$$cocjl339.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'54:19-54:22','json.ceylon'):JSON).stringify(val$349));
        /*End dynamic block*/
    }
}
exports.jsonStringifyReplacer=jsonStringifyReplacer;
jsonStringifyReplacer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'replacer',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'space',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString},{t:$$$cl1.Integer},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSNumber}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("convert the JS object val into a JSON string using space for formating using replacer to alter key values",105)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.json','jsonStringifyReplacer']};};
function JSON(values$353, $$jSON){
    $init$JSON();
    if ($$jSON===undefined)$$jSON=new JSON.$$;
    if(values$353===undefined){values$353=$$$cl1.getEmpty();}
    $$jSON.values$353_=values$353;
    $$$cj340.Object($$jSON.values$353,$$jSON);
    return $$jSON;
}
JSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cj340.Object},$ps:[{$nm:'values',$mt:'prm',$def:1,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:$$$cj340.Object},{t:$$$cj340.Array},{t:$$$cj340.NullInstance}]}}}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("JSON objects in Ceylon",22)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.json','JSON']};};
exports.JSON=JSON;
function $init$JSON(){
    if (JSON.$$===undefined){
        $$$cl1.initTypeProto(JSON,'com.openswimsoftware.ceylon.js.json::JSON',$$$cj340.Object);
        (function($$jSON){
            $$jSON.toJson=function toJson(){
                var $$jSON=this;
                /*Begin dynamic block*/
                return JSJSON($$jSON.objectToJson$354($$jSON).$native);
                /*End dynamic block*/
            };$$jSON.toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSJSON},$ps:[],$cont:JSON,$an:function(){return[$$$cl1.doc($$$cl1.String("convert to native JSON object",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.json','JSON','$m','toJson']};};
            $$jSON.objectToJson$354=function objectToJson$354(ceylonJSON$355){
                var $$jSON=this;
                var json$356=$$$cocjl339.createJSObject();
                var it$357 = ceylonJSON$355.iterator();
                var item$358;while ((item$358=it$357.next())!==$$$cl1.getFinished()){
                    var name$359=item$358.key;
                    var entry$360=item$358.item;
                    var val$361;
                    $prop$getVal$361={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.json','JSON','$m','objectToJson','$at','val']};}};
                    $prop$getVal$361.get=function(){return val$361};
                    
                    var case$362=entry$360;
                    if ($$$cl1.isOfType(entry$360,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        val$361=case$362;/*End dynamic block*/
                    }else if ($$$cl1.isOfType(entry$360,{t:$$$cl1.Boolean})) {
                        /*Begin dynamic block*/
                        if(case$362){
                            val$361=true;
                        }else {
                            val$361=false;
                        }/*End dynamic block*/
                    }else if ($$$cl1.isOfType(entry$360,{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]})) {
                        /*Begin dynamic block*/
                        val$361=$$$cocjl339.createJSNumber(case$362).$native;/*End dynamic block*/
                    }else if ($$$cl1.isOfType(entry$360,{t:$$$cj340.Object})) {
                        /*Begin dynamic block*/
                        val$361=$$jSON.objectToJson$354(case$362).$native;/*End dynamic block*/
                    }else if ($$$cl1.isOfType(entry$360,{t:$$$cj340.Array})) {
                        $$$cl1.print($$$cl1.String("adding value Array",18));
                        /*Begin dynamic block*/
                        val$361=$$jSON.arrayToArray$363(case$362).$native;/*End dynamic block*/
                    }else if ($$$cl1.isOfType(entry$360,{t:$$$cj340.NullInstance})) {
                        /*Begin dynamic block*/
                        val$361=null;/*End dynamic block*/
                    }
                    /*Begin dynamic block*/
                    $$$cocjl339.objectDefineProperty(json$356,name$359,$$$cocjl339.DataDescriptor(true,false,true,true,val$361));
                    /*End dynamic block*/
                }
                return json$356;
            };$$jSON.objectToJson$354.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSObject},$ps:[{$nm:'ceylonJSON',$mt:'prm',$t:{t:$$$cj340.Object},$an:function(){return[];}}],$cont:JSON,$an:function(){return[$$$cl1.doc($$$cl1.String("convert the object to a native object",37))];},d:['com.openswimsoftware.ceylon.js.json','JSON','$m','objectToJson']};};
            $$jSON.arrayToArray$363=function arrayToArray$363(ceylonArray$364){
                var $$jSON=this;
                var array$365;
                /*Begin dynamic block*/
                array$365=$$$cocjl339.JSArray((typeof Array==='undefined'||Array===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Array")),'122:19-122:23','json.ceylon'):Array)());/*End dynamic block*/
                var it$366 = ceylonArray$364.iterator();
                var entry$367;while ((entry$367=it$366.next())!==$$$cl1.getFinished()){
                    
                    var case$368=entry$367;
                    if ($$$cl1.isOfType(entry$367,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        array$365.push(case$368);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(entry$367,{t:$$$cl1.Boolean})) {
                        /*Begin dynamic block*/
                        if(case$368){
                            array$365.push(true);
                        }else {
                            array$365.push(false);
                        }/*End dynamic block*/
                    }else if ($$$cl1.isOfType(entry$367,{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]})) {
                        /*Begin dynamic block*/
                        array$365.push($$$cocjl339.createJSNumber(case$368).$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(entry$367,{t:$$$cj340.Object})) {
                        /*Begin dynamic block*/
                        array$365.push($$jSON.objectToJson$354(case$368).$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(entry$367,{t:$$$cj340.Array})) {
                        /*Begin dynamic block*/
                        array$365.push($$jSON.arrayToArray$363(case$368).$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(entry$367,{t:$$$cj340.NullInstance})) {
                        /*Begin dynamic block*/
                        array$365.push(null);
                        /*End dynamic block*/
                    }
                }
                return array$365;
            };$$jSON.arrayToArray$363.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSArray},$ps:[{$nm:'ceylonArray',$mt:'prm',$t:{t:$$$cj340.Array},$an:function(){return[];}}],$cont:JSON,$an:function(){return[$$$cl1.doc($$$cl1.String("convert the array to a natve array",34))];},d:['com.openswimsoftware.ceylon.js.json','JSON','$m','arrayToArray']};};
            $$$cl1.defineAttr($$jSON,'values$353',function(){return this.values$353_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:$$$cj340.Object},{t:$$$cj340.Array},{t:$$$cj340.NullInstance}]}}}}},$cont:JSON,d:['com.openswimsoftware.ceylon.js.json','JSON','$at','values']};});
        })(JSON.$$.prototype);
    }
    return JSON;
}
exports.$init$JSON=$init$JSON;
$init$JSON();
function JSJSONAbs($$jSJSONAbs){
    $init$JSJSONAbs();
    if ($$jSJSONAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$jSJSONAbs);
    return $$jSJSONAbs;
}
JSJSONAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.json','JSJSONAbs']};};
exports.JSJSONAbs=JSJSONAbs;
function $init$JSJSONAbs(){
    if (JSJSONAbs.$$===undefined){
        $$$cl1.initTypeProto(JSJSONAbs,'com.openswimsoftware.ceylon.js.json::JSJSONAbs',$$$cocjl339.JSObjectAbs);
    }
    return JSJSONAbs;
}
exports.$init$JSJSONAbs=$init$JSJSONAbs;
$init$JSJSONAbs();
function JSJSON(n$369, $$jSJSON){
    $init$JSJSON();
    if ($$jSJSON===undefined)$$jSJSON=new JSJSON.$$;
    $$jSJSON.n$369_=n$369;
    JSJSONAbs($$jSJSON);
    $$jSJSON.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSJSON,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.json','JSJSON','$at','native']};}};
    /*Begin dynamic block*/
    $$jSJSON.$native=$$jSJSON.n$369;/*End dynamic block*/
    return $$jSJSON;
}
JSJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSJSONAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("native JSON object",18)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.json','JSJSON']};};
exports.JSJSON=JSJSON;
function $init$JSJSON(){
    if (JSJSON.$$===undefined){
        $$$cl1.initTypeProto(JSJSON,'com.openswimsoftware.ceylon.js.json::JSJSON',$init$JSJSONAbs());
        (function($$jSJSON){
            $$$cl1.defineAttr($$jSJSON,'n$369',function(){return this.n$369_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSJSON,d:['com.openswimsoftware.ceylon.js.json','JSJSON','$at','n']};});
        })(JSJSON.$$.prototype);
    }
    return JSJSON;
}
exports.$init$JSJSON=$init$JSJSON;
$init$JSJSON();
function JSONArray($$jSONArray){
    $init$JSONArray();
    if ($$jSONArray===undefined)$$jSONArray=new JSONArray.$$;
    $$$cj340.Array(undefined,$$jSONArray);
    return $$jSONArray;
}
JSONArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cj340.Array},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("ceylon JSON Array",17)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.json','JSONArray']};};
exports.JSONArray=JSONArray;
function $init$JSONArray(){
    if (JSONArray.$$===undefined){
        $$$cl1.initTypeProto(JSONArray,'com.openswimsoftware.ceylon.js.json::JSONArray',$$$cj340.Array);
    }
    return JSONArray;
}
exports.$init$JSONArray=$init$JSONArray;
$init$JSONArray();
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("based on offical JSON spec",26))];};
exports.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.language/1.8.0':function(){return[$$$cl1.shared()];},
'ceylon.json/1.0.1':function(){return[$$$cl1.shared()];},
'ceylon.collection/1.0.0':function(){return[$$$cl1.shared()];}
};};
exports.$pkg$ans$com$openswimsoftware$ceylon$js$json=function(){return[$$$cl1.shared()];};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
