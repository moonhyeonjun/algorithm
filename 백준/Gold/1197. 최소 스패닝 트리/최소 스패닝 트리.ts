const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const [V, E] = input[0].split(" ").map(Number);
const edges: [number, number, number][] = [];

for (let i = 1; i <= E; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  edges.push([c, a, b]); // 가중치 먼저
}

edges.sort((a, b) => a[0] - b[0]); // 가중치 기준 정렬

const p = Array(V + 1).fill(0).map((_, i) => i);

const find = (x: number): number => {
  if (p[x] !== x) p[x] = find(p[x]);
  return p[x];
};

const union = (a: number, b: number): boolean => {
  const pa = find(a);
  const pb = find(b);
  if (pa === pb) return false;
  p[pb] = pa;
  return true;
};

let sum = 0;
for (const [w, a, b] of edges) {
  if (union(a, b)) sum += w;
}

console.log(sum);