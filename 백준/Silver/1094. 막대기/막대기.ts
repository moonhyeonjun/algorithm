const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

let X: number = parseInt(input);
let stick: number = 64;
let answer: number = 0;

while (X > 0) {
  if (stick > X) {
    stick = stick / 2;
  } else {
    X -= stick;
    answer++;
  }
}

console.log(answer);