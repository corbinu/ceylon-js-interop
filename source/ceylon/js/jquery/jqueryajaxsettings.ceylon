import ceylon.js.language { JSObject }
import ceylon.js.json { JSJSON, JSON }

shared abstract class DataType(String name) of dataTypeXML | dataTypeHtml | dataTypeScript | dataTypeJson | dataTypeJsonp | dataTypeText {}

shared object dataTypeXML extends DataType("dataTypeXML") {}
shared object dataTypeHtml extends DataType("dataTypeHtml") {}
shared object dataTypeScript extends DataType("dataTypeScript") {}
shared object dataTypeJson extends DataType("dataTypeJson") {}
shared object dataTypeJsonp extends DataType("dataTypeJsonp") {}
shared object dataTypeText extends DataType("dataTypeText") {}

shared class JSONPSettings(shared Boolean jsonp = true, shared String jsonpCallback = "callback") {
		
	shared JSJSON|Boolean|String? toJson() {
		if (jsonp == true) {
			if (jsonpCallback == "callback") {
				return null;
			} else {
				return jsonpCallback;
			}
		} else {
			if (jsonpCallback == "callback") {
				return false;
			} else {
				value json = JSON {
					"jsonp" -> false,
					"jsonpCallback" -> jsonpCallback
				};
				return json.toJson();
			}
		}
	}
}

shared class JQueryAjaxSettings(Boolean async = true, Boolean? cache = null, String contentType = "application/x-www-form-urlencoded; charset=UTF-8",
									dynamic context = null, Boolean? crossDomain = null, String|JSObject data = "",
									DataType[] dataType = {}, Boolean global = true, Boolean ifModified = true, 
									JSONPSettings jsonp = JSONPSettings(), String|String()? jsonpCallback = null, 
									String? mimeType = null, String? password = null, Boolean processData  = true,
									String? scriptCharset = null, Integer? timeout = null, Boolean traditional = false,
									String type = "GET", String? url = null, String? username = null) {
	
	shared variable Boolean(JQXHR, JQueryAjaxSettings)? beforeSend = null;
	shared variable JSObject(String, String)? dataFilter = null;
	shared variable JSObject()? xhr = null;
	
	shared variable Anything(JQXHR, String)[] complete = {};
	shared variable Anything(JQXHR, String?, String?)[] error = {};
	shared variable Anything(Anything, String, JQXHR)[] success = {};
	
	shared variable Entry<String, String>[] accepts = {};
	
	shared variable Entry<String, String>[] contents = {};
	shared variable Entry<String, String>[] headers = {};
	
	shared variable Entry<String, JSObject>[] converters = {};
	shared variable JSON xhrFields = JSON();
	
	shared variable Entry<Integer, Anything(JQXHR, String?, String?)|Anything(JQXHR, String?, String?)>[] statusCode = {};
	
	
}