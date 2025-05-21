// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

// 입력 값 파싱
const N: number = parseInt(input);

/**
 * 소수인지 판별하는 함수
 * - 2부터 sqrt(n)까지 나눠보며 나누어떨어지면 소수가 아님
 */
const isPrime = (n: number): boolean => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

/**
 * 팰린드롬 수인지 판별하는 함수
 * - 문자열을 뒤집어서 비교
 */
const isPalindrome = (n: number): boolean => {
  const str = n.toString();
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

// N 이상이면서 소수 & 팰린드롬인 가장 작은 수를 찾기
let result = N;
while (true) {
  if (isPalindrome(result) && isPrime(result)) {
    console.log(result);
    break;
  }
  result++;
}