// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 최대공약수(GCD) 함수 - 유클리드 호제법 사용
const gcd = (a: number, b: number): number => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

// 입력 처리
const N: number = Number(input[0]); // 링 개수
const radii: number[] = input[1].split(" ").map(Number); // 반지름 배열
const firstRadius: number = radii[0];

// 첫 번째 링을 기준으로 나머지 링의 회전수 계산
const result: string[] = [];
for (let i = 1; i < N; i++) {
  const g = gcd(firstRadius, radii[i]);
  result.push(`${firstRadius / g}/${radii[i] / g}`);
}

// 결과 출력
console.log(result.join("\n"));