// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split(" ");

// 입력값을 숫자로 변환
const [F, S, G, U, D] = input.map(Number);

// 층 수 방문 여부를 체크하기 위한 배열
const visited: number[] = Array(F + 1).fill(0);

// BFS를 위한 큐 자료구조
const queue: number[] = [];

// 시작 층 세팅
queue.push(S);
visited[S] = 1; // 0은 미방문, 1부터 시작하여 방문 및 버튼 수를 기록

while (queue.length > 0) {
  const current = queue.shift()!; // 현재 층

  // 목표 층에 도착하면 버튼 누른 횟수(방문시 1을 추가했으므로 -1)를 출력하고 종료
  if (current === G) {
    console.log(visited[current] - 1);
    process.exit(0);
  }

  // 다음 이동할 층 계산
  const nextUp = current + U;
  const nextDown = current - D;

  // 위로 이동하는 경우
  if (U > 0 && nextUp <= F && visited[nextUp] === 0) {
    visited[nextUp] = visited[current] + 1;
    queue.push(nextUp);
  }

  // 아래로 이동하는 경우
  if (D > 0 && nextDown >= 1 && visited[nextDown] === 0) {
    visited[nextDown] = visited[current] + 1;
    queue.push(nextDown);
  }
}

// 모든 경우를 탐색했는데도 목표 층에 도달하지 못한 경우
console.log("use the stairs");