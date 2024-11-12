// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 입력 크기 n
const n: number = parseInt(input);

// 수행 횟수 계산
const executionCount: number = (n * (n - 1)) / 2;

// 수행 횟수와 시간 복잡도의 최고차항 차수 출력
console.log(executionCount);
console.log(2);