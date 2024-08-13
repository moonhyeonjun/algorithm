const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0]);
const N = input.slice(1).map((n) => parseInt(n));

const dp = Array.from({ length: 101 }, () => 0);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2;
dp[5] = 2;

for (let i = 6; i <= 100; i++) {
  dp[i] = dp[i - 1] + dp[i - 5];
}

for (let i = 0; i < T; i++) {
  console.log(dp[N[i]]);
}