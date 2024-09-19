const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N: number = parseInt(input[0]);
const A: number[] = input[1].split(" ").map((item) => parseInt(item));
const B: number[] = input[2].split(" ").map((item) => parseInt(item));

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

let result: number = 0;

for (let i = 0; i < N; i++) {
  result += A[i] * B[i];
}

console.log(result);