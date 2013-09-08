import ceylon.js.language { JSString }

shared class ProcessingInstruction(dynamic n) extends Node(n) {
    
    shared JSString getData() {
        dynamic {
            return JSString(native.data);
       }
    }
    
    shared void setData(String|JSString data) {
        switch (data)
        case (is String) {
            dynamic {
            	native.data = data;
        	}
        }
        case (is JSString) {
            dynamic {
            	native.data = data.native;
        	}
        }
    }
    
    shared JSString target() {
        dynamic {
            return JSString(native.target);
       }
    }
}