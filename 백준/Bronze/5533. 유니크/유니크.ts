// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 참가자 수 N
const N: number = parseInt(input[0]);

// 참가자들의 숫자 배열
const players: number[][] = input.slice(1).map(line => line.split(" ").map(Number));

// 3번 게임 각각의 점수를 저장할 배열
const scores: number[] = new Array(N).fill(0);

// 3번의 게임을 진행 (1번째, 2번째, 3번째 게임)
for (let round = 0; round < 3; round++) {
    const roundMap = new Map<number, number>(); // 해당 숫자의 등장 횟수 저장

    // 각 플레이어의 해당 라운드 숫자 기록
    for (let i = 0; i < N; i++) {
        const num = players[i][round];
        roundMap.set(num, (roundMap.get(num) || 0) + 1);
    }

    // 점수 계산
    for (let i = 0; i < N; i++) {
        const num = players[i][round];
        if (roundMap.get(num) === 1) { // 해당 숫자가 유일하면 점수 획득
            scores[i] += num;
        }
    }
}

// 결과 출력
console.log(scores.join("\n"));