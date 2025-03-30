// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 소수 판별 함수 (효율적인 방식 사용)
const isPrime = (num: number): boolean => {
  if (num < 2) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
};

// n 이상의 가장 작은 소수를 찾는 함수
const nextPrime = (n: number): number => {
  while (!isPrime(n)) {
    n++;
  }
  return n;
};

// 테스트 케이스 처리
const T = parseInt(input[0], 10);
const results: number[] = [];

for (let i = 1; i <= T; i++) {
  const n = parseInt(input[i], 10);
  results.push(nextPrime(n));
}

// 결과 출력
console.log(results.join("\n"));