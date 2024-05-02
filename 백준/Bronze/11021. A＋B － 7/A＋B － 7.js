const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();

let result = input.map((line ,i) => {
    let [a, b] = line.split(' ').map(Number);
    return `Case #${i + 1}: ${a + b}`
})

console.log(result.join('\n'));