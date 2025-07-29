const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const N = Number(input[0]);
const fruits = input[1].split(" ").map(Number);

const count = new Map();
let maxLen = 0;
let left = 0;

for (let right = 0; right < N; right++) {
  const fruit = fruits[right];
  count.set(fruit, (count.get(fruit) || 0) + 1);

  while (count.size > 2) {
    const leftFruit = fruits[left];
    count.set(leftFruit, count.get(leftFruit) - 1);
    if (count.get(leftFruit) === 0) count.delete(leftFruit);
    left++;
  }

  maxLen = Math.max(maxLen, right - left + 1);
}

console.log(maxLen);