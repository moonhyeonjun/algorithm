const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const month = parseInt(input[0]);
const day = parseInt(input[1]);

if (month < 2 || (month === 2 && day < 18)) {
    console.log('Before');
} else if (month > 2 || (month === 2 && day > 18)) {
    console.log('After');
} else {
    console.log('Special');
}