import ceylon.js.language { JSObjectAbs }

shared abstract class DeferredState(String name) of deferredStatePending | deferredStateResolved | deferredStateRejected {}

shared object deferredStatePending extends DeferredState("pending") {}
shared object deferredStateResolved extends DeferredState("resolved") {}
shared object deferredStateRejected extends DeferredState("rejected") {}

shared class Deferred(dynamic n) extends DeferredAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class DeferredAbs() extends JSObjectAbs() {
	
	shared Deferred always(Anything(Anything*)* alwaysCallbacks) {
		dynamic {
			return Deferred(native.always(*alwaysCallbacks));
		}
	}
	
	shared Deferred done(Anything(Anything*)* doneCallbacks) {
		dynamic {
			return Deferred(native.done(*doneCallbacks));
		}
	}
	
	shared Deferred fail(Anything(Anything*)* failCallbacks) {
		dynamic {
			return Deferred(native.fail(*failCallbacks));
		}
	}
	
	shared Deferred thenFilter(Anything(Anything*) doneFilter, Anything(Anything*)? failFilter = null, Anything(Anything*)? progressFilter = null) {
		dynamic {
			return Deferred(native.\ithen(doneFilter, failFilter, progressFilter));
		}
	}
	
	shared Deferred notify(Anything* args) {
		dynamic {
			return Deferred(native.notify(*args));
		}
	}
	
	shared Deferred notifyWith(Anything context, Anything* args) {
		dynamic {
			return Deferred(native.notifyWith(context, *args));
		}
	}
	
	shared Deferred progress(Anything(Anything*)* progressCallbacks) {
		dynamic {
			return Deferred(native.progress(*progressCallbacks));
		}
	}
	
	shared Promise promise(Anything? target = null) {
		dynamic {
			return Promise(native.promise(target));
		}
	}
	
	shared Deferred reject(Anything* args) {
		dynamic {
			return Deferred(native.reject(*args));
		}
	}
	
	shared Deferred rejectWith(Anything context, Anything* args) {
		dynamic {
			return Deferred(native.rejectWith(context, *args));
		}
	}
	
	shared Deferred resolve(Anything* args) {
		dynamic {
			return Deferred(native.resolve(*args));
		}
	}
	
	shared Deferred resolveWith(Anything context, Anything* args) {
		dynamic {
			return Deferred(native.resolveWith(context, *args));
		}
	}
	
	shared DeferredState state() {
		dynamic {
			if (native.state == "pending") {
				return deferredStatePending;
			} else if (native.state == "resolved") {
				return deferredStateResolved;
			} else {
				return deferredStateResolved;
			}
		}
	}
}