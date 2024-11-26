// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 입력값 처리
const n: number = parseInt(input, 10);

let sum: bigint = BigInt(0);

// i는 나머지와 몫이 동일한 경우에만 유효하므로 1부터 N-1까지 확인
for (let i = 1; i < n; i++) {
    sum += BigInt(i) * BigInt(n + 1); // 합에 i * (N + 1)을 추가
}

// 결과 계산 및 출력
console.log(sum.toString());