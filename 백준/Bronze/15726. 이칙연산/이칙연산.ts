const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const a: number = +input[0];
const b: number = +input[1];
const c: number = +input[2];

const result: number = Math.floor(Math.max((a * b) / c, (a * c) / b));

console.log(result);