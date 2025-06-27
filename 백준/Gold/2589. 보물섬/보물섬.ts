// 입력 처리
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number); // N: 세로, M: 가로
const map = input.slice(1).map((line) => line.split(""));

const dx = [0, 0, -1, 1]; // 좌우
const dy = [-1, 1, 0, 0]; // 상하

// 좌표 유효성 검사
const isValid = (y: number, x: number): boolean =>
  y >= 0 && y < N && x >= 0 && x < M && map[y][x] === "L";

// BFS 함수: 시작점에서 가장 멀리 있는 육지까지의 거리 반환
function bfs(sy: number, sx: number): number {
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  const queue: [number, number, number][] = [[sy, sx, 0]]; // [y, x, 거리]
  visited[sy][sx] = true;

  let maxDist = 0;

  while (queue.length > 0) {
    const [y, x, dist] = queue.shift()!;
    maxDist = Math.max(maxDist, dist);

    for (let d = 0; d < 4; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];

      if (isValid(ny, nx) && !visited[ny][nx]) {
        visited[ny][nx] = true;
        queue.push([ny, nx, dist + 1]);
      }
    }
  }

  return maxDist;
}

// 모든 육지 좌표에서 BFS 실행하여 최대 거리 갱신
let answer = 0;

for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (map[y][x] === "L") {
      const dist = bfs(y, x);
      answer = Math.max(answer, dist);
    }
  }
}

console.log(answer);