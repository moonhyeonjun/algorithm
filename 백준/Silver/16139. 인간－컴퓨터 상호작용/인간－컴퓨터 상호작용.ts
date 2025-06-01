// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 문자열 S와 질문 수 q
const S = input[0];
const q = Number(input[1]);

const aCode = "a".charCodeAt(0);
const strLen = S.length;

// 2차원 누적합 배열 생성 (26개의 알파벳, 인덱스는 0 ~ strLen)
const count: number[][] = Array.from({ length: 26 }, () => Array(strLen + 1).fill(0));

// 누적합 계산
for (let i = 0; i < strLen; i++) {
  const charIdx = S.charCodeAt(i) - aCode;
  for (let j = 0; j < 26; j++) {
    // 이전까지의 값 복사
    count[j][i + 1] = count[j][i];
  }
  // 해당 문자 등장 횟수 1 증가
  count[charIdx][i + 1]++;
}

// 쿼리 처리
let result = "";
for (let i = 0; i < q; i++) {
  const [alpha, lStr, rStr] = input[i + 2].split(" ");
  const l = Number(lStr);
  const r = Number(rStr);
  const alphaIdx = alpha.charCodeAt(0) - aCode;
  
  // 누적합 차이로 구간 내 등장 횟수 계산
  const res = count[alphaIdx][r + 1] - count[alphaIdx][l];
  result += res + "\n";
}

console.log(result);