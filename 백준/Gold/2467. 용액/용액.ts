// 입력 처리
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

// 입력 파싱
const N = Number(input[0]);
const solutions = input[1].split(" ").map(Number);

// 투 포인터 알고리즘을 위한 정렬된 배열 (문제 조건상 이미 정렬된 상태)
let left = 0;            // 가장 왼쪽 인덱스 (음수일 가능성 높음)
let right = N - 1;       // 가장 오른쪽 인덱스 (양수일 가능성 높음)
let minSum = Infinity;   // 가장 0에 가까운 합을 저장
let result: [number, number] = [solutions[left], solutions[right]];

// 투 포인터 탐색
while (left < right) {
  const sum = solutions[left] + solutions[right];

  // 현재 합이 더 0에 가까우면 갱신
  if (Math.abs(sum) < minSum) {
    minSum = Math.abs(sum);
    result = [solutions[left], solutions[right]];
  }

  // 합이 0보다 작으면 값을 크게 만들어야 하므로 left 증가
  if (sum < 0) {
    left++;
  } else {
    // 합이 0보다 크거나 같으면 값을 작게 만들어야 하므로 right 감소
    right--;
  }
}

// 결과는 오름차순으로 출력
console.log(result[0], result[1]);