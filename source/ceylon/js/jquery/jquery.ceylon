import ceylon.js.dom { Element }
import ceylon.js.language { JSString, JSObjectAbs }
import ceylon.js.json { JSJSON }

shared JQuery jQuery = getJQuery();

shared JQuery getJQuery() {
	dynamic {
		dynamic jq = jQuery;
		if (jq == \iundefined || jq == \inull) {
			throw Exception("jQuery Library was not found. Did you make sure to include jQuery?");
		} else {
			return JQuery(jq);
		}
	}
}

shared class JQuery(dynamic n) extends JQueryAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class JQueryAbs() extends JSObjectAbs() {
	
	shared JQuery add(String|JQuery append) {
		switch (append)
		case (is String ) {
			dynamic {
				return JQuery(native.add(append));
			}
		}
		case (is JQuery) {
			dynamic {
				return JQuery(native.add(append.native));
			}
		}
	}
	
	shared JQuery addElements(Element+ elements) {
		dynamic {
			return JQuery(native.add(elements*.native));
		}
	}
	
	shared JQuery addSelector(String selector, Element? context = null) {
		dynamic {
			if (exists c = context) {
				return JQuery(native.add(selector, c));
			} else {
				return JQuery(native.add(selector));
			}
		}
	}
	
	shared JQuery addBack(String? selector = null) {
		dynamic {
			return JQuery(native.addBack(selector));
		}
	}
	
	shared JQuery addClass(String className) {
		dynamic {
			return JQuery(native.addClass(className));
		}
	}
	
	shared JQuery addClassCallback(String callback(Integer index, String currentClass)) {
		dynamic {
			return JQuery(native.addClass(callback));
		}
	}
	
	shared JQuery after(String* content) {
		dynamic {
			return JQuery(native.after.apply(null, content));
		}
	}
	
	shared JQuery afterElements(Element* content) {
		dynamic {
			return JQuery(native.after.apply(null, content*.native));
		}
	}
	
	shared JQuery afterJQuery(JQuery* content) {
		dynamic {
			return JQuery(native.after.apply(null, content*.native));
		}
	}
	
	shared JQuery call(JQuery jq) {
		dynamic {
			 return JQuery(native(jq.native));
		}
	}
	
	shared JQuery callSelector(String selector, Element|JQuery context) {
		dynamic {
			switch(context)
			case (is Element) {
				return JQuery(native(selector, context.native));
			}
			case (is JQuery) {
				return JQuery(native(selector, context.native));
			}
		}
	}
	
	shared JQuery callElements(Element+ elems) {
		dynamic {
			return JQuery(native(elems*.native));
		}
	}
	
	shared JSString getCss(String|String[] properties) {
		dynamic {
			return JSString(native.css(properties));
		}
	}
	
	shared JQuery setCss(String property, String|Number val) {
		dynamic {
			return JQuery(native.css(property, val));
		}
	}
	
	shared JQuery setCssCallback(String property, String callback(Integer index, String val)) {
		dynamic {
			return JQuery(native.css(property, callback));
		}
	}
	
	shared JQuery setCssJson(String property, JSJSON val) {
		dynamic {
			return JQuery(native.css(property, val.native));
		}
	}
	
	shared void resizeTrigger() {
		dynamic {
			native.resize();
		}
	}
	
	shared JQuery resize(void handler(JQueryEvent event), dynamic data = null) {
		dynamic {
			return JQuery(native.resize(data, handler));
		}
	}
}

