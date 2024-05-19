const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('/').map(Number);

const [K, D, A] = input; 

if (K + A < D || D === 0) {
    console.log('hasu');
} else {
    console.log('gosu');
}