import com.openswimsoftware.ceylon.js.language { JSString }

shared abstract class DocumentTypeAbs() extends NodeAbs() {
	
	doc("returns the document type name")
	shared JSString name() {
		dynamic {
			return JSString(native.name);
		}
	}
	
	doc("returns the document types public id string")
	shared JSString publicId() {
		dynamic {
			return JSString(native.publicId);
		}
	}
	
	doc("returns the document types system id string")
	shared JSString systemId() {
		dynamic {
			return JSString(native.systemId);
		}
	}
}

doc("a DocumentType")
shared class DocumentType(dynamic n) extends DocumentTypeAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}