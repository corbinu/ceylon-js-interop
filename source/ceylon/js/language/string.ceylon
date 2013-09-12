shared JSString createJSString(dynamic string) {
	dynamic {
		return JSString(\iString(string));
	}
}

shared class JSString(dynamic n) extends JSObject(n) {
    
    shared JSNumber length() {
        dynamic {
            return JSNumber(native.length);
        }
    }
    
    shared JSString charAt(Integer|JSNumber index) {
        switch (index) 
		case (is Integer) {
			dynamic {
				return JSString(native.charAt(index));
			}
		}
		case (is JSNumber) {
			dynamic {
				return JSString(native.charAt(index.native));
			}
		}
    }
    
    shared JSNumber charCodeAt(Integer|JSNumber index) {
        switch (index) 
		case (is Integer) {
			dynamic {
				return JSNumber(native.charCodeAt(index));
			}
		}
		case (is JSNumber) {
			dynamic {
				return JSNumber(native.charCodeAt(index.native));
			}
		}
    }
    
    shared JSString concat(JSString+ strings) {
        dynamic {
            return JSString(native.concat.apply(null, strings));
        }
    }
    
    shared JSNumber indexOf(String|JSString searchValue, Integer|JSNumber fromIndex = 0) {
        switch (searchValue) 
        case (is String) {
            switch (fromIndex) 
	        case (is Integer) {
                dynamic {
	        		return JSNumber(native.indexOf(searchValue, fromIndex));
	        	}
	        }
	        case (is JSNumber) {
	            dynamic {
	        		return JSNumber(native.indexOf(searchValue, fromIndex.native));
	        	}
	        }
        }
        case (is JSString) {
            switch (fromIndex) 
	        case (is Integer) {
	            dynamic {
	        		return JSNumber(native.indexOf(searchValue.native, fromIndex));
	        	}
	        }
	        case (is JSNumber) {
	            dynamic {
	        		return JSNumber(native.indexOf(searchValue.native, fromIndex.native));
	        	}
	        }
        }
    }
    
    shared JSNumber lastIndexOf(String|JSString searchValue, Integer|JSNumber fromIndex = 0) {
        switch (searchValue) 
        case (is String) {
            switch (fromIndex) 
	        case (is Integer) {
                dynamic {
	        		return JSNumber(native.lastIndexOf(searchValue, fromIndex));
	        	}
	        }
	        case (is JSNumber) {
	            dynamic {
	        		return JSNumber(native.lastIndexOf(searchValue, fromIndex.native));
	        	}
	        }
        }
        case (is JSString) {
            switch (fromIndex) 
	        case (is Integer) {
	            dynamic {
	        		return JSNumber(native.lastIndexOf(searchValue.native, fromIndex));
	        	}
	        }
	        case (is JSNumber) {
	            dynamic {
	        		return JSNumber(native.lastIndexOf(searchValue.native, fromIndex.native));
	        	}
	        }
        }
    }
    
    shared RegExp.RegResult match(RegExp regexp) {
        dynamic {
        	return RegExp.RegResult(native.match(regexp.native));
    	}
    }
    
    shared JSString replace(String|JSString|RegExp pattern, String|JSString replace) {
		switch (pattern) 
		case (is String) {
            switch (replace) 
			case (is String) {
	            dynamic {
	            	return JSString(native.replace(pattern, replace));
	            }
			}
			case (is JSString) {
	            dynamic {
	            	return JSString(native.replace(pattern, replace.native));
	            } 
			}
		}
		case (is JSString|RegExp) {
			switch (replace) 
			case (is String) {
	        	dynamic {
	            	return JSString(native.replace(pattern.native, replace));
	            }
			}
			case (is JSString) {
	             dynamic {
	                 return JSString(native.replace(pattern.native, replace.native));
	            }   
			}  
		}
    }
    
    doc("replace will recived a set of substrings based on the regex then an Integer for offset, and the examined String")
    shared JSString replaceCallback(String|JSString|RegExp pattern, JSString replace(String match, dynamic* psOffsetExamined)) {
		switch (pattern) 
		case (is String) {
            dynamic {
                return JSString(native.replace(pattern, replace));
            }
		}
		case (is JSString|RegExp) {
			dynamic {
				return JSString(native.replace(pattern.native, replace));
			}
		}
    }
    
    shared JSNumber search(RegExp regexp) {
		dynamic {
			return JSNumber(native.search(regexp.native));
		}
    }
    
    shared JSString slice(Integer|JSNumber beginSlice, Integer|JSNumber? endSlice = null) {
		switch (beginSlice)
		case (is Integer) {
			switch (endSlice)
			case (is Integer) {
				dynamic {
					return JString(native.slice(beginSlice, endSlice));
				}
			}
			case (is JSNumber) {
				dynamic {
					return JString(native.slice(beginSlice, endSlice.native));
				}
			}
			case (is Null) {
				dynamic {
					return JString(native.slice(beginSlice));
				}
			}
		}
		case (is JSNumber) {
			switch (endSlice)
			case (is Integer) {
				dynamic {
					return JString(native.slice(beginSlice.native, endSlice));
				}
			}
			case (is JSNumber) {
				dynamic {
					return JString(native.slice(beginSlice.native, endSlice.native));
				}
			}
			case (is Null) {
				dynamic {
					return JString(native.slice(beginSlice.native));
				}
			}	
		}
    }
    
    doc("returns array of strings")
    shared JSArray split(String|JSString|RegExp? separator = null, Integer|JSNumber? limit = null) {
        switch (separator)
        case (is String) {
            switch (limit) 
            case (is Integer) {
                dynamic {
                	return JSArray(native.split(separator, limit));
            	}
            }
            case (is JSNumber) {
                dynamic {
                	return JSArray(native.split(separator, limit.native));
            	}
            }
            case (is Null) {
                dynamic {
                	return JSArray(native.split(separator));
            	}
        	}
        }
        case (is JSString|RegExp) {
            switch (limit) 
            case (is Integer) {
                dynamic {
                	return JSArray(native.split(separator.native, limit));
            	}
            }
            case (is JSNumber) {
                dynamic {
                	return JSArray(native.split(separator.native, limit.native));
            	}
            }
            case (is Null) {
                dynamic {
                	return JSArray(native.split(separator));
            	}
        	}
        }
        case (is Null) {
            dynamic {
            	return JSArray(native.split());
        	}
        }
    }
    
    shared JSString substr(Integer|JSNumber start, Integer|JSNumber? length = null) {
        switch (start)
        case (is Integer) {
            switch (length)
	        case (is Integer) {
                dynamic {
	            	return JSString(native.substr(start, length));
	        	}
	    	}
	    	case (is JSNumber) {
	    		dynamic {
	    			return JSString(native.substr(start, length.native));
	        	}
	    	}
	    	case (is Null) {
	    		dynamic {
	    			return JSString(native.substr(start));
	        	}
	    	}
    	}
    	case (is JSNumber) {
    		switch (length)
	        case (is Integer) {
    			dynamic {
	            	return JSString(native.substr(start.native, length));
	        	}
	    	}
	    	case (is JSNumber) {
	    		dynamic {
	    			return JSString(native.substr(start.native, length.native));
	        	}
	    	}
	    	case (is Null) {
	    		dynamic {
	    			return JSString(native.substr(start.native));
	        	}
	    	}
    	}
    }
    
    shared JSString substring(Integer|JSNumber indexA, Integer|JSNumber? indexB = null) {
        switch (indexA)
        case (is Integer) {
            switch (indexB)
	        case (is Integer) {
                dynamic {
	            	return JSString(native.substring(indexA, indexB));
	        	}
	    	}
	    	case (is JSNumber) {
	    		dynamic {
	    			return JSString(native.substring(indexA, indexB.native));
	        	}
	    	}
	    	case (is Null) {
	    		dynamic {
	    			return JSString(native.substring(indexA));
	        	}
	    	}
    	}
    	case (is JSNumber) {
    		switch (indexB)
	        case (is Integer) {
    			dynamic {
	            	return JSString(native.substring(indexA.native, indexB));
	        	}
	    	}
	    	case (is JSNumber) {
	    		dynamic {
	    			return JSString(native.substring(indexA.native, indexB.native));
	        	}
	    	}
	    	case (is Null) {
	    		dynamic {
	    			return JSString(native.substring(indexA.native));
	        	}
	    	}
    	}
	}
	
	shared JSString toLowerCase() {
		dynamic {
			return JSString(native.toLowerCase());
		}
	}
	
	shared JSString toUpperCase() {
		dynamic {
			return JSString(native.toUpperCase());
		}
	}
	
	shared JSString trim() {
		dynamic {
			return JSString(native.trim());
		}
	}
	
}