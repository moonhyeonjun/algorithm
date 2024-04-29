const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let result = '';

input.forEach(line => {
    let [repeat, str] = line.split(' ');
    if (!str) return;
    result += str.split('').map(char => char.repeat(repeat)).join('') + '\n';
});

console.log(result);