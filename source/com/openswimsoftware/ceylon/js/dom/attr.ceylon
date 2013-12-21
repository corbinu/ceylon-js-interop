import com.openswimsoftware.ceylon.js.language { JSString, JSObjectAbs }

shared abstract class AttrAbs() extends JSObjectAbs() {
    
    doc("returns the Attr is an ID or not")
    shared Boolean isId() {
        dynamic {
            if (native.isId) {
                return true;
            } else {
                return false;
			}
        }
    }
    
    doc("returns the Attr name")
    shared JSString name() {
        dynamic {
            return JSString(native.name);
        }
    }
    
    doc("returns the Attr value string")
    shared JSString getValue() {
        dynamic {
            return JSString(native.\ivalue);
        }
	}
	
	doc("sets the Attr value string")
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

doc("a DOM Attr")
shared class Attr(dynamic n) extends AttrAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}
