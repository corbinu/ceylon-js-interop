import ceylon.js.language { JSString }

shared class DocumentType(dynamic n) extends Node(n) {
	
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