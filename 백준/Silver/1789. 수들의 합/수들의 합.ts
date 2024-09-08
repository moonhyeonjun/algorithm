const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

const S: number = parseInt(input);

let sum: number = 0;
let N: number = 0;

for (let i = 1; ; i++) {
    sum += i;
    if (sum > S) {
        N = i - 1;
        break;
    }
}

console.log(N);