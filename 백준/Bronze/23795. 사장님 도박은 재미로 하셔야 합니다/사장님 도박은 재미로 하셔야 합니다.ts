// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 결과값
let result: number = 0;

// 입력값을 순회하면서 결과값 계산
for (let i = 0; i < input.length; i++) {
  const money: number = +input[i];
  if (money === -1) break;
  result += money;
}

// 결과값 출력
console.log(result);