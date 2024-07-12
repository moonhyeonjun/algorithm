const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require('fs').readFileSync(filePath).toString().trim();

const croatiaAlphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let count = 0;

for (let i = 0; i < input.length; i++) {
  count++;
  if (croatiaAlphabet.includes(input.slice(i, i + 2))) i++;
  if (croatiaAlphabet.includes(input.slice(i, i + 3))) i += 2;
}

console.log(count);