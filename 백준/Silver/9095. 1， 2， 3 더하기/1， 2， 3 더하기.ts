const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require('fs').readFileSync(filePath).toString().trim().split("\n");

const t = Number(input[0]);
const nList = input.slice(1).map((v) => Number(v));

let dp = Array.from({ length: 11 }, () => 0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < t; i++) {
    console.log(dp[nList[i]]);
}