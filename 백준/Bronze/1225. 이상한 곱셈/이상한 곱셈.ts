// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split(" ");

const A: string = input[0];
const B: string = input[1];

// A의 각 자리 합과 B의 각 자리 합 계산
const sumA: number = A.split("").reduce((acc, cur) => acc + Number(cur), 0);
const sumB: number = B.split("").reduce((acc, cur) => acc + Number(cur), 0);

// 형택이의 곱셈 결과 계산
const result: number = sumA * sumB;

// 결과 출력
console.log(result);