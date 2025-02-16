// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: number[] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);
// 평균 계산 (자연수 보장)
const avg: number = Math.round(input.reduce((sum, num) => sum + num, 0) / 10);

// 최빈값 계산
const freqMap = new Map<number, number>();
let mode = input[0];
let maxFreq = 0;

for (const num of input) {
  const freq = (freqMap.get(num) || 0) + 1;
  freqMap.set(num, freq);

  // 최빈값 업데이트
  if (freq > maxFreq) {
    maxFreq = freq;
    mode = num;
  }
}

// 결과 출력
console.log(avg);
console.log(mode);