const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const numbers = input[1].split(' ').map((i) => parseInt(i));

let count = 0;

for (let i = 0; i < N; i++) {
    if (numbers[i] === 1) continue;
    if (numbers[i] === 2) {
        count++;
        continue;
    }
    let isPrime = true;
    for (let j = 2; j < numbers[i]; j++) {
        if (numbers[i] % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) count++;
}

console.log(count);