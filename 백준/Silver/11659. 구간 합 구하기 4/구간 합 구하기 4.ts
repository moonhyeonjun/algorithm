const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((item) => +item);
const numbers = input[1].split(" ").map((item) => +item);
const sum = Array(N + 1).fill(0);
let result = "";

for (let i = 1; i <= N; i++) {
  sum[i] = sum[i - 1] + numbers[i - 1];
}

for (let i = 2; i <= N; i++) {
  sum[i] = sum[i - 1] + numbers[i - 1];
}

for (let i = 2; i <= N; i++) {
  sum[i] = sum[i - 1] + numbers[i - 1];
}

for (let i = 0; i < M; i++) {
  const [start, end] = input[i + 2].split(" ").map((item) => +item);
  result += `${sum[end] - sum[start - 1]}\n`;
}

console.log(result);