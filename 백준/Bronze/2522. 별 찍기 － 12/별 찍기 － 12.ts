const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

const N = parseInt(input);

let result = "";

for (let i = 1; i <= 2 * N - 1; i++) {
  if (i <= N) {
    result += "*".repeat(i).padStart(N, " ") + "\n";
  } else {
    result += "*".repeat(2 * N - i).padStart(N, " ") + "\n";
  }
}

console.log(result);
