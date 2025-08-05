const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const [[n, s], arr] = fs.readFileSync(path).toString().trim().split('\n').map(v => v.split(' ').map(Number));

let sum = 0, len = Infinity, l = 0;

for (let r = 0; r < n; r++) {
  sum += arr[r];
  while (sum >= s) {
    len = Math.min(len, r - l + 1);
    sum -= arr[l++];
  }
}

console.log(len === Infinity ? 0 : len);