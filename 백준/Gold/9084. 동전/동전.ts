// 입력 처리
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const T = Number(input[0]); // 테스트 케이스 수
let line = 1;

for (let t = 0; t < T; t++) {
  const N = Number(input[line++]); // 동전 종류 수
  const coins = input[line++].split(" ").map(Number); // 동전 금액 배열
  const M = Number(input[line++]); // 목표 금액

  // dp[i]: i원을 만드는 방법의 수
  const dp = new Array(M + 1).fill(0);
  dp[0] = 1; // 0원을 만드는 방법은 1가지(아무것도 선택 안 함)

  // 각 동전에 대해 금액을 누적하며 경우의 수 갱신
  for (let c = 0; c < N; c++) {
    const coin = coins[c];
    for (let amount = coin; amount <= M; amount++) {
      dp[amount] += dp[amount - coin];
    }
  }

  console.log(dp[M]); // 목표 금액을 만드는 방법의 수 출력
}