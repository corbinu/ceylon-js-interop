(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.js.language\/1.8.5","ceylon.js.html\/5.0.0","ceylon.js.json\/1.0.0","ceylon.language\/0.6.1"],"$mod-name":"ceylon.js.dom","ceylon.js.dom":{"attributeNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"attributeNode"},"endToStart":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"endToStart"},"Attr":{"super":{"$pk":"ceylon.js.dom","$nm":"AttrAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Attr"},"documentTypeNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentTypeNode"},"ltr":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"obj","$an":{"shared":[]},"$nm":"ltr"},"notationNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"notationNode"},"TextAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"CharacterDataAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"wholeText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"wholeText"},"splitText":{"$t":{"$pk":"ceylon.js.dom","$nm":"Text"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"splitText"}},"$nm":"TextAbs"},"capturePhase":{"super":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"capturePhase"},"ProcessingInstructionAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"target":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"target"},"setData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"}},"$nm":"ProcessingInstructionAbs"},"filterSkip":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$mt":"obj","$an":{"shared":[]},"$nm":"filterSkip"},"$pkg-shared":"1","filterAccept":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$mt":"obj","$an":{"shared":[]},"$nm":"filterAccept"},"documentPositionFollowing":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionFollowing"},"EventInit":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$an":{"shared":[]},"$nm":"bubbles"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$an":{"shared":[]},"$nm":"cancelable"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toJson":{"$t":{"$md":"ceylon.js.json","$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"}},"$at":{"bubbles":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"bubbles"},"cancelable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"cancelable"}},"$nm":"EventInit"},"css1Compat":{"super":{"$pk":"ceylon.js.dom","$nm":"CompatMode"},"$mt":"obj","$an":{"shared":[]},"$nm":"css1Compat"},"EventTargetAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"addEventListener":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"capture"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"addEventListener"},"dispatchEvent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dispatchEvent"},"removeEventListener":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"capture"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"removeEventListener"}},"$nm":"EventTargetAbs"},"none":{"super":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"none"},"CDATASectionAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"TextAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"CDATASectionAbs"},"filterReject":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$mt":"obj","$an":{"shared":[]},"$nm":"filterReject"},"DocumentTypeAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"name":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"name"},"publicId":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"publicId"},"systemId":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"systemId"}},"$nm":"DocumentTypeAbs"},"EntityReference":{"super":{"$pk":"ceylon.js.dom","$nm":"EntityReferenceAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"EntityReference"},"NodeListAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"item":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"item"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"}},"$nm":"NodeListAbs"},"documentPositionImplementationSpecific":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionImplementationSpecific"},"ElementAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"hasAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasAttribute"},"getAttributeNS":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getAttributeNS"},"getElementsByTagName":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"tagName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByTagName"},"getElementsByTagNameNS":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"tagName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByTagNameNS"},"removeAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attrName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeAttributeNS"},"tagName":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"tagName"},"removeAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attrName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeAttribute"},"setAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttributeNS"},"setAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttribute"},"getAttribute":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getAttribute"},"hasAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasAttributeNS"}},"$nm":"ElementAbs"},"startToStart":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"startToStart"},"CompatMode":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"css1Compat"},{"$pk":"ceylon.js.dom","$nm":"backCompat"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"CompatMode"},"rtl":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"obj","$an":{"shared":[]},"$nm":"rtl"},"DocumentFragment":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentFragmentAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"DocumentFragment"},"Event":{"super":{"$pk":"ceylon.js.dom","$nm":"EventAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Event"},"loading":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"loading"},"documentPositionContainedBy":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionContainedBy"},"Comment":{"super":{"$pk":"ceylon.js.dom","$nm":"CommentAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Comment"},"EventAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"defaultPrevented":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"defaultPrevented"},"timeStamp":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSDate"},"$mt":"mthd","$an":{"shared":[]},"$nm":"timeStamp"},"stopPropagation":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"stopPropagation"},"eventPhase":{"$t":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"mthd","$an":{"shared":[]},"$nm":"eventPhase"},"currentTarget":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"EventTarget"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"currentTarget"},"bubbles":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"bubbles"},"stopImmediatePropagation":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"stopImmediatePropagation"},"target":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"EventTarget"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"target"},"isTrusted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isTrusted"},"cancelable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"cancelable"},"preventDefault":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"preventDefault"},"type":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"type"},"initEvent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"bubbles"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"cancelable"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"initEvent"}},"$nm":"EventAbs"},"documentPositionPreceding":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionPreceding"},"NodeFilterResult":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"filterAccept"},{"$pk":"ceylon.js.dom","$nm":"filterReject"},{"$pk":"ceylon.js.dom","$nm":"filterSkip"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"NodeFilterResult"},"DocumentDirection":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"rtl"},{"$pk":"ceylon.js.dom","$nm":"ltr"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DocumentDirection"},"createEvent":{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$pk":"ceylon.js.dom","$nm":"EventInit"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createEvent"},"DocumentFragmentAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"DocumentFragmentAbs"},"RangeAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"extractContents":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentFragment"},"$mt":"mthd","$an":{"shared":[]},"$nm":"extractContents"},"detach":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"detach"},"compareBoundaryPoints":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"prm","$nm":"how"},{"$t":{"$pk":"ceylon.js.dom","$nm":"Range"},"$mt":"prm","$nm":"sourceRange"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"compareBoundaryPoints"},"selectNodeContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"selectNodeContents"},"insertNode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertNode"},"deleteContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"deleteContents"},"setStartAfter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setStartAfter"},"startOffset":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"startOffset"},"collapsed":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"collapsed"},"cloneRange":{"$t":{"$pk":"ceylon.js.dom","$nm":"Range"},"$mt":"mthd","$an":{"shared":[]},"$nm":"cloneRange"},"surroundContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"surroundContents"},"cloneContents":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentFragment"},"$mt":"mthd","$an":{"shared":[]},"$nm":"cloneContents"},"selectNode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"selectNode"},"endOffset":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"endOffset"},"setStart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"startNode"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"startOffset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setStart"},"isPointInRange":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isPointInRange"},"commonAncestorContainer":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"commonAncestorContainer"},"startContainer":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"startContainer"},"endContainer":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"endContainer"},"setEndAfter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEndAfter"},"setStartBefore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setStartBefore"},"setEndBefore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEndBefore"},"setEnd":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"endNode"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"endOffset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEnd"},"collapse":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"toStart"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"collapse"}},"$nm":"RangeAbs"},"Node":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Node"},"NodeType":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"attributeNode"},{"$pk":"ceylon.js.dom","$nm":"cdataSectionNode"},{"$pk":"ceylon.js.dom","$nm":"commentNode"},{"$pk":"ceylon.js.dom","$nm":"documentFragmentNode"},{"$pk":"ceylon.js.dom","$nm":"documentNode"},{"$pk":"ceylon.js.dom","$nm":"documentTypeNode"},{"$pk":"ceylon.js.dom","$nm":"elementNode"},{"$pk":"ceylon.js.dom","$nm":"entityNode"},{"$pk":"ceylon.js.dom","$nm":"entityReferenceNode"},{"$pk":"ceylon.js.dom","$nm":"notationNode"},{"$pk":"ceylon.js.dom","$nm":"processingInstructionNode"},{"$pk":"ceylon.js.dom","$nm":"textNode"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"NodeType"},"processingInstructionNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"processingInstructionNode"},"endToEnd":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"endToEnd"},"CharacterDataAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"replaceData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"count"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceData"},"getData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"deleteData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"count"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"deleteData"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"insertData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertData"},"appendData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendData"},"substringData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"count"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"substringData"},"setData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"}},"$nm":"CharacterDataAbs"},"commentNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"commentNode"},"NodeList":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeListAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"NodeList"},"documentPositionContains":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionContains"},"TreeWalkerAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"previousSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"previousSibling"},"whatToShow":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"whatToShow"},"parentNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"parentNode"},"root":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"root"},"firstChild":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"firstChild"},"currentNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"currentNode"},"nextNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"nextNode"},"nextSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"nextSibling"},"filter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"filter"},"previousNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"previousNode"},"lastChild":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"lastChild"}},"$nm":"TreeWalkerAbs"},"CharacterData":{"super":{"$pk":"ceylon.js.dom","$nm":"CharacterDataAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"CharacterData"},"DOMImplementationAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"createDocument":{"$t":{"$pk":"ceylon.js.dom","$nm":"Document"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"qualifiedName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"DocumentType"}]},"$mt":"prm","$def":"1","$nm":"doctype"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createDocument"},"createDocumentType":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentType"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"qualifiedName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"publicId"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"systemId"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createDocumentType"},"hasFeature":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"feature"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"version"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasFeature"}},"$nm":"DOMImplementationAbs"},"documentFragmentNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentFragmentNode"},"DocumentPosition":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"documentPositionContainedBy"},{"$pk":"ceylon.js.dom","$nm":"documentPositionContains"},{"$pk":"ceylon.js.dom","$nm":"documentPositionDisconnected"},{"$pk":"ceylon.js.dom","$nm":"documentPositionFollowing"},{"$pk":"ceylon.js.dom","$nm":"documentPositionImplementationSpecific"},{"$pk":"ceylon.js.dom","$nm":"documentPositionPreceding"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DocumentPosition"},"HTMLCollectionAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"item":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Element"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"item"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"namedItem":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"namedItem"}},"$nm":"HTMLCollectionAbs"},"RangeCompareHow":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"endToEnd"},{"$pk":"ceylon.js.dom","$nm":"endToStart"},{"$pk":"ceylon.js.dom","$nm":"startToEnd"},{"$pk":"ceylon.js.dom","$nm":"startToStart"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"RangeCompareHow"},"NodeIteratorAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"whatToShow":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"whatToShow"},"root":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"root"},"nextNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"nextNode"},"filter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"filter"},"previousNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"previousNode"}},"$nm":"NodeIteratorAbs"},"entityNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"entityNode"},"backCompat":{"super":{"$pk":"ceylon.js.dom","$nm":"CompatMode"},"$mt":"obj","$an":{"shared":[]},"$nm":"backCompat"},"HTMLCollection":{"super":{"$pk":"ceylon.js.dom","$nm":"HTMLCollectionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"HTMLCollection"},"textNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"textNode"},"interactive":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"interactive"},"complete":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"complete"},"NodeIterator":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeIteratorAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"NodeIterator"},"startToEnd":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"startToEnd"},"DOMImplementation":{"super":{"$pk":"ceylon.js.dom","$nm":"DOMImplementationAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"DOMImplementation"},"cdataSectionNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"cdataSectionNode"},"DocumentType":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentTypeAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"DocumentType"},"CommentAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"CharacterDataAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"CommentAbs"},"Range":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Range"},"Document":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Document"},"entityReferenceNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"entityReferenceNode"},"atTarget":{"super":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"atTarget"},"EntityReferenceAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"EntityReferenceAbs"},"AttrAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getValue":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getValue"},"name":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"name"},"setValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setValue"},"isId":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isId"}},"$nm":"AttrAbs"},"elementNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"elementNode"},"documentPositionDisconnected":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionDisconnected"},"getWindow":{"$t":{"$md":"ceylon.js.html","$pk":"ceylon.js.html","$nm":"Window"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getWindow"},"NodeFilter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"n"}]],"$mt":"prm","$pt":"f","$nm":"acceptNode"}],"$mt":"cls","$an":{"shared":[]},"$m":{"acceptNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"n"}]],"$mt":"mthd","$nm":"acceptNode"}},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"}},"$nm":"NodeFilter"},"CDATASection":{"super":{"$pk":"ceylon.js.dom","$nm":"CDATASectionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"CDATASection"},"Text":{"super":{"$pk":"ceylon.js.dom","$nm":"TextAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Text"},"documentNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentNode"},"TreeWalker":{"super":{"$pk":"ceylon.js.dom","$nm":"TreeWalkerAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"TreeWalker"},"bubblingPhase":{"super":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"bubblingPhase"},"EventPhase":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"none"},{"$pk":"ceylon.js.dom","$nm":"capturePhase"},{"$pk":"ceylon.js.dom","$nm":"atTarget"},{"$pk":"ceylon.js.dom","$nm":"bubblingPhase"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$an":{"shared":[]},"$nm":"num"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"num":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"num"}},"$nm":"EventPhase"},"EventTarget":{"super":{"$pk":"ceylon.js.dom","$nm":"EventTargetAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"EventTarget"},"NodeAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"firstChild":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"firstChild"},"nodeName":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"nodeName"},"childNodes":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeList"},"$mt":"mthd","$an":{"shared":[]},"$nm":"childNodes"},"baseURI":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"baseURI"},"replaceChild":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newChild"},{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"oldChild"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceChild"},"setTextContent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTextContent"},"lastChild":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"lastChild"},"normalize":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"normalize"},"lookupPrefix":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"namespaceURI"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"lookupPrefix"},"previousSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"previousSibling"},"parentNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"parentNode"},"hasChildNodes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"hasChildNodes"},"nodeType":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"mthd","$an":{"shared":[]},"$nm":"nodeType"},"cloneNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"bool"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"cloneNode"},"nextSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"nextSibling"},"isDefaultNamespace":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespaceURI"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isDefaultNamespace"},"insertBefore":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newElement"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"prm","$nm":"referenceElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertBefore"},"appendChild":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendChild"},"setNodeValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setNodeValue"},"compareDocumentPosition":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"compareDocumentPosition"},"removeChild":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeChild"},"prefix":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"prefix"},"getTextContent":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTextContent"},"isEqualNode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isEqualNode"},"getNodeValue":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getNodeValue"}},"$at":{"ownerDocument":{"$t":{"$pk":"ceylon.js.dom","$nm":"Document"},"$mt":"gttr","$an":{"shared":[]},"$nm":"ownerDocument"}},"$nm":"NodeAbs"},"DocumentReadyState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"loading"},{"$pk":"ceylon.js.dom","$nm":"interactive"},{"$pk":"ceylon.js.dom","$nm":"complete"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DocumentReadyState"},"ProcessingInstruction":{"super":{"$pk":"ceylon.js.dom","$nm":"ProcessingInstructionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"ProcessingInstruction"},"DocumentAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"writeln":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"line"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"writeln"},"body":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"body"},"getElementsByName":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByName"},"createNodeIterator":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeIterator"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"root"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"whatToShow"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createNodeIterator"},"location":{"$t":{"$md":"ceylon.js.html","$pk":"ceylon.js.html","$nm":"Location"},"$mt":"mthd","$an":{"shared":[]},"$nm":"location"},"hasFocus":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"hasFocus"},"defaultView":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.html","$pk":"ceylon.js.html","$nm":"Window"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"defaultView"},"close":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"close"},"open":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"open"},"scripts":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"scripts"},"createAttributeNS":{"$t":{"$pk":"ceylon.js.dom","$nm":"Attr"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createAttributeNS"},"getElementsByClassName":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"names"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByClassName"},"createAttribute":{"$t":{"$pk":"ceylon.js.dom","$nm":"Attr"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createAttribute"},"querySelector":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"selectors"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"querySelector"},"activeElement":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[]},"$nm":"activeElement"},"head":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[]},"$nm":"head"},"documentElement":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"documentElement"},"setAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"async"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAsync"},"getElementById":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Element"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"id"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementById"},"releaseCapture":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"releaseCapture"},"styleSheetSets":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[],"doc":["Array of Strings"]},"$nm":"styleSheetSets"},"getElementsByTagNameNS":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},{"$pk":"ceylon.js.dom","$nm":"NodeList"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByTagNameNS"},"getAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAsync"},"getCookie":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getCookie"},"getDir":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDir"},"setDir":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"prm","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDir"},"elementFromPoint":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"x"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"elementFromPoint"},"getSelectedStyleSheetSet":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getSelectedStyleSheetSet"},"preferredStyleSheetSet":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"preferredStyleSheetSet"},"url":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"url"},"createComment":{"$t":{"$pk":"ceylon.js.dom","$nm":"Comment"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createComment"},"referrer":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"referrer"},"documentURI":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"documentURI"},"setSelectedStyleSheetSet":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"sheet"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setSelectedStyleSheetSet"},"images":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"images"},"styleSheets":{"$t":{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheetList"},"$mt":"mthd","$an":{"shared":[]},"$nm":"styleSheets"},"doctype":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"DocumentType"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"doctype"},"createCDATASection":{"$t":{"$pk":"ceylon.js.dom","$nm":"CDATASection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createCDATASection"},"getDomain":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDomain"},"importNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"externalNode"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"deep"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"importNode"},"adoptNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"adoptNode"},"getDesignMode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDesignMode"},"plugins":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"plugins"},"compatMode":{"$t":{"$pk":"ceylon.js.dom","$nm":"CompatMode"},"$mt":"mthd","$an":{"shared":[]},"$nm":"compatMode"},"createTextNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Text"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createTextNode"},"createElementNS":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"qualifiedName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createElementNS"},"querySelectorAll":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeList"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"selectors"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"querySelectorAll"},"createDocumentFragment":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentFragment"},"$mt":"mthd","$an":{"shared":[]},"$nm":"createDocumentFragment"},"title":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"title"},"getElementsByTagName":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},{"$pk":"ceylon.js.dom","$nm":"NodeList"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByTagName"},"write":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"line"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"write"},"setDomain":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"domain"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDomain"},"forms":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"forms"},"characterSet":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"characterSet"},"lastModified":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"lastModified"},"links":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"links"},"readyState":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"mthd","$an":{"shared":[]},"$nm":"readyState"},"createRange":{"$t":{"$pk":"ceylon.js.dom","$nm":"Range"},"$mt":"mthd","$an":{"shared":[]},"$nm":"createRange"},"anchors":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeList"},"$mt":"mthd","$an":{"shared":[]},"$nm":"anchors"},"implementation":{"$t":{"$pk":"ceylon.js.dom","$nm":"DOMImplementation"},"$mt":"mthd","$an":{"shared":[]},"$nm":"implementation"},"setCookie":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"cookie"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCookie"},"lastStyleSheetSet":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"lastStyleSheetSet"},"createTreeWalker":{"$t":{"$pk":"ceylon.js.dom","$nm":"TreeWalker"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"root"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"whatToShow"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createTreeWalker"},"createElement":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"tagName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createElement"},"createProcessingInstruction":{"$t":{"$pk":"ceylon.js.dom","$nm":"ProcessingInstruction"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"target"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createProcessingInstruction"}},"$nm":"DocumentAbs"},"Element":{"super":{"$pk":"ceylon.js.dom","$nm":"ElementAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Element"}},"$mod-version":"4.0.0","ceylon.js.dom.stylesheets":{"MediaListAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"appendMedium":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"newMedium"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendMedium"},"setMediaText":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"text"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMediaText"},"item":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"item"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"deleteMedium":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"oldMedium"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"deleteMedium"},"getMediaText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMediaText"}},"$nm":"MediaListAbs"},"StyleSheetAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"title":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"title"},"ownerNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"ownerNode"},"type":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"type"},"media":{"$t":{"$pk":"ceylon.js.dom.stylesheets","$nm":"MediaList"},"$mt":"mthd","$an":{"shared":[]},"$nm":"media"},"href":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"href"},"parentStyleSheet":{"$t":{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheet"},"$mt":"mthd","$an":{"shared":[]},"$nm":"parentStyleSheet"},"disabled":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"disabled"}},"$nm":"StyleSheetAbs"},"$pkg-shared":"1","MediaList":{"super":{"$pk":"ceylon.js.dom.stylesheets","$nm":"MediaListAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"MediaList"},"StyleSheet":{"super":{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheetAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"StyleSheet"},"StyleSheetListAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"item":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheet"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"item"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"}},"$nm":"StyleSheetListAbs"},"StyleSheetList":{"super":{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheetListAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"StyleSheetList"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl32209=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl32209.$addmod$($$$cl32209,'ceylon.language/0.6.1');
exports.$pkg$ans$ceylon$js$dom$stylesheets=function(){return[$$$cl32209.shared()];};
exports.$pkg$ans$ceylon$js$dom=function(){return[$$$cl32209.shared()];};
exports.$mod$ans$=function(){return[$$$cl32209.doc($$$cl32209.String("based on the DOM 4 working draft and",36))];};
var $$$cjl32280=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl32209.$addmod$($$$cjl32280,'ceylon.js.language/1.8.5');

//ClassDefinition ProcessingInstructionAbs at processinginstruction.ceylon (3:0-30:0)
function ProcessingInstructionAbs($$processingInstructionAbs){
    $init$ProcessingInstructionAbs();
    if ($$processingInstructionAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$processingInstructionAbs);
    return $$processingInstructionAbs;
}
ProcessingInstructionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','ProcessingInstructionAbs']};};
exports.ProcessingInstructionAbs=ProcessingInstructionAbs;
function $init$ProcessingInstructionAbs(){
    if (ProcessingInstructionAbs.$$===undefined){
        $$$cl32209.initTypeProto(ProcessingInstructionAbs,'ceylon.js.dom::ProcessingInstructionAbs',$init$NodeAbs());
        (function($$processingInstructionAbs){
            
            //MethodDefinition getData at processinginstruction.ceylon (5:4-9:4)
            $$processingInstructionAbs.getData=function getData(){
                var $$processingInstructionAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$processingInstructionAbs.$native.data);
                /*End dynamic block*/
            };$$processingInstructionAbs.getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:ProcessingInstructionAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','ProcessingInstructionAbs','$m','getData']};};
            
            //MethodDefinition setData at processinginstruction.ceylon (11:4-23:4)
            $$processingInstructionAbs.setData=function setData(data$32281){
                var $$processingInstructionAbs=this;
                //Switch statement at processinginstruction.ceylon (12:8-22:8)
                var case$32282=data$32281;
                if ($$$cl32209.isOfType(data$32281,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$processingInstructionAbs.$native.data=case$32282.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(data$32281,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$processingInstructionAbs.$native.data=case$32282.$native;
                    /*End dynamic block*/
                }//End switch statement at processinginstruction.ceylon (12:8-22:8)
            };$$processingInstructionAbs.setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:ProcessingInstructionAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','ProcessingInstructionAbs','$m','setData']};};
            
            //MethodDefinition target at processinginstruction.ceylon (25:4-29:4)
            $$processingInstructionAbs.target=function target(){
                var $$processingInstructionAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$processingInstructionAbs.$native.target);
                /*End dynamic block*/
            };$$processingInstructionAbs.target.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:ProcessingInstructionAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','ProcessingInstructionAbs','$m','target']};};
        })(ProcessingInstructionAbs.$$.prototype);
    }
    return ProcessingInstructionAbs;
}
exports.$init$ProcessingInstructionAbs=$init$ProcessingInstructionAbs;
$init$ProcessingInstructionAbs();

//ClassDefinition ProcessingInstruction at processinginstruction.ceylon (32:0-37:0)
function ProcessingInstruction(n$32283, $$processingInstruction){
    $init$ProcessingInstruction();
    if ($$processingInstruction===undefined)$$processingInstruction=new ProcessingInstruction.$$;
    $$processingInstruction.n$32283_=n$32283;
    ProcessingInstructionAbs($$processingInstruction);
    
    //AttributeDeclaration native at processinginstruction.ceylon (33:1-33:29)
    $$processingInstruction.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:ProcessingInstruction,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom','ProcessingInstruction','$at','native']};}};
    /*Begin dynamic block*/
    $$processingInstruction.$native=$$processingInstruction.n$32283;/*End dynamic block*/
    return $$processingInstruction;
}
ProcessingInstruction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:ProcessingInstructionAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','ProcessingInstruction']};};
exports.ProcessingInstruction=ProcessingInstruction;
function $init$ProcessingInstruction(){
    if (ProcessingInstruction.$$===undefined){
        $$$cl32209.initTypeProto(ProcessingInstruction,'ceylon.js.dom::ProcessingInstruction',$init$ProcessingInstructionAbs());
        (function($$processingInstruction){
            
            //AttributeDeclaration native at processinginstruction.ceylon (33:1-33:29)
            $$$cl32209.defineAttr($$processingInstruction,'n$32283',function(){return this.n$32283_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:ProcessingInstruction,d:['ceylon.js.dom','ProcessingInstruction','$at','n']};});
        })(ProcessingInstruction.$$.prototype);
    }
    return ProcessingInstruction;
}
exports.$init$ProcessingInstruction=$init$ProcessingInstruction;
$init$ProcessingInstruction();

//ClassDefinition AttrAbs at attr.ceylon (3:0-40:0)
function AttrAbs($$attrAbs){
    $init$AttrAbs();
    if ($$attrAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$attrAbs);
    return $$attrAbs;
}
AttrAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','AttrAbs']};};
exports.AttrAbs=AttrAbs;
function $init$AttrAbs(){
    if (AttrAbs.$$===undefined){
        $$$cl32209.initTypeProto(AttrAbs,'ceylon.js.dom::AttrAbs',$$$cjl32280.JSObjectAbs);
        (function($$attrAbs){
            
            //MethodDefinition isId at attr.ceylon (5:4-13:4)
            $$attrAbs.isId=function isId(){
                var $$attrAbs=this;
                /*Begin dynamic block*/
                if($$attrAbs.$native.isId){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$attrAbs.isId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:AttrAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','AttrAbs','$m','isId']};};
            
            //MethodDefinition name at attr.ceylon (15:4-19:4)
            $$attrAbs.name=function name(){
                var $$attrAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$attrAbs.$native.name);
                /*End dynamic block*/
            };$$attrAbs.name.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:AttrAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','AttrAbs','$m','name']};};
            
            //MethodDefinition getValue at attr.ceylon (21:4-25:1)
            $$attrAbs.getValue=function getValue(){
                var $$attrAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$attrAbs.$native.value);
                /*End dynamic block*/
            };$$attrAbs.getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:AttrAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','AttrAbs','$m','getValue']};};
            
            //MethodDefinition setValue at attr.ceylon (27:1-39:1)
            $$attrAbs.setValue=function setValue(val$32313){
                var $$attrAbs=this;
                //Switch statement at attr.ceylon (28:2-38:2)
                var case$32314=val$32313;
                if ($$$cl32209.isOfType(val$32313,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$attrAbs.$native.value=case$32314.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(val$32313,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$attrAbs.$native.value=case$32314.$native;
                    /*End dynamic block*/
                }//End switch statement at attr.ceylon (28:2-38:2)
            };$$attrAbs.setValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:AttrAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','AttrAbs','$m','setValue']};};
        })(AttrAbs.$$.prototype);
    }
    return AttrAbs;
}
exports.$init$AttrAbs=$init$AttrAbs;
$init$AttrAbs();

//ClassDefinition Attr at attr.ceylon (42:0-47:0)
function Attr(n$32315, $$attr){
    $init$Attr();
    if ($$attr===undefined)$$attr=new Attr.$$;
    $$attr.n$32315_=n$32315;
    AttrAbs($$attr);
    
    //AttributeDeclaration native at attr.ceylon (43:1-43:29)
    $$attr.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Attr,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom','Attr','$at','native']};}};
    /*Begin dynamic block*/
    $$attr.$native=$$attr.n$32315;/*End dynamic block*/
    return $$attr;
}
Attr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:AttrAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','Attr']};};
exports.Attr=Attr;
function $init$Attr(){
    if (Attr.$$===undefined){
        $$$cl32209.initTypeProto(Attr,'ceylon.js.dom::Attr',$init$AttrAbs());
        (function($$attr){
            
            //AttributeDeclaration native at attr.ceylon (43:1-43:29)
            $$$cl32209.defineAttr($$attr,'n$32315',function(){return this.n$32315_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Attr,d:['ceylon.js.dom','Attr','$at','n']};});
        })(Attr.$$.prototype);
    }
    return Attr;
}
exports.$init$Attr=$init$Attr;
$init$Attr();

//ClassDefinition StyleSheetListAbs at stylesheetlist.ceylon (3:0-21:0)
function StyleSheetListAbs$stylesheets($$styleSheetListAbs){
    $init$StyleSheetListAbs$stylesheets();
    if ($$styleSheetListAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$styleSheetListAbs);
    return $$styleSheetListAbs;
}
StyleSheetListAbs$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom.stylesheets','StyleSheetListAbs']};};
exports.StyleSheetListAbs$stylesheets=StyleSheetListAbs$stylesheets;
function $init$StyleSheetListAbs$stylesheets(){
    if (StyleSheetListAbs$stylesheets.$$===undefined){
        $$$cl32209.initTypeProto(StyleSheetListAbs$stylesheets,'ceylon.js.dom.stylesheets::StyleSheetListAbs',$$$cjl32280.JSObjectAbs);
        (function($$styleSheetListAbs){
            
            //MethodDefinition length at stylesheetlist.ceylon (5:1-9:1)
            $$styleSheetListAbs.length=function length(){
                var $$styleSheetListAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$styleSheetListAbs.$native.length);
                /*End dynamic block*/
            };$$styleSheetListAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:StyleSheetListAbs$stylesheets,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','length']};};
            
            //MethodDefinition item at stylesheetlist.ceylon (11:1-20:1)
            $$styleSheetListAbs.item=function item(index$32316){
                var $$styleSheetListAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration element at stylesheetlist.ceylon (13:3-13:39)
                var element$32317=$$styleSheetListAbs.$native.item(/*NULL PARAM!*/index$32316);
                $prop$getElement$32317={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','item','$at','element']};}};
                $prop$getElement$32317.get=function(){return element$32317};
                if((tmpvar$32318=element$32317,tmpvar$32319=null,(tmpvar$32318.equals&&!tmpvar$32318.equals(tmpvar$32319))||tmpvar$32318!==tmpvar$32319)){
                    return StyleSheet$stylesheets(element$32317);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$styleSheetListAbs.item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:StyleSheet$stylesheets}]},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}}],$cont:StyleSheetListAbs$stylesheets,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','item']};};
        })(StyleSheetListAbs$stylesheets.$$.prototype);
    }
    return StyleSheetListAbs$stylesheets;
}
exports.$init$StyleSheetListAbs$stylesheets=$init$StyleSheetListAbs$stylesheets;
$init$StyleSheetListAbs$stylesheets();

//ClassDefinition StyleSheetList at stylesheetlist.ceylon (23:0-28:0)
function StyleSheetList$stylesheets(n$32320, $$styleSheetList){
    $init$StyleSheetList$stylesheets();
    if ($$styleSheetList===undefined)$$styleSheetList=new StyleSheetList$stylesheets.$$;
    $$styleSheetList.n$32320_=n$32320;
    StyleSheetListAbs$stylesheets($$styleSheetList);
    
    //AttributeDeclaration native at stylesheetlist.ceylon (24:1-24:29)
    $$styleSheetList.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:StyleSheetList$stylesheets,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom.stylesheets','StyleSheetList','$at','native']};}};
    /*Begin dynamic block*/
    $$styleSheetList.$native=$$styleSheetList.n$32320;/*End dynamic block*/
    return $$styleSheetList;
}
StyleSheetList$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:StyleSheetListAbs$stylesheets},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetList']};};
exports.StyleSheetList$stylesheets=StyleSheetList$stylesheets;
function $init$StyleSheetList$stylesheets(){
    if (StyleSheetList$stylesheets.$$===undefined){
        $$$cl32209.initTypeProto(StyleSheetList$stylesheets,'ceylon.js.dom.stylesheets::StyleSheetList',$init$StyleSheetListAbs$stylesheets());
        (function($$styleSheetList){
            
            //AttributeDeclaration native at stylesheetlist.ceylon (24:1-24:29)
            $$$cl32209.defineAttr($$styleSheetList,'n$32320',function(){return this.n$32320_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:StyleSheetList$stylesheets,d:['ceylon.js.dom.stylesheets','StyleSheetList','$at','n']};});
        })(StyleSheetList$stylesheets.$$.prototype);
    }
    return StyleSheetList$stylesheets;
}
exports.$init$StyleSheetList$stylesheets=$init$StyleSheetList$stylesheets;
$init$StyleSheetList$stylesheets();
var $$$cjh32330=require('ceylon/js/html/5.0.0/ceylon.js.html-5.0.0');
$$$cl32209.$addmod$($$$cjh32330,'ceylon.js.html/5.0.0');

//ClassDefinition DocumentPosition at document.ceylon (5:0-7:80)
function DocumentPosition(name$32331, $$documentPosition){
    $init$DocumentPosition();
    if ($$documentPosition===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$documentPosition.name$32331_=name$32331;
    return $$documentPosition;
}
DocumentPosition.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','DocumentPosition']};};
exports.DocumentPosition=DocumentPosition;
function $init$DocumentPosition(){
    if (DocumentPosition.$$===undefined){
        $$$cl32209.initTypeProto(DocumentPosition,'ceylon.js.dom::DocumentPosition',$$$cl32209.Basic);
        (function($$documentPosition){
            $$$cl32209.defineAttr($$documentPosition,'name$32331',function(){return this.name$32331_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$cont:DocumentPosition,d:['ceylon.js.dom','DocumentPosition','$at','name']};});
        })(DocumentPosition.$$.prototype);
    }
    return DocumentPosition;
}
exports.$init$DocumentPosition=$init$DocumentPosition;
$init$DocumentPosition();

//ObjectDefinition documentPositionContainedBy at document.ceylon (9:0-9:99)
function documentPositionContainedBy$32332(){
    var $$documentPositionContainedBy=new documentPositionContainedBy$32332.$$;
    DocumentPosition($$$cl32209.String("documentPositionContainedBy",27),$$documentPositionContainedBy);
    return $$documentPositionContainedBy;
}
function $init$documentPositionContainedBy$32332(){
    if (documentPositionContainedBy$32332.$$===undefined){
        $$$cl32209.initTypeProto(documentPositionContainedBy$32332,'ceylon.js.dom::documentPositionContainedBy',$init$DocumentPosition());
    }
    return documentPositionContainedBy$32332;
}
exports.$init$documentPositionContainedBy$32332=$init$documentPositionContainedBy$32332;
$init$documentPositionContainedBy$32332();
var documentPositionContainedBy$32333;
function getDocumentPositionContainedBy(){
    if (documentPositionContainedBy$32333===undefined)documentPositionContainedBy$32333=$init$documentPositionContainedBy$32332()();
    return documentPositionContainedBy$32333;
}
exports.getDocumentPositionContainedBy=getDocumentPositionContainedBy;
getDocumentPositionContainedBy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionContainedBy$32332},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','documentPositionContainedBy']};};
$prop$getDocumentPositionContainedBy={get:getDocumentPositionContainedBy,$$metamodel$$:getDocumentPositionContainedBy.$$metamodel$$};
exports.$prop$getDocumentPositionContainedBy=$prop$getDocumentPositionContainedBy;

//ObjectDefinition documentPositionContains at document.ceylon (10:0-10:93)
function documentPositionContains$32334(){
    var $$documentPositionContains=new documentPositionContains$32334.$$;
    DocumentPosition($$$cl32209.String("documentPositionContains",24),$$documentPositionContains);
    return $$documentPositionContains;
}
function $init$documentPositionContains$32334(){
    if (documentPositionContains$32334.$$===undefined){
        $$$cl32209.initTypeProto(documentPositionContains$32334,'ceylon.js.dom::documentPositionContains',$init$DocumentPosition());
    }
    return documentPositionContains$32334;
}
exports.$init$documentPositionContains$32334=$init$documentPositionContains$32334;
$init$documentPositionContains$32334();
var documentPositionContains$32335;
function getDocumentPositionContains(){
    if (documentPositionContains$32335===undefined)documentPositionContains$32335=$init$documentPositionContains$32334()();
    return documentPositionContains$32335;
}
exports.getDocumentPositionContains=getDocumentPositionContains;
getDocumentPositionContains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionContains$32334},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','documentPositionContains']};};
$prop$getDocumentPositionContains={get:getDocumentPositionContains,$$metamodel$$:getDocumentPositionContains.$$metamodel$$};
exports.$prop$getDocumentPositionContains=$prop$getDocumentPositionContains;

//ObjectDefinition documentPositionDisconnected at document.ceylon (11:0-11:101)
function documentPositionDisconnected$32336(){
    var $$documentPositionDisconnected=new documentPositionDisconnected$32336.$$;
    DocumentPosition($$$cl32209.String("documentPositionDisconnected",28),$$documentPositionDisconnected);
    return $$documentPositionDisconnected;
}
function $init$documentPositionDisconnected$32336(){
    if (documentPositionDisconnected$32336.$$===undefined){
        $$$cl32209.initTypeProto(documentPositionDisconnected$32336,'ceylon.js.dom::documentPositionDisconnected',$init$DocumentPosition());
    }
    return documentPositionDisconnected$32336;
}
exports.$init$documentPositionDisconnected$32336=$init$documentPositionDisconnected$32336;
$init$documentPositionDisconnected$32336();
var documentPositionDisconnected$32337;
function getDocumentPositionDisconnected(){
    if (documentPositionDisconnected$32337===undefined)documentPositionDisconnected$32337=$init$documentPositionDisconnected$32336()();
    return documentPositionDisconnected$32337;
}
exports.getDocumentPositionDisconnected=getDocumentPositionDisconnected;
getDocumentPositionDisconnected.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionDisconnected$32336},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','documentPositionDisconnected']};};
$prop$getDocumentPositionDisconnected={get:getDocumentPositionDisconnected,$$metamodel$$:getDocumentPositionDisconnected.$$metamodel$$};
exports.$prop$getDocumentPositionDisconnected=$prop$getDocumentPositionDisconnected;

//ObjectDefinition documentPositionFollowing at document.ceylon (12:0-12:95)
function documentPositionFollowing$32338(){
    var $$documentPositionFollowing=new documentPositionFollowing$32338.$$;
    DocumentPosition($$$cl32209.String("documentPositionFollowing",25),$$documentPositionFollowing);
    return $$documentPositionFollowing;
}
function $init$documentPositionFollowing$32338(){
    if (documentPositionFollowing$32338.$$===undefined){
        $$$cl32209.initTypeProto(documentPositionFollowing$32338,'ceylon.js.dom::documentPositionFollowing',$init$DocumentPosition());
    }
    return documentPositionFollowing$32338;
}
exports.$init$documentPositionFollowing$32338=$init$documentPositionFollowing$32338;
$init$documentPositionFollowing$32338();
var documentPositionFollowing$32339;
function getDocumentPositionFollowing(){
    if (documentPositionFollowing$32339===undefined)documentPositionFollowing$32339=$init$documentPositionFollowing$32338()();
    return documentPositionFollowing$32339;
}
exports.getDocumentPositionFollowing=getDocumentPositionFollowing;
getDocumentPositionFollowing.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionFollowing$32338},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','documentPositionFollowing']};};
$prop$getDocumentPositionFollowing={get:getDocumentPositionFollowing,$$metamodel$$:getDocumentPositionFollowing.$$metamodel$$};
exports.$prop$getDocumentPositionFollowing=$prop$getDocumentPositionFollowing;

//ObjectDefinition documentPositionImplementationSpecific at document.ceylon (13:0-13:121)
function documentPositionImplementationSpecific$32340(){
    var $$documentPositionImplementationSpecific=new documentPositionImplementationSpecific$32340.$$;
    DocumentPosition($$$cl32209.String("documentPositionImplementationSpecific",38),$$documentPositionImplementationSpecific);
    return $$documentPositionImplementationSpecific;
}
function $init$documentPositionImplementationSpecific$32340(){
    if (documentPositionImplementationSpecific$32340.$$===undefined){
        $$$cl32209.initTypeProto(documentPositionImplementationSpecific$32340,'ceylon.js.dom::documentPositionImplementationSpecific',$init$DocumentPosition());
    }
    return documentPositionImplementationSpecific$32340;
}
exports.$init$documentPositionImplementationSpecific$32340=$init$documentPositionImplementationSpecific$32340;
$init$documentPositionImplementationSpecific$32340();
var documentPositionImplementationSpecific$32341;
function getDocumentPositionImplementationSpecific(){
    if (documentPositionImplementationSpecific$32341===undefined)documentPositionImplementationSpecific$32341=$init$documentPositionImplementationSpecific$32340()();
    return documentPositionImplementationSpecific$32341;
}
exports.getDocumentPositionImplementationSpecific=getDocumentPositionImplementationSpecific;
getDocumentPositionImplementationSpecific.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionImplementationSpecific$32340},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','documentPositionImplementationSpecific']};};
$prop$getDocumentPositionImplementationSpecific={get:getDocumentPositionImplementationSpecific,$$metamodel$$:getDocumentPositionImplementationSpecific.$$metamodel$$};
exports.$prop$getDocumentPositionImplementationSpecific=$prop$getDocumentPositionImplementationSpecific;

//ObjectDefinition documentPositionPreceding at document.ceylon (14:0-14:95)
function documentPositionPreceding$32342(){
    var $$documentPositionPreceding=new documentPositionPreceding$32342.$$;
    DocumentPosition($$$cl32209.String("documentPositionPreceding",25),$$documentPositionPreceding);
    return $$documentPositionPreceding;
}
function $init$documentPositionPreceding$32342(){
    if (documentPositionPreceding$32342.$$===undefined){
        $$$cl32209.initTypeProto(documentPositionPreceding$32342,'ceylon.js.dom::documentPositionPreceding',$init$DocumentPosition());
    }
    return documentPositionPreceding$32342;
}
exports.$init$documentPositionPreceding$32342=$init$documentPositionPreceding$32342;
$init$documentPositionPreceding$32342();
var documentPositionPreceding$32343;
function getDocumentPositionPreceding(){
    if (documentPositionPreceding$32343===undefined)documentPositionPreceding$32343=$init$documentPositionPreceding$32342()();
    return documentPositionPreceding$32343;
}
exports.getDocumentPositionPreceding=getDocumentPositionPreceding;
getDocumentPositionPreceding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionPreceding$32342},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','documentPositionPreceding']};};
$prop$getDocumentPositionPreceding={get:getDocumentPositionPreceding,$$metamodel$$:getDocumentPositionPreceding.$$metamodel$$};
exports.$prop$getDocumentPositionPreceding=$prop$getDocumentPositionPreceding;

//ClassDefinition CompatMode at document.ceylon (16:0-16:74)
function CompatMode(name$32344, $$compatMode){
    $init$CompatMode();
    if ($$compatMode===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$compatMode.name$32344_=name$32344;
    return $$compatMode;
}
CompatMode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','CompatMode']};};
exports.CompatMode=CompatMode;
function $init$CompatMode(){
    if (CompatMode.$$===undefined){
        $$$cl32209.initTypeProto(CompatMode,'ceylon.js.dom::CompatMode',$$$cl32209.Basic);
        (function($$compatMode){
            $$$cl32209.defineAttr($$compatMode,'name$32344',function(){return this.name$32344_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$cont:CompatMode,d:['ceylon.js.dom','CompatMode','$at','name']};});
        })(CompatMode.$$.prototype);
    }
    return CompatMode;
}
exports.$init$CompatMode=$init$CompatMode;
$init$CompatMode();

//ObjectDefinition css1Compat at document.ceylon (18:0-18:59)
function css1Compat$32345(){
    var $$css1Compat=new css1Compat$32345.$$;
    CompatMode($$$cl32209.String("CSS1Compat",10),$$css1Compat);
    return $$css1Compat;
}
function $init$css1Compat$32345(){
    if (css1Compat$32345.$$===undefined){
        $$$cl32209.initTypeProto(css1Compat$32345,'ceylon.js.dom::css1Compat',$init$CompatMode());
    }
    return css1Compat$32345;
}
exports.$init$css1Compat$32345=$init$css1Compat$32345;
$init$css1Compat$32345();
var css1Compat$32346;
function getCss1Compat(){
    if (css1Compat$32346===undefined)css1Compat$32346=$init$css1Compat$32345()();
    return css1Compat$32346;
}
exports.getCss1Compat=getCss1Compat;
getCss1Compat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:css1Compat$32345},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','css1Compat']};};
$prop$getCss1Compat={get:getCss1Compat,$$metamodel$$:getCss1Compat.$$metamodel$$};
exports.$prop$getCss1Compat=$prop$getCss1Compat;

//ObjectDefinition backCompat at document.ceylon (19:0-19:59)
function backCompat$32347(){
    var $$backCompat=new backCompat$32347.$$;
    CompatMode($$$cl32209.String("BackCompat",10),$$backCompat);
    return $$backCompat;
}
function $init$backCompat$32347(){
    if (backCompat$32347.$$===undefined){
        $$$cl32209.initTypeProto(backCompat$32347,'ceylon.js.dom::backCompat',$init$CompatMode());
    }
    return backCompat$32347;
}
exports.$init$backCompat$32347=$init$backCompat$32347;
$init$backCompat$32347();
var backCompat$32348;
function getBackCompat(){
    if (backCompat$32348===undefined)backCompat$32348=$init$backCompat$32347()();
    return backCompat$32348;
}
exports.getBackCompat=getBackCompat;
getBackCompat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:backCompat$32347},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','backCompat']};};
$prop$getBackCompat={get:getBackCompat,$$metamodel$$:getBackCompat.$$metamodel$$};
exports.$prop$getBackCompat=$prop$getBackCompat;

//ClassDefinition DocumentDirection at document.ceylon (21:0-21:67)
function DocumentDirection(name$32349, $$documentDirection){
    $init$DocumentDirection();
    if ($$documentDirection===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$documentDirection.name$32349_=name$32349;
    return $$documentDirection;
}
DocumentDirection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','DocumentDirection']};};
exports.DocumentDirection=DocumentDirection;
function $init$DocumentDirection(){
    if (DocumentDirection.$$===undefined){
        $$$cl32209.initTypeProto(DocumentDirection,'ceylon.js.dom::DocumentDirection',$$$cl32209.Basic);
        (function($$documentDirection){
            $$$cl32209.defineAttr($$documentDirection,'name$32349',function(){return this.name$32349_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$cont:DocumentDirection,d:['ceylon.js.dom','DocumentDirection','$at','name']};});
        })(DocumentDirection.$$.prototype);
    }
    return DocumentDirection;
}
exports.$init$DocumentDirection=$init$DocumentDirection;
$init$DocumentDirection();

//ObjectDefinition rtl at document.ceylon (23:0-23:52)
function rtl$32350(){
    var $$rtl=new rtl$32350.$$;
    DocumentDirection($$$cl32209.String("rtl",3),$$rtl);
    return $$rtl;
}
function $init$rtl$32350(){
    if (rtl$32350.$$===undefined){
        $$$cl32209.initTypeProto(rtl$32350,'ceylon.js.dom::rtl',$init$DocumentDirection());
    }
    return rtl$32350;
}
exports.$init$rtl$32350=$init$rtl$32350;
$init$rtl$32350();
var rtl$32351;
function getRtl(){
    if (rtl$32351===undefined)rtl$32351=$init$rtl$32350()();
    return rtl$32351;
}
exports.getRtl=getRtl;
getRtl.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:rtl$32350},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','rtl']};};
$prop$getRtl={get:getRtl,$$metamodel$$:getRtl.$$metamodel$$};
exports.$prop$getRtl=$prop$getRtl;

//ObjectDefinition ltr at document.ceylon (24:0-24:52)
function ltr$32352(){
    var $$ltr=new ltr$32352.$$;
    DocumentDirection($$$cl32209.String("ltr",3),$$ltr);
    return $$ltr;
}
function $init$ltr$32352(){
    if (ltr$32352.$$===undefined){
        $$$cl32209.initTypeProto(ltr$32352,'ceylon.js.dom::ltr',$init$DocumentDirection());
    }
    return ltr$32352;
}
exports.$init$ltr$32352=$init$ltr$32352;
$init$ltr$32352();
var ltr$32353;
function getLtr(){
    if (ltr$32353===undefined)ltr$32353=$init$ltr$32352()();
    return ltr$32353;
}
exports.getLtr=getLtr;
getLtr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ltr$32352},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','ltr']};};
$prop$getLtr={get:getLtr,$$metamodel$$:getLtr.$$metamodel$$};
exports.$prop$getLtr=$prop$getLtr;

//ClassDefinition DocumentReadyState at document.ceylon (26:0-26:91)
function DocumentReadyState(name$32354, $$documentReadyState){
    $init$DocumentReadyState();
    if ($$documentReadyState===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$documentReadyState.name$32354_=name$32354;
    return $$documentReadyState;
}
DocumentReadyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','DocumentReadyState']};};
exports.DocumentReadyState=DocumentReadyState;
function $init$DocumentReadyState(){
    if (DocumentReadyState.$$===undefined){
        $$$cl32209.initTypeProto(DocumentReadyState,'ceylon.js.dom::DocumentReadyState',$$$cl32209.Basic);
        (function($$documentReadyState){
            $$$cl32209.defineAttr($$documentReadyState,'name$32354',function(){return this.name$32354_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$cont:DocumentReadyState,d:['ceylon.js.dom','DocumentReadyState','$at','name']};});
        })(DocumentReadyState.$$.prototype);
    }
    return DocumentReadyState;
}
exports.$init$DocumentReadyState=$init$DocumentReadyState;
$init$DocumentReadyState();

//ObjectDefinition loading at document.ceylon (28:0-28:61)
function loading$32355(){
    var $$loading=new loading$32355.$$;
    DocumentReadyState($$$cl32209.String("loading",7),$$loading);
    return $$loading;
}
function $init$loading$32355(){
    if (loading$32355.$$===undefined){
        $$$cl32209.initTypeProto(loading$32355,'ceylon.js.dom::loading',$init$DocumentReadyState());
    }
    return loading$32355;
}
exports.$init$loading$32355=$init$loading$32355;
$init$loading$32355();
var loading$32356;
function getLoading(){
    if (loading$32356===undefined)loading$32356=$init$loading$32355()();
    return loading$32356;
}
exports.getLoading=getLoading;
getLoading.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:loading$32355},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','loading']};};
$prop$getLoading={get:getLoading,$$metamodel$$:getLoading.$$metamodel$$};
exports.$prop$getLoading=$prop$getLoading;

//ObjectDefinition interactive at document.ceylon (29:0-29:69)
function interactive$32357(){
    var $$interactive=new interactive$32357.$$;
    DocumentReadyState($$$cl32209.String("interactive",11),$$interactive);
    return $$interactive;
}
function $init$interactive$32357(){
    if (interactive$32357.$$===undefined){
        $$$cl32209.initTypeProto(interactive$32357,'ceylon.js.dom::interactive',$init$DocumentReadyState());
    }
    return interactive$32357;
}
exports.$init$interactive$32357=$init$interactive$32357;
$init$interactive$32357();
var interactive$32358;
function getInteractive(){
    if (interactive$32358===undefined)interactive$32358=$init$interactive$32357()();
    return interactive$32358;
}
exports.getInteractive=getInteractive;
getInteractive.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:interactive$32357},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','interactive']};};
$prop$getInteractive={get:getInteractive,$$metamodel$$:getInteractive.$$metamodel$$};
exports.$prop$getInteractive=$prop$getInteractive;

//ObjectDefinition complete at document.ceylon (30:0-30:63)
function complete$32359(){
    var $$complete=new complete$32359.$$;
    DocumentReadyState($$$cl32209.String("complete",8),$$complete);
    return $$complete;
}
function $init$complete$32359(){
    if (complete$32359.$$===undefined){
        $$$cl32209.initTypeProto(complete$32359,'ceylon.js.dom::complete',$init$DocumentReadyState());
    }
    return complete$32359;
}
exports.$init$complete$32359=$init$complete$32359;
$init$complete$32359();
var complete$32360;
function getComplete(){
    if (complete$32360===undefined)complete$32360=$init$complete$32359()();
    return complete$32360;
}
exports.getComplete=getComplete;
getComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:complete$32359},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','complete']};};
$prop$getComplete={get:getComplete,$$metamodel$$:getComplete.$$metamodel$$};
exports.$prop$getComplete=$prop$getComplete;

//ClassDefinition DocumentAbs at document.ceylon (32:0-766:0)
function DocumentAbs($$documentAbs){
    $init$DocumentAbs();
    if ($$documentAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$documentAbs);
    return $$documentAbs;
}
DocumentAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','DocumentAbs']};};
exports.DocumentAbs=DocumentAbs;
function $init$DocumentAbs(){
    if (DocumentAbs.$$===undefined){
        $$$cl32209.initTypeProto(DocumentAbs,'ceylon.js.dom::DocumentAbs',$init$NodeAbs());
        (function($$documentAbs){
            
            //MethodDefinition activeElement at document.ceylon (34:1-38:1)
            $$documentAbs.activeElement=function activeElement(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.activeElement);
                /*End dynamic block*/
            };$$documentAbs.activeElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','activeElement']};};
            
            //MethodDefinition adoptNode at document.ceylon (40:1-44:1)
            $$documentAbs.adoptNode=function adoptNode(node$32361){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return Node($$documentAbs.$native.adoptNode(/*NULL PARAM!*/node$32361.$native));
                /*End dynamic block*/
            };$$documentAbs.adoptNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','adoptNode']};};
            
            //MethodDefinition createRange at document.ceylon (46:1-50:1)
            $$documentAbs.createRange=function createRange(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return Range($$documentAbs.$native.createRange());
                /*End dynamic block*/
            };$$documentAbs.createRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Range},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createRange']};};
            
            //MethodDefinition createAttribute at document.ceylon (52:4-64:1)
            $$documentAbs.createAttribute=function createAttribute(name$32362){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (53:2-63:2)
                var case$32363=name$32362;
                if ($$$cl32209.isOfType(name$32362,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return Attr($$documentAbs.$native.createAttribute(/*NULL PARAM!*/case$32363.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(name$32362,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    return Attr($$documentAbs.$native.createAttribute(/*NULL PARAM!*/case$32363.$native));
                    /*End dynamic block*/
                }//End switch statement at document.ceylon (53:2-63:2)
            };$$documentAbs.createAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Attr},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createAttribute']};};
            
            //MethodDefinition url at document.ceylon (66:1-70:1)
            $$documentAbs.url=function url(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$documentAbs.$native.URL);
                /*End dynamic block*/
            };$$documentAbs.url.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','url']};};
            
            //MethodDefinition createAttributeNS at document.ceylon (72:4-113:1)
            $$documentAbs.createAttributeNS=function createAttributeNS(namespace$32364,name$32365){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (73:2-112:2)
                var case$32366=namespace$32364;
                if ($$$cl32209.isOfType(namespace$32364,{t:$$$cl32209.String})) {
                    //Switch statement at document.ceylon (75:3-85:3)
                    var case$32367=name$32365;
                    if ($$$cl32209.isOfType(name$32365,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/case$32366.valueOf()/*NULL PARAM!*/,case$32367.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(name$32365,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/case$32366.valueOf()/*NULL PARAM!*/,case$32367.$native));
                        /*End dynamic block*/
                    }//End switch statement at document.ceylon (75:3-85:3)
                }else if ($$$cl32209.isOfType(namespace$32364,{t:$$$cjl32280.JSString})) {
                    //Switch statement at document.ceylon (88:3-98:3)
                    var case$32368=name$32365;
                    if ($$$cl32209.isOfType(name$32365,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/case$32366.$native/*NULL PARAM!*/,case$32368.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(name$32365,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/case$32366.$native/*NULL PARAM!*/,case$32368.$native));
                        /*End dynamic block*/
                    }//End switch statement at document.ceylon (88:3-98:3)
                }else if ($$$cl32209.isOfType(namespace$32364,{t:$$$cl32209.Null})) {
                    //Switch statement at document.ceylon (101:3-111:3)
                    var case$32369=name$32365;
                    if ($$$cl32209.isOfType(name$32365,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/null/*NULL PARAM!*/,case$32369.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(name$32365,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/null/*NULL PARAM!*/,case$32369.$native));
                        /*End dynamic block*/
                    }//End switch statement at document.ceylon (101:3-111:3)
                }//End switch statement at document.ceylon (73:2-112:2)
            };$$documentAbs.createAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Attr},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createAttributeNS']};};
            
            //MethodDefinition createCDATASection at document.ceylon (115:4-127:1)
            $$documentAbs.createCDATASection=function createCDATASection(data$32370){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (116:2-126:2)
                var case$32371=data$32370;
                if ($$$cl32209.isOfType(data$32370,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return CDATASection($$documentAbs.$native.createCDATASection(/*NULL PARAM!*/case$32371.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(data$32370,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    return CDATASection($$documentAbs.$native.createCDATASection(/*NULL PARAM!*/case$32371.$native));
                    /*End dynamic block*/
                }//End switch statement at document.ceylon (116:2-126:2)
            };$$documentAbs.createCDATASection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:CDATASection},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createCDATASection']};};
            
            //MethodDefinition createComment at document.ceylon (129:4-141:1)
            $$documentAbs.createComment=function createComment(data$32372){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (130:2-140:2)
                var case$32373=data$32372;
                if ($$$cl32209.isOfType(data$32372,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return Comment($$documentAbs.$native.createComment(/*NULL PARAM!*/case$32373.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(data$32372,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    return Comment($$documentAbs.$native.createComment(/*NULL PARAM!*/case$32373.$native));
                    /*End dynamic block*/
                }//End switch statement at document.ceylon (130:2-140:2)
            };$$documentAbs.createComment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Comment},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createComment']};};
            
            //MethodDefinition createDocumentFragment at document.ceylon (143:4-147:1)
            $$documentAbs.createDocumentFragment=function createDocumentFragment(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return DocumentFragment($$documentAbs.$native.createDocumentFragment());
                /*End dynamic block*/
            };$$documentAbs.createDocumentFragment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentFragment},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createDocumentFragment']};};
            
            //MethodDefinition createElement at document.ceylon (149:4-161:1)
            $$documentAbs.createElement=function createElement(tagName$32374){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (150:2-160:2)
                var case$32375=tagName$32374;
                if ($$$cl32209.isOfType(tagName$32374,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return Element($$documentAbs.$native.createElement(/*NULL PARAM!*/case$32375.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(tagName$32374,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    return Element($$documentAbs.$native.createElement(/*NULL PARAM!*/case$32375.$native));
                    /*End dynamic block*/
                }//End switch statement at document.ceylon (150:2-160:2)
            };$$documentAbs.createElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'tagName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createElement']};};
            
            //MethodDefinition createElementNS at document.ceylon (163:4-191:1)
            $$documentAbs.createElementNS=function createElementNS(namespaceURI$32376,qualifiedName$32377){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (164:2-190:2)
                var case$32378=namespaceURI$32376;
                if ($$$cl32209.isOfType(namespaceURI$32376,{t:$$$cl32209.String})) {
                    //Switch statement at document.ceylon (166:3-176:3)
                    var case$32379=qualifiedName$32377;
                    if ($$$cl32209.isOfType(qualifiedName$32377,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        return Element($$documentAbs.$native.createElementNS(/*NULL PARAM!*/case$32378.valueOf()/*NULL PARAM!*/,case$32379.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(qualifiedName$32377,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        return Element($$documentAbs.$native.createElementNS(/*NULL PARAM!*/case$32378.valueOf()/*NULL PARAM!*/,case$32379.$native));
                        /*End dynamic block*/
                    }//End switch statement at document.ceylon (166:3-176:3)
                }else if ($$$cl32209.isOfType(namespaceURI$32376,{t:$$$cjl32280.JSString})) {
                    //Switch statement at document.ceylon (179:3-189:3)
                    var case$32380=qualifiedName$32377;
                    if ($$$cl32209.isOfType(qualifiedName$32377,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        return Element($$documentAbs.$native.createElementNS(/*NULL PARAM!*/case$32378/*NULL PARAM!*/,case$32380.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(qualifiedName$32377,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        return Element($$documentAbs.$native.createElementNS(/*NULL PARAM!*/case$32378.$native/*NULL PARAM!*/,case$32380.$native));
                        /*End dynamic block*/
                    }//End switch statement at document.ceylon (179:3-189:3)
                }//End switch statement at document.ceylon (164:2-190:2)
            };$$documentAbs.createElementNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'qualifiedName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createElementNS']};};
            
            //MethodDefinition createProcessingInstruction at document.ceylon (193:4-221:1)
            $$documentAbs.createProcessingInstruction=function createProcessingInstruction(target$32381,data$32382){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (194:2-220:2)
                var case$32383=target$32381;
                if ($$$cl32209.isOfType(target$32381,{t:$$$cl32209.String})) {
                    //Switch statement at document.ceylon (196:3-206:3)
                    var case$32384=data$32382;
                    if ($$$cl32209.isOfType(data$32382,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(/*NULL PARAM!*/case$32383.valueOf()/*NULL PARAM!*/,case$32384.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(data$32382,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(/*NULL PARAM!*/case$32383.valueOf()/*NULL PARAM!*/,case$32384.$native));
                        /*End dynamic block*/
                    }//End switch statement at document.ceylon (196:3-206:3)
                }else if ($$$cl32209.isOfType(target$32381,{t:$$$cjl32280.JSString})) {
                    //Switch statement at document.ceylon (209:3-219:3)
                    var case$32385=data$32382;
                    if ($$$cl32209.isOfType(data$32382,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(/*NULL PARAM!*/case$32383.$native/*NULL PARAM!*/,case$32385.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(data$32382,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(/*NULL PARAM!*/case$32383.$native/*NULL PARAM!*/,case$32385.$native));
                        /*End dynamic block*/
                    }//End switch statement at document.ceylon (209:3-219:3)
                }//End switch statement at document.ceylon (194:2-220:2)
            };$$documentAbs.createProcessingInstruction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ProcessingInstruction},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createProcessingInstruction']};};
            
            //MethodDefinition createTextNode at document.ceylon (223:4-235:1)
            $$documentAbs.createTextNode=function createTextNode(data$32386){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (224:2-234:2)
                var case$32387=data$32386;
                if ($$$cl32209.isOfType(data$32386,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return Text($$documentAbs.$native.createTextNode(/*NULL PARAM!*/case$32387.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(data$32386,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    return Text($$documentAbs.$native.createTextNode(/*NULL PARAM!*/case$32387.$native));
                    /*End dynamic block*/
                }//End switch statement at document.ceylon (224:2-234:2)
            };$$documentAbs.createTextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Text},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createTextNode']};};
            
            //MethodDefinition doctype at document.ceylon (237:4-246:1)
            $$documentAbs.doctype=function doctype(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration doctype at document.ceylon (239:3-239:35)
                var doctype$32388=$$documentAbs.$native.doctype;
                $prop$getDoctype$32388={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','DocumentAbs','$m','doctype','$at','doctype']};}};
                $prop$getDoctype$32388.get=function(){return doctype$32388};
                if((tmpvar$32389=doctype$32388,tmpvar$32390=null,(tmpvar$32389.equals&&!tmpvar$32389.equals(tmpvar$32390))||tmpvar$32389!==tmpvar$32390)){
                    return DocumentType(doctype$32388);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$documentAbs.doctype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:DocumentType}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','doctype']};};
            
            //MethodDefinition documentElement at document.ceylon (248:4-257:1)
            $$documentAbs.documentElement=function documentElement(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration element at document.ceylon (250:3-250:43)
                var element$32391=$$documentAbs.$native.documentElement;
                $prop$getElement$32391={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','DocumentAbs','$m','documentElement','$at','element']};}};
                $prop$getElement$32391.get=function(){return element$32391};
                if((tmpvar$32392=element$32391,tmpvar$32393=null,(tmpvar$32392.equals&&!tmpvar$32392.equals(tmpvar$32393))||tmpvar$32392!==tmpvar$32393)){
                    return Element(element$32391);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$documentAbs.documentElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Element}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','documentElement']};};
            
            //MethodDefinition documentURI at document.ceylon (259:4-263:1)
            $$documentAbs.documentURI=function documentURI(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$documentAbs.$native.documentURI);
                /*End dynamic block*/
            };$$documentAbs.documentURI.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','documentURI']};};
            
            //MethodDefinition compatMode at document.ceylon (265:1-273:1)
            $$documentAbs.compatMode=function compatMode(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$32394=$$documentAbs.$native.compatMode,tmpvar$32395=$$$cl32209.String("BackCompat",10),(tmpvar$32394.equals&&tmpvar$32394.equals(tmpvar$32395))||tmpvar$32394===tmpvar$32395)){
                    return getBackCompat();
                }else {
                    return getCss1Compat();
                }/*End dynamic block*/
            };$$documentAbs.compatMode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:CompatMode},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','compatMode']};};
            
            //MethodDefinition characterSet at document.ceylon (275:1-279:1)
            $$documentAbs.characterSet=function characterSet(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$documentAbs.$native.characterSet);
                /*End dynamic block*/
            };$$documentAbs.characterSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','characterSet']};};
            
            //MethodDefinition getElementById at document.ceylon (281:4-301:1)
            $$documentAbs.getElementById=function getElementById(id$32396){
                var $$documentAbs=this;
                
                //AttributeDeclaration element at document.ceylon (282:2-282:17)
                var element$32397;
                //Switch statement at document.ceylon (283:2-293:2)
                var case$32398=id$32396;
                if ($$$cl32209.isOfType(id$32396,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    element$32397=$$documentAbs.$native.getElementById(/*NULL PARAM!*/case$32398.valueOf());/*End dynamic block*/
                }else if ($$$cl32209.isOfType(id$32396,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    element$32397=$$documentAbs.$native.getElementById(/*NULL PARAM!*/case$32398.$native);/*End dynamic block*/
                }//End switch statement at document.ceylon (283:2-293:2)
                /*Begin dynamic block*/
                if((tmpvar$32399=element$32397,tmpvar$32400=null,(tmpvar$32399.equals&&!tmpvar$32399.equals(tmpvar$32400))||tmpvar$32399!==tmpvar$32400)){
                    return Element(element$32397);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$documentAbs.getElementById.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Element}]},$ps:[{$nm:'id',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementById']};};
            
            //MethodDefinition getElementsByTagName at document.ceylon (303:4-323:1)
            $$documentAbs.getElementsByTagName$defs$name=function(name$32401){var $$documentAbs=this;
            return $$$cl32209.String("*",1);};
            $$documentAbs.getElementsByTagName=function getElementsByTagName(name$32401){
                var $$documentAbs=this;
                if(name$32401===undefined){name$32401=$$documentAbs.getElementsByTagName$defs$name(name$32401);}
                
                //AttributeDeclaration elems at document.ceylon (304:2-304:15)
                var elems$32402;
                //Switch statement at document.ceylon (305:2-315:2)
                var case$32403=name$32401;
                if ($$$cl32209.isOfType(name$32401,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    elems$32402=$$documentAbs.$native.getElementsByTagName(/*NULL PARAM!*/case$32403.valueOf());/*End dynamic block*/
                }else if ($$$cl32209.isOfType(name$32401,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    elems$32402=$$documentAbs.$native.getElementsByTagName(/*NULL PARAM!*/case$32403.$native);/*End dynamic block*/
                }//End switch statement at document.ceylon (305:2-315:2)
                /*Begin dynamic block*/
                if(elems$32402.instanceof(/*NULL PARAM!*/(typeof HTMLCollection==='undefined'||HTMLCollection===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: HTMLCollection")),'317:26-317:39','document.ceylon'):HTMLCollection))){
                    return HTMLCollection(elems$32402);
                }else {
                    return NodeList(elems$32402);
                }/*End dynamic block*/
            };$$documentAbs.getElementsByTagName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:HTMLCollection},{t:NodeList}]},$ps:[{$nm:'name',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByTagName']};};
            
            //MethodDefinition getElementsByTagNameNS at document.ceylon (325:4-361:1)
            $$documentAbs.getElementsByTagNameNS$defs$name=function(namespace$32404,name$32405){var $$documentAbs=this;
            return $$$cl32209.String("*",1);};
            $$documentAbs.getElementsByTagNameNS=function getElementsByTagNameNS(namespace$32404,name$32405){
                var $$documentAbs=this;
                if(name$32405===undefined){name$32405=$$documentAbs.getElementsByTagNameNS$defs$name(namespace$32404,name$32405);}
                
                //AttributeDeclaration elems at document.ceylon (326:2-326:15)
                var elems$32406;
                //Switch statement at document.ceylon (327:2-353:2)
                var case$32407=namespace$32404;
                if ($$$cl32209.isOfType(namespace$32404,{t:$$$cl32209.String})) {
                    //Switch statement at document.ceylon (329:3-339:3)
                    var case$32408=name$32405;
                    if ($$$cl32209.isOfType(name$32405,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        elems$32406=$$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$32407.valueOf()/*NULL PARAM!*/,case$32408.valueOf());/*End dynamic block*/
                    }else if ($$$cl32209.isOfType(name$32405,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        elems$32406=$$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$32407.valueOf()/*NULL PARAM!*/,case$32408.$native);/*End dynamic block*/
                    }//End switch statement at document.ceylon (329:3-339:3)
                }else if ($$$cl32209.isOfType(namespace$32404,{t:$$$cjl32280.JSString})) {
                    //Switch statement at document.ceylon (342:3-352:3)
                    var case$32409=name$32405;
                    if ($$$cl32209.isOfType(name$32405,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        elems$32406=$$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$32407/*NULL PARAM!*/,case$32409.valueOf());/*End dynamic block*/
                    }else if ($$$cl32209.isOfType(name$32405,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        elems$32406=$$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$32407.$native/*NULL PARAM!*/,case$32409.$native);/*End dynamic block*/
                    }//End switch statement at document.ceylon (342:3-352:3)
                }//End switch statement at document.ceylon (327:2-353:2)
                /*Begin dynamic block*/
                if(elems$32406.instanceof(/*NULL PARAM!*/(typeof HTMLCollection==='undefined'||HTMLCollection===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: HTMLCollection")),'355:26-355:39','document.ceylon'):HTMLCollection))){
                    return HTMLCollection(elems$32406);
                }else {
                    return NodeList(elems$32406);
                }/*End dynamic block*/
            };$$documentAbs.getElementsByTagNameNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:HTMLCollection},{t:NodeList}]},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByTagNameNS']};};
            
            //MethodDefinition getElementsByClassName at document.ceylon (363:1-375:1)
            $$documentAbs.getElementsByClassName=function getElementsByClassName(names$32410){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (364:2-374:2)
                var case$32411=names$32410;
                if ($$$cl32209.isOfType(names$32410,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return HTMLCollection($$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$32411.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(names$32410,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    return HTMLCollection($$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$32411.$native));
                    /*End dynamic block*/
                }//End switch statement at document.ceylon (364:2-374:2)
            };$$documentAbs.getElementsByClassName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'names',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByClassName']};};
            
            //MethodDefinition implementation at document.ceylon (377:4-381:1)
            $$documentAbs.implementation=function implementation(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return DOMImplementation($$documentAbs.$native.implementation);
                /*End dynamic block*/
            };$$documentAbs.implementation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DOMImplementation},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','implementation']};};
            
            //MethodDefinition importNode at document.ceylon (383:4-387:1)
            $$documentAbs.importNode$defs$deep=function(externalNode$32412,deep$32413){var $$documentAbs=this;
            return true;};
            $$documentAbs.importNode=function importNode(externalNode$32412,deep$32413){
                var $$documentAbs=this;
                if(deep$32413===undefined){deep$32413=$$documentAbs.importNode$defs$deep(externalNode$32412,deep$32413);}
                /*Begin dynamic block*/
                return Node($$documentAbs.$native.importNode(/*NULL PARAM!*/externalNode$32412/*NULL PARAM!*/,deep$32413));
                /*End dynamic block*/
            };$$documentAbs.importNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'externalNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'deep',$mt:'prm',$def:1,$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','importNode']};};
            
            //MethodDefinition createNodeIterator at document.ceylon (389:1-393:1)
            $$documentAbs.createNodeIterator$defs$whatToShow=function(root$32414,whatToShow$32415,filter$32416){var $$documentAbs=this;
            return null;};
            $$documentAbs.createNodeIterator$defs$filter=function(root$32414,whatToShow$32415,filter$32416){var $$documentAbs=this;
            return null;};
            $$documentAbs.createNodeIterator=function createNodeIterator(root$32414,whatToShow$32415,filter$32416){
                var $$documentAbs=this;
                if(whatToShow$32415===undefined){whatToShow$32415=$$documentAbs.createNodeIterator$defs$whatToShow(root$32414,whatToShow$32415,filter$32416);}
                if(filter$32416===undefined){filter$32416=$$documentAbs.createNodeIterator$defs$filter(root$32414,whatToShow$32415,filter$32416);}
                /*Begin dynamic block*/
                return NodeIterator($$documentAbs.$native.createNodeIterator(/*NULL PARAM!*/root$32414/*NULL PARAM!*/,whatToShow$32415/*NULL PARAM!*/,filter$32416));
                /*End dynamic block*/
            };$$documentAbs.createNodeIterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeIterator},$ps:[{$nm:'root',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'whatToShow',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:NodeFilter}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createNodeIterator']};};
            
            //MethodDefinition createTreeWalker at document.ceylon (395:1-399:1)
            $$documentAbs.createTreeWalker$defs$whatToShow=function(root$32417,whatToShow$32418,filter$32419){var $$documentAbs=this;
            return null;};
            $$documentAbs.createTreeWalker$defs$filter=function(root$32417,whatToShow$32418,filter$32419){var $$documentAbs=this;
            return null;};
            $$documentAbs.createTreeWalker=function createTreeWalker(root$32417,whatToShow$32418,filter$32419){
                var $$documentAbs=this;
                if(whatToShow$32418===undefined){whatToShow$32418=$$documentAbs.createTreeWalker$defs$whatToShow(root$32417,whatToShow$32418,filter$32419);}
                if(filter$32419===undefined){filter$32419=$$documentAbs.createTreeWalker$defs$filter(root$32417,whatToShow$32418,filter$32419);}
                /*Begin dynamic block*/
                return TreeWalker($$documentAbs.$native.createTreeWalker(/*NULL PARAM!*/root$32417/*NULL PARAM!*/,whatToShow$32418/*NULL PARAM!*/,filter$32419));
                /*End dynamic block*/
            };$$documentAbs.createTreeWalker.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:TreeWalker},$ps:[{$nm:'root',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'whatToShow',$mt:'prm',$def:1,$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:NodeFilter}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createTreeWalker']};};
            
            //MethodDefinition anchors at document.ceylon (401:1-405:1)
            $$documentAbs.anchors=function anchors(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return NodeList($$documentAbs.$native.anchors);
                /*End dynamic block*/
            };$$documentAbs.anchors.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeList},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','anchors']};};
            
            //MethodDefinition getAsync at document.ceylon (407:1-415:1)
            $$documentAbs.getAsync=function getAsync(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                if($$documentAbs.$native.async){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$documentAbs.getAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getAsync']};};
            
            //MethodDefinition setAsync at document.ceylon (417:1-421:1)
            $$documentAbs.setAsync=function setAsync(async$32420){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                $$documentAbs.$native.async=async$32420;
                /*End dynamic block*/
            };$$documentAbs.setAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'async',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setAsync']};};
            
            //MethodDefinition body at document.ceylon (423:1-427:1)
            $$documentAbs.body=function body(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return Node($$documentAbs.$native.body);
                /*End dynamic block*/
            };$$documentAbs.body.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','body']};};
            
            //MethodDefinition getCookie at document.ceylon (429:1-433:1)
            $$documentAbs.getCookie=function getCookie(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$documentAbs.$native.cookie);
                /*End dynamic block*/
            };$$documentAbs.getCookie.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getCookie']};};
            
            //MethodDefinition setCookie at document.ceylon (435:1-447:1)
            $$documentAbs.setCookie=function setCookie(cookie$32421){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (436:2-446:2)
                var case$32422=cookie$32421;
                if ($$$cl32209.isOfType(cookie$32421,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.cookie=case$32422.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(cookie$32421,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.cookie=case$32422.$native;
                    /*End dynamic block*/
                }//End switch statement at document.ceylon (436:2-446:2)
            };$$documentAbs.setCookie.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'cookie',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setCookie']};};
            
            //MethodDefinition defaultView at document.ceylon (449:1-458:1)
            $$documentAbs.defaultView=function defaultView(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration view at document.ceylon (451:3-451:36)
                var view$32423=$$documentAbs.$native.defaultView;
                $prop$getView$32423={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','DocumentAbs','$m','defaultView','$at','view']};}};
                $prop$getView$32423.get=function(){return view$32423};
                if((tmpvar$32424=view$32423,tmpvar$32425=null,(tmpvar$32424.equals&&!tmpvar$32424.equals(tmpvar$32425))||tmpvar$32424!==tmpvar$32425)){
                    return $$$cjh32330.Window(view$32423);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$documentAbs.defaultView.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjh32330.Window}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','defaultView']};};
            
            //MethodDefinition getDesignMode at document.ceylon (460:1-468:1)
            $$documentAbs.getDesignMode=function getDesignMode(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$32426=$$documentAbs.$native.designMode,tmpvar$32427=$$$cl32209.String("on",2),(tmpvar$32426.equals&&tmpvar$32426.equals(tmpvar$32427))||tmpvar$32426===tmpvar$32427)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$documentAbs.getDesignMode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getDesignMode']};};
            
            //MethodDefinition getDir at document.ceylon (470:1-478:1)
            $$documentAbs.getDir=function getDir(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$32428=$$documentAbs.$native.dir,tmpvar$32429=$$$cl32209.String("ltr",3),(tmpvar$32428.equals&&tmpvar$32428.equals(tmpvar$32429))||tmpvar$32428===tmpvar$32429)){
                    return getLtr();
                }else {
                    return getRtl();
                }/*End dynamic block*/
            };$$documentAbs.getDir.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentDirection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getDir']};};
            
            //MethodDefinition setDir at document.ceylon (480:1-484:1)
            $$documentAbs.setDir=function setDir(dir$32430){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                $$documentAbs.$native.dir=dir$32430.string.valueOf();
                /*End dynamic block*/
            };$$documentAbs.setDir.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'dir',$mt:'prm',$t:{t:DocumentDirection},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setDir']};};
            
            //MethodDefinition getDomain at document.ceylon (486:1-490:1)
            $$documentAbs.getDomain=function getDomain(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$documentAbs.$native.domain);
                /*End dynamic block*/
            };$$documentAbs.getDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getDomain']};};
            
            //MethodDefinition setDomain at document.ceylon (492:1-504:1)
            $$documentAbs.setDomain=function setDomain(domain$32431){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (493:2-503:2)
                var case$32432=domain$32431;
                if ($$$cl32209.isOfType(domain$32431,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.domain=case$32432.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(domain$32431,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.domain=case$32432.$native;
                    /*End dynamic block*/
                }//End switch statement at document.ceylon (493:2-503:2)
            };$$documentAbs.setDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'domain',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setDomain']};};
            
            //MethodDefinition forms at document.ceylon (506:1-510:1)
            $$documentAbs.forms=function forms(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return HTMLCollection($$documentAbs.$native.forms);
                /*End dynamic block*/
            };$$documentAbs.forms.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','forms']};};
            
            //MethodDefinition head at document.ceylon (512:1-516:1)
            $$documentAbs.head=function head(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.head);
                /*End dynamic block*/
            };$$documentAbs.head.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','head']};};
            
            //MethodDefinition images at document.ceylon (518:1-522:1)
            $$documentAbs.images=function images(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return HTMLCollection($$documentAbs.$native.images);
                /*End dynamic block*/
            };$$documentAbs.images.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','images']};};
            
            //MethodDefinition lastModified at document.ceylon (524:1-528:1)
            $$documentAbs.lastModified=function lastModified(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$documentAbs.$native.lastModified);
                /*End dynamic block*/
            };$$documentAbs.lastModified.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','lastModified']};};
            
            //MethodDefinition lastStyleSheetSet at document.ceylon (530:1-534:1)
            $$documentAbs.lastStyleSheetSet=function lastStyleSheetSet(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$documentAbs.$native.lastStyleSheetSet);
                /*End dynamic block*/
            };$$documentAbs.lastStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','lastStyleSheetSet']};};
            
            //MethodDefinition links at document.ceylon (536:1-540:1)
            $$documentAbs.links=function links(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return HTMLCollection($$documentAbs.$native.links);
                /*End dynamic block*/
            };$$documentAbs.links.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','links']};};
            
            //MethodDefinition location at document.ceylon (542:1-546:1)
            $$documentAbs.location=function location(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cjh32330.Location($$documentAbs.$native.location);
                /*End dynamic block*/
            };$$documentAbs.location.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjh32330.Location},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','location']};};
            
            //MethodDefinition plugins at document.ceylon (548:1-552:1)
            $$documentAbs.plugins=function plugins(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return HTMLCollection($$documentAbs.$native.plugins);
                /*End dynamic block*/
            };$$documentAbs.plugins.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','plugins']};};
            
            //MethodDefinition preferredStyleSheetSet at document.ceylon (554:1-563:1)
            $$documentAbs.preferredStyleSheetSet=function preferredStyleSheetSet(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration preferred at document.ceylon (556:3-556:54)
                var preferred$32433=(typeof document==='undefined'||document===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: document")),'556:23-556:30','document.ceylon'):document).preferredStyleSheetSet;
                $prop$getPreferred$32433={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','DocumentAbs','$m','preferredStyleSheetSet','$at','preferred']};}};
                $prop$getPreferred$32433.get=function(){return preferred$32433};
                if((tmpvar$32434=preferred$32433,tmpvar$32435=null,(tmpvar$32434.equals&&!tmpvar$32434.equals(tmpvar$32435))||tmpvar$32434!==tmpvar$32435)){
                    return $$$cjl32280.JSString(preferred$32433);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$documentAbs.preferredStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','preferredStyleSheetSet']};};
            
            //MethodDefinition readyState at document.ceylon (565:1-576:1)
            $$documentAbs.readyState=function readyState(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration readyState at document.ceylon (567:3-567:41)
                var readyState$32436=$$documentAbs.$native.readyState;
                $prop$getReadyState$32436={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','DocumentAbs','$m','readyState','$at','readyState']};}};
                $prop$getReadyState$32436.get=function(){return readyState$32436};
                if((tmpvar$32437=readyState$32436,tmpvar$32438=$$$cl32209.String("loading",7),(tmpvar$32437.equals&&tmpvar$32437.equals(tmpvar$32438))||tmpvar$32437===tmpvar$32438)){
                    return getLoading();
                }else {
                    if((tmpvar$32439=readyState$32436,tmpvar$32440=$$$cl32209.String("interactive",11),(tmpvar$32439.equals&&tmpvar$32439.equals(tmpvar$32440))||tmpvar$32439===tmpvar$32440)){
                        return getInteractive();
                    }else {
                        return getComplete();
                    }
                }/*End dynamic block*/
            };$$documentAbs.readyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentReadyState},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','readyState']};};
            
            //MethodDefinition referrer at document.ceylon (578:1-582:1)
            $$documentAbs.referrer=function referrer(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$documentAbs.$native.referrer);
                /*End dynamic block*/
            };$$documentAbs.referrer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','referrer']};};
            
            //MethodDefinition scripts at document.ceylon (584:1-588:1)
            $$documentAbs.scripts=function scripts(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return HTMLCollection($$documentAbs.$native.scripts);
                /*End dynamic block*/
            };$$documentAbs.scripts.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','scripts']};};
            
            //MethodDefinition getSelectedStyleSheetSet at document.ceylon (590:1-594:1)
            $$documentAbs.getSelectedStyleSheetSet=function getSelectedStyleSheetSet(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$documentAbs.$native.selectedStyleSheetSet);
                /*End dynamic block*/
            };$$documentAbs.getSelectedStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getSelectedStyleSheetSet']};};
            
            //MethodDefinition setSelectedStyleSheetSet at document.ceylon (596:1-608:1)
            $$documentAbs.setSelectedStyleSheetSet=function setSelectedStyleSheetSet(sheet$32441){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (597:2-607:2)
                var case$32442=sheet$32441;
                if ($$$cl32209.isOfType(sheet$32441,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.selectedStyleSheetSet=case$32442.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(sheet$32441,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.selectedStyleSheetSet=case$32442.$native;
                    /*End dynamic block*/
                }//End switch statement at document.ceylon (597:2-607:2)
            };$$documentAbs.setSelectedStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'sheet',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setSelectedStyleSheetSet']};};
            
            //MethodDefinition styleSheets at document.ceylon (610:1-614:1)
            $$documentAbs.styleSheets=function styleSheets(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return StyleSheetList$stylesheets($$documentAbs.$native.styleSheets);
                /*End dynamic block*/
            };$$documentAbs.styleSheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:StyleSheetList$stylesheets},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','styleSheets']};};
            
            //MethodDefinition styleSheetSets at document.ceylon (616:1-621:1)
            $$documentAbs.styleSheetSets=function styleSheetSets(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSArray($$documentAbs.$native.styleSheetSets);
                /*End dynamic block*/
            };$$documentAbs.styleSheetSets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSArray},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.doc($$$cl32209.String("Array of Strings",16)),$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','styleSheetSets']};};
            
            //MethodDefinition title at document.ceylon (623:1-627:1)
            $$documentAbs.title=function title(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$documentAbs.$native.title);
                /*End dynamic block*/
            };$$documentAbs.title.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','title']};};
            
            //MethodDefinition open at document.ceylon (629:1-633:1)
            $$documentAbs.open=function open(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                $$documentAbs.$native.open();
                /*End dynamic block*/
            };$$documentAbs.open.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','open']};};
            
            //MethodDefinition close at document.ceylon (635:1-639:1)
            $$documentAbs.close=function close(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                $$documentAbs.$native.close();
                /*End dynamic block*/
            };$$documentAbs.close.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','close']};};
            
            //MethodDefinition elementFromPoint at document.ceylon (641:1-669:1)
            $$documentAbs.elementFromPoint=function elementFromPoint(x$32443,y$32444){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (642:2-668:2)
                var case$32445=x$32443;
                if ($$$cl32209.isOfType(x$32443,{t:$$$cl32209.Integer})) {
                    //Switch statement at document.ceylon (644:3-654:3)
                    var case$32446=y$32444;
                    if ($$$cl32209.isOfType(y$32444,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return Element($$documentAbs.$native.elementFromPoint(/*NULL PARAM!*/case$32445/*NULL PARAM!*/,case$32446));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(y$32444,{t:$$$cjl32280.JSNumber})) {
                        /*Begin dynamic block*/
                        return Element($$documentAbs.$native.elementFromPoint(/*NULL PARAM!*/case$32445/*NULL PARAM!*/,case$32446.$native));
                        /*End dynamic block*/
                    }//End switch statement at document.ceylon (644:3-654:3)
                }else if ($$$cl32209.isOfType(x$32443,{t:$$$cjl32280.JSNumber})) {
                    //Switch statement at document.ceylon (657:3-667:3)
                    var case$32447=y$32444;
                    if ($$$cl32209.isOfType(y$32444,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return Element($$documentAbs.$native.elementFromPoint(/*NULL PARAM!*/case$32445.$native/*NULL PARAM!*/,case$32447));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(y$32444,{t:$$$cjl32280.JSNumber})) {
                        /*Begin dynamic block*/
                        return Element($$documentAbs.$native.elementFromPoint(/*NULL PARAM!*/case$32445.$native/*NULL PARAM!*/,case$32447.$native));
                        /*End dynamic block*/
                    }//End switch statement at document.ceylon (657:3-667:3)
                }//End switch statement at document.ceylon (642:2-668:2)
            };$$documentAbs.elementFromPoint.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'x',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','elementFromPoint']};};
            
            //MethodDefinition getElementsByName at document.ceylon (671:1-683:1)
            $$documentAbs.getElementsByName=function getElementsByName(name$32448){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (672:2-682:2)
                var case$32449=name$32448;
                if ($$$cl32209.isOfType(name$32448,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return HTMLCollection($$documentAbs.$native.getElementsByName(/*NULL PARAM!*/case$32449.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(name$32448,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    return HTMLCollection($$documentAbs.$native.getElementsByName(/*NULL PARAM!*/case$32449.$native));
                    /*End dynamic block*/
                }//End switch statement at document.ceylon (672:2-682:2)
            };$$documentAbs.getElementsByName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByName']};};
            
            //MethodDefinition hasFocus at document.ceylon (685:1-693:1)
            $$documentAbs.hasFocus=function hasFocus(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                if($$documentAbs.$native.hasFocus()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$documentAbs.hasFocus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','hasFocus']};};
            
            //MethodDefinition querySelector at document.ceylon (695:1-707:1)
            $$documentAbs.querySelector=function querySelector(selectors$32450){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (696:2-706:2)
                var case$32451=selectors$32450;
                if ($$$cl32209.isOfType(selectors$32450,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return Element($$documentAbs.$native.querySelector(/*NULL PARAM!*/case$32451.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(selectors$32450,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    return Element($$documentAbs.$native.querySelector(/*NULL PARAM!*/case$32451.$native));
                    /*End dynamic block*/
                }//End switch statement at document.ceylon (696:2-706:2)
            };$$documentAbs.querySelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'selectors',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','querySelector']};};
            
            //MethodDefinition querySelectorAll at document.ceylon (709:1-721:1)
            $$documentAbs.querySelectorAll=function querySelectorAll(selectors$32452){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (710:2-720:2)
                var case$32453=selectors$32452;
                if ($$$cl32209.isOfType(selectors$32452,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return NodeList($$documentAbs.$native.querySelectorAll(/*NULL PARAM!*/case$32453.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(selectors$32452,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    return NodeList($$documentAbs.$native.querySelectorAll(/*NULL PARAM!*/case$32453.$native));
                    /*End dynamic block*/
                }//End switch statement at document.ceylon (710:2-720:2)
            };$$documentAbs.querySelectorAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeList},$ps:[{$nm:'selectors',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','querySelectorAll']};};
            
            //MethodDefinition releaseCapture at document.ceylon (723:1-727:1)
            $$documentAbs.releaseCapture=function releaseCapture(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                $$documentAbs.$native.releaseCapture();
                /*End dynamic block*/
            };$$documentAbs.releaseCapture.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','releaseCapture']};};
            
            //MethodDefinition write at document.ceylon (729:1-741:1)
            $$documentAbs.write=function write(line$32454){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (730:2-740:2)
                var case$32455=line$32454;
                if ($$$cl32209.isOfType(line$32454,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.write(/*NULL PARAM!*/case$32455.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(line$32454,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.write(/*NULL PARAM!*/case$32455.$native);
                    /*End dynamic block*/
                }//End switch statement at document.ceylon (730:2-740:2)
            };$$documentAbs.write.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'line',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','write']};};
            
            //MethodDefinition writeln at document.ceylon (743:1-755:1)
            $$documentAbs.writeln=function writeln(line$32456){
                var $$documentAbs=this;
                //Switch statement at document.ceylon (744:2-754:2)
                var case$32457=line$32456;
                if ($$$cl32209.isOfType(line$32456,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.writeln(/*NULL PARAM!*/case$32457.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(line$32456,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.writeln(/*NULL PARAM!*/case$32457.$native);
                    /*End dynamic block*/
                }//End switch statement at document.ceylon (744:2-754:2)
            };$$documentAbs.writeln.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'line',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','writeln']};};
        })(DocumentAbs.$$.prototype);
    }
    return DocumentAbs;
}
exports.$init$DocumentAbs=$init$DocumentAbs;
$init$DocumentAbs();

//ClassDefinition Document at document.ceylon (768:0-773:0)
function Document(n$32458, $$document){
    $init$Document();
    if ($$document===undefined)$$document=new Document.$$;
    $$document.n$32458_=n$32458;
    DocumentAbs($$document);
    
    //AttributeDeclaration native at document.ceylon (769:1-769:29)
    $$document.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Document,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom','Document','$at','native']};}};
    /*Begin dynamic block*/
    $$document.$native=$$document.n$32458;/*End dynamic block*/
    return $$document;
}
Document.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','Document']};};
exports.Document=Document;
function $init$Document(){
    if (Document.$$===undefined){
        $$$cl32209.initTypeProto(Document,'ceylon.js.dom::Document',$init$DocumentAbs());
        (function($$document){
            
            //AttributeDeclaration native at document.ceylon (769:1-769:29)
            $$$cl32209.defineAttr($$document,'n$32458',function(){return this.n$32458_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Document,d:['ceylon.js.dom','Document','$at','n']};});
        })(Document.$$.prototype);
    }
    return Document;
}
exports.$init$Document=$init$Document;
$init$Document();

//ClassDefinition StyleSheetAbs at stylesheet.ceylon (4:0-51:0)
function StyleSheetAbs$stylesheets($$styleSheetAbs){
    $init$StyleSheetAbs$stylesheets();
    if ($$styleSheetAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$styleSheetAbs);
    return $$styleSheetAbs;
}
StyleSheetAbs$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs']};};
exports.StyleSheetAbs$stylesheets=StyleSheetAbs$stylesheets;
function $init$StyleSheetAbs$stylesheets(){
    if (StyleSheetAbs$stylesheets.$$===undefined){
        $$$cl32209.initTypeProto(StyleSheetAbs$stylesheets,'ceylon.js.dom.stylesheets::StyleSheetAbs',$$$cjl32280.JSObjectAbs);
        (function($$styleSheetAbs){
            
            //MethodDefinition type at stylesheet.ceylon (6:4-10:4)
            $$styleSheetAbs.type=function type(){
                var $$styleSheetAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$styleSheetAbs.$native.type);
                /*End dynamic block*/
            };$$styleSheetAbs.type.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','type']};};
            
            //MethodDefinition disabled at stylesheet.ceylon (12:4-20:4)
            $$styleSheetAbs.disabled=function disabled(){
                var $$styleSheetAbs=this;
                /*Begin dynamic block*/
                if($$styleSheetAbs.$native.disabled){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$styleSheetAbs.disabled.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','disabled']};};
            
            //MethodDefinition ownerNode at stylesheet.ceylon (22:4-26:4)
            $$styleSheetAbs.ownerNode=function ownerNode(){
                var $$styleSheetAbs=this;
                /*Begin dynamic block*/
                return Node($$styleSheetAbs.$native.ownerNode);
                /*End dynamic block*/
            };$$styleSheetAbs.ownerNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','ownerNode']};};
            
            //MethodDefinition parentStyleSheet at stylesheet.ceylon (28:4-32:4)
            $$styleSheetAbs.parentStyleSheet=function parentStyleSheet(){
                var $$styleSheetAbs=this;
                /*Begin dynamic block*/
                return StyleSheet$stylesheets($$styleSheetAbs.$native.parentStyleSheet);
                /*End dynamic block*/
            };$$styleSheetAbs.parentStyleSheet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:StyleSheet$stylesheets},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','parentStyleSheet']};};
            
            //MethodDefinition href at stylesheet.ceylon (34:1-38:1)
            $$styleSheetAbs.href=function href(){
                var $$styleSheetAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$styleSheetAbs.$native.href);
                /*End dynamic block*/
            };$$styleSheetAbs.href.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','href']};};
            
            //MethodDefinition title at stylesheet.ceylon (40:1-44:1)
            $$styleSheetAbs.title=function title(){
                var $$styleSheetAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$styleSheetAbs.$native.title);
                /*End dynamic block*/
            };$$styleSheetAbs.title.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','title']};};
            
            //MethodDefinition media at stylesheet.ceylon (46:1-50:1)
            $$styleSheetAbs.media=function media(){
                var $$styleSheetAbs=this;
                /*Begin dynamic block*/
                return MediaList$stylesheets($$styleSheetAbs.$native.media);
                /*End dynamic block*/
            };$$styleSheetAbs.media.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:MediaList$stylesheets},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','media']};};
        })(StyleSheetAbs$stylesheets.$$.prototype);
    }
    return StyleSheetAbs$stylesheets;
}
exports.$init$StyleSheetAbs$stylesheets=$init$StyleSheetAbs$stylesheets;
$init$StyleSheetAbs$stylesheets();

//ClassDefinition StyleSheet at stylesheet.ceylon (53:0-58:0)
function StyleSheet$stylesheets(n$32476, $$styleSheet){
    $init$StyleSheet$stylesheets();
    if ($$styleSheet===undefined)$$styleSheet=new StyleSheet$stylesheets.$$;
    $$styleSheet.n$32476_=n$32476;
    StyleSheetAbs$stylesheets($$styleSheet);
    
    //AttributeDeclaration native at stylesheet.ceylon (54:1-54:29)
    $$styleSheet.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:StyleSheet$stylesheets,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom.stylesheets','StyleSheet','$at','native']};}};
    /*Begin dynamic block*/
    $$styleSheet.$native=$$styleSheet.n$32476;/*End dynamic block*/
    return $$styleSheet;
}
StyleSheet$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:StyleSheetAbs$stylesheets},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheet']};};
exports.StyleSheet$stylesheets=StyleSheet$stylesheets;
function $init$StyleSheet$stylesheets(){
    if (StyleSheet$stylesheets.$$===undefined){
        $$$cl32209.initTypeProto(StyleSheet$stylesheets,'ceylon.js.dom.stylesheets::StyleSheet',$init$StyleSheetAbs$stylesheets());
        (function($$styleSheet){
            
            //AttributeDeclaration native at stylesheet.ceylon (54:1-54:29)
            $$$cl32209.defineAttr($$styleSheet,'n$32476',function(){return this.n$32476_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:StyleSheet$stylesheets,d:['ceylon.js.dom.stylesheets','StyleSheet','$at','n']};});
        })(StyleSheet$stylesheets.$$.prototype);
    }
    return StyleSheet$stylesheets;
}
exports.$init$StyleSheet$stylesheets=$init$StyleSheet$stylesheets;
$init$StyleSheet$stylesheets();

//MethodDefinition getWindow at main.ceylon (3:0-7:0)
function getWindow(){
    /*Begin dynamic block*/
    return $$$cjh32330.Window((typeof window==='undefined'||window===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: window")),'5:16-5:21','main.ceylon'):window));
    /*End dynamic block*/
}
exports.getWindow=getWindow;
getWindow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjh32330.Window},$ps:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','getWindow']};};

//ClassDefinition DocumentTypeAbs at documenttype.ceylon (3:0-22:0)
function DocumentTypeAbs($$documentTypeAbs){
    $init$DocumentTypeAbs();
    if ($$documentTypeAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$documentTypeAbs);
    return $$documentTypeAbs;
}
DocumentTypeAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','DocumentTypeAbs']};};
exports.DocumentTypeAbs=DocumentTypeAbs;
function $init$DocumentTypeAbs(){
    if (DocumentTypeAbs.$$===undefined){
        $$$cl32209.initTypeProto(DocumentTypeAbs,'ceylon.js.dom::DocumentTypeAbs',$init$NodeAbs());
        (function($$documentTypeAbs){
            
            //MethodDefinition name at documenttype.ceylon (5:1-9:1)
            $$documentTypeAbs.name=function name(){
                var $$documentTypeAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$documentTypeAbs.$native.name);
                /*End dynamic block*/
            };$$documentTypeAbs.name.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentTypeAbs','$m','name']};};
            
            //MethodDefinition publicId at documenttype.ceylon (11:1-15:1)
            $$documentTypeAbs.publicId=function publicId(){
                var $$documentTypeAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$documentTypeAbs.$native.publicId);
                /*End dynamic block*/
            };$$documentTypeAbs.publicId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentTypeAbs','$m','publicId']};};
            
            //MethodDefinition systemId at documenttype.ceylon (17:1-21:1)
            $$documentTypeAbs.systemId=function systemId(){
                var $$documentTypeAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$documentTypeAbs.$native.systemId);
                /*End dynamic block*/
            };$$documentTypeAbs.systemId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentTypeAbs','$m','systemId']};};
        })(DocumentTypeAbs.$$.prototype);
    }
    return DocumentTypeAbs;
}
exports.$init$DocumentTypeAbs=$init$DocumentTypeAbs;
$init$DocumentTypeAbs();

//ClassDefinition DocumentType at documenttype.ceylon (24:0-29:0)
function DocumentType(n$32596, $$documentType){
    $init$DocumentType();
    if ($$documentType===undefined)$$documentType=new DocumentType.$$;
    $$documentType.n$32596_=n$32596;
    DocumentTypeAbs($$documentType);
    
    //AttributeDeclaration native at documenttype.ceylon (25:1-25:29)
    $$documentType.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:DocumentType,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom','DocumentType','$at','native']};}};
    /*Begin dynamic block*/
    $$documentType.$native=$$documentType.n$32596;/*End dynamic block*/
    return $$documentType;
}
DocumentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentTypeAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentType']};};
exports.DocumentType=DocumentType;
function $init$DocumentType(){
    if (DocumentType.$$===undefined){
        $$$cl32209.initTypeProto(DocumentType,'ceylon.js.dom::DocumentType',$init$DocumentTypeAbs());
        (function($$documentType){
            
            //AttributeDeclaration native at documenttype.ceylon (25:1-25:29)
            $$$cl32209.defineAttr($$documentType,'n$32596',function(){return this.n$32596_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:DocumentType,d:['ceylon.js.dom','DocumentType','$at','n']};});
        })(DocumentType.$$.prototype);
    }
    return DocumentType;
}
exports.$init$DocumentType=$init$DocumentType;
$init$DocumentType();

//ClassDefinition CDATASectionAbs at text.ceylon (3:0-3:59)
function CDATASectionAbs($$cDATASectionAbs){
    $init$CDATASectionAbs();
    if ($$cDATASectionAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    TextAbs($$cDATASectionAbs);
    return $$cDATASectionAbs;
}
CDATASectionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TextAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','CDATASectionAbs']};};
exports.CDATASectionAbs=CDATASectionAbs;
function $init$CDATASectionAbs(){
    if (CDATASectionAbs.$$===undefined){
        $$$cl32209.initTypeProto(CDATASectionAbs,'ceylon.js.dom::CDATASectionAbs',$init$TextAbs());
    }
    return CDATASectionAbs;
}
exports.$init$CDATASectionAbs=$init$CDATASectionAbs;
$init$CDATASectionAbs();

//ClassDefinition CDATASection at text.ceylon (5:0-10:0)
function CDATASection(n$32597, $$cDATASection){
    $init$CDATASection();
    if ($$cDATASection===undefined)$$cDATASection=new CDATASection.$$;
    $$cDATASection.n$32597_=n$32597;
    CDATASectionAbs($$cDATASection);
    
    //AttributeDeclaration native at text.ceylon (6:1-6:29)
    $$cDATASection.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:CDATASection,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom','CDATASection','$at','native']};}};
    /*Begin dynamic block*/
    $$cDATASection.$native=$$cDATASection.n$32597;/*End dynamic block*/
    return $$cDATASection;
}
CDATASection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CDATASectionAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','CDATASection']};};
exports.CDATASection=CDATASection;
function $init$CDATASection(){
    if (CDATASection.$$===undefined){
        $$$cl32209.initTypeProto(CDATASection,'ceylon.js.dom::CDATASection',$init$CDATASectionAbs());
        (function($$cDATASection){
            
            //AttributeDeclaration native at text.ceylon (6:1-6:29)
            $$$cl32209.defineAttr($$cDATASection,'n$32597',function(){return this.n$32597_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:CDATASection,d:['ceylon.js.dom','CDATASection','$at','n']};});
        })(CDATASection.$$.prototype);
    }
    return CDATASection;
}
exports.$init$CDATASection=$init$CDATASection;
$init$CDATASection();

//ClassDefinition TextAbs at text.ceylon (12:0-33:0)
function TextAbs($$textAbs){
    $init$TextAbs();
    if ($$textAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    CharacterDataAbs($$textAbs);
    return $$textAbs;
}
TextAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CharacterDataAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','TextAbs']};};
exports.TextAbs=TextAbs;
function $init$TextAbs(){
    if (TextAbs.$$===undefined){
        $$$cl32209.initTypeProto(TextAbs,'ceylon.js.dom::TextAbs',$init$CharacterDataAbs());
        (function($$textAbs){
            
            //MethodDefinition splitText at text.ceylon (14:4-26:1)
            $$textAbs.splitText=function splitText(offset$32598){
                var $$textAbs=this;
                //Switch statement at text.ceylon (15:2-25:2)
                var case$32599=offset$32598;
                if ($$$cl32209.isOfType(offset$32598,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    return Text($$textAbs.$native.splitText(/*NULL PARAM!*/case$32599));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(offset$32598,{t:$$$cjl32280.JSNumber})) {
                    /*Begin dynamic block*/
                    return Text($$textAbs.$native.splitText(/*NULL PARAM!*/case$32599.$native));
                    /*End dynamic block*/
                }//End switch statement at text.ceylon (15:2-25:2)
            };$$textAbs.splitText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Text},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}}],$cont:TextAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','TextAbs','$m','splitText']};};
            
            //MethodDefinition wholeText at text.ceylon (28:4-32:1)
            $$textAbs.wholeText=function wholeText(){
                var $$textAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$textAbs.$native.wholeText);
                /*End dynamic block*/
            };$$textAbs.wholeText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:TextAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','TextAbs','$m','wholeText']};};
        })(TextAbs.$$.prototype);
    }
    return TextAbs;
}
exports.$init$TextAbs=$init$TextAbs;
$init$TextAbs();

//ClassDefinition Text at text.ceylon (35:0-40:0)
function Text(n$32600, $$text){
    $init$Text();
    if ($$text===undefined)$$text=new Text.$$;
    $$text.n$32600_=n$32600;
    TextAbs($$text);
    
    //AttributeDeclaration native at text.ceylon (36:1-36:29)
    /*Begin dynamic block*/
    $$text.$native=$$text.n$32600;/*End dynamic block*/
    return $$text;
}
Text.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TextAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','Text']};};
exports.Text=Text;
function $init$Text(){
    if (Text.$$===undefined){
        $$$cl32209.initTypeProto(Text,'ceylon.js.dom::Text',$init$TextAbs());
        (function($$text){
            
            //AttributeDeclaration native at text.ceylon (36:1-36:29)
            $$$cl32209.defineAttr($$text,'n$32600',function(){return this.n$32600_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Text,d:['ceylon.js.dom','Text','$at','n']};});
        })(Text.$$.prototype);
    }
    return Text;
}
exports.$init$Text=$init$Text;
$init$Text();

//ClassDefinition MediaListAbs at medialist.ceylon (3:0-73:0)
function MediaListAbs$stylesheets($$mediaListAbs){
    $init$MediaListAbs$stylesheets();
    if ($$mediaListAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$mediaListAbs);
    return $$mediaListAbs;
}
MediaListAbs$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom.stylesheets','MediaListAbs']};};
exports.MediaListAbs$stylesheets=MediaListAbs$stylesheets;
function $init$MediaListAbs$stylesheets(){
    if (MediaListAbs$stylesheets.$$===undefined){
        $$$cl32209.initTypeProto(MediaListAbs$stylesheets,'ceylon.js.dom.stylesheets::MediaListAbs',$$$cjl32280.JSObjectAbs);
        (function($$mediaListAbs){
            
            //MethodDefinition getMediaText at medialist.ceylon (5:4-9:4)
            $$mediaListAbs.getMediaText=function getMediaText(){
                var $$mediaListAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$mediaListAbs.$native.mediaText);
                /*End dynamic block*/
            };$$mediaListAbs.getMediaText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','getMediaText']};};
            
            //MethodDefinition setMediaText at medialist.ceylon (11:4-23:4)
            $$mediaListAbs.setMediaText=function setMediaText(text$32602){
                var $$mediaListAbs=this;
                //Switch statement at medialist.ceylon (12:8-22:8)
                var case$32603=text$32602;
                if ($$$cl32209.isOfType(text$32602,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$mediaListAbs.$native.mediaText=case$32603.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(text$32602,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$mediaListAbs.$native.mediaText=case$32603.$native;
                    /*End dynamic block*/
                }//End switch statement at medialist.ceylon (12:8-22:8)
            };$$mediaListAbs.setMediaText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','setMediaText']};};
            
            //MethodDefinition length at medialist.ceylon (25:4-29:1)
            $$mediaListAbs.length=function length(){
                var $$mediaListAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$mediaListAbs.$native.length);
                /*End dynamic block*/
            };$$mediaListAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','length']};};
            
            //MethodDefinition item at medialist.ceylon (31:1-43:1)
            $$mediaListAbs.item=function item(index$32604){
                var $$mediaListAbs=this;
                //Switch statement at medialist.ceylon (32:2-42:2)
                var case$32605=index$32604;
                if ($$$cl32209.isOfType(index$32604,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    return $$$cjl32280.JSString($$mediaListAbs.$native.item(/*NULL PARAM!*/case$32605));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(index$32604,{t:$$$cjl32280.JSNumber})) {
                    /*Begin dynamic block*/
                    return $$$cjl32280.JSString($$mediaListAbs.$native.item(/*NULL PARAM!*/case$32605.$native));
                    /*End dynamic block*/
                }//End switch statement at medialist.ceylon (32:2-42:2)
            };$$mediaListAbs.item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','item']};};
            
            //MethodDefinition deleteMedium at medialist.ceylon (45:1-57:1)
            $$mediaListAbs.deleteMedium=function deleteMedium(oldMedium$32606){
                var $$mediaListAbs=this;
                //Switch statement at medialist.ceylon (46:2-56:2)
                var case$32607=oldMedium$32606;
                if ($$$cl32209.isOfType(oldMedium$32606,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$mediaListAbs.$native.deleteMedium(/*NULL PARAM!*/case$32607.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(oldMedium$32606,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$mediaListAbs.$native.deleteMedium(/*NULL PARAM!*/case$32607.$native);
                    /*End dynamic block*/
                }//End switch statement at medialist.ceylon (46:2-56:2)
            };$$mediaListAbs.deleteMedium.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'oldMedium',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','deleteMedium']};};
            
            //MethodDefinition appendMedium at medialist.ceylon (59:1-71:1)
            $$mediaListAbs.appendMedium=function appendMedium(newMedium$32608){
                var $$mediaListAbs=this;
                //Switch statement at medialist.ceylon (60:2-70:2)
                var case$32609=newMedium$32608;
                if ($$$cl32209.isOfType(newMedium$32608,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$mediaListAbs.$native.appendMedium(/*NULL PARAM!*/case$32609.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(newMedium$32608,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$mediaListAbs.$native.appendMedium(/*NULL PARAM!*/case$32609.$native);
                    /*End dynamic block*/
                }//End switch statement at medialist.ceylon (60:2-70:2)
            };$$mediaListAbs.appendMedium.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'newMedium',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','appendMedium']};};
        })(MediaListAbs$stylesheets.$$.prototype);
    }
    return MediaListAbs$stylesheets;
}
exports.$init$MediaListAbs$stylesheets=$init$MediaListAbs$stylesheets;
$init$MediaListAbs$stylesheets();

//ClassDefinition MediaList at medialist.ceylon (75:0-80:0)
function MediaList$stylesheets(n$32610, $$mediaList){
    $init$MediaList$stylesheets();
    if ($$mediaList===undefined)$$mediaList=new MediaList$stylesheets.$$;
    $$mediaList.n$32610_=n$32610;
    MediaListAbs$stylesheets($$mediaList);
    
    //AttributeDeclaration native at medialist.ceylon (76:1-76:29)
    $$mediaList.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:MediaList$stylesheets,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom.stylesheets','MediaList','$at','native']};}};
    /*Begin dynamic block*/
    $$mediaList.$native=$$mediaList.n$32610;/*End dynamic block*/
    return $$mediaList;
}
MediaList$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:MediaListAbs$stylesheets},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom.stylesheets','MediaList']};};
exports.MediaList$stylesheets=MediaList$stylesheets;
function $init$MediaList$stylesheets(){
    if (MediaList$stylesheets.$$===undefined){
        $$$cl32209.initTypeProto(MediaList$stylesheets,'ceylon.js.dom.stylesheets::MediaList',$init$MediaListAbs$stylesheets());
        (function($$mediaList){
            
            //AttributeDeclaration native at medialist.ceylon (76:1-76:29)
            $$$cl32209.defineAttr($$mediaList,'n$32610',function(){return this.n$32610_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:MediaList$stylesheets,d:['ceylon.js.dom.stylesheets','MediaList','$at','n']};});
        })(MediaList$stylesheets.$$.prototype);
    }
    return MediaList$stylesheets;
}
exports.$init$MediaList$stylesheets=$init$MediaList$stylesheets;
$init$MediaList$stylesheets();

//ClassDefinition NodeFilterResult at nodefilter.ceylon (1:0-1:97)
function NodeFilterResult(name$32611, $$nodeFilterResult){
    $init$NodeFilterResult();
    if ($$nodeFilterResult===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$nodeFilterResult.name$32611_=name$32611;
    return $$nodeFilterResult;
}
NodeFilterResult.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','NodeFilterResult']};};
exports.NodeFilterResult=NodeFilterResult;
function $init$NodeFilterResult(){
    if (NodeFilterResult.$$===undefined){
        $$$cl32209.initTypeProto(NodeFilterResult,'ceylon.js.dom::NodeFilterResult',$$$cl32209.Basic);
        (function($$nodeFilterResult){
            $$$cl32209.defineAttr($$nodeFilterResult,'name$32611',function(){return this.name$32611_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$cont:NodeFilterResult,d:['ceylon.js.dom','NodeFilterResult','$at','name']};});
        })(NodeFilterResult.$$.prototype);
    }
    return NodeFilterResult;
}
exports.$init$NodeFilterResult=$init$NodeFilterResult;
$init$NodeFilterResult();

//ObjectDefinition filterAccept at nodefilter.ceylon (3:0-3:69)
function filterAccept$32612(){
    var $$filterAccept=new filterAccept$32612.$$;
    NodeFilterResult($$$cl32209.String("filterAccept",12),$$filterAccept);
    return $$filterAccept;
}
function $init$filterAccept$32612(){
    if (filterAccept$32612.$$===undefined){
        $$$cl32209.initTypeProto(filterAccept$32612,'ceylon.js.dom::filterAccept',$init$NodeFilterResult());
    }
    return filterAccept$32612;
}
exports.$init$filterAccept$32612=$init$filterAccept$32612;
$init$filterAccept$32612();
var filterAccept$32613;
function getFilterAccept(){
    if (filterAccept$32613===undefined)filterAccept$32613=$init$filterAccept$32612()();
    return filterAccept$32613;
}
exports.getFilterAccept=getFilterAccept;
getFilterAccept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:filterAccept$32612},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','filterAccept']};};
$prop$getFilterAccept={get:getFilterAccept,$$metamodel$$:getFilterAccept.$$metamodel$$};
exports.$prop$getFilterAccept=$prop$getFilterAccept;

//ObjectDefinition filterReject at nodefilter.ceylon (4:0-4:69)
function filterReject$32614(){
    var $$filterReject=new filterReject$32614.$$;
    NodeFilterResult($$$cl32209.String("filterReject",12),$$filterReject);
    return $$filterReject;
}
function $init$filterReject$32614(){
    if (filterReject$32614.$$===undefined){
        $$$cl32209.initTypeProto(filterReject$32614,'ceylon.js.dom::filterReject',$init$NodeFilterResult());
    }
    return filterReject$32614;
}
exports.$init$filterReject$32614=$init$filterReject$32614;
$init$filterReject$32614();
var filterReject$32615;
function getFilterReject(){
    if (filterReject$32615===undefined)filterReject$32615=$init$filterReject$32614()();
    return filterReject$32615;
}
exports.getFilterReject=getFilterReject;
getFilterReject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:filterReject$32614},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','filterReject']};};
$prop$getFilterReject={get:getFilterReject,$$metamodel$$:getFilterReject.$$metamodel$$};
exports.$prop$getFilterReject=$prop$getFilterReject;

//ObjectDefinition filterSkip at nodefilter.ceylon (5:0-5:65)
function filterSkip$32616(){
    var $$filterSkip=new filterSkip$32616.$$;
    NodeFilterResult($$$cl32209.String("filterSkip",10),$$filterSkip);
    return $$filterSkip;
}
function $init$filterSkip$32616(){
    if (filterSkip$32616.$$===undefined){
        $$$cl32209.initTypeProto(filterSkip$32616,'ceylon.js.dom::filterSkip',$init$NodeFilterResult());
    }
    return filterSkip$32616;
}
exports.$init$filterSkip$32616=$init$filterSkip$32616;
$init$filterSkip$32616();
var filterSkip$32617;
function getFilterSkip(){
    if (filterSkip$32617===undefined)filterSkip$32617=$init$filterSkip$32616()();
    return filterSkip$32617;
}
exports.getFilterSkip=getFilterSkip;
getFilterSkip.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:filterSkip$32616},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','filterSkip']};};
$prop$getFilterSkip={get:getFilterSkip,$$metamodel$$:getFilterSkip.$$metamodel$$};
exports.$prop$getFilterSkip=$prop$getFilterSkip;

//ClassDefinition NodeFilter at nodefilter.ceylon (8:0-14:0)
function NodeFilter(acceptNode$32618, $$nodeFilter){
    $init$NodeFilter();
    if ($$nodeFilter===undefined)$$nodeFilter=new NodeFilter.$$;
    $$nodeFilter.acceptNode$32618_=acceptNode$32618;
    
    //AttributeDeclaration native at nodefilter.ceylon (9:1-9:22)
    $$nodeFilter.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:NodeFilter,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeFilter','$at','native']};}};
    /*Begin dynamic block*/
    $$nodeFilter.$native=(typeof Object==='undefined'||Object===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Object")),'11:11-11:16','nodefilter.ceylon'):Object)();$$nodeFilter.$native.acceptNode=$$$cl32209.$JsCallable($$nodeFilter.acceptNode$32618/*TODO: callable targs 6*/);
    /*End dynamic block*/
    return $$nodeFilter;
}
NodeFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeFilter']};};
exports.NodeFilter=NodeFilter;
function $init$NodeFilter(){
    if (NodeFilter.$$===undefined){
        $$$cl32209.initTypeProto(NodeFilter,'ceylon.js.dom::NodeFilter',$$$cl32209.Basic);
        (function($$nodeFilter){
            
            //AttributeDeclaration native at nodefilter.ceylon (9:1-9:22)
            $$$cl32209.defineAttr($$nodeFilter,'acceptNode$32618',function(){return this.acceptNode$32618_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:NodeFilterResult},$ps:[{$nm:'n',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeFilter,d:['ceylon.js.dom','NodeFilter','$m','acceptNode']};});
        })(NodeFilter.$$.prototype);
    }
    return NodeFilter;
}
exports.$init$NodeFilter=$init$NodeFilter;
$init$NodeFilter();

//ClassDefinition CommentAbs at characterdata.ceylon (3:0-3:63)
function CommentAbs($$commentAbs){
    $init$CommentAbs();
    if ($$commentAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    CharacterDataAbs($$commentAbs);
    return $$commentAbs;
}
CommentAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CharacterDataAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','CommentAbs']};};
exports.CommentAbs=CommentAbs;
function $init$CommentAbs(){
    if (CommentAbs.$$===undefined){
        $$$cl32209.initTypeProto(CommentAbs,'ceylon.js.dom::CommentAbs',$init$CharacterDataAbs());
    }
    return CommentAbs;
}
exports.$init$CommentAbs=$init$CommentAbs;
$init$CommentAbs();

//ClassDefinition Comment at characterdata.ceylon (5:0-10:0)
function Comment(n$32726, $$comment){
    $init$Comment();
    if ($$comment===undefined)$$comment=new Comment.$$;
    $$comment.n$32726_=n$32726;
    CommentAbs($$comment);
    
    //AttributeDeclaration native at characterdata.ceylon (6:1-6:29)
    $$comment.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Comment,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom','Comment','$at','native']};}};
    /*Begin dynamic block*/
    $$comment.$native=$$comment.n$32726;/*End dynamic block*/
    return $$comment;
}
Comment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CommentAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','Comment']};};
exports.Comment=Comment;
function $init$Comment(){
    if (Comment.$$===undefined){
        $$$cl32209.initTypeProto(Comment,'ceylon.js.dom::Comment',$init$CommentAbs());
        (function($$comment){
            
            //AttributeDeclaration native at characterdata.ceylon (6:1-6:29)
            $$$cl32209.defineAttr($$comment,'n$32726',function(){return this.n$32726_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Comment,d:['ceylon.js.dom','Comment','$at','n']};});
        })(Comment.$$.prototype);
    }
    return Comment;
}
exports.$init$Comment=$init$Comment;
$init$Comment();

//ClassDefinition CharacterDataAbs at characterdata.ceylon (12:0-206:0)
function CharacterDataAbs($$characterDataAbs){
    $init$CharacterDataAbs();
    if ($$characterDataAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$characterDataAbs);
    return $$characterDataAbs;
}
CharacterDataAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','CharacterDataAbs']};};
exports.CharacterDataAbs=CharacterDataAbs;
function $init$CharacterDataAbs(){
    if (CharacterDataAbs.$$===undefined){
        $$$cl32209.initTypeProto(CharacterDataAbs,'ceylon.js.dom::CharacterDataAbs',$init$NodeAbs());
        (function($$characterDataAbs){
            
            //MethodDefinition getData at characterdata.ceylon (14:4-18:1)
            $$characterDataAbs.getData=function getData(){
                var $$characterDataAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$characterDataAbs.$native.data);
                /*End dynamic block*/
            };$$characterDataAbs.getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:CharacterDataAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','getData']};};
            
            //MethodDefinition setData at characterdata.ceylon (20:1-33:1)
            $$characterDataAbs.setData=function setData(data$32727){
                var $$characterDataAbs=this;
                //Switch statement at characterdata.ceylon (21:2-31:2)
                var case$32728=data$32727;
                if ($$$cl32209.isOfType(data$32727,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.data=case$32728.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(data$32727,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.data=case$32728.$native;
                    /*End dynamic block*/
                }//End switch statement at characterdata.ceylon (21:2-31:2)
            };$$characterDataAbs.setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','setData']};};
            
            //MethodDefinition length at characterdata.ceylon (35:4-39:1)
            $$characterDataAbs.length=function length(){
                var $$characterDataAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$characterDataAbs.$native.length);
                /*End dynamic block*/
            };$$characterDataAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:CharacterDataAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','length']};};
            
            //MethodDefinition substringData at characterdata.ceylon (41:4-69:1)
            $$characterDataAbs.substringData=function substringData(offset$32729,count$32730){
                var $$characterDataAbs=this;
                //Switch statement at characterdata.ceylon (42:2-68:2)
                var case$32731=offset$32729;
                if ($$$cl32209.isOfType(offset$32729,{t:$$$cl32209.Integer})) {
                    //Switch statement at characterdata.ceylon (44:3-54:3)
                    var case$32732=count$32730;
                    if ($$$cl32209.isOfType(count$32730,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return $$$cjl32280.JSString($$characterDataAbs.$native.substringData(/*NULL PARAM!*/case$32731/*NULL PARAM!*/,case$32732));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(count$32730,{t:$$$cjl32280.JSNumber})) {
                        /*Begin dynamic block*/
                        return $$$cjl32280.JSString($$characterDataAbs.$native.substringData(/*NULL PARAM!*/case$32731/*NULL PARAM!*/,case$32732.$native));
                        /*End dynamic block*/
                    }//End switch statement at characterdata.ceylon (44:3-54:3)
                }else if ($$$cl32209.isOfType(offset$32729,{t:$$$cjl32280.JSNumber})) {
                    //Switch statement at characterdata.ceylon (57:3-67:3)
                    var case$32733=count$32730;
                    if ($$$cl32209.isOfType(count$32730,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        return $$$cjl32280.JSString($$characterDataAbs.$native.substringData(/*NULL PARAM!*/case$32731.$native/*NULL PARAM!*/,case$32733));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(count$32730,{t:$$$cjl32280.JSNumber})) {
                        /*Begin dynamic block*/
                        return $$$cjl32280.JSString($$characterDataAbs.$native.substringData(/*NULL PARAM!*/case$32731.$native/*NULL PARAM!*/,case$32733.$native));
                        /*End dynamic block*/
                    }//End switch statement at characterdata.ceylon (57:3-67:3)
                }//End switch statement at characterdata.ceylon (42:2-68:2)
            };$$characterDataAbs.substringData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','substringData']};};
            
            //MethodDefinition appendData at characterdata.ceylon (71:1-83:1)
            $$characterDataAbs.appendData=function appendData(data$32734){
                var $$characterDataAbs=this;
                //Switch statement at characterdata.ceylon (72:2-82:2)
                var case$32735=data$32734;
                if ($$$cl32209.isOfType(data$32734,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.appendData(/*NULL PARAM!*/case$32735.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(data$32734,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.appendData(/*NULL PARAM!*/case$32735.$native);
                    /*End dynamic block*/
                }//End switch statement at characterdata.ceylon (72:2-82:2)
            };$$characterDataAbs.appendData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','appendData']};};
            
            //MethodDefinition insertData at characterdata.ceylon (85:4-113:1)
            $$characterDataAbs.insertData=function insertData(offset$32736,data$32737){
                var $$characterDataAbs=this;
                //Switch statement at characterdata.ceylon (86:2-112:2)
                var case$32738=offset$32736;
                if ($$$cl32209.isOfType(offset$32736,{t:$$$cl32209.Integer})) {
                    //Switch statement at characterdata.ceylon (88:3-98:3)
                    var case$32739=data$32737;
                    if ($$$cl32209.isOfType(data$32737,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        $$characterDataAbs.$native.insertData(/*NULL PARAM!*/case$32738/*NULL PARAM!*/,case$32739.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(data$32737,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        $$characterDataAbs.$native.insertData(/*NULL PARAM!*/case$32738/*NULL PARAM!*/,case$32739.$native);
                        /*End dynamic block*/
                    }//End switch statement at characterdata.ceylon (88:3-98:3)
                }else if ($$$cl32209.isOfType(offset$32736,{t:$$$cjl32280.JSNumber})) {
                    //Switch statement at characterdata.ceylon (101:3-111:3)
                    var case$32740=data$32737;
                    if ($$$cl32209.isOfType(data$32737,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        $$characterDataAbs.$native.insertData(/*NULL PARAM!*/case$32738.$native/*NULL PARAM!*/,case$32740.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(data$32737,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        $$characterDataAbs.$native.insertData(/*NULL PARAM!*/case$32738.$native/*NULL PARAM!*/,case$32740.$native);
                        /*End dynamic block*/
                    }//End switch statement at characterdata.ceylon (101:3-111:3)
                }//End switch statement at characterdata.ceylon (86:2-112:2)
            };$$characterDataAbs.insertData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','insertData']};};
            
            //MethodDefinition deleteData at characterdata.ceylon (115:4-143:1)
            $$characterDataAbs.deleteData=function deleteData(offset$32741,count$32742){
                var $$characterDataAbs=this;
                //Switch statement at characterdata.ceylon (116:2-142:2)
                var case$32743=offset$32741;
                if ($$$cl32209.isOfType(offset$32741,{t:$$$cl32209.Integer})) {
                    //Switch statement at characterdata.ceylon (118:3-128:3)
                    var case$32744=count$32742;
                    if ($$$cl32209.isOfType(count$32742,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        $$characterDataAbs.$native.deleteData(/*NULL PARAM!*/case$32743/*NULL PARAM!*/,case$32744);
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(count$32742,{t:$$$cjl32280.JSNumber})) {
                        /*Begin dynamic block*/
                        $$characterDataAbs.$native.deleteData(/*NULL PARAM!*/case$32743/*NULL PARAM!*/,case$32744.$native);
                        /*End dynamic block*/
                    }//End switch statement at characterdata.ceylon (118:3-128:3)
                }else if ($$$cl32209.isOfType(offset$32741,{t:$$$cjl32280.JSNumber})) {
                    //Switch statement at characterdata.ceylon (131:3-141:3)
                    var case$32745=count$32742;
                    if ($$$cl32209.isOfType(count$32742,{t:$$$cl32209.Integer})) {
                        /*Begin dynamic block*/
                        $$characterDataAbs.$native.deleteData(/*NULL PARAM!*/case$32743.$native/*NULL PARAM!*/,case$32745);
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(count$32742,{t:$$$cjl32280.JSNumber})) {
                        /*Begin dynamic block*/
                        $$characterDataAbs.$native.deleteData(/*NULL PARAM!*/case$32743.$native/*NULL PARAM!*/,case$32745.$native);
                        /*End dynamic block*/
                    }//End switch statement at characterdata.ceylon (131:3-141:3)
                }//End switch statement at characterdata.ceylon (116:2-142:2)
            };$$characterDataAbs.deleteData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','deleteData']};};
            
            //MethodDefinition replaceData at characterdata.ceylon (145:4-205:1)
            $$characterDataAbs.replaceData=function replaceData(offset$32746,count$32747,data$32748){
                var $$characterDataAbs=this;
                //Switch statement at characterdata.ceylon (146:2-204:2)
                var case$32749=offset$32746;
                if ($$$cl32209.isOfType(offset$32746,{t:$$$cl32209.Integer})) {
                    //Switch statement at characterdata.ceylon (148:3-174:3)
                    var case$32750=count$32747;
                    if ($$$cl32209.isOfType(count$32747,{t:$$$cl32209.Integer})) {
                        //Switch statement at characterdata.ceylon (150:4-160:4)
                        var case$32751=data$32748;
                        if ($$$cl32209.isOfType(data$32748,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$32749/*NULL PARAM!*/,case$32750/*NULL PARAM!*/,case$32751.valueOf());
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(data$32748,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$32749/*NULL PARAM!*/,case$32750/*NULL PARAM!*/,case$32751.$native);
                            /*End dynamic block*/
                        }//End switch statement at characterdata.ceylon (150:4-160:4)
                    }else if ($$$cl32209.isOfType(count$32747,{t:$$$cjl32280.JSNumber})) {
                        //Switch statement at characterdata.ceylon (163:4-173:4)
                        var case$32752=data$32748;
                        if ($$$cl32209.isOfType(data$32748,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$32749/*NULL PARAM!*/,case$32750.$native/*NULL PARAM!*/,case$32752.valueOf());
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(data$32748,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$32749/*NULL PARAM!*/,case$32750.$native/*NULL PARAM!*/,case$32752.$native);
                            /*End dynamic block*/
                        }//End switch statement at characterdata.ceylon (163:4-173:4)
                    }//End switch statement at characterdata.ceylon (148:3-174:3)
                }else if ($$$cl32209.isOfType(offset$32746,{t:$$$cjl32280.JSNumber})) {
                    //Switch statement at characterdata.ceylon (177:3-203:3)
                    var case$32753=count$32747;
                    if ($$$cl32209.isOfType(count$32747,{t:$$$cl32209.Integer})) {
                        //Switch statement at characterdata.ceylon (179:4-189:4)
                        var case$32754=data$32748;
                        if ($$$cl32209.isOfType(data$32748,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$32749.$native/*NULL PARAM!*/,case$32753/*NULL PARAM!*/,case$32754.valueOf());
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(data$32748,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$32749.$native/*NULL PARAM!*/,case$32753/*NULL PARAM!*/,case$32754.$native);
                            /*End dynamic block*/
                        }//End switch statement at characterdata.ceylon (179:4-189:4)
                    }else if ($$$cl32209.isOfType(count$32747,{t:$$$cjl32280.JSNumber})) {
                        //Switch statement at characterdata.ceylon (192:4-202:4)
                        var case$32755=data$32748;
                        if ($$$cl32209.isOfType(data$32748,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$32749.$native/*NULL PARAM!*/,case$32753.$native/*NULL PARAM!*/,case$32755.valueOf());
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(data$32748,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$32749.$native/*NULL PARAM!*/,case$32753.$native/*NULL PARAM!*/,case$32755.$native);
                            /*End dynamic block*/
                        }//End switch statement at characterdata.ceylon (192:4-202:4)
                    }//End switch statement at characterdata.ceylon (177:3-203:3)
                }//End switch statement at characterdata.ceylon (146:2-204:2)
            };$$characterDataAbs.replaceData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','replaceData']};};
        })(CharacterDataAbs.$$.prototype);
    }
    return CharacterDataAbs;
}
exports.$init$CharacterDataAbs=$init$CharacterDataAbs;
$init$CharacterDataAbs();

//ClassDefinition CharacterData at characterdata.ceylon (208:0-213:0)
function CharacterData(n$32756, $$characterData){
    $init$CharacterData();
    if ($$characterData===undefined)$$characterData=new CharacterData.$$;
    $$characterData.n$32756_=n$32756;
    CharacterDataAbs($$characterData);
    
    //AttributeDeclaration native at characterdata.ceylon (209:1-209:29)
    /*Begin dynamic block*/
    $$characterData.$native=$$characterData.n$32756;/*End dynamic block*/
    return $$characterData;
}
CharacterData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CharacterDataAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','CharacterData']};};
exports.CharacterData=CharacterData;
function $init$CharacterData(){
    if (CharacterData.$$===undefined){
        $$$cl32209.initTypeProto(CharacterData,'ceylon.js.dom::CharacterData',$init$CharacterDataAbs());
        (function($$characterData){
            
            //AttributeDeclaration native at characterdata.ceylon (209:1-209:29)
            $$$cl32209.defineAttr($$characterData,'n$32756',function(){return this.n$32756_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:CharacterData,d:['ceylon.js.dom','CharacterData','$at','n']};});
        })(CharacterData.$$.prototype);
    }
    return CharacterData;
}
exports.$init$CharacterData=$init$CharacterData;
$init$CharacterData();

//ClassDefinition NodeListAbs at nodelist.ceylon (3:0-32:0)
function NodeListAbs($$nodeListAbs){
    $init$NodeListAbs();
    if ($$nodeListAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$nodeListAbs);
    return $$nodeListAbs;
}
NodeListAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','NodeListAbs']};};
exports.NodeListAbs=NodeListAbs;
function $init$NodeListAbs(){
    if (NodeListAbs.$$===undefined){
        $$$cl32209.initTypeProto(NodeListAbs,'ceylon.js.dom::NodeListAbs',$$$cjl32280.JSObjectAbs);
        (function($$nodeListAbs){
            
            //MethodDefinition item at nodelist.ceylon (5:4-25:1)
            $$nodeListAbs.item=function item(index$32757){
                var $$nodeListAbs=this;
                
                //AttributeDeclaration item at nodelist.ceylon (6:2-6:14)
                var item$32758;
                //Switch statement at nodelist.ceylon (7:2-17:2)
                var case$32759=index$32757;
                if ($$$cl32209.isOfType(index$32757,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    item$32758=$$nodeListAbs.$native.item(/*NULL PARAM!*/case$32759);/*End dynamic block*/
                }else if ($$$cl32209.isOfType(index$32757,{t:$$$cjl32280.JSNumber})) {
                    /*Begin dynamic block*/
                    item$32758=$$nodeListAbs.$native.item(/*NULL PARAM!*/case$32759.$native);/*End dynamic block*/
                }//End switch statement at nodelist.ceylon (7:2-17:2)
                /*Begin dynamic block*/
                if((tmpvar$32760=item$32758,tmpvar$32761=null,(tmpvar$32760.equals&&!tmpvar$32760.equals(tmpvar$32761))||tmpvar$32760!==tmpvar$32761)){
                    return Node(item$32758);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeListAbs.item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Node}]},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}}],$cont:NodeListAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeListAbs','$m','item']};};
            
            //MethodDefinition length at nodelist.ceylon (27:4-31:1)
            $$nodeListAbs.length=function length(){
                var $$nodeListAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$nodeListAbs.$native.length);
                /*End dynamic block*/
            };$$nodeListAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:NodeListAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeListAbs','$m','length']};};
        })(NodeListAbs.$$.prototype);
    }
    return NodeListAbs;
}
exports.$init$NodeListAbs=$init$NodeListAbs;
$init$NodeListAbs();

//ClassDefinition NodeList at nodelist.ceylon (34:0-39:0)
function NodeList(n$32762, $$nodeList){
    $init$NodeList();
    if ($$nodeList===undefined)$$nodeList=new NodeList.$$;
    $$nodeList.n$32762_=n$32762;
    NodeListAbs($$nodeList);
    
    //AttributeDeclaration native at nodelist.ceylon (35:1-35:29)
    $$nodeList.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:NodeList,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom','NodeList','$at','native']};}};
    /*Begin dynamic block*/
    $$nodeList.$native=$$nodeList.n$32762;/*End dynamic block*/
    return $$nodeList;
}
NodeList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeListAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeList']};};
exports.NodeList=NodeList;
function $init$NodeList(){
    if (NodeList.$$===undefined){
        $$$cl32209.initTypeProto(NodeList,'ceylon.js.dom::NodeList',$init$NodeListAbs());
        (function($$nodeList){
            
            //AttributeDeclaration native at nodelist.ceylon (35:1-35:29)
            $$$cl32209.defineAttr($$nodeList,'n$32762',function(){return this.n$32762_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:NodeList,d:['ceylon.js.dom','NodeList','$at','n']};});
        })(NodeList.$$.prototype);
    }
    return NodeList;
}
exports.$init$NodeList=$init$NodeList;
$init$NodeList();

//ClassDefinition HTMLCollectionAbs at htmlcollection.ceylon (3:0-54:0)
function HTMLCollectionAbs($$hTMLCollectionAbs){
    $init$HTMLCollectionAbs();
    if ($$hTMLCollectionAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$hTMLCollectionAbs);
    return $$hTMLCollectionAbs;
}
HTMLCollectionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','HTMLCollectionAbs']};};
exports.HTMLCollectionAbs=HTMLCollectionAbs;
function $init$HTMLCollectionAbs(){
    if (HTMLCollectionAbs.$$===undefined){
        $$$cl32209.initTypeProto(HTMLCollectionAbs,'ceylon.js.dom::HTMLCollectionAbs',$$$cjl32280.JSObjectAbs);
        (function($$hTMLCollectionAbs){
            
            //MethodDefinition length at htmlcollection.ceylon (5:1-9:1)
            $$hTMLCollectionAbs.length=function length(){
                var $$hTMLCollectionAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$hTMLCollectionAbs.$native.length);
                /*End dynamic block*/
            };$$hTMLCollectionAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:HTMLCollectionAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','HTMLCollectionAbs','$m','length']};};
            
            //MethodDefinition item at htmlcollection.ceylon (11:1-31:1)
            $$hTMLCollectionAbs.item=function item(index$32763){
                var $$hTMLCollectionAbs=this;
                
                //AttributeDeclaration item at htmlcollection.ceylon (12:2-12:14)
                var item$32764;
                //Switch statement at htmlcollection.ceylon (13:2-23:2)
                var case$32765=index$32763;
                if ($$$cl32209.isOfType(index$32763,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    item$32764=$$hTMLCollectionAbs.$native.item(/*NULL PARAM!*/case$32765);/*End dynamic block*/
                }else if ($$$cl32209.isOfType(index$32763,{t:$$$cjl32280.JSNumber})) {
                    /*Begin dynamic block*/
                    item$32764=$$hTMLCollectionAbs.$native.item(/*NULL PARAM!*/case$32765.$native);/*End dynamic block*/
                }//End switch statement at htmlcollection.ceylon (13:2-23:2)
                /*Begin dynamic block*/
                if((tmpvar$32766=item$32764,tmpvar$32767=null,(tmpvar$32766.equals&&!tmpvar$32766.equals(tmpvar$32767))||tmpvar$32766!==tmpvar$32767)){
                    return Element(item$32764);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$hTMLCollectionAbs.item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Element}]},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}}],$cont:HTMLCollectionAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','HTMLCollectionAbs','$m','item']};};
            
            //MethodDefinition namedItem at htmlcollection.ceylon (33:1-53:1)
            $$hTMLCollectionAbs.namedItem=function namedItem(name$32768){
                var $$hTMLCollectionAbs=this;
                
                //AttributeDeclaration namedItem at htmlcollection.ceylon (34:2-34:19)
                var namedItem$32769;
                //Switch statement at htmlcollection.ceylon (35:2-45:2)
                var case$32770=name$32768;
                if ($$$cl32209.isOfType(name$32768,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    namedItem$32769=$$hTMLCollectionAbs.$native.namedItem(/*NULL PARAM!*/case$32770.valueOf());/*End dynamic block*/
                }else if ($$$cl32209.isOfType(name$32768,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    namedItem$32769=$$hTMLCollectionAbs.$native.namedItem(/*NULL PARAM!*/case$32770.$native);/*End dynamic block*/
                }//End switch statement at htmlcollection.ceylon (35:2-45:2)
                /*Begin dynamic block*/
                if((tmpvar$32771=namedItem$32769,tmpvar$32772=null,(tmpvar$32771.equals&&tmpvar$32771.equals(tmpvar$32772))||tmpvar$32771===tmpvar$32772)){
                    return $$$cjl32280.JSObject(namedItem$32769);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$hTMLCollectionAbs.namedItem.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSObject}]},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:HTMLCollectionAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','HTMLCollectionAbs','$m','namedItem']};};
        })(HTMLCollectionAbs.$$.prototype);
    }
    return HTMLCollectionAbs;
}
exports.$init$HTMLCollectionAbs=$init$HTMLCollectionAbs;
$init$HTMLCollectionAbs();

//ClassDefinition HTMLCollection at htmlcollection.ceylon (56:0-61:0)
function HTMLCollection(n$32773, $$hTMLCollection){
    $init$HTMLCollection();
    if ($$hTMLCollection===undefined)$$hTMLCollection=new HTMLCollection.$$;
    $$hTMLCollection.n$32773_=n$32773;
    HTMLCollectionAbs($$hTMLCollection);
    
    //AttributeDeclaration native at htmlcollection.ceylon (57:1-57:29)
    $$hTMLCollection.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:HTMLCollection,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom','HTMLCollection','$at','native']};}};
    /*Begin dynamic block*/
    $$hTMLCollection.$native=$$hTMLCollection.n$32773;/*End dynamic block*/
    return $$hTMLCollection;
}
HTMLCollection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:HTMLCollectionAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','HTMLCollection']};};
exports.HTMLCollection=HTMLCollection;
function $init$HTMLCollection(){
    if (HTMLCollection.$$===undefined){
        $$$cl32209.initTypeProto(HTMLCollection,'ceylon.js.dom::HTMLCollection',$init$HTMLCollectionAbs());
        (function($$hTMLCollection){
            
            //AttributeDeclaration native at htmlcollection.ceylon (57:1-57:29)
            $$$cl32209.defineAttr($$hTMLCollection,'n$32773',function(){return this.n$32773_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:HTMLCollection,d:['ceylon.js.dom','HTMLCollection','$at','n']};});
        })(HTMLCollection.$$.prototype);
    }
    return HTMLCollection;
}
exports.$init$HTMLCollection=$init$HTMLCollection;
$init$HTMLCollection();

//ClassDefinition ElementAbs at element.ceylon (3:0-310:0)
function ElementAbs($$elementAbs){
    $init$ElementAbs();
    if ($$elementAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$elementAbs);
    return $$elementAbs;
}
ElementAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','ElementAbs']};};
exports.ElementAbs=ElementAbs;
function $init$ElementAbs(){
    if (ElementAbs.$$===undefined){
        $$$cl32209.initTypeProto(ElementAbs,'ceylon.js.dom::ElementAbs',$init$NodeAbs());
        (function($$elementAbs){
            
            //MethodDefinition getAttribute at element.ceylon (5:4-25:1)
            $$elementAbs.getAttribute=function getAttribute(attributeName$32836){
                var $$elementAbs=this;
                
                //AttributeDeclaration attr at element.ceylon (6:2-6:14)
                var attr$32837;
                //Switch statement at element.ceylon (7:2-17:2)
                var case$32838=attributeName$32836;
                if ($$$cl32209.isOfType(attributeName$32836,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    attr$32837=$$elementAbs.$native.getAttribute(/*NULL PARAM!*/case$32838.valueOf());/*End dynamic block*/
                }else if ($$$cl32209.isOfType(attributeName$32836,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    attr$32837=$$elementAbs.$native.getAttribute(/*NULL PARAM!*/case$32838.$native);/*End dynamic block*/
                }//End switch statement at element.ceylon (7:2-17:2)
                /*Begin dynamic block*/
                if(((tmpvar$32839=attr$32837,tmpvar$32840=null,(tmpvar$32839.equals&&!tmpvar$32839.equals(tmpvar$32840))||tmpvar$32839!==tmpvar$32840)||(tmpvar$32841=attr$32837,tmpvar$32842=$$$cl32209.String("",0),(tmpvar$32841.equals&&!tmpvar$32841.equals(tmpvar$32842))||tmpvar$32841!==tmpvar$32842))){
                    return $$$cjl32280.JSString(attr$32837);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$elementAbs.getAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[{$nm:'attributeName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','ElementAbs','$m','getAttribute']};};
            
            //MethodDefinition getAttributeNS at element.ceylon (27:4-63:1)
            $$elementAbs.getAttributeNS=function getAttributeNS(namespace$32843,attributeName$32844){
                var $$elementAbs=this;
                
                //AttributeDeclaration attr at element.ceylon (28:2-28:14)
                var attr$32845;
                //Switch statement at element.ceylon (29:2-55:2)
                var case$32846=namespace$32843;
                if ($$$cl32209.isOfType(namespace$32843,{t:$$$cl32209.String})) {
                    //Switch statement at element.ceylon (31:3-41:3)
                    var case$32847=attributeName$32844;
                    if ($$$cl32209.isOfType(attributeName$32844,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        attr$32845=$$elementAbs.$native.getAttributeNS(/*NULL PARAM!*/case$32846.valueOf()/*NULL PARAM!*/,case$32847.valueOf());/*End dynamic block*/
                    }else if ($$$cl32209.isOfType(attributeName$32844,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        attr$32845=$$elementAbs.$native.getAttributeNS(/*NULL PARAM!*/case$32846.valueOf()/*NULL PARAM!*/,case$32847.$native);/*End dynamic block*/
                    }//End switch statement at element.ceylon (31:3-41:3)
                }else if ($$$cl32209.isOfType(namespace$32843,{t:$$$cjl32280.JSString})) {
                    //Switch statement at element.ceylon (44:3-54:3)
                    var case$32848=attributeName$32844;
                    if ($$$cl32209.isOfType(attributeName$32844,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        attr$32845=$$elementAbs.$native.getAttributeNS(/*NULL PARAM!*/case$32846.$native/*NULL PARAM!*/,case$32848.valueOf());/*End dynamic block*/
                    }else if ($$$cl32209.isOfType(attributeName$32844,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        attr$32845=$$elementAbs.$native.getAttributeNS(/*NULL PARAM!*/case$32846.$native/*NULL PARAM!*/,case$32848.$native);/*End dynamic block*/
                    }//End switch statement at element.ceylon (44:3-54:3)
                }//End switch statement at element.ceylon (29:2-55:2)
                /*Begin dynamic block*/
                if(((tmpvar$32849=attr$32845,tmpvar$32850=null,(tmpvar$32849.equals&&!tmpvar$32849.equals(tmpvar$32850))||tmpvar$32849!==tmpvar$32850)||(tmpvar$32851=attr$32845,tmpvar$32852=$$$cl32209.String("",0),(tmpvar$32851.equals&&!tmpvar$32851.equals(tmpvar$32852))||tmpvar$32851!==tmpvar$32852))){
                    return $$$cjl32280.JSString(attr$32845);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$elementAbs.getAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'attributeName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','ElementAbs','$m','getAttributeNS']};};
            
            //MethodDefinition getElementsByTagName at element.ceylon (65:4-77:1)
            $$elementAbs.getElementsByTagName$defs$tagName=function(tagName$32853){var $$elementAbs=this;
            return $$$cl32209.String("*",1);};
            $$elementAbs.getElementsByTagName=function getElementsByTagName(tagName$32853){
                var $$elementAbs=this;
                if(tagName$32853===undefined){tagName$32853=$$elementAbs.getElementsByTagName$defs$tagName(tagName$32853);}
                //Switch statement at element.ceylon (66:2-76:2)
                var case$32854=tagName$32853;
                if ($$$cl32209.isOfType(tagName$32853,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    return HTMLCollection($$elementAbs.$native.getElementsByTagName(/*NULL PARAM!*/case$32854.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(tagName$32853,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    return HTMLCollection($$elementAbs.$native.getElementsByTagName(/*NULL PARAM!*/case$32854.$native));
                    /*End dynamic block*/
                }//End switch statement at element.ceylon (66:2-76:2)
            };$$elementAbs.getElementsByTagName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'tagName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','ElementAbs','$m','getElementsByTagName']};};
            
            //MethodDefinition getElementsByTagNameNS at element.ceylon (79:4-107:1)
            $$elementAbs.getElementsByTagNameNS$defs$tagName=function(namespace$32855,tagName$32856){var $$elementAbs=this;
            return $$$cl32209.String("*",1);};
            $$elementAbs.getElementsByTagNameNS=function getElementsByTagNameNS(namespace$32855,tagName$32856){
                var $$elementAbs=this;
                if(tagName$32856===undefined){tagName$32856=$$elementAbs.getElementsByTagNameNS$defs$tagName(namespace$32855,tagName$32856);}
                //Switch statement at element.ceylon (80:2-106:2)
                var case$32857=namespace$32855;
                if ($$$cl32209.isOfType(namespace$32855,{t:$$$cl32209.String})) {
                    //Switch statement at element.ceylon (82:3-92:3)
                    var case$32858=tagName$32856;
                    if ($$$cl32209.isOfType(tagName$32856,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$32857.valueOf()/*NULL PARAM!*/,case$32858.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(tagName$32856,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$32857.valueOf()/*NULL PARAM!*/,case$32858.$native));
                        /*End dynamic block*/
                    }//End switch statement at element.ceylon (82:3-92:3)
                }else if ($$$cl32209.isOfType(namespace$32855,{t:$$$cjl32280.JSString})) {
                    //Switch statement at element.ceylon (95:3-105:3)
                    var case$32859=tagName$32856;
                    if ($$$cl32209.isOfType(tagName$32856,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$32857.$native/*NULL PARAM!*/,case$32859.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(tagName$32856,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$32857.$native/*NULL PARAM!*/,case$32859.$native));
                        /*End dynamic block*/
                    }//End switch statement at element.ceylon (95:3-105:3)
                }//End switch statement at element.ceylon (80:2-106:2)
            };$$elementAbs.getElementsByTagNameNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'tagName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','ElementAbs','$m','getElementsByTagNameNS']};};
            
            //MethodDefinition hasAttribute at element.ceylon (109:4-129:1)
            $$elementAbs.hasAttribute=function hasAttribute(attName$32860){
                var $$elementAbs=this;
                
                //AttributeDeclaration has at element.ceylon (110:2-110:13)
                var has$32861;
                //Switch statement at element.ceylon (111:2-121:2)
                var case$32862=attName$32860;
                if ($$$cl32209.isOfType(attName$32860,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    has$32861=$$elementAbs.$native.hasAttribute(/*NULL PARAM!*/case$32862.valueOf());/*End dynamic block*/
                }else if ($$$cl32209.isOfType(attName$32860,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    has$32861=$$elementAbs.$native.hasAttribute(/*NULL PARAM!*/case$32862.$native);/*End dynamic block*/
                }//End switch statement at element.ceylon (111:2-121:2)
                /*Begin dynamic block*/
                if(has$32861){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$elementAbs.hasAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'attName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','ElementAbs','$m','hasAttribute']};};
            
            //MethodDefinition hasAttributeNS at element.ceylon (131:4-167:1)
            $$elementAbs.hasAttributeNS=function hasAttributeNS(namespace$32863,attName$32864){
                var $$elementAbs=this;
                
                //AttributeDeclaration has at element.ceylon (132:2-132:13)
                var has$32865;
                //Switch statement at element.ceylon (133:2-159:2)
                var case$32866=namespace$32863;
                if ($$$cl32209.isOfType(namespace$32863,{t:$$$cl32209.String})) {
                    //Switch statement at element.ceylon (135:3-145:3)
                    var case$32867=attName$32864;
                    if ($$$cl32209.isOfType(attName$32864,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        has$32865=$$elementAbs.$native.hasAttributeNS(/*NULL PARAM!*/case$32866.valueOf()/*NULL PARAM!*/,case$32867.valueOf());/*End dynamic block*/
                    }else if ($$$cl32209.isOfType(attName$32864,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        has$32865=$$elementAbs.$native.hasAttributeNS(/*NULL PARAM!*/case$32866.valueOf()/*NULL PARAM!*/,case$32867.$native);/*End dynamic block*/
                    }//End switch statement at element.ceylon (135:3-145:3)
                }else if ($$$cl32209.isOfType(namespace$32863,{t:$$$cjl32280.JSString})) {
                    //Switch statement at element.ceylon (148:3-158:3)
                    var case$32868=attName$32864;
                    if ($$$cl32209.isOfType(attName$32864,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        has$32865=$$elementAbs.$native.hasAttributeNS(/*NULL PARAM!*/case$32866.$native/*NULL PARAM!*/,case$32868.valueOf());/*End dynamic block*/
                    }else if ($$$cl32209.isOfType(attName$32864,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        has$32865=$$elementAbs.$native.hasAttributeNS(/*NULL PARAM!*/case$32866.$native/*NULL PARAM!*/,case$32868.$native);/*End dynamic block*/
                    }//End switch statement at element.ceylon (148:3-158:3)
                }//End switch statement at element.ceylon (133:2-159:2)
                /*Begin dynamic block*/
                if(has$32865){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$elementAbs.hasAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'attName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','ElementAbs','$m','hasAttributeNS']};};
            
            //MethodDefinition removeAttribute at element.ceylon (169:4-181:1)
            $$elementAbs.removeAttribute=function removeAttribute(attrName$32869){
                var $$elementAbs=this;
                //Switch statement at element.ceylon (170:2-180:2)
                var case$32870=attrName$32869;
                if ($$$cl32209.isOfType(attrName$32869,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$32870.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(attrName$32869,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$32870.$native);
                    /*End dynamic block*/
                }//End switch statement at element.ceylon (170:2-180:2)
            };$$elementAbs.removeAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'attrName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','ElementAbs','$m','removeAttribute']};};
            
            //MethodDefinition removeAttributeNS at element.ceylon (183:4-211:1)
            $$elementAbs.removeAttributeNS=function removeAttributeNS(namespace$32871,attrName$32872){
                var $$elementAbs=this;
                //Switch statement at element.ceylon (184:2-210:2)
                var case$32873=namespace$32871;
                if ($$$cl32209.isOfType(namespace$32871,{t:$$$cl32209.String})) {
                    //Switch statement at element.ceylon (186:3-196:3)
                    var case$32874=attrName$32872;
                    if ($$$cl32209.isOfType(attrName$32872,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$32873.valueOf()/*NULL PARAM!*/,case$32874.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(attrName$32872,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$32873.valueOf()/*NULL PARAM!*/,case$32874.$native);
                        /*End dynamic block*/
                    }//End switch statement at element.ceylon (186:3-196:3)
                }else if ($$$cl32209.isOfType(namespace$32871,{t:$$$cjl32280.JSString})) {
                    //Switch statement at element.ceylon (199:3-209:3)
                    var case$32875=attrName$32872;
                    if ($$$cl32209.isOfType(attrName$32872,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$32873.$native/*NULL PARAM!*/,case$32875.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(attrName$32872,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$32873.$native/*NULL PARAM!*/,case$32875.$native);
                        /*End dynamic block*/
                    }//End switch statement at element.ceylon (199:3-209:3)
                }//End switch statement at element.ceylon (184:2-210:2)
            };$$elementAbs.removeAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'attrName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','ElementAbs','$m','removeAttributeNS']};};
            
            //MethodDefinition setAttribute at element.ceylon (213:4-241:1)
            $$elementAbs.setAttribute=function setAttribute(name$32876,val$32877){
                var $$elementAbs=this;
                //Switch statement at element.ceylon (214:2-240:2)
                var case$32878=name$32876;
                if ($$$cl32209.isOfType(name$32876,{t:$$$cl32209.String})) {
                    //Switch statement at element.ceylon (216:3-226:3)
                    var case$32879=val$32877;
                    if ($$$cl32209.isOfType(val$32877,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        $$elementAbs.$native.setAttribute(/*NULL PARAM!*/case$32878.valueOf()/*NULL PARAM!*/,case$32879.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(val$32877,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        $$elementAbs.$native.setAttribute(/*NULL PARAM!*/case$32878.valueOf()/*NULL PARAM!*/,case$32879.$native);
                        /*End dynamic block*/
                    }//End switch statement at element.ceylon (216:3-226:3)
                }else if ($$$cl32209.isOfType(name$32876,{t:$$$cjl32280.JSString})) {
                    //Switch statement at element.ceylon (229:3-239:3)
                    var case$32880=val$32877;
                    if ($$$cl32209.isOfType(val$32877,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        $$elementAbs.$native.setAttribute(/*NULL PARAM!*/case$32878.$native/*NULL PARAM!*/,case$32880.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(val$32877,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        $$elementAbs.$native.setAttribute(/*NULL PARAM!*/case$32878.$native/*NULL PARAM!*/,case$32880.$native);
                        /*End dynamic block*/
                    }//End switch statement at element.ceylon (229:3-239:3)
                }//End switch statement at element.ceylon (214:2-240:2)
            };$$elementAbs.setAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','ElementAbs','$m','setAttribute']};};
            
            //MethodDefinition setAttributeNS at element.ceylon (243:4-303:1)
            $$elementAbs.setAttributeNS=function setAttributeNS(namespace$32881,name$32882,val$32883){
                var $$elementAbs=this;
                //Switch statement at element.ceylon (244:2-302:2)
                var case$32884=namespace$32881;
                if ($$$cl32209.isOfType(namespace$32881,{t:$$$cl32209.String})) {
                    //Switch statement at element.ceylon (246:3-272:3)
                    var case$32885=name$32882;
                    if ($$$cl32209.isOfType(name$32882,{t:$$$cl32209.String})) {
                        //Switch statement at element.ceylon (248:4-258:4)
                        var case$32886=val$32883;
                        if ($$$cl32209.isOfType(val$32883,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$32884.valueOf()/*NULL PARAM!*/,case$32885.valueOf()/*NULL PARAM!*/,case$32886.valueOf());
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(val$32883,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$32884.valueOf()/*NULL PARAM!*/,case$32885.valueOf()/*NULL PARAM!*/,case$32886.$native);
                            /*End dynamic block*/
                        }//End switch statement at element.ceylon (248:4-258:4)
                    }else if ($$$cl32209.isOfType(name$32882,{t:$$$cjl32280.JSString})) {
                        //Switch statement at element.ceylon (261:4-271:4)
                        var case$32887=val$32883;
                        if ($$$cl32209.isOfType(val$32883,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$32884.valueOf()/*NULL PARAM!*/,case$32885.$native/*NULL PARAM!*/,case$32887.valueOf());
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(val$32883,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$32884.valueOf()/*NULL PARAM!*/,case$32885.$native/*NULL PARAM!*/,case$32887.$native);
                            /*End dynamic block*/
                        }//End switch statement at element.ceylon (261:4-271:4)
                    }//End switch statement at element.ceylon (246:3-272:3)
                }else if ($$$cl32209.isOfType(namespace$32881,{t:$$$cjl32280.JSString})) {
                    //Switch statement at element.ceylon (275:3-301:3)
                    var case$32888=name$32882;
                    if ($$$cl32209.isOfType(name$32882,{t:$$$cl32209.String})) {
                        //Switch statement at element.ceylon (277:4-287:4)
                        var case$32889=val$32883;
                        if ($$$cl32209.isOfType(val$32883,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$32884.$native/*NULL PARAM!*/,case$32888.valueOf()/*NULL PARAM!*/,case$32889.valueOf());
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(val$32883,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$32884.$native/*NULL PARAM!*/,case$32888.valueOf()/*NULL PARAM!*/,case$32889.$native);
                            /*End dynamic block*/
                        }//End switch statement at element.ceylon (277:4-287:4)
                    }else if ($$$cl32209.isOfType(name$32882,{t:$$$cjl32280.JSString})) {
                        //Switch statement at element.ceylon (290:4-300:4)
                        var case$32890=val$32883;
                        if ($$$cl32209.isOfType(val$32883,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$32884.$native/*NULL PARAM!*/,case$32888.$native/*NULL PARAM!*/,case$32890.valueOf());
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(val$32883,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$32884.$native/*NULL PARAM!*/,case$32888.$native/*NULL PARAM!*/,case$32890.$native);
                            /*End dynamic block*/
                        }//End switch statement at element.ceylon (290:4-300:4)
                    }//End switch statement at element.ceylon (275:3-301:3)
                }//End switch statement at element.ceylon (244:2-302:2)
            };$$elementAbs.setAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','ElementAbs','$m','setAttributeNS']};};
            
            //MethodDefinition tagName at element.ceylon (305:4-309:1)
            $$elementAbs.tagName=function tagName(){
                var $$elementAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$elementAbs.$native.tagName);
                /*End dynamic block*/
            };$$elementAbs.tagName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:ElementAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','ElementAbs','$m','tagName']};};
        })(ElementAbs.$$.prototype);
    }
    return ElementAbs;
}
exports.$init$ElementAbs=$init$ElementAbs;
$init$ElementAbs();

//ClassDefinition Element at element.ceylon (312:0-317:0)
function Element(n$32891, $$element){
    $init$Element();
    if ($$element===undefined)$$element=new Element.$$;
    $$element.n$32891_=n$32891;
    ElementAbs($$element);
    
    //AttributeDeclaration native at element.ceylon (313:1-313:29)
    $$element.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Element,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom','Element','$at','native']};}};
    /*Begin dynamic block*/
    $$element.$native=$$element.n$32891;/*End dynamic block*/
    return $$element;
}
Element.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:ElementAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','Element']};};
exports.Element=Element;
function $init$Element(){
    if (Element.$$===undefined){
        $$$cl32209.initTypeProto(Element,'ceylon.js.dom::Element',$init$ElementAbs());
        (function($$element){
            
            //AttributeDeclaration native at element.ceylon (313:1-313:29)
            $$$cl32209.defineAttr($$element,'n$32891',function(){return this.n$32891_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Element,d:['ceylon.js.dom','Element','$at','n']};});
        })(Element.$$.prototype);
    }
    return Element;
}
exports.$init$Element=$init$Element;
$init$Element();

//ClassDefinition TreeWalkerAbs at treewalker.ceylon (3:0-110:0)
function TreeWalkerAbs($$treeWalkerAbs){
    $init$TreeWalkerAbs();
    if ($$treeWalkerAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$treeWalkerAbs);
    return $$treeWalkerAbs;
}
TreeWalkerAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','TreeWalkerAbs']};};
exports.TreeWalkerAbs=TreeWalkerAbs;
function $init$TreeWalkerAbs(){
    if (TreeWalkerAbs.$$===undefined){
        $$$cl32209.initTypeProto(TreeWalkerAbs,'ceylon.js.dom::TreeWalkerAbs',$$$cjl32280.JSObjectAbs);
        (function($$treeWalkerAbs){
            
            //MethodDefinition root at treewalker.ceylon (5:1-9:4)
            $$treeWalkerAbs.root=function root(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                return Node($$treeWalkerAbs.$native.root);
                /*End dynamic block*/
            };$$treeWalkerAbs.root.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','root']};};
            
            //MethodDefinition whatToShow at treewalker.ceylon (11:4-15:4)
            $$treeWalkerAbs.whatToShow=function whatToShow(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$32892=$$treeWalkerAbs.$native.whatToShow,$$$cl32209.isOfType(tmpvar$32892,{t:$$$cl32209.Anything})?tmpvar$32892:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'13:19-13:35','treewalker.ceylon'));
                /*End dynamic block*/
            };$$treeWalkerAbs.whatToShow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','whatToShow']};};
            
            //MethodDefinition filter at treewalker.ceylon (17:4-26:4)
            $$treeWalkerAbs.filter=function filter(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration filter at treewalker.ceylon (19:12-19:42)
                var filter$32893=$$treeWalkerAbs.$native.filter;
                $prop$getFilter$32893={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','filter','$at','filter']};}};
                $prop$getFilter$32893.get=function(){return filter$32893};
                if((tmpvar$32894=filter$32893,tmpvar$32895=null,(tmpvar$32894.equals&&!tmpvar$32894.equals(tmpvar$32895))||tmpvar$32894!==tmpvar$32895)){
                    return NodeFilter((tmpvar$32896=filter$32893,$$$cl32209.isOfType(tmpvar$32896,{t:NodeFilterResult})?tmpvar$32896:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'21:34-21:39','treewalker.ceylon')));
                }else {
                    return null;
                }/*End dynamic block*/
            };$$treeWalkerAbs.filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:NodeFilter}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','filter']};};
            
            //MethodDefinition currentNode at treewalker.ceylon (28:4-32:4)
            $$treeWalkerAbs.currentNode=function currentNode(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                return Node($$treeWalkerAbs.$native.currentNode());
                /*End dynamic block*/
            };$$treeWalkerAbs.currentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','currentNode']};};
            
            //MethodDefinition parentNode at treewalker.ceylon (34:4-43:4)
            $$treeWalkerAbs.parentNode=function parentNode(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration parent at treewalker.ceylon (36:12-36:48)
                var parent$32897=$$treeWalkerAbs.$native.parentNode();
                $prop$getParent$32897={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','parentNode','$at','parent']};}};
                $prop$getParent$32897.get=function(){return parent$32897};
                if((tmpvar$32898=parent$32897,tmpvar$32899=null,(tmpvar$32898.equals&&!tmpvar$32898.equals(tmpvar$32899))||tmpvar$32898!==tmpvar$32899)){
                    return Node(parent$32897);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$treeWalkerAbs.parentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','parentNode']};};
            
            //MethodDefinition firstChild at treewalker.ceylon (45:4-54:4)
            $$treeWalkerAbs.firstChild=function firstChild(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration first at treewalker.ceylon (47:12-47:47)
                var first$32900=$$treeWalkerAbs.$native.firstChild();
                $prop$getFirst$32900={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','firstChild','$at','first']};}};
                $prop$getFirst$32900.get=function(){return first$32900};
                if((tmpvar$32901=first$32900,tmpvar$32902=null,(tmpvar$32901.equals&&!tmpvar$32901.equals(tmpvar$32902))||tmpvar$32901!==tmpvar$32902)){
                    return Node(first$32900);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$treeWalkerAbs.firstChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','firstChild']};};
            
            //MethodDefinition lastChild at treewalker.ceylon (56:4-65:4)
            $$treeWalkerAbs.lastChild=function lastChild(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration last at treewalker.ceylon (58:12-58:45)
                var last$32903=$$treeWalkerAbs.$native.lastChild();
                $prop$getLast$32903={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','lastChild','$at','last']};}};
                $prop$getLast$32903.get=function(){return last$32903};
                if((tmpvar$32904=last$32903,tmpvar$32905=null,(tmpvar$32904.equals&&!tmpvar$32904.equals(tmpvar$32905))||tmpvar$32904!==tmpvar$32905)){
                    return Node(last$32903);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$treeWalkerAbs.lastChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','lastChild']};};
            
            //MethodDefinition previousSibling at treewalker.ceylon (67:4-76:4)
            $$treeWalkerAbs.previousSibling=function previousSibling(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration previous at treewalker.ceylon (69:12-69:55)
                var previous$32906=$$treeWalkerAbs.$native.previousSibling();
                $prop$getPrevious$32906={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','previousSibling','$at','previous']};}};
                $prop$getPrevious$32906.get=function(){return previous$32906};
                if((tmpvar$32907=previous$32906,tmpvar$32908=null,(tmpvar$32907.equals&&!tmpvar$32907.equals(tmpvar$32908))||tmpvar$32907!==tmpvar$32908)){
                    return Node(previous$32906);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$treeWalkerAbs.previousSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','previousSibling']};};
            
            //MethodDefinition nextSibling at treewalker.ceylon (78:4-87:4)
            $$treeWalkerAbs.nextSibling=function nextSibling(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration next at treewalker.ceylon (80:12-80:47)
                var next$32909=$$treeWalkerAbs.$native.nextSibling();
                $prop$getNext$32909={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','nextSibling','$at','next']};}};
                $prop$getNext$32909.get=function(){return next$32909};
                if((tmpvar$32910=next$32909,tmpvar$32911=null,(tmpvar$32910.equals&&!tmpvar$32910.equals(tmpvar$32911))||tmpvar$32910!==tmpvar$32911)){
                    return Node(next$32909);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$treeWalkerAbs.nextSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','nextSibling']};};
            
            //MethodDefinition previousNode at treewalker.ceylon (89:4-98:4)
            $$treeWalkerAbs.previousNode=function previousNode(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration previous at treewalker.ceylon (91:12-91:52)
                var previous$32912=$$treeWalkerAbs.$native.previousNode();
                $prop$getPrevious$32912={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','previousNode','$at','previous']};}};
                $prop$getPrevious$32912.get=function(){return previous$32912};
                if((tmpvar$32913=previous$32912,tmpvar$32914=null,(tmpvar$32913.equals&&!tmpvar$32913.equals(tmpvar$32914))||tmpvar$32913!==tmpvar$32914)){
                    return Node(previous$32912);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$treeWalkerAbs.previousNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','previousNode']};};
            
            //MethodDefinition nextNode at treewalker.ceylon (100:4-109:4)
            $$treeWalkerAbs.nextNode=function nextNode(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration next at treewalker.ceylon (102:12-102:44)
                var next$32915=$$treeWalkerAbs.$native.nextNode();
                $prop$getNext$32915={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','nextNode','$at','next']};}};
                $prop$getNext$32915.get=function(){return next$32915};
                if((tmpvar$32916=next$32915,tmpvar$32917=null,(tmpvar$32916.equals&&!tmpvar$32916.equals(tmpvar$32917))||tmpvar$32916!==tmpvar$32917)){
                    return Node(next$32915);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$treeWalkerAbs.nextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','nextNode']};};
        })(TreeWalkerAbs.$$.prototype);
    }
    return TreeWalkerAbs;
}
exports.$init$TreeWalkerAbs=$init$TreeWalkerAbs;
$init$TreeWalkerAbs();

//ClassDefinition TreeWalker at treewalker.ceylon (112:0-117:0)
function TreeWalker(n$32918, $$treeWalker){
    $init$TreeWalker();
    if ($$treeWalker===undefined)$$treeWalker=new TreeWalker.$$;
    $$treeWalker.n$32918_=n$32918;
    TreeWalkerAbs($$treeWalker);
    
    //AttributeDeclaration native at treewalker.ceylon (113:1-113:29)
    $$treeWalker.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:TreeWalker,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom','TreeWalker','$at','native']};}};
    /*Begin dynamic block*/
    $$treeWalker.$native=$$treeWalker.n$32918;/*End dynamic block*/
    return $$treeWalker;
}
TreeWalker.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TreeWalkerAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','TreeWalker']};};
exports.TreeWalker=TreeWalker;
function $init$TreeWalker(){
    if (TreeWalker.$$===undefined){
        $$$cl32209.initTypeProto(TreeWalker,'ceylon.js.dom::TreeWalker',$init$TreeWalkerAbs());
        (function($$treeWalker){
            
            //AttributeDeclaration native at treewalker.ceylon (113:1-113:29)
            $$$cl32209.defineAttr($$treeWalker,'n$32918',function(){return this.n$32918_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:TreeWalker,d:['ceylon.js.dom','TreeWalker','$at','n']};});
        })(TreeWalker.$$.prototype);
    }
    return TreeWalker;
}
exports.$init$TreeWalker=$init$TreeWalker;
$init$TreeWalker();

//ClassDefinition NodeIteratorAbs at nodeiterator.ceylon (3:0-50:0)
function NodeIteratorAbs($$nodeIteratorAbs){
    $init$NodeIteratorAbs();
    if ($$nodeIteratorAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$nodeIteratorAbs);
    return $$nodeIteratorAbs;
}
NodeIteratorAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','NodeIteratorAbs']};};
exports.NodeIteratorAbs=NodeIteratorAbs;
function $init$NodeIteratorAbs(){
    if (NodeIteratorAbs.$$===undefined){
        $$$cl32209.initTypeProto(NodeIteratorAbs,'ceylon.js.dom::NodeIteratorAbs',$$$cjl32280.JSObjectAbs);
        (function($$nodeIteratorAbs){
            
            //MethodDefinition root at nodeiterator.ceylon (5:4-9:4)
            $$nodeIteratorAbs.root=function root(){
                var $$nodeIteratorAbs=this;
                /*Begin dynamic block*/
                return Node($$nodeIteratorAbs.$native.root);
                /*End dynamic block*/
            };$$nodeIteratorAbs.root.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','root']};};
            
            //MethodDefinition whatToShow at nodeiterator.ceylon (11:4-15:4)
            $$nodeIteratorAbs.whatToShow=function whatToShow(){
                var $$nodeIteratorAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$32925=$$nodeIteratorAbs.$native.whatToShow,$$$cl32209.isOfType(tmpvar$32925,{t:$$$cl32209.Anything})?tmpvar$32925:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'13:19-13:35','nodeiterator.ceylon'));
                /*End dynamic block*/
            };$$nodeIteratorAbs.whatToShow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','whatToShow']};};
            
            //MethodDefinition filter at nodeiterator.ceylon (17:4-26:4)
            $$nodeIteratorAbs.filter=function filter(){
                var $$nodeIteratorAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration filter at nodeiterator.ceylon (19:12-19:42)
                var filter$32926=$$nodeIteratorAbs.$native.filter;
                $prop$getFilter$32926={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','NodeIteratorAbs','$m','filter','$at','filter']};}};
                $prop$getFilter$32926.get=function(){return filter$32926};
                if((tmpvar$32927=filter$32926,tmpvar$32928=null,(tmpvar$32927.equals&&!tmpvar$32927.equals(tmpvar$32928))||tmpvar$32927!==tmpvar$32928)){
                    return NodeFilter((tmpvar$32929=filter$32926,$$$cl32209.isOfType(tmpvar$32929,{t:NodeFilterResult})?tmpvar$32929:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'21:34-21:39','nodeiterator.ceylon')));
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeIteratorAbs.filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:NodeFilter}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','filter']};};
            
            //MethodDefinition nextNode at nodeiterator.ceylon (28:4-37:4)
            $$nodeIteratorAbs.nextNode=function nextNode(){
                var $$nodeIteratorAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration next at nodeiterator.ceylon (30:12-30:44)
                var next$32930=$$nodeIteratorAbs.$native.nextNode();
                $prop$getNext$32930={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','NodeIteratorAbs','$m','nextNode','$at','next']};}};
                $prop$getNext$32930.get=function(){return next$32930};
                if((tmpvar$32931=next$32930,tmpvar$32932=null,(tmpvar$32931.equals&&!tmpvar$32931.equals(tmpvar$32932))||tmpvar$32931!==tmpvar$32932)){
                    return Node(next$32930);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeIteratorAbs.nextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Node}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','nextNode']};};
            
            //MethodDefinition previousNode at nodeiterator.ceylon (39:4-48:4)
            $$nodeIteratorAbs.previousNode=function previousNode(){
                var $$nodeIteratorAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration previous at nodeiterator.ceylon (41:12-41:52)
                var previous$32933=$$nodeIteratorAbs.$native.previousNode();
                $prop$getPrevious$32933={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','NodeIteratorAbs','$m','previousNode','$at','previous']};}};
                $prop$getPrevious$32933.get=function(){return previous$32933};
                if((tmpvar$32934=previous$32933,tmpvar$32935=null,(tmpvar$32934.equals&&!tmpvar$32934.equals(tmpvar$32935))||tmpvar$32934!==tmpvar$32935)){
                    return Node(previous$32933);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeIteratorAbs.previousNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Node}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','previousNode']};};
        })(NodeIteratorAbs.$$.prototype);
    }
    return NodeIteratorAbs;
}
exports.$init$NodeIteratorAbs=$init$NodeIteratorAbs;
$init$NodeIteratorAbs();

//ClassDefinition NodeIterator at nodeiterator.ceylon (52:0-57:0)
function NodeIterator(n$32936, $$nodeIterator){
    $init$NodeIterator();
    if ($$nodeIterator===undefined)$$nodeIterator=new NodeIterator.$$;
    $$nodeIterator.n$32936_=n$32936;
    NodeIteratorAbs($$nodeIterator);
    
    //AttributeDeclaration native at nodeiterator.ceylon (53:1-53:29)
    $$nodeIterator.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:NodeIterator,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom','NodeIterator','$at','native']};}};
    /*Begin dynamic block*/
    $$nodeIterator.$native=$$nodeIterator.n$32936;/*End dynamic block*/
    return $$nodeIterator;
}
NodeIterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeIteratorAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeIterator']};};
exports.NodeIterator=NodeIterator;
function $init$NodeIterator(){
    if (NodeIterator.$$===undefined){
        $$$cl32209.initTypeProto(NodeIterator,'ceylon.js.dom::NodeIterator',$init$NodeIteratorAbs());
        (function($$nodeIterator){
            
            //AttributeDeclaration native at nodeiterator.ceylon (53:1-53:29)
            $$$cl32209.defineAttr($$nodeIterator,'n$32936',function(){return this.n$32936_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:NodeIterator,d:['ceylon.js.dom','NodeIterator','$at','n']};});
        })(NodeIterator.$$.prototype);
    }
    return NodeIterator;
}
exports.$init$NodeIterator=$init$NodeIterator;
$init$NodeIterator();

//ClassDefinition RangeCompareHow at range.ceylon (3:0-3:105)
function RangeCompareHow(name$32949, $$rangeCompareHow){
    $init$RangeCompareHow();
    if ($$rangeCompareHow===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$rangeCompareHow.name$32949_=name$32949;
    return $$rangeCompareHow;
}
RangeCompareHow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','RangeCompareHow']};};
exports.RangeCompareHow=RangeCompareHow;
function $init$RangeCompareHow(){
    if (RangeCompareHow.$$===undefined){
        $$$cl32209.initTypeProto(RangeCompareHow,'ceylon.js.dom::RangeCompareHow',$$$cl32209.Basic);
        (function($$rangeCompareHow){
            $$$cl32209.defineAttr($$rangeCompareHow,'name$32949',function(){return this.name$32949_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$cont:RangeCompareHow,d:['ceylon.js.dom','RangeCompareHow','$at','name']};});
        })(RangeCompareHow.$$.prototype);
    }
    return RangeCompareHow;
}
exports.$init$RangeCompareHow=$init$RangeCompareHow;
$init$RangeCompareHow();

//ObjectDefinition endToEnd at range.ceylon (5:0-5:60)
function endToEnd$32950(){
    var $$endToEnd=new endToEnd$32950.$$;
    RangeCompareHow($$$cl32209.String("endToEnd",8),$$endToEnd);
    return $$endToEnd;
}
function $init$endToEnd$32950(){
    if (endToEnd$32950.$$===undefined){
        $$$cl32209.initTypeProto(endToEnd$32950,'ceylon.js.dom::endToEnd',$init$RangeCompareHow());
    }
    return endToEnd$32950;
}
exports.$init$endToEnd$32950=$init$endToEnd$32950;
$init$endToEnd$32950();
var endToEnd$32951;
function getEndToEnd(){
    if (endToEnd$32951===undefined)endToEnd$32951=$init$endToEnd$32950()();
    return endToEnd$32951;
}
exports.getEndToEnd=getEndToEnd;
getEndToEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:endToEnd$32950},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','endToEnd']};};
$prop$getEndToEnd={get:getEndToEnd,$$metamodel$$:getEndToEnd.$$metamodel$$};
exports.$prop$getEndToEnd=$prop$getEndToEnd;

//ObjectDefinition endToStart at range.ceylon (6:0-6:64)
function endToStart$32952(){
    var $$endToStart=new endToStart$32952.$$;
    RangeCompareHow($$$cl32209.String("endToStart",10),$$endToStart);
    return $$endToStart;
}
function $init$endToStart$32952(){
    if (endToStart$32952.$$===undefined){
        $$$cl32209.initTypeProto(endToStart$32952,'ceylon.js.dom::endToStart',$init$RangeCompareHow());
    }
    return endToStart$32952;
}
exports.$init$endToStart$32952=$init$endToStart$32952;
$init$endToStart$32952();
var endToStart$32953;
function getEndToStart(){
    if (endToStart$32953===undefined)endToStart$32953=$init$endToStart$32952()();
    return endToStart$32953;
}
exports.getEndToStart=getEndToStart;
getEndToStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:endToStart$32952},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','endToStart']};};
$prop$getEndToStart={get:getEndToStart,$$metamodel$$:getEndToStart.$$metamodel$$};
exports.$prop$getEndToStart=$prop$getEndToStart;

//ObjectDefinition startToEnd at range.ceylon (7:0-7:64)
function startToEnd$32954(){
    var $$startToEnd=new startToEnd$32954.$$;
    RangeCompareHow($$$cl32209.String("startToEnd",10),$$startToEnd);
    return $$startToEnd;
}
function $init$startToEnd$32954(){
    if (startToEnd$32954.$$===undefined){
        $$$cl32209.initTypeProto(startToEnd$32954,'ceylon.js.dom::startToEnd',$init$RangeCompareHow());
    }
    return startToEnd$32954;
}
exports.$init$startToEnd$32954=$init$startToEnd$32954;
$init$startToEnd$32954();
var startToEnd$32955;
function getStartToEnd(){
    if (startToEnd$32955===undefined)startToEnd$32955=$init$startToEnd$32954()();
    return startToEnd$32955;
}
exports.getStartToEnd=getStartToEnd;
getStartToEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:startToEnd$32954},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','startToEnd']};};
$prop$getStartToEnd={get:getStartToEnd,$$metamodel$$:getStartToEnd.$$metamodel$$};
exports.$prop$getStartToEnd=$prop$getStartToEnd;

//ObjectDefinition startToStart at range.ceylon (8:0-8:68)
function startToStart$32956(){
    var $$startToStart=new startToStart$32956.$$;
    RangeCompareHow($$$cl32209.String("startToStart",12),$$startToStart);
    return $$startToStart;
}
function $init$startToStart$32956(){
    if (startToStart$32956.$$===undefined){
        $$$cl32209.initTypeProto(startToStart$32956,'ceylon.js.dom::startToStart',$init$RangeCompareHow());
    }
    return startToStart$32956;
}
exports.$init$startToStart$32956=$init$startToStart$32956;
$init$startToStart$32956();
var startToStart$32957;
function getStartToStart(){
    if (startToStart$32957===undefined)startToStart$32957=$init$startToStart$32956()();
    return startToStart$32957;
}
exports.getStartToStart=getStartToStart;
getStartToStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:startToStart$32956},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','startToStart']};};
$prop$getStartToStart={get:getStartToStart,$$metamodel$$:getStartToStart.$$metamodel$$};
exports.$prop$getStartToStart=$prop$getStartToStart;

//ClassDefinition RangeAbs at range.ceylon (10:0-208:0)
function RangeAbs($$rangeAbs){
    $init$RangeAbs();
    if ($$rangeAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$rangeAbs);
    return $$rangeAbs;
}
RangeAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','RangeAbs']};};
exports.RangeAbs=RangeAbs;
function $init$RangeAbs(){
    if (RangeAbs.$$===undefined){
        $$$cl32209.initTypeProto(RangeAbs,'ceylon.js.dom::RangeAbs',$$$cjl32280.JSObjectAbs);
        (function($$rangeAbs){
            
            //MethodDefinition startContainer at range.ceylon (12:4-16:4)
            $$rangeAbs.startContainer=function startContainer(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                return Node($$rangeAbs.$native.startContainer);
                /*End dynamic block*/
            };$$rangeAbs.startContainer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','startContainer']};};
            
            //MethodDefinition endContainer at range.ceylon (18:4-22:4)
            $$rangeAbs.endContainer=function endContainer(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                return Node($$rangeAbs.$native.endContainer);
                /*End dynamic block*/
            };$$rangeAbs.endContainer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','endContainer']};};
            
            //MethodDefinition startOffset at range.ceylon (24:4-28:4)
            $$rangeAbs.startOffset=function startOffset(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$rangeAbs.$native.startOffset);
                /*End dynamic block*/
            };$$rangeAbs.startOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','startOffset']};};
            
            //MethodDefinition endOffset at range.ceylon (30:4-34:4)
            $$rangeAbs.endOffset=function endOffset(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSNumber($$rangeAbs.$native.endOffset);
                /*End dynamic block*/
            };$$rangeAbs.endOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','endOffset']};};
            
            //MethodDefinition collapsed at range.ceylon (36:4-44:4)
            $$rangeAbs.collapsed=function collapsed(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                if($$rangeAbs.$native.collapsed()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$rangeAbs.collapsed.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','collapsed']};};
            
            //MethodDefinition commonAncestorContainer at range.ceylon (46:4-50:4)
            $$rangeAbs.commonAncestorContainer=function commonAncestorContainer(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                return Node($$rangeAbs.$native.commonAncestorContainer);
                /*End dynamic block*/
            };$$rangeAbs.commonAncestorContainer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','commonAncestorContainer']};};
            
            //MethodDefinition setStart at range.ceylon (52:4-64:4)
            $$rangeAbs.setStart=function setStart(startNode$32958,startOffset$32959){
                var $$rangeAbs=this;
                //Switch statement at range.ceylon (53:8-63:8)
                var case$32960=startOffset$32959;
                if ($$$cl32209.isOfType(startOffset$32959,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$rangeAbs.$native.setStart(/*NULL PARAM!*/startNode$32958/*NULL PARAM!*/,case$32960);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(startOffset$32959,{t:$$$cjl32280.JSNumber})) {
                    /*Begin dynamic block*/
                    $$rangeAbs.$native.setStart(/*NULL PARAM!*/startNode$32958/*NULL PARAM!*/,case$32960.$native);
                    /*End dynamic block*/
                }//End switch statement at range.ceylon (53:8-63:8)
            };$$rangeAbs.setStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'startNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'startOffset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setStart']};};
            
            //MethodDefinition setEnd at range.ceylon (66:4-78:4)
            $$rangeAbs.setEnd=function setEnd(endNode$32961,endOffset$32962){
                var $$rangeAbs=this;
                //Switch statement at range.ceylon (67:8-77:8)
                var case$32963=endOffset$32962;
                if ($$$cl32209.isOfType(endOffset$32962,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    $$rangeAbs.$native.setEnd(/*NULL PARAM!*/endNode$32961/*NULL PARAM!*/,case$32963);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(endOffset$32962,{t:$$$cjl32280.JSNumber})) {
                    /*Begin dynamic block*/
                    $$rangeAbs.$native.setEnd(/*NULL PARAM!*/endNode$32961/*NULL PARAM!*/,case$32963.$native);
                    /*End dynamic block*/
                }//End switch statement at range.ceylon (67:8-77:8)
            };$$rangeAbs.setEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'endNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'endOffset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setEnd']};};
            
            //MethodDefinition setStartBefore at range.ceylon (80:4-84:4)
            $$rangeAbs.setStartBefore=function setStartBefore(refNode$32964){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.setStartBefore(/*NULL PARAM!*/refNode$32964);
                /*End dynamic block*/
            };$$rangeAbs.setStartBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setStartBefore']};};
            
            //MethodDefinition setStartAfter at range.ceylon (86:4-90:4)
            $$rangeAbs.setStartAfter=function setStartAfter(refNode$32965){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.setStartAfter(/*NULL PARAM!*/refNode$32965);
                /*End dynamic block*/
            };$$rangeAbs.setStartAfter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setStartAfter']};};
            
            //MethodDefinition setEndBefore at range.ceylon (92:4-96:4)
            $$rangeAbs.setEndBefore=function setEndBefore(refNode$32966){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.setEndBefore(/*NULL PARAM!*/refNode$32966);
                /*End dynamic block*/
            };$$rangeAbs.setEndBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setEndBefore']};};
            
            //MethodDefinition setEndAfter at range.ceylon (98:4-102:4)
            $$rangeAbs.setEndAfter=function setEndAfter(refNode$32967){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.setEndAfter(/*NULL PARAM!*/refNode$32967);
                /*End dynamic block*/
            };$$rangeAbs.setEndAfter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setEndAfter']};};
            
            //MethodDefinition collapse at range.ceylon (104:4-112:4)
            $$rangeAbs.collapse$defs$toStart=function(toStart$32968){var $$rangeAbs=this;
            return null;};
            $$rangeAbs.collapse=function collapse(toStart$32968){
                var $$rangeAbs=this;
                if(toStart$32968===undefined){toStart$32968=$$rangeAbs.collapse$defs$toStart(toStart$32968);}
                /*Begin dynamic block*/
                var s$32969;
                if((s$32969=toStart$32968)!==null){
                    $$rangeAbs.$native.collapse(/*NULL PARAM!*/s$32969);
                }else {
                    $$rangeAbs.$native.collapse();
                }/*End dynamic block*/
            };$$rangeAbs.collapse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'toStart',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cl32209.Boolean}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','collapse']};};
            
            //MethodDefinition selectNode at range.ceylon (114:4-118:4)
            $$rangeAbs.selectNode=function selectNode(refNode$32970){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.selectNode(/*NULL PARAM!*/refNode$32970);
                /*End dynamic block*/
            };$$rangeAbs.selectNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','selectNode']};};
            
            //MethodDefinition selectNodeContents at range.ceylon (120:4-124:4)
            $$rangeAbs.selectNodeContents=function selectNodeContents(refNode$32971){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.selectNodeContents(/*NULL PARAM!*/refNode$32971);
                /*End dynamic block*/
            };$$rangeAbs.selectNodeContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','selectNodeContents']};};
            
            //MethodDefinition compareBoundaryPoints at range.ceylon (126:4-142:4)
            $$rangeAbs.compareBoundaryPoints=function compareBoundaryPoints(how$32972,sourceRange$32973){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                //Switch statement at range.ceylon (128:12-140:12)
                var case$32974=how$32972;
                if (case$32974===getEndToEnd()) {
                    return $$$cjl32280.JSNumber($$rangeAbs.$native.compareBoundaryPoints(/*NULL PARAM!*/(typeof Range==='undefined'||Range===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Range")),'130:61-130:65','range.ceylon'):Range).START_TO_START/*NULL PARAM!*/,sourceRange$32973));
                }else if (case$32974===getEndToStart()) {
                    return $$$cjl32280.JSNumber($$rangeAbs.$native.compareBoundaryPoints(/*NULL PARAM!*/(typeof Range==='undefined'||Range===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Range")),'133:61-133:65','range.ceylon'):Range).START_TO_END/*NULL PARAM!*/,sourceRange$32973));
                }else if (case$32974===getStartToEnd()) {
                    return $$$cjl32280.JSNumber($$rangeAbs.$native.compareBoundaryPoints(/*NULL PARAM!*/(typeof Range==='undefined'||Range===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Range")),'136:61-136:65','range.ceylon'):Range).END_TO_END/*NULL PARAM!*/,sourceRange$32973));
                }else if (case$32974===getStartToStart()) {
                    return $$$cjl32280.JSNumber($$rangeAbs.$native.compareBoundaryPoints(/*NULL PARAM!*/(typeof Range==='undefined'||Range===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Range")),'139:61-139:65','range.ceylon'):Range).END_TO_START/*NULL PARAM!*/,sourceRange$32973));
                }//End switch statement at range.ceylon (128:12-140:12)
                /*End dynamic block*/
            };$$rangeAbs.compareBoundaryPoints.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSNumber},$ps:[{$nm:'how',$mt:'prm',$t:{t:RangeCompareHow},$an:function(){return[];}},{$nm:'sourceRange',$mt:'prm',$t:{t:Range},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','compareBoundaryPoints']};};
            
            //MethodDefinition deleteContents at range.ceylon (144:4-148:4)
            $$rangeAbs.deleteContents=function deleteContents(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.deleteContents();
                /*End dynamic block*/
            };$$rangeAbs.deleteContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','deleteContents']};};
            
            //MethodDefinition extractContents at range.ceylon (150:4-154:4)
            $$rangeAbs.extractContents=function extractContents(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                return DocumentFragment($$rangeAbs.$native.extractContents());
                /*End dynamic block*/
            };$$rangeAbs.extractContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentFragment},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','extractContents']};};
            
            //MethodDefinition cloneContents at range.ceylon (156:4-160:4)
            $$rangeAbs.cloneContents=function cloneContents(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                return DocumentFragment($$rangeAbs.$native.cloneContents());
                /*End dynamic block*/
            };$$rangeAbs.cloneContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentFragment},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','cloneContents']};};
            
            //MethodDefinition insertNode at range.ceylon (162:4-166:4)
            $$rangeAbs.insertNode=function insertNode(newNode$32975){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.insertNode(/*NULL PARAM!*/newNode$32975);
                /*End dynamic block*/
            };$$rangeAbs.insertNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'newNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','insertNode']};};
            
            //MethodDefinition surroundContents at range.ceylon (168:4-172:4)
            $$rangeAbs.surroundContents=function surroundContents(newNode$32976){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.surroundContents(/*NULL PARAM!*/newNode$32976);
                /*End dynamic block*/
            };$$rangeAbs.surroundContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'newNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','surroundContents']};};
            
            //MethodDefinition cloneRange at range.ceylon (174:4-178:4)
            $$rangeAbs.cloneRange=function cloneRange(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$32977=$$rangeAbs.$native.cloneRange(),$$$cl32209.isOfType(tmpvar$32977,{t:$$$cl32209.Anything})?tmpvar$32977:$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("dynamic objects cannot be used here")),'176:19-176:37','range.ceylon'));
                /*End dynamic block*/
            };$$rangeAbs.cloneRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Range},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','cloneRange']};};
            
            //MethodDefinition detach at range.ceylon (180:4-184:4)
            $$rangeAbs.detach=function detach(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.detach();
                /*End dynamic block*/
            };$$rangeAbs.detach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','detach']};};
            
            //MethodDefinition isPointInRange at range.ceylon (186:4-206:4)
            $$rangeAbs.isPointInRange=function isPointInRange(node$32978,offset$32979){
                var $$rangeAbs=this;
                
                //AttributeDeclaration inRange at range.ceylon (187:8-187:23)
                var inRange$32980;
                //Switch statement at range.ceylon (188:8-198:8)
                var case$32981=offset$32979;
                if ($$$cl32209.isOfType(offset$32979,{t:$$$cl32209.Integer})) {
                    /*Begin dynamic block*/
                    inRange$32980=$$rangeAbs.$native.isPointInRange(/*NULL PARAM!*/node$32978/*NULL PARAM!*/,case$32981);/*End dynamic block*/
                }else if ($$$cl32209.isOfType(offset$32979,{t:$$$cjl32280.JSNumber})) {
                    /*Begin dynamic block*/
                    inRange$32980=$$rangeAbs.$native.isPointInRange(/*NULL PARAM!*/node$32978/*NULL PARAM!*/,case$32981.$native);/*End dynamic block*/
                }//End switch statement at range.ceylon (188:8-198:8)
                /*Begin dynamic block*/
                if(inRange$32980){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$rangeAbs.isPointInRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Integer},{t:$$$cjl32280.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','RangeAbs','$m','isPointInRange']};};
        })(RangeAbs.$$.prototype);
    }
    return RangeAbs;
}
exports.$init$RangeAbs=$init$RangeAbs;
$init$RangeAbs();

//ClassDefinition Range at range.ceylon (210:0-215:0)
function Range(n$32982, $$range){
    $init$Range();
    if ($$range===undefined)$$range=new Range.$$;
    $$range.n$32982_=n$32982;
    RangeAbs($$range);
    
    //AttributeDeclaration native at range.ceylon (211:1-211:29)
    $$range.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Range,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom','Range','$at','native']};}};
    /*Begin dynamic block*/
    $$range.$native=$$range.n$32982;/*End dynamic block*/
    return $$range;
}
Range.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RangeAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','Range']};};
exports.Range=Range;
function $init$Range(){
    if (Range.$$===undefined){
        $$$cl32209.initTypeProto(Range,'ceylon.js.dom::Range',$init$RangeAbs());
        (function($$range){
            
            //AttributeDeclaration native at range.ceylon (211:1-211:29)
            $$$cl32209.defineAttr($$range,'n$32982',function(){return this.n$32982_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Range,d:['ceylon.js.dom','Range','$at','n']};});
        })(Range.$$.prototype);
    }
    return Range;
}
exports.$init$Range=$init$Range;
$init$Range();

//ClassDefinition NodeType at node.ceylon (3:0-5:65)
function NodeType(name$33007, $$nodeType){
    $init$NodeType();
    if ($$nodeType===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$nodeType.name$33007_=name$33007;
    return $$nodeType;
}
NodeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','NodeType']};};
exports.NodeType=NodeType;
function $init$NodeType(){
    if (NodeType.$$===undefined){
        $$$cl32209.initTypeProto(NodeType,'ceylon.js.dom::NodeType',$$$cl32209.Basic);
        (function($$nodeType){
            $$$cl32209.defineAttr($$nodeType,'name$33007',function(){return this.name$33007_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.String},$cont:NodeType,d:['ceylon.js.dom','NodeType','$at','name']};});
        })(NodeType.$$.prototype);
    }
    return NodeType;
}
exports.$init$NodeType=$init$NodeType;
$init$NodeType();

//ObjectDefinition attributeNode at node.ceylon (7:0-7:63)
function attributeNode$33008(){
    var $$attributeNode=new attributeNode$33008.$$;
    NodeType($$$cl32209.String("attributeNode",13),$$attributeNode);
    return $$attributeNode;
}
function $init$attributeNode$33008(){
    if (attributeNode$33008.$$===undefined){
        $$$cl32209.initTypeProto(attributeNode$33008,'ceylon.js.dom::attributeNode',$init$NodeType());
    }
    return attributeNode$33008;
}
exports.$init$attributeNode$33008=$init$attributeNode$33008;
$init$attributeNode$33008();
var attributeNode$33009;
function getAttributeNode(){
    if (attributeNode$33009===undefined)attributeNode$33009=$init$attributeNode$33008()();
    return attributeNode$33009;
}
exports.getAttributeNode=getAttributeNode;
getAttributeNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:attributeNode$33008},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','attributeNode']};};
$prop$getAttributeNode={get:getAttributeNode,$$metamodel$$:getAttributeNode.$$metamodel$$};
exports.$prop$getAttributeNode=$prop$getAttributeNode;

//ObjectDefinition cdataSectionNode at node.ceylon (8:0-8:69)
function cdataSectionNode$33010(){
    var $$cdataSectionNode=new cdataSectionNode$33010.$$;
    NodeType($$$cl32209.String("cdataSectionNode",16),$$cdataSectionNode);
    return $$cdataSectionNode;
}
function $init$cdataSectionNode$33010(){
    if (cdataSectionNode$33010.$$===undefined){
        $$$cl32209.initTypeProto(cdataSectionNode$33010,'ceylon.js.dom::cdataSectionNode',$init$NodeType());
    }
    return cdataSectionNode$33010;
}
exports.$init$cdataSectionNode$33010=$init$cdataSectionNode$33010;
$init$cdataSectionNode$33010();
var cdataSectionNode$33011;
function getCdataSectionNode(){
    if (cdataSectionNode$33011===undefined)cdataSectionNode$33011=$init$cdataSectionNode$33010()();
    return cdataSectionNode$33011;
}
exports.getCdataSectionNode=getCdataSectionNode;
getCdataSectionNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:cdataSectionNode$33010},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','cdataSectionNode']};};
$prop$getCdataSectionNode={get:getCdataSectionNode,$$metamodel$$:getCdataSectionNode.$$metamodel$$};
exports.$prop$getCdataSectionNode=$prop$getCdataSectionNode;

//ObjectDefinition commentNode at node.ceylon (9:0-9:59)
function commentNode$33012(){
    var $$commentNode=new commentNode$33012.$$;
    NodeType($$$cl32209.String("commentNode",11),$$commentNode);
    return $$commentNode;
}
function $init$commentNode$33012(){
    if (commentNode$33012.$$===undefined){
        $$$cl32209.initTypeProto(commentNode$33012,'ceylon.js.dom::commentNode',$init$NodeType());
    }
    return commentNode$33012;
}
exports.$init$commentNode$33012=$init$commentNode$33012;
$init$commentNode$33012();
var commentNode$33013;
function getCommentNode(){
    if (commentNode$33013===undefined)commentNode$33013=$init$commentNode$33012()();
    return commentNode$33013;
}
exports.getCommentNode=getCommentNode;
getCommentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:commentNode$33012},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','commentNode']};};
$prop$getCommentNode={get:getCommentNode,$$metamodel$$:getCommentNode.$$metamodel$$};
exports.$prop$getCommentNode=$prop$getCommentNode;

//ObjectDefinition documentFragmentNode at node.ceylon (10:0-10:77)
function documentFragmentNode$33014(){
    var $$documentFragmentNode=new documentFragmentNode$33014.$$;
    NodeType($$$cl32209.String("documentFragmentNode",20),$$documentFragmentNode);
    return $$documentFragmentNode;
}
function $init$documentFragmentNode$33014(){
    if (documentFragmentNode$33014.$$===undefined){
        $$$cl32209.initTypeProto(documentFragmentNode$33014,'ceylon.js.dom::documentFragmentNode',$init$NodeType());
    }
    return documentFragmentNode$33014;
}
exports.$init$documentFragmentNode$33014=$init$documentFragmentNode$33014;
$init$documentFragmentNode$33014();
var documentFragmentNode$33015;
function getDocumentFragmentNode(){
    if (documentFragmentNode$33015===undefined)documentFragmentNode$33015=$init$documentFragmentNode$33014()();
    return documentFragmentNode$33015;
}
exports.getDocumentFragmentNode=getDocumentFragmentNode;
getDocumentFragmentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentFragmentNode$33014},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','documentFragmentNode']};};
$prop$getDocumentFragmentNode={get:getDocumentFragmentNode,$$metamodel$$:getDocumentFragmentNode.$$metamodel$$};
exports.$prop$getDocumentFragmentNode=$prop$getDocumentFragmentNode;

//ObjectDefinition documentNode at node.ceylon (11:0-11:61)
function documentNode$33016(){
    var $$documentNode=new documentNode$33016.$$;
    NodeType($$$cl32209.String("documentNode",12),$$documentNode);
    return $$documentNode;
}
function $init$documentNode$33016(){
    if (documentNode$33016.$$===undefined){
        $$$cl32209.initTypeProto(documentNode$33016,'ceylon.js.dom::documentNode',$init$NodeType());
    }
    return documentNode$33016;
}
exports.$init$documentNode$33016=$init$documentNode$33016;
$init$documentNode$33016();
var documentNode$33017;
function getDocumentNode(){
    if (documentNode$33017===undefined)documentNode$33017=$init$documentNode$33016()();
    return documentNode$33017;
}
exports.getDocumentNode=getDocumentNode;
getDocumentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentNode$33016},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','documentNode']};};
$prop$getDocumentNode={get:getDocumentNode,$$metamodel$$:getDocumentNode.$$metamodel$$};
exports.$prop$getDocumentNode=$prop$getDocumentNode;

//ObjectDefinition documentTypeNode at node.ceylon (12:0-12:69)
function documentTypeNode$33018(){
    var $$documentTypeNode=new documentTypeNode$33018.$$;
    NodeType($$$cl32209.String("documentTypeNode",16),$$documentTypeNode);
    return $$documentTypeNode;
}
function $init$documentTypeNode$33018(){
    if (documentTypeNode$33018.$$===undefined){
        $$$cl32209.initTypeProto(documentTypeNode$33018,'ceylon.js.dom::documentTypeNode',$init$NodeType());
    }
    return documentTypeNode$33018;
}
exports.$init$documentTypeNode$33018=$init$documentTypeNode$33018;
$init$documentTypeNode$33018();
var documentTypeNode$33019;
function getDocumentTypeNode(){
    if (documentTypeNode$33019===undefined)documentTypeNode$33019=$init$documentTypeNode$33018()();
    return documentTypeNode$33019;
}
exports.getDocumentTypeNode=getDocumentTypeNode;
getDocumentTypeNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentTypeNode$33018},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','documentTypeNode']};};
$prop$getDocumentTypeNode={get:getDocumentTypeNode,$$metamodel$$:getDocumentTypeNode.$$metamodel$$};
exports.$prop$getDocumentTypeNode=$prop$getDocumentTypeNode;

//ObjectDefinition elementNode at node.ceylon (13:0-13:59)
function elementNode$33020(){
    var $$elementNode=new elementNode$33020.$$;
    NodeType($$$cl32209.String("elementNode",11),$$elementNode);
    return $$elementNode;
}
function $init$elementNode$33020(){
    if (elementNode$33020.$$===undefined){
        $$$cl32209.initTypeProto(elementNode$33020,'ceylon.js.dom::elementNode',$init$NodeType());
    }
    return elementNode$33020;
}
exports.$init$elementNode$33020=$init$elementNode$33020;
$init$elementNode$33020();
var elementNode$33021;
function getElementNode(){
    if (elementNode$33021===undefined)elementNode$33021=$init$elementNode$33020()();
    return elementNode$33021;
}
exports.getElementNode=getElementNode;
getElementNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:elementNode$33020},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','elementNode']};};
$prop$getElementNode={get:getElementNode,$$metamodel$$:getElementNode.$$metamodel$$};
exports.$prop$getElementNode=$prop$getElementNode;

//ObjectDefinition entityNode at node.ceylon (14:0-14:57)
function entityNode$33022(){
    var $$entityNode=new entityNode$33022.$$;
    NodeType($$$cl32209.String("entityNode",10),$$entityNode);
    return $$entityNode;
}
function $init$entityNode$33022(){
    if (entityNode$33022.$$===undefined){
        $$$cl32209.initTypeProto(entityNode$33022,'ceylon.js.dom::entityNode',$init$NodeType());
    }
    return entityNode$33022;
}
exports.$init$entityNode$33022=$init$entityNode$33022;
$init$entityNode$33022();
var entityNode$33023;
function getEntityNode(){
    if (entityNode$33023===undefined)entityNode$33023=$init$entityNode$33022()();
    return entityNode$33023;
}
exports.getEntityNode=getEntityNode;
getEntityNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:entityNode$33022},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','entityNode']};};
$prop$getEntityNode={get:getEntityNode,$$metamodel$$:getEntityNode.$$metamodel$$};
exports.$prop$getEntityNode=$prop$getEntityNode;

//ObjectDefinition entityReferenceNode at node.ceylon (15:0-15:75)
function entityReferenceNode$33024(){
    var $$entityReferenceNode=new entityReferenceNode$33024.$$;
    NodeType($$$cl32209.String("entityReferenceNode",19),$$entityReferenceNode);
    return $$entityReferenceNode;
}
function $init$entityReferenceNode$33024(){
    if (entityReferenceNode$33024.$$===undefined){
        $$$cl32209.initTypeProto(entityReferenceNode$33024,'ceylon.js.dom::entityReferenceNode',$init$NodeType());
    }
    return entityReferenceNode$33024;
}
exports.$init$entityReferenceNode$33024=$init$entityReferenceNode$33024;
$init$entityReferenceNode$33024();
var entityReferenceNode$33025;
function getEntityReferenceNode(){
    if (entityReferenceNode$33025===undefined)entityReferenceNode$33025=$init$entityReferenceNode$33024()();
    return entityReferenceNode$33025;
}
exports.getEntityReferenceNode=getEntityReferenceNode;
getEntityReferenceNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:entityReferenceNode$33024},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','entityReferenceNode']};};
$prop$getEntityReferenceNode={get:getEntityReferenceNode,$$metamodel$$:getEntityReferenceNode.$$metamodel$$};
exports.$prop$getEntityReferenceNode=$prop$getEntityReferenceNode;

//ObjectDefinition notationNode at node.ceylon (16:0-16:61)
function notationNode$33026(){
    var $$notationNode=new notationNode$33026.$$;
    NodeType($$$cl32209.String("notationNode",12),$$notationNode);
    return $$notationNode;
}
function $init$notationNode$33026(){
    if (notationNode$33026.$$===undefined){
        $$$cl32209.initTypeProto(notationNode$33026,'ceylon.js.dom::notationNode',$init$NodeType());
    }
    return notationNode$33026;
}
exports.$init$notationNode$33026=$init$notationNode$33026;
$init$notationNode$33026();
var notationNode$33027;
function getNotationNode(){
    if (notationNode$33027===undefined)notationNode$33027=$init$notationNode$33026()();
    return notationNode$33027;
}
exports.getNotationNode=getNotationNode;
getNotationNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:notationNode$33026},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','notationNode']};};
$prop$getNotationNode={get:getNotationNode,$$metamodel$$:getNotationNode.$$metamodel$$};
exports.$prop$getNotationNode=$prop$getNotationNode;

//ObjectDefinition processingInstructionNode at node.ceylon (17:0-17:87)
function processingInstructionNode$33028(){
    var $$processingInstructionNode=new processingInstructionNode$33028.$$;
    NodeType($$$cl32209.String("processingInstructionNode",25),$$processingInstructionNode);
    return $$processingInstructionNode;
}
function $init$processingInstructionNode$33028(){
    if (processingInstructionNode$33028.$$===undefined){
        $$$cl32209.initTypeProto(processingInstructionNode$33028,'ceylon.js.dom::processingInstructionNode',$init$NodeType());
    }
    return processingInstructionNode$33028;
}
exports.$init$processingInstructionNode$33028=$init$processingInstructionNode$33028;
$init$processingInstructionNode$33028();
var processingInstructionNode$33029;
function getProcessingInstructionNode(){
    if (processingInstructionNode$33029===undefined)processingInstructionNode$33029=$init$processingInstructionNode$33028()();
    return processingInstructionNode$33029;
}
exports.getProcessingInstructionNode=getProcessingInstructionNode;
getProcessingInstructionNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:processingInstructionNode$33028},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','processingInstructionNode']};};
$prop$getProcessingInstructionNode={get:getProcessingInstructionNode,$$metamodel$$:getProcessingInstructionNode.$$metamodel$$};
exports.$prop$getProcessingInstructionNode=$prop$getProcessingInstructionNode;

//ObjectDefinition textNode at node.ceylon (18:0-18:53)
function textNode$33030(){
    var $$textNode=new textNode$33030.$$;
    NodeType($$$cl32209.String("textNode",8),$$textNode);
    return $$textNode;
}
function $init$textNode$33030(){
    if (textNode$33030.$$===undefined){
        $$$cl32209.initTypeProto(textNode$33030,'ceylon.js.dom::textNode',$init$NodeType());
    }
    return textNode$33030;
}
exports.$init$textNode$33030=$init$textNode$33030;
$init$textNode$33030();
var textNode$33031;
function getTextNode(){
    if (textNode$33031===undefined)textNode$33031=$init$textNode$33030()();
    return textNode$33031;
}
exports.getTextNode=getTextNode;
getTextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:textNode$33030},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','textNode']};};
$prop$getTextNode={get:getTextNode,$$metamodel$$:getTextNode.$$metamodel$$};
exports.$prop$getTextNode=$prop$getTextNode;

//ClassDefinition DocumentFragmentAbs at node.ceylon (20:0-20:63)
function DocumentFragmentAbs($$documentFragmentAbs){
    $init$DocumentFragmentAbs();
    if ($$documentFragmentAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$documentFragmentAbs);
    return $$documentFragmentAbs;
}
DocumentFragmentAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','DocumentFragmentAbs']};};
exports.DocumentFragmentAbs=DocumentFragmentAbs;
function $init$DocumentFragmentAbs(){
    if (DocumentFragmentAbs.$$===undefined){
        $$$cl32209.initTypeProto(DocumentFragmentAbs,'ceylon.js.dom::DocumentFragmentAbs',$init$NodeAbs());
    }
    return DocumentFragmentAbs;
}
exports.$init$DocumentFragmentAbs=$init$DocumentFragmentAbs;
$init$DocumentFragmentAbs();

//ClassDefinition DocumentFragment at node.ceylon (22:0-27:0)
function DocumentFragment(n$33032, $$documentFragment){
    $init$DocumentFragment();
    if ($$documentFragment===undefined)$$documentFragment=new DocumentFragment.$$;
    $$documentFragment.n$33032_=n$33032;
    DocumentFragmentAbs($$documentFragment);
    
    //AttributeDeclaration native at node.ceylon (23:1-23:29)
    $$documentFragment.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:DocumentFragment,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom','DocumentFragment','$at','native']};}};
    /*Begin dynamic block*/
    $$documentFragment.$native=$$documentFragment.n$33032;/*End dynamic block*/
    return $$documentFragment;
}
DocumentFragment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentFragmentAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DocumentFragment']};};
exports.DocumentFragment=DocumentFragment;
function $init$DocumentFragment(){
    if (DocumentFragment.$$===undefined){
        $$$cl32209.initTypeProto(DocumentFragment,'ceylon.js.dom::DocumentFragment',$init$DocumentFragmentAbs());
        (function($$documentFragment){
            
            //AttributeDeclaration native at node.ceylon (23:1-23:29)
            $$$cl32209.defineAttr($$documentFragment,'n$33032',function(){return this.n$33032_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:DocumentFragment,d:['ceylon.js.dom','DocumentFragment','$at','n']};});
        })(DocumentFragment.$$.prototype);
    }
    return DocumentFragment;
}
exports.$init$DocumentFragment=$init$DocumentFragment;
$init$DocumentFragment();

//ClassDefinition EntityReferenceAbs at node.ceylon (29:0-29:62)
function EntityReferenceAbs($$entityReferenceAbs){
    $init$EntityReferenceAbs();
    if ($$entityReferenceAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$entityReferenceAbs);
    return $$entityReferenceAbs;
}
EntityReferenceAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','EntityReferenceAbs']};};
exports.EntityReferenceAbs=EntityReferenceAbs;
function $init$EntityReferenceAbs(){
    if (EntityReferenceAbs.$$===undefined){
        $$$cl32209.initTypeProto(EntityReferenceAbs,'ceylon.js.dom::EntityReferenceAbs',$init$NodeAbs());
    }
    return EntityReferenceAbs;
}
exports.$init$EntityReferenceAbs=$init$EntityReferenceAbs;
$init$EntityReferenceAbs();

//ClassDefinition EntityReference at node.ceylon (31:0-36:0)
function EntityReference(n$33033, $$entityReference){
    $init$EntityReference();
    if ($$entityReference===undefined)$$entityReference=new EntityReference.$$;
    $$entityReference.n$33033_=n$33033;
    EntityReferenceAbs($$entityReference);
    
    //AttributeDeclaration native at node.ceylon (32:1-32:29)
    /*Begin dynamic block*/
    $$entityReference.$native=$$entityReference.n$33033;/*End dynamic block*/
    return $$entityReference;
}
EntityReference.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:EntityReferenceAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EntityReference']};};
exports.EntityReference=EntityReference;
function $init$EntityReference(){
    if (EntityReference.$$===undefined){
        $$$cl32209.initTypeProto(EntityReference,'ceylon.js.dom::EntityReference',$init$EntityReferenceAbs());
        (function($$entityReference){
            
            //AttributeDeclaration native at node.ceylon (32:1-32:29)
            $$$cl32209.defineAttr($$entityReference,'n$33033',function(){return this.n$33033_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:EntityReference,d:['ceylon.js.dom','EntityReference','$at','n']};});
        })(EntityReference.$$.prototype);
    }
    return EntityReference;
}
exports.$init$EntityReference=$init$EntityReference;
$init$EntityReference();

//ClassDefinition NodeAbs at node.ceylon (38:0-327:0)
function NodeAbs($$nodeAbs){
    $init$NodeAbs();
    if ($$nodeAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$nodeAbs);
    return $$nodeAbs;
}
NodeAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','NodeAbs']};};
exports.NodeAbs=NodeAbs;
function $init$NodeAbs(){
    if (NodeAbs.$$===undefined){
        $$$cl32209.initTypeProto(NodeAbs,'ceylon.js.dom::NodeAbs',$$$cjl32280.JSObjectAbs);
        (function($$nodeAbs){
            
            //MethodDefinition appendChild at node.ceylon (40:1-44:1)
            $$nodeAbs.appendChild=function appendChild(node$33034){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                return Node(node$33034.$native.appendChild(/*NULL PARAM!*/node$33034));
                /*End dynamic block*/
            };$$nodeAbs.appendChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','appendChild']};};
            
            //MethodDefinition baseURI at node.ceylon (46:4-50:1)
            $$nodeAbs.baseURI=function baseURI(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$nodeAbs.$native.baseURL);
                /*End dynamic block*/
            };$$nodeAbs.baseURI.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','baseURI']};};
            
            //MethodDefinition childNodes at node.ceylon (52:4-56:1)
            $$nodeAbs.childNodes=function childNodes(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                return NodeList($$nodeAbs.$native.childNodes);
                /*End dynamic block*/
            };$$nodeAbs.childNodes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeList},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','childNodes']};};
            
            //MethodDefinition cloneNode at node.ceylon (58:4-62:1)
            $$nodeAbs.cloneNode$defs$bool=function(bool$33035){var $$nodeAbs=this;
            return true;};
            $$nodeAbs.cloneNode=function cloneNode(bool$33035){
                var $$nodeAbs=this;
                if(bool$33035===undefined){bool$33035=$$nodeAbs.cloneNode$defs$bool(bool$33035);}
                /*Begin dynamic block*/
                return Node((typeof node==='undefined'||node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: node")),'60:15-60:18','node.ceylon'):node).native.cloneNode(/*NULL PARAM!*/bool$33035));
                /*End dynamic block*/
            };$$nodeAbs.cloneNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'bool',$mt:'prm',$def:1,$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','cloneNode']};};
            
            //MethodDefinition compareDocumentPosition at node.ceylon (63:4-80:1)
            $$nodeAbs.compareDocumentPosition=function compareDocumentPosition(node$33036){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration pos at node.ceylon (65:12-65:67)
                var pos$33037=node$33036.$native.compareDocumentPosition(/*NULL PARAM!*/node$33036);
                $prop$getPos$33037={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','NodeAbs','$m','compareDocumentPosition','$at','pos']};}};
                $prop$getPos$33037.get=function(){return pos$33037};
                if((tmpvar$33038=pos$33037,tmpvar$33039=(typeof Node==='undefined'||Node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Node")),'66:23-66:26','node.ceylon'):Node).DOCUMENT_POSITION_CONTAINED_BY,(tmpvar$33038.equals&&tmpvar$33038.equals(tmpvar$33039))||tmpvar$33038===tmpvar$33039)){
                    return getDocumentPositionContainedBy();
                }else {
                    if((tmpvar$33040=pos$33037,tmpvar$33041=(typeof Node==='undefined'||Node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Node")),'68:30-68:33','node.ceylon'):Node).DOCUMENT_POSITION_CONTAINS,(tmpvar$33040.equals&&tmpvar$33040.equals(tmpvar$33041))||tmpvar$33040===tmpvar$33041)){
                        return getDocumentPositionContains();
                    }else {
                        if((tmpvar$33042=pos$33037,tmpvar$33043=(typeof Node==='undefined'||Node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Node")),'70:27-70:30','node.ceylon'):Node).DOCUMENT_POSITION_DISCONNECTED,(tmpvar$33042.equals&&tmpvar$33042.equals(tmpvar$33043))||tmpvar$33042===tmpvar$33043)){
                            return getDocumentPositionDisconnected();
                        }else {
                            if((tmpvar$33044=pos$33037,tmpvar$33045=(typeof Node==='undefined'||Node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Node")),'72:27-72:30','node.ceylon'):Node).DOCUMENT_POSITION_FOLLOWING,(tmpvar$33044.equals&&tmpvar$33044.equals(tmpvar$33045))||tmpvar$33044===tmpvar$33045)){
                                return getDocumentPositionFollowing();
                            }else {
                                if((tmpvar$33046=pos$33037,tmpvar$33047=(typeof Node==='undefined'||Node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Node")),'74:27-74:30','node.ceylon'):Node).DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC,(tmpvar$33046.equals&&tmpvar$33046.equals(tmpvar$33047))||tmpvar$33046===tmpvar$33047)){
                                    return getDocumentPositionImplementationSpecific();
                                }else {
                                    return getDocumentPositionPreceding();
                                }
                            }
                        }
                    }
                }/*End dynamic block*/
            };$$nodeAbs.compareDocumentPosition.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentPosition},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','compareDocumentPosition']};};
            
            //MethodDefinition firstChild at node.ceylon (82:4-86:1)
            $$nodeAbs.firstChild=function firstChild(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                return Node($$nodeAbs.$native.firstChild);
                /*End dynamic block*/
            };$$nodeAbs.firstChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','firstChild']};};
            
            //MethodDefinition hasChildNodes at node.ceylon (88:4-96:1)
            $$nodeAbs.hasChildNodes=function hasChildNodes(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                if($$nodeAbs.$native.hasAttributes()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$nodeAbs.hasChildNodes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','hasChildNodes']};};
            
            //MethodDefinition insertBefore at node.ceylon (98:4-106:1)
            $$nodeAbs.insertBefore=function insertBefore(newElement$33048,referenceElement$33049){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                var ref$33050;
                if((ref$33050=referenceElement$33049)!==null){
                    return Node($$nodeAbs.$native.insertBefore(/*NULL PARAM!*/newElement$33048.$native/*NULL PARAM!*/,ref$33050.$native));
                }else {
                    return Node($$nodeAbs.$native.insertBefore(/*NULL PARAM!*/newElement$33048.$native));
                }/*End dynamic block*/
            };$$nodeAbs.insertBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'newElement',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'referenceElement',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Node}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','insertBefore']};};
            
            //MethodDefinition isDefaultNamespace at node.ceylon (109:4-129:1)
            $$nodeAbs.isDefaultNamespace=function isDefaultNamespace(namespaceURI$33051){
                var $$nodeAbs=this;
                
                //AttributeDeclaration isDefault at node.ceylon (110:2-110:19)
                var isDefault$33052;
                //Switch statement at node.ceylon (111:2-121:2)
                var case$33053=namespaceURI$33051;
                if ($$$cl32209.isOfType(namespaceURI$33051,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    isDefault$33052=$$nodeAbs.$native.isDefaultNamespace(/*NULL PARAM!*/case$33053.valueOf());/*End dynamic block*/
                }else if ($$$cl32209.isOfType(namespaceURI$33051,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    isDefault$33052=$$nodeAbs.$native.isDefaultNamespace(/*NULL PARAM!*/case$33053.$native);/*End dynamic block*/
                }//End switch statement at node.ceylon (111:2-121:2)
                /*Begin dynamic block*/
                if(isDefault$33052){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$nodeAbs.isDefaultNamespace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','isDefaultNamespace']};};
            
            //MethodDefinition isEqualNode at node.ceylon (131:4-139:1)
            $$nodeAbs.isEqualNode=function isEqualNode(node$33054){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                if($$nodeAbs.$native.isEqualNode(/*NULL PARAM!*/node$33054)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$nodeAbs.isEqualNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','isEqualNode']};};
            
            //MethodDefinition lastChild at node.ceylon (141:1-150:1)
            $$nodeAbs.lastChild=function lastChild(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration lastChild at node.ceylon (143:3-143:39)
                var lastChild$33055=$$nodeAbs.$native.lastChild;
                $prop$getLastChild$33055={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','NodeAbs','$m','lastChild','$at','lastChild']};}};
                $prop$getLastChild$33055.get=function(){return lastChild$33055};
                if((tmpvar$33056=lastChild$33055,tmpvar$33057=null,(tmpvar$33056.equals&&!tmpvar$33056.equals(tmpvar$33057))||tmpvar$33056!==tmpvar$33057)){
                    return Node(lastChild$33055);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeAbs.lastChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','lastChild']};};
            
            //MethodDefinition lookupPrefix at node.ceylon (152:4-172:1)
            $$nodeAbs.lookupPrefix=function lookupPrefix(namespaceURI$33058){
                var $$nodeAbs=this;
                
                //AttributeDeclaration prefix at node.ceylon (153:2-153:16)
                var prefix$33059;
                /*Begin dynamic block*/
                //Switch statement at node.ceylon (155:3-164:3)
                var case$33060=namespaceURI$33058;
                if ($$$cl32209.isOfType(namespaceURI$33058,{t:$$$cl32209.String})) {
                    prefix$33059=$$nodeAbs.$native.lookupPrefix(/*NULL PARAM!*/case$33060.valueOf());
                }else if ($$$cl32209.isOfType(namespaceURI$33058,{t:$$$cjl32280.JSString})) {
                    prefix$33059=$$nodeAbs.$native.lookupPrefix(/*NULL PARAM!*/case$33060.$native);
                }else if ($$$cl32209.isOfType(namespaceURI$33058,{t:$$$cl32209.Null})) {
                    prefix$33059=$$nodeAbs.$native.lookupPrefix();
                }//End switch statement at node.ceylon (155:3-164:3)
                if((tmpvar$33061=prefix$33059,tmpvar$33062=null,(tmpvar$33061.equals&&!tmpvar$33061.equals(tmpvar$33062))||tmpvar$33061!==tmpvar$33062)){
                    return $$$cjl32280.JSString(prefix$33059);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeAbs.lookupPrefix.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','lookupPrefix']};};
            
            //MethodDefinition nextSibling at node.ceylon (174:4-183:1)
            $$nodeAbs.nextSibling=function nextSibling(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration nextSibling at node.ceylon (176:3-176:45)
                var nextSibling$33063=$$nodeAbs.$native.nextSibling();
                $prop$getNextSibling$33063={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','NodeAbs','$m','nextSibling','$at','nextSibling']};}};
                $prop$getNextSibling$33063.get=function(){return nextSibling$33063};
                if((tmpvar$33064=nextSibling$33063,tmpvar$33065=null,(tmpvar$33064.equals&&!tmpvar$33064.equals(tmpvar$33065))||tmpvar$33064!==tmpvar$33065)){
                    return Node(nextSibling$33063);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeAbs.nextSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','nextSibling']};};
            
            //MethodDefinition nodeName at node.ceylon (185:4-189:1)
            $$nodeAbs.nodeName=function nodeName(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$nodeAbs.$native.nodeName);
                /*End dynamic block*/
            };$$nodeAbs.nodeName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','nodeName']};};
            
            //MethodDefinition nodeType at node.ceylon (191:4-219:1)
            $$nodeAbs.nodeType=function nodeType(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$33066=$$nodeAbs.$native.nodeType,tmpvar$33067=(typeof Node==='undefined'||Node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Node")),'193:26-193:29','node.ceylon'):Node).ELEMENT_NODE,(tmpvar$33066.equals&&tmpvar$33066.equals(tmpvar$33067))||tmpvar$33066===tmpvar$33067)){
                    return getElementNode();
                }else {
                    if((tmpvar$33068=$$nodeAbs.$native.nodeType,tmpvar$33069=(typeof Node==='undefined'||Node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Node")),'195:33-195:36','node.ceylon'):Node).ATTRIBUTE_NODE,(tmpvar$33068.equals&&tmpvar$33068.equals(tmpvar$33069))||tmpvar$33068===tmpvar$33069)){
                        return getAttributeNode();
                    }else {
                        if((tmpvar$33070=$$nodeAbs.$native.nodeType,tmpvar$33071=(typeof Node==='undefined'||Node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Node")),'197:33-197:36','node.ceylon'):Node).TEXT_NODE,(tmpvar$33070.equals&&tmpvar$33070.equals(tmpvar$33071))||tmpvar$33070===tmpvar$33071)){
                            return getTextNode();
                        }else {
                            if((tmpvar$33072=$$nodeAbs.$native.nodeType,tmpvar$33073=(typeof Node==='undefined'||Node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Node")),'199:33-199:36','node.ceylon'):Node).CDATA_SECTION_NODE,(tmpvar$33072.equals&&tmpvar$33072.equals(tmpvar$33073))||tmpvar$33072===tmpvar$33073)){
                                return getCdataSectionNode();
                            }else {
                                if((tmpvar$33074=$$nodeAbs.$native.nodeType,tmpvar$33075=(typeof Node==='undefined'||Node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Node")),'201:33-201:36','node.ceylon'):Node).ENTITY_REFERENCE_NODE,(tmpvar$33074.equals&&tmpvar$33074.equals(tmpvar$33075))||tmpvar$33074===tmpvar$33075)){
                                    return getEntityReferenceNode();
                                }else {
                                    if((tmpvar$33076=$$nodeAbs.$native.nodeType,tmpvar$33077=(typeof Node==='undefined'||Node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Node")),'203:33-203:36','node.ceylon'):Node).ENTITY_NODE,(tmpvar$33076.equals&&tmpvar$33076.equals(tmpvar$33077))||tmpvar$33076===tmpvar$33077)){
                                        return getEntityNode();
                                    }else {
                                        if((tmpvar$33078=$$nodeAbs.$native.nodeType,tmpvar$33079=(typeof Node==='undefined'||Node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Node")),'205:33-205:36','node.ceylon'):Node).PROCESSING_INSTRUCTION_NODE,(tmpvar$33078.equals&&tmpvar$33078.equals(tmpvar$33079))||tmpvar$33078===tmpvar$33079)){
                                            return getProcessingInstructionNode();
                                        }else {
                                            if((tmpvar$33080=$$nodeAbs.$native.nodeType,tmpvar$33081=(typeof Node==='undefined'||Node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Node")),'207:33-207:36','node.ceylon'):Node).COMMENT_NODE,(tmpvar$33080.equals&&tmpvar$33080.equals(tmpvar$33081))||tmpvar$33080===tmpvar$33081)){
                                                return getCommentNode();
                                            }else {
                                                if((tmpvar$33082=$$nodeAbs.$native.nodeType,tmpvar$33083=(typeof Node==='undefined'||Node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Node")),'209:33-209:36','node.ceylon'):Node).DOCUMENT_NODE,(tmpvar$33082.equals&&tmpvar$33082.equals(tmpvar$33083))||tmpvar$33082===tmpvar$33083)){
                                                    return getDocumentNode();
                                                }else {
                                                    if((tmpvar$33084=$$nodeAbs.$native.nodeType,tmpvar$33085=(typeof Node==='undefined'||Node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Node")),'211:33-211:36','node.ceylon'):Node).DOCUMENT_TYPE_NODE,(tmpvar$33084.equals&&tmpvar$33084.equals(tmpvar$33085))||tmpvar$33084===tmpvar$33085)){
                                                        return getDocumentTypeNode();
                                                    }else {
                                                        if((tmpvar$33086=$$nodeAbs.$native.nodeType,tmpvar$33087=(typeof Node==='undefined'||Node===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Node")),'213:33-213:36','node.ceylon'):Node).DOCUMENT_FRAGMENT_NODE,(tmpvar$33086.equals&&tmpvar$33086.equals(tmpvar$33087))||tmpvar$33086===tmpvar$33087)){
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
            };$$nodeAbs.nodeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeType},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','nodeType']};};
            
            //MethodDefinition getNodeValue at node.ceylon (221:4-230:1)
            $$nodeAbs.getNodeValue=function getNodeValue(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration val at node.ceylon (223:3-223:33)
                var val$33088=$$nodeAbs.$native.nodeValue;
                $prop$getVal$33088={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','NodeAbs','$m','getNodeValue','$at','val']};}};
                $prop$getVal$33088.get=function(){return val$33088};
                if((tmpvar$33089=val$33088,tmpvar$33090=null,(tmpvar$33089.equals&&!tmpvar$33089.equals(tmpvar$33090))||tmpvar$33089!==tmpvar$33090)){
                    return $$$cjl32280.JSString(val$33088);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeAbs.getNodeValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','getNodeValue']};};
            
            //MethodDefinition setNodeValue at node.ceylon (232:1-244:1)
            $$nodeAbs.setNodeValue=function setNodeValue(val$33091){
                var $$nodeAbs=this;
                //Switch statement at node.ceylon (233:2-243:2)
                var case$33092=val$33091;
                if ($$$cl32209.isOfType(val$33091,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$nodeAbs.$native.nodeValue=case$33092.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(val$33091,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$nodeAbs.$native.nodeValue=case$33092.$native;
                    /*End dynamic block*/
                }//End switch statement at node.ceylon (233:2-243:2)
            };$$nodeAbs.setNodeValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','setNodeValue']};};
            
            //MethodDefinition normalize at node.ceylon (246:4-250:1)
            $$nodeAbs.normalize=function normalize(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                $$nodeAbs.$native.normalize();
                /*End dynamic block*/
            };$$nodeAbs.normalize.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','normalize']};};
            
            //AttributeGetterDefinition ownerDocument at node.ceylon (252:4-256:1)
            $$$cl32209.defineAttr($$nodeAbs,'ownerDocument',function(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                return Document($$nodeAbs.$native.ownerDocument);
                /*End dynamic block*/
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Document},$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$at','ownerDocument']};});
            //MethodDefinition parentNode at node.ceylon (258:4-267:1)
            $$nodeAbs.parentNode=function parentNode(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration parent at node.ceylon (260:3-260:32)
                var parent$33093=$$nodeAbs.parentNode();
                $prop$getParent$33093={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','NodeAbs','$m','parentNode','$at','parent']};}};
                $prop$getParent$33093.get=function(){return parent$33093};
                if((tmpvar$33094=parent$33093,tmpvar$33095=null,(tmpvar$33094.equals&&!tmpvar$33094.equals(tmpvar$33095))||tmpvar$33094!==tmpvar$33095)){
                    return Node(parent$33093);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeAbs.parentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','parentNode']};};
            
            //MethodDefinition prefix at node.ceylon (269:1-278:1)
            $$nodeAbs.prefix=function prefix(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration prefix at node.ceylon (271:3-271:33)
                var prefix$33096=$$nodeAbs.$native.prefix;
                $prop$getPrefix$33096={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','NodeAbs','$m','prefix','$at','prefix']};}};
                $prop$getPrefix$33096.get=function(){return prefix$33096};
                if((tmpvar$33097=prefix$33096,tmpvar$33098=null,(tmpvar$33097.equals&&!tmpvar$33097.equals(tmpvar$33098))||tmpvar$33097!==tmpvar$33098)){
                    return $$$cjl32280.JSString(prefix$33096);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeAbs.prefix.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','prefix']};};
            
            //MethodDefinition previousSibling at node.ceylon (280:4-289:1)
            $$nodeAbs.previousSibling=function previousSibling(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration previousSibling at node.ceylon (282:3-282:53)
                var previousSibling$33099=$$nodeAbs.$native.previousSibling();
                $prop$getPreviousSibling$33099={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','NodeAbs','$m','previousSibling','$at','previousSibling']};}};
                $prop$getPreviousSibling$33099.get=function(){return previousSibling$33099};
                if((tmpvar$33100=previousSibling$33099,tmpvar$33101=null,(tmpvar$33100.equals&&!tmpvar$33100.equals(tmpvar$33101))||tmpvar$33100!==tmpvar$33101)){
                    return Node(previousSibling$33099);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeAbs.previousSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','previousSibling']};};
            
            //MethodDefinition removeChild at node.ceylon (291:4-295:1)
            $$nodeAbs.removeChild=function removeChild(node$33102){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                return Node($$nodeAbs.$native.removeChild(/*NULL PARAM!*/node$33102.$native));
                /*End dynamic block*/
            };$$nodeAbs.removeChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','removeChild']};};
            
            //MethodDefinition replaceChild at node.ceylon (297:4-301:1)
            $$nodeAbs.replaceChild=function replaceChild(newChild$33103,oldChild$33104){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                return Node($$nodeAbs.$native.replaceChild(/*NULL PARAM!*/newChild$33103.$native/*NULL PARAM!*/,oldChild$33104.$native));
                /*End dynamic block*/
            };$$nodeAbs.replaceChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'newChild',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'oldChild',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','replaceChild']};};
            
            //MethodDefinition getTextContent at node.ceylon (303:4-312:1)
            $$nodeAbs.getTextContent=function getTextContent(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration content at node.ceylon (305:3-305:41)
                var content$33105=$$nodeAbs.$native.textContent();
                $prop$getContent$33105={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','NodeAbs','$m','getTextContent','$at','content']};}};
                $prop$getContent$33105.get=function(){return content$33105};
                if((tmpvar$33106=content$33105,tmpvar$33107=null,(tmpvar$33106.equals&&!tmpvar$33106.equals(tmpvar$33107))||tmpvar$33106!==tmpvar$33107)){
                    return $$$cjl32280.JSString(content$33105);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeAbs.getTextContent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','getTextContent']};};
            
            //MethodDefinition setTextContent at node.ceylon (314:1-326:1)
            $$nodeAbs.setTextContent=function setTextContent(content$33108){
                var $$nodeAbs=this;
                //Switch statement at node.ceylon (315:2-325:2)
                var case$33109=content$33108;
                if ($$$cl32209.isOfType(content$33108,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$nodeAbs.$native.textContent=case$33109.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(content$33108,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$nodeAbs.$native.textContent=case$33109.$native;
                    /*End dynamic block*/
                }//End switch statement at node.ceylon (315:2-325:2)
            };$$nodeAbs.setTextContent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'content',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','NodeAbs','$m','setTextContent']};};
        })(NodeAbs.$$.prototype);
    }
    return NodeAbs;
}
exports.$init$NodeAbs=$init$NodeAbs;
$init$NodeAbs();

//ClassDefinition Node at node.ceylon (329:0-334:0)
function Node(n$33110, $$node){
    $init$Node();
    if ($$node===undefined)$$node=new Node.$$;
    $$node.n$33110_=n$33110;
    NodeAbs($$node);
    
    //AttributeDeclaration native at node.ceylon (330:1-330:29)
    /*Begin dynamic block*/
    $$node.$native=$$node.n$33110;/*End dynamic block*/
    return $$node;
}
Node.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','Node']};};
exports.Node=Node;
function $init$Node(){
    if (Node.$$===undefined){
        $$$cl32209.initTypeProto(Node,'ceylon.js.dom::Node',$init$NodeAbs());
        (function($$node){
            
            //AttributeDeclaration native at node.ceylon (330:1-330:29)
            $$$cl32209.defineAttr($$node,'n$33110',function(){return this.n$33110_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Node,d:['ceylon.js.dom','Node','$at','n']};});
        })(Node.$$.prototype);
    }
    return Node;
}
exports.$init$Node=$init$Node;
$init$Node();

//ClassDefinition DOMImplementationAbs at domimplementation.ceylon (3:0-147:0)
function DOMImplementationAbs($$dOMImplementationAbs){
    $init$DOMImplementationAbs();
    if ($$dOMImplementationAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$dOMImplementationAbs);
    return $$dOMImplementationAbs;
}
DOMImplementationAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','DOMImplementationAbs']};};
exports.DOMImplementationAbs=DOMImplementationAbs;
function $init$DOMImplementationAbs(){
    if (DOMImplementationAbs.$$===undefined){
        $$$cl32209.initTypeProto(DOMImplementationAbs,'ceylon.js.dom::DOMImplementationAbs',$$$cjl32280.JSObjectAbs);
        (function($$dOMImplementationAbs){
            
            //MethodDefinition createDocument at domimplementation.ceylon (5:4-46:4)
            $$dOMImplementationAbs.createDocument$defs$qualifiedName=function(namespace$33111,qualifiedName$33112,doctype$33113){var $$dOMImplementationAbs=this;
            return $$$cl32209.String("",0);};
            $$dOMImplementationAbs.createDocument$defs$doctype=function(namespace$33111,qualifiedName$33112,doctype$33113){var $$dOMImplementationAbs=this;
            return null;};
            $$dOMImplementationAbs.createDocument=function createDocument(namespace$33111,qualifiedName$33112,doctype$33113){
                var $$dOMImplementationAbs=this;
                if(qualifiedName$33112===undefined){qualifiedName$33112=$$dOMImplementationAbs.createDocument$defs$qualifiedName(namespace$33111,qualifiedName$33112,doctype$33113);}
                if(doctype$33113===undefined){doctype$33113=$$dOMImplementationAbs.createDocument$defs$doctype(namespace$33111,qualifiedName$33112,doctype$33113);}
                //Switch statement at domimplementation.ceylon (6:8-45:8)
                var case$33114=namespace$33111;
                if ($$$cl32209.isOfType(namespace$33111,{t:$$$cl32209.String})) {
                    //Switch statement at domimplementation.ceylon (8:12-18:9)
                    var case$33115=qualifiedName$33112;
                    if ($$$cl32209.isOfType(qualifiedName$33112,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/case$33114.valueOf()/*NULL PARAM!*/,case$33115.valueOf()/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: dt")),'11:69-11:70','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(qualifiedName$33112,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/case$33114.valueOf()/*NULL PARAM!*/,case$33115.$native/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: dt")),'16:76-16:77','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }//End switch statement at domimplementation.ceylon (8:12-18:9)
                }else if ($$$cl32209.isOfType(namespace$33111,{t:$$$cjl32280.JSString})) {
                    //Switch statement at domimplementation.ceylon (21:12-31:9)
                    var case$33116=qualifiedName$33112;
                    if ($$$cl32209.isOfType(qualifiedName$33112,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/case$33114.$native/*NULL PARAM!*/,case$33116.valueOf()/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: dt")),'24:76-24:77','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(qualifiedName$33112,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/case$33114.$native/*NULL PARAM!*/,case$33116.$native/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: dt")),'29:83-29:84','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }//End switch statement at domimplementation.ceylon (21:12-31:9)
                }else if ($$$cl32209.isOfType(namespace$33111,{t:$$$cl32209.Null})) {
                    //Switch statement at domimplementation.ceylon (34:12-44:9)
                    var case$33117=qualifiedName$33112;
                    if ($$$cl32209.isOfType(qualifiedName$33112,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/null/*NULL PARAM!*/,case$33117.valueOf()/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: dt")),'37:64-37:65','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }else if ($$$cl32209.isOfType(qualifiedName$33112,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/null/*NULL PARAM!*/,case$33117.$native/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: dt")),'42:71-42:72','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }//End switch statement at domimplementation.ceylon (34:12-44:9)
                }//End switch statement at domimplementation.ceylon (6:8-45:8)
            };$$dOMImplementationAbs.createDocument.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Document},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{ t:'u', l:[{t:$$$cl32209.Null},{t:$$$cjl32280.JSString}]}]},$an:function(){return[];}},{$nm:'qualifiedName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'doctype',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:DocumentType}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DOMImplementationAbs','$m','createDocument']};};
            
            //MethodDefinition createDocumentType at domimplementation.ceylon (48:4-108:4)
            $$dOMImplementationAbs.createDocumentType=function createDocumentType(qualifiedName$33118,publicId$33119,systemId$33120){
                var $$dOMImplementationAbs=this;
                //Switch statement at domimplementation.ceylon (49:8-107:8)
                var case$33121=qualifiedName$33118;
                if ($$$cl32209.isOfType(qualifiedName$33118,{t:$$$cl32209.String})) {
                    //Switch statement at domimplementation.ceylon (51:12-77:9)
                    var case$33122=publicId$33119;
                    if ($$$cl32209.isOfType(publicId$33119,{t:$$$cl32209.String})) {
                        //Switch statement at domimplementation.ceylon (53:13-63:10)
                        var case$33123=systemId$33120;
                        if ($$$cl32209.isOfType(systemId$33120,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$33121.valueOf()/*NULL PARAM!*/,case$33122.valueOf()/*NULL PARAM!*/,case$33123.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(systemId$33120,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$33121.valueOf()/*NULL PARAM!*/,case$33122.valueOf()/*NULL PARAM!*/,case$33123.$native));
                            /*End dynamic block*/
                        }//End switch statement at domimplementation.ceylon (53:13-63:10)
                    }else if ($$$cl32209.isOfType(publicId$33119,{t:$$$cjl32280.JSString})) {
                        //Switch statement at domimplementation.ceylon (66:13-76:10)
                        var case$33124=systemId$33120;
                        if ($$$cl32209.isOfType(systemId$33120,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$33121.valueOf()/*NULL PARAM!*/,case$33122.$native/*NULL PARAM!*/,case$33124.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(systemId$33120,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$33121.valueOf()/*NULL PARAM!*/,case$33122.$native/*NULL PARAM!*/,case$33124.$native));
                            /*End dynamic block*/
                        }//End switch statement at domimplementation.ceylon (66:13-76:10)
                    }//End switch statement at domimplementation.ceylon (51:12-77:9)
                }else if ($$$cl32209.isOfType(qualifiedName$33118,{t:$$$cjl32280.JSString})) {
                    //Switch statement at domimplementation.ceylon (80:12-106:9)
                    var case$33125=publicId$33119;
                    if ($$$cl32209.isOfType(publicId$33119,{t:$$$cl32209.String})) {
                        //Switch statement at domimplementation.ceylon (82:13-92:10)
                        var case$33126=systemId$33120;
                        if ($$$cl32209.isOfType(systemId$33120,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$33121.$native/*NULL PARAM!*/,case$33125.valueOf()/*NULL PARAM!*/,case$33126.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(systemId$33120,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$33121.$native/*NULL PARAM!*/,case$33125.valueOf()/*NULL PARAM!*/,case$33126.$native));
                            /*End dynamic block*/
                        }//End switch statement at domimplementation.ceylon (82:13-92:10)
                    }else if ($$$cl32209.isOfType(publicId$33119,{t:$$$cjl32280.JSString})) {
                        //Switch statement at domimplementation.ceylon (95:13-105:10)
                        var case$33127=systemId$33120;
                        if ($$$cl32209.isOfType(systemId$33120,{t:$$$cl32209.String})) {
                            /*Begin dynamic block*/
                            return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$33121.$native/*NULL PARAM!*/,case$33125.$native/*NULL PARAM!*/,case$33127.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl32209.isOfType(systemId$33120,{t:$$$cjl32280.JSString})) {
                            /*Begin dynamic block*/
                            return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$33121.$native/*NULL PARAM!*/,case$33125.$native/*NULL PARAM!*/,case$33127.$native));
                            /*End dynamic block*/
                        }//End switch statement at domimplementation.ceylon (95:13-105:10)
                    }//End switch statement at domimplementation.ceylon (80:12-106:9)
                }//End switch statement at domimplementation.ceylon (49:8-107:8)
            };$$dOMImplementationAbs.createDocumentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentType},$ps:[{$nm:'qualifiedName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'publicId',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'systemId',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DOMImplementationAbs','$m','createDocumentType']};};
            
            //MethodDefinition hasFeature at domimplementation.ceylon (110:4-146:4)
            $$dOMImplementationAbs.hasFeature$defs$version=function(feature$33128,version$33129){var $$dOMImplementationAbs=this;
            return $$$cl32209.String("",0);};
            $$dOMImplementationAbs.hasFeature=function hasFeature(feature$33128,version$33129){
                var $$dOMImplementationAbs=this;
                if(version$33129===undefined){version$33129=$$dOMImplementationAbs.hasFeature$defs$version(feature$33128,version$33129);}
                
                //AttributeDeclaration has at domimplementation.ceylon (111:8-111:19)
                var has$33130;
                //Switch statement at domimplementation.ceylon (112:8-138:8)
                var case$33131=feature$33128;
                if ($$$cl32209.isOfType(feature$33128,{t:$$$cl32209.String})) {
                    //Switch statement at domimplementation.ceylon (114:12-124:9)
                    var case$33132=version$33129;
                    if ($$$cl32209.isOfType(version$33129,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        has$33130=$$dOMImplementationAbs.$native.hasFeature(/*NULL PARAM!*/case$33131.valueOf()/*NULL PARAM!*/,case$33132.valueOf());/*End dynamic block*/
                    }else if ($$$cl32209.isOfType(version$33129,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        has$33130=$$dOMImplementationAbs.$native.hasFeature(/*NULL PARAM!*/case$33131.valueOf()/*NULL PARAM!*/,case$33132.$native);/*End dynamic block*/
                    }//End switch statement at domimplementation.ceylon (114:12-124:9)
                }else if ($$$cl32209.isOfType(feature$33128,{t:$$$cjl32280.JSString})) {
                    //Switch statement at domimplementation.ceylon (127:12-137:9)
                    var case$33133=version$33129;
                    if ($$$cl32209.isOfType(version$33129,{t:$$$cl32209.String})) {
                        /*Begin dynamic block*/
                        has$33130=$$dOMImplementationAbs.$native.hasFeature(/*NULL PARAM!*/case$33131.$native/*NULL PARAM!*/,case$33133.valueOf());/*End dynamic block*/
                    }else if ($$$cl32209.isOfType(version$33129,{t:$$$cjl32280.JSString})) {
                        /*Begin dynamic block*/
                        has$33130=$$dOMImplementationAbs.$native.hasFeature(/*NULL PARAM!*/case$33131.$native/*NULL PARAM!*/,case$33133.$native);/*End dynamic block*/
                    }//End switch statement at domimplementation.ceylon (127:12-137:9)
                }//End switch statement at domimplementation.ceylon (112:8-138:8)
                /*Begin dynamic block*/
                if(has$33130){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$dOMImplementationAbs.hasFeature.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'feature',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'version',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DOMImplementationAbs','$m','hasFeature']};};
        })(DOMImplementationAbs.$$.prototype);
    }
    return DOMImplementationAbs;
}
exports.$init$DOMImplementationAbs=$init$DOMImplementationAbs;
$init$DOMImplementationAbs();

//ClassDefinition DOMImplementation at domimplementation.ceylon (149:0-154:0)
function DOMImplementation(n$33134, $$dOMImplementation){
    $init$DOMImplementation();
    if ($$dOMImplementation===undefined)$$dOMImplementation=new DOMImplementation.$$;
    $$dOMImplementation.n$33134_=n$33134;
    DOMImplementationAbs($$dOMImplementation);
    
    //AttributeDeclaration native at domimplementation.ceylon (150:1-150:29)
    $$dOMImplementation.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:DOMImplementation,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom','DOMImplementation','$at','native']};}};
    /*Begin dynamic block*/
    $$dOMImplementation.$native=$$dOMImplementation.n$33134;/*End dynamic block*/
    return $$dOMImplementation;
}
DOMImplementation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DOMImplementationAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','DOMImplementation']};};
exports.DOMImplementation=DOMImplementation;
function $init$DOMImplementation(){
    if (DOMImplementation.$$===undefined){
        $$$cl32209.initTypeProto(DOMImplementation,'ceylon.js.dom::DOMImplementation',$init$DOMImplementationAbs());
        (function($$dOMImplementation){
            
            //AttributeDeclaration native at domimplementation.ceylon (150:1-150:29)
            $$$cl32209.defineAttr($$dOMImplementation,'n$33134',function(){return this.n$33134_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:DOMImplementation,d:['ceylon.js.dom','DOMImplementation','$at','n']};});
        })(DOMImplementation.$$.prototype);
    }
    return DOMImplementation;
}
exports.$init$DOMImplementation=$init$DOMImplementation;
$init$DOMImplementation();
var $$$cjj33169=require('ceylon/js/json/1.0.0/ceylon.js.json-1.0.0');
$$$cl32209.$addmod$($$$cjj33169,'ceylon.js.json/1.0.0');

//ClassDefinition EventPhase at event.ceylon (4:0-4:104)
function EventPhase(num, $$eventPhase){
    $init$EventPhase();
    if ($$eventPhase===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$eventPhase.num_=num;
    return $$eventPhase;
}
EventPhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','EventPhase']};};
exports.EventPhase=EventPhase;
function $init$EventPhase(){
    if (EventPhase.$$===undefined){
        $$$cl32209.initTypeProto(EventPhase,'ceylon.js.dom::EventPhase',$$$cl32209.Basic);
        (function($$eventPhase){
            $$$cl32209.defineAttr($$eventPhase,'num',function(){return this.num_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Integer},$cont:EventPhase,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventPhase','$at','num']};});
        })(EventPhase.$$.prototype);
    }
    return EventPhase;
}
exports.$init$EventPhase=$init$EventPhase;
$init$EventPhase();

//ObjectDefinition none at event.ceylon (6:0-6:42)
function none$34160(){
    var $$none=new none$34160.$$;
    EventPhase((0),$$none);
    return $$none;
}
function $init$none$34160(){
    if (none$34160.$$===undefined){
        $$$cl32209.initTypeProto(none$34160,'ceylon.js.dom::none',$init$EventPhase());
    }
    return none$34160;
}
exports.$init$none$34160=$init$none$34160;
$init$none$34160();
var none$34161;
function getNone(){
    if (none$34161===undefined)none$34161=$init$none$34160()();
    return none$34161;
}
exports.getNone=getNone;
getNone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:none$34160},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','none']};};
$prop$getNone={get:getNone,$$metamodel$$:getNone.$$metamodel$$};
exports.$prop$getNone=$prop$getNone;

//ObjectDefinition capturePhase at event.ceylon (7:0-7:50)
function capturePhase$34162(){
    var $$capturePhase=new capturePhase$34162.$$;
    EventPhase((1),$$capturePhase);
    return $$capturePhase;
}
function $init$capturePhase$34162(){
    if (capturePhase$34162.$$===undefined){
        $$$cl32209.initTypeProto(capturePhase$34162,'ceylon.js.dom::capturePhase',$init$EventPhase());
    }
    return capturePhase$34162;
}
exports.$init$capturePhase$34162=$init$capturePhase$34162;
$init$capturePhase$34162();
var capturePhase$34163;
function getCapturePhase(){
    if (capturePhase$34163===undefined)capturePhase$34163=$init$capturePhase$34162()();
    return capturePhase$34163;
}
exports.getCapturePhase=getCapturePhase;
getCapturePhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:capturePhase$34162},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','capturePhase']};};
$prop$getCapturePhase={get:getCapturePhase,$$metamodel$$:getCapturePhase.$$metamodel$$};
exports.$prop$getCapturePhase=$prop$getCapturePhase;

//ObjectDefinition atTarget at event.ceylon (8:0-8:46)
function atTarget$34164(){
    var $$atTarget=new atTarget$34164.$$;
    EventPhase((2),$$atTarget);
    return $$atTarget;
}
function $init$atTarget$34164(){
    if (atTarget$34164.$$===undefined){
        $$$cl32209.initTypeProto(atTarget$34164,'ceylon.js.dom::atTarget',$init$EventPhase());
    }
    return atTarget$34164;
}
exports.$init$atTarget$34164=$init$atTarget$34164;
$init$atTarget$34164();
var atTarget$34165;
function getAtTarget(){
    if (atTarget$34165===undefined)atTarget$34165=$init$atTarget$34164()();
    return atTarget$34165;
}
exports.getAtTarget=getAtTarget;
getAtTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:atTarget$34164},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','atTarget']};};
$prop$getAtTarget={get:getAtTarget,$$metamodel$$:getAtTarget.$$metamodel$$};
exports.$prop$getAtTarget=$prop$getAtTarget;

//ObjectDefinition bubblingPhase at event.ceylon (9:0-9:51)
function bubblingPhase$34166(){
    var $$bubblingPhase=new bubblingPhase$34166.$$;
    EventPhase((3),$$bubblingPhase);
    return $$bubblingPhase;
}
function $init$bubblingPhase$34166(){
    if (bubblingPhase$34166.$$===undefined){
        $$$cl32209.initTypeProto(bubblingPhase$34166,'ceylon.js.dom::bubblingPhase',$init$EventPhase());
    }
    return bubblingPhase$34166;
}
exports.$init$bubblingPhase$34166=$init$bubblingPhase$34166;
$init$bubblingPhase$34166();
var bubblingPhase$34167;
function getBubblingPhase(){
    if (bubblingPhase$34167===undefined)bubblingPhase$34167=$init$bubblingPhase$34166()();
    return bubblingPhase$34167;
}
exports.getBubblingPhase=getBubblingPhase;
getBubblingPhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:bubblingPhase$34166},$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','bubblingPhase']};};
$prop$getBubblingPhase={get:getBubblingPhase,$$metamodel$$:getBubblingPhase.$$metamodel$$};
exports.$prop$getBubblingPhase=$prop$getBubblingPhase;

//ClassDefinition EventInit at event.ceylon (11:0-20:0)
function EventInit(bubbles, cancelable, $$eventInit){
    $init$EventInit();
    if ($$eventInit===undefined)$$eventInit=new EventInit.$$;
    $$eventInit.bubbles_=bubbles;
    $$eventInit.cancelable_=cancelable;
    return $$eventInit;
}
EventInit.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl32209.Basic},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventInit']};};
exports.EventInit=EventInit;
function $init$EventInit(){
    if (EventInit.$$===undefined){
        $$$cl32209.initTypeProto(EventInit,'ceylon.js.dom::EventInit',$$$cl32209.Basic);
        (function($$eventInit){
            
            //MethodDefinition toJson at event.ceylon (13:1-19:1)
            $$eventInit.toJson=function toJson(){
                var $$eventInit=this;
                
                //AttributeDeclaration json at event.ceylon (14:2-17:3)
                var json$34168=(values$34169=/*NULL PARAM!*/[$$$cl32209.Entry($$$cl32209.String("bubbles",7),$$eventInit.bubbles,{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.Boolean}})/*NULL PARAM!*/,$$$cl32209.Entry($$$cl32209.String("cancelable",10),$$eventInit.cancelable,{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.Boolean}})].reifyCeylonType({Absent:{t:$$$cl32209.Null},Element:{t:$$$cl32209.Entry,a:{Key:{t:$$$cl32209.String},Item:{t:$$$cl32209.Boolean}}}}),$$$cjj33169.JSON(values$34169));
                var values$34169;
                return json$34168.toJson();
            };$$eventInit.toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj33169.JSJSON},$ps:[],$cont:EventInit,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventInit','$m','toJson']};};
            $$$cl32209.defineAttr($$eventInit,'bubbles',function(){return this.bubbles_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:EventInit,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventInit','$at','bubbles']};});
            $$$cl32209.defineAttr($$eventInit,'cancelable',function(){return this.cancelable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$cont:EventInit,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventInit','$at','cancelable']};});
        })(EventInit.$$.prototype);
    }
    return EventInit;
}
exports.$init$EventInit=$init$EventInit;
$init$EventInit();

//MethodDefinition createEvent at event.ceylon (22:0-34:0)
function createEvent(type$34170,options$34171){
    //Switch statement at event.ceylon (23:1-33:1)
    var case$34172=type$34170;
    if ($$$cl32209.isOfType(type$34170,{t:$$$cl32209.String})) {
        /*Begin dynamic block*/
        return Event((typeof Event==='undefined'||Event===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Event")),'26:16-26:20','event.ceylon'):Event)(/*NULL PARAM!*/case$34172.valueOf()/*NULL PARAM!*/,options$34171.toJson()));
        /*End dynamic block*/
    }else if ($$$cl32209.isOfType(type$34170,{t:$$$cjl32280.JSString})) {
        /*Begin dynamic block*/
        return Event((typeof Event==='undefined'||Event===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Event")),'31:16-31:20','event.ceylon'):Event)(/*NULL PARAM!*/case$34172.$native/*NULL PARAM!*/,options$34171.toJson()));
        /*End dynamic block*/
    }//End switch statement at event.ceylon (23:1-33:1)
}
exports.createEvent=createEvent;
createEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Event},$ps:[{$nm:'type',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'options',$mt:'prm',$t:{t:EventInit},$an:function(){return[];}}],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','createEvent']};};

//ClassDefinition EventAbs at event.ceylon (36:0-162:0)
function EventAbs($$eventAbs){
    $init$EventAbs();
    if ($$eventAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$eventAbs);
    return $$eventAbs;
}
EventAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','EventAbs']};};
exports.EventAbs=EventAbs;
function $init$EventAbs(){
    if (EventAbs.$$===undefined){
        $$$cl32209.initTypeProto(EventAbs,'ceylon.js.dom::EventAbs',$$$cjl32280.JSObjectAbs);
        (function($$eventAbs){
            
            //MethodDefinition type at event.ceylon (38:4-42:4)
            $$eventAbs.type=function type(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSString($$eventAbs.$native.type);
                /*End dynamic block*/
            };$$eventAbs.type.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSString},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventAbs','$m','type']};};
            
            //MethodDefinition target at event.ceylon (44:4-54:4)
            $$eventAbs.target=function target(){
                var $$eventAbs=this;
                
                //AttributeDeclaration target at event.ceylon (45:8-45:22)
                var target$34173;
                /*Begin dynamic block*/
                target$34173=$$eventAbs.$native.target;if((tmpvar$34174=target$34173,tmpvar$34175=null,(tmpvar$34174.equals&&!tmpvar$34174.equals(tmpvar$34175))||tmpvar$34174!==tmpvar$34175)){
                    return EventTarget(target$34173);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$eventAbs.target.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:EventTarget}]},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventAbs','$m','target']};};
            
            //MethodDefinition currentTarget at event.ceylon (56:4-67:4)
            $$eventAbs.currentTarget=function currentTarget(){
                var $$eventAbs=this;
                
                //AttributeDeclaration target at event.ceylon (57:8-57:22)
                var target$34176;
                /*Begin dynamic block*/
                target$34176=$$eventAbs.$native.currentTarget;if((tmpvar$34177=target$34176,tmpvar$34178=null,(tmpvar$34177.equals&&!tmpvar$34177.equals(tmpvar$34178))||tmpvar$34177!==tmpvar$34178)){
                    return EventTarget(target$34176);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$eventAbs.currentTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl32209.Null},{t:EventTarget}]},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventAbs','$m','currentTarget']};};
            
            //MethodDefinition eventPhase at event.ceylon (69:4-82:1)
            $$eventAbs.eventPhase=function eventPhase(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                
                //AttributeDeclaration eventPhase at event.ceylon (71:12-71:50)
                var eventPhase$34179=$$eventAbs.$native.eventPhase;
                $prop$getEventPhase$34179={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},d:['ceylon.js.dom','EventAbs','$m','eventPhase','$at','eventPhase']};}};
                $prop$getEventPhase$34179.get=function(){return eventPhase$34179};
                if((tmpvar$34180=eventPhase$34179,tmpvar$34181=(typeof Event==='undefined'||Event===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Event")),'72:30-72:34','event.ceylon'):Event).NONE,(tmpvar$34180.equals&&tmpvar$34180.equals(tmpvar$34181))||tmpvar$34180===tmpvar$34181)){
                    return getNone();
                }else {
                    if((tmpvar$34182=eventPhase$34179,tmpvar$34183=(typeof Event==='undefined'||Event===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Event")),'74:37-74:41','event.ceylon'):Event).CAPTURING_PHASE,(tmpvar$34182.equals&&tmpvar$34182.equals(tmpvar$34183))||tmpvar$34182===tmpvar$34183)){
                        return getCapturePhase();
                    }else {
                        if((tmpvar$34184=eventPhase$34179,tmpvar$34185=(typeof Event==='undefined'||Event===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: Event")),'76:37-76:41','event.ceylon'):Event).AT_TARGET,(tmpvar$34184.equals&&tmpvar$34184.equals(tmpvar$34185))||tmpvar$34184===tmpvar$34185)){
                            return getAtTarget();
                        }else {
                            return getBubblingPhase();
                        }
                    }
                }/*End dynamic block*/
            };$$eventAbs.eventPhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:EventPhase},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventAbs','$m','eventPhase']};};
            
            //MethodDefinition stopPropagation at event.ceylon (84:1-88:1)
            $$eventAbs.stopPropagation=function stopPropagation(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                $$eventAbs.$native.stopPropagation();
                /*End dynamic block*/
            };$$eventAbs.stopPropagation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventAbs','$m','stopPropagation']};};
            
            //MethodDefinition stopImmediatePropagation at event.ceylon (90:1-94:1)
            $$eventAbs.stopImmediatePropagation=function stopImmediatePropagation(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                $$eventAbs.$native.stopImmediatePropagation();
                /*End dynamic block*/
            };$$eventAbs.stopImmediatePropagation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventAbs','$m','stopImmediatePropagation']};};
            
            //MethodDefinition bubbles at event.ceylon (96:1-104:1)
            $$eventAbs.bubbles=function bubbles(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                if($$eventAbs.$native.bubbles){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$eventAbs.bubbles.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventAbs','$m','bubbles']};};
            
            //MethodDefinition cancelable at event.ceylon (106:1-114:1)
            $$eventAbs.cancelable=function cancelable(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                if($$eventAbs.$native.cancelable){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$eventAbs.cancelable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventAbs','$m','cancelable']};};
            
            //MethodDefinition preventDefault at event.ceylon (116:1-120:1)
            $$eventAbs.preventDefault=function preventDefault(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                $$eventAbs.$native.preventDefault();
                /*End dynamic block*/
            };$$eventAbs.preventDefault.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventAbs','$m','preventDefault']};};
            
            //MethodDefinition defaultPrevented at event.ceylon (122:1-130:1)
            $$eventAbs.defaultPrevented=function defaultPrevented(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                if($$eventAbs.$native.defaultPrevented){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$eventAbs.defaultPrevented.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventAbs','$m','defaultPrevented']};};
            
            //MethodDefinition isTrusted at event.ceylon (132:1-140:1)
            $$eventAbs.isTrusted=function isTrusted(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                if($$eventAbs.$native.isTrusted){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$eventAbs.isTrusted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventAbs','$m','isTrusted']};};
            
            //MethodDefinition timeStamp at event.ceylon (142:1-146:1)
            $$eventAbs.timeStamp=function timeStamp(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                return $$$cjl32280.JSDate($$eventAbs.$native.timeStamp);
                /*End dynamic block*/
            };$$eventAbs.timeStamp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl32280.JSDate},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventAbs','$m','timeStamp']};};
            
            //MethodDefinition initEvent at event.ceylon (148:1-160:1)
            $$eventAbs.initEvent=function initEvent(type$34186,bubbles$34187,cancelable$34188){
                var $$eventAbs=this;
                //Switch statement at event.ceylon (149:2-159:8)
                var case$34189=type$34186;
                if ($$$cl32209.isOfType(type$34186,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$eventAbs.$native.initEvent(/*NULL PARAM!*/case$34189.valueOf()/*NULL PARAM!*/,(typeof callback==='undefined'||callback===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: callback")),'152:36-152:43','event.ceylon'):callback)/*NULL PARAM!*/,(typeof capture==='undefined'||capture===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: capture")),'152:46-152:52','event.ceylon'):capture));
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(type$34186,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$eventAbs.$native.initEvent(/*NULL PARAM!*/case$34189.$native/*NULL PARAM!*/,(typeof callback==='undefined'||callback===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: callback")),'157:43-157:50','event.ceylon'):callback)/*NULL PARAM!*/,(typeof capture==='undefined'||capture===null?$$$cl32209.throwexc($$$cl32209.Exception($$$cl32209.String("Undefined or null reference: capture")),'157:53-157:59','event.ceylon'):capture));
                    /*End dynamic block*/
                }//End switch statement at event.ceylon (149:2-159:8)
            };$$eventAbs.initEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'bubbles',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}},{$nm:'cancelable',$mt:'prm',$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:EventAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventAbs','$m','initEvent']};};
        })(EventAbs.$$.prototype);
    }
    return EventAbs;
}
exports.$init$EventAbs=$init$EventAbs;
$init$EventAbs();

//ClassDefinition Event at event.ceylon (164:0-169:0)
function Event(n$34190, $$event){
    $init$Event();
    if ($$event===undefined)$$event=new Event.$$;
    $$event.n$34190_=n$34190;
    EventAbs($$event);
    
    //AttributeDeclaration native at event.ceylon (165:1-165:29)
    $$event.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Event,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom','Event','$at','native']};}};
    /*Begin dynamic block*/
    $$event.$native=$$event.n$34190;/*End dynamic block*/
    return $$event;
}
Event.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:EventAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','Event']};};
exports.Event=Event;
function $init$Event(){
    if (Event.$$===undefined){
        $$$cl32209.initTypeProto(Event,'ceylon.js.dom::Event',$init$EventAbs());
        (function($$event){
            
            //AttributeDeclaration native at event.ceylon (165:1-165:29)
            $$$cl32209.defineAttr($$event,'n$34190',function(){return this.n$34190_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:Event,d:['ceylon.js.dom','Event','$at','n']};});
        })(Event.$$.prototype);
    }
    return Event;
}
exports.$init$Event=$init$Event;
$init$Event();

//ClassDefinition EventTargetAbs at eventtarget.ceylon (3:0-42:0)
function EventTargetAbs($$eventTargetAbs){
    $init$EventTargetAbs();
    if ($$eventTargetAbs===undefined)$$$cl32209.throwexc($$$cl32209.InvocationException$meta$model($$$cl32209.String("Cannot instantiate abstract class")),'?','?')
    $$$cjl32280.JSObjectAbs($$eventTargetAbs);
    return $$eventTargetAbs;
}
EventTargetAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl32280.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl32209.shared(),$$$cl32209.abstract()];},d:['ceylon.js.dom','EventTargetAbs']};};
exports.EventTargetAbs=EventTargetAbs;
function $init$EventTargetAbs(){
    if (EventTargetAbs.$$===undefined){
        $$$cl32209.initTypeProto(EventTargetAbs,'ceylon.js.dom::EventTargetAbs',$$$cjl32280.JSObjectAbs);
        (function($$eventTargetAbs){
            
            //MethodDefinition addEventListener at eventtarget.ceylon (5:1-17:1)
            $$eventTargetAbs.addEventListener$defs$capture=function(type$34191,callback$34192,capture$34193){var $$eventTargetAbs=this;
            return false;};
            $$eventTargetAbs.addEventListener=function addEventListener(type$34191,callback$34192,capture$34193){
                var $$eventTargetAbs=this;
                if(capture$34193===undefined){capture$34193=$$eventTargetAbs.addEventListener$defs$capture(type$34191,callback$34192,capture$34193);}
                //Switch statement at eventtarget.ceylon (6:2-16:2)
                var case$34194=type$34191;
                if ($$$cl32209.isOfType(type$34191,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$eventTargetAbs.$native.addEventListener(/*NULL PARAM!*/case$34194.valueOf()/*NULL PARAM!*/,$$$cl32209.$JsCallable(callback$34192,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:Event},Element:{t:Event}}},Return:{t:$$$cl32209.Anything}})/*NULL PARAM!*/,capture$34193);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(type$34191,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$eventTargetAbs.$native.addEventListener(/*NULL PARAM!*/case$34194.$native/*NULL PARAM!*/,$$$cl32209.$JsCallable(callback$34192,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:Event},Element:{t:Event}}},Return:{t:$$$cl32209.Anything}})/*NULL PARAM!*/,capture$34193);
                    /*End dynamic block*/
                }//End switch statement at eventtarget.ceylon (6:2-16:2)
            };$$eventTargetAbs.addEventListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'capture',$mt:'prm',$def:1,$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventTargetAbs','$m','addEventListener']};};
            
            //MethodDefinition removeEventListener at eventtarget.ceylon (19:1-31:1)
            $$eventTargetAbs.removeEventListener$defs$capture=function(type$34195,callback$34196,capture$34197){var $$eventTargetAbs=this;
            return false;};
            $$eventTargetAbs.removeEventListener=function removeEventListener(type$34195,callback$34196,capture$34197){
                var $$eventTargetAbs=this;
                if(capture$34197===undefined){capture$34197=$$eventTargetAbs.removeEventListener$defs$capture(type$34195,callback$34196,capture$34197);}
                //Switch statement at eventtarget.ceylon (20:2-30:2)
                var case$34198=type$34195;
                if ($$$cl32209.isOfType(type$34195,{t:$$$cl32209.String})) {
                    /*Begin dynamic block*/
                    $$eventTargetAbs.$native.removeEventListener(/*NULL PARAM!*/case$34198.valueOf()/*NULL PARAM!*/,$$$cl32209.$JsCallable(callback$34196,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:Event},Element:{t:Event}}},Return:{t:$$$cl32209.Anything}})/*NULL PARAM!*/,capture$34197);
                    /*End dynamic block*/
                }else if ($$$cl32209.isOfType(type$34195,{t:$$$cjl32280.JSString})) {
                    /*Begin dynamic block*/
                    $$eventTargetAbs.$native.removeEventListener(/*NULL PARAM!*/case$34198.$native/*NULL PARAM!*/,$$$cl32209.$JsCallable(callback$34196,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:$$$cl32209.Tuple,a:{Rest:{t:$$$cl32209.Empty},First:{t:Event},Element:{t:Event}}},Return:{t:$$$cl32209.Anything}})/*NULL PARAM!*/,capture$34197);
                    /*End dynamic block*/
                }//End switch statement at eventtarget.ceylon (20:2-30:2)
            };$$eventTargetAbs.removeEventListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl32209.String},{t:$$$cjl32280.JSString}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl32209.Anything},$an:function(){return[];}},{$nm:'capture',$mt:'prm',$def:1,$t:{t:$$$cl32209.Boolean},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventTargetAbs','$m','removeEventListener']};};
            
            //MethodDefinition dispatchEvent at eventtarget.ceylon (33:1-41:1)
            $$eventTargetAbs.dispatchEvent=function dispatchEvent(event$34199){
                var $$eventTargetAbs=this;
                /*Begin dynamic block*/
                if($$eventTargetAbs.$native.dispatchEvent(/*NULL PARAM!*/event$34199)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$eventTargetAbs.dispatchEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Boolean},$ps:[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventTargetAbs','$m','dispatchEvent']};};
        })(EventTargetAbs.$$.prototype);
    }
    return EventTargetAbs;
}
exports.$init$EventTargetAbs=$init$EventTargetAbs;
$init$EventTargetAbs();

//ClassDefinition EventTarget at eventtarget.ceylon (44:0-49:0)
function EventTarget(n$34200, $$eventTarget){
    $init$EventTarget();
    if ($$eventTarget===undefined)$$eventTarget=new EventTarget.$$;
    $$eventTarget.n$34200_=n$34200;
    EventTargetAbs($$eventTarget);
    
    //AttributeDeclaration native at eventtarget.ceylon (45:1-45:29)
    $$eventTarget.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:EventTarget,$an:function(){return[$$$cl32209.shared(),$$$cl32209.actual()];},d:['ceylon.js.dom','EventTarget','$at','native']};}};
    /*Begin dynamic block*/
    $$eventTarget.$native=$$eventTarget.n$34200;/*End dynamic block*/
    return $$eventTarget;
}
EventTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:EventTargetAbs},satisfies:[],$an:function(){return[$$$cl32209.shared()];},d:['ceylon.js.dom','EventTarget']};};
exports.EventTarget=EventTarget;
function $init$EventTarget(){
    if (EventTarget.$$===undefined){
        $$$cl32209.initTypeProto(EventTarget,'ceylon.js.dom::EventTarget',$init$EventTargetAbs());
        (function($$eventTarget){
            
            //AttributeDeclaration native at eventtarget.ceylon (45:1-45:29)
            $$$cl32209.defineAttr($$eventTarget,'n$34200',function(){return this.n$34200_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl32209.Anything},$cont:EventTarget,d:['ceylon.js.dom','EventTarget','$at','n']};});
        })(EventTarget.$$.prototype);
    }
    return EventTarget;
}
exports.$init$EventTarget=$init$EventTarget;
$init$EventTarget();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
