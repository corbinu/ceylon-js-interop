(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1","ceylon.js.language\/1.8.0","ceylon.js.dom\/4.0.0"],"$mod-name":"ceylon.js.html","$mod-version":"5.0.0","ceylon.js.html":{"WindowAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"WindowAbs"},"$pkg-shared":"1","HTMLFormElementAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"submit":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"submit"},"setAcceptCharset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"acceptCharset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAcceptCharset"},"getEncoding":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getEncoding"},"setEnctype":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"enctype"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEnctype"},"getTarget":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTarget"},"getMethod":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMethod"},"getAcceptCharset":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAcceptCharset"},"checkValidity":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"checkValidity"},"setAutocomplete":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"autocomplete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAutocomplete"},"getAutocomplete":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAutocomplete"},"getAction":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAction"},"setEncoding":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"encoding"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEncoding"},"setTarget":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTarget"},"getEnctype":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getEnctype"},"setNoValidate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"noValidate"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setNoValidate"},"getName":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getName"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"reset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"reset"},"setMethod":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"method"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMethod"},"setName":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setName"},"setAction":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"action"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAction"},"getNoValidate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getNoValidate"}},"$nm":"HTMLFormElementAbs"},"LocationAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"replace":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"url"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replace"},"assignURL":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"url"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"assignURL"},"reload":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"forcedReload"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"reload"}},"$nm":"LocationAbs"},"Location":{"super":{"$pk":"ceylon.js.html","$nm":"LocationAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Location"},"HTMLFormElement":{"super":{"$pk":"ceylon.js.html","$nm":"HTMLFormElementAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"HTMLFormElement"},"Window":{"super":{"$pk":"ceylon.js.html","$nm":"WindowAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Window"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6.1');
var $$$cjl359=require('ceylon/js/language/1.8.0/ceylon.js.language-1.8.0');
$$$cl1.$addmod$($$$cjl359,'ceylon.js.language/1.8.0');
function HTMLFormElementAbs($$hTMLFormElementAbs){
    $init$HTMLFormElementAbs();
    if ($$hTMLFormElementAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl359.JSObjectAbs($$hTMLFormElementAbs);
    function getAcceptCharset(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$hTMLFormElementAbs.$native.acceptCharset);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.getAcceptCharset=getAcceptCharset;
    getAcceptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getAcceptCharset']};};
    function setAcceptCharset(acceptCharset$390){
        
        var case$391=acceptCharset$390;
        if ($$$cl1.isOfType(acceptCharset$390,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.acceptCharset=case$391.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(acceptCharset$390,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.acceptCharset=case$391.$native;
            /*End dynamic block*/
        }
    }
    $$hTMLFormElementAbs.setAcceptCharset=setAcceptCharset;
    setAcceptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'acceptCharset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setAcceptCharset']};};
    function getAction(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$hTMLFormElementAbs.$native.action);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.getAction=getAction;
    getAction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getAction']};};
    function setAction(action$392){
        
        var case$393=action$392;
        if ($$$cl1.isOfType(action$392,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.action=case$393.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(action$392,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.action=case$393.$native;
            /*End dynamic block*/
        }
    }
    $$hTMLFormElementAbs.setAction=setAction;
    setAction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'action',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setAction']};};
    function getAutocomplete(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$hTMLFormElementAbs.$native.autocomplete);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.getAutocomplete=getAutocomplete;
    getAutocomplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getAutocomplete']};};
    function setAutocomplete(autocomplete$394){
        
        var case$395=autocomplete$394;
        if ($$$cl1.isOfType(autocomplete$394,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.autocomplete=case$395.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(autocomplete$394,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.autocomplete=case$395.$native;
            /*End dynamic block*/
        }
    }
    $$hTMLFormElementAbs.setAutocomplete=setAutocomplete;
    setAutocomplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'autocomplete',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setAutocomplete']};};
    function getEnctype(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$hTMLFormElementAbs.$native.enctype);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.getEnctype=getEnctype;
    getEnctype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getEnctype']};};
    function setEnctype(enctype$396){
        
        var case$397=enctype$396;
        if ($$$cl1.isOfType(enctype$396,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.enctype=case$397.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(enctype$396,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.enctype=case$397.$native;
            /*End dynamic block*/
        }
    }
    $$hTMLFormElementAbs.setEnctype=setEnctype;
    setEnctype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'enctype',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setEnctype']};};
    function getEncoding(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$hTMLFormElementAbs.$native.encoding);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.getEncoding=getEncoding;
    getEncoding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getEncoding']};};
    function setEncoding(encoding$398){
        
        var case$399=encoding$398;
        if ($$$cl1.isOfType(encoding$398,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.encoding=case$399.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(encoding$398,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.encoding=case$399.$native;
            /*End dynamic block*/
        }
    }
    $$hTMLFormElementAbs.setEncoding=setEncoding;
    setEncoding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'encoding',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setEncoding']};};
    function getMethod(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$hTMLFormElementAbs.$native.method);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.getMethod=getMethod;
    getMethod.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getMethod']};};
    function setMethod(method$400){
        
        var case$401=method$400;
        if ($$$cl1.isOfType(method$400,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.method=case$401.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(method$400,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.method=case$401.$native;
            /*End dynamic block*/
        }
    }
    $$hTMLFormElementAbs.setMethod=setMethod;
    setMethod.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'method',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setMethod']};};
    function getName(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$hTMLFormElementAbs.$native.name);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.getName=getName;
    getName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getName']};};
    function setName(name$402){
        
        var case$403=name$402;
        if ($$$cl1.isOfType(name$402,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.name=case$403.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(name$402,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.name=case$403.$native;
            /*End dynamic block*/
        }
    }
    $$hTMLFormElementAbs.setName=setName;
    setName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setName']};};
    function getNoValidate(){
        /*Begin dynamic block*/
        if($$hTMLFormElementAbs.$native.noValidate){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$hTMLFormElementAbs.getNoValidate=getNoValidate;
    getNoValidate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getNoValidate']};};
    function setNoValidate(noValidate$404){
        /*Begin dynamic block*/
        $$hTMLFormElementAbs.$native.noValidate=noValidate$404;
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.setNoValidate=setNoValidate;
    setNoValidate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'noValidate',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setNoValidate']};};
    function getTarget(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$hTMLFormElementAbs.$native.target);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.getTarget=getTarget;
    getTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getTarget']};};
    function setTarget(target$405){
        
        var case$406=target$405;
        if ($$$cl1.isOfType(target$405,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.target=case$406.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$405,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.target=case$406.$native;
            /*End dynamic block*/
        }
    }
    $$hTMLFormElementAbs.setTarget=setTarget;
    setTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setTarget']};};
    function length(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$hTMLFormElementAbs.$native.length);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','length']};};
    function checkValidity(){
        /*Begin dynamic block*/
        if($$hTMLFormElementAbs.$native.checkValidity()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$hTMLFormElementAbs.checkValidity=checkValidity;
    checkValidity.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','checkValidity']};};
    function submit(){
        /*Begin dynamic block*/
        $$hTMLFormElementAbs.$native.submit();
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.submit=submit;
    submit.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','submit']};};
    function reset(){
        /*Begin dynamic block*/
        $$hTMLFormElementAbs.$native.reset();
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.reset=reset;
    reset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','reset']};};
    return $$hTMLFormElementAbs;
}
HTMLFormElementAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.html','HTMLFormElementAbs']};};
exports.HTMLFormElementAbs=HTMLFormElementAbs;
function $init$HTMLFormElementAbs(){
    if (HTMLFormElementAbs.$$===undefined){
        $$$cl1.initTypeProto(HTMLFormElementAbs,'ceylon.js.html::HTMLFormElementAbs',$$$cjl359.JSObjectAbs);
    }
    return HTMLFormElementAbs;
}
exports.$init$HTMLFormElementAbs=$init$HTMLFormElementAbs;
$init$HTMLFormElementAbs();
function HTMLFormElement(n$407, $$hTMLFormElement){
    $init$HTMLFormElement();
    if ($$hTMLFormElement===undefined)$$hTMLFormElement=new HTMLFormElement.$$;
    $$hTMLFormElement.n$407_=n$407;
    HTMLFormElementAbs($$hTMLFormElement);
    $$$cl1.defineAttr($$hTMLFormElement,'n$407',function(){return this.n$407_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:HTMLFormElement,d:['ceylon.js.html','HTMLFormElement','$at','n']};});
    $$hTMLFormElement.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:HTMLFormElement,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.html','HTMLFormElement','$at','native']};}};
    /*Begin dynamic block*/
    $$hTMLFormElement.$native=n$407;/*End dynamic block*/
    return $$hTMLFormElement;
}
HTMLFormElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:HTMLFormElementAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElement']};};
exports.HTMLFormElement=HTMLFormElement;
function $init$HTMLFormElement(){
    if (HTMLFormElement.$$===undefined){
        $$$cl1.initTypeProto(HTMLFormElement,'ceylon.js.html::HTMLFormElement',$init$HTMLFormElementAbs());
    }
    return HTMLFormElement;
}
exports.$init$HTMLFormElement=$init$HTMLFormElement;
$init$HTMLFormElement();
function LocationAbs($$locationAbs){
    $init$LocationAbs();
    if ($$locationAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl359.JSObjectAbs($$locationAbs);
    function assignURL(url$408){
        
        var case$409=url$408;
        if ($$$cl1.isOfType(url$408,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$locationAbs.$native.assign(/*NULL PARAM!*/case$409.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(url$408,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$locationAbs.$native.assign(/*NULL PARAM!*/case$409.$native);
            /*End dynamic block*/
        }
    }
    $$locationAbs.assignURL=assignURL;
    assignURL.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'url',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:LocationAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','LocationAbs','$m','assignURL']};};
    $$locationAbs.reload$defs$forcedReload=function(forcedReload$410){return false;};
    function reload(forcedReload$410){
        if(forcedReload$410===undefined){forcedReload$410=$$locationAbs.reload$defs$forcedReload(forcedReload$410);}
        /*Begin dynamic block*/
        $$locationAbs.$native.reload(/*NULL PARAM!*/forcedReload$410);
        /*End dynamic block*/
    }
    $$locationAbs.reload=reload;
    reload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'forcedReload',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:LocationAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','LocationAbs','$m','reload']};};
    function replace(url$411){
        
        var case$412=url$411;
        if ($$$cl1.isOfType(url$411,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$locationAbs.$native.replace(/*NULL PARAM!*/case$412.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(url$411,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$locationAbs.$native.replace(/*NULL PARAM!*/case$412.$native);
            /*End dynamic block*/
        }
    }
    $$locationAbs.replace=replace;
    replace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'url',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:LocationAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','LocationAbs','$m','replace']};};
    return $$locationAbs;
}
LocationAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.html','LocationAbs']};};
exports.LocationAbs=LocationAbs;
function $init$LocationAbs(){
    if (LocationAbs.$$===undefined){
        $$$cl1.initTypeProto(LocationAbs,'ceylon.js.html::LocationAbs',$$$cjl359.JSObjectAbs);
    }
    return LocationAbs;
}
exports.$init$LocationAbs=$init$LocationAbs;
$init$LocationAbs();
function Location(n$413, $$location){
    $init$Location();
    if ($$location===undefined)$$location=new Location.$$;
    $$location.n$413_=n$413;
    LocationAbs($$location);
    $$$cl1.defineAttr($$location,'n$413',function(){return this.n$413_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Location,d:['ceylon.js.html','Location','$at','n']};});
    $$location.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Location,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.html','Location','$at','native']};}};
    /*Begin dynamic block*/
    $$location.$native=n$413;/*End dynamic block*/
    return $$location;
}
Location.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:LocationAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','Location']};};
exports.Location=Location;
function $init$Location(){
    if (Location.$$===undefined){
        $$$cl1.initTypeProto(Location,'ceylon.js.html::Location',$init$LocationAbs());
    }
    return Location;
}
exports.$init$Location=$init$Location;
$init$Location();
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("based on the HTML5 working draft",32))];};
exports.$pkg$ans$ceylon$js$html=function(){return[$$$cl1.shared()];};
function WindowAbs($$windowAbs){
    $init$WindowAbs();
    if ($$windowAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl359.JSObjectAbs($$windowAbs);
    return $$windowAbs;
}
WindowAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.html','WindowAbs']};};
exports.WindowAbs=WindowAbs;
function $init$WindowAbs(){
    if (WindowAbs.$$===undefined){
        $$$cl1.initTypeProto(WindowAbs,'ceylon.js.html::WindowAbs',$$$cjl359.JSObjectAbs);
    }
    return WindowAbs;
}
exports.$init$WindowAbs=$init$WindowAbs;
$init$WindowAbs();
function Window(n$414, $$window){
    $init$Window();
    if ($$window===undefined)$$window=new Window.$$;
    $$window.n$414_=n$414;
    WindowAbs($$window);
    $$$cl1.defineAttr($$window,'n$414',function(){return this.n$414_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Window,d:['ceylon.js.html','Window','$at','n']};});
    $$window.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Window,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.html','Window','$at','native']};}};
    /*Begin dynamic block*/
    $$window.$native=n$414;/*End dynamic block*/
    return $$window;
}
Window.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:WindowAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','Window']};};
exports.Window=Window;
function $init$Window(){
    if (Window.$$===undefined){
        $$$cl1.initTypeProto(Window,'ceylon.js.html::Window',$init$WindowAbs());
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
