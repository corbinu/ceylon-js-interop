shared JSDate createJSDateNow() {
	dynamic {
		return JSDate(\iDate());
	}
}

shared JSDate createJSDate(String|Integer|JSNumber val) {
	dynamic {
		switch (val) 
		case (is String|Integer) {
			return JSDate(\iDate(val));
		}
		case (is JSNumber) {
			return JSDate(\iDate(val.native));
		}
	}
}

shared JSDate createJSDateYMD(JSNumber year, JSNumber month, JSNumber day, JSNumber? hour = null, 
							JSNumber? minute = null, JSNumber? second = null, JSNumber? milli = null) {
	switch (hour) 
	case (is JSNumber) {
		switch (minute)
		case (is JSNumber) {
			switch (second)
			case (is JSNumber) {
				switch (milli)
				case (is JSNumber) {
					dynamic {
						return JSDate(\iDate(year.native, month.native, day.native, hour.native, minute.native, second.native, milli.native));
					}
				}
				case (is Null) {
					dynamic {
						return JSDate(\iDate(year.native, month.native, day.native, hour.native, minute.native, second.native));
					}
				}
			}
			case (is Null) {
				switch (milli)
				case (is JSNumber) {
					dynamic {
						return JSDate(\iDate(year.native, month.native, day.native, hour.native, minute.native, null, milli.native));
					}
				}
				case (is Null) {
					dynamic {
						return JSDate(\iDate(year.native, month.native, day.native, hour.native, minute.native));
					}
				}
			}
		}
		case (is Null) {
			switch (second)
			case (is JSNumber) {
				switch (milli)
				case (is JSNumber) {
					dynamic {
						return JSDate(\iDate(year.native, month.native, day.native, null, null, second.native, milli.native));
					}
				}
				case (is Null) {
					dynamic {
						return JSDate(\iDate(year.native, month.native, day.native, null, null, second.native));
					}
				}
			}
			case (is Null) {
				switch (milli)
				case (is JSNumber) {
					dynamic {
						return JSDate(\iDate(year.native, month.native, day.native, null, null, null, milli.native));
					}
				}
				case (is Null) {
					dynamic {
						return JSDate(\iDate(year.native, month.native, day.native));
					}
				}
			}
		}
	}
	case (is Null) {
		switch (minute)
		case (is JSNumber) {
			switch (second)
			case (is JSNumber) {
				switch (milli)
				case (is JSNumber) {
					dynamic {
						return JSDate(\iDate(year.native, month.native, day.native, null, minute.native, second.native, milli.native));
					}
				}
				case (is Null) {
					dynamic {
						return JSDate(\iDate(year.native, month.native, day.native, null, minute.native, second.native));
					}
				}
			}
			case (is Null) {
				switch (milli)
				case (is JSNumber) {
					dynamic {
						return JSDate(\iDate(year.native, month.native, day.native, null, minute.native, null, milli.native));
					}
				}
				case (is Null) {
					dynamic {
						return JSDate(\iDate(year.native, month.native, day.native, null, minute.native));
					}
				}
			}
		}
		case (is Null) {
			switch (second)
			case (is JSNumber) {
				switch (milli)
				case (is JSNumber) {
					dynamic {
						return JSDate(\iDate(year.native, month.native, day.native, null, null, second.native, milli.native));
					}
				}
				case (is Null) {
					dynamic {
						return JSDate(\iDate(year.native, month.native, day.native, null, null, second.native));
					}
				}
			}
			case (is Null) {
				switch (milli)
				case (is JSNumber) {
					dynamic {
						return JSDate(\iDate(year.native, month.native, day.native, null, null, null, milli.native));
					}
				}
				case (is Null) {
					dynamic {
						return JSDate(\iDate(year.native, month.native, day.native));
					}
				}
			}
		}
	}
}

shared JSDate createJSDateYMDInt(Integer year, Integer month, Integer day, Integer? hour = null, 
							Integer? minute = null, Integer? second = null, Integer? milli = null) {
	dynamic {
		return JSDate(\iDate(year, month, day, hour, minute, second, milli));
	}
}

shared JSNumber dateNow() {
	dynamic {
		return JSNumber(\iDate.now());
	}
}

shared JSNumber dateParse(String|JSString dateTime) {
	switch (dateTime)
	case (is String) {
		dynamic {
			return JSNumber(\iDate.parse(dateTime));
		}
	}
	case (is JSString) {
		dynamic {
			return JSNumber(\iDate.parse(dateTime.native));
		}
	}
}

shared JSNumber dateUTC(JSNumber year, JSNumber month, JSNumber day, JSNumber? hour = null, 
							JSNumber? minute = null, JSNumber? second = null, JSNumber? milli = null) {
	switch (hour) 
	case (is JSNumber) {
		switch (minute)
		case (is JSNumber) {
			switch (second)
			case (is JSNumber) {
				switch (milli)
				case (is JSNumber) {
					dynamic {
						return JSNumber(\iDate.\iUTC(year.native, month.native, day.native, hour.native, minute.native, second.native, milli.native));
					}
				}
				case (is Null) {
					dynamic {
						return JSNumber(\iDate.\iUTC(year.native, month.native, day.native, hour.native, minute.native, second.native));
					}
				}
			}
			case (is Null) {
				switch (milli)
				case (is JSNumber) {
					dynamic {
						return JSNumber(\iDate.\iUTC(year.native, month.native, day.native, hour.native, minute.native, null, milli.native));
					}
				}
				case (is Null) {
					dynamic {
						return JSNumber(\iDate.\iUTC(year.native, month.native, day.native, hour.native, minute.native));
					}
				}
			}
		}
		case (is Null) {
			switch (second)
			case (is JSNumber) {
				switch (milli)
				case (is JSNumber) {
					dynamic {
						return JSNumber(\iDate.\iUTC(year.native, month.native, day.native, null, null, second.native, milli.native));
					}
				}
				case (is Null) {
					dynamic {
						return JSNumber(\iDate.\iUTC(year.native, month.native, day.native, null, null, second.native));
					}
				}
			}
			case (is Null) {
				switch (milli)
				case (is JSNumber) {
					dynamic {
						return JSNumber(\iDate.\iUTC(year.native, month.native, day.native, null, null, null, milli.native));
					}
				}
				case (is Null) {
					dynamic {
						return JSNumber(\iDate.\iUTC(year.native, month.native, day.native));
					}
				}
			}
		}
	}
	case (is Null) {
		switch (minute)
		case (is JSNumber) {
			switch (second)
			case (is JSNumber) {
				switch (milli)
				case (is JSNumber) {
					dynamic {
						return JSNumber(\iDate.\iUTC(year.native, month.native, day.native, null, minute.native, second.native, milli.native));
					}
				}
				case (is Null) {
					dynamic {
						return JSNumber(\iDate.\iUTC(year.native, month.native, day.native, null, minute.native, second.native));
					}
				}
			}
			case (is Null) {
				switch (milli)
				case (is JSNumber) {
					dynamic {
						return JSNumber(\iDate.\iUTC(year.native, month.native, day.native, null, minute.native, null, milli.native));
					}
				}
				case (is Null) {
					dynamic {
						return JSNumber(\iDate.\iUTC(year.native, month.native, day.native, null, minute.native));
					}
				}
			}
		}
		case (is Null) {
			switch (second)
			case (is JSNumber) {
				switch (milli)
				case (is JSNumber) {
					dynamic {
						return JSNumber(\iDate.\iUTC(year.native, month.native, day.native, null, null, second.native, milli.native));
					}
				}
				case (is Null) {
					dynamic {
						return JSNumber(\iDate.\iUTC(year.native, month.native, day.native, null, null, second.native));
					}
				}
			}
			case (is Null) {
				switch (milli)
				case (is JSNumber) {
					dynamic {
						return JSNumber(\iDate.\iUTC(year.native, month.native, day.native, null, null, null, milli.native));
					}
				}
				case (is Null) {
					dynamic {
						return JSNumber(\iDate.\iUTC(year.native, month.native, day.native));
					}
				}
			}
		}
	}
}

shared JSDate dateUTCInt(Integer year, Integer month, Integer day, Integer? hour = null, 
							Integer? minute = null, Integer? second = null, Integer? milli = null) {
	dynamic {
		return JSDate(\iDate.\iUTC(year, month, day, hour, minute, second, milli));
	}
}

shared class JSDate(dynamic n) extends JSObject(n) {
	
	shared JSNumber getDate() {
		dynamic {
			return JSNumber(native.getDate());
		}
	}
	
	shared JSNumber getDay() {
		dynamic {
			return JSNumber(native.getDay());
		}
	}
	
	shared JSNumber getFullYear() {
		dynamic {
			return JSNumber(native.getFullYear());
		}
	}
	
	shared JSNumber getHours() {
		dynamic {
			return JSNumber(native.getHours());
		}
	}
	
	shared JSNumber getMilliseconds() {
		dynamic {
			return JSNumber(native.getMilliseconds());
		}
	}
	
	shared JSNumber getMinutes() {
		dynamic {
			return JSNumber(native.getMinutes());
		}
	}
	
	shared JSNumber getMonth() {
		dynamic {
			return JSNumber(native.getMonth());
		}
	}
	
	shared JSNumber getSeconds() {
		dynamic {
			return JSNumber(native.getSeconds());
		}
	}
	
	shared JSNumber getTime() {
		dynamic {
			return JSNumber(native.getTime());
		}
	}
	
	shared JSNumber getTimezoneOffset() {
		dynamic {
			return JSNumber(native.getTimezoneOffset());
		}
	}
	
	shared JSNumber getUTCDate() {
		dynamic {
			return JSNumber(native.getUTCDate());
		}
	}
	
	shared JSNumber getUTCDay() {
		dynamic {
			return JSNumber(native.getUTCDay());
		}
	}
	
	shared JSNumber getUTCFullYear() {
		dynamic {
			return JSNumber(native.getUTCFullYear());
		}
	}
	
	shared JSNumber getUTCHours() {
		dynamic {
			return JSNumber(native.getUTCHours());
		}
	}
	
	shared JSNumber getUTCMilliseconds() {
		dynamic {
			return JSNumber(native.getUTCMilliseconds());
		}
	}
	
	shared JSNumber getUTCMinutes() {
		dynamic {
			return JSNumber(native.getUTCMinutes());
		}
	}
	
	shared JSNumber getUTCMonth() {
		dynamic {
			return JSNumber(native.getUTCMonth());
		}
	}
	
	shared JSNumber getUTCSeconds() {
		dynamic {
			return JSNumber(native.getUTCSeconds());
		}
	}
	
	shared void setDate(Integer|JSNumber day) {
		switch (day) 
		case (is Integer) {
			dynamic {
				native.setDate(day);
			}
		}
		case (is JSNumber) {
			dynamic {
				native.setDate(day.native);
			}
		}
	}
	
	shared void setFullYear(Integer|JSNumber year) {
		switch (year) 
		case (is Integer) {
			dynamic {
				native.setFullYear(year);
			}
		}
		case (is JSNumber) {
			dynamic {
				native.setFullYear(year.native);
			}
		}
	}
	
	shared void setHours(Integer|JSNumber hour) {
		switch (hour) 
		case (is Integer) {
			dynamic {
				native.setHours(hour);
			}
		}
		case (is JSNumber) {
			dynamic {
				native.setHours(hour.native);
			}
		}
	}
	
	shared void setMilliseconds(Integer|JSNumber milli) {
		switch (milli) 
		case (is Integer) {
			dynamic {
				native.setMilliseconds(milli);
			}
		}
		case (is JSNumber) {
			dynamic {
				native.setMilliseconds(milli.native);
			}
		}
	}
	
	shared void setMinutes(Integer|JSNumber minutes) {
		switch (minutes) 
		case (is Integer) {
			dynamic {
				native.setMinutes(minutes);
			}
		}
		case (is JSNumber) {
			dynamic {
				native.setMinutes(minutes.native);
			}
		}
	}
	
	shared void setMonth(Integer|JSNumber month) {
		switch (month) 
		case (is Integer) {
			dynamic {
				native.setMonth(month);
			}
		}
		case (is JSNumber) {
			dynamic {
				native.setMonth(month.native);
			}
		}
	}
	
	shared void setSeconds(Integer|JSNumber seconds) {
		switch (seconds) 
		case (is Integer) {
			dynamic {
				native.setSeconds(seconds);
			}
		}
		case (is JSNumber) {
			dynamic {
				native.setSeconds(seconds.native);
			}
		}
	}
	
	shared void setTime(Integer|JSNumber milli) {
		switch (milli) 
		case (is Integer) {
			dynamic {
				native.setTime(milli);
			}
		}
		case (is JSNumber) {
			dynamic {
				native.setTime(milli.native);
			}
		}
	}
	
	shared void setUTCDate(Integer|JSNumber day) {
		switch (day) 
		case (is Integer) {
			dynamic {
				native.setUTCDate(day);
			}
		}
		case (is JSNumber) {
			dynamic {
				native.setUTCDate(day.native);
			}
		}
	}
	
	shared void setUTCFullYear(Integer|JSNumber year) {
		switch (year) 
		case (is Integer) {
			dynamic {
				native.setUTCFullYear(year);
			}
		}
		case (is JSNumber) {
			dynamic {
				native.setUTCFullYear(year.native);
			}
		}
	}
	
	shared void setUTCHours(Integer|JSNumber hours) {
		switch (hours) 
		case (is Integer) {
			dynamic {
				native.setUTCHours(hours);
			}
		}
		case (is JSNumber) {
			dynamic {
				native.setUTCHours(hours.native);
			}
		}
	}
	
	shared void setUTCMilliseconds(Integer|JSNumber milli) {
		switch (milli) 
		case (is Integer) {
			dynamic {
				native.setUTCMilliseconds(milli);
			}
		}
		case (is JSNumber) {
			dynamic {
				native.setUTCMilliseconds(milli.native);
			}
		}
	}
	
	shared void setUTCMinutes(Integer|JSNumber minutes) {
		switch (minutes) 
		case (is Integer) {
			dynamic {
				native.setUTCMinutes(minutes);
			}
		}
		case (is JSNumber) {
			dynamic {
				native.setUTCMinutes(minutes.native);
			}
		}
	}
	
	shared void setUTCMonth(Integer|JSNumber month) {
		switch (month) 
		case (is Integer) {
			dynamic {
				native.setUTCMonth(month);
			}
		}
		case (is JSNumber) {
			dynamic {
				native.setUTCMonth(month.native);
			}
		}
	}
	
	shared void setUTCSeconds(Integer|JSNumber seconds) {
		switch (seconds) 
		case (is Integer) {
			dynamic {
				native.setUTCSeconds(seconds);
			}
		}
		case (is JSNumber) {
			dynamic {
				native.setUTCSeconds(seconds.native);
			}
		}
	}
	
	shared JSString toDateString() {
		dynamic {
			return JSString(native.toDateString());
		}
	}
	
	shared JSString toISOString() {
		dynamic {
			return JSString(native.toISOString());
		}
	}
	
	shared JSString toJSON() {
		dynamic {
			return JSString(native.toJSON());
		}
	}
	
	shared JSString toLocaleDateString() {
		dynamic {
			return JSString(native.toLocaleDateString());
		}
	}
	
	shared JSString toLocaleString() {
		dynamic {
			return JSString(native.toLocaleString());
		}
	}
	
	shared JSString toLocaleTimeString() {
		dynamic {
			return JSString(native.toLocaleTimeString());
		}
	}
	
	shared JSString toTimeString() {
		dynamic {
			return JSString(native.toTimeString());
		}
	}
	
	shared JSString toUTCString() {
		dynamic {
			return JSString(native.toUTCString());
		}
	}
	
	shared JSString toString() {
		dynamic {
			return JSString(native.toString());
		}
	}
	
}