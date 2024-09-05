const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((item) => +item);
const notHeard: string[] = input.slice(1, N + 1);
const notSeen: string[] = input.slice(N + 1);

const notHeardMap = new Map();
const notSeenMap = new Map();
const result: string[] = [];

for (let i = 0; i < N; i++) {
  notHeardMap.set(notHeard[i], 1);
}

for (let i = 0; i < M; i++) {
  if (notHeardMap.has(notSeen[i])) {
    result.push(notSeen[i]);
  }
}

console.log(result.length);
console.log(result.sort().join("\n"));