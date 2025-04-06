// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 번째 줄은 레벨의 수
const levelCount = Number(input[0]);

// 레벨 점수를 숫자 배열로 변환
const scores: number[] = input.slice(1).map(Number);

// 총 감소 횟수 저장 변수
let totalDecreaseCount = 0;

// 뒤에서부터 앞으로 탐색하면서 점수 조정
for (let i = levelCount - 2; i >= 0; i--) {
  // 현재 레벨 점수가 다음 레벨 점수보다 크거나 같으면 감소 필요
  if (scores[i] >= scores[i + 1]) {
    // 감소할 목표 점수는 다음 레벨 점수 - 1
    const newScore = scores[i + 1] - 1;

    // 감소한 만큼 횟수 추가
    totalDecreaseCount += scores[i] - newScore;

    // 점수를 감소시킴 (단, 점수는 1 이상이어야 함)
    scores[i] = Math.max(1, newScore);
  }
}

// 결과 출력
console.log(totalDecreaseCount);