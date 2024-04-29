const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.forEach((el) => {
    const [a, b] = el.split(" ").map(Number);
    if (a === 0 && b === 0) return;
    console.log(a + b);
});