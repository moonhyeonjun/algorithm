// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 상수 정의
const MOD = 1_000_000_009; // 결과를 나눌 값 (문제에서 주어진 수)

// 테스트 케이스 수
const T = parseInt(input[0], 10);

// 테스트 케이스별 n 값 추출
const testCases: number[] = input.slice(1).map(Number);

// 입력 중 가장 큰 n값 찾기 (미리 dp 배열을 효율적으로 계산하기 위해)
const maxN = Math.max(...testCases);

// dp 배열 초기화 (dp[i] = i를 1,2,3의 합으로 만드는 방법 수)
const dp: number[] = Array(maxN + 1).fill(0);

// 초기값 설정
dp[0] = 1; // 0을 만드는 경우의 수는 1가지 (아무것도 선택하지 않는 경우)
dp[1] = 1; // 1 = (1)
dp[2] = 2; // 2 = (1+1), (2)
dp[3] = 4; // 3 = (1+1+1), (1+2), (2+1), (3)

// DP 테이블 채우기
for (let i = 4; i <= maxN; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % MOD;
}

// 결과 출력
for (let n of testCases) {
  console.log(dp[n]);
}