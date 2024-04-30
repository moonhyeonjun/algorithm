const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const sum = input.reduce((acc, cur) => acc + cur, 0);
const min = Math.floor(sum / 60);
const sec = sum % 60;

console.log(min);
console.log(sec);