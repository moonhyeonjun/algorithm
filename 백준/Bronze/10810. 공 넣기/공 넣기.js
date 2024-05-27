const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const ball = Array.from({ length: N }, () => 0);

for (let i = 1; i <= M; i++) {
    const [start, end, num] = input[i].split(' ').map(Number);
    for (let j = start - 1; j < end; j++) {
        ball[j] = num;
    }
}

console.log(ball.join(' '));