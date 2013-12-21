import com.openswimsoftware.ceylon.js.language { JSObjectAbs }

shared abstract class PromiseAbs() extends JSObjectAbs() {
	
	doc("add handlers to be called when the deferred object is either resolved or rejected")
	shared Promise always(dynamic alwaysCallbacks) {
		dynamic {
			// TODO spread the callbacks
			return Promise(native.always(alwaysCallbacks));
		}
	}
	
	doc("add handlers to be called when the deferred object is resolved")
	shared Promise done(dynamic doneCallbacks) {
		dynamic {
			// TODO spread the callbacks
			return Promise(native.done(doneCallbacks));
		}
	}
	
	doc("add handlers to be called when the deferred object is rejected")
	shared Promise fail(dynamic failCallbacks) {
		dynamic {
			// TODO spread the callbacks
			return Promise(native.fail(failCallbacks));
		}
	}
	
	doc("add handlers to be called when the deferred object is either resolved, rejected or are still in progress")
	shared Promise thenFilter(dynamic doneFilter, dynamic failFilter, dynamic progressFilter) {
		dynamic {
			return Promise(native.\ithen(doneFilter, failFilter, progressFilter));
		}
	}
}

doc("a subset of Deferred which is used for managing a set of callbacks")
shared class Promise(dynamic n) extends PromiseAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}