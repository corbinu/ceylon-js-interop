import ceylon.js.language { JSNumber, JSString, JSObject }

shared abstract class RangeCompareHow(String name) of endToEnd | endToStart | startToEnd | startToStart {}

shared object endToEnd extends RangeCompareHow("endToEnd") {}
shared object endToStart extends RangeCompareHow("endToStart") {}
shared object startToEnd extends RangeCompareHow("startToEnd") {}
shared object startToStart extends RangeCompareHow("startToStart") {}

shared class Range(dynamic n) extends JSObject(n) {
    
    shared Node startContainer() {
        dynamic {
            return Node(native.startContainer);
        }
    }
    
    shared Node endContainer() {
        dynamic {
            return Node(native.endContainer);
        }
    }
    
    shared JSNumber startOffset() {
        dynamic {
            return JSNumber(native.startOffset);
        }
    }
    
    shared JSNumber endOffset() {
        dynamic {
            return JSNumber(native.endOffset);
        }
    }
    
    shared Boolean collapsed() {
        dynamic {
        	if (native.collapsed()) {
        		return true;
        	} else {
        		return false;
        	}
    	}
    }
    
    shared Node commonAncestorContainer() {
        dynamic {
            return Node(native.commonAncestorContainer);
        }
    }
    
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
    
    shared void setStartBefore(Node refNode) {
        dynamic {
            native.setStartBefore(refNode);
        }
    }
    
    shared void setStartAfter(Node refNode) {
        dynamic {
            native.setStartAfter(refNode);
        }
    }
    
    shared void setEndBefore(Node refNode) {
        dynamic {
            native.setEndBefore(refNode);
        }
    }
    
    shared void setEndAfter(Node refNode) {
        dynamic {
            native.setEndAfter(refNode);
        }
    }
    
    shared void collapse(Boolean? toStart = null) {
        dynamic {
            if (exists s = toStart) {
            	native.collapse(s);
            } else {
                native.collapse();
            }
        }
    }
    
    shared void selectNode(Node refNode) {
        dynamic {
            native.selectNode(refNode);
        }
    }
    
    shared void selectNodeContents(Node refNode) {
        dynamic {
            native.selectNodeContents(refNode);
        }
    }
    
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
    
    shared void deleteContents() {
        dynamic {
            native.deleteContents();
        }
    }
    
    shared DocumentFragment extractContents() {
        dynamic {
            return DocumentFragment(native.extractContents());
        }
    }
    
    shared DocumentFragment cloneContents() {
        dynamic {
            return DocumentFragment(native.cloneContents());
        }
    }
    
    shared void insertNode(Node newNode) {
        dynamic {
            native.insertNode(newNode);
        }
    }
    
    shared void surroundContents(Node newNode) {
        dynamic {
            native.surroundContents(newNode);
        }
    }
    
    shared Range cloneRange() {
        dynamic {
            return native.cloneRange();
        }
    }
    
    shared void detach() {
        dynamic {
            native.detach();
        }
    }
    
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
    
    shared JSString toString() {
        dynamic {
            return JSString(native.toString());
        }
    }
	
}