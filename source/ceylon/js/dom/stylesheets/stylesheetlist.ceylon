import ceylon.js.language { JSNumber, JSObject }

shared class StyleSheetList(dynamic n) extends JSObject(n) {
	
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