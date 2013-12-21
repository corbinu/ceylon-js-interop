import com.openswimsoftware.ceylon.js.language { JSNumber, JSString }

shared abstract class CDATASectionAbs() extends TextAbs() {}

doc("a DOM CDATASection")
shared class CDATASection(dynamic n) extends CDATASectionAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class TextAbs() extends CharacterDataAbs() {
	
	doc("split the node in two at the offset")
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
	
	doc("get the Text node as a String")
    shared JSString wholeText() {
		dynamic {
			return JSString(native.wholeText);
		}
	}
}

doc("a DOM Text element")
shared class Text(dynamic n) extends TextAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}