// drill-04-union-types.ts

let userId: string | number;

userId = "USR101";
console.log(userId);

userId = 101;
console.log(userId);

// function with union
function printId(id: string | number) {
  console.log("ID:", id);
}

printId("A12");
printId(12);

// arrays with unions
let mixed: (string | number)[] = ["apple", 10, "banana", 20];
console.log(mixed);

// ❌ invalid
// userId = true;