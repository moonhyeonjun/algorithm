const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const testCase = parseInt(input[0]);
let result = "";

for (let i = 1; i <= testCase; i++) {
  let [n, m] = input[i * 2 - 1].split(" ").map((value) => parseInt(value));
  const queue = input[i * 2].split(" ").map((value) => parseInt(value));
  let count = 0;

  while (queue.length > 0) {
    const first = queue.shift();
    if(!first) break;
    if (queue.some((value) => value > first)) {
      queue.push(first);
    } else {
      count++;
      if (m === 0) {
        result += count + "\n";
        break;
      }
    }
    m = m === 0 ? queue.length - 1 : m - 1;
  }
}

console.log(result);