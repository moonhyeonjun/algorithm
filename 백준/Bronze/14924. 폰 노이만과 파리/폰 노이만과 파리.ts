const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const S: number = +input[0];
const T: number = +input[1];
const D: number = +input[2];

const result: number = (D / (S * 2)) * T;
console.log(result);