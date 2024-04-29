const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('');

let sum = 0;
for (let i = 0; i < input.length; i++) {
  sum += Math.pow(input[i], 2);
};

console.log(sum % 10);