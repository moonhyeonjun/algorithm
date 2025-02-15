// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 줄: 스왑 횟수 M
const M: number = Number(input[0]);

// 공의 초기 위치 (1번 컵 아래에 있음)
let ballPosition: number = 1;

// M번의 스왑 연산 수행
for (let i = 1; i <= M; i++) {
  const [X, Y] = input[i].split(" ").map(Number);

  // 공이 스왑 대상 중 하나에 있다면 위치 변경
  if (ballPosition === X) {
    ballPosition = Y;
  } else if (ballPosition === Y) {
    ballPosition = X;
  }
}

// 결과 출력
console.log(ballPosition);