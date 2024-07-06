const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require('fs').readFileSync(filePath).toString();

let change: number = 1000 - +input;
let count: number = 0;

[500, 100, 50, 10, 5, 1].forEach((coin: number) => {
  count += Math.floor(change / coin);
  change %= coin;
});

console.log(count);