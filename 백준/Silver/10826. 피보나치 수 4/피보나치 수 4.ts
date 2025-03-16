// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// BigInt로 변환
const N: number = parseInt(input);

// DP 배열 초기화
const dp: bigint[] = Array(N + 1).fill(BigInt(0));
dp[1] = BigInt(1);
dp[2] = BigInt(1);

// 작은 입력값 예외 처리
if (N <= 2) {
  console.log(dp[input].toString());
  process.exit();
}

// 피보나치 수 계산 (BigInt 사용)
for (let i = 3; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

// 결과 출력
console.log(dp[input].toString());