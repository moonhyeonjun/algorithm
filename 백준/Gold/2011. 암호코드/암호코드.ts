// 입력 처리
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("");

const MOD = 1_000_000;
const n = input.length;

// 유효하지 않은 시작 (첫 글자가 '0')
if (input[0] === "0") {
  console.log(0);
  process.exit(0);
}

// dp[i]: i번째 문자까지 해석 가능한 경우의 수
const dp: number[] = new Array(n + 1).fill(0);
dp[0] = 1; // 초기값: 아무 문자도 해석 안한 상태
dp[1] = 1; // 첫 글자가 '0'이 아니므로 한 가지 방법 존재

for (let i = 2; i <= n; i++) {
  const oneDigit = Number(input[i - 1]); // 현재 한 글자
  const twoDigit = Number(input[i - 2] + input[i - 1]); // 앞과 현재 글자 두 개 조합

  // 현재 글자 해석 가능 (1~9)
  if (oneDigit >= 1 && oneDigit <= 9) {
    dp[i] += dp[i - 1];
    dp[i] %= MOD;
  }

  // 두 글자 조합 해석 가능 (10~26)
  if (twoDigit >= 10 && twoDigit <= 26) {
    dp[i] += dp[i - 2];
    dp[i] %= MOD;
  }
}

// 결과 출력
console.log(dp[n]);