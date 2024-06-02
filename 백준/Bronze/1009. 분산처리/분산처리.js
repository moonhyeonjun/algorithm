const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const T = parseInt(input.shift());

for (let i = 0; i < T; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    const aLastNum = a % 10;
    let result = 1;

    for (let j = 0; j < b; j++) {
        result = (result * aLastNum) % 10;
    }

    console.log(result === 0 ? 10 : result);
}