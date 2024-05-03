const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [L, A, B, C, D] = input.map((value) => parseInt(value));

const result = Math.max(Math.ceil(A / C), Math.ceil(B / D));

console.log(L - result);