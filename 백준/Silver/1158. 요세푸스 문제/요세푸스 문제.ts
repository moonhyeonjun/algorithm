const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const N: number = +input[0];
const K: number = +input[1];

let result: number[] = [];
let queue: number[] = [];

for (let i = 1; i <= N; i++) {
  queue.push(i);
}

let index = 0;

while (queue.length > 0) {
  index = (index + K - 1) % queue.length;
  result.push(queue.splice(index, 1)[0]);
}

console.log("<" + result.join(", ") + ">");