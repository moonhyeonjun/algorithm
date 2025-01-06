// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력값 파싱
const N: number = parseInt(input[0]);
const matrix: number[][] = input.slice(1).map(line => line.split(" ").map(Number));

// 결과를 저장할 변수 (-1, 0, 1로만 이루어진 종이 개수)
let countMinusOne = 0;
let countZero = 0;
let countOne = 0;

/**
 * 해당 영역이 모두 같은 값인지 확인하는 함수
 * @param x 시작 x 좌표
 * @param y 시작 y 좌표
 * @param size 현재 영역의 크기
 * @returns true면 동일한 값, false면 아니며 분할 필요
 */
const isUniform = (x: number, y: number, size: number): boolean => {
  const value = matrix[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (matrix[i][j] !== value) {
        return false;
      }
    }
  }
  return true;
};

/**
 * 분할 정복 함수
 * @param x 시작 x 좌표
 * @param y 시작 y 좌표
 * @param size 현재 영역의 크기
 */
const divideAndConquer = (x: number, y: number, size: number): void => {
  // 현재 영역이 모두 동일한 값으로 채워졌는지 확인
  if (isUniform(x, y, size)) {
    const value = matrix[x][y];
    if (value === -1) countMinusOne++;
    else if (value === 0) countZero++;
    else if (value === 1) countOne++;
    return;
  }

  // 영역을 9개의 하위 영역으로 나누기
  const newSize = size / 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      divideAndConquer(x + i * newSize, y + j * newSize, newSize);
    }
  }
};

// 분할 정복 시작
divideAndConquer(0, 0, N);

// 결과 출력
console.log(countMinusOne);
console.log(countZero);
console.log(countOne);