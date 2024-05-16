const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const middle = input.sort((a, b) => a - b)[1];

console.log(middle);