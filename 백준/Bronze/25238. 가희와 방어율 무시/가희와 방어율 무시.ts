const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const a: number = parseInt(input[0]);
const b: number = parseInt(input[1]);

if (a - a * (b / 100) >= 100) {
  console.log(0);
} else {
  console.log(1);
}