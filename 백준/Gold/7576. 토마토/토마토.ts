// 파일 시스템 모듈을 불러옵니다.
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 상자의 크기 M(가로), N(세로)을 입력 받습니다.
const [M, N] = input[0].split(" ").map(Number);

// 상자의 상태를 저장할 2차원 배열을 만듭니다.
const box: number[][] = [];
for (let i = 1; i <= N; i++) {
    box.push(input[i].split(" ").map(Number));
}

// 방향을 나타내는 배열 (좌, 우, 상, 하)
const directions = [
    [0, -1],  // 좌
    [0, 1],   // 우
    [-1, 0],  // 상
    [1, 0],   // 하
];

// BFS를 위한 큐와 인덱스를 사용한 처리
const queue: [number, number][] = [];
let unripeCount = 0;  // 익지 않은 토마토의 개수
let front = 0;  // 큐에서의 앞쪽 인덱스

// 익은 토마토의 위치를 큐에 넣고, 익지 않은 토마토의 수를 셉니다.
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (box[i][j] === 1) {
            queue.push([i, j]);  // 익은 토마토를 큐에 추가
        } else if (box[i][j] === 0) {
            unripeCount++;  // 익지 않은 토마토 개수 세기
        }
    }
}

// 만약 처음부터 모든 토마토가 익어 있다면 0을 출력합니다.
if (unripeCount === 0) {
    console.log(0);
    process.exit(0);
}

// BFS 탐색
let days = -1;
while (front < queue.length) {
    const size = queue.length - front;
    days++;  // 날짜 증가

    for (let i = 0; i < size; i++) {
        const [x, y] = queue[front++];
        
        // 네 방향 탐색
        for (let [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // 유효한 범위 내에서 아직 익지 않은 토마토가 있으면 익게 만듭니다.
            if (nx >= 0 && nx < N && ny >= 0 && ny < M && box[nx][ny] === 0) {
                box[nx][ny] = 1;  // 익음 표시
                queue.push([nx, ny]);  // 큐에 추가
                unripeCount--;  // 익지 않은 토마토 개수 감소
            }
        }
    }
}

// 모든 토마토가 익었는지 확인하고 결과 출력
if (unripeCount > 0) {
    console.log(-1);  // 익지 않은 토마토가 남아 있으면 -1 출력
} else {
    console.log(days);  // 모든 토마토가 익었으면 걸린 일수를 출력
}