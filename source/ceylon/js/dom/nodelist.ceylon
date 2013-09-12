import ceylon.js.language { JSNumber, JSObject }

shared class NodeList(dynamic n) extends JSObject(n) {
	
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