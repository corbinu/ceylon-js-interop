import ceylon.js.language { JSString, JSNumber, JSObjectAbs }

shared abstract class HTMLFormElementAbs() extends JSObjectAbs() {
	
	shared JSString getAcceptCharset() {
		dynamic {
			return JSString(native.acceptCharset);
		}
	}
	
	shared void setAcceptCharset(String|JSString acceptCharset) {
		switch (acceptCharset)
		case (is String) {
			dynamic {
				native.acceptCharset = acceptCharset;
			}
		}
		case (is JSString) {
			dynamic {
				native.acceptCharset = acceptCharset.native;
			}
		}
		
	}
	
	shared JSString getAction() {
		dynamic {
			return JSString(native.action);
		}
	}
	
	shared void setAction(String|JSString action) {
		switch (action)
		case (is String) {
			dynamic {
				native.action = action;
			}
		}
		case (is JSString) {
			dynamic {
				native.action = action.native;
			}
		}
		
	}
	
	shared JSString getAutocomplete() {
		dynamic {
			return JSString(native.autocomplete);
		}
	}
	
	shared void setAutocomplete(String|JSString autocomplete) {
		switch (autocomplete)
		case (is String) {
			dynamic {
				native.autocomplete = autocomplete;
			}
		}
		case (is JSString) {
			dynamic {
				native.autocomplete = autocomplete.native;
			}
		}
		
	}
	
	shared JSString getEnctype() {
		dynamic {
			return JSString(native.enctype);
		}
	}
	
	shared void setEnctype(String|JSString enctype) {
		switch (enctype)
		case (is String) {
			dynamic {
				native.enctype = enctype;
			}
		}
		case (is JSString) {
			dynamic {
				native.enctype = enctype.native;
			}
		}
		
	}
	
	shared JSString getEncoding() {
		dynamic {
			return JSString(native.encoding);
		}
	}
	
	shared void setEncoding(String|JSString encoding) {
		switch (encoding)
		case (is String) {
			dynamic {
				native.encoding = encoding;
			}
		}
		case (is JSString) {
			dynamic {
				native.encoding = encoding.native;
			}
		}
		
	}
	
	shared JSString getMethod() {
		dynamic {
			return JSString(native.method);
		}
	}
	
	shared void setMethod(String|JSString method) {
		switch (method)
		case (is String) {
			dynamic {
				native.method = method;
			}
		}
		case (is JSString) {
			dynamic {
				native.method = method.native;
			}
		}
		
	}
	
	shared JSString getName() {
		dynamic {
			return JSString(native.name);
		}
	}
	
	shared void setName(String|JSString name) {
		switch (name)
		case (is String) {
			dynamic {
				native.name = name;
			}
		}
		case (is JSString) {
			dynamic {
				native.name = name.native;
			}
		}
	}
	
	shared Boolean getNoValidate() {
		dynamic {
			if (native.noValidate) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared void setNoValidate(Boolean noValidate) {
		dynamic {
			native.noValidate = noValidate;
		}
	}
	
	shared JSString getTarget() {
		dynamic {
			return JSString(native.target);
		}
	}
	
	shared void setTarget(String|JSString target) {
		switch (target)
		case (is String) {
			dynamic {
				native.target = target;
			}
		}
		case (is JSString) {
			dynamic {
				native.target = target.native;
			}
		}
	}
	
	/*shared HTMLFormControlsCollection elements() {
		dynamic {
			return HTMLFormControlsCollection(native.elements);
		}
	}*/
	
	shared JSNumber length() {
		dynamic {
			return JSNumber(native.length);
		}
	}
	
	shared Boolean checkValidity() {
		dynamic {
			if (native.checkValidity()) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared void submit() {
		dynamic {
			native.submit();
		}
	}
	
	shared void reset() {
		dynamic {
			native.reset();
		}
	}
	
}

shared class HTMLFormElement(dynamic n) extends HTMLFormElementAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

/*shared abstract class HTMLFormControlsCollectionAbs() extends HTMLCollectionAbs() {}

shared class HTMLFormControlsCollection(dynamic n) extends HTMLFormControlsCollectionAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}*/
