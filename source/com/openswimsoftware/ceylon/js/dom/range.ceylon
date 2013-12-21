import com.openswimsoftware.ceylon.js.language { JSNumber, JSObjectAbs }

doc("how to comare ranges")
shared abstract class RangeCompareHow(String name) of endToEnd | endToStart | startToEnd | startToStart {}

shared object endToEnd extends RangeCompareHow("endToEnd") {}
shared object endToStart extends RangeCompareHow("endToStart") {}
shared object startToEnd extends RangeCompareHow("startToEnd") {}
shared object startToStart extends RangeCompareHow("startToStart") {}

shared abstract class RangeAbs() extends JSObjectAbs() {
    
    doc("returns the node where the container range begins")
    shared Node startContainer() {
        dynamic {
            return Node(native.startContainer);
        }
    }
    
    doc("returns the node where the container range ends")
    shared Node endContainer() {
        dynamic {
            return Node(native.endContainer);
        }
    }
    
    doc("returns a number where the container range begins")
    shared JSNumber startOffset() {
        dynamic {
            return JSNumber(native.startOffset);
        }
    }
    
    doc("returns a number where the container range ends")
    shared JSNumber endOffset() {
        dynamic {
            return JSNumber(native.endOffset);
        }
    }
    
    doc("is the start and end nodes the same node")
    shared Boolean collapsed() {
        dynamic {
        	if (native.collapsed()) {
        		return true;
        	} else {
        		return false;
        	}
    	}
    }
    
    doc("returns the deepest Node that contains the startContainer and endContainer nodes")
    shared Node commonAncestorContainer() {
        dynamic {
            return Node(native.commonAncestorContainer);
        }
    }
    
    doc("set the start position of the range")
    shared void setStart(Node startNode, Integer|JSNumber startOffset) {
        switch (startOffset)
        case (is Integer) {
            dynamic {
            	native.setStart(startNode, startOffset);
        	}
        }
        case (is JSNumber) {
            dynamic {
            	native.setStart(startNode, startOffset.native);
        	}
        }
    }
    
    doc("set the end position of the range")
    shared void setEnd(Node endNode, Integer|JSNumber endOffset) {
        switch (endOffset)
        case (is Integer) {
            dynamic {
            	native.setEnd(endNode, endOffset);
        	}
        }
        case (is JSNumber) {
            dynamic {
            	native.setEnd(endNode, endOffset.native);
        	}
        }
    }
    
    doc("set the start position of the range relative to the given node")
    shared void setStartBefore(Node refNode) {
        dynamic {
            native.setStartBefore(refNode);
        }
    }
    
    doc("set the start position of the range relative to the given node")
    shared void setStartAfter(Node refNode) {
        dynamic {
            native.setStartAfter(refNode);
        }
    }
    
    doc("set the end position of the range relative to the given node")
    shared void setEndBefore(Node refNode) {
        dynamic {
            native.setEndBefore(refNode);
        }
    }
    
    doc("set the end position of the range relative to the given node")
    shared void setEndAfter(Node refNode) {
        dynamic {
            native.setEndAfter(refNode);
        }
    }
    
    doc("collapses the range to one of its boundery points")
    shared void collapse(Boolean? toStart = null) {
        dynamic {
            if (exists s = toStart) {
            	native.collapse(s);
            } else {
                native.collapse();
            }
        }
    }
    
    doc("set the range to contain node and its contents")
    shared void selectNode(Node refNode) {
        dynamic {
            native.selectNode(refNode);
        }
    }
    
    doc("set the range to contain the contents of the given node")
    shared void selectNodeContents(Node refNode) {
        dynamic {
            native.selectNodeContents(refNode);
        }
    }
    
    doc("compare the boundery points of one range with another")
    shared JSNumber compareBoundaryPoints(RangeCompareHow how, Range sourceRange) {
        dynamic {
            switch (how)
            case (endToEnd) {
                return JSNumber(native.compareBoundaryPoints(\iRange.\iSTART_TO_START, sourceRange));
            }
            case (endToStart) {
                return JSNumber(native.compareBoundaryPoints(\iRange.\iSTART_TO_END, sourceRange));
            }
            case (startToEnd) {
                return JSNumber(native.compareBoundaryPoints(\iRange.\iEND_TO_END, sourceRange));
            }
            case (startToStart) {
                return JSNumber(native.compareBoundaryPoints(\iRange.\iEND_TO_START, sourceRange));
            }
        }
    }
    
    doc("remove the contents of range from the document")
    shared void deleteContents() {
        dynamic {
            native.deleteContents();
        }
    }
    
    doc("move the contents of the range from their document to a new document fragment")
    shared DocumentFragment extractContents() {
        dynamic {
            return DocumentFragment(native.extractContents());
        }
    }
    
    doc("creates a new document copying the nodes inside of the range")
    shared DocumentFragment cloneContents() {
        dynamic {
            return DocumentFragment(native.cloneContents());
        }
    }
    
    doc("insert a node at the start of the range")
    shared void insertNode(Node newNode) {
        dynamic {
            native.insertNode(newNode);
        }
    }
    
    doc("move the contents of the range into the new node")
    shared void surroundContents(Node newNode) {
        dynamic {
            native.surroundContents(newNode);
        }
    }
    
    doc("clone the range")
    shared Range cloneRange() {
        dynamic {
            return Range(native.cloneRange());
        }
    }
    
    doc("detach a range from use to free resources")
    shared void detach() {
        dynamic {
            native.detach();
        }
    }
    
    doc("is the the current point in the range")
    shared Boolean isPointInRange(Node node, Integer|JSNumber offset) {
        dynamic inRange;
        switch (offset)
        case (is Integer) {
            dynamic {
            	inRange = native.isPointInRange(node, offset);
        	}
        }
        case (is JSNumber) {
            dynamic {
            	inRange = native.isPointInRange(node, offset.native);
        	}
        }
        dynamic {
            if (inRange) {
                return true;
            } else {
                return false;
            }
        }
    }
	
}

doc("DOM range")
shared class Range(dynamic n) extends RangeAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}