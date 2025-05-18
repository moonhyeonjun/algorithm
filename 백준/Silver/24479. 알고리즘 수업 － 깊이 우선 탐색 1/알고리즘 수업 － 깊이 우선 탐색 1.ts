// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 줄에서 N: 정점 수, M: 간선 수, R: 시작 정점
const [N, M, R] = input[0].split(" ").map(Number);

// 인접 리스트 초기화 (1-based 인덱스)
const graph: number[][] = Array.from({ length: N + 1 }, () => []);

// 간선 정보 입력
for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u); // 무방향 그래프
}

// 인접 정점 오름차순 정렬
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

// 방문 순서를 저장할 배열 (0: 방문 안 함)
const visitOrder: number[] = Array(N + 1).fill(0);

// DFS 순서 카운터
let order = 1;

// 깊이 우선 탐색 함수
const dfs = (node: number) => {
  visitOrder[node] = order++; // 현재 정점 방문 순서 기록

  for (const neighbor of graph[node]) {
    if (visitOrder[neighbor] === 0) {
      dfs(neighbor); // 아직 방문하지 않은 이웃 정점 탐색
    }
  }
};

// DFS 시작
dfs(R);

// 결과 출력 (1번 정점부터 N번 정점까지)
let result = "";
for (let i = 1; i <= N; i++) {
  result += `${visitOrder[i]}\n`;
}
console.log(result);