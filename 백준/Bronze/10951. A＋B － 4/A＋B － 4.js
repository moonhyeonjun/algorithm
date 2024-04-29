const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.forEach((el) => {
    const [a, b] = el.split(" ").map(Number);
    console.log(a + b);
});