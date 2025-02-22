// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("");

/**
 * 카이사르 암호 복호화 함수
 * @param encrypted 카이사르 암호화된 문자열
 * @returns 원래 문자열
 */
const decryptCaesarCipher = (encrypted: string[]): string => {
  return encrypted
    .map((ch) => String.fromCharCode(((ch.charCodeAt(0) - 68 + 26) % 26) + 65))
    .join("");
};

// 결과 출력
console.log(decryptCaesarCipher(input));