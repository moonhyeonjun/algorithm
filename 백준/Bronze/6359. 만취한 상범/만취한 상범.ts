// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const T: number = Number(input[0]); // 테스트 케이스 개수
const results: number[] = [];

for (let i = 1; i <= T; i++) {
  const n: number = Number(input[i]);
  // n 이하의 완전제곱수 개수를 세면 됨
  results.push(Math.floor(Math.sqrt(n)));
}

console.log(results.join("\n"));