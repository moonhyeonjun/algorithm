const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const [a, b, c, d, e, f] = input.map(Number);

let x = 0,
  y = 0;

for (x = -999; x <= 999; x++) {
  for (y = -999; y <= 999; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      console.log(x, y);
      process.exit(0);
    }
  }
}
