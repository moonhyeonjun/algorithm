const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const date = parseInt(input[0]);
const carNum = input[1].split(' ').map(Number);

let cnt = 0;

for (let i = 0; i < carNum.length; i++) {
    if (date === carNum[i]) {
        cnt++;
    }
}
    
console.log(cnt);