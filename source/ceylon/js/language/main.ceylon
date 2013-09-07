shared dynamic eval(String|JSString js) {
	dynamic {
		return eval(js);
	}
}

shared Boolean isFinite(JSNumber num) {
	dynamic {
		if (isFinite(num.native)) {
			return true;
		} else {
			return false;
		}
	}
}

shared Boolean isNaN(dynamic val) {
	dynamic {
		if (isNaN(val)) {
			return true;
		} else {
			return false;
		}
	}
}

shared JSNumber parseInt(String|JSString int, Integer|JSNumber radix = 10) {
	switch (radix) 
	case (is Integer) {
		dynamic {
			return JSNumber(parseInt(int, radix));
		}
	}
	case (is JSNumber) {
		dynamic {
			return JSNumber(parseInt(int, radix.native));
		}
	}
}

shared JSNumber parseFloat(String|JSString float) {
	switch (float) 
	case (is String) {
		dynamic {
			return JSNumber(parseFloat(float));
		}
	}
	case (is JSString) {
		dynamic {
			return JSNumber(parseFloat(float.native));
		}
	}
}