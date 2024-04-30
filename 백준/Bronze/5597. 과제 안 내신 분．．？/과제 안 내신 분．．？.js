const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let result = '';

Array.from({ length: 30 }, (v, i) => i + 1).forEach((v) => {
    if (!input.includes(v.toString())) {
        result += v + '\n';
    };
 });


console.log(result);