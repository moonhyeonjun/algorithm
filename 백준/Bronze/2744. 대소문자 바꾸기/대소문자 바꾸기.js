const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

let str = '';

for (let i = 0; i <= input.length - 1; i++) {
    input[i].toUpperCase() === input[i] ? str += input[i].toLowerCase() : str += input[i].toUpperCase();
}

console.log(str);