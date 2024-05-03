const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const [a, b, c] = input;

if (a === 60 && b === 60 && c === 60) {
    console.log('Equilateral');
} else if (a + b + c === 180) {
    if (a === b || b === c || c === a) {
        console.log('Isosceles');
    } else {
        console.log('Scalene');
    }
} else {
    console.log('Error');
}