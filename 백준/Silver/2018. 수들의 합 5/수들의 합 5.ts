// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 입력 값 처리
const N: number = parseInt(input);

// 연속된 자연수의 합으로 나타내는 가지수를 저장할 변수
let count: number = 0;

// 두 포인터 초기화
let start: number = 1; // 시작 포인터 (첫 번째 자연수)
let end: number = 1;   // 끝 포인터 (마지막 자연수)
let sum: number = 1;   // 현재 구간의 합

while (start <= N) {
  if (sum === N) {
    // 현재 구간의 합이 N과 같다면 경우의 수를 증가
    count++;
    sum -= start; // 시작 포인터 값을 합에서 제외
    start++;      // 시작 포인터 이동
  } else if (sum < N) {
    // 현재 구간의 합이 N보다 작으면 끝 포인터를 확장
    end++;
    sum += end; // 새로운 끝 포인터 값을 합에 추가
  } else {
    // 현재 구간의 합이 N보다 크면 시작 포인터를 이동
    sum -= start;
    start++;
  }
}

// 결과 출력
console.log(count);