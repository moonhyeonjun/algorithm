// 입력 처리
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

// 점의 개수 N
const N = Number(input[0]);

// 점들의 좌표 배열
const points: [number, number][] = input.slice(1).map((line) => {
  const [x, y] = line.split(" ").map(Number);
  return [x, y];
});

/**
 * Shoelace formula를 사용하여 다각형의 면적을 계산
 * A = 1/2 * |Σ(xᵢyᵢ₊₁ - xᵢ₊₁yᵢ)|
 */
let area = 0;

for (let i = 0; i < N; i++) {
  const [x1, y1] = points[i];
  const [x2, y2] = points[(i + 1) % N]; // 마지막 점 다음은 첫 번째 점으로 순환
  area += x1 * y2 - x2 * y1;
}

// 절댓값을 취하고 1/2 곱함
area = Math.abs(area) / 2;

// 소수 첫째 자리까지 반올림하여 출력
console.log(area.toFixed(1));