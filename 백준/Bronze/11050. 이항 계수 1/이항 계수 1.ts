const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require('fs').readFileSync(filePath).toString().split(' ');

let [N, K] = input.map(Number);
let result = 1;
for (let i = 0; i < K; i++) {
    result *= N;
    N--;
}
let divisor = 1;
for (let i = 2; i <= K; i++) {
    divisor *= i;
}
console.log(result / divisor);