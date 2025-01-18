// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// M, N, K 값 추출
const [M, N, K] = input[0].split(" ").map(Number);

// 모눈종이 배열 초기화 (0: 빈 공간, 1: 직사각형 내부)
const grid: number[][] = Array.from({ length: M }, () => Array(N).fill(0));

// 직사각형 영역 표시
for (let i = 1; i <= K; i++) {
    const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
    for (let y = y1; y < y2; y++) {
        for (let x = x1; x < x2; x++) {
            grid[y][x] = 1; // 직사각형 내부를 1로 채움
        }
    }
}

// 방향 벡터 (상, 하, 좌, 우)
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

// 방문 여부를 확인하기 위한 배열
const visited: boolean[][] = Array.from({ length: M }, () => Array(N).fill(false));

// DFS 함수 정의
function dfs(x: number, y: number): number {
    const stack: [number, number][] = [[x, y]];
    visited[y][x] = true;
    let area = 0;

    while (stack.length > 0) {
        const [cx, cy] = stack.pop()!;
        area++;

        for (let i = 0; i < 4; i++) {
            const nx = cx + dx[i];
            const ny = cy + dy[i];

            if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[ny][nx] && grid[ny][nx] === 0) {
                visited[ny][nx] = true;
                stack.push([nx, ny]);
            }
        }
    }

    return area;
}

// 결과 저장 변수
const areas: number[] = [];

// 전체 모눈종이를 순회하며 DFS로 영역 찾기
for (let y = 0; y < M; y++) {
    for (let x = 0; x < N; x++) {
        if (grid[y][x] === 0 && !visited[y][x]) {
            // 새로운 영역 발견 시 DFS 실행
            areas.push(dfs(x, y));
        }
    }
}

// 영역 크기 오름차순 정렬
areas.sort((a, b) => a - b);

// 출력
console.log(areas.length); // 분리된 영역의 개수
console.log(areas.join(" ")); // 각 영역의 넓이