shared JSNumber createJSNumber(Integer|Float|String val) {
	dynamic {
		return JSNumber(\iNumber(val));
	}
}

shared JSNumber numberMaxValue() {
	dynamic {
		return JSNumber(\iNumber.\iMAX_VALUE);
	}
}

shared JSNumber numberMinValue() {
	dynamic {
		return JSNumber(\iNumber.\iMIN_VALUE);
	}
}

shared JSNumber numberNegativeInfinity() {
	dynamic {
		return JSNumber(\iNumber.\iNEGATIVE_INFINITY);
	}
}

shared JSNumber numberPositiveInfinity() {
	dynamic {
		return JSNumber(\iNumber.\iPOSITIVE_INFINITY);
	}
}

shared class JSNumber(dynamic n) {
	
	shared dynamic native;
    dynamic {
        native = n;
    }
    
    shared JSString toExponential(Integer|JSNumber? fractionDigits = null) {
        switch (fractionDigits)
        case (is Integer) {
	        dynamic {
	            return JSString(native.toExponential(fractionDigits));
	        }
        }
        case (is JSNumber) {
	        dynamic {
	            return JSString(native.toExponential(fractionDigits.native));
	        }
        }
        case (is Null) {
            dynamic {
	            return JSString(native.toExponential());
	        }
    	}
    }
    
    shared JSString toFixed(Integer|JSNumber digits = 0) {
        switch (digits)
        case (is Integer) {
            dynamic {
	            return JSString(native.toFixed(digits));
	        }
        }
        case (is JSNumber) {
            dynamic {
	            return JSString(native.toFixed(digits.native));
	        }
        }
    }
    
    shared JSString toPrecision(Integer|JSNumber? precision = null) {
        switch (precision)
        case (is Integer) {
	        dynamic {
	            return JSString(native.toPrecision(precision));
	        }
        }
        case (is JSNumber) {
	        dynamic {
	            return JSString(native.toPrecision(precision.native));
	        }
        }
        case (is Null) {
            dynamic {
	            return JSString(native.toPrecision());
	        }
    	}
	}
}