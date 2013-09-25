import ceylon.js.language { JSObjectAbs }

shared abstract class CallbacksAbs() extends JSObjectAbs() {
	
	shared Callbacks add(Anything(Anything*)* callbacks) {
		dynamic {
			return Callbacks(native.add(callbacks));
		}
	}
	
	shared Callbacks disable() {
		dynamic {
			return Callbacks(native.disable());
		}
	}
	
	shared Boolean disabled() {
		dynamic {
			if (native.disabled()) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared Callbacks empty() {
		dynamic {
			return Callbacks(native.empty());
		}
	}
	
	shared Callbacks fire(Anything* args) {
		dynamic {
			return Callbacks(native.fire(*args));
		}
	}
	
	shared Boolean fired() {
		dynamic {
			if (native.fired()) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared Callbacks fireWith(Anything? context = null, Anything* args) {
		dynamic {
			return Callbacks(native.fireWith(context, *args));
		}
	}
	
	shared Boolean has(Anything(Anything*) callback) {
		dynamic {
			if (native.has(callback)) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared Callbacks lock() {
		dynamic {
			return Callbacks(native.lock());
		}
	}
	
	shared Boolean locked() {
		dynamic {
			if (native.locked()) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared Callbacks remove(Anything(Anything*)* callbacks) {
		dynamic {
			return Callbacks(native.remove(callbacks));
		}
	}
}

shared class Callbacks(dynamic n) extends CallbacksAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}