// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N: number = parseInt(input[0], 10);
const scores: number[] = input[1].split(" ").map(Number);

let total: number = 0;
let streak: number = 0;

// 점수 계산
for (let i = 0; i < N; i++) {
  if (scores[i] === 1) {
    streak++; // 연속된 정답이면 streak 증가
    total += streak; // streak 점수 누적
  } else {
    streak = 0; // 오답이면 streak 초기화
  }
}

console.log(total);