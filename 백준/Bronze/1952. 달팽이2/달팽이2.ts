// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split(" ");

const [M, N]: number[] = input.map(Number);

// 방향: → ↓ ← ↑ (우, 하, 좌, 상)
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const visited: boolean[][] = Array.from({ length: M }, () => Array(N).fill(false));

let x = 0,
  y = 0; // 시작 위치
let dir = 0; // 방향 인덱스
let turnCount = 0; // 방향 전환 횟수

for (let i = 1; i < M * N; i++) {
  // 1부터 시작하여 마지막 칸을 채우는 순간 종료
  visited[x][y] = true; // 현재 위치 방문 처리

  // 다음 이동할 위치
  let nx = x + dx[dir];
  let ny = y + dy[dir];

  // 이동이 불가능한 경우(범위 초과 또는 이미 방문한 경우)
  if (nx < 0 || nx >= M || ny < 0 || ny >= N || visited[nx][ny]) {
    dir = (dir + 1) % 4; // 방향 변경 (우 → 하 → 좌 → 상)
    turnCount++; // 방향 전환 카운트 증가
    nx = x + dx[dir];
    ny = y + dy[dir];
  }

  x = nx;
  y = ny;
}

console.log(turnCount);