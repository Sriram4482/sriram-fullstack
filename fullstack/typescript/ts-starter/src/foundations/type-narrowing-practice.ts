// Example 1
function processId(id: string | number): string {
  if (typeof id === "string") {
    return "ID: " + id.toUpperCase();
  }
  return "ID: " + id.toFixed(0);
}

// Example 2
console.log(processId("abc"));
console.log(processId(101));

// Example 3 — add boolean
function handleValue(val: string | number | boolean) {
  if (typeof val === "boolean") {
    console.log(val ? "YES" : "NO");
  }
}

// Example 4
handleValue(true);
handleValue("hello");