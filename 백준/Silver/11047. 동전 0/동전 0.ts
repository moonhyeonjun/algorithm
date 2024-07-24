const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ").map((num) => parseInt(num));
const coins: number[] = input.slice(1).map((num) => parseInt(num));

let count: number = 0;

for (let i = N - 1; i >= 0; i--) {
  if (K === 0) break;
  count += Math.floor(K / coins[i]);
  K %= coins[i];
}

console.log(count);