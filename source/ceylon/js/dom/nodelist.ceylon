shared class NodeList(dynamic n) {
	shared dynamic native;
    dynamic {
        native = n;
    }
	
    shared Node? item(Integer index) {
		dynamic {
			dynamic item = native.item(index);
			if (item != \inull) {
				return Node(item);
			} else {
				return null;
			}
		}
	}
	
    shared Number length() {
		dynamic {
			return Number(native.length);
		}
	}
}