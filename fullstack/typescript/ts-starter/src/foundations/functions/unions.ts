export {};

// Example 1
function format(value: string | number) {
  return typeof value === "string"
    ? value.toUpperCase()
    : value.toFixed(2);
}
console.log(format("hi"));
console.log(format(10));

// Example 2: Add boolean
function format2(val: string | number | boolean) {
  if (typeof val === "boolean") return val ? "YES" : "NO";
  return String(val);
}
console.log(format2(true));

// Example 3: Union return
function length(input: string | any[]) {
  return input.length;
}

// Example 4: Error if unhandled
// function bad(x: string | number) {
//   return x.toUpperCase(); ❌
// }