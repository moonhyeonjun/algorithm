const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let result = '';

for (let i = 0; i < alphabet.length; i++) {
    result += input.indexOf(alphabet[i]) + ' ';
};

console.log(result);