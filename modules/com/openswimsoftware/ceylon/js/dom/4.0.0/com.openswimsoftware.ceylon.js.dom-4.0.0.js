(function(define) { define(function(require, ex$, module) {
var $CCMM$={"com.openswimsoftware.ceylon.js.dom.stylesheets":{"$pkg-shared":1,StyleSheetListAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{item:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"StyleSheet"}]},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"index"}]],mt:"m",an:{doc:["returns the StyleSheet at the specified index"]},nm:"item"},length:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the length of the StyleSheet Collection"]},nm:"length"}},nm:"StyleSheetListAbs"},MediaList:{super:{pk:".",nm:"MediaListAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$jip2pw:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["Collection of Media Queries"]},nm:"MediaList"},StyleSheetAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{parentStyleSheet:{$t:{pk:".",nm:"StyleSheet"},pa:1,mt:"m",an:{doc:["returns StyleSheets parent"]},nm:"parentStyleSheet"},disabled:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"m",an:{doc:["returns if the StyleSheet is disabled or not"]},nm:"disabled"},href:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns StyleSheet location"]},nm:"href"},media:{$t:{pk:".",nm:"MediaList"},pa:1,mt:"m",an:{doc:["returns the collection of Media Queries associated with the StyleSheet"]},nm:"media"},type:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns StyleSheets mime type string"]},nm:"type"},title:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns StyleSheet title"]},nm:"title"},ownerNode:{$t:{pk:"com.openswimsoftware.ceylon.js.dom",nm:"Node"},pa:1,mt:"m",an:{doc:["returns StyleSheets owning node"]},nm:"ownerNode"}},nm:"StyleSheetAbs"},StyleSheet:{super:{pk:".",nm:"StyleSheetAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$63168o:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["represents a basic StyleSheet"]},nm:"StyleSheet"},MediaListAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{item:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"index"}]],mt:"m",an:{doc:["returns Media Query at the specified index"]},nm:"item"},length:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the number of Media Queries in the Collection"]},nm:"length"},getMediaText:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["serializes Media Queries"]},nm:"getMediaText"},setMediaText:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"text"}]],mt:"m",an:{doc:["sets the media list to a string of Media Queries"]},nm:"setMediaText"},deleteMedium:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"oldMedium"}]],mt:"m",an:{doc:["removes any media querys which match the passed query string"]},nm:"deleteMedium"},appendMedium:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"newMedium"}]],mt:"m",an:{doc:["appends the passed Media Query to the collection"]},nm:"appendMedium"}},nm:"MediaListAbs"},StyleSheetList:{super:{pk:".",nm:"StyleSheetListAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$hrcfo6:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["a collection of StyleSheets"]},nm:"StyleSheetList"}},"$mod-version":"4.0.0","$mod-deps":[{exp:1,path:"com.openswimsoftware.ceylon.js.language\/1.8.0"},{exp:1,path:"com.openswimsoftware.ceylon.js.html\/5.0.0"},{exp:1,path:"com.openswimsoftware.ceylon.js.json\/1.0.0"},{exp:1,path:"ceylon.language\/1.1.0"}],"com.openswimsoftware.ceylon.js.dom":{documentPositionFollowing:{super:{pk:".",nm:"DocumentPosition"},pa:1,mt:"o",nm:"documentPositionFollowing"},startToEnd:{super:{pk:".",nm:"RangeCompareHow"},pa:1,mt:"o",nm:"startToEnd"},EventPhase:{super:{md:"ceylon.language",pk:"$",nm:"Basic"},pa:257,ps:[{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},pa:1,mt:"prm",nm:"num"}],mt:"c",of:[{pk:".",nm:"none"},{pk:".",nm:"capturePhase"},{pk:".",nm:"atTarget"},{pk:".",nm:"bubblingPhase"}],$at:{num:{$t:{md:"ceylon.language",pk:"$",nm:"Integer"},pa:1,mt:"a",nm:"num"}},an:{doc:["current Event Phase"]},nm:"EventPhase"},Node:{super:{pk:".",nm:"NodeAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$rz0rgl:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["a DOM Node"]},nm:"Node"},interactive:{super:{pk:".",nm:"DocumentReadyState"},pa:1,mt:"o",nm:"interactive"},capturePhase:{super:{pk:".",nm:"EventPhase"},pa:1,mt:"o",nm:"capturePhase"},documentPositionContainedBy:{super:{pk:".",nm:"DocumentPosition"},pa:1,mt:"o",nm:"documentPositionContainedBy"},none:{super:{pk:".",nm:"EventPhase"},pa:1,mt:"o",nm:"none"},Document:{super:{pk:".",nm:"DocumentAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$1zapne:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["a DOM Document"]},nm:"Document"},ProcessingInstructionAbs:{super:{pk:".",nm:"NodeAbs"},pa:257,mt:"c",$m:{setData:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"data"}]],mt:"m",an:{doc:["set the processing instruction data"]},nm:"setData"},getData:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["get the processing instruction data"]},nm:"getData"},target:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["the processing instruction target"]},nm:"target"}},nm:"ProcessingInstructionAbs"},Attr:{super:{pk:".",nm:"AttrAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$aa5duc:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["a DOM Attr"]},nm:"Attr"},documentNode:{super:{pk:".",nm:"NodeType"},pa:1,mt:"o",nm:"documentNode"},DOMImplementationAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{hasFeature:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"feature"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},def:1,mt:"prm",nm:"version"}]],mt:"m",an:{doc:["returns if the DOM has the given feature at the specified or greater version"]},nm:"hasFeature"},createDocument:{$t:{pk:".",nm:"Document"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]}]},mt:"prm",nm:"namespace"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},def:1,mt:"prm",nm:"qualifiedName"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"DocumentType"}]},def:1,mt:"prm",nm:"doctype"}]],mt:"m",an:{doc:["returns a new Document"]},nm:"createDocument"},createDocumentType:{$t:{pk:".",nm:"DocumentType"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"qualifiedName"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"publicId"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"systemId"}]],mt:"m",an:{doc:["returns a new DocumentType"]},nm:"createDocumentType"}},nm:"DOMImplementationAbs"},documentPositionContains:{super:{pk:".",nm:"DocumentPosition"},pa:1,mt:"o",nm:"documentPositionContains"},HTMLCollection:{super:{pk:".",nm:"HTMLCollectionAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$872ltw:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["a DOM HTMLCollection"]},nm:"HTMLCollection"},CDATASection:{super:{pk:".",nm:"CDATASectionAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$dt498r:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["a DOM CDATASection"]},nm:"CDATASection"},DocumentDirection:{super:{md:"ceylon.language",pk:"$",nm:"Basic"},pa:257,ps:[{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"prm",nm:"name"}],mt:"c",of:[{pk:".",nm:"rtl"},{pk:".",nm:"ltr"}],$at:{name$6vynec:{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"a",nm:"name"}},an:{doc:["Document Direction"]},nm:"DocumentDirection"},documentFragmentNode:{super:{pk:".",nm:"NodeType"},pa:1,mt:"o",nm:"documentFragmentNode"},entityNode:{super:{pk:".",nm:"NodeType"},pa:1,mt:"o",nm:"entityNode"},documentPositionPreceding:{super:{pk:".",nm:"DocumentPosition"},pa:1,mt:"o",nm:"documentPositionPreceding"},attributeNode:{super:{pk:".",nm:"NodeType"},pa:1,mt:"o",nm:"attributeNode"},NodeFilterResult:{super:{md:"ceylon.language",pk:"$",nm:"Basic"},pa:257,ps:[{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"prm",nm:"name"}],mt:"c",of:[{pk:".",nm:"filterAccept"},{pk:".",nm:"filterReject"},{pk:".",nm:"filterSkip"}],$at:{name$52v8o9:{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"a",nm:"name"}},nm:"NodeFilterResult"},CharacterDataAbs:{super:{pk:".",nm:"NodeAbs"},pa:257,mt:"c",$m:{appendData:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"data"}]],mt:"m",an:{doc:["append the Characters with String data"]},nm:"appendData"},replaceData:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"offset"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"count"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"data"}]],mt:"m",an:{doc:["replace the Characters starting at offset to count using the String data"]},nm:"replaceData"},deleteData:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"offset"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"count"}]],mt:"m",nm:"deleteData"},setData:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"data"}]],mt:"m",an:{doc:["set the CharacterData"]},nm:"setData"},substringData:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"offset"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"count"}]],mt:"m",an:{doc:["returns a subtstring starting at offset and through a count"]},nm:"substringData"},length:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the length of the CharacterData"]},nm:"length"},insertData:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"offset"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"data"}]],mt:"m",an:{doc:["insert the Characters starting at offset using the String data"]},nm:"insertData"},getData:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the CharacterData"]},nm:"getData"}},nm:"CharacterDataAbs"},NodeList:{super:{pk:".",nm:"NodeListAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$pmvinn:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["collection of DOM nodes"]},nm:"NodeList"},documentPositionDisconnected:{super:{pk:".",nm:"DocumentPosition"},pa:1,mt:"o",nm:"documentPositionDisconnected"},filterReject:{super:{pk:".",nm:"NodeFilterResult"},pa:1,mt:"o",nm:"filterReject"},TreeWalker:{super:{pk:".",nm:"TreeWalkerAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$m4zclj:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["a Document TreeWalker"]},nm:"TreeWalker"},DocumentAbs:{super:{pk:".",nm:"NodeAbs"},pa:257,mt:"c",$m:{activeElement:{$t:{pk:".",nm:"Element"},pa:1,mt:"m",an:{doc:["returns the currently focused element on the document"]},nm:"activeElement"},setAsync:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},mt:"prm",nm:"async"}]],mt:"m",an:{doc:["sets whether a document.load call should be made asynchronously"]},nm:"setAsync"},characterSet:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns documents CharacterSet"]},nm:"characterSet"},setDomain:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"domain"}]],mt:"m",an:{doc:["set the domain string of the document"]},nm:"setDomain"},plugins:{$t:{pk:".",nm:"HTMLCollection"},pa:1,mt:"m",an:{doc:["returns collection of all the plugin elements on the document"]},nm:"plugins"},getDesignMode:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"m",an:{doc:["returns if the documents design mode is on"]},nm:"getDesignMode"},body:{$t:{pk:".",nm:"Node"},pa:1,mt:"m",an:{doc:["returns the body node on the document"]},nm:"body"},getCookie:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns cookies associated with the document in the form of a comma sepearted list of key=value pairs"]},nm:"getCookie"},releaseCapture:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,mt:"m",an:{doc:["release current mouse capture"]},nm:"releaseCapture"},adoptNode:{$t:{pk:".",nm:"Node"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"node"}]],mt:"m",an:{doc:["adapts a node from a external document"]},nm:"adoptNode"},readyState:{$t:{pk:".",nm:"DocumentReadyState"},pa:1,mt:"m",an:{doc:["returns the current ready state of the document"]},nm:"readyState"},links:{$t:{pk:".",nm:"HTMLCollection"},pa:1,mt:"m",an:{doc:["returns all of the link elements in the document"]},nm:"links"},write:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"line"}]],mt:"m",an:{doc:["write the string to the document"]},nm:"write"},elementFromPoint:{$t:{pk:".",nm:"Element"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"x"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"y"}]],mt:"m",an:{doc:["returns element at the given point coordinates"]},nm:"elementFromPoint"},images:{$t:{pk:".",nm:"HTMLCollection"},pa:1,mt:"m",an:{doc:["returns a collection of all image elements in the document"]},nm:"images"},createCDATASection:{$t:{pk:".",nm:"CDATASection"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"data"}]],mt:"m",an:{doc:["creates a new CDATASection"]},nm:"createCDATASection"},createElement:{$t:{pk:".",nm:"Element"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"tagName"}]],mt:"m",an:{doc:["creates a new element"]},nm:"createElement"},writeln:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"line"}]],mt:"m",an:{doc:["write the string to the document as a line"]},nm:"writeln"},createTreeWalker:{$t:{pk:".",nm:"TreeWalker"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"root"},{$t:{nm:"$U"},def:1,mt:"prm",nm:"whatToShow"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"NodeFilter"}]},def:1,mt:"prm",nm:"filter"}]],mt:"m",an:{doc:["returns a new tree walker for walking the document"]},nm:"createTreeWalker"},getDomain:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["get the documents domain"]},nm:"getDomain"},createProcessingInstruction:{$t:{pk:".",nm:"ProcessingInstruction"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"target"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"data"}]],mt:"m",an:{doc:["creates a processing instruction node"]},nm:"createProcessingInstruction"},lastModified:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the date the document was last modified as a string"]},nm:"lastModified"},preferredStyleSheetSet:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},pa:1,mt:"m",an:{doc:["returns the prefurred name of the StyleSheet set on the document"]},nm:"preferredStyleSheetSet"},styleSheets:{$t:{pk:"com.openswimsoftware.ceylon.js.dom.stylesheets",nm:"StyleSheetList"},pa:1,mt:"m",an:{doc:["returns collection of StyleSheets linked to or embeded in the document"]},nm:"styleSheets"},documentElement:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Element"}]},pa:1,mt:"m",an:{doc:["returns the element that is a direct child of the document"]},nm:"documentElement"},getElementById:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Element"}]},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"id"}]],mt:"m",an:{doc:["returns element on the document by the id"]},nm:"getElementById"},createTextNode:{$t:{pk:".",nm:"Text"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"data"}]],mt:"m",an:{doc:["creates a new text node"]},nm:"createTextNode"},setSelectedStyleSheetSet:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"sheet"}]],mt:"m",an:{doc:["returns a linked to or embeded in the document by its name"]},nm:"setSelectedStyleSheetSet"},querySelectorAll:{$t:{pk:".",nm:"NodeList"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"selectors"}]],mt:"m",an:{doc:["returns a list of all elements within the document"]},nm:"querySelectorAll"},setDir:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{pk:".",nm:"DocumentDirection"},mt:"prm",nm:"dir"}]],mt:"m",an:{doc:["set the document direction"]},nm:"setDir"},anchors:{$t:{pk:".",nm:"NodeList"},pa:1,mt:"m",an:{doc:["returns a collection of all anchors in the document"]},nm:"anchors"},selectedStyleSheetSet:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the name of the StyleSheet set that is currently in use on the document"]},nm:"selectedStyleSheetSet"},title:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the documents title"]},nm:"title"},createComment:{$t:{pk:".",nm:"Comment"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"data"}]],mt:"m",an:{doc:["creates a new comment"]},nm:"createComment"},getElementsByTagNameNS:{$t:{comp:"u",l:[{pk:".",nm:"HTMLCollection"},{pk:".",nm:"NodeList"}]},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"namespace"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},def:1,mt:"prm",nm:"name"}]],mt:"m",an:{doc:["returns a collection of elements on the document by the tagname in a namespace"]},nm:"getElementsByTagNameNS"},head:{$t:{pk:".",nm:"Element"},pa:1,mt:"m",an:{doc:["returns the document head element"]},nm:"head"},styleSheetSets:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSArray"},pa:1,mt:"m",an:{doc:["returns Array of Strings naming the avaiable StyleSheets"]},nm:"styleSheetSets"},getElementsByName:{$t:{pk:".",nm:"HTMLCollection"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"name"}]],mt:"m",an:{doc:["returns a list of elements in the document with the given name"]},nm:"getElementsByName"},scripts:{$t:{pk:".",nm:"HTMLCollection"},pa:1,mt:"m",an:{doc:["returns a collection of all the script elements in the document"]},nm:"scripts"},hasFocus:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"m",an:{doc:["returns whether the document or any element in the document currently has focus"]},nm:"hasFocus"},getElementsByTagName:{$t:{comp:"u",l:[{pk:".",nm:"HTMLCollection"},{pk:".",nm:"NodeList"}]},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},def:1,mt:"prm",nm:"name"}]],mt:"m",an:{doc:["returns a collection of elements on the document by the tagname"]},nm:"getElementsByTagName"},close:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,mt:"m",an:{doc:["finishes writing to a document opened with Document.open()"]},nm:"close"},getDir:{$t:{pk:".",nm:"DocumentDirection"},pa:1,mt:"m",an:{doc:["get the document direction"]},nm:"getDir"},documentURI:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns documents URI"]},nm:"documentURI"},createAttributeNS:{$t:{pk:".",nm:"Attr"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]}]},mt:"prm",nm:"namespace"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"name"}]],mt:"m",an:{doc:["creates a attribute with the given namespace"]},nm:"createAttributeNS"},createElementNS:{$t:{pk:".",nm:"Element"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"namespaceURI"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"qualifiedName"}]],mt:"m",an:{doc:["creates a new element in the given namespace"]},nm:"createElementNS"},implementation:{$t:{pk:".",nm:"DOMImplementation"},pa:1,mt:"m",an:{doc:["returns the DOM implementation associated with the document"]},nm:"implementation"},querySelector:{$t:{pk:".",nm:"Element"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"selectors"}]],mt:"m",an:{doc:["returns the first element which matches the selectors"]},nm:"querySelector"},setCookie:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"cookie"}]],mt:"m",an:{doc:["set cookies associated with the document in the form of a comma sepearted list of key=value pairs"]},nm:"setCookie"},lastStyleSheetSet:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the name of the last enabled StyleSheet Set for the document"]},nm:"lastStyleSheetSet"},createNodeIterator:{$t:{pk:".",nm:"NodeIterator"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"root"},{$t:{nm:"$U"},def:1,mt:"prm",nm:"whatToShow"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"NodeFilter"}]},def:1,mt:"prm",nm:"filter"}]],mt:"m",an:{doc:["returns a new node iterator the document"]},nm:"createNodeIterator"},getAsync:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"m",an:{doc:["gets whether a document.load call will be made asynchronously"]},nm:"getAsync"},importNode:{$t:{pk:".",nm:"Node"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"externalNode"},{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},def:1,mt:"prm",nm:"deep"}]],mt:"m",an:{doc:["creates a copy of a node from another document that can be inserted into the current document"]},nm:"importNode"},url:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the document url"]},nm:"url"},doctype:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"DocumentType"}]},pa:1,mt:"m",an:{doc:["returns the documents doctype"]},nm:"doctype"},referrer:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns uri of the page which linked to this document"]},nm:"referrer"},createAttribute:{$t:{pk:".",nm:"Attr"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"name"}]],mt:"m",an:{doc:["creates a new attribute"]},nm:"createAttribute"},defaultView:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.html",pk:"com.openswimsoftware.ceylon.js.html",nm:"Window"}]},pa:1,mt:"m",an:{doc:["returns the browser window object associated with the document"]},nm:"defaultView"},createRange:{$t:{pk:".",nm:"Range"},pa:1,mt:"m",an:{doc:["create a new range"]},nm:"createRange"},createDocumentFragment:{$t:{pk:".",nm:"DocumentFragment"},pa:1,mt:"m",an:{doc:["creates a document fragment"]},nm:"createDocumentFragment"},getElementsByClassName:{$t:{pk:".",nm:"HTMLCollection"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"names"}]],mt:"m",an:{doc:["returns a collection of elements on the document by the class name"]},nm:"getElementsByClassName"},location:{$t:{md:"com.openswimsoftware.ceylon.js.html",pk:"com.openswimsoftware.ceylon.js.html",nm:"Location"},pa:1,mt:"m",an:{doc:["returns location information about the URL of the document"]},nm:"location"},forms:{$t:{pk:".",nm:"HTMLCollection"},pa:1,mt:"m",an:{doc:["returns a collection of all form elements in the document"]},nm:"forms"},open:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,mt:"m",an:{doc:["opens a document for writing"]},nm:"open"},compatMode:{$t:{pk:".",nm:"CompatMode"},pa:1,mt:"m",an:{doc:["returns the documents compatablity mode"]},nm:"compatMode"}},nm:"DocumentAbs"},loading:{super:{pk:".",nm:"DocumentReadyState"},pa:1,mt:"o",nm:"loading"},documentTypeNode:{super:{pk:".",nm:"NodeType"},pa:1,mt:"o",nm:"documentTypeNode"},atTarget:{super:{pk:".",nm:"EventPhase"},pa:1,mt:"o",nm:"atTarget"},HTMLCollectionAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{item:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Element"}]},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"index"}]],mt:"m",an:{doc:["return the node at the given index"]},nm:"item"},namedItem:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSObject"}]},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"name"}]],mt:"m",an:{doc:["return the node whose id or name matches the passed name"]},nm:"namedItem"},length:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the length of the collection"]},nm:"length"}},nm:"HTMLCollectionAbs"},Range:{super:{pk:".",nm:"RangeAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$k5tfxk:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["DOM range"]},nm:"Range"},NodeIteratorAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{filter:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"NodeFilter"}]},pa:1,mt:"m",an:{doc:["return the iterator filter if any"]},nm:"filter"},nextNode:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Node"}]},pa:1,mt:"m",an:{doc:["return the next node"]},nm:"nextNode"},root:{$t:{pk:".",nm:"Node"},pa:1,mt:"m",an:{doc:["returns the iterators root node"]},nm:"root"},whatToShow:{$t:{nm:"$U"},pa:1,mt:"m",an:{doc:["return long representing what types of nodes the iterator shows"]},nm:"whatToShow"},previousNode:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Node"}]},pa:1,mt:"m",an:{doc:["return the previous node"]},nm:"previousNode"}},nm:"NodeIteratorAbs"},NodeAbs:{super:{nm:"$U"},pa:257,mt:"c",$at:{ownerDocument:{$t:{pk:".",nm:"Document"},pa:1,mt:"g",an:{doc:["returns nodes owning document"]},nm:"ownerDocument"}},$m:{nodeName:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the nodes name"]},nm:"nodeName"},hasChildNodes:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"m",an:{doc:["if the node has children"]},nm:"hasChildNodes"},lookupPrefix:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]}]},mt:"prm",nm:"namespaceURI"}]],mt:"m",an:{doc:["returns the prefix for the given namespaceURI"]},nm:"lookupPrefix"},prefix:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},pa:1,mt:"m",an:{doc:["string of the nodes namespace prefix"]},nm:"prefix"},removeChild:{$t:{pk:".",nm:"Node"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"node"}]],mt:"m",an:{doc:["removes the child node and returns the removed node"]},nm:"removeChild"},nextSibling:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Node"}]},pa:1,mt:"m",an:{doc:["returns the node immediately after this node in the parents child nodes or null if none"]},nm:"nextSibling"},cloneNode:{$t:{pk:".",nm:"Node"},pa:1,ps:[[{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},def:1,mt:"prm",nm:"bool"}]],mt:"m",an:{doc:["clones the current node pass true for deep copy"]},nm:"cloneNode"},insertBefore:{$t:{pk:".",nm:"Node"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"newElement"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Node"}]},mt:"prm",nm:"referenceElement"}]],mt:"m",an:{doc:["insert the passed node to children before the reference node"]},nm:"insertBefore"},firstChild:{$t:{pk:".",nm:"Node"},pa:1,mt:"m",an:{doc:["returns the nodes first child node"]},nm:"firstChild"},lastChild:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Node"}]},pa:1,mt:"m",an:{doc:["returns the last child node of this node"]},nm:"lastChild"},normalize:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,mt:"m",an:{doc:["clean up all the text nodes under this on"]},nm:"normalize"},previousSibling:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Node"}]},pa:1,mt:"m",an:{doc:["returns the node immediately proceding this node in the parents child nodes or null if none"]},nm:"previousSibling"},appendChild:{$t:{pk:".",nm:"Node"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"node"}]],mt:"m",an:{doc:["append the node to the nodes children"]},nm:"appendChild"},replaceChild:{$t:{pk:".",nm:"Node"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"newChild"},{$t:{pk:".",nm:"Node"},mt:"prm",nm:"oldChild"}]],mt:"m",an:{doc:["replaces the old node with the new one and returns the old node"]},nm:"replaceChild"},isDefaultNamespace:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"namespaceURI"}]],mt:"m",an:{doc:["is the passed namespace the default one"]},nm:"isDefaultNamespace"},childNodes:{$t:{pk:".",nm:"NodeList"},pa:1,mt:"m",an:{doc:["returns a list of child nodes"]},nm:"childNodes"},setTextContent:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"content"}]],mt:"m",an:{doc:["set the text content of the node and its descendents"]},nm:"setTextContent"},parentNode:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Node"}]},pa:1,mt:"m",an:{doc:["returns the parent node if any"]},nm:"parentNode"},getTextContent:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},pa:1,mt:"m",an:{doc:["returns the text content of the node and its descendents"]},nm:"getTextContent"},nodeType:{$t:{pk:".",nm:"NodeType"},pa:1,mt:"m",an:{doc:["returns the nodes type"]},nm:"nodeType"},compareDocumentPosition:{$t:{pk:".",nm:"DocumentPosition"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"node"}]],mt:"m",an:{doc:["return the node document position compared to the passed node"]},nm:"compareDocumentPosition"},getNodeValue:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},pa:1,mt:"m",an:{doc:["returns the value of the current node"]},nm:"getNodeValue"},setNodeValue:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"val"}]],mt:"m",an:{doc:["set the value of the current node"]},nm:"setNodeValue"},isEqualNode:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"node"}]],mt:"m",an:{doc:["is the passed node equal to this one"]},nm:"isEqualNode"},baseURI:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the nodes baseURI"]},nm:"baseURI"}},nm:"NodeAbs"},"$pkg-shared":1,css1Compat:{super:{pk:".",nm:"CompatMode"},pa:1,mt:"o",nm:"css1Compat"},CDATASectionAbs:{super:{pk:".",nm:"TextAbs"},pa:257,mt:"c",nm:"CDATASectionAbs"},CharacterData:{super:{pk:".",nm:"CharacterDataAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$1xt7cy:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["a DOM CharacterData segment used by Text, Comment and Processing Instruction"]},nm:"CharacterData"},elementNode:{super:{pk:".",nm:"NodeType"},pa:1,mt:"o",nm:"elementNode"},backCompat:{super:{pk:".",nm:"CompatMode"},pa:1,mt:"o",nm:"backCompat"},NodeType:{super:{md:"ceylon.language",pk:"$",nm:"Basic"},pa:257,ps:[{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"prm",nm:"name"}],mt:"c",of:[{pk:".",nm:"attributeNode"},{pk:".",nm:"cdataSectionNode"},{pk:".",nm:"commentNode"},{pk:".",nm:"documentFragmentNode"},{pk:".",nm:"documentNode"},{pk:".",nm:"documentTypeNode"},{pk:".",nm:"elementNode"},{pk:".",nm:"entityNode"},{pk:".",nm:"entityReferenceNode"},{pk:".",nm:"notationNode"},{pk:".",nm:"processingInstructionNode"},{pk:".",nm:"textNode"}],$at:{name$w7iyws:{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"a",nm:"name"}},an:{doc:["specific NodeType"]},nm:"NodeType"},entityReferenceNode:{super:{pk:".",nm:"NodeType"},pa:1,mt:"o",nm:"entityReferenceNode"},bubblingPhase:{super:{pk:".",nm:"EventPhase"},pa:1,mt:"o",nm:"bubblingPhase"},DocumentFragmentAbs:{super:{pk:".",nm:"NodeAbs"},pa:257,mt:"c",nm:"DocumentFragmentAbs"},cdataSectionNode:{super:{pk:".",nm:"NodeType"},pa:1,mt:"o",nm:"cdataSectionNode"},ProcessingInstruction:{super:{pk:".",nm:"ProcessingInstructionAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$9mu6uy:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["Processing Instruction"]},nm:"ProcessingInstruction"},getWindow:{$t:{md:"com.openswimsoftware.ceylon.js.html",pk:"com.openswimsoftware.ceylon.js.html",nm:"Window"},pa:1,mt:"m",an:{doc:["returns the current browser window"]},nm:"getWindow"},Element:{super:{pk:".",nm:"ElementAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$hosn4f:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["a DOM Element"]},nm:"Element"},DOMImplementation:{super:{pk:".",nm:"DOMImplementationAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$u38qe1:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["a DOMImplementation"]},nm:"DOMImplementation"},processingInstructionNode:{super:{pk:".",nm:"NodeType"},pa:1,mt:"o",nm:"processingInstructionNode"},TextAbs:{super:{pk:".",nm:"CharacterDataAbs"},pa:257,mt:"c",$m:{wholeText:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["get the Text node as a String"]},nm:"wholeText"},splitText:{$t:{pk:".",nm:"Text"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"offset"}]],mt:"m",an:{doc:["split the node in two at the offset"]},nm:"splitText"}},nm:"TextAbs"},ElementAbs:{super:{pk:".",nm:"NodeAbs"},pa:257,mt:"c",$m:{getElementsByTagNameNS:{$t:{pk:".",nm:"HTMLCollection"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"namespace"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},def:1,mt:"prm",nm:"tagName"}]],mt:"m",an:{doc:["get elements on this element by the tagname within the given namespace"]},nm:"getElementsByTagNameNS"},setAttribute:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"name"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"val"}]],mt:"m",an:{doc:["set an attribute on the element"]},nm:"setAttribute"},getAttribute:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"attributeName"}]],mt:"m",an:{doc:["get the value of the attribute on this element"]},nm:"getAttribute"},getAttributeNS:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"namespace"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"attributeName"}]],mt:"m",an:{doc:["get the value of the attribute on this element within the given namespace"]},nm:"getAttributeNS"},hasAttribute:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"attName"}]],mt:"m",an:{doc:["returns if attribute exists the element"]},nm:"hasAttribute"},removeAttributeNS:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"namespace"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"attrName"}]],mt:"m",an:{doc:["remove an attribute on the element within the given namespace"]},nm:"removeAttributeNS"},hasAttributeNS:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"namespace"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"attName"}]],mt:"m",an:{doc:["returns if attribute exists the element within the given namespace"]},nm:"hasAttributeNS"},removeAttribute:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"attrName"}]],mt:"m",an:{doc:["remove an attribute on the element"]},nm:"removeAttribute"},setAttributeNS:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"namespace"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"name"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"val"}]],mt:"m",an:{doc:["set an attribute on the element within the given namespace"]},nm:"setAttributeNS"},tagName:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the elements tag name"]},nm:"tagName"},getElementsByTagName:{$t:{pk:".",nm:"HTMLCollection"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},def:1,mt:"prm",nm:"tagName"}]],mt:"m",an:{doc:["get elements on this element by the tagname"]},nm:"getElementsByTagName"}},nm:"ElementAbs"},EntityReference:{super:{pk:".",nm:"EntityReferenceAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$7i8gyt:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["a DOM EntityReference"]},nm:"EntityReference"},endToStart:{super:{pk:".",nm:"RangeCompareHow"},pa:1,mt:"o",nm:"endToStart"},createEvent:{$t:{pk:".",nm:"Event"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"type"},{$t:{pk:".",nm:"EventInit"},mt:"prm",nm:"options"}]],mt:"m",an:{doc:["create a new Event"]},nm:"createEvent"},CommentAbs:{super:{pk:".",nm:"CharacterDataAbs"},pa:257,mt:"c",nm:"CommentAbs"},NodeListAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{item:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Node"}]},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"index"}]],mt:"m",an:{doc:["returns he node at the given index"]},nm:"item"},length:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns the length of the node collection"]},nm:"length"}},nm:"NodeListAbs"},filterAccept:{super:{pk:".",nm:"NodeFilterResult"},pa:1,mt:"o",nm:"filterAccept"},EventTarget:{super:{pk:".",nm:"EventTargetAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$50c9li:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["a DOM EventTarget"]},nm:"EventTarget"},DocumentFragment:{super:{pk:".",nm:"DocumentFragmentAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$2j5bbq:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["a DOM DocumentFragment"]},nm:"DocumentFragment"},commentNode:{super:{pk:".",nm:"NodeType"},pa:1,mt:"o",nm:"commentNode"},AttrAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{getValue:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the Attr value string"]},nm:"getValue"},isId:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"m",an:{doc:["returns the Attr is an ID or not"]},nm:"isId"},setValue:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"val"}]],mt:"m",an:{doc:["sets the Attr value string"]},nm:"setValue"},name:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the Attr name"]},nm:"name"}},nm:"AttrAbs"},DocumentPosition:{super:{md:"ceylon.language",pk:"$",nm:"Basic"},pa:257,ps:[{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"prm",nm:"name"}],mt:"c",of:[{pk:".",nm:"documentPositionContainedBy"},{pk:".",nm:"documentPositionContains"},{pk:".",nm:"documentPositionDisconnected"},{pk:".",nm:"documentPositionFollowing"},{pk:".",nm:"documentPositionImplementationSpecific"},{pk:".",nm:"documentPositionPreceding"}],$at:{name$eugcgc:{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"a",nm:"name"}},an:{doc:["Document Positon Type"]},nm:"DocumentPosition"},EntityReferenceAbs:{super:{pk:".",nm:"NodeAbs"},pa:257,mt:"c",nm:"EntityReferenceAbs"},NodeIterator:{super:{pk:".",nm:"NodeIteratorAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$fzb1q5:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["a DOM NodeIterator"]},nm:"NodeIterator"},Comment:{super:{pk:".",nm:"CommentAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$fl4piu:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["a DOM comment"]},nm:"Comment"},notationNode:{super:{pk:".",nm:"NodeType"},pa:1,mt:"o",nm:"notationNode"},TreeWalkerAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{filter:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"NodeFilter"}]},pa:1,mt:"m",an:{doc:["returns the node filter used to select the tree nodes"]},nm:"filter"},firstChild:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Node"}]},pa:1,mt:"m",an:{doc:["move the tree to the first child of the current node"]},nm:"firstChild"},lastChild:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Node"}]},pa:1,mt:"m",an:{doc:["move the tree to the last child of the current node"]},nm:"lastChild"},nextNode:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Node"}]},pa:1,mt:"m",an:{doc:["move the tree to the next node and returns"]},nm:"nextNode"},root:{$t:{pk:".",nm:"Node"},pa:1,mt:"m",an:{doc:["returns the node where the tree walker was created"]},nm:"root"},currentNode:{$t:{pk:".",nm:"Node"},pa:1,mt:"m",an:{doc:["returns the current document node"]},nm:"currentNode"},previousSibling:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Node"}]},pa:1,mt:"m",an:{doc:["move the tree to the current nodes previous sibling"]},nm:"previousSibling"},parentNode:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Node"}]},pa:1,mt:"m",an:{doc:["move the tree to the first node in the document order"]},nm:"parentNode"},nextSibling:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Node"}]},pa:1,mt:"m",an:{doc:["move the tree to the current nodes next sibling"]},nm:"nextSibling"},whatToShow:{$t:{nm:"$U"},pa:1,mt:"m",an:{doc:["returns what type of nodes are present on the tree"]},nm:"whatToShow"},previousNode:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"Node"}]},pa:1,mt:"m",an:{doc:["move the tree to the previous node and returns"]},nm:"previousNode"}},nm:"TreeWalkerAbs"},EventTargetAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{removeEventListener:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"type"},{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{pk:".",nm:"Event"},mt:"prm",nm:"event"}]],mt:"prm",$pt:"f",nm:"callback"},{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},def:1,mt:"prm",nm:"capture"}]],mt:"m",$m:{callback$4c898j:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{pk:".",nm:"Event"},mt:"prm",nm:"event"}]],mt:"m",nm:"callback"}},an:{doc:["remove an event listener from the target"]},nm:"removeEventListener"},dispatchEvent:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{pk:".",nm:"Event"},mt:"prm",nm:"event"}]],mt:"m",an:{doc:["dispatch an event at the target"]},nm:"dispatchEvent"},addEventListener:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"String"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"}]},mt:"prm",nm:"type"},{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{pk:".",nm:"Event"},mt:"prm",nm:"event"}]],mt:"prm",$pt:"f",nm:"callback"},{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},def:1,mt:"prm",nm:"capture"}]],mt:"m",$m:{callback$qto4iq:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},ps:[[{$t:{pk:".",nm:"Event"},mt:"prm",nm:"event"}]],mt:"m",nm:"callback"}},an:{doc:["add an event listener to the target"]},nm:"addEventListener"}},nm:"EventTargetAbs"},textNode:{super:{pk:".",nm:"NodeType"},pa:1,mt:"o",nm:"textNode"},RangeCompareHow:{super:{md:"ceylon.language",pk:"$",nm:"Basic"},pa:257,ps:[{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"prm",nm:"name"}],mt:"c",of:[{pk:".",nm:"endToEnd"},{pk:".",nm:"endToStart"},{pk:".",nm:"startToEnd"},{pk:".",nm:"startToStart"}],$at:{name$yvbjrk:{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"a",nm:"name"}},an:{doc:["how to comare ranges"]},nm:"RangeCompareHow"},startToStart:{super:{pk:".",nm:"RangeCompareHow"},pa:1,mt:"o",nm:"startToStart"},EventInit:{super:{md:"ceylon.language",pk:"$",nm:"Basic"},pa:1,ps:[{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"prm",nm:"bubbles"},{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"prm",nm:"cancelable"}],mt:"c",$at:{cancelable:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"a",nm:"cancelable"},bubbles:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"a",nm:"bubbles"}},$m:{toJson:{$t:{md:"com.openswimsoftware.ceylon.js.json",pk:"com.openswimsoftware.ceylon.js.json",nm:"JSJSON"},pa:1,mt:"m",an:{doc:["convert to native JSON"]},nm:"toJson"}},an:{doc:["Event creation options"]},nm:"EventInit"},CompatMode:{super:{md:"ceylon.language",pk:"$",nm:"Basic"},pa:257,ps:[{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"prm",nm:"name"}],mt:"c",of:[{pk:".",nm:"css1Compat"},{pk:".",nm:"backCompat"}],$at:{name$r6u0y3:{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"a",nm:"name"}},an:{doc:["Document Compatablity Mode"]},nm:"CompatMode"},DocumentType:{super:{pk:".",nm:"DocumentTypeAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$mbbj68:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["a DocumentType"]},nm:"DocumentType"},Text:{super:{pk:".",nm:"TextAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{n$aivirs:{$t:{nm:"$U"},mt:"a",nm:"n"},native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},an:{doc:["a DOM Text element"]},nm:"Text"},DocumentTypeAbs:{super:{pk:".",nm:"NodeAbs"},pa:257,mt:"c",$m:{systemId:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the document types system id string"]},nm:"systemId"},name:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the document type name"]},nm:"name"},publicId:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the document types public id string"]},nm:"publicId"}},nm:"DocumentTypeAbs"},rtl:{super:{pk:".",nm:"DocumentDirection"},pa:1,mt:"o",nm:"rtl"},ltr:{super:{pk:".",nm:"DocumentDirection"},pa:1,mt:"o",nm:"ltr"},documentPositionImplementationSpecific:{super:{pk:".",nm:"DocumentPosition"},pa:1,mt:"o",nm:"documentPositionImplementationSpecific"},EventAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{timeStamp:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSDate"},pa:1,mt:"m",an:{doc:["returns the time the event was created"]},nm:"timeStamp"},eventPhase:{$t:{pk:".",nm:"EventPhase"},pa:1,mt:"m",an:{doc:["returns current event phase"]},nm:"eventPhase"},cancelable:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"m",an:{doc:["is the event cancelable or not"]},nm:"cancelable"},currentTarget:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"EventTarget"}]},pa:1,mt:"m",an:{doc:["returns the current event target"]},nm:"currentTarget"},stopImmediatePropagation:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,mt:"m",an:{doc:["returns the event propagation immidately"]},nm:"stopImmediatePropagation"},defaultPrevented:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"m",an:{doc:["has the default been prevented"]},nm:"defaultPrevented"},stopPropagation:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,mt:"m",an:{doc:["stops event propagation through further DOM elements"]},nm:"stopPropagation"},bubbles:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"m",an:{doc:["does the event bubble through the dom or not"]},nm:"bubbles"},type:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSString"},pa:1,mt:"m",an:{doc:["returns the Event type"]},nm:"type"},preventDefault:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,mt:"m",an:{doc:["cancels the event if it is cancelable"]},nm:"preventDefault"},isTrusted:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"m",an:{doc:["was the event created by the browser or a script"]},nm:"isTrusted"},target:{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{pk:".",nm:"EventTarget"}]},pa:1,mt:"m",an:{doc:["returns the event target"]},nm:"target"}},nm:"EventAbs"},Event:{super:{pk:".",nm:"EventAbs"},pa:1,ps:[{$t:{nm:"$U"},mt:"prm",nm:"n"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"},n$w8jm71:{$t:{nm:"$U"},mt:"a",nm:"n"}},an:{doc:["a DOM Event"]},nm:"Event"},endToEnd:{super:{pk:".",nm:"RangeCompareHow"},pa:1,mt:"o",nm:"endToEnd"},RangeAbs:{super:{nm:"$U"},pa:257,mt:"c",$m:{cloneRange:{$t:{pk:".",nm:"Range"},pa:1,mt:"m",an:{doc:["clone the range"]},nm:"cloneRange"},endOffset:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns a number where the container range ends"]},nm:"endOffset"},collapsed:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,mt:"m",an:{doc:["is the start and end nodes the same node"]},nm:"collapsed"},extractContents:{$t:{pk:".",nm:"DocumentFragment"},pa:1,mt:"m",an:{doc:["move the contents of the range from their document to a new document fragment"]},nm:"extractContents"},setEndBefore:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"refNode"}]],mt:"m",an:{doc:["set the end position of the range relative to the given node"]},nm:"setEndBefore"},insertNode:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"newNode"}]],mt:"m",an:{doc:["insert a node at the start of the range"]},nm:"insertNode"},cloneContents:{$t:{pk:".",nm:"DocumentFragment"},pa:1,mt:"m",an:{doc:["creates a new document copying the nodes inside of the range"]},nm:"cloneContents"},setStartAfter:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"refNode"}]],mt:"m",an:{doc:["set the start position of the range relative to the given node"]},nm:"setStartAfter"},isPointInRange:{$t:{md:"ceylon.language",pk:"$",nm:"Boolean"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"node"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"offset"}]],mt:"m",an:{doc:["is the the current point in the range"]},nm:"isPointInRange"},startOffset:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"},pa:1,mt:"m",an:{doc:["returns a number where the container range begins"]},nm:"startOffset"},surroundContents:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"newNode"}]],mt:"m",an:{doc:["move the contents of the range into the new node"]},nm:"surroundContents"},deleteContents:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,mt:"m",an:{doc:["remove the contents of range from the document"]},nm:"deleteContents"},setStart:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"startNode"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"startOffset"}]],mt:"m",an:{doc:["set the start position of the range"]},nm:"setStart"},selectNode:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"refNode"}]],mt:"m",an:{doc:["set the range to contain node and its contents"]},nm:"selectNode"},selectNodeContents:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"refNode"}]],mt:"m",an:{doc:["set the range to contain the contents of the given node"]},nm:"selectNodeContents"},endContainer:{$t:{pk:".",nm:"Node"},pa:1,mt:"m",an:{doc:["returns the node where the container range ends"]},nm:"endContainer"},detach:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,mt:"m",an:{doc:["detach a range from use to free resources"]},nm:"detach"},setStartBefore:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"refNode"}]],mt:"m",an:{doc:["set the start position of the range relative to the given node"]},nm:"setStartBefore"},commonAncestorContainer:{$t:{pk:".",nm:"Node"},pa:1,mt:"m",an:{doc:["returns the deepest Node that contains the startContainer and endContainer nodes"]},nm:"commonAncestorContainer"},setEnd:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"endNode"},{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Integer"},{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"}]},mt:"prm",nm:"endOffset"}]],mt:"m",an:{doc:["set the end position of the range"]},nm:"setEnd"},setEndAfter:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"refNode"}]],mt:"m",an:{doc:["set the end position of the range relative to the given node"]},nm:"setEndAfter"},compareBoundaryPoints:{$t:{md:"com.openswimsoftware.ceylon.js.language",pk:"com.openswimsoftware.ceylon.js.language",nm:"JSNumber"},pa:1,ps:[[{$t:{pk:".",nm:"RangeCompareHow"},mt:"prm",nm:"how"},{$t:{pk:".",nm:"Range"},mt:"prm",nm:"sourceRange"}]],mt:"m",an:{doc:["compare the boundery points of one range with another"]},nm:"compareBoundaryPoints"},startContainer:{$t:{pk:".",nm:"Node"},pa:1,mt:"m",an:{doc:["returns the node where the container range begins"]},nm:"startContainer"},collapse:{$t:{md:"ceylon.language",pk:"$",nm:"Anything"},pa:1,ps:[[{$t:{comp:"u",l:[{md:"ceylon.language",pk:"$",nm:"Null"},{md:"ceylon.language",pk:"$",nm:"Boolean"}]},def:1,mt:"prm",nm:"toStart"}]],mt:"m",an:{doc:["collapses the range to one of its boundery points"]},nm:"collapse"}},nm:"RangeAbs"},filterSkip:{super:{pk:".",nm:"NodeFilterResult"},pa:1,mt:"o",nm:"filterSkip"},complete:{super:{pk:".",nm:"DocumentReadyState"},pa:1,mt:"o",nm:"complete"},DocumentReadyState:{super:{md:"ceylon.language",pk:"$",nm:"Basic"},pa:257,ps:[{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"prm",nm:"name"}],mt:"c",of:[{pk:".",nm:"loading"},{pk:".",nm:"interactive"},{pk:".",nm:"complete"}],$at:{name$dqvu0p:{$t:{md:"ceylon.language",pk:"$",nm:"String"},mt:"a",nm:"name"}},an:{doc:["Document Ready State"]},nm:"DocumentReadyState"},NodeFilter:{super:{md:"ceylon.language",pk:"$",nm:"Basic"},pa:1,ps:[{$t:{pk:".",nm:"NodeFilterResult"},ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"n"}]],mt:"prm",$pt:"f",nm:"acceptNode"}],mt:"c",$at:{native:{$t:{nm:"$U"},pa:3,mt:"a",nm:"native"}},$m:{acceptNode$1yslkp:{$t:{pk:".",nm:"NodeFilterResult"},ps:[[{$t:{pk:".",nm:"Node"},mt:"prm",nm:"n"}]],mt:"m",nm:"acceptNode"}},an:{doc:["Node Filter"]},nm:"NodeFilter"}},"$mod-bin":"7.0","$mod-name":"com.openswimsoftware.ceylon.js.dom"};
ex$.$CCMM$=function(){return $CCMM$;};
var m$3g8=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$3g8.$addmod$(m$3g8,'ceylon.language/1.1.0');
ex$.$pkg$ans$com$openswimsoftware$ceylon$js$dom$stylesheets=function(){return[m$3g8.shared()];};
ex$.$pkg$ans$com$openswimsoftware$ceylon$js$dom=function(){return[m$3g8.shared()];};
ex$.$mod$ans$=function(){return[m$3g8.doc("based on the DOM 4 working draft and Mozilla WebAPIs")];};
ex$.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.language/1.8.0':function(){return[m$3g8.shared()];},
'com.openswimsoftware.ceylon.js.html/5.0.0':function(){return[m$3g8.shared()];},
'com.openswimsoftware.ceylon.js.json/1.0.0':function(){return[m$3g8.shared()];}
};};
var m$3ga=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
m$3g8.$addmod$(m$3ga,'com.openswimsoftware.ceylon.js.language/1.8.0');

//ClassDef CDATASectionAbs at text.ceylon (3:0-3:59)
function CDATASectionAbs(cDATASectionAbs$){
    $init$CDATASectionAbs();
    if(cDATASectionAbs$===undefined)m$3g8.throwexc(m$3g8.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    TextAbs(cDATASectionAbs$);
    return cDATASectionAbs$;
}
CDATASectionAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:TextAbs},ps:[],pa:257,d:['com.openswimsoftware.ceylon.js.dom','CDATASectionAbs']};};
ex$.CDATASectionAbs=CDATASectionAbs;
function $init$CDATASectionAbs(){
    if(CDATASectionAbs.$$===undefined){
        m$3g8.initTypeProto(CDATASectionAbs,'com.openswimsoftware.ceylon.js.dom::CDATASectionAbs',$init$TextAbs());
    }
    return CDATASectionAbs;
}
ex$.$init$CDATASectionAbs=$init$CDATASectionAbs;
$init$CDATASectionAbs();
var m$3h7=require('com/openswimsoftware/ceylon/js/html/5.0.0/com.openswimsoftware.ceylon.js.html-5.0.0');
m$3g8.$addmod$(m$3h7,'com.openswimsoftware.ceylon.js.html/5.0.0');

//ClassDef DocumentPosition at document.ceylon (5:0-8:80)
function DocumentPosition($3h8,documentPosition$){
    $init$DocumentPosition();
    if(documentPosition$===undefined)m$3g8.throwexc(m$3g8.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    documentPosition$.$3h8_=$3h8;
    return documentPosition$;
}
DocumentPosition.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3g8.Basic},ps:[{nm:'name',mt:'prm',$t:{t:m$3g8.$_String}}],of:[$prop$get$3h9,$prop$get$3ha,$prop$get$3hb,$prop$get$3hc,$prop$get$3hd,$prop$get$3he],pa:257,an:function(){return[m$3g8.doc("Document Positon Type")];},d:['com.openswimsoftware.ceylon.js.dom','DocumentPosition']};};
ex$.DocumentPosition=DocumentPosition;
function $init$DocumentPosition(){
    if(DocumentPosition.$$===undefined){
        m$3g8.initTypeProto(DocumentPosition,'com.openswimsoftware.ceylon.js.dom::DocumentPosition',m$3g8.Basic);
        (function(documentPosition$){
            m$3g8.atr$(documentPosition$,'$3h8',function(){return this.$3h8_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3g8.$_String},$cont:DocumentPosition,d:['com.openswimsoftware.ceylon.js.dom','DocumentPosition','$at','name$eugcgc']};});
        })(DocumentPosition.$$.prototype);
    }
    return DocumentPosition;
}
ex$.$init$DocumentPosition=$init$DocumentPosition;
$init$DocumentPosition();

//ObjectDef documentPositionContainedBy at document.ceylon (10:0-10:99)
function $3h9(){
    var documentPositionContainedBy$=new $3h9.$$;DocumentPosition("documentPositionContainedBy",documentPositionContainedBy$);
    return documentPositionContainedBy$;
};$3h9.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentPosition},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentPositionContainedBy']};};
function $init$$3h9(){
    if($3h9.$$===undefined){
        m$3g8.initTypeProto($3h9,'com.openswimsoftware.ceylon.js.dom::documentPositionContainedBy',$init$DocumentPosition());
    }
    return $3h9;
}
ex$.$init$$3h9=$init$$3h9;
$init$$3h9();
var $3hf;
function getDocumentPositionContainedBy(){
    if($3hf===undefined){$3hf=$init$$3h9()();$3hf.$crtmm$=getDocumentPositionContainedBy.$crtmm$;}
    return $3hf;
}
ex$.getDocumentPositionContainedBy=getDocumentPositionContainedBy;
getDocumentPositionContainedBy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3h9},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentPositionContainedBy']};};
$prop$getDocumentPositionContainedBy={get:getDocumentPositionContainedBy,$crtmm$:getDocumentPositionContainedBy.$crtmm$};
get$3h9=getDocumentPositionContainedBy;$prop$get$3h9=getDocumentPositionContainedBy;
ex$.$prop$getDocumentPositionContainedBy=$prop$getDocumentPositionContainedBy;

//ObjectDef documentPositionContains at document.ceylon (11:0-11:93)
function $3ha(){
    var documentPositionContains$=new $3ha.$$;DocumentPosition("documentPositionContains",documentPositionContains$);
    return documentPositionContains$;
};$3ha.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentPosition},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentPositionContains']};};
function $init$$3ha(){
    if($3ha.$$===undefined){
        m$3g8.initTypeProto($3ha,'com.openswimsoftware.ceylon.js.dom::documentPositionContains',$init$DocumentPosition());
    }
    return $3ha;
}
ex$.$init$$3ha=$init$$3ha;
$init$$3ha();
var $3hg;
function getDocumentPositionContains(){
    if($3hg===undefined){$3hg=$init$$3ha()();$3hg.$crtmm$=getDocumentPositionContains.$crtmm$;}
    return $3hg;
}
ex$.getDocumentPositionContains=getDocumentPositionContains;
getDocumentPositionContains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3ha},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentPositionContains']};};
$prop$getDocumentPositionContains={get:getDocumentPositionContains,$crtmm$:getDocumentPositionContains.$crtmm$};
get$3ha=getDocumentPositionContains;$prop$get$3ha=getDocumentPositionContains;
ex$.$prop$getDocumentPositionContains=$prop$getDocumentPositionContains;

//ObjectDef documentPositionDisconnected at document.ceylon (12:0-12:101)
function $3hb(){
    var documentPositionDisconnected$=new $3hb.$$;DocumentPosition("documentPositionDisconnected",documentPositionDisconnected$);
    return documentPositionDisconnected$;
};$3hb.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentPosition},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentPositionDisconnected']};};
function $init$$3hb(){
    if($3hb.$$===undefined){
        m$3g8.initTypeProto($3hb,'com.openswimsoftware.ceylon.js.dom::documentPositionDisconnected',$init$DocumentPosition());
    }
    return $3hb;
}
ex$.$init$$3hb=$init$$3hb;
$init$$3hb();
var $3hh;
function getDocumentPositionDisconnected(){
    if($3hh===undefined){$3hh=$init$$3hb()();$3hh.$crtmm$=getDocumentPositionDisconnected.$crtmm$;}
    return $3hh;
}
ex$.getDocumentPositionDisconnected=getDocumentPositionDisconnected;
getDocumentPositionDisconnected.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3hb},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentPositionDisconnected']};};
$prop$getDocumentPositionDisconnected={get:getDocumentPositionDisconnected,$crtmm$:getDocumentPositionDisconnected.$crtmm$};
get$3hb=getDocumentPositionDisconnected;$prop$get$3hb=getDocumentPositionDisconnected;
ex$.$prop$getDocumentPositionDisconnected=$prop$getDocumentPositionDisconnected;

//ObjectDef documentPositionFollowing at document.ceylon (13:0-13:95)
function $3hc(){
    var documentPositionFollowing$=new $3hc.$$;DocumentPosition("documentPositionFollowing",documentPositionFollowing$);
    return documentPositionFollowing$;
};$3hc.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentPosition},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentPositionFollowing']};};
function $init$$3hc(){
    if($3hc.$$===undefined){
        m$3g8.initTypeProto($3hc,'com.openswimsoftware.ceylon.js.dom::documentPositionFollowing',$init$DocumentPosition());
    }
    return $3hc;
}
ex$.$init$$3hc=$init$$3hc;
$init$$3hc();
var $3hi;
function getDocumentPositionFollowing(){
    if($3hi===undefined){$3hi=$init$$3hc()();$3hi.$crtmm$=getDocumentPositionFollowing.$crtmm$;}
    return $3hi;
}
ex$.getDocumentPositionFollowing=getDocumentPositionFollowing;
getDocumentPositionFollowing.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3hc},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentPositionFollowing']};};
$prop$getDocumentPositionFollowing={get:getDocumentPositionFollowing,$crtmm$:getDocumentPositionFollowing.$crtmm$};
get$3hc=getDocumentPositionFollowing;$prop$get$3hc=getDocumentPositionFollowing;
ex$.$prop$getDocumentPositionFollowing=$prop$getDocumentPositionFollowing;

//ObjectDef documentPositionImplementationSpecific at document.ceylon (14:0-14:121)
function $3hd(){
    var documentPositionImplementationSpecific$=new $3hd.$$;DocumentPosition("documentPositionImplementationSpecific",documentPositionImplementationSpecific$);
    return documentPositionImplementationSpecific$;
};$3hd.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentPosition},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentPositionImplementationSpecific']};};
function $init$$3hd(){
    if($3hd.$$===undefined){
        m$3g8.initTypeProto($3hd,'com.openswimsoftware.ceylon.js.dom::documentPositionImplementationSpecific',$init$DocumentPosition());
    }
    return $3hd;
}
ex$.$init$$3hd=$init$$3hd;
$init$$3hd();
var $3hj;
function getDocumentPositionImplementationSpecific(){
    if($3hj===undefined){$3hj=$init$$3hd()();$3hj.$crtmm$=getDocumentPositionImplementationSpecific.$crtmm$;}
    return $3hj;
}
ex$.getDocumentPositionImplementationSpecific=getDocumentPositionImplementationSpecific;
getDocumentPositionImplementationSpecific.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3hd},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentPositionImplementationSpecific']};};
$prop$getDocumentPositionImplementationSpecific={get:getDocumentPositionImplementationSpecific,$crtmm$:getDocumentPositionImplementationSpecific.$crtmm$};
get$3hd=getDocumentPositionImplementationSpecific;$prop$get$3hd=getDocumentPositionImplementationSpecific;
ex$.$prop$getDocumentPositionImplementationSpecific=$prop$getDocumentPositionImplementationSpecific;

//ObjectDef documentPositionPreceding at document.ceylon (15:0-15:95)
function $3he(){
    var documentPositionPreceding$=new $3he.$$;DocumentPosition("documentPositionPreceding",documentPositionPreceding$);
    return documentPositionPreceding$;
};$3he.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentPosition},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentPositionPreceding']};};
function $init$$3he(){
    if($3he.$$===undefined){
        m$3g8.initTypeProto($3he,'com.openswimsoftware.ceylon.js.dom::documentPositionPreceding',$init$DocumentPosition());
    }
    return $3he;
}
ex$.$init$$3he=$init$$3he;
$init$$3he();
var $3hk;
function getDocumentPositionPreceding(){
    if($3hk===undefined){$3hk=$init$$3he()();$3hk.$crtmm$=getDocumentPositionPreceding.$crtmm$;}
    return $3hk;
}
ex$.getDocumentPositionPreceding=getDocumentPositionPreceding;
getDocumentPositionPreceding.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3he},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentPositionPreceding']};};
$prop$getDocumentPositionPreceding={get:getDocumentPositionPreceding,$crtmm$:getDocumentPositionPreceding.$crtmm$};
get$3he=getDocumentPositionPreceding;$prop$get$3he=getDocumentPositionPreceding;
ex$.$prop$getDocumentPositionPreceding=$prop$getDocumentPositionPreceding;

//ClassDef CompatMode at document.ceylon (17:0-18:74)
function CompatMode($3hl,compatMode$){
    $init$CompatMode();
    if(compatMode$===undefined)m$3g8.throwexc(m$3g8.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    compatMode$.$3hl_=$3hl;
    return compatMode$;
}
CompatMode.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3g8.Basic},ps:[{nm:'name',mt:'prm',$t:{t:m$3g8.$_String}}],of:[$prop$get$3hm,$prop$get$3hn],pa:257,an:function(){return[m$3g8.doc("Document Compatablity Mode")];},d:['com.openswimsoftware.ceylon.js.dom','CompatMode']};};
ex$.CompatMode=CompatMode;
function $init$CompatMode(){
    if(CompatMode.$$===undefined){
        m$3g8.initTypeProto(CompatMode,'com.openswimsoftware.ceylon.js.dom::CompatMode',m$3g8.Basic);
        (function(compatMode$){
            m$3g8.atr$(compatMode$,'$3hl',function(){return this.$3hl_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3g8.$_String},$cont:CompatMode,d:['com.openswimsoftware.ceylon.js.dom','CompatMode','$at','name$r6u0y3']};});
        })(CompatMode.$$.prototype);
    }
    return CompatMode;
}
ex$.$init$CompatMode=$init$CompatMode;
$init$CompatMode();

//ObjectDef css1Compat at document.ceylon (20:0-20:59)
function $3hm(){
    var css1Compat$=new $3hm.$$;CompatMode("CSS1Compat",css1Compat$);
    return css1Compat$;
};$3hm.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CompatMode},pa:1,d:['com.openswimsoftware.ceylon.js.dom','css1Compat']};};
function $init$$3hm(){
    if($3hm.$$===undefined){
        m$3g8.initTypeProto($3hm,'com.openswimsoftware.ceylon.js.dom::css1Compat',$init$CompatMode());
    }
    return $3hm;
}
ex$.$init$$3hm=$init$$3hm;
$init$$3hm();
var $3ho;
function getCss1Compat(){
    if($3ho===undefined){$3ho=$init$$3hm()();$3ho.$crtmm$=getCss1Compat.$crtmm$;}
    return $3ho;
}
ex$.getCss1Compat=getCss1Compat;
getCss1Compat.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3hm},pa:1,d:['com.openswimsoftware.ceylon.js.dom','css1Compat']};};
$prop$getCss1Compat={get:getCss1Compat,$crtmm$:getCss1Compat.$crtmm$};
get$3hm=getCss1Compat;$prop$get$3hm=getCss1Compat;
ex$.$prop$getCss1Compat=$prop$getCss1Compat;

//ObjectDef backCompat at document.ceylon (21:0-21:59)
function $3hn(){
    var backCompat$=new $3hn.$$;CompatMode("BackCompat",backCompat$);
    return backCompat$;
};$3hn.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CompatMode},pa:1,d:['com.openswimsoftware.ceylon.js.dom','backCompat']};};
function $init$$3hn(){
    if($3hn.$$===undefined){
        m$3g8.initTypeProto($3hn,'com.openswimsoftware.ceylon.js.dom::backCompat',$init$CompatMode());
    }
    return $3hn;
}
ex$.$init$$3hn=$init$$3hn;
$init$$3hn();
var $3hp;
function getBackCompat(){
    if($3hp===undefined){$3hp=$init$$3hn()();$3hp.$crtmm$=getBackCompat.$crtmm$;}
    return $3hp;
}
ex$.getBackCompat=getBackCompat;
getBackCompat.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3hn},pa:1,d:['com.openswimsoftware.ceylon.js.dom','backCompat']};};
$prop$getBackCompat={get:getBackCompat,$crtmm$:getBackCompat.$crtmm$};
get$3hn=getBackCompat;$prop$get$3hn=getBackCompat;
ex$.$prop$getBackCompat=$prop$getBackCompat;

//ClassDef DocumentDirection at document.ceylon (23:0-24:67)
function DocumentDirection($3hq,documentDirection$){
    $init$DocumentDirection();
    if(documentDirection$===undefined)m$3g8.throwexc(m$3g8.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    documentDirection$.$3hq_=$3hq;
    return documentDirection$;
}
DocumentDirection.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3g8.Basic},ps:[{nm:'name',mt:'prm',$t:{t:m$3g8.$_String}}],of:[$prop$get$3hr,$prop$get$3hs],pa:257,an:function(){return[m$3g8.doc("Document Direction")];},d:['com.openswimsoftware.ceylon.js.dom','DocumentDirection']};};
ex$.DocumentDirection=DocumentDirection;
function $init$DocumentDirection(){
    if(DocumentDirection.$$===undefined){
        m$3g8.initTypeProto(DocumentDirection,'com.openswimsoftware.ceylon.js.dom::DocumentDirection',m$3g8.Basic);
        (function(documentDirection$){
            m$3g8.atr$(documentDirection$,'$3hq',function(){return this.$3hq_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3g8.$_String},$cont:DocumentDirection,d:['com.openswimsoftware.ceylon.js.dom','DocumentDirection','$at','name$6vynec']};});
        })(DocumentDirection.$$.prototype);
    }
    return DocumentDirection;
}
ex$.$init$DocumentDirection=$init$DocumentDirection;
$init$DocumentDirection();

//ObjectDef rtl at document.ceylon (26:0-26:52)
function $3hr(){
    var rtl$=new $3hr.$$;DocumentDirection("rtl",rtl$);
    return rtl$;
};$3hr.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentDirection},pa:1,d:['com.openswimsoftware.ceylon.js.dom','rtl']};};
function $init$$3hr(){
    if($3hr.$$===undefined){
        m$3g8.initTypeProto($3hr,'com.openswimsoftware.ceylon.js.dom::rtl',$init$DocumentDirection());
    }
    return $3hr;
}
ex$.$init$$3hr=$init$$3hr;
$init$$3hr();
var $3ht;
function getRtl(){
    if($3ht===undefined){$3ht=$init$$3hr()();$3ht.$crtmm$=getRtl.$crtmm$;}
    return $3ht;
}
ex$.getRtl=getRtl;
getRtl.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3hr},pa:1,d:['com.openswimsoftware.ceylon.js.dom','rtl']};};
$prop$getRtl={get:getRtl,$crtmm$:getRtl.$crtmm$};
get$3hr=getRtl;$prop$get$3hr=getRtl;
ex$.$prop$getRtl=$prop$getRtl;

//ObjectDef ltr at document.ceylon (27:0-27:52)
function $3hs(){
    var ltr$=new $3hs.$$;DocumentDirection("ltr",ltr$);
    return ltr$;
};$3hs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentDirection},pa:1,d:['com.openswimsoftware.ceylon.js.dom','ltr']};};
function $init$$3hs(){
    if($3hs.$$===undefined){
        m$3g8.initTypeProto($3hs,'com.openswimsoftware.ceylon.js.dom::ltr',$init$DocumentDirection());
    }
    return $3hs;
}
ex$.$init$$3hs=$init$$3hs;
$init$$3hs();
var $3hu;
function getLtr(){
    if($3hu===undefined){$3hu=$init$$3hs()();$3hu.$crtmm$=getLtr.$crtmm$;}
    return $3hu;
}
ex$.getLtr=getLtr;
getLtr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3hs},pa:1,d:['com.openswimsoftware.ceylon.js.dom','ltr']};};
$prop$getLtr={get:getLtr,$crtmm$:getLtr.$crtmm$};
get$3hs=getLtr;$prop$get$3hs=getLtr;
ex$.$prop$getLtr=$prop$getLtr;

//ClassDef DocumentReadyState at document.ceylon (29:0-30:91)
function DocumentReadyState($3hv,documentReadyState$){
    $init$DocumentReadyState();
    if(documentReadyState$===undefined)m$3g8.throwexc(m$3g8.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    documentReadyState$.$3hv_=$3hv;
    return documentReadyState$;
}
DocumentReadyState.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3g8.Basic},ps:[{nm:'name',mt:'prm',$t:{t:m$3g8.$_String}}],of:[$prop$get$3hw,$prop$get$3hx,$prop$get$3hy],pa:257,an:function(){return[m$3g8.doc("Document Ready State")];},d:['com.openswimsoftware.ceylon.js.dom','DocumentReadyState']};};
ex$.DocumentReadyState=DocumentReadyState;
function $init$DocumentReadyState(){
    if(DocumentReadyState.$$===undefined){
        m$3g8.initTypeProto(DocumentReadyState,'com.openswimsoftware.ceylon.js.dom::DocumentReadyState',m$3g8.Basic);
        (function(documentReadyState$){
            m$3g8.atr$(documentReadyState$,'$3hv',function(){return this.$3hv_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3g8.$_String},$cont:DocumentReadyState,d:['com.openswimsoftware.ceylon.js.dom','DocumentReadyState','$at','name$dqvu0p']};});
        })(DocumentReadyState.$$.prototype);
    }
    return DocumentReadyState;
}
ex$.$init$DocumentReadyState=$init$DocumentReadyState;
$init$DocumentReadyState();

//ObjectDef loading at document.ceylon (32:0-32:61)
function $3hw(){
    var loading$=new $3hw.$$;DocumentReadyState("loading",loading$);
    return loading$;
};$3hw.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentReadyState},pa:1,d:['com.openswimsoftware.ceylon.js.dom','loading']};};
function $init$$3hw(){
    if($3hw.$$===undefined){
        m$3g8.initTypeProto($3hw,'com.openswimsoftware.ceylon.js.dom::loading',$init$DocumentReadyState());
    }
    return $3hw;
}
ex$.$init$$3hw=$init$$3hw;
$init$$3hw();
var $3hz;
function getLoading(){
    if($3hz===undefined){$3hz=$init$$3hw()();$3hz.$crtmm$=getLoading.$crtmm$;}
    return $3hz;
}
ex$.getLoading=getLoading;
getLoading.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3hw},pa:1,d:['com.openswimsoftware.ceylon.js.dom','loading']};};
$prop$getLoading={get:getLoading,$crtmm$:getLoading.$crtmm$};
get$3hw=getLoading;$prop$get$3hw=getLoading;
ex$.$prop$getLoading=$prop$getLoading;

//ObjectDef interactive at document.ceylon (33:0-33:69)
function $3hx(){
    var interactive$=new $3hx.$$;DocumentReadyState("interactive",interactive$);
    return interactive$;
};$3hx.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentReadyState},pa:1,d:['com.openswimsoftware.ceylon.js.dom','interactive']};};
function $init$$3hx(){
    if($3hx.$$===undefined){
        m$3g8.initTypeProto($3hx,'com.openswimsoftware.ceylon.js.dom::interactive',$init$DocumentReadyState());
    }
    return $3hx;
}
ex$.$init$$3hx=$init$$3hx;
$init$$3hx();
var $3i0;
function getInteractive(){
    if($3i0===undefined){$3i0=$init$$3hx()();$3i0.$crtmm$=getInteractive.$crtmm$;}
    return $3i0;
}
ex$.getInteractive=getInteractive;
getInteractive.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3hx},pa:1,d:['com.openswimsoftware.ceylon.js.dom','interactive']};};
$prop$getInteractive={get:getInteractive,$crtmm$:getInteractive.$crtmm$};
get$3hx=getInteractive;$prop$get$3hx=getInteractive;
ex$.$prop$getInteractive=$prop$getInteractive;

//ObjectDef complete at document.ceylon (34:0-34:63)
function $3hy(){
    var complete$=new $3hy.$$;DocumentReadyState("complete",complete$);
    return complete$;
};$3hy.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DocumentReadyState},pa:1,d:['com.openswimsoftware.ceylon.js.dom','complete']};};
function $init$$3hy(){
    if($3hy.$$===undefined){
        m$3g8.initTypeProto($3hy,'com.openswimsoftware.ceylon.js.dom::complete',$init$DocumentReadyState());
    }
    return $3hy;
}
ex$.$init$$3hy=$init$$3hy;
$init$$3hy();
var $3i1;
function getComplete(){
    if($3i1===undefined){$3i1=$init$$3hy()();$3i1.$crtmm$=getComplete.$crtmm$;}
    return $3i1;
}
ex$.getComplete=getComplete;
getComplete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3hy},pa:1,d:['com.openswimsoftware.ceylon.js.dom','complete']};};
$prop$getComplete={get:getComplete,$crtmm$:getComplete.$crtmm$};
get$3hy=getComplete;$prop$get$3hy=getComplete;
ex$.$prop$getComplete=$prop$getComplete;

//ClassDef NodeType at node.ceylon (3:0-6:65)
function NodeType($3i2,nodeType$){
    $init$NodeType();
    if(nodeType$===undefined)m$3g8.throwexc(m$3g8.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    nodeType$.$3i2_=$3i2;
    return nodeType$;
}
NodeType.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3g8.Basic},ps:[{nm:'name',mt:'prm',$t:{t:m$3g8.$_String}}],of:[$prop$get$3i3,$prop$get$3i4,$prop$get$3i5,$prop$get$3i6,$prop$get$3i7,$prop$get$3i8,$prop$get$3i9,$prop$get$3ia,$prop$get$3ib,$prop$get$3ic,$prop$get$3id,$prop$get$3ie],pa:257,an:function(){return[m$3g8.doc("specific NodeType")];},d:['com.openswimsoftware.ceylon.js.dom','NodeType']};};
ex$.NodeType=NodeType;
function $init$NodeType(){
    if(NodeType.$$===undefined){
        m$3g8.initTypeProto(NodeType,'com.openswimsoftware.ceylon.js.dom::NodeType',m$3g8.Basic);
        (function(nodeType$){
            m$3g8.atr$(nodeType$,'$3i2',function(){return this.$3i2_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3g8.$_String},$cont:NodeType,d:['com.openswimsoftware.ceylon.js.dom','NodeType','$at','name$w7iyws']};});
        })(NodeType.$$.prototype);
    }
    return NodeType;
}
ex$.$init$NodeType=$init$NodeType;
$init$NodeType();

//ObjectDef attributeNode at node.ceylon (8:0-8:63)
function $3i3(){
    var attributeNode$=new $3i3.$$;NodeType("attributeNode",attributeNode$);
    return attributeNode$;
};$3i3.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},pa:1,d:['com.openswimsoftware.ceylon.js.dom','attributeNode']};};
function $init$$3i3(){
    if($3i3.$$===undefined){
        m$3g8.initTypeProto($3i3,'com.openswimsoftware.ceylon.js.dom::attributeNode',$init$NodeType());
    }
    return $3i3;
}
ex$.$init$$3i3=$init$$3i3;
$init$$3i3();
var $3if;
function getAttributeNode(){
    if($3if===undefined){$3if=$init$$3i3()();$3if.$crtmm$=getAttributeNode.$crtmm$;}
    return $3if;
}
ex$.getAttributeNode=getAttributeNode;
getAttributeNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3i3},pa:1,d:['com.openswimsoftware.ceylon.js.dom','attributeNode']};};
$prop$getAttributeNode={get:getAttributeNode,$crtmm$:getAttributeNode.$crtmm$};
get$3i3=getAttributeNode;$prop$get$3i3=getAttributeNode;
ex$.$prop$getAttributeNode=$prop$getAttributeNode;

//ObjectDef cdataSectionNode at node.ceylon (9:0-9:69)
function $3i4(){
    var cdataSectionNode$=new $3i4.$$;NodeType("cdataSectionNode",cdataSectionNode$);
    return cdataSectionNode$;
};$3i4.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},pa:1,d:['com.openswimsoftware.ceylon.js.dom','cdataSectionNode']};};
function $init$$3i4(){
    if($3i4.$$===undefined){
        m$3g8.initTypeProto($3i4,'com.openswimsoftware.ceylon.js.dom::cdataSectionNode',$init$NodeType());
    }
    return $3i4;
}
ex$.$init$$3i4=$init$$3i4;
$init$$3i4();
var $3ig;
function getCdataSectionNode(){
    if($3ig===undefined){$3ig=$init$$3i4()();$3ig.$crtmm$=getCdataSectionNode.$crtmm$;}
    return $3ig;
}
ex$.getCdataSectionNode=getCdataSectionNode;
getCdataSectionNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3i4},pa:1,d:['com.openswimsoftware.ceylon.js.dom','cdataSectionNode']};};
$prop$getCdataSectionNode={get:getCdataSectionNode,$crtmm$:getCdataSectionNode.$crtmm$};
get$3i4=getCdataSectionNode;$prop$get$3i4=getCdataSectionNode;
ex$.$prop$getCdataSectionNode=$prop$getCdataSectionNode;

//ObjectDef commentNode at node.ceylon (10:0-10:59)
function $3i5(){
    var commentNode$=new $3i5.$$;NodeType("commentNode",commentNode$);
    return commentNode$;
};$3i5.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},pa:1,d:['com.openswimsoftware.ceylon.js.dom','commentNode']};};
function $init$$3i5(){
    if($3i5.$$===undefined){
        m$3g8.initTypeProto($3i5,'com.openswimsoftware.ceylon.js.dom::commentNode',$init$NodeType());
    }
    return $3i5;
}
ex$.$init$$3i5=$init$$3i5;
$init$$3i5();
var $3ih;
function getCommentNode(){
    if($3ih===undefined){$3ih=$init$$3i5()();$3ih.$crtmm$=getCommentNode.$crtmm$;}
    return $3ih;
}
ex$.getCommentNode=getCommentNode;
getCommentNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3i5},pa:1,d:['com.openswimsoftware.ceylon.js.dom','commentNode']};};
$prop$getCommentNode={get:getCommentNode,$crtmm$:getCommentNode.$crtmm$};
get$3i5=getCommentNode;$prop$get$3i5=getCommentNode;
ex$.$prop$getCommentNode=$prop$getCommentNode;

//ObjectDef documentFragmentNode at node.ceylon (11:0-11:77)
function $3i6(){
    var documentFragmentNode$=new $3i6.$$;NodeType("documentFragmentNode",documentFragmentNode$);
    return documentFragmentNode$;
};$3i6.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentFragmentNode']};};
function $init$$3i6(){
    if($3i6.$$===undefined){
        m$3g8.initTypeProto($3i6,'com.openswimsoftware.ceylon.js.dom::documentFragmentNode',$init$NodeType());
    }
    return $3i6;
}
ex$.$init$$3i6=$init$$3i6;
$init$$3i6();
var $3ii;
function getDocumentFragmentNode(){
    if($3ii===undefined){$3ii=$init$$3i6()();$3ii.$crtmm$=getDocumentFragmentNode.$crtmm$;}
    return $3ii;
}
ex$.getDocumentFragmentNode=getDocumentFragmentNode;
getDocumentFragmentNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3i6},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentFragmentNode']};};
$prop$getDocumentFragmentNode={get:getDocumentFragmentNode,$crtmm$:getDocumentFragmentNode.$crtmm$};
get$3i6=getDocumentFragmentNode;$prop$get$3i6=getDocumentFragmentNode;
ex$.$prop$getDocumentFragmentNode=$prop$getDocumentFragmentNode;

//ObjectDef documentNode at node.ceylon (12:0-12:61)
function $3i7(){
    var documentNode$=new $3i7.$$;NodeType("documentNode",documentNode$);
    return documentNode$;
};$3i7.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentNode']};};
function $init$$3i7(){
    if($3i7.$$===undefined){
        m$3g8.initTypeProto($3i7,'com.openswimsoftware.ceylon.js.dom::documentNode',$init$NodeType());
    }
    return $3i7;
}
ex$.$init$$3i7=$init$$3i7;
$init$$3i7();
var $3ij;
function getDocumentNode(){
    if($3ij===undefined){$3ij=$init$$3i7()();$3ij.$crtmm$=getDocumentNode.$crtmm$;}
    return $3ij;
}
ex$.getDocumentNode=getDocumentNode;
getDocumentNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3i7},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentNode']};};
$prop$getDocumentNode={get:getDocumentNode,$crtmm$:getDocumentNode.$crtmm$};
get$3i7=getDocumentNode;$prop$get$3i7=getDocumentNode;
ex$.$prop$getDocumentNode=$prop$getDocumentNode;

//ObjectDef documentTypeNode at node.ceylon (13:0-13:69)
function $3i8(){
    var documentTypeNode$=new $3i8.$$;NodeType("documentTypeNode",documentTypeNode$);
    return documentTypeNode$;
};$3i8.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentTypeNode']};};
function $init$$3i8(){
    if($3i8.$$===undefined){
        m$3g8.initTypeProto($3i8,'com.openswimsoftware.ceylon.js.dom::documentTypeNode',$init$NodeType());
    }
    return $3i8;
}
ex$.$init$$3i8=$init$$3i8;
$init$$3i8();
var $3ik;
function getDocumentTypeNode(){
    if($3ik===undefined){$3ik=$init$$3i8()();$3ik.$crtmm$=getDocumentTypeNode.$crtmm$;}
    return $3ik;
}
ex$.getDocumentTypeNode=getDocumentTypeNode;
getDocumentTypeNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3i8},pa:1,d:['com.openswimsoftware.ceylon.js.dom','documentTypeNode']};};
$prop$getDocumentTypeNode={get:getDocumentTypeNode,$crtmm$:getDocumentTypeNode.$crtmm$};
get$3i8=getDocumentTypeNode;$prop$get$3i8=getDocumentTypeNode;
ex$.$prop$getDocumentTypeNode=$prop$getDocumentTypeNode;

//ObjectDef elementNode at node.ceylon (14:0-14:59)
function $3i9(){
    var elementNode$=new $3i9.$$;NodeType("elementNode",elementNode$);
    return elementNode$;
};$3i9.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},pa:1,d:['com.openswimsoftware.ceylon.js.dom','elementNode']};};
function $init$$3i9(){
    if($3i9.$$===undefined){
        m$3g8.initTypeProto($3i9,'com.openswimsoftware.ceylon.js.dom::elementNode',$init$NodeType());
    }
    return $3i9;
}
ex$.$init$$3i9=$init$$3i9;
$init$$3i9();
var $3il;
function getElementNode(){
    if($3il===undefined){$3il=$init$$3i9()();$3il.$crtmm$=getElementNode.$crtmm$;}
    return $3il;
}
ex$.getElementNode=getElementNode;
getElementNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3i9},pa:1,d:['com.openswimsoftware.ceylon.js.dom','elementNode']};};
$prop$getElementNode={get:getElementNode,$crtmm$:getElementNode.$crtmm$};
get$3i9=getElementNode;$prop$get$3i9=getElementNode;
ex$.$prop$getElementNode=$prop$getElementNode;

//ObjectDef entityNode at node.ceylon (15:0-15:57)
function $3ia(){
    var entityNode$=new $3ia.$$;NodeType("entityNode",entityNode$);
    return entityNode$;
};$3ia.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},pa:1,d:['com.openswimsoftware.ceylon.js.dom','entityNode']};};
function $init$$3ia(){
    if($3ia.$$===undefined){
        m$3g8.initTypeProto($3ia,'com.openswimsoftware.ceylon.js.dom::entityNode',$init$NodeType());
    }
    return $3ia;
}
ex$.$init$$3ia=$init$$3ia;
$init$$3ia();
var $3im;
function getEntityNode(){
    if($3im===undefined){$3im=$init$$3ia()();$3im.$crtmm$=getEntityNode.$crtmm$;}
    return $3im;
}
ex$.getEntityNode=getEntityNode;
getEntityNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3ia},pa:1,d:['com.openswimsoftware.ceylon.js.dom','entityNode']};};
$prop$getEntityNode={get:getEntityNode,$crtmm$:getEntityNode.$crtmm$};
get$3ia=getEntityNode;$prop$get$3ia=getEntityNode;
ex$.$prop$getEntityNode=$prop$getEntityNode;

//ObjectDef entityReferenceNode at node.ceylon (16:0-16:75)
function $3ib(){
    var entityReferenceNode$=new $3ib.$$;NodeType("entityReferenceNode",entityReferenceNode$);
    return entityReferenceNode$;
};$3ib.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},pa:1,d:['com.openswimsoftware.ceylon.js.dom','entityReferenceNode']};};
function $init$$3ib(){
    if($3ib.$$===undefined){
        m$3g8.initTypeProto($3ib,'com.openswimsoftware.ceylon.js.dom::entityReferenceNode',$init$NodeType());
    }
    return $3ib;
}
ex$.$init$$3ib=$init$$3ib;
$init$$3ib();
var $3in;
function getEntityReferenceNode(){
    if($3in===undefined){$3in=$init$$3ib()();$3in.$crtmm$=getEntityReferenceNode.$crtmm$;}
    return $3in;
}
ex$.getEntityReferenceNode=getEntityReferenceNode;
getEntityReferenceNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3ib},pa:1,d:['com.openswimsoftware.ceylon.js.dom','entityReferenceNode']};};
$prop$getEntityReferenceNode={get:getEntityReferenceNode,$crtmm$:getEntityReferenceNode.$crtmm$};
get$3ib=getEntityReferenceNode;$prop$get$3ib=getEntityReferenceNode;
ex$.$prop$getEntityReferenceNode=$prop$getEntityReferenceNode;

//ObjectDef notationNode at node.ceylon (17:0-17:61)
function $3ic(){
    var notationNode$=new $3ic.$$;NodeType("notationNode",notationNode$);
    return notationNode$;
};$3ic.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},pa:1,d:['com.openswimsoftware.ceylon.js.dom','notationNode']};};
function $init$$3ic(){
    if($3ic.$$===undefined){
        m$3g8.initTypeProto($3ic,'com.openswimsoftware.ceylon.js.dom::notationNode',$init$NodeType());
    }
    return $3ic;
}
ex$.$init$$3ic=$init$$3ic;
$init$$3ic();
var $3io;
function getNotationNode(){
    if($3io===undefined){$3io=$init$$3ic()();$3io.$crtmm$=getNotationNode.$crtmm$;}
    return $3io;
}
ex$.getNotationNode=getNotationNode;
getNotationNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3ic},pa:1,d:['com.openswimsoftware.ceylon.js.dom','notationNode']};};
$prop$getNotationNode={get:getNotationNode,$crtmm$:getNotationNode.$crtmm$};
get$3ic=getNotationNode;$prop$get$3ic=getNotationNode;
ex$.$prop$getNotationNode=$prop$getNotationNode;

//ObjectDef processingInstructionNode at node.ceylon (18:0-18:87)
function $3id(){
    var processingInstructionNode$=new $3id.$$;NodeType("processingInstructionNode",processingInstructionNode$);
    return processingInstructionNode$;
};$3id.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},pa:1,d:['com.openswimsoftware.ceylon.js.dom','processingInstructionNode']};};
function $init$$3id(){
    if($3id.$$===undefined){
        m$3g8.initTypeProto($3id,'com.openswimsoftware.ceylon.js.dom::processingInstructionNode',$init$NodeType());
    }
    return $3id;
}
ex$.$init$$3id=$init$$3id;
$init$$3id();
var $3ip;
function getProcessingInstructionNode(){
    if($3ip===undefined){$3ip=$init$$3id()();$3ip.$crtmm$=getProcessingInstructionNode.$crtmm$;}
    return $3ip;
}
ex$.getProcessingInstructionNode=getProcessingInstructionNode;
getProcessingInstructionNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3id},pa:1,d:['com.openswimsoftware.ceylon.js.dom','processingInstructionNode']};};
$prop$getProcessingInstructionNode={get:getProcessingInstructionNode,$crtmm$:getProcessingInstructionNode.$crtmm$};
get$3id=getProcessingInstructionNode;$prop$get$3id=getProcessingInstructionNode;
ex$.$prop$getProcessingInstructionNode=$prop$getProcessingInstructionNode;

//ObjectDef textNode at node.ceylon (19:0-19:53)
function $3ie(){
    var textNode$=new $3ie.$$;NodeType("textNode",textNode$);
    return textNode$;
};$3ie.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeType},pa:1,d:['com.openswimsoftware.ceylon.js.dom','textNode']};};
function $init$$3ie(){
    if($3ie.$$===undefined){
        m$3g8.initTypeProto($3ie,'com.openswimsoftware.ceylon.js.dom::textNode',$init$NodeType());
    }
    return $3ie;
}
ex$.$init$$3ie=$init$$3ie;
$init$$3ie();
var $3iq;
function getTextNode(){
    if($3iq===undefined){$3iq=$init$$3ie()();$3iq.$crtmm$=getTextNode.$crtmm$;}
    return $3iq;
}
ex$.getTextNode=getTextNode;
getTextNode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3ie},pa:1,d:['com.openswimsoftware.ceylon.js.dom','textNode']};};
$prop$getTextNode={get:getTextNode,$crtmm$:getTextNode.$crtmm$};
get$3ie=getTextNode;$prop$get$3ie=getTextNode;
ex$.$prop$getTextNode=$prop$getTextNode;

//ClassDef DocumentFragmentAbs at node.ceylon (21:0-21:63)
function DocumentFragmentAbs(documentFragmentAbs$){
    $init$DocumentFragmentAbs();
    if(documentFragmentAbs$===undefined)m$3g8.throwexc(m$3g8.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    NodeAbs(documentFragmentAbs$);
    return documentFragmentAbs$;
}
DocumentFragmentAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeAbs},ps:[],pa:257,d:['com.openswimsoftware.ceylon.js.dom','DocumentFragmentAbs']};};
ex$.DocumentFragmentAbs=DocumentFragmentAbs;
function $init$DocumentFragmentAbs(){
    if(DocumentFragmentAbs.$$===undefined){
        m$3g8.initTypeProto(DocumentFragmentAbs,'com.openswimsoftware.ceylon.js.dom::DocumentFragmentAbs',$init$NodeAbs());
    }
    return DocumentFragmentAbs;
}
ex$.$init$DocumentFragmentAbs=$init$DocumentFragmentAbs;
$init$DocumentFragmentAbs();

//ClassDef EntityReferenceAbs at node.ceylon (31:0-31:62)
function EntityReferenceAbs(entityReferenceAbs$){
    $init$EntityReferenceAbs();
    if(entityReferenceAbs$===undefined)m$3g8.throwexc(m$3g8.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    NodeAbs(entityReferenceAbs$);
    return entityReferenceAbs$;
}
EntityReferenceAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeAbs},ps:[],pa:257,d:['com.openswimsoftware.ceylon.js.dom','EntityReferenceAbs']};};
ex$.EntityReferenceAbs=EntityReferenceAbs;
function $init$EntityReferenceAbs(){
    if(EntityReferenceAbs.$$===undefined){
        m$3g8.initTypeProto(EntityReferenceAbs,'com.openswimsoftware.ceylon.js.dom::EntityReferenceAbs',$init$NodeAbs());
    }
    return EntityReferenceAbs;
}
ex$.$init$EntityReferenceAbs=$init$EntityReferenceAbs;
$init$EntityReferenceAbs();

//ClassDef NodeFilterResult at nodefilter.ceylon (1:0-1:97)
function NodeFilterResult($3iv,nodeFilterResult$){
    $init$NodeFilterResult();
    if(nodeFilterResult$===undefined)m$3g8.throwexc(m$3g8.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    nodeFilterResult$.$3iv_=$3iv;
    return nodeFilterResult$;
}
NodeFilterResult.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3g8.Basic},ps:[{nm:'name',mt:'prm',$t:{t:m$3g8.$_String}}],of:[$prop$get$3iw,$prop$get$3ix,$prop$get$3iy],pa:257,d:['com.openswimsoftware.ceylon.js.dom','NodeFilterResult']};};
ex$.NodeFilterResult=NodeFilterResult;
function $init$NodeFilterResult(){
    if(NodeFilterResult.$$===undefined){
        m$3g8.initTypeProto(NodeFilterResult,'com.openswimsoftware.ceylon.js.dom::NodeFilterResult',m$3g8.Basic);
        (function(nodeFilterResult$){
            m$3g8.atr$(nodeFilterResult$,'$3iv',function(){return this.$3iv_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3g8.$_String},$cont:NodeFilterResult,d:['com.openswimsoftware.ceylon.js.dom','NodeFilterResult','$at','name$52v8o9']};});
        })(NodeFilterResult.$$.prototype);
    }
    return NodeFilterResult;
}
ex$.$init$NodeFilterResult=$init$NodeFilterResult;
$init$NodeFilterResult();

//ObjectDef filterAccept at nodefilter.ceylon (3:0-3:69)
function $3iw(){
    var filterAccept$=new $3iw.$$;NodeFilterResult("filterAccept",filterAccept$);
    return filterAccept$;
};$3iw.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeFilterResult},pa:1,d:['com.openswimsoftware.ceylon.js.dom','filterAccept']};};
function $init$$3iw(){
    if($3iw.$$===undefined){
        m$3g8.initTypeProto($3iw,'com.openswimsoftware.ceylon.js.dom::filterAccept',$init$NodeFilterResult());
    }
    return $3iw;
}
ex$.$init$$3iw=$init$$3iw;
$init$$3iw();
var $3iz;
function getFilterAccept(){
    if($3iz===undefined){$3iz=$init$$3iw()();$3iz.$crtmm$=getFilterAccept.$crtmm$;}
    return $3iz;
}
ex$.getFilterAccept=getFilterAccept;
getFilterAccept.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3iw},pa:1,d:['com.openswimsoftware.ceylon.js.dom','filterAccept']};};
$prop$getFilterAccept={get:getFilterAccept,$crtmm$:getFilterAccept.$crtmm$};
get$3iw=getFilterAccept;$prop$get$3iw=getFilterAccept;
ex$.$prop$getFilterAccept=$prop$getFilterAccept;

//ObjectDef filterReject at nodefilter.ceylon (4:0-4:69)
function $3ix(){
    var filterReject$=new $3ix.$$;NodeFilterResult("filterReject",filterReject$);
    return filterReject$;
};$3ix.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeFilterResult},pa:1,d:['com.openswimsoftware.ceylon.js.dom','filterReject']};};
function $init$$3ix(){
    if($3ix.$$===undefined){
        m$3g8.initTypeProto($3ix,'com.openswimsoftware.ceylon.js.dom::filterReject',$init$NodeFilterResult());
    }
    return $3ix;
}
ex$.$init$$3ix=$init$$3ix;
$init$$3ix();
var $3j0;
function getFilterReject(){
    if($3j0===undefined){$3j0=$init$$3ix()();$3j0.$crtmm$=getFilterReject.$crtmm$;}
    return $3j0;
}
ex$.getFilterReject=getFilterReject;
getFilterReject.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3ix},pa:1,d:['com.openswimsoftware.ceylon.js.dom','filterReject']};};
$prop$getFilterReject={get:getFilterReject,$crtmm$:getFilterReject.$crtmm$};
get$3ix=getFilterReject;$prop$get$3ix=getFilterReject;
ex$.$prop$getFilterReject=$prop$getFilterReject;

//ObjectDef filterSkip at nodefilter.ceylon (5:0-5:65)
function $3iy(){
    var filterSkip$=new $3iy.$$;NodeFilterResult("filterSkip",filterSkip$);
    return filterSkip$;
};$3iy.$crtmm$=function(){return{mod:$CCMM$,'super':{t:NodeFilterResult},pa:1,d:['com.openswimsoftware.ceylon.js.dom','filterSkip']};};
function $init$$3iy(){
    if($3iy.$$===undefined){
        m$3g8.initTypeProto($3iy,'com.openswimsoftware.ceylon.js.dom::filterSkip',$init$NodeFilterResult());
    }
    return $3iy;
}
ex$.$init$$3iy=$init$$3iy;
$init$$3iy();
var $3j1;
function getFilterSkip(){
    if($3j1===undefined){$3j1=$init$$3iy()();$3j1.$crtmm$=getFilterSkip.$crtmm$;}
    return $3j1;
}
ex$.getFilterSkip=getFilterSkip;
getFilterSkip.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3iy},pa:1,d:['com.openswimsoftware.ceylon.js.dom','filterSkip']};};
$prop$getFilterSkip={get:getFilterSkip,$crtmm$:getFilterSkip.$crtmm$};
get$3iy=getFilterSkip;$prop$get$3iy=getFilterSkip;
ex$.$prop$getFilterSkip=$prop$getFilterSkip;

//ClassDef NodeFilter at nodefilter.ceylon (7:0-14:0)
function NodeFilter($3j2,nodeFilter$){
    $init$NodeFilter();
    if(nodeFilter$===undefined)nodeFilter$=new NodeFilter.$$;
    nodeFilter$.$3j2_=$3j2;
    
    //AttributeDecl native at nodefilter.ceylon (9:1-9:22)
    nodeFilter$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$3g8.Anything},$cont:NodeFilter,pa:3,d:['com.openswimsoftware.ceylon.js.dom','NodeFilter','$at','native']};}};
    /*BEG dynblock*/
    nodeFilter$.$_native=(typeof Object==='undefined'||Object===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Object"),'11:11-11:16','nodefilter.ceylon'):Object)();nodeFilter$.$_native.acceptNode=m$3g8.$JsCallable(m$3g8.JsCallable(nodeFilter$,nodeFilter$.$3j2)/*TODO: callable targs 6*/);
    /*END dynblock*/
    return nodeFilter$;
}
NodeFilter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3g8.Basic},ps:[{nm:'acceptNode',mt:'prm',$pt:'f',$t:{t:NodeFilterResult}}],pa:1,an:function(){return[m$3g8.doc("Node Filter")];},d:['com.openswimsoftware.ceylon.js.dom','NodeFilter']};};
ex$.NodeFilter=NodeFilter;
function $init$NodeFilter(){
    if(NodeFilter.$$===undefined){
        m$3g8.initTypeProto(NodeFilter,'com.openswimsoftware.ceylon.js.dom::NodeFilter',m$3g8.Basic);
        (function(nodeFilter$){
            
            //AttributeDecl native at nodefilter.ceylon (9:1-9:22)
            m$3g8.atr$(nodeFilter$,'$3j2',function(){return this.$3j2_;},undefined,function(){return{mod:$CCMM$,$t:{t:NodeFilterResult},ps:[{nm:'n',mt:'prm',$t:{t:Node}}],$cont:NodeFilter,d:['com.openswimsoftware.ceylon.js.dom','NodeFilter','$m','acceptNode$1yslkp']};});
        })(NodeFilter.$$.prototype);
    }
    return NodeFilter;
}
ex$.$init$NodeFilter=$init$NodeFilter;
$init$NodeFilter();

//MethodDef getWindow at main.ceylon (3:0-8:0)
function getWindow(){
    /*BEG dynblock*/
    return m$3h7.Window((typeof window==='undefined'||window===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: window"),'6:16-6:21','main.ceylon'):window));
    /*END dynblock*/
}
ex$.getWindow=getWindow;
getWindow.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$3h7.Window},ps:[],pa:1,an:function(){return[m$3g8.doc("returns the current browser window")];},d:['com.openswimsoftware.ceylon.js.dom','getWindow']};};
var m$3gc=require('com/openswimsoftware/ceylon/js/json/1.0.0/com.openswimsoftware.ceylon.js.json-1.0.0');
m$3g8.$addmod$(m$3gc,'com.openswimsoftware.ceylon.js.json/1.0.0');

//ClassDef EventPhase at event.ceylon (4:0-5:104)
function EventPhase(num,eventPhase$){
    $init$EventPhase();
    if(eventPhase$===undefined)m$3g8.throwexc(m$3g8.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    eventPhase$.num_=num;
    return eventPhase$;
}
EventPhase.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3g8.Basic},ps:[{nm:'num',mt:'prm',$t:{t:m$3g8.Integer},pa:1}],of:[$prop$get$3jj,$prop$get$3jk,$prop$get$3jl,$prop$get$3jm],pa:257,an:function(){return[m$3g8.doc("current Event Phase")];},d:['com.openswimsoftware.ceylon.js.dom','EventPhase']};};
ex$.EventPhase=EventPhase;
function $init$EventPhase(){
    if(EventPhase.$$===undefined){
        m$3g8.initTypeProto(EventPhase,'com.openswimsoftware.ceylon.js.dom::EventPhase',m$3g8.Basic);
        (function(eventPhase$){
            m$3g8.atr$(eventPhase$,'num',function(){return this.num_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3g8.Integer},$cont:EventPhase,pa:1,d:['com.openswimsoftware.ceylon.js.dom','EventPhase','$at','num']};});
        })(EventPhase.$$.prototype);
    }
    return EventPhase;
}
ex$.$init$EventPhase=$init$EventPhase;
$init$EventPhase();

//ObjectDef none at event.ceylon (7:0-7:42)
function $3jj(){
    var none$=new $3jj.$$;EventPhase(0,none$);
    return none$;
};$3jj.$crtmm$=function(){return{mod:$CCMM$,'super':{t:EventPhase},pa:1,d:['com.openswimsoftware.ceylon.js.dom','none']};};
function $init$$3jj(){
    if($3jj.$$===undefined){
        m$3g8.initTypeProto($3jj,'com.openswimsoftware.ceylon.js.dom::none',$init$EventPhase());
    }
    return $3jj;
}
ex$.$init$$3jj=$init$$3jj;
$init$$3jj();
var $3jn;
function getNone(){
    if($3jn===undefined){$3jn=$init$$3jj()();$3jn.$crtmm$=getNone.$crtmm$;}
    return $3jn;
}
ex$.getNone=getNone;
getNone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3jj},pa:1,d:['com.openswimsoftware.ceylon.js.dom','none']};};
$prop$getNone={get:getNone,$crtmm$:getNone.$crtmm$};
get$3jj=getNone;$prop$get$3jj=getNone;
ex$.$prop$getNone=$prop$getNone;

//ObjectDef capturePhase at event.ceylon (8:0-8:50)
function $3jk(){
    var capturePhase$=new $3jk.$$;EventPhase(1,capturePhase$);
    return capturePhase$;
};$3jk.$crtmm$=function(){return{mod:$CCMM$,'super':{t:EventPhase},pa:1,d:['com.openswimsoftware.ceylon.js.dom','capturePhase']};};
function $init$$3jk(){
    if($3jk.$$===undefined){
        m$3g8.initTypeProto($3jk,'com.openswimsoftware.ceylon.js.dom::capturePhase',$init$EventPhase());
    }
    return $3jk;
}
ex$.$init$$3jk=$init$$3jk;
$init$$3jk();
var $3jo;
function getCapturePhase(){
    if($3jo===undefined){$3jo=$init$$3jk()();$3jo.$crtmm$=getCapturePhase.$crtmm$;}
    return $3jo;
}
ex$.getCapturePhase=getCapturePhase;
getCapturePhase.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3jk},pa:1,d:['com.openswimsoftware.ceylon.js.dom','capturePhase']};};
$prop$getCapturePhase={get:getCapturePhase,$crtmm$:getCapturePhase.$crtmm$};
get$3jk=getCapturePhase;$prop$get$3jk=getCapturePhase;
ex$.$prop$getCapturePhase=$prop$getCapturePhase;

//ObjectDef atTarget at event.ceylon (9:0-9:46)
function $3jl(){
    var atTarget$=new $3jl.$$;EventPhase(2,atTarget$);
    return atTarget$;
};$3jl.$crtmm$=function(){return{mod:$CCMM$,'super':{t:EventPhase},pa:1,d:['com.openswimsoftware.ceylon.js.dom','atTarget']};};
function $init$$3jl(){
    if($3jl.$$===undefined){
        m$3g8.initTypeProto($3jl,'com.openswimsoftware.ceylon.js.dom::atTarget',$init$EventPhase());
    }
    return $3jl;
}
ex$.$init$$3jl=$init$$3jl;
$init$$3jl();
var $3jp;
function getAtTarget(){
    if($3jp===undefined){$3jp=$init$$3jl()();$3jp.$crtmm$=getAtTarget.$crtmm$;}
    return $3jp;
}
ex$.getAtTarget=getAtTarget;
getAtTarget.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3jl},pa:1,d:['com.openswimsoftware.ceylon.js.dom','atTarget']};};
$prop$getAtTarget={get:getAtTarget,$crtmm$:getAtTarget.$crtmm$};
get$3jl=getAtTarget;$prop$get$3jl=getAtTarget;
ex$.$prop$getAtTarget=$prop$getAtTarget;

//ObjectDef bubblingPhase at event.ceylon (10:0-10:51)
function $3jm(){
    var bubblingPhase$=new $3jm.$$;EventPhase(3,bubblingPhase$);
    return bubblingPhase$;
};$3jm.$crtmm$=function(){return{mod:$CCMM$,'super':{t:EventPhase},pa:1,d:['com.openswimsoftware.ceylon.js.dom','bubblingPhase']};};
function $init$$3jm(){
    if($3jm.$$===undefined){
        m$3g8.initTypeProto($3jm,'com.openswimsoftware.ceylon.js.dom::bubblingPhase',$init$EventPhase());
    }
    return $3jm;
}
ex$.$init$$3jm=$init$$3jm;
$init$$3jm();
var $3jq;
function getBubblingPhase(){
    if($3jq===undefined){$3jq=$init$$3jm()();$3jq.$crtmm$=getBubblingPhase.$crtmm$;}
    return $3jq;
}
ex$.getBubblingPhase=getBubblingPhase;
getBubblingPhase.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3jm},pa:1,d:['com.openswimsoftware.ceylon.js.dom','bubblingPhase']};};
$prop$getBubblingPhase={get:getBubblingPhase,$crtmm$:getBubblingPhase.$crtmm$};
get$3jm=getBubblingPhase;$prop$get$3jm=getBubblingPhase;
ex$.$prop$getBubblingPhase=$prop$getBubblingPhase;

//ClassDef EventInit at event.ceylon (12:0-23:0)
function EventInit(bubbles,cancelable,eventInit$){
    $init$EventInit();
    if(eventInit$===undefined)eventInit$=new EventInit.$$;
    eventInit$.bubbles_=bubbles;
    eventInit$.cancelable_=cancelable;
    return eventInit$;
}
EventInit.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3g8.Basic},ps:[{nm:'bubbles',mt:'prm',$t:{t:m$3g8.$_Boolean},pa:1},{nm:'cancelable',mt:'prm',$t:{t:m$3g8.$_Boolean},pa:1}],pa:1,an:function(){return[m$3g8.doc("Event creation options")];},d:['com.openswimsoftware.ceylon.js.dom','EventInit']};};
ex$.EventInit=EventInit;
function $init$EventInit(){
    if(EventInit.$$===undefined){
        m$3g8.initTypeProto(EventInit,'com.openswimsoftware.ceylon.js.dom::EventInit',m$3g8.Basic);
        (function(eventInit$){
            
            //MethodDef toJson at event.ceylon (15:1-22:1)
            eventInit$.toJson=function(){
                var eventInit$=this;
                
                //AttributeDecl json at event.ceylon (17:2-20:3)
                var $3jr=($3js=[m$3g8.Entry("bubbles",eventInit$.bubbles,{Item$Entry:{t:m$3g8.$_Boolean},Key$Entry:{t:m$3g8.$_String}}),m$3g8.Entry("cancelable",eventInit$.cancelable,{Item$Entry:{t:m$3g8.$_Boolean},Key$Entry:{t:m$3g8.$_String}})].reifyCeylonType({t:m$3g8.Entry,a:{Item$Entry:{t:m$3g8.$_Boolean},Key$Entry:{t:m$3g8.$_String}}}),m$3gc.JSON($3js));
                var $3js;
                return $3jr.toJson();
            };eventInit$.toJson.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$3gc.JSJSON},ps:[],$cont:EventInit,pa:1,an:function(){return[m$3g8.doc("convert to native JSON")];},d:['com.openswimsoftware.ceylon.js.dom','EventInit','$m','toJson']};};
            m$3g8.atr$(eventInit$,'bubbles',function(){return this.bubbles_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3g8.$_Boolean},$cont:EventInit,pa:1,d:['com.openswimsoftware.ceylon.js.dom','EventInit','$at','bubbles']};});
            m$3g8.atr$(eventInit$,'cancelable',function(){return this.cancelable_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3g8.$_Boolean},$cont:EventInit,pa:1,d:['com.openswimsoftware.ceylon.js.dom','EventInit','$at','cancelable']};});
        })(EventInit.$$.prototype);
    }
    return EventInit;
}
ex$.$init$EventInit=$init$EventInit;
$init$EventInit();

//MethodDef createEvent at event.ceylon (25:0-38:0)
function createEvent($3jt,$3ju){
    //Switch statement at event.ceylon (27:1-37:1)
    var $3jv=$3jt;
    if(m$3g8.is$($3jt,{t:m$3g8.$_String})) {
        /*BEG dynblock*/
        return Event((typeof Event==='undefined'||Event===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Event"),'30:16-30:20','event.ceylon'):Event)($3jv,$3ju.toJson()));
        /*END dynblock*/
    }else if(m$3g8.is$($3jt,{t:m$3ga.JSString})) {
        /*BEG dynblock*/
        return Event((typeof Event==='undefined'||Event===null?m$3g8.throwexc(m$3g8.Exception("Undefined or null reference: Event"),'35:16-35:20','event.ceylon'):Event)($3jv.$_native,$3ju.toJson()));
        /*END dynblock*/
    }//End switch statement at event.ceylon (27:1-37:1)
}
ex$.createEvent=createEvent;
createEvent.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Event},ps:[{nm:'type',mt:'prm',$t:{t:'u',l:[{t:m$3g8.$_String},{t:m$3ga.JSString}]}},{nm:'options',mt:'prm',$t:{t:EventInit}}],pa:1,an:function(){return[m$3g8.doc("create a new Event")];},d:['com.openswimsoftware.ceylon.js.dom','createEvent']};};

//ClassDef CommentAbs at characterdata.ceylon (3:0-3:63)
function CommentAbs(commentAbs$){
    $init$CommentAbs();
    if(commentAbs$===undefined)m$3g8.throwexc(m$3g8.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    CharacterDataAbs(commentAbs$);
    return commentAbs$;
}
CommentAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CharacterDataAbs},ps:[],pa:257,d:['com.openswimsoftware.ceylon.js.dom','CommentAbs']};};
ex$.CommentAbs=CommentAbs;
function $init$CommentAbs(){
    if(CommentAbs.$$===undefined){
        m$3g8.initTypeProto(CommentAbs,'com.openswimsoftware.ceylon.js.dom::CommentAbs',$init$CharacterDataAbs());
    }
    return CommentAbs;
}
ex$.$init$CommentAbs=$init$CommentAbs;
$init$CommentAbs();

//ClassDef RangeCompareHow at range.ceylon (3:0-4:105)
function RangeCompareHow($3ps,rangeCompareHow$){
    $init$RangeCompareHow();
    if(rangeCompareHow$===undefined)m$3g8.throwexc(m$3g8.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    rangeCompareHow$.$3ps_=$3ps;
    return rangeCompareHow$;
}
RangeCompareHow.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3g8.Basic},ps:[{nm:'name',mt:'prm',$t:{t:m$3g8.$_String}}],of:[$prop$get$3pt,$prop$get$3pu,$prop$get$3pv,$prop$get$3pw],pa:257,an:function(){return[m$3g8.doc("how to comare ranges")];},d:['com.openswimsoftware.ceylon.js.dom','RangeCompareHow']};};
ex$.RangeCompareHow=RangeCompareHow;
function $init$RangeCompareHow(){
    if(RangeCompareHow.$$===undefined){
        m$3g8.initTypeProto(RangeCompareHow,'com.openswimsoftware.ceylon.js.dom::RangeCompareHow',m$3g8.Basic);
        (function(rangeCompareHow$){
            m$3g8.atr$(rangeCompareHow$,'$3ps',function(){return this.$3ps_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3g8.$_String},$cont:RangeCompareHow,d:['com.openswimsoftware.ceylon.js.dom','RangeCompareHow','$at','name$yvbjrk']};});
        })(RangeCompareHow.$$.prototype);
    }
    return RangeCompareHow;
}
ex$.$init$RangeCompareHow=$init$RangeCompareHow;
$init$RangeCompareHow();

//ObjectDef endToEnd at range.ceylon (6:0-6:60)
function $3pt(){
    var endToEnd$=new $3pt.$$;RangeCompareHow("endToEnd",endToEnd$);
    return endToEnd$;
};$3pt.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RangeCompareHow},pa:1,d:['com.openswimsoftware.ceylon.js.dom','endToEnd']};};
function $init$$3pt(){
    if($3pt.$$===undefined){
        m$3g8.initTypeProto($3pt,'com.openswimsoftware.ceylon.js.dom::endToEnd',$init$RangeCompareHow());
    }
    return $3pt;
}
ex$.$init$$3pt=$init$$3pt;
$init$$3pt();
var $3px;
function getEndToEnd(){
    if($3px===undefined){$3px=$init$$3pt()();$3px.$crtmm$=getEndToEnd.$crtmm$;}
    return $3px;
}
ex$.getEndToEnd=getEndToEnd;
getEndToEnd.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3pt},pa:1,d:['com.openswimsoftware.ceylon.js.dom','endToEnd']};};
$prop$getEndToEnd={get:getEndToEnd,$crtmm$:getEndToEnd.$crtmm$};
get$3pt=getEndToEnd;$prop$get$3pt=getEndToEnd;
ex$.$prop$getEndToEnd=$prop$getEndToEnd;

//ObjectDef endToStart at range.ceylon (7:0-7:64)
function $3pu(){
    var endToStart$=new $3pu.$$;RangeCompareHow("endToStart",endToStart$);
    return endToStart$;
};$3pu.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RangeCompareHow},pa:1,d:['com.openswimsoftware.ceylon.js.dom','endToStart']};};
function $init$$3pu(){
    if($3pu.$$===undefined){
        m$3g8.initTypeProto($3pu,'com.openswimsoftware.ceylon.js.dom::endToStart',$init$RangeCompareHow());
    }
    return $3pu;
}
ex$.$init$$3pu=$init$$3pu;
$init$$3pu();
var $3py;
function getEndToStart(){
    if($3py===undefined){$3py=$init$$3pu()();$3py.$crtmm$=getEndToStart.$crtmm$;}
    return $3py;
}
ex$.getEndToStart=getEndToStart;
getEndToStart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3pu},pa:1,d:['com.openswimsoftware.ceylon.js.dom','endToStart']};};
$prop$getEndToStart={get:getEndToStart,$crtmm$:getEndToStart.$crtmm$};
get$3pu=getEndToStart;$prop$get$3pu=getEndToStart;
ex$.$prop$getEndToStart=$prop$getEndToStart;

//ObjectDef startToEnd at range.ceylon (8:0-8:64)
function $3pv(){
    var startToEnd$=new $3pv.$$;RangeCompareHow("startToEnd",startToEnd$);
    return startToEnd$;
};$3pv.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RangeCompareHow},pa:1,d:['com.openswimsoftware.ceylon.js.dom','startToEnd']};};
function $init$$3pv(){
    if($3pv.$$===undefined){
        m$3g8.initTypeProto($3pv,'com.openswimsoftware.ceylon.js.dom::startToEnd',$init$RangeCompareHow());
    }
    return $3pv;
}
ex$.$init$$3pv=$init$$3pv;
$init$$3pv();
var $3pz;
function getStartToEnd(){
    if($3pz===undefined){$3pz=$init$$3pv()();$3pz.$crtmm$=getStartToEnd.$crtmm$;}
    return $3pz;
}
ex$.getStartToEnd=getStartToEnd;
getStartToEnd.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3pv},pa:1,d:['com.openswimsoftware.ceylon.js.dom','startToEnd']};};
$prop$getStartToEnd={get:getStartToEnd,$crtmm$:getStartToEnd.$crtmm$};
get$3pv=getStartToEnd;$prop$get$3pv=getStartToEnd;
ex$.$prop$getStartToEnd=$prop$getStartToEnd;

//ObjectDef startToStart at range.ceylon (9:0-9:68)
function $3pw(){
    var startToStart$=new $3pw.$$;RangeCompareHow("startToStart",startToStart$);
    return startToStart$;
};$3pw.$crtmm$=function(){return{mod:$CCMM$,'super':{t:RangeCompareHow},pa:1,d:['com.openswimsoftware.ceylon.js.dom','startToStart']};};
function $init$$3pw(){
    if($3pw.$$===undefined){
        m$3g8.initTypeProto($3pw,'com.openswimsoftware.ceylon.js.dom::startToStart',$init$RangeCompareHow());
    }
    return $3pw;
}
ex$.$init$$3pw=$init$$3pw;
$init$$3pw();
var $3q0;
function getStartToStart(){
    if($3q0===undefined){$3q0=$init$$3pw()();$3q0.$crtmm$=getStartToStart.$crtmm$;}
    return $3q0;
}
ex$.getStartToStart=getStartToStart;
getStartToStart.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3pw},pa:1,d:['com.openswimsoftware.ceylon.js.dom','startToStart']};};
$prop$getStartToStart={get:getStartToStart,$crtmm$:getStartToStart.$crtmm$};
get$3pw=getStartToStart;$prop$get$3pw=getStartToStart;
ex$.$prop$getStartToStart=$prop$getStartToStart;
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
