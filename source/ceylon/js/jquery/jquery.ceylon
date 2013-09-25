import ceylon.js.dom { Element, Event }
import ceylon.js.language { JSString, JSFunction, JSObject, JSNumber, JSArray, JSObjectAbs, createJSObject }
import ceylon.js.json { JSJSON }
import ceylon.js.xmlhttprequest { XMLHttpRequest }

shared String allSelector = "*";
shared String animatedSelector = ":animated";
shared String buttonSelector = ":button";
shared String checkboxSelector = ":checkbox";
shared String checkedSelector = ":checked";
shared String disabledSelector = ":disabled";
shared String emptySelector = ":empty";
shared String enabledSelector = ":enabled";
shared String evenSelector = ":even";
shared String fileSelector = ":file";
shared String firstChildSelector = ":first-child";
shared String firstOfTypeSelector = ":first-of-type";
shared String firstSelector = ":first";
shared String focusSelector = ":focus";
shared String headerSelector = ":header"; 
shared String hiddenSelector = ":hidden";
shared String imageSelector = ":image";
shared String inputSelector = ":input";
shared String lastChildSelector = ":last-child";
shared String lastOfTypeSelector = ":last-of-type";
shared String lastSelector = ":last";
shared String oddSelector = ":odd";
shared String onlyChildSelector = ":only-child";
shared String onlyOfTypeSelector = ":only-of-type";
shared String parentSelector = ":parent";
shared String passwordSelector = ":password";
shared String radioSelector = ":radio";
shared String resetSelector = ":reset";
shared String rootSelector = ":root";
shared String selectedSelector = ":selected";
shared String submitSelector = ":submit";
shared String targetSelector = ":target";
shared String textSelector = ":text";
shared String visibleSelector = ":visible";

dynamic getJQ() {
	dynamic {
		dynamic jq = jQuery;
		if (jq == \iundefined || jq == \inull) {
			throw Exception("jQuery Library was not found. Did you make sure to include jQuery?");
		} else {
			return jq;
		}
	}
}

shared JQXHR jQueryAjax(String? url = null, JQueryAjaxSettingsBuilder? settings = null) {
	dynamic {
		if (exists u = url) {
			if (exists s = settings) {
				return JQXHR(getJQ().ajax(u, s.toNative()));
			} else {
				return JQXHR(getJQ().ajax(u));
			}
		} else {
			if (exists s = settings) {
				return JQXHR(getJQ().ajax(s.toNative()));
			} else {
				return JQXHR(getJQ().ajax());
			}
		}
	}
}

shared void jQueryAjaxPrefilter(Anything(JQueryAjaxSettings, JQueryAjaxSettings, JQXHR) callback, String? dataTypes = null) {
	dynamic {
		if (exists dT = dataTypes) {
			getJQ().ajaxPrefilter(dT, callback);
		} else {
			getJQ().ajaxPrefilter(callback);
		}
	}
}

shared void jQueryAjaxSetup(JQueryAjaxSettingsBuilder options) {
	dynamic {
		getJQ().ajaxSetup(options.toNative());
	}
}

shared void jQueryAjaxTransport(String dataType, Anything(JQueryAjaxSettings, JQueryAjaxSettings, JQXHR) callback) {
	dynamic {
		getJQ().ajaxTransport(dataType, callback);
	}
}

shared Callbacks jQueryCallbacks(String flags = "") {
	dynamic {
		return Callbacks(getJQ().\iCallbacks(flags));
	}
}

shared Boolean jQueryContains(Element container, Element contained) {
	dynamic {
		if (getJQ().contains(container, contained)) {
			return true;
		} else {
			return false;
		}
	}
}

shared JSObject jQueryCssHooks() {
	dynamic {
		return JSObject(getJQ().cssHooks);
	}
}

shared JSObject jQuerySetData(Element element, String key, dynamic data) {
	dynamic {
		return JSObject(getJQ().data(element, key, data));
	}
}

shared JSObject jQueryGetData(Element element, String? key = null) {
	dynamic {
		return JSObject(getJQ().data(element, key));
	}
}

shared Deferred jQueryDeferred(Anything(Deferred)? beforeStart = null) {
	dynamic {
		return Deferred(getJQ().\iDeferred(beforeStart));
	}
}

shared void jQueryDequeue(Element element, String? queueName = null) {
	dynamic {
		getJQ().dequeue(element, queueName);
	}
}

shared JSObject jQueryEach(dynamic collection, Anything(Integer, Anything) callback) {
	dynamic {
		return JSObject(getJQ().each(collection, callback));
	}
}

shared void jQueryError(String message) {
	dynamic {
		getJQ().error(message);
	}
}

shared void jQueryExtend(Anything target, Anything* objects) {
	dynamic {
		getJQ().extend(target, *objects);
	}
}

shared void jQueryExtendDeep(Boolean deep, Anything target, Anything* objects) {
	dynamic {
		getJQ().extend(target, *objects);
	}
}

shared JSObject jQueryFnExtend(dynamic obj) {
	dynamic {
		return JSObject(jQuery.fn.extend(obj));
	}
}

shared JSNumber jQueryFxInterval() {
	dynamic {
		return JSNumber(jQuery.fx.interval);
	}
}

shared Boolean jQueryFxOff() {
	dynamic {
		if (jQuery.fx.off) {
			return true;
		} else {
			return false;
		}
	}
}

shared JQXHR jQueryGet(String url, dynamic data = null, Anything(Anything, String, JQXHR)? success = null, String? dataType = null) {
	dynamic {
		return JQXHR(jQuery.get(url, data, success, dataType));
	}
}

shared JQXHR jQueryGetJSON(String url, dynamic data = null, Anything(Anything, String, JQXHR)? success = null) {
	dynamic {
		return JQXHR(jQuery.getJSON(url, data, success));
	}
}

shared JQXHR jQueryGetScript(String url, Anything(Anything, String, JQXHR)? success = null) {
	dynamic {
		return JQXHR(jQuery.getScript(url, success));
	}
}

shared JQXHR jQueryGlobalEval(String code) {
	dynamic {
		return JQXHR(jQuery.globalEval(code));
	}
}

shared JSArray jQueryGrep(JSArray array, Anything(Anything, Integer) callback, Boolean? invert = null) {
	dynamic {
		return JSArray(jQuery.grep(array.native, callback, invert));
	}
}

shared Boolean jQueryHasData(Element element) {
	dynamic {
		if (jQuery.hasData(element)) {
			return true;
		} else {
			return false;
		}
	}
}

shared void jQueryHoldReady(Boolean hold) {
	dynamic {
		jQuery.holdReady(hold);
	}
}

shared JSNumber jQueryInArray(JSObject val, JSArray array, Integer? fromIndex = null) {
	dynamic {
		return JSNumber(jQuery.inArray(val.native, array.native, fromIndex));
	}
}

shared Boolean jQueryIsArray(JSObject obj) {
	dynamic {
		if (jQuery.isArray(obj.native)) {
			return true;
		} else {
			return false;
		}
	}
}

shared Boolean jQueryIsEmptyObject(JSObject obj) {
	dynamic {
		if (jQuery.isEmptyObject(obj.native)) {
			return true;
		} else {
			return false;
		}
	}
}

shared Boolean jQueryIsFunction(JSObject obj) {
	dynamic {
		if (jQuery.isFunction(obj.native)) {
			return true;
		} else {
			return false;
		}
	}
}

shared Boolean jQueryIsNumeric(JSObject obj) {
	dynamic {
		if (jQuery.isNumeric(obj.native)) {
			return true;
		} else {
			return false;
		}
	}
}

shared Boolean jQueryIsPlainObject(JSObject obj) {
	dynamic {
		if (jQuery.isPlainObject(obj.native)) {
			return true;
		} else {
			return false;
		}
	}
}

shared Boolean jQueryIsWindow(JSObject obj) {
	dynamic {
		if (jQuery.isWindow(obj.native)) {
			return true;
		} else {
			return false;
		}
	}
}

shared Boolean jQueryIsXMLDoc(Element node) {
	dynamic {
		if (jQuery.isXMLDoc(node.native)) {
			return true;
		} else {
			return false;
		}
	}
}

shared JSArray jQueryMapArray(JSArray array, Anything(Anything, Integer) callback) {
	dynamic {
		return JSArray(jQuery.mapArray(array.native, callback));
	}
}

shared JSArray jQueryMapObject(JSObject obj, Anything(Anything, Anything) callback) {
	dynamic {
		return JSArray(jQuery.mapArray(obj.native, callback));
	}
}

shared JSArray jQueryMerge(JSArray first, JSArray second) {
	dynamic {
		return JSArray(jQuery.merge(first, second));
	}
}

shared JSArray jQueryNoConflict(Boolean? removeAll = null) {
	dynamic {
		return JSArray(jQuery.noConflict(removeAll));
	}
}

shared void jQueryNoop() {
	dynamic {
		jQuery.noop();
	}
}

shared JSNumber jQueryNow() {
	dynamic {
		return JSNumber(jQuery.now());
	}
}

shared JSString jQueryParam(JSArray|JSObject obj, Boolean traditional = false) {
	dynamic {
		return JSString(jQuery.param(obj, traditional));
	}
}

shared JSString jQueryParseHTML(String data, Element? context = null, Boolean? keepScripts = false) {
	dynamic {
		return JSString(jQuery.parseHTML(data, context, keepScripts));
	}
}

shared JSObject jQueryParseJSON(String json) {
	dynamic {
		return JSObject(jQuery.parseJSON(data, context, keepScripts));
	}
}

shared JSObject jQueryParseXML(String data) {
	dynamic {
		return JSObject(jQuery.parseXML(data));
	}
}

shared JQXHR jQueryPost(String url, dynamic data = null, Anything(Anything, String, JQXHR)? success = null, String? dataType = null) {
	dynamic {
		return JQXHR(jQuery.post(url, data, success, dataType));
	}
}

shared JSFunction jQueryProxy(Anything(Anything*) func, JSObject context, Anything* additionalArguments) {
	dynamic {
		return JSFunction(jQuery.proxy(func, context, *additionalArguments));
	}
}

shared JSFunction jQueryProxyName(JSObject context, String name, Anything* additionalArguments) {
	dynamic {
		return JSFunction(jQuery.proxy(context, func, *additionalArguments));
	}
}

doc("returns JSFunctions[]")
shared JSArray jQueryGetQueue(Element element, String queueName = "fx") {
	dynamic {
		return JSArray(jQuery.queue(element, queueName));
	}
}

shared JQuery jQuerySetQueue(Element element, String queueName = "fx", Anything(Anything*)* callbacks) {
	dynamic {
		return JQuery(jQuery.queue(element, queueName, callbacks));
	}
}

shared JQuery jQueryRemoveData(Element element, String? name = null) {
	dynamic {
		return JQuery(jQuery.removeData(element, name));
	}
}

shared JSString jQueryTrim(JSString str) {
	dynamic {
		return JSString(jQuery.trim(str.native));
	}
}

shared JSString jQueryType(JSObject obj) {
	dynamic {
		return JSString(jQuery.type(obj.native));
	}
}

shared JSArray jQueryUnique(JSArray arr) {
	dynamic {
		return JSArray(jQuery.unique(arr.native));
	}
}

shared Promise jQueryWhen(Deferred* deferreds) {
	dynamic {
		return Promise(jQuery.when(deferreds*.native));
	}
}

shared JQuery jq(String|JQuery|JSObject|Element? selector = null, Element|JQuery? context = null) {
	dynamic {
		dynamic jquery = getJQ();
		switch (selector) 
		case (is String) {
			switch(context)
			case (is Element|JQuery) {
				return JQuery(jquery(selector, context.native));
			}
			case (is Null) {
				return JQuery(jquery(selector));
			}
		}
		case (is JQuery|JSObject|Element) {
			return JQuery(jquery(selector.native));
		}
		case (is Null) {
			return JQuery(jquery());
		}
	}
}

shared JQuery jqElems(Element+ elems) {
	dynamic {
		dynamic jquery = getJQ();
		return JQuery(jquery(elems*.native));
	}
}

shared abstract class JQueryAbs() extends JSObjectAbs() {
	
	shared JQuery add(String|JQuery append) {
		switch (append)
		case (is String ) {
			dynamic {
				return JQuery(native.add(append));
			}
		}
		case (is JQuery) {
			dynamic {
				return JQuery(native.add(append.native));
			}
		}
	}
	
	shared JQuery addElements(Element+ elements) {
		dynamic {
			return JQuery(native.add(elements*.native));
		}
	}
	
	shared JQuery addSelector(String selector, Element? context = null) {
		dynamic {
			if (exists c = context) {
				return JQuery(native.add(selector, c));
			} else {
				return JQuery(native.add(selector));
			}
		}
	}
	
	shared JQuery addBack(String? selector = null) {
		dynamic {
			return JQuery(native.addBack(selector));
		}
	}
	
	shared JQuery addClass(String className) {
		dynamic {
			return JQuery(native.addClass(className));
		}
	}
	
	shared JQuery addClassCallback(String callback(Integer index, String currentClass)) {
		dynamic {
			return JQuery(native.addClass(callback));
		}
	}
	
	shared JQuery after(String* content) {
		dynamic {
			return JQuery(JSFunction(native.after).apply(null, content));
		}
	}
	
	shared JQuery afterElements(Element* content) {
		dynamic {
			// TODO this should be calling applyJS but JSObject is not a super type of Element
			return JQuery(JSFunction(native.after).apply(null, content*.native));
		}
	}
	
	shared JQuery afterJQuery(JQuery* content) {
		dynamic {
			// TODO this should be calling applyJS but JSObject is not a super type of JQuery
			return JQuery(JSFunction(native.after).apply(null, content*.native));
		}
	}
	
	shared JQuery ajaxComplete(Anything(JQueryEvent, JQXHR, JQueryAjaxSettings) handler) {
		dynamic {
			return JQuery(native.ajaxComplete(handler));
		}
	}
	
	shared JQuery ajaxError(Anything(JQueryEvent, JQXHR, JQueryAjaxSettings, Exception) handler) {
		dynamic {
			return JQuery(native.ajaxError(handler));
		}
	}
	
	shared JQuery ajaxSend(Anything(JQueryEvent, JQXHR, JQueryAjaxSettings) handler) {
		dynamic {
			return JQuery(native.ajaxSend(handler));
		}
	}
	
	shared JQuery ajaxStart(Anything() handler) {
		dynamic {
			return JQuery(native.ajaxStart(handler));
		}
	}
	
	shared JQuery ajaxStop(Anything() handler) {
		dynamic {
			return JQuery(native.ajaxStop(handler));
		}
	}
	
	shared JQuery ajaxSuccess(Anything(JQueryEvent, JQXHR, JQueryAjaxSettings) handler) {
		dynamic {
			return JQuery(native.ajaxSuccess(handler));
		}
	}
	
	// TODO create enumarate type for Easing property
	shared JQuery animate(Entry<String, String>[] properties, String|Integer? duration = null, String? easing = null, Anything()? complete = null) {
		JSObject propertiesNative = createJSObject();
		for (key -> val in properties) {
			dynamic {
				objectDefineProperty(propertiesNative, createJSString(key), DataDescriptor(true, false, true, true, val));
			}
		}
		switch (duration)
		case (is String|Integer) {
			switch (easing)
			case (is String) {
				if (exists c = complete) {
					dynamic {
						return JQuery(native.animate(propertiesNative.native, duration, easing, complete));
					}
				} else {
					dynamic {
						return JQuery(native.animate(propertiesNative.native, duration, easing));
					}
				}
			}
			case (is Null) {
				if (exists c = complete) {
					dynamic {
						return JQuery(native.animate(propertiesNative.native, duration, null, complete));
					}
				} else {
					dynamic {
						return JQuery(native.animate(propertiesNative.native, duration));
					}
				}
			}
		}
		case (is Null) {
			switch (easing)
			case (is String) {
				if (exists c = complete) {
					dynamic {
						return JQuery(native.animate(propertiesNative.native, null, easing, complete));
					}
				} else {
					dynamic {
						return JQuery(native.animate(propertiesNative.native, null, easing));
					}
				}
			}
			case (is Null) {
				if (exists c = complete) {
					dynamic {
						return JQuery(native.animate(propertiesNative.native, null, null, complete));
					}
				} else {
					dynamic {
						return JQuery(native.animate(propertiesNative.native));
					}
				}
			}
		}
	}
	
	shared JQuery animateOptions(Entry<String, String>[] properties, AnimateOptions options) {
		JSObject propertiesNative = createJSObject();
		for (key -> val in properties) {
			dynamic {
				objectDefineProperty(propertiesNative, createJSString(key), DataDescriptor(true, false, true, true, val));
			}
		}
		dynamic {
			return JQuery(native.animate(propertiesNative.native, options.toNative()));
		}
	}
	
	shared JQuery append(Element|JQuery* content) {
		dynamic {
			return JQuery(JSFunction(native.append).apply(null, content*.native));
		}
	}
	
	shared JQuery appendHTML(String* content) {
		dynamic {
			return JQuery(native.append(*content));
		}
	}
	
	shared JQuery appendCallback(Anything(Integer, String) callback) {
		dynamic {
			return JQuery(native.append(callback));
		}
	}
	
	shared JQuery appendTo(String|Element|JQuery target) {
		switch (target)
		case (is String) {
			dynamic {
				return JQuery(native.appendTo(target));
			}
		}
		case (is Element|JQuery) {
			dynamic {
				return JQuery(native.appendTo(target.native));
			}
		}
	}
	
	shared JSString getAttr(String attributeName) {
		dynamic {
			return JSString(native.attr(attributeName));
		}
	}
	
	shared JQuery setAttr(String attributeName, String|Integer val) {
		dynamic {
			return JQuery(native.attr(attributeName, val));
		}
	}
	
	shared JQuery setAttrEntries(Entry<String, String|Integer>* entries) {
		JSObject entriesNative = createJSObject();
		for (key -> val in entries) {
			dynamic {
				objectDefineProperty(entriesNative, createJSString(key), DataDescriptor(true, false, true, true, val));
			}
		}
		dynamic {
			return JQuery(native.attr(entriesNative));
		}
	}
	
	shared JQuery setAttrCallback(String attributeName, Anything(Integer, String) callback) {
		dynamic {
			return JQuery(native.attr(entriesNative, callback));
		}
	}
	
	shared JQuery before(Element|JQuery* content) {
		dynamic {
			return JQuery(JSFunction(native.before).apply(null, content*.native));
		}
	}
	
	shared JQuery beforeHTML(String* content) {
		dynamic {
			return JQuery(native.before(*content));
		}
	}
	
	shared JQuery beforeCallback(Anything() callback) {
		dynamic {
			return JQuery(native.before(callback));
		}
	}
	
	shared JQuery bind(String eventType, dynamic eventData = null, Boolean preventBubble = true) {
		dynamic {
			return JQuery(native.bind(eventType, eventData, preventBubble));
		}
	}
	
	shared JQuery bindCallback(String eventType, dynamic eventData, Anything(Anything) handler) {
		dynamic {
			return JQuery(native.bind(eventType, eventData, handler));
		}
	}
	
	shared JQuery bindEvents(Entry<String, Anything(Anything)>* events) {
		JSObject eventsNative = createJSObject();
		for (key -> val in events) {
			dynamic {
				objectDefineProperty(eventsNative, createJSString(key), DataDescriptor(true, false, true, true, val));
			}
		}
		dynamic {
			return JQuery(native.bind(eventsNative));
		}
	}
	
	shared JQuery blur(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.blur(eventData, handler));
		}
	}
	
	shared JQuery change(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.blur(eventData, handler));
		}
	}
	
	shared JQuery children(String? selector = null) {
		dynamic {
			return JQuery(native.children(selector));
		}
	}
	
	shared JQuery clearQueue(String queueName = "fx") {
		dynamic {
			return JQuery(native.clearQueue(queueName));
		}
	}
	
	shared JQuery click(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.click(eventData, handler));
		}
	}
	
	shared JQuery clone(Boolean withDataAndEvents = false, Boolean? deepWithDataAndEvents = null) {
		if (exists deep = deepWithDataAndEvents) {
			dynamic {
				return JQuery(native.clone(withDataAndEvents, deep));
			}
		} else {
			dynamic {
				return JQuery(native.clone(withDataAndEvents));
			}
		}
	}
	
	shared JQuery closest(String selector, Element? context = null) {
		dynamic {
			return JQuery(native.closest(selector, context));
		}
	}
	
	shared JQuery closestElement(Element elem) {
		dynamic {
			return JQuery(native.closest(elem.native));
		}
	}
	
	shared JQuery closestjQuery(JQuery jq) {
		dynamic {
			return JQuery(native.closest(jq.native));
		}
	}
	
	shared JQuery contents() {
		dynamic {
			return JQuery(native.contents());
		}
	}
	
	shared JSString getCss(String|String[] properties) {
		dynamic {
			return JSString(native.css(properties));
		}
	}
	
	shared JQuery setCss(String property, String|Number val) {
		dynamic {
			return JQuery(native.css(property, val));
		}
	}
	
	shared JQuery setCssCallback(String property, String callback(Integer index, String val)) {
		dynamic {
			return JQuery(native.css(property, callback));
		}
	}
	
	shared JQuery setCssJson(String property, JSJSON val) {
		dynamic {
			return JQuery(native.css(property, val.native));
		}
	}
	
	shared JQuery setData(String key, JSObject data) {
		dynamic {
			return JQuery(native.data(key, data.native));
		}
	}
	
	shared JQuery setDataEntries(Entry<String, JSObject>* events) {
		JSObject dataNative = createJSObject();
		for (key -> val in events) {
			dynamic {
				objectDefineProperty(dataNative, createJSString(key), DataDescriptor(true, false, true, true, val.native));
			}
		}
		dynamic {
			return JQuery(native.data(dataNative));
		}
	}
	
	shared JSObject getData(String? key = null) {
		if (exists k = key) {
			dynamic {
				return JSObject(native.data(key));
			}
		} else {
			dynamic {
				return JSObject(native.data());
			}
		}
	}
	
	shared JQuery dblclick(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.blur(eventData, handler));
		}
	}
	
	shared JQuery delay(Integer duration, String queueName = "fx") {
		dynamic {
			return JQuery(native.delay(duration, queueName));
		}
	}
	
	shared JQuery delegate(String selector, String eventType, dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.delegate(selector, eventType, eventData, handler));
		}
	}
	
	shared JQuery delegateEvents(String selector, Entry<String, Anything(Anything)>* events) {
		JSObject eventsNative = createJSObject();
		for (key -> val in events) {
			dynamic {
				objectDefineProperty(eventsNative, createJSString(key), DataDescriptor(true, false, true, true, val));
			}
		}
		dynamic {
			return JQuery(native.delegate(selector, eventsNative));
		}
	}
	
	shared JQuery dequeue(String? queueName = null)	{
		dynamic {
			return JQuery(native.dequeue(queueName));
		}
	}
	
	shared JQuery detach(String? selector = null)	{
		dynamic {
			return JQuery(native.detach(selector));
		}
	}
	
	shared JQuery die(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.die(eventData, handler));
		}
	}
	
	shared JQuery each(Anything(Integer, Anything) handler) {
		dynamic {
			return JQuery(native.each(handler));
		}
	}
	
	shared JQuery empty() {
		dynamic {
			return JQuery(native.empty());
		}
	}
	
	shared JQuery end() {
		dynamic {
			return JQuery(native.end());
		}
	}
	
	shared JQuery eq(Integer index) {
		dynamic {
			return JQuery(native.eq(index));
		}
	}
	
	shared JQuery error(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.error(eventData, handler));
		}
	}
	
	shared JQuery fadeIn(String|Integer? duration = null, String? easing = null, Anything()? complete = null) {
		dynamic {
			return JQuery(native.fadeIn(duration, easing, handler));
		}
	}
	
	shared JQuery fadeInOptions(AnimateOptions options) {
		dynamic {
			return JQuery(native.fadeOut(options.toNative()));
		}
	}
	
	shared JQuery fadeOut(String|Integer? duration = null, String? easing = null, Anything()? complete = null) {
		dynamic {
			return JQuery(native.fadeOut(duration, easing, handler));
		}
	}
	
	shared JQuery fadeOutOptions(AnimateOptions options) {
		dynamic {
			return JQuery(native.fadeOut(options.toNative()));
		}
	}
	
	shared void fadeTo(String|Integer duration, Float opacity, String? easing = null, Anything()? complete = null) {
		dynamic {
			native.fadeTo(duration, opacity, easing, complete);
		}
	}
	
	shared JQuery fadeToggle(String|Integer? duration = null, String? easing = null, Anything()? complete = null) {
		dynamic {
			return JQuery(native.fadeOut(duration, easing, handler));
		}
	}
	
	shared JQuery fadeToggleOptions(AnimateOptions options) {
		dynamic {
			return JQuery(native.fadeOut(options.toNative()));
		}
	}
	
	shared JQuery filter(String|Element|JQuery selector) {
		switch (selector)
		case (is String) {
			dynamic {
				return JQuery(native.filter(selector));
			}
		}
		case (is Element|JQuery) {
			dynamic {
				return JQuery(native.filter(selector.native));
			}
		}
	}
	
	shared JQuery filterCallback(Anything(Integer) callback) {
		dynamic {
			return JQuery(native.filter(callback));
		}
	}
	
	shared JQuery find(String|Element|JQuery selector) {
		switch (selector)
		case (is String) {
			dynamic {
				return JQuery(native.find(selector));
			}
		}
		case (is Element|JQuery) {
			dynamic {
				return JQuery(native.find(selector.native));
			}
		}
	}
	
	shared JQuery finish(String queue) {
		dynamic {
			return JQuery(native.finish(ueue));
		}
	}
	
	shared JQuery first() {
		dynamic {
			return JQuery(native.first());
		}
	}
	
	shared JQuery focus(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.focus(eventData, handler));
		}
	}
	
	shared JQuery focusin(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.focusin(eventData, handler));
		}
	}
	
	shared JQuery focusout(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.focusout(eventData, handler));
		}
	}
	
	shared Element get(Integer? index = null) {
		dynamic {
			return Element(native.get(index));
		}
	}
	
	shared JQuery has(String|Element selector) {
		switch (selector)
		case (is String) {
			dynamic {
				return JQuery(native.has(selector));
			}
		}
		case (is Element) {
			dynamic {
				return JQuery(native.has(selector.native));
			}
		}
	}
	
	shared Boolean hasClass(String className) {
		dynamic {
			if (native.hasClass(className)) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared JSNumber getHeight() {
		dynamic {
			return JSNumber(native.height());
		}
	}
	
	shared JQuery setHeight(String|Integer val) {
		dynamic {
			return JQuery(native.height(val));
		}
	}
	
	shared JQuery setHeightCallback(Anything(Integer, Integer) callback) {
		dynamic {
			return JQuery(native.height(callback));
		}
	}
	
	shared JQuery hide(String|Integer? duration = null, String? easing = null, Anything()? complete = null) {
		dynamic {
			return JQuery(native.hide(duration, easing, handler));
		}
	}
	
	shared JQuery hideOptions(AnimateOptions options) {
		dynamic {
			return JQuery(native.hide(options.toNative()));
		}
	}
	
	shared JQuery hover(Anything(JQueryEvent) handlerIn, Anything(JQueryEvent) handlerOut) {
		dynamic {
			return JQuery(native.hover(handlerIn, handlerOut));
		}
	}
	
	shared JQuery hoverSingle(Anything(JQueryEvent) handlerInOut) {
		dynamic {
			return JQuery(native.hover(handlerInOut));
		}
	}
	
	shared JSString getHtml() {
		dynamic {
			return JSString(native.html());
		}
	}
	
	shared JSString setHtml(String html) {
		dynamic {
			return JSString(native.html(html));
		}
	}
	
	shared JSString setHtmlCallback(String(Integer, String) callback) {
		dynamic {
			return JSString(native.html(callback));
		}
	}
	
	shared JSNumber index(String|Element|JQuery selector) {
		switch (selector)
		case (is String) {
			dynamic {
				return JSNumber(native.index(selector));
			}
		}
		case (is Element|JQuery) {
			dynamic {
				return JSNumber(native.index(selector.native));
			}
		}
	}
	
	shared JSNumber innerHeight() {
		dynamic {
			return JSNumber(native.innerHeight());
		}
	}
	
	shared JSNumber innerWidth() {
		dynamic {
			return JSNumber(native.innerWidth());
		}
	}
	
	shared JQuery insertAfter(String|Element|JQuery  target) {
		switch (target)
		case (is String) {
			dynamic {
				return JQuery(native.insertAfter(target));
			}
		}
		case (is Element|JQuery) {
			dynamic {
				return JQuery(native.insertAfter(target.native));
			}
		}
	}
	
	shared JQuery insertBefore(String|Element|JQuery  target) {
		switch (target)
		case (is String) {
			dynamic {
				return JQuery(native.insertBefore(target));
			}
		}
		case (is Element|JQuery) {
			dynamic {
				return JQuery(native.insertBefore(target.native));
			}
		}
	}
	
	shared Boolean isSelector(String|Element|JQuery selector) {
		switch (selector)
		case (is String) {
			dynamic {
				if (native.\iis(selector)) {
					return true;
				} else {
					return false;
				}
			}
		}
		case (is Element|JQuery) {
			dynamic {
				if (native.\iis(selector.native)) {
					return true;
				} else {
					return false;
				}
			}
		}
	}
	
	shared Boolean isCallback(Boolean(Integer) callback) {
		dynamic {
			if (native.\iis(callback)) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared JSString jquery() {
		dynamic {
			return JSString(native.jquery);
		}
	}
	
	shared JQuery keydown(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.keydown(eventData, handler));
		}
	}
	
	shared JQuery keypress(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.keypress(eventData, handler));
		}
	}
	
	shared JQuery keyup(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.keyup(eventData, handler));
		}
	}
	
	shared JQuery last() {
		dynamic {
			return JQuery(native.last());
		}
	}
	
	shared void resizeTrigger() {
		dynamic {
			native.resize();
		}
	}
	
	shared JSNumber length() {
		dynamic {
			return JSNumber(native.length);
		}
	}
	
	shared JQuery load(String url, dynamic data, Anything(String, String, XMLHttpRequest) complete) {
		dynamic {
			return JQuery(native.load(url, data, complete));
		}
	}
	
	shared JQuery map(Anything(Integer, Element) callback) {
		dynamic {
			return JQuery(native.map(callback));
		}
	}
	
	shared JQuery mousedown(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.mousedown(eventData, handler));
		}
	}
	
	shared JQuery mouseenter(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.mouseenter(eventData, handler));
		}
	}
	
	shared JQuery mouseleave(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.mouseleave(eventData, handler));
		}
	}
	
	shared JQuery mousemove(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.mousemove(eventData, handler));
		}
	}
	
	shared JQuery mouseout(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.mouseout(eventData, handler));
		}
	}
	
	shared JQuery mouseover(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.mouseover(eventData, handler));
		}
	}
	
	shared JQuery mouseup(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.mouseup(eventData, handler));
		}
	}
	
	shared JQuery next(String? selector = null) {
		dynamic {
			return JQuery(native.next(selector));
		}
	}
	
	shared JQuery nextAll(String? selector = null) {
		dynamic {
			return JQuery(native.nextAll(selector));
		}
	}
	
	shared JQuery nextUntil(String|Element? selector = null, String? filter = null) {
		switch (selector) 
		case (is String) {
			dynamic {
				return JQuery(native.nextUntil(selector, f));
			}
		}
		case (is Element) {
			dynamic {
				return JQuery(native.nextUntil(selector.native, f));
			}
		}
		case (is Null) {
			dynamic {
				return JQuery(native.nextUntil(null, f));
			}
		}
	}
	
	shared JQuery not(String|JQuery|Element selector) {
		switch (selector)
		case (is String) {
			dynamic {
				return JQuery(native.not(selector));
			}
		}
		case (is JQuery|Element) {
			dynamic {
				return JQuery(native.not(selector.native));
			}
		}
	}
	
	shared JQuery off(String events, String selector, Anything(JQueryEvent)? handler = null) {
		dynamic {
			return JQuery(native.mouseover(eventData, handler));
		}
	}
	
	shared Coordinates getOffset() {
		dynamic {
			return Offset(native.offset());
		}
	}
	
	shared JQuery setOffset(Coordinates offset) {
		dynamic {
			return JQuery(native.offset());
		}
	}
	
	shared JQuery setOffsetCallback(Coordinates(Integer, Coordinates) offset) {
		dynamic {
			return JQuery(native.offset(offset));
		}
	}
	
	shared JQuery offsetParent() {
		dynamic {
			return JQuery(native.offsetParent());
		}
	}
	
	shared JQuery on(String events, String? selector = null, dynamic data = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.on(events, selector, data, handler));
		}
	}
	
	shared JQuery one(String events, String? selector = null, dynamic data = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.one(events, selector, data, handler));
		}
	}
	
	shared JSNumber outerHeight(Boolean? includeMargin = null) {
		dynamic {
			return JSNumber(native.outerHeight(includeMargin));
		}
	}
	
	shared JSNumber outerWidth(Boolean? includeMargin = null) {
		dynamic {
			return JSNumber(native.outerWidth(includeMargin));
		}
	}
	
	shared JQuery parent(String? selector = null) {
		dynamic {
			return JQuery(native.parent(selector));
		}
	}
	
	shared JQuery parents(String? selector = null) {
		dynamic {
			return JQuery(native.parents(selector));
		}
	}
	
	shared JQuery parentsUntil(String|Element? selector = null, String? filter = null) {
		switch (selector)
		case (is String) {
			dynamic {
				return JQuery(native.parents(selector, filter));
			}
		}
		case (is Element) {
			dynamic {
				return JQuery(native.parents(selector.native, filter));
			}
		}
		case (is Null) {
			dynamic {
				return JQuery(native.parents(null, filter));
			}
		}
	}
	
	shared Coordinates position() {
		dynamic {
			return Coordinates(native.position());
		}
	}
	
	shared JQuery prepend(Element|JQuery* content) {
		dynamic {
			return JQuery(JSFunction(native.prepend).apply(null, content*.native));
		}
	}
	
	shared JQuery prependHTML(String* content) {
		dynamic {
			return JQuery(native.prepend(*content));
		}
	}
	
	shared JQuery prependCallback(Anything(Integer, String) callback) {
		dynamic {
			return JQuery(native.prepend(callback));
		}
	}
	
	shared JQuery prependTo(String|Element|JQuery target) {
		switch (target)
		case (is String) {
			dynamic {
				return JQuery(native.prependTo(target));
			}
		}
		case (is Element|JQuery) {
			dynamic {
				return JQuery(native.prependTo(target.native));
			}
		}
	}
	
	shared JQuery prev(String? selector = null) {
		dynamic {
			return JQuery(native.prev(selector));
		}
	}
	
	shared JQuery prevAll(String? selector = null) {
		dynamic {
			return JQuery(native.prevAll(selector));
		}
	}
	
	shared JQuery prevUntil(String|Element? selector = null, String? filter = null) {
		switch (selector) 
		case (is String) {
			dynamic {
				return JQuery(native.prevUntil(selector, f));
			}
		}
		case (is Element) {
			dynamic {
				return JQuery(native.prevUntil(selector.native, f));
			}
		}
		case (is Null) {
			dynamic {
				return JQuery(native.prevUntil(null, f));
			}
		}
	}
	
	shared Promise promise(String type = "fx", JSObject? target = null) {
		if (exists t = target) {
			dynamic {
				return Promise(native.promise(type, t.native));
			}
		} else {
			dynamic {
				return Promise(native.promise(type));
			}
		}
	}
	
	shared JSString|Boolean getProp(String name) {
		dynamic {
			dynamic prop = native.prop(name);
			if (prop \iinstanceof \iString) {
				return JSString(prop);
			} else if (prop) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	shared JQuery setProp(String propertyName, String|Integer|Boolean val) {
		dynamic {
			return JQuery(native.prop(propertyName, val));
		}
	}
	
	shared JQuery setPropEntries(Entry<String, String|Integer|Boolean>* properties) {
		JSObject propertiesNative = createJSObject();
		for (key -> val in properties) {
			dynamic {
				objectDefineProperty(propertiesNative, createJSString(key), DataDescriptor(true, false, true, true, val));
			}
		}
		dynamic {
			return JQuery(native.prop(propertiesNative));
		}
	}
	
	shared JQuery setPropCallback(String propertyName, Anything(Integer, Anything) callback) {
		dynamic {
			return JQuery(native.prop(propertyName, callback));
		}
	}
	
	shared JQuery pushStack(Element[] elements, String? name = null, dynamic arguments = null) {
		dynamic {
			return JQuery(native.pushStack(elements*.native, name, arguments));
		}
	}
	
	doc("returns an array of functions")
	shared JSArray getQueue(String queueName = "fx") {
		dynamic {
			return JSArray(native.queue(queueName));
		}
	}
	
	shared JQuery setQueue(String queueName = "fx", Anything(Anything*)* newQueue) {
		dynamic {
			return JQuery(native.queue(queueName, newQueue));
		}
	}
	
	shared JQuery setQueueCallback(Anything(Anything) next, String queueName = "fx") {
		dynamic {
			return JQuery(native.queue(queueName, next));
		}
	}
	
	shared JQuery ready(Anything() handler) {
		dynamic {
			return JQuery(native.ready(handler));
		}
	}
	
	shared JQuery remove(String? selector = null) {
		dynamic {
			return JQuery(native.remove(selector));
		}
	}
	
	shared JQuery removeAttr(String attributeName) {
		dynamic {
			return JQuery(native.removeAttr(attributeName));
		}
	}
	
	shared JQuery removeClass(String className) {
		dynamic {
			return JQuery(native.removeClass(clasName));
		}
	}
	
	shared JQuery removeClassCallback(String(Integer, String) callback) {
		dynamic {
			return JQuery(native.removeClass(callback));
		}
	}
	
	shared JQuery removeData(String* names) {
		dynamic {
			return JQuery(native.removeData(*names));
		}
	}
	
	shared JQuery removeProp(String propertyName) {
		dynamic {
			return JQuery(native.removeProp(propertyName));
		}
	}
	
	shared JQuery replaceAll(String|JQuery|Element target) {
		switch (target)
		case (is String) {
			dynamic {
				return JQuery(native.replaceAll(target));
			}
		}
		case (is JQuery|Element) {
			dynamic {
				return JQuery(native.replaceAll(target.native));
			}
		}
	}
	
	shared JQuery replaceWith(String|JQuery|Element newContent) {
		switch (newContent)
		case (is String) {
			dynamic {
				return JQuery(native.replaceWith(newContent));
			}
		}
		case (is JQuery|Element) {
			dynamic {
				return JQuery(native.replaceWith(newContent.native));
			}
		}
	}
	
	shared JQuery replaceWithCallback(String|JQuery|Element() callback) {
		dynamic {
			return JQuery(native.replaceWith(callback));
		}
	}
	
	shared JQuery resize(Anything(Anything) handler, dynamic eventData = null) {
		dynamic {
			return JQuery(native.resize(eventData, handler));
		}
	}
	
	shared JQuery scroll(Anything(Anything) handler, dynamic eventData = null) {
		dynamic {
			return JQuery(native.scroll(eventData, handler));
		}
	}
	
	shared JSNumber getScrollLeft() {
		dynamic {
			return JSNumber(native.scrollLeft());
		}
	}
	
	shared JQuery setScrollLeft(Integer val) {
		dynamic {
			return JQuery(native.scrollLeft(val));
		}
	}
	
	shared JSNumber getScrollTop() {
		dynamic {
			return JSNumber(native.scrollTop());
		}
	}
	
	shared JQuery setScrollTop(Integer val) {
		dynamic {
			return JQuery(native.scrollTop(val));
		}
	}
	
	shared JQuery select(Anything(Anything) handler, dynamic eventData = null) {
		dynamic {
			return JQuery(native.select(eventData, handler));
		}
	}
	
	shared JSString serialize() {
		dynamic {
			return JSString(native.serialize());
		}
	}

	shared JSArray serializeArray() {
		dynamic {
			return JSArray(native.serializeArray());
		}
	}
	
	shared JQuery show(String|Integer? duration = null, String? easing = null, Anything()? complete = null) {
		dynamic {
			return JQuery(native.show(duration, easing, handler));
		}
	}
	
	shared JQuery showOptions(AnimateOptions options) {
		dynamic {
			return JQuery(native.show(options.toNative()));
		}
	}
	
	shared JQuery siblings(String? siblings = null) {
		dynamic {
			return JQuery(native.siblings(siblings));
		}
	}
	
	shared JQuery slice(Integer start, Integer? end = null) {
		dynamic {
			return JQuery(native.slice(start, end));
		}
	}
	
	shared JQuery slideDown(String|Integer? duration = null, String? easing = null, Anything()? complete = null) {
		dynamic {
			return JQuery(native.slideDown(duration, easing, handler));
		}
	}
	
	shared JQuery slideDownOptions(AnimateOptions options) {
		dynamic {
			return JQuery(native.slideDown(options.toNative()));
		}
	}
	
	shared JQuery slideToggle(String|Integer? duration = null, String? easing = null, Anything()? complete = null) {
		dynamic {
			return JQuery(native.slideToggle(duration, easing, handler));
		}
	}
	
	shared JQuery slideToggleOptions(AnimateOptions options) {
		dynamic {
			return JQuery(native.slideToggle(options.toNative()));
		}
	}
	
	shared JQuery slideUp(String|Integer? duration = null, String? easing = null, Anything()? complete = null) {
		dynamic {
			return JQuery(native.slideUp(duration, easing, handler));
		}
	}
	
	shared JQuery slideUpOptions(AnimateOptions options) {
		dynamic {
			return JQuery(native.slideUp(options.toNative()));
		}
	}
	
	shared JQuery stop(Boolean? clearQueue = null, Boolean? jumpToEnd = null) {
		dynamic {
			return JQuery(native.stop(clearQueue, jumpToEnd));
		}
	}
	
	shared JQuery stopName(String queue, Boolean? clearQueue = null, Boolean? jumpToEnd = null) {
		dynamic {
			return JQuery(native.stop(queue, clearQueue, jumpToEnd));
		}
	}
	
	shared JQuery submit(dynamic eventData = null, Anything(Anything)? handler = null) {
		dynamic {
			return JQuery(native.submit(eventData, handler));
		}
	}
	
	shared JSString getText() {
		dynamic {
			return JSString(native.text());
		}
	}
	
	shared JQuery setText(String textString) {
		dynamic {
			return JQuery(native.text(textString));
		}
	}
	
	shared JQuery setTextCallback(String(Integer, String) callback) {
		dynamic {
			return JQuery(native.text(callback));
		}
	}
	
	shared JSArray toArray() {
		dynamic {
			return JSArray(native.toArray());
		}
	}
	
	shared JQuery toggle(String|Integer? duration = null, String? easing = null, Anything()? complete = null) {
		dynamic {
			return JQuery(native.toggle(duration, easing, handler));
		}
	}
	
	shared JQuery toggleOptions(AnimateOptions options) {
		dynamic {
			return JQuery(native.toggle(options.toNative()));
		}
	}
	
	shared JQuery toggleShowOrHide(Boolean showOrHide) {
		dynamic {
			return JQuery(native.toggle(showOrHide));
		}
	}
	
	shared JQuery toggleClass(Boolean? swit = null) {
		dynamic {
			return JQuery(native.toggleClass(swit));
		}
	}
	
	shared JQuery toggleClassName(String className, Boolean? swit = null) {
		dynamic {
			return JQuery(native.toggleClass(className, swit));
		}
	}
	
	shared JQuery toggleClassCallback(String(Integer, String, Boolean) callback, Boolean? swit = null) {
		dynamic {
			return JQuery(native.toggleClass(callback, swit));
		}
	}

	shared JQuery trigger(String|JQueryEvent event, Anything* extraParameters) {
		switch (event)
		case (is String) {
			dynamic {
				return JQuery(native.trigger(event, extraParameters));
			}
		}
		case (is JQueryEvent) {
			dynamic {
				return JQuery(native.trigger(event.native, extraParameters));
			}
		}
	}
	
	shared JQuery unbind(String|Event|JQueryEvent eventType) {
		switch (eventType)
		case (is String) {
			dynamic {
				return JQuery(native.unbind(eventType, false));
			}
		}
		case (is Event|JQueryEvent) {
			dynamic {
				return JQuery(native.unbind(eventType));
			}
		}
	}
	
	shared JQuery unbindCallaback(String? eventType = null, Anything(Anything)? callback = null) {
		dynamic {
			return JQuery(native.unbind(eventType, callback));
		}
	}
	
	shared JQuery undelegate(String? namespace = null) {
		dynamic {
			return JQuery(native.undelegate(namespace));
		}
	}
	
	shared JQuery undelegateCallback(String selector, String eventType, Anything(Anything)? callback = null) {
		dynamic {
			return JQuery(native.undelegate(selector, eventType, callback));
		}
	}
	
	// TODO figure out a type for events
	shared JQuery undelegateEvents(String selector, dynamic events) {
		dynamic {
			return JQuery(native.undelegate());
		}
	}
	
	shared JQuery unwrap() {
		dynamic {
			return JQuery(native.unwrap());
		}
	}
	
	shared JSString|JSNumber|JSArray getVal() {
		dynamic {
			dynamic val = native.val();
			if (val \instanceof \iString) {
				return JSString(val);
			} else if (arrayIsArray(val)) {
				return JSArray(val);
			} else {
				return JSNumber(val);
			}
			
		}
	}
	
	shared JQuery setVal(String* val) {
		dynamic {
			return JQuery(native.val(val));
		}
	}
	
	shared JQuery setValCallback(String(Integer, String) callback) {
		dynamic {
			return JQuery(native.val(callback));
		}
	}
	
	shared JSNumber getWidth() {
		dynamic {
			return JSNumber(native.width());
		}
	}
	
	shared JQuery setWidth(String|Integer width) {
		dynamic {
			return JQuery(native.width(width));
		}
	}
	
	shared JQuery setWidthCallback(String|Integer(Integer, Integer) callback) {
		dynamic {
			return JQuery(native.width(callback));
		}
	}
	
	shared JQuery wrap(String|Element|JQuery wrappingElement) {
		switch (wrappingElement)
		case (is String) {
			dynamic {
				return JQuery(native.wrap(wrappingElement));
			}
		}
		case (is Element|JQuery) {
			dynamic {
				return JQuery(native.wrap(wrappingElement.native));
			}
		}
	}
	
	shared JQuery wrapCallback(String|JQuery(Integer) callback) {
		dynamic {
			return JQuery(native.wrap(callback));
		}
	}
	
	shared JQuery wrapAll(String|Element|JQuery wrappingElement) {
		switch (wrappingElement)
		case (is String) {
			dynamic {
				return JQuery(native.wrapAll(wrappingElement));
			}
		}
		case (is Element|JQuery) {
			dynamic {
				return JQuery(native.wrapAll(wrappingElement.native));
			}
		}
	}
	
	shared JQuery wrapInner(String wrappingElement) {
		dynamic {
			return JQuery(native.wrapInner(wrappingElement));
		}
	}
	
	shared JQuery wrapInnerCallback(String(Integer) callback) {
		dynamic {
			return JQuery(native.wrapInner(callback));
		}
	}
	
}

shared class JQuery(dynamic n) extends JQueryAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}