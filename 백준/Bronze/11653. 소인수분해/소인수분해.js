const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

let n = parseInt(input);

for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
        n /= i;
        console.log(i);
    }
}