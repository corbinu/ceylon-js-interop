import ceylon.js.language { JSNumber, JSObjectAbs }

shared abstract class StyleSheetListAbs() extends JSObjectAbs() {
	
	shared JSNumber length() {
		dynamic {
			return JSNumber(native.length);
		}
	}
	
	shared StyleSheet? item(Integer|JSNumber index) {
		dynamic {
			dynamic element = native.item(index);
			if (element != \inull) {
				return StyleSheet(element);
			} else {
				return null;
			}
		}
	}
}

shared class StyleSheetList(dynamic n) extends StyleSheetListAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}