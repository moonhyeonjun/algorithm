// 파일 읽기
const fs = require("fs");
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = fs.readFileSync(filePath).toString().trim();

// 입력 값 숫자로 변환
const N: number = Number(input);

// DP 배열 초기화 (BigInt 사용)
const dp: bigint[][] = new Array(N + 1).fill(null).map(() => [BigInt(0), BigInt(0)]);

// 초기값 설정
dp[1] = [BigInt(0), BigInt(1)];  // 1자리일 때 이친수는 '1' 하나

// 점화식 적용
for (let i = 2; i <= N; i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 1][1];  // 마지막 자리가 0인 경우
  dp[i][1] = dp[i - 1][0];                 // 마지막 자리가 1인 경우
}

// 최종 결과 출력
console.log((dp[N][0] + dp[N][1]).toString());