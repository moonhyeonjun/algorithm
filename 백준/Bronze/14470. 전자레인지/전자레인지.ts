const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const a: number = +input[0];
const b: number = +input[1];
const c: number = +input[2];
const d: number = +input[3];
const e: number = +input[4];

let result: number = 0;

if (a < 0) {
  result += Math.abs(a) * c;
  result += d;
  result += b * e;
} else {
  result += (b - a) * e;
}

console.log(result);