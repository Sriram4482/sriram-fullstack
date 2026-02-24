export {};

interface Person {
  name: string;
  age: number;
}

// Example 1
interface Employee extends Person {
  role: string;
}

const emp: Employee = {
  name: "Sriram",
  age: 22,
  role: "Developer",
};

// Example 2: missing field
// const badEmp: Employee = { name: "A", role: "Dev" }; ❌

// Example 3: optional extension
interface Staff extends Person {
  department?: string;
}

const staff: Staff = { name: "Rahul", age: 30 };

// Example 4
console.log(emp, staff);