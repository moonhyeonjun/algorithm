const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N: number = parseInt(input[0]);
const P: number[] = input[1].split(" ").map((item) => parseInt(item));
let result: number = 0;

P.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    result += P[j];
  }
}

console.log(result);