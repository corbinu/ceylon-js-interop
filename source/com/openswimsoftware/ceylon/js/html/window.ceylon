import com.openswimsoftware.ceylon.js.language { JSObjectAbs }

shared abstract class WindowAbs() extends JSObjectAbs() {
	// TODO add window properties
}

doc("the browser window")
shared class Window(dynamic n) extends WindowAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}