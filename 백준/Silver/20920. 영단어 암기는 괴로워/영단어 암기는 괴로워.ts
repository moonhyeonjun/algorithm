// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 파싱
const [N, M] = input[0].split(" ").map(Number); // 단어 개수 N, 기준 길이 M
const words = input.slice(1);

// 단어 빈도 수를 저장할 맵
const freqMap: Map<string, number> = new Map();

// 단어 빈도 카운팅
for (const word of words) {
  if (word.length < M) continue; // 기준보다 짧으면 스킵
  freqMap.set(word, (freqMap.get(word) || 0) + 1);
}

// 정렬을 위한 배열 생성
const filteredWords = Array.from(freqMap.keys());

// 정렬
filteredWords.sort((a, b) => {
  const freqA = freqMap.get(a)!;
  const freqB = freqMap.get(b)!;

  if (freqA !== freqB) {
    return freqB - freqA; // 등장 횟수 기준 내림차순
  }

  if (a.length !== b.length) {
    return b.length - a.length; // 길이 기준 내림차순
  }

  return a.localeCompare(b); // 알파벳 오름차순
});

// 출력
console.log(filteredWords.join("\n"));