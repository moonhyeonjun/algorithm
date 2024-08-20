const filePath: string =process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

const N: number = parseInt(input);

const result: number = (2 ** N + 1) ** 2;

console.log(result);