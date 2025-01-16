// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 데이터 파싱
const N: number = Number(input[0]); // 수열의 크기
const A: number[] = input[1].split(" ").map(Number); // 수열 A

// 가장 긴 감소하는 부분 수열의 길이를 구하는 함수
function lds(n: number, arr: number[]): number {
  const dp: number[] = Array(n).fill(1); // DP 배열 초기화 (각 원소의 초기 길이는 1)

  // DP를 이용하여 각 위치에서의 최대 감소 부분 수열 길이 계산
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) { // 감소하는 경우만 고려
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // 결과: DP 배열에서의 최대값
  return Math.max(...dp);
}

// 결과 출력
console.log(lds(N, A));