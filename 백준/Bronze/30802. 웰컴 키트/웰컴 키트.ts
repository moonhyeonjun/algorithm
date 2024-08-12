const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N: number = parseInt(input[0], 10);
const sizeArr: number[] = input[1].split(" ").map((num) => parseInt(num, 10));
const [T, P]: number[] = input[2].split(" ").map((num) => parseInt(num, 10));

let cnt = 0;

for (let i = 0; i < 6; i++) {
  cnt += Math.floor(sizeArr[i] / T);
  cnt = sizeArr[i] % T > 0 ? cnt + 1 : cnt;
}

console.log(`${cnt}`);
console.log(`${Math.floor(N / P)} ${N % P}`);