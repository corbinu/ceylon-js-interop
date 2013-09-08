import ceylon.js.html { Window }

shared Window getWindow() {
	dynamic {
		return Window(window);
	}
}