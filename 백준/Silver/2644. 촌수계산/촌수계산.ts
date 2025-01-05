// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 데이터 처리
const n: number = Number(input[0]); // 전체 사람 수
const [personA, personB]: number[] = input[1].split(" ").map(Number); // 촌수를 계산할 두 사람
const m: number = Number(input[2]); // 부모-자식 관계 개수

// 관계를 저장할 인접 리스트 생성
const graph: Map<number, number[]> = new Map();
for (let i = 0; i <= n; i++) {
  graph.set(i, []);
}

// 부모-자식 관계를 인접 리스트에 저장
for (let i = 3; i < 3 + m; i++) {
  const [parent, child] = input[i].split(" ").map(Number);
  graph.get(parent)!.push(child);
  graph.get(child)!.push(parent);
}

// BFS를 이용하여 촌수 계산 함수
function findKinship(start: number, end: number): number {
  const visited: boolean[] = Array(n + 1).fill(false); // 방문 여부 확인 배열
  const queue: [number, number][] = [[start, 0]]; // [현재 사람, 촌수]

  visited[start] = true; // 시작점 방문 처리

  while (queue.length > 0) {
    const [current, count] = queue.shift()!;

    // 종료 조건: 현재 사람이 목적지일 경우
    if (current === end) {
      return count;
    }

    // 현재 사람과 연결된 사람들을 탐색
    for (const neighbor of graph.get(current)!) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push([neighbor, count + 1]);
      }
    }
  }

  // 연결되지 않은 경우
  return -1;
}

// 촌수 계산 및 결과 출력
const result: number = findKinship(personA, personB);
console.log(result);