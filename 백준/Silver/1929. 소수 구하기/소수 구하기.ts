const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require('fs').readFileSync(filePath).toString().trim().split(' ');

const M: number = parseInt(input[0]);
const N: number = parseInt(input[1]);

const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = M; i <= N; i++) {
    if (isPrime(i)) console.log(i);
}