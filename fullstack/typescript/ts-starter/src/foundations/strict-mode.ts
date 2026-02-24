export{};
// Example 1
let age: number;
// console.log(age); ❌ error

// Example 2
function add(a: number, b: number) {
  return a + b;
}
console.log(add(2, 3));

// Example 3 — explicit return
function multiply(a: number, b: number): number {
  return a * b;
}

// Example 4 — optional parameter
function greet(name?: string) {
  if (name) console.log("Hello", name);
  else console.log("Hello Guest");
}
greet();
greet("Sriram");