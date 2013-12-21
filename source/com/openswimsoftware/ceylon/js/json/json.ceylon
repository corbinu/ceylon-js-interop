import com.openswimsoftware.ceylon.js.language { JSNumber, JSString, JSObjectAbs, JSObject, createJSObject, DataDescriptor, JSArray, createJSNumber, objectDefineProperty }
import ceylon.json { ... }

doc("parse the given JSON string")
shared dynamic jsonParse(String text) {
	dynamic {
		return \iJSON.parse(text);
	}
}

doc("parse the given JSON string using a callback for manipulation the key values")
shared dynamic jsonParseCallback(String text, Anything callback(dynamic key, dynamic val)) {
	dynamic {
		return \iJSON.parse(text, callback);
	}
}

doc("convert the JS object val into a JSON string using space for formating")
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

doc("convert the JS object val into a JSON string using space for formating using replacer to alter key values")
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

doc("JSON objects in Ceylon")
shared class JSON({Entry<String, String|Boolean|Integer|Float|Object|Array|NullInstance>*} values = {}) extends Object(values) {
	
	doc("convert to native JSON object")
	shared JSJSON toJson() {
		dynamic {
			return JSJSON(objectToJson(this).native);
		}
	}
	
	doc("convert the object to a native object")
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
	
	doc("convert the array to a natve array")
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

doc("native JSON object")
shared class JSJSON(dynamic n) extends JSJSONAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

doc("ceylon JSON Array")
shared class JSONArray() extends Array() {}
