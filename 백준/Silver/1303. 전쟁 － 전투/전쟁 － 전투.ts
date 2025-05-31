// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// [n, m]: 전쟁터의 가로, 세로 크기
const [n, m] = input[0].split(" ").map(Number);

// 병사들의 전쟁터 상태 (2차원 배열)
const grid: string[][] = input.slice(1, m + 1).map(line => line.split(""));

// 방문 체크 배열
const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));

// 방향 벡터 (상하좌우)
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

/**
 * BFS 탐색을 통해 연결된 병사의 수를 계산
 * @param x 시작 x 좌표
 * @param y 시작 y 좌표
 * @param team 'W' | 'B'
 * @returns 연결된 병사 수
 */
function bfs(x: number, y: number, team: string): number {
  const queue: [number, number][] = [[x, y]];
  visited[y][x] = true;
  let count = 1;

  while (queue.length > 0) {
    const [cx, cy] = queue.shift()!;
    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      // 격자 범위 체크 및 조건 확인
      if (
        nx >= 0 && nx < n &&
        ny >= 0 && ny < m &&
        !visited[ny][nx] &&
        grid[ny][nx] === team
      ) {
        visited[ny][nx] = true;
        queue.push([nx, ny]);
        count++;
      }
    }
  }

  return count;
}

let whitePower = 0;
let bluePower = 0;

// 모든 좌표를 탐색하며 BFS 실행
for (let y = 0; y < m; y++) {
  for (let x = 0; x < n; x++) {
    if (!visited[y][x]) {
      const team = grid[y][x];
      const size = bfs(x, y, team);
      const power = size * size;

      if (team === 'W') whitePower += power;
      else bluePower += power;
    }
  }
}

// 결과 출력
console.log(`${whitePower} ${bluePower}`);