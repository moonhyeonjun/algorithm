const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const [N, R, Q] = input[0].split(" ").map(Number);
const adj: number[][] = Array.from({ length: N + 1 }, () => []);
const size: number[] = Array(N + 1).fill(0);

for (let i = 1; i < N; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  adj[u].push(v);
  adj[v].push(u);
}

const dfs = (node: number, parent: number) => {
  size[node] = 1; // 자신 포함
  for (const next of adj[node]) {
    if (next !== parent) {
      dfs(next, node);
      size[node] += size[next];
    }
  }
};

dfs(R, -1);

// 쿼리 처리 및 출력
const results: number[] = [];
for (let i = N; i < N + Q; i++) {
  const queryNode = Number(input[i]);
  results.push(size[queryNode]);
}
console.log(results.join("\n"));