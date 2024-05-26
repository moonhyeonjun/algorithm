const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const x = [];
const y = [];

for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split(' ').map((item) => +item);
    x.push(a);
    y.push(b);
}

const resultX = x.reduce((acc, cur) => {
    if (x.indexOf(cur) === x.lastIndexOf(cur)) {
        acc = cur;
    }
    return acc;
}, 0);

const resultY = y.reduce((acc, cur) => {
    if (y.indexOf(cur) === y.lastIndexOf(cur)) {
        acc = cur;
    }
    return acc;
}, 0);

console.log(resultX, resultY);