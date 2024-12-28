const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const road = input.shift().split(" ").map(BigInt);

const gasPrice = input.shift().split(" ").map(BigInt);

let cost = 0n;
let currPrice = gasPrice[0];

for (let i = 0; i < N - 1; i++) {
  cost += currPrice * road[i];

  if (currPrice > gasPrice[i + 1]) {
    currPrice = gasPrice[i + 1];
  }
}

console.log(String(cost));