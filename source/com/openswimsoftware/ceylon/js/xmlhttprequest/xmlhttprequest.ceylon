import com.openswimsoftware.ceylon.js.dom { Event, Document }
import com.openswimsoftware.ceylon.js.language { JSString, JSNumber, JSObjectAbs }
import com.openswimsoftware.ceylon.js.file { Blob }
import com.openswimsoftware.ceylon.js.json { JSON, JSJSON }

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

doc("XMLHttpRequest options")
shared class XMLHttpRequestOptions(shared Boolean anon = false) {

	doc("to native json")
	shared JSJSON toJson() {
		value json = JSON { "anon" -> anon };
		return json.toJson();
	}
}

doc("create a new XMLHttpRequest")
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

shared abstract class XMLHttpRequestAbs() extends JSObjectAbs() {
	
	doc("returns a function Anything(Event event) which is on readystatechange handler")
	shared dynamic getOnreadystatechange() {
		dynamic {
			return native.onreadystatechange;
		}
	}
	
	doc("sets on ready state change handler")
	shared void setOnreadystatechange(void handler(Event event)) {
		dynamic {
			native.onreadystatechange = handler;
		}
	}
	
	doc("returns the current ready state")
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
	
	doc("open a new request")
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
	
	doc("set a request headers value")
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
	
	doc("returns the request timeout")
	shared JSNumber getTimeout() {
		dynamic {
			return JSNumber(native.timeout);
		}
	}
	
	doc("set the request timeout")
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
	
	doc("return whether request should be made with credentials")
	shared Boolean getWithCredentials() {
		dynamic {
			if (native.withCredentials) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("set that request should be made with credentials")
	shared void setWithCredentials(Boolean credentials) {
		dynamic {
			native.withCredentials  = credentials;
		}
	}
	
	doc("returns the upload request")
	shared XMLHttpRequestUpload upload() {
		dynamic {
			return XMLHttpRequestUpload(native.upload);
		}
	}
	
	doc("initiate the request")
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
	
	doc("cancels network activity")
	shared void abort() {
		dynamic {
			native.abort();
		}
	}
	
	doc("returns http status code")
	shared JSNumber status() {
		dynamic {
			return JSNumber(native.status);
		}
	}
	
	doc("returns http text status")
	shared JSString statusText() {
		dynamic {
			return JSString(native.statusText);
		}
	}
	
	doc("returns the specified response header")
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
	
	doc("returns all response headers as a string sepreated by new lines")
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
	
	doc("set the request response mime type")
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
	
	doc("returns the request response type")
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
	
	doc("set the request response type")
	shared void setResponseType(XMLHttpRequestResponseType responseType) {
		dynamic {
			native.responseType = responseType.string;
		}
	}
	
	doc("returns the response as ArrayBuffer|Blob|Document|JSON")
	shared dynamic response() {
		dynamic {
			return native.response;
		}
	}
	
	doc("returns the response as a string")
	shared JSString responseText() {
		dynamic {
			return JSString(native.responseText);
		}
	}
	
	doc("returns the response as an XML Document")
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

doc("XMLHttpRequest")
shared class XMLHttpRequest(dynamic n) extends XMLHttpRequestAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}