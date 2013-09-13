import ceylon.js.language { JSString, JSNumber, JSObjectAbs }

shared class MediaList(dynamic n) extends MediaListAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class MediaListAbs() extends JSObjectAbs() {
    
    shared JSString getMediaText() {
        dynamic {
            return JSString(native.mediaText);
        }
    }
    
    shared void setMediaText(String|JSString text) {
        switch (text)
        case (is String) {
	        dynamic {
	            native.mediaText = text;
	        }
        }
        case (is JSString) {
	        dynamic {
	            native.mediaText = text.native;
	        }
        }
    }
    
    shared JSNumber length() {
        dynamic {
            return JSNumber(native.length);
        }
	}
	
	shared JSString item(Integer|JSNumber index) {
		switch(index)
		case (is Integer) {
			dynamic {
				return JSString(native.item(index));
			}
		}
		case (is JSNumber) {
			dynamic {
				return JSString(native.item(index.native));
			}
		}
	}
	
	shared void deleteMedium(String|JSString oldMedium) {
		switch (oldMedium)
		case (is String) {
			dynamic {
				native.deleteMedium(oldMedium);
			}
		}
		case (is JSString) {
			dynamic {
				native.deleteMedium(oldMedium.native);
			}
		}
	}
	
	shared void appendMedium(String|JSString newMedium) {
		switch (newMedium)
		case (is String) {
			dynamic {
				native.appendMedium(newMedium);
			}
		}
		case (is JSString) {
			dynamic {
				native.appendMedium(newMedium.native);
			}
		}
	}
    
}