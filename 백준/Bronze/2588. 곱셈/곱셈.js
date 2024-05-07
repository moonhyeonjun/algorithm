const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const num1 = parseInt(input[0]);
const num2 = parseInt(input[1]);

console.log(num1 * (num2 % 10));
console.log(num1 * parseInt((num2 % 100) / 10));
console.log(num1 * parseInt(num2 / 100));
console.log(num1 * num2);