const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim();

let res = "z".repeat(51);

for (let i = 1; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const a = input.slice(0, i).split("").reverse().join("");
    const b = input.slice(i, j).split("").reverse().join("");
    const c = input.slice(j).split("").reverse().join("");
    const word = a + b + c;
    if (word < res) res = word;
  }
}

console.log(res);