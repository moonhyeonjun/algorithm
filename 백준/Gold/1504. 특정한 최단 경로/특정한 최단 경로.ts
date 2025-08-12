const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const [N, E] = input[0].split(" ").map(Number);
const graph: [number, number][][] = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= E; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}
const [v1, v2] = input[E + 1].split(" ").map(Number);

const INF = Infinity;
const dijkstra = (start: number) => {
  const dist = Array(N + 1).fill(INF);
  const pq: [number, number][] = [];
  dist[start] = 0;
  pq.push([0, start]);
  while (pq.length) {
    pq.sort((a, b) => b[0] - a[0]);
    const [cd, cur] = pq.pop()!;
    if (cd > dist[cur]) continue;
    for (const [next, w] of graph[cur]) {
      const nd = cd + w;
      if (nd < dist[next]) {
        dist[next] = nd;
        pq.push([nd, next]);
      }
    }
  }
  return dist;
};

const d1 = dijkstra(1);
const d2 = dijkstra(v1);
const d3 = dijkstra(v2);

const route1 = d1[v1] + d2[v2] + d3[N];
const route2 = d1[v2] + d3[v1] + d2[N];
const ans = Math.min(route1, route2);

console.log(ans >= INF ? -1 : ans);