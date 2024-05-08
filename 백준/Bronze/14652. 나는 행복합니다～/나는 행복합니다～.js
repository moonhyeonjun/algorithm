const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const [N, M, K] = input.map((value) => parseInt(value));

const n = Math.floor(K / M);
const m = K % M;

console.log(n, m);