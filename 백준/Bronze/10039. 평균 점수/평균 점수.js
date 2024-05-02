const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const score = input.reduce((acc, cur) => cur < 40 ? acc += 40 : acc += cur, 0);
const average = score / 5;

console.log(average);