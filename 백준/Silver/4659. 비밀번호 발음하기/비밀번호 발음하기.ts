// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const vowels = new Set(["a", "e", "i", "o", "u"]);

// 비밀번호 유효성 검사 함수
const isAcceptable = (password: string): boolean => {
  let hasVowel = false;
  let vowelCount = 0,
    consonantCount = 0;

  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    const isVowel = vowels.has(char);

    // 모음 포함 여부 확인
    if (isVowel) hasVowel = true;

    // 연속된 모음/자음 개수 검사
    if (i > 0 && password[i] === password[i - 1] && char !== "e" && char !== "o") {
      return false;
    }

    if (isVowel) {
      vowelCount++;
      consonantCount = 0;
    } else {
      consonantCount++;
      vowelCount = 0;
    }

    if (vowelCount >= 3 || consonantCount >= 3) {
      return false;
    }
  }

  return hasVowel;
};

// 입력값 처리 및 결과 출력
for (const password of input) {
  if (password === "end") break;
  console.log(`<${password}> is ${isAcceptable(password) ? "acceptable" : "not acceptable"}.`);
}