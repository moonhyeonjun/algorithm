// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 주차 요금 데이터 파싱
const [A, B, C] = input[0].split(" ").map(Number);

// 트럭 주차 시간 정보 파싱
const trucks: number[][] = input.slice(1, 4).map(line => line.split(" ").map(Number));

// 주차장 시간 배열 (1~100분)
const timeline: number[] = new Array(101).fill(0);

// 각 트럭의 주차 시간을 타임라인에 반영
for (const [arrive, leave] of trucks) {
    for (let t = arrive; t < leave; t++) {
        timeline[t]++;
    }
}

// 요금 계산
let totalCost = 0;
for (let t = 1; t <= 100; t++) {
    const count = timeline[t];
    if (count === 1) totalCost += A;
    else if (count === 2) totalCost += B * 2;
    else if (count === 3) totalCost += C * 3;
}

// 결과 출력
console.log(totalCost);