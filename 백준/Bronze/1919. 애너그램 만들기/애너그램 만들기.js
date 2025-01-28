// 파일 입력 및 초기 데이터 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 두 단어의 애너그램 관계를 계산하여 제거해야 할 최소 문자 수를 구하는 함수
const calculateMinDeletions = (word1, word2) => {
  // 알파벳 빈도를 저장할 배열 (알파벳 소문자 26개)
  const freq1 = new Array(26).fill(0);
  const freq2 = new Array(26).fill(0);

  // word1의 알파벳 빈도 계산
  for (const char of word1) {
    freq1[char.charCodeAt(0) - 97]++; // 'a'의 ASCII: 97
  }

  // word2의 알파벳 빈도 계산
  for (const char of word2) {
    freq2[char.charCodeAt(0) - 97]++;
  }

  // 제거해야 할 문자의 개수 계산
  let deletions = 0;
  for (let i = 0; i < 26; i++) {
    deletions += Math.abs(freq1[i] - freq2[i]); // 각 알파벳 빈도의 차이만큼 삭제
  }

  return deletions;
};

// 입력 처리
const [word1, word2] = input;

// 결과 출력
console.log(calculateMinDeletions(word1, word2));