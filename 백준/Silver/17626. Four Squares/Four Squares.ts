// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

const n: number = parseInt(input, 10);

// 동적 프로그래밍 배열 초기화
const dp: number[] = new Array(n + 1).fill(Infinity);
dp[0] = 0; // 0은 제곱수 합이 0개

// 제곱수 합 계산
for (let i = 1; i * i <= n; i++) {
  const square = i * i;
  for (let j = square; j <= n; j++) {
    dp[j] = Math.min(dp[j], dp[j - square] + 1);
  }
}

// 결과 출력
console.log(dp[n]);