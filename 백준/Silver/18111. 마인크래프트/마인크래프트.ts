// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 파싱
const [N, M, B] = input[0].split(" ").map(Number);
const land: number[][] = input.slice(1).map(row => row.split(" ").map(Number));

let minTime = Infinity;  // 최소 시간
let optimalHeight = 0;   // 최소 시간일 때의 가장 높은 높이

// 높이의 범위는 0 ~ 256
for (let h = 0; h <= 256; h++) {
    let time = 0;
    let inventory = B;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            const height = land[i][j];

            // 블록 제거
            if (height > h) {
                const diff = height - h;
                time += diff * 2;     // 제거는 2초
                inventory += diff;
            }
            // 블록 추가
            else if (height < h) {
                const diff = h - height;
                time += diff * 1;     // 추가는 1초
                inventory -= diff;
            }
        }
    }

    // 인벤토리가 음수면 해당 높이로 작업 불가능
    if (inventory < 0) continue;

    // 최소 시간일 경우, 더 높은 높이를 선택
    if (time < minTime || (time === minTime && h > optimalHeight)) {
        minTime = time;
        optimalHeight = h;
    }
}

// 결과 출력
console.log(`${minTime} ${optimalHeight}`);