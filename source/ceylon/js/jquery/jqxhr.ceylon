import ceylon.js.language { JSNumber, JSObjectAbs, JSString }
import ceylon.js.dom { Document }
import ceylon.js.xmlhttprequest { readyStateLoading, readyStateOpened, readyStateHeadersReceived, readyStateUnsent, ReadyState }

shared class JQXHR(dynamic n) extends JQXHRAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class JQXHRAbs() extends JSObjectAbs() {
	shared variable  Anything(Anything, String, JQXHR)? done = null;
	shared variable  Anything(JQXHR, String?, String?)? fail = null;
	shared variable  Anything(Anything, String, Anything)? always = null;
	shared variable [Anything(Anything, String, JQXHR), Anything(JQXHR, String?, String?)]? doThen = null;
	
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
	
	shared JSNumber status() {
		dynamic {
			return JSNumber(native.status);
		}
	}
	
	shared JSString statusText() {
		dynamic {
			return JSString(native.statusText);
		}
	}
	
	shared JSString responseText() {
		dynamic {
			return JSString(native.responseText);
		}
	}
	
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
	
	shared void abort() {
		dynamic {
			native.abort();
		}
	}
	
	shared JSNumber statusCode() {
		dynamic {
			return JSNumber(native.statusCode());
		}
	}
}