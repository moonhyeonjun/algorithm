const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

let i = 0;
const result: string[] = [];

const dz = [1, -1, 0, 0, 0, 0];
const dx = [0, 0, 1, -1, 0, 0];
const dy = [0, 0, 0, 0, 1, -1];

while (i < input.length) {
  const [L, R, C] = input[i++].split(" ").map(Number);
  if (L === 0 && R === 0 && C === 0) break;

  const map: string[][][] = Array.from({ length: L }, () => Array.from({ length: R }, () => Array(C)));

  let start: [number, number, number] = [0, 0, 0];

  for (let z = 0; z < L; z++) {
    for (let x = 0; x < R; x++) {
      const line = input[i++].trim().split("");
      for (let y = 0; y < C; y++) {
        map[z][x][y] = line[y];
        if (line[y] === "S") start = [z, x, y];
      }
    }
    i++; // 층 사이의 빈 줄 스킵
  }

  const visited = Array.from({ length: L }, () => Array.from({ length: R }, () => Array(C).fill(false)));

  const queue: [number, number, number, number][] = [[...start, 0]];
  visited[start[0]][start[1]][start[2]] = true;

  let escaped = false;

  while (queue.length) {
    const [z, x, y, time] = queue.shift()!;
    if (map[z][x][y] === "E") {
      result.push(`Escaped in ${time} minute(s).`);
      escaped = true;
      break;
    }

    for (let d = 0; d < 6; d++) {
      const nz = z + dz[d];
      const nx = x + dx[d];
      const ny = y + dy[d];

      if (
        nz >= 0 &&
        nz < L &&
        nx >= 0 &&
        nx < R &&
        ny >= 0 &&
        ny < C &&
        !visited[nz][nx][ny] &&
        map[nz][nx][ny] !== "#"
      ) {
        visited[nz][nx][ny] = true;
        queue.push([nz, nx, ny, time + 1]);
      }
    }
  }

  if (!escaped) result.push("Trapped!");
}

console.log(result.join("\n"));