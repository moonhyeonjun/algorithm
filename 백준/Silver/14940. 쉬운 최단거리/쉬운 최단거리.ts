// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 지도 크기 및 데이터
const [n, m]: number[] = input[0].split(" ").map(Number);
const map: number[][] = input.slice(1).map((line) => line.split(" ").map(Number));

// 이동 방향 (상, 하, 좌, 우)
const directions: number[][] = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// 결과를 저장할 배열
const result: number[][] = Array.from({ length: n }, () => Array(m).fill(-1));

// 목표 지점(2)의 좌표 찾기
let startX = -1;
let startY = -1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 2) {
      startX = i;
      startY = j;
      break;
    }
  }
  if (startX !== -1) break;
}

// BFS를 이용한 최단 거리 계산
const bfs = (startX: number, startY: number) => {
  const queue: [number, number, number][] = [[startX, startY, 0]]; // [x, y, distance]
  result[startX][startY] = 0;

  while (queue.length) {
    const [x, y, dist] = queue.shift()!;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // 지도 범위 내에서만 탐색하며, 방문하지 않은 1인 지역만 이동
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && result[nx][ny] === -1 && map[nx][ny] === 1) {
        result[nx][ny] = dist + 1; // 거리 갱신
        queue.push([nx, ny, dist + 1]);
      }
    }
  }
};

// 목표 지점에서 BFS 실행
if (startX !== -1 && startY !== -1) {
  bfs(startX, startY);
}

// 갈 수 없는 지역(0)은 0으로 설정
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 0) {
      result[i][j] = 0;
    }
  }
}

// 결과 출력
console.log(result.map((row) => row.join(" ")).join("\n"));