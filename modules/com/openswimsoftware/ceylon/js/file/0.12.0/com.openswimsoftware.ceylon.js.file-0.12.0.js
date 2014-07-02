(function(define) { define(function(require, ex$, module) {
var $CCMM$={"$mod-version":"0.12.0","$mod-deps":[{exp:1,path:"com.openswimsoftware.ceylon.js.language\/1.8.0"},{exp:1,path:"com.openswimsoftware.ceylon.js.json\/1.0.0"},{exp:1,path:"ceylon.language\/1.1.0"}],"$mod-bin":"7.0","com.openswimsoftware.ceylon.js.file":{"$pkg-shared":1,Blob:{super:{pk:".",nm:"BlobAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$juxibs:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["DOM Blob"]},nm:"Blob"},BlobAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{size:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the size of the blob"]},nm:"size"},slice:{$t:{pk:".",nm:"Blob"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]}]},def:1,mt:"prm",nm:"start"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]}]},def:1,mt:"prm",nm:"end"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]}]},def:1,mt:"prm",nm:"contentType"}]],mt:"m",an:{doc:["returns a new blob with data between start and end with the given content type"]},nm:"slice"},type:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the blobs mime type"]},nm:"type"},close:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,mt:"m",an:{doc:["neuters the blob from further changes"]},nm:"close"}},nm:"BlobAbs"},createBlobJS:{$t:{pk:".",nm:"Blob"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",tp:[{mt:"tp",md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}],nm:"Sequential"},mt:"prm",nm:"parts"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"BlobPropertyBag"}]},def:1,mt:"prm",nm:"properties"}]],mt:"m",an:{doc:["create a blob from an array of JS Strings"]},nm:"createBlobJS"},createBlob:{$t:{pk:".",nm:"Blob"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"ceylon.language",pk:"$",tp:[{mt:"tp",md:"ceylon.language",pk:"$",nm:"String"}],nm:"Sequential"}]},def:1,mt:"prm",nm:"parts"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"BlobPropertyBag"}]},def:1,mt:"prm",nm:"properties"}]],mt:"m",an:{doc:["create a blob from an array of Strings"]},nm:"createBlob"},createBlobBlobs:{$t:{pk:".",nm:"Blob"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",tp:[{mt:"tp",pk:".",nm:"Blob"}],nm:"Sequential"},mt:"prm",nm:"parts"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"BlobPropertyBag"}]},def:1,mt:"prm",nm:"properties"}]],mt:"m",an:{doc:["create a blob from an array of blobs"]},nm:"createBlobBlobs"},BlobPropertyBag:{super:{md:"ceylon.language",pk:"$",nm:"Basic"},pa:1,ps:[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},pa:1,def:1,mt:"prm",nm:"type"}],mt:"c",$at:{type:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},pa:1,mt:"a",nm:"type"}},$m:{toJson:{$t:{md:"com.openswimsoftware.ceylon.js.json",pk:"com.openswimsoftware.ceylon.js.json",nm:"JSJSON"},pa:1,mt:"m",an:{doc:["convert the options to a native JSON object"]},nm:"toJson"}},an:{doc:["blob creation options"]},nm:"BlobPropertyBag"}},"$mod-name":"com.openswimsoftware.ceylon.js.file"};
ex$.$CCMM$=function(){return $CCMM$;};
var m$3g8=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$3g8.$addmod$(m$3g8,'ceylon.language/1.1.0');
ex$.$pkg$ans$com$openswimsoftware$ceylon$js$file=function(){return[m$3g8.shared()];};
ex$.$mod$ans$=function(){return[m$3g8.doc("based on the File working draft 12")];};
ex$.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.language/1.8.0':function(){return[m$3g8.shared()];},
'com.openswimsoftware.ceylon.js.json/1.0.0':function(){return[m$3g8.shared()];}
};};
var m$3ga=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
m$3g8.$addmod$(m$3ga,'com.openswimsoftware.ceylon.js.language/1.8.0');
var m$3gc=require('com/openswimsoftware/ceylon/js/json/1.0.0/com.openswimsoftware.ceylon.js.json-1.0.0');
m$3g8.$addmod$(m$3gc,'com.openswimsoftware.ceylon.js.json/1.0.0');

//MethodDef createBlob at blob.ceylon (4:0-22:0)
function createBlob($3oz,$3p0){
    if($3oz===undefined){$3oz=null;}
    if($3p0===undefined){$3p0=null;}
    /*BEG dynblock*/
    var $3p1;
    if(m$3g8.nn$(($3p1=$3p0))){
        var $3p2;
        if(m$3g8.nn$(($3p2=$3oz))){
            return Blob((typeof Blob==='undefined'||Blob===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Blob"),'10:16-10:19','blob.ceylon'):Blob)($3p2,$3p1.toJson().$_native));
        }else {
            return Blob((typeof Blob==='undefined'||Blob===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Blob"),'12:16-12:19','blob.ceylon'):Blob)(null,$3p1.toJson().$_native));
        }
    }else {
        var $3p3;
        if(m$3g8.nn$(($3p3=$3oz))){
            return Blob((typeof Blob==='undefined'||Blob===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Blob"),'16:16-16:19','blob.ceylon'):Blob)($3p3));
        }else {
            return Blob((typeof Blob==='undefined'||Blob===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Blob"),'18:16-18:19','blob.ceylon'):Blob)());
        }
    }/*END dynblock*/
}
ex$.createBlob=createBlob;
createBlob.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Blob},ps:[{nm:'parts',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:m$3g8.Sequential,a:{Element$Sequential:{t:m$3g8.$_String}}}]}},{nm:'properties',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:BlobPropertyBag}]}}],pa:1,an:function(){return[m$3g8.doc("create a blob from an array of Strings")];},d:['com.openswimsoftware.ceylon.js.file','createBlob']};};

//MethodDef createBlobJS at blob.ceylon (24:0-33:0)
function createBlobJS($3p4,$3p5){
    if($3p5===undefined){$3p5=null;}
    /*BEG dynblock*/
    var $3p6;
    if(m$3g8.nn$(($3p6=$3p5))){
        return Blob((typeof Blob==='undefined'||Blob===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Blob"),'28:15-28:18','blob.ceylon'):Blob)((function(){
            //SpreadOp at blob.ceylon (28:22-28:34)
            var $3p7=[];
            var $3p8=$3p4.iterator();
            var $3p9;
            while(($3p9=$3p8.next())!==m$3g8.getFinished()){
                $3p7.push($3p9.$_native);
            }
            return m$3g8.sequence($3p7,{Element$sequence:,$3p6.toJson().$_native));
        }else {
            return Blob((typeof Blob==='undefined'||Blob===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Blob"),'30:15-30:18','blob.ceylon'):Blob)((function(){
                //SpreadOp at blob.ceylon (30:22-30:34)
                var $3pa=[];
                var $3pb=$3p4.iterator();
                var $3pc;
                while(($3pc=$3pb.next())!==m$3g8.getFinished()){
                    $3pa.push($3pc.$_native);
                }
                return m$3g8.sequence($3pa,{Element$sequence:));
            }/*END dynblock*/
        }
        ex$.createBlobJS=createBlobJS;
        createBlobJS.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Blob},ps:[{nm:'parts',mt:'prm',$t:{t:m$3g8.Sequential,a:{Element$Sequential:{t:m$3ga.JSString}}}},{nm:'properties',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:BlobPropertyBag}]}}],pa:1,an:function(){return[m$3g8.doc("create a blob from an array of JS Strings")];},d:['com.openswimsoftware.ceylon.js.file','createBlobJS']};};
        
        //MethodDef createBlobBlobs at blob.ceylon (35:0-44:0)
        function createBlobBlobs($3pd,$3pe){
            if($3pe===undefined){$3pe=null;}
            /*BEG dynblock*/
            var $3pf;
            if(m$3g8.nn$(($3pf=$3pe))){
                return Blob((typeof Blob==='undefined'||Blob===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Blob"),'39:15-39:18','blob.ceylon'):Blob)((function(){
                    //SpreadOp at blob.ceylon (39:22-39:34)
                    var $3pg=[];
                    var $3ph=$3pd.iterator();
                    var $3pi;
                    while(($3pi=$3ph.next())!==m$3g8.getFinished()){
                        $3pg.push($3pi.$_native);
                    }
                    return m$3g8.sequence($3pg,{Element$sequence:,$3pf.toJson().$_native));
                }else {
                    return Blob((typeof Blob==='undefined'||Blob===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Blob"),'41:15-41:18','blob.ceylon'):Blob)((function(){
                        //SpreadOp at blob.ceylon (41:22-41:34)
                        var $3pj=[];
                        var $3pk=$3pd.iterator();
                        var $3pl;
                        while(($3pl=$3pk.next())!==m$3g8.getFinished()){
                            $3pj.push($3pl.$_native);
                        }
                        return m$3g8.sequence($3pj,{Element$sequence:));
                    }/*END dynblock*/
                }
                ex$.createBlobBlobs=createBlobBlobs;
                createBlobBlobs.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Blob},ps:[{nm:'parts',mt:'prm',$t:{t:m$3g8.Sequential,a:{Element$Sequential:{t:Blob}}}},{nm:'properties',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.Null},{t:BlobPropertyBag}]}}],pa:1,an:function(){return[m$3g8.doc("create a blob from an array of blobs")];},d:['com.openswimsoftware.ceylon.js.file','createBlobBlobs']};};
                
                //ClassDef BlobPropertyBag at blob.ceylon (46:0-67:0)
                function BlobPropertyBag(type,blobPropertyBag$){
                    $init$BlobPropertyBag();
                    if(blobPropertyBag$===undefined)blobPropertyBag$=new BlobPropertyBag.$$;
                    if(type===undefined){type="";}
                    blobPropertyBag$.type_=type;
                    return blobPropertyBag$;
                }
                BlobPropertyBag.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3g8.Basic},ps:[{nm:'type',mt:'prm',def:1,$t:{t:'u',l:[{t:m$3g8.$_String},{t:m$3ga.JSString}]},pa:1}],pa:1,an:function(){return[m$3g8.doc("blob creation options")];},d:['com.openswimsoftware.ceylon.js.file','BlobPropertyBag']};};
                ex$.BlobPropertyBag=BlobPropertyBag;
                function $init$BlobPropertyBag(){
                    if(BlobPropertyBag.$$===undefined){
                        m$3g8.initTypeProto(BlobPropertyBag,'com.openswimsoftware.ceylon.js.file::BlobPropertyBag',m$3g8.Basic);
                        (function(blobPropertyBag$){
                            
                            //MethodDef toJson at blob.ceylon (49:1-66:1)
                            blobPropertyBag$.toJson=function(){
                                var blobPropertyBag$=this;
                                
                                //AttributeDecl t at blob.ceylon (51:2-51:11)
                                var $3pm;
                                
                                //AttributeDecl json at blob.ceylon (52:2-52:11)
                                var $3pn;
                                /*BEG dynblock*/
                                //Switch statement at blob.ceylon (54:3-60:3)
                                var $3po=blobPropertyBag$.type;
                                if(m$3g8.is$(blobPropertyBag$.type,{t:m$3g8.$_String})) {
                                    $3pm=$3po;
                                }else if(m$3g8.is$(blobPropertyBag$.type,{t:m$3ga.JSString})) {
                                    $3pm=$3po.$_native;
                                }//End switch statement at blob.ceylon (54:3-60:3)
                                $3pn=($3pp=[m$3g8.Entry("type",$3pm,{})].reifyCeylonType({t:m$3g8.Anything}),m$3gc.JSON($3pp));/*END dynblock*/
                                var $3pp;
                                return $3pn.toJson();
                            };blobPropertyBag$.toJson.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$3gc.JSJSON},ps:[],$cont:BlobPropertyBag,pa:1,an:function(){return[m$3g8.doc("convert the options to a native JSON object")];},d:['com.openswimsoftware.ceylon.js.file','BlobPropertyBag','$m','toJson']};};
                            m$3g8.atr$(blobPropertyBag$,'type',function(){return this.type_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$3g8.$_String},{t:m$3ga.JSString}]},$cont:BlobPropertyBag,pa:1,d:['com.openswimsoftware.ceylon.js.file','BlobPropertyBag','$at','type']};});
                        })(BlobPropertyBag.$$.prototype);
                    }
                    return BlobPropertyBag;
                }
                ex$.$init$BlobPropertyBag=$init$BlobPropertyBag;
                $init$BlobPropertyBag();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
