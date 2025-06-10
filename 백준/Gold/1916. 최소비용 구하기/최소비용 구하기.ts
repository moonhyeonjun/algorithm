// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 기본 입력 파싱
const n = Number(input[0]); // 도시 개수
const m = Number(input[1]); // 버스 개수

// 인접 리스트로 그래프 초기화
const graph: { to: number; cost: number }[][] = Array.from({ length: n + 1 }, () => []);

// 그래프 구성
for (let i = 2; i < 2 + m; i++) {
  const [from, to, cost] = input[i].split(" ").map(Number);
  graph[from].push({ to, cost });
}

// 시작 도시와 도착 도시
const [start, end] = input[2 + m].split(" ").map(Number);

// 최소 비용 저장 배열 (무한대로 초기화)
const dist: number[] = Array(n + 1).fill(Infinity);
dist[start] = 0;

// 우선순위 큐 구현을 위한 최소 힙 클래스
class MinHeap {
  private heap: { node: number; cost: number }[] = [];

  push(value: { node: number; cost: number }) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop(): { node: number; cost: number } | undefined {
    if (this.heap.length <= 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown();
    return top;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  private bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent].cost <= this.heap[idx].cost) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  private bubbleDown() {
    let idx = 0;
    const length = this.heap.length;

    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let smallest = idx;

      if (left < length && this.heap[left].cost < this.heap[smallest].cost) {
        smallest = left;
      }
      if (right < length && this.heap[right].cost < this.heap[smallest].cost) {
        smallest = right;
      }
      if (smallest === idx) break;
      [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
      idx = smallest;
    }
  }
}

// 데이크스트라 알고리즘
function dijkstra(start: number) {
  const pq = new MinHeap();
  pq.push({ node: start, cost: 0 });

  while (!pq.isEmpty()) {
    const current = pq.pop()!;
    const { node: curNode, cost: curCost } = current;

    // 이미 더 짧은 거리로 처리된 경우 건너뛰기
    if (dist[curNode] < curCost) continue;

    for (const { to, cost } of graph[curNode]) {
      const newCost = curCost + cost;
      if (newCost < dist[to]) {
        dist[to] = newCost;
        pq.push({ node: to, cost: newCost });
      }
    }
  }
}

// 최소 비용 계산 실행
dijkstra(start);

// 결과 출력
console.log(dist[end]);