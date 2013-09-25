import ceylon.js.language { JSNumber, JSString, JSObject, JSObjectAbs }

shared abstract class HTMLCollectionAbs() extends JSObjectAbs() {
	
	shared JSNumber length() {
		dynamic {
			return JSNumber(native.length);
		}
	}
	
	shared Element? item(Integer|JSNumber index) {
		dynamic item;
		switch (index)
		case (is Integer) {
			dynamic {
				item = native.item(index);
			}
		}
		case (is JSNumber) {
			dynamic {
				item = native.item(index.native);
			}
		}
		dynamic {
			if (item != \inull) {
				return Element(item);
			} else  {
				return null;
			}
		}
	}
	
	shared JSObject? namedItem(String|JSString name) {
		dynamic namedItem;
		switch (name)
		case (is String) {
			dynamic {
				namedItem = native.namedItem(name);
			}
		}
		case (is JSString) {
			dynamic {
				namedItem = native.namedItem(name.native);
			}
		}
		dynamic {
			if (namedItem == \inull) {
				return JSObject(namedItem);
			} else {
				return null;
			}
		}
	}
}

shared class HTMLCollection(dynamic n) extends HTMLCollectionAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}
