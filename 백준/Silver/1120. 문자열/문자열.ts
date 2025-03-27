// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split(" ");

const [A, B]: string[] = input;

// 최소 차이 계산 함수
function minDifference(A: string, B: string): number {
  const aLen = A.length;
  const bLen = B.length;
  let minDiff = aLen; // 최악의 경우 모든 문자가 다를 수 있음

  // B에서 길이가 A와 같은 모든 부분 문자열 비교
  for (let i = 0; i <= bLen - aLen; i++) {
    let diffCount = 0;

    // 현재 B의 부분 문자열과 A 비교
    for (let j = 0; j < aLen; j++) {
      if (A[j] !== B[i + j]) {
        diffCount++;
      }
    }

    // 최소 차이 갱신
    minDiff = Math.min(minDiff, diffCount);
  }

  return minDiff;
}

// 결과 출력
console.log(minDifference(A, B));