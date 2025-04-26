// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력값 파싱
const [n, m, k, x] = input[0].split(" ").map(Number); // n: 도시 수, m: 도로 수, k: 목표 거리, x: 출발 도시
const edges = input.slice(1).map(line => line.split(" ").map(Number));

// 인접 리스트 생성
const graph: number[][] = Array.from({ length: n + 1 }, () => []);

for (const [from, to] of edges) {
  graph[from].push(to);
}

// 거리 배열 초기화 (-1: 방문하지 않음)
const dist: number[] = Array(n + 1).fill(-1);
dist[x] = 0;

// BFS를 위한 큐
const queue: number[] = [x];
let idx = 0;

while (idx < queue.length) {
  const cur = queue[idx++];

  for (const next of graph[cur]) {
    if (dist[next] === -1) {
      dist[next] = dist[cur] + 1;
      queue.push(next);
    }
  }
}

// 결과 수집 및 정렬
const result: number[] = [];

for (let i = 1; i <= n; i++) {
  if (dist[i] === k) {
    result.push(i);
  }
}

// 결과 출력
if (result.length === 0) {
  console.log(-1);
} else {
  result.sort((a, b) => a - b).forEach(city => console.log(city));
}