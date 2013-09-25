import ceylon.js.dom { EventAbs, Element }
import ceylon.js.language { JSNumber, JSString }

shared abstract class JQueryEventAbs() extends EventAbs() {
	
	shared dynamic data() {
		dynamic {
			return native.data;
		}
	}
	
	shared Element delegateTarget() {
		dynamic {
			return Element(native.delegateTarget);
		}
	}
	
    shared Boolean isDefaultPrevented() {
        dynamic {
            if (native.isDefaultPrevented()) {
                return true;
            } else {
                return false;
            }
    	}
    }
    
    shared Boolean isImmediatePropogationStopped() {
        dynamic {
            if (native.isImmediatePropogationStopped()) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    shared Boolean isPropagationStopped() {
        dynamic {
            if (native.isPropagationStopped()) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    shared JSString namespace() {
        dynamic {
            return JSString(native.namespace);
        }
    }
    
    shared Element relatedTarget() {
        dynamic {
            return Element(native.relatedTarget);
        }
	}
	
	shared dynamic result() {
		dynamic {
			return native.result;
		}
	}
	
    shared JSNumber pageX() {
		dynamic {
			return JSNumber(native.pageX);
		}
	}
	
    shared JSNumber pageY() {
		dynamic {
			return JSNumber(native.pageY);
		}
	}
	
    shared Boolean metaKey() {
		dynamic {
			if (native.metaKey) {
				return true;
			} else {
				return false;
			}
		}
	}
	
    shared JSNumber which() {
		dynamic {
			return JSNumber(native.which);
		}
	}
}

shared class JQueryEvent(dynamic n) extends JQueryEventAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}