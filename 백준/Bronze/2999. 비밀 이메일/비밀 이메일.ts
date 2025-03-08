// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

/**
 * R과 C 찾기
 * - N의 약수 중에서 R ≤ C 조건을 만족하는 가장 큰 R을 선택한다.
 */
const findRC = (n: number): [number, number] => {
  let bestR = 1, bestC = n;
  for (let r = 1; r * r <= n; r++) {
    if (n % r === 0) {
      const c = n / r; // 약수 짝을 구함
      if (r <= c) [bestR, bestC] = [r, c]; // R ≤ C 유지하면서 R이 최대
    }
  }
  return [bestR, bestC];
};

// 입력 길이
const N = input.length;
// 적절한 R, C 찾기
const [R, C] = findRC(N);

// 행렬 채우기
const grid: string[][] = Array.from({ length: R }, () => Array(C).fill(""));
let index = 0;
for (let i = 0; i < C; i++) {
  for (let j = 0; j < R; j++) {
    grid[j][i] = input[index++];
  }
}

// 세로 방향으로 읽어서 복호화
let result = "";
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    result += grid[i][j];
  }
}

console.log(result);