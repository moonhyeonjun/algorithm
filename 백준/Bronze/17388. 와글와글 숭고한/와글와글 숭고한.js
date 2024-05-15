const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const [S, K, H] = input.map((value) => parseInt(value));

if (S + K + H >= 100) {
    console.log('OK');
} else {
    let min = Math.min(S, K, H);
    if (min === S) {
        console.log('Soongsil');
    } else if (min === K) {
        console.log('Korea');
    } else {
        console.log('Hanyang');
    }
}