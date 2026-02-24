export {};

// Example 1: Record
const prices: Record<string, number> = {
  apple: 100,
  banana: 40,
};

// Example 2
prices.orange = 60;

// Example 3: Map
type Person = { name: string; age: number };

const people = new Map<string, Person>();
people.set("u1", { name: "Sriram", age: 22 });

// Example 4
console.log(prices);
console.log(people.get("u1"));