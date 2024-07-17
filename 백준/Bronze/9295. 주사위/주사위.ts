const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
    const [A, B] = input[i].split(' ').map(e => Number(e));
    console.log(`Case ${i}: ${A + B}`);
}