// Example 1
let x = 42;
// x = "hello"; ❌
console.log(x);

// Example 2
let y;
y = "hello";
y = 100;
console.log(y);

// Example 3 — explicit type
let z: number = 42;
// z = "test"; ❌
console.log(z);

// Example 4 — boolean inference
let loggedIn = false;
loggedIn = true;
console.log(loggedIn);