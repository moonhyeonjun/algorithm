const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = parseInt(input[0]);

for (let i = 1; i <= N; i++) {
    console.log('*'.repeat(i) + ' '.repeat(2 * (N - i)) + '*'.repeat(i));
}

for (let i = N - 1; i >= 1; i--) {
    console.log('*'.repeat(i) + ' '.repeat(2 * (N - i)) + '*'.repeat(i));
}