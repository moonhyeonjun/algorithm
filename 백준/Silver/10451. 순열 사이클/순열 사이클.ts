// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 테스트 케이스 수
const T = parseInt(input[0], 10);
let line = 1; // 현재 줄 번호 추적

// DFS 탐색 함수: 방문하지 않은 노드를 따라가며 하나의 사이클을 탐색
const dfs = (node: number, visited: boolean[], perm: number[]): void => {
  visited[node] = true;
  const next = perm[node];
  if (!visited[next]) dfs(next, visited, perm);
};

// 각 테스트 케이스 순회
for (let t = 0; t < T; t++) {
  const N = parseInt(input[line++], 10); // 순열의 크기
  const permInput = input[line++].split(" ").map(Number);
  
  // 1-based indexing을 맞추기 위해 앞에 0을 추가
  const perm: number[] = [0, ...permInput];

  const visited: boolean[] = Array(N + 1).fill(false);
  let cycleCount = 0;

  // 1번 노드부터 N번 노드까지 방문 여부 확인하며 DFS 실행
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      dfs(i, visited, perm);
      cycleCount++; // DFS가 끝났다는 것은 하나의 사이클이 끝났다는 의미
    }
  }

  console.log(cycleCount);
}