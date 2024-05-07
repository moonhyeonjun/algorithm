const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const testCase = parseInt(input[0]);
let result = '';

for (let i = 1; i <= testCase; i++) {
    const score = input[i].split(' ').map((item) => +item);
    const studentNum = score.shift();
    const avg = score.reduce((acc, cur) => acc + cur, 0) / studentNum;
    const overAvg = score.filter((item) => item > avg).length;
    const overAvgRate = ((overAvg / studentNum) * 100).toFixed(3);
    result += `${overAvgRate}%\n`;
}

console.log(result);