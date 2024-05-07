const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

const vowels = ['a', 'e', 'i', 'o', 'u'];
let cnt = 0;

for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) cnt++;
}

console.log(cnt);