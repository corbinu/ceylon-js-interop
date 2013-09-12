import ceylon.js.language { JSObject }
shared class NodeIterator(dynamic n) extends JSObject(n) {
    
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
    
}