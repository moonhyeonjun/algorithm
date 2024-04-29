const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const max = Math.max(...input);
const index = input.indexOf(max) + 1;

console.log(max);
console.log(index);