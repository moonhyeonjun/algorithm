// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 2차원 평면 초기화 (좌표 범위: 1 ~ 100)
const grid: boolean[][] = Array.from({ length: 101 }, () => Array(101).fill(false));

// 직사각형의 좌표를 읽고, 해당 영역을 true로 마킹
for (const line of input) {
  const [x1, y1, x2, y2] = line.split(" ").map(Number);
  
  // 주어진 좌표에 해당하는 영역을 true로 마킹
  for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) {
      grid[x][y] = true;
    }
  }
}

// 합집합 면적 계산
let totalArea = 0;
for (let x = 1; x <= 100; x++) {
  for (let y = 1; y <= 100; y++) {
    if (grid[x][y]) {
      totalArea++;
    }
  }
}

// 결과 출력
console.log(totalArea);