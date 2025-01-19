// 파일 입력 및 초기 데이터 처리
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

// 입력값 N을 숫자로 변환
const N = parseInt(input, 10);

/**
 * 금민수인지 확인하는 함수
 * 금민수는 숫자가 4와 7로만 이루어진 수임
 * @param {number} num - 확인할 숫자
 * @returns {boolean} - 금민수 여부
 */
function isLuckyNumber(num) {
  const numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] !== "4" && numStr[i] !== "7") {
      return false;
    }
  }
  return true;
}

/**
 * N보다 작거나 같은 가장 큰 금민수를 찾는 함수
 * @param {number} n - 입력값 N
 * @returns {number} - 가장 큰 금민수
 */
function findLargestLuckyNumber(n) {
  for (let i = n; i >= 4; i--) {
    if (isLuckyNumber(i)) {
      return i;
    }
  }
  return 4; // 최소 금민수는 4이므로 기본 반환값
}

// 결과 계산 및 출력
console.log(findLargestLuckyNumber(N));