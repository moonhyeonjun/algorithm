// 입력 파일 처리
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 입력 파싱
const N = Number(input[0]);
const board = input.slice(1).map(line => line.split(" ").map(Number));

// DP 테이블 생성: dp[i][j]는 (i, j)까지 올 수 있는 경로의 수를 저장
const dp = Array.from({ length: N }, () => Array(N).fill(0n));

// 시작 지점은 항상 경로가 1개
dp[0][0] = 1n;

// 각 칸을 순회하며 점프 가능한 위치에 경로 수 누적
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    const jump = board[i][j];
    if (jump === 0 || dp[i][j] === 0n) continue; // 점프 불가능하거나 경로 없음

    // 오른쪽으로 점프
    if (j + jump < N) {
      dp[i][j + jump] += dp[i][j];
    }

    // 아래쪽으로 점프
    if (i + jump < N) {
      dp[i + jump][j] += dp[i][j];
    }
  }
}

// 최종 도착 지점의 경로 수 출력
console.log(dp[N - 1][N - 1].toString());