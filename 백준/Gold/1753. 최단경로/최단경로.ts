const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const [V, E] = input[0].split(" ").map(Number);
const K = Number(input[1]);
const edges = input.slice(2).map(line => line.split(" ").map(Number));

// 인접 리스트 생성
const graph: [number, number][][] = Array.from({ length: V + 1 }, () => []);
edges.forEach(([u, v, w]) => {
  graph[u].push([v, w]);
});

// 다익스트라 알고리즘
const dist = Array(V + 1).fill(Infinity);
dist[K] = 0;

// 최소 힙 구현 (우선순위 큐)
class MinHeap {
  private heap: [number, number][] = [];

  push(item: [number, number]) {
    this.heap.push(item);
    this.bubbleUp();
  }

  pop(): [number, number] | undefined {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown();
    return top;
  }

  private bubbleUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[p][0] <= this.heap[i][0]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }

  private bubbleDown() {
    let i = 0;
    const n = this.heap.length;
    while (true) {
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      let min = i;
      if (l < n && this.heap[l][0] < this.heap[min][0]) min = l;
      if (r < n && this.heap[r][0] < this.heap[min][0]) min = r;
      if (min === i) break;
      [this.heap[i], this.heap[min]] = [this.heap[min], this.heap[i]];
      i = min;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const pq = new MinHeap();
pq.push([0, K]);

while (!pq.isEmpty()) {
  const [d, u] = pq.pop()!;
  if (d > dist[u]) continue;

  for (const [v, w] of graph[u]) {
    const nd = d + w;
    if (nd < dist[v]) {
      dist[v] = nd;
      pq.push([nd, v]);
    }
  }
}

const result = dist.slice(1).map(d => (d === Infinity ? "INF" : d));
console.log(result.join("\n"));