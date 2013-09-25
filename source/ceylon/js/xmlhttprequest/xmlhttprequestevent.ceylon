import ceylon.js.dom { Event, EventTargetAbs }

shared abstract class XMLHttpRequestEventTargetAbs() extends EventTargetAbs() {
	
	doc("returns a function Anything(Event event)")
	shared dynamic getOnloadstart() {
		dynamic {
			return native.onloadstart;
		}
	}
	
	shared void setOnloadstart(void handler(Event event)) {
		dynamic {
			native.onloadstart = handler;
		}
	}
	
	doc("returns a function Anything(Event event)")
	shared dynamic getOnprogress() {
		dynamic {
			return native.onprogress;
		}
	}
	
	shared void setOnprogress(void handler(Event event)) {
		dynamic {
			native.onprogress = handler;
		}
	}
	
	doc("returns a function Anything(Event event)")
	shared dynamic getOnabort() {
		dynamic {
			return native.onabort;
		}
	}
	
	shared void setOnabort(void handler(Event event)) {
		dynamic {
			native.onabort = handler;
		}
	}
	
	doc("returns a function Anything(Event event)")
	shared dynamic getOnerror() {
		dynamic {
			return native.onerror;
		}
	}
	
	shared void setOnerror(void handler(Event event)) {
		dynamic {
			native.onerror = handler;
		}
	}
	
	doc("returns a function Anything(Event event)")
	shared dynamic getOnload() {
		dynamic {
			return native.onload;
		}
	}
	
	shared void setOnload(void handler(Event event)) {
		dynamic {
			native.onload = handler;
		}
	}
	
	doc("returns a function Anything(Event event)")
	shared dynamic getOntimeout() {
		dynamic {
			return native.ontimeout;
		}
	}
	
	shared void setOntimeout(void handler(Event event)) {
		dynamic {
			native.ontimeout = handler;
		}
	}
	
	doc("returns a function Anything(Event event)")
	shared dynamic getOnloadend() {
		dynamic {
			return native.onloadend;
		}
	}
	
	shared void setOnloadend(void handler(Event event)) {
		dynamic {
			native.onloadend = handler;
		}
	}
	
}

shared class XMLHttpRequestEventTarget(dynamic n) extends XMLHttpRequestEventTargetAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class XMLHttpRequestUploadAbs() extends XMLHttpRequestEventTargetAbs() {}

shared class XMLHttpRequestUpload(dynamic n) extends XMLHttpRequestUploadAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}