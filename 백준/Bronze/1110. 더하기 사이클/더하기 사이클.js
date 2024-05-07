const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

let num = input;
let count = 0;
let sum = 0;
let newNum = 0;

while (true) {
    sum = parseInt(num / 10) + num % 10;
    newNum = (num % 10) * 10 + sum % 10;
    count++;
    num = newNum;

    if (newNum == input) {
        break;
    }
}

console.log(count);