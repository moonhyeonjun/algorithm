// 입력 처리
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0]; // PN 패턴의 N
const M = +input[1]; // 문자열 S의 길이
const S = input[2];  // 문자열 S

let result = 0; // 결과: PN 패턴의 개수
let count = 0;  // 연속된 'IOI' 패턴의 수
let i = 0;

while (i < M - 1) {
  // 'IOI' 패턴 확인 (슬라이싱 없이 인덱스 직접 비교)
  if (S[i] === 'I' && S[i + 1] === 'O' && S[i + 2] === 'I') {
    count += 1; // 연속된 IOI 패턴 수 증가

    if (count >= N) {
      result += 1; // N개 이상일 때 결과 증가
    }

    i += 2; // 'IOI' 패턴 끝에서 다음 패턴 탐색
  } else {
    count = 0; // 패턴이 끊기면 count 초기화
    i += 1;    // 한 칸만 이동하여 다시 탐색
  }
}

console.log(result);