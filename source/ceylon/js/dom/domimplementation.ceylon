shared class DOMImplementation(dynamic n) {
	shared dynamic native;
    dynamic {
        native = n;
    }
    
    shared Document createDocument(String? namespace, String qualifiedName = "", DocumentType? doctype = null) {
        dynamic {
			if (exists dt = doctype) {
				return Document(native.createDocument(namespace, qualifiedName, dt.native));
			} else {
				return Document(native.createDocument(namespace, qualifiedName));
			}
		}
    }
    
    shared DocumentType createDocumentType(String qualifiedName, String publicId, String systemId) {
        dynamic {
            return DocumentType(native.createDocumentType(qualifiedName, publicId, systemId));
        }
    }
    
    shared Boolean hasFeature(String feature, String version = "") {
        dynamic {
            if (native.hasFeature(feature, version)) {
                return true;
            } else {
                return false;
            }
        }
    }
}