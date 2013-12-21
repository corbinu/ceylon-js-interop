shared abstract class JSFunctionAbs() extends JSObjectAbs() {
	
	doc("returns number of arguments exepcted buy the function")
	shared JSNumber length() {
		dynamic {
			return JSNumber(native.length);
		}
	}
	
	doc("returns a new function with thisArg as the this element and a set of args to prepend when the target function is called")
	shared JSFunction bind(JSObject thisArg, JSObject* args) {
		dynamic {
			// TODO native args should be spread
			return JSFunction(native.bind.apply(null, createJSArray(thisArg.native).concat(args*.native).native));
		}
	}
	
	doc("is the function a generator")
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

doc("native Function")
shared class JSFunction(dynamic n) extends JSFunctionAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}