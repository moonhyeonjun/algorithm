// 입력 처리
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const N = +input[0]; // 선분의 개수
const lines: [number, number][] = input.slice(1).map(line => {
  const [x, y] = line.split(" ").map(Number);
  return [x, y];
});

// 1. 시작점을 기준으로 오름차순 정렬
lines.sort((a, b) => a[0] - b[0]);

let totalLength = 0;

// 병합할 현재 선분의 시작점과 끝점
let currentStart = lines[0][0];
let currentEnd = lines[0][1];

for (let i = 1; i < N; i++) {
  const [start, end] = lines[i];

  if (start <= currentEnd) {
    // 선분이 겹치는 경우: 끝점을 최대값으로 확장
    currentEnd = Math.max(currentEnd, end);
  } else {
    // 선분이 겹치지 않는 경우: 이전 선분 길이 추가 후 새 선분 시작
    totalLength += currentEnd - currentStart;
    currentStart = start;
    currentEnd = end;
  }
}

// 마지막 선분 길이 추가
totalLength += currentEnd - currentStart;

console.log(totalLength);