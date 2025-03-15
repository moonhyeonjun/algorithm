// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// N 값 가져오기
const N: number = parseInt(input);

// 정답 계산 (N 이하의 제곱수 개수)
const result: number = Math.floor(Math.sqrt(N));

// 출력
console.log(result);