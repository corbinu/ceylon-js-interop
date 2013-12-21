import com.openswimsoftware.ceylon.js.language { JSObjectAbs, JSNumber }

shared abstract class TweenAbs() extends JSObjectAbs() {
	
	doc("returns the tween interval")
	shared JSNumber getInterval() {
		dynamic {
			return JSNumber(native.interval);
		}
	}
	
	doc("sets the tween interval")
	shared void setInterval(Integer interval) {
		dynamic {
			native.interval = interval;
		}
	}
	
	doc("returns if the tween is off")
	shared Boolean getOff() {
		dynamic {
			if (native.off) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	doc("sets if the tween is off")
	shared void setOff(Boolean off) {
		dynamic {
			native.interval = interval;
		}
	}
}

doc("a jQuery animation tween")
shared class Tween(dynamic n) extends TweenAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}