import com.openswimsoftware.ceylon.js.language { JSNumber, JSObjectAbs, JSString }
import com.openswimsoftware.ceylon.js.dom { Document }
import com.openswimsoftware.ceylon.js.xmlhttprequest { readyStateLoading, readyStateOpened, readyStateHeadersReceived, readyStateUnsent, ReadyState }

shared abstract class JQXHRAbs() extends JSObjectAbs() {
	
	doc("Anything(Anything, String, JQXHR) handler when the request is done")
	shared JQXHR done(dynamic done) {
		dynamic {
			return JQXHR(native.done(done));
		}
	}
	
	doc("Anything(JQXHR, String?, String?) handler when the request fails")
	shared JQXHR fail(dynamic fail) {
		dynamic {
			return JQXHR(native.fail(fail));
		}
	}

	doc("Anything(JSObject|JQXHR, String, JXHR|Error) handler when the request completes")
	shared JQXHR always(dynamic always) {
		dynamic {
			return JQXHR(native.always(always));
		}
	}

	doc("Anything(Anything(Anything, String, JQXHR), Anything(JQXHR, String?, String?) handler when the request is done or fails")
	shared JQXHR doThen(dynamic done, dynamic fail) {
		dynamic {
			return JQXHR(native.\ithen(done, fail));
		}
	}
	
	doc("override the request mime type")
	shared void overrideMimeType(String|JSString mime) {
		switch (mime)
		case (is String) {
			dynamic {
				native.overrideMimeType(mime);
			}
		}
		case (is JSString) {
			dynamic {
				native.overrideMimeType(mime.native);
			}
		}
	}
	
	doc("the current ready state of the request")
	shared ReadyState readyState() {
		dynamic {
			dynamic readyState = native.readyState;
			if (readyState == \iXMLHttpRequest.\iUNSENT) {
				return readyStateUnsent;
			} else if (readyState == \iXMLHttpRequest.\iOPENED) {
				return readyStateOpened;
			} else if (readyState == \iXMLHttpRequest.\iHEADERS_RECEIVED) {
				return readyStateHeadersReceived;
			} else if (readyState == \iXMLHttpRequest.\iLOADING) {
				return readyStateLoading;
			} else {
				return readyStateDone;
			}
		}
	}
	
	doc("the request HTTP status code")
	shared JSNumber status() {
		dynamic {
			return JSNumber(native.status);
		}
	}
	
	doc("the request HTTP status text code")
	shared JSString statusText() {
		dynamic {
			return JSString(native.statusText);
		}
	}
	
	doc("the request response as a string")
	shared JSString responseText() {
		dynamic {
			return JSString(native.responseText);
		}
	}
	
	doc("the request response as a XML Document")
	shared Document? responseXML() {
		dynamic {
			dynamic responseXML = native.responseXML;
			if (responseXML != \inull) {
				return Document(responseXML);
			} else {
				return null;
			}
		}
	}
	
	doc("set the value of a request header")
	shared void setRequestHeader(String|JSString header, String|JSString val) {
		switch (header)
		case (is String) {
			switch (val)
			case (is String) {
				dynamic {
					native.setRequestHeader(header, val);
				}
			}
			case (is JSString) {
				dynamic {
					native.setRequestHeader(header, val.native);
				}
			}
		}
		case (is JSString) {
			switch (val)
			case (is String) {
				dynamic {
					native.setRequestHeader(header.native, val);
				}
			}
			case (is JSString) {
				dynamic {
					native.setRequestHeader(header.native, val.native);
				}
			}
		}
	}
	
	doc("returns all of the request headers as a string")
	shared JSString? getAllResponseHeaders() {
		dynamic {
			dynamic rheaders = native.getAllResponseHeaders();
			if (rheaders != \inull) {
				return JSString(rheaders);
			} else {
				return null;
			}
		}
	}
	
	doc("returns a specific response header")
	shared JSString? getResponseHeader(String|JSString header) {
		dynamic {
			dynamic rheader;
			switch (header)
			case (is String) {
				rheader = native.getResponseHeader(header);
			}
			case (is JSString) {
				rheader = native.getResponseHeader(header.native);
			}
			if (rheader != \inull) {
				return JSString(rheader);
			} else {
				return null;
			}
		}
	}
	
	doc("abort the request")
	shared void abort() {
		dynamic {
			native.abort();
		}
	}
	
	doc("the request status code")
	shared JSNumber statusCode() {
		dynamic {
			return JSNumber(native.statusCode());
		}
	}
}

doc("a jQuery abstraction of XMLHttpRequest across browsers")
shared class JQXHR(dynamic n) extends JQXHRAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}