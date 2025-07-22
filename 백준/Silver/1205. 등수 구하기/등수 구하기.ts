const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const [n, score, p] = input[0].split(" ").map(Number);
const scores = n > 0 ? input[1].split(" ").map(Number) : [];

let rank = 1;
let insertIdx = 0;

while (insertIdx < n) {
  if (scores[insertIdx] > score) {
    rank++;
    insertIdx++;
  } else break;
}

if (n === p && scores[p - 1] >= score) {
  console.log(-1);
} else {
  console.log(rank);
}