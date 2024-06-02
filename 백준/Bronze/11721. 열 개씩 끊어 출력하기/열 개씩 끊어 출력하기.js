const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

let result = '';

for (let i = 0; i < input.length; i += 10) {
    result += input.slice(i, i + 10) + '\n';
}

console.log(result);