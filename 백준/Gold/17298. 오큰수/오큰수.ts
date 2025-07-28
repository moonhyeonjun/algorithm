const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);
const res = new Array(n).fill(-1);
const stk: number[] = [];

for (let i = 0; i < n; i++) {
  while (stk.length && arr[stk[stk.length - 1]] < arr[i]) {
    const idx = stk.pop()!;
    res[idx] = arr[i];
  }
  stk.push(i);
}

console.log(res.join(" "));