// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 서로 다른 부분 문자열의 개수를 계산하는 함수
function countUniqueSubstrings(s: string): number {
  const uniqueSubstrings = new Set<string>();

  // 모든 부분 문자열 생성
  for (let start = 0; start < s.length; start++) {
    let substring = ""; // 현재 시작 지점의 부분 문자열
    for (let end = start; end < s.length; end++) {
      substring += s[end]; // 부분 문자열 확장
      uniqueSubstrings.add(substring); // 집합에 추가하여 중복 제거
    }
  }

  // 서로 다른 부분 문자열의 개수 반환
  return uniqueSubstrings.size;
}

// 결과 계산 및 출력
const result = countUniqueSubstrings(input);
console.log(result);