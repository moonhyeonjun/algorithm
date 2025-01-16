// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력값 파싱
const N: number = parseInt(input[0]); // 정점의 개수
const graph: number[][] = input.slice(1).map((line) => line.split(" ").map(Number));

// 플로이드–워셜 알고리즘을 사용하여 경로를 탐색
for (let k = 0; k < N; k++) { // 경유지
  for (let i = 0; i < N; i++) { // 출발지
    for (let j = 0; j < N; j++) { // 도착지
      // i에서 j로 가는 경로가 있거나, i → k → j 경로가 존재하면 갱신
      if (graph[i][k] === 1 && graph[k][j] === 1) {
        graph[i][j] = 1;
      }
    }
  }
}

// 결과 출력
console.log(graph.map((row) => row.join(" ")).join("\n"));