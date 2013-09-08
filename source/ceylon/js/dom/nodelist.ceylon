import ceylon.js.language { JSNumber }

shared class NodeList(dynamic n) {
	shared dynamic native;
    dynamic {
        native = n;
    }
	
    shared Node? item(Integer|JSNumber index) {
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
				return Node(item);
			} else {
				return null;
			}
		}
	}
	
    shared JSNumber length() {
		dynamic {
			return JSNumber(native.length);
		}
	}
}