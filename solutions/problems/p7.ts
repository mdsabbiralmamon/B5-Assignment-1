enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

// console.log(getDayType(Day.Monday))   // Output: "Weekday"
// console.log(getDayType(Day.Sunday))   // Output: "Weekend"