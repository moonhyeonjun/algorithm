// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();
const n = BigInt(input); // BigInt로 입력값 변환

// 수행 횟수 계산
const result = (n * (n - BigInt(1)) * (n - BigInt(2))) / BigInt(6);

// 결과 출력
console.log(String(result)); // 수행 횟수
console.log(3); // 최고차항의 차수