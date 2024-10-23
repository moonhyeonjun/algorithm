// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 방향 설정 (가로, 세로, 대각선 포함 8방향)
const directions: [number, number][] = [
  [-1, 0], [1, 0], [0, -1], [0, 1], // 상하좌우
  [-1, -1], [-1, 1], [1, -1], [1, 1] // 대각선 4방향
];

// 지도 탐색 및 섬의 개수 세기
const countIslands = (grid: number[][], h: number, w: number): number => {
  let islandCount = 0;
  const visited: boolean[][] = Array.from({ length: h }, () => Array(w).fill(false));

  // DFS 탐색 함수
  const dfs = (x: number, y: number) => {
    visited[x][y] = true;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < h && ny >= 0 && ny < w && !visited[nx][ny] && grid[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  };

  // 모든 좌표에 대해 섬 탐색
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        dfs(i, j);
        islandCount++;
      }
    }
  }

  return islandCount;
};

// 입력 처리 및 결과 출력
let idx = 0;

while (true) {
  // 너비와 높이 가져오기
  const [w, h] = input[idx].split(' ').map(Number);
  
  if (w === 0 && h === 0) break; // 종료 조건

  // 지도 생성
  const grid: number[][] = [];
  for (let i = 1; i <= h; i++) {
    grid.push(input[idx + i].split(' ').map(Number));
  }

  // 섬의 개수 세기
  console.log(countIslands(grid, h, w));

  // 다음 테스트 케이스로 이동
  idx += h + 1;
}