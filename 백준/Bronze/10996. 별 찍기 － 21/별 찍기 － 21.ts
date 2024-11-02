// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();
const n: number = parseInt(input, 10); // 입력값을 숫자로 변환

// 패턴 생성: 첫 줄과 두 번째 줄 패턴을 만들기
const piece = "*" + " *".repeat(Math.floor((n - 1) / 2)) + "\n" + " *".repeat(Math.floor(n / 2));

// N번 반복하여 패턴 출력
for (let i = 0; i < n; i++) {
  console.log(piece); // 매 회차마다 생성된 패턴 출력
}