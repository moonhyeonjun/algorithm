// 입력 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 행렬 A 크기
const [N, M] = input[0].split(" ").map(Number);
// 행렬 A 데이터
const A: number[][] = input.slice(1, 1 + N).map(line => line.split(" ").map(Number));

// 행렬 B 크기
const [M2, K] = input[1 + N].split(" ").map(Number);
// 행렬 B 데이터
const B: number[][] = input.slice(2 + N).map(line => line.split(" ").map(Number));

// 결과 행렬 초기화
const result: number[][] = Array.from({ length: N }, () => Array(K).fill(0));

// 행렬 곱셈
for (let i = 0; i < N; i++) {
  for (let j = 0; j < K; j++) {
    for (let k = 0; k < M; k++) {
      result[i][j] += A[i][k] * B[k][j];
    }
  }
}

// 결과 출력
console.log(result.map(row => row.join(" ")).join("\n"));