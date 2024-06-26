const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

const dial = {
    A: 3, B: 3, C: 3,
    D: 4, E: 4, F: 4,
    G: 5, H: 5, I: 5,
    J: 6, K: 6, L: 6,
    M: 7, N: 7, O: 7,
    P: 8, Q: 8, R: 8, S: 8,
    T: 9, U: 9, V: 9,
    W: 10, X: 10, Y: 10, Z: 10
}

let result = 0;

for (let i = 0; i < input.length; i++) {
    result += dial[input[i]];
}

console.log(result);