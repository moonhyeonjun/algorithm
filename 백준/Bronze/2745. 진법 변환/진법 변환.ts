const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const N: string = input[0];
const B: number = +input[1];

let result: number = 0;
let index: number = 0;

for (let i = N.length - 1; i >= 0; i--) {
  const num: number = isNaN(+N[i]) ? N[i].charCodeAt(0) - 55 : +N[i];
  result += num * Math.pow(B, index);
  index++;
}

console.log(result);