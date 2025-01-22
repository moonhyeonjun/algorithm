// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();
const N: number = parseInt(input, 10);

// 제곱수의 최소 항 개수를 저장할 DP 배열 초기화
const dp: number[] = Array(N + 1).fill(Infinity);
dp[0] = 0; // 0을 제곱수 합으로 표현할 때 항의 개수는 0

// 제곱수 항 계산
for (let i = 1; i * i <= N; i++) {
  const square = i * i;
  for (let j = square; j <= N; j++) {
    dp[j] = Math.min(dp[j], dp[j - square] + 1);
  }
}

// 결과 출력
console.log(dp[N]);