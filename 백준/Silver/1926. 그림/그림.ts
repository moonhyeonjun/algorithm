// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const grid: number[][] = input.slice(1).map((row) => row.split(" ").map(Number));

const dx: number[] = [0, 0, 1, -1];
const dy: number[] = [1, -1, 0, 0];

let count: number = 0;
let maxArea: number = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (grid[i][j] === 1) {
      let area: number = 0;
      const queue: [number, number][] = [[i, j]];
      grid[i][j] = 0; // 방문 처리

      while (queue.length > 0) {
        const [x, y] = queue.shift()!;
        area++;

        for (let k = 0; k < 4; k++) {
          const nx: number = x + dx[k];
          const ny: number = y + dy[k];

          if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] === 1) {
            grid[nx][ny] = 0; // 방문 처리
            queue.push([nx, ny]);
          }
        }
      }

      count++;
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
}

console.log(count);
console.log(maxArea);