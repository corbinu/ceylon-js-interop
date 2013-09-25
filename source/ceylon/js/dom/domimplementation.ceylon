import ceylon.js.language { JSString, JSObjectAbs }

shared abstract class DOMImplementationAbs() extends JSObjectAbs() {
    
    shared Document createDocument(String|JSString? namespace, String|JSString qualifiedName = "", DocumentType? doctype = null) {
        switch (namespace)
        case (is String) {
            switch (qualifiedName)
	        case (is String) {
	            dynamic {
					return Document(native.createDocument(namespace, qualifiedName, dt.native));
				}
	        }
	        case (is JSString) {
	            dynamic {
					return Document(native.createDocument(namespace, qualifiedName.native, dt.native));
				}
	        }
        }
        case (is JSString) {
            switch (qualifiedName)
	        case (is String) {
	            dynamic {
					return Document(native.createDocument(namespace.native, qualifiedName, dt.native));
				}
	        }
	        case (is JSString) {
	            dynamic {
					return Document(native.createDocument(namespace.native, qualifiedName.native, dt.native));
				}
	        }
        }
        case (is Null) {
            switch (qualifiedName)
	        case (is String) {
	            dynamic {
					return Document(native.createDocument(null, qualifiedName, dt.native));
				}
	        }
	        case (is JSString) {
	            dynamic {
					return Document(native.createDocument(null, qualifiedName.native, dt.native));
				}
	        }
        }
    }
    
    shared DocumentType createDocumentType(String|JSString qualifiedName, String|JSString publicId, String|JSString systemId) {
        switch (qualifiedName)
        case (is String) {
            switch (publicId)
	        case (is String) {
	            switch (systemId)
		        case (is String) {
		            dynamic {
			            return DocumentType(native.createDocumentType(qualifiedName, publicId, systemId));
			        }
		        }
		        case (is JSString) {
		            dynamic {
			            return DocumentType(native.createDocumentType(qualifiedName, publicId, systemId.native));
			        }
		        }
	        }
	        case (is JSString) {
	            switch (systemId)
		        case (is String) {
		            dynamic {
			            return DocumentType(native.createDocumentType(qualifiedName, publicId.native, systemId));
			        }
		        }
		        case (is JSString) {
		            dynamic {
			            return DocumentType(native.createDocumentType(qualifiedName, publicId.native, systemId.native));
			        }
		        }
	        }
        }
        case (is JSString) {
            switch (publicId)
	        case (is String) {
	            switch (systemId)
		        case (is String) {
		            dynamic {
			            return DocumentType(native.createDocumentType(qualifiedName.native, publicId, systemId));
			        }
		        }
		        case (is JSString) {
		            dynamic {
			            return DocumentType(native.createDocumentType(qualifiedName.native, publicId, systemId.native));
			        }
		        }
	        }
	        case (is JSString) {
	            switch (systemId)
		        case (is String) {
		            dynamic {
			            return DocumentType(native.createDocumentType(qualifiedName.native, publicId.native, systemId));
			        }
		        }
		        case (is JSString) {
		            dynamic {
			            return DocumentType(native.createDocumentType(qualifiedName.native, publicId.native, systemId.native));
			        }
		        }
	        }
        }
    }
    
    shared Boolean hasFeature(String|JSString feature, String|JSString version = "") {
        dynamic has;
        switch (feature)
        case (is String) {
            switch (version)
	        case (is String) {
	            dynamic {
	            	has = native.hasFeature(feature, version);
	        	}
	        }
	        case (is JSString) {
	            dynamic {
	                has = native.hasFeature(feature, version.native);
	        	}
	        }
        }
        case (is JSString) {
            switch (version)
	        case (is String) {
                dynamic {
	            	has = native.hasFeature(feature.native, version);
	        	}
	        }
	        case (is JSString) {
	            dynamic {
	            	has = native.hasFeature(feature.native, version.native);
	        	}
	        }
        }
        dynamic {
            if (has) {
                return true;
            } else {
                return false;
            }
        }
    }
}

shared class DOMImplementation(dynamic n) extends DOMImplementationAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}