import ceylon.js.language { JSString, JSObjectAbs }
import ceylon.js.dom { Node }

shared abstract class StyleSheetAbs() extends JSObjectAbs() {
    
    shared JSString type() {
        dynamic {
            return JSString(native.type);
        }
    }
    
    shared Boolean disabled() {
        dynamic {
            if (native.disabled) {
                return true;
        	} else {
        		return false;
        	}
        }
    }
    
    shared Node ownerNode() {
        dynamic {
            return Node(native.ownerNode);
        }
    }
    
    shared StyleSheet parentStyleSheet() {
        dynamic {
            return StyleSheet(native.parentStyleSheet);
        }
    }
	
	shared JSString href() {
		dynamic {
			return JSString(native.href);
		}
	}
	
	shared JSString title() {
		dynamic {
			return JSString(native.title);
		}
	}
	
	shared MediaList media() {
		dynamic {
			return MediaList(native.media);
		}
	}
}

shared class StyleSheet(dynamic n) extends StyleSheetAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}