import com.openswimsoftware.ceylon.js.language { JSString }

shared abstract class ProcessingInstructionAbs() extends NodeAbs() {
    
    doc("get the processing instruction data")
    shared JSString getData() {
        dynamic {
            return JSString(native.data);
       }
    }
    
    doc("set the processing instruction data")
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
    
    doc("the processing instruction target")
    shared JSString target() {
        dynamic {
            return JSString(native.target);
       }
    }
}

doc("Processing Instruction")
shared class ProcessingInstruction(dynamic n) extends ProcessingInstructionAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}