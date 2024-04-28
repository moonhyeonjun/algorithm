const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString();

const num = Number(inputData);
let result = '';

for (let i = 1; i <= num; i++) {
    result += '*';
    console.log(result);
}