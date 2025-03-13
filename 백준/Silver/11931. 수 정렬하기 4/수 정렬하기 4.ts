// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 번째 줄: N (배열 크기)
const N: number = Number(input[0]);

// 두 번째 줄부터: 정렬할 숫자 배열
const numbers: number[] = input.slice(1, N + 1).map(Number);

// 내림차순 정렬
numbers.sort((a, b) => b - a);

// 결과 출력
console.log(numbers.join("\n"));