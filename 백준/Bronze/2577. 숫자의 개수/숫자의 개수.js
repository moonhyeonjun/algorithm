const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const result = input.reduce((acc, cur) => acc * cur, 1).toString().split('');

for (let i = 0; i < 10; i++) {
    let count = 0;
    for (let j = 0; j < result.length; j++) {
        if (Number(result[j]) === i) {
            count++;
        }
    };
    console.log(count);
};