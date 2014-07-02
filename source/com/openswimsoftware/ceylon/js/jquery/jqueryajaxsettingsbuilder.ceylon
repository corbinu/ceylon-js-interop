import com.openswimsoftware.ceylon.js.language { JSObject, RegExp, JSString, createJSString }

doc("settings for JSONP in request builder")
shared class JSONPOptions(shared Boolean jsonp = true, shared String jsonpCallback = "callback") {}

doc("settings for a JQuery AJAX request")
shared class JQueryAjaxSettingsBuilder(shared Boolean async = true, shared Boolean? cache = null, 
										shared String contentType = "application/x-www-form-urlencoded; charset=UTF-8",
										shared JSObject? context = null, shared Boolean? crossDomain = null, 
										shared String|JSObject data = "", shared DataType[] dataType = [], 
										shared Boolean global = true, shared Boolean ifModified = true, 
										shared Boolean? isLocal = null, shared JSONPOptions jsonp = JSONPOptions(), 
										shared String|String()? jsonpCallback = null, shared String? mimeType = null, 
										shared String? password = null, shared Boolean processData  = true,
										shared String? scriptCharset = null, shared Integer? timeout = null, 
										shared Boolean traditional = false, shared String type = "GET", 
										shared String? url = null, shared String? username = null) {
	
	doc("Boolean(JQXHR, JQueryAjaxSettings)? which is a handler called before the request is sent")
	shared variable dynamic beforeSend = null;
	doc("data filter Anything(String, String)?")
	shared variable dynamic dataFilter = null;
	doc("the underlying XHR function")
	shared variable dynamic xhr = null;
	
	doc("array of handers Anything(JQXHR, String) for when the request is complete")
	shared variable dynamic complete = null;
	doc("array of error handlers Anything(JQXHR, String?, String?)")
	shared variable dynamic error = null;
	doc("array of handers called Anything(Anything, String, JQXHR) upon a successful request")
	shared variable dynamic success = null;
	
	doc("the data types the request accepts")
	shared variable Entry<String, String>[] accepts = [];
	
	doc("a set of content types paired with regular expression pairs that determine how jQuery will parse the response")
	shared variable Entry<String, RegExp>[] contents = [];
	doc("the request headers")
	shared variable Entry<String, String>[] headers = [];
	
	doc("data type converters")
	shared variable Entry<String, JSObject>[] converters = [];
	doc("the base XHR settings")
	shared variable dynamic xhrFields = null;
	
	doc("sets a set of callbacks JSNumber -> Anything(JQXHR, String?, String?) which is a set of HTTP status code and a set of functions to be called on receipt of that code")
	shared variable dynamic statusCode = {};
	
	doc("convert to native AJAX settings")
	shared JQueryAjaxSettings toNative() {
		JQueryAjaxSettings settings;
		dynamic {
			settings = JQueryAjaxSettings(\iObject);
		}
		Entry<JSString, JSString>[] acceptsNative;
		dynamic {
			acceptsNative = [for (key -> val in accepts) Entry<JSString, JSString>(createJSString(key), createJSString(val))];
		}
		settings.setAccepts(*acceptsNative);
		settings.setAsync(async);
		dynamic {
			settings.setBeforeSend(beforeSend);
		}
		if (exists c = cache) {
			settings.setCache(c);
		}
		dynamic {
			settings.setComplete(complete);
		}
		Entry<JSString, RegExp>[] contentsNative;
		dynamic {
			contentsNative = [for (key -> val in contents) Entry<JSString, RegExp>(createJSString(key), val)];
		}
		settings.setContents(*contentsNative);
		settings.setContentType(contentType);
		if (exists c = context) {
			settings.setContext(c);
		}
		Entry<JSString, JSObject>[] convertersNative;
		dynamic {
			convertersNative = [for (key -> val in converters) Entry<JSString, JSObject>(createJSString(key), val)];
		}
		settings.setConverters(*convertersNative);
		if (exists cD = crossDomain) {
			settings.setCrossDomain(cD);
		}
		settings.setData(data);
		dynamic {
			settings.setDataFilter(dataFilter);
		}
		variable String dataTypeS = "";
		for (dT in dataType) {
			dataTypeS += " " + dT.string;
		}
		settings.setDataType(dataTypeS);
		dynamic {
			settings.setError(error);
		}
		settings.setGlobal(global);
		Entry<JSString, JSString>[] headersNative;
		dynamic {
			headersNative = [for (key -> val in headers) Entry<JSString, JSString>(createJSString(key), createJSString(val))];
		}
		settings.setHeaders(headersNative);
		settings.setIfModified(ifModified);
		if (exists iL = isLocal) {
			settings.setIsLocal(iL);
		}
		JSONPSettings? settingsNative = createJSONPSettings(jsonp.jsonp, jsonp.jsonpCallback);
		if (exists sN = settingsNative) {
			settings.setJsonp(sN);
		}
		if (exists jC = jsonpCallback) {
			settings.setJsonpCallback(jC);
		}
		if (exists mT = mimeType) {
			settings.setMimeType(mT);
		}
		if (exists p = password) {
			settings.setPassword(p);
		}
		settings.setProcessData(processData);
		if (exists sC = scriptCharset) {
			settings.setScriptCharset(sC);
		}
		dynamic {
			settings.setStatusCode(statusCode);
			settings.setSuccess(success);
		}
		if (exists t = timeout) {
			settings.setTimeout(t);
		}
		settings.setTraditional(traditional);
		settings.setType(type);
		settings.setTraditional(traditional);
		settings.setType(type);
		if (exists u = url) {
			settings.setUrl(u);
		}
		if (exists user = username) {
			settings.setUsername(user);
		}
		dynamic {
			settings.setXhr(xhr);
			settings.setXhrFields(xhrFields);
		}
		
		return settings;
	}
}