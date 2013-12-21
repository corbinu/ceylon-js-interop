import com.openswimsoftware.ceylon.js.language { JSString, JSObjectAbs }

doc("specific NodeType")
shared abstract class NodeType(String name) of attributeNode | cdataSectionNode | commentNode | documentFragmentNode |
												documentNode | documentTypeNode | elementNode | entityNode | entityReferenceNode |
												notationNode | processingInstructionNode | textNode {}

shared object attributeNode extends NodeType("attributeNode") {}
shared object cdataSectionNode extends NodeType("cdataSectionNode") {}
shared object commentNode extends NodeType("commentNode") {}
shared object documentFragmentNode extends NodeType("documentFragmentNode") {}
shared object documentNode extends NodeType("documentNode") {}
shared object documentTypeNode extends NodeType("documentTypeNode") {}
shared object elementNode extends NodeType("elementNode") {}
shared object entityNode extends NodeType("entityNode") {}
shared object entityReferenceNode extends NodeType("entityReferenceNode") {}
shared object notationNode extends NodeType("notationNode") {}
shared object processingInstructionNode extends NodeType("processingInstructionNode") {}
shared object textNode extends NodeType("textNode") {}

shared abstract class DocumentFragmentAbs() extends NodeAbs() {}

doc("a DOM DocumentFragment")
shared class DocumentFragment(dynamic n) extends DocumentFragmentAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class EntityReferenceAbs() extends NodeAbs() {}

doc("a DOM EntityReference")
shared class EntityReference(dynamic n) extends EntityReferenceAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class NodeAbs() extends JSObjectAbs() {
   
   doc("append the node to the nodes children")
	shared Node appendChild(Node node) {
		dynamic {
			return Node(node.native.appendChild(node));
		}
	}
	
	doc("returns the nodes baseURI")
    shared JSString baseURI() {
        dynamic {
        	return JSString(native.baseURL);
    	}
	}
	
	doc("returns a list of child nodes")
    shared NodeList childNodes() {
        dynamic {
            return NodeList(native.childNodes);
    	}
	}
	
	doc("clones the current node pass true for deep copy")
    shared Node cloneNode(Boolean bool = true) {
		dynamic {
			return Node(node.native.cloneNode(bool));
		}
	}
	
	doc("return the node document position compared to the passed node")
    shared DocumentPosition compareDocumentPosition(Node node) {
        dynamic {
            dynamic pos = node.native.compareDocumentPosition(node);
            if (pos == \iNode.\iDOCUMENT_POSITION_CONTAINED_BY) {
                return documentPositionContainedBy;
            } else if (pos == \iNode.\iDOCUMENT_POSITION_CONTAINS) {
            	return documentPositionContains;
        	} else if (pos == \iNode.\iDOCUMENT_POSITION_DISCONNECTED) {
            	return documentPositionDisconnected;
        	} else if (pos == \iNode.\iDOCUMENT_POSITION_FOLLOWING) {
            	return documentPositionFollowing;
        	} else if (pos == \iNode.\iDOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC) {
            	return documentPositionImplementationSpecific;
        	} else {
            	return documentPositionPreceding;
        	}
        }
	}
	
	doc("returns the nodes first child node")
    shared Node firstChild() {
		dynamic {
			return Node(native.firstChild);
		}
	}

	doc("if the node has children")
    shared Boolean hasChildNodes() {
		dynamic {
			if (native.hasAttributes()) {
				return true;
			} else {
				return false;
			}
		}
	}

	doc("insert the passed node to children before the reference node")
    shared Node insertBefore(Node newElement, Node? referenceElement) {
		dynamic {
			if (exists ref = referenceElement) {
				return Node(native.insertBefore(newElement.native, ref.native));
			} else {
				return Node(native.insertBefore(newElement.native));
			}
		}
	}
	
	
	doc("is the passed namespace the default one")
    shared Boolean isDefaultNamespace(String|JSString namespaceURI) {
		dynamic isDefault;
		switch (namespaceURI)
		case (is String) {
			dynamic {
				isDefault = native.isDefaultNamespace(namespaceURI);
			}
		}
		case (is JSString) {
			dynamic {
				isDefault = native.isDefaultNamespace(namespaceURI.native);
			}
		}
		dynamic {
			if (isDefault) {
				return true;
			} else {
				return false;
			}
		}
	}

	doc("is the passed node equal to this one")
    shared Boolean isEqualNode(Node node) {
		dynamic {
			if (native.isEqualNode(node)) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("returns the last child node of this node")
	shared Node? lastChild() {
		dynamic {
			dynamic lastChild = native.lastChild;
			if (lastChild != \inull) {
				return Node(lastChild);
			} else {
				return null;
			}
		}
	}
	
	doc("returns the prefix for the given namespaceURI")
    shared JSString? lookupPrefix(String|JSString? namespaceURI) {
		dynamic prefix;
		dynamic {
			switch (namespaceURI)
			case (is String) {
				prefix = native.lookupPrefix(namespaceURI);
			}
			case (is JSString) {
				prefix = native.lookupPrefix(namespaceURI.native);
			}
			case (is Null) {
				prefix = native.lookupPrefix();
			}
			
			if (prefix != \inull) {
				return JSString(prefix);
			} else {
				return null;
			}
		}
	}
	
	doc("returns the node immediately after this node in the parents child nodes or null if none")
    shared Node? nextSibling() {
		dynamic {
			dynamic nextSibling = native.nextSibling();
			if (nextSibling != \inull) {
				return Node(nextSibling);
			} else {
				return null;
			}
		}
	}
	
	doc("returns the nodes name")
    shared JSString nodeName() {
		dynamic {
			return JSString(native.nodeName);
		}
	}
	
	doc("returns the nodes type")
    shared NodeType nodeType() {
		dynamic {
			if (native.nodeType == \iNode.\iELEMENT_NODE) {
				return elementNode;
			} else if (native.nodeType == \iNode.\iATTRIBUTE_NODE) {
				return attributeNode;
			} else if (native.nodeType == \iNode.\iTEXT_NODE) {
				return textNode;
			} else if (native.nodeType == \iNode.\iCDATA_SECTION_NODE) {
				return cdataSectionNode;
			} else if (native.nodeType == \iNode.\iENTITY_REFERENCE_NODE) {
				return entityReferenceNode;
			} else if (native.nodeType == \iNode.\iENTITY_NODE) {
				return entityNode;
			} else if (native.nodeType == \iNode.\iPROCESSING_INSTRUCTION_NODE) {
				return processingInstructionNode;
			} else if (native.nodeType == \iNode.\iCOMMENT_NODE) {
				return commentNode;
			} else if (native.nodeType == \iNode.\iDOCUMENT_NODE) {
				return documentNode;
			} else if (native.nodeType == \iNode.\iDOCUMENT_TYPE_NODE) {
				return documentTypeNode;
			} else if (native.nodeType == \iNode.\iDOCUMENT_FRAGMENT_NODE) {
				return documentFragmentNode;
			} else {
				return notationNode;
			}
		}
	}
	
	doc("returns the value of the current node")
    shared JSString? getNodeValue() {
		dynamic {
			dynamic val = native.nodeValue;
			if (val != \inull) {
				return JSString (val);
			} else {
				return null;
			}
		}
	}
	
	doc("set the value of the current node")
	shared void setNodeValue(String|JSString val) {
		switch (val)
		case (is String) {
			dynamic {
				native.nodeValue = val;
			}
		}
		case (is JSString) {
			dynamic {
				native.nodeValue = val.native;
			}
		}
	}
	
	doc("clean up all the text nodes under this on")
    shared void normalize() {
		dynamic {
			native.normalize();
		}
	}
	
	doc("returns nodes owning document")
    shared Document ownerDocument {
		dynamic {
			return Document(native.ownerDocument);
		}
	}
	
	doc("returns the parent node if any")
    shared Node? parentNode() {
		dynamic {
			dynamic parent = parentNode();
			if (parent != \inull) {
				return Node(parent);
			} else {
				return null;
			}
		}
	}
	
	doc("string of the nodes namespace prefix")
	shared JSString? prefix() {
		dynamic {
			dynamic prefix = native.prefix;
			if (prefix != \inull) {
				return JSString(prefix);
			} else {
				return null;
			}
		}
	}
	
	doc("returns the node immediately proceding this node in the parents child nodes or null if none")
    shared Node? previousSibling() {
		dynamic {
			dynamic previousSibling = native.previousSibling();
			if (previousSibling != \inull) {
				return Node(previousSibling);
			} else {
				return null;
			}
		}
	}
	
	doc("removes the child node and returns the removed node")
    shared Node removeChild(Node node) {
		dynamic {
			return Node(native.removeChild(node.native));
		}
	}
	
	doc("replaces the old node with the new one and returns the old node")
    shared Node replaceChild(Node newChild, Node oldChild) {
		dynamic {
			return Node(native.replaceChild(newChild.native, oldChild.native));
		}
	}
	
	doc("returns the text content of the node and its descendents")
    shared JSString? getTextContent() {
		dynamic {
			dynamic content = native.textContent();
			if (content != \inull) {
				return JSString(content);
			} else {
				return null;
			}
		}
	}
	
	doc("set the text content of the node and its descendents")
	shared void setTextContent(String|JSString content) {
		switch (content)
		case (is String) {
			dynamic {
				native.textContent = content;
			}
		}
		case (is JSString) {
			dynamic {
				native.textContent = content.native;
			}
		}
	}
}

doc("a DOM Node")
shared class Node(dynamic n) extends NodeAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}