// 입력 처리
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim();

const N = Number(input);

const results: number[] = [];

/**
 * 백트래킹을 통해 감소하는 수 생성
 * @param current 현재까지 만들어진 수
 * @param lastDigit 마지막으로 추가한 자리수
 */
function generateDescendingNumbers(current: number, lastDigit: number) {
  results.push(current); // 현재 수를 결과에 추가

  // 0 ~ lastDigit - 1 까지만 다음 자리수로 사용 가능 (감소해야 하므로)
  for (let next = 0; next < lastDigit; next++) {
    generateDescendingNumbers(current * 10 + next, next);
  }
}

// 1자리 수부터 시작 (0~9)
for (let i = 0; i <= 9; i++) {
  generateDescendingNumbers(i, i);
}

// 오름차순 정렬
results.sort((a, b) => a - b);

// N번째 감소하는 수 출력
if (N >= results.length) {
  console.log(-1);
} else {
  console.log(results[N]);
}