const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const [N, K] = input;

function findKthDivisor(N, K) {
    const divisors = [];
    for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
            divisors.push(i);
        }
    }
    return divisors.length >= K ? divisors[K - 1] : 0;
}

console.log(findKthDivisor(N, K));