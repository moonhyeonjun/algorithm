// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const numbers = input.map(Number);

// 산술평균 계산 (소수점 첫째 자리에서 반올림)
const arithmeticMean = Math.round(numbers.reduce((acc, val) => acc + val, 0) / N);

// 중앙값 계산
const sortedNumbers = [...numbers].sort((a, b) => a - b);
const median = sortedNumbers[Math.floor(N / 2)];

// 최빈값 계산
const frequencyMap = new Map<number, number>();
let maxFrequency = 0;

for (let num of numbers) {
  const frequency = (frequencyMap.get(num) || 0) + 1;
  frequencyMap.set(num, frequency);
  maxFrequency = Math.max(maxFrequency, frequency);
}

const modeCandidates = Array.from(frequencyMap)
  .filter(([num, freq]) => freq === maxFrequency)
  .map(([num]) => num)
  .sort((a, b) => a - b);

const mode = modeCandidates.length > 1 ? modeCandidates[1] : modeCandidates[0];

// 범위 계산
const range = Math.max(...numbers) - Math.min(...numbers);

// 결과 출력
console.log(`${arithmeticMean}`);
console.log(`${median}`);
console.log(`${mode}`);
console.log(`${range}`);