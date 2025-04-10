// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N: number = Number(input[0]);
const A: number[] = input[1].split(" ").map(Number);

// 각 A의 원소에 대해 (값, 원래 인덱스) 형태로 배열 구성
const indexedA: [number, number][] = A.map((val, idx) => [val, idx]);

// 값 기준으로 정렬 (값이 같으면 원래 인덱스 기준으로 정렬하여 사전순을 만족시킴)
indexedA.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  return a[1] - b[1];
});

// 결과 수열 P를 저장할 배열
const P: number[] = new Array(N);

// 정렬된 값의 위치를 P[원래 인덱스] = 정렬된 인덱스 형태로 저장
indexedA.forEach(([_, originalIndex], sortedIndex) => {
  P[originalIndex] = sortedIndex;
});

// 결과 출력
console.log(P.join(" "));