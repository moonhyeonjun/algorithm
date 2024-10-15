// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

const MOD = 15746;

// 입력 처리
const N: number = parseInt(input);

// DP 배열 생성
const dp: number[] = new Array(N + 1).fill(0);

// 초기값 설정
dp[1] = 1;
if (N >= 2) dp[2] = 2;

// DP 점화식 계산
for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
}

// 결과 출력
console.log(dp[N]);