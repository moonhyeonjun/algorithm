const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const X = input[0].split(' ')[1];
const A = input[1].split(' ').map(Number);
let result = '';

for (const num of A) { 
    if (num < X) {
        result += num + ' ';
    }
};

console.log(result);