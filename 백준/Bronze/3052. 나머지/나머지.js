const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const remainder = input.map((num) => num % 42);
const set = new Set(remainder);
console.log(set.size);