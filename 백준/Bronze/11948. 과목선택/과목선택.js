const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const naturalSciencesScore = input.slice(0, 4);
const liberalArtsScore = input.slice(4);

const maxNaturalSciencesScore = naturalSciencesScore.sort((a, b) => b - a).slice(0, 3);
const maxLiberalArtsScore = liberalArtsScore.sort((a, b) => b - a).slice(0, 1);

const result = maxNaturalSciencesScore.reduce((acc, cur) => acc + cur, 0) + maxLiberalArtsScore.reduce((acc, cur) => acc + cur, 0);

console.log(result);