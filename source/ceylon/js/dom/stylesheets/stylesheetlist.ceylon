import ceylon.js.language { JSNumber, JSString }

shared class StyleSheetList(dynamic n) {
	shared dynamic native;
    dynamic {
        native = n;
    }
	
	shared JSNumber length() {
		dynamic {
			return JSNumber(native.length);
		}
	}
	
	shared StyleSheet? item(Integer|JSString item) {
		
	}
}