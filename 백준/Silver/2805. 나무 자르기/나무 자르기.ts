const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((item) => +item);
const treeList: number[] = input[1].split(" ").map((item) => +item);

let start = 0;
let end = Math.max(...treeList);
let result = 0;

while (start <= end) {
  let total = 0;
  let mid = Math.floor((start + end) / 2);

  for (let i = 0; i < N; i++) {
    if (treeList[i] > mid) {
      total += treeList[i] - mid;
    }
  }

  if (total < M) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);