const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 처리
const N = Number(input[0]);
const schedule: { time: number; pay: number }[] = input.slice(1).map((line) => {
  const [time, pay] = line.split(" ").map(Number);
  return { time, pay };
});

// DP 배열 선언 (최대 이익을 저장할 배열)
const dp = Array(N + 1).fill(0);

// 거꾸로 DP 진행
for (let i = N - 1; i >= 0; i--) {
  const { time, pay } = schedule[i];

  // 상담이 끝나는 날
  const endDay = i + time;

  // 상담을 할 수 있으면
  if (endDay <= N) {
    dp[i] = Math.max(dp[i + 1], pay + dp[endDay]);
  } else {
    dp[i] = dp[i + 1]; // 상담을 못하면 이전 값 유지
  }
}

// 결과 출력 (0일차에서의 최대 이익)
console.log(dp[0]);