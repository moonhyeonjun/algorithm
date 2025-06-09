// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 방향 상수: 북(0), 동(1), 남(2), 서(3)
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

// 입력 파싱
const [N, M] = input[0].split(" ").map(Number);
let [x, y, d] = input[1].split(" ").map(Number);
const map: number[][] = input.slice(2).map(line => line.split(" ").map(Number));

// 방문 여부를 저장할 2차원 배열
const cleaned: boolean[][] = Array.from({ length: N }, () => Array(M).fill(false));

let cleanedCount = 0;

while (true) {
  // 1. 현재 칸이 청소되지 않은 경우 청소
  if (!cleaned[x][y]) {
    cleaned[x][y] = true;
    cleanedCount++;
  }

  let moved = false;

  // 2. 주변 4칸 탐색
  for (let i = 0; i < 4; i++) {
    // 반시계 방향으로 90도 회전
    d = (d + 3) % 4;
    const nx = x + dx[d];
    const ny = y + dy[d];

    // 이동 가능한 청소되지 않은 빈 칸이 있으면 이동
    if (map[nx][ny] === 0 && !cleaned[nx][ny]) {
      x = nx;
      y = ny;
      moved = true;
      break;
    }
  }

  // 3. 네 방향 모두 청소 또는 벽이라 이동 불가한 경우
  if (!moved) {
    const backDir = (d + 2) % 4; // 후진 방향
    const bx = x + dx[backDir];
    const by = y + dy[backDir];

    // 후진 가능하면 한 칸 후진
    if (map[bx][by] === 0) {
      x = bx;
      y = by;
    } else {
      // 후진 불가하면 작동 종료
      break;
    }
  }
}

// 결과 출력
console.log(cleanedCount);