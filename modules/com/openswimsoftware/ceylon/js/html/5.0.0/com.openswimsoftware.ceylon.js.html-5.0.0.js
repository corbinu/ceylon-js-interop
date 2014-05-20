(function(define) { define(function(require, ex$, module) {
var $CCMM$={"$mod-deps":["ceylon.language\/1.1.0","com.openswimsoftware.ceylon.js.language\/1.8.0",{path:"com.openswimsoftware.ceylon.js.dom\/4.0.0",exp:1}],"$mod-name":"com.openswimsoftware.ceylon.js.html","$mod-version":"5.0.0","$mod-bin":"7.0","com.openswimsoftware.ceylon.js.html":{WindowAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$nm:"WindowAbs"},"$pkg-shared":1,HTMLFormElementAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{submit:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[],doc:["submit the form"]},$nm:"submit"},setAcceptCharset:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"acceptCharset"}]],$mt:"m",$an:{shared:[],doc:["set accept charset attribute"]},$nm:"setAcceptCharset"},getEncoding:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the encoding attribute"]},$nm:"getEncoding"},setEnctype:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"enctype"}]],$mt:"m",$an:{shared:[],doc:["set the encoding attribute"]},$nm:"setEnctype"},getTarget:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the name of the target attribute"]},$nm:"getTarget"},getMethod:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["get the method attribute"]},$nm:"getMethod"},getAcceptCharset:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["get accept charset attribute"]},$nm:"getAcceptCharset"},checkValidity:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["check if the form is current valid"]},$nm:"checkValidity"},setAutocomplete:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"autocomplete"}]],$mt:"m",$an:{shared:[],doc:["set autocomplete attribute"]},$nm:"setAutocomplete"},getAutocomplete:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns autocomplete attribute"]},$nm:"getAutocomplete"},getAction:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns action attribute"]},$nm:"getAction"},setEncoding:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"encoding"}]],$mt:"m",$an:{shared:[],doc:["set the encoding attribute"]},$nm:"setEncoding"},setTarget:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"target"}]],$mt:"m",$an:{shared:[],doc:["set the name of the target attribute"]},$nm:"setTarget"},getEnctype:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["get the encoding attribute"]},$nm:"getEnctype"},setNoValidate:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$nm:"noValidate"}]],$mt:"m",$an:{shared:[],doc:["disable validation"]},$nm:"setNoValidate"},getName:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the name attribute"]},$nm:"getName"},length:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["number of controls in the form"]},$nm:"length"},reset:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[],doc:["reset the form"]},$nm:"reset"},setMethod:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"method"}]],$mt:"m",$an:{shared:[],doc:["set the method attribute"]},$nm:"setMethod"},setName:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"name"}]],$mt:"m",$an:{shared:[],doc:["set the name attribute"]},$nm:"setName"},setAction:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"action"}]],$mt:"m",$an:{shared:[],doc:["set action attribute"]},$nm:"setAction"},getNoValidate:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["is validation enabled"]},$nm:"getNoValidate"}},$nm:"HTMLFormElementAbs"},LocationAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{replace:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"url"}]],$mt:"m",$an:{shared:[],doc:["replace the current page with the new location"]},$nm:"replace"},assignURL:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"url"}]],$mt:"m",$an:{shared:[],doc:["loads the resource at the url given"]},$nm:"assignURL"},reload:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$nm:"forcedReload"}]],$mt:"m",$an:{shared:[],doc:["reload the current page"]},$nm:"reload"}},$nm:"LocationAbs"},Location:{super:{$pk:".",$nm:"LocationAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["Location"]},$at:{n$dfapb6:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"},native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"}},$nm:"Location"},HTMLFormElement:{super:{$pk:".",$nm:"HTMLFormElementAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["HTML Form Element"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$b17v0q:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"HTMLFormElement"},Window:{super:{$pk:".",$nm:"WindowAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["the browser window"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$li437z:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"Window"}}};
ex$.$CCMM$=function(){return $CCMM$;};
var m$1=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$1.$addmod$(m$1,'ceylon.language/1.1.0');
var m$9f=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
m$1.$addmod$(m$9f,'com.openswimsoftware.ceylon.js.language/1.8.0');
function HTMLFormElementAbs(hTMLFormElementAbs$){
    $init$HTMLFormElementAbs();
    if(hTMLFormElementAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(hTMLFormElementAbs$);
    return hTMLFormElementAbs$;
}
HTMLFormElementAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs']};};
ex$.HTMLFormElementAbs=HTMLFormElementAbs;
function $init$HTMLFormElementAbs(){
    if(HTMLFormElementAbs.$$===undefined){
        m$1.initTypeProto(HTMLFormElementAbs,'com.openswimsoftware.ceylon.js.html::HTMLFormElementAbs',m$9f.JSObjectAbs);
        (function(hTMLFormElementAbs$){
            hTMLFormElementAbs$.getAcceptCharset=function getAcceptCharset(){
                var hTMLFormElementAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(hTMLFormElementAbs$.$_native.acceptCharset);
                /*End dynamic block*/
            };hTMLFormElementAbs$.getAcceptCharset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("get accept charset attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getAcceptCharset']};};
            hTMLFormElementAbs$.setAcceptCharset=function setAcceptCharset($aa){
                var hTMLFormElementAbs$=this;
                var $ab=$aa;
                if(m$1.is$($aa,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    hTMLFormElementAbs$.$_native.acceptCharset=$ab.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($aa,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    hTMLFormElementAbs$.$_native.acceptCharset=$ab.$_native;
                    /*End dynamic block*/
                }
            };hTMLFormElementAbs$.setAcceptCharset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'acceptCharset',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("set accept charset attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setAcceptCharset']};};
            hTMLFormElementAbs$.getAction=function getAction(){
                var hTMLFormElementAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(hTMLFormElementAbs$.$_native.action);
                /*End dynamic block*/
            };hTMLFormElementAbs$.getAction.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("returns action attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getAction']};};
            hTMLFormElementAbs$.setAction=function setAction($ac){
                var hTMLFormElementAbs$=this;
                var $ad=$ac;
                if(m$1.is$($ac,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    hTMLFormElementAbs$.$_native.action=$ad.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($ac,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    hTMLFormElementAbs$.$_native.action=$ad.$_native;
                    /*End dynamic block*/
                }
            };hTMLFormElementAbs$.setAction.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'action',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("set action attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setAction']};};
            hTMLFormElementAbs$.getAutocomplete=function getAutocomplete(){
                var hTMLFormElementAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(hTMLFormElementAbs$.$_native.autocomplete);
                /*End dynamic block*/
            };hTMLFormElementAbs$.getAutocomplete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("returns autocomplete attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getAutocomplete']};};
            hTMLFormElementAbs$.setAutocomplete=function setAutocomplete($ae){
                var hTMLFormElementAbs$=this;
                var $af=$ae;
                if(m$1.is$($ae,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    hTMLFormElementAbs$.$_native.autocomplete=$af.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($ae,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    hTMLFormElementAbs$.$_native.autocomplete=$af.$_native;
                    /*End dynamic block*/
                }
            };hTMLFormElementAbs$.setAutocomplete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'autocomplete',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("set autocomplete attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setAutocomplete']};};
            hTMLFormElementAbs$.getEnctype=function getEnctype(){
                var hTMLFormElementAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(hTMLFormElementAbs$.$_native.enctype);
                /*End dynamic block*/
            };hTMLFormElementAbs$.getEnctype.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("get the encoding attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getEnctype']};};
            hTMLFormElementAbs$.setEnctype=function setEnctype($ag){
                var hTMLFormElementAbs$=this;
                var $ah=$ag;
                if(m$1.is$($ag,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    hTMLFormElementAbs$.$_native.enctype=$ah.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($ag,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    hTMLFormElementAbs$.$_native.enctype=$ah.$_native;
                    /*End dynamic block*/
                }
            };hTMLFormElementAbs$.setEnctype.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'enctype',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("set the encoding attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setEnctype']};};
            hTMLFormElementAbs$.getEncoding=function getEncoding(){
                var hTMLFormElementAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(hTMLFormElementAbs$.$_native.encoding);
                /*End dynamic block*/
            };hTMLFormElementAbs$.getEncoding.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("returns the encoding attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getEncoding']};};
            hTMLFormElementAbs$.setEncoding=function setEncoding($ai){
                var hTMLFormElementAbs$=this;
                var $aj=$ai;
                if(m$1.is$($ai,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    hTMLFormElementAbs$.$_native.encoding=$aj.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($ai,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    hTMLFormElementAbs$.$_native.encoding=$aj.$_native;
                    /*End dynamic block*/
                }
            };hTMLFormElementAbs$.setEncoding.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'encoding',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("set the encoding attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setEncoding']};};
            hTMLFormElementAbs$.getMethod=function getMethod(){
                var hTMLFormElementAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(hTMLFormElementAbs$.$_native.method);
                /*End dynamic block*/
            };hTMLFormElementAbs$.getMethod.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("get the method attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getMethod']};};
            hTMLFormElementAbs$.setMethod=function setMethod($ak){
                var hTMLFormElementAbs$=this;
                var $al=$ak;
                if(m$1.is$($ak,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    hTMLFormElementAbs$.$_native.method=$al.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($ak,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    hTMLFormElementAbs$.$_native.method=$al.$_native;
                    /*End dynamic block*/
                }
            };hTMLFormElementAbs$.setMethod.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'method',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("set the method attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setMethod']};};
            hTMLFormElementAbs$.getName=function getName(){
                var hTMLFormElementAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(hTMLFormElementAbs$.$_native.name);
                /*End dynamic block*/
            };hTMLFormElementAbs$.getName.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("returns the name attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getName']};};
            hTMLFormElementAbs$.setName=function setName($am){
                var hTMLFormElementAbs$=this;
                var $an=$am;
                if(m$1.is$($am,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    hTMLFormElementAbs$.$_native.name=$an.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($am,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    hTMLFormElementAbs$.$_native.name=$an.$_native;
                    /*End dynamic block*/
                }
            };hTMLFormElementAbs$.setName.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("set the name attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setName']};};
            hTMLFormElementAbs$.getNoValidate=function getNoValidate(){
                var hTMLFormElementAbs$=this;
                /*Begin dynamic block*/
                if(hTMLFormElementAbs$.$_native.noValidate){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };hTMLFormElementAbs$.getNoValidate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("is validation enabled"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getNoValidate']};};
            hTMLFormElementAbs$.setNoValidate=function setNoValidate($ao){
                var hTMLFormElementAbs$=this;
                /*Begin dynamic block*/
                hTMLFormElementAbs$.$_native.noValidate=$ao;
                /*End dynamic block*/
            };hTMLFormElementAbs$.setNoValidate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'noValidate',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("disable validation"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setNoValidate']};};
            hTMLFormElementAbs$.getTarget=function getTarget(){
                var hTMLFormElementAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(hTMLFormElementAbs$.$_native.target);
                /*End dynamic block*/
            };hTMLFormElementAbs$.getTarget.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("returns the name of the target attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getTarget']};};
            hTMLFormElementAbs$.setTarget=function setTarget($ap){
                var hTMLFormElementAbs$=this;
                var $aq=$ap;
                if(m$1.is$($ap,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    hTMLFormElementAbs$.$_native.target=$aq.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($ap,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    hTMLFormElementAbs$.$_native.target=$aq.$_native;
                    /*End dynamic block*/
                }
            };hTMLFormElementAbs$.setTarget.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'target',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("set the name of the target attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setTarget']};};
            hTMLFormElementAbs$.length=function length(){
                var hTMLFormElementAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(hTMLFormElementAbs$.$_native.length);
                /*End dynamic block*/
            };hTMLFormElementAbs$.length.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("number of controls in the form"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','length']};};
            hTMLFormElementAbs$.checkValidity=function checkValidity(){
                var hTMLFormElementAbs$=this;
                /*Begin dynamic block*/
                if(hTMLFormElementAbs$.$_native.checkValidity()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };hTMLFormElementAbs$.checkValidity.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("check if the form is current valid"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','checkValidity']};};
            hTMLFormElementAbs$.submit=function submit(){
                var hTMLFormElementAbs$=this;
                /*Begin dynamic block*/
                hTMLFormElementAbs$.$_native.submit();
                /*End dynamic block*/
            };hTMLFormElementAbs$.submit.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("submit the form"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','submit']};};
            hTMLFormElementAbs$.reset=function reset(){
                var hTMLFormElementAbs$=this;
                /*Begin dynamic block*/
                hTMLFormElementAbs$.$_native.reset();
                /*End dynamic block*/
            };hTMLFormElementAbs$.reset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[m$1.doc("reset the form"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','reset']};};
        })(HTMLFormElementAbs.$$.prototype);
    }
    return HTMLFormElementAbs;
}
ex$.$init$HTMLFormElementAbs=$init$HTMLFormElementAbs;
$init$HTMLFormElementAbs();
function HTMLFormElement($ar,hTMLFormElement$){
    $init$HTMLFormElement();
    if(hTMLFormElement$===undefined)hTMLFormElement$=new HTMLFormElement.$$;
    hTMLFormElement$.$ar_=$ar;
    HTMLFormElementAbs(hTMLFormElement$);
    hTMLFormElement$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:HTMLFormElement,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElement','$at','native']};}};
    /*Begin dynamic block*/
    hTMLFormElement$.$_native=hTMLFormElement$.$ar;/*End dynamic block*/
    return hTMLFormElement$;
}
HTMLFormElement.$crtmm$=function(){return{mod:$CCMM$,'super':{t:HTMLFormElementAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("HTML Form Element"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElement']};};
ex$.HTMLFormElement=HTMLFormElement;
function $init$HTMLFormElement(){
    if(HTMLFormElement.$$===undefined){
        m$1.initTypeProto(HTMLFormElement,'com.openswimsoftware.ceylon.js.html::HTMLFormElement',$init$HTMLFormElementAbs());
        (function(hTMLFormElement$){
            m$1.atr$(hTMLFormElement$,'$ar',function(){return this.$ar_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:HTMLFormElement,d:['com.openswimsoftware.ceylon.js.html','HTMLFormElement','$at','n$b17v0q']};});
        })(HTMLFormElement.$$.prototype);
    }
    return HTMLFormElement;
}
ex$.$init$HTMLFormElement=$init$HTMLFormElement;
$init$HTMLFormElement();
function LocationAbs(locationAbs$){
    $init$LocationAbs();
    if(locationAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(locationAbs$);
    return locationAbs$;
}
LocationAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.html','LocationAbs']};};
ex$.LocationAbs=LocationAbs;
function $init$LocationAbs(){
    if(LocationAbs.$$===undefined){
        m$1.initTypeProto(LocationAbs,'com.openswimsoftware.ceylon.js.html::LocationAbs',m$9f.JSObjectAbs);
        (function(locationAbs$){
            locationAbs$.assignURL=function assignURL($as){
                var locationAbs$=this;
                var $at=$as;
                if(m$1.is$($as,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    locationAbs$.$_native.assign($at.valueOf());
                    /*End dynamic block*/
                }else if(m$1.is$($as,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    locationAbs$.$_native.assign($at.$_native);
                    /*End dynamic block*/
                }
            };locationAbs$.assignURL.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'url',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:LocationAbs,$an:function(){return[m$1.doc("loads the resource at the url given"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','LocationAbs','$m','assignURL']};};
            locationAbs$.reload$defs$forcedReload=function($au){return false;};
            locationAbs$.reload=function reload($au){
                var locationAbs$=this;
                if($au===undefined){$au=locationAbs$.reload$defs$forcedReload($au);}
                /*Begin dynamic block*/
                locationAbs$.$_native.reload($au);
                /*End dynamic block*/
            };locationAbs$.reload.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'forcedReload',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:LocationAbs,$an:function(){return[m$1.doc("reload the current page"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','LocationAbs','$m','reload']};};
            locationAbs$.replace=function replace($av){
                var locationAbs$=this;
                var $aw=$av;
                if(m$1.is$($av,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    locationAbs$.$_native.replace($aw.valueOf());
                    /*End dynamic block*/
                }else if(m$1.is$($av,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    locationAbs$.$_native.replace($aw.$_native);
                    /*End dynamic block*/
                }
            };locationAbs$.replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'url',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:LocationAbs,$an:function(){return[m$1.doc("replace the current page with the new location"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','LocationAbs','$m','replace']};};
        })(LocationAbs.$$.prototype);
    }
    return LocationAbs;
}
ex$.$init$LocationAbs=$init$LocationAbs;
$init$LocationAbs();
function Location($ax,location$){
    $init$Location();
    if(location$===undefined)location$=new Location.$$;
    location$.$ax_=$ax;
    LocationAbs(location$);
    location$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Location,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.html','Location','$at','native']};}};
    /*Begin dynamic block*/
    location$.$_native=location$.$ax;/*End dynamic block*/
    return location$;
}
Location.$crtmm$=function(){return{mod:$CCMM$,'super':{t:LocationAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("Location"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','Location']};};
ex$.Location=Location;
function $init$Location(){
    if(Location.$$===undefined){
        m$1.initTypeProto(Location,'com.openswimsoftware.ceylon.js.html::Location',$init$LocationAbs());
        (function(location$){
            m$1.atr$(location$,'$ax',function(){return this.$ax_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Location,d:['com.openswimsoftware.ceylon.js.html','Location','$at','n$dfapb6']};});
        })(Location.$$.prototype);
    }
    return Location;
}
ex$.$init$Location=$init$Location;
$init$Location();
ex$.$mod$ans$=function(){return[m$1.doc("based on the HTML5 working draft")];};
ex$.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.language/1.8.0':[],
'com.openswimsoftware.ceylon.js.dom/4.0.0':function(){return[m$1.shared()];}
};};
ex$.$pkg$ans$com$openswimsoftware$ceylon$js$html=function(){return[m$1.shared()];};
function WindowAbs(windowAbs$){
    $init$WindowAbs();
    if(windowAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(windowAbs$);
    return windowAbs$;
}
WindowAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.html','WindowAbs']};};
ex$.WindowAbs=WindowAbs;
function $init$WindowAbs(){
    if(WindowAbs.$$===undefined){
        m$1.initTypeProto(WindowAbs,'com.openswimsoftware.ceylon.js.html::WindowAbs',m$9f.JSObjectAbs);
    }
    return WindowAbs;
}
ex$.$init$WindowAbs=$init$WindowAbs;
$init$WindowAbs();
function Window($ay,window$){
    $init$Window();
    if(window$===undefined)window$=new Window.$$;
    window$.$ay_=$ay;
    WindowAbs(window$);
    window$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Window,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.html','Window','$at','native']};}};
    /*Begin dynamic block*/
    window$.$_native=window$.$ay;/*End dynamic block*/
    return window$;
}
Window.$crtmm$=function(){return{mod:$CCMM$,'super':{t:WindowAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("the browser window"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.html','Window']};};
ex$.Window=Window;
function $init$Window(){
    if(Window.$$===undefined){
        m$1.initTypeProto(Window,'com.openswimsoftware.ceylon.js.html::Window',$init$WindowAbs());
        (function(window$){
            m$1.atr$(window$,'$ay',function(){return this.$ay_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Window,d:['com.openswimsoftware.ceylon.js.html','Window','$at','n$li437z']};});
        })(Window.$$.prototype);
    }
    return Window;
}
ex$.$init$Window=$init$Window;
$init$Window();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
