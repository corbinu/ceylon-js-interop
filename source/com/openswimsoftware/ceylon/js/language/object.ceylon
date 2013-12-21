doc("describes a new object property")
shared abstract class PropertyDescriptor() {
	
	shared formal Boolean configurable;
	shared formal Boolean descriptor;
	shared formal Boolean enumerable;
	
	shared formal JSObject toNative();

}

doc("describes a new object data property")
shared class DataDescriptor(shared actual Boolean configurable = false, shared actual Boolean descriptor = false, 
									shared actual Boolean enumerable = false, shared Boolean writable = false, 
									shared dynamic val = null) extends PropertyDescriptor() {
	
	doc("converts the options to native JSON")
	shared actual JSObject toNative() {
		JSObject obj = createJSObject();
		dynamic {
			obj.native.configurable = configurable;
			obj.native.descriptor = descriptor;
			obj.native.enumerable = enumerable;
			obj.native.writable = writable;
			obj.native.\ivalue = val;
		}
		return obj;
	}
}

doc("describes a new object accessor property")
shared class AccessorDescriptor(shared actual Boolean configurable, shared actual Boolean descriptor = false, 
									shared actual Boolean enumerable = false, shared Anything()? get = null, 
									shared Anything(Anything)? set = null) extends PropertyDescriptor() {
	
	doc("converts the options to native JSON")
	shared actual JSObject toNative() {
		JSObject obj = createJSObject();
		dynamic {
			obj.native.configurable = configurable;
			obj.native.descriptor = descriptor;
			obj.native.enumerable = enumerable;
			if (exists g = get) {
				obj.native.get = g;
			}
			if (exists s = set) {
				obj.native.set = s;
			}
		}
		return obj;
	}
}

doc("create a new native object")
shared JSObject objectCreate(JSObject proto, Entry<String, DataDescriptor|AccessorDescriptor>[] properties) {
	value propsNative = createJSObject();
	dynamic {
		for (key -> val in properties) {
			objectDefineProperty(propsNative, key, val);
		}
		return JSObject(\iObject.create(proto.native, propsNative));
	}
}

doc("define a property on a native object")
shared void objectDefineProperty(JSObject obj, String|JSString prop, DataDescriptor|AccessorDescriptor descriptor) {
	switch (prop)
	case (is String) {
		dynamic {
			\iObject.defineProperty(obj.native, prop, descriptor.toNative().native);
		}
	}
	case (is JSString) {
		dynamic {
			\iObject.defineProperty(obj.native, prop.native, descriptor.toNative().native);
		}
	}
}

doc("define properties on a native object")
shared JSObject defineProperties(JSObject obj, Entry<String, DataDescriptor|AccessorDescriptor>[] properties) {
	value propsNative = createJSObject();
	dynamic {
		for (key -> val in properties) {
			objectDefineProperty(propsNative, key, val);
		}
		return JSObject(\iObject.defineProperties(obj.native, propsNative));
	}
}

doc("get the discriptor of a object property")
shared JSObject objectGetOwnPropertyDescriptor(JSObject obj, String|JSString prop) {
	JSObject descriptor;
	switch (prop) 
	case (is String) {
		dynamic {
			descriptor = JSObject(\iObject.objectGetOwnPropertyDescriptor(obj, prop));
		}
	}
	case (is JSString) {
		dynamic {
			descriptor = JSObject(\iObject.objectGetOwnPropertyDescriptor(obj, prop.native));
		}
	}
	return descriptor;
}

doc("returns an array of object enumerable properties")
shared JSArray objectKeys(JSObject obj) {
	dynamic {
		return JSArray(\iObject.keys(obj));
	}
}

doc("returns an array of object properties")
shared JSArray objectGetOwnPropertyNames(JSObject obj) {
	dynamic {
		return JSArray(\iObject.getOwnPropertyNames(obj.native));
	}
}

doc("returns the objects prototype")
shared JSFunction objectGetPrototypeOf(JSObject obj) {
	dynamic {
		return JSFunction(\iObject.getPrototypeOf(obj.native));
	}
}

doc("prevents new properties from being added to the object")
shared JSObject objectPreventExtensions(JSObject obj) {
	dynamic {
		return JSObject(\iObject.preventExtensions(obj.native));
	}
}

doc("can new properties be added to the object")
shared Boolean objectIsExtensible(JSObject obj) {
	dynamic {
		if (\iObject.isExtensible(obj.native)) {
			return true;
		} else {
			return false;
		}
	}
}

doc("prevents properties from being added to or removed from the object")
shared JSObject objectSeal(JSObject obj) {
	dynamic {
		return JSObject(\iObject.seal(obj.native));
	}
}

doc("can properties be added to or removed from the object")
shared Boolean objectIsSealed(JSObject obj) {
	dynamic {
		if (\iObject.isSealed(obj.native)) {
			return true;
		} else {
			return false;
		}
	}
}

doc("stops the object being altered in any way")
shared JSObject objectFreeze(JSObject obj) {
	dynamic {
		return JSObject(\iObject.freeze(obj.native));
	}
}

doc("can the object being altered in any way")
shared Boolean objectIsFrozen(JSObject obj) {
	dynamic {
		if (\iObject.isFrozen(obj.native)) {
			return true;
		} else {
			return false;
		}
	}
}

doc("create a new native object")
shared JSObject createJSObject() {
	dynamic {
		return JSObject(\iObject());
	}
}

shared abstract class JSObjectAbs() {
	shared formal dynamic native;
	
	doc("returns the objects prototype")
	shared JSObject getPrototype() {
		dynamic {
			return JSObject(native.prototype);
		}
	}
	
	doc("sets the objects prototype")
	shared void setPrototype(JSObject prototype) {
		dynamic {
			native.prototype = prototype.native;
		}
	}
	
	doc("returns the objects contructor")
	shared JSFunction getConstructor() {
		dynamic {
			return Function(native.constructor);
		}
	}
	
	doc("sets the objects contructor")
	shared void setConstructor(JSFunction constructor) {
		dynamic {
			native.constructor = constructor.native;
		}
	}
    
    doc("does the object have the propery")
	shared Boolean hasOwnProperty(String|JSString prop) {
        dynamic has;
        switch (prop) 
        case (is String) {
            dynamic {
            	has = native.hasOwnProperty(prop);
        	}
        }
        case (is JSString) {
            dynamic {
                has = native.hasOwnProperty(prop.native);
            }
        }
        dynamic {
            if (has) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    doc("is the object in the passed objects prototype chain")
    shared Boolean isPrototypeOf(JSObject obj) {
		dynamic {
			if (native.isPrototypeOf(obj.native)) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    doc("is the property enumerable by a for in loop")
    shared Boolean propertyIsEnumerable(String|JSString prop) {
        dynamic enum;
        switch (prop) 
        case (is String) {
            dynamic {
                enum = native.propertyIsEnumerable(prop);
            }
        }
        case (is JSString) {
            dynamic {
                enum = native.propertyIsEnumerable(prop.native);
            }
        }
        dynamic {
            if (enum) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    doc("calls a function with thisArg as this and an array of args")
    shared void apply(dynamic thisArg, dynamic args) {
		dynamic {
	        native.apply(a, args);
	    }
    }
    
    doc("calls a function with thisArg as this and an argument list")
    shared void call(dynamic thisArg, dynamic args) {
    	dynamic {
    		//TODO Args should be spread
    		native.call(thisArg, args);
        }
    }
    
    doc("convert the object to a string")
    shared JSString toString() {
        dynamic {
            return JSString(native.toString());
        }
    }
	
}

doc("native Object")
shared class JSObject(dynamic n) extends JSObjectAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}