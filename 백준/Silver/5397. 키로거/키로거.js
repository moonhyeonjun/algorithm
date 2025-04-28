// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 테스트 케이스 수
const T = Number(input[0]);

// 결과를 저장할 배열
const results = [];

for (let i = 1; i <= T; i++) {
  const line = input[i];
  const left = [];  // 커서 왼쪽에 있는 문자들을 저장할 스택
  const right = []; // 커서 오른쪽에 있는 문자들을 저장할 스택

  // 입력 문자열을 한 글자씩 처리
  for (const char of line) {
    if (char === '<') {
      // 커서를 왼쪽으로 이동 (왼쪽 스택에서 오른쪽 스택으로 이동)
      if (left.length > 0) {
        right.push(left.pop());
      }
    } else if (char === '>') {
      // 커서를 오른쪽으로 이동 (오른쪽 스택에서 왼쪽 스택으로 이동)
      if (right.length > 0) {
        left.push(right.pop());
      }
    } else if (char === '-') {
      // 백스페이스 처리 (왼쪽 스택에서 문자 하나 제거)
      if (left.length > 0) {
        left.pop();
      }
    } else {
      // 일반 문자 입력 (왼쪽 스택에 추가)
      left.push(char);
    }
  }

  // 최종 비밀번호 생성 (left + right.reverse())
  results.push(left.concat(right.reverse()).join(''));
}

// 결과 출력
console.log(results.join('\n'));