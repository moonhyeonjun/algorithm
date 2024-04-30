const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log((A + B) * (A - B));