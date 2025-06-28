// 입력 처리
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

// 입력 파싱
const [N, M] = input[0].split(" ").map(Number);
const graph: number[][] = Array.from({ length: N }, () => []);

// 친구 관계 인접 리스트 구성
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a); // 무방향 그래프
}

const visited: boolean[] = new Array(N).fill(false);
let found = false;

// DFS 함수 정의
function dfs(curr: number, depth: number): void {
  if (found) return; // 이미 조건을 만족하는 경로를 찾았으면 탐색 중지
  if (depth === 5) {
    found = true;
    return;
  }

  visited[curr] = true;
  for (const next of graph[curr]) {
    if (!visited[next]) {
      dfs(next, depth + 1);
    }
  }
  visited[curr] = false; // 백트래킹
}

// 모든 노드에서 DFS 시작
for (let i = 0; i < N; i++) {
  dfs(i, 1); // 시작 노드 포함하므로 depth=1
  if (found) break;
}

// 결과 출력
console.log(found ? 1 : 0);