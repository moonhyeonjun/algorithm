const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const result = Array(alphabet.length).fill(0);

for (let i = 0; i < input.length; i++) {
    const index = alphabet.indexOf(input[i]);
    result[index] += 1;
}

console.log(result.join(' '));