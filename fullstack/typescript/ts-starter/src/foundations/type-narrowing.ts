// Example 1
function printValue(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase());
  } else {
    console.log(val * 2);
  }
}
printValue("hi");
printValue(10);

// Example 2 — null handling
function showName(name: string | null) {
  if (name === null) {
    console.log("No name");
  } else {
    console.log(name);
  }
}
showName("Sriram");
showName(null);

// Example 3 — instanceof
function showDate(d: Date | string) {
  if (d instanceof Date) {
    console.log(d.toDateString());
  } else {
    console.log(d);
  }
}
showDate(new Date());
showDate("today");

// Example 4 — Array narrowing
function printItems(items: string[] | string) {
  if (Array.isArray(items)) {
    console.log(items.join(", "));
  } else {
    console.log(items);
  }
}