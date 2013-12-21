import com.openswimsoftware.ceylon.js.language { JSString, JSObjectAbs }
import com.openswimsoftware.ceylon.js.file { Blob }
import com.openswimsoftware.ceylon.js.html { HTMLFormElement }

doc("create form data")
shared FormData createFormData(HTMLFormElement? form = null) {
	dynamic {
		return FormData(\iFormData(f));
	}
}

shared abstract class FormDataAbs() extends JSObjectAbs() {
    
    doc("append the value to the form data")
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
    
    doc("append the blob to the form data")
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

doc("form data for sending over using xmlhttprequest")
shared class FormData(dynamic n) extends FormDataAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}