// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력값 파싱
const [n, m] = input[0].split(" ").map(Number);
const a: number[][] = input.slice(1, n + 1).map(line => line.split("").map(Number));
const b: number[][] = input.slice(n + 1).map(line => line.split("").map(Number));

/**
 * 3x3 범위의 특정 좌표 (x, y)를 중심으로 행렬을 뒤집는 함수
 */
function flip(x: number, y: number) {
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      a[i][j] = a[i][j] === 0 ? 1 : 0;
    }
  }
}

/**
 * A → B로 바꾸는 최소 연산 횟수를 계산
 */
function solve(): number {
  // 만약 3x3 연산 자체가 불가능한 경우
  if (n < 3 || m < 3) {
    return isSameMatrix(a, b) ? 0 : -1;
  }

  let count = 0;

  // 좌측 상단에서부터 순회하며 A와 B의 값이 다를 경우 뒤집기 수행
  for (let i = 0; i <= n - 3; i++) {
    for (let j = 0; j <= m - 3; j++) {
      if (a[i][j] !== b[i][j]) {
        flip(i, j);
        count++;
      }
    }
  }

  // 모든 연산 후 최종적으로 A와 B가 같은지 확인
  return isSameMatrix(a, b) ? count : -1;
}

/**
 * 두 행렬이 같은지 비교
 */
function isSameMatrix(mat1: number[][], mat2: number[][]): boolean {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat1[i][j] !== mat2[i][j]) return false;
    }
  }
  return true;
}

// 결과 출력
console.log(solve());