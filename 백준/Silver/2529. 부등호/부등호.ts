// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 처리
const k = parseInt(input[0]);
const signs = input[1].split(" "); // 부등호 배열 ('<' 또는 '>')

// 사용 여부 체크를 위한 배열
const visited = new Array(10).fill(false);

// 결과 저장 배열
let minValue = "";
let maxValue = "";

/**
 * 부등호 조건을 검사하는 함수
 * @param prev 이전 숫자
 * @param next 다음 숫자
 * @param op 부등호 ('<' 또는 '>')
 */
function isValid(prev: number, next: number, op: string): boolean {
  if (op === "<") return prev < next;
  if (op === ">") return prev > next;
  return false;
}

/**
 * 백트래킹 함수
 * @param depth 현재 깊이 (선택된 숫자의 개수)
 * @param num 현재까지 만들어진 숫자 문자열
 */
function dfs(depth: number, num: string) {
  if (depth === k + 1) {
    // 숫자 완성 시 최소, 최대 갱신
    if (!minValue || num < minValue) minValue = num;
    if (!maxValue || num > maxValue) maxValue = num;
    return;
  }

  for (let i = 0; i <= 9; i++) {
    if (visited[i]) continue; // 중복 숫자 방지

    if (depth === 0 || isValid(parseInt(num[depth - 1]), i, signs[depth - 1])) {
      visited[i] = true;
      dfs(depth + 1, num + i.toString());
      visited[i] = false; // 백트래킹
    }
  }
}

// DFS 시작
dfs(0, "");

// 결과 출력
console.log(maxValue);
console.log(minValue);