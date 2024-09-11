const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

let result: string = "";
let stack: string[] = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === ".") {
    break;
  }

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(" || input[i][j] === "[") {
      stack.push(input[i][j]);
    } else if (input[i][j] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (input[i][j] === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else if (input[i][j] === ")" || input[i][j] === "]") {
      stack.push(input[i][j]);
    }
  }

  if (stack.length === 0) {
    result += "yes\n";
  } else {
    result += "no\n";
  }

  stack = [];
}

console.log(result);