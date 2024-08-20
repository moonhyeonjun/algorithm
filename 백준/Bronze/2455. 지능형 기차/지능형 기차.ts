const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let max: number = 0;
let current: number = 0;

for (let i = 0; i < input.length; i++) {
  const [out, in_] = input[i].split(" ").map((item) => +item);
  current += in_ - out;

  if (current > max) {
    max = current;
  }
}

console.log(max);