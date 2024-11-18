// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 번째 줄은 막대기의 개수
const N: number = parseInt(input[0]);

// 나머지 줄은 막대기의 높이 정보
const heights: number[] = input.slice(1).map(Number);

// 오른쪽에서 보이는 막대기의 개수를 계산하는 함수
function countVisibleBars(heights: number[]): number {
    let visibleCount = 0;
    let maxHeight = 0; // 현재까지 가장 높은 막대기의 높이

    // 오른쪽에서 왼쪽으로 순회
    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > maxHeight) {
            // 현재 막대기가 가장 높은 막대기보다 높다면 보임
            visibleCount++;
            maxHeight = heights[i];
        }
    }

    return visibleCount;
}

// 결과 출력
console.log(countVisibleBars(heights));