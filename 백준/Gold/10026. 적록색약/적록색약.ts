// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const grid: string[][] = input.slice(1).map(line => line.split(""));

// 상하좌우 방향 벡터
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 방문 여부 체크용 배열 초기화 함수
const createVisited = () => Array.from({ length: N }, () => Array(N).fill(false));

/**
 * DFS 탐색 함수
 * @param x - 현재 행
 * @param y - 현재 열
 * @param visited - 방문 배열
 * @param map - 색상 그리드
 * @param color - 기준 색상
 */
function dfs(x: number, y: number, visited: boolean[][], map: string[][], color: string) {
  visited[x][y] = true;

  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < N &&
      !visited[nx][ny] &&
      map[nx][ny] === color
    ) {
      dfs(nx, ny, visited, map, color);
    }
  }
}

/**
 * 색맹일 경우, R과 G를 같은 색으로 취급한 그리드 반환
 */
function convertForColorBlind(map: string[][]): string[][] {
  return map.map(row =>
    row.map(color => (color === "G" ? "R" : color))
  );
}

/**
 * 전체 영역 수를 세는 함수
 * @param map - 색상 그리드
 */
function countAreas(map: string[][]): number {
  const visited = createVisited();
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        dfs(i, j, visited, map, map[i][j]);
        count++;
      }
    }
  }

  return count;
}

// 일반인 기준 영역 개수
const normalCount = countAreas(grid);

// 색약자용 그리드 생성 후 영역 개수 계산
const colorBlindGrid = convertForColorBlind(grid);
const colorBlindCount = countAreas(colorBlindGrid);

// 결과 출력
console.log(`${normalCount} ${colorBlindCount}`);