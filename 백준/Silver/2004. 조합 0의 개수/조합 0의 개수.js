// 파일 입력 처리
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const n = BigInt(input[0]);
const m = BigInt(input[1]);

/**
 * 팩토리얼에서 특정 소수(k)의 지수 개수를 구하는 함수
 * 예: 25!에서 5의 지수 => floor(25/5) + floor(25/25)
 */
function countPrimeInFactorial(n, k) {
  let count = 0n;
  let divisor = k;

  while (n >= divisor) {
    count += n / divisor;
    divisor *= k;
  }

  return count;
}

/**
 * 조합 nCm에서 2와 5의 소인수 개수를 구하고
 * 둘 중 더 적은 쪽이 끝자리 0의 개수가 됨
 */
function countTrailingZeros(n, m) {
  const two = countPrimeInFactorial(n, 2n) - countPrimeInFactorial(m, 2n) - countPrimeInFactorial(n - m, 2n);
  const five = countPrimeInFactorial(n, 5n) - countPrimeInFactorial(m, 5n) - countPrimeInFactorial(n - m, 5n);

  return Number(two < five ? two : five);
}

// 결과 출력
console.log(countTrailingZeros(n, m));