const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path, "utf8").trim().split(/\s+/).map(Number);

const [R, C, T] = input.slice(0, 3);
let idx = 3;
let g: number[][] = Array.from({ length: R }, () => Array(C).fill(0));
let air: number[] = []; // 공기청정기 행 위치 (두 개)

// 격자 채우기 & 공기청정기 위치 기록
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    g[i][j] = input[idx++];
    if (g[i][j] === -1) air.push(i);
  }
}

const dirs = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

// 미세먼지 확산
function spread() {
  const tmp = Array.from({ length: R }, () => Array(C).fill(0));

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (g[i][j] > 0) {
        const amount = Math.floor(g[i][j] / 5);
        if (amount === 0) {
          tmp[i][j] += g[i][j];
          continue;
        }
        let cnt = 0;
        for (const [dx, dy] of dirs) {
          const ni = i + dx;
          const nj = j + dy;
          if (
            ni >= 0 &&
            ni < R &&
            nj >= 0 &&
            nj < C &&
            g[ni][nj] !== -1
          ) {
            tmp[ni][nj] += amount;
            cnt++;
          }
        }
        tmp[i][j] += g[i][j] - amount * cnt;
      }
    }
  }

  // 공기청정기 위치 복원
  tmp[air[0]][0] = -1;
  tmp[air[1]][0] = -1;
  g = tmp;
}

// 공기청정기 작동 (위: 반시계, 아래: 시계)
function clean() {
  const [top, bottom] = air;

  // 위쪽 반시계
  for (let i = top - 1; i > 0; i--) g[i][0] = g[i - 1][0];
  for (let j = 0; j < C - 1; j++) g[0][j] = g[0][j + 1];
  for (let i = 0; i < top; i++) g[i][C - 1] = g[i + 1][C - 1];
  for (let j = C - 1; j > 1; j--) g[top][j] = g[top][j - 1];
  g[top][1] = 0;

  // 아래쪽 시계
  for (let i = bottom + 1; i < R - 1; i++) g[i][0] = g[i + 1][0];
  for (let j = 0; j < C - 1; j++) g[R - 1][j] = g[R - 1][j + 1];
  for (let i = R - 1; i > bottom; i--) g[i][C - 1] = g[i - 1][C - 1];
  for (let j = C - 1; j > 1; j--) g[bottom][j] = g[bottom][j - 1];
  g[bottom][1] = 0;
}

// 시뮬레이션 실행
for (let t = 0; t < T; t++) {
  spread();
  clean();
}

// 결과 계산
let ans = 0;
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (g[i][j] > 0) ans += g[i][j];
  }
}

console.log(ans);