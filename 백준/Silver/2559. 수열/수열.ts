// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력값 파싱
const [N, K]: number[] = input[0].split(" ").map(Number); // N: 날짜 수, K: 연속적인 날짜 수
const temperatures: number[] = input[1].split(" ").map(Number); // 온도 배열

// 슬라이딩 윈도우 알고리즘 적용
let currentSum: number = 0; // 현재 윈도우 내 온도의 합
let maxSum: number = -Infinity; // 최대 합 (초기값은 가장 작은 값으로 설정)

// 첫 K일의 합 계산
for (let i = 0; i < K; i++) {
  currentSum += temperatures[i];
}
maxSum = currentSum;

// 슬라이딩 윈도우로 최대 합 찾기
for (let i = K; i < N; i++) {
  currentSum += temperatures[i] - temperatures[i - K]; // 윈도우 이동
  maxSum = Math.max(maxSum, currentSum); // 최대값 갱신
}

// 결과 출력
console.log(maxSum);