import com.openswimsoftware.ceylon.js.language { JSObjectAbs }

shared abstract class CallbacksAbs() extends JSObjectAbs() {
	
	doc("add a callback or collection of callbacks")
	shared Callbacks add(dynamic callbacks) {
		dynamic {
			// TODO should spread callback
			return Callbacks(native.add(callbacks));
		}
	}
	
	doc("disable the callback list from doing anything")
	shared Callbacks disable() {
		dynamic {
			return Callbacks(native.disable());
		}
	}
	
	doc("is the callback list disabled")
	shared Boolean disabled() {
		dynamic {
			if (native.disabled()) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("remove all the callbacks from the list")
	shared Callbacks empty() {
		dynamic {
			return Callbacks(native.empty());
		}
	}
	
	doc("fire all the backs with the given arguments")
	shared Callbacks fire(dynamic args) {
		dynamic {
			// TODO spread the args
			return Callbacks(native.fire(args));
		}
	}
	
	doc("have the callbacks been fired at least once")
	shared Boolean fired() {
		dynamic {
			if (native.fired()) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("fire all the backs with the given arguments and the given context")
	shared Callbacks fireWith(dynamic context, Anything* args) {
		dynamic {
			return Callbacks(native.fireWith(context, *args));
		}
	}
	
	doc("does the collection contain the given callback")
	shared Boolean has(dynamic callback) {
		dynamic {
			if (native.has(callback)) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("lock the callback list in its current state")
	shared Callbacks lock() {
		dynamic {
			return Callbacks(native.lock());
		}
	}
	
	doc("is the callback list locked")
	shared Boolean locked() {
		dynamic {
			if (native.locked()) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("remove a callback or collection of callbacks")
	shared Callbacks remove(dynamic callbacks) {
		dynamic {
			return Callbacks(native.remove(callbacks));
		}
	}
}

doc("a collection of callbacks")
shared class Callbacks(dynamic n) extends CallbacksAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}