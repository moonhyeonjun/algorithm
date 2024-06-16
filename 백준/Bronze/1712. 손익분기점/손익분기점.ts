const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().split(' ');

const [A, B, C] = input.map(Number);

if (C <= B) {
    console.log(-1);
} else {
    const breakEvenPoint = Math.floor(A / (C - B)) + 1;
    console.log(breakEvenPoint);
}