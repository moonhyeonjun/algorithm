// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 통화 개수 및 시간 리스트
const N: number = parseInt(input[0]);
const callTimes: number[] = input[1].split(" ").map(Number);

// 요금제 계산 함수
const calcY = (t: number): number => Math.floor(t / 30 + 1) * 10; // 영식 요금제
const calcM = (t: number): number => Math.floor(t / 60 + 1) * 15; // 민식 요금제

// 전체 요금 계산
let totalY: number = callTimes.reduce((sum, t) => sum + calcY(t), 0);
let totalM: number = callTimes.reduce((sum, t) => sum + calcM(t), 0);

// 결과 출력
if (totalY < totalM) {
    console.log(`Y ${totalY}`);
} else if (totalY > totalM) {
    console.log(`M ${totalM}`);
} else {
    console.log(`Y M ${totalY}`);
}