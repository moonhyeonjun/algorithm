const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const R: number = parseInt(input[0]);
const sanggeunMoves: string = input[1];
const N: number = parseInt(input[2]);
const friendsMoves: string[] = input.slice(3, 3 + N);

const getScore = (sanggeun: string, friend: string): number => {
  if (sanggeun === friend) return 1;
  if (
    (sanggeun === "S" && friend === "P") ||
    (sanggeun === "P" && friend === "R") ||
    (sanggeun === "R" && friend === "S")
  )
    return 2;
  return 0;
};

let actualScore: number = 0;
for (let round = 0; round < R; round++) {
  for (let friend = 0; friend < N; friend++) {
    actualScore += getScore(sanggeunMoves[round], friendsMoves[friend][round]);
  }
}

let maxScore: number = 0;
const options: string[] = ["S", "P", "R"];

for (let round = 0; round < R; round++) {
  let roundMax = 0;
  for (const option of options) {
    let currentRoundScore = 0;
    for (let friend = 0; friend < N; friend++) {
      currentRoundScore += getScore(option, friendsMoves[friend][round]);
    }
    roundMax = Math.max(roundMax, currentRoundScore);
  }
  maxScore += roundMax;
}

console.log(actualScore);
console.log(maxScore);