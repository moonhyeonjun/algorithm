// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 입력값 N
const N: number = parseInt(input, 10);

// 자릿수 계산 함수
function calculateDigitCount(N: number): number {
  let digitCount = 0; // 총 자릿수
  let digitLength = 1; // 현재 자릿수의 길이 (1자리, 2자리, ...)
  let rangeStart = 1; // 현재 자릿수의 시작값 (1, 10, 100, ...)

  // 각 자릿수 범위에 대해 처리
  while (rangeStart <= N) {
    // 현재 자릿수 범위의 끝값 계산
    const rangeEnd = Math.min(N, rangeStart * 10 - 1);

    // 현재 자릿수 범위에서 포함된 숫자 개수 * 자릿수 길이
    digitCount += (rangeEnd - rangeStart + 1) * digitLength;

    // 다음 자릿수 범위로 이동
    digitLength++;
    rangeStart *= 10;
  }

  return digitCount;
}

// 결과 출력
console.log(calculateDigitCount(N));