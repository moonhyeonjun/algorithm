const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const scores = input[1].split(' ').map(Number);
const max = Math.max(...scores);
const average = scores.reduce((acc, cur) => acc + cur / max * 100, 0) / N;

console.log(average);