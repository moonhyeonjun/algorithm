const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const N = Number(input[0]);
const K = Number(input[1]);
const sensors = input[2].split(" ").map(Number).sort((a, b) => a - b);

if (K >= N) {
  console.log(0);
  process.exit(0);
}

const gaps: number[] = [];
for (let i = 1; i < N; i++) {
  gaps.push(sensors[i] - sensors[i - 1]);
}

gaps.sort((a, b) => b - a);
const minTotalLength = gaps.slice(K - 1).reduce((acc, cur) => acc + cur, 0);

console.log(minTotalLength);