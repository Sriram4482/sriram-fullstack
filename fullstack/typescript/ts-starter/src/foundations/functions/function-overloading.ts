export {};

// Overloads
function toArray(x: string): string[];
function toArray(x: number): number[];

// Implementation
function toArray(x: string | number) {
  return [x];
}

console.log(toArray("hello"));
console.log(toArray(10));

// Error
// toArray(true); ❌