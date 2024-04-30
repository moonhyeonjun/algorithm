const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const S = input[0];
const i = parseInt(input[1]);

console.log(S[i - 1]);