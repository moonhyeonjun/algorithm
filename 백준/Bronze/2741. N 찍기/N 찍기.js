const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const N = input[0];

let printN = '';

for(let i = 1; i < N+1; i++){
    printN += i + '\n';
}

console.log(printN);