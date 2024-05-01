const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let secretCode = '';

for (const str of input) {
    if(str === 'END') break;

    for (let i = str.length - 1; i >= 0; i--) { 
        secretCode += str[i];
    }

    secretCode += '\n';
}

console.log(secretCode);