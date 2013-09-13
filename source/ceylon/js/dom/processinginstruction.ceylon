import ceylon.js.language { JSString }

shared class ProcessingInstruction(dynamic n) extends ProcessingInstructionAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class ProcessingInstructionAbs() extends NodeAbs() {
    
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