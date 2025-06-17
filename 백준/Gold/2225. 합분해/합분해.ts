// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const [n, k] = input.map(Number);

const MOD = 1_000_000_000;

// DP 테이블 초기화
// dp[i][j] => 정수 i를 j개의 정수 합으로 표현하는 방법의 수
const dp: number[][] = Array.from({ length: n + 1 }, () =>
  Array(k + 1).fill(0)
);

// 초기값 설정
// 정수 0을 j개의 수로 표현하는 경우는 1가지 (모두 0으로 구성)
for (let j = 1; j <= k; j++) {
  dp[0][j] = 1;
}

// 점화식 적용
// dp[i][j] = dp[i][j-1] + dp[i-1][j-1] + ... + dp[0][j-1]
// 이를 누적해서 구하면 아래와 같은 간단한 점화식이 됨:
// dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
for (let i = 1; i <= n; i++) {
  dp[i][1] = 1; // 정수 i를 1개의 수로 표현하는 경우는 1가지
}

for (let i = 1; i <= n; i++) {
  for (let j = 2; j <= k; j++) {
    // i를 j개의 정수로 만드는 방법 = 
    // i를 j-1개의 정수로 만드는 방법 + (i-1을 j개의 정수로 만드는 방법)
    dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % MOD;
  }
}

// 정답 출력
console.log(dp[n][k]);