// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim();

// 결과 저장 배열
let result: string[] = [];
let stack: string[] = [];
let inTag: boolean = false; // 태그 내부인지 여부

for (let i = 0; i < input.length; i++) {
  const char = input[i];

  if (char === "<") {
    // 단어 뒤집기 (태그 이전에 쌓인 단어 처리)
    while (stack.length) result.push(stack.pop()!);

    // 태그 시작 -> 그대로 출력
    inTag = true;
    result.push(char);
  } else if (char === ">") {
    // 태그 끝 -> 그대로 출력
    inTag = false;
    result.push(char);
  } else if (inTag) {
    // 태그 내부인 경우 -> 그대로 출력
    result.push(char);
  } else {
    // 태그 외부 (단어 or 공백 처리)
    if (char === " ") {
      // 단어 뒤집기
      while (stack.length) result.push(stack.pop()!);
      result.push(char); // 공백 추가
    } else {
      // 단어 문자 -> 스택에 추가
      stack.push(char);
    }
  }
}

// 마지막 단어 뒤집어 추가
while (stack.length) result.push(stack.pop()!);

// 결과 출력
console.log(result.join(""));