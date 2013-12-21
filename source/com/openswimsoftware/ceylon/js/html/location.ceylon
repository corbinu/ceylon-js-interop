import com.openswimsoftware.ceylon.js.language { JSString, JSObjectAbs }

shared abstract class LocationAbs() extends JSObjectAbs() {
	
	doc("loads the resource at the url given")
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
	
	doc("reload the current page")
	shared void reload(Boolean forcedReload = false) {
		dynamic {
			native.reload(forcedReload);
		}
	}
	
	doc("replace the current page with the new location")
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

doc("Location")
shared class Location(dynamic n) extends LocationAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}