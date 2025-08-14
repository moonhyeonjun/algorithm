const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const a = fs.readFileSync(path, "utf8").trim().split(/\s+/).map(Number);

let idx = 0;
const [N, M, x, y, K] = a.slice(idx, idx += 5);
const map: number[][] = [];
for (let i = 0; i < N; i++) {
  map.push(a.slice(idx, idx += M));
}
const cmds = a.slice(idx);

let r = x, c = y;
const dice = [0, 0, 0, 0, 0, 0];
const dr = [0, 0, 0, -1, 1];
const dc = [0, 1, -1, 0, 0];

const roll = (dir: number) => {
  const [t, b, n, s, w, e] = dice;
  if (dir === 1) return [w, e, n, s, b, t];
  if (dir === 2) return [e, w, n, s, t, b];
  if (dir === 3) return [s, n, t, b, w, e];
  if (dir === 4) return [n, s, b, t, w, e];
  return dice;
};

let out: number[] = [];
for (const d of cmds) {
  const nr = r + dr[d];
  const nc = c + dc[d];
  if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;
  r = nr; c = nc;
  dice.splice(0, 6, ...roll(d));
  if (map[r][c] === 0) {
    map[r][c] = dice[1];
  } else {
    dice[1] = map[r][c];
    map[r][c] = 0;
  }
  out.push(dice[0]);
}

console.log(out.join("\n"));