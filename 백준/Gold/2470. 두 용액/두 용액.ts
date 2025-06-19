// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 파싱
const N = Number(input[0]);
const liquids = input[1].split(" ").map(Number);

// 특성값 배열을 오름차순으로 정렬
liquids.sort((a, b) => a - b);

// 투 포인터 초기화
let left = 0;
let right = N - 1;

let minDiff = Infinity; // 최소 차이
let ansLeft = liquids[left];
let ansRight = liquids[right];

// 투 포인터 탐색
while (left < right) {
  const sum = liquids[left] + liquids[right];
  const absSum = Math.abs(sum);

  // 현재 조합이 더 0에 가까운 경우 갱신
  if (absSum < minDiff) {
    minDiff = absSum;
    ansLeft = liquids[left];
    ansRight = liquids[right];
  }

  // 합이 음수면 왼쪽 포인터를 오른쪽으로 이동 (더 큰 값 필요)
  if (sum < 0) {
    left++;
  }
  // 합이 양수면 오른쪽 포인터를 왼쪽으로 이동 (더 작은 값 필요)
  else {
    right--;
  }
}

// 결과 출력 (오름차순)
console.log(`${ansLeft} ${ansRight}`);