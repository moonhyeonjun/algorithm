const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

const N = parseInt(input);
let result = '';

for (let i = N; i > 0; i--) {
    result += i + '\n';
}

console.log(result);