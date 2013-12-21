import com.openswimsoftware.ceylon.js.language { JSObjectAbs, JSObject }

doc("the current state of the deferred object")
shared abstract class DeferredState(String name) of deferredStatePending | deferredStateResolved | deferredStateRejected {}

shared object deferredStatePending extends DeferredState("pending") {}
shared object deferredStateResolved extends DeferredState("resolved") {}
shared object deferredStateRejected extends DeferredState("rejected") {}

shared abstract class DeferredAbs() extends JSObjectAbs() {
	
	doc("add handlers to be called when the deferred object is either resolved or rejected")
	shared Deferred always(dynamic alwaysCallbacks) {
		dynamic {
			// TODO spread the callbacks
			return Deferred(native.always(alwaysCallbacks));
		}
	}
	
	doc("add handlers to be called when the deferred object is resolved")
	shared Deferred done(dynamic doneCallbacks) {
		dynamic {
			// TODO spread the callbacks
			return Deferred(native.done(doneCallbacks));
		}
	}
	
	doc("add handlers to be called when the deferred object is rejected")
	shared Deferred fail(dynamic failCallbacks) {
		dynamic {
			// TODO spread the callbacks
			return Deferred(native.fail(failCallbacks));
		}
	}
	
	doc("add handlers to be called when the deferred object is either resolved, rejected or are still in progress")
	shared Deferred thenFilter(dynamic doneFilter, dynamic failFilter, dynamic progressFilter) {
		dynamic {
			return Deferred(native.\ithen(doneFilter, failFilter, progressFilter));
		}
	}
	
	doc("call the progress callbacks on deferred with the given args")
	shared Deferred notify(JSObject args) {
		dynamic {
			return Deferred(native.notify(args.native));
		}
	}
	
	doc("call the progress callbacks on deferred with the given args with the given context")
	shared Deferred notifyWith(JSObject context, JSObject args) {
		dynamic {
			return Deferred(native.notifyWith(context.native, args.native));
		}
	}
	
	doc("add handlers to be called when the deferred objects progress is updated")
	shared Deferred progress(dynamic progressCallbacks) {
		dynamic {
			// TODO spread the callbacks
			return Deferred(native.progress(progressCallbacks));
		}
	}
	
	doc("convert the deferred to a promise on the given target")
	shared Promise promise(dynamic target) {
		dynamic {
			return Promise(native.promise(target));
		}
	}
	
	doc("call the fail callbacks on deferred with the given args")
	shared Deferred reject(JSObject args) {
		dynamic {
			return Deferred(native.reject(args.native));
		}
	}
	
	doc("call the fail callbacks on deferred with the given args and the given context")
	shared Deferred rejectWith(JSObject context, JSObject args) {
		dynamic {
			return Deferred(native.rejectWith(context.native, args.native));
		}
	}
	
	doc("resolve the deferred object and call the done callbacks on deferred with the given args")
	shared Deferred resolve(JSObject args) {
		dynamic {
			return Deferred(native.resolve(args.native));
		}
	}
	
	doc("resolve the deferred object and call the done callbacks on deferred with the given args and the given context")
	shared Deferred resolveWith(JSObject context, JSObject args) {
		dynamic {
			return Deferred(native.resolveWith(context.native, args.native));
		}
	}
	
	doc("returns the current state of the deferred object")
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

doc("used for callback queues")
shared class Deferred(dynamic n) extends DeferredAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}