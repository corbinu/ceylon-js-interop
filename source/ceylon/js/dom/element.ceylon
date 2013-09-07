import ceylon.js.language { JSString }

shared class Element(shared dynamic n) extends Node(n) {
	
    shared JSString? getAttribute(String|JSString attributeName) {
		dynamic attr;
		switch (attributeName) 
		case (is String) {
			dynamic {
				attr = native.getAttribute(attributeName);
			}
		}
		case (is JSString) {
			dynamic {
				attr = native.getAttribute(attributeName.native);
			}
		}
		dynamic {
			if (attr != \inull || attr != "") {
				return JSString(attr);
			} else {
				return null;
			}
		}
	}
	
    shared JSString? getAttributeNS(String|JSString namespace, String|JSString attributeName) {
		dynamic attr;
		switch (namespace)
		case (is String) {
			switch (attributeName)
			case (is String) {
				dynamic {
					attr = native.getAttributeNS(namespace, attributeName);
				}
			}
			case (is JSString) {
				dynamic {
					attr = native.getAttributeNS(namespace, attributeName.native);
				}
			}
		}
		case (is JSString) {
			switch (attributeName)
			case (is String) {
				dynamic {
					attr = native.getAttributeNS(namespace.native, attributeName);
				}
			}
			case (is JSString) {
				dynamic {
					attr = native.getAttributeNS(namespace.native, attributeName.native);
				}
			}
		}
		dynamic {
			if (attr != \inull || attr != "") {
				return JSString(attr);
			} else {
				return null;
			}
		}
	}
	
    shared HTMLCollection getElementsByTagName(String|JSString tagName = "*") {
		switch (tagName)
		case (is String) {
			dynamic {
				return HTMLCollection(native.getElementsByTagName(tagName));
			}
		}
		case (is JSString) {
			dynamic {
				return HTMLCollection(native.getElementsByTagName(tagName.native));
			}
		}
	}
	
    shared HTMLCollection getElementsByTagNameNS(String|JSString namespace, String|JSString tagName = "*") {
		switch (namespace)
		case (is String) {
			switch (tagName)
			case (is String) {
				dynamic {
					return HTMLCollection(native.getElementsByTagNameNS(namespace, tagName));
				}
			}
			case (is JSString) {
				dynamic {
					return HTMLCollection(native.getElementsByTagNameNS(namespace, tagName.native));
				}
			}
		}
		case (is JSString) {
			switch (tagName)
			case (is String) {
				dynamic {
					return HTMLCollection(native.getElementsByTagNameNS(namespace.native, tagName));
				}
			}
			case (is JSString) {
				dynamic {
					return HTMLCollection(native.getElementsByTagNameNS(namespace.native, tagName.native));
				}
			}
		}
	}
	
    shared Boolean hasAttribute(String|JSString attName) {
		dynamic has;
		switch (attName)
		case (is String) {
			dynamic {
				has = native.hasAttribute(attName);
			}
		}
		case (is JSString) {
			dynamic {
				has = native.hasAttribute(attName.native);
			}
		}
    	dynamic {
    		if (has) {
    			return true;
    		} else {
    			return false;
    		}
    	}
	}
	
    shared Boolean hasAttributeNS(String|JSString namespace, String|JSString attName) {
		dynamic has;
		switch (namespace)
		case (is String) {
			switch (attName)
			case (is String) {
				dynamic {
					has = native.hasAttributeNS(namespace, attName);
				}
			}
			case (is JSString) {
				dynamic {
					has = native.hasAttributeNS(namespace, attName.native);
				}
			}
		}
		case (is JSString) {
			switch (attName)
			case (is String) {
				dynamic {
					has = native.hasAttributeNS(namespace.native, attName);
				}
			}
			case (is JSString) {
				dynamic {
					has = native.hasAttributeNS(namespace.native, attName.native);
				}
			}
		}
    	dynamic {
    		if (has) {
    			return true;
    		} else {
    			return false;
    		}
    	}
	}
	
    shared void removeAttribute(String|JSString attrName) {
		switch (attrName)
		case (is String) {
			dynamic {
				native.removeAttribute(attrName);
			}
		}
		case (is JSString) {
			dynamic {
				native.removeAttribute(attrName.native);
			}
		}
	}
	
    shared void removeAttributeNS(String|JSString namespace, String|JSString attrName) {
		switch (namespace)
		case (is String) {
			switch (attrName)
			case (is String) {
				dynamic {
					native.removeAttribute(namespace, attrName);
				}
			}
			case (is JSString) {
				dynamic {
					native.removeAttribute(namespace, attrName.native);
				}
			}
		}
		case (is JSString) {
			switch (attrName)
			case (is String) {
				dynamic {
					native.removeAttribute(namespace.native, attrName);
				}
			}
			case (is JSString) {
				dynamic {
					native.removeAttribute(namespace.native, attrName.native);
				}
			}
		}
	}
	
    shared void setAttribute(String|JSString name, String|JSString val) {
		switch (name)
		case (is String) {
			switch (val)
			case (is String) {
				dynamic {
					native.setAttribute(name, val);
				}
			}
			case (is JSString) {
				dynamic {
					native.setAttribute(name, val.native);
				}
			}
		}
		case (is JSString) {
			switch (val)
			case (is String) {
				dynamic {
					native.setAttribute(name.native, val);
				}
			}
			case (is JSString) {
				dynamic {
					native.setAttribute(name.native, val.native);
				}
			}
		}
	}
	
    shared void setAttributeNS(String|JSString namespace, String|JSString name, String|JSString val) {
		switch (namespace)
		case (is String) {
			switch (name)
			case (is String) {
				switch (val)
				case (is String) {
					dynamic {
						native.setAttributeNS(namespace, name, val);
					}
				}
				case (is JSString) {
					dynamic {
						native.setAttributeNS(namespace, name, val.native);
					}
				}
			}
			case (is JSString) {
				switch (val)
				case (is String) {
					dynamic {
						native.setAttributeNS(namespace, name.native, val);
					}
				}
				case (is JSString) {
					dynamic {
						native.setAttributeNS(namespace, name.native, val.native);
					}
				}
			}
		}
		case (is JSString) {
			switch (name)
			case (is String) {
				switch (val)
				case (is String) {
					dynamic {
						native.setAttributeNS(namespace.native, name, val);
					}
				}
				case (is JSString) {
					dynamic {
						native.setAttributeNS(namespace.native, name, val.native);
					}
				}
			}
			case (is JSString) {
				switch (val)
				case (is String) {
					dynamic {
						native.setAttributeNS(namespace.native, name.native, val);
					}
				}
				case (is JSString) {
					dynamic {
						native.setAttributeNS(namespace.native, name.native, val.native);
					}
				}
			}
		}
	}
	
    shared JSString tagName() {
		dynamic {
			return JSString(native.tagName);
		}
	}
}