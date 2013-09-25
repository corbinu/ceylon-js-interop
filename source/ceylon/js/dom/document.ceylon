import ceylon.js.language { JSString, JSArray, JSNumber }
import ceylon.js.html { Window, Location }
import ceylon.js.dom.stylesheets { StyleSheetList }

shared abstract class DocumentPosition(String name) of documentPositionContainedBy | documentPositionContains |
												documentPositionDisconnected | documentPositionFollowing | 
												documentPositionImplementationSpecific | documentPositionPreceding {}

shared object documentPositionContainedBy extends DocumentPosition("documentPositionContainedBy") {}
shared object documentPositionContains extends DocumentPosition("documentPositionContains") {}
shared object documentPositionDisconnected extends DocumentPosition("documentPositionDisconnected") {}
shared object documentPositionFollowing extends DocumentPosition("documentPositionFollowing") {}
shared object documentPositionImplementationSpecific extends DocumentPosition("documentPositionImplementationSpecific") {}
shared object documentPositionPreceding extends DocumentPosition("documentPositionPreceding") {}

shared abstract class CompatMode(String name) of css1Compat | backCompat {}

shared object css1Compat extends CompatMode("CSS1Compat") {}
shared object backCompat extends CompatMode("BackCompat") {}

shared abstract class DocumentDirection(String name) of rtl | ltr {}

shared object rtl extends DocumentDirection("rtl") {}
shared object ltr extends DocumentDirection("ltr") {}

shared abstract class DocumentReadyState(String name) of loading | interactive | complete {}

shared object loading extends DocumentReadyState("loading") {}
shared object interactive extends DocumentReadyState("interactive") {}
shared object complete extends DocumentReadyState("complete") {}

shared abstract class DocumentAbs() extends NodeAbs() {
	
	shared Element activeElement() {
		dynamic {
			return Element(native.activeElement);
		}
	}
	
	shared Node adoptNode(Node node) {
		dynamic {
			return Node(native.adoptNode(node.native));
		}
	}
	
	shared Range createRange() {
		dynamic {
			return Range(native.createRange());
		}
	}
	
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
	
	shared JSString url() {
		dynamic {
			return JSString(native.\iURL);
		}
	}
	
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
	
    shared DocumentFragment createDocumentFragment() {
		dynamic {
			return DocumentFragment(native.createDocumentFragment());
		}
	}
	
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
	
    shared JSString documentURI() {
		dynamic {
			return JSString(native.documentURI);
		}
	}
	
	shared CompatMode compatMode() {
		dynamic {
			if (native.compatMode == "BackCompat") {
				return backCompat;
			} else {
				return css1Compat;
			}
		}
	}
	
	shared JSString characterSet() {
		dynamic {
			return JSString(native.characterSet);
		}
	}
	
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
	
    shared DOMImplementation implementation() {
		dynamic {
			return DOMImplementation(native.implementation);
		}
	}
	
    shared Node importNode(Node externalNode, Boolean deep = true) {
		dynamic {
			return Node(native.importNode(externalNode, deep));
		}
	}
	
	shared NodeIterator createNodeIterator(Node root, dynamic whatToShow = null, NodeFilter? filter = null) {
		dynamic {
			return NodeIterator(native.createNodeIterator(root, whatToShow, filter));
		}
	}
	
	shared TreeWalker createTreeWalker(Node root, dynamic whatToShow = null, NodeFilter? filter = null) {
		dynamic {
			return TreeWalker(native.createTreeWalker(root, whatToShow, filter));
		}
	}
	
	shared NodeList anchors() {
		dynamic {
			return NodeList(native.anchors);
		}
	}
	
	shared Boolean getAsync() {
		dynamic {
			if (native.async) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared void setAsync(Boolean async) {
		dynamic {
			native.async = async;
		}
	}
	
	shared Node body() {
		dynamic {
			return Node(native.body);
		}
	}
	
	shared JSString getCookie() {
		dynamic {
			return JSString(native.cookie);
		}
	}
	
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
	
	shared Boolean getDesignMode() {
		dynamic {
			if (native.designMode == "on") {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared DocumentDirection getDir() {
		dynamic {
			if (native.dir == "ltr") {
				return ltr;
			} else {
				return rtl;
			}
		}
	}
	
	shared void setDir(DocumentDirection dir) {
		dynamic {
			native.dir = dir.string;
		}
	}
	
	shared JSString getDomain() {
		dynamic {
			return JSString(native.domain);
		}
	}
	
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
	
	shared HTMLCollection forms() {
		dynamic {
			return HTMLCollection(native.forms);
		}
	}
	
	shared Element head() {
		dynamic {
			return Element(native.head);
		}
	}
	
	shared HTMLCollection images() {
		dynamic {
			return HTMLCollection(native.images);
		}
	}
	
	shared JSString lastModified() {
		dynamic {
			return JSString(native.lastModified);
		}
	}
	
	shared JSString lastStyleSheetSet() {
		dynamic {
			return JSString(native.lastStyleSheetSet);
		}
	}
	
	shared HTMLCollection links() {
		dynamic {
			return HTMLCollection(native.links);
		}
	}
	
	shared Location location() {
		dynamic {
			return Location(native.location);
		}
	}
	
	shared HTMLCollection plugins() {
		dynamic {
			return HTMLCollection(native.plugins);
		}
	}
	
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
	
	shared JSString referrer() {
		dynamic {
			return JSString(native.referrer);
		}
	}
	
	shared HTMLCollection scripts() {
		dynamic {
			return HTMLCollection(native.scripts);
		}
	}
	
	shared JSString getSelectedStyleSheetSet() {
		dynamic {
			return JSString(native.selectedStyleSheetSet);
		}
	}
	
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
	
	shared StyleSheetList styleSheets() {
		dynamic {
			return StyleSheetList(native.styleSheets);
		}
	}
	
	doc("Array of Strings")
	shared JSArray styleSheetSets() {
		dynamic {
			return JSArray(native.styleSheetSets);
		}
	}
	
	shared JSString title() {
		dynamic {
			return JSString(native.title);
		}
	}
	
	shared void open() {
		dynamic {
			native.open();
		}
	}
	
	shared void close() {
		dynamic {
			native.close();
		}
	}
	
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
	
	shared Boolean hasFocus() {
		dynamic {
			if (native.hasFocus()) {
				return true;
			} else {
				return false;
			}
		}
	}
	
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
	
	shared void releaseCapture() {
		dynamic {
			native.releaseCapture();
		}
	}
	
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

shared class Document(dynamic n) extends DocumentAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}