const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(BigInt);

const [money, people] = input;

const assigned = money / people;
const remain = money % people;

console.log(assigned.toString());
console.log(remain.toString());