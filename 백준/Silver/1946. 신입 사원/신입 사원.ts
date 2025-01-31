// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 테스트 케이스 개수
const T: number = Number(input[0]);
let index = 1;
const result: number[] = [];

for (let t = 0; t < T; t++) {
  const N: number = Number(input[index]);
  const candidates: [number, number][] = [];

  for (let i = index + 1; i <= index + N; i++) {
    const [doc, interview] = input[i].split(" ").map(Number);
    candidates.push([doc, interview]);
  }
  index += N + 1;

  // 서류 심사 기준으로 정렬 (오름차순)
  candidates.sort((a, b) => a[0] - b[0]);

  let maxHire = 0;
  let minInterviewRank = Infinity;

  for (const [, interviewRank] of candidates) {
    // 현재 지원자의 면접 등수가 이전까지의 최소 면접 등수보다 낮다면 채용 가능
    if (interviewRank < minInterviewRank) {
      maxHire++;
      minInterviewRank = interviewRank; // 최소 면접 등수 갱신
    }
  }

  result.push(maxHire);
}

// 결과 출력
console.log(result.join("\n"));