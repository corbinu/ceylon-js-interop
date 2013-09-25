shared abstract class PropertyDescriptor() {
	
	shared formal Boolean configurable;
	shared formal Boolean descriptor;
	shared formal Boolean enumerable;
	
	shared formal dynamic toNative();

}

// TODO val should be JSObject but it is not actually a super class of anything JSObjectAbs is
shared class DataDescriptor(shared actual Boolean configurable = false, shared actual Boolean descriptor = false, 
									shared actual Boolean enumerable = false, shared Boolean writable = false, 
									shared Anything? val = null) extends PropertyDescriptor() {
	shared actual dynamic toNative() {
		dynamic {
			dynamic native = \iObject();
			native.configurable = configurable;
			native.descriptor = descriptor;
			native.enumerable = enumerable;
			native.writable = writable;
			if (exists v = val) {
				native.\ivalue = v;
			}
			return native;
		}
	}
}

shared class AccessorDescriptor(shared actual Boolean configurable, shared actual Boolean descriptor = false, 
									shared actual Boolean enumerable = false, shared Anything()? get = null, 
									shared Anything(Anything)? set = null) extends PropertyDescriptor() {
	shared actual dynamic toNative() {
		dynamic {
			dynamic native = \iObject();
			native.configurable = configurable;
			native.descriptor = descriptor;
			native.enumerable = enumerable;
			if (exists g = get) {
				native.get = g;
			}
			if (exists s = set) {
				native.set = s;
			}
			return native;
		}
	}
}

shared JSObject objectCreate(JSObject proto, Entry<String, DataDescriptor|AccessorDescriptor>[] properties) {
	value propsNative = createJSObject();
	dynamic {
		for (key -> val in properties) {
			objectDefineProperty(propsNative, key, val);
		}
		return JSObject(\iObject.create(proto.native, propsNative));
	}
}

shared void objectDefineProperty(JSObject obj, String|JSString prop, DataDescriptor|AccessorDescriptor descriptor) {
	switch (prop)
	case (is String) {
		dynamic {
			\iObject.defineProperty(obj.native, prop, descriptor.toNative());
		}
	}
	case (is JSString) {
		dynamic {
			\iObject.defineProperty(obj.native, prop.native, descriptor.toNative());
		}
	}
}

shared JSObject defineProperties(JSObject obj, Entry<String, DataDescriptor|AccessorDescriptor>[] properties) {
	value propsNative = createJSObject();
	dynamic {
		for (key -> val in properties) {
			objectDefineProperty(propsNative, key, val);
		}
		return JSObject(\iObject.defineProperties(obj.native, propsNative));
	}
}

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

shared JSArray objectKeys(JSObject obj) {
	dynamic {
		return JSArray(\iObject.keys(obj));
	}
}

shared JSArray objectGetOwnPropertyNames(JSObject obj) {
	dynamic {
		return JSArray(\iObject.getOwnPropertyNames(obj.native));
	}
}

shared JSObject objectGetPrototypeOf(JSObject obj) {
	dynamic {
		return JSObject(\iObject.getPrototypeOf(obj.native));
	}
}

shared JSObject objectPreventExtensions(JSObject obj) {
	dynamic {
		return JSObject(\iObject.preventExtensions(obj.native));
	}
}

shared Boolean objectIsExtensible(JSObject obj) {
	dynamic {
		if (\iObject.isExtensible(obj.native)) {
			return true;
		} else {
			return false;
		}
	}
}

shared JSObject objectSeal(JSObject obj) {
	dynamic {
		return JSObject(\iObject.seal(obj.native));
	}
}

shared Boolean objectIsSealed(JSObject obj) {
	dynamic {
		if (\iObject.isSealed(obj.native)) {
			return true;
		} else {
			return false;
		}
	}
}

shared JSObject objectFreeze(JSObject obj) {
	dynamic {
		return JSObject(\iObject.freeze(obj.native));
	}
}

shared Boolean objectIsFrozen(JSObject obj) {
	dynamic {
		if (\iObject.isFrozen(obj.native)) {
			return true;
		} else {
			return false;
		}
	}
}

shared JSObject createJSObject() {
	dynamic {
		return JSObject(\iObject());
	}
}

shared abstract class JSObjectAbs() {
	shared formal dynamic native;
	
	shared JSObject getPrototype() {
		dynamic {
			return JSObject(native.prototype);
		}
	}
	
	shared void setPrototype(JSObject prototype) {
		dynamic {
			native.prototype = prototype.native;
		}
	}
	
	shared JSFunction getConstructor() {
		dynamic {
			return Function(native.constructor);
		}
	}
	
	shared void setConstructor(JSFunction constructor) {
		dynamic {
			native.constructor = constructor.native;
		}
	}
    
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
    
    shared Boolean isPrototypeOf(dynamic obj) {
		dynamic {
			if (native.isPrototypeOf(obj)) {
                return true;
            } else {
                return false;
            }
        }
    }
    
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
    
    shared void apply(Anything? thisArg, Anything[] args) {
        if (exists a = thisArg) {
	        dynamic {
	            native.apply(a, args);
	        }
		} else {
			dynamic {
				native.apply(null, args);
			}
		}
    }
    
    shared void applyJS(JSObject? thisArg, JSObject[] args) {
        if (exists a = thisArg) {
            dynamic {
                native.apply(a.native, args*.native);
            }
        } else {
            dynamic {
                native.apply(null, args*.native);
            }
        }
    }
    
    shared void call(Anything? thisArg, Anything* args) {
    	dynamic {
            JSFunction(native.call).apply(a, args);
        }
    }
    
    shared void callJS(JSObject? thisArg, JSObject* args) {
		dynamic {
			JSFunction(native.call).applyJS(a, args);
		}
    }
    
    shared JSString toString() {
        dynamic {
            return JSString(native.toString());
        }
    }
	
}

shared class JSObject(dynamic n) extends JSObjectAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}