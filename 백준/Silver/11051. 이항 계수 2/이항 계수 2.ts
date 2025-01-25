// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const [N, K]: number[] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

// 모듈러 연산을 위한 상수
const MOD: number = 10007;

// 이항 계수를 계산하는 DP 테이블 초기화
const dp: number[][] = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

// DP 테이블 초기값 설정
for (let i = 0; i <= N; i++) {
  dp[i][0] = 1; // nC0 = 1
  dp[i][i] = 1; // nCn = 1
}

// DP를 활용하여 이항 계수 계산
for (let i = 2; i <= N; i++) {
  for (let j = 1; j < i; j++) {
    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % MOD;
  }
}

// 결과 출력
console.log(dp[N][K]);