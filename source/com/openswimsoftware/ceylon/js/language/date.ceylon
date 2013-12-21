doc("create a native Date set to now")
shared JSDate createJSDateNow() {
	dynamic {
		return JSDate(\iDate());
	}
}

doc("create a native Date set to now")
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

doc("create a native date at the given date time")
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

doc("create a native date at the given date time")
shared JSDate createJSDateYMDInt(Integer year, Integer month, Integer day, Integer? hour = null, 
							Integer? minute = null, Integer? second = null, Integer? milli = null) {
	dynamic {
		return JSDate(\iDate(year, month, day, hour, minute, second, milli));
	}
}

doc("returns now as a unix timestamp")
shared JSNumber dateNow() {
	dynamic {
		return JSNumber(\iDate.now());
	}
}

doc("returns the given date string as a unix timestamp")
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

doc("returns the given date string as a unix timestamp")
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

doc("returns the given date string as a native Date")
shared JSDate dateUTCInt(Integer year, Integer month, Integer day, Integer? hour = null, 
							Integer? minute = null, Integer? second = null, Integer? milli = null) {
	dynamic {
		return JSDate(\iDate.\iUTC(year, month, day, hour, minute, second, milli));
	}
}

shared abstract class JSDateAbs() extends JSObjectAbs() {
	
	doc("returns the day of the month")
	shared JSNumber getDate() {
		dynamic {
			return JSNumber(native.getDate());
		}
	}
	
	doc("returns the day of the week")
	shared JSNumber getDay() {
		dynamic {
			return JSNumber(native.getDay());
		}
	}
	
	doc("returns the year")
	shared JSNumber getFullYear() {
		dynamic {
			return JSNumber(native.getFullYear());
		}
	}
	
	doc("returns the hour")
	shared JSNumber getHours() {
		dynamic {
			return JSNumber(native.getHours());
		}
	}
	
	doc("returns the milliseconds")
	shared JSNumber getMilliseconds() {
		dynamic {
			return JSNumber(native.getMilliseconds());
		}
	}
	
	doc("returns the minutes")
	shared JSNumber getMinutes() {
		dynamic {
			return JSNumber(native.getMinutes());
		}
	}
	
	doc("returns the month")
	shared JSNumber getMonth() {
		dynamic {
			return JSNumber(native.getMonth());
		}
	}
	
	doc("returns the seconds")
	shared JSNumber getSeconds() {
		dynamic {
			return JSNumber(native.getSeconds());
		}
	}
	
	doc("returns unix timestamp")
	shared JSNumber getTime() {
		dynamic {
			return JSNumber(native.getTime());
		}
	}
	
	doc("returns the timezone offset")
	shared JSNumber getTimezoneOffset() {
		dynamic {
			return JSNumber(native.getTimezoneOffset());
		}
	}
	
	doc("returns the day of the month in UTC")
	shared JSNumber getUTCDate() {
		dynamic {
			return JSNumber(native.getUTCDate());
		}
	}
	
	doc("returns the day of the week in UTC")
	shared JSNumber getUTCDay() {
		dynamic {
			return JSNumber(native.getUTCDay());
		}
	}
	
	doc("returns the year in UTC")
	shared JSNumber getUTCFullYear() {
		dynamic {
			return JSNumber(native.getUTCFullYear());
		}
	}
	
	doc("returns the hour in UTC")
	shared JSNumber getUTCHours() {
		dynamic {
			return JSNumber(native.getUTCHours());
		}
	}
	
	doc("returns the milliseconds in UTC")
	shared JSNumber getUTCMilliseconds() {
		dynamic {
			return JSNumber(native.getUTCMilliseconds());
		}
	}
	
	doc("returns the minutes in UTC")
	shared JSNumber getUTCMinutes() {
		dynamic {
			return JSNumber(native.getUTCMinutes());
		}
	}
	
	doc("returns the month in UTC")
	shared JSNumber getUTCMonth() {
		dynamic {
			return JSNumber(native.getUTCMonth());
		}
	}
	
	doc("returns the seconds in UTC")
	shared JSNumber getUTCSeconds() {
		dynamic {
			return JSNumber(native.getUTCSeconds());
		}
	}
	
	doc("set the day of the month")
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
	
	doc("set the year")
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
	
	doc("set the hour")
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
	
	doc("set the milliseconds")
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
	
	doc("set the minutes")
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
	
	doc("set the month")
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

	doc("set the seconds")
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
	
	doc("set the time as unix timestamp")
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
	
	doc("set the day of the month UTC")
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
	
	doc("set the year UTC")
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
	
	doc("set the hours UTC")
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
	
	doc("set the milliseconds UTC")
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
	
	doc("set the minutes UTC")
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
	
	doc("set the month UTC")
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
	
	doc("set the seconds UTC")
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
	
	doc("returns the date as a string")
	shared JSString toDateString() {
		dynamic {
			return JSString(native.toDateString());
		}
	}
	
	doc("returns the date as a ISO string")
	shared JSString toISOString() {
		dynamic {
			return JSString(native.toISOString());
		}
	}
	
	doc("returns the date as a JSON string")
	shared JSString toJSON() {
		dynamic {
			return JSString(native.toJSON());
		}
	}
	
	doc("returns the date as a language sensitive string")
	shared JSString toLocaleDateString() {
		dynamic {
			return JSString(native.toLocaleDateString());
		}
	}
	
	doc("returns the date as a language sensitive string")
	shared JSString toLocaleString() {
		dynamic {
			return JSString(native.toLocaleString());
		}
	}
	
	doc("returns the time as a language sensitive string")
	shared JSString toLocaleTimeString() {
		dynamic {
			return JSString(native.toLocaleTimeString());
		}
	}
	
	doc("returns the time a string")
	shared JSString toTimeString() {
		dynamic {
			return JSString(native.toTimeString());
		}
	}
	
	doc("returns the time a UTC string")
	shared JSString toUTCString() {
		dynamic {
			return JSString(native.toUTCString());
		}
	}
}

doc("native Date")
shared class JSDate(dynamic n) extends JSDateAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}