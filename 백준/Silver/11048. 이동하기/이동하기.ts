// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 미로의 크기
const [N, M] = input[0].split(" ").map(Number);

// 미로 데이터: 각 칸에 놓여 있는 사탕 수
const maze: number[][] = input.slice(1).map(line => line.split(" ").map(Number));

// DP 배열: dp[r][c]는 (r, c)까지 왔을 때 가져올 수 있는 사탕의 최대값
const dp: number[][] = Array.from({ length: N }, () => Array(M).fill(0));

// DP 계산
for (let r = 0; r < N; r++) {
  for (let c = 0; c < M; c++) {
    // 현재 위치에서 얻을 수 있는 사탕 수
    const candy = maze[r][c];

    // 이전 위치에서 오는 방법: 위쪽(r-1, c), 왼쪽(r, c-1), 대각선 위쪽(r-1, c-1)
    const fromTop = r > 0 ? dp[r - 1][c] : 0;
    const fromLeft = c > 0 ? dp[r][c - 1] : 0;
    const fromDiag = (r > 0 && c > 0) ? dp[r - 1][c - 1] : 0;

    // 현재 위치까지의 최대 사탕 수 계산
    dp[r][c] = Math.max(fromTop, fromLeft, fromDiag) + candy;
  }
}

// 결과 출력: (N-1, M-1) 위치까지 모을 수 있는 최대 사탕 수
console.log(dp[N - 1][M - 1]);