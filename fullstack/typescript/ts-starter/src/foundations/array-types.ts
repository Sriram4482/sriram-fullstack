export{};
// Example 1
const numbers: number[] = [1, 2, 3];

// Example 2
const names: Array<string> = ["Alice", "Bob"];

// Example 3 — union array
const mixed: (string | number)[] = ["hi", 1, "bye"];

// Example 4 — safe access
function getFirst(arr: string[]): string | undefined {
  return arr[0];
}
console.log(getFirst([]));