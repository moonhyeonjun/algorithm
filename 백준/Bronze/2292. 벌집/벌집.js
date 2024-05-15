const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

const N = parseInt(input);
let count = 1;
let range = 1;

while (range < N) {
    range += 6 * count;
    count++;
}

console.log(count);