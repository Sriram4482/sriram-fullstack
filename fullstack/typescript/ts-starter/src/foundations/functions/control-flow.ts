export {};

// Example 1: if
function isEven(n: number): boolean {
  return n % 2 === 0;
}
console.log(isEven(4));

// Example 2: while
let count = 3;
while (count > 0) {
  console.log(count);
  count--;
}

// Example 3: switch
type Action = "start" | "stop";
function handle(action: Action) {
  switch (action) {
    case "start":
      console.log("Started");
      break;
    case "stop":
      console.log("Stopped");
      break;
    default:
      const _never: never = action;
  }
}
handle("start");

// Example 4: loop safety
for (let i = 0; i < 3; i++) {
  console.log(i);
}