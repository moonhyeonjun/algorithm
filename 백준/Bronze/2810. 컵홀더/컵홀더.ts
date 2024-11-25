// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 데이터 파싱
const N: number = parseInt(input[0]); // 좌석 수
const seats: string = input[1]; // 좌석 배치

// 컵홀더 개수 계산
let cupHolderCount = 1; // 첫 번째 좌석 시작 컵홀더
for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 'S') {
        cupHolderCount++; // 일반 좌석은 개인 컵홀더 추가
    } else if (seats[i] === 'L') {
        cupHolderCount++; // 커플석 시작 시 컵홀더 추가
        i++; // 커플석은 두 좌석이 하나로 처리되므로 한 칸 건너뜀
    }
}

// 최대로 사용할 수 있는 사람 수는 컵홀더와 좌석 수 중 작은 값
console.log(Math.min(N, cupHolderCount));