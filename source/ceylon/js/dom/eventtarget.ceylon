import ceylon.js.language { JSObjectAbs, JSString }

shared class EventTarget(dynamic n) extends EventTargetAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class EventTargetAbs() extends JSObjectAbs() {
	
	shared void addEventListener(String|JSString type, void callback(Event event), Boolean capture = false) {
		switch (type)
		case (is String) {
			dynamic {
				native.addEventListener(type, callback, capture);
			}
		}
		case (is JSString) {
			dynamic {
				native.addEventListener(type.native, callback, capture);
			}
		}
	}
	
	shared void removeEventListener(String|JSString type, void callback(Event event), Boolean capture = false) {
		switch (type)
		case (is String) {
			dynamic {
				native.removeEventListener(type, callback, capture);
			}
		}
		case (is JSString) {
			dynamic {
				native.removeEventListener(type.native, callback, capture);
			}
		}
	}
	
	shared Boolean dispatchEvent(Event event) {
		dynamic {
			if (native.dispatchEvent(event)) {
				return true;
			} else {
				return false;
			}
		}
	}
}