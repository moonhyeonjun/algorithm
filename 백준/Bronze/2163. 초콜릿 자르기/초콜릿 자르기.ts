const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require('fs').readFileSync(filePath).toString().split(' ');

const [N, M] = input.map((item) => parseInt(item));

console.log(N * M - 1);