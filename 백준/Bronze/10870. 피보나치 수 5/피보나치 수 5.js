const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString();

const n = parseInt(input.trim());

function fibonacci(num) {
    if (num <= 1) {
        return num;
    }
    let a = 0, b = 1, temp;
    for (let i = 2; i <= num; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

console.log(fibonacci(n));