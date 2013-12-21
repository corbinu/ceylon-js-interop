import com.openswimsoftware.ceylon.js.language { JSNumber, JSString, JSObject, JSObjectAbs }

shared abstract class HTMLCollectionAbs() extends JSObjectAbs() {
	
	doc("returns the length of the collection")
	shared JSNumber length() {
		dynamic {
			return JSNumber(native.length);
		}
	}
	
	doc("return the node at the given index")
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
	
	doc("return the node whose id or name matches the passed name")
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

doc("a DOM HTMLCollection")
shared class HTMLCollection(dynamic n) extends HTMLCollectionAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}
