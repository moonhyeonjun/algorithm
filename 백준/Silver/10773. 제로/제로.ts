const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require('fs').readFileSync(filePath).toString().trim().split("\n");

const K: number = parseInt(input[0]);
const stack: number[] = [];

for (let i = 1; i <= K; i++) {
    if (parseInt(input[i]) === 0) {
        stack.pop();
    } else {
        stack.push(parseInt(input[i]));
    }
}

let sum: number = 0;

for (let i = 0; i < stack.length; i++) {
    sum += stack[i];
}

console.log(sum);