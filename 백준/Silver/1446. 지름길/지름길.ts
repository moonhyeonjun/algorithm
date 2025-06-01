// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, D] = input[0].split(" ").map(Number);
const shortcuts: { start: number; end: number; cost: number }[] = [];

// 지름길 정보 파싱
for (let i = 1; i <= N; i++) {
  const [s, e, c] = input[i].split(" ").map(Number);
  // 목적지가 고속도로 끝보다 작거나 같을 때만 유효한 지름길
  if (e <= D) {
    shortcuts.push({ start: s, end: e, cost: c });
  }
}

// 최단 거리 테이블 초기화
const dist = Array(D + 1).fill(Infinity);
dist[0] = 0;

// 0부터 D까지 거리 업데이트
for (let i = 0; i <= D; i++) {
  // 이전 거리에서 1km 더 가는 경우
  if (i + 1 <= D) {
    dist[i + 1] = Math.min(dist[i + 1], dist[i] + 1);
  }

  // 지름길 사용 가능한 경우
  for (const { start, end, cost } of shortcuts) {
    if (start === i) {
      dist[end] = Math.min(dist[end], dist[start] + cost);
    }
  }
}

// 최종 도착 지점의 최소 거리 출력
console.log(dist[D]);