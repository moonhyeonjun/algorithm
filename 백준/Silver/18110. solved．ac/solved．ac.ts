// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 데이터 처리
const n: number = parseInt(input[0]); // 난이도 의견 개수
const difficulties: number[] = input.slice(1).map(Number);

// 문제 난이도 계산 함수
const calculateDifficulty = (n: number, difficulties: number[]): number => {
  if (n === 0) {
    return 0; // 난이도 의견이 없으면 난이도는 0
  }

  // 난이도 정렬
  difficulties.sort((a, b) => a - b);

  // 제외할 의견 개수 계산
  const trimCount = Math.round(n * 0.15);

  // 절사 평균 계산
  const trimmed = difficulties.slice(trimCount, n - trimCount);
  const sum = trimmed.reduce((acc, cur) => acc + cur, 0);
  const average = sum / trimmed.length;

  // 평균을 반올림하여 결과 반환
  return Math.round(average);
};

// 결과 계산 및 출력
const result = calculateDifficulty(n, difficulties);
console.log(result);