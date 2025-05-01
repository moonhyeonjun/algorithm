// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

/**
 * 각 테스트 케이스에 대해 자릿수가 모두 1로만 이루어진 n의 배수 중
 * 가장 작은 수의 자릿수를 구하는 함수
 */
function findMinOnesLength(n: number): number {
  // 방문 여부 체크용 배열 (나머지로만 확인)
  const visited: boolean[] = new Array(n).fill(false);

  // BFS를 위한 큐: [현재 숫자의 나머지, 자릿수]
  const queue: [number, number][] = [];
  queue.push([1 % n, 1]);
  visited[1 % n] = true;

  while (queue.length > 0) {
    const [mod, length] = queue.shift()!;

    // 나머지가 0이면 해당 자릿수가 정답
    if (mod === 0) return length;

    // 다음 숫자: mod * 10 + 1
    const nextMod = (mod * 10 + 1) % n;
    if (!visited[nextMod]) {
      visited[nextMod] = true;
      queue.push([nextMod, length + 1]);
    }
  }

  // 이론상 도달할 수 없으나, 형식상 반환
  return -1;
}

// 각 테스트 케이스 실행
for (const line of input) {
  const n = parseInt(line);
  // 2와 5로 나누어 떨어지는 경우는 문제 조건상 주어지지 않음
  const result = findMinOnesLength(n);
  console.log(result);
}