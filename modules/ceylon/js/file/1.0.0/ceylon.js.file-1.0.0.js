(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.js.language\/1.8.5","ceylon.js.json\/1.0.0","ceylon.language\/0.6.1"],"$mod-name":"ceylon.js.file","$mod-version":"1.0.0","ceylon.js.file":{"createBlobBlobs":{"$t":{"$pk":"ceylon.js.file","$nm":"Blob"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.file","$nm":"Blob"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"parts"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.file","$nm":"BlobPropertyBag"}]},"$mt":"prm","$def":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createBlobBlobs"},"createBlobJS":{"$t":{"$pk":"ceylon.js.file","$nm":"Blob"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"parts"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.file","$nm":"BlobPropertyBag"}]},"$mt":"prm","$def":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createBlobJS"},"$pkg-shared":"1","BlobPropertyBag":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"type"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toJson":{"$t":{"$md":"ceylon.js.json","$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"}},"$at":{"type":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"type"}},"$nm":"BlobPropertyBag"},"Blob":{"super":{"$pk":"ceylon.js.file","$nm":"BlobAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.file","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.file","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Blob"},"BlobAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"slice":{"$t":{"$pk":"ceylon.js.file","$nm":"Blob"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"start"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"end"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$def":"1","$nm":"contentType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slice"},"type":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"type"},"close":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"close"},"size":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"size"}},"$nm":"BlobAbs"},"createBlob":{"$t":{"$pk":"ceylon.js.file","$nm":"Blob"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"prm","$def":"1","$nm":"parts"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.file","$nm":"BlobPropertyBag"}]},"$mt":"prm","$def":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createBlob"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl32209=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl32209.$addmod$($$$cl32209,'ceylon.language/0.6.1');
exports.$pkg$ans$ceylon$js$file=function(){return[$$$cl32209.shared()];};
exports.$mod$ans$=[];
var $$$cjl32280=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl32209.$addmod$($$$cjl32280,'ceylon.js.language/1.8.5');
var $$$cjj33169=require('ceylon/js/json/1.0.0/ceylon.js.json-1.0.0');
$$$cl32209.$addmod$($$$cjj33169,'ceylon.js.json/1.0.0');

//MethodDefinition createBlob at blob.ceylon (4:0-12:0)
function createBlob(parts$34124,properties$34125){
    if(parts$34124===undefined){parts$34124=null;}
    if(properties$34125===undefined){properties$34125=null;}
    /*Begin dynamic block*/
    var props$34126;
    if((props$34126=properties$34125)!==null){
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Blob")),'7:15-7:18','blob.ceylon'):Blob)(/*NULL PARAM!*/parts$34124/*NULL PARAM!*/,props$34126.toJson()));
    }else {
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Blob")),'9:15-9:18','blob.ceylon'):Blob)(/*NULL PARAM!*/parts$34124));
    }/*End dynamic block*/
}
exports.createBlob=createBlob;
createBlob.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Blob},$ps:[{$nm:'parts',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Sequential,a:{Element:{t:$$$cl32209.String}}}]},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:BlobPropertyBag}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.file','createBlob']};};

//MethodDefinition createBlobJS at blob.ceylon (14:0-22:0)
function createBlobJS(parts$34127,properties$34128){
    if(properties$34128===undefined){properties$34128=null;}
    /*Begin dynamic block*/
    var props$34129;
    if((props$34129=properties$34128)!==null){
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Blob")),'17:15-17:18','blob.ceylon'):Blob)(/*NULL PARAM!*/(function(){
            //SpreadOp at 17:22-17:34
            var lst$34130=[];
            var it$34131=parts$34127.iterator();
            var elem$34132;
            while ((elem$34132=it$34131.next())!==$$$cl32209.getFinished()){
                lst$34130.push(elem$34132.$native);
            }
            return $$$cl32209.ArraySequence(lst$34130);
        }())/*NULL PARAM!*/,props$34129.toJson()));
    }else {
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Blob")),'19:15-19:18','blob.ceylon'):Blob)(/*NULL PARAM!*/parts$34127));
    }/*End dynamic block*/
}
exports.createBlobJS=createBlobJS;
createBlobJS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Blob},$ps:[{$nm:'parts',$mt:'prm',$t:{t:$$$cl32209.Sequential,a:{Element:{t:$$$cjl32280.JSString}}},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:BlobPropertyBag}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.file','createBlobJS']};};

//MethodDefinition createBlobBlobs at blob.ceylon (24:0-32:0)
function createBlobBlobs(parts$34133,properties$34134){
    if(properties$34134===undefined){properties$34134=null;}
    /*Begin dynamic block*/
    var props$34135;
    if((props$34135=properties$34134)!==null){
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Blob")),'27:15-27:18','blob.ceylon'):Blob)(/*NULL PARAM!*/(function(){
            //SpreadOp at 27:22-27:34
            var lst$34136=[];
            var it$34137=parts$34133.iterator();
            var elem$34138;
            while ((elem$34138=it$34137.next())!==$$$cl32209.getFinished()){
                lst$34136.push(elem$34138.$native);
            }
            return $$$cl32209.ArraySequence(lst$34136);
        }())/*NULL PARAM!*/,props$34135.toJson()));
    }else {
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Blob")),'29:15-29:18','blob.ceylon'):Blob)(/*NULL PARAM!*/parts$34133));
    }/*End dynamic block*/
}
exports.createBlobBlobs=createBlobBlobs;
createBlobBlobs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Blob},$ps:[{$nm:'parts',$mt:'prm',$t:{t:$$$cl32209.Sequential,a:{Element:{t:Blob}}},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:BlobPropertyBag}]},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.file','createBlobBlobs']};};

//ClassDefinition BlobPropertyBag at blob.ceylon (34:0-53:0)
function BlobPropertyBag(type, $$blobPropertyBag){
    $init$BlobPropertyBag();
    if ($$blobPropertyBag===undefined)$$blobPropertyBag=new BlobPropertyBag.$$;
    if(type===undefined){type=$$$cl32209.String("",0);}
    $$blobPropertyBag.type_=type;
    return $$blobPropertyBag;
}
BlobPropertyBag.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.file','BlobPropertyBag']};};
exports.BlobPropertyBag=BlobPropertyBag;
function $init$BlobPropertyBag(){
    if (BlobPropertyBag.$$===undefined){
        $$$cl32209.initTypeProto(BlobPropertyBag,'ceylon.js.file::BlobPropertyBag',$$$cl32209.Basic);
        (function($$blobPropertyBag){
            
            //MethodDefinition toJson at blob.ceylon (36:1-52:1)
            $$blobPropertyBag.toJson=function toJson(){
                var $$blobPropertyBag=this;
                
                //AttributeDeclaration t at blob.ceylon (37:2-37:11)
                var t$34139;
                
                //AttributeDeclaration json at blob.ceylon (38:2-38:11)
                var json$34140;
                /*Begin dynamic block*/
                //Switch statement at blob.ceylon (40:3-46:3)
                var case$34141=$$blobPropertyBag.type;
                if ($$$cl32209.isOfType($$blobPropertyBag.type,{t:$$$cl32209.String})) {
                    t$34139=case$34141;
                }else if ($$$cl32209.isOfType($$blobPropertyBag.type,{t:$$$cjl32280.JSString})) {
                    t$34139=case$34141.$native;
                }//End switch statement at blob.ceylon (40:3-46:3)
                json$34140=(values$34142=/*NULL PARAM!*/[$$$cl32209.Entry($$$cl32209.String("type",4),t$34139,{})].reifyCeylonType({Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Anything}}),$$$cjj33169.JSON(values$34142));/*End dynamic block*/
                var values$34142;
                return json$34140.toJson();
            };$$blobPropertyBag.toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj33169.JSJSON},$ps:[],$cont:BlobPropertyBag,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.file','BlobPropertyBag','$m','toJson']};};
            $$$cl32209.defineAttr($$blobPropertyBag,'type',function(){return this.type_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$cont:BlobPropertyBag,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.file','BlobPropertyBag','$at','type']};});
        })(BlobPropertyBag.$$.prototype);
    }
    return BlobPropertyBag;
}
exports.$init$BlobPropertyBag=$init$BlobPropertyBag;
$init$BlobPropertyBag();

//ClassDefinition BlobAbs at blob.ceylon (55:0-249:0)
function BlobAbs($$blobAbs){
    $init$BlobAbs();
    if ($$blobAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$blobAbs);
    return $$blobAbs;
}
BlobAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.file','BlobAbs']};};
exports.BlobAbs=BlobAbs;
function $init$BlobAbs(){
    if (BlobAbs.$$===undefined){
        $$$cl32209.initTypeProto(BlobAbs,'ceylon.js.file::BlobAbs',$$$cjl32280.JSObjectAbs);
        (function($$blobAbs){
            
            //MethodDefinition size at blob.ceylon (57:4-61:4)
            $$blobAbs.size=function size(){
                var $$blobAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$blobAbs.$native.size);
                /*End dynamic block*/
            };$$blobAbs.size.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:BlobAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.file','BlobAbs','$m','size']};};
            
            //MethodDefinition type at blob.ceylon (63:4-67:4)
            $$blobAbs.type=function type(){
                var $$blobAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$blobAbs.$native.type);
                /*End dynamic block*/
            };$$blobAbs.type.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:BlobAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.file','BlobAbs','$m','type']};};
            
            //MethodDefinition slice at blob.ceylon (69:4-242:4)
            $$blobAbs.slice$defs$start=function(start$34143,end$34144,contentType$34145){var $$blobAbs=this;
            return null;};
            $$blobAbs.slice$defs$end=function(start$34143,end$34144,contentType$34145){var $$blobAbs=this;
            return null;};
            $$blobAbs.slice$defs$contentType=function(start$34143,end$34144,contentType$34145){var $$blobAbs=this;
            return null;};
            $$blobAbs.slice=function slice(start$34143,end$34144,contentType$34145){
                var $$blobAbs=this;
                if(start$34143===undefined){start$34143=$$blobAbs.slice$defs$start(start$34143,end$34144,contentType$34145);}
                if(end$34144===undefined){end$34144=$$blobAbs.slice$defs$end(start$34143,end$34144,contentType$34145);}
                if(contentType$34145===undefined){contentType$34145=$$blobAbs.slice$defs$contentType(start$34143,end$34144,contentType$34145);}
                //Switch statement at blob.ceylon (70:8-241:8)
                var case$34146=start$34143;
                if ($$$cl32209.isOfType(start$34143,{t:$$$cl32209.Integer})) {
                    //Switch statement at blob.ceylon (72:12-126:9)
                    var case$34147=end$34144;
                    if ($$$cl32209.isOfType(end$34144,{t:$$$cl32209.Integer})) {
                        //Switch statement at blob.ceylon (74:13-89:10)
                        var case$34148=contentType$34145;
                        if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146/*NULL PARAM!*/,case$34147/*NULL PARAM!*/,case$34148.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146/*NULL PARAM!*/,case$34147/*NULL PARAM!*/,case$34148.$native));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146/*NULL PARAM!*/,case$34147));
                            /*End dynamic block*/
                        }//End switch statement at blob.ceylon (74:13-89:10)
                    }else if ($$$cl32209.isOfType(end$34144,{t:$$$cjl32280.JSNumber})) {
                        //Switch statement at blob.ceylon (92:13-107:10)
                        var case$34149=contentType$34145;
                        if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146/*NULL PARAM!*/,case$34147.$native/*NULL PARAM!*/,case$34149.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146/*NULL PARAM!*/,case$34147.$native/*NULL PARAM!*/,case$34149.$native));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146/*NULL PARAM!*/,case$34147.$native));
                            /*End dynamic block*/
                        }//End switch statement at blob.ceylon (92:13-107:10)
                    }else if ($$$cl32209.isOfType(end$34144,{t:$$$cl32209.Null})) {
                        //Switch statement at blob.ceylon (110:13-125:10)
                        var case$34150=contentType$34145;
                        if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146/*NULL PARAM!*/,null/*NULL PARAM!*/,case$34150.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146/*NULL PARAM!*/,null/*NULL PARAM!*/,case$34150.$native));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146));
                            /*End dynamic block*/
                        }//End switch statement at blob.ceylon (110:13-125:10)
                    }//End switch statement at blob.ceylon (72:12-126:9)
                }else if ($$$cl32209.isOfType(start$34143,{t:$$$cjl32280.JSNumber})) {
                    //Switch statement at blob.ceylon (129:12-183:9)
                    var case$34151=end$34144;
                    if ($$$cl32209.isOfType(end$34144,{t:$$$cl32209.Integer})) {
                        //Switch statement at blob.ceylon (131:13-146:10)
                        var case$34152=contentType$34145;
                        if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146.$native/*NULL PARAM!*/,case$34151/*NULL PARAM!*/,case$34152.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146.$native/*NULL PARAM!*/,case$34151/*NULL PARAM!*/,case$34152.$native));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146.$native/*NULL PARAM!*/,case$34151));
                            /*End dynamic block*/
                        }//End switch statement at blob.ceylon (131:13-146:10)
                    }else if ($$$cl32209.isOfType(end$34144,{t:$$$cjl32280.JSNumber})) {
                        //Switch statement at blob.ceylon (149:13-164:10)
                        var case$34153=contentType$34145;
                        if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146.$native/*NULL PARAM!*/,case$34151.$native/*NULL PARAM!*/,case$34153.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146.$native/*NULL PARAM!*/,case$34151.$native/*NULL PARAM!*/,case$34153.$native));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146.$native/*NULL PARAM!*/,case$34151.$native));
                            /*End dynamic block*/
                        }//End switch statement at blob.ceylon (149:13-164:10)
                    }else if ($$$cl32209.isOfType(end$34144,{t:$$$cl32209.Null})) {
                        //Switch statement at blob.ceylon (167:13-182:10)
                        var case$34154=contentType$34145;
                        if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$34154.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$34154.$native));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$34146.$native));
                            /*End dynamic block*/
                        }//End switch statement at blob.ceylon (167:13-182:10)
                    }//End switch statement at blob.ceylon (129:12-183:9)
                }else if ($$$cl32209.isOfType(start$34143,{t:$$$cl32209.Null})) {
                    //Switch statement at blob.ceylon (186:12-240:9)
                    var case$34155=end$34144;
                    if ($$$cl32209.isOfType(end$34144,{t:$$$cl32209.Integer})) {
                        //Switch statement at blob.ceylon (188:13-203:10)
                        var case$34156=contentType$34145;
                        if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$34155/*NULL PARAM!*/,case$34156.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$34155/*NULL PARAM!*/,case$34156.$native));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$34155));
                            /*End dynamic block*/
                        }//End switch statement at blob.ceylon (188:13-203:10)
                    }else if ($$$cl32209.isOfType(end$34144,{t:$$$cjl32280.JSNumber})) {
                        //Switch statement at blob.ceylon (206:13-221:10)
                        var case$34157=contentType$34145;
                        if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$34155.$native/*NULL PARAM!*/,case$34157.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$34155.$native/*NULL PARAM!*/,case$34157.$native));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$34155.$native));
                            /*End dynamic block*/
                        }//End switch statement at blob.ceylon (206:13-221:10)
                    }else if ($$$cl32209.isOfType(end$34144,{t:$$$cl32209.Null})) {
                        //Switch statement at blob.ceylon (224:13-239:10)
                        var case$34158=contentType$34145;
                        if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$34158.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$34158.$native));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(contentType$34145,{t:$$$cl32209.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice());
                            /*End dynamic block*/
                        }//End switch statement at blob.ceylon (224:13-239:10)
                    }//End switch statement at blob.ceylon (186:12-240:9)
                }//End switch statement at blob.ceylon (70:8-241:8)
            };$$blobAbs.slice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Blob},$ps:[{$nm:'start',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Integer},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSNumber}]}]},$an:function(){return[];}},{$nm:'end',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Integer},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSNumber}]}]},$an:function(){return[];}},{$nm:'contentType',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]}]},$an:function(){return[];}}],$cont:BlobAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.file','BlobAbs','$m','slice']};};
            
            //MethodDefinition close at blob.ceylon (244:4-248:4)
            $$blobAbs.close=function close(){
                var $$blobAbs=this;
                /*Begin dynamic block*/
                $$blobAbs.$native.close();
                /*End dynamic block*/
            };$$blobAbs.close.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:BlobAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.file','BlobAbs','$m','close']};};
        })(BlobAbs.$$.prototype);
    }
    return BlobAbs;
}
exports.$init$BlobAbs=$init$BlobAbs;
$init$BlobAbs();

//ClassDefinition Blob at blob.ceylon (251:0-256:0)
function Blob(n$34159, $$blob){
    $init$Blob();
    if ($$blob===undefined)$$blob=new Blob.$$;
    $$blob.n$34159_=n$34159;
    BlobAbs($$blob);
    
    //AttributeDeclaration native at blob.ceylon (252:1-252:29)
    $$blob.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Blob,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.file','Blob','$at','native']};}};
    /*Begin dynamic block*/
    $$blob.$native=$$blob.n$34159;/*End dynamic block*/
    return $$blob;
}
Blob.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:BlobAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.file','Blob']};};
exports.Blob=Blob;
function $init$Blob(){
    if (Blob.$$===undefined){
        $$$cl32209.initTypeProto(Blob,'ceylon.js.file::Blob',$init$BlobAbs());
        (function($$blob){
            
            //AttributeDeclaration native at blob.ceylon (252:1-252:29)
            $$$cl32209.defineAttr($$blob,'n$34159',function(){return this.n$34159_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Blob,d:['ceylon.js.file','Blob','$at','n']};});
        })(Blob.$$.prototype);
    }
    return Blob;
}
exports.$init$Blob=$init$Blob;
$init$Blob();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
