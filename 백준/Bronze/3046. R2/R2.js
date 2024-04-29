const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const [num_1, avg] = input;
const num_2 = avg * 2 - num_1

console.log(num_2);