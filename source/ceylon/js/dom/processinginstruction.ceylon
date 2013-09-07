shared class ProcessingInstruction(dynamic n) extends Node(n) {
    
    shared dynamic getData() {
        dynamic {
            return native.data;
       }
    }
    
    shared void setData(String data) {
        dynamic {
            native.data = data;
        }
    }
    
    doc("returns String")
    shared dynamic target() {
        dynamic {
            return native.target;
       }
    }
}