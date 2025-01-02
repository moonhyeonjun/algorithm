// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 방향 벡터 (나이트의 이동 가능 경로)
const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];

// BFS 함수: 최소 이동 횟수를 계산
function bfs(l: number, start: [number, number], end: [number, number]): number {
    const [sx, sy] = start;
    const [ex, ey] = end;

    // 시작점과 도착점이 같은 경우
    if (sx === ex && sy === ey) return 0;

    // 방문 여부를 기록할 배열
    const visited: boolean[][] = Array.from({ length: l }, () => Array(l).fill(false));
    const queue: [number, number, number][] = []; // [x, y, 이동 횟수]

    queue.push([sx, sy, 0]);
    visited[sx][sy] = true;

    while (queue.length > 0) {
        const [x, y, moves] = queue.shift()!;

        for (let i = 0; i < 8; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            // 체스판 범위를 벗어나지 않으며, 아직 방문하지 않은 경우
            if (nx >= 0 && nx < l && ny >= 0 && ny < l && !visited[nx][ny]) {
                // 도착점에 도달한 경우
                if (nx === ex && ny === ey) return moves + 1;

                queue.push([nx, ny, moves + 1]);
                visited[nx][ny] = true;
            }
        }
    }

    return -1; // 이론적으로 도달하지 못하는 경우는 없음
}

// 테스트 케이스 처리
const testCaseCount = parseInt(input[0]);
const results: number[] = [];
let index = 1;

for (let t = 0; t < testCaseCount; t++) {
    const l = parseInt(input[index++]);
    const start = input[index++].split(" ").map(Number) as [number, number];
    const end = input[index++].split(" ").map(Number) as [number, number];

    results.push(bfs(l, start, end));
}

// 결과 출력
console.log(results.join("\n"));