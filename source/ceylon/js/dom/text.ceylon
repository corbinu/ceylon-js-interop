import ceylon.js.language { JSNumber, JSString }

shared class CDATASection(dynamic n) extends Text(n) {}

shared class Text(dynamic n) extends CharacterData(n) {
	
    shared Text splitText(Integer|JSNumber offset) {
		switch (offset)
		case (is Integer) {
			dynamic {
				return Text(native.splitText(offset));
			}
		}
		case (is JSNumber) {
			dynamic {
				return Text(native.splitText(offset.native));
			}
		}
	}
	
    shared JSString wholeText() {
		dynamic {
			return JSString(native.wholeText);
		}
	}
}