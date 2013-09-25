import ceylon.js.language { JSString, JSObjectAbs }

shared abstract class LocationAbs() extends JSObjectAbs() {
	
	shared void assignURL(String|JSString url) {
		switch (url)
		case (is String) {
			dynamic {
				native.\iassign(url);
			}
		}
		case (is JSString) {
			dynamic {
				native.\iassign(url.native);
			}
		}
	}
	
	shared void reload(Boolean forcedReload = false) {
		dynamic {
			native.reload(forcedReload);
		}
	}
	
	shared void replace(String|JSString url) {
		switch (url)
		case (is String) {
			dynamic {
				native.replace(url);
			}
		}
		case (is JSString) {
			dynamic {
				native.replace(url.native);
			}
		}
	}
	
}

shared class Location(dynamic n) extends LocationAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}