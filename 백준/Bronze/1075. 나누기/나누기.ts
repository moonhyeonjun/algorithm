const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]); // N 값
const F = parseInt(input[1]); // F 값

// 마지막 두 자리를 00으로 변경
let modifiedN = Math.floor(N / 100) * 100;

// 00부터 99까지 탐색하며 나누어 떨어지는 값 찾기
let result = 0;
for (let i = 0; i < 100; i++) {
  if ((modifiedN + i) % F === 0) {
    result = i;
    break;
  }
}

// 두 자리 수로 만들기 위해 0을 추가한 문자열로 출력
console.log(result.toString().padStart(2, "0"));