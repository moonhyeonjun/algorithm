// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 줄에서 n(동전 종류 수), k(목표 금액) 추출
const [n, k] = input[0].split(" ").map(Number);

// 동전 목록 추출 및 중복 제거
const coins = [...new Set(input.slice(1, n + 1).map(Number))];

// dp[i] = i원을 만들기 위한 최소 동전 개수
const dp = new Array(k + 1).fill(Infinity);
dp[0] = 0; // 0원은 동전 0개로 만들 수 있음

// 각 동전에 대해 dp 배열 업데이트
for (const coin of coins) {
  for (let i = coin; i <= k; i++) {
    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
  }
}

// 결과 출력: k원을 만들 수 없으면 -1 출력
console.log(dp[k] === Infinity ? -1 : dp[k]);