const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const N = Number(input[0]);
const info = input.slice(1).map(line => line.split(" ").map(Number));
const board = Array.from({ length: N }, () => Array(N).fill(0));
const likeMap = new Map<number, Set<number>>();

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

for (const [student, ...likes] of info) {
  likeMap.set(student, new Set(likes));

  const candidates: [number, number, number, number][] = [];

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (board[r][c]) continue;

      let likeCnt = 0;
      let emptyCnt = 0;

      for (let d = 0; d < 4; d++) {
        const nr = r + dr[d];
        const nc = c + dc[d];
        if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;

        const val = board[nr][nc];
        if (val === 0) emptyCnt++;
        else if (likeMap.get(student)!.has(val)) likeCnt++;
      }

      candidates.push([likeCnt, emptyCnt, r, c]);
    }
  }

  candidates.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];
    if (a[1] !== b[1]) return b[1] - a[1];
    if (a[2] !== b[2]) return a[2] - b[2];
    return a[3] - b[3];
  });

  const [_, __, r, c] = candidates[0];
  board[r][c] = student;
}

let res = 0;
const score = [0, 1, 10, 100, 1000];

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    const student = board[r][c];
    let likeCnt = 0;

    for (let d = 0; d < 4; d++) {
      const nr = r + dr[d];
      const nc = c + dc[d];
      if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
      if (likeMap.get(student)!.has(board[nr][nc])) likeCnt++;
    }

    res += score[likeCnt];
  }
}

console.log(res);