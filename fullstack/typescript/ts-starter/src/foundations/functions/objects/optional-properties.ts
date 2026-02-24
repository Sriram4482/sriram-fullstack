export {};

type Person = {
  name: string;
  age: number;
  middleName?: string;
};

// Example 1
const p1: Person = { name: "Sriram", age: 22 };

// Example 2
const p2: Person = {
  name: "Rahul",
  age: 25,
  middleName: "Kumar",
};

// Example 3: safe access
console.log(p1.middleName?.toUpperCase());

// Example 4: unsafe (error)
// console.log(p1.middleName.toUpperCase()); ❌