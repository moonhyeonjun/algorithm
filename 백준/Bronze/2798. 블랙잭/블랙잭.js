const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map((i) => parseInt(i));

const cardList = input[1].split(' ').map((i) => parseInt(i));

let result = 0;
let sum = 0;

for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
        for (let k = j + 1; k < N; k++) {
        sum = cardList[i] + cardList[j] + cardList[k];
        if (sum <= M && sum > result) {
            result = sum;
        }
        }
    }
}
    
console.log(result);