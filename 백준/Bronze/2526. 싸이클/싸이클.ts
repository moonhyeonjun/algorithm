// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const [N, P] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

// 반복을 추적할 Set 선언
const seen = new Map<number, number>(); // {값: 등장 순서}
let current = N;
let order = 0;

while (!seen.has(current)) {
  seen.set(current, order); // 현재 값과 순서 저장
  order += 1;
  current = (current * N) % P; // 다음 값 계산
}

// 사이클 길이 계산
const cycleLength = order - seen.get(current)!;
console.log(cycleLength);