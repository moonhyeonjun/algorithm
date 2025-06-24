// 입력 처리
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

// 사다리 수 N, 뱀 수 M
const [N, M] = input[0].split(" ").map(Number);

// 사다리와 뱀 정보를 담을 맵 (시작 -> 끝)
const moveMap = new Map<number, number>();

// 사다리 정보 등록
for (let i = 1; i <= N; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  moveMap.set(from, to);
}

// 뱀 정보 등록
for (let i = N + 1; i <= N + M; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  moveMap.set(from, to);
}

// BFS 탐색을 위한 큐 (현재 위치, 주사위 횟수)
const queue: [number, number][] = [[1, 0]];
const visited = Array(101).fill(false); // 1~100번 칸 방문 체크
visited[1] = true;

while (queue.length) {
  const [cur, count] = queue.shift()!;

  // 100번 칸 도착 시 정답 출력
  if (cur === 100) {
    console.log(count);
    break;
  }

  // 주사위는 1~6까지 가능
  for (let dice = 1; dice <= 6; dice++) {
    let next = cur + dice;
    if (next > 100) continue;

    // 사다리 또는 뱀을 만나면 이동
    if (moveMap.has(next)) {
      next = moveMap.get(next)!;
    }

    // 방문하지 않은 경우만 큐에 삽입
    if (!visited[next]) {
      visited[next] = true;
      queue.push([next, count + 1]);
    }
  }
}