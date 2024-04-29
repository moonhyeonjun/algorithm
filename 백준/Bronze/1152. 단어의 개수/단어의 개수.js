const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const result = input.filter((el) => el !== "").length;

console.log(result);