const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const sorted = input.sort((a, b) => a - b);

console.log(sorted.join(' '));