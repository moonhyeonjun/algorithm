const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath, 'utf8');

console.log(input);