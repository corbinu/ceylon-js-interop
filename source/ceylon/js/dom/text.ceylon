shared class CDATASection(dynamic n) extends Text(n) {}

shared class Text(dynamic n) extends CharacterData(n) {
	
    shared Text splitText(Integer offset) {
		dynamic {
			return Text(native.splitText(offset));
		}
	}
	
	doc("returns String")
    shared dynamic wholeText() {
		dynamic {
			return native.wholeText;
		}
	}
}