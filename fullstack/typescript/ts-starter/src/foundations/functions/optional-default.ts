export {};

// Example 1: Optional parameter
function greet(name: string, age?: number) {
  console.log(name, age);
}
greet("Sriram");
greet("Sriram", 22);

// Example 2: Default parameter
function greet2(name: string, age: number = 18) {
  console.log(name, age);
}
greet2("Alex");
greet2("Alex", 25);

// Example 3: Optional boolean
function setActive(user: string, active?: boolean) {
  console.log(user, active ?? false);
}
setActive("User1");

// Example 4: Default string
function role(name: string, role: string = "user") {
  console.log(name, role);
}
role("Admin", "admin");