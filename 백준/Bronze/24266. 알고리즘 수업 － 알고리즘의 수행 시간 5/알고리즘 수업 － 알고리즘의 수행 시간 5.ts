// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 입력 값 파싱
const n = BigInt(input);

// 코드1 수행 횟수 계산 및 출력
console.log(`${n * n * n}`);
console.log('3');