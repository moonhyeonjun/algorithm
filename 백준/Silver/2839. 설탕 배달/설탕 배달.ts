const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require('fs').readFileSync(filePath).toString();

let N: number = parseInt(input);

let result: number = 0;

while (N % 5 !== 0 && N >= 0) {
  N -= 3;
  result++;
}

if (N < 0) {
  console.log(-1);
} else {
    result += N / 5;
    console.log(result);
}