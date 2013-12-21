import com.openswimsoftware.ceylon.js.language { JSString, JSNumber, JSObjectAbs }

shared abstract class HTMLFormElementAbs() extends JSObjectAbs() {
	
	doc("get accept charset attribute")
	shared JSString getAcceptCharset() {
		dynamic {
			return JSString(native.acceptCharset);
		}
	}
	
	doc("set accept charset attribute")
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
	
	doc("returns action attribute")
	shared JSString getAction() {
		dynamic {
			return JSString(native.action);
		}
	}
	
	doc("set action attribute")
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
	
	doc("returns autocomplete attribute")
	shared JSString getAutocomplete() {
		dynamic {
			return JSString(native.autocomplete);
		}
	}
	
	doc("set autocomplete attribute")
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
	
	doc("get the encoding attribute")
	shared JSString getEnctype() {
		dynamic {
			return JSString(native.enctype);
		}
	}
	
	doc("set the encoding attribute")
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
	
	doc("returns the encoding attribute")
	shared JSString getEncoding() {
		dynamic {
			return JSString(native.encoding);
		}
	}
	
	doc("set the encoding attribute")
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
	
	doc("get the method attribute")
	shared JSString getMethod() {
		dynamic {
			return JSString(native.method);
		}
	}
	
	doc("set the method attribute")
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
	
	doc("returns the name attribute")
	shared JSString getName() {
		dynamic {
			return JSString(native.name);
		}
	}
	
	doc("set the name attribute")
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
	
	doc("is validation enabled")
	shared Boolean getNoValidate() {
		dynamic {
			if (native.noValidate) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("disable validation")
	shared void setNoValidate(Boolean noValidate) {
		dynamic {
			native.noValidate = noValidate;
		}
	}
	
	doc("returns the name of the target attribute")
	shared JSString getTarget() {
		dynamic {
			return JSString(native.target);
		}
	}
	
	doc("set the name of the target attribute")
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
	
	doc("number of controls in the form")
	shared JSNumber length() {
		dynamic {
			return JSNumber(native.length);
		}
	}
	
	doc("check if the form is current valid")
	shared Boolean checkValidity() {
		dynamic {
			if (native.checkValidity()) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("submit the form")
	shared void submit() {
		dynamic {
			native.submit();
		}
	}
	
	doc("reset the form")
	shared void reset() {
		dynamic {
			native.reset();
		}
	}
	
}

doc("HTML Form Element")
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
