const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const numbers = input.slice(1).map(Number);

numbers.sort((a, b) => a - b);

console.log(numbers.join('\n'));