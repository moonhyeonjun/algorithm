const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

let gcd = 0;
let lcm = 0;

for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
        gcd = i;
    }
}
    
lcm = a * b / gcd;

console.log(gcd);
console.log(lcm);