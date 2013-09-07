
shared abstract class RegExpFlag(String name) of global | ignore | multiple {}

shared object global extends RegExpFlag("g") {}
shared object ignore extends RegExpFlag("i") {}
shared object multiple extends RegExpFlag("m") {}

shared RegExp createJSRegExp(String|JSString pattern, RegExpFlag* flags) {
	switch (pattern)
	case (is String) {
		dynamic {
			return RegExp(\iRegExp(pattern, flags*.string));
		}
	}
	case (is JSString) {
		dynamic {
			return RegExp(\iRegExp(pattern.native, flags*.string));
		}
	}
}

shared class RegExp(shared dynamic native) {
	
	shared class RegResult(dynamic n) extends JSArray(n) {
		
		shared JSString input() {
			dynamic {
				return JSString(native.input);
			}
		}
		
		shared JSNumber index() {
			dynamic {
				return JSNumber(native.index);
			}
		}
		
	}
	
	shared Boolean global() {
		dynamic {
			if (native.global) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared Boolean ignoreCase() {
		dynamic {
			if (native.ignoreCase) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared JSNumber getLastindex() {
		dynamic {
			return JSNumber(native.lastindex);
		}
	}
	
	shared void setLastindex(Integer|JSNumber index) {
		switch (index)
		case (is Integer) {
			dynamic {
				native.lastindex = index;
			}
		}
		case (is JSNumber) {
			dynamic {
				native.lastindex = index.native;
			}
		}
	}
	
	shared JSNumber multiline() {
		dynamic {
			return JSNumber(native.multiline);
		}
	}
	
	shared JSString source() {
		dynamic {
			return JSString(native.source);
		}
	}
	
	shared JSString exec(String str) {
		dynamic {
			return JSString(native.exec(str));
		}
	}
	
	shared Boolean test(String|JSString str = "undefined") {
		dynamic result;
		switch (str) 
		case (is String) {
			dynamic {
				result = native.test(str);
			}
		}
		case (is JSString) {
			dynamic {
				result = native.test(str.native);
			}
		}
		dynamic {
			if (result) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared JSString toString() {
		dynamic {
			return JSString(native.toString());
		}
	}
	
}