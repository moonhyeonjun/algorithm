const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

const n = parseInt(input);

for (let i = 1; i <= n; i++) {
  console.log(`Hello World, Judge ${i}!`);
}