// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 파싱
const N = Number(input[0]);
const board = input.slice(1).map(line => line.split(" ").map(Number));

// 3차원 DP 배열 초기화: dp[y][x][dir]
// dir: 0 = 가로, 1 = 세로, 2 = 대각선
const dp = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => Array(3).fill(0))
);

// 초기 상태: (0, 1)에 가로 방향으로 파이프가 놓여 있음
dp[0][1][0] = 1;

// DP 테이블 채우기
for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (board[y][x] === 1) continue; // 벽이면 무시

    // 가로 방향 → 이동 (이전도 가로 또는 대각선이어야 함)
    if (x - 1 >= 0) {
      dp[y][x][0] += dp[y][x - 1][0] + dp[y][x - 1][2];
    }

    // 세로 방향 ↓ 이동 (이전도 세로 또는 대각선이어야 함)
    if (y - 1 >= 0) {
      dp[y][x][1] += dp[y - 1][x][1] + dp[y - 1][x][2];
    }

    // 대각선 ↘ 이동
    if (y - 1 >= 0 && x - 1 >= 0) {
      // 대각선 이동 시에는 세 칸 모두 비어있어야 함
      if (board[y - 1][x] === 0 && board[y][x - 1] === 0) {
        dp[y][x][2] += dp[y - 1][x - 1][0] + dp[y - 1][x - 1][1] + dp[y - 1][x - 1][2];
      }
    }
  }
}

// (N-1, N-1)에 도달하는 모든 방향의 경우의 수 합산
const result = dp[N - 1][N - 1].reduce((sum, val) => sum + val, 0);
console.log(result);