// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력값 파싱
const [N, K] = input[0].split(" ").map(Number);
const items: { weight: number, value: number }[] = input.slice(1).map(line => {
  const [weight, value] = line.split(" ").map(Number);
  return { weight, value };
});

// dp 배열 생성 (최대 무게 K까지의 가치를 저장)
const dp: number[] = new Array(K + 1).fill(0);

// 동적 프로그래밍 진행
for (let i = 0; i < N; i++) {
  const { weight, value } = items[i];
  // 역순으로 돌면서 dp를 갱신
  for (let w = K; w >= weight; w--) {
    dp[w] = Math.max(dp[w], dp[w - weight] + value);
  }
}

// 최대 가치 출력
console.log(dp[K]);