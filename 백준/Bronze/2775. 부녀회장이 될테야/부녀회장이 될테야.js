const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i < input.length; i += 2) {
    const k = parseInt(input[i]);
    const n = parseInt(input[i + 1]);
    console.log(solution(k, n));
}

function solution(k, n) {
    const arr = Array.from({ length: k + 1 }, () => Array.from({ length: n + 1 }, () => 0));

    for (let i = 0; i <= n; i++) {
        arr[0][i] = i;
    }

    for (let i = 1; i <= k; i++) {
        for (let j = 1; j <= n; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
        }
    }

    return arr[k][n];
}