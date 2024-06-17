const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().split('\n');

const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const [M, N] = input.map(Number);
let sum = 0;
let minPrime = -1;

for (let i = M; i <= N; i++) {
    if (isPrime(i)) {
        sum += i;
        if (minPrime === -1 || i < minPrime) {
            minPrime = i;
        }
    }
}

if (sum === 0) {
    console.log(-1);
} else {
    console.log(sum);
    console.log(minPrime);
}