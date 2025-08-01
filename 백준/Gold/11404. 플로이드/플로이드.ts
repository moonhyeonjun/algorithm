const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const n = +input[0];
const m = +input[1];
const INF = Infinity;

const dist = Array.from({ length: n }, () => Array(n).fill(INF));
for (let i = 0; i < n; i++) dist[i][i] = 0;

for (let i = 2; i < 2 + m; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  const u = a - 1;
  const v = b - 1;
  dist[u][v] = Math.min(dist[u][v], c);
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dist[i][k] + dist[k][j] < dist[i][j]) {
        dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }
}

let res = "";
for (let i = 0; i < n; i++) {
  res += dist[i].map(v => (v === INF ? 0 : v)).join(" ") + "\n";
}
console.log(res.trim());