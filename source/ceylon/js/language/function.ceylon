shared abstract class JSFunctionAbs() extends JSObjectAbs() {
	
	shared JSNumber length() {
		dynamic {
			return JSNumber(native.length);
		}
	}
	
	shared void bind(JSObject thisArg, JSObject* args) {
		dynamic {
			// TODO this should be calling applyJS but JSObject is not a super type of JSArray
			JSFunction(native.bind).apply(null, createJSArray(thisArg.native).concat(args*.native).native);
		}
	}
	
	shared Boolean isGenerator() {
		dynamic {
			if (native.isGenerator()) {
				return true;
			} else {
				return false;
			}
		}
	}
}

shared class JSFunction(dynamic n) extends JSFunctionAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}