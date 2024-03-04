// Get the current date
const currentDate = new Date();

// Get the current month and year
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

// Function to generate the calendar
function generateCalendar(month, year) {
  // Create a new date object for the first day of the month
  const firstDay = new Date(year, month, 1);

  // Get the number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Get the index of the first day (0 - Sunday, 1 - Monday, etc.)
  const firstDayIndex = firstDay.getDay();

  // Create an array to store the calendar
  const calendar = [];

  // Generate the calendar
  let day = 1;
  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayIndex) {
        // Add empty cells before the first day of the month
        week.push("");
      } else if (day > daysInMonth) {
        // Add empty cells after the last day of the month
        week.push("");
      } else {
        // Add the day to the calendar
        week.push(day);
        day++;
      }
    }
    calendar.push(week);
  }

  return calendar;
}

// Generate the calendar for the current month and year
const calendar = generateCalendar(currentMonth, currentYear);

// Print the calendar
console.log(calendar);
