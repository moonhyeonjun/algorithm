// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split(" ");

// 네 수 A, B, C, D 할당
const [A, B, C, D] = input;

// 문자열 결합 후 숫자로 변환
const num1 = Number(A + B); // A와 B를 붙여 하나의 숫자로 변환
const num2 = Number(C + D); // C와 D를 붙여 하나의 숫자로 변환

// 합 계산
const result = num1 + num2;

// 결과 출력
console.log(result);