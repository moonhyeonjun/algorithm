const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map((i) => parseInt(i));
const [c, d] = input[1].split(' ').map((i) => parseInt(i));

const firstCase = a + d;
const secondCase = b + c;

console.log(Math.min(firstCase, secondCase));