const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N: number = +input[0];
const A: number[] = input[1].split(" ").map((item) => +item);
const [B, C]: number[] = input[2].split(" ").map((item) => +item);

let result: number = 0;

for (let i = 0; i < N; i++) {
  A[i] -= B;
  result++;

  if (A[i] > 0) {
    result += Math.ceil(A[i] / C);
  }
}

console.log(result);