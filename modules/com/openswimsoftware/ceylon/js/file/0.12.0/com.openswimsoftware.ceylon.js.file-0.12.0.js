(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/1.0.0","com.openswimsoftware.ceylon.js.language\/1.8.0","com.openswimsoftware.ceylon.js.json\/1.0.0"],"$mod-name":"com.openswimsoftware.ceylon.js.file","$mod-version":"0.12.0","$mod-bin":"6.0","com.openswimsoftware.ceylon.js.file":{"createBlobBlobs":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.file","$nm":"Blob"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.file","$nm":"Blob"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"parts"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.file","$nm":"BlobPropertyBag"}]},"$mt":"prm","$def":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[],"doc":["create a blob from an array of blobs"]},"$nm":"createBlobBlobs"},"createBlobJS":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.file","$nm":"Blob"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"com.openswimsoftware.ceylon.js.language","$mt":"tpm","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"parts"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.file","$nm":"BlobPropertyBag"}]},"$mt":"prm","$def":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[],"doc":["create a blob from an array of JS Strings"]},"$nm":"createBlobJS"},"$pkg-shared":"1","BlobPropertyBag":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"type"}],"$mt":"cls","$an":{"shared":[],"doc":["blob creation options"]},"$m":{"toJson":{"$t":{"$md":"com.openswimsoftware.ceylon.js.json","$pk":"com.openswimsoftware.ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[],"doc":["convert the options to a native JSON object"]},"$nm":"toJson"}},"$at":{"type":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"type"}},"$nm":"BlobPropertyBag"},"Blob":{"super":{"$pk":"com.openswimsoftware.ceylon.js.file","$nm":"BlobAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["DOM Blob"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.file","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.file","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Blob"},"BlobAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"slice":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.file","$nm":"Blob"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"start"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"end"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$def":"1","$nm":"contentType"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a new blob with data between start and end with the given content type"]},"$nm":"slice"},"type":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the blobs mime type"]},"$nm":"type"},"close":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["neuters the blob from further changes"]},"$nm":"close"},"size":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the size of the blob"]},"$nm":"size"}},"$nm":"BlobAbs"},"createBlob":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.file","$nm":"Blob"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"prm","$def":"1","$nm":"parts"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.file","$nm":"BlobPropertyBag"}]},"$mt":"prm","$def":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[],"doc":["create a blob from an array of Strings"]},"$nm":"createBlob"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl1.$addmod$($$$cl1,'ceylon.language/1.0.0');
var $$$cocjl339=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
$$$cl1.$addmod$($$$cocjl339,'com.openswimsoftware.ceylon.js.language/1.8.0');
var $$$cocjj639=require('com/openswimsoftware/ceylon/js/json/1.0.0/com.openswimsoftware.ceylon.js.json-1.0.0');
$$$cl1.$addmod$($$$cocjj639,'com.openswimsoftware.ceylon.js.json/1.0.0');
function createBlob(parts$900,properties$901){
    if(parts$900===undefined){parts$900=null;}
    if(properties$901===undefined){properties$901=null;}
    /*Begin dynamic block*/
    var props$902;
    if((props$902=properties$901)!==null){
        var p$903;
        if((p$903=parts$900)!==null){
            return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'10:16-10:19','blob.ceylon'):Blob)(p$903,props$902.toJson().$native));
        }else {
            return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'12:16-12:19','blob.ceylon'):Blob)(null,props$902.toJson().$native));
        }
    }else {
        var p$904;
        if((p$904=parts$900)!==null){
            return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'16:16-16:19','blob.ceylon'):Blob)(p$904));
        }else {
            return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'18:16-18:19','blob.ceylon'):Blob)());
        }
    }/*End dynamic block*/
}
exports.createBlob=createBlob;
createBlob.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Blob},$ps:[{$nm:'parts',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}}]},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:BlobPropertyBag}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("create a blob from an array of Strings",38)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.file','createBlob']};};
function createBlobJS(parts$905,properties$906){
    if(properties$906===undefined){properties$906=null;}
    /*Begin dynamic block*/
    var props$907;
    if((props$907=properties$906)!==null){
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'28:15-28:18','blob.ceylon'):Blob)((function(){
            var lst$908=[];
            var it$909=parts$905.iterator();
            var elem$910;
            while ((elem$910=it$909.next())!==$$$cl1.getFinished()){
                lst$908.push(elem$910.$native);
            }
            return $$$cl1.ArraySequence(lst$908);
        }()),props$907.toJson().$native));
    }else {
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'30:15-30:18','blob.ceylon'):Blob)((function(){
            var lst$911=[];
            var it$912=parts$905.iterator();
            var elem$913;
            while ((elem$913=it$912.next())!==$$$cl1.getFinished()){
                lst$911.push(elem$913.$native);
            }
            return $$$cl1.ArraySequence(lst$911);
        }())));
    }/*End dynamic block*/
}
exports.createBlobJS=createBlobJS;
createBlobJS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Blob},$ps:[{$nm:'parts',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cocjl339.JSString}}},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:BlobPropertyBag}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("create a blob from an array of JS Strings",41)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.file','createBlobJS']};};
function createBlobBlobs(parts$914,properties$915){
    if(properties$915===undefined){properties$915=null;}
    /*Begin dynamic block*/
    var props$916;
    if((props$916=properties$915)!==null){
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'39:15-39:18','blob.ceylon'):Blob)((function(){
            var lst$917=[];
            var it$918=parts$914.iterator();
            var elem$919;
            while ((elem$919=it$918.next())!==$$$cl1.getFinished()){
                lst$917.push(elem$919.$native);
            }
            return $$$cl1.ArraySequence(lst$917);
        }()),props$916.toJson().$native));
    }else {
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'41:15-41:18','blob.ceylon'):Blob)((function(){
            var lst$920=[];
            var it$921=parts$914.iterator();
            var elem$922;
            while ((elem$922=it$921.next())!==$$$cl1.getFinished()){
                lst$920.push(elem$922.$native);
            }
            return $$$cl1.ArraySequence(lst$920);
        }())));
    }/*End dynamic block*/
}
exports.createBlobBlobs=createBlobBlobs;
createBlobBlobs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Blob},$ps:[{$nm:'parts',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:Blob}}},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:BlobPropertyBag}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("create a blob from an array of blobs",36)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.file','createBlobBlobs']};};
function BlobPropertyBag(type, $$blobPropertyBag){
    $init$BlobPropertyBag();
    if ($$blobPropertyBag===undefined)$$blobPropertyBag=new BlobPropertyBag.$$;
    if(type===undefined){type=$$$cl1.String("",0);}
    $$blobPropertyBag.type_=type;
    return $$blobPropertyBag;
}
BlobPropertyBag.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'type',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[$$$cl1.shared()];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("blob creation options",21)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.file','BlobPropertyBag']};};
exports.BlobPropertyBag=BlobPropertyBag;
function $init$BlobPropertyBag(){
    if (BlobPropertyBag.$$===undefined){
        $$$cl1.initTypeProto(BlobPropertyBag,'com.openswimsoftware.ceylon.js.file::BlobPropertyBag',$$$cl1.Basic);
        (function($$blobPropertyBag){
            $$blobPropertyBag.toJson=function toJson(){
                var $$blobPropertyBag=this;
                var t$923;
                var json$924;
                /*Begin dynamic block*/
                
                var case$925=$$blobPropertyBag.type;
                if ($$$cl1.isOfType($$blobPropertyBag.type,{t:$$$cl1.String})) {
                    t$923=case$925;
                }else if ($$$cl1.isOfType($$blobPropertyBag.type,{t:$$$cocjl339.JSString})) {
                    t$923=case$925.$native;
                }json$924=(values$926=[$$$cl1.Entry($$$cl1.String("type",4),t$923,{})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Anything}}),$$$cocjj639.JSON(values$926));/*End dynamic block*/
                var values$926;
                return json$924.toJson();
            };$$blobPropertyBag.toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjj639.JSJSON},$ps:[],$cont:BlobPropertyBag,$an:function(){return[$$$cl1.doc($$$cl1.String("convert the options to a native JSON object",43)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.file','BlobPropertyBag','$m','toJson']};};
            $$$cl1.defineAttr($$blobPropertyBag,'type',function(){return this.type_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$cont:BlobPropertyBag,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.file','BlobPropertyBag','$at','type']};});
        })(BlobPropertyBag.$$.prototype);
    }
    return BlobPropertyBag;
}
exports.$init$BlobPropertyBag=$init$BlobPropertyBag;
$init$BlobPropertyBag();
function BlobAbs($$blobAbs){
    $init$BlobAbs();
    if ($$blobAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$blobAbs);
    return $$blobAbs;
}
BlobAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.file','BlobAbs']};};
exports.BlobAbs=BlobAbs;
function $init$BlobAbs(){
    if (BlobAbs.$$===undefined){
        $$$cl1.initTypeProto(BlobAbs,'com.openswimsoftware.ceylon.js.file::BlobAbs',$$$cocjl339.JSObjectAbs);
        (function($$blobAbs){
            $$blobAbs.size=function size(){
                var $$blobAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$blobAbs.$native.size);
                /*End dynamic block*/
            };$$blobAbs.size.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:BlobAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the size of the blob",28)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.file','BlobAbs','$m','size']};};
            $$blobAbs.type=function type(){
                var $$blobAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$blobAbs.$native.type);
                /*End dynamic block*/
            };$$blobAbs.type.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:BlobAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the blobs mime type",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.file','BlobAbs','$m','type']};};
            $$blobAbs.slice$defs$start=function(start$927,end$928,contentType$929){var $$blobAbs=this;
            return null;};
            $$blobAbs.slice$defs$end=function(start$927,end$928,contentType$929){var $$blobAbs=this;
            return null;};
            $$blobAbs.slice$defs$contentType=function(start$927,end$928,contentType$929){var $$blobAbs=this;
            return null;};
            $$blobAbs.slice=function slice(start$927,end$928,contentType$929){
                var $$blobAbs=this;
                if(start$927===undefined){start$927=$$blobAbs.slice$defs$start(start$927,end$928,contentType$929);}
                if(end$928===undefined){end$928=$$blobAbs.slice$defs$end(start$927,end$928,contentType$929);}
                if(contentType$929===undefined){contentType$929=$$blobAbs.slice$defs$contentType(start$927,end$928,contentType$929);}
                
                var case$930=start$927;
                if ($$$cl1.isOfType(start$927,{t:$$$cl1.Integer})) {
                    
                    var case$931=end$928;
                    if ($$$cl1.isOfType(end$928,{t:$$$cl1.Integer})) {
                        
                        var case$932=contentType$929;
                        if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930,case$931,case$932.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930,case$931,case$932.$native));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930,case$931));
                            /*End dynamic block*/
                        }
                    }else if ($$$cl1.isOfType(end$928,{t:$$$cocjl339.JSNumber})) {
                        
                        var case$933=contentType$929;
                        if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930,case$931.$native,case$933.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930,case$931.$native,case$933.$native));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930,case$931.$native));
                            /*End dynamic block*/
                        }
                    }else if ($$$cl1.isOfType(end$928,{t:$$$cl1.Null})) {
                        
                        var case$934=contentType$929;
                        if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930,null,case$934.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930,null,case$934.$native));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930));
                            /*End dynamic block*/
                        }
                    }
                }else if ($$$cl1.isOfType(start$927,{t:$$$cocjl339.JSNumber})) {
                    
                    var case$935=end$928;
                    if ($$$cl1.isOfType(end$928,{t:$$$cl1.Integer})) {
                        
                        var case$936=contentType$929;
                        if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930.$native,case$935,case$936.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930.$native,case$935,case$936.$native));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930.$native,case$935));
                            /*End dynamic block*/
                        }
                    }else if ($$$cl1.isOfType(end$928,{t:$$$cocjl339.JSNumber})) {
                        
                        var case$937=contentType$929;
                        if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930.$native,case$935.$native,case$937.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930.$native,case$935.$native,case$937.$native));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930.$native,case$935.$native));
                            /*End dynamic block*/
                        }
                    }else if ($$$cl1.isOfType(end$928,{t:$$$cl1.Null})) {
                        
                        var case$938=contentType$929;
                        if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930.$native,null,case$938.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930.$native,null,case$938.$native));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(case$930.$native));
                            /*End dynamic block*/
                        }
                    }
                }else if ($$$cl1.isOfType(start$927,{t:$$$cl1.Null})) {
                    
                    var case$939=end$928;
                    if ($$$cl1.isOfType(end$928,{t:$$$cl1.Integer})) {
                        
                        var case$940=contentType$929;
                        if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(null,case$939,case$940.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(null,case$939,case$940.$native));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(null,case$939));
                            /*End dynamic block*/
                        }
                    }else if ($$$cl1.isOfType(end$928,{t:$$$cocjl339.JSNumber})) {
                        
                        var case$941=contentType$929;
                        if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(null,case$939.$native,case$941.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(null,case$939.$native,case$941.$native));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(null,case$939.$native));
                            /*End dynamic block*/
                        }
                    }else if ($$$cl1.isOfType(end$928,{t:$$$cl1.Null})) {
                        
                        var case$942=contentType$929;
                        if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(null,null,case$942.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice(null,null,case$942.$native));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(contentType$929,{t:$$$cl1.Null})) {
                            /*Begin dynamic block*/
                            return Blob($$blobAbs.$native.slice());
                            /*End dynamic block*/
                        }
                    }
                }
            };$$blobAbs.slice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Blob},$ps:[{$nm:'start',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Integer},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSNumber}]}]},$an:function(){return[];}},{$nm:'end',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Integer},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSNumber}]}]},$an:function(){return[];}},{$nm:'contentType',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]}]},$an:function(){return[];}}],$cont:BlobAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a new blob with data between start and end with the given content type",78)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.file','BlobAbs','$m','slice']};};
            $$blobAbs.close=function close(){
                var $$blobAbs=this;
                /*Begin dynamic block*/
                $$blobAbs.$native.close();
                /*End dynamic block*/
            };$$blobAbs.close.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:BlobAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("neuters the blob from further changes",37)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.file','BlobAbs','$m','close']};};
        })(BlobAbs.$$.prototype);
    }
    return BlobAbs;
}
exports.$init$BlobAbs=$init$BlobAbs;
$init$BlobAbs();
function Blob(n$943, $$blob){
    $init$Blob();
    if ($$blob===undefined)$$blob=new Blob.$$;
    $$blob.n$943_=n$943;
    BlobAbs($$blob);
    $$blob.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Blob,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.file','Blob','$at','native']};}};
    /*Begin dynamic block*/
    $$blob.$native=$$blob.n$943;/*End dynamic block*/
    return $$blob;
}
Blob.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:BlobAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("DOM Blob",8)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.file','Blob']};};
exports.Blob=Blob;
function $init$Blob(){
    if (Blob.$$===undefined){
        $$$cl1.initTypeProto(Blob,'com.openswimsoftware.ceylon.js.file::Blob',$init$BlobAbs());
        (function($$blob){
            $$$cl1.defineAttr($$blob,'n$943',function(){return this.n$943_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Blob,d:['com.openswimsoftware.ceylon.js.file','Blob','$at','n']};});
        })(Blob.$$.prototype);
    }
    return Blob;
}
exports.$init$Blob=$init$Blob;
$init$Blob();
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("based on the File working draft 12",34))];};
exports.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.language/1.8.0':function(){return[$$$cl1.shared()];},
'com.openswimsoftware.ceylon.js.json/1.0.0':function(){return[$$$cl1.shared()];}
};};
exports.$pkg$ans$com$openswimsoftware$ceylon$js$file=function(){return[$$$cl1.shared()];};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
