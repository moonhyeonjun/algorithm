const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const testCase = input.shift();
let result = '';

for (let i = 0; i < testCase; i++) {
    let score = 0;
    let count = 0;

    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === 'O') {
            count++;
            score += count;
        } else {
            count = 0;
        };
    };
    result += score + '\n';
};

console.log(result);