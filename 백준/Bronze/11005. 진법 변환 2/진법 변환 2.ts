const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

let n: number = parseInt(input[0]);
let b: number = parseInt(input[1]);

let result: string = "";

while (n > 0) {
  let remainder: number = n % b;
  n = Math.floor(n / b);

  if (remainder >= 10) {
    result += String.fromCharCode(remainder + 55);
  } else {
    result += remainder;
  }
}

console.log(result.split("").reverse().join(""));