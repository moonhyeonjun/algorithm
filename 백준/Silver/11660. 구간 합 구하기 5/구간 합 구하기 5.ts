// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const table: number[][] = [];
for (let i = 1; i <= N; i++) {
    table.push(input[i].split(" ").map(Number));
}

// 2차원 누적합 배열 생성
const prefixSum: number[][] = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

// prefixSum 배열 채우기
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
        prefixSum[i][j] = table[i - 1][j - 1] 
                        + prefixSum[i - 1][j] 
                        + prefixSum[i][j - 1] 
                        - prefixSum[i - 1][j - 1];
    }
}

// M개의 쿼리에 대해 결과 계산
const results: number[] = [];
for (let k = N + 1; k < N + 1 + M; k++) {
    const [x1, y1, x2, y2] = input[k].split(" ").map(Number);

    // (x1, y1)부터 (x2, y2)까지의 부분합 계산
    const sum = prefixSum[x2][y2] 
              - prefixSum[x1 - 1][y2] 
              - prefixSum[x2][y1 - 1] 
              + prefixSum[x1 - 1][y1 - 1];

    results.push(sum);
}

// 결과 출력
console.log(results.join("\n"));