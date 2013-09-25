import ceylon.js.language { JSString }

shared abstract class DocumentTypeAbs() extends NodeAbs() {
	
	shared JSString name() {
		dynamic {
			return JSString(native.name);
		}
	}
	
	shared JSString publicId() {
		dynamic {
			return JSString(native.publicId);
		}
	}
	
	shared JSString systemId() {
		dynamic {
			return JSString(native.systemId);
		}
	}
}

shared class DocumentType(dynamic n) extends DocumentTypeAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}