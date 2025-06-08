// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 파싱
const [L, C] = input[0].split(" ").map(Number); // 암호 길이 L, 주어진 문자 개수 C
const chars = input[1].split(" ").sort();       // 문자들을 정렬된 상태로 저장

const vowels = new Set(['a', 'e', 'i', 'o', 'u']); // 모음 판별용 집합
const result: string[] = [];

/**
 * 백트래킹 함수
 * @param idx 현재 탐색을 시작할 인덱스
 * @param path 현재까지 선택한 문자들의 배열
 */
function dfs(idx: number, path: string[]) {
  if (path.length === L) {
    const vowelCount = path.filter(char => vowels.has(char)).length;
    const consonantCount = L - vowelCount;

    // 모음 1개 이상, 자음 2개 이상이어야 함
    if (vowelCount >= 1 && consonantCount >= 2) {
      result.push(path.join(""));
    }
    return;
  }

  // 조합 생성
  for (let i = idx; i < C; i++) {
    path.push(chars[i]);       // 현재 문자 선택
    dfs(i + 1, path);          // 다음 문자로 재귀 호출
    path.pop();                // 백트래킹: 선택했던 문자 제거
  }
}

// 조합 생성 시작
dfs(0, []);

// 결과 출력
console.log(result.join("\n"));