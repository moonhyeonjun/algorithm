// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

const N: number = parseInt(input);

// N이 짝수면 SK 승리, 홀수면 CY 승리
console.log(N % 2 === 0 ? "SK" : "CY");