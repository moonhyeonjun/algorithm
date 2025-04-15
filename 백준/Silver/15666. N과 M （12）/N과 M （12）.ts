// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력값 파싱
const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

// 숫자를 정렬 (사전순 출력을 위함)
const sorted = Array.from(new Set(numbers)).sort((a, b) => a - b);

// 결과를 저장할 배열
const result: number[] = [];

// 백트래킹 함수 정의
function backtrack(startIdx: number, depth: number) {
  // M개의 수를 골랐다면 결과 출력
  if (depth === M) {
    console.log(result.join(" "));
    return;
  }

  // 현재 위치부터 끝까지 반복
  for (let i = startIdx; i < sorted.length; i++) {
    // 중복 선택이 가능하므로 i를 그대로 넘김
    result.push(sorted[i]);
    backtrack(i, depth + 1);  // 비내림차순 유지
    result.pop();  // 백트래킹
  }
}

// 백트래킹 시작
backtrack(0, 0);