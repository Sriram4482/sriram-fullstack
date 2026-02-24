// Example 1
let value: unknown = "hello";
let length = (value as string).length;
console.log(length);

// Example 2 — risky assertion
let num: unknown = "123";
let forced = num as number;
console.log(forced); // runtime issue

// Example 3 — function with assertion
function getLength(val: unknown): number {
  return (val as string).length;
}
console.log(getLength("TypeScript"));

// Example 4 — safer approach
if (typeof value === "string") {
  console.log(value.length);
}