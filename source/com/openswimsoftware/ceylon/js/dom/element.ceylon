import com.openswimsoftware.ceylon.js.language { JSString }

shared abstract class ElementAbs() extends NodeAbs() {
	
	doc("get the value of the attribute on this element")
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
	
	doc("get the value of the attribute on this element within the given namespace")
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
	
	doc("get elements on this element by the tagname")
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
	
	doc("get elements on this element by the tagname within the given namespace")
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
	
	doc("returns if attribute exists the element")
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
	
	doc("returns if attribute exists the element within the given namespace")
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
	
	doc("remove an attribute on the element")
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
	
	doc("remove an attribute on the element within the given namespace")
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
	
	doc("set an attribute on the element")
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
	
	doc("set an attribute on the element within the given namespace")
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
	
	doc("returns the elements tag name")
    shared JSString tagName() {
		dynamic {
			return JSString(native.tagName);
		}
	}
}

doc("a DOM Element")
shared class Element(dynamic n) extends ElementAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}
