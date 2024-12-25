// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// GCD를 계산하는 함수 (유클리드 호제법 사용)
const gcd = (a: number, b: number): number => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

// 입력 데이터 처리
const testCaseCount: number = parseInt(input[0]);
const results: number[] = [];

for (let i = 1; i <= testCaseCount; i++) {
  const numbers: number[] = input[i].split(" ").map(Number);
  const n = numbers[0]; // 첫 번째 값은 숫자의 개수
  const arr = numbers.slice(1); // 실제 숫자 배열

  let gcdSum = 0;

  // 가능한 모든 쌍의 GCD 합 계산
  for (let j = 0; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      gcdSum += gcd(arr[j], arr[k]);
    }
  }

  results.push(gcdSum);
}

// 결과 출력
results.forEach(result => console.log(result));