const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0]);
let idx = 1;
let result = "";
for (let i = 0; i < T; i++) {
  const [M, N, K] = input[idx].split(" ").map((el) => parseInt(el));
  const graph = Array.from(new Array(N), () => new Array(M).fill(0));
  for (let j = 0; j < K; j++) {
    const [x, y] = input[idx + 1 + j].split(" ").map((el) => parseInt(el));
    graph[y][x] = 1;
  }
  idx += K + 1;
  result += `${solution(M, N, graph)}\n`;
}
console.log(result.trim());

function solution(M: number, N: number, graph: number[][]) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let cnt = 0;

  function dfs(x: number, y: number) {
    if (x < 0 || x >= M || y < 0 || y >= N) return;
    if (graph[y][x] === 0) return;
    graph[y][x] = 0;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      dfs(nx, ny);
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 1) {
        dfs(j, i);
        cnt++;
      }
    }
  }
  return cnt;
}