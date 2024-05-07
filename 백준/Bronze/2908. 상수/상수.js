const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const result = input.map((value) => {
    return value.split('').reverse().join('');
}
).sort((a, b) => b - a);

console.log(result[0]);