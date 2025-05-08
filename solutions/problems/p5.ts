function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

// console.log(processValue("Hello")); // Output: 5
// console.log(processValue(10)); // Output: 20