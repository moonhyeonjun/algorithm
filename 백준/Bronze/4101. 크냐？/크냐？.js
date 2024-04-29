const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.forEach((data) => {
    const [a, b] = data.split(' ').map(Number);
    if (a === 0 && b === 0) return;
    a > b ? console.log('Yes') : console.log('No');
});

