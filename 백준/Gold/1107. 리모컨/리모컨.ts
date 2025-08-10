const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const broken = M ? input[2].split(" ").map(Number) : [];

const isBroken = Array(10).fill(false);
for (const b of broken) isBroken[b] = true;

function canPress(num: number): boolean {
  if (num === 0) return !isBroken[0];
  while (num > 0) {
    if (isBroken[num % 10]) return false;
    num = Math.floor(num / 10);
  }
  return true;
}

let minPress = Math.abs(N - 100);

for (let ch = 0; ch <= 1000000; ch++) {
  if (canPress(ch)) {
    const pressCount = String(ch).length + Math.abs(N - ch);
    if (pressCount < minPress) minPress = pressCount;
  }
}

console.log(minPress);