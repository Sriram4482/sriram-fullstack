// Example 1 — any
let a: any = "hello";
a.toUpperCase();
a = 10;

// Example 2 — unknown
let b: unknown = "hello";
// b.toUpperCase(); ❌

// Example 3 — guard
if (typeof b === "string") {
  console.log(b.toUpperCase());
}

// Example 4 — comparison
function unsafe(x: any) {
  return x + 1;
}
function safe(x: unknown) {
  if (typeof x === "number") return x + 1;
  return 0;
}