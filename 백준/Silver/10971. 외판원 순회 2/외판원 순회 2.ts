// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n: number = Number(input[0]); // 도시 수
const w: number[][] = input.slice(1).map(line => line.split(' ').map(Number)); // 비용 행렬

const INF = Infinity;

// dp[현재 도시][방문한 도시 집합] = 최소 비용
const dp: number[][] = Array.from({ length: n }, () => Array(1 << n).fill(-1));

/**
 * 외판원 순회 문제를 비트마스킹과 DP로 해결하는 함수
 * @param city 현재 위치한 도시
 * @param visited 지금까지 방문한 도시들의 비트마스크
 * @returns 현재 상태에서의 최소 이동 비용
 */
function tsp(city: number, visited: number): number {
  // 모든 도시를 방문한 경우
  if (visited === (1 << n) - 1) {
    // 출발 도시(0번)로 돌아갈 수 있는지 체크
    return w[city][0] || INF;
  }

  // 이미 계산된 경우
  if (dp[city][visited] !== -1) {
    return dp[city][visited];
  }

  let cost = INF;

  // 다음 이동할 도시를 선택
  for (let next = 0; next < n; next++) {
    // 아직 방문하지 않았고, 현재 도시에서 다음 도시로 갈 수 있는 경우
    if (!(visited & (1 << next)) && w[city][next] > 0) {
      const nextVisited = visited | (1 << next); // 다음 도시 방문 표시
      const tempCost = tsp(next, nextVisited) + w[city][next]; // 다음 도시로 이동 후 남은 경로 비용 합산
      cost = Math.min(cost, tempCost); // 최소 비용 갱신
    }
  }

  dp[city][visited] = cost; // 현재 상태의 최소 비용 저장
  return cost;
}

// 0번 도시부터 시작해서 최소 비용 출력
console.log(tsp(0, 1));