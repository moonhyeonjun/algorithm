// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 접미사 배열 생성 함수
function getSuffixArray(input: string): string[] {
  const suffixArray: string[] = [];

  // 문자열의 모든 접미사를 배열에 추가
  for (let i = 0; i < input.length; i++) {
    suffixArray.push(input.slice(i)); // i번째부터 끝까지 추출
  }

  // 접미사 배열을 사전순으로 정렬
  suffixArray.sort();

  return suffixArray;
}

// 결과 출력
const result = getSuffixArray(input);
console.log(result.join("\n"));