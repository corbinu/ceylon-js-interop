import ceylon.js.language { JSObjectAbs, JSNumber }

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

shared class Coordinates(dynamic n) extends CoordinatesAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class CoordinatesAbs() extends JSObjectAbs() {
	
	shared JSNumber getTop() {
		dynamic {
			return JSNumber(native.top);
		}
	}
	
	shared void setTop(Integer|Float top) {
		dynamic {
			native.top = top;
		}
	}
	
	shared JSNumber getLeft() {
		dynamic {
			return JSNumber(native.left);
		}
	}
	
	shared void setLeft(Integer|Float left) {
		dynamic {
			native.left = left;
		}
	}
}