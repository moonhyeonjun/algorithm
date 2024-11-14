// 입력값 받기
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// 빈 줄 제거
const nonEmptyInput = input.filter(str => str.length > 0);

// 각 줄에 대해 소문자, 대문자, 숫자, 공백의 개수를 계산하여 출력
nonEmptyInput.forEach(str => {
  const lower = str.length - str.replace(/[a-z]/g, '').length; // 소문자 개수
  const upper = str.length - str.replace(/[A-Z]/g, '').length; // 대문자 개수
  const num = str.length - str.replace(/[0-9]/g, '').length;   // 숫자 개수
  const blank = str.length - str.replace(/ /g, '').length;     // 공백 개수

  console.log(lower, upper, num, blank); // 결과 출력
});