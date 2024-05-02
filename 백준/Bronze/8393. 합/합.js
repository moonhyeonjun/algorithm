const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

const n = parseInt(input);
let sum = 0;

for (let i = 1; i <= n; i++) { 
    sum += i;
}

console.log(sum);