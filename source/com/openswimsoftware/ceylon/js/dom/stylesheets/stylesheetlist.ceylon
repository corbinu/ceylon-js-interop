import com.openswimsoftware.ceylon.js.language { JSNumber, JSObjectAbs }

shared abstract class StyleSheetListAbs() extends JSObjectAbs() {
	
	doc("returns the length of the StyleSheet Collection")
	shared JSNumber length() {
		dynamic {
			return JSNumber(native.length);
		}
	}
	
	doc("returns the StyleSheet at the specified index")
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

doc("a collection of StyleSheets")
shared class StyleSheetList(dynamic n) extends StyleSheetListAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}