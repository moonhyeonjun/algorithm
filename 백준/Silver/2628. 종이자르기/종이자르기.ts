const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const [w, h] = input[0].split(" ").map(Number);
const n = Number(input[1]);
const cuts = input.slice(2).map(line => line.split(" ").map(Number));

const hCuts: number[] = [0, h];
const vCuts: number[] = [0, w];

for (const [dir, pos] of cuts) {
  if (dir === 0) hCuts.push(pos);
  else vCuts.push(pos);
}

hCuts.sort((a, b) => a - b);
vCuts.sort((a, b) => a - b);

let maxH = 0;
let maxW = 0;

for (let i = 1; i < hCuts.length; i++) {
  const diff = hCuts[i] - hCuts[i - 1];
  if (diff > maxH) maxH = diff;
}

for (let i = 1; i < vCuts.length; i++) {
  const diff = vCuts[i] - vCuts[i - 1];
  if (diff > maxW) maxW = diff;
}

console.log(maxH * maxW);