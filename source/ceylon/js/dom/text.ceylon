import ceylon.js.language { JSNumber, JSString }

shared abstract class CDATASectionAbs() extends TextAbs() {}

shared class CDATASection(dynamic n) extends CDATASectionAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class TextAbs() extends CharacterDataAbs() {
	
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

shared class Text(dynamic n) extends TextAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}