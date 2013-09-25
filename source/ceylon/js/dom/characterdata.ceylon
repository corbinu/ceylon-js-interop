import ceylon.js.language { JSString, JSNumber }

shared abstract class CommentAbs() extends CharacterDataAbs() {}

shared class Comment(dynamic n) extends CommentAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}

shared abstract class CharacterDataAbs() extends NodeAbs() {
	
    shared JSString getData() {
		dynamic {
			return JSString(native.data);
		}
	}
	
	shared void setData(String|JSString data) {
		switch (data)
		case (is String) {
			dynamic {
				native.data = data;
			}
		}
		case (is JSString) {
			dynamic {
				native.data = data.native;
			}
		}
		
	}
	
    shared JSNumber length() {
		dynamic {
			return JSNumber(native.length);
		}
	}
	
    shared JSString substringData(Integer|JSNumber offset, Integer|JSNumber count) {
		switch (offset) 
		case (is Integer) {
			switch (count) 
			case (is Integer) {
				dynamic {
					return JSString(native.substringData(offset, count));
				}
			}
			case (is JSNumber) {
				dynamic {
					return JSString(native.substringData(offset, count.native));
				}
			}
		}
		case (is JSNumber) {
			switch (count) 
			case (is Integer) {
				dynamic {
					return JSString(native.substringData(offset.native, count));
				}
			}
			case (is JSNumber) {
				dynamic {
					return JSString(native.substringData(offset.native, count.native));
				}
			}
		}
	}
	
	shared void appendData(String|JSString data) {
		switch (data)
		case (is String) {
			dynamic {
				native.appendData(data);
			}
		}
		case (is JSString) {
			dynamic {
				native.appendData(data.native);
			}
		}
	}
	
    shared void insertData(Integer|JSNumber offset, String|JSString data) {
		switch (offset)
		case (is Integer) {
			switch (data)
			case (is String) {
				dynamic {
					native.insertData(offset, data);
				}
			}
			case (is JSString) {
				dynamic {
					native.insertData(offset, data.native);
				}
			}
		}
		case (is JSNumber) {
			switch (data)
			case (is String) {
				dynamic {
					native.insertData(offset.native, data);
				}
			}
			case (is JSString) {
				dynamic {
					native.insertData(offset.native, data.native);
				}
			}
		}
	}
	
    shared void deleteData(Integer|JSNumber offset, Integer|JSNumber count) {
		switch (offset)
		case (is Integer) {
			switch (count)
			case (is Integer) {
				dynamic {
					native.deleteData(offset, count);
				}
			}
			case (is JSNumber) {
				dynamic {
					native.deleteData(offset, count.native);
				}
			}
		}
		case (is JSNumber) {
			switch (count)
			case (is Integer) {
				dynamic {
					native.deleteData(offset.native, count);
				}
			}
			case (is JSNumber) {
				dynamic {
					native.deleteData(offset.native, count.native);
				}
			}
		}
	}
	
    shared void replaceData(Integer|JSNumber offset, Integer|JSNumber count, String|JSString data) {
		switch (offset)
		case (is Integer) {
			switch (count)
			case (is Integer) {
				switch (data)
				case (is String) {
					dynamic {
						native.replaceData(offset, count, data);
					}
				}
				case (is JSString) {
					dynamic {
						native.replaceData(offset, count, data.native);
					}
				}
			}
			case (is JSNumber) {
				switch (data)
				case (is String) {
					dynamic {
						native.replaceData(offset, count.native, data);
					}
				}
				case (is JSString) {
					dynamic {
						native.replaceData(offset, count.native, data.native);
					}
				}
			}
		}
		case (is JSNumber) {
			switch (count)
			case (is Integer) {
				switch (data)
				case (is String) {
					dynamic {
						native.replaceData(offset.native, count, data);
					}
				}
				case (is JSString) {
					dynamic {
						native.replaceData(offset.native, count, data.native);
					}
				}
			}
			case (is JSNumber) {
				switch (data)
				case (is String) {
					dynamic {
						native.replaceData(offset.native, count.native, data);
					}
				}
				case (is JSString) {
					dynamic {
						native.replaceData(offset.native, count.native, data.native);
					}
				}
			}
		}
	}
}

shared class CharacterData(dynamic n) extends CharacterDataAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}