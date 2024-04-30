const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
const findNum = parseInt(input[2]);

let answer = 0;

for (let i = 0; i < N; i++) {
    if (arr[i] === findNum) {
        answer++;
    };
};

console.log(answer);