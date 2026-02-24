export{};
// Example 1
const user: { name: string; age: number; active: boolean } = {
  name: "John",
  age: 30,
  active: true,
};

// Example 2
// user.age = "thirty"; ❌

// Example 3 — optional
const admin: { name: string; role?: string } = {
  name: "Admin",
};

// Example 4
admin.role = "manager";
console.log(admin);