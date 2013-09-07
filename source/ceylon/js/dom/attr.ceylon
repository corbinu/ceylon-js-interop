import ceylon.js.language { JSString }

shared class Attr(dynamic n) {
	shared dynamic native;
    dynamic {
        native = n;
    }
    
    shared Boolean isId() {
        dynamic {
            if (native.isId) {
                return true;
            } else {
                return false;
			}
        }
    }
    
    shared JSString name() {
        dynamic {
            return JSString(native.name);
        }
    }
    
    shared JSString getValue() {
        dynamic {
            return JSString(native.\ivalue);
        }
	}
	
	shared void setValue(String|JSString val) {
		switch (val)
		case (is String) {
			dynamic {
				native.\ivalue = val;
			}
		}
		case (is JSString) {
			dynamic {
				native.\ivalue = val.native;
			}
		}
	}
}