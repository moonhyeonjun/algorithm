// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

const MOD = 9901;
const n = +input;

// DP 배열 생성 (메모리 최적화)
let prev2: number = 1; // dp[0] = 1 (기본 1개 경우)
let prev1: number = 3; // dp[1] = 3 (X, 왼쪽 배치, 오른쪽 배치)
let current: number = prev1;

if (n === 1) {
  console.log(prev1);
} else {
  for (let i = 2; i <= n; i++) {
    current = (prev1 * 2 + prev2) % MOD;
    prev2 = prev1;
    prev1 = current;
  }
  console.log(current);
}