// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]); // 테스트 케이스 개수
const cases: number[] = input.slice(1).map(Number);
const MAX = Math.max(...cases);

// 소수 판별 배열을 에라토스테네스의 체로 생성
const isPrime: boolean[] = new Array(MAX + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= MAX; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= MAX; j += i) {
      isPrime[j] = false;
    }
  }
}

// 각 테스트 케이스에 대해 골드바흐 파티션 수 계산
const results: number[] = cases.map((n) => {
  let count = 0;

  // p + q = n일 때, p ≤ q인 경우만 센다 (중복 방지)
  for (let p = 2; p <= n / 2; p++) {
    const q = n - p;
    if (isPrime[p] && isPrime[q]) {
      count++;
    }
  }

  return count;
});

// 결과 출력
console.log(results.join("\n"));