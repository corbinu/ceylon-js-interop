import ceylon.js.language { JSObjectAbs }

shared class Window(dynamic n) extends WindowAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class WindowAbs() extends JSObjectAbs() {
    // TODO add window properties
}