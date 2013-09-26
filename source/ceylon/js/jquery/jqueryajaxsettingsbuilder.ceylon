import ceylon.js.language { JSObject, RegExp, JSString, createJSString, JSNumber }

shared class JSONPOptions(shared Boolean jsonp = true, shared String jsonpCallback = "callback") {}

shared class JQueryAjaxSettingsBuilder(shared Boolean async = true, shared Boolean? cache = null, 
										shared String contentType = "application/x-www-form-urlencoded; charset=UTF-8",
										shared JSObject? context = null, shared Boolean? crossDomain = null, 
										shared String|JSObject data = "", shared DataType[] dataType = {}, 
										shared Boolean global = true, shared Boolean ifModified = true, 
										shared Boolean? isLocal = null, shared JSONPOptions jsonp = JSONPOptions(), 
										shared String|String()? jsonpCallback = null, shared String? mimeType = null, 
										shared String? password = null, shared Boolean processData  = true,
										shared String? scriptCharset = null, shared Integer? timeout = null, 
										shared Boolean traditional = false, shared String type = "GET", 
										shared String? url = null, shared String? username = null) {
	
	//JQXHR, then JQueryAjaxSettings
	shared variable Boolean(Anything, Anything)? beforeSend = null;
	shared variable Anything(String, String)? dataFilter = null;
	shared variable Anything()? xhr = null;
	
	//JQXHR is first
	shared variable Anything(Anything, String)[] complete = {};
	//JQXHR is first
	shared variable Anything(Anything, String?, String?)[] error = {};
	//JQXHR is last
	shared variable Anything(Anything, String, Anything)[] success = {};
	
	shared variable Entry<String, String>[] accepts = {};
	
	shared variable Entry<String, RegExp>[] contents = {};
	shared variable Entry<String, String>[] headers = {};
	
	shared variable Entry<String, JSObject>[] converters = {};
	shared variable Entry<String, JSObject>[] xhrFields = {};
	
	//JQXHR is first on functions
	shared variable Entry<Integer, Anything(Anything, String?, String?)|Anything(Anything, String?, String?)>[] statusCode = {};
	
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
		if (exists bS = beforeSend) {
			settings.setBeforeSend(bS);
		}
		if (exists c = cache) {
			settings.setCache(c);
		}
		settings.setComplete(*complete);
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
		if (exists dF = dataFilter) {
			settings.setDataFilter(dF);
		}
		variable String dataTypeS = "";
		for (dT in dataType) {
			dataTypeS += " " + dT.string;
		}
		settings.setDataType(dataTypeS);
		settings.setError(*error);
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
		Entry<JSNumber, Anything(Anything, String?, String?)|Anything(JQXHR, String?, String?)>[] statusCodeNative;
		dynamic {
			statusCodeNative = [for (key -> val in statusCode) Entry<JSNumber, Anything(Anything, String?, String?)|Anything(Anything, String?, String?)>(createJSString(key), val)];
		}
		settings.setStatusCode(*statusCodeNative);
		settings.setSuccess(*success);
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
		if (exists x = xhr) {
			settings.setXhr(x);
		}
		Entry<JSString, JSObject>[] xhrFieldsNative;
		dynamic {
			xhrFieldsNative = [for (key -> val in xhrFields) Entry<JSString, JSObject>(createJSString(key), createJSString(val))];
		}
		settings.setXhrFields(*xhrFieldsNative);
		
		return settings;
	}
}