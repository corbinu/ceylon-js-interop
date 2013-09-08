import ceylon.js.language { JSNumber, JSString }

shared class HTMLCollection(dynamic n) {
	shared dynamic native;
    dynamic {
        native = n;
    }
	
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
	
	// TODO
	doc("returns JSObject or null")
	shared dynamic namedItem(String|JSString name) {
		switch (name)
		case (is String) {
			dynamic {
				return native.namedItem(name);
			}
		}
		case (is JSString) {
			dynamic {
				return native.namedItem(name.native);
			}
		}
	}
}