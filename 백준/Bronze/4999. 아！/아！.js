const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [a, b] = input;

a.length < b.length ? console.log('no') : console.log('go');