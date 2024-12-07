// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력값 파싱
const [a1, a0] = input[0].split(" ").map(Number); // f(n)의 계수 a1, a0
const c = Number(input[1]); // 양의 정수 c
const n0 = Number(input[2]); // 양의 정수 n0

// O(n) 정의 만족 여부 확인 함수
const checkBigONotation = (a1: number, a0: number, c: number, n0: number): number => {
  // 모든 n >= n0에 대해 f(n) <= c * g(n) 이어야 함
  // g(n) = n이므로, f(n) = a1 * n + a0 <= c * n
  // 이를 정리하면 (a1 - c) * n + a0 <= 0가 되어야 한다.

  // n = n0부터 조건을 검사
  for (let n = n0; n <= 100; n++) {
    const fn = a1 * n + a0; // f(n) 계산
    const gn = c * n; // c * g(n) 계산

    if (fn > gn) {
      // 조건을 만족하지 못하면 0 반환
      return 0;
    }
  }
  // 모든 n >= n0에 대해 조건을 만족하면 1 반환
  return 1;
};

// 결과 출력
const result = checkBigONotation(a1, a0, c, n0);
console.log(result);