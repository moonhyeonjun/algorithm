const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const [n, c] = input[0].split(" ").map(Number);
const houses = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

const canPlace = (dist: number): boolean => {
  let count = 1;
  let lastPos = houses[0];

  for (let i = 1; i < n; i++) {
    if (houses[i] - lastPos >= dist) {
      count++;
      lastPos = houses[i];
    }
  }

  return count >= c;
};

let left = 1;
let right = houses[n - 1] - houses[0];
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (canPlace(mid)) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);