// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

const n: number = parseInt(input); 

/**
 * 피보나치 수열을 이용하여 N개의 타일로 만든 장식물의 둘레를 구하는 함수
 * 둘레 공식: 2 × (F(N) + F(N+1))
 * F는 피보나치 수열: F(1) = 1, F(2) = 1, F(3) = 2, ...
 */
function getPerimeter(n: number): number {
  const fib: number[] = Array(n + 2).fill(0); // N+1까지 필요하므로 N+2 크기로 선언
  fib[1] = 1;
  fib[2] = 1;

  // 피보나치 수열 계산
  for (let i = 3; i <= n + 1; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  // 둘레 계산: 2 * (F(N) + F(N+1))
  return 2 * (fib[n] + fib[n + 1]);
}

// 결과 출력
console.log(getPerimeter(n));