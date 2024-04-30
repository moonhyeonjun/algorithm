const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const T = input.shift();
let result = '';

for (let i = 0; i < T; i++) {
    result += input[i][0] + input[i][input[i].length - 1] + '\n';
};

console.log(result);