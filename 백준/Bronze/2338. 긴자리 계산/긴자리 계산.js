const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(BigInt);

const [a, b] = input;

console.log((a + b).toString());
console.log((a - b).toString());
console.log((a * b).toString());