// 입력 처리
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const [H, W] = input[0].split(" ").map(Number);  // H: 세로, W: 가로
const height = input[1].split(" ").map(Number);  // 각 위치의 블록 높이

// 왼쪽, 오른쪽에서의 최대 높이 배열
const maxLeft: number[] = Array(W).fill(0);
const maxRight: number[] = Array(W).fill(0);

// 왼쪽에서의 최대값을 저장
maxLeft[0] = height[0];
for (let i = 1; i < W; i++) {
  maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
}

// 오른쪽에서의 최대값을 저장
maxRight[W - 1] = height[W - 1];
for (let i = W - 2; i >= 0; i--) {
  maxRight[i] = Math.max(maxRight[i + 1], height[i]);
}

// 각 위치에서 고일 수 있는 빗물 계산
let totalWater = 0;
for (let i = 1; i < W - 1; i++) {
  const waterHeight = Math.min(maxLeft[i], maxRight[i]) - height[i];
  if (waterHeight > 0) totalWater += waterHeight;
}

// 결과 출력
console.log(totalWater);