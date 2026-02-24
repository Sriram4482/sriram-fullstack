export {};

// Example 1: Simple add
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3));

// Example 2: Inferred return type
function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(4, 5));

// Example 3: void function
function logMessage(msg: string): void {
  console.log(msg);
}
logMessage("Hello TS");

// Example 4: Error case (uncomment to see)
// function wrong(): void {
//   return 10; // ❌ cannot return from void
// }