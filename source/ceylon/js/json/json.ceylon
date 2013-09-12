import ceylon.js.language { JSNumber, JSString, JSObject }
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

shared class JSJSON(dynamic n) extends JSObject(n) {}

shared class JSON({Entry<String, String|Boolean|Integer|Float|Object|Array|NullInstance>*} values = {}) extends Object(values) {
	
	shared JSJSON toJson() {
		dynamic {
			return JSJSON(objectToJson(this));
		}
	}
	
	dynamic objectToJson(Object ceylonJSON) {
		dynamic {
			dynamic json = \iObject();
			dynamic options = \iObject();
			options.writable = \itrue;
			options.enumerable = \itrue;
			options.configurable = \itrue;
			for (name -> entry in ceylonJSON) {
				switch (entry)
				case (is String) {
					options.\ivalue = entry;
				}
				case (is Boolean) {
					if (entry) {
						options.\ivalue = \itrue;
					} else {
						options.\ivalue = \ifalse;
					}
				}
				case (is Integer|Float) { 
					options.\ivalue = \iNumber(entry);
				}
				case (is Object) {
					dynamic dummy = value {dCarrier=objectToJson(entry);};
					options.\ivalue = dummy.dCarrier.json;
				}
				case (is Array) {
					dynamic dummy = value {dCarrier=arrayToArray(entry);};
					options.\ivalue = dummy.dCarrier.array;
				}
				case (is NullInstance) {
					options.\ivalue = \inull;
				}
				\iObject.defineProperty(json, name, options);
				
			}
			
			return json;
		}
	}
	
	dynamic arrayToArray(Array ceylonArray) {
		dynamic {
			dynamic array = \iArray();
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
					dynamic dummy = value {dCarrier=objectToJson(entry);};
					array.push(dummy.dCarrier.json);
				}
				case (is Array) {
					dynamic dummy = value {dCarrier=arrayToArray(entry);};
					array.push(dummy.dCarrier.array);
				}
				case (is NullInstance) {
					array.push(\inull);
				}

			}
			
			return array;
		}
	}
}