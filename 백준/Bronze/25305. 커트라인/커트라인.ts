const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map((item) => +item);
const scores: number[] = input[1].split(" ").map((item) => +item);

scores.sort((a, b) => b - a);

console.log(scores[K - 1]);