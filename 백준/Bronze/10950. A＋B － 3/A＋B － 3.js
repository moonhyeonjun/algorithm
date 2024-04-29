const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const T = input[0];

for (let i = 1; i <= T; i++) { 
    const [a, b] = input[i].split(' ').map(Number);
    console.log(a + b);
};