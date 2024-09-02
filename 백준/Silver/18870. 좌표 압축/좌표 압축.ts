const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N: number = parseInt(input[0]);
const X: number[] = input[1].split(" ").map((item) => +item);
const sortedX: number[] = Array.from(new Set(X)).sort((a, b) => a - b);
const mapX: Map<number, number> = new Map();

sortedX.forEach((item, index) => {
  mapX.set(item, index);
});

let result: string = "";

X.forEach((item) => {
  result += mapX.get(item) + " ";
});

console.log(result);