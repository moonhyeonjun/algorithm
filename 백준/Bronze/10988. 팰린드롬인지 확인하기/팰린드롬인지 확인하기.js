const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

let answer = 1;

for (let i = 0; i < input.length / 2; i++) {
    if (input[i] !== input[input.length - 1 - i]) {
        answer = 0;
        break;
    }
}

console.log(answer);