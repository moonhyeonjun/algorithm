const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    const [N, M] = input[i].split(' ').map((i) => parseInt(i));
    console.log(bridge(N, M));
};

function bridge(N, M) {
    let result = 1;
    for (let i = 0; i < N; i++) {
        result *= M - i;
        result /= i + 1;
    }
    return result;
};