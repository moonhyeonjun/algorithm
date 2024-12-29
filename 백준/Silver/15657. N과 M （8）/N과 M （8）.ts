// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫째 줄 입력 처리
const [N, M] = input[0].split(" ").map(Number);

// 둘째 줄 입력 처리 및 정렬
const numbers = input[1].split(" ").map(Number).sort((a, b) => a - b);

// 결과를 저장할 배열
const results: string[] = [];

// 백트래킹 함수
function backtrack(sequence: number[], start: number) {
  // 수열의 길이가 M인 경우 결과 저장
  if (sequence.length === M) {
    results.push(sequence.join(" "));
    return;
  }

  // 비내림차순 유지하며 수열 생성
  for (let i = start; i < N; i++) {
    backtrack([...sequence, numbers[i]], i); // 현재 수를 선택 후 재귀 호출
  }
}

// 백트래킹 시작
backtrack([], 0);

// 결과 출력
console.log(results.join("\n"));