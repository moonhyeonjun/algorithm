const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require('fs').readFileSync(filePath).toString().trim();

const X: number = +input;
let line: number = 1;
let count: number = 0;

while (count < X) {
  count += line;
  line++;
}

if (line % 2 === 0) {
  console.log(`${count - X + 1}/${line - (count - X + 1)}`);
}

if (line % 2 !== 0) {
  console.log(`${line - (count - X + 1)}/${count - X + 1}`);
}