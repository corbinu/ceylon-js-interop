import com.openswimsoftware.ceylon.js.dom { Event, EventTargetAbs }

shared abstract class XMLHttpRequestEventTargetAbs() extends EventTargetAbs() {
	
	doc("returns a function Anything(Event event) onloadstart handler")
	shared dynamic getOnloadstart() {
		dynamic {
			return native.onloadstart;
		}
	}
	
	doc("sets onloadstart handler")
	shared void setOnloadstart(void handler(Event event)) {
		dynamic {
			native.onloadstart = handler;
		}
	}
	
	doc("returns a function Anything(Event event) onprogress handler")
	shared dynamic getOnprogress() {
		dynamic {
			return native.onprogress;
		}
	}
	
	doc("sets onprogress handler")
	shared void setOnprogress(void handler(Event event)) {
		dynamic {
			native.onprogress = handler;
		}
	}
	
	doc("returns a function Anything(Event event) onabort handler")
	shared dynamic getOnabort() {
		dynamic {
			return native.onabort;
		}
	}
	
	doc("sets onabort handler")
	shared void setOnabort(void handler(Event event)) {
		dynamic {
			native.onabort = handler;
		}
	}
	
	doc("returns a function Anything(Event event) onerror handler")
	shared dynamic getOnerror() {
		dynamic {
			return native.onerror;
		}
	}
	
	doc("sets onerror handler")
	shared void setOnerror(void handler(Event event)) {
		dynamic {
			native.onerror = handler;
		}
	}
	
	doc("returns a function Anything(Event event) onload handler")
	shared dynamic getOnload() {
		dynamic {
			return native.onload;
		}
	}
	
	doc("sets onload handler")
	shared void setOnload(void handler(Event event)) {
		dynamic {
			native.onload = handler;
		}
	}
	
	doc("returns a function Anything(Event event) ontimeout handler")
	shared dynamic getOntimeout() {
		dynamic {
			return native.ontimeout;
		}
	}
	
	doc("sets ontimeout handler")
	shared void setOntimeout(void handler(Event event)) {
		dynamic {
			native.ontimeout = handler;
		}
	}
	
	doc("returns a function Anything(Event event) returns onloadend handler")
	shared dynamic getOnloadend() {
		dynamic {
			return native.onloadend;
		}
	}
	
	doc("sets onloadend handler")
	shared void setOnloadend(void handler(Event event)) {
		dynamic {
			native.onloadend = handler;
		}
	}
	
}

doc("XMLHttpRequestEventTarget")
shared class XMLHttpRequestEventTarget(dynamic n) extends XMLHttpRequestEventTargetAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class XMLHttpRequestUploadAbs() extends XMLHttpRequestEventTargetAbs() {}

doc("XMLHttpRequestUpload")
shared class XMLHttpRequestUpload(dynamic n) extends XMLHttpRequestUploadAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}