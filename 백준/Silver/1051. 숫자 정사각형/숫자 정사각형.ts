// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number); // 행, 열 크기
const grid: string[][] = input.slice(1).map(line => line.split("")); // 문자열을 2차원 배열로 변환

let maxArea = 1; // 최소 정사각형은 1x1 (한 칸)

// (i, j)를 좌상단으로 하는 정사각형들을 검사
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    // 가능한 최대 변 길이 (현재 좌표에서 시작 가능한 최대 정사각형 크기)
    const maxSize = Math.min(N - i, M - j);

    for (let size = 1; size < maxSize; size++) {
      // 우하단 꼭짓점의 좌표
      const ni = i + size;
      const nj = j + size;

      // 네 꼭짓점의 값이 모두 같은지 확인
      if (
        grid[i][j] === grid[i][nj] &&
        grid[i][j] === grid[ni][j] &&
        grid[i][j] === grid[ni][nj]
      ) {
        // 면적 갱신 (변 길이의 제곱)
        const area = (size + 1) * (size + 1);
        if (area > maxArea) {
          maxArea = area;
        }
      }
    }
  }
}

console.log(maxArea);