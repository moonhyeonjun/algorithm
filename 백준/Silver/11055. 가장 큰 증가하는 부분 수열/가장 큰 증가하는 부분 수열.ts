// 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// N과 수열 A를 파싱
const N: number = Number(input[0]);
const A: number[] = input[1].split(" ").map(Number);

// 다이나믹 프로그래밍 배열 초기화
// dp[i]는 A[0]부터 A[i]까지의 증가하는 부분 수열 중 최대 합을 저장
const dp: number[] = [...A];

// DP 계산
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i]) {
      // 증가하는 경우, 최대 합 갱신
      dp[i] = Math.max(dp[i], dp[j] + A[i]);
    }
  }
}

// 결과 출력
// dp 배열에서 가장 큰 값이 정답
const result: number = Math.max(...dp);
console.log(result);