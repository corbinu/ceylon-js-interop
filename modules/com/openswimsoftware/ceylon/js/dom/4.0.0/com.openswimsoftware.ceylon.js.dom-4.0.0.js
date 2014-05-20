(function(define) { define(function(require, ex$, module) {
var $CCMM$={"$mod-deps":["ceylon.language\/1.1.0",{path:"com.openswimsoftware.ceylon.js.language\/1.8.0",exp:1},{path:"com.openswimsoftware.ceylon.js.html\/5.0.0",exp:1},{path:"com.openswimsoftware.ceylon.js.json\/1.0.0",exp:1}],"$mod-name":"com.openswimsoftware.ceylon.js.dom","$mod-version":"4.0.0","com.openswimsoftware.ceylon.js.dom":{attributeNode:{super:{$pk:".",$nm:"NodeType"},$mt:"o",$an:{shared:[]},$nm:"attributeNode"},endToStart:{super:{$pk:".",$nm:"RangeCompareHow"},$mt:"o",$an:{shared:[]},$nm:"endToStart"},Attr:{super:{$pk:".",$nm:"AttrAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a DOM Attr"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$pmg84x:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"Attr"},documentTypeNode:{super:{$pk:".",$nm:"NodeType"},$mt:"o",$an:{shared:[]},$nm:"documentTypeNode"},ltr:{super:{$pk:".",$nm:"DocumentDirection"},$mt:"o",$an:{shared:[]},$nm:"ltr"},TextAbs:{abstract:1,super:{$pk:".",$nm:"CharacterDataAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{wholeText:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["get the Text node as a String"]},$nm:"wholeText"},splitText:{$t:{$pk:".",$nm:"Text"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"offset"}]],$mt:"m",$an:{shared:[],doc:["split the node in two at the offset"]},$nm:"splitText"}},$nm:"TextAbs"},notationNode:{super:{$pk:".",$nm:"NodeType"},$mt:"o",$an:{shared:[]},$nm:"notationNode"},capturePhase:{super:{$pk:".",$nm:"EventPhase"},$mt:"o",$an:{shared:[]},$nm:"capturePhase"},ProcessingInstructionAbs:{abstract:1,super:{$pk:".",$nm:"NodeAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{getData:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["get the processing instruction data"]},$nm:"getData"},target:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["the processing instruction target"]},$nm:"target"},setData:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"data"}]],$mt:"m",$an:{shared:[],doc:["set the processing instruction data"]},$nm:"setData"}},$nm:"ProcessingInstructionAbs"},filterSkip:{super:{$pk:".",$nm:"NodeFilterResult"},$mt:"o",$an:{shared:[]},$nm:"filterSkip"},filterAccept:{super:{$pk:".",$nm:"NodeFilterResult"},$mt:"o",$an:{shared:[]},$nm:"filterAccept"},"$pkg-shared":1,documentPositionFollowing:{super:{$pk:".",$nm:"DocumentPosition"},$mt:"o",$an:{shared:[]},$nm:"documentPositionFollowing"},css1Compat:{super:{$pk:".",$nm:"CompatMode"},$mt:"o",$an:{shared:[]},$nm:"css1Compat"},EventInit:{super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$an:{shared:[]},$nm:"bubbles"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$an:{shared:[]},$nm:"cancelable"}],$mt:"c",$an:{shared:[],doc:["Event creation options"]},$m:{toJson:{$t:{$md:"com.openswimsoftware.ceylon.js.json",$pk:"com.openswimsoftware.ceylon.js.json",$nm:"JSJSON"},$mt:"m",$an:{shared:[],doc:["convert to native JSON"]},$nm:"toJson"}},$at:{bubbles:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[]},$nm:"bubbles"},cancelable:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"a",$an:{shared:[]},$nm:"cancelable"}},$nm:"EventInit"},EventTargetAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{addEventListener:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"type"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"prm",$pt:"f",$nm:"callback"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$nm:"capture"}]],$mt:"m",$an:{shared:[],doc:["add an event listener to the target"]},$m:{callback$hamudv:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"m",$nm:"callback"}},$nm:"addEventListener"},dispatchEvent:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$pk:".",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"m",$an:{shared:[],doc:["dispatch an event at the target"]},$nm:"dispatchEvent"},removeEventListener:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"type"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"prm",$pt:"f",$nm:"callback"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$nm:"capture"}]],$mt:"m",$an:{shared:[],doc:["remove an event listener from the target"]},$m:{callback$mkktu0:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"Event"},$mt:"prm",$nm:"event"}]],$mt:"m",$nm:"callback"}},$nm:"removeEventListener"}},$nm:"EventTargetAbs"},CDATASectionAbs:{abstract:1,super:{$pk:".",$nm:"TextAbs"},$mt:"c",$an:{abstract:[],shared:[]},$nm:"CDATASectionAbs"},none:{super:{$pk:".",$nm:"EventPhase"},$mt:"o",$an:{shared:[]},$nm:"none"},filterReject:{super:{$pk:".",$nm:"NodeFilterResult"},$mt:"o",$an:{shared:[]},$nm:"filterReject"},DocumentTypeAbs:{abstract:1,super:{$pk:".",$nm:"NodeAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{name:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the document type name"]},$nm:"name"},publicId:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the document types public id string"]},$nm:"publicId"},systemId:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the document types system id string"]},$nm:"systemId"}},$nm:"DocumentTypeAbs"},NodeListAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{item:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Node"}]},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"index"}]],$mt:"m",$an:{shared:[],doc:["returns he node at the given index"]},$nm:"item"},length:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the length of the node collection"]},$nm:"length"}},$nm:"NodeListAbs"},EntityReference:{super:{$pk:".",$nm:"EntityReferenceAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a DOM EntityReference"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$sed50g:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"EntityReference"},documentPositionImplementationSpecific:{super:{$pk:".",$nm:"DocumentPosition"},$mt:"o",$an:{shared:[]},$nm:"documentPositionImplementationSpecific"},ElementAbs:{abstract:1,super:{$pk:".",$nm:"NodeAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{hasAttribute:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"attName"}]],$mt:"m",$an:{shared:[],doc:["returns if attribute exists the element"]},$nm:"hasAttribute"},getAttributeNS:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"namespace"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"attributeName"}]],$mt:"m",$an:{shared:[],doc:["get the value of the attribute on this element within the given namespace"]},$nm:"getAttributeNS"},getElementsByTagName:{$t:{$pk:".",$nm:"HTMLCollection"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$def:1,$nm:"tagName"}]],$mt:"m",$an:{shared:[],doc:["get elements on this element by the tagname"]},$nm:"getElementsByTagName"},getElementsByTagNameNS:{$t:{$pk:".",$nm:"HTMLCollection"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"namespace"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$def:1,$nm:"tagName"}]],$mt:"m",$an:{shared:[],doc:["get elements on this element by the tagname within the given namespace"]},$nm:"getElementsByTagNameNS"},removeAttributeNS:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"namespace"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"attrName"}]],$mt:"m",$an:{shared:[],doc:["remove an attribute on the element within the given namespace"]},$nm:"removeAttributeNS"},tagName:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the elements tag name"]},$nm:"tagName"},removeAttribute:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"attrName"}]],$mt:"m",$an:{shared:[],doc:["remove an attribute on the element"]},$nm:"removeAttribute"},setAttributeNS:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"namespace"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"name"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[],doc:["set an attribute on the element within the given namespace"]},$nm:"setAttributeNS"},setAttribute:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"name"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[],doc:["set an attribute on the element"]},$nm:"setAttribute"},getAttribute:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"attributeName"}]],$mt:"m",$an:{shared:[],doc:["get the value of the attribute on this element"]},$nm:"getAttribute"},hasAttributeNS:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"namespace"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"attName"}]],$mt:"m",$an:{shared:[],doc:["returns if attribute exists the element within the given namespace"]},$nm:"hasAttributeNS"}},$nm:"ElementAbs"},startToStart:{super:{$pk:".",$nm:"RangeCompareHow"},$mt:"o",$an:{shared:[]},$nm:"startToStart"},CompatMode:{abstract:1,super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},of:[{$pk:".",$nm:"css1Compat"},{$pk:".",$nm:"backCompat"}],$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"name"}],$mt:"c",$an:{abstract:[],shared:[],doc:["Document Compatablity Mode"]},$at:{name$8prl16:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$nm:"name"}},$nm:"CompatMode"},rtl:{super:{$pk:".",$nm:"DocumentDirection"},$mt:"o",$an:{shared:[]},$nm:"rtl"},DocumentFragment:{super:{$pk:".",$nm:"DocumentFragmentAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a DOM DocumentFragment"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$wld4o5:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"DocumentFragment"},loading:{super:{$pk:".",$nm:"DocumentReadyState"},$mt:"o",$an:{shared:[]},$nm:"loading"},documentPositionContainedBy:{super:{$pk:".",$nm:"DocumentPosition"},$mt:"o",$an:{shared:[]},$nm:"documentPositionContainedBy"},Event:{super:{$pk:".",$nm:"EventAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a DOM Event"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$2vytsu:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"Event"},Comment:{super:{$pk:".",$nm:"CommentAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a DOM comment"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$kbgwgf:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"Comment"},EventAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{defaultPrevented:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["has the default been prevented"]},$nm:"defaultPrevented"},timeStamp:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSDate"},$mt:"m",$an:{shared:[],doc:["returns the time the event was created"]},$nm:"timeStamp"},stopPropagation:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[],doc:["stops event propagation through further DOM elements"]},$nm:"stopPropagation"},eventPhase:{$t:{$pk:".",$nm:"EventPhase"},$mt:"m",$an:{shared:[],doc:["returns current event phase"]},$nm:"eventPhase"},currentTarget:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"EventTarget"}]},$mt:"m",$an:{shared:[],doc:["returns the current event target"]},$nm:"currentTarget"},bubbles:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["does the event bubble through the dom or not"]},$nm:"bubbles"},stopImmediatePropagation:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[],doc:["returns the event propagation immidately"]},$nm:"stopImmediatePropagation"},target:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"EventTarget"}]},$mt:"m",$an:{shared:[],doc:["returns the event target"]},$nm:"target"},isTrusted:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["was the event created by the browser or a script"]},$nm:"isTrusted"},cancelable:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["is the event cancelable or not"]},$nm:"cancelable"},preventDefault:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[],doc:["cancels the event if it is cancelable"]},$nm:"preventDefault"},type:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the Event type"]},$nm:"type"}},$nm:"EventAbs"},NodeFilterResult:{abstract:1,super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},of:[{$pk:".",$nm:"filterAccept"},{$pk:".",$nm:"filterReject"},{$pk:".",$nm:"filterSkip"}],$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"name"}],$mt:"c",$an:{abstract:[],shared:[]},$at:{name$utqdb0:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$nm:"name"}},$nm:"NodeFilterResult"},documentPositionPreceding:{super:{$pk:".",$nm:"DocumentPosition"},$mt:"o",$an:{shared:[]},$nm:"documentPositionPreceding"},DocumentDirection:{abstract:1,super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},of:[{$pk:".",$nm:"rtl"},{$pk:".",$nm:"ltr"}],$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"name"}],$mt:"c",$an:{abstract:[],shared:[],doc:["Document Direction"]},$at:{name$t0mykx:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$nm:"name"}},$nm:"DocumentDirection"},createEvent:{$t:{$pk:".",$nm:"Event"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"type"},{$t:{$pk:".",$nm:"EventInit"},$mt:"prm",$nm:"options"}]],$mt:"m",$an:{shared:[],doc:["create a new Event"]},$nm:"createEvent"},DocumentFragmentAbs:{abstract:1,super:{$pk:".",$nm:"NodeAbs"},$mt:"c",$an:{abstract:[],shared:[]},$nm:"DocumentFragmentAbs"},RangeAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{extractContents:{$t:{$pk:".",$nm:"DocumentFragment"},$mt:"m",$an:{shared:[],doc:["move the contents of the range from their document to a new document fragment"]},$nm:"extractContents"},detach:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[],doc:["detach a range from use to free resources"]},$nm:"detach"},compareBoundaryPoints:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$ps:[[{$t:{$pk:".",$nm:"RangeCompareHow"},$mt:"prm",$nm:"how"},{$t:{$pk:".",$nm:"Range"},$mt:"prm",$nm:"sourceRange"}]],$mt:"m",$an:{shared:[],doc:["compare the boundery points of one range with another"]},$nm:"compareBoundaryPoints"},selectNodeContents:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"refNode"}]],$mt:"m",$an:{shared:[],doc:["set the range to contain the contents of the given node"]},$nm:"selectNodeContents"},insertNode:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"newNode"}]],$mt:"m",$an:{shared:[],doc:["insert a node at the start of the range"]},$nm:"insertNode"},deleteContents:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[],doc:["remove the contents of range from the document"]},$nm:"deleteContents"},setStartAfter:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"refNode"}]],$mt:"m",$an:{shared:[],doc:["set the start position of the range relative to the given node"]},$nm:"setStartAfter"},startOffset:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns a number where the container range begins"]},$nm:"startOffset"},collapsed:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["is the start and end nodes the same node"]},$nm:"collapsed"},cloneRange:{$t:{$pk:".",$nm:"Range"},$mt:"m",$an:{shared:[],doc:["clone the range"]},$nm:"cloneRange"},surroundContents:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"newNode"}]],$mt:"m",$an:{shared:[],doc:["move the contents of the range into the new node"]},$nm:"surroundContents"},cloneContents:{$t:{$pk:".",$nm:"DocumentFragment"},$mt:"m",$an:{shared:[],doc:["creates a new document copying the nodes inside of the range"]},$nm:"cloneContents"},selectNode:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"refNode"}]],$mt:"m",$an:{shared:[],doc:["set the range to contain node and its contents"]},$nm:"selectNode"},endOffset:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns a number where the container range ends"]},$nm:"endOffset"},setStart:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"startNode"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"startOffset"}]],$mt:"m",$an:{shared:[],doc:["set the start position of the range"]},$nm:"setStart"},isPointInRange:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"node"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"offset"}]],$mt:"m",$an:{shared:[],doc:["is the the current point in the range"]},$nm:"isPointInRange"},commonAncestorContainer:{$t:{$pk:".",$nm:"Node"},$mt:"m",$an:{shared:[],doc:["returns the deepest Node that contains the startContainer and endContainer nodes"]},$nm:"commonAncestorContainer"},startContainer:{$t:{$pk:".",$nm:"Node"},$mt:"m",$an:{shared:[],doc:["returns the node where the container range begins"]},$nm:"startContainer"},endContainer:{$t:{$pk:".",$nm:"Node"},$mt:"m",$an:{shared:[],doc:["returns the node where the container range ends"]},$nm:"endContainer"},setEndAfter:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"refNode"}]],$mt:"m",$an:{shared:[],doc:["set the end position of the range relative to the given node"]},$nm:"setEndAfter"},setStartBefore:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"refNode"}]],$mt:"m",$an:{shared:[],doc:["set the start position of the range relative to the given node"]},$nm:"setStartBefore"},setEndBefore:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"refNode"}]],$mt:"m",$an:{shared:[],doc:["set the end position of the range relative to the given node"]},$nm:"setEndBefore"},setEnd:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"endNode"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"endOffset"}]],$mt:"m",$an:{shared:[],doc:["set the end position of the range"]},$nm:"setEnd"},collapse:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"ceylon.language",$pk:"$",$nm:"Boolean"}]},$mt:"prm",$def:1,$nm:"toStart"}]],$mt:"m",$an:{shared:[],doc:["collapses the range to one of its boundery points"]},$nm:"collapse"}},$nm:"RangeAbs"},Node:{super:{$pk:".",$nm:"NodeAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a DOM Node"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$75hoja:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"Node"},NodeType:{abstract:1,super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},of:[{$pk:".",$nm:"attributeNode"},{$pk:".",$nm:"cdataSectionNode"},{$pk:".",$nm:"commentNode"},{$pk:".",$nm:"documentFragmentNode"},{$pk:".",$nm:"documentNode"},{$pk:".",$nm:"documentTypeNode"},{$pk:".",$nm:"elementNode"},{$pk:".",$nm:"entityNode"},{$pk:".",$nm:"entityReferenceNode"},{$pk:".",$nm:"notationNode"},{$pk:".",$nm:"processingInstructionNode"},{$pk:".",$nm:"textNode"}],$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"name"}],$mt:"c",$an:{abstract:[],shared:[],doc:["specific NodeType"]},$at:{name$3p2n2h:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$nm:"name"}},$nm:"NodeType"},processingInstructionNode:{super:{$pk:".",$nm:"NodeType"},$mt:"o",$an:{shared:[]},$nm:"processingInstructionNode"},endToEnd:{super:{$pk:".",$nm:"RangeCompareHow"},$mt:"o",$an:{shared:[]},$nm:"endToEnd"},CharacterDataAbs:{abstract:1,super:{$pk:".",$nm:"NodeAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{replaceData:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"offset"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"count"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"data"}]],$mt:"m",$an:{shared:[],doc:["replace the Characters starting at offset to count using the String data"]},$nm:"replaceData"},getData:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the CharacterData"]},$nm:"getData"},deleteData:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"offset"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"count"}]],$mt:"m",$an:{shared:[]},$nm:"deleteData"},length:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the length of the CharacterData"]},$nm:"length"},insertData:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"offset"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"data"}]],$mt:"m",$an:{shared:[],doc:["insert the Characters starting at offset using the String data"]},$nm:"insertData"},appendData:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"data"}]],$mt:"m",$an:{shared:[],doc:["append the Characters with String data"]},$nm:"appendData"},substringData:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"offset"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"count"}]],$mt:"m",$an:{shared:[],doc:["returns a subtstring starting at offset and through a count"]},$nm:"substringData"},setData:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"data"}]],$mt:"m",$an:{shared:[],doc:["set the CharacterData"]},$nm:"setData"}},$nm:"CharacterDataAbs"},commentNode:{super:{$pk:".",$nm:"NodeType"},$mt:"o",$an:{shared:[]},$nm:"commentNode"},NodeList:{super:{$pk:".",$nm:"NodeListAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["collection of DOM nodes"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$9hmxc8:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"NodeList"},documentPositionContains:{super:{$pk:".",$nm:"DocumentPosition"},$mt:"o",$an:{shared:[]},$nm:"documentPositionContains"},TreeWalkerAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{previousSibling:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Node"}]},$mt:"m",$an:{shared:[],doc:["move the tree to the current nodes previous sibling"]},$nm:"previousSibling"},whatToShow:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["returns what type of nodes are present on the tree"]},$nm:"whatToShow"},parentNode:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Node"}]},$mt:"m",$an:{shared:[],doc:["move the tree to the first node in the document order"]},$nm:"parentNode"},root:{$t:{$pk:".",$nm:"Node"},$mt:"m",$an:{shared:[],doc:["returns the node where the tree walker was created"]},$nm:"root"},firstChild:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Node"}]},$mt:"m",$an:{shared:[],doc:["move the tree to the first child of the current node"]},$nm:"firstChild"},currentNode:{$t:{$pk:".",$nm:"Node"},$mt:"m",$an:{shared:[],doc:["returns the current document node"]},$nm:"currentNode"},nextNode:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Node"}]},$mt:"m",$an:{shared:[],doc:["move the tree to the next node and returns"]},$nm:"nextNode"},nextSibling:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Node"}]},$mt:"m",$an:{shared:[],doc:["move the tree to the current nodes next sibling"]},$nm:"nextSibling"},filter:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"NodeFilter"}]},$mt:"m",$an:{shared:[],doc:["returns the node filter used to select the tree nodes"]},$nm:"filter"},previousNode:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Node"}]},$mt:"m",$an:{shared:[],doc:["move the tree to the previous node and returns"]},$nm:"previousNode"},lastChild:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Node"}]},$mt:"m",$an:{shared:[],doc:["move the tree to the last child of the current node"]},$nm:"lastChild"}},$nm:"TreeWalkerAbs"},CharacterData:{super:{$pk:".",$nm:"CharacterDataAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a DOM CharacterData segment used by Text, Comment and Processing Instruction"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$xysemb:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"CharacterData"},DOMImplementationAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{createDocument:{$t:{$pk:".",$nm:"Document"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]}]},$mt:"prm",$nm:"namespace"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$def:1,$nm:"qualifiedName"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"DocumentType"}]},$mt:"prm",$def:1,$nm:"doctype"}]],$mt:"m",$an:{shared:[],doc:["returns a new Document"]},$nm:"createDocument"},createDocumentType:{$t:{$pk:".",$nm:"DocumentType"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"qualifiedName"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"publicId"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"systemId"}]],$mt:"m",$an:{shared:[],doc:["returns a new DocumentType"]},$nm:"createDocumentType"},hasFeature:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"feature"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$def:1,$nm:"version"}]],$mt:"m",$an:{shared:[],doc:["returns if the DOM has the given feature at the specified or greater version"]},$nm:"hasFeature"}},$nm:"DOMImplementationAbs"},documentFragmentNode:{super:{$pk:".",$nm:"NodeType"},$mt:"o",$an:{shared:[]},$nm:"documentFragmentNode"},DocumentPosition:{abstract:1,super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},of:[{$pk:".",$nm:"documentPositionContainedBy"},{$pk:".",$nm:"documentPositionContains"},{$pk:".",$nm:"documentPositionDisconnected"},{$pk:".",$nm:"documentPositionFollowing"},{$pk:".",$nm:"documentPositionImplementationSpecific"},{$pk:".",$nm:"documentPositionPreceding"}],$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"name"}],$mt:"c",$an:{abstract:[],shared:[],doc:["Document Positon Type"]},$at:{name$ka23jj:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$nm:"name"}},$nm:"DocumentPosition"},HTMLCollectionAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{item:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Element"}]},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"index"}]],$mt:"m",$an:{shared:[],doc:["return the node at the given index"]},$nm:"item"},length:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the length of the collection"]},$nm:"length"},namedItem:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObject"}]},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"name"}]],$mt:"m",$an:{shared:[],doc:["return the node whose id or name matches the passed name"]},$nm:"namedItem"}},$nm:"HTMLCollectionAbs"},RangeCompareHow:{abstract:1,super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},of:[{$pk:".",$nm:"endToEnd"},{$pk:".",$nm:"endToStart"},{$pk:".",$nm:"startToEnd"},{$pk:".",$nm:"startToStart"}],$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"name"}],$mt:"c",$an:{abstract:[],shared:[],doc:["how to comare ranges"]},$at:{name$96w8b:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$nm:"name"}},$nm:"RangeCompareHow"},NodeIteratorAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{whatToShow:{$t:{$pk:".",$nm:"unknown"},$mt:"m",$an:{shared:[],doc:["return long representing what types of nodes the iterator shows"]},$nm:"whatToShow"},root:{$t:{$pk:".",$nm:"Node"},$mt:"m",$an:{shared:[],doc:["returns the iterators root node"]},$nm:"root"},nextNode:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Node"}]},$mt:"m",$an:{shared:[],doc:["return the next node"]},$nm:"nextNode"},filter:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"NodeFilter"}]},$mt:"m",$an:{shared:[],doc:["return the iterator filter if any"]},$nm:"filter"},previousNode:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Node"}]},$mt:"m",$an:{shared:[],doc:["return the previous node"]},$nm:"previousNode"}},$nm:"NodeIteratorAbs"},entityNode:{super:{$pk:".",$nm:"NodeType"},$mt:"o",$an:{shared:[]},$nm:"entityNode"},backCompat:{super:{$pk:".",$nm:"CompatMode"},$mt:"o",$an:{shared:[]},$nm:"backCompat"},HTMLCollection:{super:{$pk:".",$nm:"HTMLCollectionAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a DOM HTMLCollection"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$qxfu5z:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"HTMLCollection"},textNode:{super:{$pk:".",$nm:"NodeType"},$mt:"o",$an:{shared:[]},$nm:"textNode"},interactive:{super:{$pk:".",$nm:"DocumentReadyState"},$mt:"o",$an:{shared:[]},$nm:"interactive"},complete:{super:{$pk:".",$nm:"DocumentReadyState"},$mt:"o",$an:{shared:[]},$nm:"complete"},NodeIterator:{super:{$pk:".",$nm:"NodeIteratorAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a DOM NodeIterator"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$jxak94:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"NodeIterator"},startToEnd:{super:{$pk:".",$nm:"RangeCompareHow"},$mt:"o",$an:{shared:[]},$nm:"startToEnd"},DOMImplementation:{super:{$pk:".",$nm:"DOMImplementationAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a DOMImplementation"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$5tcvl8:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"DOMImplementation"},cdataSectionNode:{super:{$pk:".",$nm:"NodeType"},$mt:"o",$an:{shared:[]},$nm:"cdataSectionNode"},DocumentType:{super:{$pk:".",$nm:"DocumentTypeAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a DocumentType"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$ct6wtn:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"DocumentType"},CommentAbs:{abstract:1,super:{$pk:".",$nm:"CharacterDataAbs"},$mt:"c",$an:{abstract:[],shared:[]},$nm:"CommentAbs"},Range:{super:{$pk:".",$nm:"RangeAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["DOM range"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$fqs61p:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"Range"},Document:{super:{$pk:".",$nm:"DocumentAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a DOM Document"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$xxawbv:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"Document"},entityReferenceNode:{super:{$pk:".",$nm:"NodeType"},$mt:"o",$an:{shared:[]},$nm:"entityReferenceNode"},atTarget:{super:{$pk:".",$nm:"EventPhase"},$mt:"o",$an:{shared:[]},$nm:"atTarget"},EntityReferenceAbs:{abstract:1,super:{$pk:".",$nm:"NodeAbs"},$mt:"c",$an:{abstract:[],shared:[]},$nm:"EntityReferenceAbs"},AttrAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{getValue:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the Attr value string"]},$nm:"getValue"},name:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the Attr name"]},$nm:"name"},setValue:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[],doc:["sets the Attr value string"]},$nm:"setValue"},isId:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["returns the Attr is an ID or not"]},$nm:"isId"}},$nm:"AttrAbs"},elementNode:{super:{$pk:".",$nm:"NodeType"},$mt:"o",$an:{shared:[]},$nm:"elementNode"},NodeFilter:{super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},$ps:[{$t:{$pk:".",$nm:"NodeFilterResult"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"n"}]],$mt:"prm",$pt:"f",$nm:"acceptNode"}],$mt:"c",$an:{shared:[],doc:["Node Filter"]},$m:{acceptNode$x5puf6:{$t:{$pk:".",$nm:"NodeFilterResult"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"n"}]],$mt:"m",$nm:"acceptNode"}},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"}},$nm:"NodeFilter"},documentPositionDisconnected:{super:{$pk:".",$nm:"DocumentPosition"},$mt:"o",$an:{shared:[]},$nm:"documentPositionDisconnected"},getWindow:{$t:{$md:"com.openswimsoftware.ceylon.js.html",$pk:"com.openswimsoftware.ceylon.js.html",$nm:"Window"},$mt:"m",$an:{shared:[],doc:["returns the current browser window"]},$nm:"getWindow"},Text:{super:{$pk:".",$nm:"TextAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a DOM Text element"]},$at:{n$olmx83:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"},native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"}},$nm:"Text"},CDATASection:{super:{$pk:".",$nm:"CDATASectionAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a DOM CDATASection"]},$at:{n$lbe6r4:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"},native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"}},$nm:"CDATASection"},documentNode:{super:{$pk:".",$nm:"NodeType"},$mt:"o",$an:{shared:[]},$nm:"documentNode"},TreeWalker:{super:{$pk:".",$nm:"TreeWalkerAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a Document TreeWalker"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$czj3ec:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"TreeWalker"},EventPhase:{abstract:1,super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},of:[{$pk:".",$nm:"none"},{$pk:".",$nm:"capturePhase"},{$pk:".",$nm:"atTarget"},{$pk:".",$nm:"bubblingPhase"}],$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"prm",$an:{shared:[]},$nm:"num"}],$mt:"c",$an:{abstract:[],shared:[],doc:["current Event Phase"]},$at:{num:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Integer"},$mt:"a",$an:{shared:[]},$nm:"num"}},$nm:"EventPhase"},bubblingPhase:{super:{$pk:".",$nm:"EventPhase"},$mt:"o",$an:{shared:[]},$nm:"bubblingPhase"},NodeAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{firstChild:{$t:{$pk:".",$nm:"Node"},$mt:"m",$an:{shared:[],doc:["returns the nodes first child node"]},$nm:"firstChild"},nodeName:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the nodes name"]},$nm:"nodeName"},childNodes:{$t:{$pk:".",$nm:"NodeList"},$mt:"m",$an:{shared:[],doc:["returns a list of child nodes"]},$nm:"childNodes"},baseURI:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the nodes baseURI"]},$nm:"baseURI"},replaceChild:{$t:{$pk:".",$nm:"Node"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"newChild"},{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"oldChild"}]],$mt:"m",$an:{shared:[],doc:["replaces the old node with the new one and returns the old node"]},$nm:"replaceChild"},setTextContent:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"content"}]],$mt:"m",$an:{shared:[],doc:["set the text content of the node and its descendents"]},$nm:"setTextContent"},lastChild:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Node"}]},$mt:"m",$an:{shared:[],doc:["returns the last child node of this node"]},$nm:"lastChild"},normalize:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[],doc:["clean up all the text nodes under this on"]},$nm:"normalize"},lookupPrefix:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]}]},$mt:"prm",$nm:"namespaceURI"}]],$mt:"m",$an:{shared:[],doc:["returns the prefix for the given namespaceURI"]},$nm:"lookupPrefix"},previousSibling:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Node"}]},$mt:"m",$an:{shared:[],doc:["returns the node immediately proceding this node in the parents child nodes or null if none"]},$nm:"previousSibling"},parentNode:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Node"}]},$mt:"m",$an:{shared:[],doc:["returns the parent node if any"]},$nm:"parentNode"},hasChildNodes:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["if the node has children"]},$nm:"hasChildNodes"},nodeType:{$t:{$pk:".",$nm:"NodeType"},$mt:"m",$an:{shared:[],doc:["returns the nodes type"]},$nm:"nodeType"},cloneNode:{$t:{$pk:".",$nm:"Node"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$nm:"bool"}]],$mt:"m",$an:{shared:[],doc:["clones the current node pass true for deep copy"]},$nm:"cloneNode"},nextSibling:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Node"}]},$mt:"m",$an:{shared:[],doc:["returns the node immediately after this node in the parents child nodes or null if none"]},$nm:"nextSibling"},isDefaultNamespace:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"namespaceURI"}]],$mt:"m",$an:{shared:[],doc:["is the passed namespace the default one"]},$nm:"isDefaultNamespace"},insertBefore:{$t:{$pk:".",$nm:"Node"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"newElement"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Node"}]},$mt:"prm",$nm:"referenceElement"}]],$mt:"m",$an:{shared:[],doc:["insert the passed node to children before the reference node"]},$nm:"insertBefore"},appendChild:{$t:{$pk:".",$nm:"Node"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"node"}]],$mt:"m",$an:{shared:[],doc:["append the node to the nodes children"]},$nm:"appendChild"},setNodeValue:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"val"}]],$mt:"m",$an:{shared:[],doc:["set the value of the current node"]},$nm:"setNodeValue"},compareDocumentPosition:{$t:{$pk:".",$nm:"DocumentPosition"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"node"}]],$mt:"m",$an:{shared:[],doc:["return the node document position compared to the passed node"]},$nm:"compareDocumentPosition"},removeChild:{$t:{$pk:".",$nm:"Node"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"node"}]],$mt:"m",$an:{shared:[],doc:["removes the child node and returns the removed node"]},$nm:"removeChild"},prefix:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"m",$an:{shared:[],doc:["string of the nodes namespace prefix"]},$nm:"prefix"},getTextContent:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"m",$an:{shared:[],doc:["returns the text content of the node and its descendents"]},$nm:"getTextContent"},isEqualNode:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"node"}]],$mt:"m",$an:{shared:[],doc:["is the passed node equal to this one"]},$nm:"isEqualNode"},getNodeValue:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"m",$an:{shared:[],doc:["returns the value of the current node"]},$nm:"getNodeValue"}},$at:{ownerDocument:{$t:{$pk:".",$nm:"Document"},$mt:"g",$an:{shared:[],doc:["returns nodes owning document"]},$nm:"ownerDocument"}},$nm:"NodeAbs"},EventTarget:{super:{$pk:".",$nm:"EventTargetAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a DOM EventTarget"]},$at:{n$u466ed:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"},native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"}},$nm:"EventTarget"},ProcessingInstruction:{super:{$pk:".",$nm:"ProcessingInstructionAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["Processing Instruction"]},$at:{n$q9rf4b:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"},native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"}},$nm:"ProcessingInstruction"},DocumentReadyState:{abstract:1,super:{$md:"ceylon.language",$pk:"$",$nm:"Basic"},of:[{$pk:".",$nm:"loading"},{$pk:".",$nm:"interactive"},{$pk:".",$nm:"complete"}],$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"prm",$nm:"name"}],$mt:"c",$an:{abstract:[],shared:[],doc:["Document Ready State"]},$at:{name$ldmlz6:{$t:{$md:"ceylon.language",$pk:"$",$nm:"String"},$mt:"a",$nm:"name"}},$nm:"DocumentReadyState"},DocumentAbs:{abstract:1,super:{$pk:".",$nm:"NodeAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{writeln:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"line"}]],$mt:"m",$an:{shared:[],doc:["write the string to the document as a line"]},$nm:"writeln"},body:{$t:{$pk:".",$nm:"Node"},$mt:"m",$an:{shared:[],doc:["returns the body node on the document"]},$nm:"body"},getElementsByName:{$t:{$pk:".",$nm:"HTMLCollection"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"name"}]],$mt:"m",$an:{shared:[],doc:["returns a list of elements in the document with the given name"]},$nm:"getElementsByName"},createNodeIterator:{$t:{$pk:".",$nm:"NodeIterator"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"root"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"whatToShow"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"NodeFilter"}]},$mt:"prm",$def:1,$nm:"filter"}]],$mt:"m",$an:{shared:[],doc:["returns a new node iterator the document"]},$nm:"createNodeIterator"},location:{$t:{$md:"com.openswimsoftware.ceylon.js.html",$pk:"com.openswimsoftware.ceylon.js.html",$nm:"Location"},$mt:"m",$an:{shared:[],doc:["returns location information about the URL of the document"]},$nm:"location"},hasFocus:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["returns whether the document or any element in the document currently has focus"]},$nm:"hasFocus"},defaultView:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.html",$pk:"com.openswimsoftware.ceylon.js.html",$nm:"Window"}]},$mt:"m",$an:{shared:[],doc:["returns the browser window object associated with the document"]},$nm:"defaultView"},close:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[],doc:["finishes writing to a document opened with Document.open()"]},$nm:"close"},open:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[],doc:["opens a document for writing"]},$nm:"open"},scripts:{$t:{$pk:".",$nm:"HTMLCollection"},$mt:"m",$an:{shared:[],doc:["returns a collection of all the script elements in the document"]},$nm:"scripts"},createAttributeNS:{$t:{$pk:".",$nm:"Attr"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]}]},$mt:"prm",$nm:"namespace"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"name"}]],$mt:"m",$an:{shared:[],doc:["creates a attribute with the given namespace"]},$nm:"createAttributeNS"},getElementsByClassName:{$t:{$pk:".",$nm:"HTMLCollection"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"names"}]],$mt:"m",$an:{shared:[],doc:["returns a collection of elements on the document by the class name"]},$nm:"getElementsByClassName"},createAttribute:{$t:{$pk:".",$nm:"Attr"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"name"}]],$mt:"m",$an:{shared:[],doc:["creates a new attribute"]},$nm:"createAttribute"},querySelector:{$t:{$pk:".",$nm:"Element"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"selectors"}]],$mt:"m",$an:{shared:[],doc:["returns the first element which matches the selectors"]},$nm:"querySelector"},activeElement:{$t:{$pk:".",$nm:"Element"},$mt:"m",$an:{shared:[],doc:["returns the currently focused element on the document"]},$nm:"activeElement"},head:{$t:{$pk:".",$nm:"Element"},$mt:"m",$an:{shared:[],doc:["returns the document head element"]},$nm:"head"},documentElement:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Element"}]},$mt:"m",$an:{shared:[],doc:["returns the element that is a direct child of the document"]},$nm:"documentElement"},setAsync:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$nm:"async"}]],$mt:"m",$an:{shared:[],doc:["sets whether a document.load call should be made asynchronously"]},$nm:"setAsync"},getElementById:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"Element"}]},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"id"}]],$mt:"m",$an:{shared:[],doc:["returns element on the document by the id"]},$nm:"getElementById"},releaseCapture:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"m",$an:{shared:[],doc:["release current mouse capture"]},$nm:"releaseCapture"},styleSheetSets:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSArray"},$mt:"m",$an:{shared:[],doc:["returns Array of Strings naming the avaiable StyleSheets"]},$nm:"styleSheetSets"},getElementsByTagNameNS:{$t:{comp:"u",$ts:[{$pk:".",$nm:"HTMLCollection"},{$pk:".",$nm:"NodeList"}]},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"namespace"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$def:1,$nm:"name"}]],$mt:"m",$an:{shared:[],doc:["returns a collection of elements on the document by the tagname in a namespace"]},$nm:"getElementsByTagNameNS"},getAsync:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["gets whether a document.load call will be made asynchronously"]},$nm:"getAsync"},getCookie:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns cookies associated with the document in the form of a comma sepearted list of key=value pairs"]},$nm:"getCookie"},getDir:{$t:{$pk:".",$nm:"DocumentDirection"},$mt:"m",$an:{shared:[],doc:["get the document direction"]},$nm:"getDir"},setDir:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{$pk:".",$nm:"DocumentDirection"},$mt:"prm",$nm:"dir"}]],$mt:"m",$an:{shared:[],doc:["set the document direction"]},$nm:"setDir"},elementFromPoint:{$t:{$pk:".",$nm:"Element"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"x"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"y"}]],$mt:"m",$an:{shared:[],doc:["returns element at the given point coordinates"]},$nm:"elementFromPoint"},preferredStyleSheetSet:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"m",$an:{shared:[],doc:["returns the prefurred name of the StyleSheet set on the document"]},$nm:"preferredStyleSheetSet"},url:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the document url"]},$nm:"url"},createComment:{$t:{$pk:".",$nm:"Comment"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"data"}]],$mt:"m",$an:{shared:[],doc:["creates a new comment"]},$nm:"createComment"},referrer:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns uri of the page which linked to this document"]},$nm:"referrer"},documentURI:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns documents URI"]},$nm:"documentURI"},setSelectedStyleSheetSet:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"sheet"}]],$mt:"m",$an:{shared:[],doc:["returns a linked to or embeded in the document by its name"]},$nm:"setSelectedStyleSheetSet"},images:{$t:{$pk:".",$nm:"HTMLCollection"},$mt:"m",$an:{shared:[],doc:["returns a collection of all image elements in the document"]},$nm:"images"},styleSheets:{$t:{$pk:"com.openswimsoftware.ceylon.js.dom.stylesheets",$nm:"StyleSheetList"},$mt:"m",$an:{shared:[],doc:["returns collection of StyleSheets linked to or embeded in the document"]},$nm:"styleSheets"},doctype:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"DocumentType"}]},$mt:"m",$an:{shared:[],doc:["returns the documents doctype"]},$nm:"doctype"},createCDATASection:{$t:{$pk:".",$nm:"CDATASection"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"data"}]],$mt:"m",$an:{shared:[],doc:["creates a new CDATASection"]},$nm:"createCDATASection"},getDomain:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["get the documents domain"]},$nm:"getDomain"},importNode:{$t:{$pk:".",$nm:"Node"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"externalNode"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"prm",$def:1,$nm:"deep"}]],$mt:"m",$an:{shared:[],doc:["creates a copy of a node from another document that can be inserted into the current document"]},$nm:"importNode"},adoptNode:{$t:{$pk:".",$nm:"Node"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"node"}]],$mt:"m",$an:{shared:[],doc:["adapts a node from a external document"]},$nm:"adoptNode"},getDesignMode:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["returns if the documents design mode is on"]},$nm:"getDesignMode"},plugins:{$t:{$pk:".",$nm:"HTMLCollection"},$mt:"m",$an:{shared:[],doc:["returns collection of all the plugin elements on the document"]},$nm:"plugins"},compatMode:{$t:{$pk:".",$nm:"CompatMode"},$mt:"m",$an:{shared:[],doc:["returns the documents compatablity mode"]},$nm:"compatMode"},createTextNode:{$t:{$pk:".",$nm:"Text"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"data"}]],$mt:"m",$an:{shared:[],doc:["creates a new text node"]},$nm:"createTextNode"},createElementNS:{$t:{$pk:".",$nm:"Element"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"namespaceURI"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"qualifiedName"}]],$mt:"m",$an:{shared:[],doc:["creates a new element in the given namespace"]},$nm:"createElementNS"},querySelectorAll:{$t:{$pk:".",$nm:"NodeList"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"selectors"}]],$mt:"m",$an:{shared:[],doc:["returns a list of all elements within the document"]},$nm:"querySelectorAll"},createDocumentFragment:{$t:{$pk:".",$nm:"DocumentFragment"},$mt:"m",$an:{shared:[],doc:["creates a document fragment"]},$nm:"createDocumentFragment"},title:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the documents title"]},$nm:"title"},getElementsByTagName:{$t:{comp:"u",$ts:[{$pk:".",$nm:"HTMLCollection"},{$pk:".",$nm:"NodeList"}]},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$def:1,$nm:"name"}]],$mt:"m",$an:{shared:[],doc:["returns a collection of elements on the document by the tagname"]},$nm:"getElementsByTagName"},write:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"line"}]],$mt:"m",$an:{shared:[],doc:["write the string to the document"]},$nm:"write"},setDomain:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"domain"}]],$mt:"m",$an:{shared:[],doc:["set the domain string of the document"]},$nm:"setDomain"},forms:{$t:{$pk:".",$nm:"HTMLCollection"},$mt:"m",$an:{shared:[],doc:["returns a collection of all form elements in the document"]},$nm:"forms"},characterSet:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns documents CharacterSet"]},$nm:"characterSet"},lastModified:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the date the document was last modified as a string"]},$nm:"lastModified"},links:{$t:{$pk:".",$nm:"HTMLCollection"},$mt:"m",$an:{shared:[],doc:["returns all of the link elements in the document"]},$nm:"links"},readyState:{$t:{$pk:".",$nm:"DocumentReadyState"},$mt:"m",$an:{shared:[],doc:["returns the current ready state of the document"]},$nm:"readyState"},createRange:{$t:{$pk:".",$nm:"Range"},$mt:"m",$an:{shared:[],doc:["create a new range"]},$nm:"createRange"},anchors:{$t:{$pk:".",$nm:"NodeList"},$mt:"m",$an:{shared:[],doc:["returns a collection of all anchors in the document"]},$nm:"anchors"},selectedStyleSheetSet:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the name of the StyleSheet set that is currently in use on the document"]},$nm:"selectedStyleSheetSet"},implementation:{$t:{$pk:".",$nm:"DOMImplementation"},$mt:"m",$an:{shared:[],doc:["returns the DOM implementation associated with the document"]},$nm:"implementation"},setCookie:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"cookie"}]],$mt:"m",$an:{shared:[],doc:["set cookies associated with the document in the form of a comma sepearted list of key=value pairs"]},$nm:"setCookie"},lastStyleSheetSet:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns the name of the last enabled StyleSheet Set for the document"]},$nm:"lastStyleSheetSet"},createTreeWalker:{$t:{$pk:".",$nm:"TreeWalker"},$ps:[[{$t:{$pk:".",$nm:"Node"},$mt:"prm",$nm:"root"},{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$def:1,$nm:"whatToShow"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"NodeFilter"}]},$mt:"prm",$def:1,$nm:"filter"}]],$mt:"m",$an:{shared:[],doc:["returns a new tree walker for walking the document"]},$nm:"createTreeWalker"},createElement:{$t:{$pk:".",$nm:"Element"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"tagName"}]],$mt:"m",$an:{shared:[],doc:["creates a new element"]},$nm:"createElement"},createProcessingInstruction:{$t:{$pk:".",$nm:"ProcessingInstruction"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"target"},{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"data"}]],$mt:"m",$an:{shared:[],doc:["creates a processing instruction node"]},$nm:"createProcessingInstruction"}},$nm:"DocumentAbs"},Element:{super:{$pk:".",$nm:"ElementAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a DOM Element"]},$at:{native:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$hfpsvg:{$t:{$pk:".",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"Element"}},"$mod-bin":"7.0","com.openswimsoftware.ceylon.js.dom.stylesheets":{StyleSheetAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{title:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns StyleSheet title"]},$nm:"title"},ownerNode:{$t:{$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"Node"},$mt:"m",$an:{shared:[],doc:["returns StyleSheets owning node"]},$nm:"ownerNode"},type:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns StyleSheets mime type string"]},$nm:"type"},media:{$t:{$pk:".",$nm:"MediaList"},$mt:"m",$an:{shared:[],doc:["returns the collection of Media Queries associated with the StyleSheet"]},$nm:"media"},href:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["returns StyleSheet location"]},$nm:"href"},parentStyleSheet:{$t:{$pk:".",$nm:"StyleSheet"},$mt:"m",$an:{shared:[],doc:["returns StyleSheets parent"]},$nm:"parentStyleSheet"},disabled:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Boolean"},$mt:"m",$an:{shared:[],doc:["returns if the StyleSheet is disabled or not"]},$nm:"disabled"}},$nm:"StyleSheetAbs"},MediaListAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{appendMedium:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"newMedium"}]],$mt:"m",$an:{shared:[],doc:["appends the passed Media Query to the collection"]},$nm:"appendMedium"},setMediaText:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"text"}]],$mt:"m",$an:{shared:[],doc:["sets the media list to a string of Media Queries"]},$nm:"setMediaText"},item:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"index"}]],$mt:"m",$an:{shared:[],doc:["returns Media Query at the specified index"]},$nm:"item"},length:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the number of Media Queries in the Collection"]},$nm:"length"},deleteMedium:{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"String"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"}]},$mt:"prm",$nm:"oldMedium"}]],$mt:"m",$an:{shared:[],doc:["removes any media querys which match the passed query string"]},$nm:"deleteMedium"},getMediaText:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSString"},$mt:"m",$an:{shared:[],doc:["serializes Media Queries"]},$nm:"getMediaText"}},$nm:"MediaListAbs"},"$pkg-shared":1,MediaList:{super:{$pk:".",$nm:"MediaListAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["Collection of Media Queries"]},$at:{native:{$t:{$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$6r3bd3:{$t:{$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"MediaList"},StyleSheet:{super:{$pk:".",$nm:"StyleSheetAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["represents a basic StyleSheet"]},$at:{native:{$t:{$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"},n$k6r7ub:{$t:{$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"unknown"},$mt:"a",$nm:"n"}},$nm:"StyleSheet"},StyleSheetListAbs:{abstract:1,super:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSObjectAbs"},$mt:"c",$an:{abstract:[],shared:[]},$m:{item:{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Null"},{$pk:".",$nm:"StyleSheet"}]},$ps:[[{$t:{comp:"u",$ts:[{$md:"ceylon.language",$pk:"$",$nm:"Integer"},{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"}]},$mt:"prm",$nm:"index"}]],$mt:"m",$an:{shared:[],doc:["returns the StyleSheet at the specified index"]},$nm:"item"},length:{$t:{$md:"com.openswimsoftware.ceylon.js.language",$pk:"com.openswimsoftware.ceylon.js.language",$nm:"JSNumber"},$mt:"m",$an:{shared:[],doc:["returns the length of the StyleSheet Collection"]},$nm:"length"}},$nm:"StyleSheetListAbs"},StyleSheetList:{super:{$pk:".",$nm:"StyleSheetListAbs"},$ps:[{$t:{$md:"ceylon.language",$pk:"$",$nm:"Anything"},$mt:"prm",$nm:"n"}],$mt:"c",$an:{shared:[],doc:["a collection of StyleSheets"]},$at:{n$qzz87z:{$t:{$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"unknown"},$mt:"a",$nm:"n"},native:{$t:{$pk:"com.openswimsoftware.ceylon.js.dom",$nm:"unknown"},$mt:"a",$an:{shared:[],actual:[]},$nm:"native"}},$nm:"StyleSheetList"}}};
ex$.$CCMM$=function(){return $CCMM$;};
var m$1=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$1.$addmod$(m$1,'ceylon.language/1.1.0');
var m$9f=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
m$1.$addmod$(m$9f,'com.openswimsoftware.ceylon.js.language/1.8.0');
function AttrAbs(attrAbs$){
    $init$AttrAbs();
    if(attrAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(attrAbs$);
    return attrAbs$;
}
AttrAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','AttrAbs']};};
ex$.AttrAbs=AttrAbs;
function $init$AttrAbs(){
    if(AttrAbs.$$===undefined){
        m$1.initTypeProto(AttrAbs,'com.openswimsoftware.ceylon.js.dom::AttrAbs',m$9f.JSObjectAbs);
        (function(attrAbs$){
            attrAbs$.isId=function isId(){
                var attrAbs$=this;
                /*Begin dynamic block*/
                if(attrAbs$.$_native.isId){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };attrAbs$.isId.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:AttrAbs,$an:function(){return[m$1.doc("returns the Attr is an ID or not"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','AttrAbs','$m','isId']};};
            attrAbs$.name=function name(){
                var attrAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(attrAbs$.$_native.name);
                /*End dynamic block*/
            };attrAbs$.name.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:AttrAbs,$an:function(){return[m$1.doc("returns the Attr name"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','AttrAbs','$m','name']};};
            attrAbs$.getValue=function getValue(){
                var attrAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(attrAbs$.$_native.value);
                /*End dynamic block*/
            };attrAbs$.getValue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:AttrAbs,$an:function(){return[m$1.doc("returns the Attr value string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','AttrAbs','$m','getValue']};};
            attrAbs$.setValue=function setValue($az){
                var attrAbs$=this;
                var $b0=$az;
                if(m$1.is$($az,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    attrAbs$.$_native.value=$b0.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($az,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    attrAbs$.$_native.value=$b0.$_native;
                    /*End dynamic block*/
                }
            };attrAbs$.setValue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:AttrAbs,$an:function(){return[m$1.doc("sets the Attr value string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','AttrAbs','$m','setValue']};};
        })(AttrAbs.$$.prototype);
    }
    return AttrAbs;
}
ex$.$init$AttrAbs=$init$AttrAbs;
$init$AttrAbs();
function Attr($b1,attr$){
    $init$Attr();
    if(attr$===undefined)attr$=new Attr.$$;
    attr$.$b1_=$b1;
    AttrAbs(attr$);
    attr$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Attr,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','Attr','$at','native']};}};
    /*Begin dynamic block*/
    attr$.$_native=attr$.$b1;/*End dynamic block*/
    return attr$;
}
Attr.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AttrAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a DOM Attr"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','Attr']};};
ex$.Attr=Attr;
function $init$Attr(){
    if(Attr.$$===undefined){
        m$1.initTypeProto(Attr,'com.openswimsoftware.ceylon.js.dom::Attr',$init$AttrAbs());
        (function(attr$){
            m$1.atr$(attr$,'$b1',function(){return this.$b1_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Attr,d:['com.openswimsoftware.ceylon.js.dom','Attr','$at','n$pmg84x']};});
        })(Attr.$$.prototype);
    }
    return Attr;
}
ex$.$init$Attr=$init$Attr;
$init$Attr();
function CommentAbs(commentAbs$){
    $init$CommentAbs();
    if(commentAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    CharacterDataAbs(commentAbs$);
    return commentAbs$;
}
CommentAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CharacterDataAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','CommentAbs']};};
ex$.CommentAbs=CommentAbs;
function $init$CommentAbs(){
    if(CommentAbs.$$===undefined){
        m$1.initTypeProto(CommentAbs,'com.openswimsoftware.ceylon.js.dom::CommentAbs',$init$CharacterDataAbs());
    }
    return CommentAbs;
}
ex$.$init$CommentAbs=$init$CommentAbs;
$init$CommentAbs();
function Comment($b2,comment$){
    $init$Comment();
    if(comment$===undefined)comment$=new Comment.$$;
    comment$.$b2_=$b2;
    CommentAbs(comment$);
    comment$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Comment,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','Comment','$at','native']};}};
    /*Begin dynamic block*/
    comment$.$_native=comment$.$b2;/*End dynamic block*/
    return comment$;
}
Comment.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CommentAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a DOM comment"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','Comment']};};
ex$.Comment=Comment;
function $init$Comment(){
    if(Comment.$$===undefined){
        m$1.initTypeProto(Comment,'com.openswimsoftware.ceylon.js.dom::Comment',$init$CommentAbs());
        (function(comment$){
            m$1.atr$(comment$,'$b2',function(){return this.$b2_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Comment,d:['com.openswimsoftware.ceylon.js.dom','Comment','$at','n$kbgwgf']};});
        })(Comment.$$.prototype);
    }
    return Comment;
}
ex$.$init$Comment=$init$Comment;
$init$Comment();
function CharacterDataAbs(characterDataAbs$){
    $init$CharacterDataAbs();
    if(characterDataAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    NodeAbs(characterDataAbs$);
    return characterDataAbs$;
}
CharacterDataAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs']};};
ex$.CharacterDataAbs=CharacterDataAbs;
function $init$CharacterDataAbs(){
    if(CharacterDataAbs.$$===undefined){
        m$1.initTypeProto(CharacterDataAbs,'com.openswimsoftware.ceylon.js.dom::CharacterDataAbs',$init$NodeAbs());
        (function(characterDataAbs$){
            characterDataAbs$.getData=function getData(){
                var characterDataAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(characterDataAbs$.$_native.data);
                /*End dynamic block*/
            };characterDataAbs$.getData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:CharacterDataAbs,$an:function(){return[m$1.doc("returns the CharacterData"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs','$m','getData']};};
            characterDataAbs$.setData=function setData($b3){
                var characterDataAbs$=this;
                var $b4=$b3;
                if(m$1.is$($b3,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    characterDataAbs$.$_native.data=$b4.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($b3,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    characterDataAbs$.$_native.data=$b4.$_native;
                    /*End dynamic block*/
                }
            };characterDataAbs$.setData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[m$1.doc("set the CharacterData"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs','$m','setData']};};
            characterDataAbs$.length=function length(){
                var characterDataAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(characterDataAbs$.$_native.length);
                /*End dynamic block*/
            };characterDataAbs$.length.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:CharacterDataAbs,$an:function(){return[m$1.doc("returns the length of the CharacterData"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs','$m','length']};};
            characterDataAbs$.substringData=function substringData($b5,$b6){
                var characterDataAbs$=this;
                var $b7=$b5;
                if(m$1.is$($b5,{t:m$1.Integer})) {
                    var $b8=$b6;
                    if(m$1.is$($b6,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return m$9f.JSString(characterDataAbs$.$_native.substringData($b7,$b8));
                        /*End dynamic block*/
                    }else if(m$1.is$($b6,{t:m$9f.JSNumber})) {
                        /*Begin dynamic block*/
                        return m$9f.JSString(characterDataAbs$.$_native.substringData($b7,$b8.$_native));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($b5,{t:m$9f.JSNumber})) {
                    var $b9=$b6;
                    if(m$1.is$($b6,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return m$9f.JSString(characterDataAbs$.$_native.substringData($b7.$_native,$b9));
                        /*End dynamic block*/
                    }else if(m$1.is$($b6,{t:m$9f.JSNumber})) {
                        /*Begin dynamic block*/
                        return m$9f.JSString(characterDataAbs$.$_native.substringData($b7.$_native,$b9.$_native));
                        /*End dynamic block*/
                    }
                }
            };characterDataAbs$.substringData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[{$nm:'offset',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[m$1.doc("returns a subtstring starting at offset and through a count"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs','$m','substringData']};};
            characterDataAbs$.appendData=function appendData($ba){
                var characterDataAbs$=this;
                var $bb=$ba;
                if(m$1.is$($ba,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    characterDataAbs$.$_native.appendData($bb.valueOf());
                    /*End dynamic block*/
                }else if(m$1.is$($ba,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    characterDataAbs$.$_native.appendData($bb.$_native);
                    /*End dynamic block*/
                }
            };characterDataAbs$.appendData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[m$1.doc("append the Characters with String data"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs','$m','appendData']};};
            characterDataAbs$.insertData=function insertData($bc,$bd){
                var characterDataAbs$=this;
                var $be=$bc;
                if(m$1.is$($bc,{t:m$1.Integer})) {
                    var $bf=$bd;
                    if(m$1.is$($bd,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        characterDataAbs$.$_native.insertData($be,$bf.valueOf());
                        /*End dynamic block*/
                    }else if(m$1.is$($bd,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        characterDataAbs$.$_native.insertData($be,$bf.$_native);
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($bc,{t:m$9f.JSNumber})) {
                    var $bg=$bd;
                    if(m$1.is$($bd,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        characterDataAbs$.$_native.insertData($be.$_native,$bg.valueOf());
                        /*End dynamic block*/
                    }else if(m$1.is$($bd,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        characterDataAbs$.$_native.insertData($be.$_native,$bg.$_native);
                        /*End dynamic block*/
                    }
                }
            };characterDataAbs$.insertData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[m$1.doc("insert the Characters starting at offset using the String data"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs','$m','insertData']};};
            characterDataAbs$.deleteData=function deleteData($bh,$bi){
                var characterDataAbs$=this;
                var $bj=$bh;
                if(m$1.is$($bh,{t:m$1.Integer})) {
                    var $bk=$bi;
                    if(m$1.is$($bi,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        characterDataAbs$.$_native.deleteData($bj,$bk);
                        /*End dynamic block*/
                    }else if(m$1.is$($bi,{t:m$9f.JSNumber})) {
                        /*Begin dynamic block*/
                        characterDataAbs$.$_native.deleteData($bj,$bk.$_native);
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($bh,{t:m$9f.JSNumber})) {
                    var $bl=$bi;
                    if(m$1.is$($bi,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        characterDataAbs$.$_native.deleteData($bj.$_native,$bl);
                        /*End dynamic block*/
                    }else if(m$1.is$($bi,{t:m$9f.JSNumber})) {
                        /*Begin dynamic block*/
                        characterDataAbs$.$_native.deleteData($bj.$_native,$bl.$_native);
                        /*End dynamic block*/
                    }
                }
            };characterDataAbs$.deleteData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs','$m','deleteData']};};
            characterDataAbs$.replaceData=function replaceData($bm,$bn,$bo){
                var characterDataAbs$=this;
                var $bp=$bm;
                if(m$1.is$($bm,{t:m$1.Integer})) {
                    var $bq=$bn;
                    if(m$1.is$($bn,{t:m$1.Integer})) {
                        var $br=$bo;
                        if(m$1.is$($bo,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            characterDataAbs$.$_native.replaceData($bp,$bq,$br.valueOf());
                            /*End dynamic block*/
                        }else if(m$1.is$($bo,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            characterDataAbs$.$_native.replaceData($bp,$bq,$br.$_native);
                            /*End dynamic block*/
                        }
                    }else if(m$1.is$($bn,{t:m$9f.JSNumber})) {
                        var $bs=$bo;
                        if(m$1.is$($bo,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            characterDataAbs$.$_native.replaceData($bp,$bq.$_native,$bs.valueOf());
                            /*End dynamic block*/
                        }else if(m$1.is$($bo,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            characterDataAbs$.$_native.replaceData($bp,$bq.$_native,$bs.$_native);
                            /*End dynamic block*/
                        }
                    }
                }else if(m$1.is$($bm,{t:m$9f.JSNumber})) {
                    var $bt=$bn;
                    if(m$1.is$($bn,{t:m$1.Integer})) {
                        var $bu=$bo;
                        if(m$1.is$($bo,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            characterDataAbs$.$_native.replaceData($bp.$_native,$bt,$bu.valueOf());
                            /*End dynamic block*/
                        }else if(m$1.is$($bo,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            characterDataAbs$.$_native.replaceData($bp.$_native,$bt,$bu.$_native);
                            /*End dynamic block*/
                        }
                    }else if(m$1.is$($bn,{t:m$9f.JSNumber})) {
                        var $bv=$bo;
                        if(m$1.is$($bo,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            characterDataAbs$.$_native.replaceData($bp.$_native,$bt.$_native,$bv.valueOf());
                            /*End dynamic block*/
                        }else if(m$1.is$($bo,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            characterDataAbs$.$_native.replaceData($bp.$_native,$bt.$_native,$bv.$_native);
                            /*End dynamic block*/
                        }
                    }
                }
            };characterDataAbs$.replaceData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[m$1.doc("replace the Characters starting at offset to count using the String data"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterDataAbs','$m','replaceData']};};
        })(CharacterDataAbs.$$.prototype);
    }
    return CharacterDataAbs;
}
ex$.$init$CharacterDataAbs=$init$CharacterDataAbs;
$init$CharacterDataAbs();
function CharacterData($bw,characterData$){
    $init$CharacterData();
    if(characterData$===undefined)characterData$=new CharacterData.$$;
    characterData$.$bw_=$bw;
    CharacterDataAbs(characterData$);
    characterData$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:CharacterData,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterData','$at','native']};}};
    /*Begin dynamic block*/
    characterData$.$_native=characterData$.$bw;/*End dynamic block*/
    return characterData$;
}
CharacterData.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CharacterDataAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a DOM CharacterData segment used by Text, Comment and Processing Instruction"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CharacterData']};};
ex$.CharacterData=CharacterData;
function $init$CharacterData(){
    if(CharacterData.$$===undefined){
        m$1.initTypeProto(CharacterData,'com.openswimsoftware.ceylon.js.dom::CharacterData',$init$CharacterDataAbs());
        (function(characterData$){
            m$1.atr$(characterData$,'$bw',function(){return this.$bw_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:CharacterData,d:['com.openswimsoftware.ceylon.js.dom','CharacterData','$at','n$xysemb']};});
        })(CharacterData.$$.prototype);
    }
    return CharacterData;
}
ex$.$init$CharacterData=$init$CharacterData;
$init$CharacterData();
var m$bx=require('com/openswimsoftware/ceylon/js/html/5.0.0/com.openswimsoftware.ceylon.js.html-5.0.0');
m$1.$addmod$(m$bx,'com.openswimsoftware.ceylon.js.html/5.0.0');
function DocumentPosition($by,documentPosition$){
    $init$DocumentPosition();
    if(documentPosition$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    documentPosition$.$by_=$by;
    return documentPosition$;
}
DocumentPosition.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],of:[$prop$get$bz,$prop$get$c0,$prop$get$c1,$prop$get$c2,$prop$get$c3,$prop$get$c4],$an:function(){return[m$1.doc("Document Positon Type"),m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentPosition']};};
ex$.DocumentPosition=DocumentPosition;
function $init$DocumentPosition(){
    if(DocumentPosition.$$===undefined){
        m$1.initTypeProto(DocumentPosition,'com.openswimsoftware.ceylon.js.dom::DocumentPosition',m$1.Basic);
        (function(documentPosition$){
            m$1.atr$(documentPosition$,'$by',function(){return this.$by_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:DocumentPosition,d:['com.openswimsoftware.ceylon.js.dom','DocumentPosition','$at','name$ka23jj']};});
        })(DocumentPosition.$$.prototype);
    }
    return DocumentPosition;
}
ex$.$init$DocumentPosition=$init$DocumentPosition;
$init$DocumentPosition();
function $bz(){
    var documentPositionContainedBy$=new $bz.$$;
    DocumentPosition("documentPositionContainedBy",documentPositionContainedBy$);
    return documentPositionContainedBy$;
};$bz.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentPosition},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionContainedBy']};};
function $init$$bz(){
    if($bz.$$===undefined){
        m$1.initTypeProto($bz,'com.openswimsoftware.ceylon.js.dom::documentPositionContainedBy',$init$DocumentPosition());
    }
    return $bz;
}
ex$.$init$$bz=$init$$bz;
$init$$bz();
var $c5;
function getDocumentPositionContainedBy(){
    if($c5===undefined){$c5=$init$$bz()();$c5.$crtmm$=getDocumentPositionContainedBy.$crtmm$;}
    return $c5;
}
ex$.getDocumentPositionContainedBy=getDocumentPositionContainedBy;
getDocumentPositionContainedBy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$bz},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionContainedBy']};};
$prop$getDocumentPositionContainedBy={get:getDocumentPositionContainedBy,$crtmm$:getDocumentPositionContainedBy.$crtmm$};
get$bz=getDocumentPositionContainedBy;$prop$get$bz=getDocumentPositionContainedBy;
ex$.$prop$getDocumentPositionContainedBy=$prop$getDocumentPositionContainedBy;
function $c0(){
    var documentPositionContains$=new $c0.$$;
    DocumentPosition("documentPositionContains",documentPositionContains$);
    return documentPositionContains$;
};$c0.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentPosition},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionContains']};};
function $init$$c0(){
    if($c0.$$===undefined){
        m$1.initTypeProto($c0,'com.openswimsoftware.ceylon.js.dom::documentPositionContains',$init$DocumentPosition());
    }
    return $c0;
}
ex$.$init$$c0=$init$$c0;
$init$$c0();
var $c6;
function getDocumentPositionContains(){
    if($c6===undefined){$c6=$init$$c0()();$c6.$crtmm$=getDocumentPositionContains.$crtmm$;}
    return $c6;
}
ex$.getDocumentPositionContains=getDocumentPositionContains;
getDocumentPositionContains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$c0},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionContains']};};
$prop$getDocumentPositionContains={get:getDocumentPositionContains,$crtmm$:getDocumentPositionContains.$crtmm$};
get$c0=getDocumentPositionContains;$prop$get$c0=getDocumentPositionContains;
ex$.$prop$getDocumentPositionContains=$prop$getDocumentPositionContains;
function $c1(){
    var documentPositionDisconnected$=new $c1.$$;
    DocumentPosition("documentPositionDisconnected",documentPositionDisconnected$);
    return documentPositionDisconnected$;
};$c1.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentPosition},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionDisconnected']};};
function $init$$c1(){
    if($c1.$$===undefined){
        m$1.initTypeProto($c1,'com.openswimsoftware.ceylon.js.dom::documentPositionDisconnected',$init$DocumentPosition());
    }
    return $c1;
}
ex$.$init$$c1=$init$$c1;
$init$$c1();
var $c7;
function getDocumentPositionDisconnected(){
    if($c7===undefined){$c7=$init$$c1()();$c7.$crtmm$=getDocumentPositionDisconnected.$crtmm$;}
    return $c7;
}
ex$.getDocumentPositionDisconnected=getDocumentPositionDisconnected;
getDocumentPositionDisconnected.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$c1},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionDisconnected']};};
$prop$getDocumentPositionDisconnected={get:getDocumentPositionDisconnected,$crtmm$:getDocumentPositionDisconnected.$crtmm$};
get$c1=getDocumentPositionDisconnected;$prop$get$c1=getDocumentPositionDisconnected;
ex$.$prop$getDocumentPositionDisconnected=$prop$getDocumentPositionDisconnected;
function $c2(){
    var documentPositionFollowing$=new $c2.$$;
    DocumentPosition("documentPositionFollowing",documentPositionFollowing$);
    return documentPositionFollowing$;
};$c2.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentPosition},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionFollowing']};};
function $init$$c2(){
    if($c2.$$===undefined){
        m$1.initTypeProto($c2,'com.openswimsoftware.ceylon.js.dom::documentPositionFollowing',$init$DocumentPosition());
    }
    return $c2;
}
ex$.$init$$c2=$init$$c2;
$init$$c2();
var $c8;
function getDocumentPositionFollowing(){
    if($c8===undefined){$c8=$init$$c2()();$c8.$crtmm$=getDocumentPositionFollowing.$crtmm$;}
    return $c8;
}
ex$.getDocumentPositionFollowing=getDocumentPositionFollowing;
getDocumentPositionFollowing.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$c2},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionFollowing']};};
$prop$getDocumentPositionFollowing={get:getDocumentPositionFollowing,$crtmm$:getDocumentPositionFollowing.$crtmm$};
get$c2=getDocumentPositionFollowing;$prop$get$c2=getDocumentPositionFollowing;
ex$.$prop$getDocumentPositionFollowing=$prop$getDocumentPositionFollowing;
function $c3(){
    var documentPositionImplementationSpecific$=new $c3.$$;
    DocumentPosition("documentPositionImplementationSpecific",documentPositionImplementationSpecific$);
    return documentPositionImplementationSpecific$;
};$c3.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentPosition},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionImplementationSpecific']};};
function $init$$c3(){
    if($c3.$$===undefined){
        m$1.initTypeProto($c3,'com.openswimsoftware.ceylon.js.dom::documentPositionImplementationSpecific',$init$DocumentPosition());
    }
    return $c3;
}
ex$.$init$$c3=$init$$c3;
$init$$c3();
var $c9;
function getDocumentPositionImplementationSpecific(){
    if($c9===undefined){$c9=$init$$c3()();$c9.$crtmm$=getDocumentPositionImplementationSpecific.$crtmm$;}
    return $c9;
}
ex$.getDocumentPositionImplementationSpecific=getDocumentPositionImplementationSpecific;
getDocumentPositionImplementationSpecific.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$c3},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionImplementationSpecific']};};
$prop$getDocumentPositionImplementationSpecific={get:getDocumentPositionImplementationSpecific,$crtmm$:getDocumentPositionImplementationSpecific.$crtmm$};
get$c3=getDocumentPositionImplementationSpecific;$prop$get$c3=getDocumentPositionImplementationSpecific;
ex$.$prop$getDocumentPositionImplementationSpecific=$prop$getDocumentPositionImplementationSpecific;
function $c4(){
    var documentPositionPreceding$=new $c4.$$;
    DocumentPosition("documentPositionPreceding",documentPositionPreceding$);
    return documentPositionPreceding$;
};$c4.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentPosition},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionPreceding']};};
function $init$$c4(){
    if($c4.$$===undefined){
        m$1.initTypeProto($c4,'com.openswimsoftware.ceylon.js.dom::documentPositionPreceding',$init$DocumentPosition());
    }
    return $c4;
}
ex$.$init$$c4=$init$$c4;
$init$$c4();
var $ca;
function getDocumentPositionPreceding(){
    if($ca===undefined){$ca=$init$$c4()();$ca.$crtmm$=getDocumentPositionPreceding.$crtmm$;}
    return $ca;
}
ex$.getDocumentPositionPreceding=getDocumentPositionPreceding;
getDocumentPositionPreceding.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$c4},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentPositionPreceding']};};
$prop$getDocumentPositionPreceding={get:getDocumentPositionPreceding,$crtmm$:getDocumentPositionPreceding.$crtmm$};
get$c4=getDocumentPositionPreceding;$prop$get$c4=getDocumentPositionPreceding;
ex$.$prop$getDocumentPositionPreceding=$prop$getDocumentPositionPreceding;
function CompatMode($cb,compatMode$){
    $init$CompatMode();
    if(compatMode$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    compatMode$.$cb_=$cb;
    return compatMode$;
}
CompatMode.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],of:[$prop$get$cc,$prop$get$cd],$an:function(){return[m$1.doc("Document Compatablity Mode"),m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','CompatMode']};};
ex$.CompatMode=CompatMode;
function $init$CompatMode(){
    if(CompatMode.$$===undefined){
        m$1.initTypeProto(CompatMode,'com.openswimsoftware.ceylon.js.dom::CompatMode',m$1.Basic);
        (function(compatMode$){
            m$1.atr$(compatMode$,'$cb',function(){return this.$cb_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CompatMode,d:['com.openswimsoftware.ceylon.js.dom','CompatMode','$at','name$8prl16']};});
        })(CompatMode.$$.prototype);
    }
    return CompatMode;
}
ex$.$init$CompatMode=$init$CompatMode;
$init$CompatMode();
function $cc(){
    var css1Compat$=new $cc.$$;
    CompatMode("CSS1Compat",css1Compat$);
    return css1Compat$;
};$cc.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CompatMode},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','css1Compat']};};
function $init$$cc(){
    if($cc.$$===undefined){
        m$1.initTypeProto($cc,'com.openswimsoftware.ceylon.js.dom::css1Compat',$init$CompatMode());
    }
    return $cc;
}
ex$.$init$$cc=$init$$cc;
$init$$cc();
var $ce;
function getCss1Compat(){
    if($ce===undefined){$ce=$init$$cc()();$ce.$crtmm$=getCss1Compat.$crtmm$;}
    return $ce;
}
ex$.getCss1Compat=getCss1Compat;
getCss1Compat.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$cc},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','css1Compat']};};
$prop$getCss1Compat={get:getCss1Compat,$crtmm$:getCss1Compat.$crtmm$};
get$cc=getCss1Compat;$prop$get$cc=getCss1Compat;
ex$.$prop$getCss1Compat=$prop$getCss1Compat;
function $cd(){
    var backCompat$=new $cd.$$;
    CompatMode("BackCompat",backCompat$);
    return backCompat$;
};$cd.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CompatMode},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','backCompat']};};
function $init$$cd(){
    if($cd.$$===undefined){
        m$1.initTypeProto($cd,'com.openswimsoftware.ceylon.js.dom::backCompat',$init$CompatMode());
    }
    return $cd;
}
ex$.$init$$cd=$init$$cd;
$init$$cd();
var $cf;
function getBackCompat(){
    if($cf===undefined){$cf=$init$$cd()();$cf.$crtmm$=getBackCompat.$crtmm$;}
    return $cf;
}
ex$.getBackCompat=getBackCompat;
getBackCompat.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$cd},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','backCompat']};};
$prop$getBackCompat={get:getBackCompat,$crtmm$:getBackCompat.$crtmm$};
get$cd=getBackCompat;$prop$get$cd=getBackCompat;
ex$.$prop$getBackCompat=$prop$getBackCompat;
function DocumentDirection($cg,documentDirection$){
    $init$DocumentDirection();
    if(documentDirection$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    documentDirection$.$cg_=$cg;
    return documentDirection$;
}
DocumentDirection.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],of:[$prop$get$ch,$prop$get$ci],$an:function(){return[m$1.doc("Document Direction"),m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentDirection']};};
ex$.DocumentDirection=DocumentDirection;
function $init$DocumentDirection(){
    if(DocumentDirection.$$===undefined){
        m$1.initTypeProto(DocumentDirection,'com.openswimsoftware.ceylon.js.dom::DocumentDirection',m$1.Basic);
        (function(documentDirection$){
            m$1.atr$(documentDirection$,'$cg',function(){return this.$cg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:DocumentDirection,d:['com.openswimsoftware.ceylon.js.dom','DocumentDirection','$at','name$t0mykx']};});
        })(DocumentDirection.$$.prototype);
    }
    return DocumentDirection;
}
ex$.$init$DocumentDirection=$init$DocumentDirection;
$init$DocumentDirection();
function $ch(){
    var rtl$=new $ch.$$;
    DocumentDirection("rtl",rtl$);
    return rtl$;
};$ch.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentDirection},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','rtl']};};
function $init$$ch(){
    if($ch.$$===undefined){
        m$1.initTypeProto($ch,'com.openswimsoftware.ceylon.js.dom::rtl',$init$DocumentDirection());
    }
    return $ch;
}
ex$.$init$$ch=$init$$ch;
$init$$ch();
var $cj;
function getRtl(){
    if($cj===undefined){$cj=$init$$ch()();$cj.$crtmm$=getRtl.$crtmm$;}
    return $cj;
}
ex$.getRtl=getRtl;
getRtl.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$ch},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','rtl']};};
$prop$getRtl={get:getRtl,$crtmm$:getRtl.$crtmm$};
get$ch=getRtl;$prop$get$ch=getRtl;
ex$.$prop$getRtl=$prop$getRtl;
function $ci(){
    var ltr$=new $ci.$$;
    DocumentDirection("ltr",ltr$);
    return ltr$;
};$ci.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentDirection},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ltr']};};
function $init$$ci(){
    if($ci.$$===undefined){
        m$1.initTypeProto($ci,'com.openswimsoftware.ceylon.js.dom::ltr',$init$DocumentDirection());
    }
    return $ci;
}
ex$.$init$$ci=$init$$ci;
$init$$ci();
var $ck;
function getLtr(){
    if($ck===undefined){$ck=$init$$ci()();$ck.$crtmm$=getLtr.$crtmm$;}
    return $ck;
}
ex$.getLtr=getLtr;
getLtr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$ci},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ltr']};};
$prop$getLtr={get:getLtr,$crtmm$:getLtr.$crtmm$};
get$ci=getLtr;$prop$get$ci=getLtr;
ex$.$prop$getLtr=$prop$getLtr;
function DocumentReadyState($cl,documentReadyState$){
    $init$DocumentReadyState();
    if(documentReadyState$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    documentReadyState$.$cl_=$cl;
    return documentReadyState$;
}
DocumentReadyState.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],of:[$prop$get$cm,$prop$get$cn,$prop$get$co],$an:function(){return[m$1.doc("Document Ready State"),m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentReadyState']};};
ex$.DocumentReadyState=DocumentReadyState;
function $init$DocumentReadyState(){
    if(DocumentReadyState.$$===undefined){
        m$1.initTypeProto(DocumentReadyState,'com.openswimsoftware.ceylon.js.dom::DocumentReadyState',m$1.Basic);
        (function(documentReadyState$){
            m$1.atr$(documentReadyState$,'$cl',function(){return this.$cl_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:DocumentReadyState,d:['com.openswimsoftware.ceylon.js.dom','DocumentReadyState','$at','name$ldmlz6']};});
        })(DocumentReadyState.$$.prototype);
    }
    return DocumentReadyState;
}
ex$.$init$DocumentReadyState=$init$DocumentReadyState;
$init$DocumentReadyState();
function $cm(){
    var loading$=new $cm.$$;
    DocumentReadyState("loading",loading$);
    return loading$;
};$cm.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentReadyState},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','loading']};};
function $init$$cm(){
    if($cm.$$===undefined){
        m$1.initTypeProto($cm,'com.openswimsoftware.ceylon.js.dom::loading',$init$DocumentReadyState());
    }
    return $cm;
}
ex$.$init$$cm=$init$$cm;
$init$$cm();
var $cp;
function getLoading(){
    if($cp===undefined){$cp=$init$$cm()();$cp.$crtmm$=getLoading.$crtmm$;}
    return $cp;
}
ex$.getLoading=getLoading;
getLoading.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$cm},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','loading']};};
$prop$getLoading={get:getLoading,$crtmm$:getLoading.$crtmm$};
get$cm=getLoading;$prop$get$cm=getLoading;
ex$.$prop$getLoading=$prop$getLoading;
function $cn(){
    var interactive$=new $cn.$$;
    DocumentReadyState("interactive",interactive$);
    return interactive$;
};$cn.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentReadyState},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','interactive']};};
function $init$$cn(){
    if($cn.$$===undefined){
        m$1.initTypeProto($cn,'com.openswimsoftware.ceylon.js.dom::interactive',$init$DocumentReadyState());
    }
    return $cn;
}
ex$.$init$$cn=$init$$cn;
$init$$cn();
var $cq;
function getInteractive(){
    if($cq===undefined){$cq=$init$$cn()();$cq.$crtmm$=getInteractive.$crtmm$;}
    return $cq;
}
ex$.getInteractive=getInteractive;
getInteractive.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$cn},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','interactive']};};
$prop$getInteractive={get:getInteractive,$crtmm$:getInteractive.$crtmm$};
get$cn=getInteractive;$prop$get$cn=getInteractive;
ex$.$prop$getInteractive=$prop$getInteractive;
function $co(){
    var complete$=new $co.$$;
    DocumentReadyState("complete",complete$);
    return complete$;
};$co.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentReadyState},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','complete']};};
function $init$$co(){
    if($co.$$===undefined){
        m$1.initTypeProto($co,'com.openswimsoftware.ceylon.js.dom::complete',$init$DocumentReadyState());
    }
    return $co;
}
ex$.$init$$co=$init$$co;
$init$$co();
var $cr;
function getComplete(){
    if($cr===undefined){$cr=$init$$co()();$cr.$crtmm$=getComplete.$crtmm$;}
    return $cr;
}
ex$.getComplete=getComplete;
getComplete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$co},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','complete']};};
$prop$getComplete={get:getComplete,$crtmm$:getComplete.$crtmm$};
get$co=getComplete;$prop$get$co=getComplete;
ex$.$prop$getComplete=$prop$getComplete;
function DocumentAbs(documentAbs$){
    $init$DocumentAbs();
    if(documentAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    NodeAbs(documentAbs$);
    return documentAbs$;
}
DocumentAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs']};};
ex$.DocumentAbs=DocumentAbs;
function $init$DocumentAbs(){
    if(DocumentAbs.$$===undefined){
        m$1.initTypeProto(DocumentAbs,'com.openswimsoftware.ceylon.js.dom::DocumentAbs',$init$NodeAbs());
        (function(documentAbs$){
            documentAbs$.activeElement=function activeElement(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return Element(documentAbs$.$_native.activeElement);
                /*End dynamic block*/
            };documentAbs$.activeElement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Element},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns the currently focused element on the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','activeElement']};};
            documentAbs$.adoptNode=function adoptNode($cs){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return Node(documentAbs$.$_native.adoptNode($cs.$_native));
                /*End dynamic block*/
            };documentAbs$.adoptNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("adapts a node from a external document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','adoptNode']};};
            documentAbs$.createRange=function createRange(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return Range(documentAbs$.$_native.createRange());
                /*End dynamic block*/
            };documentAbs$.createRange.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Range},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("create a new range"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createRange']};};
            documentAbs$.url=function url(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(documentAbs$.$_native.URL);
                /*End dynamic block*/
            };documentAbs$.url.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns the document url"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','url']};};
            documentAbs$.createAttribute=function createAttribute($ct){
                var documentAbs$=this;
                var $cu=$ct;
                if(m$1.is$($ct,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return Attr(documentAbs$.$_native.createAttribute($cu.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($ct,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    return Attr(documentAbs$.$_native.createAttribute($cu.$_native));
                    /*End dynamic block*/
                }
            };documentAbs$.createAttribute.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Attr},$ps:[{$nm:'name',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("creates a new attribute"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createAttribute']};};
            documentAbs$.createAttributeNS=function createAttributeNS($cv,$cw){
                var documentAbs$=this;
                var $cx=$cv;
                if(m$1.is$($cv,{t:m$1.String})) {
                    var $cy=$cw;
                    if(m$1.is$($cw,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        return Attr(documentAbs$.$_native.createAttributeNS($cx.valueOf(),$cy.valueOf()));
                        /*End dynamic block*/
                    }else if(m$1.is$($cw,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        return Attr(documentAbs$.$_native.createAttributeNS($cx.valueOf(),$cy.$_native));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($cv,{t:m$9f.JSString})) {
                    var $cz=$cw;
                    if(m$1.is$($cw,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        return Attr(documentAbs$.$_native.createAttributeNS($cx.$_native,$cz.valueOf()));
                        /*End dynamic block*/
                    }else if(m$1.is$($cw,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        return Attr(documentAbs$.$_native.createAttributeNS($cx.$_native,$cz.$_native));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($cv,{t:m$1.Null})) {
                    var $d0=$cw;
                    if(m$1.is$($cw,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        return Attr(documentAbs$.$_native.createAttributeNS(null,$d0.valueOf()));
                        /*End dynamic block*/
                    }else if(m$1.is$($cw,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        return Attr(documentAbs$.$_native.createAttributeNS(null,$d0.$_native));
                        /*End dynamic block*/
                    }
                }
            };documentAbs$.createAttributeNS.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Attr},$ps:[{$nm:'namespace',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("creates a attribute with the given namespace"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createAttributeNS']};};
            documentAbs$.createCDATASection=function createCDATASection($d1){
                var documentAbs$=this;
                var $d2=$d1;
                if(m$1.is$($d1,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return CDATASection(documentAbs$.$_native.createCDATASection($d2.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($d1,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    return CDATASection(documentAbs$.$_native.createCDATASection($d2.$_native));
                    /*End dynamic block*/
                }
            };documentAbs$.createCDATASection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CDATASection},$ps:[{$nm:'data',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("creates a new CDATASection"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createCDATASection']};};
            documentAbs$.createComment=function createComment($d3){
                var documentAbs$=this;
                var $d4=$d3;
                if(m$1.is$($d3,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return Comment(documentAbs$.$_native.createComment($d4.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($d3,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    return Comment(documentAbs$.$_native.createComment($d4.$_native));
                    /*End dynamic block*/
                }
            };documentAbs$.createComment.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Comment},$ps:[{$nm:'data',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("creates a new comment"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createComment']};};
            documentAbs$.createDocumentFragment=function createDocumentFragment(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return DocumentFragment(documentAbs$.$_native.createDocumentFragment());
                /*End dynamic block*/
            };documentAbs$.createDocumentFragment.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DocumentFragment},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("creates a document fragment"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createDocumentFragment']};};
            documentAbs$.createElement=function createElement($d5){
                var documentAbs$=this;
                var $d6=$d5;
                if(m$1.is$($d5,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return Element(documentAbs$.$_native.createElement($d6.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($d5,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    return Element(documentAbs$.$_native.createElement($d6.$_native));
                    /*End dynamic block*/
                }
            };documentAbs$.createElement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Element},$ps:[{$nm:'tagName',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("creates a new element"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createElement']};};
            documentAbs$.createElementNS=function createElementNS($d7,$d8){
                var documentAbs$=this;
                var $d9=$d7;
                if(m$1.is$($d7,{t:m$1.String})) {
                    var $da=$d8;
                    if(m$1.is$($d8,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        return Element(documentAbs$.$_native.createElementNS($d9.valueOf(),$da.valueOf()));
                        /*End dynamic block*/
                    }else if(m$1.is$($d8,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        return Element(documentAbs$.$_native.createElementNS($d9.valueOf(),$da.$_native));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($d7,{t:m$9f.JSString})) {
                    var $db=$d8;
                    if(m$1.is$($d8,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        return Element(documentAbs$.$_native.createElementNS($d9,$db.valueOf()));
                        /*End dynamic block*/
                    }else if(m$1.is$($d8,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        return Element(documentAbs$.$_native.createElementNS($d9.$_native,$db.$_native));
                        /*End dynamic block*/
                    }
                }
            };documentAbs$.createElementNS.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Element},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'qualifiedName',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("creates a new element in the given namespace"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createElementNS']};};
            documentAbs$.createProcessingInstruction=function createProcessingInstruction($dc,$dd){
                var documentAbs$=this;
                var $de=$dc;
                if(m$1.is$($dc,{t:m$1.String})) {
                    var $df=$dd;
                    if(m$1.is$($dd,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        return ProcessingInstruction(documentAbs$.$_native.createProcessingInstruction($de.valueOf(),$df.valueOf()));
                        /*End dynamic block*/
                    }else if(m$1.is$($dd,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        return ProcessingInstruction(documentAbs$.$_native.createProcessingInstruction($de.valueOf(),$df.$_native));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($dc,{t:m$9f.JSString})) {
                    var $dg=$dd;
                    if(m$1.is$($dd,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        return ProcessingInstruction(documentAbs$.$_native.createProcessingInstruction($de.$_native,$dg.valueOf()));
                        /*End dynamic block*/
                    }else if(m$1.is$($dd,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        return ProcessingInstruction(documentAbs$.$_native.createProcessingInstruction($de.$_native,$dg.$_native));
                        /*End dynamic block*/
                    }
                }
            };documentAbs$.createProcessingInstruction.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ProcessingInstruction},$ps:[{$nm:'target',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("creates a processing instruction node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createProcessingInstruction']};};
            documentAbs$.createTextNode=function createTextNode($dh){
                var documentAbs$=this;
                var $di=$dh;
                if(m$1.is$($dh,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return Text(documentAbs$.$_native.createTextNode($di.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($dh,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    return Text(documentAbs$.$_native.createTextNode($di.$_native));
                    /*End dynamic block*/
                }
            };documentAbs$.createTextNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Text},$ps:[{$nm:'data',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("creates a new text node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createTextNode']};};
            documentAbs$.doctype=function doctype(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                var $dj=documentAbs$.$_native.doctype;
                if(($dk=$dj,$dl=null,($dk.equals&&!$dk.equals($dl))||$dk!==$dl)){
                    return DocumentType($dj);
                }else {
                    return null;
                }/*End dynamic block*/
            };documentAbs$.doctype.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DocumentType}]},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns the documents doctype"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','doctype']};};
            documentAbs$.documentElement=function documentElement(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                var $dm=documentAbs$.$_native.documentElement;
                if(($dn=$dm,$do=null,($dn.equals&&!$dn.equals($do))||$dn!==$do)){
                    return Element($dm);
                }else {
                    return null;
                }/*End dynamic block*/
            };documentAbs$.documentElement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Element}]},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns the element that is a direct child of the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','documentElement']};};
            documentAbs$.documentURI=function documentURI(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(documentAbs$.$_native.documentURI);
                /*End dynamic block*/
            };documentAbs$.documentURI.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns documents URI"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','documentURI']};};
            documentAbs$.compatMode=function compatMode(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                if(($dp=documentAbs$.$_native.compatMode,$dq="BackCompat",($dp.equals&&$dp.equals($dq))||$dp===$dq)){
                    return getBackCompat();
                }else {
                    return getCss1Compat();
                }/*End dynamic block*/
            };documentAbs$.compatMode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CompatMode},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns the documents compatablity mode"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','compatMode']};};
            documentAbs$.characterSet=function characterSet(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(documentAbs$.$_native.characterSet);
                /*End dynamic block*/
            };documentAbs$.characterSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns documents CharacterSet"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','characterSet']};};
            documentAbs$.getElementById=function getElementById($dr){
                var documentAbs$=this;
                var $ds;
                var $dt=$dr;
                if(m$1.is$($dr,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    $ds=documentAbs$.$_native.getElementById($dt.valueOf());/*End dynamic block*/
                }else if(m$1.is$($dr,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    $ds=documentAbs$.$_native.getElementById($dt.$_native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if(($du=$ds,$dv=null,($du.equals&&!$du.equals($dv))||$du!==$dv)){
                    return Element($ds);
                }else {
                    return null;
                }/*End dynamic block*/
            };documentAbs$.getElementById.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Element}]},$ps:[{$nm:'id',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns element on the document by the id"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getElementById']};};
            documentAbs$.getElementsByTagName$defs$name=function($dw){return "*";};
            documentAbs$.getElementsByTagName=function getElementsByTagName($dw){
                var documentAbs$=this;
                if($dw===undefined){$dw=documentAbs$.getElementsByTagName$defs$name($dw);}
                var $dx;
                var $dy=$dw;
                if(m$1.is$($dw,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    $dx=documentAbs$.$_native.getElementsByTagName($dy.valueOf());/*End dynamic block*/
                }else if(m$1.is$($dw,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    $dx=documentAbs$.$_native.getElementsByTagName($dy.$_native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if($dx.instanceof((typeof HTMLCollection==='undefined'||HTMLCollection===null?m$1.throwexc(m$1.Exception("Undefined or null reference: HTMLCollection"),'341:26-341:39','document.ceylon'):HTMLCollection))){
                    return HTMLCollection($dx);
                }else {
                    return NodeList($dx);
                }/*End dynamic block*/
            };documentAbs$.getElementsByTagName.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:HTMLCollection},{t:NodeList}]},$ps:[{$nm:'name',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns a collection of elements on the document by the tagname"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getElementsByTagName']};};
            documentAbs$.getElementsByTagNameNS$defs$name=function($dz,$e0){return "*";};
            documentAbs$.getElementsByTagNameNS=function getElementsByTagNameNS($dz,$e0){
                var documentAbs$=this;
                if($e0===undefined){$e0=documentAbs$.getElementsByTagNameNS$defs$name($dz,$e0);}
                var $e1;
                var $e2=$dz;
                if(m$1.is$($dz,{t:m$1.String})) {
                    var $e3=$e0;
                    if(m$1.is$($e0,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        $e1=documentAbs$.$_native.getElementsByTagNameNS($e2.valueOf(),$e3.valueOf());/*End dynamic block*/
                    }else if(m$1.is$($e0,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        $e1=documentAbs$.$_native.getElementsByTagNameNS($e2.valueOf(),$e3.$_native);/*End dynamic block*/
                    }
                }else if(m$1.is$($dz,{t:m$9f.JSString})) {
                    var $e4=$e0;
                    if(m$1.is$($e0,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        $e1=documentAbs$.$_native.getElementsByTagNameNS($e2,$e4.valueOf());/*End dynamic block*/
                    }else if(m$1.is$($e0,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        $e1=documentAbs$.$_native.getElementsByTagNameNS($e2.$_native,$e4.$_native);/*End dynamic block*/
                    }
                }
                /*Begin dynamic block*/
                if($e1.instanceof((typeof HTMLCollection==='undefined'||HTMLCollection===null?m$1.throwexc(m$1.Exception("Undefined or null reference: HTMLCollection"),'380:26-380:39','document.ceylon'):HTMLCollection))){
                    return HTMLCollection($e1);
                }else {
                    return NodeList($e1);
                }/*End dynamic block*/
            };documentAbs$.getElementsByTagNameNS.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:HTMLCollection},{t:NodeList}]},$ps:[{$nm:'namespace',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns a collection of elements on the document by the tagname in a namespace"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getElementsByTagNameNS']};};
            documentAbs$.getElementsByClassName=function getElementsByClassName($e5){
                var documentAbs$=this;
                var $e6=$e5;
                if(m$1.is$($e5,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return HTMLCollection(documentAbs$.$_native.getElementsByTagNameNS($e6.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($e5,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    return HTMLCollection(documentAbs$.$_native.getElementsByTagNameNS($e6.$_native));
                    /*End dynamic block*/
                }
            };documentAbs$.getElementsByClassName.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HTMLCollection},$ps:[{$nm:'names',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns a collection of elements on the document by the class name"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getElementsByClassName']};};
            documentAbs$.implementation=function implementation(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return DOMImplementation(documentAbs$.$_native.implementation);
                /*End dynamic block*/
            };documentAbs$.implementation.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DOMImplementation},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns the DOM implementation associated with the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','implementation']};};
            documentAbs$.importNode$defs$deep=function($e7,$e8){return true;};
            documentAbs$.importNode=function importNode($e7,$e8){
                var documentAbs$=this;
                if($e8===undefined){$e8=documentAbs$.importNode$defs$deep($e7,$e8);}
                /*Begin dynamic block*/
                return Node(documentAbs$.$_native.importNode($e7,$e8));
                /*End dynamic block*/
            };documentAbs$.importNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Node},$ps:[{$nm:'externalNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'deep',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("creates a copy of a node from another document that can be inserted into the current document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','importNode']};};
            documentAbs$.createNodeIterator$defs$whatToShow=function($e9,$ea,$eb){return null;};
            documentAbs$.createNodeIterator$defs$filter=function($e9,$ea,$eb){return null;};
            documentAbs$.createNodeIterator=function createNodeIterator($e9,$ea,$eb){
                var documentAbs$=this;
                if($ea===undefined){$ea=documentAbs$.createNodeIterator$defs$whatToShow($e9,$ea,$eb);}
                if($eb===undefined){$eb=documentAbs$.createNodeIterator$defs$filter($e9,$ea,$eb);}
                /*Begin dynamic block*/
                return NodeIterator(documentAbs$.$_native.createNodeIterator($e9,$ea,$eb));
                /*End dynamic block*/
            };documentAbs$.createNodeIterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:NodeIterator},$ps:[{$nm:'root',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'whatToShow',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:NodeFilter}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns a new node iterator the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createNodeIterator']};};
            documentAbs$.createTreeWalker$defs$whatToShow=function($ec,$ed,$ee){return null;};
            documentAbs$.createTreeWalker$defs$filter=function($ec,$ed,$ee){return null;};
            documentAbs$.createTreeWalker=function createTreeWalker($ec,$ed,$ee){
                var documentAbs$=this;
                if($ed===undefined){$ed=documentAbs$.createTreeWalker$defs$whatToShow($ec,$ed,$ee);}
                if($ee===undefined){$ee=documentAbs$.createTreeWalker$defs$filter($ec,$ed,$ee);}
                /*Begin dynamic block*/
                return TreeWalker(documentAbs$.$_native.createTreeWalker($ec,$ed,$ee));
                /*End dynamic block*/
            };documentAbs$.createTreeWalker.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeWalker},$ps:[{$nm:'root',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'whatToShow',$mt:'prm',$def:1,$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:NodeFilter}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns a new tree walker for walking the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','createTreeWalker']};};
            documentAbs$.anchors=function anchors(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return NodeList(documentAbs$.$_native.anchors);
                /*End dynamic block*/
            };documentAbs$.anchors.$crtmm$=function(){return{mod:$CCMM$,$t:{t:NodeList},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns a collection of all anchors in the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','anchors']};};
            documentAbs$.getAsync=function getAsync(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                if(documentAbs$.$_native.async){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };documentAbs$.getAsync.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("gets whether a document.load call will be made asynchronously"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getAsync']};};
            documentAbs$.setAsync=function setAsync($ef){
                var documentAbs$=this;
                /*Begin dynamic block*/
                documentAbs$.$_native.async=$ef;
                /*End dynamic block*/
            };documentAbs$.setAsync.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'async',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("sets whether a document.load call should be made asynchronously"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','setAsync']};};
            documentAbs$.body=function body(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return Node(documentAbs$.$_native.body);
                /*End dynamic block*/
            };documentAbs$.body.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Node},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns the body node on the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','body']};};
            documentAbs$.getCookie=function getCookie(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(documentAbs$.$_native.cookie);
                /*End dynamic block*/
            };documentAbs$.getCookie.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns cookies associated with the document in the form of a comma sepearted list of key=value pairs"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getCookie']};};
            documentAbs$.setCookie=function setCookie($eg){
                var documentAbs$=this;
                var $eh=$eg;
                if(m$1.is$($eg,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    documentAbs$.$_native.cookie=$eh.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($eg,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    documentAbs$.$_native.cookie=$eh.$_native;
                    /*End dynamic block*/
                }
            };documentAbs$.setCookie.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'cookie',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("set cookies associated with the document in the form of a comma sepearted list of key=value pairs"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','setCookie']};};
            documentAbs$.defaultView=function defaultView(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                var $ei=documentAbs$.$_native.defaultView;
                if(($ej=$ei,$ek=null,($ej.equals&&!$ej.equals($ek))||$ej!==$ek)){
                    return m$bx.Window($ei);
                }else {
                    return null;
                }/*End dynamic block*/
            };documentAbs$.defaultView.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$bx.Window}]},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns the browser window object associated with the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','defaultView']};};
            documentAbs$.getDesignMode=function getDesignMode(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                if(($el=documentAbs$.$_native.designMode,$em="on",($el.equals&&$el.equals($em))||$el===$em)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };documentAbs$.getDesignMode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns if the documents design mode is on"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getDesignMode']};};
            documentAbs$.getDir=function getDir(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                if(($en=documentAbs$.$_native.dir,$eo="ltr",($en.equals&&$en.equals($eo))||$en===$eo)){
                    return getLtr();
                }else {
                    return getRtl();
                }/*End dynamic block*/
            };documentAbs$.getDir.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DocumentDirection},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("get the document direction"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getDir']};};
            documentAbs$.setDir=function setDir($ep){
                var documentAbs$=this;
                /*Begin dynamic block*/
                documentAbs$.$_native.dir=$ep.string.valueOf();
                /*End dynamic block*/
            };documentAbs$.setDir.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'dir',$mt:'prm',$t:{t:DocumentDirection},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("set the document direction"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','setDir']};};
            documentAbs$.getDomain=function getDomain(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(documentAbs$.$_native.domain);
                /*End dynamic block*/
            };documentAbs$.getDomain.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("get the documents domain"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getDomain']};};
            documentAbs$.setDomain=function setDomain($eq){
                var documentAbs$=this;
                var $er=$eq;
                if(m$1.is$($eq,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    documentAbs$.$_native.domain=$er.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($eq,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    documentAbs$.$_native.domain=$er.$_native;
                    /*End dynamic block*/
                }
            };documentAbs$.setDomain.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'domain',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("set the domain string of the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','setDomain']};};
            documentAbs$.forms=function forms(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return HTMLCollection(documentAbs$.$_native.forms);
                /*End dynamic block*/
            };documentAbs$.forms.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns a collection of all form elements in the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','forms']};};
            documentAbs$.head=function head(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return Element(documentAbs$.$_native.head);
                /*End dynamic block*/
            };documentAbs$.head.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Element},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns the document head element"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','head']};};
            documentAbs$.images=function images(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return HTMLCollection(documentAbs$.$_native.images);
                /*End dynamic block*/
            };documentAbs$.images.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns a collection of all image elements in the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','images']};};
            documentAbs$.lastModified=function lastModified(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(documentAbs$.$_native.lastModified);
                /*End dynamic block*/
            };documentAbs$.lastModified.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns the date the document was last modified as a string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','lastModified']};};
            documentAbs$.lastStyleSheetSet=function lastStyleSheetSet(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(documentAbs$.$_native.lastStyleSheetSet);
                /*End dynamic block*/
            };documentAbs$.lastStyleSheetSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns the name of the last enabled StyleSheet Set for the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','lastStyleSheetSet']};};
            documentAbs$.links=function links(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return HTMLCollection(documentAbs$.$_native.links);
                /*End dynamic block*/
            };documentAbs$.links.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns all of the link elements in the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','links']};};
            documentAbs$.location=function location(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return m$bx.Location(documentAbs$.$_native.location);
                /*End dynamic block*/
            };documentAbs$.location.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$bx.Location},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns location information about the URL of the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','location']};};
            documentAbs$.plugins=function plugins(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return HTMLCollection(documentAbs$.$_native.plugins);
                /*End dynamic block*/
            };documentAbs$.plugins.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns collection of all the plugin elements on the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','plugins']};};
            documentAbs$.preferredStyleSheetSet=function preferredStyleSheetSet(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                var $es=(typeof document==='undefined'||document===null?m$1.throwexc(m$1.Exception("Undefined or null reference: document"),'607:23-607:30','document.ceylon'):document).preferredStyleSheetSet;
                if(($et=$es,$eu=null,($et.equals&&!$et.equals($eu))||$et!==$eu)){
                    return m$9f.JSString($es);
                }else {
                    return null;
                }/*End dynamic block*/
            };documentAbs$.preferredStyleSheetSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns the prefurred name of the StyleSheet set on the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','preferredStyleSheetSet']};};
            documentAbs$.readyState=function readyState(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                var $ev=documentAbs$.$_native.readyState;
                if(($ew=$ev,$ex="loading",($ew.equals&&$ew.equals($ex))||$ew===$ex)){
                    return getLoading();
                }else {
                    if(($ey=$ev,$ez="interactive",($ey.equals&&$ey.equals($ez))||$ey===$ez)){
                        return getInteractive();
                    }else {
                        return getComplete();
                    }
                }/*End dynamic block*/
            };documentAbs$.readyState.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DocumentReadyState},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns the current ready state of the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','readyState']};};
            documentAbs$.referrer=function referrer(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(documentAbs$.$_native.referrer);
                /*End dynamic block*/
            };documentAbs$.referrer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns uri of the page which linked to this document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','referrer']};};
            documentAbs$.scripts=function scripts(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return HTMLCollection(documentAbs$.$_native.scripts);
                /*End dynamic block*/
            };documentAbs$.scripts.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns a collection of all the script elements in the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','scripts']};};
            documentAbs$.selectedStyleSheetSet=function selectedStyleSheetSet(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(documentAbs$.$_native.selectedStyleSheetSet);
                /*End dynamic block*/
            };documentAbs$.selectedStyleSheetSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns the name of the StyleSheet set that is currently in use on the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','selectedStyleSheetSet']};};
            documentAbs$.setSelectedStyleSheetSet=function setSelectedStyleSheetSet($f0){
                var documentAbs$=this;
                var $f1=$f0;
                if(m$1.is$($f0,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    documentAbs$.$_native.selectedStyleSheetSet=$f1.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($f0,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    documentAbs$.$_native.selectedStyleSheetSet=$f1.$_native;
                    /*End dynamic block*/
                }
            };documentAbs$.setSelectedStyleSheetSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'sheet',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns a linked to or embeded in the document by its name"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','setSelectedStyleSheetSet']};};
            documentAbs$.styleSheets=function styleSheets(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return StyleSheetList$stylesheets(documentAbs$.$_native.styleSheets);
                /*End dynamic block*/
            };documentAbs$.styleSheets.$crtmm$=function(){return{mod:$CCMM$,$t:{t:StyleSheetList$stylesheets},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns collection of StyleSheets linked to or embeded in the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','styleSheets']};};
            documentAbs$.styleSheetSets=function styleSheetSets(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSArray(documentAbs$.$_native.styleSheetSets);
                /*End dynamic block*/
            };documentAbs$.styleSheetSets.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSArray},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns Array of Strings naming the avaiable StyleSheets"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','styleSheetSets']};};
            documentAbs$.title=function title(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(documentAbs$.$_native.title);
                /*End dynamic block*/
            };documentAbs$.title.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns the documents title"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','title']};};
            documentAbs$.open=function open(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                documentAbs$.$_native.open();
                /*End dynamic block*/
            };documentAbs$.open.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("opens a document for writing"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','open']};};
            documentAbs$.close=function close(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                documentAbs$.$_native.close();
                /*End dynamic block*/
            };documentAbs$.close.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("finishes writing to a document opened with Document.open()"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','close']};};
            documentAbs$.elementFromPoint=function elementFromPoint($f2,$f3){
                var documentAbs$=this;
                var $f4=$f2;
                if(m$1.is$($f2,{t:m$1.Integer})) {
                    var $f5=$f3;
                    if(m$1.is$($f3,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return Element(documentAbs$.$_native.elementFromPoint($f4,$f5));
                        /*End dynamic block*/
                    }else if(m$1.is$($f3,{t:m$9f.JSNumber})) {
                        /*Begin dynamic block*/
                        return Element(documentAbs$.$_native.elementFromPoint($f4,$f5.$_native));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($f2,{t:m$9f.JSNumber})) {
                    var $f6=$f3;
                    if(m$1.is$($f3,{t:m$1.Integer})) {
                        /*Begin dynamic block*/
                        return Element(documentAbs$.$_native.elementFromPoint($f4.$_native,$f6));
                        /*End dynamic block*/
                    }else if(m$1.is$($f3,{t:m$9f.JSNumber})) {
                        /*Begin dynamic block*/
                        return Element(documentAbs$.$_native.elementFromPoint($f4.$_native,$f6.$_native));
                        /*End dynamic block*/
                    }
                }
            };documentAbs$.elementFromPoint.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Element},$ps:[{$nm:'x',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns element at the given point coordinates"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','elementFromPoint']};};
            documentAbs$.getElementsByName=function getElementsByName($f7){
                var documentAbs$=this;
                var $f8=$f7;
                if(m$1.is$($f7,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return HTMLCollection(documentAbs$.$_native.getElementsByName($f8.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($f7,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    return HTMLCollection(documentAbs$.$_native.getElementsByName($f8.$_native));
                    /*End dynamic block*/
                }
            };documentAbs$.getElementsByName.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HTMLCollection},$ps:[{$nm:'name',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns a list of elements in the document with the given name"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','getElementsByName']};};
            documentAbs$.hasFocus=function hasFocus(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                if(documentAbs$.$_native.hasFocus()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };documentAbs$.hasFocus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns whether the document or any element in the document currently has focus"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','hasFocus']};};
            documentAbs$.querySelector=function querySelector($f9){
                var documentAbs$=this;
                var $fa=$f9;
                if(m$1.is$($f9,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return Element(documentAbs$.$_native.querySelector($fa.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($f9,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    return Element(documentAbs$.$_native.querySelector($fa.$_native));
                    /*End dynamic block*/
                }
            };documentAbs$.querySelector.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Element},$ps:[{$nm:'selectors',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns the first element which matches the selectors"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','querySelector']};};
            documentAbs$.querySelectorAll=function querySelectorAll($fb){
                var documentAbs$=this;
                var $fc=$fb;
                if(m$1.is$($fb,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return NodeList(documentAbs$.$_native.querySelectorAll($fc.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($fb,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    return NodeList(documentAbs$.$_native.querySelectorAll($fc.$_native));
                    /*End dynamic block*/
                }
            };documentAbs$.querySelectorAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:NodeList},$ps:[{$nm:'selectors',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("returns a list of all elements within the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','querySelectorAll']};};
            documentAbs$.releaseCapture=function releaseCapture(){
                var documentAbs$=this;
                /*Begin dynamic block*/
                documentAbs$.$_native.releaseCapture();
                /*End dynamic block*/
            };documentAbs$.releaseCapture.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:DocumentAbs,$an:function(){return[m$1.doc("release current mouse capture"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','releaseCapture']};};
            documentAbs$.write=function write($fd){
                var documentAbs$=this;
                var $fe=$fd;
                if(m$1.is$($fd,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    documentAbs$.$_native.write($fe.valueOf());
                    /*End dynamic block*/
                }else if(m$1.is$($fd,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    documentAbs$.$_native.write($fe.$_native);
                    /*End dynamic block*/
                }
            };documentAbs$.write.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'line',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("write the string to the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','write']};};
            documentAbs$.writeln=function writeln($ff){
                var documentAbs$=this;
                var $fg=$ff;
                if(m$1.is$($ff,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    documentAbs$.$_native.writeln($fg.valueOf());
                    /*End dynamic block*/
                }else if(m$1.is$($ff,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    documentAbs$.$_native.writeln($fg.$_native);
                    /*End dynamic block*/
                }
            };documentAbs$.writeln.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'line',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[m$1.doc("write the string to the document as a line"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentAbs','$m','writeln']};};
        })(DocumentAbs.$$.prototype);
    }
    return DocumentAbs;
}
ex$.$init$DocumentAbs=$init$DocumentAbs;
$init$DocumentAbs();
function Document($fh,document$){
    $init$Document();
    if(document$===undefined)document$=new Document.$$;
    document$.$fh_=$fh;
    DocumentAbs(document$);
    document$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Document,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','Document','$at','native']};}};
    /*Begin dynamic block*/
    document$.$_native=document$.$fh;/*End dynamic block*/
    return document$;
}
Document.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a DOM Document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','Document']};};
ex$.Document=Document;
function $init$Document(){
    if(Document.$$===undefined){
        m$1.initTypeProto(Document,'com.openswimsoftware.ceylon.js.dom::Document',$init$DocumentAbs());
        (function(document$){
            m$1.atr$(document$,'$fh',function(){return this.$fh_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Document,d:['com.openswimsoftware.ceylon.js.dom','Document','$at','n$xxawbv']};});
        })(Document.$$.prototype);
    }
    return Document;
}
ex$.$init$Document=$init$Document;
$init$Document();
function DocumentTypeAbs(documentTypeAbs$){
    $init$DocumentTypeAbs();
    if(documentTypeAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    NodeAbs(documentTypeAbs$);
    return documentTypeAbs$;
}
DocumentTypeAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentTypeAbs']};};
ex$.DocumentTypeAbs=DocumentTypeAbs;
function $init$DocumentTypeAbs(){
    if(DocumentTypeAbs.$$===undefined){
        m$1.initTypeProto(DocumentTypeAbs,'com.openswimsoftware.ceylon.js.dom::DocumentTypeAbs',$init$NodeAbs());
        (function(documentTypeAbs$){
            documentTypeAbs$.name=function name(){
                var documentTypeAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(documentTypeAbs$.$_native.name);
                /*End dynamic block*/
            };documentTypeAbs$.name.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[m$1.doc("returns the document type name"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentTypeAbs','$m','name']};};
            documentTypeAbs$.publicId=function publicId(){
                var documentTypeAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(documentTypeAbs$.$_native.publicId);
                /*End dynamic block*/
            };documentTypeAbs$.publicId.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[m$1.doc("returns the document types public id string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentTypeAbs','$m','publicId']};};
            documentTypeAbs$.systemId=function systemId(){
                var documentTypeAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(documentTypeAbs$.$_native.systemId);
                /*End dynamic block*/
            };documentTypeAbs$.systemId.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[m$1.doc("returns the document types system id string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentTypeAbs','$m','systemId']};};
        })(DocumentTypeAbs.$$.prototype);
    }
    return DocumentTypeAbs;
}
ex$.$init$DocumentTypeAbs=$init$DocumentTypeAbs;
$init$DocumentTypeAbs();
function DocumentType($fi,documentType$){
    $init$DocumentType();
    if(documentType$===undefined)documentType$=new DocumentType.$$;
    documentType$.$fi_=$fi;
    DocumentTypeAbs(documentType$);
    documentType$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:DocumentType,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentType','$at','native']};}};
    /*Begin dynamic block*/
    documentType$.$_native=documentType$.$fi;/*End dynamic block*/
    return documentType$;
}
DocumentType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentTypeAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a DocumentType"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentType']};};
ex$.DocumentType=DocumentType;
function $init$DocumentType(){
    if(DocumentType.$$===undefined){
        m$1.initTypeProto(DocumentType,'com.openswimsoftware.ceylon.js.dom::DocumentType',$init$DocumentTypeAbs());
        (function(documentType$){
            m$1.atr$(documentType$,'$fi',function(){return this.$fi_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:DocumentType,d:['com.openswimsoftware.ceylon.js.dom','DocumentType','$at','n$ct6wtn']};});
        })(DocumentType.$$.prototype);
    }
    return DocumentType;
}
ex$.$init$DocumentType=$init$DocumentType;
$init$DocumentType();
function DOMImplementationAbs(dOMImplementationAbs$){
    $init$DOMImplementationAbs();
    if(dOMImplementationAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(dOMImplementationAbs$);
    return dOMImplementationAbs$;
}
DOMImplementationAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','DOMImplementationAbs']};};
ex$.DOMImplementationAbs=DOMImplementationAbs;
function $init$DOMImplementationAbs(){
    if(DOMImplementationAbs.$$===undefined){
        m$1.initTypeProto(DOMImplementationAbs,'com.openswimsoftware.ceylon.js.dom::DOMImplementationAbs',m$9f.JSObjectAbs);
        (function(dOMImplementationAbs$){
            dOMImplementationAbs$.createDocument$defs$qualifiedName=function($fj,$fk,$fl){return "";};
            dOMImplementationAbs$.createDocument$defs$doctype=function($fj,$fk,$fl){return null;};
            dOMImplementationAbs$.createDocument=function createDocument($fj,$fk,$fl){
                var dOMImplementationAbs$=this;
                if($fk===undefined){$fk=dOMImplementationAbs$.createDocument$defs$qualifiedName($fj,$fk,$fl);}
                if($fl===undefined){$fl=dOMImplementationAbs$.createDocument$defs$doctype($fj,$fk,$fl);}
                var $fm=$fj;
                if(m$1.is$($fj,{t:m$1.String})) {
                    var $fn=$fk;
                    if(m$1.is$($fk,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        return Document(dOMImplementationAbs$.$_native.createDocument($fm.valueOf(),$fn.valueOf(),(typeof dt==='undefined'||dt===null?m$1.throwexc(m$1.Exception("Undefined or null reference: dt"),'12:69-12:70','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }else if(m$1.is$($fk,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        return Document(dOMImplementationAbs$.$_native.createDocument($fm.valueOf(),$fn.$_native,(typeof dt==='undefined'||dt===null?m$1.throwexc(m$1.Exception("Undefined or null reference: dt"),'17:76-17:77','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($fj,{t:m$9f.JSString})) {
                    var $fo=$fk;
                    if(m$1.is$($fk,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        return Document(dOMImplementationAbs$.$_native.createDocument($fm.$_native,$fo.valueOf(),(typeof dt==='undefined'||dt===null?m$1.throwexc(m$1.Exception("Undefined or null reference: dt"),'25:76-25:77','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }else if(m$1.is$($fk,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        return Document(dOMImplementationAbs$.$_native.createDocument($fm.$_native,$fo.$_native,(typeof dt==='undefined'||dt===null?m$1.throwexc(m$1.Exception("Undefined or null reference: dt"),'30:83-30:84','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($fj,{t:m$1.Null})) {
                    var $fp=$fk;
                    if(m$1.is$($fk,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        return Document(dOMImplementationAbs$.$_native.createDocument(null,$fp.valueOf(),(typeof dt==='undefined'||dt===null?m$1.throwexc(m$1.Exception("Undefined or null reference: dt"),'38:64-38:65','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }else if(m$1.is$($fk,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        return Document(dOMImplementationAbs$.$_native.createDocument(null,$fp.$_native,(typeof dt==='undefined'||dt===null?m$1.throwexc(m$1.Exception("Undefined or null reference: dt"),'43:71-43:72','domimplementation.ceylon'):dt).native));
                        /*End dynamic block*/
                    }
                }
            };dOMImplementationAbs$.createDocument.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Document},$ps:[{$nm:'namespace',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]}]},$an:function(){return[];}},{$nm:'qualifiedName',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'doctype',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:DocumentType}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[m$1.doc("returns a new Document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DOMImplementationAbs','$m','createDocument']};};
            dOMImplementationAbs$.createDocumentType=function createDocumentType($fq,$fr,$fs){
                var dOMImplementationAbs$=this;
                var $ft=$fq;
                if(m$1.is$($fq,{t:m$1.String})) {
                    var $fu=$fr;
                    if(m$1.is$($fr,{t:m$1.String})) {
                        var $fv=$fs;
                        if(m$1.is$($fs,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            return DocumentType(dOMImplementationAbs$.$_native.createDocumentType($ft.valueOf(),$fu.valueOf(),$fv.valueOf()));
                            /*End dynamic block*/
                        }else if(m$1.is$($fs,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            return DocumentType(dOMImplementationAbs$.$_native.createDocumentType($ft.valueOf(),$fu.valueOf(),$fv.$_native));
                            /*End dynamic block*/
                        }
                    }else if(m$1.is$($fr,{t:m$9f.JSString})) {
                        var $fw=$fs;
                        if(m$1.is$($fs,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            return DocumentType(dOMImplementationAbs$.$_native.createDocumentType($ft.valueOf(),$fu.$_native,$fw.valueOf()));
                            /*End dynamic block*/
                        }else if(m$1.is$($fs,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            return DocumentType(dOMImplementationAbs$.$_native.createDocumentType($ft.valueOf(),$fu.$_native,$fw.$_native));
                            /*End dynamic block*/
                        }
                    }
                }else if(m$1.is$($fq,{t:m$9f.JSString})) {
                    var $fx=$fr;
                    if(m$1.is$($fr,{t:m$1.String})) {
                        var $fy=$fs;
                        if(m$1.is$($fs,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            return DocumentType(dOMImplementationAbs$.$_native.createDocumentType($ft.$_native,$fx.valueOf(),$fy.valueOf()));
                            /*End dynamic block*/
                        }else if(m$1.is$($fs,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            return DocumentType(dOMImplementationAbs$.$_native.createDocumentType($ft.$_native,$fx.valueOf(),$fy.$_native));
                            /*End dynamic block*/
                        }
                    }else if(m$1.is$($fr,{t:m$9f.JSString})) {
                        var $fz=$fs;
                        if(m$1.is$($fs,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            return DocumentType(dOMImplementationAbs$.$_native.createDocumentType($ft.$_native,$fx.$_native,$fz.valueOf()));
                            /*End dynamic block*/
                        }else if(m$1.is$($fs,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            return DocumentType(dOMImplementationAbs$.$_native.createDocumentType($ft.$_native,$fx.$_native,$fz.$_native));
                            /*End dynamic block*/
                        }
                    }
                }
            };dOMImplementationAbs$.createDocumentType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DocumentType},$ps:[{$nm:'qualifiedName',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'publicId',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'systemId',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[m$1.doc("returns a new DocumentType"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DOMImplementationAbs','$m','createDocumentType']};};
            dOMImplementationAbs$.hasFeature$defs$version=function($g0,$g1){return "";};
            dOMImplementationAbs$.hasFeature=function hasFeature($g0,$g1){
                var dOMImplementationAbs$=this;
                if($g1===undefined){$g1=dOMImplementationAbs$.hasFeature$defs$version($g0,$g1);}
                var $g2;
                var $g3=$g0;
                if(m$1.is$($g0,{t:m$1.String})) {
                    var $g4=$g1;
                    if(m$1.is$($g1,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        $g2=dOMImplementationAbs$.$_native.hasFeature($g3.valueOf(),$g4.valueOf());/*End dynamic block*/
                    }else if(m$1.is$($g1,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        $g2=dOMImplementationAbs$.$_native.hasFeature($g3.valueOf(),$g4.$_native);/*End dynamic block*/
                    }
                }else if(m$1.is$($g0,{t:m$9f.JSString})) {
                    var $g5=$g1;
                    if(m$1.is$($g1,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        $g2=dOMImplementationAbs$.$_native.hasFeature($g3.$_native,$g5.valueOf());/*End dynamic block*/
                    }else if(m$1.is$($g1,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        $g2=dOMImplementationAbs$.$_native.hasFeature($g3.$_native,$g5.$_native);/*End dynamic block*/
                    }
                }
                /*Begin dynamic block*/
                if($g2){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };dOMImplementationAbs$.hasFeature.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'feature',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'version',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[m$1.doc("returns if the DOM has the given feature at the specified or greater version"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DOMImplementationAbs','$m','hasFeature']};};
        })(DOMImplementationAbs.$$.prototype);
    }
    return DOMImplementationAbs;
}
ex$.$init$DOMImplementationAbs=$init$DOMImplementationAbs;
$init$DOMImplementationAbs();
function DOMImplementation($g6,dOMImplementation$){
    $init$DOMImplementation();
    if(dOMImplementation$===undefined)dOMImplementation$=new DOMImplementation.$$;
    dOMImplementation$.$g6_=$g6;
    DOMImplementationAbs(dOMImplementation$);
    dOMImplementation$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:DOMImplementation,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','DOMImplementation','$at','native']};}};
    /*Begin dynamic block*/
    dOMImplementation$.$_native=dOMImplementation$.$g6;/*End dynamic block*/
    return dOMImplementation$;
}
DOMImplementation.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DOMImplementationAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a DOMImplementation"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DOMImplementation']};};
ex$.DOMImplementation=DOMImplementation;
function $init$DOMImplementation(){
    if(DOMImplementation.$$===undefined){
        m$1.initTypeProto(DOMImplementation,'com.openswimsoftware.ceylon.js.dom::DOMImplementation',$init$DOMImplementationAbs());
        (function(dOMImplementation$){
            m$1.atr$(dOMImplementation$,'$g6',function(){return this.$g6_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:DOMImplementation,d:['com.openswimsoftware.ceylon.js.dom','DOMImplementation','$at','n$5tcvl8']};});
        })(DOMImplementation.$$.prototype);
    }
    return DOMImplementation;
}
ex$.$init$DOMImplementation=$init$DOMImplementation;
$init$DOMImplementation();
function ElementAbs(elementAbs$){
    $init$ElementAbs();
    if(elementAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    NodeAbs(elementAbs$);
    return elementAbs$;
}
ElementAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs']};};
ex$.ElementAbs=ElementAbs;
function $init$ElementAbs(){
    if(ElementAbs.$$===undefined){
        m$1.initTypeProto(ElementAbs,'com.openswimsoftware.ceylon.js.dom::ElementAbs',$init$NodeAbs());
        (function(elementAbs$){
            elementAbs$.getAttribute=function getAttribute($g7){
                var elementAbs$=this;
                var $g8;
                var $g9=$g7;
                if(m$1.is$($g7,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    $g8=elementAbs$.$_native.getAttribute($g9.valueOf());/*End dynamic block*/
                }else if(m$1.is$($g7,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    $g8=elementAbs$.$_native.getAttribute($g9.$_native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if((($ga=$g8,$gb=null,($ga.equals&&!$ga.equals($gb))||$ga!==$gb)||($gc=$g8,$gd="",($gc.equals&&!$gc.equals($gd))||$gc!==$gd))){
                    return m$9f.JSString($g8);
                }else {
                    return null;
                }/*End dynamic block*/
            };elementAbs$.getAttribute.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[m$1.doc("get the value of the attribute on this element"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','getAttribute']};};
            elementAbs$.getAttributeNS=function getAttributeNS($ge,$gf){
                var elementAbs$=this;
                var $gg;
                var $gh=$ge;
                if(m$1.is$($ge,{t:m$1.String})) {
                    var $gi=$gf;
                    if(m$1.is$($gf,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        $gg=elementAbs$.$_native.getAttributeNS($gh.valueOf(),$gi.valueOf());/*End dynamic block*/
                    }else if(m$1.is$($gf,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        $gg=elementAbs$.$_native.getAttributeNS($gh.valueOf(),$gi.$_native);/*End dynamic block*/
                    }
                }else if(m$1.is$($ge,{t:m$9f.JSString})) {
                    var $gj=$gf;
                    if(m$1.is$($gf,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        $gg=elementAbs$.$_native.getAttributeNS($gh.$_native,$gj.valueOf());/*End dynamic block*/
                    }else if(m$1.is$($gf,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        $gg=elementAbs$.$_native.getAttributeNS($gh.$_native,$gj.$_native);/*End dynamic block*/
                    }
                }
                /*Begin dynamic block*/
                if((($gk=$gg,$gl=null,($gk.equals&&!$gk.equals($gl))||$gk!==$gl)||($gm=$gg,$gn="",($gm.equals&&!$gm.equals($gn))||$gm!==$gn))){
                    return m$9f.JSString($gg);
                }else {
                    return null;
                }/*End dynamic block*/
            };elementAbs$.getAttributeNS.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[{$nm:'namespace',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'attributeName',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[m$1.doc("get the value of the attribute on this element within the given namespace"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','getAttributeNS']};};
            elementAbs$.getElementsByTagName$defs$tagName=function($go){return "*";};
            elementAbs$.getElementsByTagName=function getElementsByTagName($go){
                var elementAbs$=this;
                if($go===undefined){$go=elementAbs$.getElementsByTagName$defs$tagName($go);}
                var $gp=$go;
                if(m$1.is$($go,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    return HTMLCollection(elementAbs$.$_native.getElementsByTagName($gp.valueOf()));
                    /*End dynamic block*/
                }else if(m$1.is$($go,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    return HTMLCollection(elementAbs$.$_native.getElementsByTagName($gp.$_native));
                    /*End dynamic block*/
                }
            };elementAbs$.getElementsByTagName.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HTMLCollection},$ps:[{$nm:'tagName',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[m$1.doc("get elements on this element by the tagname"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','getElementsByTagName']};};
            elementAbs$.getElementsByTagNameNS$defs$tagName=function($gq,$gr){return "*";};
            elementAbs$.getElementsByTagNameNS=function getElementsByTagNameNS($gq,$gr){
                var elementAbs$=this;
                if($gr===undefined){$gr=elementAbs$.getElementsByTagNameNS$defs$tagName($gq,$gr);}
                var $gs=$gq;
                if(m$1.is$($gq,{t:m$1.String})) {
                    var $gt=$gr;
                    if(m$1.is$($gr,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        return HTMLCollection(elementAbs$.$_native.getElementsByTagNameNS($gs.valueOf(),$gt.valueOf()));
                        /*End dynamic block*/
                    }else if(m$1.is$($gr,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        return HTMLCollection(elementAbs$.$_native.getElementsByTagNameNS($gs.valueOf(),$gt.$_native));
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($gq,{t:m$9f.JSString})) {
                    var $gu=$gr;
                    if(m$1.is$($gr,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        return HTMLCollection(elementAbs$.$_native.getElementsByTagNameNS($gs.$_native,$gu.valueOf()));
                        /*End dynamic block*/
                    }else if(m$1.is$($gr,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        return HTMLCollection(elementAbs$.$_native.getElementsByTagNameNS($gs.$_native,$gu.$_native));
                        /*End dynamic block*/
                    }
                }
            };elementAbs$.getElementsByTagNameNS.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HTMLCollection},$ps:[{$nm:'namespace',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'tagName',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[m$1.doc("get elements on this element by the tagname within the given namespace"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','getElementsByTagNameNS']};};
            elementAbs$.hasAttribute=function hasAttribute($gv){
                var elementAbs$=this;
                var $gw;
                var $gx=$gv;
                if(m$1.is$($gv,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    $gw=elementAbs$.$_native.hasAttribute($gx.valueOf());/*End dynamic block*/
                }else if(m$1.is$($gv,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    $gw=elementAbs$.$_native.hasAttribute($gx.$_native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if($gw){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };elementAbs$.hasAttribute.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'attName',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[m$1.doc("returns if attribute exists the element"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','hasAttribute']};};
            elementAbs$.hasAttributeNS=function hasAttributeNS($gy,$gz){
                var elementAbs$=this;
                var $h0;
                var $h1=$gy;
                if(m$1.is$($gy,{t:m$1.String})) {
                    var $h2=$gz;
                    if(m$1.is$($gz,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        $h0=elementAbs$.$_native.hasAttributeNS($h1.valueOf(),$h2.valueOf());/*End dynamic block*/
                    }else if(m$1.is$($gz,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        $h0=elementAbs$.$_native.hasAttributeNS($h1.valueOf(),$h2.$_native);/*End dynamic block*/
                    }
                }else if(m$1.is$($gy,{t:m$9f.JSString})) {
                    var $h3=$gz;
                    if(m$1.is$($gz,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        $h0=elementAbs$.$_native.hasAttributeNS($h1.$_native,$h3.valueOf());/*End dynamic block*/
                    }else if(m$1.is$($gz,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        $h0=elementAbs$.$_native.hasAttributeNS($h1.$_native,$h3.$_native);/*End dynamic block*/
                    }
                }
                /*Begin dynamic block*/
                if($h0){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };elementAbs$.hasAttributeNS.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'namespace',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'attName',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[m$1.doc("returns if attribute exists the element within the given namespace"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','hasAttributeNS']};};
            elementAbs$.removeAttribute=function removeAttribute($h4){
                var elementAbs$=this;
                var $h5=$h4;
                if(m$1.is$($h4,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    elementAbs$.$_native.removeAttribute($h5.valueOf());
                    /*End dynamic block*/
                }else if(m$1.is$($h4,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    elementAbs$.$_native.removeAttribute($h5.$_native);
                    /*End dynamic block*/
                }
            };elementAbs$.removeAttribute.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'attrName',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[m$1.doc("remove an attribute on the element"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','removeAttribute']};};
            elementAbs$.removeAttributeNS=function removeAttributeNS($h6,$h7){
                var elementAbs$=this;
                var $h8=$h6;
                if(m$1.is$($h6,{t:m$1.String})) {
                    var $h9=$h7;
                    if(m$1.is$($h7,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        elementAbs$.$_native.removeAttribute($h8.valueOf(),$h9.valueOf());
                        /*End dynamic block*/
                    }else if(m$1.is$($h7,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        elementAbs$.$_native.removeAttribute($h8.valueOf(),$h9.$_native);
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($h6,{t:m$9f.JSString})) {
                    var $ha=$h7;
                    if(m$1.is$($h7,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        elementAbs$.$_native.removeAttribute($h8.$_native,$ha.valueOf());
                        /*End dynamic block*/
                    }else if(m$1.is$($h7,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        elementAbs$.$_native.removeAttribute($h8.$_native,$ha.$_native);
                        /*End dynamic block*/
                    }
                }
            };elementAbs$.removeAttributeNS.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'namespace',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'attrName',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[m$1.doc("remove an attribute on the element within the given namespace"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','removeAttributeNS']};};
            elementAbs$.setAttribute=function setAttribute($hb,$hc){
                var elementAbs$=this;
                var $hd=$hb;
                if(m$1.is$($hb,{t:m$1.String})) {
                    var $he=$hc;
                    if(m$1.is$($hc,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        elementAbs$.$_native.setAttribute($hd.valueOf(),$he.valueOf());
                        /*End dynamic block*/
                    }else if(m$1.is$($hc,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        elementAbs$.$_native.setAttribute($hd.valueOf(),$he.$_native);
                        /*End dynamic block*/
                    }
                }else if(m$1.is$($hb,{t:m$9f.JSString})) {
                    var $hf=$hc;
                    if(m$1.is$($hc,{t:m$1.String})) {
                        /*Begin dynamic block*/
                        elementAbs$.$_native.setAttribute($hd.$_native,$hf.valueOf());
                        /*End dynamic block*/
                    }else if(m$1.is$($hc,{t:m$9f.JSString})) {
                        /*Begin dynamic block*/
                        elementAbs$.$_native.setAttribute($hd.$_native,$hf.$_native);
                        /*End dynamic block*/
                    }
                }
            };elementAbs$.setAttribute.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[m$1.doc("set an attribute on the element"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','setAttribute']};};
            elementAbs$.setAttributeNS=function setAttributeNS($hg,$hh,$hi){
                var elementAbs$=this;
                var $hj=$hg;
                if(m$1.is$($hg,{t:m$1.String})) {
                    var $hk=$hh;
                    if(m$1.is$($hh,{t:m$1.String})) {
                        var $hl=$hi;
                        if(m$1.is$($hi,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            elementAbs$.$_native.setAttributeNS($hj.valueOf(),$hk.valueOf(),$hl.valueOf());
                            /*End dynamic block*/
                        }else if(m$1.is$($hi,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            elementAbs$.$_native.setAttributeNS($hj.valueOf(),$hk.valueOf(),$hl.$_native);
                            /*End dynamic block*/
                        }
                    }else if(m$1.is$($hh,{t:m$9f.JSString})) {
                        var $hm=$hi;
                        if(m$1.is$($hi,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            elementAbs$.$_native.setAttributeNS($hj.valueOf(),$hk.$_native,$hm.valueOf());
                            /*End dynamic block*/
                        }else if(m$1.is$($hi,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            elementAbs$.$_native.setAttributeNS($hj.valueOf(),$hk.$_native,$hm.$_native);
                            /*End dynamic block*/
                        }
                    }
                }else if(m$1.is$($hg,{t:m$9f.JSString})) {
                    var $hn=$hh;
                    if(m$1.is$($hh,{t:m$1.String})) {
                        var $ho=$hi;
                        if(m$1.is$($hi,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            elementAbs$.$_native.setAttributeNS($hj.$_native,$hn.valueOf(),$ho.valueOf());
                            /*End dynamic block*/
                        }else if(m$1.is$($hi,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            elementAbs$.$_native.setAttributeNS($hj.$_native,$hn.valueOf(),$ho.$_native);
                            /*End dynamic block*/
                        }
                    }else if(m$1.is$($hh,{t:m$9f.JSString})) {
                        var $hp=$hi;
                        if(m$1.is$($hi,{t:m$1.String})) {
                            /*Begin dynamic block*/
                            elementAbs$.$_native.setAttributeNS($hj.$_native,$hn.$_native,$hp.valueOf());
                            /*End dynamic block*/
                        }else if(m$1.is$($hi,{t:m$9f.JSString})) {
                            /*Begin dynamic block*/
                            elementAbs$.$_native.setAttributeNS($hj.$_native,$hn.$_native,$hp.$_native);
                            /*End dynamic block*/
                        }
                    }
                }
            };elementAbs$.setAttributeNS.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'namespace',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[m$1.doc("set an attribute on the element within the given namespace"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','setAttributeNS']};};
            elementAbs$.tagName=function tagName(){
                var elementAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(elementAbs$.$_native.tagName);
                /*End dynamic block*/
            };elementAbs$.tagName.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:ElementAbs,$an:function(){return[m$1.doc("returns the elements tag name"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ElementAbs','$m','tagName']};};
        })(ElementAbs.$$.prototype);
    }
    return ElementAbs;
}
ex$.$init$ElementAbs=$init$ElementAbs;
$init$ElementAbs();
function Element($hq,element$){
    $init$Element();
    if(element$===undefined)element$=new Element.$$;
    element$.$hq_=$hq;
    ElementAbs(element$);
    element$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Element,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','Element','$at','native']};}};
    /*Begin dynamic block*/
    element$.$_native=element$.$hq;/*End dynamic block*/
    return element$;
}
Element.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ElementAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a DOM Element"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','Element']};};
ex$.Element=Element;
function $init$Element(){
    if(Element.$$===undefined){
        m$1.initTypeProto(Element,'com.openswimsoftware.ceylon.js.dom::Element',$init$ElementAbs());
        (function(element$){
            m$1.atr$(element$,'$hq',function(){return this.$hq_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Element,d:['com.openswimsoftware.ceylon.js.dom','Element','$at','n$hfpsvg']};});
        })(Element.$$.prototype);
    }
    return Element;
}
ex$.$init$Element=$init$Element;
$init$Element();
var m$hr=require('com/openswimsoftware/ceylon/js/json/1.0.0/com.openswimsoftware.ceylon.js.json-1.0.0');
m$1.$addmod$(m$hr,'com.openswimsoftware.ceylon.js.json/1.0.0');
function EventPhase(num,eventPhase$){
    $init$EventPhase();
    if(eventPhase$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    eventPhase$.num_=num;
    return eventPhase$;
}
EventPhase.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'num',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[m$1.shared()];}}],of:[$prop$get$hs,$prop$get$ht,$prop$get$hu,$prop$get$hv],$an:function(){return[m$1.doc("current Event Phase"),m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','EventPhase']};};
ex$.EventPhase=EventPhase;
function $init$EventPhase(){
    if(EventPhase.$$===undefined){
        m$1.initTypeProto(EventPhase,'com.openswimsoftware.ceylon.js.dom::EventPhase',m$1.Basic);
        (function(eventPhase$){
            m$1.atr$(eventPhase$,'num',function(){return this.num_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:EventPhase,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventPhase','$at','num']};});
        })(EventPhase.$$.prototype);
    }
    return EventPhase;
}
ex$.$init$EventPhase=$init$EventPhase;
$init$EventPhase();
function $hs(){
    var none$=new $hs.$$;
    EventPhase(0,none$);
    return none$;
};$hs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:EventPhase},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','none']};};
function $init$$hs(){
    if($hs.$$===undefined){
        m$1.initTypeProto($hs,'com.openswimsoftware.ceylon.js.dom::none',$init$EventPhase());
    }
    return $hs;
}
ex$.$init$$hs=$init$$hs;
$init$$hs();
var $hw;
function getNone(){
    if($hw===undefined){$hw=$init$$hs()();$hw.$crtmm$=getNone.$crtmm$;}
    return $hw;
}
ex$.getNone=getNone;
getNone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$hs},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','none']};};
$prop$getNone={get:getNone,$crtmm$:getNone.$crtmm$};
get$hs=getNone;$prop$get$hs=getNone;
ex$.$prop$getNone=$prop$getNone;
function $ht(){
    var capturePhase$=new $ht.$$;
    EventPhase(1,capturePhase$);
    return capturePhase$;
};$ht.$crtmm$=function(){return{mod:$CCMM$,'super':{t:EventPhase},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','capturePhase']};};
function $init$$ht(){
    if($ht.$$===undefined){
        m$1.initTypeProto($ht,'com.openswimsoftware.ceylon.js.dom::capturePhase',$init$EventPhase());
    }
    return $ht;
}
ex$.$init$$ht=$init$$ht;
$init$$ht();
var $hx;
function getCapturePhase(){
    if($hx===undefined){$hx=$init$$ht()();$hx.$crtmm$=getCapturePhase.$crtmm$;}
    return $hx;
}
ex$.getCapturePhase=getCapturePhase;
getCapturePhase.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$ht},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','capturePhase']};};
$prop$getCapturePhase={get:getCapturePhase,$crtmm$:getCapturePhase.$crtmm$};
get$ht=getCapturePhase;$prop$get$ht=getCapturePhase;
ex$.$prop$getCapturePhase=$prop$getCapturePhase;
function $hu(){
    var atTarget$=new $hu.$$;
    EventPhase(2,atTarget$);
    return atTarget$;
};$hu.$crtmm$=function(){return{mod:$CCMM$,'super':{t:EventPhase},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','atTarget']};};
function $init$$hu(){
    if($hu.$$===undefined){
        m$1.initTypeProto($hu,'com.openswimsoftware.ceylon.js.dom::atTarget',$init$EventPhase());
    }
    return $hu;
}
ex$.$init$$hu=$init$$hu;
$init$$hu();
var $hy;
function getAtTarget(){
    if($hy===undefined){$hy=$init$$hu()();$hy.$crtmm$=getAtTarget.$crtmm$;}
    return $hy;
}
ex$.getAtTarget=getAtTarget;
getAtTarget.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$hu},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','atTarget']};};
$prop$getAtTarget={get:getAtTarget,$crtmm$:getAtTarget.$crtmm$};
get$hu=getAtTarget;$prop$get$hu=getAtTarget;
ex$.$prop$getAtTarget=$prop$getAtTarget;
function $hv(){
    var bubblingPhase$=new $hv.$$;
    EventPhase(3,bubblingPhase$);
    return bubblingPhase$;
};$hv.$crtmm$=function(){return{mod:$CCMM$,'super':{t:EventPhase},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','bubblingPhase']};};
function $init$$hv(){
    if($hv.$$===undefined){
        m$1.initTypeProto($hv,'com.openswimsoftware.ceylon.js.dom::bubblingPhase',$init$EventPhase());
    }
    return $hv;
}
ex$.$init$$hv=$init$$hv;
$init$$hv();
var $hz;
function getBubblingPhase(){
    if($hz===undefined){$hz=$init$$hv()();$hz.$crtmm$=getBubblingPhase.$crtmm$;}
    return $hz;
}
ex$.getBubblingPhase=getBubblingPhase;
getBubblingPhase.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$hv},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','bubblingPhase']};};
$prop$getBubblingPhase={get:getBubblingPhase,$crtmm$:getBubblingPhase.$crtmm$};
get$hv=getBubblingPhase;$prop$get$hv=getBubblingPhase;
ex$.$prop$getBubblingPhase=$prop$getBubblingPhase;
function EventInit(bubbles,cancelable,eventInit$){
    $init$EventInit();
    if(eventInit$===undefined)eventInit$=new EventInit.$$;
    eventInit$.bubbles_=bubbles;
    eventInit$.cancelable_=cancelable;
    return eventInit$;
}
EventInit.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'bubbles',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared()];}},{$nm:'cancelable',$mt:'prm',$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.doc("Event creation options"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventInit']};};
ex$.EventInit=EventInit;
function $init$EventInit(){
    if(EventInit.$$===undefined){
        m$1.initTypeProto(EventInit,'com.openswimsoftware.ceylon.js.dom::EventInit',m$1.Basic);
        (function(eventInit$){
            eventInit$.toJson=function toJson(){
                var eventInit$=this;
                var $i0=($i1=[m$1.Entry("bubbles",eventInit$.bubbles,{Item$Entry:{t:m$1.$_Boolean},Key$Entry:{t:m$1.String}}),m$1.Entry("cancelable",eventInit$.cancelable,{Item$Entry:{t:m$1.$_Boolean},Key$Entry:{t:m$1.String}})].reifyCeylonType({t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Boolean},Key$Entry:{t:m$1.String}}}),m$hr.JSON($i1));
                var $i1;
                return $i0.toJson();
            };eventInit$.toJson.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hr.JSJSON},$ps:[],$cont:EventInit,$an:function(){return[m$1.doc("convert to native JSON"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventInit','$m','toJson']};};
            m$1.atr$(eventInit$,'bubbles',function(){return this.bubbles_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:EventInit,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventInit','$at','bubbles']};});
            m$1.atr$(eventInit$,'cancelable',function(){return this.cancelable_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:EventInit,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventInit','$at','cancelable']};});
        })(EventInit.$$.prototype);
    }
    return EventInit;
}
ex$.$init$EventInit=$init$EventInit;
$init$EventInit();
function createEvent($i2,$i3){
    var $i4=$i2;
    if(m$1.is$($i2,{t:m$1.String})) {
        /*Begin dynamic block*/
        return Event((typeof Event==='undefined'||Event===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Event"),'30:16-30:20','event.ceylon'):Event)($i4.valueOf(),$i3.toJson()));
        /*End dynamic block*/
    }else if(m$1.is$($i2,{t:m$9f.JSString})) {
        /*Begin dynamic block*/
        return Event((typeof Event==='undefined'||Event===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Event"),'35:16-35:20','event.ceylon'):Event)($i4.$_native,$i3.toJson()));
        /*End dynamic block*/
    }
}
ex$.createEvent=createEvent;
createEvent.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Event},$ps:[{$nm:'type',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'options',$mt:'prm',$t:{t:EventInit},$an:function(){return[];}}],$an:function(){return[m$1.doc("create a new Event"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','createEvent']};};
function EventAbs(eventAbs$){
    $init$EventAbs();
    if(eventAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(eventAbs$);
    return eventAbs$;
}
EventAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs']};};
ex$.EventAbs=EventAbs;
function $init$EventAbs(){
    if(EventAbs.$$===undefined){
        m$1.initTypeProto(EventAbs,'com.openswimsoftware.ceylon.js.dom::EventAbs',m$9f.JSObjectAbs);
        (function(eventAbs$){
            eventAbs$.type=function type(){
                var eventAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(eventAbs$.$_native.type);
                /*End dynamic block*/
            };eventAbs$.type.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:EventAbs,$an:function(){return[m$1.doc("returns the Event type"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','type']};};
            eventAbs$.target=function target(){
                var eventAbs$=this;
                var $i5;
                /*Begin dynamic block*/
                $i5=eventAbs$.$_native.target;if(($i6=$i5,$i7=null,($i6.equals&&!$i6.equals($i7))||$i6!==$i7)){
                    return EventTarget($i5);
                }else {
                    return null;
                }/*End dynamic block*/
            };eventAbs$.target.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:EventTarget}]},$ps:[],$cont:EventAbs,$an:function(){return[m$1.doc("returns the event target"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','target']};};
            eventAbs$.currentTarget=function currentTarget(){
                var eventAbs$=this;
                var $i8;
                /*Begin dynamic block*/
                $i8=eventAbs$.$_native.currentTarget;if(($i9=$i8,$ia=null,($i9.equals&&!$i9.equals($ia))||$i9!==$ia)){
                    return EventTarget($i8);
                }else {
                    return null;
                }/*End dynamic block*/
            };eventAbs$.currentTarget.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:EventTarget}]},$ps:[],$cont:EventAbs,$an:function(){return[m$1.doc("returns the current event target"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','currentTarget']};};
            eventAbs$.eventPhase=function eventPhase(){
                var eventAbs$=this;
                /*Begin dynamic block*/
                var $ib=eventAbs$.$_native.eventPhase;
                if(($ic=$ib,$id=(typeof Event==='undefined'||Event===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Event"),'80:30-80:34','event.ceylon'):Event).NONE,($ic.equals&&$ic.equals($id))||$ic===$id)){
                    return getNone();
                }else {
                    if(($ie=$ib,$if=(typeof Event==='undefined'||Event===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Event"),'82:37-82:41','event.ceylon'):Event).CAPTURING_PHASE,($ie.equals&&$ie.equals($if))||$ie===$if)){
                        return getCapturePhase();
                    }else {
                        if(($ig=$ib,$ih=(typeof Event==='undefined'||Event===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Event"),'84:37-84:41','event.ceylon'):Event).AT_TARGET,($ig.equals&&$ig.equals($ih))||$ig===$ih)){
                            return getAtTarget();
                        }else {
                            return getBubblingPhase();
                        }
                    }
                }/*End dynamic block*/
            };eventAbs$.eventPhase.$crtmm$=function(){return{mod:$CCMM$,$t:{t:EventPhase},$ps:[],$cont:EventAbs,$an:function(){return[m$1.doc("returns current event phase"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','eventPhase']};};
            eventAbs$.stopPropagation=function stopPropagation(){
                var eventAbs$=this;
                /*Begin dynamic block*/
                eventAbs$.$_native.stopPropagation();
                /*End dynamic block*/
            };eventAbs$.stopPropagation.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:EventAbs,$an:function(){return[m$1.doc("stops event propagation through further DOM elements"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','stopPropagation']};};
            eventAbs$.stopImmediatePropagation=function stopImmediatePropagation(){
                var eventAbs$=this;
                /*Begin dynamic block*/
                eventAbs$.$_native.stopImmediatePropagation();
                /*End dynamic block*/
            };eventAbs$.stopImmediatePropagation.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:EventAbs,$an:function(){return[m$1.doc("returns the event propagation immidately"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','stopImmediatePropagation']};};
            eventAbs$.bubbles=function bubbles(){
                var eventAbs$=this;
                /*Begin dynamic block*/
                if(eventAbs$.$_native.bubbles){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };eventAbs$.bubbles.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:EventAbs,$an:function(){return[m$1.doc("does the event bubble through the dom or not"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','bubbles']};};
            eventAbs$.cancelable=function cancelable(){
                var eventAbs$=this;
                /*Begin dynamic block*/
                if(eventAbs$.$_native.cancelable){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };eventAbs$.cancelable.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:EventAbs,$an:function(){return[m$1.doc("is the event cancelable or not"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','cancelable']};};
            eventAbs$.preventDefault=function preventDefault(){
                var eventAbs$=this;
                /*Begin dynamic block*/
                eventAbs$.$_native.preventDefault();
                /*End dynamic block*/
            };eventAbs$.preventDefault.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:EventAbs,$an:function(){return[m$1.doc("cancels the event if it is cancelable"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','preventDefault']};};
            eventAbs$.defaultPrevented=function defaultPrevented(){
                var eventAbs$=this;
                /*Begin dynamic block*/
                if(eventAbs$.$_native.defaultPrevented){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };eventAbs$.defaultPrevented.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:EventAbs,$an:function(){return[m$1.doc("has the default been prevented"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','defaultPrevented']};};
            eventAbs$.isTrusted=function isTrusted(){
                var eventAbs$=this;
                /*Begin dynamic block*/
                if(eventAbs$.$_native.isTrusted){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };eventAbs$.isTrusted.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:EventAbs,$an:function(){return[m$1.doc("was the event created by the browser or a script"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','isTrusted']};};
            eventAbs$.timeStamp=function timeStamp(){
                var eventAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSDate(eventAbs$.$_native.timeStamp);
                /*End dynamic block*/
            };eventAbs$.timeStamp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSDate},$ps:[],$cont:EventAbs,$an:function(){return[m$1.doc("returns the time the event was created"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventAbs','$m','timeStamp']};};
        })(EventAbs.$$.prototype);
    }
    return EventAbs;
}
ex$.$init$EventAbs=$init$EventAbs;
$init$EventAbs();
function Event($ii,event$){
    $init$Event();
    if(event$===undefined)event$=new Event.$$;
    event$.$ii_=$ii;
    EventAbs(event$);
    event$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Event,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','Event','$at','native']};}};
    /*Begin dynamic block*/
    event$.$_native=event$.$ii;/*End dynamic block*/
    return event$;
}
Event.$crtmm$=function(){return{mod:$CCMM$,'super':{t:EventAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a DOM Event"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','Event']};};
ex$.Event=Event;
function $init$Event(){
    if(Event.$$===undefined){
        m$1.initTypeProto(Event,'com.openswimsoftware.ceylon.js.dom::Event',$init$EventAbs());
        (function(event$){
            m$1.atr$(event$,'$ii',function(){return this.$ii_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Event,d:['com.openswimsoftware.ceylon.js.dom','Event','$at','n$2vytsu']};});
        })(Event.$$.prototype);
    }
    return Event;
}
ex$.$init$Event=$init$Event;
$init$Event();
function EventTargetAbs(eventTargetAbs$){
    $init$EventTargetAbs();
    if(eventTargetAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(eventTargetAbs$);
    return eventTargetAbs$;
}
EventTargetAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','EventTargetAbs']};};
ex$.EventTargetAbs=EventTargetAbs;
function $init$EventTargetAbs(){
    if(EventTargetAbs.$$===undefined){
        m$1.initTypeProto(EventTargetAbs,'com.openswimsoftware.ceylon.js.dom::EventTargetAbs',m$9f.JSObjectAbs);
        (function(eventTargetAbs$){
            eventTargetAbs$.addEventListener$defs$capture=function($ij,$ik,$il){return false;};
            eventTargetAbs$.addEventListener=function addEventListener($ij,$ik,$il){
                var eventTargetAbs$=this;
                if($il===undefined){$il=eventTargetAbs$.addEventListener$defs$capture($ij,$ik,$il);}
                var $im=$ij;
                if(m$1.is$($ij,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    eventTargetAbs$.$_native.addEventListener($im.valueOf(),$ik,$il);
                    /*End dynamic block*/
                }else if(m$1.is$($ij,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    eventTargetAbs$.$_native.addEventListener($im.$_native,$ik,$il);
                    /*End dynamic block*/
                }
            };eventTargetAbs$.addEventListener.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'capture',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[m$1.doc("add an event listener to the target"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventTargetAbs','$m','addEventListener']};};
            eventTargetAbs$.removeEventListener$defs$capture=function($in,$io,$ip){return false;};
            eventTargetAbs$.removeEventListener=function removeEventListener($in,$io,$ip){
                var eventTargetAbs$=this;
                if($ip===undefined){$ip=eventTargetAbs$.removeEventListener$defs$capture($in,$io,$ip);}
                var $iq=$in;
                if(m$1.is$($in,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    eventTargetAbs$.$_native.removeEventListener($iq.valueOf(),$io,$ip);
                    /*End dynamic block*/
                }else if(m$1.is$($in,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    eventTargetAbs$.$_native.removeEventListener($iq.$_native,$io,$ip);
                    /*End dynamic block*/
                }
            };eventTargetAbs$.removeEventListener.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:m$1.Anything},$an:function(){return[];}},{$nm:'capture',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[m$1.doc("remove an event listener from the target"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventTargetAbs','$m','removeEventListener']};};
            eventTargetAbs$.dispatchEvent=function dispatchEvent($ir){
                var eventTargetAbs$=this;
                /*Begin dynamic block*/
                if(eventTargetAbs$.$_native.dispatchEvent($ir)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };eventTargetAbs$.dispatchEvent.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[m$1.doc("dispatch an event at the target"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventTargetAbs','$m','dispatchEvent']};};
        })(EventTargetAbs.$$.prototype);
    }
    return EventTargetAbs;
}
ex$.$init$EventTargetAbs=$init$EventTargetAbs;
$init$EventTargetAbs();
function EventTarget($is,eventTarget$){
    $init$EventTarget();
    if(eventTarget$===undefined)eventTarget$=new EventTarget.$$;
    eventTarget$.$is_=$is;
    EventTargetAbs(eventTarget$);
    eventTarget$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:EventTarget,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','EventTarget','$at','native']};}};
    /*Begin dynamic block*/
    eventTarget$.$_native=eventTarget$.$is;/*End dynamic block*/
    return eventTarget$;
}
EventTarget.$crtmm$=function(){return{mod:$CCMM$,'super':{t:EventTargetAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a DOM EventTarget"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EventTarget']};};
ex$.EventTarget=EventTarget;
function $init$EventTarget(){
    if(EventTarget.$$===undefined){
        m$1.initTypeProto(EventTarget,'com.openswimsoftware.ceylon.js.dom::EventTarget',$init$EventTargetAbs());
        (function(eventTarget$){
            m$1.atr$(eventTarget$,'$is',function(){return this.$is_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:EventTarget,d:['com.openswimsoftware.ceylon.js.dom','EventTarget','$at','n$u466ed']};});
        })(EventTarget.$$.prototype);
    }
    return EventTarget;
}
ex$.$init$EventTarget=$init$EventTarget;
$init$EventTarget();
function HTMLCollectionAbs(hTMLCollectionAbs$){
    $init$HTMLCollectionAbs();
    if(hTMLCollectionAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(hTMLCollectionAbs$);
    return hTMLCollectionAbs$;
}
HTMLCollectionAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','HTMLCollectionAbs']};};
ex$.HTMLCollectionAbs=HTMLCollectionAbs;
function $init$HTMLCollectionAbs(){
    if(HTMLCollectionAbs.$$===undefined){
        m$1.initTypeProto(HTMLCollectionAbs,'com.openswimsoftware.ceylon.js.dom::HTMLCollectionAbs',m$9f.JSObjectAbs);
        (function(hTMLCollectionAbs$){
            hTMLCollectionAbs$.length=function length(){
                var hTMLCollectionAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(hTMLCollectionAbs$.$_native.length);
                /*End dynamic block*/
            };hTMLCollectionAbs$.length.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:HTMLCollectionAbs,$an:function(){return[m$1.doc("returns the length of the collection"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','HTMLCollectionAbs','$m','length']};};
            hTMLCollectionAbs$.item=function item($it){
                var hTMLCollectionAbs$=this;
                var $iu;
                var $iv=$it;
                if(m$1.is$($it,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    $iu=hTMLCollectionAbs$.$_native.item($iv);/*End dynamic block*/
                }else if(m$1.is$($it,{t:m$9f.JSNumber})) {
                    /*Begin dynamic block*/
                    $iu=hTMLCollectionAbs$.$_native.item($iv.$_native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if(($iw=$iu,$ix=null,($iw.equals&&!$iw.equals($ix))||$iw!==$ix)){
                    return Element($iu);
                }else {
                    return null;
                }/*End dynamic block*/
            };hTMLCollectionAbs$.item.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Element}]},$ps:[{$nm:'index',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}}],$cont:HTMLCollectionAbs,$an:function(){return[m$1.doc("return the node at the given index"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','HTMLCollectionAbs','$m','item']};};
            hTMLCollectionAbs$.namedItem=function namedItem($iy){
                var hTMLCollectionAbs$=this;
                var $iz;
                var $j0=$iy;
                if(m$1.is$($iy,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    $iz=hTMLCollectionAbs$.$_native.namedItem($j0.valueOf());/*End dynamic block*/
                }else if(m$1.is$($iy,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    $iz=hTMLCollectionAbs$.$_native.namedItem($j0.$_native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if(($j1=$iz,$j2=null,($j1.equals&&$j1.equals($j2))||$j1===$j2)){
                    return m$9f.JSObject($iz);
                }else {
                    return null;
                }/*End dynamic block*/
            };hTMLCollectionAbs$.namedItem.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSObject}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:HTMLCollectionAbs,$an:function(){return[m$1.doc("return the node whose id or name matches the passed name"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','HTMLCollectionAbs','$m','namedItem']};};
        })(HTMLCollectionAbs.$$.prototype);
    }
    return HTMLCollectionAbs;
}
ex$.$init$HTMLCollectionAbs=$init$HTMLCollectionAbs;
$init$HTMLCollectionAbs();
function HTMLCollection($j3,hTMLCollection$){
    $init$HTMLCollection();
    if(hTMLCollection$===undefined)hTMLCollection$=new HTMLCollection.$$;
    hTMLCollection$.$j3_=$j3;
    HTMLCollectionAbs(hTMLCollection$);
    hTMLCollection$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:HTMLCollection,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','HTMLCollection','$at','native']};}};
    /*Begin dynamic block*/
    hTMLCollection$.$_native=hTMLCollection$.$j3;/*End dynamic block*/
    return hTMLCollection$;
}
HTMLCollection.$crtmm$=function(){return{mod:$CCMM$,'super':{t:HTMLCollectionAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a DOM HTMLCollection"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','HTMLCollection']};};
ex$.HTMLCollection=HTMLCollection;
function $init$HTMLCollection(){
    if(HTMLCollection.$$===undefined){
        m$1.initTypeProto(HTMLCollection,'com.openswimsoftware.ceylon.js.dom::HTMLCollection',$init$HTMLCollectionAbs());
        (function(hTMLCollection$){
            m$1.atr$(hTMLCollection$,'$j3',function(){return this.$j3_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:HTMLCollection,d:['com.openswimsoftware.ceylon.js.dom','HTMLCollection','$at','n$qxfu5z']};});
        })(HTMLCollection.$$.prototype);
    }
    return HTMLCollection;
}
ex$.$init$HTMLCollection=$init$HTMLCollection;
$init$HTMLCollection();
function getWindow(){
    /*Begin dynamic block*/
    return m$bx.Window((typeof window==='undefined'||window===null?m$1.throwexc(m$1.Exception("Undefined or null reference: window"),'6:16-6:21','main.ceylon'):window));
    /*End dynamic block*/
}
ex$.getWindow=getWindow;
getWindow.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$bx.Window},$ps:[],$an:function(){return[m$1.doc("returns the current browser window"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','getWindow']};};
ex$.$mod$ans$=function(){return[m$1.doc("based on the DOM 4 working draft and Mozilla WebAPIs")];};
ex$.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.language/1.8.0':function(){return[m$1.shared()];},
'com.openswimsoftware.ceylon.js.html/5.0.0':function(){return[m$1.shared()];},
'com.openswimsoftware.ceylon.js.json/1.0.0':function(){return[m$1.shared()];}
};};
function NodeType($j4,nodeType$){
    $init$NodeType();
    if(nodeType$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    nodeType$.$j4_=$j4;
    return nodeType$;
}
NodeType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],of:[$prop$get$j5,$prop$get$j6,$prop$get$j7,$prop$get$j8,$prop$get$j9,$prop$get$ja,$prop$get$jb,$prop$get$jc,$prop$get$jd,$prop$get$je,$prop$get$jf,$prop$get$jg],$an:function(){return[m$1.doc("specific NodeType"),m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','NodeType']};};
ex$.NodeType=NodeType;
function $init$NodeType(){
    if(NodeType.$$===undefined){
        m$1.initTypeProto(NodeType,'com.openswimsoftware.ceylon.js.dom::NodeType',m$1.Basic);
        (function(nodeType$){
            m$1.atr$(nodeType$,'$j4',function(){return this.$j4_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:NodeType,d:['com.openswimsoftware.ceylon.js.dom','NodeType','$at','name$3p2n2h']};});
        })(NodeType.$$.prototype);
    }
    return NodeType;
}
ex$.$init$NodeType=$init$NodeType;
$init$NodeType();
function $j5(){
    var attributeNode$=new $j5.$$;
    NodeType("attributeNode",attributeNode$);
    return attributeNode$;
};$j5.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','attributeNode']};};
function $init$$j5(){
    if($j5.$$===undefined){
        m$1.initTypeProto($j5,'com.openswimsoftware.ceylon.js.dom::attributeNode',$init$NodeType());
    }
    return $j5;
}
ex$.$init$$j5=$init$$j5;
$init$$j5();
var $jh;
function getAttributeNode(){
    if($jh===undefined){$jh=$init$$j5()();$jh.$crtmm$=getAttributeNode.$crtmm$;}
    return $jh;
}
ex$.getAttributeNode=getAttributeNode;
getAttributeNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$j5},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','attributeNode']};};
$prop$getAttributeNode={get:getAttributeNode,$crtmm$:getAttributeNode.$crtmm$};
get$j5=getAttributeNode;$prop$get$j5=getAttributeNode;
ex$.$prop$getAttributeNode=$prop$getAttributeNode;
function $j6(){
    var cdataSectionNode$=new $j6.$$;
    NodeType("cdataSectionNode",cdataSectionNode$);
    return cdataSectionNode$;
};$j6.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','cdataSectionNode']};};
function $init$$j6(){
    if($j6.$$===undefined){
        m$1.initTypeProto($j6,'com.openswimsoftware.ceylon.js.dom::cdataSectionNode',$init$NodeType());
    }
    return $j6;
}
ex$.$init$$j6=$init$$j6;
$init$$j6();
var $ji;
function getCdataSectionNode(){
    if($ji===undefined){$ji=$init$$j6()();$ji.$crtmm$=getCdataSectionNode.$crtmm$;}
    return $ji;
}
ex$.getCdataSectionNode=getCdataSectionNode;
getCdataSectionNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$j6},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','cdataSectionNode']};};
$prop$getCdataSectionNode={get:getCdataSectionNode,$crtmm$:getCdataSectionNode.$crtmm$};
get$j6=getCdataSectionNode;$prop$get$j6=getCdataSectionNode;
ex$.$prop$getCdataSectionNode=$prop$getCdataSectionNode;
function $j7(){
    var commentNode$=new $j7.$$;
    NodeType("commentNode",commentNode$);
    return commentNode$;
};$j7.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','commentNode']};};
function $init$$j7(){
    if($j7.$$===undefined){
        m$1.initTypeProto($j7,'com.openswimsoftware.ceylon.js.dom::commentNode',$init$NodeType());
    }
    return $j7;
}
ex$.$init$$j7=$init$$j7;
$init$$j7();
var $jj;
function getCommentNode(){
    if($jj===undefined){$jj=$init$$j7()();$jj.$crtmm$=getCommentNode.$crtmm$;}
    return $jj;
}
ex$.getCommentNode=getCommentNode;
getCommentNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$j7},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','commentNode']};};
$prop$getCommentNode={get:getCommentNode,$crtmm$:getCommentNode.$crtmm$};
get$j7=getCommentNode;$prop$get$j7=getCommentNode;
ex$.$prop$getCommentNode=$prop$getCommentNode;
function $j8(){
    var documentFragmentNode$=new $j8.$$;
    NodeType("documentFragmentNode",documentFragmentNode$);
    return documentFragmentNode$;
};$j8.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentFragmentNode']};};
function $init$$j8(){
    if($j8.$$===undefined){
        m$1.initTypeProto($j8,'com.openswimsoftware.ceylon.js.dom::documentFragmentNode',$init$NodeType());
    }
    return $j8;
}
ex$.$init$$j8=$init$$j8;
$init$$j8();
var $jk;
function getDocumentFragmentNode(){
    if($jk===undefined){$jk=$init$$j8()();$jk.$crtmm$=getDocumentFragmentNode.$crtmm$;}
    return $jk;
}
ex$.getDocumentFragmentNode=getDocumentFragmentNode;
getDocumentFragmentNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$j8},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentFragmentNode']};};
$prop$getDocumentFragmentNode={get:getDocumentFragmentNode,$crtmm$:getDocumentFragmentNode.$crtmm$};
get$j8=getDocumentFragmentNode;$prop$get$j8=getDocumentFragmentNode;
ex$.$prop$getDocumentFragmentNode=$prop$getDocumentFragmentNode;
function $j9(){
    var documentNode$=new $j9.$$;
    NodeType("documentNode",documentNode$);
    return documentNode$;
};$j9.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentNode']};};
function $init$$j9(){
    if($j9.$$===undefined){
        m$1.initTypeProto($j9,'com.openswimsoftware.ceylon.js.dom::documentNode',$init$NodeType());
    }
    return $j9;
}
ex$.$init$$j9=$init$$j9;
$init$$j9();
var $jl;
function getDocumentNode(){
    if($jl===undefined){$jl=$init$$j9()();$jl.$crtmm$=getDocumentNode.$crtmm$;}
    return $jl;
}
ex$.getDocumentNode=getDocumentNode;
getDocumentNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$j9},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentNode']};};
$prop$getDocumentNode={get:getDocumentNode,$crtmm$:getDocumentNode.$crtmm$};
get$j9=getDocumentNode;$prop$get$j9=getDocumentNode;
ex$.$prop$getDocumentNode=$prop$getDocumentNode;
function $ja(){
    var documentTypeNode$=new $ja.$$;
    NodeType("documentTypeNode",documentTypeNode$);
    return documentTypeNode$;
};$ja.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentTypeNode']};};
function $init$$ja(){
    if($ja.$$===undefined){
        m$1.initTypeProto($ja,'com.openswimsoftware.ceylon.js.dom::documentTypeNode',$init$NodeType());
    }
    return $ja;
}
ex$.$init$$ja=$init$$ja;
$init$$ja();
var $jm;
function getDocumentTypeNode(){
    if($jm===undefined){$jm=$init$$ja()();$jm.$crtmm$=getDocumentTypeNode.$crtmm$;}
    return $jm;
}
ex$.getDocumentTypeNode=getDocumentTypeNode;
getDocumentTypeNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$ja},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','documentTypeNode']};};
$prop$getDocumentTypeNode={get:getDocumentTypeNode,$crtmm$:getDocumentTypeNode.$crtmm$};
get$ja=getDocumentTypeNode;$prop$get$ja=getDocumentTypeNode;
ex$.$prop$getDocumentTypeNode=$prop$getDocumentTypeNode;
function $jb(){
    var elementNode$=new $jb.$$;
    NodeType("elementNode",elementNode$);
    return elementNode$;
};$jb.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','elementNode']};};
function $init$$jb(){
    if($jb.$$===undefined){
        m$1.initTypeProto($jb,'com.openswimsoftware.ceylon.js.dom::elementNode',$init$NodeType());
    }
    return $jb;
}
ex$.$init$$jb=$init$$jb;
$init$$jb();
var $jn;
function getElementNode(){
    if($jn===undefined){$jn=$init$$jb()();$jn.$crtmm$=getElementNode.$crtmm$;}
    return $jn;
}
ex$.getElementNode=getElementNode;
getElementNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$jb},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','elementNode']};};
$prop$getElementNode={get:getElementNode,$crtmm$:getElementNode.$crtmm$};
get$jb=getElementNode;$prop$get$jb=getElementNode;
ex$.$prop$getElementNode=$prop$getElementNode;
function $jc(){
    var entityNode$=new $jc.$$;
    NodeType("entityNode",entityNode$);
    return entityNode$;
};$jc.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','entityNode']};};
function $init$$jc(){
    if($jc.$$===undefined){
        m$1.initTypeProto($jc,'com.openswimsoftware.ceylon.js.dom::entityNode',$init$NodeType());
    }
    return $jc;
}
ex$.$init$$jc=$init$$jc;
$init$$jc();
var $jo;
function getEntityNode(){
    if($jo===undefined){$jo=$init$$jc()();$jo.$crtmm$=getEntityNode.$crtmm$;}
    return $jo;
}
ex$.getEntityNode=getEntityNode;
getEntityNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$jc},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','entityNode']};};
$prop$getEntityNode={get:getEntityNode,$crtmm$:getEntityNode.$crtmm$};
get$jc=getEntityNode;$prop$get$jc=getEntityNode;
ex$.$prop$getEntityNode=$prop$getEntityNode;
function $jd(){
    var entityReferenceNode$=new $jd.$$;
    NodeType("entityReferenceNode",entityReferenceNode$);
    return entityReferenceNode$;
};$jd.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','entityReferenceNode']};};
function $init$$jd(){
    if($jd.$$===undefined){
        m$1.initTypeProto($jd,'com.openswimsoftware.ceylon.js.dom::entityReferenceNode',$init$NodeType());
    }
    return $jd;
}
ex$.$init$$jd=$init$$jd;
$init$$jd();
var $jp;
function getEntityReferenceNode(){
    if($jp===undefined){$jp=$init$$jd()();$jp.$crtmm$=getEntityReferenceNode.$crtmm$;}
    return $jp;
}
ex$.getEntityReferenceNode=getEntityReferenceNode;
getEntityReferenceNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$jd},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','entityReferenceNode']};};
$prop$getEntityReferenceNode={get:getEntityReferenceNode,$crtmm$:getEntityReferenceNode.$crtmm$};
get$jd=getEntityReferenceNode;$prop$get$jd=getEntityReferenceNode;
ex$.$prop$getEntityReferenceNode=$prop$getEntityReferenceNode;
function $je(){
    var notationNode$=new $je.$$;
    NodeType("notationNode",notationNode$);
    return notationNode$;
};$je.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','notationNode']};};
function $init$$je(){
    if($je.$$===undefined){
        m$1.initTypeProto($je,'com.openswimsoftware.ceylon.js.dom::notationNode',$init$NodeType());
    }
    return $je;
}
ex$.$init$$je=$init$$je;
$init$$je();
var $jq;
function getNotationNode(){
    if($jq===undefined){$jq=$init$$je()();$jq.$crtmm$=getNotationNode.$crtmm$;}
    return $jq;
}
ex$.getNotationNode=getNotationNode;
getNotationNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$je},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','notationNode']};};
$prop$getNotationNode={get:getNotationNode,$crtmm$:getNotationNode.$crtmm$};
get$je=getNotationNode;$prop$get$je=getNotationNode;
ex$.$prop$getNotationNode=$prop$getNotationNode;
function $jf(){
    var processingInstructionNode$=new $jf.$$;
    NodeType("processingInstructionNode",processingInstructionNode$);
    return processingInstructionNode$;
};$jf.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','processingInstructionNode']};};
function $init$$jf(){
    if($jf.$$===undefined){
        m$1.initTypeProto($jf,'com.openswimsoftware.ceylon.js.dom::processingInstructionNode',$init$NodeType());
    }
    return $jf;
}
ex$.$init$$jf=$init$$jf;
$init$$jf();
var $jr;
function getProcessingInstructionNode(){
    if($jr===undefined){$jr=$init$$jf()();$jr.$crtmm$=getProcessingInstructionNode.$crtmm$;}
    return $jr;
}
ex$.getProcessingInstructionNode=getProcessingInstructionNode;
getProcessingInstructionNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$jf},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','processingInstructionNode']};};
$prop$getProcessingInstructionNode={get:getProcessingInstructionNode,$crtmm$:getProcessingInstructionNode.$crtmm$};
get$jf=getProcessingInstructionNode;$prop$get$jf=getProcessingInstructionNode;
ex$.$prop$getProcessingInstructionNode=$prop$getProcessingInstructionNode;
function $jg(){
    var textNode$=new $jg.$$;
    NodeType("textNode",textNode$);
    return textNode$;
};$jg.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','textNode']};};
function $init$$jg(){
    if($jg.$$===undefined){
        m$1.initTypeProto($jg,'com.openswimsoftware.ceylon.js.dom::textNode',$init$NodeType());
    }
    return $jg;
}
ex$.$init$$jg=$init$$jg;
$init$$jg();
var $js;
function getTextNode(){
    if($js===undefined){$js=$init$$jg()();$js.$crtmm$=getTextNode.$crtmm$;}
    return $js;
}
ex$.getTextNode=getTextNode;
getTextNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$jg},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','textNode']};};
$prop$getTextNode={get:getTextNode,$crtmm$:getTextNode.$crtmm$};
get$jg=getTextNode;$prop$get$jg=getTextNode;
ex$.$prop$getTextNode=$prop$getTextNode;
function DocumentFragmentAbs(documentFragmentAbs$){
    $init$DocumentFragmentAbs();
    if(documentFragmentAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    NodeAbs(documentFragmentAbs$);
    return documentFragmentAbs$;
}
DocumentFragmentAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentFragmentAbs']};};
ex$.DocumentFragmentAbs=DocumentFragmentAbs;
function $init$DocumentFragmentAbs(){
    if(DocumentFragmentAbs.$$===undefined){
        m$1.initTypeProto(DocumentFragmentAbs,'com.openswimsoftware.ceylon.js.dom::DocumentFragmentAbs',$init$NodeAbs());
    }
    return DocumentFragmentAbs;
}
ex$.$init$DocumentFragmentAbs=$init$DocumentFragmentAbs;
$init$DocumentFragmentAbs();
function DocumentFragment($jt,documentFragment$){
    $init$DocumentFragment();
    if(documentFragment$===undefined)documentFragment$=new DocumentFragment.$$;
    documentFragment$.$jt_=$jt;
    DocumentFragmentAbs(documentFragment$);
    documentFragment$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:DocumentFragment,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentFragment','$at','native']};}};
    /*Begin dynamic block*/
    documentFragment$.$_native=documentFragment$.$jt;/*End dynamic block*/
    return documentFragment$;
}
DocumentFragment.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentFragmentAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a DOM DocumentFragment"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','DocumentFragment']};};
ex$.DocumentFragment=DocumentFragment;
function $init$DocumentFragment(){
    if(DocumentFragment.$$===undefined){
        m$1.initTypeProto(DocumentFragment,'com.openswimsoftware.ceylon.js.dom::DocumentFragment',$init$DocumentFragmentAbs());
        (function(documentFragment$){
            m$1.atr$(documentFragment$,'$jt',function(){return this.$jt_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:DocumentFragment,d:['com.openswimsoftware.ceylon.js.dom','DocumentFragment','$at','n$wld4o5']};});
        })(DocumentFragment.$$.prototype);
    }
    return DocumentFragment;
}
ex$.$init$DocumentFragment=$init$DocumentFragment;
$init$DocumentFragment();
function EntityReferenceAbs(entityReferenceAbs$){
    $init$EntityReferenceAbs();
    if(entityReferenceAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    NodeAbs(entityReferenceAbs$);
    return entityReferenceAbs$;
}
EntityReferenceAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','EntityReferenceAbs']};};
ex$.EntityReferenceAbs=EntityReferenceAbs;
function $init$EntityReferenceAbs(){
    if(EntityReferenceAbs.$$===undefined){
        m$1.initTypeProto(EntityReferenceAbs,'com.openswimsoftware.ceylon.js.dom::EntityReferenceAbs',$init$NodeAbs());
    }
    return EntityReferenceAbs;
}
ex$.$init$EntityReferenceAbs=$init$EntityReferenceAbs;
$init$EntityReferenceAbs();
function EntityReference($ju,entityReference$){
    $init$EntityReference();
    if(entityReference$===undefined)entityReference$=new EntityReference.$$;
    entityReference$.$ju_=$ju;
    EntityReferenceAbs(entityReference$);
    entityReference$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:EntityReference,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','EntityReference','$at','native']};}};
    /*Begin dynamic block*/
    entityReference$.$_native=entityReference$.$ju;/*End dynamic block*/
    return entityReference$;
}
EntityReference.$crtmm$=function(){return{mod:$CCMM$,'super':{t:EntityReferenceAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a DOM EntityReference"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','EntityReference']};};
ex$.EntityReference=EntityReference;
function $init$EntityReference(){
    if(EntityReference.$$===undefined){
        m$1.initTypeProto(EntityReference,'com.openswimsoftware.ceylon.js.dom::EntityReference',$init$EntityReferenceAbs());
        (function(entityReference$){
            m$1.atr$(entityReference$,'$ju',function(){return this.$ju_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:EntityReference,d:['com.openswimsoftware.ceylon.js.dom','EntityReference','$at','n$sed50g']};});
        })(EntityReference.$$.prototype);
    }
    return EntityReference;
}
ex$.$init$EntityReference=$init$EntityReference;
$init$EntityReference();
function NodeAbs(nodeAbs$){
    $init$NodeAbs();
    if(nodeAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(nodeAbs$);
    return nodeAbs$;
}
NodeAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs']};};
ex$.NodeAbs=NodeAbs;
function $init$NodeAbs(){
    if(NodeAbs.$$===undefined){
        m$1.initTypeProto(NodeAbs,'com.openswimsoftware.ceylon.js.dom::NodeAbs',m$9f.JSObjectAbs);
        (function(nodeAbs$){
            nodeAbs$.appendChild=function appendChild($jv){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                return Node($jv.$_native.appendChild($jv));
                /*End dynamic block*/
            };nodeAbs$.appendChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[m$1.doc("append the node to the nodes children"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','appendChild']};};
            nodeAbs$.baseURI=function baseURI(){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(nodeAbs$.$_native.baseURL);
                /*End dynamic block*/
            };nodeAbs$.baseURI.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:NodeAbs,$an:function(){return[m$1.doc("returns the nodes baseURI"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','baseURI']};};
            nodeAbs$.childNodes=function childNodes(){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                return NodeList(nodeAbs$.$_native.childNodes);
                /*End dynamic block*/
            };nodeAbs$.childNodes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:NodeList},$ps:[],$cont:NodeAbs,$an:function(){return[m$1.doc("returns a list of child nodes"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','childNodes']};};
            nodeAbs$.cloneNode$defs$bool=function($jw){return true;};
            nodeAbs$.cloneNode=function cloneNode($jw){
                var nodeAbs$=this;
                if($jw===undefined){$jw=nodeAbs$.cloneNode$defs$bool($jw);}
                /*Begin dynamic block*/
                return Node((typeof node==='undefined'||node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: node"),'67:15-67:18','node.ceylon'):node).native.cloneNode($jw));
                /*End dynamic block*/
            };nodeAbs$.cloneNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Node},$ps:[{$nm:'bool',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[m$1.doc("clones the current node pass true for deep copy"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','cloneNode']};};
            nodeAbs$.compareDocumentPosition=function compareDocumentPosition($jx){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                var $jy=$jx.$_native.compareDocumentPosition($jx);
                if(($jz=$jy,$k0=(typeof Node==='undefined'||Node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Node"),'75:23-75:26','node.ceylon'):Node).DOCUMENT_POSITION_CONTAINED_BY,($jz.equals&&$jz.equals($k0))||$jz===$k0)){
                    return getDocumentPositionContainedBy();
                }else {
                    if(($k1=$jy,$k2=(typeof Node==='undefined'||Node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Node"),'77:30-77:33','node.ceylon'):Node).DOCUMENT_POSITION_CONTAINS,($k1.equals&&$k1.equals($k2))||$k1===$k2)){
                        return getDocumentPositionContains();
                    }else {
                        if(($k3=$jy,$k4=(typeof Node==='undefined'||Node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Node"),'79:27-79:30','node.ceylon'):Node).DOCUMENT_POSITION_DISCONNECTED,($k3.equals&&$k3.equals($k4))||$k3===$k4)){
                            return getDocumentPositionDisconnected();
                        }else {
                            if(($k5=$jy,$k6=(typeof Node==='undefined'||Node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Node"),'81:27-81:30','node.ceylon'):Node).DOCUMENT_POSITION_FOLLOWING,($k5.equals&&$k5.equals($k6))||$k5===$k6)){
                                return getDocumentPositionFollowing();
                            }else {
                                if(($k7=$jy,$k8=(typeof Node==='undefined'||Node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Node"),'83:27-83:30','node.ceylon'):Node).DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC,($k7.equals&&$k7.equals($k8))||$k7===$k8)){
                                    return getDocumentPositionImplementationSpecific();
                                }else {
                                    return getDocumentPositionPreceding();
                                }
                            }
                        }
                    }
                }/*End dynamic block*/
            };nodeAbs$.compareDocumentPosition.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DocumentPosition},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[m$1.doc("return the node document position compared to the passed node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','compareDocumentPosition']};};
            nodeAbs$.firstChild=function firstChild(){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                return Node(nodeAbs$.$_native.firstChild);
                /*End dynamic block*/
            };nodeAbs$.firstChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Node},$ps:[],$cont:NodeAbs,$an:function(){return[m$1.doc("returns the nodes first child node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','firstChild']};};
            nodeAbs$.hasChildNodes=function hasChildNodes(){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                if(nodeAbs$.$_native.hasAttributes()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };nodeAbs$.hasChildNodes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:NodeAbs,$an:function(){return[m$1.doc("if the node has children"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','hasChildNodes']};};
            nodeAbs$.insertBefore=function insertBefore($k9,$ka){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                var $kb;
                if(($kb=$ka)!==null&&$kb!==undefined){
                    return Node(nodeAbs$.$_native.insertBefore($k9.$_native,$kb.$_native));
                }else {
                    return Node(nodeAbs$.$_native.insertBefore($k9.$_native));
                }/*End dynamic block*/
            };nodeAbs$.insertBefore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Node},$ps:[{$nm:'newElement',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'referenceElement',$mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Node}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[m$1.doc("insert the passed node to children before the reference node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','insertBefore']};};
            nodeAbs$.isDefaultNamespace=function isDefaultNamespace($kc){
                var nodeAbs$=this;
                var $kd;
                var $ke=$kc;
                if(m$1.is$($kc,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    $kd=nodeAbs$.$_native.isDefaultNamespace($ke.valueOf());/*End dynamic block*/
                }else if(m$1.is$($kc,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    $kd=nodeAbs$.$_native.isDefaultNamespace($ke.$_native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if($kd){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };nodeAbs$.isDefaultNamespace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[m$1.doc("is the passed namespace the default one"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','isDefaultNamespace']};};
            nodeAbs$.isEqualNode=function isEqualNode($kf){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                if(nodeAbs$.$_native.isEqualNode($kf)){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };nodeAbs$.isEqualNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[m$1.doc("is the passed node equal to this one"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','isEqualNode']};};
            nodeAbs$.lastChild=function lastChild(){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                var $kg=nodeAbs$.$_native.lastChild;
                if(($kh=$kg,$ki=null,($kh.equals&&!$kh.equals($ki))||$kh!==$ki)){
                    return Node($kg);
                }else {
                    return null;
                }/*End dynamic block*/
            };nodeAbs$.lastChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[m$1.doc("returns the last child node of this node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','lastChild']};};
            nodeAbs$.lookupPrefix=function lookupPrefix($kj){
                var nodeAbs$=this;
                var $kk;
                /*Begin dynamic block*/
                var $kl=$kj;
                if(m$1.is$($kj,{t:m$1.String})) {
                    $kk=nodeAbs$.$_native.lookupPrefix($kl.valueOf());
                }else if(m$1.is$($kj,{t:m$9f.JSString})) {
                    $kk=nodeAbs$.$_native.lookupPrefix($kl.$_native);
                }else if(m$1.is$($kj,{t:m$1.Null})) {
                    $kk=nodeAbs$.$_native.lookupPrefix();
                }if(($km=$kk,$kn=null,($km.equals&&!$km.equals($kn))||$km!==$kn)){
                    return m$9f.JSString($kk);
                }else {
                    return null;
                }/*End dynamic block*/
            };nodeAbs$.lookupPrefix.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[m$1.doc("returns the prefix for the given namespaceURI"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','lookupPrefix']};};
            nodeAbs$.nextSibling=function nextSibling(){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                var $ko=nodeAbs$.$_native.nextSibling();
                if(($kp=$ko,$kq=null,($kp.equals&&!$kp.equals($kq))||$kp!==$kq)){
                    return Node($ko);
                }else {
                    return null;
                }/*End dynamic block*/
            };nodeAbs$.nextSibling.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[m$1.doc("returns the node immediately after this node in the parents child nodes or null if none"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','nextSibling']};};
            nodeAbs$.nodeName=function nodeName(){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(nodeAbs$.$_native.nodeName);
                /*End dynamic block*/
            };nodeAbs$.nodeName.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:NodeAbs,$an:function(){return[m$1.doc("returns the nodes name"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','nodeName']};};
            nodeAbs$.nodeType=function nodeType(){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                if(($kr=nodeAbs$.$_native.nodeType,$ks=(typeof Node==='undefined'||Node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Node"),'212:26-212:29','node.ceylon'):Node).ELEMENT_NODE,($kr.equals&&$kr.equals($ks))||$kr===$ks)){
                    return getElementNode();
                }else {
                    if(($kt=nodeAbs$.$_native.nodeType,$ku=(typeof Node==='undefined'||Node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Node"),'214:33-214:36','node.ceylon'):Node).ATTRIBUTE_NODE,($kt.equals&&$kt.equals($ku))||$kt===$ku)){
                        return getAttributeNode();
                    }else {
                        if(($kv=nodeAbs$.$_native.nodeType,$kw=(typeof Node==='undefined'||Node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Node"),'216:33-216:36','node.ceylon'):Node).TEXT_NODE,($kv.equals&&$kv.equals($kw))||$kv===$kw)){
                            return getTextNode();
                        }else {
                            if(($kx=nodeAbs$.$_native.nodeType,$ky=(typeof Node==='undefined'||Node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Node"),'218:33-218:36','node.ceylon'):Node).CDATA_SECTION_NODE,($kx.equals&&$kx.equals($ky))||$kx===$ky)){
                                return getCdataSectionNode();
                            }else {
                                if(($kz=nodeAbs$.$_native.nodeType,$l0=(typeof Node==='undefined'||Node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Node"),'220:33-220:36','node.ceylon'):Node).ENTITY_REFERENCE_NODE,($kz.equals&&$kz.equals($l0))||$kz===$l0)){
                                    return getEntityReferenceNode();
                                }else {
                                    if(($l1=nodeAbs$.$_native.nodeType,$l2=(typeof Node==='undefined'||Node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Node"),'222:33-222:36','node.ceylon'):Node).ENTITY_NODE,($l1.equals&&$l1.equals($l2))||$l1===$l2)){
                                        return getEntityNode();
                                    }else {
                                        if(($l3=nodeAbs$.$_native.nodeType,$l4=(typeof Node==='undefined'||Node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Node"),'224:33-224:36','node.ceylon'):Node).PROCESSING_INSTRUCTION_NODE,($l3.equals&&$l3.equals($l4))||$l3===$l4)){
                                            return getProcessingInstructionNode();
                                        }else {
                                            if(($l5=nodeAbs$.$_native.nodeType,$l6=(typeof Node==='undefined'||Node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Node"),'226:33-226:36','node.ceylon'):Node).COMMENT_NODE,($l5.equals&&$l5.equals($l6))||$l5===$l6)){
                                                return getCommentNode();
                                            }else {
                                                if(($l7=nodeAbs$.$_native.nodeType,$l8=(typeof Node==='undefined'||Node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Node"),'228:33-228:36','node.ceylon'):Node).DOCUMENT_NODE,($l7.equals&&$l7.equals($l8))||$l7===$l8)){
                                                    return getDocumentNode();
                                                }else {
                                                    if(($l9=nodeAbs$.$_native.nodeType,$la=(typeof Node==='undefined'||Node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Node"),'230:33-230:36','node.ceylon'):Node).DOCUMENT_TYPE_NODE,($l9.equals&&$l9.equals($la))||$l9===$la)){
                                                        return getDocumentTypeNode();
                                                    }else {
                                                        if(($lb=nodeAbs$.$_native.nodeType,$lc=(typeof Node==='undefined'||Node===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Node"),'232:33-232:36','node.ceylon'):Node).DOCUMENT_FRAGMENT_NODE,($lb.equals&&$lb.equals($lc))||$lb===$lc)){
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
            };nodeAbs$.nodeType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:NodeType},$ps:[],$cont:NodeAbs,$an:function(){return[m$1.doc("returns the nodes type"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','nodeType']};};
            nodeAbs$.getNodeValue=function getNodeValue(){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                var $ld=nodeAbs$.$_native.nodeValue;
                if(($le=$ld,$lf=null,($le.equals&&!$le.equals($lf))||$le!==$lf)){
                    return m$9f.JSString($ld);
                }else {
                    return null;
                }/*End dynamic block*/
            };nodeAbs$.getNodeValue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[m$1.doc("returns the value of the current node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','getNodeValue']};};
            nodeAbs$.setNodeValue=function setNodeValue($lg){
                var nodeAbs$=this;
                var $lh=$lg;
                if(m$1.is$($lg,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    nodeAbs$.$_native.nodeValue=$lh.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($lg,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    nodeAbs$.$_native.nodeValue=$lh.$_native;
                    /*End dynamic block*/
                }
            };nodeAbs$.setNodeValue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[m$1.doc("set the value of the current node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','setNodeValue']};};
            nodeAbs$.normalize=function normalize(){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                nodeAbs$.$_native.normalize();
                /*End dynamic block*/
            };nodeAbs$.normalize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:NodeAbs,$an:function(){return[m$1.doc("clean up all the text nodes under this on"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','normalize']};};
            m$1.atr$(nodeAbs$,'ownerDocument',function(){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                return Document(nodeAbs$.$_native.ownerDocument);
                /*End dynamic block*/
            },undefined,function(){return{mod:$CCMM$,$t:{t:Document},$cont:NodeAbs,$an:function(){return[m$1.doc("returns nodes owning document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$at','ownerDocument']};});nodeAbs$.parentNode=function parentNode(){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                var $li=nodeAbs$.parentNode();
                if(($lj=$li,$lk=null,($lj.equals&&!$lj.equals($lk))||$lj!==$lk)){
                    return Node($li);
                }else {
                    return null;
                }/*End dynamic block*/
            };nodeAbs$.parentNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[m$1.doc("returns the parent node if any"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','parentNode']};};
            nodeAbs$.prefix=function prefix(){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                var $ll=nodeAbs$.$_native.prefix;
                if(($lm=$ll,$ln=null,($lm.equals&&!$lm.equals($ln))||$lm!==$ln)){
                    return m$9f.JSString($ll);
                }else {
                    return null;
                }/*End dynamic block*/
            };nodeAbs$.prefix.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[m$1.doc("string of the nodes namespace prefix"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','prefix']};};
            nodeAbs$.previousSibling=function previousSibling(){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                var $lo=nodeAbs$.$_native.previousSibling();
                if(($lp=$lo,$lq=null,($lp.equals&&!$lp.equals($lq))||$lp!==$lq)){
                    return Node($lo);
                }else {
                    return null;
                }/*End dynamic block*/
            };nodeAbs$.previousSibling.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[m$1.doc("returns the node immediately proceding this node in the parents child nodes or null if none"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','previousSibling']};};
            nodeAbs$.removeChild=function removeChild($lr){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                return Node(nodeAbs$.$_native.removeChild($lr.$_native));
                /*End dynamic block*/
            };nodeAbs$.removeChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[m$1.doc("removes the child node and returns the removed node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','removeChild']};};
            nodeAbs$.replaceChild=function replaceChild($ls,$lt){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                return Node(nodeAbs$.$_native.replaceChild($ls.$_native,$lt.$_native));
                /*End dynamic block*/
            };nodeAbs$.replaceChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Node},$ps:[{$nm:'newChild',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'oldChild',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[m$1.doc("replaces the old node with the new one and returns the old node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','replaceChild']};};
            nodeAbs$.getTextContent=function getTextContent(){
                var nodeAbs$=this;
                /*Begin dynamic block*/
                var $lu=nodeAbs$.$_native.textContent();
                if(($lv=$lu,$lw=null,($lv.equals&&!$lv.equals($lw))||$lv!==$lw)){
                    return m$9f.JSString($lu);
                }else {
                    return null;
                }/*End dynamic block*/
            };nodeAbs$.getTextContent.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$9f.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[m$1.doc("returns the text content of the node and its descendents"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','getTextContent']};};
            nodeAbs$.setTextContent=function setTextContent($lx){
                var nodeAbs$=this;
                var $ly=$lx;
                if(m$1.is$($lx,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    nodeAbs$.$_native.textContent=$ly.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($lx,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    nodeAbs$.$_native.textContent=$ly.$_native;
                    /*End dynamic block*/
                }
            };nodeAbs$.setTextContent.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'content',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[m$1.doc("set the text content of the node and its descendents"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeAbs','$m','setTextContent']};};
        })(NodeAbs.$$.prototype);
    }
    return NodeAbs;
}
ex$.$init$NodeAbs=$init$NodeAbs;
$init$NodeAbs();
function Node($lz,node$){
    $init$Node();
    if(node$===undefined)node$=new Node.$$;
    node$.$lz_=$lz;
    NodeAbs(node$);
    node$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Node,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','Node','$at','native']};}};
    /*Begin dynamic block*/
    node$.$_native=node$.$lz;/*End dynamic block*/
    return node$;
}
Node.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a DOM Node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','Node']};};
ex$.Node=Node;
function $init$Node(){
    if(Node.$$===undefined){
        m$1.initTypeProto(Node,'com.openswimsoftware.ceylon.js.dom::Node',$init$NodeAbs());
        (function(node$){
            m$1.atr$(node$,'$lz',function(){return this.$lz_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Node,d:['com.openswimsoftware.ceylon.js.dom','Node','$at','n$75hoja']};});
        })(Node.$$.prototype);
    }
    return Node;
}
ex$.$init$Node=$init$Node;
$init$Node();
function NodeFilterResult($m0,nodeFilterResult$){
    $init$NodeFilterResult();
    if(nodeFilterResult$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    nodeFilterResult$.$m0_=$m0;
    return nodeFilterResult$;
}
NodeFilterResult.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],of:[$prop$get$m1,$prop$get$m2,$prop$get$m3],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','NodeFilterResult']};};
ex$.NodeFilterResult=NodeFilterResult;
function $init$NodeFilterResult(){
    if(NodeFilterResult.$$===undefined){
        m$1.initTypeProto(NodeFilterResult,'com.openswimsoftware.ceylon.js.dom::NodeFilterResult',m$1.Basic);
        (function(nodeFilterResult$){
            m$1.atr$(nodeFilterResult$,'$m0',function(){return this.$m0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:NodeFilterResult,d:['com.openswimsoftware.ceylon.js.dom','NodeFilterResult','$at','name$utqdb0']};});
        })(NodeFilterResult.$$.prototype);
    }
    return NodeFilterResult;
}
ex$.$init$NodeFilterResult=$init$NodeFilterResult;
$init$NodeFilterResult();
function $m1(){
    var filterAccept$=new $m1.$$;
    NodeFilterResult("filterAccept",filterAccept$);
    return filterAccept$;
};$m1.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeFilterResult},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','filterAccept']};};
function $init$$m1(){
    if($m1.$$===undefined){
        m$1.initTypeProto($m1,'com.openswimsoftware.ceylon.js.dom::filterAccept',$init$NodeFilterResult());
    }
    return $m1;
}
ex$.$init$$m1=$init$$m1;
$init$$m1();
var $m4;
function getFilterAccept(){
    if($m4===undefined){$m4=$init$$m1()();$m4.$crtmm$=getFilterAccept.$crtmm$;}
    return $m4;
}
ex$.getFilterAccept=getFilterAccept;
getFilterAccept.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$m1},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','filterAccept']};};
$prop$getFilterAccept={get:getFilterAccept,$crtmm$:getFilterAccept.$crtmm$};
get$m1=getFilterAccept;$prop$get$m1=getFilterAccept;
ex$.$prop$getFilterAccept=$prop$getFilterAccept;
function $m2(){
    var filterReject$=new $m2.$$;
    NodeFilterResult("filterReject",filterReject$);
    return filterReject$;
};$m2.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeFilterResult},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','filterReject']};};
function $init$$m2(){
    if($m2.$$===undefined){
        m$1.initTypeProto($m2,'com.openswimsoftware.ceylon.js.dom::filterReject',$init$NodeFilterResult());
    }
    return $m2;
}
ex$.$init$$m2=$init$$m2;
$init$$m2();
var $m5;
function getFilterReject(){
    if($m5===undefined){$m5=$init$$m2()();$m5.$crtmm$=getFilterReject.$crtmm$;}
    return $m5;
}
ex$.getFilterReject=getFilterReject;
getFilterReject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$m2},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','filterReject']};};
$prop$getFilterReject={get:getFilterReject,$crtmm$:getFilterReject.$crtmm$};
get$m2=getFilterReject;$prop$get$m2=getFilterReject;
ex$.$prop$getFilterReject=$prop$getFilterReject;
function $m3(){
    var filterSkip$=new $m3.$$;
    NodeFilterResult("filterSkip",filterSkip$);
    return filterSkip$;
};$m3.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeFilterResult},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','filterSkip']};};
function $init$$m3(){
    if($m3.$$===undefined){
        m$1.initTypeProto($m3,'com.openswimsoftware.ceylon.js.dom::filterSkip',$init$NodeFilterResult());
    }
    return $m3;
}
ex$.$init$$m3=$init$$m3;
$init$$m3();
var $m6;
function getFilterSkip(){
    if($m6===undefined){$m6=$init$$m3()();$m6.$crtmm$=getFilterSkip.$crtmm$;}
    return $m6;
}
ex$.getFilterSkip=getFilterSkip;
getFilterSkip.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$m3},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','filterSkip']};};
$prop$getFilterSkip={get:getFilterSkip,$crtmm$:getFilterSkip.$crtmm$};
get$m3=getFilterSkip;$prop$get$m3=getFilterSkip;
ex$.$prop$getFilterSkip=$prop$getFilterSkip;
function NodeFilter($m7,nodeFilter$){
    $init$NodeFilter();
    if(nodeFilter$===undefined)nodeFilter$=new NodeFilter.$$;
    nodeFilter$.$m7_=$m7;
    nodeFilter$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:NodeFilter,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeFilter','$at','native']};}};
    /*Begin dynamic block*/
    nodeFilter$.$_native=(typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'11:11-11:16','nodefilter.ceylon'):Object)();nodeFilter$.$_native.acceptNode=m$1.$JsCallable(m$1.JsCallable(/*ESTEMERO*/nodeFilter$,nodeFilter$.$m7)/*TODO: callable targs 6*/);
    /*End dynamic block*/
    return nodeFilter$;
}
NodeFilter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'acceptNode',$mt:'prm',$pt:'f',$t:{t:NodeFilterResult},$an:function(){return[];}}],$an:function(){return[m$1.doc("Node Filter"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeFilter']};};
ex$.NodeFilter=NodeFilter;
function $init$NodeFilter(){
    if(NodeFilter.$$===undefined){
        m$1.initTypeProto(NodeFilter,'com.openswimsoftware.ceylon.js.dom::NodeFilter',m$1.Basic);
        (function(nodeFilter$){
            m$1.atr$(nodeFilter$,'$m7',function(){return this.$m7_;},undefined,function(){return{mod:$CCMM$,$t:{t:NodeFilterResult},$ps:[{$nm:'n',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeFilter,d:['com.openswimsoftware.ceylon.js.dom','NodeFilter','$m','acceptNode$x5puf6']};});
        })(NodeFilter.$$.prototype);
    }
    return NodeFilter;
}
ex$.$init$NodeFilter=$init$NodeFilter;
$init$NodeFilter();
function NodeIteratorAbs(nodeIteratorAbs$){
    $init$NodeIteratorAbs();
    if(nodeIteratorAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(nodeIteratorAbs$);
    return nodeIteratorAbs$;
}
NodeIteratorAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','NodeIteratorAbs']};};
ex$.NodeIteratorAbs=NodeIteratorAbs;
function $init$NodeIteratorAbs(){
    if(NodeIteratorAbs.$$===undefined){
        m$1.initTypeProto(NodeIteratorAbs,'com.openswimsoftware.ceylon.js.dom::NodeIteratorAbs',m$9f.JSObjectAbs);
        (function(nodeIteratorAbs$){
            nodeIteratorAbs$.root=function root(){
                var nodeIteratorAbs$=this;
                /*Begin dynamic block*/
                return Node(nodeIteratorAbs$.$_native.root);
                /*End dynamic block*/
            };nodeIteratorAbs$.root.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Node},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[m$1.doc("returns the iterators root node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeIteratorAbs','$m','root']};};
            nodeIteratorAbs$.whatToShow=function whatToShow(){
                var nodeIteratorAbs$=this;
                /*Begin dynamic block*/
                return ($m8=nodeIteratorAbs$.$_native.whatToShow,m$1.is$($m8,{t:m$1.Anything})?$m8:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'16:19-16:35','nodeiterator.ceylon'));
                /*End dynamic block*/
            };nodeIteratorAbs$.whatToShow.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[m$1.doc("return long representing what types of nodes the iterator shows"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeIteratorAbs','$m','whatToShow']};};
            nodeIteratorAbs$.filter=function filter(){
                var nodeIteratorAbs$=this;
                /*Begin dynamic block*/
                var $m9=nodeIteratorAbs$.$_native.filter;
                if(($ma=$m9,$mb=null,($ma.equals&&!$ma.equals($mb))||$ma!==$mb)){
                    return NodeFilter(($mc=$m9,m$1.is$($mc,{t:NodeFilterResult})?$mc:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'25:34-25:39','nodeiterator.ceylon')));
                }else {
                    return null;
                }/*End dynamic block*/
            };nodeIteratorAbs$.filter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:NodeFilter}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[m$1.doc("return the iterator filter if any"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeIteratorAbs','$m','filter']};};
            nodeIteratorAbs$.nextNode=function nextNode(){
                var nodeIteratorAbs$=this;
                /*Begin dynamic block*/
                var $md=nodeIteratorAbs$.$_native.nextNode();
                if(($me=$md,$mf=null,($me.equals&&!$me.equals($mf))||$me!==$mf)){
                    return Node($md);
                }else {
                    return null;
                }/*End dynamic block*/
            };nodeIteratorAbs$.nextNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Node}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[m$1.doc("return the next node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeIteratorAbs','$m','nextNode']};};
            nodeIteratorAbs$.previousNode=function previousNode(){
                var nodeIteratorAbs$=this;
                /*Begin dynamic block*/
                var $mg=nodeIteratorAbs$.$_native.previousNode();
                if(($mh=$mg,$mi=null,($mh.equals&&!$mh.equals($mi))||$mh!==$mi)){
                    return Node($mg);
                }else {
                    return null;
                }/*End dynamic block*/
            };nodeIteratorAbs$.previousNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Node}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[m$1.doc("return the previous node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeIteratorAbs','$m','previousNode']};};
        })(NodeIteratorAbs.$$.prototype);
    }
    return NodeIteratorAbs;
}
ex$.$init$NodeIteratorAbs=$init$NodeIteratorAbs;
$init$NodeIteratorAbs();
function NodeIterator($mj,nodeIterator$){
    $init$NodeIterator();
    if(nodeIterator$===undefined)nodeIterator$=new NodeIterator.$$;
    nodeIterator$.$mj_=$mj;
    NodeIteratorAbs(nodeIterator$);
    nodeIterator$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:NodeIterator,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','NodeIterator','$at','native']};}};
    /*Begin dynamic block*/
    nodeIterator$.$_native=nodeIterator$.$mj;/*End dynamic block*/
    return nodeIterator$;
}
NodeIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeIteratorAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a DOM NodeIterator"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeIterator']};};
ex$.NodeIterator=NodeIterator;
function $init$NodeIterator(){
    if(NodeIterator.$$===undefined){
        m$1.initTypeProto(NodeIterator,'com.openswimsoftware.ceylon.js.dom::NodeIterator',$init$NodeIteratorAbs());
        (function(nodeIterator$){
            m$1.atr$(nodeIterator$,'$mj',function(){return this.$mj_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:NodeIterator,d:['com.openswimsoftware.ceylon.js.dom','NodeIterator','$at','n$jxak94']};});
        })(NodeIterator.$$.prototype);
    }
    return NodeIterator;
}
ex$.$init$NodeIterator=$init$NodeIterator;
$init$NodeIterator();
function NodeListAbs(nodeListAbs$){
    $init$NodeListAbs();
    if(nodeListAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(nodeListAbs$);
    return nodeListAbs$;
}
NodeListAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','NodeListAbs']};};
ex$.NodeListAbs=NodeListAbs;
function $init$NodeListAbs(){
    if(NodeListAbs.$$===undefined){
        m$1.initTypeProto(NodeListAbs,'com.openswimsoftware.ceylon.js.dom::NodeListAbs',m$9f.JSObjectAbs);
        (function(nodeListAbs$){
            nodeListAbs$.item=function item($mk){
                var nodeListAbs$=this;
                var $ml;
                var $mm=$mk;
                if(m$1.is$($mk,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    $ml=nodeListAbs$.$_native.item($mm);/*End dynamic block*/
                }else if(m$1.is$($mk,{t:m$9f.JSNumber})) {
                    /*Begin dynamic block*/
                    $ml=nodeListAbs$.$_native.item($mm.$_native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if(($mn=$ml,$mo=null,($mn.equals&&!$mn.equals($mo))||$mn!==$mo)){
                    return Node($ml);
                }else {
                    return null;
                }/*End dynamic block*/
            };nodeListAbs$.item.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Node}]},$ps:[{$nm:'index',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}}],$cont:NodeListAbs,$an:function(){return[m$1.doc("returns he node at the given index"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeListAbs','$m','item']};};
            nodeListAbs$.length=function length(){
                var nodeListAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(nodeListAbs$.$_native.length);
                /*End dynamic block*/
            };nodeListAbs$.length.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:NodeListAbs,$an:function(){return[m$1.doc("returns the length of the node collection"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeListAbs','$m','length']};};
        })(NodeListAbs.$$.prototype);
    }
    return NodeListAbs;
}
ex$.$init$NodeListAbs=$init$NodeListAbs;
$init$NodeListAbs();
function NodeList($mp,nodeList$){
    $init$NodeList();
    if(nodeList$===undefined)nodeList$=new NodeList.$$;
    nodeList$.$mp_=$mp;
    NodeListAbs(nodeList$);
    nodeList$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:NodeList,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','NodeList','$at','native']};}};
    /*Begin dynamic block*/
    nodeList$.$_native=nodeList$.$mp;/*End dynamic block*/
    return nodeList$;
}
NodeList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeListAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("collection of DOM nodes"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','NodeList']};};
ex$.NodeList=NodeList;
function $init$NodeList(){
    if(NodeList.$$===undefined){
        m$1.initTypeProto(NodeList,'com.openswimsoftware.ceylon.js.dom::NodeList',$init$NodeListAbs());
        (function(nodeList$){
            m$1.atr$(nodeList$,'$mp',function(){return this.$mp_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:NodeList,d:['com.openswimsoftware.ceylon.js.dom','NodeList','$at','n$9hmxc8']};});
        })(NodeList.$$.prototype);
    }
    return NodeList;
}
ex$.$init$NodeList=$init$NodeList;
$init$NodeList();
ex$.$pkg$ans$com$openswimsoftware$ceylon$js$dom=function(){return[m$1.shared()];};
function ProcessingInstructionAbs(processingInstructionAbs$){
    $init$ProcessingInstructionAbs();
    if(processingInstructionAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    NodeAbs(processingInstructionAbs$);
    return processingInstructionAbs$;
}
ProcessingInstructionAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','ProcessingInstructionAbs']};};
ex$.ProcessingInstructionAbs=ProcessingInstructionAbs;
function $init$ProcessingInstructionAbs(){
    if(ProcessingInstructionAbs.$$===undefined){
        m$1.initTypeProto(ProcessingInstructionAbs,'com.openswimsoftware.ceylon.js.dom::ProcessingInstructionAbs',$init$NodeAbs());
        (function(processingInstructionAbs$){
            processingInstructionAbs$.getData=function getData(){
                var processingInstructionAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(processingInstructionAbs$.$_native.data);
                /*End dynamic block*/
            };processingInstructionAbs$.getData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:ProcessingInstructionAbs,$an:function(){return[m$1.doc("get the processing instruction data"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ProcessingInstructionAbs','$m','getData']};};
            processingInstructionAbs$.setData=function setData($mq){
                var processingInstructionAbs$=this;
                var $mr=$mq;
                if(m$1.is$($mq,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    processingInstructionAbs$.$_native.data=$mr.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($mq,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    processingInstructionAbs$.$_native.data=$mr.$_native;
                    /*End dynamic block*/
                }
            };processingInstructionAbs$.setData.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:ProcessingInstructionAbs,$an:function(){return[m$1.doc("set the processing instruction data"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ProcessingInstructionAbs','$m','setData']};};
            processingInstructionAbs$.target=function target(){
                var processingInstructionAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(processingInstructionAbs$.$_native.target);
                /*End dynamic block*/
            };processingInstructionAbs$.target.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:ProcessingInstructionAbs,$an:function(){return[m$1.doc("the processing instruction target"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ProcessingInstructionAbs','$m','target']};};
        })(ProcessingInstructionAbs.$$.prototype);
    }
    return ProcessingInstructionAbs;
}
ex$.$init$ProcessingInstructionAbs=$init$ProcessingInstructionAbs;
$init$ProcessingInstructionAbs();
function ProcessingInstruction($ms,processingInstruction$){
    $init$ProcessingInstruction();
    if(processingInstruction$===undefined)processingInstruction$=new ProcessingInstruction.$$;
    processingInstruction$.$ms_=$ms;
    ProcessingInstructionAbs(processingInstruction$);
    processingInstruction$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:ProcessingInstruction,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','ProcessingInstruction','$at','native']};}};
    /*Begin dynamic block*/
    processingInstruction$.$_native=processingInstruction$.$ms;/*End dynamic block*/
    return processingInstruction$;
}
ProcessingInstruction.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ProcessingInstructionAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("Processing Instruction"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','ProcessingInstruction']};};
ex$.ProcessingInstruction=ProcessingInstruction;
function $init$ProcessingInstruction(){
    if(ProcessingInstruction.$$===undefined){
        m$1.initTypeProto(ProcessingInstruction,'com.openswimsoftware.ceylon.js.dom::ProcessingInstruction',$init$ProcessingInstructionAbs());
        (function(processingInstruction$){
            m$1.atr$(processingInstruction$,'$ms',function(){return this.$ms_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:ProcessingInstruction,d:['com.openswimsoftware.ceylon.js.dom','ProcessingInstruction','$at','n$q9rf4b']};});
        })(ProcessingInstruction.$$.prototype);
    }
    return ProcessingInstruction;
}
ex$.$init$ProcessingInstruction=$init$ProcessingInstruction;
$init$ProcessingInstruction();
function RangeCompareHow($mt,rangeCompareHow$){
    $init$RangeCompareHow();
    if(rangeCompareHow$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    rangeCompareHow$.$mt_=$mt;
    return rangeCompareHow$;
}
RangeCompareHow.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],of:[$prop$get$mu,$prop$get$mv,$prop$get$mw,$prop$get$mx],$an:function(){return[m$1.doc("how to comare ranges"),m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','RangeCompareHow']};};
ex$.RangeCompareHow=RangeCompareHow;
function $init$RangeCompareHow(){
    if(RangeCompareHow.$$===undefined){
        m$1.initTypeProto(RangeCompareHow,'com.openswimsoftware.ceylon.js.dom::RangeCompareHow',m$1.Basic);
        (function(rangeCompareHow$){
            m$1.atr$(rangeCompareHow$,'$mt',function(){return this.$mt_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:RangeCompareHow,d:['com.openswimsoftware.ceylon.js.dom','RangeCompareHow','$at','name$96w8b']};});
        })(RangeCompareHow.$$.prototype);
    }
    return RangeCompareHow;
}
ex$.$init$RangeCompareHow=$init$RangeCompareHow;
$init$RangeCompareHow();
function $mu(){
    var endToEnd$=new $mu.$$;
    RangeCompareHow("endToEnd",endToEnd$);
    return endToEnd$;
};$mu.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RangeCompareHow},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','endToEnd']};};
function $init$$mu(){
    if($mu.$$===undefined){
        m$1.initTypeProto($mu,'com.openswimsoftware.ceylon.js.dom::endToEnd',$init$RangeCompareHow());
    }
    return $mu;
}
ex$.$init$$mu=$init$$mu;
$init$$mu();
var $my;
function getEndToEnd(){
    if($my===undefined){$my=$init$$mu()();$my.$crtmm$=getEndToEnd.$crtmm$;}
    return $my;
}
ex$.getEndToEnd=getEndToEnd;
getEndToEnd.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$mu},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','endToEnd']};};
$prop$getEndToEnd={get:getEndToEnd,$crtmm$:getEndToEnd.$crtmm$};
get$mu=getEndToEnd;$prop$get$mu=getEndToEnd;
ex$.$prop$getEndToEnd=$prop$getEndToEnd;
function $mv(){
    var endToStart$=new $mv.$$;
    RangeCompareHow("endToStart",endToStart$);
    return endToStart$;
};$mv.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RangeCompareHow},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','endToStart']};};
function $init$$mv(){
    if($mv.$$===undefined){
        m$1.initTypeProto($mv,'com.openswimsoftware.ceylon.js.dom::endToStart',$init$RangeCompareHow());
    }
    return $mv;
}
ex$.$init$$mv=$init$$mv;
$init$$mv();
var $mz;
function getEndToStart(){
    if($mz===undefined){$mz=$init$$mv()();$mz.$crtmm$=getEndToStart.$crtmm$;}
    return $mz;
}
ex$.getEndToStart=getEndToStart;
getEndToStart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$mv},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','endToStart']};};
$prop$getEndToStart={get:getEndToStart,$crtmm$:getEndToStart.$crtmm$};
get$mv=getEndToStart;$prop$get$mv=getEndToStart;
ex$.$prop$getEndToStart=$prop$getEndToStart;
function $mw(){
    var startToEnd$=new $mw.$$;
    RangeCompareHow("startToEnd",startToEnd$);
    return startToEnd$;
};$mw.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RangeCompareHow},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','startToEnd']};};
function $init$$mw(){
    if($mw.$$===undefined){
        m$1.initTypeProto($mw,'com.openswimsoftware.ceylon.js.dom::startToEnd',$init$RangeCompareHow());
    }
    return $mw;
}
ex$.$init$$mw=$init$$mw;
$init$$mw();
var $n0;
function getStartToEnd(){
    if($n0===undefined){$n0=$init$$mw()();$n0.$crtmm$=getStartToEnd.$crtmm$;}
    return $n0;
}
ex$.getStartToEnd=getStartToEnd;
getStartToEnd.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$mw},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','startToEnd']};};
$prop$getStartToEnd={get:getStartToEnd,$crtmm$:getStartToEnd.$crtmm$};
get$mw=getStartToEnd;$prop$get$mw=getStartToEnd;
ex$.$prop$getStartToEnd=$prop$getStartToEnd;
function $mx(){
    var startToStart$=new $mx.$$;
    RangeCompareHow("startToStart",startToStart$);
    return startToStart$;
};$mx.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RangeCompareHow},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','startToStart']};};
function $init$$mx(){
    if($mx.$$===undefined){
        m$1.initTypeProto($mx,'com.openswimsoftware.ceylon.js.dom::startToStart',$init$RangeCompareHow());
    }
    return $mx;
}
ex$.$init$$mx=$init$$mx;
$init$$mx();
var $n1;
function getStartToStart(){
    if($n1===undefined){$n1=$init$$mx()();$n1.$crtmm$=getStartToStart.$crtmm$;}
    return $n1;
}
ex$.getStartToStart=getStartToStart;
getStartToStart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$mx},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','startToStart']};};
$prop$getStartToStart={get:getStartToStart,$crtmm$:getStartToStart.$crtmm$};
get$mx=getStartToStart;$prop$get$mx=getStartToStart;
ex$.$prop$getStartToStart=$prop$getStartToStart;
function RangeAbs(rangeAbs$){
    $init$RangeAbs();
    if(rangeAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(rangeAbs$);
    return rangeAbs$;
}
RangeAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs']};};
ex$.RangeAbs=RangeAbs;
function $init$RangeAbs(){
    if(RangeAbs.$$===undefined){
        m$1.initTypeProto(RangeAbs,'com.openswimsoftware.ceylon.js.dom::RangeAbs',m$9f.JSObjectAbs);
        (function(rangeAbs$){
            rangeAbs$.startContainer=function startContainer(){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                return Node(rangeAbs$.$_native.startContainer);
                /*End dynamic block*/
            };rangeAbs$.startContainer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Node},$ps:[],$cont:RangeAbs,$an:function(){return[m$1.doc("returns the node where the container range begins"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','startContainer']};};
            rangeAbs$.endContainer=function endContainer(){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                return Node(rangeAbs$.$_native.endContainer);
                /*End dynamic block*/
            };rangeAbs$.endContainer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Node},$ps:[],$cont:RangeAbs,$an:function(){return[m$1.doc("returns the node where the container range ends"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','endContainer']};};
            rangeAbs$.startOffset=function startOffset(){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(rangeAbs$.$_native.startOffset);
                /*End dynamic block*/
            };rangeAbs$.startOffset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:RangeAbs,$an:function(){return[m$1.doc("returns a number where the container range begins"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','startOffset']};};
            rangeAbs$.endOffset=function endOffset(){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(rangeAbs$.$_native.endOffset);
                /*End dynamic block*/
            };rangeAbs$.endOffset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:RangeAbs,$an:function(){return[m$1.doc("returns a number where the container range ends"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','endOffset']};};
            rangeAbs$.collapsed=function collapsed(){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                if(rangeAbs$.$_native.collapsed()){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };rangeAbs$.collapsed.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:RangeAbs,$an:function(){return[m$1.doc("is the start and end nodes the same node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','collapsed']};};
            rangeAbs$.commonAncestorContainer=function commonAncestorContainer(){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                return Node(rangeAbs$.$_native.commonAncestorContainer);
                /*End dynamic block*/
            };rangeAbs$.commonAncestorContainer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Node},$ps:[],$cont:RangeAbs,$an:function(){return[m$1.doc("returns the deepest Node that contains the startContainer and endContainer nodes"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','commonAncestorContainer']};};
            rangeAbs$.setStart=function setStart($n2,$n3){
                var rangeAbs$=this;
                var $n4=$n3;
                if(m$1.is$($n3,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    rangeAbs$.$_native.setStart($n2,$n4);
                    /*End dynamic block*/
                }else if(m$1.is$($n3,{t:m$9f.JSNumber})) {
                    /*Begin dynamic block*/
                    rangeAbs$.$_native.setStart($n2,$n4.$_native);
                    /*End dynamic block*/
                }
            };rangeAbs$.setStart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'startNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'startOffset',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[m$1.doc("set the start position of the range"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','setStart']};};
            rangeAbs$.setEnd=function setEnd($n5,$n6){
                var rangeAbs$=this;
                var $n7=$n6;
                if(m$1.is$($n6,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    rangeAbs$.$_native.setEnd($n5,$n7);
                    /*End dynamic block*/
                }else if(m$1.is$($n6,{t:m$9f.JSNumber})) {
                    /*Begin dynamic block*/
                    rangeAbs$.$_native.setEnd($n5,$n7.$_native);
                    /*End dynamic block*/
                }
            };rangeAbs$.setEnd.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'endNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'endOffset',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[m$1.doc("set the end position of the range"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','setEnd']};};
            rangeAbs$.setStartBefore=function setStartBefore($n8){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                rangeAbs$.$_native.setStartBefore($n8);
                /*End dynamic block*/
            };rangeAbs$.setStartBefore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[m$1.doc("set the start position of the range relative to the given node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','setStartBefore']};};
            rangeAbs$.setStartAfter=function setStartAfter($n9){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                rangeAbs$.$_native.setStartAfter($n9);
                /*End dynamic block*/
            };rangeAbs$.setStartAfter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[m$1.doc("set the start position of the range relative to the given node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','setStartAfter']};};
            rangeAbs$.setEndBefore=function setEndBefore($na){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                rangeAbs$.$_native.setEndBefore($na);
                /*End dynamic block*/
            };rangeAbs$.setEndBefore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[m$1.doc("set the end position of the range relative to the given node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','setEndBefore']};};
            rangeAbs$.setEndAfter=function setEndAfter($nb){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                rangeAbs$.$_native.setEndAfter($nb);
                /*End dynamic block*/
            };rangeAbs$.setEndAfter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[m$1.doc("set the end position of the range relative to the given node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','setEndAfter']};};
            rangeAbs$.collapse$defs$toStart=function($nc){return null;};
            rangeAbs$.collapse=function collapse($nc){
                var rangeAbs$=this;
                if($nc===undefined){$nc=rangeAbs$.collapse$defs$toStart($nc);}
                /*Begin dynamic block*/
                var $nd;
                if(($nd=$nc)!==null&&$nd!==undefined){
                    rangeAbs$.$_native.collapse($nd);
                }else {
                    rangeAbs$.$_native.collapse();
                }/*End dynamic block*/
            };rangeAbs$.collapse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'toStart',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[m$1.doc("collapses the range to one of its boundery points"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','collapse']};};
            rangeAbs$.selectNode=function selectNode($ne){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                rangeAbs$.$_native.selectNode($ne);
                /*End dynamic block*/
            };rangeAbs$.selectNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[m$1.doc("set the range to contain node and its contents"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','selectNode']};};
            rangeAbs$.selectNodeContents=function selectNodeContents($nf){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                rangeAbs$.$_native.selectNodeContents($nf);
                /*End dynamic block*/
            };rangeAbs$.selectNodeContents.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[m$1.doc("set the range to contain the contents of the given node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','selectNodeContents']};};
            rangeAbs$.compareBoundaryPoints=function compareBoundaryPoints($ng,$nh){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                var $ni=$ng;
                if($ni===getEndToEnd()) {
                    return m$9f.JSNumber(rangeAbs$.$_native.compareBoundaryPoints((typeof Range==='undefined'||Range===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Range"),'147:61-147:65','range.ceylon'):Range).START_TO_START,$nh));
                }else if($ni===getEndToStart()) {
                    return m$9f.JSNumber(rangeAbs$.$_native.compareBoundaryPoints((typeof Range==='undefined'||Range===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Range"),'150:61-150:65','range.ceylon'):Range).START_TO_END,$nh));
                }else if($ni===getStartToEnd()) {
                    return m$9f.JSNumber(rangeAbs$.$_native.compareBoundaryPoints((typeof Range==='undefined'||Range===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Range"),'153:61-153:65','range.ceylon'):Range).END_TO_END,$nh));
                }else if($ni===getStartToStart()) {
                    return m$9f.JSNumber(rangeAbs$.$_native.compareBoundaryPoints((typeof Range==='undefined'||Range===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Range"),'156:61-156:65','range.ceylon'):Range).END_TO_START,$nh));
                }/*End dynamic block*/
            };rangeAbs$.compareBoundaryPoints.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[{$nm:'how',$mt:'prm',$t:{t:RangeCompareHow},$an:function(){return[];}},{$nm:'sourceRange',$mt:'prm',$t:{t:Range},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[m$1.doc("compare the boundery points of one range with another"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','compareBoundaryPoints']};};
            rangeAbs$.deleteContents=function deleteContents(){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                rangeAbs$.$_native.deleteContents();
                /*End dynamic block*/
            };rangeAbs$.deleteContents.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:RangeAbs,$an:function(){return[m$1.doc("remove the contents of range from the document"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','deleteContents']};};
            rangeAbs$.extractContents=function extractContents(){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                return DocumentFragment(rangeAbs$.$_native.extractContents());
                /*End dynamic block*/
            };rangeAbs$.extractContents.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DocumentFragment},$ps:[],$cont:RangeAbs,$an:function(){return[m$1.doc("move the contents of the range from their document to a new document fragment"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','extractContents']};};
            rangeAbs$.cloneContents=function cloneContents(){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                return DocumentFragment(rangeAbs$.$_native.cloneContents());
                /*End dynamic block*/
            };rangeAbs$.cloneContents.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DocumentFragment},$ps:[],$cont:RangeAbs,$an:function(){return[m$1.doc("creates a new document copying the nodes inside of the range"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','cloneContents']};};
            rangeAbs$.insertNode=function insertNode($nj){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                rangeAbs$.$_native.insertNode($nj);
                /*End dynamic block*/
            };rangeAbs$.insertNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'newNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[m$1.doc("insert a node at the start of the range"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','insertNode']};};
            rangeAbs$.surroundContents=function surroundContents($nk){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                rangeAbs$.$_native.surroundContents($nk);
                /*End dynamic block*/
            };rangeAbs$.surroundContents.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'newNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[m$1.doc("move the contents of the range into the new node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','surroundContents']};};
            rangeAbs$.cloneRange=function cloneRange(){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                return Range(rangeAbs$.$_native.cloneRange());
                /*End dynamic block*/
            };rangeAbs$.cloneRange.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Range},$ps:[],$cont:RangeAbs,$an:function(){return[m$1.doc("clone the range"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','cloneRange']};};
            rangeAbs$.detach=function detach(){
                var rangeAbs$=this;
                /*Begin dynamic block*/
                rangeAbs$.$_native.detach();
                /*End dynamic block*/
            };rangeAbs$.detach.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:RangeAbs,$an:function(){return[m$1.doc("detach a range from use to free resources"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','detach']};};
            rangeAbs$.isPointInRange=function isPointInRange($nl,$nm){
                var rangeAbs$=this;
                var $nn;
                var $no=$nm;
                if(m$1.is$($nm,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    $nn=rangeAbs$.$_native.isPointInRange($nl,$no);/*End dynamic block*/
                }else if(m$1.is$($nm,{t:m$9f.JSNumber})) {
                    /*Begin dynamic block*/
                    $nn=rangeAbs$.$_native.isPointInRange($nl,$no.$_native);/*End dynamic block*/
                }
                /*Begin dynamic block*/
                if($nn){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };rangeAbs$.isPointInRange.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'offset',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[m$1.doc("is the the current point in the range"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','RangeAbs','$m','isPointInRange']};};
        })(RangeAbs.$$.prototype);
    }
    return RangeAbs;
}
ex$.$init$RangeAbs=$init$RangeAbs;
$init$RangeAbs();
function Range($np,range$){
    $init$Range();
    if(range$===undefined)range$=new Range.$$;
    range$.$np_=$np;
    RangeAbs(range$);
    range$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Range,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','Range','$at','native']};}};
    /*Begin dynamic block*/
    range$.$_native=range$.$np;/*End dynamic block*/
    return range$;
}
Range.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RangeAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("DOM range"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','Range']};};
ex$.Range=Range;
function $init$Range(){
    if(Range.$$===undefined){
        m$1.initTypeProto(Range,'com.openswimsoftware.ceylon.js.dom::Range',$init$RangeAbs());
        (function(range$){
            m$1.atr$(range$,'$np',function(){return this.$np_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Range,d:['com.openswimsoftware.ceylon.js.dom','Range','$at','n$fqs61p']};});
        })(Range.$$.prototype);
    }
    return Range;
}
ex$.$init$Range=$init$Range;
$init$Range();
function MediaListAbs$stylesheets(mediaListAbs$){
    $init$MediaListAbs$stylesheets();
    if(mediaListAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(mediaListAbs$);
    return mediaListAbs$;
}
MediaListAbs$stylesheets.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaListAbs']};};
ex$.MediaListAbs$stylesheets=MediaListAbs$stylesheets;
function $init$MediaListAbs$stylesheets(){
    if(MediaListAbs$stylesheets.$$===undefined){
        m$1.initTypeProto(MediaListAbs$stylesheets,'com.openswimsoftware.ceylon.js.dom.stylesheets::MediaListAbs',m$9f.JSObjectAbs);
        (function(mediaListAbs$){
            mediaListAbs$.getMediaText=function getMediaText(){
                var mediaListAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(mediaListAbs$.$_native.mediaText);
                /*End dynamic block*/
            };mediaListAbs$.getMediaText.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:MediaListAbs$stylesheets,$an:function(){return[m$1.doc("serializes Media Queries"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaListAbs','$m','getMediaText']};};
            mediaListAbs$.setMediaText=function setMediaText($nq){
                var mediaListAbs$=this;
                var $nr=$nq;
                if(m$1.is$($nq,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    mediaListAbs$.$_native.mediaText=$nr.valueOf();
                    /*End dynamic block*/
                }else if(m$1.is$($nq,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    mediaListAbs$.$_native.mediaText=$nr.$_native;
                    /*End dynamic block*/
                }
            };mediaListAbs$.setMediaText.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[m$1.doc("sets the media list to a string of Media Queries"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaListAbs','$m','setMediaText']};};
            mediaListAbs$.length=function length(){
                var mediaListAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(mediaListAbs$.$_native.length);
                /*End dynamic block*/
            };mediaListAbs$.length.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:MediaListAbs$stylesheets,$an:function(){return[m$1.doc("returns the number of Media Queries in the Collection"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaListAbs','$m','length']};};
            mediaListAbs$.item=function item($ns){
                var mediaListAbs$=this;
                var $nt=$ns;
                if(m$1.is$($ns,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    return m$9f.JSString(mediaListAbs$.$_native.item($nt));
                    /*End dynamic block*/
                }else if(m$1.is$($ns,{t:m$9f.JSNumber})) {
                    /*Begin dynamic block*/
                    return m$9f.JSString(mediaListAbs$.$_native.item($nt.$_native));
                    /*End dynamic block*/
                }
            };mediaListAbs$.item.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[{$nm:'index',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[m$1.doc("returns Media Query at the specified index"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaListAbs','$m','item']};};
            mediaListAbs$.deleteMedium=function deleteMedium($nu){
                var mediaListAbs$=this;
                var $nv=$nu;
                if(m$1.is$($nu,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    mediaListAbs$.$_native.deleteMedium($nv.valueOf());
                    /*End dynamic block*/
                }else if(m$1.is$($nu,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    mediaListAbs$.$_native.deleteMedium($nv.$_native);
                    /*End dynamic block*/
                }
            };mediaListAbs$.deleteMedium.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'oldMedium',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[m$1.doc("removes any media querys which match the passed query string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaListAbs','$m','deleteMedium']};};
            mediaListAbs$.appendMedium=function appendMedium($nw){
                var mediaListAbs$=this;
                var $nx=$nw;
                if(m$1.is$($nw,{t:m$1.String})) {
                    /*Begin dynamic block*/
                    mediaListAbs$.$_native.appendMedium($nx.valueOf());
                    /*End dynamic block*/
                }else if(m$1.is$($nw,{t:m$9f.JSString})) {
                    /*Begin dynamic block*/
                    mediaListAbs$.$_native.appendMedium($nx.$_native);
                    /*End dynamic block*/
                }
            };mediaListAbs$.appendMedium.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'newMedium',$mt:'prm',$t:{t:'u',l:[{t:m$1.String},{t:m$9f.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[m$1.doc("appends the passed Media Query to the collection"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaListAbs','$m','appendMedium']};};
        })(MediaListAbs$stylesheets.$$.prototype);
    }
    return MediaListAbs$stylesheets;
}
ex$.$init$MediaListAbs$stylesheets=$init$MediaListAbs$stylesheets;
$init$MediaListAbs$stylesheets();
function MediaList$stylesheets($ny,mediaList$){
    $init$MediaList$stylesheets();
    if(mediaList$===undefined)mediaList$=new MediaList$stylesheets.$$;
    mediaList$.$ny_=$ny;
    MediaListAbs$stylesheets(mediaList$);
    mediaList$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:MediaList$stylesheets,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaList','$at','native']};}};
    /*Begin dynamic block*/
    mediaList$.$_native=mediaList$.$ny;/*End dynamic block*/
    return mediaList$;
}
MediaList$stylesheets.$crtmm$=function(){return{mod:$CCMM$,'super':{t:MediaListAbs$stylesheets},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("Collection of Media Queries"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaList']};};
ex$.MediaList$stylesheets=MediaList$stylesheets;
function $init$MediaList$stylesheets(){
    if(MediaList$stylesheets.$$===undefined){
        m$1.initTypeProto(MediaList$stylesheets,'com.openswimsoftware.ceylon.js.dom.stylesheets::MediaList',$init$MediaListAbs$stylesheets());
        (function(mediaList$){
            m$1.atr$(mediaList$,'$ny',function(){return this.$ny_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:MediaList$stylesheets,d:['com.openswimsoftware.ceylon.js.dom.stylesheets','MediaList','$at','n$6r3bd3']};});
        })(MediaList$stylesheets.$$.prototype);
    }
    return MediaList$stylesheets;
}
ex$.$init$MediaList$stylesheets=$init$MediaList$stylesheets;
$init$MediaList$stylesheets();
ex$.$pkg$ans$com$openswimsoftware$ceylon$js$dom$stylesheets=function(){return[m$1.shared()];};
function StyleSheetAbs$stylesheets(styleSheetAbs$){
    $init$StyleSheetAbs$stylesheets();
    if(styleSheetAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(styleSheetAbs$);
    return styleSheetAbs$;
}
StyleSheetAbs$stylesheets.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetAbs']};};
ex$.StyleSheetAbs$stylesheets=StyleSheetAbs$stylesheets;
function $init$StyleSheetAbs$stylesheets(){
    if(StyleSheetAbs$stylesheets.$$===undefined){
        m$1.initTypeProto(StyleSheetAbs$stylesheets,'com.openswimsoftware.ceylon.js.dom.stylesheets::StyleSheetAbs',m$9f.JSObjectAbs);
        (function(styleSheetAbs$){
            styleSheetAbs$.type=function type(){
                var styleSheetAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(styleSheetAbs$.$_native.type);
                /*End dynamic block*/
            };styleSheetAbs$.type.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[m$1.doc("returns StyleSheets mime type string"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetAbs','$m','type']};};
            styleSheetAbs$.disabled=function disabled(){
                var styleSheetAbs$=this;
                /*Begin dynamic block*/
                if(styleSheetAbs$.$_native.disabled){
                    return true;
                }else {
                    return false;
                }/*End dynamic block*/
            };styleSheetAbs$.disabled.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[m$1.doc("returns if the StyleSheet is disabled or not"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetAbs','$m','disabled']};};
            styleSheetAbs$.ownerNode=function ownerNode(){
                var styleSheetAbs$=this;
                /*Begin dynamic block*/
                return Node(styleSheetAbs$.$_native.ownerNode);
                /*End dynamic block*/
            };styleSheetAbs$.ownerNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Node},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[m$1.doc("returns StyleSheets owning node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetAbs','$m','ownerNode']};};
            styleSheetAbs$.parentStyleSheet=function parentStyleSheet(){
                var styleSheetAbs$=this;
                /*Begin dynamic block*/
                return StyleSheet$stylesheets(styleSheetAbs$.$_native.parentStyleSheet);
                /*End dynamic block*/
            };styleSheetAbs$.parentStyleSheet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:StyleSheet$stylesheets},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[m$1.doc("returns StyleSheets parent"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetAbs','$m','parentStyleSheet']};};
            styleSheetAbs$.href=function href(){
                var styleSheetAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(styleSheetAbs$.$_native.href);
                /*End dynamic block*/
            };styleSheetAbs$.href.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[m$1.doc("returns StyleSheet location"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetAbs','$m','href']};};
            styleSheetAbs$.title=function title(){
                var styleSheetAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(styleSheetAbs$.$_native.title);
                /*End dynamic block*/
            };styleSheetAbs$.title.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[m$1.doc("returns StyleSheet title"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetAbs','$m','title']};};
            styleSheetAbs$.media=function media(){
                var styleSheetAbs$=this;
                /*Begin dynamic block*/
                return MediaList$stylesheets(styleSheetAbs$.$_native.media);
                /*End dynamic block*/
            };styleSheetAbs$.media.$crtmm$=function(){return{mod:$CCMM$,$t:{t:MediaList$stylesheets},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[m$1.doc("returns the collection of Media Queries associated with the StyleSheet"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetAbs','$m','media']};};
        })(StyleSheetAbs$stylesheets.$$.prototype);
    }
    return StyleSheetAbs$stylesheets;
}
ex$.$init$StyleSheetAbs$stylesheets=$init$StyleSheetAbs$stylesheets;
$init$StyleSheetAbs$stylesheets();
function StyleSheet$stylesheets($nz,styleSheet$){
    $init$StyleSheet$stylesheets();
    if(styleSheet$===undefined)styleSheet$=new StyleSheet$stylesheets.$$;
    styleSheet$.$nz_=$nz;
    StyleSheetAbs$stylesheets(styleSheet$);
    styleSheet$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:StyleSheet$stylesheets,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheet','$at','native']};}};
    /*Begin dynamic block*/
    styleSheet$.$_native=styleSheet$.$nz;/*End dynamic block*/
    return styleSheet$;
}
StyleSheet$stylesheets.$crtmm$=function(){return{mod:$CCMM$,'super':{t:StyleSheetAbs$stylesheets},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("represents a basic StyleSheet"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheet']};};
ex$.StyleSheet$stylesheets=StyleSheet$stylesheets;
function $init$StyleSheet$stylesheets(){
    if(StyleSheet$stylesheets.$$===undefined){
        m$1.initTypeProto(StyleSheet$stylesheets,'com.openswimsoftware.ceylon.js.dom.stylesheets::StyleSheet',$init$StyleSheetAbs$stylesheets());
        (function(styleSheet$){
            m$1.atr$(styleSheet$,'$nz',function(){return this.$nz_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:StyleSheet$stylesheets,d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheet','$at','n$k6r7ub']};});
        })(StyleSheet$stylesheets.$$.prototype);
    }
    return StyleSheet$stylesheets;
}
ex$.$init$StyleSheet$stylesheets=$init$StyleSheet$stylesheets;
$init$StyleSheet$stylesheets();
function StyleSheetListAbs$stylesheets(styleSheetListAbs$){
    $init$StyleSheetListAbs$stylesheets();
    if(styleSheetListAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(styleSheetListAbs$);
    return styleSheetListAbs$;
}
StyleSheetListAbs$stylesheets.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetListAbs']};};
ex$.StyleSheetListAbs$stylesheets=StyleSheetListAbs$stylesheets;
function $init$StyleSheetListAbs$stylesheets(){
    if(StyleSheetListAbs$stylesheets.$$===undefined){
        m$1.initTypeProto(StyleSheetListAbs$stylesheets,'com.openswimsoftware.ceylon.js.dom.stylesheets::StyleSheetListAbs',m$9f.JSObjectAbs);
        (function(styleSheetListAbs$){
            styleSheetListAbs$.length=function length(){
                var styleSheetListAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSNumber(styleSheetListAbs$.$_native.length);
                /*End dynamic block*/
            };styleSheetListAbs$.length.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSNumber},$ps:[],$cont:StyleSheetListAbs$stylesheets,$an:function(){return[m$1.doc("returns the length of the StyleSheet Collection"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','length']};};
            styleSheetListAbs$.item=function item($o0){
                var styleSheetListAbs$=this;
                /*Begin dynamic block*/
                var $o1=styleSheetListAbs$.$_native.item($o0);
                if(($o2=$o1,$o3=null,($o2.equals&&!$o2.equals($o3))||$o2!==$o3)){
                    return StyleSheet$stylesheets($o1);
                }else {
                    return null;
                }/*End dynamic block*/
            };styleSheetListAbs$.item.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:StyleSheet$stylesheets}]},$ps:[{$nm:'index',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}}],$cont:StyleSheetListAbs$stylesheets,$an:function(){return[m$1.doc("returns the StyleSheet at the specified index"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','item']};};
        })(StyleSheetListAbs$stylesheets.$$.prototype);
    }
    return StyleSheetListAbs$stylesheets;
}
ex$.$init$StyleSheetListAbs$stylesheets=$init$StyleSheetListAbs$stylesheets;
$init$StyleSheetListAbs$stylesheets();
function StyleSheetList$stylesheets($o4,styleSheetList$){
    $init$StyleSheetList$stylesheets();
    if(styleSheetList$===undefined)styleSheetList$=new StyleSheetList$stylesheets.$$;
    styleSheetList$.$o4_=$o4;
    StyleSheetListAbs$stylesheets(styleSheetList$);
    styleSheetList$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:StyleSheetList$stylesheets,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetList','$at','native']};}};
    /*Begin dynamic block*/
    styleSheetList$.$_native=styleSheetList$.$o4;/*End dynamic block*/
    return styleSheetList$;
}
StyleSheetList$stylesheets.$crtmm$=function(){return{mod:$CCMM$,'super':{t:StyleSheetListAbs$stylesheets},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a collection of StyleSheets"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetList']};};
ex$.StyleSheetList$stylesheets=StyleSheetList$stylesheets;
function $init$StyleSheetList$stylesheets(){
    if(StyleSheetList$stylesheets.$$===undefined){
        m$1.initTypeProto(StyleSheetList$stylesheets,'com.openswimsoftware.ceylon.js.dom.stylesheets::StyleSheetList',$init$StyleSheetListAbs$stylesheets());
        (function(styleSheetList$){
            m$1.atr$(styleSheetList$,'$o4',function(){return this.$o4_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:StyleSheetList$stylesheets,d:['com.openswimsoftware.ceylon.js.dom.stylesheets','StyleSheetList','$at','n$qzz87z']};});
        })(StyleSheetList$stylesheets.$$.prototype);
    }
    return StyleSheetList$stylesheets;
}
ex$.$init$StyleSheetList$stylesheets=$init$StyleSheetList$stylesheets;
$init$StyleSheetList$stylesheets();
function CDATASectionAbs(cDATASectionAbs$){
    $init$CDATASectionAbs();
    if(cDATASectionAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    TextAbs(cDATASectionAbs$);
    return cDATASectionAbs$;
}
CDATASectionAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TextAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','CDATASectionAbs']};};
ex$.CDATASectionAbs=CDATASectionAbs;
function $init$CDATASectionAbs(){
    if(CDATASectionAbs.$$===undefined){
        m$1.initTypeProto(CDATASectionAbs,'com.openswimsoftware.ceylon.js.dom::CDATASectionAbs',$init$TextAbs());
    }
    return CDATASectionAbs;
}
ex$.$init$CDATASectionAbs=$init$CDATASectionAbs;
$init$CDATASectionAbs();
function CDATASection($o5,cDATASection$){
    $init$CDATASection();
    if(cDATASection$===undefined)cDATASection$=new CDATASection.$$;
    cDATASection$.$o5_=$o5;
    CDATASectionAbs(cDATASection$);
    cDATASection$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:CDATASection,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','CDATASection','$at','native']};}};
    /*Begin dynamic block*/
    cDATASection$.$_native=cDATASection$.$o5;/*End dynamic block*/
    return cDATASection$;
}
CDATASection.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CDATASectionAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a DOM CDATASection"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','CDATASection']};};
ex$.CDATASection=CDATASection;
function $init$CDATASection(){
    if(CDATASection.$$===undefined){
        m$1.initTypeProto(CDATASection,'com.openswimsoftware.ceylon.js.dom::CDATASection',$init$CDATASectionAbs());
        (function(cDATASection$){
            m$1.atr$(cDATASection$,'$o5',function(){return this.$o5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:CDATASection,d:['com.openswimsoftware.ceylon.js.dom','CDATASection','$at','n$lbe6r4']};});
        })(CDATASection.$$.prototype);
    }
    return CDATASection;
}
ex$.$init$CDATASection=$init$CDATASection;
$init$CDATASection();
function TextAbs(textAbs$){
    $init$TextAbs();
    if(textAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    CharacterDataAbs(textAbs$);
    return textAbs$;
}
TextAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CharacterDataAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','TextAbs']};};
ex$.TextAbs=TextAbs;
function $init$TextAbs(){
    if(TextAbs.$$===undefined){
        m$1.initTypeProto(TextAbs,'com.openswimsoftware.ceylon.js.dom::TextAbs',$init$CharacterDataAbs());
        (function(textAbs$){
            textAbs$.splitText=function splitText($o6){
                var textAbs$=this;
                var $o7=$o6;
                if(m$1.is$($o6,{t:m$1.Integer})) {
                    /*Begin dynamic block*/
                    return Text(textAbs$.$_native.splitText($o7));
                    /*End dynamic block*/
                }else if(m$1.is$($o6,{t:m$9f.JSNumber})) {
                    /*Begin dynamic block*/
                    return Text(textAbs$.$_native.splitText($o7.$_native));
                    /*End dynamic block*/
                }
            };textAbs$.splitText.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Text},$ps:[{$nm:'offset',$mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:m$9f.JSNumber}]},$an:function(){return[];}}],$cont:TextAbs,$an:function(){return[m$1.doc("split the node in two at the offset"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TextAbs','$m','splitText']};};
            textAbs$.wholeText=function wholeText(){
                var textAbs$=this;
                /*Begin dynamic block*/
                return m$9f.JSString(textAbs$.$_native.wholeText);
                /*End dynamic block*/
            };textAbs$.wholeText.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$9f.JSString},$ps:[],$cont:TextAbs,$an:function(){return[m$1.doc("get the Text node as a String"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TextAbs','$m','wholeText']};};
        })(TextAbs.$$.prototype);
    }
    return TextAbs;
}
ex$.$init$TextAbs=$init$TextAbs;
$init$TextAbs();
function Text($o8,text$){
    $init$Text();
    if(text$===undefined)text$=new Text.$$;
    text$.$o8_=$o8;
    TextAbs(text$);
    text$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Text,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','Text','$at','native']};}};
    /*Begin dynamic block*/
    text$.$_native=text$.$o8;/*End dynamic block*/
    return text$;
}
Text.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TextAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a DOM Text element"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','Text']};};
ex$.Text=Text;
function $init$Text(){
    if(Text.$$===undefined){
        m$1.initTypeProto(Text,'com.openswimsoftware.ceylon.js.dom::Text',$init$TextAbs());
        (function(text$){
            m$1.atr$(text$,'$o8',function(){return this.$o8_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:Text,d:['com.openswimsoftware.ceylon.js.dom','Text','$at','n$olmx83']};});
        })(Text.$$.prototype);
    }
    return Text;
}
ex$.$init$Text=$init$Text;
$init$Text();
function TreeWalkerAbs(treeWalkerAbs$){
    $init$TreeWalkerAbs();
    if(treeWalkerAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$9f.JSObjectAbs(treeWalkerAbs$);
    return treeWalkerAbs$;
}
TreeWalkerAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$9f.JSObjectAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs']};};
ex$.TreeWalkerAbs=TreeWalkerAbs;
function $init$TreeWalkerAbs(){
    if(TreeWalkerAbs.$$===undefined){
        m$1.initTypeProto(TreeWalkerAbs,'com.openswimsoftware.ceylon.js.dom::TreeWalkerAbs',m$9f.JSObjectAbs);
        (function(treeWalkerAbs$){
            treeWalkerAbs$.root=function root(){
                var treeWalkerAbs$=this;
                /*Begin dynamic block*/
                return Node(treeWalkerAbs$.$_native.root);
                /*End dynamic block*/
            };treeWalkerAbs$.root.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Node},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[m$1.doc("returns the node where the tree walker was created"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','root']};};
            treeWalkerAbs$.whatToShow=function whatToShow(){
                var treeWalkerAbs$=this;
                /*Begin dynamic block*/
                return ($o9=treeWalkerAbs$.$_native.whatToShow,m$1.is$($o9,{t:m$1.Anything})?$o9:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'16:19-16:35','treewalker.ceylon'));
                /*End dynamic block*/
            };treeWalkerAbs$.whatToShow.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[m$1.doc("returns what type of nodes are present on the tree"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','whatToShow']};};
            treeWalkerAbs$.filter=function filter(){
                var treeWalkerAbs$=this;
                /*Begin dynamic block*/
                var $oa=treeWalkerAbs$.$_native.filter;
                if(($ob=$oa,$oc=null,($ob.equals&&!$ob.equals($oc))||$ob!==$oc)){
                    return NodeFilter(($od=$oa,m$1.is$($od,{t:NodeFilterResult})?$od:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'25:34-25:39','treewalker.ceylon')));
                }else {
                    return null;
                }/*End dynamic block*/
            };treeWalkerAbs$.filter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:NodeFilter}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[m$1.doc("returns the node filter used to select the tree nodes"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','filter']};};
            treeWalkerAbs$.currentNode=function currentNode(){
                var treeWalkerAbs$=this;
                /*Begin dynamic block*/
                return Node(treeWalkerAbs$.$_native.currentNode());
                /*End dynamic block*/
            };treeWalkerAbs$.currentNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Node},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[m$1.doc("returns the current document node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','currentNode']};};
            treeWalkerAbs$.parentNode=function parentNode(){
                var treeWalkerAbs$=this;
                /*Begin dynamic block*/
                var $oe=treeWalkerAbs$.$_native.parentNode();
                if(($of=$oe,$og=null,($of.equals&&!$of.equals($og))||$of!==$og)){
                    return Node($oe);
                }else {
                    return null;
                }/*End dynamic block*/
            };treeWalkerAbs$.parentNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[m$1.doc("move the tree to the first node in the document order"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','parentNode']};};
            treeWalkerAbs$.firstChild=function firstChild(){
                var treeWalkerAbs$=this;
                /*Begin dynamic block*/
                var $oh=treeWalkerAbs$.$_native.firstChild();
                if(($oi=$oh,$oj=null,($oi.equals&&!$oi.equals($oj))||$oi!==$oj)){
                    return Node($oh);
                }else {
                    return null;
                }/*End dynamic block*/
            };treeWalkerAbs$.firstChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[m$1.doc("move the tree to the first child of the current node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','firstChild']};};
            treeWalkerAbs$.lastChild=function lastChild(){
                var treeWalkerAbs$=this;
                /*Begin dynamic block*/
                var $ok=treeWalkerAbs$.$_native.lastChild();
                if(($ol=$ok,$om=null,($ol.equals&&!$ol.equals($om))||$ol!==$om)){
                    return Node($ok);
                }else {
                    return null;
                }/*End dynamic block*/
            };treeWalkerAbs$.lastChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[m$1.doc("move the tree to the last child of the current node"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','lastChild']};};
            treeWalkerAbs$.previousSibling=function previousSibling(){
                var treeWalkerAbs$=this;
                /*Begin dynamic block*/
                var $on=treeWalkerAbs$.$_native.previousSibling();
                if(($oo=$on,$op=null,($oo.equals&&!$oo.equals($op))||$oo!==$op)){
                    return Node($on);
                }else {
                    return null;
                }/*End dynamic block*/
            };treeWalkerAbs$.previousSibling.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[m$1.doc("move the tree to the current nodes previous sibling"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','previousSibling']};};
            treeWalkerAbs$.nextSibling=function nextSibling(){
                var treeWalkerAbs$=this;
                /*Begin dynamic block*/
                var $oq=treeWalkerAbs$.$_native.nextSibling();
                if(($or=$oq,$os=null,($or.equals&&!$or.equals($os))||$or!==$os)){
                    return Node($oq);
                }else {
                    return null;
                }/*End dynamic block*/
            };treeWalkerAbs$.nextSibling.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[m$1.doc("move the tree to the current nodes next sibling"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','nextSibling']};};
            treeWalkerAbs$.previousNode=function previousNode(){
                var treeWalkerAbs$=this;
                /*Begin dynamic block*/
                var $ot=treeWalkerAbs$.$_native.previousNode();
                if(($ou=$ot,$ov=null,($ou.equals&&!$ou.equals($ov))||$ou!==$ov)){
                    return Node($ot);
                }else {
                    return null;
                }/*End dynamic block*/
            };treeWalkerAbs$.previousNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[m$1.doc("move the tree to the previous node and returns"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','previousNode']};};
            treeWalkerAbs$.nextNode=function nextNode(){
                var treeWalkerAbs$=this;
                /*Begin dynamic block*/
                var $ow=treeWalkerAbs$.$_native.nextNode();
                if(($ox=$ow,$oy=null,($ox.equals&&!$ox.equals($oy))||$ox!==$oy)){
                    return Node($ow);
                }else {
                    return null;
                }/*End dynamic block*/
            };treeWalkerAbs$.nextNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[m$1.doc("move the tree to the next node and returns"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalkerAbs','$m','nextNode']};};
        })(TreeWalkerAbs.$$.prototype);
    }
    return TreeWalkerAbs;
}
ex$.$init$TreeWalkerAbs=$init$TreeWalkerAbs;
$init$TreeWalkerAbs();
function TreeWalker($oz,treeWalker$){
    $init$TreeWalker();
    if(treeWalker$===undefined)treeWalker$=new TreeWalker.$$;
    treeWalker$.$oz_=$oz;
    TreeWalkerAbs(treeWalker$);
    treeWalker$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:TreeWalker,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalker','$at','native']};}};
    /*Begin dynamic block*/
    treeWalker$.$_native=treeWalker$.$oz;/*End dynamic block*/
    return treeWalker$;
}
TreeWalker.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TreeWalkerAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.doc("a Document TreeWalker"),m$1.shared()];},d:['com.openswimsoftware.ceylon.js.dom','TreeWalker']};};
ex$.TreeWalker=TreeWalker;
function $init$TreeWalker(){
    if(TreeWalker.$$===undefined){
        m$1.initTypeProto(TreeWalker,'com.openswimsoftware.ceylon.js.dom::TreeWalker',$init$TreeWalkerAbs());
        (function(treeWalker$){
            m$1.atr$(treeWalker$,'$oz',function(){return this.$oz_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:TreeWalker,d:['com.openswimsoftware.ceylon.js.dom','TreeWalker','$at','n$czj3ec']};});
        })(TreeWalker.$$.prototype);
    }
    return TreeWalker;
}
ex$.$init$TreeWalker=$init$TreeWalker;
$init$TreeWalker();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
