// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 입력을 정수로 변환
const n: number = parseInt(input);

// 연산 횟수 계산: 이중 반복문이므로 n^2 횟수만큼 수행
const executionCount = n * n;

// 최고차항의 차수 출력: 시간복잡도는 n^2에 비례하므로 차수는 2
const maxOrder = 2;

// 결과 출력
console.log(executionCount);
console.log(maxOrder);