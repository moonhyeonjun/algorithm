const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

let n: number = 0;
let primeArr: number[] = [];

for (let i = 0; i < input.length; i++) {
  n = parseInt(input[i]);
  if (n === 0) break;
  primeArr.push(n);
}

const max: number = Math.max(...primeArr) * 2;
const prime: boolean[] = Array(max + 1).fill(true);
prime[0] = prime[1] = false;

for (let i = 2; i <= Math.floor(Math.sqrt(max)); i++) {
  if (prime[i]) {
    for (let j = i * i; j <= max; j += i) {
      prime[j] = false;
    }
  }
}

for (let i = 0; i < primeArr.length; i++) {
  let count: number = 0;
  for (let j = primeArr[i] + 1; j <= primeArr[i] * 2; j++) {
    if (prime[j]) count++;
  }
  console.log(count);
}