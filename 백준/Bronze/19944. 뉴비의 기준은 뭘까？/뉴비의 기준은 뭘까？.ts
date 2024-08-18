const filePath: string =
  process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const N: number = parseInt(input[0]);
const M: number = parseInt(input[1]);

if (M === 1 || M === 2) {
  console.log("NEWBIE!");
}

if (M > 2 && M <= N) {
  console.log("OLDBIE!");
}

if (M > N) {
  console.log("TLE!");
}