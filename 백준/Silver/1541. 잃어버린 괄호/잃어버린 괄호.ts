const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

const parts: string[] = input.split("-");

let result: number = parts[0]
  .split("+")
  .map(Number)
  .reduce((acc, cur) => acc + cur, 0);

for (let i = 1; i < parts.length; i++) {
  const sum = parts[i]
    .split("+")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
  result -= sum;
}

console.log(result);