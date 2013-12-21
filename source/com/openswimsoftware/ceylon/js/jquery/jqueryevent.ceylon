import com.openswimsoftware.ceylon.js.dom { EventAbs, Element }
import com.openswimsoftware.ceylon.js.language { JSNumber, JSString }

shared abstract class JQueryEventAbs() extends EventAbs() {
	
	doc("optional data attached to the event method")
	shared dynamic data() {
		dynamic {
			return native.data;
		}
	}
	
	doc("the elment on which the jQuery event handler was attached")
	shared Element delegateTarget() {
		dynamic {
			return Element(native.delegateTarget);
		}
	}
	
	doc("was event.preventDefault() was ever called on this event object.")
    shared Boolean isDefaultPrevented() {
        dynamic {
            if (native.isDefaultPrevented()) {
                return true;
            } else {
                return false;
            }
    	}
    }
    
    doc("was event.stopImmediatePropagation() was ever called on this event object.")
    shared Boolean isImmediatePropogationStopped() {
        dynamic {
            if (native.isImmediatePropogationStopped()) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    doc("was event.isPropagationStopped() was ever called on this event object.")
    shared Boolean isPropagationStopped() {
        dynamic {
            if (native.isPropagationStopped()) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    doc("namespace specified when the event was triggered")
    shared JSString namespace() {
        dynamic {
            return JSString(native.namespace);
        }
    }
    
    doc("the other element involved in the event, if any.")
    shared Element relatedTarget() {
        dynamic {
            return Element(native.relatedTarget);
        }
	}
	
	doc("last value returned by an event handler that was triggered by this event, unless the value was undefined")
	shared dynamic result() {
		dynamic {
			return native.result;
		}
	}
	
	doc("the mouse position relative to the left edge of the document")
    shared JSNumber pageX() {
		dynamic {
			return JSNumber(native.pageX);
		}
	}
	
	doc("the mouse position relative to the top edge of the document")
    shared JSNumber pageY() {
		dynamic {
			return JSNumber(native.pageY);
		}
	}
	
	doc("was the meta key pressed while the event was fired")
    shared Boolean metaKey() {
		dynamic {
			if (native.metaKey) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("the specific key or mouse button that triggered the event if any")
    shared JSNumber which() {
		dynamic {
			return JSNumber(native.which);
		}
	}
}

doc("a jQuery Event")
shared class JQueryEvent(dynamic n) extends JQueryEventAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}