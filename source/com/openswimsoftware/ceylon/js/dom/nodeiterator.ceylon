import com.openswimsoftware.ceylon.js.language { JSObjectAbs }

shared abstract class NodeIteratorAbs() extends JSObjectAbs() {
    
    doc("returns the iterators root node")
    shared Node root() {
        dynamic {
            return Node(native.root);
        }
    }
    
    // create enumerated type for this
    doc("return long representing what types of nodes the iterator shows")
    shared dynamic whatToShow() {
        dynamic {
            return native.whatToShow;
        }
    }
    
    doc("return the iterator filter if any")
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
    
    doc("return the next node")
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
    
    doc("return the previous node")
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

doc("a DOM NodeIterator")
shared class NodeIterator(dynamic n) extends NodeIteratorAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}