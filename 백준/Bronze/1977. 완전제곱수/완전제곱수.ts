const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const M: number = +input[0];
const N: number = +input[1];

let sum: number = 0;
let min: number = 0;
let isExist: boolean = false;

for (let i = M; i <= N; i++) {
  if (Math.sqrt(i) % 1 === 0) {
    sum += i;
    if (min === 0 || min > i) min = i;
    isExist = true;
  }
}

console.log(isExist ? sum : -1);
console.log(isExist ? min : "");