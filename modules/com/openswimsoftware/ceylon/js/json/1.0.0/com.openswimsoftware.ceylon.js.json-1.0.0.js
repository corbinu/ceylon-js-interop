(function(define) { define(function(require, ex$, module) {
var $CCMM$={"com.openswimsoftware.ceylon.js.json":{"$pkg-shared":1,jsonParseCallback:{$t:{$pk:".",$nm:"unknown"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"text"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"key"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"}]],$mt:"prm",$pt:"f",$nm:"callback"}]],$mt:"m",$an:{shared:[],doc:["parse the given JSON string using a callback for manipulation the key values"]},$m:{callback$99us2u:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"key"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"}]],$mt:"m",$nm:"callback"}},$nm:"jsonParseCallback"},JSONArray:{super:{$md:"ceylon.json",$pk:"ceylon.json",$nm:"Array"},$mt:"c",$an:{shared:[],doc:["ceylon JSON Array"]},$nm:"JSONArray"},JSJSON:{super:{$pk:".",$nm:"JSJSONAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["native JSON object"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$95iunr:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"JSJSON"},jsonParse:{$t:{$pk:".",$nm:"unknown"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"text"}]],$mt:"m",$an:{shared:[],doc:["parse the given JSON string"]},$nm:"jsonParse"},JSJSONAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$nm:"JSJSONAbs"},JSON:{super:{$md:"ceylon.json",$pk:"ceylon.json",$nm:"Object"},$ps:[{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$pk:"$",$nm:"Float"},{$md:"ceylon.json",$pk:"ceylon.json",$nm:"Object"},{$md:"ceylon.json",$pk:"ceylon.json",$nm:"Array"},{$md:"ceylon.json",$pk:"ceylon.json",$nm:"NullInstance"}]}],$pk:"$",$nm:"Entry"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Null"}],$pk:"$",$nm:"Iterable"},$mt:"prm",$def:1,$nm:"values"}],$mt:"c",$an:{shared:[],doc:["JSON objects in Ceylon"]},$m:{objectToJson$pqypa2:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"},$ps:[[{$t:{$md:"ceylon.json",$pk:"ceylon.json",$nm:"Object"},$mt:"prm",$nm:"ceylonJSON"}]],$mt:"m",$an:{doc:["convert the object to a native object"]},$nm:"objectToJson"},arrayToArray$yuww9x:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$ps:[[{$t:{$md:"ceylon.json",$pk:"ceylon.json",$nm:"Array"},$mt:"prm",$nm:"ceylonArray"}]],$mt:"m",$an:{doc:["convert the array to a natve array"]},$nm:"arrayToArray"},toJson:{$t:{$pk:".",$nm:"JSJSON"},$mt:"m",$an:{shared:[],doc:["convert to native JSON object"]},$nm:"toJson"}},$at:{values$15okg6:{$t:{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"},{comp:"u",$mt:"tp",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"ceylon.language",$pk:"$",$nm:"Float"},{$md:"ceylon.json",$pk:"ceylon.json",$nm:"Object"},{$md:"ceylon.json",$pk:"ceylon.json",$nm:"Array"},{$md:"ceylon.json",$pk:"ceylon.json",$nm:"NullInstance"}]}],$pk:"$",$nm:"Entry"},{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"Null"}],$pk:"$",$nm:"Iterable"},$mt:"a",$nm:"values"}},$nm:"JSON"},jsonStringify:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]}]},$mt:"prm",$def:1,$nm:"space"}]],$mt:"m",$an:{shared:[],doc:["convert the JS object val into a JSON string using space for formating"]},$nm:"jsonStringify"},jsonStringifyReplacer:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"key"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"}]],$mt:"prm",$pt:"f",$nm:"replacer"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]}]},$mt:"prm",$def:1,$nm:"space"}]],$mt:"m",$an:{shared:[],doc:["convert the JS object val into a JSON string using space for formating using replacer to alter key values"]},$m:{replacer$szl1vo:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"key"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"val"}]],$mt:"m",$nm:"replacer"}},$nm:"jsonStringifyReplacer"}},"$mod-deps":["ceylon.language\/1.1.0",{path:"com.openswimsoftware.ceylon.js.language\/1.8.0",exp:1},{path:"ceylon.json\/1.1.0",exp:1},{path:"ceylon.collection\/1.1.0",exp:1}],"$mod-name":"com.openswimsoftware.ceylon.js.json","$mod-version":"1.0.0","$mod-bin":"7.0"};
ex$.$CCMM$=function(){return $CCMM$;};
var m$1=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$1.$addmod$(m$1,'ceylon.language/1.1.0');
var m$9f=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
m$1.$addmod$(m$9f,'com.openswimsoftware.ceylon.js.language/1.8.0');
var m$9g=require('ceylon/json/1.1.0/ceylon.json-1.1.0');
m$1.$addmod$(m$9g,'ceylon.json/1.1.0');
function jsonParse($9h){
    /*Begin dynamic block*/
    return ($9i=(typeof JSON==='undefined'||JSON===null?m$1.throwexc(m$1.Exception("Undefined or null reference: JSON"),'7:9-7:12','json.ceylon'):JSON).parse($9h.valueOf()),m$1.is$($9i,{t:m$1.Anything})?$9i:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'7:9-7:26','json.ceylon'));
    /*End dynamic block*/
}
ex$.jsonParse=jsonParse;
jsonParse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$an:function(){return[m$1.doc("parse the given JSON string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.json','jsonParse']};};
function jsonParseCallback($9j,$9k){
    /*Begin dynamic block*/
    return ($9l=(typeof JSON==='undefined'||JSON===null?m$1.throwexc(m$1.Exception("Undefined or null reference: JSON"),'14:9-14:12','json.ceylon'):JSON).parse($9j.valueOf(),$9k),m$1.is$($9l,{t:m$1.Anything})?$9l:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'14:9-14:36','json.ceylon'));
    /*End dynamic block*/
}
ex$.jsonParseCallback=jsonParseCallback;
jsonParseCallback.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("parse the given JSON string using a callback for manipulation the key values"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.json','jsonParseCallback']};};
function jsonStringify($9m,$9n){
    if($9n===undefined){$9n=null;}
    var $9o=$9n;
    if(m$1.is$($9n,{t:'u',l:[{t:m$1.String},{t:m$1.Integer}]})) {
        /*Begin dynamic block*/
        return m$9f.JSString((typeof JSON==='undefined'||JSON===null?m$1.throwexc(m$1.Exception("Undefined or null reference: JSON"),'23:19-23:22','json.ceylon'):JSON).stringify($9m,null,$9o));
        /*End dynamic block*/
    }else if(m$1.is$($9n,{t:'u',l:[{t:m$9f.JSString},{t:m$9f.JSNumber}]})) {
        /*Begin dynamic block*/
        return m$9f.JSString((typeof JSON==='undefined'||JSON===null?m$1.throwexc(m$1.Exception("Undefined or null reference: JSON"),'28:19-28:22','json.ceylon'):JSON).stringify($9m,null,$9o.$_native));
        /*End dynamic block*/
    }else if(m$1.is$($9n,{t:m$1.Null})) {
        /*Begin dynamic block*/
        return m$9f.JSString((typeof JSON==='undefined'||JSON===null?m$1.throwexc(m$1.Exception("Undefined or null reference: JSON"),'33:19-33:22','json.ceylon'):JSON).stringify($9m));
        /*End dynamic block*/
    }
}
ex$.jsonStringify=jsonStringify;
jsonStringify.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[{$nm:'val',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'space',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString},{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:m$9f.JSNumber}]}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("convert the JS object val into a JSON string using space for formating"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.json','jsonStringify']};};
function jsonStringifyReplacer($9p,$9q,$9r){
    if($9r===undefined){$9r=null;}
    var $9s=$9r;
    if(m$1.is$($9r,{t:'u',l:[{t:m$1.String},{t:m$1.Integer}]})) {
        /*Begin dynamic block*/
        return m$9f.JSString((typeof JSON==='undefined'||JSON===null?m$1.throwexc(m$1.Exception("Undefined or null reference: JSON"),'44:19-44:22','json.ceylon'):JSON).stringify($9p,$9q,$9s));
        /*End dynamic block*/
    }else if(m$1.is$($9r,{t:'u',l:[{t:m$9f.JSString},{t:m$9f.JSNumber}]})) {
        /*Begin dynamic block*/
        return m$9f.JSString((typeof JSON==='undefined'||JSON===null?m$1.throwexc(m$1.Exception("Undefined or null reference: JSON"),'49:19-49:22','json.ceylon'):JSON).stringify($9p,$9q,$9s.$_native));
        /*End dynamic block*/
    }else if(m$1.is$($9r,{t:m$1.Null})) {
        /*Begin dynamic block*/
        return m$9f.JSString((typeof JSON==='undefined'||JSON===null?m$1.throwexc(m$1.Exception("Undefined or null reference: JSON"),'54:19-54:22','json.ceylon'):JSON).stringify($9p));
        /*End dynamic block*/
    }
}
ex$.jsonStringifyReplacer=jsonStringifyReplacer;
jsonStringifyReplacer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[{$nm:'val',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'replacer',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'space',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString},{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:m$9f.JSNumber}]}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("convert the JS object val into a JSON string using space for formating using replacer to alter key values"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.json','jsonStringifyReplacer']};};
function JSON($9t,jSON$){
    $init$JSON();
    if(jSON$===undefined)jSON$=new JSON.$$;
    if($9t===undefined){$9t=m$1.getEmpty();}
    jSON$.$9t_=$9t;
    m$9g.$_Object(jSON$.$9t,jSON$);
    return jSON$;
}
JSON.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9g.$_Object},$ps:[{$nm:'values',$mt:'prm',$def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:'u',l:[{t:m$1.String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$9g.$_Object},{t:m$9g.$_Array},{t:m$9g.NullInstance}]},Key$Entry:{t:m$1.String}}},Absent$Iterable:{t:m$1.Null}}},$an:function(){return[];}}],$an:function(){return[m$1.doc("JSON objects in Ceylon"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.json','JSON']};};
ex$.JSON=JSON;
function $init$JSON(){
    if(JSON.$$===undefined){
        m$1.initTypeProto(JSON,'com.openswimsoftware.ceylon.js.json::JSON',m$9g.$_Object);
        (function(jSON$){
            jSON$.toJson=function toJson(){
                var jSON$=this;
                /*Begin dynamic block*/
                return JSJSON(jSON$.$9u(jSON$).$_native);
                /*End dynamic block*/
            };jSON$.toJson.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JSJSON},$ps:[],$cont:JSON,$an:function(){return[m$1.doc("convert to native JSON object"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.json','JSON','$m','toJson']};};
            jSON$.$9u=function $9u($9v){
                var jSON$=this;
                var $9w=m$9f.createJSObject();
                var $9y;for(var $9x=$9v.iterator();($9y=$9x.next())!==m$1.getFinished();){
                    var $9z=$9y.key,$a0=$9y.item;
                    var $a1;
                    var $a2=$a0;
                    if(m$1.is$($a0,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        $a1=$a2;/*End dynamic block*/
                    }else if(m$1.is$($a0,{t:m$1.$_Boolean})) {
                        /*Begin dynamic block*/
                        if($a2){
                            $a1=true;
                        }else {
                            $a1=false;
                        }/*End dynamic block*/
                    }else if(m$1.is$($a0,{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]})) {
                        /*Begin dynamic block*/
                        $a1=m$9f.createJSNumber($a2).$_native;/*End dynamic block*/
                    }else if(m$1.is$($a0,{t:m$9g.$_Object})) {
                        /*Begin dynamic block*/
                        $a1=jSON$.$9u($a2).$_native;/*End dynamic block*/
                    }else if(m$1.is$($a0,{t:m$9g.$_Array})) {
                        m$1.print("adding value Array");
                        /*Begin dynamic block*/
                        $a1=jSON$.$a3($a2).$_native;/*End dynamic block*/
                    }else if(m$1.is$($a0,{t:m$9g.NullInstance})) {
                        /*Begin dynamic block*/
                        $a1=null;/*End dynamic block*/
                    }
                    /*Begin dynamic block*/
                    m$9f.objectDefineProperty($9w,$9z,m$9f.DataDescriptor(true,false,true,true,$a1));
                    /*End dynamic block*/
                }
                return $9w;
            };jSON$.$9u.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSObject},$ps:[{$nm:'ceylonJSON',$mt:'prm',$t:{t:m$9g.$_Object},$an:function(){return[];}}],$cont:JSON,$an:function(){return[m$1.doc("convert the object to a native object")];},d:['com.openswimsoftware.ceylon.js.json','JSON','$m','objectToJson$pqypa2']};};
            jSON$.$a3=function $a3($a4){
                var jSON$=this;
                var $a5;
                /*Begin dynamic block*/
                $a5=m$9f.JSArray((typeof Array==='undefined'||Array===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Array"),'122:19-122:23','json.ceylon'):Array)());/*End dynamic block*/
                var $a7;for(var $a6=$a4.iterator();($a7=$a6.next())!==m$1.getFinished();){
                    var $a8=$a7;
                    if(m$1.is$($a7,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        $a5.$_push($a8);
                        /*End dynamic block*/
                    }else if(m$1.is$($a7,{t:m$1.$_Boolean})) {
                        /*Begin dynamic block*/
                        if($a8){
                            $a5.$_push(true);
                        }else {
                            $a5.$_push(false);
                        }/*End dynamic block*/
                    }else if(m$1.is$($a7,{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]})) {
                        /*Begin dynamic block*/
                        $a5.$_push(m$9f.createJSNumber($a8).$_native);
                        /*End dynamic block*/
                    }else if(m$1.is$($a7,{t:m$9g.$_Object})) {
                        /*Begin dynamic block*/
                        $a5.$_push(jSON$.$9u($a8).$_native);
                        /*End dynamic block*/
                    }else if(m$1.is$($a7,{t:m$9g.$_Array})) {
                        /*Begin dynamic block*/
                        $a5.$_push(jSON$.$a3($a8).$_native);
                        /*End dynamic block*/
                    }else if(m$1.is$($a7,{t:m$9g.NullInstance})) {
                        /*Begin dynamic block*/
                        $a5.$_push(null);
                        /*End dynamic block*/
                    }
                }
                return $a5;
            };jSON$.$a3.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSArray},$ps:[{$nm:'ceylonArray',$mt:'prm',$t:{t:m$9g.$_Array},$an:function(){return[];}}],$cont:JSON,$an:function(){return[m$1.doc("convert the array to a natve array")];},d:['com.openswimsoftware.ceylon.js.json','JSON','$m','arrayToArray$yuww9x']};};
            m$1.atr$(jSON$,'$9t',function(){return this.$9t_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:'u',l:[{t:m$1.String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$9g.$_Object},{t:m$9g.$_Array},{t:m$9g.NullInstance}]},Key$Entry:{t:m$1.String}}},Absent$Iterable:{t:m$1.Null}}},$cont:JSON,d:['com.openswimsoftware.ceylon.js.json','JSON','$at','values$15okg6']};});
        })(JSON.$$.prototype);
    }
    return JSON;
}
ex$.$init$JSON=$init$JSON;
$init$JSON();
function JSJSONAbs(jSJSONAbs$){
    $init$JSJSONAbs();
    if(jSJSONAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(jSJSONAbs$);
    return jSJSONAbs$;
}
JSJSONAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.json','JSJSONAbs']};};
ex$.JSJSONAbs=JSJSONAbs;
function $init$JSJSONAbs(){
    if(JSJSONAbs.$$===undefined){
        m$1.initTypeProto(JSJSONAbs,'com.openswimsoftware.ceylon.js.json::JSJSONAbs',m$9f.JSObjectAbs);
    }
    return JSJSONAbs;
}
ex$.$init$JSJSONAbs=$init$JSJSONAbs;
$init$JSJSONAbs();
function JSJSON($a9,jSJSON$){
    $init$JSJSON();
    if(jSJSON$===undefined)jSJSON$=new JSJSON.$$;
    jSJSON$.$a9_=$a9;
    JSJSONAbs(jSJSON$);
    jSJSON$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSJSON,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.json','JSJSON','$at','native']};}};
    /*Begin dynamic block*/
    jSJSON$.$_native=jSJSON$.$a9;/*End dynamic block*/
    return jSJSON$;
}
JSJSON.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JSJSONAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("native JSON object"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.json','JSJSON']};};
ex$.JSJSON=JSJSON;
function $init$JSJSON(){
    if(JSJSON.$$===undefined){
        m$1.initTypeProto(JSJSON,'com.openswimsoftware.ceylon.js.json::JSJSON',$init$JSJSONAbs());
        (function(jSJSON$){
            m$1.atr$(jSJSON$,'$a9',function(){return this.$a9_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JSJSON,d:['com.openswimsoftware.ceylon.js.json','JSJSON','$at','n$95iunr']};});
        })(JSJSON.$$.prototype);
    }
    return JSJSON;
}
ex$.$init$JSJSON=$init$JSJSON;
$init$JSJSON();
function JSONArray(jSONArray$){
    $init$JSONArray();
    if(jSONArray$===undefined)jSONArray$=new JSONArray.$$;
    m$9g.$_Array(undefined,jSONArray$);
    return jSONArray$;
}
JSONArray.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9g.$_Array},$ps:[],$an:function(){return[m$1.doc("ceylon JSON Array"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.json','JSONArray']};};
ex$.JSONArray=JSONArray;
function $init$JSONArray(){
    if(JSONArray.$$===undefined){
        m$1.initTypeProto(JSONArray,'com.openswimsoftware.ceylon.js.json::JSONArray',m$9g.$_Array);
    }
    return JSONArray;
}
ex$.$init$JSONArray=$init$JSONArray;
$init$JSONArray();
ex$.$mod$ans$=function(){return[m$1.doc("based on offical JSON spec")];};
ex$.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.language/1.8.0':function(){return[m$1.shared()];},
'ceylon.json/1.1.0':function(){return[m$1.shared()];},
'ceylon.collection/1.1.0':function(){return[m$1.shared()];}
};};
ex$.$pkg$ans$com$openswimsoftware$ceylon$js$json=function(){return[m$1.shared()];};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
