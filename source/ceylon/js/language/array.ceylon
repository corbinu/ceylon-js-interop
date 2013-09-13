
shared JSArray createJSArray(Anything* elements) {
	dynamic {
		return JSArray(\iArray.prototype.apply(null, elements));
	}
}

shared Boolean arrayIsArray(dynamic array) {
	dynamic {
		if (\iArray.isArray(array)) {
			return true;
		} else {
			return false;
		}
	}
}

shared class JSArray(dynamic n) extends JSArrayAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class JSArrayAbs() extends JSObjectAbs() {
    
    shared JSNumber getLength() {
        dynamic {
            return JSNumber(native.length);
        }
    }
    
    shared void setLength(Integer|JSNumber len) {
        switch (len)
        case (is Integer) {
            dynamic {
	            native.length = len;
	        }
        }
        case (is JSNumber) {
            dynamic {
                native.length = len.native;
            }
        }
    }
    
    doc("return type unknown")
    shared dynamic pop() {
        dynamic {
            return native.pop();
        }
    }
    
    shared JSNumber push(Anything* elements) {
        dynamic {
            return JSNumber(native.push.apply(null, elements));
        }
    }
    
    shared void reverse() {
        dynamic {
            native.reverse();
        }
    }
    
    doc("return type unknown")
    shared dynamic shift() {
        dynamic {
            return native.shift();
        }
    }
    
    shared JSArray sort() {
        dynamic {
            return JSArray(native.sort());
        }
    }
    
    shared JSArray sortCompare(Anything compare(dynamic a, dynamic b)) {
        dynamic {
            return JSArray(native.sort(compare));
        }
    }
    
    shared JSArray splice(Integer|JSNumber index, Integer|JSNumber howMany, Anything* elements) {
        switch (index)
        case (is Integer) {
            switch (howMany) 
            case (is Integer) {
                dynamic {
            		return JSArray(native.splice.apply(null, createArray(index, howMany).concat(elements).native));
        		}
            }
            case (is JSNumber) {
            	dynamic {
            		return JSArray(native.splice.apply(null, createArray(index, howMany.native).concat(elements).native));
        		}
          	}
        }
        case (is JSNumber) {
            switch (howMany) 
            case (is Integer) {
                dynamic {
            		return JSArray(native.splice.apply(null, createArray(index.native, howMany).concat(elements).native));
        		}
            }
            case (is JSNumber) {
            	dynamic {
            		return JSArray(native.splice.apply(null, createArray(index.native, howMany.native).concat(elements).native));
        		}
          	}
        }
        
    }
    
    shared JSNumber unshift(Anything* elements) {
        dynamic {
            return JSNumber(native.push.unshift(null, elements));
        }
    }
    
    shared JSArray concat(Anything* elementsOrArrays) {
        dynamic {
            return JSArray(native.concat.apply(null, elementsOrArrays));
        }
    }
    
    shared JSArray concatArrays(JSArray* arrays) {
        dynamic {
            return JSArray(native.concat.apply(null, arrays*.native));
        }
    }
    
    shared JSString join(String separator = ",") {
        dynamic {
            return JSString(native.join(sparator));
        }
    }
    
    shared JSArray slice(Integer|JSNumber begin, Integer|JSNumber? end = null) {
        switch (begin)
        case (is Integer) {
            switch (end)
            case (is Integer) {
                dynamic {
	            	return JSArray(native.slice(begin, end));
	        	}
        	}
        	case (is JSNumber) {
        		dynamic {
	            	return JSArray(native.slice(begin, end.native));
	        	}
        	}
        	case (is Null) {
	        	dynamic {
	            	return JSArray(native.slice(begin));
	        	}
        	}
    	}
    	case (is JSNumber) {
        	switch (end)
            case (is Integer) {
                dynamic {
	            	return JSArray(native.slice(begin.native, end));
	        	}
        	}
        	case (is JSNumber) {
        		dynamic {
	            	return JSArray(native.slice(begin.native, end.native));
	        	}
        	}
        	case (is Null) {
	        	dynamic {
	            	return JSArray(native.slice(begin.native));
	        	}
        	}
    	}
    }
    
    shared JSNumber indexOf(dynamic searchElement, Integer|JSNumber? fromIndex = null) {
        dynamic {
            return JSNumber(native.indexOf(searchElement, fromIndex));
        }
    }
    
    shared JSNumber lastIndexOf(dynamic searchElement, Integer|JSNumber? fromIndex = null) {
        switch (fromIndex)
        case (is Integer) {
	        dynamic {
	            return JSNumber(native.indexOf(searchElement, fromIndex));
	        }
    	}
    	case (is JSNumber) {
    		dynamic {
	            return JSNumber(native.indexOf(searchElement, fromIndex.native));
	        }
    	}
    	case (is Null) {
    		dynamic {
	            return JSNumber(native.indexOf(searchElement));
	        }
    	}
    }
    
    shared void forEach(void callback(dynamic val, Integer index, dynamic array), dynamic context = null) {
        dynamic {
            native.forEach(callback, context);
        }
    }
    
    shared Boolean every(Boolean callback(dynamic val, Integer index, dynamic array), dynamic context = null) {
        dynamic {
            if (native.every(callback, context)) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    shared Boolean some(Boolean callback(dynamic val, Integer index, dynamic array), dynamic context = null) {
        dynamic {
            if (native.some(callback, context)) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    shared JSArray filter(Boolean callback(dynamic val, Integer index, dynamic array), dynamic context = null) {
        dynamic {
            return JSArray(native.filter(callback, context));
        }
    }
    
    // TODO does callback need to have return type dynamic?
    shared JSArray map(Anything callback(dynamic val, Integer index, dynamic array), dynamic context = null) {
        dynamic {
            return JSArray(native.map(callback, context));
        }
    }
    
    // TODO does callback need to have return type dynamic?
    shared dynamic reduce(Anything callback(dynamic previousValue, dynamic currentValue, Integer index, dynamic array), dynamic initialValue = null) {
        dynamic {
            return JSArray(native.reduce(callback, initialValue));
        }
    }
    
    // TODO does callback need to have return type dynamic?
    shared dynamic reduceRight(Anything callback(dynamic previousValue, dynamic currentValue, Integer index, dynamic array), dynamic initialValue = null) {
        dynamic {
            return JSArray(native.reduceRight(callback, initialValue));
        }
    }
}