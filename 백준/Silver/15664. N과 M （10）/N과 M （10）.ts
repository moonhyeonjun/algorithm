// 파일 입력 처리
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs: number[][] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(line => line.split(' ').map(Number));

// N: 수의 개수, M: 고를 수열의 길이
const [n, m] = inputs[0];
// 입력 숫자 정렬 (오름차순)
const numbers: number[] = inputs[1].sort((a, b) => a - b);
// 방문 여부 저장 배열
const visited: boolean[] = Array(n).fill(false);

// 정답을 저장할 문자열
let result = '';

/**
 * 백트래킹 함수
 * @param selected 현재까지 선택한 수열
 * @param start 현재 탐색 시작 인덱스
 */
const backtrack = (selected: number[], start: number) => {
  // 수열 길이가 M이면 결과에 추가
  if (selected.length === m) {
    result += selected.join(' ') + '\n';
    return;
  }

  let prev = -1; // 같은 depth에서 중복 숫자 방지

  for (let i = start; i < n; i++) {
    // 이미 방문했거나 이전과 같은 수면 건너뛰기
    if (!visited[i] && numbers[i] !== prev) {
      visited[i] = true;
      backtrack([...selected, numbers[i]], i); // i부터 탐색하여 비내림차순 유지
      visited[i] = false;
      prev = numbers[i];
    }
  }
};

// 백트래킹 시작
backtrack([], 0);

// 한 번에 출력
console.log(result);