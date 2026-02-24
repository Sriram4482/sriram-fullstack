export {};

// Example 1
type Person = {
  name: string;
  age: number;
};

const p1: Person = { name: "Sriram", age: 22 };

// Example 2: wrong type
// const p2: Person = { name: "Alex", age: "22" }; ❌

// Example 3: readonly field
type User = {
  readonly id: string;
  name: string;
};

const u1: User = { id: "u1", name: "John" };

// u1.id = "u2"; ❌ cannot reassign

// Example 4
console.log(p1, u1);