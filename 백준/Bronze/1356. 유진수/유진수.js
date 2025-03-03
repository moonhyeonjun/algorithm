const fs = require("fs");

// 입력값 읽기
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const N = fs.readFileSync(filePath).toString().trim();

/**
 * 주어진 숫자가 유진수인지 판단하는 함수
 * @param {string} num 문자열 형태의 숫자
 * @returns {"YES" | "NO"}
 */
function isEugeneNumber(num) {
  const len = num.length;

  // 가능한 모든 나누는 위치를 시도
  for (let i = 1; i < len; i++) {
    // 왼쪽 부분과 오른쪽 부분을 나누기
    const leftPart = num.slice(0, i);
    const rightPart = num.slice(i);

    // 각 부분의 곱을 계산
    const leftProduct = [...leftPart].reduce((acc, cur) => acc * Number(cur), 1);
    const rightProduct = [...rightPart].reduce((acc, cur) => acc * Number(cur), 1);

    // 곱이 같다면 유진수
    if (leftProduct === rightProduct) {
      return "YES";
    }
  }

  return "NO";
}

// 결과 출력
console.log(isEugeneNumber(N));