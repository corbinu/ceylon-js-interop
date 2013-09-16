import ceylon.js.language { JSObjectAbs, JSString, JSArray, createJSArray, RegExp, JSObject, objectDefineProperty, createJSObject, DataDescriptor, arrayIsArray, JSNumber }
import ceylon.js.json { JSON }

shared abstract class DataType(String name) of dataTypeXML | dataTypeHtml | dataTypeScript | dataTypeJson | dataTypeJsonp | dataTypeText {}

shared object dataTypeXML extends DataType("dataTypeXML") {}
shared object dataTypeHtml extends DataType("dataTypeHtml") {}
shared object dataTypeScript extends DataType("dataTypeScript") {}
shared object dataTypeJson extends DataType("dataTypeJson") {}
shared object dataTypeJsonp extends DataType("dataTypeJsonp") {}
shared object dataTypeText extends DataType("dataTypeText") {}

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

shared class JSONPSettings(dynamic n) extends JSONPSettingsAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class JSONPSettingsAbs() extends JSObjectAbs() {
	
	shared Boolean getIsJsonp() {
		dynamic {
			if (native.jsonp == true || native.jsonp != \inull) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared void setIsJsonp(Boolean jsonp) {
		dynamic {
			native.jsonp = jsonp;
		}
	}
	
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
	
	shared void setCallback(String callback) {
		dynamic {
			native.callback = callback;
		}
	}
}

shared class JQueryAjaxSettings(dynamic n) extends JQueryAjaxSettingsAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class JQueryAjaxSettingsAbs() extends JSObjectAbs() {
	
	shared Entry<JSString, JSString>[] getAccepts() {
		dynamic {
			return [for (key -> val in native.accepts) Entry<JSString, JSString>(JSString(key), JSString(val)) ];
		}
	}
	
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
	
	shared Boolean getAsync() {
		dynamic {
			if (native.async) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared void setAsync(Boolean async) {
		dynamic {
			native.async = async;
		}
	}
	
	doc("returns Boolean(JQXHR, JQueryAjaxSettings)?")
	shared dynamic getBeforeSend() {
		dynamic {
			return native.beforeSend = beforeSend;
		}
	}
	
	shared void setBeforeSend(Boolean(JQXHR, JQueryAjaxSettings) beforeSend) {
		dynamic {
			native.beforeSend = beforeSend;
		}
	}
	
	shared Boolean getCache() {
		dynamic {
			if (native.cache) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared void setCache(Boolean cache) {
		dynamic {
			native.cache = cache;
		}
	}
	
	doc("returns array of Anything(JQXHR, String) or null")
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
	
	shared void setComplete(Anything(JQXHR, String)* complete) {
		dynamic {
			native.complete = complete;
		}
	}
	
	
	shared Entry<JSString, RegExp>[] getContents() {
		dynamic {
			return [for (key -> val in native.contents) Entry<JSString, RegExp>(JSString(key), RegExp(val)) ];
		}
	}
	
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
	
	shared JSString? getContentType() {
		dynamic {
			if (native.contentType != \inull) {
				return JSString(native.contentType);
			} else {
				return null;
			}
		}
	}
	
	shared void setContentType(String contentType) {
		dynamic {
			native.contentType = contentType;
		}
	}
	
	shared JSObject? getContext() {
		dynamic {
			if (native.context != \inull) {
				return JSObject(native.context);
			} else {
				return null;
			}
		}
	}
	
	shared void setContext(JSObject context) {
		dynamic {
			native.context = context.native;
		}
	}
	
	shared Entry<JSString, JSObject>[] getConverters() {
		dynamic {
			return [for (key -> val in native.converters) Entry<JSString, JSObject>(JSString(key), JSObject(val)) ];
		}
	}
	
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
	
	shared Boolean getCrossDomain() {
		dynamic {
			if (native.crossDomain) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared void setCrossDomain(Boolean crossDomain) {
		dynamic {
			native.crossDomain = crossDomain;
		}
	}
	
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
	
	doc("returns Anything(String, String)?")
	shared dynamic getDataFilter() {
		dynamic {
			return native.dataFilter;
		}
	}
	
	shared void setDataFilter(Anything(String, String) datafilter) {
		dynamic {
			native.dataFilter = datafilter;
		}
	}
	
	shared JSString? getDataType() {
		dynamic {
			if (native.dataType != \inull) {
				return JSString(native.dataType);
			} else {
				return null;
			}
		}
	}
	
	shared void setDataType(String dataType) {
		dynamic {
			native.dataType = dataType;
		}
	}
	
	doc("returns Anything(JQXHR, String?, String?)[]")
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
	
	shared void setError(Anything(JQXHR, String?, String?)* datafilter) {
		dynamic {
			native.dataFilter = datafilter;
		}
	}
	
	shared Boolean getGlobal() {
		dynamic {
			if (native.global) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared void setGlobal(Boolean global) {
		dynamic {
			native.global = global;
		}
	}
	
	shared Entry<JSString, JSString>[] getHeaders() {
		dynamic {
			return [for (key -> val in native.headers) Entry<JSString, JSString>(JSString(key), JSString(val)) ];
		}
	}
	
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
	
	shared Boolean getIfModified() {
		dynamic {
			if (native.ifModified) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared void setIfModified(Boolean modified) {
		dynamic {
			native.ifModified = modified;
		}
	}
	
	shared Boolean getIsLocal() {
		dynamic {
			if (native.isLocal) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared void setIsLocal(Boolean local) {
		dynamic {
			native.isLocal = local;
		}
	}
	
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
	
	shared void setJsonp(JSONPSettings jsonp) {
		dynamic {
			native.jsonp = jsonp.native;
		}
	}
	
	doc("returns String|String()?")
	shared dynamic getJsonpCallback() {
		dynamic {
			return native.jsonpCallback;
		}
	}
	
	shared void setJsonpCallback(String|String() callback) {
		dynamic {
			native.jsonpCallback = callback;
		}
	}
	
	shared JSString? getMimeType() {
		dynamic {
			if (native.mimeType != \inull) {
				return JSString(native.mimeType);
			} else {
				return null;
			}
		}
	}
	
	shared void setMimeType(String mimeType) {
		dynamic {
			native.mimeType = mimeType;
		}
	}
	
	shared JSString? getPassword() {
		dynamic {
			if (native.password != \inull) {
				return JSString(native.password);
			} else {
				return null;
			}
		}
	}
	
	shared void setPassword(String password) {
		dynamic {
			native.password = password;
		}
	}
	
	shared Boolean getProcessData() {
		dynamic {
			if (native.password) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared void setProcessData(Boolean processData) {
		dynamic {
			native.processData = processData;
		}
	}
	
	shared JSString? getScriptCharset() {
		dynamic {
			if (native.scriptCharset != \inull) {
				return JSString(native.scriptCharset);
			} else {
				return null;
			}
		}
	}
	
	shared void setScriptCharset(String scriptCharset) {
		dynamic {
			native.scriptCharset = scriptCharset;
		}
	}
	
	doc("returns Object: JSNumber -> Anything(JQXHR, String?, String?)|Anything(JQXHR, String?, String?)")
	shared dynamic getStatusCode() {
		dynamic {
			return statusNative;
		}
	}
	
	shared void setStatusCode(Entry<JSNumber, Anything(JQXHR, String?, String?)|Anything(JQXHR, String?, String?)>* statusCodes) {
		JSObject statusNative = createJSObject();
		for (key -> val in statusCodes) {
			dynamic {
				objectDefineProperty(statusNative, key.string, DataDescriptor(true, false, true, true, val));
			}
		}
		dynamic {
			native.statusNative = statusNative.native;
		}
	}
	
	doc("returns Anything(Anything, String, JQXHR)[]")
	shared JSArray? getSuccess() {
		dynamic {
			if (native.success != \inull) {
				return JSArray(native.success);
			} else {
				return null;
			}
		}
	}
	
	shared void setSuccess(Anything(Anything, String, JQXHR)* success) {
		dynamic {
			native.success = success;
		}
	}
	
	shared JSNumber? getTimeout() {
		dynamic {
			if (native.timeout != \inull) {
				return JSNumber(native.timeout);
			} else {
				return null;
			}
		}
	}
	
	shared void setTimeout(Integer timeout) {
		dynamic {
			native.timeout = timeout;
		}
	}
	
	shared Boolean getTraditional() {
		dynamic {
			if (native.traditional) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared void setTraditional(Boolean traditional) {
		dynamic {
			native.traditional = traditional;
		}
	}
	
	shared JSString? getType() {
		dynamic {
			if (native.type != \inull) {
				return JSString(native.type);
			} else {
				return null;
			}
		}
	}
	
	shared void setType(String type) {
		dynamic {
			native.type = type;
		}
	}
	
	shared JSString? getUrl() {
		dynamic {
			if (native.url != \inull) {
				return JSString(native.url);
			} else {
				return null;
			}
		}
	}
	
	shared void setUrl(String url) {
		dynamic {
			native.url = url;
		}
	}
	
	shared JSString? getUsername() {
		dynamic {
			if (native.username != \inull) {
				return JSString(native.username);
			} else {
				return null;
			}
		}
	}
	
	shared void setUsername(String username) {
		dynamic {
			native.username = username;
		}
	}
	
	doc("returns Anything()?")
	shared dynamic getXhr() {
		dynamic {
			return native.xhr;
		}
	}
	
	shared void setXhr(Anything() xhr) {
		dynamic {
			native.xhr = xhr;
		}
	}
	
	shared Entry<JSString, JSObject>[] getXhrFields() {
		dynamic {
			return [for (key -> val in native.xhrFields) Entry<JSString, JSObject>(JSString(key), JSObject(val)) ];
		}
	}
	
	shared void setXhrFields(Entry<JSString, JSObject>* xhrFields) {
		JSObject xhrNative = createJSObject();
		for (key -> val in xhrFields) {
			dynamic {
				objectDefineProperty(xhrNative, key, DataDescriptor(true, false, true, true, val.native));
			}
		}
		dynamic {
			native.xhrFields = xhrNative.native;
		}
	}
	
}