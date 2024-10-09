// 입력 받기
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 집합 A와 B 추출
const setA = input[1].split(" ");
const setB = input[2].split(" ");

// 두 집합을 합친 후 Set으로 중복 제거
const set = new Set(setA.concat(setB));

// 교집합의 크기 계산: A와 B의 전체 길이에서 Set의 크기를 빼면 교집합의 크기가 나옴
const intersection = setA.length + setB.length - set.size;

// 대칭 차집합 크기 계산: 전체 원소의 개수에서 교집합의 두 배를 뺌
console.log(setA.length + setB.length - 2 * intersection);