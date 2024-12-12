// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 점수 데이터를 숫자 배열로 변환
const scores: number[] = input.map(Number);

// 점수와 문제 번호를 함께 저장하기 위해 배열 생성
const indexedScores: { score: number; index: number }[] = scores.map((score, idx) => ({
  score,
  index: idx + 1, // 문제 번호는 1부터 시작
}));

// 점수를 기준으로 내림차순 정렬 (점수가 동일하지 않다는 조건이 있으므로 추가 처리는 불필요)
indexedScores.sort((a, b) => b.score - a.score);

// 상위 5개의 점수를 선택
const topScores = indexedScores.slice(0, 5);

// 총점 계산
const totalScore = topScores.reduce((sum, item) => sum + item.score, 0);

// 선택된 문제 번호를 오름차순 정렬
const selectedIndexes = topScores.map(item => item.index).sort((a, b) => a - b);

// 결과 출력
console.log(totalScore);
console.log(selectedIndexes.join(" "));