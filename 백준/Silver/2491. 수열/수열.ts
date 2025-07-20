const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const n = +input[0];
const seq = input[1].split(" ").map(Number);

let inc = 1;
let dec = 1;
let maxLen = 1;

for (let i = 1; i < n; i++) {
  if (seq[i] > seq[i - 1]) {
    inc += 1;
    dec = 1;
  } else if (seq[i] < seq[i - 1]) {
    dec += 1;
    inc = 1;
  } else {
    inc += 1;
    dec += 1;
  }
  maxLen = Math.max(maxLen, inc, dec);
}

console.log(maxLen);