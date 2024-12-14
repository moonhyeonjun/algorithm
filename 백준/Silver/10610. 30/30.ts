// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// N을 문자열로 입력받음
const N: string = input;

// 30의 배수 조건:
// 1. 모든 자리 숫자의 합이 3의 배수여야 함.
// 2. 숫자 중에 반드시 '0'이 포함되어야 함.
// 3. 위 두 조건을 만족하면 가장 큰 수를 출력하려면 숫자를 내림차순으로 정렬.

function findLargestMultipleOf30(n: string): string {
  const digits = n.split('').map(Number); // 각 자리 숫자를 배열로 변환

  // 0이 포함되어 있는지 확인
  if (!digits.includes(0)) {
    return "-1";
  }

  // 숫자들의 합이 3의 배수인지 확인
  const sum = digits.reduce((acc, cur) => acc + cur, 0);
  if (sum % 3 !== 0) {
    return "-1";
  }

  // 조건을 만족하면 내림차순으로 정렬하여 가장 큰 수 생성
  const largestNumber = digits.sort((a, b) => b - a).join('');
  return largestNumber;
}

// 결과 출력
console.log(findLargestMultipleOf30(N));