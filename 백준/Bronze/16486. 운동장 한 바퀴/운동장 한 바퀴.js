const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const d1 = input[0];
const d2 = input[1];

console.log(((d1 + d2 * 3.141592) * 2).toFixed(6));