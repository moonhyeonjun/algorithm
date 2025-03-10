// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]); // 학생 수
const scores = input.slice(1).map((line) => line.split(" ").map(Number));

// 후보별 점수 및 가중치 집계
const candidates = [0, 0, 0, 0]; // 후보 1~3의 총점 저장
const threeCount = [0, 0, 0, 0]; // 후보 1~3이 3점을 받은 횟수 저장
const twoCount = [0, 0, 0, 0]; // 후보 1~3이 2점을 받은 횟수 저장

// 점수 계산
for (let i = 0; i < N; i++) {
  for (let j = 0; j < 3; j++) {
    const score = scores[i][j]; // 후보 j+1이 받은 점수
    candidates[j + 1] += score;
    if (score === 3) threeCount[j + 1]++;
    if (score === 2) twoCount[j + 1]++;
  }
}

// 최고 점수 찾기
const maxScore = Math.max(candidates[1], candidates[2], candidates[3]);
const topCandidates = [1, 2, 3].filter((num) => candidates[num] === maxScore);

// 유일한 회장 찾기
let president = 0;
if (topCandidates.length === 1) {
  president = topCandidates[0];
} else {
  // 3점 횟수 비교
  const maxThreeCount = Math.max(threeCount[1], threeCount[2], threeCount[3]);
  const threeFiltered = topCandidates.filter((num) => threeCount[num] === maxThreeCount);

  if (threeFiltered.length === 1) {
    president = threeFiltered[0];
  } else {
    // 2점 횟수 비교
    const maxTwoCount = Math.max(twoCount[1], twoCount[2], twoCount[3]);
    const twoFiltered = threeFiltered.filter((num) => twoCount[num] === maxTwoCount);

    if (twoFiltered.length === 1) {
      president = twoFiltered[0];
    }
  }
}

// 결과 출력
console.log(president, maxScore);