// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

/**
 * 주어진 N에 대해 칸토어 집합 근사 문자열을 생성하는 함수
 * @param n 깊이 (0 <= n <= 12)
 * @returns 칸토어 집합 문자열
 */
function generateCantor(n: number): string {
  // base case: n이 0이면 단일 선(-) 반환
  if (n === 0) return "-";

  // 길이 3^n 문자열은 왼쪽, 공백, 오른쪽으로 구성됨
  const prev = generateCantor(n - 1);
  const space = " ".repeat(prev.length);
  return prev + space + prev;
}

// 입력값 순회하면서 각 N에 대해 결과 출력
for (const line of input) {
  const n = parseInt(line);
  console.log(generateCantor(n));
}