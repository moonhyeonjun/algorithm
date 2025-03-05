// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

const [A, B]: string[] = input.split(" ");

// 교차 위치 찾기
let crossA = -1,
  crossB = -1;
for (let i = 0; i < A.length; i++) {
  const indexB = B.indexOf(A[i]);
  if (indexB !== -1) {
    crossA = i;
    crossB = indexB;
    break;
  }
}

// 결과 배열 생성
const grid: string[][] = Array.from({ length: B.length }, () => Array(A.length).fill("."));

// 단어 배치
for (let i = 0; i < A.length; i++) grid[crossB][i] = A[i]; // 가로(A)
for (let i = 0; i < B.length; i++) grid[i][crossA] = B[i]; // 세로(B)

// 출력
console.log(grid.map((row) => row.join("")).join("\n"));