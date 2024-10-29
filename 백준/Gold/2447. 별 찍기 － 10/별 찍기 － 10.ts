// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

const N: number = parseInt(input, 10);

// 패턴을 저장할 이차원 배열 생성
let result: string[][] = Array.from({ length: N }, () => Array(N).fill(" "));

// 별 패턴을 재귀적으로 채우는 함수
function fillStars(x: number, y: number, size: number): void {
  // size가 3일 때, 가장 작은 패턴 생성
  if (size === 3) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!(i === 1 && j === 1)) {
          // 중앙이 비어 있는 경우를 제외
          result[x + i][y + j] = "*";
        }
      }
    }
    return;
  }

  // 현재 크기를 3등분하여 재귀적으로 별 패턴을 채움
  const newSize = size / 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // 중앙 부분은 공백으로 두고 나머지 부분에 별 패턴을 재귀적으로 채우기
      if (!(i === 1 && j === 1)) {
        fillStars(x + i * newSize, y + j * newSize, newSize);
      }
    }
  }
}

// 패턴 채우기 함수 호출
fillStars(0, 0, N);

// 결과 출력
const output: string = result.map((row) => row.join("")).join("\n");
console.log(output);