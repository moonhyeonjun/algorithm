// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 메모이제이션을 위한 DP 배열 (-50 ~ 50 범위이므로 0~50 인덱스로 변환하여 사용)
const dp: number[][][] = Array.from({ length: 21 }, () =>
  Array.from({ length: 21 }, () => Array(21).fill(undefined))
);

// 재귀 함수 w(a, b, c)
const w = (a: number, b: number, c: number): number => {
  if (a <= 0 || b <= 0 || c <= 0) return 1;
  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);
  if (dp[a][b][c] !== undefined) return dp[a][b][c];
  
  if (a < b && b < c) {
    return (dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c));
  }
  return (dp[a][b][c] =
    w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1));
};

// 입력값을 처리하여 결과 출력
let result: string[] = [];
for (const line of input) {
  const [a, b, c] = line.split(" ").map(Number);
  if (a === -1 && b === -1 && c === -1) break;
  result.push(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
}
console.log(result.join("\n"));