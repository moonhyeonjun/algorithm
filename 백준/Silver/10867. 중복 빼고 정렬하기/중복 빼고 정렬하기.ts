// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 번째 줄: 수의 개수 (N), 두 번째 줄: 정수 배열
const N: number = parseInt(input[0]);
const numbers: number[] = input[1].split(" ").map(Number);

// 중복 제거와 정렬
const result: number[] = Array.from(new Set(numbers)).sort((a, b) => a - b);

// 결과 출력
console.log(result.join(" "));