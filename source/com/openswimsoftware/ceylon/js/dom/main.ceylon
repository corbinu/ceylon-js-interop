import com.openswimsoftware.ceylon.js.html { Window }

doc("returns the current browser window")
shared Window getWindow() {
	dynamic {
		return Window(window);
	}
}