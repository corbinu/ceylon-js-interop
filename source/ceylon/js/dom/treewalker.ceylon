shared class TreeWalker(dynamic n) {
	shared dynamic native;
    dynamic {
        native = n;
    }
	
	shared Node root() {
        dynamic {
            return Node(native.root);
        }
    }
    
    shared dynamic whatToShow() {
        dynamic {
            return native.whatToShow;
        }
    }
    
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
    
    shared Node currentNode() {
        dynamic {
            return Node(native.currentNode());
        }
    }
    
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