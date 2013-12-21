import com.openswimsoftware.ceylon.js.language { JSString, JSArray, JSNumber }
import com.openswimsoftware.ceylon.js.html { Window, Location }
import com.openswimsoftware.ceylon.js.dom.stylesheets { StyleSheetList }

doc("Document Positon Type")
shared abstract class DocumentPosition(String name) of documentPositionContainedBy | documentPositionContains |
												documentPositionDisconnected | documentPositionFollowing | 
												documentPositionImplementationSpecific | documentPositionPreceding {}

shared object documentPositionContainedBy extends DocumentPosition("documentPositionContainedBy") {}
shared object documentPositionContains extends DocumentPosition("documentPositionContains") {}
shared object documentPositionDisconnected extends DocumentPosition("documentPositionDisconnected") {}
shared object documentPositionFollowing extends DocumentPosition("documentPositionFollowing") {}
shared object documentPositionImplementationSpecific extends DocumentPosition("documentPositionImplementationSpecific") {}
shared object documentPositionPreceding extends DocumentPosition("documentPositionPreceding") {}

doc("Document Compatablity Mode")
shared abstract class CompatMode(String name) of css1Compat | backCompat {}

shared object css1Compat extends CompatMode("CSS1Compat") {}
shared object backCompat extends CompatMode("BackCompat") {}

doc("Document Direction")
shared abstract class DocumentDirection(String name) of rtl | ltr {}

shared object rtl extends DocumentDirection("rtl") {}
shared object ltr extends DocumentDirection("ltr") {}

doc("Document Ready State")
shared abstract class DocumentReadyState(String name) of loading | interactive | complete {}

shared object loading extends DocumentReadyState("loading") {}
shared object interactive extends DocumentReadyState("interactive") {}
shared object complete extends DocumentReadyState("complete") {}

shared abstract class DocumentAbs() extends NodeAbs() {
	
	doc("returns the currently focused element on the document")
	shared Element activeElement() {
		dynamic {
			return Element(native.activeElement);
		}
	}
	
	doc("adapts a node from a external document")
	shared Node adoptNode(Node node) {
		dynamic {
			return Node(native.adoptNode(node.native));
		}
	}
	
	doc("create a new range")
	shared Range createRange() {
		dynamic {
			return Range(native.createRange());
		}
	}
	
	doc("returns the document url")
	shared JSString url() {
		dynamic {
			return JSString(native.\iURL);
		}
	}
	
	doc("creates a new attribute")
    shared Attr createAttribute(String|JSString name) {
		switch (name) 
		case (is String) {
			dynamic {
				return Attr(native.createAttribute(name));
			}
		}
		case (is JSString) {
			dynamic {
				return Attr(native.createAttribute(name.native));
			}
		}
	}
	
	doc("creates a attribute with the given namespace")
    shared Attr createAttributeNS(String|JSString? namespace, String|JSString name) {
		switch (namespace) 
		case (is String) {
			switch (name) 
			case (is String) {
				dynamic {
					return Attr(native.createAttributeNS(namespace, name));
				}
			}
			case (is JSString) {
				dynamic {
					return Attr(native.createAttributeNS(namespace, name.native));
				}
			}
		}
		case (is JSString) {
			switch (name) 
			case (is String) {
				dynamic {
					return Attr(native.createAttributeNS(namespace.native, name));
				}
			}
			case (is JSString) {
				dynamic {
					return Attr(native.createAttributeNS(namespace.native, name.native));
				}
			}
		}
		case (is Null) {
			switch (name) 
			case (is String) {
				dynamic {
					return Attr(native.createAttributeNS(null, name));
				}
			}
			case (is JSString) {
				dynamic {
					return Attr(native.createAttributeNS(null, name.native));
				}
			}
		}
	}
	
	doc("creates a new CDATASection")
    shared CDATASection createCDATASection(String|JSString data) {
		switch (data) 
		case (is String) {
			dynamic {
				return CDATASection(native.createCDATASection(data));
			}
		}
		case (is JSString) {
			dynamic {
				return CDATASection(native.createCDATASection(data.native));
			}
		}
	}
	
	doc("creates a new comment")
    shared Comment createComment(String|JSString data) {
		switch (data) 
		case (is String) {
			dynamic {
				return Comment(native.createComment(data));
			}
		}
		case (is JSString) {
			dynamic {
				return Comment(native.createComment(data.native));
			}
		}
	}
	
	doc("creates a document fragment")
    shared DocumentFragment createDocumentFragment() {
		dynamic {
			return DocumentFragment(native.createDocumentFragment());
		}
	}
	
	doc("creates a new element")
    shared Element createElement(String|JSString tagName) {
		switch (tagName)
		case (is String) {
			dynamic {
				return Element(native.createElement(tagName));
			}
		}
		case (is JSString) {
			dynamic {
				return Element(native.createElement(tagName.native));
			}
		}
	}
	
	doc("creates a new element in the given namespace")
    shared Element createElementNS(String|JSString namespaceURI, String|JSString qualifiedName) {
		switch (namespaceURI)
		case (is String) {
			switch (qualifiedName)
			case (is String) {
				dynamic {
					return Element(native.createElementNS(namespaceURI, qualifiedName));
				}
			}
			case (is JSString) {
				dynamic {
					return Element(native.createElementNS(namespaceURI, qualifiedName.native));
				}
			}
		}
		case (is JSString) {
			switch (qualifiedName)
			case (is String) {
				dynamic {
					return Element(native.createElementNS(namespaceURI, qualifiedName));
				}
			}
			case (is JSString) {
				dynamic {
					return Element(native.createElementNS(namespaceURI.native, qualifiedName.native));
				}
			}
		}
	}
	
	doc("creates a processing instruction node")
    shared ProcessingInstruction createProcessingInstruction(String|JSString target, String|JSString data) {
		switch (target)
		case (is String) {
			switch (data)
			case (is String) {
				dynamic {
					return ProcessingInstruction(native.createProcessingInstruction(target, data));
				}
			}
			case (is JSString) {
				dynamic {
					return ProcessingInstruction(native.createProcessingInstruction(target, data.native));
				}
			}
		}
		case (is JSString) {
			switch (data)
			case (is String) {
				dynamic {
					return ProcessingInstruction(native.createProcessingInstruction(target.native, data));
				}
			}
			case (is JSString) {
				dynamic {
					return ProcessingInstruction(native.createProcessingInstruction(target.native, data.native));
				}
			}
		}
	}
	
	doc("creates a new text node")
    shared Text createTextNode(String|JSString data) {
		switch (data)
		case (is String) {
			dynamic {
				return Text(native.createTextNode(data));
			}
		}
		case (is JSString) {
			dynamic {
				return Text(native.createTextNode(data.native));
			}
		}
	}
	
	doc("returns the documents doctype")
    shared DocumentType? doctype() {
		dynamic {
			dynamic doctype = native.doctype;
			if (doctype != \inull) {
				return DocumentType(doctype);
			} else {
				return null;
			}
		}
	}
	
	doc("returns the element that is a direct child of the document")
    shared Element? documentElement() {
		dynamic {
			dynamic element = native.documentElement;
			if (element != \inull) {
				return Element(element);
			} else {
				return null;
			}
		}
	}
	
	doc("returns documents URI")
    shared JSString documentURI() {
		dynamic {
			return JSString(native.documentURI);
		}
	}
	
	doc("returns the documents compatablity mode")
	shared CompatMode compatMode() {
		dynamic {
			if (native.compatMode == "BackCompat") {
				return backCompat;
			} else {
				return css1Compat;
			}
		}
	}
	
	doc("returns documents CharacterSet")
	shared JSString characterSet() {
		dynamic {
			return JSString(native.characterSet);
		}
	}
	
	doc("returns element on the document by the id")
    shared Element? getElementById(String|JSString id) {
		dynamic element;
		switch (id)
		case (is String) {
			dynamic {
				 element = native.getElementById(id);
			}
		}
		case (is JSString) {
			dynamic {
				 element = native.getElementById(id.native);
			}
		}
		dynamic {
			if (element != \inull) {
				return Element(element);
			} else {
				return null;
			}
		}
	}
	
	doc("returns a collection of elements on the document by the tagname")
    shared HTMLCollection|NodeList getElementsByTagName(String|JSString name = "*") {
		dynamic elems;
		switch (name)
		case (is String) {
			dynamic {
				elems = native.getElementsByTagName(name);
			}
		}
		case (is JSString) {
			dynamic {
				elems = native.getElementsByTagName(name.native);
			}
		}
		dynamic {
			if (elems \iinstanceof \iHTMLCollection) {
				return HTMLCollection(elems);
			} else {
				return NodeList(elems);
			}
		}
	}
	
	doc("returns a collection of elements on the document by the tagname in a namespace")
    shared HTMLCollection|NodeList getElementsByTagNameNS(String|JSString namespace, String|JSString name = "*") {
		dynamic elems;
		switch (namespace) 
		case (is String) {
			switch (name) 
			case (is String) {
				dynamic {
					elems = native.getElementsByTagNameNS(namespace, name);
				}
			}
			case (is JSString) {
				dynamic {
					elems = native.getElementsByTagNameNS(namespace, name.native);
				}
			}
		}
		case (is JSString) {
			switch (name) 
			case (is String) {
				dynamic {
					elems = native.getElementsByTagNameNS(namespace, name);
				}
			}
			case (is JSString) {
				dynamic {
					elems = native.getElementsByTagNameNS(namespace.native, name.native);
				}
			}
		}
		dynamic {
			if (elems \iinstanceof \iHTMLCollection) {
				return HTMLCollection(elems);
			} else {
				return NodeList(elems);
			}
		}
	}
	
	doc("returns a collection of elements on the document by the class name")
	shared HTMLCollection getElementsByClassName(String|JSString names) {
		switch (names)
		case (is String) {
			dynamic {
				return HTMLCollection(native.getElementsByTagNameNS(names));
			}
		}
		case (is JSString) {
			dynamic {
				return HTMLCollection(native.getElementsByTagNameNS(names.native));
			}
		}
	}
	
	doc("returns the DOM implementation associated with the document")
    shared DOMImplementation implementation() {
		dynamic {
			return DOMImplementation(native.implementation);
		}
	}
	
	doc("creates a copy of a node from another document that can be inserted into the current document")
    shared Node importNode(Node externalNode, Boolean deep = true) {
		dynamic {
			return Node(native.importNode(externalNode, deep));
		}
	}
	
	doc("returns a new node iterator the document")
	shared NodeIterator createNodeIterator(Node root, dynamic whatToShow = null, NodeFilter? filter = null) {
		dynamic {
			return NodeIterator(native.createNodeIterator(root, whatToShow, filter));
		}
	}
	
	doc("returns a new tree walker for walking the document")
	shared TreeWalker createTreeWalker(Node root, dynamic whatToShow = null, NodeFilter? filter = null) {
		dynamic {
			return TreeWalker(native.createTreeWalker(root, whatToShow, filter));
		}
	}
	
	doc("returns a collection of all anchors in the document")
	shared NodeList anchors() {
		dynamic {
			return NodeList(native.anchors);
		}
	}
	
	doc("gets whether a document.load call will be made asynchronously")
	shared Boolean getAsync() {
		dynamic {
			if (native.async) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("sets whether a document.load call should be made asynchronously")
	shared void setAsync(Boolean async) {
		dynamic {
			native.async = async;
		}
	}
	
	doc("returns the body node on the document")
	shared Node body() {
		dynamic {
			return Node(native.body);
		}
	}
	
	doc("returns cookies associated with the document in the form of a comma sepearted list of key=value pairs")
	shared JSString getCookie() {
		dynamic {
			return JSString(native.cookie);
		}
	}
	
	doc("set cookies associated with the document in the form of a comma sepearted list of key=value pairs")
	shared void setCookie(String|JSString cookie) {
		switch (cookie)
		case (is String) {
			dynamic {
				native.cookie = cookie;
			}
		}
		case (is JSString) {
			dynamic {
				native.cookie = cookie.native;
			}
		}
	}
	
	doc("returns the browser window object associated with the document")
	shared Window? defaultView() {
		dynamic {
			dynamic view = native.defaultView;
			if (view != \inull) {
				return Window(view);
			} else {
				return null;
			}
		}
	}
	
	doc("returns if the documents design mode is on")
	shared Boolean getDesignMode() {
		dynamic {
			if (native.designMode == "on") {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("get the document direction")
	shared DocumentDirection getDir() {
		dynamic {
			if (native.dir == "ltr") {
				return ltr;
			} else {
				return rtl;
			}
		}
	}
	
	doc("set the document direction")
	shared void setDir(DocumentDirection dir) {
		dynamic {
			native.dir = dir.string;
		}
	}
	
	doc("get the documents domain")
	shared JSString getDomain() {
		dynamic {
			return JSString(native.domain);
		}
	}
	
	doc("set the domain string of the document")
	shared void setDomain(String|JSString domain) {
		switch (domain)
		case (is String) {
			dynamic {
				native.domain = domain;
			}
		}
		case (is JSString) {
			dynamic {
				native.domain = domain.native;
			}
		}
	}
	
	doc("returns a collection of all form elements in the document")
	shared HTMLCollection forms() {
		dynamic {
			return HTMLCollection(native.forms);
		}
	}
	
	doc("returns the document head element")
	shared Element head() {
		dynamic {
			return Element(native.head);
		}
	}
	
	doc("returns a collection of all image elements in the document")
	shared HTMLCollection images() {
		dynamic {
			return HTMLCollection(native.images);
		}
	}
	
	doc("returns the date the document was last modified as a string")
	shared JSString lastModified() {
		dynamic {
			return JSString(native.lastModified);
		}
	}
	
	doc("returns the name of the last enabled StyleSheet Set for the document")
	shared JSString lastStyleSheetSet() {
		dynamic {
			return JSString(native.lastStyleSheetSet);
		}
	}
	
	doc("returns all of the link elements in the document")
	shared HTMLCollection links() {
		dynamic {
			return HTMLCollection(native.links);
		}
	}
	
	doc("returns location information about the URL of the document")
	shared Location location() {
		dynamic {
			return Location(native.location);
		}
	}
	
	doc("returns collection of all the plugin elements on the document")
	shared HTMLCollection plugins() {
		dynamic {
			return HTMLCollection(native.plugins);
		}
	}
	
	doc("returns the prefurred name of the StyleSheet set on the document")
	shared JSString? preferredStyleSheetSet() {
		dynamic {
			dynamic preferred = document.preferredStyleSheetSet;
			if (preferred != \inull) {
				return JSString(preferred);
			} else {
				return null;
			}
		}
	}
	
	doc("returns the current ready state of the document")
	shared DocumentReadyState readyState() {
		dynamic {
			dynamic readyState = native.readyState;
			if (readyState == "loading") {
				return loading;
			} else if (readyState == "interactive") {
				return interactive;
			} else {
				return complete;
			}
		}
	}
	
	doc("returns uri of the page which linked to this document")
	shared JSString referrer() {
		dynamic {
			return JSString(native.referrer);
		}
	}
	
	doc("returns a collection of all the script elements in the document")
	shared HTMLCollection scripts() {
		dynamic {
			return HTMLCollection(native.scripts);
		}
	}
	
	doc("returns the name of the StyleSheet set that is currently in use on the document")
	shared JSString selectedStyleSheetSet() {
		dynamic {
			return JSString(native.selectedStyleSheetSet);
		}
	}
	
	doc("returns a linked to or embeded in the document by its name")
	shared void setSelectedStyleSheetSet(String|JSString sheet) {
		switch (sheet)
		case (is String) {
			dynamic {
				native.selectedStyleSheetSet = sheet;
			}
		}
		case (is JSString) {
			dynamic {
				native.selectedStyleSheetSet = sheet.native;
			}
		}
	}
	
	doc("returns collection of StyleSheets linked to or embeded in the document")
	shared StyleSheetList styleSheets() {
		dynamic {
			return StyleSheetList(native.styleSheets);
		}
	}
	
	doc("returns Array of Strings naming the avaiable StyleSheets")
	shared JSArray styleSheetSets() {
		dynamic {
			return JSArray(native.styleSheetSets);
		}
	}
	
	doc("returns the documents title")
	shared JSString title() {
		dynamic {
			return JSString(native.title);
		}
	}
	
	doc("opens a document for writing")
	shared void open() {
		dynamic {
			native.open();
		}
	}
	
	doc("finishes writing to a document opened with Document.open()")
	shared void close() {
		dynamic {
			native.close();
		}
	}
	
	doc("returns element at the given point coordinates")
	shared Element elementFromPoint(Integer|JSNumber x, Integer|JSNumber y) {
		switch (x)
		case (is Integer) {
			switch (y)
			case (is Integer) {
				dynamic {
					return Element(native.elementFromPoint(x, y));
				}
			}
			case (is JSNumber) {
				dynamic {
					return Element(native.elementFromPoint(x, y.native));
				}
			}
		}
		case (is JSNumber) {
			switch (y)
			case (is Integer) {
				dynamic {
					return Element(native.elementFromPoint(x.native, y));
				}
			}
			case (is JSNumber) {
				dynamic {
					return Element(native.elementFromPoint(x.native, y.native));
				}
			}
		}
	}
	
	doc("returns a list of elements in the document with the given name")
	shared HTMLCollection getElementsByName(String|JSString name) {
		switch (name)
		case (is String) {
			dynamic {
				return HTMLCollection(native.getElementsByName(name));
			}
		}
		case (is JSString) {
			dynamic {
				return HTMLCollection(native.getElementsByName(name.native));
			}
		}
	}
	
	doc("returns whether the document or any element in the document currently has focus")
	shared Boolean hasFocus() {
		dynamic {
			if (native.hasFocus()) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("returns the first element which matches the selectors")
	shared Element querySelector(String|JSString selectors) {
		switch (selectors)
		case (is String) {
			dynamic {
				return Element(native.querySelector(selectors));
			}
		}
		case (is JSString) {
			dynamic {
				return Element(native.querySelector(selectors.native));
			}
		}
	}
	
	doc("returns a list of all elements within the document")
	shared NodeList querySelectorAll(String|JSString selectors) {
		switch (selectors)
		case (is String) {
			dynamic {
				return NodeList(native.querySelectorAll(selectors));
			}
		}
		case (is JSString) {
			dynamic {
				return NodeList(native.querySelectorAll(selectors.native));
			}
		}
	}
	
	doc("release current mouse capture")
	shared void releaseCapture() {
		dynamic {
			native.releaseCapture();
		}
	}
	
	doc("write the string to the document")
	shared void write(String|JSString line) {
		switch (line)
		case (is String) {
			dynamic {
				native.write(line);
			}
		}
		case (is JSString) {
			dynamic {
				native.write(line.native);
			}
		}
	}
	
	doc("write the string to the document as a line")
	shared void writeln(String|JSString line) {
		switch (line)
		case (is String) {
			dynamic {
				native.writeln(line);
			}
		}
		case (is JSString) {
			dynamic {
				native.writeln(line.native);
			}
		}
	}
	
	/* TODO
	document.evaluate
	document.createExpression
	document.createNSResolver
	
	document.ononline
	document.onoffline
	document.onreadystatechange
	*/
}

doc("a DOM Document")
shared class Document(dynamic n) extends DocumentAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}