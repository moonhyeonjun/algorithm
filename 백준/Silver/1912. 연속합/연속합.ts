const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n: number = +input[0];
const numbers: number[] = input[1].split(" ").map((num) => +num);

let dp: number[] = Array(n).fill(0);
dp[0] = numbers[0];
let max: number = numbers[0];

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i - 1] + numbers[i], numbers[i]);
  max = Math.max(max, dp[i]);
}

console.log(max);