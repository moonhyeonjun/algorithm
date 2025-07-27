const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const map = input.slice(1).map(line => line.split(""));
const visited = Array.from({ length: n }, () => Array(m).fill(false));

const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

let sx = -1, sy = -1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === "I") {
      sx = i;
      sy = j;
      break;
    }
  }
  if (sx !== -1) break;
}

let cnt = 0;
const q: [number, number][] = [[sx, sy]];
visited[sx][sy] = true;

while (q.length) {
  const [x, y] = q.shift()!;
  if (map[x][y] === "P") cnt++;

  for (const [dx, dy] of dir) {
    const nx = x + dx;
    const ny = y + dy;
    if (
      nx >= 0 && nx < n &&
      ny >= 0 && ny < m &&
      !visited[nx][ny] &&
      map[nx][ny] !== "X"
    ) {
      visited[nx][ny] = true;
      q.push([nx, ny]);
    }
  }
}

console.log(cnt === 0 ? "TT" : cnt);