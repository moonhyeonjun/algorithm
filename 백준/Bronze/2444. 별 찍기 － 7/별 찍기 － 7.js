const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

let n = parseInt(input);

for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = 1; j <= n - i; j++) {
        star += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        star += "*";
    }
    console.log(star);
}

for (let i = n - 1; i >= 1; i--) {
    let star = "";
    for (let j = 1; j <= n - i; j++) {
        star += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        star += "*";
    }
    console.log(star);
}