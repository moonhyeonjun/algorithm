const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.forEach((line) => {    
    const [a, b] = line.split(' ').map(Number);
    if (a === 0 && b === 0) return;
    if (b % a === 0) console.log('factor');
    if (a % b === 0) console.log('multiple');
    if (a % b !== 0 && b % a !== 0) console.log('neither');
})