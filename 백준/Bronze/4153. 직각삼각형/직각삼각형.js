const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let result = "";

for (let i = 0; i < input.length; i++) {
    const [a, b, c] = input[i].split(" ").map((item) => +item);
    if (a === 0 && b === 0 && c === 0) break;
    if (a ** 2 + b ** 2 === c ** 2 || a ** 2 + c ** 2 === b ** 2 || b ** 2 + c ** 2 === a ** 2) {
        result += "right\n";
    } else {
        result += "wrong\n";
    }
};

console.log(result);