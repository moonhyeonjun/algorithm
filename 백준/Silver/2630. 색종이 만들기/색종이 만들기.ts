// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 값 파싱
const N: number = Number(input[0]); // 종이의 한 변의 길이 N
const paper: number[][] = input.slice(1).map(line => line.split(" ").map(Number));

// 결과를 저장할 변수
let whiteCount: number = 0;
let blueCount: number = 0;

/**
 * 특정 영역의 색상이 모두 같은지 확인하고,
 * 그렇다면 해당 색상에 따라 카운트를 증가시키고,
 * 그렇지 않다면 4개의 작은 영역으로 분할하여 재귀적으로 처리하는 함수
 */
function divideAndCount(x: number, y: number, size: number): void {
    const color = paper[x][y];
    let isUniform = true;

    // 해당 영역이 모두 같은 색인지 확인
    for (let i = x; i < x + size; i++) {
        for (let j = y; j < y + size; j++) {
            if (paper[i][j] !== color) {
                isUniform = false;
                break;
            }
        }
        if (!isUniform) break;
    }

    // 모두 같은 색인 경우
    if (isUniform) {
        if (color === 0) {
            whiteCount++;
        } else {
            blueCount++;
        }
    } else {
        // 같은 색이 아닌 경우, 4개의 작은 영역으로 나누어 재귀적으로 처리
        const halfSize = size / 2;
        divideAndCount(x, y, halfSize); // 1사분면
        divideAndCount(x, y + halfSize, halfSize); // 2사분면
        divideAndCount(x + halfSize, y, halfSize); // 3사분면
        divideAndCount(x + halfSize, y + halfSize, halfSize); // 4사분면
    }
}

// 초기 호출: 종이 전체를 처리
divideAndCount(0, 0, N);

// 결과 출력
console.log(whiteCount);
console.log(blueCount);