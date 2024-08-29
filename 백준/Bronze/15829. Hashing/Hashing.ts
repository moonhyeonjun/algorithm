const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N: number = +input[0];
let hash: number = 0;
let r: number = 1;

for (let i = 0; i < N; i++) {
  hash += (input[1].charCodeAt(i) - 96) * r;
  hash %= 1234567891;
  r *= 31;
  r %= 1234567891;
}

console.log(hash);