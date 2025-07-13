const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const n = +input[0];
const map = input.slice(1).map(Number);
const res: number[] = [];

const visited = Array(n).fill(false);
const finished = Array(n).fill(false);

const dfs = (cur: number, path: number[]): void => {
  if (visited[cur]) {
    const idx = path.indexOf(cur);
    if (idx !== -1) {
      for (let i = idx; i < path.length; i++) {
        res.push(path[i] + 1);
      }
    }
    return;
  }

  visited[cur] = true;
  path.push(cur);
  dfs(map[cur] - 1, path);
  path.pop();
  finished[cur] = true;
};

for (let i = 0; i < n; i++) {
  if (!visited[i]) dfs(i, []);
}

res.sort((a, b) => a - b);
console.log(res.length);
console.log(res.join("\n"));