const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);

for(let i = 1; i <= n; i++){
    const lowerCase = input[i].toLowerCase();
    console.log(lowerCase);
}