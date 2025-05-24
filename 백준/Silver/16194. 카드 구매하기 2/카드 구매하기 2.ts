// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 카드 개수 N
const N: number = parseInt(input[0]);

// 카드팩 가격 배열 (1개부터 N개짜리 팩까지)
const packPrices: number[] = input[1].split(" ").map(Number);

// dp[i]: 카드 i개를 구매하는 데 필요한 최소 비용
const dp: number[] = Array(N + 1).fill(Infinity);
dp[0] = 0; // 카드 0개를 사는 데 드는 비용은 0

// i: 만들고자 하는 카드 개수
for (let i = 1; i <= N; i++) {
  // j: 카드팩 크기 (1 ~ i)
  for (let j = 1; j <= i; j++) {
    // 카드 j개짜리 팩을 사용해서 i개 만들기
    dp[i] = Math.min(dp[i], dp[i - j] + packPrices[j - 1]);
  }
}

// 결과 출력
console.log(dp[N]);