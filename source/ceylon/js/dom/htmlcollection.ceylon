shared class HTMLCollection(dynamic n) {
	shared dynamic native;
    dynamic {
        native = n;
    }
	
	shared Number length() {
		dynamic {
			return Number(native.length);
		}
	}
	
	shared Element? item(Integer index) {
		dynamic {
			dynamic item = native.item(index);
			if (item != \inull) {
				return Element(item);
			} else  {
				return null;
			}
		}
	}
	
	doc("returns JSObject or null")
	shared dynamic namedItem(String name) {
		dynamic {
			return native.namedItem(name);
		}
	}
}