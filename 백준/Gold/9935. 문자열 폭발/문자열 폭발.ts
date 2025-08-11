const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const [str, bomb] = fs.readFileSync(path).toString().trim().split("\n");

const stack: string[] = [];
const bLen = bomb.length;

for (let ch of str) {
  stack.push(ch);
  if (stack.length >= bLen && stack.slice(-bLen).join("") === bomb) {
    stack.length -= bLen;
  }
}

console.log(stack.length ? stack.join("") : "FRULA");