// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 보드 크기 N 및 사탕 배열
const N = Number(input[0]);
const board: string[][] = input.slice(1).map(line => line.split(""));

// 사탕 연속 최대 개수 계산 함수
function getMaxCandies(b: string[][]): number {
  let max = 1;

  // 행 탐색
  for (let i = 0; i < N; i++) {
    let cnt = 1;
    for (let j = 1; j < N; j++) {
      if (b[i][j] === b[i][j - 1]) cnt++;
      else cnt = 1;
      max = Math.max(max, cnt);
    }
  }

  // 열 탐색
  for (let j = 0; j < N; j++) {
    let cnt = 1;
    for (let i = 1; i < N; i++) {
      if (b[i][j] === b[i - 1][j]) cnt++;
      else cnt = 1;
      max = Math.max(max, cnt);
    }
  }

  return max;
}

// 사탕 최대 개수 저장용 변수
let result = 0;

// 보드의 모든 인접한 사탕쌍 교환 시도
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // 오른쪽 사탕과 교환
    if (j + 1 < N) {
      [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
      result = Math.max(result, getMaxCandies(board));
      [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]]; // 원상복구
    }

    // 아래쪽 사탕과 교환
    if (i + 1 < N) {
      [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
      result = Math.max(result, getMaxCandies(board));
      [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]]; // 원상복구
    }
  }
}

// 결과 출력
console.log(result);