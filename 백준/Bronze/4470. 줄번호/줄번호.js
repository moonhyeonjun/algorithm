const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);

for (let i = 1; i <= N; i++) {
    console.log(`${i}. ${input[i]}`);
}