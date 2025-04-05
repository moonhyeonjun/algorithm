// 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

// 알파벳 빈도 저장용 객체
const freq = {};

// 입력 문자열에서 알파벳 개수 세기
for (const char of input) {
  freq[char] = (freq[char] || 0) + 1;
}

let oddCount = 0; // 홀수 개수 알파벳 수
let centerChar = ""; // 중앙에 올 알파벳 (홀수일 경우)

// 홀수 개수의 알파벳이 2개 이상이면 팰린드롬 불가
for (const char in freq) {
  if (freq[char] % 2 === 1) {
    oddCount++;
    centerChar = char;
  }
}

if (oddCount > 1) {
  console.log("I'm Sorry Hansoo");
} else {
  // 알파벳 순서대로 정렬하여 사전순 우선 처리
  const sortedChars = Object.keys(freq).sort();
  let halfStr = "";

  // 반쪽 문자열 생성
  for (const char of sortedChars) {
    halfStr += char.repeat(Math.floor(freq[char] / 2));
  }

  // 팰린드롬 완성: 반 + 중앙 + 반 뒤집기
  const result = halfStr + (centerChar ? centerChar : "") + [...halfStr].reverse().join("");
  console.log(result);
}