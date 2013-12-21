import com.openswimsoftware.ceylon.js.language { JSObjectAbs, JSString, JSArray, createJSArray, RegExp, JSObject, objectDefineProperty, createJSObject, DataDescriptor, arrayIsArray, JSNumber }
import com.openswimsoftware.ceylon.js.json { JSON }

doc("the ajax request data type")
shared abstract class DataType(String name) of dataTypeXML | dataTypeHtml | dataTypeScript | dataTypeJson | dataTypeJsonp | dataTypeText {}

shared object dataTypeXML extends DataType("dataTypeXML") {}
shared object dataTypeHtml extends DataType("dataTypeHtml") {}
shared object dataTypeScript extends DataType("dataTypeScript") {}
shared object dataTypeJson extends DataType("dataTypeJson") {}
shared object dataTypeJsonp extends DataType("dataTypeJsonp") {}
shared object dataTypeText extends DataType("dataTypeText") {}

doc("create a new JSONP settings object")
shared JSONPSettings? createJSONPSettings(Boolean jsonp = true, String jsonpCallback = "callback") {
	dynamic {
		if (jsonp == true) {
			if (jsonpCallback == "callback") {
				return null;
			} else {
				return JSONPSettings(jsonpCallback);
			}
		} else {
			if (jsonpCallback == "callback") {
				return JSONPSettings(false);
			} else {
				value json = JSON {
					"jsonp" -> false,
					"jsonpCallback" -> jsonpCallback
				};
				return JSONPSettings(json.toJson());
			}
		}
	}
}

shared abstract class JSONPSettingsAbs() extends JSObjectAbs() {
	
	doc("is this the request JSONP")
	shared Boolean getIsJsonp() {
		dynamic {
			if (native.jsonp == true || native.jsonp != \inull) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("set that the request is JSONP")
	shared void setIsJsonp(Boolean jsonp) {
		dynamic {
			native.jsonp = jsonp;
		}
	}
	
	doc("returns JSONP callback")
	shared JSString? getCallback() {
		dynamic {
			dynamic callback = native.callback;
			if (callback != \inull) {
				return JSString(native.callback);
			} else {
				return null;
			}
		}
	}
	
	doc("sets JSONP callback")
	shared void setCallback(String callback) {
		dynamic {
			native.callback = callback;
		}
	}
}

doc("settings for JSONP request")
shared class JSONPSettings(dynamic n) extends JSONPSettingsAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class JQueryAjaxSettingsAbs() extends JSObjectAbs() {
	
	doc("returns the data types the request accepts")
	shared Entry<JSString, JSString>[] getAccepts() {
		dynamic {
			return [for (key -> val in native.accepts) Entry<JSString, JSString>(JSString(key), JSString(val)) ];
		}
	}
	
	doc("sets the data types the request accepts")
	shared void setAccepts(Entry<JSString, JSString>* accepts) {
		JSObject acceptNative = createJSObject();
		for (key -> val in accepts) {
			dynamic {
				objectDefineProperty(acceptNative, key, DataDescriptor(true, false, true, true, val.native));
			}
		}
		dynamic {
			native.accepts = acceptNative.native;
		}
	}
	
	
	doc("returns if the AJAX request is exectuted asynchronously")
	shared Boolean getAsync() {
		dynamic {
			if (native.async) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("sets if the AJAX request is exectuted asynchronously")
	shared void setAsync(Boolean async) {
		dynamic {
			native.async = async;
		}
	}
	
	doc("returns Boolean(JQXHR, JQueryAjaxSettings)? which is a handler called before the request is sent")
	shared dynamic getBeforeSend() {
		dynamic {
			return native.beforeSend = beforeSend;
		}
	}
	
	doc("returns set a handler Boolean(JQXHR, JQueryAjaxSettings) before the request is sent")
	shared void setBeforeSend(dynamic beforeSend) {
		dynamic {
			native.beforeSend = beforeSend;
		}
	}
	
	doc("returns if the reqest will be cached by the browser")
	shared Boolean getCache() {
		dynamic {
			if (native.cache) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("sets if the reqest should be cached by the browser")
	shared void setCache(Boolean cache) {
		dynamic {
			native.cache = cache;
		}
	}
	
	doc("returns array of handers Anything(JQXHR, String) for when the request is complete")
	shared JSArray? getComplete() {
		dynamic {
			dynamic complete = native.complete;
			if (complete == \inull) {
				return null;
			} else if (arrayIsArray(complete)) {
				return JSArray(complete);
			} else {
				return createJSArray(complete);
			}
		}
	}
	
	doc("sets array of handers Anything(JQXHR, String) for when the request is complete")
	shared void setComplete(dynamic complete) {
		dynamic {
			native.complete = complete;
		}
	}
	
	doc("gets a set of content types paired with regular expression pairs that determine how jQuery will parse the response")
	shared Entry<JSString, RegExp>[] getContents() {
		dynamic {
			return [for (key -> val in native.contents) Entry<JSString, RegExp>(JSString(key), RegExp(val)) ];
		}
	}
	
	doc("sets a set of content types paired with regular expression pairs that determine how jQuery will parse the response")
	shared void setContents(Entry<JSString, RegExp>* contents) {
		JSObject contNative = createJSObject();
		for (key -> val in contents) {
			dynamic {
				objectDefineProperty(contNative, key, DataDescriptor(true, false, true, true, val.native));
			}
		}
		dynamic {
			native.contents = contNative;
		}
	}
	
	doc("returns the content type of the data being sent in the request")
	shared JSString? getContentType() {
		dynamic {
			if (native.contentType != \inull) {
				return JSString(native.contentType);
			} else {
				return null;
			}
		}
	}
	
	doc("sets the content type of the data being sent in the request")
	shared void setContentType(String contentType) {
		dynamic {
			native.contentType = contentType;
		}
	}
	
	doc("returns the context object in which the request is being made")
	shared JSObject? getContext() {
		dynamic {
			if (native.context != \inull) {
				return JSObject(native.context);
			} else {
				return null;
			}
		}
	}
	
	doc("sets the context object in which the request is being made")
	shared void setContext(JSObject context) {
		dynamic {
			native.context = context.native;
		}
	}
	
	doc("returns data type converters")
	shared Entry<JSString, JSObject>[] getConverters() {
		dynamic {
			return [for (key -> val in native.converters) Entry<JSString, JSObject>(JSString(key), JSObject(val)) ];
		}
	}
	
	doc("sets data type converters")
	shared void setConverters(Entry<JSString, JSObject>* converters) {
		JSObject convNative = createJSObject();
		for (key -> val in converters) {
			dynamic {
				objectDefineProperty(convNative, key, DataDescriptor(true, false, true, true, val.native));
			}
		}
		dynamic {
			native.converters = convNative.native;
		}
	}
	
	doc("is the request cross domain")
	shared Boolean getCrossDomain() {
		dynamic {
			if (native.crossDomain) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("sets if the request is cross domain")
	shared void setCrossDomain(Boolean crossDomain) {
		dynamic {
			native.crossDomain = crossDomain;
		}
	}
	
	doc("returns the data to be sent to the server")
	shared JSString|JSObject? getData() {
		dynamic {
			if (native.data \iinstanceof \iString) {
				return JSString(native.data);
			} else if (native.data != \inull) {
				return JSObject(native.data);
			} else {
				return null;
			}
		}
	}
	
	doc("sets the data to be sent to the server")
	shared void setData(String|JSObject data) {
		switch (data)
		case (is String) {
			dynamic {
				native.data = data;
			}
		}
		case (is JSObject) {
			dynamic {
				native.data = data.native;
			}
		}
	}
	
	doc("returns data filter Anything(String, String)?")
	shared dynamic getDataFilter() {
		dynamic {
			return native.dataFilter;
		}
	}
	
	doc("sets the data fiter")
	shared void setDataFilter(Anything(String, String) datafilter) {
		dynamic {
			native.dataFilter = datafilter;
		}
	}
	
	doc("returns the data type")
	shared JSString? getDataType() {
		dynamic {
			if (native.dataType != \inull) {
				return JSString(native.dataType);
			} else {
				return null;
			}
		}
	}
	
	doc("sets the data type")
	shared void setDataType(String dataType) {
		dynamic {
			native.dataType = dataType;
		}
	}
	
	doc("returns an array of error handlers Anything(JQXHR, String?, String?)")
	shared JSArray? getError() {
		dynamic {
			if (arrayIsArray(native.error)) {
				return JSArray(native.error);
			} else if (native.error != \inull) { 
				return createJSArray(native.error);
			} else {
				return null;
			}
		}
	}
	
	doc("sets an array of error handlers Anything(JQXHR, String?, String?)")
	shared void setError(dynamic datafilter) {
		dynamic {
			native.dataFilter = datafilter;
		}
	}
	
	doc("returns if global ajax events will be triggered for this class")
	shared Boolean getGlobal() {
		dynamic {
			if (native.global) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("sets if global ajax events will be triggered for this class")
	shared void setGlobal(Boolean global) {
		dynamic {
			native.global = global;
		}
	}
	
	doc("returns the request headers")
	shared Entry<JSString, JSString>[] getHeaders() {
		dynamic {
			return [for (key -> val in native.headers) Entry<JSString, JSString>(JSString(key), JSString(val)) ];
		}
	}
	
	doc("sets the request headers")
	shared void setHeaders(Entry<JSString, JSString>[] headers) {
		JSObject headNative = createJSObject();
		for (key -> val in headers) {
			dynamic {
				objectDefineProperty(headNative, key, DataDescriptor(true, false, true, true, val.native));
			}
		}
		dynamic {
			native.headers = headNative.native;
		}
	}
	
	doc("returns if the request should only be successful if the response if diffrent then the last time the request was made")
	shared Boolean getIfModified() {
		dynamic {
			if (native.ifModified) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("sets if the request should only be successful if the response if diffrent then the last time the request was made")
	shared void setIfModified(Boolean modified) {
		dynamic {
			native.ifModified = modified;
		}
	}
	
	doc("returns if the request is being made agains the local filesystem")
	shared Boolean getIsLocal() {
		dynamic {
			if (native.isLocal) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("sets if the request is being made agains the local filesystem")
	shared void setIsLocal(Boolean local) {
		dynamic {
			native.isLocal = local;
		}
	}
	
	doc("returns the request JSONP settings")
	shared JSONPSettings|JSString|Boolean? getJsonp() {
		JSObject jsonp;
		dynamic {
			jsonp = JSObject(native.jsonp);
			if (native.jsonp == \inull) {
				return null;
			} else if (jsonp.hasOwnProperty("jsonp") || jsonp.hasOwnProperty("jsonpCallback")) {
				return JSONPSettings(jsonp.native);
			} else if (jsonp.native \iinstanceof \iString) {
				return JSString(jsonp.native);
			} else {
				if (jsonp.native) {
					return true;
				} else {
					return false;
				}
			}
		}
	}
	
	doc("sets the request JSONP settings")
	shared void setJsonp(JSONPSettings jsonp) {
		dynamic {
			native.jsonp = jsonp.native;
		}
	}
	
	doc("returns the JSONP callback String|String()?")
	shared dynamic getJsonpCallback() {
		dynamic {
			return native.jsonpCallback;
		}
	}
	
	doc("sets the JSONP callback String|String()?")
	shared void setJsonpCallback(String|String() callback) {
		dynamic {
			native.jsonpCallback = callback;
		}
	}
	
	doc("returns the request result mime type")
	shared JSString? getMimeType() {
		dynamic {
			if (native.mimeType != \inull) {
				return JSString(native.mimeType);
			} else {
				return null;
			}
		}
	}
	
	doc("sets the request result mime type")
	shared void setMimeType(String mimeType) {
		dynamic {
			native.mimeType = mimeType;
		}
	}
	
	doc("returns the request password")
	shared JSString? getPassword() {
		dynamic {
			if (native.password != \inull) {
				return JSString(native.password);
			} else {
				return null;
			}
		}
	}
	
	doc("sets the request password")
	shared void setPassword(String password) {
		dynamic {
			native.password = password;
		}
	}
	
	doc("returns if the data will be processed before being sent to the server")
	shared Boolean getProcessData() {
		dynamic {
			if (native.processData) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("sets if the data will be processed before being sent to the server")
	shared void setProcessData(Boolean processData) {
		dynamic {
			native.processData = processData;
		}
	}
	
	doc("returns the script charset (only if getting a script or making a JSONP request)")
	shared JSString? getScriptCharset() {
		dynamic {
			if (native.scriptCharset != \inull) {
				return JSString(native.scriptCharset);
			} else {
				return null;
			}
		}
	}
	
	doc("sets the script charset (only if getting a script or making a JSONP request)")
	shared void setScriptCharset(String scriptCharset) {
		dynamic {
			native.scriptCharset = scriptCharset;
		}
	}
	
	doc("returns a object JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code")
	shared dynamic getStatusCode() {
		dynamic {
			return statusNative;
		}
	}
	
	doc("sets a set of callbacks JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code")
	shared void setStatusCode(dynamic statusCodes) {
		dynamic {
			native.statusCode = statusCodes;
		}
	}
	
	doc("returns array of handers called Anything(Anything, String, JQXHR) upon a successful request")
	shared JSArray? getSuccess() {
		dynamic {
			if (native.success != \inull) {
				return JSArray(native.success);
			} else {
				return null;
			}
		}
	}
	
	doc("sets array of handers called Anything(Anything, String, JQXHR) upon a successful request")
	shared void setSuccess(Anything(Anything, String, JQXHR)* success) {
		dynamic {
			native.success = success;
		}
	}
	
	doc("returns the timeout for the request in milliseconds")
	shared JSNumber? getTimeout() {
		dynamic {
			if (native.timeout != \inull) {
				return JSNumber(native.timeout);
			} else {
				return null;
			}
		}
	}
	
	doc("sets the timeout for the request in milliseconds")
	shared void setTimeout(Integer timeout) {
		dynamic {
			native.timeout = timeout;
		}
	}
	
	doc("returns if the request will use the traditional style of param serialization")
	shared Boolean getTraditional() {
		dynamic {
			if (native.traditional) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("sets if the request will use the traditional style of param serialization")
	shared void setTraditional(Boolean traditional) {
		dynamic {
			native.traditional = traditional;
		}
	}
	
	doc("returns if the request will use the traditional style of param serialization")
	shared JSString? getType() {
		dynamic {
			if (native.type != \inull) {
				return JSString(native.type);
			} else {
				return null;
			}
		}
	}
	
	doc("sets the request type usually GET or POST")
	shared void setType(String type) {
		dynamic {
			native.type = type;
		}
	}
	
	doc("returns the request URL")
	shared JSString? getUrl() {
		dynamic {
			if (native.url != \inull) {
				return JSString(native.url);
			} else {
				return null;
			}
		}
	}
	
	doc("sets the request URL")
	shared void setUrl(String url) {
		dynamic {
			native.url = url;
		}
	}
	
	doc("returns the request username")
	shared JSString? getUsername() {
		dynamic {
			if (native.username != \inull) {
				return JSString(native.username);
			} else {
				return null;
			}
		}
	}
	
	doc("returns the request username")
	shared void setUsername(String username) {
		dynamic {
			native.username = username;
		}
	}
	
	doc("returns the underlying XHR function")
	shared dynamic getXhr() {
		dynamic {
			return native.xhr;
		}
	}
	
	doc("sets the underlying XHR function")
	shared void setXhr(Anything() xhr) {
		dynamic {
			native.xhr = xhr;
		}
	}
	
	doc("returns the base XHR settings")
	shared JSObject getXhrFields() {
		dynamic {
			return JSObject(native.xhrFields);
		}
	}
	
	doc("sets the base XHR settings")
	shared void setXhrFields(JSObject xhrFields) {
		dynamic {
			native.xhrFields = xhrNative.native;
		}
	}
	
}

doc("settings for a JQuery AJAX request")
shared class JQueryAjaxSettings(dynamic n) extends JQueryAjaxSettingsAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}