export {};

// Example 1
function applyTwice(fn: (x: number) => number, val: number) {
  return fn(fn(val));
}
console.log(applyTwice(n => n * 2, 5));

// Example 2: wrong signature
// applyTwice((x: string) => x.length, 2); ❌

// Example 3: generic
function applyTwiceGeneric<T>(fn: (x: T) => T, val: T) {
  return fn(fn(val));
}
console.log(applyTwiceGeneric(s => s + "!", "Hi"));

// Example 4: array callback
console.log([1, 2, 3].map(n => n * 2));