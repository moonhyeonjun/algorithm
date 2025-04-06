// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 파싱
const N = parseInt(input[0]);
const line = input[1].split(" ").map(Number); // 대기열

// 보조 공간 역할을 하는 스택
const stack: number[] = [];

let expected = 1; // 현재 간식을 받아야 하는 학생 번호

for (let i = 0; i < N; i++) {
  const current = line[i];

  // 보조 스택의 top이 기대한 번호이면 pop
  while (stack.length && stack[stack.length - 1] === expected) {
    stack.pop();
    expected++;
  }

  if (current === expected) {
    // 현재 사람이 바로 간식을 받을 수 있는 경우
    expected++;
  } else {
    // 보조 스택에 넣어 대기
    stack.push(current);
  }
}

// 마지막으로 보조 스택에 남은 학생들도 검사
while (stack.length && stack[stack.length - 1] === expected) {
  stack.pop();
  expected++;
}

// 모든 학생이 순서대로 간식을 받았다면 expected은 N+1이 되어야 함
console.log(expected === N + 1 ? "Nice" : "Sad");