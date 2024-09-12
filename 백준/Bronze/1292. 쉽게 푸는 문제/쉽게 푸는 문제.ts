const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split(" ");

const A: number = +input[0];
const B: number = +input[1];

let sum: number = 0;
let count: number = 1;

for (let i = 1; i <= B; i++) {
  for (let j = 0; j < i; j++) {
    if (count >= A && count <= B) {
      sum += i;
    }
    count++;
  }
}

console.log(sum);