const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const lab = input.slice(1).map(line => line.split(" ").map(Number));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let maxSafe = 0;

// 2차원 배열 깊은 복사
function copy(arr: number[][]): number[][] {
  return arr.map(row => [...row]);
}

// BFS로 바이러스 확산
function spreadVirus(map: number[][]): void {
  const q: [number, number][] = [];

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (map[y][x] === 2) q.push([y, x]);
    }
  }

  while (q.length) {
    const [y, x] = q.shift()!;
    for (let d = 0; d < 4; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];
      if (ny >= 0 && ny < n && nx >= 0 && nx < m && map[ny][nx] === 0) {
        map[ny][nx] = 2;
        q.push([ny, nx]);
      }
    }
  }
}

// 안전 영역 계산
function countSafe(map: number[][]): number {
  let cnt = 0;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (map[y][x] === 0) cnt++;
    }
  }
  return cnt;
}

// 벽 세우는 백트래킹
function dfs(wallCnt: number): void {
  if (wallCnt === 3) {
    const copied = copy(lab);
    spreadVirus(copied);
    maxSafe = Math.max(maxSafe, countSafe(copied));
    return;
  }

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (lab[y][x] === 0) {
        lab[y][x] = 1;
        dfs(wallCnt + 1);
        lab[y][x] = 0;
      }
    }
  }
}

dfs(0);
console.log(maxSafe);