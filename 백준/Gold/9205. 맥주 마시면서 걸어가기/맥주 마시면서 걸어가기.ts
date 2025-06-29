// 입력 처리
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

// 한 줄씩 읽는 index
let idx = 0;
// 테스트 케이스 수
const t = +input[idx++];

// 맨해튼 거리 계산 함수
const getDist = (a: number[], b: number[]) => {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
};

// 테스트 케이스만큼 반복
for (let tc = 0; tc < t; tc++) {
  const n = +input[idx++]; // 편의점 수
  const points: number[][] = [];

  // 상근이 집, 편의점들, 페스티벌 좌표 순서대로 입력
  for (let i = 0; i < n + 2; i++) {
    points.push(input[idx++].split(" ").map(Number));
  }

  const visited = new Array(n + 2).fill(false);
  const queue: number[] = [0]; // 시작점 index (상근이 집)
  visited[0] = true;

  let result = "sad";

  while (queue.length) {
    const curr = queue.shift()!;

    // 목적지(페스티벌)에 도착하면 종료
    if (curr === n + 1) {
      result = "happy";
      break;
    }

    for (let i = 0; i < n + 2; i++) {
      // 방문하지 않았고, 거리가 1000m 이하이면 이동 가능
      if (!visited[i] && getDist(points[curr], points[i]) <= 1000) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }

  console.log(result);
}