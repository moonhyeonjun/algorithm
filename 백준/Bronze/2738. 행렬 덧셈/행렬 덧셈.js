const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
let A = [];
let B = [];
let result = [];

for (let i = 0; i < N; i++) {
    A.push(input[i].split(' ').map(Number));
};

for (let i = N; i < N + N; i++) {
    B.push(input[i].split(' ').map(Number));
};

for (let i = 0; i < N; i++) {
    let temp = [];
    for (let j = 0; j < M; j++) {
        temp.push(A[i][j] + B[i][j]);
    };
    result.push(temp);
};

for (let i = 0; i < N; i++) {
    console.log(result[i].join(' '));
};