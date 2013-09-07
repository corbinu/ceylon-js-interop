doc("returns JSON")
shared dynamic jsonParse(String text) {
	dynamic {
		return \iJSON.parse(text);
	}
}

doc("returns JSON")
shared dynamic jsonParseCallback(String text, Anything callback(dynamic key, dynamic val)) {
	dynamic {
		return \iJSON.parse(text, callback);
	}
}

doc("returns String")
shared dynamic jsonStringify(dynamic val, String|Number? space = null) {
	dynamic {
		return \iJSON.stringify(val, null, space);
	}
}

doc("returns String")
shared dynamic jsonStringifyReplacer(dynamic val, Anything replacer(dynamic key, dynamic val), String|Number? space = null) {
	dynamic {
		return \iJSON.stringify(val, replacer, space);
	}
}

// TODO add Ceylon to JS JSON conversions from photo gallery
// TODO create a syntax for declaring a JSON object format