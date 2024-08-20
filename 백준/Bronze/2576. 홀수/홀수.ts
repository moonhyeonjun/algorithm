const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let sum: number = 0;
let min: number = 101;

for (let i = 0; i < input.length; i++) {
  const num: number = +input[i];
  if (num % 2 !== 0) {
    sum += num;
    min = Math.min(min, num);
  }
}

if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(min);
}