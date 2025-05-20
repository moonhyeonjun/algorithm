// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 처리
const [N, M, K] = input[0].split(" ").map(Number); // N: 세로, M: 가로, K: 음식물 개수

// 음식물 쓰레기 좌표를 저장할 2차원 배열 (격자)
const grid: number[][] = Array.from({ length: N }, () => Array(M).fill(0));

// 방문 여부 체크 배열
const visited: boolean[][] = Array.from({ length: N }, () => Array(M).fill(false));

// 음식물 좌표를 격자에 표시
for (let i = 1; i <= K; i++) {
  const [r, c] = input[i].split(" ").map(Number);
  grid[r - 1][c - 1] = 1; // 문제 기준으로 좌표가 (1,1)부터 시작하므로 -1 처리
}

// 상하좌우 방향 벡터
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

/**
 * DFS로 연결된 음식물 크기 구하기
 * @param r 현재 행 위치
 * @param c 현재 열 위치
 * @returns 연결된 음식물의 크기
 */
const dfs = (r: number, c: number): number => {
  let size = 1;
  visited[r][c] = true;

  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];

    // 격자 범위 내 & 방문하지 않았고 음식물이 있는 경우
    if (
      nr >= 0 &&
      nr < N &&
      nc >= 0 &&
      nc < M &&
      !visited[nr][nc] &&
      grid[nr][nc] === 1
    ) {
      size += dfs(nr, nc);
    }
  }

  return size;
};

// 전체 격자 탐색하며 가장 큰 음식물 크기 찾기
let maxSize = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (grid[i][j] === 1 && !visited[i][j]) {
      const currentSize = dfs(i, j);
      maxSize = Math.max(maxSize, currentSize);
    }
  }
}

console.log(maxSize);