let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let a = input[0];
let op = input[1];
let b = input[2];

if (op === "*") {
  // 10^m * 10^n = 10^(m+n)
  console.log("1" + "0".repeat(a.length - 1 + b.length - 1));
} else {
  // 덧셈 (+) 연산
  if (a.length === b.length) {
    console.log("2" + "0".repeat(a.length - 1));
  } else {
    // 더 큰 숫자를 유지하고 작은 숫자를 적절히 배치
    if (a.length < b.length) [a, b] = [b, a]; // 항상 a가 더 크게 만듦
    console.log(a.slice(0, a.length - b.length) + "1" + a.slice(a.length - b.length + 1));
  }
}