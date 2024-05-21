const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const [x, y, w, h] = input;

const result = Math.min(x, y, w - x, h - y);

console.log(result);