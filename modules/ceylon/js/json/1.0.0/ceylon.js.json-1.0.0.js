(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.js.language\/1.8.5","ceylon.json\/0.6.1","ceylon.collection\/0.6.1","ceylon.language\/0.6.1"],"$mod-name":"ceylon.js.json","$mod-version":"1.0.0","ceylon.js.json":{"$pkg-shared":"1","jsonParseCallback":{"$t":{"$pk":"ceylon.js.json","$nm":"unknown"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"text"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"prm","$pt":"f","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"jsonParseCallback"},"JSONArray":{"super":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},"$mt":"cls","$an":{"shared":[]},"$nm":"JSONArray"},"JSJSON":{"super":{"$pk":"ceylon.js.json","$nm":"JSJSONAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.json","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.json","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSJSON"},"jsonParse":{"$t":{"$pk":"ceylon.js.json","$nm":"unknown"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"text"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jsonParse"},"JSJSONAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"JSJSONAbs"},"JSON":{"super":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"$mt":"cls","$an":{"shared":[]},"$m":{"arrayToArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},"$mt":"prm","$nm":"ceylonArray"}]],"$mt":"mthd","$nm":"arrayToArray"},"toJson":{"$t":{"$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"},"objectToJson":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$mt":"prm","$nm":"ceylonJSON"}]],"$mt":"mthd","$nm":"objectToJson"}},"$at":{"values":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"}},"$nm":"JSON"},"jsonStringify":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"space"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jsonStringify"},"jsonStringifyReplacer":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"prm","$pt":"f","$nm":"replacer"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"space"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"replacer":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"replacer"}},"$nm":"jsonStringifyReplacer"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl32209=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl32209.$addmod$($$$cl32209,'ceylon.language/0.6.1');
exports.$pkg$ans$ceylon$js$json=function(){return[$$$cl32209.shared()];};
exports.$mod$ans$=[];
var $$$cjl32280=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl32209.$addmod$($$$cjl32280,'ceylon.js.language/1.8.5');
var $$$cj33690=require('ceylon/json/0.6.1/ceylon.json-0.6.1');
$$$cl32209.$addmod$($$$cj33690,'ceylon.json/0.6.1');

//MethodDefinition jsonParse at json.ceylon (4:0-8:0)
function jsonParse(text$33691){
    /*Begin dynamic block*/
    return (tmpvar$33692=(typeof JSON==='undefined'||JSON===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: JSON")),'6:9-6:12','json.ceylon'):JSON).parse(/*NULL PARAM!*/text$33691.valueOf()),$$$cl32209.isOfType(tmpvar$33692,{t:$$$cl32209.Anything})?tmpvar$33692:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'6:9-6:26','json.ceylon'));
    /*End dynamic block*/
}
exports.jsonParse=jsonParse;
jsonParse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.json','jsonParse']};};

//MethodDefinition jsonParseCallback at json.ceylon (10:0-14:0)
function jsonParseCallback(text$33693,callback$33694){
    /*Begin dynamic block*/
    return (tmpvar$33695=(typeof JSON==='undefined'||JSON===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: JSON")),'12:9-12:12','json.ceylon'):JSON).parse(/*NULL PARAM!*/text$33693.valueOf()/*NULL PARAM!*/,callback$33694),$$$cl32209.isOfType(tmpvar$33695,{t:$$$cl32209.Anything})?tmpvar$33695:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'12:9-12:36','json.ceylon'));
    /*End dynamic block*/
}
exports.jsonParseCallback=jsonParseCallback;
jsonParseCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{t:$$$cl32209.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.json','jsonParseCallback']};};

//MethodDefinition jsonStringify at json.ceylon (16:0-34:0)
function jsonStringify(val$33696,space$33697){
    if(space$33697===undefined){space$33697=null;}
    //Switch statement at json.ceylon (17:1-32:1)
    var case$33698=space$33697;
    if ($$$cl32209.isOfType(space$33697,{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Integer}]})) {
        /*Begin dynamic block*/
        return $$$cjl32280.JSString((typeof JSON==='undefined'||JSON===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: JSON")),'20:19-20:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$33696/*NULL PARAM!*/,null/*NULL PARAM!*/,case$33698));
        /*End dynamic block*/
    }else if ($$$cl32209.isOfType(space$33697,{ t:'u', l:[{t:$$$cjl32280.JSString},{t:$$$cjl32280.JSNumber}]})) {
        /*Begin dynamic block*/
        return $$$cjl32280.JSString((typeof JSON==='undefined'||JSON===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: JSON")),'25:19-25:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$33696/*NULL PARAM!*/,null/*NULL PARAM!*/,case$33698.$native));
        /*End dynamic block*/
    }else if ($$$cl32209.isOfType(space$33697,{t:$$$cl32209.Null})) {
        /*Begin dynamic block*/
        return $$$cjl32280.JSString((typeof JSON==='undefined'||JSON===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: JSON")),'30:19-30:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$33696));
        /*End dynamic block*/
    }//End switch statement at json.ceylon (17:1-32:1)
}
exports.jsonStringify=jsonStringify;
jsonStringify.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'space',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString},{t:$$$cl32209.Integer},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSNumber}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.json','jsonStringify']};};

//MethodDefinition jsonStringifyReplacer at json.ceylon (36:0-53:0)
function jsonStringifyReplacer(val$33699,replacer$33700,space$33701){
    if(space$33701===undefined){space$33701=null;}
    //Switch statement at json.ceylon (37:1-52:1)
    var case$33702=space$33701;
    if ($$$cl32209.isOfType(space$33701,{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Integer}]})) {
        /*Begin dynamic block*/
        return $$$cjl32280.JSString((typeof JSON==='undefined'||JSON===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: JSON")),'40:19-40:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$33699/*NULL PARAM!*/,replacer$33700/*NULL PARAM!*/,case$33702));
        /*End dynamic block*/
    }else if ($$$cl32209.isOfType(space$33701,{ t:'u', l:[{t:$$$cjl32280.JSString},{t:$$$cjl32280.JSNumber}]})) {
        /*Begin dynamic block*/
        return $$$cjl32280.JSString((typeof JSON==='undefined'||JSON===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: JSON")),'45:19-45:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$33699/*NULL PARAM!*/,replacer$33700/*NULL PARAM!*/,case$33702.$native));
        /*End dynamic block*/
    }else if ($$$cl32209.isOfType(space$33701,{t:$$$cl32209.Null})) {
        /*Begin dynamic block*/
        return $$$cjl32280.JSString((typeof JSON==='undefined'||JSON===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: JSON")),'50:19-50:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$33699));
        /*End dynamic block*/
    }//End switch statement at json.ceylon (37:1-52:1)
}
exports.jsonStringifyReplacer=jsonStringifyReplacer;
jsonStringifyReplacer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'replacer',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'space',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString},{t:$$$cl32209.Integer},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSNumber}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.json','jsonStringifyReplacer']};};

//ClassDefinition JSON at json.ceylon (55:0-151:0)
function JSON(values$33703, $$jSON){
    $init$JSON();
    if ($$jSON===undefined)$$jSON=new JSON.$$;
    if(values$33703===undefined){values$33703=$$$cl32209.getEmpty();}
    $$jSON.values$33703_=values$33703;
    $$$cj33690.Object($$jSON.values$33703,$$jSON);
    return $$jSON;
}
JSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cj33690.Object},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.json','JSON']};};
exports.JSON=JSON;
function $init$JSON(){
    if (JSON.$$===undefined){
        $$$cl32209.initTypeProto(JSON,'ceylon.js.json::JSON',$$$cj33690.Object);
        (function($$jSON){
            
            //MethodDefinition toJson at json.ceylon (57:1-61:1)
            $$jSON.toJson=function toJson(){
                var $$jSON=this;
                /*Begin dynamic block*/
                return JSJSON($$jSON.objectToJson$33704($$jSON).$native);
                /*End dynamic block*/
            };$$jSON.toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSJSON},$ps:[],$cont:JSON,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.json','JSON','$m','toJson']};};
            
            //MethodDefinition objectToJson at json.ceylon (63:1-108:1)
            $$jSON.objectToJson$33704=function objectToJson$33704(ceylonJSON$33705){
                var $$jSON=this;
                
                //AttributeDeclaration json at json.ceylon (64:2-64:34)
                var json$33706=$$$cjl32280.createJSObject();
                //'for' statement at json.ceylon (65:2-105:2)
                var it$33707 = ceylonJSON$33705.iterator();
                var item$33708;while ((item$33708=it$33707.next())!==$$$cl32209.getFinished()){
                    var name$33709=item$33708.key;
                    var entry$33710=item$33708.item;
                    
                    //AttributeDeclaration val at json.ceylon (66:3-66:14)
                    var val$33711;
                    $prop$getVal$33711={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.json','JSON','$m','objectToJson','$at','val']};}};
                    $prop$getVal$33711.get=function(){return val$33711};
                    //Switch statement at json.ceylon (67:3-101:3)
                    var case$33712=entry$33710;
                    if ($$$cl32209.isOfType(entry$33710,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        val$33711=case$33712.string;/*End dynamic block*/
                    }else if ($$$cl32209.isOfType(entry$33710,{t:$$$cl32209.Boolean})) {
                        /*Begin dynamic block*/
                        if(case$33712){
                            val$33711=true;
                        }else {
                            val$33711=false;
                        }/*End dynamic block*/
                    }else if ($$$cl32209.isOfType(entry$33710,{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.Float}]})) {
                        /*Begin dynamic block*/
                        val$33711=$$$cjl32280.createJSNumber(case$33712).$native;/*End dynamic block*/
                    }else if ($$$cl32209.isOfType(entry$33710,{t:$$$cj33690.Object})) {
                        /*Begin dynamic block*/
                        val$33711=$$jSON.objectToJson$33704(case$33712).$native;/*End dynamic block*/
                    }else if ($$$cl32209.isOfType(entry$33710,{t:$$$cj33690.Array})) {
                        /*Begin dynamic block*/
                        val$33711=$$jSON.arrayToArray$33713(case$33712).$native;/*End dynamic block*/
                    }else if ($$$cl32209.isOfType(entry$33710,{t:$$$cj33690.NullInstance})) {
                        /*Begin dynamic block*/
                        val$33711=null;/*End dynamic block*/
                    }//End switch statement at json.ceylon (67:3-101:3)
                    /*Begin dynamic block*/
                    $$$cjl32280.objectDefineProperty(json$33706,name$33709,$$$cjl32280.DataDescriptor(true,false,true,true,val$33711));
                    /*End dynamic block*/
                }
                return json$33706;
            };$$jSON.objectToJson$33704.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSObject},$ps:[{$nm:'ceylonJSON',$mt:'prm',$t:{t:$$$cj33690.Object},$an:function(){return[];}}],$cont:JSON,d:['ceylon.js.json','JSON','$m','objectToJson']};};
            
            //MethodDefinition arrayToArray at json.ceylon (110:1-150:1)
            $$jSON.arrayToArray$33713=function arrayToArray$33713(ceylonArray$33714){
                var $$jSON=this;
                
                //AttributeDeclaration array at json.ceylon (111:2-111:33)
                var array$33715=$$$cjl32280.createJSArray();
                //'for' statement at json.ceylon (112:2-148:2)
                var it$33716 = ceylonArray$33714.iterator();
                var entry$33717;while ((entry$33717=it$33716.next())!==$$$cl32209.getFinished()){
                    //Switch statement at json.ceylon (113:3-147:3)
                    var case$33718=entry$33717;
                    if ($$$cl32209.isOfType(entry$33717,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        array$33715.push(case$33718);
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(entry$33717,{t:$$$cl32209.Boolean})) {
                        /*Begin dynamic block*/
                        if(case$33718){
                            array$33715.push(true);
                        }else {
                            array$33715.push(false);
                        }/*End dynamic block*/
                    }else if ($$$cl32209.isOfType(entry$33717,{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cl32209.Float}]})) {
                        /*Begin dynamic block*/
                        array$33715.push($$$cjl32280.createJSNumber(case$33718).$native);
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(entry$33717,{t:$$$cj33690.Object})) {
                        /*Begin dynamic block*/
                        array$33715.push($$jSON.objectToJson$33704(case$33718).$native);
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(entry$33717,{t:$$$cj33690.Array})) {
                        /*Begin dynamic block*/
                        array$33715.push($$jSON.arrayToArray$33713(case$33718).$native);
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(entry$33717,{t:$$$cj33690.NullInstance})) {
                        /*Begin dynamic block*/
                        array$33715.push(null);
                        /*End dynamic block*/
                    }//End switch statement at json.ceylon (113:3-147:3)
                }
                return array$33715;
            };$$jSON.arrayToArray$33713.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSArray},$ps:[{$nm:'ceylonArray',$mt:'prm',$t:{t:$$$cj33690.Array},$an:function(){return[];}}],$cont:JSON,d:['ceylon.js.json','JSON','$m','arrayToArray']};};
            $$$cl32209.defineAttr($$jSON,'values$33703',function(){return this.values$33703_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Iterable,a:{Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cl32209.Boolean},{t:$$$cl32209.Integer},{t:$$$cl32209.Float},{t:$$$cj33690.Object},{t:$$$cj33690.Array},{t:$$$cj33690.NullInstance}]}}}}},$cont:JSON,d:['ceylon.js.json','JSON','$at','values']};});
        })(JSON.$$.prototype);
    }
    return JSON;
}
exports.$init$JSON=$init$JSON;
$init$JSON();

//ClassDefinition JSJSONAbs at json.ceylon (153:0-153:57)
function JSJSONAbs($$jSJSONAbs){
    $init$JSJSONAbs();
    if ($$jSJSONAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$jSJSONAbs);
    return $$jSJSONAbs;
}
JSJSONAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.json','JSJSONAbs']};};
exports.JSJSONAbs=JSJSONAbs;
function $init$JSJSONAbs(){
    if (JSJSONAbs.$$===undefined){
        $$$cl32209.initTypeProto(JSJSONAbs,'ceylon.js.json::JSJSONAbs',$$$cjl32280.JSObjectAbs);
    }
    return JSJSONAbs;
}
exports.$init$JSJSONAbs=$init$JSJSONAbs;
$init$JSJSONAbs();

//ClassDefinition JSJSON at json.ceylon (155:0-160:0)
function JSJSON(n$33719, $$jSJSON){
    $init$JSJSON();
    if ($$jSJSON===undefined)$$jSJSON=new JSJSON.$$;
    $$jSJSON.n$33719_=n$33719;
    JSJSONAbs($$jSJSON);
    
    //AttributeDeclaration native at json.ceylon (156:1-156:29)
    $$jSJSON.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JSJSON,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.json','JSJSON','$at','native']};}};
    /*Begin dynamic block*/
    $$jSJSON.$native=$$jSJSON.n$33719;/*End dynamic block*/
    return $$jSJSON;
}
JSJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSJSONAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.json','JSJSON']};};
exports.JSJSON=JSJSON;
function $init$JSJSON(){
    if (JSJSON.$$===undefined){
        $$$cl32209.initTypeProto(JSJSON,'ceylon.js.json::JSJSON',$init$JSJSONAbs());
        (function($$jSJSON){
            
            //AttributeDeclaration native at json.ceylon (156:1-156:29)
            $$$cl32209.defineAttr($$jSJSON,'n$33719',function(){return this.n$33719_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:JSJSON,d:['ceylon.js.json','JSJSON','$at','n']};});
        })(JSJSON.$$.prototype);
    }
    return JSJSON;
}
exports.$init$JSJSON=$init$JSJSON;
$init$JSJSON();

//ClassDefinition JSONArray at json.ceylon (162:0-162:42)
function JSONArray($$jSONArray){
    $init$JSONArray();
    if ($$jSONArray===undefined)$$jSONArray=new JSONArray.$$;
    $$$cj33690.Array(undefined,$$jSONArray);
    return $$jSONArray;
}
JSONArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cj33690.Array},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.json','JSONArray']};};
exports.JSONArray=JSONArray;
function $init$JSONArray(){
    if (JSONArray.$$===undefined){
        $$$cl32209.initTypeProto(JSONArray,'ceylon.js.json::JSONArray',$$$cj33690.Array);
    }
    return JSONArray;
}
exports.$init$JSONArray=$init$JSONArray;
$init$JSONArray();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
