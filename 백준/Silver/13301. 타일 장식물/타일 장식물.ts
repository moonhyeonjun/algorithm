// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

const n: number = parseInt(input); 

/**
 * 피보나치 기반의 타일 장식물 둘레 계산
 * - 피보나치 수열을 BigInt로 저장하여 오버플로 방지
 * - 둘레 공식: `4 * F(N) + 2 * F(N-1)`
 */
function getPerimeter(n: number): string {
  if (n === 1) return "4"; // 예외 처리: F(1) = 1, 둘레 = 4

  const dp: bigint[] = Array(n + 1).fill(BigInt(0));
  dp[1] = BigInt(1);
  dp[2] = BigInt(1);

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // 공식 적용: 4 * F(N) + 2 * F(N-1)
  return (dp[n] * BigInt(4) + dp[n - 1] * BigInt(2)).toString();
}

// 결과 출력
console.log(getPerimeter(n));