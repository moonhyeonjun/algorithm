const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

let star = '';

for (let i = 1; i <= input; i++) {
    for (let j = input - i; j > 0; j--) {
        star += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        star += '*';
    }
    star += '\n';
}

console.log(star);