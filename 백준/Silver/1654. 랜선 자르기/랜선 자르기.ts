const filePath: string =process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [K, N] = input[0].split(" ").map((item) => +item);

const arr: number[] = [];

for (let i = 1; i < K + 1; i++) {
  arr.push(+input[i]);
}

let left: number = 1;
let right: number = Math.max(...arr);

while (left <= right) {
  let mid: number = Math.floor((left + right) / 2);
  let cnt: number = 0;

  for (let i = 0; i < K; i++) {
    cnt += Math.floor(arr[i] / mid);
  }

  if (cnt >= N) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);