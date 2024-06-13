const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().split('\n').map(Number);

const T = input[0];
const results = [];

for (let i = 1; i <= T; i++) {
    const C = input[i];
    const quarters = Math.floor(C / 25);
    const remainingAfterQuarters = C % 25;
    const dimes = Math.floor(remainingAfterQuarters / 10);
    const remainingAfterDimes = remainingAfterQuarters % 10;
    const nickels = Math.floor(remainingAfterDimes / 5);
    const pennies = remainingAfterDimes % 5;

    results.push(`${quarters} ${dimes} ${nickels} ${pennies}`);
}

console.log(results.join('\n'));