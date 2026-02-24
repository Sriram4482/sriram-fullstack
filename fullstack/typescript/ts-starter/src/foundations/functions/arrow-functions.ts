export {};

// Example 1
const square = (n: number): number => n * n;
console.log(square(4));

// Example 2: inferred
const cube = (n: number) => n * n * n;

// Example 3: arrow in filter
const evens = [1, 2, 3, 4].filter(n => n % 2 === 0);
console.log(evens);

// Example 4: reduce
const total = [1, 2, 3].reduce((a, b) => a + b, 0);
console.log(total);