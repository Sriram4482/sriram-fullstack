export{};
// Example 1
let name: string = "Sriram";
let age: number = 22;
let isActive: boolean = true;
console.log(name, age, isActive);

// Example 2 — any
let data: any = "hello";
data = 10;
data = true;
console.log(data);

// Example 3 — unknown (safe)
let value: unknown = "typescript";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// Example 4 — const inference
const country = "India";
// country = "USA"; ❌ error
console.log(country);