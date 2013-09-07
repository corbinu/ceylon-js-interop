import ceylon.js.language { Element }

shared JQuery jQuery = JQuery();

shared class JQuery() {
	shared variable dynamic native;
	dynamic {
		native = jQuery;
		if (native == \iundefined || native == \inull) {
			throw Exception("jQuery Library was not found. Did you make sure to include jQuery?");
		}
	}
	
	shared JQuery call(String|Element|Element[]|Object|JQuery elem, Element|JQuery? context) {
		if (!context is Null) {
			if (!elem is String) {
				throw Exception("Context can only be passed to jQuery when the elem is a selector string");
			}
		}
		
		dynamic {
			switch(context)
			case (is Element) {
				native = native(elem, context.native);
			}
			case (is JQuery) {
				native = native(elem, context.native);
			}
			else {
			 	native = native(elem);
			}
		}
		
		return this;
	}
	
	doc("returns String")
	shared dynamic getCss(String|String[] properties) {
		dynamic {
			return native.css(properties);
		}
	}
	
	doc("returns jQuery")
	shared dynamic setCss(String property, String|Number val) {
		dynamic {
			return native.css(property, val);
		}
	}
}

