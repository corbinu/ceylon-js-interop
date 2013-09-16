import ceylon.js.language { JSObject, createJSObject, createJSString, objectDefineProperty, DataDescriptor }

shared class AnimateOptions(shared String|Integer? duration = null, shared String? easing = null,
							shared Boolean|String? queue = null, shared Entry<String, String>[]? specialEasing = null,
							shared Anything(Integer, Tween)? step = null, shared Anything(Promise, Integer, Integer)? progress = null,
							shared Anything()? complete = null, shared Anything(Promise, Boolean)? done = null, 
							shared Anything(Promise, Boolean)? fail = null, shared Anything(Promise, Boolean)? always = null) {
	
	shared JSObject toNative() {
		
		dynamic native;
		dynamic {
			native = \iObject();
			if (exists d = duration) {
				native.duration = d;
			}
			if (exists e = easing) {
				native.easing = e;
			}
			if (exists q = queue) {
				native.queue = e;
			}
			if (exists sE = specialEasing) {
				JSObject specialEasingNative = createJSObject();
				for (key -> val in sE) {
					dynamic {
						objectDefineProperty(specialEasingNative, createJSString(key), DataDescriptor(true, false, true, true, val));
					}
				}
				native.specialEasing = specialEasingNative;
			}
			if (exists s = step) {
				native.step = s;
			}
			if (exists p = progress) {
				native.progress = p;
			}
			if (exists c = complete) {
				native.complete = c;
			}
			if (exists d = done) {
				native.done = d;
			}
			if (exists f = fail) {
				native.fail = f;
			}
			if (exists a = always) {
				native.always = a;
			}
			return JSObject(native);
		}
	}
}