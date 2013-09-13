import ceylon.js.language { JSNumber, JSString, JSObjectAbs }
import ceylon.js.json { JSON, JSJSON }

shared Blob createBlob(String[]? parts = null, BlobPropertyBag? properties = null) {
	dynamic {
		if (exists props = properties) {
			return Blob(\iBlob(parts, props.toJson()));
		} else {
			return Blob(\iBlob(parts));
		}
	}
}

shared Blob createBlobJS(JSString[] parts, BlobPropertyBag? properties = null) {
	dynamic {
		if (exists props = properties) {
			return Blob(\iBlob(parts*.native, props.toJson()));
		} else {
			return Blob(\iBlob(parts));
		}
	}
}

shared Blob createBlobBlobs(Blob[] parts, BlobPropertyBag? properties = null) {
	dynamic {
		if (exists props = properties) {
			return Blob(\iBlob(parts*.native, props.toJson()));
		} else {
			return Blob(\iBlob(parts));
		}
	}
}

shared class BlobPropertyBag(shared String|JSString type = "") {
	
	shared JSJSON toJson() {
		dynamic t;
		JSON json;
		dynamic {
			switch (type) 
			case (is String) {
				t = type;
			}
			case (is JSString) {
				t = type.native;
			}
			json = JSON {
				"type" -> t
			};
		}
		return json.toJson();
	}
}

shared class Blob(dynamic n) extends BlobAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class BlobAbs() extends JSObjectAbs() {
    
    shared JSNumber size() {
        dynamic {
            return JSNumber(native.size);
        }
    }
    
    shared JSString type() {
        dynamic {
            return JSString(native.type);
        }
    }
    
    shared Blob slice(Integer|JSNumber? start = null, Integer|JSNumber? end = null, String|JSString? contentType = null) {
        switch (start)
        case (is Integer) {
            switch (end)
	        case (is Integer) {
	            switch (contentType)
		        case (is String) {
		            dynamic {
			            return Blob(native.slice(start, end, contentType));
			        }
		        }
		        case (is JSString) {
		            dynamic {
			            return Blob(native.slice(start, end, contentType.native));
			        }
		        }
		        case (is Null) {
		            dynamic {
			            return Blob(native.slice(start, end));
			        }
		        }
	        }
	        case (is JSNumber) {
	            switch (contentType)
		        case (is String) {
		            dynamic {
			            return Blob(native.slice(start, end.native, contentType));
			        }
		        }
		        case (is JSString) {
		            dynamic {
			            return Blob(native.slice(start, end.native, contentType.native));
			        }
		        }
		        case (is Null) {
		            dynamic {
			            return Blob(native.slice(start, end.native));
			        }
		        }
	        }
	        case (is Null) {
	            switch (contentType)
		        case (is String) {
		            dynamic {
			            return Blob(native.slice(start, null, contentType));
			        }
		        }
		        case (is JSString) {
		            dynamic {
			            return Blob(native.slice(start, null, contentType.native));
			        }
		        }
		        case (is Null) {
		            dynamic {
			            return Blob(native.slice(start));
			        }
		        }
	        }
        }
        case (is JSNumber) {
            switch (end)
	        case (is Integer) {
	            switch (contentType)
		        case (is String) {
		            dynamic {
			            return Blob(native.slice(start.native, end, contentType));
			        }
		        }
		        case (is JSString) {
		            dynamic {
			            return Blob(native.slice(start.native, end, contentType.native));
			        }
		        }
		        case (is Null) {
		            dynamic {
			            return Blob(native.slice(start.native, end));
			        }
		        }
	        }
	        case (is JSNumber) {
	            switch (contentType)
		        case (is String) {
		            dynamic {
			            return Blob(native.slice(start.native, end.native, contentType));
			        }
		        }
		        case (is JSString) {
		            dynamic {
			            return Blob(native.slice(start.native, end.native, contentType.native));
			        }
		        }
		        case (is Null) {
		            dynamic {
			            return Blob(native.slice(start.native, end.native));
			        }
		        }
	        }
	        case (is Null) {
	            switch (contentType)
		        case (is String) {
		            dynamic {
			            return Blob(native.slice(start.native, null, contentType));
			        }
		        }
		        case (is JSString) {
		            dynamic {
			            return Blob(native.slice(start.native, null, contentType.native));
			        }
		        }
		        case (is Null) {
		            dynamic {
			            return Blob(native.slice(start.native));
			        }
		        }
	        }
        }
        case (is Null) {
            switch (end)
	        case (is Integer) {
	            switch (contentType)
		        case (is String) {
		            dynamic {
			            return Blob(native.slice(null, end, contentType));
			        }
		        }
		        case (is JSString) {
		            dynamic {
			            return Blob(native.slice(null, end, contentType.native));
			        }
		        }
		        case (is Null) {
		            dynamic {
			            return Blob(native.slice(null, end));
			        }
		        }
	        }
	        case (is JSNumber) {
	            switch (contentType)
		        case (is String) {
		            dynamic {
			            return Blob(native.slice(null, end.native, contentType));
			        }
		        }
		        case (is JSString) {
		            dynamic {
			            return Blob(native.slice(null, end.native, contentType.native));
			        }
		        }
		        case (is Null) {
		            dynamic {
			            return Blob(native.slice(null, end.native));
			        }
		        }
	        }
	        case (is Null) {
	            switch (contentType)
		        case (is String) {
		            dynamic {
			            return Blob(native.slice(null, null, contentType));
			        }
		        }
		        case (is JSString) {
		            dynamic {
			            return Blob(native.slice(null, null, contentType.native));
			        }
		        }
		        case (is Null) {
		            dynamic {
			            return Blob(native.slice());
			        }
		        }
	        }
        }
    }
    
    shared void close() {
        dynamic {
            native.close();
        }
    }
}