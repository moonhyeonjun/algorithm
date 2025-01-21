// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 오르막 수 계산을 위한 동적 프로그래밍 방식 구현
const N: number = parseInt(input);

// dp[i][j]: 길이가 i이고 마지막 숫자가 j인 오르막 수의 개수
const dp: number[][] = Array.from({ length: N + 1 }, () => Array(10).fill(0));

// 길이가 1인 경우, 각 숫자 자체가 오르막 수
for (let j = 0; j < 10; j++) {
    dp[1][j] = 1;
}

// DP 테이블 채우기
for (let i = 2; i <= N; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k <= j; k++) {
            dp[i][j] = (dp[i][j] + dp[i - 1][k]) % 10007;
        }
    }
}

// 길이가 N인 오르막 수의 총합 계산
const result: number = dp[N].reduce((sum, val) => (sum + val) % 10007, 0);

// 결과 출력
console.log(result);