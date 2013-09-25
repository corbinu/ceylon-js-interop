import ceylon.js.language { JSString, JSObjectAbs }
import ceylon.js.file { Blob }
import ceylon.js.html { HTMLFormElement }

shared FormData createFormData(HTMLFormElement? form = null) {
	dynamic {
		return FormData(\iFormData(f));
	}
}

shared abstract class FormDataAbs() extends JSObjectAbs() {
    
    shared void append(String|JSString name, String|JSString val) {
        switch (name)
        case (is String) {
            switch (val)
	        case (is String) {
	            dynamic {
	                native.append(name, val);
	            }
	        }
	        case (is JSString) {
	            dynamic {
	                native.append(name, val.native);
	            }
	        }
        }
        case (is JSString) {
            switch (val)
	        case (is String) {
	            dynamic {
	                native.append(name.native, val);
	            }
	        }
	        case (is JSString) {
	            dynamic {
	                native.append(name.native, val.native);
	            }
	        }
        }
    }
    
    shared void appendBlob(String|JSString name, Blob val, String|JSString? filename) {
        switch (name)
        case (is String) {
            switch (filename)
	        case (is String) {
	            dynamic {
	                native.append(name, val.native, filename);
	            }
	        }
	        case (is JSString) {
	            dynamic {
	                native.append(name, val.native, filename.native);
	            }
	        }
	        case (is Null) {
	            dynamic {
	                native.append(name, val.native);
	            }
	        }
        }
        case (is JSString) {
            switch (filename)
	        case (is String) {
	            dynamic {
	                native.append(name.native, val.native, filename);
	            }
	        }
	        case (is JSString) {
	            dynamic {
	                native.append(name.native, val.native, filename.native);
	            }
	        }
	        case (is Null) {
	            dynamic {
	                native.append(name.native, val.native);
	            }
	        }
        }
    }
}

shared class FormData(dynamic n) extends FormDataAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}