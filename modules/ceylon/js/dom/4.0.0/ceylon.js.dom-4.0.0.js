(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1","ceylon.js.language\/1.8.5","ceylon.js.html\/5.0.0","ceylon.js.json\/1.0.0"],"$mod-name":"ceylon.js.dom","ceylon.js.dom":{"attributeNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"attributeNode"},"endToStart":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"endToStart"},"Attr":{"super":{"$pk":"ceylon.js.dom","$nm":"AttrAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Attr"},"documentTypeNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentTypeNode"},"ltr":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"obj","$an":{"shared":[]},"$nm":"ltr"},"TextAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"CharacterDataAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"wholeText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"wholeText"},"splitText":{"$t":{"$pk":"ceylon.js.dom","$nm":"Text"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"splitText"}},"$nm":"TextAbs"},"notationNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"notationNode"},"capturePhase":{"super":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"capturePhase"},"ProcessingInstructionAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"target":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"target"},"setData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"}},"$nm":"ProcessingInstructionAbs"},"filterSkip":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$mt":"obj","$an":{"shared":[]},"$nm":"filterSkip"},"filterAccept":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$mt":"obj","$an":{"shared":[]},"$nm":"filterAccept"},"$pkg-shared":"1","documentPositionFollowing":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionFollowing"},"css1Compat":{"super":{"$pk":"ceylon.js.dom","$nm":"CompatMode"},"$mt":"obj","$an":{"shared":[]},"$nm":"css1Compat"},"EventInit":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$an":{"shared":[]},"$nm":"bubbles"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$an":{"shared":[]},"$nm":"cancelable"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toJson":{"$t":{"$md":"ceylon.js.json","$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"}},"$at":{"bubbles":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"bubbles"},"cancelable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"cancelable"}},"$nm":"EventInit"},"EventTargetAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"addEventListener":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"capture"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"addEventListener"},"dispatchEvent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dispatchEvent"},"removeEventListener":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"capture"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"removeEventListener"}},"$nm":"EventTargetAbs"},"CDATASectionAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"TextAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"CDATASectionAbs"},"none":{"super":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"none"},"filterReject":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$mt":"obj","$an":{"shared":[]},"$nm":"filterReject"},"DocumentTypeAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"name":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"name"},"publicId":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"publicId"},"systemId":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"systemId"}},"$nm":"DocumentTypeAbs"},"NodeListAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"item":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"item"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"}},"$nm":"NodeListAbs"},"EntityReference":{"super":{"$pk":"ceylon.js.dom","$nm":"EntityReferenceAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"EntityReference"},"documentPositionImplementationSpecific":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionImplementationSpecific"},"ElementAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"hasAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasAttribute"},"getAttributeNS":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getAttributeNS"},"getElementsByTagName":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"tagName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByTagName"},"getElementsByTagNameNS":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"tagName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByTagNameNS"},"removeAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attrName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeAttributeNS"},"tagName":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"tagName"},"removeAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attrName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeAttribute"},"setAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttributeNS"},"setAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttribute"},"getAttribute":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getAttribute"},"hasAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasAttributeNS"}},"$nm":"ElementAbs"},"startToStart":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"startToStart"},"CompatMode":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"css1Compat"},{"$pk":"ceylon.js.dom","$nm":"backCompat"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"CompatMode"},"rtl":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"obj","$an":{"shared":[]},"$nm":"rtl"},"DocumentFragment":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentFragmentAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"DocumentFragment"},"loading":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"loading"},"documentPositionContainedBy":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionContainedBy"},"Event":{"super":{"$pk":"ceylon.js.dom","$nm":"EventAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Event"},"Comment":{"super":{"$pk":"ceylon.js.dom","$nm":"CommentAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Comment"},"EventAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"defaultPrevented":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"defaultPrevented"},"timeStamp":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSDate"},"$mt":"mthd","$an":{"shared":[]},"$nm":"timeStamp"},"stopPropagation":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"stopPropagation"},"eventPhase":{"$t":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"mthd","$an":{"shared":[]},"$nm":"eventPhase"},"currentTarget":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"EventTarget"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"currentTarget"},"bubbles":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"bubbles"},"stopImmediatePropagation":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"stopImmediatePropagation"},"target":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"EventTarget"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"target"},"isTrusted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isTrusted"},"cancelable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"cancelable"},"preventDefault":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"preventDefault"},"type":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"type"},"initEvent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"bubbles"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"cancelable"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"initEvent"}},"$nm":"EventAbs"},"NodeFilterResult":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"filterAccept"},{"$pk":"ceylon.js.dom","$nm":"filterReject"},{"$pk":"ceylon.js.dom","$nm":"filterSkip"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"NodeFilterResult"},"documentPositionPreceding":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionPreceding"},"DocumentDirection":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"rtl"},{"$pk":"ceylon.js.dom","$nm":"ltr"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DocumentDirection"},"createEvent":{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$pk":"ceylon.js.dom","$nm":"EventInit"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createEvent"},"DocumentFragmentAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"DocumentFragmentAbs"},"RangeAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"extractContents":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentFragment"},"$mt":"mthd","$an":{"shared":[]},"$nm":"extractContents"},"detach":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"detach"},"compareBoundaryPoints":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"prm","$nm":"how"},{"$t":{"$pk":"ceylon.js.dom","$nm":"Range"},"$mt":"prm","$nm":"sourceRange"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"compareBoundaryPoints"},"selectNodeContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"selectNodeContents"},"insertNode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertNode"},"deleteContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"deleteContents"},"setStartAfter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setStartAfter"},"startOffset":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"startOffset"},"collapsed":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"collapsed"},"cloneRange":{"$t":{"$pk":"ceylon.js.dom","$nm":"Range"},"$mt":"mthd","$an":{"shared":[]},"$nm":"cloneRange"},"surroundContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"surroundContents"},"cloneContents":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentFragment"},"$mt":"mthd","$an":{"shared":[]},"$nm":"cloneContents"},"selectNode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"selectNode"},"endOffset":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"endOffset"},"setStart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"startNode"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"startOffset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setStart"},"isPointInRange":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isPointInRange"},"commonAncestorContainer":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"commonAncestorContainer"},"startContainer":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"startContainer"},"endContainer":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"endContainer"},"setEndAfter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEndAfter"},"setStartBefore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setStartBefore"},"setEndBefore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEndBefore"},"setEnd":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"endNode"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"endOffset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEnd"},"collapse":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"toStart"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"collapse"}},"$nm":"RangeAbs"},"Node":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Node"},"NodeType":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"attributeNode"},{"$pk":"ceylon.js.dom","$nm":"cdataSectionNode"},{"$pk":"ceylon.js.dom","$nm":"commentNode"},{"$pk":"ceylon.js.dom","$nm":"documentFragmentNode"},{"$pk":"ceylon.js.dom","$nm":"documentNode"},{"$pk":"ceylon.js.dom","$nm":"documentTypeNode"},{"$pk":"ceylon.js.dom","$nm":"elementNode"},{"$pk":"ceylon.js.dom","$nm":"entityNode"},{"$pk":"ceylon.js.dom","$nm":"entityReferenceNode"},{"$pk":"ceylon.js.dom","$nm":"notationNode"},{"$pk":"ceylon.js.dom","$nm":"processingInstructionNode"},{"$pk":"ceylon.js.dom","$nm":"textNode"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"NodeType"},"processingInstructionNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"processingInstructionNode"},"endToEnd":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"endToEnd"},"CharacterDataAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"replaceData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"count"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceData"},"getData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"deleteData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"count"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"deleteData"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"insertData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertData"},"appendData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendData"},"substringData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"count"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"substringData"},"setData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"}},"$nm":"CharacterDataAbs"},"commentNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"commentNode"},"NodeList":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeListAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"NodeList"},"documentPositionContains":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionContains"},"TreeWalkerAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"previousSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"previousSibling"},"whatToShow":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"whatToShow"},"parentNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"parentNode"},"root":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"root"},"firstChild":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"firstChild"},"currentNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"currentNode"},"nextNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"nextNode"},"nextSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"nextSibling"},"filter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"filter"},"previousNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"previousNode"},"lastChild":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"lastChild"}},"$nm":"TreeWalkerAbs"},"CharacterData":{"super":{"$pk":"ceylon.js.dom","$nm":"CharacterDataAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"CharacterData"},"DOMImplementationAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"createDocument":{"$t":{"$pk":"ceylon.js.dom","$nm":"Document"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"qualifiedName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"DocumentType"}]},"$mt":"prm","$def":"1","$nm":"doctype"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createDocument"},"createDocumentType":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentType"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"qualifiedName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"publicId"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"systemId"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createDocumentType"},"hasFeature":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"feature"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"version"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasFeature"}},"$nm":"DOMImplementationAbs"},"documentFragmentNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentFragmentNode"},"DocumentPosition":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"documentPositionContainedBy"},{"$pk":"ceylon.js.dom","$nm":"documentPositionContains"},{"$pk":"ceylon.js.dom","$nm":"documentPositionDisconnected"},{"$pk":"ceylon.js.dom","$nm":"documentPositionFollowing"},{"$pk":"ceylon.js.dom","$nm":"documentPositionImplementationSpecific"},{"$pk":"ceylon.js.dom","$nm":"documentPositionPreceding"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DocumentPosition"},"HTMLCollectionAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"item":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Element"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"item"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"namedItem":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"namedItem"}},"$nm":"HTMLCollectionAbs"},"RangeCompareHow":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"endToEnd"},{"$pk":"ceylon.js.dom","$nm":"endToStart"},{"$pk":"ceylon.js.dom","$nm":"startToEnd"},{"$pk":"ceylon.js.dom","$nm":"startToStart"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"RangeCompareHow"},"NodeIteratorAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"whatToShow":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"whatToShow"},"root":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"root"},"nextNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"nextNode"},"filter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"filter"},"previousNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"previousNode"}},"$nm":"NodeIteratorAbs"},"entityNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"entityNode"},"backCompat":{"super":{"$pk":"ceylon.js.dom","$nm":"CompatMode"},"$mt":"obj","$an":{"shared":[]},"$nm":"backCompat"},"HTMLCollection":{"super":{"$pk":"ceylon.js.dom","$nm":"HTMLCollectionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"HTMLCollection"},"textNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"textNode"},"interactive":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"interactive"},"complete":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"complete"},"NodeIterator":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeIteratorAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"NodeIterator"},"startToEnd":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"startToEnd"},"DOMImplementation":{"super":{"$pk":"ceylon.js.dom","$nm":"DOMImplementationAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"DOMImplementation"},"cdataSectionNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"cdataSectionNode"},"DocumentType":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentTypeAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"DocumentType"},"CommentAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"CharacterDataAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"CommentAbs"},"Range":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Range"},"Document":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Document"},"entityReferenceNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"entityReferenceNode"},"atTarget":{"super":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"atTarget"},"EntityReferenceAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"EntityReferenceAbs"},"AttrAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getValue":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getValue"},"name":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"name"},"setValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setValue"},"isId":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isId"}},"$nm":"AttrAbs"},"elementNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"elementNode"},"NodeFilter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"n"}]],"$mt":"prm","$pt":"f","$nm":"acceptNode"}],"$mt":"cls","$an":{"shared":[]},"$m":{"acceptNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"n"}]],"$mt":"mthd","$nm":"acceptNode"}},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"}},"$nm":"NodeFilter"},"documentPositionDisconnected":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionDisconnected"},"getWindow":{"$t":{"$md":"ceylon.js.html","$pk":"ceylon.js.html","$nm":"Window"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getWindow"},"Text":{"super":{"$pk":"ceylon.js.dom","$nm":"TextAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Text"},"CDATASection":{"super":{"$pk":"ceylon.js.dom","$nm":"CDATASectionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"CDATASection"},"documentNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentNode"},"TreeWalker":{"super":{"$pk":"ceylon.js.dom","$nm":"TreeWalkerAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"TreeWalker"},"EventPhase":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"none"},{"$pk":"ceylon.js.dom","$nm":"capturePhase"},{"$pk":"ceylon.js.dom","$nm":"atTarget"},{"$pk":"ceylon.js.dom","$nm":"bubblingPhase"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$an":{"shared":[]},"$nm":"num"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"num":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"num"}},"$nm":"EventPhase"},"bubblingPhase":{"super":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"bubblingPhase"},"NodeAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"firstChild":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"firstChild"},"nodeName":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"nodeName"},"childNodes":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeList"},"$mt":"mthd","$an":{"shared":[]},"$nm":"childNodes"},"baseURI":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"baseURI"},"replaceChild":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newChild"},{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"oldChild"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceChild"},"setTextContent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTextContent"},"lastChild":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"lastChild"},"normalize":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"normalize"},"lookupPrefix":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"namespaceURI"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"lookupPrefix"},"previousSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"previousSibling"},"parentNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"parentNode"},"hasChildNodes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"hasChildNodes"},"nodeType":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"mthd","$an":{"shared":[]},"$nm":"nodeType"},"cloneNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"bool"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"cloneNode"},"nextSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"nextSibling"},"isDefaultNamespace":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespaceURI"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isDefaultNamespace"},"insertBefore":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newElement"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"prm","$nm":"referenceElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertBefore"},"appendChild":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendChild"},"setNodeValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setNodeValue"},"compareDocumentPosition":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"compareDocumentPosition"},"removeChild":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeChild"},"prefix":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"prefix"},"getTextContent":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTextContent"},"isEqualNode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isEqualNode"},"getNodeValue":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getNodeValue"}},"$at":{"ownerDocument":{"$t":{"$pk":"ceylon.js.dom","$nm":"Document"},"$mt":"gttr","$an":{"shared":[]},"$nm":"ownerDocument"}},"$nm":"NodeAbs"},"EventTarget":{"super":{"$pk":"ceylon.js.dom","$nm":"EventTargetAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"EventTarget"},"ProcessingInstruction":{"super":{"$pk":"ceylon.js.dom","$nm":"ProcessingInstructionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"ProcessingInstruction"},"DocumentReadyState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"loading"},{"$pk":"ceylon.js.dom","$nm":"interactive"},{"$pk":"ceylon.js.dom","$nm":"complete"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DocumentReadyState"},"DocumentAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"writeln":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"line"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"writeln"},"body":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"body"},"getElementsByName":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByName"},"createNodeIterator":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeIterator"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"root"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"whatToShow"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createNodeIterator"},"location":{"$t":{"$md":"ceylon.js.html","$pk":"ceylon.js.html","$nm":"Location"},"$mt":"mthd","$an":{"shared":[]},"$nm":"location"},"hasFocus":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"hasFocus"},"defaultView":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.html","$pk":"ceylon.js.html","$nm":"Window"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"defaultView"},"close":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"close"},"open":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"open"},"scripts":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"scripts"},"createAttributeNS":{"$t":{"$pk":"ceylon.js.dom","$nm":"Attr"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createAttributeNS"},"getElementsByClassName":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"names"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByClassName"},"createAttribute":{"$t":{"$pk":"ceylon.js.dom","$nm":"Attr"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createAttribute"},"querySelector":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"selectors"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"querySelector"},"activeElement":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[]},"$nm":"activeElement"},"head":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[]},"$nm":"head"},"documentElement":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"documentElement"},"setAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"async"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAsync"},"getElementById":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Element"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"id"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementById"},"releaseCapture":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"releaseCapture"},"styleSheetSets":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[],"doc":["Array of Strings"]},"$nm":"styleSheetSets"},"getElementsByTagNameNS":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},{"$pk":"ceylon.js.dom","$nm":"NodeList"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByTagNameNS"},"getAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAsync"},"getCookie":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getCookie"},"getDir":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDir"},"setDir":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"prm","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDir"},"elementFromPoint":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"x"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"elementFromPoint"},"getSelectedStyleSheetSet":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getSelectedStyleSheetSet"},"preferredStyleSheetSet":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"preferredStyleSheetSet"},"url":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"url"},"createComment":{"$t":{"$pk":"ceylon.js.dom","$nm":"Comment"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createComment"},"referrer":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"referrer"},"documentURI":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"documentURI"},"setSelectedStyleSheetSet":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"sheet"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setSelectedStyleSheetSet"},"images":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"images"},"styleSheets":{"$t":{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheetList"},"$mt":"mthd","$an":{"shared":[]},"$nm":"styleSheets"},"doctype":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"DocumentType"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"doctype"},"createCDATASection":{"$t":{"$pk":"ceylon.js.dom","$nm":"CDATASection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createCDATASection"},"getDomain":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDomain"},"importNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"externalNode"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"deep"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"importNode"},"adoptNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"adoptNode"},"getDesignMode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDesignMode"},"plugins":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"plugins"},"compatMode":{"$t":{"$pk":"ceylon.js.dom","$nm":"CompatMode"},"$mt":"mthd","$an":{"shared":[]},"$nm":"compatMode"},"createTextNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Text"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createTextNode"},"createElementNS":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"qualifiedName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createElementNS"},"querySelectorAll":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeList"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"selectors"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"querySelectorAll"},"createDocumentFragment":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentFragment"},"$mt":"mthd","$an":{"shared":[]},"$nm":"createDocumentFragment"},"title":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"title"},"getElementsByTagName":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},{"$pk":"ceylon.js.dom","$nm":"NodeList"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByTagName"},"write":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"line"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"write"},"setDomain":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"domain"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDomain"},"forms":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"forms"},"characterSet":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"characterSet"},"lastModified":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"lastModified"},"links":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"links"},"readyState":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"mthd","$an":{"shared":[]},"$nm":"readyState"},"createRange":{"$t":{"$pk":"ceylon.js.dom","$nm":"Range"},"$mt":"mthd","$an":{"shared":[]},"$nm":"createRange"},"anchors":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeList"},"$mt":"mthd","$an":{"shared":[]},"$nm":"anchors"},"implementation":{"$t":{"$pk":"ceylon.js.dom","$nm":"DOMImplementation"},"$mt":"mthd","$an":{"shared":[]},"$nm":"implementation"},"setCookie":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"cookie"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCookie"},"lastStyleSheetSet":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"lastStyleSheetSet"},"createTreeWalker":{"$t":{"$pk":"ceylon.js.dom","$nm":"TreeWalker"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"root"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"whatToShow"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createTreeWalker"},"createElement":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"tagName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createElement"},"createProcessingInstruction":{"$t":{"$pk":"ceylon.js.dom","$nm":"ProcessingInstruction"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"target"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createProcessingInstruction"}},"$nm":"DocumentAbs"},"Element":{"super":{"$pk":"ceylon.js.dom","$nm":"ElementAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Element"}},"$mod-version":"4.0.0","ceylon.js.dom.stylesheets":{"StyleSheetAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"title":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"title"},"ownerNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"ownerNode"},"type":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"type"},"media":{"$t":{"$pk":"ceylon.js.dom.stylesheets","$nm":"MediaList"},"$mt":"mthd","$an":{"shared":[]},"$nm":"media"},"href":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"href"},"parentStyleSheet":{"$t":{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheet"},"$mt":"mthd","$an":{"shared":[]},"$nm":"parentStyleSheet"},"disabled":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"disabled"}},"$nm":"StyleSheetAbs"},"MediaListAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"appendMedium":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"newMedium"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendMedium"},"setMediaText":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"text"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMediaText"},"item":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"item"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"deleteMedium":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"oldMedium"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"deleteMedium"},"getMediaText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMediaText"}},"$nm":"MediaListAbs"},"$pkg-shared":"1","MediaList":{"super":{"$pk":"ceylon.js.dom.stylesheets","$nm":"MediaListAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"MediaList"},"StyleSheet":{"super":{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheetAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"StyleSheet"},"StyleSheetListAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"item":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheet"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"item"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"}},"$nm":"StyleSheetListAbs"},"StyleSheetList":{"super":{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheetListAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"StyleSheetList"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6.1');
var $$$cjl361=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl1.$addmod$($$$cjl361,'ceylon.js.language/1.8.5');
function AttrAbs($$attrAbs){
    $init$AttrAbs();
    if ($$attrAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$attrAbs);
    function isId(){
        /*Begin dynamic block*/
        if($$attrAbs.$native.isId){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$attrAbs.isId=isId;
    isId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:AttrAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','AttrAbs','$m','isId']};};
    function name(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$attrAbs.$native.name);
        /*End dynamic block*/
    }
    $$attrAbs.name=name;
    name.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:AttrAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','AttrAbs','$m','name']};};
    function getValue(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$attrAbs.$native.value);
        /*End dynamic block*/
    }
    $$attrAbs.getValue=getValue;
    getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:AttrAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','AttrAbs','$m','getValue']};};
    function setValue(val$417){
        
        var case$418=val$417;
        if ($$$cl1.isOfType(val$417,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$attrAbs.$native.value=case$418.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(val$417,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$attrAbs.$native.value=case$418.$native;
            /*End dynamic block*/
        }
    }
    $$attrAbs.setValue=setValue;
    setValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:AttrAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','AttrAbs','$m','setValue']};};
    return $$attrAbs;
}
AttrAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','AttrAbs']};};
exports.AttrAbs=AttrAbs;
function $init$AttrAbs(){
    if (AttrAbs.$$===undefined){
        $$$cl1.initTypeProto(AttrAbs,'ceylon.js.dom::AttrAbs',$$$cjl361.JSObjectAbs);
    }
    return AttrAbs;
}
exports.$init$AttrAbs=$init$AttrAbs;
$init$AttrAbs();
function Attr(n$419, $$attr){
    $init$Attr();
    if ($$attr===undefined)$$attr=new Attr.$$;
    $$attr.n$419_=n$419;
    AttrAbs($$attr);
    $$$cl1.defineAttr($$attr,'n$419',function(){return this.n$419_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Attr,d:['ceylon.js.dom','Attr','$at','n']};});
    $$attr.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Attr,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Attr','$at','native']};}};
    /*Begin dynamic block*/
    $$attr.$native=n$419;/*End dynamic block*/
    return $$attr;
}
Attr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:AttrAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','Attr']};};
exports.Attr=Attr;
function $init$Attr(){
    if (Attr.$$===undefined){
        $$$cl1.initTypeProto(Attr,'ceylon.js.dom::Attr',$init$AttrAbs());
    }
    return Attr;
}
exports.$init$Attr=$init$Attr;
$init$Attr();
function CommentAbs($$commentAbs){
    $init$CommentAbs();
    if ($$commentAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    CharacterDataAbs($$commentAbs);
    return $$commentAbs;
}
CommentAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CharacterDataAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','CommentAbs']};};
exports.CommentAbs=CommentAbs;
function $init$CommentAbs(){
    if (CommentAbs.$$===undefined){
        $$$cl1.initTypeProto(CommentAbs,'ceylon.js.dom::CommentAbs',$init$CharacterDataAbs());
    }
    return CommentAbs;
}
exports.$init$CommentAbs=$init$CommentAbs;
$init$CommentAbs();
function Comment(n$420, $$comment){
    $init$Comment();
    if ($$comment===undefined)$$comment=new Comment.$$;
    $$comment.n$420_=n$420;
    CommentAbs($$comment);
    $$$cl1.defineAttr($$comment,'n$420',function(){return this.n$420_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Comment,d:['ceylon.js.dom','Comment','$at','n']};});
    $$comment.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Comment,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Comment','$at','native']};}};
    /*Begin dynamic block*/
    $$comment.$native=n$420;/*End dynamic block*/
    return $$comment;
}
Comment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CommentAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','Comment']};};
exports.Comment=Comment;
function $init$Comment(){
    if (Comment.$$===undefined){
        $$$cl1.initTypeProto(Comment,'ceylon.js.dom::Comment',$init$CommentAbs());
    }
    return Comment;
}
exports.$init$Comment=$init$Comment;
$init$Comment();
function CharacterDataAbs($$characterDataAbs){
    $init$CharacterDataAbs();
    if ($$characterDataAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$characterDataAbs);
    function getData(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$characterDataAbs.$native.data);
        /*End dynamic block*/
    }
    $$characterDataAbs.getData=getData;
    getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','getData']};};
    function setData(data$421){
        
        var case$422=data$421;
        if ($$$cl1.isOfType(data$421,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$characterDataAbs.$native.data=case$422.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$421,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$characterDataAbs.$native.data=case$422.$native;
            /*End dynamic block*/
        }
    }
    $$characterDataAbs.setData=setData;
    setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','setData']};};
    function length(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$characterDataAbs.$native.length);
        /*End dynamic block*/
    }
    $$characterDataAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','length']};};
    function substringData(offset$423,count$424){
        
        var case$425=offset$423;
        if ($$$cl1.isOfType(offset$423,{t:$$$cl1.Integer})) {
            
            var case$426=count$424;
            if ($$$cl1.isOfType(count$424,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return $$$cjl361.JSString($$characterDataAbs.$native.substringData(/*NULL PARAM!*/case$425/*NULL PARAM!*/,case$426));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(count$424,{t:$$$cjl361.JSNumber})) {
                /*Begin dynamic block*/
                return $$$cjl361.JSString($$characterDataAbs.$native.substringData(/*NULL PARAM!*/case$425/*NULL PARAM!*/,case$426.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(offset$423,{t:$$$cjl361.JSNumber})) {
            
            var case$427=count$424;
            if ($$$cl1.isOfType(count$424,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return $$$cjl361.JSString($$characterDataAbs.$native.substringData(/*NULL PARAM!*/case$425.$native/*NULL PARAM!*/,case$427));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(count$424,{t:$$$cjl361.JSNumber})) {
                /*Begin dynamic block*/
                return $$$cjl361.JSString($$characterDataAbs.$native.substringData(/*NULL PARAM!*/case$425.$native/*NULL PARAM!*/,case$427.$native));
                /*End dynamic block*/
            }
        }
    }
    $$characterDataAbs.substringData=substringData;
    substringData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','substringData']};};
    function appendData(data$428){
        
        var case$429=data$428;
        if ($$$cl1.isOfType(data$428,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$characterDataAbs.$native.appendData(/*NULL PARAM!*/case$429.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$428,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$characterDataAbs.$native.appendData(/*NULL PARAM!*/case$429.$native);
            /*End dynamic block*/
        }
    }
    $$characterDataAbs.appendData=appendData;
    appendData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','appendData']};};
    function insertData(offset$430,data$431){
        
        var case$432=offset$430;
        if ($$$cl1.isOfType(offset$430,{t:$$$cl1.Integer})) {
            
            var case$433=data$431;
            if ($$$cl1.isOfType(data$431,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.insertData(/*NULL PARAM!*/case$432/*NULL PARAM!*/,case$433.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(data$431,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.insertData(/*NULL PARAM!*/case$432/*NULL PARAM!*/,case$433.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(offset$430,{t:$$$cjl361.JSNumber})) {
            
            var case$434=data$431;
            if ($$$cl1.isOfType(data$431,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.insertData(/*NULL PARAM!*/case$432.$native/*NULL PARAM!*/,case$434.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(data$431,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.insertData(/*NULL PARAM!*/case$432.$native/*NULL PARAM!*/,case$434.$native);
                /*End dynamic block*/
            }
        }
    }
    $$characterDataAbs.insertData=insertData;
    insertData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','insertData']};};
    function deleteData(offset$435,count$436){
        
        var case$437=offset$435;
        if ($$$cl1.isOfType(offset$435,{t:$$$cl1.Integer})) {
            
            var case$438=count$436;
            if ($$$cl1.isOfType(count$436,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.deleteData(/*NULL PARAM!*/case$437/*NULL PARAM!*/,case$438);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(count$436,{t:$$$cjl361.JSNumber})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.deleteData(/*NULL PARAM!*/case$437/*NULL PARAM!*/,case$438.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(offset$435,{t:$$$cjl361.JSNumber})) {
            
            var case$439=count$436;
            if ($$$cl1.isOfType(count$436,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.deleteData(/*NULL PARAM!*/case$437.$native/*NULL PARAM!*/,case$439);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(count$436,{t:$$$cjl361.JSNumber})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.deleteData(/*NULL PARAM!*/case$437.$native/*NULL PARAM!*/,case$439.$native);
                /*End dynamic block*/
            }
        }
    }
    $$characterDataAbs.deleteData=deleteData;
    deleteData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','deleteData']};};
    function replaceData(offset$440,count$441,data$442){
        
        var case$443=offset$440;
        if ($$$cl1.isOfType(offset$440,{t:$$$cl1.Integer})) {
            
            var case$444=count$441;
            if ($$$cl1.isOfType(count$441,{t:$$$cl1.Integer})) {
                
                var case$445=data$442;
                if ($$$cl1.isOfType(data$442,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$443/*NULL PARAM!*/,case$444/*NULL PARAM!*/,case$445.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$442,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$443/*NULL PARAM!*/,case$444/*NULL PARAM!*/,case$445.$native);
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(count$441,{t:$$$cjl361.JSNumber})) {
                
                var case$446=data$442;
                if ($$$cl1.isOfType(data$442,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$443/*NULL PARAM!*/,case$444.$native/*NULL PARAM!*/,case$446.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$442,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$443/*NULL PARAM!*/,case$444.$native/*NULL PARAM!*/,case$446.$native);
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(offset$440,{t:$$$cjl361.JSNumber})) {
            
            var case$447=count$441;
            if ($$$cl1.isOfType(count$441,{t:$$$cl1.Integer})) {
                
                var case$448=data$442;
                if ($$$cl1.isOfType(data$442,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$443.$native/*NULL PARAM!*/,case$447/*NULL PARAM!*/,case$448.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$442,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$443.$native/*NULL PARAM!*/,case$447/*NULL PARAM!*/,case$448.$native);
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(count$441,{t:$$$cjl361.JSNumber})) {
                
                var case$449=data$442;
                if ($$$cl1.isOfType(data$442,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$443.$native/*NULL PARAM!*/,case$447.$native/*NULL PARAM!*/,case$449.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$442,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$443.$native/*NULL PARAM!*/,case$447.$native/*NULL PARAM!*/,case$449.$native);
                    /*End dynamic block*/
                }
            }
        }
    }
    $$characterDataAbs.replaceData=replaceData;
    replaceData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','replaceData']};};
    return $$characterDataAbs;
}
CharacterDataAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','CharacterDataAbs']};};
exports.CharacterDataAbs=CharacterDataAbs;
function $init$CharacterDataAbs(){
    if (CharacterDataAbs.$$===undefined){
        $$$cl1.initTypeProto(CharacterDataAbs,'ceylon.js.dom::CharacterDataAbs',$init$NodeAbs());
    }
    return CharacterDataAbs;
}
exports.$init$CharacterDataAbs=$init$CharacterDataAbs;
$init$CharacterDataAbs();
function CharacterData(n$450, $$characterData){
    $init$CharacterData();
    if ($$characterData===undefined)$$characterData=new CharacterData.$$;
    $$characterData.n$450_=n$450;
    CharacterDataAbs($$characterData);
    $$$cl1.defineAttr($$characterData,'n$450',function(){return this.n$450_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CharacterData,d:['ceylon.js.dom','CharacterData','$at','n']};});
    /*Begin dynamic block*/
    $$characterData.$native=n$450;/*End dynamic block*/
    return $$characterData;
}
CharacterData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CharacterDataAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterData']};};
exports.CharacterData=CharacterData;
function $init$CharacterData(){
    if (CharacterData.$$===undefined){
        $$$cl1.initTypeProto(CharacterData,'ceylon.js.dom::CharacterData',$init$CharacterDataAbs());
    }
    return CharacterData;
}
exports.$init$CharacterData=$init$CharacterData;
$init$CharacterData();
var $$$cjh451=require('ceylon/js/html/5.0.0/ceylon.js.html-5.0.0');
$$$cl1.$addmod$($$$cjh451,'ceylon.js.html/5.0.0');
function DocumentPosition(name$452, $$documentPosition){
    $init$DocumentPosition();
    if ($$documentPosition===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$documentPosition.name$452_=name$452;
    $$$cl1.defineAttr($$documentPosition,'name$452',function(){return this.name$452_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DocumentPosition,d:['ceylon.js.dom','DocumentPosition','$at','name']};});
    return $$documentPosition;
}
DocumentPosition.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','DocumentPosition']};};
exports.DocumentPosition=DocumentPosition;
function $init$DocumentPosition(){
    if (DocumentPosition.$$===undefined){
        $$$cl1.initTypeProto(DocumentPosition,'ceylon.js.dom::DocumentPosition',$$$cl1.Basic);
    }
    return DocumentPosition;
}
exports.$init$DocumentPosition=$init$DocumentPosition;
$init$DocumentPosition();
function documentPositionContainedBy$453(){
    var $$documentPositionContainedBy=new documentPositionContainedBy$453.$$;
    DocumentPosition($$$cl1.String("documentPositionContainedBy",27),$$documentPositionContainedBy);
    return $$documentPositionContainedBy;
}
function $init$documentPositionContainedBy$453(){
    if (documentPositionContainedBy$453.$$===undefined){
        $$$cl1.initTypeProto(documentPositionContainedBy$453,'ceylon.js.dom::documentPositionContainedBy',$init$DocumentPosition());
    }
    return documentPositionContainedBy$453;
}
exports.$init$documentPositionContainedBy$453=$init$documentPositionContainedBy$453;
$init$documentPositionContainedBy$453();
var documentPositionContainedBy$454;
function getDocumentPositionContainedBy(){
    if (documentPositionContainedBy$454===undefined)documentPositionContainedBy$454=$init$documentPositionContainedBy$453()();
    return documentPositionContainedBy$454;
}
exports.getDocumentPositionContainedBy=getDocumentPositionContainedBy;
getDocumentPositionContainedBy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionContainedBy$453},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionContainedBy']};};
$prop$getDocumentPositionContainedBy={get:getDocumentPositionContainedBy,$$metamodel$$:getDocumentPositionContainedBy.$$metamodel$$};
exports.$prop$getDocumentPositionContainedBy=$prop$getDocumentPositionContainedBy;
function documentPositionContains$455(){
    var $$documentPositionContains=new documentPositionContains$455.$$;
    DocumentPosition($$$cl1.String("documentPositionContains",24),$$documentPositionContains);
    return $$documentPositionContains;
}
function $init$documentPositionContains$455(){
    if (documentPositionContains$455.$$===undefined){
        $$$cl1.initTypeProto(documentPositionContains$455,'ceylon.js.dom::documentPositionContains',$init$DocumentPosition());
    }
    return documentPositionContains$455;
}
exports.$init$documentPositionContains$455=$init$documentPositionContains$455;
$init$documentPositionContains$455();
var documentPositionContains$456;
function getDocumentPositionContains(){
    if (documentPositionContains$456===undefined)documentPositionContains$456=$init$documentPositionContains$455()();
    return documentPositionContains$456;
}
exports.getDocumentPositionContains=getDocumentPositionContains;
getDocumentPositionContains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionContains$455},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionContains']};};
$prop$getDocumentPositionContains={get:getDocumentPositionContains,$$metamodel$$:getDocumentPositionContains.$$metamodel$$};
exports.$prop$getDocumentPositionContains=$prop$getDocumentPositionContains;
function documentPositionDisconnected$457(){
    var $$documentPositionDisconnected=new documentPositionDisconnected$457.$$;
    DocumentPosition($$$cl1.String("documentPositionDisconnected",28),$$documentPositionDisconnected);
    return $$documentPositionDisconnected;
}
function $init$documentPositionDisconnected$457(){
    if (documentPositionDisconnected$457.$$===undefined){
        $$$cl1.initTypeProto(documentPositionDisconnected$457,'ceylon.js.dom::documentPositionDisconnected',$init$DocumentPosition());
    }
    return documentPositionDisconnected$457;
}
exports.$init$documentPositionDisconnected$457=$init$documentPositionDisconnected$457;
$init$documentPositionDisconnected$457();
var documentPositionDisconnected$458;
function getDocumentPositionDisconnected(){
    if (documentPositionDisconnected$458===undefined)documentPositionDisconnected$458=$init$documentPositionDisconnected$457()();
    return documentPositionDisconnected$458;
}
exports.getDocumentPositionDisconnected=getDocumentPositionDisconnected;
getDocumentPositionDisconnected.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionDisconnected$457},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionDisconnected']};};
$prop$getDocumentPositionDisconnected={get:getDocumentPositionDisconnected,$$metamodel$$:getDocumentPositionDisconnected.$$metamodel$$};
exports.$prop$getDocumentPositionDisconnected=$prop$getDocumentPositionDisconnected;
function documentPositionFollowing$459(){
    var $$documentPositionFollowing=new documentPositionFollowing$459.$$;
    DocumentPosition($$$cl1.String("documentPositionFollowing",25),$$documentPositionFollowing);
    return $$documentPositionFollowing;
}
function $init$documentPositionFollowing$459(){
    if (documentPositionFollowing$459.$$===undefined){
        $$$cl1.initTypeProto(documentPositionFollowing$459,'ceylon.js.dom::documentPositionFollowing',$init$DocumentPosition());
    }
    return documentPositionFollowing$459;
}
exports.$init$documentPositionFollowing$459=$init$documentPositionFollowing$459;
$init$documentPositionFollowing$459();
var documentPositionFollowing$460;
function getDocumentPositionFollowing(){
    if (documentPositionFollowing$460===undefined)documentPositionFollowing$460=$init$documentPositionFollowing$459()();
    return documentPositionFollowing$460;
}
exports.getDocumentPositionFollowing=getDocumentPositionFollowing;
getDocumentPositionFollowing.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionFollowing$459},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionFollowing']};};
$prop$getDocumentPositionFollowing={get:getDocumentPositionFollowing,$$metamodel$$:getDocumentPositionFollowing.$$metamodel$$};
exports.$prop$getDocumentPositionFollowing=$prop$getDocumentPositionFollowing;
function documentPositionImplementationSpecific$461(){
    var $$documentPositionImplementationSpecific=new documentPositionImplementationSpecific$461.$$;
    DocumentPosition($$$cl1.String("documentPositionImplementationSpecific",38),$$documentPositionImplementationSpecific);
    return $$documentPositionImplementationSpecific;
}
function $init$documentPositionImplementationSpecific$461(){
    if (documentPositionImplementationSpecific$461.$$===undefined){
        $$$cl1.initTypeProto(documentPositionImplementationSpecific$461,'ceylon.js.dom::documentPositionImplementationSpecific',$init$DocumentPosition());
    }
    return documentPositionImplementationSpecific$461;
}
exports.$init$documentPositionImplementationSpecific$461=$init$documentPositionImplementationSpecific$461;
$init$documentPositionImplementationSpecific$461();
var documentPositionImplementationSpecific$462;
function getDocumentPositionImplementationSpecific(){
    if (documentPositionImplementationSpecific$462===undefined)documentPositionImplementationSpecific$462=$init$documentPositionImplementationSpecific$461()();
    return documentPositionImplementationSpecific$462;
}
exports.getDocumentPositionImplementationSpecific=getDocumentPositionImplementationSpecific;
getDocumentPositionImplementationSpecific.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionImplementationSpecific$461},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionImplementationSpecific']};};
$prop$getDocumentPositionImplementationSpecific={get:getDocumentPositionImplementationSpecific,$$metamodel$$:getDocumentPositionImplementationSpecific.$$metamodel$$};
exports.$prop$getDocumentPositionImplementationSpecific=$prop$getDocumentPositionImplementationSpecific;
function documentPositionPreceding$463(){
    var $$documentPositionPreceding=new documentPositionPreceding$463.$$;
    DocumentPosition($$$cl1.String("documentPositionPreceding",25),$$documentPositionPreceding);
    return $$documentPositionPreceding;
}
function $init$documentPositionPreceding$463(){
    if (documentPositionPreceding$463.$$===undefined){
        $$$cl1.initTypeProto(documentPositionPreceding$463,'ceylon.js.dom::documentPositionPreceding',$init$DocumentPosition());
    }
    return documentPositionPreceding$463;
}
exports.$init$documentPositionPreceding$463=$init$documentPositionPreceding$463;
$init$documentPositionPreceding$463();
var documentPositionPreceding$464;
function getDocumentPositionPreceding(){
    if (documentPositionPreceding$464===undefined)documentPositionPreceding$464=$init$documentPositionPreceding$463()();
    return documentPositionPreceding$464;
}
exports.getDocumentPositionPreceding=getDocumentPositionPreceding;
getDocumentPositionPreceding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionPreceding$463},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionPreceding']};};
$prop$getDocumentPositionPreceding={get:getDocumentPositionPreceding,$$metamodel$$:getDocumentPositionPreceding.$$metamodel$$};
exports.$prop$getDocumentPositionPreceding=$prop$getDocumentPositionPreceding;
function CompatMode(name$465, $$compatMode){
    $init$CompatMode();
    if ($$compatMode===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$compatMode.name$465_=name$465;
    $$$cl1.defineAttr($$compatMode,'name$465',function(){return this.name$465_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CompatMode,d:['ceylon.js.dom','CompatMode','$at','name']};});
    return $$compatMode;
}
CompatMode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','CompatMode']};};
exports.CompatMode=CompatMode;
function $init$CompatMode(){
    if (CompatMode.$$===undefined){
        $$$cl1.initTypeProto(CompatMode,'ceylon.js.dom::CompatMode',$$$cl1.Basic);
    }
    return CompatMode;
}
exports.$init$CompatMode=$init$CompatMode;
$init$CompatMode();
function css1Compat$466(){
    var $$css1Compat=new css1Compat$466.$$;
    CompatMode($$$cl1.String("CSS1Compat",10),$$css1Compat);
    return $$css1Compat;
}
function $init$css1Compat$466(){
    if (css1Compat$466.$$===undefined){
        $$$cl1.initTypeProto(css1Compat$466,'ceylon.js.dom::css1Compat',$init$CompatMode());
    }
    return css1Compat$466;
}
exports.$init$css1Compat$466=$init$css1Compat$466;
$init$css1Compat$466();
var css1Compat$467;
function getCss1Compat(){
    if (css1Compat$467===undefined)css1Compat$467=$init$css1Compat$466()();
    return css1Compat$467;
}
exports.getCss1Compat=getCss1Compat;
getCss1Compat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:css1Compat$466},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','css1Compat']};};
$prop$getCss1Compat={get:getCss1Compat,$$metamodel$$:getCss1Compat.$$metamodel$$};
exports.$prop$getCss1Compat=$prop$getCss1Compat;
function backCompat$468(){
    var $$backCompat=new backCompat$468.$$;
    CompatMode($$$cl1.String("BackCompat",10),$$backCompat);
    return $$backCompat;
}
function $init$backCompat$468(){
    if (backCompat$468.$$===undefined){
        $$$cl1.initTypeProto(backCompat$468,'ceylon.js.dom::backCompat',$init$CompatMode());
    }
    return backCompat$468;
}
exports.$init$backCompat$468=$init$backCompat$468;
$init$backCompat$468();
var backCompat$469;
function getBackCompat(){
    if (backCompat$469===undefined)backCompat$469=$init$backCompat$468()();
    return backCompat$469;
}
exports.getBackCompat=getBackCompat;
getBackCompat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:backCompat$468},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','backCompat']};};
$prop$getBackCompat={get:getBackCompat,$$metamodel$$:getBackCompat.$$metamodel$$};
exports.$prop$getBackCompat=$prop$getBackCompat;
function DocumentDirection(name$470, $$documentDirection){
    $init$DocumentDirection();
    if ($$documentDirection===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$documentDirection.name$470_=name$470;
    $$$cl1.defineAttr($$documentDirection,'name$470',function(){return this.name$470_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DocumentDirection,d:['ceylon.js.dom','DocumentDirection','$at','name']};});
    return $$documentDirection;
}
DocumentDirection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','DocumentDirection']};};
exports.DocumentDirection=DocumentDirection;
function $init$DocumentDirection(){
    if (DocumentDirection.$$===undefined){
        $$$cl1.initTypeProto(DocumentDirection,'ceylon.js.dom::DocumentDirection',$$$cl1.Basic);
    }
    return DocumentDirection;
}
exports.$init$DocumentDirection=$init$DocumentDirection;
$init$DocumentDirection();
function rtl$471(){
    var $$rtl=new rtl$471.$$;
    DocumentDirection($$$cl1.String("rtl",3),$$rtl);
    return $$rtl;
}
function $init$rtl$471(){
    if (rtl$471.$$===undefined){
        $$$cl1.initTypeProto(rtl$471,'ceylon.js.dom::rtl',$init$DocumentDirection());
    }
    return rtl$471;
}
exports.$init$rtl$471=$init$rtl$471;
$init$rtl$471();
var rtl$472;
function getRtl(){
    if (rtl$472===undefined)rtl$472=$init$rtl$471()();
    return rtl$472;
}
exports.getRtl=getRtl;
getRtl.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:rtl$471},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','rtl']};};
$prop$getRtl={get:getRtl,$$metamodel$$:getRtl.$$metamodel$$};
exports.$prop$getRtl=$prop$getRtl;
function ltr$473(){
    var $$ltr=new ltr$473.$$;
    DocumentDirection($$$cl1.String("ltr",3),$$ltr);
    return $$ltr;
}
function $init$ltr$473(){
    if (ltr$473.$$===undefined){
        $$$cl1.initTypeProto(ltr$473,'ceylon.js.dom::ltr',$init$DocumentDirection());
    }
    return ltr$473;
}
exports.$init$ltr$473=$init$ltr$473;
$init$ltr$473();
var ltr$474;
function getLtr(){
    if (ltr$474===undefined)ltr$474=$init$ltr$473()();
    return ltr$474;
}
exports.getLtr=getLtr;
getLtr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ltr$473},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ltr']};};
$prop$getLtr={get:getLtr,$$metamodel$$:getLtr.$$metamodel$$};
exports.$prop$getLtr=$prop$getLtr;
function DocumentReadyState(name$475, $$documentReadyState){
    $init$DocumentReadyState();
    if ($$documentReadyState===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$documentReadyState.name$475_=name$475;
    $$$cl1.defineAttr($$documentReadyState,'name$475',function(){return this.name$475_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DocumentReadyState,d:['ceylon.js.dom','DocumentReadyState','$at','name']};});
    return $$documentReadyState;
}
DocumentReadyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','DocumentReadyState']};};
exports.DocumentReadyState=DocumentReadyState;
function $init$DocumentReadyState(){
    if (DocumentReadyState.$$===undefined){
        $$$cl1.initTypeProto(DocumentReadyState,'ceylon.js.dom::DocumentReadyState',$$$cl1.Basic);
    }
    return DocumentReadyState;
}
exports.$init$DocumentReadyState=$init$DocumentReadyState;
$init$DocumentReadyState();
function loading$476(){
    var $$loading=new loading$476.$$;
    DocumentReadyState($$$cl1.String("loading",7),$$loading);
    return $$loading;
}
function $init$loading$476(){
    if (loading$476.$$===undefined){
        $$$cl1.initTypeProto(loading$476,'ceylon.js.dom::loading',$init$DocumentReadyState());
    }
    return loading$476;
}
exports.$init$loading$476=$init$loading$476;
$init$loading$476();
var loading$477;
function getLoading(){
    if (loading$477===undefined)loading$477=$init$loading$476()();
    return loading$477;
}
exports.getLoading=getLoading;
getLoading.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:loading$476},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','loading']};};
$prop$getLoading={get:getLoading,$$metamodel$$:getLoading.$$metamodel$$};
exports.$prop$getLoading=$prop$getLoading;
function interactive$478(){
    var $$interactive=new interactive$478.$$;
    DocumentReadyState($$$cl1.String("interactive",11),$$interactive);
    return $$interactive;
}
function $init$interactive$478(){
    if (interactive$478.$$===undefined){
        $$$cl1.initTypeProto(interactive$478,'ceylon.js.dom::interactive',$init$DocumentReadyState());
    }
    return interactive$478;
}
exports.$init$interactive$478=$init$interactive$478;
$init$interactive$478();
var interactive$479;
function getInteractive(){
    if (interactive$479===undefined)interactive$479=$init$interactive$478()();
    return interactive$479;
}
exports.getInteractive=getInteractive;
getInteractive.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:interactive$478},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','interactive']};};
$prop$getInteractive={get:getInteractive,$$metamodel$$:getInteractive.$$metamodel$$};
exports.$prop$getInteractive=$prop$getInteractive;
function complete$480(){
    var $$complete=new complete$480.$$;
    DocumentReadyState($$$cl1.String("complete",8),$$complete);
    return $$complete;
}
function $init$complete$480(){
    if (complete$480.$$===undefined){
        $$$cl1.initTypeProto(complete$480,'ceylon.js.dom::complete',$init$DocumentReadyState());
    }
    return complete$480;
}
exports.$init$complete$480=$init$complete$480;
$init$complete$480();
var complete$481;
function getComplete(){
    if (complete$481===undefined)complete$481=$init$complete$480()();
    return complete$481;
}
exports.getComplete=getComplete;
getComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:complete$480},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','complete']};};
$prop$getComplete={get:getComplete,$$metamodel$$:getComplete.$$metamodel$$};
exports.$prop$getComplete=$prop$getComplete;
function DocumentAbs($$documentAbs){
    $init$DocumentAbs();
    if ($$documentAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$documentAbs);
    function activeElement(){
        /*Begin dynamic block*/
        return Element($$documentAbs.$native.activeElement);
        /*End dynamic block*/
    }
    $$documentAbs.activeElement=activeElement;
    activeElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','activeElement']};};
    function adoptNode(node$482){
        /*Begin dynamic block*/
        return Node($$documentAbs.$native.adoptNode(/*NULL PARAM!*/node$482.$native));
        /*End dynamic block*/
    }
    $$documentAbs.adoptNode=adoptNode;
    adoptNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','adoptNode']};};
    function createRange(){
        /*Begin dynamic block*/
        return Range($$documentAbs.$native.createRange());
        /*End dynamic block*/
    }
    $$documentAbs.createRange=createRange;
    createRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Range},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createRange']};};
    function createAttribute(name$483){
        
        var case$484=name$483;
        if ($$$cl1.isOfType(name$483,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return Attr($$documentAbs.$native.createAttribute(/*NULL PARAM!*/case$484.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(name$483,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            return Attr($$documentAbs.$native.createAttribute(/*NULL PARAM!*/case$484.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.createAttribute=createAttribute;
    createAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Attr},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createAttribute']};};
    function url(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$documentAbs.$native.URL);
        /*End dynamic block*/
    }
    $$documentAbs.url=url;
    url.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','url']};};
    function createAttributeNS(namespace$485,name$486){
        
        var case$487=namespace$485;
        if ($$$cl1.isOfType(namespace$485,{t:$$$cl1.String})) {
            
            var case$488=name$486;
            if ($$$cl1.isOfType(name$486,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/case$487.valueOf()/*NULL PARAM!*/,case$488.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(name$486,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/case$487.valueOf()/*NULL PARAM!*/,case$488.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$485,{t:$$$cjl361.JSString})) {
            
            var case$489=name$486;
            if ($$$cl1.isOfType(name$486,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/case$487.$native/*NULL PARAM!*/,case$489.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(name$486,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/case$487.$native/*NULL PARAM!*/,case$489.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$485,{t:$$$cl1.Null})) {
            
            var case$490=name$486;
            if ($$$cl1.isOfType(name$486,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/null/*NULL PARAM!*/,case$490.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(name$486,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/null/*NULL PARAM!*/,case$490.$native));
                /*End dynamic block*/
            }
        }
    }
    $$documentAbs.createAttributeNS=createAttributeNS;
    createAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Attr},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createAttributeNS']};};
    function createCDATASection(data$491){
        
        var case$492=data$491;
        if ($$$cl1.isOfType(data$491,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return CDATASection($$documentAbs.$native.createCDATASection(/*NULL PARAM!*/case$492.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$491,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            return CDATASection($$documentAbs.$native.createCDATASection(/*NULL PARAM!*/case$492.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.createCDATASection=createCDATASection;
    createCDATASection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:CDATASection},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createCDATASection']};};
    function createComment(data$493){
        
        var case$494=data$493;
        if ($$$cl1.isOfType(data$493,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return Comment($$documentAbs.$native.createComment(/*NULL PARAM!*/case$494.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$493,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            return Comment($$documentAbs.$native.createComment(/*NULL PARAM!*/case$494.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.createComment=createComment;
    createComment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Comment},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createComment']};};
    function createDocumentFragment(){
        /*Begin dynamic block*/
        return DocumentFragment($$documentAbs.$native.createDocumentFragment());
        /*End dynamic block*/
    }
    $$documentAbs.createDocumentFragment=createDocumentFragment;
    createDocumentFragment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentFragment},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createDocumentFragment']};};
    function createElement(tagName$495){
        
        var case$496=tagName$495;
        if ($$$cl1.isOfType(tagName$495,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return Element($$documentAbs.$native.createElement(/*NULL PARAM!*/case$496.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(tagName$495,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            return Element($$documentAbs.$native.createElement(/*NULL PARAM!*/case$496.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.createElement=createElement;
    createElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'tagName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createElement']};};
    function createElementNS(namespaceURI$497,qualifiedName$498){
        
        var case$499=namespaceURI$497;
        if ($$$cl1.isOfType(namespaceURI$497,{t:$$$cl1.String})) {
            
            var case$500=qualifiedName$498;
            if ($$$cl1.isOfType(qualifiedName$498,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.createElementNS(/*NULL PARAM!*/case$499.valueOf()/*NULL PARAM!*/,case$500.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(qualifiedName$498,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.createElementNS(/*NULL PARAM!*/case$499.valueOf()/*NULL PARAM!*/,case$500.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespaceURI$497,{t:$$$cjl361.JSString})) {
            
            var case$501=qualifiedName$498;
            if ($$$cl1.isOfType(qualifiedName$498,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.createElementNS(/*NULL PARAM!*/case$499/*NULL PARAM!*/,case$501.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(qualifiedName$498,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.createElementNS(/*NULL PARAM!*/case$499.$native/*NULL PARAM!*/,case$501.$native));
                /*End dynamic block*/
            }
        }
    }
    $$documentAbs.createElementNS=createElementNS;
    createElementNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'qualifiedName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createElementNS']};};
    function createProcessingInstruction(target$502,data$503){
        
        var case$504=target$502;
        if ($$$cl1.isOfType(target$502,{t:$$$cl1.String})) {
            
            var case$505=data$503;
            if ($$$cl1.isOfType(data$503,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(/*NULL PARAM!*/case$504.valueOf()/*NULL PARAM!*/,case$505.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(data$503,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(/*NULL PARAM!*/case$504.valueOf()/*NULL PARAM!*/,case$505.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(target$502,{t:$$$cjl361.JSString})) {
            
            var case$506=data$503;
            if ($$$cl1.isOfType(data$503,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(/*NULL PARAM!*/case$504.$native/*NULL PARAM!*/,case$506.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(data$503,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(/*NULL PARAM!*/case$504.$native/*NULL PARAM!*/,case$506.$native));
                /*End dynamic block*/
            }
        }
    }
    $$documentAbs.createProcessingInstruction=createProcessingInstruction;
    createProcessingInstruction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ProcessingInstruction},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createProcessingInstruction']};};
    function createTextNode(data$507){
        
        var case$508=data$507;
        if ($$$cl1.isOfType(data$507,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return Text($$documentAbs.$native.createTextNode(/*NULL PARAM!*/case$508.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$507,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            return Text($$documentAbs.$native.createTextNode(/*NULL PARAM!*/case$508.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.createTextNode=createTextNode;
    createTextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Text},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createTextNode']};};
    function doctype(){
        /*Begin dynamic block*/
        var doctype$509=$$documentAbs.$native.doctype;
        $prop$getDoctype$509={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','doctype','$at','doctype']};}};
        $prop$getDoctype$509.get=function(){return doctype$509};
        if((tmpvar$510=doctype$509,tmpvar$511=null,(tmpvar$510.equals&&!tmpvar$510.equals(tmpvar$511))||tmpvar$510!==tmpvar$511)){
            return DocumentType(doctype$509);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$documentAbs.doctype=doctype;
    doctype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:DocumentType}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','doctype']};};
    function documentElement(){
        /*Begin dynamic block*/
        var element$512=$$documentAbs.$native.documentElement;
        $prop$getElement$512={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','documentElement','$at','element']};}};
        $prop$getElement$512.get=function(){return element$512};
        if((tmpvar$513=element$512,tmpvar$514=null,(tmpvar$513.equals&&!tmpvar$513.equals(tmpvar$514))||tmpvar$513!==tmpvar$514)){
            return Element(element$512);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$documentAbs.documentElement=documentElement;
    documentElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Element}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','documentElement']};};
    function documentURI(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$documentAbs.$native.documentURI);
        /*End dynamic block*/
    }
    $$documentAbs.documentURI=documentURI;
    documentURI.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','documentURI']};};
    function compatMode(){
        /*Begin dynamic block*/
        if((tmpvar$515=$$documentAbs.$native.compatMode,tmpvar$516=$$$cl1.String("BackCompat",10),(tmpvar$515.equals&&tmpvar$515.equals(tmpvar$516))||tmpvar$515===tmpvar$516)){
            return getBackCompat();
        }else {
            return getCss1Compat();
        }/*End dynamic block*/
    }
    $$documentAbs.compatMode=compatMode;
    compatMode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:CompatMode},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','compatMode']};};
    function characterSet(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$documentAbs.$native.characterSet);
        /*End dynamic block*/
    }
    $$documentAbs.characterSet=characterSet;
    characterSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','characterSet']};};
    function getElementById(id$517){
        var element$518;
        
        var case$519=id$517;
        if ($$$cl1.isOfType(id$517,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            element$518=$$documentAbs.$native.getElementById(/*NULL PARAM!*/case$519.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(id$517,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            element$518=$$documentAbs.$native.getElementById(/*NULL PARAM!*/case$519.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if((tmpvar$520=element$518,tmpvar$521=null,(tmpvar$520.equals&&!tmpvar$520.equals(tmpvar$521))||tmpvar$520!==tmpvar$521)){
            return Element(element$518);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$documentAbs.getElementById=getElementById;
    getElementById.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Element}]},$ps:[{$nm:'id',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementById']};};
    $$documentAbs.getElementsByTagName$defs$name=function(name$522){return $$$cl1.String("*",1);};
    function getElementsByTagName(name$522){
        if(name$522===undefined){name$522=$$documentAbs.getElementsByTagName$defs$name(name$522);}
        var elems$523;
        
        var case$524=name$522;
        if ($$$cl1.isOfType(name$522,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            elems$523=$$documentAbs.$native.getElementsByTagName(/*NULL PARAM!*/case$524.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(name$522,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            elems$523=$$documentAbs.$native.getElementsByTagName(/*NULL PARAM!*/case$524.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(elems$523.instanceof(/*NULL PARAM!*/(typeof HTMLCollection==='undefined'||HTMLCollection===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: HTMLCollection")),'317:26-317:39','document.ceylon'):HTMLCollection))){
            return HTMLCollection(elems$523);
        }else {
            return NodeList(elems$523);
        }/*End dynamic block*/
    }
    $$documentAbs.getElementsByTagName=getElementsByTagName;
    getElementsByTagName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:HTMLCollection},{t:NodeList}]},$ps:[{$nm:'name',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByTagName']};};
    $$documentAbs.getElementsByTagNameNS$defs$name=function(namespace$525,name$526){return $$$cl1.String("*",1);};
    function getElementsByTagNameNS(namespace$525,name$526){
        if(name$526===undefined){name$526=$$documentAbs.getElementsByTagNameNS$defs$name(namespace$525,name$526);}
        var elems$527;
        
        var case$528=namespace$525;
        if ($$$cl1.isOfType(namespace$525,{t:$$$cl1.String})) {
            
            var case$529=name$526;
            if ($$$cl1.isOfType(name$526,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                elems$527=$$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$528.valueOf()/*NULL PARAM!*/,case$529.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(name$526,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                elems$527=$$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$528.valueOf()/*NULL PARAM!*/,case$529.$native);/*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$525,{t:$$$cjl361.JSString})) {
            
            var case$530=name$526;
            if ($$$cl1.isOfType(name$526,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                elems$527=$$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$528/*NULL PARAM!*/,case$530.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(name$526,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                elems$527=$$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$528.$native/*NULL PARAM!*/,case$530.$native);/*End dynamic block*/
            }
        }
        /*Begin dynamic block*/
        if(elems$527.instanceof(/*NULL PARAM!*/(typeof HTMLCollection==='undefined'||HTMLCollection===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: HTMLCollection")),'355:26-355:39','document.ceylon'):HTMLCollection))){
            return HTMLCollection(elems$527);
        }else {
            return NodeList(elems$527);
        }/*End dynamic block*/
    }
    $$documentAbs.getElementsByTagNameNS=getElementsByTagNameNS;
    getElementsByTagNameNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:HTMLCollection},{t:NodeList}]},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByTagNameNS']};};
    function getElementsByClassName(names$531){
        
        var case$532=names$531;
        if ($$$cl1.isOfType(names$531,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return HTMLCollection($$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$532.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(names$531,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            return HTMLCollection($$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$532.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.getElementsByClassName=getElementsByClassName;
    getElementsByClassName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'names',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByClassName']};};
    function implementation(){
        /*Begin dynamic block*/
        return DOMImplementation($$documentAbs.$native.implementation);
        /*End dynamic block*/
    }
    $$documentAbs.implementation=implementation;
    implementation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DOMImplementation},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','implementation']};};
    $$documentAbs.importNode$defs$deep=function(externalNode$533,deep$534){return true;};
    function importNode(externalNode$533,deep$534){
        if(deep$534===undefined){deep$534=$$documentAbs.importNode$defs$deep(externalNode$533,deep$534);}
        /*Begin dynamic block*/
        return Node($$documentAbs.$native.importNode(/*NULL PARAM!*/externalNode$533/*NULL PARAM!*/,deep$534));
        /*End dynamic block*/
    }
    $$documentAbs.importNode=importNode;
    importNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'externalNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'deep',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','importNode']};};
    $$documentAbs.createNodeIterator$defs$whatToShow=function(root$535,whatToShow$536,filter$537){return null;};
    $$documentAbs.createNodeIterator$defs$filter=function(root$535,whatToShow$536,filter$537){return null;};
    function createNodeIterator(root$535,whatToShow$536,filter$537){
        if(whatToShow$536===undefined){whatToShow$536=$$documentAbs.createNodeIterator$defs$whatToShow(root$535,whatToShow$536,filter$537);}
        if(filter$537===undefined){filter$537=$$documentAbs.createNodeIterator$defs$filter(root$535,whatToShow$536,filter$537);}
        /*Begin dynamic block*/
        return NodeIterator($$documentAbs.$native.createNodeIterator(/*NULL PARAM!*/root$535/*NULL PARAM!*/,whatToShow$536/*NULL PARAM!*/,filter$537));
        /*End dynamic block*/
    }
    $$documentAbs.createNodeIterator=createNodeIterator;
    createNodeIterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeIterator},$ps:[{$nm:'root',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'whatToShow',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:NodeFilter}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createNodeIterator']};};
    $$documentAbs.createTreeWalker$defs$whatToShow=function(root$538,whatToShow$539,filter$540){return null;};
    $$documentAbs.createTreeWalker$defs$filter=function(root$538,whatToShow$539,filter$540){return null;};
    function createTreeWalker(root$538,whatToShow$539,filter$540){
        if(whatToShow$539===undefined){whatToShow$539=$$documentAbs.createTreeWalker$defs$whatToShow(root$538,whatToShow$539,filter$540);}
        if(filter$540===undefined){filter$540=$$documentAbs.createTreeWalker$defs$filter(root$538,whatToShow$539,filter$540);}
        /*Begin dynamic block*/
        return TreeWalker($$documentAbs.$native.createTreeWalker(/*NULL PARAM!*/root$538/*NULL PARAM!*/,whatToShow$539/*NULL PARAM!*/,filter$540));
        /*End dynamic block*/
    }
    $$documentAbs.createTreeWalker=createTreeWalker;
    createTreeWalker.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:TreeWalker},$ps:[{$nm:'root',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'whatToShow',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:NodeFilter}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createTreeWalker']};};
    function anchors(){
        /*Begin dynamic block*/
        return NodeList($$documentAbs.$native.anchors);
        /*End dynamic block*/
    }
    $$documentAbs.anchors=anchors;
    anchors.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeList},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','anchors']};};
    function getAsync(){
        /*Begin dynamic block*/
        if($$documentAbs.$native.async){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$documentAbs.getAsync=getAsync;
    getAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getAsync']};};
    function setAsync(async$541){
        /*Begin dynamic block*/
        $$documentAbs.$native.async=async$541;
        /*End dynamic block*/
    }
    $$documentAbs.setAsync=setAsync;
    setAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'async',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setAsync']};};
    function body(){
        /*Begin dynamic block*/
        return Node($$documentAbs.$native.body);
        /*End dynamic block*/
    }
    $$documentAbs.body=body;
    body.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','body']};};
    function getCookie(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$documentAbs.$native.cookie);
        /*End dynamic block*/
    }
    $$documentAbs.getCookie=getCookie;
    getCookie.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getCookie']};};
    function setCookie(cookie$542){
        
        var case$543=cookie$542;
        if ($$$cl1.isOfType(cookie$542,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.cookie=case$543.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(cookie$542,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.cookie=case$543.$native;
            /*End dynamic block*/
        }
    }
    $$documentAbs.setCookie=setCookie;
    setCookie.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'cookie',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setCookie']};};
    function defaultView(){
        /*Begin dynamic block*/
        var view$544=$$documentAbs.$native.defaultView;
        $prop$getView$544={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','defaultView','$at','view']};}};
        $prop$getView$544.get=function(){return view$544};
        if((tmpvar$545=view$544,tmpvar$546=null,(tmpvar$545.equals&&!tmpvar$545.equals(tmpvar$546))||tmpvar$545!==tmpvar$546)){
            return $$$cjh451.Window(view$544);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$documentAbs.defaultView=defaultView;
    defaultView.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjh451.Window}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','defaultView']};};
    function getDesignMode(){
        /*Begin dynamic block*/
        if((tmpvar$547=$$documentAbs.$native.designMode,tmpvar$548=$$$cl1.String("on",2),(tmpvar$547.equals&&tmpvar$547.equals(tmpvar$548))||tmpvar$547===tmpvar$548)){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$documentAbs.getDesignMode=getDesignMode;
    getDesignMode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getDesignMode']};};
    function getDir(){
        /*Begin dynamic block*/
        if((tmpvar$549=$$documentAbs.$native.dir,tmpvar$550=$$$cl1.String("ltr",3),(tmpvar$549.equals&&tmpvar$549.equals(tmpvar$550))||tmpvar$549===tmpvar$550)){
            return getLtr();
        }else {
            return getRtl();
        }/*End dynamic block*/
    }
    $$documentAbs.getDir=getDir;
    getDir.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentDirection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getDir']};};
    function setDir(dir$551){
        /*Begin dynamic block*/
        $$documentAbs.$native.dir=dir$551.string.valueOf();
        /*End dynamic block*/
    }
    $$documentAbs.setDir=setDir;
    setDir.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'dir',$mt:'prm',$t:{t:DocumentDirection},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setDir']};};
    function getDomain(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$documentAbs.$native.domain);
        /*End dynamic block*/
    }
    $$documentAbs.getDomain=getDomain;
    getDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getDomain']};};
    function setDomain(domain$552){
        
        var case$553=domain$552;
        if ($$$cl1.isOfType(domain$552,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.domain=case$553.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(domain$552,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.domain=case$553.$native;
            /*End dynamic block*/
        }
    }
    $$documentAbs.setDomain=setDomain;
    setDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'domain',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setDomain']};};
    function forms(){
        /*Begin dynamic block*/
        return HTMLCollection($$documentAbs.$native.forms);
        /*End dynamic block*/
    }
    $$documentAbs.forms=forms;
    forms.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','forms']};};
    function head(){
        /*Begin dynamic block*/
        return Element($$documentAbs.$native.head);
        /*End dynamic block*/
    }
    $$documentAbs.head=head;
    head.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','head']};};
    function images(){
        /*Begin dynamic block*/
        return HTMLCollection($$documentAbs.$native.images);
        /*End dynamic block*/
    }
    $$documentAbs.images=images;
    images.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','images']};};
    function lastModified(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$documentAbs.$native.lastModified);
        /*End dynamic block*/
    }
    $$documentAbs.lastModified=lastModified;
    lastModified.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','lastModified']};};
    function lastStyleSheetSet(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$documentAbs.$native.lastStyleSheetSet);
        /*End dynamic block*/
    }
    $$documentAbs.lastStyleSheetSet=lastStyleSheetSet;
    lastStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','lastStyleSheetSet']};};
    function links(){
        /*Begin dynamic block*/
        return HTMLCollection($$documentAbs.$native.links);
        /*End dynamic block*/
    }
    $$documentAbs.links=links;
    links.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','links']};};
    function location(){
        /*Begin dynamic block*/
        return $$$cjh451.Location($$documentAbs.$native.location);
        /*End dynamic block*/
    }
    $$documentAbs.location=location;
    location.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjh451.Location},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','location']};};
    function plugins(){
        /*Begin dynamic block*/
        return HTMLCollection($$documentAbs.$native.plugins);
        /*End dynamic block*/
    }
    $$documentAbs.plugins=plugins;
    plugins.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','plugins']};};
    function preferredStyleSheetSet(){
        /*Begin dynamic block*/
        var preferred$554=(typeof document==='undefined'||document===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: document")),'556:23-556:30','document.ceylon'):document).preferredStyleSheetSet;
        $prop$getPreferred$554={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','preferredStyleSheetSet','$at','preferred']};}};
        $prop$getPreferred$554.get=function(){return preferred$554};
        if((tmpvar$555=preferred$554,tmpvar$556=null,(tmpvar$555.equals&&!tmpvar$555.equals(tmpvar$556))||tmpvar$555!==tmpvar$556)){
            return $$$cjl361.JSString(preferred$554);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$documentAbs.preferredStyleSheetSet=preferredStyleSheetSet;
    preferredStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','preferredStyleSheetSet']};};
    function readyState(){
        /*Begin dynamic block*/
        var readyState$557=$$documentAbs.$native.readyState;
        $prop$getReadyState$557={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','readyState','$at','readyState']};}};
        $prop$getReadyState$557.get=function(){return readyState$557};
        if((tmpvar$558=readyState$557,tmpvar$559=$$$cl1.String("loading",7),(tmpvar$558.equals&&tmpvar$558.equals(tmpvar$559))||tmpvar$558===tmpvar$559)){
            return getLoading();
        }else {
            if((tmpvar$560=readyState$557,tmpvar$561=$$$cl1.String("interactive",11),(tmpvar$560.equals&&tmpvar$560.equals(tmpvar$561))||tmpvar$560===tmpvar$561)){
                return getInteractive();
            }else {
                return getComplete();
            }
        }/*End dynamic block*/
    }
    $$documentAbs.readyState=readyState;
    readyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentReadyState},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','readyState']};};
    function referrer(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$documentAbs.$native.referrer);
        /*End dynamic block*/
    }
    $$documentAbs.referrer=referrer;
    referrer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','referrer']};};
    function scripts(){
        /*Begin dynamic block*/
        return HTMLCollection($$documentAbs.$native.scripts);
        /*End dynamic block*/
    }
    $$documentAbs.scripts=scripts;
    scripts.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','scripts']};};
    function getSelectedStyleSheetSet(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$documentAbs.$native.selectedStyleSheetSet);
        /*End dynamic block*/
    }
    $$documentAbs.getSelectedStyleSheetSet=getSelectedStyleSheetSet;
    getSelectedStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getSelectedStyleSheetSet']};};
    function setSelectedStyleSheetSet(sheet$562){
        
        var case$563=sheet$562;
        if ($$$cl1.isOfType(sheet$562,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.selectedStyleSheetSet=case$563.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(sheet$562,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.selectedStyleSheetSet=case$563.$native;
            /*End dynamic block*/
        }
    }
    $$documentAbs.setSelectedStyleSheetSet=setSelectedStyleSheetSet;
    setSelectedStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'sheet',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setSelectedStyleSheetSet']};};
    function styleSheets(){
        /*Begin dynamic block*/
        return StyleSheetList$stylesheets($$documentAbs.$native.styleSheets);
        /*End dynamic block*/
    }
    $$documentAbs.styleSheets=styleSheets;
    styleSheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:StyleSheetList$stylesheets},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','styleSheets']};};
    function styleSheetSets(){
        /*Begin dynamic block*/
        return $$$cjl361.JSArray($$documentAbs.$native.styleSheetSets);
        /*End dynamic block*/
    }
    $$documentAbs.styleSheetSets=styleSheetSets;
    styleSheetSets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSArray},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("Array of Strings",16)),$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','styleSheetSets']};};
    function title(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$documentAbs.$native.title);
        /*End dynamic block*/
    }
    $$documentAbs.title=title;
    title.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','title']};};
    function open(){
        /*Begin dynamic block*/
        $$documentAbs.$native.open();
        /*End dynamic block*/
    }
    $$documentAbs.open=open;
    open.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','open']};};
    function close(){
        /*Begin dynamic block*/
        $$documentAbs.$native.close();
        /*End dynamic block*/
    }
    $$documentAbs.close=close;
    close.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','close']};};
    function elementFromPoint(x$564,y$565){
        
        var case$566=x$564;
        if ($$$cl1.isOfType(x$564,{t:$$$cl1.Integer})) {
            
            var case$567=y$565;
            if ($$$cl1.isOfType(y$565,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.elementFromPoint(/*NULL PARAM!*/case$566/*NULL PARAM!*/,case$567));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(y$565,{t:$$$cjl361.JSNumber})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.elementFromPoint(/*NULL PARAM!*/case$566/*NULL PARAM!*/,case$567.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(x$564,{t:$$$cjl361.JSNumber})) {
            
            var case$568=y$565;
            if ($$$cl1.isOfType(y$565,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.elementFromPoint(/*NULL PARAM!*/case$566.$native/*NULL PARAM!*/,case$568));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(y$565,{t:$$$cjl361.JSNumber})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.elementFromPoint(/*NULL PARAM!*/case$566.$native/*NULL PARAM!*/,case$568.$native));
                /*End dynamic block*/
            }
        }
    }
    $$documentAbs.elementFromPoint=elementFromPoint;
    elementFromPoint.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'x',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','elementFromPoint']};};
    function getElementsByName(name$569){
        
        var case$570=name$569;
        if ($$$cl1.isOfType(name$569,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return HTMLCollection($$documentAbs.$native.getElementsByName(/*NULL PARAM!*/case$570.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(name$569,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            return HTMLCollection($$documentAbs.$native.getElementsByName(/*NULL PARAM!*/case$570.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.getElementsByName=getElementsByName;
    getElementsByName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByName']};};
    function hasFocus(){
        /*Begin dynamic block*/
        if($$documentAbs.$native.hasFocus()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$documentAbs.hasFocus=hasFocus;
    hasFocus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','hasFocus']};};
    function querySelector(selectors$571){
        
        var case$572=selectors$571;
        if ($$$cl1.isOfType(selectors$571,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return Element($$documentAbs.$native.querySelector(/*NULL PARAM!*/case$572.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selectors$571,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            return Element($$documentAbs.$native.querySelector(/*NULL PARAM!*/case$572.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.querySelector=querySelector;
    querySelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'selectors',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','querySelector']};};
    function querySelectorAll(selectors$573){
        
        var case$574=selectors$573;
        if ($$$cl1.isOfType(selectors$573,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return NodeList($$documentAbs.$native.querySelectorAll(/*NULL PARAM!*/case$574.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selectors$573,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            return NodeList($$documentAbs.$native.querySelectorAll(/*NULL PARAM!*/case$574.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.querySelectorAll=querySelectorAll;
    querySelectorAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeList},$ps:[{$nm:'selectors',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','querySelectorAll']};};
    function releaseCapture(){
        /*Begin dynamic block*/
        $$documentAbs.$native.releaseCapture();
        /*End dynamic block*/
    }
    $$documentAbs.releaseCapture=releaseCapture;
    releaseCapture.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','releaseCapture']};};
    function write(line$575){
        
        var case$576=line$575;
        if ($$$cl1.isOfType(line$575,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.write(/*NULL PARAM!*/case$576.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(line$575,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.write(/*NULL PARAM!*/case$576.$native);
            /*End dynamic block*/
        }
    }
    $$documentAbs.write=write;
    write.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'line',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','write']};};
    function writeln(line$577){
        
        var case$578=line$577;
        if ($$$cl1.isOfType(line$577,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.writeln(/*NULL PARAM!*/case$578.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(line$577,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.writeln(/*NULL PARAM!*/case$578.$native);
            /*End dynamic block*/
        }
    }
    $$documentAbs.writeln=writeln;
    writeln.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'line',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','writeln']};};
    return $$documentAbs;
}
DocumentAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','DocumentAbs']};};
exports.DocumentAbs=DocumentAbs;
function $init$DocumentAbs(){
    if (DocumentAbs.$$===undefined){
        $$$cl1.initTypeProto(DocumentAbs,'ceylon.js.dom::DocumentAbs',$init$NodeAbs());
    }
    return DocumentAbs;
}
exports.$init$DocumentAbs=$init$DocumentAbs;
$init$DocumentAbs();
function Document(n$579, $$document){
    $init$Document();
    if ($$document===undefined)$$document=new Document.$$;
    $$document.n$579_=n$579;
    DocumentAbs($$document);
    $$$cl1.defineAttr($$document,'n$579',function(){return this.n$579_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Document,d:['ceylon.js.dom','Document','$at','n']};});
    $$document.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Document,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Document','$at','native']};}};
    /*Begin dynamic block*/
    $$document.$native=n$579;/*End dynamic block*/
    return $$document;
}
Document.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','Document']};};
exports.Document=Document;
function $init$Document(){
    if (Document.$$===undefined){
        $$$cl1.initTypeProto(Document,'ceylon.js.dom::Document',$init$DocumentAbs());
    }
    return Document;
}
exports.$init$Document=$init$Document;
$init$Document();
function DocumentTypeAbs($$documentTypeAbs){
    $init$DocumentTypeAbs();
    if ($$documentTypeAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$documentTypeAbs);
    function name(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$documentTypeAbs.$native.name);
        /*End dynamic block*/
    }
    $$documentTypeAbs.name=name;
    name.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentTypeAbs','$m','name']};};
    function publicId(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$documentTypeAbs.$native.publicId);
        /*End dynamic block*/
    }
    $$documentTypeAbs.publicId=publicId;
    publicId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentTypeAbs','$m','publicId']};};
    function systemId(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$documentTypeAbs.$native.systemId);
        /*End dynamic block*/
    }
    $$documentTypeAbs.systemId=systemId;
    systemId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentTypeAbs','$m','systemId']};};
    return $$documentTypeAbs;
}
DocumentTypeAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','DocumentTypeAbs']};};
exports.DocumentTypeAbs=DocumentTypeAbs;
function $init$DocumentTypeAbs(){
    if (DocumentTypeAbs.$$===undefined){
        $$$cl1.initTypeProto(DocumentTypeAbs,'ceylon.js.dom::DocumentTypeAbs',$init$NodeAbs());
    }
    return DocumentTypeAbs;
}
exports.$init$DocumentTypeAbs=$init$DocumentTypeAbs;
$init$DocumentTypeAbs();
function DocumentType(n$580, $$documentType){
    $init$DocumentType();
    if ($$documentType===undefined)$$documentType=new DocumentType.$$;
    $$documentType.n$580_=n$580;
    DocumentTypeAbs($$documentType);
    $$$cl1.defineAttr($$documentType,'n$580',function(){return this.n$580_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DocumentType,d:['ceylon.js.dom','DocumentType','$at','n']};});
    $$documentType.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DocumentType,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','DocumentType','$at','native']};}};
    /*Begin dynamic block*/
    $$documentType.$native=n$580;/*End dynamic block*/
    return $$documentType;
}
DocumentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentTypeAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentType']};};
exports.DocumentType=DocumentType;
function $init$DocumentType(){
    if (DocumentType.$$===undefined){
        $$$cl1.initTypeProto(DocumentType,'ceylon.js.dom::DocumentType',$init$DocumentTypeAbs());
    }
    return DocumentType;
}
exports.$init$DocumentType=$init$DocumentType;
$init$DocumentType();
function DOMImplementationAbs($$dOMImplementationAbs){
    $init$DOMImplementationAbs();
    if ($$dOMImplementationAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$dOMImplementationAbs);
    $$dOMImplementationAbs.createDocument$defs$qualifiedName=function(namespace$581,qualifiedName$582,doctype$583){return $$$cl1.String("",0);};
    $$dOMImplementationAbs.createDocument$defs$doctype=function(namespace$581,qualifiedName$582,doctype$583){return null;};
    function createDocument(namespace$581,qualifiedName$582,doctype$583){
        if(qualifiedName$582===undefined){qualifiedName$582=$$dOMImplementationAbs.createDocument$defs$qualifiedName(namespace$581,qualifiedName$582,doctype$583);}
        if(doctype$583===undefined){doctype$583=$$dOMImplementationAbs.createDocument$defs$doctype(namespace$581,qualifiedName$582,doctype$583);}
        
        var case$584=namespace$581;
        if ($$$cl1.isOfType(namespace$581,{t:$$$cl1.String})) {
            
            var case$585=qualifiedName$582;
            if ($$$cl1.isOfType(qualifiedName$582,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/case$584.valueOf()/*NULL PARAM!*/,case$585.valueOf()/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'11:69-11:70','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(qualifiedName$582,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/case$584.valueOf()/*NULL PARAM!*/,case$585.$native/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'16:76-16:77','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$581,{t:$$$cjl361.JSString})) {
            
            var case$586=qualifiedName$582;
            if ($$$cl1.isOfType(qualifiedName$582,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/case$584.$native/*NULL PARAM!*/,case$586.valueOf()/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'24:76-24:77','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(qualifiedName$582,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/case$584.$native/*NULL PARAM!*/,case$586.$native/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'29:83-29:84','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$581,{t:$$$cl1.Null})) {
            
            var case$587=qualifiedName$582;
            if ($$$cl1.isOfType(qualifiedName$582,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/null/*NULL PARAM!*/,case$587.valueOf()/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'37:64-37:65','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(qualifiedName$582,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/null/*NULL PARAM!*/,case$587.$native/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'42:71-42:72','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }
        }
    }
    $$dOMImplementationAbs.createDocument=createDocument;
    createDocument.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Document},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]}]},$an:function(){return[];}},{$nm:'qualifiedName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'doctype',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:DocumentType}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DOMImplementationAbs','$m','createDocument']};};
    function createDocumentType(qualifiedName$588,publicId$589,systemId$590){
        
        var case$591=qualifiedName$588;
        if ($$$cl1.isOfType(qualifiedName$588,{t:$$$cl1.String})) {
            
            var case$592=publicId$589;
            if ($$$cl1.isOfType(publicId$589,{t:$$$cl1.String})) {
                
                var case$593=systemId$590;
                if ($$$cl1.isOfType(systemId$590,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$591.valueOf()/*NULL PARAM!*/,case$592.valueOf()/*NULL PARAM!*/,case$593.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(systemId$590,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$591.valueOf()/*NULL PARAM!*/,case$592.valueOf()/*NULL PARAM!*/,case$593.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(publicId$589,{t:$$$cjl361.JSString})) {
                
                var case$594=systemId$590;
                if ($$$cl1.isOfType(systemId$590,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$591.valueOf()/*NULL PARAM!*/,case$592.$native/*NULL PARAM!*/,case$594.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(systemId$590,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$591.valueOf()/*NULL PARAM!*/,case$592.$native/*NULL PARAM!*/,case$594.$native));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(qualifiedName$588,{t:$$$cjl361.JSString})) {
            
            var case$595=publicId$589;
            if ($$$cl1.isOfType(publicId$589,{t:$$$cl1.String})) {
                
                var case$596=systemId$590;
                if ($$$cl1.isOfType(systemId$590,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$591.$native/*NULL PARAM!*/,case$595.valueOf()/*NULL PARAM!*/,case$596.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(systemId$590,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$591.$native/*NULL PARAM!*/,case$595.valueOf()/*NULL PARAM!*/,case$596.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(publicId$589,{t:$$$cjl361.JSString})) {
                
                var case$597=systemId$590;
                if ($$$cl1.isOfType(systemId$590,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$591.$native/*NULL PARAM!*/,case$595.$native/*NULL PARAM!*/,case$597.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(systemId$590,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$591.$native/*NULL PARAM!*/,case$595.$native/*NULL PARAM!*/,case$597.$native));
                    /*End dynamic block*/
                }
            }
        }
    }
    $$dOMImplementationAbs.createDocumentType=createDocumentType;
    createDocumentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentType},$ps:[{$nm:'qualifiedName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'publicId',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'systemId',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DOMImplementationAbs','$m','createDocumentType']};};
    $$dOMImplementationAbs.hasFeature$defs$version=function(feature$598,version$599){return $$$cl1.String("",0);};
    function hasFeature(feature$598,version$599){
        if(version$599===undefined){version$599=$$dOMImplementationAbs.hasFeature$defs$version(feature$598,version$599);}
        var has$600;
        
        var case$601=feature$598;
        if ($$$cl1.isOfType(feature$598,{t:$$$cl1.String})) {
            
            var case$602=version$599;
            if ($$$cl1.isOfType(version$599,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                has$600=$$dOMImplementationAbs.$native.hasFeature(/*NULL PARAM!*/case$601.valueOf()/*NULL PARAM!*/,case$602.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(version$599,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                has$600=$$dOMImplementationAbs.$native.hasFeature(/*NULL PARAM!*/case$601.valueOf()/*NULL PARAM!*/,case$602.$native);/*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(feature$598,{t:$$$cjl361.JSString})) {
            
            var case$603=version$599;
            if ($$$cl1.isOfType(version$599,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                has$600=$$dOMImplementationAbs.$native.hasFeature(/*NULL PARAM!*/case$601.$native/*NULL PARAM!*/,case$603.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(version$599,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                has$600=$$dOMImplementationAbs.$native.hasFeature(/*NULL PARAM!*/case$601.$native/*NULL PARAM!*/,case$603.$native);/*End dynamic block*/
            }
        }
        /*Begin dynamic block*/
        if(has$600){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$dOMImplementationAbs.hasFeature=hasFeature;
    hasFeature.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'feature',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'version',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DOMImplementationAbs','$m','hasFeature']};};
    return $$dOMImplementationAbs;
}
DOMImplementationAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','DOMImplementationAbs']};};
exports.DOMImplementationAbs=DOMImplementationAbs;
function $init$DOMImplementationAbs(){
    if (DOMImplementationAbs.$$===undefined){
        $$$cl1.initTypeProto(DOMImplementationAbs,'ceylon.js.dom::DOMImplementationAbs',$$$cjl361.JSObjectAbs);
    }
    return DOMImplementationAbs;
}
exports.$init$DOMImplementationAbs=$init$DOMImplementationAbs;
$init$DOMImplementationAbs();
function DOMImplementation(n$604, $$dOMImplementation){
    $init$DOMImplementation();
    if ($$dOMImplementation===undefined)$$dOMImplementation=new DOMImplementation.$$;
    $$dOMImplementation.n$604_=n$604;
    DOMImplementationAbs($$dOMImplementation);
    $$$cl1.defineAttr($$dOMImplementation,'n$604',function(){return this.n$604_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DOMImplementation,d:['ceylon.js.dom','DOMImplementation','$at','n']};});
    $$dOMImplementation.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DOMImplementation,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','DOMImplementation','$at','native']};}};
    /*Begin dynamic block*/
    $$dOMImplementation.$native=n$604;/*End dynamic block*/
    return $$dOMImplementation;
}
DOMImplementation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DOMImplementationAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DOMImplementation']};};
exports.DOMImplementation=DOMImplementation;
function $init$DOMImplementation(){
    if (DOMImplementation.$$===undefined){
        $$$cl1.initTypeProto(DOMImplementation,'ceylon.js.dom::DOMImplementation',$init$DOMImplementationAbs());
    }
    return DOMImplementation;
}
exports.$init$DOMImplementation=$init$DOMImplementation;
$init$DOMImplementation();
function ElementAbs($$elementAbs){
    $init$ElementAbs();
    if ($$elementAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$elementAbs);
    function getAttribute(attributeName$605){
        var attr$606;
        
        var case$607=attributeName$605;
        if ($$$cl1.isOfType(attributeName$605,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            attr$606=$$elementAbs.$native.getAttribute(/*NULL PARAM!*/case$607.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(attributeName$605,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            attr$606=$$elementAbs.$native.getAttribute(/*NULL PARAM!*/case$607.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(((tmpvar$608=attr$606,tmpvar$609=null,(tmpvar$608.equals&&!tmpvar$608.equals(tmpvar$609))||tmpvar$608!==tmpvar$609)||(tmpvar$610=attr$606,tmpvar$611=$$$cl1.String("",0),(tmpvar$610.equals&&!tmpvar$610.equals(tmpvar$611))||tmpvar$610!==tmpvar$611))){
            return $$$cjl361.JSString(attr$606);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$elementAbs.getAttribute=getAttribute;
    getAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[{$nm:'attributeName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','getAttribute']};};
    function getAttributeNS(namespace$612,attributeName$613){
        var attr$614;
        
        var case$615=namespace$612;
        if ($$$cl1.isOfType(namespace$612,{t:$$$cl1.String})) {
            
            var case$616=attributeName$613;
            if ($$$cl1.isOfType(attributeName$613,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                attr$614=$$elementAbs.$native.getAttributeNS(/*NULL PARAM!*/case$615.valueOf()/*NULL PARAM!*/,case$616.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(attributeName$613,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                attr$614=$$elementAbs.$native.getAttributeNS(/*NULL PARAM!*/case$615.valueOf()/*NULL PARAM!*/,case$616.$native);/*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$612,{t:$$$cjl361.JSString})) {
            
            var case$617=attributeName$613;
            if ($$$cl1.isOfType(attributeName$613,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                attr$614=$$elementAbs.$native.getAttributeNS(/*NULL PARAM!*/case$615.$native/*NULL PARAM!*/,case$617.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(attributeName$613,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                attr$614=$$elementAbs.$native.getAttributeNS(/*NULL PARAM!*/case$615.$native/*NULL PARAM!*/,case$617.$native);/*End dynamic block*/
            }
        }
        /*Begin dynamic block*/
        if(((tmpvar$618=attr$614,tmpvar$619=null,(tmpvar$618.equals&&!tmpvar$618.equals(tmpvar$619))||tmpvar$618!==tmpvar$619)||(tmpvar$620=attr$614,tmpvar$621=$$$cl1.String("",0),(tmpvar$620.equals&&!tmpvar$620.equals(tmpvar$621))||tmpvar$620!==tmpvar$621))){
            return $$$cjl361.JSString(attr$614);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$elementAbs.getAttributeNS=getAttributeNS;
    getAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'attributeName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','getAttributeNS']};};
    $$elementAbs.getElementsByTagName$defs$tagName=function(tagName$622){return $$$cl1.String("*",1);};
    function getElementsByTagName(tagName$622){
        if(tagName$622===undefined){tagName$622=$$elementAbs.getElementsByTagName$defs$tagName(tagName$622);}
        
        var case$623=tagName$622;
        if ($$$cl1.isOfType(tagName$622,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return HTMLCollection($$elementAbs.$native.getElementsByTagName(/*NULL PARAM!*/case$623.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(tagName$622,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            return HTMLCollection($$elementAbs.$native.getElementsByTagName(/*NULL PARAM!*/case$623.$native));
            /*End dynamic block*/
        }
    }
    $$elementAbs.getElementsByTagName=getElementsByTagName;
    getElementsByTagName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'tagName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','getElementsByTagName']};};
    $$elementAbs.getElementsByTagNameNS$defs$tagName=function(namespace$624,tagName$625){return $$$cl1.String("*",1);};
    function getElementsByTagNameNS(namespace$624,tagName$625){
        if(tagName$625===undefined){tagName$625=$$elementAbs.getElementsByTagNameNS$defs$tagName(namespace$624,tagName$625);}
        
        var case$626=namespace$624;
        if ($$$cl1.isOfType(namespace$624,{t:$$$cl1.String})) {
            
            var case$627=tagName$625;
            if ($$$cl1.isOfType(tagName$625,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$626.valueOf()/*NULL PARAM!*/,case$627.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(tagName$625,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$626.valueOf()/*NULL PARAM!*/,case$627.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$624,{t:$$$cjl361.JSString})) {
            
            var case$628=tagName$625;
            if ($$$cl1.isOfType(tagName$625,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$626.$native/*NULL PARAM!*/,case$628.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(tagName$625,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$626.$native/*NULL PARAM!*/,case$628.$native));
                /*End dynamic block*/
            }
        }
    }
    $$elementAbs.getElementsByTagNameNS=getElementsByTagNameNS;
    getElementsByTagNameNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'tagName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','getElementsByTagNameNS']};};
    function hasAttribute(attName$629){
        var has$630;
        
        var case$631=attName$629;
        if ($$$cl1.isOfType(attName$629,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            has$630=$$elementAbs.$native.hasAttribute(/*NULL PARAM!*/case$631.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(attName$629,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            has$630=$$elementAbs.$native.hasAttribute(/*NULL PARAM!*/case$631.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(has$630){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$elementAbs.hasAttribute=hasAttribute;
    hasAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'attName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','hasAttribute']};};
    function hasAttributeNS(namespace$632,attName$633){
        var has$634;
        
        var case$635=namespace$632;
        if ($$$cl1.isOfType(namespace$632,{t:$$$cl1.String})) {
            
            var case$636=attName$633;
            if ($$$cl1.isOfType(attName$633,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                has$634=$$elementAbs.$native.hasAttributeNS(/*NULL PARAM!*/case$635.valueOf()/*NULL PARAM!*/,case$636.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(attName$633,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                has$634=$$elementAbs.$native.hasAttributeNS(/*NULL PARAM!*/case$635.valueOf()/*NULL PARAM!*/,case$636.$native);/*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$632,{t:$$$cjl361.JSString})) {
            
            var case$637=attName$633;
            if ($$$cl1.isOfType(attName$633,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                has$634=$$elementAbs.$native.hasAttributeNS(/*NULL PARAM!*/case$635.$native/*NULL PARAM!*/,case$637.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(attName$633,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                has$634=$$elementAbs.$native.hasAttributeNS(/*NULL PARAM!*/case$635.$native/*NULL PARAM!*/,case$637.$native);/*End dynamic block*/
            }
        }
        /*Begin dynamic block*/
        if(has$634){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$elementAbs.hasAttributeNS=hasAttributeNS;
    hasAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'attName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','hasAttributeNS']};};
    function removeAttribute(attrName$638){
        
        var case$639=attrName$638;
        if ($$$cl1.isOfType(attrName$638,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$639.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(attrName$638,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$639.$native);
            /*End dynamic block*/
        }
    }
    $$elementAbs.removeAttribute=removeAttribute;
    removeAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'attrName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','removeAttribute']};};
    function removeAttributeNS(namespace$640,attrName$641){
        
        var case$642=namespace$640;
        if ($$$cl1.isOfType(namespace$640,{t:$$$cl1.String})) {
            
            var case$643=attrName$641;
            if ($$$cl1.isOfType(attrName$641,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$642.valueOf()/*NULL PARAM!*/,case$643.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(attrName$641,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$642.valueOf()/*NULL PARAM!*/,case$643.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$640,{t:$$$cjl361.JSString})) {
            
            var case$644=attrName$641;
            if ($$$cl1.isOfType(attrName$641,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$642.$native/*NULL PARAM!*/,case$644.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(attrName$641,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$642.$native/*NULL PARAM!*/,case$644.$native);
                /*End dynamic block*/
            }
        }
    }
    $$elementAbs.removeAttributeNS=removeAttributeNS;
    removeAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'attrName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','removeAttributeNS']};};
    function setAttribute(name$645,val$646){
        
        var case$647=name$645;
        if ($$$cl1.isOfType(name$645,{t:$$$cl1.String})) {
            
            var case$648=val$646;
            if ($$$cl1.isOfType(val$646,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.setAttribute(/*NULL PARAM!*/case$647.valueOf()/*NULL PARAM!*/,case$648.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$646,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.setAttribute(/*NULL PARAM!*/case$647.valueOf()/*NULL PARAM!*/,case$648.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(name$645,{t:$$$cjl361.JSString})) {
            
            var case$649=val$646;
            if ($$$cl1.isOfType(val$646,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.setAttribute(/*NULL PARAM!*/case$647.$native/*NULL PARAM!*/,case$649.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$646,{t:$$$cjl361.JSString})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.setAttribute(/*NULL PARAM!*/case$647.$native/*NULL PARAM!*/,case$649.$native);
                /*End dynamic block*/
            }
        }
    }
    $$elementAbs.setAttribute=setAttribute;
    setAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','setAttribute']};};
    function setAttributeNS(namespace$650,name$651,val$652){
        
        var case$653=namespace$650;
        if ($$$cl1.isOfType(namespace$650,{t:$$$cl1.String})) {
            
            var case$654=name$651;
            if ($$$cl1.isOfType(name$651,{t:$$$cl1.String})) {
                
                var case$655=val$652;
                if ($$$cl1.isOfType(val$652,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$653.valueOf()/*NULL PARAM!*/,case$654.valueOf()/*NULL PARAM!*/,case$655.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(val$652,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$653.valueOf()/*NULL PARAM!*/,case$654.valueOf()/*NULL PARAM!*/,case$655.$native);
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(name$651,{t:$$$cjl361.JSString})) {
                
                var case$656=val$652;
                if ($$$cl1.isOfType(val$652,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$653.valueOf()/*NULL PARAM!*/,case$654.$native/*NULL PARAM!*/,case$656.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(val$652,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$653.valueOf()/*NULL PARAM!*/,case$654.$native/*NULL PARAM!*/,case$656.$native);
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(namespace$650,{t:$$$cjl361.JSString})) {
            
            var case$657=name$651;
            if ($$$cl1.isOfType(name$651,{t:$$$cl1.String})) {
                
                var case$658=val$652;
                if ($$$cl1.isOfType(val$652,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$653.$native/*NULL PARAM!*/,case$657.valueOf()/*NULL PARAM!*/,case$658.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(val$652,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$653.$native/*NULL PARAM!*/,case$657.valueOf()/*NULL PARAM!*/,case$658.$native);
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(name$651,{t:$$$cjl361.JSString})) {
                
                var case$659=val$652;
                if ($$$cl1.isOfType(val$652,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$653.$native/*NULL PARAM!*/,case$657.$native/*NULL PARAM!*/,case$659.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(val$652,{t:$$$cjl361.JSString})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$653.$native/*NULL PARAM!*/,case$657.$native/*NULL PARAM!*/,case$659.$native);
                    /*End dynamic block*/
                }
            }
        }
    }
    $$elementAbs.setAttributeNS=setAttributeNS;
    setAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','setAttributeNS']};};
    function tagName(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$elementAbs.$native.tagName);
        /*End dynamic block*/
    }
    $$elementAbs.tagName=tagName;
    tagName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','tagName']};};
    return $$elementAbs;
}
ElementAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','ElementAbs']};};
exports.ElementAbs=ElementAbs;
function $init$ElementAbs(){
    if (ElementAbs.$$===undefined){
        $$$cl1.initTypeProto(ElementAbs,'ceylon.js.dom::ElementAbs',$init$NodeAbs());
    }
    return ElementAbs;
}
exports.$init$ElementAbs=$init$ElementAbs;
$init$ElementAbs();
function Element(n$660, $$element){
    $init$Element();
    if ($$element===undefined)$$element=new Element.$$;
    $$element.n$660_=n$660;
    ElementAbs($$element);
    $$$cl1.defineAttr($$element,'n$660',function(){return this.n$660_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Element,d:['ceylon.js.dom','Element','$at','n']};});
    $$element.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Element,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Element','$at','native']};}};
    /*Begin dynamic block*/
    $$element.$native=n$660;/*End dynamic block*/
    return $$element;
}
Element.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:ElementAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','Element']};};
exports.Element=Element;
function $init$Element(){
    if (Element.$$===undefined){
        $$$cl1.initTypeProto(Element,'ceylon.js.dom::Element',$init$ElementAbs());
    }
    return Element;
}
exports.$init$Element=$init$Element;
$init$Element();
var $$$cjj661=require('ceylon/js/json/1.0.0/ceylon.js.json-1.0.0');
$$$cl1.$addmod$($$$cjj661,'ceylon.js.json/1.0.0');
function EventPhase(num, $$eventPhase){
    $init$EventPhase();
    if ($$eventPhase===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$eventPhase.num_=num;
    $$$cl1.defineAttr($$eventPhase,'num',function(){return this.num_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:EventPhase,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventPhase','$at','num']};});
    return $$eventPhase;
}
EventPhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','EventPhase']};};
exports.EventPhase=EventPhase;
function $init$EventPhase(){
    if (EventPhase.$$===undefined){
        $$$cl1.initTypeProto(EventPhase,'ceylon.js.dom::EventPhase',$$$cl1.Basic);
    }
    return EventPhase;
}
exports.$init$EventPhase=$init$EventPhase;
$init$EventPhase();
function none$662(){
    var $$none=new none$662.$$;
    EventPhase((0),$$none);
    return $$none;
}
function $init$none$662(){
    if (none$662.$$===undefined){
        $$$cl1.initTypeProto(none$662,'ceylon.js.dom::none',$init$EventPhase());
    }
    return none$662;
}
exports.$init$none$662=$init$none$662;
$init$none$662();
var none$663;
function getNone(){
    if (none$663===undefined)none$663=$init$none$662()();
    return none$663;
}
exports.getNone=getNone;
getNone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:none$662},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','none']};};
$prop$getNone={get:getNone,$$metamodel$$:getNone.$$metamodel$$};
exports.$prop$getNone=$prop$getNone;
function capturePhase$664(){
    var $$capturePhase=new capturePhase$664.$$;
    EventPhase((1),$$capturePhase);
    return $$capturePhase;
}
function $init$capturePhase$664(){
    if (capturePhase$664.$$===undefined){
        $$$cl1.initTypeProto(capturePhase$664,'ceylon.js.dom::capturePhase',$init$EventPhase());
    }
    return capturePhase$664;
}
exports.$init$capturePhase$664=$init$capturePhase$664;
$init$capturePhase$664();
var capturePhase$665;
function getCapturePhase(){
    if (capturePhase$665===undefined)capturePhase$665=$init$capturePhase$664()();
    return capturePhase$665;
}
exports.getCapturePhase=getCapturePhase;
getCapturePhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:capturePhase$664},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','capturePhase']};};
$prop$getCapturePhase={get:getCapturePhase,$$metamodel$$:getCapturePhase.$$metamodel$$};
exports.$prop$getCapturePhase=$prop$getCapturePhase;
function atTarget$666(){
    var $$atTarget=new atTarget$666.$$;
    EventPhase((2),$$atTarget);
    return $$atTarget;
}
function $init$atTarget$666(){
    if (atTarget$666.$$===undefined){
        $$$cl1.initTypeProto(atTarget$666,'ceylon.js.dom::atTarget',$init$EventPhase());
    }
    return atTarget$666;
}
exports.$init$atTarget$666=$init$atTarget$666;
$init$atTarget$666();
var atTarget$667;
function getAtTarget(){
    if (atTarget$667===undefined)atTarget$667=$init$atTarget$666()();
    return atTarget$667;
}
exports.getAtTarget=getAtTarget;
getAtTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:atTarget$666},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','atTarget']};};
$prop$getAtTarget={get:getAtTarget,$$metamodel$$:getAtTarget.$$metamodel$$};
exports.$prop$getAtTarget=$prop$getAtTarget;
function bubblingPhase$668(){
    var $$bubblingPhase=new bubblingPhase$668.$$;
    EventPhase((3),$$bubblingPhase);
    return $$bubblingPhase;
}
function $init$bubblingPhase$668(){
    if (bubblingPhase$668.$$===undefined){
        $$$cl1.initTypeProto(bubblingPhase$668,'ceylon.js.dom::bubblingPhase',$init$EventPhase());
    }
    return bubblingPhase$668;
}
exports.$init$bubblingPhase$668=$init$bubblingPhase$668;
$init$bubblingPhase$668();
var bubblingPhase$669;
function getBubblingPhase(){
    if (bubblingPhase$669===undefined)bubblingPhase$669=$init$bubblingPhase$668()();
    return bubblingPhase$669;
}
exports.getBubblingPhase=getBubblingPhase;
getBubblingPhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:bubblingPhase$668},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','bubblingPhase']};};
$prop$getBubblingPhase={get:getBubblingPhase,$$metamodel$$:getBubblingPhase.$$metamodel$$};
exports.$prop$getBubblingPhase=$prop$getBubblingPhase;
function EventInit(bubbles, cancelable, $$eventInit){
    $init$EventInit();
    if ($$eventInit===undefined)$$eventInit=new EventInit.$$;
    $$eventInit.bubbles_=bubbles;
    $$eventInit.cancelable_=cancelable;
    $$$cl1.defineAttr($$eventInit,'bubbles',function(){return this.bubbles_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:EventInit,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventInit','$at','bubbles']};});
    $$$cl1.defineAttr($$eventInit,'cancelable',function(){return this.cancelable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:EventInit,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventInit','$at','cancelable']};});
    function toJson(){
        var json$670=(values$671=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("bubbles",7),$$eventInit.bubbles,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("cancelable",10),$$eventInit.cancelable,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}}}}),$$$cjj661.JSON(values$671));
        var values$671;
        return json$670.toJson();
    }
    $$eventInit.toJson=toJson;
    toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj661.JSJSON},$ps:[],$cont:EventInit,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventInit','$m','toJson']};};
    return $$eventInit;
}
EventInit.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventInit']};};
exports.EventInit=EventInit;
function $init$EventInit(){
    if (EventInit.$$===undefined){
        $$$cl1.initTypeProto(EventInit,'ceylon.js.dom::EventInit',$$$cl1.Basic);
    }
    return EventInit;
}
exports.$init$EventInit=$init$EventInit;
$init$EventInit();
function createEvent(type$672,options$673){
    
    var case$674=type$672;
    if ($$$cl1.isOfType(type$672,{t:$$$cl1.String})) {
        /*Begin dynamic block*/
        return Event((typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'26:16-26:20','event.ceylon'):Event)(/*NULL PARAM!*/case$674.valueOf()/*NULL PARAM!*/,options$673.toJson()));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(type$672,{t:$$$cjl361.JSString})) {
        /*Begin dynamic block*/
        return Event((typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'31:16-31:20','event.ceylon'):Event)(/*NULL PARAM!*/case$674.$native/*NULL PARAM!*/,options$673.toJson()));
        /*End dynamic block*/
    }
}
exports.createEvent=createEvent;
createEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Event},$ps:[{$nm:'type',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'options',$mt:'prm',$t:{t:EventInit},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','createEvent']};};
function EventAbs($$eventAbs){
    $init$EventAbs();
    if ($$eventAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$eventAbs);
    function type(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$eventAbs.$native.type);
        /*End dynamic block*/
    }
    $$eventAbs.type=type;
    type.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','type']};};
    function target(){
        var target$675;
        /*Begin dynamic block*/
        target$675=$$eventAbs.$native.target;if((tmpvar$676=target$675,tmpvar$677=null,(tmpvar$676.equals&&!tmpvar$676.equals(tmpvar$677))||tmpvar$676!==tmpvar$677)){
            return EventTarget(target$675);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$eventAbs.target=target;
    target.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:EventTarget}]},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','target']};};
    function currentTarget(){
        var target$678;
        /*Begin dynamic block*/
        target$678=$$eventAbs.$native.currentTarget;if((tmpvar$679=target$678,tmpvar$680=null,(tmpvar$679.equals&&!tmpvar$679.equals(tmpvar$680))||tmpvar$679!==tmpvar$680)){
            return EventTarget(target$678);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$eventAbs.currentTarget=currentTarget;
    currentTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:EventTarget}]},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','currentTarget']};};
    function eventPhase(){
        /*Begin dynamic block*/
        var eventPhase$681=$$eventAbs.$native.eventPhase;
        $prop$getEventPhase$681={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','EventAbs','$m','eventPhase','$at','eventPhase']};}};
        $prop$getEventPhase$681.get=function(){return eventPhase$681};
        if((tmpvar$682=eventPhase$681,tmpvar$683=(typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'72:30-72:34','event.ceylon'):Event).NONE,(tmpvar$682.equals&&tmpvar$682.equals(tmpvar$683))||tmpvar$682===tmpvar$683)){
            return getNone();
        }else {
            if((tmpvar$684=eventPhase$681,tmpvar$685=(typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'74:37-74:41','event.ceylon'):Event).CAPTURING_PHASE,(tmpvar$684.equals&&tmpvar$684.equals(tmpvar$685))||tmpvar$684===tmpvar$685)){
                return getCapturePhase();
            }else {
                if((tmpvar$686=eventPhase$681,tmpvar$687=(typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'76:37-76:41','event.ceylon'):Event).AT_TARGET,(tmpvar$686.equals&&tmpvar$686.equals(tmpvar$687))||tmpvar$686===tmpvar$687)){
                    return getAtTarget();
                }else {
                    return getBubblingPhase();
                }
            }
        }/*End dynamic block*/
    }
    $$eventAbs.eventPhase=eventPhase;
    eventPhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:EventPhase},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','eventPhase']};};
    function stopPropagation(){
        /*Begin dynamic block*/
        $$eventAbs.$native.stopPropagation();
        /*End dynamic block*/
    }
    $$eventAbs.stopPropagation=stopPropagation;
    stopPropagation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','stopPropagation']};};
    function stopImmediatePropagation(){
        /*Begin dynamic block*/
        $$eventAbs.$native.stopImmediatePropagation();
        /*End dynamic block*/
    }
    $$eventAbs.stopImmediatePropagation=stopImmediatePropagation;
    stopImmediatePropagation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','stopImmediatePropagation']};};
    function bubbles(){
        /*Begin dynamic block*/
        if($$eventAbs.$native.bubbles){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$eventAbs.bubbles=bubbles;
    bubbles.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','bubbles']};};
    function cancelable(){
        /*Begin dynamic block*/
        if($$eventAbs.$native.cancelable){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$eventAbs.cancelable=cancelable;
    cancelable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','cancelable']};};
    function preventDefault(){
        /*Begin dynamic block*/
        $$eventAbs.$native.preventDefault();
        /*End dynamic block*/
    }
    $$eventAbs.preventDefault=preventDefault;
    preventDefault.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','preventDefault']};};
    function defaultPrevented(){
        /*Begin dynamic block*/
        if($$eventAbs.$native.defaultPrevented){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$eventAbs.defaultPrevented=defaultPrevented;
    defaultPrevented.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','defaultPrevented']};};
    function isTrusted(){
        /*Begin dynamic block*/
        if($$eventAbs.$native.isTrusted){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$eventAbs.isTrusted=isTrusted;
    isTrusted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','isTrusted']};};
    function timeStamp(){
        /*Begin dynamic block*/
        return $$$cjl361.JSDate($$eventAbs.$native.timeStamp);
        /*End dynamic block*/
    }
    $$eventAbs.timeStamp=timeStamp;
    timeStamp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSDate},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','timeStamp']};};
    function initEvent(type$688,bubbles$689,cancelable$690){
        
        var case$691=type$688;
        if ($$$cl1.isOfType(type$688,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$eventAbs.$native.initEvent(/*NULL PARAM!*/case$691.valueOf()/*NULL PARAM!*/,(typeof callback==='undefined'||callback===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: callback")),'152:36-152:43','event.ceylon'):callback)/*NULL PARAM!*/,(typeof capture==='undefined'||capture===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: capture")),'152:46-152:52','event.ceylon'):capture));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(type$688,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$eventAbs.$native.initEvent(/*NULL PARAM!*/case$691.$native/*NULL PARAM!*/,(typeof callback==='undefined'||callback===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: callback")),'157:43-157:50','event.ceylon'):callback)/*NULL PARAM!*/,(typeof capture==='undefined'||capture===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: capture")),'157:53-157:59','event.ceylon'):capture));
            /*End dynamic block*/
        }
    }
    $$eventAbs.initEvent=initEvent;
    initEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'bubbles',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'cancelable',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','initEvent']};};
    return $$eventAbs;
}
EventAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','EventAbs']};};
exports.EventAbs=EventAbs;
function $init$EventAbs(){
    if (EventAbs.$$===undefined){
        $$$cl1.initTypeProto(EventAbs,'ceylon.js.dom::EventAbs',$$$cjl361.JSObjectAbs);
    }
    return EventAbs;
}
exports.$init$EventAbs=$init$EventAbs;
$init$EventAbs();
function Event(n$692, $$event){
    $init$Event();
    if ($$event===undefined)$$event=new Event.$$;
    $$event.n$692_=n$692;
    EventAbs($$event);
    $$$cl1.defineAttr($$event,'n$692',function(){return this.n$692_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Event,d:['ceylon.js.dom','Event','$at','n']};});
    $$event.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Event,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Event','$at','native']};}};
    /*Begin dynamic block*/
    $$event.$native=n$692;/*End dynamic block*/
    return $$event;
}
Event.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:EventAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','Event']};};
exports.Event=Event;
function $init$Event(){
    if (Event.$$===undefined){
        $$$cl1.initTypeProto(Event,'ceylon.js.dom::Event',$init$EventAbs());
    }
    return Event;
}
exports.$init$Event=$init$Event;
$init$Event();
function EventTargetAbs($$eventTargetAbs){
    $init$EventTargetAbs();
    if ($$eventTargetAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$eventTargetAbs);
    $$eventTargetAbs.addEventListener$defs$capture=function(type$693,callback$694,capture$695){return false;};
    function addEventListener(type$693,callback$694,capture$695){
        if(capture$695===undefined){capture$695=$$eventTargetAbs.addEventListener$defs$capture(type$693,callback$694,capture$695);}
        
        var case$696=type$693;
        if ($$$cl1.isOfType(type$693,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$eventTargetAbs.$native.addEventListener(/*NULL PARAM!*/case$696.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$694,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Event},Element:{t:Event}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,capture$695);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(type$693,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$eventTargetAbs.$native.addEventListener(/*NULL PARAM!*/case$696.$native/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$694,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Event},Element:{t:Event}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,capture$695);
            /*End dynamic block*/
        }
    }
    $$eventTargetAbs.addEventListener=addEventListener;
    addEventListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'capture',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventTargetAbs','$m','addEventListener']};};
    $$eventTargetAbs.removeEventListener$defs$capture=function(type$697,callback$698,capture$699){return false;};
    function removeEventListener(type$697,callback$698,capture$699){
        if(capture$699===undefined){capture$699=$$eventTargetAbs.removeEventListener$defs$capture(type$697,callback$698,capture$699);}
        
        var case$700=type$697;
        if ($$$cl1.isOfType(type$697,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$eventTargetAbs.$native.removeEventListener(/*NULL PARAM!*/case$700.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$698,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Event},Element:{t:Event}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,capture$699);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(type$697,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$eventTargetAbs.$native.removeEventListener(/*NULL PARAM!*/case$700.$native/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$698,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Event},Element:{t:Event}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,capture$699);
            /*End dynamic block*/
        }
    }
    $$eventTargetAbs.removeEventListener=removeEventListener;
    removeEventListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'capture',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventTargetAbs','$m','removeEventListener']};};
    function dispatchEvent(event$701){
        /*Begin dynamic block*/
        if($$eventTargetAbs.$native.dispatchEvent(/*NULL PARAM!*/event$701)){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$eventTargetAbs.dispatchEvent=dispatchEvent;
    dispatchEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventTargetAbs','$m','dispatchEvent']};};
    return $$eventTargetAbs;
}
EventTargetAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','EventTargetAbs']};};
exports.EventTargetAbs=EventTargetAbs;
function $init$EventTargetAbs(){
    if (EventTargetAbs.$$===undefined){
        $$$cl1.initTypeProto(EventTargetAbs,'ceylon.js.dom::EventTargetAbs',$$$cjl361.JSObjectAbs);
    }
    return EventTargetAbs;
}
exports.$init$EventTargetAbs=$init$EventTargetAbs;
$init$EventTargetAbs();
function EventTarget(n$702, $$eventTarget){
    $init$EventTarget();
    if ($$eventTarget===undefined)$$eventTarget=new EventTarget.$$;
    $$eventTarget.n$702_=n$702;
    EventTargetAbs($$eventTarget);
    $$$cl1.defineAttr($$eventTarget,'n$702',function(){return this.n$702_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:EventTarget,d:['ceylon.js.dom','EventTarget','$at','n']};});
    $$eventTarget.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:EventTarget,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','EventTarget','$at','native']};}};
    /*Begin dynamic block*/
    $$eventTarget.$native=n$702;/*End dynamic block*/
    return $$eventTarget;
}
EventTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:EventTargetAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventTarget']};};
exports.EventTarget=EventTarget;
function $init$EventTarget(){
    if (EventTarget.$$===undefined){
        $$$cl1.initTypeProto(EventTarget,'ceylon.js.dom::EventTarget',$init$EventTargetAbs());
    }
    return EventTarget;
}
exports.$init$EventTarget=$init$EventTarget;
$init$EventTarget();
function HTMLCollectionAbs($$hTMLCollectionAbs){
    $init$HTMLCollectionAbs();
    if ($$hTMLCollectionAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$hTMLCollectionAbs);
    function length(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$hTMLCollectionAbs.$native.length);
        /*End dynamic block*/
    }
    $$hTMLCollectionAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:HTMLCollectionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','HTMLCollectionAbs','$m','length']};};
    function item(index$703){
        var item$704;
        
        var case$705=index$703;
        if ($$$cl1.isOfType(index$703,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            item$704=$$hTMLCollectionAbs.$native.item(/*NULL PARAM!*/case$705);/*End dynamic block*/
        }else if ($$$cl1.isOfType(index$703,{t:$$$cjl361.JSNumber})) {
            /*Begin dynamic block*/
            item$704=$$hTMLCollectionAbs.$native.item(/*NULL PARAM!*/case$705.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if((tmpvar$706=item$704,tmpvar$707=null,(tmpvar$706.equals&&!tmpvar$706.equals(tmpvar$707))||tmpvar$706!==tmpvar$707)){
            return Element(item$704);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$hTMLCollectionAbs.item=item;
    item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Element}]},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}}],$cont:HTMLCollectionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','HTMLCollectionAbs','$m','item']};};
    function namedItem(name$708){
        var namedItem$709;
        
        var case$710=name$708;
        if ($$$cl1.isOfType(name$708,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            namedItem$709=$$hTMLCollectionAbs.$native.namedItem(/*NULL PARAM!*/case$710.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(name$708,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            namedItem$709=$$hTMLCollectionAbs.$native.namedItem(/*NULL PARAM!*/case$710.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if((tmpvar$711=namedItem$709,tmpvar$712=null,(tmpvar$711.equals&&tmpvar$711.equals(tmpvar$712))||tmpvar$711===tmpvar$712)){
            return $$$cjl361.JSObject(namedItem$709);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$hTMLCollectionAbs.namedItem=namedItem;
    namedItem.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSObject}]},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:HTMLCollectionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','HTMLCollectionAbs','$m','namedItem']};};
    return $$hTMLCollectionAbs;
}
HTMLCollectionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','HTMLCollectionAbs']};};
exports.HTMLCollectionAbs=HTMLCollectionAbs;
function $init$HTMLCollectionAbs(){
    if (HTMLCollectionAbs.$$===undefined){
        $$$cl1.initTypeProto(HTMLCollectionAbs,'ceylon.js.dom::HTMLCollectionAbs',$$$cjl361.JSObjectAbs);
    }
    return HTMLCollectionAbs;
}
exports.$init$HTMLCollectionAbs=$init$HTMLCollectionAbs;
$init$HTMLCollectionAbs();
function HTMLCollection(n$713, $$hTMLCollection){
    $init$HTMLCollection();
    if ($$hTMLCollection===undefined)$$hTMLCollection=new HTMLCollection.$$;
    $$hTMLCollection.n$713_=n$713;
    HTMLCollectionAbs($$hTMLCollection);
    $$$cl1.defineAttr($$hTMLCollection,'n$713',function(){return this.n$713_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:HTMLCollection,d:['ceylon.js.dom','HTMLCollection','$at','n']};});
    $$hTMLCollection.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:HTMLCollection,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','HTMLCollection','$at','native']};}};
    /*Begin dynamic block*/
    $$hTMLCollection.$native=n$713;/*End dynamic block*/
    return $$hTMLCollection;
}
HTMLCollection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:HTMLCollectionAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','HTMLCollection']};};
exports.HTMLCollection=HTMLCollection;
function $init$HTMLCollection(){
    if (HTMLCollection.$$===undefined){
        $$$cl1.initTypeProto(HTMLCollection,'ceylon.js.dom::HTMLCollection',$init$HTMLCollectionAbs());
    }
    return HTMLCollection;
}
exports.$init$HTMLCollection=$init$HTMLCollection;
$init$HTMLCollection();
function getWindow(){
    /*Begin dynamic block*/
    return $$$cjh451.Window((typeof window==='undefined'||window===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: window")),'5:16-5:21','main.ceylon'):window));
    /*End dynamic block*/
}
exports.getWindow=getWindow;
getWindow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjh451.Window},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','getWindow']};};
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("based on the DOM 4 working draft and",36))];};
function NodeType(name$714, $$nodeType){
    $init$NodeType();
    if ($$nodeType===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$nodeType.name$714_=name$714;
    $$$cl1.defineAttr($$nodeType,'name$714',function(){return this.name$714_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:NodeType,d:['ceylon.js.dom','NodeType','$at','name']};});
    return $$nodeType;
}
NodeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','NodeType']};};
exports.NodeType=NodeType;
function $init$NodeType(){
    if (NodeType.$$===undefined){
        $$$cl1.initTypeProto(NodeType,'ceylon.js.dom::NodeType',$$$cl1.Basic);
    }
    return NodeType;
}
exports.$init$NodeType=$init$NodeType;
$init$NodeType();
function attributeNode$715(){
    var $$attributeNode=new attributeNode$715.$$;
    NodeType($$$cl1.String("attributeNode",13),$$attributeNode);
    return $$attributeNode;
}
function $init$attributeNode$715(){
    if (attributeNode$715.$$===undefined){
        $$$cl1.initTypeProto(attributeNode$715,'ceylon.js.dom::attributeNode',$init$NodeType());
    }
    return attributeNode$715;
}
exports.$init$attributeNode$715=$init$attributeNode$715;
$init$attributeNode$715();
var attributeNode$716;
function getAttributeNode(){
    if (attributeNode$716===undefined)attributeNode$716=$init$attributeNode$715()();
    return attributeNode$716;
}
exports.getAttributeNode=getAttributeNode;
getAttributeNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:attributeNode$715},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','attributeNode']};};
$prop$getAttributeNode={get:getAttributeNode,$$metamodel$$:getAttributeNode.$$metamodel$$};
exports.$prop$getAttributeNode=$prop$getAttributeNode;
function cdataSectionNode$717(){
    var $$cdataSectionNode=new cdataSectionNode$717.$$;
    NodeType($$$cl1.String("cdataSectionNode",16),$$cdataSectionNode);
    return $$cdataSectionNode;
}
function $init$cdataSectionNode$717(){
    if (cdataSectionNode$717.$$===undefined){
        $$$cl1.initTypeProto(cdataSectionNode$717,'ceylon.js.dom::cdataSectionNode',$init$NodeType());
    }
    return cdataSectionNode$717;
}
exports.$init$cdataSectionNode$717=$init$cdataSectionNode$717;
$init$cdataSectionNode$717();
var cdataSectionNode$718;
function getCdataSectionNode(){
    if (cdataSectionNode$718===undefined)cdataSectionNode$718=$init$cdataSectionNode$717()();
    return cdataSectionNode$718;
}
exports.getCdataSectionNode=getCdataSectionNode;
getCdataSectionNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:cdataSectionNode$717},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','cdataSectionNode']};};
$prop$getCdataSectionNode={get:getCdataSectionNode,$$metamodel$$:getCdataSectionNode.$$metamodel$$};
exports.$prop$getCdataSectionNode=$prop$getCdataSectionNode;
function commentNode$719(){
    var $$commentNode=new commentNode$719.$$;
    NodeType($$$cl1.String("commentNode",11),$$commentNode);
    return $$commentNode;
}
function $init$commentNode$719(){
    if (commentNode$719.$$===undefined){
        $$$cl1.initTypeProto(commentNode$719,'ceylon.js.dom::commentNode',$init$NodeType());
    }
    return commentNode$719;
}
exports.$init$commentNode$719=$init$commentNode$719;
$init$commentNode$719();
var commentNode$720;
function getCommentNode(){
    if (commentNode$720===undefined)commentNode$720=$init$commentNode$719()();
    return commentNode$720;
}
exports.getCommentNode=getCommentNode;
getCommentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:commentNode$719},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','commentNode']};};
$prop$getCommentNode={get:getCommentNode,$$metamodel$$:getCommentNode.$$metamodel$$};
exports.$prop$getCommentNode=$prop$getCommentNode;
function documentFragmentNode$721(){
    var $$documentFragmentNode=new documentFragmentNode$721.$$;
    NodeType($$$cl1.String("documentFragmentNode",20),$$documentFragmentNode);
    return $$documentFragmentNode;
}
function $init$documentFragmentNode$721(){
    if (documentFragmentNode$721.$$===undefined){
        $$$cl1.initTypeProto(documentFragmentNode$721,'ceylon.js.dom::documentFragmentNode',$init$NodeType());
    }
    return documentFragmentNode$721;
}
exports.$init$documentFragmentNode$721=$init$documentFragmentNode$721;
$init$documentFragmentNode$721();
var documentFragmentNode$722;
function getDocumentFragmentNode(){
    if (documentFragmentNode$722===undefined)documentFragmentNode$722=$init$documentFragmentNode$721()();
    return documentFragmentNode$722;
}
exports.getDocumentFragmentNode=getDocumentFragmentNode;
getDocumentFragmentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentFragmentNode$721},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentFragmentNode']};};
$prop$getDocumentFragmentNode={get:getDocumentFragmentNode,$$metamodel$$:getDocumentFragmentNode.$$metamodel$$};
exports.$prop$getDocumentFragmentNode=$prop$getDocumentFragmentNode;
function documentNode$723(){
    var $$documentNode=new documentNode$723.$$;
    NodeType($$$cl1.String("documentNode",12),$$documentNode);
    return $$documentNode;
}
function $init$documentNode$723(){
    if (documentNode$723.$$===undefined){
        $$$cl1.initTypeProto(documentNode$723,'ceylon.js.dom::documentNode',$init$NodeType());
    }
    return documentNode$723;
}
exports.$init$documentNode$723=$init$documentNode$723;
$init$documentNode$723();
var documentNode$724;
function getDocumentNode(){
    if (documentNode$724===undefined)documentNode$724=$init$documentNode$723()();
    return documentNode$724;
}
exports.getDocumentNode=getDocumentNode;
getDocumentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentNode$723},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentNode']};};
$prop$getDocumentNode={get:getDocumentNode,$$metamodel$$:getDocumentNode.$$metamodel$$};
exports.$prop$getDocumentNode=$prop$getDocumentNode;
function documentTypeNode$725(){
    var $$documentTypeNode=new documentTypeNode$725.$$;
    NodeType($$$cl1.String("documentTypeNode",16),$$documentTypeNode);
    return $$documentTypeNode;
}
function $init$documentTypeNode$725(){
    if (documentTypeNode$725.$$===undefined){
        $$$cl1.initTypeProto(documentTypeNode$725,'ceylon.js.dom::documentTypeNode',$init$NodeType());
    }
    return documentTypeNode$725;
}
exports.$init$documentTypeNode$725=$init$documentTypeNode$725;
$init$documentTypeNode$725();
var documentTypeNode$726;
function getDocumentTypeNode(){
    if (documentTypeNode$726===undefined)documentTypeNode$726=$init$documentTypeNode$725()();
    return documentTypeNode$726;
}
exports.getDocumentTypeNode=getDocumentTypeNode;
getDocumentTypeNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentTypeNode$725},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentTypeNode']};};
$prop$getDocumentTypeNode={get:getDocumentTypeNode,$$metamodel$$:getDocumentTypeNode.$$metamodel$$};
exports.$prop$getDocumentTypeNode=$prop$getDocumentTypeNode;
function elementNode$727(){
    var $$elementNode=new elementNode$727.$$;
    NodeType($$$cl1.String("elementNode",11),$$elementNode);
    return $$elementNode;
}
function $init$elementNode$727(){
    if (elementNode$727.$$===undefined){
        $$$cl1.initTypeProto(elementNode$727,'ceylon.js.dom::elementNode',$init$NodeType());
    }
    return elementNode$727;
}
exports.$init$elementNode$727=$init$elementNode$727;
$init$elementNode$727();
var elementNode$728;
function getElementNode(){
    if (elementNode$728===undefined)elementNode$728=$init$elementNode$727()();
    return elementNode$728;
}
exports.getElementNode=getElementNode;
getElementNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:elementNode$727},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','elementNode']};};
$prop$getElementNode={get:getElementNode,$$metamodel$$:getElementNode.$$metamodel$$};
exports.$prop$getElementNode=$prop$getElementNode;
function entityNode$729(){
    var $$entityNode=new entityNode$729.$$;
    NodeType($$$cl1.String("entityNode",10),$$entityNode);
    return $$entityNode;
}
function $init$entityNode$729(){
    if (entityNode$729.$$===undefined){
        $$$cl1.initTypeProto(entityNode$729,'ceylon.js.dom::entityNode',$init$NodeType());
    }
    return entityNode$729;
}
exports.$init$entityNode$729=$init$entityNode$729;
$init$entityNode$729();
var entityNode$730;
function getEntityNode(){
    if (entityNode$730===undefined)entityNode$730=$init$entityNode$729()();
    return entityNode$730;
}
exports.getEntityNode=getEntityNode;
getEntityNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:entityNode$729},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','entityNode']};};
$prop$getEntityNode={get:getEntityNode,$$metamodel$$:getEntityNode.$$metamodel$$};
exports.$prop$getEntityNode=$prop$getEntityNode;
function entityReferenceNode$731(){
    var $$entityReferenceNode=new entityReferenceNode$731.$$;
    NodeType($$$cl1.String("entityReferenceNode",19),$$entityReferenceNode);
    return $$entityReferenceNode;
}
function $init$entityReferenceNode$731(){
    if (entityReferenceNode$731.$$===undefined){
        $$$cl1.initTypeProto(entityReferenceNode$731,'ceylon.js.dom::entityReferenceNode',$init$NodeType());
    }
    return entityReferenceNode$731;
}
exports.$init$entityReferenceNode$731=$init$entityReferenceNode$731;
$init$entityReferenceNode$731();
var entityReferenceNode$732;
function getEntityReferenceNode(){
    if (entityReferenceNode$732===undefined)entityReferenceNode$732=$init$entityReferenceNode$731()();
    return entityReferenceNode$732;
}
exports.getEntityReferenceNode=getEntityReferenceNode;
getEntityReferenceNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:entityReferenceNode$731},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','entityReferenceNode']};};
$prop$getEntityReferenceNode={get:getEntityReferenceNode,$$metamodel$$:getEntityReferenceNode.$$metamodel$$};
exports.$prop$getEntityReferenceNode=$prop$getEntityReferenceNode;
function notationNode$733(){
    var $$notationNode=new notationNode$733.$$;
    NodeType($$$cl1.String("notationNode",12),$$notationNode);
    return $$notationNode;
}
function $init$notationNode$733(){
    if (notationNode$733.$$===undefined){
        $$$cl1.initTypeProto(notationNode$733,'ceylon.js.dom::notationNode',$init$NodeType());
    }
    return notationNode$733;
}
exports.$init$notationNode$733=$init$notationNode$733;
$init$notationNode$733();
var notationNode$734;
function getNotationNode(){
    if (notationNode$734===undefined)notationNode$734=$init$notationNode$733()();
    return notationNode$734;
}
exports.getNotationNode=getNotationNode;
getNotationNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:notationNode$733},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','notationNode']};};
$prop$getNotationNode={get:getNotationNode,$$metamodel$$:getNotationNode.$$metamodel$$};
exports.$prop$getNotationNode=$prop$getNotationNode;
function processingInstructionNode$735(){
    var $$processingInstructionNode=new processingInstructionNode$735.$$;
    NodeType($$$cl1.String("processingInstructionNode",25),$$processingInstructionNode);
    return $$processingInstructionNode;
}
function $init$processingInstructionNode$735(){
    if (processingInstructionNode$735.$$===undefined){
        $$$cl1.initTypeProto(processingInstructionNode$735,'ceylon.js.dom::processingInstructionNode',$init$NodeType());
    }
    return processingInstructionNode$735;
}
exports.$init$processingInstructionNode$735=$init$processingInstructionNode$735;
$init$processingInstructionNode$735();
var processingInstructionNode$736;
function getProcessingInstructionNode(){
    if (processingInstructionNode$736===undefined)processingInstructionNode$736=$init$processingInstructionNode$735()();
    return processingInstructionNode$736;
}
exports.getProcessingInstructionNode=getProcessingInstructionNode;
getProcessingInstructionNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:processingInstructionNode$735},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','processingInstructionNode']};};
$prop$getProcessingInstructionNode={get:getProcessingInstructionNode,$$metamodel$$:getProcessingInstructionNode.$$metamodel$$};
exports.$prop$getProcessingInstructionNode=$prop$getProcessingInstructionNode;
function textNode$737(){
    var $$textNode=new textNode$737.$$;
    NodeType($$$cl1.String("textNode",8),$$textNode);
    return $$textNode;
}
function $init$textNode$737(){
    if (textNode$737.$$===undefined){
        $$$cl1.initTypeProto(textNode$737,'ceylon.js.dom::textNode',$init$NodeType());
    }
    return textNode$737;
}
exports.$init$textNode$737=$init$textNode$737;
$init$textNode$737();
var textNode$738;
function getTextNode(){
    if (textNode$738===undefined)textNode$738=$init$textNode$737()();
    return textNode$738;
}
exports.getTextNode=getTextNode;
getTextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:textNode$737},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','textNode']};};
$prop$getTextNode={get:getTextNode,$$metamodel$$:getTextNode.$$metamodel$$};
exports.$prop$getTextNode=$prop$getTextNode;
function DocumentFragmentAbs($$documentFragmentAbs){
    $init$DocumentFragmentAbs();
    if ($$documentFragmentAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$documentFragmentAbs);
    return $$documentFragmentAbs;
}
DocumentFragmentAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','DocumentFragmentAbs']};};
exports.DocumentFragmentAbs=DocumentFragmentAbs;
function $init$DocumentFragmentAbs(){
    if (DocumentFragmentAbs.$$===undefined){
        $$$cl1.initTypeProto(DocumentFragmentAbs,'ceylon.js.dom::DocumentFragmentAbs',$init$NodeAbs());
    }
    return DocumentFragmentAbs;
}
exports.$init$DocumentFragmentAbs=$init$DocumentFragmentAbs;
$init$DocumentFragmentAbs();
function DocumentFragment(n$739, $$documentFragment){
    $init$DocumentFragment();
    if ($$documentFragment===undefined)$$documentFragment=new DocumentFragment.$$;
    $$documentFragment.n$739_=n$739;
    DocumentFragmentAbs($$documentFragment);
    $$$cl1.defineAttr($$documentFragment,'n$739',function(){return this.n$739_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DocumentFragment,d:['ceylon.js.dom','DocumentFragment','$at','n']};});
    $$documentFragment.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DocumentFragment,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','DocumentFragment','$at','native']};}};
    /*Begin dynamic block*/
    $$documentFragment.$native=n$739;/*End dynamic block*/
    return $$documentFragment;
}
DocumentFragment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentFragmentAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentFragment']};};
exports.DocumentFragment=DocumentFragment;
function $init$DocumentFragment(){
    if (DocumentFragment.$$===undefined){
        $$$cl1.initTypeProto(DocumentFragment,'ceylon.js.dom::DocumentFragment',$init$DocumentFragmentAbs());
    }
    return DocumentFragment;
}
exports.$init$DocumentFragment=$init$DocumentFragment;
$init$DocumentFragment();
function EntityReferenceAbs($$entityReferenceAbs){
    $init$EntityReferenceAbs();
    if ($$entityReferenceAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$entityReferenceAbs);
    return $$entityReferenceAbs;
}
EntityReferenceAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','EntityReferenceAbs']};};
exports.EntityReferenceAbs=EntityReferenceAbs;
function $init$EntityReferenceAbs(){
    if (EntityReferenceAbs.$$===undefined){
        $$$cl1.initTypeProto(EntityReferenceAbs,'ceylon.js.dom::EntityReferenceAbs',$init$NodeAbs());
    }
    return EntityReferenceAbs;
}
exports.$init$EntityReferenceAbs=$init$EntityReferenceAbs;
$init$EntityReferenceAbs();
function EntityReference(n$740, $$entityReference){
    $init$EntityReference();
    if ($$entityReference===undefined)$$entityReference=new EntityReference.$$;
    $$entityReference.n$740_=n$740;
    EntityReferenceAbs($$entityReference);
    $$$cl1.defineAttr($$entityReference,'n$740',function(){return this.n$740_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:EntityReference,d:['ceylon.js.dom','EntityReference','$at','n']};});
    /*Begin dynamic block*/
    $$entityReference.$native=n$740;/*End dynamic block*/
    return $$entityReference;
}
EntityReference.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:EntityReferenceAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EntityReference']};};
exports.EntityReference=EntityReference;
function $init$EntityReference(){
    if (EntityReference.$$===undefined){
        $$$cl1.initTypeProto(EntityReference,'ceylon.js.dom::EntityReference',$init$EntityReferenceAbs());
    }
    return EntityReference;
}
exports.$init$EntityReference=$init$EntityReference;
$init$EntityReference();
function NodeAbs($$nodeAbs){
    $init$NodeAbs();
    if ($$nodeAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$nodeAbs);
    function appendChild(node$741){
        /*Begin dynamic block*/
        return Node(node$741.$native.appendChild(/*NULL PARAM!*/node$741));
        /*End dynamic block*/
    }
    $$nodeAbs.appendChild=appendChild;
    appendChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','appendChild']};};
    function baseURI(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$nodeAbs.$native.baseURL);
        /*End dynamic block*/
    }
    $$nodeAbs.baseURI=baseURI;
    baseURI.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','baseURI']};};
    function childNodes(){
        /*Begin dynamic block*/
        return NodeList($$nodeAbs.$native.childNodes);
        /*End dynamic block*/
    }
    $$nodeAbs.childNodes=childNodes;
    childNodes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeList},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','childNodes']};};
    $$nodeAbs.cloneNode$defs$bool=function(bool$742){return true;};
    function cloneNode(bool$742){
        if(bool$742===undefined){bool$742=$$nodeAbs.cloneNode$defs$bool(bool$742);}
        /*Begin dynamic block*/
        return Node((typeof node==='undefined'||node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: node")),'60:15-60:18','node.ceylon'):node).native.cloneNode(/*NULL PARAM!*/bool$742));
        /*End dynamic block*/
    }
    $$nodeAbs.cloneNode=cloneNode;
    cloneNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'bool',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','cloneNode']};};
    function compareDocumentPosition(node$743){
        /*Begin dynamic block*/
        var pos$744=node$743.$native.compareDocumentPosition(/*NULL PARAM!*/node$743);
        $prop$getPos$744={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','compareDocumentPosition','$at','pos']};}};
        $prop$getPos$744.get=function(){return pos$744};
        if((tmpvar$745=pos$744,tmpvar$746=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'66:23-66:26','node.ceylon'):Node).DOCUMENT_POSITION_CONTAINED_BY,(tmpvar$745.equals&&tmpvar$745.equals(tmpvar$746))||tmpvar$745===tmpvar$746)){
            return getDocumentPositionContainedBy();
        }else {
            if((tmpvar$747=pos$744,tmpvar$748=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'68:30-68:33','node.ceylon'):Node).DOCUMENT_POSITION_CONTAINS,(tmpvar$747.equals&&tmpvar$747.equals(tmpvar$748))||tmpvar$747===tmpvar$748)){
                return getDocumentPositionContains();
            }else {
                if((tmpvar$749=pos$744,tmpvar$750=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'70:27-70:30','node.ceylon'):Node).DOCUMENT_POSITION_DISCONNECTED,(tmpvar$749.equals&&tmpvar$749.equals(tmpvar$750))||tmpvar$749===tmpvar$750)){
                    return getDocumentPositionDisconnected();
                }else {
                    if((tmpvar$751=pos$744,tmpvar$752=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'72:27-72:30','node.ceylon'):Node).DOCUMENT_POSITION_FOLLOWING,(tmpvar$751.equals&&tmpvar$751.equals(tmpvar$752))||tmpvar$751===tmpvar$752)){
                        return getDocumentPositionFollowing();
                    }else {
                        if((tmpvar$753=pos$744,tmpvar$754=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'74:27-74:30','node.ceylon'):Node).DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC,(tmpvar$753.equals&&tmpvar$753.equals(tmpvar$754))||tmpvar$753===tmpvar$754)){
                            return getDocumentPositionImplementationSpecific();
                        }else {
                            return getDocumentPositionPreceding();
                        }
                    }
                }
            }
        }/*End dynamic block*/
    }
    $$nodeAbs.compareDocumentPosition=compareDocumentPosition;
    compareDocumentPosition.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentPosition},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','compareDocumentPosition']};};
    function firstChild(){
        /*Begin dynamic block*/
        return Node($$nodeAbs.$native.firstChild);
        /*End dynamic block*/
    }
    $$nodeAbs.firstChild=firstChild;
    firstChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','firstChild']};};
    function hasChildNodes(){
        /*Begin dynamic block*/
        if($$nodeAbs.$native.hasAttributes()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$nodeAbs.hasChildNodes=hasChildNodes;
    hasChildNodes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','hasChildNodes']};};
    function insertBefore(newElement$755,referenceElement$756){
        /*Begin dynamic block*/
        var ref$757;
        if((ref$757=referenceElement$756)!==null){
            return Node($$nodeAbs.$native.insertBefore(/*NULL PARAM!*/newElement$755.$native/*NULL PARAM!*/,ref$757.$native));
        }else {
            return Node($$nodeAbs.$native.insertBefore(/*NULL PARAM!*/newElement$755.$native));
        }/*End dynamic block*/
    }
    $$nodeAbs.insertBefore=insertBefore;
    insertBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'newElement',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'referenceElement',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','insertBefore']};};
    function isDefaultNamespace(namespaceURI$758){
        var isDefault$759;
        
        var case$760=namespaceURI$758;
        if ($$$cl1.isOfType(namespaceURI$758,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            isDefault$759=$$nodeAbs.$native.isDefaultNamespace(/*NULL PARAM!*/case$760.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(namespaceURI$758,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            isDefault$759=$$nodeAbs.$native.isDefaultNamespace(/*NULL PARAM!*/case$760.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(isDefault$759){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$nodeAbs.isDefaultNamespace=isDefaultNamespace;
    isDefaultNamespace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','isDefaultNamespace']};};
    function isEqualNode(node$761){
        /*Begin dynamic block*/
        if($$nodeAbs.$native.isEqualNode(/*NULL PARAM!*/node$761)){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$nodeAbs.isEqualNode=isEqualNode;
    isEqualNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','isEqualNode']};};
    function lastChild(){
        /*Begin dynamic block*/
        var lastChild$762=$$nodeAbs.$native.lastChild;
        $prop$getLastChild$762={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','lastChild','$at','lastChild']};}};
        $prop$getLastChild$762.get=function(){return lastChild$762};
        if((tmpvar$763=lastChild$762,tmpvar$764=null,(tmpvar$763.equals&&!tmpvar$763.equals(tmpvar$764))||tmpvar$763!==tmpvar$764)){
            return Node(lastChild$762);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.lastChild=lastChild;
    lastChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','lastChild']};};
    function lookupPrefix(namespaceURI$765){
        var prefix$766;
        /*Begin dynamic block*/
        
        var case$767=namespaceURI$765;
        if ($$$cl1.isOfType(namespaceURI$765,{t:$$$cl1.String})) {
            prefix$766=$$nodeAbs.$native.lookupPrefix(/*NULL PARAM!*/case$767.valueOf());
        }else if ($$$cl1.isOfType(namespaceURI$765,{t:$$$cjl361.JSString})) {
            prefix$766=$$nodeAbs.$native.lookupPrefix(/*NULL PARAM!*/case$767.$native);
        }else if ($$$cl1.isOfType(namespaceURI$765,{t:$$$cl1.Null})) {
            prefix$766=$$nodeAbs.$native.lookupPrefix();
        }if((tmpvar$768=prefix$766,tmpvar$769=null,(tmpvar$768.equals&&!tmpvar$768.equals(tmpvar$769))||tmpvar$768!==tmpvar$769)){
            return $$$cjl361.JSString(prefix$766);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.lookupPrefix=lookupPrefix;
    lookupPrefix.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','lookupPrefix']};};
    function nextSibling(){
        /*Begin dynamic block*/
        var nextSibling$770=$$nodeAbs.$native.nextSibling();
        $prop$getNextSibling$770={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','nextSibling','$at','nextSibling']};}};
        $prop$getNextSibling$770.get=function(){return nextSibling$770};
        if((tmpvar$771=nextSibling$770,tmpvar$772=null,(tmpvar$771.equals&&!tmpvar$771.equals(tmpvar$772))||tmpvar$771!==tmpvar$772)){
            return Node(nextSibling$770);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.nextSibling=nextSibling;
    nextSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','nextSibling']};};
    function nodeName(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$nodeAbs.$native.nodeName);
        /*End dynamic block*/
    }
    $$nodeAbs.nodeName=nodeName;
    nodeName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','nodeName']};};
    function nodeType(){
        /*Begin dynamic block*/
        if((tmpvar$773=$$nodeAbs.$native.nodeType,tmpvar$774=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'193:26-193:29','node.ceylon'):Node).ELEMENT_NODE,(tmpvar$773.equals&&tmpvar$773.equals(tmpvar$774))||tmpvar$773===tmpvar$774)){
            return getElementNode();
        }else {
            if((tmpvar$775=$$nodeAbs.$native.nodeType,tmpvar$776=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'195:33-195:36','node.ceylon'):Node).ATTRIBUTE_NODE,(tmpvar$775.equals&&tmpvar$775.equals(tmpvar$776))||tmpvar$775===tmpvar$776)){
                return getAttributeNode();
            }else {
                if((tmpvar$777=$$nodeAbs.$native.nodeType,tmpvar$778=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'197:33-197:36','node.ceylon'):Node).TEXT_NODE,(tmpvar$777.equals&&tmpvar$777.equals(tmpvar$778))||tmpvar$777===tmpvar$778)){
                    return getTextNode();
                }else {
                    if((tmpvar$779=$$nodeAbs.$native.nodeType,tmpvar$780=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'199:33-199:36','node.ceylon'):Node).CDATA_SECTION_NODE,(tmpvar$779.equals&&tmpvar$779.equals(tmpvar$780))||tmpvar$779===tmpvar$780)){
                        return getCdataSectionNode();
                    }else {
                        if((tmpvar$781=$$nodeAbs.$native.nodeType,tmpvar$782=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'201:33-201:36','node.ceylon'):Node).ENTITY_REFERENCE_NODE,(tmpvar$781.equals&&tmpvar$781.equals(tmpvar$782))||tmpvar$781===tmpvar$782)){
                            return getEntityReferenceNode();
                        }else {
                            if((tmpvar$783=$$nodeAbs.$native.nodeType,tmpvar$784=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'203:33-203:36','node.ceylon'):Node).ENTITY_NODE,(tmpvar$783.equals&&tmpvar$783.equals(tmpvar$784))||tmpvar$783===tmpvar$784)){
                                return getEntityNode();
                            }else {
                                if((tmpvar$785=$$nodeAbs.$native.nodeType,tmpvar$786=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'205:33-205:36','node.ceylon'):Node).PROCESSING_INSTRUCTION_NODE,(tmpvar$785.equals&&tmpvar$785.equals(tmpvar$786))||tmpvar$785===tmpvar$786)){
                                    return getProcessingInstructionNode();
                                }else {
                                    if((tmpvar$787=$$nodeAbs.$native.nodeType,tmpvar$788=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'207:33-207:36','node.ceylon'):Node).COMMENT_NODE,(tmpvar$787.equals&&tmpvar$787.equals(tmpvar$788))||tmpvar$787===tmpvar$788)){
                                        return getCommentNode();
                                    }else {
                                        if((tmpvar$789=$$nodeAbs.$native.nodeType,tmpvar$790=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'209:33-209:36','node.ceylon'):Node).DOCUMENT_NODE,(tmpvar$789.equals&&tmpvar$789.equals(tmpvar$790))||tmpvar$789===tmpvar$790)){
                                            return getDocumentNode();
                                        }else {
                                            if((tmpvar$791=$$nodeAbs.$native.nodeType,tmpvar$792=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'211:33-211:36','node.ceylon'):Node).DOCUMENT_TYPE_NODE,(tmpvar$791.equals&&tmpvar$791.equals(tmpvar$792))||tmpvar$791===tmpvar$792)){
                                                return getDocumentTypeNode();
                                            }else {
                                                if((tmpvar$793=$$nodeAbs.$native.nodeType,tmpvar$794=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'213:33-213:36','node.ceylon'):Node).DOCUMENT_FRAGMENT_NODE,(tmpvar$793.equals&&tmpvar$793.equals(tmpvar$794))||tmpvar$793===tmpvar$794)){
                                                    return getDocumentFragmentNode();
                                                }else {
                                                    return getNotationNode();
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }/*End dynamic block*/
    }
    $$nodeAbs.nodeType=nodeType;
    nodeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeType},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','nodeType']};};
    function getNodeValue(){
        /*Begin dynamic block*/
        var val$795=$$nodeAbs.$native.nodeValue;
        $prop$getVal$795={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','getNodeValue','$at','val']};}};
        $prop$getVal$795.get=function(){return val$795};
        if((tmpvar$796=val$795,tmpvar$797=null,(tmpvar$796.equals&&!tmpvar$796.equals(tmpvar$797))||tmpvar$796!==tmpvar$797)){
            return $$$cjl361.JSString(val$795);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.getNodeValue=getNodeValue;
    getNodeValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','getNodeValue']};};
    function setNodeValue(val$798){
        
        var case$799=val$798;
        if ($$$cl1.isOfType(val$798,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$nodeAbs.$native.nodeValue=case$799.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(val$798,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$nodeAbs.$native.nodeValue=case$799.$native;
            /*End dynamic block*/
        }
    }
    $$nodeAbs.setNodeValue=setNodeValue;
    setNodeValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','setNodeValue']};};
    function normalize(){
        /*Begin dynamic block*/
        $$nodeAbs.$native.normalize();
        /*End dynamic block*/
    }
    $$nodeAbs.normalize=normalize;
    normalize.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','normalize']};};
    $$$cl1.defineAttr($$nodeAbs,'ownerDocument',function(){
        /*Begin dynamic block*/
        return Document($$nodeAbs.$native.ownerDocument);
        /*End dynamic block*/
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Document},$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$at','ownerDocument']};});
    function parentNode(){
        /*Begin dynamic block*/
        var parent$800=$$nodeAbs.parentNode();
        $prop$getParent$800={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','parentNode','$at','parent']};}};
        $prop$getParent$800.get=function(){return parent$800};
        if((tmpvar$801=parent$800,tmpvar$802=null,(tmpvar$801.equals&&!tmpvar$801.equals(tmpvar$802))||tmpvar$801!==tmpvar$802)){
            return Node(parent$800);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.parentNode=parentNode;
    parentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','parentNode']};};
    function prefix(){
        /*Begin dynamic block*/
        var prefix$803=$$nodeAbs.$native.prefix;
        $prop$getPrefix$803={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','prefix','$at','prefix']};}};
        $prop$getPrefix$803.get=function(){return prefix$803};
        if((tmpvar$804=prefix$803,tmpvar$805=null,(tmpvar$804.equals&&!tmpvar$804.equals(tmpvar$805))||tmpvar$804!==tmpvar$805)){
            return $$$cjl361.JSString(prefix$803);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.prefix=prefix;
    prefix.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','prefix']};};
    function previousSibling(){
        /*Begin dynamic block*/
        var previousSibling$806=$$nodeAbs.$native.previousSibling();
        $prop$getPreviousSibling$806={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','previousSibling','$at','previousSibling']};}};
        $prop$getPreviousSibling$806.get=function(){return previousSibling$806};
        if((tmpvar$807=previousSibling$806,tmpvar$808=null,(tmpvar$807.equals&&!tmpvar$807.equals(tmpvar$808))||tmpvar$807!==tmpvar$808)){
            return Node(previousSibling$806);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.previousSibling=previousSibling;
    previousSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','previousSibling']};};
    function removeChild(node$809){
        /*Begin dynamic block*/
        return Node($$nodeAbs.$native.removeChild(/*NULL PARAM!*/node$809.$native));
        /*End dynamic block*/
    }
    $$nodeAbs.removeChild=removeChild;
    removeChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','removeChild']};};
    function replaceChild(newChild$810,oldChild$811){
        /*Begin dynamic block*/
        return Node($$nodeAbs.$native.replaceChild(/*NULL PARAM!*/newChild$810.$native/*NULL PARAM!*/,oldChild$811.$native));
        /*End dynamic block*/
    }
    $$nodeAbs.replaceChild=replaceChild;
    replaceChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'newChild',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'oldChild',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','replaceChild']};};
    function getTextContent(){
        /*Begin dynamic block*/
        var content$812=$$nodeAbs.$native.textContent();
        $prop$getContent$812={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','getTextContent','$at','content']};}};
        $prop$getContent$812.get=function(){return content$812};
        if((tmpvar$813=content$812,tmpvar$814=null,(tmpvar$813.equals&&!tmpvar$813.equals(tmpvar$814))||tmpvar$813!==tmpvar$814)){
            return $$$cjl361.JSString(content$812);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.getTextContent=getTextContent;
    getTextContent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl361.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','getTextContent']};};
    function setTextContent(content$815){
        
        var case$816=content$815;
        if ($$$cl1.isOfType(content$815,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$nodeAbs.$native.textContent=case$816.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(content$815,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$nodeAbs.$native.textContent=case$816.$native;
            /*End dynamic block*/
        }
    }
    $$nodeAbs.setTextContent=setTextContent;
    setTextContent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'content',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','setTextContent']};};
    return $$nodeAbs;
}
NodeAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','NodeAbs']};};
exports.NodeAbs=NodeAbs;
function $init$NodeAbs(){
    if (NodeAbs.$$===undefined){
        $$$cl1.initTypeProto(NodeAbs,'ceylon.js.dom::NodeAbs',$$$cjl361.JSObjectAbs);
    }
    return NodeAbs;
}
exports.$init$NodeAbs=$init$NodeAbs;
$init$NodeAbs();
function Node(n$817, $$node){
    $init$Node();
    if ($$node===undefined)$$node=new Node.$$;
    $$node.n$817_=n$817;
    NodeAbs($$node);
    $$$cl1.defineAttr($$node,'n$817',function(){return this.n$817_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Node,d:['ceylon.js.dom','Node','$at','n']};});
    /*Begin dynamic block*/
    $$node.$native=n$817;/*End dynamic block*/
    return $$node;
}
Node.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','Node']};};
exports.Node=Node;
function $init$Node(){
    if (Node.$$===undefined){
        $$$cl1.initTypeProto(Node,'ceylon.js.dom::Node',$init$NodeAbs());
    }
    return Node;
}
exports.$init$Node=$init$Node;
$init$Node();
function NodeFilterResult(name$818, $$nodeFilterResult){
    $init$NodeFilterResult();
    if ($$nodeFilterResult===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$nodeFilterResult.name$818_=name$818;
    $$$cl1.defineAttr($$nodeFilterResult,'name$818',function(){return this.name$818_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:NodeFilterResult,d:['ceylon.js.dom','NodeFilterResult','$at','name']};});
    return $$nodeFilterResult;
}
NodeFilterResult.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','NodeFilterResult']};};
exports.NodeFilterResult=NodeFilterResult;
function $init$NodeFilterResult(){
    if (NodeFilterResult.$$===undefined){
        $$$cl1.initTypeProto(NodeFilterResult,'ceylon.js.dom::NodeFilterResult',$$$cl1.Basic);
    }
    return NodeFilterResult;
}
exports.$init$NodeFilterResult=$init$NodeFilterResult;
$init$NodeFilterResult();
function filterAccept$819(){
    var $$filterAccept=new filterAccept$819.$$;
    NodeFilterResult($$$cl1.String("filterAccept",12),$$filterAccept);
    return $$filterAccept;
}
function $init$filterAccept$819(){
    if (filterAccept$819.$$===undefined){
        $$$cl1.initTypeProto(filterAccept$819,'ceylon.js.dom::filterAccept',$init$NodeFilterResult());
    }
    return filterAccept$819;
}
exports.$init$filterAccept$819=$init$filterAccept$819;
$init$filterAccept$819();
var filterAccept$820;
function getFilterAccept(){
    if (filterAccept$820===undefined)filterAccept$820=$init$filterAccept$819()();
    return filterAccept$820;
}
exports.getFilterAccept=getFilterAccept;
getFilterAccept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:filterAccept$819},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','filterAccept']};};
$prop$getFilterAccept={get:getFilterAccept,$$metamodel$$:getFilterAccept.$$metamodel$$};
exports.$prop$getFilterAccept=$prop$getFilterAccept;
function filterReject$821(){
    var $$filterReject=new filterReject$821.$$;
    NodeFilterResult($$$cl1.String("filterReject",12),$$filterReject);
    return $$filterReject;
}
function $init$filterReject$821(){
    if (filterReject$821.$$===undefined){
        $$$cl1.initTypeProto(filterReject$821,'ceylon.js.dom::filterReject',$init$NodeFilterResult());
    }
    return filterReject$821;
}
exports.$init$filterReject$821=$init$filterReject$821;
$init$filterReject$821();
var filterReject$822;
function getFilterReject(){
    if (filterReject$822===undefined)filterReject$822=$init$filterReject$821()();
    return filterReject$822;
}
exports.getFilterReject=getFilterReject;
getFilterReject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:filterReject$821},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','filterReject']};};
$prop$getFilterReject={get:getFilterReject,$$metamodel$$:getFilterReject.$$metamodel$$};
exports.$prop$getFilterReject=$prop$getFilterReject;
function filterSkip$823(){
    var $$filterSkip=new filterSkip$823.$$;
    NodeFilterResult($$$cl1.String("filterSkip",10),$$filterSkip);
    return $$filterSkip;
}
function $init$filterSkip$823(){
    if (filterSkip$823.$$===undefined){
        $$$cl1.initTypeProto(filterSkip$823,'ceylon.js.dom::filterSkip',$init$NodeFilterResult());
    }
    return filterSkip$823;
}
exports.$init$filterSkip$823=$init$filterSkip$823;
$init$filterSkip$823();
var filterSkip$824;
function getFilterSkip(){
    if (filterSkip$824===undefined)filterSkip$824=$init$filterSkip$823()();
    return filterSkip$824;
}
exports.getFilterSkip=getFilterSkip;
getFilterSkip.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:filterSkip$823},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','filterSkip']};};
$prop$getFilterSkip={get:getFilterSkip,$$metamodel$$:getFilterSkip.$$metamodel$$};
exports.$prop$getFilterSkip=$prop$getFilterSkip;
function NodeFilter(acceptNode$825, $$nodeFilter){
    $init$NodeFilter();
    if ($$nodeFilter===undefined)$$nodeFilter=new NodeFilter.$$;
    $$nodeFilter.acceptNode$825_=acceptNode$825;
    $$$cl1.defineAttr($$nodeFilter,'acceptNode$825',function(){return this.acceptNode$825_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:NodeFilterResult},$ps:[{$nm:'n',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeFilter,d:['ceylon.js.dom','NodeFilter','$m','acceptNode']};});
    $$nodeFilter.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeFilter,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeFilter','$at','native']};}};
    /*Begin dynamic block*/
    $$nodeFilter.$native=(typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'11:11-11:16','nodefilter.ceylon'):Object)();$$nodeFilter.$native.acceptNode=$$$cl1.$JsCallable(acceptNode$825/*TODO: callable targs 6*/);
    /*End dynamic block*/
    return $$nodeFilter;
}
NodeFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeFilter']};};
exports.NodeFilter=NodeFilter;
function $init$NodeFilter(){
    if (NodeFilter.$$===undefined){
        $$$cl1.initTypeProto(NodeFilter,'ceylon.js.dom::NodeFilter',$$$cl1.Basic);
    }
    return NodeFilter;
}
exports.$init$NodeFilter=$init$NodeFilter;
$init$NodeFilter();
function NodeIteratorAbs($$nodeIteratorAbs){
    $init$NodeIteratorAbs();
    if ($$nodeIteratorAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$nodeIteratorAbs);
    function root(){
        /*Begin dynamic block*/
        return Node($$nodeIteratorAbs.$native.root);
        /*End dynamic block*/
    }
    $$nodeIteratorAbs.root=root;
    root.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','root']};};
    function whatToShow(){
        /*Begin dynamic block*/
        return (tmpvar$826=$$nodeIteratorAbs.$native.whatToShow,$$$cl1.isOfType(tmpvar$826,{t:$$$cl1.Anything})?tmpvar$826:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'13:19-13:35','nodeiterator.ceylon'));
        /*End dynamic block*/
    }
    $$nodeIteratorAbs.whatToShow=whatToShow;
    whatToShow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','whatToShow']};};
    function filter(){
        /*Begin dynamic block*/
        var filter$827=$$nodeIteratorAbs.$native.filter;
        $prop$getFilter$827={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeIteratorAbs','$m','filter','$at','filter']};}};
        $prop$getFilter$827.get=function(){return filter$827};
        if((tmpvar$828=filter$827,tmpvar$829=null,(tmpvar$828.equals&&!tmpvar$828.equals(tmpvar$829))||tmpvar$828!==tmpvar$829)){
            return NodeFilter((tmpvar$830=filter$827,$$$cl1.isOfType(tmpvar$830,{t:NodeFilterResult})?tmpvar$830:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'21:34-21:39','nodeiterator.ceylon')));
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeIteratorAbs.filter=filter;
    filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:NodeFilter}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','filter']};};
    function nextNode(){
        /*Begin dynamic block*/
        var next$831=$$nodeIteratorAbs.$native.nextNode();
        $prop$getNext$831={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeIteratorAbs','$m','nextNode','$at','next']};}};
        $prop$getNext$831.get=function(){return next$831};
        if((tmpvar$832=next$831,tmpvar$833=null,(tmpvar$832.equals&&!tmpvar$832.equals(tmpvar$833))||tmpvar$832!==tmpvar$833)){
            return Node(next$831);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeIteratorAbs.nextNode=nextNode;
    nextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','nextNode']};};
    function previousNode(){
        /*Begin dynamic block*/
        var previous$834=$$nodeIteratorAbs.$native.previousNode();
        $prop$getPrevious$834={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeIteratorAbs','$m','previousNode','$at','previous']};}};
        $prop$getPrevious$834.get=function(){return previous$834};
        if((tmpvar$835=previous$834,tmpvar$836=null,(tmpvar$835.equals&&!tmpvar$835.equals(tmpvar$836))||tmpvar$835!==tmpvar$836)){
            return Node(previous$834);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeIteratorAbs.previousNode=previousNode;
    previousNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','previousNode']};};
    return $$nodeIteratorAbs;
}
NodeIteratorAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','NodeIteratorAbs']};};
exports.NodeIteratorAbs=NodeIteratorAbs;
function $init$NodeIteratorAbs(){
    if (NodeIteratorAbs.$$===undefined){
        $$$cl1.initTypeProto(NodeIteratorAbs,'ceylon.js.dom::NodeIteratorAbs',$$$cjl361.JSObjectAbs);
    }
    return NodeIteratorAbs;
}
exports.$init$NodeIteratorAbs=$init$NodeIteratorAbs;
$init$NodeIteratorAbs();
function NodeIterator(n$837, $$nodeIterator){
    $init$NodeIterator();
    if ($$nodeIterator===undefined)$$nodeIterator=new NodeIterator.$$;
    $$nodeIterator.n$837_=n$837;
    NodeIteratorAbs($$nodeIterator);
    $$$cl1.defineAttr($$nodeIterator,'n$837',function(){return this.n$837_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeIterator,d:['ceylon.js.dom','NodeIterator','$at','n']};});
    $$nodeIterator.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeIterator,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','NodeIterator','$at','native']};}};
    /*Begin dynamic block*/
    $$nodeIterator.$native=n$837;/*End dynamic block*/
    return $$nodeIterator;
}
NodeIterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeIteratorAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIterator']};};
exports.NodeIterator=NodeIterator;
function $init$NodeIterator(){
    if (NodeIterator.$$===undefined){
        $$$cl1.initTypeProto(NodeIterator,'ceylon.js.dom::NodeIterator',$init$NodeIteratorAbs());
    }
    return NodeIterator;
}
exports.$init$NodeIterator=$init$NodeIterator;
$init$NodeIterator();
function NodeListAbs($$nodeListAbs){
    $init$NodeListAbs();
    if ($$nodeListAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$nodeListAbs);
    function item(index$838){
        var item$839;
        
        var case$840=index$838;
        if ($$$cl1.isOfType(index$838,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            item$839=$$nodeListAbs.$native.item(/*NULL PARAM!*/case$840);/*End dynamic block*/
        }else if ($$$cl1.isOfType(index$838,{t:$$$cjl361.JSNumber})) {
            /*Begin dynamic block*/
            item$839=$$nodeListAbs.$native.item(/*NULL PARAM!*/case$840.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if((tmpvar$841=item$839,tmpvar$842=null,(tmpvar$841.equals&&!tmpvar$841.equals(tmpvar$842))||tmpvar$841!==tmpvar$842)){
            return Node(item$839);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeListAbs.item=item;
    item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}}],$cont:NodeListAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeListAbs','$m','item']};};
    function length(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$nodeListAbs.$native.length);
        /*End dynamic block*/
    }
    $$nodeListAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:NodeListAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeListAbs','$m','length']};};
    return $$nodeListAbs;
}
NodeListAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','NodeListAbs']};};
exports.NodeListAbs=NodeListAbs;
function $init$NodeListAbs(){
    if (NodeListAbs.$$===undefined){
        $$$cl1.initTypeProto(NodeListAbs,'ceylon.js.dom::NodeListAbs',$$$cjl361.JSObjectAbs);
    }
    return NodeListAbs;
}
exports.$init$NodeListAbs=$init$NodeListAbs;
$init$NodeListAbs();
function NodeList(n$843, $$nodeList){
    $init$NodeList();
    if ($$nodeList===undefined)$$nodeList=new NodeList.$$;
    $$nodeList.n$843_=n$843;
    NodeListAbs($$nodeList);
    $$$cl1.defineAttr($$nodeList,'n$843',function(){return this.n$843_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeList,d:['ceylon.js.dom','NodeList','$at','n']};});
    $$nodeList.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','NodeList','$at','native']};}};
    /*Begin dynamic block*/
    $$nodeList.$native=n$843;/*End dynamic block*/
    return $$nodeList;
}
NodeList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeListAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeList']};};
exports.NodeList=NodeList;
function $init$NodeList(){
    if (NodeList.$$===undefined){
        $$$cl1.initTypeProto(NodeList,'ceylon.js.dom::NodeList',$init$NodeListAbs());
    }
    return NodeList;
}
exports.$init$NodeList=$init$NodeList;
$init$NodeList();
exports.$pkg$ans$ceylon$js$dom=function(){return[$$$cl1.shared()];};
function ProcessingInstructionAbs($$processingInstructionAbs){
    $init$ProcessingInstructionAbs();
    if ($$processingInstructionAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$processingInstructionAbs);
    function getData(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$processingInstructionAbs.$native.data);
        /*End dynamic block*/
    }
    $$processingInstructionAbs.getData=getData;
    getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:ProcessingInstructionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ProcessingInstructionAbs','$m','getData']};};
    function setData(data$844){
        
        var case$845=data$844;
        if ($$$cl1.isOfType(data$844,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$processingInstructionAbs.$native.data=case$845.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$844,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$processingInstructionAbs.$native.data=case$845.$native;
            /*End dynamic block*/
        }
    }
    $$processingInstructionAbs.setData=setData;
    setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:ProcessingInstructionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ProcessingInstructionAbs','$m','setData']};};
    function target(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$processingInstructionAbs.$native.target);
        /*End dynamic block*/
    }
    $$processingInstructionAbs.target=target;
    target.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:ProcessingInstructionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ProcessingInstructionAbs','$m','target']};};
    return $$processingInstructionAbs;
}
ProcessingInstructionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','ProcessingInstructionAbs']};};
exports.ProcessingInstructionAbs=ProcessingInstructionAbs;
function $init$ProcessingInstructionAbs(){
    if (ProcessingInstructionAbs.$$===undefined){
        $$$cl1.initTypeProto(ProcessingInstructionAbs,'ceylon.js.dom::ProcessingInstructionAbs',$init$NodeAbs());
    }
    return ProcessingInstructionAbs;
}
exports.$init$ProcessingInstructionAbs=$init$ProcessingInstructionAbs;
$init$ProcessingInstructionAbs();
function ProcessingInstruction(n$846, $$processingInstruction){
    $init$ProcessingInstruction();
    if ($$processingInstruction===undefined)$$processingInstruction=new ProcessingInstruction.$$;
    $$processingInstruction.n$846_=n$846;
    ProcessingInstructionAbs($$processingInstruction);
    $$$cl1.defineAttr($$processingInstruction,'n$846',function(){return this.n$846_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:ProcessingInstruction,d:['ceylon.js.dom','ProcessingInstruction','$at','n']};});
    $$processingInstruction.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:ProcessingInstruction,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','ProcessingInstruction','$at','native']};}};
    /*Begin dynamic block*/
    $$processingInstruction.$native=n$846;/*End dynamic block*/
    return $$processingInstruction;
}
ProcessingInstruction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:ProcessingInstructionAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ProcessingInstruction']};};
exports.ProcessingInstruction=ProcessingInstruction;
function $init$ProcessingInstruction(){
    if (ProcessingInstruction.$$===undefined){
        $$$cl1.initTypeProto(ProcessingInstruction,'ceylon.js.dom::ProcessingInstruction',$init$ProcessingInstructionAbs());
    }
    return ProcessingInstruction;
}
exports.$init$ProcessingInstruction=$init$ProcessingInstruction;
$init$ProcessingInstruction();
function RangeCompareHow(name$847, $$rangeCompareHow){
    $init$RangeCompareHow();
    if ($$rangeCompareHow===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$rangeCompareHow.name$847_=name$847;
    $$$cl1.defineAttr($$rangeCompareHow,'name$847',function(){return this.name$847_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:RangeCompareHow,d:['ceylon.js.dom','RangeCompareHow','$at','name']};});
    return $$rangeCompareHow;
}
RangeCompareHow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','RangeCompareHow']};};
exports.RangeCompareHow=RangeCompareHow;
function $init$RangeCompareHow(){
    if (RangeCompareHow.$$===undefined){
        $$$cl1.initTypeProto(RangeCompareHow,'ceylon.js.dom::RangeCompareHow',$$$cl1.Basic);
    }
    return RangeCompareHow;
}
exports.$init$RangeCompareHow=$init$RangeCompareHow;
$init$RangeCompareHow();
function endToEnd$848(){
    var $$endToEnd=new endToEnd$848.$$;
    RangeCompareHow($$$cl1.String("endToEnd",8),$$endToEnd);
    return $$endToEnd;
}
function $init$endToEnd$848(){
    if (endToEnd$848.$$===undefined){
        $$$cl1.initTypeProto(endToEnd$848,'ceylon.js.dom::endToEnd',$init$RangeCompareHow());
    }
    return endToEnd$848;
}
exports.$init$endToEnd$848=$init$endToEnd$848;
$init$endToEnd$848();
var endToEnd$849;
function getEndToEnd(){
    if (endToEnd$849===undefined)endToEnd$849=$init$endToEnd$848()();
    return endToEnd$849;
}
exports.getEndToEnd=getEndToEnd;
getEndToEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:endToEnd$848},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','endToEnd']};};
$prop$getEndToEnd={get:getEndToEnd,$$metamodel$$:getEndToEnd.$$metamodel$$};
exports.$prop$getEndToEnd=$prop$getEndToEnd;
function endToStart$850(){
    var $$endToStart=new endToStart$850.$$;
    RangeCompareHow($$$cl1.String("endToStart",10),$$endToStart);
    return $$endToStart;
}
function $init$endToStart$850(){
    if (endToStart$850.$$===undefined){
        $$$cl1.initTypeProto(endToStart$850,'ceylon.js.dom::endToStart',$init$RangeCompareHow());
    }
    return endToStart$850;
}
exports.$init$endToStart$850=$init$endToStart$850;
$init$endToStart$850();
var endToStart$851;
function getEndToStart(){
    if (endToStart$851===undefined)endToStart$851=$init$endToStart$850()();
    return endToStart$851;
}
exports.getEndToStart=getEndToStart;
getEndToStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:endToStart$850},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','endToStart']};};
$prop$getEndToStart={get:getEndToStart,$$metamodel$$:getEndToStart.$$metamodel$$};
exports.$prop$getEndToStart=$prop$getEndToStart;
function startToEnd$852(){
    var $$startToEnd=new startToEnd$852.$$;
    RangeCompareHow($$$cl1.String("startToEnd",10),$$startToEnd);
    return $$startToEnd;
}
function $init$startToEnd$852(){
    if (startToEnd$852.$$===undefined){
        $$$cl1.initTypeProto(startToEnd$852,'ceylon.js.dom::startToEnd',$init$RangeCompareHow());
    }
    return startToEnd$852;
}
exports.$init$startToEnd$852=$init$startToEnd$852;
$init$startToEnd$852();
var startToEnd$853;
function getStartToEnd(){
    if (startToEnd$853===undefined)startToEnd$853=$init$startToEnd$852()();
    return startToEnd$853;
}
exports.getStartToEnd=getStartToEnd;
getStartToEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:startToEnd$852},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','startToEnd']};};
$prop$getStartToEnd={get:getStartToEnd,$$metamodel$$:getStartToEnd.$$metamodel$$};
exports.$prop$getStartToEnd=$prop$getStartToEnd;
function startToStart$854(){
    var $$startToStart=new startToStart$854.$$;
    RangeCompareHow($$$cl1.String("startToStart",12),$$startToStart);
    return $$startToStart;
}
function $init$startToStart$854(){
    if (startToStart$854.$$===undefined){
        $$$cl1.initTypeProto(startToStart$854,'ceylon.js.dom::startToStart',$init$RangeCompareHow());
    }
    return startToStart$854;
}
exports.$init$startToStart$854=$init$startToStart$854;
$init$startToStart$854();
var startToStart$855;
function getStartToStart(){
    if (startToStart$855===undefined)startToStart$855=$init$startToStart$854()();
    return startToStart$855;
}
exports.getStartToStart=getStartToStart;
getStartToStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:startToStart$854},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','startToStart']};};
$prop$getStartToStart={get:getStartToStart,$$metamodel$$:getStartToStart.$$metamodel$$};
exports.$prop$getStartToStart=$prop$getStartToStart;
function RangeAbs($$rangeAbs){
    $init$RangeAbs();
    if ($$rangeAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$rangeAbs);
    function startContainer(){
        /*Begin dynamic block*/
        return Node($$rangeAbs.$native.startContainer);
        /*End dynamic block*/
    }
    $$rangeAbs.startContainer=startContainer;
    startContainer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','startContainer']};};
    function endContainer(){
        /*Begin dynamic block*/
        return Node($$rangeAbs.$native.endContainer);
        /*End dynamic block*/
    }
    $$rangeAbs.endContainer=endContainer;
    endContainer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','endContainer']};};
    function startOffset(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$rangeAbs.$native.startOffset);
        /*End dynamic block*/
    }
    $$rangeAbs.startOffset=startOffset;
    startOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','startOffset']};};
    function endOffset(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$rangeAbs.$native.endOffset);
        /*End dynamic block*/
    }
    $$rangeAbs.endOffset=endOffset;
    endOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','endOffset']};};
    function collapsed(){
        /*Begin dynamic block*/
        if($$rangeAbs.$native.collapsed()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$rangeAbs.collapsed=collapsed;
    collapsed.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','collapsed']};};
    function commonAncestorContainer(){
        /*Begin dynamic block*/
        return Node($$rangeAbs.$native.commonAncestorContainer);
        /*End dynamic block*/
    }
    $$rangeAbs.commonAncestorContainer=commonAncestorContainer;
    commonAncestorContainer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','commonAncestorContainer']};};
    function setStart(startNode$856,startOffset$857){
        
        var case$858=startOffset$857;
        if ($$$cl1.isOfType(startOffset$857,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$rangeAbs.$native.setStart(/*NULL PARAM!*/startNode$856/*NULL PARAM!*/,case$858);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(startOffset$857,{t:$$$cjl361.JSNumber})) {
            /*Begin dynamic block*/
            $$rangeAbs.$native.setStart(/*NULL PARAM!*/startNode$856/*NULL PARAM!*/,case$858.$native);
            /*End dynamic block*/
        }
    }
    $$rangeAbs.setStart=setStart;
    setStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'startNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'startOffset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setStart']};};
    function setEnd(endNode$859,endOffset$860){
        
        var case$861=endOffset$860;
        if ($$$cl1.isOfType(endOffset$860,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$rangeAbs.$native.setEnd(/*NULL PARAM!*/endNode$859/*NULL PARAM!*/,case$861);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(endOffset$860,{t:$$$cjl361.JSNumber})) {
            /*Begin dynamic block*/
            $$rangeAbs.$native.setEnd(/*NULL PARAM!*/endNode$859/*NULL PARAM!*/,case$861.$native);
            /*End dynamic block*/
        }
    }
    $$rangeAbs.setEnd=setEnd;
    setEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'endNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'endOffset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setEnd']};};
    function setStartBefore(refNode$862){
        /*Begin dynamic block*/
        $$rangeAbs.$native.setStartBefore(/*NULL PARAM!*/refNode$862);
        /*End dynamic block*/
    }
    $$rangeAbs.setStartBefore=setStartBefore;
    setStartBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setStartBefore']};};
    function setStartAfter(refNode$863){
        /*Begin dynamic block*/
        $$rangeAbs.$native.setStartAfter(/*NULL PARAM!*/refNode$863);
        /*End dynamic block*/
    }
    $$rangeAbs.setStartAfter=setStartAfter;
    setStartAfter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setStartAfter']};};
    function setEndBefore(refNode$864){
        /*Begin dynamic block*/
        $$rangeAbs.$native.setEndBefore(/*NULL PARAM!*/refNode$864);
        /*End dynamic block*/
    }
    $$rangeAbs.setEndBefore=setEndBefore;
    setEndBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setEndBefore']};};
    function setEndAfter(refNode$865){
        /*Begin dynamic block*/
        $$rangeAbs.$native.setEndAfter(/*NULL PARAM!*/refNode$865);
        /*End dynamic block*/
    }
    $$rangeAbs.setEndAfter=setEndAfter;
    setEndAfter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setEndAfter']};};
    $$rangeAbs.collapse$defs$toStart=function(toStart$866){return null;};
    function collapse(toStart$866){
        if(toStart$866===undefined){toStart$866=$$rangeAbs.collapse$defs$toStart(toStart$866);}
        /*Begin dynamic block*/
        var s$867;
        if((s$867=toStart$866)!==null){
            $$rangeAbs.$native.collapse(/*NULL PARAM!*/s$867);
        }else {
            $$rangeAbs.$native.collapse();
        }/*End dynamic block*/
    }
    $$rangeAbs.collapse=collapse;
    collapse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'toStart',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','collapse']};};
    function selectNode(refNode$868){
        /*Begin dynamic block*/
        $$rangeAbs.$native.selectNode(/*NULL PARAM!*/refNode$868);
        /*End dynamic block*/
    }
    $$rangeAbs.selectNode=selectNode;
    selectNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','selectNode']};};
    function selectNodeContents(refNode$869){
        /*Begin dynamic block*/
        $$rangeAbs.$native.selectNodeContents(/*NULL PARAM!*/refNode$869);
        /*End dynamic block*/
    }
    $$rangeAbs.selectNodeContents=selectNodeContents;
    selectNodeContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','selectNodeContents']};};
    function compareBoundaryPoints(how$870,sourceRange$871){
        /*Begin dynamic block*/
        
        var case$872=how$870;
        if (case$872===getEndToEnd()) {
            return $$$cjl361.JSNumber($$rangeAbs.$native.compareBoundaryPoints(/*NULL PARAM!*/(typeof Range==='undefined'||Range===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Range")),'130:61-130:65','range.ceylon'):Range).START_TO_START/*NULL PARAM!*/,sourceRange$871));
        }else if (case$872===getEndToStart()) {
            return $$$cjl361.JSNumber($$rangeAbs.$native.compareBoundaryPoints(/*NULL PARAM!*/(typeof Range==='undefined'||Range===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Range")),'133:61-133:65','range.ceylon'):Range).START_TO_END/*NULL PARAM!*/,sourceRange$871));
        }else if (case$872===getStartToEnd()) {
            return $$$cjl361.JSNumber($$rangeAbs.$native.compareBoundaryPoints(/*NULL PARAM!*/(typeof Range==='undefined'||Range===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Range")),'136:61-136:65','range.ceylon'):Range).END_TO_END/*NULL PARAM!*/,sourceRange$871));
        }else if (case$872===getStartToStart()) {
            return $$$cjl361.JSNumber($$rangeAbs.$native.compareBoundaryPoints(/*NULL PARAM!*/(typeof Range==='undefined'||Range===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Range")),'139:61-139:65','range.ceylon'):Range).END_TO_START/*NULL PARAM!*/,sourceRange$871));
        }/*End dynamic block*/
    }
    $$rangeAbs.compareBoundaryPoints=compareBoundaryPoints;
    compareBoundaryPoints.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[{$nm:'how',$mt:'prm',$t:{t:RangeCompareHow},$an:function(){return[];}},{$nm:'sourceRange',$mt:'prm',$t:{t:Range},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','compareBoundaryPoints']};};
    function deleteContents(){
        /*Begin dynamic block*/
        $$rangeAbs.$native.deleteContents();
        /*End dynamic block*/
    }
    $$rangeAbs.deleteContents=deleteContents;
    deleteContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','deleteContents']};};
    function extractContents(){
        /*Begin dynamic block*/
        return DocumentFragment($$rangeAbs.$native.extractContents());
        /*End dynamic block*/
    }
    $$rangeAbs.extractContents=extractContents;
    extractContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentFragment},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','extractContents']};};
    function cloneContents(){
        /*Begin dynamic block*/
        return DocumentFragment($$rangeAbs.$native.cloneContents());
        /*End dynamic block*/
    }
    $$rangeAbs.cloneContents=cloneContents;
    cloneContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentFragment},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','cloneContents']};};
    function insertNode(newNode$873){
        /*Begin dynamic block*/
        $$rangeAbs.$native.insertNode(/*NULL PARAM!*/newNode$873);
        /*End dynamic block*/
    }
    $$rangeAbs.insertNode=insertNode;
    insertNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'newNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','insertNode']};};
    function surroundContents(newNode$874){
        /*Begin dynamic block*/
        $$rangeAbs.$native.surroundContents(/*NULL PARAM!*/newNode$874);
        /*End dynamic block*/
    }
    $$rangeAbs.surroundContents=surroundContents;
    surroundContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'newNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','surroundContents']};};
    function cloneRange(){
        /*Begin dynamic block*/
        return (tmpvar$875=$$rangeAbs.$native.cloneRange(),$$$cl1.isOfType(tmpvar$875,{t:$$$cl1.Anything})?tmpvar$875:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'176:19-176:37','range.ceylon'));
        /*End dynamic block*/
    }
    $$rangeAbs.cloneRange=cloneRange;
    cloneRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Range},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','cloneRange']};};
    function detach(){
        /*Begin dynamic block*/
        $$rangeAbs.$native.detach();
        /*End dynamic block*/
    }
    $$rangeAbs.detach=detach;
    detach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','detach']};};
    function isPointInRange(node$876,offset$877){
        var inRange$878;
        
        var case$879=offset$877;
        if ($$$cl1.isOfType(offset$877,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            inRange$878=$$rangeAbs.$native.isPointInRange(/*NULL PARAM!*/node$876/*NULL PARAM!*/,case$879);/*End dynamic block*/
        }else if ($$$cl1.isOfType(offset$877,{t:$$$cjl361.JSNumber})) {
            /*Begin dynamic block*/
            inRange$878=$$rangeAbs.$native.isPointInRange(/*NULL PARAM!*/node$876/*NULL PARAM!*/,case$879.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(inRange$878){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$rangeAbs.isPointInRange=isPointInRange;
    isPointInRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','isPointInRange']};};
    return $$rangeAbs;
}
RangeAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','RangeAbs']};};
exports.RangeAbs=RangeAbs;
function $init$RangeAbs(){
    if (RangeAbs.$$===undefined){
        $$$cl1.initTypeProto(RangeAbs,'ceylon.js.dom::RangeAbs',$$$cjl361.JSObjectAbs);
    }
    return RangeAbs;
}
exports.$init$RangeAbs=$init$RangeAbs;
$init$RangeAbs();
function Range(n$880, $$range){
    $init$Range();
    if ($$range===undefined)$$range=new Range.$$;
    $$range.n$880_=n$880;
    RangeAbs($$range);
    $$$cl1.defineAttr($$range,'n$880',function(){return this.n$880_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Range,d:['ceylon.js.dom','Range','$at','n']};});
    $$range.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Range,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Range','$at','native']};}};
    /*Begin dynamic block*/
    $$range.$native=n$880;/*End dynamic block*/
    return $$range;
}
Range.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RangeAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','Range']};};
exports.Range=Range;
function $init$Range(){
    if (Range.$$===undefined){
        $$$cl1.initTypeProto(Range,'ceylon.js.dom::Range',$init$RangeAbs());
    }
    return Range;
}
exports.$init$Range=$init$Range;
$init$Range();
function MediaListAbs$stylesheets($$mediaListAbs){
    $init$MediaListAbs$stylesheets();
    if ($$mediaListAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$mediaListAbs);
    function getMediaText(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$mediaListAbs.$native.mediaText);
        /*End dynamic block*/
    }
    $$mediaListAbs.getMediaText=getMediaText;
    getMediaText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','getMediaText']};};
    function setMediaText(text$881){
        
        var case$882=text$881;
        if ($$$cl1.isOfType(text$881,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.mediaText=case$882.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(text$881,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.mediaText=case$882.$native;
            /*End dynamic block*/
        }
    }
    $$mediaListAbs.setMediaText=setMediaText;
    setMediaText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','setMediaText']};};
    function length(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$mediaListAbs.$native.length);
        /*End dynamic block*/
    }
    $$mediaListAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','length']};};
    function item(index$883){
        
        var case$884=index$883;
        if ($$$cl1.isOfType(index$883,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            return $$$cjl361.JSString($$mediaListAbs.$native.item(/*NULL PARAM!*/case$884));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(index$883,{t:$$$cjl361.JSNumber})) {
            /*Begin dynamic block*/
            return $$$cjl361.JSString($$mediaListAbs.$native.item(/*NULL PARAM!*/case$884.$native));
            /*End dynamic block*/
        }
    }
    $$mediaListAbs.item=item;
    item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','item']};};
    function deleteMedium(oldMedium$885){
        
        var case$886=oldMedium$885;
        if ($$$cl1.isOfType(oldMedium$885,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.deleteMedium(/*NULL PARAM!*/case$886.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(oldMedium$885,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.deleteMedium(/*NULL PARAM!*/case$886.$native);
            /*End dynamic block*/
        }
    }
    $$mediaListAbs.deleteMedium=deleteMedium;
    deleteMedium.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'oldMedium',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','deleteMedium']};};
    function appendMedium(newMedium$887){
        
        var case$888=newMedium$887;
        if ($$$cl1.isOfType(newMedium$887,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.appendMedium(/*NULL PARAM!*/case$888.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(newMedium$887,{t:$$$cjl361.JSString})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.appendMedium(/*NULL PARAM!*/case$888.$native);
            /*End dynamic block*/
        }
    }
    $$mediaListAbs.appendMedium=appendMedium;
    appendMedium.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'newMedium',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl361.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','appendMedium']};};
    return $$mediaListAbs;
}
MediaListAbs$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom.stylesheets','MediaListAbs']};};
exports.MediaListAbs$stylesheets=MediaListAbs$stylesheets;
function $init$MediaListAbs$stylesheets(){
    if (MediaListAbs$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(MediaListAbs$stylesheets,'ceylon.js.dom.stylesheets::MediaListAbs',$$$cjl361.JSObjectAbs);
    }
    return MediaListAbs$stylesheets;
}
exports.$init$MediaListAbs$stylesheets=$init$MediaListAbs$stylesheets;
$init$MediaListAbs$stylesheets();
function MediaList$stylesheets(n$889, $$mediaList){
    $init$MediaList$stylesheets();
    if ($$mediaList===undefined)$$mediaList=new MediaList$stylesheets.$$;
    $$mediaList.n$889_=n$889;
    MediaListAbs$stylesheets($$mediaList);
    $$$cl1.defineAttr($$mediaList,'n$889',function(){return this.n$889_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:MediaList$stylesheets,d:['ceylon.js.dom.stylesheets','MediaList','$at','n']};});
    $$mediaList.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:MediaList$stylesheets,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom.stylesheets','MediaList','$at','native']};}};
    /*Begin dynamic block*/
    $$mediaList.$native=n$889;/*End dynamic block*/
    return $$mediaList;
}
MediaList$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:MediaListAbs$stylesheets},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaList']};};
exports.MediaList$stylesheets=MediaList$stylesheets;
function $init$MediaList$stylesheets(){
    if (MediaList$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(MediaList$stylesheets,'ceylon.js.dom.stylesheets::MediaList',$init$MediaListAbs$stylesheets());
    }
    return MediaList$stylesheets;
}
exports.$init$MediaList$stylesheets=$init$MediaList$stylesheets;
$init$MediaList$stylesheets();
exports.$pkg$ans$ceylon$js$dom$stylesheets=function(){return[$$$cl1.shared()];};
function StyleSheetAbs$stylesheets($$styleSheetAbs){
    $init$StyleSheetAbs$stylesheets();
    if ($$styleSheetAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$styleSheetAbs);
    function type(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$styleSheetAbs.$native.type);
        /*End dynamic block*/
    }
    $$styleSheetAbs.type=type;
    type.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','type']};};
    function disabled(){
        /*Begin dynamic block*/
        if($$styleSheetAbs.$native.disabled){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$styleSheetAbs.disabled=disabled;
    disabled.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','disabled']};};
    function ownerNode(){
        /*Begin dynamic block*/
        return Node($$styleSheetAbs.$native.ownerNode);
        /*End dynamic block*/
    }
    $$styleSheetAbs.ownerNode=ownerNode;
    ownerNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','ownerNode']};};
    function parentStyleSheet(){
        /*Begin dynamic block*/
        return StyleSheet$stylesheets($$styleSheetAbs.$native.parentStyleSheet);
        /*End dynamic block*/
    }
    $$styleSheetAbs.parentStyleSheet=parentStyleSheet;
    parentStyleSheet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:StyleSheet$stylesheets},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','parentStyleSheet']};};
    function href(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$styleSheetAbs.$native.href);
        /*End dynamic block*/
    }
    $$styleSheetAbs.href=href;
    href.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','href']};};
    function title(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$styleSheetAbs.$native.title);
        /*End dynamic block*/
    }
    $$styleSheetAbs.title=title;
    title.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','title']};};
    function media(){
        /*Begin dynamic block*/
        return MediaList$stylesheets($$styleSheetAbs.$native.media);
        /*End dynamic block*/
    }
    $$styleSheetAbs.media=media;
    media.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:MediaList$stylesheets},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','media']};};
    return $$styleSheetAbs;
}
StyleSheetAbs$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs']};};
exports.StyleSheetAbs$stylesheets=StyleSheetAbs$stylesheets;
function $init$StyleSheetAbs$stylesheets(){
    if (StyleSheetAbs$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(StyleSheetAbs$stylesheets,'ceylon.js.dom.stylesheets::StyleSheetAbs',$$$cjl361.JSObjectAbs);
    }
    return StyleSheetAbs$stylesheets;
}
exports.$init$StyleSheetAbs$stylesheets=$init$StyleSheetAbs$stylesheets;
$init$StyleSheetAbs$stylesheets();
function StyleSheet$stylesheets(n$890, $$styleSheet){
    $init$StyleSheet$stylesheets();
    if ($$styleSheet===undefined)$$styleSheet=new StyleSheet$stylesheets.$$;
    $$styleSheet.n$890_=n$890;
    StyleSheetAbs$stylesheets($$styleSheet);
    $$$cl1.defineAttr($$styleSheet,'n$890',function(){return this.n$890_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:StyleSheet$stylesheets,d:['ceylon.js.dom.stylesheets','StyleSheet','$at','n']};});
    $$styleSheet.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:StyleSheet$stylesheets,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom.stylesheets','StyleSheet','$at','native']};}};
    /*Begin dynamic block*/
    $$styleSheet.$native=n$890;/*End dynamic block*/
    return $$styleSheet;
}
StyleSheet$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:StyleSheetAbs$stylesheets},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheet']};};
exports.StyleSheet$stylesheets=StyleSheet$stylesheets;
function $init$StyleSheet$stylesheets(){
    if (StyleSheet$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(StyleSheet$stylesheets,'ceylon.js.dom.stylesheets::StyleSheet',$init$StyleSheetAbs$stylesheets());
    }
    return StyleSheet$stylesheets;
}
exports.$init$StyleSheet$stylesheets=$init$StyleSheet$stylesheets;
$init$StyleSheet$stylesheets();
function StyleSheetListAbs$stylesheets($$styleSheetListAbs){
    $init$StyleSheetListAbs$stylesheets();
    if ($$styleSheetListAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$styleSheetListAbs);
    function length(){
        /*Begin dynamic block*/
        return $$$cjl361.JSNumber($$styleSheetListAbs.$native.length);
        /*End dynamic block*/
    }
    $$styleSheetListAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSNumber},$ps:[],$cont:StyleSheetListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','length']};};
    function item(index$891){
        /*Begin dynamic block*/
        var element$892=$$styleSheetListAbs.$native.item(/*NULL PARAM!*/index$891);
        $prop$getElement$892={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','item','$at','element']};}};
        $prop$getElement$892.get=function(){return element$892};
        if((tmpvar$893=element$892,tmpvar$894=null,(tmpvar$893.equals&&!tmpvar$893.equals(tmpvar$894))||tmpvar$893!==tmpvar$894)){
            return StyleSheet$stylesheets(element$892);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$styleSheetListAbs.item=item;
    item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:StyleSheet$stylesheets}]},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}}],$cont:StyleSheetListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','item']};};
    return $$styleSheetListAbs;
}
StyleSheetListAbs$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom.stylesheets','StyleSheetListAbs']};};
exports.StyleSheetListAbs$stylesheets=StyleSheetListAbs$stylesheets;
function $init$StyleSheetListAbs$stylesheets(){
    if (StyleSheetListAbs$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(StyleSheetListAbs$stylesheets,'ceylon.js.dom.stylesheets::StyleSheetListAbs',$$$cjl361.JSObjectAbs);
    }
    return StyleSheetListAbs$stylesheets;
}
exports.$init$StyleSheetListAbs$stylesheets=$init$StyleSheetListAbs$stylesheets;
$init$StyleSheetListAbs$stylesheets();
function StyleSheetList$stylesheets(n$895, $$styleSheetList){
    $init$StyleSheetList$stylesheets();
    if ($$styleSheetList===undefined)$$styleSheetList=new StyleSheetList$stylesheets.$$;
    $$styleSheetList.n$895_=n$895;
    StyleSheetListAbs$stylesheets($$styleSheetList);
    $$$cl1.defineAttr($$styleSheetList,'n$895',function(){return this.n$895_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:StyleSheetList$stylesheets,d:['ceylon.js.dom.stylesheets','StyleSheetList','$at','n']};});
    $$styleSheetList.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:StyleSheetList$stylesheets,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom.stylesheets','StyleSheetList','$at','native']};}};
    /*Begin dynamic block*/
    $$styleSheetList.$native=n$895;/*End dynamic block*/
    return $$styleSheetList;
}
StyleSheetList$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:StyleSheetListAbs$stylesheets},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetList']};};
exports.StyleSheetList$stylesheets=StyleSheetList$stylesheets;
function $init$StyleSheetList$stylesheets(){
    if (StyleSheetList$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(StyleSheetList$stylesheets,'ceylon.js.dom.stylesheets::StyleSheetList',$init$StyleSheetListAbs$stylesheets());
    }
    return StyleSheetList$stylesheets;
}
exports.$init$StyleSheetList$stylesheets=$init$StyleSheetList$stylesheets;
$init$StyleSheetList$stylesheets();
function CDATASectionAbs($$cDATASectionAbs){
    $init$CDATASectionAbs();
    if ($$cDATASectionAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    TextAbs($$cDATASectionAbs);
    return $$cDATASectionAbs;
}
CDATASectionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TextAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','CDATASectionAbs']};};
exports.CDATASectionAbs=CDATASectionAbs;
function $init$CDATASectionAbs(){
    if (CDATASectionAbs.$$===undefined){
        $$$cl1.initTypeProto(CDATASectionAbs,'ceylon.js.dom::CDATASectionAbs',$init$TextAbs());
    }
    return CDATASectionAbs;
}
exports.$init$CDATASectionAbs=$init$CDATASectionAbs;
$init$CDATASectionAbs();
function CDATASection(n$896, $$cDATASection){
    $init$CDATASection();
    if ($$cDATASection===undefined)$$cDATASection=new CDATASection.$$;
    $$cDATASection.n$896_=n$896;
    CDATASectionAbs($$cDATASection);
    $$$cl1.defineAttr($$cDATASection,'n$896',function(){return this.n$896_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CDATASection,d:['ceylon.js.dom','CDATASection','$at','n']};});
    $$cDATASection.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CDATASection,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','CDATASection','$at','native']};}};
    /*Begin dynamic block*/
    $$cDATASection.$native=n$896;/*End dynamic block*/
    return $$cDATASection;
}
CDATASection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CDATASectionAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CDATASection']};};
exports.CDATASection=CDATASection;
function $init$CDATASection(){
    if (CDATASection.$$===undefined){
        $$$cl1.initTypeProto(CDATASection,'ceylon.js.dom::CDATASection',$init$CDATASectionAbs());
    }
    return CDATASection;
}
exports.$init$CDATASection=$init$CDATASection;
$init$CDATASection();
function TextAbs($$textAbs){
    $init$TextAbs();
    if ($$textAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    CharacterDataAbs($$textAbs);
    function splitText(offset$897){
        
        var case$898=offset$897;
        if ($$$cl1.isOfType(offset$897,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            return Text($$textAbs.$native.splitText(/*NULL PARAM!*/case$898));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(offset$897,{t:$$$cjl361.JSNumber})) {
            /*Begin dynamic block*/
            return Text($$textAbs.$native.splitText(/*NULL PARAM!*/case$898.$native));
            /*End dynamic block*/
        }
    }
    $$textAbs.splitText=splitText;
    splitText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Text},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl361.JSNumber}]},$an:function(){return[];}}],$cont:TextAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TextAbs','$m','splitText']};};
    function wholeText(){
        /*Begin dynamic block*/
        return $$$cjl361.JSString($$textAbs.$native.wholeText);
        /*End dynamic block*/
    }
    $$textAbs.wholeText=wholeText;
    wholeText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl361.JSString},$ps:[],$cont:TextAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TextAbs','$m','wholeText']};};
    return $$textAbs;
}
TextAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CharacterDataAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','TextAbs']};};
exports.TextAbs=TextAbs;
function $init$TextAbs(){
    if (TextAbs.$$===undefined){
        $$$cl1.initTypeProto(TextAbs,'ceylon.js.dom::TextAbs',$init$CharacterDataAbs());
    }
    return TextAbs;
}
exports.$init$TextAbs=$init$TextAbs;
$init$TextAbs();
function Text(n$899, $$text){
    $init$Text();
    if ($$text===undefined)$$text=new Text.$$;
    $$text.n$899_=n$899;
    TextAbs($$text);
    $$$cl1.defineAttr($$text,'n$899',function(){return this.n$899_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Text,d:['ceylon.js.dom','Text','$at','n']};});
    /*Begin dynamic block*/
    $$text.$native=n$899;/*End dynamic block*/
    return $$text;
}
Text.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TextAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','Text']};};
exports.Text=Text;
function $init$Text(){
    if (Text.$$===undefined){
        $$$cl1.initTypeProto(Text,'ceylon.js.dom::Text',$init$TextAbs());
    }
    return Text;
}
exports.$init$Text=$init$Text;
$init$Text();
function TreeWalkerAbs($$treeWalkerAbs){
    $init$TreeWalkerAbs();
    if ($$treeWalkerAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl361.JSObjectAbs($$treeWalkerAbs);
    function root(){
        /*Begin dynamic block*/
        return Node($$treeWalkerAbs.$native.root);
        /*End dynamic block*/
    }
    $$treeWalkerAbs.root=root;
    root.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','root']};};
    function whatToShow(){
        /*Begin dynamic block*/
        return (tmpvar$900=$$treeWalkerAbs.$native.whatToShow,$$$cl1.isOfType(tmpvar$900,{t:$$$cl1.Anything})?tmpvar$900:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'13:19-13:35','treewalker.ceylon'));
        /*End dynamic block*/
    }
    $$treeWalkerAbs.whatToShow=whatToShow;
    whatToShow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','whatToShow']};};
    function filter(){
        /*Begin dynamic block*/
        var filter$901=$$treeWalkerAbs.$native.filter;
        $prop$getFilter$901={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','filter','$at','filter']};}};
        $prop$getFilter$901.get=function(){return filter$901};
        if((tmpvar$902=filter$901,tmpvar$903=null,(tmpvar$902.equals&&!tmpvar$902.equals(tmpvar$903))||tmpvar$902!==tmpvar$903)){
            return NodeFilter((tmpvar$904=filter$901,$$$cl1.isOfType(tmpvar$904,{t:NodeFilterResult})?tmpvar$904:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'21:34-21:39','treewalker.ceylon')));
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.filter=filter;
    filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:NodeFilter}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','filter']};};
    function currentNode(){
        /*Begin dynamic block*/
        return Node($$treeWalkerAbs.$native.currentNode());
        /*End dynamic block*/
    }
    $$treeWalkerAbs.currentNode=currentNode;
    currentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','currentNode']};};
    function parentNode(){
        /*Begin dynamic block*/
        var parent$905=$$treeWalkerAbs.$native.parentNode();
        $prop$getParent$905={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','parentNode','$at','parent']};}};
        $prop$getParent$905.get=function(){return parent$905};
        if((tmpvar$906=parent$905,tmpvar$907=null,(tmpvar$906.equals&&!tmpvar$906.equals(tmpvar$907))||tmpvar$906!==tmpvar$907)){
            return Node(parent$905);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.parentNode=parentNode;
    parentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','parentNode']};};
    function firstChild(){
        /*Begin dynamic block*/
        var first$908=$$treeWalkerAbs.$native.firstChild();
        $prop$getFirst$908={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','firstChild','$at','first']};}};
        $prop$getFirst$908.get=function(){return first$908};
        if((tmpvar$909=first$908,tmpvar$910=null,(tmpvar$909.equals&&!tmpvar$909.equals(tmpvar$910))||tmpvar$909!==tmpvar$910)){
            return Node(first$908);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.firstChild=firstChild;
    firstChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','firstChild']};};
    function lastChild(){
        /*Begin dynamic block*/
        var last$911=$$treeWalkerAbs.$native.lastChild();
        $prop$getLast$911={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','lastChild','$at','last']};}};
        $prop$getLast$911.get=function(){return last$911};
        if((tmpvar$912=last$911,tmpvar$913=null,(tmpvar$912.equals&&!tmpvar$912.equals(tmpvar$913))||tmpvar$912!==tmpvar$913)){
            return Node(last$911);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.lastChild=lastChild;
    lastChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','lastChild']};};
    function previousSibling(){
        /*Begin dynamic block*/
        var previous$914=$$treeWalkerAbs.$native.previousSibling();
        $prop$getPrevious$914={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','previousSibling','$at','previous']};}};
        $prop$getPrevious$914.get=function(){return previous$914};
        if((tmpvar$915=previous$914,tmpvar$916=null,(tmpvar$915.equals&&!tmpvar$915.equals(tmpvar$916))||tmpvar$915!==tmpvar$916)){
            return Node(previous$914);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.previousSibling=previousSibling;
    previousSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','previousSibling']};};
    function nextSibling(){
        /*Begin dynamic block*/
        var next$917=$$treeWalkerAbs.$native.nextSibling();
        $prop$getNext$917={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','nextSibling','$at','next']};}};
        $prop$getNext$917.get=function(){return next$917};
        if((tmpvar$918=next$917,tmpvar$919=null,(tmpvar$918.equals&&!tmpvar$918.equals(tmpvar$919))||tmpvar$918!==tmpvar$919)){
            return Node(next$917);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.nextSibling=nextSibling;
    nextSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','nextSibling']};};
    function previousNode(){
        /*Begin dynamic block*/
        var previous$920=$$treeWalkerAbs.$native.previousNode();
        $prop$getPrevious$920={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','previousNode','$at','previous']};}};
        $prop$getPrevious$920.get=function(){return previous$920};
        if((tmpvar$921=previous$920,tmpvar$922=null,(tmpvar$921.equals&&!tmpvar$921.equals(tmpvar$922))||tmpvar$921!==tmpvar$922)){
            return Node(previous$920);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.previousNode=previousNode;
    previousNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','previousNode']};};
    function nextNode(){
        /*Begin dynamic block*/
        var next$923=$$treeWalkerAbs.$native.nextNode();
        $prop$getNext$923={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','nextNode','$at','next']};}};
        $prop$getNext$923.get=function(){return next$923};
        if((tmpvar$924=next$923,tmpvar$925=null,(tmpvar$924.equals&&!tmpvar$924.equals(tmpvar$925))||tmpvar$924!==tmpvar$925)){
            return Node(next$923);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.nextNode=nextNode;
    nextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','nextNode']};};
    return $$treeWalkerAbs;
}
TreeWalkerAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl361.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','TreeWalkerAbs']};};
exports.TreeWalkerAbs=TreeWalkerAbs;
function $init$TreeWalkerAbs(){
    if (TreeWalkerAbs.$$===undefined){
        $$$cl1.initTypeProto(TreeWalkerAbs,'ceylon.js.dom::TreeWalkerAbs',$$$cjl361.JSObjectAbs);
    }
    return TreeWalkerAbs;
}
exports.$init$TreeWalkerAbs=$init$TreeWalkerAbs;
$init$TreeWalkerAbs();
function TreeWalker(n$926, $$treeWalker){
    $init$TreeWalker();
    if ($$treeWalker===undefined)$$treeWalker=new TreeWalker.$$;
    $$treeWalker.n$926_=n$926;
    TreeWalkerAbs($$treeWalker);
    $$$cl1.defineAttr($$treeWalker,'n$926',function(){return this.n$926_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:TreeWalker,d:['ceylon.js.dom','TreeWalker','$at','n']};});
    $$treeWalker.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:TreeWalker,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','TreeWalker','$at','native']};}};
    /*Begin dynamic block*/
    $$treeWalker.$native=n$926;/*End dynamic block*/
    return $$treeWalker;
}
TreeWalker.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TreeWalkerAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalker']};};
exports.TreeWalker=TreeWalker;
function $init$TreeWalker(){
    if (TreeWalker.$$===undefined){
        $$$cl1.initTypeProto(TreeWalker,'ceylon.js.dom::TreeWalker',$init$TreeWalkerAbs());
    }
    return TreeWalker;
}
exports.$init$TreeWalker=$init$TreeWalker;
$init$TreeWalker();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
