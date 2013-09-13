shared class JSObject(dynamic n) extends JSObjectAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class JSObjectAbs() {
	shared formal dynamic native;
    
    // TODO add object properties
	
}