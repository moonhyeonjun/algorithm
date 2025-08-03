const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const N = +input[0];
const K = +input[1];
const apples = new Set<string>();
for (let i = 0; i < K; i++) {
  const [r, c] = input[2 + i].split(" ").map(Number);
  apples.add(`${r - 1},${c - 1}`);
}

const L = +input[2 + K];
const turns = new Map<number, string>();
for (let i = 0; i < L; i++) {
  const [X, C] = input[3 + K + i].split(" ");
  turns.set(+X, C);
}

const dx = [0, 1, 0, -1]; // 우, 하, 좌, 상
const dy = [1, 0, -1, 0];

let t = 0;
let d = 0;
const snake: [number, number][] = [[0, 0]];
const body = new Set<string>();
body.add("0,0");

while (true) {
  t++;
  const [x, y] = snake[0];
  const nx = x + dx[d];
  const ny = y + dy[d];
  const nextPos = `${nx},${ny}`;

  if (
    nx < 0 || ny < 0 || nx >= N || ny >= N ||
    body.has(nextPos)
  ) {
    console.log(t);
    break;
  }

  snake.unshift([nx, ny]);
  body.add(nextPos);

  if (apples.has(nextPos)) {
    apples.delete(nextPos);
  } else {
    const tail = snake.pop()!;
    body.delete(`${tail[0]},${tail[1]}`);
  }

  if (turns.has(t)) {
    d = turns.get(t) === "L" ? (d + 3) % 4 : (d + 1) % 4;
  }
}