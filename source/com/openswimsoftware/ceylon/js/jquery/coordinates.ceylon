import com.openswimsoftware.ceylon.js.language { JSObjectAbs, JSNumber }

doc("create a new coordinate")
shared Coordinates createCoordinates(Integer|Float? top, Integer|Float? left) {
	dynamic {
		dynamic coor = \iObject();
		if (exists t = top) {
			coor.top = t;
		}
		if (exists l = left) {
			coor.left = l;
		}
		return Coordinates(coor);
	}
}

shared abstract class CoordinatesAbs() extends JSObjectAbs() {
	
	doc("returns the top coordinate")
	shared JSNumber getTop() {
		dynamic {
			return JSNumber(native.top);
		}
	}
	
	doc("set the top coordinate")
	shared void setTop(Integer|Float top) {
		dynamic {
			native.top = top;
		}
	}
	
	doc("returns the left coordinate")
	shared JSNumber getLeft() {
		dynamic {
			return JSNumber(native.left);
		}
	}
	
	doc("set the left coordinate")
	shared void setLeft(Integer|Float left) {
		dynamic {
			native.left = left;
		}
	}
}

doc("coordinates on the page")
shared class Coordinates(dynamic n) extends CoordinatesAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}