(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/1.0.0","com.openswimsoftware.ceylon.js.language\/1.8.0","com.openswimsoftware.ceylon.js.dom\/4.0.0"],"$mod-name":"com.openswimsoftware.ceylon.js.html","$mod-version":"5.0.0","$mod-bin":"6.0","com.openswimsoftware.ceylon.js.html":{"WindowAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"WindowAbs"},"$pkg-shared":"1","HTMLFormElementAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"submit":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["submit the form"]},"$nm":"submit"},"setAcceptCharset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"acceptCharset"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set accept charset attribute"]},"$nm":"setAcceptCharset"},"getEncoding":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the encoding attribute"]},"$nm":"getEncoding"},"setEnctype":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"enctype"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the encoding attribute"]},"$nm":"setEnctype"},"getTarget":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the name of the target attribute"]},"$nm":"getTarget"},"getMethod":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["get the method attribute"]},"$nm":"getMethod"},"getAcceptCharset":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["get accept charset attribute"]},"$nm":"getAcceptCharset"},"checkValidity":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["check if the form is current valid"]},"$nm":"checkValidity"},"setAutocomplete":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"autocomplete"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set autocomplete attribute"]},"$nm":"setAutocomplete"},"getAutocomplete":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns autocomplete attribute"]},"$nm":"getAutocomplete"},"getAction":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns action attribute"]},"$nm":"getAction"},"setEncoding":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"encoding"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the encoding attribute"]},"$nm":"setEncoding"},"setTarget":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the name of the target attribute"]},"$nm":"setTarget"},"getEnctype":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["get the encoding attribute"]},"$nm":"getEnctype"},"setNoValidate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"noValidate"}]],"$mt":"mthd","$an":{"shared":[],"doc":["disable validation"]},"$nm":"setNoValidate"},"getName":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the name attribute"]},"$nm":"getName"},"length":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["number of controls in the form"]},"$nm":"length"},"reset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["reset the form"]},"$nm":"reset"},"setMethod":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"method"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the method attribute"]},"$nm":"setMethod"},"setName":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the name attribute"]},"$nm":"setName"},"setAction":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"action"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set action attribute"]},"$nm":"setAction"},"getNoValidate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["is validation enabled"]},"$nm":"getNoValidate"}},"$nm":"HTMLFormElementAbs"},"LocationAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"replace":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"url"}]],"$mt":"mthd","$an":{"shared":[],"doc":["replace the current page with the new location"]},"$nm":"replace"},"assignURL":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"url"}]],"$mt":"mthd","$an":{"shared":[],"doc":["loads the resource at the url given"]},"$nm":"assignURL"},"reload":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"forcedReload"}]],"$mt":"mthd","$an":{"shared":[],"doc":["reload the current page"]},"$nm":"reload"}},"$nm":"LocationAbs"},"Location":{"super":{"$pk":"com.openswimsoftware.ceylon.js.html","$nm":"LocationAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["Location"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.html","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.html","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Location"},"HTMLFormElement":{"super":{"$pk":"com.openswimsoftware.ceylon.js.html","$nm":"HTMLFormElementAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["HTML Form Element"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.html","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.html","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"HTMLFormElement"},"Window":{"super":{"$pk":"com.openswimsoftware.ceylon.js.html","$nm":"WindowAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["the browser window"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.html","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.html","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Window"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl1.$addmod$($$$cl1,'ceylon.language/1.0.0');
var $$$cocjl339=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
$$$cl1.$addmod$($$$cocjl339,'com.openswimsoftware.ceylon.js.language/1.8.0');
function HTMLFormElementAbs($$hTMLFormElementAbs){
    $init$HTMLFormElementAbs();
    if ($$hTMLFormElementAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$hTMLFormElementAbs);
    return $$hTMLFormElementAbs;
}
HTMLFormElementAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs']};};
exports.HTMLFormElementAbs=HTMLFormElementAbs;
function $init$HTMLFormElementAbs(){
    if (HTMLFormElementAbs.$$===undefined){
        $$$cl1.initTypeProto(HTMLFormElementAbs,'com.openswimsoftware.ceylon.js.html::HTMLFormElementAbs',$$$cocjl339.JSObjectAbs);
        (function($$hTMLFormElementAbs){
            $$hTMLFormElementAbs.getAcceptCharset=function getAcceptCharset(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$hTMLFormElementAbs.$native.acceptCharset);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.getAcceptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("get accept charset attribute",28)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getAcceptCharset']};};
            $$hTMLFormElementAbs.setAcceptCharset=function setAcceptCharset(acceptCharset$370){
                var $$hTMLFormElementAbs=this;
                
                var case$371=acceptCharset$370;
                if ($$$cl1.isOfType(acceptCharset$370,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.acceptCharset=case$371.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(acceptCharset$370,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.acceptCharset=case$371.$native;
                    /*End dynamic block*/
                }
            };$$hTMLFormElementAbs.setAcceptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'acceptCharset',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set accept charset attribute",28)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setAcceptCharset']};};
            $$hTMLFormElementAbs.getAction=function getAction(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$hTMLFormElementAbs.$native.action);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.getAction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns action attribute",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getAction']};};
            $$hTMLFormElementAbs.setAction=function setAction(action$372){
                var $$hTMLFormElementAbs=this;
                
                var case$373=action$372;
                if ($$$cl1.isOfType(action$372,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.action=case$373.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(action$372,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.action=case$373.$native;
                    /*End dynamic block*/
                }
            };$$hTMLFormElementAbs.setAction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'action',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set action attribute",20)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setAction']};};
            $$hTMLFormElementAbs.getAutocomplete=function getAutocomplete(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$hTMLFormElementAbs.$native.autocomplete);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.getAutocomplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns autocomplete attribute",30)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getAutocomplete']};};
            $$hTMLFormElementAbs.setAutocomplete=function setAutocomplete(autocomplete$374){
                var $$hTMLFormElementAbs=this;
                
                var case$375=autocomplete$374;
                if ($$$cl1.isOfType(autocomplete$374,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.autocomplete=case$375.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(autocomplete$374,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.autocomplete=case$375.$native;
                    /*End dynamic block*/
                }
            };$$hTMLFormElementAbs.setAutocomplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'autocomplete',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set autocomplete attribute",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setAutocomplete']};};
            $$hTMLFormElementAbs.getEnctype=function getEnctype(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$hTMLFormElementAbs.$native.enctype);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.getEnctype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("get the encoding attribute",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getEnctype']};};
            $$hTMLFormElementAbs.setEnctype=function setEnctype(enctype$376){
                var $$hTMLFormElementAbs=this;
                
                var case$377=enctype$376;
                if ($$$cl1.isOfType(enctype$376,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.enctype=case$377.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(enctype$376,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.enctype=case$377.$native;
                    /*End dynamic block*/
                }
            };$$hTMLFormElementAbs.setEnctype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'enctype',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the encoding attribute",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setEnctype']};};
            $$hTMLFormElementAbs.getEncoding=function getEncoding(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$hTMLFormElementAbs.$native.encoding);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.getEncoding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the encoding attribute",30)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getEncoding']};};
            $$hTMLFormElementAbs.setEncoding=function setEncoding(encoding$378){
                var $$hTMLFormElementAbs=this;
                
                var case$379=encoding$378;
                if ($$$cl1.isOfType(encoding$378,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.encoding=case$379.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(encoding$378,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.encoding=case$379.$native;
                    /*End dynamic block*/
                }
            };$$hTMLFormElementAbs.setEncoding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'encoding',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the encoding attribute",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setEncoding']};};
            $$hTMLFormElementAbs.getMethod=function getMethod(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$hTMLFormElementAbs.$native.method);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.getMethod.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("get the method attribute",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getMethod']};};
            $$hTMLFormElementAbs.setMethod=function setMethod(method$380){
                var $$hTMLFormElementAbs=this;
                
                var case$381=method$380;
                if ($$$cl1.isOfType(method$380,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.method=case$381.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(method$380,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.method=case$381.$native;
                    /*End dynamic block*/
                }
            };$$hTMLFormElementAbs.setMethod.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'method',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the method attribute",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setMethod']};};
            $$hTMLFormElementAbs.getName=function getName(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$hTMLFormElementAbs.$native.name);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.getName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the name attribute",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getName']};};
            $$hTMLFormElementAbs.setName=function setName(name$382){
                var $$hTMLFormElementAbs=this;
                
                var case$383=name$382;
                if ($$$cl1.isOfType(name$382,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.name=case$383.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(name$382,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.name=case$383.$native;
                    /*End dynamic block*/
                }
            };$$hTMLFormElementAbs.setName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the name attribute",22)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setName']};};
            $$hTMLFormElementAbs.getNoValidate=function getNoValidate(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                if($$hTMLFormElementAbs.$native.noValidate){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$hTMLFormElementAbs.getNoValidate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("is validation enabled",21)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getNoValidate']};};
            $$hTMLFormElementAbs.setNoValidate=function setNoValidate(noValidate$384){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                $$hTMLFormElementAbs.$native.noValidate=noValidate$384;
                /*End dynamic block*/
            };$$hTMLFormElementAbs.setNoValidate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'noValidate',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("disable validation",18)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setNoValidate']};};
            $$hTMLFormElementAbs.getTarget=function getTarget(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$hTMLFormElementAbs.$native.target);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.getTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the name of the target attribute",40)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','getTarget']};};
            $$hTMLFormElementAbs.setTarget=function setTarget(target$385){
                var $$hTMLFormElementAbs=this;
                
                var case$386=target$385;
                if ($$$cl1.isOfType(target$385,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.target=case$386.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(target$385,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.target=case$386.$native;
                    /*End dynamic block*/
                }
            };$$hTMLFormElementAbs.setTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'target',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the name of the target attribute",36)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','setTarget']};};
            $$hTMLFormElementAbs.length=function length(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$hTMLFormElementAbs.$native.length);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("number of controls in the form",30)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','length']};};
            $$hTMLFormElementAbs.checkValidity=function checkValidity(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                if($$hTMLFormElementAbs.$native.checkValidity()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$hTMLFormElementAbs.checkValidity.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("check if the form is current valid",34)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','checkValidity']};};
            $$hTMLFormElementAbs.submit=function submit(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                $$hTMLFormElementAbs.$native.submit();
                /*End dynamic block*/
            };$$hTMLFormElementAbs.submit.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("submit the form",15)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','submit']};};
            $$hTMLFormElementAbs.reset=function reset(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                $$hTMLFormElementAbs.$native.reset();
                /*End dynamic block*/
            };$$hTMLFormElementAbs.reset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("reset the form",14)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElementAbs','$m','reset']};};
        })(HTMLFormElementAbs.$$.prototype);
    }
    return HTMLFormElementAbs;
}
exports.$init$HTMLFormElementAbs=$init$HTMLFormElementAbs;
$init$HTMLFormElementAbs();
function HTMLFormElement(n$387, $$hTMLFormElement){
    $init$HTMLFormElement();
    if ($$hTMLFormElement===undefined)$$hTMLFormElement=new HTMLFormElement.$$;
    $$hTMLFormElement.n$387_=n$387;
    HTMLFormElementAbs($$hTMLFormElement);
    $$hTMLFormElement.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:HTMLFormElement,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElement','$at','native']};}};
    /*Begin dynamic block*/
    $$hTMLFormElement.$native=$$hTMLFormElement.n$387;/*End dynamic block*/
    return $$hTMLFormElement;
}
HTMLFormElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:HTMLFormElementAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("HTML Form Element",17)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','HTMLFormElement']};};
exports.HTMLFormElement=HTMLFormElement;
function $init$HTMLFormElement(){
    if (HTMLFormElement.$$===undefined){
        $$$cl1.initTypeProto(HTMLFormElement,'com.openswimsoftware.ceylon.js.html::HTMLFormElement',$init$HTMLFormElementAbs());
        (function($$hTMLFormElement){
            $$$cl1.defineAttr($$hTMLFormElement,'n$387',function(){return this.n$387_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:HTMLFormElement,d:['com.openswimsoftware.ceylon.js.html','HTMLFormElement','$at','n']};});
        })(HTMLFormElement.$$.prototype);
    }
    return HTMLFormElement;
}
exports.$init$HTMLFormElement=$init$HTMLFormElement;
$init$HTMLFormElement();
function LocationAbs($$locationAbs){
    $init$LocationAbs();
    if ($$locationAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$locationAbs);
    return $$locationAbs;
}
LocationAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.html','LocationAbs']};};
exports.LocationAbs=LocationAbs;
function $init$LocationAbs(){
    if (LocationAbs.$$===undefined){
        $$$cl1.initTypeProto(LocationAbs,'com.openswimsoftware.ceylon.js.html::LocationAbs',$$$cocjl339.JSObjectAbs);
        (function($$locationAbs){
            $$locationAbs.assignURL=function assignURL(url$388){
                var $$locationAbs=this;
                
                var case$389=url$388;
                if ($$$cl1.isOfType(url$388,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$locationAbs.$native.assign(case$389.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(url$388,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$locationAbs.$native.assign(case$389.$native);
                    /*End dynamic block*/
                }
            };$$locationAbs.assignURL.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'url',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:LocationAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("loads the resource at the url given",35)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','LocationAbs','$m','assignURL']};};
            $$locationAbs.reload$defs$forcedReload=function(forcedReload$390){var $$locationAbs=this;
            return false;};
            $$locationAbs.reload=function reload(forcedReload$390){
                var $$locationAbs=this;
                if(forcedReload$390===undefined){forcedReload$390=$$locationAbs.reload$defs$forcedReload(forcedReload$390);}
                /*Begin dynamic block*/
                $$locationAbs.$native.reload(forcedReload$390);
                /*End dynamic block*/
            };$$locationAbs.reload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'forcedReload',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:LocationAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("reload the current page",23)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','LocationAbs','$m','reload']};};
            $$locationAbs.replace=function replace(url$391){
                var $$locationAbs=this;
                
                var case$392=url$391;
                if ($$$cl1.isOfType(url$391,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$locationAbs.$native.replace(case$392.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(url$391,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$locationAbs.$native.replace(case$392.$native);
                    /*End dynamic block*/
                }
            };$$locationAbs.replace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'url',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:LocationAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("replace the current page with the new location",46)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','LocationAbs','$m','replace']};};
        })(LocationAbs.$$.prototype);
    }
    return LocationAbs;
}
exports.$init$LocationAbs=$init$LocationAbs;
$init$LocationAbs();
function Location(n$393, $$location){
    $init$Location();
    if ($$location===undefined)$$location=new Location.$$;
    $$location.n$393_=n$393;
    LocationAbs($$location);
    $$location.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Location,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.html','Location','$at','native']};}};
    /*Begin dynamic block*/
    $$location.$native=$$location.n$393;/*End dynamic block*/
    return $$location;
}
Location.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:LocationAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Location",8)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','Location']};};
exports.Location=Location;
function $init$Location(){
    if (Location.$$===undefined){
        $$$cl1.initTypeProto(Location,'com.openswimsoftware.ceylon.js.html::Location',$init$LocationAbs());
        (function($$location){
            $$$cl1.defineAttr($$location,'n$393',function(){return this.n$393_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Location,d:['com.openswimsoftware.ceylon.js.html','Location','$at','n']};});
        })(Location.$$.prototype);
    }
    return Location;
}
exports.$init$Location=$init$Location;
$init$Location();
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("based on the HTML5 working draft",32))];};
exports.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.language/1.8.0':[],
'com.openswimsoftware.ceylon.js.dom/4.0.0':function(){return[$$$cl1.shared()];}
};};
exports.$pkg$ans$com$openswimsoftware$ceylon$js$html=function(){return[$$$cl1.shared()];};
function WindowAbs($$windowAbs){
    $init$WindowAbs();
    if ($$windowAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$windowAbs);
    return $$windowAbs;
}
WindowAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.html','WindowAbs']};};
exports.WindowAbs=WindowAbs;
function $init$WindowAbs(){
    if (WindowAbs.$$===undefined){
        $$$cl1.initTypeProto(WindowAbs,'com.openswimsoftware.ceylon.js.html::WindowAbs',$$$cocjl339.JSObjectAbs);
    }
    return WindowAbs;
}
exports.$init$WindowAbs=$init$WindowAbs;
$init$WindowAbs();
function Window(n$394, $$window){
    $init$Window();
    if ($$window===undefined)$$window=new Window.$$;
    $$window.n$394_=n$394;
    WindowAbs($$window);
    $$window.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Window,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.html','Window','$at','native']};}};
    /*Begin dynamic block*/
    $$window.$native=$$window.n$394;/*End dynamic block*/
    return $$window;
}
Window.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:WindowAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("the browser window",18)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.html','Window']};};
exports.Window=Window;
function $init$Window(){
    if (Window.$$===undefined){
        $$$cl1.initTypeProto(Window,'com.openswimsoftware.ceylon.js.html::Window',$init$WindowAbs());
        (function($$window){
            $$$cl1.defineAttr($$window,'n$394',function(){return this.n$394_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Window,d:['com.openswimsoftware.ceylon.js.html','Window','$at','n']};});
        })(Window.$$.prototype);
    }
    return Window;
}
exports.$init$Window=$init$Window;
$init$Window();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
