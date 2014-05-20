(function(define) { define(function(require, ex$, module) {
var $CCMM$={"$mod-deps":["ceylon.language\/1.1.0",{path:"com.openswimsoftware.ceylon.js.language\/1.8.0",exp:1},{path:"com.openswimsoftware.ceylon.js.json\/1.0.0",exp:1}],"$mod-name":"com.openswimsoftware.ceylon.js.file","$mod-version":"0.12.0","$mod-bin":"7.0","com.openswimsoftware.ceylon.js.file":{createBlobBlobs:{$t:{$pk:".",$nm:"Blob"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$mt:"tp",$pk:".",$nm:"Blob"}],$pk:"$",$nm:"Sequential"},$mt:"prm",$nm:"parts"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"BlobPropertyBag"}]},$mt:"prm",$def:1,$nm:"properties"}]],$mt:"m",$an:{shared:[],doc:["create a blob from an array of blobs"]},$nm:"createBlobBlobs"},createBlobJS:{$t:{$pk:".",$nm:"Blob"},$ps:[[{$t:{$md:"ceylon.language",$tp:[{$md:"com.openswimsoftware.ceylon.js.language",$mt:"tp",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}],$pk:"$",$nm:"Sequential"},$mt:"prm",$nm:"parts"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"BlobPropertyBag"}]},$mt:"prm",$def:1,$nm:"properties"}]],$mt:"m",$an:{shared:[],doc:["create a blob from an array of JS Strings"]},$nm:"createBlobJS"},"$pkg-shared":1,BlobPropertyBag:{super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},$ps:[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$def:1,$an:{shared:[]},$nm:"type"}],$mt:"c",$an:{shared:[],doc:["blob creation options"]},$m:{toJson:{$t:{$md:"com.openswimsoftware.ceylon.js.json",$pk:"com.openswimsoftware.ceylon.js.json",$nm:"JSJSON"},$mt:"m",$an:{shared:[],doc:["convert the options to a native JSON object"]},$nm:"toJson"}},$at:{type:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"a",$an:{shared:[]},$nm:"type"}},$nm:"BlobPropertyBag"},Blob:{super:{$pk:".",$nm:"BlobAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["DOM Blob"]},$at:{n$jhy2fd:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"},native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"}},$nm:"Blob"},BlobAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{slice:{$t:{$pk:".",$nm:"Blob"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]}]},$mt:"prm",$def:1,$nm:"start"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]}]},$mt:"prm",$def:1,$nm:"end"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]}]},$mt:"prm",$def:1,$nm:"contentType"}]],$mt:"m",$an:{shared:[],doc:["returns a new blob with data between start and end with the given content type"]},$nm:"slice"},type:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the blobs mime type"]},$nm:"type"},close:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[],doc:["neuters the blob from further changes"]},$nm:"close"},size:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the size of the blob"]},$nm:"size"}},$nm:"BlobAbs"},createBlob:{$t:{$pk:".",$nm:"Blob"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$tp:[{$md:"ceylon.language",$mt:"tp",$pk:"$",$nm:"String"}],$pk:"$",$nm:"Sequential"}]},$mt:"prm",$def:1,$nm:"parts"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"BlobPropertyBag"}]},$mt:"prm",$def:1,$nm:"properties"}]],$mt:"m",$an:{shared:[],doc:["create a blob from an array of Strings"]},$nm:"createBlob"}}};
ex$.$CCMM$=function(){return $CCMM$;};
var m$1=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$1.$addmod$(m$1,'ceylon.language/1.1.0');
var m$9f=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
m$1.$addmod$(m$9f,'com.openswimsoftware.ceylon.js.language/1.8.0');
var m$hr=require('com/openswimsoftware/ceylon/js/json/1.0.0/com.openswimsoftware.ceylon.js.json-1.0.0');
m$1.$addmod$(m$hr,'com.openswimsoftware.ceylon.js.json/1.0.0');
function createBlob($p0,$p1){
    if($p0===undefined){$p0=null;}
    if($p1===undefined){$p1=null;}
    /*Begin dynamic block*/
    var $p2;
    if(($p2=$p1)!==null&&$p2!==undefined){
        var $p3;
        if(($p3=$p0)!==null&&$p3!==undefined){
            return Blob((typeof Blob==='undefined'||Blob===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Blob"),'10:16-10:19','blob.ceylon'):Blob)($p3,$p2.toJson().$_native));
        }else {
            return Blob((typeof Blob==='undefined'||Blob===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Blob"),'12:16-12:19','blob.ceylon'):Blob)(null,$p2.toJson().$_native));
        }
    }else {
        var $p4;
        if(($p4=$p0)!==null&&$p4!==undefined){
            return Blob((typeof Blob==='undefined'||Blob===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Blob"),'16:16-16:19','blob.ceylon'):Blob)($p4));
        }else {
            return Blob((typeof Blob==='undefined'||Blob===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Blob"),'18:16-18:19','blob.ceylon'):Blob)());
        }
    }/*End dynamic block*/
}
ex$.createBlob=createBlob;
createBlob.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Blob},$ps:[{$nm:'parts',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.String}}}]},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:BlobPropertyBag}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("create a blob from an array of Strings"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.file','createBlob']};};
function createBlobJS($p5,$p6){
    if($p6===undefined){$p6=null;}
    /*Begin dynamic block*/
    var $p7;
    if(($p7=$p6)!==null&&$p7!==undefined){
        return Blob((typeof Blob==='undefined'||Blob===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Blob"),'28:15-28:18','blob.ceylon'):Blob)((function(){
            var $p8=[];
            var $p9=$p5.iterator();
            var $pa;
            while(($pa=$p9.next())!==m$1.getFinished()){
                $p8.push($pa.$_native);
            }
            return m$1.ArraySequence($p8,{Element$Sequential:'Element'});
        }()),$p7.toJson().$_native));
    }else {
        return Blob((typeof Blob==='undefined'||Blob===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Blob"),'30:15-30:18','blob.ceylon'):Blob)((function(){
            var $pb=[];
            var $pc=$p5.iterator();
            var $pd;
            while(($pd=$pc.next())!==m$1.getFinished()){
                $pb.push($pd.$_native);
            }
            return m$1.ArraySequence($pb,{Element$Sequential:'Element'});
        }())));
    }/*End dynamic block*/
}
ex$.createBlobJS=createBlobJS;
createBlobJS.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Blob},$ps:[{$nm:'parts',$mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$9f.JSString}}},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:BlobPropertyBag}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("create a blob from an array of JS Strings"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.file','createBlobJS']};};
function createBlobBlobs($pe,$pf){
    if($pf===undefined){$pf=null;}
    /*Begin dynamic block*/
    var $pg;
    if(($pg=$pf)!==null&&$pg!==undefined){
        return Blob((typeof Blob==='undefined'||Blob===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Blob"),'39:15-39:18','blob.ceylon'):Blob)((function(){
            var $ph=[];
            var $pi=$pe.iterator();
            var $pj;
            while(($pj=$pi.next())!==m$1.getFinished()){
                $ph.push($pj.$_native);
            }
            return m$1.ArraySequence($ph,{Element$Sequential:'Element'});
        }()),$pg.toJson().$_native));
    }else {
        return Blob((typeof Blob==='undefined'||Blob===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Blob"),'41:15-41:18','blob.ceylon'):Blob)((function(){
            var $pk=[];
            var $pl=$pe.iterator();
            var $pm;
            while(($pm=$pl.next())!==m$1.getFinished()){
                $pk.push($pm.$_native);
            }
            return m$1.ArraySequence($pk,{Element$Sequential:'Element'});
        }())));
    }/*End dynamic block*/
}
ex$.createBlobBlobs=createBlobBlobs;
createBlobBlobs.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Blob},$ps:[{$nm:'parts',$mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Blob}}},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:BlobPropertyBag}]},$an:function(){return[];}}],$an:function(){return[m$1.doc("create a blob from an array of blobs"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.file','createBlobBlobs']};};
function BlobPropertyBag(type,blobPropertyBag$){
    $init$BlobPropertyBag();
    if(blobPropertyBag$===undefined)blobPropertyBag$=new BlobPropertyBag.$$;
    if(type===undefined){type="";}
    blobPropertyBag$.type_=type;
    return blobPropertyBag$;
}
BlobPropertyBag.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'type',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.doc("blob creation options"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.file','BlobPropertyBag']};};
ex$.BlobPropertyBag=BlobPropertyBag;
function $init$BlobPropertyBag(){
    if(BlobPropertyBag.$$===undefined){
        m$1.initTypeProto(BlobPropertyBag,'com.openswimsoftware.ceylon.js.file::BlobPropertyBag',m$1.Basic);
        (function(blobPropertyBag$){
            blobPropertyBag$.toJson=function toJson(){
                var blobPropertyBag$=this;
                var $pn;
                var $po;
                /*Begin dynamic block*/
                var $pp=blobPropertyBag$.type;
                if(m$1.is$(blobPropertyBag$.type,{t:m$1.String})) {
                    $pn=$pp;
                }else if(m$1.is$(blobPropertyBag$.type,{t:m$9f.JSString})) {
                    $pn=$pp.$_native;
                }$po=($pq=[m$1.Entry("type",$pn,{})].reifyCeylonType({t:m$1.Anything}),m$hr.JSON($pq));/*End dynamic block*/
                var $pq;
                return $po.toJson();
            };blobPropertyBag$.toJson.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hr.JSJSON},$ps:[],$cont:BlobPropertyBag,$an:function(){return[m$1.doc("convert the options to a native JSON object"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.file','BlobPropertyBag','$m','toJson']};};
            m$1.atr$(blobPropertyBag$,'type',function(){return this.type_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$cont:BlobPropertyBag,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.file','BlobPropertyBag','$at','type']};});
        })(BlobPropertyBag.$$.prototype);
    }
    return BlobPropertyBag;
}
ex$.$init$BlobPropertyBag=$init$BlobPropertyBag;
$init$BlobPropertyBag();
function BlobAbs(blobAbs$){
    $init$BlobAbs();
    if(blobAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(blobAbs$);
    return blobAbs$;
}
BlobAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.file','BlobAbs']};};
ex$.BlobAbs=BlobAbs;
function $init$BlobAbs(){
    if(BlobAbs.$$===undefined){
        m$1.initTypeProto(BlobAbs,'com.openswimsoftware.ceylon.js.file::BlobAbs',m$9f.JSObjectAbs);
        (function(blobAbs$){
            blobAbs$.size=function size(){
                var blobAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(blobAbs$.$_native.size);
                /*End dynamic block*/
            };blobAbs$.size.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:BlobAbs,$an:function(){return[m$1.doc("returns the size of the blob"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.file','BlobAbs','$m','size']};};
            blobAbs$.type=function type(){
                var blobAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(blobAbs$.$_native.type);
                /*End dynamic block*/
            };blobAbs$.type.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:BlobAbs,$an:function(){return[m$1.doc("returns the blobs mime type"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.file','BlobAbs','$m','type']};};
            blobAbs$.slice$defs$start=function($pr,$ps,$pt){return null;};
            blobAbs$.slice$defs$end=function($pr,$ps,$pt){return null;};
            blobAbs$.slice$defs$contentType=function($pr,$ps,$pt){return null;};
            blobAbs$.slice=function slice($pr,$ps,$pt){
                var blobAbs$=this;
                if($pr===undefined){$pr=blobAbs$.slice$defs$start($pr,$ps,$pt);}
                if($ps===undefined){$ps=blobAbs$.slice$defs$end($pr,$ps,$pt);}
                if($pt===undefined){$pt=blobAbs$.slice$defs$contentType($pr,$ps,$pt);}
                var $pu=$pr;
                if(m$1.is$($pr,{t:m$1.Integer})) {
                    var $pv=$ps;
                    if(m$1.is$($ps,{t:m$1.Integer})) {
                        var $pw=$pt;
                        if(m$1.is$($pt,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu,$pv,$pw.valueOf()));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu,$pv,$pw.$_native));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$1.Null})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu,$pv));
                            /*End dynamic block*/
                        }
                    }else if(m$1.is$($ps,{t:m$9f.JSNumber})) {
                        var $px=$pt;
                        if(m$1.is$($pt,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu,$pv.$_native,$px.valueOf()));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu,$pv.$_native,$px.$_native));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$1.Null})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu,$pv.$_native));
                            /*End dynamic block*/
                        }
                    }else if(m$1.is$($ps,{t:m$1.Null})) {
                        var $py=$pt;
                        if(m$1.is$($pt,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu,null,$py.valueOf()));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu,null,$py.$_native));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$1.Null})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu));
                            /*End dynamic block*/
                        }
                    }
                }else if(m$1.is$($pr,{t:m$9f.JSNumber})) {
                    var $pz=$ps;
                    if(m$1.is$($ps,{t:m$1.Integer})) {
                        var $q0=$pt;
                        if(m$1.is$($pt,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu.$_native,$pz,$q0.valueOf()));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu.$_native,$pz,$q0.$_native));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$1.Null})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu.$_native,$pz));
                            /*End dynamic block*/
                        }
                    }else if(m$1.is$($ps,{t:m$9f.JSNumber})) {
                        var $q1=$pt;
                        if(m$1.is$($pt,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu.$_native,$pz.$_native,$q1.valueOf()));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu.$_native,$pz.$_native,$q1.$_native));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$1.Null})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu.$_native,$pz.$_native));
                            /*End dynamic block*/
                        }
                    }else if(m$1.is$($ps,{t:m$1.Null})) {
                        var $q2=$pt;
                        if(m$1.is$($pt,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu.$_native,null,$q2.valueOf()));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu.$_native,null,$q2.$_native));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$1.Null})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice($pu.$_native));
                            /*End dynamic block*/
                        }
                    }
                }else if(m$1.is$($pr,{t:m$1.Null})) {
                    var $q3=$ps;
                    if(m$1.is$($ps,{t:m$1.Integer})) {
                        var $q4=$pt;
                        if(m$1.is$($pt,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice(null,$q3,$q4.valueOf()));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice(null,$q3,$q4.$_native));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$1.Null})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice(null,$q3));
                            /*End dynamic block*/
                        }
                    }else if(m$1.is$($ps,{t:m$9f.JSNumber})) {
                        var $q5=$pt;
                        if(m$1.is$($pt,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice(null,$q3.$_native,$q5.valueOf()));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice(null,$q3.$_native,$q5.$_native));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$1.Null})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice(null,$q3.$_native));
                            /*End dynamic block*/
                        }
                    }else if(m$1.is$($ps,{t:m$1.Null})) {
                        var $q6=$pt;
                        if(m$1.is$($pt,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice(null,null,$q6.valueOf()));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice(null,null,$q6.$_native));
                            /*End dynamic block*/
                        }else if(m$1.is$($pt,{t:m$1.Null})) {
                            /*Begin dynamic block*/
                            return Blob(blobAbs$.$_native.slice());
                            /*End dynamic block*/
                        }
                    }
                }
            };blobAbs$.slice.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Blob},$ps:[{$nm:'start',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:m$9f.JSNumber}]}]},$an:function(){return[];}},{$nm:'end',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:'u',l:[{t:m$1.Null},{t:m$9f.JSNumber}]}]},$an:function(){return[];}},{$nm:'contentType',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]}]},$an:function(){return[];}}],$cont:BlobAbs,$an:function(){return[m$1.doc("returns a new blob with data between start and end with the given content type"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.file','BlobAbs','$m','slice']};};
            blobAbs$.close=function close(){
                var blobAbs$=this;
                /*Begin dynamic block*/
                blobAbs$.$_native.close();
                /*End dynamic block*/
            };blobAbs$.close.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:BlobAbs,$an:function(){return[m$1.doc("neuters the blob from further changes"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.file','BlobAbs','$m','close']};};
        })(BlobAbs.$$.prototype);
    }
    return BlobAbs;
}
ex$.$init$BlobAbs=$init$BlobAbs;
$init$BlobAbs();
function Blob($q7,blob$){
    $init$Blob();
    if(blob$===undefined)blob$=new Blob.$$;
    blob$.$q7_=$q7;
    BlobAbs(blob$);
    blob$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Blob,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.file','Blob','$at','native']};}};
    /*Begin dynamic block*/
    blob$.$_native=blob$.$q7;/*End dynamic block*/
    return blob$;
}
Blob.$crtmm$=function(){return{mod:$CCMM$,'super':{t:BlobAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("DOM Blob"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.file','Blob']};};
ex$.Blob=Blob;
function $init$Blob(){
    if(Blob.$$===undefined){
        m$1.initTypeProto(Blob,'com.openswimsoftware.ceylon.js.file::Blob',$init$BlobAbs());
        (function(blob$){
            m$1.atr$(blob$,'$q7',function(){return this.$q7_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Blob,d:['com.openswimsoftware.ceylon.js.file','Blob','$at','n$jhy2fd']};});
        })(Blob.$$.prototype);
    }
    return Blob;
}
ex$.$init$Blob=$init$Blob;
$init$Blob();
ex$.$mod$ans$=function(){return[m$1.doc("based on the File working draft 12")];};
ex$.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.language/1.8.0':function(){return[m$1.shared()];},
'com.openswimsoftware.ceylon.js.json/1.0.0':function(){return[m$1.shared()];}
};};
ex$.$pkg$ans$com$openswimsoftware$ceylon$js$file=function(){return[m$1.shared()];};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
