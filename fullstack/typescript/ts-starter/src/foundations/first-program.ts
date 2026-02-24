export{};
// Example 1
console.log("Hello, TypeScript");

// Example 2
function greet(name: string) {
  console.log("Hello", name);
}
greet("Sriram");

// Example 3 — optional param
function greetUser(name: string, age?: number) {
  console.log(name, age);
}
greetUser("Alex");
greetUser("Alex", 25);

// Example 4 — wrong usage
// greetUser(10); ❌