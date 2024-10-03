// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();
const N: number = parseInt(input);

// DP 배열 초기화
// dp[i]: 돌이 i개 남았을 때 이길 수 있는 사람을 나타냄 (true: 상근이가 이김, false: 창영이가 이김)
const dp: boolean[] = Array(N + 1).fill(false);

// 초기값 설정
dp[1] = true;  // 1개의 돌이 있으면 상근이가 이긴다 (1개를 가져가면 끝)
if (N >= 2) dp[2] = false; // 2개의 돌은 상근이가 1개 가져가면 창영이가 이긴다
if (N >= 3) dp[3] = true;  // 3개의 돌이 있으면 상근이가 3개 가져가서 이긴다

// 동적 계획법으로 dp 배열 채우기
for (let i = 4; i <= N; i++) {
    // 돌을 1개 가져가거나, 3개 가져갔을 때 상대가 지는 상황이라면 상근이가 이김
    dp[i] = !dp[i - 1] || !dp[i - 3];
}

// 결과 출력
console.log(dp[N] ? "SK" : "CY");