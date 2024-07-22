const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input[0].split(" ").map((el) => parseInt(el));
const graph = Array.from({ length: N + 1 }, () => Array());
const visited = Array(N + 1).fill(false);

for (let i = 1; i < M + 1; i++) {
  const [a, b] = input[i].split(" ").map((el) => parseInt(el));
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i < N + 1; i++) {
  graph[i].sort((a, b) => a - b);
}

const dfs = (start: number) => {
  visited[start] = true;
  process.stdout.write(start + " ");
  for (let i = 0; i < graph[start].length; i++) {
    const next = graph[start][i];
    if (!visited[next]) {
      dfs(next);
    }
  }
};

const bfs = (start: number) => {
  const queue = [start];
  visited[start] = true;
  while (queue.length) {
    const now = queue.shift() as number;
    process.stdout.write(now + " ");
    for (let i = 0; i < graph[now].length; i++) {
      const next = graph[now][i];
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
};

dfs(V);
console.log();
visited.fill(false);
bfs(V);
console.log();