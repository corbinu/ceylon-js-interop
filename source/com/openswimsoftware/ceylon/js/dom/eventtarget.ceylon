import com.openswimsoftware.ceylon.js.language { JSObjectAbs, JSString }

shared abstract class EventTargetAbs() extends JSObjectAbs() {
	
	doc("add an event listener to the target")
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
	
	doc("remove an event listener from the target")
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
	
	doc("dispatch an event at the target")
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

doc("a DOM EventTarget")
shared class EventTarget(dynamic n) extends EventTargetAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}
