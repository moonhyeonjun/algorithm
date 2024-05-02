const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const sum = input.reduce((acc, cur) => acc + cur, 0);

console.log(sum);