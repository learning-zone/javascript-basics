// Temporal API - New in ES2025
// ES2025 introduces a new date and time API called Temporal
// It addresses many of the limitations of the existing Date object

// The Temporal API provides a modern, immutable, and more intuitive way to work with dates and times
// It includes several objects for different date/time representations

// 1. Temporal.Now - Get current date and time in various formats
console.log("--- Temporal.Now ---");
console.log("Instant:", Temporal.Now.instant());
console.log("TimeZone:", Temporal.Now.timeZone());
console.log("PlainDate:", Temporal.Now.plainDate());
console.log("PlainTime:", Temporal.Now.plainTime());
console.log("PlainDateTime:", Temporal.Now.plainDateTime());
console.log("ZonedDateTime:", Temporal.Now.zonedDateTime());

// 2. Temporal.Instant - Represents a fixed point in time (like a timestamp)
console.log("\n--- Temporal.Instant ---");
const instant = Temporal.Instant.from("2025-06-01T12:30:45Z");
console.log("Instant:", instant.toString());
console.log("Epoch milliseconds:", instant.epochMilliseconds);
console.log("Epoch nanoseconds:", instant.epochNanoseconds);

// 3. Temporal.PlainDate - Represents a calendar date without time or timezone
console.log("\n--- Temporal.PlainDate ---");
const date = Temporal.PlainDate.from("2025-06-01");
console.log("Date:", date.toString());
console.log("Year:", date.year);
console.log("Month:", date.month);
console.log("Day:", date.day);
console.log("Day of week:", date.dayOfWeek);
console.log("Days in month:", date.daysInMonth);
console.log("Days in year:", date.daysInYear);
console.log("Is leap year:", date.inLeapYear);

// 4. Temporal.PlainTime - Represents wall-clock time without date or timezone
console.log("\n--- Temporal.PlainTime ---");
const time = Temporal.PlainTime.from("14:30:45.123");
console.log("Time:", time.toString());
console.log("Hour:", time.hour);
console.log("Minute:", time.minute);
console.log("Second:", time.second);
console.log("Millisecond:", time.millisecond);

// 5. Temporal.PlainDateTime - Combines date and time without timezone
console.log("\n--- Temporal.PlainDateTime ---");
const dateTime = Temporal.PlainDateTime.from("2025-06-01T14:30:45");
console.log("DateTime:", dateTime.toString());
console.log("Date component:", dateTime.toPlainDate().toString());
console.log("Time component:", dateTime.toPlainTime().toString());

// 6. Temporal.ZonedDateTime - Full date, time, and timezone information
console.log("\n--- Temporal.ZonedDateTime ---");
const zonedDateTime = Temporal.ZonedDateTime.from("2025-06-01T14:30:45+02:00[Europe/Paris]");
console.log("ZonedDateTime:", zonedDateTime.toString());
console.log("TimeZone:", zonedDateTime.timeZone.toString());
console.log("Offset:", zonedDateTime.offset);
console.log("Epoch nanoseconds:", zonedDateTime.epochNanoseconds);

// 7. Temporal.Duration - Represents a length of time
console.log("\n--- Temporal.Duration ---");
const duration = Temporal.Duration.from({
  years: 1,
  months: 2,
  days: 15,
  hours: 12,
  minutes: 30,
  seconds: 45
});
console.log("Duration:", duration.toString());
console.log("Total days:", duration.total("days"));
console.log("Total hours:", duration.total("hours"));

// 8. Temporal.TimeZone - Represents a timezone
console.log("\n--- Temporal.TimeZone ---");
const timeZone = Temporal.TimeZone.from("America/New_York");
console.log("TimeZone:", timeZone.toString());
console.log("Current offset:", timeZone.getOffsetStringFor(Temporal.Now.instant()));

// 9. Temporal.Calendar - Represents a calendar system
console.log("\n--- Temporal.Calendar ---");
const calendar = Temporal.Calendar.from("iso8601");
console.log("Calendar:", calendar.toString());
console.log("Days in month:", calendar.daysInMonth(2025, 2));
console.log("Days in year:", calendar.daysInYear(2025));
console.log("Is leap year:", calendar.inLeapYear(2025));

// 10. Date Arithmetic - Adding and subtracting durations
console.log("\n--- Date Arithmetic ---");
const startDate = Temporal.PlainDate.from("2025-01-15");
const endDate = startDate.add({ months: 1, days: 20 });
console.log("Start date:", startDate.toString());
console.log("End date:", endDate.toString());
console.log("Difference:", startDate.until(endDate).toString());

// 11. Comparing Dates and Times
console.log("\n--- Comparing Dates and Times ---");
const date1 = Temporal.PlainDate.from("2025-06-01");
const date2 = Temporal.PlainDate.from("2025-07-15");
console.log("date1 < date2:", date1.compare(date2) < 0);
console.log("date1 > date2:", date1.compare(date2) > 0);
console.log("date1 == date2:", date1.compare(date2) === 0);

// 12. Formatting Dates and Times
console.log("\n--- Formatting Dates and Times ---");
const formatDate = Temporal.PlainDate.from("2025-06-01");
console.log("ISO format:", formatDate.toString());
console.log("Custom format (using Intl):", 
  new Intl.DateTimeFormat("en-US", { 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  }).format(new Date(2025, 5, 1))
);

// 13. Practical Examples
console.log("\n--- Practical Examples ---");

// Example 1: Calculate age
function calculateAge(birthDate) {
  const today = Temporal.Now.plainDate();
  const age = birthDate.until(today).years;
  return age;
}

const birthDate = Temporal.PlainDate.from("1990-05-15");
console.log("Age:", calculateAge(birthDate));

// Example 2: Add business days (skip weekends)
function addBusinessDays(date, days) {
  let result = date;
  let daysAdded = 0;
  
  while (daysAdded < days) {
    result = result.add({ days: 1 });
    // Skip weekends (6 = Saturday, 7 = Sunday)
    if (result.dayOfWeek !== 6 && result.dayOfWeek !== 7) {
      daysAdded++;
    }
  }
  
  return result;
}

const startBusinessDate = Temporal.PlainDate.from("2025-06-01");
console.log("Start date:", startBusinessDate.toString());
console.log("After 10 business days:", addBusinessDays(startBusinessDate, 10).toString());

// Example 3: Flight duration between timezones
function calculateFlightDuration(departure, arrival) {
  const departureTZ = Temporal.ZonedDateTime.from(departure);
  const arrivalTZ = Temporal.ZonedDateTime.from(arrival);
  const duration = departureTZ.until(arrivalTZ);
  return duration;
}

const flightDeparture = "2025-06-01T08:30:00-04:00[America/New_York]";
const flightArrival = "2025-06-01T22:15:00+02:00[Europe/Paris]";
console.log("Flight duration:", calculateFlightDuration(flightDeparture, flightArrival).toString());