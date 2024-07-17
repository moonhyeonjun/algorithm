const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const stack: number[] = [];
let result: string = "";

for (let i = 1; i < input.length; i++) {
  const command = input[i].split(" ");
  switch (command[0]) {
    case "push":
      stack.push(parseInt(command[1]));
      break;
    case "pop":
      result += stack.length ? stack.pop() + "\n" : "-1\n";
      break;
    case "size":
      result += stack.length + "\n";
      break;
    case "empty":
      result += stack.length ? "0\n" : "1\n";
      break;
    case "top":
      result += stack.length ? stack[stack.length - 1] + "\n" : "-1\n";
      break;
  }
}

console.log(result);