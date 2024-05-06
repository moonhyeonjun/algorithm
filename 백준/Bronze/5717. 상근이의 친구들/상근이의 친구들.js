const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let i = 0;

while (true) {
    const [M, F] = input[i].split(' ').map(Number);
    if (M === 0 && F === 0) break;
    console.log(M + F);
    i++;
}