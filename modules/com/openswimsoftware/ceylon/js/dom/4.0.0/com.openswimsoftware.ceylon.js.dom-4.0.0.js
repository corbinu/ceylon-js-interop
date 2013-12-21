(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/1.0.0","com.openswimsoftware.ceylon.js.language\/1.8.0","com.openswimsoftware.ceylon.js.html\/5.0.0","com.openswimsoftware.ceylon.js.json\/1.0.0"],"$mod-name":"com.openswimsoftware.ceylon.js.dom","$mod-version":"4.0.0","com.openswimsoftware.ceylon.js.dom":{"attributeNode":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"attributeNode"},"endToStart":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"endToStart"},"Attr":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"AttrAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a DOM Attr"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Attr"},"documentTypeNode":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentTypeNode"},"ltr":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"obj","$an":{"shared":[]},"$nm":"ltr"},"TextAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"CharacterDataAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"wholeText":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["get the Text node as a String"]},"$nm":"wholeText"},"splitText":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Text"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[],"doc":["split the node in two at the offset"]},"$nm":"splitText"}},"$nm":"TextAbs"},"notationNode":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"notationNode"},"capturePhase":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"capturePhase"},"ProcessingInstructionAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getData":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["get the processing instruction data"]},"$nm":"getData"},"target":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["the processing instruction target"]},"$nm":"target"},"setData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the processing instruction data"]},"$nm":"setData"}},"$nm":"ProcessingInstructionAbs"},"filterSkip":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeFilterResult"},"$mt":"obj","$an":{"shared":[]},"$nm":"filterSkip"},"filterAccept":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeFilterResult"},"$mt":"obj","$an":{"shared":[]},"$nm":"filterAccept"},"$pkg-shared":"1","documentPositionFollowing":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionFollowing"},"css1Compat":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"CompatMode"},"$mt":"obj","$an":{"shared":[]},"$nm":"css1Compat"},"EventInit":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$an":{"shared":[]},"$nm":"bubbles"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$an":{"shared":[]},"$nm":"cancelable"}],"$mt":"cls","$an":{"shared":[],"doc":["Event creation options"]},"$m":{"toJson":{"$t":{"$md":"com.openswimsoftware.ceylon.js.json","$pk":"com.openswimsoftware.ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[],"doc":["convert to native JSON"]},"$nm":"toJson"}},"$at":{"bubbles":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"bubbles"},"cancelable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"cancelable"}},"$nm":"EventInit"},"EventTargetAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"addEventListener":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"capture"}]],"$mt":"mthd","$an":{"shared":[],"doc":["add an event listener to the target"]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"addEventListener"},"dispatchEvent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$an":{"shared":[],"doc":["dispatch an event at the target"]},"$nm":"dispatchEvent"},"removeEventListener":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"capture"}]],"$mt":"mthd","$an":{"shared":[],"doc":["remove an event listener from the target"]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"removeEventListener"}},"$nm":"EventTargetAbs"},"CDATASectionAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"TextAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"CDATASectionAbs"},"none":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"none"},"filterReject":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeFilterResult"},"$mt":"obj","$an":{"shared":[]},"$nm":"filterReject"},"DocumentTypeAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"name":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the document type name"]},"$nm":"name"},"publicId":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the document types public id string"]},"$nm":"publicId"},"systemId":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the document types system id string"]},"$nm":"systemId"}},"$nm":"DocumentTypeAbs"},"NodeListAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"item":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns he node at the given index"]},"$nm":"item"},"length":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the length of the node collection"]},"$nm":"length"}},"$nm":"NodeListAbs"},"EntityReference":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"EntityReferenceAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a DOM EntityReference"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"EntityReference"},"documentPositionImplementationSpecific":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionImplementationSpecific"},"ElementAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"hasAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns if attribute exists the element"]},"$nm":"hasAttribute"},"getAttributeNS":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["get the value of the attribute on this element within the given namespace"]},"$nm":"getAttributeNS"},"getElementsByTagName":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"tagName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["get elements on this element by the tagname"]},"$nm":"getElementsByTagName"},"getElementsByTagNameNS":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"tagName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["get elements on this element by the tagname within the given namespace"]},"$nm":"getElementsByTagNameNS"},"removeAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attrName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["remove an attribute on the element within the given namespace"]},"$nm":"removeAttributeNS"},"tagName":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the elements tag name"]},"$nm":"tagName"},"removeAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attrName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["remove an attribute on the element"]},"$nm":"removeAttribute"},"setAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set an attribute on the element within the given namespace"]},"$nm":"setAttributeNS"},"setAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set an attribute on the element"]},"$nm":"setAttribute"},"getAttribute":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["get the value of the attribute on this element"]},"$nm":"getAttribute"},"hasAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns if attribute exists the element within the given namespace"]},"$nm":"hasAttributeNS"}},"$nm":"ElementAbs"},"startToStart":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"startToStart"},"CompatMode":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"css1Compat"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"backCompat"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["Document Compatablity Mode"]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"CompatMode"},"rtl":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"obj","$an":{"shared":[]},"$nm":"rtl"},"DocumentFragment":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentFragmentAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a DOM DocumentFragment"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"DocumentFragment"},"loading":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"loading"},"documentPositionContainedBy":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionContainedBy"},"Event":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"EventAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a DOM Event"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Event"},"Comment":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"CommentAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a DOM comment"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Comment"},"EventAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"defaultPrevented":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["has the default been prevented"]},"$nm":"defaultPrevented"},"timeStamp":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSDate"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the time the event was created"]},"$nm":"timeStamp"},"stopPropagation":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["stops event propagation through further DOM elements"]},"$nm":"stopPropagation"},"eventPhase":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"EventPhase"},"$mt":"mthd","$an":{"shared":[],"doc":["returns current event phase"]},"$nm":"eventPhase"},"currentTarget":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"EventTarget"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the current event target"]},"$nm":"currentTarget"},"bubbles":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["does the event bubble through the dom or not"]},"$nm":"bubbles"},"stopImmediatePropagation":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the event propagation immidately"]},"$nm":"stopImmediatePropagation"},"target":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"EventTarget"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the event target"]},"$nm":"target"},"isTrusted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["was the event created by the browser or a script"]},"$nm":"isTrusted"},"cancelable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["is the event cancelable or not"]},"$nm":"cancelable"},"preventDefault":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["cancels the event if it is cancelable"]},"$nm":"preventDefault"},"type":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the Event type"]},"$nm":"type"}},"$nm":"EventAbs"},"NodeFilterResult":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"filterAccept"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"filterReject"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"filterSkip"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"NodeFilterResult"},"documentPositionPreceding":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionPreceding"},"DocumentDirection":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"rtl"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"ltr"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["Document Direction"]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DocumentDirection"},"createEvent":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Event"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"EventInit"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[],"doc":["create a new Event"]},"$nm":"createEvent"},"DocumentFragmentAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"DocumentFragmentAbs"},"RangeAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"extractContents":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentFragment"},"$mt":"mthd","$an":{"shared":[],"doc":["move the contents of the range from their document to a new document fragment"]},"$nm":"extractContents"},"detach":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["detach a range from use to free resources"]},"$nm":"detach"},"compareBoundaryPoints":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"prm","$nm":"how"},{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Range"},"$mt":"prm","$nm":"sourceRange"}]],"$mt":"mthd","$an":{"shared":[],"doc":["compare the boundery points of one range with another"]},"$nm":"compareBoundaryPoints"},"selectNodeContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the range to contain the contents of the given node"]},"$nm":"selectNodeContents"},"insertNode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newNode"}]],"$mt":"mthd","$an":{"shared":[],"doc":["insert a node at the start of the range"]},"$nm":"insertNode"},"deleteContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["remove the contents of range from the document"]},"$nm":"deleteContents"},"setStartAfter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the start position of the range relative to the given node"]},"$nm":"setStartAfter"},"startOffset":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a number where the container range begins"]},"$nm":"startOffset"},"collapsed":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["is the start and end nodes the same node"]},"$nm":"collapsed"},"cloneRange":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Range"},"$mt":"mthd","$an":{"shared":[],"doc":["clone the range"]},"$nm":"cloneRange"},"surroundContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newNode"}]],"$mt":"mthd","$an":{"shared":[],"doc":["move the contents of the range into the new node"]},"$nm":"surroundContents"},"cloneContents":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentFragment"},"$mt":"mthd","$an":{"shared":[],"doc":["creates a new document copying the nodes inside of the range"]},"$nm":"cloneContents"},"selectNode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the range to contain node and its contents"]},"$nm":"selectNode"},"endOffset":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a number where the container range ends"]},"$nm":"endOffset"},"setStart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"startNode"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"startOffset"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the start position of the range"]},"$nm":"setStart"},"isPointInRange":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[],"doc":["is the the current point in the range"]},"$nm":"isPointInRange"},"commonAncestorContainer":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the deepest Node that contains the startContainer and endContainer nodes"]},"$nm":"commonAncestorContainer"},"startContainer":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the node where the container range begins"]},"$nm":"startContainer"},"endContainer":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the node where the container range ends"]},"$nm":"endContainer"},"setEndAfter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the end position of the range relative to the given node"]},"$nm":"setEndAfter"},"setStartBefore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the start position of the range relative to the given node"]},"$nm":"setStartBefore"},"setEndBefore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the end position of the range relative to the given node"]},"$nm":"setEndBefore"},"setEnd":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"endNode"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"endOffset"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the end position of the range"]},"$nm":"setEnd"},"collapse":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"toStart"}]],"$mt":"mthd","$an":{"shared":[],"doc":["collapses the range to one of its boundery points"]},"$nm":"collapse"}},"$nm":"RangeAbs"},"Node":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a DOM Node"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Node"},"NodeType":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"attributeNode"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"cdataSectionNode"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"commentNode"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"documentFragmentNode"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"documentNode"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"documentTypeNode"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"elementNode"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"entityNode"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"entityReferenceNode"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"notationNode"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"processingInstructionNode"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"textNode"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["specific NodeType"]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"NodeType"},"processingInstructionNode":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"processingInstructionNode"},"endToEnd":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"endToEnd"},"CharacterDataAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"replaceData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"count"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[],"doc":["replace the Characters starting at offset to count using the String data"]},"$nm":"replaceData"},"getData":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the CharacterData"]},"$nm":"getData"},"deleteData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"count"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"deleteData"},"length":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the length of the CharacterData"]},"$nm":"length"},"insertData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[],"doc":["insert the Characters starting at offset using the String data"]},"$nm":"insertData"},"appendData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[],"doc":["append the Characters with String data"]},"$nm":"appendData"},"substringData":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"count"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a subtstring starting at offset and through a count"]},"$nm":"substringData"},"setData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the CharacterData"]},"$nm":"setData"}},"$nm":"CharacterDataAbs"},"commentNode":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"commentNode"},"NodeList":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeListAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["collection of DOM nodes"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"NodeList"},"documentPositionContains":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionContains"},"TreeWalkerAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"previousSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[],"doc":["move the tree to the current nodes previous sibling"]},"$nm":"previousSibling"},"whatToShow":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns what type of nodes are present on the tree"]},"$nm":"whatToShow"},"parentNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[],"doc":["move the tree to the first node in the document order"]},"$nm":"parentNode"},"root":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the node where the tree walker was created"]},"$nm":"root"},"firstChild":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[],"doc":["move the tree to the first child of the current node"]},"$nm":"firstChild"},"currentNode":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the current document node"]},"$nm":"currentNode"},"nextNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[],"doc":["move the tree to the next node and returns"]},"$nm":"nextNode"},"nextSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[],"doc":["move the tree to the current nodes next sibling"]},"$nm":"nextSibling"},"filter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the node filter used to select the tree nodes"]},"$nm":"filter"},"previousNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[],"doc":["move the tree to the previous node and returns"]},"$nm":"previousNode"},"lastChild":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[],"doc":["move the tree to the last child of the current node"]},"$nm":"lastChild"}},"$nm":"TreeWalkerAbs"},"CharacterData":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"CharacterDataAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a DOM CharacterData segment used by Text, Comment and Processing Instruction"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"CharacterData"},"DOMImplementationAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"createDocument":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Document"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"qualifiedName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentType"}]},"$mt":"prm","$def":"1","$nm":"doctype"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a new Document"]},"$nm":"createDocument"},"createDocumentType":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentType"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"qualifiedName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"publicId"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"systemId"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a new DocumentType"]},"$nm":"createDocumentType"},"hasFeature":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"feature"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"version"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns if the DOM has the given feature at the specified or greater version"]},"$nm":"hasFeature"}},"$nm":"DOMImplementationAbs"},"documentFragmentNode":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentFragmentNode"},"DocumentPosition":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"documentPositionContainedBy"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"documentPositionContains"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"documentPositionDisconnected"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"documentPositionFollowing"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"documentPositionImplementationSpecific"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"documentPositionPreceding"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["Document Positon Type"]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DocumentPosition"},"HTMLCollectionAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"item":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"doc":["return the node at the given index"]},"$nm":"item"},"length":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the length of the collection"]},"$nm":"length"},"namedItem":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObject"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"doc":["return the node whose id or name matches the passed name"]},"$nm":"namedItem"}},"$nm":"HTMLCollectionAbs"},"RangeCompareHow":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"endToEnd"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"endToStart"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"startToEnd"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"startToStart"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["how to comare ranges"]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"RangeCompareHow"},"NodeIteratorAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"whatToShow":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["return long representing what types of nodes the iterator shows"]},"$nm":"whatToShow"},"root":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the iterators root node"]},"$nm":"root"},"nextNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[],"doc":["return the next node"]},"$nm":"nextNode"},"filter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"mthd","$an":{"shared":[],"doc":["return the iterator filter if any"]},"$nm":"filter"},"previousNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[],"doc":["return the previous node"]},"$nm":"previousNode"}},"$nm":"NodeIteratorAbs"},"entityNode":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"entityNode"},"backCompat":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"CompatMode"},"$mt":"obj","$an":{"shared":[]},"$nm":"backCompat"},"HTMLCollection":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"HTMLCollectionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a DOM HTMLCollection"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"HTMLCollection"},"textNode":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"textNode"},"interactive":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"interactive"},"complete":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"complete"},"NodeIterator":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeIteratorAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a DOM NodeIterator"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"NodeIterator"},"startToEnd":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"startToEnd"},"DOMImplementation":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DOMImplementationAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a DOMImplementation"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"DOMImplementation"},"cdataSectionNode":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"cdataSectionNode"},"DocumentType":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentTypeAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a DocumentType"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"DocumentType"},"CommentAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"CharacterDataAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"CommentAbs"},"Range":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"RangeAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["DOM range"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Range"},"Document":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a DOM Document"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Document"},"entityReferenceNode":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"entityReferenceNode"},"atTarget":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"atTarget"},"EntityReferenceAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"EntityReferenceAbs"},"AttrAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getValue":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the Attr value string"]},"$nm":"getValue"},"name":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the Attr name"]},"$nm":"name"},"setValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the Attr value string"]},"$nm":"setValue"},"isId":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the Attr is an ID or not"]},"$nm":"isId"}},"$nm":"AttrAbs"},"elementNode":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"elementNode"},"NodeFilter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeFilterResult"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"n"}]],"$mt":"prm","$pt":"f","$nm":"acceptNode"}],"$mt":"cls","$an":{"shared":[],"doc":["Node Filter"]},"$m":{"acceptNode":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeFilterResult"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"n"}]],"$mt":"mthd","$nm":"acceptNode"}},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"}},"$nm":"NodeFilter"},"documentPositionDisconnected":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionDisconnected"},"getWindow":{"$t":{"$md":"com.openswimsoftware.ceylon.js.html","$pk":"com.openswimsoftware.ceylon.js.html","$nm":"Window"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the current browser window"]},"$nm":"getWindow"},"Text":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"TextAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a DOM Text element"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Text"},"CDATASection":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"CDATASectionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a DOM CDATASection"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"CDATASection"},"documentNode":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentNode"},"TreeWalker":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"TreeWalkerAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a Document TreeWalker"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"TreeWalker"},"EventPhase":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"none"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"capturePhase"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"atTarget"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"bubblingPhase"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$an":{"shared":[]},"$nm":"num"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["current Event Phase"]},"$at":{"num":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"num"}},"$nm":"EventPhase"},"bubblingPhase":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"bubblingPhase"},"NodeAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"firstChild":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the nodes first child node"]},"$nm":"firstChild"},"nodeName":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the nodes name"]},"$nm":"nodeName"},"childNodes":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeList"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a list of child nodes"]},"$nm":"childNodes"},"baseURI":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the nodes baseURI"]},"$nm":"baseURI"},"replaceChild":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newChild"},{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"oldChild"}]],"$mt":"mthd","$an":{"shared":[],"doc":["replaces the old node with the new one and returns the old node"]},"$nm":"replaceChild"},"setTextContent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the text content of the node and its descendents"]},"$nm":"setTextContent"},"lastChild":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the last child node of this node"]},"$nm":"lastChild"},"normalize":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["clean up all the text nodes under this on"]},"$nm":"normalize"},"lookupPrefix":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"namespaceURI"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the prefix for the given namespaceURI"]},"$nm":"lookupPrefix"},"previousSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the node immediately proceding this node in the parents child nodes or null if none"]},"$nm":"previousSibling"},"parentNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the parent node if any"]},"$nm":"parentNode"},"hasChildNodes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["if the node has children"]},"$nm":"hasChildNodes"},"nodeType":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeType"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the nodes type"]},"$nm":"nodeType"},"cloneNode":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"bool"}]],"$mt":"mthd","$an":{"shared":[],"doc":["clones the current node pass true for deep copy"]},"$nm":"cloneNode"},"nextSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the node immediately after this node in the parents child nodes or null if none"]},"$nm":"nextSibling"},"isDefaultNamespace":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespaceURI"}]],"$mt":"mthd","$an":{"shared":[],"doc":["is the passed namespace the default one"]},"$nm":"isDefaultNamespace"},"insertBefore":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newElement"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"}]},"$mt":"prm","$nm":"referenceElement"}]],"$mt":"mthd","$an":{"shared":[],"doc":["insert the passed node to children before the reference node"]},"$nm":"insertBefore"},"appendChild":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[],"doc":["append the node to the nodes children"]},"$nm":"appendChild"},"setNodeValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the value of the current node"]},"$nm":"setNodeValue"},"compareDocumentPosition":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentPosition"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[],"doc":["return the node document position compared to the passed node"]},"$nm":"compareDocumentPosition"},"removeChild":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[],"doc":["removes the child node and returns the removed node"]},"$nm":"removeChild"},"prefix":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[],"doc":["string of the nodes namespace prefix"]},"$nm":"prefix"},"getTextContent":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the text content of the node and its descendents"]},"$nm":"getTextContent"},"isEqualNode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[],"doc":["is the passed node equal to this one"]},"$nm":"isEqualNode"},"getNodeValue":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the value of the current node"]},"$nm":"getNodeValue"}},"$at":{"ownerDocument":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Document"},"$mt":"gttr","$an":{"shared":[],"doc":["returns nodes owning document"]},"$nm":"ownerDocument"}},"$nm":"NodeAbs"},"EventTarget":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"EventTargetAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a DOM EventTarget"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"EventTarget"},"ProcessingInstruction":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"ProcessingInstructionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["Processing Instruction"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"ProcessingInstruction"},"DocumentReadyState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"loading"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"interactive"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"complete"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["Document Ready State"]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DocumentReadyState"},"DocumentAbs":{"abstract":"1","super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"writeln":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"line"}]],"$mt":"mthd","$an":{"shared":[],"doc":["write the string to the document as a line"]},"$nm":"writeln"},"body":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the body node on the document"]},"$nm":"body"},"getElementsByName":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a list of elements in the document with the given name"]},"$nm":"getElementsByName"},"createNodeIterator":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeIterator"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"root"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"whatToShow"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a new node iterator the document"]},"$nm":"createNodeIterator"},"location":{"$t":{"$md":"com.openswimsoftware.ceylon.js.html","$pk":"com.openswimsoftware.ceylon.js.html","$nm":"Location"},"$mt":"mthd","$an":{"shared":[],"doc":["returns location information about the URL of the document"]},"$nm":"location"},"hasFocus":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["returns whether the document or any element in the document currently has focus"]},"$nm":"hasFocus"},"defaultView":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.html","$pk":"com.openswimsoftware.ceylon.js.html","$nm":"Window"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the browser window object associated with the document"]},"$nm":"defaultView"},"close":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["finishes writing to a document opened with Document.open()"]},"$nm":"close"},"open":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["opens a document for writing"]},"$nm":"open"},"scripts":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a collection of all the script elements in the document"]},"$nm":"scripts"},"createAttributeNS":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Attr"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"doc":["creates a attribute with the given namespace"]},"$nm":"createAttributeNS"},"getElementsByClassName":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"names"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a collection of elements on the document by the class name"]},"$nm":"getElementsByClassName"},"createAttribute":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Attr"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"doc":["creates a new attribute"]},"$nm":"createAttribute"},"querySelector":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"selectors"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the first element which matches the selectors"]},"$nm":"querySelector"},"activeElement":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the currently focused element on the document"]},"$nm":"activeElement"},"head":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the document head element"]},"$nm":"head"},"documentElement":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the element that is a direct child of the document"]},"$nm":"documentElement"},"setAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"async"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets whether a document.load call should be made asynchronously"]},"$nm":"setAsync"},"getElementById":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"id"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns element on the document by the id"]},"$nm":"getElementById"},"releaseCapture":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["release current mouse capture"]},"$nm":"releaseCapture"},"styleSheetSets":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Array of Strings naming the avaiable StyleSheets"]},"$nm":"styleSheetSets"},"getElementsByTagNameNS":{"$t":{"comp":"u","$ts":[{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"HTMLCollection"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeList"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a collection of elements on the document by the tagname in a namespace"]},"$nm":"getElementsByTagNameNS"},"getAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["gets whether a document.load call will be made asynchronously"]},"$nm":"getAsync"},"getCookie":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns cookies associated with the document in the form of a comma sepearted list of key=value pairs"]},"$nm":"getCookie"},"getDir":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"mthd","$an":{"shared":[],"doc":["get the document direction"]},"$nm":"getDir"},"setDir":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"prm","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the document direction"]},"$nm":"setDir"},"elementFromPoint":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"x"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns element at the given point coordinates"]},"$nm":"elementFromPoint"},"preferredStyleSheetSet":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the prefurred name of the StyleSheet set on the document"]},"$nm":"preferredStyleSheetSet"},"url":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the document url"]},"$nm":"url"},"createComment":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Comment"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[],"doc":["creates a new comment"]},"$nm":"createComment"},"referrer":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns uri of the page which linked to this document"]},"$nm":"referrer"},"documentURI":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns documents URI"]},"$nm":"documentURI"},"setSelectedStyleSheetSet":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"sheet"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a linked to or embeded in the document by its name"]},"$nm":"setSelectedStyleSheetSet"},"images":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a collection of all image elements in the document"]},"$nm":"images"},"styleSheets":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom.stylesheets","$nm":"StyleSheetList"},"$mt":"mthd","$an":{"shared":[],"doc":["returns collection of StyleSheets linked to or embeded in the document"]},"$nm":"styleSheets"},"doctype":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentType"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns the documents doctype"]},"$nm":"doctype"},"createCDATASection":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"CDATASection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[],"doc":["creates a new CDATASection"]},"$nm":"createCDATASection"},"getDomain":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["get the documents domain"]},"$nm":"getDomain"},"importNode":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"externalNode"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"deep"}]],"$mt":"mthd","$an":{"shared":[],"doc":["creates a copy of a node from another document that can be inserted into the current document"]},"$nm":"importNode"},"adoptNode":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[],"doc":["adapts a node from a external document"]},"$nm":"adoptNode"},"getDesignMode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["returns if the documents design mode is on"]},"$nm":"getDesignMode"},"plugins":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[],"doc":["returns collection of all the plugin elements on the document"]},"$nm":"plugins"},"compatMode":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"CompatMode"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the documents compatablity mode"]},"$nm":"compatMode"},"createTextNode":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Text"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[],"doc":["creates a new text node"]},"$nm":"createTextNode"},"createElementNS":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"qualifiedName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["creates a new element in the given namespace"]},"$nm":"createElementNS"},"querySelectorAll":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeList"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"selectors"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a list of all elements within the document"]},"$nm":"querySelectorAll"},"createDocumentFragment":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentFragment"},"$mt":"mthd","$an":{"shared":[],"doc":["creates a document fragment"]},"$nm":"createDocumentFragment"},"title":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the documents title"]},"$nm":"title"},"getElementsByTagName":{"$t":{"comp":"u","$ts":[{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"HTMLCollection"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeList"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a collection of elements on the document by the tagname"]},"$nm":"getElementsByTagName"},"write":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"line"}]],"$mt":"mthd","$an":{"shared":[],"doc":["write the string to the document"]},"$nm":"write"},"setDomain":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"domain"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set the domain string of the document"]},"$nm":"setDomain"},"forms":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a collection of all form elements in the document"]},"$nm":"forms"},"characterSet":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns documents CharacterSet"]},"$nm":"characterSet"},"lastModified":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the date the document was last modified as a string"]},"$nm":"lastModified"},"links":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[],"doc":["returns all of the link elements in the document"]},"$nm":"links"},"readyState":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the current ready state of the document"]},"$nm":"readyState"},"createRange":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Range"},"$mt":"mthd","$an":{"shared":[],"doc":["create a new range"]},"$nm":"createRange"},"anchors":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeList"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a collection of all anchors in the document"]},"$nm":"anchors"},"selectedStyleSheetSet":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the name of the StyleSheet set that is currently in use on the document"]},"$nm":"selectedStyleSheetSet"},"implementation":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"DOMImplementation"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the DOM implementation associated with the document"]},"$nm":"implementation"},"setCookie":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"cookie"}]],"$mt":"mthd","$an":{"shared":[],"doc":["set cookies associated with the document in the form of a comma sepearted list of key=value pairs"]},"$nm":"setCookie"},"lastStyleSheetSet":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the name of the last enabled StyleSheet Set for the document"]},"$nm":"lastStyleSheetSet"},"createTreeWalker":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"TreeWalker"},"$ps":[[{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"root"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"whatToShow"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns a new tree walker for walking the document"]},"$nm":"createTreeWalker"},"createElement":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"tagName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["creates a new element"]},"$nm":"createElement"},"createProcessingInstruction":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"ProcessingInstruction"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"target"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[],"doc":["creates a processing instruction node"]},"$nm":"createProcessingInstruction"}},"$nm":"DocumentAbs"},"Element":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"ElementAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a DOM Element"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Element"}},"$mod-bin":"6.0","com.openswimsoftware.ceylon.js.dom.stylesheets":{"StyleSheetAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"title":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns StyleSheet title"]},"$nm":"title"},"ownerNode":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[],"doc":["returns StyleSheets owning node"]},"$nm":"ownerNode"},"type":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns StyleSheets mime type string"]},"$nm":"type"},"media":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom.stylesheets","$nm":"MediaList"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the collection of Media Queries associated with the StyleSheet"]},"$nm":"media"},"href":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["returns StyleSheet location"]},"$nm":"href"},"parentStyleSheet":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom.stylesheets","$nm":"StyleSheet"},"$mt":"mthd","$an":{"shared":[],"doc":["returns StyleSheets parent"]},"$nm":"parentStyleSheet"},"disabled":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["returns if the StyleSheet is disabled or not"]},"$nm":"disabled"}},"$nm":"StyleSheetAbs"},"MediaListAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"appendMedium":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"newMedium"}]],"$mt":"mthd","$an":{"shared":[],"doc":["appends the passed Media Query to the collection"]},"$nm":"appendMedium"},"setMediaText":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"text"}]],"$mt":"mthd","$an":{"shared":[],"doc":["sets the media list to a string of Media Queries"]},"$nm":"setMediaText"},"item":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns Media Query at the specified index"]},"$nm":"item"},"length":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the number of Media Queries in the Collection"]},"$nm":"length"},"deleteMedium":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"oldMedium"}]],"$mt":"mthd","$an":{"shared":[],"doc":["removes any media querys which match the passed query string"]},"$nm":"deleteMedium"},"getMediaText":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[],"doc":["serializes Media Queries"]},"$nm":"getMediaText"}},"$nm":"MediaListAbs"},"$pkg-shared":"1","MediaList":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom.stylesheets","$nm":"MediaListAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["Collection of Media Queries"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"MediaList"},"StyleSheet":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom.stylesheets","$nm":"StyleSheetAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["represents a basic StyleSheet"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"StyleSheet"},"StyleSheetListAbs":{"abstract":"1","super":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"item":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"com.openswimsoftware.ceylon.js.dom.stylesheets","$nm":"StyleSheet"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns the StyleSheet at the specified index"]},"$nm":"item"},"length":{"$t":{"$md":"com.openswimsoftware.ceylon.js.language","$pk":"com.openswimsoftware.ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[],"doc":["returns the length of the StyleSheet Collection"]},"$nm":"length"}},"$nm":"StyleSheetListAbs"},"StyleSheetList":{"super":{"$pk":"com.openswimsoftware.ceylon.js.dom.stylesheets","$nm":"StyleSheetListAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[],"doc":["a collection of StyleSheets"]},"$at":{"native":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"com.openswimsoftware.ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"StyleSheetList"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl1.$addmod$($$$cl1,'ceylon.language/1.0.0');
var $$$cocjl339=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
$$$cl1.$addmod$($$$cocjl339,'com.openswimsoftware.ceylon.js.language/1.8.0');
function AttrAbs($$attrAbs){
    $init$AttrAbs();
    if ($$attrAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$attrAbs);
    return $$attrAbs;
}
AttrAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','AttrAbs']};};
exports.AttrAbs=AttrAbs;
function $init$AttrAbs(){
    if (AttrAbs.$$===undefined){
        $$$cl1.initTypeProto(AttrAbs,'com.openswimsoftware.ceylon.js.dom::AttrAbs',$$$cocjl339.JSObjectAbs);
        (function($$attrAbs){
            $$attrAbs.isId=function isId(){
                var $$attrAbs=this;
                /*Begin dynamic block*/
                if($$attrAbs.$native.isId){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$attrAbs.isId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:AttrAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the Attr is an ID or not",32)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','AttrAbs','$m','isId']};};
            $$attrAbs.name=function name(){
                var $$attrAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$attrAbs.$native.name);
                /*End dynamic block*/
            };$$attrAbs.name.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:AttrAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the Attr name",21)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','AttrAbs','$m','name']};};
            $$attrAbs.getValue=function getValue(){
                var $$attrAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$attrAbs.$native.value);
                /*End dynamic block*/
            };$$attrAbs.getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:AttrAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the Attr value string",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','AttrAbs','$m','getValue']};};
            $$attrAbs.setValue=function setValue(val$395){
                var $$attrAbs=this;
                
                var case$396=val$395;
                if ($$$cl1.isOfType(val$395,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$attrAbs.$native.value=case$396.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(val$395,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$attrAbs.$native.value=case$396.$native;
                    /*End dynamic block*/
                }
            };$$attrAbs.setValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:AttrAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the Attr value string",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','AttrAbs','$m','setValue']};};
        })(AttrAbs.$$.prototype);
    }
    return AttrAbs;
}
exports.$init$AttrAbs=$init$AttrAbs;
$init$AttrAbs();
function Attr(n$397, $$attr){
    $init$Attr();
    if ($$attr===undefined)$$attr=new Attr.$$;
    $$attr.n$397_=n$397;
    AttrAbs($$attr);
    $$attr.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Attr,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','Attr','$at','native']};}};
    /*Begin dynamic block*/
    $$attr.$native=$$attr.n$397;/*End dynamic block*/
    return $$attr;
}
Attr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:AttrAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a DOM Attr",10)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','Attr']};};
exports.Attr=Attr;
function $init$Attr(){
    if (Attr.$$===undefined){
        $$$cl1.initTypeProto(Attr,'com.openswimsoftware.ceylon.js.dom::Attr',$init$AttrAbs());
        (function($$attr){
            $$$cl1.defineAttr($$attr,'n$397',function(){return this.n$397_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Attr,d:['com.openswimsoftware.ceylon.js.dom','Attr','$at','n']};});
        })(Attr.$$.prototype);
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
CommentAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CharacterDataAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','CommentAbs']};};
exports.CommentAbs=CommentAbs;
function $init$CommentAbs(){
    if (CommentAbs.$$===undefined){
        $$$cl1.initTypeProto(CommentAbs,'com.openswimsoftware.ceylon.js.dom::CommentAbs',$init$CharacterDataAbs());
    }
    return CommentAbs;
}
exports.$init$CommentAbs=$init$CommentAbs;
$init$CommentAbs();
function Comment(n$398, $$comment){
    $init$Comment();
    if ($$comment===undefined)$$comment=new Comment.$$;
    $$comment.n$398_=n$398;
    CommentAbs($$comment);
    $$comment.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Comment,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','Comment','$at','native']};}};
    /*Begin dynamic block*/
    $$comment.$native=$$comment.n$398;/*End dynamic block*/
    return $$comment;
}
Comment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CommentAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a DOM comment",13)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','Comment']};};
exports.Comment=Comment;
function $init$Comment(){
    if (Comment.$$===undefined){
        $$$cl1.initTypeProto(Comment,'com.openswimsoftware.ceylon.js.dom::Comment',$init$CommentAbs());
        (function($$comment){
            $$$cl1.defineAttr($$comment,'n$398',function(){return this.n$398_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Comment,d:['com.openswimsoftware.ceylon.js.dom','Comment','$at','n']};});
        })(Comment.$$.prototype);
    }
    return Comment;
}
exports.$init$Comment=$init$Comment;
$init$Comment();
function CharacterDataAbs($$characterDataAbs){
    $init$CharacterDataAbs();
    if ($$characterDataAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$characterDataAbs);
    return $$characterDataAbs;
}
CharacterDataAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs']};};
exports.CharacterDataAbs=CharacterDataAbs;
function $init$CharacterDataAbs(){
    if (CharacterDataAbs.$$===undefined){
        $$$cl1.initTypeProto(CharacterDataAbs,'com.openswimsoftware.ceylon.js.dom::CharacterDataAbs',$init$NodeAbs());
        (function($$characterDataAbs){
            $$characterDataAbs.getData=function getData(){
                var $$characterDataAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$characterDataAbs.$native.data);
                /*End dynamic block*/
            };$$characterDataAbs.getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the CharacterData",25)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs','$m','getData']};};
            $$characterDataAbs.setData=function setData(data$399){
                var $$characterDataAbs=this;
                
                var case$400=data$399;
                if ($$$cl1.isOfType(data$399,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.data=case$400.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$399,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.data=case$400.$native;
                    /*End dynamic block*/
                }
            };$$characterDataAbs.setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the CharacterData",21)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs','$m','setData']};};
            $$characterDataAbs.length=function length(){
                var $$characterDataAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$characterDataAbs.$native.length);
                /*End dynamic block*/
            };$$characterDataAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the length of the CharacterData",39)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs','$m','length']};};
            $$characterDataAbs.substringData=function substringData(offset$401,count$402){
                var $$characterDataAbs=this;
                
                var case$403=offset$401;
                if ($$$cl1.isOfType(offset$401,{t:$$$cl1.Integer})) {
                    
                    var case$404=count$402;
                    if ($$$cl1.isOfType(count$402,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return $$$cocjl339.JSString($$characterDataAbs.$native.substringData(case$403,case$404));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(count$402,{t:$$$cocjl339.JSNumber})) {
                        /*Begin dynamic block*/
                        return $$$cocjl339.JSString($$characterDataAbs.$native.substringData(case$403,case$404.$native));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(offset$401,{t:$$$cocjl339.JSNumber})) {
                    
                    var case$405=count$402;
                    if ($$$cl1.isOfType(count$402,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return $$$cocjl339.JSString($$characterDataAbs.$native.substringData(case$403.$native,case$405));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(count$402,{t:$$$cocjl339.JSNumber})) {
                        /*Begin dynamic block*/
                        return $$$cocjl339.JSString($$characterDataAbs.$native.substringData(case$403.$native,case$405.$native));
                        /*End dynamic block*/
                    }
                }
            };$$characterDataAbs.substringData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[{$nm:'offset',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a subtstring starting at offset and through a count",59)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs','$m','substringData']};};
            $$characterDataAbs.appendData=function appendData(data$406){
                var $$characterDataAbs=this;
                
                var case$407=data$406;
                if ($$$cl1.isOfType(data$406,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.appendData(case$407.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$406,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.appendData(case$407.$native);
                    /*End dynamic block*/
                }
            };$$characterDataAbs.appendData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("append the Characters with String data",38)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs','$m','appendData']};};
            $$characterDataAbs.insertData=function insertData(offset$408,data$409){
                var $$characterDataAbs=this;
                
                var case$410=offset$408;
                if ($$$cl1.isOfType(offset$408,{t:$$$cl1.Integer})) {
                    
                    var case$411=data$409;
                    if ($$$cl1.isOfType(data$409,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$characterDataAbs.$native.insertData(case$410,case$411.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(data$409,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        $$characterDataAbs.$native.insertData(case$410,case$411.$native);
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(offset$408,{t:$$$cocjl339.JSNumber})) {
                    
                    var case$412=data$409;
                    if ($$$cl1.isOfType(data$409,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$characterDataAbs.$native.insertData(case$410.$native,case$412.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(data$409,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        $$characterDataAbs.$native.insertData(case$410.$native,case$412.$native);
                        /*End dynamic block*/
                    }
                }
            };$$characterDataAbs.insertData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("insert the Characters starting at offset using the String data",62)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs','$m','insertData']};};
            $$characterDataAbs.deleteData=function deleteData(offset$413,count$414){
                var $$characterDataAbs=this;
                
                var case$415=offset$413;
                if ($$$cl1.isOfType(offset$413,{t:$$$cl1.Integer})) {
                    
                    var case$416=count$414;
                    if ($$$cl1.isOfType(count$414,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        $$characterDataAbs.$native.deleteData(case$415,case$416);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(count$414,{t:$$$cocjl339.JSNumber})) {
                        /*Begin dynamic block*/
                        $$characterDataAbs.$native.deleteData(case$415,case$416.$native);
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(offset$413,{t:$$$cocjl339.JSNumber})) {
                    
                    var case$417=count$414;
                    if ($$$cl1.isOfType(count$414,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        $$characterDataAbs.$native.deleteData(case$415.$native,case$417);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(count$414,{t:$$$cocjl339.JSNumber})) {
                        /*Begin dynamic block*/
                        $$characterDataAbs.$native.deleteData(case$415.$native,case$417.$native);
                        /*End dynamic block*/
                    }
                }
            };$$characterDataAbs.deleteData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs','$m','deleteData']};};
            $$characterDataAbs.replaceData=function replaceData(offset$418,count$419,data$420){
                var $$characterDataAbs=this;
                
                var case$421=offset$418;
                if ($$$cl1.isOfType(offset$418,{t:$$$cl1.Integer})) {
                    
                    var case$422=count$419;
                    if ($$$cl1.isOfType(count$419,{t:$$$cl1.Integer})) {
                        
                        var case$423=data$420;
                        if ($$$cl1.isOfType(data$420,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            $$characterDataAbs.$native.replaceData(case$421,case$422,case$423.valueOf());
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(data$420,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            $$characterDataAbs.$native.replaceData(case$421,case$422,case$423.$native);
                            /*End dynamic block*/
                        }
                    }else if ($$$cl1.isOfType(count$419,{t:$$$cocjl339.JSNumber})) {
                        
                        var case$424=data$420;
                        if ($$$cl1.isOfType(data$420,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            $$characterDataAbs.$native.replaceData(case$421,case$422.$native,case$424.valueOf());
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(data$420,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            $$characterDataAbs.$native.replaceData(case$421,case$422.$native,case$424.$native);
                            /*End dynamic block*/
                        }
                    }
                }else if ($$$cl1.isOfType(offset$418,{t:$$$cocjl339.JSNumber})) {
                    
                    var case$425=count$419;
                    if ($$$cl1.isOfType(count$419,{t:$$$cl1.Integer})) {
                        
                        var case$426=data$420;
                        if ($$$cl1.isOfType(data$420,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            $$characterDataAbs.$native.replaceData(case$421.$native,case$425,case$426.valueOf());
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(data$420,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            $$characterDataAbs.$native.replaceData(case$421.$native,case$425,case$426.$native);
                            /*End dynamic block*/
                        }
                    }else if ($$$cl1.isOfType(count$419,{t:$$$cocjl339.JSNumber})) {
                        
                        var case$427=data$420;
                        if ($$$cl1.isOfType(data$420,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            $$characterDataAbs.$native.replaceData(case$421.$native,case$425.$native,case$427.valueOf());
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(data$420,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            $$characterDataAbs.$native.replaceData(case$421.$native,case$425.$native,case$427.$native);
                            /*End dynamic block*/
                        }
                    }
                }
            };$$characterDataAbs.replaceData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("replace the Characters starting at offset to count using the String data",72)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs','$m','replaceData']};};
        })(CharacterDataAbs.$$.prototype);
    }
    return CharacterDataAbs;
}
exports.$init$CharacterDataAbs=$init$CharacterDataAbs;
$init$CharacterDataAbs();
function CharacterData(n$428, $$characterData){
    $init$CharacterData();
    if ($$characterData===undefined)$$characterData=new CharacterData.$$;
    $$characterData.n$428_=n$428;
    CharacterDataAbs($$characterData);
    /*Begin dynamic block*/
    $$characterData.$native=$$characterData.n$428;/*End dynamic block*/
    return $$characterData;
}
CharacterData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CharacterDataAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a DOM CharacterData segment used by Text, Comment and Processing Instruction",76)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterData']};};
exports.CharacterData=CharacterData;
function $init$CharacterData(){
    if (CharacterData.$$===undefined){
        $$$cl1.initTypeProto(CharacterData,'com.openswimsoftware.ceylon.js.dom::CharacterData',$init$CharacterDataAbs());
        (function($$characterData){
            $$$cl1.defineAttr($$characterData,'n$428',function(){return this.n$428_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CharacterData,d:['com.openswimsoftware.ceylon.js.dom','CharacterData','$at','n']};});
        })(CharacterData.$$.prototype);
    }
    return CharacterData;
}
exports.$init$CharacterData=$init$CharacterData;
$init$CharacterData();
var $$$cocjh429=require('com/openswimsoftware/ceylon/js/html/5.0.0/com.openswimsoftware.ceylon.js.html-5.0.0');
$$$cl1.$addmod$($$$cocjh429,'com.openswimsoftware.ceylon.js.html/5.0.0');
function DocumentPosition(name$430, $$documentPosition){
    $init$DocumentPosition();
    if ($$documentPosition===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$documentPosition.name$430_=name$430;
    return $$documentPosition;
}
DocumentPosition.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],of:[{t:documentPositionContainedBy$431},{t:documentPositionContains$432},{t:documentPositionDisconnected$433},{t:documentPositionFollowing$434},{t:documentPositionImplementationSpecific$435},{t:documentPositionPreceding$436}],$an:function(){return[$$$cl1.doc($$$cl1.String("Document Positon Type",21)),$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentPosition']};};
exports.DocumentPosition=DocumentPosition;
function $init$DocumentPosition(){
    if (DocumentPosition.$$===undefined){
        $$$cl1.initTypeProto(DocumentPosition,'com.openswimsoftware.ceylon.js.dom::DocumentPosition',$$$cl1.Basic);
        (function($$documentPosition){
            $$$cl1.defineAttr($$documentPosition,'name$430',function(){return this.name$430_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DocumentPosition,d:['com.openswimsoftware.ceylon.js.dom','DocumentPosition','$at','name']};});
        })(DocumentPosition.$$.prototype);
    }
    return DocumentPosition;
}
exports.$init$DocumentPosition=$init$DocumentPosition;
$init$DocumentPosition();
function documentPositionContainedBy$431(){
    var $$documentPositionContainedBy=new documentPositionContainedBy$431.$$;
    DocumentPosition($$$cl1.String("documentPositionContainedBy",27),$$documentPositionContainedBy);
    return $$documentPositionContainedBy;
};documentPositionContainedBy$431.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentPosition},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionContainedBy']};};
function $init$documentPositionContainedBy$431(){
    if (documentPositionContainedBy$431.$$===undefined){
        $$$cl1.initTypeProto(documentPositionContainedBy$431,'com.openswimsoftware.ceylon.js.dom::documentPositionContainedBy',$init$DocumentPosition());
    }
    return documentPositionContainedBy$431;
}
exports.$init$documentPositionContainedBy$431=$init$documentPositionContainedBy$431;
$init$documentPositionContainedBy$431();
var documentPositionContainedBy$437;
function getDocumentPositionContainedBy(){
    if (documentPositionContainedBy$437===undefined){documentPositionContainedBy$437=$init$documentPositionContainedBy$431()();documentPositionContainedBy$437.$$metamodel$$=getDocumentPositionContainedBy.$$metamodel$$;}
    return documentPositionContainedBy$437;
}
exports.getDocumentPositionContainedBy=getDocumentPositionContainedBy;
getDocumentPositionContainedBy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionContainedBy$431},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionContainedBy']};};
$prop$getDocumentPositionContainedBy={get:getDocumentPositionContainedBy,$$metamodel$$:getDocumentPositionContainedBy.$$metamodel$$};
exports.$prop$getDocumentPositionContainedBy=$prop$getDocumentPositionContainedBy;
function documentPositionContains$432(){
    var $$documentPositionContains=new documentPositionContains$432.$$;
    DocumentPosition($$$cl1.String("documentPositionContains",24),$$documentPositionContains);
    return $$documentPositionContains;
};documentPositionContains$432.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentPosition},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionContains']};};
function $init$documentPositionContains$432(){
    if (documentPositionContains$432.$$===undefined){
        $$$cl1.initTypeProto(documentPositionContains$432,'com.openswimsoftware.ceylon.js.dom::documentPositionContains',$init$DocumentPosition());
    }
    return documentPositionContains$432;
}
exports.$init$documentPositionContains$432=$init$documentPositionContains$432;
$init$documentPositionContains$432();
var documentPositionContains$438;
function getDocumentPositionContains(){
    if (documentPositionContains$438===undefined){documentPositionContains$438=$init$documentPositionContains$432()();documentPositionContains$438.$$metamodel$$=getDocumentPositionContains.$$metamodel$$;}
    return documentPositionContains$438;
}
exports.getDocumentPositionContains=getDocumentPositionContains;
getDocumentPositionContains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionContains$432},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionContains']};};
$prop$getDocumentPositionContains={get:getDocumentPositionContains,$$metamodel$$:getDocumentPositionContains.$$metamodel$$};
exports.$prop$getDocumentPositionContains=$prop$getDocumentPositionContains;
function documentPositionDisconnected$433(){
    var $$documentPositionDisconnected=new documentPositionDisconnected$433.$$;
    DocumentPosition($$$cl1.String("documentPositionDisconnected",28),$$documentPositionDisconnected);
    return $$documentPositionDisconnected;
};documentPositionDisconnected$433.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentPosition},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionDisconnected']};};
function $init$documentPositionDisconnected$433(){
    if (documentPositionDisconnected$433.$$===undefined){
        $$$cl1.initTypeProto(documentPositionDisconnected$433,'com.openswimsoftware.ceylon.js.dom::documentPositionDisconnected',$init$DocumentPosition());
    }
    return documentPositionDisconnected$433;
}
exports.$init$documentPositionDisconnected$433=$init$documentPositionDisconnected$433;
$init$documentPositionDisconnected$433();
var documentPositionDisconnected$439;
function getDocumentPositionDisconnected(){
    if (documentPositionDisconnected$439===undefined){documentPositionDisconnected$439=$init$documentPositionDisconnected$433()();documentPositionDisconnected$439.$$metamodel$$=getDocumentPositionDisconnected.$$metamodel$$;}
    return documentPositionDisconnected$439;
}
exports.getDocumentPositionDisconnected=getDocumentPositionDisconnected;
getDocumentPositionDisconnected.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionDisconnected$433},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionDisconnected']};};
$prop$getDocumentPositionDisconnected={get:getDocumentPositionDisconnected,$$metamodel$$:getDocumentPositionDisconnected.$$metamodel$$};
exports.$prop$getDocumentPositionDisconnected=$prop$getDocumentPositionDisconnected;
function documentPositionFollowing$434(){
    var $$documentPositionFollowing=new documentPositionFollowing$434.$$;
    DocumentPosition($$$cl1.String("documentPositionFollowing",25),$$documentPositionFollowing);
    return $$documentPositionFollowing;
};documentPositionFollowing$434.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentPosition},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionFollowing']};};
function $init$documentPositionFollowing$434(){
    if (documentPositionFollowing$434.$$===undefined){
        $$$cl1.initTypeProto(documentPositionFollowing$434,'com.openswimsoftware.ceylon.js.dom::documentPositionFollowing',$init$DocumentPosition());
    }
    return documentPositionFollowing$434;
}
exports.$init$documentPositionFollowing$434=$init$documentPositionFollowing$434;
$init$documentPositionFollowing$434();
var documentPositionFollowing$440;
function getDocumentPositionFollowing(){
    if (documentPositionFollowing$440===undefined){documentPositionFollowing$440=$init$documentPositionFollowing$434()();documentPositionFollowing$440.$$metamodel$$=getDocumentPositionFollowing.$$metamodel$$;}
    return documentPositionFollowing$440;
}
exports.getDocumentPositionFollowing=getDocumentPositionFollowing;
getDocumentPositionFollowing.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionFollowing$434},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionFollowing']};};
$prop$getDocumentPositionFollowing={get:getDocumentPositionFollowing,$$metamodel$$:getDocumentPositionFollowing.$$metamodel$$};
exports.$prop$getDocumentPositionFollowing=$prop$getDocumentPositionFollowing;
function documentPositionImplementationSpecific$435(){
    var $$documentPositionImplementationSpecific=new documentPositionImplementationSpecific$435.$$;
    DocumentPosition($$$cl1.String("documentPositionImplementationSpecific",38),$$documentPositionImplementationSpecific);
    return $$documentPositionImplementationSpecific;
};documentPositionImplementationSpecific$435.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentPosition},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionImplementationSpecific']};};
function $init$documentPositionImplementationSpecific$435(){
    if (documentPositionImplementationSpecific$435.$$===undefined){
        $$$cl1.initTypeProto(documentPositionImplementationSpecific$435,'com.openswimsoftware.ceylon.js.dom::documentPositionImplementationSpecific',$init$DocumentPosition());
    }
    return documentPositionImplementationSpecific$435;
}
exports.$init$documentPositionImplementationSpecific$435=$init$documentPositionImplementationSpecific$435;
$init$documentPositionImplementationSpecific$435();
var documentPositionImplementationSpecific$441;
function getDocumentPositionImplementationSpecific(){
    if (documentPositionImplementationSpecific$441===undefined){documentPositionImplementationSpecific$441=$init$documentPositionImplementationSpecific$435()();documentPositionImplementationSpecific$441.$$metamodel$$=getDocumentPositionImplementationSpecific.$$metamodel$$;}
    return documentPositionImplementationSpecific$441;
}
exports.getDocumentPositionImplementationSpecific=getDocumentPositionImplementationSpecific;
getDocumentPositionImplementationSpecific.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionImplementationSpecific$435},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionImplementationSpecific']};};
$prop$getDocumentPositionImplementationSpecific={get:getDocumentPositionImplementationSpecific,$$metamodel$$:getDocumentPositionImplementationSpecific.$$metamodel$$};
exports.$prop$getDocumentPositionImplementationSpecific=$prop$getDocumentPositionImplementationSpecific;
function documentPositionPreceding$436(){
    var $$documentPositionPreceding=new documentPositionPreceding$436.$$;
    DocumentPosition($$$cl1.String("documentPositionPreceding",25),$$documentPositionPreceding);
    return $$documentPositionPreceding;
};documentPositionPreceding$436.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentPosition},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionPreceding']};};
function $init$documentPositionPreceding$436(){
    if (documentPositionPreceding$436.$$===undefined){
        $$$cl1.initTypeProto(documentPositionPreceding$436,'com.openswimsoftware.ceylon.js.dom::documentPositionPreceding',$init$DocumentPosition());
    }
    return documentPositionPreceding$436;
}
exports.$init$documentPositionPreceding$436=$init$documentPositionPreceding$436;
$init$documentPositionPreceding$436();
var documentPositionPreceding$442;
function getDocumentPositionPreceding(){
    if (documentPositionPreceding$442===undefined){documentPositionPreceding$442=$init$documentPositionPreceding$436()();documentPositionPreceding$442.$$metamodel$$=getDocumentPositionPreceding.$$metamodel$$;}
    return documentPositionPreceding$442;
}
exports.getDocumentPositionPreceding=getDocumentPositionPreceding;
getDocumentPositionPreceding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionPreceding$436},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionPreceding']};};
$prop$getDocumentPositionPreceding={get:getDocumentPositionPreceding,$$metamodel$$:getDocumentPositionPreceding.$$metamodel$$};
exports.$prop$getDocumentPositionPreceding=$prop$getDocumentPositionPreceding;
function CompatMode(name$443, $$compatMode){
    $init$CompatMode();
    if ($$compatMode===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$compatMode.name$443_=name$443;
    return $$compatMode;
}
CompatMode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],of:[{t:css1Compat$444},{t:backCompat$445}],$an:function(){return[$$$cl1.doc($$$cl1.String("Document Compatablity Mode",26)),$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','CompatMode']};};
exports.CompatMode=CompatMode;
function $init$CompatMode(){
    if (CompatMode.$$===undefined){
        $$$cl1.initTypeProto(CompatMode,'com.openswimsoftware.ceylon.js.dom::CompatMode',$$$cl1.Basic);
        (function($$compatMode){
            $$$cl1.defineAttr($$compatMode,'name$443',function(){return this.name$443_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CompatMode,d:['com.openswimsoftware.ceylon.js.dom','CompatMode','$at','name']};});
        })(CompatMode.$$.prototype);
    }
    return CompatMode;
}
exports.$init$CompatMode=$init$CompatMode;
$init$CompatMode();
function css1Compat$444(){
    var $$css1Compat=new css1Compat$444.$$;
    CompatMode($$$cl1.String("CSS1Compat",10),$$css1Compat);
    return $$css1Compat;
};css1Compat$444.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CompatMode},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','css1Compat']};};
function $init$css1Compat$444(){
    if (css1Compat$444.$$===undefined){
        $$$cl1.initTypeProto(css1Compat$444,'com.openswimsoftware.ceylon.js.dom::css1Compat',$init$CompatMode());
    }
    return css1Compat$444;
}
exports.$init$css1Compat$444=$init$css1Compat$444;
$init$css1Compat$444();
var css1Compat$446;
function getCss1Compat(){
    if (css1Compat$446===undefined){css1Compat$446=$init$css1Compat$444()();css1Compat$446.$$metamodel$$=getCss1Compat.$$metamodel$$;}
    return css1Compat$446;
}
exports.getCss1Compat=getCss1Compat;
getCss1Compat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:css1Compat$444},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','css1Compat']};};
$prop$getCss1Compat={get:getCss1Compat,$$metamodel$$:getCss1Compat.$$metamodel$$};
exports.$prop$getCss1Compat=$prop$getCss1Compat;
function backCompat$445(){
    var $$backCompat=new backCompat$445.$$;
    CompatMode($$$cl1.String("BackCompat",10),$$backCompat);
    return $$backCompat;
};backCompat$445.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CompatMode},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','backCompat']};};
function $init$backCompat$445(){
    if (backCompat$445.$$===undefined){
        $$$cl1.initTypeProto(backCompat$445,'com.openswimsoftware.ceylon.js.dom::backCompat',$init$CompatMode());
    }
    return backCompat$445;
}
exports.$init$backCompat$445=$init$backCompat$445;
$init$backCompat$445();
var backCompat$447;
function getBackCompat(){
    if (backCompat$447===undefined){backCompat$447=$init$backCompat$445()();backCompat$447.$$metamodel$$=getBackCompat.$$metamodel$$;}
    return backCompat$447;
}
exports.getBackCompat=getBackCompat;
getBackCompat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:backCompat$445},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','backCompat']};};
$prop$getBackCompat={get:getBackCompat,$$metamodel$$:getBackCompat.$$metamodel$$};
exports.$prop$getBackCompat=$prop$getBackCompat;
function DocumentDirection(name$448, $$documentDirection){
    $init$DocumentDirection();
    if ($$documentDirection===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$documentDirection.name$448_=name$448;
    return $$documentDirection;
}
DocumentDirection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],of:[{t:rtl$449},{t:ltr$450}],$an:function(){return[$$$cl1.doc($$$cl1.String("Document Direction",18)),$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentDirection']};};
exports.DocumentDirection=DocumentDirection;
function $init$DocumentDirection(){
    if (DocumentDirection.$$===undefined){
        $$$cl1.initTypeProto(DocumentDirection,'com.openswimsoftware.ceylon.js.dom::DocumentDirection',$$$cl1.Basic);
        (function($$documentDirection){
            $$$cl1.defineAttr($$documentDirection,'name$448',function(){return this.name$448_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DocumentDirection,d:['com.openswimsoftware.ceylon.js.dom','DocumentDirection','$at','name']};});
        })(DocumentDirection.$$.prototype);
    }
    return DocumentDirection;
}
exports.$init$DocumentDirection=$init$DocumentDirection;
$init$DocumentDirection();
function rtl$449(){
    var $$rtl=new rtl$449.$$;
    DocumentDirection($$$cl1.String("rtl",3),$$rtl);
    return $$rtl;
};rtl$449.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentDirection},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','rtl']};};
function $init$rtl$449(){
    if (rtl$449.$$===undefined){
        $$$cl1.initTypeProto(rtl$449,'com.openswimsoftware.ceylon.js.dom::rtl',$init$DocumentDirection());
    }
    return rtl$449;
}
exports.$init$rtl$449=$init$rtl$449;
$init$rtl$449();
var rtl$451;
function getRtl(){
    if (rtl$451===undefined){rtl$451=$init$rtl$449()();rtl$451.$$metamodel$$=getRtl.$$metamodel$$;}
    return rtl$451;
}
exports.getRtl=getRtl;
getRtl.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:rtl$449},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','rtl']};};
$prop$getRtl={get:getRtl,$$metamodel$$:getRtl.$$metamodel$$};
exports.$prop$getRtl=$prop$getRtl;
function ltr$450(){
    var $$ltr=new ltr$450.$$;
    DocumentDirection($$$cl1.String("ltr",3),$$ltr);
    return $$ltr;
};ltr$450.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentDirection},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ltr']};};
function $init$ltr$450(){
    if (ltr$450.$$===undefined){
        $$$cl1.initTypeProto(ltr$450,'com.openswimsoftware.ceylon.js.dom::ltr',$init$DocumentDirection());
    }
    return ltr$450;
}
exports.$init$ltr$450=$init$ltr$450;
$init$ltr$450();
var ltr$452;
function getLtr(){
    if (ltr$452===undefined){ltr$452=$init$ltr$450()();ltr$452.$$metamodel$$=getLtr.$$metamodel$$;}
    return ltr$452;
}
exports.getLtr=getLtr;
getLtr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ltr$450},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ltr']};};
$prop$getLtr={get:getLtr,$$metamodel$$:getLtr.$$metamodel$$};
exports.$prop$getLtr=$prop$getLtr;
function DocumentReadyState(name$453, $$documentReadyState){
    $init$DocumentReadyState();
    if ($$documentReadyState===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$documentReadyState.name$453_=name$453;
    return $$documentReadyState;
}
DocumentReadyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],of:[{t:loading$454},{t:interactive$455},{t:complete$456}],$an:function(){return[$$$cl1.doc($$$cl1.String("Document Ready State",20)),$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentReadyState']};};
exports.DocumentReadyState=DocumentReadyState;
function $init$DocumentReadyState(){
    if (DocumentReadyState.$$===undefined){
        $$$cl1.initTypeProto(DocumentReadyState,'com.openswimsoftware.ceylon.js.dom::DocumentReadyState',$$$cl1.Basic);
        (function($$documentReadyState){
            $$$cl1.defineAttr($$documentReadyState,'name$453',function(){return this.name$453_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DocumentReadyState,d:['com.openswimsoftware.ceylon.js.dom','DocumentReadyState','$at','name']};});
        })(DocumentReadyState.$$.prototype);
    }
    return DocumentReadyState;
}
exports.$init$DocumentReadyState=$init$DocumentReadyState;
$init$DocumentReadyState();
function loading$454(){
    var $$loading=new loading$454.$$;
    DocumentReadyState($$$cl1.String("loading",7),$$loading);
    return $$loading;
};loading$454.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentReadyState},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','loading']};};
function $init$loading$454(){
    if (loading$454.$$===undefined){
        $$$cl1.initTypeProto(loading$454,'com.openswimsoftware.ceylon.js.dom::loading',$init$DocumentReadyState());
    }
    return loading$454;
}
exports.$init$loading$454=$init$loading$454;
$init$loading$454();
var loading$457;
function getLoading(){
    if (loading$457===undefined){loading$457=$init$loading$454()();loading$457.$$metamodel$$=getLoading.$$metamodel$$;}
    return loading$457;
}
exports.getLoading=getLoading;
getLoading.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:loading$454},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','loading']};};
$prop$getLoading={get:getLoading,$$metamodel$$:getLoading.$$metamodel$$};
exports.$prop$getLoading=$prop$getLoading;
function interactive$455(){
    var $$interactive=new interactive$455.$$;
    DocumentReadyState($$$cl1.String("interactive",11),$$interactive);
    return $$interactive;
};interactive$455.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentReadyState},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','interactive']};};
function $init$interactive$455(){
    if (interactive$455.$$===undefined){
        $$$cl1.initTypeProto(interactive$455,'com.openswimsoftware.ceylon.js.dom::interactive',$init$DocumentReadyState());
    }
    return interactive$455;
}
exports.$init$interactive$455=$init$interactive$455;
$init$interactive$455();
var interactive$458;
function getInteractive(){
    if (interactive$458===undefined){interactive$458=$init$interactive$455()();interactive$458.$$metamodel$$=getInteractive.$$metamodel$$;}
    return interactive$458;
}
exports.getInteractive=getInteractive;
getInteractive.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:interactive$455},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','interactive']};};
$prop$getInteractive={get:getInteractive,$$metamodel$$:getInteractive.$$metamodel$$};
exports.$prop$getInteractive=$prop$getInteractive;
function complete$456(){
    var $$complete=new complete$456.$$;
    DocumentReadyState($$$cl1.String("complete",8),$$complete);
    return $$complete;
};complete$456.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentReadyState},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','complete']};};
function $init$complete$456(){
    if (complete$456.$$===undefined){
        $$$cl1.initTypeProto(complete$456,'com.openswimsoftware.ceylon.js.dom::complete',$init$DocumentReadyState());
    }
    return complete$456;
}
exports.$init$complete$456=$init$complete$456;
$init$complete$456();
var complete$459;
function getComplete(){
    if (complete$459===undefined){complete$459=$init$complete$456()();complete$459.$$metamodel$$=getComplete.$$metamodel$$;}
    return complete$459;
}
exports.getComplete=getComplete;
getComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:complete$456},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','complete']};};
$prop$getComplete={get:getComplete,$$metamodel$$:getComplete.$$metamodel$$};
exports.$prop$getComplete=$prop$getComplete;
function DocumentAbs($$documentAbs){
    $init$DocumentAbs();
    if ($$documentAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$documentAbs);
    return $$documentAbs;
}
DocumentAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs']};};
exports.DocumentAbs=DocumentAbs;
function $init$DocumentAbs(){
    if (DocumentAbs.$$===undefined){
        $$$cl1.initTypeProto(DocumentAbs,'com.openswimsoftware.ceylon.js.dom::DocumentAbs',$init$NodeAbs());
        (function($$documentAbs){
            $$documentAbs.activeElement=function activeElement(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.activeElement);
                /*End dynamic block*/
            };$$documentAbs.activeElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the currently focused element on the document",53)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','activeElement']};};
            $$documentAbs.adoptNode=function adoptNode(node$460){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return Node($$documentAbs.$native.adoptNode(node$460.$native));
                /*End dynamic block*/
            };$$documentAbs.adoptNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("adapts a node from a external document",38)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','adoptNode']};};
            $$documentAbs.createRange=function createRange(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return Range($$documentAbs.$native.createRange());
                /*End dynamic block*/
            };$$documentAbs.createRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Range},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("create a new range",18)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createRange']};};
            $$documentAbs.url=function url(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$documentAbs.$native.URL);
                /*End dynamic block*/
            };$$documentAbs.url.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the document url",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','url']};};
            $$documentAbs.createAttribute=function createAttribute(name$461){
                var $$documentAbs=this;
                
                var case$462=name$461;
                if ($$$cl1.isOfType(name$461,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Attr($$documentAbs.$native.createAttribute(case$462.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(name$461,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    return Attr($$documentAbs.$native.createAttribute(case$462.$native));
                    /*End dynamic block*/
                }
            };$$documentAbs.createAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Attr},$ps:[{$nm:'name',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("creates a new attribute",23)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createAttribute']};};
            $$documentAbs.createAttributeNS=function createAttributeNS(namespace$463,name$464){
                var $$documentAbs=this;
                
                var case$465=namespace$463;
                if ($$$cl1.isOfType(namespace$463,{t:$$$cl1.String})) {
                    
                    var case$466=name$464;
                    if ($$$cl1.isOfType(name$464,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        return Attr($$documentAbs.$native.createAttributeNS(case$465.valueOf(),case$466.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(name$464,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        return Attr($$documentAbs.$native.createAttributeNS(case$465.valueOf(),case$466.$native));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(namespace$463,{t:$$$cocjl339.JSString})) {
                    
                    var case$467=name$464;
                    if ($$$cl1.isOfType(name$464,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        return Attr($$documentAbs.$native.createAttributeNS(case$465.$native,case$467.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(name$464,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        return Attr($$documentAbs.$native.createAttributeNS(case$465.$native,case$467.$native));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(namespace$463,{t:$$$cl1.Null})) {
                    
                    var case$468=name$464;
                    if ($$$cl1.isOfType(name$464,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        return Attr($$documentAbs.$native.createAttributeNS(null,case$468.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(name$464,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        return Attr($$documentAbs.$native.createAttributeNS(null,case$468.$native));
                        /*End dynamic block*/
                    }
                }
            };$$documentAbs.createAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Attr},$ps:[{$nm:'namespace',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("creates a attribute with the given namespace",44)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createAttributeNS']};};
            $$documentAbs.createCDATASection=function createCDATASection(data$469){
                var $$documentAbs=this;
                
                var case$470=data$469;
                if ($$$cl1.isOfType(data$469,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return CDATASection($$documentAbs.$native.createCDATASection(case$470.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$469,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    return CDATASection($$documentAbs.$native.createCDATASection(case$470.$native));
                    /*End dynamic block*/
                }
            };$$documentAbs.createCDATASection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:CDATASection},$ps:[{$nm:'data',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("creates a new CDATASection",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createCDATASection']};};
            $$documentAbs.createComment=function createComment(data$471){
                var $$documentAbs=this;
                
                var case$472=data$471;
                if ($$$cl1.isOfType(data$471,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Comment($$documentAbs.$native.createComment(case$472.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$471,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    return Comment($$documentAbs.$native.createComment(case$472.$native));
                    /*End dynamic block*/
                }
            };$$documentAbs.createComment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Comment},$ps:[{$nm:'data',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("creates a new comment",21)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createComment']};};
            $$documentAbs.createDocumentFragment=function createDocumentFragment(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return DocumentFragment($$documentAbs.$native.createDocumentFragment());
                /*End dynamic block*/
            };$$documentAbs.createDocumentFragment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentFragment},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("creates a document fragment",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createDocumentFragment']};};
            $$documentAbs.createElement=function createElement(tagName$473){
                var $$documentAbs=this;
                
                var case$474=tagName$473;
                if ($$$cl1.isOfType(tagName$473,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Element($$documentAbs.$native.createElement(case$474.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(tagName$473,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    return Element($$documentAbs.$native.createElement(case$474.$native));
                    /*End dynamic block*/
                }
            };$$documentAbs.createElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'tagName',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("creates a new element",21)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createElement']};};
            $$documentAbs.createElementNS=function createElementNS(namespaceURI$475,qualifiedName$476){
                var $$documentAbs=this;
                
                var case$477=namespaceURI$475;
                if ($$$cl1.isOfType(namespaceURI$475,{t:$$$cl1.String})) {
                    
                    var case$478=qualifiedName$476;
                    if ($$$cl1.isOfType(qualifiedName$476,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        return Element($$documentAbs.$native.createElementNS(case$477.valueOf(),case$478.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(qualifiedName$476,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        return Element($$documentAbs.$native.createElementNS(case$477.valueOf(),case$478.$native));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(namespaceURI$475,{t:$$$cocjl339.JSString})) {
                    
                    var case$479=qualifiedName$476;
                    if ($$$cl1.isOfType(qualifiedName$476,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        return Element($$documentAbs.$native.createElementNS(case$477,case$479.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(qualifiedName$476,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        return Element($$documentAbs.$native.createElementNS(case$477.$native,case$479.$native));
                        /*End dynamic block*/
                    }
                }
            };$$documentAbs.createElementNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'qualifiedName',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("creates a new element in the given namespace",44)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createElementNS']};};
            $$documentAbs.createProcessingInstruction=function createProcessingInstruction(target$480,data$481){
                var $$documentAbs=this;
                
                var case$482=target$480;
                if ($$$cl1.isOfType(target$480,{t:$$$cl1.String})) {
                    
                    var case$483=data$481;
                    if ($$$cl1.isOfType(data$481,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(case$482.valueOf(),case$483.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(data$481,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(case$482.valueOf(),case$483.$native));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(target$480,{t:$$$cocjl339.JSString})) {
                    
                    var case$484=data$481;
                    if ($$$cl1.isOfType(data$481,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(case$482.$native,case$484.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(data$481,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(case$482.$native,case$484.$native));
                        /*End dynamic block*/
                    }
                }
            };$$documentAbs.createProcessingInstruction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ProcessingInstruction},$ps:[{$nm:'target',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("creates a processing instruction node",37)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createProcessingInstruction']};};
            $$documentAbs.createTextNode=function createTextNode(data$485){
                var $$documentAbs=this;
                
                var case$486=data$485;
                if ($$$cl1.isOfType(data$485,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Text($$documentAbs.$native.createTextNode(case$486.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$485,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    return Text($$documentAbs.$native.createTextNode(case$486.$native));
                    /*End dynamic block*/
                }
            };$$documentAbs.createTextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Text},$ps:[{$nm:'data',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("creates a new text node",23)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createTextNode']};};
            $$documentAbs.doctype=function doctype(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                var doctype$487=$$documentAbs.$native.doctype;
                $prop$getDoctype$487={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','doctype','$at','doctype']};}};
                $prop$getDoctype$487.get=function(){return doctype$487};
                if((tmpvar$488=doctype$487,tmpvar$489=null,(tmpvar$488.equals&&!tmpvar$488.equals(tmpvar$489))||tmpvar$488!==tmpvar$489)){
                    return DocumentType(doctype$487);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$documentAbs.doctype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:DocumentType}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the documents doctype",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','doctype']};};
            $$documentAbs.documentElement=function documentElement(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                var element$490=$$documentAbs.$native.documentElement;
                $prop$getElement$490={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','documentElement','$at','element']};}};
                $prop$getElement$490.get=function(){return element$490};
                if((tmpvar$491=element$490,tmpvar$492=null,(tmpvar$491.equals&&!tmpvar$491.equals(tmpvar$492))||tmpvar$491!==tmpvar$492)){
                    return Element(element$490);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$documentAbs.documentElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Element}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the element that is a direct child of the document",58)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','documentElement']};};
            $$documentAbs.documentURI=function documentURI(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$documentAbs.$native.documentURI);
                /*End dynamic block*/
            };$$documentAbs.documentURI.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns documents URI",21)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','documentURI']};};
            $$documentAbs.compatMode=function compatMode(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$493=$$documentAbs.$native.compatMode,tmpvar$494=$$$cl1.String("BackCompat",10),(tmpvar$493.equals&&tmpvar$493.equals(tmpvar$494))||tmpvar$493===tmpvar$494)){
                    return getBackCompat();
                }else {
                    return getCss1Compat();
                }/*End dynamic block*/
            };$$documentAbs.compatMode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:CompatMode},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the documents compatablity mode",39)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','compatMode']};};
            $$documentAbs.characterSet=function characterSet(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$documentAbs.$native.characterSet);
                /*End dynamic block*/
            };$$documentAbs.characterSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns documents CharacterSet",30)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','characterSet']};};
            $$documentAbs.getElementById=function getElementById(id$495){
                var $$documentAbs=this;
                var element$496;
                
                var case$497=id$495;
                if ($$$cl1.isOfType(id$495,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    element$496=$$documentAbs.$native.getElementById(case$497.valueOf());/*End dynamic block*/
                }else if ($$$cl1.isOfType(id$495,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    element$496=$$documentAbs.$native.getElementById(case$497.$native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if((tmpvar$498=element$496,tmpvar$499=null,(tmpvar$498.equals&&!tmpvar$498.equals(tmpvar$499))||tmpvar$498!==tmpvar$499)){
                    return Element(element$496);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$documentAbs.getElementById.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Element}]},$ps:[{$nm:'id',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns element on the document by the id",41)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getElementById']};};
            $$documentAbs.getElementsByTagName$defs$name=function(name$500){var $$documentAbs=this;
            return $$$cl1.String("*",1);};
            $$documentAbs.getElementsByTagName=function getElementsByTagName(name$500){
                var $$documentAbs=this;
                if(name$500===undefined){name$500=$$documentAbs.getElementsByTagName$defs$name(name$500);}
                var elems$501;
                
                var case$502=name$500;
                if ($$$cl1.isOfType(name$500,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    elems$501=$$documentAbs.$native.getElementsByTagName(case$502.valueOf());/*End dynamic block*/
                }else if ($$$cl1.isOfType(name$500,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    elems$501=$$documentAbs.$native.getElementsByTagName(case$502.$native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if(elems$501.instanceof((typeof HTMLCollection==='undefined'||HTMLCollection===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: HTMLCollection")),'341:26-341:39','document.ceylon'):HTMLCollection))){
                    return HTMLCollection(elems$501);
                }else {
                    return NodeList(elems$501);
                }/*End dynamic block*/
            };$$documentAbs.getElementsByTagName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:HTMLCollection},{t:NodeList}]},$ps:[{$nm:'name',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a collection of elements on the document by the tagname",63)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getElementsByTagName']};};
            $$documentAbs.getElementsByTagNameNS$defs$name=function(namespace$503,name$504){var $$documentAbs=this;
            return $$$cl1.String("*",1);};
            $$documentAbs.getElementsByTagNameNS=function getElementsByTagNameNS(namespace$503,name$504){
                var $$documentAbs=this;
                if(name$504===undefined){name$504=$$documentAbs.getElementsByTagNameNS$defs$name(namespace$503,name$504);}
                var elems$505;
                
                var case$506=namespace$503;
                if ($$$cl1.isOfType(namespace$503,{t:$$$cl1.String})) {
                    
                    var case$507=name$504;
                    if ($$$cl1.isOfType(name$504,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        elems$505=$$documentAbs.$native.getElementsByTagNameNS(case$506.valueOf(),case$507.valueOf());/*End dynamic block*/
                    }else if ($$$cl1.isOfType(name$504,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        elems$505=$$documentAbs.$native.getElementsByTagNameNS(case$506.valueOf(),case$507.$native);/*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(namespace$503,{t:$$$cocjl339.JSString})) {
                    
                    var case$508=name$504;
                    if ($$$cl1.isOfType(name$504,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        elems$505=$$documentAbs.$native.getElementsByTagNameNS(case$506,case$508.valueOf());/*End dynamic block*/
                    }else if ($$$cl1.isOfType(name$504,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        elems$505=$$documentAbs.$native.getElementsByTagNameNS(case$506.$native,case$508.$native);/*End dynamic block*/
                    }
                }
                /*Begin dynamic block*/
                if(elems$505.instanceof((typeof HTMLCollection==='undefined'||HTMLCollection===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: HTMLCollection")),'380:26-380:39','document.ceylon'):HTMLCollection))){
                    return HTMLCollection(elems$505);
                }else {
                    return NodeList(elems$505);
                }/*End dynamic block*/
            };$$documentAbs.getElementsByTagNameNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:HTMLCollection},{t:NodeList}]},$ps:[{$nm:'namespace',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a collection of elements on the document by the tagname in a namespace",78)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getElementsByTagNameNS']};};
            $$documentAbs.getElementsByClassName=function getElementsByClassName(names$509){
                var $$documentAbs=this;
                
                var case$510=names$509;
                if ($$$cl1.isOfType(names$509,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return HTMLCollection($$documentAbs.$native.getElementsByTagNameNS(case$510.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(names$509,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    return HTMLCollection($$documentAbs.$native.getElementsByTagNameNS(case$510.$native));
                    /*End dynamic block*/
                }
            };$$documentAbs.getElementsByClassName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'names',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a collection of elements on the document by the class name",66)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getElementsByClassName']};};
            $$documentAbs.implementation=function implementation(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return DOMImplementation($$documentAbs.$native.implementation);
                /*End dynamic block*/
            };$$documentAbs.implementation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DOMImplementation},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the DOM implementation associated with the document",59)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','implementation']};};
            $$documentAbs.importNode$defs$deep=function(externalNode$511,deep$512){var $$documentAbs=this;
            return true;};
            $$documentAbs.importNode=function importNode(externalNode$511,deep$512){
                var $$documentAbs=this;
                if(deep$512===undefined){deep$512=$$documentAbs.importNode$defs$deep(externalNode$511,deep$512);}
                /*Begin dynamic block*/
                return Node($$documentAbs.$native.importNode(externalNode$511,deep$512));
                /*End dynamic block*/
            };$$documentAbs.importNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'externalNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'deep',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("creates a copy of a node from another document that can be inserted into the current document",93)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','importNode']};};
            $$documentAbs.createNodeIterator$defs$whatToShow=function(root$513,whatToShow$514,filter$515){var $$documentAbs=this;
            return null;};
            $$documentAbs.createNodeIterator$defs$filter=function(root$513,whatToShow$514,filter$515){var $$documentAbs=this;
            return null;};
            $$documentAbs.createNodeIterator=function createNodeIterator(root$513,whatToShow$514,filter$515){
                var $$documentAbs=this;
                if(whatToShow$514===undefined){whatToShow$514=$$documentAbs.createNodeIterator$defs$whatToShow(root$513,whatToShow$514,filter$515);}
                if(filter$515===undefined){filter$515=$$documentAbs.createNodeIterator$defs$filter(root$513,whatToShow$514,filter$515);}
                /*Begin dynamic block*/
                return NodeIterator($$documentAbs.$native.createNodeIterator(root$513,whatToShow$514,filter$515));
                /*End dynamic block*/
            };$$documentAbs.createNodeIterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeIterator},$ps:[{$nm:'root',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'whatToShow',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:NodeFilter}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a new node iterator the document",40)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createNodeIterator']};};
            $$documentAbs.createTreeWalker$defs$whatToShow=function(root$516,whatToShow$517,filter$518){var $$documentAbs=this;
            return null;};
            $$documentAbs.createTreeWalker$defs$filter=function(root$516,whatToShow$517,filter$518){var $$documentAbs=this;
            return null;};
            $$documentAbs.createTreeWalker=function createTreeWalker(root$516,whatToShow$517,filter$518){
                var $$documentAbs=this;
                if(whatToShow$517===undefined){whatToShow$517=$$documentAbs.createTreeWalker$defs$whatToShow(root$516,whatToShow$517,filter$518);}
                if(filter$518===undefined){filter$518=$$documentAbs.createTreeWalker$defs$filter(root$516,whatToShow$517,filter$518);}
                /*Begin dynamic block*/
                return TreeWalker($$documentAbs.$native.createTreeWalker(root$516,whatToShow$517,filter$518));
                /*End dynamic block*/
            };$$documentAbs.createTreeWalker.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:TreeWalker},$ps:[{$nm:'root',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'whatToShow',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:NodeFilter}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a new tree walker for walking the document",50)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createTreeWalker']};};
            $$documentAbs.anchors=function anchors(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return NodeList($$documentAbs.$native.anchors);
                /*End dynamic block*/
            };$$documentAbs.anchors.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeList},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a collection of all anchors in the document",51)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','anchors']};};
            $$documentAbs.getAsync=function getAsync(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                if($$documentAbs.$native.async){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$documentAbs.getAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("gets whether a document.load call will be made asynchronously",61)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getAsync']};};
            $$documentAbs.setAsync=function setAsync(async$519){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                $$documentAbs.$native.async=async$519;
                /*End dynamic block*/
            };$$documentAbs.setAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'async',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("sets whether a document.load call should be made asynchronously",63)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','setAsync']};};
            $$documentAbs.body=function body(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return Node($$documentAbs.$native.body);
                /*End dynamic block*/
            };$$documentAbs.body.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the body node on the document",37)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','body']};};
            $$documentAbs.getCookie=function getCookie(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$documentAbs.$native.cookie);
                /*End dynamic block*/
            };$$documentAbs.getCookie.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns cookies associated with the document in the form of a comma sepearted list of key=value pairs",101)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getCookie']};};
            $$documentAbs.setCookie=function setCookie(cookie$520){
                var $$documentAbs=this;
                
                var case$521=cookie$520;
                if ($$$cl1.isOfType(cookie$520,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.cookie=case$521.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(cookie$520,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.cookie=case$521.$native;
                    /*End dynamic block*/
                }
            };$$documentAbs.setCookie.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'cookie',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set cookies associated with the document in the form of a comma sepearted list of key=value pairs",97)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','setCookie']};};
            $$documentAbs.defaultView=function defaultView(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                var view$522=$$documentAbs.$native.defaultView;
                $prop$getView$522={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','defaultView','$at','view']};}};
                $prop$getView$522.get=function(){return view$522};
                if((tmpvar$523=view$522,tmpvar$524=null,(tmpvar$523.equals&&!tmpvar$523.equals(tmpvar$524))||tmpvar$523!==tmpvar$524)){
                    return $$$cocjh429.Window(view$522);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$documentAbs.defaultView.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjh429.Window}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the browser window object associated with the document",62)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','defaultView']};};
            $$documentAbs.getDesignMode=function getDesignMode(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$525=$$documentAbs.$native.designMode,tmpvar$526=$$$cl1.String("on",2),(tmpvar$525.equals&&tmpvar$525.equals(tmpvar$526))||tmpvar$525===tmpvar$526)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$documentAbs.getDesignMode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns if the documents design mode is on",42)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getDesignMode']};};
            $$documentAbs.getDir=function getDir(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$527=$$documentAbs.$native.dir,tmpvar$528=$$$cl1.String("ltr",3),(tmpvar$527.equals&&tmpvar$527.equals(tmpvar$528))||tmpvar$527===tmpvar$528)){
                    return getLtr();
                }else {
                    return getRtl();
                }/*End dynamic block*/
            };$$documentAbs.getDir.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentDirection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("get the document direction",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getDir']};};
            $$documentAbs.setDir=function setDir(dir$529){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                $$documentAbs.$native.dir=dir$529.string.valueOf();
                /*End dynamic block*/
            };$$documentAbs.setDir.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'dir',$mt:'prm',$t:{t:DocumentDirection},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the document direction",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','setDir']};};
            $$documentAbs.getDomain=function getDomain(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$documentAbs.$native.domain);
                /*End dynamic block*/
            };$$documentAbs.getDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("get the documents domain",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getDomain']};};
            $$documentAbs.setDomain=function setDomain(domain$530){
                var $$documentAbs=this;
                
                var case$531=domain$530;
                if ($$$cl1.isOfType(domain$530,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.domain=case$531.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(domain$530,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.domain=case$531.$native;
                    /*End dynamic block*/
                }
            };$$documentAbs.setDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'domain',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the domain string of the document",37)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','setDomain']};};
            $$documentAbs.forms=function forms(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return HTMLCollection($$documentAbs.$native.forms);
                /*End dynamic block*/
            };$$documentAbs.forms.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a collection of all form elements in the document",57)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','forms']};};
            $$documentAbs.head=function head(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.head);
                /*End dynamic block*/
            };$$documentAbs.head.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the document head element",33)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','head']};};
            $$documentAbs.images=function images(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return HTMLCollection($$documentAbs.$native.images);
                /*End dynamic block*/
            };$$documentAbs.images.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a collection of all image elements in the document",58)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','images']};};
            $$documentAbs.lastModified=function lastModified(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$documentAbs.$native.lastModified);
                /*End dynamic block*/
            };$$documentAbs.lastModified.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the date the document was last modified as a string",59)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','lastModified']};};
            $$documentAbs.lastStyleSheetSet=function lastStyleSheetSet(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$documentAbs.$native.lastStyleSheetSet);
                /*End dynamic block*/
            };$$documentAbs.lastStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the name of the last enabled StyleSheet Set for the document",68)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','lastStyleSheetSet']};};
            $$documentAbs.links=function links(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return HTMLCollection($$documentAbs.$native.links);
                /*End dynamic block*/
            };$$documentAbs.links.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns all of the link elements in the document",48)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','links']};};
            $$documentAbs.location=function location(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cocjh429.Location($$documentAbs.$native.location);
                /*End dynamic block*/
            };$$documentAbs.location.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjh429.Location},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns location information about the URL of the document",58)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','location']};};
            $$documentAbs.plugins=function plugins(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return HTMLCollection($$documentAbs.$native.plugins);
                /*End dynamic block*/
            };$$documentAbs.plugins.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns collection of all the plugin elements on the document",61)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','plugins']};};
            $$documentAbs.preferredStyleSheetSet=function preferredStyleSheetSet(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                var preferred$532=(typeof document==='undefined'||document===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: document")),'607:23-607:30','document.ceylon'):document).preferredStyleSheetSet;
                $prop$getPreferred$532={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','preferredStyleSheetSet','$at','preferred']};}};
                $prop$getPreferred$532.get=function(){return preferred$532};
                if((tmpvar$533=preferred$532,tmpvar$534=null,(tmpvar$533.equals&&!tmpvar$533.equals(tmpvar$534))||tmpvar$533!==tmpvar$534)){
                    return $$$cocjl339.JSString(preferred$532);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$documentAbs.preferredStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the prefurred name of the StyleSheet set on the document",64)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','preferredStyleSheetSet']};};
            $$documentAbs.readyState=function readyState(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                var readyState$535=$$documentAbs.$native.readyState;
                $prop$getReadyState$535={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','readyState','$at','readyState']};}};
                $prop$getReadyState$535.get=function(){return readyState$535};
                if((tmpvar$536=readyState$535,tmpvar$537=$$$cl1.String("loading",7),(tmpvar$536.equals&&tmpvar$536.equals(tmpvar$537))||tmpvar$536===tmpvar$537)){
                    return getLoading();
                }else {
                    if((tmpvar$538=readyState$535,tmpvar$539=$$$cl1.String("interactive",11),(tmpvar$538.equals&&tmpvar$538.equals(tmpvar$539))||tmpvar$538===tmpvar$539)){
                        return getInteractive();
                    }else {
                        return getComplete();
                    }
                }/*End dynamic block*/
            };$$documentAbs.readyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentReadyState},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the current ready state of the document",47)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','readyState']};};
            $$documentAbs.referrer=function referrer(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$documentAbs.$native.referrer);
                /*End dynamic block*/
            };$$documentAbs.referrer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns uri of the page which linked to this document",53)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','referrer']};};
            $$documentAbs.scripts=function scripts(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return HTMLCollection($$documentAbs.$native.scripts);
                /*End dynamic block*/
            };$$documentAbs.scripts.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a collection of all the script elements in the document",63)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','scripts']};};
            $$documentAbs.selectedStyleSheetSet=function selectedStyleSheetSet(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$documentAbs.$native.selectedStyleSheetSet);
                /*End dynamic block*/
            };$$documentAbs.selectedStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the name of the StyleSheet set that is currently in use on the document",79)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','selectedStyleSheetSet']};};
            $$documentAbs.setSelectedStyleSheetSet=function setSelectedStyleSheetSet(sheet$540){
                var $$documentAbs=this;
                
                var case$541=sheet$540;
                if ($$$cl1.isOfType(sheet$540,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.selectedStyleSheetSet=case$541.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(sheet$540,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.selectedStyleSheetSet=case$541.$native;
                    /*End dynamic block*/
                }
            };$$documentAbs.setSelectedStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'sheet',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a linked to or embeded in the document by its name",58)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','setSelectedStyleSheetSet']};};
            $$documentAbs.styleSheets=function styleSheets(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return StyleSheetList$stylesheets($$documentAbs.$native.styleSheets);
                /*End dynamic block*/
            };$$documentAbs.styleSheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:StyleSheetList$stylesheets},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns collection of StyleSheets linked to or embeded in the document",70)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','styleSheets']};};
            $$documentAbs.styleSheetSets=function styleSheetSets(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSArray($$documentAbs.$native.styleSheetSets);
                /*End dynamic block*/
            };$$documentAbs.styleSheetSets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSArray},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Array of Strings naming the avaiable StyleSheets",56)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','styleSheetSets']};};
            $$documentAbs.title=function title(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$documentAbs.$native.title);
                /*End dynamic block*/
            };$$documentAbs.title.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the documents title",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','title']};};
            $$documentAbs.open=function open(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                $$documentAbs.$native.open();
                /*End dynamic block*/
            };$$documentAbs.open.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("opens a document for writing",28)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','open']};};
            $$documentAbs.close=function close(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                $$documentAbs.$native.close();
                /*End dynamic block*/
            };$$documentAbs.close.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("finishes writing to a document opened with Document.open()",58)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','close']};};
            $$documentAbs.elementFromPoint=function elementFromPoint(x$542,y$543){
                var $$documentAbs=this;
                
                var case$544=x$542;
                if ($$$cl1.isOfType(x$542,{t:$$$cl1.Integer})) {
                    
                    var case$545=y$543;
                    if ($$$cl1.isOfType(y$543,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return Element($$documentAbs.$native.elementFromPoint(case$544,case$545));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(y$543,{t:$$$cocjl339.JSNumber})) {
                        /*Begin dynamic block*/
                        return Element($$documentAbs.$native.elementFromPoint(case$544,case$545.$native));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(x$542,{t:$$$cocjl339.JSNumber})) {
                    
                    var case$546=y$543;
                    if ($$$cl1.isOfType(y$543,{t:$$$cl1.Integer})) {
                        /*Begin dynamic block*/
                        return Element($$documentAbs.$native.elementFromPoint(case$544.$native,case$546));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(y$543,{t:$$$cocjl339.JSNumber})) {
                        /*Begin dynamic block*/
                        return Element($$documentAbs.$native.elementFromPoint(case$544.$native,case$546.$native));
                        /*End dynamic block*/
                    }
                }
            };$$documentAbs.elementFromPoint.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'x',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns element at the given point coordinates",46)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','elementFromPoint']};};
            $$documentAbs.getElementsByName=function getElementsByName(name$547){
                var $$documentAbs=this;
                
                var case$548=name$547;
                if ($$$cl1.isOfType(name$547,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return HTMLCollection($$documentAbs.$native.getElementsByName(case$548.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(name$547,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    return HTMLCollection($$documentAbs.$native.getElementsByName(case$548.$native));
                    /*End dynamic block*/
                }
            };$$documentAbs.getElementsByName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'name',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a list of elements in the document with the given name",62)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getElementsByName']};};
            $$documentAbs.hasFocus=function hasFocus(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                if($$documentAbs.$native.hasFocus()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$documentAbs.hasFocus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns whether the document or any element in the document currently has focus",79)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','hasFocus']};};
            $$documentAbs.querySelector=function querySelector(selectors$549){
                var $$documentAbs=this;
                
                var case$550=selectors$549;
                if ($$$cl1.isOfType(selectors$549,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Element($$documentAbs.$native.querySelector(case$550.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(selectors$549,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    return Element($$documentAbs.$native.querySelector(case$550.$native));
                    /*End dynamic block*/
                }
            };$$documentAbs.querySelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'selectors',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the first element which matches the selectors",53)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','querySelector']};};
            $$documentAbs.querySelectorAll=function querySelectorAll(selectors$551){
                var $$documentAbs=this;
                
                var case$552=selectors$551;
                if ($$$cl1.isOfType(selectors$551,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return NodeList($$documentAbs.$native.querySelectorAll(case$552.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(selectors$551,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    return NodeList($$documentAbs.$native.querySelectorAll(case$552.$native));
                    /*End dynamic block*/
                }
            };$$documentAbs.querySelectorAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeList},$ps:[{$nm:'selectors',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a list of all elements within the document",50)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','querySelectorAll']};};
            $$documentAbs.releaseCapture=function releaseCapture(){
                var $$documentAbs=this;
                /*Begin dynamic block*/
                $$documentAbs.$native.releaseCapture();
                /*End dynamic block*/
            };$$documentAbs.releaseCapture.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("release current mouse capture",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','releaseCapture']};};
            $$documentAbs.write=function write(line$553){
                var $$documentAbs=this;
                
                var case$554=line$553;
                if ($$$cl1.isOfType(line$553,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.write(case$554.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(line$553,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.write(case$554.$native);
                    /*End dynamic block*/
                }
            };$$documentAbs.write.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'line',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("write the string to the document",32)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','write']};};
            $$documentAbs.writeln=function writeln(line$555){
                var $$documentAbs=this;
                
                var case$556=line$555;
                if ($$$cl1.isOfType(line$555,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.writeln(case$556.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(line$555,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$documentAbs.$native.writeln(case$556.$native);
                    /*End dynamic block*/
                }
            };$$documentAbs.writeln.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'line',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("write the string to the document as a line",42)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','writeln']};};
        })(DocumentAbs.$$.prototype);
    }
    return DocumentAbs;
}
exports.$init$DocumentAbs=$init$DocumentAbs;
$init$DocumentAbs();
function Document(n$557, $$document){
    $init$Document();
    if ($$document===undefined)$$document=new Document.$$;
    $$document.n$557_=n$557;
    DocumentAbs($$document);
    $$document.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Document,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','Document','$at','native']};}};
    /*Begin dynamic block*/
    $$document.$native=$$document.n$557;/*End dynamic block*/
    return $$document;
}
Document.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a DOM Document",14)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','Document']};};
exports.Document=Document;
function $init$Document(){
    if (Document.$$===undefined){
        $$$cl1.initTypeProto(Document,'com.openswimsoftware.ceylon.js.dom::Document',$init$DocumentAbs());
        (function($$document){
            $$$cl1.defineAttr($$document,'n$557',function(){return this.n$557_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Document,d:['com.openswimsoftware.ceylon.js.dom','Document','$at','n']};});
        })(Document.$$.prototype);
    }
    return Document;
}
exports.$init$Document=$init$Document;
$init$Document();
function DocumentTypeAbs($$documentTypeAbs){
    $init$DocumentTypeAbs();
    if ($$documentTypeAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$documentTypeAbs);
    return $$documentTypeAbs;
}
DocumentTypeAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentTypeAbs']};};
exports.DocumentTypeAbs=DocumentTypeAbs;
function $init$DocumentTypeAbs(){
    if (DocumentTypeAbs.$$===undefined){
        $$$cl1.initTypeProto(DocumentTypeAbs,'com.openswimsoftware.ceylon.js.dom::DocumentTypeAbs',$init$NodeAbs());
        (function($$documentTypeAbs){
            $$documentTypeAbs.name=function name(){
                var $$documentTypeAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$documentTypeAbs.$native.name);
                /*End dynamic block*/
            };$$documentTypeAbs.name.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the document type name",30)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentTypeAbs','$m','name']};};
            $$documentTypeAbs.publicId=function publicId(){
                var $$documentTypeAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$documentTypeAbs.$native.publicId);
                /*End dynamic block*/
            };$$documentTypeAbs.publicId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the document types public id string",43)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentTypeAbs','$m','publicId']};};
            $$documentTypeAbs.systemId=function systemId(){
                var $$documentTypeAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$documentTypeAbs.$native.systemId);
                /*End dynamic block*/
            };$$documentTypeAbs.systemId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the document types system id string",43)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentTypeAbs','$m','systemId']};};
        })(DocumentTypeAbs.$$.prototype);
    }
    return DocumentTypeAbs;
}
exports.$init$DocumentTypeAbs=$init$DocumentTypeAbs;
$init$DocumentTypeAbs();
function DocumentType(n$558, $$documentType){
    $init$DocumentType();
    if ($$documentType===undefined)$$documentType=new DocumentType.$$;
    $$documentType.n$558_=n$558;
    DocumentTypeAbs($$documentType);
    $$documentType.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DocumentType,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentType','$at','native']};}};
    /*Begin dynamic block*/
    $$documentType.$native=$$documentType.n$558;/*End dynamic block*/
    return $$documentType;
}
DocumentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentTypeAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a DocumentType",14)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentType']};};
exports.DocumentType=DocumentType;
function $init$DocumentType(){
    if (DocumentType.$$===undefined){
        $$$cl1.initTypeProto(DocumentType,'com.openswimsoftware.ceylon.js.dom::DocumentType',$init$DocumentTypeAbs());
        (function($$documentType){
            $$$cl1.defineAttr($$documentType,'n$558',function(){return this.n$558_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DocumentType,d:['com.openswimsoftware.ceylon.js.dom','DocumentType','$at','n']};});
        })(DocumentType.$$.prototype);
    }
    return DocumentType;
}
exports.$init$DocumentType=$init$DocumentType;
$init$DocumentType();
function DOMImplementationAbs($$dOMImplementationAbs){
    $init$DOMImplementationAbs();
    if ($$dOMImplementationAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$dOMImplementationAbs);
    return $$dOMImplementationAbs;
}
DOMImplementationAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','DOMImplementationAbs']};};
exports.DOMImplementationAbs=DOMImplementationAbs;
function $init$DOMImplementationAbs(){
    if (DOMImplementationAbs.$$===undefined){
        $$$cl1.initTypeProto(DOMImplementationAbs,'com.openswimsoftware.ceylon.js.dom::DOMImplementationAbs',$$$cocjl339.JSObjectAbs);
        (function($$dOMImplementationAbs){
            $$dOMImplementationAbs.createDocument$defs$qualifiedName=function(namespace$559,qualifiedName$560,doctype$561){var $$dOMImplementationAbs=this;
            return $$$cl1.String("",0);};
            $$dOMImplementationAbs.createDocument$defs$doctype=function(namespace$559,qualifiedName$560,doctype$561){var $$dOMImplementationAbs=this;
            return null;};
            $$dOMImplementationAbs.createDocument=function createDocument(namespace$559,qualifiedName$560,doctype$561){
                var $$dOMImplementationAbs=this;
                if(qualifiedName$560===undefined){qualifiedName$560=$$dOMImplementationAbs.createDocument$defs$qualifiedName(namespace$559,qualifiedName$560,doctype$561);}
                if(doctype$561===undefined){doctype$561=$$dOMImplementationAbs.createDocument$defs$doctype(namespace$559,qualifiedName$560,doctype$561);}
                
                var case$562=namespace$559;
                if ($$$cl1.isOfType(namespace$559,{t:$$$cl1.String})) {
                    
                    var case$563=qualifiedName$560;
                    if ($$$cl1.isOfType(qualifiedName$560,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        return Document($$dOMImplementationAbs.$native.createDocument(case$562.valueOf(),case$563.valueOf(),(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'12:69-12:70','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(qualifiedName$560,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        return Document($$dOMImplementationAbs.$native.createDocument(case$562.valueOf(),case$563.$native,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'17:76-17:77','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(namespace$559,{t:$$$cocjl339.JSString})) {
                    
                    var case$564=qualifiedName$560;
                    if ($$$cl1.isOfType(qualifiedName$560,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        return Document($$dOMImplementationAbs.$native.createDocument(case$562.$native,case$564.valueOf(),(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'25:76-25:77','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(qualifiedName$560,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        return Document($$dOMImplementationAbs.$native.createDocument(case$562.$native,case$564.$native,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'30:83-30:84','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(namespace$559,{t:$$$cl1.Null})) {
                    
                    var case$565=qualifiedName$560;
                    if ($$$cl1.isOfType(qualifiedName$560,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        return Document($$dOMImplementationAbs.$native.createDocument(null,case$565.valueOf(),(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'38:64-38:65','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(qualifiedName$560,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        return Document($$dOMImplementationAbs.$native.createDocument(null,case$565.$native,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'43:71-43:72','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }
                }
            };$$dOMImplementationAbs.createDocument.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Document},$ps:[{$nm:'namespace',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]}]},$an:function(){return[];}},{$nm:'qualifiedName',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'doctype',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:DocumentType}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a new Document",22)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DOMImplementationAbs','$m','createDocument']};};
            $$dOMImplementationAbs.createDocumentType=function createDocumentType(qualifiedName$566,publicId$567,systemId$568){
                var $$dOMImplementationAbs=this;
                
                var case$569=qualifiedName$566;
                if ($$$cl1.isOfType(qualifiedName$566,{t:$$$cl1.String})) {
                    
                    var case$570=publicId$567;
                    if ($$$cl1.isOfType(publicId$567,{t:$$$cl1.String})) {
                        
                        var case$571=systemId$568;
                        if ($$$cl1.isOfType(systemId$568,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            return DocumentType($$dOMImplementationAbs.$native.createDocumentType(case$569.valueOf(),case$570.valueOf(),case$571.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(systemId$568,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            return DocumentType($$dOMImplementationAbs.$native.createDocumentType(case$569.valueOf(),case$570.valueOf(),case$571.$native));
                            /*End dynamic block*/
                        }
                    }else if ($$$cl1.isOfType(publicId$567,{t:$$$cocjl339.JSString})) {
                        
                        var case$572=systemId$568;
                        if ($$$cl1.isOfType(systemId$568,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            return DocumentType($$dOMImplementationAbs.$native.createDocumentType(case$569.valueOf(),case$570.$native,case$572.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(systemId$568,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            return DocumentType($$dOMImplementationAbs.$native.createDocumentType(case$569.valueOf(),case$570.$native,case$572.$native));
                            /*End dynamic block*/
                        }
                    }
                }else if ($$$cl1.isOfType(qualifiedName$566,{t:$$$cocjl339.JSString})) {
                    
                    var case$573=publicId$567;
                    if ($$$cl1.isOfType(publicId$567,{t:$$$cl1.String})) {
                        
                        var case$574=systemId$568;
                        if ($$$cl1.isOfType(systemId$568,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            return DocumentType($$dOMImplementationAbs.$native.createDocumentType(case$569.$native,case$573.valueOf(),case$574.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(systemId$568,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            return DocumentType($$dOMImplementationAbs.$native.createDocumentType(case$569.$native,case$573.valueOf(),case$574.$native));
                            /*End dynamic block*/
                        }
                    }else if ($$$cl1.isOfType(publicId$567,{t:$$$cocjl339.JSString})) {
                        
                        var case$575=systemId$568;
                        if ($$$cl1.isOfType(systemId$568,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            return DocumentType($$dOMImplementationAbs.$native.createDocumentType(case$569.$native,case$573.$native,case$575.valueOf()));
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(systemId$568,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            return DocumentType($$dOMImplementationAbs.$native.createDocumentType(case$569.$native,case$573.$native,case$575.$native));
                            /*End dynamic block*/
                        }
                    }
                }
            };$$dOMImplementationAbs.createDocumentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentType},$ps:[{$nm:'qualifiedName',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'publicId',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'systemId',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a new DocumentType",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DOMImplementationAbs','$m','createDocumentType']};};
            $$dOMImplementationAbs.hasFeature$defs$version=function(feature$576,version$577){var $$dOMImplementationAbs=this;
            return $$$cl1.String("",0);};
            $$dOMImplementationAbs.hasFeature=function hasFeature(feature$576,version$577){
                var $$dOMImplementationAbs=this;
                if(version$577===undefined){version$577=$$dOMImplementationAbs.hasFeature$defs$version(feature$576,version$577);}
                var has$578;
                
                var case$579=feature$576;
                if ($$$cl1.isOfType(feature$576,{t:$$$cl1.String})) {
                    
                    var case$580=version$577;
                    if ($$$cl1.isOfType(version$577,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        has$578=$$dOMImplementationAbs.$native.hasFeature(case$579.valueOf(),case$580.valueOf());/*End dynamic block*/
                    }else if ($$$cl1.isOfType(version$577,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        has$578=$$dOMImplementationAbs.$native.hasFeature(case$579.valueOf(),case$580.$native);/*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(feature$576,{t:$$$cocjl339.JSString})) {
                    
                    var case$581=version$577;
                    if ($$$cl1.isOfType(version$577,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        has$578=$$dOMImplementationAbs.$native.hasFeature(case$579.$native,case$581.valueOf());/*End dynamic block*/
                    }else if ($$$cl1.isOfType(version$577,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        has$578=$$dOMImplementationAbs.$native.hasFeature(case$579.$native,case$581.$native);/*End dynamic block*/
                    }
                }
                /*Begin dynamic block*/
                if(has$578){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$dOMImplementationAbs.hasFeature.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'feature',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'version',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns if the DOM has the given feature at the specified or greater version",76)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DOMImplementationAbs','$m','hasFeature']};};
        })(DOMImplementationAbs.$$.prototype);
    }
    return DOMImplementationAbs;
}
exports.$init$DOMImplementationAbs=$init$DOMImplementationAbs;
$init$DOMImplementationAbs();
function DOMImplementation(n$582, $$dOMImplementation){
    $init$DOMImplementation();
    if ($$dOMImplementation===undefined)$$dOMImplementation=new DOMImplementation.$$;
    $$dOMImplementation.n$582_=n$582;
    DOMImplementationAbs($$dOMImplementation);
    $$dOMImplementation.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DOMImplementation,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','DOMImplementation','$at','native']};}};
    /*Begin dynamic block*/
    $$dOMImplementation.$native=$$dOMImplementation.n$582;/*End dynamic block*/
    return $$dOMImplementation;
}
DOMImplementation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DOMImplementationAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a DOMImplementation",19)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DOMImplementation']};};
exports.DOMImplementation=DOMImplementation;
function $init$DOMImplementation(){
    if (DOMImplementation.$$===undefined){
        $$$cl1.initTypeProto(DOMImplementation,'com.openswimsoftware.ceylon.js.dom::DOMImplementation',$init$DOMImplementationAbs());
        (function($$dOMImplementation){
            $$$cl1.defineAttr($$dOMImplementation,'n$582',function(){return this.n$582_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DOMImplementation,d:['com.openswimsoftware.ceylon.js.dom','DOMImplementation','$at','n']};});
        })(DOMImplementation.$$.prototype);
    }
    return DOMImplementation;
}
exports.$init$DOMImplementation=$init$DOMImplementation;
$init$DOMImplementation();
function ElementAbs($$elementAbs){
    $init$ElementAbs();
    if ($$elementAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$elementAbs);
    return $$elementAbs;
}
ElementAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs']};};
exports.ElementAbs=ElementAbs;
function $init$ElementAbs(){
    if (ElementAbs.$$===undefined){
        $$$cl1.initTypeProto(ElementAbs,'com.openswimsoftware.ceylon.js.dom::ElementAbs',$init$NodeAbs());
        (function($$elementAbs){
            $$elementAbs.getAttribute=function getAttribute(attributeName$583){
                var $$elementAbs=this;
                var attr$584;
                
                var case$585=attributeName$583;
                if ($$$cl1.isOfType(attributeName$583,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    attr$584=$$elementAbs.$native.getAttribute(case$585.valueOf());/*End dynamic block*/
                }else if ($$$cl1.isOfType(attributeName$583,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    attr$584=$$elementAbs.$native.getAttribute(case$585.$native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if(((tmpvar$586=attr$584,tmpvar$587=null,(tmpvar$586.equals&&!tmpvar$586.equals(tmpvar$587))||tmpvar$586!==tmpvar$587)||(tmpvar$588=attr$584,tmpvar$589=$$$cl1.String("",0),(tmpvar$588.equals&&!tmpvar$588.equals(tmpvar$589))||tmpvar$588!==tmpvar$589))){
                    return $$$cocjl339.JSString(attr$584);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$elementAbs.getAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("get the value of the attribute on this element",46)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','getAttribute']};};
            $$elementAbs.getAttributeNS=function getAttributeNS(namespace$590,attributeName$591){
                var $$elementAbs=this;
                var attr$592;
                
                var case$593=namespace$590;
                if ($$$cl1.isOfType(namespace$590,{t:$$$cl1.String})) {
                    
                    var case$594=attributeName$591;
                    if ($$$cl1.isOfType(attributeName$591,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        attr$592=$$elementAbs.$native.getAttributeNS(case$593.valueOf(),case$594.valueOf());/*End dynamic block*/
                    }else if ($$$cl1.isOfType(attributeName$591,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        attr$592=$$elementAbs.$native.getAttributeNS(case$593.valueOf(),case$594.$native);/*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(namespace$590,{t:$$$cocjl339.JSString})) {
                    
                    var case$595=attributeName$591;
                    if ($$$cl1.isOfType(attributeName$591,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        attr$592=$$elementAbs.$native.getAttributeNS(case$593.$native,case$595.valueOf());/*End dynamic block*/
                    }else if ($$$cl1.isOfType(attributeName$591,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        attr$592=$$elementAbs.$native.getAttributeNS(case$593.$native,case$595.$native);/*End dynamic block*/
                    }
                }
                /*Begin dynamic block*/
                if(((tmpvar$596=attr$592,tmpvar$597=null,(tmpvar$596.equals&&!tmpvar$596.equals(tmpvar$597))||tmpvar$596!==tmpvar$597)||(tmpvar$598=attr$592,tmpvar$599=$$$cl1.String("",0),(tmpvar$598.equals&&!tmpvar$598.equals(tmpvar$599))||tmpvar$598!==tmpvar$599))){
                    return $$$cocjl339.JSString(attr$592);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$elementAbs.getAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[{$nm:'namespace',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'attributeName',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("get the value of the attribute on this element within the given namespace",73)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','getAttributeNS']};};
            $$elementAbs.getElementsByTagName$defs$tagName=function(tagName$600){var $$elementAbs=this;
            return $$$cl1.String("*",1);};
            $$elementAbs.getElementsByTagName=function getElementsByTagName(tagName$600){
                var $$elementAbs=this;
                if(tagName$600===undefined){tagName$600=$$elementAbs.getElementsByTagName$defs$tagName(tagName$600);}
                
                var case$601=tagName$600;
                if ($$$cl1.isOfType(tagName$600,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return HTMLCollection($$elementAbs.$native.getElementsByTagName(case$601.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(tagName$600,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    return HTMLCollection($$elementAbs.$native.getElementsByTagName(case$601.$native));
                    /*End dynamic block*/
                }
            };$$elementAbs.getElementsByTagName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'tagName',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("get elements on this element by the tagname",43)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','getElementsByTagName']};};
            $$elementAbs.getElementsByTagNameNS$defs$tagName=function(namespace$602,tagName$603){var $$elementAbs=this;
            return $$$cl1.String("*",1);};
            $$elementAbs.getElementsByTagNameNS=function getElementsByTagNameNS(namespace$602,tagName$603){
                var $$elementAbs=this;
                if(tagName$603===undefined){tagName$603=$$elementAbs.getElementsByTagNameNS$defs$tagName(namespace$602,tagName$603);}
                
                var case$604=namespace$602;
                if ($$$cl1.isOfType(namespace$602,{t:$$$cl1.String})) {
                    
                    var case$605=tagName$603;
                    if ($$$cl1.isOfType(tagName$603,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(case$604.valueOf(),case$605.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(tagName$603,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(case$604.valueOf(),case$605.$native));
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(namespace$602,{t:$$$cocjl339.JSString})) {
                    
                    var case$606=tagName$603;
                    if ($$$cl1.isOfType(tagName$603,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(case$604.$native,case$606.valueOf()));
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(tagName$603,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(case$604.$native,case$606.$native));
                        /*End dynamic block*/
                    }
                }
            };$$elementAbs.getElementsByTagNameNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'namespace',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'tagName',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("get elements on this element by the tagname within the given namespace",70)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','getElementsByTagNameNS']};};
            $$elementAbs.hasAttribute=function hasAttribute(attName$607){
                var $$elementAbs=this;
                var has$608;
                
                var case$609=attName$607;
                if ($$$cl1.isOfType(attName$607,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    has$608=$$elementAbs.$native.hasAttribute(case$609.valueOf());/*End dynamic block*/
                }else if ($$$cl1.isOfType(attName$607,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    has$608=$$elementAbs.$native.hasAttribute(case$609.$native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if(has$608){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$elementAbs.hasAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'attName',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns if attribute exists the element",39)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','hasAttribute']};};
            $$elementAbs.hasAttributeNS=function hasAttributeNS(namespace$610,attName$611){
                var $$elementAbs=this;
                var has$612;
                
                var case$613=namespace$610;
                if ($$$cl1.isOfType(namespace$610,{t:$$$cl1.String})) {
                    
                    var case$614=attName$611;
                    if ($$$cl1.isOfType(attName$611,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        has$612=$$elementAbs.$native.hasAttributeNS(case$613.valueOf(),case$614.valueOf());/*End dynamic block*/
                    }else if ($$$cl1.isOfType(attName$611,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        has$612=$$elementAbs.$native.hasAttributeNS(case$613.valueOf(),case$614.$native);/*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(namespace$610,{t:$$$cocjl339.JSString})) {
                    
                    var case$615=attName$611;
                    if ($$$cl1.isOfType(attName$611,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        has$612=$$elementAbs.$native.hasAttributeNS(case$613.$native,case$615.valueOf());/*End dynamic block*/
                    }else if ($$$cl1.isOfType(attName$611,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        has$612=$$elementAbs.$native.hasAttributeNS(case$613.$native,case$615.$native);/*End dynamic block*/
                    }
                }
                /*Begin dynamic block*/
                if(has$612){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$elementAbs.hasAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'namespace',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'attName',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns if attribute exists the element within the given namespace",66)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','hasAttributeNS']};};
            $$elementAbs.removeAttribute=function removeAttribute(attrName$616){
                var $$elementAbs=this;
                
                var case$617=attrName$616;
                if ($$$cl1.isOfType(attrName$616,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.removeAttribute(case$617.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(attrName$616,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.removeAttribute(case$617.$native);
                    /*End dynamic block*/
                }
            };$$elementAbs.removeAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'attrName',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("remove an attribute on the element",34)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','removeAttribute']};};
            $$elementAbs.removeAttributeNS=function removeAttributeNS(namespace$618,attrName$619){
                var $$elementAbs=this;
                
                var case$620=namespace$618;
                if ($$$cl1.isOfType(namespace$618,{t:$$$cl1.String})) {
                    
                    var case$621=attrName$619;
                    if ($$$cl1.isOfType(attrName$619,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$elementAbs.$native.removeAttribute(case$620.valueOf(),case$621.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(attrName$619,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        $$elementAbs.$native.removeAttribute(case$620.valueOf(),case$621.$native);
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(namespace$618,{t:$$$cocjl339.JSString})) {
                    
                    var case$622=attrName$619;
                    if ($$$cl1.isOfType(attrName$619,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$elementAbs.$native.removeAttribute(case$620.$native,case$622.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(attrName$619,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        $$elementAbs.$native.removeAttribute(case$620.$native,case$622.$native);
                        /*End dynamic block*/
                    }
                }
            };$$elementAbs.removeAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'namespace',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'attrName',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("remove an attribute on the element within the given namespace",61)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','removeAttributeNS']};};
            $$elementAbs.setAttribute=function setAttribute(name$623,val$624){
                var $$elementAbs=this;
                
                var case$625=name$623;
                if ($$$cl1.isOfType(name$623,{t:$$$cl1.String})) {
                    
                    var case$626=val$624;
                    if ($$$cl1.isOfType(val$624,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$elementAbs.$native.setAttribute(case$625.valueOf(),case$626.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(val$624,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        $$elementAbs.$native.setAttribute(case$625.valueOf(),case$626.$native);
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(name$623,{t:$$$cocjl339.JSString})) {
                    
                    var case$627=val$624;
                    if ($$$cl1.isOfType(val$624,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$elementAbs.$native.setAttribute(case$625.$native,case$627.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(val$624,{t:$$$cocjl339.JSString})) {
                        /*Begin dynamic block*/
                        $$elementAbs.$native.setAttribute(case$625.$native,case$627.$native);
                        /*End dynamic block*/
                    }
                }
            };$$elementAbs.setAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set an attribute on the element",31)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','setAttribute']};};
            $$elementAbs.setAttributeNS=function setAttributeNS(namespace$628,name$629,val$630){
                var $$elementAbs=this;
                
                var case$631=namespace$628;
                if ($$$cl1.isOfType(namespace$628,{t:$$$cl1.String})) {
                    
                    var case$632=name$629;
                    if ($$$cl1.isOfType(name$629,{t:$$$cl1.String})) {
                        
                        var case$633=val$630;
                        if ($$$cl1.isOfType(val$630,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            $$elementAbs.$native.setAttributeNS(case$631.valueOf(),case$632.valueOf(),case$633.valueOf());
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(val$630,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            $$elementAbs.$native.setAttributeNS(case$631.valueOf(),case$632.valueOf(),case$633.$native);
                            /*End dynamic block*/
                        }
                    }else if ($$$cl1.isOfType(name$629,{t:$$$cocjl339.JSString})) {
                        
                        var case$634=val$630;
                        if ($$$cl1.isOfType(val$630,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            $$elementAbs.$native.setAttributeNS(case$631.valueOf(),case$632.$native,case$634.valueOf());
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(val$630,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            $$elementAbs.$native.setAttributeNS(case$631.valueOf(),case$632.$native,case$634.$native);
                            /*End dynamic block*/
                        }
                    }
                }else if ($$$cl1.isOfType(namespace$628,{t:$$$cocjl339.JSString})) {
                    
                    var case$635=name$629;
                    if ($$$cl1.isOfType(name$629,{t:$$$cl1.String})) {
                        
                        var case$636=val$630;
                        if ($$$cl1.isOfType(val$630,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            $$elementAbs.$native.setAttributeNS(case$631.$native,case$635.valueOf(),case$636.valueOf());
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(val$630,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            $$elementAbs.$native.setAttributeNS(case$631.$native,case$635.valueOf(),case$636.$native);
                            /*End dynamic block*/
                        }
                    }else if ($$$cl1.isOfType(name$629,{t:$$$cocjl339.JSString})) {
                        
                        var case$637=val$630;
                        if ($$$cl1.isOfType(val$630,{t:$$$cl1.String})) {
                            /*Begin dynamic block*/
                            $$elementAbs.$native.setAttributeNS(case$631.$native,case$635.$native,case$637.valueOf());
                            /*End dynamic block*/
                        }else if ($$$cl1.isOfType(val$630,{t:$$$cocjl339.JSString})) {
                            /*Begin dynamic block*/
                            $$elementAbs.$native.setAttributeNS(case$631.$native,case$635.$native,case$637.$native);
                            /*End dynamic block*/
                        }
                    }
                }
            };$$elementAbs.setAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'namespace',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set an attribute on the element within the given namespace",58)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','setAttributeNS']};};
            $$elementAbs.tagName=function tagName(){
                var $$elementAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$elementAbs.$native.tagName);
                /*End dynamic block*/
            };$$elementAbs.tagName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:ElementAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the elements tag name",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','tagName']};};
        })(ElementAbs.$$.prototype);
    }
    return ElementAbs;
}
exports.$init$ElementAbs=$init$ElementAbs;
$init$ElementAbs();
function Element(n$638, $$element){
    $init$Element();
    if ($$element===undefined)$$element=new Element.$$;
    $$element.n$638_=n$638;
    ElementAbs($$element);
    $$element.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Element,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','Element','$at','native']};}};
    /*Begin dynamic block*/
    $$element.$native=$$element.n$638;/*End dynamic block*/
    return $$element;
}
Element.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:ElementAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a DOM Element",13)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','Element']};};
exports.Element=Element;
function $init$Element(){
    if (Element.$$===undefined){
        $$$cl1.initTypeProto(Element,'com.openswimsoftware.ceylon.js.dom::Element',$init$ElementAbs());
        (function($$element){
            $$$cl1.defineAttr($$element,'n$638',function(){return this.n$638_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Element,d:['com.openswimsoftware.ceylon.js.dom','Element','$at','n']};});
        })(Element.$$.prototype);
    }
    return Element;
}
exports.$init$Element=$init$Element;
$init$Element();
var $$$cocjj639=require('com/openswimsoftware/ceylon/js/json/1.0.0/com.openswimsoftware.ceylon.js.json-1.0.0');
$$$cl1.$addmod$($$$cocjj639,'com.openswimsoftware.ceylon.js.json/1.0.0');
function EventPhase(num, $$eventPhase){
    $init$EventPhase();
    if ($$eventPhase===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$eventPhase.num_=num;
    return $$eventPhase;
}
EventPhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'num',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.shared()];}}],of:[{t:none$640},{t:capturePhase$641},{t:atTarget$642},{t:bubblingPhase$643}],$an:function(){return[$$$cl1.doc($$$cl1.String("current Event Phase",19)),$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','EventPhase']};};
exports.EventPhase=EventPhase;
function $init$EventPhase(){
    if (EventPhase.$$===undefined){
        $$$cl1.initTypeProto(EventPhase,'com.openswimsoftware.ceylon.js.dom::EventPhase',$$$cl1.Basic);
        (function($$eventPhase){
            $$$cl1.defineAttr($$eventPhase,'num',function(){return this.num_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:EventPhase,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventPhase','$at','num']};});
        })(EventPhase.$$.prototype);
    }
    return EventPhase;
}
exports.$init$EventPhase=$init$EventPhase;
$init$EventPhase();
function none$640(){
    var $$none=new none$640.$$;
    EventPhase((0),$$none);
    return $$none;
};none$640.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:EventPhase},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','none']};};
function $init$none$640(){
    if (none$640.$$===undefined){
        $$$cl1.initTypeProto(none$640,'com.openswimsoftware.ceylon.js.dom::none',$init$EventPhase());
    }
    return none$640;
}
exports.$init$none$640=$init$none$640;
$init$none$640();
var none$644;
function getNone(){
    if (none$644===undefined){none$644=$init$none$640()();none$644.$$metamodel$$=getNone.$$metamodel$$;}
    return none$644;
}
exports.getNone=getNone;
getNone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:none$640},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','none']};};
$prop$getNone={get:getNone,$$metamodel$$:getNone.$$metamodel$$};
exports.$prop$getNone=$prop$getNone;
function capturePhase$641(){
    var $$capturePhase=new capturePhase$641.$$;
    EventPhase((1),$$capturePhase);
    return $$capturePhase;
};capturePhase$641.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:EventPhase},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','capturePhase']};};
function $init$capturePhase$641(){
    if (capturePhase$641.$$===undefined){
        $$$cl1.initTypeProto(capturePhase$641,'com.openswimsoftware.ceylon.js.dom::capturePhase',$init$EventPhase());
    }
    return capturePhase$641;
}
exports.$init$capturePhase$641=$init$capturePhase$641;
$init$capturePhase$641();
var capturePhase$645;
function getCapturePhase(){
    if (capturePhase$645===undefined){capturePhase$645=$init$capturePhase$641()();capturePhase$645.$$metamodel$$=getCapturePhase.$$metamodel$$;}
    return capturePhase$645;
}
exports.getCapturePhase=getCapturePhase;
getCapturePhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:capturePhase$641},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','capturePhase']};};
$prop$getCapturePhase={get:getCapturePhase,$$metamodel$$:getCapturePhase.$$metamodel$$};
exports.$prop$getCapturePhase=$prop$getCapturePhase;
function atTarget$642(){
    var $$atTarget=new atTarget$642.$$;
    EventPhase((2),$$atTarget);
    return $$atTarget;
};atTarget$642.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:EventPhase},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','atTarget']};};
function $init$atTarget$642(){
    if (atTarget$642.$$===undefined){
        $$$cl1.initTypeProto(atTarget$642,'com.openswimsoftware.ceylon.js.dom::atTarget',$init$EventPhase());
    }
    return atTarget$642;
}
exports.$init$atTarget$642=$init$atTarget$642;
$init$atTarget$642();
var atTarget$646;
function getAtTarget(){
    if (atTarget$646===undefined){atTarget$646=$init$atTarget$642()();atTarget$646.$$metamodel$$=getAtTarget.$$metamodel$$;}
    return atTarget$646;
}
exports.getAtTarget=getAtTarget;
getAtTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:atTarget$642},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','atTarget']};};
$prop$getAtTarget={get:getAtTarget,$$metamodel$$:getAtTarget.$$metamodel$$};
exports.$prop$getAtTarget=$prop$getAtTarget;
function bubblingPhase$643(){
    var $$bubblingPhase=new bubblingPhase$643.$$;
    EventPhase((3),$$bubblingPhase);
    return $$bubblingPhase;
};bubblingPhase$643.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:EventPhase},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','bubblingPhase']};};
function $init$bubblingPhase$643(){
    if (bubblingPhase$643.$$===undefined){
        $$$cl1.initTypeProto(bubblingPhase$643,'com.openswimsoftware.ceylon.js.dom::bubblingPhase',$init$EventPhase());
    }
    return bubblingPhase$643;
}
exports.$init$bubblingPhase$643=$init$bubblingPhase$643;
$init$bubblingPhase$643();
var bubblingPhase$647;
function getBubblingPhase(){
    if (bubblingPhase$647===undefined){bubblingPhase$647=$init$bubblingPhase$643()();bubblingPhase$647.$$metamodel$$=getBubblingPhase.$$metamodel$$;}
    return bubblingPhase$647;
}
exports.getBubblingPhase=getBubblingPhase;
getBubblingPhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:bubblingPhase$643},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','bubblingPhase']};};
$prop$getBubblingPhase={get:getBubblingPhase,$$metamodel$$:getBubblingPhase.$$metamodel$$};
exports.$prop$getBubblingPhase=$prop$getBubblingPhase;
function EventInit(bubbles, cancelable, $$eventInit){
    $init$EventInit();
    if ($$eventInit===undefined)$$eventInit=new EventInit.$$;
    $$eventInit.bubbles_=bubbles;
    $$eventInit.cancelable_=cancelable;
    return $$eventInit;
}
EventInit.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'bubbles',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.shared()];}},{$nm:'cancelable',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.shared()];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Event creation options",22)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventInit']};};
exports.EventInit=EventInit;
function $init$EventInit(){
    if (EventInit.$$===undefined){
        $$$cl1.initTypeProto(EventInit,'com.openswimsoftware.ceylon.js.dom::EventInit',$$$cl1.Basic);
        (function($$eventInit){
            $$eventInit.toJson=function toJson(){
                var $$eventInit=this;
                var json$648=(values$649=[$$$cl1.Entry($$$cl1.String("bubbles",7),$$eventInit.bubbles,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}}),$$$cl1.Entry($$$cl1.String("cancelable",10),$$eventInit.cancelable,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}}}}),$$$cocjj639.JSON(values$649));
                var values$649;
                return json$648.toJson();
            };$$eventInit.toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjj639.JSJSON},$ps:[],$cont:EventInit,$an:function(){return[$$$cl1.doc($$$cl1.String("convert to native JSON",22)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventInit','$m','toJson']};};
            $$$cl1.defineAttr($$eventInit,'bubbles',function(){return this.bubbles_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:EventInit,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventInit','$at','bubbles']};});
            $$$cl1.defineAttr($$eventInit,'cancelable',function(){return this.cancelable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:EventInit,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventInit','$at','cancelable']};});
        })(EventInit.$$.prototype);
    }
    return EventInit;
}
exports.$init$EventInit=$init$EventInit;
$init$EventInit();
function createEvent(type$650,options$651){
    
    var case$652=type$650;
    if ($$$cl1.isOfType(type$650,{t:$$$cl1.String})) {
        /*Begin dynamic block*/
        return Event((typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'30:16-30:20','event.ceylon'):Event)(case$652.valueOf(),options$651.toJson()));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(type$650,{t:$$$cocjl339.JSString})) {
        /*Begin dynamic block*/
        return Event((typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'35:16-35:20','event.ceylon'):Event)(case$652.$native,options$651.toJson()));
        /*End dynamic block*/
    }
}
exports.createEvent=createEvent;
createEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Event},$ps:[{$nm:'type',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'options',$mt:'prm',$t:{t:EventInit},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("create a new Event",18)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','createEvent']};};
function EventAbs($$eventAbs){
    $init$EventAbs();
    if ($$eventAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$eventAbs);
    return $$eventAbs;
}
EventAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs']};};
exports.EventAbs=EventAbs;
function $init$EventAbs(){
    if (EventAbs.$$===undefined){
        $$$cl1.initTypeProto(EventAbs,'com.openswimsoftware.ceylon.js.dom::EventAbs',$$$cocjl339.JSObjectAbs);
        (function($$eventAbs){
            $$eventAbs.type=function type(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$eventAbs.$native.type);
                /*End dynamic block*/
            };$$eventAbs.type.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the Event type",22)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','type']};};
            $$eventAbs.target=function target(){
                var $$eventAbs=this;
                var target$653;
                /*Begin dynamic block*/
                target$653=$$eventAbs.$native.target;if((tmpvar$654=target$653,tmpvar$655=null,(tmpvar$654.equals&&!tmpvar$654.equals(tmpvar$655))||tmpvar$654!==tmpvar$655)){
                    return EventTarget(target$653);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$eventAbs.target.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:EventTarget}]},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the event target",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','target']};};
            $$eventAbs.currentTarget=function currentTarget(){
                var $$eventAbs=this;
                var target$656;
                /*Begin dynamic block*/
                target$656=$$eventAbs.$native.currentTarget;if((tmpvar$657=target$656,tmpvar$658=null,(tmpvar$657.equals&&!tmpvar$657.equals(tmpvar$658))||tmpvar$657!==tmpvar$658)){
                    return EventTarget(target$656);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$eventAbs.currentTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:EventTarget}]},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the current event target",32)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','currentTarget']};};
            $$eventAbs.eventPhase=function eventPhase(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                var eventPhase$659=$$eventAbs.$native.eventPhase;
                $prop$getEventPhase$659={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','eventPhase','$at','eventPhase']};}};
                $prop$getEventPhase$659.get=function(){return eventPhase$659};
                if((tmpvar$660=eventPhase$659,tmpvar$661=(typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'80:30-80:34','event.ceylon'):Event).NONE,(tmpvar$660.equals&&tmpvar$660.equals(tmpvar$661))||tmpvar$660===tmpvar$661)){
                    return getNone();
                }else {
                    if((tmpvar$662=eventPhase$659,tmpvar$663=(typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'82:37-82:41','event.ceylon'):Event).CAPTURING_PHASE,(tmpvar$662.equals&&tmpvar$662.equals(tmpvar$663))||tmpvar$662===tmpvar$663)){
                        return getCapturePhase();
                    }else {
                        if((tmpvar$664=eventPhase$659,tmpvar$665=(typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'84:37-84:41','event.ceylon'):Event).AT_TARGET,(tmpvar$664.equals&&tmpvar$664.equals(tmpvar$665))||tmpvar$664===tmpvar$665)){
                            return getAtTarget();
                        }else {
                            return getBubblingPhase();
                        }
                    }
                }/*End dynamic block*/
            };$$eventAbs.eventPhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:EventPhase},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns current event phase",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','eventPhase']};};
            $$eventAbs.stopPropagation=function stopPropagation(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                $$eventAbs.$native.stopPropagation();
                /*End dynamic block*/
            };$$eventAbs.stopPropagation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("stops event propagation through further DOM elements",52)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','stopPropagation']};};
            $$eventAbs.stopImmediatePropagation=function stopImmediatePropagation(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                $$eventAbs.$native.stopImmediatePropagation();
                /*End dynamic block*/
            };$$eventAbs.stopImmediatePropagation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the event propagation immidately",40)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','stopImmediatePropagation']};};
            $$eventAbs.bubbles=function bubbles(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                if($$eventAbs.$native.bubbles){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$eventAbs.bubbles.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("does the event bubble through the dom or not",44)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','bubbles']};};
            $$eventAbs.cancelable=function cancelable(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                if($$eventAbs.$native.cancelable){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$eventAbs.cancelable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("is the event cancelable or not",30)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','cancelable']};};
            $$eventAbs.preventDefault=function preventDefault(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                $$eventAbs.$native.preventDefault();
                /*End dynamic block*/
            };$$eventAbs.preventDefault.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("cancels the event if it is cancelable",37)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','preventDefault']};};
            $$eventAbs.defaultPrevented=function defaultPrevented(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                if($$eventAbs.$native.defaultPrevented){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$eventAbs.defaultPrevented.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("has the default been prevented",30)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','defaultPrevented']};};
            $$eventAbs.isTrusted=function isTrusted(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                if($$eventAbs.$native.isTrusted){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$eventAbs.isTrusted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("was the event created by the browser or a script",48)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','isTrusted']};};
            $$eventAbs.timeStamp=function timeStamp(){
                var $$eventAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSDate($$eventAbs.$native.timeStamp);
                /*End dynamic block*/
            };$$eventAbs.timeStamp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSDate},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the time the event was created",38)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','timeStamp']};};
        })(EventAbs.$$.prototype);
    }
    return EventAbs;
}
exports.$init$EventAbs=$init$EventAbs;
$init$EventAbs();
function Event(n$666, $$event){
    $init$Event();
    if ($$event===undefined)$$event=new Event.$$;
    $$event.n$666_=n$666;
    EventAbs($$event);
    $$event.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Event,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','Event','$at','native']};}};
    /*Begin dynamic block*/
    $$event.$native=$$event.n$666;/*End dynamic block*/
    return $$event;
}
Event.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:EventAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a DOM Event",11)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','Event']};};
exports.Event=Event;
function $init$Event(){
    if (Event.$$===undefined){
        $$$cl1.initTypeProto(Event,'com.openswimsoftware.ceylon.js.dom::Event',$init$EventAbs());
        (function($$event){
            $$$cl1.defineAttr($$event,'n$666',function(){return this.n$666_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Event,d:['com.openswimsoftware.ceylon.js.dom','Event','$at','n']};});
        })(Event.$$.prototype);
    }
    return Event;
}
exports.$init$Event=$init$Event;
$init$Event();
function EventTargetAbs($$eventTargetAbs){
    $init$EventTargetAbs();
    if ($$eventTargetAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$eventTargetAbs);
    return $$eventTargetAbs;
}
EventTargetAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','EventTargetAbs']};};
exports.EventTargetAbs=EventTargetAbs;
function $init$EventTargetAbs(){
    if (EventTargetAbs.$$===undefined){
        $$$cl1.initTypeProto(EventTargetAbs,'com.openswimsoftware.ceylon.js.dom::EventTargetAbs',$$$cocjl339.JSObjectAbs);
        (function($$eventTargetAbs){
            $$eventTargetAbs.addEventListener$defs$capture=function(type$667,callback$668,capture$669){var $$eventTargetAbs=this;
            return false;};
            $$eventTargetAbs.addEventListener=function addEventListener(type$667,callback$668,capture$669){
                var $$eventTargetAbs=this;
                if(capture$669===undefined){capture$669=$$eventTargetAbs.addEventListener$defs$capture(type$667,callback$668,capture$669);}
                
                var case$670=type$667;
                if ($$$cl1.isOfType(type$667,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$eventTargetAbs.$native.addEventListener(case$670.valueOf(),$$$cl1.$JsCallable(callback$668,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:Event}]},Return:{t:$$$cl1.Anything}}),capture$669);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(type$667,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$eventTargetAbs.$native.addEventListener(case$670.$native,$$$cl1.$JsCallable(callback$668,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:Event}]},Return:{t:$$$cl1.Anything}}),capture$669);
                    /*End dynamic block*/
                }
            };$$eventTargetAbs.addEventListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'capture',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("add an event listener to the target",35)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventTargetAbs','$m','addEventListener']};};
            $$eventTargetAbs.removeEventListener$defs$capture=function(type$671,callback$672,capture$673){var $$eventTargetAbs=this;
            return false;};
            $$eventTargetAbs.removeEventListener=function removeEventListener(type$671,callback$672,capture$673){
                var $$eventTargetAbs=this;
                if(capture$673===undefined){capture$673=$$eventTargetAbs.removeEventListener$defs$capture(type$671,callback$672,capture$673);}
                
                var case$674=type$671;
                if ($$$cl1.isOfType(type$671,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$eventTargetAbs.$native.removeEventListener(case$674.valueOf(),$$$cl1.$JsCallable(callback$672,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:Event}]},Return:{t:$$$cl1.Anything}}),capture$673);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(type$671,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$eventTargetAbs.$native.removeEventListener(case$674.$native,$$$cl1.$JsCallable(callback$672,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:'T', l:[{t:Event}]},Return:{t:$$$cl1.Anything}}),capture$673);
                    /*End dynamic block*/
                }
            };$$eventTargetAbs.removeEventListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'capture',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("remove an event listener from the target",40)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventTargetAbs','$m','removeEventListener']};};
            $$eventTargetAbs.dispatchEvent=function dispatchEvent(event$675){
                var $$eventTargetAbs=this;
                /*Begin dynamic block*/
                if($$eventTargetAbs.$native.dispatchEvent(event$675)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$eventTargetAbs.dispatchEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("dispatch an event at the target",31)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventTargetAbs','$m','dispatchEvent']};};
        })(EventTargetAbs.$$.prototype);
    }
    return EventTargetAbs;
}
exports.$init$EventTargetAbs=$init$EventTargetAbs;
$init$EventTargetAbs();
function EventTarget(n$676, $$eventTarget){
    $init$EventTarget();
    if ($$eventTarget===undefined)$$eventTarget=new EventTarget.$$;
    $$eventTarget.n$676_=n$676;
    EventTargetAbs($$eventTarget);
    $$eventTarget.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:EventTarget,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','EventTarget','$at','native']};}};
    /*Begin dynamic block*/
    $$eventTarget.$native=$$eventTarget.n$676;/*End dynamic block*/
    return $$eventTarget;
}
EventTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:EventTargetAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a DOM EventTarget",17)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventTarget']};};
exports.EventTarget=EventTarget;
function $init$EventTarget(){
    if (EventTarget.$$===undefined){
        $$$cl1.initTypeProto(EventTarget,'com.openswimsoftware.ceylon.js.dom::EventTarget',$init$EventTargetAbs());
        (function($$eventTarget){
            $$$cl1.defineAttr($$eventTarget,'n$676',function(){return this.n$676_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:EventTarget,d:['com.openswimsoftware.ceylon.js.dom','EventTarget','$at','n']};});
        })(EventTarget.$$.prototype);
    }
    return EventTarget;
}
exports.$init$EventTarget=$init$EventTarget;
$init$EventTarget();
function HTMLCollectionAbs($$hTMLCollectionAbs){
    $init$HTMLCollectionAbs();
    if ($$hTMLCollectionAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$hTMLCollectionAbs);
    return $$hTMLCollectionAbs;
}
HTMLCollectionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','HTMLCollectionAbs']};};
exports.HTMLCollectionAbs=HTMLCollectionAbs;
function $init$HTMLCollectionAbs(){
    if (HTMLCollectionAbs.$$===undefined){
        $$$cl1.initTypeProto(HTMLCollectionAbs,'com.openswimsoftware.ceylon.js.dom::HTMLCollectionAbs',$$$cocjl339.JSObjectAbs);
        (function($$hTMLCollectionAbs){
            $$hTMLCollectionAbs.length=function length(){
                var $$hTMLCollectionAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$hTMLCollectionAbs.$native.length);
                /*End dynamic block*/
            };$$hTMLCollectionAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:HTMLCollectionAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the length of the collection",36)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','HTMLCollectionAbs','$m','length']};};
            $$hTMLCollectionAbs.item=function item(index$677){
                var $$hTMLCollectionAbs=this;
                var item$678;
                
                var case$679=index$677;
                if ($$$cl1.isOfType(index$677,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    item$678=$$hTMLCollectionAbs.$native.item(case$679);/*End dynamic block*/
                }else if ($$$cl1.isOfType(index$677,{t:$$$cocjl339.JSNumber})) {
                    /*Begin dynamic block*/
                    item$678=$$hTMLCollectionAbs.$native.item(case$679.$native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if((tmpvar$680=item$678,tmpvar$681=null,(tmpvar$680.equals&&!tmpvar$680.equals(tmpvar$681))||tmpvar$680!==tmpvar$681)){
                    return Element(item$678);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$hTMLCollectionAbs.item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Element}]},$ps:[{$nm:'index',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}}],$cont:HTMLCollectionAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("return the node at the given index",34)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','HTMLCollectionAbs','$m','item']};};
            $$hTMLCollectionAbs.namedItem=function namedItem(name$682){
                var $$hTMLCollectionAbs=this;
                var namedItem$683;
                
                var case$684=name$682;
                if ($$$cl1.isOfType(name$682,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    namedItem$683=$$hTMLCollectionAbs.$native.namedItem(case$684.valueOf());/*End dynamic block*/
                }else if ($$$cl1.isOfType(name$682,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    namedItem$683=$$hTMLCollectionAbs.$native.namedItem(case$684.$native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if((tmpvar$685=namedItem$683,tmpvar$686=null,(tmpvar$685.equals&&tmpvar$685.equals(tmpvar$686))||tmpvar$685===tmpvar$686)){
                    return $$$cocjl339.JSObject(namedItem$683);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$hTMLCollectionAbs.namedItem.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSObject}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:HTMLCollectionAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("return the node whose id or name matches the passed name",56)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','HTMLCollectionAbs','$m','namedItem']};};
        })(HTMLCollectionAbs.$$.prototype);
    }
    return HTMLCollectionAbs;
}
exports.$init$HTMLCollectionAbs=$init$HTMLCollectionAbs;
$init$HTMLCollectionAbs();
function HTMLCollection(n$687, $$hTMLCollection){
    $init$HTMLCollection();
    if ($$hTMLCollection===undefined)$$hTMLCollection=new HTMLCollection.$$;
    $$hTMLCollection.n$687_=n$687;
    HTMLCollectionAbs($$hTMLCollection);
    $$hTMLCollection.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:HTMLCollection,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','HTMLCollection','$at','native']};}};
    /*Begin dynamic block*/
    $$hTMLCollection.$native=$$hTMLCollection.n$687;/*End dynamic block*/
    return $$hTMLCollection;
}
HTMLCollection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:HTMLCollectionAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a DOM HTMLCollection",20)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','HTMLCollection']};};
exports.HTMLCollection=HTMLCollection;
function $init$HTMLCollection(){
    if (HTMLCollection.$$===undefined){
        $$$cl1.initTypeProto(HTMLCollection,'com.openswimsoftware.ceylon.js.dom::HTMLCollection',$init$HTMLCollectionAbs());
        (function($$hTMLCollection){
            $$$cl1.defineAttr($$hTMLCollection,'n$687',function(){return this.n$687_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:HTMLCollection,d:['com.openswimsoftware.ceylon.js.dom','HTMLCollection','$at','n']};});
        })(HTMLCollection.$$.prototype);
    }
    return HTMLCollection;
}
exports.$init$HTMLCollection=$init$HTMLCollection;
$init$HTMLCollection();
function getWindow(){
    /*Begin dynamic block*/
    return $$$cocjh429.Window((typeof window==='undefined'||window===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: window")),'6:16-6:21','main.ceylon'):window));
    /*End dynamic block*/
}
exports.getWindow=getWindow;
getWindow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjh429.Window},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("returns the current browser window",34)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','getWindow']};};
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("based on the DOM 4 working draft and Mozilla WebAPIs",52))];};
exports.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.language/1.8.0':function(){return[$$$cl1.shared()];},
'com.openswimsoftware.ceylon.js.html/5.0.0':function(){return[$$$cl1.shared()];},
'com.openswimsoftware.ceylon.js.json/1.0.0':function(){return[$$$cl1.shared()];}
};};
function NodeType(name$688, $$nodeType){
    $init$NodeType();
    if ($$nodeType===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$nodeType.name$688_=name$688;
    return $$nodeType;
}
NodeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],of:[{t:attributeNode$689},{t:cdataSectionNode$690},{t:commentNode$691},{t:documentFragmentNode$692},{t:documentNode$693},{t:documentTypeNode$694},{t:elementNode$695},{t:entityNode$696},{t:entityReferenceNode$697},{t:notationNode$698},{t:processingInstructionNode$699},{t:textNode$700}],$an:function(){return[$$$cl1.doc($$$cl1.String("specific NodeType",17)),$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','NodeType']};};
exports.NodeType=NodeType;
function $init$NodeType(){
    if (NodeType.$$===undefined){
        $$$cl1.initTypeProto(NodeType,'com.openswimsoftware.ceylon.js.dom::NodeType',$$$cl1.Basic);
        (function($$nodeType){
            $$$cl1.defineAttr($$nodeType,'name$688',function(){return this.name$688_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:NodeType,d:['com.openswimsoftware.ceylon.js.dom','NodeType','$at','name']};});
        })(NodeType.$$.prototype);
    }
    return NodeType;
}
exports.$init$NodeType=$init$NodeType;
$init$NodeType();
function attributeNode$689(){
    var $$attributeNode=new attributeNode$689.$$;
    NodeType($$$cl1.String("attributeNode",13),$$attributeNode);
    return $$attributeNode;
};attributeNode$689.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','attributeNode']};};
function $init$attributeNode$689(){
    if (attributeNode$689.$$===undefined){
        $$$cl1.initTypeProto(attributeNode$689,'com.openswimsoftware.ceylon.js.dom::attributeNode',$init$NodeType());
    }
    return attributeNode$689;
}
exports.$init$attributeNode$689=$init$attributeNode$689;
$init$attributeNode$689();
var attributeNode$701;
function getAttributeNode(){
    if (attributeNode$701===undefined){attributeNode$701=$init$attributeNode$689()();attributeNode$701.$$metamodel$$=getAttributeNode.$$metamodel$$;}
    return attributeNode$701;
}
exports.getAttributeNode=getAttributeNode;
getAttributeNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:attributeNode$689},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','attributeNode']};};
$prop$getAttributeNode={get:getAttributeNode,$$metamodel$$:getAttributeNode.$$metamodel$$};
exports.$prop$getAttributeNode=$prop$getAttributeNode;
function cdataSectionNode$690(){
    var $$cdataSectionNode=new cdataSectionNode$690.$$;
    NodeType($$$cl1.String("cdataSectionNode",16),$$cdataSectionNode);
    return $$cdataSectionNode;
};cdataSectionNode$690.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','cdataSectionNode']};};
function $init$cdataSectionNode$690(){
    if (cdataSectionNode$690.$$===undefined){
        $$$cl1.initTypeProto(cdataSectionNode$690,'com.openswimsoftware.ceylon.js.dom::cdataSectionNode',$init$NodeType());
    }
    return cdataSectionNode$690;
}
exports.$init$cdataSectionNode$690=$init$cdataSectionNode$690;
$init$cdataSectionNode$690();
var cdataSectionNode$702;
function getCdataSectionNode(){
    if (cdataSectionNode$702===undefined){cdataSectionNode$702=$init$cdataSectionNode$690()();cdataSectionNode$702.$$metamodel$$=getCdataSectionNode.$$metamodel$$;}
    return cdataSectionNode$702;
}
exports.getCdataSectionNode=getCdataSectionNode;
getCdataSectionNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:cdataSectionNode$690},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','cdataSectionNode']};};
$prop$getCdataSectionNode={get:getCdataSectionNode,$$metamodel$$:getCdataSectionNode.$$metamodel$$};
exports.$prop$getCdataSectionNode=$prop$getCdataSectionNode;
function commentNode$691(){
    var $$commentNode=new commentNode$691.$$;
    NodeType($$$cl1.String("commentNode",11),$$commentNode);
    return $$commentNode;
};commentNode$691.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','commentNode']};};
function $init$commentNode$691(){
    if (commentNode$691.$$===undefined){
        $$$cl1.initTypeProto(commentNode$691,'com.openswimsoftware.ceylon.js.dom::commentNode',$init$NodeType());
    }
    return commentNode$691;
}
exports.$init$commentNode$691=$init$commentNode$691;
$init$commentNode$691();
var commentNode$703;
function getCommentNode(){
    if (commentNode$703===undefined){commentNode$703=$init$commentNode$691()();commentNode$703.$$metamodel$$=getCommentNode.$$metamodel$$;}
    return commentNode$703;
}
exports.getCommentNode=getCommentNode;
getCommentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:commentNode$691},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','commentNode']};};
$prop$getCommentNode={get:getCommentNode,$$metamodel$$:getCommentNode.$$metamodel$$};
exports.$prop$getCommentNode=$prop$getCommentNode;
function documentFragmentNode$692(){
    var $$documentFragmentNode=new documentFragmentNode$692.$$;
    NodeType($$$cl1.String("documentFragmentNode",20),$$documentFragmentNode);
    return $$documentFragmentNode;
};documentFragmentNode$692.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentFragmentNode']};};
function $init$documentFragmentNode$692(){
    if (documentFragmentNode$692.$$===undefined){
        $$$cl1.initTypeProto(documentFragmentNode$692,'com.openswimsoftware.ceylon.js.dom::documentFragmentNode',$init$NodeType());
    }
    return documentFragmentNode$692;
}
exports.$init$documentFragmentNode$692=$init$documentFragmentNode$692;
$init$documentFragmentNode$692();
var documentFragmentNode$704;
function getDocumentFragmentNode(){
    if (documentFragmentNode$704===undefined){documentFragmentNode$704=$init$documentFragmentNode$692()();documentFragmentNode$704.$$metamodel$$=getDocumentFragmentNode.$$metamodel$$;}
    return documentFragmentNode$704;
}
exports.getDocumentFragmentNode=getDocumentFragmentNode;
getDocumentFragmentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentFragmentNode$692},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentFragmentNode']};};
$prop$getDocumentFragmentNode={get:getDocumentFragmentNode,$$metamodel$$:getDocumentFragmentNode.$$metamodel$$};
exports.$prop$getDocumentFragmentNode=$prop$getDocumentFragmentNode;
function documentNode$693(){
    var $$documentNode=new documentNode$693.$$;
    NodeType($$$cl1.String("documentNode",12),$$documentNode);
    return $$documentNode;
};documentNode$693.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentNode']};};
function $init$documentNode$693(){
    if (documentNode$693.$$===undefined){
        $$$cl1.initTypeProto(documentNode$693,'com.openswimsoftware.ceylon.js.dom::documentNode',$init$NodeType());
    }
    return documentNode$693;
}
exports.$init$documentNode$693=$init$documentNode$693;
$init$documentNode$693();
var documentNode$705;
function getDocumentNode(){
    if (documentNode$705===undefined){documentNode$705=$init$documentNode$693()();documentNode$705.$$metamodel$$=getDocumentNode.$$metamodel$$;}
    return documentNode$705;
}
exports.getDocumentNode=getDocumentNode;
getDocumentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentNode$693},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentNode']};};
$prop$getDocumentNode={get:getDocumentNode,$$metamodel$$:getDocumentNode.$$metamodel$$};
exports.$prop$getDocumentNode=$prop$getDocumentNode;
function documentTypeNode$694(){
    var $$documentTypeNode=new documentTypeNode$694.$$;
    NodeType($$$cl1.String("documentTypeNode",16),$$documentTypeNode);
    return $$documentTypeNode;
};documentTypeNode$694.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentTypeNode']};};
function $init$documentTypeNode$694(){
    if (documentTypeNode$694.$$===undefined){
        $$$cl1.initTypeProto(documentTypeNode$694,'com.openswimsoftware.ceylon.js.dom::documentTypeNode',$init$NodeType());
    }
    return documentTypeNode$694;
}
exports.$init$documentTypeNode$694=$init$documentTypeNode$694;
$init$documentTypeNode$694();
var documentTypeNode$706;
function getDocumentTypeNode(){
    if (documentTypeNode$706===undefined){documentTypeNode$706=$init$documentTypeNode$694()();documentTypeNode$706.$$metamodel$$=getDocumentTypeNode.$$metamodel$$;}
    return documentTypeNode$706;
}
exports.getDocumentTypeNode=getDocumentTypeNode;
getDocumentTypeNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentTypeNode$694},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentTypeNode']};};
$prop$getDocumentTypeNode={get:getDocumentTypeNode,$$metamodel$$:getDocumentTypeNode.$$metamodel$$};
exports.$prop$getDocumentTypeNode=$prop$getDocumentTypeNode;
function elementNode$695(){
    var $$elementNode=new elementNode$695.$$;
    NodeType($$$cl1.String("elementNode",11),$$elementNode);
    return $$elementNode;
};elementNode$695.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','elementNode']};};
function $init$elementNode$695(){
    if (elementNode$695.$$===undefined){
        $$$cl1.initTypeProto(elementNode$695,'com.openswimsoftware.ceylon.js.dom::elementNode',$init$NodeType());
    }
    return elementNode$695;
}
exports.$init$elementNode$695=$init$elementNode$695;
$init$elementNode$695();
var elementNode$707;
function getElementNode(){
    if (elementNode$707===undefined){elementNode$707=$init$elementNode$695()();elementNode$707.$$metamodel$$=getElementNode.$$metamodel$$;}
    return elementNode$707;
}
exports.getElementNode=getElementNode;
getElementNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:elementNode$695},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','elementNode']};};
$prop$getElementNode={get:getElementNode,$$metamodel$$:getElementNode.$$metamodel$$};
exports.$prop$getElementNode=$prop$getElementNode;
function entityNode$696(){
    var $$entityNode=new entityNode$696.$$;
    NodeType($$$cl1.String("entityNode",10),$$entityNode);
    return $$entityNode;
};entityNode$696.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','entityNode']};};
function $init$entityNode$696(){
    if (entityNode$696.$$===undefined){
        $$$cl1.initTypeProto(entityNode$696,'com.openswimsoftware.ceylon.js.dom::entityNode',$init$NodeType());
    }
    return entityNode$696;
}
exports.$init$entityNode$696=$init$entityNode$696;
$init$entityNode$696();
var entityNode$708;
function getEntityNode(){
    if (entityNode$708===undefined){entityNode$708=$init$entityNode$696()();entityNode$708.$$metamodel$$=getEntityNode.$$metamodel$$;}
    return entityNode$708;
}
exports.getEntityNode=getEntityNode;
getEntityNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:entityNode$696},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','entityNode']};};
$prop$getEntityNode={get:getEntityNode,$$metamodel$$:getEntityNode.$$metamodel$$};
exports.$prop$getEntityNode=$prop$getEntityNode;
function entityReferenceNode$697(){
    var $$entityReferenceNode=new entityReferenceNode$697.$$;
    NodeType($$$cl1.String("entityReferenceNode",19),$$entityReferenceNode);
    return $$entityReferenceNode;
};entityReferenceNode$697.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','entityReferenceNode']};};
function $init$entityReferenceNode$697(){
    if (entityReferenceNode$697.$$===undefined){
        $$$cl1.initTypeProto(entityReferenceNode$697,'com.openswimsoftware.ceylon.js.dom::entityReferenceNode',$init$NodeType());
    }
    return entityReferenceNode$697;
}
exports.$init$entityReferenceNode$697=$init$entityReferenceNode$697;
$init$entityReferenceNode$697();
var entityReferenceNode$709;
function getEntityReferenceNode(){
    if (entityReferenceNode$709===undefined){entityReferenceNode$709=$init$entityReferenceNode$697()();entityReferenceNode$709.$$metamodel$$=getEntityReferenceNode.$$metamodel$$;}
    return entityReferenceNode$709;
}
exports.getEntityReferenceNode=getEntityReferenceNode;
getEntityReferenceNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:entityReferenceNode$697},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','entityReferenceNode']};};
$prop$getEntityReferenceNode={get:getEntityReferenceNode,$$metamodel$$:getEntityReferenceNode.$$metamodel$$};
exports.$prop$getEntityReferenceNode=$prop$getEntityReferenceNode;
function notationNode$698(){
    var $$notationNode=new notationNode$698.$$;
    NodeType($$$cl1.String("notationNode",12),$$notationNode);
    return $$notationNode;
};notationNode$698.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','notationNode']};};
function $init$notationNode$698(){
    if (notationNode$698.$$===undefined){
        $$$cl1.initTypeProto(notationNode$698,'com.openswimsoftware.ceylon.js.dom::notationNode',$init$NodeType());
    }
    return notationNode$698;
}
exports.$init$notationNode$698=$init$notationNode$698;
$init$notationNode$698();
var notationNode$710;
function getNotationNode(){
    if (notationNode$710===undefined){notationNode$710=$init$notationNode$698()();notationNode$710.$$metamodel$$=getNotationNode.$$metamodel$$;}
    return notationNode$710;
}
exports.getNotationNode=getNotationNode;
getNotationNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:notationNode$698},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','notationNode']};};
$prop$getNotationNode={get:getNotationNode,$$metamodel$$:getNotationNode.$$metamodel$$};
exports.$prop$getNotationNode=$prop$getNotationNode;
function processingInstructionNode$699(){
    var $$processingInstructionNode=new processingInstructionNode$699.$$;
    NodeType($$$cl1.String("processingInstructionNode",25),$$processingInstructionNode);
    return $$processingInstructionNode;
};processingInstructionNode$699.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','processingInstructionNode']};};
function $init$processingInstructionNode$699(){
    if (processingInstructionNode$699.$$===undefined){
        $$$cl1.initTypeProto(processingInstructionNode$699,'com.openswimsoftware.ceylon.js.dom::processingInstructionNode',$init$NodeType());
    }
    return processingInstructionNode$699;
}
exports.$init$processingInstructionNode$699=$init$processingInstructionNode$699;
$init$processingInstructionNode$699();
var processingInstructionNode$711;
function getProcessingInstructionNode(){
    if (processingInstructionNode$711===undefined){processingInstructionNode$711=$init$processingInstructionNode$699()();processingInstructionNode$711.$$metamodel$$=getProcessingInstructionNode.$$metamodel$$;}
    return processingInstructionNode$711;
}
exports.getProcessingInstructionNode=getProcessingInstructionNode;
getProcessingInstructionNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:processingInstructionNode$699},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','processingInstructionNode']};};
$prop$getProcessingInstructionNode={get:getProcessingInstructionNode,$$metamodel$$:getProcessingInstructionNode.$$metamodel$$};
exports.$prop$getProcessingInstructionNode=$prop$getProcessingInstructionNode;
function textNode$700(){
    var $$textNode=new textNode$700.$$;
    NodeType($$$cl1.String("textNode",8),$$textNode);
    return $$textNode;
};textNode$700.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeType},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','textNode']};};
function $init$textNode$700(){
    if (textNode$700.$$===undefined){
        $$$cl1.initTypeProto(textNode$700,'com.openswimsoftware.ceylon.js.dom::textNode',$init$NodeType());
    }
    return textNode$700;
}
exports.$init$textNode$700=$init$textNode$700;
$init$textNode$700();
var textNode$712;
function getTextNode(){
    if (textNode$712===undefined){textNode$712=$init$textNode$700()();textNode$712.$$metamodel$$=getTextNode.$$metamodel$$;}
    return textNode$712;
}
exports.getTextNode=getTextNode;
getTextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:textNode$700},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','textNode']};};
$prop$getTextNode={get:getTextNode,$$metamodel$$:getTextNode.$$metamodel$$};
exports.$prop$getTextNode=$prop$getTextNode;
function DocumentFragmentAbs($$documentFragmentAbs){
    $init$DocumentFragmentAbs();
    if ($$documentFragmentAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$documentFragmentAbs);
    return $$documentFragmentAbs;
}
DocumentFragmentAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentFragmentAbs']};};
exports.DocumentFragmentAbs=DocumentFragmentAbs;
function $init$DocumentFragmentAbs(){
    if (DocumentFragmentAbs.$$===undefined){
        $$$cl1.initTypeProto(DocumentFragmentAbs,'com.openswimsoftware.ceylon.js.dom::DocumentFragmentAbs',$init$NodeAbs());
    }
    return DocumentFragmentAbs;
}
exports.$init$DocumentFragmentAbs=$init$DocumentFragmentAbs;
$init$DocumentFragmentAbs();
function DocumentFragment(n$713, $$documentFragment){
    $init$DocumentFragment();
    if ($$documentFragment===undefined)$$documentFragment=new DocumentFragment.$$;
    $$documentFragment.n$713_=n$713;
    DocumentFragmentAbs($$documentFragment);
    $$documentFragment.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DocumentFragment,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentFragment','$at','native']};}};
    /*Begin dynamic block*/
    $$documentFragment.$native=$$documentFragment.n$713;/*End dynamic block*/
    return $$documentFragment;
}
DocumentFragment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentFragmentAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a DOM DocumentFragment",22)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentFragment']};};
exports.DocumentFragment=DocumentFragment;
function $init$DocumentFragment(){
    if (DocumentFragment.$$===undefined){
        $$$cl1.initTypeProto(DocumentFragment,'com.openswimsoftware.ceylon.js.dom::DocumentFragment',$init$DocumentFragmentAbs());
        (function($$documentFragment){
            $$$cl1.defineAttr($$documentFragment,'n$713',function(){return this.n$713_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DocumentFragment,d:['com.openswimsoftware.ceylon.js.dom','DocumentFragment','$at','n']};});
        })(DocumentFragment.$$.prototype);
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
EntityReferenceAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','EntityReferenceAbs']};};
exports.EntityReferenceAbs=EntityReferenceAbs;
function $init$EntityReferenceAbs(){
    if (EntityReferenceAbs.$$===undefined){
        $$$cl1.initTypeProto(EntityReferenceAbs,'com.openswimsoftware.ceylon.js.dom::EntityReferenceAbs',$init$NodeAbs());
    }
    return EntityReferenceAbs;
}
exports.$init$EntityReferenceAbs=$init$EntityReferenceAbs;
$init$EntityReferenceAbs();
function EntityReference(n$714, $$entityReference){
    $init$EntityReference();
    if ($$entityReference===undefined)$$entityReference=new EntityReference.$$;
    $$entityReference.n$714_=n$714;
    EntityReferenceAbs($$entityReference);
    /*Begin dynamic block*/
    $$entityReference.$native=$$entityReference.n$714;/*End dynamic block*/
    return $$entityReference;
}
EntityReference.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:EntityReferenceAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a DOM EntityReference",21)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EntityReference']};};
exports.EntityReference=EntityReference;
function $init$EntityReference(){
    if (EntityReference.$$===undefined){
        $$$cl1.initTypeProto(EntityReference,'com.openswimsoftware.ceylon.js.dom::EntityReference',$init$EntityReferenceAbs());
        (function($$entityReference){
            $$$cl1.defineAttr($$entityReference,'n$714',function(){return this.n$714_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:EntityReference,d:['com.openswimsoftware.ceylon.js.dom','EntityReference','$at','n']};});
        })(EntityReference.$$.prototype);
    }
    return EntityReference;
}
exports.$init$EntityReference=$init$EntityReference;
$init$EntityReference();
function NodeAbs($$nodeAbs){
    $init$NodeAbs();
    if ($$nodeAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$nodeAbs);
    return $$nodeAbs;
}
NodeAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs']};};
exports.NodeAbs=NodeAbs;
function $init$NodeAbs(){
    if (NodeAbs.$$===undefined){
        $$$cl1.initTypeProto(NodeAbs,'com.openswimsoftware.ceylon.js.dom::NodeAbs',$$$cocjl339.JSObjectAbs);
        (function($$nodeAbs){
            $$nodeAbs.appendChild=function appendChild(node$715){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                return Node(node$715.$native.appendChild(node$715));
                /*End dynamic block*/
            };$$nodeAbs.appendChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("append the node to the nodes children",37)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','appendChild']};};
            $$nodeAbs.baseURI=function baseURI(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$nodeAbs.$native.baseURL);
                /*End dynamic block*/
            };$$nodeAbs.baseURI.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the nodes baseURI",25)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','baseURI']};};
            $$nodeAbs.childNodes=function childNodes(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                return NodeList($$nodeAbs.$native.childNodes);
                /*End dynamic block*/
            };$$nodeAbs.childNodes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeList},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a list of child nodes",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','childNodes']};};
            $$nodeAbs.cloneNode$defs$bool=function(bool$716){var $$nodeAbs=this;
            return true;};
            $$nodeAbs.cloneNode=function cloneNode(bool$716){
                var $$nodeAbs=this;
                if(bool$716===undefined){bool$716=$$nodeAbs.cloneNode$defs$bool(bool$716);}
                /*Begin dynamic block*/
                return Node((typeof node==='undefined'||node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: node")),'67:15-67:18','node.ceylon'):node).native.cloneNode(bool$716));
                /*End dynamic block*/
            };$$nodeAbs.cloneNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'bool',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("clones the current node pass true for deep copy",47)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','cloneNode']};};
            $$nodeAbs.compareDocumentPosition=function compareDocumentPosition(node$717){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                var pos$718=node$717.$native.compareDocumentPosition(node$717);
                $prop$getPos$718={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','compareDocumentPosition','$at','pos']};}};
                $prop$getPos$718.get=function(){return pos$718};
                if((tmpvar$719=pos$718,tmpvar$720=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'75:23-75:26','node.ceylon'):Node).DOCUMENT_POSITION_CONTAINED_BY,(tmpvar$719.equals&&tmpvar$719.equals(tmpvar$720))||tmpvar$719===tmpvar$720)){
                    return getDocumentPositionContainedBy();
                }else {
                    if((tmpvar$721=pos$718,tmpvar$722=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'77:30-77:33','node.ceylon'):Node).DOCUMENT_POSITION_CONTAINS,(tmpvar$721.equals&&tmpvar$721.equals(tmpvar$722))||tmpvar$721===tmpvar$722)){
                        return getDocumentPositionContains();
                    }else {
                        if((tmpvar$723=pos$718,tmpvar$724=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'79:27-79:30','node.ceylon'):Node).DOCUMENT_POSITION_DISCONNECTED,(tmpvar$723.equals&&tmpvar$723.equals(tmpvar$724))||tmpvar$723===tmpvar$724)){
                            return getDocumentPositionDisconnected();
                        }else {
                            if((tmpvar$725=pos$718,tmpvar$726=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'81:27-81:30','node.ceylon'):Node).DOCUMENT_POSITION_FOLLOWING,(tmpvar$725.equals&&tmpvar$725.equals(tmpvar$726))||tmpvar$725===tmpvar$726)){
                                return getDocumentPositionFollowing();
                            }else {
                                if((tmpvar$727=pos$718,tmpvar$728=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'83:27-83:30','node.ceylon'):Node).DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC,(tmpvar$727.equals&&tmpvar$727.equals(tmpvar$728))||tmpvar$727===tmpvar$728)){
                                    return getDocumentPositionImplementationSpecific();
                                }else {
                                    return getDocumentPositionPreceding();
                                }
                            }
                        }
                    }
                }/*End dynamic block*/
            };$$nodeAbs.compareDocumentPosition.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentPosition},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("return the node document position compared to the passed node",61)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','compareDocumentPosition']};};
            $$nodeAbs.firstChild=function firstChild(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                return Node($$nodeAbs.$native.firstChild);
                /*End dynamic block*/
            };$$nodeAbs.firstChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the nodes first child node",34)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','firstChild']};};
            $$nodeAbs.hasChildNodes=function hasChildNodes(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                if($$nodeAbs.$native.hasAttributes()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$nodeAbs.hasChildNodes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("if the node has children",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','hasChildNodes']};};
            $$nodeAbs.insertBefore=function insertBefore(newElement$729,referenceElement$730){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                var ref$731;
                if((ref$731=referenceElement$730)!==null){
                    return Node($$nodeAbs.$native.insertBefore(newElement$729.$native,ref$731.$native));
                }else {
                    return Node($$nodeAbs.$native.insertBefore(newElement$729.$native));
                }/*End dynamic block*/
            };$$nodeAbs.insertBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'newElement',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'referenceElement',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("insert the passed node to children before the reference node",60)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','insertBefore']};};
            $$nodeAbs.isDefaultNamespace=function isDefaultNamespace(namespaceURI$732){
                var $$nodeAbs=this;
                var isDefault$733;
                
                var case$734=namespaceURI$732;
                if ($$$cl1.isOfType(namespaceURI$732,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    isDefault$733=$$nodeAbs.$native.isDefaultNamespace(case$734.valueOf());/*End dynamic block*/
                }else if ($$$cl1.isOfType(namespaceURI$732,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    isDefault$733=$$nodeAbs.$native.isDefaultNamespace(case$734.$native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if(isDefault$733){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$nodeAbs.isDefaultNamespace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("is the passed namespace the default one",39)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','isDefaultNamespace']};};
            $$nodeAbs.isEqualNode=function isEqualNode(node$735){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                if($$nodeAbs.$native.isEqualNode(node$735)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$nodeAbs.isEqualNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("is the passed node equal to this one",36)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','isEqualNode']};};
            $$nodeAbs.lastChild=function lastChild(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                var lastChild$736=$$nodeAbs.$native.lastChild;
                $prop$getLastChild$736={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','lastChild','$at','lastChild']};}};
                $prop$getLastChild$736.get=function(){return lastChild$736};
                if((tmpvar$737=lastChild$736,tmpvar$738=null,(tmpvar$737.equals&&!tmpvar$737.equals(tmpvar$738))||tmpvar$737!==tmpvar$738)){
                    return Node(lastChild$736);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeAbs.lastChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the last child node of this node",40)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','lastChild']};};
            $$nodeAbs.lookupPrefix=function lookupPrefix(namespaceURI$739){
                var $$nodeAbs=this;
                var prefix$740;
                /*Begin dynamic block*/
                
                var case$741=namespaceURI$739;
                if ($$$cl1.isOfType(namespaceURI$739,{t:$$$cl1.String})) {
                    prefix$740=$$nodeAbs.$native.lookupPrefix(case$741.valueOf());
                }else if ($$$cl1.isOfType(namespaceURI$739,{t:$$$cocjl339.JSString})) {
                    prefix$740=$$nodeAbs.$native.lookupPrefix(case$741.$native);
                }else if ($$$cl1.isOfType(namespaceURI$739,{t:$$$cl1.Null})) {
                    prefix$740=$$nodeAbs.$native.lookupPrefix();
                }if((tmpvar$742=prefix$740,tmpvar$743=null,(tmpvar$742.equals&&!tmpvar$742.equals(tmpvar$743))||tmpvar$742!==tmpvar$743)){
                    return $$$cocjl339.JSString(prefix$740);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeAbs.lookupPrefix.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the prefix for the given namespaceURI",45)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','lookupPrefix']};};
            $$nodeAbs.nextSibling=function nextSibling(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                var nextSibling$744=$$nodeAbs.$native.nextSibling();
                $prop$getNextSibling$744={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','nextSibling','$at','nextSibling']};}};
                $prop$getNextSibling$744.get=function(){return nextSibling$744};
                if((tmpvar$745=nextSibling$744,tmpvar$746=null,(tmpvar$745.equals&&!tmpvar$745.equals(tmpvar$746))||tmpvar$745!==tmpvar$746)){
                    return Node(nextSibling$744);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeAbs.nextSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the node immediately after this node in the parents child nodes or null if none",87)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','nextSibling']};};
            $$nodeAbs.nodeName=function nodeName(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$nodeAbs.$native.nodeName);
                /*End dynamic block*/
            };$$nodeAbs.nodeName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the nodes name",22)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','nodeName']};};
            $$nodeAbs.nodeType=function nodeType(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                if((tmpvar$747=$$nodeAbs.$native.nodeType,tmpvar$748=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'212:26-212:29','node.ceylon'):Node).ELEMENT_NODE,(tmpvar$747.equals&&tmpvar$747.equals(tmpvar$748))||tmpvar$747===tmpvar$748)){
                    return getElementNode();
                }else {
                    if((tmpvar$749=$$nodeAbs.$native.nodeType,tmpvar$750=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'214:33-214:36','node.ceylon'):Node).ATTRIBUTE_NODE,(tmpvar$749.equals&&tmpvar$749.equals(tmpvar$750))||tmpvar$749===tmpvar$750)){
                        return getAttributeNode();
                    }else {
                        if((tmpvar$751=$$nodeAbs.$native.nodeType,tmpvar$752=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'216:33-216:36','node.ceylon'):Node).TEXT_NODE,(tmpvar$751.equals&&tmpvar$751.equals(tmpvar$752))||tmpvar$751===tmpvar$752)){
                            return getTextNode();
                        }else {
                            if((tmpvar$753=$$nodeAbs.$native.nodeType,tmpvar$754=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'218:33-218:36','node.ceylon'):Node).CDATA_SECTION_NODE,(tmpvar$753.equals&&tmpvar$753.equals(tmpvar$754))||tmpvar$753===tmpvar$754)){
                                return getCdataSectionNode();
                            }else {
                                if((tmpvar$755=$$nodeAbs.$native.nodeType,tmpvar$756=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'220:33-220:36','node.ceylon'):Node).ENTITY_REFERENCE_NODE,(tmpvar$755.equals&&tmpvar$755.equals(tmpvar$756))||tmpvar$755===tmpvar$756)){
                                    return getEntityReferenceNode();
                                }else {
                                    if((tmpvar$757=$$nodeAbs.$native.nodeType,tmpvar$758=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'222:33-222:36','node.ceylon'):Node).ENTITY_NODE,(tmpvar$757.equals&&tmpvar$757.equals(tmpvar$758))||tmpvar$757===tmpvar$758)){
                                        return getEntityNode();
                                    }else {
                                        if((tmpvar$759=$$nodeAbs.$native.nodeType,tmpvar$760=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'224:33-224:36','node.ceylon'):Node).PROCESSING_INSTRUCTION_NODE,(tmpvar$759.equals&&tmpvar$759.equals(tmpvar$760))||tmpvar$759===tmpvar$760)){
                                            return getProcessingInstructionNode();
                                        }else {
                                            if((tmpvar$761=$$nodeAbs.$native.nodeType,tmpvar$762=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'226:33-226:36','node.ceylon'):Node).COMMENT_NODE,(tmpvar$761.equals&&tmpvar$761.equals(tmpvar$762))||tmpvar$761===tmpvar$762)){
                                                return getCommentNode();
                                            }else {
                                                if((tmpvar$763=$$nodeAbs.$native.nodeType,tmpvar$764=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'228:33-228:36','node.ceylon'):Node).DOCUMENT_NODE,(tmpvar$763.equals&&tmpvar$763.equals(tmpvar$764))||tmpvar$763===tmpvar$764)){
                                                    return getDocumentNode();
                                                }else {
                                                    if((tmpvar$765=$$nodeAbs.$native.nodeType,tmpvar$766=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'230:33-230:36','node.ceylon'):Node).DOCUMENT_TYPE_NODE,(tmpvar$765.equals&&tmpvar$765.equals(tmpvar$766))||tmpvar$765===tmpvar$766)){
                                                        return getDocumentTypeNode();
                                                    }else {
                                                        if((tmpvar$767=$$nodeAbs.$native.nodeType,tmpvar$768=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'232:33-232:36','node.ceylon'):Node).DOCUMENT_FRAGMENT_NODE,(tmpvar$767.equals&&tmpvar$767.equals(tmpvar$768))||tmpvar$767===tmpvar$768)){
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
            };$$nodeAbs.nodeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeType},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the nodes type",22)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','nodeType']};};
            $$nodeAbs.getNodeValue=function getNodeValue(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                var val$769=$$nodeAbs.$native.nodeValue;
                $prop$getVal$769={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','getNodeValue','$at','val']};}};
                $prop$getVal$769.get=function(){return val$769};
                if((tmpvar$770=val$769,tmpvar$771=null,(tmpvar$770.equals&&!tmpvar$770.equals(tmpvar$771))||tmpvar$770!==tmpvar$771)){
                    return $$$cocjl339.JSString(val$769);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeAbs.getNodeValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the value of the current node",37)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','getNodeValue']};};
            $$nodeAbs.setNodeValue=function setNodeValue(val$772){
                var $$nodeAbs=this;
                
                var case$773=val$772;
                if ($$$cl1.isOfType(val$772,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$nodeAbs.$native.nodeValue=case$773.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(val$772,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$nodeAbs.$native.nodeValue=case$773.$native;
                    /*End dynamic block*/
                }
            };$$nodeAbs.setNodeValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the value of the current node",33)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','setNodeValue']};};
            $$nodeAbs.normalize=function normalize(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                $$nodeAbs.$native.normalize();
                /*End dynamic block*/
            };$$nodeAbs.normalize.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("clean up all the text nodes under this on",41)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','normalize']};};
            $$$cl1.defineAttr($$nodeAbs,'ownerDocument',function(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                return Document($$nodeAbs.$native.ownerDocument);
                /*End dynamic block*/
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Document},$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns nodes owning document",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$at','ownerDocument']};});$$nodeAbs.parentNode=function parentNode(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                var parent$774=$$nodeAbs.parentNode();
                $prop$getParent$774={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','parentNode','$at','parent']};}};
                $prop$getParent$774.get=function(){return parent$774};
                if((tmpvar$775=parent$774,tmpvar$776=null,(tmpvar$775.equals&&!tmpvar$775.equals(tmpvar$776))||tmpvar$775!==tmpvar$776)){
                    return Node(parent$774);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeAbs.parentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the parent node if any",30)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','parentNode']};};
            $$nodeAbs.prefix=function prefix(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                var prefix$777=$$nodeAbs.$native.prefix;
                $prop$getPrefix$777={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','prefix','$at','prefix']};}};
                $prop$getPrefix$777.get=function(){return prefix$777};
                if((tmpvar$778=prefix$777,tmpvar$779=null,(tmpvar$778.equals&&!tmpvar$778.equals(tmpvar$779))||tmpvar$778!==tmpvar$779)){
                    return $$$cocjl339.JSString(prefix$777);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeAbs.prefix.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("string of the nodes namespace prefix",36)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','prefix']};};
            $$nodeAbs.previousSibling=function previousSibling(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                var previousSibling$780=$$nodeAbs.$native.previousSibling();
                $prop$getPreviousSibling$780={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','previousSibling','$at','previousSibling']};}};
                $prop$getPreviousSibling$780.get=function(){return previousSibling$780};
                if((tmpvar$781=previousSibling$780,tmpvar$782=null,(tmpvar$781.equals&&!tmpvar$781.equals(tmpvar$782))||tmpvar$781!==tmpvar$782)){
                    return Node(previousSibling$780);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeAbs.previousSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the node immediately proceding this node in the parents child nodes or null if none",91)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','previousSibling']};};
            $$nodeAbs.removeChild=function removeChild(node$783){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                return Node($$nodeAbs.$native.removeChild(node$783.$native));
                /*End dynamic block*/
            };$$nodeAbs.removeChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("removes the child node and returns the removed node",51)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','removeChild']};};
            $$nodeAbs.replaceChild=function replaceChild(newChild$784,oldChild$785){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                return Node($$nodeAbs.$native.replaceChild(newChild$784.$native,oldChild$785.$native));
                /*End dynamic block*/
            };$$nodeAbs.replaceChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'newChild',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'oldChild',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("replaces the old node with the new one and returns the old node",63)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','replaceChild']};};
            $$nodeAbs.getTextContent=function getTextContent(){
                var $$nodeAbs=this;
                /*Begin dynamic block*/
                var content$786=$$nodeAbs.$native.textContent();
                $prop$getContent$786={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','getTextContent','$at','content']};}};
                $prop$getContent$786.get=function(){return content$786};
                if((tmpvar$787=content$786,tmpvar$788=null,(tmpvar$787.equals&&!tmpvar$787.equals(tmpvar$788))||tmpvar$787!==tmpvar$788)){
                    return $$$cocjl339.JSString(content$786);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeAbs.getTextContent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cocjl339.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the text content of the node and its descendents",56)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','getTextContent']};};
            $$nodeAbs.setTextContent=function setTextContent(content$789){
                var $$nodeAbs=this;
                
                var case$790=content$789;
                if ($$$cl1.isOfType(content$789,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$nodeAbs.$native.textContent=case$790.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(content$789,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$nodeAbs.$native.textContent=case$790.$native;
                    /*End dynamic block*/
                }
            };$$nodeAbs.setTextContent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'content',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the text content of the node and its descendents",52)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','setTextContent']};};
        })(NodeAbs.$$.prototype);
    }
    return NodeAbs;
}
exports.$init$NodeAbs=$init$NodeAbs;
$init$NodeAbs();
function Node(n$791, $$node){
    $init$Node();
    if ($$node===undefined)$$node=new Node.$$;
    $$node.n$791_=n$791;
    NodeAbs($$node);
    /*Begin dynamic block*/
    $$node.$native=$$node.n$791;/*End dynamic block*/
    return $$node;
}
Node.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a DOM Node",10)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','Node']};};
exports.Node=Node;
function $init$Node(){
    if (Node.$$===undefined){
        $$$cl1.initTypeProto(Node,'com.openswimsoftware.ceylon.js.dom::Node',$init$NodeAbs());
        (function($$node){
            $$$cl1.defineAttr($$node,'n$791',function(){return this.n$791_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Node,d:['com.openswimsoftware.ceylon.js.dom','Node','$at','n']};});
        })(Node.$$.prototype);
    }
    return Node;
}
exports.$init$Node=$init$Node;
$init$Node();
function NodeFilterResult(name$792, $$nodeFilterResult){
    $init$NodeFilterResult();
    if ($$nodeFilterResult===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$nodeFilterResult.name$792_=name$792;
    return $$nodeFilterResult;
}
NodeFilterResult.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],of:[{t:filterAccept$793},{t:filterReject$794},{t:filterSkip$795}],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','NodeFilterResult']};};
exports.NodeFilterResult=NodeFilterResult;
function $init$NodeFilterResult(){
    if (NodeFilterResult.$$===undefined){
        $$$cl1.initTypeProto(NodeFilterResult,'com.openswimsoftware.ceylon.js.dom::NodeFilterResult',$$$cl1.Basic);
        (function($$nodeFilterResult){
            $$$cl1.defineAttr($$nodeFilterResult,'name$792',function(){return this.name$792_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:NodeFilterResult,d:['com.openswimsoftware.ceylon.js.dom','NodeFilterResult','$at','name']};});
        })(NodeFilterResult.$$.prototype);
    }
    return NodeFilterResult;
}
exports.$init$NodeFilterResult=$init$NodeFilterResult;
$init$NodeFilterResult();
function filterAccept$793(){
    var $$filterAccept=new filterAccept$793.$$;
    NodeFilterResult($$$cl1.String("filterAccept",12),$$filterAccept);
    return $$filterAccept;
};filterAccept$793.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeFilterResult},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','filterAccept']};};
function $init$filterAccept$793(){
    if (filterAccept$793.$$===undefined){
        $$$cl1.initTypeProto(filterAccept$793,'com.openswimsoftware.ceylon.js.dom::filterAccept',$init$NodeFilterResult());
    }
    return filterAccept$793;
}
exports.$init$filterAccept$793=$init$filterAccept$793;
$init$filterAccept$793();
var filterAccept$796;
function getFilterAccept(){
    if (filterAccept$796===undefined){filterAccept$796=$init$filterAccept$793()();filterAccept$796.$$metamodel$$=getFilterAccept.$$metamodel$$;}
    return filterAccept$796;
}
exports.getFilterAccept=getFilterAccept;
getFilterAccept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:filterAccept$793},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','filterAccept']};};
$prop$getFilterAccept={get:getFilterAccept,$$metamodel$$:getFilterAccept.$$metamodel$$};
exports.$prop$getFilterAccept=$prop$getFilterAccept;
function filterReject$794(){
    var $$filterReject=new filterReject$794.$$;
    NodeFilterResult($$$cl1.String("filterReject",12),$$filterReject);
    return $$filterReject;
};filterReject$794.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeFilterResult},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','filterReject']};};
function $init$filterReject$794(){
    if (filterReject$794.$$===undefined){
        $$$cl1.initTypeProto(filterReject$794,'com.openswimsoftware.ceylon.js.dom::filterReject',$init$NodeFilterResult());
    }
    return filterReject$794;
}
exports.$init$filterReject$794=$init$filterReject$794;
$init$filterReject$794();
var filterReject$797;
function getFilterReject(){
    if (filterReject$797===undefined){filterReject$797=$init$filterReject$794()();filterReject$797.$$metamodel$$=getFilterReject.$$metamodel$$;}
    return filterReject$797;
}
exports.getFilterReject=getFilterReject;
getFilterReject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:filterReject$794},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','filterReject']};};
$prop$getFilterReject={get:getFilterReject,$$metamodel$$:getFilterReject.$$metamodel$$};
exports.$prop$getFilterReject=$prop$getFilterReject;
function filterSkip$795(){
    var $$filterSkip=new filterSkip$795.$$;
    NodeFilterResult($$$cl1.String("filterSkip",10),$$filterSkip);
    return $$filterSkip;
};filterSkip$795.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeFilterResult},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','filterSkip']};};
function $init$filterSkip$795(){
    if (filterSkip$795.$$===undefined){
        $$$cl1.initTypeProto(filterSkip$795,'com.openswimsoftware.ceylon.js.dom::filterSkip',$init$NodeFilterResult());
    }
    return filterSkip$795;
}
exports.$init$filterSkip$795=$init$filterSkip$795;
$init$filterSkip$795();
var filterSkip$798;
function getFilterSkip(){
    if (filterSkip$798===undefined){filterSkip$798=$init$filterSkip$795()();filterSkip$798.$$metamodel$$=getFilterSkip.$$metamodel$$;}
    return filterSkip$798;
}
exports.getFilterSkip=getFilterSkip;
getFilterSkip.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:filterSkip$795},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','filterSkip']};};
$prop$getFilterSkip={get:getFilterSkip,$$metamodel$$:getFilterSkip.$$metamodel$$};
exports.$prop$getFilterSkip=$prop$getFilterSkip;
function NodeFilter(acceptNode$799, $$nodeFilter){
    $init$NodeFilter();
    if ($$nodeFilter===undefined)$$nodeFilter=new NodeFilter.$$;
    $$nodeFilter.acceptNode$799_=acceptNode$799;
    $$nodeFilter.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeFilter,$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeFilter','$at','native']};}};
    /*Begin dynamic block*/
    $$nodeFilter.$native=(typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'11:11-11:16','nodefilter.ceylon'):Object)();$$nodeFilter.$native.acceptNode=$$$cl1.$JsCallable($$nodeFilter.acceptNode$799/*TODO: callable targs 6*/);
    /*End dynamic block*/
    return $$nodeFilter;
}
NodeFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'acceptNode',$mt:'prm',$pt:'f',$t:{t:NodeFilterResult},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Node Filter",11)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeFilter']};};
exports.NodeFilter=NodeFilter;
function $init$NodeFilter(){
    if (NodeFilter.$$===undefined){
        $$$cl1.initTypeProto(NodeFilter,'com.openswimsoftware.ceylon.js.dom::NodeFilter',$$$cl1.Basic);
        (function($$nodeFilter){
            $$$cl1.defineAttr($$nodeFilter,'acceptNode$799',function(){return this.acceptNode$799_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:NodeFilterResult},$ps:[{$nm:'n',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeFilter,d:['com.openswimsoftware.ceylon.js.dom','NodeFilter','$m','acceptNode']};});
        })(NodeFilter.$$.prototype);
    }
    return NodeFilter;
}
exports.$init$NodeFilter=$init$NodeFilter;
$init$NodeFilter();
function NodeIteratorAbs($$nodeIteratorAbs){
    $init$NodeIteratorAbs();
    if ($$nodeIteratorAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$nodeIteratorAbs);
    return $$nodeIteratorAbs;
}
NodeIteratorAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','NodeIteratorAbs']};};
exports.NodeIteratorAbs=NodeIteratorAbs;
function $init$NodeIteratorAbs(){
    if (NodeIteratorAbs.$$===undefined){
        $$$cl1.initTypeProto(NodeIteratorAbs,'com.openswimsoftware.ceylon.js.dom::NodeIteratorAbs',$$$cocjl339.JSObjectAbs);
        (function($$nodeIteratorAbs){
            $$nodeIteratorAbs.root=function root(){
                var $$nodeIteratorAbs=this;
                /*Begin dynamic block*/
                return Node($$nodeIteratorAbs.$native.root);
                /*End dynamic block*/
            };$$nodeIteratorAbs.root.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the iterators root node",31)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeIteratorAbs','$m','root']};};
            $$nodeIteratorAbs.whatToShow=function whatToShow(){
                var $$nodeIteratorAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$800=$$nodeIteratorAbs.$native.whatToShow,$$$cl1.isOfType(tmpvar$800,{t:$$$cl1.Anything})?tmpvar$800:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'16:19-16:35','nodeiterator.ceylon'));
                /*End dynamic block*/
            };$$nodeIteratorAbs.whatToShow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("return long representing what types of nodes the iterator shows",63)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeIteratorAbs','$m','whatToShow']};};
            $$nodeIteratorAbs.filter=function filter(){
                var $$nodeIteratorAbs=this;
                /*Begin dynamic block*/
                var filter$801=$$nodeIteratorAbs.$native.filter;
                $prop$getFilter$801={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','NodeIteratorAbs','$m','filter','$at','filter']};}};
                $prop$getFilter$801.get=function(){return filter$801};
                if((tmpvar$802=filter$801,tmpvar$803=null,(tmpvar$802.equals&&!tmpvar$802.equals(tmpvar$803))||tmpvar$802!==tmpvar$803)){
                    return NodeFilter((tmpvar$804=filter$801,$$$cl1.isOfType(tmpvar$804,{t:NodeFilterResult})?tmpvar$804:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'25:34-25:39','nodeiterator.ceylon')));
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeIteratorAbs.filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:NodeFilter}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("return the iterator filter if any",33)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeIteratorAbs','$m','filter']};};
            $$nodeIteratorAbs.nextNode=function nextNode(){
                var $$nodeIteratorAbs=this;
                /*Begin dynamic block*/
                var next$805=$$nodeIteratorAbs.$native.nextNode();
                $prop$getNext$805={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','NodeIteratorAbs','$m','nextNode','$at','next']};}};
                $prop$getNext$805.get=function(){return next$805};
                if((tmpvar$806=next$805,tmpvar$807=null,(tmpvar$806.equals&&!tmpvar$806.equals(tmpvar$807))||tmpvar$806!==tmpvar$807)){
                    return Node(next$805);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeIteratorAbs.nextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("return the next node",20)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeIteratorAbs','$m','nextNode']};};
            $$nodeIteratorAbs.previousNode=function previousNode(){
                var $$nodeIteratorAbs=this;
                /*Begin dynamic block*/
                var previous$808=$$nodeIteratorAbs.$native.previousNode();
                $prop$getPrevious$808={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','NodeIteratorAbs','$m','previousNode','$at','previous']};}};
                $prop$getPrevious$808.get=function(){return previous$808};
                if((tmpvar$809=previous$808,tmpvar$810=null,(tmpvar$809.equals&&!tmpvar$809.equals(tmpvar$810))||tmpvar$809!==tmpvar$810)){
                    return Node(previous$808);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeIteratorAbs.previousNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("return the previous node",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeIteratorAbs','$m','previousNode']};};
        })(NodeIteratorAbs.$$.prototype);
    }
    return NodeIteratorAbs;
}
exports.$init$NodeIteratorAbs=$init$NodeIteratorAbs;
$init$NodeIteratorAbs();
function NodeIterator(n$811, $$nodeIterator){
    $init$NodeIterator();
    if ($$nodeIterator===undefined)$$nodeIterator=new NodeIterator.$$;
    $$nodeIterator.n$811_=n$811;
    NodeIteratorAbs($$nodeIterator);
    $$nodeIterator.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeIterator,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','NodeIterator','$at','native']};}};
    /*Begin dynamic block*/
    $$nodeIterator.$native=$$nodeIterator.n$811;/*End dynamic block*/
    return $$nodeIterator;
}
NodeIterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeIteratorAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a DOM NodeIterator",18)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeIterator']};};
exports.NodeIterator=NodeIterator;
function $init$NodeIterator(){
    if (NodeIterator.$$===undefined){
        $$$cl1.initTypeProto(NodeIterator,'com.openswimsoftware.ceylon.js.dom::NodeIterator',$init$NodeIteratorAbs());
        (function($$nodeIterator){
            $$$cl1.defineAttr($$nodeIterator,'n$811',function(){return this.n$811_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeIterator,d:['com.openswimsoftware.ceylon.js.dom','NodeIterator','$at','n']};});
        })(NodeIterator.$$.prototype);
    }
    return NodeIterator;
}
exports.$init$NodeIterator=$init$NodeIterator;
$init$NodeIterator();
function NodeListAbs($$nodeListAbs){
    $init$NodeListAbs();
    if ($$nodeListAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$nodeListAbs);
    return $$nodeListAbs;
}
NodeListAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','NodeListAbs']};};
exports.NodeListAbs=NodeListAbs;
function $init$NodeListAbs(){
    if (NodeListAbs.$$===undefined){
        $$$cl1.initTypeProto(NodeListAbs,'com.openswimsoftware.ceylon.js.dom::NodeListAbs',$$$cocjl339.JSObjectAbs);
        (function($$nodeListAbs){
            $$nodeListAbs.item=function item(index$812){
                var $$nodeListAbs=this;
                var item$813;
                
                var case$814=index$812;
                if ($$$cl1.isOfType(index$812,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    item$813=$$nodeListAbs.$native.item(case$814);/*End dynamic block*/
                }else if ($$$cl1.isOfType(index$812,{t:$$$cocjl339.JSNumber})) {
                    /*Begin dynamic block*/
                    item$813=$$nodeListAbs.$native.item(case$814.$native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if((tmpvar$815=item$813,tmpvar$816=null,(tmpvar$815.equals&&!tmpvar$815.equals(tmpvar$816))||tmpvar$815!==tmpvar$816)){
                    return Node(item$813);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$nodeListAbs.item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[{$nm:'index',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}}],$cont:NodeListAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns he node at the given index",34)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeListAbs','$m','item']};};
            $$nodeListAbs.length=function length(){
                var $$nodeListAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$nodeListAbs.$native.length);
                /*End dynamic block*/
            };$$nodeListAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:NodeListAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the length of the node collection",41)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeListAbs','$m','length']};};
        })(NodeListAbs.$$.prototype);
    }
    return NodeListAbs;
}
exports.$init$NodeListAbs=$init$NodeListAbs;
$init$NodeListAbs();
function NodeList(n$817, $$nodeList){
    $init$NodeList();
    if ($$nodeList===undefined)$$nodeList=new NodeList.$$;
    $$nodeList.n$817_=n$817;
    NodeListAbs($$nodeList);
    $$nodeList.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','NodeList','$at','native']};}};
    /*Begin dynamic block*/
    $$nodeList.$native=$$nodeList.n$817;/*End dynamic block*/
    return $$nodeList;
}
NodeList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeListAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("collection of DOM nodes",23)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeList']};};
exports.NodeList=NodeList;
function $init$NodeList(){
    if (NodeList.$$===undefined){
        $$$cl1.initTypeProto(NodeList,'com.openswimsoftware.ceylon.js.dom::NodeList',$init$NodeListAbs());
        (function($$nodeList){
            $$$cl1.defineAttr($$nodeList,'n$817',function(){return this.n$817_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeList,d:['com.openswimsoftware.ceylon.js.dom','NodeList','$at','n']};});
        })(NodeList.$$.prototype);
    }
    return NodeList;
}
exports.$init$NodeList=$init$NodeList;
$init$NodeList();
exports.$pkg$ans$com$openswimsoftware$ceylon$js$dom=function(){return[$$$cl1.shared()];};
function ProcessingInstructionAbs($$processingInstructionAbs){
    $init$ProcessingInstructionAbs();
    if ($$processingInstructionAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    NodeAbs($$processingInstructionAbs);
    return $$processingInstructionAbs;
}
ProcessingInstructionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','ProcessingInstructionAbs']};};
exports.ProcessingInstructionAbs=ProcessingInstructionAbs;
function $init$ProcessingInstructionAbs(){
    if (ProcessingInstructionAbs.$$===undefined){
        $$$cl1.initTypeProto(ProcessingInstructionAbs,'com.openswimsoftware.ceylon.js.dom::ProcessingInstructionAbs',$init$NodeAbs());
        (function($$processingInstructionAbs){
            $$processingInstructionAbs.getData=function getData(){
                var $$processingInstructionAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$processingInstructionAbs.$native.data);
                /*End dynamic block*/
            };$$processingInstructionAbs.getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:ProcessingInstructionAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("get the processing instruction data",35)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ProcessingInstructionAbs','$m','getData']};};
            $$processingInstructionAbs.setData=function setData(data$818){
                var $$processingInstructionAbs=this;
                
                var case$819=data$818;
                if ($$$cl1.isOfType(data$818,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$processingInstructionAbs.$native.data=case$819.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$818,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$processingInstructionAbs.$native.data=case$819.$native;
                    /*End dynamic block*/
                }
            };$$processingInstructionAbs.setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:ProcessingInstructionAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the processing instruction data",35)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ProcessingInstructionAbs','$m','setData']};};
            $$processingInstructionAbs.target=function target(){
                var $$processingInstructionAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$processingInstructionAbs.$native.target);
                /*End dynamic block*/
            };$$processingInstructionAbs.target.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:ProcessingInstructionAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("the processing instruction target",33)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ProcessingInstructionAbs','$m','target']};};
        })(ProcessingInstructionAbs.$$.prototype);
    }
    return ProcessingInstructionAbs;
}
exports.$init$ProcessingInstructionAbs=$init$ProcessingInstructionAbs;
$init$ProcessingInstructionAbs();
function ProcessingInstruction(n$820, $$processingInstruction){
    $init$ProcessingInstruction();
    if ($$processingInstruction===undefined)$$processingInstruction=new ProcessingInstruction.$$;
    $$processingInstruction.n$820_=n$820;
    ProcessingInstructionAbs($$processingInstruction);
    $$processingInstruction.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:ProcessingInstruction,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','ProcessingInstruction','$at','native']};}};
    /*Begin dynamic block*/
    $$processingInstruction.$native=$$processingInstruction.n$820;/*End dynamic block*/
    return $$processingInstruction;
}
ProcessingInstruction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:ProcessingInstructionAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Processing Instruction",22)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ProcessingInstruction']};};
exports.ProcessingInstruction=ProcessingInstruction;
function $init$ProcessingInstruction(){
    if (ProcessingInstruction.$$===undefined){
        $$$cl1.initTypeProto(ProcessingInstruction,'com.openswimsoftware.ceylon.js.dom::ProcessingInstruction',$init$ProcessingInstructionAbs());
        (function($$processingInstruction){
            $$$cl1.defineAttr($$processingInstruction,'n$820',function(){return this.n$820_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:ProcessingInstruction,d:['com.openswimsoftware.ceylon.js.dom','ProcessingInstruction','$at','n']};});
        })(ProcessingInstruction.$$.prototype);
    }
    return ProcessingInstruction;
}
exports.$init$ProcessingInstruction=$init$ProcessingInstruction;
$init$ProcessingInstruction();
function RangeCompareHow(name$821, $$rangeCompareHow){
    $init$RangeCompareHow();
    if ($$rangeCompareHow===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$rangeCompareHow.name$821_=name$821;
    return $$rangeCompareHow;
}
RangeCompareHow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],of:[{t:endToEnd$822},{t:endToStart$823},{t:startToEnd$824},{t:startToStart$825}],$an:function(){return[$$$cl1.doc($$$cl1.String("how to comare ranges",20)),$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','RangeCompareHow']};};
exports.RangeCompareHow=RangeCompareHow;
function $init$RangeCompareHow(){
    if (RangeCompareHow.$$===undefined){
        $$$cl1.initTypeProto(RangeCompareHow,'com.openswimsoftware.ceylon.js.dom::RangeCompareHow',$$$cl1.Basic);
        (function($$rangeCompareHow){
            $$$cl1.defineAttr($$rangeCompareHow,'name$821',function(){return this.name$821_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:RangeCompareHow,d:['com.openswimsoftware.ceylon.js.dom','RangeCompareHow','$at','name']};});
        })(RangeCompareHow.$$.prototype);
    }
    return RangeCompareHow;
}
exports.$init$RangeCompareHow=$init$RangeCompareHow;
$init$RangeCompareHow();
function endToEnd$822(){
    var $$endToEnd=new endToEnd$822.$$;
    RangeCompareHow($$$cl1.String("endToEnd",8),$$endToEnd);
    return $$endToEnd;
};endToEnd$822.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RangeCompareHow},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','endToEnd']};};
function $init$endToEnd$822(){
    if (endToEnd$822.$$===undefined){
        $$$cl1.initTypeProto(endToEnd$822,'com.openswimsoftware.ceylon.js.dom::endToEnd',$init$RangeCompareHow());
    }
    return endToEnd$822;
}
exports.$init$endToEnd$822=$init$endToEnd$822;
$init$endToEnd$822();
var endToEnd$826;
function getEndToEnd(){
    if (endToEnd$826===undefined){endToEnd$826=$init$endToEnd$822()();endToEnd$826.$$metamodel$$=getEndToEnd.$$metamodel$$;}
    return endToEnd$826;
}
exports.getEndToEnd=getEndToEnd;
getEndToEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:endToEnd$822},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','endToEnd']};};
$prop$getEndToEnd={get:getEndToEnd,$$metamodel$$:getEndToEnd.$$metamodel$$};
exports.$prop$getEndToEnd=$prop$getEndToEnd;
function endToStart$823(){
    var $$endToStart=new endToStart$823.$$;
    RangeCompareHow($$$cl1.String("endToStart",10),$$endToStart);
    return $$endToStart;
};endToStart$823.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RangeCompareHow},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','endToStart']};};
function $init$endToStart$823(){
    if (endToStart$823.$$===undefined){
        $$$cl1.initTypeProto(endToStart$823,'com.openswimsoftware.ceylon.js.dom::endToStart',$init$RangeCompareHow());
    }
    return endToStart$823;
}
exports.$init$endToStart$823=$init$endToStart$823;
$init$endToStart$823();
var endToStart$827;
function getEndToStart(){
    if (endToStart$827===undefined){endToStart$827=$init$endToStart$823()();endToStart$827.$$metamodel$$=getEndToStart.$$metamodel$$;}
    return endToStart$827;
}
exports.getEndToStart=getEndToStart;
getEndToStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:endToStart$823},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','endToStart']};};
$prop$getEndToStart={get:getEndToStart,$$metamodel$$:getEndToStart.$$metamodel$$};
exports.$prop$getEndToStart=$prop$getEndToStart;
function startToEnd$824(){
    var $$startToEnd=new startToEnd$824.$$;
    RangeCompareHow($$$cl1.String("startToEnd",10),$$startToEnd);
    return $$startToEnd;
};startToEnd$824.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RangeCompareHow},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','startToEnd']};};
function $init$startToEnd$824(){
    if (startToEnd$824.$$===undefined){
        $$$cl1.initTypeProto(startToEnd$824,'com.openswimsoftware.ceylon.js.dom::startToEnd',$init$RangeCompareHow());
    }
    return startToEnd$824;
}
exports.$init$startToEnd$824=$init$startToEnd$824;
$init$startToEnd$824();
var startToEnd$828;
function getStartToEnd(){
    if (startToEnd$828===undefined){startToEnd$828=$init$startToEnd$824()();startToEnd$828.$$metamodel$$=getStartToEnd.$$metamodel$$;}
    return startToEnd$828;
}
exports.getStartToEnd=getStartToEnd;
getStartToEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:startToEnd$824},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','startToEnd']};};
$prop$getStartToEnd={get:getStartToEnd,$$metamodel$$:getStartToEnd.$$metamodel$$};
exports.$prop$getStartToEnd=$prop$getStartToEnd;
function startToStart$825(){
    var $$startToStart=new startToStart$825.$$;
    RangeCompareHow($$$cl1.String("startToStart",12),$$startToStart);
    return $$startToStart;
};startToStart$825.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RangeCompareHow},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','startToStart']};};
function $init$startToStart$825(){
    if (startToStart$825.$$===undefined){
        $$$cl1.initTypeProto(startToStart$825,'com.openswimsoftware.ceylon.js.dom::startToStart',$init$RangeCompareHow());
    }
    return startToStart$825;
}
exports.$init$startToStart$825=$init$startToStart$825;
$init$startToStart$825();
var startToStart$829;
function getStartToStart(){
    if (startToStart$829===undefined){startToStart$829=$init$startToStart$825()();startToStart$829.$$metamodel$$=getStartToStart.$$metamodel$$;}
    return startToStart$829;
}
exports.getStartToStart=getStartToStart;
getStartToStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:startToStart$825},$an:function(){return[$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','startToStart']};};
$prop$getStartToStart={get:getStartToStart,$$metamodel$$:getStartToStart.$$metamodel$$};
exports.$prop$getStartToStart=$prop$getStartToStart;
function RangeAbs($$rangeAbs){
    $init$RangeAbs();
    if ($$rangeAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$rangeAbs);
    return $$rangeAbs;
}
RangeAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs']};};
exports.RangeAbs=RangeAbs;
function $init$RangeAbs(){
    if (RangeAbs.$$===undefined){
        $$$cl1.initTypeProto(RangeAbs,'com.openswimsoftware.ceylon.js.dom::RangeAbs',$$$cocjl339.JSObjectAbs);
        (function($$rangeAbs){
            $$rangeAbs.startContainer=function startContainer(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                return Node($$rangeAbs.$native.startContainer);
                /*End dynamic block*/
            };$$rangeAbs.startContainer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the node where the container range begins",49)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','startContainer']};};
            $$rangeAbs.endContainer=function endContainer(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                return Node($$rangeAbs.$native.endContainer);
                /*End dynamic block*/
            };$$rangeAbs.endContainer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the node where the container range ends",47)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','endContainer']};};
            $$rangeAbs.startOffset=function startOffset(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$rangeAbs.$native.startOffset);
                /*End dynamic block*/
            };$$rangeAbs.startOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a number where the container range begins",49)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','startOffset']};};
            $$rangeAbs.endOffset=function endOffset(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$rangeAbs.$native.endOffset);
                /*End dynamic block*/
            };$$rangeAbs.endOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a number where the container range ends",47)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','endOffset']};};
            $$rangeAbs.collapsed=function collapsed(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                if($$rangeAbs.$native.collapsed()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$rangeAbs.collapsed.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("is the start and end nodes the same node",40)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','collapsed']};};
            $$rangeAbs.commonAncestorContainer=function commonAncestorContainer(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                return Node($$rangeAbs.$native.commonAncestorContainer);
                /*End dynamic block*/
            };$$rangeAbs.commonAncestorContainer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the deepest Node that contains the startContainer and endContainer nodes",80)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','commonAncestorContainer']};};
            $$rangeAbs.setStart=function setStart(startNode$830,startOffset$831){
                var $$rangeAbs=this;
                
                var case$832=startOffset$831;
                if ($$$cl1.isOfType(startOffset$831,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$rangeAbs.$native.setStart(startNode$830,case$832);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(startOffset$831,{t:$$$cocjl339.JSNumber})) {
                    /*Begin dynamic block*/
                    $$rangeAbs.$native.setStart(startNode$830,case$832.$native);
                    /*End dynamic block*/
                }
            };$$rangeAbs.setStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'startNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'startOffset',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the start position of the range",35)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','setStart']};};
            $$rangeAbs.setEnd=function setEnd(endNode$833,endOffset$834){
                var $$rangeAbs=this;
                
                var case$835=endOffset$834;
                if ($$$cl1.isOfType(endOffset$834,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    $$rangeAbs.$native.setEnd(endNode$833,case$835);
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(endOffset$834,{t:$$$cocjl339.JSNumber})) {
                    /*Begin dynamic block*/
                    $$rangeAbs.$native.setEnd(endNode$833,case$835.$native);
                    /*End dynamic block*/
                }
            };$$rangeAbs.setEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'endNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'endOffset',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the end position of the range",33)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','setEnd']};};
            $$rangeAbs.setStartBefore=function setStartBefore(refNode$836){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.setStartBefore(refNode$836);
                /*End dynamic block*/
            };$$rangeAbs.setStartBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the start position of the range relative to the given node",62)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','setStartBefore']};};
            $$rangeAbs.setStartAfter=function setStartAfter(refNode$837){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.setStartAfter(refNode$837);
                /*End dynamic block*/
            };$$rangeAbs.setStartAfter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the start position of the range relative to the given node",62)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','setStartAfter']};};
            $$rangeAbs.setEndBefore=function setEndBefore(refNode$838){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.setEndBefore(refNode$838);
                /*End dynamic block*/
            };$$rangeAbs.setEndBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the end position of the range relative to the given node",60)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','setEndBefore']};};
            $$rangeAbs.setEndAfter=function setEndAfter(refNode$839){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.setEndAfter(refNode$839);
                /*End dynamic block*/
            };$$rangeAbs.setEndAfter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the end position of the range relative to the given node",60)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','setEndAfter']};};
            $$rangeAbs.collapse$defs$toStart=function(toStart$840){var $$rangeAbs=this;
            return null;};
            $$rangeAbs.collapse=function collapse(toStart$840){
                var $$rangeAbs=this;
                if(toStart$840===undefined){toStart$840=$$rangeAbs.collapse$defs$toStart(toStart$840);}
                /*Begin dynamic block*/
                var s$841;
                if((s$841=toStart$840)!==null){
                    $$rangeAbs.$native.collapse(s$841);
                }else {
                    $$rangeAbs.$native.collapse();
                }/*End dynamic block*/
            };$$rangeAbs.collapse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'toStart',$mt:'prm',$def:1,$t:{t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("collapses the range to one of its boundery points",49)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','collapse']};};
            $$rangeAbs.selectNode=function selectNode(refNode$842){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.selectNode(refNode$842);
                /*End dynamic block*/
            };$$rangeAbs.selectNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the range to contain node and its contents",46)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','selectNode']};};
            $$rangeAbs.selectNodeContents=function selectNodeContents(refNode$843){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.selectNodeContents(refNode$843);
                /*End dynamic block*/
            };$$rangeAbs.selectNodeContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("set the range to contain the contents of the given node",55)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','selectNodeContents']};};
            $$rangeAbs.compareBoundaryPoints=function compareBoundaryPoints(how$844,sourceRange$845){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                
                var case$846=how$844;
                if (case$846===getEndToEnd()) {
                    return $$$cocjl339.JSNumber($$rangeAbs.$native.compareBoundaryPoints((typeof Range==='undefined'||Range===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Range")),'147:61-147:65','range.ceylon'):Range).START_TO_START,sourceRange$845));
                }else if (case$846===getEndToStart()) {
                    return $$$cocjl339.JSNumber($$rangeAbs.$native.compareBoundaryPoints((typeof Range==='undefined'||Range===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Range")),'150:61-150:65','range.ceylon'):Range).START_TO_END,sourceRange$845));
                }else if (case$846===getStartToEnd()) {
                    return $$$cocjl339.JSNumber($$rangeAbs.$native.compareBoundaryPoints((typeof Range==='undefined'||Range===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Range")),'153:61-153:65','range.ceylon'):Range).END_TO_END,sourceRange$845));
                }else if (case$846===getStartToStart()) {
                    return $$$cocjl339.JSNumber($$rangeAbs.$native.compareBoundaryPoints((typeof Range==='undefined'||Range===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Range")),'156:61-156:65','range.ceylon'):Range).END_TO_START,sourceRange$845));
                }/*End dynamic block*/
            };$$rangeAbs.compareBoundaryPoints.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[{$nm:'how',$mt:'prm',$t:{t:RangeCompareHow},$an:function(){return[];}},{$nm:'sourceRange',$mt:'prm',$t:{t:Range},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("compare the boundery points of one range with another",53)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','compareBoundaryPoints']};};
            $$rangeAbs.deleteContents=function deleteContents(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.deleteContents();
                /*End dynamic block*/
            };$$rangeAbs.deleteContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("remove the contents of range from the document",46)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','deleteContents']};};
            $$rangeAbs.extractContents=function extractContents(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                return DocumentFragment($$rangeAbs.$native.extractContents());
                /*End dynamic block*/
            };$$rangeAbs.extractContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentFragment},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("move the contents of the range from their document to a new document fragment",77)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','extractContents']};};
            $$rangeAbs.cloneContents=function cloneContents(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                return DocumentFragment($$rangeAbs.$native.cloneContents());
                /*End dynamic block*/
            };$$rangeAbs.cloneContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentFragment},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("creates a new document copying the nodes inside of the range",60)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','cloneContents']};};
            $$rangeAbs.insertNode=function insertNode(newNode$847){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.insertNode(newNode$847);
                /*End dynamic block*/
            };$$rangeAbs.insertNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'newNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("insert a node at the start of the range",39)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','insertNode']};};
            $$rangeAbs.surroundContents=function surroundContents(newNode$848){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.surroundContents(newNode$848);
                /*End dynamic block*/
            };$$rangeAbs.surroundContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'newNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("move the contents of the range into the new node",48)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','surroundContents']};};
            $$rangeAbs.cloneRange=function cloneRange(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                return Range($$rangeAbs.$native.cloneRange());
                /*End dynamic block*/
            };$$rangeAbs.cloneRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Range},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("clone the range",15)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','cloneRange']};};
            $$rangeAbs.detach=function detach(){
                var $$rangeAbs=this;
                /*Begin dynamic block*/
                $$rangeAbs.$native.detach();
                /*End dynamic block*/
            };$$rangeAbs.detach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("detach a range from use to free resources",41)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','detach']};};
            $$rangeAbs.isPointInRange=function isPointInRange(node$849,offset$850){
                var $$rangeAbs=this;
                var inRange$851;
                
                var case$852=offset$850;
                if ($$$cl1.isOfType(offset$850,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    inRange$851=$$rangeAbs.$native.isPointInRange(node$849,case$852);/*End dynamic block*/
                }else if ($$$cl1.isOfType(offset$850,{t:$$$cocjl339.JSNumber})) {
                    /*Begin dynamic block*/
                    inRange$851=$$rangeAbs.$native.isPointInRange(node$849,case$852.$native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if(inRange$851){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$rangeAbs.isPointInRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'offset',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("is the the current point in the range",37)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','isPointInRange']};};
        })(RangeAbs.$$.prototype);
    }
    return RangeAbs;
}
exports.$init$RangeAbs=$init$RangeAbs;
$init$RangeAbs();
function Range(n$853, $$range){
    $init$Range();
    if ($$range===undefined)$$range=new Range.$$;
    $$range.n$853_=n$853;
    RangeAbs($$range);
    $$range.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Range,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','Range','$at','native']};}};
    /*Begin dynamic block*/
    $$range.$native=$$range.n$853;/*End dynamic block*/
    return $$range;
}
Range.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RangeAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("DOM range",9)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','Range']};};
exports.Range=Range;
function $init$Range(){
    if (Range.$$===undefined){
        $$$cl1.initTypeProto(Range,'com.openswimsoftware.ceylon.js.dom::Range',$init$RangeAbs());
        (function($$range){
            $$$cl1.defineAttr($$range,'n$853',function(){return this.n$853_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Range,d:['com.openswimsoftware.ceylon.js.dom','Range','$at','n']};});
        })(Range.$$.prototype);
    }
    return Range;
}
exports.$init$Range=$init$Range;
$init$Range();
function MediaListAbs$stylesheets($$mediaListAbs){
    $init$MediaListAbs$stylesheets();
    if ($$mediaListAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$mediaListAbs);
    return $$mediaListAbs;
}
MediaListAbs$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaListAbs']};};
exports.MediaListAbs$stylesheets=MediaListAbs$stylesheets;
function $init$MediaListAbs$stylesheets(){
    if (MediaListAbs$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(MediaListAbs$stylesheets,'com.openswimsoftware.ceylon.js.dom.stylesheets::MediaListAbs',$$$cocjl339.JSObjectAbs);
        (function($$mediaListAbs){
            $$mediaListAbs.getMediaText=function getMediaText(){
                var $$mediaListAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$mediaListAbs.$native.mediaText);
                /*End dynamic block*/
            };$$mediaListAbs.getMediaText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.doc($$$cl1.String("serializes Media Queries",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaListAbs','$m','getMediaText']};};
            $$mediaListAbs.setMediaText=function setMediaText(text$854){
                var $$mediaListAbs=this;
                
                var case$855=text$854;
                if ($$$cl1.isOfType(text$854,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$mediaListAbs.$native.mediaText=case$855.valueOf();
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(text$854,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$mediaListAbs.$native.mediaText=case$855.$native;
                    /*End dynamic block*/
                }
            };$$mediaListAbs.setMediaText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.doc($$$cl1.String("sets the media list to a string of Media Queries",48)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaListAbs','$m','setMediaText']};};
            $$mediaListAbs.length=function length(){
                var $$mediaListAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$mediaListAbs.$native.length);
                /*End dynamic block*/
            };$$mediaListAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the number of Media Queries in the Collection",53)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaListAbs','$m','length']};};
            $$mediaListAbs.item=function item(index$856){
                var $$mediaListAbs=this;
                
                var case$857=index$856;
                if ($$$cl1.isOfType(index$856,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    return $$$cocjl339.JSString($$mediaListAbs.$native.item(case$857));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(index$856,{t:$$$cocjl339.JSNumber})) {
                    /*Begin dynamic block*/
                    return $$$cocjl339.JSString($$mediaListAbs.$native.item(case$857.$native));
                    /*End dynamic block*/
                }
            };$$mediaListAbs.item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[{$nm:'index',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Media Query at the specified index",42)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaListAbs','$m','item']};};
            $$mediaListAbs.deleteMedium=function deleteMedium(oldMedium$858){
                var $$mediaListAbs=this;
                
                var case$859=oldMedium$858;
                if ($$$cl1.isOfType(oldMedium$858,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$mediaListAbs.$native.deleteMedium(case$859.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(oldMedium$858,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$mediaListAbs.$native.deleteMedium(case$859.$native);
                    /*End dynamic block*/
                }
            };$$mediaListAbs.deleteMedium.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'oldMedium',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.doc($$$cl1.String("removes any media querys which match the passed query string",60)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaListAbs','$m','deleteMedium']};};
            $$mediaListAbs.appendMedium=function appendMedium(newMedium$860){
                var $$mediaListAbs=this;
                
                var case$861=newMedium$860;
                if ($$$cl1.isOfType(newMedium$860,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$mediaListAbs.$native.appendMedium(case$861.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(newMedium$860,{t:$$$cocjl339.JSString})) {
                    /*Begin dynamic block*/
                    $$mediaListAbs.$native.appendMedium(case$861.$native);
                    /*End dynamic block*/
                }
            };$$mediaListAbs.appendMedium.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'newMedium',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.String},{t:$$$cocjl339.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.doc($$$cl1.String("appends the passed Media Query to the collection",48)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaListAbs','$m','appendMedium']};};
        })(MediaListAbs$stylesheets.$$.prototype);
    }
    return MediaListAbs$stylesheets;
}
exports.$init$MediaListAbs$stylesheets=$init$MediaListAbs$stylesheets;
$init$MediaListAbs$stylesheets();
function MediaList$stylesheets(n$862, $$mediaList){
    $init$MediaList$stylesheets();
    if ($$mediaList===undefined)$$mediaList=new MediaList$stylesheets.$$;
    $$mediaList.n$862_=n$862;
    MediaListAbs$stylesheets($$mediaList);
    $$mediaList.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:MediaList$stylesheets,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaList','$at','native']};}};
    /*Begin dynamic block*/
    $$mediaList.$native=$$mediaList.n$862;/*End dynamic block*/
    return $$mediaList;
}
MediaList$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:MediaListAbs$stylesheets},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Collection of Media Queries",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaList']};};
exports.MediaList$stylesheets=MediaList$stylesheets;
function $init$MediaList$stylesheets(){
    if (MediaList$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(MediaList$stylesheets,'com.openswimsoftware.ceylon.js.dom.stylesheets::MediaList',$init$MediaListAbs$stylesheets());
        (function($$mediaList){
            $$$cl1.defineAttr($$mediaList,'n$862',function(){return this.n$862_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:MediaList$stylesheets,d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaList','$at','n']};});
        })(MediaList$stylesheets.$$.prototype);
    }
    return MediaList$stylesheets;
}
exports.$init$MediaList$stylesheets=$init$MediaList$stylesheets;
$init$MediaList$stylesheets();
exports.$pkg$ans$com$openswimsoftware$ceylon$js$dom$stylesheets=function(){return[$$$cl1.shared()];};
function StyleSheetAbs$stylesheets($$styleSheetAbs){
    $init$StyleSheetAbs$stylesheets();
    if ($$styleSheetAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$styleSheetAbs);
    return $$styleSheetAbs;
}
StyleSheetAbs$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetAbs']};};
exports.StyleSheetAbs$stylesheets=StyleSheetAbs$stylesheets;
function $init$StyleSheetAbs$stylesheets(){
    if (StyleSheetAbs$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(StyleSheetAbs$stylesheets,'com.openswimsoftware.ceylon.js.dom.stylesheets::StyleSheetAbs',$$$cocjl339.JSObjectAbs);
        (function($$styleSheetAbs){
            $$styleSheetAbs.type=function type(){
                var $$styleSheetAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$styleSheetAbs.$native.type);
                /*End dynamic block*/
            };$$styleSheetAbs.type.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.doc($$$cl1.String("returns StyleSheets mime type string",36)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetAbs','$m','type']};};
            $$styleSheetAbs.disabled=function disabled(){
                var $$styleSheetAbs=this;
                /*Begin dynamic block*/
                if($$styleSheetAbs.$native.disabled){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };$$styleSheetAbs.disabled.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.doc($$$cl1.String("returns if the StyleSheet is disabled or not",44)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetAbs','$m','disabled']};};
            $$styleSheetAbs.ownerNode=function ownerNode(){
                var $$styleSheetAbs=this;
                /*Begin dynamic block*/
                return Node($$styleSheetAbs.$native.ownerNode);
                /*End dynamic block*/
            };$$styleSheetAbs.ownerNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.doc($$$cl1.String("returns StyleSheets owning node",31)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetAbs','$m','ownerNode']};};
            $$styleSheetAbs.parentStyleSheet=function parentStyleSheet(){
                var $$styleSheetAbs=this;
                /*Begin dynamic block*/
                return StyleSheet$stylesheets($$styleSheetAbs.$native.parentStyleSheet);
                /*End dynamic block*/
            };$$styleSheetAbs.parentStyleSheet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:StyleSheet$stylesheets},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.doc($$$cl1.String("returns StyleSheets parent",26)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetAbs','$m','parentStyleSheet']};};
            $$styleSheetAbs.href=function href(){
                var $$styleSheetAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$styleSheetAbs.$native.href);
                /*End dynamic block*/
            };$$styleSheetAbs.href.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.doc($$$cl1.String("returns StyleSheet location",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetAbs','$m','href']};};
            $$styleSheetAbs.title=function title(){
                var $$styleSheetAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$styleSheetAbs.$native.title);
                /*End dynamic block*/
            };$$styleSheetAbs.title.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.doc($$$cl1.String("returns StyleSheet title",24)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetAbs','$m','title']};};
            $$styleSheetAbs.media=function media(){
                var $$styleSheetAbs=this;
                /*Begin dynamic block*/
                return MediaList$stylesheets($$styleSheetAbs.$native.media);
                /*End dynamic block*/
            };$$styleSheetAbs.media.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:MediaList$stylesheets},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the collection of Media Queries associated with the StyleSheet",70)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetAbs','$m','media']};};
        })(StyleSheetAbs$stylesheets.$$.prototype);
    }
    return StyleSheetAbs$stylesheets;
}
exports.$init$StyleSheetAbs$stylesheets=$init$StyleSheetAbs$stylesheets;
$init$StyleSheetAbs$stylesheets();
function StyleSheet$stylesheets(n$863, $$styleSheet){
    $init$StyleSheet$stylesheets();
    if ($$styleSheet===undefined)$$styleSheet=new StyleSheet$stylesheets.$$;
    $$styleSheet.n$863_=n$863;
    StyleSheetAbs$stylesheets($$styleSheet);
    $$styleSheet.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:StyleSheet$stylesheets,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheet','$at','native']};}};
    /*Begin dynamic block*/
    $$styleSheet.$native=$$styleSheet.n$863;/*End dynamic block*/
    return $$styleSheet;
}
StyleSheet$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:StyleSheetAbs$stylesheets},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("represents a basic StyleSheet",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheet']};};
exports.StyleSheet$stylesheets=StyleSheet$stylesheets;
function $init$StyleSheet$stylesheets(){
    if (StyleSheet$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(StyleSheet$stylesheets,'com.openswimsoftware.ceylon.js.dom.stylesheets::StyleSheet',$init$StyleSheetAbs$stylesheets());
        (function($$styleSheet){
            $$$cl1.defineAttr($$styleSheet,'n$863',function(){return this.n$863_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:StyleSheet$stylesheets,d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheet','$at','n']};});
        })(StyleSheet$stylesheets.$$.prototype);
    }
    return StyleSheet$stylesheets;
}
exports.$init$StyleSheet$stylesheets=$init$StyleSheet$stylesheets;
$init$StyleSheet$stylesheets();
function StyleSheetListAbs$stylesheets($$styleSheetListAbs){
    $init$StyleSheetListAbs$stylesheets();
    if ($$styleSheetListAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$styleSheetListAbs);
    return $$styleSheetListAbs;
}
StyleSheetListAbs$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetListAbs']};};
exports.StyleSheetListAbs$stylesheets=StyleSheetListAbs$stylesheets;
function $init$StyleSheetListAbs$stylesheets(){
    if (StyleSheetListAbs$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(StyleSheetListAbs$stylesheets,'com.openswimsoftware.ceylon.js.dom.stylesheets::StyleSheetListAbs',$$$cocjl339.JSObjectAbs);
        (function($$styleSheetListAbs){
            $$styleSheetListAbs.length=function length(){
                var $$styleSheetListAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSNumber($$styleSheetListAbs.$native.length);
                /*End dynamic block*/
            };$$styleSheetListAbs.length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSNumber},$ps:[],$cont:StyleSheetListAbs$stylesheets,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the length of the StyleSheet Collection",47)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','length']};};
            $$styleSheetListAbs.item=function item(index$864){
                var $$styleSheetListAbs=this;
                /*Begin dynamic block*/
                var element$865=$$styleSheetListAbs.$native.item(index$864);
                $prop$getElement$865={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','item','$at','element']};}};
                $prop$getElement$865.get=function(){return element$865};
                if((tmpvar$866=element$865,tmpvar$867=null,(tmpvar$866.equals&&!tmpvar$866.equals(tmpvar$867))||tmpvar$866!==tmpvar$867)){
                    return StyleSheet$stylesheets(element$865);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$styleSheetListAbs.item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:StyleSheet$stylesheets}]},$ps:[{$nm:'index',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}}],$cont:StyleSheetListAbs$stylesheets,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the StyleSheet at the specified index",45)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','item']};};
        })(StyleSheetListAbs$stylesheets.$$.prototype);
    }
    return StyleSheetListAbs$stylesheets;
}
exports.$init$StyleSheetListAbs$stylesheets=$init$StyleSheetListAbs$stylesheets;
$init$StyleSheetListAbs$stylesheets();
function StyleSheetList$stylesheets(n$868, $$styleSheetList){
    $init$StyleSheetList$stylesheets();
    if ($$styleSheetList===undefined)$$styleSheetList=new StyleSheetList$stylesheets.$$;
    $$styleSheetList.n$868_=n$868;
    StyleSheetListAbs$stylesheets($$styleSheetList);
    $$styleSheetList.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:StyleSheetList$stylesheets,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetList','$at','native']};}};
    /*Begin dynamic block*/
    $$styleSheetList.$native=$$styleSheetList.n$868;/*End dynamic block*/
    return $$styleSheetList;
}
StyleSheetList$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:StyleSheetListAbs$stylesheets},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a collection of StyleSheets",27)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetList']};};
exports.StyleSheetList$stylesheets=StyleSheetList$stylesheets;
function $init$StyleSheetList$stylesheets(){
    if (StyleSheetList$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(StyleSheetList$stylesheets,'com.openswimsoftware.ceylon.js.dom.stylesheets::StyleSheetList',$init$StyleSheetListAbs$stylesheets());
        (function($$styleSheetList){
            $$$cl1.defineAttr($$styleSheetList,'n$868',function(){return this.n$868_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:StyleSheetList$stylesheets,d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetList','$at','n']};});
        })(StyleSheetList$stylesheets.$$.prototype);
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
CDATASectionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TextAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','CDATASectionAbs']};};
exports.CDATASectionAbs=CDATASectionAbs;
function $init$CDATASectionAbs(){
    if (CDATASectionAbs.$$===undefined){
        $$$cl1.initTypeProto(CDATASectionAbs,'com.openswimsoftware.ceylon.js.dom::CDATASectionAbs',$init$TextAbs());
    }
    return CDATASectionAbs;
}
exports.$init$CDATASectionAbs=$init$CDATASectionAbs;
$init$CDATASectionAbs();
function CDATASection(n$869, $$cDATASection){
    $init$CDATASection();
    if ($$cDATASection===undefined)$$cDATASection=new CDATASection.$$;
    $$cDATASection.n$869_=n$869;
    CDATASectionAbs($$cDATASection);
    $$cDATASection.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CDATASection,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','CDATASection','$at','native']};}};
    /*Begin dynamic block*/
    $$cDATASection.$native=$$cDATASection.n$869;/*End dynamic block*/
    return $$cDATASection;
}
CDATASection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CDATASectionAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a DOM CDATASection",18)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CDATASection']};};
exports.CDATASection=CDATASection;
function $init$CDATASection(){
    if (CDATASection.$$===undefined){
        $$$cl1.initTypeProto(CDATASection,'com.openswimsoftware.ceylon.js.dom::CDATASection',$init$CDATASectionAbs());
        (function($$cDATASection){
            $$$cl1.defineAttr($$cDATASection,'n$869',function(){return this.n$869_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CDATASection,d:['com.openswimsoftware.ceylon.js.dom','CDATASection','$at','n']};});
        })(CDATASection.$$.prototype);
    }
    return CDATASection;
}
exports.$init$CDATASection=$init$CDATASection;
$init$CDATASection();
function TextAbs($$textAbs){
    $init$TextAbs();
    if ($$textAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    CharacterDataAbs($$textAbs);
    return $$textAbs;
}
TextAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CharacterDataAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','TextAbs']};};
exports.TextAbs=TextAbs;
function $init$TextAbs(){
    if (TextAbs.$$===undefined){
        $$$cl1.initTypeProto(TextAbs,'com.openswimsoftware.ceylon.js.dom::TextAbs',$init$CharacterDataAbs());
        (function($$textAbs){
            $$textAbs.splitText=function splitText(offset$870){
                var $$textAbs=this;
                
                var case$871=offset$870;
                if ($$$cl1.isOfType(offset$870,{t:$$$cl1.Integer})) {
                    /*Begin dynamic block*/
                    return Text($$textAbs.$native.splitText(case$871));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(offset$870,{t:$$$cocjl339.JSNumber})) {
                    /*Begin dynamic block*/
                    return Text($$textAbs.$native.splitText(case$871.$native));
                    /*End dynamic block*/
                }
            };$$textAbs.splitText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Text},$ps:[{$nm:'offset',$mt:'prm',$t:{t:'u', l:[{t:$$$cl1.Integer},{t:$$$cocjl339.JSNumber}]},$an:function(){return[];}}],$cont:TextAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("split the node in two at the offset",35)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TextAbs','$m','splitText']};};
            $$textAbs.wholeText=function wholeText(){
                var $$textAbs=this;
                /*Begin dynamic block*/
                return $$$cocjl339.JSString($$textAbs.$native.wholeText);
                /*End dynamic block*/
            };$$textAbs.wholeText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cocjl339.JSString},$ps:[],$cont:TextAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("get the Text node as a String",29)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TextAbs','$m','wholeText']};};
        })(TextAbs.$$.prototype);
    }
    return TextAbs;
}
exports.$init$TextAbs=$init$TextAbs;
$init$TextAbs();
function Text(n$872, $$text){
    $init$Text();
    if ($$text===undefined)$$text=new Text.$$;
    $$text.n$872_=n$872;
    TextAbs($$text);
    /*Begin dynamic block*/
    $$text.$native=$$text.n$872;/*End dynamic block*/
    return $$text;
}
Text.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TextAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a DOM Text element",18)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','Text']};};
exports.Text=Text;
function $init$Text(){
    if (Text.$$===undefined){
        $$$cl1.initTypeProto(Text,'com.openswimsoftware.ceylon.js.dom::Text',$init$TextAbs());
        (function($$text){
            $$$cl1.defineAttr($$text,'n$872',function(){return this.n$872_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Text,d:['com.openswimsoftware.ceylon.js.dom','Text','$at','n']};});
        })(Text.$$.prototype);
    }
    return Text;
}
exports.$init$Text=$init$Text;
$init$Text();
function TreeWalkerAbs($$treeWalkerAbs){
    $init$TreeWalkerAbs();
    if ($$treeWalkerAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cocjl339.JSObjectAbs($$treeWalkerAbs);
    return $$treeWalkerAbs;
}
TreeWalkerAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cocjl339.JSObjectAbs},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs']};};
exports.TreeWalkerAbs=TreeWalkerAbs;
function $init$TreeWalkerAbs(){
    if (TreeWalkerAbs.$$===undefined){
        $$$cl1.initTypeProto(TreeWalkerAbs,'com.openswimsoftware.ceylon.js.dom::TreeWalkerAbs',$$$cocjl339.JSObjectAbs);
        (function($$treeWalkerAbs){
            $$treeWalkerAbs.root=function root(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                return Node($$treeWalkerAbs.$native.root);
                /*End dynamic block*/
            };$$treeWalkerAbs.root.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the node where the tree walker was created",50)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','root']};};
            $$treeWalkerAbs.whatToShow=function whatToShow(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                return (tmpvar$873=$$treeWalkerAbs.$native.whatToShow,$$$cl1.isOfType(tmpvar$873,{t:$$$cl1.Anything})?tmpvar$873:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'16:19-16:35','treewalker.ceylon'));
                /*End dynamic block*/
            };$$treeWalkerAbs.whatToShow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns what type of nodes are present on the tree",50)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','whatToShow']};};
            $$treeWalkerAbs.filter=function filter(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                var filter$874=$$treeWalkerAbs.$native.filter;
                $prop$getFilter$874={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','filter','$at','filter']};}};
                $prop$getFilter$874.get=function(){return filter$874};
                if((tmpvar$875=filter$874,tmpvar$876=null,(tmpvar$875.equals&&!tmpvar$875.equals(tmpvar$876))||tmpvar$875!==tmpvar$876)){
                    return NodeFilter((tmpvar$877=filter$874,$$$cl1.isOfType(tmpvar$877,{t:NodeFilterResult})?tmpvar$877:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'25:34-25:39','treewalker.ceylon')));
                }else {
                    return null;
                }/*End dynamic block*/
            };$$treeWalkerAbs.filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:NodeFilter}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the node filter used to select the tree nodes",53)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','filter']};};
            $$treeWalkerAbs.currentNode=function currentNode(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                return Node($$treeWalkerAbs.$native.currentNode());
                /*End dynamic block*/
            };$$treeWalkerAbs.currentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns the current document node",33)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','currentNode']};};
            $$treeWalkerAbs.parentNode=function parentNode(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                var parent$878=$$treeWalkerAbs.$native.parentNode();
                $prop$getParent$878={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','parentNode','$at','parent']};}};
                $prop$getParent$878.get=function(){return parent$878};
                if((tmpvar$879=parent$878,tmpvar$880=null,(tmpvar$879.equals&&!tmpvar$879.equals(tmpvar$880))||tmpvar$879!==tmpvar$880)){
                    return Node(parent$878);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$treeWalkerAbs.parentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("move the tree to the first node in the document order",53)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','parentNode']};};
            $$treeWalkerAbs.firstChild=function firstChild(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                var first$881=$$treeWalkerAbs.$native.firstChild();
                $prop$getFirst$881={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','firstChild','$at','first']};}};
                $prop$getFirst$881.get=function(){return first$881};
                if((tmpvar$882=first$881,tmpvar$883=null,(tmpvar$882.equals&&!tmpvar$882.equals(tmpvar$883))||tmpvar$882!==tmpvar$883)){
                    return Node(first$881);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$treeWalkerAbs.firstChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("move the tree to the first child of the current node",52)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','firstChild']};};
            $$treeWalkerAbs.lastChild=function lastChild(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                var last$884=$$treeWalkerAbs.$native.lastChild();
                $prop$getLast$884={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','lastChild','$at','last']};}};
                $prop$getLast$884.get=function(){return last$884};
                if((tmpvar$885=last$884,tmpvar$886=null,(tmpvar$885.equals&&!tmpvar$885.equals(tmpvar$886))||tmpvar$885!==tmpvar$886)){
                    return Node(last$884);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$treeWalkerAbs.lastChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("move the tree to the last child of the current node",51)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','lastChild']};};
            $$treeWalkerAbs.previousSibling=function previousSibling(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                var previous$887=$$treeWalkerAbs.$native.previousSibling();
                $prop$getPrevious$887={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','previousSibling','$at','previous']};}};
                $prop$getPrevious$887.get=function(){return previous$887};
                if((tmpvar$888=previous$887,tmpvar$889=null,(tmpvar$888.equals&&!tmpvar$888.equals(tmpvar$889))||tmpvar$888!==tmpvar$889)){
                    return Node(previous$887);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$treeWalkerAbs.previousSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("move the tree to the current nodes previous sibling",51)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','previousSibling']};};
            $$treeWalkerAbs.nextSibling=function nextSibling(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                var next$890=$$treeWalkerAbs.$native.nextSibling();
                $prop$getNext$890={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','nextSibling','$at','next']};}};
                $prop$getNext$890.get=function(){return next$890};
                if((tmpvar$891=next$890,tmpvar$892=null,(tmpvar$891.equals&&!tmpvar$891.equals(tmpvar$892))||tmpvar$891!==tmpvar$892)){
                    return Node(next$890);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$treeWalkerAbs.nextSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("move the tree to the current nodes next sibling",47)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','nextSibling']};};
            $$treeWalkerAbs.previousNode=function previousNode(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                var previous$893=$$treeWalkerAbs.$native.previousNode();
                $prop$getPrevious$893={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','previousNode','$at','previous']};}};
                $prop$getPrevious$893.get=function(){return previous$893};
                if((tmpvar$894=previous$893,tmpvar$895=null,(tmpvar$894.equals&&!tmpvar$894.equals(tmpvar$895))||tmpvar$894!==tmpvar$895)){
                    return Node(previous$893);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$treeWalkerAbs.previousNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("move the tree to the previous node and returns",46)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','previousNode']};};
            $$treeWalkerAbs.nextNode=function nextNode(){
                var $$treeWalkerAbs=this;
                /*Begin dynamic block*/
                var next$896=$$treeWalkerAbs.$native.nextNode();
                $prop$getNext$896={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','nextNode','$at','next']};}};
                $prop$getNext$896.get=function(){return next$896};
                if((tmpvar$897=next$896,tmpvar$898=null,(tmpvar$897.equals&&!tmpvar$897.equals(tmpvar$898))||tmpvar$897!==tmpvar$898)){
                    return Node(next$896);
                }else {
                    return null;
                }/*End dynamic block*/
            };$$treeWalkerAbs.nextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("move the tree to the next node and returns",42)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','nextNode']};};
        })(TreeWalkerAbs.$$.prototype);
    }
    return TreeWalkerAbs;
}
exports.$init$TreeWalkerAbs=$init$TreeWalkerAbs;
$init$TreeWalkerAbs();
function TreeWalker(n$899, $$treeWalker){
    $init$TreeWalker();
    if ($$treeWalker===undefined)$$treeWalker=new TreeWalker.$$;
    $$treeWalker.n$899_=n$899;
    TreeWalkerAbs($$treeWalker);
    $$treeWalker.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:TreeWalker,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalker','$at','native']};}};
    /*Begin dynamic block*/
    $$treeWalker.$native=$$treeWalker.n$899;/*End dynamic block*/
    return $$treeWalker;
}
TreeWalker.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TreeWalkerAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("a Document TreeWalker",21)),$$$cl1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalker']};};
exports.TreeWalker=TreeWalker;
function $init$TreeWalker(){
    if (TreeWalker.$$===undefined){
        $$$cl1.initTypeProto(TreeWalker,'com.openswimsoftware.ceylon.js.dom::TreeWalker',$init$TreeWalkerAbs());
        (function($$treeWalker){
            $$$cl1.defineAttr($$treeWalker,'n$899',function(){return this.n$899_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:TreeWalker,d:['com.openswimsoftware.ceylon.js.dom','TreeWalker','$at','n']};});
        })(TreeWalker.$$.prototype);
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
