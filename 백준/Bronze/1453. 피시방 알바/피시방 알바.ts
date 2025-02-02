// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 손님의 수 N
const N: number = parseInt(input[0], 10);

// 각 손님이 원하는 자리 번호 배열
const seats: number[] = input[1].split(" ").map(Number);

// 자리 상태를 나타내는 배열 (초기값은 false로 설정)
const occupied: boolean[] = new Array(101).fill(false);

// 거절당하는 손님 수
let rejectedCount: number = 0;

// 각 손님이 원하는 자리를 확인
for (let i = 0; i < N; i++) {
    const seat: number = seats[i];
    if (occupied[seat]) {
        // 이미 자리가 차지되어 있으면 거절당함
        rejectedCount++;
    } else {
        // 자리가 비어있으면 차지함
        occupied[seat] = true;
    }
}

// 결과 출력
console.log(rejectedCount);