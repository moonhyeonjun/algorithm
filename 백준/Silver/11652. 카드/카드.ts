const fs = require("fs");

// 입력 처리
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(BigInt);

// 첫 번째 값은 N이므로 제거하고, 숫자 리스트만 남김
const [, ...numbers] = input;

// 숫자를 정렬 (BigInt 비교를 위해 삼항 연산자 사용)
numbers.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

let count = 1;
let maxValue = numbers[0];
let maxCount = 1;

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] === numbers[i - 1]) {
    count++;
  } else {
    count = 1;
  }

  if (count > maxCount) {
    maxCount = count;
    maxValue = numbers[i];
  }
}

// 결과 출력 (BigInt를 문자열로 변환하여 출력)
console.log(String(maxValue));