import com.openswimsoftware.ceylon.js.language { JSString, JSNumber, JSFunction, JSObjectAbs, native }
doc("crate a new native array")
shared JSArray createJSArray(dynamic arg) {
	dynamic {
		return JSArray(\iArray(arg));
	}
}

doc("is the passed value a native array")
shared Boolean arrayIsArray(dynamic array) {
	dynamic {
		if (\iArray.isArray(array)) {
			return true;
		} else {
			return false;
		}
	}
}

shared abstract class JSArrayAbs() extends JSObjectAbs() {
    
    doc("returns the length of the array")
    shared JSNumber getLength() {
        dynamic {
            return JSNumber(native.length);
        }
    }
    
    doc("set the length of the array")
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
    
    doc("returns and remove the last element in the array")
    shared dynamic pop() {
        dynamic {
            return native.pop();
        }
    }
    
    doc("returns length after adding one or more elements to the array")
    shared JSNumber push(dynamic elements) {
        dynamic {
            // TODO spread element
            return JSNumber(native.push(elements));
        }
    }
    
    doc("reverse the order of the elements in the array")
    shared void reverse() {
        dynamic {
            native.reverse();
        }
    }
    
    doc("returns and remove the first element in the array")
    shared dynamic shift() {
        dynamic {
            return native.shift();
        }
    }
    
    doc("sort the items in lexicographic order")
    shared JSArray sort() {
        dynamic {
            return JSArray(native.sort());
        }
    }
    
    doc("sort the items using the compare function")
    shared JSArray sortCompare(Anything compare(dynamic a, dynamic b)) {
        dynamic {
            return JSArray(native.sort(compare));
        }
    }
    
    doc("returns an array of removed elements after it adds new elements while removing old ones")
    shared JSArray splice(Integer|JSNumber index, Integer|JSNumber howMany, Anything* elements) {
        switch (index)
        case (is Integer) {
            switch (howMany) 
            case (is Integer) {
                dynamic {
                    // TODO this should be calling applyJS but JSObject is not a super type of JSArray
            		return JSArray(JSFunction(native.splice).apply(null, createArray(index, howMany).concat(elements).native));
        		}
            }
            case (is JSNumber) {
            	dynamic {
            		return JSArray(JSFunction(native.splice).apply(null, createArray(index, howMany.native).concat(elements).native));
        		}
          	}
        }
        case (is JSNumber) {
            switch (howMany) 
            case (is Integer) {
                dynamic {
                    return JSArray(JSFunction(native.splice).apply(null, createArray(index.native, howMany).concat(elements).native));
        		}
            }
            case (is JSNumber) {
            	dynamic {
            		return JSArray(JSFunction(native.splice).apply(null, createArray(index.native, howMany.native).concat(elements).native));
        		}
          	}
        }
        
    }
    
    doc("returns length after adding elements to the front of the array")
    shared JSNumber unshift(dynamic elements) {
        dynamic {
            // TODO spread the elements
            return JSNumber(native.push.unshift(null, elements));
        }
    }
    
    doc("returns array after appending the elements")
    shared JSArray concat(dynamic elements) {
        dynamic {
            // TODO spread elements
            return JSArray(native.concat(elements));
        }
    }
	    
    doc("returns array after combining it with the passed arrays")
    shared JSArray concatArrays(JSArray* arrays) {
        dynamic {
            // TODO spread native arrays
            return JSArray(native.concat(arrays*.native));
        }
    }
    
    doc("returns a string after joining all elements with separator")
    shared JSString join(String separator = ",") {
        dynamic {
            return JSString(native.join(sparator));
        }
    }
    
    doc("returns shallow copy of portion of the array")
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
    
    doc("returns the first index of the element in the array or -1")
    shared JSNumber indexOf(dynamic searchElement, Integer|JSNumber? fromIndex = null) {
        dynamic {
            return JSNumber(native.indexOf(searchElement, fromIndex));
        }
    }
    
    doc("returns the last index of the element in the array or -1")
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
    
    doc("executes the callback for each element in the array")
    shared void forEach(void callback(dynamic val, Integer index, dynamic array), dynamic context = null) {
        dynamic {
            native.forEach(callback, context);
        }
    }
    
    doc("tests if all elements in the array pass the callback test")
    shared Boolean every(Boolean callback(dynamic val, Integer index, dynamic array), dynamic context = null) {
        dynamic {
            if (native.every(callback, context)) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    doc("tests if some elements in the array pass the callback test")
    shared Boolean some(Boolean callback(dynamic val, Integer index, dynamic array), dynamic context = null) {
        dynamic {
            if (native.some(callback, context)) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    doc("returns an array of elements which pass the callback test")
    shared JSArray filter(Boolean callback(dynamic val, Integer index, dynamic array), dynamic context = null) {
        dynamic {
            return JSArray(native.filter(callback, context));
        }
    }
    
    // TODO does callback need to have return type dynamic?
    doc("returns an array of the elements returned from the callback")
    shared JSArray map(Anything callback(dynamic val, Integer index, dynamic array), dynamic context = null) {
        dynamic {
            return JSArray(native.map(callback, context));
        }
    }
    
    // TODO does callback need to have return type dynamic?
    doc("returns a single value after looping over the array left to right combining two values each time")
    shared dynamic reduce(Anything callback(dynamic previousValue, dynamic currentValue, Integer index, dynamic array), dynamic initialValue = null) {
        dynamic {
            return JSArray(native.reduce(callback, initialValue));
        }
    }
    
    // TODO does callback need to have return type dynamic?
    doc("returns a single value after looping over the array right to left combining two values each time")
    shared dynamic reduceRight(Anything callback(dynamic previousValue, dynamic currentValue, Integer index, dynamic array), dynamic initialValue = null) {
        dynamic {
            return JSArray(native.reduceRight(callback, initialValue));
        }
    }
}

doc("native Array")
shared class JSArray(dynamic n) extends JSArrayAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}