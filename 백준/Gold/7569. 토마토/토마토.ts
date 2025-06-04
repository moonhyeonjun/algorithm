// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력값 파싱
const [M, N, H] = input[0].split(" ").map(Number); // M: 가로, N: 세로, H: 높이
const box: number[][][] = []; // 3차원 배열로 토마토 박스 저장
let idx = 1;

for (let h = 0; h < H; h++) {
  const layer: number[][] = [];
  for (let n = 0; n < N; n++) {
    const row = input[idx++].split(" ").map(Number);
    layer.push(row);
  }
  box.push(layer);
}

// 방향 벡터: 위, 아래, 앞, 뒤, 왼쪽, 오른쪽
const dz = [0, 0, 0, 0, 1, -1]; // 높이
const dy = [0, 0, 1, -1, 0, 0]; // 세로
const dx = [1, -1, 0, 0, 0, 0]; // 가로

// BFS를 위한 큐 선언
const queue: [number, number, number][] = []; // [z, y, x] 좌표 저장

// 익은 토마토(1) 위치를 큐에 삽입
for (let z = 0; z < H; z++) {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (box[z][y][x] === 1) {
        queue.push([z, y, x]);
      }
    }
  }
}

// BFS 탐색
let head = 0;
while (head < queue.length) {
  const [z, y, x] = queue[head++];

  for (let dir = 0; dir < 6; dir++) {
    const nz = z + dz[dir];
    const ny = y + dy[dir];
    const nx = x + dx[dir];

    // 범위 체크
    if (nz < 0 || nz >= H || ny < 0 || ny >= N || nx < 0 || nx >= M) continue;
    if (box[nz][ny][nx] !== 0) continue;

    // 익지 않은 토마토를 익게 함 (이전 값 + 1)
    box[nz][ny][nx] = box[z][y][x] + 1;
    queue.push([nz, ny, nx]);
  }
}

// 결과 계산
let result = 0;
for (let z = 0; z < H; z++) {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      // 익지 않은 토마토가 있다면 -1 출력
      if (box[z][y][x] === 0) {
        console.log(-1);
        process.exit();
      }
      result = Math.max(result, box[z][y][x]);
    }
  }
}

// 시작이 1이었으므로 최종 결과는 -1 해줘야 함
console.log(result - 1);