import com.openswimsoftware.ceylon.js.language { JSObjectAbs }

shared abstract class TreeWalkerAbs() extends JSObjectAbs() {
	
	doc("returns the node where the tree walker was created")
	shared Node root() {
        dynamic {
            return Node(native.root);
        }
    }
    
    // TODO needs a enumerated type
    doc("returns what type of nodes are present on the tree")
    shared dynamic whatToShow() {
        dynamic {
            return native.whatToShow;
        }
    }
    
    doc("returns the node filter used to select the tree nodes")
    shared NodeFilter? filter() {
        dynamic {
            dynamic filter = native.filter;
            if (filter != \inull) {
                return NodeFilter(filter);
            } else {
                return null;
            }
        }
    }
    
    doc("returns the current document node")
    shared Node currentNode() {
        dynamic {
            return Node(native.currentNode());
        }
    }
    
    doc("move the tree to the first node in the document order")
    shared Node? parentNode() {
        dynamic {
            dynamic parent = native.parentNode();
            if (parent != \inull) {
                return Node(parent);
            } else {
                return null;
            }
        }
    }
    
    doc("move the tree to the first child of the current node")
    shared Node? firstChild() {
        dynamic {
            dynamic first = native.firstChild();
            if (first != \inull) {
                return Node(first);
            } else {
                return null;
            }
        }
    }
    
    doc("move the tree to the last child of the current node")
    shared Node? lastChild() {
        dynamic {
            dynamic last = native.lastChild();
            if (last != \inull) {
                return Node(last);
            } else {
                return null;
            }
        }
    }
    
    doc("move the tree to the current nodes previous sibling")
    shared Node? previousSibling() {
        dynamic {
            dynamic previous = native.previousSibling();
            if (previous != \inull) {
                return Node(previous);
            } else {
                return null;
            }
        }
    }
    
    doc("move the tree to the current nodes next sibling")
    shared Node? nextSibling() {
        dynamic {
            dynamic next = native.nextSibling();
            if (next != \inull) {
                return Node(next);
            } else {
                return null;
            }
        }
    }
    
    doc("move the tree to the previous node and returns")
    shared Node? previousNode() {
        dynamic {
            dynamic previous = native.previousNode();
            if (previous != \inull) {
                return Node(previous);
            } else {
                return null;
            }
        }
    }
    
    doc("move the tree to the next node and returns")
    shared Node? nextNode() {
        dynamic {
            dynamic next = native.nextNode();
            if (next != \inull) {
                return Node(next);
            } else {
                return null;
            }
        }
    }
}

doc("a Document TreeWalker")
shared class TreeWalker(dynamic n) extends TreeWalkerAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}
