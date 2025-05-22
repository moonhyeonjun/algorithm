// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

// 입력값을 BigInt로 변환 (최대 2^63 미만의 수를 다루기 위해)
const a = BigInt(input[0]);
const b = BigInt(input[1]);

/**
 * 유클리드 호제법을 이용한 최대공약수(GCD) 함수
 * @param {bigint} x - 첫 번째 수
 * @param {bigint} y - 두 번째 수
 * @returns {bigint} 최대공약수
 */
function gcd(x, y) {
  while (y !== 0n) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

// A와 B의 최대공약수를 계산
const resultLen = gcd(a, b);

// 결과 출력 (문제 조건: 최대 천만 자리)
if (resultLen > 10_000_000n) {
  console.log("1".repeat(10_000_000));
} else {
  console.log("1".repeat(Number(resultLen)));
}