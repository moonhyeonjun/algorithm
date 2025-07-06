const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

// 좌표 추출
const [x1, y1] = input[0].split(" ").map(Number);
const [x2, y2] = input[1].split(" ").map(Number);
const [x3, y3] = input[2].split(" ").map(Number);

/**
 * 외적(cross product)을 이용한 방향 계산
 * 
 * 공식:
 * (x2 - x1)*(y3 - y1) - (y2 - y1)*(x3 - x1)
 * => (P2 - P1) × (P3 - P1)
 * 
 * 결과:
 *  > 0: 반시계 방향 (1)
 *  < 0: 시계 방향 (-1)
 *  = 0: 일직선 (0)
 */
const ccw = (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): number => {
  const cross = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);

  if (cross > 0) return 1;     // 반시계
  if (cross < 0) return -1;    // 시계
  return 0;                    // 일직선
};

console.log(ccw(x1, y1, x2, y2, x3, y3));