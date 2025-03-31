// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 값 파싱
const N: number = parseInt(input[0]);
const logs: string[] = input.slice(1);

// 채팅방에서 사용된 곰곰티콘의 횟수 계산
let count = 0;
let userSet = new Set<string>();

for (const log of logs) {
    if (log === "ENTER") {
        // 새로운 사람이 입장하면 기존 유저 목록 초기화
        userSet.clear();
    } else {
        // 새로운 유저가 채팅을 입력하면 곰곰티콘 사용 증가
        if (!userSet.has(log)) {
            userSet.add(log);
            count++;
        }
    }
}

// 결과 출력
console.log(count);