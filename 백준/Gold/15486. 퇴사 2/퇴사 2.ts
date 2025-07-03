// 입력 처리
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const N = Number(input[0]);
const schedule = input.slice(1).map(line => {
  const [t, p] = line.split(" ").map(Number);
  return { t, p }; // 상담 기간 t, 수익 p
});

// dp[i]: i일에 시작했을 때 얻을 수 있는 최대 이익
const dp: number[] = Array(N + 2).fill(0); // N+1일은 퇴사일 → N+2 크기로 잡음

// 뒤에서부터 계산
for (let i = N; i >= 1; i--) {
  const { t, p } = schedule[i - 1]; // i일의 상담 정보
  const endDay = i + t; // 해당 상담이 끝나는 날

  // 상담을 할 수 있다면 → 최대 수익 비교
  if (endDay <= N + 1) {
    dp[i] = Math.max(dp[i + 1], p + dp[endDay]);
  } else {
    // 상담을 할 수 없다면 → 다음 날 최대 수익 그대로
    dp[i] = dp[i + 1];
  }
}

// 결과 출력
console.log(dp[1]);