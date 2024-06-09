const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

const N = parseInt(input);

for (let i = 0; i < N; i++) {
    const spaces = ' '.repeat(i);
    const stars = '*'.repeat(2 * (N - i) - 1);
    console.log(spaces + stars);
}