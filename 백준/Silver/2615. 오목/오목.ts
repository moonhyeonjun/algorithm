// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 19x19 바둑판 배열로 변환
const board: number[][] = input.map((line) => line.split(" ").map(Number));

// 방향 벡터: 우, 하, 우하, 좌하 (중복 탐지 방지)
const directions = [
  [0, 1],  // →
  [1, 0],  // ↓
  [1, 1],  // ↘
  [-1, 1], // ↗
];

const N = 19;

function isValid(x: number, y: number): boolean {
  return x >= 0 && x < N && y >= 0 && y < N;
}

// 특정 위치에서 시작해 특정 방향으로 정확히 5개의 연속된 같은 색 바둑알이 있는지 확인
function checkWin(x: number, y: number, dx: number, dy: number): boolean {
  const color = board[x][y];
  let count = 1;

  // 앞 방향(현재 위치 포함)
  for (let i = 1; i < 5; i++) {
    const nx = x + dx * i;
    const ny = y + dy * i;
    if (!isValid(nx, ny) || board[nx][ny] !== color) break;
    count++;
  }

  if (count !== 5) return false;

  // 6개 이상 연속인지 확인 (앞쪽 + 뒤쪽)
  const prevX = x - dx;
  const prevY = y - dy;
  const nextX = x + dx * 5;
  const nextY = y + dy * 5;

  if ((isValid(prevX, prevY) && board[prevX][prevY] === color) ||
      (isValid(nextX, nextY) && board[nextX][nextY] === color)) {
    return false;
  }

  return true;
}

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    const current = board[x][y];
    if (current === 0) continue; // 돌이 없는 곳은 무시

    for (const [dx, dy] of directions) {
      if (checkWin(x, y, dx, dy)) {
        console.log(current);           // 이긴 색 출력 (1 또는 2)
        console.log(`${x + 1} ${y + 1}`); // 좌표는 1-based로 출력
        process.exit(0);               // 정답 찾으면 즉시 종료
      }
    }
  }
}

console.log(0); // 승부가 나지 않은 경우