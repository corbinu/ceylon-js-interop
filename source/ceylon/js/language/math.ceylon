shared JSNumber mathE() {
	dynamic {
		return JSNumber(\iMath.\iE);
	}
}

shared JSNumber mathLog2() {
	dynamic {
		return JSNumber(\iMath.\iLN2);
	}
}

shared JSNumber mathLog10() {
	dynamic {
		return JSNumber(\iMath.\iLN10);
	}
}

shared JSNumber mathLog2e() {
	dynamic {
		return JSNumber(\iMath.\iLOG2E);
	}
}

shared JSNumber mathLog10e() {
	dynamic {
		return JSNumber(\iMath.\iLOG10E);
	}
}

shared JSNumber mathPi() {
	dynamic {
		return JSNumber(\iMath.\iPI);
	}
}

shared JSNumber mathRoot1_2() {
	dynamic {
		return JSNumber(\iMath.\iSQRT1_2);
	}
}

shared JSNumber mathRoot2() {
	dynamic {
		return JSNumber(\iMath.\iSQRT2);
	}
}

shared class Math(dynamic n) {
	shared dynamic native;
    dynamic {
        native = n;
    }
    
	shared JSNumber abs(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.abs(x.native));
		}
	}
    
	shared JSNumber asin(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.asin(x.native));
		}
	}
    
	shared JSNumber atan(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.asin(x.native));
		}
	}
    
	shared JSNumber atan2(JSNumber y, JSNumber x) {
		dynamic {
			return JSNumber(\iMath.atan2(y.native, x.native));
		}
	}
    
	shared JSNumber ceil(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.ceil(x.native));
		}
	}
    
	shared JSNumber cos(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.cos(x.native));
		}
	}
    
	shared JSNumber exp(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.exp(x.native));
		}
	}
    
	shared JSNumber floor(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.floor(x.native));
		}
	}
    
	shared JSNumber log(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.log(x.native));
		}
	}
    
	shared JSNumber max(JSNumber* numbers) {
		dynamic {
			return JSNumber(\iMath.max.apply(null, numbers*.native));
		}
	}
	
	shared JSNumber min(JSNumber* numbers) {
		dynamic {
			return JSNumber(\iMath.min.apply(null, numbers*.native));
		}
	}
	
	shared JSNumber pow(JSNumber base, JSNumber exponent) {
		dynamic {
			return JSNumber(\iMath.pow(base, exponent));
		}
	}
	
	shared JSNumber random() {
		dynamic {
			return JSNumber(\iMath.random());
		}
	}
	
	shared JSNumber round(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.round(x));
		}
	}
	
	shared JSNumber sin(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.sin(x));
		}
	}
	
	shared JSNumber sqrt(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.sqrt(x));
		}
	}
	
	shared JSNumber tan(JSNumber x) {
		dynamic {
			return JSNumber(\iMath.tan(x));
		}
	}
}