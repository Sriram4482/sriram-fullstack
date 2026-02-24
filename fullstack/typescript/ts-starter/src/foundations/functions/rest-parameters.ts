export {};

// Example 1: Sum numbers
function sumAll(...nums: number[]) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3));

// Example 2: Count arguments
function count(...items: string[]) {
  return items.length;
}
console.log(count("a", "b", "c"));

// Example 3: Mixed types
function joinAll(...values: (string | number)[]) {
  return values.join("-");
}
console.log(joinAll("A", 1, "B"));

// Example 4: Error case
// sumAll(1, "2"); ❌