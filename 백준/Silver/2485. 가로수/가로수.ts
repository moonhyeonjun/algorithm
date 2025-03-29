// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 가로수 개수 N
const N: number = parseInt(input[0]);

// 가로수 위치 배열
const positions: number[] = input.slice(1).map(Number);

// 두 수의 최대공약수(GCD) 계산 (유클리드 호제법)
const gcd = (a: number, b: number): number => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

// 모든 간격 구하기
const gaps: number[] = [];
for (let i = 1; i < N; i++) {
  gaps.push(positions[i] - positions[i - 1]);
}

// 모든 간격들의 GCD 구하기
let commonGCD = gaps[0];
for (let i = 1; i < gaps.length; i++) {
  commonGCD = gcd(commonGCD, gaps[i]);
}

// 새로 심어야 할 나무 개수 계산
let newTrees = 0;
for (const gap of gaps) {
  newTrees += gap / commonGCD - 1;
}

// 결과 출력
console.log(newTrees);