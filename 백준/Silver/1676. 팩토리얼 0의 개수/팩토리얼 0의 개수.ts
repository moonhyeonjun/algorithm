const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

let n: number = +input;
let count: number = 0;

for (let i = 5; i <= n; i *= 5) {
  count += Math.floor(n / i);
}

console.log(count);