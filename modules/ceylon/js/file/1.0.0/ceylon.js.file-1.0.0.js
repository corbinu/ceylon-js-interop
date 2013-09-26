(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1","ceylon.js.language\/1.8.5","ceylon.js.json\/1.0.0"],"$mod-name":"ceylon.js.file","$mod-version":"1.0.0","ceylon.js.file":{"createBlobBlobs":{"$t":{"$pk":"ceylon.js.file","$nm":"Blob"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.file","$nm":"Blob"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"parts"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.file","$nm":"BlobPropertyBag"}]},"$mt":"prm","$def":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createBlobBlobs"},"createBlobJS":{"$t":{"$pk":"ceylon.js.file","$nm":"Blob"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"parts"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.file","$nm":"BlobPropertyBag"}]},"$mt":"prm","$def":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createBlobJS"},"$pkg-shared":"1","BlobPropertyBag":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"type"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toJson":{"$t":{"$md":"ceylon.js.json","$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"}},"$at":{"type":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"type"}},"$nm":"BlobPropertyBag"},"Blob":{"super":{"$pk":"ceylon.js.file","$nm":"BlobAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.file","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.file","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Blob"},"BlobAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"slice":{"$t":{"$pk":"ceylon.js.file","$nm":"Blob"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"start"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"end"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$def":"1","$nm":"contentType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slice"},"type":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"type"},"close":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"close"},"size":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"size"}},"$nm":"BlobAbs"},"createBlob":{"$t":{"$pk":"ceylon.js.file","$nm":"Blob"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"prm","$def":"1","$nm":"parts"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.file","$nm":"BlobPropertyBag"}]},"$mt":"prm","$def":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createBlob"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6.1');
var $$$cjl361=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl1.$addmod$($$$cjl361,'ceylon.js.language/1.8.5');
var $$$cjj661=require('ceylon/js/json/1.0.0/ceylon.js.json-1.0.0');
$$$cl1.$addmod$($$$cjj661,'ceylon.js.json/1.0.0');
function createBlob(parts$927,properties$928){
    if(parts$927===undefined){parts$927=null;}
    if(properties$928===undefined){properties$928=null;}
    /*Begin dynamic block*/
    var props$929;
    if((props$929=properties$928)!==null){
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'7:15-7:18','blob.ceylon'):Blob)(/*NULL PARAM!*/parts$927/*NULL PARAM!*/,props$929.toJson()));
    }else {
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'9:15-9:18','blob.ceylon'):Blob)(/*NULL PARAM!*/parts$927));
    }/*End dynamic block*/
}
exports.createBlob=createBlob;
createBlob.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Blob},$ps:[{$nm:'parts',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}}]},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:BlobPropertyBag}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','createBlob']};};
function createBlobJS(parts$930,properties$931){
    if(properties$931===undefined){properties$931=null;}
    /*Begin dynamic block*/
    var props$932;
    if((props$932=properties$931)!==null){
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'17:15-17:18','blob.ceylon'):Blob)(/*NULL PARAM!*/(function(){
            var lst$933=[];
            var it$934=parts$930.iterator();
            var elem$935;
            while ((elem$935=it$934.next())!==$$$cl1.getFinished()){
                lst$933.push(elem$935.$native);
            }
            return $$$cl1.ArraySequence(lst$933);
        }())/*NULL PARAM!*/,props$932.toJson()));
    }else {
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'19:15-19:18','blob.ceylon'):Blob)(/*NULL PARAM!*/parts$930));
    }/*End dynamic block*/
}
exports.createBlobJS=createBlobJS;
createBlobJS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Blob},$ps:[{$nm:'parts',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cjl361.JSString}}},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:BlobPropertyBag}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','createBlobJS']};};
function createBlobBlobs(parts$936,properties$937){
    if(properties$937===undefined){properties$937=null;}
    /*Begin dynamic block*/
    var props$938;
    if((props$938=properties$937)!==null){
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'27:15-27:18','blob.ceylon'):Blob)(/*NULL PARAM!*/(function(){
            var lst$939=[];
            var it$940=parts$936.iterator();
            var elem$941;
            while ((elem$941=it$940.next())!==$$$cl1.getFinished()){
                lst$939.push(elem$941.$native);
            }
            return $$$cl1.ArraySequence(lst$939);
        }())/*NULL PARAM!*/,props$938.toJson()));
    }else {
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'29:15-29:18','blob.ceylon'):Blob)(/*NULL PARAM!*/parts$936));
    }/*End dynamic block*/
}
exports.createBlobBlobs=createBlobBlobs;
createBlobBlobs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Blob},$ps:[{$nm:'parts',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:Blob}}},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:BlobPropertyBag}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','createBlobBlobs']};};
function BlobPropertyBag(type, $$blobPropertyBag){
    $init$BlobPropertyBag();
    if ($$blobPropertyBag===undefined)$$blobPropertyBag=new BlobPropertyBag.$$;
    if(type===undefined){type=$$$cl1.String("",0);}
    $$blobPropertyBag.type_=type;
    $$$cl1.defineAttr($$blobPropertyBag,'type',function(){return this.type_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$cont:BlobPropertyBag,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','BlobPropertyBag','$at','type']};});
    function toJson(){
        var t$942;
        var json$943;
        /*Begin dynamic block*/
        
        var case$944=$$blobPropertyBag.type;
        if ($$$cl1.isOfType($$blobPropertyBag.type,{t:$$$cl1.String})) {
            t$942=case$944;
        }else if ($$$cl1.isOfType($$blobPropertyBag.type,{t:$$$cjl361.JSString})) {
            t$942=case$944.$native;
        }json$943=(values$945=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("type",4),t$942,{})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Anything}}),$$$cjj661.JSON(values$945));/*End dynamic block*/
        var values$945;
        return json$943.toJson();
    }
    $$blobPropertyBag.toJson=toJson;
    toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj661.JSJSON},$ps:[],$cont:BlobPropertyBag,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','BlobPropertyBag','$m','toJson']};};
    return $$blobPropertyBag;
}
BlobPropertyBag.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','BlobPropertyBag']};};
exports.BlobPropertyBag=BlobPropertyBag;
function $init$BlobPropertyBag(){
    if (BlobPropertyBag.$$===undefined){
        $$$cl1.initTypeProto(BlobPropertyBag,'ceylon.js.file::BlobPropertyBag',$$$cl1.Basic);
    }
    return BlobPropertyBag;
}
exports.$init$BlobPropertyBag=$init$BlobPropertyBag;
$init$BlobPropertyBag();
function BlobAbs($$blobAbs){
    $init$BlobAbs();
    if ($$blobAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$blobAbs);
    function size(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$blobAbs.$native.size);
        /*End dynamic block*/
    }
    $$blobAbs.size=size;
    size.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:BlobAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','BlobAbs','$m','size']};};
    function type(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$blobAbs.$native.type);
        /*End dynamic block*/
    }
    $$blobAbs.type=type;
    type.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:BlobAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','BlobAbs','$m','type']};};
    $$blobAbs.slice$defs$start=function(start$946,end$947,contentType$948){return null;};
    $$blobAbs.slice$defs$end=function(start$946,end$947,contentType$948){return null;};
    $$blobAbs.slice$defs$contentType=function(start$946,end$947,contentType$948){return null;};
    function slice(start$946,end$947,contentType$948){
        if(start$946===undefined){start$946=$$blobAbs.slice$defs$start(start$946,end$947,contentType$948);}
        if(end$947===undefined){end$947=$$blobAbs.slice$defs$end(start$946,end$947,contentType$948);}
        if(contentType$948===undefined){contentType$948=$$blobAbs.slice$defs$contentType(start$946,end$947,contentType$948);}
        
        var case$949=start$946;
        if ($$$cl1.isOfType(start$946,{t:$$$cl1.Integer})) {
            
            var case$950=end$947;
            if ($$$cl1.isOfType(end$947,{t:$$$cl1.Integer})) {
                
                var case$951=contentType$948;
                if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949/*NULL PARAM!*/,case$950/*NULL PARAM!*/,case$951.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949/*NULL PARAM!*/,case$950/*NULL PARAM!*/,case$951.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949/*NULL PARAM!*/,case$950));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(end$947,{t:$$$cjl361.JSNumber})) {
                
                var case$952=contentType$948;
                if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949/*NULL PARAM!*/,case$950.$native/*NULL PARAM!*/,case$952.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949/*NULL PARAM!*/,case$950.$native/*NULL PARAM!*/,case$952.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949/*NULL PARAM!*/,case$950.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(end$947,{t:$$$cl1.Null})) {
                
                var case$953=contentType$948;
                if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949/*NULL PARAM!*/,null/*NULL PARAM!*/,case$953.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949/*NULL PARAM!*/,null/*NULL PARAM!*/,case$953.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(start$946,{t:$$$cjl361.JSNumber})) {
            
            var case$954=end$947;
            if ($$$cl1.isOfType(end$947,{t:$$$cl1.Integer})) {
                
                var case$955=contentType$948;
                if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949.$native/*NULL PARAM!*/,case$954/*NULL PARAM!*/,case$955.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949.$native/*NULL PARAM!*/,case$954/*NULL PARAM!*/,case$955.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949.$native/*NULL PARAM!*/,case$954));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(end$947,{t:$$$cjl361.JSNumber})) {
                
                var case$956=contentType$948;
                if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949.$native/*NULL PARAM!*/,case$954.$native/*NULL PARAM!*/,case$956.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949.$native/*NULL PARAM!*/,case$954.$native/*NULL PARAM!*/,case$956.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949.$native/*NULL PARAM!*/,case$954.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(end$947,{t:$$$cl1.Null})) {
                
                var case$957=contentType$948;
                if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$957.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$957.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$949.$native));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(start$946,{t:$$$cl1.Null})) {
            
            var case$958=end$947;
            if ($$$cl1.isOfType(end$947,{t:$$$cl1.Integer})) {
                
                var case$959=contentType$948;
                if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$958/*NULL PARAM!*/,case$959.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$958/*NULL PARAM!*/,case$959.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$958));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(end$947,{t:$$$cjl361.JSNumber})) {
                
                var case$960=contentType$948;
                if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$958.$native/*NULL PARAM!*/,case$960.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$958.$native/*NULL PARAM!*/,case$960.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$958.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(end$947,{t:$$$cl1.Null})) {
                
                var case$961=contentType$948;
                if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$961.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$961.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$948,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice());
                    /*End dynamic block*/
                }
            }
        }
    }
    $$blobAbs.slice=slice;
    slice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Blob},$ps:[{$nm:'start',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSNumber}]}]},$an:function(){return[];}},{$nm:'end',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSNumber}]}]},$an:function(){return[];}},{$nm:'contentType',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]}]},$an:function(){return[];}}],$cont:BlobAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','BlobAbs','$m','slice']};};
    function close(){
        /*Begin dynamic block*/
        $$blobAbs.$native.close();
        /*End dynamic block*/
    }
    $$blobAbs.close=close;
    close.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:BlobAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','BlobAbs','$m','close']};};
    return $$blobAbs;
}
BlobAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.file','BlobAbs']};};
exports.BlobAbs=BlobAbs;
function $init$BlobAbs(){
    if (BlobAbs.$$===undefined){
        $$$cl1.initTypeProto(BlobAbs,'ceylon.js.file::BlobAbs',$$$cjl361.JSObjectAbs);
    }
    return BlobAbs;
}
exports.$init$BlobAbs=$init$BlobAbs;
$init$BlobAbs();
function Blob(n$962, $$blob){
    $init$Blob();
    if ($$blob===undefined)$$blob=new Blob.$$;
    $$blob.n$962_=n$962;
    BlobAbs($$blob);
    $$$cl1.defineAttr($$blob,'n$962',function(){return this.n$962_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Blob,d:['ceylon.js.file','Blob','$at','n']};});
    $$blob.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Blob,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.file','Blob','$at','native']};}};
    /*Begin dynamic block*/
    $$blob.$native=n$962;/*End dynamic block*/
    return $$blob;
}
Blob.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:BlobAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','Blob']};};
exports.Blob=Blob;
function $init$Blob(){
    if (Blob.$$===undefined){
        $$$cl1.initTypeProto(Blob,'ceylon.js.file::Blob',$init$BlobAbs());
    }
    return Blob;
}
exports.$init$Blob=$init$Blob;
$init$Blob();
exports.$mod$ans$=[];
exports.$pkg$ans$ceylon$js$file=function(){return[$$$cl1.shared()];};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
