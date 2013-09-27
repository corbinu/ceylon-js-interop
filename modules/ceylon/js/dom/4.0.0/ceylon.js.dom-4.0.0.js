(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1","ceylon.js.language\/1.8.5","ceylon.js.html\/5.0.0","ceylon.js.json\/1.0.0"],"$mod-name":"ceylon.js.dom","ceylon.js.dom":{"attributeNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"attributeNode"},"endToStart":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"endToStart"},"Attr":{"super":{"$pk":"ceylon.js.dom","$nm":"AttrAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Attr"},"documentTypeNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentTypeNode"},"ltr":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"obj","$an":{"shared":[]},"$nm":"ltr"},"TextAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"CharacterDataAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"wholeText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"wholeText"},"splitText":{"$t":{"$pk":"ceylon.js.dom","$nm":"Text"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"splitText"}},"$nm":"TextAbs"},"notationNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"notationNode"},"capturePhase":{"super":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"capturePhase"},"ProcessingInstructionAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"target":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"target"},"setData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"}},"$nm":"ProcessingInstructionAbs"},"filterSkip":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$mt":"obj","$an":{"shared":[]},"$nm":"filterSkip"},"filterAccept":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$mt":"obj","$an":{"shared":[]},"$nm":"filterAccept"},"$pkg-shared":"1","documentPositionFollowing":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionFollowing"},"css1Compat":{"super":{"$pk":"ceylon.js.dom","$nm":"CompatMode"},"$mt":"obj","$an":{"shared":[]},"$nm":"css1Compat"},"EventInit":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$an":{"shared":[]},"$nm":"bubbles"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$an":{"shared":[]},"$nm":"cancelable"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toJson":{"$t":{"$md":"ceylon.js.json","$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"}},"$at":{"bubbles":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"bubbles"},"cancelable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"cancelable"}},"$nm":"EventInit"},"EventTargetAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"addEventListener":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"capture"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"addEventListener"},"dispatchEvent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dispatchEvent"},"removeEventListener":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"capture"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"removeEventListener"}},"$nm":"EventTargetAbs"},"CDATASectionAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"TextAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"CDATASectionAbs"},"none":{"super":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"none"},"filterReject":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$mt":"obj","$an":{"shared":[]},"$nm":"filterReject"},"DocumentTypeAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"name":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"name"},"publicId":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"publicId"},"systemId":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"systemId"}},"$nm":"DocumentTypeAbs"},"NodeListAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"item":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"item"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"}},"$nm":"NodeListAbs"},"EntityReference":{"super":{"$pk":"ceylon.js.dom","$nm":"EntityReferenceAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"EntityReference"},"documentPositionImplementationSpecific":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionImplementationSpecific"},"ElementAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"hasAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasAttribute"},"getAttributeNS":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getAttributeNS"},"getElementsByTagName":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"tagName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByTagName"},"getElementsByTagNameNS":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"tagName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByTagNameNS"},"removeAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attrName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeAttributeNS"},"tagName":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"tagName"},"removeAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attrName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeAttribute"},"setAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttributeNS"},"setAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttribute"},"getAttribute":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getAttribute"},"hasAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasAttributeNS"}},"$nm":"ElementAbs"},"startToStart":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"startToStart"},"CompatMode":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"css1Compat"},{"$pk":"ceylon.js.dom","$nm":"backCompat"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"CompatMode"},"rtl":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"obj","$an":{"shared":[]},"$nm":"rtl"},"DocumentFragment":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentFragmentAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"DocumentFragment"},"loading":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"loading"},"documentPositionContainedBy":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionContainedBy"},"Event":{"super":{"$pk":"ceylon.js.dom","$nm":"EventAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Event"},"Comment":{"super":{"$pk":"ceylon.js.dom","$nm":"CommentAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Comment"},"EventAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"defaultPrevented":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"defaultPrevented"},"timeStamp":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSDate"},"$mt":"mthd","$an":{"shared":[]},"$nm":"timeStamp"},"stopPropagation":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"stopPropagation"},"eventPhase":{"$t":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"mthd","$an":{"shared":[]},"$nm":"eventPhase"},"currentTarget":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"EventTarget"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"currentTarget"},"bubbles":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"bubbles"},"stopImmediatePropagation":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"stopImmediatePropagation"},"target":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"EventTarget"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"target"},"isTrusted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isTrusted"},"cancelable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"cancelable"},"preventDefault":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"preventDefault"},"type":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"type"},"initEvent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"bubbles"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"cancelable"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"initEvent"}},"$nm":"EventAbs"},"NodeFilterResult":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"filterAccept"},{"$pk":"ceylon.js.dom","$nm":"filterReject"},{"$pk":"ceylon.js.dom","$nm":"filterSkip"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"NodeFilterResult"},"documentPositionPreceding":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionPreceding"},"DocumentDirection":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"rtl"},{"$pk":"ceylon.js.dom","$nm":"ltr"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DocumentDirection"},"createEvent":{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$pk":"ceylon.js.dom","$nm":"EventInit"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createEvent"},"DocumentFragmentAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"DocumentFragmentAbs"},"RangeAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"extractContents":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentFragment"},"$mt":"mthd","$an":{"shared":[]},"$nm":"extractContents"},"detach":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"detach"},"compareBoundaryPoints":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"prm","$nm":"how"},{"$t":{"$pk":"ceylon.js.dom","$nm":"Range"},"$mt":"prm","$nm":"sourceRange"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"compareBoundaryPoints"},"selectNodeContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"selectNodeContents"},"insertNode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertNode"},"deleteContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"deleteContents"},"setStartAfter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setStartAfter"},"startOffset":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"startOffset"},"collapsed":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"collapsed"},"cloneRange":{"$t":{"$pk":"ceylon.js.dom","$nm":"Range"},"$mt":"mthd","$an":{"shared":[]},"$nm":"cloneRange"},"surroundContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"surroundContents"},"cloneContents":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentFragment"},"$mt":"mthd","$an":{"shared":[]},"$nm":"cloneContents"},"selectNode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"selectNode"},"endOffset":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"endOffset"},"setStart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"startNode"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"startOffset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setStart"},"isPointInRange":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isPointInRange"},"commonAncestorContainer":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"commonAncestorContainer"},"startContainer":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"startContainer"},"endContainer":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"endContainer"},"setEndAfter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEndAfter"},"setStartBefore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setStartBefore"},"setEndBefore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEndBefore"},"setEnd":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"endNode"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"endOffset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEnd"},"collapse":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"toStart"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"collapse"}},"$nm":"RangeAbs"},"Node":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Node"},"NodeType":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"attributeNode"},{"$pk":"ceylon.js.dom","$nm":"cdataSectionNode"},{"$pk":"ceylon.js.dom","$nm":"commentNode"},{"$pk":"ceylon.js.dom","$nm":"documentFragmentNode"},{"$pk":"ceylon.js.dom","$nm":"documentNode"},{"$pk":"ceylon.js.dom","$nm":"documentTypeNode"},{"$pk":"ceylon.js.dom","$nm":"elementNode"},{"$pk":"ceylon.js.dom","$nm":"entityNode"},{"$pk":"ceylon.js.dom","$nm":"entityReferenceNode"},{"$pk":"ceylon.js.dom","$nm":"notationNode"},{"$pk":"ceylon.js.dom","$nm":"processingInstructionNode"},{"$pk":"ceylon.js.dom","$nm":"textNode"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"NodeType"},"processingInstructionNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"processingInstructionNode"},"endToEnd":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"endToEnd"},"CharacterDataAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"replaceData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"count"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceData"},"getData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"deleteData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"count"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"deleteData"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"insertData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertData"},"appendData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendData"},"substringData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"count"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"substringData"},"setData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"}},"$nm":"CharacterDataAbs"},"commentNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"commentNode"},"NodeList":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeListAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"NodeList"},"documentPositionContains":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionContains"},"TreeWalkerAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"previousSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"previousSibling"},"whatToShow":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"whatToShow"},"parentNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"parentNode"},"root":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"root"},"firstChild":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"firstChild"},"currentNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"currentNode"},"nextNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"nextNode"},"nextSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"nextSibling"},"filter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"filter"},"previousNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"previousNode"},"lastChild":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"lastChild"}},"$nm":"TreeWalkerAbs"},"CharacterData":{"super":{"$pk":"ceylon.js.dom","$nm":"CharacterDataAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"CharacterData"},"DOMImplementationAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"createDocument":{"$t":{"$pk":"ceylon.js.dom","$nm":"Document"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"qualifiedName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"DocumentType"}]},"$mt":"prm","$def":"1","$nm":"doctype"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createDocument"},"createDocumentType":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentType"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"qualifiedName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"publicId"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"systemId"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createDocumentType"},"hasFeature":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"feature"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"version"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasFeature"}},"$nm":"DOMImplementationAbs"},"documentFragmentNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentFragmentNode"},"DocumentPosition":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"documentPositionContainedBy"},{"$pk":"ceylon.js.dom","$nm":"documentPositionContains"},{"$pk":"ceylon.js.dom","$nm":"documentPositionDisconnected"},{"$pk":"ceylon.js.dom","$nm":"documentPositionFollowing"},{"$pk":"ceylon.js.dom","$nm":"documentPositionImplementationSpecific"},{"$pk":"ceylon.js.dom","$nm":"documentPositionPreceding"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DocumentPosition"},"HTMLCollectionAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"item":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Element"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"item"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"namedItem":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"namedItem"}},"$nm":"HTMLCollectionAbs"},"RangeCompareHow":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"endToEnd"},{"$pk":"ceylon.js.dom","$nm":"endToStart"},{"$pk":"ceylon.js.dom","$nm":"startToEnd"},{"$pk":"ceylon.js.dom","$nm":"startToStart"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"RangeCompareHow"},"NodeIteratorAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"whatToShow":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"whatToShow"},"root":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"root"},"nextNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"nextNode"},"filter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"filter"},"previousNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"previousNode"}},"$nm":"NodeIteratorAbs"},"entityNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"entityNode"},"backCompat":{"super":{"$pk":"ceylon.js.dom","$nm":"CompatMode"},"$mt":"obj","$an":{"shared":[]},"$nm":"backCompat"},"HTMLCollection":{"super":{"$pk":"ceylon.js.dom","$nm":"HTMLCollectionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"HTMLCollection"},"textNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"textNode"},"interactive":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"interactive"},"complete":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"complete"},"NodeIterator":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeIteratorAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"NodeIterator"},"startToEnd":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"startToEnd"},"DOMImplementation":{"super":{"$pk":"ceylon.js.dom","$nm":"DOMImplementationAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"DOMImplementation"},"cdataSectionNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"cdataSectionNode"},"DocumentType":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentTypeAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"DocumentType"},"CommentAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"CharacterDataAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"CommentAbs"},"Range":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Range"},"Document":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Document"},"entityReferenceNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"entityReferenceNode"},"atTarget":{"super":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"atTarget"},"EntityReferenceAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"EntityReferenceAbs"},"AttrAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getValue":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getValue"},"name":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"name"},"setValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setValue"},"isId":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isId"}},"$nm":"AttrAbs"},"elementNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"elementNode"},"NodeFilter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"n"}]],"$mt":"prm","$pt":"f","$nm":"acceptNode"}],"$mt":"cls","$an":{"shared":[]},"$m":{"acceptNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"n"}]],"$mt":"mthd","$nm":"acceptNode"}},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"}},"$nm":"NodeFilter"},"documentPositionDisconnected":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionDisconnected"},"getWindow":{"$t":{"$md":"ceylon.js.html","$pk":"ceylon.js.html","$nm":"Window"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getWindow"},"Text":{"super":{"$pk":"ceylon.js.dom","$nm":"TextAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Text"},"CDATASection":{"super":{"$pk":"ceylon.js.dom","$nm":"CDATASectionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"CDATASection"},"documentNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentNode"},"TreeWalker":{"super":{"$pk":"ceylon.js.dom","$nm":"TreeWalkerAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"TreeWalker"},"EventPhase":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"none"},{"$pk":"ceylon.js.dom","$nm":"capturePhase"},{"$pk":"ceylon.js.dom","$nm":"atTarget"},{"$pk":"ceylon.js.dom","$nm":"bubblingPhase"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$an":{"shared":[]},"$nm":"num"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"num":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"num"}},"$nm":"EventPhase"},"bubblingPhase":{"super":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"bubblingPhase"},"NodeAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"firstChild":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"firstChild"},"nodeName":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"nodeName"},"childNodes":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeList"},"$mt":"mthd","$an":{"shared":[]},"$nm":"childNodes"},"baseURI":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"baseURI"},"replaceChild":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newChild"},{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"oldChild"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceChild"},"setTextContent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTextContent"},"lastChild":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"lastChild"},"normalize":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"normalize"},"lookupPrefix":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"namespaceURI"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"lookupPrefix"},"previousSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"previousSibling"},"parentNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"parentNode"},"hasChildNodes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"hasChildNodes"},"nodeType":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"mthd","$an":{"shared":[]},"$nm":"nodeType"},"cloneNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"bool"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"cloneNode"},"nextSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"nextSibling"},"isDefaultNamespace":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespaceURI"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isDefaultNamespace"},"insertBefore":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newElement"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"prm","$nm":"referenceElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertBefore"},"appendChild":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendChild"},"setNodeValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setNodeValue"},"compareDocumentPosition":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"compareDocumentPosition"},"removeChild":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeChild"},"prefix":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"prefix"},"getTextContent":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTextContent"},"isEqualNode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isEqualNode"},"getNodeValue":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getNodeValue"}},"$at":{"ownerDocument":{"$t":{"$pk":"ceylon.js.dom","$nm":"Document"},"$mt":"gttr","$an":{"shared":[]},"$nm":"ownerDocument"}},"$nm":"NodeAbs"},"EventTarget":{"super":{"$pk":"ceylon.js.dom","$nm":"EventTargetAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"EventTarget"},"ProcessingInstruction":{"super":{"$pk":"ceylon.js.dom","$nm":"ProcessingInstructionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"ProcessingInstruction"},"DocumentReadyState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"loading"},{"$pk":"ceylon.js.dom","$nm":"interactive"},{"$pk":"ceylon.js.dom","$nm":"complete"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DocumentReadyState"},"DocumentAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"writeln":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"line"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"writeln"},"body":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"body"},"getElementsByName":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByName"},"createNodeIterator":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeIterator"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"root"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"whatToShow"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createNodeIterator"},"location":{"$t":{"$md":"ceylon.js.html","$pk":"ceylon.js.html","$nm":"Location"},"$mt":"mthd","$an":{"shared":[]},"$nm":"location"},"hasFocus":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"hasFocus"},"defaultView":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.html","$pk":"ceylon.js.html","$nm":"Window"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"defaultView"},"close":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"close"},"open":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"open"},"scripts":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"scripts"},"createAttributeNS":{"$t":{"$pk":"ceylon.js.dom","$nm":"Attr"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createAttributeNS"},"getElementsByClassName":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"names"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByClassName"},"createAttribute":{"$t":{"$pk":"ceylon.js.dom","$nm":"Attr"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createAttribute"},"querySelector":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"selectors"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"querySelector"},"activeElement":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[]},"$nm":"activeElement"},"head":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[]},"$nm":"head"},"documentElement":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"documentElement"},"setAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"async"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAsync"},"getElementById":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Element"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"id"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementById"},"releaseCapture":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"releaseCapture"},"styleSheetSets":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[],"doc":["Array of Strings"]},"$nm":"styleSheetSets"},"getElementsByTagNameNS":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},{"$pk":"ceylon.js.dom","$nm":"NodeList"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByTagNameNS"},"getAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAsync"},"getCookie":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getCookie"},"getDir":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDir"},"setDir":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"prm","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDir"},"elementFromPoint":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"x"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"elementFromPoint"},"getSelectedStyleSheetSet":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getSelectedStyleSheetSet"},"preferredStyleSheetSet":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"preferredStyleSheetSet"},"url":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"url"},"createComment":{"$t":{"$pk":"ceylon.js.dom","$nm":"Comment"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createComment"},"referrer":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"referrer"},"documentURI":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"documentURI"},"setSelectedStyleSheetSet":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"sheet"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setSelectedStyleSheetSet"},"images":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"images"},"styleSheets":{"$t":{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheetList"},"$mt":"mthd","$an":{"shared":[]},"$nm":"styleSheets"},"doctype":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"DocumentType"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"doctype"},"createCDATASection":{"$t":{"$pk":"ceylon.js.dom","$nm":"CDATASection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createCDATASection"},"getDomain":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDomain"},"importNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"externalNode"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"deep"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"importNode"},"adoptNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"adoptNode"},"getDesignMode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDesignMode"},"plugins":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"plugins"},"compatMode":{"$t":{"$pk":"ceylon.js.dom","$nm":"CompatMode"},"$mt":"mthd","$an":{"shared":[]},"$nm":"compatMode"},"createTextNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Text"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createTextNode"},"createElementNS":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"qualifiedName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createElementNS"},"querySelectorAll":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeList"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"selectors"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"querySelectorAll"},"createDocumentFragment":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentFragment"},"$mt":"mthd","$an":{"shared":[]},"$nm":"createDocumentFragment"},"title":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"title"},"getElementsByTagName":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},{"$pk":"ceylon.js.dom","$nm":"NodeList"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByTagName"},"write":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"line"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"write"},"setDomain":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"domain"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDomain"},"forms":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"forms"},"characterSet":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"characterSet"},"lastModified":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"lastModified"},"links":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"links"},"readyState":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"mthd","$an":{"shared":[]},"$nm":"readyState"},"createRange":{"$t":{"$pk":"ceylon.js.dom","$nm":"Range"},"$mt":"mthd","$an":{"shared":[]},"$nm":"createRange"},"anchors":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeList"},"$mt":"mthd","$an":{"shared":[]},"$nm":"anchors"},"implementation":{"$t":{"$pk":"ceylon.js.dom","$nm":"DOMImplementation"},"$mt":"mthd","$an":{"shared":[]},"$nm":"implementation"},"setCookie":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"cookie"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCookie"},"lastStyleSheetSet":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"lastStyleSheetSet"},"createTreeWalker":{"$t":{"$pk":"ceylon.js.dom","$nm":"TreeWalker"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"root"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"whatToShow"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createTreeWalker"},"createElement":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"tagName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createElement"},"createProcessingInstruction":{"$t":{"$pk":"ceylon.js.dom","$nm":"ProcessingInstruction"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"target"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createProcessingInstruction"}},"$nm":"DocumentAbs"},"Element":{"super":{"$pk":"ceylon.js.dom","$nm":"ElementAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Element"}},"$mod-version":"4.0.0","ceylon.js.dom.stylesheets":{"StyleSheetAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"title":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"title"},"ownerNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"ownerNode"},"type":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"type"},"media":{"$t":{"$pk":"ceylon.js.dom.stylesheets","$nm":"MediaList"},"$mt":"mthd","$an":{"shared":[]},"$nm":"media"},"href":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"href"},"parentStyleSheet":{"$t":{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheet"},"$mt":"mthd","$an":{"shared":[]},"$nm":"parentStyleSheet"},"disabled":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"disabled"}},"$nm":"StyleSheetAbs"},"MediaListAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"appendMedium":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"newMedium"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendMedium"},"setMediaText":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"text"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMediaText"},"item":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"item"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"deleteMedium":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"oldMedium"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"deleteMedium"},"getMediaText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMediaText"}},"$nm":"MediaListAbs"},"$pkg-shared":"1","MediaList":{"super":{"$pk":"ceylon.js.dom.stylesheets","$nm":"MediaListAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"MediaList"},"StyleSheet":{"super":{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheetAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"StyleSheet"},"StyleSheetListAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"item":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheet"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"item"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"}},"$nm":"StyleSheetListAbs"},"StyleSheetList":{"super":{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheetListAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"StyleSheetList"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6.1');
var $$$cjl359=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl1.$addmod$($$$cjl359,'ceylon.js.language/1.8.5');
function AttrAbs($$attrAbs){
    $init$AttrAbs();
    if ($$attrAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl359.JSObjectAbs($$attrAbs);
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
        return $$$cjl359.JSString($$attrAbs.$native.name);
        /*End dynamic block*/
    }
    $$attrAbs.name=name;
    name.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:AttrAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','AttrAbs','$m','name']};};
    function getValue(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$attrAbs.$native.value);
        /*End dynamic block*/
    }
    $$attrAbs.getValue=getValue;
    getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:AttrAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','AttrAbs','$m','getValue']};};
    function setValue(val$415){
        
        var case$416=val$415;
        if ($$$cl1.isOfType(val$415,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$attrAbs.$native.value=case$416.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(val$415,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$attrAbs.$native.value=case$416.$native;
            /*End dynamic block*/
        }
    }
    $$attrAbs.setValue=setValue;
    setValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:AttrAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','AttrAbs','$m','setValue']};};
    return $$attrAbs;
}
AttrAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','AttrAbs']};};
exports.AttrAbs=AttrAbs;
function $init$AttrAbs(){
    if (AttrAbs.$$===undefined){
        $$$cl1.initTypeProto(AttrAbs,'ceylon.js.dom::AttrAbs',$$$cjl359.JSObjectAbs);
    }
    return AttrAbs;
}
exports.$init$AttrAbs=$init$AttrAbs;
$init$AttrAbs();
function Attr(n$417, $$attr){
    $init$Attr();
    if ($$attr===undefined)$$attr=new Attr.$$;
    $$attr.n$417_=n$417;
    AttrAbs($$attr);
    $$$cl1.defineAttr($$attr,'n$417',function(){return this.n$417_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Attr,d:['ceylon.js.dom','Attr','$at','n']};});
    $$attr.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Attr,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Attr','$at','native']};}};
    /*Begin dynamic block*/
    $$attr.$native=n$417;/*End dynamic block*/
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
function Comment(n$418, $$comment){
    $init$Comment();
    if ($$comment===undefined)$$comment=new Comment.$$;
    $$comment.n$418_=n$418;
    CommentAbs($$comment);
    $$$cl1.defineAttr($$comment,'n$418',function(){return this.n$418_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Comment,d:['ceylon.js.dom','Comment','$at','n']};});
    $$comment.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Comment,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Comment','$at','native']};}};
    /*Begin dynamic block*/
    $$comment.$native=n$418;/*End dynamic block*/
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
        return $$$cjl359.JSString($$characterDataAbs.$native.data);
        /*End dynamic block*/
    }
    $$characterDataAbs.getData=getData;
    getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','getData']};};
    function setData(data$419){
        
        var case$420=data$419;
        if ($$$cl1.isOfType(data$419,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$characterDataAbs.$native.data=case$420.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$419,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$characterDataAbs.$native.data=case$420.$native;
            /*End dynamic block*/
        }
    }
    $$characterDataAbs.setData=setData;
    setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','setData']};};
    function length(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$characterDataAbs.$native.length);
        /*End dynamic block*/
    }
    $$characterDataAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','length']};};
    function substringData(offset$421,count$422){
        
        var case$423=offset$421;
        if ($$$cl1.isOfType(offset$421,{t:$$$cl1.Integer})) {
            
            var case$424=count$422;
            if ($$$cl1.isOfType(count$422,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return $$$cjl359.JSString($$characterDataAbs.$native.substringData(/*NULL PARAM!*/case$423/*NULL PARAM!*/,case$424));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(count$422,{t:$$$cjl359.JSNumber})) {
                /*Begin dynamic block*/
                return $$$cjl359.JSString($$characterDataAbs.$native.substringData(/*NULL PARAM!*/case$423/*NULL PARAM!*/,case$424.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(offset$421,{t:$$$cjl359.JSNumber})) {
            
            var case$425=count$422;
            if ($$$cl1.isOfType(count$422,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return $$$cjl359.JSString($$characterDataAbs.$native.substringData(/*NULL PARAM!*/case$423.$native/*NULL PARAM!*/,case$425));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(count$422,{t:$$$cjl359.JSNumber})) {
                /*Begin dynamic block*/
                return $$$cjl359.JSString($$characterDataAbs.$native.substringData(/*NULL PARAM!*/case$423.$native/*NULL PARAM!*/,case$425.$native));
                /*End dynamic block*/
            }
        }
    }
    $$characterDataAbs.substringData=substringData;
    substringData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','substringData']};};
    function appendData(data$426){
        
        var case$427=data$426;
        if ($$$cl1.isOfType(data$426,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$characterDataAbs.$native.appendData(/*NULL PARAM!*/case$427.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$426,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$characterDataAbs.$native.appendData(/*NULL PARAM!*/case$427.$native);
            /*End dynamic block*/
        }
    }
    $$characterDataAbs.appendData=appendData;
    appendData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','appendData']};};
    function insertData(offset$428,data$429){
        
        var case$430=offset$428;
        if ($$$cl1.isOfType(offset$428,{t:$$$cl1.Integer})) {
            
            var case$431=data$429;
            if ($$$cl1.isOfType(data$429,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.insertData(/*NULL PARAM!*/case$430/*NULL PARAM!*/,case$431.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(data$429,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.insertData(/*NULL PARAM!*/case$430/*NULL PARAM!*/,case$431.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(offset$428,{t:$$$cjl359.JSNumber})) {
            
            var case$432=data$429;
            if ($$$cl1.isOfType(data$429,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.insertData(/*NULL PARAM!*/case$430.$native/*NULL PARAM!*/,case$432.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(data$429,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.insertData(/*NULL PARAM!*/case$430.$native/*NULL PARAM!*/,case$432.$native);
                /*End dynamic block*/
            }
        }
    }
    $$characterDataAbs.insertData=insertData;
    insertData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','insertData']};};
    function deleteData(offset$433,count$434){
        
        var case$435=offset$433;
        if ($$$cl1.isOfType(offset$433,{t:$$$cl1.Integer})) {
            
            var case$436=count$434;
            if ($$$cl1.isOfType(count$434,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.deleteData(/*NULL PARAM!*/case$435/*NULL PARAM!*/,case$436);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(count$434,{t:$$$cjl359.JSNumber})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.deleteData(/*NULL PARAM!*/case$435/*NULL PARAM!*/,case$436.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(offset$433,{t:$$$cjl359.JSNumber})) {
            
            var case$437=count$434;
            if ($$$cl1.isOfType(count$434,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.deleteData(/*NULL PARAM!*/case$435.$native/*NULL PARAM!*/,case$437);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(count$434,{t:$$$cjl359.JSNumber})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.deleteData(/*NULL PARAM!*/case$435.$native/*NULL PARAM!*/,case$437.$native);
                /*End dynamic block*/
            }
        }
    }
    $$characterDataAbs.deleteData=deleteData;
    deleteData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','deleteData']};};
    function replaceData(offset$438,count$439,data$440){
        
        var case$441=offset$438;
        if ($$$cl1.isOfType(offset$438,{t:$$$cl1.Integer})) {
            
            var case$442=count$439;
            if ($$$cl1.isOfType(count$439,{t:$$$cl1.Integer})) {
                
                var case$443=data$440;
                if ($$$cl1.isOfType(data$440,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$441/*NULL PARAM!*/,case$442/*NULL PARAM!*/,case$443.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$440,{t:$$$cjl359.JSString})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$441/*NULL PARAM!*/,case$442/*NULL PARAM!*/,case$443.$native);
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(count$439,{t:$$$cjl359.JSNumber})) {
                
                var case$444=data$440;
                if ($$$cl1.isOfType(data$440,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$441/*NULL PARAM!*/,case$442.$native/*NULL PARAM!*/,case$444.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$440,{t:$$$cjl359.JSString})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$441/*NULL PARAM!*/,case$442.$native/*NULL PARAM!*/,case$444.$native);
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(offset$438,{t:$$$cjl359.JSNumber})) {
            
            var case$445=count$439;
            if ($$$cl1.isOfType(count$439,{t:$$$cl1.Integer})) {
                
                var case$446=data$440;
                if ($$$cl1.isOfType(data$440,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$441.$native/*NULL PARAM!*/,case$445/*NULL PARAM!*/,case$446.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$440,{t:$$$cjl359.JSString})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$441.$native/*NULL PARAM!*/,case$445/*NULL PARAM!*/,case$446.$native);
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(count$439,{t:$$$cjl359.JSNumber})) {
                
                var case$447=data$440;
                if ($$$cl1.isOfType(data$440,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$441.$native/*NULL PARAM!*/,case$445.$native/*NULL PARAM!*/,case$447.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$440,{t:$$$cjl359.JSString})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$441.$native/*NULL PARAM!*/,case$445.$native/*NULL PARAM!*/,case$447.$native);
                    /*End dynamic block*/
                }
            }
        }
    }
    $$characterDataAbs.replaceData=replaceData;
    replaceData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','replaceData']};};
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
function CharacterData(n$448, $$characterData){
    $init$CharacterData();
    if ($$characterData===undefined)$$characterData=new CharacterData.$$;
    $$characterData.n$448_=n$448;
    CharacterDataAbs($$characterData);
    $$$cl1.defineAttr($$characterData,'n$448',function(){return this.n$448_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CharacterData,d:['ceylon.js.dom','CharacterData','$at','n']};});
    /*Begin dynamic block*/
    $$characterData.$native=n$448;/*End dynamic block*/
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
var $$$cjh449=require('ceylon/js/html/5.0.0/ceylon.js.html-5.0.0');
$$$cl1.$addmod$($$$cjh449,'ceylon.js.html/5.0.0');
function DocumentPosition(name$450, $$documentPosition){
    $init$DocumentPosition();
    if ($$documentPosition===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$documentPosition.name$450_=name$450;
    $$$cl1.defineAttr($$documentPosition,'name$450',function(){return this.name$450_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DocumentPosition,d:['ceylon.js.dom','DocumentPosition','$at','name']};});
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
function documentPositionContainedBy$451(){
    var $$documentPositionContainedBy=new documentPositionContainedBy$451.$$;
    DocumentPosition($$$cl1.String("documentPositionContainedBy",27),$$documentPositionContainedBy);
    return $$documentPositionContainedBy;
}
function $init$documentPositionContainedBy$451(){
    if (documentPositionContainedBy$451.$$===undefined){
        $$$cl1.initTypeProto(documentPositionContainedBy$451,'ceylon.js.dom::documentPositionContainedBy',$init$DocumentPosition());
    }
    return documentPositionContainedBy$451;
}
exports.$init$documentPositionContainedBy$451=$init$documentPositionContainedBy$451;
$init$documentPositionContainedBy$451();
var documentPositionContainedBy$452;
function getDocumentPositionContainedBy(){
    if (documentPositionContainedBy$452===undefined)documentPositionContainedBy$452=$init$documentPositionContainedBy$451()();
    return documentPositionContainedBy$452;
}
exports.getDocumentPositionContainedBy=getDocumentPositionContainedBy;
getDocumentPositionContainedBy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionContainedBy$451},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionContainedBy']};};
$prop$getDocumentPositionContainedBy={get:getDocumentPositionContainedBy,$$metamodel$$:getDocumentPositionContainedBy.$$metamodel$$};
exports.$prop$getDocumentPositionContainedBy=$prop$getDocumentPositionContainedBy;
function documentPositionContains$453(){
    var $$documentPositionContains=new documentPositionContains$453.$$;
    DocumentPosition($$$cl1.String("documentPositionContains",24),$$documentPositionContains);
    return $$documentPositionContains;
}
function $init$documentPositionContains$453(){
    if (documentPositionContains$453.$$===undefined){
        $$$cl1.initTypeProto(documentPositionContains$453,'ceylon.js.dom::documentPositionContains',$init$DocumentPosition());
    }
    return documentPositionContains$453;
}
exports.$init$documentPositionContains$453=$init$documentPositionContains$453;
$init$documentPositionContains$453();
var documentPositionContains$454;
function getDocumentPositionContains(){
    if (documentPositionContains$454===undefined)documentPositionContains$454=$init$documentPositionContains$453()();
    return documentPositionContains$454;
}
exports.getDocumentPositionContains=getDocumentPositionContains;
getDocumentPositionContains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionContains$453},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionContains']};};
$prop$getDocumentPositionContains={get:getDocumentPositionContains,$$metamodel$$:getDocumentPositionContains.$$metamodel$$};
exports.$prop$getDocumentPositionContains=$prop$getDocumentPositionContains;
function documentPositionDisconnected$455(){
    var $$documentPositionDisconnected=new documentPositionDisconnected$455.$$;
    DocumentPosition($$$cl1.String("documentPositionDisconnected",28),$$documentPositionDisconnected);
    return $$documentPositionDisconnected;
}
function $init$documentPositionDisconnected$455(){
    if (documentPositionDisconnected$455.$$===undefined){
        $$$cl1.initTypeProto(documentPositionDisconnected$455,'ceylon.js.dom::documentPositionDisconnected',$init$DocumentPosition());
    }
    return documentPositionDisconnected$455;
}
exports.$init$documentPositionDisconnected$455=$init$documentPositionDisconnected$455;
$init$documentPositionDisconnected$455();
var documentPositionDisconnected$456;
function getDocumentPositionDisconnected(){
    if (documentPositionDisconnected$456===undefined)documentPositionDisconnected$456=$init$documentPositionDisconnected$455()();
    return documentPositionDisconnected$456;
}
exports.getDocumentPositionDisconnected=getDocumentPositionDisconnected;
getDocumentPositionDisconnected.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionDisconnected$455},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionDisconnected']};};
$prop$getDocumentPositionDisconnected={get:getDocumentPositionDisconnected,$$metamodel$$:getDocumentPositionDisconnected.$$metamodel$$};
exports.$prop$getDocumentPositionDisconnected=$prop$getDocumentPositionDisconnected;
function documentPositionFollowing$457(){
    var $$documentPositionFollowing=new documentPositionFollowing$457.$$;
    DocumentPosition($$$cl1.String("documentPositionFollowing",25),$$documentPositionFollowing);
    return $$documentPositionFollowing;
}
function $init$documentPositionFollowing$457(){
    if (documentPositionFollowing$457.$$===undefined){
        $$$cl1.initTypeProto(documentPositionFollowing$457,'ceylon.js.dom::documentPositionFollowing',$init$DocumentPosition());
    }
    return documentPositionFollowing$457;
}
exports.$init$documentPositionFollowing$457=$init$documentPositionFollowing$457;
$init$documentPositionFollowing$457();
var documentPositionFollowing$458;
function getDocumentPositionFollowing(){
    if (documentPositionFollowing$458===undefined)documentPositionFollowing$458=$init$documentPositionFollowing$457()();
    return documentPositionFollowing$458;
}
exports.getDocumentPositionFollowing=getDocumentPositionFollowing;
getDocumentPositionFollowing.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionFollowing$457},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionFollowing']};};
$prop$getDocumentPositionFollowing={get:getDocumentPositionFollowing,$$metamodel$$:getDocumentPositionFollowing.$$metamodel$$};
exports.$prop$getDocumentPositionFollowing=$prop$getDocumentPositionFollowing;
function documentPositionImplementationSpecific$459(){
    var $$documentPositionImplementationSpecific=new documentPositionImplementationSpecific$459.$$;
    DocumentPosition($$$cl1.String("documentPositionImplementationSpecific",38),$$documentPositionImplementationSpecific);
    return $$documentPositionImplementationSpecific;
}
function $init$documentPositionImplementationSpecific$459(){
    if (documentPositionImplementationSpecific$459.$$===undefined){
        $$$cl1.initTypeProto(documentPositionImplementationSpecific$459,'ceylon.js.dom::documentPositionImplementationSpecific',$init$DocumentPosition());
    }
    return documentPositionImplementationSpecific$459;
}
exports.$init$documentPositionImplementationSpecific$459=$init$documentPositionImplementationSpecific$459;
$init$documentPositionImplementationSpecific$459();
var documentPositionImplementationSpecific$460;
function getDocumentPositionImplementationSpecific(){
    if (documentPositionImplementationSpecific$460===undefined)documentPositionImplementationSpecific$460=$init$documentPositionImplementationSpecific$459()();
    return documentPositionImplementationSpecific$460;
}
exports.getDocumentPositionImplementationSpecific=getDocumentPositionImplementationSpecific;
getDocumentPositionImplementationSpecific.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionImplementationSpecific$459},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionImplementationSpecific']};};
$prop$getDocumentPositionImplementationSpecific={get:getDocumentPositionImplementationSpecific,$$metamodel$$:getDocumentPositionImplementationSpecific.$$metamodel$$};
exports.$prop$getDocumentPositionImplementationSpecific=$prop$getDocumentPositionImplementationSpecific;
function documentPositionPreceding$461(){
    var $$documentPositionPreceding=new documentPositionPreceding$461.$$;
    DocumentPosition($$$cl1.String("documentPositionPreceding",25),$$documentPositionPreceding);
    return $$documentPositionPreceding;
}
function $init$documentPositionPreceding$461(){
    if (documentPositionPreceding$461.$$===undefined){
        $$$cl1.initTypeProto(documentPositionPreceding$461,'ceylon.js.dom::documentPositionPreceding',$init$DocumentPosition());
    }
    return documentPositionPreceding$461;
}
exports.$init$documentPositionPreceding$461=$init$documentPositionPreceding$461;
$init$documentPositionPreceding$461();
var documentPositionPreceding$462;
function getDocumentPositionPreceding(){
    if (documentPositionPreceding$462===undefined)documentPositionPreceding$462=$init$documentPositionPreceding$461()();
    return documentPositionPreceding$462;
}
exports.getDocumentPositionPreceding=getDocumentPositionPreceding;
getDocumentPositionPreceding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionPreceding$461},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionPreceding']};};
$prop$getDocumentPositionPreceding={get:getDocumentPositionPreceding,$$metamodel$$:getDocumentPositionPreceding.$$metamodel$$};
exports.$prop$getDocumentPositionPreceding=$prop$getDocumentPositionPreceding;
function CompatMode(name$463, $$compatMode){
    $init$CompatMode();
    if ($$compatMode===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$compatMode.name$463_=name$463;
    $$$cl1.defineAttr($$compatMode,'name$463',function(){return this.name$463_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CompatMode,d:['ceylon.js.dom','CompatMode','$at','name']};});
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
function css1Compat$464(){
    var $$css1Compat=new css1Compat$464.$$;
    CompatMode($$$cl1.String("CSS1Compat",10),$$css1Compat);
    return $$css1Compat;
}
function $init$css1Compat$464(){
    if (css1Compat$464.$$===undefined){
        $$$cl1.initTypeProto(css1Compat$464,'ceylon.js.dom::css1Compat',$init$CompatMode());
    }
    return css1Compat$464;
}
exports.$init$css1Compat$464=$init$css1Compat$464;
$init$css1Compat$464();
var css1Compat$465;
function getCss1Compat(){
    if (css1Compat$465===undefined)css1Compat$465=$init$css1Compat$464()();
    return css1Compat$465;
}
exports.getCss1Compat=getCss1Compat;
getCss1Compat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:css1Compat$464},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','css1Compat']};};
$prop$getCss1Compat={get:getCss1Compat,$$metamodel$$:getCss1Compat.$$metamodel$$};
exports.$prop$getCss1Compat=$prop$getCss1Compat;
function backCompat$466(){
    var $$backCompat=new backCompat$466.$$;
    CompatMode($$$cl1.String("BackCompat",10),$$backCompat);
    return $$backCompat;
}
function $init$backCompat$466(){
    if (backCompat$466.$$===undefined){
        $$$cl1.initTypeProto(backCompat$466,'ceylon.js.dom::backCompat',$init$CompatMode());
    }
    return backCompat$466;
}
exports.$init$backCompat$466=$init$backCompat$466;
$init$backCompat$466();
var backCompat$467;
function getBackCompat(){
    if (backCompat$467===undefined)backCompat$467=$init$backCompat$466()();
    return backCompat$467;
}
exports.getBackCompat=getBackCompat;
getBackCompat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:backCompat$466},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','backCompat']};};
$prop$getBackCompat={get:getBackCompat,$$metamodel$$:getBackCompat.$$metamodel$$};
exports.$prop$getBackCompat=$prop$getBackCompat;
function DocumentDirection(name$468, $$documentDirection){
    $init$DocumentDirection();
    if ($$documentDirection===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$documentDirection.name$468_=name$468;
    $$$cl1.defineAttr($$documentDirection,'name$468',function(){return this.name$468_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DocumentDirection,d:['ceylon.js.dom','DocumentDirection','$at','name']};});
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
function rtl$469(){
    var $$rtl=new rtl$469.$$;
    DocumentDirection($$$cl1.String("rtl",3),$$rtl);
    return $$rtl;
}
function $init$rtl$469(){
    if (rtl$469.$$===undefined){
        $$$cl1.initTypeProto(rtl$469,'ceylon.js.dom::rtl',$init$DocumentDirection());
    }
    return rtl$469;
}
exports.$init$rtl$469=$init$rtl$469;
$init$rtl$469();
var rtl$470;
function getRtl(){
    if (rtl$470===undefined)rtl$470=$init$rtl$469()();
    return rtl$470;
}
exports.getRtl=getRtl;
getRtl.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:rtl$469},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','rtl']};};
$prop$getRtl={get:getRtl,$$metamodel$$:getRtl.$$metamodel$$};
exports.$prop$getRtl=$prop$getRtl;
function ltr$471(){
    var $$ltr=new ltr$471.$$;
    DocumentDirection($$$cl1.String("ltr",3),$$ltr);
    return $$ltr;
}
function $init$ltr$471(){
    if (ltr$471.$$===undefined){
        $$$cl1.initTypeProto(ltr$471,'ceylon.js.dom::ltr',$init$DocumentDirection());
    }
    return ltr$471;
}
exports.$init$ltr$471=$init$ltr$471;
$init$ltr$471();
var ltr$472;
function getLtr(){
    if (ltr$472===undefined)ltr$472=$init$ltr$471()();
    return ltr$472;
}
exports.getLtr=getLtr;
getLtr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ltr$471},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ltr']};};
$prop$getLtr={get:getLtr,$$metamodel$$:getLtr.$$metamodel$$};
exports.$prop$getLtr=$prop$getLtr;
function DocumentReadyState(name$473, $$documentReadyState){
    $init$DocumentReadyState();
    if ($$documentReadyState===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$documentReadyState.name$473_=name$473;
    $$$cl1.defineAttr($$documentReadyState,'name$473',function(){return this.name$473_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DocumentReadyState,d:['ceylon.js.dom','DocumentReadyState','$at','name']};});
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
function loading$474(){
    var $$loading=new loading$474.$$;
    DocumentReadyState($$$cl1.String("loading",7),$$loading);
    return $$loading;
}
function $init$loading$474(){
    if (loading$474.$$===undefined){
        $$$cl1.initTypeProto(loading$474,'ceylon.js.dom::loading',$init$DocumentReadyState());
    }
    return loading$474;
}
exports.$init$loading$474=$init$loading$474;
$init$loading$474();
var loading$475;
function getLoading(){
    if (loading$475===undefined)loading$475=$init$loading$474()();
    return loading$475;
}
exports.getLoading=getLoading;
getLoading.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:loading$474},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','loading']};};
$prop$getLoading={get:getLoading,$$metamodel$$:getLoading.$$metamodel$$};
exports.$prop$getLoading=$prop$getLoading;
function interactive$476(){
    var $$interactive=new interactive$476.$$;
    DocumentReadyState($$$cl1.String("interactive",11),$$interactive);
    return $$interactive;
}
function $init$interactive$476(){
    if (interactive$476.$$===undefined){
        $$$cl1.initTypeProto(interactive$476,'ceylon.js.dom::interactive',$init$DocumentReadyState());
    }
    return interactive$476;
}
exports.$init$interactive$476=$init$interactive$476;
$init$interactive$476();
var interactive$477;
function getInteractive(){
    if (interactive$477===undefined)interactive$477=$init$interactive$476()();
    return interactive$477;
}
exports.getInteractive=getInteractive;
getInteractive.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:interactive$476},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','interactive']};};
$prop$getInteractive={get:getInteractive,$$metamodel$$:getInteractive.$$metamodel$$};
exports.$prop$getInteractive=$prop$getInteractive;
function complete$478(){
    var $$complete=new complete$478.$$;
    DocumentReadyState($$$cl1.String("complete",8),$$complete);
    return $$complete;
}
function $init$complete$478(){
    if (complete$478.$$===undefined){
        $$$cl1.initTypeProto(complete$478,'ceylon.js.dom::complete',$init$DocumentReadyState());
    }
    return complete$478;
}
exports.$init$complete$478=$init$complete$478;
$init$complete$478();
var complete$479;
function getComplete(){
    if (complete$479===undefined)complete$479=$init$complete$478()();
    return complete$479;
}
exports.getComplete=getComplete;
getComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:complete$478},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','complete']};};
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
    function adoptNode(node$480){
        /*Begin dynamic block*/
        return Node($$documentAbs.$native.adoptNode(/*NULL PARAM!*/node$480.$native));
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
    function createAttribute(name$481){
        
        var case$482=name$481;
        if ($$$cl1.isOfType(name$481,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return Attr($$documentAbs.$native.createAttribute(/*NULL PARAM!*/case$482.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(name$481,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            return Attr($$documentAbs.$native.createAttribute(/*NULL PARAM!*/case$482.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.createAttribute=createAttribute;
    createAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Attr},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createAttribute']};};
    function url(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$documentAbs.$native.URL);
        /*End dynamic block*/
    }
    $$documentAbs.url=url;
    url.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','url']};};
    function createAttributeNS(namespace$483,name$484){
        
        var case$485=namespace$483;
        if ($$$cl1.isOfType(namespace$483,{t:$$$cl1.String})) {
            
            var case$486=name$484;
            if ($$$cl1.isOfType(name$484,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/case$485.valueOf()/*NULL PARAM!*/,case$486.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(name$484,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/case$485.valueOf()/*NULL PARAM!*/,case$486.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$483,{t:$$$cjl359.JSString})) {
            
            var case$487=name$484;
            if ($$$cl1.isOfType(name$484,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/case$485.$native/*NULL PARAM!*/,case$487.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(name$484,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/case$485.$native/*NULL PARAM!*/,case$487.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$483,{t:$$$cl1.Null})) {
            
            var case$488=name$484;
            if ($$$cl1.isOfType(name$484,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/null/*NULL PARAM!*/,case$488.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(name$484,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/null/*NULL PARAM!*/,case$488.$native));
                /*End dynamic block*/
            }
        }
    }
    $$documentAbs.createAttributeNS=createAttributeNS;
    createAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Attr},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createAttributeNS']};};
    function createCDATASection(data$489){
        
        var case$490=data$489;
        if ($$$cl1.isOfType(data$489,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return CDATASection($$documentAbs.$native.createCDATASection(/*NULL PARAM!*/case$490.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$489,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            return CDATASection($$documentAbs.$native.createCDATASection(/*NULL PARAM!*/case$490.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.createCDATASection=createCDATASection;
    createCDATASection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:CDATASection},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createCDATASection']};};
    function createComment(data$491){
        
        var case$492=data$491;
        if ($$$cl1.isOfType(data$491,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return Comment($$documentAbs.$native.createComment(/*NULL PARAM!*/case$492.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$491,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            return Comment($$documentAbs.$native.createComment(/*NULL PARAM!*/case$492.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.createComment=createComment;
    createComment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Comment},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createComment']};};
    function createDocumentFragment(){
        /*Begin dynamic block*/
        return DocumentFragment($$documentAbs.$native.createDocumentFragment());
        /*End dynamic block*/
    }
    $$documentAbs.createDocumentFragment=createDocumentFragment;
    createDocumentFragment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentFragment},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createDocumentFragment']};};
    function createElement(tagName$493){
        
        var case$494=tagName$493;
        if ($$$cl1.isOfType(tagName$493,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return Element($$documentAbs.$native.createElement(/*NULL PARAM!*/case$494.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(tagName$493,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            return Element($$documentAbs.$native.createElement(/*NULL PARAM!*/case$494.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.createElement=createElement;
    createElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'tagName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createElement']};};
    function createElementNS(namespaceURI$495,qualifiedName$496){
        
        var case$497=namespaceURI$495;
        if ($$$cl1.isOfType(namespaceURI$495,{t:$$$cl1.String})) {
            
            var case$498=qualifiedName$496;
            if ($$$cl1.isOfType(qualifiedName$496,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.createElementNS(/*NULL PARAM!*/case$497.valueOf()/*NULL PARAM!*/,case$498.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(qualifiedName$496,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.createElementNS(/*NULL PARAM!*/case$497.valueOf()/*NULL PARAM!*/,case$498.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespaceURI$495,{t:$$$cjl359.JSString})) {
            
            var case$499=qualifiedName$496;
            if ($$$cl1.isOfType(qualifiedName$496,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.createElementNS(/*NULL PARAM!*/case$497/*NULL PARAM!*/,case$499.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(qualifiedName$496,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.createElementNS(/*NULL PARAM!*/case$497.$native/*NULL PARAM!*/,case$499.$native));
                /*End dynamic block*/
            }
        }
    }
    $$documentAbs.createElementNS=createElementNS;
    createElementNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'qualifiedName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createElementNS']};};
    function createProcessingInstruction(target$500,data$501){
        
        var case$502=target$500;
        if ($$$cl1.isOfType(target$500,{t:$$$cl1.String})) {
            
            var case$503=data$501;
            if ($$$cl1.isOfType(data$501,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(/*NULL PARAM!*/case$502.valueOf()/*NULL PARAM!*/,case$503.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(data$501,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(/*NULL PARAM!*/case$502.valueOf()/*NULL PARAM!*/,case$503.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(target$500,{t:$$$cjl359.JSString})) {
            
            var case$504=data$501;
            if ($$$cl1.isOfType(data$501,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(/*NULL PARAM!*/case$502.$native/*NULL PARAM!*/,case$504.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(data$501,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(/*NULL PARAM!*/case$502.$native/*NULL PARAM!*/,case$504.$native));
                /*End dynamic block*/
            }
        }
    }
    $$documentAbs.createProcessingInstruction=createProcessingInstruction;
    createProcessingInstruction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ProcessingInstruction},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createProcessingInstruction']};};
    function createTextNode(data$505){
        
        var case$506=data$505;
        if ($$$cl1.isOfType(data$505,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return Text($$documentAbs.$native.createTextNode(/*NULL PARAM!*/case$506.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$505,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            return Text($$documentAbs.$native.createTextNode(/*NULL PARAM!*/case$506.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.createTextNode=createTextNode;
    createTextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Text},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createTextNode']};};
    function doctype(){
        /*Begin dynamic block*/
        var doctype$507=$$documentAbs.$native.doctype;
        $prop$getDoctype$507={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','doctype','$at','doctype']};}};
        $prop$getDoctype$507.get=function(){return doctype$507};
        if((tmpvar$508=doctype$507,tmpvar$509=null,(tmpvar$508.equals&&!tmpvar$508.equals(tmpvar$509))||tmpvar$508!==tmpvar$509)){
            return DocumentType(doctype$507);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$documentAbs.doctype=doctype;
    doctype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:DocumentType}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','doctype']};};
    function documentElement(){
        /*Begin dynamic block*/
        var element$510=$$documentAbs.$native.documentElement;
        $prop$getElement$510={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','documentElement','$at','element']};}};
        $prop$getElement$510.get=function(){return element$510};
        if((tmpvar$511=element$510,tmpvar$512=null,(tmpvar$511.equals&&!tmpvar$511.equals(tmpvar$512))||tmpvar$511!==tmpvar$512)){
            return Element(element$510);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$documentAbs.documentElement=documentElement;
    documentElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Element}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','documentElement']};};
    function documentURI(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$documentAbs.$native.documentURI);
        /*End dynamic block*/
    }
    $$documentAbs.documentURI=documentURI;
    documentURI.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','documentURI']};};
    function compatMode(){
        /*Begin dynamic block*/
        if((tmpvar$513=$$documentAbs.$native.compatMode,tmpvar$514=$$$cl1.String("BackCompat",10),(tmpvar$513.equals&&tmpvar$513.equals(tmpvar$514))||tmpvar$513===tmpvar$514)){
            return getBackCompat();
        }else {
            return getCss1Compat();
        }/*End dynamic block*/
    }
    $$documentAbs.compatMode=compatMode;
    compatMode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:CompatMode},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','compatMode']};};
    function characterSet(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$documentAbs.$native.characterSet);
        /*End dynamic block*/
    }
    $$documentAbs.characterSet=characterSet;
    characterSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','characterSet']};};
    function getElementById(id$515){
        var element$516;
        
        var case$517=id$515;
        if ($$$cl1.isOfType(id$515,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            element$516=$$documentAbs.$native.getElementById(/*NULL PARAM!*/case$517.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(id$515,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            element$516=$$documentAbs.$native.getElementById(/*NULL PARAM!*/case$517.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if((tmpvar$518=element$516,tmpvar$519=null,(tmpvar$518.equals&&!tmpvar$518.equals(tmpvar$519))||tmpvar$518!==tmpvar$519)){
            return Element(element$516);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$documentAbs.getElementById=getElementById;
    getElementById.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Element}]},$ps:[{$nm:'id',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementById']};};
    $$documentAbs.getElementsByTagName$defs$name=function(name$520){return $$$cl1.String("*",1);};
    function getElementsByTagName(name$520){
        if(name$520===undefined){name$520=$$documentAbs.getElementsByTagName$defs$name(name$520);}
        var elems$521;
        
        var case$522=name$520;
        if ($$$cl1.isOfType(name$520,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            elems$521=$$documentAbs.$native.getElementsByTagName(/*NULL PARAM!*/case$522.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(name$520,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            elems$521=$$documentAbs.$native.getElementsByTagName(/*NULL PARAM!*/case$522.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(elems$521.instanceof(/*NULL PARAM!*/(typeof HTMLCollection==='undefined'||HTMLCollection===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: HTMLCollection")),'317:26-317:39','document.ceylon'):HTMLCollection))){
            return HTMLCollection(elems$521);
        }else {
            return NodeList(elems$521);
        }/*End dynamic block*/
    }
    $$documentAbs.getElementsByTagName=getElementsByTagName;
    getElementsByTagName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:HTMLCollection},{t:NodeList}]},$ps:[{$nm:'name',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByTagName']};};
    $$documentAbs.getElementsByTagNameNS$defs$name=function(namespace$523,name$524){return $$$cl1.String("*",1);};
    function getElementsByTagNameNS(namespace$523,name$524){
        if(name$524===undefined){name$524=$$documentAbs.getElementsByTagNameNS$defs$name(namespace$523,name$524);}
        var elems$525;
        
        var case$526=namespace$523;
        if ($$$cl1.isOfType(namespace$523,{t:$$$cl1.String})) {
            
            var case$527=name$524;
            if ($$$cl1.isOfType(name$524,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                elems$525=$$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$526.valueOf()/*NULL PARAM!*/,case$527.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(name$524,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                elems$525=$$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$526.valueOf()/*NULL PARAM!*/,case$527.$native);/*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$523,{t:$$$cjl359.JSString})) {
            
            var case$528=name$524;
            if ($$$cl1.isOfType(name$524,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                elems$525=$$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$526/*NULL PARAM!*/,case$528.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(name$524,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                elems$525=$$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$526.$native/*NULL PARAM!*/,case$528.$native);/*End dynamic block*/
            }
        }
        /*Begin dynamic block*/
        if(elems$525.instanceof(/*NULL PARAM!*/(typeof HTMLCollection==='undefined'||HTMLCollection===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: HTMLCollection")),'355:26-355:39','document.ceylon'):HTMLCollection))){
            return HTMLCollection(elems$525);
        }else {
            return NodeList(elems$525);
        }/*End dynamic block*/
    }
    $$documentAbs.getElementsByTagNameNS=getElementsByTagNameNS;
    getElementsByTagNameNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:HTMLCollection},{t:NodeList}]},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByTagNameNS']};};
    function getElementsByClassName(names$529){
        
        var case$530=names$529;
        if ($$$cl1.isOfType(names$529,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return HTMLCollection($$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$530.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(names$529,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            return HTMLCollection($$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$530.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.getElementsByClassName=getElementsByClassName;
    getElementsByClassName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'names',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByClassName']};};
    function implementation(){
        /*Begin dynamic block*/
        return DOMImplementation($$documentAbs.$native.implementation);
        /*End dynamic block*/
    }
    $$documentAbs.implementation=implementation;
    implementation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DOMImplementation},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','implementation']};};
    $$documentAbs.importNode$defs$deep=function(externalNode$531,deep$532){return true;};
    function importNode(externalNode$531,deep$532){
        if(deep$532===undefined){deep$532=$$documentAbs.importNode$defs$deep(externalNode$531,deep$532);}
        /*Begin dynamic block*/
        return Node($$documentAbs.$native.importNode(/*NULL PARAM!*/externalNode$531/*NULL PARAM!*/,deep$532));
        /*End dynamic block*/
    }
    $$documentAbs.importNode=importNode;
    importNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'externalNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'deep',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','importNode']};};
    $$documentAbs.createNodeIterator$defs$whatToShow=function(root$533,whatToShow$534,filter$535){return null;};
    $$documentAbs.createNodeIterator$defs$filter=function(root$533,whatToShow$534,filter$535){return null;};
    function createNodeIterator(root$533,whatToShow$534,filter$535){
        if(whatToShow$534===undefined){whatToShow$534=$$documentAbs.createNodeIterator$defs$whatToShow(root$533,whatToShow$534,filter$535);}
        if(filter$535===undefined){filter$535=$$documentAbs.createNodeIterator$defs$filter(root$533,whatToShow$534,filter$535);}
        /*Begin dynamic block*/
        return NodeIterator($$documentAbs.$native.createNodeIterator(/*NULL PARAM!*/root$533/*NULL PARAM!*/,whatToShow$534/*NULL PARAM!*/,filter$535));
        /*End dynamic block*/
    }
    $$documentAbs.createNodeIterator=createNodeIterator;
    createNodeIterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeIterator},$ps:[{$nm:'root',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'whatToShow',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:NodeFilter}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createNodeIterator']};};
    $$documentAbs.createTreeWalker$defs$whatToShow=function(root$536,whatToShow$537,filter$538){return null;};
    $$documentAbs.createTreeWalker$defs$filter=function(root$536,whatToShow$537,filter$538){return null;};
    function createTreeWalker(root$536,whatToShow$537,filter$538){
        if(whatToShow$537===undefined){whatToShow$537=$$documentAbs.createTreeWalker$defs$whatToShow(root$536,whatToShow$537,filter$538);}
        if(filter$538===undefined){filter$538=$$documentAbs.createTreeWalker$defs$filter(root$536,whatToShow$537,filter$538);}
        /*Begin dynamic block*/
        return TreeWalker($$documentAbs.$native.createTreeWalker(/*NULL PARAM!*/root$536/*NULL PARAM!*/,whatToShow$537/*NULL PARAM!*/,filter$538));
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
    function setAsync(async$539){
        /*Begin dynamic block*/
        $$documentAbs.$native.async=async$539;
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
        return $$$cjl359.JSString($$documentAbs.$native.cookie);
        /*End dynamic block*/
    }
    $$documentAbs.getCookie=getCookie;
    getCookie.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getCookie']};};
    function setCookie(cookie$540){
        
        var case$541=cookie$540;
        if ($$$cl1.isOfType(cookie$540,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.cookie=case$541.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(cookie$540,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.cookie=case$541.$native;
            /*End dynamic block*/
        }
    }
    $$documentAbs.setCookie=setCookie;
    setCookie.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'cookie',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setCookie']};};
    function defaultView(){
        /*Begin dynamic block*/
        var view$542=$$documentAbs.$native.defaultView;
        $prop$getView$542={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','defaultView','$at','view']};}};
        $prop$getView$542.get=function(){return view$542};
        if((tmpvar$543=view$542,tmpvar$544=null,(tmpvar$543.equals&&!tmpvar$543.equals(tmpvar$544))||tmpvar$543!==tmpvar$544)){
            return $$$cjh449.Window(view$542);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$documentAbs.defaultView=defaultView;
    defaultView.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjh449.Window}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','defaultView']};};
    function getDesignMode(){
        /*Begin dynamic block*/
        if((tmpvar$545=$$documentAbs.$native.designMode,tmpvar$546=$$$cl1.String("on",2),(tmpvar$545.equals&&tmpvar$545.equals(tmpvar$546))||tmpvar$545===tmpvar$546)){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$documentAbs.getDesignMode=getDesignMode;
    getDesignMode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getDesignMode']};};
    function getDir(){
        /*Begin dynamic block*/
        if((tmpvar$547=$$documentAbs.$native.dir,tmpvar$548=$$$cl1.String("ltr",3),(tmpvar$547.equals&&tmpvar$547.equals(tmpvar$548))||tmpvar$547===tmpvar$548)){
            return getLtr();
        }else {
            return getRtl();
        }/*End dynamic block*/
    }
    $$documentAbs.getDir=getDir;
    getDir.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentDirection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getDir']};};
    function setDir(dir$549){
        /*Begin dynamic block*/
        $$documentAbs.$native.dir=dir$549.string.valueOf();
        /*End dynamic block*/
    }
    $$documentAbs.setDir=setDir;
    setDir.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'dir',$mt:'prm',$t:{t:DocumentDirection},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setDir']};};
    function getDomain(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$documentAbs.$native.domain);
        /*End dynamic block*/
    }
    $$documentAbs.getDomain=getDomain;
    getDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getDomain']};};
    function setDomain(domain$550){
        
        var case$551=domain$550;
        if ($$$cl1.isOfType(domain$550,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.domain=case$551.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(domain$550,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.domain=case$551.$native;
            /*End dynamic block*/
        }
    }
    $$documentAbs.setDomain=setDomain;
    setDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'domain',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setDomain']};};
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
        return $$$cjl359.JSString($$documentAbs.$native.lastModified);
        /*End dynamic block*/
    }
    $$documentAbs.lastModified=lastModified;
    lastModified.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','lastModified']};};
    function lastStyleSheetSet(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$documentAbs.$native.lastStyleSheetSet);
        /*End dynamic block*/
    }
    $$documentAbs.lastStyleSheetSet=lastStyleSheetSet;
    lastStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','lastStyleSheetSet']};};
    function links(){
        /*Begin dynamic block*/
        return HTMLCollection($$documentAbs.$native.links);
        /*End dynamic block*/
    }
    $$documentAbs.links=links;
    links.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','links']};};
    function location(){
        /*Begin dynamic block*/
        return $$$cjh449.Location($$documentAbs.$native.location);
        /*End dynamic block*/
    }
    $$documentAbs.location=location;
    location.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjh449.Location},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','location']};};
    function plugins(){
        /*Begin dynamic block*/
        return HTMLCollection($$documentAbs.$native.plugins);
        /*End dynamic block*/
    }
    $$documentAbs.plugins=plugins;
    plugins.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','plugins']};};
    function preferredStyleSheetSet(){
        /*Begin dynamic block*/
        var preferred$552=(typeof document==='undefined'||document===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: document")),'556:23-556:30','document.ceylon'):document).preferredStyleSheetSet;
        $prop$getPreferred$552={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','preferredStyleSheetSet','$at','preferred']};}};
        $prop$getPreferred$552.get=function(){return preferred$552};
        if((tmpvar$553=preferred$552,tmpvar$554=null,(tmpvar$553.equals&&!tmpvar$553.equals(tmpvar$554))||tmpvar$553!==tmpvar$554)){
            return $$$cjl359.JSString(preferred$552);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$documentAbs.preferredStyleSheetSet=preferredStyleSheetSet;
    preferredStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','preferredStyleSheetSet']};};
    function readyState(){
        /*Begin dynamic block*/
        var readyState$555=$$documentAbs.$native.readyState;
        $prop$getReadyState$555={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','readyState','$at','readyState']};}};
        $prop$getReadyState$555.get=function(){return readyState$555};
        if((tmpvar$556=readyState$555,tmpvar$557=$$$cl1.String("loading",7),(tmpvar$556.equals&&tmpvar$556.equals(tmpvar$557))||tmpvar$556===tmpvar$557)){
            return getLoading();
        }else {
            if((tmpvar$558=readyState$555,tmpvar$559=$$$cl1.String("interactive",11),(tmpvar$558.equals&&tmpvar$558.equals(tmpvar$559))||tmpvar$558===tmpvar$559)){
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
        return $$$cjl359.JSString($$documentAbs.$native.referrer);
        /*End dynamic block*/
    }
    $$documentAbs.referrer=referrer;
    referrer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','referrer']};};
    function scripts(){
        /*Begin dynamic block*/
        return HTMLCollection($$documentAbs.$native.scripts);
        /*End dynamic block*/
    }
    $$documentAbs.scripts=scripts;
    scripts.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','scripts']};};
    function getSelectedStyleSheetSet(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$documentAbs.$native.selectedStyleSheetSet);
        /*End dynamic block*/
    }
    $$documentAbs.getSelectedStyleSheetSet=getSelectedStyleSheetSet;
    getSelectedStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getSelectedStyleSheetSet']};};
    function setSelectedStyleSheetSet(sheet$560){
        
        var case$561=sheet$560;
        if ($$$cl1.isOfType(sheet$560,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.selectedStyleSheetSet=case$561.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(sheet$560,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.selectedStyleSheetSet=case$561.$native;
            /*End dynamic block*/
        }
    }
    $$documentAbs.setSelectedStyleSheetSet=setSelectedStyleSheetSet;
    setSelectedStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'sheet',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setSelectedStyleSheetSet']};};
    function styleSheets(){
        /*Begin dynamic block*/
        return StyleSheetList$stylesheets($$documentAbs.$native.styleSheets);
        /*End dynamic block*/
    }
    $$documentAbs.styleSheets=styleSheets;
    styleSheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:StyleSheetList$stylesheets},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','styleSheets']};};
    function styleSheetSets(){
        /*Begin dynamic block*/
        return $$$cjl359.JSArray($$documentAbs.$native.styleSheetSets);
        /*End dynamic block*/
    }
    $$documentAbs.styleSheetSets=styleSheetSets;
    styleSheetSets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSArray},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("Array of Strings",16)),$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','styleSheetSets']};};
    function title(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$documentAbs.$native.title);
        /*End dynamic block*/
    }
    $$documentAbs.title=title;
    title.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','title']};};
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
    function elementFromPoint(x$562,y$563){
        
        var case$564=x$562;
        if ($$$cl1.isOfType(x$562,{t:$$$cl1.Integer})) {
            
            var case$565=y$563;
            if ($$$cl1.isOfType(y$563,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.elementFromPoint(/*NULL PARAM!*/case$564/*NULL PARAM!*/,case$565));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(y$563,{t:$$$cjl359.JSNumber})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.elementFromPoint(/*NULL PARAM!*/case$564/*NULL PARAM!*/,case$565.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(x$562,{t:$$$cjl359.JSNumber})) {
            
            var case$566=y$563;
            if ($$$cl1.isOfType(y$563,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.elementFromPoint(/*NULL PARAM!*/case$564.$native/*NULL PARAM!*/,case$566));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(y$563,{t:$$$cjl359.JSNumber})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.elementFromPoint(/*NULL PARAM!*/case$564.$native/*NULL PARAM!*/,case$566.$native));
                /*End dynamic block*/
            }
        }
    }
    $$documentAbs.elementFromPoint=elementFromPoint;
    elementFromPoint.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'x',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','elementFromPoint']};};
    function getElementsByName(name$567){
        
        var case$568=name$567;
        if ($$$cl1.isOfType(name$567,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return HTMLCollection($$documentAbs.$native.getElementsByName(/*NULL PARAM!*/case$568.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(name$567,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            return HTMLCollection($$documentAbs.$native.getElementsByName(/*NULL PARAM!*/case$568.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.getElementsByName=getElementsByName;
    getElementsByName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByName']};};
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
    function querySelector(selectors$569){
        
        var case$570=selectors$569;
        if ($$$cl1.isOfType(selectors$569,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return Element($$documentAbs.$native.querySelector(/*NULL PARAM!*/case$570.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selectors$569,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            return Element($$documentAbs.$native.querySelector(/*NULL PARAM!*/case$570.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.querySelector=querySelector;
    querySelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'selectors',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','querySelector']};};
    function querySelectorAll(selectors$571){
        
        var case$572=selectors$571;
        if ($$$cl1.isOfType(selectors$571,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return NodeList($$documentAbs.$native.querySelectorAll(/*NULL PARAM!*/case$572.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selectors$571,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            return NodeList($$documentAbs.$native.querySelectorAll(/*NULL PARAM!*/case$572.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.querySelectorAll=querySelectorAll;
    querySelectorAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeList},$ps:[{$nm:'selectors',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','querySelectorAll']};};
    function releaseCapture(){
        /*Begin dynamic block*/
        $$documentAbs.$native.releaseCapture();
        /*End dynamic block*/
    }
    $$documentAbs.releaseCapture=releaseCapture;
    releaseCapture.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','releaseCapture']};};
    function write(line$573){
        
        var case$574=line$573;
        if ($$$cl1.isOfType(line$573,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.write(/*NULL PARAM!*/case$574.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(line$573,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.write(/*NULL PARAM!*/case$574.$native);
            /*End dynamic block*/
        }
    }
    $$documentAbs.write=write;
    write.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'line',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','write']};};
    function writeln(line$575){
        
        var case$576=line$575;
        if ($$$cl1.isOfType(line$575,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.writeln(/*NULL PARAM!*/case$576.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(line$575,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.writeln(/*NULL PARAM!*/case$576.$native);
            /*End dynamic block*/
        }
    }
    $$documentAbs.writeln=writeln;
    writeln.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'line',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','writeln']};};
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
function Document(n$577, $$document){
    $init$Document();
    if ($$document===undefined)$$document=new Document.$$;
    $$document.n$577_=n$577;
    DocumentAbs($$document);
    $$$cl1.defineAttr($$document,'n$577',function(){return this.n$577_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Document,d:['ceylon.js.dom','Document','$at','n']};});
    $$document.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Document,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Document','$at','native']};}};
    /*Begin dynamic block*/
    $$document.$native=n$577;/*End dynamic block*/
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
        return $$$cjl359.JSString($$documentTypeAbs.$native.name);
        /*End dynamic block*/
    }
    $$documentTypeAbs.name=name;
    name.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentTypeAbs','$m','name']};};
    function publicId(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$documentTypeAbs.$native.publicId);
        /*End dynamic block*/
    }
    $$documentTypeAbs.publicId=publicId;
    publicId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentTypeAbs','$m','publicId']};};
    function systemId(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$documentTypeAbs.$native.systemId);
        /*End dynamic block*/
    }
    $$documentTypeAbs.systemId=systemId;
    systemId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentTypeAbs','$m','systemId']};};
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
function DocumentType(n$578, $$documentType){
    $init$DocumentType();
    if ($$documentType===undefined)$$documentType=new DocumentType.$$;
    $$documentType.n$578_=n$578;
    DocumentTypeAbs($$documentType);
    $$$cl1.defineAttr($$documentType,'n$578',function(){return this.n$578_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DocumentType,d:['ceylon.js.dom','DocumentType','$at','n']};});
    $$documentType.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DocumentType,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','DocumentType','$at','native']};}};
    /*Begin dynamic block*/
    $$documentType.$native=n$578;/*End dynamic block*/
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
    $$$cjl359.JSObjectAbs($$dOMImplementationAbs);
    $$dOMImplementationAbs.createDocument$defs$qualifiedName=function(namespace$579,qualifiedName$580,doctype$581){return $$$cl1.String("",0);};
    $$dOMImplementationAbs.createDocument$defs$doctype=function(namespace$579,qualifiedName$580,doctype$581){return null;};
    function createDocument(namespace$579,qualifiedName$580,doctype$581){
        if(qualifiedName$580===undefined){qualifiedName$580=$$dOMImplementationAbs.createDocument$defs$qualifiedName(namespace$579,qualifiedName$580,doctype$581);}
        if(doctype$581===undefined){doctype$581=$$dOMImplementationAbs.createDocument$defs$doctype(namespace$579,qualifiedName$580,doctype$581);}
        
        var case$582=namespace$579;
        if ($$$cl1.isOfType(namespace$579,{t:$$$cl1.String})) {
            
            var case$583=qualifiedName$580;
            if ($$$cl1.isOfType(qualifiedName$580,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/case$582.valueOf()/*NULL PARAM!*/,case$583.valueOf()/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'11:69-11:70','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(qualifiedName$580,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/case$582.valueOf()/*NULL PARAM!*/,case$583.$native/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'16:76-16:77','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$579,{t:$$$cjl359.JSString})) {
            
            var case$584=qualifiedName$580;
            if ($$$cl1.isOfType(qualifiedName$580,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/case$582.$native/*NULL PARAM!*/,case$584.valueOf()/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'24:76-24:77','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(qualifiedName$580,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/case$582.$native/*NULL PARAM!*/,case$584.$native/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'29:83-29:84','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$579,{t:$$$cl1.Null})) {
            
            var case$585=qualifiedName$580;
            if ($$$cl1.isOfType(qualifiedName$580,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/null/*NULL PARAM!*/,case$585.valueOf()/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'37:64-37:65','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(qualifiedName$580,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/null/*NULL PARAM!*/,case$585.$native/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'42:71-42:72','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }
        }
    }
    $$dOMImplementationAbs.createDocument=createDocument;
    createDocument.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Document},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]}]},$an:function(){return[];}},{$nm:'qualifiedName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'doctype',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:DocumentType}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DOMImplementationAbs','$m','createDocument']};};
    function createDocumentType(qualifiedName$586,publicId$587,systemId$588){
        
        var case$589=qualifiedName$586;
        if ($$$cl1.isOfType(qualifiedName$586,{t:$$$cl1.String})) {
            
            var case$590=publicId$587;
            if ($$$cl1.isOfType(publicId$587,{t:$$$cl1.String})) {
                
                var case$591=systemId$588;
                if ($$$cl1.isOfType(systemId$588,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$589.valueOf()/*NULL PARAM!*/,case$590.valueOf()/*NULL PARAM!*/,case$591.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(systemId$588,{t:$$$cjl359.JSString})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$589.valueOf()/*NULL PARAM!*/,case$590.valueOf()/*NULL PARAM!*/,case$591.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(publicId$587,{t:$$$cjl359.JSString})) {
                
                var case$592=systemId$588;
                if ($$$cl1.isOfType(systemId$588,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$589.valueOf()/*NULL PARAM!*/,case$590.$native/*NULL PARAM!*/,case$592.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(systemId$588,{t:$$$cjl359.JSString})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$589.valueOf()/*NULL PARAM!*/,case$590.$native/*NULL PARAM!*/,case$592.$native));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(qualifiedName$586,{t:$$$cjl359.JSString})) {
            
            var case$593=publicId$587;
            if ($$$cl1.isOfType(publicId$587,{t:$$$cl1.String})) {
                
                var case$594=systemId$588;
                if ($$$cl1.isOfType(systemId$588,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$589.$native/*NULL PARAM!*/,case$593.valueOf()/*NULL PARAM!*/,case$594.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(systemId$588,{t:$$$cjl359.JSString})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$589.$native/*NULL PARAM!*/,case$593.valueOf()/*NULL PARAM!*/,case$594.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(publicId$587,{t:$$$cjl359.JSString})) {
                
                var case$595=systemId$588;
                if ($$$cl1.isOfType(systemId$588,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$589.$native/*NULL PARAM!*/,case$593.$native/*NULL PARAM!*/,case$595.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(systemId$588,{t:$$$cjl359.JSString})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$589.$native/*NULL PARAM!*/,case$593.$native/*NULL PARAM!*/,case$595.$native));
                    /*End dynamic block*/
                }
            }
        }
    }
    $$dOMImplementationAbs.createDocumentType=createDocumentType;
    createDocumentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentType},$ps:[{$nm:'qualifiedName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'publicId',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'systemId',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DOMImplementationAbs','$m','createDocumentType']};};
    $$dOMImplementationAbs.hasFeature$defs$version=function(feature$596,version$597){return $$$cl1.String("",0);};
    function hasFeature(feature$596,version$597){
        if(version$597===undefined){version$597=$$dOMImplementationAbs.hasFeature$defs$version(feature$596,version$597);}
        var has$598;
        
        var case$599=feature$596;
        if ($$$cl1.isOfType(feature$596,{t:$$$cl1.String})) {
            
            var case$600=version$597;
            if ($$$cl1.isOfType(version$597,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                has$598=$$dOMImplementationAbs.$native.hasFeature(/*NULL PARAM!*/case$599.valueOf()/*NULL PARAM!*/,case$600.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(version$597,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                has$598=$$dOMImplementationAbs.$native.hasFeature(/*NULL PARAM!*/case$599.valueOf()/*NULL PARAM!*/,case$600.$native);/*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(feature$596,{t:$$$cjl359.JSString})) {
            
            var case$601=version$597;
            if ($$$cl1.isOfType(version$597,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                has$598=$$dOMImplementationAbs.$native.hasFeature(/*NULL PARAM!*/case$599.$native/*NULL PARAM!*/,case$601.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(version$597,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                has$598=$$dOMImplementationAbs.$native.hasFeature(/*NULL PARAM!*/case$599.$native/*NULL PARAM!*/,case$601.$native);/*End dynamic block*/
            }
        }
        /*Begin dynamic block*/
        if(has$598){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$dOMImplementationAbs.hasFeature=hasFeature;
    hasFeature.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'feature',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'version',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DOMImplementationAbs','$m','hasFeature']};};
    return $$dOMImplementationAbs;
}
DOMImplementationAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','DOMImplementationAbs']};};
exports.DOMImplementationAbs=DOMImplementationAbs;
function $init$DOMImplementationAbs(){
    if (DOMImplementationAbs.$$===undefined){
        $$$cl1.initTypeProto(DOMImplementationAbs,'ceylon.js.dom::DOMImplementationAbs',$$$cjl359.JSObjectAbs);
    }
    return DOMImplementationAbs;
}
exports.$init$DOMImplementationAbs=$init$DOMImplementationAbs;
$init$DOMImplementationAbs();
function DOMImplementation(n$602, $$dOMImplementation){
    $init$DOMImplementation();
    if ($$dOMImplementation===undefined)$$dOMImplementation=new DOMImplementation.$$;
    $$dOMImplementation.n$602_=n$602;
    DOMImplementationAbs($$dOMImplementation);
    $$$cl1.defineAttr($$dOMImplementation,'n$602',function(){return this.n$602_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DOMImplementation,d:['ceylon.js.dom','DOMImplementation','$at','n']};});
    $$dOMImplementation.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DOMImplementation,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','DOMImplementation','$at','native']};}};
    /*Begin dynamic block*/
    $$dOMImplementation.$native=n$602;/*End dynamic block*/
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
    function getAttribute(attributeName$603){
        var attr$604;
        
        var case$605=attributeName$603;
        if ($$$cl1.isOfType(attributeName$603,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            attr$604=$$elementAbs.$native.getAttribute(/*NULL PARAM!*/case$605.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(attributeName$603,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            attr$604=$$elementAbs.$native.getAttribute(/*NULL PARAM!*/case$605.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(((tmpvar$606=attr$604,tmpvar$607=null,(tmpvar$606.equals&&!tmpvar$606.equals(tmpvar$607))||tmpvar$606!==tmpvar$607)||(tmpvar$608=attr$604,tmpvar$609=$$$cl1.String("",0),(tmpvar$608.equals&&!tmpvar$608.equals(tmpvar$609))||tmpvar$608!==tmpvar$609))){
            return $$$cjl359.JSString(attr$604);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$elementAbs.getAttribute=getAttribute;
    getAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[{$nm:'attributeName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','getAttribute']};};
    function getAttributeNS(namespace$610,attributeName$611){
        var attr$612;
        
        var case$613=namespace$610;
        if ($$$cl1.isOfType(namespace$610,{t:$$$cl1.String})) {
            
            var case$614=attributeName$611;
            if ($$$cl1.isOfType(attributeName$611,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                attr$612=$$elementAbs.$native.getAttributeNS(/*NULL PARAM!*/case$613.valueOf()/*NULL PARAM!*/,case$614.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(attributeName$611,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                attr$612=$$elementAbs.$native.getAttributeNS(/*NULL PARAM!*/case$613.valueOf()/*NULL PARAM!*/,case$614.$native);/*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$610,{t:$$$cjl359.JSString})) {
            
            var case$615=attributeName$611;
            if ($$$cl1.isOfType(attributeName$611,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                attr$612=$$elementAbs.$native.getAttributeNS(/*NULL PARAM!*/case$613.$native/*NULL PARAM!*/,case$615.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(attributeName$611,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                attr$612=$$elementAbs.$native.getAttributeNS(/*NULL PARAM!*/case$613.$native/*NULL PARAM!*/,case$615.$native);/*End dynamic block*/
            }
        }
        /*Begin dynamic block*/
        if(((tmpvar$616=attr$612,tmpvar$617=null,(tmpvar$616.equals&&!tmpvar$616.equals(tmpvar$617))||tmpvar$616!==tmpvar$617)||(tmpvar$618=attr$612,tmpvar$619=$$$cl1.String("",0),(tmpvar$618.equals&&!tmpvar$618.equals(tmpvar$619))||tmpvar$618!==tmpvar$619))){
            return $$$cjl359.JSString(attr$612);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$elementAbs.getAttributeNS=getAttributeNS;
    getAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'attributeName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','getAttributeNS']};};
    $$elementAbs.getElementsByTagName$defs$tagName=function(tagName$620){return $$$cl1.String("*",1);};
    function getElementsByTagName(tagName$620){
        if(tagName$620===undefined){tagName$620=$$elementAbs.getElementsByTagName$defs$tagName(tagName$620);}
        
        var case$621=tagName$620;
        if ($$$cl1.isOfType(tagName$620,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return HTMLCollection($$elementAbs.$native.getElementsByTagName(/*NULL PARAM!*/case$621.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(tagName$620,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            return HTMLCollection($$elementAbs.$native.getElementsByTagName(/*NULL PARAM!*/case$621.$native));
            /*End dynamic block*/
        }
    }
    $$elementAbs.getElementsByTagName=getElementsByTagName;
    getElementsByTagName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'tagName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','getElementsByTagName']};};
    $$elementAbs.getElementsByTagNameNS$defs$tagName=function(namespace$622,tagName$623){return $$$cl1.String("*",1);};
    function getElementsByTagNameNS(namespace$622,tagName$623){
        if(tagName$623===undefined){tagName$623=$$elementAbs.getElementsByTagNameNS$defs$tagName(namespace$622,tagName$623);}
        
        var case$624=namespace$622;
        if ($$$cl1.isOfType(namespace$622,{t:$$$cl1.String})) {
            
            var case$625=tagName$623;
            if ($$$cl1.isOfType(tagName$623,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$624.valueOf()/*NULL PARAM!*/,case$625.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(tagName$623,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$624.valueOf()/*NULL PARAM!*/,case$625.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$622,{t:$$$cjl359.JSString})) {
            
            var case$626=tagName$623;
            if ($$$cl1.isOfType(tagName$623,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$624.$native/*NULL PARAM!*/,case$626.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(tagName$623,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$624.$native/*NULL PARAM!*/,case$626.$native));
                /*End dynamic block*/
            }
        }
    }
    $$elementAbs.getElementsByTagNameNS=getElementsByTagNameNS;
    getElementsByTagNameNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'tagName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','getElementsByTagNameNS']};};
    function hasAttribute(attName$627){
        var has$628;
        
        var case$629=attName$627;
        if ($$$cl1.isOfType(attName$627,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            has$628=$$elementAbs.$native.hasAttribute(/*NULL PARAM!*/case$629.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(attName$627,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            has$628=$$elementAbs.$native.hasAttribute(/*NULL PARAM!*/case$629.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(has$628){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$elementAbs.hasAttribute=hasAttribute;
    hasAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'attName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','hasAttribute']};};
    function hasAttributeNS(namespace$630,attName$631){
        var has$632;
        
        var case$633=namespace$630;
        if ($$$cl1.isOfType(namespace$630,{t:$$$cl1.String})) {
            
            var case$634=attName$631;
            if ($$$cl1.isOfType(attName$631,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                has$632=$$elementAbs.$native.hasAttributeNS(/*NULL PARAM!*/case$633.valueOf()/*NULL PARAM!*/,case$634.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(attName$631,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                has$632=$$elementAbs.$native.hasAttributeNS(/*NULL PARAM!*/case$633.valueOf()/*NULL PARAM!*/,case$634.$native);/*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$630,{t:$$$cjl359.JSString})) {
            
            var case$635=attName$631;
            if ($$$cl1.isOfType(attName$631,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                has$632=$$elementAbs.$native.hasAttributeNS(/*NULL PARAM!*/case$633.$native/*NULL PARAM!*/,case$635.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(attName$631,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                has$632=$$elementAbs.$native.hasAttributeNS(/*NULL PARAM!*/case$633.$native/*NULL PARAM!*/,case$635.$native);/*End dynamic block*/
            }
        }
        /*Begin dynamic block*/
        if(has$632){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$elementAbs.hasAttributeNS=hasAttributeNS;
    hasAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'attName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','hasAttributeNS']};};
    function removeAttribute(attrName$636){
        
        var case$637=attrName$636;
        if ($$$cl1.isOfType(attrName$636,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$637.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(attrName$636,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$637.$native);
            /*End dynamic block*/
        }
    }
    $$elementAbs.removeAttribute=removeAttribute;
    removeAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'attrName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','removeAttribute']};};
    function removeAttributeNS(namespace$638,attrName$639){
        
        var case$640=namespace$638;
        if ($$$cl1.isOfType(namespace$638,{t:$$$cl1.String})) {
            
            var case$641=attrName$639;
            if ($$$cl1.isOfType(attrName$639,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$640.valueOf()/*NULL PARAM!*/,case$641.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(attrName$639,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$640.valueOf()/*NULL PARAM!*/,case$641.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$638,{t:$$$cjl359.JSString})) {
            
            var case$642=attrName$639;
            if ($$$cl1.isOfType(attrName$639,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$640.$native/*NULL PARAM!*/,case$642.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(attrName$639,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$640.$native/*NULL PARAM!*/,case$642.$native);
                /*End dynamic block*/
            }
        }
    }
    $$elementAbs.removeAttributeNS=removeAttributeNS;
    removeAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'attrName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','removeAttributeNS']};};
    function setAttribute(name$643,val$644){
        
        var case$645=name$643;
        if ($$$cl1.isOfType(name$643,{t:$$$cl1.String})) {
            
            var case$646=val$644;
            if ($$$cl1.isOfType(val$644,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.setAttribute(/*NULL PARAM!*/case$645.valueOf()/*NULL PARAM!*/,case$646.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$644,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.setAttribute(/*NULL PARAM!*/case$645.valueOf()/*NULL PARAM!*/,case$646.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(name$643,{t:$$$cjl359.JSString})) {
            
            var case$647=val$644;
            if ($$$cl1.isOfType(val$644,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.setAttribute(/*NULL PARAM!*/case$645.$native/*NULL PARAM!*/,case$647.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$644,{t:$$$cjl359.JSString})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.setAttribute(/*NULL PARAM!*/case$645.$native/*NULL PARAM!*/,case$647.$native);
                /*End dynamic block*/
            }
        }
    }
    $$elementAbs.setAttribute=setAttribute;
    setAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','setAttribute']};};
    function setAttributeNS(namespace$648,name$649,val$650){
        
        var case$651=namespace$648;
        if ($$$cl1.isOfType(namespace$648,{t:$$$cl1.String})) {
            
            var case$652=name$649;
            if ($$$cl1.isOfType(name$649,{t:$$$cl1.String})) {
                
                var case$653=val$650;
                if ($$$cl1.isOfType(val$650,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$651.valueOf()/*NULL PARAM!*/,case$652.valueOf()/*NULL PARAM!*/,case$653.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(val$650,{t:$$$cjl359.JSString})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$651.valueOf()/*NULL PARAM!*/,case$652.valueOf()/*NULL PARAM!*/,case$653.$native);
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(name$649,{t:$$$cjl359.JSString})) {
                
                var case$654=val$650;
                if ($$$cl1.isOfType(val$650,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$651.valueOf()/*NULL PARAM!*/,case$652.$native/*NULL PARAM!*/,case$654.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(val$650,{t:$$$cjl359.JSString})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$651.valueOf()/*NULL PARAM!*/,case$652.$native/*NULL PARAM!*/,case$654.$native);
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(namespace$648,{t:$$$cjl359.JSString})) {
            
            var case$655=name$649;
            if ($$$cl1.isOfType(name$649,{t:$$$cl1.String})) {
                
                var case$656=val$650;
                if ($$$cl1.isOfType(val$650,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$651.$native/*NULL PARAM!*/,case$655.valueOf()/*NULL PARAM!*/,case$656.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(val$650,{t:$$$cjl359.JSString})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$651.$native/*NULL PARAM!*/,case$655.valueOf()/*NULL PARAM!*/,case$656.$native);
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(name$649,{t:$$$cjl359.JSString})) {
                
                var case$657=val$650;
                if ($$$cl1.isOfType(val$650,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$651.$native/*NULL PARAM!*/,case$655.$native/*NULL PARAM!*/,case$657.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(val$650,{t:$$$cjl359.JSString})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$651.$native/*NULL PARAM!*/,case$655.$native/*NULL PARAM!*/,case$657.$native);
                    /*End dynamic block*/
                }
            }
        }
    }
    $$elementAbs.setAttributeNS=setAttributeNS;
    setAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','setAttributeNS']};};
    function tagName(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$elementAbs.$native.tagName);
        /*End dynamic block*/
    }
    $$elementAbs.tagName=tagName;
    tagName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','tagName']};};
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
function Element(n$658, $$element){
    $init$Element();
    if ($$element===undefined)$$element=new Element.$$;
    $$element.n$658_=n$658;
    ElementAbs($$element);
    $$$cl1.defineAttr($$element,'n$658',function(){return this.n$658_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Element,d:['ceylon.js.dom','Element','$at','n']};});
    $$element.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Element,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Element','$at','native']};}};
    /*Begin dynamic block*/
    $$element.$native=n$658;/*End dynamic block*/
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
var $$$cjj659=require('ceylon/js/json/1.0.0/ceylon.js.json-1.0.0');
$$$cl1.$addmod$($$$cjj659,'ceylon.js.json/1.0.0');
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
function none$660(){
    var $$none=new none$660.$$;
    EventPhase((0),$$none);
    return $$none;
}
function $init$none$660(){
    if (none$660.$$===undefined){
        $$$cl1.initTypeProto(none$660,'ceylon.js.dom::none',$init$EventPhase());
    }
    return none$660;
}
exports.$init$none$660=$init$none$660;
$init$none$660();
var none$661;
function getNone(){
    if (none$661===undefined)none$661=$init$none$660()();
    return none$661;
}
exports.getNone=getNone;
getNone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:none$660},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','none']};};
$prop$getNone={get:getNone,$$metamodel$$:getNone.$$metamodel$$};
exports.$prop$getNone=$prop$getNone;
function capturePhase$662(){
    var $$capturePhase=new capturePhase$662.$$;
    EventPhase((1),$$capturePhase);
    return $$capturePhase;
}
function $init$capturePhase$662(){
    if (capturePhase$662.$$===undefined){
        $$$cl1.initTypeProto(capturePhase$662,'ceylon.js.dom::capturePhase',$init$EventPhase());
    }
    return capturePhase$662;
}
exports.$init$capturePhase$662=$init$capturePhase$662;
$init$capturePhase$662();
var capturePhase$663;
function getCapturePhase(){
    if (capturePhase$663===undefined)capturePhase$663=$init$capturePhase$662()();
    return capturePhase$663;
}
exports.getCapturePhase=getCapturePhase;
getCapturePhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:capturePhase$662},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','capturePhase']};};
$prop$getCapturePhase={get:getCapturePhase,$$metamodel$$:getCapturePhase.$$metamodel$$};
exports.$prop$getCapturePhase=$prop$getCapturePhase;
function atTarget$664(){
    var $$atTarget=new atTarget$664.$$;
    EventPhase((2),$$atTarget);
    return $$atTarget;
}
function $init$atTarget$664(){
    if (atTarget$664.$$===undefined){
        $$$cl1.initTypeProto(atTarget$664,'ceylon.js.dom::atTarget',$init$EventPhase());
    }
    return atTarget$664;
}
exports.$init$atTarget$664=$init$atTarget$664;
$init$atTarget$664();
var atTarget$665;
function getAtTarget(){
    if (atTarget$665===undefined)atTarget$665=$init$atTarget$664()();
    return atTarget$665;
}
exports.getAtTarget=getAtTarget;
getAtTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:atTarget$664},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','atTarget']};};
$prop$getAtTarget={get:getAtTarget,$$metamodel$$:getAtTarget.$$metamodel$$};
exports.$prop$getAtTarget=$prop$getAtTarget;
function bubblingPhase$666(){
    var $$bubblingPhase=new bubblingPhase$666.$$;
    EventPhase((3),$$bubblingPhase);
    return $$bubblingPhase;
}
function $init$bubblingPhase$666(){
    if (bubblingPhase$666.$$===undefined){
        $$$cl1.initTypeProto(bubblingPhase$666,'ceylon.js.dom::bubblingPhase',$init$EventPhase());
    }
    return bubblingPhase$666;
}
exports.$init$bubblingPhase$666=$init$bubblingPhase$666;
$init$bubblingPhase$666();
var bubblingPhase$667;
function getBubblingPhase(){
    if (bubblingPhase$667===undefined)bubblingPhase$667=$init$bubblingPhase$666()();
    return bubblingPhase$667;
}
exports.getBubblingPhase=getBubblingPhase;
getBubblingPhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:bubblingPhase$666},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','bubblingPhase']};};
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
        var json$668=(values$669=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("bubbles",7),$$eventInit.bubbles,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("cancelable",10),$$eventInit.cancelable,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}}}}),$$$cjj659.JSON(values$669));
        var values$669;
        return json$668.toJson();
    }
    $$eventInit.toJson=toJson;
    toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj659.JSJSON},$ps:[],$cont:EventInit,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventInit','$m','toJson']};};
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
function createEvent(type$670,options$671){
    
    var case$672=type$670;
    if ($$$cl1.isOfType(type$670,{t:$$$cl1.String})) {
        /*Begin dynamic block*/
        return Event((typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'26:16-26:20','event.ceylon'):Event)(/*NULL PARAM!*/case$672.valueOf()/*NULL PARAM!*/,options$671.toJson()));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(type$670,{t:$$$cjl359.JSString})) {
        /*Begin dynamic block*/
        return Event((typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'31:16-31:20','event.ceylon'):Event)(/*NULL PARAM!*/case$672.$native/*NULL PARAM!*/,options$671.toJson()));
        /*End dynamic block*/
    }
}
exports.createEvent=createEvent;
createEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Event},$ps:[{$nm:'type',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'options',$mt:'prm',$t:{t:EventInit},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','createEvent']};};
function EventAbs($$eventAbs){
    $init$EventAbs();
    if ($$eventAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl359.JSObjectAbs($$eventAbs);
    function type(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$eventAbs.$native.type);
        /*End dynamic block*/
    }
    $$eventAbs.type=type;
    type.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','type']};};
    function target(){
        var target$673;
        /*Begin dynamic block*/
        target$673=$$eventAbs.$native.target;if((tmpvar$674=target$673,tmpvar$675=null,(tmpvar$674.equals&&!tmpvar$674.equals(tmpvar$675))||tmpvar$674!==tmpvar$675)){
            return EventTarget(target$673);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$eventAbs.target=target;
    target.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:EventTarget}]},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','target']};};
    function currentTarget(){
        var target$676;
        /*Begin dynamic block*/
        target$676=$$eventAbs.$native.currentTarget;if((tmpvar$677=target$676,tmpvar$678=null,(tmpvar$677.equals&&!tmpvar$677.equals(tmpvar$678))||tmpvar$677!==tmpvar$678)){
            return EventTarget(target$676);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$eventAbs.currentTarget=currentTarget;
    currentTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:EventTarget}]},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','currentTarget']};};
    function eventPhase(){
        /*Begin dynamic block*/
        var eventPhase$679=$$eventAbs.$native.eventPhase;
        $prop$getEventPhase$679={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','EventAbs','$m','eventPhase','$at','eventPhase']};}};
        $prop$getEventPhase$679.get=function(){return eventPhase$679};
        if((tmpvar$680=eventPhase$679,tmpvar$681=(typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'72:30-72:34','event.ceylon'):Event).NONE,(tmpvar$680.equals&&tmpvar$680.equals(tmpvar$681))||tmpvar$680===tmpvar$681)){
            return getNone();
        }else {
            if((tmpvar$682=eventPhase$679,tmpvar$683=(typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'74:37-74:41','event.ceylon'):Event).CAPTURING_PHASE,(tmpvar$682.equals&&tmpvar$682.equals(tmpvar$683))||tmpvar$682===tmpvar$683)){
                return getCapturePhase();
            }else {
                if((tmpvar$684=eventPhase$679,tmpvar$685=(typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'76:37-76:41','event.ceylon'):Event).AT_TARGET,(tmpvar$684.equals&&tmpvar$684.equals(tmpvar$685))||tmpvar$684===tmpvar$685)){
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
        return $$$cjl359.JSDate($$eventAbs.$native.timeStamp);
        /*End dynamic block*/
    }
    $$eventAbs.timeStamp=timeStamp;
    timeStamp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSDate},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','timeStamp']};};
    function initEvent(type$686,bubbles$687,cancelable$688){
        
        var case$689=type$686;
        if ($$$cl1.isOfType(type$686,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$eventAbs.$native.initEvent(/*NULL PARAM!*/case$689.valueOf()/*NULL PARAM!*/,(typeof callback==='undefined'||callback===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: callback")),'152:36-152:43','event.ceylon'):callback)/*NULL PARAM!*/,(typeof capture==='undefined'||capture===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: capture")),'152:46-152:52','event.ceylon'):capture));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(type$686,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$eventAbs.$native.initEvent(/*NULL PARAM!*/case$689.$native/*NULL PARAM!*/,(typeof callback==='undefined'||callback===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: callback")),'157:43-157:50','event.ceylon'):callback)/*NULL PARAM!*/,(typeof capture==='undefined'||capture===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: capture")),'157:53-157:59','event.ceylon'):capture));
            /*End dynamic block*/
        }
    }
    $$eventAbs.initEvent=initEvent;
    initEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'bubbles',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'cancelable',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','initEvent']};};
    return $$eventAbs;
}
EventAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','EventAbs']};};
exports.EventAbs=EventAbs;
function $init$EventAbs(){
    if (EventAbs.$$===undefined){
        $$$cl1.initTypeProto(EventAbs,'ceylon.js.dom::EventAbs',$$$cjl359.JSObjectAbs);
    }
    return EventAbs;
}
exports.$init$EventAbs=$init$EventAbs;
$init$EventAbs();
function Event(n$690, $$event){
    $init$Event();
    if ($$event===undefined)$$event=new Event.$$;
    $$event.n$690_=n$690;
    EventAbs($$event);
    $$$cl1.defineAttr($$event,'n$690',function(){return this.n$690_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Event,d:['ceylon.js.dom','Event','$at','n']};});
    $$event.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Event,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Event','$at','native']};}};
    /*Begin dynamic block*/
    $$event.$native=n$690;/*End dynamic block*/
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
    $$$cjl359.JSObjectAbs($$eventTargetAbs);
    $$eventTargetAbs.addEventListener$defs$capture=function(type$691,callback$692,capture$693){return false;};
    function addEventListener(type$691,callback$692,capture$693){
        if(capture$693===undefined){capture$693=$$eventTargetAbs.addEventListener$defs$capture(type$691,callback$692,capture$693);}
        
        var case$694=type$691;
        if ($$$cl1.isOfType(type$691,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$eventTargetAbs.$native.addEventListener(/*NULL PARAM!*/case$694.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$692,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Event},Element:{t:Event}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,capture$693);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(type$691,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$eventTargetAbs.$native.addEventListener(/*NULL PARAM!*/case$694.$native/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$692,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Event},Element:{t:Event}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,capture$693);
            /*End dynamic block*/
        }
    }
    $$eventTargetAbs.addEventListener=addEventListener;
    addEventListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'capture',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventTargetAbs','$m','addEventListener']};};
    $$eventTargetAbs.removeEventListener$defs$capture=function(type$695,callback$696,capture$697){return false;};
    function removeEventListener(type$695,callback$696,capture$697){
        if(capture$697===undefined){capture$697=$$eventTargetAbs.removeEventListener$defs$capture(type$695,callback$696,capture$697);}
        
        var case$698=type$695;
        if ($$$cl1.isOfType(type$695,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$eventTargetAbs.$native.removeEventListener(/*NULL PARAM!*/case$698.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$696,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Event},Element:{t:Event}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,capture$697);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(type$695,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$eventTargetAbs.$native.removeEventListener(/*NULL PARAM!*/case$698.$native/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$696,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Event},Element:{t:Event}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,capture$697);
            /*End dynamic block*/
        }
    }
    $$eventTargetAbs.removeEventListener=removeEventListener;
    removeEventListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'capture',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventTargetAbs','$m','removeEventListener']};};
    function dispatchEvent(event$699){
        /*Begin dynamic block*/
        if($$eventTargetAbs.$native.dispatchEvent(/*NULL PARAM!*/event$699)){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$eventTargetAbs.dispatchEvent=dispatchEvent;
    dispatchEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventTargetAbs','$m','dispatchEvent']};};
    return $$eventTargetAbs;
}
EventTargetAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','EventTargetAbs']};};
exports.EventTargetAbs=EventTargetAbs;
function $init$EventTargetAbs(){
    if (EventTargetAbs.$$===undefined){
        $$$cl1.initTypeProto(EventTargetAbs,'ceylon.js.dom::EventTargetAbs',$$$cjl359.JSObjectAbs);
    }
    return EventTargetAbs;
}
exports.$init$EventTargetAbs=$init$EventTargetAbs;
$init$EventTargetAbs();
function EventTarget(n$700, $$eventTarget){
    $init$EventTarget();
    if ($$eventTarget===undefined)$$eventTarget=new EventTarget.$$;
    $$eventTarget.n$700_=n$700;
    EventTargetAbs($$eventTarget);
    $$$cl1.defineAttr($$eventTarget,'n$700',function(){return this.n$700_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:EventTarget,d:['ceylon.js.dom','EventTarget','$at','n']};});
    $$eventTarget.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:EventTarget,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','EventTarget','$at','native']};}};
    /*Begin dynamic block*/
    $$eventTarget.$native=n$700;/*End dynamic block*/
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
    $$$cjl359.JSObjectAbs($$hTMLCollectionAbs);
    function length(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$hTMLCollectionAbs.$native.length);
        /*End dynamic block*/
    }
    $$hTMLCollectionAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:HTMLCollectionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','HTMLCollectionAbs','$m','length']};};
    function item(index$701){
        var item$702;
        
        var case$703=index$701;
        if ($$$cl1.isOfType(index$701,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            item$702=$$hTMLCollectionAbs.$native.item(/*NULL PARAM!*/case$703);/*End dynamic block*/
        }else if ($$$cl1.isOfType(index$701,{t:$$$cjl359.JSNumber})) {
            /*Begin dynamic block*/
            item$702=$$hTMLCollectionAbs.$native.item(/*NULL PARAM!*/case$703.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if((tmpvar$704=item$702,tmpvar$705=null,(tmpvar$704.equals&&!tmpvar$704.equals(tmpvar$705))||tmpvar$704!==tmpvar$705)){
            return Element(item$702);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$hTMLCollectionAbs.item=item;
    item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Element}]},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}}],$cont:HTMLCollectionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','HTMLCollectionAbs','$m','item']};};
    function namedItem(name$706){
        var namedItem$707;
        
        var case$708=name$706;
        if ($$$cl1.isOfType(name$706,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            namedItem$707=$$hTMLCollectionAbs.$native.namedItem(/*NULL PARAM!*/case$708.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(name$706,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            namedItem$707=$$hTMLCollectionAbs.$native.namedItem(/*NULL PARAM!*/case$708.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if((tmpvar$709=namedItem$707,tmpvar$710=null,(tmpvar$709.equals&&tmpvar$709.equals(tmpvar$710))||tmpvar$709===tmpvar$710)){
            return $$$cjl359.JSObject(namedItem$707);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$hTMLCollectionAbs.namedItem=namedItem;
    namedItem.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSObject}]},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:HTMLCollectionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','HTMLCollectionAbs','$m','namedItem']};};
    return $$hTMLCollectionAbs;
}
HTMLCollectionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','HTMLCollectionAbs']};};
exports.HTMLCollectionAbs=HTMLCollectionAbs;
function $init$HTMLCollectionAbs(){
    if (HTMLCollectionAbs.$$===undefined){
        $$$cl1.initTypeProto(HTMLCollectionAbs,'ceylon.js.dom::HTMLCollectionAbs',$$$cjl359.JSObjectAbs);
    }
    return HTMLCollectionAbs;
}
exports.$init$HTMLCollectionAbs=$init$HTMLCollectionAbs;
$init$HTMLCollectionAbs();
function HTMLCollection(n$711, $$hTMLCollection){
    $init$HTMLCollection();
    if ($$hTMLCollection===undefined)$$hTMLCollection=new HTMLCollection.$$;
    $$hTMLCollection.n$711_=n$711;
    HTMLCollectionAbs($$hTMLCollection);
    $$$cl1.defineAttr($$hTMLCollection,'n$711',function(){return this.n$711_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:HTMLCollection,d:['ceylon.js.dom','HTMLCollection','$at','n']};});
    $$hTMLCollection.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:HTMLCollection,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','HTMLCollection','$at','native']};}};
    /*Begin dynamic block*/
    $$hTMLCollection.$native=n$711;/*End dynamic block*/
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
    return $$$cjh449.Window((typeof window==='undefined'||window===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: window")),'5:16-5:21','main.ceylon'):window));
    /*End dynamic block*/
}
exports.getWindow=getWindow;
getWindow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjh449.Window},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','getWindow']};};
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("based on the DOM 4 working draft and",36))];};
function NodeType(name$712, $$nodeType){
    $init$NodeType();
    if ($$nodeType===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$nodeType.name$712_=name$712;
    $$$cl1.defineAttr($$nodeType,'name$712',function(){return this.name$712_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:NodeType,d:['ceylon.js.dom','NodeType','$at','name']};});
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
function attributeNode$713(){
    var $$attributeNode=new attributeNode$713.$$;
    NodeType($$$cl1.String("attributeNode",13),$$attributeNode);
    return $$attributeNode;
}
function $init$attributeNode$713(){
    if (attributeNode$713.$$===undefined){
        $$$cl1.initTypeProto(attributeNode$713,'ceylon.js.dom::attributeNode',$init$NodeType());
    }
    return attributeNode$713;
}
exports.$init$attributeNode$713=$init$attributeNode$713;
$init$attributeNode$713();
var attributeNode$714;
function getAttributeNode(){
    if (attributeNode$714===undefined)attributeNode$714=$init$attributeNode$713()();
    return attributeNode$714;
}
exports.getAttributeNode=getAttributeNode;
getAttributeNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:attributeNode$713},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','attributeNode']};};
$prop$getAttributeNode={get:getAttributeNode,$$metamodel$$:getAttributeNode.$$metamodel$$};
exports.$prop$getAttributeNode=$prop$getAttributeNode;
function cdataSectionNode$715(){
    var $$cdataSectionNode=new cdataSectionNode$715.$$;
    NodeType($$$cl1.String("cdataSectionNode",16),$$cdataSectionNode);
    return $$cdataSectionNode;
}
function $init$cdataSectionNode$715(){
    if (cdataSectionNode$715.$$===undefined){
        $$$cl1.initTypeProto(cdataSectionNode$715,'ceylon.js.dom::cdataSectionNode',$init$NodeType());
    }
    return cdataSectionNode$715;
}
exports.$init$cdataSectionNode$715=$init$cdataSectionNode$715;
$init$cdataSectionNode$715();
var cdataSectionNode$716;
function getCdataSectionNode(){
    if (cdataSectionNode$716===undefined)cdataSectionNode$716=$init$cdataSectionNode$715()();
    return cdataSectionNode$716;
}
exports.getCdataSectionNode=getCdataSectionNode;
getCdataSectionNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:cdataSectionNode$715},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','cdataSectionNode']};};
$prop$getCdataSectionNode={get:getCdataSectionNode,$$metamodel$$:getCdataSectionNode.$$metamodel$$};
exports.$prop$getCdataSectionNode=$prop$getCdataSectionNode;
function commentNode$717(){
    var $$commentNode=new commentNode$717.$$;
    NodeType($$$cl1.String("commentNode",11),$$commentNode);
    return $$commentNode;
}
function $init$commentNode$717(){
    if (commentNode$717.$$===undefined){
        $$$cl1.initTypeProto(commentNode$717,'ceylon.js.dom::commentNode',$init$NodeType());
    }
    return commentNode$717;
}
exports.$init$commentNode$717=$init$commentNode$717;
$init$commentNode$717();
var commentNode$718;
function getCommentNode(){
    if (commentNode$718===undefined)commentNode$718=$init$commentNode$717()();
    return commentNode$718;
}
exports.getCommentNode=getCommentNode;
getCommentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:commentNode$717},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','commentNode']};};
$prop$getCommentNode={get:getCommentNode,$$metamodel$$:getCommentNode.$$metamodel$$};
exports.$prop$getCommentNode=$prop$getCommentNode;
function documentFragmentNode$719(){
    var $$documentFragmentNode=new documentFragmentNode$719.$$;
    NodeType($$$cl1.String("documentFragmentNode",20),$$documentFragmentNode);
    return $$documentFragmentNode;
}
function $init$documentFragmentNode$719(){
    if (documentFragmentNode$719.$$===undefined){
        $$$cl1.initTypeProto(documentFragmentNode$719,'ceylon.js.dom::documentFragmentNode',$init$NodeType());
    }
    return documentFragmentNode$719;
}
exports.$init$documentFragmentNode$719=$init$documentFragmentNode$719;
$init$documentFragmentNode$719();
var documentFragmentNode$720;
function getDocumentFragmentNode(){
    if (documentFragmentNode$720===undefined)documentFragmentNode$720=$init$documentFragmentNode$719()();
    return documentFragmentNode$720;
}
exports.getDocumentFragmentNode=getDocumentFragmentNode;
getDocumentFragmentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentFragmentNode$719},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentFragmentNode']};};
$prop$getDocumentFragmentNode={get:getDocumentFragmentNode,$$metamodel$$:getDocumentFragmentNode.$$metamodel$$};
exports.$prop$getDocumentFragmentNode=$prop$getDocumentFragmentNode;
function documentNode$721(){
    var $$documentNode=new documentNode$721.$$;
    NodeType($$$cl1.String("documentNode",12),$$documentNode);
    return $$documentNode;
}
function $init$documentNode$721(){
    if (documentNode$721.$$===undefined){
        $$$cl1.initTypeProto(documentNode$721,'ceylon.js.dom::documentNode',$init$NodeType());
    }
    return documentNode$721;
}
exports.$init$documentNode$721=$init$documentNode$721;
$init$documentNode$721();
var documentNode$722;
function getDocumentNode(){
    if (documentNode$722===undefined)documentNode$722=$init$documentNode$721()();
    return documentNode$722;
}
exports.getDocumentNode=getDocumentNode;
getDocumentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentNode$721},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentNode']};};
$prop$getDocumentNode={get:getDocumentNode,$$metamodel$$:getDocumentNode.$$metamodel$$};
exports.$prop$getDocumentNode=$prop$getDocumentNode;
function documentTypeNode$723(){
    var $$documentTypeNode=new documentTypeNode$723.$$;
    NodeType($$$cl1.String("documentTypeNode",16),$$documentTypeNode);
    return $$documentTypeNode;
}
function $init$documentTypeNode$723(){
    if (documentTypeNode$723.$$===undefined){
        $$$cl1.initTypeProto(documentTypeNode$723,'ceylon.js.dom::documentTypeNode',$init$NodeType());
    }
    return documentTypeNode$723;
}
exports.$init$documentTypeNode$723=$init$documentTypeNode$723;
$init$documentTypeNode$723();
var documentTypeNode$724;
function getDocumentTypeNode(){
    if (documentTypeNode$724===undefined)documentTypeNode$724=$init$documentTypeNode$723()();
    return documentTypeNode$724;
}
exports.getDocumentTypeNode=getDocumentTypeNode;
getDocumentTypeNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentTypeNode$723},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentTypeNode']};};
$prop$getDocumentTypeNode={get:getDocumentTypeNode,$$metamodel$$:getDocumentTypeNode.$$metamodel$$};
exports.$prop$getDocumentTypeNode=$prop$getDocumentTypeNode;
function elementNode$725(){
    var $$elementNode=new elementNode$725.$$;
    NodeType($$$cl1.String("elementNode",11),$$elementNode);
    return $$elementNode;
}
function $init$elementNode$725(){
    if (elementNode$725.$$===undefined){
        $$$cl1.initTypeProto(elementNode$725,'ceylon.js.dom::elementNode',$init$NodeType());
    }
    return elementNode$725;
}
exports.$init$elementNode$725=$init$elementNode$725;
$init$elementNode$725();
var elementNode$726;
function getElementNode(){
    if (elementNode$726===undefined)elementNode$726=$init$elementNode$725()();
    return elementNode$726;
}
exports.getElementNode=getElementNode;
getElementNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:elementNode$725},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','elementNode']};};
$prop$getElementNode={get:getElementNode,$$metamodel$$:getElementNode.$$metamodel$$};
exports.$prop$getElementNode=$prop$getElementNode;
function entityNode$727(){
    var $$entityNode=new entityNode$727.$$;
    NodeType($$$cl1.String("entityNode",10),$$entityNode);
    return $$entityNode;
}
function $init$entityNode$727(){
    if (entityNode$727.$$===undefined){
        $$$cl1.initTypeProto(entityNode$727,'ceylon.js.dom::entityNode',$init$NodeType());
    }
    return entityNode$727;
}
exports.$init$entityNode$727=$init$entityNode$727;
$init$entityNode$727();
var entityNode$728;
function getEntityNode(){
    if (entityNode$728===undefined)entityNode$728=$init$entityNode$727()();
    return entityNode$728;
}
exports.getEntityNode=getEntityNode;
getEntityNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:entityNode$727},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','entityNode']};};
$prop$getEntityNode={get:getEntityNode,$$metamodel$$:getEntityNode.$$metamodel$$};
exports.$prop$getEntityNode=$prop$getEntityNode;
function entityReferenceNode$729(){
    var $$entityReferenceNode=new entityReferenceNode$729.$$;
    NodeType($$$cl1.String("entityReferenceNode",19),$$entityReferenceNode);
    return $$entityReferenceNode;
}
function $init$entityReferenceNode$729(){
    if (entityReferenceNode$729.$$===undefined){
        $$$cl1.initTypeProto(entityReferenceNode$729,'ceylon.js.dom::entityReferenceNode',$init$NodeType());
    }
    return entityReferenceNode$729;
}
exports.$init$entityReferenceNode$729=$init$entityReferenceNode$729;
$init$entityReferenceNode$729();
var entityReferenceNode$730;
function getEntityReferenceNode(){
    if (entityReferenceNode$730===undefined)entityReferenceNode$730=$init$entityReferenceNode$729()();
    return entityReferenceNode$730;
}
exports.getEntityReferenceNode=getEntityReferenceNode;
getEntityReferenceNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:entityReferenceNode$729},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','entityReferenceNode']};};
$prop$getEntityReferenceNode={get:getEntityReferenceNode,$$metamodel$$:getEntityReferenceNode.$$metamodel$$};
exports.$prop$getEntityReferenceNode=$prop$getEntityReferenceNode;
function notationNode$731(){
    var $$notationNode=new notationNode$731.$$;
    NodeType($$$cl1.String("notationNode",12),$$notationNode);
    return $$notationNode;
}
function $init$notationNode$731(){
    if (notationNode$731.$$===undefined){
        $$$cl1.initTypeProto(notationNode$731,'ceylon.js.dom::notationNode',$init$NodeType());
    }
    return notationNode$731;
}
exports.$init$notationNode$731=$init$notationNode$731;
$init$notationNode$731();
var notationNode$732;
function getNotationNode(){
    if (notationNode$732===undefined)notationNode$732=$init$notationNode$731()();
    return notationNode$732;
}
exports.getNotationNode=getNotationNode;
getNotationNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:notationNode$731},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','notationNode']};};
$prop$getNotationNode={get:getNotationNode,$$metamodel$$:getNotationNode.$$metamodel$$};
exports.$prop$getNotationNode=$prop$getNotationNode;
function processingInstructionNode$733(){
    var $$processingInstructionNode=new processingInstructionNode$733.$$;
    NodeType($$$cl1.String("processingInstructionNode",25),$$processingInstructionNode);
    return $$processingInstructionNode;
}
function $init$processingInstructionNode$733(){
    if (processingInstructionNode$733.$$===undefined){
        $$$cl1.initTypeProto(processingInstructionNode$733,'ceylon.js.dom::processingInstructionNode',$init$NodeType());
    }
    return processingInstructionNode$733;
}
exports.$init$processingInstructionNode$733=$init$processingInstructionNode$733;
$init$processingInstructionNode$733();
var processingInstructionNode$734;
function getProcessingInstructionNode(){
    if (processingInstructionNode$734===undefined)processingInstructionNode$734=$init$processingInstructionNode$733()();
    return processingInstructionNode$734;
}
exports.getProcessingInstructionNode=getProcessingInstructionNode;
getProcessingInstructionNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:processingInstructionNode$733},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','processingInstructionNode']};};
$prop$getProcessingInstructionNode={get:getProcessingInstructionNode,$$metamodel$$:getProcessingInstructionNode.$$metamodel$$};
exports.$prop$getProcessingInstructionNode=$prop$getProcessingInstructionNode;
function textNode$735(){
    var $$textNode=new textNode$735.$$;
    NodeType($$$cl1.String("textNode",8),$$textNode);
    return $$textNode;
}
function $init$textNode$735(){
    if (textNode$735.$$===undefined){
        $$$cl1.initTypeProto(textNode$735,'ceylon.js.dom::textNode',$init$NodeType());
    }
    return textNode$735;
}
exports.$init$textNode$735=$init$textNode$735;
$init$textNode$735();
var textNode$736;
function getTextNode(){
    if (textNode$736===undefined)textNode$736=$init$textNode$735()();
    return textNode$736;
}
exports.getTextNode=getTextNode;
getTextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:textNode$735},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','textNode']};};
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
function DocumentFragment(n$737, $$documentFragment){
    $init$DocumentFragment();
    if ($$documentFragment===undefined)$$documentFragment=new DocumentFragment.$$;
    $$documentFragment.n$737_=n$737;
    DocumentFragmentAbs($$documentFragment);
    $$$cl1.defineAttr($$documentFragment,'n$737',function(){return this.n$737_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DocumentFragment,d:['ceylon.js.dom','DocumentFragment','$at','n']};});
    $$documentFragment.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DocumentFragment,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','DocumentFragment','$at','native']};}};
    /*Begin dynamic block*/
    $$documentFragment.$native=n$737;/*End dynamic block*/
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
function EntityReference(n$738, $$entityReference){
    $init$EntityReference();
    if ($$entityReference===undefined)$$entityReference=new EntityReference.$$;
    $$entityReference.n$738_=n$738;
    EntityReferenceAbs($$entityReference);
    $$$cl1.defineAttr($$entityReference,'n$738',function(){return this.n$738_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:EntityReference,d:['ceylon.js.dom','EntityReference','$at','n']};});
    /*Begin dynamic block*/
    $$entityReference.$native=n$738;/*End dynamic block*/
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
    $$$cjl359.JSObjectAbs($$nodeAbs);
    function appendChild(node$739){
        /*Begin dynamic block*/
        return Node(node$739.$native.appendChild(/*NULL PARAM!*/node$739));
        /*End dynamic block*/
    }
    $$nodeAbs.appendChild=appendChild;
    appendChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','appendChild']};};
    function baseURI(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$nodeAbs.$native.baseURL);
        /*End dynamic block*/
    }
    $$nodeAbs.baseURI=baseURI;
    baseURI.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','baseURI']};};
    function childNodes(){
        /*Begin dynamic block*/
        return NodeList($$nodeAbs.$native.childNodes);
        /*End dynamic block*/
    }
    $$nodeAbs.childNodes=childNodes;
    childNodes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeList},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','childNodes']};};
    $$nodeAbs.cloneNode$defs$bool=function(bool$740){return true;};
    function cloneNode(bool$740){
        if(bool$740===undefined){bool$740=$$nodeAbs.cloneNode$defs$bool(bool$740);}
        /*Begin dynamic block*/
        return Node((typeof node==='undefined'||node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: node")),'60:15-60:18','node.ceylon'):node).native.cloneNode(/*NULL PARAM!*/bool$740));
        /*End dynamic block*/
    }
    $$nodeAbs.cloneNode=cloneNode;
    cloneNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'bool',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','cloneNode']};};
    function compareDocumentPosition(node$741){
        /*Begin dynamic block*/
        var pos$742=node$741.$native.compareDocumentPosition(/*NULL PARAM!*/node$741);
        $prop$getPos$742={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','compareDocumentPosition','$at','pos']};}};
        $prop$getPos$742.get=function(){return pos$742};
        if((tmpvar$743=pos$742,tmpvar$744=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'66:23-66:26','node.ceylon'):Node).DOCUMENT_POSITION_CONTAINED_BY,(tmpvar$743.equals&&tmpvar$743.equals(tmpvar$744))||tmpvar$743===tmpvar$744)){
            return getDocumentPositionContainedBy();
        }else {
            if((tmpvar$745=pos$742,tmpvar$746=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'68:30-68:33','node.ceylon'):Node).DOCUMENT_POSITION_CONTAINS,(tmpvar$745.equals&&tmpvar$745.equals(tmpvar$746))||tmpvar$745===tmpvar$746)){
                return getDocumentPositionContains();
            }else {
                if((tmpvar$747=pos$742,tmpvar$748=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'70:27-70:30','node.ceylon'):Node).DOCUMENT_POSITION_DISCONNECTED,(tmpvar$747.equals&&tmpvar$747.equals(tmpvar$748))||tmpvar$747===tmpvar$748)){
                    return getDocumentPositionDisconnected();
                }else {
                    if((tmpvar$749=pos$742,tmpvar$750=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'72:27-72:30','node.ceylon'):Node).DOCUMENT_POSITION_FOLLOWING,(tmpvar$749.equals&&tmpvar$749.equals(tmpvar$750))||tmpvar$749===tmpvar$750)){
                        return getDocumentPositionFollowing();
                    }else {
                        if((tmpvar$751=pos$742,tmpvar$752=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'74:27-74:30','node.ceylon'):Node).DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC,(tmpvar$751.equals&&tmpvar$751.equals(tmpvar$752))||tmpvar$751===tmpvar$752)){
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
    function insertBefore(newElement$753,referenceElement$754){
        /*Begin dynamic block*/
        var ref$755;
        if((ref$755=referenceElement$754)!==null){
            return Node($$nodeAbs.$native.insertBefore(/*NULL PARAM!*/newElement$753.$native/*NULL PARAM!*/,ref$755.$native));
        }else {
            return Node($$nodeAbs.$native.insertBefore(/*NULL PARAM!*/newElement$753.$native));
        }/*End dynamic block*/
    }
    $$nodeAbs.insertBefore=insertBefore;
    insertBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'newElement',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'referenceElement',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','insertBefore']};};
    function isDefaultNamespace(namespaceURI$756){
        var isDefault$757;
        
        var case$758=namespaceURI$756;
        if ($$$cl1.isOfType(namespaceURI$756,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            isDefault$757=$$nodeAbs.$native.isDefaultNamespace(/*NULL PARAM!*/case$758.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(namespaceURI$756,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            isDefault$757=$$nodeAbs.$native.isDefaultNamespace(/*NULL PARAM!*/case$758.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(isDefault$757){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$nodeAbs.isDefaultNamespace=isDefaultNamespace;
    isDefaultNamespace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','isDefaultNamespace']};};
    function isEqualNode(node$759){
        /*Begin dynamic block*/
        if($$nodeAbs.$native.isEqualNode(/*NULL PARAM!*/node$759)){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$nodeAbs.isEqualNode=isEqualNode;
    isEqualNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','isEqualNode']};};
    function lastChild(){
        /*Begin dynamic block*/
        var lastChild$760=$$nodeAbs.$native.lastChild;
        $prop$getLastChild$760={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','lastChild','$at','lastChild']};}};
        $prop$getLastChild$760.get=function(){return lastChild$760};
        if((tmpvar$761=lastChild$760,tmpvar$762=null,(tmpvar$761.equals&&!tmpvar$761.equals(tmpvar$762))||tmpvar$761!==tmpvar$762)){
            return Node(lastChild$760);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.lastChild=lastChild;
    lastChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','lastChild']};};
    function lookupPrefix(namespaceURI$763){
        var prefix$764;
        /*Begin dynamic block*/
        
        var case$765=namespaceURI$763;
        if ($$$cl1.isOfType(namespaceURI$763,{t:$$$cl1.String})) {
            prefix$764=$$nodeAbs.$native.lookupPrefix(/*NULL PARAM!*/case$765.valueOf());
        }else if ($$$cl1.isOfType(namespaceURI$763,{t:$$$cjl359.JSString})) {
            prefix$764=$$nodeAbs.$native.lookupPrefix(/*NULL PARAM!*/case$765.$native);
        }else if ($$$cl1.isOfType(namespaceURI$763,{t:$$$cl1.Null})) {
            prefix$764=$$nodeAbs.$native.lookupPrefix();
        }if((tmpvar$766=prefix$764,tmpvar$767=null,(tmpvar$766.equals&&!tmpvar$766.equals(tmpvar$767))||tmpvar$766!==tmpvar$767)){
            return $$$cjl359.JSString(prefix$764);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.lookupPrefix=lookupPrefix;
    lookupPrefix.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','lookupPrefix']};};
    function nextSibling(){
        /*Begin dynamic block*/
        var nextSibling$768=$$nodeAbs.$native.nextSibling();
        $prop$getNextSibling$768={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','nextSibling','$at','nextSibling']};}};
        $prop$getNextSibling$768.get=function(){return nextSibling$768};
        if((tmpvar$769=nextSibling$768,tmpvar$770=null,(tmpvar$769.equals&&!tmpvar$769.equals(tmpvar$770))||tmpvar$769!==tmpvar$770)){
            return Node(nextSibling$768);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.nextSibling=nextSibling;
    nextSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','nextSibling']};};
    function nodeName(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$nodeAbs.$native.nodeName);
        /*End dynamic block*/
    }
    $$nodeAbs.nodeName=nodeName;
    nodeName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','nodeName']};};
    function nodeType(){
        /*Begin dynamic block*/
        if((tmpvar$771=$$nodeAbs.$native.nodeType,tmpvar$772=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'193:26-193:29','node.ceylon'):Node).ELEMENT_NODE,(tmpvar$771.equals&&tmpvar$771.equals(tmpvar$772))||tmpvar$771===tmpvar$772)){
            return getElementNode();
        }else {
            if((tmpvar$773=$$nodeAbs.$native.nodeType,tmpvar$774=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'195:33-195:36','node.ceylon'):Node).ATTRIBUTE_NODE,(tmpvar$773.equals&&tmpvar$773.equals(tmpvar$774))||tmpvar$773===tmpvar$774)){
                return getAttributeNode();
            }else {
                if((tmpvar$775=$$nodeAbs.$native.nodeType,tmpvar$776=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'197:33-197:36','node.ceylon'):Node).TEXT_NODE,(tmpvar$775.equals&&tmpvar$775.equals(tmpvar$776))||tmpvar$775===tmpvar$776)){
                    return getTextNode();
                }else {
                    if((tmpvar$777=$$nodeAbs.$native.nodeType,tmpvar$778=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'199:33-199:36','node.ceylon'):Node).CDATA_SECTION_NODE,(tmpvar$777.equals&&tmpvar$777.equals(tmpvar$778))||tmpvar$777===tmpvar$778)){
                        return getCdataSectionNode();
                    }else {
                        if((tmpvar$779=$$nodeAbs.$native.nodeType,tmpvar$780=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'201:33-201:36','node.ceylon'):Node).ENTITY_REFERENCE_NODE,(tmpvar$779.equals&&tmpvar$779.equals(tmpvar$780))||tmpvar$779===tmpvar$780)){
                            return getEntityReferenceNode();
                        }else {
                            if((tmpvar$781=$$nodeAbs.$native.nodeType,tmpvar$782=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'203:33-203:36','node.ceylon'):Node).ENTITY_NODE,(tmpvar$781.equals&&tmpvar$781.equals(tmpvar$782))||tmpvar$781===tmpvar$782)){
                                return getEntityNode();
                            }else {
                                if((tmpvar$783=$$nodeAbs.$native.nodeType,tmpvar$784=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'205:33-205:36','node.ceylon'):Node).PROCESSING_INSTRUCTION_NODE,(tmpvar$783.equals&&tmpvar$783.equals(tmpvar$784))||tmpvar$783===tmpvar$784)){
                                    return getProcessingInstructionNode();
                                }else {
                                    if((tmpvar$785=$$nodeAbs.$native.nodeType,tmpvar$786=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'207:33-207:36','node.ceylon'):Node).COMMENT_NODE,(tmpvar$785.equals&&tmpvar$785.equals(tmpvar$786))||tmpvar$785===tmpvar$786)){
                                        return getCommentNode();
                                    }else {
                                        if((tmpvar$787=$$nodeAbs.$native.nodeType,tmpvar$788=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'209:33-209:36','node.ceylon'):Node).DOCUMENT_NODE,(tmpvar$787.equals&&tmpvar$787.equals(tmpvar$788))||tmpvar$787===tmpvar$788)){
                                            return getDocumentNode();
                                        }else {
                                            if((tmpvar$789=$$nodeAbs.$native.nodeType,tmpvar$790=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'211:33-211:36','node.ceylon'):Node).DOCUMENT_TYPE_NODE,(tmpvar$789.equals&&tmpvar$789.equals(tmpvar$790))||tmpvar$789===tmpvar$790)){
                                                return getDocumentTypeNode();
                                            }else {
                                                if((tmpvar$791=$$nodeAbs.$native.nodeType,tmpvar$792=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'213:33-213:36','node.ceylon'):Node).DOCUMENT_FRAGMENT_NODE,(tmpvar$791.equals&&tmpvar$791.equals(tmpvar$792))||tmpvar$791===tmpvar$792)){
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
        var val$793=$$nodeAbs.$native.nodeValue;
        $prop$getVal$793={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','getNodeValue','$at','val']};}};
        $prop$getVal$793.get=function(){return val$793};
        if((tmpvar$794=val$793,tmpvar$795=null,(tmpvar$794.equals&&!tmpvar$794.equals(tmpvar$795))||tmpvar$794!==tmpvar$795)){
            return $$$cjl359.JSString(val$793);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.getNodeValue=getNodeValue;
    getNodeValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','getNodeValue']};};
    function setNodeValue(val$796){
        
        var case$797=val$796;
        if ($$$cl1.isOfType(val$796,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$nodeAbs.$native.nodeValue=case$797.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(val$796,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$nodeAbs.$native.nodeValue=case$797.$native;
            /*End dynamic block*/
        }
    }
    $$nodeAbs.setNodeValue=setNodeValue;
    setNodeValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','setNodeValue']};};
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
        var parent$798=$$nodeAbs.parentNode();
        $prop$getParent$798={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','parentNode','$at','parent']};}};
        $prop$getParent$798.get=function(){return parent$798};
        if((tmpvar$799=parent$798,tmpvar$800=null,(tmpvar$799.equals&&!tmpvar$799.equals(tmpvar$800))||tmpvar$799!==tmpvar$800)){
            return Node(parent$798);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.parentNode=parentNode;
    parentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','parentNode']};};
    function prefix(){
        /*Begin dynamic block*/
        var prefix$801=$$nodeAbs.$native.prefix;
        $prop$getPrefix$801={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','prefix','$at','prefix']};}};
        $prop$getPrefix$801.get=function(){return prefix$801};
        if((tmpvar$802=prefix$801,tmpvar$803=null,(tmpvar$802.equals&&!tmpvar$802.equals(tmpvar$803))||tmpvar$802!==tmpvar$803)){
            return $$$cjl359.JSString(prefix$801);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.prefix=prefix;
    prefix.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','prefix']};};
    function previousSibling(){
        /*Begin dynamic block*/
        var previousSibling$804=$$nodeAbs.$native.previousSibling();
        $prop$getPreviousSibling$804={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','previousSibling','$at','previousSibling']};}};
        $prop$getPreviousSibling$804.get=function(){return previousSibling$804};
        if((tmpvar$805=previousSibling$804,tmpvar$806=null,(tmpvar$805.equals&&!tmpvar$805.equals(tmpvar$806))||tmpvar$805!==tmpvar$806)){
            return Node(previousSibling$804);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.previousSibling=previousSibling;
    previousSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','previousSibling']};};
    function removeChild(node$807){
        /*Begin dynamic block*/
        return Node($$nodeAbs.$native.removeChild(/*NULL PARAM!*/node$807.$native));
        /*End dynamic block*/
    }
    $$nodeAbs.removeChild=removeChild;
    removeChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','removeChild']};};
    function replaceChild(newChild$808,oldChild$809){
        /*Begin dynamic block*/
        return Node($$nodeAbs.$native.replaceChild(/*NULL PARAM!*/newChild$808.$native/*NULL PARAM!*/,oldChild$809.$native));
        /*End dynamic block*/
    }
    $$nodeAbs.replaceChild=replaceChild;
    replaceChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'newChild',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'oldChild',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','replaceChild']};};
    function getTextContent(){
        /*Begin dynamic block*/
        var content$810=$$nodeAbs.$native.textContent();
        $prop$getContent$810={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','getTextContent','$at','content']};}};
        $prop$getContent$810.get=function(){return content$810};
        if((tmpvar$811=content$810,tmpvar$812=null,(tmpvar$811.equals&&!tmpvar$811.equals(tmpvar$812))||tmpvar$811!==tmpvar$812)){
            return $$$cjl359.JSString(content$810);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.getTextContent=getTextContent;
    getTextContent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl359.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','getTextContent']};};
    function setTextContent(content$813){
        
        var case$814=content$813;
        if ($$$cl1.isOfType(content$813,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$nodeAbs.$native.textContent=case$814.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(content$813,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$nodeAbs.$native.textContent=case$814.$native;
            /*End dynamic block*/
        }
    }
    $$nodeAbs.setTextContent=setTextContent;
    setTextContent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'content',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','setTextContent']};};
    return $$nodeAbs;
}
NodeAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','NodeAbs']};};
exports.NodeAbs=NodeAbs;
function $init$NodeAbs(){
    if (NodeAbs.$$===undefined){
        $$$cl1.initTypeProto(NodeAbs,'ceylon.js.dom::NodeAbs',$$$cjl359.JSObjectAbs);
    }
    return NodeAbs;
}
exports.$init$NodeAbs=$init$NodeAbs;
$init$NodeAbs();
function Node(n$815, $$node){
    $init$Node();
    if ($$node===undefined)$$node=new Node.$$;
    $$node.n$815_=n$815;
    NodeAbs($$node);
    $$$cl1.defineAttr($$node,'n$815',function(){return this.n$815_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Node,d:['ceylon.js.dom','Node','$at','n']};});
    /*Begin dynamic block*/
    $$node.$native=n$815;/*End dynamic block*/
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
function NodeFilterResult(name$816, $$nodeFilterResult){
    $init$NodeFilterResult();
    if ($$nodeFilterResult===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$nodeFilterResult.name$816_=name$816;
    $$$cl1.defineAttr($$nodeFilterResult,'name$816',function(){return this.name$816_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:NodeFilterResult,d:['ceylon.js.dom','NodeFilterResult','$at','name']};});
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
function filterAccept$817(){
    var $$filterAccept=new filterAccept$817.$$;
    NodeFilterResult($$$cl1.String("filterAccept",12),$$filterAccept);
    return $$filterAccept;
}
function $init$filterAccept$817(){
    if (filterAccept$817.$$===undefined){
        $$$cl1.initTypeProto(filterAccept$817,'ceylon.js.dom::filterAccept',$init$NodeFilterResult());
    }
    return filterAccept$817;
}
exports.$init$filterAccept$817=$init$filterAccept$817;
$init$filterAccept$817();
var filterAccept$818;
function getFilterAccept(){
    if (filterAccept$818===undefined)filterAccept$818=$init$filterAccept$817()();
    return filterAccept$818;
}
exports.getFilterAccept=getFilterAccept;
getFilterAccept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:filterAccept$817},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','filterAccept']};};
$prop$getFilterAccept={get:getFilterAccept,$$metamodel$$:getFilterAccept.$$metamodel$$};
exports.$prop$getFilterAccept=$prop$getFilterAccept;
function filterReject$819(){
    var $$filterReject=new filterReject$819.$$;
    NodeFilterResult($$$cl1.String("filterReject",12),$$filterReject);
    return $$filterReject;
}
function $init$filterReject$819(){
    if (filterReject$819.$$===undefined){
        $$$cl1.initTypeProto(filterReject$819,'ceylon.js.dom::filterReject',$init$NodeFilterResult());
    }
    return filterReject$819;
}
exports.$init$filterReject$819=$init$filterReject$819;
$init$filterReject$819();
var filterReject$820;
function getFilterReject(){
    if (filterReject$820===undefined)filterReject$820=$init$filterReject$819()();
    return filterReject$820;
}
exports.getFilterReject=getFilterReject;
getFilterReject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:filterReject$819},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','filterReject']};};
$prop$getFilterReject={get:getFilterReject,$$metamodel$$:getFilterReject.$$metamodel$$};
exports.$prop$getFilterReject=$prop$getFilterReject;
function filterSkip$821(){
    var $$filterSkip=new filterSkip$821.$$;
    NodeFilterResult($$$cl1.String("filterSkip",10),$$filterSkip);
    return $$filterSkip;
}
function $init$filterSkip$821(){
    if (filterSkip$821.$$===undefined){
        $$$cl1.initTypeProto(filterSkip$821,'ceylon.js.dom::filterSkip',$init$NodeFilterResult());
    }
    return filterSkip$821;
}
exports.$init$filterSkip$821=$init$filterSkip$821;
$init$filterSkip$821();
var filterSkip$822;
function getFilterSkip(){
    if (filterSkip$822===undefined)filterSkip$822=$init$filterSkip$821()();
    return filterSkip$822;
}
exports.getFilterSkip=getFilterSkip;
getFilterSkip.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:filterSkip$821},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','filterSkip']};};
$prop$getFilterSkip={get:getFilterSkip,$$metamodel$$:getFilterSkip.$$metamodel$$};
exports.$prop$getFilterSkip=$prop$getFilterSkip;
function NodeFilter(acceptNode$823, $$nodeFilter){
    $init$NodeFilter();
    if ($$nodeFilter===undefined)$$nodeFilter=new NodeFilter.$$;
    $$nodeFilter.acceptNode$823_=acceptNode$823;
    $$$cl1.defineAttr($$nodeFilter,'acceptNode$823',function(){return this.acceptNode$823_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:NodeFilterResult},$ps:[{$nm:'n',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeFilter,d:['ceylon.js.dom','NodeFilter','$m','acceptNode']};});
    $$nodeFilter.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeFilter,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeFilter','$at','native']};}};
    /*Begin dynamic block*/
    $$nodeFilter.$native=(typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'11:11-11:16','nodefilter.ceylon'):Object)();$$nodeFilter.$native.acceptNode=$$$cl1.$JsCallable(acceptNode$823/*TODO: callable targs 6*/);
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
    $$$cjl359.JSObjectAbs($$nodeIteratorAbs);
    function root(){
        /*Begin dynamic block*/
        return Node($$nodeIteratorAbs.$native.root);
        /*End dynamic block*/
    }
    $$nodeIteratorAbs.root=root;
    root.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','root']};};
    function whatToShow(){
        /*Begin dynamic block*/
        return (tmpvar$824=$$nodeIteratorAbs.$native.whatToShow,$$$cl1.isOfType(tmpvar$824,{t:$$$cl1.Anything})?tmpvar$824:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'13:19-13:35','nodeiterator.ceylon'));
        /*End dynamic block*/
    }
    $$nodeIteratorAbs.whatToShow=whatToShow;
    whatToShow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','whatToShow']};};
    function filter(){
        /*Begin dynamic block*/
        var filter$825=$$nodeIteratorAbs.$native.filter;
        $prop$getFilter$825={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeIteratorAbs','$m','filter','$at','filter']};}};
        $prop$getFilter$825.get=function(){return filter$825};
        if((tmpvar$826=filter$825,tmpvar$827=null,(tmpvar$826.equals&&!tmpvar$826.equals(tmpvar$827))||tmpvar$826!==tmpvar$827)){
            return NodeFilter((tmpvar$828=filter$825,$$$cl1.isOfType(tmpvar$828,{t:NodeFilterResult})?tmpvar$828:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'21:34-21:39','nodeiterator.ceylon')));
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeIteratorAbs.filter=filter;
    filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:NodeFilter}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','filter']};};
    function nextNode(){
        /*Begin dynamic block*/
        var next$829=$$nodeIteratorAbs.$native.nextNode();
        $prop$getNext$829={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeIteratorAbs','$m','nextNode','$at','next']};}};
        $prop$getNext$829.get=function(){return next$829};
        if((tmpvar$830=next$829,tmpvar$831=null,(tmpvar$830.equals&&!tmpvar$830.equals(tmpvar$831))||tmpvar$830!==tmpvar$831)){
            return Node(next$829);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeIteratorAbs.nextNode=nextNode;
    nextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','nextNode']};};
    function previousNode(){
        /*Begin dynamic block*/
        var previous$832=$$nodeIteratorAbs.$native.previousNode();
        $prop$getPrevious$832={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeIteratorAbs','$m','previousNode','$at','previous']};}};
        $prop$getPrevious$832.get=function(){return previous$832};
        if((tmpvar$833=previous$832,tmpvar$834=null,(tmpvar$833.equals&&!tmpvar$833.equals(tmpvar$834))||tmpvar$833!==tmpvar$834)){
            return Node(previous$832);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeIteratorAbs.previousNode=previousNode;
    previousNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','previousNode']};};
    return $$nodeIteratorAbs;
}
NodeIteratorAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','NodeIteratorAbs']};};
exports.NodeIteratorAbs=NodeIteratorAbs;
function $init$NodeIteratorAbs(){
    if (NodeIteratorAbs.$$===undefined){
        $$$cl1.initTypeProto(NodeIteratorAbs,'ceylon.js.dom::NodeIteratorAbs',$$$cjl359.JSObjectAbs);
    }
    return NodeIteratorAbs;
}
exports.$init$NodeIteratorAbs=$init$NodeIteratorAbs;
$init$NodeIteratorAbs();
function NodeIterator(n$835, $$nodeIterator){
    $init$NodeIterator();
    if ($$nodeIterator===undefined)$$nodeIterator=new NodeIterator.$$;
    $$nodeIterator.n$835_=n$835;
    NodeIteratorAbs($$nodeIterator);
    $$$cl1.defineAttr($$nodeIterator,'n$835',function(){return this.n$835_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeIterator,d:['ceylon.js.dom','NodeIterator','$at','n']};});
    $$nodeIterator.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeIterator,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','NodeIterator','$at','native']};}};
    /*Begin dynamic block*/
    $$nodeIterator.$native=n$835;/*End dynamic block*/
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
    $$$cjl359.JSObjectAbs($$nodeListAbs);
    function item(index$836){
        var item$837;
        
        var case$838=index$836;
        if ($$$cl1.isOfType(index$836,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            item$837=$$nodeListAbs.$native.item(/*NULL PARAM!*/case$838);/*End dynamic block*/
        }else if ($$$cl1.isOfType(index$836,{t:$$$cjl359.JSNumber})) {
            /*Begin dynamic block*/
            item$837=$$nodeListAbs.$native.item(/*NULL PARAM!*/case$838.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if((tmpvar$839=item$837,tmpvar$840=null,(tmpvar$839.equals&&!tmpvar$839.equals(tmpvar$840))||tmpvar$839!==tmpvar$840)){
            return Node(item$837);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeListAbs.item=item;
    item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}}],$cont:NodeListAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeListAbs','$m','item']};};
    function length(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$nodeListAbs.$native.length);
        /*End dynamic block*/
    }
    $$nodeListAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:NodeListAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeListAbs','$m','length']};};
    return $$nodeListAbs;
}
NodeListAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','NodeListAbs']};};
exports.NodeListAbs=NodeListAbs;
function $init$NodeListAbs(){
    if (NodeListAbs.$$===undefined){
        $$$cl1.initTypeProto(NodeListAbs,'ceylon.js.dom::NodeListAbs',$$$cjl359.JSObjectAbs);
    }
    return NodeListAbs;
}
exports.$init$NodeListAbs=$init$NodeListAbs;
$init$NodeListAbs();
function NodeList(n$841, $$nodeList){
    $init$NodeList();
    if ($$nodeList===undefined)$$nodeList=new NodeList.$$;
    $$nodeList.n$841_=n$841;
    NodeListAbs($$nodeList);
    $$$cl1.defineAttr($$nodeList,'n$841',function(){return this.n$841_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeList,d:['ceylon.js.dom','NodeList','$at','n']};});
    $$nodeList.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','NodeList','$at','native']};}};
    /*Begin dynamic block*/
    $$nodeList.$native=n$841;/*End dynamic block*/
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
        return $$$cjl359.JSString($$processingInstructionAbs.$native.data);
        /*End dynamic block*/
    }
    $$processingInstructionAbs.getData=getData;
    getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:ProcessingInstructionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ProcessingInstructionAbs','$m','getData']};};
    function setData(data$842){
        
        var case$843=data$842;
        if ($$$cl1.isOfType(data$842,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$processingInstructionAbs.$native.data=case$843.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$842,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$processingInstructionAbs.$native.data=case$843.$native;
            /*End dynamic block*/
        }
    }
    $$processingInstructionAbs.setData=setData;
    setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:ProcessingInstructionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ProcessingInstructionAbs','$m','setData']};};
    function target(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$processingInstructionAbs.$native.target);
        /*End dynamic block*/
    }
    $$processingInstructionAbs.target=target;
    target.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:ProcessingInstructionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ProcessingInstructionAbs','$m','target']};};
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
function ProcessingInstruction(n$844, $$processingInstruction){
    $init$ProcessingInstruction();
    if ($$processingInstruction===undefined)$$processingInstruction=new ProcessingInstruction.$$;
    $$processingInstruction.n$844_=n$844;
    ProcessingInstructionAbs($$processingInstruction);
    $$$cl1.defineAttr($$processingInstruction,'n$844',function(){return this.n$844_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:ProcessingInstruction,d:['ceylon.js.dom','ProcessingInstruction','$at','n']};});
    $$processingInstruction.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:ProcessingInstruction,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','ProcessingInstruction','$at','native']};}};
    /*Begin dynamic block*/
    $$processingInstruction.$native=n$844;/*End dynamic block*/
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
function RangeCompareHow(name$845, $$rangeCompareHow){
    $init$RangeCompareHow();
    if ($$rangeCompareHow===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$rangeCompareHow.name$845_=name$845;
    $$$cl1.defineAttr($$rangeCompareHow,'name$845',function(){return this.name$845_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:RangeCompareHow,d:['ceylon.js.dom','RangeCompareHow','$at','name']};});
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
function endToEnd$846(){
    var $$endToEnd=new endToEnd$846.$$;
    RangeCompareHow($$$cl1.String("endToEnd",8),$$endToEnd);
    return $$endToEnd;
}
function $init$endToEnd$846(){
    if (endToEnd$846.$$===undefined){
        $$$cl1.initTypeProto(endToEnd$846,'ceylon.js.dom::endToEnd',$init$RangeCompareHow());
    }
    return endToEnd$846;
}
exports.$init$endToEnd$846=$init$endToEnd$846;
$init$endToEnd$846();
var endToEnd$847;
function getEndToEnd(){
    if (endToEnd$847===undefined)endToEnd$847=$init$endToEnd$846()();
    return endToEnd$847;
}
exports.getEndToEnd=getEndToEnd;
getEndToEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:endToEnd$846},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','endToEnd']};};
$prop$getEndToEnd={get:getEndToEnd,$$metamodel$$:getEndToEnd.$$metamodel$$};
exports.$prop$getEndToEnd=$prop$getEndToEnd;
function endToStart$848(){
    var $$endToStart=new endToStart$848.$$;
    RangeCompareHow($$$cl1.String("endToStart",10),$$endToStart);
    return $$endToStart;
}
function $init$endToStart$848(){
    if (endToStart$848.$$===undefined){
        $$$cl1.initTypeProto(endToStart$848,'ceylon.js.dom::endToStart',$init$RangeCompareHow());
    }
    return endToStart$848;
}
exports.$init$endToStart$848=$init$endToStart$848;
$init$endToStart$848();
var endToStart$849;
function getEndToStart(){
    if (endToStart$849===undefined)endToStart$849=$init$endToStart$848()();
    return endToStart$849;
}
exports.getEndToStart=getEndToStart;
getEndToStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:endToStart$848},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','endToStart']};};
$prop$getEndToStart={get:getEndToStart,$$metamodel$$:getEndToStart.$$metamodel$$};
exports.$prop$getEndToStart=$prop$getEndToStart;
function startToEnd$850(){
    var $$startToEnd=new startToEnd$850.$$;
    RangeCompareHow($$$cl1.String("startToEnd",10),$$startToEnd);
    return $$startToEnd;
}
function $init$startToEnd$850(){
    if (startToEnd$850.$$===undefined){
        $$$cl1.initTypeProto(startToEnd$850,'ceylon.js.dom::startToEnd',$init$RangeCompareHow());
    }
    return startToEnd$850;
}
exports.$init$startToEnd$850=$init$startToEnd$850;
$init$startToEnd$850();
var startToEnd$851;
function getStartToEnd(){
    if (startToEnd$851===undefined)startToEnd$851=$init$startToEnd$850()();
    return startToEnd$851;
}
exports.getStartToEnd=getStartToEnd;
getStartToEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:startToEnd$850},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','startToEnd']};};
$prop$getStartToEnd={get:getStartToEnd,$$metamodel$$:getStartToEnd.$$metamodel$$};
exports.$prop$getStartToEnd=$prop$getStartToEnd;
function startToStart$852(){
    var $$startToStart=new startToStart$852.$$;
    RangeCompareHow($$$cl1.String("startToStart",12),$$startToStart);
    return $$startToStart;
}
function $init$startToStart$852(){
    if (startToStart$852.$$===undefined){
        $$$cl1.initTypeProto(startToStart$852,'ceylon.js.dom::startToStart',$init$RangeCompareHow());
    }
    return startToStart$852;
}
exports.$init$startToStart$852=$init$startToStart$852;
$init$startToStart$852();
var startToStart$853;
function getStartToStart(){
    if (startToStart$853===undefined)startToStart$853=$init$startToStart$852()();
    return startToStart$853;
}
exports.getStartToStart=getStartToStart;
getStartToStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:startToStart$852},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','startToStart']};};
$prop$getStartToStart={get:getStartToStart,$$metamodel$$:getStartToStart.$$metamodel$$};
exports.$prop$getStartToStart=$prop$getStartToStart;
function RangeAbs($$rangeAbs){
    $init$RangeAbs();
    if ($$rangeAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl359.JSObjectAbs($$rangeAbs);
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
        return $$$cjl359.JSNumber($$rangeAbs.$native.startOffset);
        /*End dynamic block*/
    }
    $$rangeAbs.startOffset=startOffset;
    startOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','startOffset']};};
    function endOffset(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$rangeAbs.$native.endOffset);
        /*End dynamic block*/
    }
    $$rangeAbs.endOffset=endOffset;
    endOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','endOffset']};};
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
    function setStart(startNode$854,startOffset$855){
        
        var case$856=startOffset$855;
        if ($$$cl1.isOfType(startOffset$855,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$rangeAbs.$native.setStart(/*NULL PARAM!*/startNode$854/*NULL PARAM!*/,case$856);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(startOffset$855,{t:$$$cjl359.JSNumber})) {
            /*Begin dynamic block*/
            $$rangeAbs.$native.setStart(/*NULL PARAM!*/startNode$854/*NULL PARAM!*/,case$856.$native);
            /*End dynamic block*/
        }
    }
    $$rangeAbs.setStart=setStart;
    setStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'startNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'startOffset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setStart']};};
    function setEnd(endNode$857,endOffset$858){
        
        var case$859=endOffset$858;
        if ($$$cl1.isOfType(endOffset$858,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$rangeAbs.$native.setEnd(/*NULL PARAM!*/endNode$857/*NULL PARAM!*/,case$859);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(endOffset$858,{t:$$$cjl359.JSNumber})) {
            /*Begin dynamic block*/
            $$rangeAbs.$native.setEnd(/*NULL PARAM!*/endNode$857/*NULL PARAM!*/,case$859.$native);
            /*End dynamic block*/
        }
    }
    $$rangeAbs.setEnd=setEnd;
    setEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'endNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'endOffset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setEnd']};};
    function setStartBefore(refNode$860){
        /*Begin dynamic block*/
        $$rangeAbs.$native.setStartBefore(/*NULL PARAM!*/refNode$860);
        /*End dynamic block*/
    }
    $$rangeAbs.setStartBefore=setStartBefore;
    setStartBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setStartBefore']};};
    function setStartAfter(refNode$861){
        /*Begin dynamic block*/
        $$rangeAbs.$native.setStartAfter(/*NULL PARAM!*/refNode$861);
        /*End dynamic block*/
    }
    $$rangeAbs.setStartAfter=setStartAfter;
    setStartAfter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setStartAfter']};};
    function setEndBefore(refNode$862){
        /*Begin dynamic block*/
        $$rangeAbs.$native.setEndBefore(/*NULL PARAM!*/refNode$862);
        /*End dynamic block*/
    }
    $$rangeAbs.setEndBefore=setEndBefore;
    setEndBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setEndBefore']};};
    function setEndAfter(refNode$863){
        /*Begin dynamic block*/
        $$rangeAbs.$native.setEndAfter(/*NULL PARAM!*/refNode$863);
        /*End dynamic block*/
    }
    $$rangeAbs.setEndAfter=setEndAfter;
    setEndAfter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setEndAfter']};};
    $$rangeAbs.collapse$defs$toStart=function(toStart$864){return null;};
    function collapse(toStart$864){
        if(toStart$864===undefined){toStart$864=$$rangeAbs.collapse$defs$toStart(toStart$864);}
        /*Begin dynamic block*/
        var s$865;
        if((s$865=toStart$864)!==null){
            $$rangeAbs.$native.collapse(/*NULL PARAM!*/s$865);
        }else {
            $$rangeAbs.$native.collapse();
        }/*End dynamic block*/
    }
    $$rangeAbs.collapse=collapse;
    collapse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'toStart',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','collapse']};};
    function selectNode(refNode$866){
        /*Begin dynamic block*/
        $$rangeAbs.$native.selectNode(/*NULL PARAM!*/refNode$866);
        /*End dynamic block*/
    }
    $$rangeAbs.selectNode=selectNode;
    selectNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','selectNode']};};
    function selectNodeContents(refNode$867){
        /*Begin dynamic block*/
        $$rangeAbs.$native.selectNodeContents(/*NULL PARAM!*/refNode$867);
        /*End dynamic block*/
    }
    $$rangeAbs.selectNodeContents=selectNodeContents;
    selectNodeContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','selectNodeContents']};};
    function compareBoundaryPoints(how$868,sourceRange$869){
        /*Begin dynamic block*/
        
        var case$870=how$868;
        if (case$870===getEndToEnd()) {
            return $$$cjl359.JSNumber($$rangeAbs.$native.compareBoundaryPoints(/*NULL PARAM!*/(typeof Range==='undefined'||Range===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Range")),'130:61-130:65','range.ceylon'):Range).START_TO_START/*NULL PARAM!*/,sourceRange$869));
        }else if (case$870===getEndToStart()) {
            return $$$cjl359.JSNumber($$rangeAbs.$native.compareBoundaryPoints(/*NULL PARAM!*/(typeof Range==='undefined'||Range===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Range")),'133:61-133:65','range.ceylon'):Range).START_TO_END/*NULL PARAM!*/,sourceRange$869));
        }else if (case$870===getStartToEnd()) {
            return $$$cjl359.JSNumber($$rangeAbs.$native.compareBoundaryPoints(/*NULL PARAM!*/(typeof Range==='undefined'||Range===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Range")),'136:61-136:65','range.ceylon'):Range).END_TO_END/*NULL PARAM!*/,sourceRange$869));
        }else if (case$870===getStartToStart()) {
            return $$$cjl359.JSNumber($$rangeAbs.$native.compareBoundaryPoints(/*NULL PARAM!*/(typeof Range==='undefined'||Range===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Range")),'139:61-139:65','range.ceylon'):Range).END_TO_START/*NULL PARAM!*/,sourceRange$869));
        }/*End dynamic block*/
    }
    $$rangeAbs.compareBoundaryPoints=compareBoundaryPoints;
    compareBoundaryPoints.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[{$nm:'how',$mt:'prm',$t:{t:RangeCompareHow},$an:function(){return[];}},{$nm:'sourceRange',$mt:'prm',$t:{t:Range},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','compareBoundaryPoints']};};
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
    function insertNode(newNode$871){
        /*Begin dynamic block*/
        $$rangeAbs.$native.insertNode(/*NULL PARAM!*/newNode$871);
        /*End dynamic block*/
    }
    $$rangeAbs.insertNode=insertNode;
    insertNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'newNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','insertNode']};};
    function surroundContents(newNode$872){
        /*Begin dynamic block*/
        $$rangeAbs.$native.surroundContents(/*NULL PARAM!*/newNode$872);
        /*End dynamic block*/
    }
    $$rangeAbs.surroundContents=surroundContents;
    surroundContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'newNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','surroundContents']};};
    function cloneRange(){
        /*Begin dynamic block*/
        return (tmpvar$873=$$rangeAbs.$native.cloneRange(),$$$cl1.isOfType(tmpvar$873,{t:$$$cl1.Anything})?tmpvar$873:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'176:19-176:37','range.ceylon'));
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
    function isPointInRange(node$874,offset$875){
        var inRange$876;
        
        var case$877=offset$875;
        if ($$$cl1.isOfType(offset$875,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            inRange$876=$$rangeAbs.$native.isPointInRange(/*NULL PARAM!*/node$874/*NULL PARAM!*/,case$877);/*End dynamic block*/
        }else if ($$$cl1.isOfType(offset$875,{t:$$$cjl359.JSNumber})) {
            /*Begin dynamic block*/
            inRange$876=$$rangeAbs.$native.isPointInRange(/*NULL PARAM!*/node$874/*NULL PARAM!*/,case$877.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(inRange$876){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$rangeAbs.isPointInRange=isPointInRange;
    isPointInRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','isPointInRange']};};
    return $$rangeAbs;
}
RangeAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','RangeAbs']};};
exports.RangeAbs=RangeAbs;
function $init$RangeAbs(){
    if (RangeAbs.$$===undefined){
        $$$cl1.initTypeProto(RangeAbs,'ceylon.js.dom::RangeAbs',$$$cjl359.JSObjectAbs);
    }
    return RangeAbs;
}
exports.$init$RangeAbs=$init$RangeAbs;
$init$RangeAbs();
function Range(n$878, $$range){
    $init$Range();
    if ($$range===undefined)$$range=new Range.$$;
    $$range.n$878_=n$878;
    RangeAbs($$range);
    $$$cl1.defineAttr($$range,'n$878',function(){return this.n$878_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Range,d:['ceylon.js.dom','Range','$at','n']};});
    $$range.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Range,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Range','$at','native']};}};
    /*Begin dynamic block*/
    $$range.$native=n$878;/*End dynamic block*/
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
    $$$cjl359.JSObjectAbs($$mediaListAbs);
    function getMediaText(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$mediaListAbs.$native.mediaText);
        /*End dynamic block*/
    }
    $$mediaListAbs.getMediaText=getMediaText;
    getMediaText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','getMediaText']};};
    function setMediaText(text$879){
        
        var case$880=text$879;
        if ($$$cl1.isOfType(text$879,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.mediaText=case$880.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(text$879,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.mediaText=case$880.$native;
            /*End dynamic block*/
        }
    }
    $$mediaListAbs.setMediaText=setMediaText;
    setMediaText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','setMediaText']};};
    function length(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$mediaListAbs.$native.length);
        /*End dynamic block*/
    }
    $$mediaListAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','length']};};
    function item(index$881){
        
        var case$882=index$881;
        if ($$$cl1.isOfType(index$881,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            return $$$cjl359.JSString($$mediaListAbs.$native.item(/*NULL PARAM!*/case$882));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(index$881,{t:$$$cjl359.JSNumber})) {
            /*Begin dynamic block*/
            return $$$cjl359.JSString($$mediaListAbs.$native.item(/*NULL PARAM!*/case$882.$native));
            /*End dynamic block*/
        }
    }
    $$mediaListAbs.item=item;
    item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','item']};};
    function deleteMedium(oldMedium$883){
        
        var case$884=oldMedium$883;
        if ($$$cl1.isOfType(oldMedium$883,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.deleteMedium(/*NULL PARAM!*/case$884.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(oldMedium$883,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.deleteMedium(/*NULL PARAM!*/case$884.$native);
            /*End dynamic block*/
        }
    }
    $$mediaListAbs.deleteMedium=deleteMedium;
    deleteMedium.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'oldMedium',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','deleteMedium']};};
    function appendMedium(newMedium$885){
        
        var case$886=newMedium$885;
        if ($$$cl1.isOfType(newMedium$885,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.appendMedium(/*NULL PARAM!*/case$886.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(newMedium$885,{t:$$$cjl359.JSString})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.appendMedium(/*NULL PARAM!*/case$886.$native);
            /*End dynamic block*/
        }
    }
    $$mediaListAbs.appendMedium=appendMedium;
    appendMedium.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'newMedium',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl359.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','appendMedium']};};
    return $$mediaListAbs;
}
MediaListAbs$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom.stylesheets','MediaListAbs']};};
exports.MediaListAbs$stylesheets=MediaListAbs$stylesheets;
function $init$MediaListAbs$stylesheets(){
    if (MediaListAbs$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(MediaListAbs$stylesheets,'ceylon.js.dom.stylesheets::MediaListAbs',$$$cjl359.JSObjectAbs);
    }
    return MediaListAbs$stylesheets;
}
exports.$init$MediaListAbs$stylesheets=$init$MediaListAbs$stylesheets;
$init$MediaListAbs$stylesheets();
function MediaList$stylesheets(n$887, $$mediaList){
    $init$MediaList$stylesheets();
    if ($$mediaList===undefined)$$mediaList=new MediaList$stylesheets.$$;
    $$mediaList.n$887_=n$887;
    MediaListAbs$stylesheets($$mediaList);
    $$$cl1.defineAttr($$mediaList,'n$887',function(){return this.n$887_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:MediaList$stylesheets,d:['ceylon.js.dom.stylesheets','MediaList','$at','n']};});
    $$mediaList.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:MediaList$stylesheets,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom.stylesheets','MediaList','$at','native']};}};
    /*Begin dynamic block*/
    $$mediaList.$native=n$887;/*End dynamic block*/
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
    $$$cjl359.JSObjectAbs($$styleSheetAbs);
    function type(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$styleSheetAbs.$native.type);
        /*End dynamic block*/
    }
    $$styleSheetAbs.type=type;
    type.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','type']};};
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
        return $$$cjl359.JSString($$styleSheetAbs.$native.href);
        /*End dynamic block*/
    }
    $$styleSheetAbs.href=href;
    href.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','href']};};
    function title(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$styleSheetAbs.$native.title);
        /*End dynamic block*/
    }
    $$styleSheetAbs.title=title;
    title.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','title']};};
    function media(){
        /*Begin dynamic block*/
        return MediaList$stylesheets($$styleSheetAbs.$native.media);
        /*End dynamic block*/
    }
    $$styleSheetAbs.media=media;
    media.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:MediaList$stylesheets},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','media']};};
    return $$styleSheetAbs;
}
StyleSheetAbs$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs']};};
exports.StyleSheetAbs$stylesheets=StyleSheetAbs$stylesheets;
function $init$StyleSheetAbs$stylesheets(){
    if (StyleSheetAbs$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(StyleSheetAbs$stylesheets,'ceylon.js.dom.stylesheets::StyleSheetAbs',$$$cjl359.JSObjectAbs);
    }
    return StyleSheetAbs$stylesheets;
}
exports.$init$StyleSheetAbs$stylesheets=$init$StyleSheetAbs$stylesheets;
$init$StyleSheetAbs$stylesheets();
function StyleSheet$stylesheets(n$888, $$styleSheet){
    $init$StyleSheet$stylesheets();
    if ($$styleSheet===undefined)$$styleSheet=new StyleSheet$stylesheets.$$;
    $$styleSheet.n$888_=n$888;
    StyleSheetAbs$stylesheets($$styleSheet);
    $$$cl1.defineAttr($$styleSheet,'n$888',function(){return this.n$888_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:StyleSheet$stylesheets,d:['ceylon.js.dom.stylesheets','StyleSheet','$at','n']};});
    $$styleSheet.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:StyleSheet$stylesheets,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom.stylesheets','StyleSheet','$at','native']};}};
    /*Begin dynamic block*/
    $$styleSheet.$native=n$888;/*End dynamic block*/
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
    $$$cjl359.JSObjectAbs($$styleSheetListAbs);
    function length(){
        /*Begin dynamic block*/
        return $$$cjl359.JSNumber($$styleSheetListAbs.$native.length);
        /*End dynamic block*/
    }
    $$styleSheetListAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSNumber},$ps:[],$cont:StyleSheetListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','length']};};
    function item(index$889){
        /*Begin dynamic block*/
        var element$890=$$styleSheetListAbs.$native.item(/*NULL PARAM!*/index$889);
        $prop$getElement$890={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','item','$at','element']};}};
        $prop$getElement$890.get=function(){return element$890};
        if((tmpvar$891=element$890,tmpvar$892=null,(tmpvar$891.equals&&!tmpvar$891.equals(tmpvar$892))||tmpvar$891!==tmpvar$892)){
            return StyleSheet$stylesheets(element$890);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$styleSheetListAbs.item=item;
    item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:StyleSheet$stylesheets}]},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}}],$cont:StyleSheetListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','item']};};
    return $$styleSheetListAbs;
}
StyleSheetListAbs$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom.stylesheets','StyleSheetListAbs']};};
exports.StyleSheetListAbs$stylesheets=StyleSheetListAbs$stylesheets;
function $init$StyleSheetListAbs$stylesheets(){
    if (StyleSheetListAbs$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(StyleSheetListAbs$stylesheets,'ceylon.js.dom.stylesheets::StyleSheetListAbs',$$$cjl359.JSObjectAbs);
    }
    return StyleSheetListAbs$stylesheets;
}
exports.$init$StyleSheetListAbs$stylesheets=$init$StyleSheetListAbs$stylesheets;
$init$StyleSheetListAbs$stylesheets();
function StyleSheetList$stylesheets(n$893, $$styleSheetList){
    $init$StyleSheetList$stylesheets();
    if ($$styleSheetList===undefined)$$styleSheetList=new StyleSheetList$stylesheets.$$;
    $$styleSheetList.n$893_=n$893;
    StyleSheetListAbs$stylesheets($$styleSheetList);
    $$$cl1.defineAttr($$styleSheetList,'n$893',function(){return this.n$893_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:StyleSheetList$stylesheets,d:['ceylon.js.dom.stylesheets','StyleSheetList','$at','n']};});
    $$styleSheetList.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:StyleSheetList$stylesheets,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom.stylesheets','StyleSheetList','$at','native']};}};
    /*Begin dynamic block*/
    $$styleSheetList.$native=n$893;/*End dynamic block*/
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
function CDATASection(n$894, $$cDATASection){
    $init$CDATASection();
    if ($$cDATASection===undefined)$$cDATASection=new CDATASection.$$;
    $$cDATASection.n$894_=n$894;
    CDATASectionAbs($$cDATASection);
    $$$cl1.defineAttr($$cDATASection,'n$894',function(){return this.n$894_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CDATASection,d:['ceylon.js.dom','CDATASection','$at','n']};});
    $$cDATASection.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CDATASection,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','CDATASection','$at','native']};}};
    /*Begin dynamic block*/
    $$cDATASection.$native=n$894;/*End dynamic block*/
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
    function splitText(offset$895){
        
        var case$896=offset$895;
        if ($$$cl1.isOfType(offset$895,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            return Text($$textAbs.$native.splitText(/*NULL PARAM!*/case$896));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(offset$895,{t:$$$cjl359.JSNumber})) {
            /*Begin dynamic block*/
            return Text($$textAbs.$native.splitText(/*NULL PARAM!*/case$896.$native));
            /*End dynamic block*/
        }
    }
    $$textAbs.splitText=splitText;
    splitText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Text},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl359.JSNumber}]},$an:function(){return[];}}],$cont:TextAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TextAbs','$m','splitText']};};
    function wholeText(){
        /*Begin dynamic block*/
        return $$$cjl359.JSString($$textAbs.$native.wholeText);
        /*End dynamic block*/
    }
    $$textAbs.wholeText=wholeText;
    wholeText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl359.JSString},$ps:[],$cont:TextAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TextAbs','$m','wholeText']};};
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
function Text(n$897, $$text){
    $init$Text();
    if ($$text===undefined)$$text=new Text.$$;
    $$text.n$897_=n$897;
    TextAbs($$text);
    $$$cl1.defineAttr($$text,'n$897',function(){return this.n$897_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Text,d:['ceylon.js.dom','Text','$at','n']};});
    /*Begin dynamic block*/
    $$text.$native=n$897;/*End dynamic block*/
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
    $$$cjl359.JSObjectAbs($$treeWalkerAbs);
    function root(){
        /*Begin dynamic block*/
        return Node($$treeWalkerAbs.$native.root);
        /*End dynamic block*/
    }
    $$treeWalkerAbs.root=root;
    root.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','root']};};
    function whatToShow(){
        /*Begin dynamic block*/
        return (tmpvar$898=$$treeWalkerAbs.$native.whatToShow,$$$cl1.isOfType(tmpvar$898,{t:$$$cl1.Anything})?tmpvar$898:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'13:19-13:35','treewalker.ceylon'));
        /*End dynamic block*/
    }
    $$treeWalkerAbs.whatToShow=whatToShow;
    whatToShow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','whatToShow']};};
    function filter(){
        /*Begin dynamic block*/
        var filter$899=$$treeWalkerAbs.$native.filter;
        $prop$getFilter$899={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','filter','$at','filter']};}};
        $prop$getFilter$899.get=function(){return filter$899};
        if((tmpvar$900=filter$899,tmpvar$901=null,(tmpvar$900.equals&&!tmpvar$900.equals(tmpvar$901))||tmpvar$900!==tmpvar$901)){
            return NodeFilter((tmpvar$902=filter$899,$$$cl1.isOfType(tmpvar$902,{t:NodeFilterResult})?tmpvar$902:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'21:34-21:39','treewalker.ceylon')));
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
        var parent$903=$$treeWalkerAbs.$native.parentNode();
        $prop$getParent$903={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','parentNode','$at','parent']};}};
        $prop$getParent$903.get=function(){return parent$903};
        if((tmpvar$904=parent$903,tmpvar$905=null,(tmpvar$904.equals&&!tmpvar$904.equals(tmpvar$905))||tmpvar$904!==tmpvar$905)){
            return Node(parent$903);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.parentNode=parentNode;
    parentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','parentNode']};};
    function firstChild(){
        /*Begin dynamic block*/
        var first$906=$$treeWalkerAbs.$native.firstChild();
        $prop$getFirst$906={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','firstChild','$at','first']};}};
        $prop$getFirst$906.get=function(){return first$906};
        if((tmpvar$907=first$906,tmpvar$908=null,(tmpvar$907.equals&&!tmpvar$907.equals(tmpvar$908))||tmpvar$907!==tmpvar$908)){
            return Node(first$906);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.firstChild=firstChild;
    firstChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','firstChild']};};
    function lastChild(){
        /*Begin dynamic block*/
        var last$909=$$treeWalkerAbs.$native.lastChild();
        $prop$getLast$909={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','lastChild','$at','last']};}};
        $prop$getLast$909.get=function(){return last$909};
        if((tmpvar$910=last$909,tmpvar$911=null,(tmpvar$910.equals&&!tmpvar$910.equals(tmpvar$911))||tmpvar$910!==tmpvar$911)){
            return Node(last$909);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.lastChild=lastChild;
    lastChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','lastChild']};};
    function previousSibling(){
        /*Begin dynamic block*/
        var previous$912=$$treeWalkerAbs.$native.previousSibling();
        $prop$getPrevious$912={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','previousSibling','$at','previous']};}};
        $prop$getPrevious$912.get=function(){return previous$912};
        if((tmpvar$913=previous$912,tmpvar$914=null,(tmpvar$913.equals&&!tmpvar$913.equals(tmpvar$914))||tmpvar$913!==tmpvar$914)){
            return Node(previous$912);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.previousSibling=previousSibling;
    previousSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','previousSibling']};};
    function nextSibling(){
        /*Begin dynamic block*/
        var next$915=$$treeWalkerAbs.$native.nextSibling();
        $prop$getNext$915={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','nextSibling','$at','next']};}};
        $prop$getNext$915.get=function(){return next$915};
        if((tmpvar$916=next$915,tmpvar$917=null,(tmpvar$916.equals&&!tmpvar$916.equals(tmpvar$917))||tmpvar$916!==tmpvar$917)){
            return Node(next$915);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.nextSibling=nextSibling;
    nextSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','nextSibling']};};
    function previousNode(){
        /*Begin dynamic block*/
        var previous$918=$$treeWalkerAbs.$native.previousNode();
        $prop$getPrevious$918={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','previousNode','$at','previous']};}};
        $prop$getPrevious$918.get=function(){return previous$918};
        if((tmpvar$919=previous$918,tmpvar$920=null,(tmpvar$919.equals&&!tmpvar$919.equals(tmpvar$920))||tmpvar$919!==tmpvar$920)){
            return Node(previous$918);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.previousNode=previousNode;
    previousNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','previousNode']};};
    function nextNode(){
        /*Begin dynamic block*/
        var next$921=$$treeWalkerAbs.$native.nextNode();
        $prop$getNext$921={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','nextNode','$at','next']};}};
        $prop$getNext$921.get=function(){return next$921};
        if((tmpvar$922=next$921,tmpvar$923=null,(tmpvar$922.equals&&!tmpvar$922.equals(tmpvar$923))||tmpvar$922!==tmpvar$923)){
            return Node(next$921);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.nextNode=nextNode;
    nextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','nextNode']};};
    return $$treeWalkerAbs;
}
TreeWalkerAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl359.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','TreeWalkerAbs']};};
exports.TreeWalkerAbs=TreeWalkerAbs;
function $init$TreeWalkerAbs(){
    if (TreeWalkerAbs.$$===undefined){
        $$$cl1.initTypeProto(TreeWalkerAbs,'ceylon.js.dom::TreeWalkerAbs',$$$cjl359.JSObjectAbs);
    }
    return TreeWalkerAbs;
}
exports.$init$TreeWalkerAbs=$init$TreeWalkerAbs;
$init$TreeWalkerAbs();
function TreeWalker(n$924, $$treeWalker){
    $init$TreeWalker();
    if ($$treeWalker===undefined)$$treeWalker=new TreeWalker.$$;
    $$treeWalker.n$924_=n$924;
    TreeWalkerAbs($$treeWalker);
    $$$cl1.defineAttr($$treeWalker,'n$924',function(){return this.n$924_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:TreeWalker,d:['ceylon.js.dom','TreeWalker','$at','n']};});
    $$treeWalker.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:TreeWalker,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','TreeWalker','$at','native']};}};
    /*Begin dynamic block*/
    $$treeWalker.$native=n$924;/*End dynamic block*/
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
