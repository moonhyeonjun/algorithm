const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const [N, L, R] = input[0].split(" ").map(Number);
let board: number[][] = input.slice(1).map(v => v.split(" ").map(Number));

const dirs = [
  [1, 0],  // 하
  [-1, 0], // 상
  [0, 1],  // 우
  [0, -1], // 좌
];

let days = 0;

while (true) {
  let visited = Array.from({ length: N }, () => Array(N).fill(false));
  let moved = false;

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (!visited[r][c]) {
        let q = [[r, c]];
        let union: [number, number][] = [[r, c]];
        let sum = board[r][c];
        visited[r][c] = true;

        while (q.length) {
          const [y, x] = q.shift()!;
          for (let [dy, dx] of dirs) {
            const ny = y + dy;
            const nx = x + dx;
            if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;
            if (visited[ny][nx]) continue;
            const diff = Math.abs(board[y][x] - board[ny][nx]);
            if (diff >= L && diff <= R) {
              visited[ny][nx] = true;
              q.push([ny, nx]);
              union.push([ny, nx]);
              sum += board[ny][nx];
            }
          }
        }

        if (union.length > 1) {
          moved = true;
          const avg = Math.floor(sum / union.length);
          for (let [uy, ux] of union) {
            board[uy][ux] = avg;
          }
        }
      }
    }
  }

  if (!moved) break;
  days++;
}

console.log(days);