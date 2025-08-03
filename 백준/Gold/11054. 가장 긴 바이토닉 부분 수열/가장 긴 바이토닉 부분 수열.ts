const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const up = Array(n).fill(1);
const down = Array(n).fill(1);

// LIS
for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i] && up[i] < up[j] + 1) {
      up[i] = up[j] + 1;
    }
  }
}

// LDS
for (let i = n - 2; i >= 0; i--) {
  for (let j = n - 1; j > i; j--) {
    if (arr[j] < arr[i] && down[i] < down[j] + 1) {
      down[i] = down[j] + 1;
    }
  }
}

let maxLen = 0;
for (let i = 0; i < n; i++) {
  maxLen = Math.max(maxLen, up[i] + down[i] - 1);
}

console.log(maxLen);