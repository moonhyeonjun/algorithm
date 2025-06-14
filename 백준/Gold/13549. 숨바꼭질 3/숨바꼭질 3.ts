// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const [N, K] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

// 최대 위치는 100,000까지이므로 그보다 큰 범위로 방문 체크 배열 생성
const MAX = 100000;
const dist: number[] = Array(MAX + 1).fill(Infinity);

// 덱 사용을 위한 deque 모듈 또는 직접 구현 (여기선 배열로 사용)
const deque: number[] = [];
dist[N] = 0;
deque.push(N);

while (deque.length > 0) {
  const curr = deque.shift()!;

  // 순간이동: 0초 소요 -> 앞쪽에 삽입 (우선순위 높음)
  const teleport = curr * 2;
  if (teleport <= MAX && dist[teleport] > dist[curr]) {
    dist[teleport] = dist[curr];
    deque.unshift(teleport); // 0초이므로 앞에 넣기
  }

  // 걷기: 1초 소요 -> 뒤쪽에 삽입
  for (const next of [curr - 1, curr + 1]) {
    if (next >= 0 && next <= MAX && dist[next] > dist[curr] + 1) {
      dist[next] = dist[curr] + 1;
      deque.push(next); // 1초이므로 뒤에 넣기
    }
  }
}

// 결과 출력
console.log(dist[K]);