import ceylon.js.language { JSObjectAbs }

shared class Promise(dynamic n) extends PromiseAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class PromiseAbs() extends JSObjectAbs() {
	
	shared Promise always(Anything(Anything*)* alwaysCallbacks) {
		dynamic {
			return Promise(native.always(*alwaysCallbacks));
		}
	}
	
	shared Promise done(Anything(Anything*)* doneCallbacks) {
		dynamic {
			return Promise(native.done(*doneCallbacks));
		}
	}
	
	shared Promise fail(Anything(Anything*)* failCallbacks) {
		dynamic {
			return Promise(native.fail(*failCallbacks));
		}
	}
	
	shared Promise thenFilter(Anything(Anything*) doneFilter, Anything(Anything*)? failFilter = null, Anything(Anything*)? progressFilter = null) {
		dynamic {
			return Promise(native.\ithen(doneFilter, failFilter, progressFilter));
		}
	}
}