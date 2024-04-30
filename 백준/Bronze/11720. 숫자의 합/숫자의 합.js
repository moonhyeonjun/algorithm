const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const numbers = input.pop().split('').map((item) => +item);
let sum = 0;

for (const number of numbers) {
    sum += number;
};

console.log(sum);