const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

const N = Number(input);

let star = '';

for (let i = 0; i < N; i++) {
    star += ' '.repeat(i) + '*'.repeat(2 * (N - i) - 1) + '\n';
}
for (let i = N - 2; i >= 0; i--) {
    star += ' '.repeat(i) + '*'.repeat(2 * (N - i) - 1) + '\n';
}

console.log(star);