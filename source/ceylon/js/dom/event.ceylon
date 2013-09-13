import ceylon.js.language { JSString, JSDate, JSObjectAbs }
import ceylon.js.json { JSON, JSJSON }

shared abstract class EventPhase(shared Integer num) of none | capturePhase | atTarget | bubblingPhase {}

shared object none extends EventPhase(0) {}
shared object capturePhase extends EventPhase(1) {}
shared object atTarget extends EventPhase(2) {}
shared object bubblingPhase extends EventPhase(3) {}

shared class EventInit(shared Boolean bubbles, shared Boolean cancelable) {
	shared JSJSON toJson() {
		value json = JSON {
			"bubbles" -> bubbles,
	        "cancelable" -> cancelable
		};
		return json.toJson();
	}
}

shared Event createEvent(String|JSString type, EventInit options) {
	switch (type)
	case (is String) {
		dynamic {
			return Event(\iEvent(type, options.toJson()));
		}
	}
	case (is JSString) {
		dynamic {
			return Event(\iEvent(type.native, options.toJson()));
		}
	}
}

shared class Event(dynamic n) extends EventAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class EventAbs() extends JSObjectAbs() {
    
    shared JSString type() {
        dynamic {
        	return JSString(native.type);
    	}
    }
    
    shared EventTarget? target() {
        dynamic target;
        dynamic {
            target = native.target;
        	if (target != \inull) {
                return EventTarget(target);
            } else {
                return null;
            }
    	}
    }
    
    shared EventTarget? currentTarget() {
        dynamic target;
        dynamic {
            target = native.currentTarget;
            if (target != \inull) {
                return EventTarget(target);
            } else {
                return null;
            }
        	
    	}
    }
    
    shared EventPhase eventPhase() {
        dynamic {
            dynamic eventPhase = native.eventPhase;
            if (eventPhase == \iEvent.\iNONE) {
                return none;
            } else if (eventPhase == \iEvent.\iCAPTURING_PHASE) {
                return capturePhase;
            } else if (eventPhase == \iEvent.\iAT_TARGET) {
                return atTarget;
            } else {
                return bubblingPhase;
            }
    	}
	}
	
	shared void stopPropagation() {
		dynamic {
			native.stopPropagation();
		}
	}
	
	shared void stopImmediatePropagation() {
		dynamic {
			native.stopImmediatePropagation();
		}
	}
	
	shared Boolean bubbles() {
		dynamic {
			if (native.bubbles) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared Boolean cancelable() {
		dynamic {
			if (native.cancelable) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared void preventDefault() {
		dynamic {
			native.preventDefault();
		}
	}
	
	shared Boolean defaultPrevented() {
		dynamic {
			if (native.defaultPrevented) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared Boolean isTrusted() {
		dynamic {
			if (native.isTrusted) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared JSDate timeStamp() {
		dynamic {
			return JSDate(native.timeStamp);
		}
	}
	
	shared void initEvent(String|JSString type, Boolean bubbles, Boolean cancelable) {
		switch (type)
        case (is String) {
            dynamic {
            	native.initEvent(type, callback, capture);
        	}
        }
        case (is JSString) {
            dynamic {
            	native.initEvent(type.native, callback, capture);
       		}
        }
	}
	
}