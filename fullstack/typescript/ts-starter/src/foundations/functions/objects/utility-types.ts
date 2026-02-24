export {};

type Person = {
  name: string;
  age: number;
  city: string;
};

// Example 1: Partial
const p1: Partial<Person> = { name: "Sriram" };

// Example 2: Pick
const p2: Pick<Person, "name"> = { name: "Alex" };

// Example 3: Omit
const p3: Omit<Person, "age"> = {
  name: "John",
  city: "Pune",
};

// Example 4: combined
type PersonPreview = Partial<Pick<Person, "name" | "city">>;
const preview: PersonPreview = { city: "Delhi" };