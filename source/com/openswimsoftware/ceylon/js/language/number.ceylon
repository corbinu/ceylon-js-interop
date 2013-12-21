doc("creates a new native number")
shared JSNumber createJSNumber(Integer|Float|String val) {
	dynamic {
		return JSNumber(\iNumber(val));
	}
}

doc("returns the max possible number")
shared JSNumber numberMaxValue() {
	dynamic {
		return JSNumber(\iNumber.\iMAX_VALUE);
	}
}

doc("returns the min possible number")
shared JSNumber numberMinValue() {
	dynamic {
		return JSNumber(\iNumber.\iMIN_VALUE);
	}
}

doc("returns negative infinity")
shared JSNumber numberNegativeInfinity() {
	dynamic {
		return JSNumber(\iNumber.\iNEGATIVE_INFINITY);
	}
}

doc("returns positive infinity")
shared JSNumber numberPositiveInfinity() {
	dynamic {
		return JSNumber(\iNumber.\iPOSITIVE_INFINITY);
	}
}

shared abstract class JSNumberAbs() extends JSObjectAbs() {
    
    doc("returns a string representing the number in exponential notation")
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
    
    doc("returns a string representing the number in fixed-point notation")
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
    
    doc("returns a string representing the number in a specified precision in fixed-point or exponential notation")
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

doc("native Number")
shared class JSNumber(dynamic n) extends JSNumberAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}