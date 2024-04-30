const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const numbers = input.pop().split(' ').map((item) => +item);

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(min, max);