import ceylon.js.language { JSObjectAbs, JSNumber }

shared class Tween(dynamic n) extends TweenAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class TweenAbs() extends JSObjectAbs() {
	
	shared JSNumber getInterval() {
		dynamic {
			return JSNumber(native.interval);
		}
	}
	
	shared void test(Anything* test) {
		
	}
	
	shared void setInterval(Integer interval) {
		dynamic {
			native.interval = interval;
		}
	}
	
	shared Boolean getOff() {
		dynamic {
			if (native.off) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared void setOff(Boolean off) {
		dynamic {
			native.interval = interval;
		}
	}
}