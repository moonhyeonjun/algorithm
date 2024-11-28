// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 배열 크기와 입력 데이터 초기화
const [N, M] = input[0].split(" ").map(Number);
const grid: number[][] = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
const K = Number(input[N + 1]);
const queries: number[][] = input.slice(N + 2).map((line) => line.split(" ").map(Number));

// 누적 합 배열 생성
const prefixSum: number[][] = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

// 누적 합 계산
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    prefixSum[i][j] =
      grid[i - 1][j - 1] +
      prefixSum[i - 1][j] +
      prefixSum[i][j - 1] -
      prefixSum[i - 1][j - 1];
  }
}

// 결과 출력
const result: number[] = [];
for (const [i, j, x, y] of queries) {
  const sum =
    prefixSum[x][y] -
    prefixSum[i - 1][y] -
    prefixSum[x][j - 1] +
    prefixSum[i - 1][j - 1];
  result.push(sum);
}

console.log(result.join("\n"));