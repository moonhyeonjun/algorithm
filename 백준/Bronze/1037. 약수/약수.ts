const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require('fs').readFileSync(filePath).toString().split('\n');

const N: number = parseInt(input[0]);
const divisorList: number[] = input[1].split(' ').map((item) => parseInt(item));

divisorList.sort((a, b) => a - b);
console.log(divisorList[0] * divisorList[N - 1]);