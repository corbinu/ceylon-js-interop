import ceylon.js.dom { Event, Document }
import ceylon.js.language { JSString, JSNumber, JSObjectAbs }
import ceylon.js.file { Blob }
import ceylon.js.json { JSON, JSJSON }

shared abstract class XMLHttpRequestResponseType(String name)  of blank | arraybuffer | blob | document | json | text {}

shared object blank extends XMLHttpRequestResponseType("") {}
shared object arraybuffer extends XMLHttpRequestResponseType("arraybuffer") {}
shared object blob extends XMLHttpRequestResponseType("blob") {}
shared object document extends XMLHttpRequestResponseType("document") {}
shared object json extends XMLHttpRequestResponseType("json") {}
shared object text extends XMLHttpRequestResponseType("text") {}

shared abstract class ReadyState(Integer num)  of readyStateUnsent | readyStateOpened | readyStateHeadersReceived | readyStateLoading | readyStateDone {}

shared object readyStateUnsent extends ReadyState(0) {}
shared object readyStateOpened extends ReadyState(1) {}
shared object readyStateHeadersReceived extends ReadyState(2) {}
shared object readyStateLoading extends ReadyState(3) {}
shared object readyStateDone extends ReadyState(4) {}

shared class XMLHttpRequestOptions(shared Boolean anon = false) {

	shared JSJSON toJson() {
		value json = JSON { "anon" -> anon };
		return json.toJson();
	}
}

shared XMLHttpRequest createXMLHttpRequest(XMLHttpRequestOptions? options = null) {
	if (exists o = options) {
		dynamic {
			return XMLHttpRequest(\iXMLHttpRequest(o.toJson));
		}
	} else {
		dynamic {
			return XMLHttpRequest(\iXMLHttpRequest());
		}
	}
}

shared class XMLHttpRequest(dynamic n) extends XMLHttpRequestAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class XMLHttpRequestAbs() extends JSObjectAbs() {
	
	doc("returns a function Anything(Event event)")
	shared dynamic getOnreadystatechange() {
		dynamic {
			return native.onreadystatechange;
		}
	}
	
	shared void setOnreadystatechange(void handler(Event event)) {
		dynamic {
			native.onreadystatechange = handler;
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
	
	shared void open(String|JSString method, String|JSString url, Boolean async = true, String|JSString? user = null, String|JSString? password = null) {
		switch (method)
		case (is String) {
			switch (url)
			case (is String) {
				switch (user)
				case (is String) {
					switch (password)
					case (is String) {
						dynamic {
							native.open(method, url, async, user, password);
						}
					}
					case (is JSString) {
						dynamic {
							native.open(method, url, async, user, password.native);
						}
					}
					case (is Null) {
						dynamic {
							native.open(method, url, async, user);
						}
					}
				}
				case (is JSString) {
					switch (password)
					case (is String) {
						dynamic {
							native.open(method, url, async, user.native, password);
						}
					}
					case (is JSString) {
						dynamic {
							native.open(method, url, async, user.native, password.native);
						}
					}
					case (is Null) {
						dynamic {
							native.open(method, url, async, user.native);
						}
					}
				}
				case (is Null) {
					switch (password)
					case (is String) {
						dynamic {
							native.open(method, url, async, null, password);
						}
					}
					case (is JSString) {
						dynamic {
							native.open(method, url, async, null, password.native);
						}
					}
					case (is Null) {
						dynamic {
							native.open(method, url, async);
						}
					}
				}
			}
			case (is JSString) {
				switch (user)
				case (is String) {
					switch (password)
					case (is String) {
						dynamic {
							native.open(method, url.native, async, user, password);
						}
					}
					case (is JSString) {
						dynamic {
							native.open(method, url.native, async, user, password.native);
						}
					}
					case (is Null) {
						dynamic {
							native.open(method, url.native, async, user);
						}
					}
				}
				case (is JSString) {
					switch (password)
					case (is String) {
						dynamic {
							native.open(method, url.native, async, user.native, password);
						}
					}
					case (is JSString) {
						dynamic {
							native.open(method, url.native, async, user.native, password.native);
						}
					}
					case (is Null) {
						dynamic {
							native.open(method, url.native, async, user.native);
						}
					}
				}
				case (is Null) {
					switch (password)
					case (is String) {
						dynamic {
							native.open(method, url.native, async, null, password);
						}
					}
					case (is JSString) {
						dynamic {
							native.open(method, url.native, async, null, password.native);
						}
					}
					case (is Null) {
						dynamic {
							native.open(method, url.native, async);
						}
					}
				}
			}
		}
		case (is JSString) {
			switch (url)
			case (is String) {
				switch (user)
				case (is String) {
					switch (password)
					case (is String) {
						dynamic {
							native.open(method.native, url, async, user, password);
						}
					}
					case (is JSString) {
						dynamic {
							native.open(method.native, url, async, user, password.native);
						}
					}
					case (is Null) {
						dynamic {
							native.open(method.native, url, async, user);
						}
					}
				}
				case (is JSString) {
					switch (password)
					case (is String) {
						dynamic {
							native.open(method.native, url, async, user.native, password);
						}
					}
					case (is JSString) {
						dynamic {
							native.open(method.native, url, async, user.native, password.native);
						}
					}
					case (is Null) {
						dynamic {
							native.open(method.native, url, async, user.native);
						}
					}
				}
				case (is Null) {
					switch (password)
					case (is String) {
						dynamic {
							native.open(method.native, url, async, null, password);
						}
					}
					case (is JSString) {
						dynamic {
							native.open(method.native, url, async, null, password.native);
						}
					}
					case (is Null) {
						dynamic {
							native.open(method.native, url, async);
						}
					}
				}
			}
			case (is JSString) {
				switch (user)
				case (is String) {
					switch (password)
					case (is String) {
						dynamic {
							native.open(method.native, url.native, async, user, password);
						}
					}
					case (is JSString) {
						dynamic {
							native.open(method.native, url.native, async, user, password.native);
						}
					}
					case (is Null) {
						dynamic {
							native.open(method.native, url.native, async, user);
						}
					}
				}
				case (is JSString) {
					switch (password)
					case (is String) {
						dynamic {
							native.open(method.native, url.native, async, user.native, password);
						}
					}
					case (is JSString) {
						dynamic {
							native.open(method.native, url.native, async, user.native, password.native);
						}
					}
					case (is Null) {
						dynamic {
							native.open(method.native, url.native, async, user.native);
						}
					}
				}
				case (is Null) {
					switch (password)
					case (is String) {
						dynamic {
							native.open(method.native, url.native, async, null, password);
						}
					}
					case (is JSString) {
						dynamic {
							native.open(method.native, url.native, async, null, password.native);
						}
					}
					case (is Null) {
						dynamic {
							native.open(method.native, url.native, async);
						}
					}
				}
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
	
	shared JSNumber getTimeout() {
		dynamic {
			return JSNumber(native.timeout);
		}
	}
	
	shared void setTimeout(Integer|JSNumber timeout) {
		switch (timeout)
		case (is Integer) {
			dynamic {
				native.timeout = timeout;
			}
		}
		case (is JSNumber) {
			dynamic {
				native.timeout = timeout.native;
			}
		}
	}
	
	shared Boolean getWithCredentials() {
		dynamic {
			if (native.withCredentials) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared void setWithCredentials(Boolean credentials) {
		dynamic {
			native.withCredentials  = credentials;
		}
	}
	
	shared XMLHttpRequestUpload upload() {
		dynamic {
			return XMLHttpRequestUpload(native.upload);
		}
	}
	
	shared void send(Blob|Document|String|JSString|FormData? data = null) {
		switch (data)
		case (is Blob) {
			dynamic {
				native.send(data.native);
			}
		}
		case (is Document) {
			dynamic {
				native.send(data.native);
			}
		}
		case (is String) {
			dynamic {
				native.send(data);
			}
		}
		case (is JSString) {
			dynamic {
				native.send(data.native);
			}
		}
		case (is FormData) {
			dynamic {
				native.send(data.native);
			}
		}
		case (is Null) {
			dynamic {
				native.send();
			}
		}
	}
	
	shared void abort() {
		dynamic {
			native.abort();
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
	
	shared XMLHttpRequestResponseType getResponseType() {
		dynamic {
			if (native.responseType == "") {
				return blank;
			} else if (native.responseType == "arraybuffer") {
				return arraybuffer;
			} else if (native.responseType == "blob") {
				return blob;
			} else if (native.responseType == "document") {
				return document;
			} else if (native.responseType == "json") {
				return json;
			} else {
				return text;
			}
		}
	}
	
	shared void setResponseType(XMLHttpRequestResponseType responseType) {
		dynamic {
			native.responseType = responseType.string;
		}
	}
	
	shared dynamic response() {
		dynamic {
			return native.response;
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
	
}