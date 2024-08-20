const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split(" ");

const A: number = +input[0];
const I: number = +input[1];

console.log(A * (I - 1) + 1);