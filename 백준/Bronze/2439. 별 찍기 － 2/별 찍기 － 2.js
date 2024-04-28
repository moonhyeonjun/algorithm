const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const N = parseInt(input[0]);

for (let i = 1; i <= N; i++) {
    let star = "";
    for (let j = 1; j <= N - i; j++) {
        star += " ";
    }
    for (let k = 1; k <= i; k++) {
        star += "*";
    }
    console.log(star);
};