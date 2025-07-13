const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split(""));
const visited = Array.from({ length: R }, () => Array(C).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let sheep = 0;
let wolf = 0;

const dfs = (x: number, y: number): [number, number] => {
  let s = 0,
    w = 0;
  const stack = [[x, y]];
  visited[x][y] = true;

  while (stack.length) {
    const [cx, cy] = stack.pop()!;

    if (map[cx][cy] === "o") s++;
    if (map[cx][cy] === "v") w++;

    for (let dir = 0; dir < 4; dir++) {
      const nx = cx + dx[dir];
      const ny = cy + dy[dir];

      if (nx >= 0 && nx < R && ny >= 0 && ny < C && !visited[nx][ny] && map[nx][ny] !== "#") {
        visited[nx][ny] = true;
        stack.push([nx, ny]);
      }
    }
  }

  return [s, w];
};

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (!visited[i][j] && map[i][j] !== "#") {
      const [s, w] = dfs(i, j);
      if (s > w) sheep += s;
      else wolf += w;
    }
  }
}

console.log(`${sheep} ${wolf}`);