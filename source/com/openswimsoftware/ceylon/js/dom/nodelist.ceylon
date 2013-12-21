import com.openswimsoftware.ceylon.js.language { JSNumber, JSObjectAbs }

shared abstract class NodeListAbs() extends JSObjectAbs() {
	
	doc("returns he node at the given index")
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
	
	doc("returns the length of the node collection")
    shared JSNumber length() {
		dynamic {
			return JSNumber(native.length);
		}
	}
}

doc("collection of DOM nodes")
shared class NodeList(dynamic n) extends NodeListAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}
