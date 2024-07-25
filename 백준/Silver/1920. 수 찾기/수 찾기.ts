const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N: number = +input[0];
const A: number[] = input[1].split(" ").map((item) => +item);
const M: number = +input[2];
const MArr: number[] = input[3].split(" ").map((item) => +item);

const result: number[] = [];
const map = new Map<number, number>();

for (let i = 0; i < N; i++) {
  map.set(A[i], i);
}

for (let i = 0; i < M; i++) {
  if (map.has(MArr[i])) {
    result.push(1);
  } else {
    result.push(0);
  }
}

console.log(result.join("\n"));