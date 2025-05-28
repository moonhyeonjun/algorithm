// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const MOD = 1_000_000_009;
const cases = input.slice(1).map(Number);

// n의 최대값 계산
const MAX = Math.max(...cases);

// dp[n][last] : 합이 n이고 마지막 수가 last일 때의 경우의 수
const dp: number[][] = Array.from({ length: MAX + 1 }, () => Array(4).fill(0));

// 초기값 설정
if (1 <= MAX) dp[1][1] = 1; // 1
if (2 <= MAX) dp[2][2] = 1; // 2
if (3 <= MAX) {
  dp[3][1] = 1; // 2+1
  dp[3][2] = 1; // 1+2
  dp[3][3] = 1; // 3
}

// DP 테이블 채우기
for (let i = 4; i <= MAX; i++) {
  dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % MOD;
  dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % MOD;
  dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % MOD;
}

// 각 테스트 케이스 출력
const result = cases.map(n => {
  const total = (dp[n][1] + dp[n][2] + dp[n][3]) % MOD;
  return total;
});

console.log(result.join("\n"));