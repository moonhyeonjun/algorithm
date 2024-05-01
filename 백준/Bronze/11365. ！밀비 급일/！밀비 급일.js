const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let secretCode = '';

for (const str of input) {
    if(str === 'END') break;

    secretCode += str.split('').reverse().join('') + '\n';
}

console.log(secretCode);