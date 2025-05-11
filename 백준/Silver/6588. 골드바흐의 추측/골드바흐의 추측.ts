// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

// 최대 숫자 정의 (문제에서 주어진 1,000,000)
const MAX = 1_000_000;

// 에라토스테네스의 체를 이용한 소수 판별 배열 생성
const isPrime = new Array<boolean>(MAX + 1).fill(true);
isPrime[0] = isPrime[1] = false;

// 소수 판별: i의 배수들을 전부 false로 마킹
for (let i = 2; i * i <= MAX; i++) {
  if (!isPrime[i]) continue;
  for (let j = i * i; j <= MAX; j += i) {
    isPrime[j] = false;
  }
}

// 결과 저장용 배열
const result: string[] = [];

// 각 짝수 입력에 대해 골드바흐 추측 확인
for (const n of input) {
  if (n === 0) break;

  let found = false;

  // a는 3부터 n/2까지 증가시키며 확인
  for (let a = 3; a <= n / 2; a += 2) {
    const b = n - a;
    // a와 b 모두 소수이면 결과 저장
    if (isPrime[a] && isPrime[b]) {
      result.push(`${n} = ${a} + ${b}`);
      found = true;
      break; // b-a가 가장 큰 조합을 찾기 위해 처음 발견 시 종료
    }
  }

  // 쌍을 찾지 못한 경우
  if (!found) {
    result.push("Goldbach's conjecture is wrong.");
  }
}

// 결과 출력
console.log(result.join("\n"));