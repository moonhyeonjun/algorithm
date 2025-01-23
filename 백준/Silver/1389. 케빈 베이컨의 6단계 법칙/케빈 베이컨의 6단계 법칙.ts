// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 데이터 파싱
const [N, M] = input[0].split(" ").map(Number);
const friends: number[][] = input.slice(1).map(line => line.split(" ").map(Number));

// 그래프 초기화 및 연결 설정
const graph: number[][] = Array.from({ length: N + 1 }, () => []);

for (const [a, b] of friends) {
  graph[a].push(b); // 친구 관계 설정
  graph[b].push(a);
}

// BFS를 이용한 최단 거리 계산 함수
const calculateKevinBacon = (start: number): number => {
  const visited = new Array(N + 1).fill(false);
  const queue: [number, number][] = [[start, 0]]; // [현재 노드, 거리]
  let totalDistance = 0;

  while (queue.length > 0) {
    const [node, distance] = queue.shift()!;

    if (!visited[node]) {
      visited[node] = true;
      totalDistance += distance;

      for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
          queue.push([neighbor, distance + 1]);
        }
      }
    }
  }

  return totalDistance;
};

// 케빈 베이컨 수 계산 및 최소값 찾기
let minKevinBacon = Infinity;
let resultUser = 0;

for (let i = 1; i <= N; i++) {
  const kevinBacon = calculateKevinBacon(i);
  if (kevinBacon < minKevinBacon || (kevinBacon === minKevinBacon && i < resultUser)) {
    minKevinBacon = kevinBacon;
    resultUser = i;
  }
}

// 결과 출력
console.log(resultUser);