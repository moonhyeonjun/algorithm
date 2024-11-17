// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 번째 줄: 학생 수 N과 한 방에 배정할 수 있는 최대 인원 수 K
const [N, K] = input[0].split(" ").map(Number);

// 방 배정에 필요한 정보를 담을 배열 (학년별 성별 카운트)
const rooms: number[][] = Array.from({ length: 6 }, () => [0, 0]);

// 각 학생 정보 처리
for (let i = 1; i <= N; i++) {
    const [S, Y] = input[i].split(" ").map(Number); // 성별(S), 학년(Y)
    rooms[Y - 1][S]++; // 해당 학년과 성별에 학생 수 추가
}

// 최소 필요한 방 수 계산
let totalRooms = 0;
for (let grade = 0; grade < 6; grade++) {
    for (let gender = 0; gender < 2; gender++) {
        const count = rooms[grade][gender];
        if (count > 0) {
            totalRooms += Math.ceil(count / K); // 한 방에 K명씩 배정
        }
    }
}

// 결과 출력
console.log(totalRooms);