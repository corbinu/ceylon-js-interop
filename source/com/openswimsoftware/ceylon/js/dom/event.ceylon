import com.openswimsoftware.ceylon.js.language { JSString, JSDate, JSObjectAbs }
import com.openswimsoftware.ceylon.js.json { JSON, JSJSON }

doc("current Event Phase")
shared abstract class EventPhase(shared Integer num) of none | capturePhase | atTarget | bubblingPhase {}

shared object none extends EventPhase(0) {}
shared object capturePhase extends EventPhase(1) {}
shared object atTarget extends EventPhase(2) {}
shared object bubblingPhase extends EventPhase(3) {}

doc("Event creation options")
shared class EventInit(shared Boolean bubbles, shared Boolean cancelable) {
	
	doc("convert to native JSON")
	shared JSJSON toJson() {
		value json = JSON {
			"bubbles" -> bubbles,
	        "cancelable" -> cancelable
		};
		return json.toJson();
	}
}

doc("create a new Event")
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

shared abstract class EventAbs() extends JSObjectAbs() {
    
    doc("returns the Event type")
    shared JSString type() {
        dynamic {
        	return JSString(native.type);
    	}
    }
    
    doc("returns the event target")
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
    
    doc("returns the current event target")
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
    
    doc("returns current event phase")
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
	
	doc("stops event propagation through further DOM elements")
	shared void stopPropagation() {
		dynamic {
			native.stopPropagation();
		}
	}
	
	doc("returns the event propagation immidately")
	shared void stopImmediatePropagation() {
		dynamic {
			native.stopImmediatePropagation();
		}
	}
	
	doc("does the event bubble through the dom or not")
	shared Boolean bubbles() {
		dynamic {
			if (native.bubbles) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("is the event cancelable or not")
	shared Boolean cancelable() {
		dynamic {
			if (native.cancelable) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("cancels the event if it is cancelable")
	shared void preventDefault() {
		dynamic {
			native.preventDefault();
		}
	}
	
	doc("has the default been prevented")
	shared Boolean defaultPrevented() {
		dynamic {
			if (native.defaultPrevented) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("was the event created by the browser or a script")
	shared Boolean isTrusted() {
		dynamic {
			if (native.isTrusted) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("returns the time the event was created")
	shared JSDate timeStamp() {
		dynamic {
			return JSDate(native.timeStamp);
		}
	}
}

doc("a DOM Event")
shared class Event(dynamic n) extends EventAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}