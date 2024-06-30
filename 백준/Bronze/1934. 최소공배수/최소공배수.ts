const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n");

for (let i: number = 1; i <= +input[0]; i++) {
  const [a, b]: number[] = input[i].split(" ").map(Number);
  const gcd: Function = (a: number, b: number): number =>
    b === 0 ? a : gcd(b, a % b);
  const lcm: Function = (a: number, b: number): number => (a * b) / gcd(a, b);
  console.log(lcm(a, b));
}