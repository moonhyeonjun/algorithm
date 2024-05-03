const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const minkook = input[0].split(' ').map((value) => parseInt(value));
const manse = input[1].split(' ').map((value) => parseInt(value));

const minkookScore = minkook.reduce((acc, cur) => acc + cur, 0);
const manseScore = manse.reduce((acc, cur) => acc + cur, 0);

console.log(Math.max(minkookScore, manseScore));