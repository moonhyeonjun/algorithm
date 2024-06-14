const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString();

function findSmallestConstructor(N: number): number {
    for (let i = 1; i < N; i++) {
        let sum = i;
        let current = i;
        while (current > 0) {
            sum += current % 10;
            current = Math.floor(current / 10);
        }
        if (sum === N) {
            return i;
        }
    }
    return 0;
}

const N = parseInt(input.trim());

console.log(findSmallestConstructor(N));