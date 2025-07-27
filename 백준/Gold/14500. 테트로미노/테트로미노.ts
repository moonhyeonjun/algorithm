const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split(" ").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const visited = Array.from({ length: n }, () => Array(m).fill(false));
let maxSum = 0;

const dfs = (x: number, y: number, depth: number, sum: number) => {
  if (depth === 4) {
    maxSum = Math.max(maxSum, sum);
    return;
  }

  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (visited[nx][ny]) continue;

    visited[nx][ny] = true;
    dfs(nx, ny, depth + 1, sum + board[nx][ny]);
    visited[nx][ny] = false;
  }
};

const checkExtraShape = (x: number, y: number) => {
  const shapes = [
    [
      [0, 0],
      [0, -1],
      [0, 1],
      [-1, 0],
    ],
    [
      [0, 0],
      [-1, 0],
      [1, 0],
      [0, 1],
    ],
    [
      [0, 0],
      [0, -1],
      [0, 1],
      [1, 0],
    ],
    [
      [0, 0],
      [-1, 0],
      [1, 0],
      [0, -1],
    ],
  ];

  for (const shape of shapes) {
    let isValid = true;
    let sum = 0;

    for (const [dx, dy] of shape) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        isValid = false;
        break;
      }

      sum += board[nx][ny];
    }

    if (isValid) {
      maxSum = Math.max(maxSum, sum);
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    visited[i][j] = true;
    dfs(i, j, 1, board[i][j]);
    visited[i][j] = false;
    checkExtraShape(i, j);
  }
}

console.log(maxSum);