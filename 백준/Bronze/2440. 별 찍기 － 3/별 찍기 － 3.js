const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";

let input = fs.readFileSync(filePath).toString().split(" ");

const N = parseInt(input[0]);

for (let i = N; i > 0; i--) {
    let star = "";
    for (let j = 0; j < i; j++) {
        star += "*";
    }
    console.log(star);
};