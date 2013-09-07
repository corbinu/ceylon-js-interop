shared class DocumentType(dynamic n) extends Node(n) {
	
	doc("returns String")
    shared dynamic name() {
		dynamic {
			return native.name;
		}
	}
	
	doc("returns String")
    shared dynamic publicId() {
		dynamic {
			return native.publicId;
		}
	}
	
	doc("returns String")
    shared dynamic systemId() {
		dynamic {
			return native.systemId;
		}
	}
}