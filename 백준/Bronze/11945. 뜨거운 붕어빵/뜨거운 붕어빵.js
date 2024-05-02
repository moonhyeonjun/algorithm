const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').slice(1);

const result = input.map(item => item.split('').reverse().join(''));

console.log(result.join('\n'));