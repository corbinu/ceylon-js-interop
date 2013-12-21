import com.openswimsoftware.ceylon.js.language { JSString, JSObjectAbs }
import com.openswimsoftware.ceylon.js.dom { Node }

shared abstract class StyleSheetAbs() extends JSObjectAbs() {
    
    doc("returns StyleSheets mime type string")
    shared JSString type() {
        dynamic {
            return JSString(native.type);
        }
    }
    
    doc("returns if the StyleSheet is disabled or not")
    shared Boolean disabled() {
        dynamic {
            if (native.disabled) {
                return true;
        	} else {
        		return false;
        	}
        }
    }
    
    doc("returns StyleSheets owning node")
    shared Node ownerNode() {
        dynamic {
            return Node(native.ownerNode);
        }
    }
    
    doc("returns StyleSheets parent")
    shared StyleSheet parentStyleSheet() {
        dynamic {
            return StyleSheet(native.parentStyleSheet);
        }
    }
	
	doc("returns StyleSheet location")
	shared JSString href() {
		dynamic {
			return JSString(native.href);
		}
	}
	
	doc("returns StyleSheet title")
	shared JSString title() {
		dynamic {
			return JSString(native.title);
		}
	}
	
	doc("returns the collection of Media Queries associated with the StyleSheet")
	shared MediaList media() {
		dynamic {
			return MediaList(native.media);
		}
	}
}

doc("represents a basic StyleSheet")
shared class StyleSheet(dynamic n) extends StyleSheetAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}