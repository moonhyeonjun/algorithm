const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const isbn = fs.readFileSync(path).toString().trim().split("");

const weights = [1, 3]; // 가중치 1, 3 반복
let missingIndex = -1;
let sum = 0;

for (let i = 0; i < 13; i++) {
  const char = isbn[i];

  if (char === "*") {
    missingIndex = i;
    continue;
  }

  const digit = Number(char);
  const weight = weights[i % 2];

  sum += digit * weight;
}

const missingWeight = weights[missingIndex % 2];

for (let i = 0; i <= 9; i++) {
  const total = sum + i * missingWeight;
  if (total % 10 === 0) {
    console.log(i);
    break;
  }
}