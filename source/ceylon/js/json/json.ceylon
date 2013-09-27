import ceylon.js.language { JSNumber, JSString, JSObjectAbs, JSObject, createJSObject, DataDescriptor, JSArray, createJSNumber, objectDefineProperty }
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

shared class JSON({Entry<String, String|Boolean|Integer|Float|Object|Array|NullInstance>*} values = {}) extends Object(values) {
	
	shared JSJSON toJson() {
		dynamic {
			return JSJSON(objectToJson(this).native);
		}
	}
	
	JSObject objectToJson(Object ceylonJSON) {
		JSObject json = createJSObject();
		for (name -> entry in ceylonJSON) {
			dynamic val;
			switch (entry)
			case (is String) {
				dynamic {
					val = entry;
				}
			}
			case (is Boolean) {
				dynamic {
					if (entry) {
						val = \itrue;
					} else {
						val = \ifalse;
					}
				}
			}
			case (is Integer|Float) {
				dynamic {
					val = createJSNumber(entry).native;
				}	
			}
			case (is Object) {
				dynamic {
					val = objectToJson(entry).native;
				}
			}
			case (is Array) {
				print ("adding value Array");
				dynamic {
					val = arrayToArray(entry).native;
				}
			}
			case (is NullInstance) {
				dynamic {
					val = \inull;
				}
			}
			dynamic {
				objectDefineProperty(json, name, DataDescriptor(true, false, true, true, val));
			}
		}
			
		return json;
	}
	
	JSArray arrayToArray(Array ceylonArray) {
		JSArray array;
		dynamic {
			array = JSArray(\iArray());
		}
		for (entry in ceylonArray) {
			switch (entry)
			case (is String) {  
				dynamic {
					array.push(entry);
				}
			}
			case (is Boolean) {
				dynamic {
					if (entry) {
						array.push(\itrue);
					} else {
						array.push(\ifalse);
					}
				}
			}
			case (is Integer|Float) { 
				dynamic {
					array.push(createJSNumber(entry).native);
				}
			}
			case (is Object) {
				dynamic {
					array.push(objectToJson(entry).native);
				}
			}
			case (is Array) {
				dynamic {
					array.push(arrayToArray(entry).native);
				}
			}
			case (is NullInstance) {
				dynamic {
					array.push(\inull);
				}
			}
		}
		return array;
	}
}

shared abstract class JSJSONAbs() extends JSObjectAbs() {}

shared class JSJSON(dynamic n) extends JSJSONAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared class JSONArray() extends Array() {}
