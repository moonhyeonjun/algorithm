// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N: number = parseInt(input[0]);
const P: number[] = input[1].split(" ").map(Number);

// DP 배열 초기화
const dp: number[] = Array(N + 1).fill(0);

// DP 계산
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + P[j - 1]);
  }
}

// 결과 출력
console.log(dp[N]);