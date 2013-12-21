import com.openswimsoftware.ceylon.js.language { JSNumber, JSObjectAbs, JSFunction }

doc("returns natural log")
shared JSNumber mathE() {
	dynamic {
		return JSNumber(\iMath.\iE);
	}
}

doc("returns log of 2")
shared JSNumber mathLog2() {
	dynamic {
		return JSNumber(\iMath.\iLN2);
	}
}

doc("returns log of 10")
shared JSNumber mathLog10() {
	dynamic {
		return JSNumber(\iMath.\iLN10);
	}
}

doc("returns natural log of 2")
shared JSNumber mathLog2e() {
	dynamic {
		return JSNumber(\iMath.\iLOG2E);
	}
}

doc("returns natural log of 10")
shared JSNumber mathLog10e() {
	dynamic {
		return JSNumber(\iMath.\iLOG10E);
	}
}

doc("returns pi")
shared JSNumber mathPi() {
	dynamic {
		return JSNumber(\iMath.\iPI);
	}
}

doc("returns square root of 1/2")
shared JSNumber mathRoot1_2() {
	dynamic {
		return JSNumber(\iMath.\iSQRT1_2);
	}
}

doc("returns square root of 2")
shared JSNumber mathRoot2() {
	dynamic {
		return JSNumber(\iMath.\iSQRT2);
	}
}

shared abstract class MathAbs() extends JSObjectAbs() {
    
    doc("returns the absolute value of a number")
	shared JSNumber abs(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.abs(x.native));
		}
	}
	
	doc("returns the arccosine value of a number")
	shared JSNumber acos(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.acos(x.native));
		}
	}
    
    doc("returns the arcsine value of a number")
	shared JSNumber asin(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.asin(x.native));
		}
	}
    
    doc("returns the arctangent value of a number")
	shared JSNumber atan(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.asin(x.native));
		}
	}

	doc("returns the arctangent of the quotient of y/x")
	shared JSNumber atan2(JSNumber y, JSNumber x) {
		dynamic {
			return JSNumber(\iMath.atan2(y.native, x.native));
		}
	}
    
    doc("returns ceiling of the passed number")
	shared JSNumber ceil(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.ceil(x.native));
		}
	}
    
    doc("returns the cosine of a number")
	shared JSNumber cos(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.cos(x.native));
		}
	}
    
    doc("returns the E^x")
	shared JSNumber exp(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.exp(x.native));
		}
	}
    
    doc("returns floor of the passed number")
	shared JSNumber floor(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.floor(x.native));
		}
	}
    
    doc("returns log of the number")
	shared JSNumber log(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.log(x.native));
		}
	}
    
    doc("returns the max of the passed numbers")
	shared JSNumber max(JSNumber* numbers) {
		dynamic {
			// TODO switch 
			return JSNumber(JSFunction(\iMath.max).apply(null, numbers*.native));
		}
	}
	
	doc("returns the min of the passed numbers")
	shared JSNumber min(JSNumber* numbers) {
		dynamic {
			// TODO this should be calling applyJS but JSObject is not a super type of JSNumber
			return JSNumber(JSFunction(\iMath.min).apply(null, numbers*.native));
		}
	}
	
	doc("returns the base^exponent")
	shared JSNumber pow(JSNumber base, JSNumber exponent) {
		dynamic {
			return JSNumber(\iMath.pow(base, exponent));
		}
	}
	
	doc("returns a pseudo-random number between 0 and 1")
	shared JSNumber random() {
		dynamic {
			return JSNumber(\iMath.random());
		}
	}
	
	doc("returns a number rounded to the nearest integer")
	shared JSNumber round(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.round(x));
		}
	}
	
	doc("returns the sine of a number")
	shared JSNumber sin(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.sin(x));
		}
	}
	
	doc("returns the square root of a number")
	shared JSNumber sqrt(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.sqrt(x));
		}
	}
	
	doc("returns the tangent a number")
	shared JSNumber tan(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.tan(x));
		}
	}
}

doc("native Math")
shared class Math(dynamic n) extends MathAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}