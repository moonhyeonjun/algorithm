const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require('fs').readFileSync(filePath).toString().trim();

const N: number = parseInt(input);

let count: number = 0;

for (let i = 1; i <= N; i++) {
  if (i < 100) {
    count++;
  } else {
    const numArr: number[] = i.toString().split('').map(Number);
    if (numArr[0] - numArr[1] === numArr[1] - numArr[2]) {
      count++;
    }
  }
}

console.log(count);