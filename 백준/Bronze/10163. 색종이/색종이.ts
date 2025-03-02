// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 색종이 개수
const N: number = parseInt(input[0]);

// 1001x1001 크기의 격자 (0으로 초기화)
const grid: number[][] = Array.from({ length: 1001 }, () => Array(1001).fill(0));

// 색종이 정보 저장
const papers: [number, number, number, number][] = [];

// 색종이 배치
for (let i = 1; i <= N; i++) {
  const [x, y, w, h] = input[i].split(" ").map(Number);
  papers.push([x, y, w, h]);

  // 격자에 색종이 번호 기록
  for (let dx = 0; dx < w; dx++) {
    for (let dy = 0; dy < h; dy++) {
      grid[x + dx][y + dy] = i; // 색종이 번호 기록
    }
  }
}

// 각 색종이별 보이는 면적 계산
const visibleAreas: number[] = new Array(N).fill(0);

for (let i = 0; i < 1001; i++) {
  for (let j = 0; j < 1001; j++) {
    if (grid[i][j] !== 0) {
      visibleAreas[grid[i][j] - 1]++; // 해당 색종이 면적 증가
    }
  }
}

// 결과 출력
console.log(visibleAreas.join("\n"));