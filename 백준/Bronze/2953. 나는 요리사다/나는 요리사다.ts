// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 참가자 점수와 최고 점수를 저장할 변수 초기화
let maxScore = 0;
let winner = 0;

for (let i = 0; i < input.length; i++) {
    // 각 참가자의 점수를 공백 기준으로 분리하여 숫자 배열로 변환
    const scores = input[i].split(" ").map(Number);
    
    // 현재 참가자의 점수 합산
    const totalScore = scores.reduce((acc, score) => acc + score, 0);

    // 최대 점수 및 우승자 갱신
    if (totalScore > maxScore) {
        maxScore = totalScore;
        winner = i + 1;  // 1번 참가자부터 시작하므로 인덱스에 1을 더해준다
    }
}

// 우승자와 최고 점수 출력
console.log(winner, maxScore);