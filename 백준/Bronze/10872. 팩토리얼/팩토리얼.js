const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

let result = 1;

for (let i = 1; i <= input; i++) {
    result *= i;
};
console.log(result);