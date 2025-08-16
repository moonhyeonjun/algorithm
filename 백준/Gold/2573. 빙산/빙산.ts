const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const a = fs.readFileSync(path, "utf8").trim().split(/\s+/).map(Number);

const [N, M] = a;
let g: number[][] = [];
let idx = 2;
for (let i = 0; i < N; i++) {
  g.push(a.slice(idx, idx + M));
  idx += M;
}

const d = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const melt = () => {
  const dec: number[][] = Array.from({ length: N }, () => Array(M).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (g[i][j] > 0) {
        let c = 0;
        for (const [dx, dy] of d) {
          const ni = i + dx,
            nj = j + dy;
          if (ni >= 0 && ni < N && nj >= 0 && nj < M && g[ni][nj] === 0) {
            c++;
          }
        }
        dec[i][j] = c;
      }
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      g[i][j] = Math.max(0, g[i][j] - dec[i][j]);
    }
  }
};


const bfs = (si: number, sj: number, vis: boolean[][]) => {
  const q: [number, number][] = [[si, sj]];
  vis[si][sj] = true;
  while (q.length) {
    const [x, y] = q.shift()!;
    for (const [dx, dy] of d) {
      const nx = x + dx,
        ny = y + dy;
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && !vis[nx][ny] && g[nx][ny] > 0) {
        vis[nx][ny] = true;
        q.push([nx, ny]);
      }
    }
  }
};

const countComp = () => {
  const vis = Array.from({ length: N }, () => Array(M).fill(false));
  let comp = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (g[i][j] > 0 && !vis[i][j]) {
        bfs(i, j, vis);
        comp++;
      }
    }
  }
  return comp;
};

let year = 0;
while (true) {
  const c = countComp();
  if (c >= 2) {
    console.log(year);
    break;
  }
  if (c === 0) {
    console.log(0);
    break;
  }
  melt();
  year++;
}