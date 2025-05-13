// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 줄: 컴퓨터 수 N, 신뢰 관계 수 M
const [N, M] = input[0].split(" ").map(Number);

// 그래프를 역방향으로 저장 (B -> A 형태)
const graph: number[][] = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  graph[B].push(A); // B를 해킹하면 A도 해킹 가능
}

// 각 노드에서 해킹 가능한 컴퓨터 수 저장
const hackCounts: number[] = Array(N + 1).fill(0);

// DFS 함수 정의
function dfs(start: number, visited: boolean[]): number {
  const stack = [start];
  let count = 0;

  while (stack.length > 0) {
    const node = stack.pop()!;
    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        stack.push(next);
        count++;
      }
    }
  }

  return count;
}

// 모든 컴퓨터에서 DFS 수행
let maxHack = 0;
for (let i = 1; i <= N; i++) {
  const visited = Array(N + 1).fill(false);
  visited[i] = true;
  hackCounts[i] = dfs(i, visited);
  maxHack = Math.max(maxHack, hackCounts[i]);
}

// 최대 해킹 가능한 수를 가진 컴퓨터 번호만 출력
const result: number[] = [];
for (let i = 1; i <= N; i++) {
  if (hackCounts[i] === maxHack) {
    result.push(i);
  }
}

console.log(result.sort((a, b) => a - b).join(" "));