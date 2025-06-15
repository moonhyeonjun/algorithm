// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]); // 탑의 개수
const heights = input[1].split(" ").map(Number); // 각 탑의 높이

// 결과를 담을 배열 (탑의 수신자 번호 저장용)
const answer: number[] = [];

// 스택: [탑의 인덱스, 탑의 높이] 형태로 저장
const stack: [number, number][] = [];

for (let i = 0; i < N; i++) {
  const currentHeight = heights[i];

  // 현재 탑보다 낮은 탑은 모두 수신 불가 → 제거
  while (stack.length > 0 && stack[stack.length - 1][1] < currentHeight) {
    stack.pop();
  }

  if (stack.length === 0) {
    // 왼쪽에 자신보다 높은 탑이 없는 경우
    answer.push(0);
  } else {
    // 가장 가까운 왼쪽의 높은 탑의 인덱스 (1-based index로 출력)
    answer.push(stack[stack.length - 1][0] + 1);
  }

  // 현재 탑을 스택에 저장
  stack.push([i, currentHeight]);
}

// 결과 출력
console.log(answer.join(" "));