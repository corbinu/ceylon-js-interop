(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.js.language\/1.8.5","ceylon.js.dom\/4.0.0","ceylon.language\/0.6.1"],"$mod-name":"ceylon.js.html","$mod-version":"5.0.0","ceylon.js.html":{"WindowAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"WindowAbs"},"$pkg-shared":"1","HTMLFormElementAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"submit":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"submit"},"setAcceptCharset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"acceptCharset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAcceptCharset"},"getEncoding":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getEncoding"},"setEnctype":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"enctype"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEnctype"},"getTarget":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTarget"},"getMethod":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMethod"},"getAcceptCharset":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAcceptCharset"},"checkValidity":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"checkValidity"},"setAutocomplete":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"autocomplete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAutocomplete"},"getAutocomplete":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAutocomplete"},"getAction":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAction"},"setEncoding":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"encoding"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEncoding"},"setTarget":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTarget"},"getEnctype":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getEnctype"},"setNoValidate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"noValidate"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setNoValidate"},"getName":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getName"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"reset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"reset"},"setMethod":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"method"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMethod"},"setName":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setName"},"setAction":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"action"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAction"},"getNoValidate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getNoValidate"}},"$nm":"HTMLFormElementAbs"},"LocationAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"replace":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"url"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replace"},"assignURL":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"url"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"assignURL"},"reload":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"forcedReload"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"reload"}},"$nm":"LocationAbs"},"Location":{"super":{"$pk":"ceylon.js.html","$nm":"LocationAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Location"},"HTMLFormElement":{"super":{"$pk":"ceylon.js.html","$nm":"HTMLFormElementAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"HTMLFormElement"},"Window":{"super":{"$pk":"ceylon.js.html","$nm":"WindowAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Window"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl32209=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl32209.$addmod$($$$cl32209,'ceylon.language/0.6.1');
exports.$pkg$ans$ceylon$js$html=function(){return[$$$cl32209.shared()];};
exports.$mod$ans$=function(){return[$$$cl32209.doc($$$cl32209.String("based on the HTML5 working draft",32))];};
var $$$cjl32280=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl32209.$addmod$($$$cjl32280,'ceylon.js.language/1.8.5');

//ClassDefinition HTMLFormElementAbs at htmlformelement.ceylon (3:0-221:0)
function HTMLFormElementAbs($$hTMLFormElementAbs){
    $init$HTMLFormElementAbs();
    if ($$hTMLFormElementAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$hTMLFormElementAbs);
    return $$hTMLFormElementAbs;
}
HTMLFormElementAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.html','HTMLFormElementAbs']};};
exports.HTMLFormElementAbs=HTMLFormElementAbs;
function $init$HTMLFormElementAbs(){
    if (HTMLFormElementAbs.$$===undefined){
        $$$cl32209.initTypeProto(HTMLFormElementAbs,'ceylon.js.html::HTMLFormElementAbs',$$$cjl32280.JSObjectAbs);
        (function($$hTMLFormElementAbs){
            
            //MethodDefinition getAcceptCharset at htmlformelement.ceylon (5:1-9:1)
            $$hTMLFormElementAbs.getAcceptCharset=function getAcceptCharset(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$hTMLFormElementAbs.$native.acceptCharset);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.getAcceptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getAcceptCharset']};};
            
            //MethodDefinition setAcceptCharset at htmlformelement.ceylon (11:1-24:1)
            $$hTMLFormElementAbs.setAcceptCharset=function setAcceptCharset(acceptCharset$32578){
                var $$hTMLFormElementAbs=this;
                //Switch statement at htmlformelement.ceylon (12:2-22:2)
                var case$32579=acceptCharset$32578;
                if ($$$cl32209.isOfType(acceptCharset$32578,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.acceptCharset=case$32579.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(acceptCharset$32578,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.acceptCharset=case$32579.$native;
                    /*End dynamic block*/
                }//End switch statement at htmlformelement.ceylon (12:2-22:2)
            };$$hTMLFormElementAbs.setAcceptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'acceptCharset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setAcceptCharset']};};
            
            //MethodDefinition getAction at htmlformelement.ceylon (26:1-30:1)
            $$hTMLFormElementAbs.getAction=function getAction(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$hTMLFormElementAbs.$native.action);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.getAction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getAction']};};
            
            //MethodDefinition setAction at htmlformelement.ceylon (32:1-45:1)
            $$hTMLFormElementAbs.setAction=function setAction(action$32580){
                var $$hTMLFormElementAbs=this;
                //Switch statement at htmlformelement.ceylon (33:2-43:2)
                var case$32581=action$32580;
                if ($$$cl32209.isOfType(action$32580,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.action=case$32581.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(action$32580,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.action=case$32581.$native;
                    /*End dynamic block*/
                }//End switch statement at htmlformelement.ceylon (33:2-43:2)
            };$$hTMLFormElementAbs.setAction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'action',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setAction']};};
            
            //MethodDefinition getAutocomplete at htmlformelement.ceylon (47:1-51:1)
            $$hTMLFormElementAbs.getAutocomplete=function getAutocomplete(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$hTMLFormElementAbs.$native.autocomplete);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.getAutocomplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getAutocomplete']};};
            
            //MethodDefinition setAutocomplete at htmlformelement.ceylon (53:1-66:1)
            $$hTMLFormElementAbs.setAutocomplete=function setAutocomplete(autocomplete$32582){
                var $$hTMLFormElementAbs=this;
                //Switch statement at htmlformelement.ceylon (54:2-64:2)
                var case$32583=autocomplete$32582;
                if ($$$cl32209.isOfType(autocomplete$32582,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.autocomplete=case$32583.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(autocomplete$32582,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.autocomplete=case$32583.$native;
                    /*End dynamic block*/
                }//End switch statement at htmlformelement.ceylon (54:2-64:2)
            };$$hTMLFormElementAbs.setAutocomplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'autocomplete',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setAutocomplete']};};
            
            //MethodDefinition getEnctype at htmlformelement.ceylon (68:1-72:1)
            $$hTMLFormElementAbs.getEnctype=function getEnctype(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$hTMLFormElementAbs.$native.enctype);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.getEnctype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getEnctype']};};
            
            //MethodDefinition setEnctype at htmlformelement.ceylon (74:1-87:1)
            $$hTMLFormElementAbs.setEnctype=function setEnctype(enctype$32584){
                var $$hTMLFormElementAbs=this;
                //Switch statement at htmlformelement.ceylon (75:2-85:2)
                var case$32585=enctype$32584;
                if ($$$cl32209.isOfType(enctype$32584,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.enctype=case$32585.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(enctype$32584,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.enctype=case$32585.$native;
                    /*End dynamic block*/
                }//End switch statement at htmlformelement.ceylon (75:2-85:2)
            };$$hTMLFormElementAbs.setEnctype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'enctype',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setEnctype']};};
            
            //MethodDefinition getEncoding at htmlformelement.ceylon (89:1-93:1)
            $$hTMLFormElementAbs.getEncoding=function getEncoding(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$hTMLFormElementAbs.$native.encoding);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.getEncoding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getEncoding']};};
            
            //MethodDefinition setEncoding at htmlformelement.ceylon (95:1-108:1)
            $$hTMLFormElementAbs.setEncoding=function setEncoding(encoding$32586){
                var $$hTMLFormElementAbs=this;
                //Switch statement at htmlformelement.ceylon (96:2-106:2)
                var case$32587=encoding$32586;
                if ($$$cl32209.isOfType(encoding$32586,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.encoding=case$32587.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(encoding$32586,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.encoding=case$32587.$native;
                    /*End dynamic block*/
                }//End switch statement at htmlformelement.ceylon (96:2-106:2)
            };$$hTMLFormElementAbs.setEncoding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'encoding',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setEncoding']};};
            
            //MethodDefinition getMethod at htmlformelement.ceylon (110:1-114:1)
            $$hTMLFormElementAbs.getMethod=function getMethod(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$hTMLFormElementAbs.$native.method);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.getMethod.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getMethod']};};
            
            //MethodDefinition setMethod at htmlformelement.ceylon (116:1-129:1)
            $$hTMLFormElementAbs.setMethod=function setMethod(method$32588){
                var $$hTMLFormElementAbs=this;
                //Switch statement at htmlformelement.ceylon (117:2-127:2)
                var case$32589=method$32588;
                if ($$$cl32209.isOfType(method$32588,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.method=case$32589.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(method$32588,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.method=case$32589.$native;
                    /*End dynamic block*/
                }//End switch statement at htmlformelement.ceylon (117:2-127:2)
            };$$hTMLFormElementAbs.setMethod.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'method',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setMethod']};};
            
            //MethodDefinition getName at htmlformelement.ceylon (131:1-135:1)
            $$hTMLFormElementAbs.getName=function getName(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$hTMLFormElementAbs.$native.name);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.getName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getName']};};
            
            //MethodDefinition setName at htmlformelement.ceylon (137:1-149:1)
            $$hTMLFormElementAbs.setName=function setName(name$32590){
                var $$hTMLFormElementAbs=this;
                //Switch statement at htmlformelement.ceylon (138:2-148:2)
                var case$32591=name$32590;
                if ($$$cl32209.isOfType(name$32590,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.name=case$32591.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(name$32590,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.name=case$32591.$native;
                    /*End dynamic block*/
                }//End switch statement at htmlformelement.ceylon (138:2-148:2)
            };$$hTMLFormElementAbs.setName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setName']};};
            
            //MethodDefinition getNoValidate at htmlformelement.ceylon (151:1-159:1)
            $$hTMLFormElementAbs.getNoValidate=function getNoValidate(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                if($$hTMLFormElementAbs.$native.noValidate){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$hTMLFormElementAbs.getNoValidate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getNoValidate']};};
            
            //MethodDefinition setNoValidate at htmlformelement.ceylon (161:1-165:1)
            $$hTMLFormElementAbs.setNoValidate=function setNoValidate(noValidate$32592){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                $$hTMLFormElementAbs.$native.noValidate=noValidate$32592;
                /*End dynamic block*/
            };$$hTMLFormElementAbs.setNoValidate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'noValidate',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setNoValidate']};};
            
            //MethodDefinition getTarget at htmlformelement.ceylon (167:1-171:1)
            $$hTMLFormElementAbs.getTarget=function getTarget(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$hTMLFormElementAbs.$native.target);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.getTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getTarget']};};
            
            //MethodDefinition setTarget at htmlformelement.ceylon (173:1-185:1)
            $$hTMLFormElementAbs.setTarget=function setTarget(target$32593){
                var $$hTMLFormElementAbs=this;
                //Switch statement at htmlformelement.ceylon (174:2-184:2)
                var case$32594=target$32593;
                if ($$$cl32209.isOfType(target$32593,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.target=case$32594.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(target$32593,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$hTMLFormElementAbs.$native.target=case$32594.$native;
                    /*End dynamic block*/
                }//End switch statement at htmlformelement.ceylon (174:2-184:2)
            };$$hTMLFormElementAbs.setTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setTarget']};};
            
            //MethodDefinition length at htmlformelement.ceylon (193:1-197:1)
            $$hTMLFormElementAbs.length=function length(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$hTMLFormElementAbs.$native.length);
                /*End dynamic block*/
            };$$hTMLFormElementAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','length']};};
            
            //MethodDefinition checkValidity at htmlformelement.ceylon (199:1-207:1)
            $$hTMLFormElementAbs.checkValidity=function checkValidity(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                if($$hTMLFormElementAbs.$native.checkValidity()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$hTMLFormElementAbs.checkValidity.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','checkValidity']};};
            
            //MethodDefinition submit at htmlformelement.ceylon (209:1-213:1)
            $$hTMLFormElementAbs.submit=function submit(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                $$hTMLFormElementAbs.$native.submit();
                /*End dynamic block*/
            };$$hTMLFormElementAbs.submit.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','submit']};};
            
            //MethodDefinition reset at htmlformelement.ceylon (215:1-219:1)
            $$hTMLFormElementAbs.reset=function reset(){
                var $$hTMLFormElementAbs=this;
                /*Begin dynamic block*/
                $$hTMLFormElementAbs.$native.reset();
                /*End dynamic block*/
            };$$hTMLFormElementAbs.reset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','reset']};};
        })(HTMLFormElementAbs.$$.prototype);
    }
    return HTMLFormElementAbs;
}
exports.$init$HTMLFormElementAbs=$init$HTMLFormElementAbs;
$init$HTMLFormElementAbs();

//ClassDefinition HTMLFormElement at htmlformelement.ceylon (223:0-228:0)
function HTMLFormElement(n$32595, $$hTMLFormElement){
    $init$HTMLFormElement();
    if ($$hTMLFormElement===undefined)$$hTMLFormElement=new HTMLFormElement.$$;
    $$hTMLFormElement.n$32595_=n$32595;
    HTMLFormElementAbs($$hTMLFormElement);
    
    //AttributeDeclaration native at htmlformelement.ceylon (224:1-224:29)
    $$hTMLFormElement.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:HTMLFormElement,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.html','HTMLFormElement','$at','native']};}};
    /*Begin dynamic block*/
    $$hTMLFormElement.$native=$$hTMLFormElement.n$32595;/*End dynamic block*/
    return $$hTMLFormElement;
}
HTMLFormElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:HTMLFormElementAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','HTMLFormElement']};};
exports.HTMLFormElement=HTMLFormElement;
function $init$HTMLFormElement(){
    if (HTMLFormElement.$$===undefined){
        $$$cl32209.initTypeProto(HTMLFormElement,'ceylon.js.html::HTMLFormElement',$init$HTMLFormElementAbs());
        (function($$hTMLFormElement){
            
            //AttributeDeclaration native at htmlformelement.ceylon (224:1-224:29)
            $$$cl32209.defineAttr($$hTMLFormElement,'n$32595',function(){return this.n$32595_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:HTMLFormElement,d:['ceylon.js.html','HTMLFormElement','$at','n']};});
        })(HTMLFormElement.$$.prototype);
    }
    return HTMLFormElement;
}
exports.$init$HTMLFormElement=$init$HTMLFormElement;
$init$HTMLFormElement();

//ClassDefinition WindowAbs at window.ceylon (3:0-5:0)
function WindowAbs($$windowAbs){
    $init$WindowAbs();
    if ($$windowAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$windowAbs);
    return $$windowAbs;
}
WindowAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.html','WindowAbs']};};
exports.WindowAbs=WindowAbs;
function $init$WindowAbs(){
    if (WindowAbs.$$===undefined){
        $$$cl32209.initTypeProto(WindowAbs,'ceylon.js.html::WindowAbs',$$$cjl32280.JSObjectAbs);
    }
    return WindowAbs;
}
exports.$init$WindowAbs=$init$WindowAbs;
$init$WindowAbs();

//ClassDefinition Window at window.ceylon (7:0-12:0)
function Window(n$32601, $$window){
    $init$Window();
    if ($$window===undefined)$$window=new Window.$$;
    $$window.n$32601_=n$32601;
    WindowAbs($$window);
    
    //AttributeDeclaration native at window.ceylon (8:1-8:29)
    $$window.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Window,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.html','Window','$at','native']};}};
    /*Begin dynamic block*/
    $$window.$native=$$window.n$32601;/*End dynamic block*/
    return $$window;
}
Window.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:WindowAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','Window']};};
exports.Window=Window;
function $init$Window(){
    if (Window.$$===undefined){
        $$$cl32209.initTypeProto(Window,'ceylon.js.html::Window',$init$WindowAbs());
        (function($$window){
            
            //AttributeDeclaration native at window.ceylon (8:1-8:29)
            $$$cl32209.defineAttr($$window,'n$32601',function(){return this.n$32601_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Window,d:['ceylon.js.html','Window','$at','n']};});
        })(Window.$$.prototype);
    }
    return Window;
}
exports.$init$Window=$init$Window;
$init$Window();

//ClassDefinition LocationAbs at location.ceylon (3:0-39:0)
function LocationAbs($$locationAbs){
    $init$LocationAbs();
    if ($$locationAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$locationAbs);
    return $$locationAbs;
}
LocationAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.html','LocationAbs']};};
exports.LocationAbs=LocationAbs;
function $init$LocationAbs(){
    if (LocationAbs.$$===undefined){
        $$$cl32209.initTypeProto(LocationAbs,'ceylon.js.html::LocationAbs',$$$cjl32280.JSObjectAbs);
        (function($$locationAbs){
            
            //MethodDefinition assignURL at location.ceylon (5:1-17:1)
            $$locationAbs.assignURL=function assignURL(url$32919){
                var $$locationAbs=this;
                //Switch statement at location.ceylon (6:2-16:2)
                var case$32920=url$32919;
                if ($$$cl32209.isOfType(url$32919,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$locationAbs.$native.assign(/*NULL PARAM!*/case$32920.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(url$32919,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$locationAbs.$native.assign(/*NULL PARAM!*/case$32920.$native);
                    /*End dynamic block*/
                }//End switch statement at location.ceylon (6:2-16:2)
            };$$locationAbs.assignURL.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'url',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:LocationAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','LocationAbs','$m','assignURL']};};
            
            //MethodDefinition reload at location.ceylon (19:1-23:1)
            $$locationAbs.reload$defs$forcedReload=function(forcedReload$32921){var $$locationAbs=this;
            return false;};
            $$locationAbs.reload=function reload(forcedReload$32921){
                var $$locationAbs=this;
                if(forcedReload$32921===undefined){forcedReload$32921=$$locationAbs.reload$defs$forcedReload(forcedReload$32921);}
                /*Begin dynamic block*/
                $$locationAbs.$native.reload(/*NULL PARAM!*/forcedReload$32921);
                /*End dynamic block*/
            };$$locationAbs.reload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'forcedReload',$mt:'prm',$def:1,$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:LocationAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','LocationAbs','$m','reload']};};
            
            //MethodDefinition replace at location.ceylon (25:1-37:1)
            $$locationAbs.replace=function replace(url$32922){
                var $$locationAbs=this;
                //Switch statement at location.ceylon (26:2-36:2)
                var case$32923=url$32922;
                if ($$$cl32209.isOfType(url$32922,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$locationAbs.$native.replace(/*NULL PARAM!*/case$32923.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(url$32922,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$locationAbs.$native.replace(/*NULL PARAM!*/case$32923.$native);
                    /*End dynamic block*/
                }//End switch statement at location.ceylon (26:2-36:2)
            };$$locationAbs.replace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'url',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:LocationAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','LocationAbs','$m','replace']};};
        })(LocationAbs.$$.prototype);
    }
    return LocationAbs;
}
exports.$init$LocationAbs=$init$LocationAbs;
$init$LocationAbs();

//ClassDefinition Location at location.ceylon (41:0-46:0)
function Location(n$32924, $$location){
    $init$Location();
    if ($$location===undefined)$$location=new Location.$$;
    $$location.n$32924_=n$32924;
    LocationAbs($$location);
    
    //AttributeDeclaration native at location.ceylon (42:1-42:29)
    $$location.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Location,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.html','Location','$at','native']};}};
    /*Begin dynamic block*/
    $$location.$native=$$location.n$32924;/*End dynamic block*/
    return $$location;
}
Location.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:LocationAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.html','Location']};};
exports.Location=Location;
function $init$Location(){
    if (Location.$$===undefined){
        $$$cl32209.initTypeProto(Location,'ceylon.js.html::Location',$init$LocationAbs());
        (function($$location){
            
            //AttributeDeclaration native at location.ceylon (42:1-42:29)
            $$$cl32209.defineAttr($$location,'n$32924',function(){return this.n$32924_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Location,d:['ceylon.js.html','Location','$at','n']};});
        })(Location.$$.prototype);
    }
    return Location;
}
exports.$init$Location=$init$Location;
$init$Location();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
