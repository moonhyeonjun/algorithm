const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.trim());

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let max = 0;

const dfs = (x: number, y: number, visited: number, count: number): void => {
  const charCode = board[x][y].charCodeAt(0) - 65;
  visited |= 1 << charCode; 
  max = Math.max(max, count);

  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;

    const nextCharCode = board[nx][ny].charCodeAt(0) - 65;
    if ((visited & (1 << nextCharCode)) === 0) {
      dfs(nx, ny, visited, count + 1);
    }
  }
};

dfs(0, 0, 0, 1);
console.log(max);