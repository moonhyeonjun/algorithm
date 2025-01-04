// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 데이터 파싱
const N: number = parseInt(input[0]); // 영상 크기 N
const video: string[] = input.slice(1); // N x N 영상 데이터

/**
 * 쿼드 트리를 구성하는 함수
 * @param x 시작 행 인덱스
 * @param y 시작 열 인덱스
 * @param size 현재 영상의 크기
 * @returns 압축된 문자열
 */
function compressQuadTree(x: number, y: number, size: number): string {
  // 현재 영역의 첫 번째 값
  const firstValue: string = video[x][y];

  // 영역이 동일한 값으로 이루어져 있는지 확인
  let isUniform: boolean = true;
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (video[i][j] !== firstValue) {
        isUniform = false;
        break;
      }
    }
    if (!isUniform) break;
  }

  // 동일한 값으로 이루어진 경우: 압축된 결과 반환
  if (isUniform) {
    return firstValue;
  }

  // 섞여 있는 경우: 4분할하여 재귀 호출
  const halfSize: number = size / 2;
  const topLeft = compressQuadTree(x, y, halfSize); // 왼쪽 위
  const topRight = compressQuadTree(x, y + halfSize, halfSize); // 오른쪽 위
  const bottomLeft = compressQuadTree(x + halfSize, y, halfSize); // 왼쪽 아래
  const bottomRight = compressQuadTree(x + halfSize, y + halfSize, halfSize); // 오른쪽 아래

  // 압축된 결과를 괄호로 묶어서 반환
  return `(${topLeft}${topRight}${bottomLeft}${bottomRight})`;
}

// 결과 출력
console.log(compressQuadTree(0, 0, N));