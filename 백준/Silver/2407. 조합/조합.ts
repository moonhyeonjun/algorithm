import * as readline from "readline";

/**
 * 문자열 숫자 덧셈 함수 (큰 수 연산)
 * @param {string} num1
 * @param {string} num2
 * @returns {string} 더한 결과 (큰 수 연산)
 */
const calc = (num1: string, num2: string): string => {
  let result = "";
  let sum = 0;

  while (num1.length > 0 || num2.length > 0 || sum > 0) {
    if (num1.length > 0) {
      sum += Number(num1[num1.length - 1]);
      num1 = num1.slice(0, -1);
    }

    if (num2.length > 0) {
      sum += Number(num2[num2.length - 1]);
      num2 = num2.slice(0, -1);
    }

    result += String(sum % 10);
    sum = Math.floor(sum / 10);
  }

  return result.split("").reverse().join("");
};

/**
 * 조합 계산 (큰 수 대응)
 * @param {number} n
 * @param {number} m
 * @returns {string} nCm 결과값 (문자열)
 */
const combination = (n: number, m: number): string => {
  const dp: string[][] = Array.from({ length: n + 1 }, () => Array(n + 1).fill("0"));

  dp[0][0] = "1";
  dp[1][0] = "1";
  dp[1][1] = "1";

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      if (i === j || j === 0) {
        dp[i][j] = "1";
      } else {
        dp[i][j] = calc(dp[i - 1][j], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[n][m];
};

// 입력 처리
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input: string[] = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, m] = input[0].split(" ").map(Number);
  console.log(combination(n, m));
  process.exit();
});