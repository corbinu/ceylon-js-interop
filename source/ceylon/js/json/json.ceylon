import ceylon.js.language { JSNumber, JSString, JSObjectAbs, JSObject, createJSObject, DataDescriptor, JSArray, createJSArray }
import ceylon.json { ... }

shared dynamic jsonParse(String text) {
	dynamic {
		return \iJSON.parse(text);
	}
}

shared dynamic jsonParseCallback(String text, Anything callback(dynamic key, dynamic val)) {
	dynamic {
		return \iJSON.parse(text, callback);
	}
}

shared JSString jsonStringify(dynamic val, String|JSString|Integer|JSNumber? space = null) {
	switch (space)
	case (is String|Integer) {
		dynamic {
			return JSString(\iJSON.stringify(val, null, space));
		}
	}
	case (is JSString|JSNumber) {
		dynamic {
			return JSString(\iJSON.stringify(val, null, space.native));
		}
	}
	case (is Null) {
		dynamic {
			return JSString(\iJSON.stringify(val));
		}
	}
	
}

shared JSString jsonStringifyReplacer(dynamic val, Anything replacer(dynamic key, dynamic val), String|JSString|Integer|JSNumber? space = null) {
	switch (space)
	case (is String|Integer) {
		dynamic {
			return JSString(\iJSON.stringify(val, replacer, space));
		}
	}
	case (is JSString|JSNumber) {
		dynamic {
			return JSString(\iJSON.stringify(val, replacer, space.native));
		}
	}
	case (is Null) {
		dynamic {
			return JSString(\iJSON.stringify(val));
		}
	}
}

shared class JSJSON(dynamic n) extends JSJSONAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class JSJSONAbs() extends JSObjectAbs() {}

shared class JSON({Entry<String, String|Boolean|Integer|Float|Object|Array|NullInstance>*} values = {}) extends Object(values) {
	
	shared JSJSON toJson() {
		dynamic {
			return JSJSON(objectToJson(this).native);
		}
	}
	
	JSObject objectToJson(Object ceylonJSON) {
		JSObject json = createJSObject();
		variable dynamic val;
		dynamic {
			for (name -> entry in ceylonJSON) {
				switch (entry)
				case (is String) {
					val = entry;
				}
				case (is Boolean) {
					if (entry) {
						val = \itrue;
					} else {
						val = \ifalse;
					}
				}
				case (is Integer|Float) { 
					val = \iNumber(entry);
				}
				case (is Object) {
					val = objectToJson(entry).native;
				}
				case (is Array) {
					val = arrayToArray(entry).native;
				}
				case (is NullInstance) {
					val = \inull;
				}
				objectDefineProperty(json, name, DataDescriptor(true, false, true, true, val));
			}
			
			return json;
		}
	}
	
	JSArray arrayToArray(Array ceylonArray) {
		JSArray array = createJSArray();
		dynamic {
			for (entry in ceylonArray) {
				switch (entry)
				case (is String) {  
					array.push(entry);
				}
				case (is Boolean) {
					if (entry) {
						array.push(\itrue);
					} else {
						array.push(\ifalse);
					}
				}
				case (is Integer|Float) { 
					array.push(objectToJson(\iNumber(entry)));
				}
				case (is Object) {
					val = objectToJson(entry).native;
				}
				case (is Array) {
					val = arrayToArray(entry).native;
				}
				case (is NullInstance) {
					array.push(\inull);
				}

			}
			return array;
		}
	}
}