import com.openswimsoftware.ceylon.js.language { JSString, JSNumber, JSObjectAbs }

shared abstract class MediaListAbs() extends JSObjectAbs() {
    
    doc("serializes Media Queries")
    shared JSString getMediaText() {
        dynamic {
            return JSString(native.mediaText);
        }
    }
    
    doc("sets the media list to a string of Media Queries")
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
    
    doc("returns the number of Media Queries in the Collection")
    shared JSNumber length() {
        dynamic {
            return JSNumber(native.length);
        }
	}
	
	doc("returns Media Query at the specified index")
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
	
	doc("removes any media querys which match the passed query string")
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
	
	doc("appends the passed Media Query to the collection")
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

doc("Collection of Media Queries")
shared class MediaList(dynamic n) extends MediaListAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}
